import React from 'react'

export default function Index(props) {
    return (
        <>
            <input className="form-control" {...props} />
            <style jsx>
                {
                    `
                    .form-control{
                        margin-bottom:10px
                    }
                    `
                }
            </style>
        </>
    )
}
