import React from 'react';

const users = [
  { nombre: 'Peter', age: 10 },
  { nombre: 'Diana', age: 20 },
  { nombre: 'Julio', age: 30 },
  { nombre: 'Maya', age: 40 },
  { nombre: 'Julia', age: 50 },
  { nombre: 'Melania', age: 60 },
  { nombre: 'Johanna', age: 70 },
];

const App = () => {
  const Hello = (props) => {
    return (
      <div>
        <p>
          Hello {props.nombre}, you are {props.age} years old
        </p>
      </div>
    );
  };

  const userComponents = users.map((user, index) => (
    <Hello key={index} nombre={user.nombre} age={user.age} />
  ));

  return (
    <div>
      <h1>Greetings</h1>
      {userComponents}
    </div>
  );
};

export default App;