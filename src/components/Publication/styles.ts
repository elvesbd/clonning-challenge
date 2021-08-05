import styled from "styled-components";

export const Container = styled.div`
  grid-area: 'CC';
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--white);
  border-radius: 1rem;
  margin-top: 1.5rem;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .header-content {
    display: flex;
  }

  .header-content-info {
    display: flex;
  }

  .msg-security {
    margin-top: 1rem;
  }

  .information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    position: relative;

    &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    margin-top: 0.5rem;
    border-radius: 3px 3px 0 0;
    bottom: -5px;
    background: var(--gray-100);
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    position: relative;
    padding: 1rem;

    button {
      width: 100%;
      height: 2.5rem;
      border-radius: 2rem;
    }

    &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    margin-top: 0.5rem;
    border-radius: 3px 3px 0 0;
    bottom: 5px;
    background: var(--gray-100);
    }
  }
`;
