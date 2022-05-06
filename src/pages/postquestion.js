import React from 'react'
import ProfileCard from '../components/ProfileCard.js';
function data_row(key, data){
    return (<p style={{textAlign:'center', fontWeight:'bold'}}>{key}:<i style={{marginLeft:'10px', fontWeight:'lighter'}}>{data}</i></p>)
}

class PostQuestion extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.title = React.createRef();
        this.question = React.createRef();
        this.tags = React.createRef();

    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <div style={{width:'400px', position:'relative', marginLeft:'50%', left:'-200px'}}>
                    <input ref={this.title} type="text" placeholder="Title" style={{paddingLeft:'10px', width:'100%',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'white', border:'1px solid' }}></input>
                    <textarea ref={this.question} rows="30" placeholder="Question..." style={{paddingLeft:'10px', paddingTop:'10px', width:'100%', marginTop:'10px', borderRadius:'10px', border:'none', background:'white', border:'1px solid'}}></textarea>
                    <input ref={this.tags} type="text" placeholder="Tags  (separated by spaces)" style={{paddingLeft:'10px', width:'100%',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'white', border:'1px solid' }}></input>
                    <input type="button" value="Post Question" onClick={() => {this.click()}} style={{paddingLeft:'10px', width:'100%',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'#f74a4a',color:'white' }}></input>
                </div>
            </div>
        )
    }

    click(){
        var tags = this.tags.current.value.split(' ')
        if(tags.length < 0){

        }else{
            window.API.questions_post(this.title.current.value, this.question.current.value, tags).then(res => {
                console.log(res)
                if(!res.error){
                    alert("Question Posted")
                    window.location = `/question/${res.id}`
                }
            })
        }
    }
    
    


}

export default PostQuestion