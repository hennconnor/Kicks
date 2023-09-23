import NavBar from './Components/NavBar';
import ShoeDisplay from './Components/ShoeDisplay';
import { useState, useEffect } from 'react';

function App() {

  const [visible, setVisible] = useState(false);
  const [shoes, setShoes] = useState([])

  const handleClick = () => {
    setVisible(!visible);
    console.log(visible);
  }

  useEffect(() => {
    fetch('/shoes')
      .then(res => res.json())
      .then(data => setShoes(data))
  }, [])


  return (
    <div className="App">
      <NavBar />
      <ShoeDisplay shoes={shoes} handleClick={handleClick} />
    </div>
  );
}

export default App;
