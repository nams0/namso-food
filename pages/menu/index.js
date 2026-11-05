import MenuPage from "@/components/templates/MenuPage"

function Menu({ foods }) {
  return <MenuPage foods={foods} />
}

export default Menu

export async function getStaticProps() {
  const data = await fetch("http://localhost:4000/data")
  const parsedData = await data.json()

  return { props: { foods: parsedData }, revalidate: 10 }
}
