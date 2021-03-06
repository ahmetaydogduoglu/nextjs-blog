import React from 'react'
import Head from 'next/head'

export default function (props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous" ></link>
        </Head>
    )
}
