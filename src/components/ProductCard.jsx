import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { addToCart } from '../CardSlice';

export default function App() {

  // useselector data ko display karane ke kaam aata h
  const item = useSelector((state)=>state.allcart.items )

  // usedipatch data ke function ko use karne ke liye aata h

  const dispatch = useDispatch();
  // console.log(item)
  return (
    <div className="m-2 ">
      <MDBContainer>
      <MDBRow className='mb-7'>
     {
      item.map((kuchbhi)=>(

        <MDBCol size='4 '>

        <MDBCard className='mt=2'>
          <MDBCardImage src={kuchbhi.img} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{kuchbhi.title}</MDBCardTitle>
            <MDBCardText>
             {kuchbhi.price} </MDBCardText>
            <MDBBtn  onClick={()=>dispatch(addToCart(kuchbhi))}>Add To Cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      ))
     }
    </MDBRow>
    </MDBContainer>
    </div>
  );
}