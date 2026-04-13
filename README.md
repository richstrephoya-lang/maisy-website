# Maisy's Multiverse 🌟

A comprehensive digital platform for children's books featuring Maisy, with interactive games, secure story downloads, paperback purchases, and character merchandise.

## Features

### 📚 Story Management
- Standalone stories with age-progressive character development
- Downloadable PDFs with DRM protection (no third-party sharing)
- Beautiful story showcase with descriptions and cover art
- Teachable moments integrated naturally into narratives

### 🎮 Interactive Games
- Educational games with embedded teachable goals
- Age-appropriate content and difficulty levels
- Reward system to encourage learning
- Safe, monitored gameplay environment

### 🛡️ Safety & Age Verification
- Mandatory age verification for all users
- Parent/Guardian account creation and approval workflows
- Content filtering based on age groups
- No direct child-to-child interactions
- Parental controls and monitoring dashboard

### 📖 Store Integration
- Stripe integration for paperback purchases
- Print-on-demand fulfillment
- Secure checkout process
- Order tracking and management

### 🎁 Merchandise Store
- Character merchandise (clothing, lunchboxes, toys, stationery)
- Custom print-on-demand integration
- Size and variant selection
- Inventory management

### 🌍 World Exploration
- Interactive world map of Maisy's universe
- Character profiles and backstories
- Timeline and progression tracker
- Lore and world-building content

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js with age verification
- **Payments**: Stripe for books & merchandise
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Email**: SendGrid for notifications
- **Hosting**: Vercel

## Project Structure

```
maisy-website/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── stories/              # Story management
│   │   ├── games/                # Game data & logic
│   │   ├── merchandise/          # Product management
│   │   ├── payments/             # Stripe webhooks
│   │   └── age-verification/     # Age verification logic
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   ├── age-verify/
│   │   └── parent-consent/
│   ├── (user)/                   # User-facing pages
│   │   ├── dashboard/            # User dashboard
│   │   ├── my-stories/           # Downloaded stories
│   │   ├── my-games/             # Game progress
│   │   ├── shop/                 # Merchandise & books
│   │   ├── world/                # World exploration
│   │   └── profile/              # User profile
│   ├── (admin)/                  # Admin pages
│   │   ├── dashboard/
│   │   ├── stories/
│   │   ├── games/
│   │   ├── merchandise/
│   │   ├── orders/
│   │   └── users/
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── AgeVerification/
│   ├── StoryCard/
│   ├── GameEmbed/
│   ├── MerchandiseGrid/
│   ├── PaymentForm/
│   ├── ParentalControls/
│   └── WorldMap/
├── lib/                          # Utilities & helpers
│   ├── auth.ts                   # Auth configuration
│   ├── stripe.ts                 # Stripe helpers
│   ├── database.ts               # Database queries
│   ├── email.ts                  # Email service
│   └── drm.ts                    # DRM for downloads
├── public/                       # Static assets
│   ├── images/
│   ├── stories/                  # Story PDFs
│   └── characters/               # Character assets
├── styles/                       # Global styles
├── types/                        # TypeScript types
└── middleware.ts                 # Auth middleware

```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/richstrephoya-lang/maisy-website.git
   cd maisy-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Set up database**
   ```bash
   npm run db:migrate
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

## Key Features Detailed

### Age Verification Flow
1. User visits site → redirected to age verification
2. Child enters birth date → verified against minimum age
3. If under 13, parent email required
4. Parent receives verification email with approval link
5. Parent approves → child account activated
6. Content filtered based on verified age

### DRM Protected Downloads
- Stories encrypted with unique user key
- Downloads tied to specific user account
- Unable to transfer or share downloaded files
- Watermarking with user information
- License agreement enforcement on download

### Game System
- Adaptive difficulty based on age and progress
- Achievement/badge system
- Progress tracking and reporting for parents
- Mini-games teaching: empathy, problem-solving, social skills, emotional intelligence

### Merchandise Integration
- Print-on-demand partners (Printful, Merch by Amazon)
- Custom character artwork on products
- Direct fulfillment and shipping
- Inventory sync with Stripe Products API

## Development Roadmap

- [ ] User authentication system
- [ ] Age verification workflow
- [ ] Story upload and management
- [ ] PDF encryption and DRM
- [ ] Game framework setup
- [ ] Stripe integration
- [ ] Print-on-demand API integration
- [ ] Parental controls dashboard
- [ ] Analytics and reporting
- [ ] Mobile app consideration

## Security Considerations

- All child data encrypted at rest
- COPPA compliance for US users
- GDPR compliance for EU users
- Regular security audits
- Content moderation system
- Abuse reporting mechanisms

## Contributing

This is a private project for Maisy's Multiverse. Contributors should follow the code of conduct and development guidelines.

## License

All content and code © 2026 Maisy's Multiverse. All rights reserved.