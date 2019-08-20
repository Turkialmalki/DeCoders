import React, {Component} from 'react';
import axios from 'axios';
import "../App.css";

export default class AllVideos extends Component{

render(){
    console.log(this.props.task)
    return(
        <div>
            <iframe  width="100%" height="250px" 
            src={this.props.task} >
            </iframe>
        </div>
        
    );
    
}
}