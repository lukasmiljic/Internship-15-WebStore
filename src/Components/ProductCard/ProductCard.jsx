import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { title, price, description, category, image } = props;

  return (
    <div className={classes.productCard}>
      <img className={classes.productImage} src={image} alt={title} />
      <div className={classes.productInfo}>
        <h3>{title}</h3>
        <p>{price} &euro;</p>
      </div>
    </div>
  );
};

export default ProductCard;
