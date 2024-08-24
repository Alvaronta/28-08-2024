import { Image, Heading, Text, Box, Flex, Link } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import {
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Container from "../components/layout/container/container";

function SocialGroup({ children }) {
  return <Flex justifyContent={"space-between"}>{children}</Flex>;
}

function Social({ icon, name, url, width = "49%" }) {
  return (
    <Link width={width} href={url} target={"_blank"} rel={"noreferrer"}>
      <Box
        bg={"#fff1"}
        borderRadius={"5px"}
        padding={"5px 10px"}
        marginTop={"10px"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={width === "100%" ? "center" : "flex-start"}
        >
          <Box fontSize={"30px"} marginRight={"10px"}>
            {icon}
          </Box>

          <Box>
            <Text fontSize={"15px"}>{name}</Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
}

export default function Yo() {
  return (
    <>
      <Container
        marginTop={"100px"}
        marginBottom={"30px"}
        bg={"#161616"}
        maxWidth={"440px"}
        padding={"10px"}
      >
        <Image
          bottom={"100px"}
          position={"relative"}
          width={"46%"}
          borderRadius={"full"}
          marginTop={"30px"}
          src={"/assets/img/yo_spreen.jpg"}
        />
        <Box
          bottom={"190px"}
          position={"relative"}
          width={"50%"}
          marginLeft={"auto"}
        >
          <Heading>Spreen</Heading>
          <Flex color={"gray"} marginTop={"5px"} alignItems={"center"}>
            <GoLocation />
            <Text fontSize={"15px"} marginLeft={"5px"}>
              Buenos Aires, Argentina.
            </Text>
          </Flex>
        </Box>

        <Box bottom={"160px"} width={"100%"} position={"relative"}>
          <Image
            src={"/assets/img/player.png"}
            alt={"Music player controls"}
            filter={"invert(1)"}
            margin={"auto"}
            width={"75%"}
          />
        </Box>

        <Box bottom={"140px"} position={"relative"} height={"160px"}>
          <Social
            icon={<FaTwitch />}
            name={"ElSpreen"}
            url={"https://www.twitch.tv/elspreen"}
            width={"100%"}
          />

          <SocialGroup>
            <Social
              icon={<FaYoutube />}
              name={"SpreenDMC"}
              url={"https://youtube.com/channel/UC4DLCrt55UwaDvAswIr_59A"}
            />
            <Social
              icon={<FaYoutube />}
              name={"Spreen"}
              url={"https://youtube.com/channel/UCgTOIiEgjm58xLjHvDjmgdA"}
            />
          </SocialGroup>

          <SocialGroup>
            <Social
              icon={<FaYoutube />}
              name={"SpreenBOT"}
              url={"https://youtube.com/channel/UCnJfUtNxpKFBLK5O578Wi_A"}
            />
            <Social
              icon={<FaYoutube />}
              name={"SpreenPlus"}
              url={"https://youtube.com/channel/UCQihi5CTb3VdyGu3dkkYY_g"}
            />
          </SocialGroup>

          <SocialGroup>
            <Social
              icon={<FaDiscord />}
              name={"Discord"}
              url={"https://discord.com/invite/spreen"}
            />
            <Social
              icon={<FaInstagram />}
              name={"Instagram"}
              url={"https://www.instagram.com/ivan_buhaje/"}
            />
          </SocialGroup>

          <SocialGroup>
            <Social
              icon={<FaTwitter />}
              name={"Twitter Principal"}
              url={"https://twitter.com/SpreenDMC"}
            />
            <Social
              icon={<FaTwitter />}
              name={"Twitter Personal"}
              url={"https://twitter.com/ivan_buhaje"}
            />
          </SocialGroup>

          <SocialGroup>
            <Social
              icon={<FaTiktok />}
              name={"TikTok Principal"}
              url={"https://www.tiktok.com/@spreenbro?lang=es"}
            />
            <Social
              icon={<FaTiktok />}
              name={"TikTok Personal"}
              url={"https://www.tiktok.com/@ivan_buhaje?"}
            />
          </SocialGroup>
        </Box>
      </Container>
    </>
  );
}
