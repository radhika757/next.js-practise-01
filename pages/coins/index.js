import axios from "axios";
import styles from "../../styles/coin.module.css";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className={styles.border}>
      {coinData.coins.map((coin) => {
        return (
     
            <div key={coin.id} className={styles.card}>
              <h1>{coin.name}</h1>
              <img src={coin.icon} />
              <p>{coin.price}</p>
              <button className={styles.knwMore}>Know More</button>
            </div>
       
        );
      })}
    </div>
  );
};
export const getStaticProps = async ({params}) => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};
export default CoinList;
