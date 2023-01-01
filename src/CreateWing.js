import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateWing.css"


function CreateWing() {

  return (
    <div className='container'>
      <div className="wrap">
        <div className="create-wing">
        <h5>Create a Wing</h5>
        <form className="wing-form">
          <div className="form-group">
            <label for="nameImput">Name</label>
            <input type="text" name="name" className="form-control" id="nameImput" placeholder="Name" />
            <button className="btn btn-primary">Create</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default CreateWing;