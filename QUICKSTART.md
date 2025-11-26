# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Application
```bash
npm run dev
```

Or use the startup script:
```bash
./start.sh
```

### 3. Open Your Browser

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

## 🔑 Login Credentials

Use these credentials to login:

- **Username**: `demo`
- **Password**: `demo123`

## 📱 Responsive Design

The application automatically adapts to different screen sizes:

- **Desktop (1024px+)**: Full 3-column layout
  - Left: Trending tags
  - Center: Post feed
  - Right: Trending blogs & sponsored content

- **Tablet (768px-1023px)**: 2-column layout
  - Left: Trending tags
  - Right: Post feed
  - Trending blogs hidden

- **Mobile (<768px)**: Single column
  - Trending tags at top
  - Post feed below
  - All sidebars hidden

## ✨ Features

- ✅ User authentication (login/signup)
- ✅ Post feed with likes, reblogs, comments
- ✅ Trending tags and topics
- ✅ Trending blogs sidebar
- ✅ Fully responsive design
- ✅ Dark theme UI
- ✅ Interactive elements

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend |
| `npm run dev:next` | Start only frontend |
| `npm run dev:server` | Start only backend |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run linter |

## 📝 Creating New Accounts

You can create new accounts by clicking "Sign up" on the login page. All user data is stored in memory (will be lost on server restart).

## 🎨 Customization

- Colors: Edit `tailwind.config.ts`
- Posts: Edit `app/dashboard/page.tsx`
- Layout: Edit components in `components/` folder

## 🐛 Troubleshooting

**Ports already in use?**
```bash
# Kill processes on ports 3000 and 3001
lsof -ti:3000,3001 | xargs kill -9
```

**Dependencies not installed?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Server won't start?**
Make sure Node.js 18+ is installed:
```bash
node --version
```

## 📚 Learn More

See [README.md](./README.md) for detailed documentation.

---

**Enjoy exploring your Tumblr clone! 🎉**

