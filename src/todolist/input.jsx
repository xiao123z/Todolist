import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
@observer
    @inject('store')
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:""
         }
    }
   
    render() { 
        return ( 
            <>
                <input type="text" onChange={(e) => { 
                    this.setState({msg:e.target.value})
                }}/>
                <button onClick={
                    () => { 
                        this.props.store.add(this.state.msg)

                    }}>添加</button>
            </>
         );
    }
}
 
export default Input;