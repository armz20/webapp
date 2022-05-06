import React from 'react'
import ProfileCard from '../components/ProfileCard.js';



function messageControls(){
    return (
        <div>
            <input ref={this.message} type="text" placeholder="Message" style={{paddingLeft:'10px', width:'340px',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'white', border:'1px solid' }}></input>
            <input onClick={() => {this.click()}} type="button" value="send" style={{marginLeft:'10px', width:'50px',marginTop:'10px', height:'35px', borderRadius:'10px', border:'none',background:'white', border:'1px solid' }}></input>
        </div>
    )
}


class MessengerComponent extends React.Component{
    
    constructor(props){
        super(props)
        this.message = React.createRef();
        this.state= {msg_html:null}
        var u_t = window.location.href.split('/')[4]
        this.is_you = (u_t == undefined) ? true: false;
    }

    componentDidMount(){
        if(this.is_you){
            this.openMessages()
        }else{
            this.tryOpenPM()
        }
    }

    render(){
        return (
            <div style={{width:'400px', position:'relative', marginLeft:'50%', left:'-200px'}}>
                {this.state.msg_html}

            </div> 
        )
    }

    click(){
        var msg = this.message.current.value
        if(msg.length > 0){
            window.API.messages_post({room_id: this.room.id, content: this.message.current.value}).then(res => {
                console.log(res)
            })
        }
    }

    openMessages(){
        window.API.user_profile(window.API.getCookie('public_token')).then(res => {
            var ret = []
            var i = 0
            for(var key in res.message_rooms){
                i++
                var m_r = res.message_rooms[key]
                console.log(m_r)

                ret.push(this.MessageItem('asdf', m_r.id))
                if(i == res.message_rooms.length){
                    console.log('done')
                    this.setState({msg_html: ret})
                }

            }
            //this.setState({msg_html: ret})
            
        })
    }

    tryOpenPM(){
        window.API.messages_pms(window.location.href.split('/')[4]).then(message_rooms => {
            this.room = message_rooms
            console.log(this.room)
            var ret = []
            for(var key in this.room.messages){
                var d = this.room.messages[key]
                console.log(d)
                ret.push(this.MessageItem(d.text))
            }
            console.log(ret)
            this.setState({msg_html: ret})
        })
    }

    openPM(id){
        window.API.user_profile(window.API.getCookie('public_token')).then(res => {
            console.log(res)
            for(var x in res.message_rooms){
                console.log(res.message_rooms[x].id)
                console.log(id)
                if(res.message_rooms[x].id == id){

                    this.room = res.message_rooms[x]
                    console.log('found')
                }
            }
            var ret = []
            console.log(this.room)
            for(var key in this.room.messages){
                var d = this.room.messages[key]
                ret.push(this.MessageItem(d.text))
            }
            this.setState({msg_html: ret})
        })
    }


    MessageItem(text, id){
        var self = this
        return (
            <a style={{color:'blue', width:'100%', display:'block'}} onClick={() => {this.openPM(id)}}>{text}</a>
        )
    }
}

export default MessengerComponent