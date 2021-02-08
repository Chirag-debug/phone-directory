import React from 'react';
import './Header.css'

const Header = function(props) {
    
    return(
        <div className="header">
           {props.heading}
         </div>
    )
}

export default Header;




//const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'};
    // return(
    //     <div style={headerStyle}>
    //        Phone Directory
    //      </div>
    // )

//import React, {Component} from 'react';

// class Header extends Component {
//     render() {
//         return(
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }
// }