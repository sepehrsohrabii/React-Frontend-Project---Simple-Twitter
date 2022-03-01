import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from '../home/styles';
import Header from "../../components/header/Header";
import { Divider } from '@material-ui/core';
import NewTweet from '../home/components/NewTweet';
import TweetList from '../home/components/TweetList';
import {VerifiedUser as UserIcon} from '@material-ui/icons';
import { getAllTweets } from '../../api/api_tweet';


const TweetByUser = (props) => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getAllTweets((isOk, data)=>{
            if(!isOk)
                return alert(data.message);
            else setTweets(data);
        });
    }, []);


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={props.match.params.user} icon={<UserIcon/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetByUser;