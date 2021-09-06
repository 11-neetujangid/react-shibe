import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;