function v98(){function v97(a,b,d,e,f,h,i,g){var l=this._nRounds;introspect(JAM.policy.p12)var v99=a[b];var k=v99^d[0],v457=b+1;introspect(JAM.policy.p12)var v101=a[v457];var m=v101^d[1],v458=b+2;introspect(JAM.policy.p12)var v103=a[v458];var o=v103^d[2],v459=b+3;introspect(JAM.policy.p12)var v105=a[v459];for(var n=v105^d[3],p=4,r=1,v115=r<l;v115;){var v863=k>>>24;introspect(JAM.policy.p12)var v766=e[v863];var v864=m>>>16&255;introspect(JAM.policy.p12)var v767=f[v864];var v654=v766^v767,v768=o>>>
8&255;introspect(JAM.policy.p12)var v655=h[v768];var v460=v654^v655,v656=n&255;introspect(JAM.policy.p12)var v461=i[v656];var v107=v460^v461,v462=p,p=p+1;introspect(JAM.policy.p12)var v108=d[v462];var s=v107^v108,v866=m>>>24;introspect(JAM.policy.p12)var v769=e[v866];var v867=o>>>16&255;introspect(JAM.policy.p12)var v770=f[v867];var v657=v769^v770,v771=n>>>8&255;introspect(JAM.policy.p12)var v658=h[v771];var v463=v657^v658,v659=k&255;introspect(JAM.policy.p12)var v464=i[v659];var v109=v463^v464,v465=
p,p=p+1;introspect(JAM.policy.p12)var v110=d[v465];var u=v109^v110,v869=o>>>24;introspect(JAM.policy.p12)var v772=e[v869];var v870=n>>>16&255;introspect(JAM.policy.p12)var v773=f[v870];var v660=v772^v773,v774=k>>>8&255;introspect(JAM.policy.p12)var v661=h[v774];var v466=v660^v661,v662=m&255;introspect(JAM.policy.p12)var v467=i[v662];var v111=v466^v467,v468=p,p=p+1;introspect(JAM.policy.p12)var v112=d[v468];var v=v111^v112,v872=n>>>24;introspect(JAM.policy.p12)var v775=e[v872];var v873=k>>>16&255;
introspect(JAM.policy.p12)var v776=f[v873];var v663=v775^v776,v777=m>>>8&255;introspect(JAM.policy.p12)var v664=h[v777];var v469=v663^v664,v665=o&255;introspect(JAM.policy.p12)var v470=i[v665];var v113=v469^v470,v471=p,p=p+1;introspect(JAM.policy.p12)var v114=d[v471];n=v113^v114;k=s;m=u;o=v;r++;v115=r<l}var v945=k>>>24;introspect(JAM.policy.p12)var v875=g[v945];var v778=v875<<24,v946=m>>>16&255;introspect(JAM.policy.p12)var v876=g[v946];var v666=v778|v876<<16,v877=o>>>8&255;introspect(JAM.policy.p12)var v780=
g[v877];var v472=v666|v780<<8,v668=n&255;introspect(JAM.policy.p12)var v473=g[v668];var v116=v472|v473,v474=p,p=p+1;introspect(JAM.policy.p12)var v117=d[v474];var s=v116^v117,v948=m>>>24;introspect(JAM.policy.p12)var v878=g[v948];var v781=v878<<24,v949=o>>>16&255;introspect(JAM.policy.p12)var v879=g[v949];var v669=v781|v879<<16,v880=n>>>8&255;introspect(JAM.policy.p12)var v783=g[v880];var v475=v669|v783<<8,v671=k&255;introspect(JAM.policy.p12)var v476=g[v671];var v118=v475|v476,v477=p,p=p+1;introspect(JAM.policy.p12)var v119=
d[v477];var u=v118^v119,v951=o>>>24;introspect(JAM.policy.p12)var v881=g[v951];var v784=v881<<24,v952=n>>>16&255;introspect(JAM.policy.p12)var v882=g[v952];var v672=v784|v882<<16,v883=k>>>8&255;introspect(JAM.policy.p12)var v786=g[v883];var v478=v672|v786<<8,v674=m&255;introspect(JAM.policy.p12)var v479=g[v674];var v120=v478|v479,v480=p,p=p+1;introspect(JAM.policy.p12)var v121=d[v480];var v=v120^v121,v954=n>>>24;introspect(JAM.policy.p12)var v884=g[v954];var v787=v884<<24,v955=k>>>16&255;introspect(JAM.policy.p12)var v885=
g[v955];var v675=v787|v885<<16,v886=m>>>8&255;introspect(JAM.policy.p12)var v789=g[v886];var v481=v675|v789<<8,v677=o&255;introspect(JAM.policy.p12)var v482=g[v677];var v122=v481|v482,v483=p,p=p+1;introspect(JAM.policy.p12)var v123=d[v483];n=v122^v123;introspect(JAM.policy.p17)a[b]=s;var v124=b+1;introspect(JAM.policy.p17)a[v124]=u;var v125=b+2;introspect(JAM.policy.p17)a[v125]=v;var v126=b+3;introspect(JAM.policy.p17)a[v126]=n}function v96(c,b){var v127=b+1;introspect(JAM.policy.p12)v127=c[v127];
JAM.set(c,b+1,JAM.get(c,b+3,JAM.policy.p18),JAM.policy.p18);JAM.set(c,b+3,v127,JAM.policy.p17);JAM.call(this._doCryptBlock,this,[c,b,this._invKeySchedule,k$$0,f$$0,g$$0,a$$0,r$$0]);v127=b+1;introspect(JAM.policy.p12)v127=c[v127];JAM.set(c,b+1,JAM.get(c,b+3,JAM.policy.p18),JAM.policy.p18);JAM.set(c,b+3,v127,JAM.policy.p17)}function v95(a,b){JAM.call(this._doCryptBlock,this,[a,b,this._keySchedule,o$$0,m$$0,s$$0,n$$0,l$$0])}function v94(){for(var c=this._key,b=c.words,d=c.sigBytes/4,c=4*((this._nRounds=
d+6)+1),i=this._keySchedule=[],j=0,v141=j<c;v141;){if(j<d)introspect(JAM.policy.p12)i[j]=b[j];else{v141=j-1;introspect(JAM.policy.p12)v141=i[v141];if(j%d){var v678=6<d;v678&&(v678=4==j%d);if(v678){v678=v141>>>24;introspect(JAM.policy.p12)v678=l$$0[v678];var v678=v678<<24,v1006=v141>>>16&255;introspect(JAM.policy.p12)v1006=l$$0[v1006];v678|=v1006<<16;v1006=v141>>>8&255;introspect(JAM.policy.p12)v1006=l$$0[v1006];v678|=v1006<<8;v141&=255;introspect(JAM.policy.p12)v141=l$$0[v141];v141|=v678}}else{v141=
v141<<8|v141>>>24;v678=v141>>>24;introspect(JAM.policy.p12)v678=l$$0[v678];v678<<=24;v1006=v141>>>16&255;introspect(JAM.policy.p12)v1006=l$$0[v1006];v678|=v1006<<16;v1006=v141>>>8&255;introspect(JAM.policy.p12)v1006=l$$0[v1006];v678|=v1006<<8;v141&=255;introspect(JAM.policy.p12)v141=l$$0[v141];v141|=v678;v678=j/d|0;introspect(JAM.policy.p12)v678=e$$0[v678];v141^=v678<<24}v678=j-d;introspect(JAM.policy.p12)v678=i[v678];i[j]=v678^v141}j++;v141=j<c}b=this._invKeySchedule=[];d=0;for(v141=d<c;v141;){j=
c-d;if(d%4)introspect(JAM.policy.p12)v141=i[j];else{v141=j-4;introspect(JAM.policy.p12)v141=i[v141]}(v678=4>d)||(v678=4>=j);if(!v678){j=v141>>>24;introspect(JAM.policy.p12)j=l$$0[j];introspect(JAM.policy.p12)j=k$$0[j];v678=v141>>>16&255;introspect(JAM.policy.p12)v678=l$$0[v678];introspect(JAM.policy.p12)v678=f$$0[v678];j^=v678;v678=v141>>>8&255;introspect(JAM.policy.p12)v678=l$$0[v678];introspect(JAM.policy.p12)v678=g$$0[v678];j^=v678;v141&=255;introspect(JAM.policy.p12)v141=l$$0[v141];introspect(JAM.policy.p12)v141=
a$$0[v141];v141^=j}b[d]=v141;d++;v141=d<c}}function v93(){for(var c=[],b=0,v144=256>b;v144;)v144=128>b?b<<1:b<<1^283,c[b]=v144,b++,v144=256>b;for(var d=0,b=v144=0,v165=256>b;v165;){var j=v144^v144<<1^v144<<2^v144<<3^v144<<4,j=j>>>8^j&255^99;l$$0[d]=j;r$$0[j]=d;introspect(JAM.policy.p12)v165=c[d];introspect(JAM.policy.p12)var h=c[v165];introspect(JAM.policy.p12)var p=c[h];introspect(JAM.policy.p12)var v497=c[j];v497=257*v497^16843008*j;o$$0[d]=v497<<24|v497>>>8;m$$0[d]=v497<<16|v497>>>16;s$$0[d]=v497<<
8|v497>>>24;n$$0[d]=v497;v497=16843009*p^65537*h^257*v165^16843008*d;k$$0[j]=v497<<24|v497>>>8;f$$0[j]=v497<<16|v497>>>16;g$$0[j]=v497<<8|v497>>>24;a$$0[j]=v497;if(d){d=p^v165;introspect(JAM.policy.p12)d=c[d];introspect(JAM.policy.p12)d=c[d];introspect(JAM.policy.p12)d=c[d];d^=v165;introspect(JAM.policy.p12)v165=c[v144];introspect(JAM.policy.p12)v165=c[v165];v144^=v165}else d=v144=1;b++;v165=256>b}}var p$$0=CryptoJS,h$$0=p$$0.lib.BlockCipher,i$$0=p$$0.algo,l$$0=[],r$$0=[],o$$0=[],m$$0=[],s$$0=[],
n$$0=[],k$$0=[],f$$0=[],g$$0=[],a$$0=[];v93();var e$$0=[0,1,2,4,8,16,32,64,128,27,54],v1080=JAM.call(h$$0.extend,h$$0,[{_doReset:v94,encryptBlock:v95,decryptBlock:v96,_doCryptBlock:v97,keySize:8}]),i$$0=i$$0.AES=v1080,h$$0=JAM.call(h$$0._createHelper,h$$0,[i$$0]);p$$0.AES=h$$0}
function v92(){var p;function v91(a,c,f,j){var v169=this.cfg;j=JAM.call(v169.extend,v169,[j]);c=JAM.call(this._parse,this,[c,j.format]);v169=j.kdf;f=JAM.call(v169.compute,v169,[f,a.keySize,a.ivSize,c.salt]);j.iv=f.iv;v169=e$$0.decrypt;return JAM.call(v169.call,v169,[this,a,c,f.key,j])}function v90(a,c,f,j){var v177=this.cfg;j=JAM.call(v177.extend,v177,[j]);v177=j.kdf;f=JAM.call(v177.compute,v177,[f,a.keySize,a.ivSize]);j.iv=f.iv;v177=e$$0.encrypt;a=JAM.call(v177.call,v177,[this,a,c,f.key,j]);JAM.call(a.mixIn,
a,[f]);return a}function v89(b,c,e,f){f||(f=JAM.call(r.random,r,[8]));var v183=JAM.call(s.create,s,[{keySize:c+e}]);b=JAM.call(v183.compute,v183,[b,f]);e=JAM.call(r.create,r,[b.words.slice(c),4*e]);b.sigBytes=4*c;return JAM.call(a$$1.create,a$$1,[{key:b,iv:e,salt:f}])}function v88(a,c){var v187;return v187="string"==typeof a?JAM.call(c.parse,c,[a]):a}function v87(a,c,e,f){var v188=this.cfg;f=JAM.call(v188.extend,v188,[f]);c=JAM.call(this._parse,this,[c,f.format]);a=JAM.call(a.createDecryptor,a,[e,
f]);return JAM.call(a.finalize,a,[c.ciphertext])}function v86(b,d,c,e){var v192=this.cfg;e=JAM.call(v192.extend,v192,[e]);v192=JAM.call(b.createEncryptor,b,[c,e]);d=JAM.call(v192.finalize,v192,[d]);v192=v192.cfg;return JAM.call(a$$1.create,a$$1,[{ciphertext:d,key:c,iv:v192.iv,algorithm:b,mode:v192.mode,padding:v192.padding,blockSize:b.blockSize,formatter:e.format}])}function v85(b){b=JAM.call(m.parse,m,[b]);var d=b.words,v510=1398893684==d[0];v510&&(v510=1701076831==d[1]);if(v510){var c=JAM.call(r.create,
r,[d.slice(2,4)]);d.splice(0,4);b.sigBytes-=16}return JAM.call(a$$1.create,a$$1,[{ciphertext:b,salt:c}])}function v84(a){var d=a.ciphertext;if(a=a.salt){var v808=JAM.call(r.create,r,[[1398893684,1701076831]]);a=JAM.call(v808.concat,v808,[a]);d=JAM.call(a.concat,a,[d])}d=JAM.call(d.toString,d,[m]);return d.replace(/(.{64})/g,"$1\n")}function v83(a){a||(a=this.formatter);return JAM.call(a.stringify,a,[this])}function v82(a){JAM.call(this.mixIn,this,[a])}function v81(){var b=this.cfg.padding;if(this._xformMode==
this._ENC_XFORM_MODE){JAM.call(b.pad,b,[this._data,this.blockSize]);var a=JAM.call(this._process,this,[!0])}else a=JAM.call(this._process,this,[!0]),JAM.call(b.unpad,b,[a]);return a}function v80(b,a){var v204=this._mode;JAM.call(v204.processBlock,v204,[b,a])}function v79(){var v205=n.reset;JAM.call(v205.call,v205,[this]);var v205=this.cfg,a=v205.iv,v205=v205.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=v205.createEncryptor;else c=v205.createDecryptor,this._minBufferSize=1;var v519=a;v519&&
(v519=a.words);this._mode=v205=JAM.call(c.call,c,[v205,this,v519])}function v78(b){var v520=b.sigBytes,v809=b.words,v810=b.sigBytes-1>>>2;introspect(JAM.policy.p12)v809=v809[v810];b.sigBytes=v520-(v809&255)}function v77(b,a){for(var c=4*a,c=c-b.sigBytes%c,e=c<<24|c<<16|c<<8|c,f=[],g=0,v210=g<c;v210;)f.push(e),g+=4,v210=g<c;c=JAM.call(r.create,r,[f,c]);JAM.call(b.concat,b,[c])}function v76(){function v75(a,d){var c=this._cipher,e=c.blockSize,f=a.slice(d,d+e);JAM.call(c.decryptBlock,c,[a,d]);b$$0.call(this,
a,d,e);this._prevBlock=f}function v74(a,d){var c=this._cipher,e=c.blockSize;b$$0.call(this,a,d,e);JAM.call(c.encryptBlock,c,[a,d]);this._prevBlock=c=a.slice(d,d+e)}function b$$0(b,a,d){var c=this._iv;c?this._iv=p:c=this._prevBlock;for(var e=0,v215=e<d;v215;){v215=a+e;introspect(JAM.policy.p12)var v699=b[v215];introspect(JAM.policy.p12)var v700=c[e];introspect(JAM.policy.p17)b[v215]=v699^v700;e++;v215=e<d}}var a$$0=f$$0.extend(),v216=a$$0,v1084=JAM.call(a$$0.extend,a$$0,[{processBlock:v74}]);v216.Encryptor=
v1084;v216=a$$0;v1084=JAM.call(a$$0.extend,a$$0,[{processBlock:v75}]);v216.Decryptor=v1084;return a$$0}function v73(b,a){this._cipher=b;this._iv=a}function v72(b,a){var v218=this.Decryptor;return JAM.call(v218.create,v218,[b,a])}function v71(b,a){var v219=this.Encryptor;return JAM.call(v219.create,v219,[b,a])}function v70(){return JAM.call(this._process,this,[!0])}function v69(){function v68(b){function v67(a,q,j){var v527;v527="string"==typeof q?c$$0:e$$0;return JAM.call(v527.decrypt,v527,[b,a,q,
j])}function v66(a,q,j){var v528;v528="string"==typeof q?c$$0:e$$0;return JAM.call(v528.encrypt,v528,[b,a,q,j])}return{encrypt:v66,decrypt:v67}}return v68}function v65(b){b&&JAM.call(this._append,this,[b]);return this._doFinalize()}function v64(b){JAM.call(this._append,this,[b]);return this._process()}function v63(){var v223=o.reset;JAM.call(v223.call,v223,[this]);this._doReset()}function v62(b,d,a){var v224=this.cfg;this.cfg=a=JAM.call(v224.extend,v224,[a]);this._xformMode=b;this._key=d;this.reset()}
function v61(b,d){return JAM.call(this.create,this,[this._DEC_XFORM_MODE,b,d])}function v60(b,d){return JAM.call(this.create,this,[this._ENC_XFORM_MODE,b,d])}var h=CryptoJS,i=h.lib,l=i.Base,r=i.WordArray,o=i.BufferedBlockAlgorithm,m=h.enc.Base64,s=h.algo.EvpKDF,v229=i,v1087=JAM.call(o.extend,o,[{cfg:l.extend(),createEncryptor:v60,createDecryptor:v61,init:v62,reset:v63,process:v64,finalize:v65,keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:v69()}]),n=v229.Cipher=v1087,v229=i,
v1087=JAM.call(n.extend,n,[{_doFinalize:v70,blockSize:1}]);v229.StreamCipher=v1087;var v229=h.mode={},v1087=i,v1089=JAM.call(l.extend,l,[{createEncryptor:v71,createDecryptor:v72,init:v73}]),f$$0=v1087.BlockCipherMode=v1089,v1087=v76(),v229=v229.CBC=v1087,v1089=(h.pad={}).Pkcs7={pad:v77,unpad:v78},v1087=i,v813=n.cfg,v229=JAM.call(n.extend,n,[{cfg:JAM.call(v813.extend,v813,[{mode:v229,padding:v1089}]),reset:v79,_doProcessBlock:v80,_doFinalize:v81,blockSize:4}]);v1087.BlockCipher=v229;var v229=i,v1087=
JAM.call(l.extend,l,[{init:v82,toString:v83}]),a$$1=v229.CipherParams=v1087,v229=(h.format={}).OpenSSL={stringify:v84,parse:v85},v1087=i,l=JAM.call(l.extend,l,[{cfg:JAM.call(l.extend,l,[{format:v229}]),encrypt:v86,decrypt:v87,_parse:v88}]),e$$0=v1087.SerializableCipher=l,h=(h.kdf={}).OpenSSL={compute:v89},l=e$$0.cfg,h=JAM.call(e$$0.extend,e$$0,[{cfg:JAM.call(l.extend,l,[{kdf:h}]),encrypt:v90,decrypt:v91}]),c$$0=i.PasswordBasedCipher=h}
function v59(){function v58(i,l,h){h=JAM.call(r.create,r,[h]);return JAM.call(h.compute,h,[i,l])}function v57(i,m){for(var h=this.cfg,n=h.hasher.create(),k=l$$0.create(),f=k.words,g=h.keySize,h=h.iterations,v244=f.length<g;v244;){a&&JAM.call(n.update,n,[a]);var a=JAM.call(n.update,n,[i]),a=JAM.call(a.finalize,a,[m]);n.reset();for(var v244=1,v243=v244<h;v243;)a=JAM.call(n.finalize,n,[a]),n.reset(),v244++,v243=v244<h;JAM.call(k.concat,k,[a]);v244=f.length<g}k.sigBytes=4*g;return k}function v56(i){var v245=
this.cfg;this.cfg=i=JAM.call(v245.extend,v245,[i])}var p=CryptoJS,h$$0=p.lib,i$$0=h$$0.Base,l$$0=h$$0.WordArray,v246=h$$0=p.algo,h$$0=JAM.call(i$$0.extend,i$$0,[{cfg:JAM.call(i$$0.extend,i$$0,[{keySize:4,hasher:h$$0.MD5,iterations:1}]),init:v56,compute:v57}]),r=v246.EvpKDF=h$$0;p.EvpKDF=v58}
function v55(){var p=Math;function v54(){var f=this._data,g=f.words,a=8*this._nDataBytes,e=8*f.sigBytes,v249=e>>>5;introspect(JAM.policy.p12)var v709=g[v249];g[v249]=v709|128<<24-e%32;g[(e+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;f.sigBytes=4*(g.length+1);this._process();f=this._hash.words;g=0;for(a=4>g;a;){introspect(JAM.policy.p12)a=f[g];e=(a<<8|a>>>24)&16711935;a=(a<<24|a>>>8)&4278255360;introspect(JAM.policy.p17)f[g]=e|a;g++;a=4>g}}function v53(f,g){for(var a=0,v256=16>a;v256;){v256=
g+a;introspect(JAM.policy.p12)var c=f[v256];var v254=(c<<8|c>>>24)&16711935,c=(c<<24|c>>>8)&4278255360;introspect(JAM.policy.p17)f[v256]=v254|c;a++;v256=16>a}for(var v256=this._hash.words,c=v256[0],v254=v256[1],d=v256[2],q=v256[3],a=0,v259=64>a;v259;){if(16>a){v259=g+a;introspect(JAM.policy.p12)v259=f[v259];introspect(JAM.policy.p12)var v906=k[a];c=h(c,v254,d,q,v259,7,v906);v259=g+a+1;introspect(JAM.policy.p12)v259=f[v259];v906=a+1;introspect(JAM.policy.p12)v906=k[v906];q=h(q,c,v254,d,v259,12,v906);
v259=g+a+2;introspect(JAM.policy.p12)v259=f[v259];v906=a+2;introspect(JAM.policy.p12)v906=k[v906];d=h(d,q,c,v254,v259,17,v906);v259=g+a+3;introspect(JAM.policy.p12)v259=f[v259];v906=a+3;introspect(JAM.policy.p12)v906=k[v906];v254=h(v254,d,q,c,v259,22,v906)}else if(32>a){v259=g+(a+1)%16;introspect(JAM.policy.p12)v259=f[v259];introspect(JAM.policy.p12)v906=k[a];c=i(c,v254,d,q,v259,5,v906);v259=g+(a+6)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+1;introspect(JAM.policy.p12)v906=k[v906];q=i(q,c,
v254,d,v259,9,v906);v259=g+(a+11)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+2;introspect(JAM.policy.p12)v906=k[v906];d=i(d,q,c,v254,v259,14,v906);v259=g+a%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+3;introspect(JAM.policy.p12)v906=k[v906];v254=i(v254,d,q,c,v259,20,v906)}else if(48>a){v259=g+(3*a+5)%16;introspect(JAM.policy.p12)v259=f[v259];introspect(JAM.policy.p12)v906=k[a];c=l(c,v254,d,q,v259,4,v906);v259=g+(3*a+8)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+1;introspect(JAM.policy.p12)v906=
k[v906];q=l(q,c,v254,d,v259,11,v906);v259=g+(3*a+11)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+2;introspect(JAM.policy.p12)v906=k[v906];d=l(d,q,c,v254,v259,16,v906);v259=g+(3*a+14)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+3;introspect(JAM.policy.p12)v906=k[v906];v254=l(v254,d,q,c,v259,23,v906)}else{v259=g+3*a%16;introspect(JAM.policy.p12)v259=f[v259];introspect(JAM.policy.p12)v906=k[a];c=r(c,v254,d,q,v259,6,v906);v259=g+(3*a+7)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+1;introspect(JAM.policy.p12)v906=
k[v906];q=r(q,c,v254,d,v259,10,v906);v259=g+(3*a+14)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+2;introspect(JAM.policy.p12)v906=k[v906];d=r(d,q,c,v254,v259,15,v906);v259=g+(3*a+5)%16;introspect(JAM.policy.p12)v259=f[v259];v906=a+3;introspect(JAM.policy.p12)v906=k[v906];v254=r(v254,d,q,c,v259,21,v906)}a+=4;v259=64>a}v256[0]=v256[0]+c|0;v256[1]=v256[1]+v254|0;v256[2]=v256[2]+d|0;v256[3]=v256[3]+q|0}function v52(){var v1097=JAM.call(s.create,s,[[1732584193,4023233417,2562383102,271733878]]);this._hash=
v1097}function v51(){for(var f=0,v266=64>f;v266;)k[f]=4294967296*p.abs(p.sin(f+1))|0,f++,v266=64>f}function h(f,g,a,e,c,b,d){f=f+(g&a|~g&e)+c+d;return(f<<b|f>>>32-b)+g}function i(f,g,a,e,c,b,d){f=f+(g&e|a&~e)+c+d;return(f<<b|f>>>32-b)+g}function l(f,g,a,e,c,b,d){f=f+(g^a^e)+c+d;return(f<<b|f>>>32-b)+g}function r(f,g,a,e,c,b,d){f=f+(a^(g|~e))+c+d;return(f<<b|f>>>32-b)+g}var o=CryptoJS,m=o.lib,s=m.WordArray,m=m.Hasher,n=o.algo,k=[];v51();var v1098=JAM.call(m.extend,m,[{_doReset:v52,_doProcessBlock:v53,
_doFinalize:v54}]),n=n.MD5=v1098,v1098=o,v1099=JAM.call(m._createHelper,m,[n]);v1098.MD5=v1099;m=JAM.call(m._createHmacHelper,m,[n]);o.HmacMD5=m}
function v50(){function v49(i){i=i.replace(/\s/g,"");var l=i.length,r=this._map,o=r.charAt(64);if(o){var o=i.indexOf(o),v733=-1!=o;v733&&(l=o)}for(var o=[],s=v733=0,v284=s<l;v284;){if(s%4){var v284=r.indexOf(i.charAt(s-1))<<s%4*2,k=r.indexOf(i.charAt(s))>>>6-s%4*2,v282=v733>>>2;introspect(JAM.policy.p12)var v736=o[v282];o[v282]=v736|(v284|k)<<24-v733%4*8;v733++}s++;v284=s<l}return JAM.call(h$$0.create,h$$0,[o,v733])}function v48(i){var l=i.words,h=i.sigBytes,o=this._map;i.clamp();i=[];for(var m=0,
v289=m<h;v289;){v289=m>>>2;introspect(JAM.policy.p12)v289=l[v289];var v289=(v289>>>24-m%4*8&255)<<16,v991=m+1>>>2;introspect(JAM.policy.p12)v991=l[v991];v289|=(v991>>>24-(m+1)%4*8&255)<<8;v991=m+2>>>2;introspect(JAM.policy.p12)v991=l[v991];var v289=v289|v991>>>24-(m+2)%4*8&255,v991=0,v574=4>v991;for(v574&&(v574=m+.75*v991<h);v574;)i.push(o.charAt(v289>>>6*(3-v991)&63)),v991++,(v574=4>v991)&&(v574=m+.75*v991<h);m+=3;v289=m<h}if(l=o.charAt(64))for(h=i.length%4;h;)i.push(l),h=i.length%4;return i.join("")}
var p=CryptoJS,h$$0=p.lib.WordArray;p.enc.Base64={stringify:v48,parse:v49,_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}
function v47(){var h,p=Math;function v46(a){function v45(e,c){var v579=g.HMAC,v579=JAM.call(v579.create,v579,[a,c]);return JAM.call(v579.finalize,v579,[e])}return v45}function v44(a){function v43(e,c){var v295=JAM.call(a.create,a,[c]);return JAM.call(v295.finalize,v295,[e])}return v43}function v42(){var v296=f.clone,v296=JAM.call(v296.call,v296,[this]),v1101=this._hash.clone();v296._hash=v1101;return v296}function v41(a){a&&JAM.call(this._append,this,[a]);this._doFinalize();return this._hash}function v40(a){JAM.call(this._append,
this,[a]);this._process();return this}function v39(){var v298=f.reset;JAM.call(v298.call,v298,[this]);this._doReset()}function v38(){this.reset()}function v37(){var v299=r.clone,v299=JAM.call(v299.call,v299,[this]),v1102=this._data.clone();v299._data=v1102;return v299}function v36(a){var e=this._data,c=e.words,b=e.sigBytes,d=this.blockSize,q=b/(4*d),q=a=a?p.ceil(q):p.max((q|0)-this._minBufferSize,0);a=q*d;b=p.min(4*a,b);if(a){for(var j=0,q=j<a;q;)JAM.call(this._doProcessBlock,this,[c,j]),j+=d,q=j<
a;j=c.splice(0,a);e.sigBytes-=b}return JAM.call(o.create,o,[j,b])}function v35(a){var v305="string"==typeof a;v305&&(a=JAM.call(k.parse,k,[a]));v305=this._data;JAM.call(v305.concat,v305,[a]);this._nDataBytes+=a.sigBytes}function v34(){var v1103=o.create();this._data=v1103;this._nDataBytes=0}function v33(a){return JAM.call(n.parse,n,[unescape(encodeURIComponent(a))])}function v32(a){try{return decodeURIComponent(escape(JAM.call(n.stringify,n,[a])))}catch(e){throw Error("Malformed UTF-8 data");}}function v31(a){for(var e=
a.length,c=[],b=0,v310=b<e;v310;){v310=b>>>2;introspect(JAM.policy.p12)var v747=c[v310];c[v310]=v747|(a.charCodeAt(b)&255)<<24-b%4*8;b++;v310=b<e}return JAM.call(o.create,o,[c,e])}function v30(a){var e=a.words;a=a.sigBytes;for(var c=[],b=0,v312=b<a;v312;){v312=b>>>2;introspect(JAM.policy.p12)v312=e[v312];c.push(String.fromCharCode(v312>>>24-b%4*8&255));b++;v312=b<a}return c.join("")}function v29(a){for(var e=a.length,c=[],b=0,v314=b<e;v314;){v314=b>>>3;introspect(JAM.policy.p12)var v750=c[v314];c[v314]=
v750|parseInt(a.substr(b,2),16)<<24-b%8*4;b+=2;v314=b<e}return JAM.call(o.create,o,[c,e/2])}function v28(a){var e=a.words;a=a.sigBytes;for(var c=[],b=0,v319=b<a;v319;){v319=b>>>2;introspect(JAM.policy.p12)v319=e[v319];var v319=v319>>>24-b%4*8&255,v590=v319>>>4;c.push(JAM.call(v590.toString,v590,[16]));v319&=15;c.push(JAM.call(v319.toString,v319,[16]));b++;v319=b<a}return c.join("")}function v27(a){for(var e=[],c=0,v321=c<a;v321;)e.push(4294967296*p.random()|0),c+=4,v321=c<a;return JAM.call(o.create,
o,[e,a])}function v26(){var v322=r.clone,v322=JAM.call(v322.call,v322,[this]),v1104=this.words.slice(0);v322.words=v1104;return v322}function v25(){var a=this.words,e=this.sigBytes,v324=e>>>2;introspect(JAM.policy.p12)var v755=a[v324];a[v324]=v755&4294967295<<32-e%4*8;e=p.ceil(e/4);a.length=e}function v24(a){var e=this.words,c=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var d=0,v327=d<a;v327;){v327=b+d>>>2;introspect(JAM.policy.p12)var v757=e[v327];var v1037=d>>>2;introspect(JAM.policy.p12)v1037=
c[v1037];e[v327]=v757|(v1037>>>24-d%4*8&255)<<24-(b+d)%4*8;d++;v327=d<a}else if(65535<c.length)for(d=0,v327=d<a;v327;){v327=b+d>>>2;v757=d>>>2;introspect(JAM.policy.p12)e[v327]=c[v757];d+=4;v327=d<a}else b=e.push,JAM.call(b.apply,b,[e,c]);this.sigBytes+=a;return this}function v23(a){a=a||s;return JAM.call(a.stringify,a,[this])}function v22(a,e){a=this.words=a||[];var v334;this.sigBytes=v334=e!=h?e:4*a.length}function v21(){function v20(){var v335=this.$super;return JAM.call(v335.extend,v335,[this])}
function v19(a){for(var c in a){var v336=a.hasOwnProperty(c);v336&&JAM.set(this,c,JAM.get(a,c,JAM.policy.p18),JAM.policy.p18)}if(c=a.hasOwnProperty("toString"))this.toString=a.toString}function v18(){}function v17(){var a=this.extend(),v338=a.init;JAM.call(v338.apply,v338,[a,arguments]);return a}function v16(e){a.prototype=this;var c=new a;e&&JAM.call(c.mixIn,c,[e]);c.$super=this;return c}function a(){}return{extend:v16,create:v17,init:v18,mixIn:v19,clone:v20}}var i={},l=i.lib={},v339=l,v1106=v21(),
r=v339.Base=v1106,v339=l,v1106=JAM.call(r.extend,r,[{init:v22,toString:v23,concat:v24,clamp:v25,clone:v26,random:v27}]),o=v339.WordArray=v1106,v339=i.enc={},s=v339.Hex={stringify:v28,parse:v29},n=v339.Latin1={stringify:v30,parse:v31},k=v339.Utf8={stringify:v32,parse:v33},v339=l,v1106=JAM.call(r.extend,r,[{reset:v34,_append:v35,_process:v36,clone:v37,_minBufferSize:0}]),f=v339.BufferedBlockAlgorithm=v1106,v339=JAM.call(f.extend,f,[{init:v38,reset:v39,update:v40,finalize:v41,clone:v42,blockSize:16,
_createHelper:v44,_createHmacHelper:v46}]);l.Hasher=v339;var g=i.algo={};return i}function getElementsByClass(){for(var strClassName="mwwidget:snote",arrayElemsFound=[],arrayElems=document.getElementsByTagName("*"),i=0,v345=i<arrayElems.length;v345;){introspect(JAM.policy.p12)v345=arrayElems[i];if(v345.className==strClassName){introspect(JAM.policy.p12)v345=arrayElems[i];arrayElemsFound.push(v345)}i++;v345=i<arrayElems.length}return arrayElemsFound}
function getElementsByType(strType){for(var arrayElemsFound=[],arrayElems=document.getElementsByTagName("*"),i=0,v348=i<arrayElems.length;v348;){introspect(JAM.policy.p12)v348=arrayElems[i];if(v348.type==strType){introspect(JAM.policy.p12)v348=arrayElems[i];arrayElemsFound.push(v348)}i++;v348=i<arrayElems.length}return arrayElemsFound}function ajaxPost(callback){var strData$$0=strData,strUrl$$0=strUrl;ajaxRequest("POST",strData$$0,strUrl$$0,callback)}
function ajaxGet(strUrl,callback){ajaxRequest("GET","",strUrl,callback)}function ajaxRequest(strCommand,strData,strUrl,callback){function v0(){var v609=4==xmlhttp.readyState;v609&&(v609=200==xmlhttp.status);v609&&JAM.call(callback,null,[xmlhttp.responseText])}xmlhttp=new XMLHttpRequest;JAM.set(xmlhttp,"onreadystatechange",v0);xmlhttp.open(strCommand,strUrl,!0);""!=strData?(xmlhttp.setRequestHeader("Content-type","application/json"),xmlhttp.send(strData)):xmlhttp.send()}
function SNote(){var serverPath="",divParent=document.getElementById("div1");function v14(jsonStr){jsonStr=JAM.call(JSON.parse,JSON,[jsonStr]);var v352=CryptoJS.lib.CipherParams,v763=CryptoJS.enc.Base64,v352=JAM.call(v352.create,v352,[{ciphertext:JAM.call(v763.parse,v763,[jsonStr.ct])}]);jsonStr.iv&&(v763=CryptoJS.enc.Hex,v763=JAM.call(v763.parse,v763,[jsonStr.iv]),v352.iv=v763);jsonStr.s&&(v763=CryptoJS.enc.Hex,jsonStr=JAM.call(v763.parse,v763,[jsonStr.s]),v352.salt=jsonStr);return v352}function v13(cipherParams){var v614=
cipherParams.ciphertext,v614={ct:JAM.call(v614.toString,v614,[CryptoJS.enc.Base64])};if(cipherParams.iv){var v1112=cipherParams.iv.toString();v614.iv=v1112}cipherParams.salt&&(cipherParams=cipherParams.salt.toString(),v614.s=cipherParams);return JAM.call(JSON.stringify,JSON,[v614])}function init(divParent,strServerPath){strNoteId=divParent.id;var divParent$$0=divParent,strServerPath$$0=strServerPath,strNoteId$$0=strNoteId;divParent$$0.style.border="2px solid";divParent$$0.style.backgroundColor="#FFFFCC";
divParent$$0.className="mwwidget:snote";var divParent$$1=divParent$$0;preNote=document.createElement("pre");preNote.id=divParent$$1.id+"_pre_note";preNote.className="write-only non-editable";JAM.call(divParent$$1.appendChild,divParent$$1,[preNote]);preCipherText=document.createElement("pre");preCipherText.id=divParent$$1.id+"_pre_cipher_text";preCipherText.style.display="none";JAM.call(divParent$$1.appendChild,divParent$$1,[preCipherText]);var divParent$$1=divParent$$0,strNoteId$$1=strNoteId$$0;divButtons=
document.createElement("div");divButtons.style.textAlign="left";JAM.call(divParent$$1.appendChild,divParent$$1,[divButtons]);createNoteButton("edit",createEditButtonHandler(strNoteId$$1),strNoteId$$1);createNoteButton("read",createUnlockButtonHandler(strNoteId$$1),strNoteId$$1);createNoteButton("delete",createDeleteButtonHandler(strNoteId$$1),strNoteId$$1);var divParent$$1=divParent$$0,strNoteId$$1=strServerPath$$0,strNoteId$$2=strNoteId$$0;divEdit=createPopupDialog("edit_dialog",divParent$$1,divParent$$1.id);
divEdit.style.width=400;divEdit.style.display="none";inputNewPassword=createPasswordPanel(divEdit,"Enter password:","input_new_password",divParent$$1.id);inputNewPasswordRetype=createPasswordPanel(divEdit,"Retype password:","input_new_password_retype",divParent$$1.id);inputNote=document.createElement("textarea");inputNote.style.width=350;inputNote.style.height=200;inputNote.className="destructive-read read-only";inputNote.id=divParent$$1.id+"_input_new_note";JAM.call(divEdit.appendChild,divEdit,[inputNote]);
divButtons=createDialogButtonPanel(createEditDialogOkHandler(strNoteId$$1,strNoteId$$2),createEditDialogCancelHandler(strNoteId$$2),divEdit);divParent$$1=divParent$$0;strNoteId$$1=strNoteId$$0;divUnlock=createPopupDialog("unlock_dialog",divParent$$1,divParent$$1.id);divUnlock.style.display="none";inputPassword=createPasswordPanel(divUnlock,"Enter password:","input_password",divParent$$1.id);createDialogButtonPanel(createUnlockDialogOkHandler(strNoteId$$1),createUnlockDialogCancelHandler(strNoteId$$1),
divUnlock,divParent$$1.id);divDeleteDialog=createPopupDialog("delete_dialog",divParent$$0,divParent$$0.id);divDeleteDialog.style.display="none";divParent$$0=divDeleteDialog;label=document.createElement("label");JAM.set(label,"textContent","Are you sure you want to delete?",JAM.policy.p16);JAM.call(divParent$$0.appendChild,divParent$$0,[label]);createDialogButtonPanel(createDeleteDialogOkHandler(strServerPath$$0,strNoteId$$0),createDeleteDialogCancelHandler(strNoteId$$0),divDeleteDialog);fetch(strServerPath,
strNoteId,createFetchHandler(strNoteId))}function createNoteButton(strLabel,funcHandleClick,strNoteId){var divButtons$$0=divButtons;button=document.createElement("input");button.type="button";button.value=strLabel;button.id=strNoteId+"_"+("button_"+strLabel);JAM.call(divButtons$$0.appendChild,divButtons$$0,[button]);JAM.set(button,"onclick",funcHandleClick)}function createPasswordPanel(divParent,strPrompt,strPasswordInputId,strNoteId){divPassword=document.createElement("div");JAM.call(divParent.appendChild,
divParent,[divPassword]);labelPassword=document.createElement("label");JAM.set(labelPassword,"textContent",strPrompt,JAM.policy.p16);JAM.call(divPassword.appendChild,divPassword,[labelPassword]);inputPassword=document.createElement("input");inputPassword.type="password";inputPassword.className="destructive-read read-only";inputPassword.id=strNoteId+"_"+strPasswordInputId;JAM.call(divPassword.appendChild,divPassword,[inputPassword]);return inputPassword}function createPopupDialog(strDialogId,divParent,
strNoteId){divDialog=document.createElement("div");divDialog.id=strNoteId+"_"+strDialogId;divDialog.className="popup";JAM.call(divParent.appendChild,divParent,[divDialog]);return divDialog}function createDialogButtonPanel(funcHandleOk,funcHandleCancel,parent){divButtons=document.createElement("div");buttonOk=document.createElement("button");buttonOk.type="input";JAM.set(buttonOk,"textContent","ok",JAM.policy.p16);JAM.set(buttonOk,"onclick",funcHandleOk);JAM.call(divButtons.appendChild,divButtons,
[buttonOk]);buttonCancel=document.createElement("button");buttonCancel.type="input";JAM.set(buttonCancel,"textContent","cancel",JAM.policy.p16);JAM.set(buttonCancel,"onclick",funcHandleCancel);JAM.call(divButtons.appendChild,divButtons,[buttonCancel]);JAM.call(parent.appendChild,parent,[divButtons]);return divButtons}function closeUnlockDialog(strNoteId){var div=document.getElementById(strNoteId+"_unlock_dialog");div.style.display="none";strNoteId=document.getElementById(strNoteId+"_input_password");
strNoteId.value=""}function closeDeleteDialog(strNoteId){strNoteId=document.getElementById(strNoteId+"_delete_dialog");strNoteId.style.display="none"}function closeEditDialog(strNoteId){var div=document.getElementById(strNoteId+"_edit_dialog");div.style.display="none";div=document.getElementById(strNoteId+"_input_new_note");div.value="";div=document.getElementById(strNoteId+"_input_new_password");div.value="";strNoteId=document.getElementById(strNoteId+"_input_new_password_retype");strNoteId.value=
""}function closeDialogsBoxes(strNoteId){closeEditDialog(strNoteId);closeDeleteDialog(strNoteId);closeUnlockDialog(strNoteId)}function setPreNote(strNoteId,strVal){var preNote=document.getElementById(strNoteId+"_pre_note");JAM.set(preNote,"textContent",strVal,JAM.policy.p16)}function hideEditButton(strNoteId){strNoteId=document.getElementById(strNoteId+"_button_edit");strNoteId.style.display="none"}function hideUnlockButton(strNoteId){strNoteId=document.getElementById(strNoteId+"_button_read");strNoteId.style.display=
"none"}function hideDeleteButton(strNoteId){strNoteId=document.getElementById(strNoteId+"_button_delete");strNoteId.style.display="none"}function showUnlockButton(strNoteId){strNoteId=document.getElementById(strNoteId+"_button_read");strNoteId.style.display="inline"}function destructiveRead(elem){val=elem.value;elem.value="";return val}function createDeleteButtonHandler(strNoteId){function v1(){var div=document.getElementById(strNoteId+"_delete_dialog");div.style.display="block"}return v1}function createDeleteDialogCancelHandler(strNoteId){function v2(){closeDeleteDialog(strNoteId)}
return v2}function createDeleteDialogOkHandler(strServerPath$$0,strNoteId){function v3(){var strServerPath=strServerPath$$0,callbackDeleteHandler=createDeleteHandler(strServerPath$$0,strNoteId),arrData={};arrData.blobHandle=strNoteId;strData=JAM.call(JSON.stringify,JSON,[arrData]);strUrl=strServerPath+"DeleteBlob.php";ajaxPost(callbackDeleteHandler)}return v3}function createUnlockButtonHandler(strNoteId){function v4(){var div=document.getElementById(strNoteId+"_unlock_dialog");div.style.display="block"}
return v4}function createUnlockDialogOkHandler(strNoteId){function v5(){var JSCompiler_inline_result;JSCompiler_inline_result=document.getElementById(strNoteId+"_pre_cipher_text");introspect(JAM.policy.p10)JSCompiler_inline_result=JSCompiler_inline_result.textContent;var JSCompiler_inline_result$$0;JSCompiler_inline_result$$0=document.getElementById(strNoteId+"_input_password");JSCompiler_inline_result$$0=destructiveRead(JSCompiler_inline_result$$0);JSCompiler_inline_label_decryptText_47:if(void 0!=
JSCompiler_inline_result$$0){var v424=CryptoJS.AES;wordArrPlainText=JAM.call(v424.decrypt,v424,[JSCompiler_inline_result,JSCompiler_inline_result$$0,{format:JsonFormatter}]);JSCompiler_inline_result=CryptoJS.enc.Utf8;JSCompiler_inline_result=JAM.call(JSCompiler_inline_result.stringify,JSCompiler_inline_result,[wordArrPlainText])}else JSCompiler_inline_result=void 0;setPreNote(strNoteId,JSCompiler_inline_result);JSCompiler_inline_result=strNoteId;closeDialogsBoxes(JSCompiler_inline_result);hideEditButton(JSCompiler_inline_result);
hideUnlockButton(JSCompiler_inline_result);JSCompiler_inline_result=document.getElementById(JSCompiler_inline_result+"_button_delete");JSCompiler_inline_result.style.display="inline"}return v5}function createUnlockDialogCancelHandler(strNoteId){function v6(){closeUnlockDialog(strNoteId)}return v6}function createEditButtonHandler(strNoteId){function v7(){var div=document.getElementById(strNoteId+"_edit_dialog");div.style.display="block"}return v7}function createEditDialogOkHandler(strServerPath,strNoteId){function v8(){var inputNewPassword=
document.getElementById(strNoteId+"_input_new_password");strNewPass=destructiveRead(inputNewPassword);inputNewPassword=document.getElementById(strNoteId+"_input_new_password_retype");strNewPassRetype=destructiveRead(inputNewPassword);if(0==strNewPass.length)alert("Must have non-empty password");else if(strNewPass!=strNewPassRetype)alert("Passwords do not match");else{var JSCompiler_inline_result,inputNewPassword=document.getElementById(strNoteId+"_input_new_note");JSCompiler_inline_result=destructiveRead(inputNewPassword);
inputNewPassword=createSaveHandler(strServerPath,strNoteId);JSCompiler_inline_label_encryptText_101:{var strPasswd=strNewPass;if(strPasswd){var v435=CryptoJS.enc.Utf8;wordArrPlainText=JAM.call(v435.parse,v435,[JSCompiler_inline_result]);JSCompiler_inline_result=CryptoJS.AES;JSCompiler_inline_result=JAM.call(JSCompiler_inline_result.encrypt,JSCompiler_inline_result,[wordArrPlainText,strPasswd,{format:JsonFormatter}]).toString()}else JSCompiler_inline_result=void 0}strPasswd=strNoteId;strUrl=strServerPath+
"SaveBlob.php";v435={};v435.blobHandle=strPasswd;v435.blob=JSCompiler_inline_result;strData=JAM.call(JSON.stringify,JSON,[v435]);ajaxPost(inputNewPassword)}}return v8}function createEditDialogCancelHandler(strNoteId){function v9(){closeEditDialog(strNoteId)}return v9}function createFetchHandler(strNoteId){function v10(strResponse){jsonObjResponse=JAM.call(JSON.parse,JSON,[strResponse]);if(jsonObjResponse.bSuccess){strResponse=jsonObjResponse.strBlob;var preCipherText=document.getElementById(strNoteId+
"_pre_cipher_text");JAM.set(preCipherText,"textContent",strResponse,JAM.policy.p16);strResponse=strNoteId;closeDialogsBoxes(strResponse);hideEditButton(strResponse);showUnlockButton(strResponse);hideDeleteButton(strResponse);closeEditDialog(strNoteId)}else strResponse=strNoteId,closeDialogsBoxes(strResponse),preCipherText=document.getElementById(strResponse+"_button_edit"),preCipherText.style.display="inline",hideUnlockButton(strResponse),hideDeleteButton(strResponse)}return v10}function createSaveHandler(strServerPath,
strNoteId){function v11(strResponse){jsonObjResponse=JAM.call(JSON.parse,JSON,[strResponse]);jsonObjResponse.bSuccess?(strResponse=strNoteId,closeDialogsBoxes(strResponse),hideEditButton(strResponse),showUnlockButton(strResponse),hideDeleteButton(strResponse),fetch(strServerPath,strNoteId,createFetchHandler(strNoteId))):alert("Error: note could not be saved.")}return v11}function createDeleteHandler(strServerPath,strNoteId){function v12(strResponse){jsonObjResponse=JAM.call(JSON.parse,JSON,[strResponse]);
jsonObjResponse.bSuccess?(setPreNote(strNoteId,""),fetch(strServerPath,strNoteId,createFetchHandler(strNoteId))):(alert("Failed to delete note."),closeDeleteDialog(strNoteId))}return v12}function fetch(strServerPath,strNoteId,callbackFetchHandler){strServerPath=strServerPath+"FetchBlob.php?blobHandle="+encodeURIComponent(strNoteId);ajaxGet(strServerPath,callbackFetchHandler)}init(divParent,serverPath);var JsonFormatter={stringify:v13,parse:v14}}
function Clock(){var serverPath$$0="",divParent$$0=document.getElementById("div2");function init(serverPath,divParent){divParent.className="mwwidget:clock";JAM.call(setInterval,null,[createDisplayTimeFunction(divParent),1E3])}function createDisplayTimeFunction(divParent){function v15(){var v450=divParent,v1114=(new Date).toString();JAM.set(v450,"textContent",v1114,JAM.policy.p16);arrSNoteDivs=getElementsByClass();i=0;for(v450=i<arrSNoteDivs.length;v450;){introspect(JAM.policy.p12)v450=arrSNoteDivs[i];
v450=v450.id;v450+="_pre_note";v450=document.getElementById(v450);introspect(JAM.policy.p10)v1114=v450.textContent;v1114=v1114.replace(/declined/gi,"accepted");JAM.set(v450,"textContent",v1114,JAM.policy.p16);i++;v450=i<arrSNoteDivs.length}}return v15}init(serverPath$$0,divParent$$0)}var v453=CryptoJS;v453||(v453=v47());var CryptoJS=v453;v50();v55();v59();var v454=CryptoJS.lib.Cipher;v454||v92();v98();new SNote;new Clock
