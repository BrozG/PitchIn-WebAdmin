# 🎛️ Pitch In Admin Dashboard

> *The conductor's podium for the symphony of connections.*

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Operational-C9A84C?style=for-the-badge)]()

</div>

---

## 🎯 Overview

The **Pitch In Admin Dashboard** is the control center for the Pitch In platform—a sophisticated web interface for administrators to manage founder applications, monitor platform health, and orchestrate the investor-founder matching ecosystem. Built with Next.js 14 (App Router) and TypeScript, it delivers real-time insights with a dark theme that respects late-night review sessions.

### ✨ Key Features

- **📊 Real-Time Application Queue**: Live stream of founder applications awaiting review
- **⚡ One-Click Approvals/Rejections**: Quick decisions with thoughtful feedback templates
- **📈 Analytics Dashboard**: Platform health, match rates, revenue metrics
- **👥 User Management**: Comprehensive user profiles and moderation tools
- **🔔 Real-Time Notifications**: Instant alerts for critical platform events
- **🎨 Dark Theme Design**: Optimized for extended viewing sessions
- **📱 Responsive Layout**: Works seamlessly on desktop and tablet
- **🔍 Advanced Search & Filtering**: Find exactly what you're looking for

## 🖼️ Dashboard Screenshots

| Application Queue | Analytics Dashboard | User Management |
|-------------------|---------------------|-----------------|
| <img src="../resource/web-admin-queue.png" width="300"> | <img src="../resource/web-admin-dashboard.png" width="300"> | <img src="../resource/web-admin-users.png" width="300"> |

*Note: Add your actual screenshots to the resource directory and update paths*

---

## 🏗️ Architecture

```
web-admin/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main dashboard page
│   ├── globals.css          # Global styles and Tailwind
│   └── favicon.ico          # Dashboard favicon
├── components/              # Reusable React components
│   ├── ApplicationCard.tsx  # Founder application card
│   ├── StatsCard.tsx        # Metric display card
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── NotificationBell.tsx # Real-time notifications
├── lib/                     # Utility libraries
│   ├── api.ts              # API client configuration
│   ├── utils.ts            # Helper functions
│   └── types.ts            # TypeScript definitions
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- **Backend API** running (see main [PitchIn repository](https://github.com/BrozG/PitchIn))
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

### Installation & Running

```bash
# Clone this repository
git clone https://github.com/BrozG/PitchIn-WebAdmin.git
cd PitchIn-WebAdmin

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Access Points
- **Development**: `http://localhost:3000`
- **Production**: Your deployed URL
- **API Documentation**: `http://localhost:8000/docs` (backend)

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_ADMIN_SECRET=your_admin_secret_key
```

### Backend Integration
The dashboard connects to:
- **FastAPI Backend**: `http://localhost:8000` (or your deployed URL)
- **Supabase**: Real-time subscriptions for live updates
- **Authentication**: JWT-based admin authentication

---

## 🎨 Design System

### Color Palette
- `#080C14` - **Deep Space**: Primary background
- `#C9A84C` - **Golden Accent**: Primary actions, highlights
- `#1A1F2C` - **Night Structure**: Cards, modals
- `#2A2F3C` - **Subtle Elevation**: Hover states
- `#FFFFFF` - **Pure White**: Text on dark backgrounds
- `#94A3B8` - **Cool Gray**: Secondary text, borders

### Typography
- **Primary Font**: Inter (via `next/font`)
- **Monospace**: JetBrains Mono for code/data
- **Font Weights**: Regular (400), Medium (500), Semi-bold (600), Bold (700)

### Components
- **Glassmorphism Cards**: Frosted glass effect with backdrop blur
- **Animated Transitions**: Smooth state changes with Framer Motion
- **Loading Skeletons**: Content placeholders during data fetch
- **Toast Notifications**: Non-intrusive feedback messages

---

## 📊 Dashboard Sections

### 1. **Application Queue**
- Real-time list of founder applications
- Filter by status (pending, approved, rejected)
- Sort by submission date, funding amount, industry
- Bulk actions for efficient processing

### 2. **Analytics Dashboard**
- **Platform Health**: Active users, match rate, revenue
- **Geographic Distribution**: Founder/investor locations
- **Tier Distribution**: Subscription plan breakdown
- **Conversion Funnel**: Onboarding completion rates

### 3. **User Management**
- Search users by name, email, role
- View detailed profiles with activity history
- Moderate content and manage disputes
- Send system notifications to users

### 4. **System Configuration**
- Adjust matching algorithm parameters
- Configure email templates
- Manage payment gateway settings
- Set platform-wide announcements

---

## 🔌 API Integration

### Key Endpoints
```typescript
// Authentication
POST /admin/login
  - Request: { email, password }
  - Response: { access_token, user }

GET  /admin/verify
  - Headers: Authorization: Bearer <token>
  - Response: { authenticated: true, user }

// Applications
GET  /admin/applications/pending
  - Query: ?page=1&limit=20
  - Response: Paginated list of pending applications

POST /admin/applications/{id}/approve
  - Request: { feedback? }
  - Response: { status: "approved" }

POST /admin/applications/{id}/reject
  - Request: { feedback? }
  - Response: { status: "rejected" }

// Analytics
GET  /admin/analytics/overview
  - Response: { active_users, match_rate, revenue }

GET  /admin/analytics/users
  - Query: ?timeframe=30d
  - Response: User growth metrics

GET  /admin/analytics/revenue
  - Query: ?timeframe=month
  - Response: Revenue breakdown by source

// Users
GET  /admin/users
  - Query: ?search=john&role=investor
  - Response: Paginated user list

GET  /admin/users/{id}
  - Response: Full user profile with activity history

POST /admin/users/{id}/suspend
  - Request: { reason, duration }
  - Response: { status: "suspended" }

// System
GET  /admin/system/health
  - Response: System status with metrics

POST /admin/system/announcement
  - Request: { title, message, level }
  - Response: { announcement_id }
```

