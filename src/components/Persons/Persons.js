import React, {useEffect} from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    console.log('persons render');
    useEffect(() => {
      return () => {
        console.log('persons component unmouned');
      };
    }, []);
    return (
      <Person 
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
        click={() => props.clicked(index)}
        name={person.name} 
        age={person.age}/>
    );
  });

export default persons;