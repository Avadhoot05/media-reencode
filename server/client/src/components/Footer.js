import React from 'react';
import { Container, Grid, Typography, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import {VscGithubInverted} from "react-icons/vsc";
import {SiGeeksforgeeks} from "react-icons/si";



const footerStyle = {
  backgroundColor: '#f4f4f4',
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
                Connect with the developer
            </Typography>
        <Grid container spacing={0} justify="space-between" width="40%" minWidth="300px">
          
        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="Website" arrow>
            <Link to="https://avadhootkhedekar.com" target='_blank'>
                <CgWebsite color='#666666' size={25}/>
            </Link>    
            </Tooltip>
        </Grid>

        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="Linkedin" arrow>
                <Link to="https://www.linkedin.com/in/avadhootkhedekar/" target='_blank'>
                    <AiFillLinkedin color='#666666' size={25}/>
		        </Link>
            </Tooltip>
        </Grid>
        
        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="Email" arrow>
                <Link to="mailto: khedekaravadhoot@gmail.com" target='_blank'>
                    <MdEmail color='#666666' size={25}/>
                </Link>
            </Tooltip>
        </Grid>
        
        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="GitHub" arrow>
                <Link to="https://github.com/Avadhoot05" target='_blank'>
                    <VscGithubInverted color='#666666' size={25}/>
			    </Link>
            </Tooltip>
        </Grid>

        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="LeetCode" arrow>
                <Link to="https://leetcode.com/avadhoot05/" target='_blank'>
                    <SiLeetcode color='#666666' size={25}/>
			    </Link>
            </Tooltip>
        </Grid>

        <Grid item xs={2}  style={sectionStyle}>
            <Tooltip title="GeeksForGeeks" arrow>
                <Link to="https://auth.geeksforgeeks.org/user/khedekaravadhoot/" target='_blank'>
                    <SiGeeksforgeeks color='#666666' size={25}/>
			    </Link>
            </Tooltip>
        </Grid>
        
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
