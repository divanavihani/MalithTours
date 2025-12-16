# TourVibe - Tourism Website

A full-stack MERN application for a tourism company with vehicle booking and customer review system.

## Project Structure

\`\`\`
├── backend/                 # Express.js API server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers (MVC)
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── scripts/           # Database seeding scripts
│   └── server.js          # Main server file
├── frontend/              # React.js client
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service functions
│   │   └── App.js        # Main app component
│   └── package.json
└── README.md
\`\`\`

## Features

- **Frontend (React.js + Tailwind CSS)**:
  - Responsive design
  - Home page with hero section and featured destinations
  - About page with company information
  - Bookings page displaying vehicle fleet
  - Reviews page with customer feedback and submission form
  - Contact page with social media links

- **Backend (Express.js + MongoDB)**:
  - RESTful API following MVC architecture
  - Review management (CRUD operations)
  - Input validation and sanitization
  - Rate limiting and security middleware
  - Database seeding scripts

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, Axios, Lucide React
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Security**: Helmet, CORS, Rate Limiting, Input Validation

## Installation & Setup

### Backend Setup

1. Navigate to backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file with your MongoDB connection string:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/tourism_website
NODE_ENV=development
CLIENT_URL=http://localhost:3001
```

4. Ensure MongoDB is installed and running:
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
```

5. Seed the database (optional):
\`\`\`bash
npm run seed
\`\`\`

6. Start the server:
\`\`\`bash
npm run dev
\`\`\`

### Frontend Setup

1. Navigate to frontend directory:
\`\`\`bash
cd frontend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm start
\`\`\`

The application will be available at:
- Frontend: http://localhost:3001
- Backend API: http://localhost:5000

## API Endpoints

- `GET /api/reviews` - Get all reviews (with optional limit parameter)
- `POST /api/reviews` - Create a new review
- `GET /api/reviews/:id` - Get a specific review
- `DELETE /api/reviews/:id` - Delete a review
- `GET /api/health` - Health check endpoint

## Database Schema

### Review Model
\`\`\`javascript
{
  name: String (required, 2-50 characters),
  feedback: String (required, 10-500 characters),
  createdAt: Date (default: now),
  updatedAt: Date (auto-generated)
}
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
