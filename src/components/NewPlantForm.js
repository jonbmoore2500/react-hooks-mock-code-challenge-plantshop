import React, {useState} from "react";

function NewPlantForm({onSubmitPlant}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0
  })
  
  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmitPlant(formData)
    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormData}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormData}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormData}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
