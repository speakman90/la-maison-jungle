import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('Entré vote mail ici')
    // const isInputError = inputValue.includes('@')
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
                <form onSubmit={handleSubmit}>
                    <input type='text' name='email' defaultValue='exemple@gmail.com' onBlur={(e) => checkValue(inputValue)} onChange={(e) => setInputValue(e.target.value)}/>
                    {/* {!isInputError && (
                        <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
                    )} */}
                <button onClick={()=>checkValue(inputValue)}>Entrer</button>
                </form>
            </div>
		</footer>
	)
}

function handleSubmit(e) {
    e.preventDefault()
}

function checkValue(value) {
    if (!value.includes('@')) {
        alert("Attention vous n'avez pas rentré de mail")
    }
}

export default Footer