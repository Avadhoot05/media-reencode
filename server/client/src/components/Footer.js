import React from 'react';
import { Container, Grid, Typography, Tooltip } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import {VscGithubInverted} from "react-icons/vsc";
import {SiGeeksforgeeks} from "react-icons/si";



const footerStyle = {
  backgroundColor: 'lightgray',
  padding: '20px'
};

const sectionStyle = {
  marginBottom: '10px',
};

	

const Footer = () => {
  return (
    <footer style={footerStyle}>
        <Container maxWidth="lg" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
            <Typography variant="body1" component="p" fontSize={18} marginBottom={3}>
                Reach out the developer
            </Typography>
        <Grid container spacing={0} justify="space-between" width="40%" minWidth="300px">
          
        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="Website">
            <Link to="https://avadhootkhedekar.com" target='_blank'>
                <CgWebsite size={25}/>
            </Link>    
            </Tooltip>
        </Grid>

        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="Linkedin">
                <Link to="https://www.linkedin.com/in/avadhootkhedekar/" target='_blank'>
                    <AiFillLinkedin  size={25}/>
		        </Link>
            </Tooltip>
        </Grid>
        
        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="Email">
                <Link to="mailto: khedekaravadhoot@gmail.com" target='_blank'>
                    <MdEmail  size={25}/>
                </Link>
            </Tooltip>
        </Grid>
        
        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="GitHub">
                <Link to="https://github.com/Avadhoot05" target='_blank'>
                    <VscGithubInverted size={25}/>
			    </Link>
            </Tooltip>
        </Grid>

        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="LeetCode">
                <Link to="https://leetcode.com/avadhoot05/" target='_blank'>
                    <SiLeetcode size={25}/>
			    </Link>
            </Tooltip>
        </Grid>

        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="GeeksForGeeks">
                <Link to="https://auth.geeksforgeeks.org/user/khedekaravadhoot/" target='_blank'>
                    <SiGeeksforgeeks size={25}/>
			    </Link>
            </Tooltip>
        </Grid>
        
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
