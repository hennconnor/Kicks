import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';

const Filter = () => {

    const [showBrand, setShowBrand] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showColor, setShowColor] = useState(false)
    return (
        <div id='filter'>
            <p>FILTER BY</p>
            <div>
                <div className='filter-div' onClick={() => setShowBrand(!showBrand)}>
                    <p>BRAND</p>
                    {showBrand ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {showBrand && <form>
                    <input type='checkbox'></input>
                    <label>Jordan</label>
                    <input type='checkbox'></input>
                    <label>Nike</label>
                    <input type='checkbox'></input>
                    <label>Adidas</label>
                </form>}
            </div>
            <div>
                <div className='filter-div' onClick={() => setShowPrice(!showPrice)}>
                    <p>PRICE</p>
                    {showPrice ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {showPrice && <form>
                    <label>From</label>
                    <input></input>
                    <label>To</label>
                    <input></input>
                </form>}
            </div>
            <div>
                <div className='filter-div' onClick={() => setShowColor(!showColor)}>
                    <p>COLOR</p>
                    {showColor ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {showColor && <form>
                    <input type='checkbox'></input>
                    <label>Red</label>
                    <input type='checkbox'></input>
                    <label>Black</label>
                    <input type='checkbox'></input>
                    <label>White</label>
                    <input type='checkbox'></input>
                    <label>Green</label>
                    <input type='checkbox'></input>
                    <label>Purple</label>
                </form>}
            </div>
        </div>
    )
}

export default Filter;