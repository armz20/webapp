import React from 'react'
import "../App.css"



const Home = () => {
    return (
        <div className="App">
  
      <body>
          <div class="home-search">
            <p className='intro'>WELCOME TO TEXTPERT FORUM</p>
            <p className='bottom-intro'>Have a question? Want to help? Join now!</p>
            <div className='searchBar'>
              <input placeholder="Enter a Keyword..."></input>
              <button className='searchButt'>Search</button>
            </div>       
          </div>
  
          <div className ="upper-bottom">
            <div className= "box1">WINDOWS</div>
            <div className= "box2">MAC</div>
          </div>
          <div className='lower-bottom'>
            <div className= "box3">UBUNTU</div>
           
          </div>
      </body>
  
  
  
      </div>
    );
  }
export default Home