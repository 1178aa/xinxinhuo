# 🚀 新欣火企业官网 - 快速启动指南

## ⚡ 一键启动

### Vue3现代化版本（推荐）
```bash
# 1. 进入项目目录
cd "D:\代码\新欣火企业官网"

# 2. 安装依赖
npm install

# 3. 启动Vue3开发服务器
npm run dev
```

## 🌐 访问地址

### Vue3版本 (推荐) 🚀
- **开发服务器**: http://localhost:3002 (自动选择可用端口)
- **生产构建**: `npm run build` 后访问 `dist/` 目录
- **特色功能**: 
  - ✨ 动态背景和动画效果
  - 🎨 现代化UI设计
  - 📊 实时数据统计
  - 🔄 响应式布局

| 系统 | 地址 | 描述 |
|------|------|------|
| 🏠 **Vue3首页** | http://localhost:3002 | Vue3现代化官网 |
| 🔥 **新火通系统** | http://localhost:3002/xinhuotong | Vue3管理系统 |
| 📊 **数据大屏** | http://localhost:3002/dashboard | Vue3数据可视化 |
| ℹ️ **关于我们** | http://localhost:3002/about | 公司介绍页面 |

### 传统版本 (兼容) 📱
- **开发服务器**: http://localhost:3001
- **静态文件**: 直接打开 `index.html`
- **特色功能**:
  - 📋 完整的管理系统功能
  - 💾 真实的数据和API集成
  - 🎯 成熟的功能模块


## ✅ 启动成功标志

### Vue3版本启动成功标志：
```
  VITE v5.4.20  ready in 436 ms
  Port 3000 is in use, trying another one...
  Port 3001 is in use, trying another one...
  ➜  Local:   http://localhost:3002/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 传统版本启动成功标志：


## 🛠️ 环境要求

- **Node.js**: 18.x 或更高版本
- **浏览器**: Chrome, Firefox, Safari, Edge (最新版本)

## 🚀 技术栈

### 前端技术栈
- **Vue 3.4+** - 渐进式JavaScript框架
- **TypeScript 5.3+** - 类型安全的JavaScript超集
- **Vite 5.0+** - 极速构建工具
- **Pinia 2.1+** - 现代状态管理
- **Vue Router 4.2+** - 官方路由管理器
- **Element Plus 2.4+** - Vue 3 UI组件库

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Husky** - Git钩子管理
- **Vitest** - 单元测试框架

### 构建优化
- **Tree-shaking** - 自动移除未使用代码
- **代码分割** - 按需加载优化
- **资源压缩** - Gzip/Brotli压缩
- **CDN加速** - 静态资源加速

## ❓ 常见问题

### Vue3版本问题

#### 依赖安装失败
```bash
# 清除缓存重新安装
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript类型错误
```bash
# 检查类型
npm run type-check

# 自动修复
npm run lint
```

#### 构建失败
```bash
# 检查构建
npm run build

# 预览构建结果
npm run preview
```

### 传统版本问题

#### 端口被占用
```bash
# 停止现有进程
Stop-Process -Name node -ErrorAction SilentlyContinue
# 重新启动
node tools/build-scripts/dev-server.js
```

#### 页面无法访问
1. 确认服务器已启动
2. 检查访问地址是否正确
3. 清除浏览器缓存 (Ctrl+F5)

#### Logo 不显示
1. 检查 `shared/static/1.png` 文件是否存在
2. 强制刷新浏览器
3. 检查控制台错误信息

## 📚 详细文档

- 📖 [完整启动指南](docs/PROJECT_STARTUP_GUIDE.md)
- 🛠️ [开发标准](docs/DEVELOPMENT_STANDARDS.md)
- 📋 [项目守则](项目守则.txt)

---

**💡 提示**: 首次启动可能需要几秒钟时间加载资源，请耐心等待。
