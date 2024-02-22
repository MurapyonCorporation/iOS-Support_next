import { FC, ReactElement, memo, useState } from "react";
import { FormControl, FormLabel, InputGroup, InputLeftElement, Input, Box, IconButton, InputRightElement } from "@chakra-ui/react";

type Props = {
  isRequired: boolean;
  formLabel: string;
  type: string;
  placeholder: string;
  leftElementIcon: ReactElement;
  rightElementIcon?: ReactElement;
  onClick?: () => void;
}

export const InputFormBox: FC<Props> = memo((props) => {
  const { isRequired, formLabel, type, placeholder, leftElementIcon, rightElementIcon, onClick } = props;
  
  return (
    <Box>
      <FormControl isRequired={isRequired}>
        <FormLabel>{formLabel}</FormLabel>
        <InputGroup size={{ base: "sm", md: "md" }}>
          <InputLeftElement pointerEvents={'none'}>
            {leftElementIcon}
          </InputLeftElement>
          <Input type={type} placeholder={placeholder}/>
          {(formLabel === "Password") || (formLabel === "Confirm Password")
            ?
              <InputRightElement>
                <IconButton aria-label="view on/off" icon={rightElementIcon} onClick={onClick} />                    
              </InputRightElement>
            :
              null
          }
        </InputGroup>                
      </FormControl>
    </Box>
  )
})