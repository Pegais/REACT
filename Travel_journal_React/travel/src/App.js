import Navbar from './Components/Navbar';
import './App.css';
import './style.css';
import Body from './Components/Body';
import Object from './Components/Object';

function App() {
  const card = Object.map((item) => {
    return (
      <Body
         item={item}
      
      /> 
      
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section>
        {card}
      </section>
               
    </div>
  );
}

export default App;
