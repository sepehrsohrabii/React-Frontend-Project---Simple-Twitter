import { Divider } from '@material-ui/core';
import React from 'react';
import LeftSidebar from '../leftSidebar/LeftSidebar';
import RightSidebar from '../rightSidebar/RightSidebar';
import useStyles from './styles';
import TweetByHashtag from '../../pages/tweetByHashtag/TweetByHashtag';
import TweetByUser from '../../pages/tweetByUser/TweetByUser';

const Layout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            
            <div className={classes.content}>
                {props.children}
            </div>
            
            <Divider orientation={"vertical"} className={classes.divider}/>
            <LeftSidebar/>
        </div>
    );
};

export default Layout;