import { extendTheme } from "@chakra-ui/react";
import  {switchTheme}  from "./SwichtCustom";

const config = {
    initialColormode:"Dark",
    useSystemColorMode:false,
    
};



export const chakraCustomTheme = extendTheme({
    config,
    fonts: {
        body: "Caprasimo, sans-serif",
        heading: "Ubuntu, serif",
      },
      components: { Switch: switchTheme },
      
})