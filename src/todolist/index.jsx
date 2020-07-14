import React, { Component} from 'react'
import Input from './input'
import List from './list'
class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Input></Input>
                <List></List>
            </>
         );
    }
}
 
export default Box;