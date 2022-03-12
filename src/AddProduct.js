import React, { useState }from "react";
import Header from "./Header";

function AddProduct() {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [file,setFile] = useState("");

 async function saveProduct(){

    let item = {name,price,description,file};
    console.log(item)

    const formData = new FormData();
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('file',file);

    console.log(formData)

    let result = await fetch('http://127.0.0.1:8000/api/products',{
        method: 'POST',
        body: formData,
    });
    alert('Data Added Successfully!');

  }

  return (
    <div>
      <Header />
     <div className="col-md-6 offset-md-3">
         <h1>Add Product Page</h1>
         <br />
         <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Product Name" />
         <br />
         <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Enter Product Price" />
         <br />
        <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Details"></textarea>
        <br />
         <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control" />
         <br />
         <button onClick={saveProduct} className="btn btn-primary">Add Product</button>
     </div>
    </div>
  );
}

export default AddProduct;
