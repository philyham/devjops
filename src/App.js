import './App.css';
import Jobs from './components/jobs/Jobs';
import Button from './components/button/Button';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
     <Navbar />
     <div className="App">
      <Jobs />
     <Button />
     </div>
    </div>
  );
}

export default App;
