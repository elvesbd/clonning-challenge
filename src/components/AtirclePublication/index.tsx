import { Container, CardPublication, PublishIcon, ImageIcon, CameraVideoIcon } from './styles';

const ArticlePublication: React.FC = () => {
  return (
    <Container>
      <CardPublication>
        <div className="card-header">
          <PublishIcon />
          <h1>Escreva uma publicação...</h1>

          <div className="card-icons">
            <ImageIcon />
            <CameraVideoIcon />
          </div>
        </div>

        <input type="text" placeholder="ou publique um artigo na InCicle"/>
      </CardPublication>
    </Container>
  );
}

export default ArticlePublication;
