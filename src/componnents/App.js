import { useState } from 'react'
import '../App.css';
import Banner from './Banner'
import Categories from './Categories'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {

	const [cart, updateCart] = useState([])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<Categories />
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
  )
}

export default App;