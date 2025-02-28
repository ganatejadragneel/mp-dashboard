# Mindful Performance Dashboard

A web application built with Next.js that provides a dashboard to view and manage registered users based on their roles (athletes and coaches).

## Features

- Dashboard interface to view registered users
- Filter users by type (athlete/coach)
- Automatic de-duplication of user entries
- Responsive design with Tailwind CSS
- MongoDB integration for data storage

## Tech Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS
- **API**: Next.js API Routes
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- MongoDB account and database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mp-dashboard.git
   cd mp-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
mp-dashboard/
├── .env.local           # Environment variables
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   └── Dashboard.tsx
│   ├── pages/           # Next.js pages
│   │   ├── api/         # API routes
│   │   │   ├── getUsers.ts
│   │   │   └── hello.ts
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/          # CSS styles
│       └── globals.css
├── .eslintrc.json       # ESLint configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## API Routes

### GET /api/getUsers

Fetches all registered users from the MongoDB database.

Response format:
```json
[
  {
    "userType": "athlete",
    "email": "athlete@example.com"
  },
  {
    "userType": "coach",
    "email": "coach@example.com"
  }
]
```

## Database Schema

The application uses a MongoDB collection called `subscriptions` with the following document structure:

```json
{
  "userType": "athlete|coach",
  "email": "user@example.com"
}
```

## Deployment

The application can be deployed using Vercel:

```bash
npm run build
# or
vercel
```

For more details on deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Security Note

Please ensure you don't commit your `.env.local` file with sensitive information like database credentials to your repository. The file is already included in `.gitignore` for your protection.
