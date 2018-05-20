import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return {
      "description": `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor; hodor hodor; hodor hodor - hodor, hodor, hodor hodor. 
      Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor; hodor hodor; hodor hodor - hodor, hodor, hodor hodor. `,
      "socialLinks": [
        {
          "imgSrc": "assets/twitter.png",
          "link": "https://twitter.com/aloDev",
          "alt": "Twitter logo"
        },
        {
          "imgSrc": "assets/github.png",
          "link": "https://github.com/alo",
          "alt": "Github logo"
        },
        {
          "imgSrc": "assets/linkedin.png",
          "link": "https://www.linkedin.com/in/alodev/",
          "alt": "Linkedin logo"
        }
      ],
      "projects":[
        {
          "title": "Coderty",
          "desc": `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR!`,
          "imgSrc":"assets/coderty-logo.png",
          "socialLinks": [
            {
              "imgSrc": "assets/twitter.png",
              "link": "https://twitter.com/aloDev",
              "alt": "Twitter logo"
            },
            {
              "imgSrc": "assets/github.png",
              "link": "https://github.com/alo",
              "alt": "Github logo"
            },
            {
              "imgSrc": "assets/linkedin.png",
              "link": "https://www.linkedin.com/in/alodev/",
              "alt": "Linkedin logo"
            }
          ],  
        },
        {
          "title": "Coderty",
          "desc": `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR!`,
          "imgSrc":"assets/coderty-logo.png",
          "socialLinks": [
            {
              "imgSrc": "assets/twitter.png",
              "link": "https://twitter.com/aloDev",
              "alt": "Twitter logo"
            },
            {
              "imgSrc": "assets/github.png",
              "link": "https://github.com/alo",
              "alt": "Github logo"
            },
            {
              "imgSrc": "assets/linkedin.png",
              "link": "https://www.linkedin.com/in/alodev/",
              "alt": "Linkedin logo"
            }
          ],  
        },
        {
          "title": "Coderty",
          "desc": `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR!`,
          "imgSrc":"assets/coderty-logo.png",
          "socialLinks": [
            {
              "imgSrc": "assets/twitter.png",
              "link": "https://twitter.com/aloDev",
              "alt": "Twitter logo"
            },
            {
              "imgSrc": "assets/github.png",
              "link": "https://github.com/alo",
              "alt": "Github logo"
            },
            {
              "imgSrc": "assets/linkedin.png",
              "link": "https://www.linkedin.com/in/alodev/",
              "alt": "Linkedin logo"
            }
          ],  
        }
      ],
      "title":"Angular SSR",
      "meta":[
        { name: 'author',   content: 'alo'},
        { name: 'keywords', content: 'angular seo, angular 5 universal, nelacantinela'},
        { name: 'description', content: 'Angular SEO friendly app! Enjoy' }
      ]
    }
    
  }
}
