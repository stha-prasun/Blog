
# Blog

A full-stack blogging platform built with **React, TypeScript, Redux, Tailwind CSS** on the frontend, and **Node.js, Express, MongoDB** on the backend.

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

## Overview

**Blog** is a modern full-stack blogging platform. The frontend is developed using React with TypeScript, Tailwind CSS, and Redux Toolkit, while the backend uses Express, Node.js, and MongoDB for data management. Axios is used for HTTP requests, and the project is structured for easy scalability.

## Features

- Add, edit, and delete blog posts  
- Frontend state management with Redux Toolkit  
- Responsive UI using Tailwind CSS and DaisyUI  
- API integration with Axios  
- Fast development with Vite and TypeScript  

## Tech Stack

**Frontend:**  
- React 19 + TypeScript  
- Redux Toolkit  
- Tailwind CSS + DaisyUI  
- Axios  
- React Router DOM  
- React Hot Toast  

**Backend:**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT
- Bcrypt.js for password hashing  
- Cookie-parser & CORS  

## Installation

### Frontend

```bash
git clone https://github.com/stha-prasun/Blog.git
cd Blog/frontend
npm install
npm run dev
```

### Backend

```bash
cd Blog/backend
npm install
npm run dev
```

> Ensure MongoDB is running and `.env` is properly configured for database connection and JWT secrets if used.

## Usage

- Start the backend server (`npm run dev`)  
- Start the frontend server (`npm run dev`)  
- Visit `http://localhost:5173` in your browser to view the application  

## Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -am 'Add feature'`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a Pull Request  
 
