import { ImgProfilePublication } from '../../styles';
import Logo from '../../assets/images/logo.jpg';

import { Container, ArrowDown, Watche, Handbag, Like, Comment, Shared } from './styles';

const Publication: React.FC = () => {
  return (
    <Container>
      <div className="header">
      <div className="header-content">
          <ImgProfilePublication>
            <img src={Logo} alt="" />
          </ImgProfilePublication>
        <div>
          <span>Elves Brito</span>
          <div className="header-content-info">
            <div className="header-content-watche">
              <Watche />
              <small>há cerca de 8 horas</small>
            </div>
            <div className="header-content-privacy">
              <Handbag />
              <small>há cerca de 8 horas</small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ArrowDown />
      </div>
    </div>

    <div className="msg-security">
      <h1>Essa publicação está configurada no modo privado "Somente EU"</h1>
    </div>

    <div className="information">
      <div className="information-like">
        <Like />
        <small>Seja o primeiro a curtir</small>
      </div>
      <div>
        <span>0 comentários</span>
        <span>0 compartilhamentos</span>
      </div>
    </div>

    <div className="buttons">
      <button><Like /> Curtir</button>
      <button><Comment /> Comentários</button>
      <button><Shared /> Compartilhar</button>
    </div>
    </Container>
  );
}

export default Publication;
