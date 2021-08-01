import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 350px;
  grid-row: 1fr;
  grid-area:
    'CP CC CI'
  ;
  height: 100%;
`;
