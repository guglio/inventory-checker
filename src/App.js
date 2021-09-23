import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Inventory from './components/Inventory'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Inventory />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
