import React from 'react'
import { Card, Grid, Button,CardMedia,CardHeader,Typography,CardContent,CardActionArea  } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer'; 
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const useStyles = makeStyles(({ palette, ...theme }) => ({

    pricingCard: {
        borderRadius: 20,
        '& h5': {
            letterSpacing: 3,
        },
        '& h1': {
            lineHeight: 1,
        },
    },
    PricingFeature:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const Pricing = ({planList, plan, setPlan}) => {

    const classes = useStyles()

    return (
        <div className="m-sm-30 relative">
            <div className="w-full text-center mb-11">
                <h3 className="m-0 font-medium">
                    Choose the plan that's right for your Store
                </h3>
            </div>
            <div>
                <Grid container spacing={2}>
                    {planList.map((item, ind) => (
                        <Grid
                            key={item.plan_id}
                            item
                            lg={4}
                            md={4}
                            sm={4}
                            xs={12}
                            onClick={(e) => setPlan(item.plan_id)}
                        >
                     <Card
                                elevation={plan == item.plan_id ? 20 : 1}
                                className={clsx(
                                    'card text-center p-sm-24',
                                    classes.pricingCard
                                )}
                            >
                        <CardHeader
                        title={<><Typography variant="h4" color='#2a0a4e' component="span">
                                {item.plan_name }   {plan == item.plan_id ? <CheckCircleIcon /> : null } 
                                </Typography> 
                                <small>₹{item.price} / Year </small> 
                               
                               </>
                        }  /> 
                        <CardContent className={classes.PricingFeature}>
                           <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                            <TableCell component="th" scope="row">Registery</TableCell><TableCell align="right">{item.registory_limit + ' Statements'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                            <TableCell component="th" scope="row">Retention</TableCell><TableCell align="right">{item.retention_limit + ' Days'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                            <TableCell component="th" scope="row">Plan Period</TableCell><TableCell align="right">{item.plan_period + ' Days'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                            <TableCell component="th" scope="row">Inventory</TableCell><TableCell align="right">{item.particular_limit + ' Items'} </TableCell>
                                            </TableRow>
                                            <TableRow>
                                            <TableCell component="th" scope="row">Email Notification</TableCell><TableCell align="right">Yes</TableCell>
                                            </TableRow>
                                            
                                            <TableRow>
                                            <TableCell component="th" scope="row">Backup</TableCell><TableCell align="right">Yes</TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </Table>
                           </TableContainer>
                        </CardContent>
                             </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Pricing

