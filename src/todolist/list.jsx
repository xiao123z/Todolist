import React, { Component} from 'react'
import { observer, inject } from 'mobx-react'
import './index.css'
@inject('store')
    @observer
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
        }
        
    }
    componentDidMount () { 
        let data = this.props.store.todo
        this.setState({ list: data })
    }
    render () { 
        let {list }=this.state
        return ( 
            <>
                {list.map((item, index) => {
                    return (
                        <li key={index} className={item.finsh?"red":"blue"}>
                            {item.msg}
                            <button onClick={() => this.props.store.del(index)} >刪除</button>
                                {item.finsh ? <span>已完成</span> : <button onClick={() => {
                                    this.props.store.updata(index)

                                }}>未完成</button>}
                        </li>
                    )
                 })}
            </>
         );
    }
}
 
export default List;