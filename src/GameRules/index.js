import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameRulesContainer,
  RulesButton,
  RulesContainer,
  CloseButton,
  ContentContainer,
  Image,
} from './styledComponent'

const GameRules = () => (
  <GameRulesContainer>
    <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
      {close => (
        <RulesContainer>
          <CloseButton type="button" onClick={close}>
            <RiCloseLine />
          </CloseButton>
          <ContentContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ContentContainer>
        </RulesContainer>
      )}
    </Popup>
  </GameRulesContainer>
)

export default GameRules
