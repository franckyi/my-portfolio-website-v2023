import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/types/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects = [
    {
      title: 'NBA News',
      subtitle: 'Angular, RxJs, Material',
      headerClass: 'angular',
      avatarSrc: 'assets/img/nba-mob.png',
      desc: 'My JavaScript bootcamp final project, a SPA that shows the last news from NBA world. Started with the UI design in Figma, implemented routes to display the different views, services with the HttpClient module to get data from API, a search feature to find players, teams, news and scores. In the time I added new features or improved the code quality.',
      designUrl: 'https://www.figma.com/file/zXa5Q8IpAgz19Uqle2R4NH/Serwis-NBA?type=design&node-id=0%3A1&mode=design&t=QtLDPxJ0HFTGQ87l-1',
      gitUrl: 'https://nba.franckyiside.eu/',
      liveUrl: 'https://gitlab.com/franckyiside/nba-app',
    },
    {
      title: 'Tiffania & Justin',
      subtitle: 'HTML5, JavaScript',
      headerClass: 'html',
      avatarSrc: 'assets/img/wedding.png',
      desc: 'A responsive wedding page featuring a JavaScript countdown and use of media.',
      designUrl: null,
      gitUrl: 'https://gitlab.com/franckyiside/wedding-website',
      liveUrl: 'https://justinandtiffania.com/',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
