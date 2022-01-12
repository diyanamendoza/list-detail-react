import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home';
import CharacterDetail from './views/CharacterDetail';
import styles from '../src/App.css'

export default function App() {
  return (
    <Router>
    <main className={styles.main}>
    <Layout>
        <Switch>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        </Switch>
    </Layout>
    </main>
  </Router>
  )
}
