import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { getDate, getTime } from "date-fns";
const Admin = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');



    const onSubmitClick = async () => {
        const { data } = await axios.post('/api/home/submitpost', { title, text, name, dateSubmitted: new Date(new Date().toLocaleString()).toISOString() });
        history.push(`/ViewBlog/${data}`);
    }
    return (
        <div className="container jumbotron">
            <div className="row">
                <input type='text' onChange={e => setName(e.target.value)} className="form-control" placeholder="Name" ></input>
                <br />
                <input type='text' onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Title"></input>
                <br />
                <textarea onChange={e => setText(e.target.value)} placeholder="What's on your mind?" className="form-control" rows="20"></textarea>
                <br />
                <button className="btn btn-primary" onClick={onSubmitClick}>Submit Post!</button>
            </div>
        </div>

    )
}
export default Admin