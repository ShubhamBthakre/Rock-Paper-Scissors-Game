import {ListItem, ImgItem, Button} from './styledComponent'

const ChoiceItem = props => {
  const {choiceDetails, playerSelected} = props
  const {imageUrl, id} = choiceDetails
  const onPlayerSelected = () => {
    playerSelected(choiceDetails)
  }

  const getDataTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'

      case 'SCISSORS':
        return 'scissorsButton'

      case 'PAPER':
        return 'paperButton'

      default:
        return null
    }
  }

  return (
    <ListItem>
      <Button
        type="button"
        onClick={onPlayerSelected}
        data-testid={getDataTestId()}
      >
        <ImgItem src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}

export default ChoiceItem
