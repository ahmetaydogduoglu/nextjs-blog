import callFetch from "../API/callFetch";
//components
import Layout from "../components/Layout/index";
import Card from "../components/PostCard/index";
export default function Home(props) {
  return (
    <Layout title={"Home"}>
      <div className="home-container">
        <h1>My Posts</h1>

        <div className="row justify-content-start">
          {
            props.posts.map(item => (
              <div className="col-lg-4" >
                <Card content={item} />
              </div>
            ))
          }

        </div>
      </div>

      <style jsx>
        {
          `
            .home-container{
              width:100%;
              text-align:center;
            }
            h1{
              color:#454545;
              margin-top:15px
            }
            .col-lg-4{
              margin-bottom:15px;
            }
            @media screen and (max-width: 600px){
              .col-lg-4{
         
                box-sizing: border-box;
                display:flex;
                align-self:center;
                justify-content:center;
                flex-direction:column;
                align-items:center;
                width:100%;
              }
            }
          `
        }
      </style>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  try {
    const data = await callFetch("/posts")
    return {
      posts: data.posts,
      error: null
    }
  } catch (error) {
    return {
      posts: null,
      error: new Error("There is a problem.")
    }
  }
}
