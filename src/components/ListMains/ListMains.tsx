import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import jsonObject from '../../jsonData/mains.json';
import { Grid, Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './ListMains.css';

interface MainsProps {
    mainSelected: string[];
}
interface Main {
    main: string,
    price: string,
    image: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        color: 'tomato'
    },
    containerGrid: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    divroot: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
        marginTop: 15,
        display: 'cover' ,
        font: 'bold',
        color: 'tomato',
        textAlign: 'center',
        alignSelf: 'center',
        textDecoration: 'underline',
      },
      media: {
        height: 140,
        display: 'cover',
      },
      griditem:{
        alignSelf:'center'
      },
  }),
);

const main1Description = Object.values(jsonObject.items.mains['01'].food);
const main1Price = Object.values(jsonObject.items.mains['01'].price);
const main1Image = "https://firebasestorage.googleapis.com/v0/b/deliqui.appspot.com/o/avo.jpeg?alt=media&token=0e1ffa08-556a-4b41-8eec-d8c37bca826c";

const main2Description = Object.values(jsonObject.items.mains['02'].food);
const main2Price = Object.values(jsonObject.items.mains['02'].price);
const main2Image = "https://firebasestorage.googleapis.com/v0/b/deliqui.appspot.com/o/pasta.jpeg?alt=media&token=4b122b6f-4403-4623-baef-62ebb78ba80a";

const main3Description = Object.values(jsonObject.items.mains['03'].food);
const main3Price = Object.values(jsonObject.items.mains['03'].price);
const main3Image = "https://firebasestorage.googleapis.com/v0/b/deliqui.appspot.com/o/pork.jpeg?alt=media&token=8fb1f403-02b5-423f-bc6a-68cf3468866d";

const main4Description = Object.values(jsonObject.items.mains['04'].food);
const main4Price = Object.values(jsonObject.items.mains['04'].price);
const main4Image = "https://firebasestorage.googleapis.com/v0/b/deliqui.appspot.com/o/macand.jpeg?alt=media&token=7316d4de-51ba-4caf-8b79-aafe5e319b34";

function ListMains() {
    
    const classes = useStyles();

    return (
        <div className={classes.divroot}>
            <Router>
            <Typography className={classes.title} variant="h4" component="h2"> Mains </Typography>
            <Grid container>
            <Grid className="griditem" item xs={6}>
                
                <Card className="carditem">
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={main1Image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography>
                        {main1Description}
                        
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        US $ {main1Price} 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                        Add Cart
                        </Button>
                    </CardActions>
                </Card>

                <Card className="carditem">
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={main2Image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography>
                        {main2Description}
                        
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        US $ {main2Price} 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                        Add Cart
                        </Button>
                    </CardActions>
                </Card>
                
            </Grid> 
            <Grid className="griditem" item xs={6}>
                <Card className="carditem">
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={main3Image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography>
                        {main3Description}
                        
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        US $ {main3Price} 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                        Add Cart
                        </Button>
                    </CardActions>
                </Card>

                <Card className="carditem">
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={main4Image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography>
                        {main4Description}
                        
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        US $ {main4Price} 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button}>
                        Add Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            </Grid>
                
            </Router>
            
        </div>
    );
}

export default  ListMains;
