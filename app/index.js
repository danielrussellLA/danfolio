import portfolio from './portfolio';
import header from './header';
import { blurUpImage } from './util';
import { BASE_IMG_PATH } from './constants';

blurUpImage( `${BASE_IMG_PATH}/venice-cover-1.jpg`, '.header-bg-img');

window.addEventListener('load', () => {
    portfolio.init('#portfolio-items');
    header.init('#about-section');
});
