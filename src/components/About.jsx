import { useContext } from "react"
import { ProductContext } from "../Contexts/ProductContext"


const About = () => {
  const data = useContext(ProductContext)
  console.log(data)
  return (
    <>
      <h1>About {data.title}</h1>
      <p><i>{data.message}</i>----Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptatibus laboriosam ullam itaque praesentium labore tempora consequatur eveniet porro illo.</p>
    </>
  )
}

export default About