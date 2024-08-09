import Head from 'next/head';
import Header from '../components/Header/Header';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer'
import Slider from '../components/Hero/Slider'
import CategoryCards from '../components/Category/CategoryCards'
import SearchBar from '../components/SearchBar/SearchBar'
import ProductsCategories from '../components/ProductsCategory/ProductsCategories'
const Home = () => {
  return (
    <div>
      <Head>
        <title>أفضل التخفيضات 2024</title>
      </Head>
      <Header />
      <Navbar />
      <Slider />
      <CategoryCards />
      <SearchBar />
      <ProductsCategories />
      
      {/* Add other components here as needed */}
      <Footer />
    </div>
  );
};

export default Home;
