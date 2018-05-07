import { Component, Input } from '@angular/core';

@Component({
  selector: 'alo-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent {
  list = [{ name: 'Angular' }, { name: 'NodeJS' }, { name: 'AngularJS' }];

  @Input() mainDescription;
  @Input() socialLinks;

  constructor() {}
}
