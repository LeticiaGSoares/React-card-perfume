import {Container, Title,Text, Category, Price, Button, ImageSide, InfoSide} from './Styles'
import cartIcon from '../assets/images/icon-cart.svg'

function App(props) {

  return (
    <Container>
        <ImageSide src={props.img}/>
        <InfoSide>
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Price>{props.price}</Price>
            <Button><img src={cartIcon}/> Add to Cart</Button>
        </InfoSide>
            
    </Container>
  )
}

export default App