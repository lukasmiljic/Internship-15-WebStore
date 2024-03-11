import Logo from "../../Components/Logo";
import SearchBar from "../../Components/SearchBar/SearchBar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Home;
