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

import GameRules from '../GameRules'
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
  state = {
    gameOver: false,
    score: 0,
    opponentChoice: choicesList[Math.floor(Math.random() * 3)],
    playerChoice: {},
    gameResult: '',
  }

  playerSelected = playerChoice => {
    const {opponentChoice} = this.state

    if (playerChoice.id === opponentChoice.id) {
      this.setState({
        gameOver: true,
        gameResult: 'IT IS DRAW',
        playerChoice,
      })
    } else if (
      (playerChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (playerChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER') ||
      (playerChoice.id === 'PAPER' && opponentChoice.id === 'ROCK')
    ) {
      this.setState(prevState => ({
        gameOver: true,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
        playerChoice,
      }))
    } else {
      this.setState(prevState => ({
        gameOver: true,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
        playerChoice,
      }))
    }
  }

  renderPlayingView = () => (
    <ChoicesItemContainer>
      {choicesList.map(choiceDetails => (
        <ChoiceItem
          key={choiceDetails.id}
          choiceDetails={choiceDetails}
          playerSelected={this.playerSelected}
        />
      ))}
    </ChoicesItemContainer>
  )

  onClickPlayAgain = () => {
    this.setState({
      gameOver: false,
      opponentChoice: choicesList[Math.ceil(Math.random() * 3)],
      playerChoice: {},
      gameResult: '',
    })
  }

  renderGameResultView = () => {
    const {playerChoice, opponentChoice, gameResult} = this.state
    return (
      <GameResultViewContainer>
        <GameResultItemsContainer>
          <GameResultItem>
            <ResultViewItemText>YOU</ResultViewItemText>
            <ImgChoice src={playerChoice.imageUrl} alt="your choice" />
          </GameResultItem>
          <GameResultItem>
            <ResultViewItemText>OPPONENT</ResultViewItemText>
            <ImgChoice src={opponentChoice.imageUrl} alt="opponent choice" />
          </GameResultItem>
        </GameResultItemsContainer>
        <GameResultContainer>
          <GameResultStatusText>{gameResult}</GameResultStatusText>
          <PlayAgainButton onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameResultContainer>
      </GameResultViewContainer>
    )
  }

  render() {
    const {gameOver, score} = this.state
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
            <ScoreCount>{score}</ScoreCount>
          </ScoreContainer>
        </ScoreCardContainer>

        {gameOver ? this.renderGameResultView() : this.renderPlayingView()}

        <GameRules />
      </AppContainer>
    )
  }
}
export default RockPaperScissors
