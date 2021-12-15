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

const Store = ({Details}) => {

  let keys = Object.keys(Details[0])

    return (

      <Grid container spacing={2}>
      <Grid  item xs={12}  >
      <Stack direction="row" justifyContent="end">
          <Button raised="true"  variant="contained"  color="primary" >
                Edit Details
          </Button>
      </Stack>
      </Grid>


        <Grid  key={1} item  xs={12} lg={6} >
                <Card  elevation={3}>

                <CardHeader title={'Store Details'} />
                       <CardContent>
                <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          Store ID
                          </TableCell>
                          <TableCell>
                          {Details[0]['bid']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          Store Type
                          </TableCell>
                          <TableCell>
                          {Details[0]['btype']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          GST/Verification ID
                          </TableCell>
                          <TableCell>
                          {Details[0]['gst_number']}
                          </TableCell>
                          </TableRow>

                        <TableRow>
                          <TableCell>
                            Address
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
        <Grid  key={1} item  xs={12} lg={6} >
                <Card  elevation={3}>

                <CardHeader title={'Owner Details'} />
                       <CardContent>
                <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          Owner Username
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                         Owner Email
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner_email']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          Owner Phone Number
                          </TableCell>
                          <TableCell>
                          {Details[0]['owner_phone']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          Alternate Phone Number
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

        <Grid item key={2}  xs={12} lg={6}>
              <Card  elevation={3}>
              <CardHeader title={'Subscription Details'} />
                  <CardContent>
                  <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                          Subscripted Plan
                          </TableCell>
                          <TableCell>
                          {Details[0]['sub_plan_name']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                          Subscribed Date
                          </TableCell>
                          <TableCell>
                          {Details[0]['subscribed_date']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                         Token
                          </TableCell>
                          <TableCell>
                          {Details[0]['subscription_token']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                            Status
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
        <Grid item key={2}  xs={12} lg={6}>
              <Card  elevation={3}>
              <CardHeader title={'Plan Details'} />
                  <CardContent>
                  <Table>
                      <TableBody>
                        
                      <TableRow>
                          <TableCell>
                              Retention Limit
                            </TableCell>
                          <TableCell>
                          {Details[0]['retention_limit']}
                          </TableCell>
                          </TableRow>

                          <TableRow>
                          <TableCell>
                            Particular Limit
                          </TableCell>
                          <TableCell>
                          {Details[0]['particular_limit']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                          User Limit
                          </TableCell>
                          <TableCell>
                          {Details[0]['user_limit']}
                          </TableCell>
                          </TableRow>


                          <TableRow>
                          <TableCell>
                            Plan Period
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
