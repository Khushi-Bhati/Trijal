# Trijal — MERN Stack Website

A full-stack MERN (MongoDB, Express, React, Node.js) web application for **Trijal**, deployed with the backend on [Render](https://render.com) and the frontend on [Vercel](https://vercel.com).

---

## 📁 Project Structure

```
Trijal-mern/
├── backend/          # Express + Node.js API server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env.example
├── frontend/         # React app (Create React App)
│   ├── public/
│   ├── src/
│   └── .env.example
├── vercel.json       # Vercel deployment config
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster (free tier works)

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Khushi-Bhati/Trijal.git
cd Trijal
```

---

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Open `backend/.env` and fill in your values:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>
```

Start the backend server:

```bash
node server.js
```

> The API will be running at **http://localhost:5000**

---

### 3. Set up the Frontend

Open a **new terminal**, then:

```bash
cd frontend
npm install
```

Create a `.env` file:

```bash
# frontend/.env
REACT_APP_API_BASE=http://localhost:5000
```

Start the React development server:

```bash
npm start
```

> The app will open at **http://localhost:3000**

---

## 🌐 Running Both Together

You'll need **two terminal windows** running simultaneously:

| Terminal | Command | URL |
|----------|---------|-----|
| Backend  | `cd backend && node server.js` | http://localhost:5000 |
| Frontend | `cd frontend && npm start` | http://localhost:3000 |

---

## ☁️ Deployment

### Backend → Render

| Setting | Value |
|---------|-------|
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Environment Variables** | `PORT`, `MONGO_URI` |

### Frontend → Vercel

| Setting | Value |
|---------|-------|
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Environment Variables** | `REACT_APP_API_BASE=https://trijal-mern.onrender.com` |

---

## 🔑 Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Port the server runs on | `5000` |
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://...` |

### Frontend (`frontend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_BASE` | Backend API base URL | `http://localhost:5000` |

> ⚠️ **Never commit `.env` files.** They are already listed in `.gitignore`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router, Axios |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas + Mongoose |
| Hosting | Vercel (frontend), Render (backend) |
