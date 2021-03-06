import React, { Component } from "react";
import Header from "./Header"
import { Fragment } from 'react';
import './App.css'

class App extends Component {

  deleteHandler(message) {
    alert(message);
  }

  render() {
    let subscribers = [
      {
        id : 1,
        name : "Shilpa",
        phone : "8888888888"
      },
      {
        id : 2,
        name : "Shrishti",
        phone : "9999999999"
      }
    ]
    return (
       <div className="component-container">
         <Header heading="Phone Directory" />
         <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>
            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span> <br/>
              <span className="grid-item phone-heading">Phone</span>
            </div>

            {
              subscribers.map( sub => {
                return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span> <br/>
              <span className="grid-item">{sub.phone}</span> <br/>
              <span className="grid-item action-btn-container">
                <button className="custom-btn del-btn" onClick={this.deleteHandler.bind(this, "Delete Clicked")}>Delete</button>
              </span>
              </div>
              })
            }

         </div>
      </div>
      );
  }
} 

export default App;

//
