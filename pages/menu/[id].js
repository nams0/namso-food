function Details({ data }) {
  console.log(data)
  return <div>Details</div>
}

export default Details

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data")
  const data = await res.json()
  const topFoods = data.slice(0, 10)
  const paths = topFoods.map((food) => ({ params: { id: food.id.toString() } }))

  return { paths, fallback: "blocking" }
}

export async function getStaticProps(context) {
  const { params } = context
  console.log(params)
  const res = await fetch(`http://localhost:4000/data/${params.id}`)
  const data = await res.json()
  return { props: { data }, revalidate: 10, notFound: !data.id ? true : false }
}
