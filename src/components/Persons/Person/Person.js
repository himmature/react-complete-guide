import React, {useState, useEffect, useRef} from 'react';
import './Person.css';
import Auxillery from '../../hoc/Auxillery';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';

const person = (props) => {
    const elementRef = useRef(null) || React.createRef(); //as per docs, useRef() works in functional componens, but i tried both and its working
    const [personState, setPersonState] = useState({
        gender: 'Male'
    });

    useEffect(() => {
        elementRef.current.focus();
    }, []);

    return (
        <Auxillery className='Person'>
            <p onClick={props.click}>I am {props.name} and my age is {props.age}, Gender: {personState.gender}</p>
            <p>{props.children}</p>
            <input 
                ref={elementRef}
                type='text' 
                onChange={props.changed} 
                value={props.name} />
        </Auxillery>
    );
};

person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};

export default withClass(person, 'Person');