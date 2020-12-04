import React from 'react';

const NotFound = (props) => {
    return (
        <div>
            <h1>
                Hubo un error de la gran concha de la madre
            </h1>
            <h2>
                { props.msg }
            </h2>
        </div>
    )
}

export default NotFound;