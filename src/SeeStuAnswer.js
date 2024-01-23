import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

let sno=0;
const SeeStuAnswer=()=>
{
  
    const stuid=useSelector((state)=> state.stulogin.stuid);
    const [mydata, setMydata]= useState([]);
    const loadData=()=>
    {
        let url=`http://localhost:4000/stucomplain/?stuid=${stuid}`;
       axios.get(url).then((res)=>{
        setMydata(res.data);
       });
    }
    
   useEffect(()=>{
    loadData();
   }, []);

   const ans=mydata.map((key)=>{
    sno++;
         return(
            <>
              <tr>
                <td> {sno} </td>
                <td> {key.complain} </td>
                <td> {key.ans} </td>
              </tr>
            
            </>
         );

   });


    return(
        <>
          <h1> Display Solution Send By Admin  </h1>
          <table border="1" width="100%" align="center" bgcolor="pink" >
             <tr bgcolor="orange">
                <th> Sno</th>
                <th> Your Complain </th>
                <th> Reply by Admin</th>
             </tr>
             {ans}
          </table>
        </>
    );
}

export default SeeStuAnswer;