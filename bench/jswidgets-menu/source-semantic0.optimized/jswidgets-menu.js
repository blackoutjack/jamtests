function getNSLayer(inNode,inName){var node,i;node=inNode[inName];i=0;var v496=!node;v496&&(v496=inNode.layers);for(v496&&(v496=i<inNode.layers.length);v496;){node=getNSLayer(inNode.layers[i].document,inName);i++;if(v496=!node)v496=inNode.layers;v496&&(v496=i<inNode.layers.length)}return node}
function getLayer(inNode,inName){var node;inNode.getElementById?node=JAM.call(inNode.getElementById,inNode,[inName],JAM.policy.p1):inNode.all?node=inNode.all[inName]:inNode.layers&&(node=getNSLayer(inNode,inName));node||alert("Could not find layer "+inName+".");return node}function getStyle(inNode){var v281=is.w3c;v281||(v281=is.ie4);return inNode=v281?inNode.style:is.ns4?inNode:0}
function setLayerPos(inNode,left,top){var v282=is.ie4;v282||(v282=is.w3c);v282?(inNode.style.left=left+"px",inNode.style.top=top+"px"):is.ns4&&(inNode.left=left,inNode.top=top)}function showLayer(mNode){if(mNode=getStyle(mNode))mNode.visibility="visible"}function hideLayer(){var mNode=nodeStack[stackDepth];if(mNode=getStyle(mNode))mNode.visibility="hidden"}function isPositioned(mNode){var v14=mNode.left;v14||(v14=mNode.style.left);return v14}
function layerWidth(mNode){var nWidth,v285=is.ie4;v285||(v285=is.w3c);v285?nWidth=parseInt(mNode.style.width):is.ns4&&(nWidth=parseInt(mNode.width));return nWidth}function expandLayer(mNode){if(mNode=getStyle(mNode))mNode.display="block"}function contractLayer(mNode){if(mNode=getStyle(mNode))mNode.display="none"}function insertLayer(mNode){if(mNode=getStyle(mNode))mNode.display="inline"}
function setLayerColor(tag,bgColor,tColor){tag=getLayer(document,tag);if(elStyle=getStyle(tag))is.ns4?elStyle.bgColor=bgColor:(elStyle.backgroundColor=bgColor,elStyle.color=tColor)}
function setStyle(left,top,width,height,zIndex,bgColor,visibility){var divType=blInfo.divType,fontSize=blInfo.fontSize;"layer"==divType?(divType='left="'+left,divType+='" top="'+top,divType+='" width="'+width,divType+='" height="'+height,zIndex&&(divType+='" z-index="'+zIndex),divType=bgColor?divType+('" bgColor="'+bgColor):divType+'" bgColor="#000000',visibility&&(divType+='" visibility="'+NSVisType[visibility])):(divType='style="font-size : '+fontSize+"pt; ",divType+="left : "+left+"px; ",divType+=
"top : "+top+"px; ",divType+="width : "+width+"px; ",divType+="height : "+height+"px; ",zIndex&&(divType+="z-index : "+zIndex+"; "),bgColor&&(divType+="background-color : "+bgColor+"; "),visibility&&(divType+="visibility : "+visibility+"; "));return divType+='" '}
function Is(){var appName=navigator.appName.toLowerCase(),version=navigator.appVersion.toLowerCase(),agent=navigator.userAgent.toLowerCase(),platform=navigator.platform.toLowerCase(),v684=parseInt(version);this.major=v684;this.minor=v684=parseFloat(version);this.nsa=-1!=agent.indexOf("netscape");this.mza=-1!=agent.indexOf("mozilla");this.gla=-1!=agent.indexOf("galeon");(v684=this.mza)&&(v684=!this.nsa);if(this.mza=v684)version=agent.substring(agent.indexOf("rv:")+3,agent.indexOf(")")),this.nsa=!1,
-1!=agent.indexOf("rv:")?(this.major=v684=parseInt(version),this.minor=v684=parseFloat(version),(v684=this.mza)&&(v684=1==this.major),this.mz1=v684):(this.mza=!1,version=this.minor);this.gla&&(version=agent.substring(agent.indexOf("galeon/")+7,agent.indexOf("(")-1),this.nsa=!1,-1!=agent.indexOf("galeon/")?(this.major=v684=parseInt(version),this.minor=v684=parseFloat(version),(v684=this.gla)&&(v684=1==this.major),this.gl1=v684):(this.gla=!1,version=this.version));this.version=version;(version=this.nsn=
-1!=appName.indexOf("netscape"))&&(version=2==this.major);this.ns2=version;(version=this.nsn)&&(version=3==this.major);this.ns3=version;(version=this.nsn)&&(version=4==this.major);this.ns4=version;(version=this.nsa)&&(version=5<=this.major);if(this.ns6=version)this.version=version=JAM.call(agent.slice,agent,[agent.indexOf("netscape6/")+10,agent.length],JAM.policy.p1);(appName=-1!=appName.indexOf("internet explorer"))&&(appName=-1==agent.indexOf("opera"));(appName=this.ie=appName)&&(appName=3==this.major);
this.ie3=appName;(appName=this.ie)&&(appName=4==this.major);appName&&(appName=-1!=agent.indexOf("msie 4."));this.ie4=appName;(appName=this.ie)&&(appName=4==this.major);appName&&(appName=-1!=agent.indexOf("msie 5."));this.ie5=appName;(appName=this.ie)&&(appName=4==this.major);appName&&(appName=-1!=agent.indexOf("msie 6."));this.ie6=appName;appName=this.ie4;appName||(appName=this.ie5);appName||(appName=this.ie6);appName&&(this.version=appName=JAM.call(agent.slice,agent,[agent.indexOf("msie ")+5,agent.length],
JAM.policy.p1),this.version=appName=this.version.slice(0,this.version.indexOf(";")));(appName=this.ie)&&(appName=!this.ie3);appName&&(appName=!this.ie4);this.ieX=appName;(appName=this.op=-1!=agent.indexOf("opera"))&&(appName=4==this.major);appName&&(appName=-1!=agent.indexOf("opera 4."));this.op4=appName;(appName=this.op)&&(appName=4==this.major);appName&&(appName=-1!=agent.indexOf("opera 5."));this.op5=appName;(appName=this.op)&&(appName=4==this.major);appName&&(appName=-1!=agent.indexOf("opera 6."));
this.op6=appName;this.op&&(this.ie6=this.ie5=this.ie4=this.ie=!1,this.version=appName=JAM.call(agent.slice,agent,[agent.indexOf("opera")+6,agent.length],JAM.policy.p1),this.version=appName=parseFloat(this.version));if(this.kq=-1!=agent.indexOf("konqueror"))this.version=agent=JAM.call(agent.substring,agent,[agent.indexOf("konqueror/")+10,agent.length],JAM.policy.p1),this.version=agent=this.version.substring(0,this.version.indexOf(";")),this.major=agent=parseInt(this.version),this.minor=agent=parseFloat(this.version),
this.mza=!1;(agent=this.kq)&&(agent=2==this.major);this.kq2=agent;(agent=this.kq)&&(agent=3==this.major);this.kq3=agent;this.w3c=!!document.getElementById;this.win32=-1!=platform.indexOf("win32");this.linux=-1!=platform.indexOf("linux");this.bsd=-1!=platform.indexOf("bsd")}function setTagFontColor(tag,color){var v339=is.ie4;v339||(v339=is.w3c);v339?tag.style.color=color:is.ns4&&(tag.color=color)}
function setTagFontStyle(tag,style){var v340=is.ie4;v340||(v340=is.w3c);v340?tag.style.fontStyle=style:is.ns4&&(tag.fontStyle=style)}function mousePosLeft(event){var leftPos,v341=is.ie4;!v341&&(v341=is.w3c)&&(v341=is.ns6,v341||(v341=is.mza),v341=!v341);v341?leftPos=event.clientX:(v341=is.ns4,v341||(v341=is.ns6),v341||(v341=is.mza),v341&&(leftPos=event.pageX));return leftPos}
function mousePosTop(event){var topPos,v343=is.ie4;!v343&&(v343=is.w3c)&&(v343=is.ns6,v343||(v343=is.mza),v343=!v343);v343?topPos=event.clientY:(v343=is.ns4,v343||(v343=is.ns6),v343||(v343=is.mza),v343&&(topPos=event.pageY));return topPos}
function BrowserMenuInfo(){if(is.ns4)this.itemHeight=is.win32?16:15,this.mTopOffset=this.leftOffset=this.cellOffset=2,this.wBarPadding=4,this.hBarPadding=6,this.itemPadding=10,this.itemSpacing=2,this.menuPadding=-2,this.mBarOffset=4,this.bBarOffset=-2,this.dividerHeight=2,this.bhPadding=this.bwPadding=4,this.fontSize=12,this.charWidth=is.win32?7:6,this.divType="layer",window.mtActive="#FFFF00",window.mtPassive="#FFFFFF",window.mbActive="#FF0000",window.mbPassive="#081C92";else if(is.kq)this.itemHeight=
18,this.cellOffset=4,this.mTopOffset=this.leftOffset=0,this.wBarPadding=2,this.hBarPadding=6,this.itemSpacing=0,this.itemPadding=2,this.menuPadding=0,this.bBarOffset=this.mBarOffset=4,this.dividerHeight=1,this.bwPadding=2,this.bhPadding=4,this.fontSize=10,this.charWidth=7,this.divType="div";else{var v345=is.op5;v345||(v345=is.op6);if(v345)this.itemHeight=17,this.cellOffset=4,this.leftOffset=2,this.mTopOffset=0,this.wBarPadding=2,this.hBarPadding=6,this.itemPadding=10,this.menuPadding=this.itemSpacing=
2,this.mBarOffset=6,this.bBarOffset=4,this.dividerHeight=1,this.bwPadding=2,this.bhPadding=4,this.fontSize=10,this.charWidth=6,this.divType="div";else if(is.ie4)this.itemHeight=18,this.mTopOffset=this.leftOffset=this.cellOffset=0,this.wBarPadding=4,this.hBarPadding=5,this.itemPadding=10,this.itemSpacing=2,this.menuPadding=-2,this.mBarOffset=3,this.bBarOffset=-3,this.dividerHeight=1,this.bwPadding=4,this.bhPadding=2,this.fontSize=10,this.charWidth=6,this.divType="div";else if(is.ie5)this.itemHeight=
20,this.mTopOffset=this.leftOffset=this.cellOffset=0,this.wBarPadding=4,this.hBarPadding=8,this.itemPadding=11,this.itemSpacing=0,this.menuPadding=2,this.mBarOffset=4,this.bBarOffset=-2,this.dividerHeight=1,this.bwPadding=4,this.bhPadding=2,this.fontSize=10,this.charWidth=6,this.divType="div";else if(is.ie6)this.itemHeight=18,this.cellOffset=4,this.wBarPadding=this.mTopOffset=this.leftOffset=0,this.hBarPadding=6,this.itemPadding=11,this.menuPadding=this.itemSpacing=2,this.bBarOffset=this.mBarOffset=
4,this.dividerHeight=1,this.bwPadding=2,this.bhPadding=4,this.fontSize=10,this.charWidth=6,this.divType="div";else if(v345=is.mza,v345||(v345=is.gla),v345||(v345=is.ns6),v345)this.itemHeight=18,this.cellOffset=4,this.mTopOffset=this.leftOffset=0,this.wBarPadding=2,this.hBarPadding=6,this.itemSpacing=0,this.itemPadding=2,this.menuPadding=0,this.bBarOffset=this.mBarOffset=4,this.dividerHeight=1,this.bwPadding=2,this.bhPadding=4,this.fontSize=10,this.charWidth=7,this.divType="div";else if(is.w3c)this.itemHeight=
19,this.hBarPadding=this.wBarPadding=this.mTopOffset=this.leftOffset=this.cellOffset=0,this.itemSpacing=6,this.itemPadding=2,this.menuPadding=0,this.mBarOffset=3,this.bBarOffset=5,this.dividerHeight=1,this.bhPadding=this.bwPadding=0,this.fontSize=10,this.charWidth=7,this.divType="div";else return alert("This should never happen."),0}}
function startSiteMap(){var mName="Menu",mTarget="_top";window.menuName=mName;window.menuTarget=mTarget;window.menuPntr="images/tri.gif";mName=window;mTarget=[];mName.menuCells=mTarget;window.menuPopups=0;window.menuHeads=0;window.menuLevel=0;window.menuMain=0;mName=window;mTarget={};mName.menuLayers=mTarget;mName=window;mTarget=[];mName.menuStack=mTarget;mName=window;mTarget=[];mName.menuBody=mTarget;mName=window;mTarget=[];mName.bodyCells=mTarget;window.mbActive="#FF0000";window.mtActive="#FFFF00"}
function menuItem(label,action,width,level,popup){this.label=0==label?label:"&nbsp;"+label;this.action=action;this.width=width;this.level=level;this.popup=popup}function bodyItem(popup,level,left,top,width,height){var cells=window.bodyCells.length;this.cells=cells;this.popup=popup;this.level=level;this.left=left;this.top=top;this.width=width;this.height=height}
function stackMenuBody(queue,bPopup,bLevel,bLeft,bTop,bWidth,bHeight){bPopup=new bodyItem(bPopup,bLevel,bLeft,bTop,bWidth,bHeight);JAM.set(window.menuBody,window.menuBody.length,bPopup);bPopup=0;for(bLevel=bPopup<queue.length;bLevel;)JAM.set(window.bodyCells,window.bodyCells.length,queue[bPopup]),bPopup++,bLevel=bPopup<queue.length;window.bodyCells[window.bodyCells.length]=0}
function addMenuDivider(){var mItem;mItem=window.menuLevel;mItem=new menuItem(0,0,0,mItem,0);JAM.set(window.menuCells,window.menuCells.length,mItem)}function estLabelWidth(label){var lWidth=0,i;i=0;for(var v119=i<label.length;v119;)lWidth+=alphaWidth[JAM.call(label.charAt,label,[i],JAM.policy.p1)],i++,v119=i<label.length;return lWidth}
function addMenuItem(label,action,popup){var mItem,mLevel;mLevel=window.menuLevel;mItem=estLabelWidth(label)+4;label||(alert("No label given for action "+action+"."),label="no label");action=action?"location='"+action+"'":"clearMenus("+mLevel+")";var v358=popup;v358&&(v358=0<mLevel);v358&&(mItem+=15);0==mLevel&&window.menuHeads++;mItem=new menuItem(label,action,mItem,mLevel,popup);JAM.set(window.menuCells,window.menuCells.length,mItem)}
function startMenu(label){var action,v360=window.menuPopups;window.menuPopups+=1;addMenuItem(label,action,"popup"+v360);window.menuLevel++}function endMenu(){window.menuLevel--}function menuLayer(label,action){this.name=name;this.label=label;this.action=action}
function buildMenuCell(index,left,top,width){var height=blInfo.itemHeight,mName,mHeight,mAction,mLevel;mName="cell"+index;mClass="menuItem";mLevel=window.menuCells[index].level;mHeight=height;height=window.menuCells[index].label;mAction=window.menuCells[index].action;JAM.call(document.write,document,["<"+blInfo.divType+' id="'+mName],JAM.policy.p1);JAM.call(document.write,document,['" class="'+mClass+'" '],JAM.policy.p1);JAM.call(document.write,document,[setStyle(left,top,width,mHeight,0,window.mbPassive,
"inherit")],JAM.policy.p1);JAM.call(document.write,document,[' onclick="'+mAction+'" '],JAM.policy.p1);(mPopup=window.menuCells[index].popup)?JAM.call(document.write,document,['onmouseover="popMenu('+mLevel+",'"+mName+"','"+mPopup+"');\" "],JAM.policy.p1):JAM.call(document.write,document,['onmouseover="unPopMenus('+mLevel+",'"+mName+"');\" "],JAM.policy.p1);JAM.call(document.write,document,["onmouseout=\"setColorPassive('"+mName+"');\">"],JAM.policy.p1);index=window.menuLayers;left=new menuLayer(height,
mAction);JAM.set(index,mName,left);"layer"==blInfo.divType?JAM.call(document.write,document,[JAM.call(height.fontcolor,height,[mtPassive],JAM.policy.p1)],JAM.policy.p1):JAM.call(document.write,document,[height],JAM.policy.p1);(mName=mPopup)&&(mName=1<=mLevel);mName&&JAM.call(document.write,document,['&nbsp;<img src="'+window.menuPntr+'" border="0">'],JAM.policy.p1);JAM.call(document.writeln,document,["</"+blInfo.divType+">"],JAM.policy.p1)}
function buildMenuBody(cQueue,bName,bLevel,bLeft,bTop,bWidth,bHeight){var bClass,lWidth;bClass="menuBody";lWidth=bWidth+blInfo.bwPadding;bHeight+=blInfo.bhPadding;JAM.call(document.write,document,["<"+blInfo.divType+' id="'+bName+'" class="'+bClass+'" '],JAM.policy.p1);JAM.call(document.write,document,[setStyle(bLeft,bTop,lWidth,bHeight,bLevel+1,"#000000","hidden")],JAM.policy.p1);JAM.call(document.writeln,document,[">"]);bLevel=blInfo.leftOffset;bLeft=blInfo.mTopOffset;bName=0;for(bTop=bName<cQueue.length;bTop;){if(mLabel=
window.menuCells[cQueue[bName]].label)buildMenuCell(cQueue[bName],bLevel,bLeft,bWidth),bLeft+=blInfo.itemHeight+blInfo.cellOffset;else if(0==mLabel)bLeft+=blInfo.dividerHeight;else{alert("Expecting label in buildMenuBody.");return}bName++;bTop=bName<cQueue.length}JAM.call(document.writeln,document,["</"+blInfo.divType+">"],JAM.policy.p1)}
function buildMenuBodies(){var i,cQueue,bName,bLevel,bLeft,bTop,bWidth,bHeight,bCells;i=0;for(cQueue=i<window.menuBody.length;cQueue;){bCells=window.menuBody[i].cells;bName=window.menuBody[i].popup;bLevel=window.menuBody[i].level;bLeft=window.menuBody[i].left;bTop=window.menuBody[i].top;bWidth=window.menuBody[i].width;bHeight=window.menuBody[i].height;cQueue=[];cCount=0;var v398=bCells<window.bodyCells.length;for(v398&&(v398=0<window.bodyCells[bCells]);v398;){v398=cCount;cCount+=1;var v399=window.bodyCells,
v400=bCells;bCells+=1;cQueue[v398]=v399[v400];(v398=bCells<window.bodyCells.length)&&(v398=0<window.bodyCells[bCells])}buildMenuBody(cQueue,bName,bLevel,bLeft,bTop,bWidth,bHeight);i++;cQueue=i<window.menuBody.length}}
function queueMenuBuilds(mIndex,mLevel,mPopup,mLeft,mTop){var queue=[],i,sLeft,sTop,sWidth,sHeight;sTop=mTop;sHeight=sWidth=0;i=mIndex;for((sLeft=i<window.menuCells.length)&&(sLeft=window.menuCells[i].level>=mLevel);sLeft;)window.menuCells[i].level==mLevel&&(sWidth=JAM.call(Math.max,Math,[sWidth,window.menuCells[i].width],JAM.policy.p1)),i++,(sLeft=i<window.menuCells.length)&&(sLeft=window.menuCells[i].level>=mLevel);sLeft=mLeft+sWidth+2;i=mIndex;for((mIndex=i<window.menuCells.length)&&(mIndex=window.menuCells[i].level>=
mLevel);mIndex;)queue[queue.length]=i,window.menuCells[i].popup?(mIndex=window.menuCells[i].popup,i++,i=queueMenuBuilds(i,mLevel+1,mIndex,sLeft,sTop),sTop+=blInfo.itemHeight+blInfo.cellOffset,sHeight+=blInfo.itemHeight+blInfo.cellOffset):window.menuCells[i].label?(i++,sTop+=blInfo.itemHeight+blInfo.cellOffset,sHeight+=blInfo.itemHeight+blInfo.cellOffset):(i++,sTop+=blInfo.dividerHeight,sHeight+=blInfo.dividerHeight),(mIndex=i<window.menuCells.length)&&(mIndex=window.menuCells[i].level>=mLevel);0<
queue.length&&stackMenuBody(queue,mPopup,mLevel,mLeft,mTop,sWidth,sHeight-blInfo.cellOffset);return i}function endSiteMap(){}
function drawHMenuBar(){var left=barLeft,top=barTop,width=barWidth,height=barHeight,padding=itemPadding,graphic=barImage,bWidth,bHeight,iWidth;bWidth=width+blInfo.wBarPadding;bHeight=height+blInfo.itemHeight+blInfo.hBarPadding;padding+=blInfo.itemPadding;JAM.call(document.write,document,["<"+blInfo.divType+' id="menuBar" class="menuBar" '],JAM.policy.p1);JAM.call(document.write,document,[setStyle(left,top,bWidth,bHeight,0,null,"visible")],JAM.policy.p1);JAM.call(document.writeln,document,[">"]);JAM.call(document.writeln,
document,['<img name="menuImage" src="'+graphic+'" class="menuBar" border="1" width="'+width+'" height="'+height+'">'],JAM.policy.p1);width=blInfo.leftOffset;graphic=height+blInfo.mBarOffset;top+=blInfo.bBarOffset;height=0;for(iWidth=height<window.menuCells.length;iWidth;)iWidth=window.menuCells[height].width+padding,iWidth=JAM.call(Math.min,Math,[iWidth,bWidth-width+blInfo.menuPadding],JAM.policy.p1),buildMenuCell(height,width,graphic,iWidth),window.menuCells[height].popup&&(mPopup=window.menuCells[height].popup,
height++,height=queueMenuBuilds(height,1,mPopup,left,top+bHeight)),left+=iWidth+blInfo.itemSpacing,width+=iWidth+blInfo.itemSpacing,iWidth=height<window.menuCells.length;JAM.call(document.writeln,document,["</"+blInfo.divType+">"],JAM.policy.p1);buildMenuBodies();document.close()}
function drawVMenuBar(left,top,width,height,padding,graphic){var bWidth,bHeight,mHeight,i;bWidth=width+blInfo.wBarPadding;bHeight=height;i=mHeight=0;for(var v197=i<window.menuCells.length;v197;)0==window.menuCells[i].level&&mHeight++,i++,v197=i<window.menuCells.length;mHeight*=blInfo.itemHeight+blInfo.cellOffset;i=0;padding+=blInfo.itemPadding;JAM.call(document.write,document,["<"+blInfo.divType+' id="menuBar" class="menuBar" '],JAM.policy.p1);JAM.call(document.write,document,[setStyle(left,top,bWidth,
bHeight+mHeight,0,null,"visible")],JAM.policy.p1);JAM.call(document.writeln,document,[">"]);JAM.call(document.writeln,document,['<img name="menuImage" src="'+graphic+'"class="menuBar" border="1" width="'+width+'" height="'+height+'">'],JAM.policy.p1);width=blInfo.leftOffset;height+=blInfo.mBarOffset;top+=blInfo.bBarOffset;for(graphic=i<window.menuCells.length;graphic;)graphic=window.menuCells[i].width+padding,graphic=JAM.call(Math.min,Math,[graphic,bWidth-width+blInfo.menuPadding],JAM.policy.p1),
buildMenuCell(i,width,height,graphic),window.menuCells[i].popup&&(mPopup=window.menuCells[i].popup,i++,i=queueMenuBuilds(i,1,mPopup,left+graphic,top+bHeight)),height+=blInfo.itemHeight+blInfo.cellOffset,top+=blInfo.itemHeight+blInfo.cellOffset,graphic=i<window.menuCells.length;JAM.call(document.writeln,document,["</"+blInfo.divType+">"],JAM.policy.p1);buildMenuBodies();document.close()}
function loadMe(){var v213=this.action;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { "+v213+" }"):JAM.call(eval,null,[v213])}
function activateMenus(){var mName,mAction,mNode;mAction=getStyle(getLayer(document,"test.cell"));if(is.ns4)for(mName in window.menuLayers)mAction=window.menuLayers[mName].action,mNode=getLayer(document,mName),JAM.call(mNode.captureEvents,mNode,[Event.MOUSEDOWN],JAM.policy.p1),JAM.set(mNode,"onmousedown",loadMe),mNode.action=mAction,mNode.fgColor=window.mtPassive;else window.mtPassive=mAction.color,window.mbPassive=mAction.backgroundColor}
function findNode(elMain,mName){var elNode,elIndex;elNode=getLayer(elMain,mName);elIndex=0;var v459=!elNode;for(v459&&(v459=elIndex<stackDepth);v459;)elNode=getLayer(nodeStack[elIndex],mName),elIndex++,(v459=!elNode)&&(v459=elIndex<stackDepth);return elNode}function clearMenus(mNum){for(var v222=stackDepth>mNum;v222;)stackDepth--,hideLayer(),nameStack[stackDepth]=0,nodeStack[stackDepth]=0,v222=stackDepth>mNum}
function unPopMenus(mNum,tag){setLayerColor(tag,window.mbActive,window.mtActive);clearMenus(mNum);is.ns4&&JAM.call(document.releaseEvents,document,[Event.MOUSEDOWN],JAM.policy.p1)}function setColorPassive(tag){setLayerColor(tag,window.mbPassive,window.mtPassive);is.ns4&&JAM.call(document.captureEvents,document,[Event.MOUSEDOWN],JAM.policy.p1)}
function popMenu(mNum,tag,mName){clearMenus(mNum);setLayerColor(tag,window.mbActive,window.mtActive);if(mNum=getLayer(document,mName))showLayer(mNum),nameStack[stackDepth]=mName,nodeStack[stackDepth]=mNum,stackDepth++;is.ns4&&JAM.call(document.releaseEvents,document,[Event.MOUSEDOWN],JAM.policy.p1)}function clearAll(e){clearMenus(0)}function initialize(){activateMenus()}var NSVisType=[];NSVisType.visible="show";NSVisType.hidden="hide";NSVisType.inherit="inherit";var is=new Is,blInfo=new BrowserMenuInfo;
JAM.call(document.write,document,["<"+blInfo.divType+' id="test.cell"'],JAM.policy.p1);JAM.call(document.write,document,['" class="menuItem" ']);JAM.call(document.write,document,[setStyle(0,0,100,20,null,null,"hidden")+">"],JAM.policy.p1);JAM.call(document.write,document,["test.cell"]);JAM.call(document.writeln,document,["</"+blInfo.divType+">"],JAM.policy.p1);var alphaWidth=[];alphaWidth.a=blInfo.charWidth;alphaWidth.b=blInfo.charWidth;alphaWidth.c=blInfo.charWidth;alphaWidth.d=blInfo.charWidth;
alphaWidth.e=blInfo.charWidth;alphaWidth.f=blInfo.charWidth;alphaWidth.g=blInfo.charWidth;alphaWidth.h=blInfo.charWidth;var v238=alphaWidth,v705=JAM.call(Math.floor,Math,[.4*blInfo.charWidth],JAM.policy.p1);v238.i=v705;var v239=alphaWidth,v706=JAM.call(Math.floor,Math,[.7*blInfo.charWidth],JAM.policy.p1);v239.j=v706;alphaWidth.k=blInfo.charWidth;var v240=alphaWidth,v707=JAM.call(Math.floor,Math,[.4*blInfo.charWidth],JAM.policy.p1);v240.l=v707;
var v241=alphaWidth,v708=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v241.m=v708;alphaWidth.n=blInfo.charWidth;alphaWidth.o=blInfo.charWidth;alphaWidth.p=blInfo.charWidth;alphaWidth.q=blInfo.charWidth;alphaWidth.r=blInfo.charWidth;alphaWidth.s=blInfo.charWidth;alphaWidth.t=blInfo.charWidth;alphaWidth.u=blInfo.charWidth;alphaWidth.v=blInfo.charWidth;var v242=alphaWidth,v709=JAM.call(Math.floor,Math,[1.8*blInfo.charWidth],JAM.policy.p1);v242.w=v709;alphaWidth.x=blInfo.charWidth;
alphaWidth.y=blInfo.charWidth;alphaWidth.z=blInfo.charWidth;var v243=alphaWidth,v710=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v243.A=v710;var v244=alphaWidth,v711=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v244.B=v711;var v245=alphaWidth,v712=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v245.C=v712;var v246=alphaWidth,v713=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v246.D=v713;
var v247=alphaWidth,v714=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v247.E=v714;var v248=alphaWidth,v715=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v248.F=v715;var v249=alphaWidth,v716=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v249.G=v716;var v250=alphaWidth,v717=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v250.H=v717;var v251=alphaWidth,v718=JAM.call(Math.floor,Math,[blInfo.charWidth],JAM.policy.p1);v251.I=v718;
var v252=alphaWidth,v719=JAM.call(Math.floor,Math,[blInfo.charWidth],JAM.policy.p1);v252.J=v719;var v253=alphaWidth,v720=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v253.K=v720;var v254=alphaWidth,v721=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v254.L=v721;var v255=alphaWidth,v722=JAM.call(Math.floor,Math,[2*blInfo.charWidth],JAM.policy.p1);v255.M=v722;var v256=alphaWidth,v723=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v256.N=v723;
var v257=alphaWidth,v724=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v257.O=v724;var v258=alphaWidth,v725=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v258.P=v725;var v259=alphaWidth,v726=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v259.Q=v726;var v260=alphaWidth,v727=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v260.R=v727;var v261=alphaWidth,v728=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v261.S=v728;
var v262=alphaWidth,v729=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v262.T=v729;var v263=alphaWidth,v730=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v263.U=v730;var v264=alphaWidth,v731=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v264.V=v731;var v265=alphaWidth,v732=JAM.call(Math.floor,Math,[3*blInfo.charWidth],JAM.policy.p1);v265.W=v732;var v266=alphaWidth,v733=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v266.X=v733;
var v267=alphaWidth,v734=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v267.Y=v734;var v268=alphaWidth,v735=JAM.call(Math.floor,Math,[1.6*blInfo.charWidth],JAM.policy.p1);v268.Z=v735;alphaWidth["0"]=blInfo.charWidth;alphaWidth["1"]=blInfo.charWidth;alphaWidth["2"]=blInfo.charWidth;alphaWidth["3"]=blInfo.charWidth;alphaWidth["4"]=blInfo.charWidth;alphaWidth["5"]=blInfo.charWidth;alphaWidth["6"]=blInfo.charWidth;alphaWidth["7"]=blInfo.charWidth;alphaWidth["8"]=blInfo.charWidth;
alphaWidth["9"]=blInfo.charWidth;alphaWidth["."]=blInfo.charWidth;alphaWidth[","]=blInfo.charWidth;alphaWidth["'"]=blInfo.charWidth;alphaWidth[" "]=blInfo.charWidth;alphaWidth['"']=blInfo.charWidth;alphaWidth["/"]=blInfo.charWidth;alphaWidth["\\"]=blInfo.charWidth;alphaWidth["<"]=blInfo.charWidth;alphaWidth[">"]=blInfo.charWidth;alphaWidth["?"]=blInfo.charWidth;alphaWidth["~"]=blInfo.charWidth;alphaWidth["!"]=blInfo.charWidth;alphaWidth["#"]=blInfo.charWidth;alphaWidth.$=blInfo.charWidth;
alphaWidth["%"]=blInfo.charWidth;alphaWidth["^"]=blInfo.charWidth;alphaWidth["&"]=blInfo.charWidth;alphaWidth["*"]=blInfo.charWidth;alphaWidth["("]=blInfo.charWidth;alphaWidth[")"]=blInfo.charWidth;alphaWidth["-"]=blInfo.charWidth;alphaWidth._=blInfo.charWidth;alphaWidth["="]=blInfo.charWidth;alphaWidth["+"]=blInfo.charWidth;alphaWidth["{"]=blInfo.charWidth;alphaWidth["}"]=blInfo.charWidth;alphaWidth["["]=blInfo.charWidth;alphaWidth["]"]=blInfo.charWidth;alphaWidth["|"]=blInfo.charWidth;
alphaWidth[";"]=blInfo.charWidth;alphaWidth[":"]=blInfo.charWidth;var nameStack=[],nodeStack=[],stackDepth=0;is.ns4&&(JAM.call(document.captureEvents,document,[Event.MOUSEDOWN],JAM.policy.p1),JAM.set(document,"onmousedown",clearAll));startSiteMap();startMenu("jsWidgets");addMenuItem("Home","/home.shtml");addMenuItem("What is jsWidgets?","/readme.shtml");addMenuItem("Change Log","/changelog.shtml");addMenuItem("General Public License","http://www.gnu.org/copyleft/gpl.html");
addMenuItem("Project Page","http://sourceforge.net/projects/jswidgets");addMenuItem("Download","http://sourceforge.net/project/showfiles.php?group_id=33495");startMenu("Competition at SF");addMenuItem("DynAPI","http://dynapi.sourceforge.net");addMenuItem("netWindows","http://sourceforge.net/projects/netwindows");addMenuItem("jsui","http://jsui.sourceforge.net");addMenuItem("judelib","http://judelib.sourceforge.net");addMenuItem("XPDOM","http://xpdom.sourceforge.net");addMenuItem("Tree Menu","http://www.treemenu.com");
addMenuItem("gmL-Modul","http://gml-modul.sourceforge.net");addMenuItem("PHP Layers","http://phplayersmenu.sourceforge.net");addMenuItem("WAB AWT","http://www.skip-consulting.de/wab/wabawt/");endMenu();endMenu();startMenu("Examples");addMenuItem("Menus","/examples/menus.shtml");addMenuItem("Notes","/examples/notes.shtml");addMenuItem("Banners","/examples/banners.shtml");addMenuItem("Browsers","/examples/browsers.shtml");addMenuItem("Trees","/examples/trees.shtml");endMenu();startMenu("Documentation");
addMenuItem("Menus","/docs/menus.shtml");addMenuItem("Notes","/docs/notes.shtml");addMenuItem("Banners","/docs/banners.shtml");addMenuItem("Browsers","/docs/browsers.shtml");addMenuItem("Trees","/docs/trees.shtml");endMenu();startMenu("On JavaScript");addMenuItem("Netscape Docs","http://developer.netscape.com/docs/manuals/javascript.html");startMenu("ECMA Script");addMenuItem("ECMA -262","http://www.ecma.ch/ecma1/STAND/ECMA-262.HTM");addMenuItem("DOM Level 1 Binding","http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html");
endMenu();startMenu("Others Examples");addMenuItem("Javascript Source","http://javascript.internet.com/");addMenuItem("Javascript.com","http://www.javascript.com");addMenuItem("Javascript Resources","http://www.jsr.communitech.net/index3.htm");addMenuItem("W3Schools Examples","http://www.w3schools.com/js/js_examples.asp");endMenu();endSiteMap();var v629=is.w3c;v629||(v629=is.ie4);var v495=v629;if(!v495){var v630=is.ns4;v630&&(v630=!is.hj);v495=v630}
if(v495){var barTop=20,barLeft=50,barWidth=370,barHeight=44,itemPadding=5,barImage="images/title.png";drawHMenuBar()}
is.w3c?(JAM.call(document.writeln,document,['<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">']),JAM.call(document.writeln,document,['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'],JAM.policy.p1),JAM.call(document.writeln,
document,["</div>"])):is.ns4&&(JAM.call(document.writeln,document,['<layer top="20" left="400">']),JAM.call(document.writeln,document,['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'],JAM.policy.p1),JAM.call(document.writeln,document,["</layer>"]));
document.body.background="images/researchbg.gif";JAM.set(document.body,"onload",initialize);JAM.set(document.getElementById("cleardiv"),"onmouseover",clearAll)
