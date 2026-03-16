# DevPulse 📊

> **Track your developer journey with real-time GitHub analytics and AI-powered insights**

A full-stack analytics platform that transforms your GitHub activity into actionable insights. Built with Next.js 15, PostgreSQL, Redis, and Google Gemini AI.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://dev-pulse-production.up.railway.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)

![DevPulse Dashboard](./public/screenshot.png)
![AI Insights](./public/ai-insights.png)
![Charts](./public/charts.png)

## ✨ Features

### 🔄 Real-time GitHub Sync

- Automatic sync of repositories, commits, pull requests, and issues
- Background job processing with BullMQ
- Incremental updates to minimize API usage
- WebSocket live updates

### 📈 Advanced Analytics

- **Activity Dashboard** - Track commits, PRs, issues, and coding time
- **Productivity Trends** - Visualize your coding patterns over time
- **Language Breakdown** - See which languages you use most
- **Best Coding Time Analysis** - Discover your peak productivity hours
- **Repository Insights** - Detailed stats for each repo

### 🤖 AI-Powered Insights

- **Weekly Summaries** - Get AI-generated weekly activity reports
- **Productivity Analysis** - Personalized recommendations
- **Code Pattern Recognition** - Identify your coding habits
- **Natural Language Queries** - Ask questions in plain English
- **Streaming Responses** - Real-time AI generation

### ⚡ Performance & Scalability

- **Multi-level Caching** - Redis cache with intelligent TTL
- **Rate Limiting** - Protect API endpoints from abuse
- **GraphQL API** - Type-safe, efficient data fetching
- **Real-time Updates** - WebSocket subscriptions
- **Optimized Queries** - Database indexing and query optimization

### 📊 Data Export

- Export analytics as CSV or JSON
- Customizable date ranges
- Multiple export types (overview, activities, repos, stats)

## 🚀 Tech Stack

