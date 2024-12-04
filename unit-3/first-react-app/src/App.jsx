// src/App.jsx

const App = () => {
  const todo = { text: 'A brand new task', done: false };
  const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: true},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

  const buttonStyle = {
    backgroundColor: '#b974b6',
    borderRadius: '8px',
    color: 'white',
    fontSize: '24pt',
    padding: '15px 50px',
    width: '300px',
  };

  return (
    <>
    <h1>Javascript in JSX!</h1>
    <p>{todo.text}</p>

    <h2>Conditional Rendering</h2>
    <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text}</p>

    <h2>Looping with JSX</h2>
    <ul>
      {todos.map((todo, index) =>
        <li key={index}>
          {todo.done ? `Task Completed - ${todo.text}` : todo.text}
          </li>
      )}
    </ul>
    
    <button style={buttonStyle}>{"Click Me"}</button>


    </>
  )
};

export default App 