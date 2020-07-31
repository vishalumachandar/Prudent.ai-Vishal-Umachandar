import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'
import Validation from './Validation'


class Fileupload extends Component{
  state={
      filePresent:false,
      tableData:[],
      tableHeadings:[]
  }
  
  fileDataRead=(data, fileInfo)=>{
    //  console.dir(data, fileInfo)
    this.setState({tableHeadings:data[0]});
    data.shift()
    this.setState({tableData:data});
    this.setState({filePresent:true})
    // console.log(this.state.tableData,this.state.tableHeadings)

  }  
  render(){
      
    return(
      <div className="File-task">
          {/* <input type="file"></input> */}
           <CSVReader onFileLoaded={this.fileDataRead}/>
           {this.state.filePresent ?  
            <Validation headings={this.state.tableHeadings} data={this.state.tableData} />
            :null
        }
      </div>
    );
  }
}

export default Fileupload;
