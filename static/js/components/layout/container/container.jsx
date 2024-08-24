import { Container as ChakraContainer } from "@chakra-ui/react";
import useResolution from "../../../hooks/useResolution";

export default function Container({
  children,
  marginTop,
  marginBottom,
  padding = "10px",
  maxWidth = null,
  bg = "#161616",
}) {
  const [isSmallDesktop] = useResolution(1600);
  const [isTablet] = useResolution(1100);
  const [isMobile] = useResolution(700);

  let fixedMaxWidth = maxWidth;
  if (fixedMaxWidth == null) {
    fixedMaxWidth = isMobile
      ? "98%"
      : isTablet
      ? "95%"
      : isSmallDesktop
      ? "90%"
      : "80%";
  }

  return (
    <ChakraContainer
      maxWidth={fixedMaxWidth}
      margin={"auto"}
      marginTop={marginTop}
      marginBottom={marginBottom}
      padding={padding}
      bg={bg}
      borderRadius={"6px"}
    >
      {children}
    </ChakraContainer>
  );
}