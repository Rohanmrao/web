_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{O3sk:function(e,t,n){"use strict";n.r(t);var s=n("o0o1"),a=n.n(s),c=n("HaE+"),r=n("nKUr"),i=n("5Yp1"),o=n("R/WZ"),l=n("Ie8z"),j=n("Ji2X"),m=n("ofer"),d=n("tRbT"),u=n("J3NM"),h=n.n(u),b=n("q1tI"),x=n("iae6"),p=(n("vTTe"),n("FKgC"),Object(o.a)({subtitleStyle:{fontSize:"1.5rem",color:"white",textAlign:"center"},eventBodyStyle:{fontSize:"1.5rem",color:"white",textAlign:"left",marginTop:"1em",marginBottom:"1em"},spinnerTextStyle:{textAlign:"center",color:"#7cb342"}})),O=function(e){var t=e.img;return Object(r.jsx)(l.a,{className:"sliderImage",image:t})};t.default=function(){var e=p(),t=Object(b.useState)({events:[]}),n=t[0],s=t[1],o=Object(b.useState)(!1),l=o[0],u=o[1];return Object(b.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pil-api.herokuapp.com/events/internship");case 2:return t=e.sent,e.next=5,t.status;case 5:if(e.t0=e.sent,200===e.t0){e.next=10;break}alert("API Error. Try again later"),e.next=14;break;case 10:return e.next=12,t.json();case 12:n=e.sent,s({events:n});case 14:u(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(i.a,{title:"PIL | Summer Internship",active:"Summer",children:[Object(r.jsx)("div",{className:"hashCodeHeadSection",children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(m.a,{className:"pageHeader",children:"Summer Internship"}),Object(r.jsx)(m.a,{className:e.subtitleStyle,children:"Work on an exciting project over your summer vacations!"}),Object(r.jsx)(m.a,{className:e.subtitleStyle,style:{marginTop:40},children:"1st year and 2nd year students work on exciting projects over their summer vacations."})]})}),Object(r.jsx)("div",{className:"hashCodeContainer",children:l?n.events.map((function(e){return Object(r.jsx)("div",{className:"hashCodeSection",children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(m.a,{className:"hashCodeTitle",children:e.event_name}),Object(r.jsx)(m.a,{className:"hashCodeDate",children:e.event_date+" "+e.year}),Object(r.jsx)(m.a,{className:"hashCodeSponsors",children:e.sponsor_text}),Object(r.jsx)(m.a,{className:"hashCodeDescription",children:e.description}),Object(r.jsxs)(d.a,{container:!0,spacing:3,style:{marginTop:20},justify:"center",children:[Object(r.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(r.jsx)("img",{style:{width:"95%"},src:"".concat(e.poster_link)})}),Object(r.jsx)(d.a,{item:!0,xs:12,sm:8,children:Object(r.jsx)(h.a,{autoPlay:!0,autoPlayInterval:"3000",buttonsDisabled:!0,children:e.image_links.map((function(e){return Object(r.jsx)(O,{img:"".concat(e)},e)}))})})]})]})},e.event_name)})):Object(r.jsxs)("div",{className:e.spinnerTextStyle,children:[Object(r.jsx)(m.a,{style:{fontSize:"1.5rem"},children:"Loading Data"})," ",Object(r.jsx)(x.a,{style:{color:"#7cb342",marginTop:"1em"}})]})})]})}},UH9t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/summer",function(){return n("O3sk")}])}},[["UH9t",0,2,1,3,5,6,4]]]);