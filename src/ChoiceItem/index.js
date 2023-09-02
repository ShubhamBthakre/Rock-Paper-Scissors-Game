import {ListItem, ImgItem, Button} from './styledComponent'

const ChoiceItem = props => {
  const {choiceDetails} = props
  const {imageUrl, id} = choiceDetails
  return (
    <ListItem>
      <Button type="button">
        <ImgItem src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}

export default ChoiceItem
