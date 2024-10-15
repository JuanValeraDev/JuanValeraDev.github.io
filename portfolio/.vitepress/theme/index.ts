import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import '../../css/output.css'

export default {
    ...DefaultTheme,
    enhanceApp({app, router, siteData}){
        if (typeof window !== 'undefined') {
            const script = document.createElement('script');
            script.src = "/scripts/carousel-script.js";
            script.async = true;
            document.head.appendChild(script);
        }
    }
}
