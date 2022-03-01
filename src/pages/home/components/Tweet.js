import { Typography,Grid, IconButton } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Tweet = ({data}) => {

    const renderTweet=(text)=>{
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:blue'>$&</a>")};
    }


    const classes = useStyles();
    return (
        <div className={classes.tweetItem}>
        <Grid container>
        <img src={data.sender.img} style={{height: 'max-content'}}/>
        <Grid item container direction={'column'} style={{flex: 1, marginRight: '1rem',}}>
            <Grid item container>
                <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                <Typography className={classes.tweetItemId}>{data.sender.id}</Typography>
            </Grid>
            <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={"p"}></Typography>
        </Grid>
        
        </Grid>
        <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={'center'}>
            <IconButton className={classes.newTweetImgBtn}>
                <RepeatIcon/>
            </IconButton>
            <IconButton className={classes.newTweetImgBtn}>
                <FavoriteIcon/>
            </IconButton>
            <Typography>{data.likes}</Typography>
        </Grid>
        </div>
        
    );
};

export default Tweet;