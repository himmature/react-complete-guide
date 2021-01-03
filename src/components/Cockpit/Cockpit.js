import React, {useEffect, PureComponent} from 'react';
import './Cockpit.css';
import Radium from 'radium';


class Cockpit extends PureComponent {
    // useEffect(() => {
    //   alert ('callback');
    // }, []);

    render (){
      console.log('cockpit render');
      const style = {
        backgroundColor: this.props.showPersons ? 'red' : 'green',
        border: '1px solid #hhh',
        cursor: 'pointer',
        padding: '2%',
        ':hover': {
          backgroundColor: this.props.showPersons ? 'salmon' : 'lightGreen'
        }
      }
      const classes = [];
      if (this.props.personsLength <= 2) {
        classes.push('Red');
      }
      if (this.props.personsLength <= 1) {
        classes.push('Bold');
      }
    return (
        <div>
            <h1 className={classes.join(' ')}>Hi i am react app</h1>
            <button 
                key='id1'
                style={style}
                onClick={() => this.props.switchNames('abigail')}>Switch Names</button>
            <button 
                key='id2'
                style={style}
                onClick={this.props.toggleNames}>Toggle Names</button>
        </div>
    );
    };
};

export default Radium(Cockpit);