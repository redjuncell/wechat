import React, { Component } from 'react';
// import Button from 'antd-mobile/lib/button'
import  {Button} from  'antd-mobile'
class home extends Component {
    render() {
        return (
            <div>
                home
                <p>生活就是这样的吧</p>
                <Button type="primary"  className="am-button-borderfix"  size="small" style={{ marginRight: '8px' }}>nima</Button>
                <Button type="warning" size="small" disabled>我的</Button>
            </div>
        );
    }
}

export default home;