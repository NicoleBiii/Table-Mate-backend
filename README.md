# TableMate Backend

## Overview

TableMate is a backend service for a restaurant table ordering system. It facilitates the following key features:
- Menu item management
- Order handling (placing orders, updating order status)

---

## Features

### 1. **Menu Management**
- Admins can manage menu items (create, update, delete).
- Menu items include information like name, description, price, and category.

### 2. **Order Management**
- Customers can place orders via QR code scanning.
- Orders can be tracked by admins, and their status can be updated (e.g., in progress, completed).
- When an order is completed, it’s sent to the kitchen printer for order processing.

### 3. **Database**
- MongoDB is used to store data related to users, menu items, and orders.
- Data seeding is available for initializing the database with sample data.

---

## Technologies

- **Node.js** with **Express** for the backend framework
- **MongoDB** for the database
- **Mongoose** for MongoDB object modeling
- **bcryptjs** for password hashing
- **dotenv** for environment variable management

---

## Setup

Follow the steps below to set up the backend locally.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/TableMate-backend.git
cd TableMate-backend
```
### 2.Install dependencies
- Run the following command to install the required dependencies:
```
npm install
```

### 3. Create .env file
- Create a .env file in the root directory and add the following variables:

```env
MONGO_URI=mongodb://*********/tablemate
PORT=8080
JWT_SECRET=im_a_serect
```
- MONGO_URI: MongoDB connection URI.

- BCRYPT_SALT_ROUNDS: The number of rounds for bcrypt password hashing.

- JWT_SECRET: Secret key for JWT authentication.

### 4. Run the application
Start the backend server:

```bash
npm run dev
```
The backend will be available at http://localhost:8080.

## API Endpoints
### 1. Menu Endpoints
- GET /api/menu
Get a list of all menu items.

- POST /api/menu
Create a new menu item (admin only).

- PUT /api/menu/:id
Update a menu item (admin only).

- DELETE /api/menu/:id
Delete a menu item (admin only).

### 2. Order Endpoints
- POST /api/orders
Place a new order. Requires menuItemId and quantity in the request body.

- GET /api/orders
Get all orders. (Admin only)

-GET /api/orders/:id
Get order by id

-GET /api/table/:tableNumber
Get order by tableNumber

- PUT /api/orders/:id/status(Admin only)
Update the status of an order .

## Running Seed Scripts
You can seed the database with sample data using the following commands:

### 1. Seed Menu:

```bash
node seeds/seedMenu.js
```
### 2. Seed Users:

```bash
node seeds/seedUsers.js
```
### 3. Seed Orders:

```bash
node seeds/seedOrders.js
```
##Folder Structure
```bash
TableMate-backend/
│
├── config/               # Database connection and configuration
│   └── db.js
├── models/               # Mongoose models
│   ├── User.js
│   ├── MenuItem.js
│   └── Order.js
├── seeds/                # Database seeding scripts
│   ├── seedMenu.js
│   ├── seedUsers.js
│   └── seedOrders.js
├── controllers/          # Route handlers
│   ├── userController.js
│   ├── menuController.js
│   └── orderController.js
├── routes/               # API routes
│   ├── userRoutes.js
│   ├── menuRoutes.js
│   └── orderRoutes.js
│   └── authRoute.js
├── middleware/
│   └── auth.js
├── migrations/
│   └── migrateDB.js
├── .env                  # Environment variables
├── server.js             # Application entry point
└── package.json          # Project dependencies
```
## Testing
You can use Postman or Insomnia to test the API endpoints. For example:

- GET http://localhost:8080/api/menu to get a list of menu items
