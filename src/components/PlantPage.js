import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [dispPlants, setDispPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {
      setPlants(data)
      setDispPlants(data)
    })
  }, [])

  function onSubmitPlant(newPlantObj) {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantObj)
    })
    .then(r => r.json())
    .then(newPlant => {
      setPlants([...plants, newPlant])
      setDispPlants([...plants, newPlant])
    })
  }

  function onSearchChange(searchValue) {
    const filteredPlants = plants.filter((plant) => plant.name.slice(0, searchValue.length).toLowerCase() === searchValue.toLowerCase())
    setDispPlants(filteredPlants)
  }


  return (
    <main>
      <NewPlantForm onSubmitPlant={onSubmitPlant}/>
      <Search onSearchChange={onSearchChange}/>
      <PlantList plants={dispPlants}/>
    </main>
  );
}

export default PlantPage;
