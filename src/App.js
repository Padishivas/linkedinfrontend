import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Home from "./components/home";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SubHome from './components/subHome';
import MyNetwork from './components/myNetwork';
import Jobs from "./components/jobs";


function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <SubHome />
        },
        {
          path: "/myNetwork",
          element: <MyNetwork />
        },
        {
          path: "/jobs",
          element: <Jobs />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
