(()=>{var tg=Object.defineProperty;var Mi=(n,t)=>{for(var e in t)tg(n,e,{get:t[e],enumerable:!0})};var eg=0,Bd=1,ng=2;var Qp=1,gf=2,Xi=3,_s=0,xn=1,An=2,wi=0,Zi=1,Ai=2,kd=3,Hd=4,ig=5,nr=100,sg=101,rg=102,og=103,ag=104,lg=200,cg=201,hg=202,ug=203,Xh=204,qh=205,fg=206,dg=207,pg=208,mg=209,gg=210,xg=211,_g=212,vg=213,yg=214,Yh=0,Zh=1,$h=2,Qr=3,Jh=4,Kh=5,Qh=6,jh=7,jp=0,Mg=1,bg=2,xs=0,xf=1,_f=2,vf=3,_a=4,Sg=5,yf=6,Mf=7;var tm=300,jr=301,to=302,tu=303,eu=304,uc=306,ea=1e3,sr=1001,nu=1002,_n=1003,Eg=1004;var Ka=1005;var Si=1006,uh=1007;var rr=1008;var Ji=1009,em=1010,nm=1011,na=1012,bf=1013,or=1014,Ei=1015,Wn=1016,Sf=1017,Ef=1018,eo=1020,im=35902,sm=1021,rm=1022,ci=1023,om=1024,am=1025,$r=1026,no=1027,va=1028,wf=1029,lm=1030,Tf=1031;var Af=1033,Rl=33776,Cl=33777,Il=33778,Pl=33779,iu=35840,su=35841,ru=35842,ou=35843,au=36196,lu=37492,cu=37496,hu=37808,uu=37809,fu=37810,du=37811,pu=37812,mu=37813,gu=37814,xu=37815,_u=37816,vu=37817,yu=37818,Mu=37819,bu=37820,Su=37821,Ll=36492,Eu=36494,wu=36495,cm=36283,Tu=36284,Au=36285,Ru=36286;var Dl=2300,Cu=2301,fh=2302,Gd=2400,Vd=2401,Wd=2402;var wg=3200,Tg=3201;var hm=0,Ag=1,ms="",nn="srgb",uo="srgb-linear",fc="linear",Se="srgb";var Rr=7680;var Xd=519,Rg=512,Cg=513,Ig=514,um=515,Pg=516,Lg=517,Dg=518,Ug=519,Iu=35044,di=35048;var qd="300 es",Yi=2e3,Ul=2001,vs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=1234567,$o=Math.PI/180,ia=180/Math.PI;function Ti(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function sn(n,t,e){return Math.max(t,Math.min(e,n))}function Rf(n,t){return(n%t+t)%t}function Ng(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Fg(n,t,e){return n!==t?(e-n)/(t-n):0}function Jo(n,t,e){return(1-e)*n+e*t}function zg(n,t,e,i){return Jo(n,t,1-Math.exp(-e*i))}function Og(n,t=1){return t-Math.abs(Rf(n,t*2)-t)}function Bg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function kg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Hg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Gg(n,t){return n+Math.random()*(t-n)}function Vg(n){return n*(.5-Math.random())}function Wg(n){n!==void 0&&(Yd=n);let t=Yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xg(n){return n*$o}function qg(n){return n*ia}function Yg(n){return(n&n-1)===0&&n!==0}function Zg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $g(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jg(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fm={DEG2RAD:$o,RAD2DEG:ia,generateUUID:Ti,clamp:sn,euclideanModulo:Rf,mapLinear:Ng,inverseLerp:Fg,lerp:Jo,damp:zg,pingpong:Og,smoothstep:Bg,smootherstep:kg,randInt:Hg,randFloat:Gg,randFloatSpread:Vg,seededRandom:Wg,degToRad:Xg,radToDeg:qg,isPowerOfTwo:Yg,ceilPowerOfTwo:Zg,floorPowerOfTwo:$g,setQuaternionFromProperEuler:Jg,normalize:Re,denormalize:li},nt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],M=s[1],y=s[4],x=s[7],D=s[2],R=s[5],w=s[8];return r[0]=o*_+a*M+l*D,r[3]=o*m+a*y+l*R,r[6]=o*d+a*x+l*w,r[1]=c*_+h*M+u*D,r[4]=c*m+h*y+u*R,r[7]=c*d+h*x+u*w,r[2]=f*_+p*M+g*D,r[5]=f*m+p*y+g*R,r[8]=f*d+p*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dh.makeScale(t,e)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,e){return this.premultiply(dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dh=new ie;function dm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kg(){let n=Nl("canvas");return n.style.display="block",n}var Zd={};function Yo(n){n in Zd||(Zd[n]=!0,console.warn(n))}function Qg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function jg(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tx(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var de={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(n.r=$i(n.r),n.g=$i(n.g),n.b=$i(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(n.r=Jr(n.r),n.g=Jr(n.g),n.b=Jr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ms?fc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $d=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],Kd=[.3127,.329],Qd=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[uo]:{primaries:$d,whitePoint:Kd,transfer:fc,toXYZ:Qd,fromXYZ:jd,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:$d,whitePoint:Kd,transfer:Se,toXYZ:Qd,fromXYZ:jd,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});var Cr,Pu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cr===void 0&&(Cr=Nl("canvas")),Cr.width=t.width,Cr.height=t.height;let i=Cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nl("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($i(e[i]/255)*255):e[i]=$i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ex=0,Fl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ph(s[o].image)):r.push(ph(s[o]))}else r=ph(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nx=0,Rn=class n extends vs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=sr,s=sr,r=Si,o=rr,a=ci,l=Ji,c=n.DEFAULT_ANISOTROPY,h=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ti(),this.name="",this.source=new Fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case sr:t.x=t.x<0?0:1;break;case nu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case sr:t.y=t.y<0?0:1;break;case nu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=tm;Rn.DEFAULT_ANISOTROPY=1;var Ce=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(p+1)/2,D=(d+1)/2,R=(h+f)/4,w=(u+_)/4,I=(g+m)/4;return y>x&&y>D?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=w/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=w/r,s=I/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lu=class extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Lu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},zl=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Du=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let D=Math.sqrt(y),R=Math.atan2(D,d*M);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let x=a*M;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mh=new C,tp=new Cn,Ki=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(t.matrixWorld),this.union(Qa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),ja.subVectors(this.max,zo),Ir.subVectors(t.a,zo),Pr.subVectors(t.b,zo),Lr.subVectors(t.c,zo),cs.subVectors(Pr,Ir),hs.subVectors(Lr,Pr),$s.subVectors(Ir,Lr);let e=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-$s.z,$s.y,cs.z,0,-cs.x,hs.z,0,-hs.x,$s.z,0,-$s.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-$s.y,$s.x,0];return!gh(e,Ir,Pr,Lr,ja)||(e=[1,0,0,0,1,0,0,0,1],!gh(e,Ir,Pr,Lr,ja))?!1:(tl.crossVectors(cs,hs),e=[tl.x,tl.y,tl.z],gh(e,Ir,Pr,Lr,ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ki=[new C,new C,new C,new C,new C,new C,new C,new C],ri=new C,Qa=new Ki,Ir=new C,Pr=new C,Lr=new C,cs=new C,hs=new C,$s=new C,zo=new C,ja=new C,tl=new C,Js=new C;function gh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Js.fromArray(n,r);let a=s.x*Math.abs(Js.x)+s.y*Math.abs(Js.y)+s.z*Math.abs(Js.z),l=t.dot(Js),c=e.dot(Js),h=i.dot(Js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ix=new Ki,Oo=new C,xh=new C,ys=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ix.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);let e=Oo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Oo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(xh)),this.expandByPoint(Oo.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new C,_h=new C,el=new C,us=new C,vh=new C,nl=new C,yh=new C,Ol=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_h.copy(t).add(e).multiplyScalar(.5),el.copy(e).sub(t).normalize(),us.copy(this.origin).sub(_h);let r=t.distanceTo(e)*.5,o=-this.direction.dot(el),a=us.dot(this.direction),l=-us.dot(el),c=us.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_h).addScaledVector(el,f),p}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){vh.subVectors(e,t),nl.subVectors(i,t),yh.crossVectors(vh,nl);let o=this.direction.dot(yh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,t);let l=a*this.direction.dot(nl.crossVectors(us,nl));if(l<0)return null;let c=a*this.direction.dot(vh.cross(us));if(c<0||l+c>o)return null;let h=-a*us.dot(yh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Dr.setFromMatrixColumn(t,0).length(),r=1/Dr.setFromMatrixColumn(t,1).length(),o=1/Dr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sx,t,rx)}lookAt(t,e,i){let s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),fs.crossVectors(i,Hn),fs.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),fs.crossVectors(i,Hn)),fs.normalize(),il.crossVectors(Hn,fs),s[0]=fs.x,s[4]=il.x,s[8]=Hn.x,s[1]=fs.y,s[5]=il.y,s[9]=Hn.y,s[2]=fs.z,s[6]=il.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],M=i[3],y=i[7],x=i[11],D=i[15],R=s[0],w=s[4],I=s[8],S=s[12],v=s[1],L=s[5],B=s[9],O=s[13],H=s[2],q=s[6],X=s[10],it=s[14],Y=s[3],dt=s[7],Mt=s[11],Rt=s[15];return r[0]=o*R+a*v+l*H+c*Y,r[4]=o*w+a*L+l*q+c*dt,r[8]=o*I+a*B+l*X+c*Mt,r[12]=o*S+a*O+l*it+c*Rt,r[1]=h*R+u*v+f*H+p*Y,r[5]=h*w+u*L+f*q+p*dt,r[9]=h*I+u*B+f*X+p*Mt,r[13]=h*S+u*O+f*it+p*Rt,r[2]=g*R+_*v+m*H+d*Y,r[6]=g*w+_*L+m*q+d*dt,r[10]=g*I+_*B+m*X+d*Mt,r[14]=g*S+_*O+m*it+d*Rt,r[3]=M*R+y*v+x*H+D*Y,r[7]=M*w+y*L+x*q+D*dt,r[11]=M*I+y*B+x*X+D*Mt,r[15]=M*S+y*O+x*it+D*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,y=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,x=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,D=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,R=e*M+i*y+s*x+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=M*w,t[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*w,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*w,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*w,t[4]=y*w,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*d-e*u*d)*w,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*w,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*w,t[12]=D*w,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,M=l*c,y=l*h,x=l*u,D=i.x,R=i.y,w=i.z;return s[0]=(1-(_+d))*D,s[1]=(p+x)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(f+d))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+y)*w,s[9]=(m-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Dr.set(s[0],s[1],s[2]).length(),o=Dr.set(s[4],s[5],s[6]).length(),a=Dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);let c=1/r,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Yi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(a===Yi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ul)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Yi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,p=(i+s)*h,g,_;if(a===Yi)g=(o+r)*u,_=-2*u;else if(a===Ul)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Dr=new C,oi=new me,sx=new C(0,0,0),rx=new C(1,1,1),fs=new C,il=new C,Hn=new C,ep=new me,np=new Cn,hi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ep,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return np.setFromEuler(this),this.setFromQuaternion(np,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Bl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ox=0,ip=new C,Ur=new Cn,Gi=new me,sl=new C,Bo=new C,ax=new C,lx=new Cn,sp=new C(1,0,0),rp=new C(0,1,0),op=new C(0,0,1),ap={type:"added"},cx={type:"removed"},Nr={type:"childadded",child:null},Mh={type:"childremoved",child:null},on=class n extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new hi,i=new Cn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ie}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(sp,t)}rotateY(t){return this.rotateOnAxis(rp,t)}rotateZ(t){return this.rotateOnAxis(op,t)}translateOnAxis(t,e){return ip.copy(t).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sp,t)}translateY(t){return this.translateOnAxis(rp,t)}translateZ(t){return this.translateOnAxis(op,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sl.copy(t):sl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Bo,sl,this.up):Gi.lookAt(sl,Bo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ap),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cx),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ap),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,ax),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,lx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};on.DEFAULT_UP=new C(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new C,Vi=new C,bh=new C,Wi=new C,Fr=new C,zr=new C,lp=new C,Sh=new C,Eh=new C,wh=new C,Th=new Ce,Ah=new Ce,Rh=new Ce,gs=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Vi.subVectors(i,e),bh.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Vi),l=ai.dot(bh),c=Vi.dot(Vi),h=Vi.dot(bh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(t,e),Ah.fromBufferAttribute(t,i),Rh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Th,r.x),o.addScaledVector(Ah,r.y),o.addScaledVector(Rh,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Vi.subVectors(t,e),ai.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ai.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Fr.subVectors(s,i),zr.subVectors(r,i),Sh.subVectors(t,i);let l=Fr.dot(Sh),c=zr.dot(Sh);if(l<=0&&c<=0)return e.copy(i);Eh.subVectors(t,s);let h=Fr.dot(Eh),u=zr.dot(Eh);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Fr,o);wh.subVectors(t,r);let p=Fr.dot(wh),g=zr.dot(wh);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(zr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return lp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(lp,a);let d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Fr,o).addScaledVector(zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Ch(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var at=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=de.workingColorSpace){if(t=Rf(t,1),e=sn(e,0,1),i=sn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ch(o,r,t+1/3),this.g=Ch(o,r,t),this.b=Ch(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let i=pm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return de.fromWorkingColorSpace(mn.copy(this),t),Math.round(sn(mn.r*255,0,255))*65536+Math.round(sn(mn.g*255,0,255))*256+Math.round(sn(mn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(mn.copy(this),e);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=nn){de.fromWorkingColorSpace(mn.copy(this),t);let e=mn.r,i=mn.g,s=mn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+e,ds.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ds),t.getHSL(rl);let i=Jo(ds.h,rl.h,e),s=Jo(ds.s,rl.s,e),r=Jo(ds.l,rl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new at;at.NAMES=pm;var hx=0,Qi=class extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ti(),this.name="",this.blending=Zi,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xh&&(i.blendSrc=this.blendSrc),this.blendDst!==qh&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$n=class extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new C,ol=new nt,_e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ol.fromBufferAttribute(this,e),ol.applyMatrix3(t),this.setXY(e,ol.x,ol.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Iu&&(t.usage=this.usage),t}};var kl=class extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hl=class extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ee=class extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}},ux=0,Zn=new me,Ih=new on,Or=new C,Gn=new Ki,ko=new Ki,en=new C,Ue=class n extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dm(t)?Hl:kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return Ih.lookAt(t),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Gn.min,ko.min),Gn.expandByPoint(en),en.addVectors(Gn.max,ko.max),Gn.expandByPoint(en)):(Gn.expandByPoint(ko.min),Gn.expandByPoint(ko.max))}Gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(t,c),en.add(Or)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new C,l[I]=new C;let c=new C,h=new C,u=new C,f=new nt,p=new nt,g=new nt,_=new C,m=new C;function d(I,S,v){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,v),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[I].add(_),a[S].add(_),a[v].add(_),l[I].add(m),l[S].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,S=M.length;I<S;++I){let v=M[I],L=v.start,B=v.count;for(let O=L,H=L+B;O<H;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new C,x=new C,D=new C,R=new C;function w(I){D.fromBufferAttribute(s,I),R.copy(D);let S=a[I];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),x.crossVectors(R,S);let L=x.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,S=M.length;I<S;++I){let v=M[I],L=v.start,B=v.count;for(let O=L,H=L+B;O<H;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new _e(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cp=new me,Ks=new Ol,al=new ys,hp=new C,ll=new C,cl=new C,hl=new C,Ph=new C,ul=new C,up=new C,fl=new C,le=class extends on{constructor(t=new Ue,e=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ul.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ph.fromBufferAttribute(u,t),o?ul.addScaledVector(Ph,h):ul.addScaledVector(Ph.sub(e),h))}e.add(ul)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),Ks.copy(t.ray).recast(t.near),!(al.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(al,hp)===null||Ks.origin.distanceToSquared(hp)>(t.far-t.near)**2))&&(cp.copy(r).invert(),Ks.copy(t.ray).applyMatrix4(cp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ks)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,D=y;x<D;x+=3){let R=a.getX(x),w=a.getX(x+1),I=a.getX(x+2);s=dl(this,d,t,i,c,h,u,R,w,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=dl(this,o,t,i,c,h,u,M,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,D=y;x<D;x+=3){let R=x,w=x+1,I=x+2;s=dl(this,d,t,i,c,h,u,R,w,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let M=m,y=m+1,x=m+2;s=dl(this,o,t,i,c,h,u,M,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fx(n,t,e,i,s,r,o,a){let l;if(t.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===_s,a),l===null)return null;fl.copy(a),fl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(fl);return c<e.near||c>e.far?null:{distance:c,point:fl.clone(),object:n}}function dl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ll),n.getVertexPosition(l,cl),n.getVertexPosition(c,hl);let h=fx(n,t,e,i,ll,cl,hl,up);if(h){let u=new C;gs.getBarycoord(up,ll,cl,hl,u),s&&(h.uv=gs.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=gs.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=gs.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};gs.getNormal(ll,cl,hl,f.normal),h.face=f,h.barycoord=u}return h}var Ne=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(_,m,d,M,y,x,D,R,w,I,S){let v=x/w,L=D/I,B=x/2,O=D/2,H=R/2,q=w+1,X=I+1,it=0,Y=0,dt=new C;for(let Mt=0;Mt<X;Mt++){let Rt=Mt*L-O;for(let Qt=0;Qt<q;Qt++){let ye=Qt*v-B;dt[_]=ye*M,dt[m]=Rt*y,dt[d]=H,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[d]=R>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Qt/w),u.push(1-Mt/I),it+=1}}for(let Mt=0;Mt<I;Mt++)for(let Rt=0;Rt<w;Rt++){let Qt=f+Rt+q*Mt,ye=f+Rt+q*(Mt+1),K=f+(Rt+1)+q*(Mt+1),ct=f+(Rt+1)+q*Mt;l.push(Qt,ye,ct),l.push(ye,K,ct),Y+=6}a.addGroup(p,Y,S),p+=Y,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function io(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=io(n[e]);for(let s in i)t[s]=i[s]}return t}function dx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mm(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Ms={clone:io,merge:En},px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Gl=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ps=new C,fp=new nt,dp=new nt,gn=class extends Gl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,e){return this.getViewBounds(t,fp,dp),e.subVectors(dp,fp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Br=-90,kr=1,Uu=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Br,kr,t,e);s.layers=this.layers,this.add(s);let r=new gn(Br,kr,t,e);r.layers=this.layers,this.add(r);let o=new gn(Br,kr,t,e);o.layers=this.layers,this.add(o);let a=new gn(Br,kr,t,e);a.layers=this.layers,this.add(a);let l=new gn(Br,kr,t,e);l.layers=this.layers,this.add(l);let c=new gn(Br,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vl=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:jr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Nu=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ne(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:wi});r.uniforms.tEquirect.value=e;let o=new le(s,r),a=e.minFilter;return e.minFilter===rr&&(e.minFilter=Si),new Uu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Lh=new C,gx=new C,xx=new ie,qi=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Lh.subVectors(i,e).cross(gx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Lh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||xx.getNormalMatrix(t),s=this.coplanarPoint(Lh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new ys,pl=new C,sa=class{constructor(t=new qi,e=new qi,i=new qi,s=new qi,r=new qi,o=new qi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],M=s[13],y=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,m-p,x-d).normalize(),i[1].setComponents(l+r,f+c,m+p,x+d).normalize(),i[2].setComponents(l+o,f+h,m+g,x+M).normalize(),i[3].setComponents(l-o,f-h,m-g,x-M).normalize(),i[4].setComponents(l-a,f-u,m-_,x-y).normalize(),e===Yi)i[5].setComponents(l+a,f+u,m+_,x+y).normalize();else if(e===Ul)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(pl.x=s.normal.x>0?t.max.x:t.min.x,pl.y=s.normal.y>0?t.max.y:t.min.y,pl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _x(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ui=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let M=d*f-o;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let y=M+c*d,x=M+c*(d+1),D=M+1+c*(d+1),R=M+1+c*d;p.push(y,x,R),p.push(x,D,R)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:vx,alphahash_pars_fragment:yx,alphamap_fragment:Mx,alphamap_pars_fragment:bx,alphatest_fragment:Sx,alphatest_pars_fragment:Ex,aomap_fragment:wx,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:Rx,begin_vertex:Cx,beginnormal_vertex:Ix,bsdfs:Px,iridescence_fragment:Lx,bumpmap_pars_fragment:Dx,clipping_planes_fragment:Ux,clipping_planes_pars_fragment:Nx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:zx,color_fragment:Ox,color_pars_fragment:Bx,color_pars_vertex:kx,color_vertex:Hx,common:Gx,cube_uv_reflection_fragment:Vx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:Xx,displacementmap_vertex:qx,emissivemap_fragment:Yx,emissivemap_pars_fragment:Zx,colorspace_fragment:$x,colorspace_pars_fragment:Jx,envmap_fragment:Kx,envmap_common_pars_fragment:Qx,envmap_pars_fragment:jx,envmap_pars_vertex:t_,envmap_physical_pars_fragment:u_,envmap_vertex:e_,fog_vertex:n_,fog_pars_vertex:i_,fog_fragment:s_,fog_pars_fragment:r_,gradientmap_pars_fragment:o_,lightmap_pars_fragment:a_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:c_,lights_pars_begin:h_,lights_toon_fragment:f_,lights_toon_pars_fragment:d_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:g_,lights_physical_pars_fragment:x_,lights_fragment_begin:__,lights_fragment_maps:v_,lights_fragment_end:y_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:E_,map_fragment:w_,map_pars_fragment:T_,map_particle_fragment:A_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:I_,morphinstance_vertex:P_,morphcolor_vertex:L_,morphnormal_vertex:D_,morphtarget_pars_vertex:U_,morphtarget_vertex:N_,normal_fragment_begin:F_,normal_fragment_maps:z_,normal_pars_fragment:O_,normal_pars_vertex:B_,normal_vertex:k_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:Z_,project_vertex:$_,dithering_fragment:J_,dithering_pars_fragment:K_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:ev,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:sv,skinning_pars_vertex:rv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:hv,tonemapping_pars_fragment:uv,transmission_fragment:fv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:xv,background_vert:_v,background_frag:vv,backgroundCube_vert:yv,backgroundCube_frag:Mv,cube_vert:bv,cube_frag:Sv,depth_vert:Ev,depth_frag:wv,distanceRGBA_vert:Tv,distanceRGBA_frag:Av,equirect_vert:Rv,equirect_frag:Cv,linedashed_vert:Iv,linedashed_frag:Pv,meshbasic_vert:Lv,meshbasic_frag:Dv,meshlambert_vert:Uv,meshlambert_frag:Nv,meshmatcap_vert:Fv,meshmatcap_frag:zv,meshnormal_vert:Ov,meshnormal_frag:Bv,meshphong_vert:kv,meshphong_frag:Hv,meshphysical_vert:Gv,meshphysical_frag:Vv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:Zv,shadow_frag:$v,sprite_vert:Jv,sprite_frag:Kv},pt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},bi={basic:{uniforms:En([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:En([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new at(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:En([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:En([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:En([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new at(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:En([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:En([pt.points,pt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:En([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:En([pt.common,pt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:En([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:En([pt.sprite,pt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:En([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:En([pt.lights,pt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};bi.physical={uniforms:En([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var ml={r:0,b:0,g:0},js=new hi,Qv=new me;function jv(n,t,e,i,s,r,o){let a=new at(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1,x=g(M);x===null?d(a,l):x&&x.isColor&&(d(x,1),y=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===uc)?(h===void 0&&(h=new le(new Ne(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:io(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),js.copy(y.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(js)),h.material.toneMapped=de.getTransfer(x.colorSpace)!==Se,(u!==x||f!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new le(new ui(2,2),new ke({name:"BackgroundMaterial",uniforms:io(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,y){M.getRGB(ml,mm(n)),i.buffers.color.setClear(ml.r,ml.g,ml.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:m}}function ty(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(v,L,B,O,H){let q=!1,X=u(O,B,L);r!==X&&(r=X,c(r.object)),q=p(v,O,B,H),q&&g(v,O,B,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(v,L,B,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,L,B){let O=B.wireframe===!0,H=i[v.id];H===void 0&&(H={},i[v.id]=H);let q=H[L.id];q===void 0&&(q={},H[L.id]=q);let X=q[O];return X===void 0&&(X=f(l()),q[O]=X),X}function f(v){let L=[],B=[],O=[];for(let H=0;H<e;H++)L[H]=0,B[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,L,B,O){let H=r.attributes,q=L.attributes,X=0,it=B.getAttributes();for(let Y in it)if(it[Y].location>=0){let Mt=H[Y],Rt=q[Y];if(Rt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),Mt===void 0||Mt.attribute!==Rt||Rt&&Mt.data!==Rt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(v,L,B,O){let H={},q=L.attributes,X=0,it=B.getAttributes();for(let Y in it)if(it[Y].location>=0){let Mt=q[Y];Mt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor));let Rt={};Rt.attribute=Mt,Mt&&Mt.data&&(Rt.data=Mt.data),H[Y]=Rt,X++}r.attributes=H,r.attributesNum=X,r.index=O}function _(){let v=r.newAttributes;for(let L=0,B=v.length;L<B;L++)v[L]=0}function m(v){d(v,0)}function d(v,L){let B=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;B[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),H[v]!==L&&(n.vertexAttribDivisor(v,L),H[v]=L)}function M(){let v=r.newAttributes,L=r.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==v[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function y(v,L,B,O,H,q,X){X===!0?n.vertexAttribIPointer(v,L,B,H,q):n.vertexAttribPointer(v,L,B,O,H,q)}function x(v,L,B,O){_();let H=O.attributes,q=B.getAttributes(),X=L.defaultAttributeValues;for(let it in q){let Y=q[it];if(Y.location>=0){let dt=H[it];if(dt===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),dt!==void 0){let Mt=dt.normalized,Rt=dt.itemSize,Qt=t.get(dt);if(Qt===void 0)continue;let ye=Qt.buffer,K=Qt.type,ct=Qt.bytesPerElement,Pt=K===n.INT||K===n.UNSIGNED_INT||dt.gpuType===bf;if(dt.isInterleavedBufferAttribute){let ut=dt.data,kt=ut.stride,Jt=dt.offset;if(ut.isInstancedInterleavedBuffer){for(let Yt=0;Yt<Y.locationSize;Yt++)d(Y.location+Yt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Yt=0;Yt<Y.locationSize;Yt++)m(Y.location+Yt);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Yt=0;Yt<Y.locationSize;Yt++)y(Y.location+Yt,Rt/Y.locationSize,K,Mt,kt*ct,(Jt+Rt/Y.locationSize*Yt)*ct,Pt)}else{if(dt.isInstancedBufferAttribute){for(let ut=0;ut<Y.locationSize;ut++)d(Y.location+ut,dt.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ut=0;ut<Y.locationSize;ut++)m(Y.location+ut);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ut=0;ut<Y.locationSize;ut++)y(Y.location+ut,Rt/Y.locationSize,K,Mt,Rt*ct,Rt/Y.locationSize*ut*ct,Pt)}}else if(X!==void 0){let Mt=X[it];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(Y.location,Mt);break;case 3:n.vertexAttrib3fv(Y.location,Mt);break;case 4:n.vertexAttrib4fv(Y.location,Mt);break;default:n.vertexAttrib1fv(Y.location,Mt)}}}}M()}function D(){I();for(let v in i){let L=i[v];for(let B in L){let O=L[B];for(let H in O)h(O[H].object),delete O[H];delete L[B]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;let L=i[v.id];for(let B in L){let O=L[B];for(let H in O)h(O[H].object),delete O[H];delete L[B]}delete i[v.id]}function w(v){for(let L in i){let B=i[L];if(B[v.id]===void 0)continue;let O=B[v.id];for(let H in O)h(O[H].object),delete O[H];delete B[v.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function ey(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ny(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ci&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ji&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ei&&!I)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function iy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new qi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,y=M*4,x=d.clippingState||null;l.value=x,x=h(g,f,y,p);for(let D=0;D!==y;++D)x[D]=e[D];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sy(n){let t=new WeakMap;function e(o,a){return a===tu?o.mapping=jr:a===eu&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===tu||a===eu)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Nu(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var so=class extends Gl{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yr=4,pp=[.125,.215,.35,.446,.526,.582],ir=20,Dh=new so,mp=new at,Uh=null,Nh=0,Fh=0,zh=!1,er=(1+Math.sqrt(5))/2,Hr=1/er,gp=[new C(-er,Hr,0),new C(er,Hr,0),new C(-Hr,0,er),new C(Hr,0,er),new C(0,er,-Hr),new C(0,er,Hr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Nh,Fh),this._renderer.xr.enabled=zh,t.scissorTest=!1,gl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jr||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Wn,format:ci,colorSpace:uo,depthBuffer:!1},s=xp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(r)),this._blurMaterial=oy(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Dh)}_sceneToCubeUV(t,e,i,s){let a=new gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(mp),h.toneMapping=xs,h.autoClear=!1;let p=new $n({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new le(new Ne,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(mp),_=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let y=this._cubeSize;gl(s,M*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===jr||t.mapping===to;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Dh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gp[(s-r-1)%gp.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ir-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ir;m>ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);let d=[],M=0;for(let w=0;w<ir;++w){let I=w/_,S=Math.exp(-I*I/2);d.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let x=this._sizeLods[s],D=3*x*(s>y-Yr?s-y+Yr:0),R=4*(this._cubeSize-x);gl(e,D,R,3*x,2*x),l.setRenderTarget(e),l.render(u,Dh)}};function ry(n){let t=[],e=[],i=[],s=n,r=n-Yr+1+pp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Yr?l=pp[o-n+Yr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,I=R>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(S,_*g*R),y.set(f,m*g*R);let v=[R,R,R,R,R,R];x.set(v,d*g*R)}let D=new Ue;D.setAttribute("position",new _e(M,_)),D.setAttribute("uv",new _e(y,m)),D.setAttribute("faceIndex",new _e(x,d)),t.push(D),s>Yr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xp(n,t,e){let i=new rn(n,t,e);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oy(n,t,e){let i=new Float32Array(ir),s=new C(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function _p(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function vp(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ay(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===tu||l===eu,h=l===jr||l===to;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Wl(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Wl(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ly(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cy(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let M=p.array;_=p.version;for(let y=0,x=M.length;y<x;y+=3){let D=M[y+0],R=M[y+1],w=M[y+2];f.push(D,R,R,w,w,D)}}else if(g!==void 0){let M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let D=y+0,R=y+1,w=y+2;f.push(D,R,R,w,w,D)}}else return;let m=new(dm(f)?Hl:kl)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hy(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function u(f,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,t,e){let i=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let S=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*D*4*u),w=new zl(R,x,D,u);w.type=Ei,w.needsUpdate=!0;let I=y*4;for(let v=0;v<u;v++){let L=m[v],B=d[v],O=M[v],H=x*D*4*v;for(let q=0;q<L.count;q++){let X=q*I;p===!0&&(s.fromBufferAttribute(L,q),R[H+X+0]=s.x,R[H+X+1]=s.y,R[H+X+2]=s.z,R[H+X+3]=0),g===!0&&(s.fromBufferAttribute(B,q),R[H+X+4]=s.x,R[H+X+5]=s.y,R[H+X+6]=s.z,R[H+X+7]=0),_===!0&&(s.fromBufferAttribute(O,q),R[H+X+8]=s.x,R[H+X+9]=s.y,R[H+X+10]=s.z,R[H+X+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new nt(x,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function dy(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Xl=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h=$r){if(h!==$r&&h!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$r&&(i=or),i===void 0&&h===no&&(i=eo),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xm=new Rn,yp=new Xl(1,1),_m=new zl,vm=new Du,ym=new Vl,Mp=[],bp=[],Sp=new Float32Array(16),Ep=new Float32Array(9),wp=new Float32Array(4);function fo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Mp[s];if(r===void 0&&(r=new Float32Array(s),Mp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function dc(n,t){let e=bp[t];e===void 0&&(e=new Int32Array(t),bp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function py(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function xy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function _y(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;wp.set(i),n.uniformMatrix2fv(this.addr,!1,wp),Ke(e,i)}}function vy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;Ep.set(i),n.uniformMatrix3fv(this.addr,!1,Ep),Ke(e,i)}}function yy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;Sp.set(i),n.uniformMatrix4fv(this.addr,!1,Sp),Ke(e,i)}}function My(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function by(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function Sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function Ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function wy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function Ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function Ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function Cy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yp.compareFunction=um,r=yp):r=xm,e.setTexture2D(t||r,s)}function Iy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vm,s)}function Py(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ym,s)}function Ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_m,s)}function Dy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return _y;case 35675:return vy;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Uy(n,t){n.uniform1fv(this.addr,t)}function Ny(n,t){let e=fo(t,this.size,2);n.uniform2fv(this.addr,e)}function Fy(n,t){let e=fo(t,this.size,3);n.uniform3fv(this.addr,e)}function zy(n,t){let e=fo(t,this.size,4);n.uniform4fv(this.addr,e)}function Oy(n,t){let e=fo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function By(n,t){let e=fo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ky(n,t){let e=fo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hy(n,t){n.uniform1iv(this.addr,t)}function Gy(n,t){n.uniform2iv(this.addr,t)}function Vy(n,t){n.uniform3iv(this.addr,t)}function Wy(n,t){n.uniform4iv(this.addr,t)}function Xy(n,t){n.uniform1uiv(this.addr,t)}function qy(n,t){n.uniform2uiv(this.addr,t)}function Yy(n,t){n.uniform3uiv(this.addr,t)}function Zy(n,t){n.uniform4uiv(this.addr,t)}function $y(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xm,r[o])}function Jy(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vm,r[o])}function Ky(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ym,r[o])}function Qy(n,t,e){let i=this.cache,s=t.length,r=dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_m,r[o])}function jy(n){switch(n){case 5126:return Uy;case 35664:return Ny;case 35665:return Fy;case 35666:return zy;case 35674:return Oy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Qy}}var Fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dy(e.type)}},zu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jy(e.type)}},Ou=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function Tp(n,t){n.seq.push(t),n.map[t.id]=t}function tM(n,t,e){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),o=Oh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tp(e,c===void 0?new Fu(a,n,t):new zu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ou(a),Tp(e,u)),e=u}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);tM(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Ap(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var eM=37297,nM=0;function iM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Rp=new ie;function sM(n){de._getMatrix(Rp,de.workingColorSpace,n);let t=`mat3( ${Rp.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(n)){case fc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+iM(n.getShaderSource(t),o)}else return s}function rM(n,t){let e=sM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oM(n,t){let e;switch(t){case xf:e="Linear";break;case _f:e="Reinhard";break;case vf:e="Cineon";break;case _a:e="ACESFilmic";break;case yf:e="AgX";break;case Mf:e="Neutral";break;case Sg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new C;function aM(){de.getLuminanceCoefficients(xl);let n=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function cM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Zo(n){return n!==""}function Ip(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(n){return n.replace(uM,dM)}var fM=new Map;function dM(n,t){let e=re[t];if(e===void 0){let i=fM.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bu(e)}var pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(n){return n.replace(pM,mM)}function mM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function xM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case to:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _M(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===to&&(t="ENVMAP_MODE_REFRACTION"),t}function vM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jp:t="ENVMAP_BLENDING_MULTIPLY";break;case Mg:t="ENVMAP_BLENDING_MIX";break;case bg:t="ENVMAP_BLENDING_ADD";break}return t}function yM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function MM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gM(e),c=xM(e),h=_M(e),u=vM(e),f=yM(e),p=lM(e),g=cM(r),_=s.createProgram(),m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),d.length>0&&(d+=`
`)):(m=[Dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),d=[Dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xs?"#define TONE_MAPPING":"",e.toneMapping!==xs?re.tonemapping_pars_fragment:"",e.toneMapping!==xs?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,rM("linearToOutputTexel",e.outputColorSpace),aM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),o=Bu(o),o=Ip(o,e),o=Pp(o,e),a=Bu(a),a=Ip(a,e),a=Pp(a,e),o=Lp(o),a=Lp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=M+m+o,x=M+d+a,D=Ap(s,s.VERTEX_SHADER,y),R=Ap(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(R).trim(),q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,R);else{let it=Cp(s,D,"vertex"),Y=Cp(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+it+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||H==="")&&(X=!1);X&&(L.diagnostics={runnable:q,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(D),s.deleteShader(R),I=new Kr(s,_),S=hM(s,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,eM)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}var bM=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Hu(t),e.set(t,i)),i}},Hu=class{constructor(t){this.id=bM++,this.code=t,this.usedTimes=0}};function SM(n,t,e,i,s,r,o){let a=new Bl,l=new ku,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,L,B,O){let H=B.fog,q=O.geometry,X=S.isMeshStandardMaterial?B.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),Y=it&&it.mapping===uc?it.image.height:null,dt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Rt=Mt!==void 0?Mt.length:0,Qt=0;q.morphAttributes.position!==void 0&&(Qt=1),q.morphAttributes.normal!==void 0&&(Qt=2),q.morphAttributes.color!==void 0&&(Qt=3);let ye,K,ct,Pt;if(dt){let Ae=bi[dt];ye=Ae.vertexShader,K=Ae.fragmentShader}else ye=S.vertexShader,K=S.fragmentShader,l.update(S),ct=l.getVertexShaderID(S),Pt=l.getFragmentShaderID(S);let ut=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),Jt=O.isInstancedMesh===!0,Yt=O.isBatchedMesh===!0,ge=!!S.map,tt=!!S.matcap,lt=!!it,P=!!S.aoMap,Ot=!!S.lightMap,st=!!S.bumpMap,wt=!!S.normalMap,ft=!!S.displacementMap,Wt=!!S.emissiveMap,St=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,k=S.clearcoat>0,$=S.dispersion>0,et=S.iridescence>0,J=S.sheen>0,Dt=S.transmission>0,mt=b&&!!S.anisotropyMap,Et=k&&!!S.clearcoatMap,ue=k&&!!S.clearcoatNormalMap,rt=k&&!!S.clearcoatRoughnessMap,Tt=et&&!!S.iridescenceMap,Xt=et&&!!S.iridescenceThicknessMap,Zt=J&&!!S.sheenColorMap,At=J&&!!S.sheenRoughnessMap,pe=!!S.specularMap,se=!!S.specularColorMap,Ie=!!S.specularIntensityMap,N=Dt&&!!S.transmissionMap,gt=Dt&&!!S.thicknessMap,Z=!!S.gradientMap,j=!!S.alphaMap,yt=S.alphaTest>0,xt=!!S.alphaHash,ee=!!S.extensions,Ve=xs;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let dn={shaderID:dt,shaderType:S.type,shaderName:S.name,vertexShader:ye,fragmentShader:K,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:Pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Yt,batchingColor:Yt&&O._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&O.instanceColor!==null,instancingMorph:Jt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:uo,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:tt,envMap:lt,envMapMode:lt&&it.mapping,envMapCubeUVHeight:Y,aoMap:P,lightMap:Ot,bumpMap:st,normalMap:wt,displacementMap:f&&ft,emissiveMap:Wt,normalMapObjectSpace:wt&&S.normalMapType===Ag,normalMapTangentSpace:wt&&S.normalMapType===hm,metalnessMap:St,roughnessMap:A,anisotropy:b,anisotropyMap:mt,clearcoat:k,clearcoatMap:Et,clearcoatNormalMap:ue,clearcoatRoughnessMap:rt,dispersion:$,iridescence:et,iridescenceMap:Tt,iridescenceThicknessMap:Xt,sheen:J,sheenColorMap:Zt,sheenRoughnessMap:At,specularMap:pe,specularColorMap:se,specularIntensityMap:Ie,transmission:Dt,transmissionMap:N,thicknessMap:gt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:yt,alphaHash:xt,combine:S.combine,mapUv:ge&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:st&&_(S.bumpMap.channel),normalMapUv:wt&&_(S.normalMap.channel),displacementMapUv:ft&&_(S.displacementMap.channel),emissiveMapUv:Wt&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:mt&&_(S.anisotropyMap.channel),clearcoatMapUv:Et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(S.sheenRoughnessMap.channel),specularMapUv:pe&&_(S.specularMap.channel),specularColorMapUv:se&&_(S.specularColorMap.channel),specularIntensityMapUv:Ie&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:gt&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(wt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ge||j),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Qt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===Se,decodeVideoTextureEmissive:Wt&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ee&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&S.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dn.vertexUv1s=c.has(1),dn.vertexUv2s=c.has(2),dn.vertexUv3s=c.has(3),c.clear(),dn}function d(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)v.push(L),v.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=g[S.type],L;if(v){let B=bi[v];L=Ms.clone(B.uniforms)}else L=S.uniforms;return L}function D(S,v){let L;for(let B=0,O=h.length;B<O;B++){let H=h[B];if(H.cacheKey===v){L=H,++L.usedTimes;break}}return L===void 0&&(L=new MM(n,v,S,r),h.push(L)),L}function R(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:I}}function EM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Up(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Np(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||wM),i.length>1&&i.sort(f||Up),s.length>1&&s.sort(f||Up)}function h(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function TM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Np,n.set(i,[o])):s>=r.length?(o=new Np,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function AM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new at};break;case"SpotLight":e={position:new C,direction:new C,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function RM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var CM=0;function IM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function PM(n){let t=new AM,e=RM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new me,o=new me;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,y=0,x=0,D=0,R=0,w=0;c.sort(IM);for(let S=0,v=c.length;S<v;S++){let L=c[S],B=L.color,O=L.intensity,H=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*O,u+=B.g*O,f+=B.b*O;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],O);w++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,Y=e.get(L);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=X,p++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(O),X.distance=H,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;let it=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,it.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[_]=it.matrix,L.castShadow){let Y=e.get(L);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=q,x++}_++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(B).multiplyScalar(O),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let it=L.shadow,Y=e.get(L);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(O),X.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=w,i.version=CM++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let y=c[d];if(y.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Fp(n){let t=new PM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Fp(n),t.set(s,[a])):r>=o.length?(a=new Fp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Gu=class extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vu=class extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NM(n,t,e){let i=new sa,s=new nt,r=new nt,o=new Ce,a=new Gu({depthPacking:Tg}),l=new Vu,c={},h=e.maxTextureSize,u={[_s]:xn,[xn]:_s,[An]:An},f=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:DM,fragmentShader:UM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qp;let d=this.type;this.render=function(R,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(wi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=d!==Xi&&this.type===Xi,H=d===Xi&&this.type!==Xi;for(let q=0,X=R.length;q<X;q++){let it=R[q],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let dt=Y.getFrameExtents();if(s.multiply(dt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,Y.mapSize.y=r.y)),Y.map===null||O===!0||H===!0){let Rt=this.type!==Xi?{minFilter:_n,magFilter:_n}:{};Y.map!==null&&Y.map.dispose(),Y.map=new rn(s.x,s.y,Rt),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Mt=Y.getViewportCount();for(let Rt=0;Rt<Mt;Rt++){let Qt=Y.getViewport(Rt);o.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),B.viewport(o),Y.updateMatrices(it,Rt),i=Y.getFrustum(),x(w,I,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===Xi&&M(Y,I),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,L)};function M(R,w){let I=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new rn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,I,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,I,p,_,null)}function y(R,w,I,S){let v=null,L=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)v=L;else if(v=I.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=v.uuid,O=w.uuid,H=c[B];H===void 0&&(H={},c[B]=H);let q=H[O];q===void 0&&(q=v.clone(),H[O]=q,w.addEventListener("dispose",D)),v=q}if(v.visible=w.visible,v.wireframe=w.wireframe,S===Xi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let B=n.properties.get(v);B.light=I}return v}function x(R,w,I,S,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Xi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let O=t.update(R),H=R.material;if(Array.isArray(H)){let q=O.groups;for(let X=0,it=q.length;X<it;X++){let Y=q[X],dt=H[Y.materialIndex];if(dt&&dt.visible){let Mt=y(R,dt,S,v);R.onBeforeShadow(n,R,w,I,O,Mt,Y),n.renderBufferDirect(I,null,O,Mt,R,Y),R.onAfterShadow(n,R,w,I,O,Mt,Y)}}}else if(H.visible){let q=y(R,H,S,v);R.onBeforeShadow(n,R,w,I,O,q,null),n.renderBufferDirect(I,null,O,q,R,null),R.onAfterShadow(n,R,w,I,O,q,null)}}let B=R.children;for(let O=0,H=B.length;O<H;O++)x(B[O],w,I,S,v)}function D(R){R.target.removeEventListener("dispose",D);for(let I in c){let S=c[I],v=R.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var FM={[Yh]:Zh,[$h]:Qh,[Jh]:jh,[Qr]:Kh,[Zh]:Yh,[Qh]:$h,[jh]:Jh,[Kh]:Qr};function zM(n,t){function e(){let N=!1,gt=new Ce,Z=null,j=new Ce(0,0,0,0);return{setMask:function(yt){Z!==yt&&!N&&(n.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){N=yt},setClear:function(yt,xt,ee,Ve,dn){dn===!0&&(yt*=Ve,xt*=Ve,ee*=Ve),gt.set(yt,xt,ee,Ve),j.equals(gt)===!1&&(n.clearColor(yt,xt,ee,Ve),j.copy(gt))},reset:function(){N=!1,Z=null,j.set(-1,0,0,0)}}}function i(){let N=!1,gt=!1,Z=null,j=null,yt=null;return{setReversed:function(xt){if(gt!==xt){let ee=t.get("EXT_clip_control");gt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Ve=yt;yt=null,this.setClear(Ve)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?ut(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(xt){Z!==xt&&!N&&(n.depthMask(xt),Z=xt)},setFunc:function(xt){if(gt&&(xt=FM[xt]),j!==xt){switch(xt){case Yh:n.depthFunc(n.NEVER);break;case Zh:n.depthFunc(n.ALWAYS);break;case $h:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case Jh:n.depthFunc(n.EQUAL);break;case Kh:n.depthFunc(n.GEQUAL);break;case Qh:n.depthFunc(n.GREATER);break;case jh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=xt}},setLocked:function(xt){N=xt},setClear:function(xt){yt!==xt&&(gt&&(xt=1-xt),n.clearDepth(xt),yt=xt)},reset:function(){N=!1,Z=null,j=null,yt=null,gt=!1}}}function s(){let N=!1,gt=null,Z=null,j=null,yt=null,xt=null,ee=null,Ve=null,dn=null;return{setTest:function(Ae){N||(Ae?ut(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(Ae){gt!==Ae&&!N&&(n.stencilMask(Ae),gt=Ae)},setFunc:function(Ae,ii,Oi){(Z!==Ae||j!==ii||yt!==Oi)&&(n.stencilFunc(Ae,ii,Oi),Z=Ae,j=ii,yt=Oi)},setOp:function(Ae,ii,Oi){(xt!==Ae||ee!==ii||Ve!==Oi)&&(n.stencilOp(Ae,ii,Oi),xt=Ae,ee=ii,Ve=Oi)},setLocked:function(Ae){N=Ae},setClear:function(Ae){dn!==Ae&&(n.clearStencil(Ae),dn=Ae)},reset:function(){N=!1,gt=null,Z=null,j=null,yt=null,xt=null,ee=null,Ve=null,dn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,y=null,x=null,D=null,R=null,w=new at(0,0,0),I=0,S=!1,v=null,L=null,B=null,O=null,H=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,it=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=it>=2);let dt=null,Mt={},Rt=n.getParameter(n.SCISSOR_BOX),Qt=n.getParameter(n.VIEWPORT),ye=new Ce().fromArray(Rt),K=new Ce().fromArray(Qt);function ct(N,gt,Z,j){let yt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(N,xt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<Z;ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(gt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return xt}let Pt={};Pt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(Qr),st(!1),wt(Bd),ut(n.CULL_FACE),P(wi);function ut(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function kt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Jt(N,gt){return u[N]!==gt?(n.bindFramebuffer(N,gt),u[N]=gt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=gt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Yt(N,gt){let Z=p,j=!1;if(N){Z=f.get(gt),Z===void 0&&(Z=[],f.set(gt,Z));let yt=N.textures;if(Z.length!==yt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,ee=yt.length;xt<ee;xt++)Z[xt]=n.COLOR_ATTACHMENT0+xt;Z.length=yt.length,j=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,j=!0);j&&n.drawBuffers(Z)}function ge(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let tt={[nr]:n.FUNC_ADD,[sg]:n.FUNC_SUBTRACT,[rg]:n.FUNC_REVERSE_SUBTRACT};tt[og]=n.MIN,tt[ag]=n.MAX;let lt={[lg]:n.ZERO,[cg]:n.ONE,[hg]:n.SRC_COLOR,[Xh]:n.SRC_ALPHA,[gg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[fg]:n.DST_ALPHA,[ug]:n.ONE_MINUS_SRC_COLOR,[qh]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[dg]:n.ONE_MINUS_DST_ALPHA,[xg]:n.CONSTANT_COLOR,[_g]:n.ONE_MINUS_CONSTANT_COLOR,[vg]:n.CONSTANT_ALPHA,[yg]:n.ONE_MINUS_CONSTANT_ALPHA};function P(N,gt,Z,j,yt,xt,ee,Ve,dn,Ae){if(N===wi){_===!0&&(kt(n.BLEND),_=!1);return}if(_===!1&&(ut(n.BLEND),_=!0),N!==ig){if(N!==m||Ae!==S){if((d!==nr||x!==nr)&&(n.blendEquation(n.FUNC_ADD),d=nr,x=nr),Ae)switch(N){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.ONE,n.ONE);break;case kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,D=null,R=null,w.set(0,0,0),I=0,m=N,S=Ae}return}yt=yt||gt,xt=xt||Z,ee=ee||j,(gt!==d||yt!==x)&&(n.blendEquationSeparate(tt[gt],tt[yt]),d=gt,x=yt),(Z!==M||j!==y||xt!==D||ee!==R)&&(n.blendFuncSeparate(lt[Z],lt[j],lt[xt],lt[ee]),M=Z,y=j,D=xt,R=ee),(Ve.equals(w)===!1||dn!==I)&&(n.blendColor(Ve.r,Ve.g,Ve.b,dn),w.copy(Ve),I=dn),m=N,S=!1}function Ot(N,gt){N.side===An?kt(n.CULL_FACE):ut(n.CULL_FACE);let Z=N.side===xn;gt&&(Z=!Z),st(Z),N.blending===Zi&&N.transparent===!1?P(wi):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let j=N.stencilWrite;a.setTest(j),j&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){v!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),v=N)}function wt(N){N!==eg?(ut(n.CULL_FACE),N!==L&&(N===Bd?n.cullFace(n.BACK):N===ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),L=N}function ft(N){N!==B&&(X&&n.lineWidth(N),B=N)}function Wt(N,gt,Z){N?(ut(n.POLYGON_OFFSET_FILL),(O!==gt||H!==Z)&&(n.polygonOffset(gt,Z),O=gt,H=Z)):kt(n.POLYGON_OFFSET_FILL)}function St(N){N?ut(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+q-1),dt!==N&&(n.activeTexture(N),dt=N)}function b(N,gt,Z){Z===void 0&&(dt===null?Z=n.TEXTURE0+q-1:Z=dt);let j=Mt[Z];j===void 0&&(j={type:void 0,texture:void 0},Mt[Z]=j),(j.type!==N||j.texture!==gt)&&(dt!==Z&&(n.activeTexture(Z),dt=Z),n.bindTexture(N,gt||Pt[N]),j.type=N,j.texture=gt)}function k(){let N=Mt[dt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(N){ye.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function At(N){K.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function pe(N,gt){let Z=c.get(gt);Z===void 0&&(Z=new WeakMap,c.set(gt,Z));let j=Z.get(N);j===void 0&&(j=n.getUniformBlockIndex(gt,N.name),Z.set(N,j))}function se(N,gt){let j=c.get(gt).get(N);l.get(gt)!==j&&(n.uniformBlockBinding(gt,j,N.__bindingPointIndex),l.set(gt,j))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},dt=null,Mt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,y=null,x=null,D=null,R=null,w=new at(0,0,0),I=0,S=!1,v=null,L=null,B=null,O=null,H=null,ye.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:kt,bindFramebuffer:Jt,drawBuffers:Yt,useProgram:ge,setBlending:P,setMaterial:Ot,setFlipSided:st,setCullFace:wt,setLineWidth:ft,setPolygonOffset:Wt,setScissorTest:St,activeTexture:A,bindTexture:b,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:Tt,texImage3D:Xt,updateUBOMapping:pe,uniformBlockBinding:se,texStorage2D:ue,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Dt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:Zt,viewport:At,reset:Ie}}function zp(n,t,e,i){let s=OM(i);switch(e){case sm:return n*t;case om:return n*t;case am:return n*t*2;case va:return n*t/s.components*s.byteLength;case wf:return n*t/s.components*s.byteLength;case lm:return n*t*2/s.components*s.byteLength;case Tf:return n*t*2/s.components*s.byteLength;case rm:return n*t*3/s.components*s.byteLength;case ci:return n*t*4/s.components*s.byteLength;case Af:return n*t*4/s.components*s.byteLength;case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Il:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case su:case ou:return Math.max(n,16)*Math.max(t,8)/4;case iu:case ru:return Math.max(n,8)*Math.max(t,8)/2;case au:case lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _u:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Eu:case wu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cm:case Tu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Au:case Ru:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function OM(n){switch(n){case Ji:case em:return{byteLength:1,components:1};case na:case nm:case Wn:return{byteLength:2,components:1};case Sf:case Ef:return{byteLength:2,components:4};case or:case bf:case Ei:return{byteLength:4,components:1};case im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function BM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return p?new OffscreenCanvas(A,b):Nl("canvas")}function _(A,b,k){let $=1,et=St(A);if((et.width>k||et.height>k)&&($=k/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor($*et.width),Dt=Math.floor($*et.height);u===void 0&&(u=g(J,Dt));let mt=b?g(J,Dt):u;return mt.width=J,mt.height=Dt,mt.getContext("2d").drawImage(A,0,0,J,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Dt+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,b,k,$,et=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=b;if(b===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),b===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),b===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),b===n.RGBA){let Dt=et?fc:de.getTransfer($);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Dt===Se?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(A,b){let k;return A?b===null||b===or||b===eo?k=n.DEPTH24_STENCIL8:b===Ei?k=n.DEPTH32F_STENCIL8:b===na&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===or||b===eo?k=n.DEPTH_COMPONENT24:b===Ei?k=n.DEPTH_COMPONENT32F:b===na&&(k=n.DEPTH_COMPONENT16),k}function D(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==_n&&A.minFilter!==Si?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){let b=A.target;b.removeEventListener("dispose",R),I(b),b.isVideoTexture&&h.delete(b)}function w(A){let b=A.target;b.removeEventListener("dispose",w),v(b)}function I(A){let b=i.get(A);if(b.__webglInit===void 0)return;let k=A.source,$=f.get(k);if($){let et=$[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(A),Object.keys($).length===0&&f.delete(k)}i.remove(A)}function S(A){let b=i.get(A);n.deleteTexture(b.__webglTexture);let k=A.source,$=f.get(k);delete $[b.__cacheKey],o.memory.textures--}function v(A){let b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let et=0;et<b.__webglFramebuffer[$].length;et++)n.deleteFramebuffer(b.__webglFramebuffer[$][et]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=A.textures;for(let $=0,et=k.length;$<et;$++){let J=i.get(k[$]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(A)}let L=0;function B(){L=0}function O(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function H(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){let k=i.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,A,b);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function X(A,b){let k=i.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function it(A,b){let k=i.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,b);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function Y(A,b){let k=i.get(A);if(A.version>0&&k.__version!==A.version){ct(k,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}let dt={[ea]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[nu]:n.MIRRORED_REPEAT},Mt={[_n]:n.NEAREST,[Eg]:n.NEAREST_MIPMAP_NEAREST,[Ka]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[uh]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},Rt={[Rg]:n.NEVER,[Ug]:n.ALWAYS,[Cg]:n.LESS,[um]:n.LEQUAL,[Ig]:n.EQUAL,[Dg]:n.GEQUAL,[Pg]:n.GREATER,[Lg]:n.NOTEQUAL};function Qt(A,b){if(b.type===Ei&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Si||b.magFilter===uh||b.magFilter===Ka||b.magFilter===rr||b.minFilter===Si||b.minFilter===uh||b.minFilter===Ka||b.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,dt[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,dt[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,dt[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Mt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_n||b.minFilter!==Ka&&b.minFilter!==rr||b.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ye(A,b){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));let $=b.source,et=f.get($);et===void 0&&(et={},f.set($,et));let J=H(b);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[J].usedTimes++;let Dt=et[A.__cacheKey];Dt!==void 0&&(et[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(b)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return k}function K(A,b,k){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);let et=ye(A,b),J=b.source;e.bindTexture($,A.__webglTexture,n.TEXTURE0+k);let Dt=i.get(J);if(J.version!==Dt.__version||et===!0){e.activeTexture(n.TEXTURE0+k);let mt=de.getPrimaries(de.workingColorSpace),Et=b.colorSpace===ms?null:de.getPrimaries(b.colorSpace),ue=b.colorSpace===ms||mt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let rt=_(b.image,!1,s.maxTextureSize);rt=Wt(b,rt);let Tt=r.convert(b.format,b.colorSpace),Xt=r.convert(b.type),Zt=y(b.internalFormat,Tt,Xt,b.colorSpace,b.isVideoTexture);Qt($,b);let At,pe=b.mipmaps,se=b.isVideoTexture!==!0,Ie=Dt.__version===void 0||et===!0,N=J.dataReady,gt=D(b,rt);if(b.isDepthTexture)Zt=x(b.format===no,b.type),Ie&&(se?e.texStorage2D(n.TEXTURE_2D,1,Zt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Zt,rt.width,rt.height,0,Tt,Xt,null));else if(b.isDataTexture)if(pe.length>0){se&&Ie&&e.texStorage2D(n.TEXTURE_2D,gt,Zt,pe[0].width,pe[0].height);for(let Z=0,j=pe.length;Z<j;Z++)At=pe[Z],se?N&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,At.width,At.height,Tt,Xt,At.data):e.texImage2D(n.TEXTURE_2D,Z,Zt,At.width,At.height,0,Tt,Xt,At.data);b.generateMipmaps=!1}else se?(Ie&&e.texStorage2D(n.TEXTURE_2D,gt,Zt,rt.width,rt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,Tt,Xt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Zt,rt.width,rt.height,0,Tt,Xt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&Ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Zt,pe[0].width,pe[0].height,rt.depth);for(let Z=0,j=pe.length;Z<j;Z++)if(At=pe[Z],b.format!==ci)if(Tt!==null)if(se){if(N)if(b.layerUpdates.size>0){let yt=zp(At.width,At.height,b.format,b.type);for(let xt of b.layerUpdates){let ee=At.data.subarray(xt*yt/At.data.BYTES_PER_ELEMENT,(xt+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,xt,At.width,At.height,1,Tt,ee)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,At.width,At.height,rt.depth,Tt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Zt,At.width,At.height,rt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,At.width,At.height,rt.depth,Tt,Xt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Zt,At.width,At.height,rt.depth,0,Tt,Xt,At.data)}else{se&&Ie&&e.texStorage2D(n.TEXTURE_2D,gt,Zt,pe[0].width,pe[0].height);for(let Z=0,j=pe.length;Z<j;Z++)At=pe[Z],b.format!==ci?Tt!==null?se?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Zt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?N&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,At.width,At.height,Tt,Xt,At.data):e.texImage2D(n.TEXTURE_2D,Z,Zt,At.width,At.height,0,Tt,Xt,At.data)}else if(b.isDataArrayTexture)if(se){if(Ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Zt,rt.width,rt.height,rt.depth),N)if(b.layerUpdates.size>0){let Z=zp(rt.width,rt.height,b.format,b.type);for(let j of b.layerUpdates){let yt=rt.data.subarray(j*Z/rt.data.BYTES_PER_ELEMENT,(j+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,Tt,Xt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Xt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Zt,rt.width,rt.height,rt.depth,0,Tt,Xt,rt.data);else if(b.isData3DTexture)se?(Ie&&e.texStorage3D(n.TEXTURE_3D,gt,Zt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Xt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Zt,rt.width,rt.height,rt.depth,0,Tt,Xt,rt.data);else if(b.isFramebufferTexture){if(Ie)if(se)e.texStorage2D(n.TEXTURE_2D,gt,Zt,rt.width,rt.height);else{let Z=rt.width,j=rt.height;for(let yt=0;yt<gt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Zt,Z,j,0,Tt,Xt,null),Z>>=1,j>>=1}}else if(pe.length>0){if(se&&Ie){let Z=St(pe[0]);e.texStorage2D(n.TEXTURE_2D,gt,Zt,Z.width,Z.height)}for(let Z=0,j=pe.length;Z<j;Z++)At=pe[Z],se?N&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt,Xt,At):e.texImage2D(n.TEXTURE_2D,Z,Zt,Tt,Xt,At);b.generateMipmaps=!1}else if(se){if(Ie){let Z=St(rt);e.texStorage2D(n.TEXTURE_2D,gt,Zt,Z.width,Z.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Xt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Zt,Tt,Xt,rt);m(b)&&d($),Dt.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ct(A,b,k){if(b.image.length!==6)return;let $=ye(A,b),et=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let J=i.get(et);if(et.version!==J.__version||$===!0){e.activeTexture(n.TEXTURE0+k);let Dt=de.getPrimaries(de.workingColorSpace),mt=b.colorSpace===ms?null:de.getPrimaries(b.colorSpace),Et=b.colorSpace===ms||Dt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ue=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let j=0;j<6;j++)!ue&&!rt?Tt[j]=_(b.image[j],!0,s.maxCubemapSize):Tt[j]=rt?b.image[j].image:b.image[j],Tt[j]=Wt(b,Tt[j]);let Xt=Tt[0],Zt=r.convert(b.format,b.colorSpace),At=r.convert(b.type),pe=y(b.internalFormat,Zt,At,b.colorSpace),se=b.isVideoTexture!==!0,Ie=J.__version===void 0||$===!0,N=et.dataReady,gt=D(b,Xt);Qt(n.TEXTURE_CUBE_MAP,b);let Z;if(ue){se&&Ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,pe,Xt.width,Xt.height);for(let j=0;j<6;j++){Z=Tt[j].mipmaps;for(let yt=0;yt<Z.length;yt++){let xt=Z[yt];b.format!==ci?Zt!==null?se?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,xt.width,xt.height,Zt,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,pe,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,xt.width,xt.height,Zt,At,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,pe,xt.width,xt.height,0,Zt,At,xt.data)}}}else{if(Z=b.mipmaps,se&&Ie){Z.length>0&&gt++;let j=St(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,pe,j.width,j.height)}for(let j=0;j<6;j++)if(rt){se?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt[j].width,Tt[j].height,Zt,At,Tt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,pe,Tt[j].width,Tt[j].height,0,Zt,At,Tt[j].data);for(let yt=0;yt<Z.length;yt++){let ee=Z[yt].image[j].image;se?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,ee.width,ee.height,Zt,At,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,pe,ee.width,ee.height,0,Zt,At,ee.data)}}else{se?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Zt,At,Tt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,pe,Zt,At,Tt[j]);for(let yt=0;yt<Z.length;yt++){let xt=Z[yt];se?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,Zt,At,xt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,pe,Zt,At,xt.image[j])}}}m(b)&&d(n.TEXTURE_CUBE_MAP),J.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Pt(A,b,k,$,et,J){let Dt=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),Et=y(k.internalFormat,Dt,mt,k.colorSpace),ue=i.get(b),rt=i.get(k);if(rt.__renderTarget=b,!ue.__hasExternalTextures){let Tt=Math.max(1,b.width>>J),Xt=Math.max(1,b.height>>J);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,J,Et,Tt,Xt,b.depth,0,Dt,mt,null):e.texImage2D(et,J,Et,Tt,Xt,0,Dt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),wt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,et,rt.__webglTexture,0,st(b)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,et,rt.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(A,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){let $=b.depthTexture,et=$&&$.isDepthTexture?$.type:null,J=x(b.stencilBuffer,et),Dt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=st(b);wt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,J,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,J,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,A)}else{let $=b.textures;for(let et=0;et<$.length;et++){let J=$[et],Dt=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),Et=y(J.internalFormat,Dt,mt,J.colorSpace),ue=st(b);k&&wt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Et,b.width,b.height):wt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Et,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Et,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let et=$.__webglTexture,J=st(b);if(b.depthTexture.format===$r)wt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===no)wt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Jt(A){let b=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=$}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");kt(b.__webglFramebuffer,A)}else if(k){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),ut(b.__webglDepthbuffer[$],A,!1);else{let et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ut(b.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(A,b,k){let $=i.get(A);b!==void 0&&Pt($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Jt(A)}function ge(A){let b=A.texture,k=i.get(A),$=i.get(b);A.addEventListener("dispose",w);let et=A.textures,J=A.isWebGLCubeRenderTarget===!0,Dt=et.length>1;if(Dt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let Et=0;Et<b.mipmaps.length;Et++)k.__webglFramebuffer[mt][Et]=n.createFramebuffer()}else k.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)k.__webglFramebuffer[mt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let mt=0,Et=et.length;mt<Et;mt++){let ue=i.get(et[mt]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&wt(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){let Et=et[mt];k.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);let ue=r.convert(Et.format,Et.colorSpace),rt=r.convert(Et.type),Tt=y(Et.internalFormat,ue,rt,Et.colorSpace,A.isXRRenderTarget===!0),Xt=st(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Tt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)Pt(k.__webglFramebuffer[mt][Et],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else Pt(k.__webglFramebuffer[mt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(b)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let mt=0,Et=et.length;mt<Et;mt++){let ue=et[mt],rt=i.get(ue);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),Qt(n.TEXTURE_2D,ue),Pt(k.__webglFramebuffer,A,ue,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(ue)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,$.__webglTexture),Qt(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)Pt(k.__webglFramebuffer[Et],A,b,n.COLOR_ATTACHMENT0,mt,Et);else Pt(k.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,mt,0);m(b)&&d(mt),e.unbindTexture()}A.depthBuffer&&Jt(A)}function tt(A){let b=A.textures;for(let k=0,$=b.length;k<$;k++){let et=b[k];if(m(et)){let J=M(A),Dt=i.get(et).__webglTexture;e.bindTexture(J,Dt),d(J),e.unbindTexture()}}}let lt=[],P=[];function Ot(A){if(A.samples>0){if(wt(A)===!1){let b=A.textures,k=A.width,$=A.height,et=n.COLOR_BUFFER_BIT,J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(A),mt=b.length>1;if(mt)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Et]);let ue=i.get(b[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,et,n.NEAREST),l===!0&&(lt.length=0,P.length=0,lt.push(n.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(lt.push(J),P.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Et]);let ue=i.get(b[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,ue,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function wt(A){let b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ft(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Wt(A,b){let k=A.colorSpace,$=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==uo&&k!==ms&&(de.getTransfer(k)===Se?($!==ci||et!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=Yt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=wt}function kM(n,t){function e(i,s=ms){let r,o=de.getTransfer(s);if(i===Ji)return n.UNSIGNED_BYTE;if(i===Sf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ef)return n.UNSIGNED_SHORT_5_5_5_1;if(i===im)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===em)return n.BYTE;if(i===nm)return n.SHORT;if(i===na)return n.UNSIGNED_SHORT;if(i===bf)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===Ei)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===sm)return n.ALPHA;if(i===rm)return n.RGB;if(i===ci)return n.RGBA;if(i===om)return n.LUMINANCE;if(i===am)return n.LUMINANCE_ALPHA;if(i===$r)return n.DEPTH_COMPONENT;if(i===no)return n.DEPTH_STENCIL;if(i===va)return n.RED;if(i===wf)return n.RED_INTEGER;if(i===lm)return n.RG;if(i===Tf)return n.RG_INTEGER;if(i===Af)return n.RGBA_INTEGER;if(i===Rl||i===Cl||i===Il||i===Pl)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===iu||i===su||i===ru||i===ou)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===su)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ou)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===au||i===lu||i===cu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===au||i===lu)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hu||i===uu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===_u||i===vu||i===yu||i===Mu||i===bu||i===Su)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_u)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Su)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===Eu||i===wu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ll)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cm||i===Tu||i===Au||i===Ru)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ru)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Wu=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},HM={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ke({vertexShader:GM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends vs{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,_=new Xu,m=e.getContextAttributes(),d=null,M=null,y=[],x=[],D=new nt,R=null,w=new gn;w.viewport=new Ce;let I=new gn;I.viewport=new Ce;let S=[w,I],v=new Wu,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=y[K];return ct===void 0&&(ct=new Ko,y[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=y[K];return ct===void 0&&(ct=new Ko,y[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=y[K];return ct===void 0&&(ct=new Ko,y[K]=ct),ct.getHandSpace()};function O(K){let ct=x.indexOf(K.inputSource);if(ct===-1)return;let Pt=y[ct];Pt!==void 0&&(Pt.update(K.inputSource,K.frame,c||o),Pt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let K=0;K<y.length;K++){let ct=x[K];ct!==null&&(x[K]=null,y[K].disconnect(ct))}L=null,B=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,M=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new rn(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,Pt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?no:$r,Pt=m.stencil?eo:or);let kt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new rn(f.textureWidth,f.textureHeight,{format:ci,type:Ji,depthTexture:new Xl(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(K){for(let ct=0;ct<K.removed.length;ct++){let Pt=K.removed[ct],ut=x.indexOf(Pt);ut>=0&&(x[ut]=null,y[ut].disconnect(Pt))}for(let ct=0;ct<K.added.length;ct++){let Pt=K.added[ct],ut=x.indexOf(Pt);if(ut===-1){for(let Jt=0;Jt<y.length;Jt++)if(Jt>=x.length){x.push(Pt),ut=Jt;break}else if(x[Jt]===null){x[Jt]=Pt,ut=Jt;break}if(ut===-1)break}let kt=y[ut];kt&&kt.connect(Pt)}}let X=new C,it=new C;function Y(K,ct,Pt){X.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(Pt.matrixWorld);let ut=X.distanceTo(it),kt=ct.projectionMatrix.elements,Jt=Pt.projectionMatrix.elements,Yt=kt[14]/(kt[10]-1),ge=kt[14]/(kt[10]+1),tt=(kt[9]+1)/kt[5],lt=(kt[9]-1)/kt[5],P=(kt[8]-1)/kt[0],Ot=(Jt[8]+1)/Jt[0],st=Yt*P,wt=Yt*Ot,ft=ut/(-P+Ot),Wt=ft*-P;if(ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),kt[10]===-1)K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let St=Yt+ft,A=ge+ft,b=st-Wt,k=wt+(ut-Wt),$=tt*ge/A*St,et=lt*ge/A*St;K.projectionMatrix.makePerspective(b,k,$,et,St,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function dt(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ct=K.near,Pt=K.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(Pt=_.depthFar)),v.near=I.near=w.near=ct,v.far=I.far=w.far=Pt,(L!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,B=v.far),w.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,v.layers.mask=w.layers.mask|I.layers.mask;let ut=K.parent,kt=v.cameras;dt(v,ut);for(let Jt=0;Jt<kt.length;Jt++)dt(kt[Jt],ut);kt.length===2?Y(v,w,I):v.projectionMatrix.copy(w.projectionMatrix),Mt(K,v,ut)};function Mt(K,ct,Pt){Pt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(Pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ia*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Rt=null;function Qt(K,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){let Pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ut=!1;Pt.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Jt=0;Jt<Pt.length;Jt++){let Yt=Pt[Jt],ge=null;if(p!==null)ge=p.getViewport(Yt);else{let lt=u.getViewSubImage(f,Yt);ge=lt.viewport,Jt===0&&(t.setRenderTargetTextures(M,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(M))}let tt=S[Jt];tt===void 0&&(tt=new gn,tt.layers.enable(Jt),tt.viewport=new Ce,S[Jt]=tt),tt.matrix.fromArray(Yt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Yt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ge.x,ge.y,ge.width,ge.height),Jt===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(tt)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Jt=u.getDepthInformation(Pt[0]);Jt&&Jt.isValid&&Jt.texture&&_.init(t,Jt,s.renderState)}}for(let Pt=0;Pt<y.length;Pt++){let ut=x[Pt],kt=y[Pt];ut!==null&&kt!==void 0&&kt.update(ut,ct,c||o)}Rt&&Rt(K,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}let ye=new gm;ye.setAnimationLoop(Qt),this.setAnimationLoop=function(K){Rt=K},this.dispose=function(){}}},tr=new hi,WM=new me;function XM(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,tr.copy(x),tr.x*=-1,tr.y*=-1,tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(tr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let x=y.program;i.uniformBlockBinding(M,x)}function c(M,y){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));let D=y.program;i.updateUBOMapping(M,D);let R=t.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function h(M){let y=u();M.__bindingPointIndex=y;let x=n.createBuffer(),D=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],x=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,w=x.length;R<w;R++){let I=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,v=I.length;S<v;S++){let L=I[S];if(p(L,R,S,D)===!0){let B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],H=0;for(let q=0;q<O.length;q++){let X=O[q],it=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+H,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,x,D){let R=M.value,w=y+"_"+x;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{let I=D[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return D[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(M){let y=M.uniforms,x=0,D=16;for(let w=0,I=y.length;w<I;w++){let S=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,L=S.length;v<L;v++){let B=S[v],O=Array.isArray(B.value)?B.value:[B.value];for(let H=0,q=O.length;H<q;H++){let X=O[H],it=_(X),Y=x%D,dt=Y%it.boundary,Mt=Y+dt;x+=dt,Mt!==0&&D-Mt<it.storage&&(x+=D-Mt),B.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=it.storage}}}let R=x%D;return R>0&&(x+=D-R),M.__size=x,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ql=class{constructor(t={}){let{canvas:e=Kg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=xs,this.toneMappingExposure=1;let x=this,D=!1,R=0,w=0,I=null,S=-1,v=null,L=new Ce,B=new Ce,O=null,H=new at(0),q=0,X=e.width,it=e.height,Y=1,dt=null,Mt=null,Rt=new Ce(0,0,X,it),Qt=new Ce(0,0,X,it),ye=!1,K=new sa,ct=!1,Pt=!1,ut=new me,kt=new me,Jt=new C,Yt=new Ce,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function lt(){return I===null?Y:1}let P=i;function Ot(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),P===null){let F="webgl2";if(P=Ot(F,E),P===null)throw Ot(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,wt,ft,Wt,St,A,b,k,$,et,J,Dt,mt,Et,ue,rt,Tt,Xt,Zt,At,pe,se,Ie,N;function gt(){st=new ly(P),st.init(),se=new kM(P,st),wt=new ny(P,st,t,se),ft=new zM(P,st),wt.reverseDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),Wt=new uy(P),St=new EM,A=new BM(P,st,ft,St,wt,se,Wt),b=new sy(x),k=new ay(x),$=new _x(P),Ie=new ty(P,$),et=new cy(P,$,Wt,Ie),J=new dy(P,et,$,Wt),Zt=new fy(P,wt,A),rt=new iy(St),Dt=new SM(x,b,k,st,wt,Ie,rt),mt=new XM(x,St),Et=new TM,ue=new LM(st),Xt=new jv(x,b,k,ft,J,p,l),Tt=new NM(x,J,wt),N=new qM(P,Wt,wt,ft),At=new ey(P,st,Wt),pe=new hy(P,st,Wt),Wt.programs=Dt.programs,x.capabilities=wt,x.extensions=st,x.properties=St,x.renderLists=Et,x.shadowMap=Tt,x.state=ft,x.info=Wt}gt();let Z=new qu(x,P);this.xr=Z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(X,it,!1))},this.getSize=function(E){return E.set(X,it)},this.setSize=function(E,F,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,it=F,e.width=Math.floor(E*Y),e.height=Math.floor(F*Y),G===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(X*Y,it*Y).floor()},this.setDrawingBufferSize=function(E,F,G){X=E,it=F,Y=G,e.width=Math.floor(E*G),e.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Rt)},this.setViewport=function(E,F,G,V){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,F,G,V),ft.viewport(L.copy(Rt).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Qt)},this.setScissor=function(E,F,G,V){E.isVector4?Qt.set(E.x,E.y,E.z,E.w):Qt.set(E,F,G,V),ft.scissor(B.copy(Qt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){ft.setScissorTest(ye=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(E=!0,F=!0,G=!0){let V=0;if(E){let z=!1;if(I!==null){let ht=I.texture.format;z=ht===Af||ht===Tf||ht===wf}if(z){let ht=I.texture.type,_t=ht===Ji||ht===or||ht===na||ht===eo||ht===Sf||ht===Ef,Nt=Xt.getClearColor(),Ft=Xt.getClearAlpha(),Kt=Nt.r,ne=Nt.g,zt=Nt.b;_t?(g[0]=Kt,g[1]=ne,g[2]=zt,g[3]=Ft,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Kt,_[1]=ne,_[2]=zt,_[3]=Ft,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}F&&(V|=P.DEPTH_BUFFER_BIT),G&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Et.dispose(),ue.dispose(),St.dispose(),b.dispose(),k.dispose(),J.dispose(),Ie.dispose(),N.dispose(),Dt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Pd),Z.removeEventListener("sessionend",Ld),Zs.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=Wt.autoReset,F=Tt.enabled,G=Tt.autoUpdate,V=Tt.needsUpdate,z=Tt.type;gt(),Wt.autoReset=E,Tt.enabled=F,Tt.autoUpdate=G,Tt.needsUpdate=V,Tt.type=z}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){let F=E.target;F.removeEventListener("dispose",ee),Ve(F)}function Ve(E){dn(E),St.remove(E)}function dn(E){let F=St.get(E).programs;F!==void 0&&(F.forEach(function(G){Dt.releaseProgram(G)}),E.isShaderMaterial&&Dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,V,z,ht){F===null&&(F=ge);let _t=z.isMesh&&z.matrixWorld.determinant()<0,Nt=K0(E,F,G,V,z);ft.setMaterial(V,_t);let Ft=G.index,Kt=1;if(V.wireframe===!0){if(Ft=et.getWireframeAttribute(G),Ft===void 0)return;Kt=2}let ne=G.drawRange,zt=G.attributes.position,xe=ne.start*Kt,Pe=(ne.start+ne.count)*Kt;ht!==null&&(xe=Math.max(xe,ht.start*Kt),Pe=Math.min(Pe,(ht.start+ht.count)*Kt)),Ft!==null?(xe=Math.max(xe,0),Pe=Math.min(Pe,Ft.count)):zt!=null&&(xe=Math.max(xe,0),Pe=Math.min(Pe,zt.count));let Le=Pe-xe;if(Le<0||Le===1/0)return;Ie.setup(z,V,Nt,G,Ft);let Tn,Me=At;if(Ft!==null&&(Tn=$.get(Ft),Me=pe,Me.setIndex(Tn)),z.isMesh)V.wireframe===!0?(ft.setLineWidth(V.wireframeLinewidth*lt()),Me.setMode(P.LINES)):Me.setMode(P.TRIANGLES);else if(z.isLine){let Bt=V.linewidth;Bt===void 0&&(Bt=1),ft.setLineWidth(Bt*lt()),z.isLineSegments?Me.setMode(P.LINES):z.isLineLoop?Me.setMode(P.LINE_LOOP):Me.setMode(P.LINE_STRIP)}else z.isPoints?Me.setMode(P.POINTS):z.isSprite&&Me.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Me.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Bt=z._multiDrawStarts,Bi=z._multiDrawCounts,be=z._multiDrawCount,si=Ft?$.get(Ft).bytesPerElement:1,Ar=St.get(V).currentProgram.getUniforms();for(let kn=0;kn<be;kn++)Ar.setValue(P,"_gl_DrawID",kn),Me.render(Bt[kn]/si,Bi[kn])}else if(z.isInstancedMesh)Me.renderInstances(xe,Le,z.count);else if(G.isInstancedBufferGeometry){let Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Bi=Math.min(G.instanceCount,Bt);Me.renderInstances(xe,Le,Bi)}else Me.render(xe,Le)};function Ae(E,F,G){E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Ja(E,F,G),E.side=_s,E.needsUpdate=!0,Ja(E,F,G),E.side=An):Ja(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),d=ue.get(G),d.init(F),y.push(d),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let V=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ht=z.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){let Nt=ht[_t];Ae(Nt,G,z),V.add(Nt)}else Ae(ht,G,z),V.add(ht)}),y.pop(),d=null,V},this.compileAsync=function(E,F,G=null){let V=this.compile(E,F,G);return new Promise(z=>{function ht(){if(V.forEach(function(_t){St.get(_t).currentProgram.isReady()&&V.delete(_t)}),V.size===0){z(E);return}setTimeout(ht,10)}st.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ii=null;function Oi(E){ii&&ii(E)}function Pd(){Zs.stop()}function Ld(){Zs.start()}let Zs=new gm;Zs.setAnimationLoop(Oi),typeof self<"u"&&Zs.setContext(self),this.setAnimationLoop=function(E){ii=E,Z.setAnimationLoop(E),E===null?Zs.stop():Zs.start()},Z.addEventListener("sessionstart",Pd),Z.addEventListener("sessionend",Ld),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,I),d=ue.get(E,y.length),d.init(F),y.push(d),kt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(kt),Pt=this.localClippingEnabled,ct=rt.init(this.clippingPlanes,Pt),m=Et.get(E,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ht=x.xr.getDepthSensingMesh();ht!==null&&hh(ht,F,-1/0,x.sortObjects)}hh(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(dt,Mt),tt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,tt&&Xt.addToRenderList(m,E),this.info.render.frame++,ct===!0&&rt.beginShadows();let G=d.state.shadowsArray;Tt.render(G,E,F),ct===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,z=m.transmissive;if(d.setupLights(),F.isArrayCamera){let ht=F.cameras;if(z.length>0)for(let _t=0,Nt=ht.length;_t<Nt;_t++){let Ft=ht[_t];Ud(V,z,E,Ft)}tt&&Xt.render(E);for(let _t=0,Nt=ht.length;_t<Nt;_t++){let Ft=ht[_t];Dd(m,E,Ft,Ft.viewport)}}else z.length>0&&Ud(V,z,E,F),tt&&Xt.render(E),Dd(m,E,F);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,F),Ie.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(d=y[y.length-1],ct===!0&&rt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function hh(E,F,G,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){V&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(kt);let _t=J.update(E),Nt=E.material;Nt.visible&&m.push(E,_t,Nt,G,Yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){let _t=J.update(E),Nt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Yt.copy(_t.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(kt)),Array.isArray(Nt)){let Ft=_t.groups;for(let Kt=0,ne=Ft.length;Kt<ne;Kt++){let zt=Ft[Kt],xe=Nt[zt.materialIndex];xe&&xe.visible&&m.push(E,_t,xe,G,Yt.z,zt)}}else Nt.visible&&m.push(E,_t,Nt,G,Yt.z,null)}}let ht=E.children;for(let _t=0,Nt=ht.length;_t<Nt;_t++)hh(ht[_t],F,G,V)}function Dd(E,F,G,V){let z=E.opaque,ht=E.transmissive,_t=E.transparent;d.setupLightsView(G),ct===!0&&rt.setGlobalState(x.clippingPlanes,G),V&&ft.viewport(L.copy(V)),z.length>0&&$a(z,F,G),ht.length>0&&$a(ht,F,G),_t.length>0&&$a(_t,F,G),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Ud(E,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new rn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Wn:Ji,minFilter:rr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let ht=d.state.transmissionRenderTarget[V.id],_t=V.viewport||L;ht.setSize(_t.z,_t.w);let Nt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(H),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Xt.render(G);let Ft=x.toneMapping;x.toneMapping=xs;let Kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ct===!0&&rt.setGlobalState(x.clippingPlanes,V),$a(E,G,V),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),st.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let zt=0,xe=F.length;zt<xe;zt++){let Pe=F[zt],Le=Pe.object,Tn=Pe.geometry,Me=Pe.material,Bt=Pe.group;if(Me.side===An&&Le.layers.test(V.layers)){let Bi=Me.side;Me.side=xn,Me.needsUpdate=!0,Nd(Le,G,V,Tn,Me,Bt),Me.side=Bi,Me.needsUpdate=!0,ne=!0}}ne===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}x.setRenderTarget(Nt),x.setClearColor(H,q),Kt!==void 0&&(V.viewport=Kt),x.toneMapping=Ft}function $a(E,F,G){let V=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ht=E.length;z<ht;z++){let _t=E[z],Nt=_t.object,Ft=_t.geometry,Kt=V===null?_t.material:V,ne=_t.group;Nt.layers.test(G.layers)&&Nd(Nt,F,G,Ft,Kt,ne)}}function Nd(E,F,G,V,z,ht){E.onBeforeRender(x,F,G,V,z,ht),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,F,G,V,E,ht),z.transparent===!0&&z.side===An&&z.forceSinglePass===!1?(z.side=xn,z.needsUpdate=!0,x.renderBufferDirect(G,F,V,z,E,ht),z.side=_s,z.needsUpdate=!0,x.renderBufferDirect(G,F,V,z,E,ht),z.side=An):x.renderBufferDirect(G,F,V,z,E,ht),E.onAfterRender(x,F,G,V,z,ht)}function Ja(E,F,G){F.isScene!==!0&&(F=ge);let V=St.get(E),z=d.state.lights,ht=d.state.shadowsArray,_t=z.state.version,Nt=Dt.getParameters(E,z.state,ht,F,G),Ft=Dt.getProgramCacheKey(Nt),Kt=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?k:b).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Kt===void 0&&(E.addEventListener("dispose",ee),Kt=new Map,V.programs=Kt);let ne=Kt.get(Ft);if(ne!==void 0){if(V.currentProgram===ne&&V.lightsStateVersion===_t)return zd(E,Nt),ne}else Nt.uniforms=Dt.getUniforms(E),E.onBeforeCompile(Nt,x),ne=Dt.acquireProgram(Nt,Ft),Kt.set(Ft,ne),V.uniforms=Nt.uniforms;let zt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=rt.uniform),zd(E,Nt),V.needsLights=j0(E),V.lightsStateVersion=_t,V.needsLights&&(zt.ambientLightColor.value=z.state.ambient,zt.lightProbe.value=z.state.probe,zt.directionalLights.value=z.state.directional,zt.directionalLightShadows.value=z.state.directionalShadow,zt.spotLights.value=z.state.spot,zt.spotLightShadows.value=z.state.spotShadow,zt.rectAreaLights.value=z.state.rectArea,zt.ltc_1.value=z.state.rectAreaLTC1,zt.ltc_2.value=z.state.rectAreaLTC2,zt.pointLights.value=z.state.point,zt.pointLightShadows.value=z.state.pointShadow,zt.hemisphereLights.value=z.state.hemi,zt.directionalShadowMap.value=z.state.directionalShadowMap,zt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,zt.spotShadowMap.value=z.state.spotShadowMap,zt.spotLightMatrix.value=z.state.spotLightMatrix,zt.spotLightMap.value=z.state.spotLightMap,zt.pointShadowMap.value=z.state.pointShadowMap,zt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=ne,V.uniformsList=null,ne}function Fd(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Kr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function zd(E,F){let G=St.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function K0(E,F,G,V,z){F.isScene!==!0&&(F=ge),A.resetTextureUnits();let ht=F.fog,_t=V.isMeshStandardMaterial?F.environment:null,Nt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:uo,Ft=(V.isMeshStandardMaterial?k:b).get(V.envMap||_t),Kt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ne=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),zt=!!G.morphAttributes.position,xe=!!G.morphAttributes.normal,Pe=!!G.morphAttributes.color,Le=xs;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Le=x.toneMapping);let Tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=Tn!==void 0?Tn.length:0,Bt=St.get(V),Bi=d.state.lights;if(ct===!0&&(Pt===!0||E!==v)){let Yn=E===v&&V.id===S;rt.setState(V,E,Yn)}let be=!1;V.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Bi.state.version||Bt.outputColorSpace!==Nt||z.isBatchedMesh&&Bt.batching===!1||!z.isBatchedMesh&&Bt.batching===!0||z.isBatchedMesh&&Bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Bt.instancing===!1||!z.isInstancedMesh&&Bt.instancing===!0||z.isSkinnedMesh&&Bt.skinning===!1||!z.isSkinnedMesh&&Bt.skinning===!0||z.isInstancedMesh&&Bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Bt.instancingMorph===!1&&z.morphTexture!==null||Bt.envMap!==Ft||V.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==rt.numPlanes||Bt.numIntersection!==rt.numIntersection)||Bt.vertexAlphas!==Kt||Bt.vertexTangents!==ne||Bt.morphTargets!==zt||Bt.morphNormals!==xe||Bt.morphColors!==Pe||Bt.toneMapping!==Le||Bt.morphTargetsCount!==Me)&&(be=!0):(be=!0,Bt.__version=V.version);let si=Bt.currentProgram;be===!0&&(si=Ja(V,F,z));let Ar=!1,kn=!1,No=!1,De=si.getUniforms(),yi=Bt.uniforms;if(ft.useProgram(si.program)&&(Ar=!0,kn=!0,No=!0),V.id!==S&&(S=V.id,kn=!0),Ar||v!==E){ft.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),jg(ut),tx(ut),De.setValue(P,"projectionMatrix",ut)):De.setValue(P,"projectionMatrix",E.projectionMatrix),De.setValue(P,"viewMatrix",E.matrixWorldInverse);let as=De.map.cameraPosition;as!==void 0&&as.setValue(P,Jt.setFromMatrixPosition(E.matrixWorld)),wt.logarithmicDepthBuffer&&De.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&De.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,kn=!0,No=!0)}if(z.isSkinnedMesh){De.setOptional(P,z,"bindMatrix"),De.setOptional(P,z,"bindMatrixInverse");let Yn=z.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),De.setValue(P,"boneTexture",Yn.boneTexture,A))}z.isBatchedMesh&&(De.setOptional(P,z,"batchingTexture"),De.setValue(P,"batchingTexture",z._matricesTexture,A),De.setOptional(P,z,"batchingIdTexture"),De.setValue(P,"batchingIdTexture",z._indirectTexture,A),De.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&De.setValue(P,"batchingColorTexture",z._colorsTexture,A));let Fo=G.morphAttributes;if((Fo.position!==void 0||Fo.normal!==void 0||Fo.color!==void 0)&&Zt.update(z,G,si),(kn||Bt.receiveShadow!==z.receiveShadow)&&(Bt.receiveShadow=z.receiveShadow,De.setValue(P,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yi.envMap.value=Ft,yi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(yi.envMapIntensity.value=F.environmentIntensity),kn&&(De.setValue(P,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Q0(yi,No),ht&&V.fog===!0&&mt.refreshFogUniforms(yi,ht),mt.refreshMaterialUniforms(yi,V,Y,it,d.state.transmissionRenderTarget[E.id]),Kr.upload(P,Fd(Bt),yi,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kr.upload(P,Fd(Bt),yi,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&De.setValue(P,"center",z.center),De.setValue(P,"modelViewMatrix",z.modelViewMatrix),De.setValue(P,"normalMatrix",z.normalMatrix),De.setValue(P,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Yn=V.uniformsGroups;for(let as=0,ls=Yn.length;as<ls;as++){let Od=Yn[as];N.update(Od,si),N.bind(Od,si)}}return si}function Q0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function j0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,G){St.get(E.texture).__webglTexture=F,St.get(E.depthTexture).__webglTexture=G;let V=St.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let G=St.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){I=E,R=F,w=G;let V=!0,z=null,ht=!1,_t=!1;if(E){let Ft=St.get(E);if(Ft.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ft.__hasExternalTextures)A.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let zt=E.depthTexture;if(Ft.__boundDepthTexture!==zt){if(zt!==null&&St.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Kt=E.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(_t=!0);let ne=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ne[F])?z=ne[F][G]:z=ne[F],ht=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=St.get(E).__webglMultisampledFramebuffer:Array.isArray(ne)?z=ne[G]:z=ne,L.copy(E.viewport),B.copy(E.scissor),O=E.scissorTest}else L.copy(Rt).multiplyScalar(Y).floor(),B.copy(Qt).multiplyScalar(Y).floor(),O=ye;if(ft.bindFramebuffer(P.FRAMEBUFFER,z)&&V&&ft.drawBuffers(E,z),ft.viewport(L),ft.scissor(B),ft.setScissorTest(O),ht){let Ft=St.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ft.__webglTexture,G)}else if(_t){let Ft=St.get(E.texture),Kt=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,G||0,Kt)}S=-1},this.readRenderTargetPixels=function(E,F,G,V,z,ht,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Nt=Nt[_t]),Nt){ft.bindFramebuffer(P.FRAMEBUFFER,Nt);try{let Ft=E.texture,Kt=Ft.format,ne=Ft.type;if(!wt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&G>=0&&G<=E.height-z&&P.readPixels(F,G,V,z,se.convert(Kt),se.convert(ne),ht)}finally{let Ft=I!==null?St.get(I).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,V,z,ht,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Nt=Nt[_t]),Nt){let Ft=E.texture,Kt=Ft.format,ne=Ft.type;if(!wt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-V&&G>=0&&G<=E.height-z){ft.bindFramebuffer(P.FRAMEBUFFER,Nt);let zt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.bufferData(P.PIXEL_PACK_BUFFER,ht.byteLength,P.STREAM_READ),P.readPixels(F,G,V,z,se.convert(Kt),se.convert(ne),0);let xe=I!==null?St.get(I).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,xe);let Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Qg(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ht),P.deleteBuffer(zt),P.deleteSync(Pe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let V=Math.pow(2,-G),z=Math.floor(E.image.width*V),ht=Math.floor(E.image.height*V),_t=F!==null?F.x:0,Nt=F!==null?F.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,_t,Nt,z,ht),ft.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,V=null,z=0){E.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let ht,_t,Nt,Ft,Kt,ne,zt,xe,Pe,Le=E.isCompressedTexture?E.mipmaps[z]:E.image;G!==null?(ht=G.max.x-G.min.x,_t=G.max.y-G.min.y,Nt=G.isBox3?G.max.z-G.min.z:1,Ft=G.min.x,Kt=G.min.y,ne=G.isBox3?G.min.z:0):(ht=Le.width,_t=Le.height,Nt=Le.depth||1,Ft=0,Kt=0,ne=0),V!==null?(zt=V.x,xe=V.y,Pe=V.z):(zt=0,xe=0,Pe=0);let Tn=se.convert(F.format),Me=se.convert(F.type),Bt;F.isData3DTexture?(A.setTexture3D(F,0),Bt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Bt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let Bi=P.getParameter(P.UNPACK_ROW_LENGTH),be=P.getParameter(P.UNPACK_IMAGE_HEIGHT),si=P.getParameter(P.UNPACK_SKIP_PIXELS),Ar=P.getParameter(P.UNPACK_SKIP_ROWS),kn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ne);let No=E.isDataArrayTexture||E.isData3DTexture,De=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let yi=St.get(E),Fo=St.get(F),Yn=St.get(yi.__renderTarget),as=St.get(Fo.__renderTarget);ft.bindFramebuffer(P.READ_FRAMEBUFFER,Yn.__webglFramebuffer),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let ls=0;ls<Nt;ls++)No&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(E).__webglTexture,z,ne+ls),E.isDepthTexture?(De&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.get(F).__webglTexture,z,Pe+ls),P.blitFramebuffer(Ft,Kt,ht,_t,zt,xe,ht,_t,P.DEPTH_BUFFER_BIT,P.NEAREST)):De?P.copyTexSubImage3D(Bt,z,zt,xe,Pe+ls,Ft,Kt,ht,_t):P.copyTexSubImage2D(Bt,z,zt,xe,Pe+ls,Ft,Kt,ht,_t);ft.bindFramebuffer(P.READ_FRAMEBUFFER,null),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else De?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Bt,z,zt,xe,Pe,ht,_t,Nt,Tn,Me,Le.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,z,zt,xe,Pe,ht,_t,Nt,Tn,Le.data):P.texSubImage3D(Bt,z,zt,xe,Pe,ht,_t,Nt,Tn,Me,Le):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,zt,xe,ht,_t,Tn,Me,Le.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,zt,xe,Le.width,Le.height,Tn,Le.data):P.texSubImage2D(P.TEXTURE_2D,z,zt,xe,ht,_t,Tn,Me,Le);P.pixelStorei(P.UNPACK_ROW_LENGTH,Bi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be),P.pixelStorei(P.UNPACK_SKIP_PIXELS,si),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ar),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kn),z===0&&F.generateMipmaps&&P.generateMipmap(Bt),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,V=null,z=0){return E.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0),Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,G,V,z)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,ft.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Yl=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zl=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},$l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new C,ra=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ro=class extends Qi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gr,Ho=new C,Vr=new C,Wr=new C,Xr=new nt,Go=new nt,Mm=new me,_l=new C,Vo=new C,vl=new C,Op=new nt,Bh=new nt,Bp=new nt,oa=class extends on{constructor(t=new ro){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $l(e,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new ra(i,3,0,!1)),Gr.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=Gr,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),Mm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;yl(_l.set(-.5,-.5,0),Wr,o,Vr,s,r),yl(Vo.set(.5,-.5,0),Wr,o,Vr,s,r),yl(vl.set(.5,.5,0),Wr,o,Vr,s,r),Op.set(0,0),Bh.set(1,0),Bp.set(1,1);let a=t.ray.intersectTriangle(_l,Vo,vl,!1,Ho);if(a===null&&(yl(Vo.set(-.5,.5,0),Wr,o,Vr,s,r),Bh.set(0,1),a=t.ray.intersectTriangle(_l,vl,Vo,!1,Ho),a===null))return;let l=t.ray.origin.distanceTo(Ho);l<t.near||l>t.far||e.push({distance:l,point:Ho.clone(),uv:gs.getInterpolation(Ho,_l,Vo,vl,Op,Bh,Bp,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yl(n,t,e,i,s,r){Xr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Go.x=r*Xr.x-s*Xr.y,Go.y=s*Xr.x+r*Xr.y):Go.copy(Xr),n.copy(t),n.x+=Go.x,n.y+=Go.y,n.applyMatrix4(Mm)}var aa=class extends Rn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=_n,h=_n,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var la=class extends _e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qr=new me,kp=new me,Ml=[],Hp=new Ki,YM=new me,Wo=new le,Xo=new ys,ji=class extends le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,YM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,qr),Hp.copy(t.boundingBox).applyMatrix4(qr),this.boundingBox.union(Hp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,qr),Xo.copy(t.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Xo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),t.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),kp.multiplyMatrices(i,qr),Wo.matrixWorld=kp,Wo.raycast(t,Ml);for(let o=0,a=Ml.length;o<a;o++){let l=Ml[o];l.instanceId=r,l.object=this,e.push(l)}Ml.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(s*this.count),s,this.count,va,Ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ca=class extends Qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gp=new me,Yu=new Ol,bl=new ys,Sl=new C,oo=class extends on{constructor(t=new Ue,e=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),bl.radius+=r,t.ray.intersectsSphere(bl)===!1)return;Gp.copy(s).invert(),Yu.copy(t.ray).applyMatrix4(Gp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);Sl.fromBufferAttribute(u,m),Vp(Sl,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Sl.fromBufferAttribute(u,g),Vp(Sl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vp(n,t,e,i,s,r,o){let a=Yu.distanceSqToPoint(n);if(a<e){let l=new C;Yu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ao=class extends Rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,s=[],r=[],o=[],a=new C,l=new me;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(sn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(sn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ha=class extends Jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zu=class extends ha{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function If(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var El=new C,kh=new If,Hh=new If,Gh=new If,$u=class extends Jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(El.subVectors(s[0],s[1]).add(s[0]),c=El);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(El.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=El),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),kh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Hh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Gh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Hh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Gh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(kh.calc(l),Hh.calc(l),Gh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wp(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ZM(n,t){let e=1-n;return e*e*t}function $M(n,t){return 2*(1-n)*n*t}function JM(n,t){return n*n*t}function Qo(n,t,e,i){return ZM(n,t)+$M(n,e)+JM(n,i)}function KM(n,t){let e=1-n;return e*e*e*t}function QM(n,t){let e=1-n;return 3*e*e*n*t}function jM(n,t){return 3*(1-n)*n*n*t}function t1(n,t){return n*n*n*t}function jo(n,t,e,i,s){return KM(n,t)+QM(n,e)+jM(n,i)+t1(n,s)}var Jl=class extends Jn{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jo(t,s.x,r.x,o.x,a.x),jo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ju=class extends Jn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jo(t,s.x,r.x,o.x,a.x),jo(t,s.y,r.y,o.y,a.y),jo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kl=class extends Jn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ku=class extends Jn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ql=class extends Jn{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qo(t,s.x,r.x,o.x),Qo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qu=class extends Jn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qo(t,s.x,r.x,o.x),Qo(t,s.y,r.y,o.y),Qo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wp(a,l.x,c.x,h.x,u.x),Wp(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},ju=Object.freeze({__proto__:null,ArcCurve:Zu,CatmullRomCurve3:$u,CubicBezierCurve:Jl,CubicBezierCurve3:Ju,EllipseCurve:ha,LineCurve:Kl,LineCurve3:Ku,QuadraticBezierCurve:Ql,QuadraticBezierCurve3:Qu,SplineCurve:jl}),tf=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ju[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ju[s.type]().fromJSON(s))}return this}},tc=class extends tf{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Kl(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ql(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Jl(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new jl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new ha(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ec=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},we=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=i/2,d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(p,2));function M(){let x=new C,D=new C,R=0,w=(e-t)/i;for(let I=0;I<=r;I++){let S=[],v=I/r,L=v*(e-t)+t;for(let B=0;B<=s;B++){let O=B/s,H=O*l+a,q=Math.sin(H),X=Math.cos(H);D.x=L*q,D.y=-v*i+m,D.z=L*X,u.push(D.x,D.y,D.z),x.set(q,w,X).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-v),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let v=_[S][I],L=_[S+1][I],B=_[S+1][I+1],O=_[S][I+1];(t>0||S!==0)&&(h.push(v,L,O),R+=3),(e>0||S!==r-1)&&(h.push(L,B,O),R+=3)}c.addGroup(d,R,0),d+=R}function y(x){let D=g,R=new nt,w=new C,I=0,S=x===!0?t:e,v=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let H=B/s*l+a,q=Math.cos(H),X=Math.sin(H);w.x=S*X,w.y=m*v,w.z=S*q,u.push(w.x,w.y,w.z),f.push(0,v,0),R.x=q*.5+.5,R.y=X*.5*v+.5,p.push(R.x,R.y),g++}for(let B=0;B<s;B++){let O=D+B,H=L+B;x===!0?h.push(H,H+1,O):h.push(H+1,H,O),I+=3}c.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},an=class n extends we{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class n extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new C,x=new C,D=new C;for(let R=0;R<e.length;R+=3)p(e[R+0],y),p(e[R+1],x),p(e[R+2],D),l(y,x,D,M)}function l(M,y,x,D){let R=D+1,w=[];for(let I=0;I<=R;I++){w[I]=[];let S=M.clone().lerp(x,I/R),v=y.clone().lerp(x,I/R),L=R-I;for(let B=0;B<=L;B++)B===0&&I===R?w[I][B]=S:w[I][B]=S.clone().lerp(v,B/L)}for(let I=0;I<R;I++)for(let S=0;S<2*(R-I)-1;S++){let v=Math.floor(S/2);S%2===0?(f(w[I][v+1]),f(w[I+1][v]),f(w[I][v])):(f(w[I][v+1]),f(w[I+1][v+1]),f(w[I+1][v]))}}function c(M){let y=new C;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let M=new C;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let x=m(M)/2/Math.PI+.5,D=d(M)/Math.PI+.5;o.push(x,1-D)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],x=o[M+2],D=o[M+4],R=Math.max(y,x,D),w=Math.min(y,x,D);R>.9&&w<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),D<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,y){let x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let M=new C,y=new C,x=new C,D=new C,R=new nt,w=new nt,I=new nt;for(let S=0,v=0;S<r.length;S+=9,v+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),R.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),D.copy(M).add(y).add(x).divideScalar(3);let L=m(D);_(R,v+0,M,L),_(w,v+2,y,L),_(I,v+4,x,L)}}function _(M,y,x,D){D<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},nc=class n extends ua{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var fa=class extends tc{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new tc().fromJSON(s))}return this}},e1={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=bm(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(i&&(r=o1(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return da(r,o,e,a,l,p,0),o}};function bm(n,t,e,i,s){let r,o;if(s===x1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Xp(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Xp(r,n[r],n[r+1],o);return o&&pc(o,o.next)&&(ma(o),o=o.next),o}function ar(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(pc(e,e.next)||Be(e.prev,e,e.next)===0)){if(ma(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function da(n,t,e,i,s,r,o){if(!n)return;!o&&r&&u1(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?i1(n,i,s,r):n1(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ma(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=s1(ar(n),t,e),da(n,t,e,i,s,r,2)):o===2&&r1(n,t,e,i,s,r):da(ar(n),t,e,i,s,r,1);break}}}function n1(n){let t=n.prev,e=n,i=n.next;if(Be(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Zr(s,a,r,l,o,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i1(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=ef(p,g,t,e,i),M=ef(_,m,t,e,i),y=n.prevZ,x=n.nextZ;for(;y&&y.z>=d&&x&&x.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Zr(a,h,l,u,c,f,y.x,y.y)&&Be(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zr(a,h,l,u,c,f,x.x,x.y)&&Be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Zr(a,h,l,u,c,f,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zr(a,h,l,u,c,f,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function s1(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!pc(s,r)&&Sm(s,i,i.next,r)&&pa(s,r)&&pa(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ma(i),ma(i.next),i=n=r),i=i.next}while(i!==n);return ar(i)}function r1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&p1(o,a)){let l=Em(o,a);o=ar(o,o.next),l=ar(l,l.next),da(o,t,e,i,s,r,0),da(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function o1(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=bm(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(d1(c));for(s.sort(a1),r=0;r<s.length;r++)e=l1(s[r],e);return e}function a1(n,t){return n.x-t.x}function l1(n,t){let e=c1(n,t);if(!e)return t;let i=Em(e,n);return ar(i,i.next),ar(e,e.next)}function c1(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),pa(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&h1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function h1(n,t){return Be(n.prev,n,t.prev)<0&&Be(t.next,n,n.next)<0}function u1(n,t,e,i){let s=n;do s.z===0&&(s.z=ef(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,f1(s)}function f1(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function ef(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function d1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function p1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!m1(n,t)&&(pa(n,t)&&pa(t,n)&&g1(n,t)&&(Be(n.prev,n,t.prev)||Be(n,t.prev,t))||pc(n,t)&&Be(n.prev,n,n.next)>0&&Be(t.prev,t,t.next)>0)}function Be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function pc(n,t){return n.x===t.x&&n.y===t.y}function Sm(n,t,e,i){let s=Tl(Be(n,t,e)),r=Tl(Be(n,t,i)),o=Tl(Be(e,i,n)),a=Tl(Be(e,i,t));return!!(s!==r&&o!==a||s===0&&wl(n,e,t)||r===0&&wl(n,i,t)||o===0&&wl(e,n,i)||a===0&&wl(e,t,i))}function wl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Tl(n){return n>0?1:n<0?-1:0}function m1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function pa(n,t){return Be(n.prev,n,n.next)<0?Be(n,t,n.next)>=0&&Be(n,n.prev,t)>=0:Be(n,t,n.prev)<0||Be(n,n.next,t)<0}function g1(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Em(n,t){let e=new nf(n.i,n.x,n.y),i=new nf(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Xp(n,t,e,i){let s=new nf(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ma(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nf(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ta=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];qp(t),Yp(i,t);let o=t.length;e.forEach(qp);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Yp(i,e[l]);let a=e1.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function qp(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Yp(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ic=class n extends Ue{constructor(t=new fa([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:_1,y,x=!1,D,R,w,I;d&&(y=d.getSpacedPoints(h),x=!0,f=!1,D=d.computeFrenetFrames(h,!1),R=new C,w=new C,I=new C),f||(m=0,p=0,g=0,_=0);let S=a.extractPoints(c),v=S.shape,L=S.holes;if(!ta.isClockWise(v)){v=v.reverse();for(let tt=0,lt=L.length;tt<lt;tt++){let P=L[tt];ta.isClockWise(P)&&(L[tt]=P.reverse())}}let O=ta.triangulateShape(v,L),H=v;for(let tt=0,lt=L.length;tt<lt;tt++){let P=L[tt];v=v.concat(P)}function q(tt,lt,P){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(lt,P)}let X=v.length,it=O.length;function Y(tt,lt,P){let Ot,st,wt,ft=tt.x-lt.x,Wt=tt.y-lt.y,St=P.x-tt.x,A=P.y-tt.y,b=ft*ft+Wt*Wt,k=ft*A-Wt*St;if(Math.abs(k)>Number.EPSILON){let $=Math.sqrt(b),et=Math.sqrt(St*St+A*A),J=lt.x-Wt/$,Dt=lt.y+ft/$,mt=P.x-A/et,Et=P.y+St/et,ue=((mt-J)*A-(Et-Dt)*St)/(ft*A-Wt*St);Ot=J+ft*ue-tt.x,st=Dt+Wt*ue-tt.y;let rt=Ot*Ot+st*st;if(rt<=2)return new nt(Ot,st);wt=Math.sqrt(rt/2)}else{let $=!1;ft>Number.EPSILON?St>Number.EPSILON&&($=!0):ft<-Number.EPSILON?St<-Number.EPSILON&&($=!0):Math.sign(Wt)===Math.sign(A)&&($=!0),$?(Ot=-Wt,st=ft,wt=Math.sqrt(b)):(Ot=ft,st=Wt,wt=Math.sqrt(b/2))}return new nt(Ot/wt,st/wt)}let dt=[];for(let tt=0,lt=H.length,P=lt-1,Ot=tt+1;tt<lt;tt++,P++,Ot++)P===lt&&(P=0),Ot===lt&&(Ot=0),dt[tt]=Y(H[tt],H[P],H[Ot]);let Mt=[],Rt,Qt=dt.concat();for(let tt=0,lt=L.length;tt<lt;tt++){let P=L[tt];Rt=[];for(let Ot=0,st=P.length,wt=st-1,ft=Ot+1;Ot<st;Ot++,wt++,ft++)wt===st&&(wt=0),ft===st&&(ft=0),Rt[Ot]=Y(P[Ot],P[wt],P[ft]);Mt.push(Rt),Qt=Qt.concat(Rt)}for(let tt=0;tt<m;tt++){let lt=tt/m,P=p*Math.cos(lt*Math.PI/2),Ot=g*Math.sin(lt*Math.PI/2)+_;for(let st=0,wt=H.length;st<wt;st++){let ft=q(H[st],dt[st],Ot);ut(ft.x,ft.y,-P)}for(let st=0,wt=L.length;st<wt;st++){let ft=L[st];Rt=Mt[st];for(let Wt=0,St=ft.length;Wt<St;Wt++){let A=q(ft[Wt],Rt[Wt],Ot);ut(A.x,A.y,-P)}}}let ye=g+_;for(let tt=0;tt<X;tt++){let lt=f?q(v[tt],Qt[tt],ye):v[tt];x?(w.copy(D.normals[0]).multiplyScalar(lt.x),R.copy(D.binormals[0]).multiplyScalar(lt.y),I.copy(y[0]).add(w).add(R),ut(I.x,I.y,I.z)):ut(lt.x,lt.y,0)}for(let tt=1;tt<=h;tt++)for(let lt=0;lt<X;lt++){let P=f?q(v[lt],Qt[lt],ye):v[lt];x?(w.copy(D.normals[tt]).multiplyScalar(P.x),R.copy(D.binormals[tt]).multiplyScalar(P.y),I.copy(y[tt]).add(w).add(R),ut(I.x,I.y,I.z)):ut(P.x,P.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){let lt=tt/m,P=p*Math.cos(lt*Math.PI/2),Ot=g*Math.sin(lt*Math.PI/2)+_;for(let st=0,wt=H.length;st<wt;st++){let ft=q(H[st],dt[st],Ot);ut(ft.x,ft.y,u+P)}for(let st=0,wt=L.length;st<wt;st++){let ft=L[st];Rt=Mt[st];for(let Wt=0,St=ft.length;Wt<St;Wt++){let A=q(ft[Wt],Rt[Wt],Ot);x?ut(A.x,A.y+y[h-1].y,y[h-1].x+P):ut(A.x,A.y,u+P)}}}K(),ct();function K(){let tt=s.length/3;if(f){let lt=0,P=X*lt;for(let Ot=0;Ot<it;Ot++){let st=O[Ot];kt(st[2]+P,st[1]+P,st[0]+P)}lt=h+m*2,P=X*lt;for(let Ot=0;Ot<it;Ot++){let st=O[Ot];kt(st[0]+P,st[1]+P,st[2]+P)}}else{for(let lt=0;lt<it;lt++){let P=O[lt];kt(P[2],P[1],P[0])}for(let lt=0;lt<it;lt++){let P=O[lt];kt(P[0]+X*h,P[1]+X*h,P[2]+X*h)}}i.addGroup(tt,s.length/3-tt,0)}function ct(){let tt=s.length/3,lt=0;Pt(H,lt),lt+=H.length;for(let P=0,Ot=L.length;P<Ot;P++){let st=L[P];Pt(st,lt),lt+=st.length}i.addGroup(tt,s.length/3-tt,1)}function Pt(tt,lt){let P=tt.length;for(;--P>=0;){let Ot=P,st=P-1;st<0&&(st=tt.length-1);for(let wt=0,ft=h+m*2;wt<ft;wt++){let Wt=X*wt,St=X*(wt+1),A=lt+Ot+Wt,b=lt+st+Wt,k=lt+st+St,$=lt+Ot+St;Jt(A,b,k,$)}}}function ut(tt,lt,P){l.push(tt),l.push(lt),l.push(P)}function kt(tt,lt,P){Yt(tt),Yt(lt),Yt(P);let Ot=s.length/3,st=M.generateTopUV(i,s,Ot-3,Ot-2,Ot-1);ge(st[0]),ge(st[1]),ge(st[2])}function Jt(tt,lt,P,Ot){Yt(tt),Yt(lt),Yt(Ot),Yt(lt),Yt(P),Yt(Ot);let st=s.length/3,wt=M.generateSideWallUV(i,s,st-6,st-3,st-2,st-1);ge(wt[0]),ge(wt[1]),ge(wt[3]),ge(wt[1]),ge(wt[2]),ge(wt[3])}function Yt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function ge(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return v1(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ju[s.type]().fromJSON(s)),new n(i,t.options)}},_1={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(f,1-g),new nt(_,1-d)]:[new nt(a,1-l),new nt(h,1-u),new nt(p,1-g),new nt(m,1-d)]}};function v1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ri=class n extends ua{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},sc=class n extends ua{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Vn=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let M=[],y=d/i,x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let R=D/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(R+x,1-y),M.push(c++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){let y=h[d][M+1],x=h[d][M],D=h[d+1][M],R=h[d+1][M+1];(d!==0||o>0)&&p.push(y,x,R),(d!==i-1||l<Math.PI)&&p.push(x,D,R)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lo=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var rc=class extends ke{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var ga=class extends Qi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new at(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Al(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function y1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var co=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sf=class extends co{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gd,endingEnd:Gd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vd:r=t,a=2*e-i;break;case Wd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vd:o=t,l=2*i-e;break;case Wd:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let D=0;D!==a;++D)r[D]=d*o[h+D]+M*o[c+D]+y*o[l+D]+x*o[u+D];return r}},rf=class extends co{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},of=class extends co{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Al(e,this.TimeBufferType),this.values=Al(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Al(t.times,Array),values:Al(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new of(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dl:e=this.InterpolantFactoryMethodDiscrete;break;case Cu:e=this.InterpolantFactoryMethodLinear;break;case fh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return Cu;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&y1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Cu;var lr=class extends fi{constructor(t,e,i){super(t,e,i)}};lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Dl;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var af=class extends fi{};af.prototype.ValueTypeName="color";var lf=class extends fi{};lf.prototype.ValueTypeName="number";var cf=class extends co{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},oc=class extends fi{InterpolantFactoryMethodLinear(t){return new cf(this.times,this.values,this.getValueSize(),t)}};oc.prototype.ValueTypeName="quaternion";oc.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends fi{constructor(t,e,i){super(t,e,i)}};cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Dl;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var hf=class extends fi{};hf.prototype.ValueTypeName="vector";var uf=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},M1=new uf,ff=class{constructor(t){this.manager=t!==void 0?t:M1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ff.DEFAULT_MATERIAL_NAME="__DEFAULT";var xa=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ac=class extends xa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Vh=new me,Zp=new C,$p=new C,lc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Zp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zp),$p.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($p),e.updateMatrixWorld(),Vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jp=new me,qo=new C,Wh=new C,df=class extends lc{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qo.setFromMatrixPosition(t.matrixWorld),i.position.copy(qo),Wh.copy(i.position),Wh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Wh),i.updateMatrixWorld(),s.makeTranslation(-qo.x,-qo.y,-qo.z),Jp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jp)}},cc=class extends xa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new df}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pf=class extends lc{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hc=class extends xa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new pf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ho=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Kp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Kp(){return performance.now()}var Pf="\\[\\]\\.:\\/",b1=new RegExp("["+Pf+"]","g"),Lf="[^"+Pf+"]",S1="[^"+Pf.replace("\\.","")+"]",E1=/((?:WC+[\/:])*)/.source.replace("WC",Lf),w1=/(WCOD+)?/.source.replace("WCOD",S1),T1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lf),A1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lf),R1=new RegExp("^"+E1+w1+T1+A1+"$"),C1=["material","materials","bones","map"],mf=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b1,"")}static parseTrackName(t){let e=R1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);C1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=mf;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function In(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var YE=In(20954),Df=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],hr=class{constructor(t=1337){let e=In(t);this.perm=new Uint8Array(512);let i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(t,e){let i=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=0,o=0,a=0,l=(t+e)*i,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*s,f=t-(c-u),p=e-(h-u),g=f>p?1:0,_=f>p?0:1,m=f-g+s,d=p-_+s,M=f-1+2*s,y=p-1+2*s,x=c&255,D=h&255,R=.5-f*f-p*p;if(R>=0){let S=Df[this.perm[x+this.perm[D]]%8];R*=R,r=R*R*(S[0]*f+S[1]*p)}let w=.5-m*m-d*d;if(w>=0){let S=Df[this.perm[x+g+this.perm[D+_]]%8];w*=w,o=w*w*(S[0]*m+S[1]*d)}let I=.5-M*M-y*y;if(I>=0){let S=Df[this.perm[x+1+this.perm[D+1]]%8];I*=I,a=I*I*(S[0]*M+S[1]*y)}return 70*(r+o+a)}fbm(t,e,i=4,s=2,r=.5){let o=.5,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise(t*a,e*a),c+=o,o*=r,a*=s;return l/c}},qt=(n,t,e)=>Math.min(e,Math.max(t,n)),vt=(n,t,e)=>n+(t-n)*e,Vt=(n,t,e)=>{let i=qt((e-n)/(t-n),0,1);return i*i*(3-2*i)},Lt=(n,t,e,i)=>vt(n,t,1-Math.exp(-e*i)),mc=(n,t)=>{let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},Ii=(n,t,e,i)=>n+mc(n,t)*(1-Math.exp(-e*i)),Uf=null;function wm(){if(Uf)return Uf;let n=new Uint8Array([90,150,210,255]),t=new aa(n,4,1,va);return t.minFilter=_n,t.magFilter=_n,t.needsUpdate=!0,Uf=t,t}function ce(n,t={}){return new ga({color:n,gradientMap:wm(),...t})}function Pn(n,t=1.2,e={}){return new ga({color:n,gradientMap:wm(),emissive:new at(n),emissiveIntensity:t,...e})}function bs(n,t){let e=document.createElement("canvas");e.width=e.height=n;let i=e.getContext("2d");t(i,n);let s=new ao(e);return s.colorSpace=nn,s}function ot(n,t,e=0,i=0,s=0,r=null){let o=new le(n,t);return o.position.set(e,i,s),o.castShadow=!0,r&&r.add(o),o}var Pi={v1:new C,v2:new C,v3:new C,q1:new Cn,c1:new at};var Ea={};Mi(Ea,{init:()=>W1,update:()=>X1});function ts(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ue,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Tm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);let g=Tm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Tm(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new _e(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Li=-4,Di={x:0,z:-650},Dn={x:550,z:-450},_c={x:-450,z:350},Ts={x:450,z:150},Ss={x:-190,z:-60},xc=24,Am=52;var I1=new hr(9001),gc=new hr(4242),P1=new hr(777),Rm=new hr(3131),vc=[{x:180,z:80,r:12,h:0},{x:-360,z:260,r:12,h:0},{x:430,z:40,r:12,h:0},{x:430,z:-300,r:12,h:0},{x:0,z:250,r:15,h:0}],Pm=!1;function Lm(n,t){let e=Math.max(Math.abs(n),Math.abs(t));if(e>1350)return-16;let i=3.5+I1.fbm(n*.0016,t*.0016,3)*7+gc.fbm(n*.0062,t*.0062,4)*2.4,s=n-Ts.x,r=t-Ts.z,o=Math.sqrt(s*s+r*r);if(o<250){let m=1-Vt(110,245,o);i+=m*(gc.fbm(n*.01,t*.01,3)*5+2)}let a=n-Dn.x,l=t-Dn.z,c=Math.sqrt(a*a+l*l);if(c<260){let m=Math.max(0,1-c/235);if(m>0){let d=Math.pow(m,1.5)*96;d+=P1.fbm(n*.02,t*.02,3)*7*Math.min(1,m*2.4)*Vt(16,42,c);let M=(1-Vt(20,52,c))*56;i+=Math.max(0,d-M)}}let h=n-_c.x,u=t-_c.z,f=Math.sqrt(h*h+u*u);if(f<180){let m=1-Vt(55,175,f),d=-10.5+gc.fbm(n*.011,t*.011,2)*1.6;i=vt(i,d,Math.pow(m,1.15))}let p=n-Di.x,g=t-Di.z,_=Math.sqrt(p*p+g*g);if(_<210){let m=1-Vt(115,200,_),d=xc+gc.fbm(n*.008,t*.008,3)*1.1;i=vt(i,d,m)}if(t<-320&&t>-610&&Math.abs(n)<70){let m=Vt(-350,-530,t),d=1-Vt(26,62,Math.abs(n)),M=vt(4.5,xc,m);i=vt(i,M,d*Vt(-322,-352,t))}{let m=1-Vt(60,84,Math.abs(n)),d=Vt(-500,-524,t)*(1-Vt(-644,-672,t)),M=m*d;M>0&&(i=vt(i,xc,M))}return e>950&&(i=vt(i,-16,Vt(950,1180,e))),i}function $e(n,t){let e=Lm(n,t);if(Pm)for(let i=0;i<vc.length;i++){let s=vc[i],r=n-s.x,o=t-s.z,a=r*r+o*o,l=s.r+16;if(a<l*l){let c=1-Vt(s.r,l,Math.sqrt(a));e=vt(e,s.h,c)}}return e}function L1(){for(let n of vc)n.h=Lm(n.x,n.z);Pm=!0}function ws(n,t){return Math.hypot(n-Di.x,t-Di.z)<205||Math.abs(n)<70&&t<-500&&t>-672?"castle":Math.hypot(n-Dn.x,t-Dn.z)<235?"volcano":Math.hypot(n-_c.x,t-_c.z)<178?"lake":Math.hypot(n-Ts.x,t-Ts.z)<215?"forest":Math.hypot(n-Ss.x,t-Ss.z)<95?"ruins":"plains"}function D1(n,t){let i=$e(n+1.6,t)-$e(n-1.6,t),s=$e(n,t+1.6)-$e(n,t-1.6);return Math.sqrt(i*i+s*s)/(2*1.6)}var Cm=[[[0,258],[7,180],[-10,100],[-6,20],[8,-90],[2,-210],[0,-330],[0,-470],[0,-572]],[[-4,62],[84,66],[172,78]],[[-2,242],[-120,254],[-244,264],[-350,261]],[[1,4],[142,16],[292,28],[420,38]],[[1,-302],[152,-308],[302,-303],[420,-300]]];function U1(n,t,e,i,s,r){let o=s-e,a=r-i,l=qt(((n-e)*o+(t-i)*a)/(o*o+a*a),0,1),c=n-(e+o*l),h=t-(i+a*l);return Math.sqrt(c*c+h*h)}function Dm(n,t){let e=1e9;for(let i=0;i<Cm.length;i++){let s=Cm[i];for(let r=0;r<s.length-1;r++){let o=U1(n,t,s[r][0],s[r][1],s[r+1][0],s[r+1][1]);o<e&&(e=o)}}return e}var yc=new me,Mc=new Cn,bc=new hi,Sc=new C,Ec=new C;function Sa(n){return n.computeVertexNormals(),n}function vn(n,t){let e=new at(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new _e(s,3)),n}function jt(n,t,e,i,s,r=0,o=0,a=0,l=1,c=1,h=1){let u=t.index?t.toNonIndexed():t.clone();return bc.set(r,o,a),Mc.setFromEuler(bc),Sc.set(e,i,s),Ec.set(l,c,h),yc.compose(Sc,Mc,Ec),u.applyMatrix4(yc),n.push(u),u}function wc(n,t,e,i,s,r,o,a,l){bc.set(0,r,0),Mc.setFromEuler(bc),Sc.set(e,i,s),Ec.set(o,a,l),yc.compose(Sc,Mc,Ec),n.setMatrixAt(t,yc)}var Ln={grassA:new at(7319130),grassB:new at(6265933),grassC:new at(8370790),forest:new at(4620102),forestDeep:new at(3830341),rock:new at(9078135),rockDark:new at(7301726),volcano:new at(7027246),scorch:new at(4531740),sand:new at(13218179),bed:new at(9405544),road:new at(13480575),plaza:new at(10130045)};function N1(n){let s=new ui(2e3,2e3,300,300);s.rotateX(-Math.PI/2);let r=s.attributes.position,o=r.count,a=new Float32Array(o);for(let _=0;_<o;_++){let m=$e(r.getX(_),r.getZ(_));a[_]=m,r.setY(_,m)}let l=2e3/300,c=_=>{let m=_%301,d=_/301|0,M=a[d*301+Math.max(0,m-1)],y=a[d*301+Math.min(300,m+1)],x=a[Math.max(0,d-1)*301+m],D=a[Math.min(300,d+1)*301+m],R=(y-M)/(2*l),w=(D-x)/(2*l);return Math.sqrt(R*R+w*w)},h=new Float32Array(o*3),u=new at;for(let _=0;_<o;_++){let m=r.getX(_),d=r.getZ(_),M=a[_],y=c(_),x=Rm.fbm(m*.02,d*.02,2),D=Rm.noise(m*.11+50,d*.11-30);u.copy(Ln.grassA),x>.12?u.lerp(Ln.grassC,Vt(.12,.6,x)):x<-.12&&u.lerp(Ln.grassB,Vt(-.12,-.6,x));let R=Math.hypot(m-Ts.x,d-Ts.z);if(R<250){let v=1-Vt(120,240,R);u.lerp(D>0?Ln.forest:Ln.forestDeep,v*.85)}let w=Math.hypot(m-Dn.x,d-Dn.z);if(w<250){let v=1-Vt(150,240,w);u.lerp(Ln.volcano,v*.95),u.lerp(Ln.scorch,v*Vt(28,62,M)*.85),D>.25&&v>.5&&u.lerp(Ln.rockDark,.35)}if(M<Li+2.4){let v=1-Vt(Li+.2,Li+2.4,M);u.lerp(Ln.sand,v),M<Li-.8&&u.lerp(Ln.bed,Vt(Li-.8,Li-5,M))}let I=Vt(.5,.95,y);I>0&&u.lerp(w<240?Ln.rockDark:Ln.rock,I*.8);{let v=1-Vt(58,80,Math.abs(m)),L=Vt(-504,-524,d)*(1-Vt(-640,-668,d)),B=v*L;B>0&&u.lerp(Ln.plaza,B*(.75+D*.15))}if(M>Li+.3){let v=Dm(m,d);if(v<6.5){let L=1-Vt(2.8,6,v);u.lerp(Ln.road,L*(.82+D*.12))}}let S=1+D*.045;h[_*3]=u.r*S,h[_*3+1]=u.g*S,h[_*3+2]=u.b*S}s.setAttribute("color",new _e(h,3));let f=s.toNonIndexed();f.computeVertexNormals(),s.dispose();let p=ce(16777215,{vertexColors:!0}),g=new le(f,p);return g.receiveShadow=!0,g.name="terrain",n.scene.add(g),g}var Um={value:0};function F1(n){let t=new ui(4800,4800,120,120);t.rotateX(-Math.PI/2);let e=ce(4165552,{transparent:!0,opacity:.72});e.onBeforeCompile=r=>{r.uniforms.uTime=Um,r.vertexShader=`uniform float uTime;
`+r.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        {
          float ddx = 0.009 * cos(position.x * 0.045 + uTime * 0.9)
                    + 0.0059 * cos((position.x + position.z) * 0.021 + uTime * 0.45);
          float ddz = -0.0104 * sin(position.z * 0.052 + uTime * 0.7)
                    + 0.0059 * cos((position.x + position.z) * 0.021 + uTime * 0.45);
          objectNormal = normalize(vec3(-ddx * 14.0, 1.0, -ddz * 14.0));
        }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y += sin(position.x * 0.045 + uTime * 0.9) * 0.2
                       + cos(position.z * 0.052 + uTime * 0.7) * 0.2
                       + sin((position.x + position.z) * 0.021 + uTime * 0.45) * 0.28;`)};let i=new le(t,e);i.position.y=Li,i.name="water",n.scene.add(i);let s=new le(new ui(6e3,6e3,1,1),new $n({color:1980996}));return s.rotation.x=-Math.PI/2,s.position.y=-15.5,n.scene.add(s),i}var Ma=null,dr=null,ba=null;function z1(n){dr=bs(256,(i,s)=>{i.fillStyle="#ff5a1f",i.fillRect(0,0,s,s);let r=In(61870);for(let o=0;o<46;o++){let a=r()*s,l=r()*s,c=8+r()*26;i.fillStyle=`rgba(${60+r()*40|0}, ${20+r()*14|0}, 10, ${.55+r()*.3})`,i.beginPath(),i.ellipse(a,l,c,c*(.5+r()*.5),r()*Math.PI,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(255, 214, 130, 0.9)";for(let o=0;o<22;o++){i.lineWidth=1.5+r()*2.5,i.beginPath();let a=r()*s,l=r()*s;i.moveTo(a,l);for(let c=0;c<4;c++)a+=(r()-.5)*60,l+=(r()-.5)*60,i.lineTo(a,l);i.stroke()}}),dr.wrapS=dr.wrapT=ea;let t=new ec(40,40);t.rotateX(-Math.PI/2),Ma=new $n({map:dr,fog:!1}),Ma.color.setRGB(1.5,1.35,1.2);let e=new le(t,Ma);return e.position.set(Dn.x,Am,Dn.z),e.name="lava",n.scene.add(e),ba=new cc(16738848,900,190,1.9),ba.position.set(Dn.x,Am+14,Dn.z),n.scene.add(ba),e}function O1(n){let t=[],e=[],i=[],a=(w,I,S,v=8)=>new we(w,I,S,v,1),l=(w,I,S=8)=>new an(w,I,S,1),c=(w,I,S)=>new Ne(w,I,S),u=[14,-14,72,-72,136,-136,180].map(w=>w*Math.PI/180).map(w=>({a:w,x:Math.sin(w)*78,z:Math.cos(w)*78})),f=[14,72,136,180,-136,-72,-14].map(w=>w*Math.PI/180);for(let w=0;w<f.length-1;w++){let I=Math.sin(f[w])*78,S=Math.cos(f[w])*78,v=Math.sin(f[w+1])*78,L=Math.cos(f[w+1])*78,B=Math.hypot(v-I,L-S),O=Math.atan2(-(L-S),v-I),H=(I+v)/2,q=(S+L)/2;jt(t,c(B+2,18,4),H,13/2-2.5,q,0,O,0),jt(t,c(B+2,1.7,4+1.4),H,13+.85,q,0,O,0)}for(let w of u){let I=Math.abs(w.a)<.5,S=I?5.6:7,v=I?22:27;jt(t,a(S,S*1.15,v+4,8),w.x,v/2-2,w.z),jt(e,l(S*1.35,I?8:10,8),w.x,v+(I?4:5)-2,w.z);let L=v-6;jt(i,c(.8,1.7,.3),w.x+Math.sin(w.a)*S,L,w.z+Math.cos(w.a)*S,0,w.a,0)}jt(t,c(5,17,7),-8.5,8.5-2,77),jt(t,c(5,17,7),8.5,8.5-2,77),jt(t,c(22,5.5,7),0,15.5,77),jt(e,c(24,1.6,8.4),0,18.9,77),jt(t,c(36,12,30),0,4,-8),jt(t,a(12.5,14.5,38,10),0,25,-8),jt(e,l(15.5,14,10),0,51,-8),jt(t,a(5,6,30,8),16,22,-2),jt(e,l(7,9.5,8),16,41.5,-2),jt(t,a(5,6,30,8),-16,22,-2),jt(e,l(7,9.5,8),-16,41.5,-2),jt(t,a(3.6,4.4,46,8),0,27,-26),jt(e,l(5.4,12,8),0,56,-26);let p=[[0,34,1],[0,40,1],[.6,28,1],[-.6,28,1],[Math.PI,34,1],[Math.PI,40,1],[Math.PI/2,36,1],[-Math.PI/2,36,1]];for(let[w,I]of p)jt(i,c(1,2.2,.3),Math.sin(w)*13.6,I,-8+Math.cos(w)*13.6,0,w,0);jt(i,c(.9,1.8,.3),0,46,-26+4.1),jt(i,c(.9,1.8,.3),16,34,-2+5.2),jt(i,c(.9,1.8,.3),-16,34,-2+5.2);let g=ce(5656676),_=ce(3747919),m=Pn(10114559,1.7),d=new Gt,M=new le(Sa(ts(t)),g);M.castShadow=!0,M.receiveShadow=!0;let y=new le(Sa(ts(e)),_);y.castShadow=!0;let x=new le(ts(i),m),D=new le(new ui(11,13),new $n({color:722452}));D.position.set(0,4.5,78+2.51),d.add(M,y,x,D),d.position.set(Di.x,xc-.4,Di.z),n.scene.add(d);let R=(w,I,S)=>n.colliders.push({x:Di.x+w,z:Di.z+I,radius:S});for(let w=0;w<f.length-1;w++){let I=Math.sin(f[w])*78,S=Math.cos(f[w])*78,v=Math.sin(f[w+1])*78,L=Math.cos(f[w+1])*78,B=Math.hypot(v-I,L-S),O=Math.max(2,Math.round(B/7));for(let H=0;H<=O;H++){let q=H/O;R(vt(I,v,q),vt(S,L,q),3.6)}}for(let w of u)R(w.x,w.z,Math.abs(w.a)<.5?6.2:7.6);return R(-8.5,77,3.4),R(8.5,77,3.4),R(0,-8,17),R(0,-26,5.5),d}function B1(n){let t=In(643557),e=ce(9735030),i=[],s=(c,h,u,f,p,g)=>{let _=$e(c,h),m=(g?2.4+t()*1.6:5.6)*u;jt(i,new Ne(2.5,.7,2.5),c,_+.2,h,0,p,0),jt(i,new we(.8,.95,m,7),c,_+.55+m/2,h,f,p,f*.6),g||jt(i,new Ne(2.2,.55,2.2),c,_+.55+m+.27,h,f,p,f*.6),n.colliders.push({x:c,z:h,radius:1.25})},r=(c,h,u)=>{let f=$e(c,h),p=Math.cos(u)*3.2,g=-Math.sin(u)*3.2;s(c-p,h-g,1,0,u,!1),s(c+p,h+g,1,0,u,!1),jt(i,new Ne(8.4,1.15,2),c,f+6.9,h,0,u,0);for(let _=0;_<3;_++){let m=c+(t()-.5)*9,d=h+(t()-.5)*9;jt(i,new Ne(1+t()*1.4,.8+t()*.8,1+t()),m,$e(m,d)+.3,d,t()*.5,t()*Math.PI,t()*.5)}},o=8;for(let c=0;c<o;c++){let h=c/o*Math.PI*2,u=Ss.x+Math.sin(h)*24,f=Ss.z+Math.cos(h)*24;t()<.72&&s(u,f,.9+t()*.3,(t()-.5)*.14,h,t()<.4)}r(Ss.x,Ss.z-2,.4),r(Ss.x+46,Ss.z+30,-.9);let a=[[-80,120],[110,-140],[-260,40],[60,-260],[-120,-180],[230,190]];for(let[c,h]of a)ws(c,h)!=="plains"&&ws(c,h)!=="ruins"||s(c+(t()-.5)*10,h+(t()-.5)*10,.8+t()*.4,(t()-.5)*.2,t()*Math.PI,t()<.55);let l=new le(Sa(ts(i)),e);return l.castShadow=!0,l.receiveShadow=!0,n.scene.add(l),l}function k1(n){let t=In(199191),e=46,i=Sa(new an(1,1,6,1).toNonIndexed()),s=ce(6188408),r=new ji(i,s,e),o=new at;for(let a=0;a<e;a++){let l=a/e*Math.PI*2+t()*.12,c=1190+t()*220,h=190+t()*230,u=95+t()*105;wc(r,a,Math.sin(l)*c,-30+h/2,Math.cos(l)*c,t()*Math.PI,u,h,u),o.setHSL(.56+t()*.04,.16+t()*.1,.42+t()*.14),r.setColorAt(a,o)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),n.scene.add(r),r}var Nm={value:0},Es=null,fr=null,po=0,Ff=0;function ur(n,t,e={}){if($e(n,t)<Li+(e.minAboveWater??.6)||D1(n,t)>(e.maxSlope??.85)||Dm(n,t)<(e.roadGap??3.4)||Math.hypot(n-Di.x,t-Di.z)<(e.castleGap??96)||Math.abs(n)<64&&t<-512&&t>-652)return!1;for(let s of vc)if(Math.hypot(n-s.x,t-s.z)<s.r+(e.spotGap??4))return!1;return!0}function H1(){let n=new Ue;return n.setAttribute("position",new _e(new Float32Array([-.07,0,0,.07,0,0,-.045,.55,.02,.045,.55,.02,0,1.05,.06]),3)),n.setAttribute("normal",new _e(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]),3)),n.setAttribute("color",new _e(new Float32Array([.3,.54,.24,.3,.54,.24,.42,.68,.33,.42,.68,.33,.55,.8,.42]),3)),n.setAttribute("uv",new _e(new Float32Array(10),2)),n.setIndex([0,1,2,1,3,2,2,3,4]),n}function G1(n){let t=In(7227989);po=36e3;let e=ce(16777215,{vertexColors:!0,side:An});e.onBeforeCompile=o=>{o.uniforms.uTime=Nm,o.vertexShader=`uniform float uTime;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float wgt = smoothstep(0.05, 1.0, position.y);
        float sway = sin(uTime * 1.7 + ip.x * 0.15 + ip.y * 0.13) * 0.55
                   + sin(uTime * 3.3 + ip.x * 0.37 - ip.y * 0.21) * 0.24;
        transformed.x += sway * wgt * 0.42;
        transformed.z += cos(uTime * 1.35 + ip.y * 0.17) * 0.5 * wgt * 0.3;
      #endif`)},Es=new ji(H1(),e,po),Es.frustumCulled=!1;let i=new at,s=0,r=0;for(;s<po&&r++<po*14;){let o=(t()*2-1)*970,a=(t()*2-1)*970,l=ws(o,a),c=0;if(l==="plains"||l==="ruins"?c=.8:l==="lake"?c=.75:l==="forest"?c=.5:l==="volcano"?c=Math.hypot(o-Dn.x,a-Dn.z)>205?.14:0:l==="castle"&&(c=.25),c===0||t()>c||!ur(o,a,{roadGap:3,maxSlope:.95,spotGap:1}))continue;let h=.75+t()*.8;wc(Es,s,o,$e(o,a)-.03,a,t()*Math.PI*2,h,h*(.8+t()*.55),h);let u=l==="forest"?.78:1;i.setRGB((.85+t()*.3)*u,(.9+t()*.25)*u,(.8+t()*.3)*u),Es.setColorAt(s,i),s++}po=s,Es.count=s,n.scene.add(Es)}function ya(n,t,e,{shadow:i=!0,tint:s=null}={}){let r=ce(16777215,{vertexColors:!0}),o=new ji(Sa(t),r,e.length);o.frustumCulled=!1;let a=new at;for(let l=0;l<e.length;l++){let c=e[l];wc(o,l,c.x,c.y,c.z,c.ry,c.sx,c.sy,c.sz),s&&(s(a,c),o.setColorAt(l,a))}return o.castShadow=i,n.scene.add(o),o}function Nf(n){let t=[];return n==="broadleaf"?(jt(t,vn(new we(.22,.42,3,6),7031347),0,1.5,0),jt(t,vn(new Ri(1.95,0),4164175),0,3.9,0,0,0,0,1,.88,1),jt(t,vn(new Ri(1.45,0),3504712),1,3.1,.55,0,.7,0),jt(t,vn(new Ri(1.3,0),4625754),-.9,3.3,-.5,0,1.9,0)):n==="pine"?(jt(t,vn(new we(.18,.34,2.4,6),5914672),0,1.2,0),jt(t,vn(new an(1.7,2.8,7),3107663),0,3.2,0),jt(t,vn(new an(1.3,2.4,7),2777672),0,4.6,0),jt(t,vn(new an(.9,2,7),3371090),0,5.9,0)):(jt(t,vn(new we(.14,.36,3.6,5),4864816),0,1.8,0,0,0,.06),jt(t,vn(new we(.05,.11,1.6,4),4535849),.5,2.9,0,0,0,-.9),jt(t,vn(new we(.04,.09,1.3,4),4535849),-.45,2.3,.1,.5,0,.9),jt(t,vn(new we(.04,.08,1.1,4),4206890),.1,3.4,-.4,-.7,0,.2)),ts(t)}function V1(n){let t=In(133062381);G1(n);let e=[],i=[],s=[],r=[],o=[],a=[],l=(d,M)=>{for(let y=0;y<d;y++)M()};l(900,()=>{let d=t()*Math.PI*2,M=Math.sqrt(t())*200,y=Ts.x+Math.sin(d)*M,x=Ts.z+Math.cos(d)*M;if(!ur(y,x,{roadGap:5,maxSlope:.7}))return;let D=.85+t()*.9;(M>130&&t()<.45?i:e).push({x:y,y:$e(y,x)-.15,z:x,ry:t()*Math.PI*2,sx:D,sy:D*(.9+t()*.3),sz:D}),n.colliders.push({x:y,z:x,radius:.62*D})}),l(420,()=>{let d=(t()*2-1)*940,M=(t()*2-1)*940,y=ws(d,M);if(y!=="plains"&&y!=="lake"&&y!=="ruins"||t()>(y==="lake"?.5:.28)||!ur(d,M,{roadGap:6,maxSlope:.6}))return;let x=.8+t()*.85;(M<-150&&t()<.5||t()<.18?i:e).push({x:d,y:$e(d,M)-.15,z:M,ry:t()*Math.PI*2,sx:x,sy:x*(.9+t()*.3),sz:x}),n.colliders.push({x:d,z:M,radius:.62*x})}),l(240,()=>{let d=t()*Math.PI*2,M=115+t()*105,y=Dn.x+Math.sin(d)*M,x=Dn.z+Math.cos(d)*M;if(!ur(y,x,{roadGap:4,maxSlope:1.15})||t()>.45)return;let D=.8+t()*.8;s.push({x:y,y:$e(y,x)-.1,z:x,ry:t()*Math.PI*2,sx:D,sy:D,sz:D}),n.colliders.push({x:y,z:x,radius:.45*D})}),l(760,()=>{let d=(t()*2-1)*960,M=(t()*2-1)*960,y=ws(d,M),x=y==="volcano"?.75:y==="plains"?.16:y==="forest"?.14:y==="lake"?.2:0;if(t()>x||!ur(d,M,{roadGap:4.5,maxSlope:1.5,minAboveWater:-.5}))return;let D=.7+t()*2.1,R=.55+t()*1.6,w=.7+t()*2.1;r.push({x:d,y:$e(d,M)-R*.35,z:M,ry:t()*Math.PI*2,sx:D,sy:R,sz:w,v:y==="volcano"});let I=Math.max(D,w)*.85;I>1&&n.colliders.push({x:d,z:M,radius:I})}),l(520,()=>{let d=(t()*2-1)*940,M=(t()*2-1)*940,y=ws(d,M),x=y==="forest"?.55:y==="plains"||y==="ruins"?.3:y==="lake"?.35:0;if(t()>x||!ur(d,M,{roadGap:4,maxSlope:.7}))return;let D=.55+t()*.9;o.push({x:d,y:$e(d,M)+D*.25,z:M,ry:t()*Math.PI*2,sx:D,sy:D*.62,sz:D})}),l(2600,()=>{let d=(t()*2-1)*940,M=(t()*2-1)*940,y=ws(d,M),x=y==="plains"||y==="ruins"?.62:y==="lake"?.55:y==="forest"?.12:0;if(t()>x||!ur(d,M,{roadGap:3.2,maxSlope:.6,spotGap:1}))return;let D=.75+t()*.7;a.push({x:d,y:$e(d,M),z:M,ry:t()*Math.PI*2,sx:D,sy:D,sz:D,k:t()*4|0})}),ya(n,Nf("broadleaf"),e,{tint:(d,M)=>d.setRGB(.85+(M.x*13.7%1+1)%1*.3,.9+(M.z*7.3%1+1)%1*.2,.85)}),ya(n,Nf("pine"),i,{tint:(d,M)=>d.setRGB(.9,.9+(M.x*5.1%1+1)%1*.2,.9)}),ya(n,Nf("dead"),s,{});let c=vn(new Ri(1,0),16777215);ya(n,c,r,{tint:(d,M)=>{M.v?d.setRGB(.42,.3,.25):d.setRGB(.55,.53,.47);let y=.85+((M.x*3.3+M.z*1.7)%1+1)%1*.3;d.multiplyScalar(y)}});let h=vn(new Ri(1,0),4884296);ya(n,h,o,{tint:(d,M)=>d.setScalar(.8+(M.z*9.1%1+1)%1*.4)});let u=[],f=vn(new ui(.3,.3),16777215);jt(u,f,0,.36,0,-Math.PI/2.4,0,0),jt(u,f,0,.36,0,-Math.PI/2.4,Math.PI/2,0),jt(u,vn(new ui(.05,.4),4160053),0,.18,0);let p=ts(u),g=ce(16777215,{vertexColors:!0,side:An});Ff=a.length,fr=new ji(p,g,Ff),fr.frustumCulled=!1;let _=new at,m=[15921380,16766814,15239864,10336511];for(let d=0;d<a.length;d++){let M=a[d];wc(fr,d,M.x,M.y,M.z,M.ry,M.sx,M.sy,M.sz),_.set(m[M.k]),fr.setColorAt(d,_)}n.scene.add(fr)}function Im(n){let t=qt(n?.grassMul??1,.05,1);Es&&(Es.count=Math.max(200,Math.floor(po*t))),fr&&(fr.count=Math.max(80,Math.floor(Ff*(.4+t*.6))))}async function W1(n){L1(),N1(n),F1(n),z1(n),O1(n),B1(n),k1(n),V1(n),n.world={getHeight:$e,getBiome:ws,waterLevel:Li,castleGatePos:new C(0,$e(0,-560),-560),startPos:new C(0,$e(0,250),250)},n.getGroundHeight=$e,Im(n.quality),n.on("quality-changed",t=>Im(t))}function X1(n,t){if(Um.value+=t,Nm.value+=t,dr&&(dr.offset.x+=t*.009,dr.offset.y+=t*.006),Ma){let e=n.time.elapsed,i=1.28+Math.sin(e*2.1)*.16+Math.sin(e*5.3)*.07;Ma.color.setRGB(i*1.22,i*1.02,i*.88)}ba&&(ba.intensity=850+Math.sin(n.time.elapsed*2.7)*230)}var Ra={};Mi(Ra,{init:()=>J1,update:()=>K1});var q1=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Y1=`
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uHor;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uSunCol;
uniform float uGlow;
uniform float uNight;
uniform float uTime;
uniform float uFlash;
uniform float uSunI;
varying vec3 vDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;

  // \u7E26\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3(\u5730\u5E73\u7DDA\u306E\u971E \u2192 \u4E2D\u9593 \u2192 \u5929\u9802)
  vec3 col = mix(uHor, uMid, smoothstep(-0.06, 0.16, h));
  col = mix(col, uTop, smoothstep(0.10, 0.60, h));
  col *= 1.0 - 0.42 * smoothstep(0.02, 0.42, -h); // \u5730\u5E73\u7DDA\u4E0B\u306F\u9759\u304B\u306B\u6C88\u3081\u308B

  // \u592A\u967D\u30C7\u30A3\u30B9\u30AF + \u67D4\u3089\u304B\u3044\u30B0\u30ED\u30FC(\u591C\u660E\u3051/\u5915\u66AE\u308C\u306F uGlow \u304C\u5F37\u307E\u308B)
  float sd = dot(d, uSunDir);
  float disk = smoothstep(0.99938, 0.99966, sd);
  float halo = pow(max(sd, 0.0), 80.0) * 0.38 + pow(max(sd, 0.0), 7.0) * 0.12;
  col += uSunCol * (disk * 1.7 + halo * uGlow) * uSunI;

  // \u591C: \u661F\u30FB\u5929\u306E\u5DDD\u30FB\u6708(uNight \u3067\u9023\u7D9A\u30D5\u30A7\u30FC\u30C9)
  float nightAmt = uNight * smoothstep(-0.04, 0.22, h);
  float moonAmt = uNight * smoothstep(-0.10, 0.02, h);
  if (nightAmt + moonAmt > 0.004) {
    // \u77AC\u304F\u661F(\u65B9\u5411\u30BB\u30EB\u306E\u30CF\u30C3\u30B7\u30E5)
    vec3 sp = d * 140.0;
    vec3 cell = floor(sp);
    vec3 f = fract(sp) - 0.5;
    float h1 = hash13(cell);
    vec3 mwN = normalize(vec3(0.58, 0.18, 0.79));
    float bd = dot(d, mwN);
    float band = exp(-bd * bd * 55.0);
    vec3 j = vec3(hash13(cell + 17.1), hash13(cell + 31.7), hash13(cell + 47.3)) - 0.5;
    float sdist = length(f - j * 0.72);
    float thr = 0.986 - band * 0.03; // \u5929\u306E\u5DDD\u5E2F\u306F\u661F\u5BC6\u5EA6\u304C\u4E0A\u304C\u308B
    float srad = 0.14 + 0.26 * hash13(cell + 5.5);
    float star = step(thr, h1) * smoothstep(srad, 0.0, sdist);
    float tw = 0.7 + 0.3 * sin(uTime * (1.2 + h1 * 5.0) + h1 * 44.0);
    float bright = 0.5 + 1.3 * pow(hash13(cell + 9.9), 4.0);
    col += mix(vec3(1.0, 0.93, 0.82), vec3(0.80, 0.90, 1.0), hash13(cell + 13.3))
         * (star * tw * bright * nightAmt);

    // \u5929\u306E\u5DDD(\u5E2F + \u307E\u3060\u3089\u96F2)
    float pat = vnoise(d * 10.0) * 0.6 + vnoise(d * 24.0) * 0.4;
    float mw = band * smoothstep(0.32, 0.78, pat);
    col += vec3(0.52, 0.60, 0.85) * (mw * nightAmt * 0.17);
    col += vec3(0.85, 0.82, 0.95) * (band * band * nightAmt * 0.035);

    // \u6708(\u6D77\u306E\u6A21\u69D8 + \u6B20\u3051 + \u6DE1\u3044\u6688)
    float md = dot(d, uMoonDir);
    if (md > 0.9985) {
      float mdisk = smoothstep(0.99952, 0.99982, md);
      vec3 mo = normalize(uMoonDir + vec3(0.030, 0.014, -0.012));
      float shade = smoothstep(0.99940, 0.99986, dot(d, mo));
      float sea = vnoise(d * 420.0) * 0.5 + vnoise(d * 840.0) * 0.5;
      float mtex = 0.78 + 0.22 * smoothstep(0.30, 0.70, sea);
      col += vec3(0.92, 0.96, 1.05)
           * (mdisk * max(1.0 - shade * 0.9, 0.06) * mtex * moonAmt * 1.25);
    }
    col += vec3(0.55, 0.65, 0.90) * (pow(max(md, 0.0), 300.0) * moonAmt * 0.35);
  }

  // \u7A32\u5149(\u30DC\u30B9\u6226\u306E\u307F\u30FB\u63A7\u3048\u3081\u306A\u51B7\u5149)
  col += vec3(0.40, 0.36, 0.52) * uFlash;

  // \u30C7\u30A3\u30B6(\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u306E\u30D0\u30F3\u30C7\u30A3\u30F3\u30B0\u4F4E\u6E1B)
  col += (hash13(d * 63.7) - 0.5) * 0.008;

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Qe=n=>new at(n);function Un(n,t,e,i,s,r,o,a,l,c,h,u,f,p){return{p:n,top:Qe(t),mid:Qe(e),hor:Qe(i),sun:Qe(s),glow:r,light:Qe(o),lightInt:a,hemiS:Qe(l),hemiG:Qe(c),hemiInt:h,cloud:Qe(u),fogN:f,fogF:p}}var Tc=[Un(0,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150),Un(.035,5068176,13664125,16761968,16768164,1.5,16760968,1.5,10917294,5523518,.62,16764836,150,1250),Un(.085,5011640,9681112,15782560,16771264,1,16767400,1.8,11455720,5924432,.78,16769228,180,1350),Un(.14,4556498,8570088,14478828,16773846,.65,16772552,2.1,12903158,6714972,.9,16514558,220,1500),Un(.25,4029906,8308968,14348018,16775400,.5,16773848,2.3,13625850,7109728,.95,16186108,260,1600),Un(.4,4685764,9355998,15327170,16772811,.7,16769970,2,13033456,6844506,.85,16643040,210,1450),Un(.47,5790356,12614242,16755540,16764808,1.4,16758129,1.5,11044496,5129272,.6,16762010,160,1300),Un(.5,5453166,12737364,16747078,16756838,1.9,16751192,1,9200264,4536882,.45,15767420,145,1200),Un(.545,2302034,5321310,10112592,16750688,1,12619904,.5,5260910,2630704,.32,6966364,115,1050),Un(.6,791088,1581642,2898528,16756848,.35,11454190,.4,2898526,1448998,.3,2897490,95,980),Un(.75,461860,1055290,2109518,16756848,.25,12440566,.5,2569818,1251876,.3,2436680,90,950),Un(.9,659498,1318466,2503252,16756848,.3,11716846,.42,2766424,1383205,.29,2699856,95,980),Un(.955,1843528,3945056,7226976,16763024,.8,13605508,.5,5787250,2762032,.34,5784664,110,1050),Un(1,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150)],Ct={top:new at,mid:new at,hor:new at,sun:new at,light:new at,hemiS:new at,hemiG:new at,cloud:new at,glow:0,lightInt:0,hemiInt:0,fogN:100,fogF:1e3};function Z1(n){let t=n-Math.floor(n),e=0;for(;e<Tc.length-2&&Tc[e+1].p<=t;)e++;let i=Tc[e],s=Tc[e+1],r=Vt(i.p,s.p,t);Ct.top.lerpColors(i.top,s.top,r),Ct.mid.lerpColors(i.mid,s.mid,r),Ct.hor.lerpColors(i.hor,s.hor,r),Ct.sun.lerpColors(i.sun,s.sun,r),Ct.light.lerpColors(i.light,s.light,r),Ct.hemiS.lerpColors(i.hemiS,s.hemiS,r),Ct.hemiG.lerpColors(i.hemiG,s.hemiG,r),Ct.cloud.lerpColors(i.cloud,s.cloud,r),Ct.glow=vt(i.glow,s.glow,r),Ct.lightInt=vt(i.lightInt,s.lightInt,r),Ct.hemiInt=vt(i.hemiInt,s.hemiInt,r),Ct.fogN=vt(i.fogN,s.fogN,r),Ct.fogF=vt(i.fogF,s.fogF,r)}var pi={top:Qe(1443593),mid:Qe(3805459),hor:Qe(6168342),light:Qe(16740432),lightInt:.6,hemiS:Qe(5776686),hemiG:Qe(1510414),hemiInt:.34,cloud:Qe(3675159),fogN:26,fogF:330},Kn={fog:Qe(660503),light:Qe(8839894),lightInt:.42,hemiS:Qe(3116936),hemiG:Qe(860452),hemiInt:.55,fogN:620,fogF:3200,dir:new C(.3,1,.22).normalize()},Ta=46,Rs,Qn,mi,Bf,pr,kf,ln,Aa,mo,Hf,Gf=null,He=0,Xe=0,Ac=0,zf=4,Fm=0,zm=0,es=In(659918),wa=new C,Of=new C,As=new C;function $1(n){let t=[[0,.1,0,1.7,1,1.25],[1.55,.05,.35,1.05,.72,.9],[-1.5,0,-.25,1.15,.8,1],[.55,.55,-.7,.85,.6,.8],[-.65,.5,.65,.7,.52,.72]],e=[];for(let[c,h,u,f,p,g]of t){let _=new Ri(1,1);_.scale(f,p,g),_.translate(c,h,u),e.push(_)}let i=null;try{i=ts(e)}catch{i=null}i||(i=e[0]),i.computeVertexNormals(),Bf=ce(16186108),mi=new ji(i,Bf,Ta),mi.instanceMatrix.setUsage(di),mi.castShadow=!1,mi.receiveShadow=!1,mi.frustumCulled=!1,pr=new Float32Array(Ta*3),kf=new Float32Array(Ta);let s=new me,r=new Cn,o=new C,a=new C,l=new C(0,1,0);for(let c=0;c<Ta;c++){let h=(es()-.5)*2600,u=(es()-.5)*2600,f=135+es()*110;pr[c*3]=h,pr[c*3+1]=f,pr[c*3+2]=u,kf[c]=.6+es()*.8;let p=9+es()*17;r.setFromAxisAngle(l,es()*Math.PI*2),o.set(p*(.8+es()*.6),p*.55,p),s.compose(a.set(h,f,u),r,o),mi.setMatrixAt(c,s)}n.add(mi)}async function J1(n){let t=n.scene,e=new Vn(1800,48,24),i=new ke({uniforms:{uTop:{value:new at(4029906)},uMid:{value:new at(8308968)},uHor:{value:new at(14348018)},uSunDir:{value:new C(.8,.4,.3).normalize()},uMoonDir:{value:new C(-.8,-.4,-.3).normalize()},uSunCol:{value:new at(16775400)},uGlow:{value:.6},uNight:{value:0},uTime:{value:0},uFlash:{value:0},uSunI:{value:1}},vertexShader:q1,fragmentShader:Y1,side:xn,depthWrite:!1,fog:!1});Rs=new le(e,i),Rs.frustumCulled=!1,Rs.renderOrder=-100,Qn=i.uniforms,t.add(Rs),$1(t),ln=new hc(16773848,2.3),ln.castShadow=!0;let s=n.quality&&n.quality.shadowMapSize||1024;ln.shadow.mapSize.set(s,s);let r=ln.shadow.camera;r.left=-60,r.right=60,r.top=60,r.bottom=-60,r.near=20,r.far=420,r.updateProjectionMatrix(),ln.shadow.bias=-35e-5,ln.shadow.normalBias=.7,t.add(ln,ln.target),Aa=new ac(13625850,7109728,.95),t.add(Aa),mo=new Yl(14348018,260,1600),t.fog=mo,Hf=new at(14348018),t.background=Hf,n.on("quality-changed",o=>{let a=o&&o.shadowMapSize||n.quality&&n.quality.shadowMapSize||1024;ln.shadow.map&&(ln.shadow.map.dispose(),ln.shadow.map=null),ln.shadow.mapSize.set(a,a)}),n.sky={sunDir:new C(.9,.3,.3).normalize(),sunLight:ln,setOverride(o){Gf=o==="shrine"||o==="boss"?o:null}}}function K1(n,t){if(!Rs)return;let e=n.time.dayPhase,i=n.time.elapsed,s=n.player&&n.player.position||n.camera.position,r=n.quality&&n.quality.drawDist||1,o=e*Math.PI*2;wa.set(Math.cos(o),Math.sin(o),.34).normalize(),Of.set(-Math.cos(o)*.92,-Math.sin(o),-.42).normalize();let a=wa.y,l=1-Vt(-.16,-.02,a),c=Vt(-.12,.02,a);He=Lt(He,Gf==="shrine"?1:0,4,t),Xe=Lt(Xe,Gf==="boss"?1:0,2.5,t),He<.001&&(He=0),Xe<.001&&(Xe=0),Xe>.4&&(zf-=t,zf<=0&&(Ac=.55+es()*.45,zf=2.8+es()*5.5)),Ac=Math.max(0,Ac-t*3.2);let h=Ac*Xe;if(Z1(e),Xe>0&&(Ct.top.lerp(pi.top,Xe),Ct.mid.lerp(pi.mid,Xe),Ct.hor.lerp(pi.hor,Xe),Ct.light.lerp(pi.light,Xe),Ct.hemiS.lerp(pi.hemiS,Xe),Ct.hemiG.lerp(pi.hemiG,Xe),Ct.cloud.lerp(pi.cloud,Xe),Ct.glow=vt(Ct.glow,0,Xe),Ct.lightInt=vt(Ct.lightInt,pi.lightInt,Xe),Ct.hemiInt=vt(Ct.hemiInt,pi.hemiInt,Xe),Ct.fogN=vt(Ct.fogN,pi.fogN,Xe),Ct.fogF=vt(Ct.fogF,pi.fogF,Xe)),He>0&&(Ct.top.lerp(Kn.fog,He),Ct.mid.lerp(Kn.fog,He),Ct.hor.lerp(Kn.fog,He),Ct.light.lerp(Kn.light,He),Ct.hemiS.lerp(Kn.hemiS,He),Ct.hemiG.lerp(Kn.hemiG,He),Ct.cloud.lerp(Kn.fog,He),Ct.glow=vt(Ct.glow,0,He),Ct.lightInt=vt(Ct.lightInt,Kn.lightInt,He),Ct.hemiInt=vt(Ct.hemiInt,Kn.hemiInt,He),Ct.fogN=vt(Ct.fogN,Kn.fogN,He),Ct.fogF=vt(Ct.fogF,Kn.fogF,He)),mo.color.copy(Ct.hor),mo.near=Ct.fogN*r,mo.far=Math.max(Ct.fogF*r,mo.near+120),Hf.copy(Ct.hor),Rs.visible=He<.98,Rs.visible&&(Rs.position.copy(s),Qn.uTop.value.copy(Ct.top),Qn.uMid.value.copy(Ct.mid),Qn.uHor.value.copy(Ct.hor),Qn.uSunDir.value.copy(wa),Qn.uMoonDir.value.copy(Of),Qn.uSunCol.value.copy(Ct.sun),Qn.uGlow.value=Ct.glow,Qn.uSunI.value=(1-Xe)*(1-He),Qn.uNight.value=l*(1-Xe)*(1-He),Qn.uTime.value=i,Qn.uFlash.value=h),As.copy(wa).multiplyScalar(c).addScaledVector(Of,1-c),He>0&&As.lerp(Kn.dir,He),As.lengthSq()<.05&&As.set(.2,1,.1),As.y=Math.max(As.y,.08),As.normalize(),ln.position.copy(s).addScaledVector(As,170),ln.target.position.copy(s),ln.color.copy(Ct.light),ln.intensity=Ct.lightInt+h*1.2,Aa.color.copy(Ct.hemiS),Aa.groundColor.copy(Ct.hemiG),Aa.intensity=Ct.hemiInt+h*.35,mi.visible=He<.98,mi.visible){Fm+=t*2.4,zm+=t*.7;let u=mi.instanceMatrix.array;for(let f=0;f<Ta;f++){let p=kf[f],g=pr[f*3]+Fm*p,_=pr[f*3+2]+zm*p;u[f*16+12]=((g+1300)%2600+2600)%2600-1300,u[f*16+13]=pr[f*3+1]+Math.sin(i*.08+f*2.1)*4,u[f*16+14]=((_+1300)%2600+2600)%2600-1300}mi.instanceMatrix.needsUpdate=!0,Bf.color.copy(Ct.cloud)}n.sky.sunDir.copy(wa)}var Pa={};Mi(Pa,{init:()=>_b,update:()=>vb});var Rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Q1=new so(-1,1,1,-1,0,1),Vf=class extends Ue{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}},j1=new Vf,Cs=class{constructor(t){this._mesh=new le(j1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var go=class extends Xn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Cs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ca=class extends Xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cc=class extends Xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new go(Rc),this.copyPass.material.blending=wi,this.clock=new ho}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(o instanceof Ca?i=!0:o instanceof Cc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pc=class extends Xn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Om={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var xo=class n extends Xn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new rn(r,o,{type:Wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new rn(r,o,{type:Wn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Om;this.highPassUniforms=Ms.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Rc;this.copyUniforms=Ms.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new $n,this.fsQuad=new Cs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};xo.BlurDirectionX=new nt(1,0);xo.BlurDirectionY=new nt(0,1);var Bm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Lc=class extends Xn{constructor(){super();let t=Bm;this.uniforms=Ms.clone(t.uniforms),this.material=new rc({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Cs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_f?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yn=null,cn=null,km=null,yo=null,qe=null,Ls=null,gr=null,mr=new nt,vo=new at,Oe=Math.random,W=(n,t)=>n+Oe()*(t-n),tb={name:"ArdiaGradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new nt(1280,720)},uVignette:{value:.3},uSaturation:{value:1.055},uContrast:{value:.1},uGrain:{value:.014}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uVignette;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uGrain;
    varying vec2 vUv;

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;

      // \u5F69\u5EA6(\u8F1D\u5EA6\u3092\u4FDD\u3063\u305F\u307E\u307E\u4E0A\u54C1\u306B)
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = clamp(mix(vec3(lum), col, uSaturation), 0.0, 1.0);

      // \u5F31\u3044\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8(S\u5B57)
      col = mix(col, col * col * (3.0 - 2.0 * col), uContrast);

      // \u7A4F\u3084\u304B\u306A\u30D3\u30CD\u30C3\u30C8
      vec2 q = vUv - 0.5;
      q.x *= 1.25;
      float d = length(q);
      col *= 1.0 - uVignette * smoothstep(0.40, 0.85, d);

      // \u3054\u304F\u8584\u3044\u6642\u9593\u5909\u5316\u30B0\u30EC\u30A4\u30F3(\u6697\u90E8\u306B\u308F\u305A\u304B\u306B\u591A\u3081)
      float g = hash12(vUv * uRes + vec2(mod(uTime * 61.7, 977.0), mod(uTime * 38.9, 733.0))) - 0.5;
      col += g * uGrain * (0.4 + 0.6 * (1.0 - lum));

      gl_FragColor = vec4(col, 1.0);
    }`},eb=`
  uniform float uScale;
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aAlpha;
  attribute float aRot;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vRot;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vRot = aRot;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uScale / max(0.12, -mv.z), 0.0, 512.0);
    gl_Position = projectionMatrix * mv;
  }`,nb=`
  uniform sampler2D uMap;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vRot;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float c = cos(vRot), s = sin(vRot);
    uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c) + 0.5;
    vec4 tex = texture2D(uMap, clamp(uv, 0.0, 1.0));
    float a = tex.a * vAlpha;
    if (a < 0.006) discard;
    gl_FragColor = vec4(vColor * tex.rgb, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;function ib(){return bs(64,(n,t)=>{let e=t/2,i=n.createRadialGradient(e,e,0,e,e,e);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.85)"),i.addColorStop(.6,"rgba(255,255,255,0.28)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)})}function sb(){return bs(128,(n,t)=>{let e=In(3599),i=t/2;for(let r=0;r<9;r++){let o=e()*Math.PI*2,a=e()*t*.16,l=i+Math.cos(o)*a,c=i+Math.sin(o)*a,h=t*(.16+e()*.16),u=n.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.30)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.65,"rgba(255,255,255,0.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,t,t)})}function rb(){return bs(64,(n,t)=>{let e=t/2;n.translate(e,e);let i=n.createLinearGradient(0,-24,0,24);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(185,185,185,1)"),n.fillStyle=i,n.beginPath(),n.moveTo(0,-23),n.bezierCurveTo(11,-13,12,8,0,23),n.bezierCurveTo(-12,8,-11,-13,0,-23),n.closePath(),n.fill(),n.strokeStyle="rgba(130,130,130,0.55)",n.lineWidth=1.6,n.beginPath(),n.moveTo(0,-19),n.lineTo(0,19),n.stroke()})}var _o=17,T={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:1,size:.1,r:1,g:1,b:1,alpha:1,grav:0,drag:0,flut:0,spin:0,swirl:0,grow:0,fadeIn:.02,fadeOut:-1,pulse:0,rot:0};function Ge(n,t,e){T.x=n,T.y=t,T.z=e,T.vx=T.vy=T.vz=0,T.life=1,T.size=.1,T.r=T.g=T.b=1,T.alpha=1,T.grav=0,T.drag=0,T.flut=0,T.spin=0,T.swirl=0,T.grow=0,T.fadeIn=.02,T.fadeOut=-1,T.pulse=0,T.rot=0}var Ia=class{constructor(t,e,i,s){this.cap=t,this.count=0,this._last=0,this.data=new Float32Array(t*_o);let r=new Ue;this.aPos=new _e(new Float32Array(t*3),3).setUsage(di),this.aCol=new _e(new Float32Array(t*3),3).setUsage(di),this.aSiz=new _e(new Float32Array(t),1).setUsage(di),this.aAlp=new _e(new Float32Array(t),1).setUsage(di),this.aRot=new _e(new Float32Array(t),1).setUsage(di),r.setAttribute("position",this.aPos),r.setAttribute("aColor",this.aCol),r.setAttribute("aSize",this.aSiz),r.setAttribute("aAlpha",this.aAlp),r.setAttribute("aRot",this.aRot),r.setDrawRange(0,0),this.geo=r,this.mat=new ke({uniforms:{uMap:{value:e},uScale:{value:600}},vertexShader:eb,fragmentShader:nb,blending:i,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1}),this.points=new oo(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,this.points.matrixAutoUpdate=!1}spawn(){if(this.count>=this.cap)return;let t=this.count++,e=t*3,i=this.aPos.array,s=this.aCol.array;i[e]=T.x,i[e+1]=T.y,i[e+2]=T.z,s[e]=T.r,s[e+1]=T.g,s[e+2]=T.b,this.aSiz.array[t]=T.size,this.aAlp.array[t]=T.fadeIn>0?0:T.alpha,this.aRot.array[t]=T.rot;let r=t*_o,o=this.data;o[r]=T.vx,o[r+1]=T.vy,o[r+2]=T.vz,o[r+3]=0,o[r+4]=Math.max(.05,T.life),o[r+5]=T.size,o[r+6]=T.alpha,o[r+7]=T.grav,o[r+8]=T.drag,o[r+9]=T.flut,o[r+10]=T.spin,o[r+11]=T.swirl,o[r+12]=T.grow,o[r+13]=T.fadeIn,o[r+14]=T.fadeOut>=0?T.fadeOut:T.life*.35,o[r+15]=T.pulse,o[r+16]=Oe()*6.2831}_copy(t,e){let i=t*3,s=e*3,r=this.aPos.array,o=this.aCol.array;r[s]=r[i],r[s+1]=r[i+1],r[s+2]=r[i+2],o[s]=o[i],o[s+1]=o[i+1],o[s+2]=o[i+2],this.aSiz.array[e]=this.aSiz.array[t],this.aAlp.array[e]=this.aAlp.array[t],this.aRot.array[e]=this.aRot.array[t];let a=t*_o,l=e*_o,c=this.data;for(let h=0;h<_o;h++)c[l+h]=c[a+h]}update(t,e){let i=this.aPos.array,s=this.aSiz.array,r=this.aAlp.array,o=this.aRot.array,a=this.data,l=0;for(;l<this.count;){let c=l*_o,h=a[c+4],u=a[c+3]+t;if(u>=h){this.count--,l!==this.count&&this._copy(this.count,l);continue}a[c+3]=u;let f=a[c],p=a[c+1],g=a[c+2];p-=a[c+7]*t;let _=a[c+8];if(_>0){let B=Math.max(0,1-_*t);f*=B,p*=B,g*=B}let m=a[c+11];if(m!==0){let B=m*t,O=Math.cos(B),H=Math.sin(B),q=f*O-g*H;g=f*H+g*O,f=q}a[c]=f,a[c+1]=p,a[c+2]=g;let d=l*3,M=i[d]+f*t,y=i[d+1]+p*t,x=i[d+2]+g*t,D=a[c+9];if(D>0){let B=a[c+16];M+=Math.cos(e*1.7+B)*D*t,x+=Math.sin(e*1.3+B*1.71)*D*t,y+=Math.sin(e*2.1+B*2.3)*D*.4*t}i[d]=M,i[d+1]=y,i[d+2]=x,o[l]+=a[c+10]*t;let R=u/h;s[l]=a[c+5]*(1+a[c+12]*R);let w=a[c+6],I=a[c+13];I>0&&u<I&&(w*=u/I);let S=h-u,v=a[c+14];S<v&&v>0&&(w*=S/v);let L=a[c+15];L>0&&(w*=.55+.45*Math.sin(e*L+a[c+16]*3)),r[l]=w,l++}this.geo.setDrawRange(0,this.count),(this.count>0||this._last>0)&&(this._flag(this.aPos,3),this._flag(this.aCol,3),this._flag(this.aSiz,1),this._flag(this.aAlp,1),this._flag(this.aRot,1)),this._last=this.count}_flag(t,e){t.needsUpdate=!0,t.clearUpdateRanges&&(t.clearUpdateRanges(),t.addUpdateRange(0,Math.max(this.count,1)*e))}};function jn(n,t){let e=yn&&yn.quality.particleMul||1;return Math.max(1,Math.round((n.count!=null?n.count:t)*e))}function Nn(n,t,e,i){return n&&n.color!=null?vo.set(n.color):vo.setRGB(t,e,i),vo}function Fn(n,t){let e=W(n,t);T.r=vo.r*e,T.g=vo.g*e,T.b=vo.b*e}var Hm={hit(n,t,e,i,s){Ge(n,t,e),Nn(i,1.15,1.1,.92),Fn(.95,1),T.size=1*s,T.life=.15,T.alpha=.65,T.grow=1.6,T.fadeIn=0,T.fadeOut=.12,qe.spawn();let r=jn(i,20);for(let o=0;o<r;o++){Ge(n,t,e);let a=Oe()*Math.PI*2,l=(Oe()-.35)*1.5,c=W(3.2,8)*s;if(T.vx=Math.cos(a)*Math.cos(l)*c,T.vy=Math.sin(l)*c*.8+1.2,T.vz=Math.sin(a)*Math.cos(l)*c,T.grav=16,T.drag=1.2,T.life=W(.22,.5),T.size=W(.05,.11)*s,i&&i.color!=null)Nn(i,1,1,1),Fn(.85,1.1);else{let h=Oe();T.r=1.1,T.g=1.05-.28*h,T.b=.92-.55*h}T.fadeIn=0,T.fadeOut=.12,qe.spawn()}},spark(n,t,e,i,s){let r=jn(i,12);Nn(i,1.05,.8,.38);for(let o=0;o<r;o++){Ge(n,t,e),Fn(.8,1.1);let a=Oe()*Math.PI*2,l=W(1.6,4.4)*s;T.vx=Math.cos(a)*l,T.vz=Math.sin(a)*l,T.vy=W(.8,3)*s,T.grav=10,T.drag=1,T.life=W(.3,.65),T.size=W(.04,.09)*s,T.fadeIn=0,T.fadeOut=.15,qe.spawn()}},death(n,t,e,i,s){let r=jn(i,12);for(let a=0;a<r;a++){Ge(n+W(-.4,.4)*s,t+W(0,.7)*s,e+W(-.4,.4)*s);let l=W(.75,1.25);T.r=.13*l,T.g=.08*l,T.b=.2*l;let c=Oe()*Math.PI*2,h=W(.1,.7);T.vx=Math.cos(c)*h,T.vz=Math.sin(c)*h,T.vy=W(.4,1.1),T.drag=1.8,T.spin=W(-1.2,1.2),T.life=W(1,1.9),T.size=W(.5,.9)*s,T.alpha=W(.4,.58),T.grow=1.6,T.fadeIn=.06,Ls.spawn()}let o=jn(i,14);Nn(i,.5,.2,1);for(let a=0;a<o;a++){Ge(n+W(-.5,.5)*s,t+W(.1,.9)*s,e+W(-.5,.5)*s),Fn(.75,1.1);let l=Oe()*Math.PI*2,c=W(.2,.8);T.vx=Math.cos(l)*c,T.vz=Math.sin(l)*c,T.vy=W(.7,1.9),T.swirl=W(1.5,3.5)*(Oe()<.5?-1:1),T.flut=.5,T.drag=.3,T.life=W(.9,1.8),T.size=W(.05,.11)*s,T.fadeIn=.1,qe.spawn()}},grass(n,t,e,i,s){let r=jn(i,10);for(let o=0;o<r;o++){Ge(n+W(-.3,.3),t+W(0,.3),e+W(-.3,.3)),i&&i.color!=null?(Nn(i,1,1,1),Fn(.8,1.1)):(T.r=W(.12,.24),T.g=W(.3,.48),T.b=W(.06,.14));let a=Oe()*Math.PI*2,l=W(.8,2.6)*s;T.vx=Math.cos(a)*l,T.vz=Math.sin(a)*l,T.vy=W(1.2,3.2)*s,T.grav=7,T.drag=.8,T.flut=1.2,T.rot=Oe()*6.28,T.spin=W(-8,8),T.life=W(.7,1.4),T.size=W(.11,.19)*s,T.fadeIn=0,T.fadeOut=.2,gr.spawn()}},dust(n,t,e,i,s){let r=jn(i,9);Nn(i,.58,.52,.42);for(let o=0;o<r;o++){Ge(n+W(-.3,.3)*s,t+W(0,.25),e+W(-.3,.3)*s),Fn(.85,1.15);let a=Oe()*Math.PI*2,l=W(.4,1.4)*s;T.vx=Math.cos(a)*l,T.vz=Math.sin(a)*l,T.vy=W(.2,.7),T.drag=2.2,T.spin=W(-.8,.8),T.life=W(.6,1.2),T.size=W(.3,.6)*s,T.alpha=W(.2,.33),T.grow=1.8,T.fadeIn=.05,Ls.spawn()}},heal(n,t,e,i,s){let r=jn(i,14);Nn(i,1,.4,.58);for(let o=0;o<r;o++){let a=Oe()*Math.PI*2,l=W(.15,.85)*s;Ge(n+Math.cos(a)*l,t+W(0,.6),e+Math.sin(a)*l),Fn(.85,1.05),T.vy=W(.5,1.2),T.flut=.4,T.pulse=W(2,4),T.life=W(1.3,2.2),T.size=W(.06,.12)*s,T.alpha=.85,T.fadeIn=.25,qe.spawn()}},orb(n,t,e,i,s){let r=jn(i,18);Nn(i,.1,.85,.8);for(let o=0;o<r;o++){let a=Oe()*Math.PI*2,l=W(.25,.8)*s;Ge(n+Math.cos(a)*l,t+W(0,.5),e+Math.sin(a)*l),Fn(.8,1.05);let c=W(1.2,2.2)*s;T.vx=-Math.sin(a)*c,T.vz=Math.cos(a)*c,T.vy=W(1,2.2),T.swirl=3,T.drag=.3,T.life=W(1.1,1.9),T.size=W(.06,.12)*s,T.fadeIn=.12,qe.spawn()}},fire(n,t,e,i,s){for(let o=0;o<2;o++)Ge(n+W(-.2,.2),t+W(0,.3),e+W(-.2,.2)),Nn(i,1,.42,.14),Fn(.85,1),T.size=W(.4,.6)*s,T.life=W(.2,.35),T.alpha=.35,T.grow=1.4,T.fadeIn=0,qe.spawn();let r=jn(i,15);for(let o=0;o<r;o++){if(Ge(n+W(-.25,.25)*s,t+W(0,.3),e+W(-.25,.25)*s),i&&i.color!=null)Nn(i,1,1,1),Fn(.85,1.1);else{let c=Oe();T.r=1.12,T.g=.5+.3*c,T.b=.14+.14*c}let a=Oe()*Math.PI*2,l=W(.6,2.4)*s;T.vx=Math.cos(a)*l,T.vz=Math.sin(a)*l,T.vy=W(1.8,4.5)*s,T.grav=3.5,T.drag=.7,T.flut=.8,T.life=W(.5,1.1),T.size=W(.045,.1)*s,T.fadeIn=0,T.fadeOut=.18,qe.spawn()}},magic(n,t,e,i,s){Ge(n,t,e),Nn(i,.58,.32,1.1),Fn(.9,1),T.size=.85*s,T.life=.16,T.alpha=.5,T.grow=1.5,T.fadeIn=0,T.fadeOut=.13,qe.spawn();let r=jn(i,16);Nn(i,.5,.22,1.05);for(let o=0;o<r;o++){Ge(n,t,e),Fn(.8,1.1);let a=Oe()*Math.PI*2,l=(Oe()-.5)*2.4,c=W(1.8,4.5)*s;T.vx=Math.cos(a)*Math.cos(l)*c,T.vy=Math.sin(l)*c*.7+.8,T.vz=Math.sin(a)*Math.cos(l)*c,T.swirl=W(-3,3),T.drag=2.4,T.life=W(.5,1),T.size=W(.05,.13)*s,T.fadeIn=0,T.fadeOut=.2,qe.spawn()}},leaf(n,t,e,i,s){let r=jn(i,7);for(let o=0;o<r;o++){if(Ge(n+W(-1.2,1.2)*s,t+W(0,1.5)*s,e+W(-1.2,1.2)*s),i&&i.color!=null)Nn(i,1,1,1),Fn(.8,1.1);else{let a=Oe();T.r=.14+.18*a,T.g=W(.32,.5),T.b=.07+.09*a}T.vx=W(-.3,.3),T.vz=W(-.3,.3),T.vy=W(-.5,-.2),T.grav=.9,T.drag=.6,T.flut=1.6,T.rot=Oe()*6.28,T.spin=W(-4,4),T.life=W(2.5,4.5),T.size=W(.1,.18)*s,T.fadeIn=.2,T.fadeOut=.5,gr.spawn()}},firefly(n,t,e,i,s){let r=jn(i,5);Nn(i,.72,.95,.38);for(let o=0;o<r;o++)Ge(n+W(-1.5,1.5)*s,t+W(.2,1.8)*s,e+W(-1.5,1.5)*s),Fn(.75,1),T.vx=W(-.15,.15),T.vy=W(-.05,.15),T.vz=W(-.15,.15),T.flut=.7,T.life=W(4,7),T.size=W(.05,.08)*s,T.alpha=.9,T.pulse=W(1.5,3),T.fadeIn=.8,T.fadeOut=1.2,qe.spawn()}},Is="plains",Wf=0,Xf={firefly:0,leaf:0,ember:0,heat:0,glint:0,fluff:0,rune:0,mote:0},hn=0,un=0;function Ds(n,t,e){let i=Oe()*Math.PI*2,s=W(t,e);hn=n.x+Math.cos(i)*s,un=n.z+Math.sin(i)*s}function ob(n,t){Ds(t,1,7);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(.2,1.8),un),T.r=.2,T.g=.82,T.b=.72,T.vy=W(.25,.6),T.flut=.25,T.life=W(2.5,4),T.size=W(.03,.07),T.alpha=.8,T.pulse=2.5,T.fadeIn=.5,T.fadeOut=.8,qe.spawn()}function ab(n,t){Ds(t,4,26);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(.4,2.2),un);let i=W(.7,1);T.r=.72*i,T.g=.95*i,T.b=.36*i,T.vx=W(-.15,.15),T.vy=W(-.05,.12),T.vz=W(-.15,.15),T.flut=.7,T.life=W(5,9),T.size=W(.05,.08),T.alpha=.9,T.pulse=W(1.4,2.8),T.fadeIn=1,T.fadeOut=1.4,qe.spawn()}function lb(n,t){Ds(t,3,24);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(3,8),un);let i=Oe();T.r=.14+.18*i,T.g=W(.3,.5),T.b=.07+.09*i,T.vx=W(-.3,.3),T.vy=W(-.55,-.25),T.vz=W(-.3,.3),T.grav=.9,T.drag=.6,T.flut=1.6,T.rot=Oe()*6.28,T.spin=W(-4,4),T.life=W(4,7),T.size=W(.09,.17),T.fadeIn=.4,T.fadeOut=.6,gr.spawn()}function cb(n,t){Ds(t,3,26);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(0,1),un);let i=Oe();T.r=1.1,T.g=.45+.3*i,T.b=.12+.12*i,T.vy=W(.8,2.2),T.grav=-.4,T.flut=.6,T.life=W(1.2,2.6),T.size=W(.04,.09),T.fadeIn=.1,T.fadeOut=.4,qe.spawn()}function hb(n,t){Ds(t,2,20);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(.2,1),un);let i=W(.8,1.1);T.r=.95*i,T.g=.6*i,T.b=.36*i,T.vy=W(1,2),T.drag=.3,T.flut=.5,T.life=W(1.2,2),T.size=W(.8,1.4),T.alpha=.06,T.grow=1.2,T.fadeIn=.4,Ls.spawn()}function ub(n,t){Ds(t,2,28);let e=n.world;if(e.getHeight(hn,un)>=e.waterLevel-.12)return;Ge(hn,e.waterLevel+.04,un);let i=W(.7,1.1);T.r=.8*i,T.g=.98*i,T.b=1*i,T.life=W(.5,1.1),T.size=W(.03,.07),T.alpha=.9,T.pulse=8,T.fadeIn=.15,T.fadeOut=.3,qe.spawn()}function fb(n,t){Ds(t,4,26);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(.5,2.5),un);let i=W(.85,1);T.r=.95*i,T.g=.95*i,T.b=.9*i,T.vx=W(.25,.7),T.vy=W(.08,.3),T.vz=W(-.2,.2),T.flut=.9,T.life=W(5,8),T.size=W(.06,.1),T.alpha=.55,T.fadeIn=1,T.fadeOut=1.2,Ls.spawn()}function db(n,t){Ds(t,3,22);let e=n.getGroundHeight(hn,un);Ge(hn,e+W(.2,3),un);let i=W(.7,1);T.r=.48*i,T.g=.28*i,T.b=.72*i,T.vy=W(.2,.5),T.flut=.4,T.life=W(2,4),T.size=W(.04,.08),T.alpha=.55,T.pulse=W(1.5,3),T.fadeIn=.6,T.fadeOut=.8,qe.spawn()}function Ps(n,t,e,i,s,r){for(Xf[n]+=t*e;Xf[n]>=1;)Xf[n]-=1,i(s,r)}function pb(n,t){let e=n.player;if(!e||!n.world)return;let i=e.position,s=n.quality.particleMul||1;if(Wf-=t,Wf<=0&&(Wf=.5,Is=n.world.getBiome(i.x,i.z)||"plains"),n.state==="shrine"){Ps("rune",.9*s,t,ob,n,i);return}n.time.isNight&&Is!=="volcano"&&Is!=="castle"&&Ps("firefly",1*s,t,ab,n,i),Is==="forest"?Ps("leaf",1.4*s,t,lb,n,i):Is==="volcano"?(Ps("ember",3*s,t,cb,n,i),Ps("heat",.7*s,t,hb,n,i)):Is==="lake"?Ps("glint",5*s,t,ub,n,i):Is==="plains"?n.time.isNight||Ps("fluff",.3*s,t,fb,n,i):Is==="castle"&&Ps("mote",.5*s,t,db,n,i)}function Gm(){if(cn||!yn)return;let{renderer:n,scene:t,camera:e}=yn;n.getDrawingBufferSize(mr);let i=new rn(Math.max(1,mr.x),Math.max(1,mr.y),{type:Wn,samples:4});cn=new Ic(n,i),cn.addPass(new Pc(t,e)),km=new xo(new nt(innerWidth,innerHeight),.38,.55,.82),cn.addPass(km),cn.addPass(new Lc),yo=new go(tb),cn.addPass(yo),Dc()}function Dc(){if(!yn)return;if(cn){let t=yn.settings.quality==="high"?4:2;cn.renderTarget1.samples!==t&&(cn.renderTarget1.samples=t,cn.renderTarget2.samples=t,cn.renderTarget1.dispose(),cn.renderTarget2.dispose()),cn.setPixelRatio(yn.quality.pixelRatio||1),cn.setSize(innerWidth,innerHeight)}yn.renderer.getDrawingBufferSize(mr);let n=mr.y/(2*Math.tan(fm.degToRad(yn.camera.fov)*.5));qe&&(qe.mat.uniforms.uScale.value=n,Ls.mat.uniforms.uScale.value=n,gr.mat.uniforms.uScale.value=n),yo&&yo.uniforms.uRes.value.set(mr.x,mr.y)}function mb(){yn&&(cn&&yn.quality.postFX?(yo&&(yo.uniforms.uTime.value=yn.time.elapsed%1e3),cn.render()):yn.renderer.render(yn.scene,yn.camera))}function gb(n,t,e){if(!n||!Hm[t])return;let i=e||{},s=i.scale||1;Hm[t](n.x,n.y,n.z,i,s)}function xb(){Dc()}async function _b(n){yn=n;let t=ib(),e=sb(),i=rb();qe=new Ia(2e3,t,Ai,950),Ls=new Ia(2e3,e,Zi,940),gr=new Ia(1200,i,Zi,945),n.scene.add(Ls.points,gr.points,qe.points),n.quality.postFX&&Gm(),Dc(),n.on("quality-changed",s=>{s&&s.postFX&&!cn&&Gm(),Dc()}),n.effects={render:mb,burst:gb,onResize:xb}}function vb(n,t){let e=n.time.elapsed;qe.update(t,e),Ls.update(t,e),gr.update(t,e),pb(n,t)}var Wc={};Mi(Wc,{init:()=>Ib,update:()=>Lb});var yb=-30,Ym=11,Vm=6.2,Mb=1.65,Zm=.45,bb=9.2,$m=25,Sb=20,Eb=25,Jm=1,Km=3,wb=.42,Bc=4,Qm=.38,Tb=1,kc=[{dur:.42,a0:.34,a1:.62,dmg:1,lunge:3.8,sfx:"sword1"},{dur:.46,a0:.36,a1:.66,dmg:1,lunge:4,sfx:"sword2"},{dur:.74,a0:.34,a1:.78,dmg:1.5,lunge:2.6,sfx:"sword3"}],ve,ei,Fs,Ns,Mn,je,Ui,vr,Hc,Jf,Gc,Kf,Qf,jf,td,ed,Da,Ua,xr,Na,jm,t0,Fc,e0,ti,gi,fe=null,ae=null,Te=Math.PI,tn=!0,nd=!1,is=!1,id=!1,br=!1,zn=!1,Ut=null,zs=0,yr=0,bo=0,zc=0,_r=0,So=0,Mo=0,Us=0;var Mr=0,Vc=!1,za=0,Wm=3.5,Fa=0,qf=0,Yf=2.5,Uc=0,Xm=0,Ni=0,La=0,n0=new C,Zf={pos:n0,radius:1.5,damage:1,swingId:0},Os=new C,ns=new C,$f=new C,bn=new C,U={hipsY:0,hipsRY:0,torsoRX:0,torsoRY:0,torsoRZ:0,headRX:0,headRY:0,headRZ:0,shRX_R:.1,shRZ_R:-.1,elbR_:.25,shRX_L:.1,shRZ_L:.1,elbL_:.25,legR_:0,kneeR_:.06,legL_:0,kneeL_:.06};function i0(){U.hipsY=0,U.hipsRY=0,U.torsoRX=.02,U.torsoRY=0,U.torsoRZ=0,U.headRX=0,U.headRY=0,U.headRZ=0,U.shRX_R=.1,U.shRZ_R=-.12,U.elbR_=.25,U.shRX_L=.1,U.shRZ_L=.12,U.elbL_=.25,U.legR_=0,U.kneeR_=.06,U.legL_=0,U.kneeL_=.06,br&&(U.shRX_R=.16,U.elbR_=.45,U.elbL_=.4)}function Ab(){let n={tunic:ce(3968847),tunicDk:ce(3108413),skin:ce(15910556),hair:ce(14922575),white:ce(15789277),boots:ce(7227948),leather:ce(9068854),dark:ce(4206622),gold:ce(13214247),navy:ce(2832981),steel:ce(10465981),shieldF:ce(4477534),eye:ce(2300690),blade:ce(15266550,{emissive:new at(3399880),emissiveIntensity:.38}),emblem:ce(3399880,{emissive:new at(3399880),emissiveIntensity:1.1})};ve=new Gt,ei=new Gt,ei.position.y=.55,ve.add(ei),Fs=new Gt,Fs.position.y=-.55,ei.add(Fs),Ns=new Gt,Ns.position.y=.92,Fs.add(Ns);let t=new we(.078,.066,.4,7),e=new we(.056,.08,.32,7),i=new Ne(.11,.09,.2),s=new we(.086,.082,.09,7),r=H=>{let q=new Gt;q.position.set(H*.105,-.03,0),Ns.add(q),ot(t,n.white,0,-.2,0,q);let X=new Gt;X.position.set(0,-.4,0),q.add(X),ot(s,n.boots,0,-.11,0,X),ot(e,n.boots,0,-.26,0,X);let it=ot(i,n.boots,0,-.415,.045,X);return{hip:q,knee:X,foot:it}},o=r(-1),a=r(1);Qf=o.hip,jf=o.knee,jm=o.foot,td=a.hip,ed=a.knee,t0=a.foot,Mn=new Gt,Mn.position.y=.04,Ns.add(Mn);let l=ot(new we(.185,.295,.3,7),n.tunic,0,.09,0,Mn);l.rotation.y=Math.PI/7,ot(new we(.225,.24,.075,7),n.dark,0,.205,0,Mn),ot(new Ne(.075,.06,.03),n.gold,0,.205,.225,Mn),ot(new we(.155,.215,.34,7),n.tunic,0,.385,0,Mn),ot(new we(.105,.15,.1,7),n.tunicDk,0,.545,0,Mn),xr=new Gt,xr.position.set(-.15,.5,-.185),xr.rotation.set(.1,0,-2.6),Mn.add(xr),ot(new Ne(.095,.74,.05),n.leather,0,.44,0,xr),ot(new Ne(.11,.06,.06),n.gold,0,.62,0,xr),Na=new Gt,Na.position.set(.02,.3,-.27),Na.rotation.set(0,Math.PI,.08),Mn.add(Na);let c=new we(.056,.05,.26,7),h=new we(.052,.068,.24,7),u=new Vn(.056,7,6),f=new Vn(.088,7,6),p=H=>{let q=new Gt;q.position.set(H*.265,.5,0),Mn.add(q),ot(f,n.tunic,H*.01,.015,0,q).scale.set(1,.8,.9),ot(c,n.white,0,-.145,0,q);let it=new Gt;return it.position.set(0,-.28,0),q.add(it),ot(h,n.leather,0,-.125,0,it),ot(u,n.skin,0,-.27,0,it),{sh:q,elb:it}},g=p(-1),_=p(1);Hc=g.sh,Jf=g.elb,Gc=_.sh,Kf=_.elb,Da=new Gt,Da.position.set(0,-.28,.01),Da.rotation.x=2.35,Jf.add(Da),Ua=new Gt,Ua.position.set(.09,-.15,0),Ua.rotation.set(0,Math.PI/2,Math.PI/2),Kf.add(Ua),je=new Gt,je.position.y=.585,Mn.add(je),ot(new Vn(.155,9,8),n.skin,0,.105,.012,je).scale.set(.98,1,.94);let d=new an(.03,.09,4),M=ot(d,n.skin,-.15,.1,-.01,je);M.rotation.z=Math.PI/2+.15;let y=ot(d,n.skin,.15,.1,-.01,je);y.rotation.z=-Math.PI/2-.15;let x=new Ne(.03,.062,.02);Fc=ot(x,n.eye,-.056,.105,.148,je),e0=ot(x,n.eye,.056,.105,.148,je);let D=ot(new Ne(.21,.075,.06),n.hair,0,.2,.105,je);D.rotation.x=.28,ot(new Ne(.055,.12,.05),n.hair,-.105,.155,.085,je).rotation.set(.15,0,.25),ot(new Ne(.055,.12,.05),n.hair,.105,.155,.085,je).rotation.set(.15,0,-.25),ot(new Ne(.05,.09,.04),n.hair,0,.155,.125,je).rotation.x=.35;let I=ot(new an(.2,.26,8),n.tunic,0,.295,-.025,je);I.rotation.x=-.3,ot(new we(.2,.19,.085,8),n.tunicDk,0,.2,-.005,je),Ui=new Gt,Ui.position.set(0,.385,-.09),je.add(Ui),ot(new an(.098,.26,7),n.tunic,0,.11,0,Ui),vr=new Gt,vr.position.set(0,.225,0),Ui.add(vr),ot(new an(.047,.22,6),n.tunic,0,.09,0,vr),ot(new Vn(.028,6,5),n.tunicDk,0,.205,0,vr),ti=new Gt;let S=ot(new Ne(.052,.6,.016),n.blade,0,.415,0,ti);S.scale.z=1,S.geometry.translate(0,0,0);let v=ot(new an(.037,.09,4),n.blade,0,.755,0,ti);v.rotation.y=Math.PI/4,v.scale.z=.3,ot(new Ne(.16,.038,.05),n.gold,0,.105,0,ti),ot(new we(.021,.021,.15,6),n.navy,0,.015,0,ti),ot(new Vn(.032,6,5),n.gold,0,-.065,0,ti),gi=new Gt;let L=ot(new we(.26,.235,.045,12),n.shieldF,0,0,0,gi);L.rotation.x=Math.PI/2;let B=ot(new lo(.245,.026,6,12),n.gold,0,0,.02,gi),O=ot(new we(.095,.095,.022,3),n.emblem,0,-.01,.032,gi);return O.rotation.x=Math.PI/2,O.rotation.z=0,ot(new Vn(.045,7,6),n.gold,0,.1,.035,gi).scale.set(1,1,.55),ve.userData.rig={hips:Ns,torso:Mn,headG:je,shR:Hc,shL:Gc,legR:Qf,legL:td,kneeR:jf,kneeL:ed,capMid:Ui,inner:Fs},Oa(!1,!0),ve}function Oa(n,t){br===n&&!t||(br=n,n?(Da.add(ti),ti.position.set(0,.04,0),ti.rotation.set(0,0,0),Ua.add(gi),gi.position.set(0,0,.02),gi.rotation.set(0,0,0)):(xr.add(ti),ti.position.set(0,.06,0),ti.rotation.set(0,0,0),Na.add(gi),gi.position.set(0,0,0),gi.rotation.set(0,0,0)))}var s0=null;function Rb(){is||(is=!0,zn=!1,Ni=0,Ut={type:"dead",t:0,dur:999},id||(id=!0,s0.emit("player-died")))}function Cb(){is=!1,id=!1,Ut=null,ei.rotation.set(0,0,0),Ni=0,yr=1.2,Mr=0,Fs.visible=!0}async function Ib(n){s0=n,Ab(),ae=new C,n.world&&n.world.startPos?ve.position.copy(n.world.startPos):ve.position.set(0,0,250),ve.position.y=n.getGroundHeight(ve.position.x,ve.position.z),ve.rotation.y=Te,n.scene.add(ve),i0(),r0(1,500),fe={obj:ve,position:ve.position,heading:Te,velocity:ae,hp:3,maxHp:3,stamina:100,maxStamina:100,spiritOrbs:0,gems:0,onGround:!0,isRolling:!1,isBlocking:!1,damage(t,e){if(is||yr>0||Ut&&Ut.type==="roll")return;bo=Bc,Oa(!0);let i=!1;if(zn&&e){let o=Math.atan2(e.x-ve.position.x,e.z-ve.position.z);Math.abs(mc(Te,o))<=70*Math.PI/180&&(i=!0)}let s=-Math.sin(Te),r=-Math.cos(Te);if(e){let o=ve.position.x-e.x,a=ve.position.z-e.z,l=Math.hypot(o,a);l>1e-4&&(s=o/l,r=a/l)}i?(t*=.2,ae.x+=s*2.5,ae.z+=r*2.5,n.audio.play("block"),Os.set(ve.position.x+Math.sin(Te)*.55,ve.position.y+1.05,ve.position.z+Math.cos(Te)*.55),n.effects.burst(Os,"spark")):(ae.x=s*6.5,ae.z=r*6.5,tn&&(ae.y=2.5,tn=!1),Ut={type:"hurt",t:0,dur:Qm},Ni=0,n.ui.flash("#ff2222",.25),n.audio.play("damage"),Os.set(ve.position.x,ve.position.y+1,ve.position.z),n.effects.burst(Os,"hit")),yr=Tb,fe.hp=qt(fe.hp-t,0,fe.maxHp),n.emit("player-damaged",{hp:fe.hp,amount:t}),fe.hp<=0&&Rb()},heal(t){fe.hp=qt(fe.hp+t,0,fe.maxHp),is&&fe.hp>0&&Cb()},addMaxHeart(){fe.maxHp+=1,fe.hp=fe.maxHp},getAttackHit(){if(!Ut||Ut.type!=="atk")return null;let t=kc[Ut.idx],e=Ut.t/t.dur;return e<t.a0||e>t.a1?null:(n0.set(ve.position.x+Math.sin(Te)*1.3,ve.position.y+1,ve.position.z+Math.cos(Te)*1.3),Zf.damage=t.dmg,Zf.swingId=Ut.swingId,Zf)},teleport(t,e=Math.PI){ve.position.copy(t),Te=e,fe.heading=e,ve.rotation.y=e,ae.set(0,0,0),is||(Ut=null,ei.rotation.set(0,0,0),Ni=0,Fs.visible=!0),zn=!1,fe.isBlocking=!1,fe.isRolling=!1,tn=!0,fe.onGround=!0,So=0,Mo=0,Us=0,Mr=0},setFrozen(t){nd=!!t,nd&&(zn=!1,zs=0,Ut&&Ut.type!=="dead"&&(Ut=null,ei.rotation.x=0,Ni=0),ae.x=0,ae.z=0)}},n.player=fe}function qm(n,t){Oa(!0),zs=0,Xm++,Ut={type:"atk",idx:t,t:0,dur:kc[t].dur,swingId:Xm,sfxDone:!1},bo=Bc,zn=!1,Ni=0,!(n.camera3p&&n.camera3p.lockTarget)&&bn.lengthSq()>.5&&(Te=Math.atan2(bn.x,bn.z))}function Pb(n,t){fe.stamina=qt(fe.stamina-$m,0,fe.maxStamina),zc=Jm,fe.stamina<=0&&(_r=Km);let e=t?Math.atan2(bn.x,bn.z):Te;Ut={type:"roll",t:0,dur:Zm,dx:Math.sin(e),dz:Math.cos(e)},Te=e,zs=0,zn=!1,n.audio.play("roll"),Oc(n,0)}function Oc(n,t){let e=t===1?jm:t===2?t0:null;e?e.getWorldPosition(Os):(Os.copy(ve.position),Os.y+=.06),n.effects.burst(Os,"dust")}function Lb(n,t){if(!fe)return;La+=t;let e=ve.position,i=n.input,s=!nd&&!is;yr>0&&(yr-=t),zs>0&&(zs-=t),Mr>0&&(Mr-=t),_r>0&&(_r-=t),zc>0?zc-=t:fe.stamina=qt(fe.stamina+Eb*t,0,fe.maxStamina);let r=0,o=0;s&&(r=(i.keys.has("KeyW")||i.keys.has("ArrowUp")?1:0)-(i.keys.has("KeyS")||i.keys.has("ArrowDown")?1:0),o=(i.keys.has("KeyD")||i.keys.has("ArrowRight")?1:0)-(i.keys.has("KeyA")||i.keys.has("ArrowLeft")?1:0)),n.camera.getWorldDirection(ns),ns.y=0,ns.lengthSq()<1e-6&&ns.set(0,0,-1),ns.normalize(),$f.set(-ns.z,0,ns.x),bn.set(ns.x*r+$f.x*o,0,ns.z*r+$f.z*o);let a=bn.lengthSq()>1e-6;a&&bn.normalize();let l=n.camera3p?n.camera3p.lockTarget:null,c=!!(l&&l.alive!==!1&&l.pos),h=c?Math.atan2(l.pos.x-e.x,l.pos.z-e.z):0,u=s&&!Ut&&tn&&(i.mouse.right||i.keys.has("KeyK"));u&&!zn&&(Oa(!0),bo=Bc),zn=u,s&&(i.mouse.leftJust||i.justPressed("KeyJ"))&&(zs=.3),s&&!Ut&&tn&&(zs>0?qm(n,0):i.justPressed("KeyC")&&_r<=0&&fe.stamina>=$m?Pb(n,a):i.justPressed("Space")&&(ae.y=Ym,tn=!1,zn=!1,n.audio.play("jump"),Oc(n,0)));let f=n.world&&n.world.waterLevel!==void 0?n.world.waterLevel:-1e9,p=e.y<f+.4,g=!1;if(Ut){Ut.t+=t;let R=Ut.t/Ut.dur;if(Ut.type==="atk"){let w=kc[Ut.idx];!Ut.sfxDone&&R>=w.a0-.1&&(Ut.sfxDone=!0,n.audio.play(w.sfx));let I=Vt(w.a0-.1,w.a0+.1,R)*(1-Vt(w.a1,w.a1+.14,R));ae.x=Lt(ae.x,Math.sin(Te)*w.lunge*I,18,t),ae.z=Lt(ae.z,Math.cos(Te)*w.lunge*I,18,t),R<w.a0&&(c?Te=Ii(Te,h,16,t):a&&(Te=Ii(Te,Math.atan2(bn.x,bn.z),10,t))),R>=1&&(zs>0&&Ut.idx<2&&tn&&s?qm(n,Ut.idx+1):(Ut=null,Ni=0))}else if(Ut.type==="roll"){let w=bb*(1-.55*Vt(.55,1,R))*(p?.5:1);ae.x=Ut.dx*w,ae.z=Ut.dz*w,R>=1&&(Ut=null,ei.rotation.x=0)}else Ut.type==="hurt"?(ae.x=Lt(ae.x,0,5,t),ae.z=Lt(ae.z,0,5,t),Ut.t>=Ut.dur&&(Ut=null)):Ut.type==="dead"&&(ae.x=Lt(ae.x,0,8,t),ae.z=Lt(ae.z,0,8,t))}else{let R=0;a?(R=Vm,s&&tn&&!zn&&_r<=0&&fe.stamina>0&&(i.keys.has("ShiftLeft")||i.keys.has("ShiftRight"))&&(g=!0,R*=Mb,fe.stamina=qt(fe.stamina-Sb*t,0,fe.maxStamina),zc=Jm,fe.stamina<=0&&(_r=Km)),zn&&(R*=.5),p&&(R*=.5),c?Te=Ii(Te,h,14,t):Te=Ii(Te,Math.atan2(bn.x,bn.z),g?15:11,t)):c&&(Te=Ii(Te,h,14,t));let w=tn?12:3.5;ae.x=Lt(ae.x,bn.x*R,w,t),ae.z=Lt(ae.z,bn.z*R,w,t)}tn||(ae.y+=yb*t),e.x+=ae.x*t,e.z+=ae.z*t,e.y+=ae.y*t;let _=n.colliders;for(let R=0;R<_.length;R++){let w=_[R],I=e.x-w.x,S=e.z-w.z,v=w.radius+wb,L=I*I+S*S;if(L>=v*v||w.height!==void 0&&e.y>n.getGroundHeight(w.x,w.z)+w.height)continue;if(L<1e-8){e.x-=Math.sin(Te)*v,e.z-=Math.cos(Te)*v;continue}let B=Math.sqrt(L),O=(v-B)/B;e.x+=I*O,e.z+=S*O}let m=n.playerBounds;m&&(e.x=qt(e.x,m.minX,m.maxX),e.z=qt(e.z,m.minZ,m.maxZ));let d=n.getGroundHeight(e.x,e.z);e.y<=d?(tn||(Vc=ae.y<-14,Mr=Vc?.26:.15,n.audio.play("land"),Oc(n,0)),e.y=d,ae.y=0,tn=!0):tn&&(e.y-d<.4?e.y=d:tn=!1),br&&(zn||Ut&&Ut.type==="atk"?bo=Bc:(bo-=t,bo<=0&&!Ut&&Oa(!1)));let M=Math.hypot(ae.x,ae.z),y=qt(M/Vm,0,1.8);if(Us=Lt(Us,tn&&M>.6?1:0,10,t),tn&&!Ut&&M>.4){So+=t*(4.5+M*1.3);let R=Math.sin(So);M>2.2&&Mo*R<=0&&Mo!==R&&(n.audio.play("step"),Oc(n,Mo<0?1:2)),Mo=R}else Mo=0;i0();let x=14;is&&Ut?x=Hb(Ut.t):Ut&&Ut.type==="roll"?x=Bb(qt(Ut.t/Zm,0,1)):Ut&&Ut.type==="atk"?x=Ob(Ut.idx,qt(Ut.t/kc[Ut.idx].dur,0,1)):Ut&&Ut.type==="hurt"?x=kb(Ut.t/Qm):tn?(Us>.06?Ub(y,g,c):Db(La,t),zn&&zb(),Mr>0&&Fb()):x=Nb(ae.y),_r>0&&!Ut&&tn&&(U.torsoRX+=.12,U.headRX+=.16),r0(t,x),Ut||(ei.rotation.x=Lt(ei.rotation.x,0,20,t)),ve.rotation.y=Te+Ni;let D=Math.sin(La*2.2)*.06+Math.sin(So*2)*.12*Us;Ui.rotation.x=Lt(Ui.rotation.x,-.8-Us*.35-qt(ae.y*.022,-.3,.3)+D,8,t),vr.rotation.x=Lt(vr.rotation.x,-.62-Us*.28+Math.sin(La*2.2+.9)*.08+Math.sin(So*2+1.2)*.15*Us,7,t),Ui.rotation.z=Lt(Ui.rotation.z,Math.sin(La*1.7)*.05,6,t),Yf-=t,Yf<=0&&(Yf=2+Math.random()*3.5,Uc=.13),Uc>0&&(Uc-=t),Fc.scale.y=Lt(Fc.scale.y,Uc>0?.12:1,30,t),e0.scale.y=Fc.scale.y,Fs.visible=is||!(yr>0&&Math.floor(yr*14)%2===0),fe.onGround=tn,fe.isRolling=!!(Ut&&Ut.type==="roll"),fe.isBlocking=zn,fe.heading=Te}var Nc=n=>(n=qt(n,0,1),1-(1-n)*(1-n)*(1-n));function Db(n,t){let e=Math.sin(n*1.7);if(U.torsoRX=.035+e*.022,U.hipsY=-.012+e*.01,U.shRZ_R=-.14-e*.02,U.shRZ_L=.14+e*.02,U.elbR_=(br?.52:.28)+e*.03,U.elbL_=(br?.42:.28)+e*.03,U.legR_=-.045,U.legL_=.055,U.kneeR_=.09,U.kneeL_=.06,za+=t,Fa>0){Fa-=t;let i=Math.sin(qt(1-Fa/1.5,0,1)*Math.PI);U.headRY=qf*i,U.headRX=.05*i,U.torsoRY=qf*i*.14}else za>=Wm&&(za=0,Wm=2.5+Math.random()*4,Fa=1.5,qf=(Math.random()<.5?-1:1)*(.5+Math.random()*.35))}function Ub(n,t,e){za=0,Fa=0;let i=So,s=qt(n,0,1),r=.34+.44*s+(t?.13:0),o=.36+.48*s+(t?.17:0),a=Math.sin(i),l=-a,c=Math.cos(i);if(U.legR_=-a*r,U.legL_=-l*r,U.kneeR_=Math.max(0,c)*(.6+.7*s),U.kneeL_=Math.max(0,-c)*(.6+.7*s),U.shRX_R=a*o,U.shRX_L=l*o,U.elbR_=.4+Math.max(0,-a)*.65+(br?.12:0),U.elbL_=.4+Math.max(0,-l)*.65,U.shRZ_R=-.12,U.shRZ_L=.12,U.torsoRX=.06+s*.12+(t?.22:0),U.torsoRY=a*.09,U.hipsY=(-.055+Math.abs(c)*.055)*s,U.headRX=-U.torsoRX*.55,e){let h=mc(Te,Math.atan2(bn.x,bn.z));U.hipsRY=qt(h*.45,-.85,.85),U.torsoRZ=-Math.sin(h)*.07}}function Nb(n){let t=qt(n/Ym,-1,1);return U.torsoRX=.13-t*.07,U.legR_=-.58+t*.1,U.kneeR_=1.05,U.legL_=.32,U.kneeL_=.5,U.shRX_R=-.5-t*.3,U.shRZ_R=-.6,U.shRX_L=-.5-t*.3,U.shRZ_L=.6,U.elbR_=.55,U.elbL_=.55,U.headRX=n<0?.12:-.08,10}function Fb(){let n=qt(Mr/(Vc?.26:.15),0,1)*(Vc?1:.5);U.hipsY-=.22*n,U.kneeR_+=.95*n,U.kneeL_+=.95*n,U.legR_-=.48*n,U.legL_-=.42*n,U.torsoRX+=.32*n,U.shRX_R-=.3*n,U.shRX_L-=.3*n}function zb(){U.shRX_L=-1.18,U.shRZ_L=-.55,U.elbL_=1.4,U.shRX_R=.35,U.shRZ_R=-.4,U.elbR_=.8,U.torsoRX+=.1,U.torsoRY=.18,U.hipsY-=.06,U.legR_-=.16,U.legL_+=.13,U.kneeR_+=.28,U.kneeL_+=.16,U.headRX=-.04}function Ob(n,t){if(za=0,n===0){let s=Vt(0,.2,t),r=Nc((t-.24)/.3),o=Vt(.8,1,t);return U.torsoRY=vt(-.85*s,.95,r)*(1-o*.45),U.torsoRX=.1+r*.16,U.shRX_R=vt(vt(.15,-.4,s),-1.35,r),U.shRZ_R=vt(vt(-.12,-1.15,s),.45,r),U.elbR_=vt(vt(.45,1.05,s),.1,r),U.shRX_L=vt(.1,.55,r),U.shRZ_L=.38,U.elbL_=.7,U.hipsY=-.05-r*.03,U.legR_=-.38*r,U.legL_=.3*r,U.kneeR_=.3,U.kneeL_=.26,U.headRY=-U.torsoRY*.45,t<.24?16:30}if(n===1){let s=Vt(0,.22,t),r=Nc((t-.26)/.3),o=Vt(.82,1,t);return U.torsoRY=vt(.9*s,-.95,r)*(1-o*.45),U.torsoRX=.12+r*.12,U.shRX_R=vt(vt(-.4,-.85,s),-1.25,r),U.shRZ_R=vt(vt(.1,.75,s),-1.25,r),U.elbR_=vt(vt(.5,1.15,s),.14,r),U.shRX_L=.3,U.shRZ_L=vt(.2,.8,r),U.elbL_=.6,U.hipsY=-.06,U.legR_=.3*r,U.legL_=-.38*r,U.kneeR_=.26,U.kneeL_=.3,U.headRY=-U.torsoRY*.45,t<.26?16:30}let e=Vt(0,.24,t),i=Nc((t-.26)/.42);return Ni=Math.PI*2*Nc((t-.26)/.52),t>=.99&&(Ni=0),U.torsoRY=vt(-.9*e,-.15,i),U.torsoRX=.16+e*.1,U.shRX_R=vt(vt(.15,-.5,e),-.9,i),U.shRZ_R=vt(vt(-.12,-.55,e),-1.5,i),U.elbR_=vt(vt(.45,1.2,e),.05,i),U.shRX_L=-.35,U.shRZ_L=vt(.2,.95,i),U.elbL_=.45,U.hipsY=-.1-Math.sin(qt(i,0,1)*Math.PI)*.07,U.legR_=-.32,U.legL_=.36,U.kneeR_=.45,U.kneeL_=.52,U.headRY=.1,t<.24?15:26}function Bb(n){let t=n<.5?2*n*n:1-(2-2*n)*(2-2*n)/2;return ei.rotation.x=Math.PI*2*t,U.hipsY=-.32,U.torsoRX=.85,U.headRX=.6,U.legR_=-1.65,U.legL_=-1.55,U.kneeR_=2.2,U.kneeL_=2.3,U.shRX_R=-.9,U.shRZ_R=-.35,U.elbR_=2.1,U.shRX_L=-.9,U.shRZ_L=.35,U.elbL_=2.1,26}function kb(n){let t=Math.sin(qt(n,0,1)*Math.PI);return U.torsoRX=-.4*t,U.headRX=-.32*t,U.shRX_R=-.5*t,U.shRZ_R=-.75*t-.1,U.shRX_L=-.5*t,U.shRZ_L=.75*t+.1,U.elbR_=.8,U.elbL_=.8,U.hipsY=-.06*t,U.legR_=-.28*t,U.kneeR_=.45*t,U.legL_=.15*t,22}function Hb(n){let t=Vt(0,.5,n),e=Vt(.65,1.35,n);return U.hipsY=-.52*t-.14*e,U.kneeR_=2.35*t,U.kneeL_=2.35*t,U.legR_=.12*t,U.legL_=.12*t,U.torsoRX=.22*t+.6*e,U.headRX=.28*t+.4*e,U.shRX_R=.2*t-.55*e,U.shRZ_R=-.3,U.shRX_L=.2*t-.55*e,U.shRZ_L=.3,U.elbR_=.3,U.elbL_=.3,ei.rotation.x=1.15*e,8}function r0(n,t){let e=(i,s,r)=>{i[s]=Lt(i[s],r,t,n)};e(Ns.position,"y",.92+U.hipsY),e(Ns.rotation,"y",U.hipsRY),e(Mn.rotation,"x",U.torsoRX),e(Mn.rotation,"y",U.torsoRY-U.hipsRY),e(Mn.rotation,"z",U.torsoRZ),e(je.rotation,"x",U.headRX-U.torsoRX*.4),e(je.rotation,"y",U.headRY),e(je.rotation,"z",U.headRZ),e(Hc.rotation,"x",U.shRX_R),e(Hc.rotation,"z",U.shRZ_R),e(Jf.rotation,"x",-Math.max(0,U.elbR_)),e(Gc.rotation,"x",U.shRX_L),e(Gc.rotation,"z",U.shRZ_L),e(Kf.rotation,"x",-Math.max(0,U.elbL_)),e(Qf.rotation,"x",U.legR_),e(jf.rotation,"x",Math.max(0,U.kneeR_)),e(td.rotation,"x",U.legL_),e(ed.rotation,"x",Math.max(0,U.kneeL_))}var Va={};Mi(Va,{init:()=>iS,update:()=>sS});var sd=-.35,rd=1.25,o0=4,a0=13,l0=.0032,c0=.0026,Gb=.011,Zc=1.6,Vb=.45,od=.4,h0=8,$c=55,Wb=61,Xb=7,qb=32,Yb=40,Zb=-650,Bs=0,On=.3,Xc=7.5,wo=7.5,ss=7.5,Ro="follow",qc=null,Ba=0,ka=0,Ha=1,Eo=$c,To=$c,xi=null,Ao=0,ad=0,Sr=[0,0,0,0,0,0],Yc=null,Fi=new C(0,Zc,250),Bn=new C(0,8,262),wn=new C,Er=new C,ks=new C,$b=new C(0,0,-560);function Jb(n){return n&&(n.pos||n.root&&n.root.position)||null}function Ga(n,t){let e=t||null;e!==xi&&(xi=e,Yc&&(Yc.lockTarget=e),n.emit("lockon",{target:e}))}function Kb(n){let t=qt(n||0,0,1);if(!(t<=0)){Ao=Math.max(Ao,t),ad=0;for(let e=0;e<6;e++)Sr[e]=Math.random()*Math.PI*2}}function Qb(n,t,e,i,s,r){let o=0,a=Math.max(t.y-(n.getGroundHeight(t.x,t.z)+od),.001);for(let l=1;l<=h0;l++){let c=r*l/h0,h=t.y+i*c,u=n.getGroundHeight(t.x+e*c,t.z+s*c)+od,f=h-u;if(f<0){let p=a/(a-f);return qt(o+(c-o)*p-.2,1.3,r)}o=c,a=Math.max(f,.001)}return r}function jb(n,t){if(n!=="follow"&&xi&&Ga(t,null),Ro=n,Ba=0,n==="title"&&(ka=0),n==="follow"){wn.copy(Bn).sub(Fi);let e=wn.length();e>.05&&(Bs=Math.atan2(wn.x,wn.z),On=qt(Math.asin(qt(wn.y/e,-1,1)),sd,rd)),wo=qt(e,1.5,120),ss=wo,Ha=0}}function tS(n,t){let e=n.camera,i=n.player,s=n.input.mouse,r=n.state;if((r==="playing"||r==="shrine"||r==="boss")&&n.input.justPressed("KeyQ")){if(xi)Ga(n,null);else if(n.combat&&typeof n.combat.nearestTargetable=="function"){let x=n.combat.nearestTargetable(i.position,qb);x&&Ga(n,x)}}let a=Jb(xi);xi&&(!xi.alive||!a||a.distanceTo(i.position)>Yb)&&(Ga(n,null),a=null),xi&&a?(Bs-=s.dx*l0*.35,Bs=Ii(Bs,Math.atan2(i.position.x-a.x,i.position.z-a.z),4.2,t),On=qt(On+s.dy*c0,sd,rd),On=Lt(On,qt(On,.22,.6),2.6,t)):(Bs-=s.dx*l0,On=qt(On+s.dy*c0,sd,rd)),Xc=qt(Xc+s.wheel*Gb,o0,a0),Ha=Math.min(1,Ha+t/1.1);let l=Vt(0,1,Ha),c=vt(2.2,12,l),h=vt(1.8,6,l);if(Ha<1&&(On=Lt(On,qt(On,.12,.85),(1-l)*2.5,t)),wn.copy(i.position),wn.y+=Zc,xi&&a){Er.set(a.x,a.y+1.2,a.z).sub(wn);let x=Er.length();x>.001&&wn.addScaledVector(Er,Math.min(.32,3.5/x)),wn.y+=.25}Fi.lerp(wn,1-Math.exp(-c*t));let u=qt(Xc+(xi?1.5:0),o0,a0+2);wo=Lt(wo,u,h,t);let f=Math.cos(On),p=Math.sin(Bs)*f,g=Math.sin(On),_=Math.cos(Bs)*f,m=Qb(n,Fi,p,g,_,wo);m<ss?ss=m:ss=Lt(ss,m,3.2,t),Bn.set(Fi.x+p*ss,Fi.y+g*ss,Fi.z+_*ss);let d=n.getGroundHeight(Bn.x,Bn.z)+od;Bn.y<d&&(Bn.y=d),e.position.copy(Bn),ks.copy(Fi),ks.y+=Vb,e.lookAt(ks);let M=i.velocity;To=(M?Math.hypot(M.x,M.z):0)>Xb?Wb:$c}function eS(n,t){let e=n.camera,i=n.player,s=n.world&&n.world.castleGatePos||$b;Ba+=t;let r=1.5;if(Ro==="title"){ka+=t;let a=i.position,l=.85+ka*.07,c=14.5+Math.sin(ka*.1+.6)*2.4,h=2.9+Math.sin(ka*.06+1.5)*1.3;wn.set(a.x+Math.sin(l)*c,a.y+h,a.z+Math.cos(l)*c);let u=.16+.34*Math.max(0,Math.cos(l));ks.set(-a.x,0,Zb-a.z),ks.lengthSq()>.001&&ks.normalize(),Er.set(a.x+ks.x*26*u,a.y+Zc+5.5*u,a.z+ks.z*26*u),To=50,r=1.7}else if(Ro==="bossIntro"){let a=Vt(0,6.5,Ba);wn.set(s.x+vt(-9,7,a),s.y+vt(1.4,10.5,a),s.z+vt(30,24,a)),Er.set(s.x,s.y+vt(5,26,a),s.z+vt(-4,-16,a)),To=52,r=1.4}else{let a=Vt(0,16,Ba);wn.set(s.x+Math.sin(Ba*.05)*8,s.y+vt(5,130,a),s.z+vt(45,90,a)),Er.set(s.x,s.y+vt(18,2,a),s.z+vt(-30,620,a)),To=56,r=1.2}Fi.lerp(Er,1-Math.exp(-2.3*t)),Bn.lerp(wn,1-Math.exp(-r*t));let o=n.getGroundHeight(Bn.x,Bn.z)+1;Bn.y<o&&(Bn.y=o),e.position.copy(Bn),e.lookAt(Fi)}function nS(n,t){if(Ao<=0)return;ad+=t;let e=Ao*Math.exp(-3.4*ad);if(e<.003){Ao=0;return}let i=n.time.elapsed,s=n.camera;s.position.x+=e*.32*(Math.sin(i*33+Sr[0])*.62+Math.sin(i*51+Sr[1])*.38),s.position.y+=e*.26*(Math.sin(i*39+Sr[2])*.62+Math.sin(i*57+Sr[3])*.38),s.position.z+=e*.2*Math.sin(i*29+Sr[4]),s.rotateZ(e*.035*Math.sin(i*43+Sr[5]))}async function iS(n){let t=n.player;t&&t.position&&Fi.set(t.position.x,t.position.y+Zc,t.position.z),Bn.copy(n.camera.position),Eo=n.camera.fov||$c,To=Eo,Bs=0,On=.3,Xc=7.5,wo=7.5,ss=7.5,Ro="follow",qc=null,xi=null,Ao=0,Yc={lockTarget:null,setLockTarget(e){Ga(n,e||null)},shake(e){Kb(e)},cinematic(e){qc=e==="title"||e==="bossIntro"||e==="ending"?e:null}},n.camera3p=Yc,n.on("state",e=>{let i=e&&e.to;(i==="title"||i==="gameover")&&(qc=null)})}function sS(n,t){let e=n.camera,i=n.player;if(!e||!i||!i.position)return;let s=n.state==="title"?"title":qc||"follow";s!==Ro&&jb(s,n),Ro==="follow"?tS(n,t):eS(n,t),Eo=Lt(Eo,To,4.5,t),Math.abs(e.fov-Eo)>.002&&(e.fov=Eo,e.updateProjectionMatrix()),nS(n,t)}var Qc={};Mi(Qc,{init:()=>GS,update:()=>VS});var he=In(12220178),rS=-558,oS=120,aS=2,lS=140,m0=90,g0=50,u0=30,rs={hp:2,radius:.7,walk:1.15,run:4.2,notice:18,range:2,reach:2.7,dmg:.5,height:1.25,hitY:.7},Io={hp:4,radius:.65,speed:4.2*1.3,range:2,reach:2.8,dmg:.5,height:1.8,hitY:1,max:6},Hs={hp:2,radius:.6,near:8,far:20,fireCd:2.5,dmg:.5,height:.6,hitY:0},Po=null,fn=null,ni=[],ud=[],x0=[],Xa=[],Vs=[],gd=[],xd=[],Kc=[],Co=[],Fe=null,fd=!1,ld=0,Jc=0,bt=null,It=null,Ws=new C;function Xs(n,t){try{Po.audio&&Po.audio.play(n,t)}catch{}}function _i(n,t,e){try{Po.effects&&Po.effects.burst(n,t,e)}catch{}}function _d(n){return n.pos||n.root&&n.root.position||null}function vi(n,t,e){if(e<rS)return!1;let i=n.world?n.world.waterLevel:-9999;return n.getGroundHeight(t,e)>i-.5}function dd(n,t,e,i=8){if(vi(n,t,e))return{x:t,z:e};for(let s=0;s<12;s++){let r=he()*Math.PI*2,o=2+he()*i,a=t+Math.sin(r)*o,l=e+Math.cos(r)*o;if(vi(n,a,l))return{x:a,z:l}}return{x:t,z:e}}function cS(){bt={sphere:new Vn(1,10,8),cone:new an(1,1,6),cone4:new an(1,1,4),limb:new we(1,.82,2,7),box:new Ne(1,1,1),skirt:new we(.26,.37,.26,9,1,!0),rib:new lo(.17,.028,5,10),rock:new nc(1,0),gem:new sc(.16,0)},bt.gem.scale(1,1.45,1),bt.tent=new we(.95,.95,1.7,3,1,!1,Math.PI/2),bt.tent.rotateZ(Math.PI/2),bt.tent.translate(0,.48,0);let n=new fa;n.moveTo(2.5,2.5),n.bezierCurveTo(2.5,2.5,2,0,0,0),n.bezierCurveTo(-3,0,-3,3.5,-3,3.5),n.bezierCurveTo(-3,5.5,-1,7.7,2.5,9.5),n.bezierCurveTo(6,7.7,8,5.5,8,3.5),n.bezierCurveTo(8,3.5,8,0,5,0),n.bezierCurveTo(3.5,0,2.5,2.5,2.5,2.5),bt.heart=new ic(n,{depth:2.2,bevelEnabled:!0,bevelThickness:.8,bevelSize:.8,bevelSegments:1,steps:1}),bt.heart.center(),bt.heart.rotateZ(Math.PI),bt.heart.scale(.035,.035,.035),It={gobSkin:ce(10310195),gobDark:ce(8142632),cloth:ce(11901524,{side:An}),wood:ce(7819824),eyeY:Pn(16765502,1.6),bone:ce(15262416),blade:ce(12174287),grip:ce(5126952),eyeR:Pn(16726832,1.8),wispCore:Pn(13732863,2.1),wispMid:Pn(10112480,1.1,{transparent:!0,opacity:.45,depthWrite:!1}),wispShell:Pn(8009152,.7,{transparent:!0,opacity:.22,depthWrite:!1,blending:Ai}),stone:ce(9078135),flameO:Pn(16747050,1.7),flameI:Pn(16766826,2.2),tent:ce(9069122),heart:Pn(16731501,1.1),gem:Pn(5111688,1.4),fireball:Pn(13659135,2.4),fireHalo:Pn(11693055,1.2,{transparent:!0,opacity:.35,depthWrite:!1,blending:Ai}),flash:new $n({color:16777215})}}function vd(n){let t=[];return n.traverse(e=>{e.isMesh&&t.push({m:e,mat:e.material})}),t}function hS(){let n=new Gt,t=new Gt;t.position.y=.5,n.add(t),ot(bt.sphere,It.gobSkin,0,.16,0,t).scale.set(.3,.35,.27),ot(bt.sphere,It.gobDark,0,.1,.1,t).scale.set(.2,.22,.17);let s=ot(bt.skirt,It.cloth,0,-.02,0,t),r=new Gt;r.position.set(0,.52,.02),t.add(r),ot(bt.sphere,It.gobSkin,0,0,0,r).scale.set(.26,.24,.25);let a=ot(bt.cone4,It.gobSkin,-.26,.08,-.02,r);a.scale.set(.09,.34,.045),a.rotation.z=1.25,a.rotation.y=-.25;let l=ot(bt.cone4,It.gobSkin,.26,.08,-.02,r);l.scale.set(.09,.34,.045),l.rotation.z=-1.25,l.rotation.y=.25;let c=ot(bt.cone,It.gobDark,0,-.03,.27,r);c.scale.set(.05,.16,.05),c.rotation.x=Math.PI/2,ot(bt.sphere,It.eyeY,-.1,.04,.21,r).scale.setScalar(.045),ot(bt.sphere,It.eyeY,.1,.04,.21,r).scale.setScalar(.045);let f=new Gt;f.position.set(-.31,.34,0),t.add(f),ot(bt.limb,It.gobSkin,0,-.16,0,f).scale.set(.065,.18,.065),ot(bt.sphere,It.gobDark,0,-.36,0,f).scale.setScalar(.08);let g=new Gt;g.position.set(.31,.34,0),t.add(g),ot(bt.limb,It.gobSkin,0,-.16,0,g).scale.set(.065,.18,.065),ot(bt.sphere,It.gobDark,0,-.36,0,g).scale.setScalar(.08);let m=new Gt;m.position.set(0,-.36,.02),g.add(m);let d=ot(bt.limb,It.wood,0,0,.22,m);d.scale.set(.035,.24,.035),d.rotation.x=Math.PI/2,ot(bt.sphere,It.wood,0,0,.46,m).scale.set(.09,.09,.13);let y=new Gt;y.position.set(-.12,.34,0),n.add(y),ot(bt.limb,It.gobSkin,0,-.12,0,y).scale.set(.07,.14,.07),ot(bt.sphere,It.gobDark,0,-.28,.04,y).scale.set(.085,.055,.115);let D=new Gt;return D.position.set(.12,.34,0),n.add(D),ot(bt.limb,It.gobSkin,0,-.12,0,D).scale.set(.07,.14,.07),ot(bt.sphere,It.gobDark,0,-.28,.04,D).scale.set(.085,.055,.115),{root:n,p:{body:t,head:r,earL:a,earR:l,armL:f,armR:g,legL:y,legR:D,club:m},flash:vd(n)}}function uS(){let n=new Gt,t=new Gt;t.position.y=.98,n.add(t),ot(bt.box,It.bone,0,0,0,t).scale.set(.26,.12,.16),ot(bt.limb,It.bone,0,.2,0,t).scale.set(.03,.17,.03);for(let _=0;_<3;_++){let m=ot(bt.rib,It.bone,0,.26+_*.1,0,t);m.rotation.x=Math.PI/2;let d=1-_*.1;m.scale.set(d,d*.78,.78)}let s=ot(bt.limb,It.bone,0,.55,0,t);s.scale.set(.022,.19,.022),s.rotation.z=Math.PI/2;let r=new Gt;r.position.set(0,.72,0),t.add(r),ot(bt.sphere,It.bone,0,0,0,r).scale.set(.145,.155,.15),ot(bt.box,It.bone,0,-.13,.02,r).scale.set(.13,.055,.11),ot(bt.sphere,It.eyeR,-.055,.01,.125,r).scale.setScalar(.032),ot(bt.sphere,It.eyeR,.055,.01,.125,r).scale.setScalar(.032);let l=new Gt;l.position.set(-.24,.55,0),t.add(l),ot(bt.limb,It.bone,0,-.27,0,l).scale.set(.028,.26,.028),ot(bt.sphere,It.bone,0,-.27,0,l).scale.setScalar(.042),ot(bt.sphere,It.bone,0,-.55,0,l).scale.setScalar(.05);let c=new Gt;c.position.set(.24,.55,0),t.add(c),ot(bt.limb,It.bone,0,-.27,0,c).scale.set(.028,.26,.028),ot(bt.sphere,It.bone,0,-.27,0,c).scale.setScalar(.042),ot(bt.sphere,It.bone,0,-.55,0,c).scale.setScalar(.05);let h=new Gt;h.position.set(0,-.56,.02),c.add(h);let u=ot(bt.limb,It.grip,0,0,.02,h);u.scale.set(.018,.07,.018),u.rotation.x=Math.PI/2,ot(bt.box,It.grip,0,0,.12,h).scale.set(.15,.035,.035),ot(bt.box,It.blade,0,0,.45,h).scale.set(.07,.018,.62);let f=ot(bt.cone4,It.blade,0,0,.8,h);f.scale.set(.035,.07,.009),f.rotation.x=Math.PI/2;let p=new Gt;p.position.set(-.1,.86,0),n.add(p),ot(bt.limb,It.bone,0,-.42,0,p).scale.set(.03,.4,.03),ot(bt.sphere,It.bone,0,-.42,0,p).scale.setScalar(.042),ot(bt.box,It.bone,0,-.84,.03,p).scale.set(.07,.035,.15);let g=new Gt;return g.position.set(.1,.86,0),n.add(g),ot(bt.limb,It.bone,0,-.42,0,g).scale.set(.03,.4,.03),ot(bt.sphere,It.bone,0,-.42,0,g).scale.setScalar(.042),ot(bt.box,It.bone,0,-.84,.03,g).scale.set(.07,.035,.15),{root:n,p:{body:t,head:r,armL:l,armR:c,legL:p,legR:g,sword:h},flash:vd(n)}}function fS(){let n=new Gt,t=new Gt;n.add(t);let e=new le(bt.sphere,It.wispCore);e.scale.setScalar(.19),t.add(e);let i=new le(bt.sphere,It.wispMid);i.scale.setScalar(.27),t.add(i);let s=new le(bt.sphere,It.wispShell);s.scale.setScalar(.4),t.add(s);let r=new Gt;r.rotation.x=.6,n.add(r);let o=new le(bt.sphere,It.wispCore);o.scale.setScalar(.045),o.position.set(.5,0,0),r.add(o);let a=new le(bt.sphere,It.wispCore);return a.scale.setScalar(.035),a.position.set(-.48,.06,0),r.add(a),n.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),{root:n,p:{coreG:t,shell:s,orbit:r},flash:vd(n)}}function dS(n,t){let e=new Gt;e.position.copy(t);let i=t.y;for(let h=0;h<6;h++){let u=h/6*Math.PI*2+he()*.3,f=ot(bt.rock,It.stone,Math.sin(u)*.55,.07,Math.cos(u)*.55,e);f.scale.setScalar(.11+he()*.06),f.rotation.set(he()*3,he()*3,he()*3)}for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,f=ot(bt.limb,It.wood,Math.sin(u)*.16,.22,Math.cos(u)*.16,e);f.scale.set(.045,.26,.045),f.rotation.x=Math.cos(u)*.65,f.rotation.z=-Math.sin(u)*.65}let s=ot(bt.cone,It.flameO,0,.42,0,e);s.scale.set(.2,.45,.2),s.castShadow=!1;let r=ot(bt.cone,It.flameI,0,.38,0,e);r.scale.set(.11,.3,.11),r.castShadow=!1;let o=he()*Math.PI*2,a=ot(bt.tent,It.tent,Math.sin(o)*2.6,0,Math.cos(o)*2.6,e);a.rotation.y=o+Math.PI/2+(he()-.5),a.position.y=n.getGroundHeight(t.x+a.position.x,t.z+a.position.z)-i;let l=o+2+he(),c=ot(bt.box,It.wood,Math.sin(l)*1.9,.19,Math.cos(l)*1.9,e);return c.scale.setScalar(.38),c.rotation.y=he()*1.5,c.position.y=n.getGroundHeight(t.x+c.position.x,t.z+c.position.z)-i+.19,{group:e,flameO:s,flameI:r}}function yd(n,t,e,i){let s={root:n.root,pos:n.root.position,hp:t.hp,maxHp:t.hp,alive:!0,radius:t.radius,name:e,isBoss:!1,damage(r,o){Md(this,r,o)},_own:!0,_gone:!1,type:i,p:n.p,flash:n.flash,state:"patrol",t:0,animT:he()*6,phase:he()*Math.PI*2,yaw:he()*Math.PI*2,kb:new C,home:new C,staggerT:0,flashT:0,farAcc:0,colT:0,colCache:[],restT:0,hasTarget:!1,tx:0,tz:0,yOff:0,height:t.height,hitY:t.hitY,hitDone:!1,distP:999,camp:null,spot:null,hoverY:0,fireT:he()*1.5,dustT:0,_lastSwingId:-1};return s.root.rotation.y=s.yaw,s}function pS(n,t,e,i){let s=yd(hS(),rs,"\u30B4\u30D6\u30EA\u30F3","goblin");return s.pos.set(t,n.getGroundHeight(t,e),e),s.home.copy(s.pos),s.camp=i,s.restT=he()*2,i.members.push(s),ni.push(s),fn.add(s.root),s}function _0(n,t){t.clearedAt=-1;let e=2+Math.floor(he()*3);for(let i=0;i<e;i++){let s=i/e*Math.PI*2+he(),r=1.8+he()*1.8,o=dd(n,t.center.x+Math.sin(s)*r,t.center.z+Math.cos(s)*r,5);pS(n,o.x,o.z,t)}}function mS(n,t,e){let i=yd(uS(),Io,"\u30DC\u30FC\u30F3\u30BD\u30EB\u30B8\u30E3\u30FC","skeleton");return i.pos.set(t,n.getGroundHeight(t,e),e),i.home.copy(i.pos),i.state="rise",i.yOff=-1.7,i.dustT=0,Xa.push(i),ni.push(i),fn.add(i.root),_i(i.pos.clone(),"dust",{count:14}),i}function v0(n,t){let e=yd(fS(),Hs,"\u9B54\u5C0E\u30A6\u30A3\u30B9\u30D7","wisp"),i=n.getGroundHeight(t.pos.x,t.pos.z);return e.pos.set(t.pos.x,i+1.5,t.pos.z),e.home.copy(t.pos),e.hoverY=i+1.5,e.state="hover",e.spot=t,t.enemy=e,ni.push(e),fn.add(e.root),e}function gS(n){if(n.flashT<=0)for(let t of n.flash)t.m.material=It.flash;n.flashT=.08}function y0(n){for(let t of n.flash)t.m.material=t.mat}function Md(n,t,e){let i=Po;if(!i||!n||n._gone||!n.alive)return;if(!n._own){let r=!!n._dmgLock;if(r)n.hp=Math.max(0,(n.hp??1)-t),n.hp<=0&&(n.alive=!1);else if(typeof n.damage=="function"){n._dmgLock=!0;try{n.damage(t,e)}catch{}n._dmgLock=!1}else n.hp=Math.max(0,(n.hp??1)-t),n.hp<=0&&(n.alive=!1);if(!r){let o=_d(n);o&&(f0(o.x,o.y+2.2,o.z,t),Ws.set(o.x,o.y+1.5,o.z),_i(Ws.clone(),"hit")),Xs("hit");let a=!n.alive||n.hp<=0;i.emit("enemy-hit",{enemy:n,pos:o?o.clone():null,damage:t,killed:a}),a&&!n._killEmitted&&(n._killEmitted=!0,i.emit("enemy-killed",{enemy:n,pos:o?o.clone():null}))}return}if(n.hp=Math.max(0,n.hp-t),gS(n),e){let r=n.pos.x-e.x,o=n.pos.z-e.z,a=Math.hypot(r,o)||1,l=n.type==="wisp"?3.2:5;n.kb.x+=r/a*l,n.kb.z+=o/a*l}n.staggerT=.35,f0(n.pos.x,n.root.position.y+n.height+.35,n.pos.z,t),Ws.set(n.pos.x,n.root.position.y+n.hitY+.3,n.pos.z),_i(Ws.clone(),"hit"),Xs("hit");let s=n.hp<=0;i.emit("enemy-hit",{enemy:n,pos:n.pos.clone(),damage:t,killed:s}),s?(n.alive=!1,n.state="dying",n.t=0,i.emit("enemy-killed",{enemy:n,pos:n.pos.clone()})):n.state!=="rise"&&n.state!=="dying"&&n.state!=="crumble"&&n.type!=="wisp"&&(n.state="stunned",n.t=0)}function pd(n,t,e,i){if(Ws.set(t.pos.x,t.root.position.y+.5,t.pos.z),_i(Ws.clone(),"death"),i&&Xs("kill"),e&&RS(n,t.pos.x,t.root.position.y,t.pos.z),t.flashT>0&&y0(t),fn.remove(t.root),t._gone=!0,t.alive=!1,t.camp){let s=t.camp.members.indexOf(t);s>=0&&t.camp.members.splice(s,1),t.camp.members.length===0&&(t.camp.clearedAt=n.time.elapsed)}if(t.spot&&(t.spot.enemy=null,t.spot.deadAt=n.time.elapsed),t.type==="skeleton"){let s=Xa.indexOf(t);s>=0&&Xa.splice(s,1)}}function xS(){for(let n=0;n<12;n++){let t=document.createElement("canvas");t.width=128,t.height=80;let e=t.getContext("2d"),i=new ao(t);i.colorSpace=nn;let s=new ro({map:i,transparent:!0,depthTest:!1,depthWrite:!1}),r=new oa(s);r.scale.set(.9,.56,1),r.visible=!1,r.renderOrder=60,fn.add(r),xd.push({sp:r,g:e,tex:i,mat:s,t:99,active:!1,last:""})}}function f0(n,t,e,i){let s=null,r=null,o=-1;for(let l of xd){if(!l.active){s=l;break}l.t>o&&(o=l.t,r=l)}if(s=s||r,!s)return;let a=i%1===0?String(i):i.toFixed(1);if(s.last!==a){let l=s.g;l.clearRect(0,0,128,80),l.font='700 46px Georgia, "Times New Roman", serif',l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle="rgba(30,24,18,0.7)",l.strokeText(a,64,42),l.fillStyle="#ffffff",l.fillText(a,64,42),s.tex.needsUpdate=!0,s.last=a}s.active=!0,s.t=0,s.sp.visible=!0,s.mat.opacity=1,s.sp.position.set(n+(he()-.5)*.4,t,e+(he()-.5)*.4)}function _S(n){for(let t of xd){if(!t.active)continue;t.t+=n,t.sp.position.y+=n*1.1*Math.max(.15,1-t.t);let e=1+.35*Math.exp(-t.t*9);t.sp.scale.set(.9*e,.56*e,1),t.mat.opacity=t.t<.35?1:qt(1-(t.t-.35)/.5,0,1),t.t>=.9&&(t.active=!1,t.sp.visible=!1)}}var d0=null;function vS(){let n=bs(128,t=>{t.font="900 104px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=18,t.strokeStyle="rgba(150,30,24,0.95)",t.strokeText("!",64,66),t.fillStyle="#fff8ee",t.fillText("!",64,66)});d0=new ro({map:n,transparent:!0,depthTest:!1,depthWrite:!1});for(let t=0;t<6;t++){let e=new oa(d0);e.visible=!1,e.renderOrder=61,fn.add(e),Kc.push({sp:e,e:null,t:0,active:!1})}}function yS(n){let t=Kc.find(e=>!e.active)||Kc[0];t.active=!0,t.t=0,t.e=n,t.sp.visible=!0,t.sp.position.set(n.pos.x,n.root.position.y+n.height+.6,n.pos.z)}function MS(n){for(let t of Kc){if(!t.active)continue;if(t.t+=n,t.t>.5||!t.e||t.e._gone){t.active=!1,t.sp.visible=!1,t.e=null;continue}t.sp.position.set(t.e.pos.x,t.e.root.position.y+t.e.height+.6+t.t*.25,t.e.pos.z);let i=.72*Vt(0,.1,t.t)*(1+.3*Math.exp(-t.t*12));t.sp.scale.set(i,i,1)}}var Gs=240;function bS(){let n=new Float32Array(Gs*3),t=new Float32Array(Gs*3),e=new Float32Array(Gs*3),i=new Float32Array(Gs),s=new Float32Array(Gs);for(let l=0;l<Gs;l++)n[l*3+1]=-9999;let r=new Ue;r.setAttribute("position",new _e(n,3).setUsage(di)),r.setAttribute("color",new _e(t,3).setUsage(di));let o=new ca({size:.4,vertexColors:!0,transparent:!0,opacity:.9,blending:Ai,depthWrite:!1,sizeAttenuation:!0}),a=new oo(r,o);a.frustumCulled=!1,a.renderOrder=20,fn.add(a),Fe={geo:r,pos:n,col:t,base:e,life:i,max:s,head:0}}function SS(n,t,e,i,s,r,o){let a=Fe.head%Gs;Fe.head++,Fe.pos[a*3]=n+(he()-.5)*.12,Fe.pos[a*3+1]=t+(he()-.5)*.12,Fe.pos[a*3+2]=e+(he()-.5)*.12,Fe.base[a*3]=i,Fe.base[a*3+1]=s,Fe.base[a*3+2]=r,Fe.life[a]=o,Fe.max[a]=o}function ES(n){let t=!1;for(let e=0;e<Gs;e++){if(Fe.life[e]<=0)continue;t=!0,Fe.life[e]-=n;let i=Math.max(0,Fe.life[e]/Fe.max[e]);Fe.col[e*3]=Fe.base[e*3]*i,Fe.col[e*3+1]=Fe.base[e*3+1]*i,Fe.col[e*3+2]=Fe.base[e*3+2]*i,Fe.life[e]<=0&&(Fe.pos[e*3+1]=-9999)}t&&(Fe.geo.attributes.position.needsUpdate=!0,Fe.geo.attributes.color.needsUpdate=!0)}function wS(){for(let n=0;n<10;n++){let t=new Gt,e=new le(bt.sphere,It.fireball);e.scale.setScalar(.16),e.castShadow=!1,t.add(e);let i=new le(bt.sphere,It.fireHalo);i.scale.setScalar(.3),i.castShadow=!1,t.add(i),t.visible=!1,fn.add(t),gd.push({g:t,core:e,halo:i,active:!1,vel:new C,life:0,emitT:0})}}function TS(n,t){let e=gd.find(s=>!s.active);if(!e)return;e.active=!0,e.life=0,e.emitT=0,e.g.visible=!0,e.g.position.set(t.pos.x,t.root.position.y+.1,t.pos.z);let i=n.player.position;Ws.set(i.x-e.g.position.x,i.y+1-e.g.position.y,i.z-e.g.position.z).normalize(),e.vel.copy(Ws).multiplyScalar(11),Xs("magic"),_i(e.g.position.clone(),"magic",{count:6})}function cd(n,t){t&&_i(n.g.position.clone(),t),n.active=!1,n.g.visible=!1}function AS(n,t){let e=n.player.position;for(let i of gd){if(!i.active)continue;i.life+=t,i.g.position.addScaledVector(i.vel,t);let s=i.g.position,r=1+Math.sin(n.time.elapsed*22+i.life*7)*.15;for(i.core.scale.setScalar(.16*r),i.halo.scale.setScalar(.3*(2-r)),i.emitT-=t;i.emitT<=0;)i.emitT+=.03,SS(s.x,s.y,s.z,.85,.5,1,.45);let o=e.x-s.x,a=e.y+1-s.y,l=e.z-s.z;if(o*o+a*a+l*l<1.2*1.2){try{n.player.damage(Hs.dmg,s)}catch{}Xs("burn"),cd(i,"fire");continue}if(s.y<=n.getGroundHeight(s.x,s.z)+.15){cd(i,"fire");continue}i.life>6&&cd(i,"magic")}}function RS(n,t,e,i){if(he()<.4)p0(n,"heart",t,e,i);else{let s=1+Math.floor(he()*3);for(let r=0;r<s;r++)p0(n,"gem",t,e,i)}}function p0(n,t,e,i,s){if(Vs.length>36){let o=Vs.shift();fn.remove(o.mesh)}let r=new le(t==="heart"?bt.heart:bt.gem,t==="heart"?It.heart:It.gem);r.castShadow=!0,r.position.set(e,i+.7,s),fn.add(r),Vs.push({kind:t,mesh:r,vel:new C((he()-.5)*2.6,3.2+he()*1.6,(he()-.5)*2.6),age:0,grounded:!1,baseY:0,phase:he()*Math.PI*2,dieK:0})}function CS(n,t){let e=n.player.position;for(let i=Vs.length-1;i>=0;i--){let s=Vs[i],r=s.mesh;if(s.age+=t,s.age>u0){s.dieK+=t/.4;let h=Math.max(.001,1-s.dieK);r.scale.setScalar(h),s.dieK>=1&&(fn.remove(r),Vs.splice(i,1));continue}if(r.visible=s.age<u0-4||Math.sin(n.time.elapsed*16)>-.2,s.grounded)s.baseY=n.getGroundHeight(r.position.x,r.position.z)+.25,r.position.y=s.baseY+.1+Math.sin(n.time.elapsed*3+s.phase)*.08,r.rotation.y+=t*2.4;else{s.vel.y-=12*t,r.position.addScaledVector(s.vel,t);let h=n.getGroundHeight(r.position.x,r.position.z)+.25;r.position.y<=h&&s.vel.y<0&&(s.grounded=!0,s.baseY=h)}let o=e.x-r.position.x,a=e.z-r.position.z,l=e.y+.8-r.position.y,c=Math.sqrt(o*o+l*l+a*a);if(s.kind==="gem"){if(c<2.5&&c>.001){let h=(6.5*(1-c/2.8)+2.5)*t/c;r.position.x+=o*h,r.position.y+=l*h,r.position.z+=a*h}c<.85&&(n.player.gems+=1,n.emit("pickup",{kind:"gem",pos:r.position.clone()}),Xs("pickup"),_i(r.position.clone(),"spark",{color:8257456,count:8}),fn.remove(r),Vs.splice(i,1))}else c<1.15&&(n.player.heal(1),n.emit("pickup",{kind:"heart",pos:r.position.clone()}),Xs("heart"),_i(r.position.clone(),"heal"),fn.remove(r),Vs.splice(i,1))}}function os(n,t,e){n.yaw=Math.atan2(t-n.pos.x,e-n.pos.z)}function Wa(n,t,e,i,s,r){let o=e-t.pos.x,a=i-t.pos.z,l=Math.hypot(o,a);if(l<.001)return!0;t.yaw=Math.atan2(o,a);let c=Math.min(s*r,l),h=t.pos.x+o/l*c,u=t.pos.z+a/l*c;return vi(n,h,u)?(t.pos.x=h,t.pos.z=u,!0):(t.hasTarget=!1,!1)}function IS(n,t){for(let e=0;e<6;e++){let i=he()*Math.PI*2,s=2+he()*6,r=t.home.x+Math.sin(i)*s,o=t.home.z+Math.cos(i)*s;if(vi(n,r,o)){t.tx=r,t.tz=o,t.hasTarget=!0,t.t=0;return}}t.restT=1.5}function PS(n,t,e){if(t.colT-=e,t.colT<=0){t.colT=.7,t.colCache.length=0;let i=n.colliders;if(i)for(let s=0;s<i.length&&t.colCache.length<6;s++){let r=i[s],o=r.x-t.pos.x,a=r.z-t.pos.z;o*o+a*a<100&&t.colCache.push(r)}}for(let i of t.colCache){let s=t.pos.x-i.x,r=t.pos.z-i.z,o=(i.radius||.5)+t.radius*.6,a=s*s+r*r;if(a<o*o&&a>1e-4){let l=Math.sqrt(a),c=o-l,h=t.pos.x+s/l*c,u=t.pos.z+r/l*c;vi(n,h,u)&&(t.pos.x=h,t.pos.z=u)}}}function hd(n,t,e){let i=n.p;n.animT+=t*(5+e*6.5);let s=Math.sin(n.animT),r=.45+e*.5;i.legL.rotation.x=s*r,i.legR.rotation.x=-s*r,i.armL.rotation.x=Lt(i.armL.rotation.x,-s*r*.7,14,t),i.armR.rotation.x=Lt(i.armR.rotation.x,s*r*.45,14,t),i.body.position.y=.5+Math.abs(Math.cos(n.animT))*.05*(.4+e),i.body.rotation.x=Lt(i.body.rotation.x,.05+e*.22,8,t),i.body.position.x=0,i.earL&&(i.earL.rotation.z=1.25+Math.sin(n.animT*.7)*.07,i.earR.rotation.z=-1.25-Math.cos(n.animT*.7)*.07,i.head.rotation.y=Lt(i.head.rotation.y,0,8,t))}function md(n,t){let e=n.p;n.animT+=t*2,e.body.position.y=.5+Math.sin(n.animT)*.015,e.body.position.x=0,e.legL.rotation.x=Lt(e.legL.rotation.x,0,8,t),e.legR.rotation.x=Lt(e.legR.rotation.x,0,8,t),e.armL.rotation.x=Lt(e.armL.rotation.x,0,6,t),e.armR.rotation.x=Lt(e.armR.rotation.x,0,6,t),e.body.rotation.x=Lt(e.body.rotation.x,.04,6,t),e.head&&(e.head.rotation.y=Math.sin(n.animT*.35)*.3)}function LS(n,t,e){let i=n.p;n.animT+=t*9.5;let s=Math.sin(n.animT);i.legL.rotation.x=s*.85,i.legR.rotation.x=-s*.85,i.armL.rotation.x=Lt(i.armL.rotation.x,-s*.5-.15,14,t),i.armR.rotation.x=Lt(i.armR.rotation.x,s*.3-.2,14,t);let r=e.time.elapsed;i.armL.rotation.z=Math.sin(r*43+n.phase)*.045,i.armR.rotation.z=-Math.sin(r*47+n.phase)*.045,i.head.rotation.z=Math.sin(r*31+n.phase)*.05,i.body.position.y=.98+Math.abs(Math.cos(n.animT))*.06,i.body.rotation.x=Lt(i.body.rotation.x,.22,8,t)}function bd(n,t,e){t.t+=e;let i=t.p;if(t.type==="wisp"){let r=Math.min(1,t.t/.45);t.root.scale.setScalar(Math.max(.01,1-.9*r*r)),i.coreG.rotation.y+=e*14,t.t>=.45&&(_i(t.pos.clone(),"magic",{count:10}),pd(n,t,!0,!0));return}t.t<.16&&i.body?i.body.rotation.z=Math.sin(t.t*46)*.12:i.body&&(i.body.rotation.z=Lt(i.body.rotation.z,0,10,e));let s=Vt(.12,.55,t.t);t.root.rotation.x=-s*1.45,t.yOff=-.06*s,t.t>=.68&&pd(n,t,!0,!0)}function DS(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0;switch(t.t+=e,t.state){case"patrol":{if(o&&i<rs.notice){t.state="alert",t.t=0,yS(t),Xs("alert"),os(t,r.x,r.z);break}if(Math.hypot(t.home.x-t.pos.x,t.home.z-t.pos.z)>20){Wa(n,t,t.home.x,t.home.z,rs.run*.8,e),hd(t,e,.7);break}if(t.restT>0){t.restT-=e,md(t,e);break}(!t.hasTarget||t.t>9)&&IS(n,t),t.hasTarget&&(Wa(n,t,t.tx,t.tz,rs.walk,e),Math.hypot(t.tx-t.pos.x,t.tz-t.pos.z)<.4&&(t.hasTarget=!1,t.restT=1+he()*2.5),hd(t,e,.15));break}case"alert":{os(t,r.x,r.z),s.body.rotation.x=Lt(s.body.rotation.x,-.14,12,e),s.body.position.y=.5+Math.sin(t.t*30)*.02,t.t>=.5&&(t.state="chase",t.t=0);break}case"chase":{if(!o||i>30){t.state="patrol",t.t=0,t.hasTarget=!1;break}if(os(t,r.x,r.z),i<=rs.range){t.state="windup",t.t=0;break}Wa(n,t,r.x,r.z,rs.run,e),hd(t,e,1);break}case"windup":{os(t,r.x,r.z);let a=Math.min(1,t.t/.6);s.armR.rotation.x=Lt(s.armR.rotation.x,-2.6,16,e),s.armL.rotation.x=Lt(s.armL.rotation.x,-.5,10,e),s.body.rotation.x=Lt(s.body.rotation.x,-.12,10,e),s.body.position.x=Math.sin(n.time.elapsed*55)*.022*a,s.legL.rotation.x=Lt(s.legL.rotation.x,.25,10,e),s.legR.rotation.x=Lt(s.legR.rotation.x,-.25,10,e),t.t>=.6&&(t.state="swing",t.t=0,t.hitDone=!1);break}case"swing":{let a=Math.min(1,t.t/.16);if(s.armR.rotation.x=vt(-2.6,1.05,a*(2-a)),s.body.rotation.x=vt(-.12,.42,a),s.body.position.x=0,!t.hitDone&&t.t>=.1&&(t.hitDone=!0,o&&i<rs.reach))try{n.player.damage(rs.dmg,t.pos)}catch{}t.t>=.3&&(t.state="recover",t.t=0);break}case"recover":{s.armR.rotation.x=Lt(s.armR.rotation.x,0,6,e),s.armL.rotation.x=Lt(s.armL.rotation.x,0,6,e),s.body.rotation.x=Lt(s.body.rotation.x,.05,6,e),s.body.position.y=.5+Math.sin(t.t*5)*.02,os(t,r.x,r.z),t.t>=1&&(t.t=0,t.state=o?i<=rs.range+.3?"windup":i<30?"chase":"patrol":"patrol");break}case"stunned":{s.body.rotation.x=Lt(s.body.rotation.x,-.5,14,e),s.armR.rotation.x=Lt(s.armR.rotation.x,-.6,10,e),t.t>=.3&&(t.state="chase",t.t=0);break}case"dying":bd(n,t,e);return}}function US(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0;switch(t.t+=e,t.state){case"rise":{let a=Math.min(1,t.t/.8);t.yOff=-1.7*(1-a*a*(3-2*a)),t.dustT-=e,t.dustT<=0&&(t.dustT=.22,_i(t.pos.clone(),"dust",{count:6})),s.armL.rotation.x=-2.2*(1-a),s.armR.rotation.x=-2.2*(1-a),t.t>=.8&&(t.state="chase",t.t=0,t.yOff=0);break}case"chase":{if(!o){md(t,e);break}if(os(t,r.x,r.z),i<=Io.range){t.state="windup",t.t=0;break}i<100?(Wa(n,t,r.x,r.z,Io.speed,e),LS(t,e,n)):md(t,e);break}case"windup":{os(t,r.x,r.z);let a=Math.min(1,t.t/.45);s.armR.rotation.x=Lt(s.armR.rotation.x,-2.9,18,e),s.armR.rotation.z=Lt(s.armR.rotation.z,.4,12,e),s.body.rotation.x=Lt(s.body.rotation.x,-.1,10,e),s.body.position.x=Math.sin(n.time.elapsed*50)*.012*a,t.t>=.45&&(t.state="swing",t.t=0,t.hitDone=!1);break}case"swing":{let a=Math.min(1,t.t/.14);if(s.armR.rotation.x=vt(-2.9,1.15,a*(2-a)),s.armR.rotation.z=vt(.4,-.15,a),s.body.rotation.x=vt(-.1,.4,a),s.body.position.x=0,!t.hitDone&&t.t>=.08&&(t.hitDone=!0,o&&i<Io.reach))try{n.player.damage(Io.dmg,t.pos)}catch{}t.t>=.24&&(t.state="recover",t.t=0);break}case"recover":{s.armR.rotation.x=Lt(s.armR.rotation.x,-.2,8,e),s.armR.rotation.z=Lt(s.armR.rotation.z,0,8,e),s.body.rotation.x=Lt(s.body.rotation.x,.15,8,e),os(t,r.x,r.z),t.t>=.7&&(t.state="chase",t.t=0);break}case"stunned":{s.body.rotation.x=Lt(s.body.rotation.x,-.45,14,e),t.t>=.18&&(t.state="chase",t.t=0);break}case"crumble":{let a=Math.min(1,t.t/.6);t.yOff=-1.3*a*a,t.root.scale.set(1-a*.35,Math.max(.05,1-a*.85),1-a*.35),t.root.rotation.z=a*.4,t.dustT-=e,t.dustT<=0&&(t.dustT=.2,_i(t.pos.clone(),"dust",{count:4})),t.t>=.6&&pd(n,t,!1,!1);break}case"dying":bd(n,t,e);return;default:{t.state="chase";break}}}function NS(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0,a=n.time.elapsed;if(t.t+=e,t.state==="dying"){bd(n,t,e);return}let l=n.getGroundHeight(t.pos.x,t.pos.z);t.hoverY=Lt(t.hoverY,l+1.5,3,e),t.root.position.y=t.hoverY+Math.sin(a*1.7+t.phase)*.25,s.orbit.rotation.y+=e*2.6;let c=1+Math.sin(a*5+t.phase)*.1;s.shell.scale.setScalar(.4*c);let h=Vt(Hs.fireCd-.4,Hs.fireCd,t.fireT);if(s.coreG.scale.setScalar(1+h*.5+Math.sin(a*9+t.phase)*.05),o&&i<45){os(t,r.x,r.z);let u=0,f=0,p=0,g=(r.x-t.pos.x)/(i||1),_=(r.z-t.pos.z)/(i||1);if(i<Hs.near)u=-g,f=-_,p=3;else if(i>Hs.far)u=g,f=_,p=2.2;else{let M=Math.sin(a*.35+t.phase)>0?1:-1;u=-_*M,f=g*M,p=1.2}let m=t.pos.x+u*p*e,d=t.pos.z+f*p*e;vi(n,m,d)&&(t.pos.x=m,t.pos.z=d),i<32&&(t.fireT+=e,t.fireT>=Hs.fireCd&&(t.fireT=he()*.3,TS(n,t)))}else if(t.fireT=Math.min(t.fireT,Hs.fireCd-.6),Math.hypot(t.home.x-t.pos.x,t.home.z-t.pos.z)>6)Wa(n,t,t.home.x,t.home.z,1.5,e);else{let f=t.pos.x+Math.sin(a*.5+t.phase)*.5*e,p=t.pos.z+Math.cos(a*.4+t.phase)*.5*e;vi(n,f,p)&&(t.pos.x=f,t.pos.z=p)}}function FS(n,t,e){let i=n.player.position,s=Math.hypot(i.x-t.pos.x,i.z-t.pos.z);t.distP=s;let r=s<lS;if(t.root.visible!==r&&(t.root.visible=r),s>oS&&t.state!=="dying"&&t.state!=="crumble"){if(t.farAcc+=e,t.farAcc<aS)return;e=Math.min(t.farAcc,.5),t.farAcc=0}if(t.flashT>0&&(t.flashT-=e,t.flashT<=0&&y0(t)),t.kb.lengthSq()>4e-4){let o=t.pos.x+t.kb.x*e,a=t.pos.z+t.kb.z*e;vi(n,o,a)&&(t.pos.x=o,t.pos.z=a),t.kb.multiplyScalar(Math.max(0,1-7*e))}t.staggerT>0&&(t.staggerT-=e),t.type==="goblin"?DS(n,t,e,s):t.type==="skeleton"?US(n,t,e,s):NS(n,t,e,s),!t._gone&&(t.type!=="wisp"&&(t.root.position.y=n.getGroundHeight(t.pos.x,t.pos.z)+t.yOff,s<100&&t.alive&&PS(n,t,e)),t.root.rotation.y=Ii(t.root.rotation.y,t.yaw,10,e))}function zS(n){Co.length=0;for(let t of ni)t._own&&t.alive&&t.type!=="wisp"&&t.distP<90&&Co.push(t);for(let t=0;t<Co.length;t++)for(let e=t+1;e<Co.length;e++){let i=Co[t],s=Co[e],r=s.pos.x-i.pos.x,o=s.pos.z-i.pos.z,a=i.radius+s.radius-.35,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l),h=(a-c)*.5,u=r/c*h,f=o/c*h;vi(n,i.pos.x-u,i.pos.z-f)&&(i.pos.x-=u,i.pos.z-=f),vi(n,s.pos.x+u,s.pos.z+f)&&(s.pos.x+=u,s.pos.z+=f)}}}function OS(n,t){let e=n.player.position,i=n.time.elapsed;for(let s=0;s<ud.length;s++){let r=ud[s],o=Math.hypot(e.x-r.center.x,e.z-r.center.z),a=o<170;r.props.group.visible!==a&&(r.props.group.visible=a),a&&(r.props.flameO.scale.set(.2*(1+Math.sin(i*11+s*2.1)*.12),.45*(1+Math.sin(i*13.7+s)*.2),.2*(1+Math.cos(i*10.3+s)*.12)),r.props.flameI.scale.set(.11*(1+Math.sin(i*17+s)*.18),.3*(1+Math.sin(i*19.3+s*1.7)*.25),.11)),Jc<=0&&r.members.length===0&&r.clearedAt>=0&&i-r.clearedAt>m0&&o>g0&&_0(n,r)}}function BS(n,t){let e=n.time.isNight;if(e&&n.state==="playing"&&n.player.hp>0&&(ld-=t,ld<=0&&(ld=2.2+he()*1.5,Xa.length<Io.max))){let i=n.player.position;for(let s=0;s<8;s++){let r=he()*Math.PI*2,o=30+he()*30,a=i.x+Math.sin(r)*o,l=i.z+Math.cos(r)*o,c="plains";try{c=n.world.getBiome(a,l)}catch{}if(c==="plains"&&vi(n,a,l)){mS(n,a,l);break}}}if(fd&&!e)for(let i of Xa)i.state!=="crumble"&&i.state!=="dying"&&(i.alive=!1,i.state="crumble",i.t=0);fd=e}function kS(n){let t=n.player.position,e=n.time.elapsed;for(let i of x0)!i.enemy&&e-i.deadAt>m0&&Math.hypot(t.x-i.pos.x,t.z-i.pos.z)>g0&&v0(n,i)}function HS(n){let t=null;try{t=n.player.getAttackHit?n.player.getAttackHit():null}catch{}if(!t||!t.pos)return;let e=t.radius||1;for(let i of ni){if(!i.alive||i._gone||i._lastSwingId===t.swingId)continue;let s=_d(i);if(!s)continue;let r=t.pos.x-s.x,o=t.pos.z-s.z,a=e+(i.radius||.6);if(r*r+o*o>a*a)continue;let l=i._own?i.root.position.y+i.hitY:s.y,c=i._own?2.4:4.5;Math.abs(t.pos.y-l)>c||(i._lastSwingId=t.swingId,Md(i,t.damage??1,n.player.position))}}async function GS(n){Po=n,cS(),fn=new Gt,fn.name="combat",n.scene.add(fn),xS(),vS(),bS(),wS();let t=[[70,150],[-130,90],[150,-40],[410,190],[500,100],[-340,330],[470,-350]];for(let[s,r]of t){let o=dd(n,s,r,14),a=new C(o.x,n.getGroundHeight(o.x,o.z),o.z),l={center:a,members:[],clearedAt:-1,props:dS(n,a)};fn.add(l.props.group),ud.push(l),_0(n,l)}let e=[[505,-390],[585,-470],[530,-515],[612,-408]],i=[];try{for(let s=-880;s<=880;s+=80)for(let r=-520;r<=880;r+=80)n.world.getBiome(s,r)==="ruins"&&i.push([s,r])}catch{}for(let s of i){if(e.length>=8)break;e.every(([r,o])=>Math.hypot(r-s[0],o-s[1])>60)&&e.push(s)}for(let[s,r]of e){let o=dd(n,s,r,10),a={pos:new C(o.x,0,o.z),enemy:null,deadAt:-999};x0.push(a),v0(n,a)}fd=n.time.isNight,n.combat={enemies:ni,nearestTargetable(s,r=32){if(!s)return null;let o=null,a=r;for(let l of ni){if(!l.alive||l._gone)continue;let c=_d(l);if(!c)continue;let h=s.distanceTo(c);h<=a&&(a=h,o=l)}return o},registerEnemy(s){s&&ni.indexOf(s)<0&&ni.push(s)},damageEnemy(s,r,o){Md(s,r,o)}}}function VS(n,t){if(!(!n.combat||!n.player)&&n.state!=="shrine"){Jc-=t,OS(n,t),Jc<=0&&(Jc=1,kS(n)),BS(n,t),It.wispCore.emissiveIntensity=1.9+Math.sin(n.time.elapsed*8.5)*.55;for(let e=ni.length-1;e>=0;e--){let i=ni[e];i._own&&(FS(n,i,t),i._gone&&ni.splice(e,1))}zS(n),HS(n),AS(n,t),CS(n,t),_S(t),MS(t),ES(t)}}var jc={};Mi(jc,{init:()=>WS,update:()=>XS});async function WS(n){n.shrines={list:[{pos:new C(180,0,80),name:"\u529B\u306E\u7960",completed:!1},{pos:new C(-360,0,260),name:"\u6C34\u93E1\u306E\u7960",completed:!1},{pos:new C(430,0,40),name:"\u6A39\u970A\u306E\u7960",completed:!1},{pos:new C(430,0,-300),name:"\u70C8\u706B\u306E\u7960",completed:!1}],completedCount:0,active:-1}}function XS(n,t){}var th={};Mi(th,{init:()=>qS,update:()=>YS});async function qS(n){n.boss={active:!1,defeated:!1,hp:60,maxHp:60}}function YS(n,t){}var Lo={};Mi(Lo,{init:()=>ZS,update:()=>$S});async function ZS(n){n.audio={unlock(){},play(){},setMusic(){}}}function $S(n,t){}var Uo={};Mi(Uo,{init:()=>tE,update:()=>eE});var Ht=null,We=null,Q={},Ys={playTime:0,kills:0},M0="M12 20.3C7.9 17.2 1.7 12.6 1.7 7.8 1.7 4.8 4 2.6 6.7 2.6c2.1 0 4 1.2 5.3 3.3 1.3-2.1 3.2-3.3 5.3-3.3 2.7 0 5 2.2 5 5.2 0 4.8-6.2 9.4-10.3 12.5z",JS=150.8,KS=["\u9060\u304D\u6614\u2014\u2014\u5927\u5730\u30A2\u30EB\u30C7\u30A3\u30A2\u3092\u95C7\u3067\u8986\u3063\u305F\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9\u306F\u3001\u521D\u4EE3\u52C7\u8005\u306E\u5263\u306B\u3088\u3063\u3066\u5317\u306E\u53E4\u57CE\u306E\u5965\u6DF1\u304F\u306B\u5C01\u3058\u3089\u308C\u305F\u3002","\u3060\u304C\u6C38\u304D\u6642\u306F\u5C01\u5370\u3092\u8755\u307F\u3001\u9B54\u7363\u306F\u3044\u307E\u518D\u3073\u76EE\u899A\u3081\u308B\u3002\u57CE\u306F\u7634\u6C17\u306B\u6C88\u307F\u3001\u5927\u5730\u306B\u306F\u9B54\u7269\u306E\u5F71\u304C\u9019\u3044\u59CB\u3081\u305F\u2026\u2026\u3002","\u7DD1\u8863\u306E\u52C7\u8005\u3088\u2014\u20144\u3064\u306E\u7960\u3092\u5DE1\u308A\u300C\u6C17\u306E\u73E0\u300D\u30923\u3064\u96C6\u3081\u3001\u5317\u306E\u9B54\u57CE\u306E\u7D50\u754C\u3092\u7834\u308B\u306E\u3060\u3002\u5927\u5730\u306E\u547D\u904B\u306F\u3001\u305D\u306E\u624B\u306B\u3002"],QS=[["W A S D","\u79FB\u52D5"],["\u30DE\u30A6\u30B9","\u30AB\u30E1\u30E9"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3"],["C","\u56DE\u907F\u30ED\u30FC\u30EB"]],jS=[["WASD / \u77E2\u5370","\u79FB\u52D5"],["\u30DE\u30A6\u30B9 / \u30C9\u30E9\u30C3\u30B0","\u30AB\u30E1\u30E9(\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u56FA\u5B9A)"],["Shift","\u30C0\u30C3\u30B7\u30E5(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB)"],["Space","\u30B8\u30E3\u30F3\u30D7"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483(3\u6BB5\u30B3\u30F3\u30DC)"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u76FE\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3\u5207\u66FF"],["C","\u56DE\u907F\u30ED\u30FC\u30EB(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB\u30FB\u7121\u6575\u6642\u9593)"],["E","\u8ABF\u3079\u308B\u30FB\u8A71\u3059\u30FB\u6C7A\u5B9A"],["Esc / P","\u30DD\u30FC\u30BA"]];function oe(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e&&e.appendChild(i),i}function qa(n,t){n.classList.remove(t),n.offsetWidth,n.classList.add(t)}function C0(n){return n.split(" / ").map(t=>`<span class="kc">${t}</span>`).join('<span class="ksep">/</span>')}function I0(n){n=Math.max(0,Math.floor(n));let t=Math.floor(n/3600),e=Math.floor(n%3600/60),i=n%60;return t>0?`${t}\u6642\u9593${e}\u5206${i}\u79D2`:e>0?`${e}\u5206${i}\u79D2`:`${i}\u79D2`}function eh(n){clearTimeout(n._hideT),n.classList.remove("leaving"),n.classList.add("visible")}function nh(n){!n.classList.contains("visible")||n.classList.contains("leaving")||(n.classList.add("leaving"),n._hideT=setTimeout(()=>n.classList.remove("visible","leaving"),400))}async function tE(n){Ht=n,We=document.getElementById("ui-root"),We.innerHTML="",iE(),sE(),aE(),gE(),oE(),vE(),_E(),TE(),SE(),ME(),rE(),RE(),IE(),LE(),DE(),NE(),OE(),dE(),n.ui={showMessage:yE,showDialog:z0,setPrompt:L0,toast:bE,setBossBar:D0,flash:G0},n.on("state",nE),n.on("player-damaged",hE),n.on("enemy-killed",()=>{Ys.kills++}),n.on("pickup",uE),n.on("game-start",()=>{Ys.playTime=0,Ys.kills=0}),document.body.dataset.uistate=n.state}function eE(n,t){let e=n.state,i=e==="playing"||e==="shrine"||e==="boss";i&&(Ys.playTime+=t),Ya.open&&n.input.justPressed("Escape")&&ah(),$t.active&&EE(t,i||e==="title"),i&&(cE(t),xE()),qn.visible&&U0(t)}function nE(n){let t=n.to;document.body.dataset.uistate=t,ah(!0);let e=t==="playing"||t==="shrine"||t==="boss";Q.hud.classList.toggle("on",e),t==="title"?eh(Q.title):nh(Q.title),t==="paused"?(PE(),eh(Q.pause)):nh(Q.pause),t==="gameover"?eh(Q.gameover):nh(Q.gameover),t==="ending"?(UE(),eh(Q.ending)):nh(Q.ending),!e&&t!=="paused"&&(L0(null),Q.reticle.classList.remove("on"),Td=!1,Q.guide.classList.remove("on"),(t==="title"||t==="ending")&&D0(!1)),(t==="gameover"||t==="title"||t==="ending")&&wE()}function iE(){let n=oe("div","svg-defs",We);n.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
    <linearGradient id="ui-hgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff7583"/><stop offset=".5" stop-color="#dd2a41"/><stop offset="1" stop-color="#9c1128"/>
    </linearGradient>
    <linearGradient id="ui-ggrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a8f0be"/><stop offset=".45" stop-color="#4fc47a"/><stop offset="1" stop-color="#1e7a48"/>
    </linearGradient>
  </defs></svg>`}function sE(){Q.vignette=oe("div","",We),Q.vignette.id="vignette"}function rE(){Q.flash=oe("div","",We),Q.flash.id="flash"}function oE(){Q.floatLayer=oe("div","",We),Q.floatLayer.id="float-layer"}function aE(){let n=oe("div","",We);n.id="hud",Q.hud=n;let t=oe("div","",n);t.id="hud-left",Q.hearts=oe("div","",t),Q.hearts.id="hearts";let e=oe("div","",t);e.id="stamina",Q.stamina=e,e.innerHTML=`<svg viewBox="0 0 60 60">
    <circle class="stb" cx="30" cy="30" r="24"/>
    <circle class="stf" cx="30" cy="30" r="24" transform="rotate(-90 30 30)" stroke-dashoffset="0"/>
  </svg>`,Q.stFg=e.querySelector(".stf");let i=oe("div","",t);i.id="orbs",Q.orbs=[];for(let l=0;l<4;l++)Q.orbs.push(oe("span","orb",i));let s=oe("div","",t);s.id="gems",Q.gems=s,s.innerHTML=`<svg viewBox="0 0 24 24">
    <path d="M12 2.4 19.6 9 12 21.6 4.4 9Z" fill="url(#ui-ggrad)" stroke="rgba(235,255,240,.4)" stroke-width=".7"/>
    <path d="M4.4 9h15.2M12 2.4 8.4 9l3.6 12.6L15.6 9 12 2.4" fill="none" stroke="rgba(240,255,245,.3)" stroke-width=".6"/>
  </svg><span class="g-count">0</span>`,Q.gemCount=s.querySelector(".g-count");let r=oe("div","",n);r.id="minimap";let o=document.createElement("canvas");o.width=340,o.height=340,r.appendChild(o),Q.mapCanvas=o;let a=oe("div","",n);a.id="prompt",Q.prompt=a,Q.pKey=oe("span","p-key",a),Q.pTxt=oe("span","p-txt",a)}var b0=-1,ih=-1,S0=!1;function lE(n,t){let e="";for(let i=0;i<t;i++){let s=n-i,r=s>=1?"full":s>=.5?"half":"empty";e+=`<svg class="heart ${r}" viewBox="0 0 24 22"><path class="hb" d="${M0}"/><path class="hf" d="${M0}" fill="url(#ui-hgrad)"/></svg>`}Q.hearts.innerHTML=e}var sh=!1,Sd=0,rh=!1,E0=-1,w0=-1,oh=-1;function cE(n){let t=Ht.player;if(!t)return;let e=Math.round(qt(t.hp,0,99)*2)/2,i=Math.max(1,Math.round(t.maxHp));(e!==b0||i!==ih)&&(ih>0&&i>ih&&qa(Q.hearts,"bless"),lE(e,i),b0=e,ih=i);let s=t.hp>0&&t.hp<=1;s!==S0&&(S0=s,Q.vignette.classList.toggle("active",s));let r=qt(t.stamina/Math.max(1,t.maxStamina),0,1);r>=.999?(Sd+=n,sh&&Sd>.55&&(sh=!1,Q.stamina.classList.remove("on"))):(Sd=0,sh||(sh=!0,Q.stamina.classList.add("on"))),!rh&&t.stamina<=.02?(rh=!0,Q.stamina.classList.add("ex")):rh&&t.stamina>30&&(rh=!1,Q.stamina.classList.remove("ex"));let o=Math.round(JS*(1-r)*10)/10;o!==E0&&(E0=o,Q.stFg.style.strokeDashoffset=o);let a=qt(t.spiritOrbs|0,0,4);if(a!==w0){for(let c=0;c<4;c++){let h=Q.orbs[c];c<a?h.classList.contains("lit")||(h.classList.add("lit"),qa(h,"gain"),setTimeout(()=>h.classList.remove("gain"),950)):h.classList.remove("lit")}w0=a}let l=t.gems|0;l!==oh&&(Q.gemCount.textContent=l,oh>=0&&l>oh&&qa(Q.gems,"pop"),oh=l),mE()}function hE(){qa(Q.hearts,"hurt"),G0("rgba(186,26,42,1)",.16)}function uE(n){let t=n&&n.kind,e=innerWidth*.5,i=innerHeight*.58;if(n&&n.pos&&Ht.camera){let r=P0(n.pos,1.4);r.ok&&(e=r.x,i=r.y)}fE("+1",e,i,t==="heart"?"#ff93a0":t==="orb"?"#66ecd9":"#93e6ab")}function fE(n,t,e,i){let s=oe("div","float-txt",Q.floatLayer);s.textContent=n,s.style.left=t+"px",s.style.top=e+"px",i&&(s.style.color=i),setTimeout(()=>s.remove(),1250)}var qs={g:null,off:null,shade:null};function dE(){try{let n=Q.mapCanvas.getContext("2d");qs.g=n;let t=n.createRadialGradient(85,85,28,85,85,85);t.addColorStop(0,"rgba(6,10,12,0)"),t.addColorStop(.78,"rgba(6,10,12,.1)"),t.addColorStop(1,"rgba(6,10,12,.46)"),qs.shade=t;let e=Ht.world;if(!e||!e.getHeight)return;let i=64,s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=r.createImageData(i,i),a=new Float32Array(i*i),l=1e9,c=-1e9;for(let m=0;m<i;m++)for(let d=0;d<i;d++){let M=-1e3+(d+.5)*2e3/i,y=-1e3+(m+.5)*2e3/i,x=0;try{x=e.getHeight(M,y)||0}catch{}a[m*i+d]=x,x<l&&(l=x),x>c&&(c=x)}let h=Math.max(1,c-l),u={plains:[96,152,78],forest:[50,104,78],lake:[70,140,168],volcano:[116,66,52],castle:[80,70,100],ruins:[130,124,108]},f=[46,106,142],p=typeof e.waterLevel=="number"?e.waterLevel:-1e9;for(let m=0;m<i;m++)for(let d=0;d<i;d++){let M=-1e3+(d+.5)*2e3/i,y=-1e3+(m+.5)*2e3/i,x="plains";try{x=e.getBiome(M,y)||"plains"}catch{}let D=a[m*i+d],R=D<=p+.15?f:u[x]||u.plains,w=.6+.52*((D-l)/h),I=(m*i+d)*4;o.data[I]=Math.min(255,R[0]*w),o.data[I+1]=Math.min(255,R[1]*w),o.data[I+2]=Math.min(255,R[2]*w),o.data[I+3]=255}r.putImageData(o,0,0);let g=document.createElement("canvas");g.width=g.height=256;let _=g.getContext("2d");_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(s,0,0,256,256),qs.off=g}catch{}}function pE(n,t,e,i,s){n.save(),n.translate(t,e),n.rotate(Math.PI/4),n.shadowColor=s,n.shadowBlur=6,n.fillStyle=s,n.fillRect(-i*.72,-i*.72,i*1.44,i*1.44),n.restore()}function mE(){let n=qs.g;if(!n)return;let t=170,e=85,i=83,s=t/2e3;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,t,t),n.save(),n.beginPath(),n.arc(e,e,i,0,Math.PI*2),n.clip(),qs.off?n.drawImage(qs.off,0,0,256,256,0,0,t,t):(n.fillStyle="#20303a",n.fillRect(0,0,t,t)),qs.shade&&(n.fillStyle=qs.shade,n.fillRect(0,0,t,t));let r=Ht.shrines&&Ht.shrines.list;if(r)for(let l=0;l<r.length;l++){let c=r[l];!c||!c.pos||pE(n,e+c.pos.x*s,e+c.pos.z*s,4.4,c.completed?"#eccb66":"#3fe6d2")}let o=Ht.world&&Ht.world.castleGatePos;if(o){let l=e+o.x*s,c=e+o.z*s;n.save(),n.shadowColor="#c08df0",n.shadowBlur=6,n.fillStyle="#bd88ef",n.beginPath(),n.moveTo(l,c-5.4),n.lineTo(l+4.8,c+3.8),n.lineTo(l-4.8,c+3.8),n.closePath(),n.fill(),n.restore()}let a=Ht.player;if(a&&a.position){let l=a.position.x*s,c=a.position.z*s,h=Math.hypot(l,c),u=i-8;h>u&&(l*=u/h,c*=u/h),n.save(),n.translate(e+l,e+c),n.rotate(Math.PI-(a.heading||0)),n.shadowColor="rgba(255,244,206,.95)",n.shadowBlur=5,n.fillStyle="#fff6da",n.beginPath(),n.moveTo(0,-6.2),n.lineTo(4.4,4.8),n.lineTo(0,2.3),n.lineTo(-4.4,4.8),n.closePath(),n.fill(),n.restore()}n.restore(),n.beginPath(),n.arc(e,e,i,0,Math.PI*2),n.strokeStyle="rgba(201,162,39,.8)",n.lineWidth=1.3,n.stroke(),n.beginPath(),n.arc(e,e,i-3.5,0,Math.PI*2),n.strokeStyle="rgba(201,162,39,.22)",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(e,e-i+10,8,0,Math.PI*2),n.fillStyle="rgba(8,12,15,.82)",n.fill(),n.strokeStyle="rgba(201,162,39,.55)",n.lineWidth=1,n.stroke(),n.font="10px serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ecc966",n.fillText("\u5317",e,e-i+10.5)}var T0=new me,Do={x:0,y:0,ok:!1},Td=!1;function P0(n,t){let e=Ht.camera;return e.updateMatrixWorld(),T0.copy(e.matrixWorld).invert(),Pi.v1.set(n.x,n.y+(t||0),n.z).applyMatrix4(T0),Pi.v1.z>-.35?(Do.ok=!1,Do):(Pi.v1.applyMatrix4(e.projectionMatrix),Do.ok=Pi.v1.x>-1.08&&Pi.v1.x<1.08&&Pi.v1.y>-1.08&&Pi.v1.y<1.08,Do.x=(Pi.v1.x*.5+.5)*innerWidth,Do.y=(.5-Pi.v1.y*.5)*innerHeight,Do)}function gE(){let n=oe("div","",We);n.id="reticle",Q.reticle=n,oe("div","r1",n),oe("div","r2",n)}function xE(){let n=Ht.camera3p&&Ht.camera3p.lockTarget,t=!1;if(n&&n.alive!==!1&&n.pos){let e=P0(n.pos,(n.radius||.8)*1.1);e.ok&&(t=!0,Q.reticle.style.transform=`translate3d(${e.x.toFixed(1)}px,${e.y.toFixed(1)}px,0)`)}t!==Td&&(Td=t,Q.reticle.classList.toggle("on",t))}var A0=null;function L0(n){let t=n||null;if(t===A0)return;if(A0=t,!t){Q.prompt.classList.remove("on");return}let e=/^([A-Za-z0-9]{1,8})\s*キー\s*[::]?\s*(.*)$/.exec(t);e?(Q.pKey.style.display="",Q.pKey.textContent=e[1],Q.pTxt.textContent=e[2]||""):(Q.pKey.style.display="none",Q.pTxt.textContent=t),qa(Q.prompt,"on")}var qn={visible:!1,ghost:1,lastFill:-1,lastGhost:-1};function _E(){let n=oe("div","",We);n.id="bossbar",Q.bossbar=n,n.innerHTML=`<div class="bb-name"></div>
    <div class="bb-frame"><div class="bb-track"><div class="bb-ghost"></div><div class="bb-fill"></div></div></div>`,Q.bbName=n.querySelector(".bb-name"),Q.bbFill=n.querySelector(".bb-fill"),Q.bbGhost=n.querySelector(".bb-ghost")}function D0(n,t){let e=!!n;t!=null&&(Q.bbName.textContent=String(t)),e!==qn.visible&&(qn.visible=e,e&&(qn.ghost=1,qn.lastFill=-1,qn.lastGhost=-1,U0(0)),Q.bossbar.classList.toggle("on",e))}function U0(n){let t=Ht.boss;if(!t)return;let e=qt(t.maxHp>0?t.hp/t.maxHp:0,0,1);qn.ghost=Math.max(e,Lt(qn.ghost,e,2.2,n));let i=Math.round(e*1e3)/10,s=Math.round(qn.ghost*1e3)/10;i!==qn.lastFill&&(qn.lastFill=i,Q.bbFill.style.width=i+"%"),s!==qn.lastGhost&&(qn.lastGhost=s,Q.bbGhost.style.width=s+"%")}var Ad=[],Ed=!1;function vE(){Q.msgLayer=oe("div","",We),Q.msgLayer.id="msg-layer"}function yE(n,t){let e=t||{};Ad.push({text:String(n??""),duration:typeof e.duration=="number"?e.duration:3,sub:e.sub==null?null:String(e.sub)}),N0()}function N0(){if(Ed||!Ad.length)return;Ed=!0;let n=Ad.shift(),t=oe("div","msg",Q.msgLayer);oe("div","msg-rule",t);let e=oe("div","msg-text",t);if(e.textContent=n.text,n.sub){let i=oe("div","msg-sub",t);i.textContent=n.sub}oe("div","msg-rule",t),requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{t.classList.add("outing"),setTimeout(()=>{t.remove(),Ed=!1,N0()},620)},Math.max(.4,n.duration)*1e3+420)}var Rd=[],wd=0;function ME(){Q.toastLayer=oe("div","",We),Q.toastLayer.id="toast-layer"}function bE(n){Rd.push(String(n??"")),F0()}function F0(){if(wd>=4||!Rd.length)return;wd++;let n=Rd.shift(),t=oe("div","toast",Q.toastLayer),e=oe("span","t-dia",t);e.textContent="\u25C6";let i=oe("span","",t);i.textContent=n,requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{t.classList.add("out"),setTimeout(()=>{t.remove(),wd--,F0()},380)},2500)}var $t={q:[],active:!1,lines:null,onDone:null,li:0,chars:0,t:0,done:!1};function SE(){let n=oe("div","panel",We);n.id="dialog",Q.dialog=n;let t=oe("div","dlg-orn",n);t.textContent="\u25C6",Q.dlgText=oe("div","dlg-text",n),Q.dlgNext=oe("div","dlg-next",n),Q.dlgNext.textContent="\u25BC",n.addEventListener("click",()=>H0())}function z0(n,t){let e=Array.isArray(n)?n.filter(i=>i!=null).map(String):n!=null?[String(n)]:[];if(!e.length){typeof t=="function"&&t();return}$t.q.push({lines:e,onDone:t}),$t.active||O0()}function O0(){let n=$t.q.shift();if(!n){$t.active=!1;return}$t.active=!0,$t.lines=n.lines,$t.onDone=n.onDone,Q.dialog.classList.add("visible"),B0(0)}function B0(n){$t.li=n,$t.chars=0,$t.t=0,$t.done=!1,Q.dlgText.textContent="",Q.dlgNext.classList.remove("on")}function k0(){let n=$t.lines[$t.li];Q.dlgText.textContent=n.slice(0,$t.chars),$t.chars>=n.length&&($t.done=!0,Q.dlgNext.classList.add("on"))}function H0(){if(!$t.active||!$t.lines)return;if(Ht.audio&&Ht.audio.play&&Ht.audio.play("ui"),!$t.done){$t.chars=$t.lines[$t.li].length,k0();return}if($t.li<$t.lines.length-1){B0($t.li+1);return}let n=$t.onDone;if($t.lines=null,$t.onDone=null,$t.done=!1,Q.dialog.classList.remove("visible"),setTimeout(O0,280),typeof n=="function")try{n()}catch{}}function EE(n,t){if($t.lines){if(!$t.done){$t.t+=n;let e=$t.lines[$t.li],i=$t.chars;for(;$t.t>=.02&&i<e.length;)$t.t-=.02,i++;i!==$t.chars&&($t.chars=i,k0())}t&&Ht.input.justPressed("KeyE")&&H0()}}function wE(){$t.q.length=0,$t.lines=null,$t.onDone=null,$t.active=!1,$t.done=!1,Q.dialog.classList.remove("visible")}function G0(n,t){let e=Q.flash;e.style.transition="none",e.style.background=n||"#ffffff",e.style.opacity=String(qt(t??.5,0,1)),e.offsetWidth,e.style.transition="opacity .3s ease-out",e.style.opacity="0"}function TE(){let n=oe("div","panel",We);n.id="guide",Q.guide=n;let t="";for(let[e,i]of QS)t+=`<div class="gd-k">${C0(e)}</div><div class="gd-a">${i}</div>`;n.innerHTML=`<div class="gd-title">\u65C5\u306E\u5FC3\u5F97</div><div class="gd-rows">${t}</div>`}function AE(){Q.guide.classList.add("on"),clearTimeout(Q.guide._t),Q.guide._t=setTimeout(()=>Q.guide.classList.remove("on"),5e3)}function RE(){let n=oe("section","screen",We);n.id="title-screen",Q.title=n,n.innerHTML=`
    <div class="tt-center">
      <div class="tt-orn tt-orn-t"><span class="tl"></span><span class="td">\u25C6</span><span class="tl r"></span></div>
      <h1 class="tt-logo">\u30A2\u30EB\u30C7\u30A3\u30A2\u306E\u4F1D\u8AAC</h1>
      <div class="tt-sub">\u301C\u7DD1\u8863\u306E\u52C7\u8005\u3068\u6EC5\u3073\u306E\u9B54\u57CE\u301C</div>
      <div class="tt-orn tt-orn-b"><span class="tl"></span><span class="td sm">\u25C6</span><span class="tl r"></span></div>
      <nav class="tt-menu">
        <button class="mbtn" data-act="start">\u306F\u3058\u3081\u308B</button>
        <button class="mbtn" data-act="controls">\u64CD\u4F5C\u65B9\u6CD5</button>
        <button class="mbtn" data-act="settings">\u8A2D\u5B9A</button>
      </nav>
    </div>
    <footer class="tt-foot">\u30AA\u30EA\u30B8\u30CA\u30EB\u30D5\u30A1\u30F3\u30E1\u30A4\u30C9\u4F5C\u54C1 \u2014 \u30BC\u30EB\u30C0\u306E\u4F1D\u8AAC\u3078\u306E\u30AA\u30DE\u30FC\u30B8\u30E5</footer>`,n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");if(!e)return;let i=e.dataset.act;i==="start"?CE():i==="controls"?Cd("controls"):i==="settings"&&Cd("settings")})}function CE(){Ht.emit("game-start"),z0(KS,AE)}function IE(){let n=oe("section","screen",We);n.id="pause-screen",Q.pause=n,n.innerHTML=`
    <h2 class="pz-head">\u4F11\u606F</h2>
    <div class="tt-orn pz-orn"><span class="tl"></span><span class="td sm">\u25C6</span><span class="tl r"></span></div>
    <nav class="pz-menu">
      <button class="mbtn" data-act="resume">\u518D\u958B</button>
      <button class="mbtn" data-act="settings">\u8A2D\u5B9A</button>
      <button class="mbtn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>
    </nav>
    <div class="pz-stats">
      <div class="stat"><span class="s-l">\u65C5\u306E\u6642\u9593</span><span class="s-v pz-time">\u2014</span></div>
      <div class="stat"><span class="s-l">\u8A0E\u4F10\u3057\u305F\u9B54\u7269</span><span class="s-v pz-kills">0</span></div>
      <div class="stat"><span class="s-l">\u7DD1\u77F3</span><span class="s-v pz-gems">0</span></div>
    </div>`,Q.pzTime=n.querySelector(".pz-time"),Q.pzKills=n.querySelector(".pz-kills"),Q.pzGems=n.querySelector(".pz-gems"),n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");if(!e)return;let i=e.dataset.act;i==="resume"?Ht.setState(Ht._pausedFrom||"playing"):i==="settings"?Cd("settings"):i==="title"&&Ht.emit("title-request")})}function PE(){Q.pzTime.textContent=I0(Ys.playTime),Q.pzKills.textContent=String(Ys.kills),Q.pzGems.textContent=String(Ht.player?Ht.player.gems|0:0)}function LE(){let n=oe("section","screen",We);n.id="gameover-screen",Q.gameover=n,n.innerHTML=`
    <div class="go-text">\u52C7\u8005\u306F\u5012\u308C\u305F\u2026</div>
    <nav class="go-menu">
      <button class="obtn" data-act="respawn">\u3075\u305F\u305F\u3073\u6311\u3080</button>
      <button class="obtn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>
    </nav>`,n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");e&&(e.dataset.act==="respawn"?Ht.emit("respawn-request"):Ht.emit("title-request"))})}function DE(){let n=oe("section","screen",We);n.id="ending-screen",Q.ending=n,n.innerHTML=`
    <div class="ed-l1">\u9B54\u7363\u306F\u8A0E\u305F\u308C\u3001\u5927\u5730\u306B\u671D\u304C\u623B\u3063\u305F</div>
    <div class="ed-l2">\u4F1D\u8AAC\u306F\u8A9E\u308A\u7D99\u304C\u308C\u308B</div>
    <div class="ed-orn">\u25C6</div>
    <div class="ed-stats">
      <div class="stat"><span class="s-l">\u30AF\u30EA\u30A2\u6642\u9593</span><span class="s-v ed-time">\u2014</span></div>
      <div class="stat"><span class="s-l">\u8A0E\u4F10\u3057\u305F\u9B54\u7269</span><span class="s-v ed-kills">0</span></div>
      <div class="stat"><span class="s-l">\u96C6\u3081\u305F\u7DD1\u77F3</span><span class="s-v ed-gems">0</span></div>
    </div>
    <button class="mbtn ed-btn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>`,n.querySelector(".ed-btn").addEventListener("click",()=>Ht.emit("title-request"))}function UE(){Q.ending.querySelector(".ed-time").textContent=I0(Ys.playTime),Q.ending.querySelector(".ed-kills").textContent=String(Ys.kills),Q.ending.querySelector(".ed-gems").textContent=String(Ht.player?Ht.player.gems|0:0)}var Ya={open:!1,kind:null};function NE(){let n=oe("div","",We);n.id="modal-layer",Q.modal=n,n.innerHTML=`
    <div class="modal-back"></div>
    <div class="modal panel">
      <button class="modal-x" aria-label="\u9589\u3058\u308B">\xD7</button>
      <h2 class="modal-title"></h2>
      <div class="modal-body"></div>
    </div>`,Q.modalTitle=n.querySelector(".modal-title"),Q.modalBody=n.querySelector(".modal-body"),n.querySelector(".modal-back").addEventListener("click",()=>ah()),n.querySelector(".modal-x").addEventListener("click",()=>ah()),FE(),zE()}function FE(){let n=document.createElement("div");n.className="set-body",n.innerHTML=`
    <div class="set-row">
      <span class="set-label">\u753B\u8CEA</span>
      <div class="seg">
        <button data-q="high">\u9AD8</button><button data-q="medium">\u4E2D</button><button data-q="low">\u4F4E</button>
      </div>
    </div>
    <div class="set-row">
      <span class="set-label">\u97F3\u697D\u306E\u97F3\u91CF</span>
      <input class="vol-music" type="range" min="0" max="1" step="0.01">
      <span class="set-val vm">70</span>
    </div>
    <div class="set-row">
      <span class="set-label">\u52B9\u679C\u97F3\u306E\u97F3\u91CF</span>
      <input class="vol-sfx" type="range" min="0" max="1" step="0.01">
      <span class="set-val vs">90</span>
    </div>
    <p class="set-note">\u753B\u8CEA\u3092\u5909\u3048\u308B\u3068\u3001\u8349\u6728\u306E\u5BC6\u5EA6\u3084\u5149\u306E\u8868\u73FE\u304C\u5909\u308F\u308A\u307E\u3059\u3002</p>`,Q.setBody=n,n.querySelector(".seg").addEventListener("click",i=>{let s=i.target.closest("button[data-q]");s&&(Ht.settings.quality=s.dataset.q,Ht.applyQuality&&Ht.applyQuality(),V0())});let t=n.querySelector(".vol-music"),e=n.querySelector(".vol-sfx");t.addEventListener("input",()=>{Ht.settings.musicVol=qt(Number(t.value)||0,0,1),n.querySelector(".vm").textContent=Math.round(Ht.settings.musicVol*100)}),e.addEventListener("input",()=>{Ht.settings.sfxVol=qt(Number(e.value)||0,0,1),n.querySelector(".vs").textContent=Math.round(Ht.settings.sfxVol*100)}),e.addEventListener("change",()=>{Ht.audio&&Ht.audio.play&&Ht.audio.play("ui")})}function V0(){let n=Q.setBody;n.querySelectorAll(".seg button").forEach(i=>i.classList.toggle("active",i.dataset.q===Ht.settings.quality));let t=n.querySelector(".vol-music"),e=n.querySelector(".vol-sfx");t.value=Ht.settings.musicVol,e.value=Ht.settings.sfxVol,n.querySelector(".vm").textContent=Math.round(Ht.settings.musicVol*100),n.querySelector(".vs").textContent=Math.round(Ht.settings.sfxVol*100)}function zE(){let n=document.createElement("div");n.className="ctl-body";let t="";for(let[e,i]of jS)t+=`<tr><td class="k">${C0(e)}</td><td class="a">${i}</td></tr>`;n.innerHTML=`<table class="ctl-table"><tbody>${t}</tbody></table>`,Q.ctlBody=n}function Cd(n){Ya.open=!0,Ya.kind=n,Q.modalTitle.textContent=n==="settings"?"\u8A2D\u5B9A":"\u64CD\u4F5C\u65B9\u6CD5",Q.modalBody.innerHTML="",Q.modalBody.appendChild(n==="settings"?Q.setBody:Q.ctlBody),n==="settings"&&V0(),Q.modal.classList.toggle("wide",n==="controls"),Q.modal.classList.add("open"),We.classList.add("modal-open")}function ah(n){Ya.open&&(Ya.open=!1,Q.modal.classList.remove("open"),We.classList.remove("modal-open"),!n&&Ht.audio&&Ht.audio.play&&Ht.audio.play("uiBack"))}var R0=null;function OE(){We.addEventListener("pointerover",n=>{let t=n.target.closest?n.target.closest("button"):null;t!==R0&&(R0=t,t&&Ht.audio&&Ht.audio.play&&Ht.audio.play("ui"))}),We.addEventListener("pointerdown",n=>{n.target.closest&&n.target.closest("button")&&Ht.audio&&Ht.audio.play&&Ht.audio.play("ui")})}var Tr=document.getElementById("game"),zi=new ql({canvas:Tr,antialias:!0,powerPreference:"high-performance"});zi.shadowMap.enabled=!0;zi.shadowMap.type=gf;zi.outputColorSpace=nn;zi.toneMapping=_a;zi.toneMappingExposure=1.05;var Z0=new Zl,Za=new gn(55,innerWidth/innerHeight,.3,3e3);Za.position.set(0,8,262);var ch=new Set,wr=new Set,Ye={dx:0,dy:0,wheel:0,left:!1,right:!1,leftJust:!1,rightJust:!1};addEventListener("keydown",n=>{n.repeat||(ch.add(n.code),wr.add(n.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),$0())});addEventListener("keyup",n=>ch.delete(n.code));addEventListener("blur",()=>{ch.clear(),Ye.left=Ye.right=!1});Tr.addEventListener("pointerdown",n=>{n.button===0&&(Ye.left=!0,Ye.leftJust=!0),n.button===2&&(Ye.right=!0,Ye.rightJust=!0),$0();let t=te.state;(t==="playing"||t==="shrine"||t==="boss")&&!document.pointerLockElement&&Tr.requestPointerLock?.()});addEventListener("pointerup",n=>{n.button===0&&(Ye.left=!1),n.button===2&&(Ye.right=!1)});addEventListener("mousemove",n=>{(document.pointerLockElement===Tr||Ye.left||Ye.right)&&(Ye.dx+=n.movementX,Ye.dy+=n.movementY)});addEventListener("wheel",n=>{Ye.wheel+=n.deltaY},{passive:!0});Tr.addEventListener("contextmenu",n=>n.preventDefault());var W0=!1;function $0(){W0||(W0=!0,te.audio?.unlock?.())}var Id=new EventTarget,te={renderer:zi,scene:Z0,camera:Za,canvas:Tr,state:"loading",setState(n){let t=te.state;t!==n&&(te.state=n,(n==="paused"||n==="title"||n==="gameover"||n==="ending")&&document.exitPointerLock?.(),te.emit("state",{from:t,to:n}))},events:Id,emit(n,t){Id.dispatchEvent(new CustomEvent(n,{detail:t}))},on(n,t){Id.addEventListener(n,e=>t(e.detail))},time:{elapsed:0,dt:0,dayPhase:.1,isNight:!1},input:{keys:ch,justPressed:n=>wr.has(n),mouse:Ye,get pointerLocked(){return document.pointerLockElement===Tr}},settings:{quality:"high",musicVol:.7,sfxVol:.9},quality:{},applyQuality(){let n=te.settings.quality,t=window.devicePixelRatio||1;te.quality={pixelRatio:n==="high"?Math.min(t,2):n==="medium"?Math.min(t,1.35):1,shadowMapSize:n==="high"?2048:n==="medium"?1024:512,grassMul:n==="high"?1:n==="medium"?.55:.28,particleMul:n==="high"?1:n==="medium"?.6:.35,postFX:n!=="low",drawDist:n==="high"?1:n==="medium"?.85:.65},zi.setPixelRatio(te.quality.pixelRatio),zi.setSize(innerWidth,innerHeight),te.emit("quality-changed",te.quality)},getGroundHeight:()=>0,colliders:[],playerBounds:null,world:null,sky:null,player:null,camera3p:null,combat:null,shrines:null,boss:null,ui:null,audio:null,effects:null};te.on("game-start",()=>te.setState("playing"));te.on("player-died",()=>{setTimeout(()=>{te.state!=="gameover"&&te.setState("gameover")},1600)});te.on("respawn-request",()=>{let n=te.player;n.heal(n.maxHp),n.teleport(te.world.startPos.clone(),Math.PI),te.setState("playing")});te.on("title-request",()=>{let n=te.player;n.heal(n.maxHp),n.teleport(te.world.startPos.clone(),Math.PI),te.setState("title")});addEventListener("resize",()=>{Za.aspect=innerWidth/innerHeight,Za.updateProjectionMatrix(),zi.setSize(innerWidth,innerHeight),te.effects?.onResize?.(innerWidth,innerHeight)});var X0=document.getElementById("boot-status"),q0=document.getElementById("boot-bar");function Y0(n,t,e){X0&&(X0.textContent=e),q0&&(q0.style.width=`${Math.round(n/t*100)}%`)}var lh=[["\u5927\u5730\u3092\u5275\u9020\u3057\u3066\u3044\u307E\u3059\u2026",Ea],["\u7A7A\u3068\u5149\u3092\u547C\u3093\u3067\u3044\u307E\u3059\u2026",Ra],["\u98A8\u306E\u7C92\u5B50\u3092\u7E54\u3063\u3066\u3044\u307E\u3059\u2026",Pa],["\u52C7\u8005\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u3044\u307E\u3059\u2026",Wc],["\u8996\u754C\u3092\u6574\u3048\u3066\u3044\u307E\u3059\u2026",Va],["\u9B54\u7269\u304C\u8822\u3044\u3066\u3044\u307E\u3059\u2026",Qc],["\u7960\u306B\u706F\u3092\u70B9\u3057\u3066\u3044\u307E\u3059\u2026",jc],["\u9B54\u57CE\u304C\u8ECB\u3093\u3067\u3044\u307E\u3059\u2026",th],["\u65CB\u5F8B\u3092\u7D21\u3044\u3067\u3044\u307E\u3059\u2026",Lo],["\u65C5\u652F\u5EA6\u3092\u3057\u3066\u3044\u307E\u3059\u2026",Uo]];async function BE(){te.applyQuality();let n=0;for(let[t,e]of lh){Y0(n,lh.length,t),await new Promise(i=>requestAnimationFrame(i));try{await e.init(te)}catch(i){console.warn("[init\u5931\u6557]",t,i)}n++}Y0(lh.length,lh.length,"\u6E96\u5099\u5B8C\u4E86"),document.getElementById("boot")?.classList.add("boot-done"),setTimeout(()=>document.getElementById("boot")?.remove(),900),te.setState("title"),requestAnimationFrame(J0)}var kE=new ho,HE=240,GE=[Wc,Va,Ea,Ra,Qc,jc,th,Pa,Lo,Uo],VE=[Va,Ea,Ra,Pa,Lo,Uo],WE=[Lo,Uo];function J0(){requestAnimationFrame(J0);let n=qt(kE.getDelta(),0,1/20);te.time.dt=n,te.time.elapsed+=n;let t=te.state,e=t==="playing"||t==="shrine"||t==="boss"?GE:t==="title"||t==="gameover"||t==="ending"?VE:t==="paused"?WE:null;if((t==="playing"||t==="boss"||t==="title")&&(te.time.dayPhase=(te.time.dayPhase+n/HE)%1),te.time.isNight=te.time.dayPhase>.55&&te.time.dayPhase<.95,(t==="playing"||t==="shrine"||t==="boss")&&(wr.has("Escape")||wr.has("KeyP"))?(te._pausedFrom=t,te.setState("paused")):t==="paused"&&(wr.has("Escape")||wr.has("KeyP"))&&te.setState(te._pausedFrom||"playing"),e)for(let i of e)try{i.update(te,n)}catch(s){i._errOnce||(i._errOnce=!0,console.warn("[update\u5931\u6557]",s))}try{te.effects?.render?.(n)}catch{zi.render(Z0,Za)}wr.clear(),Ye.dx=0,Ye.dy=0,Ye.wheel=0,Ye.leftJust=!1,Ye.rightJust=!1}window.__ctx=te;BE();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
