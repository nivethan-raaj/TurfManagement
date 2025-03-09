# Turf Management System - Frontend (Next.js)

This is the **Turf Management System** frontend built using **Next.js**. The project is designed for booking and managing turf reservations, and integrates authentication and authorization for user security.

## Getting Started

### Prerequisites
Ensure you have the following installed before proceeding:  
- **Node.js** (v18 or higher)  
- **npm** (v9 or higher)  
- **Git**  

## Installation Steps

1. **Clone the Repository**  
```bash
git clone <repository_url>
```

2. **Navigate to the Project Directory**  
```bash
cd <project_directory>
```

3. **Install Dependencies**  
```bash
npm install
```

4. **Set Up Environment Variables**  
Create a `.env.local` file in the project root and provide the necessary environment variables:  

```
NEXT_PUBLIC_API_BASE_URL=<your_api_base_url>
NEXT_PUBLIC_AUTH_SECRET=<your_auth_secret>
```

5. **Run the Development Server**  
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── components       // Reusable UI components
├── pages             // Next.js routing system
│   ├── index.js      // Home page
│   ├── login.js      // Login page for authentication
│   ├── dashboard.js  // Admin dashboard
│   └── booking.js    // Turf booking interface
├── public            // Static files (images, etc.)
├── styles            // Global and modular CSS files
├── utils             // Helper function
