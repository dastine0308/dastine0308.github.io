let info = {
  name: "戴詩庭",
  logo_name: "Dastine",
  flat_picture: require("./src/assets/potrait.jpg"),
  award_picture: require("./src/assets/award.png"),
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
    resume: "https://drive.google.com/file/d/1aetRxzsVg5J4MD1SnK0kblUNPTqvCzLm/view?usp=sharing"
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
      description: "負責專案前端開發，與後端串接API、協助專案除錯及修正。",
      // "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
      skills: ["HTML", "SASS(CSS)", "jQuery", "JavaScript(ES6)", "Vue.js", "Git", "AJAX Api", "Typescript"]
    },
    {
      name: "MasterCorp",
      place: "Massachuset, USA",
      date: "2019/6 - 2019/9",
      position: "Hotel (J1 Work and Travel students)",
      description: "Employers of J1 Work&Travel students. Self-initiated and applied for this 3-month Work&Travel summer scheme in US MA. Responsible for managing units under MasterCorp’s standard and got promoted as supervisor.",
      // "Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.",
      // skills: [""]
    },
    {
      name: "元智大學資訊傳播學系實驗室 ",
      place: "桃園市 中壢區",
      date: "2018/9 - 2019/6",
      position: "計畫研究助理",
      description:
        "研究 MogoDB 資料庫及 Laravel 系統安裝測試、撰寫結案報告書。",
      skills: ["HTML5", "CSS", "Git", "MongoDB", "PHP"]
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
        "JavaScript",
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
      info: ["Vue.js", "HTML", "SCSS(CSS)"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "design",
      info: ["Illustrator", "Adobe XD", "Premiere", "Maya"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "線上畢業展覽 - 此刻變態",
      pictures: [
        {
          id: "gew1",
          img: require("./src/assets/portfolio/gew/devices2.jpg")
        },
      ],
      technologies: ["SCSS", "JavaScript", "Vue.js"],
      category: "Front-end development",
      date: "2021/4 - 2021/6",
      client: "元智大學資訊傳播學系 畢業策展團隊",
      role: "前端開發者",
      team: "4 位成員",
      github:
        "https://github.com/dastine0308/yzuic-exhibition-web",
      visit: "http://befrenetic.infocom.yzu.edu.tw/?fbclid=IwAR3YWtO2ckQ1nkFbfjpJ5zZwf66AqIMDt9bKcXx2erc2uGk_nR2q_Zqecbs#/",
      description:
        "此為元智大學資訊傳播學系 24 屆畢業展覽網站，包含策展理念、策展團隊與各組畢業製作的介紹。負責 UI 切版，並在移動裝置上具有響應性。",
      content: [
        {
          subtitle: "內容架構",
          description: "",
          pictures: [
            {
              id: "gew2",
              title: "Sitemap",
              img: require("./src/assets/portfolio/gew/site-map.png"),
              alt: "註：粉色框線的區域為參與開發的頁面。",
            },
          ]
        },
      ],
    },
    {
      name: "Open Query 智能探索平台 🔒",
      lock: true,
      pictures: [
        {
          id: "opq1",
          img: require("./src/assets/portfolio/opq/ui.png")
        },
      ],
      technologies: ["jQuery", "SCSS/CSS", "JavaSript"],
      category: "Front-end development",
      date: "2020/8 - 目前",
      client: "",
      role: "前端開發者",
      team: "6 位成員",
      description:
        "進行後台 UI 切版，因後期要交由後端維護，故用 jQuery 進行主要開發。負責開發「權限管理」與「空間管理」頁面。",
      content: [
        {
          subtitle: "內容架構",
          description: "",
          pictures: [
            {
              id: "opq2",
              title: "Sitemap",
              img: require("./src/assets/portfolio/opq/site-map.png"),
              alt: "註：橘色框線的區域為參與開發的頁面。",
            },
          ]
        },
        {
          subtitle: "開發頁面",
          description: "",
          pictures: [
            {
              id: "opq3",
              title: "權限管理",
              img: require("./src/assets/portfolio/opq/authority.png"),
            },
            {
              id: "opq4",
              title: "空間管理 - 新增空間",
              img: require("./src/assets/portfolio/opq/add-space.png"),
            },
            {
              id: "opq5",
              title: "空間管理 - 依 Active Query 資源 - 新增資源",
              img: require("./src/assets/portfolio/opq/add-res.png"),
            },
          ]
        },
      ],
    },
    {
      name: "保單資料函覆系統 🔒",
      lock: true,
      pictures: [
        {
          id: "prs1",
          img: require("./src/assets/portfolio/prs/collapse.png")
        }
      ],
      technologies: ["JavaSript", "TypeScript", "Vue.js"],
      category: "Front-end development",
      date: "2021/3 - 目前",
      client: "保單行政處",
      role: "前端開發者",
      team: "10 位成員",
      github: "",
      visit: "",
      description:
        "進行後台 UI 切版與功能串接，主要使用 Vue 搭配 Ant design Vue UI 套件進行主要開發。負責開發查詢作業、知會欄位檢視群組與人員設定頁面。",
      content: [
        {
          subtitle: "內容架構",
          description: "查詢作業：查詢案件明細、處理進度、歷史紀錄<br>知會欄位檢視群組：將總表各項欄位群組化，知會時，依人員對應的欄位群組權限，提供欄位檢視<br>人員設定：設定人員對應的角色、啟用、停用",
          pictures: [
            {
              id: "prs2",
              title: "Sitemap",
              img: require("./src/assets/portfolio/prs/site-map.png"),
              alt: "註：綠色框線的區域為參與開發的頁面及功能。",
            },
          ]
        },
        {
          subtitle: "開發頁面",
          description: "",
          pictures: [
            {
              id: "prs3",
              title: "查詢作業",
              img: require("./src/assets/portfolio/prs/search.png")
            },
            {
              id: "prs4",
              title: "知會欄位檢視群組 ( 檢核錯誤提示 )",
              img: require("./src/assets/portfolio/prs/group-add-error.png")
            },
            {
              id: "prs5",
              title: "人員設定 ( 檢核錯誤提示 )",
              img: require("./src/assets/portfolio/prs/account-add-error.png")
            },
          ]
        },
      ],

    },
    {
      name: "AML 審查作業平台 🔒",
      lock: true,
      pictures: [
        {
          id: "aml1",
          img: require("./src/assets/portfolio/AML/no-data.png")
        },
      ],
      technologies: ["JavaSript", "TypeScript", "Vue.js"],
      category: "Front-end development",
      date: "2021/6 - 目前",
      client: "保單行政處",
      role: "前端開發者(協助)",
      team: "10 位成員",
      github: "",
      visit: "",
      description:
        "建置各系統共用之AML審查作業平台，進行交易件/Renew件/疑似洗錢或資恐交易態樣案件之AML審查作業，並留下審查紀錄，及將審查文件歸入FMS系統。<br>進行後台 UI 切版與功能串接，主要使用 Vue 搭配 Ant design Vue UI 套件進行主要開發。協助開發新增AML審查案件頁面。",
      content: [
        {
          subtitle: "開發頁面",
          description: "",
          pictures: [
            {
              id: "aml2",
              title: "新增 AML 審查案件",
              img: require("./src/assets/portfolio/AML/pg.png")
            },
            {
              id: "aml3",
              title: "新增 AML 審查案件 ( 查詢結果 )",
              img: require("./src/assets/portfolio/AML/collapse.png")
            },
            {
              id: "aml4",
              title: "新增 AML 審查案件 - 覆核彈窗",
              img: require("./src/assets/portfolio/AML/text-area.png")
            },
          ]
        },
      ],
    },
    {
      name: "期許測試工具 微軟產品反應卡",
      pictures: [
        {
          id: "mrc1",
          img: require("./src/assets/portfolio/mrc/mrc1.jpg")
        },
      ],
      technologies: ["SCSS", "jQuery", "JavaScript", "Vue.js"],
      category: "Front-end development",
      date: "2020/10 - 2020/12",
      client: "用戶體驗研究團隊",
      role: "前端開發者",
      team: "3 位成員",
      github:
        "https://github.com/dastine0308/uxtools_reactionCards",
      visit: "https://dastine0308.github.io/uxtools_reactionCards/",
      description:
        "微軟產品反應卡是由微軟公司研發用來做「合宜性」測試的工具，可以引導使用者表達並解釋他們對某設計的感覺，適合在產品的原型階段使用，作為未來改版的基準。<br>與 UI 設計師合作，開發網頁版，便於受試者在行動裝置上進行，解決原先紙本索引卡的費工與不便利性。",
      content: [
        {
          subtitle: "用戶使用情境",
          description: "",
          pictures: [
            {
              id: "mrc2",
              title: "RWD 響應式",
              img: require("./src/assets/portfolio/mrc/mrc.jpg")
            },
          ]
        },
      ],
    },
  ],
  portfolio_design: [
    {
      name: "Redesign - Uber Eats 外送員專用 App",
      pictures: [
        {
          id: "uea1",
          img: require("./src/assets/portfolio/uea/devices.jpg")
        },
      ],
      technologies: ["Adobe XD"],
      category: "UI/UX Case Study",
      date: "2020/3 - 2020/6",
      client: "Uber eats 外送員",
      role: "用戶體驗研究員",
      team: "5 位成員",
      visit: "https://xd.adobe.com/view/c259daaa-0733-4f87-7f70-ab35a8ae41b4-b468/?fullscreen&hints=off",
      description: "進行 UI/UX 的設計流程，分析潛在客群的使用習慣，重新設計 Uber Eats 外送員專用的應用程式。",
      content: [
        {
          subtitle: "理解與構思",
          description: "依照同理心地圖的觀察，找出痛點並在問題上創造四個機會點 - 寵物孵蛋系統、送餐時結合論壇功能便於分享小路、增加寵物系統打發等待的時間、顯示區域內的接單量便於外送員知道單較多的地點。最後，創建用戶角色 - 阿軒，他代表整個發現階段。在設計過程中回顧他，有助於與用戶目標保持一致，及提醒需要為用戶解決的問題。",
          pictures: [
            {
              id: "uea2",
              title: "同理心地圖",
              img: require("./src/assets/portfolio/uea/empathyMap.png")
            },
            {
              id: "uea3",
              title: "Persona",
              img: require("./src/assets/portfolio/uea/persona.png")
            },
          ]
        },
        {
          subtitle: "設計過程",
          description: "基於新的聚焦，開始繪製顧客旅程地圖、系統的用戶流程圖和線框稿。確認每一個頁面的構成，進行頁面結構、功能與內容規劃。",
          pictures: [
            {
              id: "uea4",
              title: "顧客旅程地圖",
              img: require("./src/assets/portfolio/uea/UJM.png")
            },
            {
              id: "uea5",
              title: "用戶流程圖",
              img: require("./src/assets/portfolio/uea/flow.png")
            },
            {
              id: "uea6",
              title: "線框稿",
              img: require("./src/assets/portfolio/uea/wireframe.png")
            },
          ]
        },
        {
          subtitle: "最終設計",
          description: "專注於品牌屬性 - 年輕、科技、友善、速度，製作視覺風格。考量到使用者需要在黑夜裡長時間使用，故使用黑色為主色，使用戶不會感到刺眼、以 Uber eats 原有主色 - 綠色為輔色，連結與 Uber eats 的關係，符合用戶經驗、搭配有科技意象的霓虹漸層色。LOGO文字使用斜體強調速度感、內文字則使用黑體，易讀性較高也使畫面較為整齊。",
          pictures: [
            {
              id: "uea7",
              title: "情緒版",
              img: require("./src/assets/portfolio/uea/emotion.png")
            },
            {
              id: "uea8",
              title: "風格樣式設計",
              img: require("./src/assets/portfolio/uea/uiKit.png")
            },
            {
              id: "uea9",
              title: "Mockup",
              img: require("./src/assets/portfolio/uea/mockup.png")
            },
          ]
        }
      ],
    },
    {
      name: "畢業製作 - 未來簡單市",
      pictures: [
        {
          id: "fc1",
          img: require("./src/assets/portfolio/fc/poster.jpg")
        },
      ],
      technologies: ["Maya", "Unity 3D", "MadMapper"],
      category: "Experience Design",
      date: "2020/7 - 2021/5",
      client: "中壢市 中平商圈店家",
      role: "田野調查、投影對位、3D 動畫製作",
      team: "6 位成員",
      video: "https://www.youtube.com/watch?v=Y3A1L1r85e4&t=1s",
      book: "https://issuu.com/yoyo880325/docs/0504___-__",
      description:
        "未來簡單市是一項基於賦予街道其他可能性為前提的互動設計，以學校附近的商圈 - 中平商圈作為範例，提供安於街道現況的人們其他種街景風貌，並以整理成冊的《簡單公式》給予希望做出改變卻又不知從何下手的市井小民較有方向性的設計建議。搭配近年來膾炙人口的投影技術，使觀者更有身歷其境的感受、讓理念傳達不侷限於平面螢幕的框架。",
      content: [
        {
          subtitle: "問題陳述",
          description: "中平商圈不少店家招牌年久失修，整條街道帶給人較為老舊的感受。多數店家招牌數量超過單個，部分商家的招牌雖有數個，但是風格卻大相逕庭，一眼望去甚至無法立刻發覺是同一家店的招牌;或是店家經重新裝修後，招牌卻沒有一併更新，導致店家風格和招牌風格迥異，反之亦然。除此之外，也觀察到街上有些招牌已被拆除，但是骨架卻沒有移除，造成視覺上的不美觀及用路人的道路安全問題。變電箱被隨意塗鴉，讓市容更加雜亂、變電箱的周圍時常擺放店家物品或是停放汽機車，頗有道路安全之疑慮。",
          pictures: [
            {
              id: "fc2",
              title: "同理心地圖",
              img: require("./src/assets/portfolio/fc/empathyMap.png")
            },
          ]
        },
        {
          subtitle: "設計目標",
          description: "招牌是人們造訪街道的第一印象，也是在地生活的文化體現。先以投影的方式讓周圍的居民預覽街道另一種可能性，再往實做的方向執行，較能夠讓人們預先接受改變帶來的未知造成的不安感，能夠省去較多的社會成本。期盼在這樣的理念下，民眾能夠一同為提升社會整體的美感素質做出配合及努力，以此凝聚社區民眾對在地文化的認同感。想傳達的美學理念經過視覺化後更加吸睛，有別於教育的姿態訴諸想法，本作品更傾向於「享受視覺饗宴的同時，去理解背後的意義」，讓理念的傳達與吸收更加輕鬆有趣。",
        },
        {
          subtitle: "設計過程",
          description: "美化環境不能只是單純地將物件「美化」，還要考量當地的文化和歷史背景。因此，在著手美化街道前，需要一系列的環境調查，包括「環境色彩調查」、「街道色彩構成」以及「材質探索」，整理出當地區域現況、店家屬性...等資料。法律是最低限度需要遵守的規範，守法是改造事物的最基本前提。在做出設計前，整理了桃園市街道家具(註)及道路、廣告物等等的相關法律規範，最後，找出當地獨有的 DNA，將其元素融入設計中。",
          pictures: [
            {
              id: "fc3",
              title: "《簡單公式》手冊架構",
              img: require("./src/assets/portfolio/fc/circle.png")
            },
            {
              id: "fc4",
              title: "投影內容製作流程",
              img: require("./src/assets/portfolio/fc/ConceptMap.png")
            },
          ]
        },
        {
          subtitle: "最終設計",
          description: "本作品以四面投影的方式，營造出「幻境成真」的沉浸式體驗。投影內容用以傳達設計理念，由 3D 街道場景開場，透過光影變化帶出氛圍，接著銜接 2D 特效動畫，多使用幾何圖形傳達我們的設計脈絡——分類、減去、變化、融合，並且在影片最後回到招牌美化過後的 3D 街道，希望能帶給觀賞者富含視覺饗宴的沉浸式體驗。同時，並製作「簡單公式」手冊，內容包含桃園市相關道路法規、各民間設計團體之美學理論...等各方資料，以及本團隊研究結果，給予一般較無美學概念的民眾一些街道美學的建議，例如招牌色彩、尺寸、擺放位置等等，內容相對基本及易懂。",
          pictures: [
            {
              id: "fc5",
              title: "展場佈置規劃",
              img: require("./src/assets/portfolio/fc/hole.png")
            },
            {
              id: "fc6",
              title: "《簡單公式》實體手冊",
              img: require("./src/assets/portfolio/fc/bookwhite.jpg")
            },
            {
              id: "fc7",
              title: "校內展側拍",
              img: require("./src/assets/portfolio/fc/people.png")
            },
            {
              id: "fc8",
              title: "展場實體照",
              img: require("./src/assets/portfolio/fc/lakaja.jpg")
            },
          ]
        }
      ],
    },
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
