import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <h1 className={styles.title}>영어 이름 느낌 검색기</h1>
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>
    </Layout>
  );
};

export default Home;
