import { Button as ChakraButton, Link } from "@chakra-ui/react";

export type ButtonProps = {
  text: string;
  link?: string;
};
export function Button(props: ButtonProps) {
  const buttonElement = (
    <ChakraButton size="lg" mt="24px" colorScheme="teal">
      {props.text}
    </ChakraButton>
  );
  return props.link ? (
    <Link href={props.link}>{buttonElement}</Link>
  ) : (
    buttonElement
  );
}
