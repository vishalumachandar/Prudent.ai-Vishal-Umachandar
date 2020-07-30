import React, { Component } from 'react';


class Table extends Component{
    state={
        isValid:false,
        value:"select"
    }

    handleChange=(event)=> {
      this.setState({value: event.target.value});
    }
  
    handleSubmit=(event)=> {
      event.preventDefault();
      this.filter(this.props.data,this.state.value,this.props.headings)
    }
    filter = (arr) => {
      let newarr=[]
      let i=0
      for(let i in arr){
         if(arr[i][3]===this.state.value){
           newarr.push=arr[i-1];
           console.log(i-1)
         } 
          console.log(newarr)

      }
    }
  render(){
      let val=false;
    const validate=["ID","Client Name","Amount","Risk Category"];
    if(this.props.headings.length===validate.length){
        for(var i=0;i<validate.length;i++){
            val=(this.props.headings[i]===validate[i])
        }
    }
            
    return(
      <div className="Table">
      {val?
      <div>
      <form onSubmit={this.handleSubmit}>
        <label for="risk">Choose Risk:</label>
          <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
        <table>
        {this.props.headings.map((head)=>{
            return(<th>{head}</th>)
        })}
        {this.props.data.map((row)=>{
            return(<tr>{row.map((data)=>{
                return(<td>{data}</td>)
            })}</tr>)
        })}
      </table><h3>Filtered result is console.logged</h3></div>: <h1>Invalid table</h1>
        }
          
      </div>
    );
  }
}

export default Table;