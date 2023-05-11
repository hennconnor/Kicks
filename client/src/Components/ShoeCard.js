const ShoeCard = (shoe) => {
    return (
        <div class='card'>
            <p>{shoe.shoe.name}</p>
            <img src={shoe.shoe.picture} alt='shoe' height='300' width='300' />
            <p>Brand: {shoe.shoe.brand}</p>
            <p>Color: {shoe.shoe.color}</p>
            <p>Price: {shoe.shoe.price}</p>
        </div>
    )
}

export default ShoeCard;