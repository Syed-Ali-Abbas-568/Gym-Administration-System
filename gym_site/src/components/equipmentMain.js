import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box} from '@mui/material';
import { Link } from 'react-router-dom';



export default function EquipmentsCards() {


  return (

<Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>

    <Link style={{ textDecoration: 'none' }} to="/addequipment">
    <Card sx={{m:5,width:300 ,height:500}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="400"
          image="./addEquip.gif"
          alt="addequipment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Add Equipment
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to add equipment
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>


    <Link style={{ textDecoration: 'none' }} to="/equipmentlist">
    <Card sx={{m:5,width:300 ,height:500}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="400"
          image="./eqList.gif"
          alt="gymequipment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Display Equipment
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to view list of equipment
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Link>



<Link style={{ textDecoration: 'none' }} to="/equipmentlist">
    <Card sx={{m:5,width:300 ,height:500}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="370"
          image="./maintainance.gif"
          alt="addequipment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Change Maintainence Date
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Click to achange the last maintainence date or information of equipment.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Link>


</Box>   
  );
}
