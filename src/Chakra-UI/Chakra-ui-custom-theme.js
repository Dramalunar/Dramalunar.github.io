import { extendTheme } from "@chakra-ui/react";
import  {switchTheme}  from "./SwichtCustom";

const config = {
    initialColormode:"Dark",
    useSystemColorMode:false,
    
};



export const chakraCustomTheme = extendTheme({
    config,
    fonts: {
        body: "Numans, sans-serif",
        heading: "Montserrat, serif",
      },
      components: { Switch: switchTheme },
      
})