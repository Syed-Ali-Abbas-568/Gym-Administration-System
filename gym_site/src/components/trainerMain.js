import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box} from '@mui/material';
import { Link } from 'react-router-dom';



export default function TrainerCards() {


  return (

<Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>

    <Link style={{ textDecoration: 'none' }} to="/addtrainer">
    <Card sx={{m:5,width:300 ,height:500}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="400"
          image="./add.gif"
          alt="addequipment"
          
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Add Trainer
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to add Trainer
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>


    <Link style={{ textDecoration: 'none' }} to="/trainerlist">
    <Card sx={{m:5,width:300 ,height:500}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="400"
          image="./info.gif"
          alt="gymequipment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Display Trainers
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to view list of Trainers
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Link>



<Link style={{ textDecoration: 'none' }} to="/trainerFeeStatus">
    <Card sx={{m:5,width:300 ,height:500}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="380"
          image="./card.gif"
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
