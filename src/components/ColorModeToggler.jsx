import React from "react";
import { Box, Switch, useColorMode } from "@chakra-ui/react";




export const ColorModeToggler = () =>{
    const {colorMode, toggleColorMode} = useColorMode();

    return(
        <Box>
            <Switch size="lg" isChecked={colorMode === "light" ? false : true}  onChange={toggleColorMode}
           
      />
               
        </Box>
    )
}