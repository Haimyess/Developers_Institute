
import './App.css';
import Card from './Components/Card';
import robots from './Components/robots';

function App() {
  return (
    <div className="App">
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      
    </div>
  );
}

export default App;
