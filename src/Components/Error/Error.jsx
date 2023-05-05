import React from 'react';
import picture from '../../assets/image/eerror.jpg'


const linkStyle = {
        textAlign:'center',
        color: 'blue',
       
  };

const Error = () => {
    return (
        <div style={linkStyle}>
            <h1>OPPS !!!</h1>
            <img src={picture}/>
        </div>
    );
};

export default Error;