import React from 'react';
import jsonObject from '../../jsonData/mains.json';
import { Grid, Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography,makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
      alignSelf: 'center',
      marginTop: 15,
      padding: 15, 
      display: 'inline' ,
      font: 'bold',
      color: 'tomato',
      textDecoration: 'underline',
    },
    card: {
        marginTop: 20,
      alignItems: 'center',
      alignSelf: 'center',
      width: 345,
      padding: 5,
    },
    media: {
      height: 120,
      display: 'cover',
    },
    button: {
        color: 'tomato'
    }
  });
    
function Offers() {

    const classes = useStyles();
    const imgSrc = "https://firebasestorage.googleapis.com/v0/b/deliqui.appspot.com/o/offer1.jpeg?alt=media&token=bb56a2cc-8e8d-45af-a745-7bf8e4b7a217";
    const imgSrc2 = "https://firebasestorage.googleapis.com/v0/b/deliqui.appspot.com/o/offer2.jpg?alt=media&token=3da38e85-d33e-48e4-8aee-cf813d73de31";

    return (
        <div>
           <Grid container direction="column">
            <Typography className={classes.title} variant="h4" component="h2"> Offers </Typography>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={imgSrc}
                            title="Contemplative Reptile"
                            />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {Object.values(jsonObject.offers['01'].description).map((item) => {
                            return <>{item}</>})}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                            Add Cart
                        </Button>
                        {/* <Button size="small" color="primary">
                            
                        </Button> */}
                    </CardActions>
                </Card>
                {/*         SecondCard         */}
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={imgSrc2}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {Object.values(jsonObject.offers['02'].description).map((item) => {
                            return <>{item}</>})}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                            Add Cart
                        </Button>
                        {/* <Button size="small" color="primary">
                            
                        </Button> */}
                    </CardActions>
                </Card>
                
                
            </Grid> 
        </div>
    );
}

export default Offers;
