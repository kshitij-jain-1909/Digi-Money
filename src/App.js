import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import {makeStyles} from "@material-ui/core";
import Alert from "./components/Alert";

const useStyle = makeStyles(() =>({
  App:{
    backgroundColor: "#14161a",
    color: 'white',
    minHeight: '100vh'
  }

}));

function App() {
  

  const classes = useStyle()


  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          {/* <Route path="/" components={Homepage} exact/>
          <Route path="/coins/:id" components={CoinPage}/> */}

          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        
        
      </div>
      <Alert/>
    </BrowserRouter>
    
  );
}

export default App;
