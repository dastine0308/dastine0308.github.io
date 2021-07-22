let info = {
  name: "戴詩庭",
  logo_name: "Dastine",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "<br>能接受失敗，從中學習並調整<br><br>我個性活潑開朗，主動積極，對於事物保有好奇心，高中加入大眾傳播社，接觸攝影，從中培養我對視覺的敏感度，用影像的細膩與真實作為溝通的媒介，每次構圖前養成觀察「人」的習慣，使我更能同理鏡中人物的情緒與情境，用畫面傳達當下的感動。大學就讀資訊傳播學系，接觸前衛的電子媒介，像是3D建模、動畫、網頁前端、後端程式..等，使我能與不同領域的人溝通與合作，因著學習力與適應力強，對事情和觀點都保有彈性。 ",
  // "A second year Computer Science graduate student at Indiana University Bloomington with an interest in Software Development, UX Design and Artificial Intelligence - and seeking exciting opportunities related to the same.<br><br>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of software skills, ranging from design and development to writing scripts for intelligent agents. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/dastine/",
    github: "https://github.com/dastine0308?tab=repositories",
    issue: "https://issuu.com/christine52jesus/docs/dastine_porfolio_3",
    resume:
      "#"
    // "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "元智大學",
      place: "桃園市 中壢區",
      date: "2017/9 - 2021/6",
      degree: "學士, 資訊傳播學系",
      // gpa: "3.7/4.0",
      description: " ",
      // "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "UI/UX",
        "Human-Computer Interaction",
        "Programming",
        "Video Production",
        "3D Modeling"
      ]
    }
  ],
  experience: [
    {
      name: "富邦人壽股份有限公司",
      place: "台北市 內湖區",
      date: "2020/7 - 目前",
      position: "前端工程師實習生",
      description: "負責專案前端開發，與後端串接API、協助專案除錯及修正",
      // "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
      skills: ["HTML", "SASS(CSS)", "JQuery", "JavaScript(ES6)", "VueJS", "Git", "AJAX Api", "Typescript"]
    },
    {
      name: "元智大學資訊傳播學系實驗室 ",
      place: "桃園市 中壢區",
      date: "2018/9 - 2019/6",
      position: "計畫研究助理",
      description:
        "研究 MogoDB 資料庫及 Laravel 系統安裝測試、撰寫結案報告書、負責實驗室行政工作。",
      skills: ["HTML5", "CSS", "Git", "MongoDB", "PHP"]
    },
    {
      name: "MasterCorp",
      place: "Massachuset, USA",
      date: "2019/6 - 2019/9",
      position: "Housekeeping (J1 Work and Travel students)",
      description: "Employers of J1 Work and Travel students.Having the initiative to organise working and travel in a foreign country.  Responsible for maintaining cleanliness and appearance of guest units following MasterCorp’s standard   cleaning process. Got promted by hard-working to supervise other housekeepers.",
      // "Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.",
      // skills: [""]
    },
    {
      name: "昱強補習班-愛美語元生分校",
      place: "桃園市 中壢區",
      date: "2018/9 - 2019/5",
      position: "國中數理輔導老師(兼職)",
      description: "個別輔導學生數理相關問題、配合補習班教材講解題目、掌握班上學生學習狀況。",
      // "Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.",
      skills: ["數學", "理化"]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Javascript",
        "TypeScript",
        "PHP",
        "C++",
        "C#",
        "Java",
      ],
      icon: "fa fa-code"
    },
    {
      title: "web technologies",
      info: ["VueJs", "HTML", "SCSS(CSS)"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "design",
      info: ["Illustrator", "Photoshop", "XD", "Premiere", "Maya"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "元智大學資訊傳播學系畢業展覽 - 此刻變態",
      pictures: [
        {
          img: require("./src/assets/portfolio/gew/devices2.jpg")
        },
        {
          img: require("./src/assets/portfolio/gew/site-map.png")
        },
      ],
      technologies: ["SCSS", "JavaScript", "VueJs"],
      category: "Front-end development",
      date: "2021/4 - 2021/6",
      client: "元智大學資訊傳播學系 畢業策展團隊",
      role: "前端開發者",
      team: "4 位成員",
      github:
        "https://github.com/dastine0308/yzuic-exhibition-web",
      visit: "http://befrenetic.infocom.yzu.edu.tw/?fbclid=IwAR3YWtO2ckQ1nkFbfjpJ5zZwf66AqIMDt9bKcXx2erc2uGk_nR2q_Zqecbs#/",
      description:
        ""
    },
    {
      name: "期許測試工具 微軟產品反應卡",
      pictures: [
        {
          img: require("./src/assets/portfolio/mrc/mrc1.jpg")
        },
        //       {
        //         img: require("./src/assets/portfolio/mrc/mrc.jpg")
        //       },
      ],
      technologies: ["SCSS", "jQuery", "JavaScript", "VueJs"],
      category: "Front-end development",
      date: "2020/10 - 2020/12",
      client: "用戶體驗研究團隊",
      role: "前端開發者",
      team: "3 位成員",
      github:
        "https://github.com/dastine0308/uxtools_reactionCards",
      visit: "https://dastine0308.github.io/uxtools_reactionCards/",

      description:
        "與UI設計師合作，開發網頁版，便於受試者在行動裝置上進行，解決原先紙本索引卡的費工與不便利性。<br>微軟產品反應卡是由微軟公司研發用來做「合宜性」測試的工具，可以引導使用者表達並解釋他們對某設計的感覺，適合在產品的原型階段使用，作為未來改版的基準。"

    },
    {
      name: "Open Query 智能探索平台 🔒",
      pictures: [
        {
          img: require("./src/assets/portfolio/opq/ui.jpg")
        },
        {
          img: require("./src/assets/portfolio/opq/site-map.png")
        },
      ],
      technologies: ["jQuery", "SCSS/CSS", "JavaSript"],
      category: "Front-end development",
      date: "2020/8 - 目前",
      client: "",
      role: "前端開發者",
      team: "6 位成員",
      github:
        "https://github.com/dastine0308/yzuic-exhibition-web",
      visit: "http://befrenetic.infocom.yzu.edu.tw/?fbclid=IwAR3YWtO2ckQ1nkFbfjpJ5zZwf66AqIMDt9bKcXx2erc2uGk_nR2q_Zqecbs#/",
      description:
        ""
    },
    {
      name: "AML 審查作業平台 🔒",
      pictures: [
        {
          img: require("./src/assets/portfolio/opq/ui.jpg")
        },
        {
          img: require("./src/assets/portfolio/opq/site-map.png")
        },
      ],
      technologies: ["JavaSript", "TypeScript", "VueJs"],
      category: "Front-end development",
      date: "2021/3 - 目前",
      client: "保單行政處",
      role: "前端開發者",
      team: "6 位成員",
      github:
        "",
      visit: "",
      description:
        "以 Ant design Vue 為風格設計規範。<br>建置各系統共用之AML審查作業平台，進行交易件/Renew件/疑似洗錢或資恐交易態樣案件之AML審查作業，並留下審查紀錄，及將審查文件歸入FMS系統。"
    },
  ],
  portfolio_design: [
    {
      name: "Uber eats 外送員專用APP",
      pictures: [
        {
          img: require("./src/assets/portfolio/uea/devices.jpg")
        },
      ],
      technologies: ["Adobe XD"],
      category: "UI/UX Case Study",
      date: "2020/3 - 2020/6",
      client: "Uber eats 外送員",
      role: "用戶體驗研究員",
      team: "5 位成員",
      github:
        "https://github.com/dastine0308/yzuic-exhibition-web",
      visit: "http://befrenetic.infocom.yzu.edu.tw/?fbclid=IwAR3YWtO2ckQ1nkFbfjpJ5zZwf66AqIMDt9bKcXx2erc2uGk_nR2q_Zqecbs#/",
      description:
        ""
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  honor: [
    {
      title: "跨領域類 跨領域組 銅獎",
      description: "",
      organizer: "放視大賞(Vision Get Wild, VGW)",
      date: "2021/5",
      location: "高雄市",
    },
    {
      title: "創意APP實作競賽活動 人氣獎",
      description: "",
      organizer: "元智大學",
      date: "2019/5",
      location: "桃園市",
    },
    {
      title: "有庠獎學金",
      description: "",
      organizer: "元智大學",
      date: "2018/5",
      location: "桃園市",
    }

  ],
  // recommendations: [
  //   {
  //     title:
  //       "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Ushanas Shastri",
  //     position: "CTO",
  //     company: "Viteos Capital Market Services",
  //     location: "Mumbai"
  //   },
  // ]
};

export default info;