### Frontend

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **GraphQL**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **Real-time**: [Socket.io Client](https://socket.io/)

### Backend

- **Framework**: Next.js API Routes
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Cache**: [Redis](https://redis.io/)
- **Jobs**: [BullMQ](https://docs.bullmq.io/)
- **Auth**: [Better Auth](https://www.better-auth.com/)
- **GraphQL**: [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- **WebSocket**: [Socket.io](https://socket.io/)
- **AI**: [Google Gemini API](https://ai.google.dev/)

### DevOps

- **Deployment**: [Railway](https://railway.app/)
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Monitoring**: Railway Logs

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** 14+
- **Redis** 6+
- **GitHub OAuth App** ([Create one](https://github.com/settings/developers))
- **Google Gemini API Key** ([Get one](https://ai.google.dev/))

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Prefna-Vagheni/dev-pulse
cd devpulse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/devpulse"

# Redis
REDIS_URL="redis://localhost:6379"

# GitHub OAuth
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Auth
BETTER_AUTH_SECRET="your_random_secret_key_here"
BETTER_AUTH_URL="http://localhost:3000"

# Google Gemini AI
GEMINI_API_KEY="your_gemini_api_key"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### 4. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npm run db:seed
```

### 5. Start Redis

```bash
# Using Docker
docker run -d -p 6379:6379 redis:latest

# Or using Redis CLI
redis-server
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Setup

### Using Docker Compose

```bash
# Start all services (app, PostgreSQL, Redis)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment for Docker

Create a `.env` file for Docker:

```bash
DATABASE_URL="postgresql://postgres:postgres@db:5432/devpulse"
REDIS_URL="redis://redis:6379"
# ... other environment variables
```

## 📚 Project Structure

```
devpulse/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── ai/              # AI insights endpoints
│   │   ├── analytics/       # Analytics endpoints
│   │   ├── auth/            # Authentication
│   │   ├── export/          # Data export
│   │   ├── github/          # GitHub sync
│   │   └── graphql/         # GraphQL API
│   ├── dashboard/           # Dashboard pages
│   ├── login/               # Login page
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ai/                  # AI-related components
│   ├── analytics/           # Analytics components
│   ├── charts/              # Chart components
│   ├── github/              # GitHub components
│   └── ui/                  # shadcn/ui components
├── lib/                     # Utility libraries
│   ├── ai/                  # AI integration (Gemini)
│   ├── analytics/           # Analytics service
│   ├── auth/                # Authentication utilities
│   ├── cache/               # Redis cache
│   ├── github/              # GitHub API client
│   ├── graphql/             # GraphQL schema & resolvers
│   └── workers/             # Background jobs
└── hooks/                   # React hooks
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
├── public/                      # Static files
├── docker-compose.yml           # Docker services
├── Dockerfile                   # Docker configuration
└── package.json                 # Dependencies
```

## 🔑 Key Features Explained

### GitHub Sync Architecture

```
┌─────────────┐
│    User     │
│  Dashboard  │
└──────┬──────┘
       │ Trigger Sync
       ▼
┌─────────────┐
│  BullMQ Job │
└──────┬──────┘
       │ Fetch Data
       ▼
┌─────────────┐
│  GitHub API │
└──────┬──────┘
       │ Parse
       ▼
┌─────────────┐
│ PostgreSQL  │
└──────┬──────┘
       │ Cache
       ▼
┌─────────────┐
│    Redis    │
└──────┬──────┘
       │ Notify
       ▼
┌─────────────┐
│  WebSocket  │
└─────────────┘
```

### Caching Strategy

```typescript
// Multi-level caching with different TTLs
const CacheTTL = {
  SHORT: 300, // 5 minutes - frequently changing data
  MEDIUM: 3600, // 1 hour - analytics data
  LONG: 86400, // 24 hours - repository info
  VERY_LONG: 604800, // 7 days - historical data
};
```

### AI Insight Types

1. **Weekly Summary** - Overview of your week's activity
2. **Productivity Analysis** - Personalized productivity insights
3. **Language Recommendations** - Suggestions based on your language usage
4. **Code Patterns** - Analysis of your coding habits
5. **Achievements** - Celebrate your milestones
6. **Natural Language Query** - Ask anything about your data

## 🎨 Customization

### Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
        50: '#...',
        // ... other shades
      },
    },
  },
}
```

### Add New Insight Types

1. Create a new prompt in `src/lib/ai/prompts.ts`
2. Add the type to `InsightType` enum
3. Update the UI in `src/components/ai/insight-generator.tsx`

### Customize Analytics

Add new metrics in `src/lib/analytics/service.ts`:

```typescript
async getCustomMetric() {
  // Your custom analytics logic
  return await this.prisma.yourModel.findMany({...});
}
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests with Playwright
npm run test:e2e

# Run E2E tests in UI mode
npm run test:e2e:ui
```

## 📊 Database Schema

### Key Models

- **User** - User accounts and profiles
- **Repository** - GitHub repositories
- **ActivityEvent** - Individual coding events
- **DailyStat** - Aggregated daily statistics
- **AIInsight** - Cached AI-generated insights
- **SyncJob** - Background sync job tracking

See `prisma/schema.prisma` for the complete schema.

## 🚢 Deployment

### Deploy to Railway

1. **Create a Railway account** at [railway.app](https://railway.app)

2. **Create a new project** and add services:
   - PostgreSQL database
   - Redis instance
   - Web service (your app)

3. **Set environment variables** in Railway dashboard

4. **Connect your GitHub repository**

5. **Deploy**:
   ```bash
   railway up
   ```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Note**: You'll need to provision PostgreSQL and Redis separately (e.g., Supabase, Upstash).

## 🔧 Configuration

### GitHub OAuth App Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: DevPulse
   - **Homepage URL**: `http://localhost:3000` (or your production URL)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env.local`

### Google Gemini API Setup

1. Go to [Google AI Studio](https://ai.google.dev/)
2. Click "Get API Key"
3. Create a new API key
4. Copy the key to your `.env.local`

## 📈 Performance

- **Cache Hit Rate**: ~90% on analytics endpoints
- **API Response Time**: <100ms (cached), <500ms (uncached)
- **Page Load Time**: <2s (initial), <500ms (subsequent)
- **Database Queries**: Optimized with indexes and select statements
- **Background Jobs**: Process 1000+ events/minute

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Use conventional commits
- Ensure all tests pass before submitting PR

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Better Auth](https://www.better-auth.com/) for authentication
- [Google Gemini](https://ai.google.dev/) for AI capabilities
- [Railway](https://railway.app/) for deployment platform

## 📧 Contact

Prefna Vagheni - [@prefnavagheni](https://twitter.com/prefnavagheni)

Project Link: [https://github.com/prefna-vagheni/devpulse](https://github.com/prefna-vagheni/devpulse)

Live Demo: [https://dev-pulse-production.up.railway.app](https://dev-pulse-production.up.railway.app)

## 🗺️ Roadmap

- [ ] Team collaboration features
- [ ] Goal tracking and achievements
- [ ] Mobile app (React Native)
- [ ] GitHub Actions integration
- [ ] Slack/Discord notifications
- [ ] Custom dashboards
- [ ] Public profile pages
- [ ] API for third-party integrations

## ⚠️ Troubleshooting

### Common Issues

**Issue**: `Prisma Client is not ready`

```bash
# Solution: Regenerate Prisma client
npx prisma generate
```

**Issue**: `Redis connection failed`

```bash
# Solution: Check Redis is running
redis-cli ping
# Should return: PONG
```

**Issue**: `GitHub OAuth not working`

```bash
# Solution: Check callback URL matches exactly
# GitHub OAuth App settings must match BETTER_AUTH_URL
```

**Issue**: `AI insights timing out`

```bash
# Solution: Check Gemini API key and quota
# Or increase timeout in fetch calls
```

## 📖 Documentation

- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guide](./docs/CONTRIBUTING.md)

---

<!-- **Built with ❤️ by developers, for developers** -->

⭐ Star this repo if you find it helpful!
