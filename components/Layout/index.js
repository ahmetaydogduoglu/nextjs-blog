//global
import Head from "next/head"
//components
import Navbar from "../Navbar/index"

const index = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous" ></link>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
            <style jsx>
                {
                    `
                        .container{
                            padding:0px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default index
