import { Link } from "react-router";
import { Price } from "../ds/atoms/Price";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type ProductCardProps = {
  id: string;
  title: string;
  price: number;
};

/**
 * A simple function to get a different image for each product.
 * Picsum has images with ids from 0 to 1084, so we add 20 to the product id
 * to avoid having the same image as the product id.
 *
 * It should be avoid in production code, but it's fine for this demo app.
 */
const getImageId = (id: string) => {
  return Number(id) + 20;
};

export const ProductCard = ({ id, title, price }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://picsum.photos/id/${getImageId(id)}/350/350`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/products/${id}`}>{title}</Link>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Price amount={price} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
