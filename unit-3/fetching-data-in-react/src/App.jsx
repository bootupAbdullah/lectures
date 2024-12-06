import { useState } from "react";

const App = () => {
  
const YOUR_API_KEY = '93926e8f19954ff8892185839241302'

const [city, setCity] = useState('');
const [location, setLocation] = useState('');
const [temperature, setTemperature] = useState('');
const [conditions, setConditions] = useState('');

const handleChange =(event) => {
    setCity(event.target.value)
  }

const handleSubmit = async (event) => {
  event.preventDefault()
  let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`)
  let jsonData = await response.json();
	console.log(jsonData)

setLocation(jsonData.location.name);
setTemperature(jsonData.current.temp_f);
setConditions(jsonData.current.condition.text);
  
  // const {data: jsonData } = response
  // console.log(response)
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      please enter your city name for the weather:{city}
      <input type="text" onChange={handleChange} />
      <input type="submit" value="Get my forecast" />
    </form>
    <p>Location: {location}</p>
    <p>Temperature: {temperature}</p>
    <p>Condiitons: {conditions}</p>

    </>
  );
}

export default App