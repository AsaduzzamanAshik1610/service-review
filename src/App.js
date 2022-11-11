import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import TravelDetails from './Components/TravelDetails/TravelDetails';
import Allservices from './Components/Allservices/Allservices';
import Review from './Components/Review/Review';
function App() {
  const router = createBrowserRouter([
         {
          path:'/',
          element:<Main></Main>,
          children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>,
            },
             {
              path:'/register',
              element:<Register></Register>,
             },
             {
              path:'/blog',
              element:<Blog></Blog>
             },
             {
              path:'/services/:id',
              element:<TravelDetails></TravelDetails>,
              loader:({params})=> fetch(`https://b6a11-service-review-server-side-asaduzzaman-ashik1610.vercel.app/services/${params.id}`)
             },
             {
              path:'/services',
              element:<Allservices></Allservices>
             },
             {
              path:'/review',
              element:<Review></Review>
             }
          ]
         }
             
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
