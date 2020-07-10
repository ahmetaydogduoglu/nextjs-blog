import Layout from "../components/Layout/index"
import callFetch from "../API/callFetch";

export default function Home(props) {
  return (
    <Layout title={"Home"}>
      <div className="home-container">
        <h1>My Posts</h1>
        {
          props.posts.map(item => (
            <p>{item.title}</p>
          ))
        }
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
