// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'


import { Home } from './pages/app/Home/home'


import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

import { Dashboard } from './pages/app/dashboard/dashboard'


// Importando o componente PrivateRoute
import { PrivateRoute } from './pages/_layouts/PayBack'

export const router = createBrowserRouter([
  // 🌐 Site público
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Home /> },
    ],
  },

  // 🔐 Autenticação
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
    ],
  },

  // ✅ Área logada (com proteção)
  {
    path: '/',
    element: <PrivateRoute />, // Envolvendo com a proteção
    children: [
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
])
