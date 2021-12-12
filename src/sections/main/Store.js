import { ViewDayOutlined } from '@mui/icons-material';
import { Grid, Card, CardHeader, CardActions, CardContent,CardActionArea, Button,Typography,IconButton } from '@mui/material'; 
import { useRouter } from "next/router"

const Store = ({store}) => { 
    const router = useRouter();


    return (
        <Grid item xs={12} lg={6} >
                <Card elevation={3}>
                    <CardHeader
                        action={
                            <IconButton onClick={(e)=>{ router.push("/main/"+store.bid)}}>
                                <ViewDayOutlined />
                            </IconButton>
                        }
                        title={store.bname}
                        subheader={`GST: `+ store.gst_number}
                        />
                       <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`${store.address}  -  ${store.postal_code}`}
                           </Typography>
                        </CardContent>
             </Card>
        </Grid>
    )
}

export default Store
