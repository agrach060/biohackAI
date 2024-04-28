import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import NavigationBar from './components/NavigationBar';
=======
>>>>>>> Stashed changes
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< Updated upstream
        <NavigationBar />
=======
>>>>>>> Stashed changes
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
