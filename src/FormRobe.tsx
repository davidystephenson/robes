import { Box, BoxProps, Stack, StackProps } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

export default function FormRobe(props: Omit<BoxProps, 'onSubmit'> & HTMLAttributes<HTMLFormElement> & {
  stack?: StackProps
}) {
  const { children, stack, ...rest } = props
  return (
    <Box as='form' {...rest}>
      <Stack {...stack}>
        {children}
      </Stack>
    </Box>
  )
}