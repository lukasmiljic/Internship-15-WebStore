import SearchBar from "../../Components/SearchBar/SearchBar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.title}>
        <span className={classes.titleColor}>Web</span>Shop
      </h1>
      <SearchBar />
    </div>
  );
};

export default Home;
