import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button type={props.tipo}>{props.textoBotao}</button>
        </div>
    );
};

export default Button;  