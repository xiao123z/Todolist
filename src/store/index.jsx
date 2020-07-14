import { observable ,action} from 'mobx'
class Demo { 
    @observable todo = [
        { msg: '吃飯', finsh: true },
        { msg: '睡覺', finsh: false },
    ]
    @action add (msg) {
        this.todo.push({msg:msg,finsh:false})
     }
    @action del (index) { 
        this.todo.splice(index,1)
    }
    @action updata (index) { 
        this.todo[index].finsh=true
    }
    
}
export default new Demo()