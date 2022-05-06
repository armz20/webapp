import React , {useState, useEffect} from 'react'
class TagComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: props.text}
    }
    




    render(){
        return (    
            <span style={{width:'auto', float:'left', background:'grey', padding:'5px', borderRadius:'5px', color:'white', margin:'0 0 5px 5px', fontSize:'13px'}}>
                {this.state.text}
            </span>
        )
    }

};

export default TagComponent;