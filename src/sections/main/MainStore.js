import { ViewDayOutlined } from '@mui/icons-material';
import { Grid, Card, CardHeader, CardActions, CardContent,CardActionArea, Button,Typography,IconButton } from '@mui/material'; 
import { useRouter } from "next/router"

const MainStore = ({store}) => { 
    const router = useRouter();


    return (
                <Card elevation={3}>
                     <CardActionArea onClick={(e)=>{ router.push("/main/"+store.bid)}}>
                     <CardHeader
                        action={
                            <IconButton >
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
                    </CardActionArea>
             </Card>
    )
}

export default MainStore
