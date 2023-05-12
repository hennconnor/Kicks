const ShoeCard = ({ shoe }) => {
    return (
        <div className='card'>
            <p>{shoe.name}</p>
            <img src={shoe.picture} alt='shoe' height='300' width='300' />
            <div>
                <ul>
                    <li>Brand: {shoe.brand}</li>
                    <li>Color: {shoe.color}</li>
                    <li>Price: {shoe.price}</li>
                </ul>

                <button>Add to Cart</button>
            </div>

        </div>
    )
}

export default ShoeCard;