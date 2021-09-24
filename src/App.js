import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Inventory from './components/Inventory'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function App () {
  return (
    <>
    <CssBaseline />
    <Container >
    <Router>
      <Switch>
        <Route path='/' exact>
          <Inventory />
        </Route>
      </Switch>
    </Router>
    </Container>
    </>
  )
}

export default App
