import ShoeDisplay from '../Components/ShoeDisplay';
import Filter from '../Components/Filter'


const Home = ({ handleClick, shoes }) => {
    return (
        <div id='home'>
            <Filter />
            <ShoeDisplay shoes={shoes} handleClick={handleClick} />
        </div>
    )
}

export default Home;