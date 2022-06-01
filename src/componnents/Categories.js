import { plantList } from '../datas/plantList'



function Categories(){
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return (
        <select>
            {
                categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))
            }
        </select >
    )
}

export default Categories