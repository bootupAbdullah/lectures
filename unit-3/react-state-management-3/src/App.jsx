import './App.css';
import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [myInfo, setMyInfo] = useState([
    {
      firstName: "Abdullah",
      lastName: "Durrani",
      hasPets: true,
      age: 36
    }
  ])
  
  console.log(isDarkMode)
  console.log(myInfo[0])


  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Hello world!</h1>
      <p>Hello, my name is {myInfo[0].firstName} {myInfo[0].lastName}, I am {myInfo[0].age} years old, and I {myInfo[0].hasPets ? 'have' : 'don\'t have'} pets. </p>
    </div>
  );
};

export default App;
