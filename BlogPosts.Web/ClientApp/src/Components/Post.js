import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
const Post = ({ post }) => {
    const { text, dateSubmitted, title, comments, id } = post;
    return (

        <div className="card mb-4">
            <div className="card-body ">
                <h2 className='card-title' color='text-primary'>{title}</h2>
            </div>
            <p className='card-text'>{text.length < 200 ? text : text.substring(0, 200) + "..."}</p>
            <span>{comments.length} comment(s)</span>

            <Link to={`/ViewBlog/${id}`}>
                <button className='btn btn-primary '>ReadMore</button>
            </Link>

            <div className='card-footer text-muted'>
                Posted on {format(new Date(dateSubmitted), 'EEEE LLLL do, R')}
            </div>
        </div>

    )

}
export default Post;

