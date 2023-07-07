import { Projects } from "../types/projects";

export const projectList: Projects = [
    {
      title: 'NBA News',
      subtitle: 'Angular, RxJs, Material',
      headerClass: 'angular',
      avatarSrc: 'assets/img/nba-mob.png',
      desc: 'The final project of SDA JavaScript bootcamp. An SPA dedicated to NBA fans, showing last news, scores, info about teams, players and search forms for further filtering of info. Uses Material, services, RxJs operators to elaborate data received from remote APIs. I\'m continuously improving it.',
      designUrl: 'https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1',
      gitUrl: 'https://gitlab.com/franckyiside/nba-app',
      liveUrl: 'https://nba.franckyiside.eu/',
    },
    {
      title: 'Niimbot.pl',
      subtitle: 'WooCommerce',
      headerClass: 'html',
      avatarSrc: 'assets/img/niimbot.png',
      desc: 'Niimbot is an online shop specialised in electronic printers. The clients asked a refresh of the frontend so I came to help with a brand new design of the main pages plus added more interactivity and animations to some of the key elements such as the cta, FAQ, the printer technical info details.',
      designUrl: null,
      gitUrl: null,
      liveUrl: 'https://niimbot.pl/',
    },
    {
      title: 'Weather App',
      subtitle: 'Angular, Material',
      headerClass: 'angular',
      avatarSrc: 'assets/img/weather.png',
      desc: 'An SPA that show the weather info for the current local position. Asks for permission to get client geo location, then gets info from the API for that location using longitude and latitude coordinates. Finally displays them on the frontend. Features a search input to get the weather for any other remote location.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/weather-app',
      liveUrl: 'https://weather.franckyiside.eu/',
    },
    {
      title: 'Tiffania & Justin',
      subtitle: 'HTML5, Sass, JavaScript',
      headerClass: 'html',
      avatarSrc: 'assets/img/wedding.png',
      desc: 'Tiffania and Justin needed a web page to provide guests more info about their wedding. I came to help developing a simple, elegant and fully responsive website featuring a JavaScript countdown to the date and every info guests may need to reach the locations.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/wedding-website',
      liveUrl: 'https://justinandtiffania.com/',
    },
    {
      title: 'My About page',
      subtitle: 'HTML5, Sass, JavaScript',
      headerClass: 'html',
      avatarSrc: 'assets/img/about.png',
      desc: 'My about page uses a horizontal-scroll layout. The website uses HTML, Sass, vanilla JavaScript and features a grid gallery, carousels and a minimal amount of animations. Give a look at my original design project on Figma and feel free to check the live page as well.',
      designUrl: 'https://www.figma.com/file/aWiKGNLQsOeyiEDxn5uroS/francky-vers_2?type=design&node-id=0%3A1&mode=design&t=OiBOBnevobftradZ-1',
      gitUrl: 'https://gitlab.com/franckyiside/about',
      liveUrl: 'https://about.franckyiside.eu/',
    }
]