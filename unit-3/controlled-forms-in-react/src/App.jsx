// import the useState() hook
import { useState } from 'react';

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState('The full name will appear here.');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', 
  })

  //Refactored function to handle state change
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }; 
  
  const handleSubmit = (event) => {
    // Prevent default event behavior
    event.preventDefault();
    console.log('We no longer navigate away from this page');
    setTitle(`Your name is ${formData.firstName} ${formData.lastName}`);
    setFormData({firstName: '', lastName: ''});
  };

  
  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
        <label htmlFor="lastName">Last Name: </label>
        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
        
        <button type="submit">Submit your name</button>
      </form>
    </>
  );
};

export default App;








//When invoked, update the firstName state to equal the new value
// const handleFirstNameChange = (event) => {
//   setFirstName(event.target.value)
// };

// const handleLastNameChange = (event) => {
//   setLastName(event.target.value)
// };