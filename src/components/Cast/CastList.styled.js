import styled from 'styled-components';

export const CreditsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  margin: -25px;
`;

export const CreditsItem = styled.li`
  display: block;
  border-bottom: 1px solid black;
  margin-bottom: 0;
  flex-basis: calc((100% / 5) - 50px);
  margin: 25px;
`;

export const CreditsImage = styled.img`
  width: 280px;
  height: auto;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
  }
`;

export const ActorPlug = styled.img`
  margin-bottom: 140px;
  width: 280px;
  height: auto;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
