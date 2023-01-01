import {  useState,useContext } from 'react';

import {
    Box,
     Button,
    Typography,
    Container,
  } from '@mui/material';
  import 'react-toastify/dist/ReactToastify.css';
  import Login from './login';
  import Register from './register';
  import Verification from './verification';
  import Authcontext from 'context/AuthContext';
  import { rgba } from 'polished';
  import Image from 'next/image'
  import serverRack from 'assets/images/server-rack.png';
  

  export default function Banner(){
    
    const {clearSession} = useContext(Authcontext);
    const [state, setState] = useState('cleared');
  
    console.log(clearSession);

    const showForm  = (e) =>{
      setState(e);
    }
  
    return (
        <>
      
        <Box as="section" id="home" sx={styles.section}>
        <Container>
          <Box sx={styles.grid}>
            <Box as="form" sx={styles.domainCard} >
            { state == 'cleared'  && 
            <>
            <Typography variant="h4" component="h3" sx={{ paddingY:'30px'}} >Powering your buisness with Smart Inventory Systems</Typography>

            <Box  as="div" sx={{display:'flex', flexDirection:"column", rowGap: '10px', justifyContent: 'space-between' , paddingTop:'5px'}} >
              <Button onClick={(e)=>{
                console.log(clearSession);
                clearSession()
                showForm('showLoginForm')
                }} id="showLoginForm" variant="contained" 
                
                style={{ padding: "15px 0px" }}
                >
                Login
              </Button>
              <Button onClick={(e)=>{
                console.log(clearSession);
                clearSession()
                showForm('showRegisterForm')}} id="showRegisterForm" variant="contained" 

                style={{ padding: "15px 0px" }}
                >
                Register
              </Button>
              </Box>
              </>
            }
            {state == 'showLoginForm'  &&  <Login showForm={showForm} />  }
            {state == 'needVerification'  &&  <Verification showForm={showForm} />}
            {state == 'showRegisterForm'  &&  <Register showForm={showForm} /> }
  
            </Box>
            <Box as="figure" sx={styles.illustration}>
              <Image src={serverRack} loading="lazy" alt="sever-rack" />
            </Box>
          </Box>
        </Container>
      </Box>  </>  );
  };
  
  
  const styles = {
    otpcenter:{
      'max-width': '300px',
      'margin': 'auto'
    },
    otp:{
      width:'4rem',
      height:'4rem',
    },
    section: {
      backgroundColor: '#2a0a4e',
      pt: [17, null, null, 20, null],
      pb: [6, null, null, 12, 16],
    },
    grid: {
      gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
      display: 'grid',
      minHeight: [null, null, null, null, null, '66vh', '81vh'],
      alignItems: 'center',
      gridTemplateColumns: [
        '1fr',
        null,
        null,
        null,
        'repeat(2, 1fr)',
        '510px 1fr',
      ],
    },
    domainCard: {
      background: 'white',
      boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
      borderRadius: 10,
      p: ['30px 25px 50px', null, null, '40px 40px 60px'],
      m: [null, null, null, '0 auto', 'unset'],
      maxWidth: '480px',
      h2: {
        fontWeight: 700,
        fontSize: [8, null, null, 10, 9, 14],
        lineHeight: 1.36,
        letterSpacing: 'heading',
        color: '#2a0a4e',
        mb: [5, null, null, 7, 8],
      },
    },
    inputGroup: {
      alignItems: 'center',
      border: (theme) => `1px solid ${theme.colors.borderColor}`,
      borderRadius: 5,
      px: [3, null, null, 6],
      input: {
        border: 0,
        borderRadius: 0,
        fontSize: [1, null, null, 2],
        minHeight: [45, null, null, 60],
        p: 0,
        ':focus': {
          boxShadow: 'none',
        },
        '::placeholder': {
          fontSize: '15px',
          lineHeight: 1.33,
          color: rgba('#02073E', 0.4),
        },
        ':-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 30px white inset !important',
        },
      },
  
      select: {
        border: 0,
        color: '#2a0a4e',
        fontWeight: 500,
        fontSize: [0, null, null, '15px'],
        lineHeight: 1.33,
        letterSpacing: 'heading',
        minHeight: [45, null, null, 60],
        minWidth: [60, null, null, 75],
        p: 0,
        textTransform: 'uppercase',
        ':focus': {
          outline: 0,
        },
        '+ svg': {
          color: '#A6A8BB',
          height: 40,
          width: 40,
        },
      },
    },
    submit: {
      fontSize: [1, null, null, 2],
      mt: [4],
      minHeight: [45, null, null, 60],
      width: '100%',
    },
    submitl50: {
      fontSize: [1, null, null, 2],
      mt: [4],
      mr: [5],
      minHeight: [45, null, null, 60],
      width: '50%',
    },
    submitr50: {
      fontSize: [1, null, null, 2],
      mt: [4],
      ml: [5],
      minHeight: [45, null, null, 60],
      width: '50%',
    },
    note: {
      fontStyle: 'italic',
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      textAlign: 'center',
      color: rgba('#02073E', 0.5),
      mt: [4],
    },
  };
  