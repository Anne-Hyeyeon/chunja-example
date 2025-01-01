import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import styles from "./Result.module.css";
import { findName } from "../../utils/helper";

interface ResultParams {
  name: string;
}

const Result = () => {
  const { name } = useParams<keyof ResultParams>() as ResultParams;
  const nameData = findName(name);

  if (!nameData) {
    return (
      <Layout>
        <div className={styles.errorContainer}>
          <p>이름을 찾을 수 없습니다.</p>
        </div>
      </Layout>
    );
  }

  const emoji = nameData.gender === "F" ? "👩" : "👨";

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.englishName}>{nameData.englishName}</h1>
        <div className={styles.emoji}>{emoji}</div>
        <p className={styles.description}>
          {nameData.englishName} 이름을 가진 당신은,
          <br />
          미국에서 {nameData.koreanName} 느낌입니다.
          <br />
          주로 {nameData.birthYearRange.split("-")[0]}년대-
          {nameData.birthYearRange.split("-")[1]}년대에 유행한 이름입니다.
        </p>
      </div>
    </Layout>
  );
};

export default Result;
