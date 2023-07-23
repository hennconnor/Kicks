import shoes from '../Shoes.json';
import ShoeCard from './ShoeCard';

const ShoeDisplay = ({ handleClick }) => {
    return (
        <div id='display'>
            {shoes.map((shoe) =>
                <ShoeCard shoe={shoe} key={shoe.name} handleClick={handleClick} />
            )}
        </div>
    )
}

export default ShoeDisplay;

