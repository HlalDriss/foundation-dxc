import components from './components';
import palette from './palette';
import typography from './typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    theme: {
        palette,
        typography,
        breakpoints: {
            values: {
                xs: 0,
                sm: 800,
                md: 1280,
                lg: 1366,
                xl: 1920
            }
        }
    },
    overrideStyleFn: components
};
