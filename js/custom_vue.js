// VUE Customization Code
var footerlinks = [
  {name: "Home",
    uRL: "index.html"
  },{name: "About Us",
    uRL: "#",
  },{name: "Florira Energy Facts",
    uRL: "#",
  },{name: "FESC Expertise",
    uRL: "#",
  },{name: "FESC Funded Projects",
    uRL: "#",
  },{name: "FL University Research",
    uRL: "#",
  },{name: "Technology Commercialization",
    uRL: "#",
  },{name: "Facilities and Resources",
    uRL: "#",
  },{name: "Energy Education / Energy Jobs",
    uRL: "#",
  },{name: "Public Outreach: Fact Sheets, Videos and Research Areas",
    uRL: "#",
  },{name: "FESC Conferences",
    uRL: "#",
  },{name: "Annual Reports, Publications and Presentations",
    uRL: "#",
  },{name: "FAQ",
    uRL: "#",
  },{name: "Links",
    uRL: "#",
  },{name: "Contact Us",
    uRL: "#",
  }
]

var app = new Vue({
  el: '#app',
  data: {
    footerarea: footerlinks
  }
})