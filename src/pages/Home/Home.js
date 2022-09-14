import Banner from './Banner';
import ProductListIntroduce from './ProductListIntroduce';
import AboutUs from './AboutUs';
import TopBrand from './TopBrand';

import './Home.scss';

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductListIntroduce />
      <AboutUs />
      <TopBrand />
    </div>
  );
};

export default Home;
