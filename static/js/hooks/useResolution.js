import { useMediaQuery } from "@chakra-ui/react";

const useResolution = (resolution) =>
  useMediaQuery(`(max-width: ${resolution}px)`);

export default useResolution;
