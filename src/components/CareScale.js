function CareScale({scaleValue, careType }) {
    const range = [1,2,3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => handleClick(scaleType, scaleValue)}>{scaleType}</span> : null
            )}
        </div>
    )
}

function handleClick(scaleType, scaleValue) { 

    var Type = scaleType === '☀️' ? 'Soleil' : 'Eau'

    switch(scaleValue) {
        case 1:
            alert(`Ceci est un clic sur ${scaleType}, la plante à besoins de peu de ${Type}`)
            break;
        case 2:
            alert(`Ceci est un clic sur ${scaleType}, la plante à besoins de modérément de ${Type}`)
            break;
        case 3:
            alert(`Ceci est un clic sur ${scaleType}, la plante à besoins de beaucoup de ${Type}`)
            break;
        default:
            alert(`Ceci est un clic sur ${scaleType}, la plante à besoins de peu de ${Type}`)
    }
}

    

export default CareScale