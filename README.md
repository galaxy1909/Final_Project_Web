# E-Commerce Project

**Student Name**: Varun Prajapati  
**Student Number**: 8967932
**Date**: 07-20-2024

### Technology Stack

**Frontend**:Angular   
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized Angular project using npm install command.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

### Database Schema Design

**Users Schema (MongoDB)**

- `id`: Number
- `firstname`: String
- `lastname`: Number
- `email`: String
- `phone`: Number
- `username`: String
- `password`: String
- `user_type`: String

**Address Schema (MongoDB)**

- `id`: Number
- `user_id`: Number
- `addline1`: String
- `addline1`: String
- `state` : String
- `province`: String

**Product Schema(MongoDB)**
- `id`: Number
- `product_name` : String
- `product_desc` : String
- `company` : String
- `price` : Number
- `stock` : Number
- `imgURL` : String

**Order Schema(MongoDB)**

- `id` : Number
- `user_id` : Number
- `product_id` : Number
- `amount` : Number
- `created_at` : DateTime

### Frontend Setup

1. Basic structure set up for Angular components, including directories for components and services.
2. State management planned to handle user sessions and cart data like cookies.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
