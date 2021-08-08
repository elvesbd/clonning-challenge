import React from 'react';

import { Container } from './styles';

interface ITasksProps {
  name: string;
  status: string;
  quantity: number;
  activitiesTable: string;
}

const ScheduleOfActivities: React.FC<ITasksProps> = ({name, status, quantity, activitiesTable}) => {
  return (
    <Container>
    <div className="activities-grid">
        <div className={activitiesTable}>
          <div className="activities-Header">{name}</div>
          <div className="activities-content">
            <div className="activities-list">
              <h3>{status}</h3>
              <small>{quantity}</small>
            </div>
            <div className="activities-list">
              <h3>{status}</h3>
              <small>{quantity}</small>
            </div>
            <div className="activities-list">
              <h3>{status}</h3>
              <small>{quantity}</small>
            </div>
          </div>
        </div>
      </div>
      </Container>
  );
}

export default ScheduleOfActivities;
