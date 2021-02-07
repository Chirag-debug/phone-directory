import React, { Component } from "react";
import Header from "./Header"
import { Fragment } from 'react';

class App extends Component {
  render() {
    return (
       <Fragment>
         <Header />
         <button>Add</button>
         <div>
           <span>Name</span> <br/>
           <span>Phone</span>
         </div>
      </Fragment>
      );
      

    
  }
} 

export default App;