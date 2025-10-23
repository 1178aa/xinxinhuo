// 后端验证码服务示例 (Node.js + Express + Redis)

const express = require('express')
const redis = require('redis')
const crypto = require('crypto')

const app = express()
app.use(express.json())

// Redis连接
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  password: 'your_redis_password'
})

redisClient.on('error', (err) => {
  console.error('Redis连接错误:', err)
})

// 生成6位随机验证码
const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// 发送验证码API
app.post('/sms-service', async (req, res) => {
  try {
    const { phone, type, action } = req.body
    
    if (action === 'send_code') {
      // 生成验证码
      const code = generateCode()
      
      // 存储验证码到Redis，设置5分钟过期
      const key = `sms_code:${phone}:${type}`
      await redisClient.setex(key, 300, code) // 300秒 = 5分钟
      
      // 这里调用短信服务商API发送短信
      // await sendSMS(phone, code)
      
      console.log(`验证码已发送: ${phone} -> ${code}`)
      
      res.json({
        code: 0,
        message: '验证码发送成功',
        data: {
          phone,
          expireTime: 300 // 5分钟
        }
      })
    } else {
      res.json({
        code: 1,
        message: '无效的操作类型'
      })
    }
  } catch (error) {
    console.error('发送验证码失败:', error)
    res.json({
      code: 1,
      message: '发送失败，请重试'
    })
  }
})

// 验证验证码API
app.post('/user-service', async (req, res) => {
  try {
    const { action, phone, code } = req.body
    
    if (action === 'bind_phone') {
      // 从Redis获取验证码
      const key = `sms_code:${phone}:bind_phone`
      const storedCode = await redisClient.get(key)
      
      if (!storedCode) {
        res.json({
          code: 1,
          message: '验证码已过期，请重新获取'
        })
        return
      }
      
      if (code !== storedCode) {
        res.json({
          code: 1,
          message: '验证码错误，请重新输入'
        })
        return
      }
      
      // 验证码正确，删除Redis中的验证码（防止重复使用）
      await redisClient.del(key)
      
      // 这里执行绑定手机号的业务逻辑
      // await bindPhoneToUser(phone, userId)
      
      res.json({
        code: 0,
        message: '手机号绑定成功',
        data: {
          phone
        }
      })
    } else {
      res.json({
        code: 1,
        message: '无效的操作类型'
      })
    }
  } catch (error) {
    console.error('验证验证码失败:', error)
    res.json({
      code: 1,
      message: '验证失败，请重试'
    })
  }
})

// 启动服务器
app.listen(3001, () => {
  console.log('验证码服务运行在端口3001')
})

// 短信服务商API调用示例
const sendSMS = async (phone, code) => {
  // 阿里云短信服务示例
  const Core = require('@alicloud/pop-core')
  
  const client = new Core({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  })
  
  const params = {
    PhoneNumbers: phone,
    SignName: '新欣火教育',
    TemplateCode: 'SMS_123456789',
    TemplateParam: JSON.stringify({ code })
  }
  
  try {
    const result = await client.request('SendSms', params, {
      method: 'POST'
    })
    console.log('短信发送结果:', result)
    return result
  } catch (error) {
    console.error('短信发送失败:', error)
    throw error
  }
}

module.exports = app
