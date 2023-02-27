import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Products() {

  const [p,setP]=useState(0);
  

  useEffect( ()=>{
   call();
  },[])

  const call=async ()=>{
      let result=await fetch('http://localhost:5000/products',{
        headers:{
          authtoken:JSON.parse(localStorage.getItem('token'))
        }
      });
      result=await result.json();
      setP(result);
  }
  const deleteProduct=async(id)=>{
    let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete"
    });
    result=await result.json();
    if(result){
     call();
    }
}

const search=async (e)=>{
if(e.target.value){
  let result=await fetch(`http://localhost:5000/search/${e.target.value}`);
  result=await result.json();
  setP(result);
}
else{
  call();
}}
  return (
    <div>
      <input onChange={search}></input>
      {p.length>0?
     <table className="table tabledesign">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product name</th>
      <th scope="col">price</th>
      <th scope="col">category</th>
      <th scope="col">company</th>
    </tr>
  </thead>
  <tbody>
   
    {p&& p.map((item,index)=>(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>{item.company}</td>
        <td><button className='btn' onClick={()=>deleteProduct(item._id)}>delete</button>
        <Link to ={"/update/"+item._id}>update</Link></td>
      </tr>
      ))}
   
  </tbody>
</table>
  :"No result Found"}

    </div>
  )
}

export default Products