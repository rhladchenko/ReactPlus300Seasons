import React from 'react';

import './SeasonDisplay.scss';

const seasonConfig = {
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake',
    },
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun',
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const { lat } = props;

    const season = getSeason(lat, new Date().getMonth());

    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`${season} season-display`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    );
};

export default SeasonDisplay;
