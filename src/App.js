import react from 'react';
import './App.css';
import Navb from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navb/>
      <br/>
        <h1>
        Come Visit Us At Our Campus
        </h1>
        <br/>
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Institut%20sup%C3%A9rieur%20des%20%C3%A9tudes%20technologiques%20de%20Ksar%20Hellal&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      
    </div>
  );
}

export default App;
