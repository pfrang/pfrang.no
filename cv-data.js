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
    "An experienced developer with a background in data engineering, I'm driven by a passion for innovative solutions and a strong analytical mindset. Throughout my career I've played a key role in a range of projects — from data extraction, transformation, and implementation to data visualization, quality assurance, and automation of repetitive workflows",
    "After working primarily with ETL and data from 2018-2022, I wanted to explore something new — moving to NoA Ignite marked a deliberate shift into web development and more traditional software engineering. As a full-stack consultant at SiO, I've primarily been developing new features for their website, built on Next.js, and design and structure content type schemas in the CMS. I've also been responsible for cloud architecture, databases, APIs, DevOps, CI/CD, code design, and building an internal npm package for UI components. I enjoy working across the entire stack, with particular strength in the BFF layer — building API layers, integrations, and data access that make frontend applications robust, fast, and easy to evolve. I have a strong foundation in writing code that runs on both the client and the server.",
    "I'm a productive and curious developer with several personal projects, because I believe that to truly understand something, you have to build it from scratch. I enjoy the challenge of optimizing performance and user experience across the stack. I thrive in team environments where I can share knowledge, discuss and learn from others.",
  ],
  employment: [
    {
      role: "Data Engineer",
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
            "Front-end tasks — Implement frontend components — HTML/CSS",
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
