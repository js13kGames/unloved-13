const mge={TITLE:'Mini Game Engine',VERSION:'V1.0.0',bj:{},bv:{},ck:{},dg:{},dt:{},cqboard:{},hc:{}};mge.hg={get hd(){return mge.bj.ai.currentTime},get he(){return mge.bj.aq},set he(_value){mge.bj.be(_value)},hf:function(al,an,ad,ae,aq){mge.bj.ak(al,mge.bj.aj,an,ad,ae,aq)}};mge.hi={get bpm(){return mge.hc.fo},set bpm(_value){mge.hc.fo=_value},hh:function(fu,fv,aq){return mge.hc.ahTrack(fu,fv,aq)},start:function(){mge.hc.cg()},stop:function(){mge.hc.dd()},reset:function(){mge.hc.ah()}};mge.game={get width(){return mge.bv.bo.width},set width(_value){mge.bv.bo.width=_value},get height(){return mge.bv.bo.height},set height(_value){mge.bv.bo.height=_value},get fps(){return mge.dg.da},get hj(){return mge.ck.cj()},start:function(cf){mge.ck.cg(cf)},hk:function(cf){mge.ck.ce(cf)},hl:function(){return mge.ck.ahSprite()}};mge.ho={get hm(){return mge.cqboard.cn},hn:function(cq){return mge.cqboard.co(cq)}};mge.hq={get hp(){return mge.dt.dj},get x(){return mge.dt._x},get y(){return mge.dt._y}};mge.fl={set hr(_value){this.dw=_value},get width(){return this.bl},set width(_value){this.bl=_value},get height(){return this.bm},set height(_value){this.bm=_value},get x(){return this._x},set x(_value){this._x=_value},get y(){return this._y},set y(_value){this._y=_value},get hs(){return this.bs},set hs(_value){this.bs=_value},get ht(){return this.bt},set ht(_value){this.bt=_value},get hu(){return this.eb},set hu(_value){this.eb=_value},get hv(){return this.ec},set hv(_value){this.ec=_value},get hw(){return this.eo(mge.dt._x,mge.dt._y)},get hp(){return this.dj(mge.dt._x,mge.dt._y,mge.dt.dj)},draw:function(){this.ed()},isColliding:function(ef){return this.ee(ef)},hy:function(){return this.ex()},ia:function(){this.fc()},hz:function(){this.fa()},ib:function(_method){return this.fe(_method)},ic:function(fl){return this.fg(fl)}};mge.bj.aa=function(ab,ac,ad,ae){let a=ab.a||0.0001;let d=ab.d||0.0001;let s=ab.s||0.0001;let r=ab.r||0.0001;let af=ab.minValue||0.0001;let ag=ab.maxValue||1;if(ae<=a){ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag*ae/a,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}else if(ae<=a+d){ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag,ad+a);ac.exponentialRampToValueAtTime(ag*s*d/ae,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}else{ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag,ad+a);ac.exponentialRampToValueAtTime(ag*s,ad+a+d);ac.setValueAtTime(ag*s,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}};mge.bj.ah=function(){this.ai='';this.aj='';this.aq=1;this.ai=new(window.AudioContext||window.webkitAudioContext)();this.aj=this.ai.createGain();this.aj.connect(this.ai.destination)};mge.bj.ak=function(al,am,an,ad,ae,aq){let aa=this.aa;let as=this.ai;let at=al.oscType||'sine';let au=al.filterType||'lowpass';let aqADSR=al.heADSR||{a:0,d:0,s:1,r:0,minValue:1,maxValue:1};let aw=al.pitchADSR||{a:0,d:0,s:1,r:0,minValue:an,maxValue:an};let ax=al.detuneADSR||{a:0,d:0,s:1,r:0,minValue:0,maxValue:0};let ay=al.filterFreqADSR||{a:0,d:0,s:1,r:0,minValue:20000,maxValue:20000};let az=al.filterQADSR||{a:0,d:0,s:1,r:0,minValue:1,maxValue:1};let bd='';if(at=='noise'){bd=as.createBufferSource();let buffer=as.createBuffer(1,as.sampleRate*(ae+aqADSR.r),as.sampleRate);let noiseOutput=buffer.getChannelData(0);for(let i=0;i<buffer.length;i++){noiseOutput[i]=Math.random()*2-1};bd.buffer=buffer;}else{bd=as.createOscillator();bd.type=at;aa(aw,bd.frequency,ad,ae);aa(ax,bd.detune,ad,ae)};bd.start(ad);bd.stop(ad+ae+aqADSR.r);let ba=as.createGain();aa(aqADSR,ba.gain,ad,ae);let bb=as.createGain();bb.gain.setValueAtTime(mge.bj.aqToGain(aq)*0.04,ad);let bc=as.createBiquadFilter();bc.type=au;aa(ay,bc.frequency,ad,ae);aa(az,bc.Q,ad,ae);bd.connect(bc);bc.connect(ba);ba.connect(bb);bb.connect(am)};mge.bj.be=function(aq){if(aq<=0){mge.bj.aq=0}else if(aq>=1){mge.bj.aq=1}else{mge.bj.aq=aq};mge.bj.aj.gain.setValueAtTime(mge.bj.aqToGain(mge.bj.aq),mge.hg.hd)};mge.bj.aqToGain=function(aq){let bi=30;if(aq<=0){return 0;}else if(aq>=1){return 1;}else{return Math.pow(10,(aq-1)*bi/10)}};mge.bv.ah=function(bl,bm,bn){this.bo='';this.bp='';this.bo=document.getElementById(bn);if(this.bo){this.bo.remove()};this.bo=document.createElement('canvas');this.bo.id=bn;this.bo.width=bl;this.bo.height=bm;document.body.appendChild(this.bo);this.bp=this.bo.getContext('2d')};mge.bv.bq=function(){let br=this.bo;let bs=(window.innerWidth-10)/br.width;let bt=(window.innerHeight-10)/br.height;let bu=Math.min(bs,bt);br.style.transformOrigin='0 0';br.style.transform='scale('+bu+')';br.display='block'};mge.ck.ah=function(bl,bm){this.bz='';this.ca='';this.cb=[];let bv=mge.bv;let bj=mge.bj;let dg=mge.dg;let dt=mge.dt;let cqboard=mge.cqboard;let hc=mge.hc;bv.ah(bl,bm,'GAME_RENDER_CANVAS');dt.ah(bv.bo);cqboard.ah();bj.ah();hc.ah();dg.ah()};mge.ck.ahSprite=function(){let fl=mge.fl;let bv=mge.bv;let ck=mge.ck;let bp=bv.bp;let _newSprite=Object.create(fl);_newSprite.ah(bp);ck.cb.push(_newSprite);return _newSprite};mge.ck.cj=function(){let ci=0;this.cb.forEach(fl=>{ci+=fl.ez.length;});return ci};mge.ck.ce=function(cf){if(!cf.start){cf.start=function(){}};if(!cf.update){cf.update=function(){}};if(!cf.draw){cf.draw=function(){}};this.ca=cf};mge.ck.cg=function(cf){let dg=mge.dg;this.ce(cf);dg.cg()};mge.cqboard.co=function(cq){if(this.cn.indexOf(cq)==-1){return false;}else{return true}};mge.cqboard.cp=function(e){let cq=e.key;if(this.cm.indexOf(cq)==-1){this.cm.push(cq)}};mge.cqboard.cr=function(e){let cq=e.key;let indexOfKey=this.cm.indexOf(cq);if(indexOfKey !=-1){this.cm.splice(indexOfKey,1)}};mge.cqboard.ct=function(){this.cn=[];this.cm=[]};mge.cqboard.cu=function(){this.cn=this.cm.slice()};mge.cqboard.ah=function(){this.cn=[];this.cm=[];document.onkeydown=function(e){mge.cqboard.cp(e)};document.onkeyup=function(e){mge.cqboard.cr(e)}};mge.dg.ah=function(){this.cx=0;this.cy=0;this.cz=0;this.da=0;this.db='stopped'};mge.dg.cg=function(){this.db='running';this.de()};mge.dg.dd=function(){this.db='stopped';this.de()};mge.dg.de=function(){let bv=mge.bv;let ck=mge.ck;let dt=mge.dt;let cqboard=mge.cqboard;let hc=mge.hc;let bp=bv.bp;let bo=bv.bo;let dg=mge.dg;let cb=ck.cb;dg.cy=performance.now();dg.cz=dg.cy-dg.cx;dg.da=1/(dg.cz/1000);dt.cu();cqboard.cu();if(ck.bz !=ck.ca){ck.bz=ck.ca;dt.ct();cqboard.ct();ck.bz.start()};ck.bz.update();cb.forEach(fl=>{fl.ev();});bp.clearRect(0,0,bo.width,bo.height);ck.bz.draw();bv.bq();hc.gq();dg.cx=dg.cy;if(dg.db=='running'){requestAnimationFrame(dg.de)}};mge.dt.dn=function(e){this.dm=true;this.dk=e.offsetX;this.dl=e.offsetY};mge.dt.dp=function(e){this.dk=e.offsetX;this.dl=e.offsetY};mge.dt.dq=function(e){this.dk='';this.dl=''};mge.dt.ct=function(){this._x=0;this._y=0;this.dj=false;this.dk=0;this.dl=0;this.dm=false};mge.dt.cu=function(){this._x=this.dk;this._y=this.dl;this.dj=this.dm;this.dm=false};mge.dt.ah=function(br){this._x=0;this._y=0;this.dj=false;this.dk=0;this.dl=0;this.dm=false;br.onclick=function(e){mge.dt.dn(e)};br.onhqmove=function(e){mge.dt.dp(e)};br.onhqout=function(e){mge.dt.dq(e)}};mge.fl.ah=function(dv){this.dv=dv;this.dw=function(){};this.bl=100;this.bm=100;this._x=0;this._y=0;this.bs=1;this.bt=1;this.eb=true;this.ec=false;this.ez=[];this.ey=false};mge.fl.ed=function(){if(this.eb){let dv=this.dv;dv.save();dv.translate(this._x-this.bl*this.bs/2,this._y-this.bm*this.bt/2);dv.scale(this.bs,this.bt);this.dw(dv);if(this.ec){dv.strokeStyle='red';dv.strokeRect(0,0,this.bl,this.bm);dv.strokeRect(this.bl/2,this.bm/2,1,1)};dv.restore()}};mge.fl.dj=function(el,em,en){if(this.eo(el,em)&& en){return true;}else{return false}};mge.fl.ee=function(ef){let eg=(this.bl/2)*this.bs+(ef.bl/2)*ef.bs;let eh=(this.bm/2)*this.bt+(ef.bm/2)*ef.bt;let ei=Math.abs(this._x-ef._x);let ej=Math.abs(this._y-ef._y);if(ei<eg && ej<eh){return true;}else{return false}};mge.fl.eo=function(el,em){let er=this._x+(this.bl/2)*this.bs;let es=this._x-(this.bl/2)*this.bs;let et=this._y+(this.bm/2)*this.bt;let eu=this._y-(this.bm/2)*this.bt;if(el>=es && el<=er && em>=eu && em<=et){return true;}else{return false}};mge.fl.ev=function(){let ew=[];this.ez.forEach(fk=>{if(fk.ey){ew.push(fk)};});this.ez=ew};mge.fl.ex=function(){let fk=Object.create(this);fk.ey=true;this.ez.push(fk);return fk};mge.fl.fc=function(){this.ey=false};mge.fl.fa=function(){this.ez=[]};mge.fl.fe=function(_method){this.ez.forEach(fk=>{fk[_method]();})};mge.fl.fg=function(ef){let fi=[];ef.ez.forEach(fk=>{if(this.ee(fk)){fi.push(fk)};});return fi};mge.hc.ah=function(){this.fn=[];this.fo=60;this.fp=1;this.fq=0;this.fr=0;this.db='stopped'};mge.hc.ga=function(gb){let gc={C:32.7,Db:34.6,D:36.7,Eb:38.9,E:41.2,F:43.6,Gb:46.2,G:49,Ab:51.9,A:55,Bb:58.3,B:61.7};let gd=parseInt(gb.substr(gb.length-1,gb.length),10);let ge=gb.substr(0,gb.length-1);let an=gc[ge]*Math.pow(2,gd);return Math.round(an)};mge.hc.ahTrack=function(fu,fv,aq){let fy=mge.hc.fy;let fn=mge.hc.fn;let fz=Object.create(fy);fz.fu=fu;fz.fv=fv;fz.aq=aq;fn.push(fz);return fz};mge.hc.gg=function(fy,gi){let fv=fy.fv;let aq=fy.aq;let gl=fy.ha(gi);let gm=this.fq;for(let i=0;i<gl.length;i+=2){let ge=gl[i];let geFrequency=this.ga(ge);let ae=gl[i+1]*60/this.fo;fv.play(geFrequency,gm,ae,aq);gm+=ae}};mge.hc.gq=function(){let gr=mge.bj.ai.currentTime;if(gr>=this.fr && this.db=='started'){for(let i=0;i<this.fn.length;i++){let fy=this.fn[i];this.gg(fy,this.fp)};this.fp+=1;this.fr=this.fq+3*60/this.fo;this.fq+=4*60/this.fo}};mge.hc.cg=function(){this.fp=1;this.fq=mge.bj.ai.currentTime;this.fr=0;this.db='started'};mge.hc.dd=function(){this.db='stopped'};mge.hc.fy={fu:[],fv:{},aq:1,be:function(aq){if(aq<=0){this.aq=0}else if(aq>=1){this.aq=1}else{this.aq=aq}},ha:function(hb){let _nbBars=this.fu.length;if(_nbBars==0){return ''}else if(hb%_nbBars==0){return this.fu[_nbBars-1]}else{return this.fu[hb%_nbBars-1]}}};mge.ck.ah(640,360);mge.id={ie:{ig:[]},ih:{}};mge.id.ih={set config(_value){this.ii(_value)},get config(){return this.ij},set scale(_value){this.im(_value)},get scale(){return this.bu},get width(){return this.ij._s._w*this.bu},get height(){return this.ij._s._h*this.bu},load:function(){this.ip()},draw:function(dv){this.ed(dv)}};mge.image={create:function(){return mge.id.ie.ahImage()},loadNextImage:function(){return mge.id.ie.ipNextImage()}};mge.id.ih.ii=function(_value){this.ij=_value;this.ik=false;this.il={}};mge.id.ih.im=function(_value){this.bu=_value;this.ik=false;this.il={}};mge.id.ih.ip=function(){let ij=this.ij;let bu=this.bu;let _s=ij._s||{};let _w=_s._w*bu||200;let _h=_s._h*bu||200;let iq=new OffscreenCanvas(_w,_h);let dv=iq.getContext('2d');let _p=ij._p||[];_p.forEach(function(_path){let fs=_path._fs||['C','red'];if(fs[0]=='C'){dv.fillStyle=fs[1]}else if(fs[0]=='LG'||fs[0]=='RG'){let ir={};if(fs[0]=='LG'){ir=dv.createLinearGradient(fs[1]*bu,fs[2]*bu,fs[3]*bu,fs[4]*bu)}else{ir=dv.createRadialGradient(fs[1]*bu,fs[2]*bu,fs[3]*bu,fs[4]*bu,fs[5]*bu,fs[6]*bu)};let _gp=_path._gp;_gp.forEach(function(_point){ir.addColorStop(_point[0],_point[1]);});dv.fillStyle=ir};let ss=_path._ss||['red',2,'square','miter'];dv.strokeStyle=ss[0];dv.lineWidth=ss[1]*bu;dv.lineCap=ss[2];dv.lineJoin=ss[3];dv.beginPath();let _c=_path._c||[];_c.forEach(function(_cmd){if(_cmd[0]=='M'){dv.moveTo(_cmd[1]*bu,_cmd[2]*bu)}else if(_cmd[0]=='L'){dv.lineTo(_cmd[1]*bu,_cmd[2]*bu)}else if(_cmd[0]=='Q'){dv.quadraticCurveTo(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,_cmd[4]*bu)}else if(_cmd[0]=='B'){dv.bezierCurveTo(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,_cmd[4]*bu,_cmd[5]*bu,_cmd[6]*bu)}else if(_cmd[0]=='C'){dv.arc(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,0,2*Math.PI)}else if(_cmd[0]=='R'){dv.rect(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,_cmd[4]*bu)}else if(_cmd[0]=='E'){dv.ellipse(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,_cmd[4]*bu,_cmd[5],0,2*Math.PI)};});if(fs[0]!='N'){dv.fill()};if(ss[1]>0){dv.stroke()};let _txt=_path._t||[0,0,20,'normal','serif','start','alphabetic',''];let _fontSize=_txt[2]*bu;dv.font=_txt[3]+' '+_fontSize.toString()+'px '+_txt[4];dv.textAlign=_txt[5];dv.textBaseline=_txt[6];if(fs[0]!='N'){dv.fillText(_txt[7],_txt[0]*bu,_txt[1]*bu)};if(ss[1]>0){dv.strokeText(_txt[7],_txt[0]*bu,_txt[1]*bu)};});this.il=iq.transferToImageBitmap();this.ik=true};mge.id.ih.ah=function(){this.ij={};this.ik=false;this.bu=1;this.il={}};mge.id.ih.ed=function(dv){dv.drawImage(this.il,0,0)};mge.id.ie.ahImage=function(){let iw=Object.create(mge.id.ih);iw.ah();this.ig.push(iw);return iw};mge.id.ie.ipNextImage=function(){let iz=mge.id.ie.ig;let ja=0;let jb=false;let izLength=iz.length;if(iz.length==0){return 1;}else{iz.forEach(function(_img){if(_img.ik){ja+=1}else if(!jb){_img.ip();ja+=1;jb=true};});return ja/izLength}};mge.jx={jy:{}};mge.jx._activateOwnCloneAnimation=function(fk){fk.animation=Object.create(fk.__proto__.animation)};mge.jx.ipExtension=function(fl){fl.animation=Object.create(mge.jx.jy);fl.animation.ah()};mge.animation={loadExtention:function(fl){mge.jx.ipExtension(fl)},activateOwnCloneAnimation:function(fk){mge.jx._activateOwnCloneAnimation(fk)}};mge.jx.jy={set timeBetweenFrames(_value){this.kg=_value},get timeBetweenFrames(){return this.kg},set frames(kc){this.kb(kc)},draw:function(dv){this.ed(dv)},restart:function(){this.kh()}};mge.jx.jy.ed=function(dv){if(this.ke==-1){this.ke=0;this.kf=Date.now();}else if(Date.now()- this.kf>this.kg){this.ke+=1;if(this.ke>this.kc.length-1){this.ke=0};this.kf=Date.now()};this.kc[this.ke].draw(dv)};mge.jx.jy.kb=function(kc){this.kc=kc;this.ke==-1;this.kf=Date.now()};mge.jx.jy.ah=function(){this.kc=[];this.ke=-1;this.kf=Date.now();this.kg=100};mge.jx.jy.kh=function(){this.ke=-1};mge.jd={je:{ig:[]},jg:{}};mge.jd.jg={set config(_value){this.ii(_value)},get config(){return this.ij},load:function(){this.ip()},play:function(fo,fvs,_mix){this.gq(fo,fvs,_mix)}};mge.song={create:function(){return mge.jd.je.ahSong()},loadNextSong:function(){return mge.jd.je.ipNextSong()}};mge.jd.jg.ah=function(){this.ij={};this.ik=false;this.fn=[]};mge.jd.jg.ip=function(){let ij=this.ij;let fn=[];ij._p.forEach(function(_part){let _currentPart=[];ij._str.forEach(function(_section){_part._s[_section].forEach(function(gl){_currentPart.push(_part._b[gl]);});});fn.push(_currentPart);});this.fn=fn;this.ik=true};mge.jd.jg.gq=function(fo,fvs,_mix){let jn={play:function(an,ad,ae,aq){let al={heADSR:{a:0.02,d:400,s:0,r:0.1,minValue:0,maxValue:aq},oscType:'sine'};mge.hg.hf(al,an,ad,ae,aq)}};if(!this.ik){this.ip()};mge.hi.stop();mge.hi.reset();let jo=0;this.fn.forEach(function(fy){mge.hi.hh(fy,fvs[jo]||jn,_mix[jo]||1);jo+=1;});mge.hi.bpm=fo;mge.hi.start()};mge.jd.jg.ii=function(_value){this.ij=_value;this.ik=false;this.fn=[]};mge.jd.je.ahSong=function(){let js=Object.create(mge.jd.jg);js.ah();this.ig.push(js);return js};mge.jd.je.ipNextSong=function(){let iz=mge.jd.je.ig;let ju=0;let jv=false;let izLength=iz.length;if(iz.length==0){return 1;}else{iz.forEach(function(_song){if(_song.ik){ju+=1}else if(!jv){_song.ip();ju+=1;jv=true};});return ju/izLength}};game={state:'boot',scenes:{boot:{},main:{}},images:{logoDilpleu:mge.image.create(),playButton:mge.image.create(),playerBody:mge.image.create(),openEye:mge.image.create(),closeEye:mge.image.create(),legsIdle:mge.image.create(),legsWalk1:mge.image.create(),legsWalk2:mge.image.create(),legsWalk3:mge.image.create(),legsWalk4:mge.image.create(),pltf1:mge.image.create()},animations:{},sprites:{logoDilpleu:mge.game.hl(),playButton:mge.game.hl(),platform:mge.game.hl(),player:mge.game.hl(),eye:mge.game.hl(),legs:mge.game.hl()},variables:{camX:0,camY:0,camMaxOffsetX:300,camMaxOffsetY:100,platformMessage:[]},const:{gravity:5000},instruments:{},songs:{mainSong:mge.song.create()},utils:{},levels:{}};window.addEventListener("load",(event)=>{let loading=document.getElementById("loading");loading.remove();mge.game.width=1280;mge.game.height=720;mge.game.start(game.scenes.boot)});game.utils.checkColisionBox=function(_box1,_box2){if(!(_box1.xMin>_box2.Xmax||_box2.Xmin>_box1.xMax||_box1.yMin>_box2.Ymax||_box2.Ymin>_box1.yMax)){return true}};game.animations.eye=Array(20).fill(game.images.openEye);game.animations.eye.push(game.images.closeEye);game.animations.legsIdle=[game.images.legsIdle];game.animations.legsWalk=[game.images.legsWalk1,game.images.legsWalk2,game.images.legsWalk3,game.images.legsWalk4];game.images.logoDilpleu.config={"_s":{"_w":400,"_h":400},"_p":[{"_fs":["C","#a301e6"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","60","170"],["Q","75","70","200","60"],["Q","317","70","350","170"],["Q","310","130","280","165"],["Q","240","130","205","165"],["Q","170","130","135","165"],["Q","96","130","60","170"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","205","165"],["L","205","275"],["M","60","193"],["Q","100","191","105","230"],["Q","100","268","60","266"],["L","60","193"],["M","153","215"],["Q","144","281","167","275"],["M","185","355"],["L","185","291"],["Q","223","287","220","310"],["Q","223","335","185","330"],["M","315","254"],["Q","312","293","330","293"],["Q","354","293","350","255"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#a301e6","5","round","round"],"_gp":[],"_c":[["M","120","275"],["Q","111","312","135","310"],["M","245","250"],["Q","239","314","260","310"],["M","295","250"],["Q","264","251","262","233"],["Q","264","210","282","210"],["Q","305","210","303","232"],["L","263","232"],["M","120","260"],["C","120","260","2"]],"_t":[8,8,8,"","","","",""]}]};game.images.logoDilpleu.scale=0.3;game.images.playButton.config={"_s":{"_w":200,"_h":100},"_p":[{"_fs":["LG","0","0","0","12"],"_ss":["#0b3956","3","round","round"],"_gp":[[0,"#f7f7f7"],[1,"#2678ab"]],"_c":[["R","0","0","200","100"]]},{"_fs":["C","#0c3b59"],"_ss":["#0c3b59","1","round","round"],"_gp":[],"_c":[["M","0","0"]],"_t":["100","54","50","normal","Arial","center","middle","PLAY"]}]};game.images.playButton.scale=1;game.images.playerBody.config={"_s":{"_w":300,"_h":350},"_p":[{"_fs":["RG","110","175","0","150","175","133"],"_ss":["#cb5252","5","round","round"],"_gp":[[0,"#f5c6c6"],[1,"#e66465"]],"_c":[["M","15","124"],["Q","31","72","73","70"],["Q","118","72","113","110"],["L","111","212"],["L","117","213"],["Q","122","183","135","170"],["Q","122","168","115","101"],["Q","115","69","157","66"],["L","241","62"],["Q","294","69","252","138"],["Q","340","237","242","280"],["Q","167","301","133","259"],["Q","124","290","77","286"],["Q","3","289","4","249"],["Q","3","226","38","210"],["L","37","157"],["Q","12","151","15","124"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#b64343","15","round","round"],"_gp":[],"_c":[["M","51","126"],["L","77","107"],["L","73","247"],["M","42","249"],["L","101","246"],["M","160","143"],["L","154","103"],["L","234","98"],["L","191","163"],["Q","269","161","252","228"],["Q","201","284","159","227"]],"_t":[8,8,8,"","","","",""]}]};game.images.playerBody.scale=0.2;game.images.openEye.config={"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","75","25"],["Q","80","16","102","11"],["M","85","32"],["Q","86","25","108","21"],["M","92","38"],["Q","100","33","114","34"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","45","80","15"]],"_t":[8,8,8,"","","","",""]}]};game.images.openEye.scale=0.2;game.images.closeEye.config={"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","25","100"],["Q","11","99","5","110"],["M","35","110"],["Q","19","111","12","125"],["M","50","115"],["Q","40","114","35","130"]],"_t":[8,8,8,"","","","",""]}]};game.images.closeEye.scale=0.2;game.images.legsIdle.config={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","30","31","32","68"],["L","14","66"],["M","98","3"],["Q","103","31","96","67"],["L","117","64"]],"_t":[8,8,8,"","","","",""]}]};game.images.legsIdle.scale=0.2;game.images.legsWalk1.config={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","34","31","32","68"],["L","51","66"],["M","98","3"],["Q","132","31","92","55"],["L","109","65"]],"_t":[8,8,8,"","","","",""]}]};game.images.legsWalk1.scale=0.2;game.images.legsWalk2.config={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","24","31","13","65"],["L","30","69"],["M","98","3"],["Q","103","31","108","67"],["L","119","64"]],"_t":[8,8,8,"","","","",""]}]};game.images.legsWalk2.scale=0.2;game.images.legsWalk3.config={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","61","24","19","56"],["L","36","64"],["M","98","3"],["Q","99","31","97","69"],["L","114","69"]],"_t":[8,8,8,"","","","",""]}]};game.images.legsWalk3.scale=0.2;game.images.legsWalk4.config={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","39","24","48","71"],["L","62","66"],["M","97","3"],["Q","93","31","89","59"],["L","103","69"]],"_t":[8,8,8,"","","","",""]}]};game.images.legsWalk4.scale=0.2;game.images.pltf1.config={"_s":{"_w":50,"_h":1000},"_p":[{"_fs":["LG","0","0","0","1000"],"_ss":["#000000","1","round","round"],"_gp":[[0,"#006eff"],[1,"#f40baa"]],"_c":[["R","0","0","50","1000"]],"_t":[8,8,8,"","","","",""]}]};game.images.pltf1.scale=1;game.instruments.electricPiano={play:function(an,ad,ae,aq){let al={heADSR:{a:0.01,d:0.2,s:0.8,r:0.1,minValue:0,maxValue:aq},oscType:'sine'};let _detune1=Object.create(al);let _detune2=Object.create(al);let _detune3=Object.create(al);_detune1.detuneADSR={a:0.5,d:0.5,s:1,r:0,minValue:-3,maxValue:3};_detune2.detuneADSR={a:0.7,d:0.7,s:1,r:0,minValue:5,maxValue:-5};_detune2.detuneADSR={a:0.8,d:0.6,s:1,r:0,minValue:-5,maxValue:5};let _noise={heADSR:{a:0.01,d:0.3,s:0,r:0,minValue:0,maxValue:aq},oscType:'noise',filterType:'lowpass',filterFreqADSR:{a:0.01,d:0.4,s:0,r:0,minValue:500,maxValue:500}};mge.hg.hf(al,an,ad,ae,aq);mge.hg.hf(_detune1,an,ad,ae,aq);mge.hg.hf(_detune2,an,ad,ae,aq);mge.hg.hf(_detune3,an,ad,ae,aq);mge.hg.hf(_noise,an,ad,ae,aq)}};game.songs.mainSong.config={"_str":[0,0,1],"_p":[{"_b":[["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",2]],"_s":[[0,1,2,2],[3,0,1,1]]},{"_b":[["D4",4],["G4",4],["C4",4],["A4",4]],"_s":[[0,1,2,2],[3,0,1,1]]}]};game.songs.mainSong.playSongElectricPiano=function(){mge.hi.stop();mge.hi.reset();let orchestra=[];orchestra.push(game.instruments.electricPiano);orchestra.push(game.instruments.electricPiano);let mix=[1,0.9];let bpm=120;game.songs.mainSong.play(bpm,orchestra,mix)};game.levels.initLevel=function(_level){game.sprites.platform.hz();for(let _pltf of _level._platforms){game.sprites.platform.init(_pltf)};game.variables.platformMessage=[];game.sprites.player.X=_level.gqer.X;game.sprites.player.Y=_level.gqer.Y;game.variables.camX=_level._camera.X;game.variables.camY=_level._camera.Y};game.levels.level1={_platforms:[{bn:'1',bl:50,bm:1000,X:-120,Y:210,_image:game.images.pltf1},{bn:'2',bl:50,bm:50,X:400,Y:460,_fillStyle:'#F0C4B5',_pushable:{_Xmin:400,_Xmax:1000,_Xfall:535,_Yfall:660,_fallSide:'right'},_autoJumpForce:2000},{bn:'3',bl:50,bm:50,X:100,Y:460,_fillStyle:'#F0C4B5',_pushable:{_Xmin:-100,_Xmax:300,_Xfall:-35,_Yfall:660,_fallSide:'left'}},{bn:'4',bl:500,bm:30,X:250,Y:500,_fillStyle:'#522617'},{bn:'5',bl:1400,bm:30,X:600,Y:700,_fillStyle:'#522617'},{bn:'6',bl:50,bm:50,X:750,Y:660,_fillStyle:'#F0C4B5',_autoJumpForce:2000},{bn:'7',bl:50,bm:50,X:900,Y:660,_fillStyle:'#E4080A',_actionable:{_message:'DESTROY:1',_fillStyle:'#54E41C',_image:''}}],gqer:{X:200,Y:300},_camera:{X:200,Y:0}};game.scenes.boot.start=function(){while(mge.image.loadNextImage()<1){};while(mge.song.loadNextSong()<1){};game.sprites.logoDilpleu.init();game.sprites.playButton.init();game.sprites.eye.init();game.sprites.legs.init();game.state='ready'};game.scenes.boot.update=function(){game.sprites.playButton.update()};game.scenes.boot.draw=function(){game.sprites.logoDilpleu.draw();game.sprites.playButton.draw()};game.scenes.main.start=function(){game.sprites.player.init();game.levels.initLevel(game.levels.level1)};game.scenes.main.update=function(){game.sprites.player.update();if(game.variables.camX<game.sprites.player.X-game.variables.camMaxOffsetX){game.variables.camX=game.sprites.player.X-game.variables.camMaxOffsetX};if(game.variables.camX>game.sprites.player.X+game.variables.camMaxOffsetX){game.variables.camX=game.sprites.player.X+game.variables.camMaxOffsetX};if(game.variables.camY<game.sprites.player.Y-game.variables.camMaxOffsetY){game.variables.camY=game.sprites.player.Y-game.variables.camMaxOffsetY};if(game.variables.camY>game.sprites.player.Y+game.variables.camMaxOffsetY){game.variables.camY=game.sprites.player.Y+game.variables.camMaxOffsetY}};game.scenes.main.draw=function(){game.sprites.platform.ib('draw');game.sprites.player.draw();game.sprites.eye.ib('draw');game.sprites.legs.ib('draw')};game.sprites.logoDilpleu.init=function(){this.width=game.images.logoDilpleu.width;this.height=game.images.logoDilpleu.height;this.x=640;this.y=650};game.sprites.logoDilpleu.update=function(){};game.sprites.logoDilpleu.hr=function(ctx){game.images.logoDilpleu.draw(ctx)};game.sprites.playButton.init=function(){this.width=game.images.playButton.width;this.height=game.images.playButton.height;this.x=640;this.y=300};game.sprites.playButton.update=function(){if(this.hp){mge.game.hk(game.scenes.main)}};game.sprites.playButton.hr=function(ctx){game.images.playButton.draw(ctx)};game.sprites.platform.init=function(_pltfConfig){let fk=game.sprites.platform.hy();fk.width=_pltfConfig.bl;fk.height=_pltfConfig.bm;fk.X=_pltfConfig.X;fk.Y=_pltfConfig.Y;fk._accelerationY=0;fk._velocityY=0;fk.ee=false;fk.bn=_pltfConfig.bn||'';fk._image=_pltfConfig._image||'';fk._fillStyle=_pltfConfig._fillStyle||'';fk._pushable=_pltfConfig._pushable||'';fk._autoJumpForce=_pltfConfig._autoJumpForce||0;fk._actionable=_pltfConfig._actionable||'';return fk};game.sprites.platform.hr=function(ctx){if(this._fillStyle!=''){ctx.fillStyle=this._fillStyle;ctx.fillRect(0,0,this.width,this.height)};if(this._image!=''){this._image.draw(ctx)}};game.sprites.platform.managePlatformCollisions=function(){let _p=game.sprites.player;let _deltaTime=1/mge.game.fps;this.ee=false;let flBox={xMin:this.X-this.width/2,xMax:this.X+this.width/2,yMin:this.Y-this.height/2,yMax:this.Y+this.height/2};if(game.utils.checkColisionBox(flBox,_p.hitBoxRight)){_p.collidesRight=true;this.ee=true;if(this._pushable!='' && _p.velocityX>0){this.X=_p.X+_p.width/2+this.width/2+_p.HitBoxSize;_p.collidesRight=false;_p.velocityX=0;if(this.X>=this._pushable._Xmax){this.X=this._pushable._Xmax;_p.collidesRight=true}}};if(game.utils.checkColisionBox(flBox,_p.hitBoxLeft)){_p.collidesLeft=true;this.ee=true;if(this._pushable!='' && _p.velocityX<0){this.X=_p.X-_p.width/2-this.width/2-_p.HitBoxSize;_p.collidesLeft=false;_p.velocityX=0;if(this.X<=this._pushable._Xmin){this.X=this._pushable._Xmin;_p.collidesLeft=true}}};if(game.utils.checkColisionBox(flBox,_p.hitBoxUp)){_p.collidesUp=true;this.ee=true};if(game.utils.checkColisionBox(flBox,_p.hitBoxDown)){_p.collidesDown=true;this.ee=true;if(this._autoJumpForce !=0){game.sprites.player.velocityY=-this._autoJumpForce;game.sprites.player.Y=this.Y-this.height/2-game.sprites.player.height/2;_p.collidesDown=false}};if(this._pushable!=''){if(this.Y<this._pushable._Yfall){if((this._pushable._fallSide=='right' && this.X>=this._pushable._Xfall)||(this._pushable._fallSide=='left' && this.X<=this._pushable._Xfall)){this._accelerationY=game.const.gravity;this._velocityY+=this._accelerationY*_deltaTime;this.Y=Math.min(this.Y+this._velocityY*_deltaTime,this._pushable._Yfall)}}};this.x=this.X-game.variables.camX+mge.game.width/2;this.y=this.Y-game.variables.camY+mge.game.height/2;if(this._actionable!=''&&this.ee){if(!game.variables.platformMessage.includes(this._actionable._message)){game.variables.platformMessage.push(this._actionable._message)};if(this._actionable._fillStyle!=''){this._fillStyle=this._actionable._fillStyle};if(this._actionable._image!=''){this._image=this._actionable._image}};for(let _message of game.variables.platformMessage){if(_message=='DESTROY:'+this.bn){this.ia()}}};game.sprites.eye.init=function(){this.width=game.images.openEye.width;this.height=game.images.openEye.height;this._curAnimation='normal';this._lastAnimation='';mge.animation.loadExtention(this);this.animation.timeBetweenFrames=100};game.sprites.eye.hr=function(ctx){if(this._curAnimation !=this._lastAnimation){if(this._curAnimation=='normal'){this.animation.frames=game.animations.eye};this.animation.restart()};this._lastAnimation=this._curAnimation;this.animation.draw(ctx)};game.sprites.legs.init=function(){this.width=game.images.legsIdle.width;this.height=game.images.legsIdle.height;this._curAnimation='idle';this._lastAnimation='';mge.animation.loadExtention(this);this.animation.timeBetweenFrames=100};game.sprites.legs.hr=function(ctx){if(this._curAnimation !=this._lastAnimation){if(this._curAnimation=='idle'){this.animation.frames=game.animations.legsIdle};if(this._curAnimation=='walk'){this.animation.frames=game.animations.legsWalk};this.animation.restart()};this._lastAnimation=this._curAnimation;this.animation.draw(ctx)};game.sprites.player.init=function(){this.x=mge.game.width/2;this.y=mge.game.height/2;this.width=60;this.height=70;this.X=200;this.Y=0;this.ControllerLeft=false;this.ControllerRight=false;this.ControllerUp=false;this.ControllerDown=false;this.collidesRight=false;this.collidesLeft=false;this.collidesUp=false;this.collidesDown=false;this.HitBoxSize=5;this.hitBoxRight={};this.hitBoxLeft={};this.hitBoxUp={};this.hitBoxDown={};this.moveForce=15000;this.moveForceWhenNoTouching=5000;this.jumpForce=80000;this.maxVelocity=5000;this.frictionRate=0.3;this.accelerationX=0;this.accelerationY=0;this.velocityX=0;this.velocityY=0;_eye=game.sprites.eye.hy();mge.animation.activateOwnCloneAnimation(_eye);_legs=game.sprites.legs.hy();mge.animation.activateOwnCloneAnimation(_legs)};game.sprites.player.update=function(){let deltaTime=Math.min(1/mge.game.fps,0.04);let lastX=this.X;let lastY=this.Y;if(mge.ho.hn('ArrowRight')&& !mge.ho.hn('ArrowLeft')){this.ControllerRight=true}else{this.ControllerRight=false};if(mge.ho.hn('ArrowLeft')&& !mge.ho.hn('ArrowRight')){this.ControllerLeft=true}else{this.ControllerLeft=false};if(mge.ho.hn('ArrowUp')&& !mge.ho.hn('ArrowDown')){this.ControllerUp=true}else{this.ControllerUp=false};if(mge.ho.hn('ArrowDown')&& !mge.ho.hn('ArrowUp')){this.ControllerDown=true}else{this.ControllerDown=false};this.accelerationX=0;if(this.ControllerLeft && this.collidesDown){this.accelerationX=-this.moveForce};if(this.ControllerRight && this.collidesDown){this.accelerationX=this.moveForce};if(this.ControllerLeft && !this.collidesDown){this.accelerationX=-this.moveForceWhenNoTouching};if(this.ControllerRight && !this.collidesDown){this.accelerationX=this.moveForceWhenNoTouching};this.accelerationY=0;if(this.ControllerUp && this.collidesDown){this.accelerationY=-this.jumpForce};this.accelerationY+=game.const.gravity;this.velocityX+=this.accelerationX*deltaTime;this.velocityX=this.velocityX*(1-this.frictionRate);if(this.velocityX>0 && this.velocityX>this.maxVelocity){this.velocityX=this.maxVelocity};if(this.velocityX<0 && this.velocityX<-this.maxVelocity){this.velocityX=-this.maxVelocity};this.velocityY+=this.accelerationY*deltaTime;this.X+=Math.round(this.velocityX*deltaTime);this.Y+=Math.round(this.velocityY*deltaTime);this.hitBoxRight={Xmin:this.X+this.width/2,Xmax:this.X+this.width/2+this.HitBoxSize,Ymin:this.Y-this.height/2+this.HitBoxSize,Ymax:this.Y+this.height/2-this.HitBoxSize};this.hitBoxLeft={Xmin:this.X-this.width/2-this.HitBoxSize,Xmax:this.X-this.width/2,Ymin:this.Y-this.height/2+this.HitBoxSize,Ymax:this.Y+this.height/2-this.HitBoxSize};this.hitBoxUp=  {Xmin:this.X-this.width/2+this.HitBoxSize,Xmax:this.X+this.width/2-this.HitBoxSize,Ymin:this.Y-this.height/2,Ymax:this.Y-this.height/2+this.HitBoxSize};this.hitBoxDown={Xmin:this.X-this.width/2+this.HitBoxSize,Xmax:this.X+this.width/2-this.HitBoxSize,Ymin:this.Y+this.height/2-this.HitBoxSize,Ymax:this.Y+this.height/2};this.collidesRight=false;this.collidesLeft=false;this.collidesUp=false;this.collidesDown=false;game.sprites.platform.ib('managePlatformCollisions');if(this.collidesRight||this.collidesLeft){this.X=lastX;this.velocityX=0};if(this.collidesDown||this.collidesUp){this.Y=lastY;this.velocityY=0};this.x=this.X-game.variables.camX+mge.game.width/2;this.y=this.Y-game.variables.camY+mge.game.height/2};game.sprites.player.hr=function(ctx){game.images.playerBody.draw(ctx);if(this.velocityX<=0){_eye._curAnimation='normal';_eye.x=this.x-5;_eye.y=this.y-25;_eye.hs=1;}else{_eye._curAnimation='normal';_eye.x=this.x;_eye.y=this.y-25;_eye.hs=-1};if(Math.abs(this.velocityX)<1){_legs._curAnimation='idle';_legs.x=this.x;_legs.y=this.y+29;_legs.hs=1};if(this.velocityX<=-1){_legs._curAnimation='walk';_legs.x=this.x;_legs.y=this.y+29;_legs.hs=-1};if(this.velocityX>=1){_legs._curAnimation='walk';_legs.x=this.x;_legs.y=this.y+29;_legs.hs=1};if(Math.abs(this.velocityY>0)){_legs._curAnimation='idle';_legs.x=this.x;_legs.y=this.y+29;_legs.hs=1};/*;ctx.strokeStyle='red';ctx.strokeRect(this.width,this.HitBoxSize,this.HitBoxSize,this.height-2*this.HitBoxSize);ctx.strokeRect(-this.HitBoxSize,this.HitBoxSize,this.HitBoxSize,this.height-2*this.HitBoxSize);ctx.strokeRect(this.HitBoxSize,0,this.width-2*this.HitBoxSize,this.HitBoxSize);ctx.strokeRect(this.HitBoxSize,this.height,this.width-2*this.HitBoxSize,-this.HitBoxSize);*/}