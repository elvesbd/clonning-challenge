import styled from 'styled-components';
import { Publish } from '@styled-icons/entypo/Publish'
import { Images } from '@styled-icons/bootstrap/Images'
import { CameraVideo }  from '@styled-icons/bootstrap/CameraVideo'

export const Container = styled.div`
  grid-area: 'CC';
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const CardPublication = styled.div`
  background: var(--white);
  border-radius: 1rem;

  .card-header {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    margin-top: 0.5rem;
  }

  .card-icons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-left: auto;
  }

  h1 {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: var(--black-100);
  }


  input {
    background: var(--gray-100);
    width: 100%;
    height: 2rem;
    padding: 1.5rem;
    border-radius: 1rem;

    ::placeholder :nth-child(1) {
      color: var(--gray-100);
    }
  }
`;

export const PublishIcon = styled(Publish)`
  width: 2rem;
  height: 2rem;
  color: var(--gray-100);
`;

export const ImageIcon = styled(Images)`
  width: 2rem;
  height: 2rem;
  color: var(--gray-100);
`;

export const CameraVideoIcon = styled(CameraVideo)`
  width: 2rem;
  height: 2rem;
  color: var(--gray-100);
`;
