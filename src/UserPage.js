import { Link, useNavigate } from "react-router-dom";
 const user= window.localStorage.getItem("user");
 const email=window.localStorage.getItem("email");

const UserPage=()=>
{
    const myNav= useNavigate();
    const mylogout=()=>
{
   
    window.localStorage.clear();
    alert("you are Succesfully Logout!");
    myNav("/");

}
    return(
        <>
           <h1> Welcome To  {user}  DashBoard!</h1>
           <h3> Welcome {user}     <a href="#" onClick={mylogout}>Logout</a> </h3>
           <h3> Email : {email} </h3>
        </>
    );
}

export default UserPage;