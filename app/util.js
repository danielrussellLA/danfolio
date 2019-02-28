import { BASE_IMG_PATH } from './constants';

export const isIE11 = document.querySelector('html').closest === undefined;

export const blurUpImage = (lgImgPath = `${BASE_IMG_PATH}/venice-cover-1.jpg`, bgImgSelector = '.header-bg-img') => {
    const lgImg = new Image();
    const largeImgElement = document.querySelector(bgImgSelector)
    lgImg.src = lgImgPath;
    lgImg.onload = (e, err) => {
        largeImgElement.style.backgroundImage = `url('${lgImgPath}')`;
        largeImgElement.style.backgroundSize = 'cover';
        largeImgElement.style.backgroundPosition = 'center;'
        largeImgElement.style.filter = 'none';
    }
};
