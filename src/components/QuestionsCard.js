import React , {useState, useEffect} from 'react'
import validation from './validation';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionComponent from '../components/QuestionComponent.js'


//function QuestionComponent(question_id, title, author){
//    return (<a href={"/question/"+question_id} style={{display:'block', color:'#f74a4a', marginTop:'10px', float:'left', width:'100%'}}>{title}</a>)
//}

class QuestionsCard extends React.Component{
    static getDerivedStateFromProps(props, current_state) {
        var ret = []
        if (current_state.username !== props.username) {
            ret['username'] = props.username
        }

        if(current_state.questions != props.questions){
            for(var key in props.questions){
                var d = props.questions[key]
                ret['questions'] = [ret['questions'], (<QuestionComponent key={d.id} id={d.id} author_token={d.public_token} text={d.question} tags={d.tags}></QuestionComponent>)]
            }
        }
        console.log(ret)
        return ret
    }
    constructor(props){
        super(props);
        this.state = {}
    }




    render(){
        return(
            <div style={{width:'100%'}}>
                <hr style={{color: '#f74a4a',backgroundColor:'#f74a4a',height: 3, float:'left', width:'100%', border:'none'}}/>
                {this.state.questions}
            </div>
        )
    }

};

export default QuestionsCard;