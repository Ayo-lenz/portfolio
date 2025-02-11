export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Fintech app with Django",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "absolute right-3 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Discover and Share AI Powered Prompts",
    des: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    img: "/promptopia.png",
    iconLists: ["/next.svg", "/tail.svg", "/icons8-javascript.svg", "/icons8-mongodb.svg",],
    link: "https://prompt-base-52og.vercel.app/",
  },
  {
    id: 2,
    title: "Seamlessly Connect Your Banks and Payments",
    des: "A cutting-edge app designed to integrate multiple bank accounts and payment gateway into one streamlined platform.",
    img: "/Bankify.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shad.svg", "/dwolla.png", "/plaid-logo.png", "sentry.svg"],
    link: "https://bankify-wheat.vercel.app",
  },
  {
    id: 3,
    title: "Real-Time Document Collaboration & Feedback",
    des: "A powerful real-time document collaboration platform with seamless sharing, live editing, and instant commenting features.",
    img: "/livedocs.png",
    iconLists: ["/next.svg", "/tail.svg", "/shad.svg", "/liveblocks.svg", "/c.svg"],
    link: "https://live-docs-nu-liard.vercel.app",
  },
  {
    id: 4,
    title: "Cloned Amazon Website",
    des: "Recreated the interface for amazon store website, using basic HTML, CSS, Javascript..",
    img: "/amazon.png",
    iconLists: ["/html.svg", "/css.svg", "/icons8-javascript.svg",],
    link: 'https://ayo-lenz.github.io/Amazon_clone/',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Oluwasegun was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Oluwasegun's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Oluwasegun is the ideal partner.",
    name: "Madam Karima",
    title: "Founder, Hafrikplay",
  },
  {
    quote:
      "Working with Oluwasegun was an absolute game-changer for our business. He alongside his colleague took our rough idea and transformed it into a sleek, high user-friendly website that exceeded our expectations. Their attention to detail and problem-solving skills were truly impressive!",
    name: "Oluwatoyin Afolabi",
    title: "Founder & CEO of Imisifedara farm",
  },
  {
    quote:
      "As a tutor, I’ve had the privilege of mentoring many aspiring developers, but Oluwasegun truly stands out. His passion for web development, keen problem-solving skills set him apart. He quickly grasp complex concepts, apply best practices, and continuously strive to improve. I have no doubt he will excel in any project he take on, and I highly recommend him to anyone in need of a skilled and reliable web developer.",
    name: "Olisa Macaulay",
    title: "Founder of Skyline ICT Consult ltd",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js and Tailwind UI components enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Software Developer",
    desc: "Handled both front-end and back-end development using modern frameworks(Next.js, Django), databases, and APIs to create scalable, efficient, and user-friendly software solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Collaborate in the dev of a web app for a client, from initial concept to deployment on Hostinger.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Engineer Intern",
    desc: "Hands-on experience in developing and optimizing server-side applications, APIs, and databases.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ayo-lenz",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/James_Ayolenz?t=lCanIsCT0ArEP4lCxqL0wA&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ayolenz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];