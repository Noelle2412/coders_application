# Coders Application

A modern web application built with **React 19**, **Vite**, **Tailwind CSS**, and **Redux Toolkit** for centralized state management and authentication flow.

---

## Features

- **Centralized Authentication with Redux Toolkit**:
  - Global authentication state (`user`, `isAuthenticated`) managed via a dedicated Redux store.
  - Three core authentication actions:
    - `signup`: Stores user profile data and sets authentication status to `true`.
    - `signin`: Authenticates the user and updates session state.
    - `signout`: Clears the user session and resets the state to guest mode.
  - Convenient `useAuth()` custom hook for interacting with the auth state anywhere in the application.

- **Form Validation**:
  - Powered by **React Hook Form** and **Zod** schema validation for both Sign In and Sign Up forms.
  - Client-side error messages displayed dynamically.

- **Routing & Responsive Layouts**:
  - **React Router DOM v7** setup with nested routing and layouts.
  - **Root Layout (`src/pages/layout.jsx`)**: Global header/navbar that dynamically adapts based on whether the user is logged in (shows greeting and "Sign Out" button) or logged out (shows "Sign In" and "Sign Up" links).
  - **Auth Layout (`src/pages/(auth)/layout.jsx`)**: Split-screen responsive layout with branding illustration and form container.
  - **Homepage (`src/pages/Home/page.jsx`)**: Interactive view displaying live authentication state, user information, and quick action buttons.
  - **Protected Route Guard (`src/components/ProtectedRoute.jsx`)**: Reusable wrapper to guard private routes and redirect unauthenticated users.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Schema Validation**: [Zod](https://zod.dev/) & [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## Project Structure

```text
coders_application/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and illustration assets (coding.png, etc.)
│   ├── components/         # Reusable UI components
│   │   ├── ErrorMessage.jsx    # Validation error message component
│   │   └── ProtectedRoute.jsx  # Route guard for protected views
│   ├── pages/
│   │   ├── (auth)/         # Authentication route group
│   │   │   ├── layout.jsx      # Split-screen auth layout
│   │   │   ├── sign_in/
│   │   │   │   └── page.jsx    # Sign In form page
│   │   │   └── sign_up/
│   │   │       └── page.jsx    # Sign Up form page
│   │   ├── Home/
│   │   │   └── page.jsx        # Homepage displaying auth state
│   │   └── layout.jsx          # Root layout with dynamic navbar
│   ├── redux/
│   │   └── store/
│   │       ├── index.js        # Redux store configuration
│   │       ├── hooks.js        # useAuth and Redux custom hooks
│   │       └── slices/
│   │           └── authSlice.js# Redux slice with signup, signin, signout
│   ├── App.jsx             # Route definitions and layout nesting
│   ├── index.css           # Global CSS and Tailwind theme configuration
│   └── main.jsx            # Application entry point with Redux Provider
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## State Management Flow

### Auth State Structure
```javascript
{
  auth: {
    user: null,          // Object containing user details or email
    isAuthenticated: false // Boolean indicating login status
  }
}
```

### Using the `useAuth` Hook
Any component can access authentication state or trigger auth actions using `useAuth`:

```jsx
import { useAuth } from "../redux/store/hooks";

const MyComponent = () => {
  const { user, isAuthenticated, signup, signin, signout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={signout}>Sign Out ({user?.email})</button>
      ) : (
        <p>You are browsing as a guest.</p>
      )}
    </div>
  );
};
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone or open the repository:
   ```bash
   cd coders_application
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Available Scripts

- **`npm run dev`**: Starts the development server with Hot Module Replacement (HMR).
- **`npm run build`**: Builds the application for production into the `dist/` directory.
- **`npm run preview`**: Locally previews the production build.
- **`npm run lint`**: Runs Oxlint to check code quality and detect issues.

---

## Application Routes

| Path | Description | Access |
|---|---|---|
| `/` | Homepage displaying auth status and user details | Public |
| `/auth/sign_in` | Sign In form (validates email & password) | Public / Guest |
| `/auth/sign_up` | Sign Up form (validates name, email, password) | Public / Guest |
