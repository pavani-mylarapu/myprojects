import React from 'react';
class counter extends React.Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    updatebtn(){
        this.setState({counnter:this.state.counter+1})
    }
    render(){
        console.log('pavani')
        return<div>
            <button onClick={()=>{this.updatebtn()}}>change</button>
            <h1>pardhu</h1>
        </div>
    
    }
    
    
}

export default counter;