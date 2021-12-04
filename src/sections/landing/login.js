import { Fragment, useState,userEffect,useContext } from 'react';
import { rgba } from 'polished';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authcontext from 'context/AuthContext';

import {
    Flex,
    Input,
    Label,
    Button,
  } from 'theme-ui';

const Login = ({clear}) => {
    const {login,error } = useContext(Authcontext);

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');


 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mobile);
    console.log(password);
    if(!mobile){
        toast.error("mobile number cannot be null");
        return 
    }
    if(password.length< 6 ){
        toast.error("passwords is too short");
        return 
    }

    login({mobile,password})
  };

    return (
        <Fragment>
        <Label htmlFor="Phone">Mobile Number</Label>
        <Input name="Phone" id="Phone" mb={3} onChange={(e)=> setMobile(e.target.value)}/>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" mb={3}  onChange={(e)=> setPassword(e.target.value)} />
        <Flex >
            <Button  onClick={clear} id="cleared" variant="muted" sx={styles.submitl50}>
            Cancel
            </Button>
            <Button  onClick={handleSubmit} id="login" variant="primary" sx={styles.submitr50}>
            Login
            </Button>
        </Flex>
        </Fragment>
    );
  };
  
  export default Login;

  
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
      backgroundColor: 'primary',
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
      maxWidth: [null, null, null, 480, 'none'],
      h2: {
        fontWeight: 700,
        fontSize: [8, null, null, 10, 9, 14],
        lineHeight: 1.36,
        letterSpacing: 'heading',
        color: 'textSecondary',
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
        color: 'textSecondary',
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
  