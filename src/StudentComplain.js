import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentComplain=()=>
{
    const [msg, setMsg]= useState("");

    const stuid=useSelector((state)=>state.stulogin.stuid);

   const submitHandle=()=>{
     let mystuid=stuid;
      let url="http://localhost:4000/stucomplain";
      axios.post(url, {"stuid":mystuid, "complain":msg, "ans":"" }).then((res)=>{
     alert("Your complain succesfully Registered!!!");
      });
   }

    return(
        <>
         <h1> Registered Your Complain</h1>

         Enter Your Message :
         <br/>

         <textarea name="stumsg" rows="6" cols="50" value={msg} onChange={(e)=>{setMsg(e.target.value)}}  />
          <br />
         <button onClick={submitHandle}> Submit your Complain</button>
        
        </>
    );
}


export default StudentComplain;