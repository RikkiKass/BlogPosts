import React from 'react';
import format from 'date-fns/format';
const Comment = ({ comment }) => {
    const { name, text, dateSubmitted } = comment;
    return (
        <div className='media-mb-4' style={{ minHeight: 100, paddingLeft: 50 }} >
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body" >
                <h5 className='mt-0 mb-1'>{name}
                    <small className="ml-1">{format(new Date(dateSubmitted), 'EEEE LLLL do, R')}</small>
                </h5>
                <p className="card-text mt-0">{text}</p>
            </div>
        </div >


    )

}
export default Comment;


