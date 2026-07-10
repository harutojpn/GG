(()=>{var dv=Object.defineProperty;var bs=(i,e)=>{for(var t in e)dv(i,t,{get:e[t],enumerable:!0})};var pv=0,gg=1,mv=2;var Ox=1,t0=2,Ys=3,ws=0,Rn=1,un=2,Ts=0,$s=1,on=2,xg=3,yg=4,gv=5,Uo=100,xv=101,yv=102,_v=103,vv=104,Mv=200,bv=201,Ev=202,Sv=203,Dd=204,Nd=205,Tv=206,wv=207,Av=208,Rv=209,Cv=210,Iv=211,Pv=212,Lv=213,Dv=214,Ud=0,zd=1,Fd=2,Ga=3,Od=4,Bd=5,kd=6,Hd=7,Bx=0,Nv=1,Uv=2,Lr=0,n0=1,i0=2,s0=3,wc=4,zv=5,r0=6,o0=7,_g="attached",Fv="detached",kx=300,Va=301,Wa=302,Gd=303,Vd=304,Nh=306,as=1e3,Ks=1001,hc=1002,ei=1003,a0=1004;var Na=1005;var kn=1006,sc=1007;var Ss=1008;var Qs=1009,Hx=1010,Gx=1011,fc=1012,l0=1013,Fo=1014,os=1015,Ri=1016,c0=1017,u0=1018,Xa=1020,Vx=35902,Wx=1021,Xx=1022,Vi=1023,qx=1024,Yx=1025,Ba=1026,qa=1027,Ac=1028,h0=1029,Zx=1030,f0=1031;var d0=1033,Yu=33776,Zu=33777,Ku=33778,Ju=33779,Wd=35840,Xd=35841,qd=35842,Yd=35843,Zd=36196,Kd=37492,Jd=37496,$d=37808,jd=37809,Qd=37810,ep=37811,tp=37812,np=37813,ip=37814,sp=37815,rp=37816,op=37817,ap=37818,lp=37819,cp=37820,up=37821,$u=36492,hp=36494,fp=36495,Kx=36283,dp=36284,pp=36285,mp=36286,p0=2200,Ov=2201,Bv=2202,Ya=2300,Za=2301,$f=2302,Ua=2400,za=2401,ju=2402,m0=2500,kv=2501,Jx=0,Uh=1,Rc=2,Hv=3200,Gv=3201;var g0=0,Vv=1,Cr="",rn="srgb",ti="srgb-linear",zh="linear",kt="srgb";var ma=7680;var vg=519,Wv=512,Xv=513,qv=514,$x=515,Yv=516,Zv=517,Kv=518,Jv=519,gp=35044,cs=35048;var Mg="300 es",Js=2e3,Qu=2001,er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bg=1234567,rc=Math.PI/180,Ka=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function wn(i,e,t){return Math.max(e,Math.min(t,i))}function x0(i,e){return(i%e+e)%e}function $v(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jv(i,e,t){return i!==e?(t-i)/(e-i):0}function oc(i,e,t){return(1-t)*i+t*e}function Qv(i,e,t,n){return oc(i,e,1-Math.exp(-t*n))}function e1(i,e=1){return e-Math.abs(x0(i,e*2)-e)}function t1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function n1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function i1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function s1(i,e){return i+Math.random()*(e-i)}function r1(i){return i*(.5-Math.random())}function o1(i){i!==void 0&&(bg=i);let e=bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function a1(i){return i*rc}function l1(i){return i*Ka}function c1(i){return(i&i-1)===0&&i!==0}function u1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function h1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function f1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fh={DEG2RAD:rc,RAD2DEG:Ka,generateUUID:Wi,clamp:wn,euclideanModulo:x0,mapLinear:$v,inverseLerp:jv,lerp:oc,damp:Qv,pingpong:e1,smoothstep:t1,smootherstep:n1,randInt:i1,randFloat:s1,randFloatSpread:r1,seededRandom:o1,degToRad:a1,radToDeg:l1,isPowerOfTwo:c1,ceilPowerOfTwo:u1,floorPowerOfTwo:h1,setQuaternionFromProperEuler:f1,normalize:Xt,denormalize:rs},$=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],y=s[7],L=s[2],T=s[5],w=s[8];return r[0]=o*x+a*_+l*L,r[3]=o*m+a*M+l*T,r[6]=o*p+a*y+l*w,r[1]=c*x+u*_+h*L,r[4]=c*m+u*M+h*T,r[7]=c*p+u*y+h*w,r[2]=f*x+d*_+g*L,r[5]=f*m+d*M+g*T,r[8]=f*p+d*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jf.makeScale(e,t)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,t){return this.premultiply(jf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jf=new pt;function jx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function d1(){let i=dc("canvas");return i.style.display="block",i}var Eg={};function nc(i){i in Eg||(Eg[i]=!0,console.warn(i))}function p1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function m1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function g1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var vt={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(i.r=ka(i.r),i.g=ka(i.g),i.b=ka(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cr?zh:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ka(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sg=[.64,.33,.3,.6,.15,.06],Tg=[.2126,.7152,.0722],wg=[.3127,.329],Ag=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rg=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[ti]:{primaries:Sg,whitePoint:wg,transfer:zh,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:Tg,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Sg,whitePoint:wg,transfer:kt,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:Tg,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});var ga,xp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ga===void 0&&(ga=dc("canvas")),ga.width=e.width,ga.height=e.height;let n=ga.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ga}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dc("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=js(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(js(t[n]/255)*255):t[n]=js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},x1=0,eh=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qf(s[o].image)):r.push(Qf(s[o]))}else r=Qf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var y1=0,On=class i extends er{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ks,s=Ks,r=kn,o=Ss,a=Vi,l=Qs,c=i.DEFAULT_ANISOTROPY,u=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=Wi(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case Ks:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case Ks:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=kx;On.DEFAULT_ANISOTROPY=1;var Nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,L=(p+1)/2,T=(u+f)/4,w=(h+x)/4,I=(g+m)/4;return M>y&&M>L?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=w/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=I/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yp=class extends er{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new On(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},th=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _p=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let L=Math.sqrt(M),T=Math.atan2(L,p*_);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let y=a*_;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ed=new A,Cg=new fn,di=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ns.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ns.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ns.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ns):ns.fromBufferAttribute(r,o),ns.applyMatrix4(e.matrixWorld),this.expandByPoint(ns);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pu.copy(n.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ns),ns.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xl),mu.subVectors(this.max,Xl),xa.subVectors(e.a,Xl),ya.subVectors(e.b,Xl),_a.subVectors(e.c,Xl),Er.subVectors(ya,xa),Sr.subVectors(_a,ya),Ro.subVectors(xa,_a);let t=[0,-Er.z,Er.y,0,-Sr.z,Sr.y,0,-Ro.z,Ro.y,Er.z,0,-Er.x,Sr.z,0,-Sr.x,Ro.z,0,-Ro.x,-Er.y,Er.x,0,-Sr.y,Sr.x,0,-Ro.y,Ro.x,0];return!td(t,xa,ya,_a,mu)||(t=[1,0,0,0,1,0,0,0,1],!td(t,xa,ya,_a,mu))?!1:(gu.crossVectors(Er,Sr),t=[gu.x,gu.y,gu.z],td(t,xa,ya,_a,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ns).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ns).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hs=[new A,new A,new A,new A,new A,new A,new A,new A],ns=new A,pu=new di,xa=new A,ya=new A,_a=new A,Er=new A,Sr=new A,Ro=new A,Xl=new A,mu=new A,gu=new A,Co=new A;function td(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Co.fromArray(i,r);let a=s.x*Math.abs(Co.x)+s.y*Math.abs(Co.y)+s.z*Math.abs(Co.z),l=e.dot(Co),c=t.dot(Co),u=n.dot(Co);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var _1=new di,ql=new A,nd=new A,Ti=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ql.subVectors(e,this.center);let t=ql.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ql,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ql.copy(e.center).add(nd)),this.expandByPoint(ql.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gs=new A,id=new A,xu=new A,Tr=new A,sd=new A,yu=new A,rd=new A,Ja=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gs.copy(this.origin).addScaledVector(this.direction,t),Gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){id.copy(e).add(t).multiplyScalar(.5),xu.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(id);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xu),a=Tr.dot(this.direction),l=-Tr.dot(xu),c=Tr.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(id).addScaledVector(xu,f),d}intersectSphere(e,t){Gs.subVectors(e.center,this.origin);let n=Gs.dot(this.direction),s=Gs.dot(Gs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gs)!==null}intersectTriangle(e,t,n,s,r){sd.subVectors(t,e),yu.subVectors(n,e),rd.crossVectors(sd,yu);let o=this.direction.dot(rd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);let l=a*this.direction.dot(yu.crossVectors(Tr,yu));if(l<0)return null;let c=a*this.direction.dot(sd.cross(Tr));if(c<0||l+c>o)return null;let u=-a*Tr.dot(rd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/va.setFromMatrixColumn(e,0).length(),r=1/va.setFromMatrixColumn(e,1).length(),o=1/va.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v1,e,M1)}lookAt(e,t,n){let s=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),wr.crossVectors(n,Ei),wr.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),wr.crossVectors(n,Ei)),wr.normalize(),_u.crossVectors(Ei,wr),s[0]=wr.x,s[4]=_u.x,s[8]=Ei.x,s[1]=wr.y,s[5]=_u.y,s[9]=Ei.y,s[2]=wr.z,s[6]=_u.z,s[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],M=n[7],y=n[11],L=n[15],T=s[0],w=s[4],I=s[8],E=s[12],v=s[1],D=s[5],z=s[9],U=s[13],N=s[2],G=s[6],O=s[10],K=s[14],X=s[3],le=s[7],me=s[11],_e=s[15];return r[0]=o*T+a*v+l*N+c*X,r[4]=o*w+a*D+l*G+c*le,r[8]=o*I+a*z+l*O+c*me,r[12]=o*E+a*U+l*K+c*_e,r[1]=u*T+h*v+f*N+d*X,r[5]=u*w+h*D+f*G+d*le,r[9]=u*I+h*z+f*O+d*me,r[13]=u*E+h*U+f*K+d*_e,r[2]=g*T+x*v+m*N+p*X,r[6]=g*w+x*D+m*G+p*le,r[10]=g*I+x*z+m*O+p*me,r[14]=g*E+x*U+m*K+p*_e,r[3]=_*T+M*v+y*N+L*X,r[7]=_*w+M*D+y*G+L*le,r[11]=_*I+M*z+y*O+L*me,r[15]=_*E+M*U+y*K+L*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,M=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,L=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,T=t*_+n*M+s*y+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=_*w,e[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*w,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*w,e[4]=M*w,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*w,e[8]=y*w,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*w,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=L*w,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,_=l*c,M=l*u,y=l*h,L=n.x,T=n.y,w=n.z;return s[0]=(1-(x+p))*L,s[1]=(d+y)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+M)*w,s[9]=(m-_)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=va.set(s[0],s[1],s[2]).length(),o=va.set(s[4],s[5],s[6]).length(),a=va.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],is.copy(this);let c=1/r,u=1/o,h=1/a;return is.elements[0]*=c,is.elements[1]*=c,is.elements[2]*=c,is.elements[4]*=u,is.elements[5]*=u,is.elements[6]*=u,is.elements[8]*=h,is.elements[9]*=h,is.elements[10]*=h,t.setFromRotationMatrix(is),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Js){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===Js)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qu)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Js){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u,g,x;if(a===Js)g=(o+r)*h,x=-2*h;else if(a===Qu)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},va=new A,is=new je,v1=new A(0,0,0),M1=new A(1,1,1),wr=new A,_u=new A,Ei=new A,Ig=new je,Pg=new fn,pi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ig,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var nh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b1=0,Lg=new A,Ma=new fn,Vs=new je,vu=new A,Yl=new A,E1=new A,S1=new fn,Dg=new A(1,0,0),Ng=new A(0,1,0),Ug=new A(0,0,1),zg={type:"added"},T1={type:"removed"},ba={type:"childadded",child:null},od={type:"childremoved",child:null},an=class i extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new pi,n=new fn,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new pt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(Dg,e)}rotateY(e){return this.rotateOnAxis(Ng,e)}rotateZ(e){return this.rotateOnAxis(Ug,e)}translateOnAxis(e,t){return Lg.copy(e).applyQuaternion(this.quaternion),this.position.add(Lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dg,e)}translateY(e){return this.translateOnAxis(Ng,e)}translateZ(e){return this.translateOnAxis(Ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vu.copy(e):vu.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vs.lookAt(Yl,vu,this.up):Vs.lookAt(vu,Yl,this.up),this.quaternion.setFromRotationMatrix(Vs),s&&(Vs.extractRotation(s.matrixWorld),Ma.setFromRotationMatrix(Vs),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),ba.child=e,this.dispatchEvent(ba),ba.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T1),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,e,E1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,S1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};an.DEFAULT_UP=new A(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ss=new A,Ws=new A,ad=new A,Xs=new A,Ea=new A,Sa=new A,Fg=new A,ld=new A,cd=new A,ud=new A,hd=new Nt,fd=new Nt,dd=new Nt,Ir=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ss.subVectors(e,t),s.cross(ss);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ss.subVectors(s,t),Ws.subVectors(n,t),ad.subVectors(e,t);let o=ss.dot(ss),a=ss.dot(Ws),l=ss.dot(ad),c=Ws.dot(Ws),u=Ws.dot(ad),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xs)===null?!1:Xs.x>=0&&Xs.y>=0&&Xs.x+Xs.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xs.x),l.addScaledVector(o,Xs.y),l.addScaledVector(a,Xs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hd.setScalar(0),fd.setScalar(0),dd.setScalar(0),hd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,n),dd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hd,r.x),o.addScaledVector(fd,r.y),o.addScaledVector(dd,r.z),o}static isFrontFacing(e,t,n,s){return ss.subVectors(n,t),Ws.subVectors(e,t),ss.cross(Ws).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ss.subVectors(this.c,this.b),Ws.subVectors(this.a,this.b),ss.cross(Ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ea.subVectors(s,n),Sa.subVectors(r,n),ld.subVectors(e,n);let l=Ea.dot(ld),c=Sa.dot(ld);if(l<=0&&c<=0)return t.copy(n);cd.subVectors(e,s);let u=Ea.dot(cd),h=Sa.dot(cd);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ea,o);ud.subVectors(e,r);let d=Ea.dot(ud),g=Sa.dot(ud);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Sa,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Fg.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Fg,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Ea,o).addScaledVector(Sa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function pd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=x0(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pd(o,r,e+1/3),this.g=pd(o,r,e),this.b=pd(o,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let n=Qx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return vt.fromWorkingColorSpace(Qn.copy(this),e),Math.round(wn(Qn.r*255,0,255))*65536+Math.round(wn(Qn.g*255,0,255))*256+Math.round(wn(Qn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Qn.copy(this),t);let n=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=rn){vt.fromWorkingColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,s=Qn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Mu);let n=oc(Ar.h,Mu.h,t),s=oc(Ar.s,Mu.s,t),r=oc(Ar.l,Mu.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new se;se.NAMES=Qx;var w1=0,ai=class extends er{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Wi(),this.name="",this.blending=$s,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=Uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==ws&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dd&&(n.blendSrc=this.blendSrc),this.blendDst!==Nd&&(n.blendDst=this.blendDst),this.blendEquation!==Uo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Lt=class extends ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bn=new A,bu=new $,Rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gp,this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bu.fromBufferAttribute(this,t),bu.applyMatrix3(e),this.setXY(t,bu.x,bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gp&&(e.usage=this.usage),e}};var ih=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sh=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},A1=0,Gi=new je,md=new an,Ta=new A,Si=new di,Zl=new di,Fn=new A,Ut=class i extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jx(e)?sh:ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,n){return Gi.makeTranslation(e,t,n),this.applyMatrix4(Gi),this}scale(e,t,n){return Gi.makeScale(e,t,n),this.applyMatrix4(Gi),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zl.setFromBufferAttribute(a),this.morphTargetsRelative?(Fn.addVectors(Si.min,Zl.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,Zl.max),Si.expandByPoint(Fn)):(Si.expandByPoint(Zl.min),Si.expandByPoint(Zl.max))}Si.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fn.fromBufferAttribute(a,c),l&&(Ta.fromBufferAttribute(e,c),Fn.add(Ta)),s=Math.max(s,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new A,l[I]=new A;let c=new A,u=new A,h=new A,f=new $,d=new $,g=new $,x=new A,m=new A;function p(I,E,v){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(x),a[E].add(x),a[v].add(x),l[I].add(m),l[E].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,E=_.length;I<E;++I){let v=_[I],D=v.start,z=v.count;for(let U=D,N=D+z;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new A,y=new A,L=new A,T=new A;function w(I){L.fromBufferAttribute(s,I),T.copy(L);let E=a[I];M.copy(E),M.sub(L.multiplyScalar(L.dot(E))).normalize(),y.crossVectors(T,E);let D=y.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,D)}for(let I=0,E=_.length;I<E;++I){let v=_[I],D=v.start,z=v.count;for(let U=D,N=D+z;U<N;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Rt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Og=new je,Io=new Ja,Eu=new Ti,Bg=new A,Su=new A,Tu=new A,wu=new A,gd=new A,Au=new A,kg=new A,Ru=new A,Be=class extends an{constructor(e=new Ut,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Au.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(gd.fromBufferAttribute(h,e),o?Au.addScaledVector(gd,u):Au.addScaledVector(gd.sub(t),u))}t.add(Au)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eu.copy(n.boundingSphere),Eu.applyMatrix4(r),Io.copy(e.ray).recast(e.near),!(Eu.containsPoint(Io.origin)===!1&&(Io.intersectSphere(Eu,Bg)===null||Io.origin.distanceToSquared(Bg)>(e.far-e.near)**2))&&(Og.copy(r).invert(),Io.copy(e.ray).applyMatrix4(Og),!(n.boundingBox!==null&&Io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Io)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,L=M;y<L;y+=3){let T=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);s=Cu(this,p,e,n,c,u,h,T,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Cu(this,o,e,n,c,u,h,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,L=M;y<L;y+=3){let T=y,w=y+1,I=y+2;s=Cu(this,p,e,n,c,u,h,T,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,y=m+2;s=Cu(this,o,e,n,c,u,h,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function R1(i,e,t,n,s,r,o,a){let l;if(e.side===Rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ws,a),l===null)return null;Ru.copy(a),Ru.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ru);return c<t.near||c>t.far?null:{distance:c,point:Ru.clone(),object:i}}function Cu(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Su),i.getVertexPosition(l,Tu),i.getVertexPosition(c,wu);let u=R1(i,e,t,n,Su,Tu,wu,kg);if(u){let h=new A;Ir.getBarycoord(kg,Su,Tu,wu,h),s&&(u.uv=Ir.getInterpolatedAttribute(s,a,l,c,h,new $)),r&&(u.uv1=Ir.getInterpolatedAttribute(r,a,l,c,h,new $)),o&&(u.normal=Ir.getInterpolatedAttribute(o,a,l,c,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Ir.getNormal(Su,Tu,wu,f.normal),u.face=f,u.barycoord=h}return u}var lt=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function g(x,m,p,_,M,y,L,T,w,I,E){let v=y/w,D=L/I,z=y/2,U=L/2,N=T/2,G=w+1,O=I+1,K=0,X=0,le=new A;for(let me=0;me<O;me++){let _e=me*D-U;for(let qe=0;qe<G;qe++){let Et=qe*v-z;le[x]=Et*_,le[m]=_e*M,le[p]=N,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=T>0?1:-1,u.push(le.x,le.y,le.z),h.push(qe/w),h.push(1-me/I),K+=1}}for(let me=0;me<I;me++)for(let _e=0;_e<w;_e++){let qe=f+_e+G*me,Et=f+_e+G*(me+1),j=f+(_e+1)+G*(me+1),de=f+(_e+1)+G*me;l.push(qe,Et,de),l.push(Et,j,de),X+=6}a.addGroup(d,X,E),d+=X,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $a(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function oi(i){let e={};for(let t=0;t<i.length;t++){let n=$a(i[t]);for(let s in n)e[s]=n[s]}return e}function C1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ey(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var kr={clone:$a,merge:oi},I1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=C1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},rh=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Js}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rr=new A,Hg=new $,Gg=new $,An=class extends rh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Hg,Gg),t.subVectors(Gg,Hg)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wa=-90,Aa=1,vp=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(wa,Aa,e,t);s.layers=this.layers,this.add(s);let r=new An(wa,Aa,e,t);r.layers=this.layers,this.add(r);let o=new An(wa,Aa,e,t);o.layers=this.layers,this.add(o);let a=new An(wa,Aa,e,t);a.layers=this.layers,this.add(a);let l=new An(wa,Aa,e,t);l.layers=this.layers,this.add(l);let c=new An(wa,Aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Js)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qu)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oh=class extends On{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Va,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mp=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new oh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lt(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:$a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Ts});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=kn),new vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xd=new A,L1=new A,D1=new pt,Zs=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xd.subVectors(n,t).cross(L1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||D1.getNormalMatrix(e),s=this.coplanarPoint(xd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Po=new Ti,Iu=new A,pc=class{constructor(e=new Zs,t=new Zs,n=new Zs,s=new Zs,r=new Zs,o=new Zs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Js){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],M=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-d,y-p).normalize(),n[1].setComponents(l+r,f+c,m+d,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+_).normalize(),n[3].setComponents(l-o,f-u,m-g,y-_).normalize(),n[4].setComponents(l-a,f-h,m-x,y-M).normalize(),t===Js)n[5].setComponents(l+a,f+h,m+x,y+M).normalize();else if(t===Qu)n[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Po)}intersectsSprite(e){return Po.center.set(0,0,0),Po.radius=.7071067811865476,Po.applyMatrix4(e.matrixWorld),this.intersectsSphere(Po)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Iu.x=s.normal.x>0?e.max.x:e.min.x,Iu.y=s.normal.y>0?e.max.y:e.min.y,Iu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Iu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ty(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function N1(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bn=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let _=p*f-o;for(let M=0;M<c;M++){let y=M*h-r;g.push(y,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let M=_+c*p,y=_+c*(p+1),L=_+1+c*(p+1),T=_+1+c*p;d.push(M,y,T),d.push(y,L,T)}this.setIndex(d),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
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
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V1=`#ifdef USE_BATCHING
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
#endif`,W1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sM=`#define PI 3.141592653589793
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
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
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
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
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
#endif`,DM=`struct PhysicalMaterial {
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
}`,NM=`
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
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
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
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
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_b=`float getShadowMask() {
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
}`,vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Gb=`#define DISTANCE
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
}`,Vb=`#define DISTANCE
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`uniform float scale;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Jb=`#define LAMBERT
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
}`,$b=`#define LAMBERT
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
}`,jb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,eE=`#define NORMAL
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
}`,tE=`#define NORMAL
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
}`,nE=`#define PHONG
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
}`,iE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,rE=`#define STANDARD
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
}`,oE=`#define TOON
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
}`,aE=`#define TOON
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
}`,lE=`uniform float size;
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
}`,cE=`uniform vec3 diffuse;
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
}`,uE=`#include <common>
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
}`,hE=`uniform vec3 color;
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
}`,fE=`uniform float rotation;
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
}`,dE=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:U1,alphahash_pars_fragment:z1,alphamap_fragment:F1,alphamap_pars_fragment:O1,alphatest_fragment:B1,alphatest_pars_fragment:k1,aomap_fragment:H1,aomap_pars_fragment:G1,batching_pars_vertex:V1,batching_vertex:W1,begin_vertex:X1,beginnormal_vertex:q1,bsdfs:Y1,iridescence_fragment:Z1,bumpmap_pars_fragment:K1,clipping_planes_fragment:J1,clipping_planes_pars_fragment:$1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:Q1,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:sM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,colorspace_fragment:hM,colorspace_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:AM,envmap_vertex:xM,fog_vertex:yM,fog_pars_vertex:_M,fog_fragment:vM,fog_pars_fragment:MM,gradientmap_pars_fragment:bM,lightmap_pars_fragment:EM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:TM,lights_pars_begin:wM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:IM,lights_phong_pars_fragment:PM,lights_physical_fragment:LM,lights_physical_pars_fragment:DM,lights_fragment_begin:NM,lights_fragment_maps:UM,lights_fragment_end:zM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:kM,map_fragment:HM,map_pars_fragment:GM,map_particle_fragment:VM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:qM,morphinstance_vertex:YM,morphcolor_vertex:ZM,morphnormal_vertex:KM,morphtarget_pars_vertex:JM,morphtarget_vertex:$M,normal_fragment_begin:jM,normal_fragment_maps:QM,normal_pars_fragment:eb,normal_pars_vertex:tb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:ob,iridescence_pars_fragment:ab,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:hb,dithering_fragment:fb,dithering_pars_fragment:db,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:xb,shadowmap_vertex:yb,shadowmask_pars_fragment:_b,skinbase_vertex:vb,skinning_pars_vertex:Mb,skinning_vertex:bb,skinnormal_vertex:Eb,specularmap_fragment:Sb,specularmap_pars_fragment:Tb,tonemapping_fragment:wb,tonemapping_pars_fragment:Ab,transmission_fragment:Rb,transmission_pars_fragment:Cb,uv_pars_fragment:Ib,uv_pars_vertex:Pb,uv_vertex:Lb,worldpos_vertex:Db,background_vert:Nb,background_frag:Ub,backgroundCube_vert:zb,backgroundCube_frag:Fb,cube_vert:Ob,cube_frag:Bb,depth_vert:kb,depth_frag:Hb,distanceRGBA_vert:Gb,distanceRGBA_frag:Vb,equirect_vert:Wb,equirect_frag:Xb,linedashed_vert:qb,linedashed_frag:Yb,meshbasic_vert:Zb,meshbasic_frag:Kb,meshlambert_vert:Jb,meshlambert_frag:$b,meshmatcap_vert:jb,meshmatcap_frag:Qb,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:nE,meshphong_frag:iE,meshphysical_vert:sE,meshphysical_frag:rE,meshtoon_vert:oE,meshtoon_frag:aE,points_vert:lE,points_frag:cE,shadow_vert:uE,shadow_frag:hE,sprite_vert:fE,sprite_frag:dE},ve={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Es={basic:{uniforms:oi([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:oi([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new se(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:oi([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:oi([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:oi([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new se(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:oi([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:oi([ve.points,ve.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:oi([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:oi([ve.common,ve.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:oi([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:oi([ve.sprite,ve.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:oi([ve.common,ve.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:oi([ve.lights,ve.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Es.physical={uniforms:oi([Es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var Pu={r:0,b:0,g:0},Lo=new pi,pE=new je;function mE(i,e,t,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function x(_){let M=!1,y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),M=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){let y=g(M);y&&(y.isCubeTexture||y.mapping===Nh)?(u===void 0&&(u=new Be(new lt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:$a(Es.backgroundCube.uniforms),vertexShader:Es.backgroundCube.vertexShader,fragmentShader:Es.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Lo.copy(M.backgroundRotation),Lo.x*=-1,Lo.y*=-1,Lo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Lo.y*=-1,Lo.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pE.makeRotationFromEuler(Lo)),u.material.toneMapped=vt.getTransfer(y.colorSpace)!==kt,(h!==y||f!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Be(new Bn(2,2),new Kt({name:"BackgroundMaterial",uniforms:$a(Es.background.uniforms),vertexShader:Es.background.vertexShader,fragmentShader:Es.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=vt.getTransfer(y.colorSpace)!==kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(Pu,ey(i)),n.buffers.color.setClear(Pu.r,Pu.g,Pu.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function gE(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,D,z,U,N){let G=!1,O=h(U,z,D);r!==O&&(r=O,c(r.object)),G=d(v,U,z,N),G&&g(v,U,z,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(v,D,z,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,D,z){let U=z.wireframe===!0,N=n[v.id];N===void 0&&(N={},n[v.id]=N);let G=N[D.id];G===void 0&&(G={},N[D.id]=G);let O=G[U];return O===void 0&&(O=f(l()),G[U]=O),O}function f(v){let D=[],z=[],U=[];for(let N=0;N<t;N++)D[N]=0,z[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:U,object:v,attributes:{},index:null}}function d(v,D,z,U){let N=r.attributes,G=D.attributes,O=0,K=z.getAttributes();for(let X in K)if(K[X].location>=0){let me=N[X],_e=G[X];if(_e===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function g(v,D,z,U){let N={},G=D.attributes,O=0,K=z.getAttributes();for(let X in K)if(K[X].location>=0){let me=G[X];me===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),N[X]=_e,O++}r.attributes=N,r.attributesNum=O,r.index=U}function x(){let v=r.newAttributes;for(let D=0,z=v.length;D<z;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){let z=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;z[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),N[v]!==D&&(i.vertexAttribDivisor(v,D),N[v]=D)}function _(){let v=r.newAttributes,D=r.enabledAttributes;for(let z=0,U=D.length;z<U;z++)D[z]!==v[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function M(v,D,z,U,N,G,O){O===!0?i.vertexAttribIPointer(v,D,z,N,G):i.vertexAttribPointer(v,D,z,U,N,G)}function y(v,D,z,U){x();let N=U.attributes,G=z.getAttributes(),O=D.defaultAttributeValues;for(let K in G){let X=G[K];if(X.location>=0){let le=N[K];if(le===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let me=le.normalized,_e=le.itemSize,qe=e.get(le);if(qe===void 0)continue;let Et=qe.buffer,j=qe.type,de=qe.bytesPerElement,Oe=j===i.INT||j===i.UNSIGNED_INT||le.gpuType===l0;if(le.isInterleavedBufferAttribute){let ge=le.data,Ke=ge.stride,ot=le.offset;if(ge.isInstancedInterleavedBuffer){for(let it=0;it<X.locationSize;it++)p(X.location+it,ge.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let it=0;it<X.locationSize;it++)m(X.location+it);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let it=0;it<X.locationSize;it++)M(X.location+it,_e/X.locationSize,j,me,Ke*de,(ot+_e/X.locationSize*it)*de,Oe)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,le.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ge=0;ge<X.locationSize;ge++)M(X.location+ge,_e/X.locationSize,j,me,_e*de,_e/X.locationSize*ge*de,Oe)}}else if(O!==void 0){let me=O[K];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(X.location,me);break;case 3:i.vertexAttrib3fv(X.location,me);break;case 4:i.vertexAttrib4fv(X.location,me);break;default:i.vertexAttrib1fv(X.location,me)}}}}_()}function L(){I();for(let v in n){let D=n[v];for(let z in D){let U=D[z];for(let N in U)u(U[N].object),delete U[N];delete D[z]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let D=n[v.id];for(let z in D){let U=D[z];for(let N in U)u(U[N].object),delete U[N];delete D[z]}delete n[v.id]}function w(v){for(let D in n){let z=n[D];if(z[v.id]===void 0)continue;let U=z[v.id];for(let N in U)u(U[N].object),delete U[N];delete z[v.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function xE(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Vi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Qs&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==os&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:L,maxSamples:T}}function _E(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Zs,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:n,M=_*4,y=p.clippingState||null;l.value=y,y=u(g,f,M,d);for(let L=0;L!==M;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vE(i){let e=new WeakMap;function t(o,a){return a===Gd?o.mapping=Va:a===Vd&&(o.mapping=Wa),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gd||a===Vd)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Mp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Dr=class extends rh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fa=4,Vg=[.125,.215,.35,.446,.526,.582],zo=20,yd=new Dr,Wg=new se,_d=null,vd=0,Md=0,bd=!1,No=(1+Math.sqrt(5))/2,Ra=1/No,Xg=[new A(-No,Ra,0),new A(No,Ra,0),new A(-Ra,0,No),new A(Ra,0,No),new A(0,No,-Ra),new A(0,No,Ra),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,vd,Md),this._renderer.xr.enabled=bd,e.scissorTest=!1,Lu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===Wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ri,format:Vi,colorSpace:ti,depthBuffer:!1},s=qg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ME(r)),this._blurMaterial=bE(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,yd)}_sceneToCubeUV(e,t,n,s){let a=new An(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wg),u.toneMapping=Lr,u.autoClear=!1;let d=new Lt({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new Be(new lt,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Wg),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Lu(s,_*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Va||e.mapping===Wa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Lu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xg[(s-r-1)%Xg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Be(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zo-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):zo;m>zo&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zo}`);let p=[],_=0;for(let w=0;w<zo;++w){let I=w/x,E=Math.exp(-I*I/2);p.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let y=this._sizeLods[s],L=3*y*(s>M-Fa?s-M+Fa:0),T=4*(this._cubeSize-y);Lu(t,L,T,3*y,2*y),l.setRenderTarget(t),l.render(h,yd)}};function ME(i){let e=[],t=[],n=[],s=i,r=i-Fa+1+Vg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Fa?l=Vg[o-i+Fa-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,I=T>2?0:-1,E=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];_.set(E,x*g*T),M.set(f,m*g*T);let v=[T,T,T,T,T,T];y.set(v,p*g*T)}let L=new Ut;L.setAttribute("position",new Rt(_,x)),L.setAttribute("uv",new Rt(M,m)),L.setAttribute("faceIndex",new Rt(y,p)),e.push(L),s>Fa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qg(i,e,t){let n=new Hn(i,e,t);return n.texture.mapping=Nh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bE(i,e,t){let n=new Float32Array(zo),s=new A(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:zo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:y0(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Yg(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y0(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Zg(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function y0(){return`

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
	`}function EE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Gd||l===Vd,u=l===Va||l===Wa;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ah(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ah(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function SE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&nc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function TE(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let M=0,y=_.length;M<y;M+=3){let L=_[M+0],T=_[M+1],w=_[M+2];f.push(L,T,T,w,w,L)}}else if(g!==void 0){let _=g.array;x=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let L=M+0,T=M+1,w=M+2;f.push(L,T,T,w,w,L)}}else return;let m=new(jx(f)?sh:ih)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wE(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function AE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function RE(i,e,t){let n=new WeakMap,s=new Nt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*L*4*h),w=new th(T,y,L,h);w.type=os,w.needsUpdate=!0;let I=M*4;for(let v=0;v<h;v++){let D=m[v],z=p[v],U=_[v],N=y*L*4*v;for(let G=0;G<D.count;G++){let O=G*I;d===!0&&(s.fromBufferAttribute(D,G),T[N+O+0]=s.x,T[N+O+1]=s.y,T[N+O+2]=s.z,T[N+O+3]=0),g===!0&&(s.fromBufferAttribute(z,G),T[N+O+4]=s.x,T[N+O+5]=s.y,T[N+O+6]=s.z,T[N+O+7]=0),x===!0&&(s.fromBufferAttribute(U,G),T[N+O+8]=s.x,T[N+O+9]=s.y,T[N+O+10]=s.z,T[N+O+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new $(y,L)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function CE(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var lh=class extends On{constructor(e,t,n,s,r,o,a,l,c,u=Ba){if(u!==Ba&&u!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ba&&(n=Fo),n===void 0&&u===qa&&(n=Xa),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ny=new On,Kg=new lh(1,1),iy=new th,sy=new _p,ry=new oh,Jg=[],$g=[],jg=new Float32Array(16),Qg=new Float32Array(9),ex=new Float32Array(4);function hl(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jg[s];if(r===void 0&&(r=new Float32Array(s),Jg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function In(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oh(i,e){let t=$g[e];t===void 0&&(t=new Int32Array(e),$g[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function IE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function PE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2fv(this.addr,e),In(t,e)}}function LE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;i.uniform3fv(this.addr,e),In(t,e)}}function DE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4fv(this.addr,e),In(t,e)}}function NE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Cn(t,n))return;ex.set(n),i.uniformMatrix2fv(this.addr,!1,ex),In(t,n)}}function UE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Cn(t,n))return;Qg.set(n),i.uniformMatrix3fv(this.addr,!1,Qg),In(t,n)}}function zE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Cn(t,n))return;jg.set(n),i.uniformMatrix4fv(this.addr,!1,jg),In(t,n)}}function FE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function OE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2iv(this.addr,e),In(t,e)}}function BE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3iv(this.addr,e),In(t,e)}}function kE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4iv(this.addr,e),In(t,e)}}function HE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function GE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2uiv(this.addr,e),In(t,e)}}function VE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3uiv(this.addr,e),In(t,e)}}function WE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4uiv(this.addr,e),In(t,e)}}function XE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kg.compareFunction=$x,r=Kg):r=ny,t.setTexture2D(e||r,s)}function qE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sy,s)}function YE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ry,s)}function ZE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||iy,s)}function KE(i){switch(i){case 5126:return IE;case 35664:return PE;case 35665:return LE;case 35666:return DE;case 35674:return NE;case 35675:return UE;case 35676:return zE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return HE;case 36294:return GE;case 36295:return VE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return ZE}}function JE(i,e){i.uniform1fv(this.addr,e)}function $E(i,e){let t=hl(e,this.size,2);i.uniform2fv(this.addr,t)}function jE(i,e){let t=hl(e,this.size,3);i.uniform3fv(this.addr,t)}function QE(i,e){let t=hl(e,this.size,4);i.uniform4fv(this.addr,t)}function eS(i,e){let t=hl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tS(i,e){let t=hl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nS(i,e){let t=hl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iS(i,e){i.uniform1iv(this.addr,e)}function sS(i,e){i.uniform2iv(this.addr,e)}function rS(i,e){i.uniform3iv(this.addr,e)}function oS(i,e){i.uniform4iv(this.addr,e)}function aS(i,e){i.uniform1uiv(this.addr,e)}function lS(i,e){i.uniform2uiv(this.addr,e)}function cS(i,e){i.uniform3uiv(this.addr,e)}function uS(i,e){i.uniform4uiv(this.addr,e)}function hS(i,e,t){let n=this.cache,s=e.length,r=Oh(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ny,r[o])}function fS(i,e,t){let n=this.cache,s=e.length,r=Oh(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sy,r[o])}function dS(i,e,t){let n=this.cache,s=e.length,r=Oh(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ry,r[o])}function pS(i,e,t){let n=this.cache,s=e.length,r=Oh(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||iy,r[o])}function mS(i){switch(i){case 5126:return JE;case 35664:return $E;case 35665:return jE;case 35666:return QE;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}var bp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KE(t.type)}},Ep=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}},Sp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ed=/(\w+)(\])?(\[|\.)?/g;function tx(i,e){i.seq.push(e),i.map[e.id]=e}function gS(i,e,t){let n=i.name,s=n.length;for(Ed.lastIndex=0;;){let r=Ed.exec(n),o=Ed.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tx(t,c===void 0?new bp(a,i,e):new Ep(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sp(a),tx(t,h)),t=h}}}var Ha=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gS(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function nx(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xS=37297,yS=0;function _S(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ix=new pt;function vS(i){vt._getMatrix(ix,vt.workingColorSpace,i);let e=`mat3( ${ix.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case zh:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sx(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_S(i.getShaderSource(e),o)}else return s}function MS(i,e){let t=vS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bS(i,e){let t;switch(e){case n0:t="Linear";break;case i0:t="Reinhard";break;case s0:t="Cineon";break;case wc:t="ACESFilmic";break;case r0:t="AgX";break;case o0:t="Neutral";break;case zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Du=new A;function ES(){vt.getLuminanceCoefficients(Du);let i=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ic).join(`
`)}function TS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ic(i){return i!==""}function rx(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(i){return i.replace(AS,CS)}var RS=new Map;function CS(i,e){let t=xt[e];if(t===void 0){let n=RS.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tp(t)}var IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(i){return i.replace(IS,PS)}function PS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function LS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ox?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===t0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ys&&(e="SHADOWMAP_TYPE_VSM"),e}function DS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Va:case Wa:e="ENVMAP_TYPE_CUBE";break;case Nh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Wa&&(e="ENVMAP_MODE_REFRACTION"),e}function US(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bx:e="ENVMAP_BLENDING_MULTIPLY";break;case Nv:e="ENVMAP_BLENDING_MIX";break;case Uv:e="ENVMAP_BLENDING_ADD";break}return e}function zS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function FS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=LS(t),c=DS(t),u=NS(t),h=US(t),f=zS(t),d=SS(t),g=TS(r),x=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ic).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ic).join(`
`),p.length>0&&(p+=`
`)):(m=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ic).join(`
`),p=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?xt.tonemapping_pars_fragment:"",t.toneMapping!==Lr?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ic).join(`
`)),o=Tp(o),o=rx(o,t),o=ox(o,t),a=Tp(a),a=rx(a,t),a=ox(a,t),o=ax(o),a=ax(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+o,y=_+p+a,L=nx(s,s.VERTEX_SHADER,M),T=nx(s,s.FRAGMENT_SHADER,y);s.attachShader(x,L),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(L).trim(),N=s.getShaderInfoLog(T).trim(),G=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,T);else{let K=sx(s,L,"vertex"),X=sx(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+K+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||N==="")&&(O=!1);O&&(D.diagnostics={runnable:G,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(L),s.deleteShader(T),I=new Ha(s,x),E=wS(s,x)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,xS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}var OS=0,wp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ap(e),t.set(e,n)),n}},Ap=class{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}};function BS(i,e,t,n,s,r,o){let a=new nh,l=new wp,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,D,z,U){let N=z.fog,G=U.geometry,O=E.isMeshStandardMaterial?z.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||O),X=K&&K.mapping===Nh?K.image.height:null,le=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=me!==void 0?me.length:0,qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let Et,j,de,Oe;if(le){let Wt=Es[le];Et=Wt.vertexShader,j=Wt.fragmentShader}else Et=E.vertexShader,j=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),Oe=l.getFragmentShaderID(E);let ge=i.getRenderTarget(),Ke=i.state.buffers.depth.getReversed(),ot=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,Pt=!!E.map,ie=!!E.matcap,fe=!!K,P=!!E.aoMap,Xe=!!E.lightMap,ce=!!E.bumpMap,De=!!E.normalMap,xe=!!E.displacementMap,Qe=!!E.emissiveMap,Ce=!!E.metalnessMap,C=!!E.roughnessMap,b=E.anisotropy>0,W=E.clearcoat>0,Q=E.dispersion>0,re=E.iridescence>0,ee=E.sheen>0,ke=E.transmission>0,Me=b&&!!E.anisotropyMap,Ie=W&&!!E.clearcoatMap,At=W&&!!E.clearcoatNormalMap,he=W&&!!E.clearcoatRoughnessMap,Ne=re&&!!E.iridescenceMap,et=re&&!!E.iridescenceThicknessMap,st=ee&&!!E.sheenColorMap,Ue=ee&&!!E.sheenRoughnessMap,It=!!E.specularMap,gt=!!E.specularColorMap,$t=!!E.specularIntensityMap,B=ke&&!!E.transmissionMap,be=ke&&!!E.thicknessMap,J=!!E.gradientMap,ne=!!E.alphaMap,we=E.alphaTest>0,Se=!!E.alphaHash,ft=!!E.extensions,mn=Lr;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(mn=i.toneMapping);let $n={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Et,fragmentShader:j,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:it,batchingColor:it&&U._colorsTexture!==null,instancing:ot,instancingColor:ot&&U.instanceColor!==null,instancingMorph:ot&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ti,alphaToCoverage:!!E.alphaToCoverage,map:Pt,matcap:ie,envMap:fe,envMapMode:fe&&K.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:Xe,bumpMap:ce,normalMap:De,displacementMap:f&&xe,emissiveMap:Qe,normalMapObjectSpace:De&&E.normalMapType===Vv,normalMapTangentSpace:De&&E.normalMapType===g0,metalnessMap:Ce,roughnessMap:C,anisotropy:b,anisotropyMap:Me,clearcoat:W,clearcoatMap:Ie,clearcoatNormalMap:At,clearcoatRoughnessMap:he,dispersion:Q,iridescence:re,iridescenceMap:Ne,iridescenceThicknessMap:et,sheen:ee,sheenColorMap:st,sheenRoughnessMap:Ue,specularMap:It,specularColorMap:gt,specularIntensityMap:$t,transmission:ke,transmissionMap:B,thicknessMap:be,gradientMap:J,opaque:E.transparent===!1&&E.blending===$s&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:we,alphaHash:Se,combine:E.combine,mapUv:Pt&&x(E.map.channel),aoMapUv:P&&x(E.aoMap.channel),lightMapUv:Xe&&x(E.lightMap.channel),bumpMapUv:ce&&x(E.bumpMap.channel),normalMapUv:De&&x(E.normalMap.channel),displacementMapUv:xe&&x(E.displacementMap.channel),emissiveMapUv:Qe&&x(E.emissiveMap.channel),metalnessMapUv:Ce&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:Me&&x(E.anisotropyMap.channel),clearcoatMapUv:Ie&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:st&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:It&&x(E.specularMap.channel),specularColorMapUv:gt&&x(E.specularColorMap.channel),specularIntensityMapUv:$t&&x(E.specularIntensityMap.channel),transmissionMapUv:B&&x(E.transmissionMap.channel),thicknessMapUv:be&&x(E.thicknessMap.channel),alphaMapUv:ne&&x(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(De||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Pt||ne),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ke,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:qe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:mn,decodeVideoTexture:Pt&&E.map.isVideoTexture===!0&&vt.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:Qe&&E.emissiveMap.isVideoTexture===!0&&vt.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&E.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $n.vertexUv1s=c.has(1),$n.vertexUv2s=c.has(2),$n.vertexUv3s=c.has(3),c.clear(),$n}function p(E){let v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)v.push(D),v.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(_(v,E),M(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function _(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function M(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let v=g[E.type],D;if(v){let z=Es[v];D=kr.clone(z.uniforms)}else D=E.uniforms;return D}function L(E,v){let D;for(let z=0,U=u.length;z<U;z++){let N=u[z];if(N.cacheKey===v){D=N,++D.usedTimes;break}}return D===void 0&&(D=new FS(i,v,E,r),u.push(D)),D}function T(E){if(--E.usedTimes===0){let v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:I}}function kS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function HS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ux(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||HS),n.length>1&&n.sort(f||cx),s.length>1&&s.sort(f||cx)}function u(){for(let h=e,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function GS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ux,i.set(n,[o])):s>=r.length?(o=new ux,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function VS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new se};break;case"SpotLight":t={position:new A,direction:new A,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function WS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var XS=0;function qS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function YS(i){let e=new VS,t=WS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,M=0,y=0,L=0,T=0,w=0;c.sort(qS);for(let E=0,v=c.length;E<v;E++){let D=c[E],z=D.color,U=D.intensity,N=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*U,h+=z.g*U,f+=z.b*U;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],U);w++}else if(D.isDirectionalLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,X=t.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=D.shadow.matrix,_++}n.directional[d]=O,d++}else if(D.isSpotLight){let O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(z).multiplyScalar(U),O.distance=N,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[x]=O;let K=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=K.matrix,D.castShadow){let X=t.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=G,y++}x++}else if(D.isRectAreaLight){let O=e.get(D);O.color.copy(z).multiplyScalar(U),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=O,m++}else if(D.isPointLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let K=D.shadow,X=t.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=O,g++}else if(D.isHemisphereLight){let O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(U),O.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==L||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=L,I.numLightProbes=w,n.version=XS++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function hx(i){let e=new YS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ZS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new hx(i),e.set(s,[a])):r>=o.length?(a=new hx(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rp=class extends ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cp=class extends ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
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
}`;function $S(i,e,t){let n=new pc,s=new $,r=new $,o=new Nt,a=new Rp({depthPacking:Gv}),l=new Cp,c={},u=t.maxTextureSize,h={[ws]:Rn,[Rn]:ws,[un]:un},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:KS,fragmentShader:JS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ox;let p=this.type;this.render=function(T,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ts),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=p!==Ys&&this.type===Ys,N=p===Ys&&this.type!==Ys;for(let G=0,O=T.length;G<O;G++){let K=T[G],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||U===!0||N===!0){let _e=this.type!==Ys?{minFilter:ei,magFilter:ei}:{};X.map!==null&&X.map.dispose(),X.map=new Hn(s.x,s.y,_e),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let me=X.getViewportCount();for(let _e=0;_e<me;_e++){let qe=X.getViewport(_e);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),z.viewport(o),X.updateMatrices(K,_e),n=X.getFrustum(),y(w,I,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Ys&&_(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,D)};function _(T,w){let I=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,I,d,x,null)}function M(T,w,I,E){let v=null,D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)v=D;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=v.uuid,U=w.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let G=N[U];G===void 0&&(G=v.clone(),N[U]=G,w.addEventListener("dispose",L)),v=G}if(v.visible=w.visible,v.wireframe=w.wireframe,E===Ys?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=I}return v}function y(T,w,I,E,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Ys)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let U=e.update(T),N=T.material;if(Array.isArray(N)){let G=U.groups;for(let O=0,K=G.length;O<K;O++){let X=G[O],le=N[X.materialIndex];if(le&&le.visible){let me=M(T,le,E,v);T.onBeforeShadow(i,T,w,I,U,me,X),i.renderBufferDirect(I,null,U,me,T,X),T.onAfterShadow(i,T,w,I,U,me,X)}}}else if(N.visible){let G=M(T,N,E,v);T.onBeforeShadow(i,T,w,I,U,G,null),i.renderBufferDirect(I,null,U,G,T,null),T.onAfterShadow(i,T,w,I,U,G,null)}}let z=T.children;for(let U=0,N=z.length;U<N;U++)y(z[U],w,I,E,v)}function L(T){T.target.removeEventListener("dispose",L);for(let I in c){let E=c[I],v=T.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}var jS={[Ud]:zd,[Fd]:kd,[Od]:Hd,[Ga]:Bd,[zd]:Ud,[kd]:Fd,[Hd]:Od,[Bd]:Ga};function QS(i,e){function t(){let B=!1,be=new Nt,J=null,ne=new Nt(0,0,0,0);return{setMask:function(we){J!==we&&!B&&(i.colorMask(we,we,we,we),J=we)},setLocked:function(we){B=we},setClear:function(we,Se,ft,mn,$n){$n===!0&&(we*=mn,Se*=mn,ft*=mn),be.set(we,Se,ft,mn),ne.equals(be)===!1&&(i.clearColor(we,Se,ft,mn),ne.copy(be))},reset:function(){B=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let B=!1,be=!1,J=null,ne=null,we=null;return{setReversed:function(Se){if(be!==Se){let ft=e.get("EXT_clip_control");be?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);let mn=we;we=null,this.setClear(mn)}be=Se},getReversed:function(){return be},setTest:function(Se){Se?ge(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(Se){J!==Se&&!B&&(i.depthMask(Se),J=Se)},setFunc:function(Se){if(be&&(Se=jS[Se]),ne!==Se){switch(Se){case Ud:i.depthFunc(i.NEVER);break;case zd:i.depthFunc(i.ALWAYS);break;case Fd:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case Od:i.depthFunc(i.EQUAL);break;case Bd:i.depthFunc(i.GEQUAL);break;case kd:i.depthFunc(i.GREATER);break;case Hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Se}},setLocked:function(Se){B=Se},setClear:function(Se){we!==Se&&(be&&(Se=1-Se),i.clearDepth(Se),we=Se)},reset:function(){B=!1,J=null,ne=null,we=null,be=!1}}}function s(){let B=!1,be=null,J=null,ne=null,we=null,Se=null,ft=null,mn=null,$n=null;return{setTest:function(Wt){B||(Wt?ge(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(Wt){be!==Wt&&!B&&(i.stencilMask(Wt),be=Wt)},setFunc:function(Wt,es,Bs){(J!==Wt||ne!==es||we!==Bs)&&(i.stencilFunc(Wt,es,Bs),J=Wt,ne=es,we=Bs)},setOp:function(Wt,es,Bs){(Se!==Wt||ft!==es||mn!==Bs)&&(i.stencilOp(Wt,es,Bs),Se=Wt,ft=es,mn=Bs)},setLocked:function(Wt){B=Wt},setClear:function(Wt){$n!==Wt&&(i.clearStencil(Wt),$n=Wt)},reset:function(){B=!1,be=null,J=null,ne=null,we=null,Se=null,ft=null,mn=null,$n=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,M=null,y=null,L=null,T=null,w=new se(0,0,0),I=0,E=!1,v=null,D=null,z=null,U=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=K>=2);let le=null,me={},_e=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),Et=new Nt().fromArray(_e),j=new Nt().fromArray(qe);function de(B,be,J,ne){let we=new Uint8Array(4),Se=i.createTexture();i.bindTexture(B,Se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<J;ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(be+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Se}let Oe={};Oe[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),o.setFunc(Ga),ce(!1),De(gg),ge(i.CULL_FACE),P(Ts);function ge(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Ke(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function ot(B,be){return h[B]!==be?(i.bindFramebuffer(B,be),h[B]=be,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function it(B,be){let J=d,ne=!1;if(B){J=f.get(be),J===void 0&&(J=[],f.set(be,J));let we=B.textures;if(J.length!==we.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,ft=we.length;Se<ft;Se++)J[Se]=i.COLOR_ATTACHMENT0+Se;J.length=we.length,ne=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ne=!0);ne&&i.drawBuffers(J)}function Pt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let ie={[Uo]:i.FUNC_ADD,[xv]:i.FUNC_SUBTRACT,[yv]:i.FUNC_REVERSE_SUBTRACT};ie[_v]=i.MIN,ie[vv]=i.MAX;let fe={[Mv]:i.ZERO,[bv]:i.ONE,[Ev]:i.SRC_COLOR,[Dd]:i.SRC_ALPHA,[Cv]:i.SRC_ALPHA_SATURATE,[Av]:i.DST_COLOR,[Tv]:i.DST_ALPHA,[Sv]:i.ONE_MINUS_SRC_COLOR,[Nd]:i.ONE_MINUS_SRC_ALPHA,[Rv]:i.ONE_MINUS_DST_COLOR,[wv]:i.ONE_MINUS_DST_ALPHA,[Iv]:i.CONSTANT_COLOR,[Pv]:i.ONE_MINUS_CONSTANT_COLOR,[Lv]:i.CONSTANT_ALPHA,[Dv]:i.ONE_MINUS_CONSTANT_ALPHA};function P(B,be,J,ne,we,Se,ft,mn,$n,Wt){if(B===Ts){x===!0&&(Ke(i.BLEND),x=!1);return}if(x===!1&&(ge(i.BLEND),x=!0),B!==gv){if(B!==m||Wt!==E){if((p!==Uo||y!==Uo)&&(i.blendEquation(i.FUNC_ADD),p=Uo,y=Uo),Wt)switch(B){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case on:i.blendFunc(i.ONE,i.ONE);break;case xg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case on:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,M=null,L=null,T=null,w.set(0,0,0),I=0,m=B,E=Wt}return}we=we||be,Se=Se||J,ft=ft||ne,(be!==p||we!==y)&&(i.blendEquationSeparate(ie[be],ie[we]),p=be,y=we),(J!==_||ne!==M||Se!==L||ft!==T)&&(i.blendFuncSeparate(fe[J],fe[ne],fe[Se],fe[ft]),_=J,M=ne,L=Se,T=ft),(mn.equals(w)===!1||$n!==I)&&(i.blendColor(mn.r,mn.g,mn.b,$n),w.copy(mn),I=$n),m=B,E=!1}function Xe(B,be){B.side===un?Ke(i.CULL_FACE):ge(i.CULL_FACE);let J=B.side===Rn;be&&(J=!J),ce(J),B.blending===$s&&B.transparent===!1?P(Ts):P(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ne=B.stencilWrite;a.setTest(ne),ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Qe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function De(B){B!==pv?(ge(i.CULL_FACE),B!==D&&(B===gg?i.cullFace(i.BACK):B===mv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),D=B}function xe(B){B!==z&&(O&&i.lineWidth(B),z=B)}function Qe(B,be,J){B?(ge(i.POLYGON_OFFSET_FILL),(U!==be||N!==J)&&(i.polygonOffset(be,J),U=be,N=J)):Ke(i.POLYGON_OFFSET_FILL)}function Ce(B){B?ge(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+G-1),le!==B&&(i.activeTexture(B),le=B)}function b(B,be,J){J===void 0&&(le===null?J=i.TEXTURE0+G-1:J=le);let ne=me[J];ne===void 0&&(ne={type:void 0,texture:void 0},me[J]=ne),(ne.type!==B||ne.texture!==be)&&(le!==J&&(i.activeTexture(J),le=J),i.bindTexture(B,be||Oe[B]),ne.type=B,ne.texture=be)}function W(){let B=me[le];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(B){Et.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Et.copy(B))}function Ue(B){j.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),j.copy(B))}function It(B,be){let J=c.get(be);J===void 0&&(J=new WeakMap,c.set(be,J));let ne=J.get(B);ne===void 0&&(ne=i.getUniformBlockIndex(be,B.name),J.set(B,ne))}function gt(B,be){let ne=c.get(be).get(B);l.get(be)!==ne&&(i.uniformBlockBinding(be,ne,B.__bindingPointIndex),l.set(be,ne))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,me={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,M=null,y=null,L=null,T=null,w=new se(0,0,0),I=0,E=!1,v=null,D=null,z=null,U=null,N=null,Et.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Ke,bindFramebuffer:ot,drawBuffers:it,useProgram:Pt,setBlending:P,setMaterial:Xe,setFlipSided:ce,setCullFace:De,setLineWidth:xe,setPolygonOffset:Qe,setScissorTest:Ce,activeTexture:C,bindTexture:b,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:re,texImage2D:Ne,texImage3D:et,updateUBOMapping:It,uniformBlockBinding:gt,texStorage2D:At,texStorage3D:he,texSubImage2D:ee,texSubImage3D:ke,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ie,scissor:st,viewport:Ue,reset:$t}}function fx(i,e,t,n){let s=eT(n);switch(t){case Wx:return i*e;case qx:return i*e;case Yx:return i*e*2;case Ac:return i*e/s.components*s.byteLength;case h0:return i*e/s.components*s.byteLength;case Zx:return i*e*2/s.components*s.byteLength;case f0:return i*e*2/s.components*s.byteLength;case Xx:return i*e*3/s.components*s.byteLength;case Vi:return i*e*4/s.components*s.byteLength;case d0:return i*e*4/s.components*s.byteLength;case Yu:case Zu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ku:case Ju:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xd:case Yd:return Math.max(i,16)*Math.max(e,8)/4;case Wd:case qd:return Math.max(i,8)*Math.max(e,8)/2;case Zd:case Kd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ep:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tp:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case np:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ip:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rp:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ap:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lp:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cp:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case up:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $u:case hp:case fp:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kx:case dp:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pp:case mp:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eT(i){switch(i){case Qs:case Hx:return{byteLength:1,components:1};case fc:case Gx:case Ri:return{byteLength:2,components:1};case c0:case u0:return{byteLength:2,components:4};case Fo:case l0:case os:return{byteLength:4,components:1};case Vx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tT(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):dc("canvas")}function x(C,b,W){let Q=1,re=Ce(C);if((re.width>W||re.height>W)&&(Q=W/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ee=Math.floor(Q*re.width),ke=Math.floor(Q*re.height);h===void 0&&(h=g(ee,ke));let Me=b?g(ee,ke):h;return Me.width=ee,Me.height=ke,Me.getContext("2d").drawImage(C,0,0,ee,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+ke+")."),Me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,b,W,Q,re=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=b;if(b===i.RED&&(W===i.FLOAT&&(ee=i.R32F),W===i.HALF_FLOAT&&(ee=i.R16F),W===i.UNSIGNED_BYTE&&(ee=i.R8)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.R8UI),W===i.UNSIGNED_SHORT&&(ee=i.R16UI),W===i.UNSIGNED_INT&&(ee=i.R32UI),W===i.BYTE&&(ee=i.R8I),W===i.SHORT&&(ee=i.R16I),W===i.INT&&(ee=i.R32I)),b===i.RG&&(W===i.FLOAT&&(ee=i.RG32F),W===i.HALF_FLOAT&&(ee=i.RG16F),W===i.UNSIGNED_BYTE&&(ee=i.RG8)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RG8UI),W===i.UNSIGNED_SHORT&&(ee=i.RG16UI),W===i.UNSIGNED_INT&&(ee=i.RG32UI),W===i.BYTE&&(ee=i.RG8I),W===i.SHORT&&(ee=i.RG16I),W===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),W===i.UNSIGNED_INT&&(ee=i.RGB32UI),W===i.BYTE&&(ee=i.RGB8I),W===i.SHORT&&(ee=i.RGB16I),W===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),W===i.UNSIGNED_INT&&(ee=i.RGBA32UI),W===i.BYTE&&(ee=i.RGBA8I),W===i.SHORT&&(ee=i.RGBA16I),W===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),b===i.RGBA){let ke=re?zh:vt.getTransfer(Q);W===i.FLOAT&&(ee=i.RGBA32F),W===i.HALF_FLOAT&&(ee=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ee=ke===kt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(C,b){let W;return C?b===null||b===Fo||b===Xa?W=i.DEPTH24_STENCIL8:b===os?W=i.DEPTH32F_STENCIL8:b===fc&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fo||b===Xa?W=i.DEPTH_COMPONENT24:b===os?W=i.DEPTH_COMPONENT32F:b===fc&&(W=i.DEPTH_COMPONENT16),W}function L(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ei&&C.minFilter!==kn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){let b=C.target;b.removeEventListener("dispose",T),I(b),b.isVideoTexture&&u.delete(b)}function w(C){let b=C.target;b.removeEventListener("dispose",w),v(b)}function I(C){let b=n.get(C);if(b.__webglInit===void 0)return;let W=C.source,Q=f.get(W);if(Q){let re=Q[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(C),Object.keys(Q).length===0&&f.delete(W)}n.remove(C)}function E(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let W=C.source,Q=f.get(W);delete Q[b.__cacheKey],o.memory.textures--}function v(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let re=0;re<b.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(b.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=C.textures;for(let Q=0,re=W.length;Q<re;Q++){let ee=n.get(W[Q]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(W[Q])}n.remove(C)}let D=0;function z(){D=0}function U(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function N(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function G(C,b){let W=n.get(C);if(C.isVideoTexture&&xe(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,C,b);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function O(C,b){let W=n.get(C);if(C.version>0&&W.__version!==C.version){j(W,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function K(C,b){let W=n.get(C);if(C.version>0&&W.__version!==C.version){j(W,C,b);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function X(C,b){let W=n.get(C);if(C.version>0&&W.__version!==C.version){de(W,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let le={[as]:i.REPEAT,[Ks]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},me={[ei]:i.NEAREST,[a0]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[sc]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},_e={[Wv]:i.NEVER,[Jv]:i.ALWAYS,[Xv]:i.LESS,[$x]:i.LEQUAL,[qv]:i.EQUAL,[Kv]:i.GEQUAL,[Yv]:i.GREATER,[Zv]:i.NOTEQUAL};function qe(C,b){if(b.type===os&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kn||b.magFilter===sc||b.magFilter===Na||b.magFilter===Ss||b.minFilter===kn||b.minFilter===sc||b.minFilter===Na||b.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,le[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,le[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,le[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,me[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==Na&&b.minFilter!==Ss||b.type===os&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Et(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));let Q=b.source,re=f.get(Q);re===void 0&&(re={},f.set(Q,re));let ee=N(b);if(ee!==C.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ee].usedTimes++;let ke=re[C.__cacheKey];ke!==void 0&&(re[C.__cacheKey].usedTimes--,ke.usedTimes===0&&E(b)),C.__cacheKey=ee,C.__webglTexture=re[ee].texture}return W}function j(C,b,W){let Q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=i.TEXTURE_3D);let re=Et(C,b),ee=b.source;t.bindTexture(Q,C.__webglTexture,i.TEXTURE0+W);let ke=n.get(ee);if(ee.version!==ke.__version||re===!0){t.activeTexture(i.TEXTURE0+W);let Me=vt.getPrimaries(vt.workingColorSpace),Ie=b.colorSpace===Cr?null:vt.getPrimaries(b.colorSpace),At=b.colorSpace===Cr||Me===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let he=x(b.image,!1,s.maxTextureSize);he=Qe(b,he);let Ne=r.convert(b.format,b.colorSpace),et=r.convert(b.type),st=M(b.internalFormat,Ne,et,b.colorSpace,b.isVideoTexture);qe(Q,b);let Ue,It=b.mipmaps,gt=b.isVideoTexture!==!0,$t=ke.__version===void 0||re===!0,B=ee.dataReady,be=L(b,he);if(b.isDepthTexture)st=y(b.format===qa,b.type),$t&&(gt?t.texStorage2D(i.TEXTURE_2D,1,st,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,st,he.width,he.height,0,Ne,et,null));else if(b.isDataTexture)if(It.length>0){gt&&$t&&t.texStorage2D(i.TEXTURE_2D,be,st,It[0].width,It[0].height);for(let J=0,ne=It.length;J<ne;J++)Ue=It[J],gt?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Ne,et,Ue.data):t.texImage2D(i.TEXTURE_2D,J,st,Ue.width,Ue.height,0,Ne,et,Ue.data);b.generateMipmaps=!1}else gt?($t&&t.texStorage2D(i.TEXTURE_2D,be,st,he.width,he.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ne,et,he.data)):t.texImage2D(i.TEXTURE_2D,0,st,he.width,he.height,0,Ne,et,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){gt&&$t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,st,It[0].width,It[0].height,he.depth);for(let J=0,ne=It.length;J<ne;J++)if(Ue=It[J],b.format!==Vi)if(Ne!==null)if(gt){if(B)if(b.layerUpdates.size>0){let we=fx(Ue.width,Ue.height,b.format,b.type);for(let Se of b.layerUpdates){let ft=Ue.data.subarray(Se*we/Ue.data.BYTES_PER_ELEMENT,(Se+1)*we/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Se,Ue.width,Ue.height,1,Ne,ft)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,he.depth,Ne,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,st,Ue.width,Ue.height,he.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,he.depth,Ne,et,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,st,Ue.width,Ue.height,he.depth,0,Ne,et,Ue.data)}else{gt&&$t&&t.texStorage2D(i.TEXTURE_2D,be,st,It[0].width,It[0].height);for(let J=0,ne=It.length;J<ne;J++)Ue=It[J],b.format!==Vi?Ne!==null?gt?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Ne,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,st,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Ne,et,Ue.data):t.texImage2D(i.TEXTURE_2D,J,st,Ue.width,Ue.height,0,Ne,et,Ue.data)}else if(b.isDataArrayTexture)if(gt){if($t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,st,he.width,he.height,he.depth),B)if(b.layerUpdates.size>0){let J=fx(he.width,he.height,b.format,b.type);for(let ne of b.layerUpdates){let we=he.data.subarray(ne*J/he.data.BYTES_PER_ELEMENT,(ne+1)*J/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,Ne,et,we)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ne,et,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,he.width,he.height,he.depth,0,Ne,et,he.data);else if(b.isData3DTexture)gt?($t&&t.texStorage3D(i.TEXTURE_3D,be,st,he.width,he.height,he.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ne,et,he.data)):t.texImage3D(i.TEXTURE_3D,0,st,he.width,he.height,he.depth,0,Ne,et,he.data);else if(b.isFramebufferTexture){if($t)if(gt)t.texStorage2D(i.TEXTURE_2D,be,st,he.width,he.height);else{let J=he.width,ne=he.height;for(let we=0;we<be;we++)t.texImage2D(i.TEXTURE_2D,we,st,J,ne,0,Ne,et,null),J>>=1,ne>>=1}}else if(It.length>0){if(gt&&$t){let J=Ce(It[0]);t.texStorage2D(i.TEXTURE_2D,be,st,J.width,J.height)}for(let J=0,ne=It.length;J<ne;J++)Ue=It[J],gt?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ne,et,Ue):t.texImage2D(i.TEXTURE_2D,J,st,Ne,et,Ue);b.generateMipmaps=!1}else if(gt){if($t){let J=Ce(he);t.texStorage2D(i.TEXTURE_2D,be,st,J.width,J.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,et,he)}else t.texImage2D(i.TEXTURE_2D,0,st,Ne,et,he);m(b)&&p(Q),ke.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function de(C,b,W){if(b.image.length!==6)return;let Q=Et(C,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let ee=n.get(re);if(re.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);let ke=vt.getPrimaries(vt.workingColorSpace),Me=b.colorSpace===Cr?null:vt.getPrimaries(b.colorSpace),Ie=b.colorSpace===Cr||ke===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let At=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let ne=0;ne<6;ne++)!At&&!he?Ne[ne]=x(b.image[ne],!0,s.maxCubemapSize):Ne[ne]=he?b.image[ne].image:b.image[ne],Ne[ne]=Qe(b,Ne[ne]);let et=Ne[0],st=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type),It=M(b.internalFormat,st,Ue,b.colorSpace),gt=b.isVideoTexture!==!0,$t=ee.__version===void 0||Q===!0,B=re.dataReady,be=L(b,et);qe(i.TEXTURE_CUBE_MAP,b);let J;if(At){gt&&$t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,It,et.width,et.height);for(let ne=0;ne<6;ne++){J=Ne[ne].mipmaps;for(let we=0;we<J.length;we++){let Se=J[we];b.format!==Vi?st!==null?gt?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Se.width,Se.height,st,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,It,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Se.width,Se.height,st,Ue,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,It,Se.width,Se.height,0,st,Ue,Se.data)}}}else{if(J=b.mipmaps,gt&&$t){J.length>0&&be++;let ne=Ce(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,It,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){gt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne[ne].width,Ne[ne].height,st,Ue,Ne[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,It,Ne[ne].width,Ne[ne].height,0,st,Ue,Ne[ne].data);for(let we=0;we<J.length;we++){let ft=J[we].image[ne].image;gt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,ft.width,ft.height,st,Ue,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,It,ft.width,ft.height,0,st,Ue,ft.data)}}else{gt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,st,Ue,Ne[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,It,st,Ue,Ne[ne]);for(let we=0;we<J.length;we++){let Se=J[we];gt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,st,Ue,Se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,It,st,Ue,Se.image[ne])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),ee.__version=re.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Oe(C,b,W,Q,re,ee){let ke=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),Ie=M(W.internalFormat,ke,Me,W.colorSpace),At=n.get(b),he=n.get(W);if(he.__renderTarget=b,!At.__hasExternalTextures){let Ne=Math.max(1,b.width>>ee),et=Math.max(1,b.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Ie,Ne,et,b.depth,0,ke,Me,null):t.texImage2D(re,ee,Ie,Ne,et,0,ke,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),De(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,re,he.__webglTexture,0,ce(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,re,he.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let Q=b.depthTexture,re=Q&&Q.isDepthTexture?Q.type:null,ee=y(b.stencilBuffer,re),ke=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=ce(b);De(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ee,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,C)}else{let Q=b.textures;for(let re=0;re<Q.length;re++){let ee=Q[re],ke=r.convert(ee.format,ee.colorSpace),Me=r.convert(ee.type),Ie=M(ee.internalFormat,ke,Me,ee.colorSpace),At=ce(b);W&&De(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Ie,b.width,b.height):De(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let re=Q.__webglTexture,ee=ce(b);if(b.depthTexture.format===Ba)De(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===qa)De(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ot(C){let b=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",re)};Q.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=Q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ke(b.__webglFramebuffer,C)}else if(W){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=i.createRenderbuffer(),ge(b.__webglDepthbuffer[Q],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ge(b.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,b,W){let Q=n.get(C);b!==void 0&&Oe(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ot(C)}function Pt(C){let b=C.texture,W=n.get(C),Q=n.get(b);C.addEventListener("dispose",w);let re=C.textures,ee=C.isWebGLCubeRenderTarget===!0,ke=re.length>1;if(ke||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=b.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)W.__webglFramebuffer[Me][Ie]=i.createFramebuffer()}else W.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<b.mipmaps.length;Me++)W.__webglFramebuffer[Me]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Me=0,Ie=re.length;Me<Ie;Me++){let At=n.get(re[Me]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&De(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<re.length;Me++){let Ie=re[Me];W.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);let At=r.convert(Ie.format,Ie.colorSpace),he=r.convert(Ie.type),Ne=M(Ie.internalFormat,At,he,Ie.colorSpace,C.isXRRenderTarget===!0),et=ce(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b);for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)Oe(W.__webglFramebuffer[Me][Ie],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ie);else Oe(W.__webglFramebuffer[Me],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Me=0,Ie=re.length;Me<Ie;Me++){let At=re[Me],he=n.get(At);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),qe(i.TEXTURE_2D,At),Oe(W.__webglFramebuffer,C,At,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),m(At)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Q.__webglTexture),qe(Me,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)Oe(W.__webglFramebuffer[Ie],C,b,i.COLOR_ATTACHMENT0,Me,Ie);else Oe(W.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Me,0);m(b)&&p(Me),t.unbindTexture()}C.depthBuffer&&ot(C)}function ie(C){let b=C.textures;for(let W=0,Q=b.length;W<Q;W++){let re=b[W];if(m(re)){let ee=_(C),ke=n.get(re).__webglTexture;t.bindTexture(ee,ke),p(ee),t.unbindTexture()}}}let fe=[],P=[];function Xe(C){if(C.samples>0){if(De(C)===!1){let b=C.textures,W=C.width,Q=C.height,re=i.COLOR_BUFFER_BIT,ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(C),Me=b.length>1;if(Me)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ie]);let At=n.get(b[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,re,i.NEAREST),l===!0&&(fe.length=0,P.length=0,fe.push(i.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(fe.push(ee),P.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ie]);let At=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,At,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ce(C){return Math.min(s.maxSamples,C.samples)}function De(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xe(C){let b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function Qe(C,b){let W=C.colorSpace,Q=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==ti&&W!==Cr&&(vt.getTransfer(W)===kt?(Q!==Vi||re!==Qs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=it,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=De}function nT(i,e){function t(n,s=Cr){let r,o=vt.getTransfer(s);if(n===Qs)return i.UNSIGNED_BYTE;if(n===c0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===u0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hx)return i.BYTE;if(n===Gx)return i.SHORT;if(n===fc)return i.UNSIGNED_SHORT;if(n===l0)return i.INT;if(n===Fo)return i.UNSIGNED_INT;if(n===os)return i.FLOAT;if(n===Ri)return i.HALF_FLOAT;if(n===Wx)return i.ALPHA;if(n===Xx)return i.RGB;if(n===Vi)return i.RGBA;if(n===qx)return i.LUMINANCE;if(n===Yx)return i.LUMINANCE_ALPHA;if(n===Ba)return i.DEPTH_COMPONENT;if(n===qa)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===h0)return i.RED_INTEGER;if(n===Zx)return i.RG;if(n===f0)return i.RG_INTEGER;if(n===d0)return i.RGBA_INTEGER;if(n===Yu||n===Zu||n===Ku||n===Ju)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ku)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ju)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ku)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ju)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wd||n===Xd||n===qd||n===Yd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zd||n===Kd||n===Jd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zd||n===Kd)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jd)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$d||n===jd||n===Qd||n===ep||n===tp||n===np||n===ip||n===sp||n===rp||n===op||n===ap||n===lp||n===cp||n===up)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$d)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jd)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qd)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ep)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tp)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===np)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ip)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sp)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rp)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===op)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ap)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lp)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cp)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===up)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===hp||n===fp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$u)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kx||n===dp||n===pp||n===mp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$u)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pp)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ip=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pe=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},iT={type:"move"},ac=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rT=`
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

}`,Pp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new On,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:sT,fragmentShader:rT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lp=class extends er{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new Pp,m=t.getContextAttributes(),p=null,_=null,M=[],y=[],L=new $,T=null,w=new An;w.viewport=new Nt;let I=new An;I.viewport=new Nt;let E=[w,I],v=new Ip,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=M[j];return de===void 0&&(de=new ac,M[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=M[j];return de===void 0&&(de=new ac,M[j]=de),de.getGripSpace()},this.getHand=function(j){let de=M[j];return de===void 0&&(de=new ac,M[j]=de),de.getHandSpace()};function U(j){let de=y.indexOf(j.inputSource);if(de===-1)return;let Oe=M[de];Oe!==void 0&&(Oe.update(j.inputSource,j.frame,c||o),Oe.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let j=0;j<M.length;j++){let de=y[j];de!==null&&(y[j]=null,M[j].disconnect(de))}D=null,z=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,_=null,Et.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Hn(d.framebufferWidth,d.framebufferHeight,{format:Vi,type:Qs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,Oe=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?qa:Ba,Oe=m.stencil?Xa:Fo);let Ke={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Hn(f.textureWidth,f.textureHeight,{format:Vi,type:Qs,depthTexture:new lh(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(j){for(let de=0;de<j.removed.length;de++){let Oe=j.removed[de],ge=y.indexOf(Oe);ge>=0&&(y[ge]=null,M[ge].disconnect(Oe))}for(let de=0;de<j.added.length;de++){let Oe=j.added[de],ge=y.indexOf(Oe);if(ge===-1){for(let ot=0;ot<M.length;ot++)if(ot>=y.length){y.push(Oe),ge=ot;break}else if(y[ot]===null){y[ot]=Oe,ge=ot;break}if(ge===-1)break}let Ke=M[ge];Ke&&Ke.connect(Oe)}}let O=new A,K=new A;function X(j,de,Oe){O.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(Oe.matrixWorld);let ge=O.distanceTo(K),Ke=de.projectionMatrix.elements,ot=Oe.projectionMatrix.elements,it=Ke[14]/(Ke[10]-1),Pt=Ke[14]/(Ke[10]+1),ie=(Ke[9]+1)/Ke[5],fe=(Ke[9]-1)/Ke[5],P=(Ke[8]-1)/Ke[0],Xe=(ot[8]+1)/ot[0],ce=it*P,De=it*Xe,xe=ge/(-P+Xe),Qe=xe*-P;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Qe),j.translateZ(xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ke[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Ce=it+xe,C=Pt+xe,b=ce-Qe,W=De+(ge-Qe),Q=ie*Pt/C*Ce,re=fe*Pt/C*Ce;j.projectionMatrix.makePerspective(b,W,Q,re,Ce,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let de=j.near,Oe=j.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(Oe=x.depthFar)),v.near=I.near=w.near=de,v.far=I.far=w.far=Oe,(D!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,z=v.far),w.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,v.layers.mask=w.layers.mask|I.layers.mask;let ge=j.parent,Ke=v.cameras;le(v,ge);for(let ot=0;ot<Ke.length;ot++)le(Ke[ot],ge);Ke.length===2?X(v,w,I):v.projectionMatrix.copy(w.projectionMatrix),me(j,v,ge)};function me(j,de,Oe){Oe===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(Oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ka*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let _e=null;function qe(j,de){if(u=de.getViewerPose(c||o),g=de,u!==null){let Oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ge=!1;Oe.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let ot=0;ot<Oe.length;ot++){let it=Oe[ot],Pt=null;if(d!==null)Pt=d.getViewport(it);else{let fe=h.getViewSubImage(f,it);Pt=fe.viewport,ot===0&&(e.setRenderTargetTextures(_,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(_))}let ie=E[ot];ie===void 0&&(ie=new An,ie.layers.enable(ot),ie.viewport=new Nt,E[ot]=ie),ie.matrix.fromArray(it.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(it.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ot===0&&(v.matrix.copy(ie.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(ie)}let Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")){let ot=h.getDepthInformation(Oe[0]);ot&&ot.isValid&&ot.texture&&x.init(e,ot,s.renderState)}}for(let Oe=0;Oe<M.length;Oe++){let ge=y[Oe],Ke=M[Oe];ge!==null&&Ke!==void 0&&Ke.update(ge,de,c||o)}_e&&_e(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let Et=new ty;Et.setAnimationLoop(qe),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}},Do=new pi,oT=new je;function aT(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ey(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,Do.copy(y),Do.x*=-1,Do.y*=-1,Do.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Do.y*=-1,Do.z*=-1),m.envMapRotation.value.setFromMatrix4(oT.makeRotationFromEuler(Do)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lT(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let y=M.program;n.uniformBlockBinding(_,y)}function c(_,M){let y=s[_.id];y===void 0&&(g(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",m));let L=M.program;n.updateUBOMapping(_,L);let T=e.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function u(_){let M=h();_.__bindingPointIndex=M;let y=i.createBuffer(),L=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],y=_.uniforms,L=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,w=y.length;T<w;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,v=I.length;E<v;E++){let D=I[E];if(d(D,T,E,L)===!0){let z=D.__offset,U=Array.isArray(D.value)?D.value:[D.value],N=0;for(let G=0;G<U.length;G++){let O=U[G],K=x(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,z+N,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,N),N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,y,L){let T=_.value,w=M+"_"+y;if(L[w]===void 0)return typeof T=="number"||typeof T=="boolean"?L[w]=T:L[w]=T.clone(),!0;{let I=L[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(_){let M=_.uniforms,y=0,L=16;for(let w=0,I=M.length;w<I;w++){let E=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,D=E.length;v<D;v++){let z=E[v],U=Array.isArray(z.value)?z.value:[z.value];for(let N=0,G=U.length;N<G;N++){let O=U[N],K=x(O),X=y%L,le=X%K.boundary,me=X+le;y+=le,me!==0&&L-me<K.storage&&(y+=L-me),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=K.storage}}}let T=y%L;return T>0&&(y+=L-T),_.__size=y,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){let M=_.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ch=class{constructor(e={}){let{canvas:t=d1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Lr,this.toneMappingExposure=1;let y=this,L=!1,T=0,w=0,I=null,E=-1,v=null,D=new Nt,z=new Nt,U=null,N=new se(0),G=0,O=t.width,K=t.height,X=1,le=null,me=null,_e=new Nt(0,0,O,K),qe=new Nt(0,0,O,K),Et=!1,j=new pc,de=!1,Oe=!1,ge=new je,Ke=new je,ot=new A,it=new Nt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function fe(){return I===null?X:1}let P=n;function Xe(S,k){return t.getContext(S,k)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Se,!1),P===null){let k="webgl2";if(P=Xe(k,S),P===null)throw Xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ce,De,xe,Qe,Ce,C,b,W,Q,re,ee,ke,Me,Ie,At,he,Ne,et,st,Ue,It,gt,$t,B;function be(){ce=new SE(P),ce.init(),gt=new nT(P,ce),De=new yE(P,ce,e,gt),xe=new QS(P,ce),De.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),Qe=new AE(P),Ce=new kS,C=new tT(P,ce,xe,Ce,De,gt,Qe),b=new vE(y),W=new EE(y),Q=new N1(P),$t=new gE(P,Q),re=new TE(P,Q,Qe,$t),ee=new CE(P,re,Q,Qe),st=new RE(P,De,C),he=new _E(Ce),ke=new BS(y,b,W,ce,De,$t,he),Me=new aT(y,Ce),Ie=new GS,At=new ZS(ce),et=new mE(y,b,W,xe,ee,d,l),Ne=new $S(y,ee,De),B=new lT(P,Qe,De,xe),Ue=new xE(P,ce,Qe),It=new wE(P,ce,Qe),Qe.programs=ke.programs,y.capabilities=De,y.extensions=ce,y.properties=Ce,y.renderLists=Ie,y.shadowMap=Ne,y.state=xe,y.info=Qe}be();let J=new Lp(y,P);this.xr=J,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(O,K,!1))},this.getSize=function(S){return S.set(O,K)},this.setSize=function(S,k,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,K=k,t.width=Math.floor(S*X),t.height=Math.floor(k*X),q===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(O*X,K*X).floor()},this.setDrawingBufferSize=function(S,k,q){O=S,K=k,X=q,t.width=Math.floor(S*q),t.height=Math.floor(k*q),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,k,q,Y){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,k,q,Y),xe.viewport(D.copy(_e).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,k,q,Y){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,k,q,Y),xe.scissor(z.copy(qe).multiplyScalar(X).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(S){xe.setScissorTest(Et=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(S=!0,k=!0,q=!0){let Y=0;if(S){let H=!1;if(I!==null){let pe=I.texture.format;H=pe===d0||pe===f0||pe===h0}if(H){let pe=I.texture.type,Te=pe===Qs||pe===Fo||pe===fc||pe===Xa||pe===c0||pe===u0,Ge=et.getClearColor(),Ve=et.getClearAlpha(),at=Ge.r,dt=Ge.g,We=Ge.b;Te?(g[0]=at,g[1]=dt,g[2]=We,g[3]=Ve,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=at,x[1]=dt,x[2]=We,x[3]=Ve,P.clearBufferiv(P.COLOR,0,x))}else Y|=P.COLOR_BUFFER_BIT}k&&(Y|=P.DEPTH_BUFFER_BIT),q&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),At.dispose(),Ce.dispose(),b.dispose(),W.dispose(),ee.dispose(),$t.dispose(),B.dispose(),ke.dispose(),J.dispose(),J.removeEventListener("sessionstart",lg),J.removeEventListener("sessionend",cg),Ao.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=Qe.autoReset,k=Ne.enabled,q=Ne.autoUpdate,Y=Ne.needsUpdate,H=Ne.type;be(),Qe.autoReset=S,Ne.enabled=k,Ne.autoUpdate=q,Ne.needsUpdate=Y,Ne.type=H}function Se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ft(S){let k=S.target;k.removeEventListener("dispose",ft),mn(k)}function mn(S){$n(S),Ce.remove(S)}function $n(S){let k=Ce.get(S).programs;k!==void 0&&(k.forEach(function(q){ke.releaseProgram(q)}),S.isShaderMaterial&&ke.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,q,Y,H,pe){k===null&&(k=Pt);let Te=H.isMesh&&H.matrixWorld.determinant()<0,Ge=uv(S,k,q,Y,H);xe.setMaterial(Y,Te);let Ve=q.index,at=1;if(Y.wireframe===!0){if(Ve=re.getWireframeAttribute(q),Ve===void 0)return;at=2}let dt=q.drawRange,We=q.attributes.position,Dt=dt.start*at,jt=(dt.start+dt.count)*at;pe!==null&&(Dt=Math.max(Dt,pe.start*at),jt=Math.min(jt,(pe.start+pe.count)*at)),Ve!==null?(Dt=Math.max(Dt,0),jt=Math.min(jt,Ve.count)):We!=null&&(Dt=Math.max(Dt,0),jt=Math.min(jt,We.count));let tn=jt-Dt;if(tn<0||tn===1/0)return;$t.setup(H,Y,Ge,q,Ve);let fi,Ot=Ue;if(Ve!==null&&(fi=Q.get(Ve),Ot=It,Ot.setIndex(fi)),H.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*fe()),Ot.setMode(P.LINES)):Ot.setMode(P.TRIANGLES);else if(H.isLine){let Ye=Y.linewidth;Ye===void 0&&(Ye=1),xe.setLineWidth(Ye*fe()),H.isLineSegments?Ot.setMode(P.LINES):H.isLineLoop?Ot.setMode(P.LINE_LOOP):Ot.setMode(P.LINE_STRIP)}else H.isPoints?Ot.setMode(P.POINTS):H.isSprite&&Ot.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ot.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ye=H._multiDrawStarts,ks=H._multiDrawCounts,Bt=H._multiDrawCount,ts=Ve?Q.get(Ve).bytesPerElement:1,pa=Ce.get(Y).currentProgram.getUniforms();for(let bi=0;bi<Bt;bi++)pa.setValue(P,"_gl_DrawID",bi),Ot.render(Ye[bi]/ts,ks[bi])}else if(H.isInstancedMesh)Ot.renderInstances(Dt,tn,H.count);else if(q.isInstancedBufferGeometry){let Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ks=Math.min(q.instanceCount,Ye);Ot.renderInstances(Dt,tn,ks)}else Ot.render(Dt,tn)};function Wt(S,k,q){S.transparent===!0&&S.side===un&&S.forceSinglePass===!1?(S.side=Rn,S.needsUpdate=!0,du(S,k,q),S.side=ws,S.needsUpdate=!0,du(S,k,q),S.side=un):du(S,k,q)}this.compile=function(S,k,q=null){q===null&&(q=S),p=At.get(q),p.init(k),M.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let Y=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){let Ge=pe[Te];Wt(Ge,q,H),Y.add(Ge)}else Wt(pe,q,H),Y.add(pe)}),M.pop(),p=null,Y},this.compileAsync=function(S,k,q=null){let Y=this.compile(S,k,q);return new Promise(H=>{function pe(){if(Y.forEach(function(Te){Ce.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){H(S);return}setTimeout(pe,10)}ce.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let es=null;function Bs(S){es&&es(S)}function lg(){Ao.stop()}function cg(){Ao.start()}let Ao=new ty;Ao.setAnimationLoop(Bs),typeof self<"u"&&Ao.setContext(self),this.setAnimationLoop=function(S){es=S,J.setAnimationLoop(S),S===null?Ao.stop():Ao.start()},J.addEventListener("sessionstart",lg),J.addEventListener("sessionend",cg),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,I),p=At.get(S,M.length),p.init(k),M.push(p),Ke.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Ke),Oe=this.localClippingEnabled,de=he.init(this.clippingPlanes,Oe),m=Ie.get(S,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){let pe=y.xr.getDepthSensingMesh();pe!==null&&Jf(pe,k,-1/0,y.sortObjects)}Jf(S,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,me),ie=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ie&&et.addToRenderList(m,S),this.info.render.frame++,de===!0&&he.beginShadows();let q=p.state.shadowsArray;Ne.render(q,S,k),de===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){let pe=k.cameras;if(H.length>0)for(let Te=0,Ge=pe.length;Te<Ge;Te++){let Ve=pe[Te];hg(Y,H,S,Ve)}ie&&et.render(S);for(let Te=0,Ge=pe.length;Te<Ge;Te++){let Ve=pe[Te];ug(m,S,Ve,Ve.viewport)}}else H.length>0&&hg(Y,H,S,k),ie&&et.render(S),ug(m,S,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,k),$t.resetDefaultState(),E=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],de===!0&&he.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Jf(S,k,q,Y){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){Y&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ke);let Te=ee.update(S),Ge=S.material;Ge.visible&&m.push(S,Te,Ge,q,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){let Te=ee.update(S),Ge=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),it.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),it.copy(Te.boundingSphere.center)),it.applyMatrix4(S.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ge)){let Ve=Te.groups;for(let at=0,dt=Ve.length;at<dt;at++){let We=Ve[at],Dt=Ge[We.materialIndex];Dt&&Dt.visible&&m.push(S,Te,Dt,q,it.z,We)}}else Ge.visible&&m.push(S,Te,Ge,q,it.z,null)}}let pe=S.children;for(let Te=0,Ge=pe.length;Te<Ge;Te++)Jf(pe[Te],k,q,Y)}function ug(S,k,q,Y){let H=S.opaque,pe=S.transmissive,Te=S.transparent;p.setupLightsView(q),de===!0&&he.setGlobalState(y.clippingPlanes,q),Y&&xe.viewport(D.copy(Y)),H.length>0&&fu(H,k,q),pe.length>0&&fu(pe,k,q),Te.length>0&&fu(Te,k,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function hg(S,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Hn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Ri:Qs,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let pe=p.state.transmissionRenderTarget[Y.id],Te=Y.viewport||D;pe.setSize(Te.z,Te.w);let Ge=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),ie&&et.render(q);let Ve=y.toneMapping;y.toneMapping=Lr;let at=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),de===!0&&he.setGlobalState(y.clippingPlanes,Y),fu(S,q,Y),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let We=0,Dt=k.length;We<Dt;We++){let jt=k[We],tn=jt.object,fi=jt.geometry,Ot=jt.material,Ye=jt.group;if(Ot.side===un&&tn.layers.test(Y.layers)){let ks=Ot.side;Ot.side=Rn,Ot.needsUpdate=!0,fg(tn,q,Y,fi,Ot,Ye),Ot.side=ks,Ot.needsUpdate=!0,dt=!0}}dt===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ge),y.setClearColor(N,G),at!==void 0&&(Y.viewport=at),y.toneMapping=Ve}function fu(S,k,q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,pe=S.length;H<pe;H++){let Te=S[H],Ge=Te.object,Ve=Te.geometry,at=Y===null?Te.material:Y,dt=Te.group;Ge.layers.test(q.layers)&&fg(Ge,k,q,Ve,at,dt)}}function fg(S,k,q,Y,H,pe){S.onBeforeRender(y,k,q,Y,H,pe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(y,k,q,Y,S,pe),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=Rn,H.needsUpdate=!0,y.renderBufferDirect(q,k,Y,H,S,pe),H.side=ws,H.needsUpdate=!0,y.renderBufferDirect(q,k,Y,H,S,pe),H.side=un):y.renderBufferDirect(q,k,Y,H,S,pe),S.onAfterRender(y,k,q,Y,H,pe)}function du(S,k,q){k.isScene!==!0&&(k=Pt);let Y=Ce.get(S),H=p.state.lights,pe=p.state.shadowsArray,Te=H.state.version,Ge=ke.getParameters(S,H.state,pe,k,q),Ve=ke.getProgramCacheKey(Ge),at=Y.programs;Y.environment=S.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(S.isMeshStandardMaterial?W:b).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,at===void 0&&(S.addEventListener("dispose",ft),at=new Map,Y.programs=at);let dt=at.get(Ve);if(dt!==void 0){if(Y.currentProgram===dt&&Y.lightsStateVersion===Te)return pg(S,Ge),dt}else Ge.uniforms=ke.getUniforms(S),S.onBeforeCompile(Ge,y),dt=ke.acquireProgram(Ge,Ve),at.set(Ve,dt),Y.uniforms=Ge.uniforms;let We=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(We.clippingPlanes=he.uniform),pg(S,Ge),Y.needsLights=fv(S),Y.lightsStateVersion=Te,Y.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=dt,Y.uniformsList=null,dt}function dg(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Ha.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function pg(S,k){let q=Ce.get(S);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function uv(S,k,q,Y,H){k.isScene!==!0&&(k=Pt),C.resetTextureUnits();let pe=k.fog,Te=Y.isMeshStandardMaterial?k.environment:null,Ge=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ti,Ve=(Y.isMeshStandardMaterial?W:b).get(Y.envMap||Te),at=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,dt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),We=!!q.morphAttributes.position,Dt=!!q.morphAttributes.normal,jt=!!q.morphAttributes.color,tn=Lr;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tn=y.toneMapping);let fi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=fi!==void 0?fi.length:0,Ye=Ce.get(Y),ks=p.state.lights;if(de===!0&&(Oe===!0||S!==v)){let Hi=S===v&&Y.id===E;he.setState(Y,S,Hi)}let Bt=!1;Y.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ks.state.version||Ye.outputColorSpace!==Ge||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Ve||Y.fog===!0&&Ye.fog!==pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==he.numPlanes||Ye.numIntersection!==he.numIntersection)||Ye.vertexAlphas!==at||Ye.vertexTangents!==dt||Ye.morphTargets!==We||Ye.morphNormals!==Dt||Ye.morphColors!==jt||Ye.toneMapping!==tn||Ye.morphTargetsCount!==Ot)&&(Bt=!0):(Bt=!0,Ye.__version=Y.version);let ts=Ye.currentProgram;Bt===!0&&(ts=du(Y,k,H));let pa=!1,bi=!1,Vl=!1,nn=ts.getUniforms(),Ms=Ye.uniforms;if(xe.useProgram(ts.program)&&(pa=!0,bi=!0,Vl=!0),Y.id!==E&&(E=Y.id,bi=!0),pa||v!==S){xe.buffers.depth.getReversed()?(ge.copy(S.projectionMatrix),m1(ge),g1(ge),nn.setValue(P,"projectionMatrix",ge)):nn.setValue(P,"projectionMatrix",S.projectionMatrix),nn.setValue(P,"viewMatrix",S.matrixWorldInverse);let Mr=nn.map.cameraPosition;Mr!==void 0&&Mr.setValue(P,ot.setFromMatrixPosition(S.matrixWorld)),De.logarithmicDepthBuffer&&nn.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&nn.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,bi=!0,Vl=!0)}if(H.isSkinnedMesh){nn.setOptional(P,H,"bindMatrix"),nn.setOptional(P,H,"bindMatrixInverse");let Hi=H.skeleton;Hi&&(Hi.boneTexture===null&&Hi.computeBoneTexture(),nn.setValue(P,"boneTexture",Hi.boneTexture,C))}H.isBatchedMesh&&(nn.setOptional(P,H,"batchingTexture"),nn.setValue(P,"batchingTexture",H._matricesTexture,C),nn.setOptional(P,H,"batchingIdTexture"),nn.setValue(P,"batchingIdTexture",H._indirectTexture,C),nn.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&nn.setValue(P,"batchingColorTexture",H._colorsTexture,C));let Wl=q.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0)&&st.update(H,q,ts),(bi||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,nn.setValue(P,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ms.envMap.value=Ve,Ms.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Ms.envMapIntensity.value=k.environmentIntensity),bi&&(nn.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ye.needsLights&&hv(Ms,Vl),pe&&Y.fog===!0&&Me.refreshFogUniforms(Ms,pe),Me.refreshMaterialUniforms(Ms,Y,X,K,p.state.transmissionRenderTarget[S.id]),Ha.upload(P,dg(Ye),Ms,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ha.upload(P,dg(Ye),Ms,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&nn.setValue(P,"center",H.center),nn.setValue(P,"modelViewMatrix",H.modelViewMatrix),nn.setValue(P,"normalMatrix",H.normalMatrix),nn.setValue(P,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Hi=Y.uniformsGroups;for(let Mr=0,br=Hi.length;Mr<br;Mr++){let mg=Hi[Mr];B.update(mg,ts),B.bind(mg,ts)}}return ts}function hv(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function fv(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,k,q){Ce.get(S.texture).__webglTexture=k,Ce.get(S.depthTexture).__webglTexture=q;let Y=Ce.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){let q=Ce.get(S);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,q=0){I=S,T=k,w=q;let Y=!0,H=null,pe=!1,Te=!1;if(S){let Ve=Ce.get(S);if(Ve.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(Ve.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(Ve.__hasExternalTextures)C.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let We=S.depthTexture;if(Ve.__boundDepthTexture!==We){if(We!==null&&Ce.has(We)&&(S.width!==We.image.width||S.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}let at=S.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Te=!0);let dt=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(dt[k])?H=dt[k][q]:H=dt[k],pe=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?H=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(dt)?H=dt[q]:H=dt,D.copy(S.viewport),z.copy(S.scissor),U=S.scissorTest}else D.copy(_e).multiplyScalar(X).floor(),z.copy(qe).multiplyScalar(X).floor(),U=Et;if(xe.bindFramebuffer(P.FRAMEBUFFER,H)&&Y&&xe.drawBuffers(S,H),xe.viewport(D),xe.scissor(z),xe.setScissorTest(U),pe){let Ve=Ce.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ve.__webglTexture,q)}else if(Te){let Ve=Ce.get(S.texture),at=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ve.__webglTexture,q||0,at)}E=-1},this.readRenderTargetPixels=function(S,k,q,Y,H,pe,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Ge=Ge[Te]),Ge){xe.bindFramebuffer(P.FRAMEBUFFER,Ge);try{let Ve=S.texture,at=Ve.format,dt=Ve.type;if(!De.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Y&&q>=0&&q<=S.height-H&&P.readPixels(k,q,Y,H,gt.convert(at),gt.convert(dt),pe)}finally{let Ve=I!==null?Ce.get(I).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(S,k,q,Y,H,pe,Te){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Ge=Ge[Te]),Ge){let Ve=S.texture,at=Ve.format,dt=Ve.type;if(!De.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-Y&&q>=0&&q<=S.height-H){xe.bindFramebuffer(P.FRAMEBUFFER,Ge);let We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,pe.byteLength,P.STREAM_READ),P.readPixels(k,q,Y,H,gt.convert(at),gt.convert(dt),0);let Dt=I!==null?Ce.get(I).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Dt);let jt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await p1(P,jt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pe),P.deleteBuffer(We),P.deleteSync(jt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,q=0){S.isTexture!==!0&&(nc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);let Y=Math.pow(2,-q),H=Math.floor(S.image.width*Y),pe=Math.floor(S.image.height*Y),Te=k!==null?k.x:0,Ge=k!==null?k.y:0;C.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,Te,Ge,H,pe),xe.unbindTexture()},this.copyTextureToTexture=function(S,k,q=null,Y=null,H=0){S.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],k=arguments[2],H=arguments[3]||0,q=null);let pe,Te,Ge,Ve,at,dt,We,Dt,jt,tn=S.isCompressedTexture?S.mipmaps[H]:S.image;q!==null?(pe=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ge=q.isBox3?q.max.z-q.min.z:1,Ve=q.min.x,at=q.min.y,dt=q.isBox3?q.min.z:0):(pe=tn.width,Te=tn.height,Ge=tn.depth||1,Ve=0,at=0,dt=0),Y!==null?(We=Y.x,Dt=Y.y,jt=Y.z):(We=0,Dt=0,jt=0);let fi=gt.convert(k.format),Ot=gt.convert(k.type),Ye;k.isData3DTexture?(C.setTexture3D(k,0),Ye=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Ye=P.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Ye=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let ks=P.getParameter(P.UNPACK_ROW_LENGTH),Bt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ts=P.getParameter(P.UNPACK_SKIP_PIXELS),pa=P.getParameter(P.UNPACK_SKIP_ROWS),bi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,tn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,at),P.pixelStorei(P.UNPACK_SKIP_IMAGES,dt);let Vl=S.isDataArrayTexture||S.isData3DTexture,nn=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Ms=Ce.get(S),Wl=Ce.get(k),Hi=Ce.get(Ms.__renderTarget),Mr=Ce.get(Wl.__renderTarget);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Hi.__webglFramebuffer),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let br=0;br<Ge;br++)Vl&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.get(S).__webglTexture,H,dt+br),S.isDepthTexture?(nn&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.get(k).__webglTexture,H,jt+br),P.blitFramebuffer(Ve,at,pe,Te,We,Dt,pe,Te,P.DEPTH_BUFFER_BIT,P.NEAREST)):nn?P.copyTexSubImage3D(Ye,H,We,Dt,jt+br,Ve,at,pe,Te):P.copyTexSubImage2D(Ye,H,We,Dt,jt+br,Ve,at,pe,Te);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nn?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ye,H,We,Dt,jt,pe,Te,Ge,fi,Ot,tn.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Ye,H,We,Dt,jt,pe,Te,Ge,fi,tn.data):P.texSubImage3D(Ye,H,We,Dt,jt,pe,Te,Ge,fi,Ot,tn):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,We,Dt,pe,Te,fi,Ot,tn.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,We,Dt,tn.width,tn.height,fi,tn.data):P.texSubImage2D(P.TEXTURE_2D,H,We,Dt,pe,Te,fi,Ot,tn);P.pixelStorei(P.UNPACK_ROW_LENGTH,ks),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ts),P.pixelStorei(P.UNPACK_SKIP_ROWS,pa),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bi),H===0&&k.generateMipmaps&&P.generateMipmap(Ye),xe.unbindTexture()},this.copyTextureToTexture3D=function(S,k,q=null,Y=null,H=0){return S.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],k=arguments[3],H=arguments[4]||0),nc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,q,Y,H)},this.initRenderTarget=function(S){Ce.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,I=null,xe.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Js}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var uh=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hh=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ja=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gp,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ri=new A,Oo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rs(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qa=class extends ai{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ca,Kl=new A,Ia=new A,Pa=new A,La=new $,Jl=new $,oy=new je,Nu=new A,$l=new A,Uu=new A,dx=new $,Sd=new $,px=new $,mc=class extends an{constructor(e=new Qa){if(super(),this.isSprite=!0,this.type="Sprite",Ca===void 0){Ca=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ja(t,5);Ca.setIndex([0,1,2,0,2,3]),Ca.setAttribute("position",new Oo(n,3,0,!1)),Ca.setAttribute("uv",new Oo(n,2,3,!1))}this.geometry=Ca,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ia.setFromMatrixScale(this.matrixWorld),oy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ia.multiplyScalar(-Pa.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;zu(Nu.set(-.5,-.5,0),Pa,o,Ia,s,r),zu($l.set(.5,-.5,0),Pa,o,Ia,s,r),zu(Uu.set(.5,.5,0),Pa,o,Ia,s,r),dx.set(0,0),Sd.set(1,0),px.set(1,1);let a=e.ray.intersectTriangle(Nu,$l,Uu,!1,Kl);if(a===null&&(zu($l.set(-.5,.5,0),Pa,o,Ia,s,r),Sd.set(0,1),a=e.ray.intersectTriangle(Nu,Uu,$l,!1,Kl),a===null))return;let l=e.ray.origin.distanceTo(Kl);l<e.near||l>e.far||t.push({distance:l,point:Kl.clone(),uv:Ir.getInterpolation(Kl,Nu,$l,Uu,dx,Sd,px,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zu(i,e,t,n,s,r){La.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Jl.x=r*La.x-s*La.y,Jl.y=s*La.x+r*La.y):Jl.copy(La),i.copy(e),i.x+=Jl.x,i.y+=Jl.y,i.applyMatrix4(oy)}var mx=new A,gx=new Nt,xx=new Nt,cT=new A,yx=new je,Fu=new A,Td=new Ti,_x=new je,wd=new Ja,fh=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_g,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new di),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fu),this.boundingBox.expandByPoint(Fu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fu),this.boundingSphere.expandByPoint(Fu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Td.copy(this.boundingSphere),Td.applyMatrix4(s),e.ray.intersectsSphere(Td)!==!1&&(_x.copy(s).invert(),wd.copy(e.ray).applyMatrix4(_x),!(this.boundingBox!==null&&wd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_g?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gx.fromBufferAttribute(s.attributes.skinIndex,e),xx.fromBufferAttribute(s.attributes.skinWeight,e),mx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=xx.getComponent(r);if(o!==0){let a=gx.getComponent(r);yx.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cT.copy(mx).applyMatrix4(yx),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},gc=class extends an{constructor(){super(),this.isBone=!0,this.type="Bone"}},el=class extends On{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ei,u=ei,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vx=new je,uT=new je,dh=class i{constructor(e=[],t=[]){this.uuid=Wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:uT;vx.multiplyMatrices(a,t[r]),vx.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new el(t,e,e,Vi,os);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gc),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Bo=class extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Da=new je,Mx=new je,Ou=[],bx=new di,hT=new je,jl=new Be,Ql=new Ti,wi=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Da),bx.copy(e.boundingBox).applyMatrix4(Da),this.boundingBox.union(bx)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Da),Ql.copy(e.boundingSphere).applyMatrix4(Da),this.boundingSphere.union(Ql)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(jl.geometry=this.geometry,jl.material=this.material,jl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(n),e.ray.intersectsSphere(Ql)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Da),Mx.multiplyMatrices(n,Da),jl.matrixWorld=Mx,jl.raycast(e,Ou);for(let o=0,a=Ou.length;o<a;o++){let l=Ou[o];l.instanceId=r,l.object=this,t.push(l)}Ou.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new el(new Float32Array(s*this.count),s,this.count,Ac,os));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xc=class extends ai{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ph=new A,mh=new A,Ex=new je,ec=new Ja,Bu=new Ti,Ad=new A,Sx=new A,tl=class extends an{constructor(e=new Ut,t=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ph.fromBufferAttribute(t,s-1),mh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ph.distanceTo(mh);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bu.copy(n.boundingSphere),Bu.applyMatrix4(s),Bu.radius+=r,e.ray.intersectsSphere(Bu)===!1)return;Ex.copy(s).invert(),ec.copy(e.ray).applyMatrix4(Ex);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),_=u.getX(x+1),M=ku(this,e,ec,l,p,_);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=ku(this,e,ec,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=ku(this,e,ec,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=ku(this,e,ec,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ku(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ph.fromBufferAttribute(o,s),mh.fromBufferAttribute(o,r),t.distanceSqToSegment(ph,mh,Ad,Sx)>n)return;Ad.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ad);if(!(l<e.near||l>e.far))return{distance:l,point:Sx.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Tx=new A,wx=new A,gh=class extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tx.fromBufferAttribute(t,s),wx.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tx.distanceTo(wx);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xh=class extends tl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ko=class extends ai{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ax=new je,Dp=new Ja,Hu=new Ti,Gu=new A,Nr=class extends an{constructor(e=new Ut,t=new ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(s),Hu.radius+=r,e.ray.intersectsSphere(Hu)===!1)return;Ax.copy(s).invert(),Dp.copy(e.ray).applyMatrix4(Ax);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Gu.fromBufferAttribute(h,m),Rx(Gu,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Gu.fromBufferAttribute(h,g),Rx(Gu,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rx(i,e,t,n,s,r,o){let a=Dp.distanceSqToPoint(i);if(a<t){let l=new A;Dp.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var nl=class extends On{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new $:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,l=new je;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(wn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(wn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yc=class extends Xi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Np=class extends yc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _0(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Vu=new A,Rd=new _0,Cd=new _0,Id=new _0,Up=class extends Xi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Vu.subVectors(s[0],s[1]).add(s[0]),c=Vu);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Vu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Rd.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),Cd.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Id.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Rd.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Cd.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Id.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Rd.calc(l),Cd.calc(l),Id.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cx(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function fT(i,e){let t=1-i;return t*t*e}function dT(i,e){return 2*(1-i)*i*e}function pT(i,e){return i*i*e}function lc(i,e,t,n){return fT(i,e)+dT(i,t)+pT(i,n)}function mT(i,e){let t=1-i;return t*t*t*e}function gT(i,e){let t=1-i;return 3*t*t*i*e}function xT(i,e){return 3*(1-i)*i*i*e}function yT(i,e){return i*i*i*e}function cc(i,e,t,n,s){return mT(i,e)+gT(i,t)+xT(i,n)+yT(i,s)}var yh=class extends Xi{constructor(e=new $,t=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new $){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cc(e,s.x,r.x,o.x,a.x),cc(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zp=class extends Xi{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cc(e,s.x,r.x,o.x,a.x),cc(e,s.y,r.y,o.y,a.y),cc(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_h=class extends Xi{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fp=class extends Xi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vh=class extends Xi{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lc(e,s.x,r.x,o.x),lc(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Op=class extends Xi{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lc(e,s.x,r.x,o.x),lc(e,s.y,r.y,o.y),lc(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mh=class extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Cx(a,l.x,c.x,u.x,h.x),Cx(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new $().fromArray(s))}return this}},Bp=Object.freeze({__proto__:null,ArcCurve:Np,CatmullRomCurve3:Up,CubicBezierCurve:yh,CubicBezierCurve3:zp,EllipseCurve:yc,LineCurve:_h,LineCurve3:Fp,QuadraticBezierCurve:vh,QuadraticBezierCurve3:Op,SplineCurve:Mh}),kp=class extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bp[s.type]().fromJSON(s))}return this}},bh=class extends kp{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _h(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new vh(this.currentPoint.clone(),new $(e,t),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new yh(this.currentPoint.clone(),new $(e,t),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Mh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new yc(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Eh=class i extends Ut{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=wn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new A,f=new $,d=new A,g=new A,x=new A,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let M=n+_*u*s,y=Math.sin(M),L=Math.cos(M);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*L,o.push(h.x,h.y,h.z),f.x=_/t,f.y=T/(e.length-1),a.push(f.x,f.y);let w=l[3*T+0]*y,I=l[3*T+1],E=l[3*T+0]*L;c.push(w,I,E)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,L=y,T=y+e.length,w=y+e.length+1,I=y+1;r.push(L,T,I),r.push(w,I,T)}this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("uv",new Mt(a,2)),this.setAttribute("normal",new Mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ur=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,u=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function _(){let y=new A,L=new A,T=0,w=(t-e)/n;for(let I=0;I<=r;I++){let E=[],v=I/r,D=v*(t-e)+e;for(let z=0;z<=s;z++){let U=z/s,N=U*l+a,G=Math.sin(N),O=Math.cos(N);L.x=D*G,L.y=-v*n+m,L.z=D*O,h.push(L.x,L.y,L.z),y.set(G,w,O).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-v),E.push(g++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let v=x[E][I],D=x[E+1][I],z=x[E+1][I+1],U=x[E][I+1];(e>0||E!==0)&&(u.push(v,D,U),T+=3),(t>0||E!==r-1)&&(u.push(D,z,U),T+=3)}c.addGroup(p,T,0),p+=T}function M(y){let L=g,T=new $,w=new A,I=0,E=y===!0?e:t,v=y===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let N=z/s*l+a,G=Math.cos(N),O=Math.sin(N);w.x=E*O,w.y=m*v,w.z=E*G,h.push(w.x,w.y,w.z),f.push(0,v,0),T.x=G*.5+.5,T.y=O*.5*v+.5,d.push(T.x,T.y),g++}for(let z=0;z<s;z++){let U=L+z,N=D+z;y===!0?u.push(N,N+1,U):u.push(N+1,N,U),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ln=class i extends Jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new A,y=new A,L=new A;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],y),d(t[T+2],L),l(M,y,L,_)}function l(_,M,y,L){let T=L+1,w=[];for(let I=0;I<=T;I++){w[I]=[];let E=_.clone().lerp(y,I/T),v=M.clone().lerp(y,I/T),D=T-I;for(let z=0;z<=D;z++)z===0&&I===T?w[I][z]=E:w[I][z]=E.clone().lerp(v,z/D)}for(let I=0;I<T;I++)for(let E=0;E<2*(T-I)-1;E++){let v=Math.floor(E/2);E%2===0?(f(w[I][v+1]),f(w[I+1][v]),f(w[I][v])):(f(w[I][v+1]),f(w[I+1][v+1]),f(w[I+1][v]))}}function c(_){let M=new A;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let _=new A;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=m(_)/2/Math.PI+.5,L=p(_)/Math.PI+.5;o.push(y,1-L)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let M=o[_+0],y=o[_+2],L=o[_+4],T=Math.max(M,y,L),w=Math.min(M,y,L);T>.9&&w<.1&&(M<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),L<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let _=new A,M=new A,y=new A,L=new A,T=new $,w=new $,I=new $;for(let E=0,v=0;E<r.length;E+=9,v+=6){_.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),T.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),L.copy(_).add(M).add(y).divideScalar(3);let D=m(L);x(T,v+0,_,D),x(w,v+2,M,D),x(I,v+4,y,D)}}function x(_,M,y,L){L<0&&_.x===1&&(o[M]=_.x-1),y.x===0&&y.z===0&&(o[M]=L/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Sh=class i extends _c{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vc=class extends bh{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new bh().fromJSON(s))}return this}},_T={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ay(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=ST(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Mc(r,o,t,a,l,d,0),o}};function ay(i,e,t,n,s){let r,o;if(s===UT(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Ix(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ix(r,i[r],i[r+1],o);return o&&Bh(o,o.next)&&(Ec(o),o=o.next),o}function Ho(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bh(t,t.next)||hn(t.prev,t,t.next)===0)){if(Ec(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mc(i,e,t,n,s,r,o){if(!i)return;!o&&r&&CT(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?MT(i,n,s,r):vT(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ec(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bT(Ho(i),e,t),Mc(i,e,t,n,s,r,2)):o===2&&ET(i,e,t,n,s,r):Mc(Ho(i),e,t,n,s,r,1);break}}}function vT(i){let e=i.prev,t=i,n=i.next;if(hn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Oa(s,a,r,l,o,c,g.x,g.y)&&hn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function MT(i,e,t,n){let s=i.prev,r=i,o=i.next;if(hn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Hp(d,g,e,t,n),_=Hp(x,m,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Oa(a,u,l,h,c,f,M.x,M.y)&&hn(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Oa(a,u,l,h,c,f,y.x,y.y)&&hn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Oa(a,u,l,h,c,f,M.x,M.y)&&hn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Oa(a,u,l,h,c,f,y.x,y.y)&&hn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bT(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Bh(s,r)&&ly(s,n,n.next,r)&&bc(s,r)&&bc(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ec(n),Ec(n.next),n=i=r),n=n.next}while(n!==i);return Ho(n)}function ET(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&LT(o,a)){let l=cy(o,a);o=Ho(o,o.next),l=Ho(l,l.next),Mc(o,e,t,n,s,r,0),Mc(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ST(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ay(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(PT(c));for(s.sort(TT),r=0;r<s.length;r++)t=wT(s[r],t);return t}function TT(i,e){return i.x-e.x}function wT(i,e){let t=AT(i,e);if(!t)return e;let n=cy(t,i);return Ho(n,n.next),Ho(t,t.next)}function AT(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Oa(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),bc(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&RT(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function RT(i,e){return hn(i.prev,i,e.prev)<0&&hn(e.next,i,i.next)<0}function CT(i,e,t,n){let s=i;do s.z===0&&(s.z=Hp(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,IT(s)}function IT(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Hp(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function PT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Oa(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function LT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!DT(i,e)&&(bc(i,e)&&bc(e,i)&&NT(i,e)&&(hn(i.prev,i,e.prev)||hn(i,e.prev,e))||Bh(i,e)&&hn(i.prev,i,i.next)>0&&hn(e.prev,e,e.next)>0)}function hn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bh(i,e){return i.x===e.x&&i.y===e.y}function ly(i,e,t,n){let s=Xu(hn(i,e,t)),r=Xu(hn(i,e,n)),o=Xu(hn(t,n,i)),a=Xu(hn(t,n,e));return!!(s!==r&&o!==a||s===0&&Wu(i,t,e)||r===0&&Wu(i,n,e)||o===0&&Wu(t,i,n)||a===0&&Wu(t,e,n))}function Wu(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Xu(i){return i>0?1:i<0?-1:0}function DT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ly(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function bc(i,e){return hn(i.prev,i,i.next)<0?hn(i,e,i.next)>=0&&hn(i,i.prev,e)>=0:hn(i,e,i.prev)<0||hn(i,i.next,e)<0}function NT(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cy(i,e){let t=new Gp(i.i,i.x,i.y),n=new Gp(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ix(i,e,t,n){let s=new Gp(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ec(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gp(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function UT(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var uc=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Px(e),Lx(n,e);let o=e.length;t.forEach(Px);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lx(n,t[l]);let a=_T.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Px(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lx(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Th=class i extends Ut{constructor(e=new vc([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:zT,M,y=!1,L,T,w,I;p&&(M=p.getSpacedPoints(u),y=!0,f=!1,L=p.computeFrenetFrames(u,!1),T=new A,w=new A,I=new A),f||(m=0,d=0,g=0,x=0);let E=a.extractPoints(c),v=E.shape,D=E.holes;if(!uc.isClockWise(v)){v=v.reverse();for(let ie=0,fe=D.length;ie<fe;ie++){let P=D[ie];uc.isClockWise(P)&&(D[ie]=P.reverse())}}let U=uc.triangulateShape(v,D),N=v;for(let ie=0,fe=D.length;ie<fe;ie++){let P=D[ie];v=v.concat(P)}function G(ie,fe,P){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(fe,P)}let O=v.length,K=U.length;function X(ie,fe,P){let Xe,ce,De,xe=ie.x-fe.x,Qe=ie.y-fe.y,Ce=P.x-ie.x,C=P.y-ie.y,b=xe*xe+Qe*Qe,W=xe*C-Qe*Ce;if(Math.abs(W)>Number.EPSILON){let Q=Math.sqrt(b),re=Math.sqrt(Ce*Ce+C*C),ee=fe.x-Qe/Q,ke=fe.y+xe/Q,Me=P.x-C/re,Ie=P.y+Ce/re,At=((Me-ee)*C-(Ie-ke)*Ce)/(xe*C-Qe*Ce);Xe=ee+xe*At-ie.x,ce=ke+Qe*At-ie.y;let he=Xe*Xe+ce*ce;if(he<=2)return new $(Xe,ce);De=Math.sqrt(he/2)}else{let Q=!1;xe>Number.EPSILON?Ce>Number.EPSILON&&(Q=!0):xe<-Number.EPSILON?Ce<-Number.EPSILON&&(Q=!0):Math.sign(Qe)===Math.sign(C)&&(Q=!0),Q?(Xe=-Qe,ce=xe,De=Math.sqrt(b)):(Xe=xe,ce=Qe,De=Math.sqrt(b/2))}return new $(Xe/De,ce/De)}let le=[];for(let ie=0,fe=N.length,P=fe-1,Xe=ie+1;ie<fe;ie++,P++,Xe++)P===fe&&(P=0),Xe===fe&&(Xe=0),le[ie]=X(N[ie],N[P],N[Xe]);let me=[],_e,qe=le.concat();for(let ie=0,fe=D.length;ie<fe;ie++){let P=D[ie];_e=[];for(let Xe=0,ce=P.length,De=ce-1,xe=Xe+1;Xe<ce;Xe++,De++,xe++)De===ce&&(De=0),xe===ce&&(xe=0),_e[Xe]=X(P[Xe],P[De],P[xe]);me.push(_e),qe=qe.concat(_e)}for(let ie=0;ie<m;ie++){let fe=ie/m,P=d*Math.cos(fe*Math.PI/2),Xe=g*Math.sin(fe*Math.PI/2)+x;for(let ce=0,De=N.length;ce<De;ce++){let xe=G(N[ce],le[ce],Xe);ge(xe.x,xe.y,-P)}for(let ce=0,De=D.length;ce<De;ce++){let xe=D[ce];_e=me[ce];for(let Qe=0,Ce=xe.length;Qe<Ce;Qe++){let C=G(xe[Qe],_e[Qe],Xe);ge(C.x,C.y,-P)}}}let Et=g+x;for(let ie=0;ie<O;ie++){let fe=f?G(v[ie],qe[ie],Et):v[ie];y?(w.copy(L.normals[0]).multiplyScalar(fe.x),T.copy(L.binormals[0]).multiplyScalar(fe.y),I.copy(M[0]).add(w).add(T),ge(I.x,I.y,I.z)):ge(fe.x,fe.y,0)}for(let ie=1;ie<=u;ie++)for(let fe=0;fe<O;fe++){let P=f?G(v[fe],qe[fe],Et):v[fe];y?(w.copy(L.normals[ie]).multiplyScalar(P.x),T.copy(L.binormals[ie]).multiplyScalar(P.y),I.copy(M[ie]).add(w).add(T),ge(I.x,I.y,I.z)):ge(P.x,P.y,h/u*ie)}for(let ie=m-1;ie>=0;ie--){let fe=ie/m,P=d*Math.cos(fe*Math.PI/2),Xe=g*Math.sin(fe*Math.PI/2)+x;for(let ce=0,De=N.length;ce<De;ce++){let xe=G(N[ce],le[ce],Xe);ge(xe.x,xe.y,h+P)}for(let ce=0,De=D.length;ce<De;ce++){let xe=D[ce];_e=me[ce];for(let Qe=0,Ce=xe.length;Qe<Ce;Qe++){let C=G(xe[Qe],_e[Qe],Xe);y?ge(C.x,C.y+M[u-1].y,M[u-1].x+P):ge(C.x,C.y,h+P)}}}j(),de();function j(){let ie=s.length/3;if(f){let fe=0,P=O*fe;for(let Xe=0;Xe<K;Xe++){let ce=U[Xe];Ke(ce[2]+P,ce[1]+P,ce[0]+P)}fe=u+m*2,P=O*fe;for(let Xe=0;Xe<K;Xe++){let ce=U[Xe];Ke(ce[0]+P,ce[1]+P,ce[2]+P)}}else{for(let fe=0;fe<K;fe++){let P=U[fe];Ke(P[2],P[1],P[0])}for(let fe=0;fe<K;fe++){let P=U[fe];Ke(P[0]+O*u,P[1]+O*u,P[2]+O*u)}}n.addGroup(ie,s.length/3-ie,0)}function de(){let ie=s.length/3,fe=0;Oe(N,fe),fe+=N.length;for(let P=0,Xe=D.length;P<Xe;P++){let ce=D[P];Oe(ce,fe),fe+=ce.length}n.addGroup(ie,s.length/3-ie,1)}function Oe(ie,fe){let P=ie.length;for(;--P>=0;){let Xe=P,ce=P-1;ce<0&&(ce=ie.length-1);for(let De=0,xe=u+m*2;De<xe;De++){let Qe=O*De,Ce=O*(De+1),C=fe+Xe+Qe,b=fe+ce+Qe,W=fe+ce+Ce,Q=fe+Xe+Ce;ot(C,b,W,Q)}}}function ge(ie,fe,P){l.push(ie),l.push(fe),l.push(P)}function Ke(ie,fe,P){it(ie),it(fe),it(P);let Xe=s.length/3,ce=_.generateTopUV(n,s,Xe-3,Xe-2,Xe-1);Pt(ce[0]),Pt(ce[1]),Pt(ce[2])}function ot(ie,fe,P,Xe){it(ie),it(fe),it(Xe),it(fe),it(P),it(Xe);let ce=s.length/3,De=_.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);Pt(De[0]),Pt(De[1]),Pt(De[3]),Pt(De[1]),Pt(De[2]),Pt(De[3])}function it(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Pt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return FT(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bp[s.type]().fromJSON(s)),new i(n,e.options)}},zT={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new $(r,o),new $(a,l),new $(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-h),new $(f,1-g),new $(x,1-p)]:[new $(a,1-l),new $(u,1-h),new $(d,1-g),new $(m,1-p)]}};function FT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var il=class i extends _c{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Go=class i extends _c{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},sl=class i extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new A,g=new $;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,M=_,y=_+n+1,L=_+n+2,T=_+1;a.push(M,y,T),a.push(y,L,T)}}this.setIndex(a),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xn=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new A,f=new A,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let T=L/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+y,1-M),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=u[p][_+1],y=u[p][_],L=u[p+1][_],T=u[p+1][_+1];(p!==0||o>0)&&d.push(M,y,T),(p!==n-1||l<Math.PI)&&d.push(y,L,T)}this.setIndex(d),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ls=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new A,h=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wh=class extends Kt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},rl=class extends ai{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ai=class extends rl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ol=class extends ai{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function qu(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function OT(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function BT(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Dx(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function uy(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var zr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vp=class extends zr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ua,endingEnd:Ua}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case za:r=e,a=2*t-n;break;case ju:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case za:o=e,l=2*n-t;break;case ju:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+_*o[c+L]+M*o[l+L]+y*o[h+L];return r}},Ah=class extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Wp=class extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qu(t,this.TimeBufferType),this.values=qu(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qu(e.times,Array),values:qu(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ya:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case $f:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return $f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&OT(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$f,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=Za;var Fr=class extends qi{constructor(e,t,n){super(e,t,n)}};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Ya;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends qi{};Rh.prototype.ValueTypeName="color";var tr=class extends qi{};tr.prototype.ValueTypeName="number";var Xp=class extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},nr=class extends qi{InterpolantFactoryMethodLinear(e){return new Xp(this.times,this.values,this.getValueSize(),e)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends qi{constructor(e,t,n){super(e,t,n)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ya;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends qi{};ir.prototype.ValueTypeName="vector";var al=class{constructor(e="",t=-1,n=[],s=m0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(HT(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(qi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=BT(l);l=Dx(l,1,u),c=Dx(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,x){if(d.length!==0){let m=[],p=[];uy(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let _=0;_!==f[g].morphTargets.length;++_){let M=f[g];m.push(M.time),p.push(M.morphTarget===x?1:0)}s.push(new tr(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(ir,d+".position",f,"pos",s),n(nr,d+".quaternion",f,"rot",s),n(ir,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function kT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return Rh;case"quaternion":return nr;case"bool":case"boolean":return Fr;case"string":return Or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function HT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kT(i.type);if(i.times===void 0){let t=[],n=[];uy(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Pr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},qp=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},GT=new qp,sr=class{constructor(e){this.manager=e!==void 0?e:GT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sr.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs={},Yp=class extends Error{constructor(e,t){super(e),this.response=t}},Sc=class extends sr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qs[e]!==void 0){qs[e].push({onLoad:t,onProgress:n,onError:s});return}qs[e]=[],qs[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=qs[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){_();function _(){h.read().then(({done:M,value:y})=>{if(M)p.close();else{x+=y.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,w=u.length;T<w;T++){let I=u[T];I.onProgress&&I.onProgress(L)}p.enqueue(y),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Yp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Pr.add(e,c);let u=qs[e];delete qs[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=qs[e];if(u===void 0)throw this.manager.itemError(e),c;delete qs[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zp=class extends sr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=dc("img");function l(){u(),Pr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ch=class extends sr{constructor(e){super(e)}load(e,t,n,s){let r=new On,o=new Zp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ll=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ih=class extends ll{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pd=new je,Nx=new A,Ux=new A,Tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nx),Ux.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ux),t.updateMatrixWorld(),Pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kp=class extends Tc{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ka*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ph=class extends ll{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zx=new je,tc=new A,Ld=new A,Jp=class extends Tc{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tc.setFromMatrixPosition(e.matrixWorld),n.position.copy(tc),Ld.copy(n.position),Ld.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ld),n.updateMatrixWorld(),s.makeTranslation(-tc.x,-tc.y,-tc.z),zx.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zx)}},rr=class extends ll{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$p=class extends Tc{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cl=class extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new $p}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Br=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Lh=class extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pr.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Pr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pr.add(e,l),r.manager.itemStart(e)}};var ul=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fx(){return performance.now()}var jp=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){fn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},v0="\\[\\]\\.:\\/",VT=new RegExp("["+v0+"]","g"),M0="[^"+v0+"]",WT="[^"+v0.replace("\\.","")+"]",XT=/((?:WC+[\/:])*)/.source.replace("WC",M0),qT=/(WCOD+)?/.source.replace("WCOD",WT),YT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",M0),ZT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",M0),KT=new RegExp("^"+XT+qT+YT+ZT+"$"),JT=["material","materials","bones","map"],Qp=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VT,"")}static parseTrackName(e){let t=KT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);JT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Qp;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e0=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ua,endingEnd:Ua};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ov,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case kv:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case m0:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Bv;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===p0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=za,s.endingEnd=za):(e?s.endingStart=this.zeroSlopeAtStart?za:Ua:s.endingStart=ju,t?s.endingEnd=this.zeroSlopeAtEnd?za:Ua:s.endingEnd=ju)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},$T=new Float32Array(1),Dh=class extends er{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=s[h],d=f.name,g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new jp(Zt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ah(new Float32Array(2),new Float32Array(2),1,$T),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?al.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=m0),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new e0(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?al.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function or(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ut,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=hy(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=hy(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function hy(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Rt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function b0(i,e){if(e===Jx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Rc||e===Uh){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Rc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var kh=class extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new C0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new L0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new N0(t)}),this.register(function(t){return new U0(t)}),this.register(function(t){return new R0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new P0(t)}),this.register(function(t){return new O0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new V0(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Br.extractUrlBase(e);o=Br.resolveURL(c,this.path)}else o=Br.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gy){try{o[St.KHR_BINARY_GLTF]=new W0(e)}catch(h){s&&s(h);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case St.KHR_MATERIALS_UNLIT:o[h]=new A0;break;case St.KHR_DRACO_MESH_COMPRESSION:o[h]=new X0(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[h]=new q0;break;case St.KHR_MESH_QUANTIZATION:o[h]=new Y0;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function jT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},w0=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ti);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rr(u),c.distance=h;break;case"spot":c=new Ph(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ar(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},A0=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){let s=[];e.color=new se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ti),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,rn))}return Promise.all(s)}},R0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},C0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $(a,a)}return Promise.all(r)}},I0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},P0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},L0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ti)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,rn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},D0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},N0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],ti),Promise.all(r)}},U0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},z0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],ti),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,rn)),Promise.all(r)}},F0=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},O0=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},B0=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},k0=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},H0=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},G0=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},V0=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Yi.TRIANGLES&&c.mode!==Yi.TRIANGLE_STRIP&&c.mode!==Yi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let x=new je,m=new A,p=new fn,_=new A(1,1,1),M=new wi(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(m,p,_));for(let y in l)if(y==="_COLOR_0"){let L=l[y];M.instanceColor=new Bo(L.array,L.itemSize,L.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);an.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},gy="glTF",Cc=12,fy={JSON:1313821514,BIN:5130562},W0=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Cc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Cc,r=new DataView(e,Cc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===fy.JSON){let c=new Uint8Array(e,Cc+o,a);this.content=n.decode(c)}else if(l===fy.BIN){let c=Cc+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},X0=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=K0[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=K0[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=fl[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,ti,f)})})}},q0=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Y0=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Hh=class extends zr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,_=1-m,M=p-f+h;for(let y=0;y!==a;y++){let L=o[x+y+a],T=o[x+y+l]*u,w=o[g+y+a],I=o[g+y]*u;r[y]=_*L+M*T+m*w+p*I}return r}},QT=new fn,Z0=class extends Hh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return QT.fromArray(r).normalize().toArray(r),r}},Yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dy={9728:ei,9729:kn,9984:a0,9985:sc,9986:Na,9987:Ss},py={33071:Ks,33648:hc,10497:as},E0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},K0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ew={CUBICSPLINE:void 0,LINEAR:Za,STEP:Ya},S0={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new rl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ws})),i.DefaultMaterial}function Vo(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ar(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nw(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function iw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sw(i){let e,t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+T0(t.attributes):e=i.indices+":"+T0(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+T0(i.targets[n]);return e}function T0(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function J0(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ow=new je,$0=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ch(this.options.manager):this.textureLoader=new Lh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Vo(r,a,s),ar(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Br.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=E0[s.type],a=fl[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Rt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=E0[s.type],c=fl[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==h){let p=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(x=new c(a,p*d,s.count*d/u),M=new ja(x,d/u),t.cache.add(_,M)),m=new Oo(M,l,f%d/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Rt(x,l,g);if(s.sparse!==void 0){let p=E0.SCALAR,_=fl[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,L=new _(o[1],M,s.sparse.count*p),T=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=L.length;w<I;w++){let E=L[w];if(m.setX(E,T[w*l]),l>=2&&m.setY(E,T[w*l+1]),l>=3&&m.setZ(E,T[w*l+2]),l>=4&&m.setW(E,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=dy[f.magFilter]||kn,u.minFilter=dy[f.minFilter]||Ss,u.wrapS=py[f.wrapS]||as,u.wrapT=py[f.wrapT]||as,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ei&&u.minFilter!==kn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new On(x);m.needsUpdate=!0,f(m)}),t.load(Br.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ar(h,o),h.userData.mimeType=o.mimeType||rw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ko,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new xc,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return rl}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[St.KHR_MATERIALS_UNLIT]){let h=s[St.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ti),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,rn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=un);let u=r.alphaMode||S0.OPAQUE;if(u===S0.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===S0.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){let h=r.emissiveFactor;a.emissive=new se().setRGB(h[0],h[1],h[2],ti)}return r.emissiveTexture!==void 0&&o!==Lt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,rn)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ar(h,r),t.associations.set(h,{materials:e}),r.extensions&&Vo(s,h,r),h})}createUniqueName(e){let t=Zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return my(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=sw(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=my(new Ut,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?tw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let x=u[d],m=o[d],p,_=c[d];if(m.mode===Yi.TRIANGLES||m.mode===Yi.TRIANGLE_STRIP||m.mode===Yi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new fh(x,_):new Be(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Yi.TRIANGLE_STRIP?p.geometry=b0(p.geometry,Uh):m.mode===Yi.TRIANGLE_FAN&&(p.geometry=b0(p.geometry,Rc));else if(m.mode===Yi.LINES)p=new gh(x,_);else if(m.mode===Yi.LINE_STRIP)p=new tl(x,_);else if(m.mode===Yi.LINE_LOOP)p=new xh(x,_);else if(m.mode===Yi.POINTS)p=new Nr(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ar(p,r),m.extensions&&Vo(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Vo(s,h[0],r),h[0];let f=new Pe;r.extensions&&Vo(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(Fh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Dr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ar(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dh(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let _=0,M=f.length;_<M;_++){let y=f[_],L=d[_],T=g[_],w=x[_],I=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let E=n._createAnimationTracks(y,L,T,w,I);if(E)for(let v=0;v<E.length;v++)p.push(E[v])}return new al(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ow)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new gc:c.length>1?u=new Pe:c.length===1?u=c[0]:u=new an,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ar(u,r),r.extensions&&Vo(n,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Pe;n.name&&(r.name=s.createUniqueName(n.name)),ar(r,n),n.extensions&&Vo(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof ai||f instanceof On)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Hr[r.path]===Hr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Hr[r.path]){case Hr.weights:c=tr;break;case Hr.rotation:c=nr;break;case Hr.position:case Hr.scale:c=ir;break;default:n.itemSize===1?c=tr:c=ir;break}let u=s.interpolation!==void 0?ew[s.interpolation]:Za,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Hr[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=J0(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof nr?Z0:Hh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aw(i,e,t){let n=e.attributes,s=new di;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let u=J0(fl[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new A,l=new A;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=J0(fl[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ti;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function my(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=K0[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return vt.workingColorSpace!==ti&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),ar(i,e),aw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nw(i,e.targets,t):i})}function li(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var x3=li(20954),j0=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Wo=class{constructor(e=1337){let t=li(e);this.perm=new Uint8Array(512);let n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1));[n[s],n[r]]=[n[r],n[s]]}for(let s=0;s<512;s++)this.perm[s]=n[s&255]}noise(e,t){let n=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=0,o=0,a=0,l=(e+t)*n,c=Math.floor(e+l),u=Math.floor(t+l),h=(c+u)*s,f=e-(c-h),d=t-(u-h),g=f>d?1:0,x=f>d?0:1,m=f-g+s,p=d-x+s,_=f-1+2*s,M=d-1+2*s,y=c&255,L=u&255,T=.5-f*f-d*d;if(T>=0){let E=j0[this.perm[y+this.perm[L]]%8];T*=T,r=T*T*(E[0]*f+E[1]*d)}let w=.5-m*m-p*p;if(w>=0){let E=j0[this.perm[y+g+this.perm[L+x]]%8];w*=w,o=w*w*(E[0]*m+E[1]*p)}let I=.5-_*_-M*M;if(I>=0){let E=j0[this.perm[y+1+this.perm[L+1]]%8];I*=I,a=I*I*(E[0]*_+E[1]*M)}return 70*(r+o+a)}fbm(e,t,n=4,s=2,r=.5){let o=.5,a=1,l=0,c=0;for(let u=0;u<n;u++)l+=o*this.noise(e*a,t*a),c+=o,o*=r,a*=s;return l/c}},Re=(i,e,t)=>Math.min(t,Math.max(e,i)),ye=(i,e,t)=>i+(e-i)*t,Ze=(i,e,t)=>{let n=Re((t-i)/(e-i),0,1);return n*n*(3-2*n)},ze=(i,e,t,n)=>ye(i,e,1-Math.exp(-t*n)),Xo=(i,e)=>{let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t},Gn=(i,e,t,n)=>i+Xo(i,e)*(1-Math.exp(-t*n)),Q0=null;function tm(){if(Q0)return Q0;let i=new Uint8Array([58,104,150,200,245]),e=new el(i,i.length,1,Ac);return e.minFilter=kn,e.magFilter=kn,e.needsUpdate=!0,Q0=e,e}function tt(i,e={}){return new ol({color:i,gradientMap:tm(),...e})}function Ht(i,e=1.2,t={}){return new ol({color:i,gradientMap:tm(),emissive:new se(i),emissiveIntensity:e,...t})}function Ci(i,e){let t=document.createElement("canvas");t.width=t.height=i;let n=t.getContext("2d");e(n,i);let s=new nl(t);return s.colorSpace=rn,s}function ae(i,e,t=0,n=0,s=0,r=null){let o=new Be(i,e);return o.position.set(t,n,s),o.castShadow=!0,r&&r.add(o),o}var Ae={v1:new A,v2:new A,v3:new A,q1:new fn,c1:new se},lw=new kh,em=new Map;function Ii(i){return em.has(i)||em.set(i,new Promise((e,t)=>{lw.load(i,e,void 0,t)})),em.get(i)}function Pi(i,e=16777215,t={}){return i.traverse(n=>{if(!n.isMesh)return;let s=n.material,r=new ol({map:s.map||null,color:e,gradientMap:tm(),transparent:s.transparent,alphaTest:s.alphaTest,...t});n.material=r,n.castShadow=!0}),i}function Ic(i){let e=new di().setFromObject(i),t=new A;return e.getSize(t),{size:t,box:e}}var zc={};bs(zc,{init:()=>Rw,update:()=>Cw});var As=-4,Rs={x:0,z:-650},gi={x:550,z:-450},Wh={x:-450,z:350},qr={x:450,z:150},Gr={x:-190,z:-60},Vh=24,xy=52;var cw=new Wo(9001),Gh=new Wo(4242),uw=new Wo(777),yy=new Wo(3131),Xh=[{x:180,z:80,r:12,h:0},{x:-360,z:260,r:12,h:0},{x:430,z:40,r:12,h:0},{x:430,z:-300,r:12,h:0},{x:0,z:250,r:15,h:0}],My=!1;function by(i,e){let t=Math.max(Math.abs(i),Math.abs(e));if(t>1350)return-16;let n=3.5+cw.fbm(i*.0016,e*.0016,3)*7+Gh.fbm(i*.0062,e*.0062,4)*2.4,s=i-qr.x,r=e-qr.z,o=Math.sqrt(s*s+r*r);if(o<250){let m=1-Ze(110,245,o);n+=m*(Gh.fbm(i*.01,e*.01,3)*5+2)}let a=i-gi.x,l=e-gi.z,c=Math.sqrt(a*a+l*l);if(c<260){let m=Math.max(0,1-c/235);if(m>0){let p=Math.pow(m,1.5)*96;p+=uw.fbm(i*.02,e*.02,3)*7*Math.min(1,m*2.4)*Ze(16,42,c);let _=(1-Ze(20,52,c))*56;n+=Math.max(0,p-_)}}let u=i-Wh.x,h=e-Wh.z,f=Math.sqrt(u*u+h*h);if(f<180){let m=1-Ze(55,175,f),p=-10.5+Gh.fbm(i*.011,e*.011,2)*1.6;n=ye(n,p,Math.pow(m,1.15))}let d=i-Rs.x,g=e-Rs.z,x=Math.sqrt(d*d+g*g);if(x<210){let m=1-Ze(115,200,x),p=Vh+Gh.fbm(i*.008,e*.008,3)*1.1;n=ye(n,p,m)}if(e<-320&&e>-610&&Math.abs(i)<70){let m=Ze(-350,-530,e),p=1-Ze(26,62,Math.abs(i)),_=ye(4.5,Vh,m);n=ye(n,_,p*Ze(-322,-352,e))}{let m=1-Ze(60,84,Math.abs(i)),p=Ze(-500,-524,e)*(1-Ze(-644,-672,e)),_=m*p;_>0&&(n=ye(n,Vh,_))}return t>950&&(n=ye(n,-16,Ze(950,1180,t))),n}function En(i,e){let t=by(i,e);if(My)for(let n=0;n<Xh.length;n++){let s=Xh[n],r=i-s.x,o=e-s.z,a=r*r+o*o,l=s.r+16;if(a<l*l){let c=1-Ze(s.r,l,Math.sqrt(a));t=ye(t,s.h,c)}}return t}function hw(){for(let i of Xh)i.h=by(i.x,i.z);My=!0}function Xr(i,e){return Math.hypot(i-Rs.x,e-Rs.z)<205||Math.abs(i)<70&&e<-500&&e>-672?"castle":Math.hypot(i-gi.x,e-gi.z)<235?"volcano":Math.hypot(i-Wh.x,e-Wh.z)<178?"lake":Math.hypot(i-qr.x,e-qr.z)<215?"forest":Math.hypot(i-Gr.x,e-Gr.z)<95?"ruins":"plains"}function fw(i,e){let n=En(i+1.6,e)-En(i-1.6,e),s=En(i,e+1.6)-En(i,e-1.6);return Math.sqrt(n*n+s*s)/(2*1.6)}var _y=[[[0,258],[7,180],[-10,100],[-6,20],[8,-90],[2,-210],[0,-330],[0,-470],[0,-572]],[[-4,62],[84,66],[172,78]],[[-2,242],[-120,254],[-244,264],[-350,261]],[[1,4],[142,16],[292,28],[420,38]],[[1,-302],[152,-308],[302,-303],[420,-300]]];function dw(i,e,t,n,s,r){let o=s-t,a=r-n,l=Re(((i-t)*o+(e-n)*a)/(o*o+a*a),0,1),c=i-(t+o*l),u=e-(n+a*l);return Math.sqrt(c*c+u*u)}function Ey(i,e){let t=1e9;for(let n=0;n<_y.length;n++){let s=_y[n];for(let r=0;r<s.length-1;r++){let o=dw(i,e,s[r][0],s[r][1],s[r+1][0],s[r+1][1]);o<t&&(t=o)}}return t}var qh=new je,Yh=new fn,Zh=new pi,Kh=new A,Jh=new A;function $h(i){return i.computeVertexNormals(),i}function im(i,e){let t=new se(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new Rt(s,3)),i}function lr(i,e,t,n,s,r=0,o=0,a=0,l=1,c=1,u=1){let h=e.index?e.toNonIndexed():e.clone();return Zh.set(r,o,a),Yh.setFromEuler(Zh),Kh.set(t,n,s),Jh.set(l,c,u),qh.compose(Kh,Yh,Jh),h.applyMatrix4(qh),i.push(h),h}function pl(i,e,t,n,s,r,o,a,l){Zh.set(0,r,0),Yh.setFromEuler(Zh),Kh.set(t,n,s),Jh.set(o,a,l),qh.compose(Kh,Yh,Jh),i.setMatrixAt(e,qh)}var pw="assets/kenney/nature/",mw="assets/kenney/castle/";async function Sy(i,e){let t=await Promise.all(e.map(n=>Ii(i+n+".glb").then(s=>[n,s])));return Object.fromEntries(t)}function gw(){return Sy(pw,["tree_default","tree_oak","tree_detailed","tree_default_fall","tree_cone","tree_cone_dark","tree_fat_darkh","rock_largeA","rock_largeC","rock_largeE","rock_smallB","rock_smallD","rock_tallA","rock_tallC","plant_bush","plant_bushDetailed"])}function xw(){return Sy(mw,["wall","tower-square-base","tower-square-mid-windows","tower-square-roof","gate","flag-banner-long"])}function Vr(i,e=null){let t=i.scene;t.updateMatrixWorld(!0);let n=[];t.traverse(r=>{if(!r.isMesh)return;let o=r.geometry,a=o.index?o.toNonIndexed():o.clone();a.applyMatrix4(r.matrixWorld);let l=new Ut;l.setAttribute("position",a.attributes.position.clone()),im(l,e??r.material.color.getHex()),n.push(l),a.dispose()});let s=or(n);for(let r of n)r.dispose();return s}function Pc(i,e,t=null){let{size:n}=Ic(i.scene),s=e/Math.max(1e-4,n.y),r=Vr(i,t);return r.scale(s,s,s),r}function nm(i,e,t=null){let{size:n}=Ic(i.scene),s=e/Math.max(1e-4,Math.max(n.x,n.z)/2),r=Vr(i,t);return r.scale(s,s,s),r}var mi={grassA:new se(7319130),grassB:new se(6265933),grassC:new se(8370790),forest:new se(4620102),forestDeep:new se(3830341),rock:new se(9078135),rockDark:new se(7301726),volcano:new se(7027246),scorch:new se(4531740),sand:new se(13218179),bed:new se(9405544),road:new se(13480575),plaza:new se(10130045)};function yw(i){let s=new Bn(2e3,2e3,300,300);s.rotateX(-Math.PI/2);let r=s.attributes.position,o=r.count,a=new Float32Array(o);for(let x=0;x<o;x++){let m=En(r.getX(x),r.getZ(x));a[x]=m,r.setY(x,m)}let l=2e3/300,c=x=>{let m=x%301,p=x/301|0,_=a[p*301+Math.max(0,m-1)],M=a[p*301+Math.min(300,m+1)],y=a[Math.max(0,p-1)*301+m],L=a[Math.min(300,p+1)*301+m],T=(M-_)/(2*l),w=(L-y)/(2*l);return Math.sqrt(T*T+w*w)},u=new Float32Array(o*3),h=new se;for(let x=0;x<o;x++){let m=r.getX(x),p=r.getZ(x),_=a[x],M=c(x),y=yy.fbm(m*.02,p*.02,2),L=yy.noise(m*.11+50,p*.11-30);h.copy(mi.grassA),y>.12?h.lerp(mi.grassC,Ze(.12,.6,y)):y<-.12&&h.lerp(mi.grassB,Ze(-.12,-.6,y));let T=Math.hypot(m-qr.x,p-qr.z);if(T<250){let v=1-Ze(120,240,T);h.lerp(L>0?mi.forest:mi.forestDeep,v*.85)}let w=Math.hypot(m-gi.x,p-gi.z);if(w<250){let v=1-Ze(150,240,w);h.lerp(mi.volcano,v*.95),h.lerp(mi.scorch,v*Ze(28,62,_)*.85),L>.25&&v>.5&&h.lerp(mi.rockDark,.35)}if(_<As+2.4){let v=1-Ze(As+.2,As+2.4,_);h.lerp(mi.sand,v),_<As-.8&&h.lerp(mi.bed,Ze(As-.8,As-5,_))}let I=Ze(.5,.95,M);I>0&&h.lerp(w<240?mi.rockDark:mi.rock,I*.8);{let v=1-Ze(58,80,Math.abs(m)),D=Ze(-504,-524,p)*(1-Ze(-640,-668,p)),z=v*D;z>0&&h.lerp(mi.plaza,z*(.75+L*.15))}if(_>As+.3){let v=Ey(m,p);if(v<5.2){let D=1-Ze(2,4.8,v);h.lerp(mi.road,D*(.72+L*.1))}}let E=1+L*.045;u[x*3]=h.r*E,u[x*3+1]=h.g*E,u[x*3+2]=h.b*E}s.setAttribute("color",new Rt(u,3));let f=s.toNonIndexed();f.computeVertexNormals(),s.dispose();let d=tt(16777215,{vertexColors:!0}),g=new Be(f,d);return g.receiveShadow=!0,g.name="terrain",i.scene.add(g),g}var Ty={value:0};function _w(i){let e=new Bn(4800,4800,120,120);e.rotateX(-Math.PI/2);let t=tt(4165552,{transparent:!0,opacity:.72});t.onBeforeCompile=r=>{r.uniforms.uTime=Ty,r.vertexShader=`uniform float uTime;
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
                       + sin((position.x + position.z) * 0.021 + uTime * 0.45) * 0.28;`)};let n=new Be(e,t);n.position.y=As,n.name="water",i.scene.add(n);let s=new Be(new Bn(6e3,6e3,1,1),new Lt({color:1980996}));return s.rotation.x=-Math.PI/2,s.position.y=-15.5,i.scene.add(s),n}var Nc=null,Zo=null,Uc=null;function vw(i){Zo=Ci(256,(n,s)=>{n.fillStyle="#ff6a24",n.fillRect(0,0,s,s);let r=li(61870);for(let o=0;o<90;o++){let a=r()*s,l=r()*s,c=5+r()*16;n.fillStyle=`rgba(${52+r()*26|0}, ${22+r()*12|0}, 10, ${.5+r()*.35})`,n.beginPath(),n.ellipse(a,l,c,c*(.45+r()*.5),r()*Math.PI,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(255, 226, 150, 0.85)";for(let o=0;o<26;o++){n.lineWidth=1+r()*1.8,n.beginPath();let a=r()*s,l=r()*s;n.moveTo(a,l);for(let c=0;c<5;c++)a+=(r()-.5)*52,l+=(r()-.5)*52,n.lineTo(a,l);n.stroke()}}),Zo.wrapS=Zo.wrapT=as;let e=new Ur(40,40);e.rotateX(-Math.PI/2),Nc=new Lt({map:Zo,fog:!1}),Nc.color.setRGB(1.5,1.35,1.2);let t=new Be(e,Nc);return t.position.set(gi.x,xy,gi.z),t.name="lava",i.scene.add(t),Uc=new rr(16738848,900,190,1.9),Uc.position.set(gi.x,xy+14,gi.z),i.scene.add(Uc),t}function Mw(i,e){let a=Vr(e.wall,9078135),l=Vr(e["tower-square-base"],9078135),c=Vr(e["tower-square-mid-windows"],9078135),u=Vr(e["tower-square-roof"],3747919),h=Vr(e.gate,2760476),f=Vr(e["flag-banner-long"],6956864),d=[],g=[],x=[],m=[],p=[],_=[14,-14,72,-72,136,-136,180].map(N=>N*Math.PI/180),M=_.map(N=>({a:N,x:Math.sin(N)*78,z:Math.cos(N)*78})),y=[14,72,136,180,-136,-72,-14].map(N=>N*Math.PI/180),L=(N,G,O,K,X,le)=>{let me=K/.5,_e=X/(1.01*(1+le)+2.01),qe=0;g.push({x:N,y:qe,z:G,ry:O,sx:me,sy:_e,sz:me}),qe+=1.01*_e;for(let Et=0;Et<le;Et++)x.push({x:N,y:qe,z:G,ry:O,sx:me,sy:_e,sz:me}),qe+=1.01*_e;m.push({x:N,y:qe,z:G,ry:O,sx:me,sy:_e,sz:me}),p.push({x:N,y:qe+2.01*_e-.6,z:G})};for(let N of M){let G=Math.abs(N.a)<.5;L(N.x,N.z,N.a,G?5.6:7,G?26:31,1)}let T=(N,G,O,K)=>{let X=Math.hypot(O-N,K-G),le=Math.atan2(-(K-G),O-N),me=18/1.31,_e=4/1,qe=Math.max(2,Math.round(X/(me*.85)));for(let Et=0;Et<qe;Et++){let j=(Et+.5)/qe;d.push({x:ye(N,O,j),y:0,z:ye(G,K,j),ry:le,sx:X/qe,sy:me,sz:_e})}};for(let N=0;N<y.length-1;N++){let G=Math.sin(y[N])*78,O=Math.cos(y[N])*78,K=Math.sin(y[N+1])*78,X=Math.cos(y[N+1])*78;T(G,O,K,X)}L(0,-8,0,13,65,1),L(16,-2,0,6,52.5,2),L(-16,-2,0,6,52.5,2),L(0,-26,0,5,72.5,3);let w=new Pe,I=(N,G)=>{if(!G.length)return null;let O=tt(16777215,{vertexColors:!0}),K=new wi($h(N),O,G.length);for(let X=0;X<G.length;X++){let le=G[X];pl(K,X,le.x,le.y,le.z,le.ry,le.sx,le.sy,le.sz)}return K.instanceMatrix.needsUpdate=!0,K.frustumCulled=!1,K.castShadow=!0,K.receiveShadow=!0,w.add(K),K};if(I(a,d),I(l,g),I(c,x),I(u,m),p.length){let N=new il(.9,0),G=new wi(N,Ht(10114559,1.8),p.length);for(let O=0;O<p.length;O++){let K=p[O];pl(G,O,K.x,K.y,K.z,0,1,1,1)}G.instanceMatrix.needsUpdate=!0,G.frustumCulled=!1,w.add(G)}let E=tt(16777215,{vertexColors:!0}),v=new Be(h,E);v.position.set(0,0,75),v.rotation.y=Math.PI/2,v.scale.setScalar(9.5),v.castShadow=!0,w.add(v);let D=new Be(new Bn(11,13),new Lt({color:722452}));D.position.set(0,4.5,77),w.add(D);let z=tt(16777215,{vertexColors:!0,side:un});for(let N of[_[0],_[1]]){let G=Math.sin(N)*73.8,O=Math.cos(N)*(78-4.2),K=new Be(f,z);K.position.set(G,9,O),K.rotation.y=N,K.scale.setScalar(6),K.castShadow=!0,w.add(K)}w.position.set(Rs.x,Vh-.4,Rs.z),i.scene.add(w);let U=(N,G,O)=>i.colliders.push({x:Rs.x+N,z:Rs.z+G,radius:O});for(let N=0;N<y.length-1;N++){let G=Math.sin(y[N])*78,O=Math.cos(y[N])*78,K=Math.sin(y[N+1])*78,X=Math.cos(y[N+1])*78,le=Math.hypot(K-G,X-O),me=Math.max(2,Math.round(le/7));for(let _e=0;_e<=me;_e++){let qe=_e/me;U(ye(G,K,qe),ye(O,X,qe),3.6)}}for(let N of M)U(N.x,N.z,Math.abs(N.a)<.5?6.2:7.6);return U(-8.5,77,3.4),U(8.5,77,3.4),U(0,-8,17),U(0,-26,5.5),w}function bw(i){let e=li(643557),t=tt(9735030),n=[],s=(c,u,h,f,d,g)=>{let x=En(c,u),m=(g?2.4+e()*1.6:5.6)*h;lr(n,new lt(2.5,.7,2.5),c,x+.2,u,0,d,0),lr(n,new Jt(.8,.95,m,7),c,x+.55+m/2,u,f,d,f*.6),g||lr(n,new lt(2.2,.55,2.2),c,x+.55+m+.27,u,f,d,f*.6),i.colliders.push({x:c,z:u,radius:1.25})},r=(c,u,h)=>{let f=En(c,u),d=Math.cos(h)*3.2,g=-Math.sin(h)*3.2;s(c-d,u-g,1,0,h,!1),s(c+d,u+g,1,0,h,!1),lr(n,new lt(8.4,1.15,2),c,f+6.9,u,0,h,0);for(let x=0;x<3;x++){let m=c+(e()-.5)*9,p=u+(e()-.5)*9;lr(n,new lt(1+e()*1.4,.8+e()*.8,1+e()),m,En(m,p)+.3,p,e()*.5,e()*Math.PI,e()*.5)}},o=8;for(let c=0;c<o;c++){let u=c/o*Math.PI*2,h=Gr.x+Math.sin(u)*24,f=Gr.z+Math.cos(u)*24;e()<.72&&s(h,f,.9+e()*.3,(e()-.5)*.14,u,e()<.4)}r(Gr.x,Gr.z-2,.4),r(Gr.x+46,Gr.z+30,-.9);let a=[[-80,120],[110,-140],[-260,40],[60,-260],[-120,-180],[230,190]];for(let[c,u]of a)Xr(c,u)!=="plains"&&Xr(c,u)!=="ruins"||s(c+(e()-.5)*10,u+(e()-.5)*10,.8+e()*.4,(e()-.5)*.2,e()*Math.PI,e()<.55);let l=new Be($h(or(n)),t);return l.castShadow=!0,l.receiveShadow=!0,i.scene.add(l),l}function Ew(i){let e=li(199191),t=46,n=$h(new ln(1,1,6,1).toNonIndexed()),s=tt(6188408),r=new wi(n,s,t),o=new se;for(let a=0;a<t;a++){let l=a/t*Math.PI*2+e()*.12,c=1190+e()*220,u=190+e()*230,h=95+e()*105;pl(r,a,Math.sin(l)*c,-30+u/2,Math.cos(l)*c,e()*Math.PI,h,u,h),o.setHSL(.56+e()*.04,.16+e()*.1,.42+e()*.14),r.setColorAt(a,o)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),i.scene.add(r),r}var wy={value:0},Wr=null,Yo=null,dl=0,sm=0;function qo(i,e,t={}){if(En(i,e)<As+(t.minAboveWater??.6)||fw(i,e)>(t.maxSlope??.85)||Ey(i,e)<(t.roadGap??3.4)||Math.hypot(i-Rs.x,e-Rs.z)<(t.castleGap??96)||Math.abs(i)<64&&e<-512&&e>-652)return!1;for(let s of Xh)if(Math.hypot(i-s.x,e-s.z)<s.r+(t.spotGap??4))return!1;return!0}function Sw(){let i=new Ut;return i.setAttribute("position",new Rt(new Float32Array([-.09,0,0,.09,0,0,-.055,.5,.02,.055,.5,.02,0,.95,.06]),3)),i.setAttribute("normal",new Rt(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]),3)),i.setAttribute("color",new Rt(new Float32Array([.24,.45,.19,.24,.45,.19,.34,.58,.26,.34,.58,.26,.46,.71,.34]),3)),i.setAttribute("uv",new Rt(new Float32Array(10),2)),i.setIndex([0,1,2,1,3,2,2,3,4]),i}function Tw(){let i=Sw(),e=li(420437),t=[];for(let n=0;n<5;n++){let s=n/5*Math.PI*2+e()*.9,r=n===0?0:.15+e()*.38,o=.78+e()*.5;lr(t,i,Math.sin(s)*r,0,Math.cos(s)*r,(e()-.5)*.3,e()*Math.PI*2,(e()-.5)*.3,o*1.5,o*(.7+e()*.4),o*1.5)}return i.dispose(),or(t)}function ww(i){let e=li(7227989);dl=15e3;let t=tt(16777215,{vertexColors:!0,side:un});t.onBeforeCompile=o=>{o.uniforms.uTime=wy,o.vertexShader=`uniform float uTime;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float wgt = smoothstep(0.05, 1.0, position.y);
        float sway = sin(uTime * 1.7 + ip.x * 0.15 + ip.y * 0.13) * 0.55
                   + sin(uTime * 3.3 + ip.x * 0.37 - ip.y * 0.21) * 0.24;
        transformed.x += sway * wgt * 0.42;
        transformed.z += cos(uTime * 1.35 + ip.y * 0.17) * 0.5 * wgt * 0.3;
      #endif`)},Wr=new wi(Tw(),t,dl),Wr.frustumCulled=!1;let n=new se,s=0,r=0;for(;s<dl&&r++<dl*14;){let o=(e()*2-1)*970,a=(e()*2-1)*970,l=Xr(o,a),c=0;if(l==="plains"||l==="ruins"?c=.8:l==="lake"?c=.75:l==="forest"?c=.5:l==="volcano"?c=Math.hypot(o-gi.x,a-gi.z)>205?.14:0:l==="castle"&&(c=.25),c===0||e()>c||!qo(o,a,{roadGap:3,maxSlope:.95,spotGap:1}))continue;let u=.7+e()*.55;pl(Wr,s,o,En(o,a)-.04,a,e()*Math.PI*2,u,u*(.8+e()*.35),u);let h=l==="forest"?.75:1;n.setRGB((.78+e()*.22)*h,(.88+e()*.2)*h,(.72+e()*.2)*h),Wr.setColorAt(s,n),s++}dl=s,Wr.count=s,i.scene.add(Wr)}function Lc(i,e,t,{shadow:n=!0,tint:s=null}={}){if(!t.length)return null;let r=tt(16777215,{vertexColors:!0}),o=new wi($h(e),r,t.length);o.frustumCulled=!1;let a=new se;for(let l=0;l<t.length;l++){let c=t[l];pl(o,l,c.x,c.y,c.z,c.ry,c.sx,c.sy,c.sz),s&&(s(a,c),o.setColorAt(l,a))}return o.castShadow=n,i.scene.add(o),o}function Dc(i,e,t){let n=Array.from({length:e},()=>[]);for(let s of i)n[Math.floor(t()*e)%e].push(s);return n}function Aw(i,e){let t=li(133062381);ww(i);let n=[],s=[],r=[],o=[],a=[],l=[],c=(z,U)=>{for(let N=0;N<z;N++)U()};c(900,()=>{let z=t()*Math.PI*2,U=Math.sqrt(t())*200,N=qr.x+Math.sin(z)*U,G=qr.z+Math.cos(z)*U;if(!qo(N,G,{roadGap:5,maxSlope:.7}))return;let O=.85+t()*.9;(U>130&&t()<.45?s:n).push({x:N,y:En(N,G)-.15,z:G,ry:t()*Math.PI*2,sx:O,sy:O*(.9+t()*.3),sz:O}),i.colliders.push({x:N,z:G,radius:.62*O})}),c(420,()=>{let z=(t()*2-1)*940,U=(t()*2-1)*940,N=Xr(z,U);if(N!=="plains"&&N!=="lake"&&N!=="ruins"||t()>(N==="lake"?.5:.28)||!qo(z,U,{roadGap:6,maxSlope:.6}))return;let G=.8+t()*.85;(U<-150&&t()<.5||t()<.18?s:n).push({x:z,y:En(z,U)-.15,z:U,ry:t()*Math.PI*2,sx:G,sy:G*(.9+t()*.3),sz:G}),i.colliders.push({x:z,z:U,radius:.62*G})}),c(240,()=>{let z=t()*Math.PI*2,U=115+t()*105,N=gi.x+Math.sin(z)*U,G=gi.z+Math.cos(z)*U;if(!qo(N,G,{roadGap:4,maxSlope:1.15})||t()>.45)return;let O=.8+t()*.8;r.push({x:N,y:En(N,G)-.1,z:G,ry:t()*Math.PI*2,sx:O,sy:O,sz:O}),i.colliders.push({x:N,z:G,radius:.45*O})}),c(760,()=>{let z=(t()*2-1)*960,U=(t()*2-1)*960,N=Xr(z,U),G=N==="volcano"?.75:N==="plains"?.16:N==="forest"?.14:N==="lake"?.2:0;if(t()>G||!qo(z,U,{roadGap:4.5,maxSlope:1.5,minAboveWater:-.5}))return;let O=.7+t()*2.1,K=.55+t()*1.6,X=.7+t()*2.1;o.push({x:z,y:En(z,U)-K*.35,z:U,ry:t()*Math.PI*2,sx:O,sy:K,sz:X,v:N==="volcano"});let le=Math.max(O,X)*.85;le>1&&i.colliders.push({x:z,z:U,radius:le})}),c(520,()=>{let z=(t()*2-1)*940,U=(t()*2-1)*940,N=Xr(z,U),G=N==="forest"?.55:N==="plains"||N==="ruins"?.3:N==="lake"?.35:0;if(t()>G||!qo(z,U,{roadGap:4,maxSlope:.7}))return;let O=.55+t()*.9;a.push({x:z,y:En(z,U)+O*.25,z:U,ry:t()*Math.PI*2,sx:O,sy:O*.62,sz:O})}),c(2600,()=>{let z=(t()*2-1)*940,U=(t()*2-1)*940,N=Xr(z,U),G=N==="plains"||N==="ruins"?.62:N==="lake"?.55:N==="forest"?.12:0;if(t()>G||!qo(z,U,{roadGap:3.2,maxSlope:.6,spotGap:1}))return;let O=.75+t()*.7;l.push({x:z,y:En(z,U),z:U,ry:t()*Math.PI*2,sx:O,sy:O,sz:O,k:t()*4|0})});let u=["tree_default","tree_oak","tree_detailed","tree_default_fall"],h=[5.2,5,5.3,5.2].map((z,U)=>Pc(e[u[U]],z)),f=(z,U)=>z.setRGB(.85+(U.x*13.7%1+1)%1*.3,.9+(U.z*7.3%1+1)%1*.2,.85);Dc(n,h.length,t).forEach((z,U)=>Lc(i,h[U],z,{tint:f}));let d=[Pc(e.tree_cone,5.4),Pc(e.tree_cone_dark,5.4)],g=(z,U)=>z.setRGB(.9,.9+(U.x*5.1%1+1)%1*.2,.9);Dc(s,d.length,t).forEach((z,U)=>Lc(i,d[U],z,{tint:g}));let x=[Pc(e.tree_fat_darkh,4.2),Pc(e.rock_tallC,3)],m=z=>z.multiplyScalar(.68+z.r*97%1*.12);Dc(r,x.length,t).forEach((z,U)=>Lc(i,x[U],z,{tint:m}));let _=["rock_largeA","rock_largeC","rock_largeE","rock_smallB","rock_smallD","rock_tallA"].map(z=>nm(e[z],1)),M=(z,U)=>{let N=.85+((U.x*3.3+U.z*1.7)%1+1)%1*.3;z.multiplyScalar(N),U.v&&z.multiplyScalar(.6)};Dc(o,_.length,t).forEach((z,U)=>Lc(i,_[U],z,{tint:M}));let y=[nm(e.plant_bush,1),nm(e.plant_bushDetailed,1)],L=(z,U)=>z.multiplyScalar(.8+(U.z*9.1%1+1)%1*.4);Dc(a,y.length,t).forEach((z,U)=>Lc(i,y[U],z,{tint:L}));let T=[],w=im(new Bn(.3,.3),16777215);lr(T,w,0,.36,0,-Math.PI/2.4,0,0),lr(T,w,0,.36,0,-Math.PI/2.4,Math.PI/2,0),lr(T,im(new Bn(.05,.4),4160053),0,.18,0);let I=or(T),E=tt(16777215,{vertexColors:!0,side:un});sm=l.length,Yo=new wi(I,E,sm),Yo.frustumCulled=!1;let v=new se,D=[15921380,16766814,15239864,10336511];for(let z=0;z<l.length;z++){let U=l[z];pl(Yo,z,U.x,U.y,U.z,U.ry,U.sx,U.sy,U.sz),v.set(D[U.k]),Yo.setColorAt(z,v)}i.scene.add(Yo)}function vy(i){let e=Re(i?.grassMul??1,.05,1);Wr&&(Wr.count=Math.max(200,Math.floor(dl*e))),Yo&&(Yo.count=Math.max(80,Math.floor(sm*(.4+e*.6))))}async function Rw(i){hw();let e=gw(),t=xw();yw(i),_w(i),vw(i),Mw(i,await t),bw(i),Ew(i),Aw(i,await e),i.world={getHeight:En,getBiome:Xr,waterLevel:As,castleGatePos:new A(0,En(0,-560),-560),startPos:new A(0,En(0,250),250)},i.getGroundHeight=En,vy(i.quality),i.on("quality-changed",n=>vy(n))}function Cw(i,e){if(Ty.value+=e,wy.value+=e,Zo&&(Zo.offset.x+=e*.009,Zo.offset.y+=e*.006),Nc){let t=i.time.elapsed,n=1.28+Math.sin(t*2.1)*.16+Math.sin(t*5.3)*.07;Nc.color.setRGB(n*1.22,n*1.02,n*.88)}Uc&&(Uc.intensity=850+Math.sin(i.time.elapsed*2.7)*230)}var kc={};bs(kc,{init:()=>Nw,update:()=>Uw});var Iw=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Pw=`
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
`,Pn=i=>new se(i);function xi(i,e,t,n,s,r,o,a,l,c,u,h,f,d){return{p:i,top:Pn(e),mid:Pn(t),hor:Pn(n),sun:Pn(s),glow:r,light:Pn(o),lightInt:a,hemiS:Pn(l),hemiG:Pn(c),hemiInt:u,cloud:Pn(h),fogN:f,fogF:d}}var jh=[xi(0,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150),xi(.035,5068176,13664125,16761968,16768164,1.5,16760968,1.5,10917294,5523518,.62,16764836,150,1250),xi(.085,5011640,9681112,15782560,16771264,1,16767400,1.8,11455720,5924432,.78,16769228,180,1350),xi(.14,4556498,8570088,14478828,16773846,.65,16772552,2.1,12903158,6714972,.9,16514558,220,1500),xi(.25,4029906,8308968,14348018,16775400,.5,16773848,2.3,13625850,7109728,.95,16186108,260,1600),xi(.4,4685764,9355998,15327170,16772811,.7,16769970,2,13033456,6844506,.85,16643040,210,1450),xi(.47,5790356,12614242,16755540,16764808,1.4,16758129,1.5,11044496,5129272,.6,16762010,160,1300),xi(.5,5453166,12737364,16747078,16756838,1.9,16751192,1,9200264,4536882,.45,15767420,145,1200),xi(.545,2302034,5321310,10112592,16750688,1,12619904,.5,5260910,2630704,.32,6966364,115,1050),xi(.6,791088,1581642,2898528,16756848,.35,11454190,.4,2898526,1448998,.3,2897490,95,980),xi(.75,461860,1055290,2109518,16756848,.25,12440566,.5,2569818,1251876,.3,2436680,90,950),xi(.9,659498,1318466,2503252,16756848,.3,11716846,.42,2766424,1383205,.29,2699856,95,980),xi(.955,1843528,3945056,7226976,16763024,.8,13605508,.5,5787250,2762032,.34,5784664,110,1050),xi(1,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150)],Fe={top:new se,mid:new se,hor:new se,sun:new se,light:new se,hemiS:new se,hemiG:new se,cloud:new se,glow:0,lightInt:0,hemiInt:0,fogN:100,fogF:1e3};function Lw(i){let e=i-Math.floor(i),t=0;for(;t<jh.length-2&&jh[t+1].p<=e;)t++;let n=jh[t],s=jh[t+1],r=Ze(n.p,s.p,e);Fe.top.lerpColors(n.top,s.top,r),Fe.mid.lerpColors(n.mid,s.mid,r),Fe.hor.lerpColors(n.hor,s.hor,r),Fe.sun.lerpColors(n.sun,s.sun,r),Fe.light.lerpColors(n.light,s.light,r),Fe.hemiS.lerpColors(n.hemiS,s.hemiS,r),Fe.hemiG.lerpColors(n.hemiG,s.hemiG,r),Fe.cloud.lerpColors(n.cloud,s.cloud,r),Fe.glow=ye(n.glow,s.glow,r),Fe.lightInt=ye(n.lightInt,s.lightInt,r),Fe.hemiInt=ye(n.hemiInt,s.hemiInt,r),Fe.fogN=ye(n.fogN,s.fogN,r),Fe.fogF=ye(n.fogF,s.fogF,r)}var hs={top:Pn(1443593),mid:Pn(3805459),hor:Pn(6168342),light:Pn(16740432),lightInt:.6,hemiS:Pn(5776686),hemiG:Pn(1510414),hemiInt:.34,cloud:Pn(3675159),fogN:26,fogF:330},Zi={fog:Pn(660503),light:Pn(8839894),lightInt:.42,hemiS:Pn(3116936),hemiG:Pn(860452),hemiInt:.55,fogN:620,fogF:3200,dir:new A(.3,1,.22).normalize()},Oc=46,Zr,Ki,fs,am,Ko,lm,Vn,Bc,ml,cm,um=null,dn=0,yn=0,Qh=0,rm=4,Ay=0,Ry=0,cr=li(659918),Fc=new A,om=new A,Yr=new A;function Dw(i){let e=[[0,.1,0,1.7,1,1.25],[1.55,.05,.35,1.05,.72,.9],[-1.5,0,-.25,1.15,.8,1],[.55,.55,-.7,.85,.6,.8],[-.65,.5,.65,.7,.52,.72]],t=[];for(let[c,u,h,f,d,g]of e){let x=new il(1,1);x.scale(f,d,g),x.translate(c,u,h),t.push(x)}let n=null;try{n=or(t)}catch{n=null}n||(n=t[0]),n.computeVertexNormals(),am=tt(16186108),fs=new wi(n,am,Oc),fs.instanceMatrix.setUsage(cs),fs.castShadow=!1,fs.receiveShadow=!1,fs.frustumCulled=!1,Ko=new Float32Array(Oc*3),lm=new Float32Array(Oc);let s=new je,r=new fn,o=new A,a=new A,l=new A(0,1,0);for(let c=0;c<Oc;c++){let u=(cr()-.5)*2600,h=(cr()-.5)*2600,f=135+cr()*110;Ko[c*3]=u,Ko[c*3+1]=f,Ko[c*3+2]=h,lm[c]=.6+cr()*.8;let d=9+cr()*17;r.setFromAxisAngle(l,cr()*Math.PI*2),o.set(d*(.8+cr()*.6),d*.55,d),s.compose(a.set(u,f,h),r,o),fs.setMatrixAt(c,s)}i.add(fs)}async function Nw(i){let e=i.scene,t=new xn(1800,48,24),n=new Kt({uniforms:{uTop:{value:new se(4029906)},uMid:{value:new se(8308968)},uHor:{value:new se(14348018)},uSunDir:{value:new A(.8,.4,.3).normalize()},uMoonDir:{value:new A(-.8,-.4,-.3).normalize()},uSunCol:{value:new se(16775400)},uGlow:{value:.6},uNight:{value:0},uTime:{value:0},uFlash:{value:0},uSunI:{value:1}},vertexShader:Iw,fragmentShader:Pw,side:Rn,depthWrite:!1,fog:!1});Zr=new Be(t,n),Zr.frustumCulled=!1,Zr.renderOrder=-100,Ki=n.uniforms,e.add(Zr),Dw(e),Vn=new cl(16773848,2.3),Vn.castShadow=!0;let s=i.quality&&i.quality.shadowMapSize||1024;Vn.shadow.mapSize.set(s,s);let r=Vn.shadow.camera;r.left=-60,r.right=60,r.top=60,r.bottom=-60,r.near=20,r.far=420,r.updateProjectionMatrix(),Vn.shadow.bias=-35e-5,Vn.shadow.normalBias=.7,e.add(Vn,Vn.target),Bc=new Ih(13625850,7109728,.95),e.add(Bc),ml=new uh(14348018,260,1600),e.fog=ml,cm=new se(14348018),e.background=cm,i.on("quality-changed",o=>{let a=o&&o.shadowMapSize||i.quality&&i.quality.shadowMapSize||1024;Vn.shadow.map&&(Vn.shadow.map.dispose(),Vn.shadow.map=null),Vn.shadow.mapSize.set(a,a)}),i.sky={sunDir:new A(.9,.3,.3).normalize(),sunLight:Vn,setOverride(o){um=o==="shrine"||o==="boss"?o:null}}}function Uw(i,e){if(!Zr)return;let t=i.time.dayPhase,n=i.time.elapsed,s=i.player&&i.player.position||i.camera.position,r=i.quality&&i.quality.drawDist||1,o=t*Math.PI*2;Fc.set(Math.cos(o),Math.sin(o),.34).normalize(),om.set(-Math.cos(o)*.92,-Math.sin(o),-.42).normalize();let a=Fc.y,l=1-Ze(-.16,-.02,a),c=Ze(-.12,.02,a);dn=ze(dn,um==="shrine"?1:0,4,e),yn=ze(yn,um==="boss"?1:0,2.5,e),dn<.001&&(dn=0),yn<.001&&(yn=0),yn>.4&&(rm-=e,rm<=0&&(Qh=.55+cr()*.45,rm=2.8+cr()*5.5)),Qh=Math.max(0,Qh-e*3.2);let u=Qh*yn;if(Lw(t),yn>0&&(Fe.top.lerp(hs.top,yn),Fe.mid.lerp(hs.mid,yn),Fe.hor.lerp(hs.hor,yn),Fe.light.lerp(hs.light,yn),Fe.hemiS.lerp(hs.hemiS,yn),Fe.hemiG.lerp(hs.hemiG,yn),Fe.cloud.lerp(hs.cloud,yn),Fe.glow=ye(Fe.glow,0,yn),Fe.lightInt=ye(Fe.lightInt,hs.lightInt,yn),Fe.hemiInt=ye(Fe.hemiInt,hs.hemiInt,yn),Fe.fogN=ye(Fe.fogN,hs.fogN,yn),Fe.fogF=ye(Fe.fogF,hs.fogF,yn)),dn>0&&(Fe.top.lerp(Zi.fog,dn),Fe.mid.lerp(Zi.fog,dn),Fe.hor.lerp(Zi.fog,dn),Fe.light.lerp(Zi.light,dn),Fe.hemiS.lerp(Zi.hemiS,dn),Fe.hemiG.lerp(Zi.hemiG,dn),Fe.cloud.lerp(Zi.fog,dn),Fe.glow=ye(Fe.glow,0,dn),Fe.lightInt=ye(Fe.lightInt,Zi.lightInt,dn),Fe.hemiInt=ye(Fe.hemiInt,Zi.hemiInt,dn),Fe.fogN=ye(Fe.fogN,Zi.fogN,dn),Fe.fogF=ye(Fe.fogF,Zi.fogF,dn)),ml.color.copy(Fe.hor),ml.near=Fe.fogN*r,ml.far=Math.max(Fe.fogF*r,ml.near+120),cm.copy(Fe.hor),Zr.visible=dn<.98,Zr.visible&&(Zr.position.copy(s),Ki.uTop.value.copy(Fe.top),Ki.uMid.value.copy(Fe.mid),Ki.uHor.value.copy(Fe.hor),Ki.uSunDir.value.copy(Fc),Ki.uMoonDir.value.copy(om),Ki.uSunCol.value.copy(Fe.sun),Ki.uGlow.value=Fe.glow,Ki.uSunI.value=(1-yn)*(1-dn),Ki.uNight.value=l*(1-yn)*(1-dn),Ki.uTime.value=n,Ki.uFlash.value=u),Yr.copy(Fc).multiplyScalar(c).addScaledVector(om,1-c),dn>0&&Yr.lerp(Zi.dir,dn),Yr.lengthSq()<.05&&Yr.set(.2,1,.1),Yr.y=Math.max(Yr.y,.08),Yr.normalize(),Vn.position.copy(s).addScaledVector(Yr,170),Vn.target.position.copy(s),Vn.color.copy(Fe.light),Vn.intensity=Fe.lightInt+u*1.2,Bc.color.copy(Fe.hemiS),Bc.groundColor.copy(Fe.hemiG),Bc.intensity=Fe.hemiInt+u*.35,fs.visible=dn<.98,fs.visible){Ay+=e*2.4,Ry+=e*.7;let h=fs.instanceMatrix.array;for(let f=0;f<Oc;f++){let d=lm[f],g=Ko[f*3]+Ay*d,x=Ko[f*3+2]+Ry*d;h[f*16+12]=((g+1300)%2600+2600)%2600-1300,h[f*16+13]=Ko[f*3+1]+Math.sin(n*.08+f*2.1)*4,h[f*16+14]=((x+1300)%2600+2600)%2600-1300}fs.instanceMatrix.needsUpdate=!0,am.color.copy(Fe.cloud)}i.sky.sunDir.copy(Fc)}var Vc={};bs(Vc,{init:()=>n2,update:()=>i2});var ef={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zw=new Dr(-1,1,1,-1,0,1),hm=class extends Ut{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},Fw=new hm,Kr=class{constructor(e){this._mesh=new Be(Fw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gl=class extends Li{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kr.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hc=class extends Li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},tf=class extends Li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var nf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new $);this._width=n.width,this._height=n.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gl(ef),this.copyPass.material.blending=Ts,this.clock=new ul}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hc!==void 0&&(o instanceof Hc?n=!0:o instanceof tf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sf=class extends Li{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Cy={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var xl=class i extends Li{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(r,o,{type:Ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Hn(r,o,{type:Ri});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Hn(r,o,{type:Ri});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Cy;this.highPassUniforms=kr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ef;this.copyUniforms=kr.clone(u.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new Kr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};xl.BlurDirectionX=new $(1,0);xl.BlurDirectionY=new $(0,1);var Iy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var rf=class extends Li{constructor(){super();let e=Iy;this.uniforms=kr.clone(e.uniforms),this.material=new wh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Kr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===n0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===i0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===s0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===r0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===o0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ni=null,Wn=null,Py=null,vl=null,_n=null,jr=null,$o=null,Jo=new $,_l=new se,cn=Math.random,Z=(i,e)=>i+cn()*(e-i),Ow={name:"ArdiaGradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new $(1280,720)},uVignette:{value:.3},uSaturation:{value:1.055},uContrast:{value:.1},uGrain:{value:.014}},vertexShader:`
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
    }`},Bw=`
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
  }`,kw=`
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
  }`;function Hw(){return Ci(64,(i,e)=>{let t=e/2,n=i.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.85)"),n.addColorStop(.6,"rgba(255,255,255,0.28)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)})}function Gw(){return Ci(128,(i,e)=>{let t=li(3599),n=e/2;for(let r=0;r<9;r++){let o=t()*Math.PI*2,a=t()*e*.16,l=n+Math.cos(o)*a,c=n+Math.sin(o)*a,u=e*(.16+t()*.16),h=i.createRadialGradient(l,c,0,l,c,u);h.addColorStop(0,"rgba(255,255,255,0.30)"),h.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=h,i.beginPath(),i.arc(l,c,u,0,Math.PI*2),i.fill()}i.globalCompositeOperation="destination-in";let s=i.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.65,"rgba(255,255,255,0.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,e)})}function Vw(){return Ci(64,(i,e)=>{let t=e/2;i.translate(t,t);let n=i.createLinearGradient(0,-24,0,24);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(185,185,185,1)"),i.fillStyle=n,i.beginPath(),i.moveTo(0,-23),i.bezierCurveTo(11,-13,12,8,0,23),i.bezierCurveTo(-12,8,-11,-13,0,-23),i.closePath(),i.fill(),i.strokeStyle="rgba(130,130,130,0.55)",i.lineWidth=1.6,i.beginPath(),i.moveTo(0,-19),i.lineTo(0,19),i.stroke()})}var yl=17,R={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:1,size:.1,r:1,g:1,b:1,alpha:1,grav:0,drag:0,flut:0,spin:0,swirl:0,grow:0,fadeIn:.02,fadeOut:-1,pulse:0,rot:0};function pn(i,e,t){R.x=i,R.y=e,R.z=t,R.vx=R.vy=R.vz=0,R.life=1,R.size=.1,R.r=R.g=R.b=1,R.alpha=1,R.grav=0,R.drag=0,R.flut=0,R.spin=0,R.swirl=0,R.grow=0,R.fadeIn=.02,R.fadeOut=-1,R.pulse=0,R.rot=0}var Gc=class{constructor(e,t,n,s){this.cap=e,this.count=0,this._last=0,this.data=new Float32Array(e*yl);let r=new Ut;this.aPos=new Rt(new Float32Array(e*3),3).setUsage(cs),this.aCol=new Rt(new Float32Array(e*3),3).setUsage(cs),this.aSiz=new Rt(new Float32Array(e),1).setUsage(cs),this.aAlp=new Rt(new Float32Array(e),1).setUsage(cs),this.aRot=new Rt(new Float32Array(e),1).setUsage(cs),r.setAttribute("position",this.aPos),r.setAttribute("aColor",this.aCol),r.setAttribute("aSize",this.aSiz),r.setAttribute("aAlpha",this.aAlp),r.setAttribute("aRot",this.aRot),r.setDrawRange(0,0),this.geo=r,this.mat=new Kt({uniforms:{uMap:{value:t},uScale:{value:600}},vertexShader:Bw,fragmentShader:kw,blending:n,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1}),this.points=new Nr(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,this.points.matrixAutoUpdate=!1}spawn(){if(this.count>=this.cap)return;let e=this.count++,t=e*3,n=this.aPos.array,s=this.aCol.array;n[t]=R.x,n[t+1]=R.y,n[t+2]=R.z,s[t]=R.r,s[t+1]=R.g,s[t+2]=R.b,this.aSiz.array[e]=R.size,this.aAlp.array[e]=R.fadeIn>0?0:R.alpha,this.aRot.array[e]=R.rot;let r=e*yl,o=this.data;o[r]=R.vx,o[r+1]=R.vy,o[r+2]=R.vz,o[r+3]=0,o[r+4]=Math.max(.05,R.life),o[r+5]=R.size,o[r+6]=R.alpha,o[r+7]=R.grav,o[r+8]=R.drag,o[r+9]=R.flut,o[r+10]=R.spin,o[r+11]=R.swirl,o[r+12]=R.grow,o[r+13]=R.fadeIn,o[r+14]=R.fadeOut>=0?R.fadeOut:R.life*.35,o[r+15]=R.pulse,o[r+16]=cn()*6.2831}_copy(e,t){let n=e*3,s=t*3,r=this.aPos.array,o=this.aCol.array;r[s]=r[n],r[s+1]=r[n+1],r[s+2]=r[n+2],o[s]=o[n],o[s+1]=o[n+1],o[s+2]=o[n+2],this.aSiz.array[t]=this.aSiz.array[e],this.aAlp.array[t]=this.aAlp.array[e],this.aRot.array[t]=this.aRot.array[e];let a=e*yl,l=t*yl,c=this.data;for(let u=0;u<yl;u++)c[l+u]=c[a+u]}update(e,t){let n=this.aPos.array,s=this.aSiz.array,r=this.aAlp.array,o=this.aRot.array,a=this.data,l=0;for(;l<this.count;){let c=l*yl,u=a[c+4],h=a[c+3]+e;if(h>=u){this.count--,l!==this.count&&this._copy(this.count,l);continue}a[c+3]=h;let f=a[c],d=a[c+1],g=a[c+2];d-=a[c+7]*e;let x=a[c+8];if(x>0){let z=Math.max(0,1-x*e);f*=z,d*=z,g*=z}let m=a[c+11];if(m!==0){let z=m*e,U=Math.cos(z),N=Math.sin(z),G=f*U-g*N;g=f*N+g*U,f=G}a[c]=f,a[c+1]=d,a[c+2]=g;let p=l*3,_=n[p]+f*e,M=n[p+1]+d*e,y=n[p+2]+g*e,L=a[c+9];if(L>0){let z=a[c+16];_+=Math.cos(t*1.7+z)*L*e,y+=Math.sin(t*1.3+z*1.71)*L*e,M+=Math.sin(t*2.1+z*2.3)*L*.4*e}n[p]=_,n[p+1]=M,n[p+2]=y,o[l]+=a[c+10]*e;let T=h/u;s[l]=a[c+5]*(1+a[c+12]*T);let w=a[c+6],I=a[c+13];I>0&&h<I&&(w*=h/I);let E=u-h,v=a[c+14];E<v&&v>0&&(w*=E/v);let D=a[c+15];D>0&&(w*=.55+.45*Math.sin(t*D+a[c+16]*3)),r[l]=w,l++}this.geo.setDrawRange(0,this.count),(this.count>0||this._last>0)&&(this._flag(this.aPos,3),this._flag(this.aCol,3),this._flag(this.aSiz,1),this._flag(this.aAlp,1),this._flag(this.aRot,1)),this._last=this.count}_flag(e,t){e.needsUpdate=!0,e.clearUpdateRanges&&(e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(this.count,1)*t))}};function Ji(i,e){let t=ni&&ni.quality.particleMul||1;return Math.max(1,Math.round((i.count!=null?i.count:e)*t))}function yi(i,e,t,n){return i&&i.color!=null?_l.set(i.color):_l.setRGB(e,t,n),_l}function _i(i,e){let t=Z(i,e);R.r=_l.r*t,R.g=_l.g*t,R.b=_l.b*t}var Ly={hit(i,e,t,n,s){pn(i,e,t),yi(n,1.15,1.1,.92),_i(.95,1),R.size=1*s,R.life=.15,R.alpha=.65,R.grow=1.6,R.fadeIn=0,R.fadeOut=.12,_n.spawn();let r=Ji(n,20);for(let o=0;o<r;o++){pn(i,e,t);let a=cn()*Math.PI*2,l=(cn()-.35)*1.5,c=Z(3.2,8)*s;if(R.vx=Math.cos(a)*Math.cos(l)*c,R.vy=Math.sin(l)*c*.8+1.2,R.vz=Math.sin(a)*Math.cos(l)*c,R.grav=16,R.drag=1.2,R.life=Z(.22,.5),R.size=Z(.05,.11)*s,n&&n.color!=null)yi(n,1,1,1),_i(.85,1.1);else{let u=cn();R.r=1.1,R.g=1.05-.28*u,R.b=.92-.55*u}R.fadeIn=0,R.fadeOut=.12,_n.spawn()}},spark(i,e,t,n,s){let r=Ji(n,12);yi(n,1.05,.8,.38);for(let o=0;o<r;o++){pn(i,e,t),_i(.8,1.1);let a=cn()*Math.PI*2,l=Z(1.6,4.4)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(.8,3)*s,R.grav=10,R.drag=1,R.life=Z(.3,.65),R.size=Z(.04,.09)*s,R.fadeIn=0,R.fadeOut=.15,_n.spawn()}},death(i,e,t,n,s){let r=Ji(n,12);for(let a=0;a<r;a++){pn(i+Z(-.4,.4)*s,e+Z(0,.7)*s,t+Z(-.4,.4)*s);let l=Z(.75,1.25);R.r=.13*l,R.g=.08*l,R.b=.2*l;let c=cn()*Math.PI*2,u=Z(.1,.7);R.vx=Math.cos(c)*u,R.vz=Math.sin(c)*u,R.vy=Z(.4,1.1),R.drag=1.8,R.spin=Z(-1.2,1.2),R.life=Z(1,1.9),R.size=Z(.5,.9)*s,R.alpha=Z(.4,.58),R.grow=1.6,R.fadeIn=.06,jr.spawn()}let o=Ji(n,14);yi(n,.5,.2,1);for(let a=0;a<o;a++){pn(i+Z(-.5,.5)*s,e+Z(.1,.9)*s,t+Z(-.5,.5)*s),_i(.75,1.1);let l=cn()*Math.PI*2,c=Z(.2,.8);R.vx=Math.cos(l)*c,R.vz=Math.sin(l)*c,R.vy=Z(.7,1.9),R.swirl=Z(1.5,3.5)*(cn()<.5?-1:1),R.flut=.5,R.drag=.3,R.life=Z(.9,1.8),R.size=Z(.05,.11)*s,R.fadeIn=.1,_n.spawn()}},grass(i,e,t,n,s){let r=Ji(n,10);for(let o=0;o<r;o++){pn(i+Z(-.3,.3),e+Z(0,.3),t+Z(-.3,.3)),n&&n.color!=null?(yi(n,1,1,1),_i(.8,1.1)):(R.r=Z(.12,.24),R.g=Z(.3,.48),R.b=Z(.06,.14));let a=cn()*Math.PI*2,l=Z(.8,2.6)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(1.2,3.2)*s,R.grav=7,R.drag=.8,R.flut=1.2,R.rot=cn()*6.28,R.spin=Z(-8,8),R.life=Z(.7,1.4),R.size=Z(.11,.19)*s,R.fadeIn=0,R.fadeOut=.2,$o.spawn()}},dust(i,e,t,n,s){let r=Ji(n,9);yi(n,.58,.52,.42);for(let o=0;o<r;o++){pn(i+Z(-.3,.3)*s,e+Z(0,.25),t+Z(-.3,.3)*s),_i(.85,1.15);let a=cn()*Math.PI*2,l=Z(.4,1.4)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(.2,.7),R.drag=2.2,R.spin=Z(-.8,.8),R.life=Z(.6,1.2),R.size=Z(.3,.6)*s,R.alpha=Z(.2,.33),R.grow=1.8,R.fadeIn=.05,jr.spawn()}},heal(i,e,t,n,s){let r=Ji(n,14);yi(n,1,.4,.58);for(let o=0;o<r;o++){let a=cn()*Math.PI*2,l=Z(.15,.85)*s;pn(i+Math.cos(a)*l,e+Z(0,.6),t+Math.sin(a)*l),_i(.85,1.05),R.vy=Z(.5,1.2),R.flut=.4,R.pulse=Z(2,4),R.life=Z(1.3,2.2),R.size=Z(.06,.12)*s,R.alpha=.85,R.fadeIn=.25,_n.spawn()}},orb(i,e,t,n,s){let r=Ji(n,18);yi(n,.1,.85,.8);for(let o=0;o<r;o++){let a=cn()*Math.PI*2,l=Z(.25,.8)*s;pn(i+Math.cos(a)*l,e+Z(0,.5),t+Math.sin(a)*l),_i(.8,1.05);let c=Z(1.2,2.2)*s;R.vx=-Math.sin(a)*c,R.vz=Math.cos(a)*c,R.vy=Z(1,2.2),R.swirl=3,R.drag=.3,R.life=Z(1.1,1.9),R.size=Z(.06,.12)*s,R.fadeIn=.12,_n.spawn()}},fire(i,e,t,n,s){for(let o=0;o<2;o++)pn(i+Z(-.2,.2),e+Z(0,.3),t+Z(-.2,.2)),yi(n,1,.42,.14),_i(.85,1),R.size=Z(.4,.6)*s,R.life=Z(.2,.35),R.alpha=.35,R.grow=1.4,R.fadeIn=0,_n.spawn();let r=Ji(n,15);for(let o=0;o<r;o++){if(pn(i+Z(-.25,.25)*s,e+Z(0,.3),t+Z(-.25,.25)*s),n&&n.color!=null)yi(n,1,1,1),_i(.85,1.1);else{let c=cn();R.r=1.15,R.g=.32+.28*c,R.b=.06+.1*c}let a=cn()*Math.PI*2,l=Z(.6,2.4)*s;R.vx=Math.cos(a)*l,R.vz=Math.sin(a)*l,R.vy=Z(1.8,4.5)*s,R.grav=3.5,R.drag=.7,R.flut=.8,R.life=Z(.5,1.1),R.size=Z(.045,.1)*s,R.fadeIn=0,R.fadeOut=.18,_n.spawn()}},magic(i,e,t,n,s){pn(i,e,t),yi(n,.55,.26,1.1),_i(.9,1),R.size=.85*s,R.life=.16,R.alpha=.5,R.grow=1.5,R.fadeIn=0,R.fadeOut=.13,_n.spawn();let r=Ji(n,16);yi(n,.46,.16,1.05);for(let o=0;o<r;o++){pn(i,e,t),_i(.8,1.1);let a=cn()*Math.PI*2,l=(cn()-.5)*2.4,c=Z(1.8,4.5)*s;R.vx=Math.cos(a)*Math.cos(l)*c,R.vy=Math.sin(l)*c*.7+.8,R.vz=Math.sin(a)*Math.cos(l)*c,R.swirl=Z(-3,3),R.drag=2.4,R.life=Z(.5,1),R.size=Z(.05,.13)*s,R.fadeIn=0,R.fadeOut=.2,_n.spawn()}},leaf(i,e,t,n,s){let r=Ji(n,7);for(let o=0;o<r;o++){if(pn(i+Z(-1.2,1.2)*s,e+Z(0,1.5)*s,t+Z(-1.2,1.2)*s),n&&n.color!=null)yi(n,1,1,1),_i(.8,1.1);else{let a=cn();R.r=.14+.18*a,R.g=Z(.32,.5),R.b=.07+.09*a}R.vx=Z(-.3,.3),R.vz=Z(-.3,.3),R.vy=Z(-.5,-.2),R.grav=.9,R.drag=.6,R.flut=1.6,R.rot=cn()*6.28,R.spin=Z(-4,4),R.life=Z(2.5,4.5),R.size=Z(.12,.2)*s,R.fadeIn=.2,R.fadeOut=.5,$o.spawn()}},firefly(i,e,t,n,s){let r=Ji(n,5);yi(n,.72,.95,.38);for(let o=0;o<r;o++)pn(i+Z(-1.5,1.5)*s,e+Z(.2,1.8)*s,t+Z(-1.5,1.5)*s),_i(.75,1),R.vx=Z(-.15,.15),R.vy=Z(-.05,.15),R.vz=Z(-.15,.15),R.flut=.7,R.life=Z(4,7),R.size=Z(.05,.08)*s,R.alpha=.9,R.pulse=Z(1.5,3),R.fadeIn=.8,R.fadeOut=1.2,_n.spawn()}},Jr="plains",fm=0,dm={firefly:0,leaf:0,ember:0,heat:0,glint:0,fluff:0,rune:0,mote:0},Xn=0,qn=0;function Qr(i,e,t){let n=cn()*Math.PI*2,s=Z(e,t);Xn=i.x+Math.cos(n)*s,qn=i.z+Math.sin(n)*s}function Ww(i,e){Qr(e,1,7);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(.2,1.8),qn),R.r=.2,R.g=.82,R.b=.72,R.vy=Z(.25,.6),R.flut=.25,R.life=Z(2.5,4),R.size=Z(.04,.09),R.alpha=.85,R.pulse=2.5,R.fadeIn=.5,R.fadeOut=.8,_n.spawn()}function Xw(i,e){Qr(e,4,26);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(.4,2.2),qn);let n=Z(.7,1);R.r=.72*n,R.g=.95*n,R.b=.36*n,R.vx=Z(-.15,.15),R.vy=Z(-.05,.12),R.vz=Z(-.15,.15),R.flut=.7,R.life=Z(5,9),R.size=Z(.06,.1),R.alpha=1,R.pulse=Z(1.4,2.8),R.fadeIn=1,R.fadeOut=1.4,_n.spawn()}function qw(i,e){Qr(e,3,24);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(3,8),qn);let n=cn();R.r=.14+.18*n,R.g=Z(.3,.5),R.b=.07+.09*n,R.vx=Z(-.3,.3),R.vy=Z(-.55,-.25),R.vz=Z(-.3,.3),R.grav=.9,R.drag=.6,R.flut=1.6,R.rot=cn()*6.28,R.spin=Z(-4,4),R.life=Z(4,7),R.size=Z(.11,.19),R.fadeIn=.4,R.fadeOut=.6,$o.spawn()}function Yw(i,e){Qr(e,3,26);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(0,1),qn);let n=cn();R.r=1.15,R.g=.35+.3*n,R.b=.07+.1*n,R.vy=Z(.8,2.2),R.grav=-.4,R.flut=.6,R.life=Z(1.2,2.6),R.size=Z(.05,.1),R.fadeIn=.1,R.fadeOut=.4,_n.spawn()}function Zw(i,e){Qr(e,2,20);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(.2,1),qn);let n=Z(.8,1.1);R.r=.95*n,R.g=.6*n,R.b=.36*n,R.vy=Z(1,2),R.drag=.3,R.flut=.5,R.life=Z(1.2,2),R.size=Z(.8,1.4),R.alpha=.06,R.grow=1.2,R.fadeIn=.4,jr.spawn()}function Kw(i,e){Qr(e,2,28);let t=i.world;if(t.getHeight(Xn,qn)>=t.waterLevel-.12)return;pn(Xn,t.waterLevel+.04,qn);let n=Z(.7,1.1);R.r=.8*n,R.g=.98*n,R.b=1*n,R.life=Z(.5,1.1),R.size=Z(.04,.09),R.alpha=.9,R.pulse=8,R.fadeIn=.15,R.fadeOut=.3,_n.spawn()}function Jw(i,e){Qr(e,4,26);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(.5,2.5),qn);let n=Z(.85,1);R.r=.95*n,R.g=.95*n,R.b=.9*n,R.vx=Z(.25,.7),R.vy=Z(.08,.3),R.vz=Z(-.2,.2),R.flut=.9,R.life=Z(5,8),R.size=Z(.06,.1),R.alpha=.55,R.fadeIn=1,R.fadeOut=1.2,jr.spawn()}function $w(i,e){Qr(e,3,22);let t=i.getGroundHeight(Xn,qn);pn(Xn,t+Z(.2,3),qn);let n=Z(.7,1);R.r=.48*n,R.g=.28*n,R.b=.72*n,R.vy=Z(.2,.5),R.flut=.4,R.life=Z(2,4),R.size=Z(.04,.08),R.alpha=.55,R.pulse=Z(1.5,3),R.fadeIn=.6,R.fadeOut=.8,_n.spawn()}function $r(i,e,t,n,s,r){for(dm[i]+=e*t;dm[i]>=1;)dm[i]-=1,n(s,r)}function jw(i,e){let t=i.player;if(!t||!i.world)return;let n=t.position,s=i.quality.particleMul||1;if(fm-=e,fm<=0&&(fm=.5,Jr=i.world.getBiome(n.x,n.z)||"plains"),i.state==="shrine"){$r("rune",.9*s,e,Ww,i,n);return}i.time.isNight&&Jr!=="volcano"&&Jr!=="castle"&&$r("firefly",1.2*s,e,Xw,i,n),Jr==="forest"?$r("leaf",1.4*s,e,qw,i,n):Jr==="volcano"?($r("ember",4*s,e,Yw,i,n),$r("heat",.7*s,e,Zw,i,n)):Jr==="lake"?$r("glint",6*s,e,Kw,i,n):Jr==="plains"?i.time.isNight||$r("fluff",.3*s,e,Jw,i,n):Jr==="castle"&&$r("mote",.5*s,e,$w,i,n)}function Dy(){if(Wn||!ni)return;let{renderer:i,scene:e,camera:t}=ni;i.getDrawingBufferSize(Jo);let n=new Hn(Math.max(1,Jo.x),Math.max(1,Jo.y),{type:Ri,samples:4});Wn=new nf(i,n),Wn.addPass(new sf(e,t)),Py=new xl(new $(innerWidth,innerHeight),.38,.55,.82),Wn.addPass(Py),Wn.addPass(new rf),vl=new gl(Ow),Wn.addPass(vl),of()}function of(){if(!ni)return;if(Wn){let e=ni.settings.quality==="high"?4:2;Wn.renderTarget1.samples!==e&&(Wn.renderTarget1.samples=e,Wn.renderTarget2.samples=e,Wn.renderTarget1.dispose(),Wn.renderTarget2.dispose()),Wn.setPixelRatio(ni.quality.pixelRatio||1),Wn.setSize(innerWidth,innerHeight)}ni.renderer.getDrawingBufferSize(Jo);let i=Jo.y/(2*Math.tan(Fh.degToRad(ni.camera.fov)*.5));_n&&(_n.mat.uniforms.uScale.value=i,jr.mat.uniforms.uScale.value=i,$o.mat.uniforms.uScale.value=i),vl&&vl.uniforms.uRes.value.set(Jo.x,Jo.y)}function Qw(){ni&&(Wn&&ni.quality.postFX?(vl&&(vl.uniforms.uTime.value=ni.time.elapsed%1e3),Wn.render()):ni.renderer.render(ni.scene,ni.camera))}function e2(i,e,t){if(!i||!Ly[e])return;let n=t||{},s=n.scale||1;Ly[e](i.x,i.y,i.z,n,s)}function t2(){of()}async function n2(i){ni=i;let e=Hw(),t=Gw(),n=Vw();_n=new Gc(2e3,e,on,950),jr=new Gc(2e3,t,$s,940),$o=new Gc(1200,n,$s,945),i.scene.add(jr.points,$o.points,_n.points),i.quality.postFX&&Dy(),of(),i.on("quality-changed",s=>{s&&s.postFX&&!Wn&&Dy(),of()}),i.effects={render:Qw,burst:e2,onResize:t2}}function i2(i,e){let t=i.time.elapsed;_n.update(e,t),jr.update(e,t),$o.update(e,t),jw(i,e)}var yf={};bs(yf,{init:()=>p2,update:()=>g2});var s2=-30,By=11,Ny=6.2,r2=1.65,ky=.45,o2=9.2,Hy=25,a2=20,l2=25,Gy=1,Vy=3,c2=.42,df=4,Wy=.38,u2=1,pf=[{dur:.42,a0:.34,a1:.62,dmg:1,lunge:3.8,sfx:"sword1"},{dur:.46,a0:.36,a1:.66,dmg:1,lunge:4,sfx:"sword2"},{dur:.74,a0:.34,a1:.78,dmg:1.5,lunge:2.6,sfx:"sword3"}],zt,$i,io,no,ii,Ln,Cs,Qo,mf,_m,gf,vm,Mm,bm,Em,Sm,Ml,so,eo,bl,Xy,qy,uf,Yy,Di,ui,Ct=null,_t=null,Ft=Math.PI,Dn=!0,Tm=!1,hr=!1,wm=!1,ao=!1,ci=!1,He=null,ro=0,ea=0,Sl=0,hf=0,jo=0,Tl=0,El=0,to=0;var ta=0,xf=!1,qc=0,Uy=3.5,Xc=0,pm=0,mm=2.5,af=0,zy=0,Is=0,Wc=0,Zy=new A,gm={pos:Zy,radius:1.5,damage:1,swingId:0},oo=new A,ur=new A,xm=new A,si=new A,ym=new fn,lf=new fn,Fy=new pi,F={hipsY:0,hipsRY:0,torsoRX:0,torsoRY:0,torsoRZ:0,headRX:0,headRY:0,headRZ:0,shRX_R:.1,shRZ_R:-.1,elbR_:.25,shRX_L:.1,shRZ_L:.1,elbL_:.25,legR_:0,kneeR_:.06,legL_:0,kneeL_:.06};function Ky(){F.hipsY=0,F.hipsRY=0,F.torsoRX=.02,F.torsoRY=0,F.torsoRZ=0,F.headRX=0,F.headRY=0,F.headRZ=0,F.shRX_R=.1,F.shRZ_R=-.12,F.elbR_=.25,F.shRX_L=.1,F.shRZ_L=.12,F.elbL_=.25,F.legR_=0,F.kneeR_=.06,F.legL_=0,F.kneeL_=.06,ao&&(F.shRX_R=.16,F.elbR_=.45,F.elbL_=.4)}function h2(){let i={tunic:tt(3968847),tunicDk:tt(3108413),skin:tt(15910556),hair:tt(14922575),white:tt(15789277),boots:tt(7227948),leather:tt(9068854),dark:tt(4206622),gold:tt(13214247),navy:tt(2832981),steel:tt(10465981),shieldF:tt(4477534),eye:tt(2300690),blade:tt(15266550,{emissive:new se(3399880),emissiveIntensity:.38}),emblem:tt(3399880,{emissive:new se(3399880),emissiveIntensity:1.1})};zt=new Pe,$i=new Pe,$i.position.y=.55,zt.add($i),io=new Pe,io.position.y=-.55,$i.add(io),no=new Pe,no.position.y=.92,io.add(no);let e=new Jt(.078,.066,.4,7),t=new Jt(.056,.08,.32,7),n=new lt(.11,.09,.2),s=new Jt(.086,.082,.09,7),r=N=>{let G=new Pe;G.position.set(N*.105,-.03,0),no.add(G),ae(e,i.white,0,-.2,0,G);let O=new Pe;O.position.set(0,-.4,0),G.add(O),ae(s,i.boots,0,-.11,0,O),ae(t,i.boots,0,-.26,0,O);let K=ae(n,i.boots,0,-.415,.045,O);return{hip:G,knee:O,foot:K}},o=r(-1),a=r(1);Mm=o.hip,bm=o.knee,Xy=o.foot,Em=a.hip,Sm=a.knee,qy=a.foot,ii=new Pe,ii.position.y=.04,no.add(ii);let l=ae(new Jt(.185,.295,.3,7),i.tunic,0,.09,0,ii);l.rotation.y=Math.PI/7,ae(new Jt(.225,.24,.075,7),i.dark,0,.205,0,ii),ae(new lt(.075,.06,.03),i.gold,0,.205,.225,ii),ae(new Jt(.155,.215,.34,7),i.tunic,0,.385,0,ii),ae(new Jt(.105,.15,.1,7),i.tunicDk,0,.545,0,ii),eo=new Pe,eo.position.set(-.15,.5,-.185),eo.rotation.set(.1,0,-2.6),ii.add(eo),ae(new lt(.095,.74,.05),i.leather,0,.44,0,eo),ae(new lt(.11,.06,.06),i.gold,0,.62,0,eo),bl=new Pe,bl.position.set(.02,.3,-.27),bl.rotation.set(0,Math.PI,.08),ii.add(bl);let c=new Jt(.056,.05,.26,7),u=new Jt(.052,.068,.24,7),h=new xn(.056,7,6),f=new xn(.088,7,6),d=N=>{let G=new Pe;G.position.set(N*.265,.5,0),ii.add(G),ae(f,i.tunic,N*.01,.015,0,G).scale.set(1,.8,.9),ae(c,i.white,0,-.145,0,G);let K=new Pe;return K.position.set(0,-.28,0),G.add(K),ae(u,i.leather,0,-.125,0,K),ae(h,i.skin,0,-.27,0,K),{sh:G,elb:K}},g=d(-1),x=d(1);mf=g.sh,_m=g.elb,gf=x.sh,vm=x.elb,Ml=new Pe,Ml.position.set(0,-.28,.01),Ml.rotation.x=2.35,_m.add(Ml),so=new Pe,so.position.set(.09,-.15,0),so.rotation.set(0,Math.PI/2,Math.PI/2),vm.add(so),Ln=new Pe,Ln.position.y=.585,ii.add(Ln),ae(new xn(.155,9,8),i.skin,0,.105,.012,Ln).scale.set(.98,1,.94);let p=new ln(.03,.09,4),_=ae(p,i.skin,-.15,.1,-.01,Ln);_.rotation.z=Math.PI/2+.15;let M=ae(p,i.skin,.15,.1,-.01,Ln);M.rotation.z=-Math.PI/2-.15;let y=new lt(.03,.062,.02);uf=ae(y,i.eye,-.056,.105,.148,Ln),Yy=ae(y,i.eye,.056,.105,.148,Ln);let L=ae(new lt(.21,.075,.06),i.hair,0,.2,.105,Ln);L.rotation.x=.28,ae(new lt(.055,.12,.05),i.hair,-.105,.155,.085,Ln).rotation.set(.15,0,.25),ae(new lt(.055,.12,.05),i.hair,.105,.155,.085,Ln).rotation.set(.15,0,-.25),ae(new lt(.05,.09,.04),i.hair,0,.155,.125,Ln).rotation.x=.35;let I=ae(new ln(.2,.26,8),i.tunic,0,.295,-.025,Ln);I.rotation.x=-.3,ae(new Jt(.2,.19,.085,8),i.tunicDk,0,.2,-.005,Ln),Cs=new Pe,Cs.position.set(0,.385,-.09),Ln.add(Cs),ae(new ln(.098,.26,7),i.tunic,0,.11,0,Cs),Qo=new Pe,Qo.position.set(0,.225,0),Cs.add(Qo),ae(new ln(.047,.22,6),i.tunic,0,.09,0,Qo),ae(new xn(.028,6,5),i.tunicDk,0,.205,0,Qo),Di=new Pe;let E=ae(new lt(.052,.6,.016),i.blade,0,.415,0,Di);E.scale.z=1,E.geometry.translate(0,0,0);let v=ae(new ln(.037,.09,4),i.blade,0,.755,0,Di);v.rotation.y=Math.PI/4,v.scale.z=.3,ae(new lt(.16,.038,.05),i.gold,0,.105,0,Di),ae(new Jt(.021,.021,.15,6),i.navy,0,.015,0,Di),ae(new xn(.032,6,5),i.gold,0,-.065,0,Di),ui=new Pe;let D=ae(new Jt(.26,.235,.045,12),i.shieldF,0,0,0,ui);D.rotation.x=Math.PI/2;let z=ae(new ls(.245,.026,6,12),i.gold,0,0,.02,ui),U=ae(new Jt(.095,.095,.022,3),i.emblem,0,-.01,.032,ui);return U.rotation.x=Math.PI/2,U.rotation.z=0,ae(new xn(.045,7,6),i.gold,0,.1,.035,ui).scale.set(1,1,.55),zt.userData.rig={hips:no,torso:ii,headG:Ln,shR:mf,shL:gf,legR:Mm,legL:Em,kneeR:bm,kneeL:Sm,capMid:Cs,inner:io,sword:Di,shield:ui,backSheath:eo,backShieldG:bl,shieldGrip:so,gripR:Ml},Yc(!1,!0),zt}function Yc(i,e){ao===i&&!e||(ao=i,i?(Ml.add(Di),Di.position.set(0,.04,0),Di.rotation.set(0,0,0),so.add(ui),ui.position.set(0,0,.02),ui.rotation.set(0,0,0)):(eo.add(Di),Di.position.set(0,.06,0),Di.rotation.set(0,0,0),bl.add(ui),ui.position.set(0,0,0),ui.rotation.set(0,0,0)))}var Jy=null;function f2(){hr||(hr=!0,ci=!1,Is=0,He={type:"dead",t:0,dur:999},wm||(wm=!0,Jy.emit("player-died")))}function d2(){hr=!1,wm=!1,He=null,$i.rotation.set(0,0,0),Is=0,ea=1.2,ta=0,io.visible=!0}async function p2(i){Jy=i,h2(),_t=new A,i.world&&i.world.startPos?zt.position.copy(i.world.startPos):zt.position.set(0,0,250),zt.position.y=i.getGroundHeight(zt.position.x,zt.position.z),zt.rotation.y=Ft,i.scene.add(zt),Ky(),$y(1,500),Ct={obj:zt,position:zt.position,heading:Ft,velocity:_t,hp:3,maxHp:3,stamina:100,maxStamina:100,spiritOrbs:0,gems:0,onGround:!0,isRolling:!1,isBlocking:!1,damage(e,t){if(hr||ea>0||He&&He.type==="roll")return;Sl=df,Yc(!0);let n=!1;if(ci&&t){let o=Math.atan2(t.x-zt.position.x,t.z-zt.position.z);Math.abs(Xo(Ft,o))<=70*Math.PI/180&&(n=!0)}let s=-Math.sin(Ft),r=-Math.cos(Ft);if(t){let o=zt.position.x-t.x,a=zt.position.z-t.z,l=Math.hypot(o,a);l>1e-4&&(s=o/l,r=a/l)}n?(e*=.2,_t.x+=s*2.5,_t.z+=r*2.5,i.audio.play("block"),oo.set(zt.position.x+Math.sin(Ft)*.55,zt.position.y+1.05,zt.position.z+Math.cos(Ft)*.55),i.effects.burst(oo,"spark")):(_t.x=s*6.5,_t.z=r*6.5,Dn&&(_t.y=2.5,Dn=!1),He={type:"hurt",t:0,dur:Wy},Is=0,i.ui.flash("#ff2222",.25),i.audio.play("damage"),oo.set(zt.position.x,zt.position.y+1,zt.position.z),i.effects.burst(oo,"hit")),ea=u2,Ct.hp=Re(Ct.hp-e,0,Ct.maxHp),i.emit("player-damaged",{hp:Ct.hp,amount:e}),Ct.hp<=0&&f2()},heal(e){Ct.hp=Re(Ct.hp+e,0,Ct.maxHp),hr&&Ct.hp>0&&d2()},addMaxHeart(){Ct.maxHp+=1,Ct.hp=Ct.maxHp},getAttackHit(){if(!He||He.type!=="atk")return null;let e=pf[He.idx],t=He.t/e.dur;return t<e.a0||t>e.a1?null:(Zy.set(zt.position.x+Math.sin(Ft)*1.3,zt.position.y+1,zt.position.z+Math.cos(Ft)*1.3),gm.damage=e.dmg,gm.swingId=He.swingId,gm)},teleport(e,t=Math.PI){zt.position.copy(e),Ft=t,Ct.heading=t,zt.rotation.y=t,_t.set(0,0,0),hr||(He=null,$i.rotation.set(0,0,0),Is=0,io.visible=!0),ci=!1,Ct.isBlocking=!1,Ct.isRolling=!1,Dn=!0,Ct.onGround=!0,Tl=0,El=0,to=0,ta=0},setFrozen(e){Tm=!!e,Tm&&(ci=!1,ro=0,He&&He.type!=="dead"&&(He=null,$i.rotation.x=0,Is=0),_t.x=0,_t.z=0)}},i.player=Ct}function Oy(i,e){Yc(!0),ro=0,zy++,He={type:"atk",idx:e,t:0,dur:pf[e].dur,swingId:zy,sfxDone:!1},Sl=df,ci=!1,Is=0,!(i.camera3p&&i.camera3p.lockTarget)&&si.lengthSq()>.5&&(Ft=Math.atan2(si.x,si.z))}function m2(i,e){Ct.stamina=Re(Ct.stamina-Hy,0,Ct.maxStamina),hf=Gy,Ct.stamina<=0&&(jo=Vy);let t=e?Math.atan2(si.x,si.z):Ft;He={type:"roll",t:0,dur:ky,dx:Math.sin(t),dz:Math.cos(t)},Ft=t,ro=0,ci=!1,i.audio.play("roll"),ff(i,0)}function ff(i,e){let t=e===1?Xy:e===2?qy:null;t?t.getWorldPosition(oo):(oo.copy(zt.position),oo.y+=.06),i.effects.burst(oo,"dust")}function g2(i,e){if(!Ct)return;Wc+=e;let t=zt.position,n=i.input,s=!Tm&&!hr;ea>0&&(ea-=e),ro>0&&(ro-=e),ta>0&&(ta-=e),jo>0&&(jo-=e),hf>0?hf-=e:Ct.stamina=Re(Ct.stamina+l2*e,0,Ct.maxStamina);let r=0,o=0;s&&(r=(n.keys.has("KeyW")||n.keys.has("ArrowUp")?1:0)-(n.keys.has("KeyS")||n.keys.has("ArrowDown")?1:0),o=(n.keys.has("KeyD")||n.keys.has("ArrowRight")?1:0)-(n.keys.has("KeyA")||n.keys.has("ArrowLeft")?1:0)),i.camera.getWorldDirection(ur),ur.y=0,ur.lengthSq()<1e-6&&ur.set(0,0,-1),ur.normalize(),xm.set(-ur.z,0,ur.x),si.set(ur.x*r+xm.x*o,0,ur.z*r+xm.z*o);let a=si.lengthSq()>1e-6;a&&si.normalize();let l=i.camera3p?i.camera3p.lockTarget:null,c=!!(l&&l.alive!==!1&&l.pos),u=c?Math.atan2(l.pos.x-t.x,l.pos.z-t.z):0,h=s&&!He&&Dn&&(n.mouse.right||n.keys.has("KeyK"));h&&!ci&&(Yc(!0),Sl=df),ci=h,s&&(n.mouse.leftJust||n.justPressed("KeyJ"))&&(ro=.3),s&&!He&&Dn&&(ro>0?Oy(i,0):n.justPressed("KeyC")&&jo<=0&&Ct.stamina>=Hy?m2(i,a):n.justPressed("Space")&&(_t.y=By,Dn=!1,ci=!1,i.audio.play("jump"),ff(i,0)));let f=i.world&&i.world.waterLevel!==void 0?i.world.waterLevel:-1e9,d=t.y<f+.4,g=!1;if(He){He.t+=e;let T=He.t/He.dur;if(He.type==="atk"){let w=pf[He.idx];!He.sfxDone&&T>=w.a0-.1&&(He.sfxDone=!0,i.audio.play(w.sfx));let I=Ze(w.a0-.1,w.a0+.1,T)*(1-Ze(w.a1,w.a1+.14,T));_t.x=ze(_t.x,Math.sin(Ft)*w.lunge*I,18,e),_t.z=ze(_t.z,Math.cos(Ft)*w.lunge*I,18,e),T<w.a0&&(c?Ft=Gn(Ft,u,16,e):a&&(Ft=Gn(Ft,Math.atan2(si.x,si.z),10,e))),T>=1&&(ro>0&&He.idx<2&&Dn&&s?Oy(i,He.idx+1):(He=null,Is=0))}else if(He.type==="roll"){let w=o2*(1-.55*Ze(.55,1,T))*(d?.5:1);_t.x=He.dx*w,_t.z=He.dz*w,T>=1&&(He=null,$i.rotation.x=0)}else He.type==="hurt"?(_t.x=ze(_t.x,0,5,e),_t.z=ze(_t.z,0,5,e),He.t>=He.dur&&(He=null)):He.type==="dead"&&(_t.x=ze(_t.x,0,8,e),_t.z=ze(_t.z,0,8,e))}else{let T=0;a?(T=Ny,s&&Dn&&!ci&&jo<=0&&Ct.stamina>0&&(n.keys.has("ShiftLeft")||n.keys.has("ShiftRight"))&&(g=!0,T*=r2,Ct.stamina=Re(Ct.stamina-a2*e,0,Ct.maxStamina),hf=Gy,Ct.stamina<=0&&(jo=Vy)),ci&&(T*=.5),d&&(T*=.5),c?Ft=Gn(Ft,u,14,e):Ft=Gn(Ft,Math.atan2(si.x,si.z),g?15:11,e)):c&&(Ft=Gn(Ft,u,14,e));let w=Dn?12:3.5;_t.x=ze(_t.x,si.x*T,w,e),_t.z=ze(_t.z,si.z*T,w,e)}Dn||(_t.y+=s2*e),t.x+=_t.x*e,t.z+=_t.z*e,t.y+=_t.y*e;let x=i.colliders;for(let T=0;T<x.length;T++){let w=x[T],I=t.x-w.x,E=t.z-w.z,v=w.radius+c2,D=I*I+E*E;if(D>=v*v||w.height!==void 0&&t.y>i.getGroundHeight(w.x,w.z)+w.height)continue;if(D<1e-8){t.x-=Math.sin(Ft)*v,t.z-=Math.cos(Ft)*v;continue}let z=Math.sqrt(D),U=(v-z)/z;t.x+=I*U,t.z+=E*U}let m=i.playerBounds;m&&(t.x=Re(t.x,m.minX,m.maxX),t.z=Re(t.z,m.minZ,m.maxZ));let p=i.getGroundHeight(t.x,t.z);t.y<=p?(Dn||(xf=_t.y<-14,ta=xf?.26:.15,i.audio.play("land"),ff(i,0)),t.y=p,_t.y=0,Dn=!0):Dn&&(t.y-p<.4?t.y=p:Dn=!1),ao&&(ci||He&&He.type==="atk"?Sl=df:(Sl-=e,Sl<=0&&!He&&Yc(!1)));let _=Math.hypot(_t.x,_t.z),M=Re(_/Ny,0,1.8);if(to=ze(to,Dn&&_>.6?1:0,10,e),Dn&&!He&&_>.4){Tl+=e*(4.5+_*1.3);let T=Math.sin(Tl);_>2.2&&El*T<=0&&El!==T&&(i.audio.play("step"),ff(i,El<0?1:2)),El=T}else El=0;Ky();let y=14;hr&&He?y=T2(He.t):He&&He.type==="roll"?y=E2(Re(He.t/ky,0,1)):He&&He.type==="atk"?y=b2(He.idx,Re(He.t/pf[He.idx].dur,0,1)):He&&He.type==="hurt"?y=S2(He.t/Wy):Dn?(to>.06?y2(M,g,c):x2(Wc,e),ci&&M2(),ta>0&&v2()):y=_2(_t.y),jo>0&&!He&&Dn&&(F.torsoRX+=.12,F.headRX+=.16),$y(e,y),He||($i.rotation.x=ze($i.rotation.x,0,20,e)),zt.rotation.y=Ft+Is,ao&&(ci?(so.getWorldQuaternion(ym),Fy.set(-.18,Ft,0),lf.setFromEuler(Fy),ym.invert().multiply(lf),ui.quaternion.slerp(ym,1-Math.exp(-14*e))):ui.parent===so&&(lf.set(0,0,0,1),ui.quaternion.slerp(lf,1-Math.exp(-10*e))));let L=Math.sin(Wc*2.2)*.06+Math.sin(Tl*2)*.12*to;Cs.rotation.x=ze(Cs.rotation.x,-.8-to*.35-Re(_t.y*.022,-.3,.3)+L,8,e),Qo.rotation.x=ze(Qo.rotation.x,-.62-to*.28+Math.sin(Wc*2.2+.9)*.08+Math.sin(Tl*2+1.2)*.15*to,7,e),Cs.rotation.z=ze(Cs.rotation.z,Math.sin(Wc*1.7)*.05,6,e),mm-=e,mm<=0&&(mm=2+Math.random()*3.5,af=.13),af>0&&(af-=e),uf.scale.y=ze(uf.scale.y,af>0?.12:1,30,e),Yy.scale.y=uf.scale.y,io.visible=hr||!(ea>0&&Math.floor(ea*14)%2===0),Ct.onGround=Dn,Ct.isRolling=!!(He&&He.type==="roll"),Ct.isBlocking=ci,Ct.heading=Ft}var cf=i=>(i=Re(i,0,1),1-(1-i)*(1-i)*(1-i));function x2(i,e){let t=Math.sin(i*1.7);if(F.torsoRX=.035+t*.022,F.hipsY=-.012+t*.01,F.shRZ_R=-.14-t*.02,F.shRZ_L=.14+t*.02,F.elbR_=(ao?.52:.28)+t*.03,F.elbL_=(ao?.42:.28)+t*.03,F.legR_=-.045,F.legL_=.055,F.kneeR_=.09,F.kneeL_=.06,qc+=e,Xc>0){Xc-=e;let n=Math.sin(Re(1-Xc/1.5,0,1)*Math.PI);F.headRY=pm*n,F.headRX=.05*n,F.torsoRY=pm*n*.14}else qc>=Uy&&(qc=0,Uy=2.5+Math.random()*4,Xc=1.5,pm=(Math.random()<.5?-1:1)*(.5+Math.random()*.35))}function y2(i,e,t){qc=0,Xc=0;let n=Tl,s=Re(i,0,1),r=.34+.44*s+(e?.13:0),o=.36+.48*s+(e?.17:0),a=Math.sin(n),l=-a,c=Math.cos(n);if(F.legR_=-a*r,F.legL_=-l*r,F.kneeR_=Math.max(0,c)*(.6+.7*s),F.kneeL_=Math.max(0,-c)*(.6+.7*s),F.shRX_R=a*o,F.shRX_L=l*o,F.elbR_=.4+Math.max(0,-a)*.65+(ao?.12:0),F.elbL_=.4+Math.max(0,-l)*.65,F.shRZ_R=-.12,F.shRZ_L=.12,F.torsoRX=.06+s*.12+(e?.22:0),F.torsoRY=a*.09,F.hipsY=(-.055+Math.abs(c)*.055)*s,F.headRX=-F.torsoRX*.55,t){let u=Xo(Ft,Math.atan2(si.x,si.z));F.hipsRY=Re(u*.45,-.85,.85),F.torsoRZ=-Math.sin(u)*.07}}function _2(i){let e=Re(i/By,-1,1);return F.torsoRX=.13-e*.07,F.legR_=-.58+e*.1,F.kneeR_=1.05,F.legL_=.32,F.kneeL_=.5,F.shRX_R=-.5-e*.3,F.shRZ_R=-.6,F.shRX_L=-.5-e*.3,F.shRZ_L=.6,F.elbR_=.55,F.elbL_=.55,F.headRX=i<0?.12:-.08,10}function v2(){let i=Re(ta/(xf?.26:.15),0,1)*(xf?1:.5);F.hipsY-=.22*i,F.kneeR_+=.95*i,F.kneeL_+=.95*i,F.legR_-=.48*i,F.legL_-=.42*i,F.torsoRX+=.32*i,F.shRX_R-=.3*i,F.shRX_L-=.3*i}function M2(){F.shRX_L=-1.18,F.shRZ_L=-.55,F.elbL_=1.4,F.shRX_R=.35,F.shRZ_R=-.4,F.elbR_=.8,F.torsoRX+=.1,F.torsoRY=.18,F.hipsY-=.06,F.legR_-=.16,F.legL_+=.13,F.kneeR_+=.28,F.kneeL_+=.16,F.headRX=-.04}function b2(i,e){if(qc=0,i===0){let s=Ze(0,.2,e),r=cf((e-.24)/.3),o=Ze(.8,1,e);return F.torsoRY=ye(-.85*s,.95,r)*(1-o*.45),F.torsoRX=.1+r*.16,F.shRX_R=ye(ye(.15,-.4,s),-1.35,r),F.shRZ_R=ye(ye(-.12,-1.15,s),.45,r),F.elbR_=ye(ye(.45,1.05,s),.1,r),F.shRX_L=ye(.1,.55,r),F.shRZ_L=.38,F.elbL_=.7,F.hipsY=-.05-r*.03,F.legR_=-.38*r,F.legL_=.3*r,F.kneeR_=.3,F.kneeL_=.26,F.headRY=-F.torsoRY*.45,e<.24?16:30}if(i===1){let s=Ze(0,.22,e),r=cf((e-.26)/.3),o=Ze(.82,1,e);return F.torsoRY=ye(.9*s,-.95,r)*(1-o*.45),F.torsoRX=.12+r*.12,F.shRX_R=ye(ye(-.4,-.85,s),-1.25,r),F.shRZ_R=ye(ye(.1,.75,s),-1.25,r),F.elbR_=ye(ye(.5,1.15,s),.14,r),F.shRX_L=.3,F.shRZ_L=ye(.2,.8,r),F.elbL_=.6,F.hipsY=-.06,F.legR_=.3*r,F.legL_=-.38*r,F.kneeR_=.26,F.kneeL_=.3,F.headRY=-F.torsoRY*.45,e<.26?16:30}let t=Ze(0,.24,e),n=cf((e-.26)/.42);return Is=Math.PI*2*cf((e-.26)/.52),e>=.99&&(Is=0),F.torsoRY=ye(-.9*t,-.15,n),F.torsoRX=.16+t*.1,F.shRX_R=ye(ye(.15,-.5,t),-.9,n),F.shRZ_R=ye(ye(-.12,-.55,t),-1.5,n),F.elbR_=ye(ye(.45,1.2,t),.05,n),F.shRX_L=-.35,F.shRZ_L=ye(.2,.95,n),F.elbL_=.45,F.hipsY=-.1-Math.sin(Re(n,0,1)*Math.PI)*.07,F.legR_=-.32,F.legL_=.36,F.kneeR_=.45,F.kneeL_=.52,F.headRY=.1,e<.24?15:26}function E2(i){let e=i<.5?2*i*i:1-(2-2*i)*(2-2*i)/2;return $i.rotation.x=Math.PI*2*e,F.hipsY=-.32,F.torsoRX=.85,F.headRX=.6,F.legR_=-1.65,F.legL_=-1.55,F.kneeR_=2.2,F.kneeL_=2.3,F.shRX_R=-.9,F.shRZ_R=-.35,F.elbR_=2.1,F.shRX_L=-.9,F.shRZ_L=.35,F.elbL_=2.1,26}function S2(i){let e=Math.sin(Re(i,0,1)*Math.PI);return F.torsoRX=-.4*e,F.headRX=-.32*e,F.shRX_R=-.5*e,F.shRZ_R=-.75*e-.1,F.shRX_L=-.5*e,F.shRZ_L=.75*e+.1,F.elbR_=.8,F.elbL_=.8,F.hipsY=-.06*e,F.legR_=-.28*e,F.kneeR_=.45*e,F.legL_=.15*e,22}function T2(i){let e=Ze(0,.5,i),t=Ze(.65,1.35,i);return F.hipsY=-.52*e-.14*t,F.kneeR_=2.35*e,F.kneeL_=2.35*e,F.legR_=.12*e,F.legL_=.12*e,F.torsoRX=.22*e+.6*t,F.headRX=.28*e+.4*t,F.shRX_R=.2*e-.55*t,F.shRZ_R=-.3,F.shRX_L=.2*e-.55*t,F.shRZ_L=.3,F.elbR_=.3,F.elbL_=.3,$i.rotation.x=1.15*t,8}function $y(i,e){let t=(n,s,r)=>{n[s]=ze(n[s],r,e,i)};t(no.position,"y",.92+F.hipsY),t(no.rotation,"y",F.hipsRY),t(ii.rotation,"x",F.torsoRX),t(ii.rotation,"y",F.torsoRY-F.hipsRY),t(ii.rotation,"z",F.torsoRZ),t(Ln.rotation,"x",F.headRX-F.torsoRX*.4),t(Ln.rotation,"y",F.headRY),t(Ln.rotation,"z",F.headRZ),t(mf.rotation,"x",F.shRX_R),t(mf.rotation,"z",F.shRZ_R),t(_m.rotation,"x",-Math.max(0,F.elbR_)),t(gf.rotation,"x",F.shRX_L),t(gf.rotation,"z",F.shRZ_L),t(vm.rotation,"x",-Math.max(0,F.elbL_)),t(Mm.rotation,"x",F.legR_),t(bm.rotation,"x",Math.max(0,F.kneeR_)),t(Em.rotation,"x",F.legL_),t(Sm.rotation,"x",Math.max(0,F.kneeL_))}var jc={};bs(jc,{init:()=>H2,update:()=>G2});var Am=-.35,Rm=1.25,jy=4,Qy=13,e_=.0032,t_=.0026,w2=.011,bf=1.6,A2=.45,Cm=.4,n_=8,Ef=55,R2=61,C2=7,I2=32,P2=40,L2=-650,lo=0,vi=.3,_f=7.5,Al=7.5,fr=7.5,Il="follow",vf=null,Zc=0,Kc=0,Jc=1,wl=Ef,Rl=Ef,ds=null,Cl=0,Im=0,na=[0,0,0,0,0,0],Mf=null,Ps=new A(0,bf,250),Mi=new A(0,8,262),hi=new A,ia=new A,co=new A,D2=new A(0,0,-560);function N2(i){return i&&(i.pos||i.root&&i.root.position)||null}function $c(i,e){let t=e||null;t!==ds&&(ds=t,Mf&&(Mf.lockTarget=t),i.emit("lockon",{target:t}))}function U2(i){let e=Re(i||0,0,1);if(!(e<=0)){Cl=Math.max(Cl,e),Im=0;for(let t=0;t<6;t++)na[t]=Math.random()*Math.PI*2}}function z2(i,e,t,n,s,r){let o=0,a=Math.max(e.y-(i.getGroundHeight(e.x,e.z)+Cm),.001);for(let l=1;l<=n_;l++){let c=r*l/n_,u=e.y+n*c,h=i.getGroundHeight(e.x+t*c,e.z+s*c)+Cm,f=u-h;if(f<0){let d=a/(a-f);return Re(o+(c-o)*d-.2,1.3,r)}o=c,a=Math.max(f,.001)}return r}function F2(i,e){if(i!=="follow"&&ds&&$c(e,null),Il=i,Zc=0,i==="title"&&(Kc=0),i==="follow"){hi.copy(Mi).sub(Ps);let t=hi.length();t>.05&&(lo=Math.atan2(hi.x,hi.z),vi=Re(Math.asin(Re(hi.y/t,-1,1)),Am,Rm)),Al=Re(t,1.5,120),fr=Al,Jc=0}}function O2(i,e){let t=i.camera,n=i.player,s=i.input.mouse,r=i.state;if((r==="playing"||r==="shrine"||r==="boss")&&i.input.justPressed("KeyQ")){if(ds)$c(i,null);else if(i.combat&&typeof i.combat.nearestTargetable=="function"){let y=i.combat.nearestTargetable(n.position,I2);y&&$c(i,y)}}let a=N2(ds);ds&&(!ds.alive||!a||a.distanceTo(n.position)>P2)&&($c(i,null),a=null),ds&&a?(lo-=s.dx*e_*.35,lo=Gn(lo,Math.atan2(n.position.x-a.x,n.position.z-a.z),4.2,e),vi=Re(vi+s.dy*t_,Am,Rm),vi=ze(vi,Re(vi,.22,.6),2.6,e)):(lo-=s.dx*e_,vi=Re(vi+s.dy*t_,Am,Rm)),_f=Re(_f+s.wheel*w2,jy,Qy),Jc=Math.min(1,Jc+e/1.1);let l=Ze(0,1,Jc),c=ye(2.2,12,l),u=ye(1.8,6,l);if(Jc<1&&(vi=ze(vi,Re(vi,.12,.85),(1-l)*2.5,e)),hi.copy(n.position),hi.y+=bf,ds&&a){ia.set(a.x,a.y+1.2,a.z).sub(hi);let y=ia.length();y>.001&&hi.addScaledVector(ia,Math.min(.32,3.5/y)),hi.y+=.25}Ps.lerp(hi,1-Math.exp(-c*e));let h=Re(_f+(ds?1.5:0),jy,Qy+2);Al=ze(Al,h,u,e);let f=Math.cos(vi),d=Math.sin(lo)*f,g=Math.sin(vi),x=Math.cos(lo)*f,m=z2(i,Ps,d,g,x,Al);m<fr?fr=m:fr=ze(fr,m,3.2,e),Mi.set(Ps.x+d*fr,Ps.y+g*fr,Ps.z+x*fr);let p=i.getGroundHeight(Mi.x,Mi.z)+Cm;Mi.y<p&&(Mi.y=p),t.position.copy(Mi),co.copy(Ps),co.y+=A2,t.lookAt(co);let _=n.velocity;Rl=(_?Math.hypot(_.x,_.z):0)>C2?R2:Ef}function B2(i,e){let t=i.camera,n=i.player,s=i.world&&i.world.castleGatePos||D2;Zc+=e;let r=1.5;if(Il==="title"){Kc+=e;let a=n.position,l=.85+Kc*.07,c=14.5+Math.sin(Kc*.1+.6)*2.4,u=2.9+Math.sin(Kc*.06+1.5)*1.3;hi.set(a.x+Math.sin(l)*c,a.y+u,a.z+Math.cos(l)*c);let h=.16+.34*Math.max(0,Math.cos(l));co.set(-a.x,0,L2-a.z),co.lengthSq()>.001&&co.normalize(),ia.set(a.x+co.x*26*h,a.y+bf+5.5*h,a.z+co.z*26*h),Rl=50,r=1.7}else if(Il==="bossIntro"){let a=Ze(0,6.5,Zc);hi.set(s.x+ye(-9,7,a),s.y+ye(1.4,10.5,a),s.z+ye(30,24,a)),ia.set(s.x,s.y+ye(5,26,a),s.z+ye(-4,-16,a)),Rl=52,r=1.4}else{let a=Ze(0,16,Zc);hi.set(s.x+Math.sin(Zc*.05)*8,s.y+ye(5,130,a),s.z+ye(45,90,a)),ia.set(s.x,s.y+ye(18,2,a),s.z+ye(-30,620,a)),Rl=56,r=1.2}Ps.lerp(ia,1-Math.exp(-2.3*e)),Mi.lerp(hi,1-Math.exp(-r*e));let o=i.getGroundHeight(Mi.x,Mi.z)+1;Mi.y<o&&(Mi.y=o),t.position.copy(Mi),t.lookAt(Ps)}function k2(i,e){if(Cl<=0)return;Im+=e;let t=Cl*Math.exp(-3.4*Im);if(t<.003){Cl=0;return}let n=i.time.elapsed,s=i.camera;s.position.x+=t*.32*(Math.sin(n*33+na[0])*.62+Math.sin(n*51+na[1])*.38),s.position.y+=t*.26*(Math.sin(n*39+na[2])*.62+Math.sin(n*57+na[3])*.38),s.position.z+=t*.2*Math.sin(n*29+na[4]),s.rotateZ(t*.035*Math.sin(n*43+na[5]))}async function H2(i){let e=i.player;e&&e.position&&Ps.set(e.position.x,e.position.y+bf,e.position.z),Mi.copy(i.camera.position),wl=i.camera.fov||Ef,Rl=wl,lo=0,vi=.3,_f=7.5,Al=7.5,fr=7.5,Il="follow",vf=null,ds=null,Cl=0,Mf={lockTarget:null,setLockTarget(t){$c(i,t||null)},shake(t){U2(t)},cinematic(t){vf=t==="title"||t==="bossIntro"||t==="ending"?t:null}},i.camera3p=Mf,i.on("state",t=>{let n=t&&t.to;(n==="title"||n==="gameover")&&(vf=null)})}function G2(i,e){let t=i.camera,n=i.player;if(!t||!n||!n.position)return;let s=i.state==="title"?"title":vf||"follow";s!==Il&&F2(s,i),Il==="follow"?O2(i,e):B2(i,e),wl=ze(wl,Rl,4.5,e),Math.abs(t.fov-wl)>.002&&(t.fov=wl,t.updateProjectionMatrix()),k2(i,e)}var Rf={};bs(Rf,{init:()=>CA,update:()=>IA});function i_(i){let e=new Map,t=new Map,n=i.clone();return s_(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function s_(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)s_(i.children[n],e.children[n],t)}var Tt=li(12220178),V2=-558,W2=120,X2=2,q2=140,u_=90,h_=50,r_=30,Ni={hp:2,radius:.7,walk:1.15,run:4.2,notice:18,range:2,reach:2.7,dmg:.5,height:1.25,hitY:.7},Ll={hp:4,radius:.65,speed:4.2*1.3,range:2,reach:2.8,dmg:.5,height:1.8,hitY:1,max:6},uo={hp:2,radius:.6,near:8,far:20,fireCd:2.5,dmg:.5,height:.6,hitY:0},Dl=null,Yn=null,zi=[],Nm=[],f_=[],eu=[],fo=[],Fm=[],Om=[],Af=[],Pl=[],sn=null,Um=!1,Pm=0,Sf=0,nt=null,ut=null,Tf=null,Y2=Math.PI,po=new A;function mo(i,e){try{Dl.audio&&Dl.audio.play(i,e)}catch{}}function ps(i,e,t){try{Dl.effects&&Dl.effects.burst(i,e,t)}catch{}}function Bm(i){return i.pos||i.root&&i.root.position||null}function ms(i,e,t){if(t<V2)return!1;let n=i.world?i.world.waterLevel:-9999;return i.getGroundHeight(e,t)>n-.5}function zm(i,e,t,n=8){if(ms(i,e,t))return{x:e,z:t};for(let s=0;s<12;s++){let r=Tt()*Math.PI*2,o=2+Tt()*n,a=e+Math.sin(r)*o,l=t+Math.cos(r)*o;if(ms(i,a,l))return{x:a,z:l}}return{x:e,z:t}}function Z2(){nt={sphere:new xn(1,10,8),cone:new ln(1,1,6),cone4:new ln(1,1,4),limb:new Jt(1,.82,2,7),box:new lt(1,1,1),rib:new ls(.17,.028,5,10),rock:new Sh(1,0),gem:new Go(.16,0)},nt.gem.scale(1,1.45,1),nt.tent=new Jt(.95,.95,1.7,3,1,!1,Math.PI/2),nt.tent.rotateZ(Math.PI/2),nt.tent.translate(0,.48,0);let i=new vc;i.moveTo(2.5,2.5),i.bezierCurveTo(2.5,2.5,2,0,0,0),i.bezierCurveTo(-3,0,-3,3.5,-3,3.5),i.bezierCurveTo(-3,5.5,-1,7.7,2.5,9.5),i.bezierCurveTo(6,7.7,8,5.5,8,3.5),i.bezierCurveTo(8,3.5,8,0,5,0),i.bezierCurveTo(3.5,0,2.5,2.5,2.5,2.5),nt.heart=new Th(i,{depth:2.2,bevelEnabled:!0,bevelThickness:.8,bevelSize:.8,bevelSegments:1,steps:1}),nt.heart.center(),nt.heart.rotateZ(Math.PI),nt.heart.scale(.035,.035,.035),ut={wood:tt(7819824),eyeY:Ht(16765502,1.6),bone:tt(15262416),blade:tt(12174287),grip:tt(5126952),eyeR:Ht(16726832,1.8),wispCore:Ht(13732863,2.1),wispMid:Ht(10112480,1.1,{transparent:!0,opacity:.45,depthWrite:!1}),wispShell:Ht(8009152,.7,{transparent:!0,opacity:.22,depthWrite:!1,blending:on}),stone:tt(9078135),flameO:Ht(16747050,1.7),flameI:Ht(16766826,2.2),tent:tt(9069122),heart:Ht(16731501,1.1),gem:Ht(5111688,1.4),fireball:Ht(13659135,2.4),fireHalo:Ht(11693055,1.2,{transparent:!0,opacity:.35,depthWrite:!1,blending:on}),flash:new Lt({color:16777215}),flashSkin:new Lt({color:16777215})}}function km(i){let e=[];return i.traverse(t=>{t.isMesh&&e.push({m:t,mat:t.material})}),e}var K2=13164736;function J2(){let i=new Pe,e=i_(Tf.scene);e.scale.setScalar(Tf.scale),e.rotation.y=Y2,i.add(e);let t=new Dh(e),n={};for(let s of["idle","walk","sprint","attack-melee-right","die"]){let r=Tf.clipMap.get(s);if(!r)continue;let o=t.clipAction(r);(s==="attack-melee-right"||s==="die")&&(o.setLoop(p0,1),o.clampWhenFinished=!0),n[s]=o}return{root:i,p:{mixer:t,actions:n,current:null},flash:km(i)}}function Ui(i,e,t={}){let n=i.p,s=n.actions[e];if(!s)return null;if(n.current===s)return s;let r=t.fade??.15;return s.reset(),r>0&&s.fadeIn(r),s.play(),n.current&&n.current.fadeOut(r),n.current=s,s}function Lm(i,e){e>=3?Ui(i,"sprint"):e>.05?Ui(i,"walk"):Ui(i,"idle")}function $2(){let i=new Pe,e=new Pe;e.position.y=.98,i.add(e),ae(nt.box,ut.bone,0,0,0,e).scale.set(.26,.12,.16),ae(nt.limb,ut.bone,0,.2,0,e).scale.set(.03,.17,.03);for(let x=0;x<3;x++){let m=ae(nt.rib,ut.bone,0,.26+x*.1,0,e);m.rotation.x=Math.PI/2;let p=1-x*.1;m.scale.set(p,p*.78,.78)}let s=ae(nt.limb,ut.bone,0,.55,0,e);s.scale.set(.022,.19,.022),s.rotation.z=Math.PI/2;let r=new Pe;r.position.set(0,.72,0),e.add(r),ae(nt.sphere,ut.bone,0,0,0,r).scale.set(.145,.155,.15),ae(nt.box,ut.bone,0,-.13,.02,r).scale.set(.13,.055,.11),ae(nt.sphere,ut.eyeR,-.055,.01,.125,r).scale.setScalar(.032),ae(nt.sphere,ut.eyeR,.055,.01,.125,r).scale.setScalar(.032);let l=new Pe;l.position.set(-.24,.55,0),e.add(l),ae(nt.limb,ut.bone,0,-.27,0,l).scale.set(.028,.26,.028),ae(nt.sphere,ut.bone,0,-.27,0,l).scale.setScalar(.042),ae(nt.sphere,ut.bone,0,-.55,0,l).scale.setScalar(.05);let c=new Pe;c.position.set(.24,.55,0),e.add(c),ae(nt.limb,ut.bone,0,-.27,0,c).scale.set(.028,.26,.028),ae(nt.sphere,ut.bone,0,-.27,0,c).scale.setScalar(.042),ae(nt.sphere,ut.bone,0,-.55,0,c).scale.setScalar(.05);let u=new Pe;u.position.set(0,-.56,.02),c.add(u);let h=ae(nt.limb,ut.grip,0,0,.02,u);h.scale.set(.018,.07,.018),h.rotation.x=Math.PI/2,ae(nt.box,ut.grip,0,0,.12,u).scale.set(.15,.035,.035),ae(nt.box,ut.blade,0,0,.45,u).scale.set(.07,.018,.62);let f=ae(nt.cone4,ut.blade,0,0,.8,u);f.scale.set(.035,.07,.009),f.rotation.x=Math.PI/2;let d=new Pe;d.position.set(-.1,.86,0),i.add(d),ae(nt.limb,ut.bone,0,-.42,0,d).scale.set(.03,.4,.03),ae(nt.sphere,ut.bone,0,-.42,0,d).scale.setScalar(.042),ae(nt.box,ut.bone,0,-.84,.03,d).scale.set(.07,.035,.15);let g=new Pe;return g.position.set(.1,.86,0),i.add(g),ae(nt.limb,ut.bone,0,-.42,0,g).scale.set(.03,.4,.03),ae(nt.sphere,ut.bone,0,-.42,0,g).scale.setScalar(.042),ae(nt.box,ut.bone,0,-.84,.03,g).scale.set(.07,.035,.15),{root:i,p:{body:e,head:r,armL:l,armR:c,legL:d,legR:g,sword:u},flash:km(i)}}function j2(){let i=new Pe,e=new Pe;i.add(e);let t=new Be(nt.sphere,ut.wispCore);t.scale.setScalar(.19),e.add(t);let n=new Be(nt.sphere,ut.wispMid);n.scale.setScalar(.27),e.add(n);let s=new Be(nt.sphere,ut.wispShell);s.scale.setScalar(.4),e.add(s);let r=new Pe;r.rotation.x=.6,i.add(r);let o=new Be(nt.sphere,ut.wispCore);o.scale.setScalar(.045),o.position.set(.5,0,0),r.add(o);let a=new Be(nt.sphere,ut.wispCore);return a.scale.setScalar(.035),a.position.set(-.48,.06,0),r.add(a),i.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),{root:i,p:{coreG:e,shell:s,orbit:r},flash:km(i)}}function Q2(i,e){let t=new Pe;t.position.copy(e);let n=e.y;for(let u=0;u<6;u++){let h=u/6*Math.PI*2+Tt()*.3,f=ae(nt.rock,ut.stone,Math.sin(h)*.55,.07,Math.cos(h)*.55,t);f.scale.setScalar(.11+Tt()*.06),f.rotation.set(Tt()*3,Tt()*3,Tt()*3)}for(let u=0;u<3;u++){let h=u/3*Math.PI*2+.5,f=ae(nt.limb,ut.wood,Math.sin(h)*.16,.22,Math.cos(h)*.16,t);f.scale.set(.045,.26,.045),f.rotation.x=Math.cos(h)*.65,f.rotation.z=-Math.sin(h)*.65}let s=ae(nt.cone,ut.flameO,0,.42,0,t);s.scale.set(.2,.45,.2),s.castShadow=!1;let r=ae(nt.cone,ut.flameI,0,.38,0,t);r.scale.set(.11,.3,.11),r.castShadow=!1;let o=Tt()*Math.PI*2,a=ae(nt.tent,ut.tent,Math.sin(o)*2.6,0,Math.cos(o)*2.6,t);a.rotation.y=o+Math.PI/2+(Tt()-.5),a.position.y=i.getGroundHeight(e.x+a.position.x,e.z+a.position.z)-n;let l=o+2+Tt(),c=ae(nt.box,ut.wood,Math.sin(l)*1.9,.19,Math.cos(l)*1.9,t);return c.scale.setScalar(.38),c.rotation.y=Tt()*1.5,c.position.y=i.getGroundHeight(e.x+c.position.x,e.z+c.position.z)-n+.19,{group:t,flameO:s,flameI:r}}function Hm(i,e,t,n){let s={root:i.root,pos:i.root.position,hp:e.hp,maxHp:e.hp,alive:!0,radius:e.radius,name:t,isBoss:!1,damage(r,o){Gm(this,r,o)},_own:!0,_gone:!1,type:n,p:i.p,flash:i.flash,state:"patrol",t:0,animT:Tt()*6,phase:Tt()*Math.PI*2,yaw:Tt()*Math.PI*2,kb:new A,home:new A,staggerT:0,flashT:0,farAcc:0,colT:0,colCache:[],restT:0,hasTarget:!1,tx:0,tz:0,yOff:0,height:e.height,hitY:e.hitY,hitDone:!1,distP:999,camp:null,spot:null,hoverY:0,fireT:Tt()*1.5,dustT:0,_lastSwingId:-1};return s.root.rotation.y=s.yaw,s}function eA(i,e,t,n){let s=Hm(J2(),Ni,"\u30B4\u30D6\u30EA\u30F3","goblin");return s.pos.set(e,i.getGroundHeight(e,t),t),s.home.copy(s.pos),s.camp=n,s.restT=Tt()*2,n.members.push(s),zi.push(s),Yn.add(s.root),Ui(s,"idle",{fade:0}),s}function d_(i,e){e.clearedAt=-1;let t=2+Math.floor(Tt()*3);for(let n=0;n<t;n++){let s=n/t*Math.PI*2+Tt(),r=1.8+Tt()*1.8,o=zm(i,e.center.x+Math.sin(s)*r,e.center.z+Math.cos(s)*r,5);eA(i,o.x,o.z,e)}}function tA(i,e,t){let n=Hm($2(),Ll,"\u30DC\u30FC\u30F3\u30BD\u30EB\u30B8\u30E3\u30FC","skeleton");return n.pos.set(e,i.getGroundHeight(e,t),t),n.home.copy(n.pos),n.state="rise",n.yOff=-1.7,n.dustT=0,eu.push(n),zi.push(n),Yn.add(n.root),ps(n.pos.clone(),"dust",{count:14}),n}function p_(i,e){let t=Hm(j2(),uo,"\u9B54\u5C0E\u30A6\u30A3\u30B9\u30D7","wisp"),n=i.getGroundHeight(e.pos.x,e.pos.z);return t.pos.set(e.pos.x,n+1.5,e.pos.z),t.home.copy(e.pos),t.hoverY=n+1.5,t.state="hover",t.spot=e,e.enemy=t,zi.push(t),Yn.add(t.root),t}function nA(i){if(i.flashT<=0)for(let e of i.flash)e.m.material=e.m.isSkinnedMesh?ut.flashSkin:ut.flash;i.flashT=.08}function m_(i){for(let e of i.flash)e.m.material=e.mat}function Gm(i,e,t){let n=Dl;if(!n||!i||i._gone||!i.alive)return;if(!i._own){let r=!!i._dmgLock;if(r)i.hp=Math.max(0,(i.hp??1)-e),i.hp<=0&&(i.alive=!1);else if(typeof i.damage=="function"){i._dmgLock=!0;try{i.damage(e,t)}catch{}i._dmgLock=!1}else i.hp=Math.max(0,(i.hp??1)-e),i.hp<=0&&(i.alive=!1);if(!r){let o=Bm(i);o&&(o_(o.x,o.y+2.2,o.z,e),po.set(o.x,o.y+1.5,o.z),ps(po.clone(),"hit")),mo("hit");let a=!i.alive||i.hp<=0;n.emit("enemy-hit",{enemy:i,pos:o?o.clone():null,damage:e,killed:a}),a&&!i._killEmitted&&(i._killEmitted=!0,n.emit("enemy-killed",{enemy:i,pos:o?o.clone():null}))}return}if(i.hp=Math.max(0,i.hp-e),nA(i),t){let r=i.pos.x-t.x,o=i.pos.z-t.z,a=Math.hypot(r,o)||1,l=i.type==="wisp"?3.2:5;i.kb.x+=r/a*l,i.kb.z+=o/a*l}i.staggerT=.35,o_(i.pos.x,i.root.position.y+i.height+.35,i.pos.z,e),po.set(i.pos.x,i.root.position.y+i.hitY+.3,i.pos.z),ps(po.clone(),"hit"),mo("hit");let s=i.hp<=0;n.emit("enemy-hit",{enemy:i,pos:i.pos.clone(),damage:e,killed:s}),s?(i.alive=!1,i.state="dying",i.t=0,i.type==="goblin"&&Ui(i,"die",{fade:.1}),n.emit("enemy-killed",{enemy:i,pos:i.pos.clone()})):i.state!=="rise"&&i.state!=="dying"&&i.state!=="crumble"&&i.type!=="wisp"&&(i.state="stunned",i.t=0)}function wf(i,e,t,n){if(po.set(e.pos.x,e.root.position.y+.5,e.pos.z),ps(po.clone(),"death"),n&&mo("kill"),t&&pA(i,e.pos.x,e.root.position.y,e.pos.z),e.flashT>0&&m_(e),Yn.remove(e.root),e._gone=!0,e.alive=!1,e.camp){let s=e.camp.members.indexOf(e);s>=0&&e.camp.members.splice(s,1),e.camp.members.length===0&&(e.camp.clearedAt=i.time.elapsed)}if(e.spot&&(e.spot.enemy=null,e.spot.deadAt=i.time.elapsed),e.type==="skeleton"){let s=eu.indexOf(e);s>=0&&eu.splice(s,1)}}function iA(){for(let i=0;i<12;i++){let e=document.createElement("canvas");e.width=128,e.height=80;let t=e.getContext("2d"),n=new nl(e);n.colorSpace=rn;let s=new Qa({map:n,transparent:!0,depthTest:!1,depthWrite:!1}),r=new mc(s);r.scale.set(.9,.56,1),r.visible=!1,r.renderOrder=60,Yn.add(r),Om.push({sp:r,g:t,tex:n,mat:s,t:99,active:!1,last:""})}}function o_(i,e,t,n){let s=null,r=null,o=-1;for(let l of Om){if(!l.active){s=l;break}l.t>o&&(o=l.t,r=l)}if(s=s||r,!s)return;let a=n%1===0?String(n):n.toFixed(1);if(s.last!==a){let l=s.g;l.clearRect(0,0,128,80),l.font='700 46px Georgia, "Times New Roman", serif',l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle="rgba(30,24,18,0.7)",l.strokeText(a,64,42),l.fillStyle="#ffffff",l.fillText(a,64,42),s.tex.needsUpdate=!0,s.last=a}s.active=!0,s.t=0,s.sp.visible=!0,s.mat.opacity=1,s.sp.position.set(i+(Tt()-.5)*.4,e,t+(Tt()-.5)*.4)}function sA(i){for(let e of Om){if(!e.active)continue;e.t+=i,e.sp.position.y+=i*1.1*Math.max(.15,1-e.t);let t=1+.35*Math.exp(-e.t*9);e.sp.scale.set(.9*t,.56*t,1),e.mat.opacity=e.t<.35?1:Re(1-(e.t-.35)/.5,0,1),e.t>=.9&&(e.active=!1,e.sp.visible=!1)}}var a_=null;function rA(){let i=Ci(128,e=>{e.font="900 104px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=18,e.strokeStyle="rgba(150,30,24,0.95)",e.strokeText("!",64,66),e.fillStyle="#fff8ee",e.fillText("!",64,66)});a_=new Qa({map:i,transparent:!0,depthTest:!1,depthWrite:!1});for(let e=0;e<6;e++){let t=new mc(a_);t.visible=!1,t.renderOrder=61,Yn.add(t),Af.push({sp:t,e:null,t:0,active:!1})}}function oA(i){let e=Af.find(t=>!t.active)||Af[0];e.active=!0,e.t=0,e.e=i,e.sp.visible=!0,e.sp.position.set(i.pos.x,i.root.position.y+i.height+.6,i.pos.z)}function aA(i){for(let e of Af){if(!e.active)continue;if(e.t+=i,e.t>.5||!e.e||e.e._gone){e.active=!1,e.sp.visible=!1,e.e=null;continue}e.sp.position.set(e.e.pos.x,e.e.root.position.y+e.e.height+.6+e.t*.25,e.e.pos.z);let n=.72*Ze(0,.1,e.t)*(1+.3*Math.exp(-e.t*12));e.sp.scale.set(n,n,1)}}var ho=240;function lA(){let i=new Float32Array(ho*3),e=new Float32Array(ho*3),t=new Float32Array(ho*3),n=new Float32Array(ho),s=new Float32Array(ho);for(let c=0;c<ho;c++)i[c*3+1]=-9999;let r=new Ut;r.setAttribute("position",new Rt(i,3).setUsage(cs)),r.setAttribute("color",new Rt(e,3).setUsage(cs));let o=Ci(64,(c,u)=>{let h=c.createRadialGradient(u/2,u/2,0,u/2,u/2,u/2);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.4,"rgba(255,255,255,0.55)"),h.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=h,c.fillRect(0,0,u,u)}),a=new ko({size:.5,map:o,vertexColors:!0,transparent:!0,opacity:.9,blending:on,depthWrite:!1,sizeAttenuation:!0}),l=new Nr(r,a);l.frustumCulled=!1,l.renderOrder=20,Yn.add(l),sn={geo:r,pos:i,col:e,base:t,life:n,max:s,head:0}}function cA(i,e,t,n,s,r,o){let a=sn.head%ho;sn.head++,sn.pos[a*3]=i+(Tt()-.5)*.12,sn.pos[a*3+1]=e+(Tt()-.5)*.12,sn.pos[a*3+2]=t+(Tt()-.5)*.12,sn.base[a*3]=n,sn.base[a*3+1]=s,sn.base[a*3+2]=r,sn.life[a]=o,sn.max[a]=o}function uA(i){let e=!1;for(let t=0;t<ho;t++){if(sn.life[t]<=0)continue;e=!0,sn.life[t]-=i;let n=Math.max(0,sn.life[t]/sn.max[t]);sn.col[t*3]=sn.base[t*3]*n,sn.col[t*3+1]=sn.base[t*3+1]*n,sn.col[t*3+2]=sn.base[t*3+2]*n,sn.life[t]<=0&&(sn.pos[t*3+1]=-9999)}e&&(sn.geo.attributes.position.needsUpdate=!0,sn.geo.attributes.color.needsUpdate=!0)}function hA(){for(let i=0;i<10;i++){let e=new Pe,t=new Be(nt.sphere,ut.fireball);t.scale.setScalar(.16),t.castShadow=!1,e.add(t);let n=new Be(nt.sphere,ut.fireHalo);n.scale.setScalar(.3),n.castShadow=!1,e.add(n),e.visible=!1,Yn.add(e),Fm.push({g:e,core:t,halo:n,active:!1,vel:new A,life:0,emitT:0})}}function fA(i,e){let t=Fm.find(s=>!s.active);if(!t)return;t.active=!0,t.life=0,t.emitT=0,t.g.visible=!0,t.g.position.set(e.pos.x,e.root.position.y+.1,e.pos.z);let n=i.player.position;po.set(n.x-t.g.position.x,n.y+1-t.g.position.y,n.z-t.g.position.z).normalize(),t.vel.copy(po).multiplyScalar(11),mo("magic"),ps(t.g.position.clone(),"magic",{count:6})}function Dm(i,e){e&&ps(i.g.position.clone(),e),i.active=!1,i.g.visible=!1}function dA(i,e){let t=i.player.position;for(let n of Fm){if(!n.active)continue;n.life+=e,n.g.position.addScaledVector(n.vel,e);let s=n.g.position,r=1+Math.sin(i.time.elapsed*22+n.life*7)*.15;for(n.core.scale.setScalar(.16*r),n.halo.scale.setScalar(.3*(2-r)),n.emitT-=e;n.emitT<=0;)n.emitT+=.03,cA(s.x,s.y,s.z,.85,.5,1,.45);let o=t.x-s.x,a=t.y+1-s.y,l=t.z-s.z;if(o*o+a*a+l*l<1.2*1.2){try{i.player.damage(uo.dmg,s)}catch{}mo("burn"),Dm(n,"fire");continue}if(s.y<=i.getGroundHeight(s.x,s.z)+.15){Dm(n,"fire");continue}n.life>6&&Dm(n,"magic")}}function pA(i,e,t,n){if(Tt()<.4)l_(i,"heart",e,t,n);else{let s=1+Math.floor(Tt()*3);for(let r=0;r<s;r++)l_(i,"gem",e,t,n)}}function l_(i,e,t,n,s){if(fo.length>36){let o=fo.shift();Yn.remove(o.mesh)}let r=new Be(e==="heart"?nt.heart:nt.gem,e==="heart"?ut.heart:ut.gem);r.castShadow=!0,r.position.set(t,n+.7,s),Yn.add(r),fo.push({kind:e,mesh:r,vel:new A((Tt()-.5)*2.6,3.2+Tt()*1.6,(Tt()-.5)*2.6),age:0,grounded:!1,baseY:0,phase:Tt()*Math.PI*2,dieK:0})}function mA(i,e){let t=i.player.position;for(let n=fo.length-1;n>=0;n--){let s=fo[n],r=s.mesh;if(s.age+=e,s.age>r_){s.dieK+=e/.4;let u=Math.max(.001,1-s.dieK);r.scale.setScalar(u),s.dieK>=1&&(Yn.remove(r),fo.splice(n,1));continue}if(r.visible=s.age<r_-4||Math.sin(i.time.elapsed*16)>-.2,s.grounded)s.baseY=i.getGroundHeight(r.position.x,r.position.z)+.25,r.position.y=s.baseY+.1+Math.sin(i.time.elapsed*3+s.phase)*.08,r.rotation.y+=e*2.4;else{s.vel.y-=12*e,r.position.addScaledVector(s.vel,e);let u=i.getGroundHeight(r.position.x,r.position.z)+.25;r.position.y<=u&&s.vel.y<0&&(s.grounded=!0,s.baseY=u)}let o=t.x-r.position.x,a=t.z-r.position.z,l=t.y+.8-r.position.y,c=Math.sqrt(o*o+l*l+a*a);if(s.kind==="gem"){if(c<2.5&&c>.001){let u=(6.5*(1-c/2.8)+2.5)*e/c;r.position.x+=o*u,r.position.y+=l*u,r.position.z+=a*u}c<.85&&(i.player.gems+=1,i.emit("pickup",{kind:"gem",pos:r.position.clone()}),mo("pickup"),ps(r.position.clone(),"spark",{color:8257456,count:8}),Yn.remove(r),fo.splice(n,1))}else c<1.15&&(i.player.heal(1),i.emit("pickup",{kind:"heart",pos:r.position.clone()}),mo("heart"),ps(r.position.clone(),"heal"),Yn.remove(r),fo.splice(n,1))}}function dr(i,e,t){i.yaw=Math.atan2(e-i.pos.x,t-i.pos.z)}function Qc(i,e,t,n,s,r){let o=t-e.pos.x,a=n-e.pos.z,l=Math.hypot(o,a);if(l<.001)return!0;e.yaw=Math.atan2(o,a);let c=Math.min(s*r,l),u=e.pos.x+o/l*c,h=e.pos.z+a/l*c;return ms(i,u,h)?(e.pos.x=u,e.pos.z=h,!0):(e.hasTarget=!1,!1)}function gA(i,e){for(let t=0;t<6;t++){let n=Tt()*Math.PI*2,s=2+Tt()*6,r=e.home.x+Math.sin(n)*s,o=e.home.z+Math.cos(n)*s;if(ms(i,r,o)){e.tx=r,e.tz=o,e.hasTarget=!0,e.t=0;return}}e.restT=1.5}function xA(i,e,t){if(e.colT-=t,e.colT<=0){e.colT=.7,e.colCache.length=0;let n=i.colliders;if(n)for(let s=0;s<n.length&&e.colCache.length<6;s++){let r=n[s],o=r.x-e.pos.x,a=r.z-e.pos.z;o*o+a*a<100&&e.colCache.push(r)}}for(let n of e.colCache){let s=e.pos.x-n.x,r=e.pos.z-n.z,o=(n.radius||.5)+e.radius*.6,a=s*s+r*r;if(a<o*o&&a>1e-4){let l=Math.sqrt(a),c=o-l,u=e.pos.x+s/l*c,h=e.pos.z+r/l*c;ms(i,u,h)&&(e.pos.x=u,e.pos.z=h)}}}function c_(i,e){let t=i.p;i.animT+=e*2,t.body.position.y=.5+Math.sin(i.animT)*.015,t.body.position.x=0,t.legL.rotation.x=ze(t.legL.rotation.x,0,8,e),t.legR.rotation.x=ze(t.legR.rotation.x,0,8,e),t.armL.rotation.x=ze(t.armL.rotation.x,0,6,e),t.armR.rotation.x=ze(t.armR.rotation.x,0,6,e),t.body.rotation.x=ze(t.body.rotation.x,.04,6,e),t.head&&(t.head.rotation.y=Math.sin(i.animT*.35)*.3)}function yA(i,e,t){let n=i.p;i.animT+=e*9.5;let s=Math.sin(i.animT);n.legL.rotation.x=s*.85,n.legR.rotation.x=-s*.85,n.armL.rotation.x=ze(n.armL.rotation.x,-s*.5-.15,14,e),n.armR.rotation.x=ze(n.armR.rotation.x,s*.3-.2,14,e);let r=t.time.elapsed;n.armL.rotation.z=Math.sin(r*43+i.phase)*.045,n.armR.rotation.z=-Math.sin(r*47+i.phase)*.045,n.head.rotation.z=Math.sin(r*31+i.phase)*.05,n.body.position.y=.98+Math.abs(Math.cos(i.animT))*.06,n.body.rotation.x=ze(n.body.rotation.x,.22,8,e)}function Vm(i,e,t){e.t+=t;let n=e.p;if(e.type==="wisp"){let r=Math.min(1,e.t/.45);e.root.scale.setScalar(Math.max(.01,1-.9*r*r)),n.coreG.rotation.y+=t*14,e.t>=.45&&(ps(e.pos.clone(),"magic",{count:10}),wf(i,e,!0,!0));return}if(e.type==="goblin"){e.t>=.33&&wf(i,e,!0,!0);return}e.t<.16&&n.body?n.body.rotation.z=Math.sin(e.t*46)*.12:n.body&&(n.body.rotation.z=ze(n.body.rotation.z,0,10,t));let s=Ze(.12,.55,e.t);e.root.rotation.x=-s*1.45,e.yOff=-.06*s,e.t>=.68&&wf(i,e,!0,!0)}var g_=.42,_A=g_*.72;function vA(i,e,t,n){let s=i.player.position,r=i.player.hp>0;switch(e.t+=t,e.state){case"patrol":{if(r&&n<Ni.notice){e.state="alert",e.t=0,oA(e),mo("alert"),dr(e,s.x,s.z),Ui(e,"idle");break}if(Math.hypot(e.home.x-e.pos.x,e.home.z-e.pos.z)>20){Qc(i,e,e.home.x,e.home.z,Ni.run*.8,t),Lm(e,Ni.run*.8);break}if(e.restT>0){e.restT-=t,Ui(e,"idle");break}(!e.hasTarget||e.t>9)&&gA(i,e),e.hasTarget?(Qc(i,e,e.tx,e.tz,Ni.walk,t),Math.hypot(e.tx-e.pos.x,e.tz-e.pos.z)<.4&&(e.hasTarget=!1,e.restT=1+Tt()*2.5),Lm(e,Ni.walk)):Ui(e,"idle");break}case"alert":{dr(e,s.x,s.z),Ui(e,"idle"),e.t>=.5&&(e.state="chase",e.t=0);break}case"chase":{if(!r||n>30){e.state="patrol",e.t=0,e.hasTarget=!1;break}if(dr(e,s.x,s.z),n<=Ni.range){e.state="attack",e.t=0,e.hitDone=!1,Ui(e,"attack-melee-right",{fade:.12});break}Qc(i,e,s.x,s.z,Ni.run,t),Lm(e,Ni.run);break}case"attack":{if(dr(e,s.x,s.z),!e.hitDone&&e.t>=_A&&(e.hitDone=!0,r&&n<Ni.reach))try{i.player.damage(Ni.dmg,e.pos)}catch{}e.t>=g_&&(e.state="recover",e.t=0,Ui(e,"idle"));break}case"recover":{dr(e,s.x,s.z),e.t>=1&&(e.t=0,e.state=r?n<=Ni.range+.3?"attack":n<30?"chase":"patrol":"patrol",e.state==="attack"&&(e.hitDone=!1,Ui(e,"attack-melee-right",{fade:.12})));break}case"stunned":{Ui(e,"idle",{fade:.08}),e.t>=.3&&(e.state="chase",e.t=0);break}case"dying":Vm(i,e,t);return}}function MA(i,e,t,n){let s=e.p,r=i.player.position,o=i.player.hp>0;switch(e.t+=t,e.state){case"rise":{let a=Math.min(1,e.t/.8);e.yOff=-1.7*(1-a*a*(3-2*a)),e.dustT-=t,e.dustT<=0&&(e.dustT=.22,ps(e.pos.clone(),"dust",{count:6})),s.armL.rotation.x=-2.2*(1-a),s.armR.rotation.x=-2.2*(1-a),e.t>=.8&&(e.state="chase",e.t=0,e.yOff=0);break}case"chase":{if(!o){c_(e,t);break}if(dr(e,r.x,r.z),n<=Ll.range){e.state="windup",e.t=0;break}n<100?(Qc(i,e,r.x,r.z,Ll.speed,t),yA(e,t,i)):c_(e,t);break}case"windup":{dr(e,r.x,r.z);let a=Math.min(1,e.t/.45);s.armR.rotation.x=ze(s.armR.rotation.x,-2.9,18,t),s.armR.rotation.z=ze(s.armR.rotation.z,.4,12,t),s.body.rotation.x=ze(s.body.rotation.x,-.1,10,t),s.body.position.x=Math.sin(i.time.elapsed*50)*.012*a,e.t>=.45&&(e.state="swing",e.t=0,e.hitDone=!1);break}case"swing":{let a=Math.min(1,e.t/.14);if(s.armR.rotation.x=ye(-2.9,1.15,a*(2-a)),s.armR.rotation.z=ye(.4,-.15,a),s.body.rotation.x=ye(-.1,.4,a),s.body.position.x=0,!e.hitDone&&e.t>=.08&&(e.hitDone=!0,o&&n<Ll.reach))try{i.player.damage(Ll.dmg,e.pos)}catch{}e.t>=.24&&(e.state="recover",e.t=0);break}case"recover":{s.armR.rotation.x=ze(s.armR.rotation.x,-.2,8,t),s.armR.rotation.z=ze(s.armR.rotation.z,0,8,t),s.body.rotation.x=ze(s.body.rotation.x,.15,8,t),dr(e,r.x,r.z),e.t>=.7&&(e.state="chase",e.t=0);break}case"stunned":{s.body.rotation.x=ze(s.body.rotation.x,-.45,14,t),e.t>=.18&&(e.state="chase",e.t=0);break}case"crumble":{let a=Math.min(1,e.t/.6);e.yOff=-1.3*a*a,e.root.scale.set(1-a*.35,Math.max(.05,1-a*.85),1-a*.35),e.root.rotation.z=a*.4,e.dustT-=t,e.dustT<=0&&(e.dustT=.2,ps(e.pos.clone(),"dust",{count:4})),e.t>=.6&&wf(i,e,!1,!1);break}case"dying":Vm(i,e,t);return;default:{e.state="chase";break}}}function bA(i,e,t,n){let s=e.p,r=i.player.position,o=i.player.hp>0,a=i.time.elapsed;if(e.t+=t,e.state==="dying"){Vm(i,e,t);return}let l=i.getGroundHeight(e.pos.x,e.pos.z);e.hoverY=ze(e.hoverY,l+1.5,3,t),e.root.position.y=e.hoverY+Math.sin(a*1.7+e.phase)*.25,s.orbit.rotation.y+=t*2.6;let c=1+Math.sin(a*5+e.phase)*.1;s.shell.scale.setScalar(.4*c);let u=Ze(uo.fireCd-.4,uo.fireCd,e.fireT);if(s.coreG.scale.setScalar(1+u*.5+Math.sin(a*9+e.phase)*.05),o&&n<45){dr(e,r.x,r.z);let h=0,f=0,d=0,g=(r.x-e.pos.x)/(n||1),x=(r.z-e.pos.z)/(n||1);if(n<uo.near)h=-g,f=-x,d=3;else if(n>uo.far)h=g,f=x,d=2.2;else{let _=Math.sin(a*.35+e.phase)>0?1:-1;h=-x*_,f=g*_,d=1.2}let m=e.pos.x+h*d*t,p=e.pos.z+f*d*t;ms(i,m,p)&&(e.pos.x=m,e.pos.z=p),n<32&&(e.fireT+=t,e.fireT>=uo.fireCd&&(e.fireT=Tt()*.3,fA(i,e)))}else if(e.fireT=Math.min(e.fireT,uo.fireCd-.6),Math.hypot(e.home.x-e.pos.x,e.home.z-e.pos.z)>6)Qc(i,e,e.home.x,e.home.z,1.5,t);else{let f=e.pos.x+Math.sin(a*.5+e.phase)*.5*t,d=e.pos.z+Math.cos(a*.4+e.phase)*.5*t;ms(i,f,d)&&(e.pos.x=f,e.pos.z=d)}}function EA(i,e,t){let n=i.player.position,s=Math.hypot(n.x-e.pos.x,n.z-e.pos.z);e.distP=s;let r=s<q2;if(e.root.visible!==r&&(e.root.visible=r),s>W2&&e.state!=="dying"&&e.state!=="crumble"){if(e.farAcc+=t,e.farAcc<X2)return;t=Math.min(e.farAcc,.5),e.farAcc=0}if(e.flashT>0&&(e.flashT-=t,e.flashT<=0&&m_(e)),e.kb.lengthSq()>4e-4){let o=e.pos.x+e.kb.x*t,a=e.pos.z+e.kb.z*t;ms(i,o,a)&&(e.pos.x=o,e.pos.z=a),e.kb.multiplyScalar(Math.max(0,1-7*t))}e.staggerT>0&&(e.staggerT-=t),e.type==="goblin"?vA(i,e,t,s):e.type==="skeleton"?MA(i,e,t,s):bA(i,e,t,s),!e._gone&&(e.type!=="wisp"&&(e.root.position.y=i.getGroundHeight(e.pos.x,e.pos.z)+e.yOff,s<100&&e.alive&&xA(i,e,t)),e.root.rotation.y=Gn(e.root.rotation.y,e.yaw,10,t))}function SA(i){Pl.length=0;for(let e of zi)e._own&&e.alive&&e.type!=="wisp"&&e.distP<90&&Pl.push(e);for(let e=0;e<Pl.length;e++)for(let t=e+1;t<Pl.length;t++){let n=Pl[e],s=Pl[t],r=s.pos.x-n.pos.x,o=s.pos.z-n.pos.z,a=n.radius+s.radius-.35,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l),u=(a-c)*.5,h=r/c*u,f=o/c*u;ms(i,n.pos.x-h,n.pos.z-f)&&(n.pos.x-=h,n.pos.z-=f),ms(i,s.pos.x+h,s.pos.z+f)&&(s.pos.x+=h,s.pos.z+=f)}}}function TA(i,e){let t=i.player.position,n=i.time.elapsed;for(let s=0;s<Nm.length;s++){let r=Nm[s],o=Math.hypot(t.x-r.center.x,t.z-r.center.z),a=o<170;r.props.group.visible!==a&&(r.props.group.visible=a),a&&(r.props.flameO.scale.set(.2*(1+Math.sin(n*11+s*2.1)*.12),.45*(1+Math.sin(n*13.7+s)*.2),.2*(1+Math.cos(n*10.3+s)*.12)),r.props.flameI.scale.set(.11*(1+Math.sin(n*17+s)*.18),.3*(1+Math.sin(n*19.3+s*1.7)*.25),.11)),Sf<=0&&r.members.length===0&&r.clearedAt>=0&&n-r.clearedAt>u_&&o>h_&&d_(i,r)}}function wA(i,e){let t=i.time.isNight;if(t&&i.state==="playing"&&i.player.hp>0&&(Pm-=e,Pm<=0&&(Pm=2.2+Tt()*1.5,eu.length<Ll.max))){let n=i.player.position;for(let s=0;s<8;s++){let r=Tt()*Math.PI*2,o=30+Tt()*30,a=n.x+Math.sin(r)*o,l=n.z+Math.cos(r)*o,c="plains";try{c=i.world.getBiome(a,l)}catch{}if(c==="plains"&&ms(i,a,l)){tA(i,a,l);break}}}if(Um&&!t)for(let n of eu)n.state!=="crumble"&&n.state!=="dying"&&(n.alive=!1,n.state="crumble",n.t=0);Um=t}function AA(i){let e=i.player.position,t=i.time.elapsed;for(let n of f_)!n.enemy&&t-n.deadAt>u_&&Math.hypot(e.x-n.pos.x,e.z-n.pos.z)>h_&&p_(i,n)}function RA(i){let e=null;try{e=i.player.getAttackHit?i.player.getAttackHit():null}catch{}if(!e||!e.pos)return;let t=e.radius||1;for(let n of zi){if(!n.alive||n._gone||n._lastSwingId===e.swingId)continue;let s=Bm(n);if(!s)continue;let r=e.pos.x-s.x,o=e.pos.z-s.z,a=t+(n.radius||.6);if(r*r+o*o>a*a)continue;let l=n._own?n.root.position.y+n.hitY:s.y,c=n._own?2.4:4.5;Math.abs(e.pos.y-l)>c||(n._lastSwingId=e.swingId,Gm(n,e.damage??1,i.player.position))}}async function CA(i){Dl=i,Z2(),Yn=new Pe,Yn.name="combat",i.scene.add(Yn),iA(),rA(),lA(),hA();let e=await Ii("assets/kenney/characters/character-orc.glb");Pi(e.scene,K2);let{size:t}=Ic(e.scene),n=new Map(e.animations.map(a=>[a.name,a]));Tf={scene:e.scene,clipMap:n,scale:Ni.height/(t.y||1)};let s=[[70,150],[-130,90],[150,-40],[410,190],[500,100],[-340,330],[470,-350]];for(let[a,l]of s){let c=zm(i,a,l,14),u=new A(c.x,i.getGroundHeight(c.x,c.z),c.z),h={center:u,members:[],clearedAt:-1,props:Q2(i,u)};Yn.add(h.props.group),Nm.push(h),d_(i,h)}let r=[[505,-390],[585,-470],[530,-515],[612,-408]],o=[];try{for(let a=-880;a<=880;a+=80)for(let l=-520;l<=880;l+=80)i.world.getBiome(a,l)==="ruins"&&o.push([a,l])}catch{}for(let a of o){if(r.length>=8)break;r.every(([l,c])=>Math.hypot(l-a[0],c-a[1])>60)&&r.push(a)}for(let[a,l]of r){let c=zm(i,a,l,10),u={pos:new A(c.x,0,c.z),enemy:null,deadAt:-999};f_.push(u),p_(i,u)}Um=i.time.isNight,i.combat={enemies:zi,nearestTargetable(a,l=32){if(!a)return null;let c=null,u=l;for(let h of zi){if(!h.alive||h._gone)continue;let f=Bm(h);if(!f)continue;let d=a.distanceTo(f);d<=u&&(u=d,c=h)}return c},registerEnemy(a){a&&zi.indexOf(a)<0&&zi.push(a)},damageEnemy(a,l,c){Gm(a,l,c)}}}function IA(i,e){if(!(!i.combat||!i.player)&&i.state!=="shrine"){Sf-=e,TA(i,e),Sf<=0&&(Sf=1,AA(i)),wA(i,e),ut.wispCore.emissiveIntensity=1.9+Math.sin(i.time.elapsed*8.5)*.55;for(let t=zi.length-1;t>=0;t--){let n=zi[t];n._own&&(EA(i,n,e),n._gone&&zi.splice(t,1))}SA(i);for(let t of zi)t.type==="goblin"&&t.p&&t.p.mixer&&t.p.mixer.update(e);RA(i),dA(i,e),mA(i,e),sA(e),aA(e),uA(e)}}var Pf={};bs(Pf,{init:()=>qA,update:()=>uR});var ji=3399880,PA=6744790,xo=15777354,Wm=13214247,v_=[{x:180,z:80,name:"\u529B\u306E\u7960"},{x:-360,z:260,name:"\u6C34\u93E1\u306E\u7960"},{x:430,z:40,name:"\u6A39\u970A\u306E\u7960"},{x:430,z:-300,name:"\u70C8\u706B\u306E\u7960"}],LA=3e3,DA=3e3,NA=300,x_=4,y_=1.5,M_=[7334100,8374527,9431208,16747082],go="assets/kenney/dungeon/",UA=6/1.1,zA=2.3,FA=new A(1.8,UA,1.8),OA=new A(1,2.4,1),BA=1.4,kA=1.3,HA=1.15,GA=2.6,VA=1.15;async function WA(){let[i,e,t,n,s,r,o,a]=await Promise.all([Ii(go+"chest.glb"),Ii(go+"column.glb"),Ii(go+"barrel.glb"),Ii(go+"rocks.glb"),Ii(go+"stones.glb"),Ii(go+"wall-half.glb"),Ii(go+"banner.glb"),Ii(go+"trap.glb")]);Pi(i.scene,11568474);let l=i.scene.getObjectByName("lid");l&&Pi(l,Wm,{emissive:new se(Wm),emissiveIntensity:.22}),Pi(e.scene,9078135),Pi(t.scene,8017720),Pi(n.scene,7301724),Pi(s.scene,7498589),Pi(r.scene,4998969);let c=a.scene.getObjectByName("spikes");return Pi(a.scene,3945003),c&&Pi(c,9211014),{chest:i.scene,column:e.scene,barrel:t.scene,rocks:n.scene,stones:s.scene,wallHalf:r.scene,banner:o.scene,trap:a.scene}}function sa(i,e,{x:t=0,y:n=0,z:s=0,ry:r=0,scale:o=1}={},a=null){let l=e.clone(!0);return l.position.set(t,n,s),l.rotation.y=r,typeof o=="number"?l.scale.setScalar(o):l.scale.copy(o),l.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),a!=null&&Pi(l,a),i.add(l),l}var ue=null,Nn=new A,XA=new A;function Je(i,e,t,n,s,r,o=0){let a=new lt(i,e,t);return o&&a.rotateY(o),a.translate(n,s,r),a}function Sn(i,e,t,n,s,r,o){let a=new Jt(i,e,t,n);return a.translate(s,r,o),a}function ra(i,e,t,n=24){let s=new ls(i,e,6,n);return s.rotateX(Math.PI/2),s.translate(0,t,0),s}function Un(i){let e=or(i,!1);for(let t of i)t.dispose();return e}function Gt(i,e,t,n=!0){let s=new Be(e,t);return s.castShadow=n,s.receiveShadow=n,i.add(s),s}async function qA(i){ue={ctx:i,api:null,exts:[],rooms:[],prompt:null,savedGround:null,savedBounds:null,added:[],inside:!1,seq:null,enterCool:0},ue.M={extStone:tt(9078135),wall:tt(4998969),floor:tt(5985606),dark:tt(2828323),door:tt(7433048),mov:tt(8222314),wood:tt(7227951),gold:Ht(Wm,.35),glowAdd:new Lt({color:ji,transparent:!0,opacity:.55,blending:on,depthWrite:!1}),padAdd:new Lt({color:ji,transparent:!0,opacity:.8,blending:on,depthWrite:!1}),beamAdd:new Lt({color:11466216,transparent:!0,opacity:0,blending:on,depthWrite:!1,side:un}),orb:Ht(ji,2.3),candle:Ht(PA,2,{transparent:!0,opacity:.92})};try{ue.assets=await WA()}catch(e){console.warn("[shrines] \u88C5\u98FE\u30E2\u30C7\u30EB\u306E\u8AAD\u8FBC\u306B\u5931\u6557\u3001\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u88C5\u98FE\u3067\u7D9A\u884C",e),ue.assets=null}YA(i),KA(i),ue.api={list:v_.map(e=>({pos:new A(e.x,i.world.getHeight(e.x,e.z),e.z),name:e.name,completed:!1})),completedCount:0,active:-1},i.shrines=ue.api,i.on("state",({from:e,to:t})=>{ue.inside&&e==="shrine"&&(t==="gameover"||t==="title")&&E_(i)})}function YA(i){let e=[];e.push(Sn(6.4,6.9,.55,8,0,.28,0)),e.push(Sn(5.3,5.8,.55,8,0,.82,0)),e.push(Sn(4.4,4.9,.5,8,0,1.32,0)),e.push(Sn(3.1,3.4,3,8,0,3.07,0)),e.push(Je(.5,3.2,.5,-1.45,3.15,3)),e.push(Je(.5,3.2,.5,1.45,3.15,3)),e.push(Je(3.7,.55,.72,0,4.95,3)),e.push(Sn(4.2,4.2,.18,8,0,4.62,0));let t=[new $(4.2,0),new $(3.55,.38),new $(2.75,1.05),new $(1.9,1.85),new $(1.1,2.55),new $(.5,3.05),new $(.05,3.42)],n=new Eh(t,8);n.translate(0,4.7,0),e.push(n);for(let f of[-1,1])e.push(Sn(.24,.36,1.15,6,f*3.4,.58,5.2)),e.push(Sn(.58,.4,.32,6,f*3.4,1.3,5.2));let s=Un(e),r=[];r.push(Je(2,2.7,.14,0,2.78,3.02)),r.push(ra(3.42,.07,4.25)),r.push(ra(4.58,.05,1.62)),r.push(ra(4.24,.05,4.56));for(let f=1;f<=7;f++){let d=Je(.15,1.9,.1,0,3,3.02);d.rotateY(f*Math.PI/4),r.push(d)}let o=new Ur(1.25,20);o.rotateX(-Math.PI/2),o.translate(0,.06,5.2),r.push(o);let a=new xn(.36,10,8);a.translate(0,8.3,0),r.push(a),r.push(ra(.52,.05,7.9,16));let l=Un(r),c=[];for(let f of[-1,1])c.push(Sn(.02,.32,.85,6,f*3.4,1.9,5.2)),c.push(Sn(.01,.16,.5,5,f*3.4,2.28,5.2));let u=Un(c),h=new Jt(.24,.36,56,8,1,!0);h.translate(0,32,0);for(let f=0;f<4;f++){let d=v_[f],g=i.world.getHeight(d.x,d.z),x=Math.hypot(d.x,d.z)||1,m=-d.x/x,p=-d.z/x,_=Math.atan2(m,p),M=new Pe;M.position.set(d.x,g,d.z),M.rotation.y=_;let y=Ht(ji,1.3),L=Ht(6089435,1.8,{transparent:!0,opacity:.9}),T=new Lt({color:ji,transparent:!0,opacity:.1,blending:on,depthWrite:!1,side:un});Gt(M,s,ue.M.extStone),Gt(M,l,y,!1),Gt(M,u,L,!1),M.add(new Be(h,T)),i.scene.add(M),i.colliders.push({x:d.x,z:d.z,radius:5.9,height:9});for(let w of[-1,1]){let I=w*3.4,E=5.2;i.colliders.push({x:d.x+I*Math.cos(_)+E*Math.sin(_),z:d.z-I*Math.sin(_)+E*Math.cos(_),radius:.62,height:2.2})}ue.exts.push({group:M,runeMat:y,flameMat:L,beaconMat:T,doorPos:new A(d.x+m*3.1,g,d.z+p*3.1),exitPos:new A(d.x+m*7.6,g,d.z+p*7.6),exitHeading:Math.atan2(m,p)})}}function ZA(i){let e=ue.exts[i];e.runeMat.color.setHex(xo),e.runeMat.emissive.setHex(xo),e.flameMat.color.setHex(16762965),e.flameMat.emissive.setHex(16762965),e.beaconMat.color.setHex(xo)}function KA(i){for(let e=0;e<4;e++){let t=new A(LA,0,DA+e*NA),n=new Pe;n.position.copy(t),n.visible=!1,i.scene.add(n);let s=e===3?-16.4:-20.4,r={index:e,group:n,origin:t,northZ:s,bounds:{minX:t.x-12.55,maxX:t.x+12.55,minZ:t.z+s+.85,maxZ:t.z+16.05},colliders:[],doorCol:null,door:null,doorOpen:!1,doorAnim:0,doorDelay:0,chest:null,chestWorld:null,solved:!1,p:null,entranceWorld:new A(t.x,0,t.z+11),padWorld:new A(t.x,0,t.z+13.8),ground:null,update:null,resetPuzzle:null,promptOf:null};JA(i,r),e===0?tR(i,r):e===1?sR(i,r):e===2?oR(i,r):lR(i,r);for(let o of[-10.5,10.5])for(let a of[9,0,-8.5])e===3&&a!==9||r.colliders.push({x:t.x+o,z:t.z+a,radius:.95,height:6});ue.rooms.push(r)}}function JA(i,e){let t=e.index,n=e.group,s=ue.M,r=e.northZ,o=[],a=[],l=[];t===2?(o.push(Je(26,1,19,0,-.5,7.5)),o.push(Je(26,1,13,0,-.5,-13.5)),a.push(Je(26,.5,5.4,0,-6.75,-4.5)),a.push(Je(26,5.4,.45,0,-3.5,-1.78)),a.push(Je(26,5.4,.45,0,-3.5,-7.22))):t===3?(o.push(Je(26,1,11,0,-.5,11.5)),o.push(Je(8,1.7,4,-6,-.85,-14)),o.push(Je(8,1.7,4,6,-.85,-14)),a.push(Je(26,.4,23.4,0,-3.1,-5.5))):o.push(Je(26,1,37,0,-.5,-1.5));let c=16.9-r,u=(16.9+r)/2;if(o.push(Je(27.6,6,.8,0,3,16.9)),o.push(Je(27.6,6,.8,0,3,r)),o.push(Je(.8,6,c,-13.4,3,u)),o.push(Je(.8,6,c,13.4,3,u)),t!==3){o.push(Je(11.35,6,.9,-7.33,3,-10)),o.push(Je(11.35,6,.9,7.33,3,-10)),o.push(Je(4.2,1.5,.9,0,5.25,-10));for(let T of[-1,1])for(let w of[2.6,4.8,7,9.2,11.4])e.colliders.push({x:e.origin.x+T*w,z:e.origin.z-10,radius:1.15,height:6})}for(let T of[-10.5,10.5])for(let w of[9,0,-8.5]){if(t===3&&w!==9)continue;ue.assets?sa(n,ue.assets.column,{x:T,y:0,z:w,scale:FA}):(o.push(Sn(.5,.66,6,7,T,2.5,w)),o.push(Je(1.5,.35,1.5,T,5.62,w)));let I=ra(.62,.05,4.7,16);I.translate(T,0,w),l.push(I)}l.push(Je(.08,.1,c-1,-12.96,2.6,u)),l.push(Je(.08,.1,c-1,12.96,2.6,u)),l.push(Je(25.6,.1,.08,0,2.6,r+.44)),l.push(Je(25.6,.1,.08,0,2.6,16.46)),l.push(Je(26.4,.14,.14,0,-.95,16.9)),l.push(Je(26.4,.14,.14,0,-.95,r)),l.push(Je(.14,.14,c,-13.2,-.95,u)),l.push(Je(.14,.14,c,13.2,-.95,u)),Gt(n,Un(o),t===3?s.wall:s.floor),a.length&&Gt(n,Un(a),s.dark,!1),Gt(n,Un(l),s.glowAdd,!1);let h=new Bn(26,37);h.rotateX(-Math.PI/2),h.translate(0,.03,-1.5);let f=new Lt({map:jA(t),transparent:!0,opacity:.9,blending:on,depthWrite:!1});Gt(n,h,f,!1);let d=new Bn(5,5);d.translate(0,3.1,r+.46),Gt(n,d,QA(),!1);let g=M_,x=new rr(g[t],60,36,2);x.position.set(0,6,t===3?-4:2),n.add(x);let m=new rr(16767392,26,18,2);m.position.set(t===3?6:0,4.2,t===3?-13:-15),n.add(m);let p=new sl(.95,1.3,28);p.rotateX(-Math.PI/2),p.translate(0,.04,13.8);let _=new Ur(.52,20);_.rotateX(-Math.PI/2),_.translate(0,.04,13.8),Gt(n,Un([p,_]),s.padAdd,!1);let M=new Jt(.9,1.15,5.5,12,1,!0);if(M.translate(0,2.8,13.8),Gt(n,M,new Lt({color:ji,transparent:!0,opacity:.05,blending:on,depthWrite:!1,side:un}),!1),t!==3){let T=Gt(n,new lt(3.3,4.6,.55),s.door);T.position.set(0,2.3,-10);let w=new Be(Je(1.7,2.7,.62,0,.1,0),s.glowAdd);T.add(w),e.door=T,e.doorCol={x:e.origin.x,z:e.origin.z-10,radius:1.75,height:5.5}}let y=t===3?6:0,L=t===3?-14:-15.5;Gt(n,Sn(1.7,1.95,.4,8,y,.2,L),s.floor),e.chest=eR(n,y,L,t===3?-Math.PI/2:0),e.chestWorld=new A(e.origin.x+y,.6,e.origin.z+L),e.colliders.push({x:e.origin.x+y,z:e.origin.z+L,radius:.85,height:1.6}),ue.assets&&$A(e,t)}function $A(i,e){let t=i.group;for(let n of[-1,1])sa(t,ue.assets.barrel,{x:n*11.5,y:0,z:13.4,ry:n*.4,scale:BA}),sa(t,ue.assets.rocks,{x:n*10.6,y:0,z:15.3,ry:n*1.1,scale:kA}),sa(t,ue.assets.stones,{x:n*9.4,y:0,z:11.6,ry:-n*.6,scale:HA});for(let n of[-1,1])for(let s of[7.6,12.4])sa(t,ue.assets.wallHalf,{x:n*12.75,y:0,z:s,ry:n>0?Math.PI:0,scale:OA});if(e!==3)for(let n of[-1,1])sa(t,ue.assets.banner,{x:n*4.1,y:1.5,z:-9.52,ry:0,scale:GA},M_[e])}function jA(i){return Ci(512,(e,t)=>{let n=l=>(l+13)/26*t,s=l=>(l+20)/37*t;e.fillStyle="#000",e.fillRect(0,0,t,t);let r=(l,c,u,h=.5,f=2)=>{e.strokeStyle=`rgba(90,235,215,${h})`,e.lineWidth=f,e.beginPath(),e.ellipse(n(l),s(c),u/26*t,u/37*t,0,0,Math.PI*2),e.stroke()},o=i===3?11:2;r(0,o,4.5,.55,3),r(0,o,3.6,.35,2),r(0,o,1.2,.4,2),e.fillStyle="rgba(90,235,215,0.5)";for(let l=0;l<8;l++){let c=l*Math.PI/4;e.fillRect(n(Math.sin(c)*4)-3,s(o+Math.cos(c)*2.8)-3,6,6)}if(r(0,13.8,2,.4,2),i===0){e.strokeStyle="rgba(90,235,215,0.28)",e.lineWidth=1.5;for(let l=-4;l<=4;l++){let c=(l+.5)*1.6;e.beginPath(),e.moveTo(n(-5.6),s(1+c)),e.lineTo(n(5.6),s(1+c)),e.stroke(),e.beginPath(),e.moveTo(n(c),s(1-5.6)),e.lineTo(n(c),s(1+5.6)),e.stroke()}}else if(i===1)for(let l of[-4.5,0,4.5])r(l,-3.4,1,.5,2);else i===2&&(r(-5,6,1.3,.55,2),r(-3.5,-8.6,1.3,.55,2));e.fillStyle="rgba(90,235,215,0.4)",e.font=`${Math.floor(t*.045)}px serif`;let a="\u53E4\u306E\u529B\u3053\u3053\u306B\u7720\u308B";for(let l=0;l<8;l++){let c=l*Math.PI/4+.4;e.fillText(a[l],n(Math.sin(c)*10.5),s(o+Math.cos(c)*5.5))}})}var Cf=null;function QA(){if(Cf)return Cf;let i=Ci(256,(e,t)=>{e.fillStyle="#000",e.fillRect(0,0,t,t),e.strokeStyle="rgba(110,240,220,0.85)",e.lineWidth=5,e.beginPath(),e.arc(t/2,t/2,t*.38,0,Math.PI*2),e.stroke(),e.lineWidth=3,e.beginPath(),e.arc(t/2,t/2,t*.3,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(t/2,t*.2),e.lineTo(t*.68,t/2),e.lineTo(t/2,t*.8),e.lineTo(t*.32,t/2),e.closePath(),e.stroke(),e.fillStyle="rgba(110,240,220,0.9)",e.beginPath(),e.moveTo(t/2,t*.38),e.lineTo(t*.58,t/2),e.lineTo(t/2,t*.62),e.lineTo(t*.42,t/2),e.closePath(),e.fill()});return Cf=new Lt({map:i,transparent:!0,opacity:.85,blending:on,depthWrite:!1}),Cf}function eR(i,e,t,n){let s=ue.M,r=new Pe;r.position.set(e,.4,t),r.rotation.y=n,i.add(r);let o;if(ue.assets){let u=ue.assets.chest.clone(!0).children[0];u.scale.setScalar(zA),u.position.set(0,0,0),u.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),r.add(u),o=u.getObjectByName("lid")}else Gt(r,Je(1.15,.6,.75,0,.3,0),s.wood),Gt(r,Un([Je(.14,.64,.79,-.3,.3,0),Je(.14,.64,.79,.3,.3,0),Je(.2,.24,.08,0,.52,.38)]),s.gold),o=new Pe,o.position.set(0,.6,-.375),r.add(o),Gt(o,Je(1.15,.3,.75,0,.15,.375),s.wood),Gt(o,Un([Je(.14,.34,.79,-.3,.15,.375),Je(.14,.34,.79,.3,.15,.375)]),s.gold);let a=new Go(.3,0);a.scale(1,1.4,1);let l=new Be(a,s.orb);l.position.set(0,.5,0),l.visible=!1,r.add(l);let c=new Be(new Jt(.5,.72,7.5,12,1,!0),s.beamAdd);return c.position.set(0,3.9,0),c.visible=!1,r.add(c),{group:r,lid:o,orb:l,beam:c,opened:!1}}var If=1.6;function gs(i){return i*If}function xs(i){return 1+i*If}function tR(i,e){let t=e.group,n=e.p={cellX:2,cellZ:2,startX:2,startZ:2,swX:-2,swZ:-2,obstacles:[[0,0],[-1,1],[1,2]],grabbed:!1,slide:null,cool:0},s=[];for(let[l,c]of n.obstacles)s.push(Je(1.35,1.5,1.35,gs(l),.75,xs(c))),s.push(Je(1.05,.4,1.05,gs(l),1.65,xs(c))),e.colliders.push({x:e.origin.x+gs(l),z:e.origin.z+xs(c),radius:.95,height:1.9});Gt(t,Un(s),ue.M.wall),n.swMat=Ht(ji,.45),Gt(t,new lt(1.45,.1,1.45),n.swMat,!1).position.set(gs(n.swX),.05,xs(n.swZ));let o=new Pe;Gt(o,new lt(1.2,1.2,1.2),ue.M.mov);let a=[];for(let l=0;l<4;l++){let c=Je(.46,.46,.06,0,0,.61);c.rotateZ(Math.PI/4),c.rotateY(l*Math.PI/2),a.push(c)}Gt(o,Un(a),ue.M.glowAdd,!1),o.position.set(gs(n.cellX),.6,xs(n.cellZ)),t.add(o),n.block=o,n.blockCol={x:e.origin.x+o.position.x,z:e.origin.z+o.position.z,radius:.8,height:1.4},e.colliders.push(n.blockCol),e.ground=()=>0,e.resetPuzzle=()=>{n.cellX=n.startX,n.cellZ=n.startZ,n.grabbed=!1,n.slide=null,n.block.position.set(gs(n.cellX),.6,xs(n.cellZ)),n.blockCol.x=e.origin.x+n.block.position.x,n.blockCol.z=e.origin.z+n.block.position.z,n.swMat.emissiveIntensity=.45,n.swMat.color.setHex(ji),n.swMat.emissive.setHex(ji)},e.update=(l,c)=>iR(l,e,c),e.promptOf=l=>{if(e.solved)return null;if(n.grabbed)return"E: \u96E2\u3059 / WASD: \u62BC\u3057\u5F15\u304D";let c=l.player.position,u=c.x-(e.origin.x+n.block.position.x),h=c.z-(e.origin.z+n.block.position.z);return u*u+h*h<1.75*1.75?"E: \u77F3\u584A\u3092\u63B4\u3080":null}}function nR(i,e,t){if(Math.abs(e)>3||Math.abs(t)>3)return!0;for(let[n,s]of i.obstacles)if(n===e&&s===t)return!0;return!1}function iR(i,e,t){let n=e.p,s=i.player;if(n.cool=Math.max(0,n.cool-t),n.slide){let r=n.slide;r.t=Math.min(1,r.t+t/.5);let o=Ze(0,1,r.t),a=ye(gs(r.fx),gs(r.tx),o),l=ye(xs(r.fz),xs(r.tz),o);n.block.position.set(a,.6,l),n.blockCol.x=e.origin.x+a,n.blockCol.z=e.origin.z+l,s.position.x=r.pfx+(gs(r.tx)-gs(r.fx))*o,s.position.z=r.pfz+(xs(r.tz)-xs(r.fz))*o,s.position.y=0,r.t>=1&&(n.cellX=r.tx,n.cellZ=r.tz,n.slide=null,n.cool=.06,!e.solved&&n.cellX===n.swX&&n.cellZ===n.swZ&&(e.solved=!0,n.grabbed=!1,s.setFrozen(!1),n.swMat.emissiveIntensity=2.2,n.swMat.color.setHex(xo),n.swMat.emissive.setHex(xo),Nn.set(e.origin.x+a,1.4,e.origin.z+l),i.effects.burst(Nn,"magic"),i.audio.play("switch"),e.doorDelay=.5));return}if(!e.solved){if(n.grabbed){if(i.input.justPressed("KeyE")){n.grabbed=!1,s.setFrozen(!1);return}if(n.cool>0)return;i.camera.getWorldDirection(Ae.v1);let r=0,o=0;Math.abs(Ae.v1.x)>Math.abs(Ae.v1.z)?r=Math.sign(Ae.v1.x):o=Math.sign(Ae.v1.z);let a=-o,l=r,c=i.input.keys,u=0,h=0;if(c.has("KeyW")||c.has("ArrowUp")?(u=r,h=o):c.has("KeyS")||c.has("ArrowDown")?(u=-r,h=-o):c.has("KeyD")||c.has("ArrowRight")?(u=a,h=l):(c.has("KeyA")||c.has("ArrowLeft"))&&(u=-a,h=-l),u===0&&h===0)return;let f=n.cellX+u,d=n.cellZ+h;if(nR(n,f,d))return;let g=s.position.x-e.origin.x+u*If,x=s.position.z-e.origin.z+h*If;if(g<-11.6||g>11.6||x<-8.7||x>14.5)return;for(let[m,p]of n.obstacles)if(Math.abs(g-gs(m))<1.05&&Math.abs(x-xs(p))<1.05)return;n.slide={fx:n.cellX,fz:n.cellZ,tx:f,tz:d,t:0,pfx:s.position.x,pfz:s.position.z},i.audio.play("switch");return}if(i.input.justPressed("KeyE")){let r=s.position.x-(e.origin.x+n.block.position.x),o=s.position.z-(e.origin.z+n.block.position.z);r*r+o*o<1.75*1.75&&s.onGround&&(n.grabbed=!0,s.setFrozen(!0),i.audio.play("ui"))}}}function sR(i,e){let t=e.group,n=[-4.5,0,4.5],s=e.p={xs:n,order:[1,2,0],progress:0,lit:[!1,!1,!1],demoT:0,wrongT:0,flames:[],runeMats:[]},r=[];for(let o=0;o<3;o++){let a=n[o];r.push(Sn(.34,.46,.25,7,a,.12,-5.5)),r.push(Sn(.09,.15,1.25,6,a,.85,-5.5)),r.push(Sn(.34,.16,.26,7,a,1.55,-5.5));let l=new Lt({color:ji,transparent:!0,opacity:.08,blending:on,depthWrite:!1}),c=new Ur(.85,22);c.rotateX(-Math.PI/2);let u=new Be(c,l);u.position.set(a,.05,-3.4),t.add(u),s.runeMats.push(l);let h=new Be(Un([Sn(.02,.24,.62,6,0,.3,0),Sn(.01,.12,.36,5,0,.55,0)]),ue.M.candle);h.position.set(a,1.72,-5.5),h.visible=!1,t.add(h),s.flames.push(h),e.colliders.push({x:e.origin.x+a,z:e.origin.z-5.5,radius:.5,height:2})}Gt(t,Un(r),ue.M.gold),e.ground=()=>0,e.resetPuzzle=()=>{s.progress=0,s.demoT=0,s.wrongT=0;for(let o=0;o<3;o++)s.lit[o]=!1,s.flames[o].visible=!1,s.runeMats[o].opacity=.08,s.runeMats[o].color.setHex(ji)},e.update=(o,a)=>rR(o,e,a),e.promptOf=o=>{if(e.solved)return null;let a=b_(e,o.player.position);return a>=0&&!s.lit[a]?"E: \u71ED\u53F0\u306B\u706B\u3092\u706F\u3059":null}}function b_(i,e){let t=i.p,n=-1,s=1.7*1.7;for(let r=0;r<3;r++){let o=e.x-(i.origin.x+t.xs[r]),a=e.z-(i.origin.z-5.5),l=o*o+a*a;l<s&&(s=l,n=r)}return n}function rR(i,e,t){let n=e.p,s=i.time.elapsed;for(let r=0;r<3;r++)if(n.flames[r].visible){let o=1+Math.sin(s*10.5+r*2.1)*.14;n.flames[r].scale.set(o,1+Math.sin(s*7.7+r)*.1,o)}if(!e.solved){if(n.wrongT>0){n.wrongT-=t;let r=Re(n.wrongT/.8,0,1);for(let o of n.runeMats)o.color.setHex(16733768),o.opacity=.15+.5*r*Math.abs(Math.sin(s*14));if(n.wrongT<=0){for(let o of n.runeMats)o.color.setHex(ji),o.opacity=.08;n.demoT=-.8}return}if(n.progress===0){n.demoT+=t;let r=3+1.8,o=(n.demoT%r+r)%r,a=Math.floor(o/1);for(let l=0;l<3;l++){let c=.08;if(n.demoT>=0&&a<3&&n.order[a]===l){let u=o-a;c=.1+.85*Math.sin(Re(u/.75,0,1)*Math.PI)}n.runeMats[l].opacity=c}}else for(let r=0;r<3;r++)n.runeMats[r].opacity=n.lit[r]?.7:.08;if(i.input.justPressed("KeyE")){let r=b_(e,i.player.position);if(r>=0&&!n.lit[r])if(r===n.order[n.progress]){if(n.lit[r]=!0,n.flames[r].visible=!0,n.progress++,i.audio.play("torch"),Nn.set(e.origin.x+n.xs[r],1.9,e.origin.z-5.5),i.effects.burst(Nn,"fire",{count:8}),n.progress>=3){e.solved=!0;for(let o of n.runeMats)o.opacity=.75,o.color.setHex(xo);e.doorDelay=.6,i.audio.play("orb")}}else{for(let o=0;o<3;o++)n.lit[o]=!1,n.flames[o].visible=!1;n.progress=0,n.wrongT=.8,i.audio.play("uiBack")}}}}function oR(i,e){let t=e.group,n=e.p={platX:0,holding:!1,orbHome:new A(-5,1.5,6),orbGoal:new A(-3.5,1.55,-8.6),prevPX:0,prevPZ:0,prevValid:!1,fallCool:0},s=new Pe;Gt(s,Je(3,.5,5.4,0,-.25,0),ue.M.mov),Gt(s,Un([Je(.12,.06,5.4,-1.44,.02,0),Je(.12,.06,5.4,1.44,.02,0)]),ue.M.glowAdd,!1),s.position.set(0,0,-4.5),t.add(s),n.plat=s;let r=[];for(let[c,u]of[[-5,6],[-3.5,-8.6]])r.push(Sn(.4,.56,1.15,7,c,.58,u)),r.push(Sn(.55,.42,.18,7,c,1.22,u)),e.colliders.push({x:e.origin.x+c,z:e.origin.z+u,radius:.62,height:1.5});Gt(t,Un(r),ue.M.floor);let o=ra(.5,.04,1.32,16);o.translate(-5,0,6);let a=ra(.5,.04,1.37,16);a.translate(-3.5,0,-8.6),Gt(t,Un([o,a]),ue.M.glowAdd,!1);let l=new Be(new xn(.32,12,10),ue.M.orb);l.position.copy(n.orbHome),t.add(l),n.orb=l,e.ground=(c,u)=>{let h=c-e.origin.x,f=u-e.origin.z;return f<-2&&f>-7?Math.abs(h-n.platX)<1.55?0:-6.5:0},e.resetPuzzle=()=>{n.holding=!1,n.orb.position.copy(n.orbHome),n.fallCool=0,n.prevValid=!1},e.update=(c,u)=>aR(c,e,u),e.promptOf=c=>{if(e.solved)return null;let u=c.player.position;if(n.holding){let d=u.x-(e.origin.x+n.orbGoal.x),g=u.z-(e.origin.z+n.orbGoal.z);return d*d+g*g<4?"E: \u73E0\u3092\u53F0\u5EA7\u3078\u7F6E\u304F":"E: \u73E0\u3092\u7F6E\u304F"}let h=u.x-(e.origin.x+n.orb.position.x),f=u.z-(e.origin.z+n.orb.position.z);return h*h+f*f<1.8*1.8?"E: \u5149\u306E\u73E0\u3092\u6301\u3064":null}}function aR(i,e,t){let n=e.p,s=i.player,r=i.time.elapsed;if(n.fallCool=Math.max(0,n.fallCool-t),n.holding&&n.prevValid){let l=s.position.x-n.prevPX,c=s.position.z-n.prevPZ;s.position.x=n.prevPX+l*.8,s.position.z=n.prevPZ+c*.8,s.velocity.y>0&&(s.velocity.y=0,s.position.y=i.getGroundHeight(s.position.x,s.position.z))}let o=n.platX;n.platX=Math.sin(r*(Math.PI*2/7))*6.5,n.plat.position.x=n.platX;let a=n.platX-o;{let l=s.position.x-e.origin.x,c=s.position.z-e.origin.z;s.position.y<.25&&c<-1.7&&c>-7.3&&Math.abs(l-o)<1.95&&(s.position.x+=a)}if(n.holding&&n.orb.position.set(s.position.x-e.origin.x,s.position.y+2.2+Math.sin(r*3.1)*.09,s.position.z-e.origin.z),n.orb.rotation.y+=t*.8,s.position.y<-2.2&&n.fallCool<=0){n.fallCool=1,i.ui.flash("#000000",.55),Nn.set(e.origin.x,0,e.origin.z+4),s.teleport(Nn,Math.PI),(n.holding||!e.solved&&n.orb.position.y<-1)&&(n.holding=!1,n.orb.position.copy(n.orbHome)),i.audio.play("roll");return}if(e.solved){n.prevValid=!1;return}if(i.input.justPressed("KeyE"))if(n.holding){let l=e.origin.x+n.orbGoal.x,c=e.origin.z+n.orbGoal.z,u=s.position.x-l,h=s.position.z-c;if(u*u+h*h<4)n.holding=!1,n.orb.position.copy(n.orbGoal),e.solved=!0,e.doorDelay=.5,Nn.set(l,2.2,c),i.effects.burst(Nn,"magic"),i.audio.play("orb");else{n.holding=!1;let f=s.position.x-e.origin.x,d=s.position.z-e.origin.z,g=e.ground(s.position.x,s.position.z);g<-1?n.orb.position.copy(n.orbHome):n.orb.position.set(f,g+.42,d),i.audio.play("ui")}}else{let l=s.position.x-(e.origin.x+n.orb.position.x),c=s.position.z-(e.origin.z+n.orb.position.z);l*l+c*c<1.8*1.8&&(n.holding=!0,i.audio.play("pickup"))}n.prevPX=s.position.x,n.prevPZ=s.position.z,n.prevValid=!0}function lR(i,e){let t=e.group,n=e.p={tiles:[],period:5.6,upDur:2.8,bridgeUp:!1,bridgeY:-2.8,lastSwing:-1,burnCool:0,crystalPos:new A(-6,1.9,-14)};n.lavaTex=Ci(256,(u,h)=>{u.fillStyle="#802010",u.fillRect(0,0,h,h);let f=(()=>{let d=12345;return()=>(d=d*16807%2147483647)/2147483647})();for(let d=0;d<60;d++){let g=f()*h,x=f()*h,m=8+f()*30,p=u.createRadialGradient(g,x,0,g,x,m);p.addColorStop(0,"rgba(255,120,40,0.9)"),p.addColorStop(1,"rgba(160,40,15,0)"),u.fillStyle=p,u.beginPath(),u.arc(g,x,m,0,Math.PI*2),u.fill()}u.strokeStyle="rgba(255,220,120,0.8)",u.lineWidth=2.5;for(let d=0;d<12;d++){u.beginPath();let g=f()*h,x=f()*h;u.moveTo(g,x);for(let m=0;m<5;m++)g+=(f()-.5)*90,x+=(f()-.5)*90,u.lineTo(g,x);u.stroke()}}),n.lavaTex.wrapS=n.lavaTex.wrapT=as;let s=new Bn(26,23.4);s.rotateX(-Math.PI/2),s.translate(0,-.9,-5.5),n.lavaMat=new Lt({map:n.lavaTex,color:16756832}),Gt(t,s,n.lavaMat,!1);let r=new lt(2.2,.8,2.2),o=Un([Je(2.3,.08,.14,0,0,-1.08),Je(2.3,.08,.14,0,0,1.08),Je(.14,.08,2.3,-1.08,0,0),Je(.14,.08,2.3,1.08,0,0)]),a=[[0,4.4],[-1.9,2.3],[-.2,.2],[1.7,-1.8],[.2,-3.9],[-1.6,-5.9],[-3.2,-8.1],[-4.6,-10.4]];for(let u=0;u<a.length;u++){let[h,f]=a[u],d=Gt(t,r,ue.M.mov);d.position.set(h,-3.4,f);let g=new Lt({color:16752720,transparent:!0,opacity:0,blending:on,depthWrite:!1}),x=new Be(o,g);x.position.set(h,-.82,f),t.add(x),n.tiles.push({x:h,z:f,mesh:d,frameMat:g,frame:x,topY:-3})}if(ue.assets)for(let[u,h,f]of[[-8,6.8,.3],[-3,6.9,-.4],[3,6.9,.5],[8,6.8,-.2],[9,-15.2,.8],[-9,-15.2,-.6]])sa(t,ue.assets.trap,{x:u,y:0,z:h,ry:f,scale:VA});Gt(t,Un([Sn(.42,.6,1.2,7,-6,.6,-14),Sn(.58,.44,.2,7,-6,1.3,-14)]),ue.M.wall),n.crystalMat=Ht(9427199,1.5);let l=new Go(.42,0);l.scale(1,1.35,1),n.crystal=new Be(l,n.crystalMat),n.crystal.position.set(-6,1.95,-14),t.add(n.crystal),e.colliders.push({x:e.origin.x-6,z:e.origin.z-14,radius:.66,height:1.6});let c=new Pe;Gt(c,Je(4.6,.5,2.6,0,-.25,0),ue.M.mov),Gt(c,Un([Je(4.6,.06,.12,0,.02,-1.24),Je(4.6,.06,.12,0,.02,1.24)]),ue.M.glowAdd,!1),c.position.set(0,n.bridgeY,-14),t.add(c),n.bridge=c,e.ground=(u,h)=>{let f=u-e.origin.x,d=h-e.origin.z;if(d>=6)return 0;if(d>=-16&&d<=-12){let g=Math.abs(f);if(g>=2&&g<=10||g<2&&n.bridgeUp&&n.bridgeY>-.4)return 0}for(let g=0;g<n.tiles.length;g++){let x=n.tiles[g];if(x.topY>-.2&&Math.abs(f-x.x)<1.12&&Math.abs(d-x.z)<1.12)return Math.max(0,x.topY)}return-2.5},e.resetPuzzle=()=>{n.bridgeUp=!1,n.bridgeY=-2.8,n.bridge.position.y=n.bridgeY,n.crystalMat.color.setHex(9427199),n.crystalMat.emissive.setHex(9427199),n.crystalMat.emissiveIntensity=1.5,n.burnCool=0,n.lastSwing=-1},e.update=(u,h)=>cR(u,e,h),e.promptOf=u=>{if(e.solved)return null;let h=u.player.position.x-(e.origin.x-6),f=u.player.position.z-(e.origin.z-14);return h*h+f*f<2.6*2.6?"\u5263\u3067\u6C34\u6676\u3092\u53E9\u3051":null}}function cR(i,e,t){let n=e.p,s=i.player,r=i.time.elapsed;n.burnCool=Math.max(0,n.burnCool-t),n.lavaTex.offset.x=r*.012,n.lavaTex.offset.y=r*.008;let o=.85+Math.sin(r*1.7)*.15;n.lavaMat.color.setRGB(o,.55*o,.28*o);for(let l=0;l<n.tiles.length;l++){let c=n.tiles[l],u=((r+l*.7)%n.period+n.period)%n.period,h=u<n.upDur;c.topY=ze(c.topY,h?0:-3,13,t),c.mesh.position.y=c.topY-.4,!h&&n.period-u<1.5?(c.frameMat.opacity=.25+.55*Math.abs(Math.sin(r*16)),c.frame.position.y=-.82):c.topY>-.3?(c.frameMat.opacity=.35,c.frame.position.y=c.topY+.04):c.frameMat.opacity=0}if(n.crystal.rotation.y+=t*1.2,n.crystal.position.y=1.95+Math.sin(r*2.3)*.08,e.solved||(n.crystalMat.emissiveIntensity=1.3+Math.sin(r*4)*.4),n.bridgeUp&&n.bridgeY<0&&(n.bridgeY=Math.min(0,n.bridgeY+t*3.2),n.bridge.position.y=n.bridgeY,n.bridgeY>=0&&(Nn.set(e.origin.x,.3,e.origin.z-14),i.effects.burst(Nn,"dust"),i.audio.play("switch"))),n.burnCool<=0&&s.position.y<-.55&&s.hp>0&&e.ground(s.position.x,s.position.z)<-2){n.burnCool=1.2,Nn.set(s.position.x,s.position.y,s.position.z),i.effects.burst(Nn,"fire"),i.audio.play("burn"),s.damage(.5,null),s.hp>0&&(Nn.set(e.origin.x,0,e.origin.z+8.5),s.teleport(Nn,Math.PI));return}if(e.solved)return;let a=s.getAttackHit();a&&a.swingId!==n.lastSwing&&(Nn.set(e.origin.x+n.crystalPos.x,n.crystal.position.y,e.origin.z+n.crystalPos.z),a.pos.distanceTo(Nn)<a.radius+.75&&(n.lastSwing=a.swingId,e.solved=!0,n.bridgeUp=!0,n.crystalMat.color.setHex(xo),n.crystalMat.emissive.setHex(xo),n.crystalMat.emissiveIntensity=3,i.effects.burst(Nn,"spark"),i.audio.play("switch"),i.camera3p.shake(.3)))}function uR(i,e){typeof window<"u"&&(window.__shrDbg=(window.__shrDbg||0)+1,window.__shrS=ue),!(!ue||!ue.api)&&(hR(i,e),ue.enterCool=Math.max(0,ue.enterCool-e),i.state==="playing"?fR(i,e):i.state==="shrine"&&ue.api.active>=0&&xR(i,e))}function Ls(i,e){ue.prompt!==e&&(ue.prompt=e,i.ui.setPrompt(e))}function hR(i,e){let t=i.time.elapsed,n=i.time.isNight?.3:0;for(let s=0;s<4;s++){let r=ue.exts[s];r.runeMat.emissiveIntensity=1.15+n+Math.sin(t*1.6+s*1.7)*.25,r.flameMat.emissiveIntensity=1.7+n+Math.sin(t*9.3+s*2.4)*.28+Math.sin(t*23.7+s)*.14,r.beaconMat.opacity=(i.time.isNight?.16:.05)+Math.sin(t*1.2+s)*.02}}function fR(i,e){let t=i.player.position,n=-1;for(let s=0;s<4;s++){let r=ue.exts[s].doorPos,o=t.x-r.x,a=t.z-r.z;if(o*o+a*a<x_*x_){n=s;break}}n>=0?(Ls(i,"E: \u7960\u306B\u5165\u308B"),i.input.justPressed("KeyE")&&ue.enterCool<=0&&dR(i,n)):ue.prompt==="E: \u7960\u306B\u5165\u308B"&&Ls(i,null)}function dR(i,e){let t=ue.rooms[e],n=ue.api.list[e].completed;t.group.visible=!0,n?(t.solved=!0,t.door&&(t.doorOpen=!0,t.door.position.y=-2.75),t.index===3&&(t.p.bridgeUp=!0,t.p.bridgeY=0,t.p.bridge.position.y=0),t.chest.opened=!0,t.chest.lid.rotation.x=-2.05,t.chest.beam.visible=!0):(t.solved=!1,t.resetPuzzle(),mR(t),_R(t)),t.doorDelay=0,t.doorAnim=0,i.ui.flash("#000000",1),Ls(i,null),i.player.teleport(t.entranceWorld,Math.PI),i.setState("shrine"),i.sky.setOverride("shrine"),ue.savedGround=i.getGroundHeight,ue.savedBounds=i.playerBounds,i.getGroundHeight=t.ground,i.playerBounds=t.bounds,ue.added.length=0;for(let s of t.colliders)i.colliders.push(s),ue.added.push(s);t.doorCol&&!t.doorOpen&&(i.colliders.push(t.doorCol),ue.added.push(t.doorCol)),ue.api.active=e,ue.inside=!0,ue.enterCool=.5,i.audio.play("ui"),i.emit("shrine-enter",{index:e})}function pR(i){let e=ue.api.active;if(e<0)return;let t=ue.exts[e];E_(i),i.ui.flash("#000000",1),i.player.teleport(t.exitPos,t.exitHeading),i.setState("playing"),ue.enterCool=.5,i.audio.play("ui")}function E_(i){let e=ue.api.active;if(!ue.inside||e<0)return;let t=ue.rooms[e];for(let n of ue.added){let s=i.colliders.indexOf(n);s>=0&&i.colliders.splice(s,1)}ue.added.length=0,ue.savedGround&&(i.getGroundHeight=ue.savedGround),i.playerBounds=ue.savedBounds,ue.savedGround=null,ue.savedBounds=null,i.sky.setOverride(null),t.group.visible=!1,t.p&&t.p.grabbed&&(t.p.grabbed=!1,i.player.setFrozen(!1)),ue.seq&&(i.player.setFrozen(!1),ue.seq=null),ue.api.active=-1,ue.inside=!1,Ls(i,null),i.emit("shrine-exit",{index:e})}function mR(i){i.doorOpen=!1,i.door&&(i.door.position.y=2.3)}function gR(i,e){if(e.doorOpen||!e.door)return;e.doorOpen=!0,e.doorAnim=1;let t=i.colliders.indexOf(e.doorCol);t>=0&&i.colliders.splice(t,1);let n=ue.added.indexOf(e.doorCol);n>=0&&ue.added.splice(n,1),i.audio.play("switch"),i.camera3p.shake(.25),Nn.set(e.origin.x,.4,e.origin.z-10),i.effects.burst(Nn,"dust")}function xR(i,e){let t=ue.rooms[ue.api.active],n=i.time.elapsed;if(ue.M.padAdd.opacity=.6+Math.sin(n*2.6)*.22,t.doorDelay>0&&(t.doorDelay-=e,t.doorDelay<=0&&gR(i,t)),t.door&&t.doorAnim>0&&(t.door.position.y=Math.max(-2.75,t.door.position.y-e*4.2),t.door.position.y<=-2.75&&(t.doorAnim=0)),t.update(i,e),ue.seq){vR(i,t,e),Ls(i,null);return}let s=i.player.position,r=t.p&&t.p.grabbed;if(!r){let c=s.x-t.padWorld.x,u=s.z-t.padWorld.z;if(c*c+u*u<y_*y_){Ls(i,"E: \u7960\u3092\u51FA\u308B"),i.input.justPressed("KeyE")&&ue.enterCool<=0&&pR(i);return}}let o=t.chest;if(!o.opened&&(t.index===3?t.p.bridgeUp&&t.p.bridgeY>=0:t.doorOpen)&&!r){let c=s.x-t.chestWorld.x,u=s.z-t.chestWorld.z;if(c*c+u*u<2.3*2.3){Ls(i,"E: \u5B9D\u7BB1\u3092\u958B\u3051\u308B"),i.input.justPressed("KeyE")&&yR(i,t);return}}let l=t.promptOf(i);if(l){Ls(i,l);return}if(o.opened){Ls(i,"\u5165\u53E3\u306E\u5149\u308B\u5186\u9663\u304B\u3089\u7960\u3092\u51FA\u3088\u3046");return}Ls(i,null)}function yR(i,e){e.chest.opened=!0,ue.seq={t:0,granted:!1,heartDue:!1,burstDone:!1},i.player.setFrozen(!0),i.audio.play("chest")}function _R(i){let e=i.chest;e.opened=!1,e.lid.rotation.x=0,e.orb.visible=!1,e.orb.scale.set(1,1,1),e.orb.position.set(0,.5,0),e.beam.visible=!1}function __(i,e){return XA.set(i.chestWorld.x,e,i.chestWorld.z)}function vR(i,e,t){let n=ue.seq,s=e.chest;n.t+=t;let r=n.t;if(s.lid.rotation.x=-2.05*Ze(0,.55,r),r>=.25&&(n.burstDone||(n.burstDone=!0,s.beam.visible=!0,i.effects.burst(__(e,1.2),"orb")),ue.M.beamAdd.opacity=r<2.2?Math.min(.5,(r-.25)*.9):Math.max(.14,.5-(r-2.2)*.8)),r>=.5){s.orb.visible=!0;let o=Re((r-.5)/1.5,0,1);s.orb.position.y=.5+o*1.85,s.orb.rotation.y+=t*3.2;let a=Math.min(1,(r-.5)*3),l=r>2.05?Math.max(0,1-(r-2.05)/.55):1;s.orb.scale.setScalar(Math.max(.001,a*l))}if(r>=2&&!n.granted){n.granted=!0;let o=e.index,a=i.player;a.spiritOrbs++,a.heal(a.maxHp),ue.api.list[o].completed=!0,ue.api.completedCount++,ZA(o),n.heartDue=a.spiritOrbs%2===0,i.audio.play("orb"),i.effects.burst(__(e,2.4),"heal"),i.ui.showMessage("\u6C17\u306E\u73E0\u3092\u624B\u306B\u5165\u308C\u305F",{sub:"\u7960\u306E\u52A0\u8B77\u304C\u52C7\u8005\u306B\u5BBF\u308B"}),i.emit("shrine-complete",{index:o})}r>=2.7&&(s.orb.visible=!1,n.heartDue&&(i.player.addMaxHeart(),i.ui.showMessage("\u547D\u306E\u5668\u304C\u6E80\u3061\u305F",{sub:"\u30CF\u30FC\u30C8\u306E\u5668\u304C\u3072\u3068\u3064\u5897\u3048\u305F"}),i.audio.play("heart")),i.player.setFrozen(!1),ue.seq=null)}var Uf={};bs(Uf,{init:()=>AR,update:()=>XR});var oe=null,Ns,iu,Ul,Nf,ca,Xm,_o,qm,qt={minX:-55,maxX:55,minZ:-650,maxZ:-505},Yt,zn,oa,Fi,yo,S_=[],tu=[],Df,ua,mr,aa,pr,xr,zs,ha,Oi=null,Us=new A(0,0,-580),su=[],ru=[],Qt=null,Tn=0,ys=0,yr=!1,_s=1,nu=!1,Ds=!1,la=0,V={state:"idle",t:0,cd:1.6,heading:0,speedMul:1,clawCd:0,chargeCd:0,slamCd:0,flameCd:0,dashDir:new A,dashRemain:1,hitDone:!1,clawHitDone:!1,fired:!1,leapFrom:new A,leapTo:new A,gaitT:0,moveAmt:0},mt={pitch:0,roll:0,y:0,headP:0,headY:0,jaw:.06,crouch:0,paw:0,maw:.4,eyes:2.4},Ee={pitch:0,roll:0,y:0,headP:0,headY:0,jaw:.06,crouch:0,paw:0,maw:.4,eyes:2.4},gr=(i,e)=>oe.getGroundHeight(i,e),T_=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,MR=`
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
`,bR=`
varying vec2 vUv;
uniform float uTime;
void main(){
  float y = vUv.y;
  float band = sin(y * 22.0 - uTime * 2.1) * 0.5 + 0.5;
  float weave = sin(vUv.x * 90.0 + uTime * 0.8) * sin(y * 36.0 - uTime * 1.4) * 0.5 + 0.5;
  float a = (1.0 - y) * (1.0 - y) * 0.30 + band * 0.05 + weave * 0.04;
  gl_FragColor = vec4(vec3(0.55, 0.26, 0.92), a * 0.55);
}
`;function ER(i){iu=new Kt({uniforms:{uTime:{value:0},uBreak:{value:0}},vertexShader:T_,fragmentShader:MR,transparent:!0,depthWrite:!1,side:un}),Ns=new Be(new Bn(15,11),iu),Ns.position.set(i.x,i.y+5.2,i.z),oe.scene.add(Ns),Nf=Ht(11555071,1.7),Ul=new Be(new ls(7,.17,8,56),Nf),Ul.scale.set(1.04,.72,1),Ul.position.copy(Ns.position),oe.scene.add(Ul),Xm=new Lt({color:9055202,transparent:!0,opacity:.3,side:un,blending:on,depthWrite:!1}),ca=new Be(new sl(4.6,5.4,48),Xm),ca.rotation.x=-Math.PI/2,ca.position.set(i.x,gr(i.x,i.z+1.5)+.12,i.z+1.5),oe.scene.add(ca)}function SR(){qm=new Kt({uniforms:{uTime:{value:0}},vertexShader:T_,fragmentShader:bR,transparent:!0,depthWrite:!1,side:un,blending:on}),_o=new Pe,_o.visible=!1;let i=qt.maxX-qt.minX,e=qt.maxZ-qt.minZ,t=10,n=(qt.minX+qt.maxX)/2,s=(qt.minZ+qt.maxZ)/2,r=(o,a,l,c)=>{let u=new Be(new Bn(o,t),qm);u.position.set(a,gr(a,l)+t/2-.5,l),u.rotation.y=c,_o.add(u)};r(i,n,qt.minZ,0),r(i,n,qt.maxZ,0),r(e,qt.minX,s,Math.PI/2),r(e,qt.maxX,s,Math.PI/2),oe.scene.add(_o)}function Lf(i,e){let t=new Pe;t.position.set(i,-.35,e),zn.add(t);let n=new Pe;t.add(n),ae(new lt(.62,1.2,.74),mr,0,-.55,0,n);let s=new Pe;s.position.set(0,-1.1,0),n.add(s),ae(new lt(.46,1,.56),aa,0,-.45,0,s),ae(new lt(.64,.28,.82),aa,0,-.95,.1,s);for(let r=-1;r<=1;r++){let o=ae(new ln(.09,.34,5),pr,r*.19,-.97,.55,s);o.rotation.x=1.35}return{g:t,upper:n,lower:s}}function TR(){mr=tt(2366006,{emissive:0}),aa=tt(1380388),pr=tt(5720686),xr=Ht(11816447,2.4),zs=Ht(9055202,1.5),ha=Ht(10498303,.4),Yt=new Pe,Yt.visible=!1,Yt.position.copy(Us),oe.scene.add(Yt),zn=new Pe,zn.position.y=2.5,Yt.add(zn),ae(new lt(2.6,2,2.7),mr,0,.15,1,zn),ae(new lt(2.2,1.7,2.7),mr,0,-.05,-1.15,zn),ae(new lt(1.9,.9,1.7),aa,0,1.25,.9,zn);for(let r=0;r<4;r++){let o=ae(new ln(.26-r*.03,.95-r*.12,5),pr,0,1.55-r*.16,1.35-r*1.05,zn);o.rotation.x=-.35}let i=[[1.3,.35,1.2,.5,1,.3],[-1.3,.1,.6,.4,1.2,-.2],[1.1,-.2,-1,.35,.9,.4],[-1.1,.3,-1.5,.45,1.1,-.4],[.6,1.05,0,.4,.8,1.2],[-.5,-.85,.4,.35,.9,.9]];for(let[r,o,a,l,c,u]of i){let h=ae(new lt(.07,l,c),zs,r,o,a,zn);h.rotation.z=u,h.castShadow=!1}oa=new Pe,oa.position.set(0,.7,2.25),zn.add(oa);let e=ae(new lt(1.1,1,1.5),mr,0,.28,.5,oa);e.rotation.x=-.35,Fi=new Pe,Fi.position.set(0,.8,1.1),oa.add(Fi),ae(new lt(1.15,.85,1.5),mr,0,.1,.35,Fi),ae(new lt(.8,.48,.95),aa,0,-.06,1.3,Fi),ae(new ln(.07,.28,5),pr,.26,-.34,1.55,Fi).rotation.x=Math.PI,ae(new ln(.07,.28,5),pr,-.26,-.34,1.55,Fi).rotation.x=Math.PI,ae(new xn(.15,8,6),xr,.36,.24,.95,Fi).castShadow=!1,ae(new xn(.15,8,6),xr,-.36,.24,.95,Fi).castShadow=!1;for(let r of[1,-1]){let o=ae(new ln(.2,1.05,6),pr,r*.46,.75,0,Fi);o.rotation.z=-r*.55,o.rotation.x=.35;let a=ae(new ln(.12,.75,6),pr,0,.75,0,o);a.rotation.z=-r*.5}yo=new Pe,yo.position.set(0,-.3,.45),Fi.add(yo),ae(new lt(.74,.26,1.55),aa,0,-.12,.7,yo),ae(new ln(.06,.24,5),pr,.22,.06,1.35,yo),ae(new ln(.06,.24,5),pr,-.22,.06,1.35,yo),ae(new lt(.58,.14,1),ha,0,.04,.65,yo).castShadow=!1,S_=[Lf(1.18,1.55),Lf(-1.18,1.55),Lf(1.05,-1.55),Lf(-1.05,-1.55)];let t=zn,n=!0;tu=[];for(let r=0;r<5;r++){let o=new Pe;o.position.set(0,n?.05:0,n?-2.35:-.9),t.add(o),ae(new lt(.56-r*.08,.5-r*.07,1),r%2?aa:mr,0,0,-.5,o),tu.push(o),t=o,n=!1}let s=ae(new ln(.14,.7,5),zs,0,0,-1.25,t);s.rotation.x=-Math.PI/2,s.castShadow=!1,ua=new Lt({color:16723781,transparent:!0,opacity:0,blending:on,depthWrite:!1,side:Rn}),Df=new Be(new xn(3.5,18,12),ua),Df.position.y=2.3,Yt.add(Df)}function wR(){for(let t=0;t<2;t++){let n=Ht(10174719,2,{transparent:!0,opacity:.9}),s=new Be(new ls(1,.2,8,48),n);s.rotation.x=-Math.PI/2,s.visible=!1,s.castShadow=!1,oe.scene.add(s),su.push({mesh:s,mat:n,r:0,active:!1,hitDone:!1})}let i=new xn(.32,8,6),e=new ln(.2,1,6);for(let t=0;t<6;t++){let n=new Be(i,Ht(12865023,2.6)),s=new Be(e,Ht(8004300,1.2,{transparent:!0,opacity:.7}));s.rotation.x=-Math.PI/2,s.position.z=-.6,n.add(s),n.visible=!1,n.castShadow=!1,oe.scene.add(n),ru.push({mesh:n,vel:new A,active:!1,life:0})}}async function AR(i){oe=i;let e=i.world.castleGatePos;Us.set(e.x,0,e.z+18),Us.y=gr(Us.x,Us.z),ER(e),SR(),TR(),wR(),Oi={root:Yt,pos:Yt.position,hp:60,maxHp:60,alive:!1,radius:3,name:"\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9",isBoss:!0,damage(t,n){if(!this.alive||Qt)return;let s=V.state==="stun"?2:.5;this.hp=Math.max(0,this.hp-t*s),oe.boss.hp=this.hp,la=1,oe.camera3p.shake(V.state==="stun"?.25:.12),this.hp<=30&&_s===1&&this.hp>0&&IR(),this.hp<=0&&(this.alive=!1,PR())}},i.boss={active:!1,defeated:!1,hp:60,maxHp:60,_forceAttack(t){UR(t)},_dbg(){return{seq:Qt,seqT:+Tn.toFixed(2),battle:yr,phase:_s,aiState:V.state,aiT:+V.t.toFixed(2),nearGate:nu,promptOn:Ds}}},i.on("state",({to:t})=>{(t==="gameover"||t==="title")&&(oe.boss.active||Qt)&&!oe.boss.defeated&&DR()})}function RR(){Ds&&(oe.ui.setPrompt(null),Ds=!1),oe.player.setFrozen(!0),Qt="break",Tn=0,ys=0,oe.audio.play("burn")}function CR(){yr=!0,_s=1,V.state="idle",V.t=0,V.cd=1.6,V.speedMul=1,V.clawCd=0,V.chargeCd=2.5,V.slamCd=1.5,V.flameCd=0,V.moveAmt=0,Oi.hp=Oi.maxHp,Oi.alive=!0,oe.combat.registerEnemy(Oi),oe.boss.active=!0,oe.boss.hp=Oi.hp,oe.setState("boss"),oe.sky.setOverride("boss"),oe.emit("boss-start"),oe.ui.setBossBar(!0,"\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9"),oe.playerBounds={minX:qt.minX,maxX:qt.maxX,minZ:qt.minZ,maxZ:qt.maxZ},_o.visible=!0}function IR(){_s=2,V.speedMul=1.3,V.state="rage",V.t=0,xr.color.setHex(16725333),xr.emissive.setHex(16725333),zs.color.setHex(16721992),zs.emissive.setHex(16721992),ha.color.setHex(16728160),ha.emissive.setHex(16728160),Ae.v1.copy(Yt.position),Ae.v1.y+=2.5,oe.effects.burst(Ae.v1,"magic",{count:40,scale:2}),oe.camera3p.shake(.6),oe.audio.play("burn"),oe.emit("boss-phase",{phase:2})}function PR(){yr=!1,Qt="dying",Tn=0,ys=0;for(let i of su)i.active=!1,i.mesh.visible=!1;for(let i of ru)i.active=!1,i.mesh.visible=!1;oe.camera3p.shake(.5),oe.audio.play("kill")}function LR(){Yt.visible=!1,oe.boss.defeated=!0,oe.boss.active=!1,oe.boss.hp=0,oe.playerBounds=null,_o.visible=!1,oe.emit("boss-defeated"),oe.ui.setBossBar(!1),oe.sky.setOverride(null),oe.camera3p.cinematic("ending"),Qt="endwait",Tn=0}function DR(){Qt=null,Tn=0,yr=!1,_s=1,la=0,Oi.alive=!1,Oi.hp=Oi.maxHp;let i=oe.combat.enemies.indexOf(Oi);i>=0&&oe.combat.enemies.splice(i,1),Yt.visible=!1,Yt.position.copy(Us),Yt.rotation.set(0,0,0),zn.rotation.set(0,0,0),zn.position.y=2.5,V.state="idle",V.t=0,V.cd=1.6,V.speedMul=1,V.heading=0,V.moveAmt=0,xr.color.setHex(11816447),xr.emissive.setHex(11816447),xr.emissiveIntensity=2.4,zs.color.setHex(9055202),zs.emissive.setHex(9055202),zs.emissiveIntensity=1.5,ha.color.setHex(10498303),ha.emissive.setHex(10498303),mr.emissive.setHex(0),ua.opacity=0,mt.eyes=2.4,mt.maw=.4,Ns.visible=!0,Ul.visible=!0,ca.visible=!0,iu.uniforms.uBreak.value=0;for(let e of su)e.active=!1,e.mesh.visible=!1;for(let e of ru)e.active=!1,e.mesh.visible=!1;_o.visible=!1,oe.playerBounds=null,oe.boss.active=!1,oe.boss.hp=Oi.maxHp,oe.ui.setBossBar(!1),oe.sky.setOverride(null),oe.camera3p.cinematic(null),oe.player.setFrozen(!1),nu=!1,Ds=!1}function NR(i){Tn+=i;let e=oe.world.castleGatePos;if(Qt==="break")iu.uniforms.uBreak.value=Ze(0,1.6,Tn),Nf.emissiveIntensity=1.7+Tn*2.2,ys-=i,ys<=0&&(ys=.18,Ae.v1.set(e.x+(Math.random()-.5)*11,Ns.position.y+(Math.random()-.5)*7,e.z+(Math.random()-.5)*1.5),oe.effects.burst(Ae.v1,"magic",{count:14}),Math.random()<.4&&oe.audio.play("burn")),Tn>=1.6&&(Ns.visible=!1,Ul.visible=!1,ca.visible=!1,Ae.v1.copy(Ns.position),oe.effects.burst(Ae.v1,"magic",{count:70,scale:2.4}),oe.audio.play("burn"),oe.camera3p.shake(.55),Yt.position.copy(Us),Yt.position.y=Us.y+42,Yt.rotation.set(0,0,0),V.heading=0,Yt.visible=!0,oe.camera3p.cinematic("bossIntro"),Qt="descend",Tn=0);else if(Qt==="descend"){let t=Math.min(1,Tn/.9);Yt.position.y=Us.y+42*(1-t*t),t>=1&&(Yt.position.y=Us.y,oe.camera3p.shake(.9),Ae.v1.copy(Yt.position),Ae.v1.y+=.4,oe.effects.burst(Ae.v1,"dust",{count:46,scale:2.6}),oe.effects.burst(Ae.v1,"magic",{count:24,scale:1.6}),oe.audio.play("hit"),Qt="roar",Tn=0,ys=0)}else if(Qt==="roar")ys===0&&Tn>=.15&&(ys=1,oe.audio.play("burn"),oe.camera3p.shake(.4)),Tn>=1.4&&(Qt="cine",Tn=0);else if(Qt==="cine")Tn>=3.1&&(oe.camera3p.cinematic(null),oe.player.setFrozen(!1),Qt=null,CR());else if(Qt==="dying"){let t=Ze(0,3.4,Tn);zn.rotation.z=t*.55,zn.position.y=2.5-t*1.5,zs.emissiveIntensity=1.5+t*3.5,mt.eyes=ye(mt.eyes,.2,t),ys-=i,ys<=0&&(ys=.22,Ae.v1.copy(Yt.position),Ae.v1.x+=(Math.random()-.5)*3.5,Ae.v1.y+=1.2+Math.random()*2.4,Ae.v1.z+=(Math.random()-.5)*3.5,oe.effects.burst(Ae.v1,"magic",{count:12}),oe.camera3p.shake(.1)),Tn>=3.4&&(Ae.v1.copy(Yt.position),Ae.v1.y+=1.6,oe.effects.burst(Ae.v1,"death",{count:60,scale:2.8}),oe.effects.burst(Ae.v1,"magic",{count:60,scale:2.4}),oe.audio.play("kill"),LR())}else Qt==="endwait"&&Tn>=3&&(Qt=null,oe.setState("ending"))}function w_(){V.state="claw",V.t=0,V.clawHitDone=!1,V.clawCd=1.8/V.speedMul}function A_(){V.state="chargeWind",V.t=0,V.dashRemain=_s===2?2:1,V.chargeCd=8/V.speedMul,oe.audio.play("burn")}function R_(){V.state="slamWind",V.t=0,V.slamCd=8/V.speedMul}function Ym(){V.state="flame",V.t=0,V.fired=!1,V.flameCd=4.5/V.speedMul}function UR(i){!yr||V.state!=="idle"&&V.state!=="recover"||(i==="claw"?w_():i==="charge"?A_():i==="slam"?R_():i==="flame"?Ym():i==="stun"&&(V.state="stun",V.t=0))}function zR(i){if(i>12&&V.chargeCd<=0)return A_();if(i<5&&V.clawCd<=0)return w_();if(i>=5&&i<=12){if(V.slamCd<=0&&(V.flameCd>0||Math.random()<.55))return R_();if(V.flameCd<=0)return Ym()}if(V.flameCd<=0&&i>=5)return Ym();V.cd=.4}function Nl(i){V.state="idle",V.t=0,V.cd=i/V.speedMul}function FR(i,e){for(let t of su)if(!t.active){t.active=!0,t.hitDone=!1,t.r=.6,t.mesh.position.set(i,gr(i,e)+.5,e),t.mesh.scale.set(.6,.6,1),t.mat.opacity=.95,t.mesh.visible=!0;return}}function OR(i){let e=oe.player;for(let t of su)if(t.active){if(t.r+=13*i,t.mesh.scale.set(t.r,t.r,1),t.mat.opacity=Re(1-t.r/26,0,1)*.95,!t.hitDone&&e){let n=e.position.x-t.mesh.position.x,s=e.position.z-t.mesh.position.z,r=Math.hypot(n,s);Math.abs(r-t.r)<1.3&&e.onGround&&(t.hitDone=!0,e.damage(1,t.mesh.position),oe.camera3p.shake(.4))}t.r>26&&(t.active=!1,t.mesh.visible=!1)}}function BR(){Fi.getWorldPosition(Ae.v1),Ae.v2.copy(oe.player.position),Ae.v2.y+=1.2,Ae.v2.sub(Ae.v1),Ae.v2.lengthSq()<.01&&Ae.v2.set(0,0,1),Ae.v2.normalize();let i=0;for(let e of ru){if(e.active||i>=3)continue;let t=(i-1)*.32,n=Math.cos(t),s=Math.sin(t);e.vel.set(Ae.v2.x*n+Ae.v2.z*s,Ae.v2.y*.5,-Ae.v2.x*s+Ae.v2.z*n),e.vel.normalize().multiplyScalar(20),e.mesh.position.copy(Ae.v1),Ae.v3.copy(Ae.v1).add(e.vel),e.mesh.lookAt(Ae.v3),e.life=0,e.active=!0,e.mesh.visible=!0,i++}oe.audio.play("burn")}function kR(i){let e=oe.player;for(let t of ru){if(!t.active)continue;t.life+=i,t.mesh.position.addScaledVector(t.vel,i),t.mesh.rotation.z+=i*9;let n=t.mesh.position,s=!1;e&&(Ae.v2.copy(e.position),Ae.v2.y+=1,n.distanceToSquared(Ae.v2)<1.44&&(e.damage(.5,n),s=!0)),!s&&n.y<gr(n.x,n.z)+.25&&(s=!0),(s||t.life>4)&&(s&&oe.effects.burst(n,"magic",{count:14}),t.active=!1,t.mesh.visible=!1)}}function HR(i){let e=oe.player.position,t=Yt.position,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s),o=Math.atan2(n,s);V.t+=i,V.clawCd-=i,V.chargeCd-=i,V.slamCd-=i,V.flameCd-=i;let a=0;switch(V.state){case"idle":{V.heading=Gn(V.heading,o,3*V.speedMul,i),r>4.4&&(a=4.8*V.speedMul),V.cd-=i,V.cd<=0&&zR(r);break}case"rage":{V.t>=1.3&&Nl(.7);break}case"claw":{V.heading=Gn(V.heading,o,V.t<.5?4:.5,i),!V.clawHitDone&&V.t>=.55&&(V.clawHitDone=!0,oe.audio.play("hit"),r<5&&Math.abs(Xo(V.heading,o))<1&&oe.player.damage(.5,t)),V.t>=1.25&&Nl(.9);break}case"chargeWind":{V.heading=Gn(V.heading,o,1.3,i),V.t>=2&&(V.dashDir.set(Math.sin(V.heading),0,Math.cos(V.heading)),V.state="chargeDash",V.t=0,V.hitDone=!1,oe.audio.play("hit"));break}case"chargeDash":{let l=26*V.speedMul;t.x+=V.dashDir.x*l*i,t.z+=V.dashDir.z*l*i,a=l,!V.hitDone&&r<3.4&&(V.hitDone=!0,oe.player.damage(1,t),oe.camera3p.shake(.5));let c=Re(t.x,qt.minX+3,qt.maxX-3),u=Re(t.z,qt.minZ+3,qt.maxZ-3),h=c!==t.x||u!==t.z||V.t>3;t.x=c,t.z=u,h&&(V.dashRemain--,Ae.v1.copy(t),Ae.v1.y+=1.5,oe.effects.burst(Ae.v1,"dust",{count:30,scale:2}),oe.camera3p.shake(.6),oe.audio.play("hit"),V.hitDone?Nl(1.2):V.dashRemain>0?(V.state="chargeTurn",V.t=0):(V.state="stun",V.t=0,oe.audio.play("block")));break}case"chargeTurn":{V.heading=Gn(V.heading,o,6,i),V.t>=.55&&(V.dashDir.set(Math.sin(V.heading),0,Math.cos(V.heading)),V.state="chargeDash",V.t=0,V.hitDone=!1,oe.audio.play("hit"));break}case"stun":{V.t>=3&&Nl(.8);break}case"slamWind":{if(V.heading=Gn(V.heading,o,3,i),V.t>=.7){V.leapFrom.copy(t),V.leapTo.set(Re(e.x,qt.minX+4,qt.maxX-4),0,Re(e.z,qt.minZ+4,qt.maxZ-4)),Ae.v1.set(V.leapTo.x-V.leapFrom.x,0,V.leapTo.z-V.leapFrom.z);let l=Ae.v1.length();l>16&&(Ae.v1.multiplyScalar(16/l),V.leapTo.set(V.leapFrom.x+Ae.v1.x,0,V.leapFrom.z+Ae.v1.z)),V.state="slamAir",V.t=0,oe.audio.play("jump")}break}case"slamAir":{let l=Math.min(1,V.t/.85);t.x=ye(V.leapFrom.x,V.leapTo.x,l),t.z=ye(V.leapFrom.z,V.leapTo.z,l),t.y=ye(gr(V.leapFrom.x,V.leapFrom.z),gr(V.leapTo.x,V.leapTo.z),l)+Math.sin(l*Math.PI)*6,l>=1&&(t.y=gr(t.x,t.z),FR(t.x,t.z),Ae.v1.copy(t),Ae.v1.y+=.4,oe.effects.burst(Ae.v1,"dust",{count:40,scale:2.4}),oe.effects.burst(Ae.v1,"magic",{count:20,scale:1.5}),oe.camera3p.shake(.75),oe.audio.play("hit"),V.state="slamLand",V.t=0);break}case"slamLand":{V.t>=1&&Nl(1.2);break}case"flame":{V.heading=Gn(V.heading,o,2.5,i),!V.fired&&V.t>=.85&&(V.fired=!0,BR()),V.t>=1.55&&Nl(1.3);break}}a>0&&V.state!=="chargeDash"&&(t.x+=Math.sin(V.heading)*a*i,t.z+=Math.cos(V.heading)*a*i),V.state!=="slamAir"&&(t.x=Re(t.x,qt.minX+3,qt.maxX-3),t.z=Re(t.z,qt.minZ+3,qt.maxZ-3),t.y=ze(t.y,gr(t.x,t.z),18,i)),V.gaitT+=a*i*.55,V.moveAmt=ze(V.moveAmt,a>.5?1:0,8,i),Yt.rotation.y=V.heading}function GR(i){Ee.pitch=0,Ee.roll=0,Ee.y=0,Ee.headP=0,Ee.headY=0,Ee.jaw=.06,Ee.crouch=0,Ee.paw=0,Ee.maw=_s===2?.9:.4,Ee.eyes=_s===2?2.8:2.4;let e=Qt||V.state;if(e==="descend")Ee.crouch=.55,Ee.jaw=.35,Ee.pitch=.1;else if(e==="roar"||e==="rage"||e==="cine"){let t=e==="cine"?Math.max(0,1-Tn*1.5):1;Ee.pitch=-.32*t,Ee.headP=-.85*t,Ee.jaw=.85*t,Ee.y=.15*t,Ee.eyes=3.2}else if(e==="dying")Ee.headP=.6,Ee.jaw=.5,Ee.crouch=.6,Ee.eyes=mt.eyes;else if(e==="claw")V.t<.55?(Ee.paw=1,Ee.roll=-.14,Ee.headP=-.15,Ee.pitch=-.08):(Ee.paw=-.55,Ee.pitch=.22,Ee.headP=.2,Ee.jaw=.5);else if(e==="chargeWind")Ee.pitch=.3,Ee.headP=.45,Ee.crouch=.25,Ee.jaw=.4,Ee.roll=Math.sin(i*42)*.035,Ee.eyes=3.4;else if(e==="chargeDash")Ee.pitch=.18,Ee.headP=.25,Ee.jaw=.6;else if(e==="chargeTurn")Ee.pitch=.1,Ee.crouch=.2;else if(e==="stun")Ee.headP=.75,Ee.crouch=.4,Ee.jaw=.42,Ee.eyes=.05,Ee.roll=Math.sin(i*2.2)*.04;else if(e==="slamWind")Ee.crouch=.85,Ee.pitch=.18,Ee.headP=.3;else if(e==="slamAir")Ee.crouch=.5,Ee.pitch=-.15+Math.min(1,V.t/.85)*.4,Ee.jaw=.5;else if(e==="slamLand")Ee.crouch=.55,Ee.pitch=.12,Ee.headP=.25;else if(e==="flame"){let t=V.fired?Math.max(0,1-(V.t-.85)*2.2):Math.min(1,V.t/.85);Ee.headP=-.55*t,Ee.pitch=-.12*t,Ee.jaw=.85*t,Ee.maw=.4+t*3.2}else if(Ee.y=Math.sin(i*1.9)*.05,yr&&!Qt){let t=Xo(V.heading,Math.atan2(oe.player.position.x-Yt.position.x,oe.player.position.z-Yt.position.z));Ee.headY=Re(t,-.5,.5)}}function VR(i,e){GR(e),mt.pitch=ze(mt.pitch,Ee.pitch,9,i),mt.roll=ze(mt.roll,Ee.roll,9,i),mt.y=ze(mt.y,Ee.y,9,i),mt.headP=ze(mt.headP,Ee.headP,10,i),mt.headY=ze(mt.headY,Ee.headY,7,i),mt.jaw=ze(mt.jaw,Ee.jaw,12,i),mt.crouch=ze(mt.crouch,Ee.crouch,9,i),mt.paw=ze(mt.paw,Ee.paw,13,i),mt.maw=ze(mt.maw,Ee.maw,10,i),mt.eyes=ze(mt.eyes,Ee.eyes,10,i),Qt!=="dying"?(zn.rotation.x=mt.pitch,zn.rotation.z=mt.roll,zn.position.y=2.5+mt.y-mt.crouch*.85):zn.rotation.x=mt.pitch,oa.rotation.x=mt.headP*.55,oa.rotation.y=mt.headY,Fi.rotation.x=mt.headP*.55,yo.rotation.x=mt.jaw;let t=[0,Math.PI,Math.PI,0];for(let n=0;n<4;n++){let s=S_[n],o=Math.sin(V.gaitT+t[n])*.55*V.moveAmt-mt.crouch*.55,a=Math.max(0,-Math.sin(V.gaitT+t[n]))*.7*V.moveAmt+mt.crouch*1.05;n===0&&(o-=mt.paw*1.5,a+=Math.max(0,mt.paw)*1.1),s.upper.rotation.x=o,s.lower.rotation.x=a}for(let n=0;n<tu.length;n++)tu[n].rotation.y=Math.sin(e*2.1+n*.7)*.15*(1+V.moveAmt*.8),tu[n].rotation.x=Math.sin(e*1.3+n*.5)*.05+mt.crouch*.08;if(xr.emissiveIntensity=mt.eyes+(_s===2?Math.sin(e*7)*.25:0),ha.emissiveIntensity=mt.maw,la>0){la=Math.max(0,la-i*4.5);let n=la*la;mr.emissive.setRGB(.5*n,.16*n,.75*n),Qt!=="dying"&&(zs.emissiveIntensity=(_s===2?2.1:1.5)+n*2.5)}if(_s===2&&Oi.alive){ua.opacity=ze(ua.opacity,.11+Math.sin(e*5.5)*.04,6,i);let n=1+Math.sin(e*4.7)*.045;Df.scale.setScalar(n)}else ua.opacity=ze(ua.opacity,0,8,i)}function WR(){let i=oe.player,e=oe.world.castleGatePos,t=i.position.x-e.x,n=i.position.z-e.z;t*t+n*n<36?(nu||(nu=!0,i.spiritOrbs<3&&oe.ui.showMessage("\u7D50\u754C\u306F\u56FA\u304F\u9589\u3056\u3055\u308C\u3066\u3044\u308B",{sub:"\u6C17\u306E\u73E0\u304C3\u3064\u5FC5\u8981\u3060"})),i.spiritOrbs>=3?(Ds||(oe.ui.setPrompt("E: \u7D50\u754C\u3092\u7834\u308B"),Ds=!0),oe.input.justPressed("KeyE")&&RR()):Ds&&(oe.ui.setPrompt(null),Ds=!1)):(nu=!1,Ds&&(oe.ui.setPrompt(null),Ds=!1))}function XR(i,e){if(!oe||!Yt)return;let t=i.time.elapsed;Ns.visible&&(iu.uniforms.uTime.value=t,Qt||(Nf.emissiveIntensity=1.7+Math.sin(t*2.1)*.45),Xm.opacity=.3+Math.sin(t*1.6)*.08,ca.rotation.z=t*.15),_o.visible&&(qm.uniforms.uTime.value=t),Qt?NR(e):yr&&i.state==="boss"&&Oi.alive&&HR(e),(yr||Qt==="dying")&&(OR(e),kR(e)),Yt.visible&&VR(e,t),i.state==="playing"&&!Qt&&!yr&&!i.boss.defeated&&Ns.visible&&WR()}var kl={};bs(kl,{init:()=>fC,update:()=>dC});var Le=null,vo,Mo,Bl,bt,fa,zf,ou,Ff=null,Eo=null,C_="__none",bo=[],jm=0,Of=!1,I_="",vs=null,zl=0,Fl=0,vn=i=>440*Math.pow(2,(i-69)/12),Jn=Math.random,qR=.35;function YR(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Le=new i,Mo=Le.createDynamicsCompressor(),Mo.threshold.value=-16,Mo.knee.value=18,Mo.ratio.value=5,Mo.attack.value=.004,Mo.release.value=.22,vo=ht(.9),vo.connect(Mo),Mo.connect(Le.destination),Bl=ht(0),bt=ht(.9),fa=ht(0),Bl.connect(vo),bt.connect(vo),fa.connect(vo),zf=Le.createConvolver(),zf.buffer=ZR(2.6,2.6);let e=ht(.5);zf.connect(e),e.connect(vo);for(let[o,a]of[[Bl,.32],[bt,.18],[fa,.1]]){let l=ht(a);o.connect(l),l.connect(zf)}ou=Le.createDelay(1),ou.delayTime.value=.31;let t=Le.createBiquadFilter();t.type="lowpass",t.frequency.value=2200;let n=ht(.32);ou.connect(t),t.connect(n),n.connect(ou);let s=ht(.35);t.connect(s),s.connect(vo);let r=ht(.16);Bl.connect(r),r.connect(ou),lC();try{window.__audioDbg={get ctx(){return Le},get master(){return vo}}}catch{}}function ZR(i,e){let t=Math.max(1,Math.floor(Le.sampleRate*i)),n=Le.createBuffer(2,t,Le.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s),o=0;for(let a=0;a<t;a++){let l=(Jn()*2-1)*Math.pow(1-a/t,e);o=o*.62+l*.38,r[a]=o}}return n}function Bf(){if(!Ff){let i=Le.sampleRate*2;Ff=Le.createBuffer(1,i,Le.sampleRate);let e=Ff.getChannelData(0);for(let t=0;t<i;t++)e[t]=Jn()*2-1}return Ff}function ht(i){let e=Le.createGain();return e.gain.value=i,e}function Kn(i,e){i.onended=()=>{for(let t of e)try{t.disconnect()}catch{}}}function en(i,e,t,n){let s=Le.createOscillator();return s.type=i,s.frequency.value=e,s.start(t),s.stop(n),s}function au(i,e){let t=Le.createBufferSource();t.buffer=Bf(),t.loop=!0;try{t.start(i,Jn()*1.5)}catch{t.start(i)}return t.stop(i+e),t}function P_(i){if(Le.createStereoPanner){let e=Le.createStereoPanner();return e.pan.value=Re(i,-1,1),e}return ht(1)}function Bi(i,e,t,n){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(t,e+.008),i.setTargetAtTime(1e-4,e+.012,n)}function lu(i,e,t,n,s,r){let o=Math.max(e+t,e+s);i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(n,e+t),i.setValueAtTime(n,o),i.linearRampToValueAtTime(1e-4,o+r)}var Vt={harp(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("triangle",e,i,i+2.2);o.connect(r),Bi(r.gain,i,n,.32);let a=ht(0);a.connect(s);let l=en("sine",e*2,i,i+1.1);l.connect(a),Bi(a.gain,i,n*.18,.14),Kn(o,[r,a,o,l])},piano(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("triangle",e,i,i+5);o.connect(r),Bi(r.gain,i,n,.9);let a=ht(0);a.connect(s);let l=en("sine",e*2.001,i,i+2.5);l.connect(a),Bi(a.gain,i,n*.12,.35),Kn(o,[r,a,o,l])},flute(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("sine",e,i,i+t+.35);o.connect(r);let a=en("sine",5.2,i,i+t+.35),l=ht(0);a.connect(l),l.connect(o.detune),l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(14,i+Math.min(.5,t*.6)),lu(r.gain,i,.07,n,Math.max(.1,t-.06),.18);let c=Le.createBiquadFilter();c.type="bandpass",c.frequency.value=e*2,c.Q.value=9;let u=ht(0),h=au(i,t+.3);h.connect(c),c.connect(u),u.connect(s),lu(u.gain,i,.09,n*.05,Math.max(.1,t-.06),.15),Kn(o,[r,o,a,l,c,u,h])},strings(i,e,t,n,s){let r=Le.createBiquadFilter();r.type="lowpass",r.frequency.value=Math.min(e*3.2,2600),r.Q.value=.4;let o=ht(0);r.connect(o),o.connect(s);let a=en("sawtooth",e,i,i+t+1.3);a.detune.value=-6,a.connect(r);let l=en("sawtooth",e*1.003,i,i+t+1.3);l.detune.value=6,l.connect(r),lu(o.gain,i,Math.min(.6,t*.35),n,t,1),Kn(a,[r,o,a,l])},bass(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("sine",e,i,i+t+.2);o.connect(r);let a=en("square",e,i,i+t+.2),l=ht(.13);a.connect(l),l.connect(r),lu(r.gain,i,.015,n,t*.85,.1),Kn(o,[r,o,a,l])},bell(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("sine",e,i,i+3.2),a=en("sine",e*2.76,i,i+3.2),l=ht(0);a.connect(l),l.connect(o.frequency),l.gain.setValueAtTime(e*1.6,i),l.gain.setTargetAtTime(1e-4,i,.35),o.connect(r),Bi(r.gain,i,n,Re(t,.5,1.2)),Kn(o,[r,o,a,l])},kick(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("sine",120,i,i+.32);o.connect(r),o.frequency.setValueAtTime(120,i),o.frequency.exponentialRampToValueAtTime(42,i+.11),Bi(r.gain,i,n,.09),Kn(o,[r,o])},taiko(i,e,t,n,s){let r=ht(0);r.connect(s);let o=en("sine",96,i,i+.6);o.connect(r),o.frequency.setValueAtTime(96,i),o.frequency.exponentialRampToValueAtTime(52,i+.2),Bi(r.gain,i,n,.16);let a=Le.createBiquadFilter();a.type="bandpass",a.frequency.value=180,a.Q.value=6;let l=ht(0),c=au(i,.4);c.connect(a),a.connect(l),l.connect(s),Bi(l.gain,i,n*.5,.09),Kn(o,[r,o,a,l,c])},shaker(i,e,t,n,s){let r=Le.createBiquadFilter();r.type="highpass",r.frequency.value=6500;let o=ht(0),a=au(i,.14);a.connect(r),r.connect(o),o.connect(s),Bi(o.gain,i,n,.025),Kn(a,[r,o,a])},snare(i,e,t,n,s){let r=Le.createBiquadFilter();r.type="bandpass",r.frequency.value=1700,r.Q.value=.8;let o=ht(0),a=au(i,.2);a.connect(r),r.connect(o),o.connect(s),Bi(o.gain,i,n,.06);let l=ht(0);l.connect(s);let c=en("sine",210,i,i+.12);c.connect(l),Bi(l.gain,i,n*.6,.035),Kn(a,[r,o,a,l,c])}};function wt(i,e,t,n,s,r){i.push({t:e,i:t,f:n>0?vn(n):0,d:s,v:r})}function vr(i,e,t,n,s,r){for(let o of n)wt(i,e,t,o,s,r)}function KR(){let i=[],e=[[50,53,57,62],[46,50,53,58],[53,57,60,65],[48,52,55,60],[50,53,57,62],[43,46,50,55],[45,49,52,57],[50,53,57,62]],t=[0,1,2,3,2,1,2,3];return e.forEach((n,s)=>{let r=s*4;t.forEach((o,a)=>wt(i,r+a*.5,"harp",n[o],.5,a===0?.4:.28)),vr(i,r,"strings",[n[0]+12,n[1]+12,n[2]+12],4.1,.08),wt(i,r,"bass",n[0]-12,3.5,.28)}),[[0,69],[8,70],[16,69],[22,67],[24,65],[28,64]].forEach(([n,s])=>wt(i,n,"bell",s,3,.13)),{bpm:72,beats:32,events:i}}function JR(){let i=[],e=[43,47,50],t=[48,52,55],n=[40,43,47],s=[50,54,57];[e,e,t,e,n,t,s,s,e,e,t,[45,48,52],e,t,s,e].forEach((c,u)=>{let h=u*4;wt(i,h,"bass",c[0],.9,.4),wt(i,h+1.5,"bass",c[0],.4,.28),wt(i,h+2,"bass",c[0]+7,.9,.34),wt(i,h+3,"bass",c[0],.9,.28),vr(i,h,"strings",[c[0]+12,c[1]+12,c[2]+12],3.9,.065),wt(i,h+1,"harp",c[1]+24,.5,.15),wt(i,h+3.5,"harp",c[2]+24,.5,.12),wt(i,h,"kick",0,0,.42),wt(i,h+2,"kick",0,0,.34);for(let f=0;f<8;f++)wt(i,h+f*.5,"shaker",0,0,f%2?.13:.07)}),[3,7,11,15].forEach(c=>{[0,.25,.5,.75].forEach((u,h)=>wt(i,c*4+3+u,"taiko",0,0,.2+h*.05))});let a=[[0,71,1],[1,74,.5],[1.5,76,.5],[2,79,1.9],[4,78,1],[5,76,.5],[5.5,74,.5],[6,76,1.9],[8,72,1],[9,74,.5],[9.5,76,.5],[10,74,1],[11,71,.9],[12,69,2.4],[14.5,71,.5],[15,72,.9],[16,74,1],[17,79,1],[18,81,1.9],[20,83,1.4],[21.5,81,.5],[22,79,1],[23,76,.9],[24,74,1],[25,76,.5],[25.5,78,.5],[26,81,1],[27,78,.9],[28,79,2.8]],l=[[0,71,1],[1,74,.5],[1.5,76,.5],[2,79,1.9],[4,81,1],[5,79,.5],[5.5,78,.5],[6,79,1.9],[8,84,1],[9,83,.5],[9.5,81,.5],[10,79,1],[11,76,.9],[12,74,2.4],[14.5,74,.5],[15,76,.9],[16,79,1],[17,83,1],[18,86,1.9],[20,84,1.4],[21.5,83,.5],[22,81,1],[23,79,.9],[24,78,1],[25,81,1],[26,74,1],[27,76,.9],[28,79,2.8]];return a.forEach(([c,u,h])=>wt(i,c,"flute",u,h,.4)),l.forEach(([c,u,h])=>wt(i,c+32,"flute",u,h,.42)),{bpm:102,beats:64,events:i}}function $R(){let i=[];return[[0,[45,52,57]],[8,[41,48,53]],[16,[43,50,55]],[24,[40,47,52]]].forEach(([t,n])=>vr(i,t,"strings",n,8.2,.045)),[[0,69,2],[3,72,1],[4,76,3],[8,74,2],[11,72,1],[12,69,3.5],[16,67,2],[19,69,1],[20,74,3.5],[24,76,1.5],[26,72,1.5],[28,69,3.5]].forEach(([t,n,s])=>wt(i,t,"piano",n,s,.28)),wt(i,14,"piano",57,1.5,.16),wt(i,30,"piano",52,1.5,.14),{bpm:60,beats:32,events:i}}function jR(){let i=[];for(let e=0;e<8;e++)wt(i,e*4,"bass",38,4.3,.22),e%2===0&&vr(i,e*4,"strings",[50,57],8.3,.05);return[[0,74,3],[6,77,2],[10,79,2],[14,81,3],[20,79,2],[24,71,3],[28,72,2]].forEach(([e,t,n])=>wt(i,e,"bell",t,n,.24)),wt(i,12,"bell",86,2,.08),wt(i,26,"bell",84,2,.07),{bpm:66,beats:32,events:i}}function QR(){let i=[],e=[40,40,41,40,43,40,46,40],t=[45,45,46,45,48,45,51,45];for(let n=0;n<8;n++){let s=n<4?e:t,r=n*4;s.forEach((o,a)=>wt(i,r+a*.5,"bass",o,.28,a%2?.36:.48));for(let o=0;o<4;o++)wt(i,r+o,"kick",0,0,.5);wt(i,r+1,"snare",0,0,.36),wt(i,r+3,"snare",0,0,.36);for(let o=0;o<8;o++)wt(i,r+o*.5+.25,"shaker",0,0,.1);n%4===3&&[3,3.25,3.5,3.75].forEach((o,a)=>wt(i,r+o,"taiko",0,0,.26+a*.07))}return vr(i,0,"strings",[64,65,70],1.6,.15),vr(i,8,"strings",[64,65,70],1.6,.15),vr(i,16,"strings",[69,70,75],1.6,.16),vr(i,24,"strings",[70,71,76],1.6,.17),wt(i,4,"bell",76,1.5,.18),wt(i,12,"bell",75,1.5,.18),wt(i,20,"bell",81,1.5,.2),wt(i,28,"bell",82,1.5,.2),{bpm:140,beats:32,events:i}}function eC(){let i=[],e=[43,47,50],t=[48,52,55],n=[45,48,52],s=[50,54,57],r=[e,t,n,s,e,t,s,e],o=[0,2,1,2];return r.forEach((l,c)=>{let u=c*4;vr(i,u,"strings",[l[0]+12,l[1]+12,l[2]+12],4.2,.1),wt(i,u,"bass",l[0],3.6,.3),o.forEach((h,f)=>wt(i,u+f,"harp",l[h]+24,1,.18))}),[[0,71,1.5],[1.5,74,.5],[2,79,1.9],[4,81,1],[5,79,1],[6,76,1.9],[8,72,1],[9,74,1],[10,76,1],[11,74,.9],[12,71,1],[13,69,2.9],[16,74,1.5],[17.5,79,.5],[18,81,1.9],[20,83,2],[22,81,1],[23,79,.9],[24,78,1],[25,81,1],[26,79,1],[27,76,.9],[28,79,3.6]].forEach(([l,c,u])=>wt(i,l,"flute",c,u,.38)),[[0,67],[8,72],[16,67],[24,74]].forEach(([l,c])=>wt(i,l,"bell",c,2,.12)),{bpm:76,beats:32,events:i}}var kf={title:KR,field:JR,night:$R,shrine:jR,boss:QR,ending:eC},Zm={};function tC(i){if(!i||!kf[i])return null;if(!Zm[i]){let e=kf[i]();e.events.sort((t,n)=>t.t-n.t),Zm[i]=e}return Zm[i]}function L_(i,e){let t=tC(i);if(!t)return null;let n=ht(0);n.connect(Bl);let s=Le.currentTime;return n.gain.setValueAtTime(1e-4,s),n.gain.linearRampToValueAtTime(1,s+e),{name:i,def:t,g:n,idx:0,loopStart:s+.06,fading:!1,killAt:0}}function nC(i,e){if(i.fading)return;i.fading=!0;let t=Le.currentTime,n=i.g.gain.value;i.g.gain.cancelScheduledValues(t),i.g.gain.setValueAtTime(Math.max(n,1e-4),t),i.g.gain.linearRampToValueAtTime(1e-4,t+e),i.killAt=t+e+.15}function $m(i){if(Eo=i&&kf[i]?i:null,!!Le){for(let e of bo)nC(e,2);if(Eo&&Le.state==="running"){let e=L_(Eo,2);e&&bo.push(e)}}}function iC(i,e){let t=i.def,n=60/t.bpm,s=t.events,r=t.beats*n,o=Le.currentTime;if(i.loopStart+r<o){let l=Math.floor((o-i.loopStart)/r);i.loopStart+=l*r,i.idx=0}let a=0;for(;a++<4e3;){if(i.idx>=s.length){i.idx=0,i.loopStart+=r;continue}let l=s[i.idx],c=i.loopStart+l.t*n;if(c>=e)break;if(i.idx++,c<o-.03)continue;let u=Vt[l.i];u&&u(c,l.f,Math.max(.05,l.d*n),l.v,i.g)}}function sC(){if(!Le||Le.state!=="running")return;jm=Le.currentTime+4;let i=Le.currentTime+.05;[[0,79],[.14,84],[.28,88],[.42,91]].forEach(([e,t])=>{Vt.bell(i+e,vn(t),1,.34,bt),Vt.harp(i+e,vn(t),.8,.26,bt)}),[84,88,91,96].forEach(e=>Vt.bell(i+.72,vn(e),2.4,.16,bt)),Vt.strings(i+.72,vn(60),2.2,.07,bt),Vt.strings(i+.72,vn(64),2.2,.07,bt),Vt.strings(i+.72,vn(67),2.2,.07,bt)}function rC(){if(!Le||Le.state!=="running")return;jm=Le.currentTime+6;let i=Le.currentTime+.05,e=(t,n,s,r)=>{Vt.strings(i+t,vn(n),s,r,bt),Vt.bell(i+t,vn(n+12),s,r*.55,bt)};e(0,67,.16,.24),e(.2,67,.16,.24),e(.4,67,.16,.24),e(.6,72,.7,.28),e(1.35,71,.18,.24),e(1.55,72,.18,.24),e(1.75,74,.9,.3),[67,71,74,79].forEach(t=>e(2.7,t,2.2,.16)),[0,.6,1.75,2.7].forEach(t=>{Vt.kick(i+t,0,0,.5,bt),Vt.taiko(i+t,0,0,.4,bt)})}function D_(){if(!Le||Le.state!=="running")return;let i=Le.currentTime+.1;Vt.piano(i,vn(64),1.2,.32,bt),Vt.piano(i+.9,vn(60),1.2,.3,bt),Vt.piano(i+1.8,vn(57),2.5,.3,bt),Vt.strings(i+1.8,vn(45),2.6,.07,bt),Vt.strings(i+1.8,vn(52),2.6,.06,bt)}function oC(){if(!Le||Le.state!=="running")return;let i=Le.currentTime+.02;Vt.taiko(i,0,0,.6,bt),Vt.kick(i,0,0,.6,bt),Vt.taiko(i+.14,0,0,.5,bt),Vt.kick(i+.14,0,0,.55,bt),Vt.snare(i+.28,0,0,.4,bt)}function Zn(i,{type:e="bandpass",f0:t=800,f1:n=3e3,q:s=1,dur:r=.15,vel:o=.3,a=.01}){let l=Le.createBiquadFilter();l.type=e,l.Q.value=s,l.frequency.setValueAtTime(Math.max(30,t),i),l.frequency.exponentialRampToValueAtTime(Math.max(30,n),i+r);let c=ht(0),u=au(i,r+.12);u.connect(l),l.connect(c),c.connect(bt),c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(o,i+a),c.gain.linearRampToValueAtTime(1e-4,i+r),Kn(u,[l,c,u])}function Ol(i,e,t,n,s,r="sine"){let o=ht(0);o.connect(bt);let a=en(r,e,i,i+n+.05);a.connect(o),a.frequency.setValueAtTime(Math.max(20,e),i),a.frequency.exponentialRampToValueAtTime(Math.max(20,t),i+n),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(s,i+.012),o.gain.linearRampToValueAtTime(1e-4,i+n),Kn(a,[o,a])}function _r(i,e,t,n,s){let r=ht(0);r.connect(bt);let o=en("sine",e,i,i+n+.1);o.connect(r),o.frequency.setValueAtTime(e,i),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),i+n*.7),Bi(r.gain,i,s,n*.5),Kn(o,[r,o])}function Km(i,e,t){Zn(i,{f0:900*e,f1:4200*e,q:1.6,dur:.16,vel:.5*t}),Zn(i,{type:"highpass",f0:3e3*e,f1:7e3*e,q:.7,dur:.1,vel:.2*t}),Ol(i,520*e,180*e,.09,.1*t,"triangle")}var aC={sword1(i,e,t){Km(i,1,t)},sword2(i,e,t){Km(i,1.14,t)},sword3(i,e,t){Km(i,1.3,t)},hit(i,e,t){Zn(i,{f0:1100,f1:260,q:1.1,dur:.11,vel:.5*t}),_r(i,150,55,.14,.5*t)},kill(i,e,t){Ol(i,620,85,.42,.22*t,"sawtooth"),Zn(i,{f0:2200,f1:280,q:2,dur:.42,vel:.2*t}),Vt.bell(i,660,.35,.14*t,bt)},damage(i,e,t){_r(i,210,48,.2,.6*t),Zn(i,{type:"lowpass",f0:900,f1:160,dur:.14,vel:.3*t})},block(i,e,t){let n=ht(0);n.connect(bt);let s=en("square",820,i,i+.2),r=en("square",1240,i,i+.2),o=ht(.5);s.connect(n),r.connect(o),o.connect(n),Bi(n.gain,i,.26*t,.045),Kn(s,[n,s,r,o]),Zn(i,{type:"highpass",f0:4e3,f1:6e3,dur:.04,vel:.24*t}),_r(i,300,120,.07,.2*t)},step(i,e,t){let n=.9+Jn()*.22;_r(i,190*n,80*n,.07,.16*t),Zn(i,{type:"lowpass",f0:900*n,f1:300,dur:.05,vel:.07*t})},jump(i,e,t){Ol(i,300,620,.16,.18*t),Zn(i,{f0:500,f1:1400,q:1,dur:.12,vel:.08*t})},land(i,e,t){_r(i,170,60,.1,.3*t),Zn(i,{type:"lowpass",f0:800,f1:200,dur:.08,vel:.14*t})},roll(i,e,t){Zn(i,{f0:480,f1:950,q:.6,dur:.24,vel:.2*t,a:.05}),_r(i+.16,140,70,.08,.12*t)},pickup(i,e,t){Ol(i,880,1320,.09,.2*t),Vt.harp(i+.02,1760,.15,.12*t,bt)},heart(i,e,t){Vt.bell(i,vn(76),.5,.22*t,bt),Vt.bell(i+.13,vn(81),.8,.24*t,bt),Vt.harp(i,vn(64),.5,.14*t,bt)},orb(i,e,t){let n=ht(0);n.connect(bt);let s=en("sine",440,i,i+.7),r=en("sine",441.5,i,i+.7);s.connect(n),r.connect(n);for(let o of[s,r])o.frequency.setValueAtTime(440,i),o.frequency.exponentialRampToValueAtTime(1760,i+.55);lu(n.gain,i,.05,.16*t,.5,.15),Kn(s,[n,s,r]),Vt.bell(i+.5,vn(88),1.4,.26*t,bt),Vt.bell(i+.62,vn(93),1.6,.18*t,bt)},chest(i,e,t){[[0,72],[.13,76],[.26,79]].forEach(([n,s],r)=>{Vt.harp(i+n,vn(s),.4,.26*t,bt),Vt.bell(i+n,vn(s),r===2?1.4:.4,.18*t,bt)})},switch(i,e,t){_r(i,120,40,.28,.5*t),Zn(i,{type:"lowpass",f0:420,f1:90,dur:.24,vel:.28*t,a:.03}),Zn(i+.03,{f0:700,f1:300,q:5,dur:.16,vel:.09*t})},torch(i,e,t){Zn(i,{type:"lowpass",f0:3200,f1:420,dur:.2,vel:.4*t}),_r(i,110,60,.09,.2*t)},ui(i,e,t){Zn(i,{f0:1200,f1:1100,q:8,dur:.035,vel:.2*t,a:.004}),Ol(i,660,620,.05,.14*t,"triangle")},uiBack(i,e,t){Zn(i,{f0:800,f1:720,q:8,dur:.04,vel:.16*t,a:.004}),Ol(i,440,400,.06,.12*t,"triangle")},burn(i,e,t){Zn(i,{type:"lowpass",f0:2600,f1:380,dur:.3,vel:.4*t});for(let n=0;n<4;n++)Zn(i+.04+Jn()*.2,{f0:1500+Jn()*1500,f1:600,q:3,dur:.05,vel:.14*t});_r(i,100,50,.16,.28*t)}};function lC(){vs={};let i=e=>{let t=ht(0);return e(t),t.connect(fa),{g:t,target:0,applied:-1}};vs.wind=i(e=>{let t=Le.createBiquadFilter();t.type="bandpass",t.frequency.value=480,t.Q.value=.35;let n=Le.createBufferSource();n.buffer=Bf(),n.loop=!0,n.start(),n.connect(t),t.connect(e);let s=en("sine",.13,Le.currentTime,Le.currentTime+86400),r=ht(.35);s.connect(r),r.connect(e.gain);let o=ht(180);s.connect(o),o.connect(t.frequency)}),vs.rumble=i(e=>{let t=Le.createBiquadFilter();t.type="lowpass",t.frequency.value=75,t.Q.value=1.1;let n=Le.createBufferSource();n.buffer=Bf(),n.loop=!0,n.start(),n.connect(t),t.connect(e);let s=en("sine",.45,Le.currentTime,Le.currentTime+86400),r=ht(.5);s.connect(r),r.connect(e.gain)}),vs.water=i(e=>{let t=Le.createBiquadFilter();t.type="bandpass",t.frequency.value=950,t.Q.value=.6;let n=Le.createBufferSource();n.buffer=Bf(),n.loop=!0,n.start(),n.connect(t),t.connect(e);let s=en("sine",.7,Le.currentTime,Le.currentTime+86400),r=ht(.6);s.connect(r),r.connect(e.gain);let o=ht(320);s.connect(o),o.connect(t.frequency)})}function cC(i){let e=2300+Jn()*1500,t=2+(Jn()*3|0),n=ht(0),s=P_(Jn()*1.6-.8),r=en("sine",e,i,i+t*.13+.1);r.connect(n),n.connect(s),s.connect(fa);for(let o=0;o<t;o++){let a=i+o*(.08+Jn()*.05);r.frequency.setValueAtTime(e+Jn()*350,a),r.frequency.exponentialRampToValueAtTime(e*(1.22+Jn()*.25),a+.05),n.gain.setValueAtTime(1e-4,a),n.gain.linearRampToValueAtTime(.05+Jn()*.035,a+.015),n.gain.linearRampToValueAtTime(1e-4,a+.065)}Kn(r,[n,s,r])}function uC(i){let e=P_(Jn()*1.2-.6);e.connect(fa);let t=null;for(let n=0;n<3;n++){let s=i+n*.085,r=en("triangle",4250+Jn()*120,s,s+.06),o=ht(0);r.connect(o),o.connect(e),o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(.028,s+.012),o.gain.linearRampToValueAtTime(1e-4,s+.05),Kn(r,[r,o]),t=r}if(t){let n=t.onended;t.onended=()=>{n?.();try{e.disconnect()}catch{}}}}function Jm(i,e,t){Math.abs(e.applied-t)<.004||(e.applied=t,i.setTargetAtTime(t,Le.currentTime,.4))}function hC(i,e){let t=i.state,n=t==="playing"||t==="boss",s=n||t==="title"||t==="ending",r=0,o=0,a=0;if(s&&t!=="paused"&&(r=.05),n&&i.world&&i.player){let u=i.world.getBiome(i.player.position.x,i.player.position.z);u==="volcano"&&(o=.14),u==="lake"&&(a=.09)}t==="shrine"&&(r=0,o=0,a=0),Jm(vs.wind.g.gain,vs.wind,r),Jm(vs.rumble.g.gain,vs.rumble,o),Jm(vs.water.g.gain,vs.water,a);let l=t==="playing"&&!i.time.isNight,c=t==="playing"&&i.time.isNight;l?zl<e+.4&&(cC(Math.max(zl,e+.08)),zl=Math.max(zl,e)+1.2+Jn()*4.5):zl=Math.max(zl,e+1.5),c?Fl<e+.4&&(uC(Math.max(Fl,e+.08)),Fl=Math.max(Fl,e)+1.05+Jn()*.25):Fl=Math.max(Fl,e+1.5)}async function fC(i){i.audio={unlock(){try{if(Le||YR(),Le&&Le.state!=="running"){let e=Le.resume();e&&e.catch&&e.catch(()=>{})}}catch{}},play(e,t={}){try{if(!Le||Le.state!=="running")return;let n=aC[e];if(!n)return;n(Le.currentTime+.005,t||{},Re((t&&t.vol)!=null?t.vol:1,0,2))}catch{}},setMusic(e){try{let t=e||null;if(t===Eo||t&&!kf[t])return;$m(t)}catch{}}},i.on("shrine-complete",()=>{try{sC()}catch{}}),i.on("boss-defeated",()=>{try{rC()}catch{}}),i.on("boss-phase",()=>{try{oC()}catch{}}),i.on("player-died",()=>{try{Of=!0,$m(null),D_()}catch{}})}function dC(i,e){if(!Le||Le.state!=="running")return;let t=Le.currentTime,n=i.state,s=1;n==="paused"&&(s=.4),t<jm&&(s*=.3);let r=Re(i.settings.musicVol!=null?i.settings.musicVol:.7,0,1),o=Re(i.settings.sfxVol!=null?i.settings.sfxVol:.9,0,1);if(Bl.gain.setTargetAtTime(r*s*.9,t,.12),bt.gain.setTargetAtTime(o,t,.12),fa.gain.setTargetAtTime(o*(n==="paused"?.2:.85),t,.25),n!=="paused"){let l;n==="title"?l="title":n==="ending"?l="ending":n==="boss"?l="boss":n==="shrine"?l="shrine":n==="playing"?l=i.time.isNight?"night":"field":l=null,l!==C_&&(C_=l,l!==Eo&&$m(l))}if(n==="gameover"&&I_!=="gameover"&&!Of){Of=!0;try{D_()}catch{}}if(n==="playing"&&(Of=!1),I_=n,Eo&&!bo.some(l=>l.name===Eo&&!l.fading)){let l=L_(Eo,1.5);l&&bo.push(l)}let a=t+qR;for(let l of bo)iC(l,a);bo.some(l=>l.killAt&&t>l.killAt)&&(bo=bo.filter(l=>{if(l.killAt&&t>l.killAt){try{l.g.disconnect()}catch{}return!1}return!0})),vs&&hC(i,t)}var Gl={};bs(Gl,{init:()=>yC,update:()=>_C});var $e=null,gn=null,te={},To={playTime:0,kills:0},N_="M12 20.3C7.9 17.2 1.7 12.6 1.7 7.8 1.7 4.8 4 2.6 6.7 2.6c2.1 0 4 1.2 5.3 3.3 1.3-2.1 3.2-3.3 5.3-3.3 2.7 0 5 2.2 5 5.2 0 4.8-6.2 9.4-10.3 12.5z",pC=150.8,mC=["\u9060\u304D\u6614\u2014\u2014\u5927\u5730\u30A2\u30EB\u30C7\u30A3\u30A2\u3092\u95C7\u3067\u8986\u3063\u305F\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9\u306F\u3001\u521D\u4EE3\u52C7\u8005\u306E\u5263\u306B\u3088\u3063\u3066\u5317\u306E\u53E4\u57CE\u306E\u5965\u6DF1\u304F\u306B\u5C01\u3058\u3089\u308C\u305F\u3002","\u3060\u304C\u6C38\u304D\u6642\u306F\u5C01\u5370\u3092\u8755\u307F\u3001\u9B54\u7363\u306F\u3044\u307E\u518D\u3073\u76EE\u899A\u3081\u308B\u3002\u57CE\u306F\u7634\u6C17\u306B\u6C88\u307F\u3001\u5927\u5730\u306B\u306F\u9B54\u7269\u306E\u5F71\u304C\u9019\u3044\u59CB\u3081\u305F\u2026\u2026\u3002","\u7DD1\u8863\u306E\u52C7\u8005\u3088\u2014\u20144\u3064\u306E\u7960\u3092\u5DE1\u308A\u300C\u6C17\u306E\u73E0\u300D\u30923\u3064\u96C6\u3081\u3001\u5317\u306E\u9B54\u57CE\u306E\u7D50\u754C\u3092\u7834\u308B\u306E\u3060\u3002\u5927\u5730\u306E\u547D\u904B\u306F\u3001\u305D\u306E\u624B\u306B\u3002"],gC=[["W A S D","\u79FB\u52D5"],["\u30DE\u30A6\u30B9","\u30AB\u30E1\u30E9"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3"],["C","\u56DE\u907F\u30ED\u30FC\u30EB"]],xC=[["WASD / \u77E2\u5370","\u79FB\u52D5"],["\u30DE\u30A6\u30B9 / \u30C9\u30E9\u30C3\u30B0","\u30AB\u30E1\u30E9(\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u56FA\u5B9A)"],["Shift","\u30C0\u30C3\u30B7\u30E5(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB)"],["Space","\u30B8\u30E3\u30F3\u30D7"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483(3\u6BB5\u30B3\u30F3\u30DC)"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u76FE\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3\u5207\u66FF"],["C","\u56DE\u907F\u30ED\u30FC\u30EB(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB\u30FB\u7121\u6575\u6642\u9593)"],["E","\u8ABF\u3079\u308B\u30FB\u8A71\u3059\u30FB\u6C7A\u5B9A"],["Esc / P","\u30DD\u30FC\u30BA"]];function yt(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t&&t.appendChild(n),n}function cu(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}function H_(i){return i.split(" / ").map(e=>`<span class="kc">${e}</span>`).join('<span class="ksep">/</span>')}function G_(i){i=Math.max(0,Math.floor(i));let e=Math.floor(i/3600),t=Math.floor(i%3600/60),n=i%60;return e>0?`${e}\u6642\u9593${t}\u5206${n}\u79D2`:t>0?`${t}\u5206${n}\u79D2`:`${n}\u79D2`}function Hf(i){clearTimeout(i._hideT),i.classList.remove("leaving"),i.classList.add("visible")}function Gf(i){!i.classList.contains("visible")||i.classList.contains("leaving")||(i.classList.add("leaving"),i._hideT=setTimeout(()=>i.classList.remove("visible","leaving"),400))}async function yC(i){$e=i,gn=document.getElementById("ui-root"),gn.innerHTML="",MC(),bC(),TC(),NC(),SC(),FC(),zC(),WC(),HC(),BC(),EC(),qC(),ZC(),JC(),$C(),QC(),n3(),PC(),i.ui={showMessage:OC,showDialog:K_,setPrompt:W_,toast:kC,setBossBar:X_,flash:ev},i.on("state",vC),i.on("player-damaged",RC),i.on("enemy-killed",()=>{To.kills++}),i.on("pickup",CC),i.on("game-start",()=>{To.playTime=0,To.kills=0}),document.body.dataset.uistate=i.state}function _C(i,e){let t=i.state,n=t==="playing"||t==="shrine"||t==="boss";n&&(To.playTime+=e),uu.open&&i.input.justPressed("Escape")&&Yf(),rt.active&&GC(e,n||t==="title"),n&&(AC(e),UC()),ki.visible&&q_(e)}function vC(i){let e=i.to;document.body.dataset.uistate=e,Yf(!0);let t=e==="playing"||e==="shrine"||e==="boss";te.hud.classList.toggle("on",t),e==="title"?Hf(te.title):Gf(te.title),e==="paused"?(KC(),Hf(te.pause)):Gf(te.pause),e==="gameover"?Hf(te.gameover):Gf(te.gameover),e==="ending"?(jC(),Hf(te.ending)):Gf(te.ending),!t&&e!=="paused"&&(W_(null),te.reticle.classList.remove("on"),ig=!1,te.guide.classList.remove("on"),te.vignette.classList.remove("active"),ng=!1,(e==="title"||e==="ending")&&X_(!1)),(e==="gameover"||e==="title"||e==="ending")&&VC()}function MC(){let i=yt("div","svg-defs",gn);i.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
    <linearGradient id="ui-hgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff7583"/><stop offset=".5" stop-color="#dd2a41"/><stop offset="1" stop-color="#9c1128"/>
    </linearGradient>
    <linearGradient id="ui-ggrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a8f0be"/><stop offset=".45" stop-color="#4fc47a"/><stop offset="1" stop-color="#1e7a48"/>
    </linearGradient>
  </defs></svg>`}function bC(){te.vignette=yt("div","",gn),te.vignette.id="vignette"}function EC(){te.flash=yt("div","",gn),te.flash.id="flash"}function SC(){te.floatLayer=yt("div","",gn),te.floatLayer.id="float-layer"}function TC(){let i=yt("div","",gn);i.id="hud",te.hud=i;let e=yt("div","",i);e.id="hud-left",te.hearts=yt("div","",e),te.hearts.id="hearts";let t=yt("div","",e);t.id="stamina",te.stamina=t,t.innerHTML=`<svg viewBox="0 0 60 60">
    <circle class="stb" cx="30" cy="30" r="24"/>
    <circle class="stf" cx="30" cy="30" r="24" transform="rotate(-90 30 30)" stroke-dashoffset="0"/>
  </svg>`,te.stFg=t.querySelector(".stf");let n=yt("div","",e);n.id="orbs",te.orbs=[];for(let l=0;l<4;l++)te.orbs.push(yt("span","orb",n));let s=yt("div","",e);s.id="gems",te.gems=s,s.innerHTML=`<svg viewBox="0 0 24 24">
    <path d="M12 2.4 19.6 9 12 21.6 4.4 9Z" fill="url(#ui-ggrad)" stroke="rgba(235,255,240,.4)" stroke-width=".7"/>
    <path d="M4.4 9h15.2M12 2.4 8.4 9l3.6 12.6L15.6 9 12 2.4" fill="none" stroke="rgba(240,255,245,.3)" stroke-width=".6"/>
  </svg><span class="g-count">0</span>`,te.gemCount=s.querySelector(".g-count");let r=yt("div","",i);r.id="minimap";let o=document.createElement("canvas");o.width=340,o.height=340,r.appendChild(o),te.mapCanvas=o;let a=yt("div","",i);a.id="prompt",te.prompt=a,te.pKey=yt("span","p-key",a),te.pTxt=yt("span","p-txt",a)}var U_=-1,Vf=-1,ng=!1;function wC(i,e){let t="";for(let n=0;n<e;n++){let s=i-n,r=s>=1?"full":s>=.5?"half":"empty";t+=`<svg class="heart ${r}" viewBox="0 0 24 22"><path class="hb" d="${N_}"/><path class="hf" d="${N_}" fill="url(#ui-hgrad)"/></svg>`}te.hearts.innerHTML=t}var Wf=!1,Qm=0,Xf=!1,z_=-1,F_=-1,qf=-1;function AC(i){let e=$e.player;if(!e)return;let t=Math.round(Re(e.hp,0,99)*2)/2,n=Math.max(1,Math.round(e.maxHp));(t!==U_||n!==Vf)&&(Vf>0&&n>Vf&&cu(te.hearts,"bless"),wC(t,n),U_=t,Vf=n);let s=e.hp>0&&e.hp<=1;s!==ng&&(ng=s,te.vignette.classList.toggle("active",s));let r=Re(e.stamina/Math.max(1,e.maxStamina),0,1);r>=.999?(Qm+=i,Wf&&Qm>.55&&(Wf=!1,te.stamina.classList.remove("on"))):(Qm=0,Wf||(Wf=!0,te.stamina.classList.add("on"))),!Xf&&e.stamina<=.02?(Xf=!0,te.stamina.classList.add("ex")):Xf&&e.stamina>30&&(Xf=!1,te.stamina.classList.remove("ex"));let o=Math.round(pC*(1-r)*10)/10;o!==z_&&(z_=o,te.stFg.style.strokeDashoffset=o);let a=Re(e.spiritOrbs|0,0,4);if(a!==F_){for(let c=0;c<4;c++){let u=te.orbs[c];c<a?u.classList.contains("lit")||(u.classList.add("lit"),cu(u,"gain"),setTimeout(()=>u.classList.remove("gain"),950)):u.classList.remove("lit")}F_=a}let l=e.gems|0;l!==qf&&(te.gemCount.textContent=l,qf>=0&&l>qf&&cu(te.gems,"pop"),qf=l),DC()}function RC(){cu(te.hearts,"hurt"),ev("rgba(186,26,42,1)",.16)}function CC(i){let e=i&&i.kind,t=innerWidth*.5,n=innerHeight*.58;if(i&&i.pos&&$e.camera){let r=V_(i.pos,1.4);r.ok&&(t=r.x,n=r.y)}IC("+1",t,n,e==="heart"?"#ff93a0":e==="orb"?"#66ecd9":"#93e6ab")}function IC(i,e,t,n){let s=yt("div","float-txt",te.floatLayer);s.textContent=i,s.style.left=e+"px",s.style.top=t+"px",n&&(s.style.color=n),setTimeout(()=>s.remove(),1250)}var So={g:null,off:null,shade:null};function PC(){try{let i=te.mapCanvas.getContext("2d");So.g=i;let e=i.createRadialGradient(85,85,28,85,85,85);e.addColorStop(0,"rgba(6,10,12,0)"),e.addColorStop(.78,"rgba(6,10,12,.1)"),e.addColorStop(1,"rgba(6,10,12,.46)"),So.shade=e;let t=$e.world;if(!t||!t.getHeight)return;let n=64,s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),o=r.createImageData(n,n),a=new Float32Array(n*n),l=1e9,c=-1e9;for(let m=0;m<n;m++)for(let p=0;p<n;p++){let _=-1e3+(p+.5)*2e3/n,M=-1e3+(m+.5)*2e3/n,y=0;try{y=t.getHeight(_,M)||0}catch{}a[m*n+p]=y,y<l&&(l=y),y>c&&(c=y)}let u=Math.max(1,c-l),h={plains:[96,152,78],forest:[50,104,78],lake:[70,140,168],volcano:[116,66,52],castle:[80,70,100],ruins:[130,124,108]},f=[46,106,142],d=typeof t.waterLevel=="number"?t.waterLevel:-1e9;for(let m=0;m<n;m++)for(let p=0;p<n;p++){let _=-1e3+(p+.5)*2e3/n,M=-1e3+(m+.5)*2e3/n,y="plains";try{y=t.getBiome(_,M)||"plains"}catch{}let L=a[m*n+p],T=L<=d+.15?f:h[y]||h.plains,w=.6+.52*((L-l)/u),I=(m*n+p)*4;o.data[I]=Math.min(255,T[0]*w),o.data[I+1]=Math.min(255,T[1]*w),o.data[I+2]=Math.min(255,T[2]*w),o.data[I+3]=255}r.putImageData(o,0,0);let g=document.createElement("canvas");g.width=g.height=256;let x=g.getContext("2d");x.imageSmoothingEnabled=!0,x.imageSmoothingQuality="high",x.drawImage(s,0,0,256,256),So.off=g}catch{}}function LC(i,e,t,n,s){i.save(),i.translate(e,t),i.rotate(Math.PI/4),i.shadowColor=s,i.shadowBlur=6,i.fillStyle=s,i.fillRect(-n*.72,-n*.72,n*1.44,n*1.44),i.restore()}function DC(){let i=So.g;if(!i)return;let e=170,t=85,n=83,s=e/2e3;i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,e,e),i.save(),i.beginPath(),i.arc(t,t,n,0,Math.PI*2),i.clip(),So.off?i.drawImage(So.off,0,0,256,256,0,0,e,e):(i.fillStyle="#20303a",i.fillRect(0,0,e,e)),So.shade&&(i.fillStyle=So.shade,i.fillRect(0,0,e,e));let r=$e.shrines&&$e.shrines.list;if(r)for(let l=0;l<r.length;l++){let c=r[l];!c||!c.pos||LC(i,t+c.pos.x*s,t+c.pos.z*s,4.4,c.completed?"#eccb66":"#3fe6d2")}let o=$e.world&&$e.world.castleGatePos;if(o){let l=t+o.x*s,c=t+o.z*s;i.save(),i.shadowColor="#c08df0",i.shadowBlur=6,i.fillStyle="#bd88ef",i.beginPath(),i.moveTo(l,c-5.4),i.lineTo(l+4.8,c+3.8),i.lineTo(l-4.8,c+3.8),i.closePath(),i.fill(),i.restore()}let a=$e.player;if(a&&a.position){let l=a.position.x*s,c=a.position.z*s,u=Math.hypot(l,c),h=n-8;u>h&&(l*=h/u,c*=h/u),i.save(),i.translate(t+l,t+c),i.rotate(Math.PI-(a.heading||0)),i.shadowColor="rgba(255,244,206,.95)",i.shadowBlur=5,i.fillStyle="#fff6da",i.beginPath(),i.moveTo(0,-6.2),i.lineTo(4.4,4.8),i.lineTo(0,2.3),i.lineTo(-4.4,4.8),i.closePath(),i.fill(),i.restore()}i.restore(),i.beginPath(),i.arc(t,t,n,0,Math.PI*2),i.strokeStyle="rgba(201,162,39,.8)",i.lineWidth=1.3,i.stroke(),i.beginPath(),i.arc(t,t,n-3.5,0,Math.PI*2),i.strokeStyle="rgba(201,162,39,.22)",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(t,t-n+10,8,0,Math.PI*2),i.fillStyle="rgba(8,12,15,.82)",i.fill(),i.strokeStyle="rgba(201,162,39,.55)",i.lineWidth=1,i.stroke(),i.font="10px serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ecc966",i.fillText("\u5317",t,t-n+10.5)}var O_=new je,Hl={x:0,y:0,ok:!1},ig=!1;function V_(i,e){let t=$e.camera;return t.updateMatrixWorld(),O_.copy(t.matrixWorld).invert(),Ae.v1.set(i.x,i.y+(e||0),i.z).applyMatrix4(O_),Ae.v1.z>-.35?(Hl.ok=!1,Hl):(Ae.v1.applyMatrix4(t.projectionMatrix),Hl.ok=Ae.v1.x>-1.08&&Ae.v1.x<1.08&&Ae.v1.y>-1.08&&Ae.v1.y<1.08,Hl.x=(Ae.v1.x*.5+.5)*innerWidth,Hl.y=(.5-Ae.v1.y*.5)*innerHeight,Hl)}function NC(){let i=yt("div","",gn);i.id="reticle",te.reticle=i,yt("div","r1",i),yt("div","r2",i)}function UC(){let i=$e.camera3p&&$e.camera3p.lockTarget,e=!1;if(i&&i.alive!==!1&&i.pos){let t=V_(i.pos,(i.radius||.8)*1.1);t.ok&&(e=!0,te.reticle.style.transform=`translate3d(${t.x.toFixed(1)}px,${t.y.toFixed(1)}px,0)`)}e!==ig&&(ig=e,te.reticle.classList.toggle("on",e))}var B_=null;function W_(i){let e=i||null;if(e===B_)return;if(B_=e,!e){te.prompt.classList.remove("on");return}let t=/^([A-Za-z0-9]{1,8})\s*キー\s*[::]?\s*(.*)$/.exec(e);t?(te.pKey.style.display="",te.pKey.textContent=t[1],te.pTxt.textContent=t[2]||""):(te.pKey.style.display="none",te.pTxt.textContent=e),cu(te.prompt,"on")}var ki={visible:!1,ghost:1,lastFill:-1,lastGhost:-1};function zC(){let i=yt("div","",gn);i.id="bossbar",te.bossbar=i,i.innerHTML=`<div class="bb-name"></div>
    <div class="bb-frame"><div class="bb-track"><div class="bb-ghost"></div><div class="bb-fill"></div></div></div>`,te.bbName=i.querySelector(".bb-name"),te.bbFill=i.querySelector(".bb-fill"),te.bbGhost=i.querySelector(".bb-ghost")}function X_(i,e){let t=!!i;e!=null&&(te.bbName.textContent=String(e)),t!==ki.visible&&(ki.visible=t,t&&(ki.ghost=1,ki.lastFill=-1,ki.lastGhost=-1,q_(0)),te.bossbar.classList.toggle("on",t))}function q_(i){let e=$e.boss;if(!e)return;let t=Re(e.maxHp>0?e.hp/e.maxHp:0,0,1);ki.ghost=Math.max(t,ze(ki.ghost,t,2.2,i));let n=Math.round(t*1e3)/10,s=Math.round(ki.ghost*1e3)/10;n!==ki.lastFill&&(ki.lastFill=n,te.bbFill.style.width=n+"%"),s!==ki.lastGhost&&(ki.lastGhost=s,te.bbGhost.style.width=s+"%")}var sg=[],eg=!1;function FC(){te.msgLayer=yt("div","",gn),te.msgLayer.id="msg-layer"}function OC(i,e){let t=e||{};sg.push({text:String(i??""),duration:typeof t.duration=="number"?t.duration:3,sub:t.sub==null?null:String(t.sub)}),Y_()}function Y_(){if(eg||!sg.length)return;eg=!0;let i=sg.shift(),e=yt("div","msg",te.msgLayer);yt("div","msg-rule",e);let t=yt("div","msg-text",e);if(t.textContent=i.text,i.sub){let n=yt("div","msg-sub",e);n.textContent=i.sub}yt("div","msg-rule",e),requestAnimationFrame(()=>e.classList.add("in")),setTimeout(()=>{e.classList.add("outing"),setTimeout(()=>{e.remove(),eg=!1,Y_()},620)},Math.max(.4,i.duration)*1e3+420)}var rg=[],tg=0;function BC(){te.toastLayer=yt("div","",gn),te.toastLayer.id="toast-layer"}function kC(i){rg.push(String(i??"")),Z_()}function Z_(){if(tg>=4||!rg.length)return;tg++;let i=rg.shift(),e=yt("div","toast",te.toastLayer),t=yt("span","t-dia",e);t.textContent="\u25C6";let n=yt("span","",e);n.textContent=i,requestAnimationFrame(()=>e.classList.add("in")),setTimeout(()=>{e.classList.add("out"),setTimeout(()=>{e.remove(),tg--,Z_()},380)},2500)}var rt={q:[],active:!1,lines:null,onDone:null,li:0,chars:0,t:0,done:!1};function HC(){let i=yt("div","panel",gn);i.id="dialog",te.dialog=i;let e=yt("div","dlg-orn",i);e.textContent="\u25C6",te.dlgText=yt("div","dlg-text",i),te.dlgNext=yt("div","dlg-next",i),te.dlgNext.textContent="\u25BC",i.addEventListener("click",()=>Q_())}function K_(i,e){let t=Array.isArray(i)?i.filter(n=>n!=null).map(String):i!=null?[String(i)]:[];if(!t.length){typeof e=="function"&&e();return}rt.q.push({lines:t,onDone:e}),rt.active||J_()}function J_(){let i=rt.q.shift();if(!i){rt.active=!1;return}rt.active=!0,rt.lines=i.lines,rt.onDone=i.onDone,te.dialog.classList.add("visible"),$_(0)}function $_(i){rt.li=i,rt.chars=0,rt.t=0,rt.done=!1,te.dlgText.textContent="",te.dlgNext.classList.remove("on")}function j_(){let i=rt.lines[rt.li];te.dlgText.textContent=i.slice(0,rt.chars),rt.chars>=i.length&&(rt.done=!0,te.dlgNext.classList.add("on"))}function Q_(){if(!rt.active||!rt.lines)return;if($e.audio&&$e.audio.play&&$e.audio.play("ui"),!rt.done){rt.chars=rt.lines[rt.li].length,j_();return}if(rt.li<rt.lines.length-1){$_(rt.li+1);return}let i=rt.onDone;if(rt.lines=null,rt.onDone=null,rt.done=!1,te.dialog.classList.remove("visible"),setTimeout(J_,280),typeof i=="function")try{i()}catch{}}function GC(i,e){if(rt.lines){if(!rt.done){rt.t+=i;let t=rt.lines[rt.li],n=rt.chars;for(;rt.t>=.02&&n<t.length;)rt.t-=.02,n++;n!==rt.chars&&(rt.chars=n,j_())}e&&$e.input.justPressed("KeyE")&&Q_()}}function VC(){rt.q.length=0,rt.lines=null,rt.onDone=null,rt.active=!1,rt.done=!1,te.dialog.classList.remove("visible")}function ev(i,e){let t=te.flash;t.style.transition="none",t.style.background=i||"#ffffff",t.style.opacity=String(Re(e??.5,0,1)),t.offsetWidth,t.style.transition="opacity .3s ease-out",t.style.opacity="0"}function WC(){let i=yt("div","panel",gn);i.id="guide",te.guide=i;let e="";for(let[t,n]of gC)e+=`<div class="gd-k">${H_(t)}</div><div class="gd-a">${n}</div>`;i.innerHTML=`<div class="gd-title">\u65C5\u306E\u5FC3\u5F97</div><div class="gd-rows">${e}</div>`}function XC(){te.guide.classList.add("on"),clearTimeout(te.guide._t),te.guide._t=setTimeout(()=>te.guide.classList.remove("on"),5e3)}function qC(){let i=yt("section","screen",gn);i.id="title-screen",te.title=i,i.innerHTML=`
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
    <footer class="tt-foot">\u30AA\u30EA\u30B8\u30CA\u30EB\u30D5\u30A1\u30F3\u30E1\u30A4\u30C9\u4F5C\u54C1 \u2014 \u30BC\u30EB\u30C0\u306E\u4F1D\u8AAC\u3078\u306E\u30AA\u30DE\u30FC\u30B8\u30E5</footer>`,i.addEventListener("click",e=>{let t=e.target.closest("button[data-act]");if(!t)return;let n=t.dataset.act;n==="start"?YC():n==="controls"?og("controls"):n==="settings"&&og("settings")})}function YC(){$e.emit("game-start"),K_(mC,XC)}function ZC(){let i=yt("section","screen",gn);i.id="pause-screen",te.pause=i,i.innerHTML=`
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
    </div>`,te.pzTime=i.querySelector(".pz-time"),te.pzKills=i.querySelector(".pz-kills"),te.pzGems=i.querySelector(".pz-gems"),i.addEventListener("click",e=>{let t=e.target.closest("button[data-act]");if(!t)return;let n=t.dataset.act;n==="resume"?$e.setState($e._pausedFrom||"playing"):n==="settings"?og("settings"):n==="title"&&$e.emit("title-request")})}function KC(){te.pzTime.textContent=G_(To.playTime),te.pzKills.textContent=String(To.kills),te.pzGems.textContent=String($e.player?$e.player.gems|0:0)}function JC(){let i=yt("section","screen",gn);i.id="gameover-screen",te.gameover=i,i.innerHTML=`
    <div class="go-text">\u52C7\u8005\u306F\u5012\u308C\u305F\u2026</div>
    <nav class="go-menu">
      <button class="obtn" data-act="respawn">\u3075\u305F\u305F\u3073\u6311\u3080</button>
      <button class="obtn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>
    </nav>`,i.addEventListener("click",e=>{let t=e.target.closest("button[data-act]");t&&(t.dataset.act==="respawn"?$e.emit("respawn-request"):$e.emit("title-request"))})}function $C(){let i=yt("section","screen",gn);i.id="ending-screen",te.ending=i,i.innerHTML=`
    <div class="ed-l1">\u9B54\u7363\u306F\u8A0E\u305F\u308C\u3001\u5927\u5730\u306B\u671D\u304C\u623B\u3063\u305F</div>
    <div class="ed-l2">\u4F1D\u8AAC\u306F\u8A9E\u308A\u7D99\u304C\u308C\u308B</div>
    <div class="ed-orn">\u25C6</div>
    <div class="ed-stats">
      <div class="stat"><span class="s-l">\u30AF\u30EA\u30A2\u6642\u9593</span><span class="s-v ed-time">\u2014</span></div>
      <div class="stat"><span class="s-l">\u8A0E\u4F10\u3057\u305F\u9B54\u7269</span><span class="s-v ed-kills">0</span></div>
      <div class="stat"><span class="s-l">\u96C6\u3081\u305F\u7DD1\u77F3</span><span class="s-v ed-gems">0</span></div>
    </div>
    <button class="mbtn ed-btn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>`,i.querySelector(".ed-btn").addEventListener("click",()=>$e.emit("title-request"))}function jC(){te.ending.querySelector(".ed-time").textContent=G_(To.playTime),te.ending.querySelector(".ed-kills").textContent=String(To.kills),te.ending.querySelector(".ed-gems").textContent=String($e.player?$e.player.gems|0:0)}var uu={open:!1,kind:null};function QC(){let i=yt("div","",gn);i.id="modal-layer",te.modal=i,i.innerHTML=`
    <div class="modal-back"></div>
    <div class="modal panel">
      <button class="modal-x" aria-label="\u9589\u3058\u308B">\xD7</button>
      <h2 class="modal-title"></h2>
      <div class="modal-body"></div>
    </div>`,te.modalTitle=i.querySelector(".modal-title"),te.modalBody=i.querySelector(".modal-body"),i.querySelector(".modal-back").addEventListener("click",()=>Yf()),i.querySelector(".modal-x").addEventListener("click",()=>Yf()),e3(),t3()}function e3(){let i=document.createElement("div");i.className="set-body",i.innerHTML=`
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
    <p class="set-note">\u753B\u8CEA\u3092\u5909\u3048\u308B\u3068\u3001\u8349\u6728\u306E\u5BC6\u5EA6\u3084\u5149\u306E\u8868\u73FE\u304C\u5909\u308F\u308A\u307E\u3059\u3002</p>`,te.setBody=i,i.querySelector(".seg").addEventListener("click",n=>{let s=n.target.closest("button[data-q]");s&&($e.settings.quality=s.dataset.q,$e.applyQuality&&$e.applyQuality(),tv())});let e=i.querySelector(".vol-music"),t=i.querySelector(".vol-sfx");e.addEventListener("input",()=>{$e.settings.musicVol=Re(Number(e.value)||0,0,1),i.querySelector(".vm").textContent=Math.round($e.settings.musicVol*100)}),t.addEventListener("input",()=>{$e.settings.sfxVol=Re(Number(t.value)||0,0,1),i.querySelector(".vs").textContent=Math.round($e.settings.sfxVol*100)}),t.addEventListener("change",()=>{$e.audio&&$e.audio.play&&$e.audio.play("ui")})}function tv(){let i=te.setBody;i.querySelectorAll(".seg button").forEach(n=>n.classList.toggle("active",n.dataset.q===$e.settings.quality));let e=i.querySelector(".vol-music"),t=i.querySelector(".vol-sfx");e.value=$e.settings.musicVol,t.value=$e.settings.sfxVol,i.querySelector(".vm").textContent=Math.round($e.settings.musicVol*100),i.querySelector(".vs").textContent=Math.round($e.settings.sfxVol*100)}function t3(){let i=document.createElement("div");i.className="ctl-body";let e="";for(let[t,n]of xC)e+=`<tr><td class="k">${H_(t)}</td><td class="a">${n}</td></tr>`;i.innerHTML=`<table class="ctl-table"><tbody>${e}</tbody></table>`,te.ctlBody=i}function og(i){uu.open=!0,uu.kind=i,te.modalTitle.textContent=i==="settings"?"\u8A2D\u5B9A":"\u64CD\u4F5C\u65B9\u6CD5",te.modalBody.innerHTML="",te.modalBody.appendChild(i==="settings"?te.setBody:te.ctlBody),i==="settings"&&tv(),te.modal.classList.toggle("wide",i==="controls"),te.modal.classList.add("open"),gn.classList.add("modal-open")}function Yf(i){uu.open&&(uu.open=!1,te.modal.classList.remove("open"),gn.classList.remove("modal-open"),!i&&$e.audio&&$e.audio.play&&$e.audio.play("uiBack"))}var k_=null;function n3(){gn.addEventListener("pointerover",i=>{let e=i.target.closest?i.target.closest("button"):null;e!==k_&&(k_=e,e&&$e.audio&&$e.audio.play&&$e.audio.play("ui"))}),gn.addEventListener("pointerdown",i=>{i.target.closest&&i.target.closest("button")&&$e.audio&&$e.audio.play&&$e.audio.play("ui")})}var wo=document.getElementById("game"),Os=new ch({canvas:wo,antialias:!0,powerPreference:"high-performance"});Os.shadowMap.enabled=!0;Os.shadowMap.type=t0;Os.outputColorSpace=rn;Os.toneMapping=wc;Os.toneMappingExposure=1.05;var av=new hh,hu=new An(55,innerWidth/innerHeight,.3,3e3);hu.position.set(0,8,262);var Kf=new Set,da=new Set,Mn={dx:0,dy:0,wheel:0,left:!1,right:!1,leftJust:!1,rightJust:!1};addEventListener("keydown",i=>{i.repeat||(Kf.add(i.code),da.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),lv())});addEventListener("keyup",i=>Kf.delete(i.code));addEventListener("blur",()=>{Kf.clear(),Mn.left=Mn.right=!1});wo.addEventListener("pointerdown",i=>{i.button===0&&(Mn.left=!0,Mn.leftJust=!0),i.button===2&&(Mn.right=!0,Mn.rightJust=!0),lv();let e=ct.state;if((e==="playing"||e==="shrine"||e==="boss")&&!document.pointerLockElement)try{let t=wo.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}});addEventListener("pointerup",i=>{i.button===0&&(Mn.left=!1),i.button===2&&(Mn.right=!1)});var Fs={x:innerWidth/2,y:innerHeight/2};addEventListener("mousemove",i=>{Fs.x=i.clientX,Fs.y=i.clientY;let e=ct.state,t=e==="playing"||e==="shrine"||e==="boss";(document.pointerLockElement===wo||t||Mn.left||Mn.right)&&(Mn.dx+=i.movementX,Mn.dy+=i.movementY)});var Qi=90,nv=1100;function i3(i){if(document.pointerLockElement===wo)return;let e=ct.state;if(e!=="playing"&&e!=="shrine"&&e!=="boss")return;let t=innerWidth,n=innerHeight,s=0,r=0;Fs.x<Qi?s=-(Qi-Fs.x)/Qi:Fs.x>t-Qi&&(s=(Fs.x-(t-Qi))/Qi),Fs.y<Qi?r=-(Qi-Fs.y)/Qi:Fs.y>n-Qi&&(r=(Fs.y-(n-Qi))/Qi),Mn.dx+=s*Math.abs(s)*nv*i,Mn.dy+=r*Math.abs(r)*nv*i}addEventListener("wheel",i=>{Mn.wheel+=i.deltaY},{passive:!0});wo.addEventListener("contextmenu",i=>i.preventDefault());var iv=!1;function lv(){iv||(iv=!0,ct.audio?.unlock?.())}var ag=new EventTarget,ct={renderer:Os,scene:av,camera:hu,canvas:wo,state:"loading",setState(i){let e=ct.state;e!==i&&(ct.state=i,(i==="paused"||i==="title"||i==="gameover"||i==="ending")&&document.exitPointerLock?.(),ct.emit("state",{from:e,to:i}))},events:ag,emit(i,e){ag.dispatchEvent(new CustomEvent(i,{detail:e}))},on(i,e){ag.addEventListener(i,t=>e(t.detail))},time:{elapsed:0,dt:0,dayPhase:.1,isNight:!1},input:{keys:Kf,justPressed:i=>da.has(i),mouse:Mn,get pointerLocked(){return document.pointerLockElement===wo}},settings:{quality:"high",musicVol:.7,sfxVol:.9},quality:{},applyQuality(){let i=ct.settings.quality,e=window.devicePixelRatio||1;ct.quality={pixelRatio:i==="high"?Math.min(e,2):i==="medium"?Math.min(e,1.35):1,shadowMapSize:i==="high"?2048:i==="medium"?1024:512,grassMul:i==="high"?1:i==="medium"?.55:.28,particleMul:i==="high"?1:i==="medium"?.6:.35,postFX:i!=="low",drawDist:i==="high"?1:i==="medium"?.85:.65},Os.setPixelRatio(ct.quality.pixelRatio),Os.setSize(innerWidth,innerHeight),ct.emit("quality-changed",ct.quality)},getGroundHeight:()=>0,colliders:[],playerBounds:null,world:null,sky:null,player:null,camera3p:null,combat:null,shrines:null,boss:null,ui:null,audio:null,effects:null};ct.on("game-start",()=>ct.setState("playing"));ct.on("player-died",()=>{setTimeout(()=>{ct.state!=="gameover"&&ct.setState("gameover")},1600)});ct.on("respawn-request",()=>{let i=ct.player;i.heal(i.maxHp),i.teleport(ct.world.startPos.clone(),Math.PI),ct.setState("playing")});ct.on("title-request",()=>{let i=ct.player;i.heal(i.maxHp),i.teleport(ct.world.startPos.clone(),Math.PI),ct.setState("title")});addEventListener("resize",()=>{hu.aspect=innerWidth/innerHeight,hu.updateProjectionMatrix(),Os.setSize(innerWidth,innerHeight),ct.effects?.onResize?.(innerWidth,innerHeight)});var sv=document.getElementById("boot-status"),rv=document.getElementById("boot-bar");function ov(i,e,t){sv&&(sv.textContent=t),rv&&(rv.style.width=`${Math.round(i/e*100)}%`)}var Zf=[["\u5927\u5730\u3092\u5275\u9020\u3057\u3066\u3044\u307E\u3059\u2026",zc],["\u7A7A\u3068\u5149\u3092\u547C\u3093\u3067\u3044\u307E\u3059\u2026",kc],["\u98A8\u306E\u7C92\u5B50\u3092\u7E54\u3063\u3066\u3044\u307E\u3059\u2026",Vc],["\u52C7\u8005\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u3044\u307E\u3059\u2026",yf],["\u8996\u754C\u3092\u6574\u3048\u3066\u3044\u307E\u3059\u2026",jc],["\u9B54\u7269\u304C\u8822\u3044\u3066\u3044\u307E\u3059\u2026",Rf],["\u7960\u306B\u706F\u3092\u70B9\u3057\u3066\u3044\u307E\u3059\u2026",Pf],["\u9B54\u57CE\u304C\u8ECB\u3093\u3067\u3044\u307E\u3059\u2026",Uf],["\u65CB\u5F8B\u3092\u7D21\u3044\u3067\u3044\u307E\u3059\u2026",kl],["\u65C5\u652F\u5EA6\u3092\u3057\u3066\u3044\u307E\u3059\u2026",Gl]];async function s3(){ct.applyQuality();let i=0;for(let[e,t]of Zf){ov(i,Zf.length,e),await new Promise(n=>requestAnimationFrame(n));try{await t.init(ct)}catch(n){console.warn("[init\u5931\u6557]",e,n)}i++}ov(Zf.length,Zf.length,"\u6E96\u5099\u5B8C\u4E86"),document.getElementById("boot")?.classList.add("boot-done"),setTimeout(()=>document.getElementById("boot")?.remove(),900),ct.setState("title"),requestAnimationFrame(cv)}var r3=new ul,o3=240,a3=[yf,jc,zc,kc,Rf,Pf,Uf,Vc,kl,Gl],l3=[jc,zc,kc,Vc,kl,Gl],c3=[kl,Gl];function cv(){requestAnimationFrame(cv);let i=Re(r3.getDelta(),0,1/20);ct.time.dt=i,ct.time.elapsed+=i,i3(i);let e=ct.state,t=e==="playing"||e==="shrine"||e==="boss"?a3:e==="title"||e==="gameover"||e==="ending"?l3:e==="paused"?c3:null;if((e==="playing"||e==="boss"||e==="title")&&(ct.time.dayPhase=(ct.time.dayPhase+i/o3)%1),ct.time.isNight=ct.time.dayPhase>.55&&ct.time.dayPhase<.95,(e==="playing"||e==="shrine"||e==="boss")&&(da.has("Escape")||da.has("KeyP"))?(ct._pausedFrom=e,ct.setState("paused")):e==="paused"&&(da.has("Escape")||da.has("KeyP"))&&ct.setState(ct._pausedFrom||"playing"),t)for(let n of t)try{n.update(ct,i)}catch(s){n._errOnce||(n._errOnce=!0,console.warn("[update\u5931\u6557]",s))}try{ct.effects?.render?.(i)}catch{Os.render(av,hu)}da.clear(),Mn.dx=0,Mn.dy=0,Mn.wheel=0,Mn.leftJust=!1,Mn.rightJust=!1}window.__ctx=ct;s3();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
