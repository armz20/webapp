import React from 'react'
import QuestionsCard from '../components/QuestionsCard.js';
function data_row(key, data){
    return (<p style={{textAlign:'center', fontWeight:'bold'}}>{key}:<i style={{marginLeft:'10px', fontWeight:'lighter'}}>{data}</i></p>)
}

class ViewQuestions extends React.Component{
    constructor(props){
        super(props)
        this.state = {}


    }

    componentDidMount(){
        console.log(window.location.href.split('/')[4])
        window.API.questions_get().then(res => {
            console.log(res)
            this.setState({title:res.title, questions: res})
            this.render()
        })
    }

    render(){
        return (
            <div style={{width:'400px', position:'relative', marginLeft:'50%', left:'-200px'}}>
            <QuestionsCard questions={this.state.questions}>
            </QuestionsCard>
            </div>
        )
    }


    


}

export default ViewQuestions