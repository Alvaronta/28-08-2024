import { IconButton, Image } from "@chakra-ui/react";

import styles from "./navbar.module.css";

export default function NavbarSocial({ icon, link }) {
  return (
    <a href={link} target={"_blank"} rel={"noreferrer"}>
      <IconButton
        size={"lg"}
        icon={
          <Image
            src={icon}
            className={styles["social-icon"]}
            width={"19px"}
            alt={"Social Icon"}
          />
        }
        variant={"unstyled"}
      />
    </a>
  );
}