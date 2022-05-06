import React , {useState, useEffect} from 'react'
import validation from './validation';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TagComponent from '../components/TagComponent'


class QuestionComponent extends React.Component{
    static getDerivedStateFromProps(props, current_state) {
        var ret = []
        if (current_state.author_token !== props.author_token) {
            ret['author_token'] = props.author_token
        }
        console.log(ret)
        return ret
    }



    constructor(props){
        super(props);
        console.log(props)
        this.state = {text: props.text, author_token:props.author, tags: props.tags, id: props.id}
    }
    
    componentDidMount(){
        console.log('mount')
        var i = 0;
        var tag_html = []
        for(var key in this.state.tags){
            i++
            var d = this.state.tags[key]
            tag_html.push(<TagComponent key={d+i} text={d}></TagComponent>)
        }
        window.API.user_profile(this.state.author_token).then(user => {
            this.setState({author:user.username, tag_html: tag_html})
        })
    }



    render(){
        return (    
            <div>
                <div style={{width:'100%', display:'block',height:'auto'}}>
                    <span onClick={() => {window.location.href = '/profile/'+ this.state.author_token}} style={{display:'block'}} style={{height:'auto',width:'80px', float:'left'}}>
                        <img style={{marginTop:'10px', marginLeft:'50%', left:'-25px', position:'relative', width:'50px', height:'50px', borderRadius:'25px'}} src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"></img>
                        <b style={{marginTop:'5px', marginBottom:'5px',padding:'0px', lineHeight:'12px', float:'left', width:'100%', textAlign:'center', fontSize:'12px'}}>{this.state.author}</b>
                    </span>
                    
                    <div onClick={() => {window.location.href = '/question/' + this.state.id}} style={{display:'block', float:'left', width:'calc(100% - 90px)'}}>
                        <p style={{margin:'10px 0 0 10px',height:'auto',width:'100%', display:'block',float:'left'}}>{this.state.text}</p>
                        <span style={{height:'auto',display:'block', float:'left', width:'calc(100% - 60px)', textAlign:'center', margin:'10px 0 0 10px'}}>
                            {this.state.tag_html}
                        </span>
                    </div>
                </div>
                <hr style={{color: '#f74a4a',backgroundColor:'#f74a4a',height: 3, float:'left', width:'100%', border:'none'}}/>
            </div>
        )
    }

};

export default QuestionComponent;