import styled from 'styled-components';

import {ImgProfile} from './components/LogoProfile/styles';

export const ImgProfilePublication = styled(ImgProfile)`
  width: 3.5rem;
  height: 3.5rem;

  img {
    border: 2px solid var(--white);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
`;
