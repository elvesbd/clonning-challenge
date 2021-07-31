import {
  Container,
  Card,
  CardHeader,
  CardInfo,
  CardFooter,
  LocationIcon,
  SchoolIcon,
  UniversityIcon,
} from './styles';
import LogoProfile from '../LogoProfile';


const CardProfile: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <LogoProfile />
          <h1>Kenedy Moraes</h1>
          <small>@kenedymoraes</small>
          <span>Front-end Developer</span>
        </CardHeader>
        <CardInfo >
          <LocationIcon />
          <span>Fortaleza/Ceara - Brasil</span>
        </CardInfo>
        <CardFooter>
          <div className="incicle">
            <SchoolIcon />
            <span>InClicle</span>
          </div>
          <div className="uninorte">
            <UniversityIcon />
            <span>UniNorte</span>
          </div>
        </CardFooter>
      </Card>
    </Container>
  )
};

export default CardProfile;
