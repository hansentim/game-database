import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components and Pages
import Home from './pages/Home';
import Nav from './components/Nav';
//Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
