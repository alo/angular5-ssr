import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return {
      description: `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor; hodor hodor; hodor hodor - hodor, hodor, hodor hodor. 
      Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor; hodor hodor; hodor hodor - hodor, hodor, hodor hodor. `,
      socialLinks: [
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/aloDev'
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/alo'
        },
        {
          icon: 'fab fa-linkedin-in',
          link: 'https://www.linkedin.com/in/alodev/'
        }
      ],
      projects: [
        {
          title: 'Coderty',
          desc: `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR!`,
          imgSrc: 'assets/coderty-logo.png',
          socialLinks: [
            {
              icon: 'fab fa-twitter',
              link: 'https://twitter.com/aloDev'
            },
            {
              icon: 'fab fa-github',
              link: 'https://github.com/alo'
            },
            {
              icon: 'fab fa-linkedin-in',
              link: 'https://www.linkedin.com/in/alodev/'
            }
          ]
        },
        {
          title: 'Coderty',
          desc: `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR!`,
          imgSrc: 'assets/coderty-logo.png',
          socialLinks: [
            {
              icon: 'fab fa-twitter',
              link: 'https://twitter.com/aloDev'
            },
            {
              icon: 'fab fa-github',
              link: 'https://github.com/alo'
            },
            {
              icon: 'fab fa-linkedin-in',
              link: 'https://www.linkedin.com/in/alodev/'
            }
          ]
        },
        {
          title: 'Coderty',
          desc: `Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR!`,
          imgSrc: 'assets/coderty-logo.png',
          socialLinks: [
            {
              icon: 'fab fa-twitter',
              link: 'https://twitter.com/aloDev'
            },
            {
              icon: 'fab fa-github',
              link: 'https://github.com/alo'
            },
            {
              icon: 'fab fa-linkedin-in',
              link: 'https://www.linkedin.com/in/alodev/'
            }
          ]
        }
      ],
      title: 'Angular SSR',
      meta: [
        {
          name: 'author',
          content: 'AlmeriaJS'
        },
        {
          name: 'keywords',
          content: 'angular seo, angular 5 universal, nelacantinela'
        },
        {
          name: 'description',
          content: 'Angular SEO friendly app! Enjoy'
        },
        {
          name: 'copyright',
          content: 'AlmeriaJS'
        },
        {
          name: 'copyright',
          content: 'AlmeriaJS'
        },
        {
          property: 'og:title',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:description',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:image',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:url',
          content: 'Angular SSR Blog'
        },
        {
          property: 'og:site_name',
          content: 'angularalmeria.com'
        }
      ]
    };
  }
}
