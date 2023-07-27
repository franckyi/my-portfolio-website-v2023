import { Projects } from "../types/projects";

export const projectList: Projects = [
    {
      title: 'Basket Maniacs Web App',
      subtitle: 'Angular/RxJs/Material',
      imgSrc: './assets/img/bm.jpg',
      desc: 'My final project of the SDA JavaScript Boot Camp. A SPA dedicated to NBA fans, showing latest news, scores, info about teams, players and search forms for further filtering of info. Uses Material, services, RxJs operators to elaborate data received from remote APIs. I\'m continuously improving it.',
      designUrl: 'https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1',
      gitUrl: 'https://gitlab.com/franckyiside/nba-app',
      liveUrl: 'https://francky.works/basket-maniacs',
    },
    {
      title: 'Weather Web App',
      subtitle: 'Angular/Material',
      imgSrc: './assets/img/meteo.jpg',
      desc: 'An SPA that show the weather info for the current local position. Asks for permission to get client geo location, then gets info from the API for that location using longitude and latitude coordinates. Finally displays them on the frontend. Features a search input to get the weather for any other remote location.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/weather-app',
      liveUrl: 'https://weather.franckyiside.eu/',
    },
    {
      title: 'Daddy\'s E-commerce',
      subtitle: 'WordPress/WooCommerce',
      imgSrc: './assets/img/daddys.jpg',
      desc: 'For Daddy\'s I designed and developed a custom WordPress theme. I was also involved in the creation of the graphics, creation and setup of products, categories and other things related to an e-commerce. Lastly I started the development on the top of the design I created with Figma.',
      designUrl: 'https://www.figma.com/file/IAJYrobSn8iRPy3q6J6boO/Daddys-ecommerce?type=design&mode=design&t=hSwubaL4lxEmMaJE-1',
      gitUrl: null,
      liveUrl: 'https://daddys.pl/',
    },
    {
      title: 'Wedding Website',
      subtitle: 'HTML5/Sass/JavaScript',
      imgSrc: './assets/img/wedding.jpg',
      desc: 'Tiffania and Justin needed a web page to provide guests more info about their wedding. I came to help developing a simple, elegant and fully responsive website featuring a JavaScript countdown to the date and every info guests may need to reach the locations.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/wedding-website',
      liveUrl: 'https://justinandtiffania.com/',
    },
    {
      title: 'DevThemes for VSC',
      subtitle: 'HTML5/Sass/JavaScript',
      imgSrc: './assets/img/vsc.jpg',
      desc: 'Two extensions for Visual Studio Code. The first is a color theme inspired by the official Angular Material documentation, The second includes the Angular plus more themes inspired by popular developers tools. Currently includes Firefox devtools colors. You can install them from VSC marketplace.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/vsc-devthemes',
      liveUrl: 'https://marketplace.visualstudio.com/publishers/FranckyIside',
    }
]