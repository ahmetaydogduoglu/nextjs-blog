//components
import Head from "../Head/head"

const AdminIndex = (props) => {
    return (
        <div>
            <Head title={props.title} />
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

export default AdminIndex
