# Exposure — frontend

React + Vite frontend for the Instagram-style photo feed app.

## Setup
```bash
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev
```

## Backend contract
- `POST /create-post` — multipart form: `image` (file) + `caption` (string)
- `GET /create-post` — returns `{ posts: [...] }`
