import React from 'react'

export default function index({ content }) {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <h5>
                    {content.title}
                    </h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{content.postContent}</p>

                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-warning">Show All</button>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .card{
                        border-radius:15px;
                        height:19rem;
                        width:95%;
                    }
                    p{
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 6;
                        -webkit-box-orient: vertical;
                    }
                    `
                }
            </style>
        </>


    )
}
