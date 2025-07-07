# Choonwise

A web application that lets users connect their Bandcamp accounts, form groups with friends, and collaboratively manage their Bandcamp collections and wishlists to optimize music sharing and purchases.

## Project Structure

```
choonwise/
├── frontend/          # React TypeScript frontend
├── backend/           # Node.js Express TypeScript backend
├── shared/            # Shared types and utilities
├── docs/              # Project documentation
├── scripts/           # Development and deployment scripts
├── docker-compose.yml # Docker setup for local development
├── .gitignore
├── README.md
└── project_plan.md
```

## Tech Stack

- **Frontend:** React with TypeScript, Tailwind CSS
- **Backend:** Node.js with Express and TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT-based
- **Deployment:** Vercel (frontend), Render/Railway (backend)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Git

### Development Setup

1. Clone the repository
2. Install dependencies for both frontend and backend
3. Set up environment variables
4. Run database migrations
5. Start development servers

See individual README files in `frontend/` and `backend/` directories for detailed setup instructions.

## Features

- User authentication and Bandcamp integration
- Group creation and management
- Collection and wishlist analysis
- Sharing opportunities detection
- Purchase optimization suggestions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
