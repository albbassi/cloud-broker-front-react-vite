import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { Link } from "react-router-dom";

export default function MenuPrincipal() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        startIcon={<AddBoxIcon />}
      >
        Novo
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/clientes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Cliente
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/contratos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contrato
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/itens"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Item
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
