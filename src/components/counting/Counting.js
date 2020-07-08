import React from 'react'

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }
    render(){
        
        return(
            <div className="container">
                <h1>count: {this.state.count}</h1>
            </div> 
        )
    }
    componentDidMount() {
    this.myint = setInterval(()=>{
        while(this.state.count < 100){
            this.setState(prevState=>({
                count:prevState.count+1
            }))
        }
    },1000)
}
}

export default Count;