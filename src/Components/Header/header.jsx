import React from 'react'
import  propTypes  from 'prop-types'

const Header = (props) => {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
         <Link className="nav-a active" aria-current="page" href="#">Home</a>
        </li> */}
        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
         <a className="nav-link active" href="#about">About</a>
        </li>
        <li className="nav-item">
         <a className="nav-link active" href="/membership">By MemberShip</a>
        </li>
        <li className="nav-item">
         <a className="nav-link active" href="#contact">Contact Us</a>
        </li>
      </ul>
      { props.searchbar?<form className="d-flex"  role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
    </div>
  </div>
</nav>
</div>
  )
}

export default Header

// Header.defaultprops ={ //it developer does not buield the tittle then this default tittle will show
// title: "your tittle here",
// searchbar : true
// }

Header.propTypes = {
  title: propTypes.string, //types in reactjs (in this code title only access require string  )
  searchbar : propTypes.bool.isRequired
}
