import React, { Component } from 'react'
import './table.css'


class Table extends Component{
    render(){
        return(
            <div className="table-display">
                <table>
                    {this.props.headings.map((head)=>{
                        return(<th>{head}</th>)
                    })}
                    {this.props.data.map((row)=>{
                        return(<tr>{row.map((data)=>{
                            return(<td>{data}</td>)
                        })}</tr>)
                    })}
                </table>
            </div>
        );
    }
}

export default Table;