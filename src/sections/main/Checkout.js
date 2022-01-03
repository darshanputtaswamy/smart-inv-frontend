import  React, {useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader } from '@mui/material';
import Authcontext from 'context/AuthContext';


export default function CheckOut({ formState, selectedPlan }) {
  const { sessionUser } = useContext(Authcontext);
  return (

    <>
      <div className="w-full text-center mb-11">
        <h3 className="m-0 font-medium">
          Checkout Summary
        </h3>
      </div>
      <Paper elevation={4} sx={{display:'flex', justifyContent:'space-around', paddingBottom:'25px'}}> 

      <Grid conatiner spacing={2} sx={{ maxWidth:'90%', minWidth:'80%' }}>
        <Grid Item lg={12}
          md={12}
          sm={12}
          xs={12} >
          <Card elevation={4}>
            <CardHeader
              title={<><Typography variant="div" component="p">
                Plan Details
              </Typography>
              </>
              }
              titleTypographyProps={{variant:'h7' }}
              
              />
            <CardContent>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                     
                    >
                      <TableCell component="th" scope="row">
                        Plan Name
                      </TableCell>
                      <TableCell align="right">{selectedPlan.plan_name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Registery</TableCell><TableCell align="right">{selectedPlan.registory_limit + ' Statements'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell component="th" scope="row">Retention</TableCell><TableCell align="right">{selectedPlan.retention_limit + ' Days'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell component="th" scope="row">Plan Period</TableCell><TableCell align="right">{selectedPlan.plan_period + ' Days'}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell component="th" scope="row">Inventory</TableCell><TableCell align="right">{selectedPlan.particular_limit + ' Items'} </TableCell>
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
        <Grid Item Item lg={12}
          md={12}
          sm={12}
          xs={12} >

          <Card elevation={4}>
            <CardHeader
              title={<><Typography variant="div" component="p">
                Store Details
              </Typography>
              </>
              }
              titleTypographyProps={{variant:'h7' }}
              />
            <CardContent>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      key={1}
                     
                    >
                      <TableCell component="th" scope="row">
                        Store Name
                      </TableCell>
                      <TableCell align="right">{formState['name']}</TableCell>
                    </TableRow>
                    <TableRow
                      key={2}
                     
                    >
                      <TableCell component="th" scope="row">
                        Business Type
                      </TableCell>
                      <TableCell align="right">{formState['type']}</TableCell>
                    </TableRow>

                    <TableRow
                      key={3}
                     
                    >
                      <TableCell component="th" scope="row">
                        GST Number
                      </TableCell>
                      <TableCell align="right">{formState['gst_number']}</TableCell>
                    </TableRow>



                    <TableRow
                      key={4}
                     
                    >
                      <TableCell component="th" scope="row">
                        Address
                      </TableCell>
                      <TableCell align="right">{formState['address']}</TableCell>
                    </TableRow>
                    <TableRow
                      key={5}
                     
                    >
                      <TableCell component="th" scope="row">
                        Pincode
                      </TableCell>
                      <TableCell align="right">{formState['pincode']}</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid Item Item lg={12}
          md={12}
          sm={12}
          xs={12} >

          <Card elevation={4}>
            <CardHeader
              title={<><Typography variant="div" component="p">
                Owner Details
              </Typography>
              </>
              } 
              titleTypographyProps={{variant:'h7' }}
              />
            <CardContent>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      key={1}
                     
                    >
                      <TableCell component="th" scope="row">
                        Owner Name
                      </TableCell>
                      <TableCell align="right">{sessionUser['name']}</TableCell>
                    </TableRow>
                    <TableRow
                      key={2}
                     
                    >
                      <TableCell component="th" scope="row">
                        Owner Email
                      </TableCell>
                      <TableCell align="right">{sessionUser['email']}</TableCell>
                    </TableRow>

                    <TableRow
                      key={3}
                     
                    >
                      <TableCell component="th" scope="row">
                        Owner Phone
                      </TableCell>
                      <TableCell align="right">{sessionUser['phone']}</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid Item Item lg={12}
          md={12}
          sm={12}
          xs={12} >

          <Card elevation={4}>
            <CardHeader
              title={<><Typography variant="div" component="p">
                Payment Summary
              </Typography>
              </>
              } 
              titleTypographyProps={{variant:'h7' }}
              />
            <CardContent>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                     
                    >
                      <TableCell component="th" scope="row">
                      <Typography variant="h7" component="p">
                        Cost
                        </Typography>
                      </TableCell>
                      <TableCell align="right"><Typography variant="h7" component="p"> ₹{parseFloat(selectedPlan.price.replace(',', ''))}/Year</Typography></TableCell>
                    </TableRow>
                    <TableRow
                     
                    >
                      <TableCell component="th" scope="row">
                      <Typography variant="h7" component="p">Transaction Charge</Typography>
                        
                      </TableCell>
                      <TableCell align="right"><Typography variant="h7" component="p">2%</Typography></TableCell>
                    </TableRow>

                    <TableRow
                     
                    >
                      <TableCell component="th" scope="row">
                      <Typography variant="h7" component="p">
                        GST
                        </Typography>
                      </TableCell>
                      <TableCell align="right"><Typography variant="h7" component="p">18%</Typography></TableCell>
                    </TableRow>

                    <TableRow
                     
                    >
                      <TableCell component="th" scope="row">
                        <Typography variant="h5" component="p">
                              Total
                        </Typography>
                        
                      </TableCell>
                      <TableCell align="right">
                      <Typography variant="h5" component="p">
                      {`₹` + parseFloat(selectedPlan.price.replace(',', '')) * 1.20 + `/ Year`}
                        </Typography>
                        
                        </TableCell>
                    </TableRow>


                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Paper>

    </>
  );
}