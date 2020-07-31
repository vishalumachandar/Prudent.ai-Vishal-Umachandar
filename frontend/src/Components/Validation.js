import React, { Component } from 'react';
import Table from './Table'
import './validation.css'


class Validation extends Component{
    state={
        value:"None",
        isFiltered:false,
        filteredArray:[]
    }

    handleChange=(event)=> {
      this.setState({value: event.target.value});
    }
  
    handleSubmit=(event)=> {
      event.preventDefault();
      this.filter(this.props.data,this.props.headings)
    }
    filter = (dataArray,headingArray) => {
      if(this.state.value!=="None"){
        let newarr=[]
      this.setState({isFiltered:true})
      let idx=headingArray.indexOf("Risk Category")
      for(let i in dataArray){
         if(dataArray[i][idx]===this.state.value){
           newarr.push(dataArray[i]);
         } 
          this.setState({filteredArray:newarr})

      }
    }
    else{
      this.setState({isFiltered:false})
    }
    }
  render(){
    // TO CHECK IF THE COLUMNS MATCH
    let validated=false;
    const formatArray=["ID","Client Name","Amount","Risk Category"];
    if(this.props.headings.length===formatArray.length){
        for(var i=0;i<formatArray.length;i++){
            validated=(this.props.headings[i]===formatArray[i])
        }
    }
    console.log(this.props.data)
    //TO CHECK IF THE DATATYPES ARE THE SAME
      const datatypeArray=[/^[0-9]+$/,/^[A-Za-z ]+$/,/^[$0-9,.]+$/,/^[A-Za-z]+$/];
    // console.log(datatypeArray[2].test(testArray[2]))
      this.props.data.map((data)=>{
        if(data[0]!==""){
        if(!datatypeArray[0].test(data[0])){
          validated=false
        }
        if(!datatypeArray[1].test(data[1])){
          validated=false
        }
        if(!datatypeArray[2].test(data[2])){
          validated=false
        }
        if(!datatypeArray[3].test(data[3])){
          validated=false
        }
        }
      })
        

    return(
      <div className="Table">
      {validated?
      <div>
      <h3 className="valid">This table is valid</h3>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="risk">Choose Risk:</label>
          <select value={this.state.value} onChange={this.handleChange}>
                <option value="None">None</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
      {this.state.isFiltered?
        <Table headings={formatArray} data={this.state.filteredArray}>*This table is filtered*</Table>
      :
        <Table headings={formatArray} data={this.props.data}></Table>
      }
      </div>:<h3 className="invalid">Invalid table!</h3>
      }    
      </div>
    );
  }
}

export default Validation;