import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import axios from 'axios';
import format from 'date-fns/format';
import { produce } from 'immer';
import { useParams } from 'react-router-dom';

const ViewBlog = () => {

    const [post, setPost] = useState({ id: '', name: '', title: '', text: '', dateSubmitted: '', comments: [] });
    const [comment, setComment] = useState({});
    const [c, addedComment] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get(`/api/home/getpost?id=${id}`);
            setPost(data);

        };

        getPost();
    }, [c])
    const onChange = (e) => {
        const newComment = produce(comment, draft => {
            draft[e.target.name] = e.target.value;
            draft.postId = id;
            draft.dateSubmitted = new Date(new Date().toLocaleString()).toISOString()
        });
        setComment(newComment);
    }

    const submitComment = async () => {

        await axios.post('/api/home/submitcomment', comment);
        setComment({ name: '', text: '', postId: '', dateSubmitted: '' });
        addedComment('addedSuccessfully');

    }

    return (
        <div className='row'>
            <div className='col-lg-8'>

                <h1 className='mt-4'>{post.title}</h1>
                <p className='lead'>By {post.name}</p>

                <p>
                    <small className="ml-1">Posted on {post.dateSubmitted}</small>
                </p>
                <p>{post.text}</p>


            </div>
            <div className='card-my-4'>
                <h5 className="card-header">Leave a comment:</h5>
                <div className='card-body'>
                    <div className="form-group">
                        <input type="text" placeholder="Please enter your name" value={comment.name} className="form-control" name="name" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Type your comment here..." name="text" value={comment.text} className="form-control" rows="3" onChange={onChange}></textarea>
                    </div>
                    <div className='form-group'>
                        <button className="btn btn-primary" onClick={submitComment}>Submit</button>
                        <div className='row'>
                            {!!post.comments && post.comments.map(c =>
                                <Comment key={c.id} comment={c} />
                            )}
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )

}



export default ViewBlog;












