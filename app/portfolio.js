const BASE_IMG_PATH = './style/assets/';

export default {
    items: [
        {
            title: 'startpage.com',
            imgPath: `${BASE_IMG_PATH}startpage-thumbnail.jpg`,
            link: 'https://startpage.com'
        },
        {
            title: 'playhowstuffworks.com',
            imgPath: `${BASE_IMG_PATH}hsw-thumbnail.jpg`,
            link: 'https://play.howstuffworks.com'
        },
        {
            title: 'zoo.com',
            imgPath: `${BASE_IMG_PATH}zoo-thumbnail.jpg`,
            link: 'https://www.zoo.com'
        },
        {
            title: 'system1.com',
            imgPath: `${BASE_IMG_PATH}system1-thumbnail.jpg`,
            link: 'https://system1.com'
        },
        {
            title: 'webcrawler.com',
            imgPath: `${BASE_IMG_PATH}webcrawler-thumbnail.jpg`,
            link: 'https://www.webcrawler.com'
        },
        {
            title: 'nation.com',
            imgPath: `${BASE_IMG_PATH}nation-thumbnail.jpg`,
            link: 'https://www.nation.com'
        },
        {
            title: 'info.com',
            imgPath: `${BASE_IMG_PATH}info-thumbnail.jpg`,
            link: 'https://www.info.com'
        },
        {
            title: 'gopher.com',
            imgPath: `${BASE_IMG_PATH}gopher-thumbnail.jpg`,
            link: 'https://www.gopher.com'
        },
        {
            title: 'metacrawler.com',
            imgPath: `${BASE_IMG_PATH}metacrawler-thumbnail.jpg`,
            link: 'https://www.metacrawler.com'
        },
        {
            title: 'dogpile.com',
            imgPath: `${BASE_IMG_PATH}dogpile-thumbnail.jpg`,
            link: 'https://www.dogpile.com'
        },
        {
            title: 'carsgenius.com',
            imgPath: `${BASE_IMG_PATH}carsgenius-thumbnail.jpg`,
            link: 'https://carsgenius.com'
        },
        {
            title: 'realtorfinds.com',
            imgPath: `${BASE_IMG_PATH}realtorfinds-thumbnail.jpg`,
            link: 'https://www.realtorfinds.com'
        },
        {
            title: 'healthnwell.com',
            imgPath: `${BASE_IMG_PATH}healthnwell-thumbnail.jpg`,
            link: 'https://healthnwell.com'
        },
        {
            title: 'localmoxie.com',
            imgPath: `${BASE_IMG_PATH}localmoxie-thumbnail.jpg`,
            link: 'https://www.localmoxie.com'
        },
        {
            title: 'socialscour.com',
            imgPath: `${BASE_IMG_PATH}socialscour-thumbnail.jpg`,
            link: 'https://www.socialscour.com'
        },
        {
            title: 'guardengine.com',
            imgPath: `${BASE_IMG_PATH}guardengine-thumbnail.jpg`,
            link: 'https://www.guardengine.com'
        },
        {
            title: 'autoversed.com',
            imgPath: `${BASE_IMG_PATH}autoversed-thumbnail.jpg`,
            link: 'https://autoversed.com'
        },
    ],

    createItem(title, imgPath, link) {
        const anchor = document.createElement('a');
        const el = document.createElement('div');
        anchor.href = link;
        anchor.target = '_blank';
        el.classList.add('portfolio-item');
        el.style.backgroundImage = `url("${imgPath}")`;
        anchor.appendChild(el);
        return anchor;
    },

    generate(id) {
        this.items.forEach(item => {
            const portfolioContainer = document.querySelector(id);
            const { title, imgPath, link } = item;
            const el = this.createItem(title, imgPath, link);
            portfolioContainer.appendChild(el)
        });
    },

    init(id) {
        this.generate(id);
    }
}
