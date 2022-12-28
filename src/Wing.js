import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Wing.css"


function Wing() {
 const[data, setData]=useState();

 const getWing=()=>{
axios.get('http://localhost:5000/wing').then((response)=>{
  setData(response.data.wing_name);
  
})

 }
 console.log(data);
useEffect(()=>{
  getWing();
}, [])
  return (
    <div className='container nopage'>
             <div className="small-Nav">
      <h3>Wing</h3>
      <span class="badge bg-danger"><i class="fas fa-sign-out-alt"></i> Log Out</span>
      </div>


      <div className="wrap">
        <div className="wing-list">
<h5>Wing List</h5>
{data != undefined && data.map((wing)=>{
return(
  <div>{wing.name}</div>
)
})}
        </div>
        <div className="create-wing">
        <h5>Create a Wing</h5>
        </div>
      </div>
    </div>
  );
}

export default Wing;