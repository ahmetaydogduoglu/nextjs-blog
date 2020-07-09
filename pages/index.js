import Layout from "../components/Layout/index"
export default function Home(props) {
  return (
    <Layout title={"Home"}>
      <div className="home-container">
        <h1>My Posts</h1>

      </div>
      <style jsx>
        {
          `
            .home-container{
              width:100%;
              text-align:center;
              background:red
            }
          `
        }
      </style>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  return {
    data: "merhaba"
  }
}
