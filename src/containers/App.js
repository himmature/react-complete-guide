import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'id1', name: 'arthur', age: 26},
      {id:'id2', name: 'john', age: 33},
      {id:'id3', name: 'lenny', age: 23},
    ],
    showPersons: false,
    counter: 0
  };

  switchNamesHandler = (newName) => {
    this.setState({
      persons: [
        {id:'id1', name: newName, age: 26},
        {id:'id2', name: 'john', age: 33},
        {id:'id3', name: 'lenny', age: 26},
      ]
    });
  };

  changedNameHandler = (event, id) => {
    const persons = [...this.state.persons];
    const person = persons.find(item => {
      return id === item.id;
    });
    person.name = event.target.value;


    //maxis issue: state was not getting updated immediately
    //this is the solution for it
    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      }
    });
  };

  toggleNamesHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = (index) => {
    //var persons = this.state.persons.slice(); //slice without arguments create a new copy of array
    var persons = [...this.state.persons]; //spread also creates a new array and stores the copy
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  };

  render() {
    console.log('app.js render');
    return (
      <div className='App'>
        <Cockpit 
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          switchNames={this.switchNamesHandler}
          toggleNames={this.toggleNamesHandler} />
        {
          this.state.showPersons ? (
            <Persons 
              persons={this.state.persons}
              changed={this.changedNameHandler}
              clicked={this.deletePersonHandler}/>
          ) : null
        }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }
}

export default App;
