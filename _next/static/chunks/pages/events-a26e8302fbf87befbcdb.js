_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"8aGg":function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,s=Object(a.a)(e,["classes","className"]);return o.createElement("span",Object(r.a)({className:Object(i.a)(n.root,c),ref:t},s))}));t.a=Object(c.a)((function(e){return{root:{width:2,backgroundColor:e.palette.grey[400],flexGrow:1}}}),{name:"MuiTimelineConnector"})(s)},CKDk:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("NqtD"),s=n("H2TA"),u=n("l0AW"),l=n("eI/F"),f=o.forwardRef((function(e,t){var n=e.classes,s=e.className,f=Object(a.a)(e,["classes","className"]),d=o.useContext(u.a).align,p=void 0===d?"left":d,m=o.useContext(l.a).classes,h=void 0===m?{}:m;return o.createElement("div",Object(r.a)({className:Object(i.a)(n.root,h.content,n["align".concat(Object(c.a)(p))],s),ref:t},f))}));t.a=Object(s.a)((function(){return{root:{flex:1,padding:"6px 16px"},alignRight:{textAlign:"right"}}}),{name:"MuiTimelineContent"})(f)},MLBd:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("NqtD"),s=n("H2TA"),u=n("l0AW"),l=n("eI/F"),f=o.forwardRef((function(e,t){var n=e.classes,s=e.className,f=Object(a.a)(e,["classes","className"]),d=o.useContext(u.a).align,p=void 0===d?"left":d,m=o.useContext(l.a).classes,h=void 0===m?{}:m;return o.createElement("div",Object(r.a)({className:Object(i.a)(n.root,h.oppositeContent,n["align".concat(Object(c.a)(p))],s),ref:t},f))}));f.muiName="TimelineOppositeContent",t.a=Object(s.a)((function(){return{root:{padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},alignRight:{textAlign:"left"}}}),{name:"MuiTimelineOppositeContent"})(f)},OvNQ:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("ucBr"),s=n("NqtD"),u=n("H2TA"),l=n("l0AW"),f=n("eI/F"),d=o.forwardRef((function(e,t){var n=e.classes,u=e.className,d=Object(a.a)(e,["classes","className"]),p=o.useContext(l.a).align,m=void 0===p?"left":p,h=!1;return o.Children.forEach(e.children,(function(e){Object(c.a)(e,["TimelineOppositeContent"])&&(h=!0)})),o.createElement(f.a.Provider,{value:{classes:{content:n.content,oppositeContent:n.oppositeContent}}},o.createElement("li",Object(r.a)({className:Object(i.a)(n.root,n["align".concat(Object(s.a)(m))],u,!h&&n.missingOppositeContent),ref:t},d)))}));t.a=Object(u.a)((function(){return{root:{listStyle:"none",display:"flex",position:"relative",minHeight:70},alignLeft:{},alignRight:{flexDirection:"row-reverse"},alignAlternate:{"&:nth-child(even)":{flexDirection:"row-reverse","& $content":{textAlign:"right"},"& $oppositeContent":{textAlign:"left"}}},missingOppositeContent:{"&:before":{content:'""',flex:1,padding:"6px 16px"}},content:{},oppositeContent:{}}}),{name:"MuiTimelineItem"})(d)},PsJY:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("NqtD"),s=n("H2TA"),u=n("l0AW"),l=o.forwardRef((function(e,t){var n=e.align,s=void 0===n?"left":n,l=e.classes,f=e.className,d=Object(a.a)(e,["align","classes","className"]);return o.createElement(u.a.Provider,{value:{align:s}},o.createElement("ul",Object(r.a)({className:Object(i.a)(l.root,l["align".concat(Object(c.a)(s))],f),ref:t},d)))}));t.a=Object(s.a)((function(){return{root:{display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1},alignLeft:{},alignRight:{},alignAlternate:{}}}),{name:"MuiTimeline"})(l)},UGbB:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=(n("8bYG"),n("5Yp1")),o=n("R/WZ"),i=n("ofer"),c=n("Ji2X"),s=n("PsJY"),u=n("OvNQ"),l=n("djpt"),f=n("8aGg"),d=n("CKDk"),p=n("MLBd"),m=n("mPFD"),h=n("mQs5"),b=n.n(h),v=n("s/Ur"),y=n("YFqc"),g=n.n(y),j=Object(o.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},date:{margin:"5px",color:"white",fontSize:"1rem"},content:{margin:"5px"}}}));t.default=function(){var e=j(),t=Object(v.useMediaQuery)({query:"(min-device-width: 545px)"}),n={incito:{text:Object(r.jsx)("div",{className:"eventSection",children:Object(r.jsxs)("div",{className:"eventSectionText",children:[Object(r.jsx)(g.a,{className:"eventPageLink",href:"".concat("/web","/incito"),children:Object(r.jsx)(i.a,{className:"eventHeading",children:"Incito"})}),Object(r.jsx)(i.a,{className:"eventText",children:"Incito is the ideathon organized by PES Lab. It is a conglomerate of brilliant minds, all incubating innovative ideas. The shortlisted 10 best ideas battle it out in the final round to win cash prizes up to Rs. 40,000 in all. The participants test the design and feasibility of their ideas without the constraints of implementing the same, hence encouraging innovative thinking. The best ideas are also provided the platform and resources to implement their ideas and make these a reality."})]})}),image:Object(r.jsx)("div",{className:"eventSectionImage",children:Object(r.jsx)("img",{src:"".concat("/web","/images/mlab/ideathon.png")})})},recruitment:{text:Object(r.jsx)("div",{className:"eventSection",children:Object(r.jsxs)("div",{className:"eventSectionText",children:[Object(r.jsx)(g.a,{className:"eventPageLink",href:"".concat("/web","/join_us"),children:Object(r.jsx)(i.a,{className:"eventHeading",children:"Summer Internship Recruitment"})}),Object(r.jsx)(i.a,{className:"eventText",children:"Every year, we look for enthusiastic and passion-driven people to become a part of our community. To find those among you who are a good fit, we conduct an aptitude challenge and give you an opportunity to show us how passionate you are about engineering and building solutions to real-world problems."})]})}),image:Object(r.jsx)("div",{className:"eventSectionImage",children:Object(r.jsx)("img",{src:"".concat("/web","/images/mlab/recruitment.png")})})},internship:{text:Object(r.jsx)("div",{className:"eventSection",children:Object(r.jsxs)("div",{className:"eventSectionText",children:[Object(r.jsx)(g.a,{className:"eventPageLink",href:"".concat("/web","/summer"),children:Object(r.jsx)(i.a,{className:"eventHeading",children:"Summer Internship Program"})}),Object(r.jsx)(i.a,{className:"eventText",children:"We, at PES Innovation Lab, organise an annual summer internship for new recruits to work on cutting-edge research projects in varied domains such as Robotics, Machine Learning, Artificial Intelligence, Sensor Networking, Virtual Reality, Brain-Computer Interface, Cloud computing and App Development. The results and prototype demonstrations of these projects are presented at Roadshow, an event attended by a large number of students across disciplines at PES University. The recruitments for the same are carried out between March and April."})]})}),image:Object(r.jsx)("div",{className:"eventSectionImage",children:Object(r.jsx)("img",{src:"".concat("/web","/images/mlab/internship.png")})})},roadshow:{text:Object(r.jsx)("div",{className:"eventSection",children:Object(r.jsxs)("div",{className:"eventSectionText",children:[Object(r.jsx)(g.a,{className:"eventPageLink",href:"".concat("/web","/roadshow"),children:Object(r.jsx)(i.a,{className:"eventHeading",children:"Roadshow"})}),Object(r.jsx)(i.a,{className:"eventText",children:"Roadshow is an Innovation Expo organized by the Lab each year after the Summer Internship Program. PES Lab summer interns present the projects that they have worked on during the internship. This serves as a great platform for students from PES University to interact with members and gain knowledge about the cutting-edge technologies that we work on. Roadshow also serves as a platform where our interns receive constructive feedback and further insights on their projects from experienced professionals, professors and their peers."})]})}),image:Object(r.jsx)("div",{className:"eventSectionImage",children:Object(r.jsx)("img",{src:"".concat("/web","/images/mlab/roadshow.png")})})},hashcode:{text:Object(r.jsx)("div",{className:"eventSection",children:Object(r.jsxs)("div",{className:"eventSectionText",children:[Object(r.jsx)(g.a,{className:"eventPageLink",href:"".concat("/web","/hashcode"),children:Object(r.jsx)(i.a,{className:"eventHeading",children:"HashCode"})}),Object(r.jsx)(i.a,{className:"eventText",children:"HashCode is the annual 24-hour hackathon organised by the Lab, with students proposing interesting ideas and presenting projects from several domains. The hackathon also provides a learning platform to participating teams, with mentors and members of academia assisting them. Esteemed personalities from different industrial backgrounds come to judge the show, evaluating projects from all possible angles. HashCode 2020 is the 9th edition of the annual hackathon. The winners bag cash prizes worth up to one lakh indian rupees."})]})}),image:Object(r.jsx)("div",{className:"eventSectionImage",children:Object(r.jsx)("img",{src:"".concat("/web","/images/mlab/hackathon.png")})})}},o=[{month:"February",event_name:"Incito Ideathon",key:"incito"},{month:"March-April",event_name:"Summer Internship Recruitment",key:"recruitment"},{month:"June-July",event_name:"Summer Internship",key:"internship"},{month:"August",event_name:"RoadShow",key:"roadshow"},{month:"October/November",event_name:"#Code Hackathon",key:"hashcode"}].map((function(a){return Object(r.jsxs)(u.a,{style:{textAlign:"left "},children:[Object(r.jsxs)(p.a,{className:"event-timelineOppositeContent",children:[Object(r.jsx)(i.a,{variant:"body2",className:e.date,children:a.month}),n[a.key].image]}),Object(r.jsxs)(l.a,{style:{float:"left"},children:[Object(r.jsx)(m.a,{style:{color:"white",backgroundColor:"green"},children:Object(r.jsx)(b.a,{})}),Object(r.jsx)(f.a,{})]}),Object(r.jsxs)(d.a,{children:[t?null:Object(r.jsx)(i.a,{variant:"body2",className:"".concat(e.date," event-timelineDate"),children:a.month}),t?null:n[a.key].image,n[a.key].text]})]},a.key)}));return Object(r.jsx)(a.a,{title:"PIL | Events",active:"Events",children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{className:"pageHeader",children:"What we do"}),Object(r.jsx)(i.a,{style:{textAlign:"center",color:"white",fontSize:"1.8rem"},children:"A year at PES Innovation Lab"}),Object(r.jsx)(i.a,{style:{textAlign:"center",color:"white",fontSize:"1.4rem"},children:"We have the perfect platform and events for your skills and ideas to explore new heights"}),Object(r.jsx)(s.a,{align:t?"alternate":"left",children:o})]})})}},djpt:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,s=Object(a.a)(e,["classes","className"]);return o.createElement("div",Object(r.a)({className:Object(i.a)(n.root,c),ref:t},s))}));t.a=Object(c.a)((function(){return{root:{display:"flex",flexDirection:"column",flex:0,alignItems:"center"}}}),{name:"MuiTimelineSeparator"})(s)},"eI/F":function(e,t,n){"use strict";var r=n("q1tI"),a=r.createContext({});t.a=a},f8ys:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return n("UGbB")}])},l0AW:function(e,t,n){"use strict";var r=n("q1tI"),a=r.createContext({});t.a=a},mPFD:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("NqtD"),s=n("H2TA"),u=o.forwardRef((function(e,t){var n=e.classes,s=e.className,u=e.color,l=void 0===u?"grey":u,f=e.variant,d=void 0===f?"default":f,p=Object(a.a)(e,["classes","className","color","variant"]);return o.createElement("span",Object(r.a)({className:Object(i.a)(n.root,s,"inherit"!==l&&n["".concat(d).concat(Object(c.a)(l))]),ref:t},p))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:e.shadows[2],marginTop:8,marginBottom:8},defaultGrey:{borderColor:"transparent",color:e.palette.grey[50],backgroundColor:e.palette.grey[400]},outlinedGrey:{boxShadow:"none",color:e.palette.grey.contrastText,borderColor:e.palette.grey[400],backgroundColor:"transparent"},defaultPrimary:{borderColor:"transparent",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},outlinedPrimary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.primary.main},defaultSecondary:{borderColor:"transparent",color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},outlinedSecondary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.secondary.main}}}),{name:"MuiTimelineDot"})(u)},mQs5:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=i},"s/Ur":function(e,t,n){!function(t,r){var a;e.exports=(a=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(e,t){return s(e)||c(e,t)||o(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}function s(e){if(Array.isArray(e))return e}var u=n(1),l=n.n(u),f=n(8),d=n.n(f),p=n(2),m=n(10),h=n.n(m),b=n(3),v=n(6),y=function(e){return e.query||Object(b.a)(e)},g=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(p.a)(n)]=e[n],t}),{})},j=function(){var e=l.a.useRef(!1);return l.a.useEffect((function(){e.current=!0}),[]),e.current},x=function(e){var t=l.a.useContext(v.a),n=function(){return g(e)||g(t)},a=r(l.a.useState(n),2),o=a[0],i=a[1];return l.a.useEffect((function(){var e=n();h()(o,e)||i(e)}),[e,t]),o},O=function(e){var t=function(){return y(e)},n=r(l.a.useState(t),2),a=n[0],o=n[1];return l.a.useEffect((function(){var e=t();a!==e&&o(e)}),[e]),a},w=function(e,t){var n=function(){return d()(e,t||{},!!t)},a=r(l.a.useState(n),2),o=a[0],i=a[1],c=j();return l.a.useEffect((function(){return c&&i(n()),function(){o.dispose()}}),[e,t]),o},S=function(e){var t=r(l.a.useState(e.matches),2),n=t[0],a=t[1];return l.a.useEffect((function(){var t=function(){a(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n},N=function(e,t,n){var r=x(t),a=O(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var o=w(a,r),i=S(o),c=j();return l.a.useEffect((function(){c&&n&&n(i)}),[i]),i};t.a=N},function(e,t){e.exports=a},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}function a(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(o,r);return c[e]=i.test(t)?"-"+t:t}var o=/[A-Z]/g,i=/^ms-/,c={};t.a=a},function(e,t,n){"use strict";var r=n(2),a=n(11),o=function(e){return"not ".concat(e)},i=function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?o(n):"(".concat(n,": ").concat(t,")")},c=function(e){return e.join(" and ")},s=function(e){var t=[];return Object.keys(a.a.all).forEach((function(n){var r=e[n];null!=r&&t.push(i(n,r))})),c(t)};t.a=s},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext();t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(17),o=n(3),i=n(6);n.d(t,"default",(function(){return a.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"toQuery",(function(){return o.a})),n.d(t,"Context",(function(){return i.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){l&&l.addListener(e)}function a(e){l&&l.removeListener(e)}function c(e){u.matches=e.matches,u.media=e.media}function s(){l&&l.removeListener(c)}var u=this;if(i&&!n){var l=i.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(c)}else this.matches=o(e,t),this.media=e;this.addListener=r,this.removeListener=a,this.dispose=s}function a(e,t,n){return new r(e,t,n)}var o=n(9).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=a},function(e,t,n){"use strict";function r(e,t){return a(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var a=e.expressions.every((function(e){var n=e.feature,r=e.modifier,a=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),s=c(s);break;case"resolution":a=i(a),s=i(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=o(a),s=o(s);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,s=parseInt(s,10)||0}switch(r){case"min":return s>=a;case"max":return s<=a;default:return s===a}}));return a&&!n||!a&&n}))}function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(s),n=t[1],r=t[2],a=t[3]||"",o={};return o.inverse=!!n&&"not"===n.toLowerCase(),o.type=r?r.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],o.expressions=a.map((function(e){var t=e.match(u),n=t[1].toLowerCase().match(l);return{modifier:n[1],feature:n[2],value:t[2]}})),o}))}function o(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function i(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=r,t.parse=a;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,u=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,l=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var o=0;o<a;o++){var i=n[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}e.exports=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),s=c.a.oneOfType([c.a.string,c.a.number]),u={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:s},l=a({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:s,maxResolution:s},u),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},d=a(a({},f),l);u.type=Object.keys(f),t.a={all:d,types:f,matchers:u,features:l}},function(e,t,n){var r=n(4);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===g||e===N||e===x||e===j||e===k||e===I||"object"==typeof e&&null!==e&&(e.$$typeof===E||e.$$typeof===T||e.$$typeof===O||e.$$typeof===w||e.$$typeof===C||e.$$typeof===A||e.$$typeof===R||e.$$typeof===_||e.$$typeof===P)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:var n=e.type;switch(n){case S:case N:case g:case x:case j:case k:return n;default:var r=n&&n.$$typeof;switch(r){case w:case C:case E:case T:case O:return r;default:return t}}case y:return t}}}function r(e){return Y||(Y=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),a(e)||n(e)===S}function a(e){return n(e)===N}function o(e){return n(e)===w}function i(e){return n(e)===O}function c(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}function s(e){return n(e)===C}function u(e){return n(e)===g}function l(e){return n(e)===E}function f(e){return n(e)===T}function d(e){return n(e)===y}function p(e){return n(e)===x}function m(e){return n(e)===j}function h(e){return n(e)===k}var b="function"==typeof Symbol&&Symbol.for,v=b?Symbol.for("react.element"):60103,y=b?Symbol.for("react.portal"):60106,g=b?Symbol.for("react.fragment"):60107,j=b?Symbol.for("react.strict_mode"):60108,x=b?Symbol.for("react.profiler"):60114,O=b?Symbol.for("react.provider"):60109,w=b?Symbol.for("react.context"):60110,S=b?Symbol.for("react.async_mode"):60111,N=b?Symbol.for("react.concurrent_mode"):60111,C=b?Symbol.for("react.forward_ref"):60112,k=b?Symbol.for("react.suspense"):60113,I=b?Symbol.for("react.suspense_list"):60120,T=b?Symbol.for("react.memo"):60115,E=b?Symbol.for("react.lazy"):60116,P=b?Symbol.for("react.block"):60121,A=b?Symbol.for("react.fundamental"):60117,R=b?Symbol.for("react.responder"):60118,_=b?Symbol.for("react.scope"):60119,L=S,M=N,D=w,$=O,q=v,F=C,H=g,W=E,U=T,z=y,J=x,B=j,G=k,Y=!1;t.AsyncMode=L,t.ConcurrentMode=M,t.ContextConsumer=D,t.ContextProvider=$,t.Element=q,t.ForwardRef=F,t.Fragment=H,t.Lazy=W,t.Memo=U,t.Portal=z,t.Profiler=J,t.StrictMode=B,t.Suspense=G,t.isAsyncMode=r,t.isConcurrentMode=a,t.isContextConsumer=o,t.isContextProvider=i,t.isElement=c,t.isForwardRef=s,t.isFragment=u,t.isLazy=l,t.isMemo=f,t.isPortal=d,t.isProfiler=p,t.isStrictMode=m,t.isSuspense=h,t.isValidElementType=e,t.typeOf=n}()},function(e,t,n){"use strict";function r(){return null}var a=n(4),o=n(15),i=n(5),c=n(16),s=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e){var t=e&&(k&&e[k]||e[I]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function d(e){function n(n,o,c,s,l,d,p){if(s=s||T,d=d||c,p!==i){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var h=s+":"+c;!r[h]&&a<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,a++)}}return null==o[c]?n?new f(null===o[c]?"The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(o,c,s,l,d)}var r={},a=0,o=n.bind(null,!1);return o.isRequired=n.bind(null,!0),o}function p(e){function t(t,n,r,a,o,i){var c=t[n];return w(c)!==e?new f("Invalid "+a+" `"+o+"` of type `"+S(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return d(t)}function m(e){function t(t,n,r,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new f("Invalid "+a+" `"+o+"` of type `"+w(c)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,r,a,o+"["+s+"]",i);if(u instanceof Error)return u}return null}return d(t)}function h(e){function t(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||T;return new f("Invalid "+a+" `"+o+"` of type `"+C(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return d(t)}function b(e){function t(t,n,r,a,o){for(var i=t[n],c=0;c<e.length;c++)if(l(i,e[c]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===S(t)?String(t):t}));return new f("Invalid "+a+" `"+o+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+s+".")}return Array.isArray(e)?d(t):(u(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function v(e){function t(t,n,r,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],u=w(c);if("object"!==u)return new f("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(s(c,l)){var d=e(c,l,r,a,o+"."+l,i);if(d instanceof Error)return d}return null}return d(t)}function y(e){function t(t,n,r,a,o){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,n,r,a,o,i))return null;return new f("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var n=0;n<e.length;n++){var a=e[n];if("function"!=typeof a)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+N(a)+" at index "+n+"."),r}return d(t)}function g(e){function t(t,n,r,a,o){var c=t[n],s=w(c);if("object"!==s)return new f("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var d=l(c,u,r,a,o+"."+u,i);if(d)return d}}return null}return d(t)}function j(e){function t(t,n,r,a,c){var s=t[n],u=w(s);if("object"!==u)return new f("Invalid "+a+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var d in l){var p=e[d];if(!p)return new f("Invalid "+a+" `"+c+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(s,d,r,a,c+"."+d,i);if(m)return m}return null}return d(t)}function x(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(x);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var a,o=r.call(t);if(r!==t.entries){for(;!(a=o.next()).done;)if(!x(a.value))return!1}else for(;!(a=o.next()).done;){var i=a.value;if(i&&!x(i[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function w(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function S(e){if(void 0===e||null===e)return""+e;var t=w(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function N(e){var t=S(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function C(e){return e.constructor&&e.constructor.name?e.constructor.name:T}var k="function"==typeof Symbol&&Symbol.iterator,I="@@iterator",T="<<anonymous>>",E={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(r),arrayOf:m,element:function(){function t(t,n,r,a,o){var i=t[n];return e(i)?null:new f("Invalid "+a+" `"+o+"` of type `"+w(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return d(t)}(),elementType:function(){function e(e,t,n,r,o){var i=e[t];return a.isValidElementType(i)?null:new f("Invalid "+r+" `"+o+"` of type `"+w(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return d(e)}(),instanceOf:h,node:function(){function e(e,t,n,r,a){return x(e[t])?null:new f("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:v,oneOf:b,oneOfType:y,shape:g,exact:j};return f.prototype=Error.prototype,E.checkPropTypes=c,E.resetWarningCache=c.resetWarningCache,E.PropTypes=E,E}},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,s=r(e),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))o.call(n,l)&&(s[l]=n[l]);if(a){c=a(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(s[c[f]]=n[c[f]])}}return s}},function(e,t,n){"use strict";function r(e,t,n,r,s){for(var u in e)if(c(e,u)){var l;try{if("function"!=typeof e[u]){var f=Error((r||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.");throw f.name="Invariant Violation",f}l=e[u](t,u,r,n,null,o)}catch(p){l=p}if(!l||l instanceof Error||a((r||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var d=s?s():"";a("Failed "+n+" type: "+l.message+(null!=d?d:""))}}}var a=function(){},o=n(5),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function o(e){var t=e.children,n=e.device,a=e.onChange,o=r(e,["children","device","onChange"]),c=Object(i.a)(o,n,a);return"function"==typeof t?t(c):c?t:null}t.a=o;var i=n(0)}]))}("undefined"!=typeof self&&self)}},[["f8ys",0,2,1,3,5,4]]]);