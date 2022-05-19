import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import monstera from '../assets/monstera.jpg'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem name={plant.name} cover={monstera} id={plant.id} light={plant.light} water={plant.water} />
				))}
			</ul>
		</div>
	)
}
//     return (
//         plantList.map((plant, index) => (
//             <ul key={`${plant.id + index}`}>{plant.category}
//                 <li>{plant.name}</li>
//             </ul>
//         ))
//     )
//}

export default ShoppingList