const ShoeCard = ({ shoe, handleClick }) => {

    return (
        <div className='card' onClick={handleClick}>
            <img src={shoe.picture} alt='shoe' height='300' width='300' />
            <p>{shoe.brand}</p>
            <p>{shoe.name}</p>
            <p>$ {shoe.price}</p>
        </div>

    )
}

export default ShoeCard;