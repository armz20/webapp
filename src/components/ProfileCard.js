import React , {useState, useEffect} from 'react'
import validation from './validation';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionComponent from '../components/QuestionComponent.js'



class ProfileCard extends React.Component{
    static getDerivedStateFromProps(props, current_state) {
        var ret = []
        if (current_state.username !== props.username) {
            ret['username'] = props.username
        }
        if(current_state.question_count !== props.question_count){
            ret['question_count'] = props.question_count
        }
        if(current_state.questions != props.questions){
            for(var key in props.questions){
                var d = props.questions[key]
                ret['questions'] = [ret['questions'], (<QuestionComponent key={d.id} id={d.id} author_token={d.public_token} text={d.question} tags={d.tags}></QuestionComponent>)]
            }
        }
        if(current_state.user_token != props.user_token){
            ret["user_token"] = props.user_token
            ret['msg_text'] = (props.isYou == true)? (<a href="/messages">Inbox</a>) : (<a href={'/messages/' + props.user_token} >Message</a>)
        }

        return ret
    }
    constructor(props){
        super(props);
        this.is_you = props.is_you
        console.log(props)
        this.state = {username: props.username, question_count: props.question_count, reply_count: 23, questions:null, user_token: props.user_token};

    }

    componentDidMount(){
        //var msg_text = (this.isYou == true)? (<a href="/messages">Inbox</a>) : (<a href={'/messages/' + this.state.user_token} >Message</a>);
        //this.setState({msg_text: msg_text})
    }

    render(){
        return(
            <div style={{width:'400px', position:'relative', marginLeft:'50%', left:'-200px', marginTop:'10px'}}>
                <div style={{width:"300px",marginLeft:'50px'}}>
                    <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" style={{width:'100px', height:'100px', borderRadius:'50px', float:'left'}}></img>
                    <div style={{position:'relative', width:'200px', float:'right'}}>
                        <p style={{margin:'10px', width:'200px', textAlign:'center', fontWeight:'bold'}}>{this.state.username}</p>
        
                        <a style={{margin:'10px', color:'#F74A4A', display:'block'}} href="/profile/manage">Edit Profile</a>
                        <a style={{margin:'10px', color:'#F74A4A', display:'block'}} href="/post/question">Post a question</a>
                    </div>
                </div>

                <div style={{height:'50px', width:'100%', background:'grey' ,float:'left', marginTop:'10px', borderRadius:'10px'}}>
                    <div style={{width:'33.3%', height:'100%', float:'left'}}>
                        <p style={{width:'100%', textAlign:'center',margin:'0px',padding:'0px', marginTop:'9px', fontSize:'30px'}}>{this.state.question_count}</p>
                    </div>
                    <div style={{width:'33.3%', height:'100%', float:'left'}}>
                        <p style={{width:'100%', textAlign:'center',margin:'0px',padding:'0px', marginTop:'9px', fontSize:'30px'}}>{this.state.reply_count}</p>
                    </div>
                    <div style={{width:'33.3%', height:'100%', float:'left'}}>
                        <p style={{width:'100%', textAlign:'center',margin:'0px',padding:'0px', marginTop:'14px', fontSize:'25px', color:'white'}}>{this.state.msg_text}</p>
                    </div>
                </div>
                <div style={{width:'100%', float:'left'}}>
                    <h2 style={{margin:'10px', marginBottom:'5px', width:'100%', 'textAlign':'center', float:'left'}}>Your Questions:</h2>
                    <hr style={{color: '#f74a4a',backgroundColor:'#f74a4a',height: 3, float:'left', width:'100%', border:'none'}}/>
                    {this.state.questions}
                </div>
            </div>
        )
    }

};

export default ProfileCard;