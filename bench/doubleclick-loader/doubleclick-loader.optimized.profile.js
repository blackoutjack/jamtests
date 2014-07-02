
JAM.startProfile('load');
function rtmItURL(){var v0=window.location,ifrmURL=v0.href,v0=getURLParameter(ifrmURL,";eb_trk=",";"),siteId=getURLParameter(ifrmURL,"i/ebay.","."),cguid=getURLParameter(ifrmURL,";cg=",";"),ifrmURL=getURLParameter(ifrmURL,"ht","://"),rtmItURL="";if(rtmItURL=siteId&&v0)cguid?((rtmItURL=ifrmURL)&&(rtmItURL="tps"==ifrmURL),siteId=(ifrmURL=rtmItURL)?"https://srv."+siteId:"http://srx."+siteId,siteId+=".ebayrtm.com/rtm?RtmIt&ite=4&m=",v0=siteId+v0,v0+="&cg=",v0+=cguid):((cguid=ifrmURL)&&(cguid="tps"==ifrmURL),
cguid=cguid?"https://srv."+siteId:"http://srx."+siteId,cguid+=".ebayrtm.com/rtm?RtmIt&ite=4&m=",v0=cguid+v0),v0+="&ord=",cguid=Math.random(),rtmItURL=v0+cguid,v0=document.createElement("img"),v0.src=rtmItURL}
function getURLParameter(url,name,delimiter){var p=name;name=p.length;var p=url.indexOf(p),v,v15=-1<p;if(v15){v=p+name;delimiter=url.indexOf(delimiter,v);name=url.indexOf("#",v);if(p=-1==delimiter)delimiter=url.length;(p=-1<name)&&(p=name<delimiter);p&&(delimiter=name);v=url.substring(v,delimiter)}(url="ebaymt"==v)?v="ebaymotors":(url="ebayus"==v)&&(v="main");return v}rtmItURL();

JAM.stopProfile('load');
