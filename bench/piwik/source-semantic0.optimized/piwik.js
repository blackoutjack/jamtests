function v70(){function v69(){return A}function v68(i,L){return new t(i,L)}function v67(i,L){JAM.set(a,i,L,JAM.policy.p2)}function p(i){return"undefined"!==typeof i}function h(i){var v72="string"===typeof i;v72||(v72=i instanceof String);return v72}function G(){var L,N,M;L=0;for(M=L<arguments.length;M;)M=arguments[L],N=JAM.call(M.shift,M,[],JAM.policy.p3),h(N)&&(N=A[N]),JAM.call(N.apply,N,[A,M],JAM.policy.p3),L+=1,M=L<arguments.length}function J(N,M,L,i){N.addEventListener?JAM.call(N.addEventListener,
N,[M,L,i],JAM.policy.p3):N.attachEvent?JAM.call(N.attachEvent,N,["on"+M,L],JAM.policy.p3):JAM.set(N,"on"+M,L,JAM.policy.p2)}function E(M){var P,L="",O,N;for(O in a)N=Object.prototype.hasOwnProperty,JAM.call(N.call,N,[a,O],JAM.policy.p3)&&(N=a[O][M],"function"===typeof N&&(L+=JAM.call(N,null,[P],JAM.policy.p3)));return L}function H(){var i;E("unload");if(e){i=JAM.call(i.getTimeAlias,i,[],JAM.policy.p3)<e;do i=new Date,i=JAM.call(i.getTimeAlias,i,[],JAM.policy.p3)<e;while(i)}}function F(){var L;if(!k){k=
!0;E("load");L=0;for(var v84=L<u.length;v84;)JAM.call(u[L],u,[],JAM.policy.p3),L++,v84=L<u.length}return!0}function j(){function v6(){var v405=k;v405||(v405=JAM.call(/loaded|complete/.test,/loaded|complete/,[n.readyState],JAM.policy.p3));v405&&(clearInterval(L),F())}function i(){if(!k){try{var v87=n.documentElement;JAM.call(v87.doScroll,v87,["left"],JAM.policy.p3)}catch(M){JAM.call(setTimeout,null,[i,0]);return}F()}}function i$$0(){"complete"===n.readyState&&(JAM.call(n.detachEvent,n,["onreadystatechange",
i$$0],JAM.policy.p3),F())}function i$$1(){JAM.call(n.removeEventListener,n,["DOMContentLoaded",i$$1,!1],JAM.policy.p3);F()}var L;if(n.addEventListener)J(n,"DOMContentLoaded",i$$1);else if(n.attachEvent){JAM.call(n.attachEvent,n,["onreadystatechange",i$$0],JAM.policy.p3);var v407=n.documentElement.doScroll;v407&&(v407=w===w.top);v407&&i()}v407=/WebKit/;JAM.call(v407.test,v407,[c.userAgent],JAM.policy.p3)&&(L=JAM.call(setInterval,null,[v6,10]));J(w,"load",F,!1)}function q(){var i="";try{i=w.top.document.referrer}catch(M){if(w.parent)try{i=
w.parent.document.referrer}catch(L){i=""}}""===i&&(i=n.referrer);return i}function f(i){var M=/^([a-z]+):/;return i=(i=JAM.call(M.exec,M,[i],JAM.policy.p3))?i[1]:null}function b(i){var M=/^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/;return i=(M=JAM.call(M.exec,M,[i],JAM.policy.p3))?M[1]:i}function x(M,L){var P=/^(?:https?|ftp)(?::\/*(?:[^?]+)[?])([^#]+)/,P=JAM.call(P.exec,P,[M],JAM.policy.p3),N=new RegExp("(?:^|&)"+L+"=([^&]*)");return P=(P=P?JAM.call(N.exec,N,[P[1]],JAM.policy.p3):0)?JAM.call(v,
null,[P[1]],JAM.policy.p3):""}function I(ab){function ac(ai){var ah="",ag,W;ag=7;for(W=0<=ag;W;)W=ai>>>4*ag&15,ah+=JAM.call(W.toString,W,[16],JAM.policy.p3),ag--,W=0<=ag;return ah}function N(W,i){return W<<i|W>>>32-i}var Q,ae,ad,M=[],U=1732584193,S=4023233417,R=2562383102,P=271733878,O=3285377520,Y,X,V,af,T=[];ab=JAM.call(d,null,[JAM.call(g,null,[ab],JAM.policy.p3)],JAM.policy.p3);Q=ab.length;ae=0;for(ad=ae<Q-3;ad;)ad=JAM.call(ab.charCodeAt,ab,[ae],JAM.policy.p3)<<24|JAM.call(ab.charCodeAt,ab,[ae+
1],JAM.policy.p3)<<16|JAM.call(ab.charCodeAt,ab,[ae+2],JAM.policy.p3)<<8|JAM.call(ab.charCodeAt,ab,[ae+3],JAM.policy.p3),JAM.call(T.push,T,[ad],JAM.policy.p3),ae+=4,ad=ae<Q-3;switch(Q&3){case 0:ae=2147483648;break;case 1:ae=JAM.call(ab.charCodeAt,ab,[Q-1],JAM.policy.p3)<<24|8388608;break;case 2:ae=JAM.call(ab.charCodeAt,ab,[Q-2],JAM.policy.p3)<<24|JAM.call(ab.charCodeAt,ab,[Q-1],JAM.policy.p3)<<16|32768;break;case 3:ae=JAM.call(ab.charCodeAt,ab,[Q-3],JAM.policy.p3)<<24|JAM.call(ab.charCodeAt,ab,[Q-
2],JAM.policy.p3)<<16|JAM.call(ab.charCodeAt,ab,[Q-1],JAM.policy.p3)<<8|128}JAM.call(T.push,T,[ae],JAM.policy.p3);for(ae=14!==(T.length&15);ae;)JAM.call(T.push,T,[0],JAM.policy.p3),ae=14!==(T.length&15);JAM.call(T.push,T,[Q>>>29],JAM.policy.p3);JAM.call(T.push,T,[Q<<3&4294967295],JAM.policy.p3);Q=0;for(ae=Q<T.length;ae;){ae=0;for(ab=16>ae;ab;)JAM.set(M,ae,T[Q+ae],JAM.policy.p2),ae++,ab=16>ae;ae=16;for(ab=79>=ae;ab;)ab=M,ad=ae,Y=N(M[ae-3]^M[ae-8]^M[ae-14]^M[ae-16],1),ab[ad]=Y,ae++,ab=79>=ae;ab=U;ad=
S;Y=R;X=P;V=O;ae=0;for(af=19>=ae;af;)af=N(ab,5)+(ad&Y|~ad&X)+V+M[ae]+1518500249&4294967295,V=X,X=Y,Y=N(ad,30),ad=ab,ab=af,ae++,af=19>=ae;ae=20;for(af=39>=ae;af;)af=N(ab,5)+(ad^Y^X)+V+M[ae]+1859775393&4294967295,V=X,X=Y,Y=N(ad,30),ad=ab,ab=af,ae++,af=39>=ae;ae=40;for(af=59>=ae;af;)af=N(ab,5)+(ad&Y|ad&X|Y&X)+V+M[ae]+2400959708&4294967295,V=X,X=Y,Y=N(ad,30),ad=ab,ab=af,ae++,af=59>=ae;ae=60;for(af=79>=ae;af;)af=N(ab,5)+(ad^Y^X)+V+M[ae]+3395469782&4294967295,V=X,X=Y,Y=N(ad,30),ad=ab,ab=af,ae++,af=79>=
ae;U=U+ab&4294967295;S=S+ad&4294967295;R=R+Y&4294967295;P=P+X&4294967295;O=O+V&4294967295;Q+=16;ae=Q<T.length}af=ac(U)+ac(S)+ac(R)+ac(P)+ac(O);return JAM.call(af.toLowerCase,af,[],JAM.policy.p3)}function C(M,i,L){if("translate.googleusercontent.com"===M)""===L&&(L=i),i=x(i,"u"),M=b(i);else{var v686="cc.bingj.com"===M;v686||(v686="webcache.googleusercontent.com"===M);v686||(v686="74.6."===JAM.call(M.slice,M,[0,5],JAM.policy.p3));v686&&(i=n.links[0].href,M=b(i))}return[M,i,L]}function r(L){var i=L.length;
"."===JAM.call(L.charAt,L,[i-=1],JAM.policy.p3)&&(L=JAM.call(L.slice,L,[0,i],JAM.policy.p3));"*."===JAM.call(L.slice,L,[0,2],JAM.policy.p3)&&(L=JAM.call(L.slice,L,[1],JAM.policy.p3));return L}function K(L){if(!h(L)){(L=L.text)||(L="");var i=JAM.call(n.getElementsByTagName,n,["title"],JAM.policy.p3),v446=i;v446&&(v446=p(i[0]));v446&&(L=i[0].text)}return L}function s(O,S){var U="Piwik_Overlay",R=n.referrer,i=O,i=JAM.call(i.substring,i,[0,i.length-9],JAM.policy.p3),v448;v448="http://"===JAM.call(i.substring,
i,[0,7],JAM.policy.p3)?7:8;JAM.call(i.substring,i,[v448,i.length],JAM.policy.p3);v448="http://"===JAM.call(R.substring,R,[0,7],JAM.policy.p3)?7:8;JAM.call(R.substring,R,[v448,R.length],JAM.policy.p3);if(JAM.call(R.substring,R,[0,i.length],JAM.policy.p3)===i&&(i=new RegExp("^"+i+"index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$"),R=JAM.call(R.match,R,[i],JAM.policy.p3))){i=R[1];if(parseInt(i,10)!==S)return!1;i=R[2];R=R[3];window.name=U+"###"+i+"###"+
R}R=w.name;R=JAM.call(R.split,R,["###"],JAM.policy.p3);(i=3===R.length)&&(i=R[0]===U);return i}function B(M,S){function v7(){var v456="loaded"===this.readyState;v456||(v456="complete"===this.readyState);v456&&O()}function O(){L||(L=!0,JAM.call(Piwik_Overlay_Client.initialize,Piwik_Overlay_Client,[R,S,N,i],JAM.policy.p3))}var v162=window.name,v162=JAM.call(v162.split,v162,["###"],JAM.policy.p3),R=JAM.call(M.substring,M,[0,M.length-9],JAM.policy.p3),N=v162[1],i=v162[2],L=!1,v162=JAM.call(document.createElement,
document,["script"],JAM.policy.p3);v162.type="text/javascript";JAM.set(v162,"onreadystatechange",v7);JAM.set(v162,"onload",O);v162.src=R+"plugins/Overlay/client/client.js?v=1";var P=JAM.call(document.getElementsByTagName,document,["head"],JAM.policy.p3)[0];JAM.call(P.appendChild,P,[v162],JAM.policy.p3)}function t(af,aE){function v66(be){p(be)&&aV("",be,"","","","")}function v65(be,bi,bh,bg,bf,bj){var v458=String(be).length;v458&&(v458=p(bi));v458&&aV(be,bi,bh,bg,bf,bj)}function v64(bi,be,bg,bf,bh){bi.length&&
JAM.set(aQ,bi,[bi,be,bg,bf,bh],JAM.policy.p2)}function v63(bh,be,bg,bf){var v459=!p(bg);v459||(v459=!bg.length);v459?bg="":bg instanceof Array&&(bg=JAM.call(JSON2.stringify,JSON2,[bg],JAM.policy.p3));aA[5]=["_pkc",bg];if(bg=p(bf))bg=String(bf).length;bg&&(aA[2]=["_pkp",bf]);(bf=!p(bh))||(bf=!bh.length);bf&&((bf=!p(be))||(bf=!be.length));if(!bf){if(bf=p(bh))bf=bh.length;bf&&(aA[3]=["_pks",bh]);(bh=!p(be))||(bh=!be.length);bh&&(be="");aA[4]=["_pkn",be]}}function v62(be,bg,bf$$0){function v61(){var bh=
bg,bf=bf$$0,v708="search="+JAM.call(g,null,[be],JAM.policy.p3),bh=bh?"&search_cat="+JAM.call(g,null,[bh],JAM.policy.p3):"",v708=v708+bh,bf=p(bf)?"&search_count="+bf:"",bf=am(v708+bf,void 0,"sitesearch");aq(bf,aF)}ai(v61)}function v60(be,bf){function v59(){ay(be,bf)}function v58(){B(N,a1)}s(N,a1)?ai(v58):ai(v59)}function v57(bf,be,bg){function v56(){aZ(bf,be,bg)}ai(v56)}function v55(be,bg,bf){function v54(){var v466="idgoal="+be,v711;v711=bg?"&revenue="+bg:"";v466=am(v466+v711,bf,"goal");aq(v466,aF)}
ai(v54)}function v53(be){ar=be}function v52(be){"file:"===w.location.protocol&&(w.location=be)}function v51(){w.location!==w.top.location&&(w.top.location=w.location)}function v50(bg,bf){var be=new Date;S=JAM.call(be.getTime,be,[],JAM.policy.p3)+1E3*bg;ag=1E3*bf}function v49(be){function v48(){ax(be)}k?ax(be):JAM.call(u.push,u,[v48],JAM.policy.p3)}function v47(bf,be){aO(bf,be)}function v46(bf){var v183=c.doNotTrack;v183||(v183=c.msDoNotTrack);bf&&((bf="yes"===v183)||(bf="1"===v183));(a4=bf)&&JAM.call(this.disableCookies,
this,[],JAM.policy.p3)}function v45(){V=!0;introspect(JAM.policy.p2)a2.cookie="0"}function v44(be){au=be}function v43(be){aw=1E3*be}function v42(be){ad=1E3*be}function v41(be){ac=1E3*be}function v40(be){ba=be;aC()}function v39(be){X=r(be);aC()}function v38(be){a9=be;Q=Z()}function v37(be){T=be}function v36(be){ak=be=h(be)?[be]:be}function v35(be){ap=be=h(be)?[be]:be}function v34(be){ae=be=h(be)?[be]:be}function v33(be){az=be=h(be)?[be]:be}function v32(be){al=be}function v31(be){JSCompiler_inline_label_aW_20:{var bg=
bb,bh=f(be),bf;bh?av=be:"/"===JAM.call(be.slice,be,[0,1],JAM.policy.p3)?av=f(bg)+"://"+b(bg)+be:(bg=a6(bg),0<=(bf=JAM.call(bg.indexOf,bg,["?"],JAM.policy.p3))&&(bg=JAM.call(bg.slice,bg,[0,bf],JAM.policy.p3)),(bf=JAM.call(bg.lastIndexOf,bg,["/"],JAM.policy.p3))!==bg.length-1&&(bg=JAM.call(bg.slice,bg,[0,bf+1],JAM.policy.p3)),av=bg+be)}}function v30(be){aK=be}function v29(be){aI=be||"GET"}function v28(be){R=be=h(be)?[be]:be}function v27(be){aG=be=h(be)?[be]:be;JAM.call(aG.push,aG,[aX],JAM.policy.p3)}
function v26(be){an+="|"+be}function v25(be){an=be}function v24(be){aF=be}function v23(be,bf){JAM.call(this.getCustomVariable,this,[be,bf],JAM.policy.p3)&&JAM.call(this.setCustomVariable,this,[be,"","",bf],JAM.policy.p3)}function v22(bf,bg){var be;p(bg)||(bg="visit");var v487="page"===bg;v487||(v487=3===bg);v487?be=aA[bf]:((v487="visit"===bg)||(v487=2===bg),v487&&(!1===Q&&(Q=Z()),be=Q[bf]));v487=!p(be);v487||(v487=be)&&(v487=""===be[0]);return v487?!1:be}function v21(bf,be,bi,bg){p(bg)||(bg="visit");
if(0<bf){var v722=p(be);v722&&(v722=!h(be));be=v722?String(be):be;(v722=p(bi))&&(v722=!h(bi));bi=v722?String(bi):bi;be=[JAM.call(be.slice,be,[0,a5],JAM.policy.p3),JAM.call(bi.slice,bi,[0,a5],JAM.policy.p3)];(bi="visit"===bg)||(bi=2===bg);bi?(!1===Q&&(Q=Z()),JAM.set(Q,bf,be,JAM.policy.p2)):((bi="page"===bg)||(bi=3===bg),bi&&JAM.set(aA,bf,be,JAM.policy.p2))}}function v20(){return U}function v19(be,bf){"object"===typeof be?U=be:(U||(U=[]),JAM.set(U,be,bf,JAM.policy.p2))}function v18(be){a1=be}function v17(be){N=
be}function v16(){return i()[3]}function v15(){return i()[2]}function v14(){return i()[1]}function v13(){return i()[0]}function v12(){return i()}function v11(){return L()}function v10(){return L()[1]}function aS(bk,bh,bg,bj,bf,bi){if(!V){var be;bg&&(be=new Date,JAM.call(be.setTime,be,[JAM.call(be.getTime,be,[],JAM.policy.p3)+bg],JAM.policy.p3));var v219=n;bk=bk+"="+JAM.call(g,null,[bh],JAM.policy.p3);bg=bg?";expires="+JAM.call(be.toGMTString,be,[],JAM.policy.p3):"";bj=bk+bg+";path="+(bj||"/");bf=
bf?";domain="+bf:"";bf=bj+bf;bi=bi?";secure":"";introspect(JAM.policy.p2)v219.cookie=bf+bi}}function ab(bg){if(V)return 0;bg=new RegExp("(^|;)[ ]*"+bg+"=([^;]*)");return bg=(bg=JAM.call(bg.exec,bg,[n.cookie],JAM.policy.p3))?JAM.call(v,null,[bg[2]],JAM.policy.p3):0}function a6(be){var bf;return T?(bf=/#.*/,JAM.call(be.replace,be,[bf,""],JAM.policy.p3)):be}function aH(bh){var bf,be,bg;bf=0;for(be=bf<aG.length;be;){be=aG[bf];be=r(JAM.call(be.toLowerCase,be,[],JAM.policy.p3));if(bh===be)return!0;if("."===
JAM.call(be.slice,be,[0,1],JAM.policy.p3)){if(bh===JAM.call(be.slice,be,[1],JAM.policy.p3))return!0;bg=bh.length-be.length;var v505=0<bg;v505&&(v505=JAM.call(bh.slice,bh,[bg],JAM.policy.p3)===be);if(v505)return!0}bf++;be=bf<aG.length}return!1}function bd(be){function v8(){}var bf=new Image(1,1);JAM.set(bf,"onload",v8);var v730=N,v873;v873=0>JAM.call(N.indexOf,N,["?"],JAM.policy.p3)?"?":"&";bf.src=v730+v873+be}function aT(be){function v9(){var v508=4===this.readyState;v508&&(v508=200!==this.status);
v508&&bd(be)}try{var v233;if(w.XMLHttpRequest)v233=new w.XMLHttpRequest;else{var v510;v233=v510=w.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null}JAM.call(v233.open,v233,["POST",N,!0],JAM.policy.p3);JAM.set(v233,"onreadystatechange",v9);JAM.call(v233.setRequestHeader,v233,["Content-Type","application/x-www-form-urlencoded; charset=UTF-8"],JAM.policy.p3);JAM.call(v233.send,v233,[be],JAM.policy.p3)}catch(bf){bd(be)}}function aq(bg,bf){var be=new Date;a4||("POST"===aI?aT(bg):bd(bg),e=JAM.call(be.getTime,
be,[],JAM.policy.p3)+bf)}function aR(be){return a9+be+"."+a1+"."+aM}function P(){if(V)return"0";if(!p(c.cookieEnabled)){var be=aR("testcookie");aS(be,"1");return be="1"===ab(be)?"1":"0"}return be=c.cookieEnabled?"1":"0"}function aC(){var v241=JAM.call(ao,null,[(X||aX)+(ba||"/")],JAM.policy.p3);aM=JAM.call(v241.slice,v241,[0,4],JAM.policy.p3)}function Z(){var bf=aR("cvar"),bf=ab(bf);return bf.length&&(bf=JAM.call(JSON2.parse,JSON2,[bf],JAM.policy.p3),"object"===typeof bf)?bf:{}}function a0(){var be=
new Date;aJ=JAM.call(be.getTime,be,[],JAM.policy.p3)}function L(){var bf=new Date,bf=JAM.call(Math.round,Math,[JAM.call(bf.getTime,bf,[],JAM.policy.p3)/1E3],JAM.policy.p3),bh=ab(aR("id"));if(bh)bf=JAM.call(bh.split,bh,["."],JAM.policy.p3),JAM.call(bf.unshift,bf,["0"],JAM.policy.p3);else{if(!at){(bh=c.userAgent)||(bh="");var v980=c.platform;v980||(v980="");bh=JAM.call(ao,null,[bh+v980+JAM.call(JSON2.stringify,JSON2,[a2],JAM.policy.p3)+bf],JAM.policy.p3);at=JAM.call(bh.slice,bh,[0,16],JAM.policy.p3)}bf=
["1",at,bf,0,bf,"",""]}return bf}function i(){var be=ab(aR("ref"));if(be.length)try{if(be=JAM.call(JSON2.parse,JSON2,[be],JAM.policy.p3),"object"===typeof be)return be}catch(bf){}return["","",0,""]}function am(bg,bF,bG,bi){var bD,bf=new Date,bo=JAM.call(Math.round,Math,[JAM.call(bf.getTime,bf,[],JAM.policy.p3)/1E3],JAM.policy.p3),bI,bE,bk,bw,bA,bn,by,bl,bC,bj=1024,bJ,br,bz=Q;bn=aR("id");var bp=aR("ses"),bq=aR("ref"),bK=aR("cvar");by=L();br=ab(bp);bJ=i();var bH=av||bb,bm,be;V&&(V=!1,aS(bn,"",-86400,
ba,X),aS(bp,"",-86400,ba,X),aS(bK,"",-86400,ba,X),aS(bq,"",-86400,ba,X),V=!0);if(a4)return"";bI=by[0];bE=by[1];bw=by[2];bk=by[3];bA=by[4];bn=by[5];p(by[6])||(by[6]="");by=by[6];p(bi)||(bi="");var v254=document.characterSet;v254||(v254=document.charset);(bC=!v254)||(bC="utf-8"===JAM.call(v254.toLowerCase,v254,[],JAM.policy.p3));bC&&(v254=null);bm=bJ[0];be=bJ[1];bl=bJ[2];bC=bJ[3];if(!br){bk++;bn=bA;(br=!au)||(br=!bm.length);if(br){for(bD in ap)if(br=Object.prototype.hasOwnProperty,JAM.call(br.call,
br,[ap,bD],JAM.policy.p3)&&(bm=x(bH,ap[bD]),bm.length))break;for(bD in ak)if(br=Object.prototype.hasOwnProperty,JAM.call(br.call,br,[ak,bD],JAM.policy.p3)&&(be=x(bH,ak[bD]),be.length))break}bJ=b(aK);br=bC.length?b(bC):"";(bA=bJ.length)&&(bA=!aH(bJ));if(bJ=bA)(bJ=!au)||(bJ=!br.length),bJ||(bJ=aH(br));bJ&&(bC=aK);br=bC.length;br||(br=bm.length);br&&(bl=bo,bJ=[bm,be,bl,a6(JAM.call(bC.slice,bC,[0,bj],JAM.policy.p3))],aS(bq,JAM.call(JSON2.stringify,JSON2,[bJ],JAM.policy.p3),aw,ba,X,aa))}bq="&idsite="+
a1+"&rec=1&r=";br=String(JAM.call(Math.random,Math,[],JAM.policy.p3));bf=bq+JAM.call(br.slice,br,[2,8],JAM.policy.p3)+"&h="+JAM.call(bf.getHours,bf,[],JAM.policy.p3)+"&m="+JAM.call(bf.getMinutes,bf,[],JAM.policy.p3)+"&s="+JAM.call(bf.getSeconds,bf,[],JAM.policy.p3)+"&url="+JAM.call(g,null,[a6(bH)],JAM.policy.p3);bH=aK.length?"&urlref="+JAM.call(g,null,[a6(aK)],JAM.policy.p3):"";bI=bf+bH+"&_id="+bE+"&_idts="+bw+"&_idvc="+bk+"&_idn="+bI;bf=bm.length?"&_rcn="+JAM.call(g,null,[bm],JAM.policy.p3):"";bI+=
bf;be=be.length?"&_rck="+JAM.call(g,null,[be],JAM.policy.p3):"";bl=bI+be+"&_refts="+bl+"&_viewts="+bn;bI=String(by).length?"&_ects="+by:"";bl+=bI;bj=String(bC).length?"&_ref="+JAM.call(g,null,[a6(JAM.call(bC.slice,bC,[0,bj],JAM.policy.p3))],JAM.policy.p3):"";bj=bl+bj;v254=v254?"&cs="+JAM.call(g,null,[v254],JAM.policy.p3):"";bg+=bj+v254;bj=JAM.call(JSON2.stringify,JSON2,[aA],JAM.policy.p3);2<bj.length&&(bg+="&cvar="+JAM.call(g,null,[bj],JAM.policy.p3));for(bD in a2)bj=Object.prototype.hasOwnProperty,
JAM.call(bj.call,bj,[a2,bD],JAM.policy.p3)&&(bg+="&"+bD+"="+a2[bD]);bF?bg+="&data="+JAM.call(g,null,[JAM.call(JSON2.stringify,JSON2,[bF],JAM.policy.p3)],JAM.policy.p3):U&&(bg+="&data="+JAM.call(g,null,[JAM.call(JSON2.stringify,JSON2,[U],JAM.policy.p3)],JAM.policy.p3));if(Q){bF=JAM.call(JSON2.stringify,JSON2,[Q],JAM.policy.p3);2<bF.length&&(bg+="&_cvar="+JAM.call(g,null,[bF],JAM.policy.p3));for(bD in bz)bF=Object.prototype.hasOwnProperty,JAM.call(bF.call,bF,[bz,bD],JAM.policy.p3)&&((bF=""===Q[bD][0])||
(bF=""===Q[bD][1]),bF&&delete Q[bD]);aS(bK,JAM.call(JSON2.stringify,JSON2,[Q],JAM.policy.p3),ad,ba,X,aa)}bD=bE;if(bz=p(bi))bz=String(bi).length;bi=bz?bi:by;aS(aR("id"),bD+"."+bw+"."+bk+"."+bo+"."+bn+"."+bi,ac,ba,X,aa);aS(bp,"*",ad,ba,X,aa);return bg+=E(bG)}function aV(bh,bg,bl,bi,be,bo){var bj="idgoal=0",bk,bf=new Date,bm=[],bn;String(bh).length&&(bj+="&ec_id="+JAM.call(g,null,[bh],JAM.policy.p3),bk=JAM.call(Math.round,Math,[JAM.call(bf.getTime,bf,[],JAM.policy.p3)/1E3],JAM.policy.p3));bj+="&revenue="+
bg;String(bl).length&&(bj+="&ec_st="+bl);String(bi).length&&(bj+="&ec_tx="+bi);String(be).length&&(bj+="&ec_sh="+be);String(bo).length&&(bj+="&ec_dt="+bo);if(aQ){for(bn in aQ)bh=Object.prototype.hasOwnProperty,JAM.call(bh.call,bh,[aQ,bn],JAM.policy.p3)&&(p(aQ[bn][1])||(aQ[bn][1]=""),p(aQ[bn][2])||(aQ[bn][2]=""),(bh=!p(aQ[bn][3]))||(bh=0===String(aQ[bn][3]).length),bh&&(aQ[bn][3]=0),(bh=!p(aQ[bn][4]))||(bh=0===String(aQ[bn][4]).length),bh&&(aQ[bn][4]=1),JAM.call(bm.push,bm,[aQ[bn]],JAM.policy.p3));
bj+="&ec_items="+JAM.call(g,null,[JAM.call(JSON2.stringify,JSON2,[bm],JAM.policy.p3)],JAM.policy.p3)}bj=am(bj,U,"ecommerce",bk);aq(bj,aF)}function ay(bh,bi){function bf(){var bj=new Date;aJ+ag>JAM.call(bj.getTime,bj,[],JAM.policy.p3)&&(S<JAM.call(bj.getTime,bj,[],JAM.policy.p3)&&(bj=am("ping=1",bi,"ping"),aq(bj,aF)),JAM.call(setTimeout,null,[bf,ag]))}var be=new Date,bg=am("action_name="+JAM.call(g,null,[K(bh||al)],JAM.policy.p3),bi,"log");aq(bg,aF);(bg=S&&ag)&&(bg=!aL);bg&&(aL=!0,J(n,"click",a0),
J(n,"mouseup",a0),J(n,"mousedown",a0),J(n,"mousemove",a0),J(n,"mousewheel",a0),J(w,"DOMMouseScroll",a0),J(w,"scroll",a0),J(n,"keypress",a0),J(n,"keydown",a0),J(n,"keyup",a0),J(w,"resize",a0),J(w,"focus",a0),J(w,"blur",a0),aJ=JAM.call(be.getTime,be,[],JAM.policy.p3),JAM.call(setTimeout,null,[bf,ag]))}function aZ(bf,be,bh){bf=am(be+"="+JAM.call(g,null,[a6(bf)],JAM.policy.p3),bh,"link");aq(bf,aF)}function a3(bf,be){if(""!==bf){var v779=JAM.call(be.charAt,be,[0],JAM.policy.p3);return bf+JAM.call(v779.toUpperCase,
v779,[],JAM.policy.p3)+JAM.call(be.slice,be,[1],JAM.policy.p3)}return be}function ai(bj){function bf(){JAM.call(n.removeEventListener,n,[bg+"visibilitychange",bf,!1],JAM.policy.p3);JAM.call(bj,null,[],JAM.policy.p3)}var bi,be,bh=["","webkit","ms","moz"],bg;if(!ar){be=0;for(var v305=be<bh.length;v305;){bg=bh[be];v305=Object.prototype.hasOwnProperty;if(JAM.call(v305.call,v305,[n,a3(bg,"hidden")],JAM.policy.p3)){"prerender"===n[a3(bg,"visibilityState")]&&(bi=!0);break}be++;v305=be<bh.length}}bi?J(n,
bg+"visibilitychange",bf):JAM.call(bj,null,[],JAM.policy.p3)}function ah(bg,bf){var bh,be="(^| )(piwik[_-]"+bf;if(bg){bh=0;for(var v308=bh<bg.length;v308;)be+="|"+bg[bh],bh++,v308=bh<bg.length}be+=")( |$)";return new RegExp(be)}function aP(bj){var bh,bf;(bf=null!==(bh=bj.parentNode))&&(bf=p(bh));if(bf){bf=bj.tagName;var v785="A"!==(bf=JAM.call(bf.toUpperCase,bf,[],JAM.policy.p3));v785&&(v785="AREA"!==bf);bf=v785}for(;bf;)bj=bh,(bf=null!==(bh=bj.parentNode))&&(bf=p(bh)),bf&&(bf=bj.tagName,(v785="A"!==
(bf=JAM.call(bf.toUpperCase,bf,[],JAM.policy.p3)))&&(v785="AREA"!==bf),bf=v785);if(p(bj.href)&&((bh=bj.hostname)||(bh=b(bj.href)),bf=JAM.call(bh.toLowerCase,bh,[],JAM.policy.p3),v785=bj.href,bh=JAM.call(v785.replace,v785,[bh,bf],JAM.policy.p3),v785=/^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i,!JAM.call(v785.test,v785,[bh],JAM.policy.p3))){v785=bj.className;bj=bh;bf=aH(bf);var bg=ah(az,"download"),bf$$0=ah(ae,"link"),bj$$0=new RegExp("\\.("+an+")([?&#]|$)","i");JAM.call(bf$$0.test,
bf$$0,[v785],JAM.policy.p3)?bj="link":((v785=JAM.call(bg.test,bg,[v785],JAM.policy.p3))||(v785=JAM.call(bj$$0.test,bj$$0,[bj],JAM.policy.p3)),bj=v785?"download":bf?0:"link");bj&&(bh=JAM.call(d,null,[bh],JAM.policy.p3),aZ(bh,bj))}}function bc(be){var bf,bg;bf=be;bf||(bf=w.event);be=bf;bf=be.which;bf||(bf=be.button);bg=be.target;bg||(bg=be.srcElement);"click"===be.type?bg&&aP(bg):"mousedown"===be.type?((be=1===bf)||(be=2===bf),be&&(be=bg),be?(aB=bf,Y=bg):aB=Y=null):"mouseup"===be.type&&((bf=bf===aB)&&
(bf=bg===Y),bf&&aP(bg),aB=Y=null)}function aO(bf,be){be?(J(bf,"mouseup",bc,!1),J(bf,"mousedown",bc,!1)):J(bf,"click",bc,!1)}function ax(bf){if(!aN){aN=!0;var bg,be=ah(R,"ignore"),bh=n.links;if(bh){bg=0;for(var v326=bg<bh.length;v326;)JAM.call(be.test,be,[bh[bg].className],JAM.policy.p3)||aO(bh[bg],bf),bg++,v326=bg<bh.length}}}function a7(){var bf,bg,bh={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",
java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},v328;v328=/Mac OS X.*Safari\//;JAM.call(v328.test,v328,[c.userAgent],JAM.policy.p3)?(v328=w.devicePixelRatio)||(v328=1):v328=1;bg=/MSIE/;if(!JAM.call(bg.test,bg,[c.userAgent],JAM.policy.p3)){if(bg=c.mimeTypes)bg=c.mimeTypes.length;if(bg)for(bf in bh)if(bg=Object.prototype.hasOwnProperty,JAM.call(bg.call,bg,[bh,bf],JAM.policy.p3)){var v799=bg=c.mimeTypes[bh[bf]];v799&&(v799=bg.enabledPlugin);bg=v799?"1":
"0";JAM.set(a2,bf,bg,JAM.policy.p2)}(bf="unknown"!==typeof navigator.javaEnabled)&&(bf=p(c.javaEnabled));bf&&(bf=JAM.call(c.javaEnabled,c,[],JAM.policy.p3));bf&&(a2.java="1");"function"===typeof w.GearsFactory&&(a2.gears="1");bf=a2;bh=P();introspect(JAM.policy.p2)bf.cookie=bh}a2.res=z.width*v328+"x"+z.height*v328}var O=C(n.domain,w.location.href,q()),aX=r(O[0]),bb=O[1],aK=O[2],aI="GET",N=af||"",a1=aE||"",av,al=n.title,an="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",
aG=[aX],R=[],az=[],ae=[],aF=500,S,ag,T,U,ap=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],ak=["pk_kwd","piwik_kwd","utm_term"],a9="_pk_",X,ba,V=!1,a4,ar,au,ac=63072E6,ad=18E5,aw=15768E6,aa="https"===n.location.protocol,Q=!1,aA={},a5=200,aQ={},a2={},aN=!1,aL=!1,aJ,aB,Y,ao=I,aM,at;a7();aC();return{getVisitorId:v10,getVisitorInfo:v11,getAttributionInfo:v12,getAttributionCampaignName:v13,getAttributionCampaignKeyword:v14,getAttributionReferrerTimestamp:v15,getAttributionReferrerUrl:v16,
setTrackerUrl:v17,setSiteId:v18,setCustomData:v19,getCustomData:v20,setCustomVariable:v21,getCustomVariable:v22,deleteCustomVariable:v23,setLinkTrackingTimer:v24,setDownloadExtensions:v25,addDownloadExtensions:v26,setDomains:v27,setIgnoreClasses:v28,setRequestMethod:v29,setReferrerUrl:v30,setCustomUrl:v31,setDocumentTitle:v32,setDownloadClasses:v33,setLinkClasses:v34,setCampaignNameKey:v35,setCampaignKeywordKey:v36,discardHashTag:v37,setCookieNamePrefix:v38,setCookieDomain:v39,setCookiePath:v40,setVisitorCookieTimeout:v41,
setSessionCookieTimeout:v42,setReferralCookieTimeout:v43,setConversionAttributionFirstReferrer:v44,disableCookies:v45,setDoNotTrack:v46,addListener:v47,enableLinkTracking:v49,setHeartBeatTimer:v50,killFrame:v51,redirectFile:v52,setCountPreRendered:v53,trackGoal:v55,trackLink:v57,trackPageView:v60,trackSiteSearch:v62,setEcommerceView:v63,addEcommerceItem:v64,trackEcommerceOrder:v65,trackEcommerceCartUpdate:v66}}function o(){return{push:G}}var e,a={},n=document,c=navigator,z=screen,w=window,k=!1,u=
[],g=w.encodeURIComponent,v=w.decodeURIComponent,d=unescape,A,D;J(w,"beforeunload",H,!1);j();Date.prototype.getTimeAlias=Date.prototype.getTime;A=new t;D=0;for(var v347=D<_paq.length;v347;)G(_paq[D]),D++,v347=D<_paq.length;_paq=new o;return{addPlugin:v67,getTracker:v68,getAsyncTracker:v69}}
function v5(){function v4(o,f){function v3(p){p=JAM.call(p.charCodeAt,p,[0],JAM.policy.p3);p="0000"+JAM.call(p.toString,p,[16],JAM.policy.p3);return"\\u"+JAM.call(p.slice,p,[-4],JAM.policy.p3)}function m(s,r){var q,p,t=s[r];(p=t)&&(p="object"===typeof t);if(p)for(q in t)p=Object.prototype.hasOwnProperty,JAM.call(p.call,p,[t,q],JAM.policy.p3)&&(p=m(t,q),void 0!==p?JAM.set(t,q,p,JAM.policy.p2):delete t[q]);return JAM.call(f.call,f,[s,r,t],JAM.policy.p3)}var n;o=String(o);c.lastIndex=0;JAM.call(c.test,
c,[o],JAM.policy.p3)&&(o=JAM.call(o.replace,o,[c,v3],JAM.policy.p3));n=/^[\],:{}\s]*$/;var v908=JAM.call(o.replace,o,[/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@"],JAM.policy.p3),v908=JAM.call(v908.replace,v908,[/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]"],JAM.policy.p3);if(JAM.call(n.test,n,[JAM.call(v908.replace,v908,[/(?:^|:|,)(?:\s*\[)+/g,""],JAM.policy.p3)],JAM.policy.p3))return n="("+o+")",n=JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { "+n+" }"):JAM.call(eval,
null,[n]),n="function"===typeof f?m({"":n},""):n;throw new SyntaxError("JSON.parse");}function v2(o,m,n){var f;b=j="";if("number"===typeof n){f=0;for(var v356=f<n;v356;)b+=" ",f+=1,v356=f<n}else"string"===typeof n&&(b=n);(n=h=m)&&(n="function"!==typeof m);n&&((n="object"!==typeof m)||(n="number"!==typeof m.length));if(n)throw Error("JSON.stringify");return g("",{"":o})}function d(f){return f=10>f?"0"+f:f}function a(f){function v1(m){var n=k[m];"string"===typeof n?m=n:(m=JAM.call(m.charCodeAt,m,[0],
JAM.policy.p3),m="0000"+JAM.call(m.toString,m,[16],JAM.policy.p3),m="\\u"+JAM.call(m.slice,m,[-4],JAM.policy.p3));return m}i.lastIndex=0;return f=JAM.call(i.test,i,[f],JAM.policy.p3)?'"'+JAM.call(f.replace,f,[i,v1],JAM.policy.p3)+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];(o=r)&&(o="object"===typeof r);if(o)JSCompiler_inline_label_l_9:o=s,n=Object.prototype.toString,n=JAM.call(n.apply,n,[r],JAM.policy.p3),"[object Date]"===n?r=isFinite(JAM.call(r.valueOf,r,[],JAM.policy.p3))?JAM.call(r.getUTCFullYear,
r,[],JAM.policy.p3)+"-"+d(JAM.call(r.getUTCMonth,r,[],JAM.policy.p3)+1)+"-"+d(JAM.call(r.getUTCDate,r,[],JAM.policy.p3))+"T"+d(JAM.call(r.getUTCHours,r,[],JAM.policy.p3))+":"+d(JAM.call(r.getUTCMinutes,r,[],JAM.policy.p3))+":"+d(JAM.call(r.getUTCSeconds,r,[],JAM.policy.p3))+"Z":null:((f="[object String]"===n)||(f="[object Number]"===n),f||(f="[object Boolean]"===n),f?r=JAM.call(r.valueOf,r,[],JAM.policy.p3):((n="[object Array]"!==n)&&(n="function"===typeof r.toJSON),r=n?JAM.call(r.toJSON,r,[o],JAM.policy.p3):
r));"function"===typeof h&&(r=JAM.call(h.call,h,[p,s,r],JAM.policy.p3));switch(typeof r){case "string":return a(r);case "number":return q=isFinite(r)?String(r):"null";case "boolean":case "null":return String(r);case "object":if(!r)return"null";j+=b;o=[];n=Object.prototype.toString;if("[object Array]"===JAM.call(n.apply,n,[r],JAM.policy.p3)){f=r.length;n=0;for(m=n<f;m;)(m=g(n,r))||(m="null"),JAM.set(o,n,m,JAM.policy.p2),n+=1,m=n<f;t=m=0===o.length?"[]":j?"[\n"+j+JAM.call(o.join,o,[",\n"+j],JAM.policy.p3)+
"\n"+q+"]":"["+JAM.call(o.join,o,[","],JAM.policy.p3)+"]";j=q;return t}(n=h)&&(n="object"===typeof h);if(n)for(f=h.length,n=0,m=n<f;m;){if("string"===typeof h[n]&&(m=h[n],t=g(m,r))){m=a(m);var v922;v922=j?": ":":";JAM.call(o.push,o,[m+v922+t],JAM.policy.p3)}n+=1;m=n<f}else for(m in r)if(n=Object.prototype.hasOwnProperty,JAM.call(n.call,n,[r,m],JAM.policy.p3)&&(t=g(m,r)))n=a(m),f=j?": ":":",JAM.call(o.push,o,[n+f+t],JAM.policy.p3);t=m=0===o.length?"{}":j?"{\n"+j+JAM.call(o.join,o,[",\n"+j],JAM.policy.p3)+
"\n"+q+"}":"{"+JAM.call(o.join,o,[","],JAM.policy.p3)+"}";j=q;return t}}var c=/[\x00\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e='\\\\\\"\x00-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;"function"!==typeof JSON2.stringify&&(JSON2.stringify=v2);"function"!==typeof JSON2.parse&&
(JSON2.parse=v4)}
function piwik_log(b,f,d,g){function v0(i,k,j,h){JAM.call(e.setSiteId,e,[k],JAM.policy.p3);JAM.call(e.setTrackerUrl,e,[j],JAM.policy.p3);JAM.call(e.trackLink,e,[i,h],JAM.policy.p3)}function a(h){try{return h="piwik_"+h,JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { "+h+" }"):JAM.call(eval,null,[h])}catch(i){}}var e=JAM.call(Piwik.getTracker,Piwik,[d,f],JAM.policy.p3);JAM.call(e.setDocumentTitle,e,[b],JAM.policy.p3);JAM.call(e.setCustomData,e,[g],JAM.policy.p3);(b=a("tracker_pause"))&&JAM.call(e.setLinkTrackingTimer,
e,[b],JAM.policy.p3);(b=a("download_extensions"))&&JAM.call(e.setDownloadExtensions,e,[b],JAM.policy.p3);(b=a("hosts_alias"))&&JAM.call(e.setDomains,e,[b],JAM.policy.p3);(b=a("ignore_classes"))&&JAM.call(e.setIgnoreClasses,e,[b],JAM.policy.p3);JAM.call(e.trackPageView,e,[],JAM.policy.p3);a("install_tracker")&&(piwik_track=v0,JAM.call(e.enableLinkTracking,e,[],JAM.policy.p3))}this.JSON2||(this.JSON2={});v5();var _paq=_paq||[],v391=Piwik;v391||(v391=v70());
var Piwik=v391,piwik_track,v392,pkBaseURL=v392="https:"==document.location.protocol?"https://cms.demo.crash":"http://cms.demo.crash",piwikTracker=JAM.call(Piwik.getTracker,Piwik,[pkBaseURL+"piwik.php","crash"],JAM.policy.p3);JAM.call(piwikTracker.trackPageView,piwikTracker,[],JAM.policy.p3);JAM.call(piwikTracker.enableLinkTracking,piwikTracker,[],JAM.policy.p3)
