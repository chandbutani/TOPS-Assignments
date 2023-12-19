import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';
import Login from './Login';

function Navbar() {
    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand><Link to="/"> LOGO </Link> </MDBNavbarBrand>
                    <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                        {/* <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                        <MDBBtn outline>Search</MDBBtn> */}
                        <Link to="login" element={<Login />}>Login</Link>
                    </MDBInputGroup>
                </MDBContainer>
            </MDBNavbar>

            <Outlet></Outlet>
        </>
    );
}

export default Navbar;
