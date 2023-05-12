import shoes from '../Shoes.json';
import ShoeCard from './ShoeCard';

const ShoeDisplay = () => {
    return (
        <div id='Display'>
            {shoes.map((shoe) =>
                <ShoeCard shoe={shoe} />
            )}
        </div>
    )
}

export default ShoeDisplay;

