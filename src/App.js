
import "./App.css"
import Trip from './Components/Trip';
import Data from './Components/Data';

function App(){
  const dataset = Data.map(myDataFunction)
  function myDataFunction(elementItems) {
    return(
      <Trip
        details = {elementItems}
       />
    );
  }
  return (
    <div className='react--app--container'>
      <div className="nav--cont--bar">
        <img  className="imgClass" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOnsTBiMPLH_zx9nzLqjylpeJTV4W3fy71VXpFxevvg&s.jpg" />
      <h3 className="titleClass">Travel journal</h3></div>
      <div className="app--container">
        {dataset}
      </div>
    </div>
  );
}

export default App;
