const mge={bj:{},bv:{},ck:{},dg:{},dt:{},cqkj:{},hc:{}};mge.hg={get hd(){return mge.bj.ai.currentTime},get he(){return mge.bj.aq},set he(km){mge.bj.be(km)},hf:function(al,an,ad,ae,aq){mge.bj.ak(al,mge.bj.aj,an,ad,ae,aq)}};mge.hi={get bpm(){return mge.hc.fo},set bpm(km){mge.hc.fo=km},hh:function(fu,fv,aq){return mge.hc.ahTrack(fu,fv,aq)},start:function(){mge.hc.cg()},stop:function(){mge.hc.dd()},reset:function(){mge.hc.ah()}};mge.ln={get width(){return mge.bv.bo.width},set width(km){mge.bv.bo.width=km},get height(){return mge.bv.bo.height},set height(km){mge.bv.bo.height=km},get fps(){return mge.dg.da},start:function(cf){mge.ck.cg(cf)},hk:function(cf){mge.ck.ce(cf)},hl:function(){return mge.ck.ahki()}};mge.ho={hn:function(cq){return mge.cqkj.co(cq)}};mge.hq={get hp(){return mge.dt.dj}};mge.fl={set hr(km){this.dw=km},get width(){return this.bl},set width(km){this.bl=km},get height(){return this.bm},set height(km){this.bm=km},get x(){return this._x},set x(km){this._x=km},get y(){return this._y},set y(km){this._y=km},set hs(km){this.bs=km},set hv(km){this.ec=km},get hp(){return this.dj(mge.dt._x,mge.dt._y,mge.dt.dj)},draw:function(){this.ed()},hy:function(){return this.ex()},ia:function(){this.fc()},hz:function(){this.fa()},ib:function(kl){return this.fe(kl)}};mge.bj.aa=function(ab,ac,ad,ae){let a=ab.a||0.0001;let d=ab.d||0.0001;let s=ab.s||0.0001;let r=ab.r||0.0001;let af=ab.kn||0.0001;let ag=ab.ko||1;if(ae<=a){ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag*ae/a,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}else if(ae<=a+d){ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag,ad+a);ac.exponentialRampToValueAtTime(ag*s*d/ae,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}else{ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag,ad+a);ac.exponentialRampToValueAtTime(ag*s,ad+a+d);ac.setValueAtTime(ag*s,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}};mge.bj.ah=function(){this.ai='';this.aj='';this.aq=1;this.ai=new(window.AudioContext||window.webkitAudioContext)();this.aj=this.ai.createGain();this.aj.connect(this.ai.destination)};mge.bj.ak=function(al,am,an,ad,ae,aq){let aa=this.aa;let as=this.ai;let at=al.oscType||'sine';let au=al.filterType||'lowpass';let aqADSR=al.heADSR||{a:0,d:0,s:1,r:0,kn:1,ko:1};let aw=al.kp||{a:0,d:0,s:1,r:0,kn:an,ko:an};let ax=al.kq||{a:0,d:0,s:1,r:0,kn:0,ko:0};let ay=al.kr||{a:0,d:0,s:1,r:0,kn:20000,ko:20000};let az=al.ks||{a:0,d:0,s:1,r:0,kn:1,ko:1};let bd='';if(at=='noise'){bd=as.createBufferSource();let buffer=as.createBuffer(1,as.sampleRate*(ae+aqADSR.r),as.sampleRate);let noiseOutput=buffer.getChannelData(0);for(let i=0;i<buffer.length;i++){noiseOutput[i]=Math.random()*2-1};bd.buffer=buffer;}else{bd=as.createOscillator();bd.type=at;aa(aw,bd.frequency,ad,ae);aa(ax,bd.detune,ad,ae)};bd.start(ad);bd.stop(ad+ae+aqADSR.r);let ba=as.createGain();aa(aqADSR,ba.gain,ad,ae);let bb=as.createGain();bb.gain.setValueAtTime(mge.bj.aqToGain(aq)*0.04,ad);let bc=as.createBiquadFilter();bc.type=au;aa(ay,bc.frequency,ad,ae);aa(az,bc.Q,ad,ae);bd.connect(bc);bc.connect(ba);ba.connect(bb);bb.connect(am)};mge.bj.be=function(aq){if(aq<=0){mge.bj.aq=0}else if(aq>=1){mge.bj.aq=1}else{mge.bj.aq=aq};mge.bj.aj.gain.setValueAtTime(mge.bj.aqToGain(mge.bj.aq),mge.hg.hd)};mge.bj.aqToGain=function(aq){let bi=30;if(aq<=0){return 0;}else if(aq>=1){return 1;}else{return Math.pow(10,(aq-1)*bi/10)}};mge.bv.ah=function(bl,bm,bn){this.bo='';this.bp='';this.bo=document.getElementById(bn);if(this.bo){this.bo.remove()};this.bo=document.createElement('canvas');this.bo.id=bn;this.bo.width=bl;this.bo.height=bm;document.body.appendChild(this.bo);this.bp=this.bo.getContext('2d')};mge.bv.bq=function(){let br=this.bo;let bs=(window.innerWidth-10)/br.width;let bt=(window.innerHeight-10)/br.height;let bu=Math.min(bs,bt);br.style.transformOrigin='0 0';br.style.transform='scale('+bu+')';br.display='block'};mge.ck.ah=function(bl,bm){this.bz='';this.ca='';this.cb=[];let bv=mge.bv;let bj=mge.bj;let dg=mge.dg;let dt=mge.dt;let cqkj=mge.cqkj;let hc=mge.hc;bv.ah(bl,bm,'kt');dt.ah(bv.bo);cqkj.ah();bj.ah();hc.ah();dg.ah()};mge.ck.ahki=function(){let fl=mge.fl;let bv=mge.bv;let ck=mge.ck;let bp=bv.bp;let _newki=Object.create(fl);_newki.ah(bp);ck.cb.push(_newki);return _newki};mge.ck.ce=function(cf){if(!cf.start){cf.start=function(){}};if(!cf.mr){cf.mr=function(){}};if(!cf.draw){cf.draw=function(){}};this.ca=cf};mge.ck.cg=function(cf){let dg=mge.dg;this.ce(cf);dg.cg()};mge.cqkj.co=function(cq){if(this.cn.indexOf(cq)==-1){return false;}else{return true}};mge.cqkj.cp=function(e){let cq=e.key;if(this.cm.indexOf(cq)==-1){this.cm.push(cq)}};mge.cqkj.cr=function(e){let cq=e.key;let indexOfKey=this.cm.indexOf(cq);if(indexOfKey !=-1){this.cm.splice(indexOfKey,1)}};mge.cqkj.ct=function(){this.cn=[];this.cm=[]};mge.cqkj.cu=function(){this.cn=this.cm.slice()};mge.cqkj.ah=function(){this.cn=[];this.cm=[];document.onkeydown=function(e){mge.cqkj.cp(e)};document.onkeyup=function(e){mge.cqkj.cr(e)}};mge.dg.ah=function(){this.cx=0;this.cy=0;this.cz=0;this.da=0;this.db='ku'};mge.dg.cg=function(){this.db='kv';this.de()};mge.dg.dd=function(){this.db='ku';this.de()};mge.dg.de=function(){let bv=mge.bv;let ck=mge.ck;let dt=mge.dt;let cqkj=mge.cqkj;let hc=mge.hc;let bp=bv.bp;let bo=bv.bo;let dg=mge.dg;let cb=ck.cb;dg.cy=performance.now();dg.cz=dg.cy-dg.cx;dg.da=1/(dg.cz/1000);dt.cu();cqkj.cu();if(ck.bz !=ck.ca){ck.bz=ck.ca;dt.ct();cqkj.ct();ck.bz.start()};ck.bz.mr();cb.forEach(fl=>{fl.ev();});bp.clearRect(0,0,bo.width,bo.height);ck.bz.draw();bv.bq();hc.gq();dg.cx=dg.cy;if(dg.db=='kv'){requestAnimationFrame(dg.de)}};mge.dt.dn=function(e){this.dm=true;this.dk=e.offsetX;this.dl=e.offsetY};mge.dt.dp=function(e){this.dk=e.offsetX;this.dl=e.offsetY};mge.dt.dq=function(e){this.dk='';this.dl=''};mge.dt.ct=function(){this._x=0;this._y=0;this.dj=false;this.dk=0;this.dl=0;this.dm=false};mge.dt.cu=function(){this._x=this.dk;this._y=this.dl;this.dj=this.dm;this.dm=false};mge.dt.ah=function(br){this._x=0;this._y=0;this.dj=false;this.dk=0;this.dl=0;this.dm=false;br.onclick=function(e){mge.dt.dn(e)};br.onhqmove=function(e){mge.dt.dp(e)};br.onhqout=function(e){mge.dt.dq(e)}};mge.fl.ah=function(dv){this.dv=dv;this.dw=function(){};this.bl=100;this.bm=100;this._x=0;this._y=0;this.bs=1;this.bt=1;this.ec=false;this.ez=[];this.ey=false};mge.fl.ed=function(){let dv=this.dv;dv.save();dv.translate(this._x-this.bl*this.bs/2,this._y-this.bm*this.bt/2);dv.scale(this.bs,this.bt);this.dw(dv);if(this.ec){dv.strokeStyle='red';dv.strokeRect(0,0,this.bl,this.bm);dv.strokeRect(this.bl/2,this.bm/2,1,1)};dv.restore()};mge.fl.dj=function(el,em,en){if(this.eo(el,em)&& en){return true;}else{return false}};mge.fl.eo=function(el,em){let er=this._x+(this.bl/2)*this.bs;let es=this._x-(this.bl/2)*this.bs;let et=this._y+(this.bm/2)*this.bt;let eu=this._y-(this.bm/2)*this.bt;if(el>=es && el<=er && em>=eu && em<=et){return true;}else{return false}};mge.fl.ev=function(){let ew=[];this.ez.forEach(fk=>{if(fk.ey){ew.push(fk)};});this.ez=ew};mge.fl.ex=function(){let fk=Object.create(this);fk.ey=true;this.ez.push(fk);return fk};mge.fl.fc=function(){this.ey=false};mge.fl.fa=function(){this.ez=[]};mge.fl.fe=function(kl){this.ez.forEach(fk=>{fk[kl]();})};/*mge.fl.fg=function(ef){let fi=[];ef.ez.forEach(fk=>{if(this.ee(fk)){fi.push(fk)};});return fi;}*/;mge.hc.ah=function(){this.fn=[];this.fo=60;this.fp=1;this.fq=0;this.fr=0;this.db='ku'};mge.hc.ga=function(gb){let gc={C:32.7,Db:34.6,D:36.7,Eb:38.9,E:41.2,F:43.6,Gb:46.2,G:49,Ab:51.9,A:55,Bb:58.3,B:61.7};let gd=parseInt(gb.substr(gb.length-1,gb.length),10);let ge=gb.substr(0,gb.length-1);let an=gc[ge]*Math.pow(2,gd);return Math.round(an)};mge.hc.ahTrack=function(fu,fv,aq){let fy=mge.hc.fy;let fn=mge.hc.fn;let fz=Object.create(fy);fz.fu=fu;fz.fv=fv;fz.aq=aq;fn.push(fz);return fz};mge.hc.gg=function(fy,gi){let fv=fy.fv;let aq=fy.aq;let gl=fy.ha(gi);let gm=this.fq;for(let i=0;i<gl.length;i+=2){let ge=gl[i];let geFrequency=this.ga(ge);let ae=gl[i+1]*60/this.fo;fv.play(geFrequency,gm,ae,aq);gm+=ae}};mge.hc.gq=function(){let gr=mge.bj.ai.currentTime;if(gr>=this.fr && this.db=='started'){for(let i=0;i<this.fn.length;i++){let fy=this.fn[i];this.gg(fy,this.fp)};this.fp+=1;this.fr=this.fq+3*60/this.fo;this.fq+=4*60/this.fo}};mge.hc.cg=function(){this.fp=1;this.fq=mge.bj.ai.currentTime;this.fr=0;this.db='started'};mge.hc.dd=function(){this.db='ku'};mge.hc.fy={fu:[],fv:{},aq:1,be:function(aq){if(aq<=0){this.aq=0}else if(aq>=1){this.aq=1}else{this.aq=aq}},ha:function(hb){let kw=this.fu.length;if(kw==0){return ''}else if(hb%kw==0){return this.fu[kw-1]}else{return this.fu[hb%kw-1]}}};mge.ck.ah(640,360);mge.id={ie:{ig:[]},ih:{}};mge.id.ih={set kx(km){this.ii(km)},set scale(km){this.im(km)},get width(){return this.ij._s._w*this.bu},get height(){return this.ij._s._h*this.bu},load:function(){this.ip()},draw:function(dv){this.ed(dv)}};mge.image={create:function(){return mge.id.ie.ahImage()}};mge.id.ih.ii=function(km){this.ij=km;this.ik=false;this.il={}};mge.id.ih.im=function(km){this.bu=km;this.ik=false;this.il={}};mge.id.ih.ip=function(){let ij=this.ij;let bu=this.bu;let _s=ij._s||{};let _w=_s._w*bu||200;let _h=_s._h*bu||200;let iq=new OffscreenCanvas(_w,_h);let dv=iq.getContext('2d');let _p=ij._p||[];_p.forEach(function(_path){let fs=_path._fs||['C','red'];if(fs[0]=='C'){dv.fillStyle=fs[1]}else if(fs[0]=='LG'||fs[0]=='RG'){let ir={};if(fs[0]=='LG'){ir=dv.createLinearGradient(fs[1]*bu,fs[2]*bu,fs[3]*bu,fs[4]*bu)}else{ir=dv.createRadialGradient(fs[1]*bu,fs[2]*bu,fs[3]*bu,fs[4]*bu,fs[5]*bu,fs[6]*bu)};let _gp=_path._gp;_gp.forEach(function(_point){ir.addColorStop(_point[0],_point[1]);});dv.fillStyle=ir};let ss=_path._ss||['red',2,'square','miter'];dv.strokeStyle=ss[0];dv.lineWidth=ss[1]*bu;dv.lineCap=ss[2];dv.lineJoin=ss[3];dv.beginPath();let _c=_path._c||[];_c.forEach(function(_cmd){if(_cmd[0]=='M'){dv.moveTo(_cmd[1]*bu,_cmd[2]*bu)}else if(_cmd[0]=='L'){dv.lineTo(_cmd[1]*bu,_cmd[2]*bu)}else if(_cmd[0]=='Q'){dv.quadraticCurveTo(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,_cmd[4]*bu)}else if(_cmd[0]=='C'){dv.arc(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,0,2*Math.PI)}else if(_cmd[0]=='R'){dv.rect(_cmd[1]*bu,_cmd[2]*bu,_cmd[3]*bu,_cmd[4]*bu)};});if(fs[0]!='N'){dv.fill()};if(ss[1]>0){dv.stroke()};let _txt=_path._t||[0,0,20,'normal','serif','start','alphabetic',''];let _fontSize=_txt[2]*bu;dv.font=_txt[3]+' '+_fontSize.toString()+'px '+_txt[4];dv.textAlign=_txt[5];dv.textBaseline=_txt[6];if(fs[0]!='N'){dv.fillText(_txt[7],_txt[0]*bu,_txt[1]*bu)};if(ss[1]>0){dv.strokeText(_txt[7],_txt[0]*bu,_txt[1]*bu)};});this.il=iq.transferToImageBitmap();this.ik=true};mge.id.ih.ah=function(){this.ij={};this.ik=false;this.bu=1;this.il={}};mge.id.ih.ed=function(dv){dv.drawImage(this.il,0,0)};mge.id.ie.ahImage=function(){let iw=Object.create(mge.id.ih);iw.ah();this.ig.push(iw);return iw};mge.jx={jy:{}};mge.jx.la=function(fk){fk.lb=Object.create(fk.__proto__.lb)};mge.jx.ipld=function(fl){fl.lb=Object.create(mge.jx.jy);fl.lb.ah()};mge.lb={lc:function(fl){mge.jx.ipld(fl)},le:function(fk){mge.jx.la(fk)}};mge.jx.jy={set lf(km){this.kg=km},get lf(){return this.kg},set frames(kc){this.kb(kc)},draw:function(dv){this.ed(dv)},lg:function(){this.kh()}};mge.jx.jy.ed=function(dv){if(this.ke==-1){this.ke=0;this.kf=Date.now();}else if(Date.now()- this.kf>this.kg){this.ke+=1;if(this.ke>this.kc.length-1){this.ke=0};this.kf=Date.now()};this.kc[this.ke].draw(dv)};mge.jx.jy.kb=function(kc){this.kc=kc;this.ke==-1;this.kf=Date.now()};mge.jx.jy.ah=function(){this.kc=[];this.ke=-1;this.kf=Date.now();this.kg=100};mge.jx.jy.kh=function(){this.ke=-1};mge.jd={je:{ig:[]},jg:{}};mge.jd.jg={set kx(km){this.ii(km)},load:function(){this.ip()},play:function(fo,fvs,_mix){this.gq(fo,fvs,_mix)}};mge.song={create:function(){return mge.jd.je.ahSong()}};mge.jd.jg.ah=function(){this.ij={};this.ik=false;this.fn=[]};mge.jd.jg.ip=function(){let ij=this.ij;let fn=[];ij._p.forEach(function(_part){let lj=[];ij._str.forEach(function(lk){_part._s[lk].forEach(function(gl){lj.push(_part._b[gl]);});});fn.push(lj);});this.fn=fn;this.ik=true};mge.jd.jg.gq=function(fo,fvs,_mix){let jn={play:function(an,ad,ae,aq){let al={heADSR:{a:0.02,d:400,s:0,r:0.1,kn:0,ko:aq},oscType:'sine'};mge.hg.hf(al,an,ad,ae,aq)}};if(!this.ik){this.ip()};mge.hi.stop();mge.hi.reset();let jo=0;this.fn.forEach(function(fy){mge.hi.hh(fy,fvs[jo]||jn,_mix[jo]||1);jo+=1;});mge.hi.bpm=fo;mge.hi.start()};mge.jd.jg.ii=function(km){this.ij=km;this.ik=false;this.fn=[]};mge.jd.je.ahSong=function(){let js=Object.create(mge.jd.jg);js.ah();this.ig.push(js);return js};ln={lo:'mm',lp:{mm:{},mn:{},mo:{}},lq:{},lbs:{},ls:{},lt:{mt:mge.ln.hl(),mu:mge.ln.hl(),qo:mge.ln.hl(),rb:mge.ln.hl(),eye:mge.ln.hl(),legs:mge.ln.hl(),qi:mge.ln.hl(),ps:mge.ln.hl(),qx:mge.ln.hl()},lu:{lz:200,ma:100,mb:60,mc:70,md:5000,me:0,mf:0,mg:0,mh:[],mi:'1',mj:{xMin:0,xMax:0,yMin:0,yMax:0},mk:'1',ml:{xMin:10,xMax:10,yMin:10,yMax:10}},lv:{},lw:{mnSong:mge.song.create()},lx:{},ly:[]};window.addEventListener("load",(event)=>{let loading=document.getElementById("loading");loading.remove();mge.ln.width=1280;mge.ln.height=720;mge.ln.start(ln.lp.mm)});ln.lx.ms=function(_box1,_box2){if(!(_box1.xMin>_box2.xMax||_box2.xMin>_box1.xMax||_box1.yMin>_box2.yMax||_box2.yMin>_box1.yMax)){return true}};ln.lbs.init=function(){ln.lbs.eye=Array(20).fill(ln.lq.mw);ln.lbs.eye.push(ln.lq.mx);ln.lbs.my=[ln.lq.my];ln.lbs.ny=[ln.lq.mz,ln.lq.na,ln.lq.nb,ln.lq.nc]};ln.lq.ahColoredPattern=function(ij,ng,nh){let ni=mge.image.create();let ijCopy=structuredClone(ij);ijCopy._p[0]._fs[1]=ng;ijCopy._p[1]._fs[1]=nh;ni.kx=ijCopy;ni.load();return mge.bv.bp.createPattern(ni.il,'repeat')};ln.lq.init=function(){ln.lq.mt=mge.image.create();ln.lq.mt.kx={"_s":{"_w":400,"_h":400},"_p":[{"_fs":["C","#a301e6"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","60","170"],["Q","75","70","200","60"],["Q","317","70","350","170"],["Q","310","130","280","165"],["Q","240","130","205","165"],["Q","170","130","135","165"],["Q","96","130","60","170"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","205","165"],["L","205","275"],["M","60","193"],["Q","100","191","105","230"],["Q","100","268","60","266"],["L","60","193"],["M","153","215"],["Q","144","281","167","275"],["M","185","355"],["L","185","291"],["Q","223","287","220","310"],["Q","223","335","185","330"],["M","315","254"],["Q","312","293","330","293"],["Q","354","293","350","255"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#a301e6","5","round","round"],"_gp":[],"_c":[["M","120","275"],["Q","111","312","135","310"],["M","245","250"],["Q","239","314","260","310"],["M","295","250"],["Q","264","251","262","233"],["Q","264","210","282","210"],["Q","305","210","303","232"],["L","263","232"],["M","120","260"],["C","120","260","2"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.mt.scale=0.3;ln.lq.mt.load();ln.lq.mu=mge.image.create();ln.lq.mu.kx={"_s":{"_w":200,"_h":100},"_p":[{"_fs":["LG","0","0","0","12"],"_ss":["#0b3956","3","round","round"],"_gp":[[0,"#f7f7f7"],[1,"#2678ab"]],"_c":[["R","0","0","200","100"]]},{"_fs":["C","#0c3b59"],"_ss":["#0c3b59","1","round","round"],"_gp":[],"_c":[["M","0","0"]],"_t":["100","54","50","normal","Arial","center","middle","PLAY"]}]};ln.lq.mu.load();ln.lq.mv=mge.image.create();ln.lq.mv.kx={"_s":{"_w":300,"_h":350},"_p":[{"_fs":["RG","110","175","0","150","175","133"],"_ss":["#cb5252","5","round","round"],"_gp":[[0,"#f5c6c6"],[1,"#e66465"]],"_c":[["M","15","124"],["Q","31","72","73","70"],["Q","118","72","113","110"],["L","111","212"],["L","117","213"],["Q","122","183","135","170"],["Q","122","168","115","101"],["Q","115","69","157","66"],["L","241","62"],["Q","294","69","252","138"],["Q","340","237","242","280"],["Q","167","301","133","259"],["Q","124","290","77","286"],["Q","3","289","4","249"],["Q","3","226","38","210"],["L","37","157"],["Q","12","151","15","124"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#b64343","15","round","round"],"_gp":[],"_c":[["M","51","126"],["L","77","107"],["L","73","247"],["M","42","249"],["L","101","246"],["M","160","143"],["L","154","103"],["L","234","98"],["L","191","163"],["Q","269","161","252","228"],["Q","201","284","159","227"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.mv.scale=0.2;ln.lq.mv.load();ln.lq.pi=mge.image.create();ln.lq.pi.kx={"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#030303"],"_ss":["#f50505","0","round","round"],"_gp":[],"_c":[["M","7","38"],["Q","15","15","26","15"],["L","85","15"],["L","85","27"],["L","66","27"],["Q","59","97","83","65"],["Q","53","125","56","27"],["L","37","27"],["Q","33","98","18","87"],["Q","27","60","28","27"],["Q","17","26","7","38"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#ffffff"],"_ss":["#000000","2","round","round"],"_gp":[],"_c":[["C","48","21","12"],["M","41","11"],["Q","41","6","45","3"],["M","48","8"],["Q","48","5","51","3"],["M","53","9"],["Q","53","6","57","5"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","48","24","3"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.pi.scale=0.8;ln.lq.pi.load();ln.lq.mw=mge.image.create();ln.lq.mw.kx={"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","75","25"],["Q","80","16","102","11"],["M","85","32"],["Q","86","25","108","21"],["M","92","38"],["Q","100","33","114","34"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","45","80","15"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.mw.scale=0.2;ln.lq.mw.load();ln.lq.mx=mge.image.create();ln.lq.mx.kx={"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","25","100"],["Q","11","99","5","110"],["M","35","110"],["Q","19","111","12","125"],["M","50","115"],["Q","40","114","35","130"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.mx.scale=0.2;ln.lq.mx.load();ln.lq.my=mge.image.create();ln.lq.my.kx={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","30","31","32","68"],["L","14","66"],["M","98","3"],["Q","103","31","96","67"],["L","117","64"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.my.scale=0.2;ln.lq.my.load();ln.lq.mz=mge.image.create();ln.lq.mz.kx={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","34","31","32","68"],["L","51","66"],["M","98","3"],["Q","132","31","92","55"],["L","109","65"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.mz.scale=0.2;ln.lq.mz.load();ln.lq.na=mge.image.create();ln.lq.na.kx={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","24","31","13","65"],["L","30","69"],["M","98","3"],["Q","103","31","108","67"],["L","119","64"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.na.scale=0.2;ln.lq.na.load();ln.lq.nb=mge.image.create();ln.lq.nb.kx={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","61","24","19","56"],["L","36","64"],["M","98","3"],["Q","99","31","97","69"],["L","114","69"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.nb.scale=0.2;ln.lq.nb.load();ln.lq.nc=mge.image.create();ln.lq.nc.kx={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","39","24","48","71"],["L","62","66"],["M","97","3"],["Q","93","31","89","59"],["L","103","69"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.nc.scale=0.2;ln.lq.nc.load();ln.lq.nd=mge.image.create();ln.lq.nd.kx={"_s":{"_w":200,"_h":100},"_p":[{"_fs":["C","#9bae8f"],"_ss":["#417029","2","round","round"],"_gp":[],"_c":[["R","2","2","196","38"],["R","95","40","9","58"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#417029"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","0"]],"_t":["11","23","25","bold","Arial","left","middle","NUMBERLAND"]}]};ln.lq.nd.load();ln.lq.violetBkg1=mge.image.create();ln.lq.violetBkg1.kx={"_s":{"_w":1300,"_h":750},"_p":[{"_fs":["LG","0","0","0","750"],"_ss":["#000000","0","round","round"],"_gp":[[0,"#ccafdf"],[1,"#ffffff"]],"_c":[["R","0","0","1300","750"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.violetBkg1.load();ln.ls.violetBkg1=mge.bv.bp.createPattern(ln.lq.violetBkg1.il,'repeat');ln.lq.violetBkg2=mge.image.create();ln.lq.violetBkg2.kx={"_s":{"_w":1300,"_h":1500},"_p":[{"_fs":["C","#c8a2e2"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","1125"],["L","250","1050"],["L","1000","1200"],["L","1300","1125"],["L","1300","1500"],["L","0","1500"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.violetBkg2.load();ln.ls.violetBkg2=mge.bv.bp.createPattern(ln.lq.violetBkg2.il,'repeat');ln.lq.violetBkg3=mge.image.create();ln.lq.violetBkg3.kx={"_s":{"_w":1300,"_h":1500},"_p":[{"_fs":["C","#a26ac8"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","1200"],["L","131","1250"],["L","1000","1100"],["L","1300","1200"],["L","1300","1500"],["L","0","1500"]],"_t":[8,8,8,"","","","",""]}]};ln.lq.violetBkg3.load();ln.ls.violetBkg3=mge.bv.bp.createPattern(ln.lq.violetBkg3.il,'repeat');let nk={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","0"],["L","30","0"],["L","30","30"]],"_t":[8,8,8,"","","","",""]}]};let nl={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","5","5","20","20"]],"_t":[8,8,8,"","","","",""]}]};let nm={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","15","15","5"]],"_t":[8,8,8,"","","","",""]}]};let nn={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","15","0"],["L","30","15"],["L","15","30"],["L","0","15"]],"_t":[8,8,8,"","","","",""]}]};let no={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","12","0"],["L","18","0"],["L","30","12"],["L","30","18"],["M","0","12"],["L","0","18"],["L","12","30"],["L","18","30"]],"_t":[8,8,8,"","","","",""]}]};let np={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","12","0"],["L","18","0"],["L","30","12"],["L","30","18"],["M","0","12"],["L","0","18"],["L","12","30"],["L","18","30"],["M","0","12"],["L","12","0"],["L","18","0"],["L","0","18"]],"_t":[8,8,8,"","","","",""]}]};let nq={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","3"],["R","0","15","30","3"],["R","0","0","3","15"],["R","15","15","3","15"]],"_t":[8,8,8,"","","","",""]}]};let ns={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#5d2c77"],"_ss":["#5d2c77","0","round","round"],"_gp":[],"_c":[["M","0","12"],["B","20","-25","8","30","30","12"],["L","30","17"],["B","12","55","20","1","0","17"]],"_t":[8,8,8,"","","","",""]}]};ln.ls.nt2=ln.lq.ahColoredPattern(ns,'#5d2c77','#582970');ln.ls.nu=ln.lq.ahColoredPattern(nm,'#582970','#c8a2e2');ln.ls.nv=ln.lq.ahColoredPattern(nq,'#c8a2e2','#582970');ln.ls.nw=ln.lq.ahColoredPattern(no,'#5a97c8','#6aa4d2')};ln.lv.electricPiano={play:function(an,ad,ae,aq){let al={heADSR:{a:0.01,d:0.2,s:0.8,r:0.1,kn:0,ko:aq},oscType:'sine'};let _detune1=Object.create(al);let _detune2=Object.create(al);let _detune3=Object.create(al);_detune1.kq={a:0.5,d:0.5,s:1,r:0,kn:-3,ko:3};_detune2.kq={a:0.7,d:0.7,s:1,r:0,kn:5,ko:-5};_detune2.kq={a:0.8,d:0.6,s:1,r:0,kn:-5,ko:5};let _noise={heADSR:{a:0.01,d:0.3,s:0,r:0,kn:0,ko:aq},oscType:'noise',filterType:'lowpass',kr:{a:0.01,d:0.4,s:0,r:0,kn:500,ko:500}};mge.hg.hf(al,an,ad,ae,aq);mge.hg.hf(_detune1,an,ad,ae,aq);mge.hg.hf(_detune2,an,ad,ae,aq);mge.hg.hf(_detune3,an,ad,ae,aq);mge.hg.hf(_noise,an,ad,ae,aq)}};ln.lw.mnSong.kx={"_str":[0,0,1],"_p":[{"_b":[["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",2]],"_s":[[0,1,2,2],[3,0,1,1]]},{"_b":[["D4",4],["G4",4],["C4",4],["A4",4]],"_s":[[0,1,2,2],[3,0,1,1]]}]};ln.lw.mnSong.playSongElectricPiano=function(){mge.hi.stop();mge.hi.reset();let orchestra=[];orchestra.push(ln.lv.electricPiano);orchestra.push(ln.lv.electricPiano);let mix=[1,0.9];let bpm=120;ln.lw.mnSong.play(bpm,orchestra,mix)};ln.ly.nz=function(oa){ln.lu.mh=[];ln.lt.qo.hz();for(let _pltf of oa.ob){ln.lt.qo.init(_pltf)};ln.lt.qi.hz();for(let _num of oa.oc){ln.lt.qi.init(_num)};ln.lt.ps.hz();for(let _bkg of oa.od){ln.lt.ps.init(_bkg,oa.og)};ln.lt.rb.X=oa.gqer.X;ln.lt.rb.Y=oa.gqer.Y;ln.lu.mf=oa.og.X;ln.lu.mg=oa.og.Y;ln.lu.mi=oa.of._plt;ln.lu.mk= oa.of._num};ln.ly.createLevels=function(){ln.ly.push({od:[{bn:'A',bl:1300,bm:750,X:3000,Y:-100,ok:0,ol:ln.ls.violetBkg1},{bn:'B',bl:5000,bm:1500,X:3000,Y:-600,ok:0.5,ol:ln.ls.violetBkg2},{bn:'C',bl:7000,bm:1500,X:3000,Y:-510,ok:0.75,ol:ln.ls.violetBkg3},{bn:'D',bl:200,bm:100,X:2400,Y:-48,ok:1,ni:ln.lq.nd},{bn:'E',bl:1000,bm:200,X:330,Y:-320,ok:1,ol:ln.ls.nw}],ob:[{bn:'1',bl:3900,bm:300,X:0,Y:0,ol:ln.ls.nt2},{bn:'1bis',bl:600,bm:30,X:1830,Y:0,om:{on:'pi:HI 13,WELCOME TO NUMBERLAND!:640:550'}},{bn:'2',bl:570,bm:2700,X:3300,Y:-2700,ol:ln.ls.nt2},{bn:'3',bl:1800,bm:90,X:0,Y:-90,ol:ln.ls.nt2,pq:[0,10]},{bn:'4',bl:1440,bm:180,X:0,Y:-270,ol:ln.ls.nt2,pq:[0,10]},{bn:'4bis',bl:360,bm:30,X:400,Y:-270},{bn:'5',bl:180,bm:30,X:1900,Y:-200,ol:ln.ls.nu,pq:10},{bn:'6',bl:180,bm:30,X:1620,Y:-310,ol:ln.ls.nu,pq:10},{bn:'7',bl:210,bm:30,X:1310,Y:-420,ol:ln.ls.nu,pq:10},{bn:'7bis',bl:150,bm:25,X:1310,Y:-420,om:{on:'pj:56'}},{bn:'7ter',bl:150,bm:25,X:1310,Y:-420,om:{on:'pi:IT SEEMS NUMBERS ARE AFRAID WHEN THEY SEE YOU:640:150'}},{bn:'8',bl:30,bm:160,X:820,Y:-270,ol:'#582970',oo:{X:820,Y:-400,op:0,oq:-1000}},{bn:'9',bl:1000,bm:30,X:-145,Y:-430,ol:ln.ls.nu,ph:'#582970',pq:[0,10,10,0]},{bn:'10',bl:180,bm:30,X:1000,Y:-490,ol:ln.ls.nu,pq:10},{bn:'11',bl:990,bm:300,X:-510,Y:-700,ol:ln.ls.nv,ph:'#582970'},{bn:'12',bl:150,bm:30,X:550,Y:-640,ol:ln.ls.nu,pq:10},{bn:'12bis',bl:90,bm:10,X:582,Y:-610,ol:'#d10c0c',om:{on:'pk:8'},pq:[0,0,10,10]}],gqer:{X:3000,Y:-100},oc:[{bn:'56',X:1400,Y:-306,os:1300,ot:1420,op:50,ox:800,po:-400,ov:-305,pn:200,oy:'pl:8',osFallen:-100000,otFallen:800,opFallen:50,pc:'',pd:'FEAR!',pe:'',pf:'#0565a4',pg:'#0565a4'}],of:{_plt:'4bis',_num:'pm'},og:{X:3000,Y:-100}});ln.ly.push({od:[],ob:[{bn:'11',bl:2700,bm:270,X:0,Y:0,ol:ln.ls.level1BlockGreat},{bn:'5',bl:180,bm:30,X:1900,Y:-200,ol:ln.ls.level1BlockDiv,pq:10},{bn:'10',bl:40,bm:40,X:1350,Y:-460,ol:'#417029',or:{os:900,ot:1400,ou:1300,ov:-290,ow:'left'}}],gqer:{X:2200,Y:-100},oc:[{bn:'56',X:1400,Y:-306,os:1200,ot:1420,op:100,ox:800,pf:'#390052',pg:'#390052'}],of:{_plt:'5',_num:'pm'},og:{X:2000,Y:-100}})};ln.lp.mm.start=function(){ln.lq.init();ln.lbs.init();ln.lt.mt.init();ln.lt.mu.init();ln.lt.eye.init();ln.lt.legs.init();ln.lt.qx.init();ln.ly.createLevels();ln.lo='mp'};ln.lp.mm.mr=function(){ln.lt.mu.mr()};ln.lp.mm.draw=function(){ln.lt.mt.draw();ln.lt.mu.draw()};ln.lp.mn.start=function(){ln.lt.eye.hz();ln.lt.legs.hz();ln.lt.rb.init();ln.ly.nz(ln.ly[ln.lu.me]);ln.lt.qx.init();ln.lo='kv'};ln.lp.mn.mr=function(){ln.lt.rb.mr();if(ln.lu.mf<ln.lt.rb.X-ln.lu.lz){ln.lu.mf=ln.lt.rb.X-ln.lu.lz};if(ln.lu.mf>ln.lt.rb.X+ln.lu.lz){ln.lu.mf=ln.lt.rb.X+ln.lu.lz};if(ln.lu.mg<ln.lt.rb.Y-ln.lu.ma){ln.lu.mg=ln.lt.rb.Y-ln.lu.ma};if(ln.lu.mg>ln.lt.rb.Y+ln.lu.ma){ln.lu.mg=ln.lt.rb.Y+ln.lu.ma};ln.lt.qi.ib('mr');ln.lt.ps.ib('mr');for(let on of ln.lu.mh){if(on.split(':')[0]=='pi'){ln.lt.qx.qy=on.split(':')[1];ln.lt.qx.x=on.split(':')[2];ln.lt.qx.y=on.split(':')[3];ln.lu.mh=ln.lu.mh.filter(e=>e !==on)}};if(ln.lx.ms(ln.lu.mj,ln.lu.ml)){ln.lo='mq';if(ln.lu.me<ln.ly.length-1){ln.lu.me+=1;}else{ln.lu.me=0};mge.ln.hk(ln.lp.mo)}};ln.lp.mn.draw=function(){ln.lt.ps.ib('draw');ln.lt.qo.ib('draw');ln.lt.qi.ib('draw');ln.lt.rb.draw();ln.lt.eye.ib('draw');ln.lt.legs.ib('draw');ln.lt.qx.draw()};ln.lp.mo.start=function(){this.cgScene=Date.now()};ln.lp.mo.mr=function(){if(Date.now()-this.cgScene>2000){mge.ln.hk(ln.lp.mn)}};ln.lp.mo.draw=function(){ln.lt.qx.qy='LEVEL COMPLETED';ln.lt.qx.draw()};ln.lt.mt.init=function(){this.width=ln.lq.mt.width;this.height=ln.lq.mt.height;this.x=640;this.y=650};ln.lt.mt.hr=function(ctx){ln.lq.mt.draw(ctx)};ln.lt.mu.init=function(){this.width=ln.lq.mu.width;this.height=ln.lq.mu.height;this.x=640;this.y=300};ln.lt.mu.mr=function(){if(this.hp){ln.lw.mnSong.playSongElectricPiano();mge.ln.hk(ln.lp.mn)}};ln.lt.mu.hr=function(ctx){ln.lq.mu.draw(ctx)};ln.lt.qo.init=function(qp){let fk=ln.lt.qo.hy();fk.width=qp.bl;fk.height=qp.bm;fk.X=qp.X+qp.bl/2;fk.Y=qp.Y+qp.bm/2;fk._rv=0;fk.oq=0;fk.ee=false;fk.bn=qp.bn||'';fk.ni=qp.ni||'';fk.ol=qp.ol||'';fk.ph=qp.ph||'';fk.pq=qp.pq||0;fk.or=qp.or||'';fk.pp=qp.pp||0;fk.om=qp.om||'';fk.oo=qp.oo||'';fk.qs=false;return fk};ln.lt.qo.hr=function(ctx){if(ln.lx.ms({xMin:this.x-this.width/2,xMax:this.x+this.width*2,yMin:this.y-this.height/2,yMax:this.y+this.height/2},{xMin:0,xMax:mge.ln.width,yMin:0,yMax:mge.ln.height})){ctx.beginPath();ctx.roundRect(0,0,this.width,this.height,this.pq);if(this.ol!=''){ctx.fillStyle=this.ol;ctx.fill()};if(this.ph!=''){ctx.strokeStyle=this.ph;ctx.lineWidth=2;ctx.stroke()};if(this.ni!=''){this.ni.draw(ctx)}}};ln.lt.qo.qv=function(){let _p=ln.lt.rb;let _qm=1/mge.ln.fps;this.ee=false;let flBox={xMin:this.X-this.width/2,xMax:this.X+this.width/2,yMin:this.Y-this.height/2,yMax:this.Y+this.height/2};if(ln.lx.ms(flBox,_p.rl)){_p.rg=true;this.ee=true;if(this.or!='' && _p.rw>0){this.X=_p.X+_p.width/2+this.width/2+_p.rk;_p.rg=false;_p.rw=0;if(this.X>=this.or.ot){this.X=this.or.ot;_p.rg=true}}};if(ln.lx.ms(flBox,_p.rm)){_p.rh=true;this.ee=true;if(this.or!='' && _p.rw<0){this.X=_p.X-_p.width/2-this.width/2-_p.rk;_p.rh=false;_p.rw=0;if(this.X<=this.or.os){this.X=this.or.os;_p.rh=true}}};if(ln.lx.ms(flBox,_p.rn)){_p.ri=true;this.ee=true};if(ln.lx.ms(flBox,_p.ro)){_p.rj=true;this.ee=true;if(this.pp !=0){ln.lt.rb.rx=-this.pp;ln.lt.rb.Y=this.Y-this.height/2-ln.lt.rb.height/2;_p.rj=false}};if(this.or!=''){if(this.Y<this.or.ov){if((this.or.ow=='right' && this.X>=this.or.ou)||(this.or.ow=='left' && this.X<=this.or.ou)){this._rv=ln.lu.md;this.oq+=this._rv*_qm;this.Y=Math.min(this.Y+this.oq*_qm,this.or.ov)}}};if(this.oo!='' && this.qs){if(this.oo.oq<0){this.Y=Math.max(this.Y+this.oo.oq*_qm,this.oo.Y+this.bm/2);}else{this.Y=Math.min(this.Y+this.oo.oq*_qm,this.oo.Y+this.bm/2)};if(this.oo.op<0){this.X=Math.max(this.X+this.oo.op*_qm,this.oo.X+this.bl/2);}else{this.X=Math.min(this.X+this.oo.op*_qm,this.oo.X+this.bl/2)}};this.x=this.X-ln.lu.mf+mge.ln.width/2;this.y=this.Y-ln.lu.mg+mge.ln.height/2;if(this.bn==ln.lu.mi){ln.lu.mj={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}};if(this.om!=''&&this.ee){if(!ln.lu.mh.includes(this.om.on)){ln.lu.mh.push(this.om.on)};this.ol=this.om.ol||'';this.ni=this.om.ni||'';this.om=''};for(let on of ln.lu.mh){if(on=='pk:'+this.bn){this.ia();ln.lu.mh=ln.lu.mh.filter(e=>e !==on)};if(on=='pl:'+this.bn){this.qs=true;ln.lu.mh=ln.lu.mh.filter(e=>e !==on)}}};ln.lt.eye.init=function(){this.width=ln.lq.mw.width;this.height=ln.lq.mw.height;this.qe='normal';this.qf='';mge.lb.lc(this);this.lb.lf=100};ln.lt.eye.hr=function(ctx){if(this.qe !=this.qf){if(this.qe=='normal'){this.lb.frames=ln.lbs.eye};this.lb.lg()};this.qf=this.qe;this.lb.draw(ctx)};ln.lt.legs.init=function(){this.width=ln.lq.my.width;this.height=ln.lq.my.height;this.qe='idle';this.qf='';mge.lb.lc(this);this.lb.lf=100};ln.lt.legs.hr=function(ctx){if(this.qe !=this.qf){if(this.qe=='idle'){this.lb.frames=ln.lbs.my};if(this.qe=='walk'){this.lb.frames=ln.lbs.ny};this.lb.lg()};this.qf=this.qe;this.lb.draw(ctx)};ln.lt.qi.init=function(qj){let fk=ln.lt.qi.hy();fk.width=ln.lu.mb;fk.height=ln.lu.mc;fk.bn=qj.bn||'';fk.X=qj.X;fk.Y=qj.Y;fk.os=qj.os||0;fk.ot=qj.ot||0;fk.op=qj.op||200;fk.oq=0;fk.ox=qj.ox||0;fk.po=qj.po||0;fk.ov=qj.ov||0;fk.pn=qj.pn||0;fk.oy=qj.oy||'';fk.osFallen=qj.osFallen||0;fk.otFallen=qj.otFallen||0;fk.opFallen=qj.opFallen||0;fk.qk=false;fk.pf=qj.pf||'black';fk.pg=qj.pg||'black';fk.pc=qj.pc||'';fk.pd=qj.pd||'';fk.pe=qj.pe||'';fk.ql='';fk.ry=ln.lt.eye.hy();mge.lb.le(fk.ry);fk.rz=ln.lt.legs.hy();mge.lb.le(fk.rz);return fk};ln.lt.qi.mr=function(){let qm=Math.min(1/mge.ln.fps,0.04);this.X+=Math.round(this.op*qm);this.Y+=Math.round(this.oq*qm);if(!this.qk){if((this.X>this.ot && this.op>0)||(this.X<this.os && this.op<0)){this.op=this.op*-1;this.ql=this.pc};}else{if((this.po<0 && this.X>this.ox && this.Y<this.ov)||(this.po>0 && this.X<this.ox && this.Y<this.ov)){this.op=this.po;this.ql=this.pd};if((this.po<0 && this.X<=this.ox && this.Y<this.ov)||(this.po>0 && this.X>=this.ox && this.Y<this.ov)){this.op=0;this.X=this.ox;this.oq=this.pn;this.ql=this.pd;if(this.oy !='' && !ln.lu.mh.includes(this.oy)){ln.lu.mh.push(this.oy)}};if(this.Y>=this.ov){this.oq=0;this.Y=this.ov;this.ql=this.pe;if(this.op==0){this.op=this.opFallen};if((this.X>this.otFallen && this.op>0)||(this.X<this.osFallen && this.op<0)){this.op=this.op*-1}}};this.x=this.X-ln.lu.mf+mge.ln.width/2;this.y=this.Y-ln.lu.mg+mge.ln.height/2;if(this.bn==ln.lu.mk){ln.lu.ml={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}};for(let on of ln.lu.mh){if(on=='pj:'+this.bn){this.qk=true;ln.lu.mh=ln.lu.mh.filter(e=>e !==on)}}};ln.lt.qi.hr=function(ctx){ctx.font='bold 50px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=this.pf;ctx.fillText(this.bn,this.bl/2,this.bm/2+7);this.ry.qe='normal';this.ry.x=this.x-5;this.ry.y=this.y-25;this.ry.hs=1;if(this.op<=0){this.ry.qe='normal';this.ry.x=this.x-5;this.ry.y=this.y-25;this.ry.hs=1;}else{this.ry.qe='normal';this.ry.x=this.x;this.ry.y=this.y-25;this.ry.hs=-1};if(Math.abs(this.op)<1){this.rz.qe='idle';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=1};if(this.op<=-1){this.rz.qe='walk';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=-1};if(this.op>=1){this.rz.qe='walk';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=1};if(Math.abs(this.oq>0)){this.rz.qe='idle';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=1};if(this.ql !=''){ctx.fillStyle='white';ctx.strokeStyle=this.pg;ctx.beginPath();ctx.roundRect(-10,-45,80,35,10);ctx.fill();ctx.font='24px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=this.pg;ctx.fillText(this.ql,this.width/2,-25)}};ln.lt.qx.init=function(){this.width=800;this.height=50;this.x=mge.ln.width/2;this.y=this.height/2+5;this.qy='';this.qz='';this.ra=Date.now()};ln.lt.qx.hr=function(ctx){if(this.qy !=this.qz){this.ra=Date.now();this.qz=this.qy};if(this.qy !='' && Date.now()-this.ra<4000){ctx.fillStyle='white';ctx.strokeStyle='black';ctx.lineWidth=2;ctx.fillRect(0,0,this.width,this.height);ctx.strokeRect(0,0,this.width,this.height);ctx.font='24px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='black';ctx.fillText(this.qy,this.width/2,this.height/2);ln.lq.pi.draw(ctx)}};ln.lt.ps.init=function(pt,pu){let fk=ln.lt.ps.hy();fk.width=pt.bl||mge.ln.width;fk.height=pt.bm||mge.ln.height;fk.X=pt.X+mge.ln.width/2;fk.Y=pt.Y+mge.ln.height/2;fk._mfinit=pu.X;fk._mginit=pu.Y;fk.ok=pt.ok;fk.ol=pt.ol||'';fk.ni=pt.ni||'';return fk};ln.lt.ps.mr=function(){let qa=this._mfinit-ln.lu.mf;let qb=this._mfinit-qa*this.ok;let qc=this._mginit-ln.lu.mg;let qd=this._mginit-qc*this.ok;this.x=this.X-qb;this.y=this.Y-qd};ln.lt.ps.hr=function(ctx){if(this.ol!=''){ctx.fillStyle=this.ol;ctx.beginPath();ctx.fillRect(0,0,this.width,this.height);ctx.fill()};if(this.ni!=''){this.ni.draw(ctx)}};ln.lt.rb.init=function(){this.x=mge.ln.width/2;this.y=mge.ln.height/2;this.width=ln.lu.mb;this.height=ln.lu.mc;this.X=200;this.Y=0;this.rc=false;this.rd=false;this.re=false;this.rf=false;this.rg=false;this.rh=false;this.ri=false;this.rj=false;this.rk=10;this.rl={};this.rm={};this.rn={};this.ro={};this.rp=10000;this.rpqw=8000;this.rr=70000;this.rs=3000;this.rt=0.3;this.ru=0;this.rv=0;this.rw=0;this.rx=0;this.ry=ln.lt.eye.hy();mge.lb.le(this.ry);this.rz=ln.lt.legs.hy();mge.lb.le(this.rz)};ln.lt.rb.mr=function(){let qm=Math.min(1/mge.ln.fps,0.04);let sa=this.X;let sb=this.Y;if(mge.ho.hn('ArrowRight')&& !mge.ho.hn('ArrowLeft')){this.rd=true}else{this.rd=false};if(mge.ho.hn('ArrowLeft')&& !mge.ho.hn('ArrowRight')){this.rc=true}else{this.rc=false};if(mge.ho.hn('ArrowUp')&& !mge.ho.hn('ArrowDown')){this.re=true}else{this.re=false};if(mge.ho.hn('ArrowDown')&& !mge.ho.hn('ArrowUp')){this.rf=true}else{this.rf=false};this.ru=0;if(this.rc && this.rj){this.ru=-this.rp};if(this.rd && this.rj){this.ru=this.rp};if(this.rc && !this.rj){this.ru=-this.rpqw};if(this.rd && !this.rj){this.ru=this.rpqw};this.rv=0;if(this.re && this.rj){this.rv=-this.rr};this.rv+=ln.lu.md;this.rw+=this.ru*qm;this.rw=this.rw*(1-this.rt);if(this.rw>0 && this.rw>this.rs){this.rw=this.rs};if(this.rw<0 && this.rw<-this.rs){this.rw=-this.rs};this.rx+=this.rv*qm;this.X+=Math.round(this.rw*qm);this.Y+=Math.round(this.rx*qm);this.rl={xMin:this.X+this.width/2,xMax:this.X+this.width/2+this.rk,yMin:this.Y-this.height/2+this.rk,yMax:this.Y+this.height/2-this.rk};this.rm={xMin:this.X-this.width/2-this.rk,xMax:this.X-this.width/2,yMin:this.Y-this.height/2+this.rk,yMax:this.Y+this.height/2-this.rk};this.rn=  {xMin:this.X-this.width/2+this.rk,xMax:this.X+this.width/2-this.rk,yMin:this.Y-this.height/2,yMax:this.Y-this.height/2+this.rk};this.ro={xMin:this.X-this.width/2+this.rk,xMax:this.X+this.width/2-this.rk,yMin:this.Y+this.height/2-this.rk,yMax:this.Y+this.height/2};this.rg=false;this.rh=false;this.ri=false;this.rj=false;ln.lt.qo.ib('qv');if(this.rg & !(this.rc)){this.X=sa;this.rw=0};if(this.rh & !(this.rd)){this.X=sa;this.rw=0};if(this.rj){this.Y=sb;this.rx=0};if(this.ri){this.Y=sb+5;this.rx=0};this.x=this.X-ln.lu.mf+mge.ln.width/2;this.y=this.Y-ln.lu.mg+mge.ln.height/2;if(ln.lu.mk=='pm'){ln.lu.ml={xMin:this.x-this.width/2-10,xMax:this.x+this.width/2+10,yMin:this.y-this.height/2-10,yMax:this.y+this.height/2+10}};if(ln.lu.mi=='pm'){ln.lu.mj={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}}};ln.lt.rb.hr=function(ctx){ln.lq.mv.draw(ctx);if(this.rw<=0){this.ry.qe='normal';this.ry.x=this.x-5;this.ry.y=this.y-25;this.ry.hs=1;}else{this.ry.qe='normal';this.ry.x=this.x;this.ry.y=this.y-25;this.ry.hs=-1};if(!(this.rd||this.rc)){this.rz.qe='idle';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=1};if(this.rc){this.rz.qe='walk';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=-1};if(this.rd){this.rz.qe='walk';this.rz.x=this.x;this.rz.y=this.y+29;this.rz.hs=1}}