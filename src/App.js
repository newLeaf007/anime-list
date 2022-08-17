import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Col,Row } from 'reactstrap';
import Menus from './components/Menus';
import GetAllQuotes from './components/Pages/GetQuotes/GetAllQuotes';

function App() {
  return (
    <div className="App">
          <div>
            <Header/>
            <Row>
              <Col md="4">
                <Menus/>
              </Col>
              <Col md="8">
                <GetAllQuotes/>
              </Col>
            </Row>
          </div>
    </div>
  );
}

export default App;
