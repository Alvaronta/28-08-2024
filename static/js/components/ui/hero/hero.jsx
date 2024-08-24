import { Box } from "@chakra-ui/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TwitchPlayer } from "react-twitch-embed";

import styles from "./hero.module.css";

function StreamPlayer({ status }) {
  const { live, vod } = status;

  return live ? (
    <TwitchPlayer
      allowFullscreen={true}
      autoplay={true}
      muted={true}
      channel={"elspreen"}
      width={"100%"}
      height={"100%"}
    />
  ) : (
    <TwitchPlayer
      allowFullscreen={true}
      autoplay={true}
      muted={true}
      video={vod.id}
      width={"100%"}
      height={"100%"}
    />
  );
}

function HeroWithData({ status }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 3], [1, 0]);

  return (
    <motion.div style={{ scale }}>
      <Box
        className={styles["player-container"]}
        width={"100%"}
        height={"100%"}
      >
        <Box
          alignItems={"center"}
          width={"40%"}
          height={"46.8vh"}
          margin={"auto"}
        >
          <StreamPlayer status={status} />
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Hero() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      const req = await fetch("https://api.spreen.world/status");
      const data = await req.json();
      setStatus(data);
    }

    fetchStatus();
  }, []);

  return (
    <Box marginBottom={"30px"}>
      <Box
        width={"100%"}
        bg={"url('/assets/img/bgs/stars.jpg')"}
        className={styles["parallax-back"]}
        padding={"40px 0"}
      >
        {status && !status.error && <HeroWithData status={status} />}
        <Box
          bg={"url('/assets/img/bgs/cactus.png')"}
          className={styles["parallax-front"]}
          minHeight={"100px"}
        ></Box>
      </Box>
    </Box>
  );
}