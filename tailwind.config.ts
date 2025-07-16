import type { Config } from 'tailwindcss';

const config: Config = {
    theme:{
        extend:{
            colors: {
                primary: {
                    100: '#28CB8B',
                    200: '#43A046',
                    300: '#388E3B',
                    400: '#237D31',
                    500: '#1B5E1F',
                    600: '#103E13'
                },
                secondary: '#263238',
                info: '#2194f3',
                error: '#E53835',
                warning: '#FBC02D',
                gray: {
                    50: '#FFFFFF',
                    100: '#F5F7FA',
                    200: '#ABBED1',
                    300: '#89939E',
                    400: '#717171',
                    500: '#4D4D4D',
                    600: '#263238',
                },
                "green-tint": {
                    100: "#E8F5E9",
                    200: "#C8E6C9",
                    300: "#A5D6A7",
                    400: "#81C784",
                    500: "#66BB69",
                },
            }
        }
    }
}

