import React from 'react';

const Nayok = (props) => {
    const {name} = props.val;
    const {id} = props.roll;
    return (
        <div style={{color: 'red'}}>
            <h1>Naok name: {name} and key is: {id}</h1>
        </div>
    );
};

export default Nayok;