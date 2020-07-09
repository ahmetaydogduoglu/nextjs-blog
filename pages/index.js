import Layout from "../components/Layout/index"
export default function Home(props) {
  console.log("props:", props);
  return (
    <Layout title={"Home"}>
      <div>
        <h1>Ahmet Aydoğduoğlu</h1>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  return {
    data: "merhaba"
  }
}
