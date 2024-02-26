/* eslint-disable react/display-name */
import { FC, ReactNode, memo } from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";

type Props = {
  isRequired: boolean;
  isInvalid?: boolean;
  formLabel: string;
  children: ReactNode;
};

export const FormBox: FC<Props> = memo((props) => {
  const { isRequired, formLabel, isInvalid, children } = props;

  return (
    <Box>
      <FormControl isRequired={isRequired} isInvalid={isInvalid}>
        <FormLabel>{formLabel}</FormLabel>
        {children}
      </FormControl>
    </Box>
  );
});
