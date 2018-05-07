import { Component, Input } from '@angular/core';

@Component({
  selector: 'alo-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.sass']
})
export class SocialLinksComponent {
  @Input() socialLinks;
  constructor() {}
}
