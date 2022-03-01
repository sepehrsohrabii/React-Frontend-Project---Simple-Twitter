import React, { useEffect, useState } from 'react';
import useStyles from '../home/styles';
import Header from "../../components/header/Header";
import { Divider } from '@material-ui/core';
import NewTweet from '../home/components/NewTweet';
import TweetList from '../home/components/TweetList';
import axios from 'axios';
import { getAllTweets } from '../../api/api_tweet';


const TweetByHashtag = (props) => {
    
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getAllTweets((isOk, data)=>{
            if(!isOk)
                return alert("ناموفق");
            setTweets(data);
        })
    }, []);
    
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"images/hashtag.png"} width={"15px"} height={"15px"}/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetByHashtag;