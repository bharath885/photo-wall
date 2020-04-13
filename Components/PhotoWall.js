import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PhotoWall = (props) => (
    <div >
        <Link className="addIcon" to='/AddPhoto'></Link>
        <div className="photoGrid">
            {props.posts
                .sort(function (x, y) {
                    return y.id - x.id
                })
                .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
        </div>
    </div>
)


PhotoWall.prototype = {
    posts: PropTypes.array.isRequired,
    // onRemovedPhoto: PropTypes.func.isRequired

}

export default PhotoWall;