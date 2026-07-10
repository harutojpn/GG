(()=>{var Q_=Object.defineProperty;var Ns=(i,e)=>{for(var t in e)Q_(i,t,{get:e[t],enumerable:!0})};var e1=0,Zg=1,t1=2;var gv=1,P0=2,or=3,Os=0,Tn=1,dn=2,Ln=0,hr=1,ln=2,Kg=3,jg=4,I0=5,Ji=100,n1=101,i1=102,s1=103,r1=104,El=200,o1=201,a1=202,l1=203,lp=204,cp=205,rf=206,c1=207,of=208,h1=209,u1=210,f1=211,d1=212,p1=213,m1=214,hp=0,up=1,fp=2,rl=3,dp=4,pp=5,mp=6,gp=7,xv=0,g1=1,x1=2,qr=0,L0=1,D0=2,N0=3,Xc=4,v1=5,U0=6,z0=7,Jg="attached",y1="detached",vv=300,ol=301,al=302,xp=303,vp=304,af=306,Qn=1e3,lr=1001,Rc=1002,Dn=1003,O0=1004;var Ja=1005;var $n=1006,Mc=1007;var zs=1008;var ys=1009,yv=1010,_v=1011,Cc=1012,F0=1013,ea=1014,vs=1015,ui=1016,B0=1017,k0=1018,Yr=1020,Mv=35902,bv=1021,Sv=1022,Ei=1023,Ev=1024,Tv=1025,nl=1026,Zr=1027,qc=1028,H0=1029,wv=1030,G0=1031;var V0=1033,yu=33776,_u=33777,Mu=33778,bu=33779,yp=35840,_p=35841,Mp=35842,bp=35843,Sp=36196,Ep=37492,Tp=37496,wp=37808,Ap=37809,Rp=37810,Cp=37811,Pp=37812,Ip=37813,Lp=37814,Dp=37815,Np=37816,Up=37817,zp=37818,Op=37819,Fp=37820,Bp=37821,Su=36492,kp=36494,Hp=36495,Av=36283,Gp=36284,Vp=36285,Wp=36286,W0=2200,_1=2201,M1=2202,ll=2300,cl=2301,wd=2302,$a=2400,Qa=2401,Eu=2402,X0=2500,b1=2501,Rv=0,lf=1,Yc=2,S1=3200,E1=3201;var cf=0,T1=1,Vr="",an="srgb",fi="srgb-linear",hf="linear",Wt="srgb";var La=7680;var $g=519,w1=512,A1=513,R1=514,Cv=515,C1=516,P1=517,I1=518,L1=519,Xp=35044,_s=35048;var Qg="300 es",cr=2e3,Tu=2001,fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ex=1234567,bc=Math.PI/180,hl=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]).toLowerCase()}function Pn(i,e,t){return Math.max(e,Math.min(t,i))}function q0(i,e){return(i%e+e)%e}function D1(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function N1(i,e,t){return i!==e?(t-i)/(e-i):0}function Sc(i,e,t){return(1-t)*i+t*e}function U1(i,e,t,n){return Sc(i,e,1-Math.exp(-t*n))}function z1(i,e=1){return e-Math.abs(q0(i,e*2)-e)}function O1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function F1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function B1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function k1(i,e){return i+Math.random()*(e-i)}function H1(i){return i*(.5-Math.random())}function G1(i){i!==void 0&&(ex=i);let e=ex+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V1(i){return i*bc}function W1(i){return i*hl}function X1(i){return(i&i-1)===0&&i!==0}function q1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Y1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Z1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var uf={DEG2RAD:bc,RAD2DEG:hl,generateUUID:$i,clamp:Pn,euclideanModulo:q0,mapLinear:D1,inverseLerp:N1,lerp:Sc,damp:U1,pingpong:z1,smoothstep:O1,smootherstep:F1,randInt:B1,randFloat:k1,randFloatSpread:H1,seededRandom:G1,degToRad:V1,radToDeg:W1,isPowerOfTwo:X1,ceilPowerOfTwo:q1,floorPowerOfTwo:Y1,setQuaternionFromProperEuler:Z1,normalize:Zt,denormalize:xs},J=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],L=s[2],E=s[5],w=s[8];return r[0]=o*x+a*y+l*L,r[3]=o*m+a*_+l*E,r[6]=o*p+a*v+l*w,r[1]=c*x+h*y+u*L,r[4]=c*m+h*_+u*E,r[7]=c*p+h*v+u*w,r[2]=f*x+d*y+g*L,r[5]=f*m+d*_+g*E,r[8]=f*p+d*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ad.makeScale(e,t)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ad=new xt;function Pv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function K1(){let i=Pc("canvas");return i.style.display="block",i}var tx={};function yc(i){i in tx||(tx[i]=!0,console.warn(i))}function j1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function J1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var bt={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Wt&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Wt&&(i.r=il(i.r),i.g=il(i.g),i.b=il(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vr?hf:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function il(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nx=[.64,.33,.3,.6,.15,.06],ix=[.2126,.7152,.0722],sx=[.3127,.329],rx=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ox=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[fi]:{primaries:nx,whitePoint:sx,transfer:hf,toXYZ:rx,fromXYZ:ox,luminanceCoefficients:ix,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:nx,whitePoint:sx,transfer:Wt,toXYZ:rx,fromXYZ:ox,luminanceCoefficients:ix,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});var Da,qp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Da===void 0&&(Da=Pc("canvas")),Da.width=e.width,Da.height=e.height;let n=Da.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Da}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pc("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ur(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Q1=0,wu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rd(s[o].image)):r.push(Rd(s[o]))}else r=Rd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Rd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eM=0,qn=class i extends fr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=lr,s=lr,r=$n,o=zs,a=Ei,l=ys,c=i.DEFAULT_ANISOTROPY,h=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=$i(),this.name="",this.source=new wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=vv;qn.DEFAULT_ANISOTROPY=1;var Ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(d+1)/2,L=(p+1)/2,E=(h+f)/4,w=(u+x)/4,P=(g+m)/4;return _>v&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=w/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yp=class extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Au=class extends qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zp=class extends qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),E=Math.atan2(L,p*y);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}let v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ax.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ax.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cd=new A,ax=new mn,Ti=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ps.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ps.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ps.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ps):ps.fromBufferAttribute(r,o),ps.applyMatrix4(e.matrixWorld),this.expandByPoint(ps);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kh.copy(n.boundingBox)),kh.applyMatrix4(e.matrixWorld),this.union(kh)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ps),ps.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lc),Hh.subVectors(this.max,lc),Na.subVectors(e.a,lc),Ua.subVectors(e.b,lc),za.subVectors(e.c,lc),Or.subVectors(Ua,Na),Fr.subVectors(za,Ua),qo.subVectors(Na,za);let t=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-qo.z,qo.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,qo.z,0,-qo.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-qo.y,qo.x,0];return!Pd(t,Na,Ua,za,Hh)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,Na,Ua,za,Hh))?!1:(Gh.crossVectors(Or,Fr),t=[Gh.x,Gh.y,Gh.z],Pd(t,Na,Ua,za,Hh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ps).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ps).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},er=[new A,new A,new A,new A,new A,new A,new A,new A],ps=new A,kh=new Ti,Na=new A,Ua=new A,za=new A,Or=new A,Fr=new A,qo=new A,lc=new A,Hh=new A,Gh=new A,Yo=new A;function Pd(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yo.fromArray(i,r);let a=s.x*Math.abs(Yo.x)+s.y*Math.abs(Yo.y)+s.z*Math.abs(Yo.z),l=e.dot(Yo),c=t.dot(Yo),h=n.dot(Yo);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tM=new Ti,cc=new A,Id=new A,Oi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tM.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cc.subVectors(e,this.center);let t=cc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cc,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cc.copy(e.center).add(Id)),this.expandByPoint(cc.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},tr=new A,Ld=new A,Vh=new A,Br=new A,Dd=new A,Wh=new A,Nd=new A,ul=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ld.copy(e).add(t).multiplyScalar(.5),Vh.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Ld);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vh),a=Br.dot(this.direction),l=-Br.dot(Vh),c=Br.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ld).addScaledVector(Vh,f),d}intersectSphere(e,t){tr.subVectors(e.center,this.origin);let n=tr.dot(this.direction),s=tr.dot(tr)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,s,r){Dd.subVectors(t,e),Wh.subVectors(n,e),Nd.crossVectors(Dd,Wh);let o=this.direction.dot(Nd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Br.subVectors(this.origin,e);let l=a*this.direction.dot(Wh.crossVectors(Br,Wh));if(l<0)return null;let c=a*this.direction.dot(Dd.cross(Br));if(c<0||l+c>o)return null;let h=-a*Br.dot(Nd);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Oa.setFromMatrixColumn(e,0).length(),r=1/Oa.setFromMatrixColumn(e,1).length(),o=1/Oa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,t,n){let s=this.elements;return Ui.subVectors(e,t),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),kr.crossVectors(n,Ui),kr.lengthSq()===0&&(Math.abs(n.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),kr.crossVectors(n,Ui)),kr.normalize(),Xh.crossVectors(Ui,kr),s[0]=kr.x,s[4]=Xh.x,s[8]=Ui.x,s[1]=kr.y,s[5]=Xh.y,s[9]=Ui.y,s[2]=kr.z,s[6]=Xh.z,s[10]=Ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],L=n[15],E=s[0],w=s[4],P=s[8],b=s[12],M=s[1],I=s[5],U=s[9],N=s[13],z=s[2],G=s[6],B=s[10],j=s[14],X=s[3],se=s[7],ue=s[11],ge=s[15];return r[0]=o*E+a*M+l*z+c*X,r[4]=o*w+a*I+l*G+c*se,r[8]=o*P+a*U+l*B+c*ue,r[12]=o*b+a*N+l*j+c*ge,r[1]=h*E+u*M+f*z+d*X,r[5]=h*w+u*I+f*G+d*se,r[9]=h*P+u*U+f*B+d*ue,r[13]=h*b+u*N+f*j+d*ge,r[2]=g*E+x*M+m*z+p*X,r[6]=g*w+x*I+m*G+p*se,r[10]=g*P+x*U+m*B+p*ue,r[14]=g*b+x*N+m*j+p*ge,r[3]=y*E+_*M+v*z+L*X,r[7]=y*w+_*I+v*G+L*se,r[11]=y*P+_*U+v*B+L*ue,r[15]=y*b+_*N+v*j+L*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,E=t*y+n*_+s*v+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=y*w,e[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*w,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*w,e[4]=_*w,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*w,e[8]=v*w,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*p-t*u*p)*w,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=L*w,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*w,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,_=l*h,v=l*u,L=n.x,E=n.y,w=n.z;return s[0]=(1-(x+p))*L,s[1]=(d+v)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Oa.set(s[0],s[1],s[2]).length(),o=Oa.set(s[4],s[5],s[6]).length(),a=Oa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ms.copy(this);let c=1/r,h=1/o,u=1/a;return ms.elements[0]*=c,ms.elements[1]*=c,ms.elements[2]*=c,ms.elements[4]*=h,ms.elements[5]*=h,ms.elements[6]*=h,ms.elements[8]*=u,ms.elements[9]*=u,ms.elements[10]*=u,t.setFromRotationMatrix(ms),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cr){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===cr)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Tu)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cr){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,d=(n+s)*h,g,x;if(a===cr)g=(o+r)*u,x=-2*u;else if(a===Tu)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Oa=new A,ms=new $e,nM=new A(0,0,0),iM=new A(1,1,1),kr=new A,Xh=new A,Ui=new A,lx=new $e,cx=new mn,wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cx.setFromEuler(this),this.setFromQuaternion(cx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var Ru=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sM=0,hx=new A,Fa=new mn,nr=new $e,qh=new A,hc=new A,rM=new A,oM=new mn,ux=new A(1,0,0),fx=new A(0,1,0),dx=new A(0,0,1),px={type:"added"},aM={type:"removed"},Ba={type:"childadded",child:null},Ud={type:"childremoved",child:null},cn=class i extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new wi,n=new mn,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new xt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fa.setFromAxisAngle(e,t),this.quaternion.multiply(Fa),this}rotateOnWorldAxis(e,t){return Fa.setFromAxisAngle(e,t),this.quaternion.premultiply(Fa),this}rotateX(e){return this.rotateOnAxis(ux,e)}rotateY(e){return this.rotateOnAxis(fx,e)}rotateZ(e){return this.rotateOnAxis(dx,e)}translateOnAxis(e,t){return hx.copy(e).applyQuaternion(this.quaternion),this.position.add(hx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ux,e)}translateY(e){return this.translateOnAxis(fx,e)}translateZ(e){return this.translateOnAxis(dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qh.copy(e):qh.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(hc,qh,this.up):nr.lookAt(qh,hc,this.up),this.quaternion.setFromRotationMatrix(nr),s&&(nr.extractRotation(s.matrixWorld),Fa.setFromRotationMatrix(nr),this.quaternion.premultiply(Fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(px),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aM),Ud.child=e,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(px),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hc,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hc,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};cn.DEFAULT_UP=new A(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gs=new A,ir=new A,zd=new A,sr=new A,ka=new A,Ha=new A,mx=new A,Od=new A,Fd=new A,Bd=new A,kd=new Ft,Hd=new Ft,Gd=new Ft,Wr=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gs.subVectors(e,t),s.cross(gs);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gs.subVectors(s,t),ir.subVectors(n,t),zd.subVectors(e,t);let o=gs.dot(gs),a=gs.dot(ir),l=gs.dot(zd),c=ir.dot(ir),h=ir.dot(zd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sr.x),l.addScaledVector(o,sr.y),l.addScaledVector(a,sr.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return kd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),kd.fromBufferAttribute(e,t),Hd.fromBufferAttribute(e,n),Gd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kd,r.x),o.addScaledVector(Hd,r.y),o.addScaledVector(Gd,r.z),o}static isFrontFacing(e,t,n,s){return gs.subVectors(n,t),ir.subVectors(e,t),gs.cross(ir).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gs.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),gs.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ka.subVectors(s,n),Ha.subVectors(r,n),Od.subVectors(e,n);let l=ka.dot(Od),c=Ha.dot(Od);if(l<=0&&c<=0)return t.copy(n);Fd.subVectors(e,s);let h=ka.dot(Fd),u=Ha.dot(Fd);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ka,o);Bd.subVectors(e,r);let d=ka.dot(Bd),g=Ha.dot(Bd);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ha,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return mx.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(mx,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ka,o).addScaledVector(Ha,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Yh={h:0,s:0,l:0};function Vd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=q0(e,1),t=Pn(t,0,1),n=Pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vd(o,r,e+1/3),this.g=Vd(o,r,e),this.b=Vd(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Iv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=il(e.r),this.g=il(e.g),this.b=il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return bt.fromWorkingColorSpace(ci.copy(this),e),Math.round(Pn(ci.r*255,0,255))*65536+Math.round(Pn(ci.g*255,0,255))*256+Math.round(Pn(ci.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(ci.copy(this),t);let n=ci.r,s=ci.g,r=ci.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=an){bt.fromWorkingColorSpace(ci.copy(this),e);let t=ci.r,n=ci.g,s=ci.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Yh);let n=Sc(Hr.h,Yh.h,t),s=Sc(Hr.s,Yh.s,t),r=Sc(Hr.l,Yh.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new re;re.NAMES=Iv;var lM=0,hi=class extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=$i(),this.name="",this.blending=hr,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=cp,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==Os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lp&&(n.blendSrc=this.blendSrc),this.blendDst!==cp&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(n.stencilFail=this.stencilFail),this.stencilZFail!==La&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Nt=class extends hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var En=new A,Zh=new J,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xp,this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zh.fromBufferAttribute(this,t),Zh.applyMatrix3(e),this.setXY(t,Zh.x,Zh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}};var Cu=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pu=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},cM=0,ji=new $e,Wd=new cn,Ga=new A,zi=new Ti,uc=new Ti,Xn=new A,Bt=class i extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pv(e)?Pu:Cu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,n){return ji.makeTranslation(e,t,n),this.applyMatrix4(ji),this}scale(e,t,n){return ji.makeScale(e,t,n),this.applyMatrix4(ji),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ga).negate(),this.translate(Ga.x,Ga.y,Ga.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zi.setFromBufferAttribute(r),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,zi.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,zi.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(zi.min),this.boundingBox.expandByPoint(zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(zi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uc.setFromBufferAttribute(a),this.morphTargetsRelative?(Xn.addVectors(zi.min,uc.min),zi.expandByPoint(Xn),Xn.addVectors(zi.max,uc.max),zi.expandByPoint(Xn)):(zi.expandByPoint(uc.min),zi.expandByPoint(uc.max))}zi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xn.fromBufferAttribute(a,c),l&&(Ga.fromBufferAttribute(e,c),Xn.add(Ga)),s=Math.max(s,n.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new A,l[P]=new A;let c=new A,h=new A,u=new A,f=new J,d=new J,g=new J,x=new A,m=new A;function p(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(x),a[b].add(x),a[M].add(x),l[P].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,b=y.length;P<b;++P){let M=y[P],I=M.start,U=M.count;for(let N=I,z=I+U;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new A,v=new A,L=new A,E=new A;function w(P){L.fromBufferAttribute(s,P),E.copy(L);let b=a[P];_.copy(b),_.sub(L.multiplyScalar(L.dot(b))).normalize(),v.crossVectors(E,b);let I=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,I)}for(let P=0,b=y.length;P<b;++P){let M=y[P],I=M.start,U=M.count;for(let N=I,z=I+U;N<z;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xn.fromBufferAttribute(e,t),Xn.normalize(),e.setXYZ(t,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new It(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gx=new $e,Zo=new ul,Kh=new Oi,xx=new A,jh=new A,Jh=new A,$h=new A,Xd=new A,Qh=new A,vx=new A,eu=new A,Xe=class extends cn{constructor(e=new Bt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xd.fromBufferAttribute(u,e),o?Qh.addScaledVector(Xd,h):Qh.addScaledVector(Xd.sub(t),h))}t.add(Qh)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kh.copy(n.boundingSphere),Kh.applyMatrix4(r),Zo.copy(e.ray).recast(e.near),!(Kh.containsPoint(Zo.origin)===!1&&(Zo.intersectSphere(Kh,xx)===null||Zo.origin.distanceToSquared(xx)>(e.far-e.near)**2))&&(gx.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(gx),!(n.boundingBox!==null&&Zo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,L=_;v<L;v+=3){let E=a.getX(v),w=a.getX(v+1),P=a.getX(v+2);s=tu(this,p,e,n,c,h,u,E,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=tu(this,o,e,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,L=_;v<L;v+=3){let E=v,w=v+1,P=v+2;s=tu(this,p,e,n,c,h,u,E,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=tu(this,o,e,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function hM(i,e,t,n,s,r,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Os,a),l===null)return null;eu.copy(a),eu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(eu);return c<t.near||c>t.far?null:{distance:c,point:eu.clone(),object:i}}function tu(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,jh),i.getVertexPosition(l,Jh),i.getVertexPosition(c,$h);let h=hM(i,e,t,n,jh,Jh,$h,vx);if(h){let u=new A;Wr.getBarycoord(vx,jh,Jh,$h,u),s&&(h.uv=Wr.getInterpolatedAttribute(s,a,l,c,u,new J)),r&&(h.uv1=Wr.getInterpolatedAttribute(r,a,l,c,u,new J)),o&&(h.normal=Wr.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Wr.getNormal(jh,Jh,$h,f.normal),h.face=f,h.barycoord=u}return h}var st=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function g(x,m,p,y,_,v,L,E,w,P,b){let M=v/w,I=L/P,U=v/2,N=L/2,z=E/2,G=w+1,B=P+1,j=0,X=0,se=new A;for(let ue=0;ue<B;ue++){let ge=ue*I-N;for(let Ee=0;Ee<G;Ee++){let ct=Ee*M-U;se[x]=ct*y,se[m]=ge*_,se[p]=z,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ee/w),u.push(1-ue/P),j+=1}}for(let ue=0;ue<P;ue++)for(let ge=0;ge<w;ge++){let Ee=f+ge+G*ue,ct=f+ge+G*(ue+1),$=f+(ge+1)+G*(ue+1),fe=f+(ge+1)+G*ue;l.push(Ee,ct,fe),l.push(ct,$,fe),X+=6}a.addGroup(d,X,b),d+=X,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fl(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mi(i){let e={};for(let t=0;t<i.length;t++){let n=fl(i[t]);for(let s in n)e[s]=n[s]}return e}function uM(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lv(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Ai={clone:fl,merge:mi},fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fl(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Iu=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gr=new A,yx=new J,_x=new J,In=class extends Iu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,yx,_x),t.subVectors(_x,yx)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Va=-90,Wa=1,Kp=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(Va,Wa,e,t);s.layers=this.layers,this.add(s);let r=new In(Va,Wa,e,t);r.layers=this.layers,this.add(r);let o=new In(Va,Wa,e,t);o.layers=this.layers,this.add(o);let a=new In(Va,Wa,e,t);a.layers=this.layers,this.add(a);let l=new In(Va,Wa,e,t);l.layers=this.layers,this.add(l);let c=new In(Va,Wa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tu)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lu=class extends qn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ol,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jp=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new st(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:fl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ln});r.uniforms.tEquirect.value=t;let o=new Xe(s,r),a=t.minFilter;return t.minFilter===zs&&(t.minFilter=$n),new Kp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},qd=new A,pM=new A,mM=new xt,ar=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qd.subVectors(n,t).cross(pM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mM.getNormalMatrix(e),s=this.coplanarPoint(qd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ko=new Oi,nu=new A,Ic=class{constructor(e=new ar,t=new ar,n=new ar,s=new ar,r=new ar,o=new ar){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+y).normalize(),n[3].setComponents(l-o,f-h,m-g,v-y).normalize(),n[4].setComponents(l-a,f-u,m-x,v-_).normalize(),t===cr)n[5].setComponents(l+a,f+u,m+x,v+_).normalize();else if(t===Tu)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ko.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ko.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ko)}intersectsSprite(e){return Ko.center.set(0,0,0),Ko.radius=.7071067811865476,Ko.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ko)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(nu.x=s.normal.x>0?e.max.x:e.min.x,nu.y=s.normal.y>0?e.max.y:e.min.y,nu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dv(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gM(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Yn=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),L=y+1+c*(p+1),E=y+1+c*p;d.push(_,v,E),d.push(v,L,E)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,yM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GM=`vec3 transformedNormal = objectNormal;
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
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`struct PhysicalMaterial {
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
}`,gb=`
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
#endif`,xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
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
#endif`,Db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
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
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
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
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,ES=`#define DISTANCE
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
}`,TS=`#define DISTANCE
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
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
}`,CS=`uniform vec3 diffuse;
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
}`,PS=`#include <common>
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
}`,IS=`uniform vec3 diffuse;
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
}`,LS=`#define LAMBERT
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
}`,DS=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,zS=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,kS=`#define STANDARD
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
}`,HS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,VS=`#define TOON
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
}`,WS=`uniform float size;
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
}`,XS=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,YS=`uniform vec3 color;
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
}`,ZS=`uniform float rotation;
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
}`,KS=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:xM,alphahash_pars_fragment:vM,alphamap_fragment:yM,alphamap_pars_fragment:_M,alphatest_fragment:MM,alphatest_pars_fragment:bM,aomap_fragment:SM,aomap_pars_fragment:EM,batching_pars_vertex:TM,batching_vertex:wM,begin_vertex:AM,beginnormal_vertex:RM,bsdfs:CM,iridescence_fragment:PM,bumpmap_pars_fragment:IM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:UM,color_fragment:zM,color_pars_fragment:OM,color_pars_vertex:FM,color_vertex:BM,common:kM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:GM,displacementmap_pars_vertex:VM,displacementmap_vertex:WM,emissivemap_fragment:XM,emissivemap_pars_fragment:qM,colorspace_fragment:YM,colorspace_pars_fragment:ZM,envmap_fragment:KM,envmap_common_pars_fragment:jM,envmap_pars_fragment:JM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:cb,envmap_vertex:QM,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:sb,lightmap_pars_fragment:rb,lights_lambert_fragment:ob,lights_lambert_pars_fragment:ab,lights_pars_begin:lb,lights_toon_fragment:hb,lights_toon_pars_fragment:ub,lights_phong_fragment:fb,lights_phong_pars_fragment:db,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:xb,lights_fragment_end:vb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:bb,map_fragment:Sb,map_pars_fragment:Eb,map_particle_fragment:Tb,map_particle_pars_fragment:wb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Cb,morphcolor_vertex:Pb,morphnormal_vertex:Ib,morphtarget_pars_vertex:Lb,morphtarget_vertex:Db,normal_fragment_begin:Nb,normal_fragment_maps:Ub,normal_pars_fragment:zb,normal_pars_vertex:Ob,normal_vertex:Fb,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:Wb,packing:Xb,premultiplied_alpha_fragment:qb,project_vertex:Yb,dithering_fragment:Zb,dithering_pars_fragment:Kb,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:$b,shadowmap_pars_vertex:Qb,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:sS,skinnormal_vertex:rS,specularmap_fragment:oS,specularmap_pars_fragment:aS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:hS,transmission_pars_fragment:uS,uv_pars_fragment:fS,uv_pars_vertex:dS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:xS,backgroundCube_vert:vS,backgroundCube_frag:yS,cube_vert:_S,cube_frag:MS,depth_vert:bS,depth_frag:SS,distanceRGBA_vert:ES,distanceRGBA_frag:TS,equirect_vert:wS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:CS,meshbasic_vert:PS,meshbasic_frag:IS,meshlambert_vert:LS,meshlambert_frag:DS,meshmatcap_vert:NS,meshmatcap_frag:US,meshnormal_vert:zS,meshnormal_frag:OS,meshphong_vert:FS,meshphong_frag:BS,meshphysical_vert:kS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:WS,points_frag:XS,shadow_vert:qS,shadow_frag:YS,sprite_vert:ZS,sprite_frag:KS},Te={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Us={basic:{uniforms:mi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:mi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new re(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:mi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:mi([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:mi([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new re(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:mi([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:mi([Te.points,Te.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:mi([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:mi([Te.common,Te.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:mi([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:mi([Te.sprite,Te.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:mi([Te.common,Te.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:mi([Te.lights,Te.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Us.physical={uniforms:mi([Us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var iu={r:0,b:0,g:0},jo=new wi,jS=new $e;function JS(i,e,t,n,s,r,o){let a=new re(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===af)?(h===void 0&&(h=new Xe(new st(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:fl(Us.backgroundCube.uniforms),vertexShader:Us.backgroundCube.vertexShader,fragmentShader:Us.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jo.copy(_.backgroundRotation),jo.x*=-1,jo.y*=-1,jo.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jo.y*=-1,jo.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jS.makeRotationFromEuler(jo)),h.material.toneMapped=bt.getTransfer(v.colorSpace)!==Wt,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xe(new Yn(2,2),new Dt({name:"BackgroundMaterial",uniforms:fl(Us.background.uniforms),vertexShader:Us.background.vertexShader,fragmentShader:Us.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=bt.getTransfer(v.colorSpace)!==Wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(iu,Lv(i)),n.buffers.color.setClear(iu.r,iu.g,iu.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function $S(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,I,U,N,z){let G=!1,B=u(N,U,I);r!==B&&(r=B,c(r.object)),G=d(M,N,U,z),G&&g(M,N,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,I,U,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,U){let N=U.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let G=z[I.id];G===void 0&&(G={},z[I.id]=G);let B=G[N];return B===void 0&&(B=f(l()),G[N]=B),B}function f(M){let I=[],U=[],N=[];for(let z=0;z<t;z++)I[z]=0,U[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:N,object:M,attributes:{},index:null}}function d(M,I,U,N){let z=r.attributes,G=I.attributes,B=0,j=U.getAttributes();for(let X in j)if(j[X].location>=0){let ue=z[X],ge=G[X];if(ge===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function g(M,I,U,N){let z={},G=I.attributes,B=0,j=U.getAttributes();for(let X in j)if(j[X].location>=0){let ue=G[X];ue===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));let ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),z[X]=ge,B++}r.attributes=z,r.attributesNum=B,r.index=N}function x(){let M=r.newAttributes;for(let I=0,U=M.length;I<U;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let U=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;U[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),z[M]!==I&&(i.vertexAttribDivisor(M,I),z[M]=I)}function y(){let M=r.newAttributes,I=r.enabledAttributes;for(let U=0,N=I.length;U<N;U++)I[U]!==M[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function _(M,I,U,N,z,G,B){B===!0?i.vertexAttribIPointer(M,I,U,z,G):i.vertexAttribPointer(M,I,U,N,z,G)}function v(M,I,U,N){x();let z=N.attributes,G=U.getAttributes(),B=I.defaultAttributeValues;for(let j in G){let X=G[j];if(X.location>=0){let se=z[j];if(se===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let ue=se.normalized,ge=se.itemSize,Ee=e.get(se);if(Ee===void 0)continue;let ct=Ee.buffer,$=Ee.type,fe=Ee.bytesPerElement,Ue=$===i.INT||$===i.UNSIGNED_INT||se.gpuType===F0;if(se.isInterleavedBufferAttribute){let de=se.data,We=de.stride,Me=se.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<X.locationSize;ve++)p(X.location+ve,de.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ve=0;ve<X.locationSize;ve++)_(X.location+ve,ge/X.locationSize,$,ue,We*fe,(Me+ge/X.locationSize*ve)*fe,Ue)}else{if(se.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)p(X.location+de,se.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let de=0;de<X.locationSize;de++)m(X.location+de);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let de=0;de<X.locationSize;de++)_(X.location+de,ge/X.locationSize,$,ue,ge*fe,ge/X.locationSize*de*fe,Ue)}}else if(B!==void 0){let ue=B[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(X.location,ue);break;case 3:i.vertexAttrib3fv(X.location,ue);break;case 4:i.vertexAttrib4fv(X.location,ue);break;default:i.vertexAttrib1fv(X.location,ue)}}}}y()}function L(){P();for(let M in n){let I=n[M];for(let U in I){let N=I[U];for(let z in N)h(N[z].object),delete N[z];delete I[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let U in I){let N=I[U];for(let z in N)h(N[z].object),delete N[z];delete I[U]}delete n[M.id]}function w(M){for(let I in n){let U=n[I];if(U[M.id]===void 0)continue;let N=U[M.id];for(let z in N)h(N[z].object),delete N[z];delete U[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function QS(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ys&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vs&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:L,maxSamples:E}}function tE(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ar,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,_,d);for(let L=0;L!==_;++L)v[L]=t[L];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function nE(i){let e=new WeakMap;function t(o,a){return a===xp?o.mapping=ol:a===vp&&(o.mapping=al),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xp||a===vp)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Kr=class extends Iu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},el=4,Mx=[.125,.215,.35,.446,.526,.582],Qo=20,Yd=new Kr,bx=new re,Zd=null,Kd=0,jd=0,Jd=!1,$o=(1+Math.sqrt(5))/2,Xa=1/$o,Sx=[new A(-$o,Xa,0),new A($o,Xa,0),new A(-Xa,0,$o),new A(Xa,0,$o),new A(0,$o,-Xa),new A(0,$o,Xa),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Du=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Kd,jd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ol||e.mapping===al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ui,format:Ei,colorSpace:fi,depthBuffer:!1},s=Ex(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iE(r)),this._blurMaterial=sE(r,e,t)}return s}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Yd)}_sceneToCubeUV(e,t,n,s){let a=new In(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bx),h.toneMapping=qr,h.autoClear=!1;let d=new Nt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Xe(new st,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(bx),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;su(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ol||e.mapping===al;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tx());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;su(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sx[(s-r-1)%Sx.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qo-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Qo;m>Qo&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qo}`);let p=[],y=0;for(let w=0;w<Qo;++w){let P=w/x,b=Math.exp(-P*P/2);p.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],L=3*v*(s>_-el?s-_+el:0),E=4*(this._cubeSize-v);su(t,L,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Yd)}};function iE(i){let e=[],t=[],n=[],s=i,r=i-el+1+Mx.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-el?l=Mx[o-i+el-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,P=E>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];y.set(b,x*g*E),_.set(f,m*g*E);let M=[E,E,E,E,E,E];v.set(M,p*g*E)}let L=new Bt;L.setAttribute("position",new It(y,x)),L.setAttribute("uv",new It(_,m)),L.setAttribute("faceIndex",new It(v,p)),e.push(L),s>el&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ex(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=af,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function su(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sE(i,e,t){let n=new Float32Array(Qo),s=new A(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Qo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Y0(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Tx(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Y0(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function wx(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Y0(){return`

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
	`}function rE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xp||l===vp,h=l===ol||l===al;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Du(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Du(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&yc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function aE(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){let L=y[_+0],E=y[_+1],w=y[_+2];f.push(L,E,E,w,w,L)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let L=_+0,E=_+1,w=_+2;f.push(L,E,E,w,w,L)}}else return;let m=new(Pv(f)?Pu:Cu)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lE(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hE(i,e,t){let n=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,L=1;v>e.maxTextureSize&&(L=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*L*4*u),w=new Au(E,v,L,u);w.type=vs,w.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let I=m[M],U=p[M],N=y[M],z=v*L*4*M;for(let G=0;G<I.count;G++){let B=G*P;d===!0&&(s.fromBufferAttribute(I,G),E[z+B+0]=s.x,E[z+B+1]=s.y,E[z+B+2]=s.z,E[z+B+3]=0),g===!0&&(s.fromBufferAttribute(U,G),E[z+B+4]=s.x,E[z+B+5]=s.y,E[z+B+6]=s.z,E[z+B+7]=0),x===!0&&(s.fromBufferAttribute(N,G),E[z+B+8]=s.x,E[z+B+9]=s.y,E[z+B+10]=s.z,E[z+B+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new J(v,L)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function uE(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var dl=class extends qn{constructor(e,t,n,s,r,o,a,l,c,h=nl){if(h!==nl&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===nl&&(n=ea),n===void 0&&h===Zr&&(n=Yr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nv=new qn,Ax=new dl(1,1),Uv=new Au,zv=new Zp,Ov=new Lu,Rx=[],Cx=[],Px=new Float32Array(16),Ix=new Float32Array(9),Lx=new Float32Array(4);function Tl(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rx[s];if(r===void 0&&(r=new Float32Array(s),Rx[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ff(i,e){let t=Cx[e];t===void 0&&(t=new Int32Array(e),Cx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function pE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function mE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function gE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(Nn(t,n))return;Lx.set(n),i.uniformMatrix2fv(this.addr,!1,Lx),Un(t,n)}}function xE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(Nn(t,n))return;Ix.set(n),i.uniformMatrix3fv(this.addr,!1,Ix),Un(t,n)}}function vE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(Nn(t,n))return;Px.set(n),i.uniformMatrix4fv(this.addr,!1,Px),Un(t,n)}}function yE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _E(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function ME(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function bE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function SE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function EE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function TE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function wE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function AE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ax.compareFunction=Cv,r=Ax):r=Nv,t.setTexture2D(e||r,s)}function RE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zv,s)}function CE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ov,s)}function PE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uv,s)}function IE(i){switch(i){case 5126:return fE;case 35664:return dE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return xE;case 35676:return vE;case 5124:case 35670:return yE;case 35667:case 35671:return _E;case 35668:case 35672:return ME;case 35669:case 35673:return bE;case 5125:return SE;case 36294:return EE;case 36295:return TE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return PE}}function LE(i,e){i.uniform1fv(this.addr,e)}function DE(i,e){let t=Tl(e,this.size,2);i.uniform2fv(this.addr,t)}function NE(i,e){let t=Tl(e,this.size,3);i.uniform3fv(this.addr,t)}function UE(i,e){let t=Tl(e,this.size,4);i.uniform4fv(this.addr,t)}function zE(i,e){let t=Tl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function OE(i,e){let t=Tl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function FE(i,e){let t=Tl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function BE(i,e){i.uniform1iv(this.addr,e)}function kE(i,e){i.uniform2iv(this.addr,e)}function HE(i,e){i.uniform3iv(this.addr,e)}function GE(i,e){i.uniform4iv(this.addr,e)}function VE(i,e){i.uniform1uiv(this.addr,e)}function WE(i,e){i.uniform2uiv(this.addr,e)}function XE(i,e){i.uniform3uiv(this.addr,e)}function qE(i,e){i.uniform4uiv(this.addr,e)}function YE(i,e,t){let n=this.cache,s=e.length,r=ff(t,s);Nn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nv,r[o])}function ZE(i,e,t){let n=this.cache,s=e.length,r=ff(t,s);Nn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zv,r[o])}function KE(i,e,t){let n=this.cache,s=e.length,r=ff(t,s);Nn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ov,r[o])}function jE(i,e,t){let n=this.cache,s=e.length,r=ff(t,s);Nn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uv,r[o])}function JE(i){switch(i){case 5126:return LE;case 35664:return DE;case 35665:return NE;case 35666:return UE;case 35674:return zE;case 35675:return OE;case 35676:return FE;case 5124:case 35670:return BE;case 35667:case 35671:return kE;case 35668:case 35672:return HE;case 35669:case 35673:return GE;case 5125:return VE;case 36294:return WE;case 36295:return XE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return jE}}var Jp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=IE(t.type)}},$p=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JE(t.type)}},Qp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},$d=/(\w+)(\])?(\[|\.)?/g;function Dx(i,e){i.seq.push(e),i.map[e.id]=e}function $E(i,e,t){let n=i.name,s=n.length;for($d.lastIndex=0;;){let r=$d.exec(n),o=$d.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dx(t,c===void 0?new Jp(a,i,e):new $p(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Qp(a),Dx(t,u)),t=u}}}var sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$E(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Nx(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var QE=37297,eT=0;function tT(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ux=new xt;function nT(i){bt._getMatrix(Ux,bt.workingColorSpace,i);let e=`mat3( ${Ux.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case hf:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zx(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tT(i.getShaderSource(e),o)}else return s}function iT(i,e){let t=nT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sT(i,e){let t;switch(e){case L0:t="Linear";break;case D0:t="Reinhard";break;case N0:t="Cineon";break;case Xc:t="ACESFilmic";break;case U0:t="AgX";break;case z0:t="Neutral";break;case v1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ru=new A;function rT(){bt.getLuminanceCoefficients(ru);let i=ru.x.toFixed(4),e=ru.y.toFixed(4),t=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_c).join(`
`)}function aT(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lT(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _c(i){return i!==""}function Ox(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function e0(i){return i.replace(cT,uT)}var hT=new Map;function uT(i,e){let t=yt[e];if(t===void 0){let n=hT.get(e);if(n!==void 0)t=yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return e0(t)}var fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bx(i){return i.replace(fT,dT)}function dT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kx(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ol:case al:e="ENVMAP_TYPE_CUBE";break;case af:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===al&&(e="ENVMAP_MODE_REFRACTION"),e}function xT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xv:e="ENVMAP_BLENDING_MULTIPLY";break;case g1:e="ENVMAP_BLENDING_MIX";break;case x1:e="ENVMAP_BLENDING_ADD";break}return e}function vT(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yT(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pT(t),c=mT(t),h=gT(t),u=xT(t),f=vT(t),d=oT(t),g=aT(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_c).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_c).join(`
`),p.length>0&&(p+=`
`)):(m=[kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_c).join(`
`),p=[kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?yt.tonemapping_pars_fragment:"",t.toneMapping!==qr?sT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,iT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_c).join(`
`)),o=e0(o),o=Ox(o,t),o=Fx(o,t),a=e0(a),a=Ox(a,t),a=Fx(a,t),o=Bx(o),a=Bx(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+o,v=y+p+a,L=Nx(s,s.VERTEX_SHADER,_),E=Nx(s,s.FRAGMENT_SHADER,v);s.attachShader(x,L),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(E).trim(),G=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,E);else{let j=zx(s,L,"vertex"),X=zx(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+j+`
`+X)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||z==="")&&(B=!1);B&&(I.diagnostics={runnable:G,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(E),P=new sl(s,x),b=lT(s,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,QE)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=E,this}var _T=0,t0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new n0(e),t.set(e,n)),n}},n0=class{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}};function MT(i,e,t,n,s,r,o){let a=new Ru,l=new t0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,U,N){let z=U.fog,G=N.geometry,B=b.isMeshStandardMaterial?U.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),X=j&&j.mapping===af?j.image.height:null,se=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=ue!==void 0?ue.length:0,Ee=0;G.morphAttributes.position!==void 0&&(Ee=1),G.morphAttributes.normal!==void 0&&(Ee=2),G.morphAttributes.color!==void 0&&(Ee=3);let ct,$,fe,Ue;if(se){let Yt=Us[se];ct=Yt.vertexShader,$=Yt.fragmentShader}else ct=b.vertexShader,$=b.fragmentShader,l.update(b),fe=l.getVertexShaderID(b),Ue=l.getFragmentShaderID(b);let de=i.getRenderTarget(),We=i.state.buffers.depth.getReversed(),Me=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,nt=!!b.map,ee=!!b.matcap,pe=!!j,D=!!b.aoMap,He=!!b.lightMap,ce=!!b.bumpMap,Le=!!b.normalMap,ye=!!b.displacementMap,Qe=!!b.emissiveMap,Ce=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,W=b.clearcoat>0,te=b.dispersion>0,ae=b.iridescence>0,ne=b.sheen>0,Ge=b.transmission>0,be=S&&!!b.anisotropyMap,we=W&&!!b.clearcoatMap,pt=W&&!!b.clearcoatNormalMap,he=W&&!!b.clearcoatRoughnessMap,Be=ae&&!!b.iridescenceMap,it=ae&&!!b.iridescenceThicknessMap,ot=ne&&!!b.sheenColorMap,ke=ne&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,lt=!!b.specularColorMap,zt=!!b.specularIntensityMap,F=Ge&&!!b.transmissionMap,Se=Ge&&!!b.thicknessMap,K=!!b.gradientMap,oe=!!b.alphaMap,De=b.alphaTest>0,Pe=!!b.alphaHash,mt=!!b.extensions,vn=qr;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(vn=i.toneMapping);let ai={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:$,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:Me,instancingColor:Me&&N.instanceColor!==null,instancingMorph:Me&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:fi,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:ee,envMap:pe,envMapMode:pe&&j.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:He,bumpMap:ce,normalMap:Le,displacementMap:f&&ye,emissiveMap:Qe,normalMapObjectSpace:Le&&b.normalMapType===T1,normalMapTangentSpace:Le&&b.normalMapType===cf,metalnessMap:Ce,roughnessMap:C,anisotropy:S,anisotropyMap:be,clearcoat:W,clearcoatMap:we,clearcoatNormalMap:pt,clearcoatRoughnessMap:he,dispersion:te,iridescence:ae,iridescenceMap:Be,iridescenceThicknessMap:it,sheen:ne,sheenColorMap:ot,sheenRoughnessMap:ke,specularMap:Pt,specularColorMap:lt,specularIntensityMap:zt,transmission:Ge,transmissionMap:F,thicknessMap:Se,gradientMap:K,opaque:b.transparent===!1&&b.blending===hr&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:De,alphaHash:Pe,combine:b.combine,mapUv:nt&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:He&&x(b.lightMap.channel),bumpMapUv:ce&&x(b.bumpMap.channel),normalMapUv:Le&&x(b.normalMap.channel),displacementMapUv:ye&&x(b.displacementMap.channel),emissiveMapUv:Qe&&x(b.emissiveMap.channel),metalnessMapUv:Ce&&x(b.metalnessMap.channel),roughnessMapUv:C&&x(b.roughnessMap.channel),anisotropyMapUv:be&&x(b.anisotropyMap.channel),clearcoatMapUv:we&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(b.sheenRoughnessMap.channel),specularMapUv:Pt&&x(b.specularMap.channel),specularColorMapUv:lt&&x(b.specularColorMap.channel),specularIntensityMapUv:zt&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:Se&&x(b.thicknessMap.channel),alphaMapUv:oe&&x(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(nt||oe),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:We,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:vn,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===Wt,decodeVideoTextureEmissive:Qe&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===Wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:mt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&b.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ai.vertexUv1s=c.has(1),ai.vertexUv2s=c.has(2),ai.vertexUv3s=c.has(3),c.clear(),ai}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],I;if(M){let U=Us[M];I=Ai.clone(U.uniforms)}else I=b.uniforms;return I}function L(b,M){let I;for(let U=0,N=h.length;U<N;U++){let z=h[U];if(z.cacheKey===M){I=z,++I.usedTimes;break}}return I===void 0&&(I=new yT(i,M,b,r),h.push(I)),I}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:P}}function bT(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ST(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gx(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||ST),n.length>1&&n.sort(f||Hx),s.length>1&&s.sort(f||Hx)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ET(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Gx,i.set(n,[o])):s>=r.length?(o=new Gx,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function TT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new re};break;case"SpotLight":t={position:new A,direction:new A,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function wT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var AT=0;function RT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CT(i){let e=new TT,t=wT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new $e,o=new $e;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,_=0,v=0,L=0,E=0,w=0;c.sort(RT);for(let b=0,M=c.length;b<M;b++){let I=c[b],U=I.color,N=I.intensity,z=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],N);w++}else if(I.isDirectionalLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,X=t.get(I);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=I.shadow.matrix,y++}n.directional[d]=B,d++}else if(I.isSpotLight){let B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(U).multiplyScalar(N),B.distance=z,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[x]=B;let j=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,j.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=j.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=G,v++}x++}else if(I.isRectAreaLight){let B=e.get(I);B.color.copy(U).multiplyScalar(N),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=B,m++}else if(I.isPointLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let j=I.shadow,X=t.get(I);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=I.shadow.matrix,_++}n.point[g]=B,g++}else if(I.isHemisphereLight){let B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(N),B.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=w,n.version=AT++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Vx(i){let e=new CT(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function PT(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Vx(i),e.set(s,[a])):r>=o.length?(a=new Vx(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var i0=class extends hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=S1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},s0=class extends hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LT=`uniform sampler2D shadow_pass;
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
}`;function DT(i,e,t){let n=new Ic,s=new J,r=new J,o=new Ft,a=new i0({depthPacking:E1}),l=new s0,c={},h=t.maxTextureSize,u={[Os]:Tn,[Tn]:Os,[dn]:dn},f=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:IT,fragmentShader:LT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gv;let p=this.type;this.render=function(E,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ln),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=p!==or&&this.type===or,z=p===or&&this.type!==or;for(let G=0,B=E.length;G<B;G++){let j=E[G],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let se=X.getFrameExtents();if(s.multiply(se),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,X.mapSize.y=r.y)),X.map===null||N===!0||z===!0){let ge=this.type!==or?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new wn(s.x,s.y,ge),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ue=X.getViewportCount();for(let ge=0;ge<ue;ge++){let Ee=X.getViewport(ge);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),U.viewport(o),X.updateMatrices(j,ge),n=X.getFrustum(),v(w,P,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===or&&y(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,I)};function y(E,w){let P=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,P,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,P,d,x,null)}function _(E,w,P,b){let M=null,I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=M.uuid,N=w.uuid,z=c[U];z===void 0&&(z={},c[U]=z);let G=z[N];G===void 0&&(G=M.clone(),z[N]=G,w.addEventListener("dispose",L)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,b===or?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=i.properties.get(M);U.light=P}return M}function v(E,w,P,b,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===or)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let N=e.update(E),z=E.material;if(Array.isArray(z)){let G=N.groups;for(let B=0,j=G.length;B<j;B++){let X=G[B],se=z[X.materialIndex];if(se&&se.visible){let ue=_(E,se,b,M);E.onBeforeShadow(i,E,w,P,N,ue,X),i.renderBufferDirect(P,null,N,ue,E,X),E.onAfterShadow(i,E,w,P,N,ue,X)}}}else if(z.visible){let G=_(E,z,b,M);E.onBeforeShadow(i,E,w,P,N,G,null),i.renderBufferDirect(P,null,N,G,E,null),E.onAfterShadow(i,E,w,P,N,G,null)}}let U=E.children;for(let N=0,z=U.length;N<z;N++)v(U[N],w,P,b,M)}function L(E){E.target.removeEventListener("dispose",L);for(let P in c){let b=c[P],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var NT={[hp]:up,[fp]:mp,[dp]:gp,[rl]:pp,[up]:hp,[mp]:fp,[gp]:dp,[pp]:rl};function UT(i,e){function t(){let F=!1,Se=new Ft,K=null,oe=new Ft(0,0,0,0);return{setMask:function(De){K!==De&&!F&&(i.colorMask(De,De,De,De),K=De)},setLocked:function(De){F=De},setClear:function(De,Pe,mt,vn,ai){ai===!0&&(De*=vn,Pe*=vn,mt*=vn),Se.set(De,Pe,mt,vn),oe.equals(Se)===!1&&(i.clearColor(De,Pe,mt,vn),oe.copy(Se))},reset:function(){F=!1,K=null,oe.set(-1,0,0,0)}}}function n(){let F=!1,Se=!1,K=null,oe=null,De=null;return{setReversed:function(Pe){if(Se!==Pe){let mt=e.get("EXT_clip_control");Se?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT);let vn=De;De=null,this.setClear(vn)}Se=Pe},getReversed:function(){return Se},setTest:function(Pe){Pe?de(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(Pe){K!==Pe&&!F&&(i.depthMask(Pe),K=Pe)},setFunc:function(Pe){if(Se&&(Pe=NT[Pe]),oe!==Pe){switch(Pe){case hp:i.depthFunc(i.NEVER);break;case up:i.depthFunc(i.ALWAYS);break;case fp:i.depthFunc(i.LESS);break;case rl:i.depthFunc(i.LEQUAL);break;case dp:i.depthFunc(i.EQUAL);break;case pp:i.depthFunc(i.GEQUAL);break;case mp:i.depthFunc(i.GREATER);break;case gp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Pe}},setLocked:function(Pe){F=Pe},setClear:function(Pe){De!==Pe&&(Se&&(Pe=1-Pe),i.clearDepth(Pe),De=Pe)},reset:function(){F=!1,K=null,oe=null,De=null,Se=!1}}}function s(){let F=!1,Se=null,K=null,oe=null,De=null,Pe=null,mt=null,vn=null,ai=null;return{setTest:function(Yt){F||(Yt?de(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(Yt){Se!==Yt&&!F&&(i.stencilMask(Yt),Se=Yt)},setFunc:function(Yt,fs,$s){(K!==Yt||oe!==fs||De!==$s)&&(i.stencilFunc(Yt,fs,$s),K=Yt,oe=fs,De=$s)},setOp:function(Yt,fs,$s){(Pe!==Yt||mt!==fs||vn!==$s)&&(i.stencilOp(Yt,fs,$s),Pe=Yt,mt=fs,vn=$s)},setLocked:function(Yt){F=Yt},setClear:function(Yt){ai!==Yt&&(i.clearStencil(Yt),ai=Yt)},reset:function(){F=!1,Se=null,K=null,oe=null,De=null,Pe=null,mt=null,vn=null,ai=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,L=null,E=null,w=new re(0,0,0),P=0,b=!1,M=null,I=null,U=null,N=null,z=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,j=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=j>=2);let se=null,ue={},ge=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ct=new Ft().fromArray(ge),$=new Ft().fromArray(Ee);function fe(F,Se,K,oe){let De=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(F,Pe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<K;mt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Se+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Pe}let Ue={};Ue[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(rl),ce(!1),Le(Zg),de(i.CULL_FACE),D(Ln);function de(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function We(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Me(F,Se){return u[F]!==Se?(i.bindFramebuffer(F,Se),u[F]=Se,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function ve(F,Se){let K=d,oe=!1;if(F){K=f.get(Se),K===void 0&&(K=[],f.set(Se,K));let De=F.textures;if(K.length!==De.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,mt=De.length;Pe<mt;Pe++)K[Pe]=i.COLOR_ATTACHMENT0+Pe;K.length=De.length,oe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,oe=!0);oe&&i.drawBuffers(K)}function nt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let ee={[Ji]:i.FUNC_ADD,[n1]:i.FUNC_SUBTRACT,[i1]:i.FUNC_REVERSE_SUBTRACT};ee[s1]=i.MIN,ee[r1]=i.MAX;let pe={[El]:i.ZERO,[o1]:i.ONE,[a1]:i.SRC_COLOR,[lp]:i.SRC_ALPHA,[u1]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[rf]:i.DST_ALPHA,[l1]:i.ONE_MINUS_SRC_COLOR,[cp]:i.ONE_MINUS_SRC_ALPHA,[h1]:i.ONE_MINUS_DST_COLOR,[c1]:i.ONE_MINUS_DST_ALPHA,[f1]:i.CONSTANT_COLOR,[d1]:i.ONE_MINUS_CONSTANT_COLOR,[p1]:i.CONSTANT_ALPHA,[m1]:i.ONE_MINUS_CONSTANT_ALPHA};function D(F,Se,K,oe,De,Pe,mt,vn,ai,Yt){if(F===Ln){x===!0&&(We(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),F!==I0){if(F!==m||Yt!==b){if((p!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,v=Ji),Yt)switch(F){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case Kg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,_=null,L=null,E=null,w.set(0,0,0),P=0,m=F,b=Yt}return}De=De||Se,Pe=Pe||K,mt=mt||oe,(Se!==p||De!==v)&&(i.blendEquationSeparate(ee[Se],ee[De]),p=Se,v=De),(K!==y||oe!==_||Pe!==L||mt!==E)&&(i.blendFuncSeparate(pe[K],pe[oe],pe[Pe],pe[mt]),y=K,_=oe,L=Pe,E=mt),(vn.equals(w)===!1||ai!==P)&&(i.blendColor(vn.r,vn.g,vn.b,ai),w.copy(vn),P=ai),m=F,b=!1}function He(F,Se){F.side===dn?We(i.CULL_FACE):de(i.CULL_FACE);let K=F.side===Tn;Se&&(K=!K),ce(K),F.blending===hr&&F.transparent===!1?D(Ln):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Qe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Le(F){F!==e1?(de(i.CULL_FACE),F!==I&&(F===Zg?i.cullFace(i.BACK):F===t1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),I=F}function ye(F){F!==U&&(B&&i.lineWidth(F),U=F)}function Qe(F,Se,K){F?(de(i.POLYGON_OFFSET_FILL),(N!==Se||z!==K)&&(i.polygonOffset(Se,K),N=Se,z=K)):We(i.POLYGON_OFFSET_FILL)}function Ce(F){F?de(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function C(F){F===void 0&&(F=i.TEXTURE0+G-1),se!==F&&(i.activeTexture(F),se=F)}function S(F,Se,K){K===void 0&&(se===null?K=i.TEXTURE0+G-1:K=se);let oe=ue[K];oe===void 0&&(oe={type:void 0,texture:void 0},ue[K]=oe),(oe.type!==F||oe.texture!==Se)&&(se!==K&&(i.activeTexture(K),se=K),i.bindTexture(F,Se||Ue[F]),oe.type=F,oe.texture=Se)}function W(){let F=ue[se];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(F){ct.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ct.copy(F))}function ke(F){$.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function Pt(F,Se){let K=c.get(Se);K===void 0&&(K=new WeakMap,c.set(Se,K));let oe=K.get(F);oe===void 0&&(oe=i.getUniformBlockIndex(Se,F.name),K.set(F,oe))}function lt(F,Se){let oe=c.get(Se).get(F);l.get(Se)!==oe&&(i.uniformBlockBinding(Se,oe,F.__bindingPointIndex),l.set(Se,oe))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ue={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,L=null,E=null,w=new re(0,0,0),P=0,b=!1,M=null,I=null,U=null,N=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:We,bindFramebuffer:Me,drawBuffers:ve,useProgram:nt,setBlending:D,setMaterial:He,setFlipSided:ce,setCullFace:Le,setLineWidth:ye,setPolygonOffset:Qe,setScissorTest:Ce,activeTexture:C,bindTexture:S,unbindTexture:W,compressedTexImage2D:te,compressedTexImage3D:ae,texImage2D:Be,texImage3D:it,updateUBOMapping:Pt,uniformBlockBinding:lt,texStorage2D:pt,texStorage3D:he,texSubImage2D:ne,texSubImage3D:Ge,compressedTexSubImage2D:be,compressedTexSubImage3D:we,scissor:ot,viewport:ke,reset:zt}}function Wx(i,e,t,n){let s=zT(n);switch(t){case bv:return i*e;case Ev:return i*e;case Tv:return i*e*2;case qc:return i*e/s.components*s.byteLength;case H0:return i*e/s.components*s.byteLength;case wv:return i*e*2/s.components*s.byteLength;case G0:return i*e*2/s.components*s.byteLength;case Sv:return i*e*3/s.components*s.byteLength;case Ei:return i*e*4/s.components*s.byteLength;case V0:return i*e*4/s.components*s.byteLength;case yu:case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mu:case bu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _p:case bp:return Math.max(i,16)*Math.max(e,8)/4;case yp:case Mp:return Math.max(i,8)*Math.max(e,8)/2;case Sp:case Ep:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Up:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zp:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Op:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Su:case kp:case Hp:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Av:case Gp:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vp:case Wp:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zT(i){switch(i){case ys:case yv:return{byteLength:1,components:1};case Cc:case _v:case ui:return{byteLength:2,components:1};case B0:case k0:return{byteLength:2,components:4};case ea:case F0:case vs:return{byteLength:4,components:1};case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function OT(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):Pc("canvas")}function x(C,S,W){let te=1,ae=Ce(C);if((ae.width>W||ae.height>W)&&(te=W/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ne=Math.floor(te*ae.width),Ge=Math.floor(te*ae.height);u===void 0&&(u=g(ne,Ge));let be=S?g(ne,Ge):u;return be.width=ne,be.height=Ge,be.getContext("2d").drawImage(C,0,0,ne,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Ge+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,W,te,ae=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),S===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),S===i.RGBA){let Ge=ae?hf:bt.getTransfer(te);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=Ge===Wt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(C,S){let W;return C?S===null||S===ea||S===Yr?W=i.DEPTH24_STENCIL8:S===vs?W=i.DEPTH32F_STENCIL8:S===Cc&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ea||S===Yr?W=i.DEPTH_COMPONENT24:S===vs?W=i.DEPTH_COMPONENT32F:S===Cc&&(W=i.DEPTH_COMPONENT16),W}function L(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dn&&C.minFilter!==$n?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){let S=C.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function w(C){let S=C.target;S.removeEventListener("dispose",w),M(S)}function P(C){let S=n.get(C);if(S.__webglInit===void 0)return;let W=C.source,te=f.get(W);if(te){let ae=te[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(C),Object.keys(te).length===0&&f.delete(W)}n.remove(C)}function b(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let W=C.source,te=f.get(W);delete te[S.__cacheKey],o.memory.textures--}function M(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let ae=0;ae<S.__webglFramebuffer[te].length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[te][ae]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=C.textures;for(let te=0,ae=W.length;te<ae;te++){let ne=n.get(W[te]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(W[te])}n.remove(C)}let I=0;function U(){I=0}function N(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){let W=n.get(C);if(C.isVideoTexture&&ye(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,C,S);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function B(C,S){let W=n.get(C);if(C.version>0&&W.__version!==C.version){$(W,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function j(C,S){let W=n.get(C);if(C.version>0&&W.__version!==C.version){$(W,C,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function X(C,S){let W=n.get(C);if(C.version>0&&W.__version!==C.version){fe(W,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let se={[Qn]:i.REPEAT,[lr]:i.CLAMP_TO_EDGE,[Rc]:i.MIRRORED_REPEAT},ue={[Dn]:i.NEAREST,[O0]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Mc]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},ge={[w1]:i.NEVER,[L1]:i.ALWAYS,[A1]:i.LESS,[Cv]:i.LEQUAL,[R1]:i.EQUAL,[I1]:i.GEQUAL,[C1]:i.GREATER,[P1]:i.NOTEQUAL};function Ee(C,S){if(S.type===vs&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===$n||S.magFilter===Mc||S.magFilter===Ja||S.magFilter===zs||S.minFilter===$n||S.minFilter===Mc||S.minFilter===Ja||S.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,se[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dn||S.minFilter!==Ja&&S.minFilter!==zs||S.type===vs&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ct(C,S){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));let te=S.source,ae=f.get(te);ae===void 0&&(ae={},f.set(te,ae));let ne=z(S);if(ne!==C.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[ne].usedTimes++;let Ge=ae[C.__cacheKey];Ge!==void 0&&(ae[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(S)),C.__cacheKey=ne,C.__webglTexture=ae[ne].texture}return W}function $(C,S,W){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);let ae=ct(C,S),ne=S.source;t.bindTexture(te,C.__webglTexture,i.TEXTURE0+W);let Ge=n.get(ne);if(ne.version!==Ge.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);let be=bt.getPrimaries(bt.workingColorSpace),we=S.colorSpace===Vr?null:bt.getPrimaries(S.colorSpace),pt=S.colorSpace===Vr||be===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let he=x(S.image,!1,s.maxTextureSize);he=Qe(S,he);let Be=r.convert(S.format,S.colorSpace),it=r.convert(S.type),ot=_(S.internalFormat,Be,it,S.colorSpace,S.isVideoTexture);Ee(te,S);let ke,Pt=S.mipmaps,lt=S.isVideoTexture!==!0,zt=Ge.__version===void 0||ae===!0,F=ne.dataReady,Se=L(S,he);if(S.isDepthTexture)ot=v(S.format===Zr,S.type),zt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,ot,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ot,he.width,he.height,0,Be,it,null));else if(S.isDataTexture)if(Pt.length>0){lt&&zt&&t.texStorage2D(i.TEXTURE_2D,Se,ot,Pt[0].width,Pt[0].height);for(let K=0,oe=Pt.length;K<oe;K++)ke=Pt[K],lt?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ke.width,ke.height,Be,it,ke.data):t.texImage2D(i.TEXTURE_2D,K,ot,ke.width,ke.height,0,Be,it,ke.data);S.generateMipmaps=!1}else lt?(zt&&t.texStorage2D(i.TEXTURE_2D,Se,ot,he.width,he.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Be,it,he.data)):t.texImage2D(i.TEXTURE_2D,0,ot,he.width,he.height,0,Be,it,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,ot,Pt[0].width,Pt[0].height,he.depth);for(let K=0,oe=Pt.length;K<oe;K++)if(ke=Pt[K],S.format!==Ei)if(Be!==null)if(lt){if(F)if(S.layerUpdates.size>0){let De=Wx(ke.width,ke.height,S.format,S.type);for(let Pe of S.layerUpdates){let mt=ke.data.subarray(Pe*De/ke.data.BYTES_PER_ELEMENT,(Pe+1)*De/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Pe,ke.width,ke.height,1,Be,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ke.width,ke.height,he.depth,Be,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ot,ke.width,ke.height,he.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ke.width,ke.height,he.depth,Be,it,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ot,ke.width,ke.height,he.depth,0,Be,it,ke.data)}else{lt&&zt&&t.texStorage2D(i.TEXTURE_2D,Se,ot,Pt[0].width,Pt[0].height);for(let K=0,oe=Pt.length;K<oe;K++)ke=Pt[K],S.format!==Ei?Be!==null?lt?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ke.width,ke.height,Be,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ot,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ke.width,ke.height,Be,it,ke.data):t.texImage2D(i.TEXTURE_2D,K,ot,ke.width,ke.height,0,Be,it,ke.data)}else if(S.isDataArrayTexture)if(lt){if(zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,ot,he.width,he.height,he.depth),F)if(S.layerUpdates.size>0){let K=Wx(he.width,he.height,S.format,S.type);for(let oe of S.layerUpdates){let De=he.data.subarray(oe*K/he.data.BYTES_PER_ELEMENT,(oe+1)*K/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,he.width,he.height,1,Be,it,De)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Be,it,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,he.width,he.height,he.depth,0,Be,it,he.data);else if(S.isData3DTexture)lt?(zt&&t.texStorage3D(i.TEXTURE_3D,Se,ot,he.width,he.height,he.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Be,it,he.data)):t.texImage3D(i.TEXTURE_3D,0,ot,he.width,he.height,he.depth,0,Be,it,he.data);else if(S.isFramebufferTexture){if(zt)if(lt)t.texStorage2D(i.TEXTURE_2D,Se,ot,he.width,he.height);else{let K=he.width,oe=he.height;for(let De=0;De<Se;De++)t.texImage2D(i.TEXTURE_2D,De,ot,K,oe,0,Be,it,null),K>>=1,oe>>=1}}else if(Pt.length>0){if(lt&&zt){let K=Ce(Pt[0]);t.texStorage2D(i.TEXTURE_2D,Se,ot,K.width,K.height)}for(let K=0,oe=Pt.length;K<oe;K++)ke=Pt[K],lt?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Be,it,ke):t.texImage2D(i.TEXTURE_2D,K,ot,Be,it,ke);S.generateMipmaps=!1}else if(lt){if(zt){let K=Ce(he);t.texStorage2D(i.TEXTURE_2D,Se,ot,K.width,K.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,it,he)}else t.texImage2D(i.TEXTURE_2D,0,ot,Be,it,he);m(S)&&p(te),Ge.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function fe(C,S,W){if(S.image.length!==6)return;let te=ct(C,S),ae=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let ne=n.get(ae);if(ae.version!==ne.__version||te===!0){t.activeTexture(i.TEXTURE0+W);let Ge=bt.getPrimaries(bt.workingColorSpace),be=S.colorSpace===Vr?null:bt.getPrimaries(S.colorSpace),we=S.colorSpace===Vr||Ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let pt=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Be=[];for(let oe=0;oe<6;oe++)!pt&&!he?Be[oe]=x(S.image[oe],!0,s.maxCubemapSize):Be[oe]=he?S.image[oe].image:S.image[oe],Be[oe]=Qe(S,Be[oe]);let it=Be[0],ot=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Pt=_(S.internalFormat,ot,ke,S.colorSpace),lt=S.isVideoTexture!==!0,zt=ne.__version===void 0||te===!0,F=ae.dataReady,Se=L(S,it);Ee(i.TEXTURE_CUBE_MAP,S);let K;if(pt){lt&&zt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Pt,it.width,it.height);for(let oe=0;oe<6;oe++){K=Be[oe].mipmaps;for(let De=0;De<K.length;De++){let Pe=K[De];S.format!==Ei?ot!==null?lt?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Pe.width,Pe.height,ot,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,Pt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Pe.width,Pe.height,ot,ke,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,Pt,Pe.width,Pe.height,0,ot,ke,Pe.data)}}}else{if(K=S.mipmaps,lt&&zt){K.length>0&&Se++;let oe=Ce(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Pt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){lt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be[oe].width,Be[oe].height,ot,ke,Be[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Pt,Be[oe].width,Be[oe].height,0,ot,ke,Be[oe].data);for(let De=0;De<K.length;De++){let mt=K[De].image[oe].image;lt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,mt.width,mt.height,ot,ke,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,Pt,mt.width,mt.height,0,ot,ke,mt.data)}}else{lt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ot,ke,Be[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Pt,ot,ke,Be[oe]);for(let De=0;De<K.length;De++){let Pe=K[De];lt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,ot,ke,Pe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,Pt,ot,ke,Pe.image[oe])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),ne.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ue(C,S,W,te,ae,ne){let Ge=r.convert(W.format,W.colorSpace),be=r.convert(W.type),we=_(W.internalFormat,Ge,be,W.colorSpace),pt=n.get(S),he=n.get(W);if(he.__renderTarget=S,!pt.__hasExternalTextures){let Be=Math.max(1,S.width>>ne),it=Math.max(1,S.height>>ne);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,we,Be,it,S.depth,0,Ge,be,null):t.texImage2D(ae,ne,we,Be,it,0,Ge,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Le(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ae,he.__webglTexture,0,ce(S)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ae,he.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(C,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let te=S.depthTexture,ae=te&&te.isDepthTexture?te.type:null,ne=v(S.stencilBuffer,ae),Ge=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=ce(S);Le(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ne,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,C)}else{let te=S.textures;for(let ae=0;ae<te.length;ae++){let ne=te[ae],Ge=r.convert(ne.format,ne.colorSpace),be=r.convert(ne.type),we=_(ne.internalFormat,Ge,be,ne.colorSpace),pt=ce(S);W&&Le(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,we,S.width,S.height):Le(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,we,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,we,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let ae=te.__webglTexture,ne=ce(S);if(S.depthTexture.format===nl)Le(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Zr)Le(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(C){let S=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let te=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=te}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");We(S.__webglFramebuffer,C)}else if(W){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=i.createRenderbuffer(),de(S.__webglDepthbuffer[te],C,!1);else{let ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),de(S.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(C,S,W){let te=n.get(C);S!==void 0&&Ue(te.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Me(C)}function nt(C){let S=C.texture,W=n.get(C),te=n.get(S);C.addEventListener("dispose",w);let ae=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Ge=ae.length>1;if(Ge||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,o.memory.textures++),ne){W.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[be]=[];for(let we=0;we<S.mipmaps.length;we++)W.__webglFramebuffer[be][we]=i.createFramebuffer()}else W.__webglFramebuffer[be]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)W.__webglFramebuffer[be]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let be=0,we=ae.length;be<we;be++){let pt=n.get(ae[be]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Le(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<ae.length;be++){let we=ae[be];W.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[be]);let pt=r.convert(we.format,we.colorSpace),he=r.convert(we.type),Be=_(we.internalFormat,pt,he,we.colorSpace,C.isXRRenderTarget===!0),it=ce(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Be,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,W.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),de(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)Ue(W.__webglFramebuffer[be][we],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,we);else Ue(W.__webglFramebuffer[be],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let be=0,we=ae.length;be<we;be++){let pt=ae[be],he=n.get(pt);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Ee(i.TEXTURE_2D,pt),Ue(W.__webglFramebuffer,C,pt,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(pt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,te.__webglTexture),Ee(be,S),S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)Ue(W.__webglFramebuffer[we],C,S,i.COLOR_ATTACHMENT0,be,we);else Ue(W.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,be,0);m(S)&&p(be),t.unbindTexture()}C.depthBuffer&&Me(C)}function ee(C){let S=C.textures;for(let W=0,te=S.length;W<te;W++){let ae=S[W];if(m(ae)){let ne=y(C),Ge=n.get(ae).__webglTexture;t.bindTexture(ne,Ge),p(ne),t.unbindTexture()}}}let pe=[],D=[];function He(C){if(C.samples>0){if(Le(C)===!1){let S=C.textures,W=C.width,te=C.height,ae=i.COLOR_BUFFER_BIT,ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(C),be=S.length>1;if(be)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let we=0;we<S.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[we]);let pt=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,W,te,0,0,W,te,ae,i.NEAREST),l===!0&&(pe.length=0,D.length=0,pe.push(i.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(ne),D.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[we]);let pt=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,pt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ce(C){return Math.min(s.maxSamples,C.samples)}function Le(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Qe(C,S){let W=C.colorSpace,te=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==fi&&W!==Vr&&(bt.getTransfer(W)===Wt?(te!==Ei||ae!==ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=ve,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Le}function FT(i,e){function t(n,s=Vr){let r,o=bt.getTransfer(s);if(n===ys)return i.UNSIGNED_BYTE;if(n===B0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===k0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yv)return i.BYTE;if(n===_v)return i.SHORT;if(n===Cc)return i.UNSIGNED_SHORT;if(n===F0)return i.INT;if(n===ea)return i.UNSIGNED_INT;if(n===vs)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===bv)return i.ALPHA;if(n===Sv)return i.RGB;if(n===Ei)return i.RGBA;if(n===Ev)return i.LUMINANCE;if(n===Tv)return i.LUMINANCE_ALPHA;if(n===nl)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===qc)return i.RED;if(n===H0)return i.RED_INTEGER;if(n===wv)return i.RG;if(n===G0)return i.RG_INTEGER;if(n===V0)return i.RGBA_INTEGER;if(n===yu||n===_u||n===Mu||n===bu)if(o===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_u)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_u)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yp||n===_p||n===Mp||n===bp)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_p)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bp)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sp||n===Ep||n===Tp)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sp||n===Ep)return o===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wp||n===Ap||n===Rp||n===Cp||n===Pp||n===Ip||n===Lp||n===Dp||n===Np||n===Up||n===zp||n===Op||n===Fp||n===Bp)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ap)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ip)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Np)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Up)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Op)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bp)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Su||n===kp||n===Hp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Su)return o===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Av||n===Gp||n===Vp||n===Wp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Su)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vp)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var r0=class extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ze=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},BT={type:"move"},Ec=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HT=`
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

}`,o0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new qn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dt({vertexShader:kT,fragmentShader:HT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},a0=class extends fr{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new o0,m=t.getContextAttributes(),p=null,y=null,_=[],v=[],L=new J,E=null,w=new In;w.viewport=new Ft;let P=new In;P.viewport=new Ft;let b=[w,P],M=new r0,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=_[$];return fe===void 0&&(fe=new Ec,_[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=_[$];return fe===void 0&&(fe=new Ec,_[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=_[$];return fe===void 0&&(fe=new Ec,_[$]=fe),fe.getHandSpace()};function N($){let fe=v.indexOf($.inputSource);if(fe===-1)return;let Ue=_[fe];Ue!==void 0&&(Ue.update($.inputSource,$.frame,c||o),Ue.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let $=0;$<_.length;$++){let fe=v[$];fe!==null&&(v[$]=null,_[$].disconnect(fe))}I=null,U=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new wn(d.framebufferWidth,d.framebufferHeight,{format:Ei,type:ys,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Ue=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Zr:nl,Ue=m.stencil?Yr:ea);let We={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new wn(f.textureWidth,f.textureHeight,{format:Ei,type:ys,depthTexture:new dl(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G($){for(let fe=0;fe<$.removed.length;fe++){let Ue=$.removed[fe],de=v.indexOf(Ue);de>=0&&(v[de]=null,_[de].disconnect(Ue))}for(let fe=0;fe<$.added.length;fe++){let Ue=$.added[fe],de=v.indexOf(Ue);if(de===-1){for(let Me=0;Me<_.length;Me++)if(Me>=v.length){v.push(Ue),de=Me;break}else if(v[Me]===null){v[Me]=Ue,de=Me;break}if(de===-1)break}let We=_[de];We&&We.connect(Ue)}}let B=new A,j=new A;function X($,fe,Ue){B.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(Ue.matrixWorld);let de=B.distanceTo(j),We=fe.projectionMatrix.elements,Me=Ue.projectionMatrix.elements,ve=We[14]/(We[10]-1),nt=We[14]/(We[10]+1),ee=(We[9]+1)/We[5],pe=(We[9]-1)/We[5],D=(We[8]-1)/We[0],He=(Me[8]+1)/Me[0],ce=ve*D,Le=ve*He,ye=de/(-D+He),Qe=ye*-D;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),We[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let Ce=ve+ye,C=nt+ye,S=ce-Qe,W=Le+(de-Qe),te=ee*nt/C*Ce,ae=pe*nt/C*Ce;$.projectionMatrix.makePerspective(S,W,te,ae,Ce,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let fe=$.near,Ue=$.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),M.near=P.near=w.near=fe,M.far=P.far=w.far=Ue,(I!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,U=M.far),w.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;let de=$.parent,We=M.cameras;se(M,de);for(let Me=0;Me<We.length;Me++)se(We[Me],de);We.length===2?X(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),ue($,M,de)};function ue($,fe,Ue){Ue===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(Ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ge=null;function Ee($,fe){if(h=fe.getViewerPose(c||o),g=fe,h!==null){let Ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let de=!1;Ue.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Me=0;Me<Ue.length;Me++){let ve=Ue[Me],nt=null;if(d!==null)nt=d.getViewport(ve);else{let pe=u.getViewSubImage(f,ve);nt=pe.viewport,Me===0&&(e.setRenderTargetTextures(y,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(y))}let ee=b[Me];ee===void 0&&(ee=new In,ee.layers.enable(Me),ee.viewport=new Ft,b[Me]=ee),ee.matrix.fromArray(ve.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ve.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(nt.x,nt.y,nt.width,nt.height),Me===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(ee)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")){let Me=u.getDepthInformation(Ue[0]);Me&&Me.isValid&&Me.texture&&x.init(e,Me,s.renderState)}}for(let Ue=0;Ue<_.length;Ue++){let de=v[Ue],We=_[Ue];de!==null&&We!==void 0&&We.update(de,fe,c||o)}ge&&ge($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let ct=new Dv;ct.setAnimationLoop(Ee),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}},Jo=new wi,GT=new $e;function VT(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lv(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,Jo.copy(v),Jo.x*=-1,Jo.y*=-1,Jo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Jo.y*=-1,Jo.z*=-1),m.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(Jo)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function WT(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let L=_.program;n.updateUBOMapping(y,L);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),L=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,w=v.length;E<w;E++){let P=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=P.length;b<M;b++){let I=P[b];if(d(I,E,b,L)===!0){let U=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],z=0;for(let G=0;G<N.length;G++){let B=N[G],j=x(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+z,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,L){let E=y.value,w=_+"_"+v;if(L[w]===void 0)return typeof E=="number"||typeof E=="boolean"?L[w]=E:L[w]=E.clone(),!0;{let P=L[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return L[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){let _=y.uniforms,v=0,L=16;for(let w=0,P=_.length;w<P;w++){let b=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,I=b.length;M<I;M++){let U=b[M],N=Array.isArray(U.value)?U.value:[U.value];for(let z=0,G=N.length;z<G;z++){let B=N[z],j=x(B),X=v%L,se=X%j.boundary,ue=X+se;v+=se,ue!==0&&L-ue<j.storage&&(v+=L-ue),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}let E=v%L;return E>0&&(v+=L-E),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Nu=class{constructor(e={}){let{canvas:t=K1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=qr,this.toneMappingExposure=1;let v=this,L=!1,E=0,w=0,P=null,b=-1,M=null,I=new Ft,U=new Ft,N=null,z=new re(0),G=0,B=t.width,j=t.height,X=1,se=null,ue=null,ge=new Ft(0,0,B,j),Ee=new Ft(0,0,B,j),ct=!1,$=new Ic,fe=!1,Ue=!1,de=new $e,We=new $e,Me=new A,ve=new Ft,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function pe(){return P===null?X:1}let D=n;function He(T,k){return t.getContext(T,k)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),D===null){let k="webgl2";if(D=He(k,T),D===null)throw He(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ce,Le,ye,Qe,Ce,C,S,W,te,ae,ne,Ge,be,we,pt,he,Be,it,ot,ke,Pt,lt,zt,F;function Se(){ce=new oE(D),ce.init(),lt=new FT(D,ce),Le=new eE(D,ce,e,lt),ye=new UT(D,ce),Le.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),Qe=new cE(D),Ce=new bT,C=new OT(D,ce,ye,Ce,Le,lt,Qe),S=new nE(v),W=new rE(v),te=new gM(D),zt=new $S(D,te),ae=new aE(D,te,Qe,zt),ne=new uE(D,ae,te,Qe),ot=new hE(D,Le,C),he=new tE(Ce),Ge=new MT(v,S,W,ce,Le,zt,he),be=new VT(v,Ce),we=new ET,pt=new PT(ce),it=new JS(v,S,W,ye,ne,d,l),Be=new DT(v,ne,Le),F=new WT(D,Qe,Le,ye),ke=new QS(D,ce,Qe),Pt=new lE(D,ce,Qe),Qe.programs=Ge.programs,v.capabilities=Le,v.extensions=ce,v.properties=Ce,v.renderLists=we,v.shadowMap=Be,v.state=ye,v.info=Qe}Se();let K=new a0(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(B,j,!1))},this.getSize=function(T){return T.set(B,j)},this.setSize=function(T,k,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,j=k,t.width=Math.floor(T*X),t.height=Math.floor(k*X),q===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(B*X,j*X).floor()},this.setDrawingBufferSize=function(T,k,q){B=T,j=k,X=q,t.width=Math.floor(T*q),t.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,k,q,Y){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,k,q,Y),ye.viewport(I.copy(ge).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,k,q,Y){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,k,q,Y),ye.scissor(U.copy(Ee).multiplyScalar(X).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){ye.setScissorTest(ct=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(T=!0,k=!0,q=!0){let Y=0;if(T){let H=!1;if(P!==null){let xe=P.texture.format;H=xe===V0||xe===G0||xe===H0}if(H){let xe=P.texture.type,Ie=xe===ys||xe===ea||xe===Cc||xe===Yr||xe===B0||xe===k0,Ye=it.getClearColor(),Ze=it.getClearAlpha(),ht=Ye.r,gt=Ye.g,Ke=Ye.b;Ie?(g[0]=ht,g[1]=gt,g[2]=Ke,g[3]=Ze,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=ht,x[1]=gt,x[2]=Ke,x[3]=Ze,D.clearBufferiv(D.COLOR,0,x))}else Y|=D.COLOR_BUFFER_BIT}k&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),we.dispose(),pt.dispose(),Ce.dispose(),S.dispose(),W.dispose(),ne.dispose(),zt.dispose(),F.dispose(),Ge.dispose(),K.dispose(),K.removeEventListener("sessionstart",kg),K.removeEventListener("sessionend",Hg),Xo.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let T=Qe.autoReset,k=Be.enabled,q=Be.autoUpdate,Y=Be.needsUpdate,H=Be.type;Se(),Qe.autoReset=T,Be.enabled=k,Be.autoUpdate=q,Be.needsUpdate=Y,Be.type=H}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mt(T){let k=T.target;k.removeEventListener("dispose",mt),vn(k)}function vn(T){ai(T),Ce.remove(T)}function ai(T){let k=Ce.get(T).programs;k!==void 0&&(k.forEach(function(q){Ge.releaseProgram(q)}),T.isShaderMaterial&&Ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,Y,H,xe){k===null&&(k=nt);let Ie=H.isMesh&&H.matrixWorld.determinant()<0,Ye=j_(T,k,q,Y,H);ye.setMaterial(Y,Ie);let Ze=q.index,ht=1;if(Y.wireframe===!0){if(Ze=ae.getWireframeAttribute(q),Ze===void 0)return;ht=2}let gt=q.drawRange,Ke=q.attributes.position,Ot=gt.start*ht,Qt=(gt.start+gt.count)*ht;xe!==null&&(Ot=Math.max(Ot,xe.start*ht),Qt=Math.min(Qt,(xe.start+xe.count)*ht)),Ze!==null?(Ot=Math.max(Ot,0),Qt=Math.min(Qt,Ze.count)):Ke!=null&&(Ot=Math.max(Ot,0),Qt=Math.min(Qt,Ke.count));let nn=Qt-Ot;if(nn<0||nn===1/0)return;zt.setup(H,Y,Ye,q,Ze);let Si,Gt=ke;if(Ze!==null&&(Si=te.get(Ze),Gt=Pt,Gt.setIndex(Si)),H.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*pe()),Gt.setMode(D.LINES)):Gt.setMode(D.TRIANGLES);else if(H.isLine){let Je=Y.linewidth;Je===void 0&&(Je=1),ye.setLineWidth(Je*pe()),H.isLineSegments?Gt.setMode(D.LINES):H.isLineLoop?Gt.setMode(D.LINE_LOOP):Gt.setMode(D.LINE_STRIP)}else H.isPoints?Gt.setMode(D.POINTS):H.isSprite&&Gt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Gt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Je=H._multiDrawStarts,Qs=H._multiDrawCounts,Vt=H._multiDrawCount,ds=Ze?te.get(Ze).bytesPerElement:1,Ia=Ce.get(Y).currentProgram.getUniforms();for(let Ni=0;Ni<Vt;Ni++)Ia.setValue(D,"_gl_DrawID",Ni),Gt.render(Je[Ni]/ds,Qs[Ni])}else if(H.isInstancedMesh)Gt.renderInstances(Ot,nn,H.count);else if(q.isInstancedBufferGeometry){let Je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Qs=Math.min(q.instanceCount,Je);Gt.renderInstances(Ot,nn,Qs)}else Gt.render(Ot,nn)};function Yt(T,k,q){T.transparent===!0&&T.side===dn&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,Bh(T,k,q),T.side=Os,T.needsUpdate=!0,Bh(T,k,q),T.side=dn):Bh(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),p=pt.get(q),p.init(k),_.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let Y=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let xe=H.material;if(xe)if(Array.isArray(xe))for(let Ie=0;Ie<xe.length;Ie++){let Ye=xe[Ie];Yt(Ye,q,H),Y.add(Ye)}else Yt(xe,q,H),Y.add(xe)}),_.pop(),p=null,Y},this.compileAsync=function(T,k,q=null){let Y=this.compile(T,k,q);return new Promise(H=>{function xe(){if(Y.forEach(function(Ie){Ce.get(Ie).currentProgram.isReady()&&Y.delete(Ie)}),Y.size===0){H(T);return}setTimeout(xe,10)}ce.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let fs=null;function $s(T){fs&&fs(T)}function kg(){Xo.stop()}function Hg(){Xo.start()}let Xo=new Dv;Xo.setAnimationLoop($s),typeof self<"u"&&Xo.setContext(self),this.setAnimationLoop=function(T){fs=T,K.setAnimationLoop(T),T===null?Xo.stop():Xo.start()},K.addEventListener("sessionstart",kg),K.addEventListener("sessionend",Hg),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,P),p=pt.get(T,_.length),p.init(k),_.push(p),We.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(We),Ue=this.localClippingEnabled,fe=he.init(this.clippingPlanes,Ue),m=we.get(T,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){let xe=v.xr.getDepthSensingMesh();xe!==null&&Td(xe,k,-1/0,v.sortObjects)}Td(T,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(se,ue),ee=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ee&&it.addToRenderList(m,T),this.info.render.frame++,fe===!0&&he.beginShadows();let q=p.state.shadowsArray;Be.render(q,T,k),fe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){let xe=k.cameras;if(H.length>0)for(let Ie=0,Ye=xe.length;Ie<Ye;Ie++){let Ze=xe[Ie];Vg(Y,H,T,Ze)}ee&&it.render(T);for(let Ie=0,Ye=xe.length;Ie<Ye;Ie++){let Ze=xe[Ie];Gg(m,T,Ze,Ze.viewport)}}else H.length>0&&Vg(Y,H,T,k),ee&&it.render(T),Gg(m,T,k);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,k),zt.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],fe===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Td(T,k,q,Y){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){Y&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);let Ie=ne.update(T),Ye=T.material;Ye.visible&&m.push(T,Ie,Ye,q,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let Ie=ne.update(T),Ye=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ve.copy(Ie.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray(Ye)){let Ze=Ie.groups;for(let ht=0,gt=Ze.length;ht<gt;ht++){let Ke=Ze[ht],Ot=Ye[Ke.materialIndex];Ot&&Ot.visible&&m.push(T,Ie,Ot,q,ve.z,Ke)}}else Ye.visible&&m.push(T,Ie,Ye,q,ve.z,null)}}let xe=T.children;for(let Ie=0,Ye=xe.length;Ie<Ye;Ie++)Td(xe[Ie],k,q,Y)}function Gg(T,k,q,Y){let H=T.opaque,xe=T.transmissive,Ie=T.transparent;p.setupLightsView(q),fe===!0&&he.setGlobalState(v.clippingPlanes,q),Y&&ye.viewport(I.copy(Y)),H.length>0&&Fh(H,k,q),xe.length>0&&Fh(xe,k,q),Ie.length>0&&Fh(Ie,k,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Vg(T,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new wn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ui:ys,minFilter:zs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let xe=p.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||I;xe.setSize(Ie.z,Ie.w);let Ye=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(z),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),ee&&it.render(q);let Ze=v.toneMapping;v.toneMapping=qr;let ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),fe===!0&&he.setGlobalState(v.clippingPlanes,Y),Fh(T,q,Y),C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Ke=0,Ot=k.length;Ke<Ot;Ke++){let Qt=k[Ke],nn=Qt.object,Si=Qt.geometry,Gt=Qt.material,Je=Qt.group;if(Gt.side===dn&&nn.layers.test(Y.layers)){let Qs=Gt.side;Gt.side=Tn,Gt.needsUpdate=!0,Wg(nn,q,Y,Si,Gt,Je),Gt.side=Qs,Gt.needsUpdate=!0,gt=!0}}gt===!0&&(C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ye),v.setClearColor(z,G),ht!==void 0&&(Y.viewport=ht),v.toneMapping=Ze}function Fh(T,k,q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,xe=T.length;H<xe;H++){let Ie=T[H],Ye=Ie.object,Ze=Ie.geometry,ht=Y===null?Ie.material:Y,gt=Ie.group;Ye.layers.test(q.layers)&&Wg(Ye,k,q,Ze,ht,gt)}}function Wg(T,k,q,Y,H,xe){T.onBeforeRender(v,k,q,Y,H,xe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,k,q,Y,T,xe),H.transparent===!0&&H.side===dn&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,v.renderBufferDirect(q,k,Y,H,T,xe),H.side=Os,H.needsUpdate=!0,v.renderBufferDirect(q,k,Y,H,T,xe),H.side=dn):v.renderBufferDirect(q,k,Y,H,T,xe),T.onAfterRender(v,k,q,Y,H,xe)}function Bh(T,k,q){k.isScene!==!0&&(k=nt);let Y=Ce.get(T),H=p.state.lights,xe=p.state.shadowsArray,Ie=H.state.version,Ye=Ge.getParameters(T,H.state,xe,k,q),Ze=Ge.getProgramCacheKey(Ye),ht=Y.programs;Y.environment=T.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(T.isMeshStandardMaterial?W:S).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,ht===void 0&&(T.addEventListener("dispose",mt),ht=new Map,Y.programs=ht);let gt=ht.get(Ze);if(gt!==void 0){if(Y.currentProgram===gt&&Y.lightsStateVersion===Ie)return qg(T,Ye),gt}else Ye.uniforms=Ge.getUniforms(T),T.onBeforeCompile(Ye,v),gt=Ge.acquireProgram(Ye,Ze),ht.set(Ze,gt),Y.uniforms=Ye.uniforms;let Ke=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=he.uniform),qg(T,Ye),Y.needsLights=$_(T),Y.lightsStateVersion=Ie,Y.needsLights&&(Ke.ambientLightColor.value=H.state.ambient,Ke.lightProbe.value=H.state.probe,Ke.directionalLights.value=H.state.directional,Ke.directionalLightShadows.value=H.state.directionalShadow,Ke.spotLights.value=H.state.spot,Ke.spotLightShadows.value=H.state.spotShadow,Ke.rectAreaLights.value=H.state.rectArea,Ke.ltc_1.value=H.state.rectAreaLTC1,Ke.ltc_2.value=H.state.rectAreaLTC2,Ke.pointLights.value=H.state.point,Ke.pointLightShadows.value=H.state.pointShadow,Ke.hemisphereLights.value=H.state.hemi,Ke.directionalShadowMap.value=H.state.directionalShadowMap,Ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ke.spotShadowMap.value=H.state.spotShadowMap,Ke.spotLightMatrix.value=H.state.spotLightMatrix,Ke.spotLightMap.value=H.state.spotLightMap,Ke.pointShadowMap.value=H.state.pointShadowMap,Ke.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=gt,Y.uniformsList=null,gt}function Xg(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=sl.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function qg(T,k){let q=Ce.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function j_(T,k,q,Y,H){k.isScene!==!0&&(k=nt),C.resetTextureUnits();let xe=k.fog,Ie=Y.isMeshStandardMaterial?k.environment:null,Ye=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fi,Ze=(Y.isMeshStandardMaterial?W:S).get(Y.envMap||Ie),ht=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,gt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ke=!!q.morphAttributes.position,Ot=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color,nn=qr;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(nn=v.toneMapping);let Si=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Gt=Si!==void 0?Si.length:0,Je=Ce.get(Y),Qs=p.state.lights;if(fe===!0&&(Ue===!0||T!==M)){let Ki=T===M&&Y.id===b;he.setState(Y,T,Ki)}let Vt=!1;Y.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Qs.state.version||Je.outputColorSpace!==Ye||H.isBatchedMesh&&Je.batching===!1||!H.isBatchedMesh&&Je.batching===!0||H.isBatchedMesh&&Je.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Je.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Je.instancing===!1||!H.isInstancedMesh&&Je.instancing===!0||H.isSkinnedMesh&&Je.skinning===!1||!H.isSkinnedMesh&&Je.skinning===!0||H.isInstancedMesh&&Je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Je.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Je.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Je.instancingMorph===!1&&H.morphTexture!==null||Je.envMap!==Ze||Y.fog===!0&&Je.fog!==xe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==he.numPlanes||Je.numIntersection!==he.numIntersection)||Je.vertexAlphas!==ht||Je.vertexTangents!==gt||Je.morphTargets!==Ke||Je.morphNormals!==Ot||Je.morphColors!==Qt||Je.toneMapping!==nn||Je.morphTargetsCount!==Gt)&&(Vt=!0):(Vt=!0,Je.__version=Y.version);let ds=Je.currentProgram;Vt===!0&&(ds=Bh(Y,k,H));let Ia=!1,Ni=!1,oc=!1,sn=ds.getUniforms(),Ds=Je.uniforms;if(ye.useProgram(ds.program)&&(Ia=!0,Ni=!0,oc=!0),Y.id!==b&&(b=Y.id,Ni=!0),Ia||M!==T){ye.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),J1(de),$1(de),sn.setValue(D,"projectionMatrix",de)):sn.setValue(D,"projectionMatrix",T.projectionMatrix),sn.setValue(D,"viewMatrix",T.matrixWorldInverse);let Ur=sn.map.cameraPosition;Ur!==void 0&&Ur.setValue(D,Me.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&sn.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&sn.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ni=!0,oc=!0)}if(H.isSkinnedMesh){sn.setOptional(D,H,"bindMatrix"),sn.setOptional(D,H,"bindMatrixInverse");let Ki=H.skeleton;Ki&&(Ki.boneTexture===null&&Ki.computeBoneTexture(),sn.setValue(D,"boneTexture",Ki.boneTexture,C))}H.isBatchedMesh&&(sn.setOptional(D,H,"batchingTexture"),sn.setValue(D,"batchingTexture",H._matricesTexture,C),sn.setOptional(D,H,"batchingIdTexture"),sn.setValue(D,"batchingIdTexture",H._indirectTexture,C),sn.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&sn.setValue(D,"batchingColorTexture",H._colorsTexture,C));let ac=q.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0)&&ot.update(H,q,ds),(Ni||Je.receiveShadow!==H.receiveShadow)&&(Je.receiveShadow=H.receiveShadow,sn.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ds.envMap.value=Ze,Ds.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Ds.envMapIntensity.value=k.environmentIntensity),Ni&&(sn.setValue(D,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&J_(Ds,oc),xe&&Y.fog===!0&&be.refreshFogUniforms(Ds,xe),be.refreshMaterialUniforms(Ds,Y,X,j,p.state.transmissionRenderTarget[T.id]),sl.upload(D,Xg(Je),Ds,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(sl.upload(D,Xg(Je),Ds,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&sn.setValue(D,"center",H.center),sn.setValue(D,"modelViewMatrix",H.modelViewMatrix),sn.setValue(D,"normalMatrix",H.normalMatrix),sn.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Ki=Y.uniformsGroups;for(let Ur=0,zr=Ki.length;Ur<zr;Ur++){let Yg=Ki[Ur];F.update(Yg,ds),F.bind(Yg,ds)}}return ds}function J_(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function $_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,k,q){Ce.get(T.texture).__webglTexture=k,Ce.get(T.depthTexture).__webglTexture=q;let Y=Ce.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){let q=Ce.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,q=0){P=T,E=k,w=q;let Y=!0,H=null,xe=!1,Ie=!1;if(T){let Ze=Ce.get(T);if(Ze.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Ze.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Ze.__hasExternalTextures)C.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ke=T.depthTexture;if(Ze.__boundDepthTexture!==Ke){if(Ke!==null&&Ce.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let ht=T.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ie=!0);let gt=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(gt[k])?H=gt[k][q]:H=gt[k],xe=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?H=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(gt)?H=gt[q]:H=gt,I.copy(T.viewport),U.copy(T.scissor),N=T.scissorTest}else I.copy(ge).multiplyScalar(X).floor(),U.copy(Ee).multiplyScalar(X).floor(),N=ct;if(ye.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&ye.drawBuffers(T,H),ye.viewport(I),ye.scissor(U),ye.setScissorTest(N),xe){let Ze=Ce.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ze.__webglTexture,q)}else if(Ie){let Ze=Ce.get(T.texture),ht=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,q||0,ht)}b=-1},this.readRenderTargetPixels=function(T,k,q,Y,H,xe,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ye=Ye[Ie]),Ye){ye.bindFramebuffer(D.FRAMEBUFFER,Ye);try{let Ze=T.texture,ht=Ze.format,gt=Ze.type;if(!Le.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Y&&q>=0&&q<=T.height-H&&D.readPixels(k,q,Y,H,lt.convert(ht),lt.convert(gt),xe)}finally{let Ze=P!==null?Ce.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(T,k,q,Y,H,xe,Ie){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ye=Ye[Ie]),Ye){let Ze=T.texture,ht=Ze.format,gt=Ze.type;if(!Le.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-Y&&q>=0&&q<=T.height-H){ye.bindFramebuffer(D.FRAMEBUFFER,Ye);let Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(k,q,Y,H,lt.convert(ht),lt.convert(gt),0);let Ot=P!==null?Ce.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ot);let Qt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await j1(D,Qt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Ke),D.deleteSync(Qt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,q=0){T.isTexture!==!0&&(yc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);let Y=Math.pow(2,-q),H=Math.floor(T.image.width*Y),xe=Math.floor(T.image.height*Y),Ie=k!==null?k.x:0,Ye=k!==null?k.y:0;C.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Ie,Ye,H,xe),ye.unbindTexture()},this.copyTextureToTexture=function(T,k,q=null,Y=null,H=0){T.isTexture!==!0&&(yc("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],k=arguments[2],H=arguments[3]||0,q=null);let xe,Ie,Ye,Ze,ht,gt,Ke,Ot,Qt,nn=T.isCompressedTexture?T.mipmaps[H]:T.image;q!==null?(xe=q.max.x-q.min.x,Ie=q.max.y-q.min.y,Ye=q.isBox3?q.max.z-q.min.z:1,Ze=q.min.x,ht=q.min.y,gt=q.isBox3?q.min.z:0):(xe=nn.width,Ie=nn.height,Ye=nn.depth||1,Ze=0,ht=0,gt=0),Y!==null?(Ke=Y.x,Ot=Y.y,Qt=Y.z):(Ke=0,Ot=0,Qt=0);let Si=lt.convert(k.format),Gt=lt.convert(k.type),Je;k.isData3DTexture?(C.setTexture3D(k,0),Je=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Je=D.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Je=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let Qs=D.getParameter(D.UNPACK_ROW_LENGTH),Vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ds=D.getParameter(D.UNPACK_SKIP_PIXELS),Ia=D.getParameter(D.UNPACK_SKIP_ROWS),Ni=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,nn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gt);let oc=T.isDataArrayTexture||T.isData3DTexture,sn=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Ds=Ce.get(T),ac=Ce.get(k),Ki=Ce.get(Ds.__renderTarget),Ur=Ce.get(ac.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Ki.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let zr=0;zr<Ye;zr++)oc&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(T).__webglTexture,H,gt+zr),T.isDepthTexture?(sn&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(k).__webglTexture,H,Qt+zr),D.blitFramebuffer(Ze,ht,xe,Ie,Ke,Ot,xe,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST)):sn?D.copyTexSubImage3D(Je,H,Ke,Ot,Qt+zr,Ze,ht,xe,Ie):D.copyTexSubImage2D(Je,H,Ke,Ot,Qt+zr,Ze,ht,xe,Ie);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else sn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Je,H,Ke,Ot,Qt,xe,Ie,Ye,Si,Gt,nn.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Je,H,Ke,Ot,Qt,xe,Ie,Ye,Si,nn.data):D.texSubImage3D(Je,H,Ke,Ot,Qt,xe,Ie,Ye,Si,Gt,nn):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,Ke,Ot,xe,Ie,Si,Gt,nn.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,Ke,Ot,nn.width,nn.height,Si,nn.data):D.texSubImage2D(D.TEXTURE_2D,H,Ke,Ot,xe,Ie,Si,Gt,nn);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qs),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ds),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ia),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),H===0&&k.generateMipmaps&&D.generateMipmap(Je),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q=null,Y=null,H=0){return T.isTexture!==!0&&(yc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0),yc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,q,Y,H)},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){E=0,w=0,P=null,ye.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Uu=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zu=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xp,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pi=new A,ta=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xs(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ml=class extends hi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qa,fc=new A,Ya=new A,Za=new A,Ka=new J,dc=new J,Fv=new $e,ou=new A,pc=new A,au=new A,Xx=new J,Qd=new J,qx=new J,Lc=class extends cn{constructor(e=new ml){if(super(),this.isSprite=!0,this.type="Sprite",qa===void 0){qa=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pl(t,5);qa.setIndex([0,1,2,0,2,3]),qa.setAttribute("position",new ta(n,3,0,!1)),qa.setAttribute("uv",new ta(n,2,3,!1))}this.geometry=qa,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ya.setFromMatrixScale(this.matrixWorld),Fv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Za.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ya.multiplyScalar(-Za.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;lu(ou.set(-.5,-.5,0),Za,o,Ya,s,r),lu(pc.set(.5,-.5,0),Za,o,Ya,s,r),lu(au.set(.5,.5,0),Za,o,Ya,s,r),Xx.set(0,0),Qd.set(1,0),qx.set(1,1);let a=e.ray.intersectTriangle(ou,pc,au,!1,fc);if(a===null&&(lu(pc.set(-.5,.5,0),Za,o,Ya,s,r),Qd.set(0,1),a=e.ray.intersectTriangle(ou,au,pc,!1,fc),a===null))return;let l=e.ray.origin.distanceTo(fc);l<e.near||l>e.far||t.push({distance:l,point:fc.clone(),uv:Wr.getInterpolation(fc,ou,pc,au,Xx,Qd,qx,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function lu(i,e,t,n,s,r){Ka.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(dc.x=r*Ka.x-s*Ka.y,dc.y=s*Ka.x+r*Ka.y):dc.copy(Ka),i.copy(e),i.x+=dc.x,i.y+=dc.y,i.applyMatrix4(Fv)}var Yx=new A,Zx=new Ft,Kx=new Ft,XT=new A,jx=new $e,cu=new A,ep=new Oi,Jx=new $e,tp=new ul,Ou=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jg,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cu),this.boundingBox.expandByPoint(cu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cu),this.boundingSphere.expandByPoint(cu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ep.copy(this.boundingSphere),ep.applyMatrix4(s),e.ray.intersectsSphere(ep)!==!1&&(Jx.copy(s).invert(),tp.copy(e.ray).applyMatrix4(Jx),!(this.boundingBox!==null&&tp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zx.fromBufferAttribute(s.attributes.skinIndex,e),Kx.fromBufferAttribute(s.attributes.skinWeight,e),Yx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Kx.getComponent(r);if(o!==0){let a=Zx.getComponent(r);jx.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(XT.copy(Yx).applyMatrix4(jx),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Dc=class extends cn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Fs=class extends qn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dn,h=Dn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$x=new $e,qT=new $e,Fu=class i{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:qT;$x.multiplyMatrices(a,t[r]),$x.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fs(t,e,e,Ei,vs);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Dc),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},na=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ja=new $e,Qx=new $e,hu=[],ev=new Ti,YT=new $e,mc=new Xe,gc=new Oi,Fi=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,YT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ja),ev.copy(e.boundingBox).applyMatrix4(ja),this.boundingBox.union(ev)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ja),gc.copy(e.boundingSphere).applyMatrix4(ja),this.boundingSphere.union(gc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(mc.geometry=this.geometry,mc.material=this.material,mc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gc.copy(this.boundingSphere),gc.applyMatrix4(n),e.ray.intersectsSphere(gc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ja),Qx.multiplyMatrices(n,ja),mc.matrixWorld=Qx,mc.raycast(e,hu);for(let o=0,a=hu.length;o<a;o++){let l=hu[o];l.instanceId=r,l.object=this,t.push(l)}hu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fs(new Float32Array(s*this.count),s,this.count,qc,vs));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Nc=class extends hi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bu=new A,ku=new A,tv=new $e,xc=new ul,uu=new Oi,np=new A,nv=new A,gl=class extends cn{constructor(e=new Bt,t=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bu.fromBufferAttribute(t,s-1),ku.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bu.distanceTo(ku);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uu.copy(n.boundingSphere),uu.applyMatrix4(s),uu.radius+=r,e.ray.intersectsSphere(uu)===!1)return;tv.copy(s).invert(),xc.copy(e.ray).applyMatrix4(tv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),_=fu(this,e,xc,l,p,y);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=fu(this,e,xc,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=fu(this,e,xc,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=fu(this,e,xc,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fu(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Bu.fromBufferAttribute(o,s),ku.fromBufferAttribute(o,r),t.distanceSqToSegment(Bu,ku,np,nv)>n)return;np.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(np);if(!(l<e.near||l>e.far))return{distance:l,point:nv.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var iv=new A,sv=new A,Hu=class extends gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)iv.fromBufferAttribute(t,s),sv.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+iv.distanceTo(sv);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gu=class extends gl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ia=class extends hi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rv=new $e,l0=new ul,du=new Oi,pu=new A,jr=class extends cn{constructor(e=new Bt,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),du.copy(n.boundingSphere),du.applyMatrix4(s),du.radius+=r,e.ray.intersectsSphere(du)===!1)return;rv.copy(s).invert(),l0.copy(e.ray).applyMatrix4(rv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);pu.fromBufferAttribute(u,m),ov(pu,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)pu.fromBufferAttribute(u,g),ov(pu,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ov(i,e,t,n,s,r,o){let a=l0.distanceSqToPoint(i);if(a<t){let l=new A;l0.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xl=class extends qn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new J:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,l=new $e;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Pn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Uc=class extends Qi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new J){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},c0=class extends Uc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Z0(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var mu=new A,ip=new Z0,sp=new Z0,rp=new Z0,h0=class extends Qi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(mu.subVectors(s[0],s[1]).add(s[0]),c=mu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ip.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),sp.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),rp.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ip.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sp.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rp.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ip.calc(l),sp.calc(l),rp.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function av(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function ZT(i,e){let t=1-i;return t*t*e}function KT(i,e){return 2*(1-i)*i*e}function jT(i,e){return i*i*e}function Tc(i,e,t,n){return ZT(i,e)+KT(i,t)+jT(i,n)}function JT(i,e){let t=1-i;return t*t*t*e}function $T(i,e){let t=1-i;return 3*t*t*i*e}function QT(i,e){return 3*(1-i)*i*i*e}function ew(i,e){return i*i*i*e}function wc(i,e,t,n,s){return JT(i,e)+$T(i,t)+QT(i,n)+ew(i,s)}var Vu=class extends Qi{constructor(e=new J,t=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new J){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wc(e,s.x,r.x,o.x,a.x),wc(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},u0=class extends Qi{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wc(e,s.x,r.x,o.x,a.x),wc(e,s.y,r.y,o.y,a.y),wc(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wu=class extends Qi{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},f0=class extends Qi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xu=class extends Qi{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Tc(e,s.x,r.x,o.x),Tc(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},d0=class extends Qi{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Tc(e,s.x,r.x,o.x),Tc(e,s.y,r.y,o.y),Tc(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qu=class extends Qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(av(a,l.x,c.x,h.x,u.x),av(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new J().fromArray(s))}return this}},p0=Object.freeze({__proto__:null,ArcCurve:c0,CatmullRomCurve3:h0,CubicBezierCurve:Vu,CubicBezierCurve3:u0,EllipseCurve:Uc,LineCurve:Wu,LineCurve3:f0,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:d0,SplineCurve:qu}),m0=class extends Qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new p0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new p0[s.type]().fromJSON(s))}return this}},zc=class extends m0{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wu(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xu(this.currentPoint.clone(),new J(e,t),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Vu(this.currentPoint.clone(),new J(e,t),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Uc(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Jr=class i extends Bt{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new A,f=new J,d=new A,g=new A,x=new A,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let _=n+y*h*s,v=Math.sin(_),L=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*v,u.y=e[E].y,u.z=e[E].x*L,o.push(u.x,u.y,u.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let w=l[3*E+0]*v,P=l[3*E+1],b=l[3*E+0]*L;c.push(w,P,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let v=_+y*e.length,L=v,E=v+e.length,w=v+e.length+1,P=v+1;r.push(L,E,P),r.push(w,P,E)}this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("uv",new St(a,2)),this.setAttribute("normal",new St(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Oc=class i extends Jr{constructor(e=1,t=1,n=4,s=8){let r=new zc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},$r=class i extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$t=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(d,2));function y(){let v=new A,L=new A,E=0,w=(t-e)/n;for(let P=0;P<=r;P++){let b=[],M=P/r,I=M*(t-e)+e;for(let U=0;U<=s;U++){let N=U/s,z=N*l+a,G=Math.sin(z),B=Math.cos(z);L.x=I*G,L.y=-M*n+m,L.z=I*B,u.push(L.x,L.y,L.z),v.set(G,w,B).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-M),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let M=x[b][P],I=x[b+1][P],U=x[b+1][P+1],N=x[b][P+1];(e>0||b!==0)&&(h.push(M,I,N),E+=3),(t>0||b!==r-1)&&(h.push(I,U,N),E+=3)}c.addGroup(p,E,0),p+=E}function _(v){let L=g,E=new J,w=new A,P=0,b=v===!0?e:t,M=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let z=U/s*l+a,G=Math.cos(z),B=Math.sin(z);w.x=b*B,w.y=m*M,w.z=b*G,u.push(w.x,w.y,w.z),f.push(0,M,0),E.x=G*.5+.5,E.y=B*.5*M+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){let N=L+U,z=I+U;v===!0?h.push(z,z+1,N):h.push(z+1,z,N),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rn=class i extends $t{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fc=class i extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new A,v=new A,L=new A;for(let E=0;E<t.length;E+=3)d(t[E+0],_),d(t[E+1],v),d(t[E+2],L),l(_,v,L,y)}function l(y,_,v,L){let E=L+1,w=[];for(let P=0;P<=E;P++){w[P]=[];let b=y.clone().lerp(v,P/E),M=_.clone().lerp(v,P/E),I=E-P;for(let U=0;U<=I;U++)U===0&&P===E?w[P][U]=b:w[P][U]=b.clone().lerp(M,U/I)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){let M=Math.floor(b/2);b%2===0?(f(w[P][M+1]),f(w[P+1][M]),f(w[P][M])):(f(w[P][M+1]),f(w[P+1][M+1]),f(w[P+1][M]))}}function c(y){let _=new A;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new A;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],L=o[y+4],E=Math.max(_,v,L),w=Math.min(_,v,L);E>.9&&w<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let v=y*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){let y=new A,_=new A,v=new A,L=new A,E=new J,w=new J,P=new J;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(y).add(_).add(v).divideScalar(3);let I=m(L);x(E,M+0,y,I),x(w,M+2,_,I),x(P,M+4,v,I)}}function x(y,_,v,L){L<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Yu=class i extends Fc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bc=class extends zc{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new zc().fromJSON(s))}return this}},tw={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bv(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=ow(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return kc(r,o,t,a,l,d,0),o}};function Bv(i,e,t,n,s){let r,o;if(s===xw(i,e,t,n)>0)for(r=e;r<t;r+=n)o=lv(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=lv(r,i[r],i[r+1],o);return o&&df(o,o.next)&&(Gc(o),o=o.next),o}function sa(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(df(t,t.next)||pn(t.prev,t,t.next)===0)){if(Gc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function kc(i,e,t,n,s,r,o){if(!i)return;!o&&r&&uw(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?iw(i,n,s,r):nw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Gc(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sw(sa(i),e,t),kc(i,e,t,n,s,r,2)):o===2&&rw(i,e,t,n,s,r):kc(sa(i),e,t,n,s,r,1);break}}}function nw(i){let e=i.prev,t=i,n=i.next;if(pn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&tl(s,a,r,l,o,c,g.x,g.y)&&pn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function iw(i,e,t,n){let s=i.prev,r=i,o=i.next;if(pn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=g0(d,g,e,t,n),y=g0(x,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&tl(a,h,l,u,c,f,_.x,_.y)&&pn(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&tl(a,h,l,u,c,f,v.x,v.y)&&pn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&tl(a,h,l,u,c,f,_.x,_.y)&&pn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&tl(a,h,l,u,c,f,v.x,v.y)&&pn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sw(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!df(s,r)&&kv(s,n,n.next,r)&&Hc(s,r)&&Hc(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Gc(n),Gc(n.next),n=i=r),n=n.next}while(n!==i);return sa(n)}function rw(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pw(o,a)){let l=Hv(o,a);o=sa(o,o.next),l=sa(l,l.next),kc(o,e,t,n,s,r,0),kc(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ow(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Bv(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(dw(c));for(s.sort(aw),r=0;r<s.length;r++)t=lw(s[r],t);return t}function aw(i,e){return i.x-e.x}function lw(i,e){let t=cw(i,e);if(!t)return e;let n=Hv(t,i);return sa(n,n.next),sa(t,t.next)}function cw(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&tl(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Hc(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&hw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function hw(i,e){return pn(i.prev,i,e.prev)<0&&pn(e.next,i,i.next)<0}function uw(i,e,t,n){let s=i;do s.z===0&&(s.z=g0(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fw(s)}function fw(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function g0(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dw(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tl(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function pw(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mw(i,e)&&(Hc(i,e)&&Hc(e,i)&&gw(i,e)&&(pn(i.prev,i,e.prev)||pn(i,e.prev,e))||df(i,e)&&pn(i.prev,i,i.next)>0&&pn(e.prev,e,e.next)>0)}function pn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function df(i,e){return i.x===e.x&&i.y===e.y}function kv(i,e,t,n){let s=xu(pn(i,e,t)),r=xu(pn(i,e,n)),o=xu(pn(t,n,i)),a=xu(pn(t,n,e));return!!(s!==r&&o!==a||s===0&&gu(i,t,e)||r===0&&gu(i,n,e)||o===0&&gu(t,i,n)||a===0&&gu(t,e,n))}function gu(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xu(i){return i>0?1:i<0?-1:0}function mw(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&kv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Hc(i,e){return pn(i.prev,i,i.next)<0?pn(i,e,i.next)>=0&&pn(i,i.prev,e)>=0:pn(i,e,i.prev)<0||pn(i,i.next,e)<0}function gw(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hv(i,e){let t=new x0(i.i,i.x,i.y),n=new x0(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lv(i,e,t,n){let s=new x0(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gc(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function x0(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xw(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ac=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];cv(e),hv(n,e);let o=e.length;t.forEach(cv);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,hv(n,t[l]);let a=tw.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function cv(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hv(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zu=class i extends Bt{constructor(e=new Bc([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:vw,_,v=!1,L,E,w,P;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,L=p.computeFrenetFrames(h,!1),E=new A,w=new A,P=new A),f||(m=0,d=0,g=0,x=0);let b=a.extractPoints(c),M=b.shape,I=b.holes;if(!Ac.isClockWise(M)){M=M.reverse();for(let ee=0,pe=I.length;ee<pe;ee++){let D=I[ee];Ac.isClockWise(D)&&(I[ee]=D.reverse())}}let N=Ac.triangulateShape(M,I),z=M;for(let ee=0,pe=I.length;ee<pe;ee++){let D=I[ee];M=M.concat(D)}function G(ee,pe,D){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(pe,D)}let B=M.length,j=N.length;function X(ee,pe,D){let He,ce,Le,ye=ee.x-pe.x,Qe=ee.y-pe.y,Ce=D.x-ee.x,C=D.y-ee.y,S=ye*ye+Qe*Qe,W=ye*C-Qe*Ce;if(Math.abs(W)>Number.EPSILON){let te=Math.sqrt(S),ae=Math.sqrt(Ce*Ce+C*C),ne=pe.x-Qe/te,Ge=pe.y+ye/te,be=D.x-C/ae,we=D.y+Ce/ae,pt=((be-ne)*C-(we-Ge)*Ce)/(ye*C-Qe*Ce);He=ne+ye*pt-ee.x,ce=Ge+Qe*pt-ee.y;let he=He*He+ce*ce;if(he<=2)return new J(He,ce);Le=Math.sqrt(he/2)}else{let te=!1;ye>Number.EPSILON?Ce>Number.EPSILON&&(te=!0):ye<-Number.EPSILON?Ce<-Number.EPSILON&&(te=!0):Math.sign(Qe)===Math.sign(C)&&(te=!0),te?(He=-Qe,ce=ye,Le=Math.sqrt(S)):(He=ye,ce=Qe,Le=Math.sqrt(S/2))}return new J(He/Le,ce/Le)}let se=[];for(let ee=0,pe=z.length,D=pe-1,He=ee+1;ee<pe;ee++,D++,He++)D===pe&&(D=0),He===pe&&(He=0),se[ee]=X(z[ee],z[D],z[He]);let ue=[],ge,Ee=se.concat();for(let ee=0,pe=I.length;ee<pe;ee++){let D=I[ee];ge=[];for(let He=0,ce=D.length,Le=ce-1,ye=He+1;He<ce;He++,Le++,ye++)Le===ce&&(Le=0),ye===ce&&(ye=0),ge[He]=X(D[He],D[Le],D[ye]);ue.push(ge),Ee=Ee.concat(ge)}for(let ee=0;ee<m;ee++){let pe=ee/m,D=d*Math.cos(pe*Math.PI/2),He=g*Math.sin(pe*Math.PI/2)+x;for(let ce=0,Le=z.length;ce<Le;ce++){let ye=G(z[ce],se[ce],He);de(ye.x,ye.y,-D)}for(let ce=0,Le=I.length;ce<Le;ce++){let ye=I[ce];ge=ue[ce];for(let Qe=0,Ce=ye.length;Qe<Ce;Qe++){let C=G(ye[Qe],ge[Qe],He);de(C.x,C.y,-D)}}}let ct=g+x;for(let ee=0;ee<B;ee++){let pe=f?G(M[ee],Ee[ee],ct):M[ee];v?(w.copy(L.normals[0]).multiplyScalar(pe.x),E.copy(L.binormals[0]).multiplyScalar(pe.y),P.copy(_[0]).add(w).add(E),de(P.x,P.y,P.z)):de(pe.x,pe.y,0)}for(let ee=1;ee<=h;ee++)for(let pe=0;pe<B;pe++){let D=f?G(M[pe],Ee[pe],ct):M[pe];v?(w.copy(L.normals[ee]).multiplyScalar(D.x),E.copy(L.binormals[ee]).multiplyScalar(D.y),P.copy(_[ee]).add(w).add(E),de(P.x,P.y,P.z)):de(D.x,D.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let pe=ee/m,D=d*Math.cos(pe*Math.PI/2),He=g*Math.sin(pe*Math.PI/2)+x;for(let ce=0,Le=z.length;ce<Le;ce++){let ye=G(z[ce],se[ce],He);de(ye.x,ye.y,u+D)}for(let ce=0,Le=I.length;ce<Le;ce++){let ye=I[ce];ge=ue[ce];for(let Qe=0,Ce=ye.length;Qe<Ce;Qe++){let C=G(ye[Qe],ge[Qe],He);v?de(C.x,C.y+_[h-1].y,_[h-1].x+D):de(C.x,C.y,u+D)}}}$(),fe();function $(){let ee=s.length/3;if(f){let pe=0,D=B*pe;for(let He=0;He<j;He++){let ce=N[He];We(ce[2]+D,ce[1]+D,ce[0]+D)}pe=h+m*2,D=B*pe;for(let He=0;He<j;He++){let ce=N[He];We(ce[0]+D,ce[1]+D,ce[2]+D)}}else{for(let pe=0;pe<j;pe++){let D=N[pe];We(D[2],D[1],D[0])}for(let pe=0;pe<j;pe++){let D=N[pe];We(D[0]+B*h,D[1]+B*h,D[2]+B*h)}}n.addGroup(ee,s.length/3-ee,0)}function fe(){let ee=s.length/3,pe=0;Ue(z,pe),pe+=z.length;for(let D=0,He=I.length;D<He;D++){let ce=I[D];Ue(ce,pe),pe+=ce.length}n.addGroup(ee,s.length/3-ee,1)}function Ue(ee,pe){let D=ee.length;for(;--D>=0;){let He=D,ce=D-1;ce<0&&(ce=ee.length-1);for(let Le=0,ye=h+m*2;Le<ye;Le++){let Qe=B*Le,Ce=B*(Le+1),C=pe+He+Qe,S=pe+ce+Qe,W=pe+ce+Ce,te=pe+He+Ce;Me(C,S,W,te)}}}function de(ee,pe,D){l.push(ee),l.push(pe),l.push(D)}function We(ee,pe,D){ve(ee),ve(pe),ve(D);let He=s.length/3,ce=y.generateTopUV(n,s,He-3,He-2,He-1);nt(ce[0]),nt(ce[1]),nt(ce[2])}function Me(ee,pe,D,He){ve(ee),ve(pe),ve(He),ve(pe),ve(D),ve(He);let ce=s.length/3,Le=y.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);nt(Le[0]),nt(Le[1]),nt(Le[3]),nt(Le[1]),nt(Le[2]),nt(Le[3])}function ve(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function nt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yw(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new p0[s.type]().fromJSON(s)),new i(n,e.options)}},vw={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new J(r,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(f,1-g),new J(x,1-p)]:[new J(a,1-l),new J(h,1-u),new J(d,1-g),new J(m,1-p)]}};function yw(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var vl=class i extends Fc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ra=class i extends Fc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yl=class i extends Bt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new A,g=new J;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,L=y+n+2,E=y+1;a.push(_,v,E),a.push(v,L,E)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Et=class i extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){let E=L/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=h[p][y+1],v=h[p][y],L=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,E),(p!==n-1||l<Math.PI)&&d.push(v,L,E)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class i extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ku=class extends Dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},_l=class extends hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bi=class extends _l{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var oa=class extends hi{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ju=class extends hi{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function vu(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _w(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mw(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function uv(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Gv(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Qr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},v0=class extends Qr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$a,endingEnd:$a}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qa:r=e,a=2*t-n;break;case Eu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qa:o=e,l=2*n-t;break;case Eu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+y*o[c+L]+_*o[l+L]+v*o[u+L];return r}},Ju=class extends Qr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},y0=class extends Qr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ts=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vu(t,this.TimeBufferType),this.values=vu(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vu(e.times,Array),values:vu(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new v0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ll:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case wd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return wd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&_w(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wd,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ts.prototype.TimeBufferType=Float32Array;ts.prototype.ValueBufferType=Float32Array;ts.prototype.DefaultInterpolation=cl;var eo=class extends ts{constructor(e,t,n){super(e,t,n)}};eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=ll;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;var $u=class extends ts{};$u.prototype.ValueTypeName="color";var dr=class extends ts{};dr.prototype.ValueTypeName="number";var _0=class extends Qr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},pr=class extends ts{InterpolantFactoryMethodLinear(e){return new _0(this.times,this.values,this.getValueSize(),e)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends ts{constructor(e,t,n){super(e,t,n)}};to.prototype.ValueTypeName="string";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=ll;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends ts{};mr.prototype.ValueTypeName="vector";var Ml=class{constructor(e="",t=-1,n=[],s=X0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$i(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sw(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ts.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Mw(l);l=uv(l,1,h),c=uv(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new dr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];Gv(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){let _=f[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new dr(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(mr,d+".position",f,"pos",s),n(pr,d+".quaternion",f,"rot",s),n(mr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function bw(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return mr;case"color":return $u;case"quaternion":return pr;case"bool":case"boolean":return eo;case"string":return to}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Sw(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bw(i.type);if(i.times===void 0){let t=[],n=[];Gv(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Xr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},M0=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Ew=new M0,gr=class{constructor(e){this.manager=e!==void 0?e:Ew,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr={},b0=class extends Error{constructor(e,t){super(e),this.response=t}},Vc=class extends gr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:s});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=rr[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let E=0,w=h.length;E<w;E++){let P=h[E];P.onProgress&&P.onProgress(L)}p.enqueue(v),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new b0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Xr.add(e,c);let h=rr[e];delete rr[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=rr[e];if(h===void 0)throw this.manager.itemError(e),c;delete rr[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var S0=class extends gr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Pc("img");function l(){h(),Xr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Qu=class extends gr{constructor(e){super(e)}load(e,t,n,s){let r=new qn,o=new S0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},bl=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ef=class extends bl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},op=new $e,fv=new A,dv=new A,Wc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fv.setFromMatrixPosition(e.matrixWorld),t.position.copy(fv),dv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dv),t.updateMatrixWorld(),op.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(op),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(op)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},E0=class extends Wc{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=hl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},tf=class extends bl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new E0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pv=new $e,vc=new A,ap=new A,T0=class extends Wc{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vc.setFromMatrixPosition(e.matrixWorld),n.position.copy(vc),ap.copy(n.position),ap.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ap),n.updateMatrixWorld(),s.makeTranslation(-vc.x,-vc.y,-vc.z),pv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pv)}},xr=class extends bl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},w0=class extends Wc{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},no=class extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var io=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nf=class extends gr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xr.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xr.add(e,l),r.manager.itemStart(e)}};var Sl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=mv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function mv(){return performance.now()}var A0=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){mn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;mn.multiplyQuaternionsFlat(e,o,e,t,e,n),mn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},K0="\\[\\]\\.:\\/",Tw=new RegExp("["+K0+"]","g"),j0="[^"+K0+"]",ww="[^"+K0.replace("\\.","")+"]",Aw=/((?:WC+[\/:])*)/.source.replace("WC",j0),Rw=/(WCOD+)?/.source.replace("WCOD",ww),Cw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",j0),Pw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",j0),Iw=new RegExp("^"+Aw+Rw+Cw+Pw+"$"),Lw=["material","materials","bones","map"],R0=class{constructor(e,t,n){let s=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tw,"")}static parseTrackName(e){let t=Iw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=R0;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C0=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:$a,endingEnd:$a};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case b1:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case X0:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===M1;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===W0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Qa,s.endingEnd=Qa):(e?s.endingStart=this.zeroSlopeAtStart?Qa:$a:s.endingStart=Eu,t?s.endingEnd=this.zeroSlopeAtEnd?Qa:$a:s.endingEnd=Eu)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Dw=new Float32Array(1),sf=class extends fr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=s[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new A0(Jt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ju(new Float32Array(2),new Float32Array(2),1,Dw),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Ml.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=X0),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new C0(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Ml.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function vr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Bt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Vv(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Vv(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vv(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new It(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function J0(i,e){if(e===Rv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yc||e===lf){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Yc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var pf=class extends gr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sm(t)}),this.register(function(t){return new rm(t)}),this.register(function(t){return new pm(t)}),this.register(function(t){return new mm(t)}),this.register(function(t){return new gm(t)}),this.register(function(t){return new am(t)}),this.register(function(t){return new lm(t)}),this.register(function(t){return new cm(t)}),this.register(function(t){return new hm(t)}),this.register(function(t){return new im(t)}),this.register(function(t){return new um(t)}),this.register(function(t){return new om(t)}),this.register(function(t){return new dm(t)}),this.register(function(t){return new fm(t)}),this.register(function(t){return new tm(t)}),this.register(function(t){return new xm(t)}),this.register(function(t){return new vm(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=io.extractUrlBase(e);o=io.resolveURL(c,this.path)}else o=io.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zv){try{o[wt.KHR_BINARY_GLTF]=new ym(e)}catch(u){s&&s(u);return}r=JSON.parse(o[wt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case wt.KHR_MATERIALS_UNLIT:o[u]=new nm;break;case wt.KHR_DRACO_MESH_COMPRESSION:o[u]=new _m(r,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:o[u]=new Mm;break;case wt.KHR_MESH_QUANTIZATION:o[u]=new bm;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Nw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},tm=class{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new no(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xr(h),c.distance=u;break;case"spot":c=new tf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,yr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},nm=class{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fi),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,an))}return Promise.all(s)}},im=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},sm=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(a,a)}return Promise.all(r)}},rm=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},om=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},am=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fi)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,an)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},lm=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},cm=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(a[0],a[1],a[2],fi),Promise.all(r)}},hm=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},um=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(a[0],a[1],a[2],fi),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,an)),Promise.all(r)}},fm=class{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},dm=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},pm=class{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},mm=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gm=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xm=class{constructor(e){this.name=wt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},vm=class{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ns.TRIANGLES&&c.mode!==ns.TRIANGLE_STRIP&&c.mode!==ns.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new $e,m=new A,p=new mn,y=new A(1,1,1),_=new Fi(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,x.compose(m,p,y));for(let v in l)if(v==="_COLOR_0"){let L=l[v];_.instanceColor=new na(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);cn.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Zv="glTF",Zc=12,Wv={JSON:1313821514,BIN:5130562},ym=class{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Zc,r=new DataView(e,Zc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Wv.JSON){let c=new Uint8Array(e,Zc+o,a);this.content=n.decode(c)}else if(l===Wv.BIN){let c=Zc+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_m=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Em[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Em[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=wl[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(d)},a,c,fi,f)})})}},Mm=class{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bm=class{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}},mf=class extends Qr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,y=1-m,_=p-f+u;for(let v=0;v!==a;v++){let L=o[x+v+a],E=o[x+v+l]*h,w=o[g+v+a],P=o[g+v]*h;r[v]=y*L+_*E+m*w+p*P}return r}},Uw=new mn,Sm=class extends mf{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Uw.fromArray(r).normalize().toArray(r),r}},ns={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xv={9728:Dn,9729:$n,9984:O0,9985:Mc,9986:Ja,9987:zs},qv={33071:lr,33648:Rc,10497:Qn},$0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Em={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},so={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zw={CUBICSPLINE:void 0,LINEAR:cl,STEP:ll},Q0={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ow(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new _l({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Os})),i.DefaultMaterial}function aa(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fw(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Bw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kw(i){let e,t=i.extensions&&i.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+em(t.attributes):e=i.indices+":"+em(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+em(i.targets[n]);return e}function em(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Tm(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Gw=new $e,wm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Qu(this.options.manager):this.textureLoader=new nf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return aa(r,a,s),yr(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=$0[s.type],a=wl[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new It(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=$0[s.type],c=wl[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(y);_||(x=new c(a,p*d,s.count*d/h),_=new pl(x,d/h),t.cache.add(y,_)),m=new ta(_,l,f%d/h,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new It(x,l,g);if(s.sparse!==void 0){let p=$0.SCALAR,y=wl[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,L=new y(o[1],_,s.sparse.count*p),E=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,P=L.length;w<P;w++){let b=L[w];if(m.setX(b,E[w*l]),l>=2&&m.setY(b,E[w*l+1]),l>=3&&m.setZ(b,E[w*l+2]),l>=4&&m.setW(b,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Xv[f.magFilter]||$n,h.minFilter=Xv[f.minFilter]||zs,h.wrapS=qv[f.wrapS]||Qn,h.wrapT=qv[f.wrapT]||Qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dn&&h.minFilter!==$n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new qn(x);m.needsUpdate=!0,f(m)}),t.load(io.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),yr(u,o),u.userData.mimeType=o.mimeType||Hw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[wt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ia,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Nc,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _l}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[wt.KHR_MATERIALS_UNLIT]){let u=s[wt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],fi),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,an)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);let h=r.alphaMode||Q0.OPAQUE;if(h===Q0.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Q0.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new J(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nt){let u=r.emissiveFactor;a.emissive=new re().setRGB(u[0],u[1],u[2],fi)}return r.emissiveTexture!==void 0&&o!==Nt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,an)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),yr(u,r),t.associations.set(u,{materials:e}),r.extensions&&aa(s,u,r),u})}createUniqueName(e){let t=Jt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yv(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=kw(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Yv(new Bt,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Ow(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,y=c[d];if(m.mode===ns.TRIANGLES||m.mode===ns.TRIANGLE_STRIP||m.mode===ns.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ou(x,y):new Xe(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ns.TRIANGLE_STRIP?p.geometry=J0(p.geometry,lf):m.mode===ns.TRIANGLE_FAN&&(p.geometry=J0(p.geometry,Yc));else if(m.mode===ns.LINES)p=new Hu(x,y);else if(m.mode===ns.LINE_STRIP)p=new gl(x,y);else if(m.mode===ns.LINE_LOOP)p=new Gu(x,y);else if(m.mode===ns.POINTS)p=new jr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Bw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),yr(p,r),m.extensions&&aa(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&aa(s,u[0],r),u[0];let f=new ze;r.extensions&&aa(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new In(uf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Kr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fu(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,_=f.length;y<_;y++){let v=f[y],L=d[y],E=g[y],w=x[y],P=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let b=n._createAnimationTracks(v,L,E,w,P);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new Ml(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Gw)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Dc:c.length>1?h=new ze:c.length===1?h=c[0]:h=new cn,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),yr(h,r),r.extensions&&aa(n,h,r),r.matrix!==void 0){let u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ze;n.name&&(r.name=s.createUniqueName(n.name)),yr(r,n),n.extensions&&aa(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof hi||f instanceof qn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];so[r.path]===so.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(so[r.path]){case so.weights:c=dr;break;case so.rotation:c=pr;break;case so.position:case so.scale:c=mr;break;default:n.itemSize===1?c=dr:c=mr;break}let h=s.interpolation!==void 0?zw[s.interpolation]:cl,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+so[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Tm(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof pr?Sm:mf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Vw(i,e,t){let n=e.attributes,s=new Ti;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let h=Tm(wl[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new A,l=new A;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Tm(wl[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Oi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Yv(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Em[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return bt.workingColorSpace!==fi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),yr(i,e),Vw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Fw(i,e.targets,t):i})}function Ri(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var nP=Ri(20954),Am=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],la=class{constructor(e=1337){let t=Ri(e);this.perm=new Uint8Array(512);let n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1));[n[s],n[r]]=[n[r],n[s]]}for(let s=0;s<512;s++)this.perm[s]=n[s&255]}noise(e,t){let n=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=0,o=0,a=0,l=(e+t)*n,c=Math.floor(e+l),h=Math.floor(t+l),u=(c+h)*s,f=e-(c-u),d=t-(h-u),g=f>d?1:0,x=f>d?0:1,m=f-g+s,p=d-x+s,y=f-1+2*s,_=d-1+2*s,v=c&255,L=h&255,E=.5-f*f-d*d;if(E>=0){let b=Am[this.perm[v+this.perm[L]]%8];E*=E,r=E*E*(b[0]*f+b[1]*d)}let w=.5-m*m-p*p;if(w>=0){let b=Am[this.perm[v+g+this.perm[L+x]]%8];w*=w,o=w*w*(b[0]*m+b[1]*p)}let P=.5-y*y-_*_;if(P>=0){let b=Am[this.perm[v+1+this.perm[L+1]]%8];P*=P,a=P*P*(b[0]*y+b[1]*_)}return 70*(r+o+a)}fbm(e,t,n=4,s=2,r=.5){let o=.5,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*this.noise(e*a,t*a),c+=o,o*=r,a*=s;return l/c}},Ae=(i,e,t)=>Math.min(t,Math.max(e,i)),_e=(i,e,t)=>i+(e-i)*t,je=(i,e,t)=>{let n=Ae((t-i)/(e-i),0,1);return n*n*(3-2*n)},Ve=(i,e,t,n)=>_e(i,e,1-Math.exp(-t*n)),ca=(i,e)=>{let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t},ei=(i,e,t,n)=>i+ca(i,e)*(1-Math.exp(-t*n)),Rm=null;function gf(){if(Rm)return Rm;let i=new Uint8Array([58,104,150,200,245]),e=new Fs(i,i.length,1,qc);return e.minFilter=$n,e.magFilter=$n,e.needsUpdate=!0,Rm=e,e}function At(i,e={}){return new oa({color:i,gradientMap:gf(),...e})}function Ut(i,e=1.2,t={}){return new oa({color:i,gradientMap:gf(),emissive:new re(i),emissiveIntensity:e,...t})}function zn(i,e={}){let{rimColor:t=14676223,rimStrength:n=.35,rimPower:s=3,...r}=e,o=new oa({color:i,gradientMap:gf(),...r}),a={value:new re(t)},l={value:n},c={value:s};return o.userData.rim={uRim:a,uStr:l,uPow:c},o.onBeforeCompile=h=>{h.uniforms.uRimColor=a,h.uniforms.uRimStrength=l,h.uniforms.uRimPower=c,h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
       uniform vec3 uRimColor;
       uniform float uRimStrength;
       uniform float uRimPower;`),h.fragmentShader=h.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
       {
         float _rim = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0), uRimPower);
         gl_FragColor.rgb += uRimColor * (_rim * uRimStrength);
       }`)},o.customProgramCacheKey=()=>"rimToon",o}function Kv(i,e={}){let{color:t=724244,thickness:n=.03}=e,s=new Dt({uniforms:{uColor:{value:new re(t)},uThick:{value:n}},vertexShader:`
      uniform float uThick;
      void main() {
        vec3 p = position + normalize(normal) * uThick;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      void main() { gl_FragColor = vec4(uColor, 1.0); }`,side:Tn}),r=new Xe(i.geometry,s);return r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=i.frustumCulled,i.add(r),r}function ki(i,e){let t=document.createElement("canvas");t.width=t.height=i;let n=t.getContext("2d");e(n,i);let s=new xl(t);return s.colorSpace=an,s}function Q(i,e,t=0,n=0,s=0,r=null){let o=new Xe(i,e);return o.position.set(t,n,s),o.castShadow=!0,r&&r.add(o),o}var Ne={v1:new A,v2:new A,v3:new A,q1:new mn,c1:new re},Ww=new pf,Cm=new Map;function Hi(i){return Cm.has(i)||Cm.set(i,new Promise((e,t)=>{Ww.load(i,e,void 0,t)})),Cm.get(i)}function Gi(i,e=16777215,t={}){return i.traverse(n=>{if(!n.isMesh)return;let s=n.material,r=new oa({map:s.map||null,color:e,gradientMap:gf(),transparent:s.transparent,alphaTest:s.alphaTest,...t});n.material=r,n.castShadow=!0}),i}function Kc(i){let e=new Ti().setFromObject(i),t=new A;return e.getSize(t),{size:t,box:e}}var ih={};Ns(ih,{init:()=>h2,update:()=>u2});var bs=-4,ss={x:0,z:-650},rs={x:550,z:-450},yf={x:-450,z:350},lo={x:450,z:150},ro={x:-190,z:-60},vf=24,jv=52;var Xw=new la(9001),xf=new la(4242),qw=new la(777),Jv=new la(3131),nh=[{x:180,z:80,r:12,h:0},{x:-360,z:260,r:12,h:0},{x:430,z:40,r:12,h:0},{x:430,z:-300,r:12,h:0},{x:0,z:250,r:15,h:0}],ty=!1;function ny(i,e){let t=Math.max(Math.abs(i),Math.abs(e));if(t>1350)return-16;let n=3.5+Xw.fbm(i*.0016,e*.0016,3)*7+xf.fbm(i*.0062,e*.0062,4)*2.4,s=i-lo.x,r=e-lo.z,o=Math.sqrt(s*s+r*r);if(o<250){let m=1-je(110,245,o);n+=m*(xf.fbm(i*.01,e*.01,3)*5+2)}let a=i-rs.x,l=e-rs.z,c=Math.sqrt(a*a+l*l);if(c<260){let m=Math.max(0,1-c/235);if(m>0){let p=Math.pow(m,1.5)*96;p+=qw.fbm(i*.02,e*.02,3)*7*Math.min(1,m*2.4)*je(16,42,c);let y=(1-je(20,52,c))*56;n+=Math.max(0,p-y)}}let h=i-yf.x,u=e-yf.z,f=Math.sqrt(h*h+u*u);if(f<180){let m=1-je(55,175,f),p=-10.5+xf.fbm(i*.011,e*.011,2)*1.6;n=_e(n,p,Math.pow(m,1.15))}let d=i-ss.x,g=e-ss.z,x=Math.sqrt(d*d+g*g);if(x<210){let m=1-je(115,200,x),p=vf+xf.fbm(i*.008,e*.008,3)*1.1;n=_e(n,p,m)}if(e<-320&&e>-610&&Math.abs(i)<70){let m=je(-350,-530,e),p=1-je(26,62,Math.abs(i)),y=_e(4.5,vf,m);n=_e(n,y,p*je(-322,-352,e))}{let m=1-je(60,84,Math.abs(i)),p=je(-500,-524,e)*(1-je(-644,-672,e)),y=m*p;y>0&&(n=_e(n,vf,y))}return t>950&&(n=_e(n,-16,je(950,1180,t))),n}function An(i,e){let t=ny(i,e);if(ty)for(let n=0;n<nh.length;n++){let s=nh[n],r=i-s.x,o=e-s.z,a=r*r+o*o,l=s.r+16;if(a<l*l){let c=1-je(s.r,l,Math.sqrt(a));t=_e(t,s.h,c)}}return t}function Yw(){for(let i of nh)i.h=ny(i.x,i.z);ty=!0}function ao(i,e){return Math.hypot(i-ss.x,e-ss.z)<205||Math.abs(i)<70&&e<-500&&e>-672?"castle":Math.hypot(i-rs.x,e-rs.z)<235?"volcano":Math.hypot(i-yf.x,e-yf.z)<178?"lake":Math.hypot(i-lo.x,e-lo.z)<215?"forest":Math.hypot(i-ro.x,e-ro.z)<95?"ruins":"plains"}function iy(i,e){let n=An(i+1.6,e)-An(i-1.6,e),s=An(i,e+1.6)-An(i,e-1.6);return Math.sqrt(n*n+s*s)/(2*1.6)}var $v=[[[0,258],[7,180],[-10,100],[-6,20],[8,-90],[2,-210],[0,-330],[0,-470],[0,-572]],[[-4,62],[84,66],[172,78]],[[-2,242],[-120,254],[-244,264],[-350,261]],[[1,4],[142,16],[292,28],[420,38]],[[1,-302],[152,-308],[302,-303],[420,-300]]];function Zw(i,e,t,n,s,r){let o=s-t,a=r-n,l=Ae(((i-t)*o+(e-n)*a)/(o*o+a*a),0,1),c=i-(t+o*l),h=e-(n+a*l);return Math.sqrt(c*c+h*h)}function Nm(i,e){let t=1e9;for(let n=0;n<$v.length;n++){let s=$v[n];for(let r=0;r<s.length-1;r++){let o=Zw(i,e,s[r][0],s[r][1],s[r+1][0],s[r+1][1]);o<t&&(t=o)}}return t}var _f=new $e,Mf=new mn,bf=new wi,Sf=new A,Ef=new A;function Tf(i){return i.computeVertexNormals(),i}function Im(i,e){let t=new re(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new It(s,3)),i}function _r(i,e,t,n,s,r=0,o=0,a=0,l=1,c=1,h=1){let u=e.index?e.toNonIndexed():e.clone();return bf.set(r,o,a),Mf.setFromEuler(bf),Sf.set(t,n,s),Ef.set(l,c,h),_f.compose(Sf,Mf,Ef),u.applyMatrix4(_f),i.push(u),u}function fa(i,e,t,n,s,r,o,a,l){bf.set(0,r,0),Mf.setFromEuler(bf),Sf.set(t,n,s),Ef.set(o,a,l),_f.compose(Sf,Mf,Ef),i.setMatrixAt(e,_f)}var Kw="assets/kenney/nature/",jw="assets/kenney/castle/";async function sy(i,e){let t=await Promise.all(e.map(n=>Hi(i+n+".glb").then(s=>[n,s])));return Object.fromEntries(t)}function Jw(){return sy(Kw,["tree_default","tree_oak","tree_detailed","tree_default_fall","tree_cone","tree_cone_dark","tree_fat_darkh","rock_largeA","rock_largeC","rock_largeE","rock_smallB","rock_smallD","rock_tallA","rock_tallC","plant_bush","plant_bushDetailed"])}function $w(){return sy(jw,["wall","tower-square-base","tower-square-mid-windows","tower-square-roof","gate","flag-banner-long"])}function oo(i,e=null){let t=i.scene;t.updateMatrixWorld(!0);let n=[];t.traverse(r=>{if(!r.isMesh)return;let o=r.geometry,a=o.index?o.toNonIndexed():o.clone();a.applyMatrix4(r.matrixWorld);let l=new Bt;l.setAttribute("position",a.attributes.position.clone()),Im(l,e??r.material.color.getHex()),n.push(l),a.dispose()});let s=vr(n);for(let r of n)r.dispose();return s}function jc(i,e,t=null){let{size:n}=Kc(i.scene),s=e/Math.max(1e-4,n.y),r=oo(i,t);return r.scale(s,s,s),r}function Pm(i,e,t=null){let{size:n}=Kc(i.scene),s=e/Math.max(1e-4,Math.max(n.x,n.z)/2),r=oo(i,t);return r.scale(s,s,s),r}var gi={grassA:new re(7319130),grassB:new re(6265933),grassC:new re(8370790),forest:new re(4620102),forestDeep:new re(3830341),rock:new re(9078135),rockDark:new re(7301726),volcano:new re(7027246),scorch:new re(4531740),sand:new re(13218179),bed:new re(9405544),road:new re(13480575),plaza:new re(10130045),dirt:new re(10257240)};function Qw(i){let s=new Yn(2e3,2e3,300,300);s.rotateX(-Math.PI/2);let r=s.attributes.position,o=r.count,a=new Float32Array(o);for(let x=0;x<o;x++){let m=An(r.getX(x),r.getZ(x));a[x]=m,r.setY(x,m)}let l=2e3/300,c=x=>{let m=x%301,p=x/301|0,y=a[p*301+Math.max(0,m-1)],_=a[p*301+Math.min(300,m+1)],v=a[Math.max(0,p-1)*301+m],L=a[Math.min(300,p+1)*301+m],E=(_-y)/(2*l),w=(L-v)/(2*l);return Math.sqrt(E*E+w*w)},h=new Float32Array(o*3),u=new re;for(let x=0;x<o;x++){let m=r.getX(x),p=r.getZ(x),y=a[x],_=c(x),v=Jv.fbm(m*.02,p*.02,2),L=Jv.noise(m*.11+50,p*.11-30);u.copy(gi.grassA),v>.12?u.lerp(gi.grassC,je(.12,.6,v)):v<-.12&&u.lerp(gi.grassB,je(-.12,-.6,v));let E=Math.hypot(m-lo.x,p-lo.z);if(E<250){let I=1-je(120,240,E);u.lerp(L>0?gi.forest:gi.forestDeep,I*.85)}let w=Math.hypot(m-rs.x,p-rs.z);if(w<250){let I=1-je(150,240,w);u.lerp(gi.volcano,I*.95),u.lerp(gi.scorch,I*je(28,62,y)*.85),L>.25&&I>.5&&u.lerp(gi.rockDark,.35)}if(y<bs+2.4){let I=1-je(bs+.2,bs+2.4,y);u.lerp(gi.sand,I),y<bs-.8&&u.lerp(gi.bed,je(bs-.8,bs-5,y))}let P=je(.28,.62,_);P>0&&w>=240&&u.lerp(gi.dirt,P*(.55+L*.12));let b=je(.6,1,_);b>0&&u.lerp(w<240?gi.rockDark:gi.rock,b*.85);{let I=1-je(58,80,Math.abs(m)),U=je(-504,-524,p)*(1-je(-640,-668,p)),N=I*U;N>0&&u.lerp(gi.plaza,N*(.75+L*.15))}if(y>bs+.3){let I=Nm(m,p);if(I<5.2){let U=1-je(2,4.8,I);u.lerp(gi.road,U*(.72+L*.1))}}let M=1+L*.045;h[x*3]=u.r*M,h[x*3+1]=u.g*M,h[x*3+2]=u.b*M}s.setAttribute("color",new It(h,3));let f=s.toNonIndexed();f.computeVertexNormals(),s.dispose();let d=At(16777215,{vertexColors:!0}),g=new Xe(f,d);return g.receiveShadow=!0,g.name="terrain",i.scene.add(g),g}var ry={value:0};function e2(i){let e=new Yn(4800,4800,120,120);e.rotateX(-Math.PI/2);let t=At(4165552,{transparent:!0,opacity:.72});t.onBeforeCompile=r=>{r.uniforms.uTime=ry,r.vertexShader=`uniform float uTime;
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
                       + sin((position.x + position.z) * 0.021 + uTime * 0.45) * 0.28;`)};let n=new Xe(e,t);n.position.y=bs,n.name="water",i.scene.add(n);let s=new Xe(new Yn(6e3,6e3,1,1),new Nt({color:1980996}));return s.rotation.x=-Math.PI/2,s.position.y=-15.5,i.scene.add(s),n}var eh=null,ua=null,th=null;function t2(i){ua=ki(256,(n,s)=>{n.fillStyle="#ff6a24",n.fillRect(0,0,s,s);let r=Ri(61870);for(let o=0;o<90;o++){let a=r()*s,l=r()*s,c=5+r()*16;n.fillStyle=`rgba(${52+r()*26|0}, ${22+r()*12|0}, 10, ${.5+r()*.35})`,n.beginPath(),n.ellipse(a,l,c,c*(.45+r()*.5),r()*Math.PI,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(255, 226, 150, 0.85)";for(let o=0;o<26;o++){n.lineWidth=1+r()*1.8,n.beginPath();let a=r()*s,l=r()*s;n.moveTo(a,l);for(let c=0;c<5;c++)a+=(r()-.5)*52,l+=(r()-.5)*52,n.lineTo(a,l);n.stroke()}}),ua.wrapS=ua.wrapT=Qn;let e=new $r(40,40);e.rotateX(-Math.PI/2),eh=new Nt({map:ua,fog:!1}),eh.color.setRGB(1.5,1.35,1.2);let t=new Xe(e,eh);return t.position.set(rs.x,jv,rs.z),t.name="lava",i.scene.add(t),th=new xr(16738848,900,190,1.9),th.position.set(rs.x,jv+14,rs.z),i.scene.add(th),t}function n2(i,e){let a=oo(e.wall,9078135),l=oo(e["tower-square-base"],9078135),c=oo(e["tower-square-mid-windows"],9078135),h=oo(e["tower-square-roof"],3747919),u=oo(e.gate,2760476),f=oo(e["flag-banner-long"],6956864),d=[],g=[],x=[],m=[],p=[],y=[14,-14,72,-72,136,-136,180].map(z=>z*Math.PI/180),_=y.map(z=>({a:z,x:Math.sin(z)*78,z:Math.cos(z)*78})),v=[14,72,136,180,-136,-72,-14].map(z=>z*Math.PI/180),L=(z,G,B,j,X,se)=>{let ue=j/.5,ge=X/(1.01*(1+se)+2.01),Ee=0;g.push({x:z,y:Ee,z:G,ry:B,sx:ue,sy:ge,sz:ue}),Ee+=1.01*ge;for(let ct=0;ct<se;ct++)x.push({x:z,y:Ee,z:G,ry:B,sx:ue,sy:ge,sz:ue}),Ee+=1.01*ge;m.push({x:z,y:Ee,z:G,ry:B,sx:ue,sy:ge,sz:ue}),p.push({x:z,y:Ee+2.01*ge-.6,z:G})};for(let z of _){let G=Math.abs(z.a)<.5;L(z.x,z.z,z.a,G?5.6:7,G?26:31,1)}let E=(z,G,B,j)=>{let X=Math.hypot(B-z,j-G),se=Math.atan2(-(j-G),B-z),ue=18/1.31,ge=4/1,Ee=Math.max(2,Math.round(X/(ue*.85)));for(let ct=0;ct<Ee;ct++){let $=(ct+.5)/Ee;d.push({x:_e(z,B,$),y:0,z:_e(G,j,$),ry:se,sx:X/Ee,sy:ue,sz:ge})}};for(let z=0;z<v.length-1;z++){let G=Math.sin(v[z])*78,B=Math.cos(v[z])*78,j=Math.sin(v[z+1])*78,X=Math.cos(v[z+1])*78;E(G,B,j,X)}L(0,-8,0,13,65,1),L(16,-2,0,6,52.5,2),L(-16,-2,0,6,52.5,2),L(0,-26,0,5,72.5,3);let w=new ze,P=(z,G)=>{if(!G.length)return null;let B=At(16777215,{vertexColors:!0}),j=new Fi(Tf(z),B,G.length);for(let X=0;X<G.length;X++){let se=G[X];fa(j,X,se.x,se.y,se.z,se.ry,se.sx,se.sy,se.sz)}return j.instanceMatrix.needsUpdate=!0,j.frustumCulled=!1,j.castShadow=!0,j.receiveShadow=!0,w.add(j),j};if(P(a,d),P(l,g),P(c,x),P(h,m),p.length){let z=new vl(.9,0),G=new Fi(z,Ut(10114559,1.8),p.length);for(let B=0;B<p.length;B++){let j=p[B];fa(G,B,j.x,j.y,j.z,0,1,1,1)}G.instanceMatrix.needsUpdate=!0,G.frustumCulled=!1,w.add(G)}let b=At(16777215,{vertexColors:!0}),M=new Xe(u,b);M.position.set(0,0,75),M.rotation.y=Math.PI/2,M.scale.setScalar(9.5),M.castShadow=!0,w.add(M);let I=new Xe(new Yn(11,13),new Nt({color:722452}));I.position.set(0,4.5,77),w.add(I);let U=At(16777215,{vertexColors:!0,side:dn});for(let z of[y[0],y[1]]){let G=Math.sin(z)*73.8,B=Math.cos(z)*(78-4.2),j=new Xe(f,U);j.position.set(G,9,B),j.rotation.y=z,j.scale.setScalar(6),j.castShadow=!0,w.add(j)}w.position.set(ss.x,vf-.4,ss.z),i.scene.add(w);let N=(z,G,B)=>i.colliders.push({x:ss.x+z,z:ss.z+G,radius:B});for(let z=0;z<v.length-1;z++){let G=Math.sin(v[z])*78,B=Math.cos(v[z])*78,j=Math.sin(v[z+1])*78,X=Math.cos(v[z+1])*78,se=Math.hypot(j-G,X-B),ue=Math.max(2,Math.round(se/7));for(let ge=0;ge<=ue;ge++){let Ee=ge/ue;N(_e(G,j,Ee),_e(B,X,Ee),3.6)}}for(let z of _)N(z.x,z.z,Math.abs(z.a)<.5?6.2:7.6);return N(-8.5,77,3.4),N(8.5,77,3.4),N(0,-8,17),N(0,-26,5.5),w}function i2(i){let e=Ri(643557),t=At(9735030),n=[],s=(c,h,u,f,d,g)=>{let x=An(c,h),m=(g?2.4+e()*1.6:5.6)*u;_r(n,new st(2.5,.7,2.5),c,x+.2,h,0,d,0),_r(n,new $t(.8,.95,m,7),c,x+.55+m/2,h,f,d,f*.6),g||_r(n,new st(2.2,.55,2.2),c,x+.55+m+.27,h,f,d,f*.6),i.colliders.push({x:c,z:h,radius:1.25})},r=(c,h,u)=>{let f=An(c,h),d=Math.cos(u)*3.2,g=-Math.sin(u)*3.2;s(c-d,h-g,1,0,u,!1),s(c+d,h+g,1,0,u,!1),_r(n,new st(8.4,1.15,2),c,f+6.9,h,0,u,0);for(let x=0;x<3;x++){let m=c+(e()-.5)*9,p=h+(e()-.5)*9;_r(n,new st(1+e()*1.4,.8+e()*.8,1+e()),m,An(m,p)+.3,p,e()*.5,e()*Math.PI,e()*.5)}},o=8;for(let c=0;c<o;c++){let h=c/o*Math.PI*2,u=ro.x+Math.sin(h)*24,f=ro.z+Math.cos(h)*24;e()<.72&&s(u,f,.9+e()*.3,(e()-.5)*.14,h,e()<.4)}r(ro.x,ro.z-2,.4),r(ro.x+46,ro.z+30,-.9);let a=[[-80,120],[110,-140],[-260,40],[60,-260],[-120,-180],[230,190]];for(let[c,h]of a)ao(c,h)!=="plains"&&ao(c,h)!=="ruins"||s(c+(e()-.5)*10,h+(e()-.5)*10,.8+e()*.4,(e()-.5)*.2,e()*Math.PI,e()<.55);let l=new Xe(Tf(vr(n)),t);return l.castShadow=!0,l.receiveShadow=!0,i.scene.add(l),l}function s2(i){let e=Ri(199191),t=46,n=Tf(new rn(1,1,6,1).toNonIndexed()),s=At(6188408),r=new Fi(n,s,t),o=new re;for(let a=0;a<t;a++){let l=a/t*Math.PI*2+e()*.12,c=1190+e()*220,h=190+e()*230,u=95+e()*105;fa(r,a,Math.sin(l)*c,-30+h/2,Math.cos(l)*c,e()*Math.PI,u,h,u),o.setHSL(.56+e()*.04,.16+e()*.1,.42+e()*.14),r.setColorAt(a,o)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),i.scene.add(r),r}var oy={value:0},Lm={value:new A(0,0,250)},Qv={value:70},Fn=null,ha=null,Dm=0,is=0,On=0,Bs=0,ey=0,xi=0,vi=0;function Al(i,e,t={}){if(An(i,e)<bs+(t.minAboveWater??.6)||iy(i,e)>(t.maxSlope??.85)||Nm(i,e)<(t.roadGap??3.4)||Math.hypot(i-ss.x,e-ss.z)<(t.castleGap??96)||Math.abs(i)<64&&e<-512&&e>-652)return!1;for(let s of nh)if(Math.hypot(i-s.x,e-s.z)<s.r+(t.spotGap??4))return!1;return!0}function r2(){let i=new Bt;return i.setAttribute("position",new It(new Float32Array([-.09,0,0,.09,0,0,-.055,.5,.02,.055,.5,.02,0,.95,.06]),3)),i.setAttribute("normal",new It(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]),3)),i.setAttribute("color",new It(new Float32Array([.24,.45,.19,.24,.45,.19,.34,.58,.26,.34,.58,.26,.46,.71,.34]),3)),i.setAttribute("uv",new It(new Float32Array(10),2)),i.setIndex([0,1,2,1,3,2,2,3,4]),i}function o2(){let i=r2(),e=Ri(420437),t=[];for(let n=0;n<4;n++){let s=n/4*Math.PI*2+e()*.8,r=n===0?0:.12+e()*.34,o=.82+e()*.5;_r(t,i,Math.sin(s)*r,0,Math.cos(s)*r,(e()-.5)*.28,e()*Math.PI*2,(e()-.5)*.28,o*1.55,o*(.78+e()*.45),o*1.55)}return i.dispose(),vr(t)}function Rl(i,e,t){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,2246822519)|0;return n=Math.imul(n^n>>>15,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Qc(i,e){let t=(i%is+is)%is,s=(e%is+is)%is*is+t,r=(Rl(i,e,1)-.5)*Bs*.92,o=(Rl(i,e,2)-.5)*Bs*.92,a=i*Bs+r,l=e*Bs+o,c=ao(a,l),h;c==="plains"||c==="ruins"?h=1:c==="lake"?h=.94:c==="forest"?h=.72:c==="castle"?h=.34:h=0;let u=!(h<=0||h<1&&Rl(i,e,6)>h),f=0;if(u){f=An(a,l),u=f>=bs+.5&&Nm(a,l)>=2.2&&Math.hypot(a-ss.x,l-ss.z)>=92&&!(Math.abs(a)<64&&l<-512&&l>-652);for(let d=0;u&&d<4;d++){let g=nh[d],x=a-g.x,m=l-g.z;x*x+m*m<(g.r+2.5)*(g.r+2.5)&&(u=!1)}u&&iy(a,l)>.9&&(u=!1)}if(u){let d=.75+Rl(i,e,3)*.7;fa(Fn,s,a,f-.05,l,Rl(i,e,4)*Math.PI*2,d,d*(.82+Rl(i,e,5)*.5),d)}else fa(Fn,s,a,-1e3,l,0,0,0,0)}function ay(){for(let i=vi-On;i<=vi+On;i++)for(let e=xi-On;e<=xi+On;e++)Qc(e,i);Fn&&(Fn.instanceMatrix.needsUpdate=!0)}function ly(i,e){Fn&&(i.scene.remove(Fn),Fn.geometry.dispose(),Fn.material.dispose(),Fn=null);let t=Ae(e??1,.1,1);Bs=_e(.94,.66,t),On=Math.round(_e(48,104,t)),is=On*2+1,ey=On*Bs,Qv.value=ey;let n=is*is,s=At(16777215,{vertexColors:!0,side:dn});s.onBeforeCompile=o=>{o.uniforms.uTime=oy,o.uniforms.uPlayer=Lm,o.uniforms.uRadius=Qv,o.vertexShader=`uniform float uTime;
uniform vec3 uPlayer;
uniform float uRadius;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float hsh = fract(sin(dot(ip, vec2(12.9898, 78.233))) * 43758.5453);
        float wgt = smoothstep(0.0, 1.0, position.y);            // \u6839\u51430\u2192\u7A42\u51481
        float ph = ip.x * 0.15 + ip.y * 0.13 + hsh * 6.2831;
        float sway = sin(uTime * 1.6 + ph) * 0.5 + sin(uTime * 3.15 + ph * 1.7) * 0.22;
        float gust = smoothstep(0.15, 1.0, sin(uTime * 0.45 + ip.x * 0.018 + ip.y * 0.022));
        float bend = (sway + gust * 0.85) * wgt;
        transformed.x += bend * 0.42;
        transformed.z += (cos(uTime * 1.2 + ph) * 0.5 + gust * 0.6) * wgt * 0.3;
        float dpl = length(ip - uPlayer.xz);
        float fade = 1.0 - smoothstep(uRadius * 0.72, uRadius, dpl);
        transformed *= fade;                                     // \u7E01\u3067\u682A\u3092\u6839\u5143\u3078\u6F70\u3057\u3066\u4E0D\u53EF\u8996\u5316
      #endif`).replace("#include <color_vertex>",`#include <color_vertex>
      #ifdef USE_INSTANCING
        vec2 ipc = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float hc = fract(sin(dot(ipc, vec2(39.3468, 11.135))) * 24634.6345);
        vColor.rgb *= (0.78 + hc * 0.42);
        float hue = hc - 0.5;
        vColor.r *= 1.0 + hue * 0.14;
        vColor.b *= 1.0 - hue * 0.16;
      #endif`)},Fn=new Fi(o2(),s,n),Fn.frustumCulled=!1,Fn.castShadow=!1,Fn.receiveShadow=!1,Fn.name="grass-follow";let r=i.player&&i.player.position||{x:0,z:250};xi=Math.round((r.x??0)/Bs),vi=Math.round((r.z??250)/Bs),Lm.value.set(r.x??0,r.y??0,r.z??250),ay(),i.scene.add(Fn)}function a2(i){if(!Fn)return;if(i.state==="shrine"){Fn.visible=!1;return}Fn.visible=!0;let e=i.player&&i.player.position||i.camera.position;Lm.value.set(e.x,e.y,e.z);let t=Math.round(e.x/Bs),n=Math.round(e.z/Bs),s=t-xi,r=n-vi;if(!(s===0&&r===0)){if(Math.abs(s)>=is||Math.abs(r)>=is){xi=t,vi=n,ay();return}for(;xi<t;){xi++;let o=xi+On;for(let a=vi-On;a<=vi+On;a++)Qc(o,a)}for(;xi>t;){xi--;let o=xi-On;for(let a=vi-On;a<=vi+On;a++)Qc(o,a)}for(;vi<n;){vi++;let o=vi+On;for(let a=xi-On;a<=xi+On;a++)Qc(a,o)}for(;vi>n;){vi--;let o=vi-On;for(let a=xi-On;a<=xi+On;a++)Qc(a,o)}Fn.instanceMatrix.needsUpdate=!0}}function Jc(i,e,t,{shadow:n=!0,tint:s=null}={}){if(!t.length)return null;let r=At(16777215,{vertexColors:!0}),o=new Fi(Tf(e),r,t.length);o.frustumCulled=!1;let a=new re;for(let l=0;l<t.length;l++){let c=t[l];fa(o,l,c.x,c.y,c.z,c.ry,c.sx,c.sy,c.sz),s&&(s(a,c),o.setColorAt(l,a))}return o.castShadow=n,i.scene.add(o),o}function $c(i,e,t){let n=Array.from({length:e},()=>[]);for(let s of i)n[Math.floor(t()*e)%e].push(s);return n}function l2(i,e){let t=Ri(133062381);ly(i,i.quality?.grassMul??1);let n=[],s=[],r=[],o=[],a=[],l=[],c=(U,N)=>{for(let z=0;z<U;z++)N()};c(900,()=>{let U=t()*Math.PI*2,N=Math.sqrt(t())*200,z=lo.x+Math.sin(U)*N,G=lo.z+Math.cos(U)*N;if(!Al(z,G,{roadGap:5,maxSlope:.7}))return;let B=.85+t()*.9;(N>130&&t()<.45?s:n).push({x:z,y:An(z,G)-.15,z:G,ry:t()*Math.PI*2,sx:B,sy:B*(.9+t()*.3),sz:B}),i.colliders.push({x:z,z:G,radius:.62*B})}),c(420,()=>{let U=(t()*2-1)*940,N=(t()*2-1)*940,z=ao(U,N);if(z!=="plains"&&z!=="lake"&&z!=="ruins"||t()>(z==="lake"?.5:.28)||!Al(U,N,{roadGap:6,maxSlope:.6}))return;let G=.8+t()*.85;(N<-150&&t()<.5||t()<.18?s:n).push({x:U,y:An(U,N)-.15,z:N,ry:t()*Math.PI*2,sx:G,sy:G*(.9+t()*.3),sz:G}),i.colliders.push({x:U,z:N,radius:.62*G})}),c(240,()=>{let U=t()*Math.PI*2,N=115+t()*105,z=rs.x+Math.sin(U)*N,G=rs.z+Math.cos(U)*N;if(!Al(z,G,{roadGap:4,maxSlope:1.15})||t()>.45)return;let B=.8+t()*.8;r.push({x:z,y:An(z,G)-.1,z:G,ry:t()*Math.PI*2,sx:B,sy:B,sz:B}),i.colliders.push({x:z,z:G,radius:.45*B})}),c(760,()=>{let U=(t()*2-1)*960,N=(t()*2-1)*960,z=ao(U,N),G=z==="volcano"?.75:z==="plains"?.16:z==="forest"?.14:z==="lake"?.2:0;if(t()>G||!Al(U,N,{roadGap:4.5,maxSlope:1.5,minAboveWater:-.5}))return;let B=.7+t()*2.1,j=.55+t()*1.6,X=.7+t()*2.1;o.push({x:U,y:An(U,N)-j*.35,z:N,ry:t()*Math.PI*2,sx:B,sy:j,sz:X,v:z==="volcano"});let se=Math.max(B,X)*.85;se>1&&i.colliders.push({x:U,z:N,radius:se})}),c(520,()=>{let U=(t()*2-1)*940,N=(t()*2-1)*940,z=ao(U,N),G=z==="forest"?.55:z==="plains"||z==="ruins"?.3:z==="lake"?.35:0;if(t()>G||!Al(U,N,{roadGap:4,maxSlope:.7}))return;let B=.55+t()*.9;a.push({x:U,y:An(U,N)+B*.25,z:N,ry:t()*Math.PI*2,sx:B,sy:B*.62,sz:B})}),c(3400,()=>{let U=(t()*2-1)*940,N=(t()*2-1)*940,z=ao(U,N),G=z==="plains"||z==="ruins"?.66:z==="lake"?.58:z==="forest"?.12:0;if(t()>G||!Al(U,N,{roadGap:3.2,maxSlope:.6,spotGap:1}))return;let B=.75+t()*.7;l.push({x:U,y:An(U,N),z:N,ry:t()*Math.PI*2,sx:B,sy:B,sz:B,k:t()*4|0})});let h=["tree_default","tree_oak","tree_detailed","tree_default_fall"],u=[5.2,5,5.3,5.2].map((U,N)=>jc(e[h[N]],U)),f=(U,N)=>U.setRGB(.85+(N.x*13.7%1+1)%1*.3,.9+(N.z*7.3%1+1)%1*.2,.85);$c(n,u.length,t).forEach((U,N)=>Jc(i,u[N],U,{tint:f}));let d=[jc(e.tree_cone,5.4),jc(e.tree_cone_dark,5.4)],g=(U,N)=>U.setRGB(.9,.9+(N.x*5.1%1+1)%1*.2,.9);$c(s,d.length,t).forEach((U,N)=>Jc(i,d[N],U,{tint:g}));let x=[jc(e.tree_fat_darkh,4.2),jc(e.rock_tallC,3)],m=U=>U.multiplyScalar(.68+U.r*97%1*.12);$c(r,x.length,t).forEach((U,N)=>Jc(i,x[N],U,{tint:m}));let y=["rock_largeA","rock_largeC","rock_largeE","rock_smallB","rock_smallD","rock_tallA"].map(U=>Pm(e[U],1)),_=(U,N)=>{let z=.85+((N.x*3.3+N.z*1.7)%1+1)%1*.3;U.multiplyScalar(z),N.v&&U.multiplyScalar(.6)};$c(o,y.length,t).forEach((U,N)=>Jc(i,y[N],U,{tint:_}));let v=[Pm(e.plant_bush,1),Pm(e.plant_bushDetailed,1)],L=(U,N)=>U.multiplyScalar(.8+(N.z*9.1%1+1)%1*.4);$c(a,v.length,t).forEach((U,N)=>Jc(i,v[N],U,{tint:L}));let E=[],w=Im(new Yn(.3,.3),16777215);_r(E,w,0,.36,0,-Math.PI/2.4,0,0),_r(E,w,0,.36,0,-Math.PI/2.4,Math.PI/2,0),_r(E,Im(new Yn(.05,.4),4160053),0,.18,0);let P=vr(E),b=At(16777215,{vertexColors:!0,side:dn});Dm=l.length,ha=new Fi(P,b,Dm),ha.frustumCulled=!1;let M=new re,I=[15921380,16766814,15239864,10336511];for(let U=0;U<l.length;U++){let N=l[U];fa(ha,U,N.x,N.y,N.z,N.ry,N.sx,N.sy,N.sz),M.set(I[N.k]),ha.setColorAt(U,M)}i.scene.add(ha)}function cy(i){let e=Ae(i?.grassMul??1,.05,1);ha&&(ha.count=Math.max(80,Math.floor(Dm*(.4+e*.6))))}function c2(i,e){ly(i,Ae(e?.grassMul??1,.1,1)),cy(e)}async function h2(i){Yw();let e=Jw(),t=$w();Qw(i),e2(i),t2(i),n2(i,await t),i2(i),s2(i),l2(i,await e),i.world={getHeight:An,getBiome:ao,waterLevel:bs,castleGatePos:new A(0,An(0,-560),-560),startPos:new A(0,An(0,250),250)},i.getGroundHeight=An,cy(i.quality),i.on("quality-changed",n=>c2(i,n))}function u2(i,e){if(ry.value+=e,oy.value+=e,a2(i),ua&&(ua.offset.x+=e*.009,ua.offset.y+=e*.006),eh){let t=i.time.elapsed,n=1.28+Math.sin(t*2.1)*.16+Math.sin(t*5.3)*.07;eh.color.setRGB(n*1.22,n*1.02,n*.88)}th&&(th.intensity=850+Math.sin(i.time.elapsed*2.7)*230)}var ah={};Ns(ah,{init:()=>g2,update:()=>x2});var f2=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,d2=`
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
`,Bn=i=>new re(i);function Ci(i,e,t,n,s,r,o,a,l,c,h,u,f,d){return{p:i,top:Bn(e),mid:Bn(t),hor:Bn(n),sun:Bn(s),glow:r,light:Bn(o),lightInt:a,hemiS:Bn(l),hemiG:Bn(c),hemiInt:h,cloud:Bn(u),fogN:f,fogF:d}}var wf=[Ci(0,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150),Ci(.035,5068176,13664125,16761968,16768164,1.5,16760968,1.5,10917294,5523518,.62,16764836,150,1250),Ci(.085,5011640,9681112,15782560,16771264,1,16767400,1.8,11455720,5924432,.78,16769228,180,1350),Ci(.14,4556498,8570088,14478828,16773846,.65,16772552,2.1,12903158,6714972,.9,16514558,220,1500),Ci(.25,4029906,8308968,14348018,16775400,.5,16773848,2.3,13625850,7109728,.95,16186108,260,1600),Ci(.4,4685764,9355998,15327170,16772811,.7,16769970,2,13033456,6844506,.85,16643040,210,1450),Ci(.47,5790356,12614242,16755540,16764808,1.4,16758129,1.5,11044496,5129272,.6,16762010,160,1300),Ci(.5,5453166,12737364,16747078,16756838,1.9,16751192,1,9200264,4536882,.45,15767420,145,1200),Ci(.545,2302034,5321310,10112592,16750688,1,12619904,.5,5260910,2630704,.32,6966364,115,1050),Ci(.6,791088,1581642,2898528,16756848,.35,11454190,.4,2898526,1448998,.3,2897490,95,980),Ci(.75,461860,1055290,2109518,16756848,.25,12440566,.5,2569818,1251876,.3,2436680,90,950),Ci(.9,659498,1318466,2503252,16756848,.3,11716846,.42,2766424,1383205,.29,2699856,95,980),Ci(.955,1843528,3945056,7226976,16763024,.8,13605508,.5,5787250,2762032,.34,5784664,110,1050),Ci(1,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150)],Oe={top:new re,mid:new re,hor:new re,sun:new re,light:new re,hemiS:new re,hemiG:new re,cloud:new re,glow:0,lightInt:0,hemiInt:0,fogN:100,fogF:1e3};function p2(i){let e=i-Math.floor(i),t=0;for(;t<wf.length-2&&wf[t+1].p<=e;)t++;let n=wf[t],s=wf[t+1],r=je(n.p,s.p,e);Oe.top.lerpColors(n.top,s.top,r),Oe.mid.lerpColors(n.mid,s.mid,r),Oe.hor.lerpColors(n.hor,s.hor,r),Oe.sun.lerpColors(n.sun,s.sun,r),Oe.light.lerpColors(n.light,s.light,r),Oe.hemiS.lerpColors(n.hemiS,s.hemiS,r),Oe.hemiG.lerpColors(n.hemiG,s.hemiG,r),Oe.cloud.lerpColors(n.cloud,s.cloud,r),Oe.glow=_e(n.glow,s.glow,r),Oe.lightInt=_e(n.lightInt,s.lightInt,r),Oe.hemiInt=_e(n.hemiInt,s.hemiInt,r),Oe.fogN=_e(n.fogN,s.fogN,r),Oe.fogF=_e(n.fogF,s.fogF,r)}var Ss={top:Bn(1443593),mid:Bn(3805459),hor:Bn(6168342),light:Bn(16740432),lightInt:.6,hemiS:Bn(5776686),hemiG:Bn(1510414),hemiInt:.34,cloud:Bn(3675159),fogN:26,fogF:330},os={fog:Bn(660503),light:Bn(8839894),lightInt:.42,hemiS:Bn(3116936),hemiG:Bn(860452),hemiInt:.55,fogN:620,fogF:3200,dir:new A(.3,1,.22).normalize()},rh=46,ho,as,Es,Om,da,Fm,Zn,uo,fo,oh,Cl,Bm,km=null,hn=0,gn=0,Af=0,Um=4,hy=0,uy=0,Mr=Ri(659918),sh=new A,zm=new A,ks=new A,co=new A,fy=new A,dy=new A,py=new re,my=new re,gy=new re(12374783);function m2(i){let e=[[0,.1,0,1.7,1,1.25],[1.55,.05,.35,1.05,.72,.9],[-1.5,0,-.25,1.15,.8,1],[.55,.55,-.7,.85,.6,.8],[-.65,.5,.65,.7,.52,.72]],t=[];for(let[c,h,u,f,d,g]of e){let x=new vl(1,1);x.scale(f,d,g),x.translate(c,h,u),t.push(x)}let n=null;try{n=vr(t)}catch{n=null}n||(n=t[0]),n.computeVertexNormals(),Om=At(16186108),Es=new Fi(n,Om,rh),Es.instanceMatrix.setUsage(_s),Es.castShadow=!1,Es.receiveShadow=!1,Es.frustumCulled=!1,da=new Float32Array(rh*3),Fm=new Float32Array(rh);let s=new $e,r=new mn,o=new A,a=new A,l=new A(0,1,0);for(let c=0;c<rh;c++){let h=(Mr()-.5)*2600,u=(Mr()-.5)*2600,f=135+Mr()*110;da[c*3]=h,da[c*3+1]=f,da[c*3+2]=u,Fm[c]=.6+Mr()*.8;let d=9+Mr()*17;r.setFromAxisAngle(l,Mr()*Math.PI*2),o.set(d*(.8+Mr()*.6),d*.55,d),s.compose(a.set(h,f,u),r,o),Es.setMatrixAt(c,s)}i.add(Es)}async function g2(i){let e=i.scene,t=new Et(1800,48,24),n=new Dt({uniforms:{uTop:{value:new re(4029906)},uMid:{value:new re(8308968)},uHor:{value:new re(14348018)},uSunDir:{value:new A(.8,.4,.3).normalize()},uMoonDir:{value:new A(-.8,-.4,-.3).normalize()},uSunCol:{value:new re(16775400)},uGlow:{value:.6},uNight:{value:0},uTime:{value:0},uFlash:{value:0},uSunI:{value:1}},vertexShader:f2,fragmentShader:d2,side:Tn,depthWrite:!1,fog:!1});ho=new Xe(t,n),ho.frustumCulled=!1,ho.renderOrder=-100,as=n.uniforms,e.add(ho),m2(e),Zn=new no(16773848,2.3),Zn.castShadow=!0;let s=i.quality&&i.quality.shadowMapSize||1024;Zn.shadow.mapSize.set(s,s);let r=Zn.shadow.camera;r.left=-54,r.right=54,r.top=54,r.bottom=-54,r.near=24,r.far=400,r.updateProjectionMatrix(),Zn.shadow.radius=3.2,Zn.shadow.bias=-4e-4,Zn.shadow.normalBias=.55,e.add(Zn,Zn.target),uo=new no(12374783,.5),uo.castShadow=!1,e.add(uo,uo.target),fo=new no(14674687,.24),fo.castShadow=!1,e.add(fo,fo.target),oh=new ef(13625850,7109728,.95),e.add(oh),Cl=new Uu(14348018,260,1600),e.fog=Cl,Bm=new re(14348018),e.background=Bm,i.on("quality-changed",o=>{let a=o&&o.shadowMapSize||i.quality&&i.quality.shadowMapSize||1024;Zn.shadow.map&&(Zn.shadow.map.dispose(),Zn.shadow.map=null),Zn.shadow.mapSize.set(a,a)}),i.sky={sunDir:new A(.9,.3,.3).normalize(),sunLight:Zn,setOverride(o){km=o==="shrine"||o==="boss"?o:null}}}function x2(i,e){if(!ho)return;let t=i.time.dayPhase,n=i.time.elapsed,s=i.player&&i.player.position||i.camera.position,r=i.quality&&i.quality.drawDist||1,o=t*Math.PI*2;sh.set(Math.cos(o),Math.sin(o),.34).normalize(),zm.set(-Math.cos(o)*.92,-Math.sin(o),-.42).normalize();let a=sh.y,l=1-je(-.16,-.02,a),c=je(-.12,.02,a);hn=Ve(hn,km==="shrine"?1:0,4,e),gn=Ve(gn,km==="boss"?1:0,2.5,e),hn<.001&&(hn=0),gn<.001&&(gn=0),gn>.4&&(Um-=e,Um<=0&&(Af=.55+Mr()*.45,Um=2.8+Mr()*5.5)),Af=Math.max(0,Af-e*3.2);let h=Af*gn;p2(t),gn>0&&(Oe.top.lerp(Ss.top,gn),Oe.mid.lerp(Ss.mid,gn),Oe.hor.lerp(Ss.hor,gn),Oe.light.lerp(Ss.light,gn),Oe.hemiS.lerp(Ss.hemiS,gn),Oe.hemiG.lerp(Ss.hemiG,gn),Oe.cloud.lerp(Ss.cloud,gn),Oe.glow=_e(Oe.glow,0,gn),Oe.lightInt=_e(Oe.lightInt,Ss.lightInt,gn),Oe.hemiInt=_e(Oe.hemiInt,Ss.hemiInt,gn),Oe.fogN=_e(Oe.fogN,Ss.fogN,gn),Oe.fogF=_e(Oe.fogF,Ss.fogF,gn)),hn>0&&(Oe.top.lerp(os.fog,hn),Oe.mid.lerp(os.fog,hn),Oe.hor.lerp(os.fog,hn),Oe.light.lerp(os.light,hn),Oe.hemiS.lerp(os.hemiS,hn),Oe.hemiG.lerp(os.hemiG,hn),Oe.cloud.lerp(os.fog,hn),Oe.glow=_e(Oe.glow,0,hn),Oe.lightInt=_e(Oe.lightInt,os.lightInt,hn),Oe.hemiInt=_e(Oe.hemiInt,os.hemiInt,hn),Oe.fogN=_e(Oe.fogN,os.fogN,hn),Oe.fogF=_e(Oe.fogF,os.fogF,hn)),Cl.color.copy(Oe.hor),Cl.near=Oe.fogN*r,Cl.far=Math.max(Oe.fogF*r,Cl.near+120),Bm.copy(Oe.hor),ho.visible=hn<.98,ho.visible&&(ho.position.copy(s),as.uTop.value.copy(Oe.top),as.uMid.value.copy(Oe.mid),as.uHor.value.copy(Oe.hor),as.uSunDir.value.copy(sh),as.uMoonDir.value.copy(zm),as.uSunCol.value.copy(Oe.sun),as.uGlow.value=Oe.glow,as.uSunI.value=(1-gn)*(1-hn),as.uNight.value=l*(1-gn)*(1-hn),as.uTime.value=n,as.uFlash.value=h),ks.copy(sh).multiplyScalar(c).addScaledVector(zm,1-c),hn>0&&ks.lerp(os.dir,hn),ks.lengthSq()<.05&&ks.set(.2,1,.1),ks.y=Math.max(ks.y,.08),ks.normalize(),Zn.position.copy(s).addScaledVector(ks,170),Zn.target.position.copy(s),Zn.color.copy(Oe.light),Zn.intensity=Oe.lightInt*(1+.15*c)+h*1.2,oh.color.copy(Oe.hemiS),oh.groundColor.copy(Oe.hemiG),oh.intensity=Oe.hemiInt*(1-.1*c)+h*.35,co.set(ks.x,0,ks.z),co.lengthSq()<1e-4&&co.set(0,0,1),co.normalize();let u=1-.3*gn;fy.set(-co.x,.3,-co.z).normalize(),uo.position.copy(s).addScaledVector(fy,200),uo.target.position.copy(s),py.copy(Oe.hemiS).lerp(gy,.5),uo.color.copy(py),uo.intensity=(.34+.3*c)*u+h*.25,dy.set(-co.x*.7,1.3,-co.z*.7).normalize(),fo.position.copy(s).addScaledVector(dy,200),fo.target.position.copy(s),my.copy(Oe.hemiS).lerp(Oe.hor,.35).lerp(gy,.18),fo.color.copy(my),fo.intensity=(.16+.14*c)*u;let f=je(.42,.8,a),d=je(1.05,1.6,Oe.glow)*c,g=1.03-.08*f+.09*d+.02*l;g=_e(g,1,Math.max(gn,hn)),g=Ae(g,.95,1.15);let x=i.renderer;if(x&&(x.toneMappingExposure=Ve(x.toneMappingExposure,g,2.2,e)),Es.visible=hn<.98,Es.visible){hy+=e*2.4,uy+=e*.7;let m=Es.instanceMatrix.array;for(let p=0;p<rh;p++){let y=Fm[p],_=da[p*3]+hy*y,v=da[p*3+2]+uy*y;m[p*16+12]=((_+1300)%2600+2600)%2600-1300,m[p*16+13]=da[p*3+1]+Math.sin(n*.08+p*2.1)*4,m[p*16+14]=((v+1300)%2600+2600)%2600-1300}Es.instanceMatrix.needsUpdate=!0,Om.color.copy(Oe.cloud)}i.sky.sunDir.copy(sh)}var dh={};Ns(dh,{init:()=>k2,update:()=>H2});var po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v2=new Kr(-1,1,1,-1,0,1),Hm=class extends Bt{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},y2=new Hm,Hs=class{constructor(e){this._mesh=new Xe(y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pl=class extends yi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ai.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var lh=class extends yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Rf=class extends yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Cf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new J);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pl(po),this.copyPass.material.blending=Ln,this.clock=new Sl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lh!==void 0&&(o instanceof lh?n=!0:o instanceof Rf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pf=class extends yi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ch={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new J},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $e},cameraProjectionMatrixInverse:{value:new $e},cameraWorldMatrix:{value:new $e},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},hh={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},If={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function xy(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=_2(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new A(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Fs(s,e,e);return r.wrapS=Qn,r.wrapT=Qn,r.needsUpdate=!0,r}function _2(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var uh={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gm(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new J},cameraProjectionMatrixInverse:{value:new $e},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Gm(i,e,t){let n=M2(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function M2(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var Lf=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let y=g-m+h,_=x-p+h,v=g-1+2*h,L=x-1+2*h,E=l&255,w=c&255,P=this.perm[E+this.perm[w]]%12,b=this.perm[E+m+this.perm[w+p]]%12,M=this.perm[E+1+this.perm[w+1]]%12,I=.5-g*g-x*x;I<0?n=0:(I*=I,n=I*I*this.dot(this.grad3[P],g,x));let U=.5-y*y-_*_;U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[b],y,_));let N=.5-v*v-L*L;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[M],v,L)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,x=h-g,m=u-g,p=f-g,y=e-x,_=t-m,v=n-p,L,E,w,P,b,M;y>=_?_>=v?(L=1,E=0,w=0,P=1,b=1,M=0):y>=v?(L=1,E=0,w=0,P=1,b=0,M=1):(L=0,E=0,w=1,P=1,b=0,M=1):_<v?(L=0,E=0,w=1,P=0,b=1,M=1):y<v?(L=0,E=1,w=0,P=0,b=1,M=1):(L=0,E=1,w=0,P=1,b=1,M=0);let I=y-L+d,U=_-E+d,N=v-w+d,z=y-P+2*d,G=_-b+2*d,B=v-M+2*d,j=y-1+3*d,X=_-1+3*d,se=v-1+3*d,ue=h&255,ge=u&255,Ee=f&255,ct=this.perm[ue+this.perm[ge+this.perm[Ee]]]%12,$=this.perm[ue+L+this.perm[ge+E+this.perm[Ee+w]]]%12,fe=this.perm[ue+P+this.perm[ge+b+this.perm[Ee+M]]]%12,Ue=this.perm[ue+1+this.perm[ge+1+this.perm[Ee+1]]]%12,de=.6-y*y-_*_-v*v;de<0?s=0:(de*=de,s=de*de*this.dot3(this.grad3[ct],y,_,v));let We=.6-I*I-U*U-N*N;We<0?r=0:(We*=We,r=We*We*this.dot3(this.grad3[$],I,U,N));let Me=.6-z*z-G*G-B*B;Me<0?o=0:(Me*=Me,o=Me*Me*this.dot3(this.grad3[fe],z,G,B));let ve=.6-j*j-X*X-se*se;return ve<0?a=0:(ve*=ve,a=ve*ve*this.dot3(this.grad3[Ue],j,X,se)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,x=(e+t+n+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),y=Math.floor(n+x),_=Math.floor(s+x),v=(m+p+y+_)*c,L=m-v,E=p-v,w=y-v,P=_-v,b=e-L,M=t-E,I=n-w,U=s-P,N=b>M?32:0,z=b>I?16:0,G=M>I?8:0,B=b>U?4:0,j=M>U?2:0,X=I>U?1:0,se=N+z+G+B+j+X,ue=o[se][0]>=3?1:0,ge=o[se][1]>=3?1:0,Ee=o[se][2]>=3?1:0,ct=o[se][3]>=3?1:0,$=o[se][0]>=2?1:0,fe=o[se][1]>=2?1:0,Ue=o[se][2]>=2?1:0,de=o[se][3]>=2?1:0,We=o[se][0]>=1?1:0,Me=o[se][1]>=1?1:0,ve=o[se][2]>=1?1:0,nt=o[se][3]>=1?1:0,ee=b-ue+c,pe=M-ge+c,D=I-Ee+c,He=U-ct+c,ce=b-$+2*c,Le=M-fe+2*c,ye=I-Ue+2*c,Qe=U-de+2*c,Ce=b-We+3*c,C=M-Me+3*c,S=I-ve+3*c,W=U-nt+3*c,te=b-1+4*c,ae=M-1+4*c,ne=I-1+4*c,Ge=U-1+4*c,be=m&255,we=p&255,pt=y&255,he=_&255,Be=a[be+a[we+a[pt+a[he]]]]%32,it=a[be+ue+a[we+ge+a[pt+Ee+a[he+ct]]]]%32,ot=a[be+$+a[we+fe+a[pt+Ue+a[he+de]]]]%32,ke=a[be+We+a[we+Me+a[pt+ve+a[he+nt]]]]%32,Pt=a[be+1+a[we+1+a[pt+1+a[he+1]]]]%32,lt=.6-b*b-M*M-I*I-U*U;lt<0?h=0:(lt*=lt,h=lt*lt*this.dot4(r[Be],b,M,I,U));let zt=.6-ee*ee-pe*pe-D*D-He*He;zt<0?u=0:(zt*=zt,u=zt*zt*this.dot4(r[it],ee,pe,D,He));let F=.6-ce*ce-Le*Le-ye*ye-Qe*Qe;F<0?f=0:(F*=F,f=F*F*this.dot4(r[ot],ce,Le,ye,Qe));let Se=.6-Ce*Ce-C*C-S*S-W*W;Se<0?d=0:(Se*=Se,d=Se*Se*this.dot4(r[ke],Ce,C,S,W));let K=.6-te*te-ae*ae-ne*ne-Ge*Ge;return K<0?g=0:(K*=K,g=K*K*this.dot4(r[Pt],te,ae,ne,Ge)),27*(h+u+f+d+g)}};var Il=class i extends yi{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=xy(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:ui}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},ch.defines),uniforms:Ai.clone(ch.uniforms),vertexShader:ch.vertexShader,fragmentShader:ch.fragmentShader,blending:Ln,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ju,this.normalMaterial.blending=Ln,this.pdMaterial=new Dt({defines:Object.assign({},uh.defines),uniforms:Ai.clone(uh.uniforms),vertexShader:uh.vertexShader,fragmentShader:uh.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},hh.defines),uniforms:Ai.clone(hh.uniforms),vertexShader:hh.vertexShader,fragmentShader:hh.fragmentShader,blending:Ln}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:Ai.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:of,blendDst:El,blendEquation:Ji,blendSrcAlpha:rf,blendDstAlpha:El,blendEquationAlpha:Ji}),this.blendMaterial=new Dt({uniforms:Ai.clone(If.uniforms),vertexShader:If.vertexShader,fragmentShader:If.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:I0,blendSrc:of,blendDst:El,blendEquation:Ji,blendSrcAlpha:rf,blendDstAlpha:El,blendEquationAlpha:Ji}),this.fsQuad=new Hs(null),this.originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new dl,this.depthTexture.format=Zr,this.depthTexture.type=Yr,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:Dn,magFilter:Dn,type:ui,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gm(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Lf,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Fs(s,e,e,Ei,ys);return r.wrapS=Qn,r.wrapT=Qn,r.needsUpdate=!0,r}};Il.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var vy={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ll=class i extends yi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new wn(r,o,{type:ui});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new wn(r,o,{type:ui});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=vy;this.highPassUniforms=Ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=po;this.copyUniforms=Ai.clone(h.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new Nt,this.fsQuad=new Hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ll.BlurDirectionX=new J(1,0);Ll.BlurDirectionY=new J(0,1);var yy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Df=class extends yi{constructor(){super();let e=yy;this.uniforms=Ai.clone(e.uniforms),this.material=new Ku({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===L0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===D0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===N0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===U0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===z0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var kn=null,Kn=null,_y=null,Ul=null,xo=null,_n=null,vo=null,pa=null,br=new J,Nl=new re,un=Math.random,Z=(i,e)=>i+un()*(e-i),b2={name:"ArdiaGradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new J(1280,720)},uVignette:{value:.24},uSaturation:{value:1.07},uContrast:{value:.075},uGrain:{value:.012}},vertexShader:`
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
    }`},S2=`
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
  }`,E2=`
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
  }`;function T2(){return ki(64,(i,e)=>{let t=e/2,n=i.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.85)"),n.addColorStop(.6,"rgba(255,255,255,0.28)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)})}function w2(){return ki(128,(i,e)=>{let t=Ri(3599),n=e/2;for(let r=0;r<9;r++){let o=t()*Math.PI*2,a=t()*e*.16,l=n+Math.cos(o)*a,c=n+Math.sin(o)*a,h=e*(.16+t()*.16),u=i.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.30)"),u.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=u,i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()}i.globalCompositeOperation="destination-in";let s=i.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.65,"rgba(255,255,255,0.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,e)})}function A2(){return ki(64,(i,e)=>{let t=e/2;i.translate(t,t);let n=i.createLinearGradient(0,-24,0,24);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(185,185,185,1)"),i.fillStyle=n,i.beginPath(),i.moveTo(0,-23),i.bezierCurveTo(11,-13,12,8,0,23),i.bezierCurveTo(-12,8,-11,-13,0,-23),i.closePath(),i.fill(),i.strokeStyle="rgba(130,130,130,0.55)",i.lineWidth=1.6,i.beginPath(),i.moveTo(0,-19),i.lineTo(0,19),i.stroke()})}var Dl=17,R={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:1,size:.1,r:1,g:1,b:1,alpha:1,grav:0,drag:0,flut:0,spin:0,swirl:0,grow:0,fadeIn:.02,fadeOut:-1,pulse:0,rot:0};function xn(i,e,t){R.x=i,R.y=e,R.z=t,R.vx=R.vy=R.vz=0,R.life=1,R.size=.1,R.r=R.g=R.b=1,R.alpha=1,R.grav=0,R.drag=0,R.flut=0,R.spin=0,R.swirl=0,R.grow=0,R.fadeIn=.02,R.fadeOut=-1,R.pulse=0,R.rot=0}var fh=class{constructor(e,t,n,s){this.cap=e,this.count=0,this._last=0,this.data=new Float32Array(e*Dl);let r=new Bt;this.aPos=new It(new Float32Array(e*3),3).setUsage(_s),this.aCol=new It(new Float32Array(e*3),3).setUsage(_s),this.aSiz=new It(new Float32Array(e),1).setUsage(_s),this.aAlp=new It(new Float32Array(e),1).setUsage(_s),this.aRot=new It(new Float32Array(e),1).setUsage(_s),r.setAttribute("position",this.aPos),r.setAttribute("aColor",this.aCol),r.setAttribute("aSize",this.aSiz),r.setAttribute("aAlpha",this.aAlp),r.setAttribute("aRot",this.aRot),r.setDrawRange(0,0),this.geo=r,this.mat=new Dt({uniforms:{uMap:{value:t},uScale:{value:600}},vertexShader:S2,fragmentShader:E2,blending:n,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1}),this.points=new jr(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,this.points.matrixAutoUpdate=!1}spawn(){if(this.count>=this.cap)return;let e=this.count++,t=e*3,n=this.aPos.array,s=this.aCol.array;n[t]=R.x,n[t+1]=R.y,n[t+2]=R.z,s[t]=R.r,s[t+1]=R.g,s[t+2]=R.b,this.aSiz.array[e]=R.size,this.aAlp.array[e]=R.fadeIn>0?0:R.alpha,this.aRot.array[e]=R.rot;let r=e*Dl,o=this.data;o[r]=R.vx,o[r+1]=R.vy,o[r+2]=R.vz,o[r+3]=0,o[r+4]=Math.max(.05,R.life),o[r+5]=R.size,o[r+6]=R.alpha,o[r+7]=R.grav,o[r+8]=R.drag,o[r+9]=R.flut,o[r+10]=R.spin,o[r+11]=R.swirl,o[r+12]=R.grow,o[r+13]=R.fadeIn,o[r+14]=R.fadeOut>=0?R.fadeOut:R.life*.35,o[r+15]=R.pulse,o[r+16]=un()*6.2831}_copy(e,t){let n=e*3,s=t*3,r=this.aPos.array,o=this.aCol.array;r[s]=r[n],r[s+1]=r[n+1],r[s+2]=r[n+2],o[s]=o[n],o[s+1]=o[n+1],o[s+2]=o[n+2],this.aSiz.array[t]=this.aSiz.array[e],this.aAlp.array[t]=this.aAlp.array[e],this.aRot.array[t]=this.aRot.array[e];let a=e*Dl,l=t*Dl,c=this.data;for(let h=0;h<Dl;h++)c[l+h]=c[a+h]}update(e,t){let n=this.aPos.array,s=this.aSiz.array,r=this.aAlp.array,o=this.aRot.array,a=this.data,l=0;for(;l<this.count;){let c=l*Dl,h=a[c+4],u=a[c+3]+e;if(u>=h){this.count--,l!==this.count&&this._copy(this.count,l);continue}a[c+3]=u;let f=a[c],d=a[c+1],g=a[c+2];d-=a[c+7]*e;let x=a[c+8];if(x>0){let U=Math.max(0,1-x*e);f*=U,d*=U,g*=U}let m=a[c+11];if(m!==0){let U=m*e,N=Math.cos(U),z=Math.sin(U),G=f*N-g*z;g=f*z+g*N,f=G}a[c]=f,a[c+1]=d,a[c+2]=g;let p=l*3,y=n[p]+f*e,_=n[p+1]+d*e,v=n[p+2]+g*e,L=a[c+9];if(L>0){let U=a[c+16];y+=Math.cos(t*1.7+U)*L*e,v+=Math.sin(t*1.3+U*1.71)*L*e,_+=Math.sin(t*2.1+U*2.3)*L*.4*e}n[p]=y,n[p+1]=_,n[p+2]=v,o[l]+=a[c+10]*e;let E=u/h;s[l]=a[c+5]*(1+a[c+12]*E);let w=a[c+6],P=a[c+13];P>0&&u<P&&(w*=u/P);let b=h-u,M=a[c+14];b<M&&M>0&&(w*=b/M);let I=a[c+15];I>0&&(w*=.55+.45*Math.sin(t*I+a[c+16]*3)),r[l]=w,l++}this.geo.setDrawRange(0,this.count),(this.count>0||this._last>0)&&(this._flag(this.aPos,3),this._flag(this.aCol,3),this._flag(this.aSiz,1),this._flag(this.aAlp,1),this._flag(this.aRot,1)),this._last=this.count}_flag(e,t){e.needsUpdate=!0,e.clearUpdateRanges&&(e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(this.count,1)*t))}};function ls(i,e){let t=kn&&kn.quality.particleMul||1;return Math.max(1,Math.round((i.count!=null?i.count:e)*t))}function Pi(i,e,t,n){return i&&i.color!=null?Nl.set(i.color):Nl.setRGB(e,t,n),Nl}function Ii(i,e){let t=Z(i,e);R.r=Nl.r*t,R.g=Nl.g*t,R.b=Nl.b*t}var My={hit(i,e,t,n,s){xn(i,e,t),Pi(n,1.15,1.1,.92),Ii(.95,1),R.size=1*s,R.life=.15,R.alpha=.65,R.grow=1.6,R.fadeIn=0,R.fadeOut=.12,_n.spawn();let r=ls(n,20);for(let o=0;o<r;o++){xn(i,e,t);let a=un()*Math.PI*2,l=(un()-.35)*1.5,c=Z(3.2,8)*s;if(R.vx=Math.cos(a)*Math.cos(l)*c,R.vy=Math.sin(l)*c*.8+1.2,R.vz=Math.sin(a)*Math.cos(l)*c,R.grav=16,R.drag=1.2,R.life=Z(.22,.5),R.size=Z(.05,.11)*s,n&&n.color!=null)Pi(n,1,1,1),Ii(.85,1.1);else{let h=un();R.r=1.1,R.g=1.05-.28*h,R.b=.92-.55*h}R.fadeIn=0,R.fadeOut=.12,_n.spawn()}},spark(i,e,t,n,s){let r=ls(n,12);Pi(n,1.05,.8,.38);for(let o=0;o<r;o++){xn(i,e,t),Ii(.8,1.1);let a=un()*Math.PI*2,l=Z(1.6,4.4)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(.8,3)*s,R.grav=10,R.drag=1,R.life=Z(.3,.65),R.size=Z(.04,.09)*s,R.fadeIn=0,R.fadeOut=.15,_n.spawn()}},death(i,e,t,n,s){let r=ls(n,12);for(let a=0;a<r;a++){xn(i+Z(-.4,.4)*s,e+Z(0,.7)*s,t+Z(-.4,.4)*s);let l=Z(.75,1.25);R.r=.13*l,R.g=.08*l,R.b=.2*l;let c=un()*Math.PI*2,h=Z(.1,.7);R.vx=Math.cos(c)*h,R.vz=Math.sin(c)*h,R.vy=Z(.4,1.1),R.drag=1.8,R.spin=Z(-1.2,1.2),R.life=Z(1,1.9),R.size=Z(.5,.9)*s,R.alpha=Z(.4,.58),R.grow=1.6,R.fadeIn=.06,vo.spawn()}let o=ls(n,14);Pi(n,.5,.2,1);for(let a=0;a<o;a++){xn(i+Z(-.5,.5)*s,e+Z(.1,.9)*s,t+Z(-.5,.5)*s),Ii(.75,1.1);let l=un()*Math.PI*2,c=Z(.2,.8);R.vx=Math.cos(l)*c,R.vz=Math.sin(l)*c,R.vy=Z(.7,1.9),R.swirl=Z(1.5,3.5)*(un()<.5?-1:1),R.flut=.5,R.drag=.3,R.life=Z(.9,1.8),R.size=Z(.05,.11)*s,R.fadeIn=.1,_n.spawn()}},grass(i,e,t,n,s){let r=ls(n,10);for(let o=0;o<r;o++){xn(i+Z(-.3,.3),e+Z(0,.3),t+Z(-.3,.3)),n&&n.color!=null?(Pi(n,1,1,1),Ii(.8,1.1)):(R.r=Z(.12,.24),R.g=Z(.3,.48),R.b=Z(.06,.14));let a=un()*Math.PI*2,l=Z(.8,2.6)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(1.2,3.2)*s,R.grav=7,R.drag=.8,R.flut=1.2,R.rot=un()*6.28,R.spin=Z(-8,8),R.life=Z(.7,1.4),R.size=Z(.11,.19)*s,R.fadeIn=0,R.fadeOut=.2,pa.spawn()}},dust(i,e,t,n,s){let r=ls(n,9);Pi(n,.58,.52,.42);for(let o=0;o<r;o++){xn(i+Z(-.3,.3)*s,e+Z(0,.25),t+Z(-.3,.3)*s),Ii(.85,1.15);let a=un()*Math.PI*2,l=Z(.4,1.4)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(.2,.7),R.drag=2.2,R.spin=Z(-.8,.8),R.life=Z(.6,1.2),R.size=Z(.3,.6)*s,R.alpha=Z(.2,.33),R.grow=1.8,R.fadeIn=.05,vo.spawn()}},heal(i,e,t,n,s){let r=ls(n,14);Pi(n,1,.4,.58);for(let o=0;o<r;o++){let a=un()*Math.PI*2,l=Z(.15,.85)*s;xn(i+Math.cos(a)*l,e+Z(0,.6),t+Math.sin(a)*l),Ii(.85,1.05),R.vy=Z(.5,1.2),R.flut=.4,R.pulse=Z(2,4),R.life=Z(1.3,2.2),R.size=Z(.06,.12)*s,R.alpha=.85,R.fadeIn=.25,_n.spawn()}},orb(i,e,t,n,s){let r=ls(n,18);Pi(n,.1,.85,.8);for(let o=0;o<r;o++){let a=un()*Math.PI*2,l=Z(.25,.8)*s;xn(i+Math.cos(a)*l,e+Z(0,.5),t+Math.sin(a)*l),Ii(.8,1.05);let c=Z(1.2,2.2)*s;R.vx=-Math.sin(a)*c,R.vz=Math.cos(a)*c,R.vy=Z(1,2.2),R.swirl=3,R.drag=.3,R.life=Z(1.1,1.9),R.size=Z(.06,.12)*s,R.fadeIn=.12,_n.spawn()}},fire(i,e,t,n,s){for(let o=0;o<2;o++)xn(i+Z(-.2,.2),e+Z(0,.3),t+Z(-.2,.2)),Pi(n,1,.42,.14),Ii(.85,1),R.size=Z(.4,.6)*s,R.life=Z(.2,.35),R.alpha=.35,R.grow=1.4,R.fadeIn=0,_n.spawn();let r=ls(n,15);for(let o=0;o<r;o++){if(xn(i+Z(-.25,.25)*s,e+Z(0,.3),t+Z(-.25,.25)*s),n&&n.color!=null)Pi(n,1,1,1),Ii(.85,1.1);else{let c=un();R.r=1.15,R.g=.32+.28*c,R.b=.06+.1*c}let a=un()*Math.PI*2,l=Z(.6,2.4)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(1.8,4.5)*s,R.grav=3.5,R.drag=.7,R.flut=.8,R.life=Z(.5,1.1),R.size=Z(.045,.1)*s,R.fadeIn=0,R.fadeOut=.18,_n.spawn()}},magic(i,e,t,n,s){xn(i,e,t),Pi(n,.55,.26,1.1),Ii(.9,1),R.size=.85*s,R.life=.16,R.alpha=.5,R.grow=1.5,R.fadeIn=0,R.fadeOut=.13,_n.spawn();let r=ls(n,16);Pi(n,.46,.16,1.05);for(let o=0;o<r;o++){xn(i,e,t),Ii(.8,1.1);let a=un()*Math.PI*2,l=(un()-.5)*2.4,c=Z(1.8,4.5)*s;R.vx=Math.cos(a)*Math.cos(l)*c,R.vy=Math.sin(l)*c*.7+.8,R.vz=Math.sin(a)*Math.cos(l)*c,R.swirl=Z(-3,3),R.drag=2.4,R.life=Z(.5,1),R.size=Z(.05,.13)*s,R.fadeIn=0,R.fadeOut=.2,_n.spawn()}},leaf(i,e,t,n,s){let r=ls(n,7);for(let o=0;o<r;o++){if(xn(i+Z(-1.2,1.2)*s,e+Z(0,1.5)*s,t+Z(-1.2,1.2)*s),n&&n.color!=null)Pi(n,1,1,1),Ii(.8,1.1);else{let a=un();R.r=.14+.18*a,R.g=Z(.32,.5),R.b=.07+.09*a}R.vx=Z(-.3,.3),R.vz=Z(-.3,.3),R.vy=Z(-.5,-.2),R.grav=.9,R.drag=.6,R.flut=1.6,R.rot=un()*6.28,R.spin=Z(-4,4),R.life=Z(2.5,4.5),R.size=Z(.12,.2)*s,R.fadeIn=.2,R.fadeOut=.5,pa.spawn()}},firefly(i,e,t,n,s){let r=ls(n,5);Pi(n,.72,.95,.38);for(let o=0;o<r;o++)xn(i+Z(-1.5,1.5)*s,e+Z(.2,1.8)*s,t+Z(-1.5,1.5)*s),Ii(.75,1),R.vx=Z(-.15,.15),R.vy=Z(-.05,.15),R.vz=Z(-.15,.15),R.flut=.7,R.life=Z(4,7),R.size=Z(.05,.08)*s,R.alpha=.9,R.pulse=Z(1.5,3),R.fadeIn=.8,R.fadeOut=1.2,_n.spawn()}},mo="plains",Vm=0,Wm={firefly:0,leaf:0,ember:0,heat:0,glint:0,fluff:0,rune:0,mote:0},ti=0,ni=0;function yo(i,e,t){let n=un()*Math.PI*2,s=Z(e,t);ti=i.x+Math.cos(n)*s,ni=i.z+Math.sin(n)*s}function R2(i,e){yo(e,1,7);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(.2,1.8),ni),R.r=.2,R.g=.82,R.b=.72,R.vy=Z(.25,.6),R.flut=.25,R.life=Z(2.5,4),R.size=Z(.04,.09),R.alpha=.85,R.pulse=2.5,R.fadeIn=.5,R.fadeOut=.8,_n.spawn()}function C2(i,e){yo(e,4,26);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(.4,2.2),ni);let n=Z(.7,1);R.r=.72*n,R.g=.95*n,R.b=.36*n,R.vx=Z(-.15,.15),R.vy=Z(-.05,.12),R.vz=Z(-.15,.15),R.flut=.7,R.life=Z(5,9),R.size=Z(.06,.1),R.alpha=1,R.pulse=Z(1.4,2.8),R.fadeIn=1,R.fadeOut=1.4,_n.spawn()}function P2(i,e){yo(e,3,24);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(3,8),ni);let n=un();R.r=.14+.18*n,R.g=Z(.3,.5),R.b=.07+.09*n,R.vx=Z(-.3,.3),R.vy=Z(-.55,-.25),R.vz=Z(-.3,.3),R.grav=.9,R.drag=.6,R.flut=1.6,R.rot=un()*6.28,R.spin=Z(-4,4),R.life=Z(4,7),R.size=Z(.11,.19),R.fadeIn=.4,R.fadeOut=.6,pa.spawn()}function I2(i,e){yo(e,3,26);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(0,1),ni);let n=un();R.r=1.15,R.g=.35+.3*n,R.b=.07+.1*n,R.vy=Z(.8,2.2),R.grav=-.4,R.flut=.6,R.life=Z(1.2,2.6),R.size=Z(.05,.1),R.fadeIn=.1,R.fadeOut=.4,_n.spawn()}function L2(i,e){yo(e,2,20);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(.2,1),ni);let n=Z(.8,1.1);R.r=.95*n,R.g=.6*n,R.b=.36*n,R.vy=Z(1,2),R.drag=.3,R.flut=.5,R.life=Z(1.2,2),R.size=Z(.8,1.4),R.alpha=.06,R.grow=1.2,R.fadeIn=.4,vo.spawn()}function D2(i,e){yo(e,2,28);let t=i.world;if(t.getHeight(ti,ni)>=t.waterLevel-.12)return;xn(ti,t.waterLevel+.04,ni);let n=Z(.7,1.1);R.r=.8*n,R.g=.98*n,R.b=1*n,R.life=Z(.5,1.1),R.size=Z(.04,.09),R.alpha=.9,R.pulse=8,R.fadeIn=.15,R.fadeOut=.3,_n.spawn()}function N2(i,e){yo(e,4,26);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(.5,2.5),ni);let n=Z(.85,1);R.r=.95*n,R.g=.95*n,R.b=.9*n,R.vx=Z(.25,.7),R.vy=Z(.08,.3),R.vz=Z(-.2,.2),R.flut=.9,R.life=Z(5,8),R.size=Z(.06,.1),R.alpha=.55,R.fadeIn=1,R.fadeOut=1.2,vo.spawn()}function U2(i,e){yo(e,3,22);let t=i.getGroundHeight(ti,ni);xn(ti,t+Z(.2,3),ni);let n=Z(.7,1);R.r=.48*n,R.g=.28*n,R.b=.72*n,R.vy=Z(.2,.5),R.flut=.4,R.life=Z(2,4),R.size=Z(.04,.08),R.alpha=.55,R.pulse=Z(1.5,3),R.fadeIn=.6,R.fadeOut=.8,_n.spawn()}function go(i,e,t,n,s,r){for(Wm[i]+=e*t;Wm[i]>=1;)Wm[i]-=1,n(s,r)}function z2(i,e){let t=i.player;if(!t||!i.world)return;let n=t.position,s=i.quality.particleMul||1;if(Vm-=e,Vm<=0&&(Vm=.5,mo=i.world.getBiome(n.x,n.z)||"plains"),i.state==="shrine"){go("rune",.9*s,e,R2,i,n);return}i.time.isNight&&mo!=="volcano"&&mo!=="castle"&&go("firefly",1.2*s,e,C2,i,n),mo==="forest"?go("leaf",1.4*s,e,P2,i,n):mo==="volcano"?(go("ember",4*s,e,I2,i,n),go("heat",.7*s,e,L2,i,n)):mo==="lake"?go("glint",6*s,e,D2,i,n):mo==="plains"?i.time.isNight||go("fluff",.3*s,e,N2,i,n):mo==="castle"&&go("mote",.5*s,e,U2,i,n)}function by(){if(Kn||!kn)return;let{renderer:i,scene:e,camera:t}=kn;i.getDrawingBufferSize(br);let n=new wn(Math.max(1,br.x),Math.max(1,br.y),{type:ui,samples:4});Kn=new Cf(i,n),Kn.addPass(new Pf(e,t)),xo=new Il(e,t,Math.max(1,br.x),Math.max(1,br.y)),xo.output=Il.OUTPUT.Default,xo.updateGtaoMaterial({radius:1.1,distanceExponent:1,thickness:1,scale:1,samples:16,screenSpaceRadius:!1}),Kn.addPass(xo),_y=new Ll(new J(innerWidth,innerHeight),.33,.58,.82),Kn.addPass(_y),Kn.addPass(new Df),Ul=new Pl(b2),Kn.addPass(Ul),Nf()}function Nf(){if(!kn)return;if(Kn){let e=kn.settings.quality==="high"?4:2;Kn.renderTarget1.samples!==e&&(Kn.renderTarget1.samples=e,Kn.renderTarget2.samples=e,Kn.renderTarget1.dispose(),Kn.renderTarget2.dispose()),Kn.setPixelRatio(kn.quality.pixelRatio||1),Kn.setSize(innerWidth,innerHeight)}if(xo&&kn){let e=kn.settings.quality;xo.enabled=!!kn.quality.postFX&&e!=="low",xo.blendIntensity=e==="high"?.55:.42,xo.updateGtaoMaterial({samples:e==="high"?16:8})}kn.renderer.getDrawingBufferSize(br);let i=br.y/(2*Math.tan(uf.degToRad(kn.camera.fov)*.5));_n&&(_n.mat.uniforms.uScale.value=i,vo.mat.uniforms.uScale.value=i,pa.mat.uniforms.uScale.value=i),Ul&&Ul.uniforms.uRes.value.set(br.x,br.y)}function O2(){kn&&(Kn&&kn.quality.postFX?(Ul&&(Ul.uniforms.uTime.value=kn.time.elapsed%1e3),Kn.render()):kn.renderer.render(kn.scene,kn.camera))}function F2(i,e,t){if(!i||!My[e])return;let n=t||{},s=n.scale||1;My[e](i.x,i.y,i.z,n,s)}function B2(){Nf()}async function k2(i){kn=i;let e=T2(),t=w2(),n=A2();_n=new fh(2e3,e,ln,950),vo=new fh(2e3,t,hr,940),pa=new fh(1200,n,hr,945),i.scene.add(vo.points,pa.points,_n.points),i.quality.postFX&&by(),Nf(),i.on("quality-changed",s=>{s&&s.postFX&&!Kn&&by(),Nf()}),i.effects={render:O2,burst:F2,onResize:B2}}function H2(i,e){let t=i.time.elapsed;_n.update(e,t),vo.update(e,t),pa.update(e,t),z2(i,e)}var qf={};Ns(qf,{init:()=>$2,update:()=>eA});var G2=-30,Ry=11,Sy=6.2,V2=1.65,Cy=.45,W2=9.2,Py=25,X2=20,q2=25,Iy=1,Ly=3,Y2=.42,Hf=4,Dy=.38,Z2=1,Gf=[{dur:.42,a0:.34,a1:.62,dmg:1,lunge:3.8,sfx:"sword1"},{dur:.46,a0:.36,a1:.66,dmg:1,lunge:4,sfx:"sword2"},{dur:.74,a0:.34,a1:.78,dmg:1.5,lunge:2.6,sfx:"sword3"}],kt,cs,bo,Mo,Mn,fn,Gs,ga,Vf,jm,Wf,Jm,$m,Qm,eg,tg,zl,So,Er,Ol,Ny,Uy,Ff,zy,jn,Jn,Lt=null,Mt=null,Ht=Math.PI,Hn=!0,ng=!1,Tr=!1,ig=!1,wo=!1,_i=!1,qe=null,Eo=0,xa=0,Bl=0,Bf=0,ma=0,kl=0,Fl=0,_o=0;var va=0,Xf=!1,gh=0,Ey=3.5,mh=0,Xm=0,qm=2.5,Uf=0,Ty=0,Vs=0,ph=0,Oy=new A,Ym={pos:Oy,radius:1.5,damage:1,swingId:0},To=new A,Sr=new A,Zm=new A,di=new A,Km=new mn,zf=new mn,wy=new wi,O={hipsY:0,hipsRY:0,torsoRX:0,torsoRY:0,torsoRZ:0,headRX:0,headRY:0,headRZ:0,shRX_R:.1,shRZ_R:-.1,elbR_:.25,shRX_L:.1,shRZ_L:.1,elbL_:.25,legR_:0,kneeR_:.06,legL_:0,kneeL_:.06};function Fy(){O.hipsY=0,O.hipsRY=0,O.torsoRX=.02,O.torsoRY=0,O.torsoRZ=0,O.headRX=0,O.headRY=0,O.headRZ=0,O.shRX_R=.1,O.shRZ_R=-.12,O.elbR_=.25,O.shRX_L=.1,O.shRZ_L=.12,O.elbL_=.25,O.legR_=0,O.kneeR_=.06,O.legL_=0,O.kneeL_=.06,wo&&(O.shRX_R=.16,O.elbR_=.45,O.elbL_=.4)}function K2(){let i=Me=>new re(Me),e={tunic:zn(4166223,{rimColor:12447951,rimStrength:.3,rimPower:3}),tunicDk:zn(2911034,{rimColor:10476724,rimStrength:.26,rimPower:3.2}),tunicLt:zn(4892766,{rimColor:14088159,rimStrength:.3,rimPower:3}),skin:zn(16042139,{rimColor:16773602,rimStrength:.26,rimPower:3.3}),skinDk:zn(14724225,{rimColor:16770767,rimStrength:.22,rimPower:3.4}),hair:zn(15251535,{rimColor:16774084,rimStrength:.36,rimPower:2.7}),hairDk:zn(13605945,{rimColor:16771496,rimStrength:.3,rimPower:3}),cream:zn(15524553,{rimColor:16777215,rimStrength:.24,rimPower:3.2}),boots:zn(7161894,{rimColor:14202250,rimStrength:.24,rimPower:3.2}),leather:zn(9068848,{rimColor:14728581,rimStrength:.26,rimPower:3}),dark:zn(3877915,{rimColor:9402965,rimStrength:.22,rimPower:3.2}),gold:zn(13280298,{rimColor:16773808,rimStrength:.52,rimPower:2.2,emissive:i(6244878),emissiveIntensity:.28}),steel:zn(11583693,{rimColor:16777215,rimStrength:.58,rimPower:2,emissive:i(1713972),emissiveIntensity:.14}),shieldF:zn(4152432,{rimColor:12576511,rimStrength:.42,rimPower:2.4,emissive:i(1187884),emissiveIntensity:.12}),navy:zn(2568523,{rimColor:8361416,rimStrength:.32,rimPower:3}),eyeW:At(16249834),iris:zn(3114676,{rimColor:12447743,rimStrength:.4,rimPower:2.6}),pupil:At(1380621),brow:At(12159535),mouth:At(10705736),blade:zn(14675698,{rimColor:11465958,rimStrength:.46,rimPower:2.1,emissive:i(2806461),emissiveIntensity:.34}),bladeHi:zn(16055295,{rimColor:16777215,rimStrength:.55,rimPower:1.9,emissive:i(4647122),emissiveIntensity:.55}),emblem:Ut(3399880,1.4),orb:Ut(4058322,1.7)},t=658707,n=(Me,ve)=>(Kv(Me,{color:t,thickness:ve}),Me);kt=new ze,cs=new ze,cs.position.y=.55,kt.add(cs),bo=new ze,bo.position.y=-.55,cs.add(bo),Mo=new ze,Mo.position.y=.92,bo.add(Mo);let s=new Oc(.088,.22,3,10),r=new Et(.083,10,7),o=new $t(.076,.1,.3,10),a=new $t(.1,.088,.075,10),l=new st(.115,.095,.2),c=new Et(.066,9,6),h=new st(.125,.035,.235),u=new st(.05,.036,.024),f=Me=>{let ve=new ze;ve.position.set(Me*.105,-.03,0),Mo.add(ve),n(Q(s,e.cream,0,-.18,0,ve),.012);let nt=new ze;nt.position.set(0,-.4,0),ve.add(nt),Q(r,e.cream,0,0,0,nt),n(Q(o,e.boots,0,-.2,0,nt),.014),n(Q(a,e.leather,0,-.065,0,nt),.012),Q(u,e.gold,0,-.065,.1,nt);let ee=n(Q(l,e.boots,0,-.415,.05,nt),.012);return Q(c,e.boots,0,-.425,.155,nt).scale.set(.92,.8,1.15),Q(h,e.dark,0,-.452,.055,nt),{hip:ve,knee:nt,foot:ee}},d=f(-1),g=f(1);$m=d.hip,Qm=d.knee,Ny=d.foot,eg=g.hip,tg=g.knee,Uy=g.foot,Mn=new ze,Mn.position.y=.04,Mo.add(Mn);let x=(Me,ve)=>new J(Me,ve),m=[x(.001,-.055),x(.175,-.045),x(.202,.02),x(.176,.115),x(.205,.255),x(.228,.365),x(.208,.45),x(.152,.505),x(.1,.55),x(.001,.56)];n(Q(new Jr(m,16),e.tunic,0,0,0,Mn),.016);let p=[x(.338,-.265),x(.3,-.17),x(.235,-.05),x(.192,.055)],y=n(Q(new Jr(p,16),e.tunic,0,0,0,Mn),.016);Q(new $t(.342,.352,.05,16,1,!0),e.tunicDk,0,-.262,0,Mn),Q(new $t(.214,.224,.078,14),e.dark,0,.02,0,Mn),n(Q(new st(.092,.078,.042),e.gold,0,.02,.206,Mn),.01),Q(new $t(.026,.026,.02,8),e.emblem,0,.02,.23,Mn).rotation.x=Math.PI/2,Q(new $t(.062,.08,.1,10),e.skin,0,.55,0,Mn),n(Q(new $t(.112,.16,.085,12),e.tunicDk,0,.505,0,Mn),.012),Q(new st(.014,.1,.016),e.tunicDk,-.028,.452,.188,Mn).rotation.z=.44,Q(new st(.014,.1,.016),e.tunicDk,.028,.452,.188,Mn).rotation.z=-.44,Er=new ze,Er.position.set(-.15,.5,-.185),Er.rotation.set(.1,0,-2.6),Mn.add(Er),n(Q(new st(.095,.74,.055),e.leather,0,.44,0,Er),.01),Q(new st(.115,.062,.068),e.gold,0,.62,0,Er),Q(new st(.1,.05,.062),e.gold,0,.1,0,Er),Ol=new ze,Ol.position.set(.02,.3,-.27),Ol.rotation.set(0,Math.PI,.08),Mn.add(Ol);let _=new Et(.095,12,9),v=new Oc(.052,.17,3,10),L=new Et(.056,8,6),E=new $t(.05,.072,.235,10),w=new $t(.074,.074,.03,10),P=new Et(.062,10,8),b=Me=>{let ve=new ze;ve.position.set(Me*.265,.5,0),Mn.add(ve),n(Q(_,e.tunic,Me*.006,.005,0,ve),.012).scale.set(1.18,.66,1),n(Q(v,e.cream,0,-.15,0,ve),.011);let ee=new ze;return ee.position.set(0,-.28,0),ve.add(ee),Q(L,e.cream,0,0,0,ee),n(Q(E,e.leather,0,-.12,0,ee),.012),Q(w,e.gold,0,-.235,0,ee),n(Q(P,e.skin,0,-.29,.006,ee),.011).scale.set(1,.94,1.06),{sh:ve,elb:ee}},M=b(-1),I=b(1);Vf=M.sh,jm=M.elb,Wf=I.sh,Jm=I.elb,zl=new ze,zl.position.set(0,-.28,.01),zl.rotation.x=2.35,jm.add(zl),So=new ze,So.position.set(.09,-.15,0),So.rotation.set(0,Math.PI/2,Math.PI/2),Jm.add(So),fn=new ze,fn.position.y=.585,Mn.add(fn),n(Q(new Et(.16,14,11),e.skin,0,.1,0,fn),.016).scale.set(.98,1.03,.97),Q(new Et(.055,10,7),e.skin,0,.02,.055,fn).scale.set(1.35,.7,1),Q(new Et(.022,8,6),e.skin,0,.078,.16,fn).scale.set(1,.85,1.25);let N=new rn(.04,.135,5),z=Q(N,e.skin,-.158,.095,-.008,fn);z.rotation.set(0,0,Math.PI/2+.3),z.scale.set(1,1,.68);let G=Q(N,e.skin,.158,.095,-.008,fn);G.rotation.set(0,0,-Math.PI/2-.3),G.scale.set(1,1,.68),Q(new Et(.016,6,5),e.skinDk,-.152,.088,0,fn),Q(new Et(.016,6,5),e.skinDk,.152,.088,0,fn);let B=new Et(.05,10,8),j=new Et(.03,8,6),X=new Et(.016,6,5),se=Me=>{let ve=Q(B,e.eyeW,Me*.064,.108,.126,fn);return ve.scale.set(.82,1.12,.62),Q(j,e.iris,Me*.006,-.008,.052,ve).scale.set(1,.9,.7),Q(X,e.pupil,Me*.006,-.01,.075,ve).scale.set(1,1,.6),Q(new Et(.009,6,5),e.eyeW,Me*.02,.02,.09,ve),ve};Ff=se(-1),zy=se(1);let ue=new st(.062,.017,.02);Q(ue,e.brow,-.063,.153,.15,fn).rotation.z=-.12,Q(ue,e.brow,.063,.153,.15,fn).rotation.z=.12,Q(new st(.052,.013,.016),e.mouth,0,.028,.153,fn),Q(new st(.02,.012,.016),e.mouth,-.03,.035,.15,fn).rotation.z=.55,Q(new st(.02,.012,.016),e.mouth,.03,.035,.15,fn).rotation.z=-.55;let ge=new rn(.052,.15,7),Ee=(Me,ve,nt,ee,pe,D,He)=>{let ce=Q(ge,He||e.hair,Me,ve,nt,fn);return ce.rotation.set(ee,0,pe),ce.scale.set(D,D*1.15,D*.62),ce};Ee(0,.225,.115,2.55,0,1.05),Ee(-.088,.212,.098,2.55,.22,.98),Ee(.088,.212,.098,2.55,-.22,.98),Ee(-.15,.188,.052,2.62,.52,.86),Ee(.15,.188,.052,2.62,-.52,.86),Ee(-.158,.075,.012,3.02,.18,.8,e.hairDk),Ee(.158,.075,.012,3.02,-.18,.8,e.hairDk),Ee(-.072,.045,-.135,3.42,.12,1.02,e.hairDk),Ee(.072,.045,-.135,3.42,-.12,1.02,e.hairDk),Ee(0,.03,-.15,3.5,0,1.12,e.hairDk),n(Q(new $t(.176,.188,.078,14),e.tunicDk,0,.235,-.008,fn),.012);let ct=n(Q(new rn(.186,.3,14),e.tunic,0,.335,-.028,fn),.014);ct.rotation.x=-.2,Gs=new ze,Gs.position.set(0,.385,-.09),fn.add(Gs),n(Q(new rn(.1,.28,12),e.tunic,0,.11,0,Gs),.012),ga=new ze,ga.position.set(0,.225,0),Gs.add(ga),n(Q(new rn(.05,.24,10),e.tunic,0,.1,0,ga),.01),Q(new Et(.033,8,6),e.tunicDk,0,.215,0,ga),jn=new ze,n(Q(new st(.062,.6,.024),e.blade,0,.42,0,jn),.006),Q(new st(.018,.55,.03),e.bladeHi,0,.42,0,jn);let $=n(Q(new rn(.044,.13,4),e.blade,0,.775,0,jn),.006);$.rotation.y=Math.PI/4,$.scale.set(1,1,.38),n(Q(new st(.205,.046,.062),e.gold,0,.1,0,jn),.008),Q(new Et(.032,8,6),e.gold,-.102,.1,0,jn),Q(new Et(.032,8,6),e.gold,.102,.1,0,jn),Q(new $t(.023,.023,.15,10),e.navy,0,.015,0,jn);for(let Me=0;Me<3;Me++)Q(new es(.024,.006,5,10),e.dark,0,-.02+Me*.045,0,jn).rotation.x=Math.PI/2;Q(new Et(.036,10,8),e.gold,0,-.05,0,jn),Q(new Et(.024,10,8),e.orb,0,-.082,0,jn),Jn=new ze;let fe=n(Q(new $t(.255,.235,.05,20),e.shieldF,0,0,0,Jn),.012);fe.rotation.x=Math.PI/2;let Ue=Q(new Et(.242,20,9,0,Math.PI*2,0,Math.PI*.5),e.shieldF,0,0,.004,Jn);Ue.rotation.x=Math.PI/2,Ue.scale.set(1,1,.26),n(Q(new es(.248,.028,8,22),e.gold,0,0,.012,Jn),.008);for(let Me=0;Me<8;Me++){let ve=Me/8*Math.PI*2;Q(new Et(.017,6,4),e.gold,Math.cos(ve)*.206,Math.sin(ve)*.206,.03,Jn)}let de=Q(new Et(.062,12,7,0,Math.PI*2,0,Math.PI*.5),e.gold,0,0,.052,Jn);return de.rotation.x=Math.PI/2,Q(new $t(.088,.088,.02,3),e.emblem,0,.004,.05,Jn).rotation.set(Math.PI/2,0,Math.PI),Q(new Et(.03,12,10),e.orb,0,.004,.075,Jn),kt.userData.rig={hips:Mo,torso:Mn,headG:fn,shR:Vf,shL:Wf,legR:$m,legL:eg,kneeR:Qm,kneeL:tg,capMid:Gs,inner:bo,sword:jn,shield:Jn,backSheath:Er,backShieldG:Ol,shieldGrip:So,gripR:zl},xh(!1,!0),kt}function xh(i,e){wo===i&&!e||(wo=i,i?(zl.add(jn),jn.position.set(0,.04,0),jn.rotation.set(0,0,0),So.add(Jn),Jn.position.set(0,0,.02),Jn.rotation.set(0,0,0)):(Er.add(jn),jn.position.set(0,.06,0),jn.rotation.set(0,0,0),Ol.add(Jn),Jn.position.set(0,0,0),Jn.rotation.set(0,0,0)))}var By=null;function j2(){Tr||(Tr=!0,_i=!1,Vs=0,qe={type:"dead",t:0,dur:999},ig||(ig=!0,By.emit("player-died")))}function J2(){Tr=!1,ig=!1,qe=null,cs.rotation.set(0,0,0),Vs=0,xa=1.2,va=0,bo.visible=!0}async function $2(i){By=i,K2(),Mt=new A,i.world&&i.world.startPos?kt.position.copy(i.world.startPos):kt.position.set(0,0,250),kt.position.y=i.getGroundHeight(kt.position.x,kt.position.z),kt.rotation.y=Ht,i.scene.add(kt),Fy(),ky(1,500),Lt={obj:kt,position:kt.position,heading:Ht,velocity:Mt,hp:3,maxHp:3,stamina:100,maxStamina:100,spiritOrbs:0,gems:0,onGround:!0,isRolling:!1,isBlocking:!1,damage(e,t){if(Tr||xa>0||qe&&qe.type==="roll")return;Bl=Hf,xh(!0);let n=!1;if(_i&&t){let o=Math.atan2(t.x-kt.position.x,t.z-kt.position.z);Math.abs(ca(Ht,o))<=70*Math.PI/180&&(n=!0)}let s=-Math.sin(Ht),r=-Math.cos(Ht);if(t){let o=kt.position.x-t.x,a=kt.position.z-t.z,l=Math.hypot(o,a);l>1e-4&&(s=o/l,r=a/l)}n?(e*=.2,Mt.x+=s*2.5,Mt.z+=r*2.5,i.audio.play("block"),To.set(kt.position.x+Math.sin(Ht)*.55,kt.position.y+1.05,kt.position.z+Math.cos(Ht)*.55),i.effects.burst(To,"spark")):(Mt.x=s*6.5,Mt.z=r*6.5,Hn&&(Mt.y=2.5,Hn=!1),qe={type:"hurt",t:0,dur:Dy},Vs=0,i.ui.flash("#ff2222",.25),i.audio.play("damage"),To.set(kt.position.x,kt.position.y+1,kt.position.z),i.effects.burst(To,"hit")),xa=Z2,Lt.hp=Ae(Lt.hp-e,0,Lt.maxHp),i.emit("player-damaged",{hp:Lt.hp,amount:e}),Lt.hp<=0&&j2()},heal(e){Lt.hp=Ae(Lt.hp+e,0,Lt.maxHp),Tr&&Lt.hp>0&&J2()},addMaxHeart(){Lt.maxHp+=1,Lt.hp=Lt.maxHp},getAttackHit(){if(!qe||qe.type!=="atk")return null;let e=Gf[qe.idx],t=qe.t/e.dur;return t<e.a0||t>e.a1?null:(Oy.set(kt.position.x+Math.sin(Ht)*1.3,kt.position.y+1,kt.position.z+Math.cos(Ht)*1.3),Ym.damage=e.dmg,Ym.swingId=qe.swingId,Ym)},teleport(e,t=Math.PI){kt.position.copy(e),Ht=t,Lt.heading=t,kt.rotation.y=t,Mt.set(0,0,0),Tr||(qe=null,cs.rotation.set(0,0,0),Vs=0,bo.visible=!0),_i=!1,Lt.isBlocking=!1,Lt.isRolling=!1,Hn=!0,Lt.onGround=!0,kl=0,Fl=0,_o=0,va=0},setFrozen(e){ng=!!e,ng&&(_i=!1,Eo=0,qe&&qe.type!=="dead"&&(qe=null,cs.rotation.x=0,Vs=0),Mt.x=0,Mt.z=0)}},i.player=Lt}function Ay(i,e){xh(!0),Eo=0,Ty++,qe={type:"atk",idx:e,t:0,dur:Gf[e].dur,swingId:Ty,sfxDone:!1},Bl=Hf,_i=!1,Vs=0,!(i.camera3p&&i.camera3p.lockTarget)&&di.lengthSq()>.5&&(Ht=Math.atan2(di.x,di.z))}function Q2(i,e){Lt.stamina=Ae(Lt.stamina-Py,0,Lt.maxStamina),Bf=Iy,Lt.stamina<=0&&(ma=Ly);let t=e?Math.atan2(di.x,di.z):Ht;qe={type:"roll",t:0,dur:Cy,dx:Math.sin(t),dz:Math.cos(t)},Ht=t,Eo=0,_i=!1,i.audio.play("roll"),kf(i,0)}function kf(i,e){let t=e===1?Ny:e===2?Uy:null;t?t.getWorldPosition(To):(To.copy(kt.position),To.y+=.06),i.effects.burst(To,"dust")}function eA(i,e){if(!Lt)return;ph+=e;let t=kt.position,n=i.input,s=!ng&&!Tr;xa>0&&(xa-=e),Eo>0&&(Eo-=e),va>0&&(va-=e),ma>0&&(ma-=e),Bf>0?Bf-=e:Lt.stamina=Ae(Lt.stamina+q2*e,0,Lt.maxStamina);let r=0,o=0;s&&(r=(n.keys.has("KeyW")||n.keys.has("ArrowUp")?1:0)-(n.keys.has("KeyS")||n.keys.has("ArrowDown")?1:0),o=(n.keys.has("KeyD")||n.keys.has("ArrowRight")?1:0)-(n.keys.has("KeyA")||n.keys.has("ArrowLeft")?1:0)),i.camera.getWorldDirection(Sr),Sr.y=0,Sr.lengthSq()<1e-6&&Sr.set(0,0,-1),Sr.normalize(),Zm.set(-Sr.z,0,Sr.x),di.set(Sr.x*r+Zm.x*o,0,Sr.z*r+Zm.z*o);let a=di.lengthSq()>1e-6;a&&di.normalize();let l=i.camera3p?i.camera3p.lockTarget:null,c=!!(l&&l.alive!==!1&&l.pos),h=c?Math.atan2(l.pos.x-t.x,l.pos.z-t.z):0,u=s&&!qe&&Hn&&(n.mouse.right||n.keys.has("KeyK"));u&&!_i&&(xh(!0),Bl=Hf),_i=u,s&&(n.mouse.leftJust||n.justPressed("KeyJ"))&&(Eo=.3),s&&!qe&&Hn&&(Eo>0?Ay(i,0):n.justPressed("KeyC")&&ma<=0&&Lt.stamina>=Py?Q2(i,a):n.justPressed("Space")&&(Mt.y=Ry,Hn=!1,_i=!1,i.audio.play("jump"),kf(i,0)));let f=i.world&&i.world.waterLevel!==void 0?i.world.waterLevel:-1e9,d=t.y<f+.4,g=!1;if(qe){qe.t+=e;let E=qe.t/qe.dur;if(qe.type==="atk"){let w=Gf[qe.idx];!qe.sfxDone&&E>=w.a0-.1&&(qe.sfxDone=!0,i.audio.play(w.sfx));let P=je(w.a0-.1,w.a0+.1,E)*(1-je(w.a1,w.a1+.14,E));Mt.x=Ve(Mt.x,Math.sin(Ht)*w.lunge*P,18,e),Mt.z=Ve(Mt.z,Math.cos(Ht)*w.lunge*P,18,e),E<w.a0&&(c?Ht=ei(Ht,h,16,e):a&&(Ht=ei(Ht,Math.atan2(di.x,di.z),10,e))),E>=1&&(Eo>0&&qe.idx<2&&Hn&&s?Ay(i,qe.idx+1):(qe=null,Vs=0))}else if(qe.type==="roll"){let w=W2*(1-.55*je(.55,1,E))*(d?.5:1);Mt.x=qe.dx*w,Mt.z=qe.dz*w,E>=1&&(qe=null,cs.rotation.x=0)}else qe.type==="hurt"?(Mt.x=Ve(Mt.x,0,5,e),Mt.z=Ve(Mt.z,0,5,e),qe.t>=qe.dur&&(qe=null)):qe.type==="dead"&&(Mt.x=Ve(Mt.x,0,8,e),Mt.z=Ve(Mt.z,0,8,e))}else{let E=0;a?(E=Sy,s&&Hn&&!_i&&ma<=0&&Lt.stamina>0&&(n.keys.has("ShiftLeft")||n.keys.has("ShiftRight"))&&(g=!0,E*=V2,Lt.stamina=Ae(Lt.stamina-X2*e,0,Lt.maxStamina),Bf=Iy,Lt.stamina<=0&&(ma=Ly)),_i&&(E*=.5),d&&(E*=.5),c?Ht=ei(Ht,h,14,e):Ht=ei(Ht,Math.atan2(di.x,di.z),g?15:11,e)):c&&(Ht=ei(Ht,h,14,e));let w=Hn?12:3.5;Mt.x=Ve(Mt.x,di.x*E,w,e),Mt.z=Ve(Mt.z,di.z*E,w,e)}Hn||(Mt.y+=G2*e),t.x+=Mt.x*e,t.z+=Mt.z*e,t.y+=Mt.y*e;let x=i.colliders;for(let E=0;E<x.length;E++){let w=x[E],P=t.x-w.x,b=t.z-w.z,M=w.radius+Y2,I=P*P+b*b;if(I>=M*M||w.height!==void 0&&t.y>i.getGroundHeight(w.x,w.z)+w.height)continue;if(I<1e-8){t.x-=Math.sin(Ht)*M,t.z-=Math.cos(Ht)*M;continue}let U=Math.sqrt(I),N=(M-U)/U;t.x+=P*N,t.z+=b*N}let m=i.playerBounds;m&&(t.x=Ae(t.x,m.minX,m.maxX),t.z=Ae(t.z,m.minZ,m.maxZ));let p=i.getGroundHeight(t.x,t.z);t.y<=p?(Hn||(Xf=Mt.y<-14,va=Xf?.26:.15,i.audio.play("land"),kf(i,0)),t.y=p,Mt.y=0,Hn=!0):Hn&&(t.y-p<.4?t.y=p:Hn=!1),wo&&(_i||qe&&qe.type==="atk"?Bl=Hf:(Bl-=e,Bl<=0&&!qe&&xh(!1)));let y=Math.hypot(Mt.x,Mt.z),_=Ae(y/Sy,0,1.8);if(_o=Ve(_o,Hn&&y>.6?1:0,10,e),Hn&&!qe&&y>.4){kl+=e*(4.5+y*1.3);let E=Math.sin(kl);y>2.2&&Fl*E<=0&&Fl!==E&&(i.audio.play("step"),kf(i,Fl<0?1:2)),Fl=E}else Fl=0;Fy();let v=14;Tr&&qe?v=cA(qe.t):qe&&qe.type==="roll"?v=aA(Ae(qe.t/Cy,0,1)):qe&&qe.type==="atk"?v=oA(qe.idx,Ae(qe.t/Gf[qe.idx].dur,0,1)):qe&&qe.type==="hurt"?v=lA(qe.t/Dy):Hn?(_o>.06?nA(_,g,c):tA(ph,e),_i&&rA(),va>0&&sA()):v=iA(Mt.y),ma>0&&!qe&&Hn&&(O.torsoRX+=.12,O.headRX+=.16),ky(e,v),qe||(cs.rotation.x=Ve(cs.rotation.x,0,20,e)),kt.rotation.y=Ht+Vs,wo&&(_i?(So.getWorldQuaternion(Km),wy.set(-.18,Ht,0),zf.setFromEuler(wy),Km.invert().multiply(zf),Jn.quaternion.slerp(Km,1-Math.exp(-14*e))):Jn.parent===So&&(zf.set(0,0,0,1),Jn.quaternion.slerp(zf,1-Math.exp(-10*e))));let L=Math.sin(ph*2.2)*.06+Math.sin(kl*2)*.12*_o;Gs.rotation.x=Ve(Gs.rotation.x,-.8-_o*.35-Ae(Mt.y*.022,-.3,.3)+L,8,e),ga.rotation.x=Ve(ga.rotation.x,-.62-_o*.28+Math.sin(ph*2.2+.9)*.08+Math.sin(kl*2+1.2)*.15*_o,7,e),Gs.rotation.z=Ve(Gs.rotation.z,Math.sin(ph*1.7)*.05,6,e),qm-=e,qm<=0&&(qm=2+Math.random()*3.5,Uf=.13),Uf>0&&(Uf-=e),Ff.scale.y=Ve(Ff.scale.y,Uf>0?.12:1,30,e),zy.scale.y=Ff.scale.y,bo.visible=Tr||!(xa>0&&Math.floor(xa*14)%2===0),Lt.onGround=Hn,Lt.isRolling=!!(qe&&qe.type==="roll"),Lt.isBlocking=_i,Lt.heading=Ht}var Of=i=>(i=Ae(i,0,1),1-(1-i)*(1-i)*(1-i));function tA(i,e){let t=Math.sin(i*1.7);if(O.torsoRX=.035+t*.022,O.hipsY=-.012+t*.01,O.shRZ_R=-.14-t*.02,O.shRZ_L=.14+t*.02,O.elbR_=(wo?.52:.28)+t*.03,O.elbL_=(wo?.42:.28)+t*.03,O.legR_=-.045,O.legL_=.055,O.kneeR_=.09,O.kneeL_=.06,gh+=e,mh>0){mh-=e;let n=Math.sin(Ae(1-mh/1.5,0,1)*Math.PI);O.headRY=Xm*n,O.headRX=.05*n,O.torsoRY=Xm*n*.14}else gh>=Ey&&(gh=0,Ey=2.5+Math.random()*4,mh=1.5,Xm=(Math.random()<.5?-1:1)*(.5+Math.random()*.35))}function nA(i,e,t){gh=0,mh=0;let n=kl,s=Ae(i,0,1),r=.34+.44*s+(e?.13:0),o=.36+.48*s+(e?.17:0),a=Math.sin(n),l=-a,c=Math.cos(n);if(O.legR_=-a*r,O.legL_=-l*r,O.kneeR_=Math.max(0,c)*(.6+.7*s),O.kneeL_=Math.max(0,-c)*(.6+.7*s),O.shRX_R=a*o,O.shRX_L=l*o,O.elbR_=.4+Math.max(0,-a)*.65+(wo?.12:0),O.elbL_=.4+Math.max(0,-l)*.65,O.shRZ_R=-.12,O.shRZ_L=.12,O.torsoRX=.06+s*.12+(e?.22:0),O.torsoRY=a*.09,O.hipsY=(-.055+Math.abs(c)*.055)*s,O.headRX=-O.torsoRX*.55,t){let h=ca(Ht,Math.atan2(di.x,di.z));O.hipsRY=Ae(h*.45,-.85,.85),O.torsoRZ=-Math.sin(h)*.07}}function iA(i){let e=Ae(i/Ry,-1,1);return O.torsoRX=.13-e*.07,O.legR_=-.58+e*.1,O.kneeR_=1.05,O.legL_=.32,O.kneeL_=.5,O.shRX_R=-.5-e*.3,O.shRZ_R=-.6,O.shRX_L=-.5-e*.3,O.shRZ_L=.6,O.elbR_=.55,O.elbL_=.55,O.headRX=i<0?.12:-.08,10}function sA(){let i=Ae(va/(Xf?.26:.15),0,1)*(Xf?1:.5);O.hipsY-=.22*i,O.kneeR_+=.95*i,O.kneeL_+=.95*i,O.legR_-=.48*i,O.legL_-=.42*i,O.torsoRX+=.32*i,O.shRX_R-=.3*i,O.shRX_L-=.3*i}function rA(){O.shRX_L=-1.18,O.shRZ_L=-.55,O.elbL_=1.4,O.shRX_R=.35,O.shRZ_R=-.4,O.elbR_=.8,O.torsoRX+=.1,O.torsoRY=.18,O.hipsY-=.06,O.legR_-=.16,O.legL_+=.13,O.kneeR_+=.28,O.kneeL_+=.16,O.headRX=-.04}function oA(i,e){if(gh=0,i===0){let s=je(0,.2,e),r=Of((e-.24)/.3),o=je(.8,1,e);return O.torsoRY=_e(-.85*s,.95,r)*(1-o*.45),O.torsoRX=.1+r*.16,O.shRX_R=_e(_e(.15,-.4,s),-1.35,r),O.shRZ_R=_e(_e(-.12,-1.15,s),.45,r),O.elbR_=_e(_e(.45,1.05,s),.1,r),O.shRX_L=_e(.1,.55,r),O.shRZ_L=.38,O.elbL_=.7,O.hipsY=-.05-r*.03,O.legR_=-.38*r,O.legL_=.3*r,O.kneeR_=.3,O.kneeL_=.26,O.headRY=-O.torsoRY*.45,e<.24?16:30}if(i===1){let s=je(0,.22,e),r=Of((e-.26)/.3),o=je(.82,1,e);return O.torsoRY=_e(.9*s,-.95,r)*(1-o*.45),O.torsoRX=.12+r*.12,O.shRX_R=_e(_e(-.4,-.85,s),-1.25,r),O.shRZ_R=_e(_e(.1,.75,s),-1.25,r),O.elbR_=_e(_e(.5,1.15,s),.14,r),O.shRX_L=.3,O.shRZ_L=_e(.2,.8,r),O.elbL_=.6,O.hipsY=-.06,O.legR_=.3*r,O.legL_=-.38*r,O.kneeR_=.26,O.kneeL_=.3,O.headRY=-O.torsoRY*.45,e<.26?16:30}let t=je(0,.24,e),n=Of((e-.26)/.42);return Vs=Math.PI*2*Of((e-.26)/.52),e>=.99&&(Vs=0),O.torsoRY=_e(-.9*t,-.15,n),O.torsoRX=.16+t*.1,O.shRX_R=_e(_e(.15,-.5,t),-.9,n),O.shRZ_R=_e(_e(-.12,-.55,t),-1.5,n),O.elbR_=_e(_e(.45,1.2,t),.05,n),O.shRX_L=-.35,O.shRZ_L=_e(.2,.95,n),O.elbL_=.45,O.hipsY=-.1-Math.sin(Ae(n,0,1)*Math.PI)*.07,O.legR_=-.32,O.legL_=.36,O.kneeR_=.45,O.kneeL_=.52,O.headRY=.1,e<.24?15:26}function aA(i){let e=i<.5?2*i*i:1-(2-2*i)*(2-2*i)/2;return cs.rotation.x=Math.PI*2*e,O.hipsY=-.32,O.torsoRX=.85,O.headRX=.6,O.legR_=-1.65,O.legL_=-1.55,O.kneeR_=2.2,O.kneeL_=2.3,O.shRX_R=-.9,O.shRZ_R=-.35,O.elbR_=2.1,O.shRX_L=-.9,O.shRZ_L=.35,O.elbL_=2.1,26}function lA(i){let e=Math.sin(Ae(i,0,1)*Math.PI);return O.torsoRX=-.4*e,O.headRX=-.32*e,O.shRX_R=-.5*e,O.shRZ_R=-.75*e-.1,O.shRX_L=-.5*e,O.shRZ_L=.75*e+.1,O.elbR_=.8,O.elbL_=.8,O.hipsY=-.06*e,O.legR_=-.28*e,O.kneeR_=.45*e,O.legL_=.15*e,22}function cA(i){let e=je(0,.5,i),t=je(.65,1.35,i);return O.hipsY=-.52*e-.14*t,O.kneeR_=2.35*e,O.kneeL_=2.35*e,O.legR_=.12*e,O.legL_=.12*e,O.torsoRX=.22*e+.6*t,O.headRX=.28*e+.4*t,O.shRX_R=.2*e-.55*t,O.shRZ_R=-.3,O.shRX_L=.2*e-.55*t,O.shRZ_L=.3,O.elbR_=.3,O.elbL_=.3,cs.rotation.x=1.15*t,8}function ky(i,e){let t=(n,s,r)=>{n[s]=Ve(n[s],r,e,i)};t(Mo.position,"y",.92+O.hipsY),t(Mo.rotation,"y",O.hipsRY),t(Mn.rotation,"x",O.torsoRX),t(Mn.rotation,"y",O.torsoRY-O.hipsRY),t(Mn.rotation,"z",O.torsoRZ),t(fn.rotation,"x",O.headRX-O.torsoRX*.4),t(fn.rotation,"y",O.headRY),t(fn.rotation,"z",O.headRZ),t(Vf.rotation,"x",O.shRX_R),t(Vf.rotation,"z",O.shRZ_R),t(jm.rotation,"x",-Math.max(0,O.elbR_)),t(Wf.rotation,"x",O.shRX_L),t(Wf.rotation,"z",O.shRZ_L),t(Jm.rotation,"x",-Math.max(0,O.elbL_)),t($m.rotation,"x",O.legR_),t(Qm.rotation,"x",Math.max(0,O.kneeR_)),t(eg.rotation,"x",O.legL_),t(tg.rotation,"x",Math.max(0,O.kneeL_))}var bh={};Ns(bh,{init:()=>TA,update:()=>wA});var sg=-.35,rg=1.25,Hy=4,Gy=13,Vy=.0032,Wy=.0026,hA=.011,jf=1.6,uA=.45,og=.4,Xy=8,Jf=55,fA=61,dA=7,pA=32,mA=40,gA=-650,Ao=0,Li=.3,Yf=7.5,Gl=7.5,wr=7.5,Xl="follow",Zf=null,vh=0,yh=0,_h=1,Hl=Jf,Vl=Jf,Ts=null,Wl=0,ag=0,ya=[0,0,0,0,0,0],Kf=null,Ws=new A(0,jf,250),Di=new A(0,8,262),Mi=new A,_a=new A,Ro=new A,xA=new A(0,0,-560);function vA(i){return i&&(i.pos||i.root&&i.root.position)||null}function Mh(i,e){let t=e||null;t!==Ts&&(Ts=t,Kf&&(Kf.lockTarget=t),i.emit("lockon",{target:t}))}function yA(i){let e=Ae(i||0,0,1);if(!(e<=0)){Wl=Math.max(Wl,e),ag=0;for(let t=0;t<6;t++)ya[t]=Math.random()*Math.PI*2}}function _A(i,e,t,n,s,r){let o=0,a=Math.max(e.y-(i.getGroundHeight(e.x,e.z)+og),.001);for(let l=1;l<=Xy;l++){let c=r*l/Xy,h=e.y+n*c,u=i.getGroundHeight(e.x+t*c,e.z+s*c)+og,f=h-u;if(f<0){let d=a/(a-f);return Ae(o+(c-o)*d-.2,1.3,r)}o=c,a=Math.max(f,.001)}return r}function MA(i,e){if(i!=="follow"&&Ts&&Mh(e,null),Xl=i,vh=0,i==="title"&&(yh=0),i==="follow"){Mi.copy(Di).sub(Ws);let t=Mi.length();t>.05&&(Ao=Math.atan2(Mi.x,Mi.z),Li=Ae(Math.asin(Ae(Mi.y/t,-1,1)),sg,rg)),Gl=Ae(t,1.5,120),wr=Gl,_h=0}}function bA(i,e){let t=i.camera,n=i.player,s=i.input.mouse,r=i.state;if((r==="playing"||r==="shrine"||r==="boss")&&i.input.justPressed("KeyQ")){if(Ts)Mh(i,null);else if(i.combat&&typeof i.combat.nearestTargetable=="function"){let v=i.combat.nearestTargetable(n.position,pA);v&&Mh(i,v)}}let a=vA(Ts);Ts&&(!Ts.alive||!a||a.distanceTo(n.position)>mA)&&(Mh(i,null),a=null),Ts&&a?(Ao-=s.dx*Vy*.35,Ao=ei(Ao,Math.atan2(n.position.x-a.x,n.position.z-a.z),4.2,e),Li=Ae(Li+s.dy*Wy,sg,rg),Li=Ve(Li,Ae(Li,.22,.6),2.6,e)):(Ao-=s.dx*Vy,Li=Ae(Li+s.dy*Wy,sg,rg)),Yf=Ae(Yf+s.wheel*hA,Hy,Gy),_h=Math.min(1,_h+e/1.1);let l=je(0,1,_h),c=_e(2.2,12,l),h=_e(1.8,6,l);if(_h<1&&(Li=Ve(Li,Ae(Li,.12,.85),(1-l)*2.5,e)),Mi.copy(n.position),Mi.y+=jf,Ts&&a){_a.set(a.x,a.y+1.2,a.z).sub(Mi);let v=_a.length();v>.001&&Mi.addScaledVector(_a,Math.min(.32,3.5/v)),Mi.y+=.25}Ws.lerp(Mi,1-Math.exp(-c*e));let u=Ae(Yf+(Ts?1.5:0),Hy,Gy+2);Gl=Ve(Gl,u,h,e);let f=Math.cos(Li),d=Math.sin(Ao)*f,g=Math.sin(Li),x=Math.cos(Ao)*f,m=_A(i,Ws,d,g,x,Gl);m<wr?wr=m:wr=Ve(wr,m,3.2,e),Di.set(Ws.x+d*wr,Ws.y+g*wr,Ws.z+x*wr);let p=i.getGroundHeight(Di.x,Di.z)+og;Di.y<p&&(Di.y=p),t.position.copy(Di),Ro.copy(Ws),Ro.y+=uA,t.lookAt(Ro);let y=n.velocity;Vl=(y?Math.hypot(y.x,y.z):0)>dA?fA:Jf}function SA(i,e){let t=i.camera,n=i.player,s=i.world&&i.world.castleGatePos||xA;vh+=e;let r=1.5;if(Xl==="title"){yh+=e;let a=n.position,l=.85+yh*.07,c=14.5+Math.sin(yh*.1+.6)*2.4,h=2.9+Math.sin(yh*.06+1.5)*1.3;Mi.set(a.x+Math.sin(l)*c,a.y+h,a.z+Math.cos(l)*c);let u=.16+.34*Math.max(0,Math.cos(l));Ro.set(-a.x,0,gA-a.z),Ro.lengthSq()>.001&&Ro.normalize(),_a.set(a.x+Ro.x*26*u,a.y+jf+5.5*u,a.z+Ro.z*26*u),Vl=50,r=1.7}else if(Xl==="bossIntro"){let a=je(0,6.5,vh);Mi.set(s.x+_e(-9,7,a),s.y+_e(1.4,10.5,a),s.z+_e(30,24,a)),_a.set(s.x,s.y+_e(5,26,a),s.z+_e(-4,-16,a)),Vl=52,r=1.4}else{let a=je(0,16,vh);Mi.set(s.x+Math.sin(vh*.05)*8,s.y+_e(5,130,a),s.z+_e(45,90,a)),_a.set(s.x,s.y+_e(18,2,a),s.z+_e(-30,620,a)),Vl=56,r=1.2}Ws.lerp(_a,1-Math.exp(-2.3*e)),Di.lerp(Mi,1-Math.exp(-r*e));let o=i.getGroundHeight(Di.x,Di.z)+1;Di.y<o&&(Di.y=o),t.position.copy(Di),t.lookAt(Ws)}function EA(i,e){if(Wl<=0)return;ag+=e;let t=Wl*Math.exp(-3.4*ag);if(t<.003){Wl=0;return}let n=i.time.elapsed,s=i.camera;s.position.x+=t*.32*(Math.sin(n*33+ya[0])*.62+Math.sin(n*51+ya[1])*.38),s.position.y+=t*.26*(Math.sin(n*39+ya[2])*.62+Math.sin(n*57+ya[3])*.38),s.position.z+=t*.2*Math.sin(n*29+ya[4]),s.rotateZ(t*.035*Math.sin(n*43+ya[5]))}async function TA(i){let e=i.player;e&&e.position&&Ws.set(e.position.x,e.position.y+jf,e.position.z),Di.copy(i.camera.position),Hl=i.camera.fov||Jf,Vl=Hl,Ao=0,Li=.3,Yf=7.5,Gl=7.5,wr=7.5,Xl="follow",Zf=null,Ts=null,Wl=0,Kf={lockTarget:null,setLockTarget(t){Mh(i,t||null)},shake(t){yA(t)},cinematic(t){Zf=t==="title"||t==="bossIntro"||t==="ending"?t:null}},i.camera3p=Kf,i.on("state",t=>{let n=t&&t.to;(n==="title"||n==="gameover")&&(Zf=null)})}function wA(i,e){let t=i.camera,n=i.player;if(!t||!n||!n.position)return;let s=i.state==="title"?"title":Zf||"follow";s!==Xl&&MA(s,i),Xl==="follow"?bA(i,e):SA(i,e),Hl=Ve(Hl,Vl,4.5,e),Math.abs(t.fov-Hl)>.002&&(t.fov=Hl,t.updateProjectionMatrix()),EA(i,e)}var nd={};Ns(nd,{init:()=>dR,update:()=>pR});function qy(i){let e=new Map,t=new Map,n=i.clone();return Yy(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yy(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Yy(i.children[n],e.children[n],t)}var Rt=Ri(12220178),AA=-558,RA=120,CA=2,PA=140,Qy=90,e_=50,Zy=30,Vi={hp:2,radius:.7,walk:1.15,run:4.2,notice:18,range:2,reach:2.7,dmg:.5,height:1.25,hitY:.7},Yl={hp:4,radius:.65,speed:4.2*1.3,range:2,reach:2.8,dmg:.5,height:1.8,hitY:1,max:6},Co={hp:2,radius:.6,near:8,far:20,fireCd:2.5,dmg:.5,height:.6,hitY:0},Zl=null,ii=null,Xi=[],ug=[],t_=[],Eh=[],Io=[],pg=[],mg=[],td=[],ql=[],on=null,fg=!1,lg=0,$f=0,rt=null,ft=null,Qf=null,IA=Math.PI,Lo=new A;function Do(i,e){try{Zl.audio&&Zl.audio.play(i,e)}catch{}}function ws(i,e,t){try{Zl.effects&&Zl.effects.burst(i,e,t)}catch{}}function gg(i){return i.pos||i.root&&i.root.position||null}function As(i,e,t){if(t<AA)return!1;let n=i.world?i.world.waterLevel:-9999;return i.getGroundHeight(e,t)>n-.5}function dg(i,e,t,n=8){if(As(i,e,t))return{x:e,z:t};for(let s=0;s<12;s++){let r=Rt()*Math.PI*2,o=2+Rt()*n,a=e+Math.sin(r)*o,l=t+Math.cos(r)*o;if(As(i,a,l))return{x:a,z:l}}return{x:e,z:t}}function LA(){rt={sphere:new Et(1,10,8),cone:new rn(1,1,6),cone4:new rn(1,1,4),limb:new $t(1,.82,2,7),box:new st(1,1,1),rib:new es(.17,.028,5,10),rock:new Yu(1,0),gem:new ra(.16,0)},rt.gem.scale(1,1.45,1),rt.tent=new $t(.95,.95,1.7,3,1,!1,Math.PI/2),rt.tent.rotateZ(Math.PI/2),rt.tent.translate(0,.48,0);let i=new Bc;i.moveTo(2.5,2.5),i.bezierCurveTo(2.5,2.5,2,0,0,0),i.bezierCurveTo(-3,0,-3,3.5,-3,3.5),i.bezierCurveTo(-3,5.5,-1,7.7,2.5,9.5),i.bezierCurveTo(6,7.7,8,5.5,8,3.5),i.bezierCurveTo(8,3.5,8,0,5,0),i.bezierCurveTo(3.5,0,2.5,2.5,2.5,2.5),rt.heart=new Zu(i,{depth:2.2,bevelEnabled:!0,bevelThickness:.8,bevelSize:.8,bevelSegments:1,steps:1}),rt.heart.center(),rt.heart.rotateZ(Math.PI),rt.heart.scale(.035,.035,.035),ft={wood:At(7819824),eyeY:Ut(16765502,1.6),bone:At(15262416),blade:At(12174287),grip:At(5126952),eyeR:Ut(16726832,1.8),wispCore:Ut(13732863,2.1),wispMid:Ut(10112480,1.1,{transparent:!0,opacity:.45,depthWrite:!1}),wispShell:Ut(8009152,.7,{transparent:!0,opacity:.22,depthWrite:!1,blending:ln}),stone:At(9078135),flameO:Ut(16747050,1.7),flameI:Ut(16766826,2.2),tent:At(9069122),heart:Ut(16731501,1.1),gem:Ut(5111688,1.4),fireball:Ut(13659135,2.4),fireHalo:Ut(11693055,1.2,{transparent:!0,opacity:.35,depthWrite:!1,blending:ln}),flash:new Nt({color:16777215}),flashSkin:new Nt({color:16777215})}}function xg(i){let e=[];return i.traverse(t=>{t.isMesh&&e.push({m:t,mat:t.material})}),e}var DA=13164736;function NA(){let i=new ze,e=qy(Qf.scene);e.scale.setScalar(Qf.scale),e.rotation.y=IA,i.add(e);let t=new sf(e),n={};for(let s of["idle","walk","sprint","attack-melee-right","die"]){let r=Qf.clipMap.get(s);if(!r)continue;let o=t.clipAction(r);(s==="attack-melee-right"||s==="die")&&(o.setLoop(W0,1),o.clampWhenFinished=!0),n[s]=o}return{root:i,p:{mixer:t,actions:n,current:null},flash:xg(i)}}function Wi(i,e,t={}){let n=i.p,s=n.actions[e];if(!s)return null;if(n.current===s)return s;let r=t.fade??.15;return s.reset(),r>0&&s.fadeIn(r),s.play(),n.current&&n.current.fadeOut(r),n.current=s,s}function cg(i,e){e>=3?Wi(i,"sprint"):e>.05?Wi(i,"walk"):Wi(i,"idle")}function UA(){let i=new ze,e=new ze;e.position.y=.98,i.add(e),Q(rt.box,ft.bone,0,0,0,e).scale.set(.26,.12,.16),Q(rt.limb,ft.bone,0,.2,0,e).scale.set(.03,.17,.03);for(let x=0;x<3;x++){let m=Q(rt.rib,ft.bone,0,.26+x*.1,0,e);m.rotation.x=Math.PI/2;let p=1-x*.1;m.scale.set(p,p*.78,.78)}let s=Q(rt.limb,ft.bone,0,.55,0,e);s.scale.set(.022,.19,.022),s.rotation.z=Math.PI/2;let r=new ze;r.position.set(0,.72,0),e.add(r),Q(rt.sphere,ft.bone,0,0,0,r).scale.set(.145,.155,.15),Q(rt.box,ft.bone,0,-.13,.02,r).scale.set(.13,.055,.11),Q(rt.sphere,ft.eyeR,-.055,.01,.125,r).scale.setScalar(.032),Q(rt.sphere,ft.eyeR,.055,.01,.125,r).scale.setScalar(.032);let l=new ze;l.position.set(-.24,.55,0),e.add(l),Q(rt.limb,ft.bone,0,-.27,0,l).scale.set(.028,.26,.028),Q(rt.sphere,ft.bone,0,-.27,0,l).scale.setScalar(.042),Q(rt.sphere,ft.bone,0,-.55,0,l).scale.setScalar(.05);let c=new ze;c.position.set(.24,.55,0),e.add(c),Q(rt.limb,ft.bone,0,-.27,0,c).scale.set(.028,.26,.028),Q(rt.sphere,ft.bone,0,-.27,0,c).scale.setScalar(.042),Q(rt.sphere,ft.bone,0,-.55,0,c).scale.setScalar(.05);let h=new ze;h.position.set(0,-.56,.02),c.add(h);let u=Q(rt.limb,ft.grip,0,0,.02,h);u.scale.set(.018,.07,.018),u.rotation.x=Math.PI/2,Q(rt.box,ft.grip,0,0,.12,h).scale.set(.15,.035,.035),Q(rt.box,ft.blade,0,0,.45,h).scale.set(.07,.018,.62);let f=Q(rt.cone4,ft.blade,0,0,.8,h);f.scale.set(.035,.07,.009),f.rotation.x=Math.PI/2;let d=new ze;d.position.set(-.1,.86,0),i.add(d),Q(rt.limb,ft.bone,0,-.42,0,d).scale.set(.03,.4,.03),Q(rt.sphere,ft.bone,0,-.42,0,d).scale.setScalar(.042),Q(rt.box,ft.bone,0,-.84,.03,d).scale.set(.07,.035,.15);let g=new ze;return g.position.set(.1,.86,0),i.add(g),Q(rt.limb,ft.bone,0,-.42,0,g).scale.set(.03,.4,.03),Q(rt.sphere,ft.bone,0,-.42,0,g).scale.setScalar(.042),Q(rt.box,ft.bone,0,-.84,.03,g).scale.set(.07,.035,.15),{root:i,p:{body:e,head:r,armL:l,armR:c,legL:d,legR:g,sword:h},flash:xg(i)}}function zA(){let i=new ze,e=new ze;i.add(e);let t=new Xe(rt.sphere,ft.wispCore);t.scale.setScalar(.19),e.add(t);let n=new Xe(rt.sphere,ft.wispMid);n.scale.setScalar(.27),e.add(n);let s=new Xe(rt.sphere,ft.wispShell);s.scale.setScalar(.4),e.add(s);let r=new ze;r.rotation.x=.6,i.add(r);let o=new Xe(rt.sphere,ft.wispCore);o.scale.setScalar(.045),o.position.set(.5,0,0),r.add(o);let a=new Xe(rt.sphere,ft.wispCore);return a.scale.setScalar(.035),a.position.set(-.48,.06,0),r.add(a),i.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),{root:i,p:{coreG:e,shell:s,orbit:r},flash:xg(i)}}function OA(i,e){let t=new ze;t.position.copy(e);let n=e.y;for(let h=0;h<6;h++){let u=h/6*Math.PI*2+Rt()*.3,f=Q(rt.rock,ft.stone,Math.sin(u)*.55,.07,Math.cos(u)*.55,t);f.scale.setScalar(.11+Rt()*.06),f.rotation.set(Rt()*3,Rt()*3,Rt()*3)}for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,f=Q(rt.limb,ft.wood,Math.sin(u)*.16,.22,Math.cos(u)*.16,t);f.scale.set(.045,.26,.045),f.rotation.x=Math.cos(u)*.65,f.rotation.z=-Math.sin(u)*.65}let s=Q(rt.cone,ft.flameO,0,.42,0,t);s.scale.set(.2,.45,.2),s.castShadow=!1;let r=Q(rt.cone,ft.flameI,0,.38,0,t);r.scale.set(.11,.3,.11),r.castShadow=!1;let o=Rt()*Math.PI*2,a=Q(rt.tent,ft.tent,Math.sin(o)*2.6,0,Math.cos(o)*2.6,t);a.rotation.y=o+Math.PI/2+(Rt()-.5),a.position.y=i.getGroundHeight(e.x+a.position.x,e.z+a.position.z)-n;let l=o+2+Rt(),c=Q(rt.box,ft.wood,Math.sin(l)*1.9,.19,Math.cos(l)*1.9,t);return c.scale.setScalar(.38),c.rotation.y=Rt()*1.5,c.position.y=i.getGroundHeight(e.x+c.position.x,e.z+c.position.z)-n+.19,{group:t,flameO:s,flameI:r}}function vg(i,e,t,n){let s={root:i.root,pos:i.root.position,hp:e.hp,maxHp:e.hp,alive:!0,radius:e.radius,name:t,isBoss:!1,damage(r,o){yg(this,r,o)},_own:!0,_gone:!1,type:n,p:i.p,flash:i.flash,state:"patrol",t:0,animT:Rt()*6,phase:Rt()*Math.PI*2,yaw:Rt()*Math.PI*2,kb:new A,home:new A,staggerT:0,flashT:0,farAcc:0,colT:0,colCache:[],restT:0,hasTarget:!1,tx:0,tz:0,yOff:0,height:e.height,hitY:e.hitY,hitDone:!1,distP:999,camp:null,spot:null,hoverY:0,fireT:Rt()*1.5,dustT:0,_lastSwingId:-1};return s.root.rotation.y=s.yaw,s}function FA(i,e,t,n){let s=vg(NA(),Vi,"\u30B4\u30D6\u30EA\u30F3","goblin");return s.pos.set(e,i.getGroundHeight(e,t),t),s.home.copy(s.pos),s.camp=n,s.restT=Rt()*2,n.members.push(s),Xi.push(s),ii.add(s.root),Wi(s,"idle",{fade:0}),s}function n_(i,e){e.clearedAt=-1;let t=2+Math.floor(Rt()*3);for(let n=0;n<t;n++){let s=n/t*Math.PI*2+Rt(),r=1.8+Rt()*1.8,o=dg(i,e.center.x+Math.sin(s)*r,e.center.z+Math.cos(s)*r,5);FA(i,o.x,o.z,e)}}function BA(i,e,t){let n=vg(UA(),Yl,"\u30DC\u30FC\u30F3\u30BD\u30EB\u30B8\u30E3\u30FC","skeleton");return n.pos.set(e,i.getGroundHeight(e,t),t),n.home.copy(n.pos),n.state="rise",n.yOff=-1.7,n.dustT=0,Eh.push(n),Xi.push(n),ii.add(n.root),ws(n.pos.clone(),"dust",{count:14}),n}function i_(i,e){let t=vg(zA(),Co,"\u9B54\u5C0E\u30A6\u30A3\u30B9\u30D7","wisp"),n=i.getGroundHeight(e.pos.x,e.pos.z);return t.pos.set(e.pos.x,n+1.5,e.pos.z),t.home.copy(e.pos),t.hoverY=n+1.5,t.state="hover",t.spot=e,e.enemy=t,Xi.push(t),ii.add(t.root),t}function kA(i){if(i.flashT<=0)for(let e of i.flash)e.m.material=e.m.isSkinnedMesh?ft.flashSkin:ft.flash;i.flashT=.08}function s_(i){for(let e of i.flash)e.m.material=e.mat}function yg(i,e,t){let n=Zl;if(!n||!i||i._gone||!i.alive)return;if(!i._own){let r=!!i._dmgLock;if(r)i.hp=Math.max(0,(i.hp??1)-e),i.hp<=0&&(i.alive=!1);else if(typeof i.damage=="function"){i._dmgLock=!0;try{i.damage(e,t)}catch{}i._dmgLock=!1}else i.hp=Math.max(0,(i.hp??1)-e),i.hp<=0&&(i.alive=!1);if(!r){let o=gg(i);o&&(Ky(o.x,o.y+2.2,o.z,e),Lo.set(o.x,o.y+1.5,o.z),ws(Lo.clone(),"hit")),Do("hit");let a=!i.alive||i.hp<=0;n.emit("enemy-hit",{enemy:i,pos:o?o.clone():null,damage:e,killed:a}),a&&!i._killEmitted&&(i._killEmitted=!0,n.emit("enemy-killed",{enemy:i,pos:o?o.clone():null}))}return}if(i.hp=Math.max(0,i.hp-e),kA(i),t){let r=i.pos.x-t.x,o=i.pos.z-t.z,a=Math.hypot(r,o)||1,l=i.type==="wisp"?3.2:5;i.kb.x+=r/a*l,i.kb.z+=o/a*l}i.staggerT=.35,Ky(i.pos.x,i.root.position.y+i.height+.35,i.pos.z,e),Lo.set(i.pos.x,i.root.position.y+i.hitY+.3,i.pos.z),ws(Lo.clone(),"hit"),Do("hit");let s=i.hp<=0;n.emit("enemy-hit",{enemy:i,pos:i.pos.clone(),damage:e,killed:s}),s?(i.alive=!1,i.state="dying",i.t=0,i.type==="goblin"&&Wi(i,"die",{fade:.1}),n.emit("enemy-killed",{enemy:i,pos:i.pos.clone()})):i.state!=="rise"&&i.state!=="dying"&&i.state!=="crumble"&&i.type!=="wisp"&&(i.state="stunned",i.t=0)}function ed(i,e,t,n){if(Lo.set(e.pos.x,e.root.position.y+.5,e.pos.z),ws(Lo.clone(),"death"),n&&Do("kill"),t&&$A(i,e.pos.x,e.root.position.y,e.pos.z),e.flashT>0&&s_(e),ii.remove(e.root),e._gone=!0,e.alive=!1,e.camp){let s=e.camp.members.indexOf(e);s>=0&&e.camp.members.splice(s,1),e.camp.members.length===0&&(e.camp.clearedAt=i.time.elapsed)}if(e.spot&&(e.spot.enemy=null,e.spot.deadAt=i.time.elapsed),e.type==="skeleton"){let s=Eh.indexOf(e);s>=0&&Eh.splice(s,1)}}function HA(){for(let i=0;i<12;i++){let e=document.createElement("canvas");e.width=128,e.height=80;let t=e.getContext("2d"),n=new xl(e);n.colorSpace=an;let s=new ml({map:n,transparent:!0,depthTest:!1,depthWrite:!1}),r=new Lc(s);r.scale.set(.9,.56,1),r.visible=!1,r.renderOrder=60,ii.add(r),mg.push({sp:r,g:t,tex:n,mat:s,t:99,active:!1,last:""})}}function Ky(i,e,t,n){let s=null,r=null,o=-1;for(let l of mg){if(!l.active){s=l;break}l.t>o&&(o=l.t,r=l)}if(s=s||r,!s)return;let a=n%1===0?String(n):n.toFixed(1);if(s.last!==a){let l=s.g;l.clearRect(0,0,128,80),l.font='700 46px Georgia, "Times New Roman", serif',l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle="rgba(30,24,18,0.7)",l.strokeText(a,64,42),l.fillStyle="#ffffff",l.fillText(a,64,42),s.tex.needsUpdate=!0,s.last=a}s.active=!0,s.t=0,s.sp.visible=!0,s.mat.opacity=1,s.sp.position.set(i+(Rt()-.5)*.4,e,t+(Rt()-.5)*.4)}function GA(i){for(let e of mg){if(!e.active)continue;e.t+=i,e.sp.position.y+=i*1.1*Math.max(.15,1-e.t);let t=1+.35*Math.exp(-e.t*9);e.sp.scale.set(.9*t,.56*t,1),e.mat.opacity=e.t<.35?1:Ae(1-(e.t-.35)/.5,0,1),e.t>=.9&&(e.active=!1,e.sp.visible=!1)}}var jy=null;function VA(){let i=ki(128,e=>{e.font="900 104px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=18,e.strokeStyle="rgba(150,30,24,0.95)",e.strokeText("!",64,66),e.fillStyle="#fff8ee",e.fillText("!",64,66)});jy=new ml({map:i,transparent:!0,depthTest:!1,depthWrite:!1});for(let e=0;e<6;e++){let t=new Lc(jy);t.visible=!1,t.renderOrder=61,ii.add(t),td.push({sp:t,e:null,t:0,active:!1})}}function WA(i){let e=td.find(t=>!t.active)||td[0];e.active=!0,e.t=0,e.e=i,e.sp.visible=!0,e.sp.position.set(i.pos.x,i.root.position.y+i.height+.6,i.pos.z)}function XA(i){for(let e of td){if(!e.active)continue;if(e.t+=i,e.t>.5||!e.e||e.e._gone){e.active=!1,e.sp.visible=!1,e.e=null;continue}e.sp.position.set(e.e.pos.x,e.e.root.position.y+e.e.height+.6+e.t*.25,e.e.pos.z);let n=.72*je(0,.1,e.t)*(1+.3*Math.exp(-e.t*12));e.sp.scale.set(n,n,1)}}var Po=240;function qA(){let i=new Float32Array(Po*3),e=new Float32Array(Po*3),t=new Float32Array(Po*3),n=new Float32Array(Po),s=new Float32Array(Po);for(let c=0;c<Po;c++)i[c*3+1]=-9999;let r=new Bt;r.setAttribute("position",new It(i,3).setUsage(_s)),r.setAttribute("color",new It(e,3).setUsage(_s));let o=ki(64,(c,h)=>{let u=c.createRadialGradient(h/2,h/2,0,h/2,h/2,h/2);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.4,"rgba(255,255,255,0.55)"),u.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=u,c.fillRect(0,0,h,h)}),a=new ia({size:.5,map:o,vertexColors:!0,transparent:!0,opacity:.9,blending:ln,depthWrite:!1,sizeAttenuation:!0}),l=new jr(r,a);l.frustumCulled=!1,l.renderOrder=20,ii.add(l),on={geo:r,pos:i,col:e,base:t,life:n,max:s,head:0}}function YA(i,e,t,n,s,r,o){let a=on.head%Po;on.head++,on.pos[a*3]=i+(Rt()-.5)*.12,on.pos[a*3+1]=e+(Rt()-.5)*.12,on.pos[a*3+2]=t+(Rt()-.5)*.12,on.base[a*3]=n,on.base[a*3+1]=s,on.base[a*3+2]=r,on.life[a]=o,on.max[a]=o}function ZA(i){let e=!1;for(let t=0;t<Po;t++){if(on.life[t]<=0)continue;e=!0,on.life[t]-=i;let n=Math.max(0,on.life[t]/on.max[t]);on.col[t*3]=on.base[t*3]*n,on.col[t*3+1]=on.base[t*3+1]*n,on.col[t*3+2]=on.base[t*3+2]*n,on.life[t]<=0&&(on.pos[t*3+1]=-9999)}e&&(on.geo.attributes.position.needsUpdate=!0,on.geo.attributes.color.needsUpdate=!0)}function KA(){for(let i=0;i<10;i++){let e=new ze,t=new Xe(rt.sphere,ft.fireball);t.scale.setScalar(.16),t.castShadow=!1,e.add(t);let n=new Xe(rt.sphere,ft.fireHalo);n.scale.setScalar(.3),n.castShadow=!1,e.add(n),e.visible=!1,ii.add(e),pg.push({g:e,core:t,halo:n,active:!1,vel:new A,life:0,emitT:0})}}function jA(i,e){let t=pg.find(s=>!s.active);if(!t)return;t.active=!0,t.life=0,t.emitT=0,t.g.visible=!0,t.g.position.set(e.pos.x,e.root.position.y+.1,e.pos.z);let n=i.player.position;Lo.set(n.x-t.g.position.x,n.y+1-t.g.position.y,n.z-t.g.position.z).normalize(),t.vel.copy(Lo).multiplyScalar(11),Do("magic"),ws(t.g.position.clone(),"magic",{count:6})}function hg(i,e){e&&ws(i.g.position.clone(),e),i.active=!1,i.g.visible=!1}function JA(i,e){let t=i.player.position;for(let n of pg){if(!n.active)continue;n.life+=e,n.g.position.addScaledVector(n.vel,e);let s=n.g.position,r=1+Math.sin(i.time.elapsed*22+n.life*7)*.15;for(n.core.scale.setScalar(.16*r),n.halo.scale.setScalar(.3*(2-r)),n.emitT-=e;n.emitT<=0;)n.emitT+=.03,YA(s.x,s.y,s.z,.85,.5,1,.45);let o=t.x-s.x,a=t.y+1-s.y,l=t.z-s.z;if(o*o+a*a+l*l<1.2*1.2){try{i.player.damage(Co.dmg,s)}catch{}Do("burn"),hg(n,"fire");continue}if(s.y<=i.getGroundHeight(s.x,s.z)+.15){hg(n,"fire");continue}n.life>6&&hg(n,"magic")}}function $A(i,e,t,n){if(Rt()<.4)Jy(i,"heart",e,t,n);else{let s=1+Math.floor(Rt()*3);for(let r=0;r<s;r++)Jy(i,"gem",e,t,n)}}function Jy(i,e,t,n,s){if(Io.length>36){let o=Io.shift();ii.remove(o.mesh)}let r=new Xe(e==="heart"?rt.heart:rt.gem,e==="heart"?ft.heart:ft.gem);r.castShadow=!0,r.position.set(t,n+.7,s),ii.add(r),Io.push({kind:e,mesh:r,vel:new A((Rt()-.5)*2.6,3.2+Rt()*1.6,(Rt()-.5)*2.6),age:0,grounded:!1,baseY:0,phase:Rt()*Math.PI*2,dieK:0})}function QA(i,e){let t=i.player.position;for(let n=Io.length-1;n>=0;n--){let s=Io[n],r=s.mesh;if(s.age+=e,s.age>Zy){s.dieK+=e/.4;let h=Math.max(.001,1-s.dieK);r.scale.setScalar(h),s.dieK>=1&&(ii.remove(r),Io.splice(n,1));continue}if(r.visible=s.age<Zy-4||Math.sin(i.time.elapsed*16)>-.2,s.grounded)s.baseY=i.getGroundHeight(r.position.x,r.position.z)+.25,r.position.y=s.baseY+.1+Math.sin(i.time.elapsed*3+s.phase)*.08,r.rotation.y+=e*2.4;else{s.vel.y-=12*e,r.position.addScaledVector(s.vel,e);let h=i.getGroundHeight(r.position.x,r.position.z)+.25;r.position.y<=h&&s.vel.y<0&&(s.grounded=!0,s.baseY=h)}let o=t.x-r.position.x,a=t.z-r.position.z,l=t.y+.8-r.position.y,c=Math.sqrt(o*o+l*l+a*a);if(s.kind==="gem"){if(c<2.5&&c>.001){let h=(6.5*(1-c/2.8)+2.5)*e/c;r.position.x+=o*h,r.position.y+=l*h,r.position.z+=a*h}c<.85&&(i.player.gems+=1,i.emit("pickup",{kind:"gem",pos:r.position.clone()}),Do("pickup"),ws(r.position.clone(),"spark",{color:8257456,count:8}),ii.remove(r),Io.splice(n,1))}else c<1.15&&(i.player.heal(1),i.emit("pickup",{kind:"heart",pos:r.position.clone()}),Do("heart"),ws(r.position.clone(),"heal"),ii.remove(r),Io.splice(n,1))}}function Ar(i,e,t){i.yaw=Math.atan2(e-i.pos.x,t-i.pos.z)}function Sh(i,e,t,n,s,r){let o=t-e.pos.x,a=n-e.pos.z,l=Math.hypot(o,a);if(l<.001)return!0;e.yaw=Math.atan2(o,a);let c=Math.min(s*r,l),h=e.pos.x+o/l*c,u=e.pos.z+a/l*c;return As(i,h,u)?(e.pos.x=h,e.pos.z=u,!0):(e.hasTarget=!1,!1)}function eR(i,e){for(let t=0;t<6;t++){let n=Rt()*Math.PI*2,s=2+Rt()*6,r=e.home.x+Math.sin(n)*s,o=e.home.z+Math.cos(n)*s;if(As(i,r,o)){e.tx=r,e.tz=o,e.hasTarget=!0,e.t=0;return}}e.restT=1.5}function tR(i,e,t){if(e.colT-=t,e.colT<=0){e.colT=.7,e.colCache.length=0;let n=i.colliders;if(n)for(let s=0;s<n.length&&e.colCache.length<6;s++){let r=n[s],o=r.x-e.pos.x,a=r.z-e.pos.z;o*o+a*a<100&&e.colCache.push(r)}}for(let n of e.colCache){let s=e.pos.x-n.x,r=e.pos.z-n.z,o=(n.radius||.5)+e.radius*.6,a=s*s+r*r;if(a<o*o&&a>1e-4){let l=Math.sqrt(a),c=o-l,h=e.pos.x+s/l*c,u=e.pos.z+r/l*c;As(i,h,u)&&(e.pos.x=h,e.pos.z=u)}}}function $y(i,e){let t=i.p;i.animT+=e*2,t.body.position.y=.5+Math.sin(i.animT)*.015,t.body.position.x=0,t.legL.rotation.x=Ve(t.legL.rotation.x,0,8,e),t.legR.rotation.x=Ve(t.legR.rotation.x,0,8,e),t.armL.rotation.x=Ve(t.armL.rotation.x,0,6,e),t.armR.rotation.x=Ve(t.armR.rotation.x,0,6,e),t.body.rotation.x=Ve(t.body.rotation.x,.04,6,e),t.head&&(t.head.rotation.y=Math.sin(i.animT*.35)*.3)}function nR(i,e,t){let n=i.p;i.animT+=e*9.5;let s=Math.sin(i.animT);n.legL.rotation.x=s*.85,n.legR.rotation.x=-s*.85,n.armL.rotation.x=Ve(n.armL.rotation.x,-s*.5-.15,14,e),n.armR.rotation.x=Ve(n.armR.rotation.x,s*.3-.2,14,e);let r=t.time.elapsed;n.armL.rotation.z=Math.sin(r*43+i.phase)*.045,n.armR.rotation.z=-Math.sin(r*47+i.phase)*.045,n.head.rotation.z=Math.sin(r*31+i.phase)*.05,n.body.position.y=.98+Math.abs(Math.cos(i.animT))*.06,n.body.rotation.x=Ve(n.body.rotation.x,.22,8,e)}function _g(i,e,t){e.t+=t;let n=e.p;if(e.type==="wisp"){let r=Math.min(1,e.t/.45);e.root.scale.setScalar(Math.max(.01,1-.9*r*r)),n.coreG.rotation.y+=t*14,e.t>=.45&&(ws(e.pos.clone(),"magic",{count:10}),ed(i,e,!0,!0));return}if(e.type==="goblin"){e.t>=.33&&ed(i,e,!0,!0);return}e.t<.16&&n.body?n.body.rotation.z=Math.sin(e.t*46)*.12:n.body&&(n.body.rotation.z=Ve(n.body.rotation.z,0,10,t));let s=je(.12,.55,e.t);e.root.rotation.x=-s*1.45,e.yOff=-.06*s,e.t>=.68&&ed(i,e,!0,!0)}var r_=.42,iR=r_*.72;function sR(i,e,t,n){let s=i.player.position,r=i.player.hp>0;switch(e.t+=t,e.state){case"patrol":{if(r&&n<Vi.notice){e.state="alert",e.t=0,WA(e),Do("alert"),Ar(e,s.x,s.z),Wi(e,"idle");break}if(Math.hypot(e.home.x-e.pos.x,e.home.z-e.pos.z)>20){Sh(i,e,e.home.x,e.home.z,Vi.run*.8,t),cg(e,Vi.run*.8);break}if(e.restT>0){e.restT-=t,Wi(e,"idle");break}(!e.hasTarget||e.t>9)&&eR(i,e),e.hasTarget?(Sh(i,e,e.tx,e.tz,Vi.walk,t),Math.hypot(e.tx-e.pos.x,e.tz-e.pos.z)<.4&&(e.hasTarget=!1,e.restT=1+Rt()*2.5),cg(e,Vi.walk)):Wi(e,"idle");break}case"alert":{Ar(e,s.x,s.z),Wi(e,"idle"),e.t>=.5&&(e.state="chase",e.t=0);break}case"chase":{if(!r||n>30){e.state="patrol",e.t=0,e.hasTarget=!1;break}if(Ar(e,s.x,s.z),n<=Vi.range){e.state="attack",e.t=0,e.hitDone=!1,Wi(e,"attack-melee-right",{fade:.12});break}Sh(i,e,s.x,s.z,Vi.run,t),cg(e,Vi.run);break}case"attack":{if(Ar(e,s.x,s.z),!e.hitDone&&e.t>=iR&&(e.hitDone=!0,r&&n<Vi.reach))try{i.player.damage(Vi.dmg,e.pos)}catch{}e.t>=r_&&(e.state="recover",e.t=0,Wi(e,"idle"));break}case"recover":{Ar(e,s.x,s.z),e.t>=1&&(e.t=0,e.state=r?n<=Vi.range+.3?"attack":n<30?"chase":"patrol":"patrol",e.state==="attack"&&(e.hitDone=!1,Wi(e,"attack-melee-right",{fade:.12})));break}case"stunned":{Wi(e,"idle",{fade:.08}),e.t>=.3&&(e.state="chase",e.t=0);break}case"dying":_g(i,e,t);return}}function rR(i,e,t,n){let s=e.p,r=i.player.position,o=i.player.hp>0;switch(e.t+=t,e.state){case"rise":{let a=Math.min(1,e.t/.8);e.yOff=-1.7*(1-a*a*(3-2*a)),e.dustT-=t,e.dustT<=0&&(e.dustT=.22,ws(e.pos.clone(),"dust",{count:6})),s.armL.rotation.x=-2.2*(1-a),s.armR.rotation.x=-2.2*(1-a),e.t>=.8&&(e.state="chase",e.t=0,e.yOff=0);break}case"chase":{if(!o){$y(e,t);break}if(Ar(e,r.x,r.z),n<=Yl.range){e.state="windup",e.t=0;break}n<100?(Sh(i,e,r.x,r.z,Yl.speed,t),nR(e,t,i)):$y(e,t);break}case"windup":{Ar(e,r.x,r.z);let a=Math.min(1,e.t/.45);s.armR.rotation.x=Ve(s.armR.rotation.x,-2.9,18,t),s.armR.rotation.z=Ve(s.armR.rotation.z,.4,12,t),s.body.rotation.x=Ve(s.body.rotation.x,-.1,10,t),s.body.position.x=Math.sin(i.time.elapsed*50)*.012*a,e.t>=.45&&(e.state="swing",e.t=0,e.hitDone=!1);break}case"swing":{let a=Math.min(1,e.t/.14);if(s.armR.rotation.x=_e(-2.9,1.15,a*(2-a)),s.armR.rotation.z=_e(.4,-.15,a),s.body.rotation.x=_e(-.1,.4,a),s.body.position.x=0,!e.hitDone&&e.t>=.08&&(e.hitDone=!0,o&&n<Yl.reach))try{i.player.damage(Yl.dmg,e.pos)}catch{}e.t>=.24&&(e.state="recover",e.t=0);break}case"recover":{s.armR.rotation.x=Ve(s.armR.rotation.x,-.2,8,t),s.armR.rotation.z=Ve(s.armR.rotation.z,0,8,t),s.body.rotation.x=Ve(s.body.rotation.x,.15,8,t),Ar(e,r.x,r.z),e.t>=.7&&(e.state="chase",e.t=0);break}case"stunned":{s.body.rotation.x=Ve(s.body.rotation.x,-.45,14,t),e.t>=.18&&(e.state="chase",e.t=0);break}case"crumble":{let a=Math.min(1,e.t/.6);e.yOff=-1.3*a*a,e.root.scale.set(1-a*.35,Math.max(.05,1-a*.85),1-a*.35),e.root.rotation.z=a*.4,e.dustT-=t,e.dustT<=0&&(e.dustT=.2,ws(e.pos.clone(),"dust",{count:4})),e.t>=.6&&ed(i,e,!1,!1);break}case"dying":_g(i,e,t);return;default:{e.state="chase";break}}}function oR(i,e,t,n){let s=e.p,r=i.player.position,o=i.player.hp>0,a=i.time.elapsed;if(e.t+=t,e.state==="dying"){_g(i,e,t);return}let l=i.getGroundHeight(e.pos.x,e.pos.z);e.hoverY=Ve(e.hoverY,l+1.5,3,t),e.root.position.y=e.hoverY+Math.sin(a*1.7+e.phase)*.25,s.orbit.rotation.y+=t*2.6;let c=1+Math.sin(a*5+e.phase)*.1;s.shell.scale.setScalar(.4*c);let h=je(Co.fireCd-.4,Co.fireCd,e.fireT);if(s.coreG.scale.setScalar(1+h*.5+Math.sin(a*9+e.phase)*.05),o&&n<45){Ar(e,r.x,r.z);let u=0,f=0,d=0,g=(r.x-e.pos.x)/(n||1),x=(r.z-e.pos.z)/(n||1);if(n<Co.near)u=-g,f=-x,d=3;else if(n>Co.far)u=g,f=x,d=2.2;else{let y=Math.sin(a*.35+e.phase)>0?1:-1;u=-x*y,f=g*y,d=1.2}let m=e.pos.x+u*d*t,p=e.pos.z+f*d*t;As(i,m,p)&&(e.pos.x=m,e.pos.z=p),n<32&&(e.fireT+=t,e.fireT>=Co.fireCd&&(e.fireT=Rt()*.3,jA(i,e)))}else if(e.fireT=Math.min(e.fireT,Co.fireCd-.6),Math.hypot(e.home.x-e.pos.x,e.home.z-e.pos.z)>6)Sh(i,e,e.home.x,e.home.z,1.5,t);else{let f=e.pos.x+Math.sin(a*.5+e.phase)*.5*t,d=e.pos.z+Math.cos(a*.4+e.phase)*.5*t;As(i,f,d)&&(e.pos.x=f,e.pos.z=d)}}function aR(i,e,t){let n=i.player.position,s=Math.hypot(n.x-e.pos.x,n.z-e.pos.z);e.distP=s;let r=s<PA;if(e.root.visible!==r&&(e.root.visible=r),s>RA&&e.state!=="dying"&&e.state!=="crumble"){if(e.farAcc+=t,e.farAcc<CA)return;t=Math.min(e.farAcc,.5),e.farAcc=0}if(e.flashT>0&&(e.flashT-=t,e.flashT<=0&&s_(e)),e.kb.lengthSq()>4e-4){let o=e.pos.x+e.kb.x*t,a=e.pos.z+e.kb.z*t;As(i,o,a)&&(e.pos.x=o,e.pos.z=a),e.kb.multiplyScalar(Math.max(0,1-7*t))}e.staggerT>0&&(e.staggerT-=t),e.type==="goblin"?sR(i,e,t,s):e.type==="skeleton"?rR(i,e,t,s):oR(i,e,t,s),!e._gone&&(e.type!=="wisp"&&(e.root.position.y=i.getGroundHeight(e.pos.x,e.pos.z)+e.yOff,s<100&&e.alive&&tR(i,e,t)),e.root.rotation.y=ei(e.root.rotation.y,e.yaw,10,t))}function lR(i){ql.length=0;for(let e of Xi)e._own&&e.alive&&e.type!=="wisp"&&e.distP<90&&ql.push(e);for(let e=0;e<ql.length;e++)for(let t=e+1;t<ql.length;t++){let n=ql[e],s=ql[t],r=s.pos.x-n.pos.x,o=s.pos.z-n.pos.z,a=n.radius+s.radius-.35,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l),h=(a-c)*.5,u=r/c*h,f=o/c*h;As(i,n.pos.x-u,n.pos.z-f)&&(n.pos.x-=u,n.pos.z-=f),As(i,s.pos.x+u,s.pos.z+f)&&(s.pos.x+=u,s.pos.z+=f)}}}function cR(i,e){let t=i.player.position,n=i.time.elapsed;for(let s=0;s<ug.length;s++){let r=ug[s],o=Math.hypot(t.x-r.center.x,t.z-r.center.z),a=o<170;r.props.group.visible!==a&&(r.props.group.visible=a),a&&(r.props.flameO.scale.set(.2*(1+Math.sin(n*11+s*2.1)*.12),.45*(1+Math.sin(n*13.7+s)*.2),.2*(1+Math.cos(n*10.3+s)*.12)),r.props.flameI.scale.set(.11*(1+Math.sin(n*17+s)*.18),.3*(1+Math.sin(n*19.3+s*1.7)*.25),.11)),$f<=0&&r.members.length===0&&r.clearedAt>=0&&n-r.clearedAt>Qy&&o>e_&&n_(i,r)}}function hR(i,e){let t=i.time.isNight;if(t&&i.state==="playing"&&i.player.hp>0&&(lg-=e,lg<=0&&(lg=2.2+Rt()*1.5,Eh.length<Yl.max))){let n=i.player.position;for(let s=0;s<8;s++){let r=Rt()*Math.PI*2,o=30+Rt()*30,a=n.x+Math.sin(r)*o,l=n.z+Math.cos(r)*o,c="plains";try{c=i.world.getBiome(a,l)}catch{}if(c==="plains"&&As(i,a,l)){BA(i,a,l);break}}}if(fg&&!t)for(let n of Eh)n.state!=="crumble"&&n.state!=="dying"&&(n.alive=!1,n.state="crumble",n.t=0);fg=t}function uR(i){let e=i.player.position,t=i.time.elapsed;for(let n of t_)!n.enemy&&t-n.deadAt>Qy&&Math.hypot(e.x-n.pos.x,e.z-n.pos.z)>e_&&i_(i,n)}function fR(i){let e=null;try{e=i.player.getAttackHit?i.player.getAttackHit():null}catch{}if(!e||!e.pos)return;let t=e.radius||1;for(let n of Xi){if(!n.alive||n._gone||n._lastSwingId===e.swingId)continue;let s=gg(n);if(!s)continue;let r=e.pos.x-s.x,o=e.pos.z-s.z,a=t+(n.radius||.6);if(r*r+o*o>a*a)continue;let l=n._own?n.root.position.y+n.hitY:s.y,c=n._own?2.4:4.5;Math.abs(e.pos.y-l)>c||(n._lastSwingId=e.swingId,yg(n,e.damage??1,i.player.position))}}async function dR(i){Zl=i,LA(),ii=new ze,ii.name="combat",i.scene.add(ii),HA(),VA(),qA(),KA();let e=await Hi("assets/kenney/characters/character-orc.glb");Gi(e.scene,DA);let{size:t}=Kc(e.scene),n=new Map(e.animations.map(a=>[a.name,a]));Qf={scene:e.scene,clipMap:n,scale:Vi.height/(t.y||1)};let s=[[70,150],[-130,90],[150,-40],[410,190],[500,100],[-340,330],[470,-350]];for(let[a,l]of s){let c=dg(i,a,l,14),h=new A(c.x,i.getGroundHeight(c.x,c.z),c.z),u={center:h,members:[],clearedAt:-1,props:OA(i,h)};ii.add(u.props.group),ug.push(u),n_(i,u)}let r=[[505,-390],[585,-470],[530,-515],[612,-408]],o=[];try{for(let a=-880;a<=880;a+=80)for(let l=-520;l<=880;l+=80)i.world.getBiome(a,l)==="ruins"&&o.push([a,l])}catch{}for(let a of o){if(r.length>=8)break;r.every(([l,c])=>Math.hypot(l-a[0],c-a[1])>60)&&r.push(a)}for(let[a,l]of r){let c=dg(i,a,l,10),h={pos:new A(c.x,0,c.z),enemy:null,deadAt:-999};t_.push(h),i_(i,h)}fg=i.time.isNight,i.combat={enemies:Xi,nearestTargetable(a,l=32){if(!a)return null;let c=null,h=l;for(let u of Xi){if(!u.alive||u._gone)continue;let f=gg(u);if(!f)continue;let d=a.distanceTo(f);d<=h&&(h=d,c=u)}return c},registerEnemy(a){a&&Xi.indexOf(a)<0&&Xi.push(a)},damageEnemy(a,l,c){yg(a,l,c)}}}function pR(i,e){if(!(!i.combat||!i.player)&&i.state!=="shrine"){$f-=e,cR(i,e),$f<=0&&($f=1,uR(i)),hR(i,e),ft.wispCore.emissiveIntensity=1.9+Math.sin(i.time.elapsed*8.5)*.55;for(let t=Xi.length-1;t>=0;t--){let n=Xi[t];n._own&&(aR(i,n,e),n._gone&&Xi.splice(t,1))}lR(i);for(let t of Xi)t.type==="goblin"&&t.p&&t.p.mixer&&t.p.mixer.update(e);fR(i),JA(i,e),QA(i,e),GA(e),XA(e),ZA(e)}}var rd={};Ns(rd,{init:()=>PR,update:()=>ZR});var hs=3399880,mR=6744790,Uo=15777354,Mg=13214247,c_=[{x:180,z:80,name:"\u529B\u306E\u7960"},{x:-360,z:260,name:"\u6C34\u93E1\u306E\u7960"},{x:430,z:40,name:"\u6A39\u970A\u306E\u7960"},{x:430,z:-300,name:"\u70C8\u706B\u306E\u7960"}],gR=3e3,xR=3e3,vR=300,o_=4,a_=1.5,h_=[7334100,8374527,9431208,16747082],No="assets/kenney/dungeon/",yR=6/1.1,_R=2.3,MR=new A(1.8,yR,1.8),bR=new A(1,2.4,1),SR=1.4,ER=1.3,TR=1.15,wR=2.6,AR=1.15;async function RR(){let[i,e,t,n,s,r,o,a]=await Promise.all([Hi(No+"chest.glb"),Hi(No+"column.glb"),Hi(No+"barrel.glb"),Hi(No+"rocks.glb"),Hi(No+"stones.glb"),Hi(No+"wall-half.glb"),Hi(No+"banner.glb"),Hi(No+"trap.glb")]);Gi(i.scene,11568474);let l=i.scene.getObjectByName("lid");l&&Gi(l,Mg,{emissive:new re(Mg),emissiveIntensity:.22}),Gi(e.scene,9078135),Gi(t.scene,8017720),Gi(n.scene,7301724),Gi(s.scene,7498589),Gi(r.scene,4998969);let c=a.scene.getObjectByName("spikes");return Gi(a.scene,3945003),c&&Gi(c,9211014),{chest:i.scene,column:e.scene,barrel:t.scene,rocks:n.scene,stones:s.scene,wallHalf:r.scene,banner:o.scene,trap:a.scene}}function Ma(i,e,{x:t=0,y:n=0,z:s=0,ry:r=0,scale:o=1}={},a=null){let l=e.clone(!0);return l.position.set(t,n,s),l.rotation.y=r,typeof o=="number"?l.scale.setScalar(o):l.scale.copy(o),l.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),a!=null&&Gi(l,a),i.add(l),l}var me=null,Gn=new A,CR=new A;function et(i,e,t,n,s,r,o=0){let a=new st(i,e,t);return o&&a.rotateY(o),a.translate(n,s,r),a}function Rn(i,e,t,n,s,r,o){let a=new $t(i,e,t,n);return a.translate(s,r,o),a}function ba(i,e,t,n=24){let s=new es(i,e,6,n);return s.rotateX(Math.PI/2),s.translate(0,t,0),s}function Vn(i){let e=vr(i,!1);for(let t of i)t.dispose();return e}function Xt(i,e,t,n=!0){let s=new Xe(e,t);return s.castShadow=n,s.receiveShadow=n,i.add(s),s}async function PR(i){me={ctx:i,api:null,exts:[],rooms:[],prompt:null,savedGround:null,savedBounds:null,added:[],inside:!1,seq:null,enterCool:0},me.M={extStone:At(9078135),wall:At(4998969),floor:At(5985606),dark:At(2828323),door:At(7433048),mov:At(8222314),wood:At(7227951),gold:Ut(Mg,.35),glowAdd:new Nt({color:hs,transparent:!0,opacity:.55,blending:ln,depthWrite:!1}),padAdd:new Nt({color:hs,transparent:!0,opacity:.8,blending:ln,depthWrite:!1}),beamAdd:new Nt({color:11466216,transparent:!0,opacity:0,blending:ln,depthWrite:!1,side:dn}),orb:Ut(hs,2.3),candle:Ut(mR,2,{transparent:!0,opacity:.92})};try{me.assets=await RR()}catch(e){console.warn("[shrines] \u88C5\u98FE\u30E2\u30C7\u30EB\u306E\u8AAD\u8FBC\u306B\u5931\u6557\u3001\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u88C5\u98FE\u3067\u7D9A\u884C",e),me.assets=null}IR(i),DR(i),me.api={list:c_.map(e=>({pos:new A(e.x,i.world.getHeight(e.x,e.z),e.z),name:e.name,completed:!1})),completedCount:0,active:-1},i.shrines=me.api,i.on("state",({from:e,to:t})=>{me.inside&&e==="shrine"&&(t==="gameover"||t==="title")&&f_(i)})}function IR(i){let e=[];e.push(Rn(6.4,6.9,.55,8,0,.28,0)),e.push(Rn(5.3,5.8,.55,8,0,.82,0)),e.push(Rn(4.4,4.9,.5,8,0,1.32,0)),e.push(Rn(3.1,3.4,3,8,0,3.07,0)),e.push(et(.5,3.2,.5,-1.45,3.15,3)),e.push(et(.5,3.2,.5,1.45,3.15,3)),e.push(et(3.7,.55,.72,0,4.95,3)),e.push(Rn(4.2,4.2,.18,8,0,4.62,0));let t=[new J(4.2,0),new J(3.55,.38),new J(2.75,1.05),new J(1.9,1.85),new J(1.1,2.55),new J(.5,3.05),new J(.05,3.42)],n=new Jr(t,8);n.translate(0,4.7,0),e.push(n);for(let f of[-1,1])e.push(Rn(.24,.36,1.15,6,f*3.4,.58,5.2)),e.push(Rn(.58,.4,.32,6,f*3.4,1.3,5.2));let s=Vn(e),r=[];r.push(et(2,2.7,.14,0,2.78,3.02)),r.push(ba(3.42,.07,4.25)),r.push(ba(4.58,.05,1.62)),r.push(ba(4.24,.05,4.56));for(let f=1;f<=7;f++){let d=et(.15,1.9,.1,0,3,3.02);d.rotateY(f*Math.PI/4),r.push(d)}let o=new $r(1.25,20);o.rotateX(-Math.PI/2),o.translate(0,.06,5.2),r.push(o);let a=new Et(.36,10,8);a.translate(0,8.3,0),r.push(a),r.push(ba(.52,.05,7.9,16));let l=Vn(r),c=[];for(let f of[-1,1])c.push(Rn(.02,.32,.85,6,f*3.4,1.9,5.2)),c.push(Rn(.01,.16,.5,5,f*3.4,2.28,5.2));let h=Vn(c),u=new $t(.24,.36,56,8,1,!0);u.translate(0,32,0);for(let f=0;f<4;f++){let d=c_[f],g=i.world.getHeight(d.x,d.z),x=Math.hypot(d.x,d.z)||1,m=-d.x/x,p=-d.z/x,y=Math.atan2(m,p),_=new ze;_.position.set(d.x,g,d.z),_.rotation.y=y;let v=Ut(hs,1.3),L=Ut(6089435,1.8,{transparent:!0,opacity:.9}),E=new Nt({color:hs,transparent:!0,opacity:.1,blending:ln,depthWrite:!1,side:dn});Xt(_,s,me.M.extStone),Xt(_,l,v,!1),Xt(_,h,L,!1),_.add(new Xe(u,E)),i.scene.add(_),i.colliders.push({x:d.x,z:d.z,radius:5.9,height:9});for(let w of[-1,1]){let P=w*3.4,b=5.2;i.colliders.push({x:d.x+P*Math.cos(y)+b*Math.sin(y),z:d.z-P*Math.sin(y)+b*Math.cos(y),radius:.62,height:2.2})}me.exts.push({group:_,runeMat:v,flameMat:L,beaconMat:E,doorPos:new A(d.x+m*3.1,g,d.z+p*3.1),exitPos:new A(d.x+m*7.6,g,d.z+p*7.6),exitHeading:Math.atan2(m,p)})}}function LR(i){let e=me.exts[i];e.runeMat.color.setHex(Uo),e.runeMat.emissive.setHex(Uo),e.flameMat.color.setHex(16762965),e.flameMat.emissive.setHex(16762965),e.beaconMat.color.setHex(Uo)}function DR(i){for(let e=0;e<4;e++){let t=new A(gR,0,xR+e*vR),n=new ze;n.position.copy(t),n.visible=!1,i.scene.add(n);let s=e===3?-16.4:-20.4,r={index:e,group:n,origin:t,northZ:s,bounds:{minX:t.x-12.55,maxX:t.x+12.55,minZ:t.z+s+.85,maxZ:t.z+16.05},colliders:[],doorCol:null,door:null,doorOpen:!1,doorAnim:0,doorDelay:0,chest:null,chestWorld:null,solved:!1,p:null,entranceWorld:new A(t.x,0,t.z+11),padWorld:new A(t.x,0,t.z+13.8),ground:null,update:null,resetPuzzle:null,promptOf:null};NR(i,r),e===0?BR(i,r):e===1?GR(i,r):e===2?WR(i,r):qR(i,r);for(let o of[-10.5,10.5])for(let a of[9,0,-8.5])e===3&&a!==9||r.colliders.push({x:t.x+o,z:t.z+a,radius:.95,height:6});me.rooms.push(r)}}function NR(i,e){let t=e.index,n=e.group,s=me.M,r=e.northZ,o=[],a=[],l=[];t===2?(o.push(et(26,1,19,0,-.5,7.5)),o.push(et(26,1,13,0,-.5,-13.5)),a.push(et(26,.5,5.4,0,-6.75,-4.5)),a.push(et(26,5.4,.45,0,-3.5,-1.78)),a.push(et(26,5.4,.45,0,-3.5,-7.22))):t===3?(o.push(et(26,1,11,0,-.5,11.5)),o.push(et(8,1.7,4,-6,-.85,-14)),o.push(et(8,1.7,4,6,-.85,-14)),a.push(et(26,.4,23.4,0,-3.1,-5.5))):o.push(et(26,1,37,0,-.5,-1.5));let c=16.9-r,h=(16.9+r)/2;if(o.push(et(27.6,6,.8,0,3,16.9)),o.push(et(27.6,6,.8,0,3,r)),o.push(et(.8,6,c,-13.4,3,h)),o.push(et(.8,6,c,13.4,3,h)),t!==3){o.push(et(11.35,6,.9,-7.33,3,-10)),o.push(et(11.35,6,.9,7.33,3,-10)),o.push(et(4.2,1.5,.9,0,5.25,-10));for(let E of[-1,1])for(let w of[2.6,4.8,7,9.2,11.4])e.colliders.push({x:e.origin.x+E*w,z:e.origin.z-10,radius:1.15,height:6})}for(let E of[-10.5,10.5])for(let w of[9,0,-8.5]){if(t===3&&w!==9)continue;me.assets?Ma(n,me.assets.column,{x:E,y:0,z:w,scale:MR}):(o.push(Rn(.5,.66,6,7,E,2.5,w)),o.push(et(1.5,.35,1.5,E,5.62,w)));let P=ba(.62,.05,4.7,16);P.translate(E,0,w),l.push(P)}l.push(et(.08,.1,c-1,-12.96,2.6,h)),l.push(et(.08,.1,c-1,12.96,2.6,h)),l.push(et(25.6,.1,.08,0,2.6,r+.44)),l.push(et(25.6,.1,.08,0,2.6,16.46)),l.push(et(26.4,.14,.14,0,-.95,16.9)),l.push(et(26.4,.14,.14,0,-.95,r)),l.push(et(.14,.14,c,-13.2,-.95,h)),l.push(et(.14,.14,c,13.2,-.95,h)),Xt(n,Vn(o),t===3?s.wall:s.floor),a.length&&Xt(n,Vn(a),s.dark,!1),Xt(n,Vn(l),s.glowAdd,!1);let u=new Yn(26,37);u.rotateX(-Math.PI/2),u.translate(0,.03,-1.5);let f=new Nt({map:zR(t),transparent:!0,opacity:.9,blending:ln,depthWrite:!1});Xt(n,u,f,!1);let d=new Yn(5,5);d.translate(0,3.1,r+.46),Xt(n,d,OR(),!1);let g=h_,x=new xr(g[t],60,36,2);x.position.set(0,6,t===3?-4:2),n.add(x);let m=new xr(16767392,26,18,2);m.position.set(t===3?6:0,4.2,t===3?-13:-15),n.add(m);let p=new yl(.95,1.3,28);p.rotateX(-Math.PI/2),p.translate(0,.04,13.8);let y=new $r(.52,20);y.rotateX(-Math.PI/2),y.translate(0,.04,13.8),Xt(n,Vn([p,y]),s.padAdd,!1);let _=new $t(.9,1.15,5.5,12,1,!0);if(_.translate(0,2.8,13.8),Xt(n,_,new Nt({color:hs,transparent:!0,opacity:.05,blending:ln,depthWrite:!1,side:dn}),!1),t!==3){let E=Xt(n,new st(3.3,4.6,.55),s.door);E.position.set(0,2.3,-10);let w=new Xe(et(1.7,2.7,.62,0,.1,0),s.glowAdd);E.add(w),e.door=E,e.doorCol={x:e.origin.x,z:e.origin.z-10,radius:1.75,height:5.5}}let v=t===3?6:0,L=t===3?-14:-15.5;Xt(n,Rn(1.7,1.95,.4,8,v,.2,L),s.floor),e.chest=FR(n,v,L,t===3?-Math.PI/2:0),e.chestWorld=new A(e.origin.x+v,.6,e.origin.z+L),e.colliders.push({x:e.origin.x+v,z:e.origin.z+L,radius:.85,height:1.6}),me.assets&&UR(e,t)}function UR(i,e){let t=i.group;for(let n of[-1,1])Ma(t,me.assets.barrel,{x:n*11.5,y:0,z:13.4,ry:n*.4,scale:SR}),Ma(t,me.assets.rocks,{x:n*10.6,y:0,z:15.3,ry:n*1.1,scale:ER}),Ma(t,me.assets.stones,{x:n*9.4,y:0,z:11.6,ry:-n*.6,scale:TR});for(let n of[-1,1])for(let s of[7.6,12.4])Ma(t,me.assets.wallHalf,{x:n*12.75,y:0,z:s,ry:n>0?Math.PI:0,scale:bR});if(e!==3)for(let n of[-1,1])Ma(t,me.assets.banner,{x:n*4.1,y:1.5,z:-9.52,ry:0,scale:wR},h_[e])}function zR(i){return ki(512,(e,t)=>{let n=l=>(l+13)/26*t,s=l=>(l+20)/37*t;e.fillStyle="#000",e.fillRect(0,0,t,t);let r=(l,c,h,u=.5,f=2)=>{e.strokeStyle=`rgba(90,235,215,${u})`,e.lineWidth=f,e.beginPath(),e.ellipse(n(l),s(c),h/26*t,h/37*t,0,0,Math.PI*2),e.stroke()},o=i===3?11:2;r(0,o,4.5,.55,3),r(0,o,3.6,.35,2),r(0,o,1.2,.4,2),e.fillStyle="rgba(90,235,215,0.5)";for(let l=0;l<8;l++){let c=l*Math.PI/4;e.fillRect(n(Math.sin(c)*4)-3,s(o+Math.cos(c)*2.8)-3,6,6)}if(r(0,13.8,2,.4,2),i===0){e.strokeStyle="rgba(90,235,215,0.28)",e.lineWidth=1.5;for(let l=-4;l<=4;l++){let c=(l+.5)*1.6;e.beginPath(),e.moveTo(n(-5.6),s(1+c)),e.lineTo(n(5.6),s(1+c)),e.stroke(),e.beginPath(),e.moveTo(n(c),s(1-5.6)),e.lineTo(n(c),s(1+5.6)),e.stroke()}}else if(i===1)for(let l of[-4.5,0,4.5])r(l,-3.4,1,.5,2);else i===2&&(r(-5,6,1.3,.55,2),r(-3.5,-8.6,1.3,.55,2));e.fillStyle="rgba(90,235,215,0.4)",e.font=`${Math.floor(t*.045)}px serif`;let a="\u53E4\u306E\u529B\u3053\u3053\u306B\u7720\u308B";for(let l=0;l<8;l++){let c=l*Math.PI/4+.4;e.fillText(a[l],n(Math.sin(c)*10.5),s(o+Math.cos(c)*5.5))}})}var id=null;function OR(){if(id)return id;let i=ki(256,(e,t)=>{e.fillStyle="#000",e.fillRect(0,0,t,t),e.strokeStyle="rgba(110,240,220,0.85)",e.lineWidth=5,e.beginPath(),e.arc(t/2,t/2,t*.38,0,Math.PI*2),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(t/2,t/2,t*.3,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(t/2,t*.2),e.lineTo(t*.68,t/2),e.lineTo(t/2,t*.8),e.lineTo(t*.32,t/2),e.closePath(),e.stroke(),e.fillStyle="rgba(110,240,220,0.9)",e.beginPath(),e.moveTo(t/2,t*.38),e.lineTo(t*.58,t/2),e.lineTo(t/2,t*.62),e.lineTo(t*.42,t/2),e.closePath(),e.fill()});return id=new Nt({map:i,transparent:!0,opacity:.85,blending:ln,depthWrite:!1}),id}function FR(i,e,t,n){let s=me.M,r=new ze;r.position.set(e,.4,t),r.rotation.y=n,i.add(r);let o;if(me.assets){let h=me.assets.chest.clone(!0).children[0];h.scale.setScalar(_R),h.position.set(0,0,0),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),r.add(h),o=h.getObjectByName("lid")}else Xt(r,et(1.15,.6,.75,0,.3,0),s.wood),Xt(r,Vn([et(.14,.64,.79,-.3,.3,0),et(.14,.64,.79,.3,.3,0),et(.2,.24,.08,0,.52,.38)]),s.gold),o=new ze,o.position.set(0,.6,-.375),r.add(o),Xt(o,et(1.15,.3,.75,0,.15,.375),s.wood),Xt(o,Vn([et(.14,.34,.79,-.3,.15,.375),et(.14,.34,.79,.3,.15,.375)]),s.gold);let a=new ra(.3,0);a.scale(1,1.4,1);let l=new Xe(a,s.orb);l.position.set(0,.5,0),l.visible=!1,r.add(l);let c=new Xe(new $t(.5,.72,7.5,12,1,!0),s.beamAdd);return c.position.set(0,3.9,0),c.visible=!1,r.add(c),{group:r,lid:o,orb:l,beam:c,opened:!1}}var sd=1.6;function Rs(i){return i*sd}function Cs(i){return 1+i*sd}function BR(i,e){let t=e.group,n=e.p={cellX:2,cellZ:2,startX:2,startZ:2,swX:-2,swZ:-2,obstacles:[[0,0],[-1,1],[1,2]],grabbed:!1,slide:null,cool:0},s=[];for(let[l,c]of n.obstacles)s.push(et(1.35,1.5,1.35,Rs(l),.75,Cs(c))),s.push(et(1.05,.4,1.05,Rs(l),1.65,Cs(c))),e.colliders.push({x:e.origin.x+Rs(l),z:e.origin.z+Cs(c),radius:.95,height:1.9});Xt(t,Vn(s),me.M.wall),n.swMat=Ut(hs,.45),Xt(t,new st(1.45,.1,1.45),n.swMat,!1).position.set(Rs(n.swX),.05,Cs(n.swZ));let o=new ze;Xt(o,new st(1.2,1.2,1.2),me.M.mov);let a=[];for(let l=0;l<4;l++){let c=et(.46,.46,.06,0,0,.61);c.rotateZ(Math.PI/4),c.rotateY(l*Math.PI/2),a.push(c)}Xt(o,Vn(a),me.M.glowAdd,!1),o.position.set(Rs(n.cellX),.6,Cs(n.cellZ)),t.add(o),n.block=o,n.blockCol={x:e.origin.x+o.position.x,z:e.origin.z+o.position.z,radius:.8,height:1.4},e.colliders.push(n.blockCol),e.ground=()=>0,e.resetPuzzle=()=>{n.cellX=n.startX,n.cellZ=n.startZ,n.grabbed=!1,n.slide=null,n.block.position.set(Rs(n.cellX),.6,Cs(n.cellZ)),n.blockCol.x=e.origin.x+n.block.position.x,n.blockCol.z=e.origin.z+n.block.position.z,n.swMat.emissiveIntensity=.45,n.swMat.color.setHex(hs),n.swMat.emissive.setHex(hs)},e.update=(l,c)=>HR(l,e,c),e.promptOf=l=>{if(e.solved)return null;if(n.grabbed)return"E: \u96E2\u3059 / WASD: \u62BC\u3057\u5F15\u304D";let c=l.player.position,h=c.x-(e.origin.x+n.block.position.x),u=c.z-(e.origin.z+n.block.position.z);return h*h+u*u<1.75*1.75?"E: \u77F3\u584A\u3092\u63B4\u3080":null}}function kR(i,e,t){if(Math.abs(e)>3||Math.abs(t)>3)return!0;for(let[n,s]of i.obstacles)if(n===e&&s===t)return!0;return!1}function HR(i,e,t){let n=e.p,s=i.player;if(n.cool=Math.max(0,n.cool-t),n.slide){let r=n.slide;r.t=Math.min(1,r.t+t/.5);let o=je(0,1,r.t),a=_e(Rs(r.fx),Rs(r.tx),o),l=_e(Cs(r.fz),Cs(r.tz),o);n.block.position.set(a,.6,l),n.blockCol.x=e.origin.x+a,n.blockCol.z=e.origin.z+l,s.position.x=r.pfx+(Rs(r.tx)-Rs(r.fx))*o,s.position.z=r.pfz+(Cs(r.tz)-Cs(r.fz))*o,s.position.y=0,r.t>=1&&(n.cellX=r.tx,n.cellZ=r.tz,n.slide=null,n.cool=.06,!e.solved&&n.cellX===n.swX&&n.cellZ===n.swZ&&(e.solved=!0,n.grabbed=!1,s.setFrozen(!1),n.swMat.emissiveIntensity=2.2,n.swMat.color.setHex(Uo),n.swMat.emissive.setHex(Uo),Gn.set(e.origin.x+a,1.4,e.origin.z+l),i.effects.burst(Gn,"magic"),i.audio.play("switch"),e.doorDelay=.5));return}if(!e.solved){if(n.grabbed){if(i.input.justPressed("KeyE")){n.grabbed=!1,s.setFrozen(!1);return}if(n.cool>0)return;i.camera.getWorldDirection(Ne.v1);let r=0,o=0;Math.abs(Ne.v1.x)>Math.abs(Ne.v1.z)?r=Math.sign(Ne.v1.x):o=Math.sign(Ne.v1.z);let a=-o,l=r,c=i.input.keys,h=0,u=0;if(c.has("KeyW")||c.has("ArrowUp")?(h=r,u=o):c.has("KeyS")||c.has("ArrowDown")?(h=-r,u=-o):c.has("KeyD")||c.has("ArrowRight")?(h=a,u=l):(c.has("KeyA")||c.has("ArrowLeft"))&&(h=-a,u=-l),h===0&&u===0)return;let f=n.cellX+h,d=n.cellZ+u;if(kR(n,f,d))return;let g=s.position.x-e.origin.x+h*sd,x=s.position.z-e.origin.z+u*sd;if(g<-11.6||g>11.6||x<-8.7||x>14.5)return;for(let[m,p]of n.obstacles)if(Math.abs(g-Rs(m))<1.05&&Math.abs(x-Cs(p))<1.05)return;n.slide={fx:n.cellX,fz:n.cellZ,tx:f,tz:d,t:0,pfx:s.position.x,pfz:s.position.z},i.audio.play("switch");return}if(i.input.justPressed("KeyE")){let r=s.position.x-(e.origin.x+n.block.position.x),o=s.position.z-(e.origin.z+n.block.position.z);r*r+o*o<1.75*1.75&&s.onGround&&(n.grabbed=!0,s.setFrozen(!0),i.audio.play("ui"))}}}function GR(i,e){let t=e.group,n=[-4.5,0,4.5],s=e.p={xs:n,order:[1,2,0],progress:0,lit:[!1,!1,!1],demoT:0,wrongT:0,flames:[],runeMats:[]},r=[];for(let o=0;o<3;o++){let a=n[o];r.push(Rn(.34,.46,.25,7,a,.12,-5.5)),r.push(Rn(.09,.15,1.25,6,a,.85,-5.5)),r.push(Rn(.34,.16,.26,7,a,1.55,-5.5));let l=new Nt({color:hs,transparent:!0,opacity:.08,blending:ln,depthWrite:!1}),c=new $r(.85,22);c.rotateX(-Math.PI/2);let h=new Xe(c,l);h.position.set(a,.05,-3.4),t.add(h),s.runeMats.push(l);let u=new Xe(Vn([Rn(.02,.24,.62,6,0,.3,0),Rn(.01,.12,.36,5,0,.55,0)]),me.M.candle);u.position.set(a,1.72,-5.5),u.visible=!1,t.add(u),s.flames.push(u),e.colliders.push({x:e.origin.x+a,z:e.origin.z-5.5,radius:.5,height:2})}Xt(t,Vn(r),me.M.gold),e.ground=()=>0,e.resetPuzzle=()=>{s.progress=0,s.demoT=0,s.wrongT=0;for(let o=0;o<3;o++)s.lit[o]=!1,s.flames[o].visible=!1,s.runeMats[o].opacity=.08,s.runeMats[o].color.setHex(hs)},e.update=(o,a)=>VR(o,e,a),e.promptOf=o=>{if(e.solved)return null;let a=u_(e,o.player.position);return a>=0&&!s.lit[a]?"E: \u71ED\u53F0\u306B\u706B\u3092\u706F\u3059":null}}function u_(i,e){let t=i.p,n=-1,s=1.7*1.7;for(let r=0;r<3;r++){let o=e.x-(i.origin.x+t.xs[r]),a=e.z-(i.origin.z-5.5),l=o*o+a*a;l<s&&(s=l,n=r)}return n}function VR(i,e,t){let n=e.p,s=i.time.elapsed;for(let r=0;r<3;r++)if(n.flames[r].visible){let o=1+Math.sin(s*10.5+r*2.1)*.14;n.flames[r].scale.set(o,1+Math.sin(s*7.7+r)*.1,o)}if(!e.solved){if(n.wrongT>0){n.wrongT-=t;let r=Ae(n.wrongT/.8,0,1);for(let o of n.runeMats)o.color.setHex(16733768),o.opacity=.15+.5*r*Math.abs(Math.sin(s*14));if(n.wrongT<=0){for(let o of n.runeMats)o.color.setHex(hs),o.opacity=.08;n.demoT=-.8}return}if(n.progress===0){n.demoT+=t;let r=3+1.8,o=(n.demoT%r+r)%r,a=Math.floor(o/1);for(let l=0;l<3;l++){let c=.08;if(n.demoT>=0&&a<3&&n.order[a]===l){let h=o-a;c=.1+.85*Math.sin(Ae(h/.75,0,1)*Math.PI)}n.runeMats[l].opacity=c}}else for(let r=0;r<3;r++)n.runeMats[r].opacity=n.lit[r]?.7:.08;if(i.input.justPressed("KeyE")){let r=u_(e,i.player.position);if(r>=0&&!n.lit[r])if(r===n.order[n.progress]){if(n.lit[r]=!0,n.flames[r].visible=!0,n.progress++,i.audio.play("torch"),Gn.set(e.origin.x+n.xs[r],1.9,e.origin.z-5.5),i.effects.burst(Gn,"fire",{count:8}),n.progress>=3){e.solved=!0;for(let o of n.runeMats)o.opacity=.75,o.color.setHex(Uo);e.doorDelay=.6,i.audio.play("orb")}}else{for(let o=0;o<3;o++)n.lit[o]=!1,n.flames[o].visible=!1;n.progress=0,n.wrongT=.8,i.audio.play("uiBack")}}}}function WR(i,e){let t=e.group,n=e.p={platX:0,holding:!1,orbHome:new A(-5,1.5,6),orbGoal:new A(-3.5,1.55,-8.6),prevPX:0,prevPZ:0,prevValid:!1,fallCool:0},s=new ze;Xt(s,et(3,.5,5.4,0,-.25,0),me.M.mov),Xt(s,Vn([et(.12,.06,5.4,-1.44,.02,0),et(.12,.06,5.4,1.44,.02,0)]),me.M.glowAdd,!1),s.position.set(0,0,-4.5),t.add(s),n.plat=s;let r=[];for(let[c,h]of[[-5,6],[-3.5,-8.6]])r.push(Rn(.4,.56,1.15,7,c,.58,h)),r.push(Rn(.55,.42,.18,7,c,1.22,h)),e.colliders.push({x:e.origin.x+c,z:e.origin.z+h,radius:.62,height:1.5});Xt(t,Vn(r),me.M.floor);let o=ba(.5,.04,1.32,16);o.translate(-5,0,6);let a=ba(.5,.04,1.37,16);a.translate(-3.5,0,-8.6),Xt(t,Vn([o,a]),me.M.glowAdd,!1);let l=new Xe(new Et(.32,12,10),me.M.orb);l.position.copy(n.orbHome),t.add(l),n.orb=l,e.ground=(c,h)=>{let u=c-e.origin.x,f=h-e.origin.z;return f<-2&&f>-7?Math.abs(u-n.platX)<1.55?0:-6.5:0},e.resetPuzzle=()=>{n.holding=!1,n.orb.position.copy(n.orbHome),n.fallCool=0,n.prevValid=!1},e.update=(c,h)=>XR(c,e,h),e.promptOf=c=>{if(e.solved)return null;let h=c.player.position;if(n.holding){let d=h.x-(e.origin.x+n.orbGoal.x),g=h.z-(e.origin.z+n.orbGoal.z);return d*d+g*g<4?"E: \u73E0\u3092\u53F0\u5EA7\u3078\u7F6E\u304F":"E: \u73E0\u3092\u7F6E\u304F"}let u=h.x-(e.origin.x+n.orb.position.x),f=h.z-(e.origin.z+n.orb.position.z);return u*u+f*f<1.8*1.8?"E: \u5149\u306E\u73E0\u3092\u6301\u3064":null}}function XR(i,e,t){let n=e.p,s=i.player,r=i.time.elapsed;if(n.fallCool=Math.max(0,n.fallCool-t),n.holding&&n.prevValid){let l=s.position.x-n.prevPX,c=s.position.z-n.prevPZ;s.position.x=n.prevPX+l*.8,s.position.z=n.prevPZ+c*.8,s.velocity.y>0&&(s.velocity.y=0,s.position.y=i.getGroundHeight(s.position.x,s.position.z))}let o=n.platX;n.platX=Math.sin(r*(Math.PI*2/7))*6.5,n.plat.position.x=n.platX;let a=n.platX-o;{let l=s.position.x-e.origin.x,c=s.position.z-e.origin.z;s.position.y<.25&&c<-1.7&&c>-7.3&&Math.abs(l-o)<1.95&&(s.position.x+=a)}if(n.holding&&n.orb.position.set(s.position.x-e.origin.x,s.position.y+2.2+Math.sin(r*3.1)*.09,s.position.z-e.origin.z),n.orb.rotation.y+=t*.8,s.position.y<-2.2&&n.fallCool<=0){n.fallCool=1,i.ui.flash("#000000",.55),Gn.set(e.origin.x,0,e.origin.z+4),s.teleport(Gn,Math.PI),(n.holding||!e.solved&&n.orb.position.y<-1)&&(n.holding=!1,n.orb.position.copy(n.orbHome)),i.audio.play("roll");return}if(e.solved){n.prevValid=!1;return}if(i.input.justPressed("KeyE"))if(n.holding){let l=e.origin.x+n.orbGoal.x,c=e.origin.z+n.orbGoal.z,h=s.position.x-l,u=s.position.z-c;if(h*h+u*u<4)n.holding=!1,n.orb.position.copy(n.orbGoal),e.solved=!0,e.doorDelay=.5,Gn.set(l,2.2,c),i.effects.burst(Gn,"magic"),i.audio.play("orb");else{n.holding=!1;let f=s.position.x-e.origin.x,d=s.position.z-e.origin.z,g=e.ground(s.position.x,s.position.z);g<-1?n.orb.position.copy(n.orbHome):n.orb.position.set(f,g+.42,d),i.audio.play("ui")}}else{let l=s.position.x-(e.origin.x+n.orb.position.x),c=s.position.z-(e.origin.z+n.orb.position.z);l*l+c*c<1.8*1.8&&(n.holding=!0,i.audio.play("pickup"))}n.prevPX=s.position.x,n.prevPZ=s.position.z,n.prevValid=!0}function qR(i,e){let t=e.group,n=e.p={tiles:[],period:5.6,upDur:2.8,bridgeUp:!1,bridgeY:-2.8,lastSwing:-1,burnCool:0,crystalPos:new A(-6,1.9,-14)};n.lavaTex=ki(256,(h,u)=>{h.fillStyle="#802010",h.fillRect(0,0,u,u);let f=(()=>{let d=12345;return()=>(d=d*16807%2147483647)/2147483647})();for(let d=0;d<60;d++){let g=f()*u,x=f()*u,m=8+f()*30,p=h.createRadialGradient(g,x,0,g,x,m);p.addColorStop(0,"rgba(255,120,40,0.9)"),p.addColorStop(1,"rgba(160,40,15,0)"),h.fillStyle=p,h.beginPath(),h.arc(g,x,m,0,Math.PI*2),h.fill()}h.strokeStyle="rgba(255,220,120,0.8)",h.lineWidth=2.5;for(let d=0;d<12;d++){h.beginPath();let g=f()*u,x=f()*u;h.moveTo(g,x);for(let m=0;m<5;m++)g+=(f()-.5)*90,x+=(f()-.5)*90,h.lineTo(g,x);h.stroke()}}),n.lavaTex.wrapS=n.lavaTex.wrapT=Qn;let s=new Yn(26,23.4);s.rotateX(-Math.PI/2),s.translate(0,-.9,-5.5),n.lavaMat=new Nt({map:n.lavaTex,color:16756832}),Xt(t,s,n.lavaMat,!1);let r=new st(2.2,.8,2.2),o=Vn([et(2.3,.08,.14,0,0,-1.08),et(2.3,.08,.14,0,0,1.08),et(.14,.08,2.3,-1.08,0,0),et(.14,.08,2.3,1.08,0,0)]),a=[[0,4.4],[-1.9,2.3],[-.2,.2],[1.7,-1.8],[.2,-3.9],[-1.6,-5.9],[-3.2,-8.1],[-4.6,-10.4]];for(let h=0;h<a.length;h++){let[u,f]=a[h],d=Xt(t,r,me.M.mov);d.position.set(u,-3.4,f);let g=new Nt({color:16752720,transparent:!0,opacity:0,blending:ln,depthWrite:!1}),x=new Xe(o,g);x.position.set(u,-.82,f),t.add(x),n.tiles.push({x:u,z:f,mesh:d,frameMat:g,frame:x,topY:-3})}if(me.assets)for(let[h,u,f]of[[-8,6.8,.3],[-3,6.9,-.4],[3,6.9,.5],[8,6.8,-.2],[9,-15.2,.8],[-9,-15.2,-.6]])Ma(t,me.assets.trap,{x:h,y:0,z:u,ry:f,scale:AR});Xt(t,Vn([Rn(.42,.6,1.2,7,-6,.6,-14),Rn(.58,.44,.2,7,-6,1.3,-14)]),me.M.wall),n.crystalMat=Ut(9427199,1.5);let l=new ra(.42,0);l.scale(1,1.35,1),n.crystal=new Xe(l,n.crystalMat),n.crystal.position.set(-6,1.95,-14),t.add(n.crystal),e.colliders.push({x:e.origin.x-6,z:e.origin.z-14,radius:.66,height:1.6});let c=new ze;Xt(c,et(4.6,.5,2.6,0,-.25,0),me.M.mov),Xt(c,Vn([et(4.6,.06,.12,0,.02,-1.24),et(4.6,.06,.12,0,.02,1.24)]),me.M.glowAdd,!1),c.position.set(0,n.bridgeY,-14),t.add(c),n.bridge=c,e.ground=(h,u)=>{let f=h-e.origin.x,d=u-e.origin.z;if(d>=6)return 0;if(d>=-16&&d<=-12){let g=Math.abs(f);if(g>=2&&g<=10||g<2&&n.bridgeUp&&n.bridgeY>-.4)return 0}for(let g=0;g<n.tiles.length;g++){let x=n.tiles[g];if(x.topY>-.2&&Math.abs(f-x.x)<1.12&&Math.abs(d-x.z)<1.12)return Math.max(0,x.topY)}return-2.5},e.resetPuzzle=()=>{n.bridgeUp=!1,n.bridgeY=-2.8,n.bridge.position.y=n.bridgeY,n.crystalMat.color.setHex(9427199),n.crystalMat.emissive.setHex(9427199),n.crystalMat.emissiveIntensity=1.5,n.burnCool=0,n.lastSwing=-1},e.update=(h,u)=>YR(h,e,u),e.promptOf=h=>{if(e.solved)return null;let u=h.player.position.x-(e.origin.x-6),f=h.player.position.z-(e.origin.z-14);return u*u+f*f<2.6*2.6?"\u5263\u3067\u6C34\u6676\u3092\u53E9\u3051":null}}function YR(i,e,t){let n=e.p,s=i.player,r=i.time.elapsed;n.burnCool=Math.max(0,n.burnCool-t),n.lavaTex.offset.x=r*.012,n.lavaTex.offset.y=r*.008;let o=.85+Math.sin(r*1.7)*.15;n.lavaMat.color.setRGB(o,.55*o,.28*o);for(let l=0;l<n.tiles.length;l++){let c=n.tiles[l],h=((r+l*.7)%n.period+n.period)%n.period,u=h<n.upDur;c.topY=Ve(c.topY,u?0:-3,13,t),c.mesh.position.y=c.topY-.4,!u&&n.period-h<1.5?(c.frameMat.opacity=.25+.55*Math.abs(Math.sin(r*16)),c.frame.position.y=-.82):c.topY>-.3?(c.frameMat.opacity=.35,c.frame.position.y=c.topY+.04):c.frameMat.opacity=0}if(n.crystal.rotation.y+=t*1.2,n.crystal.position.y=1.95+Math.sin(r*2.3)*.08,e.solved||(n.crystalMat.emissiveIntensity=1.3+Math.sin(r*4)*.4),n.bridgeUp&&n.bridgeY<0&&(n.bridgeY=Math.min(0,n.bridgeY+t*3.2),n.bridge.position.y=n.bridgeY,n.bridgeY>=0&&(Gn.set(e.origin.x,.3,e.origin.z-14),i.effects.burst(Gn,"dust"),i.audio.play("switch"))),n.burnCool<=0&&s.position.y<-.55&&s.hp>0&&e.ground(s.position.x,s.position.z)<-2){n.burnCool=1.2,Gn.set(s.position.x,s.position.y,s.position.z),i.effects.burst(Gn,"fire"),i.audio.play("burn"),s.damage(.5,null),s.hp>0&&(Gn.set(e.origin.x,0,e.origin.z+8.5),s.teleport(Gn,Math.PI));return}if(e.solved)return;let a=s.getAttackHit();a&&a.swingId!==n.lastSwing&&(Gn.set(e.origin.x+n.crystalPos.x,n.crystal.position.y,e.origin.z+n.crystalPos.z),a.pos.distanceTo(Gn)<a.radius+.75&&(n.lastSwing=a.swingId,e.solved=!0,n.bridgeUp=!0,n.crystalMat.color.setHex(Uo),n.crystalMat.emissive.setHex(Uo),n.crystalMat.emissiveIntensity=3,i.effects.burst(Gn,"spark"),i.audio.play("switch"),i.camera3p.shake(.3)))}function ZR(i,e){typeof window<"u"&&(window.__shrDbg=(window.__shrDbg||0)+1,window.__shrS=me),!(!me||!me.api)&&(KR(i,e),me.enterCool=Math.max(0,me.enterCool-e),i.state==="playing"?jR(i,e):i.state==="shrine"&&me.api.active>=0&&tC(i,e))}function Xs(i,e){me.prompt!==e&&(me.prompt=e,i.ui.setPrompt(e))}function KR(i,e){let t=i.time.elapsed,n=i.time.isNight?.3:0;for(let s=0;s<4;s++){let r=me.exts[s];r.runeMat.emissiveIntensity=1.15+n+Math.sin(t*1.6+s*1.7)*.25,r.flameMat.emissiveIntensity=1.7+n+Math.sin(t*9.3+s*2.4)*.28+Math.sin(t*23.7+s)*.14,r.beaconMat.opacity=(i.time.isNight?.16:.05)+Math.sin(t*1.2+s)*.02}}function jR(i,e){let t=i.player.position,n=-1;for(let s=0;s<4;s++){let r=me.exts[s].doorPos,o=t.x-r.x,a=t.z-r.z;if(o*o+a*a<o_*o_){n=s;break}}n>=0?(Xs(i,"E: \u7960\u306B\u5165\u308B"),i.input.justPressed("KeyE")&&me.enterCool<=0&&JR(i,n)):me.prompt==="E: \u7960\u306B\u5165\u308B"&&Xs(i,null)}function JR(i,e){let t=me.rooms[e],n=me.api.list[e].completed;t.group.visible=!0,n?(t.solved=!0,t.door&&(t.doorOpen=!0,t.door.position.y=-2.75),t.index===3&&(t.p.bridgeUp=!0,t.p.bridgeY=0,t.p.bridge.position.y=0),t.chest.opened=!0,t.chest.lid.rotation.x=-2.05,t.chest.beam.visible=!0):(t.solved=!1,t.resetPuzzle(),QR(t),iC(t)),t.doorDelay=0,t.doorAnim=0,i.ui.flash("#000000",1),Xs(i,null),i.player.teleport(t.entranceWorld,Math.PI),i.setState("shrine"),i.sky.setOverride("shrine"),me.savedGround=i.getGroundHeight,me.savedBounds=i.playerBounds,i.getGroundHeight=t.ground,i.playerBounds=t.bounds,me.added.length=0;for(let s of t.colliders)i.colliders.push(s),me.added.push(s);t.doorCol&&!t.doorOpen&&(i.colliders.push(t.doorCol),me.added.push(t.doorCol)),me.api.active=e,me.inside=!0,me.enterCool=.5,i.audio.play("ui"),i.emit("shrine-enter",{index:e})}function $R(i){let e=me.api.active;if(e<0)return;let t=me.exts[e];f_(i),i.ui.flash("#000000",1),i.player.teleport(t.exitPos,t.exitHeading),i.setState("playing"),me.enterCool=.5,i.audio.play("ui")}function f_(i){let e=me.api.active;if(!me.inside||e<0)return;let t=me.rooms[e];for(let n of me.added){let s=i.colliders.indexOf(n);s>=0&&i.colliders.splice(s,1)}me.added.length=0,me.savedGround&&(i.getGroundHeight=me.savedGround),i.playerBounds=me.savedBounds,me.savedGround=null,me.savedBounds=null,i.sky.setOverride(null),t.group.visible=!1,t.p&&t.p.grabbed&&(t.p.grabbed=!1,i.player.setFrozen(!1)),me.seq&&(i.player.setFrozen(!1),me.seq=null),me.api.active=-1,me.inside=!1,Xs(i,null),i.emit("shrine-exit",{index:e})}function QR(i){i.doorOpen=!1,i.door&&(i.door.position.y=2.3)}function eC(i,e){if(e.doorOpen||!e.door)return;e.doorOpen=!0,e.doorAnim=1;let t=i.colliders.indexOf(e.doorCol);t>=0&&i.colliders.splice(t,1);let n=me.added.indexOf(e.doorCol);n>=0&&me.added.splice(n,1),i.audio.play("switch"),i.camera3p.shake(.25),Gn.set(e.origin.x,.4,e.origin.z-10),i.effects.burst(Gn,"dust")}function tC(i,e){let t=me.rooms[me.api.active],n=i.time.elapsed;if(me.M.padAdd.opacity=.6+Math.sin(n*2.6)*.22,t.doorDelay>0&&(t.doorDelay-=e,t.doorDelay<=0&&eC(i,t)),t.door&&t.doorAnim>0&&(t.door.position.y=Math.max(-2.75,t.door.position.y-e*4.2),t.door.position.y<=-2.75&&(t.doorAnim=0)),t.update(i,e),me.seq){sC(i,t,e),Xs(i,null);return}let s=i.player.position,r=t.p&&t.p.grabbed;if(!r){let c=s.x-t.padWorld.x,h=s.z-t.padWorld.z;if(c*c+h*h<a_*a_){Xs(i,"E: \u7960\u3092\u51FA\u308B"),i.input.justPressed("KeyE")&&me.enterCool<=0&&$R(i);return}}let o=t.chest;if(!o.opened&&(t.index===3?t.p.bridgeUp&&t.p.bridgeY>=0:t.doorOpen)&&!r){let c=s.x-t.chestWorld.x,h=s.z-t.chestWorld.z;if(c*c+h*h<2.3*2.3){Xs(i,"E: \u5B9D\u7BB1\u3092\u958B\u3051\u308B"),i.input.justPressed("KeyE")&&nC(i,t);return}}let l=t.promptOf(i);if(l){Xs(i,l);return}if(o.opened){Xs(i,"\u5165\u53E3\u306E\u5149\u308B\u5186\u9663\u304B\u3089\u7960\u3092\u51FA\u3088\u3046");return}Xs(i,null)}function nC(i,e){e.chest.opened=!0,me.seq={t:0,granted:!1,heartDue:!1,burstDone:!1},i.player.setFrozen(!0),i.audio.play("chest")}function iC(i){let e=i.chest;e.opened=!1,e.lid.rotation.x=0,e.orb.visible=!1,e.orb.scale.set(1,1,1),e.orb.position.set(0,.5,0),e.beam.visible=!1}function l_(i,e){return CR.set(i.chestWorld.x,e,i.chestWorld.z)}function sC(i,e,t){let n=me.seq,s=e.chest;n.t+=t;let r=n.t;if(s.lid.rotation.x=-2.05*je(0,.55,r),r>=.25&&(n.burstDone||(n.burstDone=!0,s.beam.visible=!0,i.effects.burst(l_(e,1.2),"orb")),me.M.beamAdd.opacity=r<2.2?Math.min(.5,(r-.25)*.9):Math.max(.14,.5-(r-2.2)*.8)),r>=.5){s.orb.visible=!0;let o=Ae((r-.5)/1.5,0,1);s.orb.position.y=.5+o*1.85,s.orb.rotation.y+=t*3.2;let a=Math.min(1,(r-.5)*3),l=r>2.05?Math.max(0,1-(r-2.05)/.55):1;s.orb.scale.setScalar(Math.max(.001,a*l))}if(r>=2&&!n.granted){n.granted=!0;let o=e.index,a=i.player;a.spiritOrbs++,a.heal(a.maxHp),me.api.list[o].completed=!0,me.api.completedCount++,LR(o),n.heartDue=a.spiritOrbs%2===0,i.audio.play("orb"),i.effects.burst(l_(e,2.4),"heal"),i.ui.showMessage("\u6C17\u306E\u73E0\u3092\u624B\u306B\u5165\u308C\u305F",{sub:"\u7960\u306E\u52A0\u8B77\u304C\u52C7\u8005\u306B\u5BBF\u308B"}),i.emit("shrine-complete",{index:o})}r>=2.7&&(s.orb.visible=!1,n.heartDue&&(i.player.addMaxHeart(),i.ui.showMessage("\u547D\u306E\u5668\u304C\u6E80\u3061\u305F",{sub:"\u30CF\u30FC\u30C8\u306E\u5668\u304C\u3072\u3068\u3064\u5897\u3048\u305F"}),i.audio.play("heart")),i.player.setFrozen(!1),me.seq=null)}var cd={};Ns(cd,{init:()=>uC,update:()=>CC});var le=null,Ys,Ah,jl,ld,wa,bg,Oo,Sg,Kt={minX:-55,maxX:55,minZ:-650,maxZ:-505},jt,Wn,Sa,qi,zo,d_=[],Th=[],ad,Aa,Cr,Ea,Rr,Ir,Ks,Ra,Yi=null,Zs=new A(0,0,-580),Rh=[],Ch=[],en=null,Cn=0,Ps=0,Lr=!1,Is=1,wh=!1,qs=!1,Ta=0,V={state:"idle",t:0,cd:1.6,heading:0,speedMul:1,clawCd:0,chargeCd:0,slamCd:0,flameCd:0,dashDir:new A,dashRemain:1,hitDone:!1,clawHitDone:!1,fired:!1,leapFrom:new A,leapTo:new A,gaitT:0,moveAmt:0},vt={pitch:0,roll:0,y:0,headP:0,headY:0,jaw:.06,crouch:0,paw:0,maw:.4,eyes:2.4},Re={pitch:0,roll:0,y:0,headP:0,headY:0,jaw:.06,crouch:0,paw:0,maw:.4,eyes:2.4},Pr=(i,e)=>le.getGroundHeight(i,e),p_=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,rC=`
varying vec2 vUv;
uniform float uTime, uBreak;
void main(){
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float a = atan(p.y, p.x);
  float swirl  = sin(a * 3.0 + uTime * 1.6 - r * 9.0) * 0.5 + 0.5;
  float swirl2 = sin(a * 5.0 - uTime * 2.4 + r * 14.0) * 0.5 + 0.5;
  float core = smoothstep(1.0, 0.15, r);
  vec3 deep = vec3(0.07, 0.02, 0.13);
  vec3 vio  = vec3(0.42, 0.12, 0.72);
  vec3 mag  = vec3(0.85, 0.38, 1.0);
  vec3 col = mix(deep, vio, swirl * core) + mag * pow(swirl2 * core, 3.0) * 0.85;
  float rim = smoothstep(0.70, 0.97, r) * smoothstep(1.06, 0.97, r);
  col += mag * rim * 1.7;
  float alpha = core * (0.62 + 0.32 * swirl) + rim * 0.95;
  float n = 0.5 + 0.5 * sin(p.x * 21.0 + uTime * 2.0) * sin(p.y * 17.0 - uTime * 2.6);
  alpha *= 1.0 - smoothstep(0.0, 0.25, uBreak * 1.35 - (n * 0.72 + r * 0.28));
  gl_FragColor = vec4(col * (1.0 + uBreak * 2.2), alpha);
}
`,oC=`
varying vec2 vUv;
uniform float uTime;
void main(){
  float y = vUv.y;
  float band = sin(y * 22.0 - uTime * 2.1) * 0.5 + 0.5;
  float weave = sin(vUv.x * 90.0 + uTime * 0.8) * sin(y * 36.0 - uTime * 1.4) * 0.5 + 0.5;
  float a = (1.0 - y) * (1.0 - y) * 0.30 + band * 0.05 + weave * 0.04;
  gl_FragColor = vec4(vec3(0.55, 0.26, 0.92), a * 0.55);
}
`;function aC(i){Ah=new Dt({uniforms:{uTime:{value:0},uBreak:{value:0}},vertexShader:p_,fragmentShader:rC,transparent:!0,depthWrite:!1,side:dn}),Ys=new Xe(new Yn(15,11),Ah),Ys.position.set(i.x,i.y+5.2,i.z),le.scene.add(Ys),ld=Ut(11555071,1.7),jl=new Xe(new es(7,.17,8,56),ld),jl.scale.set(1.04,.72,1),jl.position.copy(Ys.position),le.scene.add(jl),bg=new Nt({color:9055202,transparent:!0,opacity:.3,side:dn,blending:ln,depthWrite:!1}),wa=new Xe(new yl(4.6,5.4,48),bg),wa.rotation.x=-Math.PI/2,wa.position.set(i.x,Pr(i.x,i.z+1.5)+.12,i.z+1.5),le.scene.add(wa)}function lC(){Sg=new Dt({uniforms:{uTime:{value:0}},vertexShader:p_,fragmentShader:oC,transparent:!0,depthWrite:!1,side:dn,blending:ln}),Oo=new ze,Oo.visible=!1;let i=Kt.maxX-Kt.minX,e=Kt.maxZ-Kt.minZ,t=10,n=(Kt.minX+Kt.maxX)/2,s=(Kt.minZ+Kt.maxZ)/2,r=(o,a,l,c)=>{let h=new Xe(new Yn(o,t),Sg);h.position.set(a,Pr(a,l)+t/2-.5,l),h.rotation.y=c,Oo.add(h)};r(i,n,Kt.minZ,0),r(i,n,Kt.maxZ,0),r(e,Kt.minX,s,Math.PI/2),r(e,Kt.maxX,s,Math.PI/2),le.scene.add(Oo)}function od(i,e){let t=new ze;t.position.set(i,-.35,e),Wn.add(t);let n=new ze;t.add(n),Q(new st(.62,1.2,.74),Cr,0,-.55,0,n);let s=new ze;s.position.set(0,-1.1,0),n.add(s),Q(new st(.46,1,.56),Ea,0,-.45,0,s),Q(new st(.64,.28,.82),Ea,0,-.95,.1,s);for(let r=-1;r<=1;r++){let o=Q(new rn(.09,.34,5),Rr,r*.19,-.97,.55,s);o.rotation.x=1.35}return{g:t,upper:n,lower:s}}function cC(){Cr=At(2366006,{emissive:0}),Ea=At(1380388),Rr=At(5720686),Ir=Ut(11816447,2.4),Ks=Ut(9055202,1.5),Ra=Ut(10498303,.4),jt=new ze,jt.visible=!1,jt.position.copy(Zs),le.scene.add(jt),Wn=new ze,Wn.position.y=2.5,jt.add(Wn),Q(new st(2.6,2,2.7),Cr,0,.15,1,Wn),Q(new st(2.2,1.7,2.7),Cr,0,-.05,-1.15,Wn),Q(new st(1.9,.9,1.7),Ea,0,1.25,.9,Wn);for(let r=0;r<4;r++){let o=Q(new rn(.26-r*.03,.95-r*.12,5),Rr,0,1.55-r*.16,1.35-r*1.05,Wn);o.rotation.x=-.35}let i=[[1.3,.35,1.2,.5,1,.3],[-1.3,.1,.6,.4,1.2,-.2],[1.1,-.2,-1,.35,.9,.4],[-1.1,.3,-1.5,.45,1.1,-.4],[.6,1.05,0,.4,.8,1.2],[-.5,-.85,.4,.35,.9,.9]];for(let[r,o,a,l,c,h]of i){let u=Q(new st(.07,l,c),Ks,r,o,a,Wn);u.rotation.z=h,u.castShadow=!1}Sa=new ze,Sa.position.set(0,.7,2.25),Wn.add(Sa);let e=Q(new st(1.1,1,1.5),Cr,0,.28,.5,Sa);e.rotation.x=-.35,qi=new ze,qi.position.set(0,.8,1.1),Sa.add(qi),Q(new st(1.15,.85,1.5),Cr,0,.1,.35,qi),Q(new st(.8,.48,.95),Ea,0,-.06,1.3,qi),Q(new rn(.07,.28,5),Rr,.26,-.34,1.55,qi).rotation.x=Math.PI,Q(new rn(.07,.28,5),Rr,-.26,-.34,1.55,qi).rotation.x=Math.PI,Q(new Et(.15,8,6),Ir,.36,.24,.95,qi).castShadow=!1,Q(new Et(.15,8,6),Ir,-.36,.24,.95,qi).castShadow=!1;for(let r of[1,-1]){let o=Q(new rn(.2,1.05,6),Rr,r*.46,.75,0,qi);o.rotation.z=-r*.55,o.rotation.x=.35;let a=Q(new rn(.12,.75,6),Rr,0,.75,0,o);a.rotation.z=-r*.5}zo=new ze,zo.position.set(0,-.3,.45),qi.add(zo),Q(new st(.74,.26,1.55),Ea,0,-.12,.7,zo),Q(new rn(.06,.24,5),Rr,.22,.06,1.35,zo),Q(new rn(.06,.24,5),Rr,-.22,.06,1.35,zo),Q(new st(.58,.14,1),Ra,0,.04,.65,zo).castShadow=!1,d_=[od(1.18,1.55),od(-1.18,1.55),od(1.05,-1.55),od(-1.05,-1.55)];let t=Wn,n=!0;Th=[];for(let r=0;r<5;r++){let o=new ze;o.position.set(0,n?.05:0,n?-2.35:-.9),t.add(o),Q(new st(.56-r*.08,.5-r*.07,1),r%2?Ea:Cr,0,0,-.5,o),Th.push(o),t=o,n=!1}let s=Q(new rn(.14,.7,5),Ks,0,0,-1.25,t);s.rotation.x=-Math.PI/2,s.castShadow=!1,Aa=new Nt({color:16723781,transparent:!0,opacity:0,blending:ln,depthWrite:!1,side:Tn}),ad=new Xe(new Et(3.5,18,12),Aa),ad.position.y=2.3,jt.add(ad)}function hC(){for(let t=0;t<2;t++){let n=Ut(10174719,2,{transparent:!0,opacity:.9}),s=new Xe(new es(1,.2,8,48),n);s.rotation.x=-Math.PI/2,s.visible=!1,s.castShadow=!1,le.scene.add(s),Rh.push({mesh:s,mat:n,r:0,active:!1,hitDone:!1})}let i=new Et(.32,8,6),e=new rn(.2,1,6);for(let t=0;t<6;t++){let n=new Xe(i,Ut(12865023,2.6)),s=new Xe(e,Ut(8004300,1.2,{transparent:!0,opacity:.7}));s.rotation.x=-Math.PI/2,s.position.z=-.6,n.add(s),n.visible=!1,n.castShadow=!1,le.scene.add(n),Ch.push({mesh:n,vel:new A,active:!1,life:0})}}async function uC(i){le=i;let e=i.world.castleGatePos;Zs.set(e.x,0,e.z+18),Zs.y=Pr(Zs.x,Zs.z),aC(e),lC(),cC(),hC(),Yi={root:jt,pos:jt.position,hp:60,maxHp:60,alive:!1,radius:3,name:"\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9",isBoss:!0,damage(t,n){if(!this.alive||en)return;let s=V.state==="stun"?2:.5;this.hp=Math.max(0,this.hp-t*s),le.boss.hp=this.hp,Ta=1,le.camera3p.shake(V.state==="stun"?.25:.12),this.hp<=30&&Is===1&&this.hp>0&&pC(),this.hp<=0&&(this.alive=!1,mC())}},i.boss={active:!1,defeated:!1,hp:60,maxHp:60,_forceAttack(t){yC(t)},_dbg(){return{seq:en,seqT:+Cn.toFixed(2),battle:Lr,phase:Is,aiState:V.state,aiT:+V.t.toFixed(2),nearGate:wh,promptOn:qs}}},i.on("state",({to:t})=>{(t==="gameover"||t==="title")&&(le.boss.active||en)&&!le.boss.defeated&&xC()})}function fC(){qs&&(le.ui.setPrompt(null),qs=!1),le.player.setFrozen(!0),en="break",Cn=0,Ps=0,le.audio.play("burn")}function dC(){Lr=!0,Is=1,V.state="idle",V.t=0,V.cd=1.6,V.speedMul=1,V.clawCd=0,V.chargeCd=2.5,V.slamCd=1.5,V.flameCd=0,V.moveAmt=0,Yi.hp=Yi.maxHp,Yi.alive=!0,le.combat.registerEnemy(Yi),le.boss.active=!0,le.boss.hp=Yi.hp,le.setState("boss"),le.sky.setOverride("boss"),le.emit("boss-start"),le.ui.setBossBar(!0,"\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9"),le.playerBounds={minX:Kt.minX,maxX:Kt.maxX,minZ:Kt.minZ,maxZ:Kt.maxZ},Oo.visible=!0}function pC(){Is=2,V.speedMul=1.3,V.state="rage",V.t=0,Ir.color.setHex(16725333),Ir.emissive.setHex(16725333),Ks.color.setHex(16721992),Ks.emissive.setHex(16721992),Ra.color.setHex(16728160),Ra.emissive.setHex(16728160),Ne.v1.copy(jt.position),Ne.v1.y+=2.5,le.effects.burst(Ne.v1,"magic",{count:40,scale:2}),le.camera3p.shake(.6),le.audio.play("burn"),le.emit("boss-phase",{phase:2})}function mC(){Lr=!1,en="dying",Cn=0,Ps=0;for(let i of Rh)i.active=!1,i.mesh.visible=!1;for(let i of Ch)i.active=!1,i.mesh.visible=!1;le.camera3p.shake(.5),le.audio.play("kill")}function gC(){jt.visible=!1,le.boss.defeated=!0,le.boss.active=!1,le.boss.hp=0,le.playerBounds=null,Oo.visible=!1,le.emit("boss-defeated"),le.ui.setBossBar(!1),le.sky.setOverride(null),le.camera3p.cinematic("ending"),en="endwait",Cn=0}function xC(){en=null,Cn=0,Lr=!1,Is=1,Ta=0,Yi.alive=!1,Yi.hp=Yi.maxHp;let i=le.combat.enemies.indexOf(Yi);i>=0&&le.combat.enemies.splice(i,1),jt.visible=!1,jt.position.copy(Zs),jt.rotation.set(0,0,0),Wn.rotation.set(0,0,0),Wn.position.y=2.5,V.state="idle",V.t=0,V.cd=1.6,V.speedMul=1,V.heading=0,V.moveAmt=0,Ir.color.setHex(11816447),Ir.emissive.setHex(11816447),Ir.emissiveIntensity=2.4,Ks.color.setHex(9055202),Ks.emissive.setHex(9055202),Ks.emissiveIntensity=1.5,Ra.color.setHex(10498303),Ra.emissive.setHex(10498303),Cr.emissive.setHex(0),Aa.opacity=0,vt.eyes=2.4,vt.maw=.4,Ys.visible=!0,jl.visible=!0,wa.visible=!0,Ah.uniforms.uBreak.value=0;for(let e of Rh)e.active=!1,e.mesh.visible=!1;for(let e of Ch)e.active=!1,e.mesh.visible=!1;Oo.visible=!1,le.playerBounds=null,le.boss.active=!1,le.boss.hp=Yi.maxHp,le.ui.setBossBar(!1),le.sky.setOverride(null),le.camera3p.cinematic(null),le.player.setFrozen(!1),wh=!1,qs=!1}function vC(i){Cn+=i;let e=le.world.castleGatePos;if(en==="break")Ah.uniforms.uBreak.value=je(0,1.6,Cn),ld.emissiveIntensity=1.7+Cn*2.2,Ps-=i,Ps<=0&&(Ps=.18,Ne.v1.set(e.x+(Math.random()-.5)*11,Ys.position.y+(Math.random()-.5)*7,e.z+(Math.random()-.5)*1.5),le.effects.burst(Ne.v1,"magic",{count:14}),Math.random()<.4&&le.audio.play("burn")),Cn>=1.6&&(Ys.visible=!1,jl.visible=!1,wa.visible=!1,Ne.v1.copy(Ys.position),le.effects.burst(Ne.v1,"magic",{count:70,scale:2.4}),le.audio.play("burn"),le.camera3p.shake(.55),jt.position.copy(Zs),jt.position.y=Zs.y+42,jt.rotation.set(0,0,0),V.heading=0,jt.visible=!0,le.camera3p.cinematic("bossIntro"),en="descend",Cn=0);else if(en==="descend"){let t=Math.min(1,Cn/.9);jt.position.y=Zs.y+42*(1-t*t),t>=1&&(jt.position.y=Zs.y,le.camera3p.shake(.9),Ne.v1.copy(jt.position),Ne.v1.y+=.4,le.effects.burst(Ne.v1,"dust",{count:46,scale:2.6}),le.effects.burst(Ne.v1,"magic",{count:24,scale:1.6}),le.audio.play("hit"),en="roar",Cn=0,Ps=0)}else if(en==="roar")Ps===0&&Cn>=.15&&(Ps=1,le.audio.play("burn"),le.camera3p.shake(.4)),Cn>=1.4&&(en="cine",Cn=0);else if(en==="cine")Cn>=3.1&&(le.camera3p.cinematic(null),le.player.setFrozen(!1),en=null,dC());else if(en==="dying"){let t=je(0,3.4,Cn);Wn.rotation.z=t*.55,Wn.position.y=2.5-t*1.5,Ks.emissiveIntensity=1.5+t*3.5,vt.eyes=_e(vt.eyes,.2,t),Ps-=i,Ps<=0&&(Ps=.22,Ne.v1.copy(jt.position),Ne.v1.x+=(Math.random()-.5)*3.5,Ne.v1.y+=1.2+Math.random()*2.4,Ne.v1.z+=(Math.random()-.5)*3.5,le.effects.burst(Ne.v1,"magic",{count:12}),le.camera3p.shake(.1)),Cn>=3.4&&(Ne.v1.copy(jt.position),Ne.v1.y+=1.6,le.effects.burst(Ne.v1,"death",{count:60,scale:2.8}),le.effects.burst(Ne.v1,"magic",{count:60,scale:2.4}),le.audio.play("kill"),gC())}else en==="endwait"&&Cn>=3&&(en=null,le.setState("ending"))}function m_(){V.state="claw",V.t=0,V.clawHitDone=!1,V.clawCd=1.8/V.speedMul}function g_(){V.state="chargeWind",V.t=0,V.dashRemain=Is===2?2:1,V.chargeCd=8/V.speedMul,le.audio.play("burn")}function x_(){V.state="slamWind",V.t=0,V.slamCd=8/V.speedMul}function Eg(){V.state="flame",V.t=0,V.fired=!1,V.flameCd=4.5/V.speedMul}function yC(i){!Lr||V.state!=="idle"&&V.state!=="recover"||(i==="claw"?m_():i==="charge"?g_():i==="slam"?x_():i==="flame"?Eg():i==="stun"&&(V.state="stun",V.t=0))}function _C(i){if(i>12&&V.chargeCd<=0)return g_();if(i<5&&V.clawCd<=0)return m_();if(i>=5&&i<=12){if(V.slamCd<=0&&(V.flameCd>0||Math.random()<.55))return x_();if(V.flameCd<=0)return Eg()}if(V.flameCd<=0&&i>=5)return Eg();V.cd=.4}function Kl(i){V.state="idle",V.t=0,V.cd=i/V.speedMul}function MC(i,e){for(let t of Rh)if(!t.active){t.active=!0,t.hitDone=!1,t.r=.6,t.mesh.position.set(i,Pr(i,e)+.5,e),t.mesh.scale.set(.6,.6,1),t.mat.opacity=.95,t.mesh.visible=!0;return}}function bC(i){let e=le.player;for(let t of Rh)if(t.active){if(t.r+=13*i,t.mesh.scale.set(t.r,t.r,1),t.mat.opacity=Ae(1-t.r/26,0,1)*.95,!t.hitDone&&e){let n=e.position.x-t.mesh.position.x,s=e.position.z-t.mesh.position.z,r=Math.hypot(n,s);Math.abs(r-t.r)<1.3&&e.onGround&&(t.hitDone=!0,e.damage(1,t.mesh.position),le.camera3p.shake(.4))}t.r>26&&(t.active=!1,t.mesh.visible=!1)}}function SC(){qi.getWorldPosition(Ne.v1),Ne.v2.copy(le.player.position),Ne.v2.y+=1.2,Ne.v2.sub(Ne.v1),Ne.v2.lengthSq()<.01&&Ne.v2.set(0,0,1),Ne.v2.normalize();let i=0;for(let e of Ch){if(e.active||i>=3)continue;let t=(i-1)*.32,n=Math.cos(t),s=Math.sin(t);e.vel.set(Ne.v2.x*n+Ne.v2.z*s,Ne.v2.y*.5,-Ne.v2.x*s+Ne.v2.z*n),e.vel.normalize().multiplyScalar(20),e.mesh.position.copy(Ne.v1),Ne.v3.copy(Ne.v1).add(e.vel),e.mesh.lookAt(Ne.v3),e.life=0,e.active=!0,e.mesh.visible=!0,i++}le.audio.play("burn")}function EC(i){let e=le.player;for(let t of Ch){if(!t.active)continue;t.life+=i,t.mesh.position.addScaledVector(t.vel,i),t.mesh.rotation.z+=i*9;let n=t.mesh.position,s=!1;e&&(Ne.v2.copy(e.position),Ne.v2.y+=1,n.distanceToSquared(Ne.v2)<1.44&&(e.damage(.5,n),s=!0)),!s&&n.y<Pr(n.x,n.z)+.25&&(s=!0),(s||t.life>4)&&(s&&le.effects.burst(n,"magic",{count:14}),t.active=!1,t.mesh.visible=!1)}}function TC(i){let e=le.player.position,t=jt.position,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s),o=Math.atan2(n,s);V.t+=i,V.clawCd-=i,V.chargeCd-=i,V.slamCd-=i,V.flameCd-=i;let a=0;switch(V.state){case"idle":{V.heading=ei(V.heading,o,3*V.speedMul,i),r>4.4&&(a=4.8*V.speedMul),V.cd-=i,V.cd<=0&&_C(r);break}case"rage":{V.t>=1.3&&Kl(.7);break}case"claw":{V.heading=ei(V.heading,o,V.t<.5?4:.5,i),!V.clawHitDone&&V.t>=.55&&(V.clawHitDone=!0,le.audio.play("hit"),r<5&&Math.abs(ca(V.heading,o))<1&&le.player.damage(.5,t)),V.t>=1.25&&Kl(.9);break}case"chargeWind":{V.heading=ei(V.heading,o,1.3,i),V.t>=2&&(V.dashDir.set(Math.sin(V.heading),0,Math.cos(V.heading)),V.state="chargeDash",V.t=0,V.hitDone=!1,le.audio.play("hit"));break}case"chargeDash":{let l=26*V.speedMul;t.x+=V.dashDir.x*l*i,t.z+=V.dashDir.z*l*i,a=l,!V.hitDone&&r<3.4&&(V.hitDone=!0,le.player.damage(1,t),le.camera3p.shake(.5));let c=Ae(t.x,Kt.minX+3,Kt.maxX-3),h=Ae(t.z,Kt.minZ+3,Kt.maxZ-3),u=c!==t.x||h!==t.z||V.t>3;t.x=c,t.z=h,u&&(V.dashRemain--,Ne.v1.copy(t),Ne.v1.y+=1.5,le.effects.burst(Ne.v1,"dust",{count:30,scale:2}),le.camera3p.shake(.6),le.audio.play("hit"),V.hitDone?Kl(1.2):V.dashRemain>0?(V.state="chargeTurn",V.t=0):(V.state="stun",V.t=0,le.audio.play("block")));break}case"chargeTurn":{V.heading=ei(V.heading,o,6,i),V.t>=.55&&(V.dashDir.set(Math.sin(V.heading),0,Math.cos(V.heading)),V.state="chargeDash",V.t=0,V.hitDone=!1,le.audio.play("hit"));break}case"stun":{V.t>=3&&Kl(.8);break}case"slamWind":{if(V.heading=ei(V.heading,o,3,i),V.t>=.7){V.leapFrom.copy(t),V.leapTo.set(Ae(e.x,Kt.minX+4,Kt.maxX-4),0,Ae(e.z,Kt.minZ+4,Kt.maxZ-4)),Ne.v1.set(V.leapTo.x-V.leapFrom.x,0,V.leapTo.z-V.leapFrom.z);let l=Ne.v1.length();l>16&&(Ne.v1.multiplyScalar(16/l),V.leapTo.set(V.leapFrom.x+Ne.v1.x,0,V.leapFrom.z+Ne.v1.z)),V.state="slamAir",V.t=0,le.audio.play("jump")}break}case"slamAir":{let l=Math.min(1,V.t/.85);t.x=_e(V.leapFrom.x,V.leapTo.x,l),t.z=_e(V.leapFrom.z,V.leapTo.z,l),t.y=_e(Pr(V.leapFrom.x,V.leapFrom.z),Pr(V.leapTo.x,V.leapTo.z),l)+Math.sin(l*Math.PI)*6,l>=1&&(t.y=Pr(t.x,t.z),MC(t.x,t.z),Ne.v1.copy(t),Ne.v1.y+=.4,le.effects.burst(Ne.v1,"dust",{count:40,scale:2.4}),le.effects.burst(Ne.v1,"magic",{count:20,scale:1.5}),le.camera3p.shake(.75),le.audio.play("hit"),V.state="slamLand",V.t=0);break}case"slamLand":{V.t>=1&&Kl(1.2);break}case"flame":{V.heading=ei(V.heading,o,2.5,i),!V.fired&&V.t>=.85&&(V.fired=!0,SC()),V.t>=1.55&&Kl(1.3);break}}a>0&&V.state!=="chargeDash"&&(t.x+=Math.sin(V.heading)*a*i,t.z+=Math.cos(V.heading)*a*i),V.state!=="slamAir"&&(t.x=Ae(t.x,Kt.minX+3,Kt.maxX-3),t.z=Ae(t.z,Kt.minZ+3,Kt.maxZ-3),t.y=Ve(t.y,Pr(t.x,t.z),18,i)),V.gaitT+=a*i*.55,V.moveAmt=Ve(V.moveAmt,a>.5?1:0,8,i),jt.rotation.y=V.heading}function wC(i){Re.pitch=0,Re.roll=0,Re.y=0,Re.headP=0,Re.headY=0,Re.jaw=.06,Re.crouch=0,Re.paw=0,Re.maw=Is===2?.9:.4,Re.eyes=Is===2?2.8:2.4;let e=en||V.state;if(e==="descend")Re.crouch=.55,Re.jaw=.35,Re.pitch=.1;else if(e==="roar"||e==="rage"||e==="cine"){let t=e==="cine"?Math.max(0,1-Cn*1.5):1;Re.pitch=-.32*t,Re.headP=-.85*t,Re.jaw=.85*t,Re.y=.15*t,Re.eyes=3.2}else if(e==="dying")Re.headP=.6,Re.jaw=.5,Re.crouch=.6,Re.eyes=vt.eyes;else if(e==="claw")V.t<.55?(Re.paw=1,Re.roll=-.14,Re.headP=-.15,Re.pitch=-.08):(Re.paw=-.55,Re.pitch=.22,Re.headP=.2,Re.jaw=.5);else if(e==="chargeWind")Re.pitch=.3,Re.headP=.45,Re.crouch=.25,Re.jaw=.4,Re.roll=Math.sin(i*42)*.035,Re.eyes=3.4;else if(e==="chargeDash")Re.pitch=.18,Re.headP=.25,Re.jaw=.6;else if(e==="chargeTurn")Re.pitch=.1,Re.crouch=.2;else if(e==="stun")Re.headP=.75,Re.crouch=.4,Re.jaw=.42,Re.eyes=.05,Re.roll=Math.sin(i*2.2)*.04;else if(e==="slamWind")Re.crouch=.85,Re.pitch=.18,Re.headP=.3;else if(e==="slamAir")Re.crouch=.5,Re.pitch=-.15+Math.min(1,V.t/.85)*.4,Re.jaw=.5;else if(e==="slamLand")Re.crouch=.55,Re.pitch=.12,Re.headP=.25;else if(e==="flame"){let t=V.fired?Math.max(0,1-(V.t-.85)*2.2):Math.min(1,V.t/.85);Re.headP=-.55*t,Re.pitch=-.12*t,Re.jaw=.85*t,Re.maw=.4+t*3.2}else if(Re.y=Math.sin(i*1.9)*.05,Lr&&!en){let t=ca(V.heading,Math.atan2(le.player.position.x-jt.position.x,le.player.position.z-jt.position.z));Re.headY=Ae(t,-.5,.5)}}function AC(i,e){wC(e),vt.pitch=Ve(vt.pitch,Re.pitch,9,i),vt.roll=Ve(vt.roll,Re.roll,9,i),vt.y=Ve(vt.y,Re.y,9,i),vt.headP=Ve(vt.headP,Re.headP,10,i),vt.headY=Ve(vt.headY,Re.headY,7,i),vt.jaw=Ve(vt.jaw,Re.jaw,12,i),vt.crouch=Ve(vt.crouch,Re.crouch,9,i),vt.paw=Ve(vt.paw,Re.paw,13,i),vt.maw=Ve(vt.maw,Re.maw,10,i),vt.eyes=Ve(vt.eyes,Re.eyes,10,i),en!=="dying"?(Wn.rotation.x=vt.pitch,Wn.rotation.z=vt.roll,Wn.position.y=2.5+vt.y-vt.crouch*.85):Wn.rotation.x=vt.pitch,Sa.rotation.x=vt.headP*.55,Sa.rotation.y=vt.headY,qi.rotation.x=vt.headP*.55,zo.rotation.x=vt.jaw;let t=[0,Math.PI,Math.PI,0];for(let n=0;n<4;n++){let s=d_[n],o=Math.sin(V.gaitT+t[n])*.55*V.moveAmt-vt.crouch*.55,a=Math.max(0,-Math.sin(V.gaitT+t[n]))*.7*V.moveAmt+vt.crouch*1.05;n===0&&(o-=vt.paw*1.5,a+=Math.max(0,vt.paw)*1.1),s.upper.rotation.x=o,s.lower.rotation.x=a}for(let n=0;n<Th.length;n++)Th[n].rotation.y=Math.sin(e*2.1+n*.7)*.15*(1+V.moveAmt*.8),Th[n].rotation.x=Math.sin(e*1.3+n*.5)*.05+vt.crouch*.08;if(Ir.emissiveIntensity=vt.eyes+(Is===2?Math.sin(e*7)*.25:0),Ra.emissiveIntensity=vt.maw,Ta>0){Ta=Math.max(0,Ta-i*4.5);let n=Ta*Ta;Cr.emissive.setRGB(.5*n,.16*n,.75*n),en!=="dying"&&(Ks.emissiveIntensity=(Is===2?2.1:1.5)+n*2.5)}if(Is===2&&Yi.alive){Aa.opacity=Ve(Aa.opacity,.11+Math.sin(e*5.5)*.04,6,i);let n=1+Math.sin(e*4.7)*.045;ad.scale.setScalar(n)}else Aa.opacity=Ve(Aa.opacity,0,8,i)}function RC(){let i=le.player,e=le.world.castleGatePos,t=i.position.x-e.x,n=i.position.z-e.z;t*t+n*n<36?(wh||(wh=!0,i.spiritOrbs<3&&le.ui.showMessage("\u7D50\u754C\u306F\u56FA\u304F\u9589\u3056\u3055\u308C\u3066\u3044\u308B",{sub:"\u6C17\u306E\u73E0\u304C3\u3064\u5FC5\u8981\u3060"})),i.spiritOrbs>=3?(qs||(le.ui.setPrompt("E: \u7D50\u754C\u3092\u7834\u308B"),qs=!0),le.input.justPressed("KeyE")&&fC()):qs&&(le.ui.setPrompt(null),qs=!1)):(wh=!1,qs&&(le.ui.setPrompt(null),qs=!1))}function CC(i,e){if(!le||!jt)return;let t=i.time.elapsed;Ys.visible&&(Ah.uniforms.uTime.value=t,en||(ld.emissiveIntensity=1.7+Math.sin(t*2.1)*.45),bg.opacity=.3+Math.sin(t*1.6)*.08,wa.rotation.z=t*.15),Oo.visible&&(Sg.uniforms.uTime.value=t),en?vC(e):Lr&&i.state==="boss"&&Yi.alive&&TC(e),(Lr||en==="dying")&&(bC(e),EC(e)),jt.visible&&AC(e,t),i.state==="playing"&&!en&&!Lr&&!i.boss.defeated&&Ys.visible&&RC()}var tc={};Ns(tc,{init:()=>jC,update:()=>JC});var Fe=null,Fo,Bo,ec,Tt,Ca,hd,Ph,ud=null,Ho=null,v_="__none",ko=[],Cg=0,fd=!1,y_="",Ls=null,Jl=0,$l=0,bn=i=>440*Math.pow(2,(i-69)/12),oi=Math.random,PC=.35;function IC(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Fe=new i,Bo=Fe.createDynamicsCompressor(),Bo.threshold.value=-16,Bo.knee.value=18,Bo.ratio.value=5,Bo.attack.value=.004,Bo.release.value=.22,Fo=dt(.9),Fo.connect(Bo),Bo.connect(Fe.destination),ec=dt(0),Tt=dt(.9),Ca=dt(0),ec.connect(Fo),Tt.connect(Fo),Ca.connect(Fo),hd=Fe.createConvolver(),hd.buffer=LC(2.6,2.6);let e=dt(.5);hd.connect(e),e.connect(Fo);for(let[o,a]of[[ec,.32],[Tt,.18],[Ca,.1]]){let l=dt(a);o.connect(l),l.connect(hd)}Ph=Fe.createDelay(1),Ph.delayTime.value=.31;let t=Fe.createBiquadFilter();t.type="lowpass",t.frequency.value=2200;let n=dt(.32);Ph.connect(t),t.connect(n),n.connect(Ph);let s=dt(.35);t.connect(s),s.connect(Fo);let r=dt(.16);ec.connect(r),r.connect(Ph),qC();try{window.__audioDbg={get ctx(){return Fe},get master(){return Fo}}}catch{}}function LC(i,e){let t=Math.max(1,Math.floor(Fe.sampleRate*i)),n=Fe.createBuffer(2,t,Fe.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s),o=0;for(let a=0;a<t;a++){let l=(oi()*2-1)*Math.pow(1-a/t,e);o=o*.62+l*.38,r[a]=o}}return n}function dd(){if(!ud){let i=Fe.sampleRate*2;ud=Fe.createBuffer(1,i,Fe.sampleRate);let e=ud.getChannelData(0);for(let t=0;t<i;t++)e[t]=oi()*2-1}return ud}function dt(i){let e=Fe.createGain();return e.gain.value=i,e}function ri(i,e){i.onended=()=>{for(let t of e)try{t.disconnect()}catch{}}}function tn(i,e,t,n){let s=Fe.createOscillator();return s.type=i,s.frequency.value=e,s.start(t),s.stop(n),s}function Ih(i,e){let t=Fe.createBufferSource();t.buffer=dd(),t.loop=!0;try{t.start(i,oi()*1.5)}catch{t.start(i)}return t.stop(i+e),t}function __(i){if(Fe.createStereoPanner){let e=Fe.createStereoPanner();return e.pan.value=Ae(i,-1,1),e}return dt(1)}function Zi(i,e,t,n){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(t,e+.008),i.setTargetAtTime(1e-4,e+.012,n)}function Lh(i,e,t,n,s,r){let o=Math.max(e+t,e+s);i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(n,e+t),i.setValueAtTime(n,o),i.linearRampToValueAtTime(1e-4,o+r)}var qt={harp(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("triangle",e,i,i+2.2);o.connect(r),Zi(r.gain,i,n,.32);let a=dt(0);a.connect(s);let l=tn("sine",e*2,i,i+1.1);l.connect(a),Zi(a.gain,i,n*.18,.14),ri(o,[r,a,o,l])},piano(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("triangle",e,i,i+5);o.connect(r),Zi(r.gain,i,n,.9);let a=dt(0);a.connect(s);let l=tn("sine",e*2.001,i,i+2.5);l.connect(a),Zi(a.gain,i,n*.12,.35),ri(o,[r,a,o,l])},flute(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("sine",e,i,i+t+.35);o.connect(r);let a=tn("sine",5.2,i,i+t+.35),l=dt(0);a.connect(l),l.connect(o.detune),l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(14,i+Math.min(.5,t*.6)),Lh(r.gain,i,.07,n,Math.max(.1,t-.06),.18);let c=Fe.createBiquadFilter();c.type="bandpass",c.frequency.value=e*2,c.Q.value=9;let h=dt(0),u=Ih(i,t+.3);u.connect(c),c.connect(h),h.connect(s),Lh(h.gain,i,.09,n*.05,Math.max(.1,t-.06),.15),ri(o,[r,o,a,l,c,h,u])},strings(i,e,t,n,s){let r=Fe.createBiquadFilter();r.type="lowpass",r.frequency.value=Math.min(e*3.2,2600),r.Q.value=.4;let o=dt(0);r.connect(o),o.connect(s);let a=tn("sawtooth",e,i,i+t+1.3);a.detune.value=-6,a.connect(r);let l=tn("sawtooth",e*1.003,i,i+t+1.3);l.detune.value=6,l.connect(r),Lh(o.gain,i,Math.min(.6,t*.35),n,t,1),ri(a,[r,o,a,l])},bass(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("sine",e,i,i+t+.2);o.connect(r);let a=tn("square",e,i,i+t+.2),l=dt(.13);a.connect(l),l.connect(r),Lh(r.gain,i,.015,n,t*.85,.1),ri(o,[r,o,a,l])},bell(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("sine",e,i,i+3.2),a=tn("sine",e*2.76,i,i+3.2),l=dt(0);a.connect(l),l.connect(o.frequency),l.gain.setValueAtTime(e*1.6,i),l.gain.setTargetAtTime(1e-4,i,.35),o.connect(r),Zi(r.gain,i,n,Ae(t,.5,1.2)),ri(o,[r,o,a,l])},kick(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("sine",120,i,i+.32);o.connect(r),o.frequency.setValueAtTime(120,i),o.frequency.exponentialRampToValueAtTime(42,i+.11),Zi(r.gain,i,n,.09),ri(o,[r,o])},taiko(i,e,t,n,s){let r=dt(0);r.connect(s);let o=tn("sine",96,i,i+.6);o.connect(r),o.frequency.setValueAtTime(96,i),o.frequency.exponentialRampToValueAtTime(52,i+.2),Zi(r.gain,i,n,.16);let a=Fe.createBiquadFilter();a.type="bandpass",a.frequency.value=180,a.Q.value=6;let l=dt(0),c=Ih(i,.4);c.connect(a),a.connect(l),l.connect(s),Zi(l.gain,i,n*.5,.09),ri(o,[r,o,a,l,c])},shaker(i,e,t,n,s){let r=Fe.createBiquadFilter();r.type="highpass",r.frequency.value=6500;let o=dt(0),a=Ih(i,.14);a.connect(r),r.connect(o),o.connect(s),Zi(o.gain,i,n,.025),ri(a,[r,o,a])},snare(i,e,t,n,s){let r=Fe.createBiquadFilter();r.type="bandpass",r.frequency.value=1700,r.Q.value=.8;let o=dt(0),a=Ih(i,.2);a.connect(r),r.connect(o),o.connect(s),Zi(o.gain,i,n,.06);let l=dt(0);l.connect(s);let c=tn("sine",210,i,i+.12);c.connect(l),Zi(l.gain,i,n*.6,.035),ri(a,[r,o,a,l,c])}};function Ct(i,e,t,n,s,r){i.push({t:e,i:t,f:n>0?bn(n):0,d:s,v:r})}function Nr(i,e,t,n,s,r){for(let o of n)Ct(i,e,t,o,s,r)}function DC(){let i=[],e=[[50,53,57,62],[46,50,53,58],[53,57,60,65],[48,52,55,60],[50,53,57,62],[43,46,50,55],[45,49,52,57],[50,53,57,62]],t=[0,1,2,3,2,1,2,3];return e.forEach((n,s)=>{let r=s*4;t.forEach((o,a)=>Ct(i,r+a*.5,"harp",n[o],.5,a===0?.4:.28)),Nr(i,r,"strings",[n[0]+12,n[1]+12,n[2]+12],4.1,.08),Ct(i,r,"bass",n[0]-12,3.5,.28)}),[[0,69],[8,70],[16,69],[22,67],[24,65],[28,64]].forEach(([n,s])=>Ct(i,n,"bell",s,3,.13)),{bpm:72,beats:32,events:i}}function NC(){let i=[],e=[43,47,50],t=[48,52,55],n=[40,43,47],s=[50,54,57];[e,e,t,e,n,t,s,s,e,e,t,[45,48,52],e,t,s,e].forEach((c,h)=>{let u=h*4;Ct(i,u,"bass",c[0],.9,.4),Ct(i,u+1.5,"bass",c[0],.4,.28),Ct(i,u+2,"bass",c[0]+7,.9,.34),Ct(i,u+3,"bass",c[0],.9,.28),Nr(i,u,"strings",[c[0]+12,c[1]+12,c[2]+12],3.9,.065),Ct(i,u+1,"harp",c[1]+24,.5,.15),Ct(i,u+3.5,"harp",c[2]+24,.5,.12),Ct(i,u,"kick",0,0,.42),Ct(i,u+2,"kick",0,0,.34);for(let f=0;f<8;f++)Ct(i,u+f*.5,"shaker",0,0,f%2?.13:.07)}),[3,7,11,15].forEach(c=>{[0,.25,.5,.75].forEach((h,u)=>Ct(i,c*4+3+h,"taiko",0,0,.2+u*.05))});let a=[[0,71,1],[1,74,.5],[1.5,76,.5],[2,79,1.9],[4,78,1],[5,76,.5],[5.5,74,.5],[6,76,1.9],[8,72,1],[9,74,.5],[9.5,76,.5],[10,74,1],[11,71,.9],[12,69,2.4],[14.5,71,.5],[15,72,.9],[16,74,1],[17,79,1],[18,81,1.9],[20,83,1.4],[21.5,81,.5],[22,79,1],[23,76,.9],[24,74,1],[25,76,.5],[25.5,78,.5],[26,81,1],[27,78,.9],[28,79,2.8]],l=[[0,71,1],[1,74,.5],[1.5,76,.5],[2,79,1.9],[4,81,1],[5,79,.5],[5.5,78,.5],[6,79,1.9],[8,84,1],[9,83,.5],[9.5,81,.5],[10,79,1],[11,76,.9],[12,74,2.4],[14.5,74,.5],[15,76,.9],[16,79,1],[17,83,1],[18,86,1.9],[20,84,1.4],[21.5,83,.5],[22,81,1],[23,79,.9],[24,78,1],[25,81,1],[26,74,1],[27,76,.9],[28,79,2.8]];return a.forEach(([c,h,u])=>Ct(i,c,"flute",h,u,.4)),l.forEach(([c,h,u])=>Ct(i,c+32,"flute",h,u,.42)),{bpm:102,beats:64,events:i}}function UC(){let i=[];return[[0,[45,52,57]],[8,[41,48,53]],[16,[43,50,55]],[24,[40,47,52]]].forEach(([t,n])=>Nr(i,t,"strings",n,8.2,.045)),[[0,69,2],[3,72,1],[4,76,3],[8,74,2],[11,72,1],[12,69,3.5],[16,67,2],[19,69,1],[20,74,3.5],[24,76,1.5],[26,72,1.5],[28,69,3.5]].forEach(([t,n,s])=>Ct(i,t,"piano",n,s,.28)),Ct(i,14,"piano",57,1.5,.16),Ct(i,30,"piano",52,1.5,.14),{bpm:60,beats:32,events:i}}function zC(){let i=[];for(let e=0;e<8;e++)Ct(i,e*4,"bass",38,4.3,.22),e%2===0&&Nr(i,e*4,"strings",[50,57],8.3,.05);return[[0,74,3],[6,77,2],[10,79,2],[14,81,3],[20,79,2],[24,71,3],[28,72,2]].forEach(([e,t,n])=>Ct(i,e,"bell",t,n,.24)),Ct(i,12,"bell",86,2,.08),Ct(i,26,"bell",84,2,.07),{bpm:66,beats:32,events:i}}function OC(){let i=[],e=[40,40,41,40,43,40,46,40],t=[45,45,46,45,48,45,51,45];for(let n=0;n<8;n++){let s=n<4?e:t,r=n*4;s.forEach((o,a)=>Ct(i,r+a*.5,"bass",o,.28,a%2?.36:.48));for(let o=0;o<4;o++)Ct(i,r+o,"kick",0,0,.5);Ct(i,r+1,"snare",0,0,.36),Ct(i,r+3,"snare",0,0,.36);for(let o=0;o<8;o++)Ct(i,r+o*.5+.25,"shaker",0,0,.1);n%4===3&&[3,3.25,3.5,3.75].forEach((o,a)=>Ct(i,r+o,"taiko",0,0,.26+a*.07))}return Nr(i,0,"strings",[64,65,70],1.6,.15),Nr(i,8,"strings",[64,65,70],1.6,.15),Nr(i,16,"strings",[69,70,75],1.6,.16),Nr(i,24,"strings",[70,71,76],1.6,.17),Ct(i,4,"bell",76,1.5,.18),Ct(i,12,"bell",75,1.5,.18),Ct(i,20,"bell",81,1.5,.2),Ct(i,28,"bell",82,1.5,.2),{bpm:140,beats:32,events:i}}function FC(){let i=[],e=[43,47,50],t=[48,52,55],n=[45,48,52],s=[50,54,57],r=[e,t,n,s,e,t,s,e],o=[0,2,1,2];return r.forEach((l,c)=>{let h=c*4;Nr(i,h,"strings",[l[0]+12,l[1]+12,l[2]+12],4.2,.1),Ct(i,h,"bass",l[0],3.6,.3),o.forEach((u,f)=>Ct(i,h+f,"harp",l[u]+24,1,.18))}),[[0,71,1.5],[1.5,74,.5],[2,79,1.9],[4,81,1],[5,79,1],[6,76,1.9],[8,72,1],[9,74,1],[10,76,1],[11,74,.9],[12,71,1],[13,69,2.9],[16,74,1.5],[17.5,79,.5],[18,81,1.9],[20,83,2],[22,81,1],[23,79,.9],[24,78,1],[25,81,1],[26,79,1],[27,76,.9],[28,79,3.6]].forEach(([l,c,h])=>Ct(i,l,"flute",c,h,.38)),[[0,67],[8,72],[16,67],[24,74]].forEach(([l,c])=>Ct(i,l,"bell",c,2,.12)),{bpm:76,beats:32,events:i}}var pd={title:DC,field:NC,night:UC,shrine:zC,boss:OC,ending:FC},Tg={};function BC(i){if(!i||!pd[i])return null;if(!Tg[i]){let e=pd[i]();e.events.sort((t,n)=>t.t-n.t),Tg[i]=e}return Tg[i]}function M_(i,e){let t=BC(i);if(!t)return null;let n=dt(0);n.connect(ec);let s=Fe.currentTime;return n.gain.setValueAtTime(1e-4,s),n.gain.linearRampToValueAtTime(1,s+e),{name:i,def:t,g:n,idx:0,loopStart:s+.06,fading:!1,killAt:0}}function kC(i,e){if(i.fading)return;i.fading=!0;let t=Fe.currentTime,n=i.g.gain.value;i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(Math.max(n,1e-4),t),i.g.gain.linearRampToValueAtTime(1e-4,t+e),i.killAt=t+e+.15}function Rg(i){if(Ho=i&&pd[i]?i:null,!!Fe){for(let e of ko)kC(e,2);if(Ho&&Fe.state==="running"){let e=M_(Ho,2);e&&ko.push(e)}}}function HC(i,e){let t=i.def,n=60/t.bpm,s=t.events,r=t.beats*n,o=Fe.currentTime;if(i.loopStart+r<o){let l=Math.floor((o-i.loopStart)/r);i.loopStart+=l*r,i.idx=0}let a=0;for(;a++<4e3;){if(i.idx>=s.length){i.idx=0,i.loopStart+=r;continue}let l=s[i.idx],c=i.loopStart+l.t*n;if(c>=e)break;if(i.idx++,c<o-.03)continue;let h=qt[l.i];h&&h(c,l.f,Math.max(.05,l.d*n),l.v,i.g)}}function GC(){if(!Fe||Fe.state!=="running")return;Cg=Fe.currentTime+4;let i=Fe.currentTime+.05;[[0,79],[.14,84],[.28,88],[.42,91]].forEach(([e,t])=>{qt.bell(i+e,bn(t),1,.34,Tt),qt.harp(i+e,bn(t),.8,.26,Tt)}),[84,88,91,96].forEach(e=>qt.bell(i+.72,bn(e),2.4,.16,Tt)),qt.strings(i+.72,bn(60),2.2,.07,Tt),qt.strings(i+.72,bn(64),2.2,.07,Tt),qt.strings(i+.72,bn(67),2.2,.07,Tt)}function VC(){if(!Fe||Fe.state!=="running")return;Cg=Fe.currentTime+6;let i=Fe.currentTime+.05,e=(t,n,s,r)=>{qt.strings(i+t,bn(n),s,r,Tt),qt.bell(i+t,bn(n+12),s,r*.55,Tt)};e(0,67,.16,.24),e(.2,67,.16,.24),e(.4,67,.16,.24),e(.6,72,.7,.28),e(1.35,71,.18,.24),e(1.55,72,.18,.24),e(1.75,74,.9,.3),[67,71,74,79].forEach(t=>e(2.7,t,2.2,.16)),[0,.6,1.75,2.7].forEach(t=>{qt.kick(i+t,0,0,.5,Tt),qt.taiko(i+t,0,0,.4,Tt)})}function b_(){if(!Fe||Fe.state!=="running")return;let i=Fe.currentTime+.1;qt.piano(i,bn(64),1.2,.32,Tt),qt.piano(i+.9,bn(60),1.2,.3,Tt),qt.piano(i+1.8,bn(57),2.5,.3,Tt),qt.strings(i+1.8,bn(45),2.6,.07,Tt),qt.strings(i+1.8,bn(52),2.6,.06,Tt)}function WC(){if(!Fe||Fe.state!=="running")return;let i=Fe.currentTime+.02;qt.taiko(i,0,0,.6,Tt),qt.kick(i,0,0,.6,Tt),qt.taiko(i+.14,0,0,.5,Tt),qt.kick(i+.14,0,0,.55,Tt),qt.snare(i+.28,0,0,.4,Tt)}function si(i,{type:e="bandpass",f0:t=800,f1:n=3e3,q:s=1,dur:r=.15,vel:o=.3,a=.01}){let l=Fe.createBiquadFilter();l.type=e,l.Q.value=s,l.frequency.setValueAtTime(Math.max(30,t),i),l.frequency.exponentialRampToValueAtTime(Math.max(30,n),i+r);let c=dt(0),h=Ih(i,r+.12);h.connect(l),l.connect(c),c.connect(Tt),c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(o,i+a),c.gain.linearRampToValueAtTime(1e-4,i+r),ri(h,[l,c,h])}function Ql(i,e,t,n,s,r="sine"){let o=dt(0);o.connect(Tt);let a=tn(r,e,i,i+n+.05);a.connect(o),a.frequency.setValueAtTime(Math.max(20,e),i),a.frequency.exponentialRampToValueAtTime(Math.max(20,t),i+n),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(s,i+.012),o.gain.linearRampToValueAtTime(1e-4,i+n),ri(a,[o,a])}function Dr(i,e,t,n,s){let r=dt(0);r.connect(Tt);let o=tn("sine",e,i,i+n+.1);o.connect(r),o.frequency.setValueAtTime(e,i),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),i+n*.7),Zi(r.gain,i,s,n*.5),ri(o,[r,o])}function wg(i,e,t){si(i,{f0:900*e,f1:4200*e,q:1.6,dur:.16,vel:.5*t}),si(i,{type:"highpass",f0:3e3*e,f1:7e3*e,q:.7,dur:.1,vel:.2*t}),Ql(i,520*e,180*e,.09,.1*t,"triangle")}var XC={sword1(i,e,t){wg(i,1,t)},sword2(i,e,t){wg(i,1.14,t)},sword3(i,e,t){wg(i,1.3,t)},hit(i,e,t){si(i,{f0:1100,f1:260,q:1.1,dur:.11,vel:.5*t}),Dr(i,150,55,.14,.5*t)},kill(i,e,t){Ql(i,620,85,.42,.22*t,"sawtooth"),si(i,{f0:2200,f1:280,q:2,dur:.42,vel:.2*t}),qt.bell(i,660,.35,.14*t,Tt)},damage(i,e,t){Dr(i,210,48,.2,.6*t),si(i,{type:"lowpass",f0:900,f1:160,dur:.14,vel:.3*t})},block(i,e,t){let n=dt(0);n.connect(Tt);let s=tn("square",820,i,i+.2),r=tn("square",1240,i,i+.2),o=dt(.5);s.connect(n),r.connect(o),o.connect(n),Zi(n.gain,i,.26*t,.045),ri(s,[n,s,r,o]),si(i,{type:"highpass",f0:4e3,f1:6e3,dur:.04,vel:.24*t}),Dr(i,300,120,.07,.2*t)},step(i,e,t){let n=.9+oi()*.22;Dr(i,190*n,80*n,.07,.16*t),si(i,{type:"lowpass",f0:900*n,f1:300,dur:.05,vel:.07*t})},jump(i,e,t){Ql(i,300,620,.16,.18*t),si(i,{f0:500,f1:1400,q:1,dur:.12,vel:.08*t})},land(i,e,t){Dr(i,170,60,.1,.3*t),si(i,{type:"lowpass",f0:800,f1:200,dur:.08,vel:.14*t})},roll(i,e,t){si(i,{f0:480,f1:950,q:.6,dur:.24,vel:.2*t,a:.05}),Dr(i+.16,140,70,.08,.12*t)},pickup(i,e,t){Ql(i,880,1320,.09,.2*t),qt.harp(i+.02,1760,.15,.12*t,Tt)},heart(i,e,t){qt.bell(i,bn(76),.5,.22*t,Tt),qt.bell(i+.13,bn(81),.8,.24*t,Tt),qt.harp(i,bn(64),.5,.14*t,Tt)},orb(i,e,t){let n=dt(0);n.connect(Tt);let s=tn("sine",440,i,i+.7),r=tn("sine",441.5,i,i+.7);s.connect(n),r.connect(n);for(let o of[s,r])o.frequency.setValueAtTime(440,i),o.frequency.exponentialRampToValueAtTime(1760,i+.55);Lh(n.gain,i,.05,.16*t,.5,.15),ri(s,[n,s,r]),qt.bell(i+.5,bn(88),1.4,.26*t,Tt),qt.bell(i+.62,bn(93),1.6,.18*t,Tt)},chest(i,e,t){[[0,72],[.13,76],[.26,79]].forEach(([n,s],r)=>{qt.harp(i+n,bn(s),.4,.26*t,Tt),qt.bell(i+n,bn(s),r===2?1.4:.4,.18*t,Tt)})},switch(i,e,t){Dr(i,120,40,.28,.5*t),si(i,{type:"lowpass",f0:420,f1:90,dur:.24,vel:.28*t,a:.03}),si(i+.03,{f0:700,f1:300,q:5,dur:.16,vel:.09*t})},torch(i,e,t){si(i,{type:"lowpass",f0:3200,f1:420,dur:.2,vel:.4*t}),Dr(i,110,60,.09,.2*t)},ui(i,e,t){si(i,{f0:1200,f1:1100,q:8,dur:.035,vel:.2*t,a:.004}),Ql(i,660,620,.05,.14*t,"triangle")},uiBack(i,e,t){si(i,{f0:800,f1:720,q:8,dur:.04,vel:.16*t,a:.004}),Ql(i,440,400,.06,.12*t,"triangle")},burn(i,e,t){si(i,{type:"lowpass",f0:2600,f1:380,dur:.3,vel:.4*t});for(let n=0;n<4;n++)si(i+.04+oi()*.2,{f0:1500+oi()*1500,f1:600,q:3,dur:.05,vel:.14*t});Dr(i,100,50,.16,.28*t)}};function qC(){Ls={};let i=e=>{let t=dt(0);return e(t),t.connect(Ca),{g:t,target:0,applied:-1}};Ls.wind=i(e=>{let t=Fe.createBiquadFilter();t.type="bandpass",t.frequency.value=480,t.Q.value=.35;let n=Fe.createBufferSource();n.buffer=dd(),n.loop=!0,n.start(),n.connect(t),t.connect(e);let s=tn("sine",.13,Fe.currentTime,Fe.currentTime+86400),r=dt(.35);s.connect(r),r.connect(e.gain);let o=dt(180);s.connect(o),o.connect(t.frequency)}),Ls.rumble=i(e=>{let t=Fe.createBiquadFilter();t.type="lowpass",t.frequency.value=75,t.Q.value=1.1;let n=Fe.createBufferSource();n.buffer=dd(),n.loop=!0,n.start(),n.connect(t),t.connect(e);let s=tn("sine",.45,Fe.currentTime,Fe.currentTime+86400),r=dt(.5);s.connect(r),r.connect(e.gain)}),Ls.water=i(e=>{let t=Fe.createBiquadFilter();t.type="bandpass",t.frequency.value=950,t.Q.value=.6;let n=Fe.createBufferSource();n.buffer=dd(),n.loop=!0,n.start(),n.connect(t),t.connect(e);let s=tn("sine",.7,Fe.currentTime,Fe.currentTime+86400),r=dt(.6);s.connect(r),r.connect(e.gain);let o=dt(320);s.connect(o),o.connect(t.frequency)})}function YC(i){let e=2300+oi()*1500,t=2+(oi()*3|0),n=dt(0),s=__(oi()*1.6-.8),r=tn("sine",e,i,i+t*.13+.1);r.connect(n),n.connect(s),s.connect(Ca);for(let o=0;o<t;o++){let a=i+o*(.08+oi()*.05);r.frequency.setValueAtTime(e+oi()*350,a),r.frequency.exponentialRampToValueAtTime(e*(1.22+oi()*.25),a+.05),n.gain.setValueAtTime(1e-4,a),n.gain.linearRampToValueAtTime(.05+oi()*.035,a+.015),n.gain.linearRampToValueAtTime(1e-4,a+.065)}ri(r,[n,s,r])}function ZC(i){let e=__(oi()*1.2-.6);e.connect(Ca);let t=null;for(let n=0;n<3;n++){let s=i+n*.085,r=tn("triangle",4250+oi()*120,s,s+.06),o=dt(0);r.connect(o),o.connect(e),o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(.028,s+.012),o.gain.linearRampToValueAtTime(1e-4,s+.05),ri(r,[r,o]),t=r}if(t){let n=t.onended;t.onended=()=>{n?.();try{e.disconnect()}catch{}}}}function Ag(i,e,t){Math.abs(e.applied-t)<.004||(e.applied=t,i.setTargetAtTime(t,Fe.currentTime,.4))}function KC(i,e){let t=i.state,n=t==="playing"||t==="boss",s=n||t==="title"||t==="ending",r=0,o=0,a=0;if(s&&t!=="paused"&&(r=.05),n&&i.world&&i.player){let h=i.world.getBiome(i.player.position.x,i.player.position.z);h==="volcano"&&(o=.14),h==="lake"&&(a=.09)}t==="shrine"&&(r=0,o=0,a=0),Ag(Ls.wind.g.gain,Ls.wind,r),Ag(Ls.rumble.g.gain,Ls.rumble,o),Ag(Ls.water.g.gain,Ls.water,a);let l=t==="playing"&&!i.time.isNight,c=t==="playing"&&i.time.isNight;l?Jl<e+.4&&(YC(Math.max(Jl,e+.08)),Jl=Math.max(Jl,e)+1.2+oi()*4.5):Jl=Math.max(Jl,e+1.5),c?$l<e+.4&&(ZC(Math.max($l,e+.08)),$l=Math.max($l,e)+1.05+oi()*.25):$l=Math.max($l,e+1.5)}async function jC(i){i.audio={unlock(){try{if(Fe||IC(),Fe&&Fe.state!=="running"){let e=Fe.resume();e&&e.catch&&e.catch(()=>{})}}catch{}},play(e,t={}){try{if(!Fe||Fe.state!=="running")return;let n=XC[e];if(!n)return;n(Fe.currentTime+.005,t||{},Ae((t&&t.vol)!=null?t.vol:1,0,2))}catch{}},setMusic(e){try{let t=e||null;if(t===Ho||t&&!pd[t])return;Rg(t)}catch{}}},i.on("shrine-complete",()=>{try{GC()}catch{}}),i.on("boss-defeated",()=>{try{VC()}catch{}}),i.on("boss-phase",()=>{try{WC()}catch{}}),i.on("player-died",()=>{try{fd=!0,Rg(null),b_()}catch{}})}function JC(i,e){if(!Fe||Fe.state!=="running")return;let t=Fe.currentTime,n=i.state,s=1;n==="paused"&&(s=.4),t<Cg&&(s*=.3);let r=Ae(i.settings.musicVol!=null?i.settings.musicVol:.7,0,1),o=Ae(i.settings.sfxVol!=null?i.settings.sfxVol:.9,0,1);if(ec.gain.setTargetAtTime(r*s*.9,t,.12),Tt.gain.setTargetAtTime(o,t,.12),Ca.gain.setTargetAtTime(o*(n==="paused"?.2:.85),t,.25),n!=="paused"){let l;n==="title"?l="title":n==="ending"?l="ending":n==="boss"?l="boss":n==="shrine"?l="shrine":n==="playing"?l=i.time.isNight?"night":"field":l=null,l!==v_&&(v_=l,l!==Ho&&Rg(l))}if(n==="gameover"&&y_!=="gameover"&&!fd){fd=!0;try{b_()}catch{}}if(n==="playing"&&(fd=!1),y_=n,Ho&&!ko.some(l=>l.name===Ho&&!l.fading)){let l=M_(Ho,1.5);l&&ko.push(l)}let a=t+PC;for(let l of ko)HC(l,a);ko.some(l=>l.killAt&&t>l.killAt)&&(ko=ko.filter(l=>{if(l.killAt&&t>l.killAt){try{l.g.disconnect()}catch{}return!1}return!0})),Ls&&KC(i,t)}var rc={};Ns(rc,{init:()=>n3,update:()=>i3});var tt=null,yn=null,ie={},Vo={playTime:0,kills:0},S_="M12 20.3C7.9 17.2 1.7 12.6 1.7 7.8 1.7 4.8 4 2.6 6.7 2.6c2.1 0 4 1.2 5.3 3.3 1.3-2.1 3.2-3.3 5.3-3.3 2.7 0 5 2.2 5 5.2 0 4.8-6.2 9.4-10.3 12.5z",$C=150.8,QC=["\u9060\u304D\u6614\u2014\u2014\u5927\u5730\u30A2\u30EB\u30C7\u30A3\u30A2\u3092\u95C7\u3067\u8986\u3063\u305F\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9\u306F\u3001\u521D\u4EE3\u52C7\u8005\u306E\u5263\u306B\u3088\u3063\u3066\u5317\u306E\u53E4\u57CE\u306E\u5965\u6DF1\u304F\u306B\u5C01\u3058\u3089\u308C\u305F\u3002","\u3060\u304C\u6C38\u304D\u6642\u306F\u5C01\u5370\u3092\u8755\u307F\u3001\u9B54\u7363\u306F\u3044\u307E\u518D\u3073\u76EE\u899A\u3081\u308B\u3002\u57CE\u306F\u7634\u6C17\u306B\u6C88\u307F\u3001\u5927\u5730\u306B\u306F\u9B54\u7269\u306E\u5F71\u304C\u9019\u3044\u59CB\u3081\u305F\u2026\u2026\u3002","\u7DD1\u8863\u306E\u52C7\u8005\u3088\u2014\u20144\u3064\u306E\u7960\u3092\u5DE1\u308A\u300C\u6C17\u306E\u73E0\u300D\u30923\u3064\u96C6\u3081\u3001\u5317\u306E\u9B54\u57CE\u306E\u7D50\u754C\u3092\u7834\u308B\u306E\u3060\u3002\u5927\u5730\u306E\u547D\u904B\u306F\u3001\u305D\u306E\u624B\u306B\u3002"],e3=[["W A S D","\u79FB\u52D5"],["\u30DE\u30A6\u30B9","\u30AB\u30E1\u30E9"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3"],["C","\u56DE\u907F\u30ED\u30FC\u30EB"]],t3=[["WASD / \u77E2\u5370","\u79FB\u52D5"],["\u30DE\u30A6\u30B9 / \u30C9\u30E9\u30C3\u30B0","\u30AB\u30E1\u30E9(\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u56FA\u5B9A)"],["Shift","\u30C0\u30C3\u30B7\u30E5(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB)"],["Space","\u30B8\u30E3\u30F3\u30D7"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483(3\u6BB5\u30B3\u30F3\u30DC)"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u76FE\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3\u5207\u66FF"],["C","\u56DE\u907F\u30ED\u30FC\u30EB(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB\u30FB\u7121\u6575\u6642\u9593)"],["E","\u8ABF\u3079\u308B\u30FB\u8A71\u3059\u30FB\u6C7A\u5B9A"],["Esc / P","\u30DD\u30FC\u30BA"]];function _t(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t&&t.appendChild(n),n}function Uh(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}function A_(i){return i.split(" / ").map(e=>`<span class="kc">${e}</span>`).join('<span class="ksep">/</span>')}function R_(i){i=Math.max(0,Math.floor(i));let e=Math.floor(i/3600),t=Math.floor(i%3600/60),n=i%60;return e>0?`${e}\u6642\u9593${t}\u5206${n}\u79D2`:t>0?`${t}\u5206${n}\u79D2`:`${n}\u79D2`}function md(i){clearTimeout(i._hideT),i.classList.remove("leaving"),i.classList.add("visible")}function gd(i){!i.classList.contains("visible")||i.classList.contains("leaving")||(i.classList.add("leaving"),i._hideT=setTimeout(()=>i.classList.remove("visible","leaving"),400))}async function n3(i){tt=i,yn=document.getElementById("ui-root"),yn.innerHTML="",r3(),o3(),c3(),y3(),l3(),b3(),M3(),C3(),w3(),E3(),a3(),I3(),D3(),U3(),z3(),F3(),H3(),g3(),i.ui={showMessage:S3,showDialog:U_,setPrompt:P_,toast:T3,setBossBar:I_,flash:k_},i.on("state",s3),i.on("player-damaged",d3),i.on("enemy-killed",()=>{Vo.kills++}),i.on("pickup",p3),i.on("game-start",()=>{Vo.playTime=0,Vo.kills=0}),document.body.dataset.uistate=i.state}function i3(i,e){let t=i.state,n=t==="playing"||t==="shrine"||t==="boss";n&&(Vo.playTime+=e),zh.open&&i.input.justPressed("Escape")&&bd(),at.active&&A3(e,n||t==="title"),n&&(f3(e),_3()),bi.visible&&L_(e)}function s3(i){let e=i.to;document.body.dataset.uistate=e,bd(!0);let t=e==="playing"||e==="shrine"||e==="boss";ie.hud.classList.toggle("on",t),t&&sc(),e==="title"?md(ie.title):gd(ie.title),e==="paused"?(N3(),md(ie.pause)):gd(ie.pause),e==="gameover"?md(ie.gameover):gd(ie.gameover),e==="ending"?(O3(),md(ie.ending)):gd(ie.ending),!t&&e!=="paused"&&(P_(null),ie.reticle.classList.remove("on"),Ug=!1,ie.guide.classList.remove("on"),ie.vignette.classList.remove("active"),Dh=!1,(e==="title"||e==="ending")&&I_(!1)),(e==="gameover"||e==="title"||e==="ending")&&R3()}function r3(){let i=_t("div","svg-defs",yn);i.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
    <linearGradient id="ui-hgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff9aa2"/><stop offset=".42" stop-color="#e2465a"/><stop offset="1" stop-color="#9a2136"/>
    </linearGradient>
    <radialGradient id="ui-hsheen" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="rgba(255,255,255,.85)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <linearGradient id="ui-ggrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c6f4d5"/><stop offset=".45" stop-color="#5cc488"/><stop offset="1" stop-color="#217c4d"/>
    </linearGradient>
    <linearGradient id="ui-stgrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8bf1e0"/><stop offset=".55" stop-color="#3fd9c4"/><stop offset="1" stop-color="#23b7a2"/>
    </linearGradient>
  </defs></svg>`}function o3(){ie.vignette=_t("div","",yn),ie.vignette.id="vignette"}function a3(){ie.flash=_t("div","",yn),ie.flash.id="flash"}function l3(){ie.floatLayer=_t("div","",yn),ie.floatLayer.id="float-layer"}function c3(){let i=_t("div","",yn);i.id="hud",ie.hud=i;let e=_t("div","",i);e.id="hud-left",ie.hearts=_t("div","",e),ie.hearts.id="hearts";let t=_t("div","",e);t.id="stamina",ie.stamina=t,t.innerHTML=`<svg viewBox="0 0 60 60">
    <circle class="stb" cx="30" cy="30" r="24"/>
    <circle class="stf" cx="30" cy="30" r="24" transform="rotate(-90 30 30)" stroke-dashoffset="0"/>
  </svg>`,ie.stFg=t.querySelector(".stf");let n=_t("div","",e);n.id="orbs",ie.orbs=[];for(let l=0;l<4;l++)ie.orbs.push(_t("span","orb",n));let s=_t("div","",e);s.id="gems",ie.gems=s,s.innerHTML=`<svg viewBox="0 0 24 24">
    <path d="M12 2.4 19.6 9 12 21.6 4.4 9Z" fill="url(#ui-ggrad)" stroke="rgba(235,255,240,.4)" stroke-width=".7"/>
    <path d="M4.4 9h15.2M12 2.4 8.4 9l3.6 12.6L15.6 9 12 2.4" fill="none" stroke="rgba(240,255,245,.3)" stroke-width=".6"/>
  </svg><span class="g-count">0</span>`,ie.gemCount=s.querySelector(".g-count");let r=_t("div","",i);r.id="minimap";let o=document.createElement("canvas");o.width=340,o.height=340,r.appendChild(o),ie.mapCanvas=o;let a=_t("div","",i);a.id="prompt",ie.prompt=a,ie.pKey=_t("span","p-key",a),ie.pTxt=_t("span","p-txt",a)}var Pg=-1,xd=-1,Dh=!1;function h3(i,e){let t="";for(let n=0;n<e;n++){let s=i-n,r=s>=1?"full":s>=.5?"half":"empty";t+=`<svg class="heart ${r}" viewBox="0 0 24 22"><path class="hb" d="${S_}"/><path class="hf" d="${S_}" fill="url(#ui-hgrad)"/><ellipse class="hsheen" cx="8.4" cy="7" rx="3.1" ry="2" fill="url(#ui-hsheen)"/></svg>`}ie.hearts.innerHTML=t}var nc=!1,Ig=0,vd=!1,E_=-1,Lg=-1,yd=-1,Nh=0,_d=!1,u3=4.5;function sc(i){Nh=0,typeof window<"u"&&(window.__wake=window.__wake||{},window.__wake[i||"?"]=(window.__wake[i||"?"]||0)+1),_d&&(_d=!1,ie.hud&&ie.hud.classList.remove("idle"))}function f3(i){let e=tt.player;if(!e)return;let t=Math.round(Ae(e.hp,0,99)*2)/2,n=Math.max(1,Math.round(e.maxHp));(t!==Pg||n!==xd)&&(xd>0&&n>xd&&Uh(ie.hearts,"bless"),h3(t,n),Pg>=0&&sc("hp"),Pg=t,xd=n);let s=e.hp>0&&e.hp<=1;s!==Dh&&(Dh=s,ie.vignette.classList.toggle("active",s));let r=Ae(e.stamina/Math.max(1,e.maxStamina),0,1);r>=.999?(Ig+=i,nc&&Ig>.55&&(nc=!1,ie.stamina.classList.remove("on"))):(Ig=0,nc||(nc=!0,ie.stamina.classList.add("on"))),!vd&&e.stamina<=.02?(vd=!0,ie.stamina.classList.add("ex")):vd&&e.stamina>30&&(vd=!1,ie.stamina.classList.remove("ex"));let o=Math.round($C*(1-r)*10)/10;o!==E_&&(E_=o,ie.stFg.style.strokeDashoffset=o);let a=Ae(e.spiritOrbs|0,0,4);if(a!==Lg){for(let u=0;u<4;u++){let f=ie.orbs[u];u<a?f.classList.contains("lit")||(f.classList.add("lit"),Uh(f,"gain"),setTimeout(()=>f.classList.remove("gain"),950)):f.classList.remove("lit")}Lg>=0&&sc("orb"),Lg=a}let l=e.gems|0;l!==yd&&(ie.gemCount.textContent=l,yd>=0&&l>yd&&(Uh(ie.gems,"pop"),sc("gem")),yd=l);let c=bi.visible||nc||!!Md||Dh||at.active;c?Nh=0:Nh+=i;let h=!c&&Nh>u3;h!==_d&&(_d=h,ie.hud.classList.toggle("idle",h)),typeof window<"u"&&(window.__hud={activeT:Math.round(Nh*10)/10,busy:c,idle:h,bv:bi.visible,ss:nc,pc:!!Md,lh:Dh,da:at.active}),v3()}function d3(){sc(),Uh(ie.hearts,"hurt"),k_("rgba(186,26,42,1)",.16)}function p3(i){sc();let e=i&&i.kind,t=innerWidth*.5,n=innerHeight*.58;if(i&&i.pos&&tt.camera){let r=C_(i.pos,1.4);r.ok&&(t=r.x,n=r.y)}m3("+1",t,n,e==="heart"?"#ff93a0":e==="orb"?"#66ecd9":"#93e6ab")}function m3(i,e,t,n){let s=_t("div","float-txt",ie.floatLayer);s.textContent=i,s.style.left=e+"px",s.style.top=t+"px",n&&(s.style.color=n),setTimeout(()=>s.remove(),1250)}var Go={g:null,off:null,shade:null};function g3(){try{let i=ie.mapCanvas.getContext("2d");Go.g=i;let e=i.createRadialGradient(85,85,22,85,85,85);e.addColorStop(0,"rgba(8,12,14,.05)"),e.addColorStop(.62,"rgba(8,12,14,.16)"),e.addColorStop(.86,"rgba(7,10,12,.4)"),e.addColorStop(1,"rgba(6,9,11,.66)"),Go.shade=e;let t=tt.world;if(!t||!t.getHeight)return;let n=64,s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),o=r.createImageData(n,n),a=new Float32Array(n*n),l=1e9,c=-1e9;for(let m=0;m<n;m++)for(let p=0;p<n;p++){let y=-1e3+(p+.5)*2e3/n,_=-1e3+(m+.5)*2e3/n,v=0;try{v=t.getHeight(y,_)||0}catch{}a[m*n+p]=v,v<l&&(l=v),v>c&&(c=v)}let h=Math.max(1,c-l),u={plains:[92,118,82],forest:[58,92,74],lake:[76,116,134],volcano:[112,78,66],castle:[88,80,102],ruins:[120,114,100]},f=[64,102,122],d=typeof t.waterLevel=="number"?t.waterLevel:-1e9;for(let m=0;m<n;m++)for(let p=0;p<n;p++){let y=-1e3+(p+.5)*2e3/n,_=-1e3+(m+.5)*2e3/n,v="plains";try{v=t.getBiome(y,_)||"plains"}catch{}let L=a[m*n+p],E=L<=d+.15?f:u[v]||u.plains,w=.66+.34*((L-l)/h),P=(m*n+p)*4;o.data[P]=Math.min(255,E[0]*w),o.data[P+1]=Math.min(255,E[1]*w),o.data[P+2]=Math.min(255,E[2]*w),o.data[P+3]=255}r.putImageData(o,0,0);let g=document.createElement("canvas");g.width=g.height=256;let x=g.getContext("2d");x.imageSmoothingEnabled=!0,x.imageSmoothingQuality="high",x.drawImage(s,0,0,256,256),Go.off=g}catch{}}function x3(i,e,t,n,s){i.save(),i.translate(e,t),i.rotate(Math.PI/4),i.shadowColor=s,i.shadowBlur=5,i.fillStyle=s,i.fillRect(-n*.7,-n*.7,n*1.4,n*1.4),i.restore()}function v3(){let i=Go.g;if(!i)return;let e=170,t=85,n=83,s=e/2e3;i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,e,e),i.save(),i.beginPath(),i.arc(t,t,n,0,Math.PI*2),i.clip(),Go.off?i.drawImage(Go.off,0,0,256,256,0,0,e,e):(i.fillStyle="#20303a",i.fillRect(0,0,e,e)),Go.shade&&(i.fillStyle=Go.shade,i.fillRect(0,0,e,e));let r=tt.shrines&&tt.shrines.list;if(r)for(let l=0;l<r.length;l++){let c=r[l];!c||!c.pos||x3(i,t+c.pos.x*s,t+c.pos.z*s,4,c.completed?"#e9cd75":"#3fe0c8")}let o=tt.world&&tt.world.castleGatePos;if(o){let l=t+o.x*s,c=t+o.z*s;i.save(),i.shadowColor="#c08df0",i.shadowBlur=6,i.fillStyle="#bd88ef",i.beginPath(),i.moveTo(l,c-5.4),i.lineTo(l+4.8,c+3.8),i.lineTo(l-4.8,c+3.8),i.closePath(),i.fill(),i.restore()}let a=tt.player;if(a&&a.position){let l=a.position.x*s,c=a.position.z*s,h=Math.hypot(l,c),u=n-8;h>u&&(l*=u/h,c*=u/h),i.save(),i.translate(t+l,t+c),i.rotate(Math.PI-(a.heading||0)),i.shadowColor="rgba(255,244,206,.95)",i.shadowBlur=5,i.fillStyle="#fff6da",i.beginPath(),i.moveTo(0,-6.2),i.lineTo(4.4,4.8),i.lineTo(0,2.3),i.lineTo(-4.4,4.8),i.closePath(),i.fill(),i.restore()}i.restore(),i.beginPath(),i.arc(t,t,n,0,Math.PI*2),i.strokeStyle="rgba(201,162,39,.62)",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(t,t,n-2.6,0,Math.PI*2),i.strokeStyle="rgba(233,205,117,.14)",i.lineWidth=.8,i.stroke(),i.beginPath(),i.arc(t,t-n+9,6.6,0,Math.PI*2),i.fillStyle="rgba(8,12,15,.7)",i.fill(),i.strokeStyle="rgba(201,162,39,.42)",i.lineWidth=.8,i.stroke(),i.font="9px serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle="rgba(236,201,102,.92)",i.fillText("\u5317",t,t-n+9.4)}var T_=new $e,ic={x:0,y:0,ok:!1},Ug=!1;function C_(i,e){let t=tt.camera;return t.updateMatrixWorld(),T_.copy(t.matrixWorld).invert(),Ne.v1.set(i.x,i.y+(e||0),i.z).applyMatrix4(T_),Ne.v1.z>-.35?(ic.ok=!1,ic):(Ne.v1.applyMatrix4(t.projectionMatrix),ic.ok=Ne.v1.x>-1.08&&Ne.v1.x<1.08&&Ne.v1.y>-1.08&&Ne.v1.y<1.08,ic.x=(Ne.v1.x*.5+.5)*innerWidth,ic.y=(.5-Ne.v1.y*.5)*innerHeight,ic)}function y3(){let i=_t("div","",yn);i.id="reticle",ie.reticle=i,_t("div","r1",i),_t("div","r2",i)}function _3(){let i=tt.camera3p&&tt.camera3p.lockTarget,e=!1;if(i&&i.alive!==!1&&i.pos){let t=C_(i.pos,(i.radius||.8)*1.1);t.ok&&(e=!0,ie.reticle.style.transform=`translate3d(${t.x.toFixed(1)}px,${t.y.toFixed(1)}px,0)`)}e!==Ug&&(Ug=e,ie.reticle.classList.toggle("on",e))}var Md=null;function P_(i){let e=i||null;if(e===Md)return;if(Md=e,!e){ie.prompt.classList.remove("on");return}let t=/^([A-Za-z0-9]{1,8})\s*キー\s*[::]?\s*(.*)$/.exec(e);t?(ie.pKey.style.display="",ie.pKey.textContent=t[1],ie.pTxt.textContent=t[2]||""):(ie.pKey.style.display="none",ie.pTxt.textContent=e),Uh(ie.prompt,"on")}var bi={visible:!1,ghost:1,lastFill:-1,lastGhost:-1};function M3(){let i=_t("div","",yn);i.id="bossbar",ie.bossbar=i,i.innerHTML=`<div class="bb-name"></div>
    <div class="bb-frame"><div class="bb-track"><div class="bb-ghost"></div><div class="bb-fill"></div></div></div>`,ie.bbName=i.querySelector(".bb-name"),ie.bbFill=i.querySelector(".bb-fill"),ie.bbGhost=i.querySelector(".bb-ghost")}function I_(i,e){let t=!!i;e!=null&&(ie.bbName.textContent=String(e)),t!==bi.visible&&(bi.visible=t,t&&(bi.ghost=1,bi.lastFill=-1,bi.lastGhost=-1,L_(0)),ie.bossbar.classList.toggle("on",t))}function L_(i){let e=tt.boss;if(!e)return;let t=Ae(e.maxHp>0?e.hp/e.maxHp:0,0,1);bi.ghost=Math.max(t,Ve(bi.ghost,t,2.2,i));let n=Math.round(t*1e3)/10,s=Math.round(bi.ghost*1e3)/10;n!==bi.lastFill&&(bi.lastFill=n,ie.bbFill.style.width=n+"%"),s!==bi.lastGhost&&(bi.lastGhost=s,ie.bbGhost.style.width=s+"%")}var zg=[],Dg=!1;function b3(){ie.msgLayer=_t("div","",yn),ie.msgLayer.id="msg-layer"}function S3(i,e){let t=e||{};zg.push({text:String(i??""),duration:typeof t.duration=="number"?t.duration:3,sub:t.sub==null?null:String(t.sub)}),D_()}function D_(){if(Dg||!zg.length)return;Dg=!0;let i=zg.shift(),e=_t("div","msg",ie.msgLayer);_t("div","msg-rule",e);let t=_t("div","msg-text",e);if(t.textContent=i.text,i.sub){let n=_t("div","msg-sub",e);n.textContent=i.sub}_t("div","msg-rule",e),requestAnimationFrame(()=>e.classList.add("in")),setTimeout(()=>{e.classList.add("outing"),setTimeout(()=>{e.remove(),Dg=!1,D_()},620)},Math.max(.4,i.duration)*1e3+420)}var Og=[],Ng=0;function E3(){ie.toastLayer=_t("div","",yn),ie.toastLayer.id="toast-layer"}function T3(i){Og.push(String(i??"")),N_()}function N_(){if(Ng>=4||!Og.length)return;Ng++;let i=Og.shift(),e=_t("div","toast",ie.toastLayer),t=_t("span","t-dia",e);t.textContent="\u25C6";let n=_t("span","",e);n.textContent=i,requestAnimationFrame(()=>e.classList.add("in")),setTimeout(()=>{e.classList.add("out"),setTimeout(()=>{e.remove(),Ng--,N_()},380)},2500)}var at={q:[],active:!1,lines:null,onDone:null,li:0,chars:0,t:0,done:!1};function w3(){let i=_t("div","panel",yn);i.id="dialog",ie.dialog=i;let e=_t("div","dlg-orn",i);e.textContent="\u25C6",ie.dlgText=_t("div","dlg-text",i),ie.dlgNext=_t("div","dlg-next",i),ie.dlgNext.textContent="\u25BC",i.addEventListener("click",()=>B_())}function U_(i,e){let t=Array.isArray(i)?i.filter(n=>n!=null).map(String):i!=null?[String(i)]:[];if(!t.length){typeof e=="function"&&e();return}at.q.push({lines:t,onDone:e}),at.active||z_()}function z_(){let i=at.q.shift();if(!i){at.active=!1;return}at.active=!0,at.lines=i.lines,at.onDone=i.onDone,ie.dialog.classList.add("visible"),O_(0)}function O_(i){at.li=i,at.chars=0,at.t=0,at.done=!1,ie.dlgText.textContent="",ie.dlgNext.classList.remove("on")}function F_(){let i=at.lines[at.li];ie.dlgText.textContent=i.slice(0,at.chars),at.chars>=i.length&&(at.done=!0,ie.dlgNext.classList.add("on"))}function B_(){if(!at.active||!at.lines)return;if(tt.audio&&tt.audio.play&&tt.audio.play("ui"),!at.done){at.chars=at.lines[at.li].length,F_();return}if(at.li<at.lines.length-1){O_(at.li+1);return}let i=at.onDone;if(at.lines=null,at.onDone=null,at.done=!1,ie.dialog.classList.remove("visible"),setTimeout(z_,280),typeof i=="function")try{i()}catch{}}function A3(i,e){if(at.lines){if(!at.done){at.t+=i;let t=at.lines[at.li],n=at.chars;for(;at.t>=.02&&n<t.length;)at.t-=.02,n++;n!==at.chars&&(at.chars=n,F_())}e&&tt.input.justPressed("KeyE")&&B_()}}function R3(){at.q.length=0,at.lines=null,at.onDone=null,at.active=!1,at.done=!1,ie.dialog.classList.remove("visible")}function k_(i,e){let t=ie.flash;t.style.transition="none",t.style.background=i||"#ffffff",t.style.opacity=String(Ae(e??.5,0,1)),t.offsetWidth,t.style.transition="opacity .3s ease-out",t.style.opacity="0"}function C3(){let i=_t("div","panel",yn);i.id="guide",ie.guide=i;let e="";for(let[t,n]of e3)e+=`<div class="gd-k">${A_(t)}</div><div class="gd-a">${n}</div>`;i.innerHTML=`<div class="gd-title">\u65C5\u306E\u5FC3\u5F97</div><div class="gd-rows">${e}</div>`}function P3(){ie.guide.classList.add("on"),clearTimeout(ie.guide._t),ie.guide._t=setTimeout(()=>ie.guide.classList.remove("on"),5e3)}function I3(){let i=_t("section","screen",yn);i.id="title-screen",ie.title=i,i.innerHTML=`
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
    <footer class="tt-foot">\u30AA\u30EA\u30B8\u30CA\u30EB\u30D5\u30A1\u30F3\u30E1\u30A4\u30C9\u4F5C\u54C1 \u2014 \u30BC\u30EB\u30C0\u306E\u4F1D\u8AAC\u3078\u306E\u30AA\u30DE\u30FC\u30B8\u30E5</footer>`,i.addEventListener("click",e=>{let t=e.target.closest("button[data-act]");if(!t)return;let n=t.dataset.act;n==="start"?L3():n==="controls"?Fg("controls"):n==="settings"&&Fg("settings")})}function L3(){tt.emit("game-start"),U_(QC,P3)}function D3(){let i=_t("section","screen",yn);i.id="pause-screen",ie.pause=i,i.innerHTML=`
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
    </div>`,ie.pzTime=i.querySelector(".pz-time"),ie.pzKills=i.querySelector(".pz-kills"),ie.pzGems=i.querySelector(".pz-gems"),i.addEventListener("click",e=>{let t=e.target.closest("button[data-act]");if(!t)return;let n=t.dataset.act;n==="resume"?tt.setState(tt._pausedFrom||"playing"):n==="settings"?Fg("settings"):n==="title"&&tt.emit("title-request")})}function N3(){ie.pzTime.textContent=R_(Vo.playTime),ie.pzKills.textContent=String(Vo.kills),ie.pzGems.textContent=String(tt.player?tt.player.gems|0:0)}function U3(){let i=_t("section","screen",yn);i.id="gameover-screen",ie.gameover=i,i.innerHTML=`
    <div class="go-text">\u52C7\u8005\u306F\u5012\u308C\u305F\u2026</div>
    <nav class="go-menu">
      <button class="obtn" data-act="respawn">\u3075\u305F\u305F\u3073\u6311\u3080</button>
      <button class="obtn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>
    </nav>`,i.addEventListener("click",e=>{let t=e.target.closest("button[data-act]");t&&(t.dataset.act==="respawn"?tt.emit("respawn-request"):tt.emit("title-request"))})}function z3(){let i=_t("section","screen",yn);i.id="ending-screen",ie.ending=i,i.innerHTML=`
    <div class="ed-l1">\u9B54\u7363\u306F\u8A0E\u305F\u308C\u3001\u5927\u5730\u306B\u671D\u304C\u623B\u3063\u305F</div>
    <div class="ed-l2">\u4F1D\u8AAC\u306F\u8A9E\u308A\u7D99\u304C\u308C\u308B</div>
    <div class="ed-orn">\u25C6</div>
    <div class="ed-stats">
      <div class="stat"><span class="s-l">\u30AF\u30EA\u30A2\u6642\u9593</span><span class="s-v ed-time">\u2014</span></div>
      <div class="stat"><span class="s-l">\u8A0E\u4F10\u3057\u305F\u9B54\u7269</span><span class="s-v ed-kills">0</span></div>
      <div class="stat"><span class="s-l">\u96C6\u3081\u305F\u7DD1\u77F3</span><span class="s-v ed-gems">0</span></div>
    </div>
    <button class="mbtn ed-btn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>`,i.querySelector(".ed-btn").addEventListener("click",()=>tt.emit("title-request"))}function O3(){ie.ending.querySelector(".ed-time").textContent=R_(Vo.playTime),ie.ending.querySelector(".ed-kills").textContent=String(Vo.kills),ie.ending.querySelector(".ed-gems").textContent=String(tt.player?tt.player.gems|0:0)}var zh={open:!1,kind:null};function F3(){let i=_t("div","",yn);i.id="modal-layer",ie.modal=i,i.innerHTML=`
    <div class="modal-back"></div>
    <div class="modal panel">
      <button class="modal-x" aria-label="\u9589\u3058\u308B">\xD7</button>
      <h2 class="modal-title"></h2>
      <div class="modal-body"></div>
    </div>`,ie.modalTitle=i.querySelector(".modal-title"),ie.modalBody=i.querySelector(".modal-body"),i.querySelector(".modal-back").addEventListener("click",()=>bd()),i.querySelector(".modal-x").addEventListener("click",()=>bd()),B3(),k3()}function B3(){let i=document.createElement("div");i.className="set-body",i.innerHTML=`
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
    <p class="set-note">\u753B\u8CEA\u3092\u5909\u3048\u308B\u3068\u3001\u8349\u6728\u306E\u5BC6\u5EA6\u3084\u5149\u306E\u8868\u73FE\u304C\u5909\u308F\u308A\u307E\u3059\u3002</p>`,ie.setBody=i,i.querySelector(".seg").addEventListener("click",n=>{let s=n.target.closest("button[data-q]");s&&(tt.settings.quality=s.dataset.q,tt.applyQuality&&tt.applyQuality(),H_())});let e=i.querySelector(".vol-music"),t=i.querySelector(".vol-sfx");e.addEventListener("input",()=>{tt.settings.musicVol=Ae(Number(e.value)||0,0,1),i.querySelector(".vm").textContent=Math.round(tt.settings.musicVol*100)}),t.addEventListener("input",()=>{tt.settings.sfxVol=Ae(Number(t.value)||0,0,1),i.querySelector(".vs").textContent=Math.round(tt.settings.sfxVol*100)}),t.addEventListener("change",()=>{tt.audio&&tt.audio.play&&tt.audio.play("ui")})}function H_(){let i=ie.setBody;i.querySelectorAll(".seg button").forEach(n=>n.classList.toggle("active",n.dataset.q===tt.settings.quality));let e=i.querySelector(".vol-music"),t=i.querySelector(".vol-sfx");e.value=tt.settings.musicVol,t.value=tt.settings.sfxVol,i.querySelector(".vm").textContent=Math.round(tt.settings.musicVol*100),i.querySelector(".vs").textContent=Math.round(tt.settings.sfxVol*100)}function k3(){let i=document.createElement("div");i.className="ctl-body";let e="";for(let[t,n]of t3)e+=`<tr><td class="k">${A_(t)}</td><td class="a">${n}</td></tr>`;i.innerHTML=`<table class="ctl-table"><tbody>${e}</tbody></table>`,ie.ctlBody=i}function Fg(i){zh.open=!0,zh.kind=i,ie.modalTitle.textContent=i==="settings"?"\u8A2D\u5B9A":"\u64CD\u4F5C\u65B9\u6CD5",ie.modalBody.innerHTML="",ie.modalBody.appendChild(i==="settings"?ie.setBody:ie.ctlBody),i==="settings"&&H_(),ie.modal.classList.toggle("wide",i==="controls"),ie.modal.classList.add("open"),yn.classList.add("modal-open")}function bd(i){zh.open&&(zh.open=!1,ie.modal.classList.remove("open"),yn.classList.remove("modal-open"),!i&&tt.audio&&tt.audio.play&&tt.audio.play("uiBack"))}var w_=null;function H3(){yn.addEventListener("pointerover",i=>{let e=i.target.closest?i.target.closest("button"):null;e!==w_&&(w_=e,e&&tt.audio&&tt.audio.play&&tt.audio.play("ui"))}),yn.addEventListener("pointerdown",i=>{i.target.closest&&i.target.closest("button")&&tt.audio&&tt.audio.play&&tt.audio.play("ui")})}var Wo=document.getElementById("game"),Js=new Nu({canvas:Wo,antialias:!0,powerPreference:"high-performance"});Js.shadowMap.enabled=!0;Js.shadowMap.type=P0;Js.outputColorSpace=an;Js.toneMapping=Xc;Js.toneMappingExposure=1.05;var Y_=new zu,Oh=new In(55,innerWidth/innerHeight,.3,3e3);Oh.position.set(0,8,262);var Ed=new Set,Pa=new Set,Sn={dx:0,dy:0,wheel:0,left:!1,right:!1,leftJust:!1,rightJust:!1};addEventListener("keydown",i=>{i.repeat||(Ed.add(i.code),Pa.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),Z_())});addEventListener("keyup",i=>Ed.delete(i.code));addEventListener("blur",()=>{Ed.clear(),Sn.left=Sn.right=!1});Wo.addEventListener("pointerdown",i=>{i.button===0&&(Sn.left=!0,Sn.leftJust=!0),i.button===2&&(Sn.right=!0,Sn.rightJust=!0),Z_();let e=ut.state;if((e==="playing"||e==="shrine"||e==="boss")&&!document.pointerLockElement)try{let t=Wo.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}});addEventListener("pointerup",i=>{i.button===0&&(Sn.left=!1),i.button===2&&(Sn.right=!1)});var js={x:innerWidth/2,y:innerHeight/2};addEventListener("mousemove",i=>{js.x=i.clientX,js.y=i.clientY;let e=ut.state,t=e==="playing"||e==="shrine"||e==="boss";(document.pointerLockElement===Wo||t||Sn.left||Sn.right)&&(Sn.dx+=i.movementX,Sn.dy+=i.movementY)});var us=90,G_=1100;function G3(i){if(document.pointerLockElement===Wo)return;let e=ut.state;if(e!=="playing"&&e!=="shrine"&&e!=="boss")return;let t=innerWidth,n=innerHeight,s=0,r=0;js.x<us?s=-(us-js.x)/us:js.x>t-us&&(s=(js.x-(t-us))/us),js.y<us?r=-(us-js.y)/us:js.y>n-us&&(r=(js.y-(n-us))/us),Sn.dx+=s*Math.abs(s)*G_*i,Sn.dy+=r*Math.abs(r)*G_*i}addEventListener("wheel",i=>{Sn.wheel+=i.deltaY},{passive:!0});Wo.addEventListener("contextmenu",i=>i.preventDefault());var V_=!1;function Z_(){V_||(V_=!0,ut.audio?.unlock?.())}var Bg=new EventTarget,ut={renderer:Js,scene:Y_,camera:Oh,canvas:Wo,state:"loading",setState(i){let e=ut.state;e!==i&&(ut.state=i,(i==="paused"||i==="title"||i==="gameover"||i==="ending")&&document.exitPointerLock?.(),ut.emit("state",{from:e,to:i}))},events:Bg,emit(i,e){Bg.dispatchEvent(new CustomEvent(i,{detail:e}))},on(i,e){Bg.addEventListener(i,t=>e(t.detail))},time:{elapsed:0,dt:0,dayPhase:.1,isNight:!1},input:{keys:Ed,justPressed:i=>Pa.has(i),mouse:Sn,get pointerLocked(){return document.pointerLockElement===Wo}},settings:{quality:"high",musicVol:.7,sfxVol:.9},quality:{},applyQuality(){let i=ut.settings.quality,e=window.devicePixelRatio||1;ut.quality={pixelRatio:i==="high"?Math.min(e,2):i==="medium"?Math.min(e,1.35):1,shadowMapSize:i==="high"?2048:i==="medium"?1024:512,grassMul:i==="high"?1:i==="medium"?.55:.28,particleMul:i==="high"?1:i==="medium"?.6:.35,postFX:i!=="low",drawDist:i==="high"?1:i==="medium"?.85:.65},Js.setPixelRatio(ut.quality.pixelRatio),Js.setSize(innerWidth,innerHeight),ut.emit("quality-changed",ut.quality)},getGroundHeight:()=>0,colliders:[],playerBounds:null,world:null,sky:null,player:null,camera3p:null,combat:null,shrines:null,boss:null,ui:null,audio:null,effects:null};ut.on("game-start",()=>ut.setState("playing"));ut.on("player-died",()=>{setTimeout(()=>{ut.state!=="gameover"&&ut.setState("gameover")},1600)});ut.on("respawn-request",()=>{let i=ut.player;i.heal(i.maxHp),i.teleport(ut.world.startPos.clone(),Math.PI),ut.setState("playing")});ut.on("title-request",()=>{let i=ut.player;i.heal(i.maxHp),i.teleport(ut.world.startPos.clone(),Math.PI),ut.setState("title")});addEventListener("resize",()=>{Oh.aspect=innerWidth/innerHeight,Oh.updateProjectionMatrix(),Js.setSize(innerWidth,innerHeight),ut.effects?.onResize?.(innerWidth,innerHeight)});var W_=document.getElementById("boot-status"),X_=document.getElementById("boot-bar");function q_(i,e,t){W_&&(W_.textContent=t),X_&&(X_.style.width=`${Math.round(i/e*100)}%`)}var Sd=[["\u5927\u5730\u3092\u5275\u9020\u3057\u3066\u3044\u307E\u3059\u2026",ih],["\u7A7A\u3068\u5149\u3092\u547C\u3093\u3067\u3044\u307E\u3059\u2026",ah],["\u98A8\u306E\u7C92\u5B50\u3092\u7E54\u3063\u3066\u3044\u307E\u3059\u2026",dh],["\u52C7\u8005\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u3044\u307E\u3059\u2026",qf],["\u8996\u754C\u3092\u6574\u3048\u3066\u3044\u307E\u3059\u2026",bh],["\u9B54\u7269\u304C\u8822\u3044\u3066\u3044\u307E\u3059\u2026",nd],["\u7960\u306B\u706F\u3092\u70B9\u3057\u3066\u3044\u307E\u3059\u2026",rd],["\u9B54\u57CE\u304C\u8ECB\u3093\u3067\u3044\u307E\u3059\u2026",cd],["\u65CB\u5F8B\u3092\u7D21\u3044\u3067\u3044\u307E\u3059\u2026",tc],["\u65C5\u652F\u5EA6\u3092\u3057\u3066\u3044\u307E\u3059\u2026",rc]];async function V3(){ut.applyQuality();let i=0;for(let[e,t]of Sd){q_(i,Sd.length,e),await new Promise(n=>requestAnimationFrame(n));try{await t.init(ut)}catch(n){console.warn("[init\u5931\u6557]",e,n)}i++}q_(Sd.length,Sd.length,"\u6E96\u5099\u5B8C\u4E86"),document.getElementById("boot")?.classList.add("boot-done"),setTimeout(()=>document.getElementById("boot")?.remove(),900),ut.setState("title"),requestAnimationFrame(K_)}var W3=new Sl,X3=240,q3=[qf,bh,ih,ah,nd,rd,cd,dh,tc,rc],Y3=[bh,ih,ah,dh,tc,rc],Z3=[tc,rc];function K_(){requestAnimationFrame(K_);let i=Ae(W3.getDelta(),0,1/20);ut.time.dt=i,ut.time.elapsed+=i,G3(i);let e=ut.state,t=e==="playing"||e==="shrine"||e==="boss"?q3:e==="title"||e==="gameover"||e==="ending"?Y3:e==="paused"?Z3:null;if((e==="playing"||e==="boss"||e==="title")&&(ut.time.dayPhase=(ut.time.dayPhase+i/X3)%1),ut.time.isNight=ut.time.dayPhase>.55&&ut.time.dayPhase<.95,(e==="playing"||e==="shrine"||e==="boss")&&(Pa.has("Escape")||Pa.has("KeyP"))?(ut._pausedFrom=e,ut.setState("paused")):e==="paused"&&(Pa.has("Escape")||Pa.has("KeyP"))&&ut.setState(ut._pausedFrom||"playing"),t)for(let n of t)try{n.update(ut,i)}catch(s){n._errOnce||(n._errOnce=!0,console.warn("[update\u5931\u6557]",s))}try{ut.effects?.render?.(i)}catch{Js.render(Y_,Oh)}Pa.clear(),Sn.dx=0,Sn.dy=0,Sn.wheel=0,Sn.leftJust=!1,Sn.rightJust=!1}window.__ctx=ut;V3();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
