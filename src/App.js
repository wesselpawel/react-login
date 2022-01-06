import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return( 
    <Router>
      <Header/>
    </Router>
  )
}

export default App;
