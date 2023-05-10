import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Collapse } from '@mui/material';
import { useState } from 'react';
import { Container } from 'react-bootstrap';


export default function ClientCards() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
    return (
    <Container>
    <hr />
    <h1><center>Meet Our Team</center></h1>
    <hr />
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Card sx={{ m: 5, width: 300, height: 550 }} onClick={handleExpandClick1}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="./ali.jpg"
            alt="addequipment"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Syed Ali Abbas
            </Typography>
            <Collapse in={expanded1}>
                <Typography variant="body2" color="text.secondary">
                  Scrum Master + Developer + User Interface Engineer
                </Typography>
              </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ m: 5, width: 300, height: 550 }} onClick={handleExpandClick2}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="./kash.jpg"
            alt="gymequipment"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kashan Aqeel
            </Typography>
            <Collapse in={expanded2}>
              <Typography variant="body2" color="text.secondary">
                Lead Designer + Developer + Main Database Administrator
              </Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ m: 5, width: 300, height: 550 }} onClick={handleExpandClick3}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="./khush.jpg"
            alt="gymequipment"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              M.Khushnood Saeed
            </Typography>
            <Collapse in={expanded3}>
              <Typography variant="body2" color="text.secondary">
                Main Database Administrator + Product Owner + Developer
              </Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ m: 5, width: 300, height: 550 }} onClick={handleExpandClick4}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="./huz.jpg"
            alt="gymequipment"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Huzaifa Munir
            </Typography>
            <Collapse in={expanded4}>
              <Typography variant="body2" color="text.secondary">
                User Experience Engineer + Main Q\A Tester + Developer
              </Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </Container>
  );
}
