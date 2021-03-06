
//components
import Navbar from "../Navbar/index"
import Head from "../Head/head"
const index = (props) => {
    return (
        <div>
            <Head title={props.title} />
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
