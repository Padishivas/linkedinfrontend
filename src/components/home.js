import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { verifyToken } from "../utls/utls";
import { useEffect } from "react";
import userSlice from "../redux/slices/userSlice";


const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");
        console.log(verifyToken(token,  email,userId));
        if(!verifyToken(token,  email,userId)) navigate("/login");
        // dispatch()
    },[]);
    useEffect(() => {
        // dispatch(userSlice())
    })
    return (
        <>
        <div >
            <Header />
            <Outlet/>
            
        </div>
        </>
    )
}

export default Home;