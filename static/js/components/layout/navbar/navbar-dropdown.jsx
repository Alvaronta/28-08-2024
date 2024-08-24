import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

export default function NavbarDropdown({ children, label }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BiChevronDown />}
        variant={"unstyled"}
        margin={"10px 15px"}
        textAlign={"center"}
        height={"100%"}
        color={"#777"}
      >
        {label}
      </MenuButton>
      <MenuList display={"block"} bg={"black"}>
        {children.map((element, key) => (
          <MenuItem key={key} bg={"transparent"}>
            {element}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}