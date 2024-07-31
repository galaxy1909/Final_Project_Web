
### GITHub Link : https://github.com/galaxy1909/Final_Project_Web/
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

# ComputerStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

# Installation
Run `npm install` for angular modules. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


### Backend Setup

# Project Setup

Run `npm install` to install all node module

Run `node server.js`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
