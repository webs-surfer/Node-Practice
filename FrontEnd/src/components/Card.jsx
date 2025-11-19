import React from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";


function Card(props) {
  
  async function handleDelete(_id) {
    try {
      const res = await axios.delete(`/products/${_id}`);
      if(res.data._id){
        props.setProducts(props.products.filter(p=>p._id!==res.data._id));
      }
    } catch (err) {
      console.error("Error Deleting products:", err);
    }
  }
  return (
    <div className="m-10  bg-black border border-white text-white flex justify-center items-center p-3 gap-3 flex-col">
      <h1 className="text-sm overflow-hidden ">
        <b>id: </b>
        {props.id}
      </h1>
      <h4 className="text-sm overflow-hidden ">
        <b>title: </b>
        {props.title}
      </h4>
      <p className="text-sm overflow-hidden ">
        <b>body: </b>
        {props.body}
      </p>
      <button onClick={()=>handleDelete(props._id)}>
        <Trash2 />
      </button>
    </div>
  );
}

export default Card;
