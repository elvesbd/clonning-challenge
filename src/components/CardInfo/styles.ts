import styled from 'styled-components'
import { Progress } from '@styled-icons/simple-icons/Progress';

export const Container = styled.div`
  grid-area: 'CI';
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .data-pending {
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
    padding: 0.5rem;
    font-size: 0.8rem;
    color: var(--gray-200);
    background: var(--gray-100);
  }
`;

export const Schedule = styled.div`
  background: var(--white);
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;

  .schedule-header {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-left: 0.5rem;
    color: var(--background-card-profile);
  }
`;

export const ProgressIcon = styled(Progress)`
  width: 2rem;
  height: 2rem;
`;

export const ScheduleContent = styled.div`
  margin-top: 0.5rem;

  .schedule-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--white);
  }

  span {
    color: var(--white);
    font-weight: bold;
  }

  span + span {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .activities {
    width: 10rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--blue-500);
  }

  .projects {
    width: 10rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--green-500);
  }

  .total {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    background: var(--orange);
  }
`;

export const ScheduleBirthday = styled.div`
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: var(--white);

  .schedule-header {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
    margin-left: 0.5rem;
    color: var(--background-card-profile);
    }
  }
`;

export const ScheduleBirthdayContent = styled.div`
  text-align: center;
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: var(--white);
  color: var(--gray-200);
`;

export const SchedulePendencies = styled.div`

margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: var(--white);

  .schedule-header {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
    margin-left: 0.5rem;
    color: var(--background-card-profile);
    }
  }`;


export const SchedulePendenciesContent = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: var(--white);
  color: var(--gray-200);
`;

