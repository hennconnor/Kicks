const ShoeCard = ({ shoe }) => {
    return (
        <div className='card'>
            <p>{shoe.name}</p>
            <img src={shoe.picture} alt='shoe' height='300' width='300' />
            <p>Brand: {shoe.brand}</p>
            <p>Color: {shoe.color}</p>
            <p>Price: {shoe.price}</p>
        </div>
    )
}

export default ShoeCard;