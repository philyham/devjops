import './App.css';
import Jobs from './components/jobs/Jobs';
import Navbar from './components/navbar/Navbar';
import Button from './components/button/Button';

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
