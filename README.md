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



# 📸 Photo Feed - Exposure

> A production-ready full-stack photo sharing application built with React, Node.js, Express, MongoDB, and ImageKit.

🔗 **Live Demo:** [https://photo-feed-1.onrender.com/]
<img width="1511" height="710" alt="image" src="https://github.com/user-attachments/assets/db847c91-3c20-45eb-b20e-81a61f77ee8c" />

---

## Overview

Photo Feed is a full-stack social photo sharing application where users can upload images with captions and browse a live community feed.

The application features a complete image upload pipeline, storing image files in **ImageKit** while persisting post metadata in **MongoDB Atlas**. The frontend communicates with a custom REST API built using **Express.js**, delivering a fast and responsive user experience.

This project was designed and developed from scratch to practice real-world backend architecture, cloud storage integration, API development, and production deployment.

---

## Features

- Upload photos with captions
- Live community photo feed
- Cloud image storage using ImageKit
- Responsive React interface
- RESTful API architecture
- MongoDB database integration
- Optimized image delivery through CDN
- Production deployment

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- Multer
- REST API

### Database

- MongoDB Atlas
- Mongoose

### Storage

- ImageKit
- Global CDN

---

## Project Architecture

```
React (Frontend)
        │
        ▼
Express REST API
        │
 ┌──────┴────────┐
 ▼               ▼
MongoDB Atlas   ImageKit CDN
```

---

## Folder Structure

```
photo-feed/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── ...
│
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/photo-feed.git
```

### Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

### Run the project

Frontend

```bash
npm run dev
```

Backend

```bash
npm start
```

---

## Environment Variables

Backend

```
MONGODB_URI=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
PORT=
```

---

## API Overview

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /posts | Fetch all posts |
| POST | /posts | Upload a new post |

*(Update these endpoints if your API differs.)*

---

## Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Image Storage | ImageKit |

---

## Future Improvements

- User authentication
- Likes and reactions
- Comments
- User profiles
- Infinite scrolling
- Search functionality
- Image editing
- Pagination

---

## Lessons Learned

Building Photo Feed helped strengthen my understanding of:

- Designing REST APIs
- File upload pipelines with Multer
- Cloud image storage workflows
- MongoDB schema design
- Production deployment
- Connecting frontend and backend applications

---

## Author

**Tanish Dete**

Full Stack Developer

GitHub: https://github.com/Tanishdete333

LinkedIn: https://linkedin.com/in/tanishdete

Portfolio: https://tanishdete.vercel.app
