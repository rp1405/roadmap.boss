export interface Subtopic {
  name: string;
  content: string;
}

export interface Topic {
  name: string;
  subTopics: { [key: string]: Subtopic };
}

export interface Data {
  id: string;
  name: string;
  topicHeading: string;
  topicDescription: string;
  topics: { [key: string]: Topic };
}
interface AllCourses {
  [key: string]: Data;
}
interface UrlToCourseData {
  [key: string]: string;
}
export const urlToCourseData: UrlToCourseData = {
  frontend: "Frontend",
};
export const AllCourses: AllCourses = {
  NA: {
    id: "NA",
    name: "NA",
    topicHeading: "NA",
    topicDescription: "NA",
    topics: {
      NA: {
        name: "NA",
        subTopics: {
          NA: {
            name: "NA",
            content: "NA",
          },
        },
      },
    },
  },
  Frontend: {
    id: "12345",
    name: "Frontend",
    topicHeading: "Frontend Developer",
    topicDescription:
      "Step by step guide to becoming a modern frontend developer in 2024",
    topics: {
      HTML: {
        name: "HTML",
        subTopics: {
          "Learn Basics": {
            name: "Learn Basics",
            content: "Basics first",
          },
          SEO: {
            name: "SEO",
            content: "SEO is an important thing",
          },
          "Semantic HTML": {
            name: "Semantic HTML",
            content: "Using semantic elements",
          },
          "HTML Forms": {
            name: "HTML Forms",
            content: "Creating forms in HTML",
          },
          "HTML Tables": {
            name: "HTML Tables",
            content: "Creating tables in HTML",
          },
        },
      },
      CSS: {
        name: "CSS",
        subTopics: {
          "Styling Basics": {
            name: "Styling Basics",
            content: "Introduction to CSS styling",
          },
          Selectors: {
            name: "Selectors",
            content: "Different types of CSS selectors",
          },
          "Box Model": {
            name: "Box Model",
            content: "Understanding the CSS box model",
          },
          Flexbox: {
            name: "Flexbox",
            content: "Layout with Flexbox",
          },
          Grid: {
            name: "Grid",
            content: "Layout with CSS Grid",
          },
        },
      },
      JavaScript: {
        name: "JavaScript",
        subTopics: {
          Variables: {
            name: "Variables",
            content: "Declaring variables in JavaScript",
          },
          Functions: {
            name: "Functions",
            content: "Defining and using functions",
          },
          Arrays: {
            name: "Arrays",
            content: "Working with arrays in JavaScript",
          },
          Objects: {
            name: "Objects",
            content: "Understanding objects in JavaScript",
          },
          "DOM Manipulation": {
            name: "DOM Manipulation",
            content: "Manipulating the HTML DOM",
          },
        },
      },
      React: {
        name: "React",
        subTopics: {
          Components: {
            name: "Components",
            content: "Understanding React components",
          },
          Props: {
            name: "Props",
            content: "Passing data with props",
          },
          State: {
            name: "State",
            content: "Managing state in React",
          },
          "Lifecycle Methods": {
            name: "Lifecycle Methods",
            content: "Understanding React component lifecycle",
          },
          Hooks: {
            name: "Hooks",
            content: "Using hooks in functional components",
          },
        },
      },
      NodeJS: {
        name: "NodeJS",
        subTopics: {
          Introduction: {
            name: "Introduction",
            content: "An introduction to Node.js",
          },
          NPM: {
            name: "NPM",
            content: "Managing packages with NPM",
          },
          "Express.js": {
            name: "Express.js",
            content: "Creating web servers with Express.js",
          },
          "File System": {
            name: "File System",
            content: "Working with the file system in Node.js",
          },
          "Database Integration": {
            name: "Database Integration",
            content: "Connecting Node.js with databases",
          },
        },
      },
    },
  },
};
