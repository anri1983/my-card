
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';


function App() {
  return (
    <div className='appWrapper'>
       <Header/>
       <Nav/>
       <Main/>        
    </div>
  );
}

export default App;
