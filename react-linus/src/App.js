
import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import StyledComponents from './components/StyledComponents.js'

import {
    createHashRouter,
    Link,
    Outlet,
    RouterProvider
  } from 'react-router-dom'

  function Root() {
    return (
      <>
      <StyledComponents></StyledComponents>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  }


  function App() {
    const router = createHashRouter([
      {
        children: [
          { element: <Home />, path: '/' },
          { element: <About />, path: '/about' },
        ],
        element: <Root />
      }
    ])

    return <RouterProvider router={router} />
  }



export default App;
