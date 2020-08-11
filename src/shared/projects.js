export const PROJECTS = 
    [
        {
            id: 0,
            name: "Democratic Lunch",
            description: "Website for polling desired lunch options of the day. Simple interface in Angular with RESTful API in Nodejs.",
            date: "September 2020",
            photos: ["/assets/images/democraticLunch.png"],
            longDescription: "Website for managing a poll of lunch options. Each day a new poll is created and users can make their votes either by choosing already entered restaurants or adding their own suggestions. Suggestions from restaurants already chosen in the same week are not accepted. Users can change their vote by selecting a new option. All vote validations are performed in the Nodejs backend, which also handles user authentication using JSON Web Tokens.",
            tags: ["Typescript", "Angular", "Angular Material", "Nodejs", "MongoDB", "Unit Testing"],
            link: "https://github.com/marinaFrey/DemocraticLunch",
            type: "home"
        },
        {
            id: 1,
            name: "Curriculum Vitae",
            description: "Development of this website. Used React with Reactstrap (Bootstrap library for React).",
            date: "August 2020",
            photos: [],
            longDescription: "This website was developed using React with Reactstrap as the honors assignment of the Front-End Web Development with React course. The site follows a very simple structure, showing work experience, education degrees and software development projects using the react-vertical-timeline-component library, which allows the easy development of an animated timeline. All information is loaded from JSON objects that can be easily updated or modified to showcase another person's CV.",
            tags: ["Typescript", "React", "Bootstrap", "CSS"],
            link: "https://github.com/marinaFrey/CV",
            type: "home"
        },
        {
            id: 2,
            name: "LINDA-Brasil Visualization Interface",
            description: "Development and design of a web interface and visualizations to assist the clinical trial Lifestyle INtervention for Diabetes prevention After pregnancy (LINDA). The interface was developed using Javascript, HTML, Angular, Bootstrap, D3, PHP, PostgreSQL and Docker.",
            date: "2017 - 2019",
            photos: ["/assets/images/linda/overview.png", "/assets/images/linda/queststatuscompleteness.png", "/assets/images/linda/filters.png", "/assets/images/linda/varmatrix.png"],
            longDescription: "This work presented a visualization-based interface designed for monitoring the development of a randomized clinical trial focused on the effects of lifestyle intervention in the development of Type 2 Diabetes for patients with Gestational Diabetes Mellitus. A list of requirements gathered from epidemiologists directly working within the trial was analysed, and we designed an intuitive interface for easier assessment of the information stored while also allowing for a deeper analysis of similarities between subjects. Visualization techniques were created to allow following a participant's progress and compare it to others. The resulting tool integrates a number of features inspired in previous works in a single interface, creating a hybrid approach for the discovery of similarities and trends between groups of participants and detailed visualizations of individuals.",
            tags: ["Typescript", "Angular", "D3", "Bootstrap", "SQL", "HTML", "CSS", "jQuery", "PHP"],
            link: null,
            type: "job"
        },
        {
            id: 3,
            name: "Reyceitas",
            description: "Website for family recipes. The interface was developed using Typescript, HTML, Angular, Bootstrap, PHP and SQL.",
            date: "2018",
            photos: ["/assets/images/reyceitas/reyceitas1.png", "/assets/images/reyceitas/reyceitas2.png", "/assets/images/reyceitas/reyceitas3.png", "/assets/images/reyceitas/reyceitas4.png", "/assets/images/reyceitas/reyceitas5.png"],
            longDescription: "Creation of website for storing and displaying recipes based on user authentication. Administrators can create and manage group of users that have different authentication levels and can be individually assigned to different recipes. Recipes contain a list of ingredients and preparation methods as well as information on difficulty, time and number of servings. The number of servings can be altered, updating quantities of each ingredient accordingly. Each recipe is associated with a number of tags that can be used to organize recipes into categories.",
            tags: ["Typescript", "Angular", "Bootstrap", "SQL", "HTML", "CSS", "PHP"],
            link: "https://github.com/marinaFrey/reyceitas",
            type: "home"
        },
        {
            id: 4,
            name: "Taxonomy Browser",
            description: "Development and design of a visualization-based interface for TaxonomyBrowser, a biodiversity information system developed to assist biologists in the management of specimen data. The application has been programmed using Javascript, HTML, D3 and MySQL.",
            date: "2015 - 2016",
            photos: ["/assets/images/taxonomybrowser/overview.png", "/assets/images/taxonomybrowser/sunburst_c_selection.png", "/assets/images/taxonomybrowser/mapa.png", "/assets/images/taxonomybrowser/paralcoord.png", "/assets/images/taxonomybrowser/specimen_popup.png", "/assets/images/taxonomybrowser/characteristics.png", "/assets/images/taxonomybrowser/filters.png"],
            longDescription: "This work presents a new interface for the TaxonomyBrowser relational database based on Shneiderman's Visual Information Seeking Mantra: overview first, zoom and filter, then details on demand. A Sunburst visualization is implemented for displaying an overview of the taxonomy tree and for managing the database information, such as its taxa and recorded specimens. The user's selected or filtered information can be viewed on different visualizations, besides being displayed as small circles, for a better understanding of the size and characteristics of the set of filtered specimens.Displayed items are only available after checking the access privilege of the users, depending on information such as their account's category and which research groups they participate. This encourages users to record their collections, since access to their data will be properly managed. The interface was validated via a remote survey based on a questionnaire, which yielded promising results, specially considering that most participants were unfamiliar with the tool and had no external assistance. The preliminary results demonstrate that even users without any experience with biological databases could use and obtain results from the tool.",
            tags: ["Javascript", "D3", "Bootstrap", "SQL", "HTML", "CSS", "jQuery", "PHP"],
            link: "https://github.com/marinaFrey/TaxonomyBrowser",
            type: "job"
        },
        {
            id: 5,
            name: "DiaBR",
            description: "Interface modules for the geochemical modelling of diagenetic processes. Development and design of user interfaces using C++ with Qt Framework. Modelling, implementing and managing of SQL database.",
            date: "2013 - 2015, 2019 - 2020",
            photos: [],
            longDescription: "University research project in partnership with Petrobras developing interface modules for the geochemical modelling of diagenetic processes. Development and design of user interfaces using C++ with Qt Framework. Modelling, implementing and managing of SQL database.",
            tags: ["C++", "Qt", "SQL", "SCRUM", "UML", "Unit Testing"],
            link: null,
            type: "job"
        }
    ]