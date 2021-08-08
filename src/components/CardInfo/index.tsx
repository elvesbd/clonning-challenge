import Tasks from '../Tasks';
import {
  Container,
  Schedule,
  ProgressIcon,
  ScheduleContent,
  ScheduleBirthday,
  ScheduleBirthdayContent,
  SchedulePendencies,
  SchedulePendenciesContent } from './styles';

const CardInfo: React.FC = () => {
  return (
    <Container>
      <Schedule>
          <div className="schedule-header">
            <ProgressIcon/>
            <h1>Eficiência</h1>
          </div>
      </Schedule>

      <ScheduleContent>
        <Tasks />
      </ScheduleContent>

      <ScheduleBirthday>
          <div className="schedule-header">
            <ProgressIcon/>
            <h1>Aniversariantes</h1>
          </div>
      </ScheduleBirthday>

      <ScheduleBirthdayContent >
        Nenhum dos seus amigos comemora aniversário hoje.
      </ScheduleBirthdayContent>

      <SchedulePendencies>
          <div className="schedule-header">
            <ProgressIcon/>
            <h1>Pendências</h1>
          </div>
      </SchedulePendencies>

      <div className="data-pending">Seg, 21 de junho</div>
      <SchedulePendenciesContent >
        Você não possui nenhuma pendência para hoje.
      </SchedulePendenciesContent>
    </Container>
  );
}

export default CardInfo;
