import React from 'react';
import logo from '../../../logos/Logo.png'
import header from '../../../images/header-img.png'
import './Header.css'
const Header = () => {
    return (

        <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img class="w-50 ml-5" src={logo} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav ml-auto m-2 p-3">
      <li class="nav-item active mx-3">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link " href="#" tabindex="-1" >Concerns</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link " href="#" tabindex="-1" >Event</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link " href="#" tabindex="-1" >Contact</a>
      </li>
      <li class="nav-item mx-3">
        <button class="btn btn-success">Login</button>
      </li>
    </ul>
  </div>
</nav>

<div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),
 url(${header})`, backgroundPosition: 'center',
 backgroundSize:'cover'}} class='header'>
     <br/>
     <br/>
        <h1 class='text-center text-white py-5'>Find Your House Rent</h1>
        <br/>
        <br/>
        <form class="form-inline">
  
  <div class="form-group mx-auto">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Search..."/>
  <button type="submit" class="btn btn-success mx-2">Find Now</button>

  </div>
</form>
</div>
    
</div>

    );
};

export default Header;