import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is codeuntillive. I am a passionate Computer Science undergraduate
              specializing in Web Development and AI integration, with hands-on experience
              in building secure, scalable web applications.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Web Development / AI Integration / Backend System Design / Privacy-Focused Software"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "Seeking opportunities to apply skills in real-world products and grow as a software engineer."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:codeuntillive@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                codeuntillive@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/codeuntillive"
                target="_blank"
                rel="noreferrer"
              >
                @codeuntillive
              </a>
            </li>
            <li>
              Location:{" "}
              Sonipat, India
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
