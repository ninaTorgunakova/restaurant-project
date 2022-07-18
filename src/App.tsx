import './App.scss';
import Header from './Header/Header';
import About from './About/About';
import Menu from './Menu/Menu';
// import Reservation from './Reservation/Reservation';
// import Gallery from './Gallery/Gallery';
import Contacts from './Contacts/Contacts';

function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>
      <Menu/>
      {/* <Reservation/> */}
      {/* <Gallery/> */}
      <Contacts/>
    </div>
  );
}

export default App;

