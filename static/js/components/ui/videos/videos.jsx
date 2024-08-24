import { Box, Flex } from "@chakra-ui/react";
import Carousel from "../../layout/carousel/carousel";
import Container from "../../layout/container/container";
import NewCard from "../newcard/new-card";
import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../../graphql/environment";
import { GetVideos } from "../../../graphql/queries";
import Error500 from "../../../pages/_500";
import VideoCard from "../video-card/video-card";
import useResolution from "../../../hooks/useResolution";

function LoadingVideos() {
  const skeletons = [];
  for (let i = 0; i < 4; i++) {
    skeletons.push(<NewCard key={i} />);
  }
  return skeletons;
}

function splitInChunks(objects, chunkSize) {
  const chunks = [];
  let chunkIndex = 0;

  for (const child of objects) {
    let currentChunk = chunks[chunkIndex] || [];

    currentChunk.push(child);
    chunks[chunkIndex] = currentChunk;

    if (currentChunk.length >= chunkSize) {
      chunkIndex++;
    }
  }

  return chunks;
}

function VideoCarousel({ children }) {
  const [isSmallDesktop] = useResolution(1432);
  const [isTablet] = useResolution(1100);
  const [isMobile] = useResolution(700);

  const chunks = splitInChunks(
    children,
    isSmallDesktop ? (isTablet ? (isMobile ? 1 : 2) : 3) : 4
  );

  return (
    <Carousel>
      {chunks.map((chunk, chunkIndex) => (
        <Box width={"100%"}>
          <Flex key={chunkIndex} justifyContent={"center"}>
            {chunk}
          </Flex>
        </Box>
      ))}
    </Carousel>
  );
}

function FetchVideos() {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={GetVideos}
      render={({ error, props }) => {
        if (!error && !props) {
          return <LoadingVideos />;
        } else if (error) {
          const source = error?.source;
          const message = source?.errors[0]?.message;
          return <Error500 message={message} />;
        } else if (props) {
          const videos = props.getVideos;
          return (
            <VideoCarousel>
              {videos.map((video, index) => {
                return <VideoCard key={index} {...video} index={index} />;
              })}
            </VideoCarousel>
          );
        }
      }}
    />
  );
}

export default function Videos() {
  return (
    <>
      <Container bg={"transparent"}>
        <FetchVideos />
      </Container>
    </>
  );
}