import React from 'react'
import { Link } from 'react-router-dom';
import '../profile.css';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

const Profile = () => {
    const history = useHistory();

    const logout = () => {
        const csrftoken = Cookies.get('csrftoken');
        return fetch('/auth/logout/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                'X-CSRFToken':csrftoken,
              }, 
          }).then(resp => resp.json()).then(localStorage.clear(), history.push('/'), window.location.reload());
        
    }
    console.log("username")
    return (
        <div> 
        {localStorage.getItem("username") !==null ? (
            <div>
                <div className='options1'><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="profilepic"></img>
                <a href='/postquestion' className="userfeat" >Post a question</a>
                <a href='/Messages' className="userfeat" >Inbox</a></div>
                
                <h2 align="center">Welcome, {localStorage.getItem("username")}</h2>
               
                <div className="options">
                   
                    <a href="http://127.0.0.1:8000/reset_password/" className="update"> Reset password</a>
                    <a href="http://127.0.0.1:8000/web/updateuser/" className="update"> Update profile</a>
                    
                <button className="logoutbtn" onClick={()=>logout()}> Logout</button>
                <br></br><br></br><br></br>



                    
                </div>
            </div>
            ) : 
            (<p className = "notify"><img src={require('./profile.jpg')} /></p>)
        }​
    </div>

    )
}

export default Profile