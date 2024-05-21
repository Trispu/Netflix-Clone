import Carousel from "../../components/carousel";

import "./index.scss";

function Home() {
  return (
    <div>
     
      <div className="trending">
        <Carousel numberOfSlide={1} category={"Trending"} />
      </div>

      
      <div className="action">
        <Carousel numberOfSlide={3} category={"Action"} isUseNavigation tittle={"Action Movies"} />
      </div>

     
      <div className="comedy">
        <Carousel numberOfSlide={3} category={"Comedy"} isUseNavigation tittle={"Comedy Movies"} />
      </div>
      <div className="horror">
        <Carousel numberOfSlide={3} category={"Horror"} isUseNavigation tittle={"Horror Movies"} />
      </div>
    </div>
  );
}

export default Home;
