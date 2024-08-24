import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import PCItem from "../pc-item/pc-item";

export default function PcItemDeck({ title, items }) {
  return (
    <Box>
      <Heading fontSize={"26px"}>{title}</Heading>
      <Grid
        gridTemplateColumns={"repeat(auto-fit, minmax(280px, 1fr))"}
        gap={"20px"}
        marginTop={"25px"}
      >
        {items.map((item, index) => {
          return (
            <GridItem width={"280px"} key={index}>
              <PCItem {...item} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}