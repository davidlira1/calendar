(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{12:function(e,t,n){var a=n(26),r=a.isLeapYear,c=a.calcMonthStartingIdx;e.exports={getMonthData:function(e,t){var n=[],a={1:{days:31,name:"January"},2:{days:28,name:"February"},3:{days:31,name:"March"},4:{days:30,name:"April"},5:{days:31,name:"May"},6:{days:30,name:"June"},7:{days:31,name:"July"},8:{days:31,name:"August"},9:{days:30,name:"September"},10:{days:31,name:"October"},11:{days:30,name:"November"},12:{days:31,name:"December"}};r(t)&&(a[2].days=29);for(var o=c(e,t),i=a[1===e?12:e-1].days,s=i-o+1,h=a[e].days,d=(o+h)%7,m=0,p=s;p<=i;p++)n[m]={dayNumber:p},m++;for(p=1;p<=h;p++)n[m]={dayNumber:p},m++;if(0!==d)for(p=1;p<=7-d;p++)n[m]={dayNumber:p},m++;return{month:e,monthName:a[e].name,year:t,monthData:n}}}},22:function(e,t,n){},26:function(e,t){var n=function(e){return e%4===0};e.exports={calcMonthStartingIdx:function(e,t){var a={1:[31,"January"],2:[28,"February"],3:[31,"March"],4:[30,"April"],5:[31,"May"],6:[30,"June"],7:[31,"July"],8:[31,"August"],9:[30,"September"],10:[31,"October"],11:[30,"November"],12:[31,"December"]};n(t)&&(a[2][0]=29);for(var r=function(e){for(var t=1,n=2018,a=0;a<e-2018;a++)t+=n%4===0?366:365,n++;return t%7}(t),c=1;c<e;c++)r+=a[c][0];return r%7},isLeapYear:n}},27:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s,h,d,m,p,u,l,j,b,x=n(0),g=n.n(x),f=n(14),O=n.n(f),v=(n(22),n(4)),y=n(5),C=n(6),M=n(8),w=n(7),D=n(2),k=n(3),S=n(1),N=k.a.div(a||(a=Object(D.a)(["   position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    top: 0;\n    background-color: #192a36;\n    border-bottom: 1px solid black;\n    height: 90px;\n    width: 100%;\n    color: white;\n    font-size: 38px;\n    \n"]))),F=k.a.div(r||(r=Object(D.a)(["   cursor: pointer;\n"]))),J=function(e){var t=e.changeView;return Object(S.jsxs)(N,{children:[Object(S.jsx)(F,{onClick:function(e){return t("Project Management")},children:"Project Management"}),Object(S.jsx)(F,{onClick:function(e){return t("Calendar")},children:"Calendar"})]})},z=k.a.div(c||(c=Object(D.a)(["   \n    display: flex;\n    align-items: center;\n    \n    margin: 0 auto;\n    width: 90%;\n    height: 80px;\n    cursor: pointer;\n    \n\n"]))),V=k.a.div(o||(o=Object(D.a)(["   \n    flex-basis: 200px;\n    padding: 20px;\n    font-size: 20px;\n"]))),A=k.a.div(i||(i=Object(D.a)(["   \n    flex-grow: 1;\n"]))),P=k.a.div(s||(s=Object(D.a)(["   \n    height: 35px;\n    width: ",";\n    background-color: #226185;\n    border-radius: 20px;\n    transition: width 3s;\n"])),(function(e){return 100*e.percentComplete+"%"})),H=k.a.div(h||(h=Object(D.a)(["\n    font-size: 24px;\n    width: 50px;\n    padding-right: 20px;\n"]))),I=function(e){return console.log(e.stage),Object(S.jsxs)(z,{children:[Object(S.jsx)(V,{children:e.project.name}),Object(S.jsx)(A,{children:Object(S.jsx)(P,{className:"status-bar",percentComplete:e.project.percentComplete})}),Object(S.jsx)(H,{children:100*e.project.percentComplete+"%"})]})},L=k.a.div(d||(d=Object(D.a)(["\n    margin: 120px 5%;\n    width: 50%;\n    box-shadow: 3px 3px 5px 6px #ccc;\n\n"]))),T=function(e){Object(M.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).state={stage:1},a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(S.jsx)(L,{children:this.props.projects.map((function(t){return console.log(t,e.state.stage),Object(S.jsx)(I,{project:t,stage:e.state.stage})}))})}}]),n}(g.a.Component),E=n(12),Y=k.a.div(m||(m=Object(D.a)(["   \n    height: 80px;\n    display: flex;\n"]))),B=k.a.div(p||(p=Object(D.a)(["   \n    font-size: 32px;\n    width: 250px;\n    padding: 25px;\n"]))),R=k.a.div(u||(u=Object(D.a)(["\n    background-color: transparent;\n    vertical-align: center;\n    font-size: 24px;\n    padding-top: 30px;\n    margin: 0 14px;\n    cursor: pointer;\n"]))),Q=function(e){return Object(S.jsxs)(Y,{children:[Object(S.jsxs)(B,{children:[e.monthName," ",e.year]}),Object(S.jsx)(R,{onClick:function(t){return e.changeMonth("previous")},children:"<"}),Object(S.jsx)(R,{onClick:function(t){return e.changeMonth("next")},children:">"})]})},q=k.a.div(l||(l=Object(D.a)(["\n    border: 1px solid #353738;\n    height: 150px;\n    text-align: center;\n    font-size: 20px;\n"]))),G=function(e){var t=e.dayData;return Object(S.jsx)(q,{children:t.dayNumber})},K=k.a.div(j||(j=Object(D.a)(["\n    display: grid;\n    grid-template-columns: repeat(7, auto);\n"]))),U=function(e){var t=e.monthData;return Object(S.jsx)(K,{children:t.map((function(e){return Object(S.jsx)(G,{dayData:e})}))})},W=k.a.div(b||(b=Object(D.a)(["\n    font-family: 'Quicksand', sans-serif;\n    margin: 100px 80px;\n"]))),X=function(e){Object(M.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).state={month:e.month,monthName:"",year:e.year,monthData:[]},a.changeMonth=a.changeMonth.bind(Object(C.a)(a)),a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(E.getMonthData)(this.state.month,this.state.year);this.setState({monthName:e.monthName,monthData:e.monthData})}},{key:"changeMonth",value:function(e){var t=this.state.month,n=this.state.year;"previous"===e?1===t?(t=12,n--):t-=1:"next"===e&&(12===t?(t=1,n++):t++);var a=Object(E.getMonthData)(t,n);this.setState({month:t,monthName:a.monthName,year:n,monthData:a.monthData})}},{key:"render",value:function(){return Object(S.jsxs)(W,{children:[Object(S.jsx)(Q,{monthName:this.state.monthName,year:this.state.year,changeMonth:this.changeMonth}),Object(S.jsx)(U,{monthData:this.state.monthData})]})}}]),n}(g.a.Component),Z=[{name:"1634 Hill St",percentComplete:.5},{name:"4634 Tesoro St",percentComplete:.34},{name:"6893 Hill Side",percentComplete:.68},{name:"5291 Evergreen Rd",percentComplete:.9},{name:"2190 Freeman St",percentComplete:.2},{name:"1634 Hill St",percentComplete:.5},{name:"4634 Tesoro St",percentComplete:.34},{name:"6893 Hill Side",percentComplete:.78},{name:"5291 Evergreen Rd",percentComplete:.1},{name:"2190 Freeman St",percentComplete:.2}],$=function(e){Object(M.a)(n,e);var t=Object(w.a)(n);function n(e){var a;Object(v.a)(this,n),a=t.call(this,e);var r=new Date;return a.state={month:r.getMonth()+1,year:r.getFullYear(),view:"Calendar",projects:[]},a.changeView=a.changeView.bind(Object(C.a)(a)),a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.setState({projects:Z})}},{key:"changeView",value:function(e){this.setState({view:e})}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(J,{changeView:this.changeView}),"Project Management"===this.state.view?Object(S.jsx)(T,{projects:this.state.projects}):Object(S.jsx)(X,{month:this.state.month,year:this.state.year})]})}}]),n}(g.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};O.a.render(Object(S.jsx)(g.a.StrictMode,{children:Object(S.jsx)($,{})}),document.getElementById("root")),_()}},[[27,1,2]]]);
//# sourceMappingURL=main.d1bd0885.chunk.js.map