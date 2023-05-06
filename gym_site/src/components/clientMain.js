import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box} from '@mui/material';
import { Link } from 'react-router-dom';



export default function ClientCards() {


  return (

<Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>

    <Link style={{ textDecoration: 'none' }} to="/addclient">
    <Card sx={{m:5,width:400 ,height:600}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="500"
          image="./addClient.jpg"
          alt="addequipment"
          
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Add Client
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to add Client
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>


    <Link style={{ textDecoration: 'none' }} to="/clientlist">
    <Card sx={{m:5,width:400 ,height:600}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="500"
          image="./userList.png"
          alt="gymequipment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Display Clients
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to view list of Clients
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Link>



<Link style={{ textDecoration: 'none' }} to="/clientFeeStatus">
    <Card sx={{m:5,width:400 ,height:600}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="500"
          image="./feeStatus.png"
          alt="addequipment"
          color='white'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           View and change fee status
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to  View and change fee status
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Link>


</Box>   
  );
}
