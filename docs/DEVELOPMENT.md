# Development Setup

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Quick Start

1. Clone the repository
2. Run the setup script:
   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

3. Update environment variables:
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. Run database migrations:
   ```bash
   cd backend
   npm run db:migrate
   ```

5. Start development servers:
   ```bash
   # Option 1: Use the dev script
   chmod +x scripts/dev.sh
   ./scripts/dev.sh

   # Option 2: Start manually
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm start
   ```

## Project Structure

```
choonwise/
├── frontend/              # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store and slices
│   │   ├── services/      # API service functions
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json
├── backend/               # Node.js Express backend
│   ├── src/
│   │   ├── routes/        # API route handlers
│   │   ├── controllers/   # Business logic controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── services/      # Business services
│   │   └── utils/         # Utility functions
│   ├── prisma/            # Database schema and migrations
│   └── package.json
├── shared/                # Shared TypeScript types
├── docs/                  # Project documentation
├── scripts/               # Development scripts
└── docker-compose.yml     # Docker setup
```

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Database Setup

1. Create a PostgreSQL database named `choonwise`
2. Update the `DATABASE_URL` in `backend/.env`
3. Run migrations: `cd backend && npm run db:migrate`

## Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://username:password@localhost:5432/choonwise"
JWT_SECRET="your-secret-key"
PORT=5000
FRONTEND_URL="http://localhost:3000"
```

### Frontend (.env.local)
```
REACT_APP_API_URL="http://localhost:5000/api"
```

## Testing

- Backend tests: `cd backend && npm test`
- Frontend tests: `cd frontend && npm test`

## Deployment

See individual README files in frontend/ and backend/ directories for deployment instructions.
