import { Grid, Button, IconButton } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import classnames from 'classnames'
import axios from 'axios';
import { newTweetRequest } from '../../../api/api_tweet';


const NewTweet = () => {


    const input = React.useRef();
    const [tweet, setTweet] = React.useState();

     React.useEffect(()=> {
         input.current.addEventListener("input", function(e){
             console.log("input event fired", e.target.innerText);
             
         }, false);
     }, []);
    
     const newTweetClick=()=>{
         const tweetText = input.current.innerText;
         if (!tweetText)
            return;
        const data = {
            id : Math.floor(Math.random()*1000),
            "sender": {
                "name": "sepsep",
                "id": "@sepsep",
                "img": "images/user-img.jpg"
            },
            "text": tweetText,
            "likes": 9
        };
        newTweetRequest(data, (isOk)=>{
            if(!isOk)
                return alert("ارسال نشدش")
            alert("توییت شما ارسال شد")
        });
     };

    const classes = useStyles();
    return (
        <div className={classes.newTweet}>
            <Grid container>
            <img src={"images/user-pic.jpg"} style={{width: 'max-content'}}/>
            <div contentEditable data-placeholder="توییت کن ..." className={classnames(classes.input, "editable")} 
             ref={input} 
             // dangerouslySetInnerHTML={tweet}
            />
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}}>
                <Button variant={"contained"} color={"primary"} 
                className={classes.newTweetBtn} onClick={newTweetClick}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"images/tweetpic.png"} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTweet;