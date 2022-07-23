import CareScale from './CareScale';
import '../styles/PlantItem.css'


function PlantItem({name, cover, id, light, water}) {
    return (
        <li key={id} className="lmj-plant-item">
            <img src={cover} alt={name} className="lmj-plant-item-cover" />
            {name}
            <div>
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
        </li>
    )
    
}

export default PlantItem;