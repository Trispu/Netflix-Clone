import Carousel from "../../components/carousel";
import Header from "../../components/header";
import "./index.scss";

function Home() {
  return (
    <div>
      <Header />
      <div className="trending">
        <Carousel numberOfSlide={1} category={"Trending"} />
      </div>

      
      <div className="action">
        <Carousel numberOfSlide={3} category={"Action"} isUseNavigation tittle={"Action Movies"} />
      </div>

     
      <div className="comedy">
        <Carousel numberOfSlide={3} category={"Comedy"} isUseNavigation tittle={"Comedy Movies"} />
      </div>
    </div>
  );
}

export default Home;
