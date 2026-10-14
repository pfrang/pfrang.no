const CV_DATA = {
  name: "Peder Frang",
  title: "Full-Stack Developer",
  photo: "pic.jpeg",
  contact: {
    address: "Oslo, Norway",
    phone: "47309173",
    email: "peder.frang@gmail.com",
    dateOfBirth: "04/15/1994",
    nationality: "Norwegian",
  },
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/peder-frang-608798155",
    },
    { label: "GitHub", url: "https://github.com/pfrang" },
  ],
  skills: {
    Languages: ["JavaScript", "Typescript", "Python", "SQL", "Ruby", "C", "Go"],
    "Frameworks & Libraries": [
      "GraphQL",
      "Next.js",
      "React",
      "SvelteKit",
      "Astro",
    ],
    Cloud: ["Microsoft Azure", "AWS", "GCP", "Vercel", "Databricks", "Railway"],
    DB: ["ORMs", "MySQL", "PostgreSQL", "MongoDB"],
    CMS: ["Contentful", "Sanity", "Enonic"],
    "DevOps & Data": [
      "Docker",
      "Git",
      "GitHub",
      "DevOps",
      "CI/CD",
      "ETL",
      "Microsoft Power BI",
    ],
    Methodologies: ["Scrum"],
  },
  profile: [
    "Full-stack developer at NoA Ignite with a background in data engineering. I like working on new and innovative solutions, and I enjoy being part of the whole stack, because I like following a feature from end to end, all the way from the database to the end user. I especially like optimizing, whether that's a slow query, a bottleneck in the infrastructure or a slow page load.",
    "Since 2022 I've been a consultant for SiO, where I build new features for their Next.js website, set up the content models in the CMS, and work on the cloud setup, databases, APIs and CI/CD pipelines. My main focus has been designing and implementing the APIs and integrations between the frontend and the backend. I also built an internal npm package for their UI components. Before that I spent four years working with data at EY and Avanade, building ETL pipelines, reports and automating repetitive tasks.",
    "Outside of work I usually have a side project going, because building something from scratch is the best way for me to learn. I've also studied on the side while working full time: first a web development bootcamp, and later a year at the University of Oslo, taking one course each semester on operating systems, networking and computer architecture. I learn a lot from the people around me too, so I work best in teams where people share what they know and aren't afraid to discuss different solutions.",
  ],
  employment: [
    {
      role: "Developer",
      company: "NoA Ignite",
      location: "Oslo",
      period: "March 2022 — Present",
      description: null,
      highlights: [
        {
          project:
            "External client project — Full stack developer — New SiO.no",
          bullets: [
            "Develop new features for the SiO website and model content types within the CMS.",
            "Back-end tasks — retrieving data, setting up Next API endpoints and DTO mapping",
            "Front-end tasks — Implement frontend components — React/HTML/CSS",
            "CI/CD and DevOps — setting up pipelines in Azure DevOps",
            "Help SiO setup an npm account and build & publish an internal package for UI components",
          ],
        },
      ],
    },
    {
      role: "Data Engineer",
      company: "Avanade",
      location: "Oslo",
      period: "August 2021 — February 2022",
      description: null,
      highlights: [
        {
          project:
            "External client project — Azure Databricks and Power BI developer at Equinor",
          bullets: [
            "Fully responsible for maintaining a Power BI Application containing multiple reports",
            "Also part of the back-end team — extracting data from SAP, transforming it in Databricks, and loading it into Power BI",
            "Improving the data model and optimizing the Reports",
          ],
        },
      ],
    },
    {
      role: "Senior Data Analyst",
      company: "EY",
      location: "Oslo",
      period: "August 2018 — August 2021",
      description:
        "My role in EY was to digitize internal audit practices and be a contributor to an implementation of a 'data-first' approach. I held multiple presentations in data quality, and arranged an advanced excel course for around 50 auditors.",
      highlights: [
        {
          project: null,
          bullets: [
            "Project Leader and architect for an RPA project — fully automating the import process to an analysis tool in Excel. The Robot/application was built in Python and project management in Azure DevOps. The project followed a SCRUM methodology.",
            "Developed a customized EY global analysis tool for Norwegian standards which required complex data modeling with direct SQL queries to the Database. The queries varied depending on the ERP system at the client.",
            "Developer and tester for an innovation project where the goal was to receive all related parties based on a provided organizational number. Prototype was built in Flickr and the programming was done in Python.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree:
        "Introduction to operating systems and data communication & Introduction to Computer Technology",
      institution: "University of Oslo",
      period: "August 2024 — June 2025",
    },
    {
      degree: "LeWagon Web Development Bootcamp",
      institution: "Online",
      period: "October 2021 — March 2022",
    },
    {
      degree: "M.Sc",
      institution: "NHH, Bergen",
      period: "August 2016 — June 2018",
    },
    {
      degree: "Bachelor of Business Administration",
      institution: "BI, Bergen",
      period: "August 2013 — June 2016",
    },
  ],
};
