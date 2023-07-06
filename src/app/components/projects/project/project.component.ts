import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project?: Project;

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
