import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import login from '../assets/css/login.module.scss'
class Login extends Component {
    render() {
        return (
            <div className={login.content}>
                <List className={login.list} renderHeader={() => '欢迎登录'} >
                    <InputItem
                        style={{ width: 200 }}
                        clear
                        placeholder="请输入您的账号"
                        ref={el => this.autoFocusInst = el}
                    >账号</InputItem>
                    <InputItem
                        className={login.item}
                        style={{ width: 200 }}
                        clear
                        error="true"
                        placeholder="请输入您的密码"
                        ref={el => this.passworld = el}
                    >密码</InputItem>
                </List>
                    <Button type="primary"
                        className={login.button}
                        size="large"
                        value
                        onClick={this.login.bind(this)}
                    >登录</Button>
            </div>
        );
    }
    login() {
        console.log(this)
        const userName = this.autoFocusInst.state.value;
        const passWorld = this.passworld.state.value;
        console.log(userName, passWorld)
    }
}

export default Login;