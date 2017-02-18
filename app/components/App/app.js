import React from 'react';
import DayCard from '../DayCard/DayCard';

require('./app.scss');


const WeekViewContainer = () => {
  return (
    <div className="week-view-container">
      <DayCard />
    </div>
  );
};

WeekViewContainer.defaultProps = {
};

WeekViewContainer.propTypes = {
};


export default WeekViewContainer;