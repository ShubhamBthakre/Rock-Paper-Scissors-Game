import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  padding: 10px;
`

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 3px solid #ffffff;
  border-radius: 15px;
  width: 90%;
  max-width: 550px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 750px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Bree Serif';
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreCount = styled.p`
  color: #223a5f;
  font-size: 42px;
  font-family: 'Roboto';
  font-weight: 700;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
`

export const ChoicesItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 300px;
  padding: 0px;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    max-width: 380px;
    margin-top: 80px;
  }
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const GameResultItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin-top: 60px;
  width: 90%;
  max-width: 380px;
  @media screen and (min-width: 768px) {
    max-width: 650px;
    margin-top: 80px;
  }
`

export const GameResultItem = styled.li`
  list-style-type: none;
  width: 130px;

  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const ImgChoice = styled.img`
  width: 100%;
`
export const ResultViewItemText = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Bree Serif';
  font-weight: 500;
  margin: 0px;
  text-align: center;
  margin-bottom: 15px;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GameResultStatusText = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Bree Serif';
  font-weight: 500;
  margin: 0px;
  text-align: center;
  margin-bottom: 15px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  padding: 10px;
  color: #223a5f;
  font-size: 14px;
  font-weight: bold;
  width: 150px;
  border-radius: 10px;
`
