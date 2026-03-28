# 📝 Blog App

A full-stack blog application built with **Next.js 15**, **MongoDB**, and **Tailwind CSS**. Users can read blogs, subscribe via email, and admins can manage blog posts through a dedicated admin panel.

🔗 **Live Demo:** [blog-app-llly.vercel.app](https://blog-app-llly.vercel.app)

---

## 🚀 Features

- **Home Page** — Browse all blog posts with category filtering
- **Blog Detail Page** — Read full blog content with author info and social share buttons
- **Email Subscription** — Users can subscribe with their email
- **Admin Panel** — Add, view, and delete blog posts and manage subscriptions
- **Responsive Design** — Works on mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Next.js 15 | Full-stack React framework |
| MongoDB Atlas | Database for blogs and emails |
| Tailwind CSS | Styling |
| Axios | API requests |
| React Toastify | Toast notifications |
| Vercel | Deployment |

---

## 📁 Project Structure
```
blog-app/
├── app/
│   ├── admin/
│   │   ├── addProduct/     # Add new blog page
│   │   ├── blogList/       # Manage blogs page
│   │   ├── subscriptions/  # Manage subscriptions page
│   │   └── layout.jsx      # Admin layout with sidebar
│   ├── blogs/
│   │   └── [id]/           # Dynamic blog detail page
│   └── api/
│       ├── blog/           # Blog CRUD API routes
│       └── email/          # Email subscription API routes
├── components/
│   ├── AdminComponents/    # Sidebar, BlogTableItem, SubsTableItem
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Blogitem.jsx
├── assets/                 # Images and icons
└── lib/                    # MongoDB connection
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Krishtiy/blog-app.git
cd blog-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env.local` file** in the root directory
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog-app?appName=Cluster0
```

4. **Run the development server**
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 🔌 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blog` | Get all blogs |
| GET | `/api/blog?id=` | Get single blog |
| POST | `/api/blog` | Create new blog |
| DELETE | `/api/blog?id=` | Delete a blog |
| GET | `/api/email` | Get all subscriptions |
| POST | `/api/email` | Add email subscription |
| DELETE | `/api/email?id=` | Delete subscription |

---

## 🚢 Deployment

This app is deployed on **Vercel**. Every push to the `main` branch triggers an automatic redeployment.

---

## 👨‍💻 Author

**Krishtiy** — [GitHub](https://github.com/Krishtiy)