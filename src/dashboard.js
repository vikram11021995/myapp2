import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
class DashBoard extends Component{
    constructor(){
        super();
        this.state={
            StateList:[]
        }
    }

    getState=()=>{
        axios.get("state.json").then(userdata=>{
            this.setState({
                StateList:userdata.data
            })
        })
    }

    componentDidMount(){
        this.getState();
    }

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center"><h2 className="text-danger">DASHBOARD</h2></div>
                    </div>
                    <div className="row m-3">
                        <div className="col-md-4">
                            <div className="p-5 card bg-info border text-center">
                                  <Link className="text-white" to='./statelist'><h3>{this.state.StateList.length} State List</h3></Link>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                    </div>
               </div>
    }
}

export default DashBoard;