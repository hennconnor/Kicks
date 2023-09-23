import ShoeCard from './ShoeCard';

const ShoeDisplay = ({ handleClick, shoes }) => {
    return (
        <div id='display'>
            {shoes.map((shoe) =>
                <ShoeCard shoe={shoe} key={shoe.name} handleClick={handleClick} />
            )}
        </div>
    )
}

export default ShoeDisplay;

