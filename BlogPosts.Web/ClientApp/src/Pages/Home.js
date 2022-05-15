import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from '../Components/Post';


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get(`/api/home/getposts?currentpage=${currentPage}`);
            setPosts(data);

        }

        getPosts();
    }, [currentPage]);

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {posts.map(p => <Post post={p} key={p.id} />)}
                </div>
            </div>
            <ul className="pagination justify-content-center mb-4">
                {currentPage !== 0 && <li className="page-item">
                    <button className="btn btn-outline-primary" onClick={previousPage}>Older</button>

                </li>}
                <li className="page-item">
                    <button className="btn  btn-outline-primary" onClick={nextPage}>Newer</button>
                </li>

            </ul>
        </div>



    )

}
export default Home;
