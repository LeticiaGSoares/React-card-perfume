import {Container, Title, Category, Button, ImageSide} from './Styles'
import cartIcon from '../assets/images/icon-cart.svg'

function App(props) {

  return (
    <div className='container'>
        <ImageSide style={{backgroundImage: `url(${props.productImage})`}}/>
        <div className="info-side">
            <Category>Perfume</Category>
            <Title>Gabrielle Essence Eau De Parfum</Title>
            <Button><img src={cartIcon}/> Add to Cart</Button>
        </div>
    </div>
  )
}

export default App
