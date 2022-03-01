import React from 'react';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Courses from '../pages/Courses';
import Posts from '../pages/Posts';
import PostDetail from '../pages/PostDetail';
import Page404 from '../pages/404/404';
import TweetByHashtag from '../pages/tweetByHashtag/TweetByHashtag';
import TweetByUser from '../pages/tweetByUser/TweetByUser';


const App = () => {
    return (
        <BrowserRouter>
            <Route path={"/"} render={()=>{
                return <Layout>
            
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/hashtags/:hashtag"} component={TweetByHashtag}/>
                    <Route exact path={"/users/:user"} component={TweetByUser}/>
                    <Route component={Page404}/>
                </Switch>
            </Layout>
            }}/>
            
        </BrowserRouter>
            
    );
};

export default App;