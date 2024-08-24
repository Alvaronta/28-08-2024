import { Box, Heading, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export default function Markdown({ content }) {
  return (
    <ReactMarkdown
      children={content?.replace(/\n/g, "  \n")}
      components={{
        h1({ children }) {
          return <Heading fontSize={"5xl"}>{children}</Heading>;
        },
        h2({ children }) {
          return <Heading fontSize={"4xl"}>{children}</Heading>;
        },
        h3({ children }) {
          return <Heading fontSize={"3xl"}>{children}</Heading>;
        },
        h4({ children }) {
          return <Heading fontSize={"2xl"}>{children}</Heading>;
        },
        h5({ children }) {
          return <Heading fontSize={"1xl"}>{children}</Heading>;
        },
        p({ children }) {
          return <Text margin={"10px 0"}>{children}</Text>;
        },
        br() {
          return <Box margin={"3px 0"}></Box>;
        },
      }}
    />
  );
}