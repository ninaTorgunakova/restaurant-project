import './App.scss';
import Header from './Header/Header';
import About from './About/About';
// import Menu from './Menu/Menu'
// import MenuDishes from './MenuDishes/MenuDishes';
// import Reservation from './Reservation/Reservation';
// import Gallery from './Gallery/Gallery';
import Contacts from './Contacts/Contacts';

function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>
      {/* <Menu/>
      <MenuDishes/>
      <Reservation/>
      <Gallery/> */}
      <Contacts/>
    </div>
  );
}

export default App;

