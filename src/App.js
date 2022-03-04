import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
    <div>
    <div className = 'div1'>
 
    <header>
         <a class = "cta" href="#"><button></button></a>
       <nav>
        <div className='logo'>LOGO</div>
     
      </nav>
       <ul class='nav__links'>
         <li><a href="default.asp">Profile</a></li>
         <li><a href="default.asp">Sign-In</a></li>
      </ul>
  
    </header>
    </div>

      <input className="Search"
        type="search"
        placeholder="Seach" width="500" height="500"
      />
    <div className="loading">Showing results for...</div>
    <div className="content">

    <div className="box1">
    </div>
    <div className="box2">
    </div>
    <div className="box3">
    </div>
    
   </div>
   </div>
   </div>
  );
}

export default App;
