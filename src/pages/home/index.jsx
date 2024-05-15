import Carousel from "../../components/carousel"
import Header from "../../components/header"
import "./index.scss"

function Home() {
  return (
    <div>
<Header/>

<Carousel numberOfSlide={1} category={"Trending"}/>
<div className="tittle">Action</div>
<Carousel numberOfSlide={3} category={"Action"}/>
<div className="tittle">Comedy</div>
<Carousel numberOfSlide={3} category={"Comedy"}/>
    </div>
  )
}

export default Home