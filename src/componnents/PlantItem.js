import CareScale from './CareScale'
import '../styles/PlantItem.css';



function PlantItem ({name, cover, id, light, water}) {
    return 	(					
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(light,water)}>
            <img src={ cover } alt={ name } className='lmj-plant-item-cover'></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick(light, water) {
    var lght
    var wtr
    switch (light) {
        case 1:
            lght = 'Cette plante peu de lumière'
            break;
        case 2:
            lght = 'Cette plante modérement de lumière'
            break;
        case 3:
            lght = 'Cette plante beaucoup de lumière'
            break;
        default:
            alert("Vous achetez une magnifique plante")
            break;
    }
    switch (water) {
        case 1:
            wtr = " Cette plante peu d'eau"
            break;
        case 2:
            wtr = " Cette plante modérement d'eau"
            break;
        case 3:
            wtr = " Cette plante beaucoup d'eau"
            break;
        default:
            alert("Vous achetez une magnifique plante")
            break;
    }
    return alert(lght + wtr)
}



export default PlantItem