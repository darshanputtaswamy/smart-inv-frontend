import { ViewDayOutlined } from '@mui/icons-material';
import { Grid, Card, CardHeader, CardActions, CardContent,CardActionArea, Button,Typography,IconButton, Box } from '@mui/material'; 
import { useRouter } from "next/router"
import retailImage from 'assets/images/retail-store.jpeg';
import clothingImage from 'assets/images/clothing-store.jpeg';
import barImage from 'assets/images/bar-store.jpeg';
import footwareImage from 'assets/images/footwear-store.jpeg';
import Image from 'next/image'



const MainStore = ({store}) => { 
    const router = useRouter();


    return (
                <Card elevation={3}>
                     <CardActionArea onClick={(e)=>{ router.push("/main/"+store.bid)}}>
                     <CardHeader
                        sx={{background:"#2a0a4e", color:"#fff"}}
                        title={store.bname}
                        />
                       <CardContent>
                      <Box sx={{display:'flex', direction:'column'}}>
                      <Box sx={{width: '20%'}}>
                          {
                             (store.btype == 'Bar' &&  <Image src={barImage} loading="lazy" alt="barImage" width="100" height="100"/>)
                          }{

                             (store.btype == 'Footwear' &&  <Image src={footwareImage} loading="lazy" alt="footwareImage" width="100" height="100"/>)
                          }{
                             (store.btype == 'Retail' &&  <Image src={retailImage} loading="lazy" alt="retailImage" width="100" height="100"/>)
                          }{
                             (store.btype == 'Clothing' &&  <Image src={clothingImage} loading="lazy" alt="clothingImage" width="100" height="100"/>)
                          }
                      </Box>
                      <Box sx={{width: '70%'}}>
                       <Typography variant="h6" component="div">
                       <b>{store.gst_number}</b>
                        </Typography>
                        <Typography variant="h6"  component="div">
                      {store.address}
                           </Typography>
                           <Typography variant="h6"  component="div">
                       {store.postal_code}
                           </Typography>
                        </Box>
                    </Box>

                        </CardContent>
                    </CardActionArea>
             </Card>
    )
}

export default MainStore
