import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default createVuetify({
    theme: {
        defaultTheme: 'registerTheme',
        themes: {
            registerTheme: {
                dark: false,
                colors: {
                    'primary': '#7367F0',
                    'on-primary': '#fff',
                    'secondary': '#D81B60',
                    'on-secondary': '#fff',
                    'success': '#8E24AA',
                    'on-success': '#fff',
                    'info': '#1E88E5',
                    'on-info': '#fff',
                    'warning': '#00897B',
                    'on-warning': '#fff',
                    'error': '#F4511E',
                    'background': '#A388B8',
                    'on-background': '#2F2B3D',
                    'on-surface': '#2F2B3D',
                },
            },
        },
    },
})