import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Teammate from './Teammate';
import { v4 as uuid } from 'uuid';


const initialTeam = [
  {
    id: uuid(),
    teammate: 'Daniel',
    email: 'daniel@email.com',
    role: 'Full Stack Web Dev',
  },
];

const initialFormValues = {
  teammate: '',
  email: '',
  role: '',
}

function App() {

  const [ team, setTeam ] = useState(initialTeam);

  const [ formValues, setFormValues ] = useState(initialFormValues);

  const onInputChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (
        !formValues.teammate.trim() || 
        !formValues.email.trim() || 
        !formValues.role.trim()
      ) {
        return;
      };
  
      const newTeam = { ...formValues, id: uuid() };
  
      setTeam([ newTeam, ...team]);
  
      setFormValues(initialFormValues);
    };
  
    return (
  
      <div className="App">
        <h1> Team List </h1>
        <Form 
          values={formValues} 
          onInputChange={onInputChange} 
          onSubmit={onSubmit}/>
        { team.map(person => {
  
          return(
          <Teammate key={person.id} details={person}/>
          )
        }) 
      }
      </div>
    );
  }

export default App;

