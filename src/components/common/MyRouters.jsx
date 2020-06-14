import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import  GuardRouter from '../../components/common/GuardRouter'
class MyRouters extends Component {
    // constructor(props){
    //    super(props)
    // }
    render() {
        return (
           <Switch>
               {
                   this.props.router.map(v=>(
                     <Route key={v.path} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}/>}></Route>
                   ))
               }
           </Switch>
        );
    }
}

export default MyRouters;