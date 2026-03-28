import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/codeuntillive"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/"
      },
      {
        id: "my-twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:codeuntillive@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: []
  }
};

export default websites;
