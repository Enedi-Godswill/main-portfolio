import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {Explore} from "./components/Explore.jsx"
import { Skills } from './components/Skills.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App />, errorElement:<div>404 Not Found</div>  },
  {path:"/skills", element:<Skills /> , errorElement:<div>404 Not Found</div>  },
  {path:"/explore", element:<Explore /> , errorElement:<div>404 Not Found</div>  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
