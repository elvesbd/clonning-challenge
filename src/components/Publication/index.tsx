import React from 'react';

import { Container } from './styles';

const Publication: React.FC = () => {
  return (
    <Container>
        <div className="header">
          <div className="header-content">
            <img src="" alt="logo" />
            <div>
              <span>Elves Brito</span>
              <div className="header-content-info">
                <div>
                  <img src="" alt="icon" />
                  <small>há cerca de 8 horas</small>
                </div>
                <div>
                  <img src="" alt="icon" />
                  <small>há cerca de 8 horas</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="" alt="Icon" />
          </div>
        </div>

        <div className="msg-security">
          <h1>Esta publicação está configurada no modo privado "Somente EU"</h1>
        </div>

        <div className="information">
          <div>
            <img src="" alt="icon" />
            <small>Seja o primeiro a curtir</small>
          </div>
          <div>
            <span>0 comentários</span>
            <span>0 compartilhamentos</span>
          </div>
        </div>

        <div className="buttons">
          <button><img src="" alt="icon" />Curtir</button>
          <button><img src="" alt="icon" />Comentários</button>
          <button><img src="" alt="icon" />Compartilhar</button>
        </div>
    </Container>
  );
}

export default Publication;
