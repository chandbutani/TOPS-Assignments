import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const Register = () => {
        console.log("Register");
        let data = { name, email, password }
        console.log(data);

        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            result.json().then((resp) => {
                console.log(resp);
                navigate("/login")
            })
        })
    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

                    {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div> */}

                    <MDBBtn onClick={Register} className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Register;