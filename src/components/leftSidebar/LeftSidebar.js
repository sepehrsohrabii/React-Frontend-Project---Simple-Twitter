import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/api_tweet';

const Tweeter = ({name, id, img}) => {
    const classes = useStyles();
    return <ButtonBase style={{width:"100%"}}><Grid container direction={"row"} className={classes.tweeterParent}>
    <img src={img} style={{width: 'max-content'}}/>
    <Grid item container direction={"column"} style={{width: 'max-content'}} className={classes.tweeterNameParent}>
        <Typography className={classes.profName}>{name}</Typography>
        <Typography className={classes.profId}>{id}</Typography>
    </Grid>
    
</Grid>
</ButtonBase>
};


const LeftSidebar = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers((isOk, data)=>{
            if(!isOk)
                return alert("ناموفق یوزر");
            setUsers(data);

        })
    }, []);


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"images/user-pic.jpg"} style={{width: 'max-content'}}/>
                <Grid item container direction={"column"} style={{width: 'max-content'}} className={classes.proftext}>
                    <Typography className={classes.profName}>سپهر سهرابی</Typography>
                    <Typography className={classes.profId}>sepehrsohrabi_</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>
                    بهترین خبرنگاران
                </Typography>
                <Divider style={{marginLeft: -24, marginRight: -24}}/>
                {
                    users.map((item, index) => {
                    return (<Link to={"/users/"+item.name} style={{width:"100%"}}>
                        <Tweeter name={item.name} id={item.id} img={item.img}/>
                        {index !== users.length - 1 &&
                        <Divider style={{marginLeft: -24, marginRight: -24}}/>
                        }
                    </Link>)
                })
                }
                
            </Grid>
        </div>
    );
};

export default LeftSidebar;