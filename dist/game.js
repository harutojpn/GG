(()=>{var Op=Object.defineProperty;var wi=(n,t)=>{for(var e in t)Op(n,e,{get:t[e],enumerable:!0})};var Bp=0,Yu=1,zp=2;var od=1,Oh=2,fi=3,Fi=0,je=1,On=2,Qn=0,mi=1,ti=2,Zu=3,$u=4,kp=5,ps=100,Hp=101,Vp=102,Gp=103,Wp=104,Xp=200,qp=201,Yp=202,Zp=203,fc=204,dc=205,$p=206,Jp=207,Kp=208,Qp=209,jp=210,tm=211,em=212,nm=213,im=214,pc=0,mc=1,gc=2,nr=3,xc=4,_c=5,vc=6,yc=7,ad=0,sm=1,rm=2,Ni=0,Bh=1,zh=2,kh=3,xo=4,om=5,Hh=6,Vh=7;var ld=300,ir=301,sr=302,Mc=303,bc=304,ja=306,Sc=1e3,gs=1001,Ec=1002,tn=1003,am=1004;var Bo=1005;var Jn=1006,Dl=1007;var xs=1008;var xi=1009,cd=1010,hd=1011,to=1012,Gh=1013,_s=1014,Kn=1015,xn=1016,Wh=1017,Xh=1018,rr=1020,ud=35902,fd=1021,dd=1022,zn=1023,pd=1024,md=1025,js=1026,or=1027,_o=1028,qh=1029,gd=1030,Yh=1031;var Zh=1033,ma=33776,ga=33777,xa=33778,_a=33779,Tc=35840,wc=35841,Ac=35842,Rc=35843,Cc=36196,Ic=37492,Pc=37496,Lc=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,zc=37815,kc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,va=36492,qc=36494,Yc=36495,xd=36283,Zc=36284,$c=36285,Jc=36286;var ya=2300,Kc=2301,Ul=2302,Ju=2400,Ku=2401,Qu=2402;var lm=3200,cm=3201;var _d=0,hm=1,Di="",Ve="srgb",mr="srgb-linear",tl="linear",ue="srgb";var Ls=7680;var ju=519,um=512,fm=513,dm=514,vd=515,pm=516,mm=517,gm=518,xm=519,Qc=35044,Vn=35048;var tf="300 es",pi=2e3,Ma=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=1234567,Zr=Math.PI/180,eo=180/Math.PI;function jn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function $h(n,t){return(n%t+t)%t}function _m(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vm(n,t,e){return n!==t?(e-n)/(t-n):0}function $r(n,t,e){return(1-e)*n+e*t}function ym(n,t,e,i){return $r(n,t,1-Math.exp(-e*i))}function Mm(n,t=1){return t-Math.abs($h(n,t*2)-t)}function bm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Em(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tm(n,t){return n+Math.random()*(t-n)}function wm(n){return n*(.5-Math.random())}function Am(n){n!==void 0&&(ef=n);let t=ef+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rm(n){return n*Zr}function Cm(n){return n*eo}function Im(n){return(n&n-1)===0&&n!==0}function Pm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dm(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var yd={DEG2RAD:Zr,RAD2DEG:eo,generateUUID:jn,clamp:Ge,euclideanModulo:$h,mapLinear:_m,inverseLerp:vm,lerp:$r,damp:ym,pingpong:Mm,smoothstep:bm,smootherstep:Sm,randInt:Em,randFloat:Tm,randFloatSpread:wm,seededRandom:Am,degToRad:Rm,radToDeg:Cm,isPowerOfTwo:Im,ceilPowerOfTwo:Pm,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Dm,normalize:pe,denormalize:Bn},et=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],M=s[4],x=s[7],D=s[2],C=s[5],I=s[8];return r[0]=o*_+a*T+l*D,r[3]=o*m+a*M+l*C,r[6]=o*p+a*x+l*I,r[1]=c*_+h*T+u*D,r[4]=c*m+h*M+u*C,r[7]=c*p+h*x+u*I,r[2]=f*_+d*T+g*D,r[5]=f*m+d*M+g*C,r[8]=f*p+d*x+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nl.makeScale(t,e)),this}rotate(t){return this.premultiply(Nl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nl=new Jt;function Md(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Um(){let n=ba("canvas");return n.style.display="block",n}var nf={};function qr(n){n in nf||(nf[n]=!0,console.warn(n))}function Nm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Fm(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Om(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?tl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sf=[.64,.33,.3,.6,.15,.06],rf=[.2126,.7152,.0722],of=[.3127,.329],af=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lf=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[mr]:{primaries:sf,whitePoint:of,transfer:tl,toXYZ:af,fromXYZ:lf,luminanceCoefficients:rf,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:sf,whitePoint:of,transfer:ue,toXYZ:af,fromXYZ:lf,luminanceCoefficients:rf,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var Ds,jc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=ba("canvas")),Ds.width=t.width,Ds.height=t.height;let i=Ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ba("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bm=0,Sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fl(s[o].image)):r.push(Fl(s[o]))}else r=Fl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zm=0,ln=class n extends Oi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gs,s=gs,r=Jn,o=xs,a=zn,l=xi,c=n.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=jn(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sc:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sc:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ld;ln.DEFAULT_ANISOTROPY=1;var Pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(d+1)/2,D=(p+1)/2,C=(h+f)/4,I=(u+_)/4,L=(g+m)/4;return M>x&&M>D?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=I/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=I/r,s=L/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},th=class extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends th{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ea=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let D=Math.sqrt(M),C=Math.atan2(D,p*T);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let x=a*T;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new A,cf=new cn,_i=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),ko.subVectors(this.max,Or),Us.subVectors(t.a,Or),Ns.subVectors(t.b,Or),Fs.subVectors(t.c,Or),Ai.subVectors(Ns,Us),Ri.subVectors(Fs,Ns),as.subVectors(Us,Fs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-as.z,as.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,as.z,0,-as.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-as.y,as.x,0];return!Bl(e,Us,Ns,Fs,ko)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,Us,Ns,Fs,ko))?!1:(Ho.crossVectors(Ai,Ri),e=[Ho.x,Ho.y,Ho.z],Bl(e,Us,Ns,Fs,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ai=[new A,new A,new A,new A,new A,new A,new A,new A],Un=new A,zo=new _i,Us=new A,Ns=new A,Fs=new A,Ai=new A,Ri=new A,as=new A,Or=new A,ko=new A,Ho=new A,ls=new A;function Bl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var km=new _i,Br=new A,zl=new A,Bi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):km.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(zl)),this.expandByPoint(Br.copy(t.center).sub(zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new A,kl=new A,Vo=new A,Ci=new A,Hl=new A,Go=new A,Vl=new A,Ta=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){kl.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(kl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vo),a=Ci.dot(this.direction),l=-Ci.dot(Vo),c=Ci.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kl).addScaledVector(Vo,f),d}intersectSphere(t,e){li.subVectors(t.center,this.origin);let i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){Hl.subVectors(e,t),Go.subVectors(i,t),Vl.crossVectors(Hl,Go);let o=this.direction.dot(Vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);let l=a*this.direction.dot(Go.crossVectors(Ci,Go));if(l<0)return null;let c=a*this.direction.dot(Hl.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(Vl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hm,t,Vm)}lookAt(t,e,i){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ii.crossVectors(i,mn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ii.crossVectors(i,mn)),Ii.normalize(),Wo.crossVectors(mn,Ii),s[0]=Ii.x,s[4]=Wo.x,s[8]=mn.x,s[1]=Ii.y,s[5]=Wo.y,s[9]=mn.y,s[2]=Ii.z,s[6]=Wo.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],M=i[7],x=i[11],D=i[15],C=s[0],I=s[4],L=s[8],S=s[12],y=s[1],P=s[5],z=s[9],B=s[13],G=s[2],K=s[6],W=s[10],st=s[14],X=s[3],ht=s[7],xt=s[11],Tt=s[15];return r[0]=o*C+a*y+l*G+c*X,r[4]=o*I+a*P+l*K+c*ht,r[8]=o*L+a*z+l*W+c*xt,r[12]=o*S+a*B+l*st+c*Tt,r[1]=h*C+u*y+f*G+d*X,r[5]=h*I+u*P+f*K+d*ht,r[9]=h*L+u*z+f*W+d*xt,r[13]=h*S+u*B+f*st+d*Tt,r[2]=g*C+_*y+m*G+p*X,r[6]=g*I+_*P+m*K+p*ht,r[10]=g*L+_*z+m*W+p*xt,r[14]=g*S+_*B+m*st+p*Tt,r[3]=T*C+M*y+x*G+D*X,r[7]=T*I+M*P+x*K+D*ht,r[11]=T*L+M*z+x*W+D*xt,r[15]=T*S+M*B+x*st+D*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,D=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,C=e*T+i*M+s*x+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=T*I,t[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*I,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*I,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*I,t[4]=M*I,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*I,t[8]=x*I,t[9]=(g*u*r-h*_*r-g*i*d+e*_*d+h*i*p-e*u*p)*I,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*I,t[12]=D*I,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*I,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=l*c,M=l*h,x=l*u,D=i.x,C=i.y,I=i.z;return s[0]=(1-(_+p))*D,s[1]=(d+x)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(d-x)*C,s[5]=(1-(f+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+M)*I,s[9]=(m-T)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);let c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,g,_;if(a===pi)g=(o+r)*u,_=-2*u;else if(a===Ma)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Os=new A,Nn=new oe,Hm=new A(0,0,0),Vm=new A(1,1,1),Ii=new A,Wo=new A,mn=new A,hf=new oe,uf=new cn,kn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uf.setFromEuler(this),this.setFromQuaternion(uf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gm=0,ff=new A,Bs=new cn,ci=new oe,Xo=new A,zr=new A,Wm=new A,Xm=new cn,df=new A(1,0,0),pf=new A(0,1,0),mf=new A(0,0,1),gf={type:"added"},qm={type:"removed"},zs={type:"childadded",child:null},Gl={type:"childremoved",child:null},Xe=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new kn,i=new cn,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Jt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(df,t)}rotateY(t){return this.rotateOnAxis(pf,t)}rotateZ(t){return this.rotateOnAxis(mf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(df,t)}translateY(t){return this.translateOnAxis(pf,t)}translateZ(t){return this.translateOnAxis(mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xo.copy(t):Xo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(zr,Xo,this.up):ci.lookAt(Xo,zr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(ci),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gf),zs.child=t,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qm),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gf),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new A(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new A,hi=new A,Wl=new A,ui=new A,ks=new A,Hs=new A,xf=new A,Xl=new A,ql=new A,Yl=new A,Zl=new Pe,$l=new Pe,Jl=new Pe,Ui=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),hi.subVectors(i,e),Wl.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(hi),l=Fn.dot(Wl),c=hi.dot(hi),h=hi.dot(Wl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Zl.setScalar(0),$l.setScalar(0),Jl.setScalar(0),Zl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,i),Jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),hi.subVectors(t,e),Fn.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,i),Hs.subVectors(r,i),Xl.subVectors(t,i);let l=ks.dot(Xl),c=Hs.dot(Xl);if(l<=0&&c<=0)return e.copy(i);ql.subVectors(t,s);let h=ks.dot(ql),u=Hs.dot(ql);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ks,o);Yl.subVectors(t,r);let d=ks.dot(Yl),g=Hs.dot(Yl);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Hs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return xf.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(xf,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(ks,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Kl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Mt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=$h(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Kl(o,r,t+1/3),this.g=Kl(o,r,t),this.b=Kl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let i=bd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ie.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ge(Qe.r*255,0,255))*65536+Math.round(Ge(Qe.g*255,0,255))*256+Math.round(Ge(Qe.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Qe.copy(this),e);let i=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ve){ie.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,i=Qe.g,s=Qe.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(qo);let i=$r(Pi.h,qo.h,e),s=$r(Pi.s,qo.s,e),r=$r(Pi.l,qo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Mt;Mt.NAMES=bd;var Ym=0,vi=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=jn(),this.name="",this.blending=mi,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zi=class extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new A,Yo=new et,ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}};var Aa=class extends ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ra=class extends ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ge=class extends ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zm=0,En=new oe,Ql=new Xe,Vs=new A,gn=new _i,kr=new _i,He=new A,Le=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?Ra:Aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(gn.min,kr.min),gn.expandByPoint(He),He.addVectors(gn.max,kr.max),gn.expandByPoint(He)):(gn.expandByPoint(kr.min),gn.expandByPoint(kr.max))}gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),He.add(Vs)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new A,l[L]=new A;let c=new A,h=new A,u=new A,f=new et,d=new et,g=new et,_=new A,m=new A;function p(L,S,y){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[S].add(_),a[y].add(_),l[L].add(m),l[S].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,S=T.length;L<S;++L){let y=T[L],P=y.start,z=y.count;for(let B=P,G=P+z;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new A,x=new A,D=new A,C=new A;function I(L){D.fromBufferAttribute(s,L),C.copy(D);let S=a[L];M.copy(S),M.sub(D.multiplyScalar(D.dot(S))).normalize(),x.crossVectors(C,S);let P=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,S=T.length;L<S;++L){let y=T[L],P=y.start,z=y.count;for(let B=P,G=P+z;B<G;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_f=new oe,cs=new Ta,Zo=new Bi,vf=new A,$o=new A,Jo=new A,Ko=new A,jl=new A,Qo=new A,yf=new A,jo=new A,me=class extends Xe{constructor(t=new Le,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(jl.fromBufferAttribute(u,t),o?Qo.addScaledVector(jl,h):Qo.addScaledVector(jl.sub(e),h))}e.add(Qo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Zo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Zo,vf)===null||cs.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(_f.copy(r).invert(),cs.copy(t.ray).applyMatrix4(_f),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,D=M;x<D;x+=3){let C=a.getX(x),I=a.getX(x+1),L=a.getX(x+2);s=ta(this,p,t,i,c,h,u,C,I,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let T=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=ta(this,o,t,i,c,h,u,T,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,D=M;x<D;x+=3){let C=x,I=x+1,L=x+2;s=ta(this,p,t,i,c,h,u,C,I,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let T=m,M=m+1,x=m+2;s=ta(this,o,t,i,c,h,u,T,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function $m(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;jo.copy(a),jo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:n}}function ta(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,$o),n.getVertexPosition(l,Jo),n.getVertexPosition(c,Ko);let h=$m(n,t,e,i,$o,Jo,Ko,yf);if(h){let u=new A;Ui.getBarycoord(yf,$o,Jo,Ko,u),s&&(h.uv=Ui.getInterpolatedAttribute(s,a,l,c,u,new et)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,l,c,u,new et)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Ui.getNormal($o,Jo,Ko,f.normal),h.face=f,h.barycoord=u}return h}var ki=class n extends Le{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(_,m,p,T,M,x,D,C,I,L,S){let y=x/I,P=D/L,z=x/2,B=D/2,G=C/2,K=I+1,W=L+1,st=0,X=0,ht=new A;for(let xt=0;xt<W;xt++){let Tt=xt*P-B;for(let qt=0;qt<K;qt++){let le=qt*y-z;ht[_]=le*T,ht[m]=Tt*M,ht[p]=G,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(qt/I),u.push(1-xt/L),st+=1}}for(let xt=0;xt<L;xt++)for(let Tt=0;Tt<I;Tt++){let qt=f+Tt+K*xt,le=f+Tt+K*(xt+1),$=f+(Tt+1)+K*(xt+1),ot=f+(Tt+1)+K*xt;l.push(qt,le,ot),l.push(le,$,ot),X+=6}a.addGroup(d,X,S),d+=X,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){let t={};for(let e=0;e<n.length;e++){let i=ar(n[e]);for(let s in i)t[s]=i[s]}return t}function Jm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Vi={clone:ar,merge:nn},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ca=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new A,Mf=new et,bf=new et,sn=class extends Ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Mf,bf),e.subVectors(bf,Mf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Ws=1,nh=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Gs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new sn(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new sn(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new sn(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let l=new sn(Gs,Ws,t,e);l.layers=this.layers,this.add(l);let c=new sn(Gs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ia=class extends ln{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ih=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ia(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Qn});r.uniforms.tEquirect.value=e;let o=new me(s,r),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=Jn),new nh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},tc=new A,jm=new A,t0=new Jt,di=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=tc.subVectors(i,e).cross(jm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||t0.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Bi,ea=new A,no=class{constructor(t=new di,e=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],M=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,m-d,x-p).normalize(),i[1].setComponents(l+r,f+c,m+d,x+p).normalize(),i[2].setComponents(l+o,f+h,m+g,x+T).normalize(),i[3].setComponents(l-o,f-h,m-g,x-T).normalize(),i[4].setComponents(l-a,f-u,m-_,x-M).normalize(),e===pi)i[5].setComponents(l+a,f+u,m+_,x+M).normalize();else if(e===Ma)i[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ed(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function e0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Pa=class n extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let T=p*f-o;for(let M=0;M<c;M++){let x=M*u-r;g.push(x,-T,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){let M=T+c*p,x=T+c*(p+1),D=T+1+c*(p+1),C=T+1+c*p;d.push(M,x,C),d.push(x,D,C)}this.setIndex(d),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
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
#endif`,tg=`struct PhysicalMaterial {
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
}`,eg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,bx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,Ex=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:b0,color_pars_vertex:S0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:I0,emissivemap_pars_fragment:P0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Z0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:H0,fog_pars_fragment:V0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:J0,lights_phong_fragment:K0,lights_phong_pars_fragment:Q0,lights_physical_fragment:j0,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:fg,metalnessmap_pars_fragment:dg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:xg,morphtarget_vertex:_g,normal_fragment_begin:vg,normal_fragment_maps:yg,normal_pars_fragment:Mg,normal_pars_vertex:bg,normal_vertex:Sg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Ig,premultiplied_alpha_fragment:Pg,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ug,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Bg,shadowmap_vertex:zg,shadowmask_pars_fragment:kg,skinbase_vertex:Hg,skinning_pars_vertex:Vg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Zg,transmission_fragment:$g,transmission_pars_fragment:Jg,uv_pars_fragment:Kg,uv_pars_vertex:Qg,uv_vertex:jg,worldpos_vertex:tx,background_vert:ex,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ox,depth_vert:ax,depth_frag:lx,distanceRGBA_vert:cx,distanceRGBA_frag:hx,equirect_vert:ux,equirect_frag:fx,linedashed_vert:dx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:xx,meshlambert_frag:_x,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:Mx,meshnormal_frag:bx,meshphong_vert:Sx,meshphong_frag:Ex,meshphysical_vert:Tx,meshphysical_frag:wx,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Ix,shadow_vert:Px,shadow_frag:Lx,sprite_vert:Dx,sprite_frag:Ux},ut={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},$n={basic:{uniforms:nn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:nn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:nn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:nn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:nn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:nn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:nn([ut.points,ut.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:nn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:nn([ut.common,ut.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:nn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:nn([ut.sprite,ut.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:nn([ut.common,ut.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:nn([ut.lights,ut.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};$n.physical={uniforms:nn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var na={r:0,b:0,g:0},us=new kn,Nx=new oe;function Fx(n,t,e,i,s,r,o){let a=new Mt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function _(T){let M=!1,x=g(T);x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){let x=g(M);x&&(x.isCubeTexture||x.mapping===ja)?(h===void 0&&(h=new me(new ki(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:ar($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),us.copy(M.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(us)),h.material.toneMapped=ie.getTransfer(x.colorSpace)!==ue,(u!==x||f!==x.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new me(new Pa(2,2),new Ae({name:"BackgroundMaterial",uniforms:ar($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(na,Sd(n)),i.buffers.color.setClear(na.r,na.g,na.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function Ox(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(y,P,z,B,G){let K=!1,W=u(B,z,P);r!==W&&(r=W,c(r.object)),K=d(y,B,z,G),K&&g(y,B,z,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(y,P,z,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,P,z){let B=z.wireframe===!0,G=i[y.id];G===void 0&&(G={},i[y.id]=G);let K=G[P.id];K===void 0&&(K={},G[P.id]=K);let W=K[B];return W===void 0&&(W=f(l()),K[B]=W),W}function f(y){let P=[],z=[],B=[];for(let G=0;G<e;G++)P[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,P,z,B){let G=r.attributes,K=P.attributes,W=0,st=z.getAttributes();for(let X in st)if(st[X].location>=0){let xt=G[X],Tt=K[X];if(Tt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),xt===void 0||xt.attribute!==Tt||Tt&&xt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(y,P,z,B){let G={},K=P.attributes,W=0,st=z.getAttributes();for(let X in st)if(st[X].location>=0){let xt=K[X];xt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor));let Tt={};Tt.attribute=xt,xt&&xt.data&&(Tt.data=xt.data),G[X]=Tt,W++}r.attributes=G,r.attributesNum=W,r.index=B}function _(){let y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let z=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;z[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),G[y]!==P&&(n.vertexAttribDivisor(y,P),G[y]=P)}function T(){let y=r.newAttributes,P=r.enabledAttributes;for(let z=0,B=P.length;z<B;z++)P[z]!==y[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function M(y,P,z,B,G,K,W){W===!0?n.vertexAttribIPointer(y,P,z,G,K):n.vertexAttribPointer(y,P,z,B,G,K)}function x(y,P,z,B){_();let G=B.attributes,K=z.getAttributes(),W=P.defaultAttributeValues;for(let st in K){let X=K[st];if(X.location>=0){let ht=G[st];if(ht===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let xt=ht.normalized,Tt=ht.itemSize,qt=t.get(ht);if(qt===void 0)continue;let le=qt.buffer,$=qt.type,ot=qt.bytesPerElement,Rt=$===n.INT||$===n.UNSIGNED_INT||ht.gpuType===Gh;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Nt=lt.stride,Gt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)p(X.location+kt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<X.locationSize;kt++)m(X.location+kt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let kt=0;kt<X.locationSize;kt++)M(X.location+kt,Tt/X.locationSize,$,xt,Nt*ot,(Gt+Tt/X.locationSize*kt)*ot,Rt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let lt=0;lt<X.locationSize;lt++)M(X.location+lt,Tt/X.locationSize,$,xt,Tt*ot,Tt/X.locationSize*lt*ot,Rt)}}else if(W!==void 0){let xt=W[st];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(X.location,xt);break;case 3:n.vertexAttrib3fv(X.location,xt);break;case 4:n.vertexAttrib4fv(X.location,xt);break;default:n.vertexAttrib1fv(X.location,xt)}}}}T()}function D(){L();for(let y in i){let P=i[y];for(let z in P){let B=P[z];for(let G in B)h(B[G].object),delete B[G];delete P[z]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;let P=i[y.id];for(let z in P){let B=P[z];for(let G in B)h(B[G].object),delete B[G];delete P[z]}delete i[y.id]}function I(y){for(let P in i){let z=i[P];if(z[y.id]===void 0)continue;let B=z[y.id];for(let G in B)h(B[G].object),delete B[G];delete z[y.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Bx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==zn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==xi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Kn&&!L)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:D,maxSamples:C}}function kx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new di,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:i,M=T*4,x=p.clippingState||null;l.value=x,x=h(g,f,M,d);for(let D=0;D!==M;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hx(n){let t=new WeakMap;function e(o,a){return a===Mc?o.mapping=ir:a===bc&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mc||a===bc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ih(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var lr=class extends Ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,Sf=[.125,.215,.35,.446,.526,.582],ms=20,ec=new lr,Ef=new Mt,nc=null,ic=0,sc=0,rc=!1,ds=(1+Math.sqrt(5))/2,Xs=1/ds,Tf=[new A(-ds,Xs,0),new A(ds,Xs,0),new A(-Xs,0,ds),new A(Xs,0,ds),new A(0,ds,-Xs),new A(0,ds,Xs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],La=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:xn,format:zn,colorSpace:mr,depthBuffer:!1},s=wf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Gx(r,t,e)}return s}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,ec)}_sceneToCubeUV(t,e,i,s){let a=new sn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ef),h.toneMapping=Ni,h.autoClear=!1;let d=new zi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new me(new ki,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Ef),_=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;ia(s,T*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ia(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ec)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tf[(s-r-1)%Tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ms-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let p=[],T=0;for(let I=0;I<ms;++I){let L=I/_,S=Math.exp(-L*L/2);p.push(S),I===0?T+=S:I<m&&(T+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let x=this._sizeLods[s],D=3*x*(s>M-Ks?s-M+Ks:0),C=4*(this._cubeSize-x);ia(e,D,C,3*x,2*x),l.setRenderTarget(e),l.render(u,ec)}};function Vx(n){let t=[],e=[],i=[],s=n,r=n-Ks+1+Sf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=Sf[o-n+Ks-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){let I=C%3*2/3-1,L=C>2?0:-1,S=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];T.set(S,_*g*C),M.set(f,m*g*C);let y=[C,C,C,C,C,C];x.set(y,p*g*C)}let D=new Le;D.setAttribute("position",new ve(T,_)),D.setAttribute("uv",new ve(M,m)),D.setAttribute("faceIndex",new ve(x,p)),t.push(D),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wf(n,t,e){let i=new We(n,t,e);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gx(n,t,e){let i=new Float32Array(ms),s=new A(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Af(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Rf(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function Wx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mc||l===bc,h=l===ir||l===sr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new La(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new La(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qx(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let T=d.array;_=d.version;for(let M=0,x=T.length;M<x;M+=3){let D=T[M+0],C=T[M+1],I=T[M+2];f.push(D,C,C,I,I,D)}}else if(g!==void 0){let T=g.array;_=g.version;for(let M=0,x=T.length/3-1;M<x;M+=3){let D=M+0,C=M+1,I=M+2;f.push(D,C,C,I,I,D)}}else return;let m=new(Md(f)?Ra:Aa)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Yx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $x(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let C=new Float32Array(x*D*4*u),I=new Ea(C,x,D,u);I.type=Kn,I.needsUpdate=!0;let L=M*4;for(let y=0;y<u;y++){let P=m[y],z=p[y],B=T[y],G=x*D*4*y;for(let K=0;K<P.count;K++){let W=K*L;d===!0&&(s.fromBufferAttribute(P,K),C[G+W+0]=s.x,C[G+W+1]=s.y,C[G+W+2]=s.z,C[G+W+3]=0),g===!0&&(s.fromBufferAttribute(z,K),C[G+W+4]=s.x,C[G+W+5]=s.y,C[G+W+6]=s.z,C[G+W+7]=0),_===!0&&(s.fromBufferAttribute(B,K),C[G+W+8]=s.x,C[G+W+9]=s.y,C[G+W+10]=s.z,C[G+W+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new et(x,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Jx(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Da=class extends ln{constructor(t,e,i,s,r,o,a,l,c,h=js){if(h!==js&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===js&&(i=_s),i===void 0&&h===or&&(i=rr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Td=new ln,Cf=new Da(1,1),wd=new Ea,Ad=new eh,Rd=new Ia,If=[],Pf=[],Lf=new Float32Array(16),Df=new Float32Array(9),Uf=new Float32Array(4);function gr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=If[s];if(r===void 0&&(r=new Float32Array(s),If[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function el(n,t){let e=Pf[t];e===void 0&&(e=new Int32Array(t),Pf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Kx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function e_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Uf.set(i),n.uniformMatrix2fv(this.addr,!1,Uf),ze(e,i)}}function n_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Df.set(i),n.uniformMatrix3fv(this.addr,!1,Df),ze(e,i)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Lf.set(i),n.uniformMatrix4fv(this.addr,!1,Lf),ze(e,i)}}function s_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function l_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function f_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cf.compareFunction=vd,r=Cf):r=Td,e.setTexture2D(t||r,s)}function d_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ad,s)}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rd,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wd,s)}function g_(n){switch(n){case 5126:return Kx;case 35664:return Qx;case 35665:return jx;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function x_(n,t){n.uniform1fv(this.addr,t)}function __(n,t){let e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function v_(n,t){let e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function y_(n,t){let e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function M_(n,t){let e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function b_(n,t){let e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function S_(n,t){let e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E_(n,t){n.uniform1iv(this.addr,t)}function T_(n,t){n.uniform2iv(this.addr,t)}function w_(n,t){n.uniform3iv(this.addr,t)}function A_(n,t){n.uniform4iv(this.addr,t)}function R_(n,t){n.uniform1uiv(this.addr,t)}function C_(n,t){n.uniform2uiv(this.addr,t)}function I_(n,t){n.uniform3uiv(this.addr,t)}function P_(n,t){n.uniform4uiv(this.addr,t)}function L_(n,t,e){let i=this.cache,s=t.length,r=el(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Td,r[o])}function D_(n,t,e){let i=this.cache,s=t.length,r=el(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ad,r[o])}function U_(n,t,e){let i=this.cache,s=t.length,r=el(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rd,r[o])}function N_(n,t,e){let i=this.cache,s=t.length,r=el(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wd,r[o])}function F_(n){switch(n){case 5126:return x_;case 35664:return __;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return b_;case 35676:return S_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return I_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}var sh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}},rh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}},oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},oc=/(\w+)(\])?(\[|\.)?/g;function Nf(n,t){n.seq.push(t),n.map[t.id]=t}function O_(n,t,e){let i=n.name,s=i.length;for(oc.lastIndex=0;;){let r=oc.exec(i),o=oc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nf(e,c===void 0?new sh(a,n,t):new rh(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new oh(a),Nf(e,u)),e=u}}}var er=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);O_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Ff(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var B_=37297,z_=0;function k_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Of=new Jt;function H_(n){ie._getMatrix(Of,ie.workingColorSpace,n);let t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case tl:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+k_(n.getShaderSource(t),o)}else return s}function V_(n,t){let e=H_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function G_(n,t){let e;switch(t){case Bh:e="Linear";break;case zh:e="Reinhard";break;case kh:e="Cineon";break;case xo:e="ACESFilmic";break;case Hh:e="AgX";break;case Vh:e="Neutral";break;case om:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sa=new A;function W_(){ie.getLuminanceCoefficients(sa);let n=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function q_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Yr(n){return n!==""}function zf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(n){return n.replace(Z_,J_)}var $_=new Map;function J_(n,t){let e=Qt[t];if(e===void 0){let i=$_.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}var K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(n){return n.replace(K_,Q_)}function Q_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function j_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===od?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function tv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ev(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===sr&&(t="ENVMAP_MODE_REFRACTION"),t}function nv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ad:t="ENVMAP_BLENDING_MULTIPLY";break;case sm:t="ENVMAP_BLENDING_MIX";break;case rm:t="ENVMAP_BLENDING_ADD";break}return t}function iv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function sv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=j_(e),c=tv(e),h=ev(e),u=nv(e),f=iv(e),d=X_(e),g=q_(r),_=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=ah(o),o=zf(o,e),o=kf(o,e),a=ah(a),a=zf(a,e),a=kf(a,e),o=Hf(o),a=Hf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=T+m+o,x=T+p+a,D=Ff(s,s.VERTEX_SHADER,M),C=Ff(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(P){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(C).trim(),K=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,C);else{let st=Bf(s,D,"vertex"),X=Bf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+st+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(D),s.deleteShader(C),L=new er(s,_),S=Y_(s,_)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,B_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}var rv=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ch(t),e.set(t,i)),i}},ch=class{constructor(t){this.id=rv++,this.code=t,this.usedTimes=0}};function ov(n,t,e,i,s,r,o){let a=new wa,l=new lh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,z,B){let G=z.fog,K=B.geometry,W=S.isMeshStandardMaterial?z.environment:null,st=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),X=st&&st.mapping===ja?st.image.height:null,ht=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=xt!==void 0?xt.length:0,qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let le,$,ot,Rt;if(ht){let de=$n[ht];le=de.vertexShader,$=de.fragmentShader}else le=S.vertexShader,$=S.fragmentShader,l.update(S),ot=l.getVertexShaderID(S),Rt=l.getFragmentShaderID(S);let lt=n.getRenderTarget(),Nt=n.state.buffers.depth.getReversed(),Gt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,re=!!S.map,j=!!S.matcap,rt=!!st,R=!!S.aoMap,Dt=!!S.lightMap,nt=!!S.bumpMap,bt=!!S.normalMap,ct=!!S.displacementMap,Bt=!!S.emissiveMap,vt=!!S.metalnessMap,w=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,Y=S.dispersion>0,tt=S.iridescence>0,Z=S.sheen>0,Ct=S.transmission>0,ft=v&&!!S.anisotropyMap,yt=O&&!!S.clearcoatMap,ee=O&&!!S.clearcoatNormalMap,it=O&&!!S.clearcoatRoughnessMap,St=tt&&!!S.iridescenceMap,zt=tt&&!!S.iridescenceThicknessMap,Ht=Z&&!!S.sheenColorMap,Et=Z&&!!S.sheenRoughnessMap,se=!!S.specularMap,Kt=!!S.specularColorMap,xe=!!S.specularIntensityMap,U=Ct&&!!S.transmissionMap,dt=Ct&&!!S.thicknessMap,q=!!S.gradientMap,Q=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Zt=!!S.extensions,Ie=Ni;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let Je={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:$,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:Rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&B.instanceColor!==null,instancingMorph:Gt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:mr,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:j,envMap:rt,envMapMode:rt&&st.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:Dt,bumpMap:nt,normalMap:bt,displacementMap:f&&ct,emissiveMap:Bt,normalMapObjectSpace:bt&&S.normalMapType===hm,normalMapTangentSpace:bt&&S.normalMapType===_d,metalnessMap:vt,roughnessMap:w,anisotropy:v,anisotropyMap:ft,clearcoat:O,clearcoatMap:yt,clearcoatNormalMap:ee,clearcoatRoughnessMap:it,dispersion:Y,iridescence:tt,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:se,specularColorMap:Kt,specularIntensityMap:xe,transmission:Ct,transmissionMap:U,thicknessMap:dt,gradientMap:q,opaque:S.transparent===!1&&S.blending===mi&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:re&&_(S.map.channel),aoMapUv:R&&_(S.aoMap.channel),lightMapUv:Dt&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:bt&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:Bt&&_(S.emissiveMap.channel),metalnessMapUv:vt&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:ft&&_(S.anisotropyMap.channel),clearcoatMapUv:yt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(S.sheenRoughnessMap.channel),specularMapUv:se&&_(S.specularMap.channel),specularColorMapUv:Kt&&_(S.specularColorMap.channel),specularIntensityMapUv:xe&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:dt&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(bt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(re||Q),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===On,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=g[S.type],P;if(y){let z=$n[y];P=Vi.clone(z.uniforms)}else P=S.uniforms;return P}function D(S,y){let P;for(let z=0,B=h.length;z<B;z++){let G=h[z];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new sv(n,y,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:L}}function av(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Gf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||lv),i.length>1&&i.sort(f||Gf),s.length>1&&s.sort(f||Gf)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Wf,n.set(i,[o])):s>=r.length?(o=new Wf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Mt};break;case"SpotLight":e={position:new A,direction:new A,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function uv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fv=0;function dv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pv(n){let t=new hv,e=uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new oe,o=new oe;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,M=0,x=0,D=0,C=0,I=0;c.sort(dv);for(let S=0,y=c.length;S<y;S++){let P=c[S],z=P.color,B=P.intensity,G=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*B,u+=z.g*B,f+=z.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],B);I++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,X=e.get(P);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=P.shadow.matrix,T++}i.directional[d]=W,d++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;let st=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,st.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[_]=st.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=K,x++}_++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let st=P.shadow,X=e.get(P);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=W,g++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=I,i.version=fv++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let M=c[p];if(M.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Xf(n){let t=new pv(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xf(n),t.set(s,[a])):r>=o.length?(a=new Xf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var hh=class extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uh=class extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`;function _v(n,t,e){let i=new no,s=new et,r=new et,o=new Pe,a=new hh({depthPacking:cm}),l=new uh,c={},h=e.maxTextureSize,u={[Fi]:je,[je]:Fi,[On]:On},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let p=this.type;this.render=function(C,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Qn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=p!==fi&&this.type===fi,G=p===fi&&this.type!==fi;for(let K=0,W=C.length;K<W;K++){let st=C[K],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||B===!0||G===!0){let Tt=this.type!==fi?{minFilter:tn,magFilter:tn}:{};X.map!==null&&X.map.dispose(),X.map=new We(s.x,s.y,Tt),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let xt=X.getViewportCount();for(let Tt=0;Tt<xt;Tt++){let qt=X.getViewport(Tt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),z.viewport(o),X.updateMatrices(st,Tt),i=X.getFrustum(),x(I,L,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===fi&&T(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,P)};function T(C,I){let L=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new We(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,L,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,L,d,_,null)}function M(C,I,L,S){let y=null,P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let z=y.uuid,B=I.uuid,G=c[z];G===void 0&&(G={},c[z]=G);let K=G[B];K===void 0&&(K=y.clone(),G[B]=K,I.addEventListener("dispose",D)),y=K}if(y.visible=I.visible,y.wireframe=I.wireframe,S===fi?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:u[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=n.properties.get(y);z.light=L}return y}function x(C,I,L,S,y){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let B=t.update(C),G=C.material;if(Array.isArray(G)){let K=B.groups;for(let W=0,st=K.length;W<st;W++){let X=K[W],ht=G[X.materialIndex];if(ht&&ht.visible){let xt=M(C,ht,S,y);C.onBeforeShadow(n,C,I,L,B,xt,X),n.renderBufferDirect(L,null,B,xt,C,X),C.onAfterShadow(n,C,I,L,B,xt,X)}}}else if(G.visible){let K=M(C,G,S,y);C.onBeforeShadow(n,C,I,L,B,K,null),n.renderBufferDirect(L,null,B,K,C,null),C.onAfterShadow(n,C,I,L,B,K,null)}}let z=C.children;for(let B=0,G=z.length;B<G;B++)x(z[B],I,L,S,y)}function D(C){C.target.removeEventListener("dispose",D);for(let L in c){let S=c[L],y=C.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var vv={[pc]:mc,[gc]:vc,[xc]:yc,[nr]:_c,[mc]:pc,[vc]:gc,[yc]:xc,[_c]:nr};function yv(n,t){function e(){let U=!1,dt=new Pe,q=null,Q=new Pe(0,0,0,0);return{setMask:function(gt){q!==gt&&!U&&(n.colorMask(gt,gt,gt,gt),q=gt)},setLocked:function(gt){U=gt},setClear:function(gt,pt,Zt,Ie,Je){Je===!0&&(gt*=Ie,pt*=Ie,Zt*=Ie),dt.set(gt,pt,Zt,Ie),Q.equals(dt)===!1&&(n.clearColor(gt,pt,Zt,Ie),Q.copy(dt))},reset:function(){U=!1,q=null,Q.set(-1,0,0,0)}}}function i(){let U=!1,dt=!1,q=null,Q=null,gt=null;return{setReversed:function(pt){if(dt!==pt){let Zt=t.get("EXT_clip_control");dt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Ie=gt;gt=null,this.setClear(Ie)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?lt(n.DEPTH_TEST):Nt(n.DEPTH_TEST)},setMask:function(pt){q!==pt&&!U&&(n.depthMask(pt),q=pt)},setFunc:function(pt){if(dt&&(pt=vv[pt]),Q!==pt){switch(pt){case pc:n.depthFunc(n.NEVER);break;case mc:n.depthFunc(n.ALWAYS);break;case gc:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case xc:n.depthFunc(n.EQUAL);break;case _c:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=pt}},setLocked:function(pt){U=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){U=!1,q=null,Q=null,gt=null,dt=!1}}}function s(){let U=!1,dt=null,q=null,Q=null,gt=null,pt=null,Zt=null,Ie=null,Je=null;return{setTest:function(de){U||(de?lt(n.STENCIL_TEST):Nt(n.STENCIL_TEST))},setMask:function(de){dt!==de&&!U&&(n.stencilMask(de),dt=de)},setFunc:function(de,Ln,ri){(q!==de||Q!==Ln||gt!==ri)&&(n.stencilFunc(de,Ln,ri),q=de,Q=Ln,gt=ri)},setOp:function(de,Ln,ri){(pt!==de||Zt!==Ln||Ie!==ri)&&(n.stencilOp(de,Ln,ri),pt=de,Zt=Ln,Ie=ri)},setLocked:function(de){U=de},setClear:function(de){Je!==de&&(n.clearStencil(de),Je=de)},reset:function(){U=!1,dt=null,q=null,Q=null,gt=null,pt=null,Zt=null,Ie=null,Je=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,x=null,D=null,C=null,I=new Mt(0,0,0),L=0,S=!1,y=null,P=null,z=null,B=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=st>=2);let ht=null,xt={},Tt=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),le=new Pe().fromArray(Tt),$=new Pe().fromArray(qt);function ot(U,dt,q,Q){let gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(U,pt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<q;Zt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(dt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}let Rt={};Rt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),Rt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Rt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(nr),nt(!1),bt(Yu),lt(n.CULL_FACE),R(Qn);function lt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Nt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Gt(U,dt){return u[U]!==dt?(n.bindFramebuffer(U,dt),u[U]=dt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function kt(U,dt){let q=d,Q=!1;if(U){q=f.get(dt),q===void 0&&(q=[],f.set(dt,q));let gt=U.textures;if(q.length!==gt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Zt=gt.length;pt<Zt;pt++)q[pt]=n.COLOR_ATTACHMENT0+pt;q.length=gt.length,Q=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Q=!0);Q&&n.drawBuffers(q)}function re(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let j={[ps]:n.FUNC_ADD,[Hp]:n.FUNC_SUBTRACT,[Vp]:n.FUNC_REVERSE_SUBTRACT};j[Gp]=n.MIN,j[Wp]=n.MAX;let rt={[Xp]:n.ZERO,[qp]:n.ONE,[Yp]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[jp]:n.SRC_ALPHA_SATURATE,[Kp]:n.DST_COLOR,[$p]:n.DST_ALPHA,[Zp]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[Qp]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[tm]:n.CONSTANT_COLOR,[em]:n.ONE_MINUS_CONSTANT_COLOR,[nm]:n.CONSTANT_ALPHA,[im]:n.ONE_MINUS_CONSTANT_ALPHA};function R(U,dt,q,Q,gt,pt,Zt,Ie,Je,de){if(U===Qn){_===!0&&(Nt(n.BLEND),_=!1);return}if(_===!1&&(lt(n.BLEND),_=!0),U!==kp){if(U!==m||de!==S){if((p!==ps||x!==ps)&&(n.blendEquation(n.FUNC_ADD),p=ps,x=ps),de)switch(U){case mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ti:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $u:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ti:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $u:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,M=null,D=null,C=null,I.set(0,0,0),L=0,m=U,S=de}return}gt=gt||dt,pt=pt||q,Zt=Zt||Q,(dt!==p||gt!==x)&&(n.blendEquationSeparate(j[dt],j[gt]),p=dt,x=gt),(q!==T||Q!==M||pt!==D||Zt!==C)&&(n.blendFuncSeparate(rt[q],rt[Q],rt[pt],rt[Zt]),T=q,M=Q,D=pt,C=Zt),(Ie.equals(I)===!1||Je!==L)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Je),I.copy(Ie),L=Je),m=U,S=!1}function Dt(U,dt){U.side===On?Nt(n.CULL_FACE):lt(n.CULL_FACE);let q=U.side===je;dt&&(q=!q),nt(q),U.blending===mi&&U.transparent===!1?R(Qn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function bt(U){U!==Bp?(lt(n.CULL_FACE),U!==P&&(U===Yu?n.cullFace(n.BACK):U===zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Nt(n.CULL_FACE),P=U}function ct(U){U!==z&&(W&&n.lineWidth(U),z=U)}function Bt(U,dt,q){U?(lt(n.POLYGON_OFFSET_FILL),(B!==dt||G!==q)&&(n.polygonOffset(dt,q),B=dt,G=q)):Nt(n.POLYGON_OFFSET_FILL)}function vt(U){U?lt(n.SCISSOR_TEST):Nt(n.SCISSOR_TEST)}function w(U){U===void 0&&(U=n.TEXTURE0+K-1),ht!==U&&(n.activeTexture(U),ht=U)}function v(U,dt,q){q===void 0&&(ht===null?q=n.TEXTURE0+K-1:q=ht);let Q=xt[q];Q===void 0&&(Q={type:void 0,texture:void 0},xt[q]=Q),(Q.type!==U||Q.texture!==dt)&&(ht!==q&&(n.activeTexture(q),ht=q),n.bindTexture(U,dt||Rt[U]),Q.type=U,Q.texture=dt)}function O(){let U=xt[ht];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(U){le.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function Et(U){$.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function se(U,dt){let q=c.get(dt);q===void 0&&(q=new WeakMap,c.set(dt,q));let Q=q.get(U);Q===void 0&&(Q=n.getUniformBlockIndex(dt,U.name),q.set(U,Q))}function Kt(U,dt){let Q=c.get(dt).get(U);l.get(dt)!==Q&&(n.uniformBlockBinding(dt,Q,U.__bindingPointIndex),l.set(dt,Q))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,xt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,x=null,D=null,C=null,I=new Mt(0,0,0),L=0,S=!1,y=null,P=null,z=null,B=null,G=null,le.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Nt,bindFramebuffer:Gt,drawBuffers:kt,useProgram:re,setBlending:R,setMaterial:Dt,setFlipSided:nt,setCullFace:bt,setLineWidth:ct,setPolygonOffset:Bt,setScissorTest:vt,activeTexture:w,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:tt,texImage2D:St,texImage3D:zt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:ee,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Ht,viewport:Et,reset:xe}}function qf(n,t,e,i){let s=Mv(i);switch(e){case fd:return n*t;case pd:return n*t;case md:return n*t*2;case _o:return n*t/s.components*s.byteLength;case qh:return n*t/s.components*s.byteLength;case gd:return n*t*2/s.components*s.byteLength;case Yh:return n*t*2/s.components*s.byteLength;case dd:return n*t*3/s.components*s.byteLength;case zn:return n*t*4/s.components*s.byteLength;case Zh:return n*t*4/s.components*s.byteLength;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:case Rc:return Math.max(n,16)*Math.max(t,8)/4;case Tc:case Ac:return Math.max(n,8)*Math.max(t,8)/2;case Cc:case Ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case va:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xd:case Zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $c:case Jc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mv(n){switch(n){case xi:case cd:return{byteLength:1,components:1};case to:case hd:case xn:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case _s:case Gh:case Kn:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return d?new OffscreenCanvas(w,v):ba("canvas")}function _(w,v,O){let Y=1,tt=vt(w);if((tt.width>O||tt.height>O)&&(Y=O/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor(Y*tt.width),Ct=Math.floor(Y*tt.height);u===void 0&&(u=g(Z,Ct));let ft=v?g(Z,Ct):u;return ft.width=Z,ft.height=Ct,ft.getContext("2d").drawImage(w,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Ct+")."),ft}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,v,O,Y,tt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=v;if(v===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),v===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){let Ct=tt?tl:ie.getTransfer(Y);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=Ct===ue?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(w,v){let O;return w?v===null||v===_s||v===rr?O=n.DEPTH24_STENCIL8:v===Kn?O=n.DEPTH32F_STENCIL8:v===to&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_s||v===rr?O=n.DEPTH_COMPONENT24:v===Kn?O=n.DEPTH_COMPONENT32F:v===to&&(O=n.DEPTH_COMPONENT16),O}function D(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==Jn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){let v=w.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&h.delete(v)}function I(w){let v=w.target;v.removeEventListener("dispose",I),y(v)}function L(w){let v=i.get(w);if(v.__webglInit===void 0)return;let O=w.source,Y=f.get(O);if(Y){let tt=Y[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(w),Object.keys(Y).length===0&&f.delete(O)}i.remove(w)}function S(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let O=w.source,Y=f.get(O);delete Y[v.__cacheKey],o.memory.textures--}function y(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let tt=0;tt<v.__webglFramebuffer[Y].length;tt++)n.deleteFramebuffer(v.__webglFramebuffer[Y][tt]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=w.textures;for(let Y=0,tt=O.length;Y<tt;Y++){let Z=i.get(O[Y]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(w)}let P=0;function z(){P=0}function B(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function G(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function K(w,v){let O=i.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,w,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function W(w,v){let O=i.get(w);if(w.version>0&&O.__version!==w.version){$(O,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function st(w,v){let O=i.get(w);if(w.version>0&&O.__version!==w.version){$(O,w,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function X(w,v){let O=i.get(w);if(w.version>0&&O.__version!==w.version){ot(O,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let ht={[Sc]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},xt={[tn]:n.NEAREST,[am]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[Dl]:n.LINEAR_MIPMAP_NEAREST,[xs]:n.LINEAR_MIPMAP_LINEAR},Tt={[um]:n.NEVER,[xm]:n.ALWAYS,[fm]:n.LESS,[vd]:n.LEQUAL,[dm]:n.EQUAL,[gm]:n.GEQUAL,[pm]:n.GREATER,[mm]:n.NOTEQUAL};function qt(w,v){if(v.type===Kn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Jn||v.magFilter===Dl||v.magFilter===Bo||v.magFilter===xs||v.minFilter===Jn||v.minFilter===Dl||v.minFilter===Bo||v.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ht[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ht[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ht[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,xt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==Bo&&v.minFilter!==xs||v.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function le(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));let Y=v.source,tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));let Z=G(v);if(Z!==w.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[Z].usedTimes++;let Ct=tt[w.__cacheKey];Ct!==void 0&&(tt[w.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(v)),w.__cacheKey=Z,w.__webglTexture=tt[Z].texture}return O}function $(w,v,O){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);let tt=le(w,v),Z=v.source;e.bindTexture(Y,w.__webglTexture,n.TEXTURE0+O);let Ct=i.get(Z);if(Z.version!==Ct.__version||tt===!0){e.activeTexture(n.TEXTURE0+O);let ft=ie.getPrimaries(ie.workingColorSpace),yt=v.colorSpace===Di?null:ie.getPrimaries(v.colorSpace),ee=v.colorSpace===Di||ft===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=_(v.image,!1,s.maxTextureSize);it=Bt(v,it);let St=r.convert(v.format,v.colorSpace),zt=r.convert(v.type),Ht=M(v.internalFormat,St,zt,v.colorSpace,v.isVideoTexture);qt(Y,v);let Et,se=v.mipmaps,Kt=v.isVideoTexture!==!0,xe=Ct.__version===void 0||tt===!0,U=Z.dataReady,dt=D(v,it);if(v.isDepthTexture)Ht=x(v.format===or,v.type),xe&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Ht,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Ht,it.width,it.height,0,St,zt,null));else if(v.isDataTexture)if(se.length>0){Kt&&xe&&e.texStorage2D(n.TEXTURE_2D,dt,Ht,se[0].width,se[0].height);for(let q=0,Q=se.length;q<Q;q++)Et=se[q],Kt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Et.width,Et.height,St,zt,Et.data):e.texImage2D(n.TEXTURE_2D,q,Ht,Et.width,Et.height,0,St,zt,Et.data);v.generateMipmaps=!1}else Kt?(xe&&e.texStorage2D(n.TEXTURE_2D,dt,Ht,it.width,it.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,St,zt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,it.width,it.height,0,St,zt,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Kt&&xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ht,se[0].width,se[0].height,it.depth);for(let q=0,Q=se.length;q<Q;q++)if(Et=se[q],v.format!==zn)if(St!==null)if(Kt){if(U)if(v.layerUpdates.size>0){let gt=qf(Et.width,Et.height,v.format,v.type);for(let pt of v.layerUpdates){let Zt=Et.data.subarray(pt*gt/Et.data.BYTES_PER_ELEMENT,(pt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,pt,Et.width,Et.height,1,St,Zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,it.depth,St,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ht,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,it.depth,St,zt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Ht,Et.width,Et.height,it.depth,0,St,zt,Et.data)}else{Kt&&xe&&e.texStorage2D(n.TEXTURE_2D,dt,Ht,se[0].width,se[0].height);for(let q=0,Q=se.length;q<Q;q++)Et=se[q],v.format!==zn?St!==null?Kt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Et.width,Et.height,St,zt,Et.data):e.texImage2D(n.TEXTURE_2D,q,Ht,Et.width,Et.height,0,St,zt,Et.data)}else if(v.isDataArrayTexture)if(Kt){if(xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ht,it.width,it.height,it.depth),U)if(v.layerUpdates.size>0){let q=qf(it.width,it.height,v.format,v.type);for(let Q of v.layerUpdates){let gt=it.data.subarray(Q*q/it.data.BYTES_PER_ELEMENT,(Q+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,St,zt,gt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,zt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,it.width,it.height,it.depth,0,St,zt,it.data);else if(v.isData3DTexture)Kt?(xe&&e.texStorage3D(n.TEXTURE_3D,dt,Ht,it.width,it.height,it.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,zt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,it.width,it.height,it.depth,0,St,zt,it.data);else if(v.isFramebufferTexture){if(xe)if(Kt)e.texStorage2D(n.TEXTURE_2D,dt,Ht,it.width,it.height);else{let q=it.width,Q=it.height;for(let gt=0;gt<dt;gt++)e.texImage2D(n.TEXTURE_2D,gt,Ht,q,Q,0,St,zt,null),q>>=1,Q>>=1}}else if(se.length>0){if(Kt&&xe){let q=vt(se[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ht,q.width,q.height)}for(let q=0,Q=se.length;q<Q;q++)Et=se[q],Kt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,St,zt,Et):e.texImage2D(n.TEXTURE_2D,q,Ht,St,zt,Et);v.generateMipmaps=!1}else if(Kt){if(xe){let q=vt(it);e.texStorage2D(n.TEXTURE_2D,dt,Ht,q.width,q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,zt,it)}else e.texImage2D(n.TEXTURE_2D,0,Ht,St,zt,it);m(v)&&p(Y),Ct.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ot(w,v,O){if(v.image.length!==6)return;let Y=le(w,v),tt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let Z=i.get(tt);if(tt.version!==Z.__version||Y===!0){e.activeTexture(n.TEXTURE0+O);let Ct=ie.getPrimaries(ie.workingColorSpace),ft=v.colorSpace===Di?null:ie.getPrimaries(v.colorSpace),yt=v.colorSpace===Di||Ct===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ee=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!ee&&!it?St[Q]=_(v.image[Q],!0,s.maxCubemapSize):St[Q]=it?v.image[Q].image:v.image[Q],St[Q]=Bt(v,St[Q]);let zt=St[0],Ht=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),se=M(v.internalFormat,Ht,Et,v.colorSpace),Kt=v.isVideoTexture!==!0,xe=Z.__version===void 0||Y===!0,U=tt.dataReady,dt=D(v,zt);qt(n.TEXTURE_CUBE_MAP,v);let q;if(ee){Kt&&xe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,se,zt.width,zt.height);for(let Q=0;Q<6;Q++){q=St[Q].mipmaps;for(let gt=0;gt<q.length;gt++){let pt=q[gt];v.format!==zn?Ht!==null?Kt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,pt.width,pt.height,Ht,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,se,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,pt.width,pt.height,Ht,Et,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,se,pt.width,pt.height,0,Ht,Et,pt.data)}}}else{if(q=v.mipmaps,Kt&&xe){q.length>0&&dt++;let Q=vt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,se,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Ht,Et,St[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,se,St[Q].width,St[Q].height,0,Ht,Et,St[Q].data);for(let gt=0;gt<q.length;gt++){let Zt=q[gt].image[Q].image;Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Zt.width,Zt.height,Ht,Et,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,se,Zt.width,Zt.height,0,Ht,Et,Zt.data)}}else{Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ht,Et,St[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,se,Ht,Et,St[Q]);for(let gt=0;gt<q.length;gt++){let pt=q[gt];Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Ht,Et,pt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,se,Ht,Et,pt.image[Q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Z.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Rt(w,v,O,Y,tt,Z){let Ct=r.convert(O.format,O.colorSpace),ft=r.convert(O.type),yt=M(O.internalFormat,Ct,ft,O.colorSpace),ee=i.get(v),it=i.get(O);if(it.__renderTarget=v,!ee.__hasExternalTextures){let St=Math.max(1,v.width>>Z),zt=Math.max(1,v.height>>Z);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,yt,St,zt,v.depth,0,Ct,ft,null):e.texImage2D(tt,Z,yt,St,zt,0,Ct,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),bt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,tt,it.__webglTexture,0,nt(v)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,tt,it.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let Y=v.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,Z=x(v.stencilBuffer,tt),Ct=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=nt(v);bt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Z,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,w)}else{let Y=v.textures;for(let tt=0;tt<Y.length;tt++){let Z=Y[tt],Ct=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),yt=M(Z.internalFormat,Ct,ft,Z.colorSpace),ee=nt(v);O&&bt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,yt,v.width,v.height):bt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,yt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,yt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let tt=Y.__webglTexture,Z=nt(v);if(v.depthTexture.format===js)bt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(v.depthTexture.format===or)bt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Gt(w){let v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=Y}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Nt(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),lt(v.__webglDepthbuffer[Y],w,!1);else{let tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),lt(v.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,v,O){let Y=i.get(w);v!==void 0&&Rt(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Gt(w)}function re(w){let v=w.texture,O=i.get(w),Y=i.get(v);w.addEventListener("dispose",I);let tt=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ft]=[];for(let yt=0;yt<v.mipmaps.length;yt++)O.__webglFramebuffer[ft][yt]=n.createFramebuffer()}else O.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)O.__webglFramebuffer[ft]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let ft=0,yt=tt.length;ft<yt;ft++){let ee=i.get(tt[ft]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&bt(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){let yt=tt[ft];O.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ft]);let ee=r.convert(yt.format,yt.colorSpace),it=r.convert(yt.type),St=M(yt.internalFormat,ee,it,yt.colorSpace,w.isXRRenderTarget===!0),zt=nt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,St,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,O.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(n.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)Rt(O.__webglFramebuffer[ft][yt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else Rt(O.__webglFramebuffer[ft],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,yt=tt.length;ft<yt;ft++){let ee=tt[ft],it=i.get(ee);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),qt(n.TEXTURE_2D,ee),Rt(O.__webglFramebuffer,w,ee,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),m(ee)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),qt(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)Rt(O.__webglFramebuffer[yt],w,v,n.COLOR_ATTACHMENT0,ft,yt);else Rt(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ft,0);m(v)&&p(ft),e.unbindTexture()}w.depthBuffer&&Gt(w)}function j(w){let v=w.textures;for(let O=0,Y=v.length;O<Y;O++){let tt=v[O];if(m(tt)){let Z=T(w),Ct=i.get(tt).__webglTexture;e.bindTexture(Z,Ct),p(Z),e.unbindTexture()}}}let rt=[],R=[];function Dt(w){if(w.samples>0){if(bt(w)===!1){let v=w.textures,O=w.width,Y=w.height,tt=n.COLOR_BUFFER_BIT,Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(w),ft=v.length>1;if(ft)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);let ee=i.get(v[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,tt,n.NEAREST),l===!0&&(rt.length=0,R.length=0,rt.push(n.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(Z),R.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);let ee=i.get(v[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function nt(w){return Math.min(s.maxSamples,w.samples)}function bt(w){let v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Bt(w,v){let O=w.colorSpace,Y=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==mr&&O!==Di&&(ie.getTransfer(O)===ue?(Y!==zn||tt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function vt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=bt}function Sv(n,t){function e(i,s=Di){let r,o=ie.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cd)return n.BYTE;if(i===hd)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===Gh)return n.INT;if(i===_s)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===fd)return n.ALPHA;if(i===dd)return n.RGB;if(i===zn)return n.RGBA;if(i===pd)return n.LUMINANCE;if(i===md)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===_o)return n.RED;if(i===qh)return n.RED_INTEGER;if(i===gd)return n.RG;if(i===Yh)return n.RG_INTEGER;if(i===Zh)return n.RGBA_INTEGER;if(i===ma||i===ga||i===xa||i===_a)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===wc||i===Ac||i===Rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Ic||i===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cc||i===Ic)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===qc||i===Yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===va)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xd||i===Zc||i===$c||i===Jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var fh=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ev={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ae({vertexShader:Tv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ph=class extends Oi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new dh,m=e.getContextAttributes(),p=null,T=null,M=[],x=[],D=new et,C=null,I=new sn;I.viewport=new Pe;let L=new sn;L.viewport=new Pe;let S=[I,L],y=new fh,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=M[$];return ot===void 0&&(ot=new Jr,M[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=M[$];return ot===void 0&&(ot=new Jr,M[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=M[$];return ot===void 0&&(ot=new Jr,M[$]=ot),ot.getHandSpace()};function B($){let ot=x.indexOf($.inputSource);if(ot===-1)return;let Rt=M[ot];Rt!==void 0&&(Rt.update($.inputSource,$.frame,c||o),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let $=0;$<M.length;$++){let ot=x[$];ot!==null&&(x[$]=null,M[$].disconnect(ot))}P=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,T=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new We(d.framebufferWidth,d.framebufferHeight,{format:zn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Rt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?or:js,Rt=m.stencil?rr:_s);let Nt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new We(f.textureWidth,f.textureHeight,{format:zn,type:xi,depthTexture:new Da(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K($){for(let ot=0;ot<$.removed.length;ot++){let Rt=$.removed[ot],lt=x.indexOf(Rt);lt>=0&&(x[lt]=null,M[lt].disconnect(Rt))}for(let ot=0;ot<$.added.length;ot++){let Rt=$.added[ot],lt=x.indexOf(Rt);if(lt===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=x.length){x.push(Rt),lt=Gt;break}else if(x[Gt]===null){x[Gt]=Rt,lt=Gt;break}if(lt===-1)break}let Nt=M[lt];Nt&&Nt.connect(Rt)}}let W=new A,st=new A;function X($,ot,Rt){W.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(Rt.matrixWorld);let lt=W.distanceTo(st),Nt=ot.projectionMatrix.elements,Gt=Rt.projectionMatrix.elements,kt=Nt[14]/(Nt[10]-1),re=Nt[14]/(Nt[10]+1),j=(Nt[9]+1)/Nt[5],rt=(Nt[9]-1)/Nt[5],R=(Nt[8]-1)/Nt[0],Dt=(Gt[8]+1)/Gt[0],nt=kt*R,bt=kt*Dt,ct=lt/(-R+Dt),Bt=ct*-R;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Nt[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let vt=kt+ct,w=re+ct,v=nt-Bt,O=bt+(lt-Bt),Y=j*re/w*vt,tt=rt*re/w*vt;$.projectionMatrix.makePerspective(v,O,Y,tt,vt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ot=$.near,Rt=$.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Rt=_.depthFar)),y.near=L.near=I.near=ot,y.far=L.far=I.far=Rt,(P!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),I.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,y.layers.mask=I.layers.mask|L.layers.mask;let lt=$.parent,Nt=y.cameras;ht(y,lt);for(let Gt=0;Gt<Nt.length;Gt++)ht(Nt[Gt],lt);Nt.length===2?X(y,I,L):y.projectionMatrix.copy(I.projectionMatrix),xt($,y,lt)};function xt($,ot,Rt){Rt===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=eo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Tt=null;function qt($,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let lt=!1;Rt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Gt=0;Gt<Rt.length;Gt++){let kt=Rt[Gt],re=null;if(d!==null)re=d.getViewport(kt);else{let rt=u.getViewSubImage(f,kt);re=rt.viewport,Gt===0&&(t.setRenderTargetTextures(T,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(T))}let j=S[Gt];j===void 0&&(j=new sn,j.layers.enable(Gt),j.viewport=new Pe,S[Gt]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(re.x,re.y,re.width,re.height),Gt===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(j)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Gt=u.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let Rt=0;Rt<M.length;Rt++){let lt=x[Rt],Nt=M[Rt];lt!==null&&Nt!==void 0&&Nt.update(lt,ot,c||o)}Tt&&Tt($,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}let le=new Ed;le.setAnimationLoop(qt),this.setAnimationLoop=function($){Tt=$},this.dispose=function(){}}},fs=new kn,Av=new oe;function Rv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Sd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),M=T.envMap,x=T.envMapRotation;M&&(m.envMap.value=M,fs.copy(x),fs.x*=-1,fs.y*=-1,fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(fs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){let x=M.program;i.uniformBlockBinding(T,x)}function c(T,M){let x=s[T.id];x===void 0&&(g(T),x=h(T),s[T.id]=x,T.addEventListener("dispose",m));let D=M.program;i.updateUBOMapping(T,D);let C=t.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function h(T){let M=u();T.__bindingPointIndex=M;let x=n.createBuffer(),D=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let M=s[T.id],x=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,I=x.length;C<I;C++){let L=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,y=L.length;S<y;S++){let P=L[S];if(d(P,C,S,D)===!0){let z=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],G=0;for(let K=0;K<B.length;K++){let W=B[K],st=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,M,x,D){let C=T.value,I=M+"_"+x;if(D[I]===void 0)return typeof C=="number"||typeof C=="boolean"?D[I]=C:D[I]=C.clone(),!0;{let L=D[I];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return D[I]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(T){let M=T.uniforms,x=0,D=16;for(let I=0,L=M.length;I<L;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let y=0,P=S.length;y<P;y++){let z=S[y],B=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=B.length;G<K;G++){let W=B[G],st=_(W),X=x%D,ht=X%st.boundary,xt=X+ht;x+=ht,xt!==0&&D-xt<st.storage&&(x+=D-xt),z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=st.storage}}}let C=x%D;return C>0&&(x+=D-C),T.__size=x,T.__cache={},this}function _(T){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){let M=T.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ua=class{constructor(t={}){let{canvas:e=Um(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,T=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Ni,this.toneMappingExposure=1;let x=this,D=!1,C=0,I=0,L=null,S=-1,y=null,P=new Pe,z=new Pe,B=null,G=new Mt(0),K=0,W=e.width,st=e.height,X=1,ht=null,xt=null,Tt=new Pe(0,0,W,st),qt=new Pe(0,0,W,st),le=!1,$=new no,ot=!1,Rt=!1,lt=new oe,Nt=new oe,Gt=new A,kt=new Pe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function rt(){return L===null?X:1}let R=i;function Dt(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),R===null){let N="webgl2";if(R=Dt(N,b),R===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,bt,ct,Bt,vt,w,v,O,Y,tt,Z,Ct,ft,yt,ee,it,St,zt,Ht,Et,se,Kt,xe,U;function dt(){nt=new Xx(R),nt.init(),Kt=new Sv(R,nt),bt=new zx(R,nt,t,Kt),ct=new yv(R,nt),bt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Bt=new Zx(R),vt=new av,w=new bv(R,nt,ct,vt,bt,Kt,Bt),v=new Hx(x),O=new Wx(x),Y=new e0(R),xe=new Ox(R,Y),tt=new qx(R,Y,Bt,xe),Z=new Jx(R,tt,Y,Bt),Ht=new $x(R,bt,w),it=new kx(vt),Ct=new ov(x,v,O,nt,bt,xe,it),ft=new Rv(x,vt),yt=new cv,ee=new mv(nt),zt=new Fx(x,v,O,ct,Z,d,l),St=new _v(x,Z,bt),U=new Cv(R,Bt,bt,ct),Et=new Bx(R,nt,Bt),se=new Yx(R,nt,Bt),Bt.programs=Ct.programs,x.capabilities=bt,x.extensions=nt,x.properties=vt,x.renderLists=yt,x.shadowMap=St,x.state=ct,x.info=Bt}dt();let q=new ph(x,R);this.xr=q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(W,st,!1))},this.getSize=function(b){return b.set(W,st)},this.setSize=function(b,N,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,st=N,e.width=Math.floor(b*X),e.height=Math.floor(N*X),k===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(W*X,st*X).floor()},this.setDrawingBufferSize=function(b,N,k){W=b,st=N,X=k,e.width=Math.floor(b*k),e.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,N,k,H){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,N,k,H),ct.viewport(P.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(qt)},this.setScissor=function(b,N,k,H){b.isVector4?qt.set(b.x,b.y,b.z,b.w):qt.set(b,N,k,H),ct.scissor(z.copy(qt).multiplyScalar(X).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){ct.setScissorTest(le=b)},this.setOpaqueSort=function(b){ht=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(b=!0,N=!0,k=!0){let H=0;if(b){let F=!1;if(L!==null){let at=L.texture.format;F=at===Zh||at===Yh||at===qh}if(F){let at=L.texture.type,mt=at===xi||at===_s||at===to||at===rr||at===Wh||at===Xh,It=zt.getClearColor(),Pt=zt.getClearAlpha(),Wt=It.r,$t=It.g,Lt=It.b;mt?(g[0]=Wt,g[1]=$t,g[2]=Lt,g[3]=Pt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Wt,_[1]=$t,_[2]=Lt,_[3]=Pt,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),k&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),yt.dispose(),ee.dispose(),vt.dispose(),v.dispose(),O.dispose(),Z.dispose(),xe.dispose(),U.dispose(),Ct.dispose(),q.dispose(),q.removeEventListener("sessionstart",zu),q.removeEventListener("sessionend",ku),os.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=Bt.autoReset,N=St.enabled,k=St.autoUpdate,H=St.needsUpdate,F=St.type;dt(),Bt.autoReset=b,St.enabled=N,St.autoUpdate=k,St.needsUpdate=H,St.type=F}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){let N=b.target;N.removeEventListener("dispose",Zt),Ie(N)}function Ie(b){Je(b),vt.remove(b)}function Je(b){let N=vt.get(b).programs;N!==void 0&&(N.forEach(function(k){Ct.releaseProgram(k)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,H,F,at){N===null&&(N=re);let mt=F.isMesh&&F.matrixWorld.determinant()<0,It=Up(b,N,k,H,F);ct.setMaterial(H,mt);let Pt=k.index,Wt=1;if(H.wireframe===!0){if(Pt=tt.getWireframeAttribute(k),Pt===void 0)return;Wt=2}let $t=k.drawRange,Lt=k.attributes.position,ae=$t.start*Wt,_e=($t.start+$t.count)*Wt;at!==null&&(ae=Math.max(ae,at.start*Wt),_e=Math.min(_e,(at.start+at.count)*Wt)),Pt!==null?(ae=Math.max(ae,0),_e=Math.min(_e,Pt.count)):Lt!=null&&(ae=Math.max(ae,0),_e=Math.min(_e,Lt.count));let Me=_e-ae;if(Me<0||Me===1/0)return;xe.setup(F,H,It,k,Pt);let an,ce=Et;if(Pt!==null&&(an=Y.get(Pt),ce=se,ce.setIndex(an)),F.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*rt()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(F.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),ct.setLineWidth(Ut*rt()),F.isLineSegments?ce.setMode(R.LINES):F.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else F.isPoints?ce.setMode(R.POINTS):F.isSprite&&ce.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ut=F._multiDrawStarts,oi=F._multiDrawCounts,he=F._multiDrawCount,Dn=Pt?Y.get(Pt).bytesPerElement:1,Ps=vt.get(H).currentProgram.getUniforms();for(let pn=0;pn<he;pn++)Ps.setValue(R,"_gl_DrawID",pn),ce.render(Ut[pn]/Dn,oi[pn])}else if(F.isInstancedMesh)ce.renderInstances(ae,Me,F.count);else if(k.isInstancedBufferGeometry){let Ut=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,oi=Math.min(k.instanceCount,Ut);ce.renderInstances(ae,Me,oi)}else ce.render(ae,Me)};function de(b,N,k){b.transparent===!0&&b.side===On&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,Oo(b,N,k),b.side=Fi,b.needsUpdate=!0,Oo(b,N,k),b.side=On):Oo(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),p=ee.get(k),p.init(N),M.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let H=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let at=F.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let It=at[mt];de(It,k,F),H.add(It)}else de(at,k,F),H.add(at)}),M.pop(),p=null,H},this.compileAsync=function(b,N,k=null){let H=this.compile(b,N,k);return new Promise(F=>{function at(){if(H.forEach(function(mt){vt.get(mt).currentProgram.isReady()&&H.delete(mt)}),H.size===0){F(b);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ln=null;function ri(b){Ln&&Ln(b)}function zu(){os.stop()}function ku(){os.start()}let os=new Ed;os.setAnimationLoop(ri),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(b){Ln=b,q.setAnimationLoop(b),b===null?os.stop():os.start()},q.addEventListener("sessionstart",zu),q.addEventListener("sessionend",ku),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,L),p=ee.get(b,M.length),p.init(N),M.push(p),Nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Nt),Rt=this.localClippingEnabled,ot=it.init(this.clippingPlanes,Rt),m=yt.get(b,T.length),m.init(),T.push(m),q.enabled===!0&&q.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&Ll(at,N,-1/0,x.sortObjects)}Ll(b,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,xt),j=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,j&&zt.addToRenderList(m,b),this.info.render.frame++,ot===!0&&it.beginShadows();let k=p.state.shadowsArray;St.render(k,b,N),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let at=N.cameras;if(F.length>0)for(let mt=0,It=at.length;mt<It;mt++){let Pt=at[mt];Vu(H,F,b,Pt)}j&&zt.render(b);for(let mt=0,It=at.length;mt<It;mt++){let Pt=at[mt];Hu(m,b,Pt,Pt.viewport)}}else F.length>0&&Vu(H,F,b,N),j&&zt.render(b),Hu(m,b,N);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(x,b,N),xe.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],ot===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ll(b,N,k,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){H&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);let mt=Z.update(b),It=b.material;It.visible&&m.push(b,mt,It,k,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){let mt=Z.update(b),It=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray(It)){let Pt=mt.groups;for(let Wt=0,$t=Pt.length;Wt<$t;Wt++){let Lt=Pt[Wt],ae=It[Lt.materialIndex];ae&&ae.visible&&m.push(b,mt,ae,k,kt.z,Lt)}}else It.visible&&m.push(b,mt,It,k,kt.z,null)}}let at=b.children;for(let mt=0,It=at.length;mt<It;mt++)Ll(at[mt],N,k,H)}function Hu(b,N,k,H){let F=b.opaque,at=b.transmissive,mt=b.transparent;p.setupLightsView(k),ot===!0&&it.setGlobalState(x.clippingPlanes,k),H&&ct.viewport(P.copy(H)),F.length>0&&Fo(F,N,k),at.length>0&&Fo(at,N,k),mt.length>0&&Fo(mt,N,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Vu(b,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new We(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?xn:xi,minFilter:xs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let at=p.state.transmissionRenderTarget[H.id],mt=H.viewport||P;at.setSize(mt.z,mt.w);let It=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(G),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),j&&zt.render(k);let Pt=x.toneMapping;x.toneMapping=Ni;let Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ot===!0&&it.setGlobalState(x.clippingPlanes,H),Fo(b,k,H),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Lt=0,ae=N.length;Lt<ae;Lt++){let _e=N[Lt],Me=_e.object,an=_e.geometry,ce=_e.material,Ut=_e.group;if(ce.side===On&&Me.layers.test(H.layers)){let oi=ce.side;ce.side=je,ce.needsUpdate=!0,Gu(Me,k,H,an,ce,Ut),ce.side=oi,ce.needsUpdate=!0,$t=!0}}$t===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}x.setRenderTarget(It),x.setClearColor(G,K),Wt!==void 0&&(H.viewport=Wt),x.toneMapping=Pt}function Fo(b,N,k){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=b.length;F<at;F++){let mt=b[F],It=mt.object,Pt=mt.geometry,Wt=H===null?mt.material:H,$t=mt.group;It.layers.test(k.layers)&&Gu(It,N,k,Pt,Wt,$t)}}function Gu(b,N,k,H,F,at){b.onBeforeRender(x,N,k,H,F,at),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,k,H,b,at),F.transparent===!0&&F.side===On&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,b,at),F.side=Fi,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,b,at),F.side=On):x.renderBufferDirect(k,N,H,F,b,at),b.onAfterRender(x,N,k,H,F,at)}function Oo(b,N,k){N.isScene!==!0&&(N=re);let H=vt.get(b),F=p.state.lights,at=p.state.shadowsArray,mt=F.state.version,It=Ct.getParameters(b,F.state,at,N,k),Pt=Ct.getProgramCacheKey(It),Wt=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",Zt),Wt=new Map,H.programs=Wt);let $t=Wt.get(Pt);if($t!==void 0){if(H.currentProgram===$t&&H.lightsStateVersion===mt)return Xu(b,It),$t}else It.uniforms=Ct.getUniforms(b),b.onBeforeCompile(It,x),$t=Ct.acquireProgram(It,Pt),Wt.set(Pt,$t),H.uniforms=It.uniforms;let Lt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Xu(b,It),H.needsLights=Fp(b),H.lightsStateVersion=mt,H.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=$t,H.uniformsList=null,$t}function Wu(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=er.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Xu(b,N){let k=vt.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Up(b,N,k,H,F){N.isScene!==!0&&(N=re),w.resetTextureUnits();let at=N.fog,mt=H.isMeshStandardMaterial?N.environment:null,It=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mr,Pt=(H.isMeshStandardMaterial?O:v).get(H.envMap||mt),Wt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,$t=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!k.morphAttributes.position,ae=!!k.morphAttributes.normal,_e=!!k.morphAttributes.color,Me=Ni;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Me=x.toneMapping);let an=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=an!==void 0?an.length:0,Ut=vt.get(H),oi=p.state.lights;if(ot===!0&&(Rt===!0||b!==y)){let Sn=b===y&&H.id===S;it.setState(H,b,Sn)}let he=!1;H.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==oi.state.version||Ut.outputColorSpace!==It||F.isBatchedMesh&&Ut.batching===!1||!F.isBatchedMesh&&Ut.batching===!0||F.isBatchedMesh&&Ut.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ut.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ut.instancing===!1||!F.isInstancedMesh&&Ut.instancing===!0||F.isSkinnedMesh&&Ut.skinning===!1||!F.isSkinnedMesh&&Ut.skinning===!0||F.isInstancedMesh&&Ut.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ut.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ut.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ut.instancingMorph===!1&&F.morphTexture!==null||Ut.envMap!==Pt||H.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==it.numPlanes||Ut.numIntersection!==it.numIntersection)||Ut.vertexAlphas!==Wt||Ut.vertexTangents!==$t||Ut.morphTargets!==Lt||Ut.morphNormals!==ae||Ut.morphColors!==_e||Ut.toneMapping!==Me||Ut.morphTargetsCount!==ce)&&(he=!0):(he=!0,Ut.__version=H.version);let Dn=Ut.currentProgram;he===!0&&(Dn=Oo(H,N,F));let Ps=!1,pn=!1,Nr=!1,be=Dn.getUniforms(),Zn=Ut.uniforms;if(ct.useProgram(Dn.program)&&(Ps=!0,pn=!0,Nr=!0),H.id!==S&&(S=H.id,pn=!0),Ps||y!==b){ct.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),Fm(lt),Om(lt),be.setValue(R,"projectionMatrix",lt)):be.setValue(R,"projectionMatrix",b.projectionMatrix),be.setValue(R,"viewMatrix",b.matrixWorldInverse);let Ei=be.map.cameraPosition;Ei!==void 0&&Ei.setValue(R,Gt.setFromMatrixPosition(b.matrixWorld)),bt.logarithmicDepthBuffer&&be.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&be.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,pn=!0,Nr=!0)}if(F.isSkinnedMesh){be.setOptional(R,F,"bindMatrix"),be.setOptional(R,F,"bindMatrixInverse");let Sn=F.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),be.setValue(R,"boneTexture",Sn.boneTexture,w))}F.isBatchedMesh&&(be.setOptional(R,F,"batchingTexture"),be.setValue(R,"batchingTexture",F._matricesTexture,w),be.setOptional(R,F,"batchingIdTexture"),be.setValue(R,"batchingIdTexture",F._indirectTexture,w),be.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(R,"batchingColorTexture",F._colorsTexture,w));let Fr=k.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&Ht.update(F,k,Dn),(pn||Ut.receiveShadow!==F.receiveShadow)&&(Ut.receiveShadow=F.receiveShadow,be.setValue(R,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Zn.envMap.value=Pt,Zn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Zn.envMapIntensity.value=N.environmentIntensity),pn&&(be.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Np(Zn,Nr),at&&H.fog===!0&&ft.refreshFogUniforms(Zn,at),ft.refreshMaterialUniforms(Zn,H,X,st,p.state.transmissionRenderTarget[b.id]),er.upload(R,Wu(Ut),Zn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(er.upload(R,Wu(Ut),Zn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&be.setValue(R,"center",F.center),be.setValue(R,"modelViewMatrix",F.modelViewMatrix),be.setValue(R,"normalMatrix",F.normalMatrix),be.setValue(R,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Sn=H.uniformsGroups;for(let Ei=0,Ti=Sn.length;Ei<Ti;Ei++){let qu=Sn[Ei];U.update(qu,Dn),U.bind(qu,Dn)}}return Dn}function Np(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Fp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,k){vt.get(b.texture).__webglTexture=N,vt.get(b.depthTexture).__webglTexture=k;let H=vt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let k=vt.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,k=0){L=b,C=N,I=k;let H=!0,F=null,at=!1,mt=!1;if(b){let Pt=vt.get(b);if(Pt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Pt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Pt.__hasExternalTextures)w.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Lt=b.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&vt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(mt=!0);let $t=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[N])?F=$t[N][k]:F=$t[N],at=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=vt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?F=$t[k]:F=$t,P.copy(b.viewport),z.copy(b.scissor),B=b.scissorTest}else P.copy(Tt).multiplyScalar(X).floor(),z.copy(qt).multiplyScalar(X).floor(),B=le;if(ct.bindFramebuffer(R.FRAMEBUFFER,F)&&H&&ct.drawBuffers(b,F),ct.viewport(P),ct.scissor(z),ct.setScissorTest(B),at){let Pt=vt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,k)}else if(mt){let Pt=vt.get(b.texture),Wt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,k||0,Wt)}S=-1},this.readRenderTargetPixels=function(b,N,k,H,F,at,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(It=It[mt]),It){ct.bindFramebuffer(R.FRAMEBUFFER,It);try{let Pt=b.texture,Wt=Pt.format,$t=Pt.type;if(!bt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F&&R.readPixels(N,k,H,F,Kt.convert(Wt),Kt.convert($t),at)}finally{let Pt=L!==null?vt.get(L).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,H,F,at,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(It=It[mt]),It){let Pt=b.texture,Wt=Pt.format,$t=Pt.type;if(!bt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F){ct.bindFramebuffer(R.FRAMEBUFFER,It);let Lt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),R.readPixels(N,k,H,F,Kt.convert(Wt),Kt.convert($t),0);let ae=L!==null?vt.get(L).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,ae);let _e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Nm(R,_e,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at),R.deleteBuffer(Lt),R.deleteSync(_e),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,k=0){b.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let H=Math.pow(2,-k),F=Math.floor(b.image.width*H),at=Math.floor(b.image.height*H),mt=N!==null?N.x:0,It=N!==null?N.y:0;w.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,mt,It,F,at),ct.unbindTexture()},this.copyTextureToTexture=function(b,N,k=null,H=null,F=0){b.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let at,mt,It,Pt,Wt,$t,Lt,ae,_e,Me=b.isCompressedTexture?b.mipmaps[F]:b.image;k!==null?(at=k.max.x-k.min.x,mt=k.max.y-k.min.y,It=k.isBox3?k.max.z-k.min.z:1,Pt=k.min.x,Wt=k.min.y,$t=k.isBox3?k.min.z:0):(at=Me.width,mt=Me.height,It=Me.depth||1,Pt=0,Wt=0,$t=0),H!==null?(Lt=H.x,ae=H.y,_e=H.z):(Lt=0,ae=0,_e=0);let an=Kt.convert(N.format),ce=Kt.convert(N.type),Ut;N.isData3DTexture?(w.setTexture3D(N,0),Ut=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Ut=R.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Ut=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let oi=R.getParameter(R.UNPACK_ROW_LENGTH),he=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Dn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ps=R.getParameter(R.UNPACK_SKIP_ROWS),pn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$t);let Nr=b.isDataArrayTexture||b.isData3DTexture,be=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Zn=vt.get(b),Fr=vt.get(N),Sn=vt.get(Zn.__renderTarget),Ei=vt.get(Fr.__renderTarget);ct.bindFramebuffer(R.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<It;Ti++)Nr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,F,$t+Ti),b.isDepthTexture?(be&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(N).__webglTexture,F,_e+Ti),R.blitFramebuffer(Pt,Wt,at,mt,Lt,ae,at,mt,R.DEPTH_BUFFER_BIT,R.NEAREST)):be?R.copyTexSubImage3D(Ut,F,Lt,ae,_e+Ti,Pt,Wt,at,mt):R.copyTexSubImage2D(Ut,F,Lt,ae,_e+Ti,Pt,Wt,at,mt);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Ut,F,Lt,ae,_e,at,mt,It,an,ce,Me.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ut,F,Lt,ae,_e,at,mt,It,an,Me.data):R.texSubImage3D(Ut,F,Lt,ae,_e,at,mt,It,an,ce,Me):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Lt,ae,at,mt,an,ce,Me.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Lt,ae,Me.width,Me.height,an,Me.data):R.texSubImage2D(R.TEXTURE_2D,F,Lt,ae,at,mt,an,ce,Me);R.pixelStorei(R.UNPACK_ROW_LENGTH,oi),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ps),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pn),F===0&&N.generateMipmaps&&R.generateMipmap(Ut),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,N,k=null,H=null,F=0){return b.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,k,H,F)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){C=0,I=0,L=null,ct.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Na=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fa=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new A,io=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qs,Hr=new A,Ys=new A,Zs=new A,$s=new et,Vr=new et,Cd=new oe,ra=new A,Gr=new A,oa=new A,Yf=new et,ac=new et,Zf=new et,so=class extends Xe{constructor(t=new cr){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Oa(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new io(i,3,0,!1)),qs.setAttribute("uv",new io(i,2,3,!1))}this.geometry=qs,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Cd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Zs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;aa(ra.set(-.5,-.5,0),Zs,o,Ys,s,r),aa(Gr.set(.5,-.5,0),Zs,o,Ys,s,r),aa(oa.set(.5,.5,0),Zs,o,Ys,s,r),Yf.set(0,0),ac.set(1,0),Zf.set(1,1);let a=t.ray.intersectTriangle(ra,Gr,oa,!1,Hr);if(a===null&&(aa(Gr.set(-.5,.5,0),Zs,o,Ys,s,r),ac.set(0,1),a=t.ray.intersectTriangle(ra,oa,Gr,!1,Hr),a===null))return;let l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:Ui.getInterpolation(Hr,ra,Gr,oa,Yf,ac,Zf,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function aa(n,t,e,i,s,r){$s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*$s.x-s*$s.y,Vr.y=s*$s.x+r*$s.y):Vr.copy($s),n.copy(t),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(Cd)}var ro=class extends ln{constructor(t=null,e=1,i=1,s,r,o,a,l,c=tn,h=tn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oo=class extends ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new oe,$f=new oe,la=[],Jf=new _i,Iv=new oe,Wr=new me,Xr=new Bi,Ba=class extends me{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Iv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Js),Jf.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(Jf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Js),Xr.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),t.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),$f.multiplyMatrices(i,Js),Wr.matrixWorld=$f,Wr.raycast(t,la);for(let o=0,a=la.length;o<a;o++){let l=la[o];l.instanceId=r,l.object=this,e.push(l)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,_o,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ao=class extends vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kf=new oe,mh=new Ta,ca=new Bi,ha=new A,hr=class extends Xe{constructor(t=new Le,e=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Kf.copy(s).invert(),mh.copy(t.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);ha.fromBufferAttribute(u,m),Qf(ha,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ha.fromBufferAttribute(u,g),Qf(ha,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qf(n,t,e,i,s,r,o){let a=mh.distanceSqToPoint(n);if(a<e){let l=new A;mh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ur=class extends ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new A,s=[],r=[],o=[],a=new A,l=new oe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lo=class extends Tn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gh=class extends lo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ua=new A,lc=new Kh,cc=new Kh,hc=new Kh,xh=class extends Tn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ua.subVectors(s[0],s[1]).add(s[0]),c=ua);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),lc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),cc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),hc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),cc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(lc.calc(l),cc.calc(l),hc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Pv(n,t){let e=1-n;return e*e*t}function Lv(n,t){return 2*(1-n)*n*t}function Dv(n,t){return n*n*t}function Kr(n,t,e,i){return Pv(n,t)+Lv(n,e)+Dv(n,i)}function Uv(n,t){let e=1-n;return e*e*e*t}function Nv(n,t){let e=1-n;return 3*e*e*n*t}function Fv(n,t){return 3*(1-n)*n*n*t}function Ov(n,t){return n*n*n*t}function Qr(n,t,e,i,s){return Uv(n,t)+Nv(n,e)+Fv(n,i)+Ov(n,s)}var za=class extends Tn{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(t,s.x,r.x,o.x,a.x),Qr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_h=class extends Tn{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(t,s.x,r.x,o.x,a.x),Qr(t,s.y,r.y,o.y,a.y),Qr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends Tn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vh=class extends Tn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Tn{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yh=class extends Tn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y),Kr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(jf(a,l.x,c.x,h.x,u.x),jf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Mh=Object.freeze({__proto__:null,ArcCurve:gh,CatmullRomCurve3:xh,CubicBezierCurve:za,CubicBezierCurve3:_h,EllipseCurve:lo,LineCurve:ka,LineCurve3:vh,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:yh,SplineCurve:Va}),bh=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Mh[s.type]().fromJSON(s))}return this}},Ga=class extends bh{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ka(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ha(this.currentPoint.clone(),new et(t,e),new et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new za(this.currentPoint.clone(),new et(t,e),new et(i,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Va(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new lo(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Hi=class n extends Le{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;T(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(d,2));function T(){let x=new A,D=new A,C=0,I=(e-t)/i;for(let L=0;L<=r;L++){let S=[],y=L/r,P=y*(e-t)+t;for(let z=0;z<=s;z++){let B=z/s,G=B*l+a,K=Math.sin(G),W=Math.cos(G);D.x=P*K,D.y=-y*i+m,D.z=P*W,u.push(D.x,D.y,D.z),x.set(K,I,W).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-y),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let y=_[S][L],P=_[S+1][L],z=_[S+1][L+1],B=_[S][L+1];(t>0||S!==0)&&(h.push(y,P,B),C+=3),(e>0||S!==r-1)&&(h.push(P,z,B),C+=3)}c.addGroup(p,C,0),p+=C}function M(x){let D=g,C=new et,I=new A,L=0,S=x===!0?t:e,y=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;let P=g;for(let z=0;z<=s;z++){let G=z/s*l+a,K=Math.cos(G),W=Math.sin(G);I.x=S*W,I.y=m*y,I.z=S*K,u.push(I.x,I.y,I.z),f.push(0,y,0),C.x=K*.5+.5,C.y=W*.5*y+.5,d.push(C.x,C.y),g++}for(let z=0;z<s;z++){let B=D+z,G=P+z;x===!0?h.push(G,G+1,B):h.push(G+1,G,B),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fr=class n extends Hi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},co=class n extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let M=new A,x=new A,D=new A;for(let C=0;C<e.length;C+=3)d(e[C+0],M),d(e[C+1],x),d(e[C+2],D),l(M,x,D,T)}function l(T,M,x,D){let C=D+1,I=[];for(let L=0;L<=C;L++){I[L]=[];let S=T.clone().lerp(x,L/C),y=M.clone().lerp(x,L/C),P=C-L;for(let z=0;z<=P;z++)z===0&&L===C?I[L][z]=S:I[L][z]=S.clone().lerp(y,z/P)}for(let L=0;L<C;L++)for(let S=0;S<2*(C-L)-1;S++){let y=Math.floor(S/2);S%2===0?(f(I[L][y+1]),f(I[L+1][y]),f(I[L][y])):(f(I[L][y+1]),f(I[L+1][y+1]),f(I[L+1][y]))}}function c(T){let M=new A;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(T),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let T=new A;for(let M=0;M<r.length;M+=3){T.x=r[M+0],T.y=r[M+1],T.z=r[M+2];let x=m(T)/2/Math.PI+.5,D=p(T)/Math.PI+.5;o.push(x,1-D)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){let M=o[T+0],x=o[T+2],D=o[T+4],C=Math.max(M,x,D),I=Math.min(M,x,D);C>.9&&I<.1&&(M<.2&&(o[T+0]+=1),x<.2&&(o[T+2]+=1),D<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,M){let x=T*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){let T=new A,M=new A,x=new A,D=new A,C=new et,I=new et,L=new et;for(let S=0,y=0;S<r.length;S+=9,y+=6){T.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),C.set(o[y+0],o[y+1]),I.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),D.copy(T).add(M).add(x).divideScalar(3);let P=m(D);_(C,y+0,T,P),_(I,y+2,M,P),_(L,y+4,x,P)}}function _(T,M,x,D){D<0&&T.x===1&&(o[M]=T.x-1),x.x===0&&x.z===0&&(o[M]=D/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},Wa=class n extends co{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ho=class extends Ga{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ga().fromJSON(s))}return this}},Bv={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Id(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=Gv(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return uo(r,o,e,a,l,d,0),o}};function Id(n,t,e,i,s){let r,o;if(s===ty(n,t,e,i)>0)for(r=t;r<e;r+=i)o=td(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=td(r,n[r],n[r+1],o);return o&&nl(o,o.next)&&(po(o),o=o.next),o}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(nl(e,e.next)||we(e.prev,e,e.next)===0)){if(po(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function uo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Zv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?kv(n,i,s,r):zv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),po(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Hv(vs(n),t,e),uo(n,t,e,i,s,r,2)):o===2&&Vv(n,t,e,i,s,r):uo(vs(n),t,e,i,s,r,1);break}}}function zv(n){let t=n.prev,e=n,i=n.next;if(we(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Qs(s,a,r,l,o,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kv(n,t,e,i){let s=n.prev,r=n,o=n.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Sh(d,g,t,e,i),T=Sh(_,m,t,e,i),M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=T;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Qs(a,h,l,u,c,f,M.x,M.y)&&we(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Qs(a,h,l,u,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Qs(a,h,l,u,c,f,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=T;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Qs(a,h,l,u,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hv(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!nl(s,r)&&Pd(s,i,i.next,r)&&fo(s,r)&&fo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),po(i),po(i.next),i=n=r),i=i.next}while(i!==n);return vs(i)}function Vv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kv(o,a)){let l=Ld(o,a);o=vs(o,o.next),l=vs(l,l.next),uo(o,t,e,i,s,r,0),uo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Gv(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Id(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Jv(c));for(s.sort(Wv),r=0;r<s.length;r++)e=Xv(s[r],e);return e}function Wv(n,t){return n.x-t.x}function Xv(n,t){let e=qv(n,t);if(!e)return t;let i=Ld(e,n);return vs(i,i.next),vs(e,e.next)}function qv(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Qs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),fo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Yv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Yv(n,t){return we(n.prev,n,t.prev)<0&&we(t.next,n,n.next)<0}function Zv(n,t,e,i){let s=n;do s.z===0&&(s.z=Sh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$v(s)}function $v(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Sh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Jv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Qs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Kv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Qv(n,t)&&(fo(n,t)&&fo(t,n)&&jv(n,t)&&(we(n.prev,n,t.prev)||we(n,t.prev,t))||nl(n,t)&&we(n.prev,n,n.next)>0&&we(t.prev,t,t.next)>0)}function we(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function nl(n,t){return n.x===t.x&&n.y===t.y}function Pd(n,t,e,i){let s=da(we(n,t,e)),r=da(we(n,t,i)),o=da(we(e,i,n)),a=da(we(e,i,t));return!!(s!==r&&o!==a||s===0&&fa(n,e,t)||r===0&&fa(n,i,t)||o===0&&fa(e,n,i)||a===0&&fa(e,t,i))}function fa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function da(n){return n>0?1:n<0?-1:0}function Qv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fo(n,t){return we(n.prev,n,n.next)<0?we(n,t,n.next)>=0&&we(n,n.prev,t)>=0:we(n,t,n.prev)<0||we(n,n.next,t)<0}function jv(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ld(n,t){let e=new Eh(n.i,n.x,n.y),i=new Eh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function td(n,t,e,i){let s=new Eh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ty(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var jr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ed(t),nd(i,t);let o=t.length;e.forEach(ed);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nd(i,e[l]);let a=Bv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ed(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Xa=class n extends Le{constructor(t=new ho([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:ey,M,x=!1,D,C,I,L;p&&(M=p.getSpacedPoints(h),x=!0,f=!1,D=p.computeFrenetFrames(h,!1),C=new A,I=new A,L=new A),f||(m=0,d=0,g=0,_=0);let S=a.extractPoints(c),y=S.shape,P=S.holes;if(!jr.isClockWise(y)){y=y.reverse();for(let j=0,rt=P.length;j<rt;j++){let R=P[j];jr.isClockWise(R)&&(P[j]=R.reverse())}}let B=jr.triangulateShape(y,P),G=y;for(let j=0,rt=P.length;j<rt;j++){let R=P[j];y=y.concat(R)}function K(j,rt,R){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,R)}let W=y.length,st=B.length;function X(j,rt,R){let Dt,nt,bt,ct=j.x-rt.x,Bt=j.y-rt.y,vt=R.x-j.x,w=R.y-j.y,v=ct*ct+Bt*Bt,O=ct*w-Bt*vt;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(v),tt=Math.sqrt(vt*vt+w*w),Z=rt.x-Bt/Y,Ct=rt.y+ct/Y,ft=R.x-w/tt,yt=R.y+vt/tt,ee=((ft-Z)*w-(yt-Ct)*vt)/(ct*w-Bt*vt);Dt=Z+ct*ee-j.x,nt=Ct+Bt*ee-j.y;let it=Dt*Dt+nt*nt;if(it<=2)return new et(Dt,nt);bt=Math.sqrt(it/2)}else{let Y=!1;ct>Number.EPSILON?vt>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&(Y=!0):Math.sign(Bt)===Math.sign(w)&&(Y=!0),Y?(Dt=-Bt,nt=ct,bt=Math.sqrt(v)):(Dt=ct,nt=Bt,bt=Math.sqrt(v/2))}return new et(Dt/bt,nt/bt)}let ht=[];for(let j=0,rt=G.length,R=rt-1,Dt=j+1;j<rt;j++,R++,Dt++)R===rt&&(R=0),Dt===rt&&(Dt=0),ht[j]=X(G[j],G[R],G[Dt]);let xt=[],Tt,qt=ht.concat();for(let j=0,rt=P.length;j<rt;j++){let R=P[j];Tt=[];for(let Dt=0,nt=R.length,bt=nt-1,ct=Dt+1;Dt<nt;Dt++,bt++,ct++)bt===nt&&(bt=0),ct===nt&&(ct=0),Tt[Dt]=X(R[Dt],R[bt],R[ct]);xt.push(Tt),qt=qt.concat(Tt)}for(let j=0;j<m;j++){let rt=j/m,R=d*Math.cos(rt*Math.PI/2),Dt=g*Math.sin(rt*Math.PI/2)+_;for(let nt=0,bt=G.length;nt<bt;nt++){let ct=K(G[nt],ht[nt],Dt);lt(ct.x,ct.y,-R)}for(let nt=0,bt=P.length;nt<bt;nt++){let ct=P[nt];Tt=xt[nt];for(let Bt=0,vt=ct.length;Bt<vt;Bt++){let w=K(ct[Bt],Tt[Bt],Dt);lt(w.x,w.y,-R)}}}let le=g+_;for(let j=0;j<W;j++){let rt=f?K(y[j],qt[j],le):y[j];x?(I.copy(D.normals[0]).multiplyScalar(rt.x),C.copy(D.binormals[0]).multiplyScalar(rt.y),L.copy(M[0]).add(I).add(C),lt(L.x,L.y,L.z)):lt(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<W;rt++){let R=f?K(y[rt],qt[rt],le):y[rt];x?(I.copy(D.normals[j]).multiplyScalar(R.x),C.copy(D.binormals[j]).multiplyScalar(R.y),L.copy(M[j]).add(I).add(C),lt(L.x,L.y,L.z)):lt(R.x,R.y,u/h*j)}for(let j=m-1;j>=0;j--){let rt=j/m,R=d*Math.cos(rt*Math.PI/2),Dt=g*Math.sin(rt*Math.PI/2)+_;for(let nt=0,bt=G.length;nt<bt;nt++){let ct=K(G[nt],ht[nt],Dt);lt(ct.x,ct.y,u+R)}for(let nt=0,bt=P.length;nt<bt;nt++){let ct=P[nt];Tt=xt[nt];for(let Bt=0,vt=ct.length;Bt<vt;Bt++){let w=K(ct[Bt],Tt[Bt],Dt);x?lt(w.x,w.y+M[h-1].y,M[h-1].x+R):lt(w.x,w.y,u+R)}}}$(),ot();function $(){let j=s.length/3;if(f){let rt=0,R=W*rt;for(let Dt=0;Dt<st;Dt++){let nt=B[Dt];Nt(nt[2]+R,nt[1]+R,nt[0]+R)}rt=h+m*2,R=W*rt;for(let Dt=0;Dt<st;Dt++){let nt=B[Dt];Nt(nt[0]+R,nt[1]+R,nt[2]+R)}}else{for(let rt=0;rt<st;rt++){let R=B[rt];Nt(R[2],R[1],R[0])}for(let rt=0;rt<st;rt++){let R=B[rt];Nt(R[0]+W*h,R[1]+W*h,R[2]+W*h)}}i.addGroup(j,s.length/3-j,0)}function ot(){let j=s.length/3,rt=0;Rt(G,rt),rt+=G.length;for(let R=0,Dt=P.length;R<Dt;R++){let nt=P[R];Rt(nt,rt),rt+=nt.length}i.addGroup(j,s.length/3-j,1)}function Rt(j,rt){let R=j.length;for(;--R>=0;){let Dt=R,nt=R-1;nt<0&&(nt=j.length-1);for(let bt=0,ct=h+m*2;bt<ct;bt++){let Bt=W*bt,vt=W*(bt+1),w=rt+Dt+Bt,v=rt+nt+Bt,O=rt+nt+vt,Y=rt+Dt+vt;Gt(w,v,O,Y)}}}function lt(j,rt,R){l.push(j),l.push(rt),l.push(R)}function Nt(j,rt,R){kt(j),kt(rt),kt(R);let Dt=s.length/3,nt=T.generateTopUV(i,s,Dt-3,Dt-2,Dt-1);re(nt[0]),re(nt[1]),re(nt[2])}function Gt(j,rt,R,Dt){kt(j),kt(rt),kt(Dt),kt(rt),kt(R),kt(Dt);let nt=s.length/3,bt=T.generateSideWallUV(i,s,nt-6,nt-3,nt-2,nt-1);re(bt[0]),re(bt[1]),re(bt[3]),re(bt[1]),re(bt[2]),re(bt[3])}function kt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function re(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ny(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mh[s.type]().fromJSON(s)),new n(i,t.options)}},ey={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-u),new et(f,1-g),new et(_,1-p)]:[new et(a,1-l),new et(h,1-u),new et(d,1-g),new et(m,1-p)]}};function ny(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qa=class n extends co{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Ya=class n extends co{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ys=class n extends Le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let T=[],M=p/i,x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let C=D/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(C+x,1-M),T.push(c++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){let M=h[p][T+1],x=h[p][T],D=h[p+1][T],C=h[p+1][T+1];(p!==0||o>0)&&d.push(M,x,C),(p!==i-1||l<Math.PI)&&d.push(x,D,C)}this.setIndex(d),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mo=class n extends Le{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Za=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var go=class extends vi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function pa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function iy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var dr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends dr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ku:r=t,a=2*e-i;break;case Qu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ku:o=t,l=2*i-e;break;case Qu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+T*o[c+D]+M*o[l+D]+x*o[u+D];return r}},wh=class extends dr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ah=class extends dr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pa(e,this.TimeBufferType),this.values=pa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:pa(t.times,Array),values:pa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Th(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case Ul:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&iy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ul,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Kc;var Ms=class extends Hn{constructor(t,e,i){super(t,e,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=ya;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends Hn{};Rh.prototype.ValueTypeName="color";var Ch=class extends Hn{};Ch.prototype.ValueTypeName="number";var Ih=class extends dr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$a=class extends Hn{InterpolantFactoryMethodLinear(t){return new Ih(this.times,this.values,this.getValueSize(),t)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Hn{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=ya;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends Hn{};Ph.prototype.ValueTypeName="vector";var Lh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},sy=new Lh,Dh=class{constructor(t){this.manager=t!==void 0?t:sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ja=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ka=class extends Ja{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},uc=new oe,id=new A,sd=new A,Uh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nh=class extends Uh{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qa=class extends Ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var pr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=rd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function rd(){return performance.now()}var Qh="\\[\\]\\.:\\/",ry=new RegExp("["+Qh+"]","g"),jh="[^"+Qh+"]",oy="[^"+Qh.replace("\\.","")+"]",ay=/((?:WC+[\/:])*)/.source.replace("WC",jh),ly=/(WCOD+)?/.source.replace("WCOD",oy),cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),uy=new RegExp("^"+ay+ly+cy+hy+"$"),fy=["material","materials","bones","map"],Fh=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(t){let e=uy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Fh;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Gi(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Yb=Gi(20954),tu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Ss=class{constructor(t=1337){let e=Gi(t);this.perm=new Uint8Array(512);let i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(t,e){let i=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=0,o=0,a=0,l=(t+e)*i,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*s,f=t-(c-u),d=e-(h-u),g=f>d?1:0,_=f>d?0:1,m=f-g+s,p=d-_+s,T=f-1+2*s,M=d-1+2*s,x=c&255,D=h&255,C=.5-f*f-d*d;if(C>=0){let S=tu[this.perm[x+this.perm[D]]%8];C*=C,r=C*C*(S[0]*f+S[1]*d)}let I=.5-m*m-p*p;if(I>=0){let S=tu[this.perm[x+g+this.perm[D+_]]%8];I*=I,o=I*I*(S[0]*m+S[1]*p)}let L=.5-T*T-M*M;if(L>=0){let S=tu[this.perm[x+1+this.perm[D+1]]%8];L*=L,a=L*L*(S[0]*T+S[1]*M)}return 70*(r+o+a)}fbm(t,e,i=4,s=2,r=.5){let o=.5,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise(t*a,e*a),c+=o,o*=r,a*=s;return l/c}},ye=(n,t,e)=>Math.min(e,Math.max(t,n)),ne=(n,t,e)=>n+(t-n)*e,_n=(n,t,e)=>{let i=ye((e-n)/(t-n),0,1);return i*i*(3-2*i)},Xt=(n,t,e,i)=>ne(n,t,1-Math.exp(-e*i)),dy=(n,t)=>{let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},il=(n,t,e,i)=>n+dy(n,t)*(1-Math.exp(-e*i)),eu=null;function Dd(){if(eu)return eu;let n=new Uint8Array([90,150,210,255]),t=new ro(n,4,1,_o);return t.minFilter=tn,t.magFilter=tn,t.needsUpdate=!0,eu=t,t}function vn(n,t={}){return new go({color:n,gradientMap:Dd(),...t})}function wn(n,t=1.2,e={}){return new go({color:n,gradientMap:Dd(),emissive:new Mt(n),emissiveIntensity:t,...e})}function xr(n,t){let e=document.createElement("canvas");e.width=e.height=n;let i=e.getContext("2d");t(i,n);let s=new ur(e);return s.colorSpace=Ve,s}function Ot(n,t,e=0,i=0,s=0,r=null){let o=new me(n,t);return o.position.set(e,i,s),o.castShadow=!0,r&&r.add(o),o}var ni={v1:new A,v2:new A,v3:new A,q1:new cn,c1:new Mt};var sl={};function Nd(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Le,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ud(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=Ud(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ud(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ve(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var r1=new Ss(9001),o1=new Ss(4242),a1=new Ss(777),l1=new Ss(3131);var c1=new oe,h1=new cn,u1=new kn,f1=new A,d1=new A;var bo={};wi(bo,{init:()=>_y,update:()=>vy});var py=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,my=`
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
    float band = exp(-bd * bd * 34.0);
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
    float pat = vnoise(d * 7.0) * 0.6 + vnoise(d * 16.0) * 0.4;
    float mw = band * smoothstep(0.30, 0.75, pat);
    col += vec3(0.52, 0.60, 0.85) * (mw * nightAmt * 0.24);
    col += vec3(0.85, 0.82, 0.95) * (band * band * nightAmt * 0.05);

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
`,ke=n=>new Mt(n);function yn(n,t,e,i,s,r,o,a,l,c,h,u,f,d){return{p:n,top:ke(t),mid:ke(e),hor:ke(i),sun:ke(s),glow:r,light:ke(o),lightInt:a,hemiS:ke(l),hemiG:ke(c),hemiInt:h,cloud:ke(u),fogN:f,fogF:d}}var rl=[yn(0,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150),yn(.045,5011640,9681112,15782560,16771264,1.1,16767400,1.7,11455720,5924432,.75,16769228,170,1300),yn(.11,4556498,8570088,14478828,16773846,.65,16772552,2.1,12903158,6714972,.9,16514558,220,1500),yn(.25,4029906,8308968,14348018,16775400,.5,16773848,2.3,13625850,7109728,.95,16186108,260,1600),yn(.4,4685764,9355998,15327170,16772811,.7,16769970,2,13033456,6844506,.85,16643040,210,1450),yn(.47,5790356,12614242,16755540,16764808,1.4,16758129,1.5,11044496,5129272,.6,16762010,160,1300),yn(.5,5453166,12737364,16747078,16756838,1.9,16751192,1,9200264,4536882,.45,15767420,145,1200),yn(.545,2302034,5321310,10112592,16750688,1,12619904,.5,5260910,2630704,.32,6966364,115,1050),yn(.6,791088,1581642,2898528,16756848,.35,11454190,.4,2898526,1448998,.3,2897490,95,980),yn(.75,461860,1055290,2109518,16756848,.25,12440566,.5,2569818,1251876,.3,2436680,90,950),yn(.9,659498,1318466,2503252,16756848,.3,11716846,.42,2766424,1383205,.29,2699856,95,980),yn(.955,1843528,3945056,7226976,16763024,.8,13605508,.5,5787250,2762032,.34,5784664,110,1050),yn(1,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150)],wt={top:new Mt,mid:new Mt,hor:new Mt,sun:new Mt,light:new Mt,hemiS:new Mt,hemiG:new Mt,cloud:new Mt,glow:0,lightInt:0,hemiInt:0,fogN:100,fogF:1e3};function gy(n){let t=n-Math.floor(n),e=0;for(;e<rl.length-2&&rl[e+1].p<=t;)e++;let i=rl[e],s=rl[e+1],r=_n(i.p,s.p,t);wt.top.lerpColors(i.top,s.top,r),wt.mid.lerpColors(i.mid,s.mid,r),wt.hor.lerpColors(i.hor,s.hor,r),wt.sun.lerpColors(i.sun,s.sun,r),wt.light.lerpColors(i.light,s.light,r),wt.hemiS.lerpColors(i.hemiS,s.hemiS,r),wt.hemiG.lerpColors(i.hemiG,s.hemiG,r),wt.cloud.lerpColors(i.cloud,s.cloud,r),wt.glow=ne(i.glow,s.glow,r),wt.lightInt=ne(i.lightInt,s.lightInt,r),wt.hemiInt=ne(i.hemiInt,s.hemiInt,r),wt.fogN=ne(i.fogN,s.fogN,r),wt.fogF=ne(i.fogF,s.fogF,r)}var Gn={top:ke(1443593),mid:ke(3805459),hor:ke(6168342),light:ke(16740432),lightInt:.6,hemiS:ke(5776686),hemiG:ke(1510414),hemiInt:.34,cloud:ke(3675159),fogN:26,fogF:330},An={fog:ke(660503),light:ke(8839894),lightInt:.42,hemiS:ke(3116936),hemiG:ke(860452),hemiInt:.55,fogN:620,fogF:3200,dir:new A(.3,1,.22).normalize()},yo=46,Xi,Rn,Wn,su,Es,ru,qe,Mo,_r,ou,au=null,Re=0,De=0,ol=0,nu=4,Fd=0,Od=0,yi=Gi(659918),vo=new A,iu=new A,Wi=new A;function xy(n){let t=[[0,.1,0,1.7,1,1.25],[1.55,.05,.35,1.05,.72,.9],[-1.5,0,-.25,1.15,.8,1],[.55,.55,-.7,.85,.6,.8],[-.65,.5,.65,.7,.52,.72]],e=[];for(let[c,h,u,f,d,g]of t){let _=new qa(1,1);_.scale(f,d,g),_.translate(c,h,u),e.push(_)}let i=null;try{i=Nd(e)}catch{i=null}i||(i=e[0]),i.computeVertexNormals(),su=vn(16186108),Wn=new Ba(i,su,yo),Wn.instanceMatrix.setUsage(Vn),Wn.castShadow=!1,Wn.receiveShadow=!1,Wn.frustumCulled=!1,Es=new Float32Array(yo*3),ru=new Float32Array(yo);let s=new oe,r=new cn,o=new A,a=new A,l=new A(0,1,0);for(let c=0;c<yo;c++){let h=(yi()-.5)*2600,u=(yi()-.5)*2600,f=135+yi()*110;Es[c*3]=h,Es[c*3+1]=f,Es[c*3+2]=u,ru[c]=.6+yi()*.8;let d=9+yi()*17;r.setFromAxisAngle(l,yi()*Math.PI*2),o.set(d*(.8+yi()*.6),d*.55,d),s.compose(a.set(h,f,u),r,o),Wn.setMatrixAt(c,s)}n.add(Wn)}async function _y(n){let t=n.scene,e=new ys(1800,48,24),i=new Ae({uniforms:{uTop:{value:new Mt(4029906)},uMid:{value:new Mt(8308968)},uHor:{value:new Mt(14348018)},uSunDir:{value:new A(.8,.4,.3).normalize()},uMoonDir:{value:new A(-.8,-.4,-.3).normalize()},uSunCol:{value:new Mt(16775400)},uGlow:{value:.6},uNight:{value:0},uTime:{value:0},uFlash:{value:0},uSunI:{value:1}},vertexShader:py,fragmentShader:my,side:je,depthWrite:!1,fog:!1});Xi=new me(e,i),Xi.frustumCulled=!1,Xi.renderOrder=-100,Rn=i.uniforms,t.add(Xi),xy(t),qe=new Qa(16773848,2.3),qe.castShadow=!0;let s=n.quality&&n.quality.shadowMapSize||1024;qe.shadow.mapSize.set(s,s);let r=qe.shadow.camera;r.left=-60,r.right=60,r.top=60,r.bottom=-60,r.near=20,r.far=420,r.updateProjectionMatrix(),qe.shadow.bias=-35e-5,qe.shadow.normalBias=.7,t.add(qe,qe.target),Mo=new Ka(13625850,7109728,.95),t.add(Mo),_r=new Na(14348018,260,1600),t.fog=_r,ou=new Mt(14348018),t.background=ou,n.on("quality-changed",o=>{let a=o&&o.shadowMapSize||n.quality&&n.quality.shadowMapSize||1024;qe.shadow.map&&(qe.shadow.map.dispose(),qe.shadow.map=null),qe.shadow.mapSize.set(a,a)}),n.sky={sunDir:new A(.9,.3,.3).normalize(),sunLight:qe,setOverride(o){au=o==="shrine"||o==="boss"?o:null}}}function vy(n,t){if(!Xi)return;let e=n.time.dayPhase,i=n.time.elapsed,s=n.player&&n.player.position||n.camera.position,r=n.quality&&n.quality.drawDist||1,o=e*Math.PI*2;vo.set(Math.cos(o),Math.sin(o),.34).normalize(),iu.set(-Math.cos(o)*.92,-Math.sin(o),-.42).normalize();let a=vo.y,l=1-_n(-.14,.06,a),c=_n(-.12,.02,a);Re=Xt(Re,au==="shrine"?1:0,4,t),De=Xt(De,au==="boss"?1:0,2.5,t),Re<.001&&(Re=0),De<.001&&(De=0),De>.4&&(nu-=t,nu<=0&&(ol=.55+yi()*.45,nu=2.8+yi()*5.5)),ol=Math.max(0,ol-t*3.2);let h=ol*De;if(gy(e),De>0&&(wt.top.lerp(Gn.top,De),wt.mid.lerp(Gn.mid,De),wt.hor.lerp(Gn.hor,De),wt.light.lerp(Gn.light,De),wt.hemiS.lerp(Gn.hemiS,De),wt.hemiG.lerp(Gn.hemiG,De),wt.cloud.lerp(Gn.cloud,De),wt.glow=ne(wt.glow,0,De),wt.lightInt=ne(wt.lightInt,Gn.lightInt,De),wt.hemiInt=ne(wt.hemiInt,Gn.hemiInt,De),wt.fogN=ne(wt.fogN,Gn.fogN,De),wt.fogF=ne(wt.fogF,Gn.fogF,De)),Re>0&&(wt.top.lerp(An.fog,Re),wt.mid.lerp(An.fog,Re),wt.hor.lerp(An.fog,Re),wt.light.lerp(An.light,Re),wt.hemiS.lerp(An.hemiS,Re),wt.hemiG.lerp(An.hemiG,Re),wt.cloud.lerp(An.fog,Re),wt.glow=ne(wt.glow,0,Re),wt.lightInt=ne(wt.lightInt,An.lightInt,Re),wt.hemiInt=ne(wt.hemiInt,An.hemiInt,Re),wt.fogN=ne(wt.fogN,An.fogN,Re),wt.fogF=ne(wt.fogF,An.fogF,Re)),_r.color.copy(wt.hor),_r.near=wt.fogN*r,_r.far=Math.max(wt.fogF*r,_r.near+120),ou.copy(wt.hor),Xi.visible=Re<.98,Xi.visible&&(Xi.position.copy(s),Rn.uTop.value.copy(wt.top),Rn.uMid.value.copy(wt.mid),Rn.uHor.value.copy(wt.hor),Rn.uSunDir.value.copy(vo),Rn.uMoonDir.value.copy(iu),Rn.uSunCol.value.copy(wt.sun),Rn.uGlow.value=wt.glow,Rn.uSunI.value=(1-De)*(1-Re),Rn.uNight.value=l*(1-De)*(1-Re),Rn.uTime.value=i,Rn.uFlash.value=h),Wi.copy(vo).multiplyScalar(c).addScaledVector(iu,1-c),Re>0&&Wi.lerp(An.dir,Re),Wi.lengthSq()<.05&&Wi.set(.2,1,.1),Wi.y=Math.max(Wi.y,.08),Wi.normalize(),qe.position.copy(s).addScaledVector(Wi,170),qe.target.position.copy(s),qe.color.copy(wt.light),qe.intensity=wt.lightInt+h*1.2,Mo.color.copy(wt.hemiS),Mo.groundColor.copy(wt.hemiG),Mo.intensity=wt.hemiInt+h*.35,Wn.visible=Re<.98,Wn.visible){Fd+=t*2.4,Od+=t*.7;let u=Wn.instanceMatrix.array;for(let f=0;f<yo;f++){let d=ru[f],g=Es[f*3]+Fd*d,_=Es[f*3+2]+Od*d;u[f*16+12]=((g+1300)%2600+2600)%2600-1300,u[f*16+13]=Es[f*3+1]+Math.sin(i*.08+f*2.1)*4,u[f*16+14]=((_+1300)%2600+2600)%2600-1300}Wn.instanceMatrix.needsUpdate=!0,su.color.copy(wt.cloud)}n.sky.sunDir.copy(vo)}var To={};wi(To,{init:()=>ky,update:()=>Hy});var al={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yy=new lr(-1,1,1,-1,0,1),lu=class extends Le{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}},My=new lu,qi=class{constructor(t){this._mesh=new me(My,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,yy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var vr=class extends Mn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vi.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new qi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var So=class extends Mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ll=class extends Mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var cl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new et);this._width=i.width,this._height=i.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vr(al),this.copyPass.material.blending=Qn,this.clock=new pr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}So!==void 0&&(o instanceof So?i=!0:o instanceof ll&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hl=class extends Mn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Bd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class n extends Mn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new We(r,o,{type:xn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new We(r,o,{type:xn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Bd;this.highPassUniforms=Vi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=al;this.copyUniforms=Vi.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new zi,this.fsQuad=new qi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};yr.BlurDirectionX=new et(1,0);yr.BlurDirectionY=new et(0,1);var zd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ul=class extends Mn{constructor(){super();let t=zd;this.uniforms=Vi.clone(t.uniforms),this.material=new Za({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var rn=null,In=null,kd=null,Sr=null,Ue=null,$i=null,ws=null,Ts=new et,br=new Mt,Te=Math.random,V=(n,t)=>n+Te()*(t-n),by={name:"ArdiaGradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new et(1280,720)},uVignette:{value:.3},uSaturation:{value:1.055},uContrast:{value:.1},uGrain:{value:.014}},vertexShader:`
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
    }`},Sy=`
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
  }`,Ey=`
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
  }`;function Ty(){return xr(64,(n,t)=>{let e=t/2,i=n.createRadialGradient(e,e,0,e,e,e);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.85)"),i.addColorStop(.6,"rgba(255,255,255,0.28)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)})}function wy(){return xr(128,(n,t)=>{let e=Gi(3599),i=t/2;for(let r=0;r<9;r++){let o=e()*Math.PI*2,a=e()*t*.16,l=i+Math.cos(o)*a,c=i+Math.sin(o)*a,h=t*(.16+e()*.16),u=n.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.30)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.65,"rgba(255,255,255,0.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,t,t)})}function Ay(){return xr(64,(n,t)=>{let e=t/2;n.translate(e,e);let i=n.createLinearGradient(0,-24,0,24);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(185,185,185,1)"),n.fillStyle=i,n.beginPath(),n.moveTo(0,-23),n.bezierCurveTo(11,-13,12,8,0,23),n.bezierCurveTo(-12,8,-11,-13,0,-23),n.closePath(),n.fill(),n.strokeStyle="rgba(130,130,130,0.55)",n.lineWidth=1.6,n.beginPath(),n.moveTo(0,-19),n.lineTo(0,19),n.stroke()})}var Mr=17,E={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:1,size:.1,r:1,g:1,b:1,alpha:1,grav:0,drag:0,flut:0,spin:0,swirl:0,grow:0,fadeIn:.02,fadeOut:-1,pulse:0,rot:0};function Ce(n,t,e){E.x=n,E.y=t,E.z=e,E.vx=E.vy=E.vz=0,E.life=1,E.size=.1,E.r=E.g=E.b=1,E.alpha=1,E.grav=0,E.drag=0,E.flut=0,E.spin=0,E.swirl=0,E.grow=0,E.fadeIn=.02,E.fadeOut=-1,E.pulse=0,E.rot=0}var Eo=class{constructor(t,e,i,s){this.cap=t,this.count=0,this._last=0,this.data=new Float32Array(t*Mr);let r=new Le;this.aPos=new ve(new Float32Array(t*3),3).setUsage(Vn),this.aCol=new ve(new Float32Array(t*3),3).setUsage(Vn),this.aSiz=new ve(new Float32Array(t),1).setUsage(Vn),this.aAlp=new ve(new Float32Array(t),1).setUsage(Vn),this.aRot=new ve(new Float32Array(t),1).setUsage(Vn),r.setAttribute("position",this.aPos),r.setAttribute("aColor",this.aCol),r.setAttribute("aSize",this.aSiz),r.setAttribute("aAlpha",this.aAlp),r.setAttribute("aRot",this.aRot),r.setDrawRange(0,0),this.geo=r,this.mat=new Ae({uniforms:{uMap:{value:e},uScale:{value:600}},vertexShader:Sy,fragmentShader:Ey,blending:i,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1}),this.points=new hr(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,this.points.matrixAutoUpdate=!1}spawn(){if(this.count>=this.cap)return;let t=this.count++,e=t*3,i=this.aPos.array,s=this.aCol.array;i[e]=E.x,i[e+1]=E.y,i[e+2]=E.z,s[e]=E.r,s[e+1]=E.g,s[e+2]=E.b,this.aSiz.array[t]=E.size,this.aAlp.array[t]=E.fadeIn>0?0:E.alpha,this.aRot.array[t]=E.rot;let r=t*Mr,o=this.data;o[r]=E.vx,o[r+1]=E.vy,o[r+2]=E.vz,o[r+3]=0,o[r+4]=Math.max(.05,E.life),o[r+5]=E.size,o[r+6]=E.alpha,o[r+7]=E.grav,o[r+8]=E.drag,o[r+9]=E.flut,o[r+10]=E.spin,o[r+11]=E.swirl,o[r+12]=E.grow,o[r+13]=E.fadeIn,o[r+14]=E.fadeOut>=0?E.fadeOut:E.life*.35,o[r+15]=E.pulse,o[r+16]=Te()*6.2831}_copy(t,e){let i=t*3,s=e*3,r=this.aPos.array,o=this.aCol.array;r[s]=r[i],r[s+1]=r[i+1],r[s+2]=r[i+2],o[s]=o[i],o[s+1]=o[i+1],o[s+2]=o[i+2],this.aSiz.array[e]=this.aSiz.array[t],this.aAlp.array[e]=this.aAlp.array[t],this.aRot.array[e]=this.aRot.array[t];let a=t*Mr,l=e*Mr,c=this.data;for(let h=0;h<Mr;h++)c[l+h]=c[a+h]}update(t,e){let i=this.aPos.array,s=this.aSiz.array,r=this.aAlp.array,o=this.aRot.array,a=this.data,l=0;for(;l<this.count;){let c=l*Mr,h=a[c+4],u=a[c+3]+t;if(u>=h){this.count--,l!==this.count&&this._copy(this.count,l);continue}a[c+3]=u;let f=a[c],d=a[c+1],g=a[c+2];d-=a[c+7]*t;let _=a[c+8];if(_>0){let z=Math.max(0,1-_*t);f*=z,d*=z,g*=z}let m=a[c+11];if(m!==0){let z=m*t,B=Math.cos(z),G=Math.sin(z),K=f*B-g*G;g=f*G+g*B,f=K}a[c]=f,a[c+1]=d,a[c+2]=g;let p=l*3,T=i[p]+f*t,M=i[p+1]+d*t,x=i[p+2]+g*t,D=a[c+9];if(D>0){let z=a[c+16];T+=Math.cos(e*1.7+z)*D*t,x+=Math.sin(e*1.3+z*1.71)*D*t,M+=Math.sin(e*2.1+z*2.3)*D*.4*t}i[p]=T,i[p+1]=M,i[p+2]=x,o[l]+=a[c+10]*t;let C=u/h;s[l]=a[c+5]*(1+a[c+12]*C);let I=a[c+6],L=a[c+13];L>0&&u<L&&(I*=u/L);let S=h-u,y=a[c+14];S<y&&y>0&&(I*=S/y);let P=a[c+15];P>0&&(I*=.55+.45*Math.sin(e*P+a[c+16]*3)),r[l]=I,l++}this.geo.setDrawRange(0,this.count),(this.count>0||this._last>0)&&(this._flag(this.aPos,3),this._flag(this.aCol,3),this._flag(this.aSiz,1),this._flag(this.aAlp,1),this._flag(this.aRot,1)),this._last=this.count}_flag(t,e){t.needsUpdate=!0,t.clearUpdateRanges&&(t.clearUpdateRanges(),t.addUpdateRange(0,Math.max(this.count,1)*e))}};function Cn(n,t){let e=rn&&rn.quality.particleMul||1;return Math.max(1,Math.round((n.count!=null?n.count:t)*e))}function hn(n,t,e,i){return n&&n.color!=null?br.set(n.color):br.setRGB(t,e,i),br}function un(n,t){let e=V(n,t);E.r=br.r*e,E.g=br.g*e,E.b=br.b*e}var Hd={hit(n,t,e,i,s){Ce(n,t,e),hn(i,1.15,1.1,.92),un(.95,1),E.size=1*s,E.life=.15,E.alpha=.65,E.grow=1.6,E.fadeIn=0,E.fadeOut=.12,Ue.spawn();let r=Cn(i,20);for(let o=0;o<r;o++){Ce(n,t,e);let a=Te()*Math.PI*2,l=(Te()-.35)*1.5,c=V(3.2,8)*s;if(E.vx=Math.cos(a)*Math.cos(l)*c,E.vy=Math.sin(l)*c*.8+1.2,E.vz=Math.sin(a)*Math.cos(l)*c,E.grav=16,E.drag=1.2,E.life=V(.22,.5),E.size=V(.05,.11)*s,i&&i.color!=null)hn(i,1,1,1),un(.85,1.1);else{let h=Te();E.r=1.1,E.g=1.05-.28*h,E.b=.92-.55*h}E.fadeIn=0,E.fadeOut=.12,Ue.spawn()}},spark(n,t,e,i,s){let r=Cn(i,12);hn(i,1.05,.8,.38);for(let o=0;o<r;o++){Ce(n,t,e),un(.8,1.1);let a=Te()*Math.PI*2,l=V(1.6,4.4)*s;E.vx=Math.cos(a)*l,E.vz=Math.sin(a)*l,E.vy=V(.8,3)*s,E.grav=10,E.drag=1,E.life=V(.3,.65),E.size=V(.04,.09)*s,E.fadeIn=0,E.fadeOut=.15,Ue.spawn()}},death(n,t,e,i,s){let r=Cn(i,12);for(let a=0;a<r;a++){Ce(n+V(-.4,.4)*s,t+V(0,.7)*s,e+V(-.4,.4)*s);let l=V(.7,1.3);E.r=.16*l,E.g=.1*l,E.b=.22*l;let c=Te()*Math.PI*2,h=V(.1,.7);E.vx=Math.cos(c)*h,E.vz=Math.sin(c)*h,E.vy=V(.4,1.1),E.drag=1.8,E.spin=V(-1.2,1.2),E.life=V(1,1.9),E.size=V(.45,.8)*s,E.alpha=V(.26,.42),E.grow=1.6,E.fadeIn=.06,$i.spawn()}let o=Cn(i,14);hn(i,.6,.34,.9);for(let a=0;a<o;a++){Ce(n+V(-.5,.5)*s,t+V(.1,.9)*s,e+V(-.5,.5)*s),un(.75,1.1);let l=Te()*Math.PI*2,c=V(.2,.8);E.vx=Math.cos(l)*c,E.vz=Math.sin(l)*c,E.vy=V(.7,1.9),E.swirl=V(1.5,3.5)*(Te()<.5?-1:1),E.flut=.5,E.drag=.3,E.life=V(.9,1.8),E.size=V(.05,.11)*s,E.fadeIn=.1,Ue.spawn()}},grass(n,t,e,i,s){let r=Cn(i,10);for(let o=0;o<r;o++){Ce(n+V(-.3,.3),t+V(0,.3),e+V(-.3,.3)),i&&i.color!=null?(hn(i,1,1,1),un(.8,1.1)):(E.r=V(.28,.45),E.g=V(.52,.72),E.b=V(.18,.3));let a=Te()*Math.PI*2,l=V(.8,2.6)*s;E.vx=Math.cos(a)*l,E.vz=Math.sin(a)*l,E.vy=V(1.2,3.2)*s,E.grav=7,E.drag=.8,E.flut=1.2,E.rot=Te()*6.28,E.spin=V(-8,8),E.life=V(.7,1.4),E.size=V(.09,.16)*s,E.fadeIn=0,E.fadeOut=.2,ws.spawn()}},dust(n,t,e,i,s){let r=Cn(i,9);hn(i,.58,.52,.42);for(let o=0;o<r;o++){Ce(n+V(-.3,.3)*s,t+V(0,.25),e+V(-.3,.3)*s),un(.85,1.15);let a=Te()*Math.PI*2,l=V(.4,1.4)*s;E.vx=Math.cos(a)*l,E.vz=Math.sin(a)*l,E.vy=V(.2,.7),E.drag=2.2,E.spin=V(-.8,.8),E.life=V(.6,1.2),E.size=V(.3,.6)*s,E.alpha=V(.2,.33),E.grow=1.8,E.fadeIn=.05,$i.spawn()}},heal(n,t,e,i,s){let r=Cn(i,14);hn(i,1,.6,.72);for(let o=0;o<r;o++){let a=Te()*Math.PI*2,l=V(.15,.85)*s;Ce(n+Math.cos(a)*l,t+V(0,.6),e+Math.sin(a)*l),un(.85,1.05),E.vy=V(.5,1.2),E.flut=.4,E.pulse=V(2,4),E.life=V(1.3,2.2),E.size=V(.06,.12)*s,E.alpha=.85,E.fadeIn=.25,Ue.spawn()}},orb(n,t,e,i,s){let r=Cn(i,18);hn(i,.3,.92,.85);for(let o=0;o<r;o++){let a=Te()*Math.PI*2,l=V(.25,.8)*s;Ce(n+Math.cos(a)*l,t+V(0,.5),e+Math.sin(a)*l),un(.8,1.05);let c=V(1.2,2.2)*s;E.vx=-Math.sin(a)*c,E.vz=Math.cos(a)*c,E.vy=V(1,2.2),E.swirl=3,E.drag=.3,E.life=V(1.1,1.9),E.size=V(.06,.12)*s,E.fadeIn=.12,Ue.spawn()}},fire(n,t,e,i,s){for(let o=0;o<2;o++)Ce(n+V(-.2,.2),t+V(0,.3),e+V(-.2,.2)),hn(i,1,.42,.14),un(.85,1),E.size=V(.4,.6)*s,E.life=V(.2,.35),E.alpha=.35,E.grow=1.4,E.fadeIn=0,Ue.spawn();let r=Cn(i,15);for(let o=0;o<r;o++){if(Ce(n+V(-.25,.25)*s,t+V(0,.3),e+V(-.25,.25)*s),i&&i.color!=null)hn(i,1,1,1),un(.85,1.1);else{let c=Te();E.r=1.12,E.g=.5+.3*c,E.b=.14+.14*c}let a=Te()*Math.PI*2,l=V(.6,2.4)*s;E.vx=Math.cos(a)*l,E.vz=Math.sin(a)*l,E.vy=V(1.8,4.5)*s,E.grav=3.5,E.drag=.7,E.flut=.8,E.life=V(.5,1.1),E.size=V(.045,.1)*s,E.fadeIn=0,E.fadeOut=.18,Ue.spawn()}},magic(n,t,e,i,s){Ce(n,t,e),hn(i,.68,.48,1.05),un(.9,1),E.size=.85*s,E.life=.16,E.alpha=.5,E.grow=1.5,E.fadeIn=0,E.fadeOut=.13,Ue.spawn();let r=Cn(i,16);hn(i,.58,.36,.98);for(let o=0;o<r;o++){Ce(n,t,e),un(.8,1.1);let a=Te()*Math.PI*2,l=(Te()-.5)*2.4,c=V(1.8,4.5)*s;E.vx=Math.cos(a)*Math.cos(l)*c,E.vy=Math.sin(l)*c*.7+.8,E.vz=Math.sin(a)*Math.cos(l)*c,E.swirl=V(-3,3),E.drag=2.4,E.life=V(.5,1),E.size=V(.05,.13)*s,E.fadeIn=0,E.fadeOut=.2,Ue.spawn()}},leaf(n,t,e,i,s){let r=Cn(i,7);for(let o=0;o<r;o++){if(Ce(n+V(-1.2,1.2)*s,t+V(0,1.5)*s,e+V(-1.2,1.2)*s),i&&i.color!=null)hn(i,1,1,1),un(.8,1.1);else{let a=Te();E.r=.3+.25*a,E.g=V(.5,.68),E.b=.16+.1*a}E.vx=V(-.3,.3),E.vz=V(-.3,.3),E.vy=V(-.5,-.2),E.grav=.9,E.drag=.6,E.flut=1.6,E.rot=Te()*6.28,E.spin=V(-4,4),E.life=V(2.5,4.5),E.size=V(.1,.18)*s,E.fadeIn=.2,E.fadeOut=.5,ws.spawn()}},firefly(n,t,e,i,s){let r=Cn(i,5);hn(i,.72,.95,.38);for(let o=0;o<r;o++)Ce(n+V(-1.5,1.5)*s,t+V(.2,1.8)*s,e+V(-1.5,1.5)*s),un(.75,1),E.vx=V(-.15,.15),E.vy=V(-.05,.15),E.vz=V(-.15,.15),E.flut=.7,E.life=V(4,7),E.size=V(.05,.08)*s,E.alpha=.9,E.pulse=V(1.5,3),E.fadeIn=.8,E.fadeOut=1.2,Ue.spawn()}},Yi="plains",cu=0,hu={firefly:0,leaf:0,ember:0,heat:0,glint:0,fluff:0,rune:0,mote:0},Ye=0,Ze=0;function Ji(n,t,e){let i=Te()*Math.PI*2,s=V(t,e);Ye=n.x+Math.cos(i)*s,Ze=n.z+Math.sin(i)*s}function Ry(n,t){Ji(t,1,7);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(.2,1.8),Ze),E.r=.2,E.g=.82,E.b=.72,E.vy=V(.25,.6),E.flut=.25,E.life=V(2.5,4),E.size=V(.03,.07),E.alpha=.8,E.pulse=2.5,E.fadeIn=.5,E.fadeOut=.8,Ue.spawn()}function Cy(n,t){Ji(t,4,26);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(.4,2.2),Ze);let i=V(.7,1);E.r=.72*i,E.g=.95*i,E.b=.36*i,E.vx=V(-.15,.15),E.vy=V(-.05,.12),E.vz=V(-.15,.15),E.flut=.7,E.life=V(5,9),E.size=V(.05,.08),E.alpha=.9,E.pulse=V(1.4,2.8),E.fadeIn=1,E.fadeOut=1.4,Ue.spawn()}function Iy(n,t){Ji(t,3,24);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(3,8),Ze);let i=Te();E.r=.28+.24*i,E.g=V(.48,.66),E.b=.15+.1*i,E.vx=V(-.3,.3),E.vy=V(-.55,-.25),E.vz=V(-.3,.3),E.grav=.9,E.drag=.6,E.flut=1.6,E.rot=Te()*6.28,E.spin=V(-4,4),E.life=V(4,7),E.size=V(.09,.17),E.fadeIn=.4,E.fadeOut=.6,ws.spawn()}function Py(n,t){Ji(t,3,26);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(0,1),Ze);let i=Te();E.r=1.1,E.g=.45+.3*i,E.b=.12+.12*i,E.vy=V(.8,2.2),E.grav=-.4,E.flut=.6,E.life=V(1.2,2.6),E.size=V(.04,.09),E.fadeIn=.1,E.fadeOut=.4,Ue.spawn()}function Ly(n,t){Ji(t,2,20);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(.2,1),Ze);let i=V(.8,1.1);E.r=.95*i,E.g=.6*i,E.b=.36*i,E.vy=V(1,2),E.drag=.3,E.flut=.5,E.life=V(1.2,2),E.size=V(.8,1.4),E.alpha=.06,E.grow=1.2,E.fadeIn=.4,$i.spawn()}function Dy(n,t){Ji(t,2,28);let e=n.world;if(e.getHeight(Ye,Ze)>=e.waterLevel-.12)return;Ce(Ye,e.waterLevel+.04,Ze);let i=V(.7,1.1);E.r=.8*i,E.g=.98*i,E.b=1*i,E.life=V(.5,1.1),E.size=V(.03,.07),E.alpha=.9,E.pulse=8,E.fadeIn=.15,E.fadeOut=.3,Ue.spawn()}function Uy(n,t){Ji(t,4,26);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(.5,2.5),Ze);let i=V(.85,1);E.r=.95*i,E.g=.95*i,E.b=.9*i,E.vx=V(.25,.7),E.vy=V(.08,.3),E.vz=V(-.2,.2),E.flut=.9,E.life=V(5,8),E.size=V(.06,.1),E.alpha=.55,E.fadeIn=1,E.fadeOut=1.2,$i.spawn()}function Ny(n,t){Ji(t,3,22);let e=n.getGroundHeight(Ye,Ze);Ce(Ye,e+V(.2,3),Ze);let i=V(.7,1);E.r=.48*i,E.g=.28*i,E.b=.72*i,E.vy=V(.2,.5),E.flut=.4,E.life=V(2,4),E.size=V(.04,.08),E.alpha=.55,E.pulse=V(1.5,3),E.fadeIn=.6,E.fadeOut=.8,Ue.spawn()}function Zi(n,t,e,i,s,r){for(hu[n]+=t*e;hu[n]>=1;)hu[n]-=1,i(s,r)}function Fy(n,t){let e=n.player;if(!e||!n.world)return;let i=e.position,s=n.quality.particleMul||1;if(cu-=t,cu<=0&&(cu=.5,Yi=n.world.getBiome(i.x,i.z)||"plains"),n.state==="shrine"){Zi("rune",.9*s,t,Ry,n,i);return}n.time.isNight&&Yi!=="volcano"&&Yi!=="castle"&&Zi("firefly",1*s,t,Cy,n,i),Yi==="forest"?Zi("leaf",1.4*s,t,Iy,n,i):Yi==="volcano"?(Zi("ember",3*s,t,Py,n,i),Zi("heat",.7*s,t,Ly,n,i)):Yi==="lake"?Zi("glint",5*s,t,Dy,n,i):Yi==="plains"?n.time.isNight||Zi("fluff",.3*s,t,Uy,n,i):Yi==="castle"&&Zi("mote",.5*s,t,Ny,n,i)}function Vd(){if(In||!rn)return;let{renderer:n,scene:t,camera:e}=rn;n.getDrawingBufferSize(Ts);let i=new We(Math.max(1,Ts.x),Math.max(1,Ts.y),{type:xn,samples:4});In=new cl(n,i),In.addPass(new hl(t,e)),kd=new yr(new et(innerWidth,innerHeight),.38,.55,.82),In.addPass(kd),In.addPass(new ul),Sr=new vr(by),In.addPass(Sr),fl()}function fl(){if(!rn)return;In&&(In.setPixelRatio(rn.quality.pixelRatio||1),In.setSize(innerWidth,innerHeight)),rn.renderer.getDrawingBufferSize(Ts);let n=Ts.y/(2*Math.tan(yd.degToRad(rn.camera.fov)*.5));Ue&&(Ue.mat.uniforms.uScale.value=n,$i.mat.uniforms.uScale.value=n,ws.mat.uniforms.uScale.value=n),Sr&&Sr.uniforms.uRes.value.set(Ts.x,Ts.y)}function Oy(){rn&&(In&&rn.quality.postFX?(Sr&&(Sr.uniforms.uTime.value=rn.time.elapsed%1e3),In.render()):rn.renderer.render(rn.scene,rn.camera))}function By(n,t,e){if(!n||!Hd[t])return;let i=e||{},s=i.scale||1;Hd[t](n.x,n.y,n.z,i,s)}function zy(){fl()}async function ky(n){rn=n;let t=Ty(),e=wy(),i=Ay();Ue=new Eo(2e3,t,ti,950),$i=new Eo(2e3,e,mi,940),ws=new Eo(1200,i,mi,945),n.scene.add($i.points,ws.points,Ue.points),n.quality.postFX&&Vd(),fl(),n.on("quality-changed",s=>{s&&s.postFX&&!In&&Vd(),fl()}),n.effects={render:Oy,burst:By,onResize:zy}}function Hy(n,t){let e=n.time.elapsed;Ue.update(t,e),$i.update(t,e),ws.update(t,e),Fy(n,t)}var uu={};var rS=new A;var oS=new A,aS=new A,lS=new A,cS=new A;var Io={};wi(Io,{init:()=>iM,update:()=>sM});var fu=-.35,du=1.25,Gd=4,Wd=13,Xd=.0032,qd=.0026,Vy=.011,gl=1.6,Gy=.45,pu=.4,Yd=8,xl=55,Wy=61,Xy=7,qy=32,Yy=40,Zy=-650,Ki=0,fn=.3,dl=7.5,Tr=7.5,Mi=7.5,Rr="follow",pl=null,wo=0,Ao=0,Ro=1,Er=xl,wr=xl,Xn=null,Ar=0,mu=0,As=[0,0,0,0,0,0],ml=null,ii=new A(0,gl,250),dn=new A(0,8,262),on=new A,Rs=new A,Qi=new A,$y=new A(0,0,-560);function Jy(n){return n&&(n.pos||n.root&&n.root.position)||null}function Co(n,t){let e=t||null;e!==Xn&&(Xn=e,ml&&(ml.lockTarget=e),n.emit("lockon",{target:e}))}function Ky(n){let t=ye(n||0,0,1);if(!(t<=0)){Ar=Math.max(Ar,t),mu=0;for(let e=0;e<6;e++)As[e]=Math.random()*Math.PI*2}}function Qy(n,t,e,i,s,r){let o=0,a=Math.max(t.y-(n.getGroundHeight(t.x,t.z)+pu),.001);for(let l=1;l<=Yd;l++){let c=r*l/Yd,h=t.y+i*c,u=n.getGroundHeight(t.x+e*c,t.z+s*c)+pu,f=h-u;if(f<0){let d=a/(a-f);return ye(o+(c-o)*d-.2,1.3,r)}o=c,a=Math.max(f,.001)}return r}function jy(n,t){if(n!=="follow"&&Xn&&Co(t,null),Rr=n,wo=0,n==="title"&&(Ao=0),n==="follow"){on.copy(dn).sub(ii);let e=on.length();e>.05&&(Ki=Math.atan2(on.x,on.z),fn=ye(Math.asin(ye(on.y/e,-1,1)),fu,du)),Tr=ye(e,1.5,120),Mi=Tr,Ro=0}}function tM(n,t){let e=n.camera,i=n.player,s=n.input.mouse,r=n.state;if((r==="playing"||r==="shrine"||r==="boss")&&n.input.justPressed("KeyQ")){if(Xn)Co(n,null);else if(n.combat&&typeof n.combat.nearestTargetable=="function"){let x=n.combat.nearestTargetable(i.position,qy);x&&Co(n,x)}}let a=Jy(Xn);Xn&&(!Xn.alive||!a||a.distanceTo(i.position)>Yy)&&(Co(n,null),a=null),Xn&&a?(Ki-=s.dx*Xd*.35,Ki=il(Ki,Math.atan2(i.position.x-a.x,i.position.z-a.z),4.2,t),fn=ye(fn+s.dy*qd,fu,du),fn=Xt(fn,ye(fn,.22,.6),2.6,t)):(Ki-=s.dx*Xd,fn=ye(fn+s.dy*qd,fu,du)),dl=ye(dl+s.wheel*Vy,Gd,Wd),Ro=Math.min(1,Ro+t/1.1);let l=_n(0,1,Ro),c=ne(2.2,12,l),h=ne(1.8,6,l);if(Ro<1&&(fn=Xt(fn,ye(fn,.12,.85),(1-l)*2.5,t)),on.copy(i.position),on.y+=gl,Xn&&a){Rs.set(a.x,a.y+1.2,a.z).sub(on);let x=Rs.length();x>.001&&on.addScaledVector(Rs,Math.min(.32,3.5/x)),on.y+=.25}ii.lerp(on,1-Math.exp(-c*t));let u=ye(dl+(Xn?1.5:0),Gd,Wd+2);Tr=Xt(Tr,u,h,t);let f=Math.cos(fn),d=Math.sin(Ki)*f,g=Math.sin(fn),_=Math.cos(Ki)*f,m=Qy(n,ii,d,g,_,Tr);m<Mi?Mi=m:Mi=Xt(Mi,m,3.2,t),dn.set(ii.x+d*Mi,ii.y+g*Mi,ii.z+_*Mi);let p=n.getGroundHeight(dn.x,dn.z)+pu;dn.y<p&&(dn.y=p),e.position.copy(dn),Qi.copy(ii),Qi.y+=Gy,e.lookAt(Qi);let T=i.velocity;wr=(T?Math.hypot(T.x,T.z):0)>Xy?Wy:xl}function eM(n,t){let e=n.camera,i=n.player,s=n.world&&n.world.castleGatePos||$y;wo+=t;let r=1.5;if(Rr==="title"){Ao+=t;let a=i.position,l=.85+Ao*.07,c=14.5+Math.sin(Ao*.1+.6)*2.4,h=2.9+Math.sin(Ao*.06+1.5)*1.3;on.set(a.x+Math.sin(l)*c,a.y+h,a.z+Math.cos(l)*c);let u=.16+.34*Math.max(0,Math.cos(l));Qi.set(-a.x,0,Zy-a.z),Qi.lengthSq()>.001&&Qi.normalize(),Rs.set(a.x+Qi.x*26*u,a.y+gl+5.5*u,a.z+Qi.z*26*u),wr=50,r=1.7}else if(Rr==="bossIntro"){let a=_n(0,6.5,wo);on.set(s.x+ne(-9,7,a),s.y+ne(1.4,10.5,a),s.z+ne(30,24,a)),Rs.set(s.x,s.y+ne(5,26,a),s.z+ne(-4,-16,a)),wr=52,r=1.4}else{let a=_n(0,16,wo);on.set(s.x+Math.sin(wo*.05)*8,s.y+ne(5,130,a),s.z+ne(45,90,a)),Rs.set(s.x,s.y+ne(18,2,a),s.z+ne(-30,620,a)),wr=56,r=1.2}ii.lerp(Rs,1-Math.exp(-2.3*t)),dn.lerp(on,1-Math.exp(-r*t));let o=n.getGroundHeight(dn.x,dn.z)+1;dn.y<o&&(dn.y=o),e.position.copy(dn),e.lookAt(ii)}function nM(n,t){if(Ar<=0)return;mu+=t;let e=Ar*Math.exp(-3.4*mu);if(e<.003){Ar=0;return}let i=n.time.elapsed,s=n.camera;s.position.x+=e*.32*(Math.sin(i*33+As[0])*.62+Math.sin(i*51+As[1])*.38),s.position.y+=e*.26*(Math.sin(i*39+As[2])*.62+Math.sin(i*57+As[3])*.38),s.position.z+=e*.2*Math.sin(i*29+As[4]),s.rotateZ(e*.035*Math.sin(i*43+As[5]))}async function iM(n){let t=n.player;t&&t.position&&ii.set(t.position.x,t.position.y+gl,t.position.z),dn.copy(n.camera.position),Er=n.camera.fov||xl,wr=Er,Ki=0,fn=.3,dl=7.5,Tr=7.5,Mi=7.5,Rr="follow",pl=null,Xn=null,Ar=0,ml={lockTarget:null,setLockTarget(e){Co(n,e||null)},shake(e){Ky(e)},cinematic(e){pl=e==="title"||e==="bossIntro"||e==="ending"?e:null}},n.camera3p=ml,n.on("state",e=>{let i=e&&e.to;(i==="title"||i==="gameover")&&(pl=null)})}function sM(n,t){let e=n.camera,i=n.player;if(!e||!i||!i.position)return;let s=n.state==="title"?"title":pl||"follow";s!==Rr&&jy(s,n),Rr==="follow"?tM(n,t):eM(n,t),Er=Xt(Er,wr,4.5,t),Math.abs(e.fov-Er)>.002&&(e.fov=Er,e.updateProjectionMatrix()),nM(n,t)}var yl={};wi(yl,{init:()=>VM,update:()=>GM});var te=Gi(12220178),rM=-558,oM=120,aM=2,lM=140,Qd=90,jd=50,Zd=30,bi={hp:2,radius:.7,walk:1.15,run:4.2,notice:18,range:2,reach:2.7,dmg:.5,height:1.25,hitY:.7},Ir={hp:4,radius:.65,speed:4.2*1.3,range:2,reach:2.8,dmg:.5,height:1.8,hitY:1,max:6},ji={hp:2,radius:.6,near:8,far:20,fireCd:2.5,dmg:.5,height:.6,hitY:0},Pr=null,$e=null,Pn=[],vu=[],tp=[],Lo=[],es=[],Eu=[],Tu=[],vl=[],Cr=[],Se=null,yu=!1,gu=0,_l=0,_t=null,At=null,ns=new A;function is(n,t){try{Pr.audio&&Pr.audio.play(n,t)}catch{}}function qn(n,t,e){try{Pr.effects&&Pr.effects.burst(n,t,e)}catch{}}function wu(n){return n.pos||n.root&&n.root.position||null}function Yn(n,t,e){if(e<rM)return!1;let i=n.world?n.world.waterLevel:-9999;return n.getGroundHeight(t,e)>i-.5}function Mu(n,t,e,i=8){if(Yn(n,t,e))return{x:t,z:e};for(let s=0;s<12;s++){let r=te()*Math.PI*2,o=2+te()*i,a=t+Math.sin(r)*o,l=e+Math.cos(r)*o;if(Yn(n,a,l))return{x:a,z:l}}return{x:t,z:e}}function cM(){_t={sphere:new ys(1,10,8),cone:new fr(1,1,6),cone4:new fr(1,1,4),limb:new Hi(1,.82,2,7),box:new ki(1,1,1),skirt:new Hi(.26,.37,.26,9,1,!0),rib:new mo(.17,.028,5,10),rock:new Wa(1,0),gem:new Ya(.16,0)},_t.gem.scale(1,1.45,1),_t.tent=new Hi(.95,.95,1.7,3,1,!1,Math.PI/2),_t.tent.rotateZ(Math.PI/2),_t.tent.translate(0,.48,0);let n=new ho;n.moveTo(2.5,2.5),n.bezierCurveTo(2.5,2.5,2,0,0,0),n.bezierCurveTo(-3,0,-3,3.5,-3,3.5),n.bezierCurveTo(-3,5.5,-1,7.7,2.5,9.5),n.bezierCurveTo(6,7.7,8,5.5,8,3.5),n.bezierCurveTo(8,3.5,8,0,5,0),n.bezierCurveTo(3.5,0,2.5,2.5,2.5,2.5),_t.heart=new Xa(n,{depth:2.2,bevelEnabled:!0,bevelThickness:.8,bevelSize:.8,bevelSegments:1,steps:1}),_t.heart.center(),_t.heart.rotateZ(Math.PI),_t.heart.scale(.035,.035,.035),At={gobSkin:vn(10310195,{flatShading:!0}),gobDark:vn(8142632,{flatShading:!0}),cloth:vn(11901524,{flatShading:!0,side:On}),wood:vn(7819824,{flatShading:!0}),eyeY:wn(16765502,1.6),bone:vn(15262416,{flatShading:!0}),blade:vn(12174287,{flatShading:!0}),grip:vn(5126952,{flatShading:!0}),eyeR:wn(16726832,1.8),wispCore:wn(13732863,2.1),wispMid:wn(10112480,1.1,{transparent:!0,opacity:.45,depthWrite:!1}),wispShell:wn(8009152,.7,{transparent:!0,opacity:.22,depthWrite:!1,blending:ti}),stone:vn(9078135,{flatShading:!0}),flameO:wn(16747050,1.7),flameI:wn(16766826,2.2),tent:vn(9069122,{flatShading:!0}),heart:wn(16731501,1.1),gem:wn(5111688,1.4),fireball:wn(13659135,2.4),fireHalo:wn(11693055,1.2,{transparent:!0,opacity:.35,depthWrite:!1,blending:ti}),flash:new zi({color:16777215})}}function Au(n){let t=[];return n.traverse(e=>{e.isMesh&&t.push({m:e,mat:e.material})}),t}function hM(){let n=new fe,t=new fe;t.position.y=.5,n.add(t),Ot(_t.sphere,At.gobSkin,0,.16,0,t).scale.set(.3,.35,.27),Ot(_t.sphere,At.gobDark,0,.1,.1,t).scale.set(.2,.22,.17);let s=Ot(_t.skirt,At.cloth,0,-.02,0,t),r=new fe;r.position.set(0,.52,.02),t.add(r),Ot(_t.sphere,At.gobSkin,0,0,0,r).scale.set(.26,.24,.25);let a=Ot(_t.cone4,At.gobSkin,-.26,.08,-.02,r);a.scale.set(.09,.34,.045),a.rotation.z=1.25,a.rotation.y=-.25;let l=Ot(_t.cone4,At.gobSkin,.26,.08,-.02,r);l.scale.set(.09,.34,.045),l.rotation.z=-1.25,l.rotation.y=.25;let c=Ot(_t.cone,At.gobDark,0,-.03,.27,r);c.scale.set(.05,.16,.05),c.rotation.x=Math.PI/2,Ot(_t.sphere,At.eyeY,-.1,.04,.21,r).scale.setScalar(.045),Ot(_t.sphere,At.eyeY,.1,.04,.21,r).scale.setScalar(.045);let f=new fe;f.position.set(-.31,.34,0),t.add(f),Ot(_t.limb,At.gobSkin,0,-.16,0,f).scale.set(.065,.18,.065),Ot(_t.sphere,At.gobDark,0,-.36,0,f).scale.setScalar(.08);let g=new fe;g.position.set(.31,.34,0),t.add(g),Ot(_t.limb,At.gobSkin,0,-.16,0,g).scale.set(.065,.18,.065),Ot(_t.sphere,At.gobDark,0,-.36,0,g).scale.setScalar(.08);let m=new fe;m.position.set(0,-.36,.02),g.add(m);let p=Ot(_t.limb,At.wood,0,0,.22,m);p.scale.set(.035,.24,.035),p.rotation.x=Math.PI/2,Ot(_t.sphere,At.wood,0,0,.46,m).scale.set(.09,.09,.13);let M=new fe;M.position.set(-.12,.34,0),n.add(M),Ot(_t.limb,At.gobSkin,0,-.12,0,M).scale.set(.07,.14,.07),Ot(_t.sphere,At.gobDark,0,-.28,.04,M).scale.set(.085,.055,.115);let D=new fe;return D.position.set(.12,.34,0),n.add(D),Ot(_t.limb,At.gobSkin,0,-.12,0,D).scale.set(.07,.14,.07),Ot(_t.sphere,At.gobDark,0,-.28,.04,D).scale.set(.085,.055,.115),{root:n,p:{body:t,head:r,earL:a,earR:l,armL:f,armR:g,legL:M,legR:D,club:m},flash:Au(n)}}function uM(){let n=new fe,t=new fe;t.position.y=.98,n.add(t),Ot(_t.box,At.bone,0,0,0,t).scale.set(.26,.12,.16),Ot(_t.limb,At.bone,0,.2,0,t).scale.set(.03,.17,.03);for(let _=0;_<3;_++){let m=Ot(_t.rib,At.bone,0,.26+_*.1,0,t);m.rotation.x=Math.PI/2;let p=1-_*.1;m.scale.set(p,p*.78,.78)}let s=Ot(_t.limb,At.bone,0,.55,0,t);s.scale.set(.022,.19,.022),s.rotation.z=Math.PI/2;let r=new fe;r.position.set(0,.72,0),t.add(r),Ot(_t.sphere,At.bone,0,0,0,r).scale.set(.145,.155,.15),Ot(_t.box,At.bone,0,-.13,.02,r).scale.set(.13,.055,.11),Ot(_t.sphere,At.eyeR,-.055,.01,.125,r).scale.setScalar(.032),Ot(_t.sphere,At.eyeR,.055,.01,.125,r).scale.setScalar(.032);let l=new fe;l.position.set(-.24,.55,0),t.add(l),Ot(_t.limb,At.bone,0,-.27,0,l).scale.set(.028,.26,.028),Ot(_t.sphere,At.bone,0,-.27,0,l).scale.setScalar(.042),Ot(_t.sphere,At.bone,0,-.55,0,l).scale.setScalar(.05);let c=new fe;c.position.set(.24,.55,0),t.add(c),Ot(_t.limb,At.bone,0,-.27,0,c).scale.set(.028,.26,.028),Ot(_t.sphere,At.bone,0,-.27,0,c).scale.setScalar(.042),Ot(_t.sphere,At.bone,0,-.55,0,c).scale.setScalar(.05);let h=new fe;h.position.set(0,-.56,.02),c.add(h);let u=Ot(_t.limb,At.grip,0,0,.02,h);u.scale.set(.018,.07,.018),u.rotation.x=Math.PI/2,Ot(_t.box,At.grip,0,0,.12,h).scale.set(.15,.035,.035),Ot(_t.box,At.blade,0,0,.45,h).scale.set(.07,.018,.62);let f=Ot(_t.cone4,At.blade,0,0,.8,h);f.scale.set(.035,.07,.009),f.rotation.x=Math.PI/2;let d=new fe;d.position.set(-.1,.86,0),n.add(d),Ot(_t.limb,At.bone,0,-.42,0,d).scale.set(.03,.4,.03),Ot(_t.sphere,At.bone,0,-.42,0,d).scale.setScalar(.042),Ot(_t.box,At.bone,0,-.84,.03,d).scale.set(.07,.035,.15);let g=new fe;return g.position.set(.1,.86,0),n.add(g),Ot(_t.limb,At.bone,0,-.42,0,g).scale.set(.03,.4,.03),Ot(_t.sphere,At.bone,0,-.42,0,g).scale.setScalar(.042),Ot(_t.box,At.bone,0,-.84,.03,g).scale.set(.07,.035,.15),{root:n,p:{body:t,head:r,armL:l,armR:c,legL:d,legR:g,sword:h},flash:Au(n)}}function fM(){let n=new fe,t=new fe;n.add(t);let e=new me(_t.sphere,At.wispCore);e.scale.setScalar(.19),t.add(e);let i=new me(_t.sphere,At.wispMid);i.scale.setScalar(.27),t.add(i);let s=new me(_t.sphere,At.wispShell);s.scale.setScalar(.4),t.add(s);let r=new fe;r.rotation.x=.6,n.add(r);let o=new me(_t.sphere,At.wispCore);o.scale.setScalar(.045),o.position.set(.5,0,0),r.add(o);let a=new me(_t.sphere,At.wispCore);return a.scale.setScalar(.035),a.position.set(-.48,.06,0),r.add(a),n.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),{root:n,p:{coreG:t,shell:s,orbit:r},flash:Au(n)}}function dM(n,t){let e=new fe;e.position.copy(t);let i=t.y;for(let h=0;h<6;h++){let u=h/6*Math.PI*2+te()*.3,f=Ot(_t.rock,At.stone,Math.sin(u)*.55,.07,Math.cos(u)*.55,e);f.scale.setScalar(.11+te()*.06),f.rotation.set(te()*3,te()*3,te()*3)}for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,f=Ot(_t.limb,At.wood,Math.sin(u)*.16,.22,Math.cos(u)*.16,e);f.scale.set(.045,.26,.045),f.rotation.x=Math.cos(u)*.65,f.rotation.z=-Math.sin(u)*.65}let s=Ot(_t.cone,At.flameO,0,.42,0,e);s.scale.set(.2,.45,.2),s.castShadow=!1;let r=Ot(_t.cone,At.flameI,0,.38,0,e);r.scale.set(.11,.3,.11),r.castShadow=!1;let o=te()*Math.PI*2,a=Ot(_t.tent,At.tent,Math.sin(o)*2.6,0,Math.cos(o)*2.6,e);a.rotation.y=o+Math.PI/2+(te()-.5),a.position.y=n.getGroundHeight(t.x+a.position.x,t.z+a.position.z)-i;let l=o+2+te(),c=Ot(_t.box,At.wood,Math.sin(l)*1.9,.19,Math.cos(l)*1.9,e);return c.scale.setScalar(.38),c.rotation.y=te()*1.5,c.position.y=n.getGroundHeight(t.x+c.position.x,t.z+c.position.z)-i+.19,{group:e,flameO:s,flameI:r}}function Ru(n,t,e,i){let s={root:n.root,pos:n.root.position,hp:t.hp,maxHp:t.hp,alive:!0,radius:t.radius,name:e,isBoss:!1,damage(r,o){Cu(this,r,o)},_own:!0,_gone:!1,type:i,p:n.p,flash:n.flash,state:"patrol",t:0,animT:te()*6,phase:te()*Math.PI*2,yaw:te()*Math.PI*2,kb:new A,home:new A,staggerT:0,flashT:0,farAcc:0,colT:0,colCache:[],restT:0,hasTarget:!1,tx:0,tz:0,yOff:0,height:t.height,hitY:t.hitY,hitDone:!1,distP:999,camp:null,spot:null,hoverY:0,fireT:te()*1.5,dustT:0,_lastSwingId:-1};return s.root.rotation.y=s.yaw,s}function pM(n,t,e,i){let s=Ru(hM(),bi,"\u30B4\u30D6\u30EA\u30F3","goblin");return s.pos.set(t,n.getGroundHeight(t,e),e),s.home.copy(s.pos),s.camp=i,s.restT=te()*2,i.members.push(s),Pn.push(s),$e.add(s.root),s}function ep(n,t){t.clearedAt=-1;let e=2+Math.floor(te()*3);for(let i=0;i<e;i++){let s=i/e*Math.PI*2+te(),r=1.8+te()*1.8,o=Mu(n,t.center.x+Math.sin(s)*r,t.center.z+Math.cos(s)*r,5);pM(n,o.x,o.z,t)}}function mM(n,t,e){let i=Ru(uM(),Ir,"\u30DC\u30FC\u30F3\u30BD\u30EB\u30B8\u30E3\u30FC","skeleton");return i.pos.set(t,n.getGroundHeight(t,e),e),i.home.copy(i.pos),i.state="rise",i.yOff=-1.7,i.dustT=0,Lo.push(i),Pn.push(i),$e.add(i.root),qn(i.pos.clone(),"dust",{count:14}),i}function np(n,t){let e=Ru(fM(),ji,"\u9B54\u5C0E\u30A6\u30A3\u30B9\u30D7","wisp"),i=n.getGroundHeight(t.pos.x,t.pos.z);return e.pos.set(t.pos.x,i+1.5,t.pos.z),e.home.copy(t.pos),e.hoverY=i+1.5,e.state="hover",e.spot=t,t.enemy=e,Pn.push(e),$e.add(e.root),e}function gM(n){if(n.flashT<=0)for(let t of n.flash)t.m.material=At.flash;n.flashT=.08}function ip(n){for(let t of n.flash)t.m.material=t.mat}function Cu(n,t,e){let i=Pr;if(!i||!n||n._gone||!n.alive)return;if(!n._own){let r=!!n._dmgLock;if(r)n.hp=Math.max(0,(n.hp??1)-t),n.hp<=0&&(n.alive=!1);else if(typeof n.damage=="function"){n._dmgLock=!0;try{n.damage(t,e)}catch{}n._dmgLock=!1}else n.hp=Math.max(0,(n.hp??1)-t),n.hp<=0&&(n.alive=!1);if(!r){let o=wu(n);o&&($d(o.x,o.y+2.2,o.z,t),ns.set(o.x,o.y+1.5,o.z),qn(ns.clone(),"hit")),is("hit");let a=!n.alive||n.hp<=0;i.emit("enemy-hit",{enemy:n,pos:o?o.clone():null,damage:t,killed:a}),a&&!n._killEmitted&&(n._killEmitted=!0,i.emit("enemy-killed",{enemy:n,pos:o?o.clone():null}))}return}if(n.hp=Math.max(0,n.hp-t),gM(n),e){let r=n.pos.x-e.x,o=n.pos.z-e.z,a=Math.hypot(r,o)||1,l=n.type==="wisp"?3.2:5;n.kb.x+=r/a*l,n.kb.z+=o/a*l}n.staggerT=.35,$d(n.pos.x,n.root.position.y+n.height+.35,n.pos.z,t),ns.set(n.pos.x,n.root.position.y+n.hitY+.3,n.pos.z),qn(ns.clone(),"hit"),is("hit");let s=n.hp<=0;i.emit("enemy-hit",{enemy:n,pos:n.pos.clone(),damage:t,killed:s}),s?(n.alive=!1,n.state="dying",n.t=0,i.emit("enemy-killed",{enemy:n,pos:n.pos.clone()})):n.state!=="rise"&&n.state!=="dying"&&n.state!=="crumble"&&n.type!=="wisp"&&(n.state="stunned",n.t=0)}function bu(n,t,e,i){if(ns.set(t.pos.x,t.root.position.y+.5,t.pos.z),qn(ns.clone(),"death"),i&&is("kill"),e&&RM(n,t.pos.x,t.root.position.y,t.pos.z),t.flashT>0&&ip(t),$e.remove(t.root),t._gone=!0,t.alive=!1,t.camp){let s=t.camp.members.indexOf(t);s>=0&&t.camp.members.splice(s,1),t.camp.members.length===0&&(t.camp.clearedAt=n.time.elapsed)}if(t.spot&&(t.spot.enemy=null,t.spot.deadAt=n.time.elapsed),t.type==="skeleton"){let s=Lo.indexOf(t);s>=0&&Lo.splice(s,1)}}function xM(){for(let n=0;n<12;n++){let t=document.createElement("canvas");t.width=128,t.height=80;let e=t.getContext("2d"),i=new ur(t);i.colorSpace=Ve;let s=new cr({map:i,transparent:!0,depthTest:!1,depthWrite:!1}),r=new so(s);r.scale.set(.9,.56,1),r.visible=!1,r.renderOrder=60,$e.add(r),Tu.push({sp:r,g:e,tex:i,mat:s,t:99,active:!1,last:""})}}function $d(n,t,e,i){let s=null,r=null,o=-1;for(let l of Tu){if(!l.active){s=l;break}l.t>o&&(o=l.t,r=l)}if(s=s||r,!s)return;let a=i%1===0?String(i):i.toFixed(1);if(s.last!==a){let l=s.g;l.clearRect(0,0,128,80),l.font='700 46px Georgia, "Times New Roman", serif',l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle="rgba(30,24,18,0.7)",l.strokeText(a,64,42),l.fillStyle="#ffffff",l.fillText(a,64,42),s.tex.needsUpdate=!0,s.last=a}s.active=!0,s.t=0,s.sp.visible=!0,s.mat.opacity=1,s.sp.position.set(n+(te()-.5)*.4,t,e+(te()-.5)*.4)}function _M(n){for(let t of Tu){if(!t.active)continue;t.t+=n,t.sp.position.y+=n*1.1*Math.max(.15,1-t.t);let e=1+.35*Math.exp(-t.t*9);t.sp.scale.set(.9*e,.56*e,1),t.mat.opacity=t.t<.35?1:ye(1-(t.t-.35)/.5,0,1),t.t>=.9&&(t.active=!1,t.sp.visible=!1)}}var Jd=null;function vM(){let n=xr(128,t=>{t.font="900 104px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=18,t.strokeStyle="rgba(150,30,24,0.95)",t.strokeText("!",64,66),t.fillStyle="#fff8ee",t.fillText("!",64,66)});Jd=new cr({map:n,transparent:!0,depthTest:!1,depthWrite:!1});for(let t=0;t<6;t++){let e=new so(Jd);e.visible=!1,e.renderOrder=61,$e.add(e),vl.push({sp:e,e:null,t:0,active:!1})}}function yM(n){let t=vl.find(e=>!e.active)||vl[0];t.active=!0,t.t=0,t.e=n,t.sp.visible=!0,t.sp.position.set(n.pos.x,n.root.position.y+n.height+.6,n.pos.z)}function MM(n){for(let t of vl){if(!t.active)continue;if(t.t+=n,t.t>.5||!t.e||t.e._gone){t.active=!1,t.sp.visible=!1,t.e=null;continue}t.sp.position.set(t.e.pos.x,t.e.root.position.y+t.e.height+.6+t.t*.25,t.e.pos.z);let i=.72*_n(0,.1,t.t)*(1+.3*Math.exp(-t.t*12));t.sp.scale.set(i,i,1)}}var ts=240;function bM(){let n=new Float32Array(ts*3),t=new Float32Array(ts*3),e=new Float32Array(ts*3),i=new Float32Array(ts),s=new Float32Array(ts);for(let l=0;l<ts;l++)n[l*3+1]=-9999;let r=new Le;r.setAttribute("position",new ve(n,3).setUsage(Vn)),r.setAttribute("color",new ve(t,3).setUsage(Vn));let o=new ao({size:.4,vertexColors:!0,transparent:!0,opacity:.9,blending:ti,depthWrite:!1,sizeAttenuation:!0}),a=new hr(r,o);a.frustumCulled=!1,a.renderOrder=20,$e.add(a),Se={geo:r,pos:n,col:t,base:e,life:i,max:s,head:0}}function SM(n,t,e,i,s,r,o){let a=Se.head%ts;Se.head++,Se.pos[a*3]=n+(te()-.5)*.12,Se.pos[a*3+1]=t+(te()-.5)*.12,Se.pos[a*3+2]=e+(te()-.5)*.12,Se.base[a*3]=i,Se.base[a*3+1]=s,Se.base[a*3+2]=r,Se.life[a]=o,Se.max[a]=o}function EM(n){let t=!1;for(let e=0;e<ts;e++){if(Se.life[e]<=0)continue;t=!0,Se.life[e]-=n;let i=Math.max(0,Se.life[e]/Se.max[e]);Se.col[e*3]=Se.base[e*3]*i,Se.col[e*3+1]=Se.base[e*3+1]*i,Se.col[e*3+2]=Se.base[e*3+2]*i,Se.life[e]<=0&&(Se.pos[e*3+1]=-9999)}t&&(Se.geo.attributes.position.needsUpdate=!0,Se.geo.attributes.color.needsUpdate=!0)}function TM(){for(let n=0;n<10;n++){let t=new fe,e=new me(_t.sphere,At.fireball);e.scale.setScalar(.16),e.castShadow=!1,t.add(e);let i=new me(_t.sphere,At.fireHalo);i.scale.setScalar(.3),i.castShadow=!1,t.add(i),t.visible=!1,$e.add(t),Eu.push({g:t,core:e,halo:i,active:!1,vel:new A,life:0,emitT:0})}}function wM(n,t){let e=Eu.find(s=>!s.active);if(!e)return;e.active=!0,e.life=0,e.emitT=0,e.g.visible=!0,e.g.position.set(t.pos.x,t.root.position.y+.1,t.pos.z);let i=n.player.position;ns.set(i.x-e.g.position.x,i.y+1-e.g.position.y,i.z-e.g.position.z).normalize(),e.vel.copy(ns).multiplyScalar(11),is("magic"),qn(e.g.position.clone(),"magic",{count:6})}function xu(n,t){t&&qn(n.g.position.clone(),t),n.active=!1,n.g.visible=!1}function AM(n,t){let e=n.player.position;for(let i of Eu){if(!i.active)continue;i.life+=t,i.g.position.addScaledVector(i.vel,t);let s=i.g.position,r=1+Math.sin(n.time.elapsed*22+i.life*7)*.15;for(i.core.scale.setScalar(.16*r),i.halo.scale.setScalar(.3*(2-r)),i.emitT-=t;i.emitT<=0;)i.emitT+=.03,SM(s.x,s.y,s.z,.85,.5,1,.45);let o=e.x-s.x,a=e.y+1-s.y,l=e.z-s.z;if(o*o+a*a+l*l<1.2*1.2){try{n.player.damage(ji.dmg,s)}catch{}is("burn"),xu(i,"fire");continue}if(s.y<=n.getGroundHeight(s.x,s.z)+.15){xu(i,"fire");continue}i.life>6&&xu(i,"magic")}}function RM(n,t,e,i){if(te()<.4)Kd(n,"heart",t,e,i);else{let s=1+Math.floor(te()*3);for(let r=0;r<s;r++)Kd(n,"gem",t,e,i)}}function Kd(n,t,e,i,s){if(es.length>36){let o=es.shift();$e.remove(o.mesh)}let r=new me(t==="heart"?_t.heart:_t.gem,t==="heart"?At.heart:At.gem);r.castShadow=!0,r.position.set(e,i+.7,s),$e.add(r),es.push({kind:t,mesh:r,vel:new A((te()-.5)*2.6,3.2+te()*1.6,(te()-.5)*2.6),age:0,grounded:!1,baseY:0,phase:te()*Math.PI*2,dieK:0})}function CM(n,t){let e=n.player.position;for(let i=es.length-1;i>=0;i--){let s=es[i],r=s.mesh;if(s.age+=t,s.age>Zd){s.dieK+=t/.4;let h=Math.max(.001,1-s.dieK);r.scale.setScalar(h),s.dieK>=1&&($e.remove(r),es.splice(i,1));continue}if(r.visible=s.age<Zd-4||Math.sin(n.time.elapsed*16)>-.2,s.grounded)s.baseY=n.getGroundHeight(r.position.x,r.position.z)+.25,r.position.y=s.baseY+.1+Math.sin(n.time.elapsed*3+s.phase)*.08,r.rotation.y+=t*2.4;else{s.vel.y-=12*t,r.position.addScaledVector(s.vel,t);let h=n.getGroundHeight(r.position.x,r.position.z)+.25;r.position.y<=h&&s.vel.y<0&&(s.grounded=!0,s.baseY=h)}let o=e.x-r.position.x,a=e.z-r.position.z,l=e.y+.8-r.position.y,c=Math.sqrt(o*o+l*l+a*a);if(s.kind==="gem"){if(c<2.5&&c>.001){let h=(6.5*(1-c/2.8)+2.5)*t/c;r.position.x+=o*h,r.position.y+=l*h,r.position.z+=a*h}c<.85&&(n.player.gems+=1,n.emit("pickup",{kind:"gem",pos:r.position.clone()}),is("pickup"),qn(r.position.clone(),"spark",{color:8257456,count:8}),$e.remove(r),es.splice(i,1))}else c<1.15&&(n.player.heal(1),n.emit("pickup",{kind:"heart",pos:r.position.clone()}),is("heart"),qn(r.position.clone(),"heal"),$e.remove(r),es.splice(i,1))}}function Si(n,t,e){n.yaw=Math.atan2(t-n.pos.x,e-n.pos.z)}function Po(n,t,e,i,s,r){let o=e-t.pos.x,a=i-t.pos.z,l=Math.hypot(o,a);if(l<.001)return!0;t.yaw=Math.atan2(o,a);let c=Math.min(s*r,l),h=t.pos.x+o/l*c,u=t.pos.z+a/l*c;return Yn(n,h,u)?(t.pos.x=h,t.pos.z=u,!0):(t.hasTarget=!1,!1)}function IM(n,t){for(let e=0;e<6;e++){let i=te()*Math.PI*2,s=2+te()*6,r=t.home.x+Math.sin(i)*s,o=t.home.z+Math.cos(i)*s;if(Yn(n,r,o)){t.tx=r,t.tz=o,t.hasTarget=!0,t.t=0;return}}t.restT=1.5}function PM(n,t,e){if(t.colT-=e,t.colT<=0){t.colT=.7,t.colCache.length=0;let i=n.colliders;if(i)for(let s=0;s<i.length&&t.colCache.length<6;s++){let r=i[s],o=r.x-t.pos.x,a=r.z-t.pos.z;o*o+a*a<100&&t.colCache.push(r)}}for(let i of t.colCache){let s=t.pos.x-i.x,r=t.pos.z-i.z,o=(i.radius||.5)+t.radius*.6,a=s*s+r*r;if(a<o*o&&a>1e-4){let l=Math.sqrt(a),c=o-l,h=t.pos.x+s/l*c,u=t.pos.z+r/l*c;Yn(n,h,u)&&(t.pos.x=h,t.pos.z=u)}}}function _u(n,t,e){let i=n.p;n.animT+=t*(5+e*6.5);let s=Math.sin(n.animT),r=.45+e*.5;i.legL.rotation.x=s*r,i.legR.rotation.x=-s*r,i.armL.rotation.x=Xt(i.armL.rotation.x,-s*r*.7,14,t),i.armR.rotation.x=Xt(i.armR.rotation.x,s*r*.45,14,t),i.body.position.y=.5+Math.abs(Math.cos(n.animT))*.05*(.4+e),i.body.rotation.x=Xt(i.body.rotation.x,.05+e*.22,8,t),i.body.position.x=0,i.earL&&(i.earL.rotation.z=1.25+Math.sin(n.animT*.7)*.07,i.earR.rotation.z=-1.25-Math.cos(n.animT*.7)*.07,i.head.rotation.y=Xt(i.head.rotation.y,0,8,t))}function Su(n,t){let e=n.p;n.animT+=t*2,e.body.position.y=.5+Math.sin(n.animT)*.015,e.body.position.x=0,e.legL.rotation.x=Xt(e.legL.rotation.x,0,8,t),e.legR.rotation.x=Xt(e.legR.rotation.x,0,8,t),e.armL.rotation.x=Xt(e.armL.rotation.x,0,6,t),e.armR.rotation.x=Xt(e.armR.rotation.x,0,6,t),e.body.rotation.x=Xt(e.body.rotation.x,.04,6,t),e.head&&(e.head.rotation.y=Math.sin(n.animT*.35)*.3)}function LM(n,t,e){let i=n.p;n.animT+=t*9.5;let s=Math.sin(n.animT);i.legL.rotation.x=s*.85,i.legR.rotation.x=-s*.85,i.armL.rotation.x=Xt(i.armL.rotation.x,-s*.5-.15,14,t),i.armR.rotation.x=Xt(i.armR.rotation.x,s*.3-.2,14,t);let r=e.time.elapsed;i.armL.rotation.z=Math.sin(r*43+n.phase)*.045,i.armR.rotation.z=-Math.sin(r*47+n.phase)*.045,i.head.rotation.z=Math.sin(r*31+n.phase)*.05,i.body.position.y=.98+Math.abs(Math.cos(n.animT))*.06,i.body.rotation.x=Xt(i.body.rotation.x,.22,8,t)}function Iu(n,t,e){t.t+=e;let i=t.p;if(t.type==="wisp"){let r=Math.min(1,t.t/.45);t.root.scale.setScalar(Math.max(.01,1-.9*r*r)),i.coreG.rotation.y+=e*14,t.t>=.45&&(qn(t.pos.clone(),"magic",{count:10}),bu(n,t,!0,!0));return}t.t<.16&&i.body?i.body.rotation.z=Math.sin(t.t*46)*.12:i.body&&(i.body.rotation.z=Xt(i.body.rotation.z,0,10,e));let s=_n(.12,.55,t.t);t.root.rotation.x=-s*1.45,t.yOff=-.06*s,t.t>=.68&&bu(n,t,!0,!0)}function DM(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0;switch(t.t+=e,t.state){case"patrol":{if(o&&i<bi.notice){t.state="alert",t.t=0,yM(t),is("alert"),Si(t,r.x,r.z);break}if(Math.hypot(t.home.x-t.pos.x,t.home.z-t.pos.z)>20){Po(n,t,t.home.x,t.home.z,bi.run*.8,e),_u(t,e,.7);break}if(t.restT>0){t.restT-=e,Su(t,e);break}(!t.hasTarget||t.t>9)&&IM(n,t),t.hasTarget&&(Po(n,t,t.tx,t.tz,bi.walk,e),Math.hypot(t.tx-t.pos.x,t.tz-t.pos.z)<.4&&(t.hasTarget=!1,t.restT=1+te()*2.5),_u(t,e,.15));break}case"alert":{Si(t,r.x,r.z),s.body.rotation.x=Xt(s.body.rotation.x,-.14,12,e),s.body.position.y=.5+Math.sin(t.t*30)*.02,t.t>=.5&&(t.state="chase",t.t=0);break}case"chase":{if(!o||i>30){t.state="patrol",t.t=0,t.hasTarget=!1;break}if(Si(t,r.x,r.z),i<=bi.range){t.state="windup",t.t=0;break}Po(n,t,r.x,r.z,bi.run,e),_u(t,e,1);break}case"windup":{Si(t,r.x,r.z);let a=Math.min(1,t.t/.6);s.armR.rotation.x=Xt(s.armR.rotation.x,-2.6,16,e),s.armL.rotation.x=Xt(s.armL.rotation.x,-.5,10,e),s.body.rotation.x=Xt(s.body.rotation.x,-.12,10,e),s.body.position.x=Math.sin(n.time.elapsed*55)*.022*a,s.legL.rotation.x=Xt(s.legL.rotation.x,.25,10,e),s.legR.rotation.x=Xt(s.legR.rotation.x,-.25,10,e),t.t>=.6&&(t.state="swing",t.t=0,t.hitDone=!1);break}case"swing":{let a=Math.min(1,t.t/.16);if(s.armR.rotation.x=ne(-2.6,1.05,a*(2-a)),s.body.rotation.x=ne(-.12,.42,a),s.body.position.x=0,!t.hitDone&&t.t>=.1&&(t.hitDone=!0,o&&i<bi.reach))try{n.player.damage(bi.dmg,t.pos)}catch{}t.t>=.3&&(t.state="recover",t.t=0);break}case"recover":{s.armR.rotation.x=Xt(s.armR.rotation.x,0,6,e),s.armL.rotation.x=Xt(s.armL.rotation.x,0,6,e),s.body.rotation.x=Xt(s.body.rotation.x,.05,6,e),s.body.position.y=.5+Math.sin(t.t*5)*.02,Si(t,r.x,r.z),t.t>=1&&(t.t=0,t.state=o?i<=bi.range+.3?"windup":i<30?"chase":"patrol":"patrol");break}case"stunned":{s.body.rotation.x=Xt(s.body.rotation.x,-.5,14,e),s.armR.rotation.x=Xt(s.armR.rotation.x,-.6,10,e),t.t>=.3&&(t.state="chase",t.t=0);break}case"dying":Iu(n,t,e);return}}function UM(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0;switch(t.t+=e,t.state){case"rise":{let a=Math.min(1,t.t/.8);t.yOff=-1.7*(1-a*a*(3-2*a)),t.dustT-=e,t.dustT<=0&&(t.dustT=.22,qn(t.pos.clone(),"dust",{count:6})),s.armL.rotation.x=-2.2*(1-a),s.armR.rotation.x=-2.2*(1-a),t.t>=.8&&(t.state="chase",t.t=0,t.yOff=0);break}case"chase":{if(!o){Su(t,e);break}if(Si(t,r.x,r.z),i<=Ir.range){t.state="windup",t.t=0;break}i<100?(Po(n,t,r.x,r.z,Ir.speed,e),LM(t,e,n)):Su(t,e);break}case"windup":{Si(t,r.x,r.z);let a=Math.min(1,t.t/.45);s.armR.rotation.x=Xt(s.armR.rotation.x,-2.9,18,e),s.armR.rotation.z=Xt(s.armR.rotation.z,.4,12,e),s.body.rotation.x=Xt(s.body.rotation.x,-.1,10,e),s.body.position.x=Math.sin(n.time.elapsed*50)*.012*a,t.t>=.45&&(t.state="swing",t.t=0,t.hitDone=!1);break}case"swing":{let a=Math.min(1,t.t/.14);if(s.armR.rotation.x=ne(-2.9,1.15,a*(2-a)),s.armR.rotation.z=ne(.4,-.15,a),s.body.rotation.x=ne(-.1,.4,a),s.body.position.x=0,!t.hitDone&&t.t>=.08&&(t.hitDone=!0,o&&i<Ir.reach))try{n.player.damage(Ir.dmg,t.pos)}catch{}t.t>=.24&&(t.state="recover",t.t=0);break}case"recover":{s.armR.rotation.x=Xt(s.armR.rotation.x,-.2,8,e),s.armR.rotation.z=Xt(s.armR.rotation.z,0,8,e),s.body.rotation.x=Xt(s.body.rotation.x,.15,8,e),Si(t,r.x,r.z),t.t>=.7&&(t.state="chase",t.t=0);break}case"stunned":{s.body.rotation.x=Xt(s.body.rotation.x,-.45,14,e),t.t>=.18&&(t.state="chase",t.t=0);break}case"crumble":{let a=Math.min(1,t.t/.6);t.yOff=-1.3*a*a,t.root.scale.set(1-a*.35,Math.max(.05,1-a*.85),1-a*.35),t.root.rotation.z=a*.4,t.dustT-=e,t.dustT<=0&&(t.dustT=.2,qn(t.pos.clone(),"dust",{count:4})),t.t>=.6&&bu(n,t,!1,!1);break}case"dying":Iu(n,t,e);return;default:{t.state="chase";break}}}function NM(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0,a=n.time.elapsed;if(t.t+=e,t.state==="dying"){Iu(n,t,e);return}let l=n.getGroundHeight(t.pos.x,t.pos.z);t.hoverY=Xt(t.hoverY,l+1.5,3,e),t.root.position.y=t.hoverY+Math.sin(a*1.7+t.phase)*.25,s.orbit.rotation.y+=e*2.6;let c=1+Math.sin(a*5+t.phase)*.1;s.shell.scale.setScalar(.4*c);let h=_n(ji.fireCd-.4,ji.fireCd,t.fireT);if(s.coreG.scale.setScalar(1+h*.5+Math.sin(a*9+t.phase)*.05),o&&i<45){Si(t,r.x,r.z);let u=0,f=0,d=0,g=(r.x-t.pos.x)/(i||1),_=(r.z-t.pos.z)/(i||1);if(i<ji.near)u=-g,f=-_,d=3;else if(i>ji.far)u=g,f=_,d=2.2;else{let T=Math.sin(a*.35+t.phase)>0?1:-1;u=-_*T,f=g*T,d=1.2}let m=t.pos.x+u*d*e,p=t.pos.z+f*d*e;Yn(n,m,p)&&(t.pos.x=m,t.pos.z=p),i<32&&(t.fireT+=e,t.fireT>=ji.fireCd&&(t.fireT=te()*.3,wM(n,t)))}else if(t.fireT=Math.min(t.fireT,ji.fireCd-.6),Math.hypot(t.home.x-t.pos.x,t.home.z-t.pos.z)>6)Po(n,t,t.home.x,t.home.z,1.5,e);else{let f=t.pos.x+Math.sin(a*.5+t.phase)*.5*e,d=t.pos.z+Math.cos(a*.4+t.phase)*.5*e;Yn(n,f,d)&&(t.pos.x=f,t.pos.z=d)}}function FM(n,t,e){let i=n.player.position,s=Math.hypot(i.x-t.pos.x,i.z-t.pos.z);t.distP=s;let r=s<lM;if(t.root.visible!==r&&(t.root.visible=r),s>oM&&t.state!=="dying"&&t.state!=="crumble"){if(t.farAcc+=e,t.farAcc<aM)return;e=Math.min(t.farAcc,.5),t.farAcc=0}if(t.flashT>0&&(t.flashT-=e,t.flashT<=0&&ip(t)),t.kb.lengthSq()>4e-4){let o=t.pos.x+t.kb.x*e,a=t.pos.z+t.kb.z*e;Yn(n,o,a)&&(t.pos.x=o,t.pos.z=a),t.kb.multiplyScalar(Math.max(0,1-7*e))}t.staggerT>0&&(t.staggerT-=e),t.type==="goblin"?DM(n,t,e,s):t.type==="skeleton"?UM(n,t,e,s):NM(n,t,e,s),!t._gone&&(t.type!=="wisp"&&(t.root.position.y=n.getGroundHeight(t.pos.x,t.pos.z)+t.yOff,s<100&&t.alive&&PM(n,t,e)),t.root.rotation.y=il(t.root.rotation.y,t.yaw,10,e))}function OM(n){Cr.length=0;for(let t of Pn)t._own&&t.alive&&t.type!=="wisp"&&t.distP<90&&Cr.push(t);for(let t=0;t<Cr.length;t++)for(let e=t+1;e<Cr.length;e++){let i=Cr[t],s=Cr[e],r=s.pos.x-i.pos.x,o=s.pos.z-i.pos.z,a=i.radius+s.radius-.35,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l),h=(a-c)*.5,u=r/c*h,f=o/c*h;Yn(n,i.pos.x-u,i.pos.z-f)&&(i.pos.x-=u,i.pos.z-=f),Yn(n,s.pos.x+u,s.pos.z+f)&&(s.pos.x+=u,s.pos.z+=f)}}}function BM(n,t){let e=n.player.position,i=n.time.elapsed;for(let s=0;s<vu.length;s++){let r=vu[s],o=Math.hypot(e.x-r.center.x,e.z-r.center.z),a=o<170;r.props.group.visible!==a&&(r.props.group.visible=a),a&&(r.props.flameO.scale.set(.2*(1+Math.sin(i*11+s*2.1)*.12),.45*(1+Math.sin(i*13.7+s)*.2),.2*(1+Math.cos(i*10.3+s)*.12)),r.props.flameI.scale.set(.11*(1+Math.sin(i*17+s)*.18),.3*(1+Math.sin(i*19.3+s*1.7)*.25),.11)),_l<=0&&r.members.length===0&&r.clearedAt>=0&&i-r.clearedAt>Qd&&o>jd&&ep(n,r)}}function zM(n,t){let e=n.time.isNight;if(e&&n.state==="playing"&&n.player.hp>0&&(gu-=t,gu<=0&&(gu=2.2+te()*1.5,Lo.length<Ir.max))){let i=n.player.position;for(let s=0;s<8;s++){let r=te()*Math.PI*2,o=30+te()*30,a=i.x+Math.sin(r)*o,l=i.z+Math.cos(r)*o,c="plains";try{c=n.world.getBiome(a,l)}catch{}if(c==="plains"&&Yn(n,a,l)){mM(n,a,l);break}}}if(yu&&!e)for(let i of Lo)i.state!=="crumble"&&i.state!=="dying"&&(i.alive=!1,i.state="crumble",i.t=0);yu=e}function kM(n){let t=n.player.position,e=n.time.elapsed;for(let i of tp)!i.enemy&&e-i.deadAt>Qd&&Math.hypot(t.x-i.pos.x,t.z-i.pos.z)>jd&&np(n,i)}function HM(n){let t=null;try{t=n.player.getAttackHit?n.player.getAttackHit():null}catch{}if(!t||!t.pos)return;let e=t.radius||1;for(let i of Pn){if(!i.alive||i._gone||i._lastSwingId===t.swingId)continue;let s=wu(i);if(!s)continue;let r=t.pos.x-s.x,o=t.pos.z-s.z,a=e+(i.radius||.6);if(r*r+o*o>a*a)continue;let l=i._own?i.root.position.y+i.hitY:s.y,c=i._own?2.4:4.5;Math.abs(t.pos.y-l)>c||(i._lastSwingId=t.swingId,Cu(i,t.damage??1,n.player.position))}}async function VM(n){Pr=n,cM(),$e=new fe,$e.name="combat",n.scene.add($e),xM(),vM(),bM(),TM();let t=[[70,150],[-130,90],[150,-40],[410,190],[500,100],[-340,330],[470,-350]];for(let[s,r]of t){let o=Mu(n,s,r,14),a=new A(o.x,n.getGroundHeight(o.x,o.z),o.z),l={center:a,members:[],clearedAt:-1,props:dM(n,a)};$e.add(l.props.group),vu.push(l),ep(n,l)}let e=[[505,-390],[585,-470],[530,-515],[612,-408]],i=[];try{for(let s=-880;s<=880;s+=80)for(let r=-520;r<=880;r+=80)n.world.getBiome(s,r)==="ruins"&&i.push([s,r])}catch{}for(let s of i){if(e.length>=8)break;e.every(([r,o])=>Math.hypot(r-s[0],o-s[1])>60)&&e.push(s)}for(let[s,r]of e){let o=Mu(n,s,r,10),a={pos:new A(o.x,0,o.z),enemy:null,deadAt:-999};tp.push(a),np(n,a)}yu=n.time.isNight,n.combat={enemies:Pn,nearestTargetable(s,r=32){if(!s)return null;let o=null,a=r;for(let l of Pn){if(!l.alive||l._gone)continue;let c=wu(l);if(!c)continue;let h=s.distanceTo(c);h<=a&&(a=h,o=l)}return o},registerEnemy(s){s&&Pn.indexOf(s)<0&&Pn.push(s)},damageEnemy(s,r,o){Cu(s,r,o)}}}function GM(n,t){if(!(!n.combat||!n.player)&&n.state!=="shrine"){_l-=t,BM(n,t),_l<=0&&(_l=1,kM(n)),zM(n,t),At.wispCore.emissiveIntensity=1.9+Math.sin(n.time.elapsed*8.5)*.55;for(let e=Pn.length-1;e>=0;e--){let i=Pn[e];i._own&&(FM(n,i,t),i._gone&&Pn.splice(e,1))}OM(n),HM(n),AM(n,t),CM(n,t),_M(t),MM(t),EM(t)}}var Ml={};wi(Ml,{init:()=>WM,update:()=>XM});async function WM(n){n.shrines={list:[{pos:new A(180,0,80),name:"\u529B\u306E\u7960",completed:!1},{pos:new A(-360,0,260),name:"\u6C34\u93E1\u306E\u7960",completed:!1},{pos:new A(430,0,40),name:"\u6A39\u970A\u306E\u7960",completed:!1},{pos:new A(430,0,-300),name:"\u70C8\u706B\u306E\u7960",completed:!1}],completedCount:0,active:-1}}function XM(n,t){}var bl={};wi(bl,{init:()=>qM,update:()=>YM});async function qM(n){n.boss={active:!1,defeated:!1,hp:60,maxHp:60}}function YM(n,t){}var Lr={};wi(Lr,{init:()=>ZM,update:()=>$M});async function ZM(n){n.audio={unlock(){},play(){},setMusic(){}}}function $M(n,t){}var Ur={};wi(Ur,{init:()=>tb,update:()=>eb});var Ft=null,Oe=null,J={},rs={playTime:0,kills:0},sp="M12 20.3C7.9 17.2 1.7 12.6 1.7 7.8 1.7 4.8 4 2.6 6.7 2.6c2.1 0 4 1.2 5.3 3.3 1.3-2.1 3.2-3.3 5.3-3.3 2.7 0 5 2.2 5 5.2 0 4.8-6.2 9.4-10.3 12.5z",JM=150.8,KM=["\u9060\u304D\u6614\u2014\u2014\u5927\u5730\u30A2\u30EB\u30C7\u30A3\u30A2\u3092\u95C7\u3067\u8986\u3063\u305F\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9\u306F\u3001\u521D\u4EE3\u52C7\u8005\u306E\u5263\u306B\u3088\u3063\u3066\u5317\u306E\u53E4\u57CE\u306E\u5965\u6DF1\u304F\u306B\u5C01\u3058\u3089\u308C\u305F\u3002","\u3060\u304C\u6C38\u304D\u6642\u306F\u5C01\u5370\u3092\u8755\u307F\u3001\u9B54\u7363\u306F\u3044\u307E\u518D\u3073\u76EE\u899A\u3081\u308B\u3002\u57CE\u306F\u7634\u6C17\u306B\u6C88\u307F\u3001\u5927\u5730\u306B\u306F\u9B54\u7269\u306E\u5F71\u304C\u9019\u3044\u59CB\u3081\u305F\u2026\u2026\u3002","\u7DD1\u8863\u306E\u52C7\u8005\u3088\u2014\u20144\u3064\u306E\u7960\u3092\u5DE1\u308A\u300C\u6C17\u306E\u73E0\u300D\u30923\u3064\u96C6\u3081\u3001\u5317\u306E\u9B54\u57CE\u306E\u7D50\u754C\u3092\u7834\u308B\u306E\u3060\u3002\u5927\u5730\u306E\u547D\u904B\u306F\u3001\u305D\u306E\u624B\u306B\u3002"],QM=[["W A S D","\u79FB\u52D5"],["\u30DE\u30A6\u30B9","\u30AB\u30E1\u30E9"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3"],["C","\u56DE\u907F\u30ED\u30FC\u30EB"]],jM=[["WASD / \u77E2\u5370","\u79FB\u52D5"],["\u30DE\u30A6\u30B9 / \u30C9\u30E9\u30C3\u30B0","\u30AB\u30E1\u30E9(\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u56FA\u5B9A)"],["Shift","\u30C0\u30C3\u30B7\u30E5(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB)"],["Space","\u30B8\u30E3\u30F3\u30D7"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483(3\u6BB5\u30B3\u30F3\u30DC)"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u76FE\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3\u5207\u66FF"],["C","\u56DE\u907F\u30ED\u30FC\u30EB(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB\u30FB\u7121\u6575\u6642\u9593)"],["E","\u8ABF\u3079\u308B\u30FB\u8A71\u3059\u30FB\u6C7A\u5B9A"],["Esc / P","\u30DD\u30FC\u30BA"]];function jt(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e&&e.appendChild(i),i}function Do(n,t){n.classList.remove(t),n.offsetWidth,n.classList.add(t)}function fp(n){return n.split(" / ").map(t=>`<span class="kc">${t}</span>`).join('<span class="ksep">/</span>')}function dp(n){n=Math.max(0,Math.floor(n));let t=Math.floor(n/3600),e=Math.floor(n%3600/60),i=n%60;return t>0?`${t}\u6642\u9593${e}\u5206${i}\u79D2`:e>0?`${e}\u5206${i}\u79D2`:`${i}\u79D2`}function Sl(n){clearTimeout(n._hideT),n.classList.remove("leaving"),n.classList.add("visible")}function El(n){!n.classList.contains("visible")||n.classList.contains("leaving")||(n.classList.add("leaving"),n._hideT=setTimeout(()=>n.classList.remove("visible","leaving"),400))}async function tb(n){Ft=n,Oe=document.getElementById("ui-root"),Oe.innerHTML="",ib(),sb(),ab(),gb(),ob(),vb(),_b(),wb(),Sb(),Mb(),rb(),Rb(),Ib(),Lb(),Db(),Nb(),Bb(),db(),n.ui={showMessage:yb,showDialog:yp,setPrompt:mp,toast:bb,setBossBar:gp,flash:Tp},n.on("state",nb),n.on("player-damaged",hb),n.on("enemy-killed",()=>{rs.kills++}),n.on("pickup",ub),n.on("game-start",()=>{rs.playTime=0,rs.kills=0}),document.body.dataset.uistate=n.state}function eb(n,t){let e=n.state,i=e==="playing"||e==="shrine"||e==="boss";i&&(rs.playTime+=t),Uo.open&&n.input.justPressed("Escape")&&Cl(),Vt.active&&Eb(t,i||e==="title"),i&&(cb(t),xb()),bn.visible&&xp(t)}function nb(n){let t=n.to;document.body.dataset.uistate=t,Cl(!0);let e=t==="playing"||t==="shrine"||t==="boss";J.hud.classList.toggle("on",e),t==="title"?Sl(J.title):El(J.title),t==="paused"?(Pb(),Sl(J.pause)):El(J.pause),t==="gameover"?Sl(J.gameover):El(J.gameover),t==="ending"?(Ub(),Sl(J.ending)):El(J.ending),!e&&t!=="paused"&&(mp(null),J.reticle.classList.remove("on"),Uu=!1,J.guide.classList.remove("on"),(t==="title"||t==="ending")&&gp(!1)),(t==="gameover"||t==="title"||t==="ending")&&Tb()}function ib(){let n=jt("div","svg-defs",Oe);n.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
    <linearGradient id="ui-hgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff7583"/><stop offset=".5" stop-color="#dd2a41"/><stop offset="1" stop-color="#9c1128"/>
    </linearGradient>
    <linearGradient id="ui-ggrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a8f0be"/><stop offset=".45" stop-color="#4fc47a"/><stop offset="1" stop-color="#1e7a48"/>
    </linearGradient>
  </defs></svg>`}function sb(){J.vignette=jt("div","",Oe),J.vignette.id="vignette"}function rb(){J.flash=jt("div","",Oe),J.flash.id="flash"}function ob(){J.floatLayer=jt("div","",Oe),J.floatLayer.id="float-layer"}function ab(){let n=jt("div","",Oe);n.id="hud",J.hud=n;let t=jt("div","",n);t.id="hud-left",J.hearts=jt("div","",t),J.hearts.id="hearts";let e=jt("div","",t);e.id="stamina",J.stamina=e,e.innerHTML=`<svg viewBox="0 0 60 60">
    <circle class="stb" cx="30" cy="30" r="24"/>
    <circle class="stf" cx="30" cy="30" r="24" transform="rotate(-90 30 30)" stroke-dashoffset="0"/>
  </svg>`,J.stFg=e.querySelector(".stf");let i=jt("div","",t);i.id="orbs",J.orbs=[];for(let l=0;l<4;l++)J.orbs.push(jt("span","orb",i));let s=jt("div","",t);s.id="gems",J.gems=s,s.innerHTML=`<svg viewBox="0 0 24 24">
    <path d="M12 2.4 19.6 9 12 21.6 4.4 9Z" fill="url(#ui-ggrad)" stroke="rgba(235,255,240,.4)" stroke-width=".7"/>
    <path d="M4.4 9h15.2M12 2.4 8.4 9l3.6 12.6L15.6 9 12 2.4" fill="none" stroke="rgba(240,255,245,.3)" stroke-width=".6"/>
  </svg><span class="g-count">0</span>`,J.gemCount=s.querySelector(".g-count");let r=jt("div","",n);r.id="minimap";let o=document.createElement("canvas");o.width=340,o.height=340,r.appendChild(o),J.mapCanvas=o;let a=jt("div","",n);a.id="prompt",J.prompt=a,J.pKey=jt("span","p-key",a),J.pTxt=jt("span","p-txt",a)}var rp=-1,Tl=-1,op=!1;function lb(n,t){let e="";for(let i=0;i<t;i++){let s=n-i,r=s>=1?"full":s>=.5?"half":"empty";e+=`<svg class="heart ${r}" viewBox="0 0 24 22"><path class="hb" d="${sp}"/><path class="hf" d="${sp}" fill="url(#ui-hgrad)"/></svg>`}J.hearts.innerHTML=e}var wl=!1,Pu=0,Al=!1,ap=-1,lp=-1,Rl=-1;function cb(n){let t=Ft.player;if(!t)return;let e=Math.round(ye(t.hp,0,99)*2)/2,i=Math.max(1,Math.round(t.maxHp));(e!==rp||i!==Tl)&&(Tl>0&&i>Tl&&Do(J.hearts,"bless"),lb(e,i),rp=e,Tl=i);let s=t.hp>0&&t.hp<=1;s!==op&&(op=s,J.vignette.classList.toggle("active",s));let r=ye(t.stamina/Math.max(1,t.maxStamina),0,1);r>=.999?(Pu+=n,wl&&Pu>.55&&(wl=!1,J.stamina.classList.remove("on"))):(Pu=0,wl||(wl=!0,J.stamina.classList.add("on"))),!Al&&t.stamina<=.02?(Al=!0,J.stamina.classList.add("ex")):Al&&t.stamina>30&&(Al=!1,J.stamina.classList.remove("ex"));let o=Math.round(JM*(1-r)*10)/10;o!==ap&&(ap=o,J.stFg.style.strokeDashoffset=o);let a=ye(t.spiritOrbs|0,0,4);if(a!==lp){for(let c=0;c<4;c++){let h=J.orbs[c];c<a?h.classList.contains("lit")||(h.classList.add("lit"),Do(h,"gain"),setTimeout(()=>h.classList.remove("gain"),950)):h.classList.remove("lit")}lp=a}let l=t.gems|0;l!==Rl&&(J.gemCount.textContent=l,Rl>=0&&l>Rl&&Do(J.gems,"pop"),Rl=l),mb()}function hb(){Do(J.hearts,"hurt"),Tp("rgba(186,26,42,1)",.16)}function ub(n){let t=n&&n.kind,e=innerWidth*.5,i=innerHeight*.58;if(n&&n.pos&&Ft.camera){let r=pp(n.pos,1.4);r.ok&&(e=r.x,i=r.y)}fb("+1",e,i,t==="heart"?"#ff93a0":t==="orb"?"#66ecd9":"#93e6ab")}function fb(n,t,e,i){let s=jt("div","float-txt",J.floatLayer);s.textContent=n,s.style.left=t+"px",s.style.top=e+"px",i&&(s.style.color=i),setTimeout(()=>s.remove(),1250)}var ss={g:null,off:null,shade:null};function db(){try{let n=J.mapCanvas.getContext("2d");ss.g=n;let t=n.createRadialGradient(85,85,28,85,85,85);t.addColorStop(0,"rgba(6,10,12,0)"),t.addColorStop(.78,"rgba(6,10,12,.1)"),t.addColorStop(1,"rgba(6,10,12,.46)"),ss.shade=t;let e=Ft.world;if(!e||!e.getHeight)return;let i=64,s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=r.createImageData(i,i),a=new Float32Array(i*i),l=1e9,c=-1e9;for(let m=0;m<i;m++)for(let p=0;p<i;p++){let T=-1e3+(p+.5)*2e3/i,M=-1e3+(m+.5)*2e3/i,x=0;try{x=e.getHeight(T,M)||0}catch{}a[m*i+p]=x,x<l&&(l=x),x>c&&(c=x)}let h=Math.max(1,c-l),u={plains:[96,152,78],forest:[50,104,78],lake:[70,140,168],volcano:[116,66,52],castle:[80,70,100],ruins:[130,124,108]},f=[46,106,142],d=typeof e.waterLevel=="number"?e.waterLevel:-1e9;for(let m=0;m<i;m++)for(let p=0;p<i;p++){let T=-1e3+(p+.5)*2e3/i,M=-1e3+(m+.5)*2e3/i,x="plains";try{x=e.getBiome(T,M)||"plains"}catch{}let D=a[m*i+p],C=D<=d+.15?f:u[x]||u.plains,I=.6+.52*((D-l)/h),L=(m*i+p)*4;o.data[L]=Math.min(255,C[0]*I),o.data[L+1]=Math.min(255,C[1]*I),o.data[L+2]=Math.min(255,C[2]*I),o.data[L+3]=255}r.putImageData(o,0,0);let g=document.createElement("canvas");g.width=g.height=256;let _=g.getContext("2d");_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(s,0,0,256,256),ss.off=g}catch{}}function pb(n,t,e,i,s){n.save(),n.translate(t,e),n.rotate(Math.PI/4),n.shadowColor=s,n.shadowBlur=6,n.fillStyle=s,n.fillRect(-i*.72,-i*.72,i*1.44,i*1.44),n.restore()}function mb(){let n=ss.g;if(!n)return;let t=170,e=85,i=83,s=t/2e3;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,t,t),n.save(),n.beginPath(),n.arc(e,e,i,0,Math.PI*2),n.clip(),ss.off?n.drawImage(ss.off,0,0,256,256,0,0,t,t):(n.fillStyle="#20303a",n.fillRect(0,0,t,t)),ss.shade&&(n.fillStyle=ss.shade,n.fillRect(0,0,t,t));let r=Ft.shrines&&Ft.shrines.list;if(r)for(let l=0;l<r.length;l++){let c=r[l];!c||!c.pos||pb(n,e+c.pos.x*s,e+c.pos.z*s,4.4,c.completed?"#eccb66":"#3fe6d2")}let o=Ft.world&&Ft.world.castleGatePos;if(o){let l=e+o.x*s,c=e+o.z*s;n.save(),n.shadowColor="#c08df0",n.shadowBlur=6,n.fillStyle="#bd88ef",n.beginPath(),n.moveTo(l,c-5.4),n.lineTo(l+4.8,c+3.8),n.lineTo(l-4.8,c+3.8),n.closePath(),n.fill(),n.restore()}let a=Ft.player;if(a&&a.position){let l=a.position.x*s,c=a.position.z*s,h=Math.hypot(l,c),u=i-8;h>u&&(l*=u/h,c*=u/h),n.save(),n.translate(e+l,e+c),n.rotate(Math.PI-(a.heading||0)),n.shadowColor="rgba(255,244,206,.95)",n.shadowBlur=5,n.fillStyle="#fff6da",n.beginPath(),n.moveTo(0,-6.2),n.lineTo(4.4,4.8),n.lineTo(0,2.3),n.lineTo(-4.4,4.8),n.closePath(),n.fill(),n.restore()}n.restore(),n.beginPath(),n.arc(e,e,i,0,Math.PI*2),n.strokeStyle="rgba(201,162,39,.8)",n.lineWidth=1.3,n.stroke(),n.beginPath(),n.arc(e,e,i-3.5,0,Math.PI*2),n.strokeStyle="rgba(201,162,39,.22)",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(e,e-i+10,8,0,Math.PI*2),n.fillStyle="rgba(8,12,15,.82)",n.fill(),n.strokeStyle="rgba(201,162,39,.55)",n.lineWidth=1,n.stroke(),n.font="10px serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ecc966",n.fillText("\u5317",e,e-i+10.5)}var cp=new oe,Dr={x:0,y:0,ok:!1},Uu=!1;function pp(n,t){let e=Ft.camera;return e.updateMatrixWorld(),cp.copy(e.matrixWorld).invert(),ni.v1.set(n.x,n.y+(t||0),n.z).applyMatrix4(cp),ni.v1.z>-.35?(Dr.ok=!1,Dr):(ni.v1.applyMatrix4(e.projectionMatrix),Dr.ok=ni.v1.x>-1.08&&ni.v1.x<1.08&&ni.v1.y>-1.08&&ni.v1.y<1.08,Dr.x=(ni.v1.x*.5+.5)*innerWidth,Dr.y=(.5-ni.v1.y*.5)*innerHeight,Dr)}function gb(){let n=jt("div","",Oe);n.id="reticle",J.reticle=n,jt("div","r1",n),jt("div","r2",n)}function xb(){let n=Ft.camera3p&&Ft.camera3p.lockTarget,t=!1;if(n&&n.alive!==!1&&n.pos){let e=pp(n.pos,(n.radius||.8)*1.1);e.ok&&(t=!0,J.reticle.style.transform=`translate3d(${e.x.toFixed(1)}px,${e.y.toFixed(1)}px,0)`)}t!==Uu&&(Uu=t,J.reticle.classList.toggle("on",t))}var hp=null;function mp(n){let t=n||null;if(t===hp)return;if(hp=t,!t){J.prompt.classList.remove("on");return}let e=/^([A-Za-z0-9]{1,8})\s*キー\s*[::]?\s*(.*)$/.exec(t);e?(J.pKey.style.display="",J.pKey.textContent=e[1],J.pTxt.textContent=e[2]||""):(J.pKey.style.display="none",J.pTxt.textContent=t),Do(J.prompt,"on")}var bn={visible:!1,ghost:1,lastFill:-1,lastGhost:-1};function _b(){let n=jt("div","",Oe);n.id="bossbar",J.bossbar=n,n.innerHTML=`<div class="bb-name"></div>
    <div class="bb-frame"><div class="bb-track"><div class="bb-ghost"></div><div class="bb-fill"></div></div></div>`,J.bbName=n.querySelector(".bb-name"),J.bbFill=n.querySelector(".bb-fill"),J.bbGhost=n.querySelector(".bb-ghost")}function gp(n,t){let e=!!n;t!=null&&(J.bbName.textContent=String(t)),e!==bn.visible&&(bn.visible=e,e&&(bn.ghost=1,bn.lastFill=-1,bn.lastGhost=-1,xp(0)),J.bossbar.classList.toggle("on",e))}function xp(n){let t=Ft.boss;if(!t)return;let e=ye(t.maxHp>0?t.hp/t.maxHp:0,0,1);bn.ghost=Math.max(e,Xt(bn.ghost,e,2.2,n));let i=Math.round(e*1e3)/10,s=Math.round(bn.ghost*1e3)/10;i!==bn.lastFill&&(bn.lastFill=i,J.bbFill.style.width=i+"%"),s!==bn.lastGhost&&(bn.lastGhost=s,J.bbGhost.style.width=s+"%")}var Nu=[],Lu=!1;function vb(){J.msgLayer=jt("div","",Oe),J.msgLayer.id="msg-layer"}function yb(n,t){let e=t||{};Nu.push({text:String(n??""),duration:typeof e.duration=="number"?e.duration:3,sub:e.sub==null?null:String(e.sub)}),_p()}function _p(){if(Lu||!Nu.length)return;Lu=!0;let n=Nu.shift(),t=jt("div","msg",J.msgLayer);jt("div","msg-rule",t);let e=jt("div","msg-text",t);if(e.textContent=n.text,n.sub){let i=jt("div","msg-sub",t);i.textContent=n.sub}jt("div","msg-rule",t),requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{t.classList.add("outing"),setTimeout(()=>{t.remove(),Lu=!1,_p()},620)},Math.max(.4,n.duration)*1e3+420)}var Fu=[],Du=0;function Mb(){J.toastLayer=jt("div","",Oe),J.toastLayer.id="toast-layer"}function bb(n){Fu.push(String(n??"")),vp()}function vp(){if(Du>=4||!Fu.length)return;Du++;let n=Fu.shift(),t=jt("div","toast",J.toastLayer),e=jt("span","t-dia",t);e.textContent="\u25C6";let i=jt("span","",t);i.textContent=n,requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{t.classList.add("out"),setTimeout(()=>{t.remove(),Du--,vp()},380)},2500)}var Vt={q:[],active:!1,lines:null,onDone:null,li:0,chars:0,t:0,done:!1};function Sb(){let n=jt("div","panel",Oe);n.id="dialog",J.dialog=n;let t=jt("div","dlg-orn",n);t.textContent="\u25C6",J.dlgText=jt("div","dlg-text",n),J.dlgNext=jt("div","dlg-next",n),J.dlgNext.textContent="\u25BC",n.addEventListener("click",()=>Ep())}function yp(n,t){let e=Array.isArray(n)?n.filter(i=>i!=null).map(String):n!=null?[String(n)]:[];if(!e.length){typeof t=="function"&&t();return}Vt.q.push({lines:e,onDone:t}),Vt.active||Mp()}function Mp(){let n=Vt.q.shift();if(!n){Vt.active=!1;return}Vt.active=!0,Vt.lines=n.lines,Vt.onDone=n.onDone,J.dialog.classList.add("visible"),bp(0)}function bp(n){Vt.li=n,Vt.chars=0,Vt.t=0,Vt.done=!1,J.dlgText.textContent="",J.dlgNext.classList.remove("on")}function Sp(){let n=Vt.lines[Vt.li];J.dlgText.textContent=n.slice(0,Vt.chars),Vt.chars>=n.length&&(Vt.done=!0,J.dlgNext.classList.add("on"))}function Ep(){if(!Vt.active||!Vt.lines)return;if(Ft.audio&&Ft.audio.play&&Ft.audio.play("ui"),!Vt.done){Vt.chars=Vt.lines[Vt.li].length,Sp();return}if(Vt.li<Vt.lines.length-1){bp(Vt.li+1);return}let n=Vt.onDone;if(Vt.lines=null,Vt.onDone=null,Vt.done=!1,J.dialog.classList.remove("visible"),setTimeout(Mp,280),typeof n=="function")try{n()}catch{}}function Eb(n,t){if(Vt.lines){if(!Vt.done){Vt.t+=n;let e=Vt.lines[Vt.li],i=Vt.chars;for(;Vt.t>=.02&&i<e.length;)Vt.t-=.02,i++;i!==Vt.chars&&(Vt.chars=i,Sp())}t&&Ft.input.justPressed("KeyE")&&Ep()}}function Tb(){Vt.q.length=0,Vt.lines=null,Vt.onDone=null,Vt.active=!1,Vt.done=!1,J.dialog.classList.remove("visible")}function Tp(n,t){let e=J.flash;e.style.transition="none",e.style.background=n||"#ffffff",e.style.opacity=String(ye(t??.5,0,1)),e.offsetWidth,e.style.transition="opacity .3s ease-out",e.style.opacity="0"}function wb(){let n=jt("div","panel",Oe);n.id="guide",J.guide=n;let t="";for(let[e,i]of QM)t+=`<div class="gd-k">${fp(e)}</div><div class="gd-a">${i}</div>`;n.innerHTML=`<div class="gd-title">\u65C5\u306E\u5FC3\u5F97</div><div class="gd-rows">${t}</div>`}function Ab(){J.guide.classList.add("on"),clearTimeout(J.guide._t),J.guide._t=setTimeout(()=>J.guide.classList.remove("on"),5e3)}function Rb(){let n=jt("section","screen",Oe);n.id="title-screen",J.title=n,n.innerHTML=`
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
    <footer class="tt-foot">\u30AA\u30EA\u30B8\u30CA\u30EB\u30D5\u30A1\u30F3\u30E1\u30A4\u30C9\u4F5C\u54C1 \u2014 \u30BC\u30EB\u30C0\u306E\u4F1D\u8AAC\u3078\u306E\u30AA\u30DE\u30FC\u30B8\u30E5</footer>`,n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");if(!e)return;let i=e.dataset.act;i==="start"?Cb():i==="controls"?Ou("controls"):i==="settings"&&Ou("settings")})}function Cb(){Ft.emit("game-start"),yp(KM,Ab)}function Ib(){let n=jt("section","screen",Oe);n.id="pause-screen",J.pause=n,n.innerHTML=`
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
    </div>`,J.pzTime=n.querySelector(".pz-time"),J.pzKills=n.querySelector(".pz-kills"),J.pzGems=n.querySelector(".pz-gems"),n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");if(!e)return;let i=e.dataset.act;i==="resume"?Ft.setState(Ft._pausedFrom||"playing"):i==="settings"?Ou("settings"):i==="title"&&Ft.emit("title-request")})}function Pb(){J.pzTime.textContent=dp(rs.playTime),J.pzKills.textContent=String(rs.kills),J.pzGems.textContent=String(Ft.player?Ft.player.gems|0:0)}function Lb(){let n=jt("section","screen",Oe);n.id="gameover-screen",J.gameover=n,n.innerHTML=`
    <div class="go-text">\u52C7\u8005\u306F\u5012\u308C\u305F\u2026</div>
    <nav class="go-menu">
      <button class="obtn" data-act="respawn">\u3075\u305F\u305F\u3073\u6311\u3080</button>
      <button class="obtn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>
    </nav>`,n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");e&&(e.dataset.act==="respawn"?Ft.emit("respawn-request"):Ft.emit("title-request"))})}function Db(){let n=jt("section","screen",Oe);n.id="ending-screen",J.ending=n,n.innerHTML=`
    <div class="ed-l1">\u9B54\u7363\u306F\u8A0E\u305F\u308C\u3001\u5927\u5730\u306B\u671D\u304C\u623B\u3063\u305F</div>
    <div class="ed-l2">\u4F1D\u8AAC\u306F\u8A9E\u308A\u7D99\u304C\u308C\u308B</div>
    <div class="ed-orn">\u25C6</div>
    <div class="ed-stats">
      <div class="stat"><span class="s-l">\u30AF\u30EA\u30A2\u6642\u9593</span><span class="s-v ed-time">\u2014</span></div>
      <div class="stat"><span class="s-l">\u8A0E\u4F10\u3057\u305F\u9B54\u7269</span><span class="s-v ed-kills">0</span></div>
      <div class="stat"><span class="s-l">\u96C6\u3081\u305F\u7DD1\u77F3</span><span class="s-v ed-gems">0</span></div>
    </div>
    <button class="mbtn ed-btn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>`,n.querySelector(".ed-btn").addEventListener("click",()=>Ft.emit("title-request"))}function Ub(){J.ending.querySelector(".ed-time").textContent=dp(rs.playTime),J.ending.querySelector(".ed-kills").textContent=String(rs.kills),J.ending.querySelector(".ed-gems").textContent=String(Ft.player?Ft.player.gems|0:0)}var Uo={open:!1,kind:null};function Nb(){let n=jt("div","",Oe);n.id="modal-layer",J.modal=n,n.innerHTML=`
    <div class="modal-back"></div>
    <div class="modal panel">
      <button class="modal-x" aria-label="\u9589\u3058\u308B">\xD7</button>
      <h2 class="modal-title"></h2>
      <div class="modal-body"></div>
    </div>`,J.modalTitle=n.querySelector(".modal-title"),J.modalBody=n.querySelector(".modal-body"),n.querySelector(".modal-back").addEventListener("click",()=>Cl()),n.querySelector(".modal-x").addEventListener("click",()=>Cl()),Fb(),Ob()}function Fb(){let n=document.createElement("div");n.className="set-body",n.innerHTML=`
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
    <p class="set-note">\u753B\u8CEA\u3092\u5909\u3048\u308B\u3068\u3001\u8349\u6728\u306E\u5BC6\u5EA6\u3084\u5149\u306E\u8868\u73FE\u304C\u5909\u308F\u308A\u307E\u3059\u3002</p>`,J.setBody=n,n.querySelector(".seg").addEventListener("click",i=>{let s=i.target.closest("button[data-q]");s&&(Ft.settings.quality=s.dataset.q,Ft.applyQuality&&Ft.applyQuality(),wp())});let t=n.querySelector(".vol-music"),e=n.querySelector(".vol-sfx");t.addEventListener("input",()=>{Ft.settings.musicVol=ye(Number(t.value)||0,0,1),n.querySelector(".vm").textContent=Math.round(Ft.settings.musicVol*100)}),e.addEventListener("input",()=>{Ft.settings.sfxVol=ye(Number(e.value)||0,0,1),n.querySelector(".vs").textContent=Math.round(Ft.settings.sfxVol*100)}),e.addEventListener("change",()=>{Ft.audio&&Ft.audio.play&&Ft.audio.play("ui")})}function wp(){let n=J.setBody;n.querySelectorAll(".seg button").forEach(i=>i.classList.toggle("active",i.dataset.q===Ft.settings.quality));let t=n.querySelector(".vol-music"),e=n.querySelector(".vol-sfx");t.value=Ft.settings.musicVol,e.value=Ft.settings.sfxVol,n.querySelector(".vm").textContent=Math.round(Ft.settings.musicVol*100),n.querySelector(".vs").textContent=Math.round(Ft.settings.sfxVol*100)}function Ob(){let n=document.createElement("div");n.className="ctl-body";let t="";for(let[e,i]of jM)t+=`<tr><td class="k">${fp(e)}</td><td class="a">${i}</td></tr>`;n.innerHTML=`<table class="ctl-table"><tbody>${t}</tbody></table>`,J.ctlBody=n}function Ou(n){Uo.open=!0,Uo.kind=n,J.modalTitle.textContent=n==="settings"?"\u8A2D\u5B9A":"\u64CD\u4F5C\u65B9\u6CD5",J.modalBody.innerHTML="",J.modalBody.appendChild(n==="settings"?J.setBody:J.ctlBody),n==="settings"&&wp(),J.modal.classList.toggle("wide",n==="controls"),J.modal.classList.add("open")}function Cl(n){Uo.open&&(Uo.open=!1,J.modal.classList.remove("open"),!n&&Ft.audio&&Ft.audio.play&&Ft.audio.play("uiBack"))}var up=null;function Bb(){Oe.addEventListener("pointerover",n=>{let t=n.target.closest?n.target.closest("button"):null;t!==up&&(up=t,t&&Ft.audio&&Ft.audio.play&&Ft.audio.play("ui"))}),Oe.addEventListener("pointerdown",n=>{n.target.closest&&n.target.closest("button")&&Ft.audio&&Ft.audio.play&&Ft.audio.play("ui")})}var Is=document.getElementById("game"),si=new Ua({canvas:Is,antialias:!0,powerPreference:"high-performance"});si.shadowMap.enabled=!0;si.shadowMap.type=Oh;si.outputColorSpace=Ve;si.toneMapping=xo;si.toneMappingExposure=1.05;var Pp=new Fa,No=new sn(55,innerWidth/innerHeight,.3,3e3);No.position.set(0,8,262);var Pl=new Set,Cs=new Set,Ne={dx:0,dy:0,wheel:0,left:!1,right:!1,leftJust:!1,rightJust:!1};addEventListener("keydown",n=>{n.repeat||(Pl.add(n.code),Cs.add(n.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),Lp())});addEventListener("keyup",n=>Pl.delete(n.code));addEventListener("blur",()=>{Pl.clear(),Ne.left=Ne.right=!1});Is.addEventListener("pointerdown",n=>{n.button===0&&(Ne.left=!0,Ne.leftJust=!0),n.button===2&&(Ne.right=!0,Ne.rightJust=!0),Lp();let t=Yt.state;(t==="playing"||t==="shrine"||t==="boss")&&!document.pointerLockElement&&Is.requestPointerLock?.()});addEventListener("pointerup",n=>{n.button===0&&(Ne.left=!1),n.button===2&&(Ne.right=!1)});addEventListener("mousemove",n=>{(document.pointerLockElement===Is||Ne.left||Ne.right)&&(Ne.dx+=n.movementX,Ne.dy+=n.movementY)});addEventListener("wheel",n=>{Ne.wheel+=n.deltaY},{passive:!0});Is.addEventListener("contextmenu",n=>n.preventDefault());var Ap=!1;function Lp(){Ap||(Ap=!0,Yt.audio?.unlock?.())}var Bu=new EventTarget,Yt={renderer:si,scene:Pp,camera:No,canvas:Is,state:"loading",setState(n){let t=Yt.state;t!==n&&(Yt.state=n,(n==="paused"||n==="title"||n==="gameover"||n==="ending")&&document.exitPointerLock?.(),Yt.emit("state",{from:t,to:n}))},events:Bu,emit(n,t){Bu.dispatchEvent(new CustomEvent(n,{detail:t}))},on(n,t){Bu.addEventListener(n,e=>t(e.detail))},time:{elapsed:0,dt:0,dayPhase:.1,isNight:!1},input:{keys:Pl,justPressed:n=>Cs.has(n),mouse:Ne,get pointerLocked(){return document.pointerLockElement===Is}},settings:{quality:"high",musicVol:.7,sfxVol:.9},quality:{},applyQuality(){let n=Yt.settings.quality,t=window.devicePixelRatio||1;Yt.quality={pixelRatio:n==="high"?Math.min(t,2):n==="medium"?Math.min(t,1.35):1,shadowMapSize:n==="high"?2048:n==="medium"?1024:512,grassMul:n==="high"?1:n==="medium"?.55:.28,particleMul:n==="high"?1:n==="medium"?.6:.35,postFX:n!=="low",drawDist:n==="high"?1:n==="medium"?.85:.65},si.setPixelRatio(Yt.quality.pixelRatio),si.setSize(innerWidth,innerHeight),Yt.emit("quality-changed",Yt.quality)},getGroundHeight:()=>0,colliders:[],playerBounds:null,world:null,sky:null,player:null,camera3p:null,combat:null,shrines:null,boss:null,ui:null,audio:null,effects:null};Yt.on("game-start",()=>Yt.setState("playing"));Yt.on("player-died",()=>{setTimeout(()=>{Yt.state!=="gameover"&&Yt.setState("gameover")},1600)});Yt.on("respawn-request",()=>{let n=Yt.player;n.heal(n.maxHp),n.teleport(Yt.world.startPos.clone(),Math.PI),Yt.setState("playing")});Yt.on("title-request",()=>{let n=Yt.player;n.heal(n.maxHp),n.teleport(Yt.world.startPos.clone(),Math.PI),Yt.setState("title")});addEventListener("resize",()=>{No.aspect=innerWidth/innerHeight,No.updateProjectionMatrix(),si.setSize(innerWidth,innerHeight),Yt.effects?.onResize?.(innerWidth,innerHeight)});var Rp=document.getElementById("boot-status"),Cp=document.getElementById("boot-bar");function Ip(n,t,e){Rp&&(Rp.textContent=e),Cp&&(Cp.style.width=`${Math.round(n/t*100)}%`)}var Il=[["\u5927\u5730\u3092\u5275\u9020\u3057\u3066\u3044\u307E\u3059\u2026",sl],["\u7A7A\u3068\u5149\u3092\u547C\u3093\u3067\u3044\u307E\u3059\u2026",bo],["\u98A8\u306E\u7C92\u5B50\u3092\u7E54\u3063\u3066\u3044\u307E\u3059\u2026",To],["\u52C7\u8005\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u3044\u307E\u3059\u2026",uu],["\u8996\u754C\u3092\u6574\u3048\u3066\u3044\u307E\u3059\u2026",Io],["\u9B54\u7269\u304C\u8822\u3044\u3066\u3044\u307E\u3059\u2026",yl],["\u7960\u306B\u706F\u3092\u70B9\u3057\u3066\u3044\u307E\u3059\u2026",Ml],["\u9B54\u57CE\u304C\u8ECB\u3093\u3067\u3044\u307E\u3059\u2026",bl],["\u65CB\u5F8B\u3092\u7D21\u3044\u3067\u3044\u307E\u3059\u2026",Lr],["\u65C5\u652F\u5EA6\u3092\u3057\u3066\u3044\u307E\u3059\u2026",Ur]];async function zb(){Yt.applyQuality();let n=0;for(let[t,e]of Il){Ip(n,Il.length,t),await new Promise(i=>requestAnimationFrame(i));try{await e.init(Yt)}catch(i){console.warn("[init\u5931\u6557]",t,i)}n++}Ip(Il.length,Il.length,"\u6E96\u5099\u5B8C\u4E86"),document.getElementById("boot")?.classList.add("boot-done"),setTimeout(()=>document.getElementById("boot")?.remove(),900),Yt.setState("title"),requestAnimationFrame(Dp)}var kb=new pr,Hb=240,Vb=[uu,Io,sl,bo,yl,Ml,bl,To,Lr,Ur],Gb=[Io,sl,bo,To,Lr,Ur],Wb=[Lr,Ur];function Dp(){requestAnimationFrame(Dp);let n=ye(kb.getDelta(),0,1/20);Yt.time.dt=n,Yt.time.elapsed+=n;let t=Yt.state,e=t==="playing"||t==="shrine"||t==="boss"?Vb:t==="title"||t==="gameover"||t==="ending"?Gb:t==="paused"?Wb:null;if((t==="playing"||t==="boss"||t==="title")&&(Yt.time.dayPhase=(Yt.time.dayPhase+n/Hb)%1),Yt.time.isNight=Yt.time.dayPhase>.55&&Yt.time.dayPhase<.95,(t==="playing"||t==="shrine"||t==="boss")&&(Cs.has("Escape")||Cs.has("KeyP"))?(Yt._pausedFrom=t,Yt.setState("paused")):t==="paused"&&(Cs.has("Escape")||Cs.has("KeyP"))&&Yt.setState(Yt._pausedFrom||"playing"),e)for(let i of e)try{i.update(Yt,n)}catch(s){i._errOnce||(i._errOnce=!0,console.warn("[update\u5931\u6557]",s))}try{Yt.effects?.render?.(n)}catch{si.render(Pp,No)}Cs.clear(),Ne.dx=0,Ne.dy=0,Ne.wheel=0,Ne.leftJust=!1,Ne.rightJust=!1}window.__ctx=Yt;zb();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
