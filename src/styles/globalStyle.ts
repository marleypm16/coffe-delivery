import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    margin:0;
    padding:0;
    box-sizing:border-box;
`

export const theme = {
    colors:{
        purple:{
            dark :'#4B2995;',
            regular : '#8047F8;',
            light: '#EBE5F9;'
        },
        yellow:{
            dark:'#C47F17;',
            regular:'#DBAC2C;',
            light:'#F1E9C9;'
        }
    },
    fontSIzes:{
        baloo:{
            xl : '48px;',
            l : '32px;',
            m : '24px;',
            s : '20px;',
            xs : '18px;'
        },
        roboto:{
            l : '20px;',
            m : '16px;',
            s : '14px;',
            xs : '12px;'
        }
       
    },

    font :{
        baloo : " 'Baloo 2', serif;",
        roboto : " 'Roboto', serif;"  
    },
    weight:{
        regular : 400,
        bold : 700,
        extraBold:800
    }

} 

