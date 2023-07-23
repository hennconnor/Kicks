import NavBar from './Components/NavBar';
import ShoeDisplay from './Components/ShoeDisplay';
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <div className="App">
      <NavBar />
      <ShoeDisplay handleClick={handleClick} />
    </div>
  );
}

export default App;
