import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../CardSlice';

export default function NavBar() {

  //totalquantity ko yha pe show krne ke liye hum import krenge;
  const {cart,totalQuantity} = useSelector((state)=>state.allcart);
  // khali isse ye card turant update nhi ho rha h to useeffect ko use krte h

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartTotal())  
  }
  ,[cart])
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span><Link to={'/'}>All Product</Link></span>
        <MDBBtn color='light'>
            <Link to={'/cart'}>cart({totalQuantity })</Link>
      </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}