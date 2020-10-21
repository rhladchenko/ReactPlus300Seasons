import React from 'react';

const Loader = (props) => {
    const { loaderText = 'Loading...' } = props;

    return (
        <div class='ui active dimmer'>
            <div class='ui text loader'>{loaderText}</div>
        </div>
    );
};

export default Loader;
