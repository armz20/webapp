import React from 'react'
import QuestionComponent from '../components/QuestionComponent.js'
function data_row(key, data){
    return (<p style={{textAlign:'center', fontWeight:'bold'}}>{key}:<i style={{marginLeft:'10px', fontWeight:'lighter'}}>{data}</i></p>)
}

class ViewQuestion extends React.Component{

    static getDerivedStateFromProps(props, current_state) {
        var ret = []
        if(current_state.answers != props.answers){
            for(var key in props.answers){
                var d = props.answers[key]
                ret['answers'] = [ret['answers'], (<QuestionComponent key={d.id} id={d.id} author_token={d.public_token} text={d.question} tags={d.tags}></QuestionComponent>)]
            }
        }
        return ret
    }


    constructor(props){
        super(props)
        this.state = {}
        this.response = React.createRef();
        this.tags = React.createRef();
    }

    componentDidMount(){
        this.question_id = window.location.href.split('/')[4]
        window.API.questions_get(this.question_id).then(res => {
            console.log(res)
            var ret = []
            for(var key in res.answers){
                var d = res.answers[key]

                ret['answers'] = [ret['answers'], (<QuestionComponent key={d.id} id={d.id} author_token={d.public_token} text={d.response} tags={d.tags}></QuestionComponent>)]
            }
            this.setState({title:res.title, question: res.question, answers: ret.answers})
            console.log(this.state)
            this.render()
        })
    }

    render(){
        return (
            <div style={{width:'400px', position:'relative', marginLeft:'50%', left:'-200px'}}>
                <h1 style={{width:'100%', textAlign:'center', textTransform:'capitalize', color:'#f74a4a'}}>{this.state.title}</h1>
                <p style={{margin:'10px', padding:'auto', fontSize:"20px", width:'100%', overflowWrap:'break-word'}}>{this.state.question}</p>
                <hr style={{color: '#f74a4a',backgroundColor:'#f74a4a',height: 3, float:'left', width:'100%', border:'none'}}/>
                {this.state.answers}
                <textarea ref={this.response} placeholder="Got an answer?" style={{width:'100%', marginTop:'10px',padding:'5px 0 0 5px', border:'1px solid', borderRadius:'10px', background:'white'}}></textarea>
                <input ref={this.tags} type="text" placeholder="Tags  (separated by spaces)" style={{paddingLeft:'10px', width:'100%',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'white', border:'1px solid' }}></input>
                <input type="button" value="Post Answer" onClick={() => {this.click()}} style={{paddingLeft:'10px', width:'100%',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'#f74a4a',color:'white' }}></input>
            </div>
        )
    }


    click(){

        
        window.API.answers_post({response:this.response.current.value, tags: this.tags.current.value.split(' '), question_id: this.question_id}).then(res => {
            console.log(res)
            if(!res.error){
                window.location.reload();
            }
        })
    }


}

export default ViewQuestion