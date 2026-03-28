import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      },
      {
        id: "portfolio",
        title: "Portfolio",
        file: "markdown/portfolio.md",
        icon: "i-heroicons-solid:briefcase",
        excerpt: "My professional portfolio showcasing web development and design work..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "e-commerce",
        title: "E-Commerce Website",
        file: "markdown/about-me.md",
        icon: "i-heroicons-solid:shopping-cart",
        excerpt: "Full-stack e-commerce platform with product listing and pricing...",
        link: "https://github.com/codeuntillive"
      },
      {
        id: "chat-app",
        title: "High-Privacy Chat Application",
        file: "markdown/about-me.md",
        icon: "i-heroicons-solid:chat",
        excerpt: "Chat system focused on user privacy with message hashing...",
        link: "https://github.com/codeuntillive"
      },
      {
        id: "hls-streaming",
        title: "HLS Video Streaming Web App",
        file: "markdown/about-me.md",
        icon: "i-heroicons-solid:video-camera",
        excerpt: "HLS streaming for smooth video delivery over the web...",
        link: "https://github.com/codeuntillive"
      }
    ]
  }
];

export default bear;
