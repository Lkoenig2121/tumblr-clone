# Tumblr Clone

A fully responsive Tumblr clone built with Next.js, TypeScript, Express, and Tailwind CSS.

## Features

- ✅ **Authentication System**: Login and signup functionality with JWT tokens
- ✅ **Responsive Design**: Optimized for desktop, tablet, and mobile (breakpoint at 768px)
- ✅ **Modern UI**: Clean, modern interface matching Tumblr's dark theme
- ✅ **Post Feed**: Display posts with likes, reblogs, and comments
- ✅ **Trending Tags**: Showcases trending topics
- ✅ **Trending Blogs**: Sidebar with popular blogs
- ✅ **Demo Credentials**: Pre-configured demo account for easy testing

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS
- **Authentication**: JWT (jsonwebtoken), bcryptjs
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development servers:
```bash
npm run dev
```

This will start:
- Next.js frontend on `http://localhost:3000`
- Express backend on `http://localhost:3001`

### Demo Account

Use these credentials to login:
- **Username**: `demo`
- **Password**: `demo123`

## Project Structure

```
tumblr/
├── app/                    # Next.js app directory
│   ├── dashboard/          # Main dashboard page
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (redirects)
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Post.tsx            # Post component
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── TrendingTag.tsx     # Trending tag component
│   └── TrendingBlog.tsx    # Trending blog component
├── contexts/               # React contexts
│   └── AuthContext.tsx     # Authentication context
├── server/                 # Express backend
│   └── index.ts            # Server entry point
└── public/                 # Static assets
```

## Responsive Design

The application features a fully responsive design with three layout modes:

- **Desktop (1024px+)**: 3-column layout (trending tags, posts, trending blogs)
- **Tablet (768px-1023px)**: 2-column layout (trending tags + posts)
- **Mobile (<768px)**: 1-column layout with stacked content

## API Endpoints

### Authentication

- `POST /api/auth/login` - Login with username and password
- `POST /api/auth/signup` - Create a new account
- `GET /api/auth/verify` - Verify JWT token

## Features Breakdown

### Authentication
- Secure JWT-based authentication
- Password hashing with bcryptjs
- Persistent login sessions
- Protected routes

### Dashboard
- Dynamic post feed
- Interactive like/reblog/comment buttons
- Trending topics display
- Sidebar navigation
- Responsive grid layout

### Posts
- User avatars (color-coded)
- Post content with text
- Hashtags support
- Engagement metrics (notes, reblogs, likes)
- Interactive like button

## Development

### Run Frontend Only
```bash
npm run dev:next
```

### Run Backend Only
```bash
npm run dev:server
```

### Build for Production
```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  'tumblr-dark': '#001935',
  'tumblr-darker': '#00172d',
  'tumblr-blue': '#00b8ff',
  'tumblr-purple': '#a18dce',
}
```

### Adding Posts

Posts are currently hardcoded in `app/dashboard/page.tsx`. To add more posts, simply add objects to the `posts` array:

```typescript
{
  id: 'unique-id',
  username: 'username',
  content: 'Post content here',
  tags: ['tag1', 'tag2'],
  notes: 0,
  reblogs: 0,
  likes: 0,
}
```

## Future Enhancements

Potential features to add:
- Database integration (MongoDB, PostgreSQL)
- Image/video uploads
- Real-time notifications
- Search functionality
- User profiles
- Create/edit posts
- Follow/unfollow users
- Direct messaging
- Reblog functionality
- Infinite scroll

## License

This is a demo project created for educational purposes.

## Support

For issues or questions, please open an issue in the repository.
