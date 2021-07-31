import styled from "styled-components";
import { Location } from '@styled-icons/evil/Location';
import { School } from '@styled-icons/boxicons-solid/School';
import { BuildingBankLink } from '@styled-icons/fluentui-system-regular/BuildingBankLink';

export const Container = styled.div`
  grid-area: 'CP';
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Card = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--white);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;



  h1 {
    margin-top: 1rem;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    color: var(--background-card-profile);
    font-weight: 500;
  }

  small {
    color: #292929;
    font-weight: 500;
  }

  span {
    margin-top: 0.25rem;
    font-size: 0.9rem;
    color: var(--gray-200);
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: -0.3rem;
  color: var(--gray-200);

  span {
    font-size: 1rem;
  }
`;

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    font-size: 1rem;
    color: var(--gray-200);
  }

  div + div {
    margin-left: 1rem;
  }

  .incicle .uninorte {
    display: flex;
    align-items: center;
  }
`;

export const LocationIcon = styled(Location)`
  width: 1.75rem;
  height: 1.75rem;
  color: var(--blue-500);
`;

export const SchoolIcon = styled(School)`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  background: var(--gray-200);
  color: var(--white-100);
`;

export const UniversityIcon = styled(BuildingBankLink)`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  background: var(--gray-200);
  color: var(--white-100);
`;
