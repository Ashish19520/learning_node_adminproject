import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { updateproduct } from './additional/service';

function UpdateProducts() {

    const params=useParams();
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const [p, setP] = useState(false);
  const navigate=useNavigate();

  useEffect(()=>{
    sumbit();
  },[])

    const sumbit=async ()=>{
            let result=await fetch(`http://localhost:5000/update/${params.id}`);
            result=await result.json();
            setname(result.name);
            setPrice(result.price);
            setCategory(result.category);
            setCompany(result.company);
    }
    const sumbit1=async ()=>{
      if(!name||!price||!category||!company){
          setError(true);
          return false;
      }
    const response=await updateproduct(name,price,category,company,params.id);
    console.log(response)
    
    

  }
    // const call=async ()=>{
    //     let result=await fetch('http://localhost:5000/products');
    //     result=await result.json();
    //     setP(result);
    // }
//     const deleteProduct=async(id)=>{
//       let result=await fetch(`http://localhost:5000/product/${id}`,{
//         method:"Delete"
//       });
//       result=await result.json();
//       if(result){
//        call();
//       }
//   }
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
      <button className="btn" 
        onClick={()=>sumbit1()}>
        submit
      </button>
    </div>
  );
}

export default UpdateProducts;