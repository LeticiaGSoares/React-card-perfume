import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import productImage from './assets/images/image-product-desktop.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App productImage={productImage} 
    category="Perfume" 
    title="Gabrielle Essence Eau De Parfum"
    description="A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL" 
    price={149.99} 
    oldPrice={169.99}/>
  </React.StrictMode>
)