### Real-Time Features
- **Supabase Realtime**: Live application queue updates (channels: 'applications')
- **WebSocket Connections**: Real-time notification delivery (ws://localhost:8000/ws/admin)
- **Server-Sent Events**: Analytics dashboard updates (/admin/analytics/stream)

---

## 🛠️ Development

### Available Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check

# Run tests
npm test
```

### Project Structure Best Practices
- **Components**: Reusable UI pieces in `app/components/`
- **Layouts**: Page layouts in `app/layouts/`
- **Pages**: Route handlers in `app/` (Next.js App Router)
- **Lib**: Utilities and API clients in `app/lib/`
- **Styles**: Global styles in `app/globals.css`

---

## 🧪 Testing

### Unit Tests (Jest)
```bash
npm test
```

### Component Tests (React Testing Library)
```bash
npm run test:components
```

### E2E Tests (Playwright)
```bash
# Run all tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui

# Run specific test
npm run test:e2e -- tests/admin-flow.spec.ts
```

### Test Coverage
```bash
npm run test:coverage
```

---

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker Deployment
```dockerfile
# Build
docker build -t pitchin-admin .

# Run
docker run -p 3000:3000 pitchin-admin
```

### Environment-Specific Builds
```bash
# Development
npm run build:dev

# Staging
npm run build:staging

# Production
npm run build:prod
```

### Deployment Best Practices
- Use separate environments (dev, staging, prod)
- Automate deployments with CI/CD pipelines
- Enable preview deployments for PRs
- Monitor deployments with health checks

---

## 🔒 Security

### Authentication & Authorization
- **JWT Tokens**: Secure admin authentication
- **Role-Based Access**: Different permission levels
- **Session Management**: Secure cookie storage
- **Rate Limiting**: API call throttling

### Data Protection
- **Input Sanitization**: All user inputs are validated
- **XSS Protection**: Content Security Policy headers
- **CSRF Protection**: Token-based request validation
- **HTTPS Enforcement**: All traffic over SSL/TLS

### Audit Logging
- **Admin Actions**: All approve/reject actions logged
- **User Modifications**: Profile changes tracked
- **System Changes**: Configuration updates recorded
- **Export Capability**: Logs exportable for compliance

---

## 📈 Monitoring & Analytics

### Built-in Analytics
- **Real-Time Metrics**: Active sessions, API response times
- **Error Tracking**: Client-side and server-side errors
- **Performance Monitoring**: Page load times, Core Web Vitals
- **User Behavior**: Navigation patterns, feature usage

### Integration Options
- **Google Analytics**: For marketing insights (set GA_ID in env)
- **Sentry**: For error tracking (set SENTRY_DSN in env)
- **LogRocket**: For session replay (set LOGROCKET_ID in env)
- **Custom Dashboards**: For business-specific metrics

### Setup Instructions
1. Add your analytics service IDs to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
NEXT_PUBLIC_LOGROCKET_ID=app-id/xxxxx
```
2. Restart the dev server
3. Verify data appears in your analytics dashboards

---

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot connect to backend API"**
   ```bash
   # Check backend is running
   curl http://localhost:8000/health
   
   # Verify environment variables
   echo $NEXT_PUBLIC_API_URL
   ```

2. **"Supabase realtime not working"**
   - Verify Supabase project is active
   - Check realtime is enabled for tables
   - Confirm environment variables are correct

3. **"Build errors with TypeScript"**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   
   # Reinstall dependencies
   rm -rf node_modules
   npm install
   
   # Run type check
   npm run type-check
   ```

4. **"Slow performance in development"**
   ```bash
   # Increase Node.js memory limit
   NODE_OPTIONS=--max-old-space-size=4096 npm run dev
   
   # Use turbo mode (experimental)
   TURBOPACK=1 npm run dev
   ```

---

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Commit Messages**: Conventional commits format

---

## 📄 License

This project is part of the **Pitch In** platform. See the main repository for licensing information.

---

## 🙏 Acknowledgments

- **Next.js Team** for an amazing React framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for utility-first styling
- **Supabase** for backend services
- **All administrators** who help maintain platform quality

---

<div align="center">
  <br>
  <h3>Ready to orchestrate connections?</h3>
  <p>Launch the dashboard. Review applications. Shape the future of fundraising.</p>
  <br>
  <img src="https://img.shields.io/badge/Platform-Web_Admin-080C14" alt="Platform">
  <img src="https://img.shields.io/badge/Theme-Dark_Mode-C9A84C" alt="Theme">
  <img src="https://img.shields.io/badge/Real_Time-Live_Updates-1A1F2C" alt="Real Time">
  <br><br>
  <em>Pitch In Admin — Where quality connections are curated</em>
</div>
