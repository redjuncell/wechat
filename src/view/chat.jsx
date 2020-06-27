import React, { Component } from 'react';

class chat extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className={chat.header_left} style={{height:30,backgroud:"#45454"}}>
                        <span>《</span>
                        <span>聊天人</span>
                    </div>
                </header>
                <section></section>
                <footer>
                    <input type="text" ref="input"/>
                    <input type="button" value="发送" onClick={this.postChat.bind(this)}/>
                </footer>
            </div>
        );
    }
    postChat(){
       console.log(this.refs.input.value)
    }
}

export default chat;