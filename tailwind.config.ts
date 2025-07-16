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
            },
            fontSize: {
                'h1' : ['64px', { lineHeight: '76px', fontWeight: '600', }],
                'h2' : ['36px', { lineHeight: '44px', fontWeight: '600', }],
                'h3' : ['28px', { lineHeight: '36px', fontWeight: '600', }],
                'h4' : ['20px', { lineHeight: '28px', fontWeight: '600', }],
                'xl-regular': ['18', {lineHeight: '28', fontWeight: '400'}],
                'lg-regular': ['16', {lineHeight: '24', fontWeight: '400'}],
                'md-regular': ['14', {lineHeight: '20', fontWeight: '400'}],
                'sm-regular': ['12', {lineHeight: '16', fontWeight: '400'}],
                'xl-medium': ['18', {lineHeight: '28', fontWeight: '500'}],
                'lg-medium': ['16', {lineHeight: '24', fontWeight: '500'}],
                'md-medium': ['14', {lineHeight: '20', fontWeight: '500'}],
                'sm-medium': ['12', {lineHeight: '16', fontWeight: '500'}],
            },
            boxShadow: {
                'shadow-xs': '0 0 2px rgba(171, 190, 209, 0.6)',
                'shadow-sm': '0 0 4px rgba(171, 190, 209, 0.4)',
                'shadow-md': '0 0 6px rgba(171, 190, 209, 0.3)',
                'shadow-lg': '0 0 8px rgba(171, 190, 209, 0.4)',
                'shadow-xl': '0 0 16px rgba(171, 190, 209, 0.3)',
            }
        }
    }
}

export default config;