import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Nav-Section/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Donation from "../Nav-Section/Donation/Donation";
import Statistics from "../Nav-Section/Statistics/Statistics";
import CardDetails from "../Nav-Section/Home/CardDetails/CardDetails";

const myProject = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/donation',
            element:<Donation></Donation>
           },
           {
            path:'/statistics',
            element:<Statistics></Statistics>,
            loader:()=>fetch('/data.json')

           },
           {
            path:'/donation/:id',
            element:<CardDetails></CardDetails>,
            loader:()=>fetch('/data.json')
           }
        ]
    }
])

export default myProject;