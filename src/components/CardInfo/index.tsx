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

          <div className="activities-grid">
            <div className="activities-table-1">
              <div className="activities-Header">Atividades</div>
              <div className="activities-content">
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
              </div>
            </div>

            <div className="activities-table-1">
              <div className="activities-Header">Atividades</div>
              <div className="activities-content">
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
              </div>
            </div>

            <div className="activities-table-1">
              <div className="activities-Header">Atividades</div>
              <div className="activities-content">
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
                <div className="activities-list">
                  <h3>Pendentes</h3>
                  <small>3</small>
                </div>
              </div>
            </div>
           </div>
        </div>
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
