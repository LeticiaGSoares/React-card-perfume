import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import imagemPerfume from './assets/images/image-product-desktop.jpg'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lectus est. Curabitur non mattis enim, sed porttitor diam. Phasellus in elit at quam mattis ornare. Integer pulvinar neque eu dictum sagittis." 
    category="Perfume" 
    title="Gabrielle Essence Eau De Parfum"
    price={149.99}
    oldPrice={169.99}
    img={imagemPerfume}/>
  </React.StrictMode>,
)
