_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{AWw8:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),s=n("vJKn"),c=n.n(s),r=n("rg98"),i=n("5Yp1"),o=n("R/WZ"),l=n("Ie8z"),j=n("Ji2X"),h=n("ofer"),d=n("tRbT"),b=n("J3NM"),m=n.n(b),u=n("q1tI"),x=n("iae6"),p=(n("vTTe"),n("FKgC"),Object(o.a)({subtitleStyle:{fontSize:"1.5rem",color:"white",textAlign:"center"},eventBodyStyle:{fontSize:"1.5rem",color:"white",textAlign:"left",marginTop:"1em",marginBottom:"1em"},spinnerTextStyle:{textAlign:"center",color:"#7cb342"}})),O=function(e){var t=e.img;return Object(a.jsx)(l.a,{className:"sliderImage",image:t})};t.default=function(){var e=p(),t=Object(u.useState)({events:[]}),n=t[0],s=t[1],o=Object(u.useState)(!1),l=o[0],b=o[1];return Object(u.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-vercel-mlabwebdev.vercel.app/events/roadshow");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:n=e.sent,s({events:n});case 14:b(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(i.a,{title:"PIL | RoadShow",active:"RoadShow",children:[Object(a.jsx)("div",{className:"hashCodeHeadSection",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a,{className:"pageHeader",children:"RoadShow"}),Object(a.jsx)(h.a,{className:e.subtitleStyle,children:"Project Exhibition"}),Object(a.jsx)(h.a,{className:e.subtitleStyle,style:{marginTop:40},children:"RoadShow is a project exhibition where summer interns showcase their projects to their peers and faculty."})]})}),Object(a.jsx)("div",{className:"hashCodeContainer",children:l?n.events.map((function(e){return Object(a.jsx)("div",{className:"hashCodeSection",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a,{className:"hashCodeTitle",children:e.event_name}),Object(a.jsx)(h.a,{className:"hashCodeDate",children:e.event_date+" "+e.year}),Object(a.jsx)(h.a,{className:"hashCodeSponsors",children:e.sponsor_text}),Object(a.jsx)(h.a,{className:"hashCodeDescription",children:e.description}),Object(a.jsxs)(d.a,{container:!0,spacing:3,style:{marginTop:20},justify:"center",children:[Object(a.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)("img",{style:{width:"95%"},src:"".concat(e.poster_link)})}),Object(a.jsx)(d.a,{item:!0,xs:12,sm:8,children:Object(a.jsx)(m.a,{autoPlay:!0,autoPlayInterval:"3000",buttonsDisabled:!0,children:e.image_links.map((function(e){return Object(a.jsx)(O,{img:"".concat(e)},e)}))})})]})]})},e.event_name)})):Object(a.jsxs)("div",{className:e.spinnerTextStyle,children:[Object(a.jsx)(h.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(a.jsx)(x.a,{style:{color:"#7cb342",marginTop:"1em"}})]})})]})}},LbyJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roadshow",function(){return n("AWw8")}])}},[["LbyJ",0,2,1,3,5,6,7,4]]]);