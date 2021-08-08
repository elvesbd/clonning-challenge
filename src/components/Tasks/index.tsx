import React from 'react';
import ScheduleOfActivities from '../ScheduleOfActivities';

// import { Container } from './styles';

const Tasks: React.FC = () => {
  return (
    <div className="schedule-content">
      <div className="activities">
        <span>Atividade 23/106</span>
        <span>50%</span>
      </div>
      <div className="projects">
        <span>Projetos 23/106</span>
        <span>50%</span>
      </div>
      <div className="total">
        <span>Total 23/106</span>
        <span>50%</span>
      </div>

        <ScheduleOfActivities
          name='Atividades'
          status='pendente'
          quantity={3}
          activitiesTable="activities-table-1"
        />
        <ScheduleOfActivities
          name='Projetos'
          status='pendente'
          quantity={3}
          activitiesTable="activities-table-2"
        />
        <ScheduleOfActivities
          name='Total'
          status='pendente'
          quantity={3}
          activitiesTable="activities-table-3"
        />
    </div>
  );
}

export default Tasks;
