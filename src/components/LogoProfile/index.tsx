import Logo from '../../assets/images/logo.jpg';

import { ImgProfile } from './styles';

const LogoProfile: React.FC = () => {
  return (
    <ImgProfile>
      <img src={Logo} alt="" />
    </ImgProfile>
  )
};

export default LogoProfile;
