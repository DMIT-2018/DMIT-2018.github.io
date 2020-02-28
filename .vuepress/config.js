module.exports = {
  title: 'DMIT-2018 Student Notes',
  description: 'Intermediate Application Development',
  extendMarkdown(md) {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-mermaid').default) // leave default options
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-kbd'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
    }
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Notes', link: '/topics/' },
      { text: 'Demos', link: '/demos/' },
      // { text: 'Lab Specs', link: 'https://DMIT-2018.github.io/LabSpecs' },
      { text: 'MS SQL 2017', link: 'https://dmit-2018.github.io/about/slides-installing-sql-server.html' },
      { text: 'Take Home', link: '/exercises/'},
      { text: 'Issues/Bugs', link: 'https://github.com/DMIT-2018/DMIT-2018.github.io/issues/new' },
      { text: 'Moodle', link: 'https://moodle.nait.ca' },
    ],
    sidebar: {
      '/about/': [
        '',
        'LOGs',
        'resources',
        'bootstrapInVS2013',
        [ 'https://github.com/DMIT-2018/DMIT-2018.github.io/commits/dev', 'Change Log'],
        'troubleshoot'
      ],
      '/exercises/' :[
        '',
        'WorkSchedule/EntityFramework/',
//        'dvcs',
        // page w. link to conflict resolution github repo
//        'ef',
        'WorkSchedule/Linq/',
        'WorkSchedule/Integrated/',
//        'planning',
//        'oltp'
      ],

      '/topics/': [
        '',
        'dvcs/',
        'dvcs/gh4w',
        'dvcs/conflicts/',
        'xml/',
        'sitemaps/',
        'linq/',
        'linq/lambda',
        'entityFramework/',
        'ux/',
        'cqrs/',
        'aspNet/databound/',
        'aspNet/databound/gridviewOverview',
        'aspNet/databound/gridviewCustomization',
        'aspNet/databound/detailsviewOverview',
        'aspNet/databound/listviewOverview',
        'aspNet/databound/repeaterOverview',
        'aspNet/assortedWebForms',
        'aspNet/userControls',
        'aspNet/errorHandling',
        'aspNet/advancedErrorHandling',
        'reports/ssdt',
        // { text: 'Reporting Overview', link: '' },
        // { text: 'Reporting Basics - Linq-crafted data', link: '' },
        // { text: 'Reporting Basics - Report Wizard & Viewer', link: '' },
        // { text: 'Reports - Customize Reports', link: '' },
        // { text: 'Reports - Summary Reports', link: '' },
        'security/',
        // { text: 'Security - Users, Roles, Folder Access', link: '' },
        'security/aspNetIdentity',
        // { text: 'Security - OAuth/OpenID', link: '' },
        // { text: 'Transactions - OLTP Overview (T)', link: '' },
        // { text: 'UX - Designing for Command in CQRS', link: '' },
        // { text: 'UX - Principles of User Interaction', link: '' },
        'ux/workflows/'
        // { text: 'Website Deployment', link: '' },
        // { text: 'Database Deployment', link: '' },
        // { text: 'Writing a Maintenance Plan', link: '' }
      ],

      // '/demos/': [
      //   '',
      //   'eRestaurant/',
      //   'Northwind/',
      //   'Chinook/'
      // ],

      '/demos/Chinook/': [
        '',
        'entityDemo',
        ''
      ],

      '/demos/Northwind/': [
        '',
        'linq/LinqPad/expressions',
        'linq/LinqPad/statements',
        'linq/LinqPad/program',
        'CustomerOrders/',
        'CustomerOrders/Design',
        'Security/'
      ],

      '/demos/eRestaurant/': [
        '',
        'about/',
        'dvcs/demo',
        'sitemaps/demo2',


        // 'sitemaps/practice',


        'linq/',
        'linq/extensions',
        'linq/practice',

        'entityFramework/demo/demo',
        'entityFramework/practice/practice',
        'entityFramework/practice/practice-solution',



        'aspNet/frontDesk/adminController',
        'aspNet/frontDesk/adminSpecialEvents',
        'aspNet/frontDesk/menu',



        // { text: 'LinqPad and our Class Library', link: '', tooltip: 'Using LinqPad with the eRestaurant class library' },



        'reports/reportViewer/',
        'reports/customizing/',




        // { text: 'eRestaurant - Front Desk', link: '', tooltip: 'Designing eRestaurant - User eXperience (UX)' },
        // 'future',



        'aspNet/userControls/messageUserControl',
        'testing/manual',
        'linq/frontDesk/reservations',
        'aspNet/frontDesk/reservations',
        'linq/frontDesk/occupiedTables',
        'aspNet/frontDesk/occupiedTables',
        'aspNet/frontDesk/bootstrapStyle',
        'businessRules/businessRuleException',
        'businessRules/frontDesk/seatingWalkIns',
        'businessRules/frontDesk/seatingReservations',



        // { text: 'Front Desk - Practice - Paying Bills', link: '' },
        // { text: 'Front Desk - Practice Solution', link: '' },



        'aspNet/userControls/fakeDateTime',
        'aspNet/frontDesk/queryString',



        // { text: 'eRestaurant - Serving Tables', link: '', tooltip: 'Designing eRestaurant - User eXperience (UX)' },



        // { text: 'Serving Tables - The Waiters Tables', link: '' },
        // { text: 'Serving Tables - Taking an Order', link: '' },
        // { text: 'Serving Tables - Updating an Order', link: '' },
        // { text: 'Serving Tables - Splitting a Bill', link: '' },


        // { text: 'eRestaurant - Kitchen', link: '', tooltip: 'Designing eRestaurant - User eXperience (UX)' },


        // { text: 'Kitchen - Viewing Orders', link: '' },
        // { text: 'Kitchen - Preparing Orders', link: '' },
        // { text: 'Serving Tables - Practice - Serving the Order', link: '' },
        // { text: 'Kitchen - Customer Complaints', link: '', tooltip: 'Handling complaints with the order' },


        // { text: 'eRestaurant - Online Reservations', link: '', tooltip: 'Designing eRestaurant - User eXperience (UX)' },


        // { text: 'Reservations - by the Customer', link: '', tooltip: 'Creating a reservation online' },
        // { text: 'Reservations - Front Desk', link: '', tooltip: 'Handling phone-in reservations and inquiries' },


        // 'security/demo'



        // { text: 'Conclusion', link: '' }
      ],

      // fallback
      '/': [
        'about/'
      ]
    }
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/active-header-links': { },
    '@vuepress/back-to-top': { },
    '@vuepress/last-updated': { }
  }
}
