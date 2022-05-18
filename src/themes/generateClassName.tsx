import createGenerateClassName from '@mui/styles/createGenerateClassName';

const generateClassName = createGenerateClassName({
    productionPrefix: 'prd',
    seed: 'main'
});

export default generateClassName;
