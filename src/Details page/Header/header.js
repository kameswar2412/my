import React, { Component } from 'react';

import "../../App.css";
import Searchbox from './Searchbox/search';


class Header extends Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

  handleSearch=(value)=>{
console.log(value)
  }
    
    render(){
        return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href=" # ">Shoplane</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" key="1">
          <a className="nav-link active" aria-current="page" href=" # ">Home</a>
        </li>
        <li className="nav-item" key="2">
          <a className="nav-link" href=" # ">product</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" # "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            cart
          </a>
        </li> */}
        <li className="nav-item" key="3">
          <a className="nav-link disabled" href=" # "  aria-disabled="true">cart</a>
        </li>
      </ul>
      <Searchbox  onSearchValue={this.handleSearch} />
    </div>
  </div>
</nav>
        </div> );
    }
    }
    
 
export default Header;