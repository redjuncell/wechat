import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import one from  "../assets/imges/icon/1.png"
import one_a from  "../assets/imges/icon/1_active.png"
import two from  "../assets/imges/icon/2.png"
import three from  "../assets/imges/icon/3.png"
import four from  "../assets/imges/icon/4.png"
import two_a from  "../assets/imges/icon/2-active.png"
import three_a from  "../assets/imges/icon/3-active.png"
import four_a from  "../assets/imges/icon/4-active.png"

import {
    NavLink,
    Link
} from  "react-router-dom"
import  ass  from  '../assets/css/home.module.scss'
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            item:1
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.children.map(v=>(
                        <Route exact={v.exact} key={v.path} path={v.path} component={v.component}></Route>
                    ))
                }
                <footer>
                    <div className={ass.content} onClick={() => this.setState({ item: 1 })}>
                        <NavLink to='/' exact className={ass.putong} activeClassName={ass.active} >
                            <img src={this.state.item == 1 ? one_a : one} className={ass.icon} alt="" />
                            <div>微信</div>
                        </NavLink>
                    </div>
                    <div className={ass.content} onClick={() => this.setState({ item: 2 })} >
                        <NavLink to='/friends' className={ass.putong} activeClassName={ass.active} >
                            <img src={this.state.item == 2 ? two_a : two} className={ass.icon} alt="" />
                            <div>通讯录</div>
                        </NavLink>
                    </div>
                    <div className={ass.content} onClick={() => this.setState({ item: 3 })} >
                        <NavLink to='/found' className={ass.putong} activeClassName={ass.active} ><img src={this.state.item == 3 ? three_a : three} className={ass.icon} alt="" />
                            <div> 发现</div>
                        </NavLink>
                    </div>
                    <div className={ass.content} onClick={() => { this.setState({ item: 4 }) }}>
                        <NavLink className={ass.putong} activeClassName={ass.active} to='/my'>
                            <img src={this.state.item == 4 ? four_a : four} className={ass.icon} alt="" />
                            <div>我的</div>
                        </NavLink>
                    </div>
                   
                    
                </footer>
            </div>
        );
    }
}

export default index;