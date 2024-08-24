import { Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarLink({ children, path, selected, isDropdown }) {
  const { pathname } = useLocation();
  const color = pathname === path ? selected : "#777";
  const hover = pathname === path ? selected : "#333";

  return (
    <Button
      variant={"unstyled"}
      margin={isDropdown ? "0px" : "10px 15px"}
      textAlign={isDropdown ? "left" : "center"}
      as={Link}
      to={path}
      height={"100%"}
      color={color}
      _hover={{ color: hover }}
    >
      {children}
    </Button>
  );
}