import {Component} from 'react'
import {AppContainer, ScoreCardContainer, Heading} from './styledComponent'

class RockPaperScissors extends Component {
  render() {
    return (
      <AppContainer>
        <ScoreCardContainer>
          <Heading>ROCK PAPER SCISSORS</Heading>
          <ScoreContainer>
            <ScoreText></ScoreText>
            <ScoreCount></ScoreCount>
          </ScoreContainer>
        </ScoreCardContainer>
      </AppContainer>
    )
  }
}
export default RockPaperScissors
