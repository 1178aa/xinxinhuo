const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const server = http.createServer((req, res) => {
  console.log('收到请求:', req.url)
  
  const parsedUrl = url.parse(req.url, true)
  const { bindCode, uid } = parsedUrl.query
  
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'no-cache')
  
  // 读取HTML文件
  const htmlPath = path.join(__dirname, '新欣火2/uniCloud-aliyun/cloudfunctions/wechat-auth/index.html')
  
  try {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8')
    
    // 替换绑定信息
    if (bindCode && uid) {
      htmlContent = htmlContent.replace('加载中...', bindCode)
    }
    
    res.writeHead(200)
    res.end(htmlContent)
  } catch (error) {
    console.error('读取HTML文件失败:', error)
    res.writeHead(500)
    res.end('<html><body><h1>服务器错误</h1><p>' + error.message + '</p></body></html>')
  }
})

const PORT = 3001
server.listen(PORT, () => {
  console.log(`微信授权服务器运行在 http://localhost:${PORT}`)
  console.log(`测试URL: http://localhost:${PORT}/wechat-auth?bindCode=test123&uid=test456`)
})