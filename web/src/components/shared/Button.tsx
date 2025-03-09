import { Button as ChakraButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export type ButtonProps = {
  text: string;
  link?: string;
  external?: boolean;
};

export function Button(props: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.link) {
      if (props.external) {
        window.location.href = props.link;
      } else {
        navigate(props.link);
      }
    }
  };
  return (
    <ChakraButton
      size="lg"
      mt="24px"
      colorScheme="blue"
      bg="blue.500"
      color="white"
      _hover={{
        bg: "blue.600",
      }}
      _active={{
        bg: "blue.700",
      }}
      onClick={handleClick}
    >
      {props.text}
    </ChakraButton>
  );
}
