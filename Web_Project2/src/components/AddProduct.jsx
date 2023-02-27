import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addingproduct } from './additional/service';

function AddProduct() {



  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate=useNavigate();

    const sumbit=async ()=>{
        if(!name||!price||!category||!company){
            setError(true);
            return false;
        }
      const response=await addingproduct(name,price,category,company);
      console.log(response)
      
      

    }
  return (
    <div className='signup'>
      <input
        type="text"
        className="input-field"
        placeholder="Enter Product name"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
        {!name&&error?<span className='error'>Enter a valid name</span>:""}
      <input
        type="text"
        className="input-field"
        placeholder="Enter product price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
       {!price&&error?<span className='error'>Enter a fixed price</span>:""}
      <input
        type="text"
        className="input-field"
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
       {!category&&error?<span className='error'>Enter a valid category</span>:""}
       <input
        type="text"
        className="input-field"
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
         {!company&&error?<span className='error'>enter a valid company</span>:""}
         <br/ >
      <button className="btn" onClick={sumbit}>
        submit
      </button>
    </div>
  );
}

export default AddProduct;