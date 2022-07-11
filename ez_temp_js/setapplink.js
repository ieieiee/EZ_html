var ezAppVariable={scheme:"ezitapp",links:[{domains:["^hotel-test\\.eztravel\\.com\\.tw$","^hotel$","^hotel-ws\\.eztravel\\.com\\.tw$","^hotel\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(!0){case/^(\/|\/index)?$/.test(t):return{parsed:!0,sysCode:"hbs",weburl:"//hotel-test.eztravel.com.tw/".addQuery(a),applink:"//hotel/".addQuery(a)};case/^\/(list|detail)$/.test(t):case/^\/order\/orderProd$/.test(t):return{parsed:!0,sysCode:"hbs",weburl:`//hotel-test.eztravel.com.tw${t}`.addQuery(a),applink:`//hotel${t}`.addQuery(a)}}}},{domains:["^flight-test\\.eztravel\\.com\\.tw$","^flight$","^flight-ws\\.eztravel\\.com\\.tw$","^flight\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(!0){case/^(\/|\/index)?$/.test(t):return{parsed:!0,sysCode:"abs",weburl:"//flight-test.eztravel.com.tw/".addQuery(a),applink:"//flight/".addQuery(a)};case/^\/tickets-(oneway|roundtrip|multicity)-.+/.test(t):case/^\/(list|listround)$/.test(t):case/^\/price\/select$/.test(t):case/^\/order\/orderProd$/.test(t):return{parsed:!0,sysCode:"abs",weburl:`//flight-test.eztravel.com.tw${t}`.addQuery(a),applink:`//flight${t}`.addQuery(a)};case!e&&/^\/taiwan\/.+/.test(t):return{parsed:!1}}}},{domains:["^pkgtw-t01\\.eztravel\\.com\\.tw$","^trip$","^pkgtw-ws01\\.eztravel\\.com\\.tw$","^trip\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(e||(t=t.replace(/^\/domestic\//,"/")),!0){case/^(\/)?$/.test(t):case!e&&/^((\/)(?!keywords|project|combine|introduction|p|intro|hsrhtl|travels).+|(\/)?$)/.test(t):return{parsed:!0,sysCode:"trip",weburl:`//pkgtw-t01.eztravel.com.tw${t}`.addQuery(a),applink:"//trip/".addQuery(a)};case/^\/keywords/.test(t):var r,i;if(e){var n=[];for(var o in s)switch(o){case"depart":case"kw":case"depDateFrom":case"depDateTo":case"priceBeg":case"priceEnd":case"avaliableOnly":case"orderBy":case"isShould":case"isPf":case"vendNo":s[o]&&n.push(o+"="+s[o]);break;case"viewList":case"tourTypeList":case"travelDayList":case"trafficList":if(s[o])if(Array.isArray(s[o]))for(var c in s[o])n.push(o+"="+s[o][c]);else n.push(o+"="+s[o].split(",").join("&"+o+"="))}r=`//pkgtw-t01.eztravel.com.tw/domestic${t}`.addQuery(n),i=`//trip${t}`.addQuery(a)}else{var p=[];for(var o in s)switch(o){case"depart":case"viewList":case"kw":case"depDateFrom":case"depDateTo":case"tourTypeList":case"travelDayList":case"trafficList":case"priceBeg":case"priceEnd":case"orderBy":case"isShould":case"isPf":case"vendNo":s[o]&&p.push(o+"="+s[o])}p.push("avaliableOnly="+("true"==s.avaliableOnly)),r=`//pkgtw-t01.eztravel.com.tw/domestic${t}`.addQuery(a),i=`//trip${t}`.addQuery(p)}return{parsed:!0,sysCode:"trip",weburl:r,applink:i};case/^\/(project\/PRM|combine\/COB)\d{1,10}/.test(t):case/^\/introduction\/(ODT|GRT|GRP)\d{1,10}(\/\d{8})?/.test(t):case/^\/introduction\/VDR\d{10}-_-./.test(t):case/^\/introduction\/VDR\d{10}(\/[^\/]+){2}/.test(t):case/^\/p\/VDR\d{10}(\/[^\/]+)/.test(t):return{parsed:!0,sysCode:"trip",weburl:`//pkgtw-t01.eztravel.com.tw/domestic${t}`.addQuery(a),applink:`//trip${t}`.addQuery(a)}}}},{domains:["^vacation-t01\\.eztravel\\.com\\.tw$","^vacation$","^vacation-ws01\\.eztravel\\.com\\.tw$","^vacation\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(e||(t=t.replace(/^\/pkgfrn\//,"/")),!0){case/^(\/)?$/.test(t):case!e&&/^\/oversea(\/)?$/.test(t):case!e&&/^\/oversea\/(?!results|intro).+/.test(t):return{parsed:!0,sysCode:"vacation",weburl:`//vacation-t01.eztravel.com.tw${t}`.addQuery(a),applink:"//vacation/".addQuery(a)};case/^\/results\/\w+\/\w+/.test(t):case/^\/keywords(\/)?/.test(t):var r,i,n={"DEP_DATE:ASC":"0","TRAVEL_DAY:ASC":"1","PRICE:ASC":"2","RELATION:DESC":"3","PROMO:DESC":"9"},o="";if(e){var c=[];for(var p in s)switch(p){case"dateFrom":s[p]&&c.push("depDateFrom="+s[p]);break;case"dateTo":s[p]&&c.push("depDateTo="+s[p]);break;case"availableOnly":if(s[p]&&"02"!=s.grpStatus){var l=["0","false",!1].indexOf(s[p])>-1?"0":"1";c.push("avbl="+l)}break;case"avbl":s[p]&&c.push("avbl="+s[p]);break;case"grpStatus":s[p]&&"02"==s[p]&&(s.avbl||c.push("avbl=2"));break;case"priceRange":if(s[p]){var d="budgets[]";c.push(d+"="+s[p].split(",").join("&"+d+"="))}break;case"dayRanges":case"dayOfWeeks":case"sights":case"airlines":"dayRanges"==p?d="travelDays[]":"dayOfWeeks"==p?d="startWeek[]":"sights"==p?d="sight[]":"airlines"==p&&(d="flight[]"),d&&c.push(d+"="+s[p].split(",").join("&"+d+"="));break;case"rankBy":s[p]&&(o=s[p]);break;case"srt":s[p]&&0==o.length&&(o=s[p]);break;case"dep":case"vendNo":case"htlArea":case"depTime":case"rtnTime":case"lccOpt":case"rel":case"cst":case"ez":case"pf":case"type":case"tt":case"flag":s[p]&&c.push(p+"="+s[p]);break;case"filterSubtypes":if(s[p]){d="subtypes[]";c.push(d+"="+s[p].split(",").join("&"+d+"="))}}if(s.keywords?c.push("q="+s.keywords):s.q&&c.push("q="+s.q),o.length>0)if(n[o])c.push("rankBy="+n[o]);else Object.keys(n).find((function(e){if(n[e]===o)return!0}))&&c.push("rankBy="+o);if(/^\/keywords(\/)?/.test(t)){let e=t.split("/").pop();c.unshift(`departure=${e}`),r=`//vacation-t01.eztravel.com.tw/pkgfrn${t.split("/").filter((t=>t.trim()!=e)).join("/")}`.addQuery(c),i=` //vacation${t}`.addQuery(a)}else r=`//vacation-t01.eztravel.com.tw/pkgfrn${t}`.addQuery(c),i=`//vacation${t}`.addQuery(a)}else{var u=[];for(var p in s)switch(p){case"dateF":case"depDateFrom":s[p]&&u.push("dateFrom="+s[p]);break;case"dateT":case"depDateTo":s[p]&&u.push("dateTo="+s[p]);break;case"avbl":s[p]&&u.push("avbl="+s[p]);break;case"fullStatus":case"fullStatus[]":s[p]&&"NONE"==s[p]?u.push("availableOnly=true"):s[p]&&"ABOUT_FULL"==s[p]&&u.push("grpStatus=02");break;case"budgets[]":var m,w,v,g;if(Array.isArray(s[p])){var h=s[p];v=h[0],g=h[h.length-1]}else v=s[p],g=s[p];m=parseInt(v.split("~")[0])||0,w=parseInt(g.split("~")[1])||g.split("~")[0]+"+",s[p]&&u.push("priceRange="+m+","+encodeURIComponent(w));break;case"travelDays[]":case"startWeek[]":case"sight[]":case"flight[]":"travelDays[]"==p?d="dayRanges":"startWeek[]"==p?d="dayOfWeeks":"sight[]"==p?d="sights":"flight[]"==p&&(d="airlines"),d&&u.push(d+"="+(Array.isArray(s[p])?s[p].join(","):s[p]));break;case"rankBy":s[p]&&(o=s[p]);break;case"srt":s[p]&&0==o.length&&(o=s[p]);break;case"grpStatus":case"dep":case"vendNo":case"htlArea":case"depTime":case"rtnTime":case"lccOpt":case"q":case"keywords":case"rel":case"cst":case"ez":case"pf":case"type":case"tt":case"flag":s[p]&&u.push(p+"="+s[p]);break;case"subtypes[]":s[p]&&u.push("filterSubtypes="+s[p])}if(o.length>0)if(n[o])u.push("rankBy="+n[o]);else Object.keys(n).find((function(e){if(n[e]===o)return!0}))&&u.push("rankBy="+o);if(/^\/keywords(\/)?/.test(t)){let e=s.departure;r=`//vacation-t01.eztravel.com.tw/pkgfrn${t}`.addQuery(a),i=`//vacation/${t.split("/").filter((e=>""!=e.trim())).concat([e]).join("/")}`.addQuery(u)}else r=`//vacation-t01.eztravel.com.tw/pkgfrn${t}`.addQuery(a),i=`//vacation${t}`.addQuery(u)}return{parsed:!0,sysCode:"vacation",weburl:r,applink:i};case/^\/p\/FRN\d{10}/.test(t):case/^\/p\/VDR\d{10}\/.+/.test(t):case/^\/introduction\/FR(N|T)\d{10}(\/\d{8})?/.test(t):case/^\/introduction\/VDR\d{10}\/.+/.test(t):return{parsed:!0,sysCode:"vacation",weburl:`//vacation-t01.eztravel.com.tw/pkgfrn${t}`.addQuery(a),applink:`//vacation${t}`.addQuery(a)}}}},{domains:["^vacation-t01\\.eztravel\\.com\\.tw$","^cruise$","^vacation-ws01\\.eztravel\\.com\\.tw$","^vacation\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(!0){case/^(\/)?$/.test(t):case!e&&/^\/cruise(\/)?$/.test(t):return{parsed:!0,sysCode:"cruise",weburl:"//vacation-t01.eztravel.com.tw/cruise".addQuery(a),applink:"//cruise/".addQuery(a)}}}},{domains:["^vacation-t01\\.eztravel\\.com\\.tw$","^fit$","^vacation-ws01\\.eztravel\\.com\\.tw$","^vacation\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){if(!e&&/^\/fit\/(?!result|keywords|introduction).+/.test(t))return{parsed:!0,sysCode:"fit",weburl:`//vacation-t01.eztravel.com.tw${t}`.addQuery(a),applink:"//fit/".addQuery(a)};switch(e||(t=t.replace(/^\/fit\//,"/")),!0){case/^(\/)?$/.test(t):case!e&&/^\/fit(\/)?$/.test(t):return{parsed:!0,sysCode:"fit",weburl:"//vacation-t01.eztravel.com.tw/fit".addQuery(a),applink:"//fit/".addQuery(a)};case/^\/results\/\w+\/\d+/.test(t):case/^\/keywords(\/)?/.test(t):var r,i,n={"DEP_DATE:ASC":"0","TRAVEL_DAY:ASC":"1","PRICE:ASC":"2","RELATION:DESC":"3","PROMO:DESC":"9"},o="";if(e){var c=[];for(var p in s)if("priceRange"!=p)switch(p){case"dateFrom":s[p]&&c.push("depDateFrom="+s[p]);break;case"dateTo":s[p]&&c.push("depDateTo="+s[p]);break;case"availableOnly":c.push((s[p],1));break;case"avbl":c.push("avbl="+s[p]);break;case"rankBy":s[p]&&(o=s[p]);break;case"srt":s[p]&&0==o.length&&(o=s[p]);break;case"dayRanges":case"dayOfWeeks":case"sights":case"airlines":case"htlArea":"dayRanges"==p?d="travelDays[]":"dayOfWeeks"==p?d="startWeek[]":"sights"==p?d="sight[]":"airlines"==p?d="flight[]":"htlArea"==p&&(d="htlArea[]"),d&&c.push(d+"="+s[p].split(",").join("&"+d+"="));break;case"dep":case"vendNo":case"depTime":case"rtnTime":case"lccOpt":case"q":case"rel":case"cst":case"ez":case"pf":case"type":case"tt":case"flag":c.push(p+"="+s[p])}if(o.length>0)if(n[o])c.push("rankBy="+n[o]);else Object.keys(n).find((function(e){if(n[e]===o)return!0}))&&c.push("rankBy="+o);r=`//vacation-t01.eztravel.com.tw/fit${t}`.addQuery(c),i=`//fit${t}`.addQuery(a)}else{var l=[];for(var p in s.depDateFrom&&s.depDateTo&&(l.push("dateFrom="+s.depDateFrom),l.push("dateTo="+s.depDateTo)),s.avbl&&"1"==s.avbl&&l.push("availableOnly=true"),s.airlines&&l.push("lccOpt="+s.airlines),s)switch("priceRange"==p?condition:"depDateFrom"!=p&&"dateTo"!=p&&"avbl"!=p&&"airlines"!=p||condition,p){case"rankBy":s[p]&&(o=s[p]);break;case"srt":s[p]&&0==o.length&&(o=s[p]);break;case"travelDays[]":case"startWeek[]":case"sight[]":case"flight[]":case"htlArea[]":var d;"travelDays[]"==p?d="dayRanges":"startWeek[]"==p?d="dayOfWeeks":"sight[]"==p?d="sights":"flight[]"==p?d="airlines":"htlArea[]"==p&&(d="htlArea"),d&&l.push(d+"="+(Array.isArray(s[p])?s[p].join(","):s[p]));break;case"dep":case"vendNo":case"htlArea":case"depTime":case"rtnTime":case"lccOpt":case"q":case"rel":case"cst":case"ez":case"pf":case"type":case"tt":case"flag":l.push(p+"="+s[p])}if(o.length>0)if(n[o])l.push("rankBy="+n[o]);else Object.keys(n).find((function(e){if(n[e]===o)return!0}))&&l.push("rankBy="+o);r=`//vacation-t01.eztravel.com.tw/fit${t}`.addQuery(a),i=`//fit${t}`.addQuery(l)}return{parsed:!0,sysCode:"fit",weburl:r,applink:i};case/^\/introduction\/FRT\d{10}(\/\d{8})?/.test(t):return{parsed:!0,sysCode:"fit",weburl:`//vacation-t01.eztravel.com.tw/fit${t}`.addQuery(a),applink:`//fit${t}`.addQuery(a)}}}},{domains:["^vacation-t01\\.eztravel\\.com\\.tw$","^packages$","^vacation-ws01\\.eztravel\\.com\\.tw$","^vacation\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(e||(t=t.replace(/^\/packages\//,"/")),!0){case/^(\/)?$/.test(t):case!e&&/^\/packages(\/)?$/.test(t):return{parsed:!0,sysCode:"packages",weburl:"//vacation-t01.eztravel.com.tw/packages/".addQuery(a),applink:"//packages/".addQuery(a)};case/^\/(combination|introduction)/.test(t):return{parsed:!0,sysCode:"packages",weburl:`//vacation-t01.eztravel.com.tw/packages${t}`.addQuery(a),applink:`//packages${t}`.addQuery(a)}}}},{domains:["^vacation-t01\\.eztravel\\.com\\.tw$","^sight$","^vacation-ws01\\.eztravel\\.com\\.tw$","^vacation\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){if(e||(t=t.replace(/^\/sight\//,"/")),!0===/^\/(plc|PLC)\d{10}(\/.+)?/.test(t))return{parsed:!0,sysCode:"ep",weburl:`//vacation-t01.eztravel.com.tw/sight${t}`.addQuery(a),applink:`//sight${t}`.addQuery(a)}}},{domains:["^tkt00t-a01\\.eztravel\\.com\\.tw$","^activity$","^tkt00s-a01\\.eztravel\\.com\\.tw$","^activity\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(!0){case/^(\/)?$/.test(t):case/^\/global(\/)?$/.test(t):case/^\/taiwan(\/)?$/.test(t):return{parsed:!0,sysCode:"activity",weburl:"//tkt00t-a01.eztravel.com.tw/".addQuery(a),applink:"//activity/".addQuery(a)};case/^\/list/.test(t):var r=[],i=[];for(var n in s)switch(n){case"q":case"sortBy":case"orderBy":case"maxResult":case"destination":case"isInstant":case"filterDestCds":case"filterCatTypeCds":case"filterGuideLangs":s[n]&&(r.push(n+"="+s[n]),i.push(n+"="+s[n]));break;default:e?i.push(n+"="+s[n]):r.push(n+"="+s[n])}return{parsed:!0,sysCode:"activity",weburl:`//tkt00t-a01.eztravel.com.tw${t}`.addQuery(r),applink:`//activity${t}`.addQuery(i)};case/^\/detail/.test(t):return{parsed:!0,sysCode:"activity",weburl:`//tkt00t-a01.eztravel.com.tw${t}`.addQuery(a),applink:`//activity${t}`.addQuery(a)};case/^\/thsrc/.test(t):return{parsed:!0,sysCode:"rxt",weburl:`//tkt00t-a01.eztravel.com.tw${t}`.addQuery(a),applink:`//activity${t}`.addQuery(a),weight:{android:5605,ios:5605}};case/^\/thsrc\/list/.test(t):r=[],i=[];if(e);else for(var n in s){var o=n;switch(n){case"dep":case"arr":case"fromDt":case"endDt":case"timeFilter":case"tripType":s[n]&&(r.push(n+"="+s[n]),i.push(o+"="+s[n]));break;default:e?i.push(o+"="+s[n]):r.push(n+"="+s[n])}}return{parsed:!0,sysCode:"rxt",weburl:`//tkt00t-a01.eztravel.com.tw${t}`.addQuery(r),applink:`//activity${t}`.addQuery(i),weight:{android:5605,ios:5605}};case!e&&/^\/(global|taiwan)\/(introduction|noIndex)\/.+/.test(t):var c=t.split("/").pop().split("-")[0];return-1!=c.toUpperCase().indexOf("TKN")||-1!=c.toUpperCase().indexOf("CTT")||-1!=c.toUpperCase().indexOf("CTA")?{parsed:!1}:{parsed:!0,sysCode:"activity",weburl:`//tkt00t-a01.eztravel.com.tw${t}`,applink:`//activity/detail/${c}`}}}},{domains:["^vsa00t-w01\\.eztravel\\.com\\.tw$","^visa$","^vsa00s-w01\\.eztravel\\.com\\.tw$","^flight\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(e||(t=t.replace(/^\/visa\//,"/")),!0){case/^(\/|\/index)?$/.test(t):case!e&&/^\/visa$/.test(t):return{parsed:!0,sysCode:"visa",weburl:"//vsa00t-w01.eztravel.com.tw/visa",applink:"//visa/index"};case/^\/.+/.test(t):return{parsed:!0,sysCode:"visa",weburl:"//vsa00t-w01.eztravel.com.tw/visa",applink:`//visa${t}`}}}},{domains:["^mem00t-w01\\.eztravel\\.com\\.tw$","^member$","^mem-ws01\\.eztravel\\.com\\.tw$","^member\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(!0){case/^(\/)?$/.test(t):case!e&&/^\/member(\/(dashboard)?)?$/.test(t):return{parsed:!0,sysCode:"mem",weburl:"//mem00t-w01.eztravel.com.tw/",applink:"//member/"};case!e&&/^\/member\/login(\/)?$/.test(t):return{parsed:!0,sysCode:"mem",weburl:"//mem00t-w01.eztravel.com.tw/",applink:"nonmember"==s.custType?"//member/orderPage":"//member/"};case e&&/^\/discount(\/)?$/.test(t):case!e&&/^\/member\/discount\/manage$/.test(t):return{parsed:!0,sysCode:"mem",weburl:"//mem00t-w01.eztravel.com.tw/member/discount/manage",applink:"//member/discount"};case e&&/^\/orderPage(\/)?$/.test(t):case!e&&/^\/member\/order\/orderInfo$/.test(t):return{parsed:!0,sysCode:"mem",weburl:"//mem00t-w01.eztravel.com.tw/member/order/orderInfo",applink:"//member/orderPage"}}}},{domains:["^www-t01\\.eztravel\\.com\\.tw$","^eztravel$","^www-ws01\\.eztravel\\.com\\.tw$","^www\\.eztravel\\.com\\.tw$"],curLength:2,getLinks:function({isEzApp:e,path:t,queryString:a,query:s}){switch(!0){case/^(\/)?$/.test(t):return{parsed:!0,sysCode:"home",weburl:"//www-t01.eztravel.com.tw/",applink:"//home/"};case/^\/information\/branches(\/)?$/.test(t):case/^\/branches(\/)?$/.test(t):return{parsed:!0,sysCode:"home",weburl:"//www-t01.eztravel.com.tw/branches/",applink:"//eztravel/information/branches/"};case/^\/promotion\/eztravel-app(\/)?$/.test(t):return{parsed:!0,sysCode:"event",weburl:`//www-t01.eztravel.com.tw${t}`.addQuery(a),applink:"//home/"}}}}]};"use strict";String.prototype.addQuery=function(e){let t="object"==typeof e&&Array.isArray(e)?e.join("&"):e;return this+(t.length>0?"?"+t:"")},function(e){const t=function(e){var t=-1==e.indexOf("?")?e.length:e.indexOf("?"),a=e.slice(0,t)||"",s=e.split("/").pop()||"";return/.htm(l)?$/.test(s)&&(a=a.replace(s,"")),a},a=function(e){var t={original:e,domain:"",path:"",query:{},queryString:"",isEzApp:!1,marketing:""};e&&(e=e.trim());var a=e.match(/#.*/);a&&a[0]&&(e=e.replace(a,""),t.anchor=a[0]);var s="unknown";if(/ez(it|ws)?app:\/\//.test(e)?s="app":/^(http(s)?:)?\/\//.test(e)?s="full":/^\//.test(e)&&(s="relative"),"unknown"==s)return t;"app"==s&&(t.isEzApp=!0);var r={utm_source:!0,utm_medium:!0,utm_campaign:!0,utm_term:!0,utm_content:!0,AllianceID:!0,SID:!0,OUID:!0,metaSource:!0,tag:!0},i=-1==e.indexOf("?")?e.length:e.indexOf("?"),n="relative"==s?e.slice(1,i)||"":e.slice(e.indexOf("://")+3,i)||"";n=n.replace(/^pkgfrn/,"vacation.eztravel.com.tw/pkgfrn");var o=["_ga","_gl","bigad","quintstars"];"app"==s&&o.push("key");let c=n.split("/");t.domain=c.splice(0,1),t.path="/"+c.join("/");var p=decodeURIComponent(e.slice(i+1));return p&&(p.split("&").forEach((function(e){var a=e.split("=");r[a[0]]?t.marketing+=(0==t.marketing.length?"":"&")+a[0]+"="+a[1]:-1===o.indexOf(a[0])&&(t.query.hasOwnProperty(a[0])?(Array.isArray(t.query[a[0]])||(t.query[a[0]]=[t.query[a[0]]]),a[1]&&t.query[a[0]].push(a[1])):a[1]&&(t.query[a[0]]=a[1]))})),t.queryString=Object.keys(t.query).map((function(e){return Array.isArray(t.query[e])?e+"="+t.query[e].join("&"+e+"="):e+"="+t.query[e]})).join("&")),t};e.ezlinkParser=function(e,s,r){return function({url:e,scheme:s,links:r,os:i,verWeight:n}){let o=a(e),{isEzApp:c,domain:p,path:l,query:d,queryString:u,original:m}=o;var w="",v="",g=void 0,h=!1,y=!1,f="",k=!1;let b=`${p}${l}`;switch(!0){case/eztravel\.onelink\.me/.test(b):g=!0,v=m,w=d.af_dp;break;case/^docs\.google\.com\/forms\/.+/.test(b):case/^forms\.gle\/.+/.test(b):g=!0,v=m,w=m;break;case c&&/^event\/webview\/.+/.test(b):b=b.replace(/event\/webview\//,"");case/^www\.eztravel\.com\.tw\/information\/announcement(\/)?$/.test(b):case/^hotel\.eztravel\.com\.tw\/oversea\/travel-hotel\/(.+)?/.test(b):case/^hotel\.eztravel\.com\.tw\/oversea\/promoPage\/.+/.test(b):case/^hotel\.eztravel\.com\.tw\/domestic\/promoPage\/.+/.test(b):case/^activity\.eztravel\.com\.tw\/global\/event\/bestprice$/.test(b):case/^activity\.eztravel\.com\.tw\/global\/theme\/(.+)?/.test(b):case/^activity\.eztravel\.com\.tw\/(taiwan|global)\/promoPage\/.+/.test(b):case/^vacation\.eztravel\.com\.tw\/packages\/promoPage\/.+/.test(b):case/^vacation\.eztravel\.com\.tw\/event\/\w+/.test(b):case/^vacation\.eztravel\.com\.tw\/event\/fit\/\w+/.test(b):case/^vacation\.eztravel\.com\.tw\/pkgfrn\/campaign\/\w+/.test(b):g=!0,f="event",v=`//${b.addQuery(u)}`,w=`//event/webview/${b.addQuery(u)}`;break;case/^eztravelnews\.blog\/.+/.test(b):case/^www\.eztravel\.com\.tw\/event\/.+/.test(b):case/^www\.eztravel\.com\.tw\/package2\/korea\/.+/.test(b):case/^www\.eztravel\.com\.tw\/hotel_taiwan\/event\/.+/.test(b):case/^www\.eztravel\.com\.tw\/global_hotel\/event\/.+/.test(b):case/^www\.eztravel\.com\.tw\/airticket\/event\/.+/.test(b):case/^(www|vacation|trip|hotel|flight|coupon|activity)\.eztravel\.com\.tw\/events\/.+/.test(b):case/^(www|vacation|trip|hotel|flight|coupon|activity)\.eztravel\.com\.tw\/activity\/.+/.test(b):f="event",y=t("https://"+b),v=`//${b.addQuery(u)}`,w=`//event/webview/${b.addQuery(u)}`;break;case/^www\.eztravelgo\.com\.tw\/.+/.test(b):g=!0,v=m,w=m}let z=0;for(;!g&&!y&&z<r.length;){let{domains:e,getLinks:t,curLength:a}=r[z],s=0;for(;void 0===g&&s<e.length;){let r=c&&s!==a-1||!c&&s==a-1,l=e[s];if(!r&&new RegExp(l).test(p)){let e=t(o)||{};e&&!1===e.parsed&&(g=!1),e.parsed&&(g=e.parsed,f=e.sysCode,v=e.weburl,w=e.applink,n&&e.weight&&n<e.weight[i]&&(h=e.weight[i]),s>a-1&&(k=!0))}s++}z++}return o.marketing&&o.marketing.length>0&&(w+=(-1!=w.indexOf("?")?"&":"?")+o.marketing,v+=(-1!=v.indexOf("?")?"&":"?")+o.marketing),"event"==f&&o.anchor&&(w+=o.anchor,v+=o.anchor),{appLink:/^\/\//.test(w)?`${s}:${w}`:w,webUrl:/^\/\//.test(v)?`https:${v}`:v,originalUrl:o.original,sysCode:f,parsed:g,support:h,isEvent:!!y,eventFolder:y,changeTag:k}}({url:e,scheme:ezAppVariable.scheme,links:ezAppVariable.links,os:s,verWeight:r})}}("undefined"==typeof exports?this:exports),window.appPlugin={setapplink:function(){var e=window.appPlugin.data();if(e.platform&&"wv"==e.platform){window.appPlugin.hideElements(document);var t=document.getElementsByClassName("imgLinkIcon");if(t[0])if((r=t[0].getAttribute("href"))&&""!=r)switch(!0){case/m\.eztravel\.com\.tw\/app\/share/.test(r):case/www\.eztravel\.com\.tw\/promotion\/eztravel-app/.test(r):case/apps\.apple\.com/.test(r):case/play\.google\.com/.test(r):t[0].style.setProperty("display","none","important")}for(var a=document.getElementsByTagName("a"),s=0;s<a.length;s++){var r,i=a[s];if((r=i.getAttribute("href"))&&""!=r)if(-1!==r.indexOf("m.eztravel.com.tw/app/share"))i.setAttribute("href","javascript:;");else{var n=window.ezlinkParser(r,e.os,e.app_weight);if(n.parsed){var o=encodeURIComponent(decodeURIComponent(n.appLink)),c=n.support?"//api?method=GET&url="+encodeURIComponent(`api/1/event/update?link=${o}`):"//view?link="+o;i.setAttribute("href",c)}}}}},isinapp:function(){var e=window.appPlugin.data();return!(!e.platform||"wv"!=e.platform)},data:function(){var e=document.cookie.split("; ").find((e=>e.startsWith("EZAPPWV=")));if(e){var t=e.replace("EZAPPWV=","").split("|"),a=t[0],s=t[1],r=s.split(".");return{platform:"wv",os:a,app_version:s,app_weight:p=1e3*parseInt(r[0])+100*parseInt(r[1])+parseInt(r[2])}}var i=window.navigator.userAgent||window.navigator.vendor||window.opera,n=window.navigator.userAgent.match(/EZAPPWEBVIEW (A|G) [1-9]\.[0-9]\.[0-9]{1,2}/);if(n){var o=n[0].split(" ")[1],c=n[0].split(" ")[2],p=(r=c.split("."),1e3*parseInt(r[0])+100*parseInt(r[1])+parseInt(r[2]));if("A"==o)return{platform:"wv",os:"ios",app_version:c,app_weight:p};if("G"==o)return{platform:"wv",os:"android",app_version:c,app_weight:p}}else if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4))){if(/windows phone/i.test(i))return{platform:"windows"};if(/android/i.test(i))return{platform:"android"};if(/iPad|iPhone|iPod/.test(i)&&!window.MSStream)return{platform:"ios"}}return{}},setshareurl:function(e){if(!e||!e.campaign)throw"(campaign) is required";var t="https://m.eztravel.com.tw/app/share",a="?campaign="+e.campaign;e.source&&(a+="&source="+e.source),e.medium&&(a+="&medium="+e.medium),e.AllianceID&&(a+="&AllianceID="+e.AllianceID),e.SID&&(a+="&SID="+e.SID),e.OUID&&(a+="&OUID="+e.OUID);for(var s=window.appPlugin.isinapp(),r=document.getElementsByClassName("appShare"),i=0;i<r.length;i++){var n=(l=r[i]).getAttribute("href");if(n&&""!=n){if(!s){var o=t+a,c=window.ezlinkParser(n);if(c.parsed)o+="&af_dp="+encodeURIComponent(decodeURIComponent(c.appLink));l.setAttribute("href",o),l.setAttribute("target","_blank")}}else s?l.style.setProperty("display","none","important"):(l.setAttribute("href",t+a),l.setAttribute("target","_blank"))}o=s?"//api?method=GET&url=api%2F1%2Factivity%2Fupdate%3Fcampaign%3D"+e.campaign:t+a+"&medium=appGame";var p=document.getElementsByClassName("appGame");for(i=0;i<p.length;i++){var l;(l=p[i]).setAttribute("href",o),l.setAttribute("target","_blank")}},finishPage:function(){try{var e=window.appPlugin.isinapp(),t=e?window.appPlugin.platform():"";"iOS"===t?webkit.messageHandlers.finishPage.postMessage(""):"Android"===t?window.ezAppPlugin.finishPage(""):(console.log("OS type not match, isInApp = "+e+", appPlatform = "+t),alert("系統忙碌中，請稍後再試！"))}catch(e){console.log("Get ez app plugin function failed: "+e),alert("系統忙碌中，請稍後再試！")}},hideElements:function(){if(window.appPlugin.isinapp()){var e=function(e,t){return new RegExp("(^|\\s+)"+t+"($|\\s+)").test(e.className)},t=document.getElementsByTagName("header"),a=document.getElementsByTagName("footer");t&&t[0]&&!e(t[0],"showInAPP")&&(t[0].style.display="none"),a&&a[0]&&!e(a[0],"showInAPP")&&(a[0].style.display="none");for(var s=document.getElementsByClassName("hideInAPP"),r=0;r<s.length;r++)s[r].style.display="none"}},platform:function(){var e=window.navigator.userAgent||window.navigator.vendor||window.opera;if(e.match(/EZAPPWEBVIEW A/gi))return"iOS";if(e.match(/EZAPPWEBVIEW G/gi))return"Android";if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))){if(/windows phone/i.test(e))return"Windows Phone";if(/android/i.test(e))return"Android";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return"iOS"}return""}},document.addEventListener("DOMContentLoaded",window.appPlugin.setapplink),"loading"==document.readyState&&window.appPlugin.hideElements(document);