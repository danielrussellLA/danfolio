import portfolio from './portfolio.js';
import header from './header.js';

window.addEventListener('load', () => {
    portfolio.init('#portfolio-items');
    header.init('#about-section');
});
