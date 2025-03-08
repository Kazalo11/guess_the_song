import { Box, Flex, Heading } from "@chakra-ui/react";
import { Button } from "./Button";

export default function Navbar() {
  return (
    <Box
      px={6}
      py={4}
      position="sticky"
      top="0"
      width="100%"
      zIndex="sticky"
      boxShadow="sm"
    >
      <Flex h={12} alignItems="center" justifyContent="space-between">
        <Heading
          onClick={() => (window.location.href = "/")}
          cursor="pointer"
          fontSize="2xl"
        >
          Guess the Song
        </Heading>

        <Button link="/" text="Home" />
      </Flex>
    </Box>
  );
}
