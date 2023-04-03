import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'

import axios from 'axios';

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// MATERIAL UI
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Gpf() { 
    const dummyUserGithub = {
        name: "John Doe",
        company: "ABC Company",
        bio: "A passionate developer",
        followers: 100,
        following: 50,
        public_repos: 20,
        avatar_url: "https://via.placeholder.com/150",
      };

    const [username, setUsername] = useState()

    const handleUser = () => {
        let userName = document.getElementById("username").value;
        setUsername(userName)
        console.log(username)
    }

    const [userData, setuserData] = useState(dummyUserGithub)

    useEffect(() => {
        axios.get("https://api.github.com/users/" + username).then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });
    }, [username]);


    return (
        <>
            <Container>
                {/* FETCH USER */}
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}><TextField id="username" label="Enter User Name" variant="standard" style={{ width: '100%' }} /></Col>
                    <Col sm={4}><IconButton onClick={handleUser}><GpsFixedSharpIcon style={{ color: 'red', fontSize: '30px' }} /></IconButton ></Col>
                </Row>

                {/* USER GITHUB PROFILE */}
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}><Card sx={{ width: '100%' }}>
                        <img src={userData.avatar_url} alt="user" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className = "text">
                            {userData.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className = "text">
                            {userData.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className = "text">
                            {userData.bio}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className = "text">
                            {userData.followers}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className = "text">
                            {userData.following}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className = "text">
                            {userData.public_repos}
                            </Typography>
                        </CardContent>
                    </Card></Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </>
    )
}
