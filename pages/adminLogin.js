import callFetch from "../API/callFetch";
//components
import AdminLayout from "../components/AdminLayout/AdminLayout"
import Input from "../components/Input/Index"
export default function Admin(props) {
    return (
        <>
            <AdminLayout title={"adminLogin"}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="auth-card">
                        <form>
                            <h2>Login</h2>
                            <label for="emailInput">Email</label>
                            <Input id="emailInput" type="email" placeholder="email" />
                            <label for="password">Password</label>
                            <Input id="emailInput" type="password" placeholder="email" />
                            <button type="button" className="btn btn-outline-warning w-100 p-2">Login</button>
                        </form>
                    </div>
                </div>
            </AdminLayout>
            <style jsx>
                {
                    `
                .col-12{
                   height:100vh;
                }
                .btn{
                    margin-top:10px
                }
                .auth-card{
                    height:50vh;
                    padding:15px;
                    border-sizing:border-box;
                    width:25rem;
                    border-radius:15px;
                    background-color:#f4f4f4;
                    -webkit-box-shadow: 0px 2px 14px -1px rgba(0,0,0,0.75);
                    -moz-box-shadow: 0px 2px 14px -1px rgba(0,0,0,0.75);
                    box-shadow: 0px 2px 14px -1px rgba(0,0,0,0.75);
                }
                `
                }
            </style>
        </>

    )
}


