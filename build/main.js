const mge={bl:{},bx:{},cm:{},di:{},dv:{},cskl:{},he:{}};mge.hi={get hf(){return mge.bl.ak.currentTime},get hg(){return mge.bl.as},set hg(ko){mge.bl.bg(ko)},hh:function(an,ap,ad,ae,as){mge.bl.am(an,mge.bl.al,ap,ad,ae,as)}};mge.hk={get bpm(){return mge.he.fq},set bpm(ko){mge.he.fq=ko},hj:function(fw,fx,as){return mge.he.ajTrack(fw,fx,as)},start:function(){mge.he.ci()},stop:function(){mge.he.df()},reset:function(){mge.he.aj()}};mge.game={get width(){return mge.bx.bq.width},set width(ko){mge.bx.bq.width=ko},get height(){return mge.bx.bq.height},set height(ko){mge.bx.bq.height=ko},get fps(){return mge.di.dc},start:function(ch){mge.cm.ci(ch)},hm:function(ch){mge.cm.cg(ch)},hn:function(){return mge.cm.ajkk()}};mge.hq={hp:function(cs){return mge.cskl.cq(cs)}};mge.hs={get hr(){return mge.dv.dl}};mge.fn={set ht(ko){this.dy=ko},get width(){return this.bn},set width(ko){this.bn=ko},get height(){return this.bo},set height(ko){this.bo=ko},get x(){return this._x},set x(ko){this._x=ko},get y(){return this._y},set y(ko){this._y=ko},set hu(ko){this.bu=ko},set hx(ko){this.ee=ko},get hr(){return this.dl(mge.dv._x,mge.dv._y,mge.dv.dl)},draw:function(){this.ef()},ia:function(){return this.ez()},ic:function(){this.fe()},ib:function(){this.fc()},id:function(kn){return this.fg(kn)}};mge.bl.aa=function(ab,ac,ad,ae){let a=ab.a||0.0001;let d=ab.d||0.0001;let s=ab.s||0.0001;let r=ab.r||0.0001;let af=ab.ah||0.0001;let ag=ab.ai||1;if(ae<=a){ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag*ae/a,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}else if(ae<=a+d){ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag,ad+a);ac.exponentialRampToValueAtTime(ag*s*d/ae,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}else{ac.setValueAtTime(af,ad);ac.exponentialRampToValueAtTime(ag,ad+a);ac.exponentialRampToValueAtTime(ag*s,ad+a+d);ac.setValueAtTime(ag*s,ad+ae);ac.exponentialRampToValueAtTime(af,ad+ae+r)}};mge.bl.aj=function(){this.ak='';this.al='';this.as=1;this.ak=new(window.AudioContext||window.webkitAudioContext)();this.al=this.ak.createGain();this.al.connect(this.ak.destination)};mge.bl.am=function(an,ao,ap,ad,ae,as){let aa=this.aa;let au=this.ak;let av=an.oscType||'sine';let aw=an.filterType||'lowpass';let asADSR=an.hgADSR||{a:0,d:0,s:1,r:0,ah:1,ai:1};let ay=an.kr||{a:0,d:0,s:1,r:0,ah:ap,ai:ap};let az=an.ks||{a:0,d:0,s:1,r:0,ah:0,ai:0};let ba=an.kt||{a:0,d:0,s:1,r:0,ah:20000,ai:20000};let bf='';if(av=='noise'){bf=au.createBufferSource();let buffer=au.createBuffer(1,au.sampleRate*(ae+asADSR.r),au.sampleRate);let noiseOutput=buffer.getChannelData(0);for(let i=0;i<buffer.length;i++){noiseOutput[i]=Math.random()*2-1};bf.buffer=buffer;}else{bf=au.createOscillator();bf.type=av;aa(ay,bf.frequency,ad,ae);aa(az,bf.detune,ad,ae)};bf.start(ad);bf.stop(ad+ae+asADSR.r);let bc=au.createGain();aa(asADSR,bc.gain,ad,ae);let bd=au.createGain();bd.gain.setValueAtTime(mge.bl.asToGain(as)*0.04,ad);let be=au.createBiquadFilter();be.type=aw;aa(ba,be.frequency,ad,ae);bf.connect(be);be.connect(bc);bc.connect(bd);bd.connect(ao)};mge.bl.bg=function(as){if(as<=0){mge.bl.as=0}else if(as>=1){mge.bl.as=1}else{mge.bl.as=as};mge.bl.al.gain.setValueAtTime(mge.bl.asToGain(mge.bl.as),mge.hi.hf)};mge.bl.asToGain=function(as){let bk=30;if(as<=0){return 0;}else if(as>=1){return 1;}else{return Math.pow(10,(as-1)*bk/10)}};mge.bx.aj=function(bn,bo,bp){this.bq='';this.br='';this.bq=document.getElementById(bp);if(this.bq){this.bq.remove()};this.bq=document.createElement('canvas');this.bq.id=bp;this.bq.width=bn;this.bq.height=bo;document.body.appendChild(this.bq);this.br=this.bq.getContext('2d')};mge.bx.bs=function(){let bt=this.bq;let bu=(window.innerWidth-10)/bt.width;let bv=(window.innerHeight-10)/bt.height;let bw=Math.min(bu,bv);bt.style.transformOrigin='0 0';bt.style.transform='scale('+bw+')';bt.display='block'};mge.cm.aj=function(bn,bo){this.cb='';this.cc='';this.cd=[];let bx=mge.bx;let bl=mge.bl;let di=mge.di;let dv=mge.dv;let cskl=mge.cskl;let he=mge.he;bx.aj(bn,bo,'kv');dv.aj(bx.bq);cskl.aj();bl.aj();he.aj();di.aj()};mge.cm.ajkk=function(){let fn=mge.fn;let bx=mge.bx;let cm=mge.cm;let br=bx.br;let _newkk=Object.create(fn);_newkk.aj(br);cm.cd.push(_newkk);return _newkk};mge.cm.cg=function(ch){if(!ch.start){ch.start=function(){}};if(!ch.ms){ch.ms=function(){}};if(!ch.draw){ch.draw=function(){}};this.cc=ch};mge.cm.ci=function(ch){let di=mge.di;this.cg(ch);di.ci()};mge.cskl.cq=function(cs){if(this.cp.indexOf(cs)==-1){return false;}else{return true}};mge.cskl.cr=function(e){let cs=e.key;if(this.co.indexOf(cs)==-1){this.co.push(cs)}};mge.cskl.ct=function(e){let cs=e.key;let indexOfKey=this.co.indexOf(cs);if(indexOfKey !=-1){this.co.splice(indexOfKey,1)}};mge.cskl.cv=function(){this.cp=[];this.co=[]};mge.cskl.cw=function(){this.cp=this.co.slice()};mge.cskl.aj=function(){this.cp=[];this.co=[];document.onkeydown=function(e){mge.cskl.cr(e)};document.onkeyup=function(e){mge.cskl.ct(e)}};mge.di.aj=function(){this.cz=0;this.da=0;this.db=0;this.dc=0;this.dd='kw'};mge.di.ci=function(){this.dd='kx';this.dg()};mge.di.df=function(){this.dd='kw';this.dg()};mge.di.dg=function(){let bx=mge.bx;let cm=mge.cm;let dv=mge.dv;let cskl=mge.cskl;let he=mge.he;let br=bx.br;let bq=bx.bq;let di=mge.di;let cd=cm.cd;di.da=performance.now();di.db=di.da-di.cz;di.dc=1/(di.db/1000);dv.cw();cskl.cw();if(cm.cb !=cm.cc){cm.cb=cm.cc;dv.cv();cskl.cv();cm.cb.start()};cm.cb.ms();cd.forEach(fn=>{fn.ex();});br.clearRect(0,0,bq.width,bq.height);cm.cb.draw();bx.bs();he.gs();di.cz=di.da;if(di.dd=='kx'){requestAnimationFrame(di.dg)}};mge.dv.dq=function(e){this.dp=true;this.dm=e.offsetX;this.dn=e.offsetY};mge.dv.dr=function(e){this.dm=e.offsetX;this.dn=e.offsetY};mge.dv.ds=function(e){this.dm='';this.dn=''};mge.dv.cv=function(){this._x=0;this._y=0;this.dl=false;this.dm=0;this.dn=0;this.dp=false};mge.dv.cw=function(){this._x=this.dm;this._y=this.dn;this.dl=this.dp;this.dp=false};mge.dv.aj=function(bt){this._x=0;this._y=0;this.dl=false;this.dm=0;this.dn=0;this.dp=false;bt.onclick=function(e){mge.dv.dq(e)};bt.onhsmove=function(e){mge.dv.dr(e)};bt.onhsout=function(e){mge.dv.ds(e)}};mge.fn.aj=function(dx){this.dx=dx;this.dy=function(){};this.bn=100;this.bo=100;this._x=0;this._y=0;this.bu=1;this.bv=1;this.ee=false;this.fb=[];this.fa=false};mge.fn.ef=function(){let dx=this.dx;dx.save();dx.translate(this._x-this.bn*this.bu/2,this._y-this.bo*this.bv/2);dx.scale(this.bu,this.bv);this.dy(dx);if(this.ee){dx.strokeStyle='red';dx.strokeRect(0,0,this.bn,this.bo);dx.strokeRect(this.bn/2,this.bo/2,1,1)};dx.restore()};mge.fn.dl=function(en,eo,ep){if(this.eq(en,eo)&& ep){return true;}else{return false}};mge.fn.eq=function(en,eo){let et=this._x+(this.bn/2)*this.bu;let eu=this._x-(this.bn/2)*this.bu;let ev=this._y+(this.bo/2)*this.bv;let ew=this._y-(this.bo/2)*this.bv;if(en>=eu && en<=et && eo>=ew && eo<=ev){return true;}else{return false}};mge.fn.ex=function(){let ey=[];this.fb.forEach(fm=>{if(fm.fa){ey.push(fm)};});this.fb=ey};mge.fn.ez=function(){let fm=Object.create(this);fm.fa=true;this.fb.push(fm);return fm};mge.fn.fe=function(){this.fa=false};mge.fn.fc=function(){this.fb=[]};mge.fn.fg=function(kn){this.fb.forEach(fm=>{fm[kn]();})};/*mge.fn.fi=function(eh){let fk=[];eh.fb.forEach(fm=>{if(this.eg(fm)){fk.push(fm)};});return fk;}*/;mge.he.aj=function(){this.fp=[];this.fq=60;this.fr=1;this.fs=0;this.ft=0;this.dd='kw'};mge.he.gc=function(gd){let ge={C:32.7,Db:34.6,D:36.7,Eb:38.9,E:41.2,F:43.6,Gb:46.2,G:49,Ab:51.9,A:55,Bb:58.3,B:61.7};let gf=parseInt(gd.substr(gd.length-1,gd.length),10);let gg=gd.substr(0,gd.length-1);let ap=ge[gg]*Math.pow(2,gf);return Math.round(ap)};mge.he.ajTrack=function(fw,fx,as){let ga=mge.he.ga;let fp=mge.he.fp;let gb=Object.create(ga);gb.fw=fw;gb.fx=fx;gb.as=as;fp.push(gb);return gb};mge.he.gi=function(ga,gk){let fx=ga.fx;let as=ga.as;let gn=ga.hc(gk);let go=this.fs;for(let i=0;i<gn.length;i+=2){let gg=gn[i];let ggFrequency=this.gc(gg);let ae=gn[i+1]*60/this.fq;fx.play(ggFrequency,go,ae,as);go+=ae}};mge.he.gs=function(){let gt=mge.bl.ak.currentTime;if(gt>=this.ft && this.dd=='started'){for(let i=0;i<this.fp.length;i++){let ga=this.fp[i];this.gi(ga,this.fr)};this.fr+=1;this.ft=this.fs+3*60/this.fq;this.fs+=4*60/this.fq}};mge.he.ci=function(){this.fr=1;this.fs=mge.bl.ak.currentTime;this.ft=0;this.dd='started'};mge.he.df=function(){this.dd='kw'};mge.he.ga={fw:[],fx:{},as:1,bg:function(as){if(as<=0){this.as=0}else if(as>=1){this.as=1}else{this.as=as}},hc:function(hd){let ky=this.fw.length;if(ky==0){return ''}else if(hd%ky==0){return this.fw[ky-1]}else{return this.fw[hd%ky-1]}}};mge.cm.aj(640,360);mge.ig={ih:{ii:[]},ij:{}};mge.ig.ij={set kz(ko){this.ik(ko)},set scale(ko){this.ip(ko)},get width(){return this.il._s._w*this.bw},get height(){return this.il._s._h*this.bw},load:function(){this.ir()},draw:function(dx){this.ef(dx)}};mge.image={create:function(){return mge.ig.ih.ajImage()}};mge.ig.ij.ik=function(ko){this.il=ko;this.im=false;this.io={}};mge.ig.ij.ip=function(ko){this.bw=ko;this.im=false;this.io={}};mge.ig.ij.ir=function(){let il=this.il;let bw=this.bw;let _s=il._s||{};let _w=_s._w*bw||200;let _h=_s._h*bw||200;let is=new OffscreenCanvas(_w,_h);let dx=is.getContext('2d');let _p=il._p||[];_p.forEach(function(_path){let fs=_path._fs||['C','red'];if(fs[0]=='C'){dx.fillStyle=fs[1]}else if(fs[0]=='LG'||fs[0]=='RG'){let it={};if(fs[0]=='LG'){it=dx.createLinearGradient(fs[1]*bw,fs[2]*bw,fs[3]*bw,fs[4]*bw)}else{it=dx.createRadialGradient(fs[1]*bw,fs[2]*bw,fs[3]*bw,fs[4]*bw,fs[5]*bw,fs[6]*bw)};let _gp=_path._gp;_gp.forEach(function(_point){it.addColorStop(_point[0],_point[1]);});dx.fillStyle=it};let ss=_path._ss||['red',2,'square','miter'];dx.strokeStyle=ss[0];dx.lineWidth=ss[1]*bw;dx.lineCap=ss[2];dx.lineJoin=ss[3];dx.beginPath();let _c=_path._c||[];_c.forEach(function(_cmd){if(_cmd[0]=='M'){dx.moveTo(_cmd[1]*bw,_cmd[2]*bw)}else if(_cmd[0]=='L'){dx.lineTo(_cmd[1]*bw,_cmd[2]*bw)}else if(_cmd[0]=='Q'){dx.quadraticCurveTo(_cmd[1]*bw,_cmd[2]*bw,_cmd[3]*bw,_cmd[4]*bw)}else if(_cmd[0]=='C'){dx.arc(_cmd[1]*bw,_cmd[2]*bw,_cmd[3]*bw,0,2*Math.PI)}else if(_cmd[0]=='R'){dx.rect(_cmd[1]*bw,_cmd[2]*bw,_cmd[3]*bw,_cmd[4]*bw)};});if(fs[0]!='N'){dx.fill()};if(ss[1]>0){dx.stroke()};let _txt=_path._t||[0,0,20,'normal','serif','start','alphabetic',''];let _fontSize=_txt[2]*bw;dx.font=_txt[3]+' '+_fontSize.toString()+'px '+_txt[4];dx.textAlign=_txt[5];dx.textBaseline=_txt[6];if(fs[0]!='N'){dx.fillText(_txt[7],_txt[0]*bw,_txt[1]*bw)};if(ss[1]>0){dx.strokeText(_txt[7],_txt[0]*bw,_txt[1]*bw)};});this.io=is.transferToImageBitmap();this.im=true};mge.ig.ij.aj=function(){this.il={};this.im=false;this.bw=1;this.io={}};mge.ig.ij.ef=function(dx){dx.drawImage(this.io,0,0)};mge.ig.ih.ajImage=function(){let iy=Object.create(mge.ig.ij);iy.aj();this.ii.push(iy);return iy};mge.jz={ka:{}};mge.jz.lc=function(fm){fm.ld=Object.create(fm.__proto__.ld)};mge.jz.irlf=function(fn){fn.ld=Object.create(mge.jz.ka);fn.ld.aj()};mge.ld={le:function(fn){mge.jz.irlf(fn)},lg:function(fm){mge.jz.lc(fm)}};mge.jz.ka={set lh(ko){this.ki=ko},get lh(){return this.ki},set frames(ke){this.kd(ke)},draw:function(dx){this.ef(dx)},li:function(){this.kj()}};mge.jz.ka.ef=function(dx){if(this.kg==-1){this.kg=0;this.kh=Date.now();}else if(Date.now()- this.kh>this.ki){this.kg+=1;if(this.kg>this.ke.length-1){this.kg=0};this.kh=Date.now()};this.ke[this.kg].draw(dx)};mge.jz.ka.kd=function(ke){this.ke=ke;this.kg==-1;this.kh=Date.now()};mge.jz.ka.aj=function(){this.ke=[];this.kg=-1;this.kh=Date.now();this.ki=100};mge.jz.ka.kj=function(){this.kg=-1};mge.jf={jg:{ii:[]},ji:{}};mge.jf.ji={set kz(ko){this.ik(ko)},load:function(){this.ir()},play:function(fq,fxs,_mix){this.gs(fq,fxs,_mix)}};mge.song={create:function(){return mge.jf.jg.ajSong()}};mge.jf.ji.aj=function(){this.il={};this.im=false;this.fp=[]};mge.jf.ji.ir=function(){let il=this.il;let fp=[];il._p.forEach(function(_part){let ll=[];il._str.forEach(function(lm){_part._s[lm].forEach(function(gn){ll.push(_part._b[gn]);});});fp.push(ll);});this.fp=fp;this.im=true};mge.jf.ji.gs=function(fq,fxs,_mix){let jp={play:function(ap,ad,ae,as){let an={hgADSR:{a:0.02,d:400,s:0,r:0.1,ah:0,ai:as},oscType:'sine'};mge.hi.hh(an,ap,ad,ae,as)}};if(!this.im){this.ir()};mge.hk.stop();mge.hk.reset();let jq=0;this.fp.forEach(function(ga){mge.hk.hj(ga,fxs[jq]||jp,_mix[jq]||1);jq+=1;});mge.hk.bpm=fq;mge.hk.start()};mge.jf.ji.ik=function(ko){this.il=ko;this.im=false;this.fp=[]};mge.jf.jg.ajSong=function(){let ju=Object.create(mge.jf.ji);ju.aj();this.ii.push(ju);return ju};game={lp:'mn',lq:{mn:{},mo:{},mp:{}},lr:{},lds:{},lt:{},lu:{mu:mge.game.hn(),mv:mge.game.hn(),rm:mge.game.hn(),sg:mge.game.hn(),eye:mge.game.hn(),legs:mge.game.hn(),qq:mge.game.hn(),qa:mge.game.hn(),particle:mge.game.hn(),rw:mge.game.hn()},lv:{ma:200,mb:100,mc:60,md:70,me:5000,mf:0,mg:0,mh:0,mi:[],mj:'1',mk:{xMin:0,xMax:0,yMin:0,yMax:0},ml:'1',mm:{xMin:10,xMax:10,yMin:10,yMax:10}},lw:{},lx:{moSong:mge.song.create()},ly:{},lz:[]};window.addEventListener("load",(event)=>{let loading=document.getElementById("loading");loading.remove();mge.game.width=1280;mge.game.height=720;mge.game.start(game.lq.mn)});game.ly.mt=function(_box1,_box2){if(!(_box1.xMin>_box2.xMax||_box2.xMin>_box1.xMax||_box1.yMin>_box2.yMax||_box2.yMin>_box1.yMax)){return true}};game.ly.getRandomInteger=function(min,max){return Math.floor(Math.random()*(max-min)+min)};game.ly.getRandomItem=function(array){return array[Math.floor(Math.random()*array.length)]};game.lds.init=function(){game.lds.eye=Array(20).fill(game.lr.mx);game.lds.eye.push(game.lr.my);game.lds.mz=[game.lr.mz];game.lds.ob=[game.lr.na,game.lr.nb,game.lr.nc,game.lr.nd]};game.lr.ajColoredPattern=function(il,nh,ni){let nj=mge.image.create();let ilCopy=structuredClone(il);ilCopy._p[0]._fs[1]=nh;ilCopy._p[1]._fs[1]=ni;nj.kz=ilCopy;nj.load();return mge.bx.br.createPattern(nj.io,'repeat')};game.lr.init=function(){game.lr.mu=mge.image.create();game.lr.mu.kz={"_s":{"_w":400,"_h":400},"_p":[{"_fs":["C","#a301e6"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","60","170"],["Q","75","70","200","60"],["Q","317","70","350","170"],["Q","310","130","280","165"],["Q","240","130","205","165"],["Q","170","130","135","165"],["Q","96","130","60","170"]]},{"_fs":["N",""],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","205","165"],["L","205","275"],["M","60","193"],["Q","100","191","105","230"],["Q","100","268","60","266"],["L","60","193"],["M","153","215"],["Q","144","281","167","275"],["M","185","355"],["L","185","291"],["Q","223","287","220","310"],["Q","223","335","185","330"],["M","315","254"],["Q","312","293","330","293"],["Q","354","293","350","255"]]},{"_fs":["N",""],"_ss":["#a301e6","5","round","round"],"_gp":[],"_c":[["M","120","275"],["Q","111","312","135","310"],["M","245","250"],["Q","239","314","260","310"],["M","295","250"],["Q","264","251","262","233"],["Q","264","210","282","210"],["Q","305","210","303","232"],["L","263","232"],["M","120","260"],["C","120","260","2"]]}]};game.lr.mu.scale=0.3;game.lr.mu.load();game.lr.mw=mge.image.create();game.lr.mw.kz={"_s":{"_w":300,"_h":350},"_p":[{"_fs":["RG","110","175","0","150","175","133"],"_ss":["#cb5252","5","round","round"],"_gp":[[0,"#f5c6c6"],[1,"#e66465"]],"_c":[["M","15","124"],["Q","31","72","73","70"],["Q","118","72","113","110"],["L","111","212"],["L","117","213"],["Q","122","183","135","170"],["Q","122","168","115","101"],["Q","115","69","157","66"],["L","241","62"],["Q","294","69","252","138"],["Q","340","237","242","280"],["Q","167","301","133","259"],["Q","124","290","77","286"],["Q","3","289","4","249"],["Q","3","226","38","210"],["L","37","157"],["Q","12","151","15","124"]]},{"_fs":["N",""],"_ss":["#b64343","15","round","round"],"_gp":[],"_c":[["M","51","126"],["L","77","107"],["L","73","247"],["M","42","249"],["L","101","246"],["M","160","143"],["L","154","103"],["L","234","98"],["L","191","163"],["Q","269","161","252","228"],["Q","201","284","159","227"]]}]};game.lr.mw.scale=0.2;game.lr.mw.load();game.lr.pi=mge.image.create();game.lr.pi.kz={"_s":{"_w":100,"_h":100},"_p":[{"_fs":["C","#030303"],"_ss":["#f50505","0","round","round"],"_gp":[],"_c":[["M","7","38"],["Q","15","15","26","15"],["L","85","15"],["L","85","27"],["L","66","27"],["Q","59","97","83","65"],["Q","53","125","56","27"],["L","37","27"],["Q","33","98","18","87"],["Q","27","60","28","27"],["Q","17","26","7","38"]]},{"_fs":["C","#ffffff"],"_ss":["#000000","2","round","round"],"_gp":[],"_c":[["C","48","21","12"],["M","41","11"],["Q","41","6","45","3"],["M","48","8"],["Q","48","5","51","3"],["M","53","9"],["Q","53","6","57","5"]]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","48","24","3"]]}]};game.lr.pi.scale=0.8;game.lr.pi.load();game.lr.mx=mge.image.create();game.lr.mx.kz={"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","75","25"],["Q","80","16","102","11"],["M","85","32"],["Q","86","25","108","21"],["M","92","38"],["Q","100","33","114","34"]]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","45","80","15"]]}]};game.lr.mx.scale=0.2;game.lr.mx.load();game.lr.my=mge.image.create();game.lr.my.kz={"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","25","100"],["Q","11","99","5","110"],["M","35","110"],["Q","19","111","12","125"],["M","50","115"],["Q","40","114","35","130"]]}]};game.lr.my.scale=0.2;game.lr.my.load();game.lr.mz=mge.image.create();game.lr.mz.kz={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","30","31","32","68"],["L","14","66"],["M","98","3"],["Q","103","31","96","67"],["L","117","64"]]}]};game.lr.mz.scale=0.2;game.lr.mz.load();game.lr.na=mge.image.create();game.lr.na.kz={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","34","31","32","68"],["L","51","66"],["M","98","3"],["Q","132","31","92","55"],["L","109","65"]]}]};game.lr.na.scale=0.2;game.lr.na.load();game.lr.nb=mge.image.create();game.lr.nb.kz={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","24","31","13","65"],["L","30","69"],["M","98","3"],["Q","103","31","108","67"],["L","119","64"]]}]};game.lr.nb.scale=0.2;game.lr.nb.load();game.lr.nc=mge.image.create();game.lr.nc.kz={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","61","24","19","56"],["L","36","64"],["M","98","3"],["Q","99","31","97","69"],["L","114","69"]]}]};game.lr.nc.scale=0.2;game.lr.nc.load();game.lr.nd=mge.image.create();game.lr.nd.kz={"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","39","24","48","71"],["L","62","66"],["M","97","3"],["Q","93","31","89","59"],["L","103","69"]]}]};game.lr.nd.scale=0.2;game.lr.nd.load();game.lr.ne=mge.image.create();game.lr.ne.kz={"_s":{"_w":200,"_h":100},"_p":[{"_fs":["C","#9bae8f"],"_ss":["#417029","2","round","round"],"_gp":[],"_c":[["R","2","2","196","38"],["R","95","40","9","58"]]},{"_fs":["C","#417029"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","0"]],"_t":["11","23","25","bold","Arial","left","middle","NUMBERLAND"]}]};game.lr.ne.load();game.lr.ny=mge.image.create();game.lr.ny.kz={"_s":{"_w":1300,"_h":1500},"_p":[{"_fs":["C","#c8a2e2"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","1125"],["L","250","1050"],["L","1000","1200"],["L","1300","1125"],["L","1300","1500"],["L","0","1500"]]}]};game.lr.ny.load();game.lt.ny=mge.bx.br.createPattern(game.lr.ny.io,'repeat');game.lr.nz=mge.image.create();game.lr.nz.kz={"_s":{"_w":1300,"_h":1500},"_p":[{"_fs":["C","#a26ac8"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","1200"],["L","131","1250"],["L","1000","1100"],["L","1300","1200"],["L","1300","1500"],["L","0","1500"]]}]};game.lr.nz.load();game.lt.nz=mge.bx.br.createPattern(game.lr.nz.io,'repeat');let nn={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","15","15","5"]]}]};let nr={"_s":{"_w":30,"_h":30},"_p":[{"_fs":["C","#582970"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","30"]]},{"_fs":["C","#5d2c77"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["R","0","0","30","3"],["R","0","15","30","3"],["R","0","0","3","15"],["R","15","15","3","15"]]}]};game.lt.nv=game.lr.ajColoredPattern(nn,'#582970','#c8a2e2');game.lt.nw=game.lr.ajColoredPattern(nr,'#c8a2e2','#582970')};game.lw.od={play:function(ap,ad,ae,as){let an={hgADSR:{a:0.01,d:0.4,s:0,r:0,ah:0,ai:as},oscType:'sine',kr:{a:0.01,d:0.4,s:0,r:0,ah:65,ai:130}};if(!isNaN(ap)){mge.hi.hh(an,100,ad,ae,as)}}};game.lw.oe={play:function(ap,ad,ae,as){let anNoise={hgADSR:{a:0.01,d:0.3,s:0,r:0,ah:0,ai:as},oscType:'noise',filterType:'highpass',kt:{a:0.01,d:0.3,s:0,r:0,ah:300,ai:2000}};let anSine={hgADSR:{a:0.01,d:0.1,s:0,r:0,ah:0,ai:as*8},oscType:'sine',kr:{a:0.01,d:0.4,s:0,r:0,ah:130,ai:260}};if(!isNaN(ap)){mge.hi.hh(anNoise,65,ad,ae,as);mge.hi.hh(anSine,65,ad,ae,as)}}};game.lw.of={play:function(ap,ad,ae,as){let an={hgADSR:{a:0.015,d:0.3,s:0.8,r:0.2,ah:0,ai:as},oscType:'sawtooth',filterType:'lowpass',kt:{a:0.15,d:0.5,s:0.9,r:0.2,ah:ap/2,ai:ap*5}};let _detune1=Object.create(an);let _detune2=Object.create(an);let _detune3=Object.create(an);_detune1.ks={a:0.5,d:0.5,s:1,r:0,ah:-3,ai:3};_detune2.ks={a:0.7,d:0.7,s:1,r:0,ah:5,ai:-5};_detune2.ks={a:0.8,d:0.6,s:1,r:0,ah:-5,ai:5};mge.hi.hh(an,ap,ad,ae,as);mge.hi.hh(_detune1,ap,ad,ae,as);mge.hi.hh(_detune2,ap,ad,ae,as);mge.hi.hh(_detune3,ap,ad,ae,as)}};game.lw.og={play:function(ap,ad,ae,as){let an={hgADSR:{a:0.015,d:0.3,s:0.8,r:0.2,ah:0,ai:as},oscType:'sine',filterType:'lowpass',kt:{a:0.15,d:0.5,s:0.9,r:0.2,ah:ap/2,ai:ap*5}};let _detune1=Object.create(an);let _detune2=Object.create(an);let _detune3=Object.create(an);_detune1.ks={a:0.5,d:0.5,s:1,r:0,ah:-3,ai:3};_detune2.ks={a:0.7,d:0.7,s:1,r:0,ah:5,ai:-5};_detune2.ks={a:0.8,d:0.6,s:1,r:0,ah:-5,ai:5};mge.hi.hh(an,ap,ad,ae,as);mge.hi.hh(_detune1,ap,ad,ae,as);mge.hi.hh(_detune2,ap,ad,ae,as);mge.hi.hh(_detune3,ap,ad,ae,as)}};game.lx.moSong.kz={"_str":[0,1],"_p":[{"_b":[["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",1,"A2",1],["C2",2,"C2",1,"C2",1],["F2",2,"F2",2],["Bb2",2,"Bb2",1,"Bb2",1],["E2",2,"E2",2],["A2",2,"A2",2],["G2",2,"G2",1,"G2",1]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,4],[1,2,5,6,7,8,0,9]]},{"_b":[["r",4],["r",3,"A2",1],["r",1,"D2",1,"r",1,"D2",1],["r",1,"G2",1,"r",1,"G2",1],["r",1,"C2",1,"r",1,"C2",1],["r",1,"A2",1,"r",0.5,"A2",0.5,"A2",0.5,"A2",0.25,"A2",0.25],["r",1,"C2",1,"r",0.5,"C2",0.5,"C2",0.5,"C2",0.25,"C2",0.25],["r",1,"F2",1,"r",1,"F2",1],["r",1,"Bb2",1,"r",0.5,"Bb2",0.5,"Bb2",0.5,"Bb2",0.25,"Bb2",0.25],["r",1,"E2",1,"r",1,"E2",1],["r",1,"A2",1,"r",1,"A2",1],["r",1,"G2",1,"r",0.5,"G2",0.5,"G2",0.5,"G2",0.25,"G2",0.25]],"_s":[[0,0,0,1,2,3,4,5,2,3,4,5,2,3,4,6],[3,4,7,8,9,10,2,11]]},{"_b":[["D2",4],["G2",4],["C2",4],["A2",4],["G2",0.5,"G2",0.5,"Bb2",3],["C2",0.5,"C2",0.5,"E2",3],["F2",0.5,"F2",0.5,"A2",3],["Bb2",0.5,"Bb2",0.5,"D2",3],["E2",0.5,"E2",0.5,"G2",3],["A2",0.5,"A2",0.5,"Db2",3],["D2",0.5,"D2",0.5,"F2",3],["G2",0.5,"G2",0.5,"B2",3]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,2],[4,5,6,7,8,9,10,11]]},{"_b":[["F3",4],["B3",4],["E3",4],["C3",4],["Bb3",4],["A3",4],["D3",4],["G3",4],["Db3",4]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,2],[4,2,5,6,7,8,0,1]]},{"_b":[["A3",4],["D3",4],["G3",4],["E3",4],["C3",4],["F3",4],["bB3",4]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,2],[1,2,4,5,6,3,0,1]]},{"_b":[["C3",4],["F3",4],["B3",4],["G3",4],["Bb3",4],["E3",4],["A3",4],["D3",4]],"_s":[[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,4],[1,4,5,6,7,3,0,1]]},{"_b":[["r",4],["Bb3",0.5,"r",1,"F3",2],["E3",0.5,"r",1,"Bb3",2],["A3",0.5,"r",1,"E3",2],["D3",0.5,"r",1,"A3",2],["G3",0.5,"r",1,"D3",2],["Db3",0.5,"r",1,"G3",2],["F3",0.5,"r",1,"C3",2],["B3",0.5,"r",1,"F3",2]],"_s":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,3,4,5,6,7,8]]}]};game.lx.moSong.playSong=function(){mge.hk.stop();mge.hk.reset();let orchestra=[];orchestra.push(game.lw.od);orchestra.push(game.lw.oe);orchestra.push(game.lw.electricPiano);orchestra.push(game.lw.electricPiano);orchestra.push(game.lw.electricPiano);orchestra.push(game.lw.electricPiano);orchestra.push(game.lw.of);let mix=[6,0.95,0.85,0.8,0.8,0.8,0.7];let bpm=120;game.lx.moSong.play(bpm,orchestra,mix)};game.lz.oh=function(oi){game.lv.mi=[];game.lu.rm.ib();for(let _pltf of oi.oj){game.lu.rm.init(_pltf)};game.lu.qq.ib();for(let _num of oi.ok){game.lu.qq.init(_num)};game.lu.qa.ib();for(let _bkg of oi.ol){game.lu.qa.init(_bkg,oi.oo)};game.lu.sg.X=oi.gser.X;game.lu.sg.Y=oi.gser.Y;game.lv.mg=oi.oo.X;game.lv.mh=oi.oo.Y;game.lv.mj=oi.on._plt;game.lv.ml= oi.on._num};game.lz.createLevels=function(){game.lz.push({ol:[{bp:'B',bn:5000,bo:1500,X:3000,Y:-600,os:0.5,ot:game.lt.ny},{bp:'C',bn:7000,bo:1500,X:3000,Y:-510,os:0.75,ot:game.lt.nz},{bp:'D',bn:200,bo:100,X:2400,Y:-48,os:1,nj:game.lr.ne},{bp:'E',bn:1000,bo:200,X:330,Y:-320,os:1,ot:'#a26ac8'}],oj:[{bp:'1',bn:3900,bo:300,X:0,Y:0,ot:'#582970'},{bp:'1bis',bn:600,bo:30,X:1830,Y:0,ou:{ov:'pq:HI 13,WELCOME TO NUMBERLAND!:640:550'}},{bp:'2',bn:570,bo:2700,X:3300,Y:-2700,ot:'#582970'},{bp:'3',bn:1800,bo:90,X:0,Y:-90,ot:'#582970',py:[0,10]},{bp:'4',bn:1440,bo:180,X:0,Y:-270,ot:'#582970',py:[0,10]},{bp:'4bis',bn:360,bo:30,X:400,Y:-270},{bp:'5',bn:180,bo:30,X:1900,Y:-200,ot:game.lt.nv,py:10},{bp:'6',bn:180,bo:30,X:1620,Y:-310,ot:game.lt.nv,py:10},{bp:'7',bn:210,bo:30,X:1310,Y:-420,ot:game.lt.nv,py:10},{bp:'7bis',bn:150,bo:25,X:1310,Y:-420,ou:{ov:'NUM_RUN:56'}},{bp:'7ter',bn:150,bo:25,X:1310,Y:-420,ou:{ov:'pq:IT SEEMS NUMBERS ARE AFRAID WHEN THEY SEE YOU:640:150'}},{bp:'8',bn:30,bo:160,X:820,Y:-270,ot:'#582970',ow:{X:820,Y:-400,ox:0,oy:-1000}},{bp:'9',bn:1000,bo:30,X:-145,Y:-430,ot:game.lt.nv,pp:'#582970',py:[0,10,10,0]},{bp:'10',bn:180,bo:30,X:1000,Y:-490,ot:game.lt.nv,py:10},{bp:'11',bn:990,bo:600,X:-510,Y:-1000,ot:game.lt.nw,pp:'#582970'},{bp:'12',bn:150,bo:30,X:550,Y:-640,ot:game.lt.nv,py:10},{bp:'12bis',bn:90,bo:10,X:582,Y:-610,ot:'#d10c0c',ou:{ov:'ps:8'},py:[0,0,10,10]}],gser:{X:3000,Y:-100},ok:[{bp:'56',X:1400,Y:-306,pa:1300,pb:1420,ox:50,qv:800,qw:-400,ov:'pt:8',qy:500,qz:750,ra:50,pn:'#582970',po:'#582970'}],on:{_plt:'4bis',_num:'pu'},oo:{X:3000,Y:-100}});game.lz.push({ol:[],oj:[{bp:'11',bn:2700,bo:270,X:0,Y:0,ot:game.lt.level1BlockGreat},{bp:'5',bn:180,bo:30,X:1900,Y:-200,ot:game.lt.level1BlockDiv,py:10},{bp:'10',bn:40,bo:40,X:1350,Y:-460,ot:'#417029',oz:{pa:900,pb:1400,pc:1300,pd:-290,pe:'left'}}],gser:{X:2200,Y:-100},ok:[{bp:'56',X:1400,Y:-306,pa:1200,pb:1420,ox:100,pn:'#390052',po:'#390052'}],on:{_plt:'5',_num:'pu'},oo:{X:2000,Y:-100}})};game.lq.mn.start=function(){game.lr.init();game.lds.init();game.lu.mu.init();game.lu.mv.init();game.lu.eye.init();game.lu.legs.init();game.lu.rw.init();game.lu.sg.init();game.lz.createLevels();game.lp='mq'};game.lq.mn.ms=function(){game.lu.mv.ms()};game.lq.mn.draw=function(){game.lu.mu.draw();game.lu.mv.draw()};game.lq.mo.start=function(){game.lu.eye.ib();game.lu.legs.ib();game.lu.particle.ib();game.lu.sg.init();game.lz.oh(game.lz[game.lv.mf]);game.lu.rw.init();game.lp='kx'};game.lq.mo.ms=function(){game.lu.sg.ms();if(game.lv.mg<game.lu.sg.X-game.lv.ma){game.lv.mg=game.lu.sg.X-game.lv.ma};if(game.lv.mg>game.lu.sg.X+game.lv.ma){game.lv.mg=game.lu.sg.X+game.lv.ma};if(game.lv.mh<game.lu.sg.Y-game.lv.mb){game.lv.mh=game.lu.sg.Y-game.lv.mb};if(game.lv.mh>game.lu.sg.Y+game.lv.mb){game.lv.mh=game.lu.sg.Y+game.lv.mb};game.lu.qq.id('ms');game.lu.qa.id('ms');game.lu.particle.id('ms');game.lu.rw.ms();for(let ov of game.lv.mi){if(ov.split(':')[0]=='pq'){game.lu.rw.rx=ov.split(':')[1];game.lu.rw.x=ov.split(':')[2];game.lu.rw.y=ov.split(':')[3];game.lv.mi=game.lv.mi.filter(e=>e !==ov)}};if(game.ly.mt(game.lv.mk,game.lv.mm)){game.lp='mr';if(game.lv.mf<game.lz.length-1){game.lv.mf+=1;}else{game.lv.mf=0};mge.game.hm(game.lq.mp)}};game.lq.mo.draw=function(){game.lu.qa.id('draw');game.lu.rm.id('draw');game.lu.qq.id('draw');game.lu.sg.draw();game.lu.eye.id('draw');game.lu.legs.id('draw');game.lu.particle.id('draw');game.lu.rw.draw()};game.lq.mp.start=function(){this.ciScene=Date.now();game.lu.particle.ib();game.lu.particle.sa({sc:100,_x:mge.game.width/2,_y:200,_vX:20,sd:10,ot:['#582970','#a26ac8','white']})};game.lq.mp.ms=function(){game.lu.particle.id('ms');if(Date.now()-this.ciScene>1000){game.lu.mv.ms()}};game.lq.mp.draw=function(){game.lu.rw.rx='LEVEL COMPLETED';game.lu.rw.x=mge.game.width/2;game.lu.rw.y=100;game.lu.rw.draw();if(Date.now()-this.ciScene>1000){game.lu.mv.draw()};game.lu.particle.id('draw')};game.lu.mu.init=function(){this.width=game.lr.mu.width;this.height=game.lr.mu.height;this.x=640;this.y=650};game.lu.mu.ht=function(ctx){game.lr.mu.draw(ctx)};game.lu.mv.init=function(){this.width=mge.game.width;this.height=mge.game.height;this.x=mge.game.width/2;this.y=mge.game.height/2;this.rx='PLAY'};game.lu.mv.ms=function(){if(this.hr||mge.hq.hp('ArrowUp')||mge.hq.hp('z')||mge.hq.hp('Z')||mge.hq.hp('w')||mge.hq.hp('W')){if(game.lp=='mq'){game.lx.moSong.playSong()};mge.game.hm(game.lq.mo)}};game.lu.mv.ht=function(ctx){ctx.fillStyle='#582970';ctx.textAlign='center';if(game.lp=='mq'){ctx.font='100px serif';ctx.fillText('UNLOVED   ',mge.game.width/2,150);ctx.font='24px serif';ctx.fillText('A game created for JS13K 2024',mge.game.width/2,200);game.lu.sg.x= 900;game.lu.sg.y=113;game.lu.sg.draw();game.lu.eye.id('draw');game.lu.legs.id('draw')};ctx.fillRect(465,300,350,70);ctx.font='40px serif';ctx.fillStyle='#ffffff';if(game.lp=='mq'){this.rx='PLAY'}else{this.rx='CLICK OR JUMP'};ctx.fillText(this.rx,this.width/2,350)};game.lu.rm.init=function(rn){let c=game.lu.rm.ia();c.width=rn.bn;c.height=rn.bo;c.X=rn.X+rn.bn/2;c.Y=rn.Y+rn.bo/2;c._ta=0;c.oy=0;c.eg=false;c.bp=rn.bp||'';c.nj=rn.nj||'';c.ot=rn.ot||'';c.pp=rn.pp||'';c.py=rn.py||0;c.oz=rn.oz||'';c.px=rn.px||0;c.ou=rn.ou||'';c.ow=rn.ow||'';c.rq=false;return c};game.lu.rm.ht=function(ctx){if(game.ly.mt({xMin:this.x-this.width/2,xMax:this.x+this.width*2,yMin:this.y-this.height/2,yMax:this.y+this.height/2},{xMin:0,xMax:mge.game.width,yMin:0,yMax:mge.game.height})){ctx.beginPath();ctx.roundRect(0,0,this.width,this.height,this.py);if(this.ot!=''){ctx.fillStyle=this.ot;ctx.fill()};if(this.pp!=''){ctx.strokeStyle=this.pp;ctx.lineWidth=2;ctx.stroke()};if(this.nj!=''){this.nj.draw(ctx)}}};game.lu.rm.rt=function(){let _p=game.lu.sg;let _rg=1/mge.game.fps;this.eg=false;let fnBox={xMin:this.X-this.width/2,xMax:this.X+this.width/2,yMin:this.Y-this.height/2,yMax:this.Y+this.height/2};if(game.ly.mt(fnBox,_p.sq)){_p.sl=true;this.eg=true;if(this.oz!='' && _p.tb>0){this.X=_p.X+_p.width/2+this.width/2+_p.sp;_p.sl=false;_p.tb=0;if(this.X>=this.oz.pb){this.X=this.oz.pb;_p.sl=true}}};if(game.ly.mt(fnBox,_p.sr)){_p.sm=true;this.eg=true;if(this.oz!='' && _p.tb<0){this.X=_p.X-_p.width/2-this.width/2-_p.sp;_p.sm=false;_p.tb=0;if(this.X<=this.oz.pa){this.X=this.oz.pa;_p.sm=true}}};if(game.ly.mt(fnBox,_p.ss)){_p.sn=true;this.eg=true};if(game.ly.mt(fnBox,_p.st)){_p.so=true;this.eg=true;if(this.px !=0){game.lu.sg.tc=-this.px;game.lu.sg.Y=this.Y-this.height/2-game.lu.sg.height/2;_p.so=false}};if(this.oz!=''){if(this.Y<this.oz.pd){if((this.oz.pe=='right' && this.X>=this.oz.pc)||(this.oz.pe=='left' && this.X<=this.oz.pc)){this._ta=game.lv.me;this.oy+=this._ta*_rg;this.Y=Math.min(this.Y+this.oy*_rg,this.oz.pd)}}};if(this.ow!='' && this.rq){if(this.ow.oy<0){this.Y=Math.max(this.Y+this.ow.oy*_rg,this.ow.Y+this.bo/2);}else{this.Y=Math.min(this.Y+this.ow.oy*_rg,this.ow.Y+this.bo/2)};if(this.ow.ox<0){this.X=Math.max(this.X+this.ow.ox*_rg,this.ow.X+this.bn/2);}else{this.X=Math.min(this.X+this.ow.ox*_rg,this.ow.X+this.bn/2)}};this.x=this.X-game.lv.mg+mge.game.width/2;this.y=this.Y-game.lv.mh+mge.game.height/2;if(this.bp==game.lv.mj){game.lv.mk={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}};if(this.ou!=''&&this.eg){if(!game.lv.mi.includes(this.ou.ov)){game.lv.mi.push(this.ou.ov)};this.ot=this.ou.ot||'';this.nj=this.ou.nj||'';this.ou=''};for(let ov of game.lv.mi){if(ov=='ps:'+this.bp){this.ic();game.lu.particle.sa({sc:20,_x:this.x,_y:this.y,_vX:5,sd:15,ot:[this.ot]});game.lv.mi=game.lv.mi.filter(e=>e !==ov)};if(ov=='pt:'+this.bp){this.rq=true;game.lv.mi=game.lv.mi.filter(e=>e !==ov)}}};game.lu.eye.init=function(){this.width=game.lr.mx.width;this.height=game.lr.mx.height;this.qm='normal';this.qn='';mge.ld.le(this);this.ld.lh=100};game.lu.eye.ht=function(ctx){if(this.qm !=this.qn){if(this.qm=='normal'){this.ld.frames=game.lds.eye};this.ld.li()};this.qn=this.qm;this.ld.draw(ctx)};game.lu.legs.init=function(){this.width=game.lr.mz.width;this.height=game.lr.mz.height;this.qm='idle';this.qn='';mge.ld.le(this);this.ld.lh=100};game.lu.legs.ht=function(ctx){if(this.qm !=this.qn){if(this.qm=='idle'){this.ld.frames=game.lds.mz};if(this.qm=='walk'){this.ld.frames=game.lds.ob};this.ld.li()};this.qn=this.qm;this.ld.draw(ctx)};game.lu.qq.init=function(qr){let c=game.lu.qq.ia();c.width=game.lv.mc;c.height=game.lv.md;c.bp=qr.bp||'';c.X=qr.X;c.Y=qr.Y;c.pa=qr.pa||0;c.pb=qr.pb||0;c.ox=qr.ox||200;c.qv=qr.qv||200;c.qw=qr.qw||200;c.ov=qr.ov||'';c.qy=qr.qy||0;c.qz=qr.qz||0;c.ra=qr.ra||0;c.rb='rc';c.pn=qr.pn||'black';c.re=game.lu.eye.ia();mge.ld.lg(c.re);c.rf=game.lu.legs.ia();mge.ld.lg(c.rf);return c};game.lu.qq.ms=function(){let rg=Math.min(1/mge.game.fps,0.04);if(this.rb=='rc'){if((this.X>this.pb && this.ox>0)||(this.X<this.pa && this.ox<0)){this.ox=this.ox*-1};}else{this.ox=this.qw};this.X+=Math.round(this.ox*rg);if(this.rb=='RUN' &&((this.qw<0 && this.X<this.qv)||(this.qw>0 && this.X>this.qv))){this.rb='rc';this.pa=this.qy;this.pb=this.qz;this.ox=this.ra;game.lv.mi.push(this.ov)};this.x=this.X-game.lv.mg+mge.game.width/2;this.y=this.Y-game.lv.mh+mge.game.height/2;if(this.bp==game.lv.ml){game.lv.mm={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}};for(let ov of game.lv.mi){if(ov=='NUM_RUN:'+this.bp){this.rb='RUN';game.lv.mi=game.lv.mi.filter(e=>e !==ov)}}};game.lu.qq.ht=function(ctx){ctx.font='bold 50px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=this.pn;ctx.fillText(this.bp,this.bn/2,this.bo/2+7);this.re.qm='normal';this.re.x=this.x-5;this.re.y=this.y-25;this.re.hu=1;if(this.ox>0){this.re.hu=-1};this.rf.x=this.x;this.rf.y=this.y+29;this.rf.qm='idle';this.rf.hu=1;if(this.ox<=-1){this.rf.qm='walk';this.rf.hu=-1};if(this.ox>=1){this.rf.qm='walk'}};game.lu.rw.init=function(){this.width=800;this.height=50;this.x=mge.game.width/2;this.y=this.height/2+5;this.rx='';this.ry='';this.rz=Date.now()};game.lu.rw.ms=function(ctx){if(this.rx !=this.ry){this.rz=Date.now();this.ry=this.rx};if(Date.now()-this.rz>4000){this.rx=''}};game.lu.rw.ht=function(ctx){if(this.rx !=''){ctx.fillStyle='#e9ddf1';ctx.strokeStyle='black';ctx.lineWidth=2;ctx.fillRect(0,0,this.width,this.height);ctx.strokeRect(0,0,this.width,this.height);ctx.font='24px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='black';ctx.fillText(this.rx,this.width/2,this.height/2);game.lr.pi.draw(ctx)}};game.lu.qa.init=function(qb,qc){let c=game.lu.qa.ia();c.width=qb.bn||mge.game.width;c.height=qb.bo||mge.game.height;c.X=qb.X+mge.game.width/2;c.Y=qb.Y+mge.game.height/2;c._mginit=qc.X;c._mhinit=qc.Y;c.os=qb.os;c.ot=qb.ot||'';c.nj=qb.nj||'';return c};game.lu.qa.ms=function(){let qi=this._mginit-game.lv.mg;let qj=this._mginit-qi*this.os;let qk=this._mhinit-game.lv.mh;let ql=this._mhinit-qk*this.os;this.x=this.X-qj;this.y=this.Y-ql};game.lu.qa.ht=function(ctx){if(this.ot!=''){ctx.fillStyle=this.ot;ctx.beginPath();ctx.fillRect(0,0,this.width,this.height);ctx.fill()};if(this.nj!=''){this.nj.draw(ctx)}};game.lu.particle.sa=function(sb){for(let i=0;i<sb.sc;i++){let il={x:game.ly.getRandomInteger(sb._x*0.9,sb._x*1.1),y:game.ly.getRandomInteger(sb._y*0.9,sb._y*1.1),size:game.ly.getRandomInteger(sb.sd*0.9,sb.sd*1.1),Vx:game.ly.getRandomInteger(sb._vX*-1,sb._vX),Vy:game.ly.getRandomInteger(-10,0),fillStyle:game.ly.getRandomItem(sb.ot)};game.lu.particle.init(il)}};game.lu.particle.init=function(il){let c=game.lu.particle.ia();c.x=il.x;c.y=il.y;c.w=il.size;c.h=il.size;c.Vx=il.Vx;c.Vy=il.Vy;c.fillStyle=il.fillStyle};game.lu.particle.ms=function(){this.Vy+=1;this.x+=this.Vx;this.y+=this.Vy};game.lu.particle.ht=function(ctx){ctx.fillStyle=this.fillStyle;ctx.fillRect(0,0,this.w,this.h)};game.lu.sg.init=function(){this.x=mge.game.width/2;this.y=mge.game.height/2;this.width=game.lv.mc;this.height=game.lv.md;this.X=200;this.Y=0;this.sh=false;this.si=false;this.sj=false;this.sk=false;this.sl=false;this.sm=false;this.sn=false;this.so=false;this.sp=10;this.sq={};this.sr={};this.ss={};this.st={};this.su=10000;this.suru=8000;this.sw=70000;this.sx=3000;this.sy=0.3;this.sz=0;this.ta=0;this.tb=0;this.tc=0;this.re=game.lu.eye.ia();mge.ld.lg(this.re);this.rf=game.lu.legs.ia();mge.ld.lg(this.rf)};game.lu.sg.ms=function(){let rg=Math.min(1/mge.game.fps,0.04);let tf=this.X;let tg=this.Y;let r=mge.hq.hp('ArrowRight')||mge.hq.hp('d')||mge.hq.hp('D');let l=mge.hq.hp('ArrowLeft')||mge.hq.hp('a')||mge.hq.hp('A')||mge.hq.hp('q')||mge.hq.hp('Q');let u=mge.hq.hp('ArrowUp')||mge.hq.hp('z')||mge.hq.hp('Z')||mge.hq.hp('w')||mge.hq.hp('W');if(r && !l){this.si=true}else{this.si=false};if(l && !r){this.sh=true}else{this.sh=false};if(u){this.sj=true}else{this.sj=false};this.sz=0;if(this.sh && this.so){this.sz=-this.su};if(this.si && this.so){this.sz=this.su};if(this.sh && !this.so){this.sz=-this.suru};if(this.si && !this.so){this.sz=this.suru};this.ta=0;if(this.sj && this.so){this.ta=-this.sw};this.ta+=game.lv.me;this.tb+=this.sz*rg;this.tb=this.tb*(1-this.sy);if(this.tb>0 && this.tb>this.sx){this.tb=this.sx};if(this.tb<0 && this.tb<-this.sx){this.tb=-this.sx};this.tc+=this.ta*rg;this.X+=Math.round(this.tb*rg);this.Y+=Math.round(this.tc*rg);this.sq={xMin:this.X+this.width/2,xMax:this.X+this.width/2+this.sp,yMin:this.Y-this.height/2+this.sp,yMax:this.Y+this.height/2-this.sp};this.sr={xMin:this.X-this.width/2-this.sp,xMax:this.X-this.width/2,yMin:this.Y-this.height/2+this.sp,yMax:this.Y+this.height/2-this.sp};this.ss=  {xMin:this.X-this.width/2+this.sp,xMax:this.X+this.width/2-this.sp,yMin:this.Y-this.height/2,yMax:this.Y-this.height/2+this.sp};this.st={xMin:this.X-this.width/2+this.sp,xMax:this.X+this.width/2-this.sp,yMin:this.Y+this.height/2-this.sp,yMax:this.Y+this.height/2};this.sl=false;this.sm=false;this.sn=false;this.so=false;game.lu.rm.id('rt');if(this.sl & !(this.sh)){this.X=tf;this.tb=0};if(this.sm & !(this.si)){this.X=tf;this.tb=0};if(this.so){this.Y=tg;this.tc=0};if(this.sn){this.Y=tg+5;this.tc=0};this.x=this.X-game.lv.mg+mge.game.width/2;this.y=this.Y-game.lv.mh+mge.game.height/2;if(game.lv.ml=='pu'){game.lv.mm={xMin:this.x-this.width/2-10,xMax:this.x+this.width/2+10,yMin:this.y-this.height/2-10,yMax:this.y+this.height/2+10}};if(game.lv.mj=='pu'){game.lv.mk={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}}};game.lu.sg.ht=function(ctx){game.lr.mw.draw(ctx);this.re.qm='normal';this.re.x=this.x-5;this.re.y=this.y-25;this.re.hu=1;if(this.tb>0){this.re.hu=-1};this.rf.qm='walk';this.rf.x=this.x;this.rf.y=this.y+29;this.rf.hu=1;if(!(this.si||this.sh)){this.rf.qm='idle'};if(this.sh){this.rf.hu=-1}}