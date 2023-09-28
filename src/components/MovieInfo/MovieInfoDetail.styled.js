import styled from '@emotion/styled'

 const MainInfo = styled.div`
  display: flex;
`;

 const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

 const Poster = styled.img`
  width: 250px;
  height: auto;
`;

 const PosterPlug = styled.img`
  width: 250px;
  height: auto;
`;

 const UserScoreText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

 const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

 const TitleYear = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-left: 5px;
`;


export {MainInfo,InfoWrapper,Poster, PosterPlug,UserScoreText,Title,TitleYear}; 