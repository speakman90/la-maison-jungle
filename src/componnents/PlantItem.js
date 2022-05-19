import CareScale from './CareScale'
import '../styles/PlantItem.css';



function PlantItem ({name, cover, id, light, water}) {
    return 	(					
        <li key={id} className='lmj-plant-item' onClick={handleClick}>
            <img src={ cover } alt={ name } className='lmj-plant-item-cover'></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

// function handleClick(plnName) {
//     alert(`Vous voulez acheter 1 ${plnName} ? Très bon choix`)
// }

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}



export default PlantItem