import {Component} from 'react'
import {
  AppContainer,
  ScoreCardContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  ScoreCount,
  ChoicesItemContainer,
  GameResultItemsContainer,
  GameResultItem,
  ImgChoice,
  ResultViewItemText,
  GameResultViewContainer,
  GameResultContainer,
  GameResultStatusText,
  PlayAgainButton,
} from './styledComponent'

import ChoiceItem from '../ChoiceItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  renderPlayingView = () => (
    <ChoicesItemContainer>
      {choicesList.map(choiceDetails => (
        <ChoiceItem key={choiceDetails.id} choiceDetails={choiceDetails} />
      ))}
    </ChoicesItemContainer>
  )

  renderGameResultView = () => (
    <GameResultViewContainer>
      <GameResultItemsContainer>
        <GameResultItem>
          <ResultViewItemText>YOU</ResultViewItemText>
          <ImgChoice
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="rock"
          />
        </GameResultItem>
        <GameResultItem>
          <ResultViewItemText>OPPONENT</ResultViewItemText>
          <ImgChoice
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="rock"
          />
        </GameResultItem>
      </GameResultItemsContainer>
      <GameResultContainer>
        <GameResultStatusText>YOU WON</GameResultStatusText>
        <PlayAgainButton>PLAY AGAIN</PlayAgainButton>
      </GameResultContainer>
    </GameResultViewContainer>
  )

  render() {
    return (
      <AppContainer>
        <ScoreCardContainer>
          <Heading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreCount>0</ScoreCount>
          </ScoreContainer>
        </ScoreCardContainer>

        {/* {this.renderPlayingView()} */}
        {this.renderGameResultView()}
      </AppContainer>
    )
  }
}
export default RockPaperScissors
