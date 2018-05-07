import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alo-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  @Input() projects;

  constructor() {}
}
