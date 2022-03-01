import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { ButtonBase, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getHashTags } from '../../api/api_tweet';


const RightSidebar = () => {


    const [hashTags, setHashTags] = useState([]);

    useEffect(() => {
        getHashTags((isOk, data)=>{
            if(!isOk)
                return alert("ناموفق یوزر");
            setHashTags(data);

        })
    }, []);


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item>
                        <img src={"images/logo.png"} width={"50px"}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logotype}>
                            استودیو دشوار
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTags.map(item => <ButtonBase className={classes.hashTagParent}>
                        <Link to={"/hashtags/"+item} style={{width: '100%'}}>
                            <Grid item container alignItems={"center"}>
                                <img src={"images/hashtag.png"} width={"15px"} height={"15px"}/>
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                        </Link>
                    </ButtonBase>)
                }
            </Grid>
        </div>
    );
};

export default RightSidebar;