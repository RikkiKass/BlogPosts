import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const MostRecent = () => {
    const history = useHistory();

    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get('/api/home/getmostrecentpostid');
            console.log(data);
            history.push(`/ViewBlog/${data}`);

        };

        getPost();
    }, [])
    return (
        <h1>We're preparing the Most recent post</h1>
    )
}
export default MostRecent;