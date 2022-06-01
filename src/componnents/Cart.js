import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return isOpen ? (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li>
            </ul>
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Effacer le panier en cours</button>
            <button onClick={() => setIsOpen(false)}>Fermer le panier</button>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    )
}

    
export default Cart;