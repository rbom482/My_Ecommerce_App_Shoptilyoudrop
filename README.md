# 🛍️ Shop Til You Drop — React E-Commerce App

## 📌 Project Overview

**Shop Til You Drop** is a simple e-commerce web application built using **React**.
The goal of this project is to demonstrate core React concepts such as components, state management, routing, props, and UI styling using **React Bootstrap**.

Users can browse products, add items to a cart, view their cart, and remove items — all without page reloads.

---

## 🚀 Live Features

* 🏠 **Landing / Products Page**

  * Displays a grid of products with images, names, and prices
  * Users can add items to the cart
  * Buttons disable once an item is added

* 🛒 **Cart Page**

  * Displays all selected items
  * Shows total price
  * Allows users to remove items from the cart
  * Styled to match the overall pastel theme

* 🧭 **Navigation Bar**

  * Persistent across pages
  * Displays cart item count
  * Uses React Router for navigation

* 🎨 **Custom Styling**

  * Pastel pink and purple theme
  * Styled using React Bootstrap and custom CSS
  * Consistent UI across pages

---

## 🧰 Technologies Used

* **React** (with Vite)
* **React Router DOM**
* **React Bootstrap**
* **Bootstrap**
* **JavaScript (ES6+)**
* **CSS**

---

## 🗂️ Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Cart.jsx
│   └── NotFound.jsx
├── data/
│   └── products.js
├── App.jsx
├── main.jsx
├── index.css
```

---

## 🧠 Key React Concepts Demonstrated

* **Functional Components**
* **Props** for passing data and functions between components
* **useState** for managing cart state
* **React Router** for multi-page navigation
* **Conditional Rendering**
* **Array methods (`map`, `filter`, `reduce`)**
* **Reusable UI components**

---

## 📦 Product Data

Product information is stored in a separate data file:

```js
src/data/products.js
```

This keeps the application modular and easy to maintain.

---

## ▶️ How to Run the Project Locally

1. Clone the repository
2. Navigate into the project folder
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   npm run dev
   ```
5. Open the browser at:

   ```
   http://localhost:5173
   ```

---

## 🧪 Future Enhancements (Optional)

* Quantity selector per cart item
* Persistent cart using localStorage
* Checkout form
* Product filtering or search
* Backend integration

---

## 👩‍💻 Author

**Becca**
Built as part of a React coursework project to demonstrate front-end development fundamentals.
