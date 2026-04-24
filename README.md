# 🍽️ Bisto-Bos | Full Stack Restaurant Management System

A modern full-stack restaurant web application with role-based access, payment integration, and real-time data management.

---

## 🌐 Live Links

- 🔗 Frontend: https://bisto-bos.web.app/
- 🔗 Server: https://bistro-boss-restaurant-resources-sarvar.vercel.app/

---

## 📌 Project Overview

**Bisto-Bos** is a full-featured restaurant management system where users can browse menu items, add to cart, place orders, and make secure payments.  
Admins have full control over menu, users, and analytics.

---

## 🔥 Key Features

### 👤 User Features
- 🍽️ Browse menu items
- 🛒 Add/remove items from cart
- 💳 Secure payment with Stripe
- 📜 View payment history
- 📅 Booking system

---

### 👨‍💼 Admin Features
- ➕ Add new menu items
- ✏️ Update menu (price, recipe, discount)
- ❌ Delete items
- 👥 Manage users (make admin)
- 📊 Dashboard analytics:
  - Total users
  - Total orders
  - Total revenue
  - Category-based sales stats

---

## 🔐 Authentication & Security

- JWT (JSON Web Token) based authentication
- Protected routes using middleware (`verifyToken`)
- Admin-only access control (`verifyAdmin`)
- Secure API handling

---

## 💳 Payment Integration

- Stripe Payment Intent API
- Dynamic amount calculation
- Secure transaction handling
- Cart auto-clear after payment

---

## ⚡ Real-Time Data System

- MongoDB as database
- Dynamic API-based data fetching
- Admin changes instantly reflect for all users
- Discount system supported

---

## 🧠 Backend Highlights (Your Code 🔥)

- RESTful API with Express.js
- MongoDB Aggregation used for analytics:
  - Revenue calculation
  - Category-wise sales
- Role-based authorization
- Error handling (Stripe + server)

---

## 🛠️ Technologies Used

### Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Payment:
- Stripe API

## 🚀 Deployment

- ▲ Frontend: Vercel
- ⚙️ Backend: Render

---

## 📂 API Endpoints Overview

### 🔐 Auth
- `POST /jwt` → Generate token

### 👤 Users
- `GET /users` → Get all users (Admin)
- `PATCH /users/admin/:id` → Make admin
- `GET /users/admin/:email` → Check admin

### 🍽️ Menu
- `GET /menu` → Get all items
- `POST /menu` → Add item (Admin)
- `PATCH /menu/:id` → Update item
- `PATCH /menu/discount/:id` → Apply discount
- `DELETE /menu/:id` → Delete item

### 🛒 Cart (Crids)
- `POST /crids` → Add to cart
- `GET /crids` → Get cart
- `DELETE /crids/:id` → Remove item

### 💳 Payment
- `POST /create_payment_intent`
- `POST /payment`
- `GET /payment/:email`

### 📊 Admin Stats
- `GET /addminhom`
- `GET /odarstart`

### 📅 Booking
- `POST /booking`
- `GET /booking`

---

## 🚧 Ongoing Development

Currently, I am working on:

- 🔐 Improving authentication system
- 💳 Enhancing payment flow
- 📊 Advanced admin dashboard UI

👉 These features will make the application more **secure, scalable, and production-ready**

---

## ⚠️ Challenges Faced

- CORS issues between frontend & backend
- Stripe payment integration complexity
- Secure route protection with JWT

👉 Solved by proper backend configuration and middleware handling

---

## 🎯 Future Improvements

- 🔐 Full Firebase/Auth system
- 📊 Advanced analytics dashboard (charts)
- ⭐ Review & rating system
- 📦 Order tracking system

---

## 👨‍💻 Author

**Dipto Bakshi**  
📧 Email: diptobakshi72@gmail.com  
📞 Phone: +8801791620986  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!