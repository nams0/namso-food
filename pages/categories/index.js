import CategoriesPage from "@/components/templates/CategoriesPage"

function Categories({ filteredData }) {
  console.log(filteredData)
  return <CategoriesPage data={filteredData} />
}

export default Categories

export async function getServerSideProps(contex) {
  const {
    query: { difficulty, time },
  } = contex
  const res = await fetch("http://localhost:4000/data")
  const data = await res.json()

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty,
    )

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || ""
      const timeDetail = cookingTime.split(" ")[0]
      if (time === "Less" && timeDetail && +timeDetail <= 30) return detail
      else if (time === "More" && +timeDetail > 30) return detail
    })
    if (time && difficulty && timeResult.length && difficultyResult.length)
      return item
    else if (!time && difficulty && difficultyResult.length) return item
    else if (time && !difficulty && timeResult.length) return item
  })

  return { props: { filteredData } }
}
