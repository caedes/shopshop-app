import { Link, Outlet } from "react-router";
import { ColorModeToggle } from "../atoms/ColorModeToggle";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

export const MainTemplate = () => {
  const pages = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/shopping-cart", label: "Shopping Cart" },
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ShopShop
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              {pages.map(({ label, to }) => (
                <Button
                  component={Link}
                  key={to}
                  to={to}
                  sx={{ my: 2, color: "white" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ColorModeToggle />
      <main>
        <Outlet />
      </main>
    </>
  );
};
