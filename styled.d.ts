import 'styled-components'
declare module 'styled-components'{
    export interface DefaultTheme {
    
        title : string;
        
        colors : {
            background: string;
            secondBg: string;
            text: string;
            title: string;
            primary: string;
            secondary: string;
        }
    }
}