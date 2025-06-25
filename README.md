# 🛍️ ProdView – React Product Viewer

A sleek React.js application that allows users to **log in** using DummyJSON credentials and view a responsive list of products with search, sorting, and secure JWT authentication. It’s built with modern React practices, Tailwind CSS, and toast notifications for a clean UI/UX.

---

## 📸 Preview

> 🔐 **Login ➝ View Products ➝ Auto Logout on Token Expiry**


## 🚀 Live Demo

🔗 [https://prodview.vercel.app](https://prodview.vercel.app) *(replace with your deployment URL)*

---

## ⚙️ Tech Stack

- ⚛️ React 18+
- 💨 Tailwind CSS
- 🔁 React Router
- 🔐 JWT Authentication
- 🔔 React Toastify
- 🔗 Axios
- ⚡ Vite
- 🗂️ Context API

---

## 🔑 Features

### ✅ Authentication

- Login with DummyJSON test credentials
- JWT token stored securely in localStorage
- Auto logout on token expiry
- Session checked every minute
- Toast notifications for login/logout/session

### 🛍️ Product Listing

- Fetch products from DummyJSON API
- Display name, image, price & rating
- Loading state while fetching
- Fully responsive grid layout

### 🔍 Search & Sorting (Optional)

- Search by product title
- Sort by price, rating, or name *(if implemented)*

---

## 🧪 Dummy Login Credentials

```json
{
  "username": "kminchelle",
  "password": "0lelplR"
}
🛠️ Getting Started
1️⃣ Clone the Repository

git clone https://github.com/your-username/prodview.git

cd prodview
2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
VITE_API=https://dummyjson.com
You can also create .env.example for sharing in GitHub.

4️⃣ Start the Dev Server
npm run dev
Navigate to http://localhost:5173

🧠 How It Works
On login, token is stored in localStorage

Every 60 seconds, we check if token is expired

If expired → auto logout + toast + redirect to /

All routes are protected using AuthContext

🌐 APIs Used
🔗 Login API -  POST: https://dummyjson.com/auth/login
🔗 Products API - GET: https://dummyjson.com/products

📸 Screenshots (Optional)
Login Page	Product Listing

📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Made with ❤️ by Syed Faisal Abdul Rahman Zulfequar