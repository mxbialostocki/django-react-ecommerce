import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>sick bookshop grrl</h1>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
