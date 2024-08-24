import { Box, Button, Flex, Image } from "@chakra-ui/react";
import NavbarDropdown from "./navbar-dropdown";
import NavbarLink from "./navbar-link";
import NavbarSocial from "./navbar-social";
import useResolution from "../../../hooks/useResolution";

import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobile] = useResolution(520);
  const [isTablet] = useResolution(700);

  return (
    <Box className={styles["wrapper"]} width={"100%"}>
      <Box className={styles["container"]} bg={"#161616"} margin={"auto"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          {/* Brand */}
          <Flex className={styles["section"]} as={Link} to={"/"}>
            <Box bg={"white"} width={"50%"}>
              <Image
                marginLeft={"auto"}
                marginRight={"30px"}
                height={"70px"}
                src="/assets/img/logo.png"
                bg={"white"}
              />
            </Box>
            <Image height={"70px"} src="/assets/img/arrow.png" />
          </Flex>

          {/* Links */}
          <Flex
            className={styles["section"]}
            justifyContent={"center"}
            marginRight={isTablet && !isMobile ? "10px" : "0"}
          >
            {!isMobile && <NavbarLink path={"/"}>Home</NavbarLink>}

            <NavbarDropdown label={"Contenido"}>
              {/* <a href="https://rewards.spreen.world" rel={"noreferrer"} isDropdown={true}>
                Sorteos
              </a> */}
              <Button
                /*variant={"unstyled"}
                textAlign={"left"}
                as={'a'}
                // href={/*'https://rewards.spreen.world'}
                height={"100%"}
                color={"#777"}
                _hover={{ color: "#333" }}*/
              >
              Sorteo PC ($3000)
              </Button>
              <NavbarLink path={"/torneos"} isDropdown={true}>
                Torneos
              </NavbarLink>
              <NavbarLink path={"/eventos"} isDropdown={true}>
                Eventos
              </NavbarLink>
              <NavbarLink path={"/postulaciones"} isDropdown={true}>
                Postulaciones
              </NavbarLink>
            </NavbarDropdown>

            <NavbarDropdown label={"Spreen"}>
              <NavbarLink path={"/yo"} isDropdown={true}>
                Sobre mi
              </NavbarLink>
              <NavbarLink path={"/pc"} isDropdown={true}>
                PC
              </NavbarLink>
              <NavbarLink path={"/stream"} isDropdown={true}>
                Stream
              </NavbarLink>
            </NavbarDropdown>
          </Flex>

          {/* Social */}
          {!isTablet && (
            <Flex className={styles["section"]} justifyContent={"flex-end"}>
              <NavbarSocial
                icon={"/assets/img/icons/twitch.png"}
                link={"https://twitch.tv/elspreen"}
              />
              <NavbarSocial
                icon={"/assets/img/icons/twitter.png"}
                link={"https://twitter.com/SpreenDMC"}
              />
              <NavbarSocial
                icon={"/assets/img/icons/youtube.png"}
                link={"https://youtube.com/@Spreen"}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
}