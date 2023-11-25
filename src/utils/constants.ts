export type MenuType = {
  path: string;
  text: string;
  children?: MenuType[];
};

export const MENU: MenuType[] = [
  {
    path: "/",
    text: "Home",
    children: [
      {
        path: "/#personal-detail",
        text: "Personal Detail",
      },
      {
        path: "/#overview",
        text: "Overview",
      },
      {
        path: "/#education",
        text: "Education",
      },
      {
        path: "/#language-skill",
        text: "Language Skill",
      },
      {
        path: "/#working-history",
        text: "Working History",
      },
    ],
  },
  {
    path: "/skills",
    text: "Technical Skills",
  },
  {
    path: "/attended-projects",
    text: "Attended Projects",
  },
  {
    path: "/certs",
    text: "My Certs",
  },
  {
    path: "/examples",
    text: "Examples",
  },
];
