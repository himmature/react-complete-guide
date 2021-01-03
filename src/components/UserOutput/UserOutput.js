import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>this is para 1 {props.username}</p>
            <p>this is para 2 {props.username}</p>
        </div>
    );
};

export default userOutput;