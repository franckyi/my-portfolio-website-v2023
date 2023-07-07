import { Component, OnInit, Input } from '@angular/core';
import { projectList } from '../../model/project-list';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() project?: Project;
  projects = projectList;

  constructor() { }

  ngOnInit(): void {
  }

  getHeaderClass(headerClass: string | undefined) {

    switch (headerClass) {
      case 'angular': return 'header-angular';
      case 'react': return 'header-react';
      case 'vue': return 'header-vue';
      case 'html': return 'header-html';
      default: return 'html';
    }

  }

}
