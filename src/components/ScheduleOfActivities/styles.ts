import styled from "styled-components";

export const Container = styled.div`
  .activities-Header {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
  }

  .activities-content {
    width: 6.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 0.5rem;

    div + div {
      margin-top: 0.5rem
      ;
    }

    h3, small {
      font-size: 0.9rem;
    }
  }

  .activities-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .activities-table-1 {
    border-radius: 0.5rem;
    border: 1px solid var(--blue-500);
  }

  .activities-table-2 {
    border-radius: 0.5rem;
    border: 1px solid var(--green-500);
  }

  .activities-table-3 {
    border-radius: 0.5rem;
    border: 1px solid var(--orange)
  }
`;
