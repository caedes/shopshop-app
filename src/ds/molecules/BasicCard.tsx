import { Link } from "react-router";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type BasicCardAction = {
  label: string;
  onClick: () => void;
};

type BasicCardProps = {
  id: string;
  imageUrl: string;
  name: string;
  categories: string[];
  children?: React.ReactNode;
  actions: BasicCardAction[];
};

export const BasicCard = ({
  id,
  imageUrl,
  name,
  children,
  actions,
}: BasicCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          <Link to={`/products/${id}`}>{name}</Link>
        </Typography>
        {children}
      </CardContent>
      <CardActions>
        {actions.map(({ label, onClick }) => (
          <Button key={label} variant="contained" onClick={onClick}>
            {label}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};
