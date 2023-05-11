import shoes from '../Shoes.json';
import ShoeCard from './ShoeCard';

const ShoeDisplay = () => {
    return (
        <div>
            {shoes.map((shoe) =>
                <ShoeCard shoe={shoe} />
            )}
        </div>
    )
}

export default ShoeDisplay;

