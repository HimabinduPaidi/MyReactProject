import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout.jsx";
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogInPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AppwriteAccount from './appwrite/Account.services';
const appwriteAccount = new AppwriteAccount();
const user = await appwriteAccount.getAppwriteUser()
console.log(user);
const router = createBrowserRouter([
   {
    element: <Layout />,   // This wraps all routes with navbar
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <LogInPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
