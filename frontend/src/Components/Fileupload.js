import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'
import Table from './Table'


class Fileupload extends Component{
  state={
      filePresent:false,
      tableData:[],
      tableHeadings:[]
  }
  
  fileDataRead=(data, fileInfo)=>{
    //  console.dir(data, fileInfo)
    
     this.setState({tableData:data});
     this.setState({filePresent:true})
     console.log(data)
     this.setState({tableHeadings:data[0]});

  }  
  render(){
      
    return(
      <div className="File-task">
          {/* <input type="file"></input> */}
           <CSVReader onFileLoaded={this.fileDataRead}/>
           {this.state.filePresent ?  
            <Table headings={this.state.tableHeadings} data={this.state.tableData} />
            :null
        }
      </div>
    );
  }
}

export default Fileupload;
