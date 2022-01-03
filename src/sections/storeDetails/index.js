import React from 'react'
import {
    Avatar,
    Button,
    Card,
    Divider,
    Icon,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Grid,
    CardHeader,
    CardContent,
    Stack
} from '@mui/material'
import FormDialog from './EditStoreDetails';

const Store = ({Details}) => {

  let keys = Object.keys(Details[0])

    return (

      <Grid container spacing={2}>
      <Grid  item xs={12}  >
      <Stack direction="row" justifyContent="end">
          <FormDialog storeObj={Details[0]}/>
      </Stack>
      </Grid>

        <Grid  item  xs={12} lg={6} >
                <Card  elevation={3}>

                <CardHeader sx={{background:"#2a0a4e", color:"#fff"}} title={'Store Details'} titleTypographyProps={{variant:'h7' }}/>
                       <CardContent>
                <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          <b>Store ID</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['bid']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          <b> Store Type</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['btype']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b>GST/Verification ID</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['gst_number']}
                          </TableCell>
                          </TableRow>

                        <TableRow>
                          <TableCell>
                          <b> Address</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['address']} - {Details[0]['postal_code']}
                          </TableCell>
                          </TableRow>
                          

                     
                      </TableBody>
                  </Table>
                  </CardContent>
                </Card>
        </Grid>
        <Grid item  xs={12} lg={6} >
                <Card  elevation={3}>

                <CardHeader sx={{background:"#2a0a4e", color:"#fff"}} title={'Owner Details'} titleTypographyProps={{variant:'h7' }}/>
                       <CardContent>
                <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          <b> Owner Username</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          <b> Owner Email</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner_email']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b> Owner Phone Number</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner_phone']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b> Alternate Phone Number</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner_phone']}
                          </TableCell>
                          </TableRow>

                      </TableBody>
                  </Table>
                  </CardContent>
                </Card>
        </Grid>

        <Grid item  xs={12} lg={6}>
              <Card  elevation={3}>
              <CardHeader sx={{background:"#2a0a4e", color:"#fff"}} title={'Subscription Details'} titleTypographyProps={{variant:'h7' }}/>
                  <CardContent>
                  <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          <b> Subscripted Plan</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['sub_plan_name']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          <b>Subscribed Date</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['subscribed_date']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b>Token</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['subscription_token']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b> Status</b> 
                          </TableCell>
                          <TableCell>
                          { Details[0]['subscription_status']}
                          </TableCell>
                          </TableRow>


                      </TableBody>
                  </Table>
                  </CardContent>
              </Card>
        </Grid>
        <Grid item  xs={12} lg={6}>
              <Card  elevation={3}>
              <CardHeader sx={{background:"#2a0a4e", color:"#fff"}} title={'Plan Details'} titleTypographyProps={{variant:'h7' }}/>
                  <CardContent>
                  <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          <b> Retention Limit</b> 
                            </TableCell>
                          <TableCell>
                          {Details[0]['retention_limit']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          <b>  Particular Limit</b> 
                          </TableCell>
                          <TableCell>
                          {Details[0]['particular_limit']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b> User Limit</b>
                          </TableCell>
                          <TableCell>
                          {Details[0]['user_limit']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          <b>  Plan Period</b>
                          </TableCell>
                          <TableCell>
                          { Details[0]['plan_period']}
                          </TableCell>
                          </TableRow>


                      </TableBody>
                  </Table>
                  </CardContent>
              </Card>
        </Grid>

      </Grid>

  )
}

 
export default Store
