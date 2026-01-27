// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-outreach",
          title: "outreach",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "projects-1918-bundaberg",
          title: '1918 Bundaberg',
          description: "Macroseismic and seismological review of the 6 June 1918 Bundaberg earthquake in Queensland, Australia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-1860-haiti",
          title: '1860 Haiti',
          description: "Macroseismic reanalysis of the three Jour de Pâques earthquakes on 8-9 April 1860 in southern Haiti",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-1907-sumatra",
          title: '1907 Sumatra',
          description: "Upgrading the magnitude of the 4 January 1907 tsunami earthquake in Indonesia and the Indian Ocean",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-1922-malaysia",
          title: '1922 Malaysia',
          description: "Magnitudes and location estimates for two rare earthquakes in Malaysia and Singapore in Jan-Feb 1922.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-1954-adelaide",
          title: '1954 Adelaide',
          description: "Revision of the location of the 1 March 1954 Adelaide earthquake in South Australia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-1895-charleston",
          title: '1895 Charleston',
          description: "Determining the true size of the 31 OCctober 1895 Charleston, Missouri, earthquake in the United States",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
