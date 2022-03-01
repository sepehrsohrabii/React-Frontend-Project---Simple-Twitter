import React from 'react';
import {Link} from 'react-router-dom';

const PostDetail = (props) => {
    console.log(props.match.params.mId)
    return (
        
        <div>
            <h3>پست {props.match.params.mId}</h3>
            <p>تو این پست قراره این اتفاق بیئفته.</p>
            <Link to={"/posts"}>لیست پست ها</Link>
        </div>
        
    );
};

export default PostDetail;