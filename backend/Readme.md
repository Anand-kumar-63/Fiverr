# Fiverr Backend

## Setup

1. Copy environment variables into `backend/.env`:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
JWT_KEY=your_jwt_secret_key_here
STRIPE_SECRET_KEY=sk_test_xxx
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
PORT=3000
CLIENT_URL=http://localhost:5173
```

2. Install and run:

```bash
npm install
npm run dev
```

The server listens on port 3000 and requires a valid MongoDB Atlas (or local) connection.
