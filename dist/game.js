(()=>{var cy=Object.defineProperty;var cs=(n,t)=>{for(var e in t)cy(n,e,{get:t[e],enumerable:!0})};var hy=0,P0=1,uy=2;var Wm=1,Qd=2,Ns=3,pr=0,Un=1,fn=2,ds=0,Bs=1,on=2,L0=3,D0=4,fy=5,co=100,dy=101,py=102,my=103,gy=104,xy=200,yy=201,vy=202,_y=203,Rf=204,Cf=205,My=206,by=207,Ey=208,Sy=209,wy=210,Ty=211,Ay=212,Ry=213,Cy=214,If=0,Pf=1,Lf=2,ma=3,Df=4,Uf=5,Nf=6,zf=7,Xm=0,Iy=1,Py=2,dr=0,jd=1,tp=2,ep=3,kl=4,Ly=5,np=6,ip=7;var qm=300,ga=301,xa=302,Ff=303,Bf=304,Fh=306,po=1e3,uo=1001,Of=1002,Qn=1003,Dy=1004;var wc=1005;var us=1006,Yu=1007;var fo=1008;var Hs=1009,Ym=1010,Zm=1011,wl=1012,sp=1013,mo=1014,fs=1015,bi=1016,rp=1017,op=1018,ya=1020,$m=35902,Jm=1021,Km=1022,Yi=1023,Qm=1024,jm=1025,fa=1026,va=1027,Gl=1028,ap=1029,tg=1030,lp=1031;var cp=1033,nh=33776,ih=33777,sh=33778,rh=33779,Hf=35840,kf=35841,Gf=35842,Vf=35843,Wf=36196,Xf=37492,qf=37496,Yf=37808,Zf=37809,$f=37810,Jf=37811,Kf=37812,Qf=37813,jf=37814,td=37815,ed=37816,nd=37817,id=37818,sd=37819,rd=37820,od=37821,oh=36492,ad=36494,ld=36495,eg=36283,cd=36284,hd=36285,ud=36286;var ah=2300,fd=2301,Zu=2302,U0=2400,N0=2401,z0=2402;var Uy=3200,Ny=3201;var ng=0,zy=1,ur="",Ln="srgb",Ra="srgb-linear",Bh="linear",Be="srgb";var Xo=7680;var F0=519,Fy=512,By=513,Oy=514,ig=515,Hy=516,ky=517,Gy=518,Vy=519,dd=35044,Ji=35048;var B0="300 es",Fs=2e3,lh=2001,mr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],O0=1234567,vl=Math.PI/180,Tl=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]+"-"+$n[t&255]+$n[t>>8&255]+"-"+$n[t>>16&15|64]+$n[t>>24&255]+"-"+$n[e&63|128]+$n[e>>8&255]+"-"+$n[e>>16&255]+$n[e>>24&255]+$n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]).toLowerCase()}function Dn(n,t,e){return Math.max(t,Math.min(e,n))}function hp(n,t){return(n%t+t)%t}function Wy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Xy(n,t,e){return n!==t?(e-n)/(t-n):0}function _l(n,t,e){return(1-e)*n+e*t}function qy(n,t,e,i){return _l(n,t,1-Math.exp(-e*i))}function Yy(n,t=1){return t-Math.abs(hp(n,t*2)-t)}function Zy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function $y(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Jy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ky(n,t){return n+Math.random()*(t-n)}function Qy(n){return n*(.5-Math.random())}function jy(n){n!==void 0&&(O0=n);let t=O0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tv(n){return n*vl}function ev(n){return n*Tl}function nv(n){return(n&n-1)===0&&n!==0}function iv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rv(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var sg={DEG2RAD:vl,RAD2DEG:Tl,generateUUID:ps,clamp:Dn,euclideanModulo:hp,mapLinear:Wy,inverseLerp:Xy,lerp:_l,damp:qy,pingpong:Yy,smoothstep:Zy,smootherstep:$y,randInt:Jy,randFloat:Ky,randFloatSpread:Qy,seededRandom:jy,degToRad:tv,radToDeg:ev,isPowerOfTwo:nv,ceilPowerOfTwo:iv,floorPowerOfTwo:sv,setQuaternionFromProperEuler:rv,normalize:Ve,denormalize:qi},tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pe=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],P=s[2],T=s[5],S=s[8];return r[0]=o*x+a*v+l*P,r[3]=o*m+a*_+l*T,r[6]=o*p+a*y+l*S,r[1]=c*x+h*v+u*P,r[4]=c*m+h*_+u*T,r[7]=c*p+h*y+u*S,r[2]=f*x+d*v+g*P,r[5]=f*m+d*_+g*T,r[8]=f*p+d*y+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($u.makeScale(t,e)),this}rotate(t){return this.premultiply($u.makeRotation(-t)),this}translate(t,e){return this.premultiply($u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$u=new pe;function rg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ch(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ov(){let n=ch("canvas");return n.style.display="block",n}var H0={};function xl(n){n in H0||(H0[n]=!0,console.warn(n))}function av(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function lv(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cv(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Be&&(n.r=Os(n.r),n.g=Os(n.g),n.b=Os(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Be&&(n.r=da(n.r),n.g=da(n.g),n.b=da(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ur?Bh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var k0=[.64,.33,.3,.6,.15,.06],G0=[.2126,.7152,.0722],V0=[.3127,.329],W0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Ra]:{primaries:k0,whitePoint:V0,transfer:Bh,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:G0,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:k0,whitePoint:V0,transfer:Be,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:G0,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}});var qo,pd=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qo===void 0&&(qo=ch("canvas")),qo.width=t.width,qo.height=t.height;let i=qo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ch("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Os(e[i]/255)*255):e[i]=Os(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hv=0,hh=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ju(s[o].image)):r.push(Ju(s[o]))}else r=Ju(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ju(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uv=0,hi=class n extends mr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=uo,s=uo,r=us,o=fo,a=Yi,l=Hs,c=n.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ps(),this.name="",this.source=new hh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case uo:t.x=t.x<0?0:1;break;case Of:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case uo:t.y=t.y<0?0:1;break;case Of:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=qm;hi.DEFAULT_ANISOTROPY=1;var We=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,P=(p+1)/2,T=(h+f)/4,S=(u+x)/4,I=(g+m)/4;return _>y&&_>P?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=S/i):y>P?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=I/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=S/r,s=I/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},md=class extends mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:us,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new hi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new hh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends md{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},uh=class extends hi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gd=class extends hi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let P=Math.sqrt(_),T=Math.atan2(P,p*v);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let y=a*v;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(q0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(q0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ku.copy(this).projectOnVector(t),this.sub(Ku)}reflect(t){return this.sub(Ku.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ku=new R,q0=new Fn,ks=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vi):Vi.fromBufferAttribute(r,o),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tc.copy(i.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(al),Ac.subVectors(this.max,al),Yo.subVectors(t.a,al),Zo.subVectors(t.b,al),$o.subVectors(t.c,al),rr.subVectors(Zo,Yo),or.subVectors($o,Zo),no.subVectors(Yo,$o);let e=[0,-rr.z,rr.y,0,-or.z,or.y,0,-no.z,no.y,rr.z,0,-rr.x,or.z,0,-or.x,no.z,0,-no.x,-rr.y,rr.x,0,-or.y,or.x,0,-no.y,no.x,0];return!Qu(e,Yo,Zo,$o,Ac)||(e=[1,0,0,0,1,0,0,0,1],!Qu(e,Yo,Zo,$o,Ac))?!1:(Rc.crossVectors(rr,or),e=[Rc.x,Rc.y,Rc.z],Qu(e,Yo,Zo,$o,Ac))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Is=[new R,new R,new R,new R,new R,new R,new R,new R],Vi=new R,Tc=new ks,Yo=new R,Zo=new R,$o=new R,rr=new R,or=new R,no=new R,al=new R,Ac=new R,Rc=new R,io=new R;function Qu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){io.fromArray(n,r);let a=s.x*Math.abs(io.x)+s.y*Math.abs(io.y)+s.z*Math.abs(io.z),l=t.dot(io),c=e.dot(io),h=i.dot(io);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fv=new ks,ll=new R,ju=new R,gr=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);let e=ll.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ll,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(ju)),this.expandByPoint(ll.copy(t.center).sub(ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ps=new R,tf=new R,Cc=new R,ar=new R,ef=new R,Ic=new R,nf=new R,fh=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ps.copy(this.origin).addScaledVector(this.direction,e),Ps.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tf.copy(t).add(e).multiplyScalar(.5),Cc.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(tf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Cc),a=ar.dot(this.direction),l=-ar.dot(Cc),c=ar.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tf).addScaledVector(Cc,f),d}intersectSphere(t,e){Ps.subVectors(t.center,this.origin);let i=Ps.dot(this.direction),s=Ps.dot(Ps)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ps)!==null}intersectTriangle(t,e,i,s,r){ef.subVectors(e,t),Ic.subVectors(i,t),nf.crossVectors(ef,Ic);let o=this.direction.dot(nf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,t);let l=a*this.direction.dot(Ic.crossVectors(ar,Ic));if(l<0)return null;let c=a*this.direction.dot(ef.cross(ar));if(c<0||l+c>o)return null;let h=-a*ar.dot(nf);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Jo.setFromMatrixColumn(t,0).length(),r=1/Jo.setFromMatrixColumn(t,1).length(),o=1/Jo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dv,t,pv)}lookAt(t,e,i){let s=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),lr.crossVectors(i,vi),lr.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),lr.crossVectors(i,vi)),lr.normalize(),Pc.crossVectors(vi,lr),s[0]=lr.x,s[4]=Pc.x,s[8]=vi.x,s[1]=lr.y,s[5]=Pc.y,s[9]=vi.y,s[2]=lr.z,s[6]=Pc.z,s[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],P=i[15],T=s[0],S=s[4],I=s[8],b=s[12],M=s[1],D=s[5],H=s[9],O=s[13],G=s[2],Y=s[6],q=s[10],ot=s[14],Z=s[3],yt=s[7],Rt=s[11],Ft=s[15];return r[0]=o*T+a*M+l*G+c*Z,r[4]=o*S+a*D+l*Y+c*yt,r[8]=o*I+a*H+l*q+c*Rt,r[12]=o*b+a*O+l*ot+c*Ft,r[1]=h*T+u*M+f*G+d*Z,r[5]=h*S+u*D+f*Y+d*yt,r[9]=h*I+u*H+f*q+d*Rt,r[13]=h*b+u*O+f*ot+d*Ft,r[2]=g*T+x*M+m*G+p*Z,r[6]=g*S+x*D+m*Y+p*yt,r[10]=g*I+x*H+m*q+p*Rt,r[14]=g*b+x*O+m*ot+p*Ft,r[3]=v*T+_*M+y*G+P*Z,r[7]=v*S+_*D+y*Y+P*yt,r[11]=v*I+_*H+y*q+P*Rt,r[15]=v*b+_*O+y*ot+P*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,y=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,T=e*v+i*_+s*y+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=v*S,t[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*S,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*S,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*S,t[4]=_*S,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*S,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*S,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*S,t[8]=y*S,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*p-e*u*p)*S,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*S,t[12]=P*S,t[13]=(h*x*s-g*u*s+g*i*f-e*x*f-h*i*m+e*u*m)*S,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*S,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*S,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,_=l*h,y=l*u,P=i.x,T=i.y,S=i.z;return s[0]=(1-(x+p))*P,s[1]=(d+y)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+_)*S,s[9]=(m-v)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Jo.set(s[0],s[1],s[2]).length(),o=Jo.set(s[4],s[5],s[6]).length(),a=Jo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wi.copy(this);let c=1/r,h=1/o,u=1/a;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=u,Wi.elements[9]*=u,Wi.elements[10]*=u,e.setFromRotationMatrix(Wi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Fs){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===Fs)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===lh)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Fs){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,g,x;if(a===Fs)g=(o+r)*u,x=-2*u;else if(a===lh)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Jo=new R,Wi=new Ce,dv=new R(0,0,0),pv=new R(1,1,1),lr=new R,Pc=new R,vi=new R,Y0=new Ce,Z0=new Fn,Mi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var dh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mv=0,$0=new R,Ko=new Fn,Ls=new Ce,Lc=new R,cl=new R,gv=new R,xv=new Fn,J0=new R(1,0,0),K0=new R(0,1,0),Q0=new R(0,0,1),j0={type:"added"},yv={type:"removed"},Qo={type:"childadded",child:null},sf={type:"childremoved",child:null},Bn=class n extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,e=new Mi,i=new Fn,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new pe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ko.setFromAxisAngle(t,e),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(t,e){return Ko.setFromAxisAngle(t,e),this.quaternion.premultiply(Ko),this}rotateX(t){return this.rotateOnAxis(J0,t)}rotateY(t){return this.rotateOnAxis(K0,t)}rotateZ(t){return this.rotateOnAxis(Q0,t)}translateOnAxis(t,e){return $0.copy(t).applyQuaternion(this.quaternion),this.position.add($0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(J0,t)}translateY(t){return this.translateOnAxis(K0,t)}translateZ(t){return this.translateOnAxis(Q0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lc.copy(t):Lc.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(cl,Lc,this.up):Ls.lookAt(Lc,cl,this.up),this.quaternion.setFromRotationMatrix(Ls),s&&(Ls.extractRotation(s.matrixWorld),Ko.setFromRotationMatrix(Ls),this.quaternion.premultiply(Ko.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(j0),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yv),sf.child=t,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(j0),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,t,gv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,xv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Bn.DEFAULT_UP=new R(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xi=new R,Ds=new R,rf=new R,Us=new R,jo=new R,ta=new R,tm=new R,of=new R,af=new R,lf=new R,cf=new We,hf=new We,uf=new We,fr=class n{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xi.subVectors(t,e),s.cross(Xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Xi.subVectors(s,e),Ds.subVectors(i,e),rf.subVectors(t,e);let o=Xi.dot(Xi),a=Xi.dot(Ds),l=Xi.dot(rf),c=Ds.dot(Ds),h=Ds.dot(rf),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Us.x),l.addScaledVector(o,Us.y),l.addScaledVector(a,Us.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return cf.setScalar(0),hf.setScalar(0),uf.setScalar(0),cf.fromBufferAttribute(t,e),hf.fromBufferAttribute(t,i),uf.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cf,r.x),o.addScaledVector(hf,r.y),o.addScaledVector(uf,r.z),o}static isFrontFacing(t,e,i,s){return Xi.subVectors(i,e),Ds.subVectors(t,e),Xi.cross(Ds).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),Xi.cross(Ds).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;jo.subVectors(s,i),ta.subVectors(r,i),of.subVectors(t,i);let l=jo.dot(of),c=ta.dot(of);if(l<=0&&c<=0)return e.copy(i);af.subVectors(t,s);let h=jo.dot(af),u=ta.dot(af);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(jo,o);lf.subVectors(t,r);let d=jo.dot(lf),g=ta.dot(lf);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ta,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return tm.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(tm,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(jo,o).addScaledVector(ta,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function ff(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=hp(t,1),e=Dn(e,0,1),i=Dn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ff(o,r,t+1/3),this.g=ff(o,r,t),this.b=ff(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){let i=og[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Te.fromWorkingColorSpace(Jn.copy(this),t),Math.round(Dn(Jn.r*255,0,255))*65536+Math.round(Dn(Jn.g*255,0,255))*256+Math.round(Dn(Jn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(Jn.copy(this),e);let i=Jn.r,s=Jn.g,r=Jn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(Jn.copy(this),e),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Ln){Te.fromWorkingColorSpace(Jn.copy(this),t);let e=Jn.r,i=Jn.g,s=Jn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cr),this.setHSL(cr.h+t,cr.s+e,cr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cr),t.getHSL(Dc);let i=_l(cr.h,Dc.h,e),s=_l(cr.s,Dc.s,e),r=_l(cr.l,Dc.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jn=new ct;ct.NAMES=og;var vv=0,Gs=class extends mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=ps(),this.name="",this.blending=Bs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rf&&(i.blendSrc=this.blendSrc),this.blendDst!==Cf&&(i.blendDst=this.blendDst),this.blendEquation!==co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var vn=new R,Uc=new tt,Le=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dd,this.updateRanges=[],this.gpuType=fs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uc.fromBufferAttribute(this,e),Uc.applyMatrix3(t),this.setXY(e,Uc.x,Uc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix3(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dd&&(t.usage=this.usage),t}};var ph=class extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var mh=class extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Se=class extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}},_v=0,Pi=new Ce,df=new Bn,ea=new R,_i=new ks,hl=new ks,Pn=new R,Ze=class n extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rg(t)?mh:ph)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,i){return Pi.makeTranslation(t,e,i),this.applyMatrix4(Pi),this}scale(t,e,i){return Pi.makeScale(t,e,i),this.applyMatrix4(Pi),this}lookAt(t){return df.lookAt(t),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hl.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(_i.min,hl.min),_i.expandByPoint(Pn),Pn.addVectors(_i.max,hl.max),_i.expandByPoint(Pn)):(_i.expandByPoint(hl.min),_i.expandByPoint(hl.max))}_i.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Pn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pn.fromBufferAttribute(a,c),l&&(ea.fromBufferAttribute(t,c),Pn.add(ea)),s=Math.max(s,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new R,l[I]=new R;let c=new R,h=new R,u=new R,f=new tt,d=new tt,g=new tt,x=new R,m=new R;function p(I,b,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(x),a[b].add(x),a[M].add(x),l[I].add(m),l[b].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,b=v.length;I<b;++I){let M=v[I],D=M.start,H=M.count;for(let O=D,G=D+H;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new R,y=new R,P=new R,T=new R;function S(I){P.fromBufferAttribute(s,I),T.copy(P);let b=a[I];_.copy(b),_.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(T,b);let D=y.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,b=v.length;I<b;++I){let M=v[I],D=M.start,H=M.count;for(let O=D,G=D+H;O<G;O+=3)S(t.getX(O+0)),S(t.getX(O+1)),S(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pn.fromBufferAttribute(t,e),Pn.normalize(),t.setXYZ(e,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},em=new Ce,so=new fh,Nc=new gr,nm=new R,zc=new R,Fc=new R,Bc=new R,pf=new R,Oc=new R,im=new R,Hc=new R,qt=class extends Bn{constructor(t=new Ze,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pf.fromBufferAttribute(u,t),o?Oc.addScaledVector(pf,h):Oc.addScaledVector(pf.sub(e),h))}e.add(Oc)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),so.copy(t.ray).recast(t.near),!(Nc.containsPoint(so.origin)===!1&&(so.intersectSphere(Nc,nm)===null||so.origin.distanceToSquared(nm)>(t.far-t.near)**2))&&(em.copy(r).invert(),so.copy(t.ray).applyMatrix4(em),!(i.boundingBox!==null&&so.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,so)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,P=_;y<P;y+=3){let T=a.getX(y),S=a.getX(y+1),I=a.getX(y+2);s=kc(this,p,t,i,c,h,u,T,S,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=kc(this,o,t,i,c,h,u,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,P=_;y<P;y+=3){let T=y,S=y+1,I=y+2;s=kc(this,p,t,i,c,h,u,T,S,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,_=m+1,y=m+2;s=kc(this,o,t,i,c,h,u,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Mv(n,t,e,i,s,r,o,a){let l;if(t.side===Un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===pr,a),l===null)return null;Hc.copy(a),Hc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Hc);return c<e.near||c>e.far?null:{distance:c,point:Hc.clone(),object:n}}function kc(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,zc),n.getVertexPosition(l,Fc),n.getVertexPosition(c,Bc);let h=Mv(n,t,e,i,zc,Fc,Bc,im);if(h){let u=new R;fr.getBarycoord(im,zc,Fc,Bc,u),s&&(h.uv=fr.getInterpolatedAttribute(s,a,l,c,u,new tt)),r&&(h.uv1=fr.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=fr.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};fr.getNormal(zc,Fc,Bc,f.normal),h.face=f,h.barycoord=u}return h}var se=class n extends Ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function g(x,m,p,v,_,y,P,T,S,I,b){let M=y/S,D=P/I,H=y/2,O=P/2,G=T/2,Y=S+1,q=I+1,ot=0,Z=0,yt=new R;for(let Rt=0;Rt<q;Rt++){let Ft=Rt*D-O;for(let ue=0;ue<Y;ue++){let Ne=ue*M-H;yt[x]=Ne*v,yt[m]=Ft*_,yt[p]=G,c.push(yt.x,yt.y,yt.z),yt[x]=0,yt[m]=0,yt[p]=T>0?1:-1,h.push(yt.x,yt.y,yt.z),u.push(ue/S),u.push(1-Rt/I),ot+=1}}for(let Rt=0;Rt<I;Rt++)for(let Ft=0;Ft<S;Ft++){let ue=f+Ft+Y*Rt,Ne=f+Ft+Y*(Rt+1),j=f+(Ft+1)+Y*(Rt+1),ut=f+(Ft+1)+Y*Rt;l.push(ue,Ne,ut),l.push(Ne,j,ut),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _a(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function si(n){let t={};for(let e=0;e<n.length;e++){let i=_a(n[e]);for(let s in i)t[s]=i[s]}return t}function bv(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ag(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var yr={clone:_a,merge:si},Ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ev,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_a(t.uniforms),this.uniformsGroups=bv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},gh=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Fs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hr=new R,sm=new tt,rm=new tt,Kn=class extends gh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,e){return this.getViewBounds(t,sm,rm),e.subVectors(rm,sm)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},na=-90,ia=1,xd=class extends Bn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(na,ia,t,e);s.layers=this.layers,this.add(s);let r=new Kn(na,ia,t,e);r.layers=this.layers,this.add(r);let o=new Kn(na,ia,t,e);o.layers=this.layers,this.add(o);let a=new Kn(na,ia,t,e);a.layers=this.layers,this.add(a);let l=new Kn(na,ia,t,e);l.layers=this.layers,this.add(l);let c=new Kn(na,ia,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lh)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xh=class extends hi{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ga,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yd=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:us}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:ds});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===fo&&(e.minFilter=us),new xd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},mf=new R,wv=new R,Tv=new pe,zs=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=mf.subVectors(i,e).cross(wv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(mf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Tv.getNormalMatrix(t),s=this.coplanarPoint(mf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ro=new gr,Gc=new R,Al=class{constructor(t=new zs,e=new zs,i=new zs,s=new zs,r=new zs,o=new zs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fs){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-d,y-p).normalize(),i[1].setComponents(l+r,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+h,m+g,y+v).normalize(),i[3].setComponents(l-o,f-h,m-g,y-v).normalize(),i[4].setComponents(l-a,f-u,m-x,y-_).normalize(),e===Fs)i[5].setComponents(l+a,f+u,m+x,y+_).normalize();else if(e===lh)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(t){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(t.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Gc.x=s.normal.x>0?t.max.x:t.min.x,Gc.y=s.normal.y>0?t.max.y:t.min.y,Gc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lg(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Av(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Nn=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),P=v+1+c*(p+1),T=v+1+c*p;d.push(_,y,T),d.push(y,P,T)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cv=`#ifdef USE_ALPHAHASH
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
#endif`,Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
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
#endif`,Nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
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
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kv=`#ifdef USE_IRIDESCENCE
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
#endif`,Gv=`#ifdef USE_BUMPMAP
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kv=`#define PI 3.141592653589793
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
} // validated`,Qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jv=`vec3 transformedNormal = objectNormal;
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
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s_="gl_FragColor = linearToOutputTexel( gl_FragColor );",r_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,T_=`struct PhysicalMaterial {
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
}`,A_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F_=`#if defined( USE_POINTS_UV )
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
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,U1=`#if DEPTH_PACKING == 3200
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
}`,N1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,q1=`#define MATCAP
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
}`,Y1=`#define NORMAL
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
}`,Z1=`#define NORMAL
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
}`,$1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,j1=`#define TOON
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
}`,tM=`#define TOON
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
}`,eM=`uniform float size;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,sM=`uniform vec3 color;
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
}`,rM=`uniform float rotation;
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
}`,oM=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Rv,alphahash_pars_fragment:Cv,alphamap_fragment:Iv,alphamap_pars_fragment:Pv,alphatest_fragment:Lv,alphatest_pars_fragment:Dv,aomap_fragment:Uv,aomap_pars_fragment:Nv,batching_pars_vertex:zv,batching_vertex:Fv,begin_vertex:Bv,beginnormal_vertex:Ov,bsdfs:Hv,iridescence_fragment:kv,bumpmap_pars_fragment:Gv,clipping_planes_fragment:Vv,clipping_planes_pars_fragment:Wv,clipping_planes_pars_vertex:Xv,clipping_planes_vertex:qv,color_fragment:Yv,color_pars_fragment:Zv,color_pars_vertex:$v,color_vertex:Jv,common:Kv,cube_uv_reflection_fragment:Qv,defaultnormal_vertex:jv,displacementmap_pars_vertex:t_,displacementmap_vertex:e_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:s_,colorspace_pars_fragment:r_,envmap_fragment:o_,envmap_common_pars_fragment:a_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:__,envmap_vertex:h_,fog_vertex:u_,fog_pars_vertex:f_,fog_fragment:d_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:x_,lights_lambert_pars_fragment:y_,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:b_,lights_phong_fragment:E_,lights_phong_pars_fragment:S_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:D_,map_fragment:U_,map_pars_fragment:N_,map_particle_fragment:z_,map_particle_pars_fragment:F_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:O_,morphinstance_vertex:H_,morphcolor_vertex:k_,morphnormal_vertex:G_,morphtarget_pars_vertex:V_,morphtarget_vertex:W_,normal_fragment_begin:X_,normal_fragment_maps:q_,normal_pars_fragment:Y_,normal_pars_vertex:Z_,normal_vertex:$_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:Q_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:t1,opaque_fragment:e1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:o1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:h1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:d1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:x1,specularmap_pars_fragment:y1,tonemapping_fragment:v1,tonemapping_pars_fragment:_1,transmission_fragment:M1,transmission_pars_fragment:b1,uv_pars_fragment:E1,uv_pars_vertex:S1,uv_vertex:w1,worldpos_vertex:T1,background_vert:A1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:I1,cube_vert:P1,cube_frag:L1,depth_vert:D1,depth_frag:U1,distanceRGBA_vert:N1,distanceRGBA_frag:z1,equirect_vert:F1,equirect_frag:B1,linedashed_vert:O1,linedashed_frag:H1,meshbasic_vert:k1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:q1,meshnormal_vert:Y1,meshnormal_frag:Z1,meshphong_vert:$1,meshphong_frag:J1,meshphysical_vert:K1,meshphysical_frag:Q1,meshtoon_vert:j1,meshtoon_frag:tM,points_vert:eM,points_frag:nM,shadow_vert:iM,shadow_frag:sM,sprite_vert:rM,sprite_frag:oM},vt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},hs={basic:{uniforms:si([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:si([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ct(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:si([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:si([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:si([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ct(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:si([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:si([vt.points,vt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:si([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:si([vt.common,vt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:si([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:si([vt.sprite,vt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:si([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:si([vt.lights,vt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};hs.physical={uniforms:si([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var Vc={r:0,b:0,g:0},oo=new Mi,aM=new Ce;function lM(n,t,e,i,s,r,o){let a=new ct(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Fh)?(h===void 0&&(h=new qt(new se(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:_a(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oo.copy(_.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(oo)),h.material.toneMapped=Te.getTransfer(y.colorSpace)!==Be,(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qt(new Nn(2,2),new Qe({name:"BackgroundMaterial",uniforms:_a(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Te.getTransfer(y.colorSpace)!==Be,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(Vc,ag(n)),i.buffers.color.setClear(Vc.r,Vc.g,Vc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function cM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,D,H,O,G){let Y=!1,q=u(O,H,D);r!==q&&(r=q,c(r.object)),Y=d(M,O,H,G),Y&&g(M,O,H,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(M,D,H,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,D,H){let O=H.wireframe===!0,G=i[M.id];G===void 0&&(G={},i[M.id]=G);let Y=G[D.id];Y===void 0&&(Y={},G[D.id]=Y);let q=Y[O];return q===void 0&&(q=f(l()),Y[O]=q),q}function f(M){let D=[],H=[],O=[];for(let G=0;G<e;G++)D[G]=0,H[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,D,H,O){let G=r.attributes,Y=D.attributes,q=0,ot=H.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let Rt=G[Z],Ft=Y[Z];if(Ft===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Ft=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Ft=M.instanceColor)),Rt===void 0||Rt.attribute!==Ft||Ft&&Rt.data!==Ft.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function g(M,D,H,O){let G={},Y=D.attributes,q=0,ot=H.getAttributes();for(let Z in ot)if(ot[Z].location>=0){let Rt=Y[Z];Rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor));let Ft={};Ft.attribute=Rt,Rt&&Rt.data&&(Ft.data=Rt.data),G[Z]=Ft,q++}r.attributes=G,r.attributesNum=q,r.index=O}function x(){let M=r.newAttributes;for(let D=0,H=M.length;D<H;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){let H=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;H[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),G[M]!==D&&(n.vertexAttribDivisor(M,D),G[M]=D)}function v(){let M=r.newAttributes,D=r.enabledAttributes;for(let H=0,O=D.length;H<O;H++)D[H]!==M[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function _(M,D,H,O,G,Y,q){q===!0?n.vertexAttribIPointer(M,D,H,G,Y):n.vertexAttribPointer(M,D,H,O,G,Y)}function y(M,D,H,O){x();let G=O.attributes,Y=H.getAttributes(),q=D.defaultAttributeValues;for(let ot in Y){let Z=Y[ot];if(Z.location>=0){let yt=G[ot];if(yt===void 0&&(ot==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),ot==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),yt!==void 0){let Rt=yt.normalized,Ft=yt.itemSize,ue=t.get(yt);if(ue===void 0)continue;let Ne=ue.buffer,j=ue.type,ut=ue.bytesPerElement,Ht=j===n.INT||j===n.UNSIGNED_INT||yt.gpuType===sp;if(yt.isInterleavedBufferAttribute){let dt=yt.data,Jt=dt.stride,oe=yt.offset;if(dt.isInstancedInterleavedBuffer){for(let ne=0;ne<Z.locationSize;ne++)p(Z.location+ne,dt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ne=0;ne<Z.locationSize;ne++)m(Z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ne=0;ne<Z.locationSize;ne++)_(Z.location+ne,Ft/Z.locationSize,j,Rt,Jt*ut,(oe+Ft/Z.locationSize*ne)*ut,Ht)}else{if(yt.isInstancedBufferAttribute){for(let dt=0;dt<Z.locationSize;dt++)p(Z.location+dt,yt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let dt=0;dt<Z.locationSize;dt++)m(Z.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let dt=0;dt<Z.locationSize;dt++)_(Z.location+dt,Ft/Z.locationSize,j,Rt,Ft*ut,Ft/Z.locationSize*dt*ut,Ht)}}else if(q!==void 0){let Rt=q[ot];if(Rt!==void 0)switch(Rt.length){case 2:n.vertexAttrib2fv(Z.location,Rt);break;case 3:n.vertexAttrib3fv(Z.location,Rt);break;case 4:n.vertexAttrib4fv(Z.location,Rt);break;default:n.vertexAttrib1fv(Z.location,Rt)}}}}v()}function P(){I();for(let M in i){let D=i[M];for(let H in D){let O=D[H];for(let G in O)h(O[G].object),delete O[G];delete D[H]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let D=i[M.id];for(let H in D){let O=D[H];for(let G in O)h(O[G].object),delete O[G];delete D[H]}delete i[M.id]}function S(M){for(let D in i){let H=i[D];if(H[M.id]===void 0)continue;let O=H[M.id];for(let G in O)h(O[G].object),delete O[G];delete H[M.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function hM(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Yi&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let I=S===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Hs&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==fs&&!I)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:T}}function fM(n){let t=this,e=null,i=0,s=!1,r=!1,o=new zs,a=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(g,f,_,d);for(let P=0;P!==_;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function dM(n){let t=new WeakMap;function e(o,a){return a===Ff?o.mapping=ga:a===Bf&&(o.mapping=xa),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ff||a===Bf)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ma=class extends gh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ha=4,om=[.125,.215,.35,.446,.526,.582],ho=20,gf=new Ma,am=new ct,xf=null,yf=0,vf=0,_f=!1,lo=(1+Math.sqrt(5))/2,sa=1/lo,lm=[new R(-lo,sa,0),new R(lo,sa,0),new R(-sa,0,lo),new R(sa,0,lo),new R(0,lo,-sa),new R(0,lo,sa),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],yh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xf,yf,vf),this._renderer.xr.enabled=_f,t.scissorTest=!1,Wc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ga||t.mapping===xa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:us,minFilter:us,generateMipmaps:!1,type:bi,format:Yi,colorSpace:Ra,depthBuffer:!1},s=cm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(r)),this._blurMaterial=mM(r,t,e)}return s}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,gf)}_sceneToCubeUV(t,e,i,s){let a=new Kn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(am),h.toneMapping=dr,h.autoClear=!1;let d=new Ke({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),g=new qt(new se,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(am),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Wc(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ga||t.mapping===xa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Wc(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gf)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lm[(s-r-1)%lm.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new qt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ho-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ho;m>ho&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ho}`);let p=[],v=0;for(let S=0;S<ho;++S){let I=S/x,b=Math.exp(-I*I/2);p.push(b),S===0?v+=b:S<m&&(v+=2*b)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let y=this._sizeLods[s],P=3*y*(s>_-ha?s-_+ha:0),T=4*(this._cubeSize-y);Wc(e,P,T,3*y,2*y),l.setRenderTarget(e),l.render(u,gf)}};function pM(n){let t=[],e=[],i=[],s=n,r=n-ha+1+om.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ha?l=om[o-n+ha-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),_=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){let S=T%3*2/3-1,I=T>2?0:-1,b=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];v.set(b,x*g*T),_.set(f,m*g*T);let M=[T,T,T,T,T,T];y.set(M,p*g*T)}let P=new Ze;P.setAttribute("position",new Le(v,x)),P.setAttribute("uv",new Le(_,m)),P.setAttribute("faceIndex",new Le(y,p)),t.push(P),s>ha&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cm(n,t,e){let i=new zn(n,t,e);return i.texture.mapping=Fh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function mM(n,t,e){let i=new Float32Array(ho),s=new R(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:up(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function hm(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function um(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function up(){return`

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
	`}function gM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ff||l===Bf,h=l===ga||l===xa;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new yh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function xM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&xl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yM(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){let P=v[_+0],T=v[_+1],S=v[_+2];f.push(P,T,T,S,S,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let P=_+0,T=_+1,S=_+2;f.push(P,T,T,S,S,P)}}else return;let m=new(rg(f)?mh:ph)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vM(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _M(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function MM(n,t,e){let i=new WeakMap,s=new We;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let b=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*P*4*u),S=new uh(T,y,P,u);S.type=fs,S.needsUpdate=!0;let I=_*4;for(let M=0;M<u;M++){let D=m[M],H=p[M],O=v[M],G=y*P*4*M;for(let Y=0;Y<D.count;Y++){let q=Y*I;d===!0&&(s.fromBufferAttribute(D,Y),T[G+q+0]=s.x,T[G+q+1]=s.y,T[G+q+2]=s.z,T[G+q+3]=0),g===!0&&(s.fromBufferAttribute(H,Y),T[G+q+4]=s.x,T[G+q+5]=s.y,T[G+q+6]=s.z,T[G+q+7]=0),x===!0&&(s.fromBufferAttribute(O,Y),T[G+q+8]=s.x,T[G+q+9]=s.y,T[G+q+10]=s.z,T[G+q+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new tt(y,P)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function bM(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var vh=class extends hi{constructor(t,e,i,s,r,o,a,l,c,h=fa){if(h!==fa&&h!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fa&&(i=mo),i===void 0&&h===va&&(i=ya),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cg=new hi,fm=new vh(1,1),hg=new uh,ug=new gd,fg=new xh,dm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),xm=new Float32Array(4);function Ca(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=dm[s];if(r===void 0&&(r=new Float32Array(s),dm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function En(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Oh(n,t){let e=pm[t];e===void 0&&(e=new Int32Array(t),pm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function EM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function SM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;n.uniform2fv(this.addr,t),Sn(e,t)}}function wM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;n.uniform3fv(this.addr,t),Sn(e,t)}}function TM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;n.uniform4fv(this.addr,t),Sn(e,t)}}function AM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(En(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Sn(e,t)}else{if(En(e,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),Sn(e,i)}}function RM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(En(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Sn(e,t)}else{if(En(e,i))return;gm.set(i),n.uniformMatrix3fv(this.addr,!1,gm),Sn(e,i)}}function CM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(En(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Sn(e,t)}else{if(En(e,i))return;mm.set(i),n.uniformMatrix4fv(this.addr,!1,mm),Sn(e,i)}}function IM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function PM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;n.uniform2iv(this.addr,t),Sn(e,t)}}function LM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;n.uniform3iv(this.addr,t),Sn(e,t)}}function DM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;n.uniform4iv(this.addr,t),Sn(e,t)}}function UM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function NM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;n.uniform2uiv(this.addr,t),Sn(e,t)}}function zM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;n.uniform3uiv(this.addr,t),Sn(e,t)}}function FM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;n.uniform4uiv(this.addr,t),Sn(e,t)}}function BM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fm.compareFunction=ig,r=fm):r=cg,e.setTexture2D(t||r,s)}function OM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ug,s)}function HM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fg,s)}function kM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hg,s)}function GM(n){switch(n){case 5126:return EM;case 35664:return SM;case 35665:return wM;case 35666:return TM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return IM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return UM;case 36294:return NM;case 36295:return zM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return kM}}function VM(n,t){n.uniform1fv(this.addr,t)}function WM(n,t){let e=Ca(t,this.size,2);n.uniform2fv(this.addr,e)}function XM(n,t){let e=Ca(t,this.size,3);n.uniform3fv(this.addr,e)}function qM(n,t){let e=Ca(t,this.size,4);n.uniform4fv(this.addr,e)}function YM(n,t){let e=Ca(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ZM(n,t){let e=Ca(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function $M(n,t){let e=Ca(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function JM(n,t){n.uniform1iv(this.addr,t)}function KM(n,t){n.uniform2iv(this.addr,t)}function QM(n,t){n.uniform3iv(this.addr,t)}function jM(n,t){n.uniform4iv(this.addr,t)}function tb(n,t){n.uniform1uiv(this.addr,t)}function eb(n,t){n.uniform2uiv(this.addr,t)}function nb(n,t){n.uniform3uiv(this.addr,t)}function ib(n,t){n.uniform4uiv(this.addr,t)}function sb(n,t,e){let i=this.cache,s=t.length,r=Oh(e,s);En(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cg,r[o])}function rb(n,t,e){let i=this.cache,s=t.length,r=Oh(e,s);En(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ug,r[o])}function ob(n,t,e){let i=this.cache,s=t.length,r=Oh(e,s);En(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fg,r[o])}function ab(n,t,e){let i=this.cache,s=t.length,r=Oh(e,s);En(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hg,r[o])}function lb(n){switch(n){case 5126:return VM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return ZM;case 35676:return $M;case 5124:case 35670:return JM;case 35667:case 35671:return KM;case 35668:case 35672:return QM;case 35669:case 35673:return jM;case 5125:return tb;case 36294:return eb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}var vd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=GM(e.type)}},_d=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lb(e.type)}},Md=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Mf=/(\w+)(\])?(\[|\.)?/g;function ym(n,t){n.seq.push(t),n.map[t.id]=t}function cb(n,t,e){let i=n.name,s=i.length;for(Mf.lastIndex=0;;){let r=Mf.exec(i),o=Mf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ym(e,c===void 0?new vd(a,n,t):new _d(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Md(a),ym(e,u)),e=u}}}var pa=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);cb(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function vm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var hb=37297,ub=0;function fb(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var _m=new pe;function db(n){Te._getMatrix(_m,Te.workingColorSpace,n);let t=`mat3( ${_m.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case Bh:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Mm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fb(n.getShaderSource(t),o)}else return s}function pb(n,t){let e=db(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mb(n,t){let e;switch(t){case jd:e="Linear";break;case tp:e="Reinhard";break;case ep:e="Cineon";break;case kl:e="ACESFilmic";break;case np:e="AgX";break;case ip:e="Neutral";break;case Ly:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xc=new R;function gb(){Te.getLuminanceCoefficients(Xc);let n=Xc.x.toFixed(4),t=Xc.y.toFixed(4),e=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function yb(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vb(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function yl(n){return n!==""}function bm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Em(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(n){return n.replace(_b,bb)}var Mb=new Map;function bb(n,t){let e=xe[t];if(e===void 0){let i=Mb.get(t);if(i!==void 0)e=xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bd(e)}var Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(n){return n.replace(Eb,Sb)}function Sb(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function wb(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ns&&(t="SHADOWMAP_TYPE_VSM"),t}function Tb(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ga:case xa:t="ENVMAP_TYPE_CUBE";break;case Fh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ab(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===xa&&(t="ENVMAP_MODE_REFRACTION"),t}function Rb(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xm:t="ENVMAP_BLENDING_MULTIPLY";break;case Iy:t="ENVMAP_BLENDING_MIX";break;case Py:t="ENVMAP_BLENDING_ADD";break}return t}function Cb(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ib(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=wb(e),c=Tb(e),h=Ab(e),u=Rb(e),f=Cb(e),d=xb(e),g=yb(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yl).join(`
`),p.length>0&&(p+=`
`)):(m=[wm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),p=[wm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dr?"#define TONE_MAPPING":"",e.toneMapping!==dr?xe.tonemapping_pars_fragment:"",e.toneMapping!==dr?mb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,pb("linearToOutputTexel",e.outputColorSpace),gb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yl).join(`
`)),o=bd(o),o=bm(o,e),o=Em(o,e),a=bd(a),a=bm(a,e),a=Em(a,e),o=Sm(o),a=Sm(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,P=vm(s,s.VERTEX_SHADER,_),T=vm(s,s.FRAGMENT_SHADER,y);s.attachShader(x,P),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(D){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(T).trim(),Y=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,T);else{let ot=Mm(s,P,"vertex"),Z=Mm(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+ot+`
`+Z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||G==="")&&(q=!1);q&&(D.diagnostics={runnable:Y,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(P),s.deleteShader(T),I=new pa(s,x),b=vb(s,x)}let I;this.getUniforms=function(){return I===void 0&&S(this),I};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,hb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ub++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var Pb=0,Ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sd(t),e.set(t,i)),i}},Sd=class{constructor(t){this.id=Pb++,this.code=t,this.usedTimes=0}};function Lb(n,t,e,i,s,r,o){let a=new dh,l=new Ed,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,H,O){let G=H.fog,Y=O.geometry,q=b.isMeshStandardMaterial?H.environment:null,ot=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),Z=ot&&ot.mapping===Fh?ot.image.height:null,yt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let Rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ft=Rt!==void 0?Rt.length:0,ue=0;Y.morphAttributes.position!==void 0&&(ue=1),Y.morphAttributes.normal!==void 0&&(ue=2),Y.morphAttributes.color!==void 0&&(ue=3);let Ne,j,ut,Ht;if(yt){let Ge=hs[yt];Ne=Ge.vertexShader,j=Ge.fragmentShader}else Ne=b.vertexShader,j=b.fragmentShader,l.update(b),ut=l.getVertexShaderID(b),Ht=l.getFragmentShaderID(b);let dt=n.getRenderTarget(),Jt=n.state.buffers.depth.getReversed(),oe=O.isInstancedMesh===!0,ne=O.isBatchedMesh===!0,Ie=!!b.map,it=!!b.matcap,ht=!!ot,L=!!b.aoMap,Yt=!!b.lightMap,at=!!b.bumpMap,Ut=!!b.normalMap,pt=!!b.displacementMap,te=!!b.emissiveMap,Pt=!!b.metalnessMap,C=!!b.roughnessMap,E=b.anisotropy>0,k=b.clearcoat>0,J=b.dispersion>0,st=b.iridescence>0,K=b.sheen>0,kt=b.transmission>0,_t=E&&!!b.anisotropyMap,Lt=k&&!!b.clearcoatMap,Ee=k&&!!b.clearcoatNormalMap,lt=k&&!!b.clearcoatRoughnessMap,Nt=st&&!!b.iridescenceMap,ee=st&&!!b.iridescenceThicknessMap,ie=K&&!!b.sheenColorMap,zt=K&&!!b.sheenRoughnessMap,Re=!!b.specularMap,ge=!!b.specularColorMap,$e=!!b.specularIntensityMap,N=kt&&!!b.transmissionMap,Mt=kt&&!!b.thicknessMap,$=!!b.gradientMap,nt=!!b.alphaMap,wt=b.alphaTest>0,Et=!!b.alphaHash,fe=!!b.extensions,un=dr;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(un=n.toneMapping);let Zn={shaderID:yt,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:j,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:Ht,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ne,batchingColor:ne&&O._colorsTexture!==null,instancing:oe,instancingColor:oe&&O.instanceColor!==null,instancingMorph:oe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ra,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:it,envMap:ht,envMapMode:ht&&ot.mapping,envMapCubeUVHeight:Z,aoMap:L,lightMap:Yt,bumpMap:at,normalMap:Ut,displacementMap:f&&pt,emissiveMap:te,normalMapObjectSpace:Ut&&b.normalMapType===zy,normalMapTangentSpace:Ut&&b.normalMapType===ng,metalnessMap:Pt,roughnessMap:C,anisotropy:E,anisotropyMap:_t,clearcoat:k,clearcoatMap:Lt,clearcoatNormalMap:Ee,clearcoatRoughnessMap:lt,dispersion:J,iridescence:st,iridescenceMap:Nt,iridescenceThicknessMap:ee,sheen:K,sheenColorMap:ie,sheenRoughnessMap:zt,specularMap:Re,specularColorMap:ge,specularIntensityMap:$e,transmission:kt,transmissionMap:N,thicknessMap:Mt,gradientMap:$,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:Et,combine:b.combine,mapUv:Ie&&x(b.map.channel),aoMapUv:L&&x(b.aoMap.channel),lightMapUv:Yt&&x(b.lightMap.channel),bumpMapUv:at&&x(b.bumpMap.channel),normalMapUv:Ut&&x(b.normalMap.channel),displacementMapUv:pt&&x(b.displacementMap.channel),emissiveMapUv:te&&x(b.emissiveMap.channel),metalnessMapUv:Pt&&x(b.metalnessMap.channel),roughnessMapUv:C&&x(b.roughnessMap.channel),anisotropyMapUv:_t&&x(b.anisotropyMap.channel),clearcoatMapUv:Lt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(b.sheenRoughnessMap.channel),specularMapUv:Re&&x(b.specularMap.channel),specularColorMapUv:ge&&x(b.specularColorMap.channel),specularIntensityMapUv:$e&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:Mt&&x(b.thicknessMap.channel),alphaMapUv:nt&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ut||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Ie||nt),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Jt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:un,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:te&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===Un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&b.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zn.vertexUv1s=c.has(1),Zn.vertexUv2s=c.has(2),Zn.vertexUv3s=c.has(3),c.clear(),Zn}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(M,b),_(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let M=g[b.type],D;if(M){let H=hs[M];D=yr.clone(H.uniforms)}else D=b.uniforms;return D}function P(b,M){let D;for(let H=0,O=h.length;H<O;H++){let G=h[H];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new Ib(n,M,b,r),h.push(D)),D}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:I}}function Db(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ub(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Tm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Am(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Ub),i.length>1&&i.sort(f||Tm),s.length>1&&s.sort(f||Tm)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Nb(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Am,n.set(i,[o])):s>=r.length?(o=new Am,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ct};break;case"SpotLight":e={position:new R,direction:new R,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Fb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Bb=0;function Ob(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Hb(n){let t=new zb,e=Fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new Ce,o=new Ce;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,_=0,y=0,P=0,T=0,S=0;c.sort(Ob);for(let b=0,M=c.length;b<M;b++){let D=c[b],H=D.color,O=D.intensity,G=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*O,u+=H.g*O,f+=H.b*O;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],O);S++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ot=D.shadow,Z=e.get(D);Z.shadowIntensity=ot.intensity,Z.shadowBias=ot.bias,Z.shadowNormalBias=ot.normalBias,Z.shadowRadius=ot.radius,Z.shadowMapSize=ot.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=D.shadow.matrix,v++}i.directional[d]=q,d++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(H).multiplyScalar(O),q.distance=G,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[x]=q;let ot=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,ot.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[x]=ot.matrix,D.castShadow){let Z=e.get(D);Z.shadowIntensity=ot.intensity,Z.shadowBias=ot.bias,Z.shadowNormalBias=ot.normalBias,Z.shadowRadius=ot.radius,Z.shadowMapSize=ot.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=Y,y++}x++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(H).multiplyScalar(O),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let ot=D.shadow,Z=e.get(D);Z.shadowIntensity=ot.intensity,Z.shadowBias=ot.bias,Z.shadowNormalBias=ot.normalBias,Z.shadowRadius=ot.radius,Z.shadowMapSize=ot.mapSize,Z.shadowCameraNear=ot.camera.near,Z.shadowCameraFar=ot.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=q,g++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(O),q.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==P||I.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=P,I.numLightProbes=S,i.version=Bb++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Rm(n){let t=new Hb(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function kb(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Rm(n),t.set(s,[a])):r>=o.length?(a=new Rm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var wd=class extends Gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Td=class extends Gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vb=`uniform sampler2D shadow_pass;
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
}`;function Wb(n,t,e){let i=new Al,s=new tt,r=new tt,o=new We,a=new wd({depthPacking:Ny}),l=new Td,c={},h=e.maxTextureSize,u={[pr]:Un,[Un]:pr,[fn]:fn},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Gb,fragmentShader:Vb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ze;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm;let p=this.type;this.render=function(T,S,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ds),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let O=p!==Ns&&this.type===Ns,G=p===Ns&&this.type!==Ns;for(let Y=0,q=T.length;Y<q;Y++){let ot=T[Y],Z=ot.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let yt=Z.getFrameExtents();if(s.multiply(yt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,Z.mapSize.y=r.y)),Z.map===null||O===!0||G===!0){let Ft=this.type!==Ns?{minFilter:Qn,magFilter:Qn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new zn(s.x,s.y,Ft),Z.map.texture.name=ot.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let Rt=Z.getViewportCount();for(let Ft=0;Ft<Rt;Ft++){let ue=Z.getViewport(Ft);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),H.viewport(o),Z.updateMatrices(ot,Ft),i=Z.getFrustum(),y(S,I,Z.camera,ot,this.type)}Z.isPointLightShadow!==!0&&this.type===Ns&&v(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,D)};function v(T,S){let I=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(S,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(S,null,I,d,x,null)}function _(T,S,I,b){let M=null,D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let H=M.uuid,O=S.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let Y=G[O];Y===void 0&&(Y=M.clone(),G[O]=Y,S.addEventListener("dispose",P)),M=Y}if(M.visible=S.visible,M.wireframe=S.wireframe,b===Ns?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=n.properties.get(M);H.light=I}return M}function y(T,S,I,b,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ns)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let O=t.update(T),G=T.material;if(Array.isArray(G)){let Y=O.groups;for(let q=0,ot=Y.length;q<ot;q++){let Z=Y[q],yt=G[Z.materialIndex];if(yt&&yt.visible){let Rt=_(T,yt,b,M);T.onBeforeShadow(n,T,S,I,O,Rt,Z),n.renderBufferDirect(I,null,O,Rt,T,Z),T.onAfterShadow(n,T,S,I,O,Rt,Z)}}}else if(G.visible){let Y=_(T,G,b,M);T.onBeforeShadow(n,T,S,I,O,Y,null),n.renderBufferDirect(I,null,O,Y,T,null),T.onAfterShadow(n,T,S,I,O,Y,null)}}let H=T.children;for(let O=0,G=H.length;O<G;O++)y(H[O],S,I,b,M)}function P(T){T.target.removeEventListener("dispose",P);for(let I in c){let b=c[I],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Xb={[If]:Pf,[Lf]:Nf,[Df]:zf,[ma]:Uf,[Pf]:If,[Nf]:Lf,[zf]:Df,[Uf]:ma};function qb(n,t){function e(){let N=!1,Mt=new We,$=null,nt=new We(0,0,0,0);return{setMask:function(wt){$!==wt&&!N&&(n.colorMask(wt,wt,wt,wt),$=wt)},setLocked:function(wt){N=wt},setClear:function(wt,Et,fe,un,Zn){Zn===!0&&(wt*=un,Et*=un,fe*=un),Mt.set(wt,Et,fe,un),nt.equals(Mt)===!1&&(n.clearColor(wt,Et,fe,un),nt.copy(Mt))},reset:function(){N=!1,$=null,nt.set(-1,0,0,0)}}}function i(){let N=!1,Mt=!1,$=null,nt=null,wt=null;return{setReversed:function(Et){if(Mt!==Et){let fe=t.get("EXT_clip_control");Mt?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);let un=wt;wt=null,this.setClear(un)}Mt=Et},getReversed:function(){return Mt},setTest:function(Et){Et?dt(n.DEPTH_TEST):Jt(n.DEPTH_TEST)},setMask:function(Et){$!==Et&&!N&&(n.depthMask(Et),$=Et)},setFunc:function(Et){if(Mt&&(Et=Xb[Et]),nt!==Et){switch(Et){case If:n.depthFunc(n.NEVER);break;case Pf:n.depthFunc(n.ALWAYS);break;case Lf:n.depthFunc(n.LESS);break;case ma:n.depthFunc(n.LEQUAL);break;case Df:n.depthFunc(n.EQUAL);break;case Uf:n.depthFunc(n.GEQUAL);break;case Nf:n.depthFunc(n.GREATER);break;case zf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=Et}},setLocked:function(Et){N=Et},setClear:function(Et){wt!==Et&&(Mt&&(Et=1-Et),n.clearDepth(Et),wt=Et)},reset:function(){N=!1,$=null,nt=null,wt=null,Mt=!1}}}function s(){let N=!1,Mt=null,$=null,nt=null,wt=null,Et=null,fe=null,un=null,Zn=null;return{setTest:function(Ge){N||(Ge?dt(n.STENCIL_TEST):Jt(n.STENCIL_TEST))},setMask:function(Ge){Mt!==Ge&&!N&&(n.stencilMask(Ge),Mt=Ge)},setFunc:function(Ge,ki,Rs){($!==Ge||nt!==ki||wt!==Rs)&&(n.stencilFunc(Ge,ki,Rs),$=Ge,nt=ki,wt=Rs)},setOp:function(Ge,ki,Rs){(Et!==Ge||fe!==ki||un!==Rs)&&(n.stencilOp(Ge,ki,Rs),Et=Ge,fe=ki,un=Rs)},setLocked:function(Ge){N=Ge},setClear:function(Ge){Zn!==Ge&&(n.clearStencil(Ge),Zn=Ge)},reset:function(){N=!1,Mt=null,$=null,nt=null,wt=null,Et=null,fe=null,un=null,Zn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,_=null,y=null,P=null,T=null,S=new ct(0,0,0),I=0,b=!1,M=null,D=null,H=null,O=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ot=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ot>=2);let yt=null,Rt={},Ft=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Ne=new We().fromArray(Ft),j=new We().fromArray(ue);function ut(N,Mt,$,nt){let wt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(N,Et),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<$;fe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(Mt+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return Et}let Ht={};Ht[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Ht[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ht[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),o.setFunc(ma),at(!1),Ut(P0),dt(n.CULL_FACE),L(ds);function dt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Jt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function oe(N,Mt){return u[N]!==Mt?(n.bindFramebuffer(N,Mt),u[N]=Mt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ne(N,Mt){let $=d,nt=!1;if(N){$=f.get(Mt),$===void 0&&($=[],f.set(Mt,$));let wt=N.textures;if($.length!==wt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,fe=wt.length;Et<fe;Et++)$[Et]=n.COLOR_ATTACHMENT0+Et;$.length=wt.length,nt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,nt=!0);nt&&n.drawBuffers($)}function Ie(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let it={[co]:n.FUNC_ADD,[dy]:n.FUNC_SUBTRACT,[py]:n.FUNC_REVERSE_SUBTRACT};it[my]=n.MIN,it[gy]=n.MAX;let ht={[xy]:n.ZERO,[yy]:n.ONE,[vy]:n.SRC_COLOR,[Rf]:n.SRC_ALPHA,[wy]:n.SRC_ALPHA_SATURATE,[Ey]:n.DST_COLOR,[My]:n.DST_ALPHA,[_y]:n.ONE_MINUS_SRC_COLOR,[Cf]:n.ONE_MINUS_SRC_ALPHA,[Sy]:n.ONE_MINUS_DST_COLOR,[by]:n.ONE_MINUS_DST_ALPHA,[Ty]:n.CONSTANT_COLOR,[Ay]:n.ONE_MINUS_CONSTANT_COLOR,[Ry]:n.CONSTANT_ALPHA,[Cy]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,Mt,$,nt,wt,Et,fe,un,Zn,Ge){if(N===ds){x===!0&&(Jt(n.BLEND),x=!1);return}if(x===!1&&(dt(n.BLEND),x=!0),N!==fy){if(N!==m||Ge!==b){if((p!==co||y!==co)&&(n.blendEquation(n.FUNC_ADD),p=co,y=co),Ge)switch(N){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case on:n.blendFunc(n.ONE,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case on:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,_=null,P=null,T=null,S.set(0,0,0),I=0,m=N,b=Ge}return}wt=wt||Mt,Et=Et||$,fe=fe||nt,(Mt!==p||wt!==y)&&(n.blendEquationSeparate(it[Mt],it[wt]),p=Mt,y=wt),($!==v||nt!==_||Et!==P||fe!==T)&&(n.blendFuncSeparate(ht[$],ht[nt],ht[Et],ht[fe]),v=$,_=nt,P=Et,T=fe),(un.equals(S)===!1||Zn!==I)&&(n.blendColor(un.r,un.g,un.b,Zn),S.copy(un),I=Zn),m=N,b=!1}function Yt(N,Mt){N.side===fn?Jt(n.CULL_FACE):dt(n.CULL_FACE);let $=N.side===Un;Mt&&($=!$),at($),N.blending===Bs&&N.transparent===!1?L(ds):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let nt=N.stencilWrite;a.setTest(nt),nt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),te(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Ut(N){N!==hy?(dt(n.CULL_FACE),N!==D&&(N===P0?n.cullFace(n.BACK):N===uy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Jt(n.CULL_FACE),D=N}function pt(N){N!==H&&(q&&n.lineWidth(N),H=N)}function te(N,Mt,$){N?(dt(n.POLYGON_OFFSET_FILL),(O!==Mt||G!==$)&&(n.polygonOffset(Mt,$),O=Mt,G=$)):Jt(n.POLYGON_OFFSET_FILL)}function Pt(N){N?dt(n.SCISSOR_TEST):Jt(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+Y-1),yt!==N&&(n.activeTexture(N),yt=N)}function E(N,Mt,$){$===void 0&&(yt===null?$=n.TEXTURE0+Y-1:$=yt);let nt=Rt[$];nt===void 0&&(nt={type:void 0,texture:void 0},Rt[$]=nt),(nt.type!==N||nt.texture!==Mt)&&(yt!==$&&(n.activeTexture($),yt=$),n.bindTexture(N,Mt||Ht[N]),nt.type=N,nt.texture=Mt)}function k(){let N=Rt[yt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(N){Ne.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ne.copy(N))}function zt(N){j.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function Re(N,Mt){let $=c.get(Mt);$===void 0&&($=new WeakMap,c.set(Mt,$));let nt=$.get(N);nt===void 0&&(nt=n.getUniformBlockIndex(Mt,N.name),$.set(N,nt))}function ge(N,Mt){let nt=c.get(Mt).get(N);l.get(Mt)!==nt&&(n.uniformBlockBinding(Mt,nt,N.__bindingPointIndex),l.set(Mt,nt))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},yt=null,Rt={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,_=null,y=null,P=null,T=null,S=new ct(0,0,0),I=0,b=!1,M=null,D=null,H=null,O=null,G=null,Ne.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Jt,bindFramebuffer:oe,drawBuffers:ne,useProgram:Ie,setBlending:L,setMaterial:Yt,setFlipSided:at,setCullFace:Ut,setLineWidth:pt,setPolygonOffset:te,setScissorTest:Pt,activeTexture:C,bindTexture:E,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:Nt,texImage3D:ee,updateUBOMapping:Re,uniformBlockBinding:ge,texStorage2D:Ee,texStorage3D:lt,texSubImage2D:K,texSubImage3D:kt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Lt,scissor:ie,viewport:zt,reset:$e}}function Cm(n,t,e,i){let s=Yb(i);switch(e){case Jm:return n*t;case Qm:return n*t;case jm:return n*t*2;case Gl:return n*t/s.components*s.byteLength;case ap:return n*t/s.components*s.byteLength;case tg:return n*t*2/s.components*s.byteLength;case lp:return n*t*2/s.components*s.byteLength;case Km:return n*t*3/s.components*s.byteLength;case Yi:return n*t*4/s.components*s.byteLength;case cp:return n*t*4/s.components*s.byteLength;case nh:case ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sh:case rh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kf:case Vf:return Math.max(n,16)*Math.max(t,8)/4;case Hf:case Gf:return Math.max(n,8)*Math.max(t,8)/2;case Wf:case Xf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zf:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $f:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jf:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kf:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Qf:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jf:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case td:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ed:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nd:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case id:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sd:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rd:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case od:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oh:case ad:case ld:return Math.ceil(n/4)*Math.ceil(t/4)*16;case eg:case cd:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hd:case ud:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yb(n){switch(n){case Hs:case Ym:return{byteLength:1,components:1};case wl:case Zm:case bi:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case mo:case sp:case fs:return{byteLength:4,components:1};case $m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Zb(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return d?new OffscreenCanvas(C,E):ch("canvas")}function x(C,E,k){let J=1,st=Pt(C);if((st.width>k||st.height>k)&&(J=k/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor(J*st.width),kt=Math.floor(J*st.height);u===void 0&&(u=g(K,kt));let _t=E?g(K,kt):u;return _t.width=K,_t.height=kt,_t.getContext("2d").drawImage(C,0,0,K,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+K+"x"+kt+")."),_t}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,E,k,J,st=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=E;if(E===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),E===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),E===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),E===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),E===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),E===n.RGBA){let kt=st?Bh:Te.getTransfer(J);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=kt===Be?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(C,E){let k;return C?E===null||E===mo||E===ya?k=n.DEPTH24_STENCIL8:E===fs?k=n.DEPTH32F_STENCIL8:E===wl&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mo||E===ya?k=n.DEPTH_COMPONENT24:E===fs?k=n.DEPTH_COMPONENT32F:E===wl&&(k=n.DEPTH_COMPONENT16),k}function P(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qn&&C.minFilter!==us?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){let E=C.target;E.removeEventListener("dispose",T),I(E),E.isVideoTexture&&h.delete(E)}function S(C){let E=C.target;E.removeEventListener("dispose",S),M(E)}function I(C){let E=i.get(C);if(E.__webglInit===void 0)return;let k=C.source,J=f.get(k);if(J){let st=J[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(C),Object.keys(J).length===0&&f.delete(k)}i.remove(C)}function b(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let k=C.source,J=f.get(k);delete J[E.__cacheKey],o.memory.textures--}function M(C){let E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let st=0;st<E.__webglFramebuffer[J].length;st++)n.deleteFramebuffer(E.__webglFramebuffer[J][st]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=C.textures;for(let J=0,st=k.length;J<st;J++){let K=i.get(k[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(C)}let D=0;function H(){D=0}function O(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function G(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){let k=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,E);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function q(C,E){let k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function ot(C,E){let k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,E);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function Z(C,E){let k=i.get(C);if(C.version>0&&k.__version!==C.version){ut(k,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}let yt={[po]:n.REPEAT,[uo]:n.CLAMP_TO_EDGE,[Of]:n.MIRRORED_REPEAT},Rt={[Qn]:n.NEAREST,[Dy]:n.NEAREST_MIPMAP_NEAREST,[wc]:n.NEAREST_MIPMAP_LINEAR,[us]:n.LINEAR,[Yu]:n.LINEAR_MIPMAP_NEAREST,[fo]:n.LINEAR_MIPMAP_LINEAR},Ft={[Fy]:n.NEVER,[Vy]:n.ALWAYS,[By]:n.LESS,[ig]:n.LEQUAL,[Oy]:n.EQUAL,[Gy]:n.GEQUAL,[Hy]:n.GREATER,[ky]:n.NOTEQUAL};function ue(C,E){if(E.type===fs&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===us||E.magFilter===Yu||E.magFilter===wc||E.magFilter===fo||E.minFilter===us||E.minFilter===Yu||E.minFilter===wc||E.minFilter===fo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,yt[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,yt[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,yt[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Rt[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Rt[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ft[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qn||E.minFilter!==wc&&E.minFilter!==fo||E.type===fs&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(C,E){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,st=f.get(J);st===void 0&&(st={},f.set(J,st));let K=G(E);if(K!==C.__cacheKey){st[K]===void 0&&(st[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),st[K].usedTimes++;let kt=st[C.__cacheKey];kt!==void 0&&(st[C.__cacheKey].usedTimes--,kt.usedTimes===0&&b(E)),C.__cacheKey=K,C.__webglTexture=st[K].texture}return k}function j(C,E,k){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);let st=Ne(C,E),K=E.source;e.bindTexture(J,C.__webglTexture,n.TEXTURE0+k);let kt=i.get(K);if(K.version!==kt.__version||st===!0){e.activeTexture(n.TEXTURE0+k);let _t=Te.getPrimaries(Te.workingColorSpace),Lt=E.colorSpace===ur?null:Te.getPrimaries(E.colorSpace),Ee=E.colorSpace===ur||_t===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let lt=x(E.image,!1,s.maxTextureSize);lt=te(E,lt);let Nt=r.convert(E.format,E.colorSpace),ee=r.convert(E.type),ie=_(E.internalFormat,Nt,ee,E.colorSpace,E.isVideoTexture);ue(J,E);let zt,Re=E.mipmaps,ge=E.isVideoTexture!==!0,$e=kt.__version===void 0||st===!0,N=K.dataReady,Mt=P(E,lt);if(E.isDepthTexture)ie=y(E.format===va,E.type),$e&&(ge?e.texStorage2D(n.TEXTURE_2D,1,ie,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,ie,lt.width,lt.height,0,Nt,ee,null));else if(E.isDataTexture)if(Re.length>0){ge&&$e&&e.texStorage2D(n.TEXTURE_2D,Mt,ie,Re[0].width,Re[0].height);for(let $=0,nt=Re.length;$<nt;$++)zt=Re[$],ge?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,zt.width,zt.height,Nt,ee,zt.data):e.texImage2D(n.TEXTURE_2D,$,ie,zt.width,zt.height,0,Nt,ee,zt.data);E.generateMipmaps=!1}else ge?($e&&e.texStorage2D(n.TEXTURE_2D,Mt,ie,lt.width,lt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,Nt,ee,lt.data)):e.texImage2D(n.TEXTURE_2D,0,ie,lt.width,lt.height,0,Nt,ee,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ge&&$e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,ie,Re[0].width,Re[0].height,lt.depth);for(let $=0,nt=Re.length;$<nt;$++)if(zt=Re[$],E.format!==Yi)if(Nt!==null)if(ge){if(N)if(E.layerUpdates.size>0){let wt=Cm(zt.width,zt.height,E.format,E.type);for(let Et of E.layerUpdates){let fe=zt.data.subarray(Et*wt/zt.data.BYTES_PER_ELEMENT,(Et+1)*wt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Et,zt.width,zt.height,1,Nt,fe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,zt.width,zt.height,lt.depth,Nt,zt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ie,zt.width,zt.height,lt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,zt.width,zt.height,lt.depth,Nt,ee,zt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,ie,zt.width,zt.height,lt.depth,0,Nt,ee,zt.data)}else{ge&&$e&&e.texStorage2D(n.TEXTURE_2D,Mt,ie,Re[0].width,Re[0].height);for(let $=0,nt=Re.length;$<nt;$++)zt=Re[$],E.format!==Yi?Nt!==null?ge?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,zt.width,zt.height,Nt,zt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,ie,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,zt.width,zt.height,Nt,ee,zt.data):e.texImage2D(n.TEXTURE_2D,$,ie,zt.width,zt.height,0,Nt,ee,zt.data)}else if(E.isDataArrayTexture)if(ge){if($e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,ie,lt.width,lt.height,lt.depth),N)if(E.layerUpdates.size>0){let $=Cm(lt.width,lt.height,E.format,E.type);for(let nt of E.layerUpdates){let wt=lt.data.subarray(nt*$/lt.data.BYTES_PER_ELEMENT,(nt+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,Nt,ee,wt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Nt,ee,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ie,lt.width,lt.height,lt.depth,0,Nt,ee,lt.data);else if(E.isData3DTexture)ge?($e&&e.texStorage3D(n.TEXTURE_3D,Mt,ie,lt.width,lt.height,lt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Nt,ee,lt.data)):e.texImage3D(n.TEXTURE_3D,0,ie,lt.width,lt.height,lt.depth,0,Nt,ee,lt.data);else if(E.isFramebufferTexture){if($e)if(ge)e.texStorage2D(n.TEXTURE_2D,Mt,ie,lt.width,lt.height);else{let $=lt.width,nt=lt.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(n.TEXTURE_2D,wt,ie,$,nt,0,Nt,ee,null),$>>=1,nt>>=1}}else if(Re.length>0){if(ge&&$e){let $=Pt(Re[0]);e.texStorage2D(n.TEXTURE_2D,Mt,ie,$.width,$.height)}for(let $=0,nt=Re.length;$<nt;$++)zt=Re[$],ge?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Nt,ee,zt):e.texImage2D(n.TEXTURE_2D,$,ie,Nt,ee,zt);E.generateMipmaps=!1}else if(ge){if($e){let $=Pt(lt);e.texStorage2D(n.TEXTURE_2D,Mt,ie,$.width,$.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,ee,lt)}else e.texImage2D(n.TEXTURE_2D,0,ie,Nt,ee,lt);m(E)&&p(J),kt.__version=K.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ut(C,E,k){if(E.image.length!==6)return;let J=Ne(C,E),st=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);let K=i.get(st);if(st.version!==K.__version||J===!0){e.activeTexture(n.TEXTURE0+k);let kt=Te.getPrimaries(Te.workingColorSpace),_t=E.colorSpace===ur?null:Te.getPrimaries(E.colorSpace),Lt=E.colorSpace===ur||kt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let nt=0;nt<6;nt++)!Ee&&!lt?Nt[nt]=x(E.image[nt],!0,s.maxCubemapSize):Nt[nt]=lt?E.image[nt].image:E.image[nt],Nt[nt]=te(E,Nt[nt]);let ee=Nt[0],ie=r.convert(E.format,E.colorSpace),zt=r.convert(E.type),Re=_(E.internalFormat,ie,zt,E.colorSpace),ge=E.isVideoTexture!==!0,$e=K.__version===void 0||J===!0,N=st.dataReady,Mt=P(E,ee);ue(n.TEXTURE_CUBE_MAP,E);let $;if(Ee){ge&&$e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Re,ee.width,ee.height);for(let nt=0;nt<6;nt++){$=Nt[nt].mipmaps;for(let wt=0;wt<$.length;wt++){let Et=$[wt];E.format!==Yi?ie!==null?ge?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Et.width,Et.height,ie,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Re,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Et.width,Et.height,ie,zt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Re,Et.width,Et.height,0,ie,zt,Et.data)}}}else{if($=E.mipmaps,ge&&$e){$.length>0&&Mt++;let nt=Pt(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Re,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){ge?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt[nt].width,Nt[nt].height,ie,zt,Nt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Re,Nt[nt].width,Nt[nt].height,0,ie,zt,Nt[nt].data);for(let wt=0;wt<$.length;wt++){let fe=$[wt].image[nt].image;ge?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,fe.width,fe.height,ie,zt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Re,fe.width,fe.height,0,ie,zt,fe.data)}}else{ge?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ie,zt,Nt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Re,ie,zt,Nt[nt]);for(let wt=0;wt<$.length;wt++){let Et=$[wt];ge?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,ie,zt,Et.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Re,ie,zt,Et.image[nt])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),K.__version=st.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ht(C,E,k,J,st,K){let kt=r.convert(k.format,k.colorSpace),_t=r.convert(k.type),Lt=_(k.internalFormat,kt,_t,k.colorSpace),Ee=i.get(E),lt=i.get(k);if(lt.__renderTarget=E,!Ee.__hasExternalTextures){let Nt=Math.max(1,E.width>>K),ee=Math.max(1,E.height>>K);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,K,Lt,Nt,ee,E.depth,0,kt,_t,null):e.texImage2D(st,K,Lt,Nt,ee,0,kt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Ut(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,st,lt.__webglTexture,0,at(E)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,st,lt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(C,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){let J=E.depthTexture,st=J&&J.isDepthTexture?J.type:null,K=y(E.stencilBuffer,st),kt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=at(E);Ut(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,K,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,kt,n.RENDERBUFFER,C)}else{let J=E.textures;for(let st=0;st<J.length;st++){let K=J[st],kt=r.convert(K.format,K.colorSpace),_t=r.convert(K.type),Lt=_(K.internalFormat,kt,_t,K.colorSpace),Ee=at(E);k&&Ut(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Lt,E.width,E.height):Ut(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Lt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Lt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let st=J.__webglTexture,K=at(E);if(E.depthTexture.format===fa)Ut(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0);else if(E.depthTexture.format===va)Ut(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function oe(C){let E=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=J}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Jt(E.__webglFramebuffer,C)}else if(k){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),dt(E.__webglDepthbuffer[J],C,!1);else{let st=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),dt(E.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(C,E,k){let J=i.get(C);E!==void 0&&Ht(J.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&oe(C)}function Ie(C){let E=C.texture,k=i.get(C),J=i.get(E);C.addEventListener("dispose",S);let st=C.textures,K=C.isWebGLCubeRenderTarget===!0,kt=st.length>1;if(kt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[_t]=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)k.__webglFramebuffer[_t][Lt]=n.createFramebuffer()}else k.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)k.__webglFramebuffer[_t]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(kt)for(let _t=0,Lt=st.length;_t<Lt;_t++){let Ee=i.get(st[_t]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ut(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){let Lt=st[_t];k.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[_t]);let Ee=r.convert(Lt.format,Lt.colorSpace),lt=r.convert(Lt.type),Nt=_(Lt.internalFormat,Ee,lt,Lt.colorSpace,C.isXRRenderTarget===!0),ee=at(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Nt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,k.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ue(n.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)Ht(k.__webglFramebuffer[_t][Lt],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt);else Ht(k.__webglFramebuffer[_t],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let _t=0,Lt=st.length;_t<Lt;_t++){let Ee=st[_t],lt=i.get(Ee);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),ue(n.TEXTURE_2D,Ee),Ht(k.__webglFramebuffer,C,Ee,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),m(Ee)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),ue(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)Ht(k.__webglFramebuffer[Lt],C,E,n.COLOR_ATTACHMENT0,_t,Lt);else Ht(k.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,_t,0);m(E)&&p(_t),e.unbindTexture()}C.depthBuffer&&oe(C)}function it(C){let E=C.textures;for(let k=0,J=E.length;k<J;k++){let st=E[k];if(m(st)){let K=v(C),kt=i.get(st).__webglTexture;e.bindTexture(K,kt),p(K),e.unbindTexture()}}}let ht=[],L=[];function Yt(C){if(C.samples>0){if(Ut(C)===!1){let E=C.textures,k=C.width,J=C.height,st=n.COLOR_BUFFER_BIT,K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,kt=i.get(C),_t=E.length>1;if(_t)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,kt.__webglColorRenderbuffer[Lt]);let Ee=i.get(E[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,st,n.NEAREST),l===!0&&(ht.length=0,L.length=0,ht.push(n.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ht.push(K),L.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,kt.__webglColorRenderbuffer[Lt]);let Ee=i.get(E[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function at(C){return Math.min(s.maxSamples,C.samples)}function Ut(C){let E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function te(C,E){let k=C.colorSpace,J=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ra&&k!==ur&&(Te.getTransfer(k)===Be?(J!==Yi||st!==Hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=ot,this.setTextureCube=Z,this.rebindTextures=ne,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=Ut}function $b(n,t){function e(i,s=ur){let r,o=Te.getTransfer(s);if(i===Hs)return n.UNSIGNED_BYTE;if(i===rp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===op)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$m)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ym)return n.BYTE;if(i===Zm)return n.SHORT;if(i===wl)return n.UNSIGNED_SHORT;if(i===sp)return n.INT;if(i===mo)return n.UNSIGNED_INT;if(i===fs)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Jm)return n.ALPHA;if(i===Km)return n.RGB;if(i===Yi)return n.RGBA;if(i===Qm)return n.LUMINANCE;if(i===jm)return n.LUMINANCE_ALPHA;if(i===fa)return n.DEPTH_COMPONENT;if(i===va)return n.DEPTH_STENCIL;if(i===Gl)return n.RED;if(i===ap)return n.RED_INTEGER;if(i===tg)return n.RG;if(i===lp)return n.RG_INTEGER;if(i===cp)return n.RGBA_INTEGER;if(i===nh||i===ih||i===sh||i===rh)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ih)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ih)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===kf||i===Gf||i===Vf)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wf||i===Xf||i===qf)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wf||i===Xf)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yf||i===Zf||i===$f||i===Jf||i===Kf||i===Qf||i===jf||i===td||i===ed||i===nd||i===id||i===sd||i===rd||i===od)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$f)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jf)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===td)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ed)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===id)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===od)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===ad||i===ld)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===oh)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ld)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eg||i===cd||i===hd||i===ud)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===oh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ud)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ad=class extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Tt=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jb={type:"move"},Ml=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qb=`
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

}`,Rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new hi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qe({vertexShader:Kb,fragmentShader:Qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cd=class extends mr{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Rd,m=e.getContextAttributes(),p=null,v=null,_=[],y=[],P=new tt,T=null,S=new Kn;S.viewport=new We;let I=new Kn;I.viewport=new We;let b=[S,I],M=new Ad,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=_[j];return ut===void 0&&(ut=new Ml,_[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=_[j];return ut===void 0&&(ut=new Ml,_[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=_[j];return ut===void 0&&(ut=new Ml,_[j]=ut),ut.getHandSpace()};function O(j){let ut=y.indexOf(j.inputSource);if(ut===-1)return;let Ht=_[ut];Ht!==void 0&&(Ht.update(j.inputSource,j.frame,c||o),Ht.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let j=0;j<_.length;j++){let ut=y[j];ut!==null&&(y[j]=null,_[j].disconnect(ut))}D=null,H=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Ne.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new zn(d.framebufferWidth,d.framebufferHeight,{format:Yi,type:Hs,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Ht=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?va:fa,Ht=m.stencil?ya:mo);let Jt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new zn(f.textureWidth,f.textureHeight,{format:Yi,type:Hs,depthTexture:new vh(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(j){for(let ut=0;ut<j.removed.length;ut++){let Ht=j.removed[ut],dt=y.indexOf(Ht);dt>=0&&(y[dt]=null,_[dt].disconnect(Ht))}for(let ut=0;ut<j.added.length;ut++){let Ht=j.added[ut],dt=y.indexOf(Ht);if(dt===-1){for(let oe=0;oe<_.length;oe++)if(oe>=y.length){y.push(Ht),dt=oe;break}else if(y[oe]===null){y[oe]=Ht,dt=oe;break}if(dt===-1)break}let Jt=_[dt];Jt&&Jt.connect(Ht)}}let q=new R,ot=new R;function Z(j,ut,Ht){q.setFromMatrixPosition(ut.matrixWorld),ot.setFromMatrixPosition(Ht.matrixWorld);let dt=q.distanceTo(ot),Jt=ut.projectionMatrix.elements,oe=Ht.projectionMatrix.elements,ne=Jt[14]/(Jt[10]-1),Ie=Jt[14]/(Jt[10]+1),it=(Jt[9]+1)/Jt[5],ht=(Jt[9]-1)/Jt[5],L=(Jt[8]-1)/Jt[0],Yt=(oe[8]+1)/oe[0],at=ne*L,Ut=ne*Yt,pt=dt/(-L+Yt),te=pt*-L;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(te),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Jt[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let Pt=ne+pt,C=Ie+pt,E=at-te,k=Ut+(dt-te),J=it*Ie/C*Pt,st=ht*Ie/C*Pt;j.projectionMatrix.makePerspective(E,k,J,st,Pt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function yt(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ut=j.near,Ht=j.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(Ht=x.depthFar)),M.near=I.near=S.near=ut,M.far=I.far=S.far=Ht,(D!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,H=M.far),S.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,M.layers.mask=S.layers.mask|I.layers.mask;let dt=j.parent,Jt=M.cameras;yt(M,dt);for(let oe=0;oe<Jt.length;oe++)yt(Jt[oe],dt);Jt.length===2?Z(M,S,I):M.projectionMatrix.copy(S.projectionMatrix),Rt(j,M,dt)};function Rt(j,ut,Ht){Ht===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(Ht.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Tl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Ft=null;function ue(j,ut){if(h=ut.getViewerPose(c||o),g=ut,h!==null){let Ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let dt=!1;Ht.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let oe=0;oe<Ht.length;oe++){let ne=Ht[oe],Ie=null;if(d!==null)Ie=d.getViewport(ne);else{let ht=u.getViewSubImage(f,ne);Ie=ht.viewport,oe===0&&(t.setRenderTargetTextures(v,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(v))}let it=b[oe];it===void 0&&(it=new Kn,it.layers.enable(oe),it.viewport=new We,b[oe]=it),it.matrix.fromArray(ne.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ne.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),oe===0&&(M.matrix.copy(it.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(it)}let Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")){let oe=u.getDepthInformation(Ht[0]);oe&&oe.isValid&&oe.texture&&x.init(t,oe,s.renderState)}}for(let Ht=0;Ht<_.length;Ht++){let dt=y[Ht],Jt=_[Ht];dt!==null&&Jt!==void 0&&Jt.update(dt,ut,c||o)}Ft&&Ft(j,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Ne=new lg;Ne.setAnimationLoop(ue),this.setAnimationLoop=function(j){Ft=j},this.dispose=function(){}}},ao=new Mi,jb=new Ce;function tE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ag(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,ao.copy(y),ao.x*=-1,ao.y*=-1,ao.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),m.envMapRotation.value.setFromMatrix4(jb.makeRotationFromEuler(ao)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eE(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let P=_.program;i.updateUBOMapping(v,P);let T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){let _=u();v.__bindingPointIndex=_;let y=n.createBuffer(),P=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=s[v.id],y=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,S=y.length;T<S;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,M=I.length;b<M;b++){let D=I[b];if(d(D,T,b,P)===!0){let H=D.__offset,O=Array.isArray(D.value)?D.value:[D.value],G=0;for(let Y=0;Y<O.length;Y++){let q=O[Y],ot=x(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+G,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,G),G+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,_,y,P){let T=v.value,S=_+"_"+y;if(P[S]===void 0)return typeof T=="number"||typeof T=="boolean"?P[S]=T:P[S]=T.clone(),!0;{let I=P[S];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return P[S]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(v){let _=v.uniforms,y=0,P=16;for(let S=0,I=_.length;S<I;S++){let b=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,D=b.length;M<D;M++){let H=b[M],O=Array.isArray(H.value)?H.value:[H.value];for(let G=0,Y=O.length;G<Y;G++){let q=O[G],ot=x(q),Z=y%P,yt=Z%ot.boundary,Rt=Z+yt;y+=yt,Rt!==0&&P-Rt<ot.storage&&(y+=P-Rt),H.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ot.storage}}}let T=y%P;return T>0&&(y+=P-T),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var _h=class{constructor(t={}){let{canvas:e=ov(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=dr,this.toneMappingExposure=1;let y=this,P=!1,T=0,S=0,I=null,b=-1,M=null,D=new We,H=new We,O=null,G=new ct(0),Y=0,q=e.width,ot=e.height,Z=1,yt=null,Rt=null,Ft=new We(0,0,q,ot),ue=new We(0,0,q,ot),Ne=!1,j=new Al,ut=!1,Ht=!1,dt=new Ce,Jt=new Ce,oe=new R,ne=new We,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function ht(){return I===null?Z:1}let L=i;function Yt(w,z){return e.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){let z="webgl2";if(L=Yt(z,w),L===null)throw Yt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let at,Ut,pt,te,Pt,C,E,k,J,st,K,kt,_t,Lt,Ee,lt,Nt,ee,ie,zt,Re,ge,$e,N;function Mt(){at=new xM(L),at.init(),ge=new $b(L,at),Ut=new uM(L,at,t,ge),pt=new qb(L,at),Ut.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),te=new _M(L),Pt=new Db,C=new Zb(L,at,pt,Pt,Ut,ge,te),E=new dM(y),k=new gM(y),J=new Av(L),$e=new cM(L,J),st=new yM(L,J,te,$e),K=new bM(L,st,J,te),ie=new MM(L,Ut,C),lt=new fM(Pt),kt=new Lb(y,E,k,at,Ut,$e,lt),_t=new tE(y,Pt),Lt=new Nb,Ee=new kb(at),ee=new lM(y,E,k,pt,K,d,l),Nt=new Wb(y,K,Ut),N=new eE(L,te,Ut,pt),zt=new hM(L,at,te),Re=new vM(L,at,te),te.programs=kt.programs,y.capabilities=Ut,y.extensions=at,y.properties=Pt,y.renderLists=Lt,y.shadowMap=Nt,y.state=pt,y.info=te}Mt();let $=new Cd(y,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(q,ot,!1))},this.getSize=function(w){return w.set(q,ot)},this.setSize=function(w,z,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ot=z,e.width=Math.floor(w*Z),e.height=Math.floor(z*Z),V===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(q*Z,ot*Z).floor()},this.setDrawingBufferSize=function(w,z,V){q=w,ot=z,Z=V,e.width=Math.floor(w*V),e.height=Math.floor(z*V),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Ft)},this.setViewport=function(w,z,V,W){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,z,V,W),pt.viewport(D.copy(Ft).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,z,V,W){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,z,V,W),pt.scissor(H.copy(ue).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){pt.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){yt=w},this.setTransparentSort=function(w){Rt=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,z=!0,V=!0){let W=0;if(w){let F=!1;if(I!==null){let ft=I.texture.format;F=ft===cp||ft===lp||ft===ap}if(F){let ft=I.texture.type,St=ft===Hs||ft===mo||ft===wl||ft===ya||ft===rp||ft===op,Vt=ee.getClearColor(),Wt=ee.getClearAlpha(),ae=Vt.r,de=Vt.g,Xt=Vt.b;St?(g[0]=ae,g[1]=de,g[2]=Xt,g[3]=Wt,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=ae,x[1]=de,x[2]=Xt,x[3]=Wt,L.clearBufferiv(L.COLOR,0,x))}else W|=L.COLOR_BUFFER_BIT}z&&(W|=L.DEPTH_BUFFER_BIT),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Lt.dispose(),Ee.dispose(),Pt.dispose(),E.dispose(),k.dispose(),K.dispose(),$e.dispose(),N.dispose(),kt.dispose(),$.dispose(),$.removeEventListener("sessionstart",E0),$.removeEventListener("sessionend",S0),eo.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=te.autoReset,z=Nt.enabled,V=Nt.autoUpdate,W=Nt.needsUpdate,F=Nt.type;Mt(),te.autoReset=w,Nt.enabled=z,Nt.autoUpdate=V,Nt.needsUpdate=W,Nt.type=F}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){let z=w.target;z.removeEventListener("dispose",fe),un(z)}function un(w){Zn(w),Pt.remove(w)}function Zn(w){let z=Pt.get(w).programs;z!==void 0&&(z.forEach(function(V){kt.releaseProgram(V)}),w.isShaderMaterial&&kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,V,W,F,ft){z===null&&(z=Ie);let St=F.isMesh&&F.matrixWorld.determinant()<0,Vt=oy(w,z,V,W,F);pt.setMaterial(W,St);let Wt=V.index,ae=1;if(W.wireframe===!0){if(Wt=st.getWireframeAttribute(V),Wt===void 0)return;ae=2}let de=V.drawRange,Xt=V.attributes.position,Pe=de.start*ae,Je=(de.start+de.count)*ae;ft!==null&&(Pe=Math.max(Pe,ft.start*ae),Je=Math.min(Je,(ft.start+ft.count)*ae)),Wt!==null?(Pe=Math.max(Pe,0),Je=Math.min(Je,Wt.count)):Xt!=null&&(Pe=Math.max(Pe,0),Je=Math.min(Je,Xt.count));let en=Je-Pe;if(en<0||en===1/0)return;$e.setup(F,W,Vt,V,Wt);let ci,ze=zt;if(Wt!==null&&(ci=J.get(Wt),ze=Re,ze.setIndex(ci)),F.isMesh)W.wireframe===!0?(pt.setLineWidth(W.wireframeLinewidth*ht()),ze.setMode(L.LINES)):ze.setMode(L.TRIANGLES);else if(F.isLine){let Zt=W.linewidth;Zt===void 0&&(Zt=1),pt.setLineWidth(Zt*ht()),F.isLineSegments?ze.setMode(L.LINES):F.isLineLoop?ze.setMode(L.LINE_LOOP):ze.setMode(L.LINE_STRIP)}else F.isPoints?ze.setMode(L.POINTS):F.isSprite&&ze.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Zt=F._multiDrawStarts,Cs=F._multiDrawCounts,Fe=F._multiDrawCount,Gi=Wt?J.get(Wt).bytesPerElement:1,Wo=Pt.get(W).currentProgram.getUniforms();for(let yi=0;yi<Fe;yi++)Wo.setValue(L,"_gl_DrawID",yi),ze.render(Zt[yi]/Gi,Cs[yi])}else if(F.isInstancedMesh)ze.renderInstances(Pe,en,F.count);else if(V.isInstancedBufferGeometry){let Zt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Cs=Math.min(V.instanceCount,Zt);ze.renderInstances(Pe,en,Cs)}else ze.render(Pe,en)};function Ge(w,z,V){w.transparent===!0&&w.side===fn&&w.forceSinglePass===!1?(w.side=Un,w.needsUpdate=!0,Sc(w,z,V),w.side=pr,w.needsUpdate=!0,Sc(w,z,V),w.side=fn):Sc(w,z,V)}this.compile=function(w,z,V=null){V===null&&(V=w),p=Ee.get(V),p.init(z),_.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ft=F.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){let Vt=ft[St];Ge(Vt,V,F),W.add(Vt)}else Ge(ft,V,F),W.add(ft)}),_.pop(),p=null,W},this.compileAsync=function(w,z,V=null){let W=this.compile(w,z,V);return new Promise(F=>{function ft(){if(W.forEach(function(St){Pt.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){F(w);return}setTimeout(ft,10)}at.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ki=null;function Rs(w){ki&&ki(w)}function E0(){eo.stop()}function S0(){eo.start()}let eo=new lg;eo.setAnimationLoop(Rs),typeof self<"u"&&eo.setContext(self),this.setAnimationLoop=function(w){ki=w,$.setAnimationLoop(w),w===null?eo.stop():eo.start()},$.addEventListener("sessionstart",E0),$.addEventListener("sessionend",S0),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,I),p=Ee.get(w,_.length),p.init(z),_.push(p),Jt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(Jt),Ht=this.localClippingEnabled,ut=lt.init(this.clippingPlanes,Ht),m=Lt.get(w,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){let ft=y.xr.getDepthSensingMesh();ft!==null&&qu(ft,z,-1/0,y.sortObjects)}qu(w,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(yt,Rt),it=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,it&&ee.addToRenderList(m,w),this.info.render.frame++,ut===!0&&lt.beginShadows();let V=p.state.shadowsArray;Nt.render(V,w,z),ut===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,F=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ft=z.cameras;if(F.length>0)for(let St=0,Vt=ft.length;St<Vt;St++){let Wt=ft[St];T0(W,F,w,Wt)}it&&ee.render(w);for(let St=0,Vt=ft.length;St<Vt;St++){let Wt=ft[St];w0(m,w,Wt,Wt.viewport)}}else F.length>0&&T0(W,F,w,z),it&&ee.render(w),w0(m,w,z);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(y,w,z),$e.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],ut===!0&&lt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function qu(w,z,V,W){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){W&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Jt);let St=K.update(w),Vt=w.material;Vt.visible&&m.push(w,St,Vt,V,ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){let St=K.update(w),Vt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ne.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ne.copy(St.boundingSphere.center)),ne.applyMatrix4(w.matrixWorld).applyMatrix4(Jt)),Array.isArray(Vt)){let Wt=St.groups;for(let ae=0,de=Wt.length;ae<de;ae++){let Xt=Wt[ae],Pe=Vt[Xt.materialIndex];Pe&&Pe.visible&&m.push(w,St,Pe,V,ne.z,Xt)}}else Vt.visible&&m.push(w,St,Vt,V,ne.z,null)}}let ft=w.children;for(let St=0,Vt=ft.length;St<Vt;St++)qu(ft[St],z,V,W)}function w0(w,z,V,W){let F=w.opaque,ft=w.transmissive,St=w.transparent;p.setupLightsView(V),ut===!0&&lt.setGlobalState(y.clippingPlanes,V),W&&pt.viewport(D.copy(W)),F.length>0&&Ec(F,z,V),ft.length>0&&Ec(ft,z,V),St.length>0&&Ec(St,z,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function T0(w,z,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new zn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?bi:Hs,minFilter:fo,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let ft=p.state.transmissionRenderTarget[W.id],St=W.viewport||D;ft.setSize(St.z,St.w);let Vt=y.getRenderTarget();y.setRenderTarget(ft),y.getClearColor(G),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),it&&ee.render(V);let Wt=y.toneMapping;y.toneMapping=dr;let ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ut===!0&&lt.setGlobalState(y.clippingPlanes,W),Ec(w,V,W),C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft),at.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Xt=0,Pe=z.length;Xt<Pe;Xt++){let Je=z[Xt],en=Je.object,ci=Je.geometry,ze=Je.material,Zt=Je.group;if(ze.side===fn&&en.layers.test(W.layers)){let Cs=ze.side;ze.side=Un,ze.needsUpdate=!0,A0(en,V,W,ci,ze,Zt),ze.side=Cs,ze.needsUpdate=!0,de=!0}}de===!0&&(C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft))}y.setRenderTarget(Vt),y.setClearColor(G,Y),ae!==void 0&&(W.viewport=ae),y.toneMapping=Wt}function Ec(w,z,V){let W=z.isScene===!0?z.overrideMaterial:null;for(let F=0,ft=w.length;F<ft;F++){let St=w[F],Vt=St.object,Wt=St.geometry,ae=W===null?St.material:W,de=St.group;Vt.layers.test(V.layers)&&A0(Vt,z,V,Wt,ae,de)}}function A0(w,z,V,W,F,ft){w.onBeforeRender(y,z,V,W,F,ft),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(y,z,V,W,w,ft),F.transparent===!0&&F.side===fn&&F.forceSinglePass===!1?(F.side=Un,F.needsUpdate=!0,y.renderBufferDirect(V,z,W,F,w,ft),F.side=pr,F.needsUpdate=!0,y.renderBufferDirect(V,z,W,F,w,ft),F.side=fn):y.renderBufferDirect(V,z,W,F,w,ft),w.onAfterRender(y,z,V,W,F,ft)}function Sc(w,z,V){z.isScene!==!0&&(z=Ie);let W=Pt.get(w),F=p.state.lights,ft=p.state.shadowsArray,St=F.state.version,Vt=kt.getParameters(w,F.state,ft,z,V),Wt=kt.getProgramCacheKey(Vt),ae=W.programs;W.environment=w.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(w.isMeshStandardMaterial?k:E).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ae===void 0&&(w.addEventListener("dispose",fe),ae=new Map,W.programs=ae);let de=ae.get(Wt);if(de!==void 0){if(W.currentProgram===de&&W.lightsStateVersion===St)return C0(w,Vt),de}else Vt.uniforms=kt.getUniforms(w),w.onBeforeCompile(Vt,y),de=kt.acquireProgram(Vt,Wt),ae.set(Wt,de),W.uniforms=Vt.uniforms;let Xt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=lt.uniform),C0(w,Vt),W.needsLights=ly(w),W.lightsStateVersion=St,W.needsLights&&(Xt.ambientLightColor.value=F.state.ambient,Xt.lightProbe.value=F.state.probe,Xt.directionalLights.value=F.state.directional,Xt.directionalLightShadows.value=F.state.directionalShadow,Xt.spotLights.value=F.state.spot,Xt.spotLightShadows.value=F.state.spotShadow,Xt.rectAreaLights.value=F.state.rectArea,Xt.ltc_1.value=F.state.rectAreaLTC1,Xt.ltc_2.value=F.state.rectAreaLTC2,Xt.pointLights.value=F.state.point,Xt.pointLightShadows.value=F.state.pointShadow,Xt.hemisphereLights.value=F.state.hemi,Xt.directionalShadowMap.value=F.state.directionalShadowMap,Xt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Xt.spotShadowMap.value=F.state.spotShadowMap,Xt.spotLightMatrix.value=F.state.spotLightMatrix,Xt.spotLightMap.value=F.state.spotLightMap,Xt.pointShadowMap.value=F.state.pointShadowMap,Xt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=de,W.uniformsList=null,de}function R0(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=pa.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function C0(w,z){let V=Pt.get(w);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function oy(w,z,V,W,F){z.isScene!==!0&&(z=Ie),C.resetTextureUnits();let ft=z.fog,St=W.isMeshStandardMaterial?z.environment:null,Vt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ra,Wt=(W.isMeshStandardMaterial?k:E).get(W.envMap||St),ae=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,de=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xt=!!V.morphAttributes.position,Pe=!!V.morphAttributes.normal,Je=!!V.morphAttributes.color,en=dr;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(en=y.toneMapping);let ci=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ze=ci!==void 0?ci.length:0,Zt=Pt.get(W),Cs=p.state.lights;if(ut===!0&&(Ht===!0||w!==M)){let Ii=w===M&&W.id===b;lt.setState(W,w,Ii)}let Fe=!1;W.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Cs.state.version||Zt.outputColorSpace!==Vt||F.isBatchedMesh&&Zt.batching===!1||!F.isBatchedMesh&&Zt.batching===!0||F.isBatchedMesh&&Zt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Zt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Zt.instancing===!1||!F.isInstancedMesh&&Zt.instancing===!0||F.isSkinnedMesh&&Zt.skinning===!1||!F.isSkinnedMesh&&Zt.skinning===!0||F.isInstancedMesh&&Zt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Zt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Zt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Zt.instancingMorph===!1&&F.morphTexture!==null||Zt.envMap!==Wt||W.fog===!0&&Zt.fog!==ft||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==lt.numPlanes||Zt.numIntersection!==lt.numIntersection)||Zt.vertexAlphas!==ae||Zt.vertexTangents!==de||Zt.morphTargets!==Xt||Zt.morphNormals!==Pe||Zt.morphColors!==Je||Zt.toneMapping!==en||Zt.morphTargetsCount!==ze)&&(Fe=!0):(Fe=!0,Zt.__version=W.version);let Gi=Zt.currentProgram;Fe===!0&&(Gi=Sc(W,z,F));let Wo=!1,yi=!1,rl=!1,nn=Gi.getUniforms(),ls=Zt.uniforms;if(pt.useProgram(Gi.program)&&(Wo=!0,yi=!0,rl=!0),W.id!==b&&(b=W.id,yi=!0),Wo||M!==w){pt.buffers.depth.getReversed()?(dt.copy(w.projectionMatrix),lv(dt),cv(dt),nn.setValue(L,"projectionMatrix",dt)):nn.setValue(L,"projectionMatrix",w.projectionMatrix),nn.setValue(L,"viewMatrix",w.matrixWorldInverse);let ir=nn.map.cameraPosition;ir!==void 0&&ir.setValue(L,oe.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&nn.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&nn.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,yi=!0,rl=!0)}if(F.isSkinnedMesh){nn.setOptional(L,F,"bindMatrix"),nn.setOptional(L,F,"bindMatrixInverse");let Ii=F.skeleton;Ii&&(Ii.boneTexture===null&&Ii.computeBoneTexture(),nn.setValue(L,"boneTexture",Ii.boneTexture,C))}F.isBatchedMesh&&(nn.setOptional(L,F,"batchingTexture"),nn.setValue(L,"batchingTexture",F._matricesTexture,C),nn.setOptional(L,F,"batchingIdTexture"),nn.setValue(L,"batchingIdTexture",F._indirectTexture,C),nn.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&nn.setValue(L,"batchingColorTexture",F._colorsTexture,C));let ol=V.morphAttributes;if((ol.position!==void 0||ol.normal!==void 0||ol.color!==void 0)&&ie.update(F,V,Gi),(yi||Zt.receiveShadow!==F.receiveShadow)&&(Zt.receiveShadow=F.receiveShadow,nn.setValue(L,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ls.envMap.value=Wt,ls.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(ls.envMapIntensity.value=z.environmentIntensity),yi&&(nn.setValue(L,"toneMappingExposure",y.toneMappingExposure),Zt.needsLights&&ay(ls,rl),ft&&W.fog===!0&&_t.refreshFogUniforms(ls,ft),_t.refreshMaterialUniforms(ls,W,Z,ot,p.state.transmissionRenderTarget[w.id]),pa.upload(L,R0(Zt),ls,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pa.upload(L,R0(Zt),ls,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&nn.setValue(L,"center",F.center),nn.setValue(L,"modelViewMatrix",F.modelViewMatrix),nn.setValue(L,"normalMatrix",F.normalMatrix),nn.setValue(L,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ii=W.uniformsGroups;for(let ir=0,sr=Ii.length;ir<sr;ir++){let I0=Ii[ir];N.update(I0,Gi),N.bind(I0,Gi)}}return Gi}function ay(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ly(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,z,V){Pt.get(w.texture).__webglTexture=z,Pt.get(w.depthTexture).__webglTexture=V;let W=Pt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){let V=Pt.get(w);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,V=0){I=w,T=z,S=V;let W=!0,F=null,ft=!1,St=!1;if(w){let Wt=Pt.get(w);if(Wt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Wt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Wt.__hasExternalTextures)C.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Xt=w.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&Pt.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let ae=w.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(St=!0);let de=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(de[z])?F=de[z][V]:F=de[z],ft=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(de)?F=de[V]:F=de,D.copy(w.viewport),H.copy(w.scissor),O=w.scissorTest}else D.copy(Ft).multiplyScalar(Z).floor(),H.copy(ue).multiplyScalar(Z).floor(),O=Ne;if(pt.bindFramebuffer(L.FRAMEBUFFER,F)&&W&&pt.drawBuffers(w,F),pt.viewport(D),pt.scissor(H),pt.setScissorTest(O),ft){let Wt=Pt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Wt.__webglTexture,V)}else if(St){let Wt=Pt.get(w.texture),ae=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Wt.__webglTexture,V||0,ae)}b=-1},this.readRenderTargetPixels=function(w,z,V,W,F,ft,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Vt=Vt[St]),Vt){pt.bindFramebuffer(L.FRAMEBUFFER,Vt);try{let Wt=w.texture,ae=Wt.format,de=Wt.type;if(!Ut.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-W&&V>=0&&V<=w.height-F&&L.readPixels(z,V,W,F,ge.convert(ae),ge.convert(de),ft)}finally{let Wt=I!==null?Pt.get(I).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,z,V,W,F,ft,St){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Vt=Vt[St]),Vt){let Wt=w.texture,ae=Wt.format,de=Wt.type;if(!Ut.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-W&&V>=0&&V<=w.height-F){pt.bindFramebuffer(L.FRAMEBUFFER,Vt);let Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(z,V,W,F,ge.convert(ae),ge.convert(de),0);let Pe=I!==null?Pt.get(I).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,Pe);let Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await av(L,Je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(Xt),L.deleteSync(Je),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,V=0){w.isTexture!==!0&&(xl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-V),F=Math.floor(w.image.width*W),ft=Math.floor(w.image.height*W),St=z!==null?z.x:0,Vt=z!==null?z.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,St,Vt,F,ft),pt.unbindTexture()},this.copyTextureToTexture=function(w,z,V=null,W=null,F=0){w.isTexture!==!0&&(xl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],z=arguments[2],F=arguments[3]||0,V=null);let ft,St,Vt,Wt,ae,de,Xt,Pe,Je,en=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(ft=V.max.x-V.min.x,St=V.max.y-V.min.y,Vt=V.isBox3?V.max.z-V.min.z:1,Wt=V.min.x,ae=V.min.y,de=V.isBox3?V.min.z:0):(ft=en.width,St=en.height,Vt=en.depth||1,Wt=0,ae=0,de=0),W!==null?(Xt=W.x,Pe=W.y,Je=W.z):(Xt=0,Pe=0,Je=0);let ci=ge.convert(z.format),ze=ge.convert(z.type),Zt;z.isData3DTexture?(C.setTexture3D(z,0),Zt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),Zt=L.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),Zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let Cs=L.getParameter(L.UNPACK_ROW_LENGTH),Fe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gi=L.getParameter(L.UNPACK_SKIP_PIXELS),Wo=L.getParameter(L.UNPACK_SKIP_ROWS),yi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,en.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,en.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,de);let rl=w.isDataArrayTexture||w.isData3DTexture,nn=z.isDataArrayTexture||z.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ls=Pt.get(w),ol=Pt.get(z),Ii=Pt.get(ls.__renderTarget),ir=Pt.get(ol.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,Ii.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let sr=0;sr<Vt;sr++)rl&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(w).__webglTexture,F,de+sr),w.isDepthTexture?(nn&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(z).__webglTexture,F,Je+sr),L.blitFramebuffer(Wt,ae,ft,St,Xt,Pe,ft,St,L.DEPTH_BUFFER_BIT,L.NEAREST)):nn?L.copyTexSubImage3D(Zt,F,Xt,Pe,Je+sr,Wt,ae,ft,St):L.copyTexSubImage2D(Zt,F,Xt,Pe,Je+sr,Wt,ae,ft,St);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Zt,F,Xt,Pe,Je,ft,St,Vt,ci,ze,en.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Zt,F,Xt,Pe,Je,ft,St,Vt,ci,en.data):L.texSubImage3D(Zt,F,Xt,Pe,Je,ft,St,Vt,ci,ze,en):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Xt,Pe,ft,St,ci,ze,en.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Xt,Pe,en.width,en.height,ci,en.data):L.texSubImage2D(L.TEXTURE_2D,F,Xt,Pe,ft,St,ci,ze,en);L.pixelStorei(L.UNPACK_ROW_LENGTH,Cs),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wo),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yi),F===0&&z.generateMipmaps&&L.generateMipmap(Zt),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,z,V=null,W=null,F=0){return w.isTexture!==!0&&(xl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],z=arguments[3],F=arguments[4]||0),xl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,V,W,F)},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){T=0,S=0,I=null,pt.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Mh=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bh=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Eh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dd,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ps()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ps()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ii=new R,Rl=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ba=class extends Gs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ra,ul=new R,oa=new R,aa=new R,la=new tt,fl=new tt,dg=new Ce,qc=new R,dl=new R,Yc=new R,Im=new tt,bf=new tt,Pm=new tt,Cl=class extends Bn{constructor(t=new ba){if(super(),this.isSprite=!0,this.type="Sprite",ra===void 0){ra=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Eh(e,5);ra.setIndex([0,1,2,0,2,3]),ra.setAttribute("position",new Rl(i,3,0,!1)),ra.setAttribute("uv",new Rl(i,2,3,!1))}this.geometry=ra,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oa.setFromMatrixScale(this.matrixWorld),dg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),aa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oa.multiplyScalar(-aa.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Zc(qc.set(-.5,-.5,0),aa,o,oa,s,r),Zc(dl.set(.5,-.5,0),aa,o,oa,s,r),Zc(Yc.set(.5,.5,0),aa,o,oa,s,r),Im.set(0,0),bf.set(1,0),Pm.set(1,1);let a=t.ray.intersectTriangle(qc,dl,Yc,!1,ul);if(a===null&&(Zc(dl.set(-.5,.5,0),aa,o,oa,s,r),bf.set(0,1),a=t.ray.intersectTriangle(qc,Yc,dl,!1,ul),a===null))return;let l=t.ray.origin.distanceTo(ul);l<t.near||l>t.far||e.push({distance:l,point:ul.clone(),uv:fr.getInterpolation(ul,qc,dl,Yc,Im,bf,Pm,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Zc(n,t,e,i,s,r){la.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(fl.x=r*la.x-s*la.y,fl.y=s*la.x+r*la.y):fl.copy(la),n.copy(t),n.x+=fl.x,n.y+=fl.y,n.applyMatrix4(dg)}var Il=class extends hi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Qn,h=Qn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends Le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ca=new Ce,Lm=new Ce,$c=[],Dm=new ks,nE=new Ce,pl=new qt,ml=new gr,Vs=class extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ca),Dm.copy(t.boundingBox).applyMatrix4(ca),this.boundingBox.union(Dm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ca),ml.copy(t.boundingSphere).applyMatrix4(ca),this.boundingSphere.union(ml)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(pl.geometry=this.geometry,pl.material=this.material,pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),t.ray.intersectsSphere(ml)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ca),Lm.multiplyMatrices(i,ca),pl.matrixWorld=Lm,pl.raycast(t,$c);for(let o=0,a=$c.length;o<a;o++){let l=$c[o];l.instanceId=r,l.object=this,e.push(l)}$c.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Il(new Float32Array(s*this.count),s,this.count,Gl,fs));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ll=class extends Gs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Um=new Ce,Id=new fh,Jc=new gr,Kc=new R,Ea=class extends Bn{constructor(t=new Ze,e=new Ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jc.copy(i.boundingSphere),Jc.applyMatrix4(s),Jc.radius+=r,t.ray.intersectsSphere(Jc)===!1)return;Um.copy(s).invert(),Id.copy(t.ray).applyMatrix4(Um);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Kc.fromBufferAttribute(u,m),Nm(Kc,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Kc.fromBufferAttribute(u,g),Nm(Kc,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nm(n,t,e,i,s,r,o){let a=Id.distanceSqToPoint(n);if(a<e){let l=new R;Id.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class extends hi{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,s=[],r=[],o=[],a=new R,l=new Ce;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Dn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Dn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Dl=class extends Li{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pd=class extends Dl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fp(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Qc=new R,Ef=new fp,Sf=new fp,wf=new fp,Ld=class extends Li{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qc.subVectors(s[0],s[1]).add(s[0]),c=Qc);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ef.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Sf.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),wf.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ef.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Sf.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wf.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ef.calc(l),Sf.calc(l),wf.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zm(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function iE(n,t){let e=1-n;return e*e*t}function sE(n,t){return 2*(1-n)*n*t}function rE(n,t){return n*n*t}function bl(n,t,e,i){return iE(n,t)+sE(n,e)+rE(n,i)}function oE(n,t){let e=1-n;return e*e*e*t}function aE(n,t){let e=1-n;return 3*e*e*n*t}function lE(n,t){return 3*(1-n)*n*n*t}function cE(n,t){return n*n*n*t}function El(n,t,e,i,s){return oE(n,t)+aE(n,e)+lE(n,i)+cE(n,s)}var Sh=class extends Li{constructor(t=new tt,e=new tt,i=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(El(t,s.x,r.x,o.x,a.x),El(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dd=class extends Li{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(El(t,s.x,r.x,o.x,a.x),El(t,s.y,r.y,o.y,a.y),El(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wh=class extends Li{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ud=class extends Li{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Th=class extends Li{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(bl(t,s.x,r.x,o.x),bl(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nd=class extends Li{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(bl(t,s.x,r.x,o.x),bl(t,s.y,r.y,o.y),bl(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ah=class extends Li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(zm(a,l.x,c.x,h.x,u.x),zm(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},zd=Object.freeze({__proto__:null,ArcCurve:Pd,CatmullRomCurve3:Ld,CubicBezierCurve:Sh,CubicBezierCurve3:Dd,EllipseCurve:Dl,LineCurve:wh,LineCurve3:Ud,QuadraticBezierCurve:Th,QuadraticBezierCurve3:Nd,SplineCurve:Ah}),Fd=class extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zd[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new zd[s.type]().fromJSON(s))}return this}},Rh=class extends Fd{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wh(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Th(this.currentPoint.clone(),new tt(t,e),new tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Sh(this.currentPoint.clone(),new tt(t,e),new tt(i,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ah(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Dl(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ch=class n extends Ze{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Dn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,f=new tt,d=new R,g=new R,x=new R,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){let _=i+v*h*s,y=Math.sin(_),P=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*P,o.push(u.x,u.y,u.z),f.x=v/e,f.y=T/(t.length-1),a.push(f.x,f.y);let S=l[3*T+0]*y,I=l[3*T+1],b=l[3*T+0]*P;c.push(S,I,b)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,P=y,T=y+t.length,S=y+t.length+1,I=y+1;r.push(P,T,I),r.push(S,I,T)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var xr=class n extends Ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ae=class n extends Ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function v(){let y=new R,P=new R,T=0,S=(e-t)/i;for(let I=0;I<=r;I++){let b=[],M=I/r,D=M*(e-t)+t;for(let H=0;H<=s;H++){let O=H/s,G=O*l+a,Y=Math.sin(G),q=Math.cos(G);P.x=D*Y,P.y=-M*i+m,P.z=D*q,u.push(P.x,P.y,P.z),y.set(Y,S,q).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-M),b.push(g++)}x.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let M=x[b][I],D=x[b+1][I],H=x[b+1][I+1],O=x[b][I+1];(t>0||b!==0)&&(h.push(M,D,O),T+=3),(e>0||b!==r-1)&&(h.push(D,H,O),T+=3)}c.addGroup(p,T,0),p+=T}function _(y){let P=g,T=new tt,S=new R,I=0,b=y===!0?t:e,M=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let D=g;for(let H=0;H<=s;H++){let G=H/s*l+a,Y=Math.cos(G),q=Math.sin(G);S.x=b*q,S.y=m*M,S.z=b*Y,u.push(S.x,S.y,S.z),f.push(0,M,0),T.x=Y*.5+.5,T.y=q*.5*M+.5,d.push(T.x,T.y),g++}for(let H=0;H<s;H++){let O=P+H,G=D+H;y===!0?h.push(G,G+1,O):h.push(G+1,G,O),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xe=class n extends Ae{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ul=class n extends Ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new R,y=new R,P=new R;for(let T=0;T<e.length;T+=3)d(e[T+0],_),d(e[T+1],y),d(e[T+2],P),l(_,y,P,v)}function l(v,_,y,P){let T=P+1,S=[];for(let I=0;I<=T;I++){S[I]=[];let b=v.clone().lerp(y,I/T),M=_.clone().lerp(y,I/T),D=T-I;for(let H=0;H<=D;H++)H===0&&I===T?S[I][H]=b:S[I][H]=b.clone().lerp(M,H/D)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){let M=Math.floor(b/2);b%2===0?(f(S[I][M+1]),f(S[I+1][M]),f(S[I][M])):(f(S[I][M+1]),f(S[I+1][M+1]),f(S[I+1][M]))}}function c(v){let _=new R;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new R;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],P=o[v+4],T=Math.max(_,y,P),S=Math.min(_,y,P);T>.9&&S<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let v=new R,_=new R,y=new R,P=new R,T=new tt,S=new tt,I=new tt;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),S.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),P.copy(v).add(_).add(y).divideScalar(3);let D=m(P);x(T,M+0,v,D),x(S,M+2,_,D),x(I,M+4,y,D)}}function x(v,_,y,P){P<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},Ih=class n extends Ul{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Nl=class extends Rh{constructor(t){super(t),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Rh().fromJSON(s))}return this}},hE={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=pg(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=mE(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return zl(r,o,e,a,l,d,0),o}};function pg(n,t,e,i,s){let r,o;if(s===TE(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Fm(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Fm(r,n[r],n[r+1],o);return o&&Hh(o,o.next)&&(Bl(o),o=o.next),o}function go(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Hh(e,e.next)||ln(e.prev,e,e.next)===0)){if(Bl(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zl(n,t,e,i,s,r,o){if(!n)return;!o&&r&&_E(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?fE(n,i,s,r):uE(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Bl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=dE(go(n),t,e),zl(n,t,e,i,s,r,2)):o===2&&pE(n,t,e,i,s,r):zl(go(n),t,e,i,s,r,1);break}}}function uE(n){let t=n.prev,e=n,i=n.next;if(ln(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ua(s,a,r,l,o,c,g.x,g.y)&&ln(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fE(n,t,e,i){let s=n.prev,r=n,o=n.next;if(ln(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Bd(d,g,t,e,i),v=Bd(x,m,t,e,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ua(a,h,l,u,c,f,_.x,_.y)&&ln(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ua(a,h,l,u,c,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ua(a,h,l,u,c,f,_.x,_.y)&&ln(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ua(a,h,l,u,c,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dE(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Hh(s,r)&&mg(s,i,i.next,r)&&Fl(s,r)&&Fl(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Bl(i),Bl(i.next),i=n=r),i=i.next}while(i!==n);return go(i)}function pE(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&EE(o,a)){let l=gg(o,a);o=go(o,o.next),l=go(l,l.next),zl(o,t,e,i,s,r,0),zl(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function mE(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=pg(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(bE(c));for(s.sort(gE),r=0;r<s.length;r++)e=xE(s[r],e);return e}function gE(n,t){return n.x-t.x}function xE(n,t){let e=yE(n,t);if(!e)return t;let i=gg(e,n);return go(i,i.next),go(e,e.next)}function yE(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ua(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Fl(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&vE(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function vE(n,t){return ln(n.prev,n,t.prev)<0&&ln(t.next,n,n.next)<0}function _E(n,t,e,i){let s=n;do s.z===0&&(s.z=Bd(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ME(s)}function ME(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Bd(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bE(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ua(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function EE(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!SE(n,t)&&(Fl(n,t)&&Fl(t,n)&&wE(n,t)&&(ln(n.prev,n,t.prev)||ln(n,t.prev,t))||Hh(n,t)&&ln(n.prev,n,n.next)>0&&ln(t.prev,t,t.next)>0)}function ln(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Hh(n,t){return n.x===t.x&&n.y===t.y}function mg(n,t,e,i){let s=th(ln(n,t,e)),r=th(ln(n,t,i)),o=th(ln(e,i,n)),a=th(ln(e,i,t));return!!(s!==r&&o!==a||s===0&&jc(n,e,t)||r===0&&jc(n,i,t)||o===0&&jc(e,n,i)||a===0&&jc(e,t,i))}function jc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function th(n){return n>0?1:n<0?-1:0}function SE(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&mg(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Fl(n,t){return ln(n.prev,n,n.next)<0?ln(n,t,n.next)>=0&&ln(n,n.prev,t)>=0:ln(n,t,n.prev)<0||ln(n,n.next,t)<0}function wE(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function gg(n,t){let e=new Od(n.i,n.x,n.y),i=new Od(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fm(n,t,e,i){let s=new Od(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Bl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Od(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TE(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Sl=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Bm(t),Om(i,t);let o=t.length;e.forEach(Bm);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Om(i,e[l]);let a=hE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Bm(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Om(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ph=class n extends Ze{constructor(t=new Nl([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:AE,_,y=!1,P,T,S,I;p&&(_=p.getSpacedPoints(h),y=!0,f=!1,P=p.computeFrenetFrames(h,!1),T=new R,S=new R,I=new R),f||(m=0,d=0,g=0,x=0);let b=a.extractPoints(c),M=b.shape,D=b.holes;if(!Sl.isClockWise(M)){M=M.reverse();for(let it=0,ht=D.length;it<ht;it++){let L=D[it];Sl.isClockWise(L)&&(D[it]=L.reverse())}}let O=Sl.triangulateShape(M,D),G=M;for(let it=0,ht=D.length;it<ht;it++){let L=D[it];M=M.concat(L)}function Y(it,ht,L){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ht,L)}let q=M.length,ot=O.length;function Z(it,ht,L){let Yt,at,Ut,pt=it.x-ht.x,te=it.y-ht.y,Pt=L.x-it.x,C=L.y-it.y,E=pt*pt+te*te,k=pt*C-te*Pt;if(Math.abs(k)>Number.EPSILON){let J=Math.sqrt(E),st=Math.sqrt(Pt*Pt+C*C),K=ht.x-te/J,kt=ht.y+pt/J,_t=L.x-C/st,Lt=L.y+Pt/st,Ee=((_t-K)*C-(Lt-kt)*Pt)/(pt*C-te*Pt);Yt=K+pt*Ee-it.x,at=kt+te*Ee-it.y;let lt=Yt*Yt+at*at;if(lt<=2)return new tt(Yt,at);Ut=Math.sqrt(lt/2)}else{let J=!1;pt>Number.EPSILON?Pt>Number.EPSILON&&(J=!0):pt<-Number.EPSILON?Pt<-Number.EPSILON&&(J=!0):Math.sign(te)===Math.sign(C)&&(J=!0),J?(Yt=-te,at=pt,Ut=Math.sqrt(E)):(Yt=pt,at=te,Ut=Math.sqrt(E/2))}return new tt(Yt/Ut,at/Ut)}let yt=[];for(let it=0,ht=G.length,L=ht-1,Yt=it+1;it<ht;it++,L++,Yt++)L===ht&&(L=0),Yt===ht&&(Yt=0),yt[it]=Z(G[it],G[L],G[Yt]);let Rt=[],Ft,ue=yt.concat();for(let it=0,ht=D.length;it<ht;it++){let L=D[it];Ft=[];for(let Yt=0,at=L.length,Ut=at-1,pt=Yt+1;Yt<at;Yt++,Ut++,pt++)Ut===at&&(Ut=0),pt===at&&(pt=0),Ft[Yt]=Z(L[Yt],L[Ut],L[pt]);Rt.push(Ft),ue=ue.concat(Ft)}for(let it=0;it<m;it++){let ht=it/m,L=d*Math.cos(ht*Math.PI/2),Yt=g*Math.sin(ht*Math.PI/2)+x;for(let at=0,Ut=G.length;at<Ut;at++){let pt=Y(G[at],yt[at],Yt);dt(pt.x,pt.y,-L)}for(let at=0,Ut=D.length;at<Ut;at++){let pt=D[at];Ft=Rt[at];for(let te=0,Pt=pt.length;te<Pt;te++){let C=Y(pt[te],Ft[te],Yt);dt(C.x,C.y,-L)}}}let Ne=g+x;for(let it=0;it<q;it++){let ht=f?Y(M[it],ue[it],Ne):M[it];y?(S.copy(P.normals[0]).multiplyScalar(ht.x),T.copy(P.binormals[0]).multiplyScalar(ht.y),I.copy(_[0]).add(S).add(T),dt(I.x,I.y,I.z)):dt(ht.x,ht.y,0)}for(let it=1;it<=h;it++)for(let ht=0;ht<q;ht++){let L=f?Y(M[ht],ue[ht],Ne):M[ht];y?(S.copy(P.normals[it]).multiplyScalar(L.x),T.copy(P.binormals[it]).multiplyScalar(L.y),I.copy(_[it]).add(S).add(T),dt(I.x,I.y,I.z)):dt(L.x,L.y,u/h*it)}for(let it=m-1;it>=0;it--){let ht=it/m,L=d*Math.cos(ht*Math.PI/2),Yt=g*Math.sin(ht*Math.PI/2)+x;for(let at=0,Ut=G.length;at<Ut;at++){let pt=Y(G[at],yt[at],Yt);dt(pt.x,pt.y,u+L)}for(let at=0,Ut=D.length;at<Ut;at++){let pt=D[at];Ft=Rt[at];for(let te=0,Pt=pt.length;te<Pt;te++){let C=Y(pt[te],Ft[te],Yt);y?dt(C.x,C.y+_[h-1].y,_[h-1].x+L):dt(C.x,C.y,u+L)}}}j(),ut();function j(){let it=s.length/3;if(f){let ht=0,L=q*ht;for(let Yt=0;Yt<ot;Yt++){let at=O[Yt];Jt(at[2]+L,at[1]+L,at[0]+L)}ht=h+m*2,L=q*ht;for(let Yt=0;Yt<ot;Yt++){let at=O[Yt];Jt(at[0]+L,at[1]+L,at[2]+L)}}else{for(let ht=0;ht<ot;ht++){let L=O[ht];Jt(L[2],L[1],L[0])}for(let ht=0;ht<ot;ht++){let L=O[ht];Jt(L[0]+q*h,L[1]+q*h,L[2]+q*h)}}i.addGroup(it,s.length/3-it,0)}function ut(){let it=s.length/3,ht=0;Ht(G,ht),ht+=G.length;for(let L=0,Yt=D.length;L<Yt;L++){let at=D[L];Ht(at,ht),ht+=at.length}i.addGroup(it,s.length/3-it,1)}function Ht(it,ht){let L=it.length;for(;--L>=0;){let Yt=L,at=L-1;at<0&&(at=it.length-1);for(let Ut=0,pt=h+m*2;Ut<pt;Ut++){let te=q*Ut,Pt=q*(Ut+1),C=ht+Yt+te,E=ht+at+te,k=ht+at+Pt,J=ht+Yt+Pt;oe(C,E,k,J)}}}function dt(it,ht,L){l.push(it),l.push(ht),l.push(L)}function Jt(it,ht,L){ne(it),ne(ht),ne(L);let Yt=s.length/3,at=v.generateTopUV(i,s,Yt-3,Yt-2,Yt-1);Ie(at[0]),Ie(at[1]),Ie(at[2])}function oe(it,ht,L,Yt){ne(it),ne(ht),ne(Yt),ne(ht),ne(L),ne(Yt);let at=s.length/3,Ut=v.generateSideWallUV(i,s,at-6,at-3,at-2,at-1);Ie(Ut[0]),Ie(Ut[1]),Ie(Ut[3]),Ie(Ut[1]),Ie(Ut[2]),Ie(Ut[3])}function ne(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function Ie(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return RE(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zd[s.type]().fromJSON(s)),new n(i,t.options)}},AE={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(f,1-g),new tt(x,1-p)]:[new tt(a,1-l),new tt(h,1-u),new tt(d,1-g),new tt(m,1-p)]}};function RE(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ms=class n extends Ul{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},xo=class n extends Ul{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},wa=class n extends Ze{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new R,g=new tt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let v=p+m,_=v,y=v+i+1,P=v+i+2,T=v+1;a.push(_,y,T),a.push(y,P,T)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pn=class n extends Ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){let T=P/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let _=h[p][v+1],y=h[p][v],P=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&d.push(_,y,T),(p!==i-1||l<Math.PI)&&d.push(y,P,T)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zi=class n extends Ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Lh=class extends Qe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Ol=class extends Gs{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ng,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function eh(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function CE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ta=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hd=class extends Ta{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:U0,endingEnd:U0}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case N0:r=t,a=2*e-i;break;case z0:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case N0:o=t,l=2*i-e;break;case z0:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[c+P]+_*o[l+P]+y*o[u+P];return r}},kd=class extends Ta{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Gd=class extends Ta{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$i=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eh(e,this.TimeBufferType),this.values=eh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:eh(t.times,Array),values:eh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ah:e=this.InterpolantFactoryMethodDiscrete;break;case fd:e=this.InterpolantFactoryMethodLinear;break;case Zu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ah;case this.InterpolantFactoryMethodLinear:return fd;case this.InterpolantFactoryMethodSmooth:return Zu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&CE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zu,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$i.prototype.TimeBufferType=Float32Array;$i.prototype.ValueBufferType=Float32Array;$i.prototype.DefaultInterpolation=fd;var yo=class extends $i{constructor(t,e,i){super(t,e,i)}};yo.prototype.ValueTypeName="bool";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=ah;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vd=class extends $i{};Vd.prototype.ValueTypeName="color";var Wd=class extends $i{};Wd.prototype.ValueTypeName="number";var Xd=class extends Ta{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Dh=class extends $i{InterpolantFactoryMethodLinear(t){return new Xd(this.times,this.values,this.getValueSize(),t)}};Dh.prototype.ValueTypeName="quaternion";Dh.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends $i{constructor(t,e,i){super(t,e,i)}};vo.prototype.ValueTypeName="string";vo.prototype.ValueBufferType=Array;vo.prototype.DefaultInterpolation=ah;vo.prototype.InterpolantFactoryMethodLinear=void 0;vo.prototype.InterpolantFactoryMethodSmooth=void 0;var qd=class extends $i{};qd.prototype.ValueTypeName="vector";var Yd=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},IE=new Yd,Zd=class{constructor(t){this.manager=t!==void 0?t:IE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hl=class extends Bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uh=class extends Hl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tf=new Ce,Hm=new R,km=new R,Nh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Hm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hm),km.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(km),e.updateMatrixWorld(),Tf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Gm=new Ce,gl=new R,Af=new R,$d=class extends Nh{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),gl.setFromMatrixPosition(t.matrixWorld),i.position.copy(gl),Af.copy(i.position),Af.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Af),i.updateMatrixWorld(),s.makeTranslation(-gl.x,-gl.y,-gl.z),Gm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}},_o=class extends Hl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $d}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jd=class extends Nh{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zh=class extends Hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new Jd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Aa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vm(){return performance.now()}var dp="\\[\\]\\.:\\/",PE=new RegExp("["+dp+"]","g"),pp="[^"+dp+"]",LE="[^"+dp.replace("\\.","")+"]",DE=/((?:WC+[\/:])*)/.source.replace("WC",pp),UE=/(WCOD+)?/.source.replace("WCOD",LE),NE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pp),zE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pp),FE=new RegExp("^"+DE+UE+NE+zE+"$"),BE=["material","materials","bones","map"],Kd=class{constructor(t,e,i){let s=i||rn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},rn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(PE,"")}static parseTrackName(t){let e=FE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);BE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Kd;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SA=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function ri(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var wA=ri(20954),mp=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Mo=class{constructor(t=1337){let e=ri(t);this.perm=new Uint8Array(512);let i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(t,e){let i=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=0,o=0,a=0,l=(t+e)*i,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*s,f=t-(c-u),d=e-(h-u),g=f>d?1:0,x=f>d?0:1,m=f-g+s,p=d-x+s,v=f-1+2*s,_=d-1+2*s,y=c&255,P=h&255,T=.5-f*f-d*d;if(T>=0){let b=mp[this.perm[y+this.perm[P]]%8];T*=T,r=T*T*(b[0]*f+b[1]*d)}let S=.5-m*m-p*p;if(S>=0){let b=mp[this.perm[y+g+this.perm[P+x]]%8];S*=S,o=S*S*(b[0]*m+b[1]*p)}let I=.5-v*v-_*_;if(I>=0){let b=mp[this.perm[y+1+this.perm[P+1]]%8];I*=I,a=I*I*(b[0]*v+b[1]*_)}return 70*(r+o+a)}fbm(t,e,i=4,s=2,r=.5){let o=.5,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise(t*a,e*a),c+=o,o*=r,a*=s;return l/c}},Ct=(n,t,e)=>Math.min(e,Math.max(t,n)),mt=(n,t,e)=>n+(t-n)*e,$t=(n,t,e)=>{let i=Ct((e-n)/(t-n),0,1);return i*i*(3-2*i)},gt=(n,t,e,i)=>mt(n,t,1-Math.exp(-e*i)),bo=(n,t)=>{let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},On=(n,t,e,i)=>n+bo(n,t)*(1-Math.exp(-e*i)),gp=null;function xg(){if(gp)return gp;let n=new Uint8Array([90,150,210,255]),t=new Il(n,4,1,Gl);return t.minFilter=Qn,t.magFilter=Qn,t.needsUpdate=!0,gp=t,t}function jt(n,t={}){return new Ol({color:n,gradientMap:xg(),...t})}function Oe(n,t=1.2,e={}){return new Ol({color:n,gradientMap:xg(),emissive:new ct(n),emissiveIntensity:t,...e})}function Ei(n,t){let e=document.createElement("canvas");e.width=e.height=n;let i=e.getContext("2d");t(i,n);let s=new Sa(e);return s.colorSpace=Ln,s}function Q(n,t,e=0,i=0,s=0,r=null){let o=new qt(n,t);return o.position.set(e,i,s),o.castShadow=!0,r&&r.add(o),o}var At={v1:new R,v2:new R,v3:new R,q1:new Fn,c1:new ct};var Yl={};cs(Yl,{init:()=>tS,update:()=>eS});function Di(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ze,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=yg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=yg(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function yg(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Le(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var gs=-4,xs={x:0,z:-650},fi={x:550,z:-450},Vh={x:-450,z:350},br={x:450,z:150},vr={x:-190,z:-60},Gh=24,vg=52;var OE=new Mo(9001),kh=new Mo(4242),HE=new Mo(777),_g=new Mo(3131),Wh=[{x:180,z:80,r:12,h:0},{x:-360,z:260,r:12,h:0},{x:430,z:40,r:12,h:0},{x:430,z:-300,r:12,h:0},{x:0,z:250,r:15,h:0}],Eg=!1;function Sg(n,t){let e=Math.max(Math.abs(n),Math.abs(t));if(e>1350)return-16;let i=3.5+OE.fbm(n*.0016,t*.0016,3)*7+kh.fbm(n*.0062,t*.0062,4)*2.4,s=n-br.x,r=t-br.z,o=Math.sqrt(s*s+r*r);if(o<250){let m=1-$t(110,245,o);i+=m*(kh.fbm(n*.01,t*.01,3)*5+2)}let a=n-fi.x,l=t-fi.z,c=Math.sqrt(a*a+l*l);if(c<260){let m=Math.max(0,1-c/235);if(m>0){let p=Math.pow(m,1.5)*96;p+=HE.fbm(n*.02,t*.02,3)*7*Math.min(1,m*2.4)*$t(16,42,c);let v=(1-$t(20,52,c))*56;i+=Math.max(0,p-v)}}let h=n-Vh.x,u=t-Vh.z,f=Math.sqrt(h*h+u*u);if(f<180){let m=1-$t(55,175,f),p=-10.5+kh.fbm(n*.011,t*.011,2)*1.6;i=mt(i,p,Math.pow(m,1.15))}let d=n-xs.x,g=t-xs.z,x=Math.sqrt(d*d+g*g);if(x<210){let m=1-$t(115,200,x),p=Gh+kh.fbm(n*.008,t*.008,3)*1.1;i=mt(i,p,m)}if(t<-320&&t>-610&&Math.abs(n)<70){let m=$t(-350,-530,t),p=1-$t(26,62,Math.abs(n)),v=mt(4.5,Gh,m);i=mt(i,v,p*$t(-322,-352,t))}{let m=1-$t(60,84,Math.abs(n)),p=$t(-500,-524,t)*(1-$t(-644,-672,t)),v=m*p;v>0&&(i=mt(i,Gh,v))}return e>950&&(i=mt(i,-16,$t(950,1180,e))),i}function _n(n,t){let e=Sg(n,t);if(Eg)for(let i=0;i<Wh.length;i++){let s=Wh[i],r=n-s.x,o=t-s.z,a=r*r+o*o,l=s.r+16;if(a<l*l){let c=1-$t(s.r,l,Math.sqrt(a));e=mt(e,s.h,c)}}return e}function kE(){for(let n of Wh)n.h=Sg(n.x,n.z);Eg=!0}function Mr(n,t){return Math.hypot(n-xs.x,t-xs.z)<205||Math.abs(n)<70&&t<-500&&t>-672?"castle":Math.hypot(n-fi.x,t-fi.z)<235?"volcano":Math.hypot(n-Vh.x,t-Vh.z)<178?"lake":Math.hypot(n-br.x,t-br.z)<215?"forest":Math.hypot(n-vr.x,t-vr.z)<95?"ruins":"plains"}function GE(n,t){let i=_n(n+1.6,t)-_n(n-1.6,t),s=_n(n,t+1.6)-_n(n,t-1.6);return Math.sqrt(i*i+s*s)/(2*1.6)}var Mg=[[[0,258],[7,180],[-10,100],[-6,20],[8,-90],[2,-210],[0,-330],[0,-470],[0,-572]],[[-4,62],[84,66],[172,78]],[[-2,242],[-120,254],[-244,264],[-350,261]],[[1,4],[142,16],[292,28],[420,38]],[[1,-302],[152,-308],[302,-303],[420,-300]]];function VE(n,t,e,i,s,r){let o=s-e,a=r-i,l=Ct(((n-e)*o+(t-i)*a)/(o*o+a*a),0,1),c=n-(e+o*l),h=t-(i+a*l);return Math.sqrt(c*c+h*h)}function wg(n,t){let e=1e9;for(let i=0;i<Mg.length;i++){let s=Mg[i];for(let r=0;r<s.length-1;r++){let o=VE(n,t,s[r][0],s[r][1],s[r+1][0],s[r+1][1]);o<e&&(e=o)}}return e}var Xh=new Ce,qh=new Fn,Yh=new Mi,Zh=new R,$h=new R;function ql(n){return n.computeVertexNormals(),n}function jn(n,t){let e=new ct(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Le(s,3)),n}function ce(n,t,e,i,s,r=0,o=0,a=0,l=1,c=1,h=1){let u=t.index?t.toNonIndexed():t.clone();return Yh.set(r,o,a),qh.setFromEuler(Yh),Zh.set(e,i,s),$h.set(l,c,h),Xh.compose(Zh,qh,$h),u.applyMatrix4(Xh),n.push(u),u}function Jh(n,t,e,i,s,r,o,a,l){Yh.set(0,r,0),qh.setFromEuler(Yh),Zh.set(e,i,s),$h.set(o,a,l),Xh.compose(Zh,qh,$h),n.setMatrixAt(t,Xh)}var ui={grassA:new ct(7319130),grassB:new ct(6265933),grassC:new ct(8370790),forest:new ct(4620102),forestDeep:new ct(3830341),rock:new ct(9078135),rockDark:new ct(7301726),volcano:new ct(7027246),scorch:new ct(4531740),sand:new ct(13218179),bed:new ct(9405544),road:new ct(13480575),plaza:new ct(10130045)};function WE(n){let s=new Nn(2e3,2e3,300,300);s.rotateX(-Math.PI/2);let r=s.attributes.position,o=r.count,a=new Float32Array(o);for(let x=0;x<o;x++){let m=_n(r.getX(x),r.getZ(x));a[x]=m,r.setY(x,m)}let l=2e3/300,c=x=>{let m=x%301,p=x/301|0,v=a[p*301+Math.max(0,m-1)],_=a[p*301+Math.min(300,m+1)],y=a[Math.max(0,p-1)*301+m],P=a[Math.min(300,p+1)*301+m],T=(_-v)/(2*l),S=(P-y)/(2*l);return Math.sqrt(T*T+S*S)},h=new Float32Array(o*3),u=new ct;for(let x=0;x<o;x++){let m=r.getX(x),p=r.getZ(x),v=a[x],_=c(x),y=_g.fbm(m*.02,p*.02,2),P=_g.noise(m*.11+50,p*.11-30);u.copy(ui.grassA),y>.12?u.lerp(ui.grassC,$t(.12,.6,y)):y<-.12&&u.lerp(ui.grassB,$t(-.12,-.6,y));let T=Math.hypot(m-br.x,p-br.z);if(T<250){let M=1-$t(120,240,T);u.lerp(P>0?ui.forest:ui.forestDeep,M*.85)}let S=Math.hypot(m-fi.x,p-fi.z);if(S<250){let M=1-$t(150,240,S);u.lerp(ui.volcano,M*.95),u.lerp(ui.scorch,M*$t(28,62,v)*.85),P>.25&&M>.5&&u.lerp(ui.rockDark,.35)}if(v<gs+2.4){let M=1-$t(gs+.2,gs+2.4,v);u.lerp(ui.sand,M),v<gs-.8&&u.lerp(ui.bed,$t(gs-.8,gs-5,v))}let I=$t(.5,.95,_);I>0&&u.lerp(S<240?ui.rockDark:ui.rock,I*.8);{let M=1-$t(58,80,Math.abs(m)),D=$t(-504,-524,p)*(1-$t(-640,-668,p)),H=M*D;H>0&&u.lerp(ui.plaza,H*(.75+P*.15))}if(v>gs+.3){let M=wg(m,p);if(M<5.2){let D=1-$t(2,4.8,M);u.lerp(ui.road,D*(.72+P*.1))}}let b=1+P*.045;h[x*3]=u.r*b,h[x*3+1]=u.g*b,h[x*3+2]=u.b*b}s.setAttribute("color",new Le(h,3));let f=s.toNonIndexed();f.computeVertexNormals(),s.dispose();let d=jt(16777215,{vertexColors:!0}),g=new qt(f,d);return g.receiveShadow=!0,g.name="terrain",n.scene.add(g),g}var Tg={value:0};function XE(n){let t=new Nn(4800,4800,120,120);t.rotateX(-Math.PI/2);let e=jt(4165552,{transparent:!0,opacity:.72});e.onBeforeCompile=r=>{r.uniforms.uTime=Tg,r.vertexShader=`uniform float uTime;
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
                       + sin((position.x + position.z) * 0.021 + uTime * 0.45) * 0.28;`)};let i=new qt(t,e);i.position.y=gs,i.name="water",n.scene.add(i);let s=new qt(new Nn(6e3,6e3,1,1),new Ke({color:1980996}));return s.rotation.x=-Math.PI/2,s.position.y=-15.5,n.scene.add(s),i}var Wl=null,wo=null,Xl=null;function qE(n){wo=Ei(256,(i,s)=>{i.fillStyle="#ff6a24",i.fillRect(0,0,s,s);let r=ri(61870);for(let o=0;o<90;o++){let a=r()*s,l=r()*s,c=5+r()*16;i.fillStyle=`rgba(${52+r()*26|0}, ${22+r()*12|0}, 10, ${.5+r()*.35})`,i.beginPath(),i.ellipse(a,l,c,c*(.45+r()*.5),r()*Math.PI,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(255, 226, 150, 0.85)";for(let o=0;o<26;o++){i.lineWidth=1+r()*1.8,i.beginPath();let a=r()*s,l=r()*s;i.moveTo(a,l);for(let c=0;c<5;c++)a+=(r()-.5)*52,l+=(r()-.5)*52,i.lineTo(a,l);i.stroke()}}),wo.wrapS=wo.wrapT=po;let t=new xr(40,40);t.rotateX(-Math.PI/2),Wl=new Ke({map:wo,fog:!1}),Wl.color.setRGB(1.5,1.35,1.2);let e=new qt(t,Wl);return e.position.set(fi.x,vg,fi.z),e.name="lava",n.scene.add(e),Xl=new _o(16738848,900,190,1.9),Xl.position.set(fi.x,vg+14,fi.z),n.scene.add(Xl),e}function YE(n){let t=[],e=[],i=[],a=(S,I,b,M=8)=>new Ae(S,I,b,M,1),l=(S,I,b=8)=>new Xe(S,I,b,1),c=(S,I,b)=>new se(S,I,b),u=[14,-14,72,-72,136,-136,180].map(S=>S*Math.PI/180).map(S=>({a:S,x:Math.sin(S)*78,z:Math.cos(S)*78})),f=[14,72,136,180,-136,-72,-14].map(S=>S*Math.PI/180);for(let S=0;S<f.length-1;S++){let I=Math.sin(f[S])*78,b=Math.cos(f[S])*78,M=Math.sin(f[S+1])*78,D=Math.cos(f[S+1])*78,H=Math.hypot(M-I,D-b),O=Math.atan2(-(D-b),M-I),G=(I+M)/2,Y=(b+D)/2;ce(t,c(H+2,18,4),G,13/2-2.5,Y,0,O,0),ce(t,c(H+2,1.7,4+1.4),G,13+.85,Y,0,O,0)}for(let S of u){let I=Math.abs(S.a)<.5,b=I?5.6:7,M=I?22:27;ce(t,a(b,b*1.15,M+4,8),S.x,M/2-2,S.z),ce(e,l(b*1.35,I?8:10,8),S.x,M+(I?4:5)-2,S.z);let D=M-6;ce(i,c(.8,1.7,.3),S.x+Math.sin(S.a)*b,D,S.z+Math.cos(S.a)*b,0,S.a,0)}ce(t,c(5,17,7),-8.5,8.5-2,77),ce(t,c(5,17,7),8.5,8.5-2,77),ce(t,c(22,5.5,7),0,15.5,77),ce(e,c(24,1.6,8.4),0,18.9,77),ce(t,c(36,12,30),0,4,-8),ce(t,a(12.5,14.5,48,10),0,30,-8),ce(e,l(15.5,15,10),0,61,-8),ce(t,a(5,6,36,8),16,25,-2),ce(e,l(7,10,8),16,47.5,-2),ce(t,a(5,6,36,8),-16,25,-2),ce(e,l(7,10,8),-16,47.5,-2),ce(t,a(3.6,4.4,56,8),0,32,-26),ce(e,l(5.4,13,8),0,66,-26);let d=[[0,40,1],[0,48,1],[.6,32,1],[-.6,32,1],[Math.PI,40,1],[Math.PI,48,1],[Math.PI/2,44,1],[-Math.PI/2,44,1]];for(let[S,I]of d)ce(i,c(1,2.2,.3),Math.sin(S)*13.6,I,-8+Math.cos(S)*13.6,0,S,0);ce(i,c(.9,1.8,.3),0,54,-26+4.3),ce(i,c(.9,1.8,.3),16,39,-2+5.2),ce(i,c(.9,1.8,.3),-16,39,-2+5.2);let g=jt(5656676),x=jt(3747919),m=Oe(10114559,1.7),p=new Tt,v=new qt(ql(Di(t)),g);v.castShadow=!0,v.receiveShadow=!0;let _=new qt(ql(Di(e)),x);_.castShadow=!0;let y=new qt(Di(i),m),P=new qt(new Nn(11,13),new Ke({color:722452}));P.position.set(0,4.5,78+2.51),p.add(v,_,y,P),p.position.set(xs.x,Gh-.4,xs.z),n.scene.add(p);let T=(S,I,b)=>n.colliders.push({x:xs.x+S,z:xs.z+I,radius:b});for(let S=0;S<f.length-1;S++){let I=Math.sin(f[S])*78,b=Math.cos(f[S])*78,M=Math.sin(f[S+1])*78,D=Math.cos(f[S+1])*78,H=Math.hypot(M-I,D-b),O=Math.max(2,Math.round(H/7));for(let G=0;G<=O;G++){let Y=G/O;T(mt(I,M,Y),mt(b,D,Y),3.6)}}for(let S of u)T(S.x,S.z,Math.abs(S.a)<.5?6.2:7.6);return T(-8.5,77,3.4),T(8.5,77,3.4),T(0,-8,17),T(0,-26,5.5),p}function ZE(n){let t=ri(643557),e=jt(9735030),i=[],s=(c,h,u,f,d,g)=>{let x=_n(c,h),m=(g?2.4+t()*1.6:5.6)*u;ce(i,new se(2.5,.7,2.5),c,x+.2,h,0,d,0),ce(i,new Ae(.8,.95,m,7),c,x+.55+m/2,h,f,d,f*.6),g||ce(i,new se(2.2,.55,2.2),c,x+.55+m+.27,h,f,d,f*.6),n.colliders.push({x:c,z:h,radius:1.25})},r=(c,h,u)=>{let f=_n(c,h),d=Math.cos(u)*3.2,g=-Math.sin(u)*3.2;s(c-d,h-g,1,0,u,!1),s(c+d,h+g,1,0,u,!1),ce(i,new se(8.4,1.15,2),c,f+6.9,h,0,u,0);for(let x=0;x<3;x++){let m=c+(t()-.5)*9,p=h+(t()-.5)*9;ce(i,new se(1+t()*1.4,.8+t()*.8,1+t()),m,_n(m,p)+.3,p,t()*.5,t()*Math.PI,t()*.5)}},o=8;for(let c=0;c<o;c++){let h=c/o*Math.PI*2,u=vr.x+Math.sin(h)*24,f=vr.z+Math.cos(h)*24;t()<.72&&s(u,f,.9+t()*.3,(t()-.5)*.14,h,t()<.4)}r(vr.x,vr.z-2,.4),r(vr.x+46,vr.z+30,-.9);let a=[[-80,120],[110,-140],[-260,40],[60,-260],[-120,-180],[230,190]];for(let[c,h]of a)Mr(c,h)!=="plains"&&Mr(c,h)!=="ruins"||s(c+(t()-.5)*10,h+(t()-.5)*10,.8+t()*.4,(t()-.5)*.2,t()*Math.PI,t()<.55);let l=new qt(ql(Di(i)),e);return l.castShadow=!0,l.receiveShadow=!0,n.scene.add(l),l}function $E(n){let t=ri(199191),e=46,i=ql(new Xe(1,1,6,1).toNonIndexed()),s=jt(6188408),r=new Vs(i,s,e),o=new ct;for(let a=0;a<e;a++){let l=a/e*Math.PI*2+t()*.12,c=1190+t()*220,h=190+t()*230,u=95+t()*105;Jh(r,a,Math.sin(l)*c,-30+h/2,Math.cos(l)*c,t()*Math.PI,u,h,u),o.setHSL(.56+t()*.04,.16+t()*.1,.42+t()*.14),r.setColorAt(a,o)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),n.scene.add(r),r}var Ag={value:0},_r=null,So=null,Ia=0,yp=0;function Eo(n,t,e={}){if(_n(n,t)<gs+(e.minAboveWater??.6)||GE(n,t)>(e.maxSlope??.85)||wg(n,t)<(e.roadGap??3.4)||Math.hypot(n-xs.x,t-xs.z)<(e.castleGap??96)||Math.abs(n)<64&&t<-512&&t>-652)return!1;for(let s of Wh)if(Math.hypot(n-s.x,t-s.z)<s.r+(e.spotGap??4))return!1;return!0}function JE(){let n=new Ze;return n.setAttribute("position",new Le(new Float32Array([-.09,0,0,.09,0,0,-.055,.5,.02,.055,.5,.02,0,.95,.06]),3)),n.setAttribute("normal",new Le(new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]),3)),n.setAttribute("color",new Le(new Float32Array([.24,.45,.19,.24,.45,.19,.34,.58,.26,.34,.58,.26,.46,.71,.34]),3)),n.setAttribute("uv",new Le(new Float32Array(10),2)),n.setIndex([0,1,2,1,3,2,2,3,4]),n}function KE(){let n=JE(),t=ri(420437),e=[];for(let i=0;i<5;i++){let s=i/5*Math.PI*2+t()*.9,r=i===0?0:.15+t()*.38,o=.78+t()*.5;ce(e,n,Math.sin(s)*r,0,Math.cos(s)*r,(t()-.5)*.3,t()*Math.PI*2,(t()-.5)*.3,o*1.5,o*(.7+t()*.4),o*1.5)}return n.dispose(),Di(e)}function QE(n){let t=ri(7227989);Ia=15e3;let e=jt(16777215,{vertexColors:!0,side:fn});e.onBeforeCompile=o=>{o.uniforms.uTime=Ag,o.vertexShader=`uniform float uTime;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float wgt = smoothstep(0.05, 1.0, position.y);
        float sway = sin(uTime * 1.7 + ip.x * 0.15 + ip.y * 0.13) * 0.55
                   + sin(uTime * 3.3 + ip.x * 0.37 - ip.y * 0.21) * 0.24;
        transformed.x += sway * wgt * 0.42;
        transformed.z += cos(uTime * 1.35 + ip.y * 0.17) * 0.5 * wgt * 0.3;
      #endif`)},_r=new Vs(KE(),e,Ia),_r.frustumCulled=!1;let i=new ct,s=0,r=0;for(;s<Ia&&r++<Ia*14;){let o=(t()*2-1)*970,a=(t()*2-1)*970,l=Mr(o,a),c=0;if(l==="plains"||l==="ruins"?c=.8:l==="lake"?c=.75:l==="forest"?c=.5:l==="volcano"?c=Math.hypot(o-fi.x,a-fi.z)>205?.14:0:l==="castle"&&(c=.25),c===0||t()>c||!Eo(o,a,{roadGap:3,maxSlope:.95,spotGap:1}))continue;let h=.7+t()*.55;Jh(_r,s,o,_n(o,a)-.04,a,t()*Math.PI*2,h,h*(.8+t()*.35),h);let u=l==="forest"?.75:1;i.setRGB((.78+t()*.22)*u,(.88+t()*.2)*u,(.72+t()*.2)*u),_r.setColorAt(s,i),s++}Ia=s,_r.count=s,n.scene.add(_r)}function Vl(n,t,e,{shadow:i=!0,tint:s=null}={}){let r=jt(16777215,{vertexColors:!0}),o=new Vs(ql(t),r,e.length);o.frustumCulled=!1;let a=new ct;for(let l=0;l<e.length;l++){let c=e[l];Jh(o,l,c.x,c.y,c.z,c.ry,c.sx,c.sy,c.sz),s&&(s(a,c),o.setColorAt(l,a))}return o.castShadow=i,n.scene.add(o),o}function xp(n){let t=[];return n==="broadleaf"?(ce(t,jn(new Ae(.22,.42,3,6),7031347),0,1.5,0),ce(t,jn(new ms(1.95,0),4164175),0,3.9,0,0,0,0,1,.88,1),ce(t,jn(new ms(1.45,0),3504712),1,3.1,.55,0,.7,0),ce(t,jn(new ms(1.3,0),4625754),-.9,3.3,-.5,0,1.9,0)):n==="pine"?(ce(t,jn(new Ae(.18,.34,2.4,6),5914672),0,1.2,0),ce(t,jn(new Xe(1.7,2.8,7),3107663),0,3.2,0),ce(t,jn(new Xe(1.3,2.4,7),2777672),0,4.6,0),ce(t,jn(new Xe(.9,2,7),3371090),0,5.9,0)):(ce(t,jn(new Ae(.14,.36,3.6,5),4864816),0,1.8,0,0,0,.06),ce(t,jn(new Ae(.05,.11,1.6,4),4535849),.5,2.9,0,0,0,-.9),ce(t,jn(new Ae(.04,.09,1.3,4),4535849),-.45,2.3,.1,.5,0,.9),ce(t,jn(new Ae(.04,.08,1.1,4),4206890),.1,3.4,-.4,-.7,0,.2)),Di(t)}function jE(n){let t=ri(133062381);QE(n);let e=[],i=[],s=[],r=[],o=[],a=[],l=(p,v)=>{for(let _=0;_<p;_++)v()};l(900,()=>{let p=t()*Math.PI*2,v=Math.sqrt(t())*200,_=br.x+Math.sin(p)*v,y=br.z+Math.cos(p)*v;if(!Eo(_,y,{roadGap:5,maxSlope:.7}))return;let P=.85+t()*.9;(v>130&&t()<.45?i:e).push({x:_,y:_n(_,y)-.15,z:y,ry:t()*Math.PI*2,sx:P,sy:P*(.9+t()*.3),sz:P}),n.colliders.push({x:_,z:y,radius:.62*P})}),l(420,()=>{let p=(t()*2-1)*940,v=(t()*2-1)*940,_=Mr(p,v);if(_!=="plains"&&_!=="lake"&&_!=="ruins"||t()>(_==="lake"?.5:.28)||!Eo(p,v,{roadGap:6,maxSlope:.6}))return;let y=.8+t()*.85;(v<-150&&t()<.5||t()<.18?i:e).push({x:p,y:_n(p,v)-.15,z:v,ry:t()*Math.PI*2,sx:y,sy:y*(.9+t()*.3),sz:y}),n.colliders.push({x:p,z:v,radius:.62*y})}),l(240,()=>{let p=t()*Math.PI*2,v=115+t()*105,_=fi.x+Math.sin(p)*v,y=fi.z+Math.cos(p)*v;if(!Eo(_,y,{roadGap:4,maxSlope:1.15})||t()>.45)return;let P=.8+t()*.8;s.push({x:_,y:_n(_,y)-.1,z:y,ry:t()*Math.PI*2,sx:P,sy:P,sz:P}),n.colliders.push({x:_,z:y,radius:.45*P})}),l(760,()=>{let p=(t()*2-1)*960,v=(t()*2-1)*960,_=Mr(p,v),y=_==="volcano"?.75:_==="plains"?.16:_==="forest"?.14:_==="lake"?.2:0;if(t()>y||!Eo(p,v,{roadGap:4.5,maxSlope:1.5,minAboveWater:-.5}))return;let P=.7+t()*2.1,T=.55+t()*1.6,S=.7+t()*2.1;r.push({x:p,y:_n(p,v)-T*.35,z:v,ry:t()*Math.PI*2,sx:P,sy:T,sz:S,v:_==="volcano"});let I=Math.max(P,S)*.85;I>1&&n.colliders.push({x:p,z:v,radius:I})}),l(520,()=>{let p=(t()*2-1)*940,v=(t()*2-1)*940,_=Mr(p,v),y=_==="forest"?.55:_==="plains"||_==="ruins"?.3:_==="lake"?.35:0;if(t()>y||!Eo(p,v,{roadGap:4,maxSlope:.7}))return;let P=.55+t()*.9;o.push({x:p,y:_n(p,v)+P*.25,z:v,ry:t()*Math.PI*2,sx:P,sy:P*.62,sz:P})}),l(2600,()=>{let p=(t()*2-1)*940,v=(t()*2-1)*940,_=Mr(p,v),y=_==="plains"||_==="ruins"?.62:_==="lake"?.55:_==="forest"?.12:0;if(t()>y||!Eo(p,v,{roadGap:3.2,maxSlope:.6,spotGap:1}))return;let P=.75+t()*.7;a.push({x:p,y:_n(p,v),z:v,ry:t()*Math.PI*2,sx:P,sy:P,sz:P,k:t()*4|0})}),Vl(n,xp("broadleaf"),e,{tint:(p,v)=>p.setRGB(.85+(v.x*13.7%1+1)%1*.3,.9+(v.z*7.3%1+1)%1*.2,.85)}),Vl(n,xp("pine"),i,{tint:(p,v)=>p.setRGB(.9,.9+(v.x*5.1%1+1)%1*.2,.9)}),Vl(n,xp("dead"),s,{});let c=jn(new ms(1,0),16777215);Vl(n,c,r,{tint:(p,v)=>{v.v?p.setRGB(.42,.3,.25):p.setRGB(.55,.53,.47);let _=.85+((v.x*3.3+v.z*1.7)%1+1)%1*.3;p.multiplyScalar(_)}});let h=jn(new ms(1,0),4884296);Vl(n,h,o,{tint:(p,v)=>p.setScalar(.8+(v.z*9.1%1+1)%1*.4)});let u=[],f=jn(new Nn(.3,.3),16777215);ce(u,f,0,.36,0,-Math.PI/2.4,0,0),ce(u,f,0,.36,0,-Math.PI/2.4,Math.PI/2,0),ce(u,jn(new Nn(.05,.4),4160053),0,.18,0);let d=Di(u),g=jt(16777215,{vertexColors:!0,side:fn});yp=a.length,So=new Vs(d,g,yp),So.frustumCulled=!1;let x=new ct,m=[15921380,16766814,15239864,10336511];for(let p=0;p<a.length;p++){let v=a[p];Jh(So,p,v.x,v.y,v.z,v.ry,v.sx,v.sy,v.sz),x.set(m[v.k]),So.setColorAt(p,x)}n.scene.add(So)}function bg(n){let t=Ct(n?.grassMul??1,.05,1);_r&&(_r.count=Math.max(200,Math.floor(Ia*t))),So&&(So.count=Math.max(80,Math.floor(yp*(.4+t*.6))))}async function tS(n){kE(),WE(n),XE(n),qE(n),YE(n),ZE(n),$E(n),jE(n),n.world={getHeight:_n,getBiome:Mr,waterLevel:gs,castleGatePos:new R(0,_n(0,-560),-560),startPos:new R(0,_n(0,250),250)},n.getGroundHeight=_n,bg(n.quality),n.on("quality-changed",t=>bg(t))}function eS(n,t){if(Tg.value+=t,Ag.value+=t,wo&&(wo.offset.x+=t*.009,wo.offset.y+=t*.006),Wl){let e=n.time.elapsed,i=1.28+Math.sin(e*2.1)*.16+Math.sin(e*5.3)*.07;Wl.color.setRGB(i*1.22,i*1.02,i*.88)}Xl&&(Xl.intensity=850+Math.sin(n.time.elapsed*2.7)*230)}var Kl={};cs(Kl,{init:()=>oS,update:()=>aS});var nS=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,iS=`
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
`,wn=n=>new ct(n);function di(n,t,e,i,s,r,o,a,l,c,h,u,f,d){return{p:n,top:wn(t),mid:wn(e),hor:wn(i),sun:wn(s),glow:r,light:wn(o),lightInt:a,hemiS:wn(l),hemiG:wn(c),hemiInt:h,cloud:wn(u),fogN:f,fogF:d}}var Kh=[di(0,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150),di(.035,5068176,13664125,16761968,16768164,1.5,16760968,1.5,10917294,5523518,.62,16764836,150,1250),di(.085,5011640,9681112,15782560,16771264,1,16767400,1.8,11455720,5924432,.78,16769228,180,1350),di(.14,4556498,8570088,14478828,16773846,.65,16772552,2.1,12903158,6714972,.9,16514558,220,1500),di(.25,4029906,8308968,14348018,16775400,.5,16773848,2.3,13625850,7109728,.95,16186108,260,1600),di(.4,4685764,9355998,15327170,16772811,.7,16769970,2,13033456,6844506,.85,16643040,210,1450),di(.47,5790356,12614242,16755540,16764808,1.4,16758129,1.5,11044496,5129272,.6,16762010,160,1300),di(.5,5453166,12737364,16747078,16756838,1.9,16751192,1,9200264,4536882,.45,15767420,145,1200),di(.545,2302034,5321310,10112592,16750688,1,12619904,.5,5260910,2630704,.32,6966364,115,1050),di(.6,791088,1581642,2898528,16756848,.35,11454190,.4,2898526,1448998,.3,2897490,95,980),di(.75,461860,1055290,2109518,16756848,.25,12440566,.5,2569818,1251876,.3,2436680,90,950),di(.9,659498,1318466,2503252,16756848,.3,11716846,.42,2766424,1383205,.29,2699856,95,980),di(.955,1843528,3945056,7226976,16763024,.8,13605508,.5,5787250,2762032,.34,5784664,110,1050),di(1,4608140,12874623,16302468,16767398,1.7,16757372,1.15,10127008,4997688,.5,15774874,130,1150)],Bt={top:new ct,mid:new ct,hor:new ct,sun:new ct,light:new ct,hemiS:new ct,hemiG:new ct,cloud:new ct,glow:0,lightInt:0,hemiInt:0,fogN:100,fogF:1e3};function sS(n){let t=n-Math.floor(n),e=0;for(;e<Kh.length-2&&Kh[e+1].p<=t;)e++;let i=Kh[e],s=Kh[e+1],r=$t(i.p,s.p,t);Bt.top.lerpColors(i.top,s.top,r),Bt.mid.lerpColors(i.mid,s.mid,r),Bt.hor.lerpColors(i.hor,s.hor,r),Bt.sun.lerpColors(i.sun,s.sun,r),Bt.light.lerpColors(i.light,s.light,r),Bt.hemiS.lerpColors(i.hemiS,s.hemiS,r),Bt.hemiG.lerpColors(i.hemiG,s.hemiG,r),Bt.cloud.lerpColors(i.cloud,s.cloud,r),Bt.glow=mt(i.glow,s.glow,r),Bt.lightInt=mt(i.lightInt,s.lightInt,r),Bt.hemiInt=mt(i.hemiInt,s.hemiInt,r),Bt.fogN=mt(i.fogN,s.fogN,r),Bt.fogF=mt(i.fogF,s.fogF,r)}var Qi={top:wn(1443593),mid:wn(3805459),hor:wn(6168342),light:wn(16740432),lightInt:.6,hemiS:wn(5776686),hemiG:wn(1510414),hemiInt:.34,cloud:wn(3675159),fogN:26,fogF:330},Ui={fog:wn(660503),light:wn(8839894),lightInt:.42,hemiS:wn(3116936),hemiG:wn(860452),hemiInt:.55,fogN:620,fogF:3200,dir:new R(.3,1,.22).normalize()},$l=46,Sr,Ni,ji,Mp,To,bp,Hn,Jl,Pa,Ep,Sp=null,cn=0,mn=0,Qh=0,vp=4,Rg=0,Cg=0,Ws=ri(659918),Zl=new R,_p=new R,Er=new R;function rS(n){let t=[[0,.1,0,1.7,1,1.25],[1.55,.05,.35,1.05,.72,.9],[-1.5,0,-.25,1.15,.8,1],[.55,.55,-.7,.85,.6,.8],[-.65,.5,.65,.7,.52,.72]],e=[];for(let[c,h,u,f,d,g]of t){let x=new ms(1,1);x.scale(f,d,g),x.translate(c,h,u),e.push(x)}let i=null;try{i=Di(e)}catch{i=null}i||(i=e[0]),i.computeVertexNormals(),Mp=jt(16186108),ji=new Vs(i,Mp,$l),ji.instanceMatrix.setUsage(Ji),ji.castShadow=!1,ji.receiveShadow=!1,ji.frustumCulled=!1,To=new Float32Array($l*3),bp=new Float32Array($l);let s=new Ce,r=new Fn,o=new R,a=new R,l=new R(0,1,0);for(let c=0;c<$l;c++){let h=(Ws()-.5)*2600,u=(Ws()-.5)*2600,f=135+Ws()*110;To[c*3]=h,To[c*3+1]=f,To[c*3+2]=u,bp[c]=.6+Ws()*.8;let d=9+Ws()*17;r.setFromAxisAngle(l,Ws()*Math.PI*2),o.set(d*(.8+Ws()*.6),d*.55,d),s.compose(a.set(h,f,u),r,o),ji.setMatrixAt(c,s)}n.add(ji)}async function oS(n){let t=n.scene,e=new pn(1800,48,24),i=new Qe({uniforms:{uTop:{value:new ct(4029906)},uMid:{value:new ct(8308968)},uHor:{value:new ct(14348018)},uSunDir:{value:new R(.8,.4,.3).normalize()},uMoonDir:{value:new R(-.8,-.4,-.3).normalize()},uSunCol:{value:new ct(16775400)},uGlow:{value:.6},uNight:{value:0},uTime:{value:0},uFlash:{value:0},uSunI:{value:1}},vertexShader:nS,fragmentShader:iS,side:Un,depthWrite:!1,fog:!1});Sr=new qt(e,i),Sr.frustumCulled=!1,Sr.renderOrder=-100,Ni=i.uniforms,t.add(Sr),rS(t),Hn=new zh(16773848,2.3),Hn.castShadow=!0;let s=n.quality&&n.quality.shadowMapSize||1024;Hn.shadow.mapSize.set(s,s);let r=Hn.shadow.camera;r.left=-60,r.right=60,r.top=60,r.bottom=-60,r.near=20,r.far=420,r.updateProjectionMatrix(),Hn.shadow.bias=-35e-5,Hn.shadow.normalBias=.7,t.add(Hn,Hn.target),Jl=new Uh(13625850,7109728,.95),t.add(Jl),Pa=new Mh(14348018,260,1600),t.fog=Pa,Ep=new ct(14348018),t.background=Ep,n.on("quality-changed",o=>{let a=o&&o.shadowMapSize||n.quality&&n.quality.shadowMapSize||1024;Hn.shadow.map&&(Hn.shadow.map.dispose(),Hn.shadow.map=null),Hn.shadow.mapSize.set(a,a)}),n.sky={sunDir:new R(.9,.3,.3).normalize(),sunLight:Hn,setOverride(o){Sp=o==="shrine"||o==="boss"?o:null}}}function aS(n,t){if(!Sr)return;let e=n.time.dayPhase,i=n.time.elapsed,s=n.player&&n.player.position||n.camera.position,r=n.quality&&n.quality.drawDist||1,o=e*Math.PI*2;Zl.set(Math.cos(o),Math.sin(o),.34).normalize(),_p.set(-Math.cos(o)*.92,-Math.sin(o),-.42).normalize();let a=Zl.y,l=1-$t(-.16,-.02,a),c=$t(-.12,.02,a);cn=gt(cn,Sp==="shrine"?1:0,4,t),mn=gt(mn,Sp==="boss"?1:0,2.5,t),cn<.001&&(cn=0),mn<.001&&(mn=0),mn>.4&&(vp-=t,vp<=0&&(Qh=.55+Ws()*.45,vp=2.8+Ws()*5.5)),Qh=Math.max(0,Qh-t*3.2);let h=Qh*mn;if(sS(e),mn>0&&(Bt.top.lerp(Qi.top,mn),Bt.mid.lerp(Qi.mid,mn),Bt.hor.lerp(Qi.hor,mn),Bt.light.lerp(Qi.light,mn),Bt.hemiS.lerp(Qi.hemiS,mn),Bt.hemiG.lerp(Qi.hemiG,mn),Bt.cloud.lerp(Qi.cloud,mn),Bt.glow=mt(Bt.glow,0,mn),Bt.lightInt=mt(Bt.lightInt,Qi.lightInt,mn),Bt.hemiInt=mt(Bt.hemiInt,Qi.hemiInt,mn),Bt.fogN=mt(Bt.fogN,Qi.fogN,mn),Bt.fogF=mt(Bt.fogF,Qi.fogF,mn)),cn>0&&(Bt.top.lerp(Ui.fog,cn),Bt.mid.lerp(Ui.fog,cn),Bt.hor.lerp(Ui.fog,cn),Bt.light.lerp(Ui.light,cn),Bt.hemiS.lerp(Ui.hemiS,cn),Bt.hemiG.lerp(Ui.hemiG,cn),Bt.cloud.lerp(Ui.fog,cn),Bt.glow=mt(Bt.glow,0,cn),Bt.lightInt=mt(Bt.lightInt,Ui.lightInt,cn),Bt.hemiInt=mt(Bt.hemiInt,Ui.hemiInt,cn),Bt.fogN=mt(Bt.fogN,Ui.fogN,cn),Bt.fogF=mt(Bt.fogF,Ui.fogF,cn)),Pa.color.copy(Bt.hor),Pa.near=Bt.fogN*r,Pa.far=Math.max(Bt.fogF*r,Pa.near+120),Ep.copy(Bt.hor),Sr.visible=cn<.98,Sr.visible&&(Sr.position.copy(s),Ni.uTop.value.copy(Bt.top),Ni.uMid.value.copy(Bt.mid),Ni.uHor.value.copy(Bt.hor),Ni.uSunDir.value.copy(Zl),Ni.uMoonDir.value.copy(_p),Ni.uSunCol.value.copy(Bt.sun),Ni.uGlow.value=Bt.glow,Ni.uSunI.value=(1-mn)*(1-cn),Ni.uNight.value=l*(1-mn)*(1-cn),Ni.uTime.value=i,Ni.uFlash.value=h),Er.copy(Zl).multiplyScalar(c).addScaledVector(_p,1-c),cn>0&&Er.lerp(Ui.dir,cn),Er.lengthSq()<.05&&Er.set(.2,1,.1),Er.y=Math.max(Er.y,.08),Er.normalize(),Hn.position.copy(s).addScaledVector(Er,170),Hn.target.position.copy(s),Hn.color.copy(Bt.light),Hn.intensity=Bt.lightInt+h*1.2,Jl.color.copy(Bt.hemiS),Jl.groundColor.copy(Bt.hemiG),Jl.intensity=Bt.hemiInt+h*.35,ji.visible=cn<.98,ji.visible){Rg+=t*2.4,Cg+=t*.7;let u=ji.instanceMatrix.array;for(let f=0;f<$l;f++){let d=bp[f],g=To[f*3]+Rg*d,x=To[f*3+2]+Cg*d;u[f*16+12]=((g+1300)%2600+2600)%2600-1300,u[f*16+13]=To[f*3+1]+Math.sin(i*.08+f*2.1)*4,u[f*16+14]=((x+1300)%2600+2600)%2600-1300}ji.instanceMatrix.needsUpdate=!0,Mp.color.copy(Bt.cloud)}n.sky.sunDir.copy(Zl)}var tc={};cs(tc,{init:()=>RS,update:()=>CS});var jh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lS=new Ma(-1,1,1,-1,0,1),wp=class extends Ze{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}},cS=new wp,wr=class{constructor(t){this._mesh=new qt(cS,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lS)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var La=class extends Si{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yr.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ql=class extends Si{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},tu=class extends Si{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var eu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new La(jh),this.copyPass.material.blending=ds,this.clock=new Aa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ql!==void 0&&(o instanceof Ql?i=!0:o instanceof tu&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nu=class extends Si{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ct}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ig={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Da=class n extends Si{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(r,o,{type:bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new zn(r,o,{type:bi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new zn(r,o,{type:bi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Ig;this.highPassUniforms=yr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=jh;this.copyUniforms=yr.clone(h.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ct,this.oldClearAlpha=1,this.basic=new Ke,this.fsQuad=new wr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Da.BlurDirectionX=new tt(1,0);Da.BlurDirectionY=new tt(0,1);var Pg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var iu=class extends Si{constructor(){super();let t=Pg;this.uniforms=yr.clone(t.uniforms),this.material=new Lh({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new wr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Te.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ep?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===np?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ip&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ti=null,kn=null,Lg=null,za=null,gn=null,Rr=null,Ro=null,Ao=new tt,Na=new ct,an=Math.random,X=(n,t)=>n+an()*(t-n),hS={name:"ArdiaGradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new tt(1280,720)},uVignette:{value:.3},uSaturation:{value:1.055},uContrast:{value:.1},uGrain:{value:.014}},vertexShader:`
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
    }`},uS=`
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
  }`,fS=`
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
  }`;function dS(){return Ei(64,(n,t)=>{let e=t/2,i=n.createRadialGradient(e,e,0,e,e,e);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.85)"),i.addColorStop(.6,"rgba(255,255,255,0.28)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,t)})}function pS(){return Ei(128,(n,t)=>{let e=ri(3599),i=t/2;for(let r=0;r<9;r++){let o=e()*Math.PI*2,a=e()*t*.16,l=i+Math.cos(o)*a,c=i+Math.sin(o)*a,h=t*(.16+e()*.16),u=n.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.30)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.65,"rgba(255,255,255,0.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,t,t)})}function mS(){return Ei(64,(n,t)=>{let e=t/2;n.translate(e,e);let i=n.createLinearGradient(0,-24,0,24);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(185,185,185,1)"),n.fillStyle=i,n.beginPath(),n.moveTo(0,-23),n.bezierCurveTo(11,-13,12,8,0,23),n.bezierCurveTo(-12,8,-11,-13,0,-23),n.closePath(),n.fill(),n.strokeStyle="rgba(130,130,130,0.55)",n.lineWidth=1.6,n.beginPath(),n.moveTo(0,-19),n.lineTo(0,19),n.stroke()})}var Ua=17,A={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:1,size:.1,r:1,g:1,b:1,alpha:1,grav:0,drag:0,flut:0,spin:0,swirl:0,grow:0,fadeIn:.02,fadeOut:-1,pulse:0,rot:0};function hn(n,t,e){A.x=n,A.y=t,A.z=e,A.vx=A.vy=A.vz=0,A.life=1,A.size=.1,A.r=A.g=A.b=1,A.alpha=1,A.grav=0,A.drag=0,A.flut=0,A.spin=0,A.swirl=0,A.grow=0,A.fadeIn=.02,A.fadeOut=-1,A.pulse=0,A.rot=0}var jl=class{constructor(t,e,i,s){this.cap=t,this.count=0,this._last=0,this.data=new Float32Array(t*Ua);let r=new Ze;this.aPos=new Le(new Float32Array(t*3),3).setUsage(Ji),this.aCol=new Le(new Float32Array(t*3),3).setUsage(Ji),this.aSiz=new Le(new Float32Array(t),1).setUsage(Ji),this.aAlp=new Le(new Float32Array(t),1).setUsage(Ji),this.aRot=new Le(new Float32Array(t),1).setUsage(Ji),r.setAttribute("position",this.aPos),r.setAttribute("aColor",this.aCol),r.setAttribute("aSize",this.aSiz),r.setAttribute("aAlpha",this.aAlp),r.setAttribute("aRot",this.aRot),r.setDrawRange(0,0),this.geo=r,this.mat=new Qe({uniforms:{uMap:{value:e},uScale:{value:600}},vertexShader:uS,fragmentShader:fS,blending:i,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1}),this.points=new Ea(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,this.points.matrixAutoUpdate=!1}spawn(){if(this.count>=this.cap)return;let t=this.count++,e=t*3,i=this.aPos.array,s=this.aCol.array;i[e]=A.x,i[e+1]=A.y,i[e+2]=A.z,s[e]=A.r,s[e+1]=A.g,s[e+2]=A.b,this.aSiz.array[t]=A.size,this.aAlp.array[t]=A.fadeIn>0?0:A.alpha,this.aRot.array[t]=A.rot;let r=t*Ua,o=this.data;o[r]=A.vx,o[r+1]=A.vy,o[r+2]=A.vz,o[r+3]=0,o[r+4]=Math.max(.05,A.life),o[r+5]=A.size,o[r+6]=A.alpha,o[r+7]=A.grav,o[r+8]=A.drag,o[r+9]=A.flut,o[r+10]=A.spin,o[r+11]=A.swirl,o[r+12]=A.grow,o[r+13]=A.fadeIn,o[r+14]=A.fadeOut>=0?A.fadeOut:A.life*.35,o[r+15]=A.pulse,o[r+16]=an()*6.2831}_copy(t,e){let i=t*3,s=e*3,r=this.aPos.array,o=this.aCol.array;r[s]=r[i],r[s+1]=r[i+1],r[s+2]=r[i+2],o[s]=o[i],o[s+1]=o[i+1],o[s+2]=o[i+2],this.aSiz.array[e]=this.aSiz.array[t],this.aAlp.array[e]=this.aAlp.array[t],this.aRot.array[e]=this.aRot.array[t];let a=t*Ua,l=e*Ua,c=this.data;for(let h=0;h<Ua;h++)c[l+h]=c[a+h]}update(t,e){let i=this.aPos.array,s=this.aSiz.array,r=this.aAlp.array,o=this.aRot.array,a=this.data,l=0;for(;l<this.count;){let c=l*Ua,h=a[c+4],u=a[c+3]+t;if(u>=h){this.count--,l!==this.count&&this._copy(this.count,l);continue}a[c+3]=u;let f=a[c],d=a[c+1],g=a[c+2];d-=a[c+7]*t;let x=a[c+8];if(x>0){let H=Math.max(0,1-x*t);f*=H,d*=H,g*=H}let m=a[c+11];if(m!==0){let H=m*t,O=Math.cos(H),G=Math.sin(H),Y=f*O-g*G;g=f*G+g*O,f=Y}a[c]=f,a[c+1]=d,a[c+2]=g;let p=l*3,v=i[p]+f*t,_=i[p+1]+d*t,y=i[p+2]+g*t,P=a[c+9];if(P>0){let H=a[c+16];v+=Math.cos(e*1.7+H)*P*t,y+=Math.sin(e*1.3+H*1.71)*P*t,_+=Math.sin(e*2.1+H*2.3)*P*.4*t}i[p]=v,i[p+1]=_,i[p+2]=y,o[l]+=a[c+10]*t;let T=u/h;s[l]=a[c+5]*(1+a[c+12]*T);let S=a[c+6],I=a[c+13];I>0&&u<I&&(S*=u/I);let b=h-u,M=a[c+14];b<M&&M>0&&(S*=b/M);let D=a[c+15];D>0&&(S*=.55+.45*Math.sin(e*D+a[c+16]*3)),r[l]=S,l++}this.geo.setDrawRange(0,this.count),(this.count>0||this._last>0)&&(this._flag(this.aPos,3),this._flag(this.aCol,3),this._flag(this.aSiz,1),this._flag(this.aAlp,1),this._flag(this.aRot,1)),this._last=this.count}_flag(t,e){t.needsUpdate=!0,t.clearUpdateRanges&&(t.clearUpdateRanges(),t.addUpdateRange(0,Math.max(this.count,1)*e))}};function zi(n,t){let e=ti&&ti.quality.particleMul||1;return Math.max(1,Math.round((n.count!=null?n.count:t)*e))}function pi(n,t,e,i){return n&&n.color!=null?Na.set(n.color):Na.setRGB(t,e,i),Na}function mi(n,t){let e=X(n,t);A.r=Na.r*e,A.g=Na.g*e,A.b=Na.b*e}var Dg={hit(n,t,e,i,s){hn(n,t,e),pi(i,1.15,1.1,.92),mi(.95,1),A.size=1*s,A.life=.15,A.alpha=.65,A.grow=1.6,A.fadeIn=0,A.fadeOut=.12,gn.spawn();let r=zi(i,20);for(let o=0;o<r;o++){hn(n,t,e);let a=an()*Math.PI*2,l=(an()-.35)*1.5,c=X(3.2,8)*s;if(A.vx=Math.cos(a)*Math.cos(l)*c,A.vy=Math.sin(l)*c*.8+1.2,A.vz=Math.sin(a)*Math.cos(l)*c,A.grav=16,A.drag=1.2,A.life=X(.22,.5),A.size=X(.05,.11)*s,i&&i.color!=null)pi(i,1,1,1),mi(.85,1.1);else{let h=an();A.r=1.1,A.g=1.05-.28*h,A.b=.92-.55*h}A.fadeIn=0,A.fadeOut=.12,gn.spawn()}},spark(n,t,e,i,s){let r=zi(i,12);pi(i,1.05,.8,.38);for(let o=0;o<r;o++){hn(n,t,e),mi(.8,1.1);let a=an()*Math.PI*2,l=X(1.6,4.4)*s;A.vx=Math.cos(a)*l,A.vz=Math.sin(a)*l,A.vy=X(.8,3)*s,A.grav=10,A.drag=1,A.life=X(.3,.65),A.size=X(.04,.09)*s,A.fadeIn=0,A.fadeOut=.15,gn.spawn()}},death(n,t,e,i,s){let r=zi(i,12);for(let a=0;a<r;a++){hn(n+X(-.4,.4)*s,t+X(0,.7)*s,e+X(-.4,.4)*s);let l=X(.75,1.25);A.r=.13*l,A.g=.08*l,A.b=.2*l;let c=an()*Math.PI*2,h=X(.1,.7);A.vx=Math.cos(c)*h,A.vz=Math.sin(c)*h,A.vy=X(.4,1.1),A.drag=1.8,A.spin=X(-1.2,1.2),A.life=X(1,1.9),A.size=X(.5,.9)*s,A.alpha=X(.4,.58),A.grow=1.6,A.fadeIn=.06,Rr.spawn()}let o=zi(i,14);pi(i,.5,.2,1);for(let a=0;a<o;a++){hn(n+X(-.5,.5)*s,t+X(.1,.9)*s,e+X(-.5,.5)*s),mi(.75,1.1);let l=an()*Math.PI*2,c=X(.2,.8);A.vx=Math.cos(l)*c,A.vz=Math.sin(l)*c,A.vy=X(.7,1.9),A.swirl=X(1.5,3.5)*(an()<.5?-1:1),A.flut=.5,A.drag=.3,A.life=X(.9,1.8),A.size=X(.05,.11)*s,A.fadeIn=.1,gn.spawn()}},grass(n,t,e,i,s){let r=zi(i,10);for(let o=0;o<r;o++){hn(n+X(-.3,.3),t+X(0,.3),e+X(-.3,.3)),i&&i.color!=null?(pi(i,1,1,1),mi(.8,1.1)):(A.r=X(.12,.24),A.g=X(.3,.48),A.b=X(.06,.14));let a=an()*Math.PI*2,l=X(.8,2.6)*s;A.vx=Math.cos(a)*l,A.vz=Math.sin(a)*l,A.vy=X(1.2,3.2)*s,A.grav=7,A.drag=.8,A.flut=1.2,A.rot=an()*6.28,A.spin=X(-8,8),A.life=X(.7,1.4),A.size=X(.11,.19)*s,A.fadeIn=0,A.fadeOut=.2,Ro.spawn()}},dust(n,t,e,i,s){let r=zi(i,9);pi(i,.58,.52,.42);for(let o=0;o<r;o++){hn(n+X(-.3,.3)*s,t+X(0,.25),e+X(-.3,.3)*s),mi(.85,1.15);let a=an()*Math.PI*2,l=X(.4,1.4)*s;A.vx=Math.cos(a)*l,A.vz=Math.sin(a)*l,A.vy=X(.2,.7),A.drag=2.2,A.spin=X(-.8,.8),A.life=X(.6,1.2),A.size=X(.3,.6)*s,A.alpha=X(.2,.33),A.grow=1.8,A.fadeIn=.05,Rr.spawn()}},heal(n,t,e,i,s){let r=zi(i,14);pi(i,1,.4,.58);for(let o=0;o<r;o++){let a=an()*Math.PI*2,l=X(.15,.85)*s;hn(n+Math.cos(a)*l,t+X(0,.6),e+Math.sin(a)*l),mi(.85,1.05),A.vy=X(.5,1.2),A.flut=.4,A.pulse=X(2,4),A.life=X(1.3,2.2),A.size=X(.06,.12)*s,A.alpha=.85,A.fadeIn=.25,gn.spawn()}},orb(n,t,e,i,s){let r=zi(i,18);pi(i,.1,.85,.8);for(let o=0;o<r;o++){let a=an()*Math.PI*2,l=X(.25,.8)*s;hn(n+Math.cos(a)*l,t+X(0,.5),e+Math.sin(a)*l),mi(.8,1.05);let c=X(1.2,2.2)*s;A.vx=-Math.sin(a)*c,A.vz=Math.cos(a)*c,A.vy=X(1,2.2),A.swirl=3,A.drag=.3,A.life=X(1.1,1.9),A.size=X(.06,.12)*s,A.fadeIn=.12,gn.spawn()}},fire(n,t,e,i,s){for(let o=0;o<2;o++)hn(n+X(-.2,.2),t+X(0,.3),e+X(-.2,.2)),pi(i,1,.42,.14),mi(.85,1),A.size=X(.4,.6)*s,A.life=X(.2,.35),A.alpha=.35,A.grow=1.4,A.fadeIn=0,gn.spawn();let r=zi(i,15);for(let o=0;o<r;o++){if(hn(n+X(-.25,.25)*s,t+X(0,.3),e+X(-.25,.25)*s),i&&i.color!=null)pi(i,1,1,1),mi(.85,1.1);else{let c=an();A.r=1.15,A.g=.32+.28*c,A.b=.06+.1*c}let a=an()*Math.PI*2,l=X(.6,2.4)*s;A.vx=Math.cos(a)*l,A.vz=Math.sin(a)*l,A.vy=X(1.8,4.5)*s,A.grav=3.5,A.drag=.7,A.flut=.8,A.life=X(.5,1.1),A.size=X(.045,.1)*s,A.fadeIn=0,A.fadeOut=.18,gn.spawn()}},magic(n,t,e,i,s){hn(n,t,e),pi(i,.55,.26,1.1),mi(.9,1),A.size=.85*s,A.life=.16,A.alpha=.5,A.grow=1.5,A.fadeIn=0,A.fadeOut=.13,gn.spawn();let r=zi(i,16);pi(i,.46,.16,1.05);for(let o=0;o<r;o++){hn(n,t,e),mi(.8,1.1);let a=an()*Math.PI*2,l=(an()-.5)*2.4,c=X(1.8,4.5)*s;A.vx=Math.cos(a)*Math.cos(l)*c,A.vy=Math.sin(l)*c*.7+.8,A.vz=Math.sin(a)*Math.cos(l)*c,A.swirl=X(-3,3),A.drag=2.4,A.life=X(.5,1),A.size=X(.05,.13)*s,A.fadeIn=0,A.fadeOut=.2,gn.spawn()}},leaf(n,t,e,i,s){let r=zi(i,7);for(let o=0;o<r;o++){if(hn(n+X(-1.2,1.2)*s,t+X(0,1.5)*s,e+X(-1.2,1.2)*s),i&&i.color!=null)pi(i,1,1,1),mi(.8,1.1);else{let a=an();A.r=.14+.18*a,A.g=X(.32,.5),A.b=.07+.09*a}A.vx=X(-.3,.3),A.vz=X(-.3,.3),A.vy=X(-.5,-.2),A.grav=.9,A.drag=.6,A.flut=1.6,A.rot=an()*6.28,A.spin=X(-4,4),A.life=X(2.5,4.5),A.size=X(.12,.2)*s,A.fadeIn=.2,A.fadeOut=.5,Ro.spawn()}},firefly(n,t,e,i,s){let r=zi(i,5);pi(i,.72,.95,.38);for(let o=0;o<r;o++)hn(n+X(-1.5,1.5)*s,t+X(.2,1.8)*s,e+X(-1.5,1.5)*s),mi(.75,1),A.vx=X(-.15,.15),A.vy=X(-.05,.15),A.vz=X(-.15,.15),A.flut=.7,A.life=X(4,7),A.size=X(.05,.08)*s,A.alpha=.9,A.pulse=X(1.5,3),A.fadeIn=.8,A.fadeOut=1.2,gn.spawn()}},Tr="plains",Tp=0,Ap={firefly:0,leaf:0,ember:0,heat:0,glint:0,fluff:0,rune:0,mote:0},Gn=0,Vn=0;function Cr(n,t,e){let i=an()*Math.PI*2,s=X(t,e);Gn=n.x+Math.cos(i)*s,Vn=n.z+Math.sin(i)*s}function gS(n,t){Cr(t,1,7);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(.2,1.8),Vn),A.r=.2,A.g=.82,A.b=.72,A.vy=X(.25,.6),A.flut=.25,A.life=X(2.5,4),A.size=X(.04,.09),A.alpha=.85,A.pulse=2.5,A.fadeIn=.5,A.fadeOut=.8,gn.spawn()}function xS(n,t){Cr(t,4,26);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(.4,2.2),Vn);let i=X(.7,1);A.r=.72*i,A.g=.95*i,A.b=.36*i,A.vx=X(-.15,.15),A.vy=X(-.05,.12),A.vz=X(-.15,.15),A.flut=.7,A.life=X(5,9),A.size=X(.06,.1),A.alpha=1,A.pulse=X(1.4,2.8),A.fadeIn=1,A.fadeOut=1.4,gn.spawn()}function yS(n,t){Cr(t,3,24);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(3,8),Vn);let i=an();A.r=.14+.18*i,A.g=X(.3,.5),A.b=.07+.09*i,A.vx=X(-.3,.3),A.vy=X(-.55,-.25),A.vz=X(-.3,.3),A.grav=.9,A.drag=.6,A.flut=1.6,A.rot=an()*6.28,A.spin=X(-4,4),A.life=X(4,7),A.size=X(.11,.19),A.fadeIn=.4,A.fadeOut=.6,Ro.spawn()}function vS(n,t){Cr(t,3,26);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(0,1),Vn);let i=an();A.r=1.15,A.g=.35+.3*i,A.b=.07+.1*i,A.vy=X(.8,2.2),A.grav=-.4,A.flut=.6,A.life=X(1.2,2.6),A.size=X(.05,.1),A.fadeIn=.1,A.fadeOut=.4,gn.spawn()}function _S(n,t){Cr(t,2,20);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(.2,1),Vn);let i=X(.8,1.1);A.r=.95*i,A.g=.6*i,A.b=.36*i,A.vy=X(1,2),A.drag=.3,A.flut=.5,A.life=X(1.2,2),A.size=X(.8,1.4),A.alpha=.06,A.grow=1.2,A.fadeIn=.4,Rr.spawn()}function MS(n,t){Cr(t,2,28);let e=n.world;if(e.getHeight(Gn,Vn)>=e.waterLevel-.12)return;hn(Gn,e.waterLevel+.04,Vn);let i=X(.7,1.1);A.r=.8*i,A.g=.98*i,A.b=1*i,A.life=X(.5,1.1),A.size=X(.04,.09),A.alpha=.9,A.pulse=8,A.fadeIn=.15,A.fadeOut=.3,gn.spawn()}function bS(n,t){Cr(t,4,26);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(.5,2.5),Vn);let i=X(.85,1);A.r=.95*i,A.g=.95*i,A.b=.9*i,A.vx=X(.25,.7),A.vy=X(.08,.3),A.vz=X(-.2,.2),A.flut=.9,A.life=X(5,8),A.size=X(.06,.1),A.alpha=.55,A.fadeIn=1,A.fadeOut=1.2,Rr.spawn()}function ES(n,t){Cr(t,3,22);let e=n.getGroundHeight(Gn,Vn);hn(Gn,e+X(.2,3),Vn);let i=X(.7,1);A.r=.48*i,A.g=.28*i,A.b=.72*i,A.vy=X(.2,.5),A.flut=.4,A.life=X(2,4),A.size=X(.04,.08),A.alpha=.55,A.pulse=X(1.5,3),A.fadeIn=.6,A.fadeOut=.8,gn.spawn()}function Ar(n,t,e,i,s,r){for(Ap[n]+=t*e;Ap[n]>=1;)Ap[n]-=1,i(s,r)}function SS(n,t){let e=n.player;if(!e||!n.world)return;let i=e.position,s=n.quality.particleMul||1;if(Tp-=t,Tp<=0&&(Tp=.5,Tr=n.world.getBiome(i.x,i.z)||"plains"),n.state==="shrine"){Ar("rune",.9*s,t,gS,n,i);return}n.time.isNight&&Tr!=="volcano"&&Tr!=="castle"&&Ar("firefly",1.2*s,t,xS,n,i),Tr==="forest"?Ar("leaf",1.4*s,t,yS,n,i):Tr==="volcano"?(Ar("ember",4*s,t,vS,n,i),Ar("heat",.7*s,t,_S,n,i)):Tr==="lake"?Ar("glint",6*s,t,MS,n,i):Tr==="plains"?n.time.isNight||Ar("fluff",.3*s,t,bS,n,i):Tr==="castle"&&Ar("mote",.5*s,t,ES,n,i)}function Ug(){if(kn||!ti)return;let{renderer:n,scene:t,camera:e}=ti;n.getDrawingBufferSize(Ao);let i=new zn(Math.max(1,Ao.x),Math.max(1,Ao.y),{type:bi,samples:4});kn=new eu(n,i),kn.addPass(new nu(t,e)),Lg=new Da(new tt(innerWidth,innerHeight),.38,.55,.82),kn.addPass(Lg),kn.addPass(new iu),za=new La(hS),kn.addPass(za),su()}function su(){if(!ti)return;if(kn){let t=ti.settings.quality==="high"?4:2;kn.renderTarget1.samples!==t&&(kn.renderTarget1.samples=t,kn.renderTarget2.samples=t,kn.renderTarget1.dispose(),kn.renderTarget2.dispose()),kn.setPixelRatio(ti.quality.pixelRatio||1),kn.setSize(innerWidth,innerHeight)}ti.renderer.getDrawingBufferSize(Ao);let n=Ao.y/(2*Math.tan(sg.degToRad(ti.camera.fov)*.5));gn&&(gn.mat.uniforms.uScale.value=n,Rr.mat.uniforms.uScale.value=n,Ro.mat.uniforms.uScale.value=n),za&&za.uniforms.uRes.value.set(Ao.x,Ao.y)}function wS(){ti&&(kn&&ti.quality.postFX?(za&&(za.uniforms.uTime.value=ti.time.elapsed%1e3),kn.render()):ti.renderer.render(ti.scene,ti.camera))}function TS(n,t,e){if(!n||!Dg[t])return;let i=e||{},s=i.scale||1;Dg[t](n.x,n.y,n.z,i,s)}function AS(){su()}async function RS(n){ti=n;let t=dS(),e=pS(),i=mS();gn=new jl(2e3,t,on,950),Rr=new jl(2e3,e,Bs,940),Ro=new jl(1200,i,Bs,945),n.scene.add(Rr.points,Ro.points,gn.points),n.quality.postFX&&Ug(),su(),n.on("quality-changed",s=>{s&&s.postFX&&!kn&&Ug(),su()}),n.effects={render:wS,burst:TS,onResize:AS}}function CS(n,t){let e=n.time.elapsed;gn.update(t,e),Rr.update(t,e),Ro.update(t,e),SS(n,t)}var gu={};cs(gu,{init:()=>HS,update:()=>GS});var IS=-30,Hg=11,Ng=6.2,PS=1.65,kg=.45,LS=9.2,Gg=25,DS=20,US=25,Vg=1,Wg=3,NS=.42,uu=4,Xg=.38,zS=1,fu=[{dur:.42,a0:.34,a1:.62,dmg:1,lunge:3.8,sfx:"sword1"},{dur:.46,a0:.36,a1:.66,dmg:1,lunge:4,sfx:"sword2"},{dur:.74,a0:.34,a1:.78,dmg:1.5,lunge:2.6,sfx:"sword3"}],De,Fi,Dr,Lr,ei,Tn,ys,Io,du,Dp,pu,Up,Np,zp,Fp,Bp,Fa,Ur,Ir,Ba,qg,Yg,lu,Zg,wi,ai,we=null,ve=null,Ue=Math.PI,An=!0,Op=!1,qs=!1,Hp=!1,Fr=!1,oi=!1,Gt=null,Nr=0,Po=0,Ha=0,cu=0,Co=0,ka=0,Oa=0,Pr=0;var Lo=0,mu=!1,ic=0,zg=3.5,nc=0,Rp=0,Cp=2.5,ru=0,Fg=0,vs=0,ec=0,$g=new R,Ip={pos:$g,radius:1.5,damage:1,swingId:0},zr=new R,Xs=new R,Pp=new R,ni=new R,Lp=new Fn,ou=new Fn,Bg=new Mi,U={hipsY:0,hipsRY:0,torsoRX:0,torsoRY:0,torsoRZ:0,headRX:0,headRY:0,headRZ:0,shRX_R:.1,shRZ_R:-.1,elbR_:.25,shRX_L:.1,shRZ_L:.1,elbL_:.25,legR_:0,kneeR_:.06,legL_:0,kneeL_:.06};function Jg(){U.hipsY=0,U.hipsRY=0,U.torsoRX=.02,U.torsoRY=0,U.torsoRZ=0,U.headRX=0,U.headRY=0,U.headRZ=0,U.shRX_R=.1,U.shRZ_R=-.12,U.elbR_=.25,U.shRX_L=.1,U.shRZ_L=.12,U.elbL_=.25,U.legR_=0,U.kneeR_=.06,U.legL_=0,U.kneeL_=.06,Fr&&(U.shRX_R=.16,U.elbR_=.45,U.elbL_=.4)}function FS(){let n={tunic:jt(3968847),tunicDk:jt(3108413),skin:jt(15910556),hair:jt(14922575),white:jt(15789277),boots:jt(7227948),leather:jt(9068854),dark:jt(4206622),gold:jt(13214247),navy:jt(2832981),steel:jt(10465981),shieldF:jt(4477534),eye:jt(2300690),blade:jt(15266550,{emissive:new ct(3399880),emissiveIntensity:.38}),emblem:jt(3399880,{emissive:new ct(3399880),emissiveIntensity:1.1})};De=new Tt,Fi=new Tt,Fi.position.y=.55,De.add(Fi),Dr=new Tt,Dr.position.y=-.55,Fi.add(Dr),Lr=new Tt,Lr.position.y=.92,Dr.add(Lr);let t=new Ae(.078,.066,.4,7),e=new Ae(.056,.08,.32,7),i=new se(.11,.09,.2),s=new Ae(.086,.082,.09,7),r=G=>{let Y=new Tt;Y.position.set(G*.105,-.03,0),Lr.add(Y),Q(t,n.white,0,-.2,0,Y);let q=new Tt;q.position.set(0,-.4,0),Y.add(q),Q(s,n.boots,0,-.11,0,q),Q(e,n.boots,0,-.26,0,q);let ot=Q(i,n.boots,0,-.415,.045,q);return{hip:Y,knee:q,foot:ot}},o=r(-1),a=r(1);Np=o.hip,zp=o.knee,qg=o.foot,Fp=a.hip,Bp=a.knee,Yg=a.foot,ei=new Tt,ei.position.y=.04,Lr.add(ei);let l=Q(new Ae(.185,.295,.3,7),n.tunic,0,.09,0,ei);l.rotation.y=Math.PI/7,Q(new Ae(.225,.24,.075,7),n.dark,0,.205,0,ei),Q(new se(.075,.06,.03),n.gold,0,.205,.225,ei),Q(new Ae(.155,.215,.34,7),n.tunic,0,.385,0,ei),Q(new Ae(.105,.15,.1,7),n.tunicDk,0,.545,0,ei),Ir=new Tt,Ir.position.set(-.15,.5,-.185),Ir.rotation.set(.1,0,-2.6),ei.add(Ir),Q(new se(.095,.74,.05),n.leather,0,.44,0,Ir),Q(new se(.11,.06,.06),n.gold,0,.62,0,Ir),Ba=new Tt,Ba.position.set(.02,.3,-.27),Ba.rotation.set(0,Math.PI,.08),ei.add(Ba);let c=new Ae(.056,.05,.26,7),h=new Ae(.052,.068,.24,7),u=new pn(.056,7,6),f=new pn(.088,7,6),d=G=>{let Y=new Tt;Y.position.set(G*.265,.5,0),ei.add(Y),Q(f,n.tunic,G*.01,.015,0,Y).scale.set(1,.8,.9),Q(c,n.white,0,-.145,0,Y);let ot=new Tt;return ot.position.set(0,-.28,0),Y.add(ot),Q(h,n.leather,0,-.125,0,ot),Q(u,n.skin,0,-.27,0,ot),{sh:Y,elb:ot}},g=d(-1),x=d(1);du=g.sh,Dp=g.elb,pu=x.sh,Up=x.elb,Fa=new Tt,Fa.position.set(0,-.28,.01),Fa.rotation.x=2.35,Dp.add(Fa),Ur=new Tt,Ur.position.set(.09,-.15,0),Ur.rotation.set(0,Math.PI/2,Math.PI/2),Up.add(Ur),Tn=new Tt,Tn.position.y=.585,ei.add(Tn),Q(new pn(.155,9,8),n.skin,0,.105,.012,Tn).scale.set(.98,1,.94);let p=new Xe(.03,.09,4),v=Q(p,n.skin,-.15,.1,-.01,Tn);v.rotation.z=Math.PI/2+.15;let _=Q(p,n.skin,.15,.1,-.01,Tn);_.rotation.z=-Math.PI/2-.15;let y=new se(.03,.062,.02);lu=Q(y,n.eye,-.056,.105,.148,Tn),Zg=Q(y,n.eye,.056,.105,.148,Tn);let P=Q(new se(.21,.075,.06),n.hair,0,.2,.105,Tn);P.rotation.x=.28,Q(new se(.055,.12,.05),n.hair,-.105,.155,.085,Tn).rotation.set(.15,0,.25),Q(new se(.055,.12,.05),n.hair,.105,.155,.085,Tn).rotation.set(.15,0,-.25),Q(new se(.05,.09,.04),n.hair,0,.155,.125,Tn).rotation.x=.35;let I=Q(new Xe(.2,.26,8),n.tunic,0,.295,-.025,Tn);I.rotation.x=-.3,Q(new Ae(.2,.19,.085,8),n.tunicDk,0,.2,-.005,Tn),ys=new Tt,ys.position.set(0,.385,-.09),Tn.add(ys),Q(new Xe(.098,.26,7),n.tunic,0,.11,0,ys),Io=new Tt,Io.position.set(0,.225,0),ys.add(Io),Q(new Xe(.047,.22,6),n.tunic,0,.09,0,Io),Q(new pn(.028,6,5),n.tunicDk,0,.205,0,Io),wi=new Tt;let b=Q(new se(.052,.6,.016),n.blade,0,.415,0,wi);b.scale.z=1,b.geometry.translate(0,0,0);let M=Q(new Xe(.037,.09,4),n.blade,0,.755,0,wi);M.rotation.y=Math.PI/4,M.scale.z=.3,Q(new se(.16,.038,.05),n.gold,0,.105,0,wi),Q(new Ae(.021,.021,.15,6),n.navy,0,.015,0,wi),Q(new pn(.032,6,5),n.gold,0,-.065,0,wi),ai=new Tt;let D=Q(new Ae(.26,.235,.045,12),n.shieldF,0,0,0,ai);D.rotation.x=Math.PI/2;let H=Q(new Zi(.245,.026,6,12),n.gold,0,0,.02,ai),O=Q(new Ae(.095,.095,.022,3),n.emblem,0,-.01,.032,ai);return O.rotation.x=Math.PI/2,O.rotation.z=0,Q(new pn(.045,7,6),n.gold,0,.1,.035,ai).scale.set(1,1,.55),De.userData.rig={hips:Lr,torso:ei,headG:Tn,shR:du,shL:pu,legR:Np,legL:Fp,kneeR:zp,kneeL:Bp,capMid:ys,inner:Dr,sword:wi,shield:ai,backSheath:Ir,backShieldG:Ba,shieldGrip:Ur,gripR:Fa},sc(!1,!0),De}function sc(n,t){Fr===n&&!t||(Fr=n,n?(Fa.add(wi),wi.position.set(0,.04,0),wi.rotation.set(0,0,0),Ur.add(ai),ai.position.set(0,0,.02),ai.rotation.set(0,0,0)):(Ir.add(wi),wi.position.set(0,.06,0),wi.rotation.set(0,0,0),Ba.add(ai),ai.position.set(0,0,0),ai.rotation.set(0,0,0)))}var Kg=null;function BS(){qs||(qs=!0,oi=!1,vs=0,Gt={type:"dead",t:0,dur:999},Hp||(Hp=!0,Kg.emit("player-died")))}function OS(){qs=!1,Hp=!1,Gt=null,Fi.rotation.set(0,0,0),vs=0,Po=1.2,Lo=0,Dr.visible=!0}async function HS(n){Kg=n,FS(),ve=new R,n.world&&n.world.startPos?De.position.copy(n.world.startPos):De.position.set(0,0,250),De.position.y=n.getGroundHeight(De.position.x,De.position.z),De.rotation.y=Ue,n.scene.add(De),Jg(),Qg(1,500),we={obj:De,position:De.position,heading:Ue,velocity:ve,hp:3,maxHp:3,stamina:100,maxStamina:100,spiritOrbs:0,gems:0,onGround:!0,isRolling:!1,isBlocking:!1,damage(t,e){if(qs||Po>0||Gt&&Gt.type==="roll")return;Ha=uu,sc(!0);let i=!1;if(oi&&e){let o=Math.atan2(e.x-De.position.x,e.z-De.position.z);Math.abs(bo(Ue,o))<=70*Math.PI/180&&(i=!0)}let s=-Math.sin(Ue),r=-Math.cos(Ue);if(e){let o=De.position.x-e.x,a=De.position.z-e.z,l=Math.hypot(o,a);l>1e-4&&(s=o/l,r=a/l)}i?(t*=.2,ve.x+=s*2.5,ve.z+=r*2.5,n.audio.play("block"),zr.set(De.position.x+Math.sin(Ue)*.55,De.position.y+1.05,De.position.z+Math.cos(Ue)*.55),n.effects.burst(zr,"spark")):(ve.x=s*6.5,ve.z=r*6.5,An&&(ve.y=2.5,An=!1),Gt={type:"hurt",t:0,dur:Xg},vs=0,n.ui.flash("#ff2222",.25),n.audio.play("damage"),zr.set(De.position.x,De.position.y+1,De.position.z),n.effects.burst(zr,"hit")),Po=zS,we.hp=Ct(we.hp-t,0,we.maxHp),n.emit("player-damaged",{hp:we.hp,amount:t}),we.hp<=0&&BS()},heal(t){we.hp=Ct(we.hp+t,0,we.maxHp),qs&&we.hp>0&&OS()},addMaxHeart(){we.maxHp+=1,we.hp=we.maxHp},getAttackHit(){if(!Gt||Gt.type!=="atk")return null;let t=fu[Gt.idx],e=Gt.t/t.dur;return e<t.a0||e>t.a1?null:($g.set(De.position.x+Math.sin(Ue)*1.3,De.position.y+1,De.position.z+Math.cos(Ue)*1.3),Ip.damage=t.dmg,Ip.swingId=Gt.swingId,Ip)},teleport(t,e=Math.PI){De.position.copy(t),Ue=e,we.heading=e,De.rotation.y=e,ve.set(0,0,0),qs||(Gt=null,Fi.rotation.set(0,0,0),vs=0,Dr.visible=!0),oi=!1,we.isBlocking=!1,we.isRolling=!1,An=!0,we.onGround=!0,ka=0,Oa=0,Pr=0,Lo=0},setFrozen(t){Op=!!t,Op&&(oi=!1,Nr=0,Gt&&Gt.type!=="dead"&&(Gt=null,Fi.rotation.x=0,vs=0),ve.x=0,ve.z=0)}},n.player=we}function Og(n,t){sc(!0),Nr=0,Fg++,Gt={type:"atk",idx:t,t:0,dur:fu[t].dur,swingId:Fg,sfxDone:!1},Ha=uu,oi=!1,vs=0,!(n.camera3p&&n.camera3p.lockTarget)&&ni.lengthSq()>.5&&(Ue=Math.atan2(ni.x,ni.z))}function kS(n,t){we.stamina=Ct(we.stamina-Gg,0,we.maxStamina),cu=Vg,we.stamina<=0&&(Co=Wg);let e=t?Math.atan2(ni.x,ni.z):Ue;Gt={type:"roll",t:0,dur:kg,dx:Math.sin(e),dz:Math.cos(e)},Ue=e,Nr=0,oi=!1,n.audio.play("roll"),hu(n,0)}function hu(n,t){let e=t===1?qg:t===2?Yg:null;e?e.getWorldPosition(zr):(zr.copy(De.position),zr.y+=.06),n.effects.burst(zr,"dust")}function GS(n,t){if(!we)return;ec+=t;let e=De.position,i=n.input,s=!Op&&!qs;Po>0&&(Po-=t),Nr>0&&(Nr-=t),Lo>0&&(Lo-=t),Co>0&&(Co-=t),cu>0?cu-=t:we.stamina=Ct(we.stamina+US*t,0,we.maxStamina);let r=0,o=0;s&&(r=(i.keys.has("KeyW")||i.keys.has("ArrowUp")?1:0)-(i.keys.has("KeyS")||i.keys.has("ArrowDown")?1:0),o=(i.keys.has("KeyD")||i.keys.has("ArrowRight")?1:0)-(i.keys.has("KeyA")||i.keys.has("ArrowLeft")?1:0)),n.camera.getWorldDirection(Xs),Xs.y=0,Xs.lengthSq()<1e-6&&Xs.set(0,0,-1),Xs.normalize(),Pp.set(-Xs.z,0,Xs.x),ni.set(Xs.x*r+Pp.x*o,0,Xs.z*r+Pp.z*o);let a=ni.lengthSq()>1e-6;a&&ni.normalize();let l=n.camera3p?n.camera3p.lockTarget:null,c=!!(l&&l.alive!==!1&&l.pos),h=c?Math.atan2(l.pos.x-e.x,l.pos.z-e.z):0,u=s&&!Gt&&An&&(i.mouse.right||i.keys.has("KeyK"));u&&!oi&&(sc(!0),Ha=uu),oi=u,s&&(i.mouse.leftJust||i.justPressed("KeyJ"))&&(Nr=.3),s&&!Gt&&An&&(Nr>0?Og(n,0):i.justPressed("KeyC")&&Co<=0&&we.stamina>=Gg?kS(n,a):i.justPressed("Space")&&(ve.y=Hg,An=!1,oi=!1,n.audio.play("jump"),hu(n,0)));let f=n.world&&n.world.waterLevel!==void 0?n.world.waterLevel:-1e9,d=e.y<f+.4,g=!1;if(Gt){Gt.t+=t;let T=Gt.t/Gt.dur;if(Gt.type==="atk"){let S=fu[Gt.idx];!Gt.sfxDone&&T>=S.a0-.1&&(Gt.sfxDone=!0,n.audio.play(S.sfx));let I=$t(S.a0-.1,S.a0+.1,T)*(1-$t(S.a1,S.a1+.14,T));ve.x=gt(ve.x,Math.sin(Ue)*S.lunge*I,18,t),ve.z=gt(ve.z,Math.cos(Ue)*S.lunge*I,18,t),T<S.a0&&(c?Ue=On(Ue,h,16,t):a&&(Ue=On(Ue,Math.atan2(ni.x,ni.z),10,t))),T>=1&&(Nr>0&&Gt.idx<2&&An&&s?Og(n,Gt.idx+1):(Gt=null,vs=0))}else if(Gt.type==="roll"){let S=LS*(1-.55*$t(.55,1,T))*(d?.5:1);ve.x=Gt.dx*S,ve.z=Gt.dz*S,T>=1&&(Gt=null,Fi.rotation.x=0)}else Gt.type==="hurt"?(ve.x=gt(ve.x,0,5,t),ve.z=gt(ve.z,0,5,t),Gt.t>=Gt.dur&&(Gt=null)):Gt.type==="dead"&&(ve.x=gt(ve.x,0,8,t),ve.z=gt(ve.z,0,8,t))}else{let T=0;a?(T=Ng,s&&An&&!oi&&Co<=0&&we.stamina>0&&(i.keys.has("ShiftLeft")||i.keys.has("ShiftRight"))&&(g=!0,T*=PS,we.stamina=Ct(we.stamina-DS*t,0,we.maxStamina),cu=Vg,we.stamina<=0&&(Co=Wg)),oi&&(T*=.5),d&&(T*=.5),c?Ue=On(Ue,h,14,t):Ue=On(Ue,Math.atan2(ni.x,ni.z),g?15:11,t)):c&&(Ue=On(Ue,h,14,t));let S=An?12:3.5;ve.x=gt(ve.x,ni.x*T,S,t),ve.z=gt(ve.z,ni.z*T,S,t)}An||(ve.y+=IS*t),e.x+=ve.x*t,e.z+=ve.z*t,e.y+=ve.y*t;let x=n.colliders;for(let T=0;T<x.length;T++){let S=x[T],I=e.x-S.x,b=e.z-S.z,M=S.radius+NS,D=I*I+b*b;if(D>=M*M||S.height!==void 0&&e.y>n.getGroundHeight(S.x,S.z)+S.height)continue;if(D<1e-8){e.x-=Math.sin(Ue)*M,e.z-=Math.cos(Ue)*M;continue}let H=Math.sqrt(D),O=(M-H)/H;e.x+=I*O,e.z+=b*O}let m=n.playerBounds;m&&(e.x=Ct(e.x,m.minX,m.maxX),e.z=Ct(e.z,m.minZ,m.maxZ));let p=n.getGroundHeight(e.x,e.z);e.y<=p?(An||(mu=ve.y<-14,Lo=mu?.26:.15,n.audio.play("land"),hu(n,0)),e.y=p,ve.y=0,An=!0):An&&(e.y-p<.4?e.y=p:An=!1),Fr&&(oi||Gt&&Gt.type==="atk"?Ha=uu:(Ha-=t,Ha<=0&&!Gt&&sc(!1)));let v=Math.hypot(ve.x,ve.z),_=Ct(v/Ng,0,1.8);if(Pr=gt(Pr,An&&v>.6?1:0,10,t),An&&!Gt&&v>.4){ka+=t*(4.5+v*1.3);let T=Math.sin(ka);v>2.2&&Oa*T<=0&&Oa!==T&&(n.audio.play("step"),hu(n,Oa<0?1:2)),Oa=T}else Oa=0;Jg();let y=14;qs&&Gt?y=KS(Gt.t):Gt&&Gt.type==="roll"?y=$S(Ct(Gt.t/kg,0,1)):Gt&&Gt.type==="atk"?y=ZS(Gt.idx,Ct(Gt.t/fu[Gt.idx].dur,0,1)):Gt&&Gt.type==="hurt"?y=JS(Gt.t/Xg):An?(Pr>.06?WS(_,g,c):VS(ec,t),oi&&YS(),Lo>0&&qS()):y=XS(ve.y),Co>0&&!Gt&&An&&(U.torsoRX+=.12,U.headRX+=.16),Qg(t,y),Gt||(Fi.rotation.x=gt(Fi.rotation.x,0,20,t)),De.rotation.y=Ue+vs,Fr&&(oi?(Ur.getWorldQuaternion(Lp),Bg.set(-.18,Ue,0),ou.setFromEuler(Bg),Lp.invert().multiply(ou),ai.quaternion.slerp(Lp,1-Math.exp(-14*t))):ai.parent===Ur&&(ou.set(0,0,0,1),ai.quaternion.slerp(ou,1-Math.exp(-10*t))));let P=Math.sin(ec*2.2)*.06+Math.sin(ka*2)*.12*Pr;ys.rotation.x=gt(ys.rotation.x,-.8-Pr*.35-Ct(ve.y*.022,-.3,.3)+P,8,t),Io.rotation.x=gt(Io.rotation.x,-.62-Pr*.28+Math.sin(ec*2.2+.9)*.08+Math.sin(ka*2+1.2)*.15*Pr,7,t),ys.rotation.z=gt(ys.rotation.z,Math.sin(ec*1.7)*.05,6,t),Cp-=t,Cp<=0&&(Cp=2+Math.random()*3.5,ru=.13),ru>0&&(ru-=t),lu.scale.y=gt(lu.scale.y,ru>0?.12:1,30,t),Zg.scale.y=lu.scale.y,Dr.visible=qs||!(Po>0&&Math.floor(Po*14)%2===0),we.onGround=An,we.isRolling=!!(Gt&&Gt.type==="roll"),we.isBlocking=oi,we.heading=Ue}var au=n=>(n=Ct(n,0,1),1-(1-n)*(1-n)*(1-n));function VS(n,t){let e=Math.sin(n*1.7);if(U.torsoRX=.035+e*.022,U.hipsY=-.012+e*.01,U.shRZ_R=-.14-e*.02,U.shRZ_L=.14+e*.02,U.elbR_=(Fr?.52:.28)+e*.03,U.elbL_=(Fr?.42:.28)+e*.03,U.legR_=-.045,U.legL_=.055,U.kneeR_=.09,U.kneeL_=.06,ic+=t,nc>0){nc-=t;let i=Math.sin(Ct(1-nc/1.5,0,1)*Math.PI);U.headRY=Rp*i,U.headRX=.05*i,U.torsoRY=Rp*i*.14}else ic>=zg&&(ic=0,zg=2.5+Math.random()*4,nc=1.5,Rp=(Math.random()<.5?-1:1)*(.5+Math.random()*.35))}function WS(n,t,e){ic=0,nc=0;let i=ka,s=Ct(n,0,1),r=.34+.44*s+(t?.13:0),o=.36+.48*s+(t?.17:0),a=Math.sin(i),l=-a,c=Math.cos(i);if(U.legR_=-a*r,U.legL_=-l*r,U.kneeR_=Math.max(0,c)*(.6+.7*s),U.kneeL_=Math.max(0,-c)*(.6+.7*s),U.shRX_R=a*o,U.shRX_L=l*o,U.elbR_=.4+Math.max(0,-a)*.65+(Fr?.12:0),U.elbL_=.4+Math.max(0,-l)*.65,U.shRZ_R=-.12,U.shRZ_L=.12,U.torsoRX=.06+s*.12+(t?.22:0),U.torsoRY=a*.09,U.hipsY=(-.055+Math.abs(c)*.055)*s,U.headRX=-U.torsoRX*.55,e){let h=bo(Ue,Math.atan2(ni.x,ni.z));U.hipsRY=Ct(h*.45,-.85,.85),U.torsoRZ=-Math.sin(h)*.07}}function XS(n){let t=Ct(n/Hg,-1,1);return U.torsoRX=.13-t*.07,U.legR_=-.58+t*.1,U.kneeR_=1.05,U.legL_=.32,U.kneeL_=.5,U.shRX_R=-.5-t*.3,U.shRZ_R=-.6,U.shRX_L=-.5-t*.3,U.shRZ_L=.6,U.elbR_=.55,U.elbL_=.55,U.headRX=n<0?.12:-.08,10}function qS(){let n=Ct(Lo/(mu?.26:.15),0,1)*(mu?1:.5);U.hipsY-=.22*n,U.kneeR_+=.95*n,U.kneeL_+=.95*n,U.legR_-=.48*n,U.legL_-=.42*n,U.torsoRX+=.32*n,U.shRX_R-=.3*n,U.shRX_L-=.3*n}function YS(){U.shRX_L=-1.18,U.shRZ_L=-.55,U.elbL_=1.4,U.shRX_R=.35,U.shRZ_R=-.4,U.elbR_=.8,U.torsoRX+=.1,U.torsoRY=.18,U.hipsY-=.06,U.legR_-=.16,U.legL_+=.13,U.kneeR_+=.28,U.kneeL_+=.16,U.headRX=-.04}function ZS(n,t){if(ic=0,n===0){let s=$t(0,.2,t),r=au((t-.24)/.3),o=$t(.8,1,t);return U.torsoRY=mt(-.85*s,.95,r)*(1-o*.45),U.torsoRX=.1+r*.16,U.shRX_R=mt(mt(.15,-.4,s),-1.35,r),U.shRZ_R=mt(mt(-.12,-1.15,s),.45,r),U.elbR_=mt(mt(.45,1.05,s),.1,r),U.shRX_L=mt(.1,.55,r),U.shRZ_L=.38,U.elbL_=.7,U.hipsY=-.05-r*.03,U.legR_=-.38*r,U.legL_=.3*r,U.kneeR_=.3,U.kneeL_=.26,U.headRY=-U.torsoRY*.45,t<.24?16:30}if(n===1){let s=$t(0,.22,t),r=au((t-.26)/.3),o=$t(.82,1,t);return U.torsoRY=mt(.9*s,-.95,r)*(1-o*.45),U.torsoRX=.12+r*.12,U.shRX_R=mt(mt(-.4,-.85,s),-1.25,r),U.shRZ_R=mt(mt(.1,.75,s),-1.25,r),U.elbR_=mt(mt(.5,1.15,s),.14,r),U.shRX_L=.3,U.shRZ_L=mt(.2,.8,r),U.elbL_=.6,U.hipsY=-.06,U.legR_=.3*r,U.legL_=-.38*r,U.kneeR_=.26,U.kneeL_=.3,U.headRY=-U.torsoRY*.45,t<.26?16:30}let e=$t(0,.24,t),i=au((t-.26)/.42);return vs=Math.PI*2*au((t-.26)/.52),t>=.99&&(vs=0),U.torsoRY=mt(-.9*e,-.15,i),U.torsoRX=.16+e*.1,U.shRX_R=mt(mt(.15,-.5,e),-.9,i),U.shRZ_R=mt(mt(-.12,-.55,e),-1.5,i),U.elbR_=mt(mt(.45,1.2,e),.05,i),U.shRX_L=-.35,U.shRZ_L=mt(.2,.95,i),U.elbL_=.45,U.hipsY=-.1-Math.sin(Ct(i,0,1)*Math.PI)*.07,U.legR_=-.32,U.legL_=.36,U.kneeR_=.45,U.kneeL_=.52,U.headRY=.1,t<.24?15:26}function $S(n){let t=n<.5?2*n*n:1-(2-2*n)*(2-2*n)/2;return Fi.rotation.x=Math.PI*2*t,U.hipsY=-.32,U.torsoRX=.85,U.headRX=.6,U.legR_=-1.65,U.legL_=-1.55,U.kneeR_=2.2,U.kneeL_=2.3,U.shRX_R=-.9,U.shRZ_R=-.35,U.elbR_=2.1,U.shRX_L=-.9,U.shRZ_L=.35,U.elbL_=2.1,26}function JS(n){let t=Math.sin(Ct(n,0,1)*Math.PI);return U.torsoRX=-.4*t,U.headRX=-.32*t,U.shRX_R=-.5*t,U.shRZ_R=-.75*t-.1,U.shRX_L=-.5*t,U.shRZ_L=.75*t+.1,U.elbR_=.8,U.elbL_=.8,U.hipsY=-.06*t,U.legR_=-.28*t,U.kneeR_=.45*t,U.legL_=.15*t,22}function KS(n){let t=$t(0,.5,n),e=$t(.65,1.35,n);return U.hipsY=-.52*t-.14*e,U.kneeR_=2.35*t,U.kneeL_=2.35*t,U.legR_=.12*t,U.legL_=.12*t,U.torsoRX=.22*t+.6*e,U.headRX=.28*t+.4*e,U.shRX_R=.2*t-.55*e,U.shRZ_R=-.3,U.shRX_L=.2*t-.55*e,U.shRZ_L=.3,U.elbR_=.3,U.elbL_=.3,Fi.rotation.x=1.15*e,8}function Qg(n,t){let e=(i,s,r)=>{i[s]=gt(i[s],r,t,n)};e(Lr.position,"y",.92+U.hipsY),e(Lr.rotation,"y",U.hipsRY),e(ei.rotation,"x",U.torsoRX),e(ei.rotation,"y",U.torsoRY-U.hipsRY),e(ei.rotation,"z",U.torsoRZ),e(Tn.rotation,"x",U.headRX-U.torsoRX*.4),e(Tn.rotation,"y",U.headRY),e(Tn.rotation,"z",U.headRZ),e(du.rotation,"x",U.shRX_R),e(du.rotation,"z",U.shRZ_R),e(Dp.rotation,"x",-Math.max(0,U.elbR_)),e(pu.rotation,"x",U.shRX_L),e(pu.rotation,"z",U.shRZ_L),e(Up.rotation,"x",-Math.max(0,U.elbL_)),e(Np.rotation,"x",U.legR_),e(zp.rotation,"x",Math.max(0,U.kneeR_)),e(Fp.rotation,"x",U.legL_),e(Bp.rotation,"x",Math.max(0,U.kneeL_))}var cc={};cs(cc,{init:()=>dw,update:()=>pw});var kp=-.35,Gp=1.25,jg=4,tx=13,ex=.0032,nx=.0026,QS=.011,_u=1.6,jS=.45,Vp=.4,ix=8,Mu=55,tw=61,ew=7,nw=32,iw=40,sw=-650,Br=0,gi=.3,xu=7.5,Va=7.5,Ys=7.5,qa="follow",yu=null,rc=0,oc=0,ac=1,Ga=Mu,Wa=Mu,ts=null,Xa=0,Wp=0,Do=[0,0,0,0,0,0],vu=null,_s=new R(0,_u,250),xi=new R(0,8,262),li=new R,Uo=new R,Or=new R,rw=new R(0,0,-560);function ow(n){return n&&(n.pos||n.root&&n.root.position)||null}function lc(n,t){let e=t||null;e!==ts&&(ts=e,vu&&(vu.lockTarget=e),n.emit("lockon",{target:e}))}function aw(n){let t=Ct(n||0,0,1);if(!(t<=0)){Xa=Math.max(Xa,t),Wp=0;for(let e=0;e<6;e++)Do[e]=Math.random()*Math.PI*2}}function lw(n,t,e,i,s,r){let o=0,a=Math.max(t.y-(n.getGroundHeight(t.x,t.z)+Vp),.001);for(let l=1;l<=ix;l++){let c=r*l/ix,h=t.y+i*c,u=n.getGroundHeight(t.x+e*c,t.z+s*c)+Vp,f=h-u;if(f<0){let d=a/(a-f);return Ct(o+(c-o)*d-.2,1.3,r)}o=c,a=Math.max(f,.001)}return r}function cw(n,t){if(n!=="follow"&&ts&&lc(t,null),qa=n,rc=0,n==="title"&&(oc=0),n==="follow"){li.copy(xi).sub(_s);let e=li.length();e>.05&&(Br=Math.atan2(li.x,li.z),gi=Ct(Math.asin(Ct(li.y/e,-1,1)),kp,Gp)),Va=Ct(e,1.5,120),Ys=Va,ac=0}}function hw(n,t){let e=n.camera,i=n.player,s=n.input.mouse,r=n.state;if((r==="playing"||r==="shrine"||r==="boss")&&n.input.justPressed("KeyQ")){if(ts)lc(n,null);else if(n.combat&&typeof n.combat.nearestTargetable=="function"){let y=n.combat.nearestTargetable(i.position,nw);y&&lc(n,y)}}let a=ow(ts);ts&&(!ts.alive||!a||a.distanceTo(i.position)>iw)&&(lc(n,null),a=null),ts&&a?(Br-=s.dx*ex*.35,Br=On(Br,Math.atan2(i.position.x-a.x,i.position.z-a.z),4.2,t),gi=Ct(gi+s.dy*nx,kp,Gp),gi=gt(gi,Ct(gi,.22,.6),2.6,t)):(Br-=s.dx*ex,gi=Ct(gi+s.dy*nx,kp,Gp)),xu=Ct(xu+s.wheel*QS,jg,tx),ac=Math.min(1,ac+t/1.1);let l=$t(0,1,ac),c=mt(2.2,12,l),h=mt(1.8,6,l);if(ac<1&&(gi=gt(gi,Ct(gi,.12,.85),(1-l)*2.5,t)),li.copy(i.position),li.y+=_u,ts&&a){Uo.set(a.x,a.y+1.2,a.z).sub(li);let y=Uo.length();y>.001&&li.addScaledVector(Uo,Math.min(.32,3.5/y)),li.y+=.25}_s.lerp(li,1-Math.exp(-c*t));let u=Ct(xu+(ts?1.5:0),jg,tx+2);Va=gt(Va,u,h,t);let f=Math.cos(gi),d=Math.sin(Br)*f,g=Math.sin(gi),x=Math.cos(Br)*f,m=lw(n,_s,d,g,x,Va);m<Ys?Ys=m:Ys=gt(Ys,m,3.2,t),xi.set(_s.x+d*Ys,_s.y+g*Ys,_s.z+x*Ys);let p=n.getGroundHeight(xi.x,xi.z)+Vp;xi.y<p&&(xi.y=p),e.position.copy(xi),Or.copy(_s),Or.y+=jS,e.lookAt(Or);let v=i.velocity;Wa=(v?Math.hypot(v.x,v.z):0)>ew?tw:Mu}function uw(n,t){let e=n.camera,i=n.player,s=n.world&&n.world.castleGatePos||rw;rc+=t;let r=1.5;if(qa==="title"){oc+=t;let a=i.position,l=.85+oc*.07,c=14.5+Math.sin(oc*.1+.6)*2.4,h=2.9+Math.sin(oc*.06+1.5)*1.3;li.set(a.x+Math.sin(l)*c,a.y+h,a.z+Math.cos(l)*c);let u=.16+.34*Math.max(0,Math.cos(l));Or.set(-a.x,0,sw-a.z),Or.lengthSq()>.001&&Or.normalize(),Uo.set(a.x+Or.x*26*u,a.y+_u+5.5*u,a.z+Or.z*26*u),Wa=50,r=1.7}else if(qa==="bossIntro"){let a=$t(0,6.5,rc);li.set(s.x+mt(-9,7,a),s.y+mt(1.4,10.5,a),s.z+mt(30,24,a)),Uo.set(s.x,s.y+mt(5,26,a),s.z+mt(-4,-16,a)),Wa=52,r=1.4}else{let a=$t(0,16,rc);li.set(s.x+Math.sin(rc*.05)*8,s.y+mt(5,130,a),s.z+mt(45,90,a)),Uo.set(s.x,s.y+mt(18,2,a),s.z+mt(-30,620,a)),Wa=56,r=1.2}_s.lerp(Uo,1-Math.exp(-2.3*t)),xi.lerp(li,1-Math.exp(-r*t));let o=n.getGroundHeight(xi.x,xi.z)+1;xi.y<o&&(xi.y=o),e.position.copy(xi),e.lookAt(_s)}function fw(n,t){if(Xa<=0)return;Wp+=t;let e=Xa*Math.exp(-3.4*Wp);if(e<.003){Xa=0;return}let i=n.time.elapsed,s=n.camera;s.position.x+=e*.32*(Math.sin(i*33+Do[0])*.62+Math.sin(i*51+Do[1])*.38),s.position.y+=e*.26*(Math.sin(i*39+Do[2])*.62+Math.sin(i*57+Do[3])*.38),s.position.z+=e*.2*Math.sin(i*29+Do[4]),s.rotateZ(e*.035*Math.sin(i*43+Do[5]))}async function dw(n){let t=n.player;t&&t.position&&_s.set(t.position.x,t.position.y+_u,t.position.z),xi.copy(n.camera.position),Ga=n.camera.fov||Mu,Wa=Ga,Br=0,gi=.3,xu=7.5,Va=7.5,Ys=7.5,qa="follow",yu=null,ts=null,Xa=0,vu={lockTarget:null,setLockTarget(e){lc(n,e||null)},shake(e){aw(e)},cinematic(e){yu=e==="title"||e==="bossIntro"||e==="ending"?e:null}},n.camera3p=vu,n.on("state",e=>{let i=e&&e.to;(i==="title"||i==="gameover")&&(yu=null)})}function pw(n,t){let e=n.camera,i=n.player;if(!e||!i||!i.position)return;let s=n.state==="title"?"title":yu||"follow";s!==qa&&cw(s,n),qa==="follow"?hw(n,t):uw(n,t),Ga=gt(Ga,Wa,4.5,t),Math.abs(e.fov-Ga)>.002&&(e.fov=Ga,e.updateProjectionMatrix()),fw(n,t)}var Su={};cs(Su,{init:()=>Qw,update:()=>jw});var Me=ri(12220178),mw=-558,gw=120,xw=2,yw=140,lx=90,cx=50,sx=30,Zs={hp:2,radius:.7,walk:1.15,run:4.2,notice:18,range:2,reach:2.7,dmg:.5,height:1.25,hitY:.7},Za={hp:4,radius:.65,speed:4.2*1.3,range:2,reach:2.8,dmg:.5,height:1.8,hitY:1,max:6},Hr={hp:2,radius:.6,near:8,far:20,fireCd:2.5,dmg:.5,height:.6,hitY:0},$a=null,Wn=null,Bi=[],Zp=[],hx=[],uc=[],Gr=[],jp=[],t0=[],Eu=[],Ya=[],sn=null,$p=!1,Xp=0,bu=0,It=null,Ot=null,Vr=new R;function Wr(n,t){try{$a.audio&&$a.audio.play(n,t)}catch{}}function es(n,t,e){try{$a.effects&&$a.effects.burst(n,t,e)}catch{}}function e0(n){return n.pos||n.root&&n.root.position||null}function ns(n,t,e){if(e<mw)return!1;let i=n.world?n.world.waterLevel:-9999;return n.getGroundHeight(t,e)>i-.5}function Jp(n,t,e,i=8){if(ns(n,t,e))return{x:t,z:e};for(let s=0;s<12;s++){let r=Me()*Math.PI*2,o=2+Me()*i,a=t+Math.sin(r)*o,l=e+Math.cos(r)*o;if(ns(n,a,l))return{x:a,z:l}}return{x:t,z:e}}function vw(){It={sphere:new pn(1,10,8),cone:new Xe(1,1,6),cone4:new Xe(1,1,4),limb:new Ae(1,.82,2,7),box:new se(1,1,1),skirt:new Ae(.26,.37,.26,9,1,!0),rib:new Zi(.17,.028,5,10),rock:new Ih(1,0),gem:new xo(.16,0)},It.gem.scale(1,1.45,1),It.tent=new Ae(.95,.95,1.7,3,1,!1,Math.PI/2),It.tent.rotateZ(Math.PI/2),It.tent.translate(0,.48,0);let n=new Nl;n.moveTo(2.5,2.5),n.bezierCurveTo(2.5,2.5,2,0,0,0),n.bezierCurveTo(-3,0,-3,3.5,-3,3.5),n.bezierCurveTo(-3,5.5,-1,7.7,2.5,9.5),n.bezierCurveTo(6,7.7,8,5.5,8,3.5),n.bezierCurveTo(8,3.5,8,0,5,0),n.bezierCurveTo(3.5,0,2.5,2.5,2.5,2.5),It.heart=new Ph(n,{depth:2.2,bevelEnabled:!0,bevelThickness:.8,bevelSize:.8,bevelSegments:1,steps:1}),It.heart.center(),It.heart.rotateZ(Math.PI),It.heart.scale(.035,.035,.035),Ot={gobSkin:jt(10310195),gobDark:jt(8142632),cloth:jt(11901524,{side:fn}),wood:jt(7819824),eyeY:Oe(16765502,1.6),bone:jt(15262416),blade:jt(12174287),grip:jt(5126952),eyeR:Oe(16726832,1.8),wispCore:Oe(13732863,2.1),wispMid:Oe(10112480,1.1,{transparent:!0,opacity:.45,depthWrite:!1}),wispShell:Oe(8009152,.7,{transparent:!0,opacity:.22,depthWrite:!1,blending:on}),stone:jt(9078135),flameO:Oe(16747050,1.7),flameI:Oe(16766826,2.2),tent:jt(9069122),heart:Oe(16731501,1.1),gem:Oe(5111688,1.4),fireball:Oe(13659135,2.4),fireHalo:Oe(11693055,1.2,{transparent:!0,opacity:.35,depthWrite:!1,blending:on}),flash:new Ke({color:16777215})}}function n0(n){let t=[];return n.traverse(e=>{e.isMesh&&t.push({m:e,mat:e.material})}),t}function _w(){let n=new Tt,t=new Tt;t.position.y=.5,n.add(t),Q(It.sphere,Ot.gobSkin,0,.16,0,t).scale.set(.3,.35,.27),Q(It.sphere,Ot.gobDark,0,.1,.1,t).scale.set(.2,.22,.17);let s=Q(It.skirt,Ot.cloth,0,-.02,0,t),r=new Tt;r.position.set(0,.52,.02),t.add(r),Q(It.sphere,Ot.gobSkin,0,0,0,r).scale.set(.26,.24,.25);let a=Q(It.cone4,Ot.gobSkin,-.26,.08,-.02,r);a.scale.set(.09,.34,.045),a.rotation.z=1.25,a.rotation.y=-.25;let l=Q(It.cone4,Ot.gobSkin,.26,.08,-.02,r);l.scale.set(.09,.34,.045),l.rotation.z=-1.25,l.rotation.y=.25;let c=Q(It.cone,Ot.gobDark,0,-.03,.27,r);c.scale.set(.05,.16,.05),c.rotation.x=Math.PI/2,Q(It.sphere,Ot.eyeY,-.1,.04,.21,r).scale.setScalar(.045),Q(It.sphere,Ot.eyeY,.1,.04,.21,r).scale.setScalar(.045);let f=new Tt;f.position.set(-.31,.34,0),t.add(f),Q(It.limb,Ot.gobSkin,0,-.16,0,f).scale.set(.065,.18,.065),Q(It.sphere,Ot.gobDark,0,-.36,0,f).scale.setScalar(.08);let g=new Tt;g.position.set(.31,.34,0),t.add(g),Q(It.limb,Ot.gobSkin,0,-.16,0,g).scale.set(.065,.18,.065),Q(It.sphere,Ot.gobDark,0,-.36,0,g).scale.setScalar(.08);let m=new Tt;m.position.set(0,-.36,.02),g.add(m);let p=Q(It.limb,Ot.wood,0,0,.22,m);p.scale.set(.035,.24,.035),p.rotation.x=Math.PI/2,Q(It.sphere,Ot.wood,0,0,.46,m).scale.set(.09,.09,.13);let _=new Tt;_.position.set(-.12,.34,0),n.add(_),Q(It.limb,Ot.gobSkin,0,-.12,0,_).scale.set(.07,.14,.07),Q(It.sphere,Ot.gobDark,0,-.28,.04,_).scale.set(.085,.055,.115);let P=new Tt;return P.position.set(.12,.34,0),n.add(P),Q(It.limb,Ot.gobSkin,0,-.12,0,P).scale.set(.07,.14,.07),Q(It.sphere,Ot.gobDark,0,-.28,.04,P).scale.set(.085,.055,.115),{root:n,p:{body:t,head:r,earL:a,earR:l,armL:f,armR:g,legL:_,legR:P,club:m},flash:n0(n)}}function Mw(){let n=new Tt,t=new Tt;t.position.y=.98,n.add(t),Q(It.box,Ot.bone,0,0,0,t).scale.set(.26,.12,.16),Q(It.limb,Ot.bone,0,.2,0,t).scale.set(.03,.17,.03);for(let x=0;x<3;x++){let m=Q(It.rib,Ot.bone,0,.26+x*.1,0,t);m.rotation.x=Math.PI/2;let p=1-x*.1;m.scale.set(p,p*.78,.78)}let s=Q(It.limb,Ot.bone,0,.55,0,t);s.scale.set(.022,.19,.022),s.rotation.z=Math.PI/2;let r=new Tt;r.position.set(0,.72,0),t.add(r),Q(It.sphere,Ot.bone,0,0,0,r).scale.set(.145,.155,.15),Q(It.box,Ot.bone,0,-.13,.02,r).scale.set(.13,.055,.11),Q(It.sphere,Ot.eyeR,-.055,.01,.125,r).scale.setScalar(.032),Q(It.sphere,Ot.eyeR,.055,.01,.125,r).scale.setScalar(.032);let l=new Tt;l.position.set(-.24,.55,0),t.add(l),Q(It.limb,Ot.bone,0,-.27,0,l).scale.set(.028,.26,.028),Q(It.sphere,Ot.bone,0,-.27,0,l).scale.setScalar(.042),Q(It.sphere,Ot.bone,0,-.55,0,l).scale.setScalar(.05);let c=new Tt;c.position.set(.24,.55,0),t.add(c),Q(It.limb,Ot.bone,0,-.27,0,c).scale.set(.028,.26,.028),Q(It.sphere,Ot.bone,0,-.27,0,c).scale.setScalar(.042),Q(It.sphere,Ot.bone,0,-.55,0,c).scale.setScalar(.05);let h=new Tt;h.position.set(0,-.56,.02),c.add(h);let u=Q(It.limb,Ot.grip,0,0,.02,h);u.scale.set(.018,.07,.018),u.rotation.x=Math.PI/2,Q(It.box,Ot.grip,0,0,.12,h).scale.set(.15,.035,.035),Q(It.box,Ot.blade,0,0,.45,h).scale.set(.07,.018,.62);let f=Q(It.cone4,Ot.blade,0,0,.8,h);f.scale.set(.035,.07,.009),f.rotation.x=Math.PI/2;let d=new Tt;d.position.set(-.1,.86,0),n.add(d),Q(It.limb,Ot.bone,0,-.42,0,d).scale.set(.03,.4,.03),Q(It.sphere,Ot.bone,0,-.42,0,d).scale.setScalar(.042),Q(It.box,Ot.bone,0,-.84,.03,d).scale.set(.07,.035,.15);let g=new Tt;return g.position.set(.1,.86,0),n.add(g),Q(It.limb,Ot.bone,0,-.42,0,g).scale.set(.03,.4,.03),Q(It.sphere,Ot.bone,0,-.42,0,g).scale.setScalar(.042),Q(It.box,Ot.bone,0,-.84,.03,g).scale.set(.07,.035,.15),{root:n,p:{body:t,head:r,armL:l,armR:c,legL:d,legR:g,sword:h},flash:n0(n)}}function bw(){let n=new Tt,t=new Tt;n.add(t);let e=new qt(It.sphere,Ot.wispCore);e.scale.setScalar(.19),t.add(e);let i=new qt(It.sphere,Ot.wispMid);i.scale.setScalar(.27),t.add(i);let s=new qt(It.sphere,Ot.wispShell);s.scale.setScalar(.4),t.add(s);let r=new Tt;r.rotation.x=.6,n.add(r);let o=new qt(It.sphere,Ot.wispCore);o.scale.setScalar(.045),o.position.set(.5,0,0),r.add(o);let a=new qt(It.sphere,Ot.wispCore);return a.scale.setScalar(.035),a.position.set(-.48,.06,0),r.add(a),n.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),{root:n,p:{coreG:t,shell:s,orbit:r},flash:n0(n)}}function Ew(n,t){let e=new Tt;e.position.copy(t);let i=t.y;for(let h=0;h<6;h++){let u=h/6*Math.PI*2+Me()*.3,f=Q(It.rock,Ot.stone,Math.sin(u)*.55,.07,Math.cos(u)*.55,e);f.scale.setScalar(.11+Me()*.06),f.rotation.set(Me()*3,Me()*3,Me()*3)}for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,f=Q(It.limb,Ot.wood,Math.sin(u)*.16,.22,Math.cos(u)*.16,e);f.scale.set(.045,.26,.045),f.rotation.x=Math.cos(u)*.65,f.rotation.z=-Math.sin(u)*.65}let s=Q(It.cone,Ot.flameO,0,.42,0,e);s.scale.set(.2,.45,.2),s.castShadow=!1;let r=Q(It.cone,Ot.flameI,0,.38,0,e);r.scale.set(.11,.3,.11),r.castShadow=!1;let o=Me()*Math.PI*2,a=Q(It.tent,Ot.tent,Math.sin(o)*2.6,0,Math.cos(o)*2.6,e);a.rotation.y=o+Math.PI/2+(Me()-.5),a.position.y=n.getGroundHeight(t.x+a.position.x,t.z+a.position.z)-i;let l=o+2+Me(),c=Q(It.box,Ot.wood,Math.sin(l)*1.9,.19,Math.cos(l)*1.9,e);return c.scale.setScalar(.38),c.rotation.y=Me()*1.5,c.position.y=n.getGroundHeight(t.x+c.position.x,t.z+c.position.z)-i+.19,{group:e,flameO:s,flameI:r}}function i0(n,t,e,i){let s={root:n.root,pos:n.root.position,hp:t.hp,maxHp:t.hp,alive:!0,radius:t.radius,name:e,isBoss:!1,damage(r,o){s0(this,r,o)},_own:!0,_gone:!1,type:i,p:n.p,flash:n.flash,state:"patrol",t:0,animT:Me()*6,phase:Me()*Math.PI*2,yaw:Me()*Math.PI*2,kb:new R,home:new R,staggerT:0,flashT:0,farAcc:0,colT:0,colCache:[],restT:0,hasTarget:!1,tx:0,tz:0,yOff:0,height:t.height,hitY:t.hitY,hitDone:!1,distP:999,camp:null,spot:null,hoverY:0,fireT:Me()*1.5,dustT:0,_lastSwingId:-1};return s.root.rotation.y=s.yaw,s}function Sw(n,t,e,i){let s=i0(_w(),Zs,"\u30B4\u30D6\u30EA\u30F3","goblin");return s.pos.set(t,n.getGroundHeight(t,e),e),s.home.copy(s.pos),s.camp=i,s.restT=Me()*2,i.members.push(s),Bi.push(s),Wn.add(s.root),s}function ux(n,t){t.clearedAt=-1;let e=2+Math.floor(Me()*3);for(let i=0;i<e;i++){let s=i/e*Math.PI*2+Me(),r=1.8+Me()*1.8,o=Jp(n,t.center.x+Math.sin(s)*r,t.center.z+Math.cos(s)*r,5);Sw(n,o.x,o.z,t)}}function ww(n,t,e){let i=i0(Mw(),Za,"\u30DC\u30FC\u30F3\u30BD\u30EB\u30B8\u30E3\u30FC","skeleton");return i.pos.set(t,n.getGroundHeight(t,e),e),i.home.copy(i.pos),i.state="rise",i.yOff=-1.7,i.dustT=0,uc.push(i),Bi.push(i),Wn.add(i.root),es(i.pos.clone(),"dust",{count:14}),i}function fx(n,t){let e=i0(bw(),Hr,"\u9B54\u5C0E\u30A6\u30A3\u30B9\u30D7","wisp"),i=n.getGroundHeight(t.pos.x,t.pos.z);return e.pos.set(t.pos.x,i+1.5,t.pos.z),e.home.copy(t.pos),e.hoverY=i+1.5,e.state="hover",e.spot=t,t.enemy=e,Bi.push(e),Wn.add(e.root),e}function Tw(n){if(n.flashT<=0)for(let t of n.flash)t.m.material=Ot.flash;n.flashT=.08}function dx(n){for(let t of n.flash)t.m.material=t.mat}function s0(n,t,e){let i=$a;if(!i||!n||n._gone||!n.alive)return;if(!n._own){let r=!!n._dmgLock;if(r)n.hp=Math.max(0,(n.hp??1)-t),n.hp<=0&&(n.alive=!1);else if(typeof n.damage=="function"){n._dmgLock=!0;try{n.damage(t,e)}catch{}n._dmgLock=!1}else n.hp=Math.max(0,(n.hp??1)-t),n.hp<=0&&(n.alive=!1);if(!r){let o=e0(n);o&&(rx(o.x,o.y+2.2,o.z,t),Vr.set(o.x,o.y+1.5,o.z),es(Vr.clone(),"hit")),Wr("hit");let a=!n.alive||n.hp<=0;i.emit("enemy-hit",{enemy:n,pos:o?o.clone():null,damage:t,killed:a}),a&&!n._killEmitted&&(n._killEmitted=!0,i.emit("enemy-killed",{enemy:n,pos:o?o.clone():null}))}return}if(n.hp=Math.max(0,n.hp-t),Tw(n),e){let r=n.pos.x-e.x,o=n.pos.z-e.z,a=Math.hypot(r,o)||1,l=n.type==="wisp"?3.2:5;n.kb.x+=r/a*l,n.kb.z+=o/a*l}n.staggerT=.35,rx(n.pos.x,n.root.position.y+n.height+.35,n.pos.z,t),Vr.set(n.pos.x,n.root.position.y+n.hitY+.3,n.pos.z),es(Vr.clone(),"hit"),Wr("hit");let s=n.hp<=0;i.emit("enemy-hit",{enemy:n,pos:n.pos.clone(),damage:t,killed:s}),s?(n.alive=!1,n.state="dying",n.t=0,i.emit("enemy-killed",{enemy:n,pos:n.pos.clone()})):n.state!=="rise"&&n.state!=="dying"&&n.state!=="crumble"&&n.type!=="wisp"&&(n.state="stunned",n.t=0)}function Kp(n,t,e,i){if(Vr.set(t.pos.x,t.root.position.y+.5,t.pos.z),es(Vr.clone(),"death"),i&&Wr("kill"),e&&Bw(n,t.pos.x,t.root.position.y,t.pos.z),t.flashT>0&&dx(t),Wn.remove(t.root),t._gone=!0,t.alive=!1,t.camp){let s=t.camp.members.indexOf(t);s>=0&&t.camp.members.splice(s,1),t.camp.members.length===0&&(t.camp.clearedAt=n.time.elapsed)}if(t.spot&&(t.spot.enemy=null,t.spot.deadAt=n.time.elapsed),t.type==="skeleton"){let s=uc.indexOf(t);s>=0&&uc.splice(s,1)}}function Aw(){for(let n=0;n<12;n++){let t=document.createElement("canvas");t.width=128,t.height=80;let e=t.getContext("2d"),i=new Sa(t);i.colorSpace=Ln;let s=new ba({map:i,transparent:!0,depthTest:!1,depthWrite:!1}),r=new Cl(s);r.scale.set(.9,.56,1),r.visible=!1,r.renderOrder=60,Wn.add(r),t0.push({sp:r,g:e,tex:i,mat:s,t:99,active:!1,last:""})}}function rx(n,t,e,i){let s=null,r=null,o=-1;for(let l of t0){if(!l.active){s=l;break}l.t>o&&(o=l.t,r=l)}if(s=s||r,!s)return;let a=i%1===0?String(i):i.toFixed(1);if(s.last!==a){let l=s.g;l.clearRect(0,0,128,80),l.font='700 46px Georgia, "Times New Roman", serif',l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle="rgba(30,24,18,0.7)",l.strokeText(a,64,42),l.fillStyle="#ffffff",l.fillText(a,64,42),s.tex.needsUpdate=!0,s.last=a}s.active=!0,s.t=0,s.sp.visible=!0,s.mat.opacity=1,s.sp.position.set(n+(Me()-.5)*.4,t,e+(Me()-.5)*.4)}function Rw(n){for(let t of t0){if(!t.active)continue;t.t+=n,t.sp.position.y+=n*1.1*Math.max(.15,1-t.t);let e=1+.35*Math.exp(-t.t*9);t.sp.scale.set(.9*e,.56*e,1),t.mat.opacity=t.t<.35?1:Ct(1-(t.t-.35)/.5,0,1),t.t>=.9&&(t.active=!1,t.sp.visible=!1)}}var ox=null;function Cw(){let n=Ei(128,t=>{t.font="900 104px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=18,t.strokeStyle="rgba(150,30,24,0.95)",t.strokeText("!",64,66),t.fillStyle="#fff8ee",t.fillText("!",64,66)});ox=new ba({map:n,transparent:!0,depthTest:!1,depthWrite:!1});for(let t=0;t<6;t++){let e=new Cl(ox);e.visible=!1,e.renderOrder=61,Wn.add(e),Eu.push({sp:e,e:null,t:0,active:!1})}}function Iw(n){let t=Eu.find(e=>!e.active)||Eu[0];t.active=!0,t.t=0,t.e=n,t.sp.visible=!0,t.sp.position.set(n.pos.x,n.root.position.y+n.height+.6,n.pos.z)}function Pw(n){for(let t of Eu){if(!t.active)continue;if(t.t+=n,t.t>.5||!t.e||t.e._gone){t.active=!1,t.sp.visible=!1,t.e=null;continue}t.sp.position.set(t.e.pos.x,t.e.root.position.y+t.e.height+.6+t.t*.25,t.e.pos.z);let i=.72*$t(0,.1,t.t)*(1+.3*Math.exp(-t.t*12));t.sp.scale.set(i,i,1)}}var kr=240;function Lw(){let n=new Float32Array(kr*3),t=new Float32Array(kr*3),e=new Float32Array(kr*3),i=new Float32Array(kr),s=new Float32Array(kr);for(let c=0;c<kr;c++)n[c*3+1]=-9999;let r=new Ze;r.setAttribute("position",new Le(n,3).setUsage(Ji)),r.setAttribute("color",new Le(t,3).setUsage(Ji));let o=Ei(64,(c,h)=>{let u=c.createRadialGradient(h/2,h/2,0,h/2,h/2,h/2);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.4,"rgba(255,255,255,0.55)"),u.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=u,c.fillRect(0,0,h,h)}),a=new Ll({size:.5,map:o,vertexColors:!0,transparent:!0,opacity:.9,blending:on,depthWrite:!1,sizeAttenuation:!0}),l=new Ea(r,a);l.frustumCulled=!1,l.renderOrder=20,Wn.add(l),sn={geo:r,pos:n,col:t,base:e,life:i,max:s,head:0}}function Dw(n,t,e,i,s,r,o){let a=sn.head%kr;sn.head++,sn.pos[a*3]=n+(Me()-.5)*.12,sn.pos[a*3+1]=t+(Me()-.5)*.12,sn.pos[a*3+2]=e+(Me()-.5)*.12,sn.base[a*3]=i,sn.base[a*3+1]=s,sn.base[a*3+2]=r,sn.life[a]=o,sn.max[a]=o}function Uw(n){let t=!1;for(let e=0;e<kr;e++){if(sn.life[e]<=0)continue;t=!0,sn.life[e]-=n;let i=Math.max(0,sn.life[e]/sn.max[e]);sn.col[e*3]=sn.base[e*3]*i,sn.col[e*3+1]=sn.base[e*3+1]*i,sn.col[e*3+2]=sn.base[e*3+2]*i,sn.life[e]<=0&&(sn.pos[e*3+1]=-9999)}t&&(sn.geo.attributes.position.needsUpdate=!0,sn.geo.attributes.color.needsUpdate=!0)}function Nw(){for(let n=0;n<10;n++){let t=new Tt,e=new qt(It.sphere,Ot.fireball);e.scale.setScalar(.16),e.castShadow=!1,t.add(e);let i=new qt(It.sphere,Ot.fireHalo);i.scale.setScalar(.3),i.castShadow=!1,t.add(i),t.visible=!1,Wn.add(t),jp.push({g:t,core:e,halo:i,active:!1,vel:new R,life:0,emitT:0})}}function zw(n,t){let e=jp.find(s=>!s.active);if(!e)return;e.active=!0,e.life=0,e.emitT=0,e.g.visible=!0,e.g.position.set(t.pos.x,t.root.position.y+.1,t.pos.z);let i=n.player.position;Vr.set(i.x-e.g.position.x,i.y+1-e.g.position.y,i.z-e.g.position.z).normalize(),e.vel.copy(Vr).multiplyScalar(11),Wr("magic"),es(e.g.position.clone(),"magic",{count:6})}function qp(n,t){t&&es(n.g.position.clone(),t),n.active=!1,n.g.visible=!1}function Fw(n,t){let e=n.player.position;for(let i of jp){if(!i.active)continue;i.life+=t,i.g.position.addScaledVector(i.vel,t);let s=i.g.position,r=1+Math.sin(n.time.elapsed*22+i.life*7)*.15;for(i.core.scale.setScalar(.16*r),i.halo.scale.setScalar(.3*(2-r)),i.emitT-=t;i.emitT<=0;)i.emitT+=.03,Dw(s.x,s.y,s.z,.85,.5,1,.45);let o=e.x-s.x,a=e.y+1-s.y,l=e.z-s.z;if(o*o+a*a+l*l<1.2*1.2){try{n.player.damage(Hr.dmg,s)}catch{}Wr("burn"),qp(i,"fire");continue}if(s.y<=n.getGroundHeight(s.x,s.z)+.15){qp(i,"fire");continue}i.life>6&&qp(i,"magic")}}function Bw(n,t,e,i){if(Me()<.4)ax(n,"heart",t,e,i);else{let s=1+Math.floor(Me()*3);for(let r=0;r<s;r++)ax(n,"gem",t,e,i)}}function ax(n,t,e,i,s){if(Gr.length>36){let o=Gr.shift();Wn.remove(o.mesh)}let r=new qt(t==="heart"?It.heart:It.gem,t==="heart"?Ot.heart:Ot.gem);r.castShadow=!0,r.position.set(e,i+.7,s),Wn.add(r),Gr.push({kind:t,mesh:r,vel:new R((Me()-.5)*2.6,3.2+Me()*1.6,(Me()-.5)*2.6),age:0,grounded:!1,baseY:0,phase:Me()*Math.PI*2,dieK:0})}function Ow(n,t){let e=n.player.position;for(let i=Gr.length-1;i>=0;i--){let s=Gr[i],r=s.mesh;if(s.age+=t,s.age>sx){s.dieK+=t/.4;let h=Math.max(.001,1-s.dieK);r.scale.setScalar(h),s.dieK>=1&&(Wn.remove(r),Gr.splice(i,1));continue}if(r.visible=s.age<sx-4||Math.sin(n.time.elapsed*16)>-.2,s.grounded)s.baseY=n.getGroundHeight(r.position.x,r.position.z)+.25,r.position.y=s.baseY+.1+Math.sin(n.time.elapsed*3+s.phase)*.08,r.rotation.y+=t*2.4;else{s.vel.y-=12*t,r.position.addScaledVector(s.vel,t);let h=n.getGroundHeight(r.position.x,r.position.z)+.25;r.position.y<=h&&s.vel.y<0&&(s.grounded=!0,s.baseY=h)}let o=e.x-r.position.x,a=e.z-r.position.z,l=e.y+.8-r.position.y,c=Math.sqrt(o*o+l*l+a*a);if(s.kind==="gem"){if(c<2.5&&c>.001){let h=(6.5*(1-c/2.8)+2.5)*t/c;r.position.x+=o*h,r.position.y+=l*h,r.position.z+=a*h}c<.85&&(n.player.gems+=1,n.emit("pickup",{kind:"gem",pos:r.position.clone()}),Wr("pickup"),es(r.position.clone(),"spark",{color:8257456,count:8}),Wn.remove(r),Gr.splice(i,1))}else c<1.15&&(n.player.heal(1),n.emit("pickup",{kind:"heart",pos:r.position.clone()}),Wr("heart"),es(r.position.clone(),"heal"),Wn.remove(r),Gr.splice(i,1))}}function $s(n,t,e){n.yaw=Math.atan2(t-n.pos.x,e-n.pos.z)}function hc(n,t,e,i,s,r){let o=e-t.pos.x,a=i-t.pos.z,l=Math.hypot(o,a);if(l<.001)return!0;t.yaw=Math.atan2(o,a);let c=Math.min(s*r,l),h=t.pos.x+o/l*c,u=t.pos.z+a/l*c;return ns(n,h,u)?(t.pos.x=h,t.pos.z=u,!0):(t.hasTarget=!1,!1)}function Hw(n,t){for(let e=0;e<6;e++){let i=Me()*Math.PI*2,s=2+Me()*6,r=t.home.x+Math.sin(i)*s,o=t.home.z+Math.cos(i)*s;if(ns(n,r,o)){t.tx=r,t.tz=o,t.hasTarget=!0,t.t=0;return}}t.restT=1.5}function kw(n,t,e){if(t.colT-=e,t.colT<=0){t.colT=.7,t.colCache.length=0;let i=n.colliders;if(i)for(let s=0;s<i.length&&t.colCache.length<6;s++){let r=i[s],o=r.x-t.pos.x,a=r.z-t.pos.z;o*o+a*a<100&&t.colCache.push(r)}}for(let i of t.colCache){let s=t.pos.x-i.x,r=t.pos.z-i.z,o=(i.radius||.5)+t.radius*.6,a=s*s+r*r;if(a<o*o&&a>1e-4){let l=Math.sqrt(a),c=o-l,h=t.pos.x+s/l*c,u=t.pos.z+r/l*c;ns(n,h,u)&&(t.pos.x=h,t.pos.z=u)}}}function Yp(n,t,e){let i=n.p;n.animT+=t*(5+e*6.5);let s=Math.sin(n.animT),r=.45+e*.5;i.legL.rotation.x=s*r,i.legR.rotation.x=-s*r,i.armL.rotation.x=gt(i.armL.rotation.x,-s*r*.7,14,t),i.armR.rotation.x=gt(i.armR.rotation.x,s*r*.45,14,t),i.body.position.y=.5+Math.abs(Math.cos(n.animT))*.05*(.4+e),i.body.rotation.x=gt(i.body.rotation.x,.05+e*.22,8,t),i.body.position.x=0,i.earL&&(i.earL.rotation.z=1.25+Math.sin(n.animT*.7)*.07,i.earR.rotation.z=-1.25-Math.cos(n.animT*.7)*.07,i.head.rotation.y=gt(i.head.rotation.y,0,8,t))}function Qp(n,t){let e=n.p;n.animT+=t*2,e.body.position.y=.5+Math.sin(n.animT)*.015,e.body.position.x=0,e.legL.rotation.x=gt(e.legL.rotation.x,0,8,t),e.legR.rotation.x=gt(e.legR.rotation.x,0,8,t),e.armL.rotation.x=gt(e.armL.rotation.x,0,6,t),e.armR.rotation.x=gt(e.armR.rotation.x,0,6,t),e.body.rotation.x=gt(e.body.rotation.x,.04,6,t),e.head&&(e.head.rotation.y=Math.sin(n.animT*.35)*.3)}function Gw(n,t,e){let i=n.p;n.animT+=t*9.5;let s=Math.sin(n.animT);i.legL.rotation.x=s*.85,i.legR.rotation.x=-s*.85,i.armL.rotation.x=gt(i.armL.rotation.x,-s*.5-.15,14,t),i.armR.rotation.x=gt(i.armR.rotation.x,s*.3-.2,14,t);let r=e.time.elapsed;i.armL.rotation.z=Math.sin(r*43+n.phase)*.045,i.armR.rotation.z=-Math.sin(r*47+n.phase)*.045,i.head.rotation.z=Math.sin(r*31+n.phase)*.05,i.body.position.y=.98+Math.abs(Math.cos(n.animT))*.06,i.body.rotation.x=gt(i.body.rotation.x,.22,8,t)}function r0(n,t,e){t.t+=e;let i=t.p;if(t.type==="wisp"){let r=Math.min(1,t.t/.45);t.root.scale.setScalar(Math.max(.01,1-.9*r*r)),i.coreG.rotation.y+=e*14,t.t>=.45&&(es(t.pos.clone(),"magic",{count:10}),Kp(n,t,!0,!0));return}t.t<.16&&i.body?i.body.rotation.z=Math.sin(t.t*46)*.12:i.body&&(i.body.rotation.z=gt(i.body.rotation.z,0,10,e));let s=$t(.12,.55,t.t);t.root.rotation.x=-s*1.45,t.yOff=-.06*s,t.t>=.68&&Kp(n,t,!0,!0)}function Vw(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0;switch(t.t+=e,t.state){case"patrol":{if(o&&i<Zs.notice){t.state="alert",t.t=0,Iw(t),Wr("alert"),$s(t,r.x,r.z);break}if(Math.hypot(t.home.x-t.pos.x,t.home.z-t.pos.z)>20){hc(n,t,t.home.x,t.home.z,Zs.run*.8,e),Yp(t,e,.7);break}if(t.restT>0){t.restT-=e,Qp(t,e);break}(!t.hasTarget||t.t>9)&&Hw(n,t),t.hasTarget&&(hc(n,t,t.tx,t.tz,Zs.walk,e),Math.hypot(t.tx-t.pos.x,t.tz-t.pos.z)<.4&&(t.hasTarget=!1,t.restT=1+Me()*2.5),Yp(t,e,.15));break}case"alert":{$s(t,r.x,r.z),s.body.rotation.x=gt(s.body.rotation.x,-.14,12,e),s.body.position.y=.5+Math.sin(t.t*30)*.02,t.t>=.5&&(t.state="chase",t.t=0);break}case"chase":{if(!o||i>30){t.state="patrol",t.t=0,t.hasTarget=!1;break}if($s(t,r.x,r.z),i<=Zs.range){t.state="windup",t.t=0;break}hc(n,t,r.x,r.z,Zs.run,e),Yp(t,e,1);break}case"windup":{$s(t,r.x,r.z);let a=Math.min(1,t.t/.6);s.armR.rotation.x=gt(s.armR.rotation.x,-2.6,16,e),s.armL.rotation.x=gt(s.armL.rotation.x,-.5,10,e),s.body.rotation.x=gt(s.body.rotation.x,-.12,10,e),s.body.position.x=Math.sin(n.time.elapsed*55)*.022*a,s.legL.rotation.x=gt(s.legL.rotation.x,.25,10,e),s.legR.rotation.x=gt(s.legR.rotation.x,-.25,10,e),t.t>=.6&&(t.state="swing",t.t=0,t.hitDone=!1);break}case"swing":{let a=Math.min(1,t.t/.16);if(s.armR.rotation.x=mt(-2.6,1.05,a*(2-a)),s.body.rotation.x=mt(-.12,.42,a),s.body.position.x=0,!t.hitDone&&t.t>=.1&&(t.hitDone=!0,o&&i<Zs.reach))try{n.player.damage(Zs.dmg,t.pos)}catch{}t.t>=.3&&(t.state="recover",t.t=0);break}case"recover":{s.armR.rotation.x=gt(s.armR.rotation.x,0,6,e),s.armL.rotation.x=gt(s.armL.rotation.x,0,6,e),s.body.rotation.x=gt(s.body.rotation.x,.05,6,e),s.body.position.y=.5+Math.sin(t.t*5)*.02,$s(t,r.x,r.z),t.t>=1&&(t.t=0,t.state=o?i<=Zs.range+.3?"windup":i<30?"chase":"patrol":"patrol");break}case"stunned":{s.body.rotation.x=gt(s.body.rotation.x,-.5,14,e),s.armR.rotation.x=gt(s.armR.rotation.x,-.6,10,e),t.t>=.3&&(t.state="chase",t.t=0);break}case"dying":r0(n,t,e);return}}function Ww(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0;switch(t.t+=e,t.state){case"rise":{let a=Math.min(1,t.t/.8);t.yOff=-1.7*(1-a*a*(3-2*a)),t.dustT-=e,t.dustT<=0&&(t.dustT=.22,es(t.pos.clone(),"dust",{count:6})),s.armL.rotation.x=-2.2*(1-a),s.armR.rotation.x=-2.2*(1-a),t.t>=.8&&(t.state="chase",t.t=0,t.yOff=0);break}case"chase":{if(!o){Qp(t,e);break}if($s(t,r.x,r.z),i<=Za.range){t.state="windup",t.t=0;break}i<100?(hc(n,t,r.x,r.z,Za.speed,e),Gw(t,e,n)):Qp(t,e);break}case"windup":{$s(t,r.x,r.z);let a=Math.min(1,t.t/.45);s.armR.rotation.x=gt(s.armR.rotation.x,-2.9,18,e),s.armR.rotation.z=gt(s.armR.rotation.z,.4,12,e),s.body.rotation.x=gt(s.body.rotation.x,-.1,10,e),s.body.position.x=Math.sin(n.time.elapsed*50)*.012*a,t.t>=.45&&(t.state="swing",t.t=0,t.hitDone=!1);break}case"swing":{let a=Math.min(1,t.t/.14);if(s.armR.rotation.x=mt(-2.9,1.15,a*(2-a)),s.armR.rotation.z=mt(.4,-.15,a),s.body.rotation.x=mt(-.1,.4,a),s.body.position.x=0,!t.hitDone&&t.t>=.08&&(t.hitDone=!0,o&&i<Za.reach))try{n.player.damage(Za.dmg,t.pos)}catch{}t.t>=.24&&(t.state="recover",t.t=0);break}case"recover":{s.armR.rotation.x=gt(s.armR.rotation.x,-.2,8,e),s.armR.rotation.z=gt(s.armR.rotation.z,0,8,e),s.body.rotation.x=gt(s.body.rotation.x,.15,8,e),$s(t,r.x,r.z),t.t>=.7&&(t.state="chase",t.t=0);break}case"stunned":{s.body.rotation.x=gt(s.body.rotation.x,-.45,14,e),t.t>=.18&&(t.state="chase",t.t=0);break}case"crumble":{let a=Math.min(1,t.t/.6);t.yOff=-1.3*a*a,t.root.scale.set(1-a*.35,Math.max(.05,1-a*.85),1-a*.35),t.root.rotation.z=a*.4,t.dustT-=e,t.dustT<=0&&(t.dustT=.2,es(t.pos.clone(),"dust",{count:4})),t.t>=.6&&Kp(n,t,!1,!1);break}case"dying":r0(n,t,e);return;default:{t.state="chase";break}}}function Xw(n,t,e,i){let s=t.p,r=n.player.position,o=n.player.hp>0,a=n.time.elapsed;if(t.t+=e,t.state==="dying"){r0(n,t,e);return}let l=n.getGroundHeight(t.pos.x,t.pos.z);t.hoverY=gt(t.hoverY,l+1.5,3,e),t.root.position.y=t.hoverY+Math.sin(a*1.7+t.phase)*.25,s.orbit.rotation.y+=e*2.6;let c=1+Math.sin(a*5+t.phase)*.1;s.shell.scale.setScalar(.4*c);let h=$t(Hr.fireCd-.4,Hr.fireCd,t.fireT);if(s.coreG.scale.setScalar(1+h*.5+Math.sin(a*9+t.phase)*.05),o&&i<45){$s(t,r.x,r.z);let u=0,f=0,d=0,g=(r.x-t.pos.x)/(i||1),x=(r.z-t.pos.z)/(i||1);if(i<Hr.near)u=-g,f=-x,d=3;else if(i>Hr.far)u=g,f=x,d=2.2;else{let v=Math.sin(a*.35+t.phase)>0?1:-1;u=-x*v,f=g*v,d=1.2}let m=t.pos.x+u*d*e,p=t.pos.z+f*d*e;ns(n,m,p)&&(t.pos.x=m,t.pos.z=p),i<32&&(t.fireT+=e,t.fireT>=Hr.fireCd&&(t.fireT=Me()*.3,zw(n,t)))}else if(t.fireT=Math.min(t.fireT,Hr.fireCd-.6),Math.hypot(t.home.x-t.pos.x,t.home.z-t.pos.z)>6)hc(n,t,t.home.x,t.home.z,1.5,e);else{let f=t.pos.x+Math.sin(a*.5+t.phase)*.5*e,d=t.pos.z+Math.cos(a*.4+t.phase)*.5*e;ns(n,f,d)&&(t.pos.x=f,t.pos.z=d)}}function qw(n,t,e){let i=n.player.position,s=Math.hypot(i.x-t.pos.x,i.z-t.pos.z);t.distP=s;let r=s<yw;if(t.root.visible!==r&&(t.root.visible=r),s>gw&&t.state!=="dying"&&t.state!=="crumble"){if(t.farAcc+=e,t.farAcc<xw)return;e=Math.min(t.farAcc,.5),t.farAcc=0}if(t.flashT>0&&(t.flashT-=e,t.flashT<=0&&dx(t)),t.kb.lengthSq()>4e-4){let o=t.pos.x+t.kb.x*e,a=t.pos.z+t.kb.z*e;ns(n,o,a)&&(t.pos.x=o,t.pos.z=a),t.kb.multiplyScalar(Math.max(0,1-7*e))}t.staggerT>0&&(t.staggerT-=e),t.type==="goblin"?Vw(n,t,e,s):t.type==="skeleton"?Ww(n,t,e,s):Xw(n,t,e,s),!t._gone&&(t.type!=="wisp"&&(t.root.position.y=n.getGroundHeight(t.pos.x,t.pos.z)+t.yOff,s<100&&t.alive&&kw(n,t,e)),t.root.rotation.y=On(t.root.rotation.y,t.yaw,10,e))}function Yw(n){Ya.length=0;for(let t of Bi)t._own&&t.alive&&t.type!=="wisp"&&t.distP<90&&Ya.push(t);for(let t=0;t<Ya.length;t++)for(let e=t+1;e<Ya.length;e++){let i=Ya[t],s=Ya[e],r=s.pos.x-i.pos.x,o=s.pos.z-i.pos.z,a=i.radius+s.radius-.35,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l),h=(a-c)*.5,u=r/c*h,f=o/c*h;ns(n,i.pos.x-u,i.pos.z-f)&&(i.pos.x-=u,i.pos.z-=f),ns(n,s.pos.x+u,s.pos.z+f)&&(s.pos.x+=u,s.pos.z+=f)}}}function Zw(n,t){let e=n.player.position,i=n.time.elapsed;for(let s=0;s<Zp.length;s++){let r=Zp[s],o=Math.hypot(e.x-r.center.x,e.z-r.center.z),a=o<170;r.props.group.visible!==a&&(r.props.group.visible=a),a&&(r.props.flameO.scale.set(.2*(1+Math.sin(i*11+s*2.1)*.12),.45*(1+Math.sin(i*13.7+s)*.2),.2*(1+Math.cos(i*10.3+s)*.12)),r.props.flameI.scale.set(.11*(1+Math.sin(i*17+s)*.18),.3*(1+Math.sin(i*19.3+s*1.7)*.25),.11)),bu<=0&&r.members.length===0&&r.clearedAt>=0&&i-r.clearedAt>lx&&o>cx&&ux(n,r)}}function $w(n,t){let e=n.time.isNight;if(e&&n.state==="playing"&&n.player.hp>0&&(Xp-=t,Xp<=0&&(Xp=2.2+Me()*1.5,uc.length<Za.max))){let i=n.player.position;for(let s=0;s<8;s++){let r=Me()*Math.PI*2,o=30+Me()*30,a=i.x+Math.sin(r)*o,l=i.z+Math.cos(r)*o,c="plains";try{c=n.world.getBiome(a,l)}catch{}if(c==="plains"&&ns(n,a,l)){ww(n,a,l);break}}}if($p&&!e)for(let i of uc)i.state!=="crumble"&&i.state!=="dying"&&(i.alive=!1,i.state="crumble",i.t=0);$p=e}function Jw(n){let t=n.player.position,e=n.time.elapsed;for(let i of hx)!i.enemy&&e-i.deadAt>lx&&Math.hypot(t.x-i.pos.x,t.z-i.pos.z)>cx&&fx(n,i)}function Kw(n){let t=null;try{t=n.player.getAttackHit?n.player.getAttackHit():null}catch{}if(!t||!t.pos)return;let e=t.radius||1;for(let i of Bi){if(!i.alive||i._gone||i._lastSwingId===t.swingId)continue;let s=e0(i);if(!s)continue;let r=t.pos.x-s.x,o=t.pos.z-s.z,a=e+(i.radius||.6);if(r*r+o*o>a*a)continue;let l=i._own?i.root.position.y+i.hitY:s.y,c=i._own?2.4:4.5;Math.abs(t.pos.y-l)>c||(i._lastSwingId=t.swingId,s0(i,t.damage??1,n.player.position))}}async function Qw(n){$a=n,vw(),Wn=new Tt,Wn.name="combat",n.scene.add(Wn),Aw(),Cw(),Lw(),Nw();let t=[[70,150],[-130,90],[150,-40],[410,190],[500,100],[-340,330],[470,-350]];for(let[s,r]of t){let o=Jp(n,s,r,14),a=new R(o.x,n.getGroundHeight(o.x,o.z),o.z),l={center:a,members:[],clearedAt:-1,props:Ew(n,a)};Wn.add(l.props.group),Zp.push(l),ux(n,l)}let e=[[505,-390],[585,-470],[530,-515],[612,-408]],i=[];try{for(let s=-880;s<=880;s+=80)for(let r=-520;r<=880;r+=80)n.world.getBiome(s,r)==="ruins"&&i.push([s,r])}catch{}for(let s of i){if(e.length>=8)break;e.every(([r,o])=>Math.hypot(r-s[0],o-s[1])>60)&&e.push(s)}for(let[s,r]of e){let o=Jp(n,s,r,10),a={pos:new R(o.x,0,o.z),enemy:null,deadAt:-999};hx.push(a),fx(n,a)}$p=n.time.isNight,n.combat={enemies:Bi,nearestTargetable(s,r=32){if(!s)return null;let o=null,a=r;for(let l of Bi){if(!l.alive||l._gone)continue;let c=e0(l);if(!c)continue;let h=s.distanceTo(c);h<=a&&(a=h,o=l)}return o},registerEnemy(s){s&&Bi.indexOf(s)<0&&Bi.push(s)},damageEnemy(s,r,o){s0(s,r,o)}}}function jw(n,t){if(!(!n.combat||!n.player)&&n.state!=="shrine"){bu-=t,Zw(n,t),bu<=0&&(bu=1,Jw(n)),$w(n,t),Ot.wispCore.emissiveIntensity=1.9+Math.sin(n.time.elapsed*8.5)*.55;for(let e=Bi.length-1;e>=0;e--){let i=Bi[e];i._own&&(qw(n,i,t),i._gone&&Bi.splice(e,1))}Yw(n),Kw(n),Fw(n,t),Ow(n,t),Rw(t),Pw(t),Uw(t)}}var Au={};cs(Au,{init:()=>o2,update:()=>E2});var Oi=3399880,t2=6744790,Xr=15777354,e2=13214247,xx=[{x:180,z:80,name:"\u529B\u306E\u7960"},{x:-360,z:260,name:"\u6C34\u93E1\u306E\u7960"},{x:430,z:40,name:"\u6A39\u970A\u306E\u7960"},{x:430,z:-300,name:"\u70C8\u706B\u306E\u7960"}],n2=3e3,i2=3e3,s2=300,px=4,mx=1.5,xt=null,Rn=new R,r2=new R;function Kt(n,t,e,i,s,r,o=0){let a=new se(n,t,e);return o&&a.rotateY(o),a.translate(i,s,r),a}function Mn(n,t,e,i,s,r,o){let a=new Ae(n,t,e,i);return a.translate(s,r,o),a}function No(n,t,e,i=24){let s=new Zi(n,t,6,i);return s.rotateX(Math.PI/2),s.translate(0,e,0),s}function Cn(n){let t=Di(n,!1);for(let e of n)e.dispose();return t}function He(n,t,e,i=!0){let s=new qt(t,e);return s.castShadow=i,s.receiveShadow=i,n.add(s),s}async function o2(n){xt={ctx:n,api:null,exts:[],rooms:[],prompt:null,savedGround:null,savedBounds:null,added:[],inside:!1,seq:null,enterCool:0},xt.M={extStone:jt(9078135),wall:jt(4998969),floor:jt(5985606),dark:jt(2828323),door:jt(7433048),mov:jt(8222314),wood:jt(7227951),gold:Oe(e2,.35),glowAdd:new Ke({color:Oi,transparent:!0,opacity:.55,blending:on,depthWrite:!1}),padAdd:new Ke({color:Oi,transparent:!0,opacity:.8,blending:on,depthWrite:!1}),beamAdd:new Ke({color:11466216,transparent:!0,opacity:0,blending:on,depthWrite:!1,side:fn}),orb:Oe(Oi,2.3),candle:Oe(t2,2,{transparent:!0,opacity:.92})},a2(n),c2(n),xt.api={list:xx.map(t=>({pos:new R(t.x,n.world.getHeight(t.x,t.z),t.z),name:t.name,completed:!1})),completedCount:0,active:-1},n.shrines=xt.api,n.on("state",({from:t,to:e})=>{xt.inside&&t==="shrine"&&(e==="gameover"||e==="title")&&vx(n)})}function a2(n){let t=[];t.push(Mn(6.4,6.9,.55,8,0,.28,0)),t.push(Mn(5.3,5.8,.55,8,0,.82,0)),t.push(Mn(4.4,4.9,.5,8,0,1.32,0)),t.push(Mn(3.1,3.4,3,8,0,3.07,0)),t.push(Kt(.5,3.2,.5,-1.45,3.15,3)),t.push(Kt(.5,3.2,.5,1.45,3.15,3)),t.push(Kt(3.7,.55,.72,0,4.95,3)),t.push(Mn(4.2,4.2,.18,8,0,4.62,0));let e=[new tt(4.2,0),new tt(3.55,.38),new tt(2.75,1.05),new tt(1.9,1.85),new tt(1.1,2.55),new tt(.5,3.05),new tt(.05,3.42)],i=new Ch(e,8);i.translate(0,4.7,0),t.push(i);for(let f of[-1,1])t.push(Mn(.24,.36,1.15,6,f*3.4,.58,5.2)),t.push(Mn(.58,.4,.32,6,f*3.4,1.3,5.2));let s=Cn(t),r=[];r.push(Kt(2,2.7,.14,0,2.78,3.02)),r.push(No(3.42,.07,4.25)),r.push(No(4.58,.05,1.62)),r.push(No(4.24,.05,4.56));for(let f=1;f<=7;f++){let d=Kt(.15,1.9,.1,0,3,3.02);d.rotateY(f*Math.PI/4),r.push(d)}let o=new xr(1.25,20);o.rotateX(-Math.PI/2),o.translate(0,.06,5.2),r.push(o);let a=new pn(.36,10,8);a.translate(0,8.3,0),r.push(a),r.push(No(.52,.05,7.9,16));let l=Cn(r),c=[];for(let f of[-1,1])c.push(Mn(.02,.32,.85,6,f*3.4,1.9,5.2)),c.push(Mn(.01,.16,.5,5,f*3.4,2.28,5.2));let h=Cn(c),u=new Ae(.24,.36,56,8,1,!0);u.translate(0,32,0);for(let f=0;f<4;f++){let d=xx[f],g=n.world.getHeight(d.x,d.z),x=Math.hypot(d.x,d.z)||1,m=-d.x/x,p=-d.z/x,v=Math.atan2(m,p),_=new Tt;_.position.set(d.x,g,d.z),_.rotation.y=v;let y=Oe(Oi,1.3),P=Oe(6089435,1.8,{transparent:!0,opacity:.9}),T=new Ke({color:Oi,transparent:!0,opacity:.1,blending:on,depthWrite:!1,side:fn});He(_,s,xt.M.extStone),He(_,l,y,!1),He(_,h,P,!1),_.add(new qt(u,T)),n.scene.add(_),n.colliders.push({x:d.x,z:d.z,radius:5.9,height:9});for(let S of[-1,1]){let I=S*3.4,b=5.2;n.colliders.push({x:d.x+I*Math.cos(v)+b*Math.sin(v),z:d.z-I*Math.sin(v)+b*Math.cos(v),radius:.62,height:2.2})}xt.exts.push({group:_,runeMat:y,flameMat:P,beaconMat:T,doorPos:new R(d.x+m*3.1,g,d.z+p*3.1),exitPos:new R(d.x+m*7.6,g,d.z+p*7.6),exitHeading:Math.atan2(m,p)})}}function l2(n){let t=xt.exts[n];t.runeMat.color.setHex(Xr),t.runeMat.emissive.setHex(Xr),t.flameMat.color.setHex(16762965),t.flameMat.emissive.setHex(16762965),t.beaconMat.color.setHex(Xr)}function c2(n){for(let t=0;t<4;t++){let e=new R(n2,0,i2+t*s2),i=new Tt;i.position.copy(e),i.visible=!1,n.scene.add(i);let s=t===3?-16.4:-20.4,r={index:t,group:i,origin:e,northZ:s,bounds:{minX:e.x-12.55,maxX:e.x+12.55,minZ:e.z+s+.85,maxZ:e.z+16.05},colliders:[],doorCol:null,door:null,doorOpen:!1,doorAnim:0,doorDelay:0,chest:null,chestWorld:null,solved:!1,p:null,entranceWorld:new R(e.x,0,e.z+11),padWorld:new R(e.x,0,e.z+13.8),ground:null,update:null,resetPuzzle:null,promptOf:null};h2(n,r),t===0?p2(n,r):t===1?x2(n,r):t===2?v2(n,r):M2(n,r);for(let o of[-10.5,10.5])for(let a of[9,0,-8.5])t===3&&a!==9||r.colliders.push({x:e.x+o,z:e.z+a,radius:.95,height:6});xt.rooms.push(r)}}function h2(n,t){let e=t.index,i=t.group,s=xt.M,r=t.northZ,o=[],a=[],l=[];e===2?(o.push(Kt(26,1,19,0,-.5,7.5)),o.push(Kt(26,1,13,0,-.5,-13.5)),a.push(Kt(26,.5,5.4,0,-6.75,-4.5)),a.push(Kt(26,5.4,.45,0,-3.5,-1.78)),a.push(Kt(26,5.4,.45,0,-3.5,-7.22))):e===3?(o.push(Kt(26,1,11,0,-.5,11.5)),o.push(Kt(8,1.7,4,-6,-.85,-14)),o.push(Kt(8,1.7,4,6,-.85,-14)),a.push(Kt(26,.4,23.4,0,-3.1,-5.5))):o.push(Kt(26,1,37,0,-.5,-1.5));let c=16.9-r,h=(16.9+r)/2;if(o.push(Kt(27.6,6,.8,0,3,16.9)),o.push(Kt(27.6,6,.8,0,3,r)),o.push(Kt(.8,6,c,-13.4,3,h)),o.push(Kt(.8,6,c,13.4,3,h)),e!==3){o.push(Kt(11.35,6,.9,-7.33,3,-10)),o.push(Kt(11.35,6,.9,7.33,3,-10)),o.push(Kt(4.2,1.5,.9,0,5.25,-10));for(let T of[-1,1])for(let S of[2.6,4.8,7,9.2,11.4])t.colliders.push({x:t.origin.x+T*S,z:t.origin.z-10,radius:1.15,height:6})}for(let T of[-10.5,10.5])for(let S of[9,0,-8.5]){if(e===3&&S!==9)continue;o.push(Mn(.5,.66,6,7,T,2.5,S)),o.push(Kt(1.5,.35,1.5,T,5.62,S));let I=No(.62,.05,4.7,16);I.translate(T,0,S),l.push(I)}l.push(Kt(.08,.1,c-1,-12.96,2.6,h)),l.push(Kt(.08,.1,c-1,12.96,2.6,h)),l.push(Kt(25.6,.1,.08,0,2.6,r+.44)),l.push(Kt(25.6,.1,.08,0,2.6,16.46)),l.push(Kt(26.4,.14,.14,0,-.95,16.9)),l.push(Kt(26.4,.14,.14,0,-.95,r)),l.push(Kt(.14,.14,c,-13.2,-.95,h)),l.push(Kt(.14,.14,c,13.2,-.95,h)),He(i,Cn(o),e===3?s.wall:s.floor),a.length&&He(i,Cn(a),s.dark,!1),He(i,Cn(l),s.glowAdd,!1);let u=new Nn(26,37);u.rotateX(-Math.PI/2),u.translate(0,.03,-1.5);let f=new Ke({map:u2(e),transparent:!0,opacity:.9,blending:on,depthWrite:!1});He(i,u,f,!1);let d=new Nn(5,5);d.translate(0,3.1,r+.46),He(i,d,f2(),!1);let g=[7334100,8374527,9431208,16747082],x=new _o(g[e],60,36,2);x.position.set(0,6,e===3?-4:2),i.add(x);let m=new _o(16767392,26,18,2);m.position.set(e===3?6:0,4.2,e===3?-13:-15),i.add(m);let p=new wa(.95,1.3,28);p.rotateX(-Math.PI/2),p.translate(0,.04,13.8);let v=new xr(.52,20);v.rotateX(-Math.PI/2),v.translate(0,.04,13.8),He(i,Cn([p,v]),s.padAdd,!1);let _=new Ae(.9,1.15,5.5,12,1,!0);if(_.translate(0,2.8,13.8),He(i,_,new Ke({color:Oi,transparent:!0,opacity:.05,blending:on,depthWrite:!1,side:fn}),!1),e!==3){let T=He(i,new se(3.3,4.6,.55),s.door);T.position.set(0,2.3,-10);let S=new qt(Kt(1.7,2.7,.62,0,.1,0),s.glowAdd);T.add(S),t.door=T,t.doorCol={x:t.origin.x,z:t.origin.z-10,radius:1.75,height:5.5}}let y=e===3?6:0,P=e===3?-14:-15.5;He(i,Mn(1.7,1.95,.4,8,y,.2,P),s.floor),t.chest=d2(i,y,P,e===3?-Math.PI/2:0),t.chestWorld=new R(t.origin.x+y,.6,t.origin.z+P),t.colliders.push({x:t.origin.x+y,z:t.origin.z+P,radius:.85,height:1.6})}function u2(n){return Ei(512,(t,e)=>{let i=l=>(l+13)/26*e,s=l=>(l+20)/37*e;t.fillStyle="#000",t.fillRect(0,0,e,e);let r=(l,c,h,u=.5,f=2)=>{t.strokeStyle=`rgba(90,235,215,${u})`,t.lineWidth=f,t.beginPath(),t.ellipse(i(l),s(c),h/26*e,h/37*e,0,0,Math.PI*2),t.stroke()},o=n===3?11:2;r(0,o,4.5,.55,3),r(0,o,3.6,.35,2),r(0,o,1.2,.4,2),t.fillStyle="rgba(90,235,215,0.5)";for(let l=0;l<8;l++){let c=l*Math.PI/4;t.fillRect(i(Math.sin(c)*4)-3,s(o+Math.cos(c)*2.8)-3,6,6)}if(r(0,13.8,2,.4,2),n===0){t.strokeStyle="rgba(90,235,215,0.28)",t.lineWidth=1.5;for(let l=-4;l<=4;l++){let c=(l+.5)*1.6;t.beginPath(),t.moveTo(i(-5.6),s(1+c)),t.lineTo(i(5.6),s(1+c)),t.stroke(),t.beginPath(),t.moveTo(i(c),s(1-5.6)),t.lineTo(i(c),s(1+5.6)),t.stroke()}}else if(n===1)for(let l of[-4.5,0,4.5])r(l,-3.4,1,.5,2);else n===2&&(r(-5,6,1.3,.55,2),r(-3.5,-8.6,1.3,.55,2));t.fillStyle="rgba(90,235,215,0.4)",t.font=`${Math.floor(e*.045)}px serif`;let a="\u53E4\u306E\u529B\u3053\u3053\u306B\u7720\u308B";for(let l=0;l<8;l++){let c=l*Math.PI/4+.4;t.fillText(a[l],i(Math.sin(c)*10.5),s(o+Math.cos(c)*5.5))}})}var wu=null;function f2(){if(wu)return wu;let n=Ei(256,(t,e)=>{t.fillStyle="#000",t.fillRect(0,0,e,e),t.strokeStyle="rgba(110,240,220,0.85)",t.lineWidth=5,t.beginPath(),t.arc(e/2,e/2,e*.38,0,Math.PI*2),t.stroke(),t.lineWidth=3,t.beginPath(),t.arc(e/2,e/2,e*.3,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e/2,e*.2),t.lineTo(e*.68,e/2),t.lineTo(e/2,e*.8),t.lineTo(e*.32,e/2),t.closePath(),t.stroke(),t.fillStyle="rgba(110,240,220,0.9)",t.beginPath(),t.moveTo(e/2,e*.38),t.lineTo(e*.58,e/2),t.lineTo(e/2,e*.62),t.lineTo(e*.42,e/2),t.closePath(),t.fill()});return wu=new Ke({map:n,transparent:!0,opacity:.85,blending:on,depthWrite:!1}),wu}function d2(n,t,e,i){let s=xt.M,r=new Tt;r.position.set(t,.4,e),r.rotation.y=i,n.add(r),He(r,Kt(1.15,.6,.75,0,.3,0),s.wood),He(r,Cn([Kt(.14,.64,.79,-.3,.3,0),Kt(.14,.64,.79,.3,.3,0),Kt(.2,.24,.08,0,.52,.38)]),s.gold);let o=new Tt;o.position.set(0,.6,-.375),r.add(o),He(o,Kt(1.15,.3,.75,0,.15,.375),s.wood),He(o,Cn([Kt(.14,.34,.79,-.3,.15,.375),Kt(.14,.34,.79,.3,.15,.375)]),s.gold);let a=new xo(.3,0);a.scale(1,1.4,1);let l=new qt(a,s.orb);l.position.set(0,.5,0),l.visible=!1,r.add(l);let c=new qt(new Ae(.5,.72,7.5,12,1,!0),s.beamAdd);return c.position.set(0,3.9,0),c.visible=!1,r.add(c),{group:r,lid:o,orb:l,beam:c,opened:!1}}var Tu=1.6;function is(n){return n*Tu}function ss(n){return 1+n*Tu}function p2(n,t){let e=t.group,i=t.p={cellX:2,cellZ:2,startX:2,startZ:2,swX:-2,swZ:-2,obstacles:[[0,0],[-1,1],[1,2]],grabbed:!1,slide:null,cool:0},s=[];for(let[l,c]of i.obstacles)s.push(Kt(1.35,1.5,1.35,is(l),.75,ss(c))),s.push(Kt(1.05,.4,1.05,is(l),1.65,ss(c))),t.colliders.push({x:t.origin.x+is(l),z:t.origin.z+ss(c),radius:.95,height:1.9});He(e,Cn(s),xt.M.wall),i.swMat=Oe(Oi,.45),He(e,new se(1.45,.1,1.45),i.swMat,!1).position.set(is(i.swX),.05,ss(i.swZ));let o=new Tt;He(o,new se(1.2,1.2,1.2),xt.M.mov);let a=[];for(let l=0;l<4;l++){let c=Kt(.46,.46,.06,0,0,.61);c.rotateZ(Math.PI/4),c.rotateY(l*Math.PI/2),a.push(c)}He(o,Cn(a),xt.M.glowAdd,!1),o.position.set(is(i.cellX),.6,ss(i.cellZ)),e.add(o),i.block=o,i.blockCol={x:t.origin.x+o.position.x,z:t.origin.z+o.position.z,radius:.8,height:1.4},t.colliders.push(i.blockCol),t.ground=()=>0,t.resetPuzzle=()=>{i.cellX=i.startX,i.cellZ=i.startZ,i.grabbed=!1,i.slide=null,i.block.position.set(is(i.cellX),.6,ss(i.cellZ)),i.blockCol.x=t.origin.x+i.block.position.x,i.blockCol.z=t.origin.z+i.block.position.z,i.swMat.emissiveIntensity=.45,i.swMat.color.setHex(Oi),i.swMat.emissive.setHex(Oi)},t.update=(l,c)=>g2(l,t,c),t.promptOf=l=>{if(t.solved)return null;if(i.grabbed)return"E: \u96E2\u3059 / WASD: \u62BC\u3057\u5F15\u304D";let c=l.player.position,h=c.x-(t.origin.x+i.block.position.x),u=c.z-(t.origin.z+i.block.position.z);return h*h+u*u<1.75*1.75?"E: \u77F3\u584A\u3092\u63B4\u3080":null}}function m2(n,t,e){if(Math.abs(t)>3||Math.abs(e)>3)return!0;for(let[i,s]of n.obstacles)if(i===t&&s===e)return!0;return!1}function g2(n,t,e){let i=t.p,s=n.player;if(i.cool=Math.max(0,i.cool-e),i.slide){let r=i.slide;r.t=Math.min(1,r.t+e/.5);let o=$t(0,1,r.t),a=mt(is(r.fx),is(r.tx),o),l=mt(ss(r.fz),ss(r.tz),o);i.block.position.set(a,.6,l),i.blockCol.x=t.origin.x+a,i.blockCol.z=t.origin.z+l,s.position.x=r.pfx+(is(r.tx)-is(r.fx))*o,s.position.z=r.pfz+(ss(r.tz)-ss(r.fz))*o,s.position.y=0,r.t>=1&&(i.cellX=r.tx,i.cellZ=r.tz,i.slide=null,i.cool=.06,!t.solved&&i.cellX===i.swX&&i.cellZ===i.swZ&&(t.solved=!0,i.grabbed=!1,s.setFrozen(!1),i.swMat.emissiveIntensity=2.2,i.swMat.color.setHex(Xr),i.swMat.emissive.setHex(Xr),Rn.set(t.origin.x+a,1.4,t.origin.z+l),n.effects.burst(Rn,"magic"),n.audio.play("switch"),t.doorDelay=.5));return}if(!t.solved){if(i.grabbed){if(n.input.justPressed("KeyE")){i.grabbed=!1,s.setFrozen(!1);return}if(i.cool>0)return;n.camera.getWorldDirection(At.v1);let r=0,o=0;Math.abs(At.v1.x)>Math.abs(At.v1.z)?r=Math.sign(At.v1.x):o=Math.sign(At.v1.z);let a=-o,l=r,c=n.input.keys,h=0,u=0;if(c.has("KeyW")||c.has("ArrowUp")?(h=r,u=o):c.has("KeyS")||c.has("ArrowDown")?(h=-r,u=-o):c.has("KeyD")||c.has("ArrowRight")?(h=a,u=l):(c.has("KeyA")||c.has("ArrowLeft"))&&(h=-a,u=-l),h===0&&u===0)return;let f=i.cellX+h,d=i.cellZ+u;if(m2(i,f,d))return;let g=s.position.x-t.origin.x+h*Tu,x=s.position.z-t.origin.z+u*Tu;if(g<-11.6||g>11.6||x<-8.7||x>14.5)return;for(let[m,p]of i.obstacles)if(Math.abs(g-is(m))<1.05&&Math.abs(x-ss(p))<1.05)return;i.slide={fx:i.cellX,fz:i.cellZ,tx:f,tz:d,t:0,pfx:s.position.x,pfz:s.position.z},n.audio.play("switch");return}if(n.input.justPressed("KeyE")){let r=s.position.x-(t.origin.x+i.block.position.x),o=s.position.z-(t.origin.z+i.block.position.z);r*r+o*o<1.75*1.75&&s.onGround&&(i.grabbed=!0,s.setFrozen(!0),n.audio.play("ui"))}}}function x2(n,t){let e=t.group,i=[-4.5,0,4.5],s=t.p={xs:i,order:[1,2,0],progress:0,lit:[!1,!1,!1],demoT:0,wrongT:0,flames:[],runeMats:[]},r=[];for(let o=0;o<3;o++){let a=i[o];r.push(Mn(.34,.46,.25,7,a,.12,-5.5)),r.push(Mn(.09,.15,1.25,6,a,.85,-5.5)),r.push(Mn(.34,.16,.26,7,a,1.55,-5.5));let l=new Ke({color:Oi,transparent:!0,opacity:.08,blending:on,depthWrite:!1}),c=new xr(.85,22);c.rotateX(-Math.PI/2);let h=new qt(c,l);h.position.set(a,.05,-3.4),e.add(h),s.runeMats.push(l);let u=new qt(Cn([Mn(.02,.24,.62,6,0,.3,0),Mn(.01,.12,.36,5,0,.55,0)]),xt.M.candle);u.position.set(a,1.72,-5.5),u.visible=!1,e.add(u),s.flames.push(u),t.colliders.push({x:t.origin.x+a,z:t.origin.z-5.5,radius:.5,height:2})}He(e,Cn(r),xt.M.gold),t.ground=()=>0,t.resetPuzzle=()=>{s.progress=0,s.demoT=0,s.wrongT=0;for(let o=0;o<3;o++)s.lit[o]=!1,s.flames[o].visible=!1,s.runeMats[o].opacity=.08,s.runeMats[o].color.setHex(Oi)},t.update=(o,a)=>y2(o,t,a),t.promptOf=o=>{if(t.solved)return null;let a=yx(t,o.player.position);return a>=0&&!s.lit[a]?"E: \u71ED\u53F0\u306B\u706B\u3092\u706F\u3059":null}}function yx(n,t){let e=n.p,i=-1,s=1.7*1.7;for(let r=0;r<3;r++){let o=t.x-(n.origin.x+e.xs[r]),a=t.z-(n.origin.z-5.5),l=o*o+a*a;l<s&&(s=l,i=r)}return i}function y2(n,t,e){let i=t.p,s=n.time.elapsed;for(let r=0;r<3;r++)if(i.flames[r].visible){let o=1+Math.sin(s*10.5+r*2.1)*.14;i.flames[r].scale.set(o,1+Math.sin(s*7.7+r)*.1,o)}if(!t.solved){if(i.wrongT>0){i.wrongT-=e;let r=Ct(i.wrongT/.8,0,1);for(let o of i.runeMats)o.color.setHex(16733768),o.opacity=.15+.5*r*Math.abs(Math.sin(s*14));if(i.wrongT<=0){for(let o of i.runeMats)o.color.setHex(Oi),o.opacity=.08;i.demoT=-.8}return}if(i.progress===0){i.demoT+=e;let r=3+1.8,o=(i.demoT%r+r)%r,a=Math.floor(o/1);for(let l=0;l<3;l++){let c=.08;if(i.demoT>=0&&a<3&&i.order[a]===l){let h=o-a;c=.1+.85*Math.sin(Ct(h/.75,0,1)*Math.PI)}i.runeMats[l].opacity=c}}else for(let r=0;r<3;r++)i.runeMats[r].opacity=i.lit[r]?.7:.08;if(n.input.justPressed("KeyE")){let r=yx(t,n.player.position);if(r>=0&&!i.lit[r])if(r===i.order[i.progress]){if(i.lit[r]=!0,i.flames[r].visible=!0,i.progress++,n.audio.play("torch"),Rn.set(t.origin.x+i.xs[r],1.9,t.origin.z-5.5),n.effects.burst(Rn,"fire",{count:8}),i.progress>=3){t.solved=!0;for(let o of i.runeMats)o.opacity=.75,o.color.setHex(Xr);t.doorDelay=.6,n.audio.play("orb")}}else{for(let o=0;o<3;o++)i.lit[o]=!1,i.flames[o].visible=!1;i.progress=0,i.wrongT=.8,n.audio.play("uiBack")}}}}function v2(n,t){let e=t.group,i=t.p={platX:0,holding:!1,orbHome:new R(-5,1.5,6),orbGoal:new R(-3.5,1.55,-8.6),prevPX:0,prevPZ:0,prevValid:!1,fallCool:0},s=new Tt;He(s,Kt(3,.5,5.4,0,-.25,0),xt.M.mov),He(s,Cn([Kt(.12,.06,5.4,-1.44,.02,0),Kt(.12,.06,5.4,1.44,.02,0)]),xt.M.glowAdd,!1),s.position.set(0,0,-4.5),e.add(s),i.plat=s;let r=[];for(let[c,h]of[[-5,6],[-3.5,-8.6]])r.push(Mn(.4,.56,1.15,7,c,.58,h)),r.push(Mn(.55,.42,.18,7,c,1.22,h)),t.colliders.push({x:t.origin.x+c,z:t.origin.z+h,radius:.62,height:1.5});He(e,Cn(r),xt.M.floor);let o=No(.5,.04,1.32,16);o.translate(-5,0,6);let a=No(.5,.04,1.37,16);a.translate(-3.5,0,-8.6),He(e,Cn([o,a]),xt.M.glowAdd,!1);let l=new qt(new pn(.32,12,10),xt.M.orb);l.position.copy(i.orbHome),e.add(l),i.orb=l,t.ground=(c,h)=>{let u=c-t.origin.x,f=h-t.origin.z;return f<-2&&f>-7?Math.abs(u-i.platX)<1.55?0:-6.5:0},t.resetPuzzle=()=>{i.holding=!1,i.orb.position.copy(i.orbHome),i.fallCool=0,i.prevValid=!1},t.update=(c,h)=>_2(c,t,h),t.promptOf=c=>{if(t.solved)return null;let h=c.player.position;if(i.holding){let d=h.x-(t.origin.x+i.orbGoal.x),g=h.z-(t.origin.z+i.orbGoal.z);return d*d+g*g<4?"E: \u73E0\u3092\u53F0\u5EA7\u3078\u7F6E\u304F":"E: \u73E0\u3092\u7F6E\u304F"}let u=h.x-(t.origin.x+i.orb.position.x),f=h.z-(t.origin.z+i.orb.position.z);return u*u+f*f<1.8*1.8?"E: \u5149\u306E\u73E0\u3092\u6301\u3064":null}}function _2(n,t,e){let i=t.p,s=n.player,r=n.time.elapsed;if(i.fallCool=Math.max(0,i.fallCool-e),i.holding&&i.prevValid){let l=s.position.x-i.prevPX,c=s.position.z-i.prevPZ;s.position.x=i.prevPX+l*.8,s.position.z=i.prevPZ+c*.8,s.velocity.y>0&&(s.velocity.y=0,s.position.y=n.getGroundHeight(s.position.x,s.position.z))}let o=i.platX;i.platX=Math.sin(r*(Math.PI*2/7))*6.5,i.plat.position.x=i.platX;let a=i.platX-o;{let l=s.position.x-t.origin.x,c=s.position.z-t.origin.z;s.position.y<.25&&c<-1.7&&c>-7.3&&Math.abs(l-o)<1.95&&(s.position.x+=a)}if(i.holding&&i.orb.position.set(s.position.x-t.origin.x,s.position.y+2.2+Math.sin(r*3.1)*.09,s.position.z-t.origin.z),i.orb.rotation.y+=e*.8,s.position.y<-2.2&&i.fallCool<=0){i.fallCool=1,n.ui.flash("#000000",.55),Rn.set(t.origin.x,0,t.origin.z+4),s.teleport(Rn,Math.PI),(i.holding||!t.solved&&i.orb.position.y<-1)&&(i.holding=!1,i.orb.position.copy(i.orbHome)),n.audio.play("roll");return}if(t.solved){i.prevValid=!1;return}if(n.input.justPressed("KeyE"))if(i.holding){let l=t.origin.x+i.orbGoal.x,c=t.origin.z+i.orbGoal.z,h=s.position.x-l,u=s.position.z-c;if(h*h+u*u<4)i.holding=!1,i.orb.position.copy(i.orbGoal),t.solved=!0,t.doorDelay=.5,Rn.set(l,2.2,c),n.effects.burst(Rn,"magic"),n.audio.play("orb");else{i.holding=!1;let f=s.position.x-t.origin.x,d=s.position.z-t.origin.z,g=t.ground(s.position.x,s.position.z);g<-1?i.orb.position.copy(i.orbHome):i.orb.position.set(f,g+.42,d),n.audio.play("ui")}}else{let l=s.position.x-(t.origin.x+i.orb.position.x),c=s.position.z-(t.origin.z+i.orb.position.z);l*l+c*c<1.8*1.8&&(i.holding=!0,n.audio.play("pickup"))}i.prevPX=s.position.x,i.prevPZ=s.position.z,i.prevValid=!0}function M2(n,t){let e=t.group,i=t.p={tiles:[],period:5.6,upDur:2.8,bridgeUp:!1,bridgeY:-2.8,lastSwing:-1,burnCool:0,crystalPos:new R(-6,1.9,-14)};i.lavaTex=Ei(256,(h,u)=>{h.fillStyle="#802010",h.fillRect(0,0,u,u);let f=(()=>{let d=12345;return()=>(d=d*16807%2147483647)/2147483647})();for(let d=0;d<60;d++){let g=f()*u,x=f()*u,m=8+f()*30,p=h.createRadialGradient(g,x,0,g,x,m);p.addColorStop(0,"rgba(255,120,40,0.9)"),p.addColorStop(1,"rgba(160,40,15,0)"),h.fillStyle=p,h.beginPath(),h.arc(g,x,m,0,Math.PI*2),h.fill()}h.strokeStyle="rgba(255,220,120,0.8)",h.lineWidth=2.5;for(let d=0;d<12;d++){h.beginPath();let g=f()*u,x=f()*u;h.moveTo(g,x);for(let m=0;m<5;m++)g+=(f()-.5)*90,x+=(f()-.5)*90,h.lineTo(g,x);h.stroke()}}),i.lavaTex.wrapS=i.lavaTex.wrapT=po;let s=new Nn(26,23.4);s.rotateX(-Math.PI/2),s.translate(0,-.9,-5.5),i.lavaMat=new Ke({map:i.lavaTex,color:16756832}),He(e,s,i.lavaMat,!1);let r=new se(2.2,.8,2.2),o=Cn([Kt(2.3,.08,.14,0,0,-1.08),Kt(2.3,.08,.14,0,0,1.08),Kt(.14,.08,2.3,-1.08,0,0),Kt(.14,.08,2.3,1.08,0,0)]),a=[[0,4.4],[-1.9,2.3],[-.2,.2],[1.7,-1.8],[.2,-3.9],[-1.6,-5.9],[-3.2,-8.1],[-4.6,-10.4]];for(let h=0;h<a.length;h++){let[u,f]=a[h],d=He(e,r,xt.M.mov);d.position.set(u,-3.4,f);let g=new Ke({color:16752720,transparent:!0,opacity:0,blending:on,depthWrite:!1}),x=new qt(o,g);x.position.set(u,-.82,f),e.add(x),i.tiles.push({x:u,z:f,mesh:d,frameMat:g,frame:x,topY:-3})}He(e,Cn([Mn(.42,.6,1.2,7,-6,.6,-14),Mn(.58,.44,.2,7,-6,1.3,-14)]),xt.M.wall),i.crystalMat=Oe(9427199,1.5);let l=new xo(.42,0);l.scale(1,1.35,1),i.crystal=new qt(l,i.crystalMat),i.crystal.position.set(-6,1.95,-14),e.add(i.crystal),t.colliders.push({x:t.origin.x-6,z:t.origin.z-14,radius:.66,height:1.6});let c=new Tt;He(c,Kt(4.6,.5,2.6,0,-.25,0),xt.M.mov),He(c,Cn([Kt(4.6,.06,.12,0,.02,-1.24),Kt(4.6,.06,.12,0,.02,1.24)]),xt.M.glowAdd,!1),c.position.set(0,i.bridgeY,-14),e.add(c),i.bridge=c,t.ground=(h,u)=>{let f=h-t.origin.x,d=u-t.origin.z;if(d>=6)return 0;if(d>=-16&&d<=-12){let g=Math.abs(f);if(g>=2&&g<=10||g<2&&i.bridgeUp&&i.bridgeY>-.4)return 0}for(let g=0;g<i.tiles.length;g++){let x=i.tiles[g];if(x.topY>-.2&&Math.abs(f-x.x)<1.12&&Math.abs(d-x.z)<1.12)return Math.max(0,x.topY)}return-2.5},t.resetPuzzle=()=>{i.bridgeUp=!1,i.bridgeY=-2.8,i.bridge.position.y=i.bridgeY,i.crystalMat.color.setHex(9427199),i.crystalMat.emissive.setHex(9427199),i.crystalMat.emissiveIntensity=1.5,i.burnCool=0,i.lastSwing=-1},t.update=(h,u)=>b2(h,t,u),t.promptOf=h=>{if(t.solved)return null;let u=h.player.position.x-(t.origin.x-6),f=h.player.position.z-(t.origin.z-14);return u*u+f*f<2.6*2.6?"\u5263\u3067\u6C34\u6676\u3092\u53E9\u3051":null}}function b2(n,t,e){let i=t.p,s=n.player,r=n.time.elapsed;i.burnCool=Math.max(0,i.burnCool-e),i.lavaTex.offset.x=r*.012,i.lavaTex.offset.y=r*.008;let o=.85+Math.sin(r*1.7)*.15;i.lavaMat.color.setRGB(o,.55*o,.28*o);for(let l=0;l<i.tiles.length;l++){let c=i.tiles[l],h=((r+l*.7)%i.period+i.period)%i.period,u=h<i.upDur;c.topY=gt(c.topY,u?0:-3,13,e),c.mesh.position.y=c.topY-.4,!u&&i.period-h<1.5?(c.frameMat.opacity=.25+.55*Math.abs(Math.sin(r*16)),c.frame.position.y=-.82):c.topY>-.3?(c.frameMat.opacity=.35,c.frame.position.y=c.topY+.04):c.frameMat.opacity=0}if(i.crystal.rotation.y+=e*1.2,i.crystal.position.y=1.95+Math.sin(r*2.3)*.08,t.solved||(i.crystalMat.emissiveIntensity=1.3+Math.sin(r*4)*.4),i.bridgeUp&&i.bridgeY<0&&(i.bridgeY=Math.min(0,i.bridgeY+e*3.2),i.bridge.position.y=i.bridgeY,i.bridgeY>=0&&(Rn.set(t.origin.x,.3,t.origin.z-14),n.effects.burst(Rn,"dust"),n.audio.play("switch"))),i.burnCool<=0&&s.position.y<-.55&&s.hp>0&&t.ground(s.position.x,s.position.z)<-2){i.burnCool=1.2,Rn.set(s.position.x,s.position.y,s.position.z),n.effects.burst(Rn,"fire"),n.audio.play("burn"),s.damage(.5,null),s.hp>0&&(Rn.set(t.origin.x,0,t.origin.z+8.5),s.teleport(Rn,Math.PI));return}if(t.solved)return;let a=s.getAttackHit();a&&a.swingId!==i.lastSwing&&(Rn.set(t.origin.x+i.crystalPos.x,i.crystal.position.y,t.origin.z+i.crystalPos.z),a.pos.distanceTo(Rn)<a.radius+.75&&(i.lastSwing=a.swingId,t.solved=!0,i.bridgeUp=!0,i.crystalMat.color.setHex(Xr),i.crystalMat.emissive.setHex(Xr),i.crystalMat.emissiveIntensity=3,n.effects.burst(Rn,"spark"),n.audio.play("switch"),n.camera3p.shake(.3)))}function E2(n,t){typeof window<"u"&&(window.__shrDbg=(window.__shrDbg||0)+1,window.__shrS=xt),!(!xt||!xt.api)&&(S2(n,t),xt.enterCool=Math.max(0,xt.enterCool-t),n.state==="playing"?w2(n,t):n.state==="shrine"&&xt.api.active>=0&&I2(n,t))}function Ms(n,t){xt.prompt!==t&&(xt.prompt=t,n.ui.setPrompt(t))}function S2(n,t){let e=n.time.elapsed,i=n.time.isNight?.3:0;for(let s=0;s<4;s++){let r=xt.exts[s];r.runeMat.emissiveIntensity=1.15+i+Math.sin(e*1.6+s*1.7)*.25,r.flameMat.emissiveIntensity=1.7+i+Math.sin(e*9.3+s*2.4)*.28+Math.sin(e*23.7+s)*.14,r.beaconMat.opacity=(n.time.isNight?.16:.05)+Math.sin(e*1.2+s)*.02}}function w2(n,t){let e=n.player.position,i=-1;for(let s=0;s<4;s++){let r=xt.exts[s].doorPos,o=e.x-r.x,a=e.z-r.z;if(o*o+a*a<px*px){i=s;break}}i>=0?(Ms(n,"E: \u7960\u306B\u5165\u308B"),n.input.justPressed("KeyE")&&xt.enterCool<=0&&T2(n,i)):xt.prompt==="E: \u7960\u306B\u5165\u308B"&&Ms(n,null)}function T2(n,t){let e=xt.rooms[t],i=xt.api.list[t].completed;e.group.visible=!0,i?(e.solved=!0,e.door&&(e.doorOpen=!0,e.door.position.y=-2.75),e.index===3&&(e.p.bridgeUp=!0,e.p.bridgeY=0,e.p.bridge.position.y=0),e.chest.opened=!0,e.chest.lid.rotation.x=-2.05,e.chest.beam.visible=!0):(e.solved=!1,e.resetPuzzle(),R2(e),L2(e)),e.doorDelay=0,e.doorAnim=0,n.ui.flash("#000000",1),Ms(n,null),n.player.teleport(e.entranceWorld,Math.PI),n.setState("shrine"),n.sky.setOverride("shrine"),xt.savedGround=n.getGroundHeight,xt.savedBounds=n.playerBounds,n.getGroundHeight=e.ground,n.playerBounds=e.bounds,xt.added.length=0;for(let s of e.colliders)n.colliders.push(s),xt.added.push(s);e.doorCol&&!e.doorOpen&&(n.colliders.push(e.doorCol),xt.added.push(e.doorCol)),xt.api.active=t,xt.inside=!0,xt.enterCool=.5,n.audio.play("ui"),n.emit("shrine-enter",{index:t})}function A2(n){let t=xt.api.active;if(t<0)return;let e=xt.exts[t];vx(n),n.ui.flash("#000000",1),n.player.teleport(e.exitPos,e.exitHeading),n.setState("playing"),xt.enterCool=.5,n.audio.play("ui")}function vx(n){let t=xt.api.active;if(!xt.inside||t<0)return;let e=xt.rooms[t];for(let i of xt.added){let s=n.colliders.indexOf(i);s>=0&&n.colliders.splice(s,1)}xt.added.length=0,xt.savedGround&&(n.getGroundHeight=xt.savedGround),n.playerBounds=xt.savedBounds,xt.savedGround=null,xt.savedBounds=null,n.sky.setOverride(null),e.group.visible=!1,e.p&&e.p.grabbed&&(e.p.grabbed=!1,n.player.setFrozen(!1)),xt.seq&&(n.player.setFrozen(!1),xt.seq=null),xt.api.active=-1,xt.inside=!1,Ms(n,null),n.emit("shrine-exit",{index:t})}function R2(n){n.doorOpen=!1,n.door&&(n.door.position.y=2.3)}function C2(n,t){if(t.doorOpen||!t.door)return;t.doorOpen=!0,t.doorAnim=1;let e=n.colliders.indexOf(t.doorCol);e>=0&&n.colliders.splice(e,1);let i=xt.added.indexOf(t.doorCol);i>=0&&xt.added.splice(i,1),n.audio.play("switch"),n.camera3p.shake(.25),Rn.set(t.origin.x,.4,t.origin.z-10),n.effects.burst(Rn,"dust")}function I2(n,t){let e=xt.rooms[xt.api.active],i=n.time.elapsed;if(xt.M.padAdd.opacity=.6+Math.sin(i*2.6)*.22,e.doorDelay>0&&(e.doorDelay-=t,e.doorDelay<=0&&C2(n,e)),e.door&&e.doorAnim>0&&(e.door.position.y=Math.max(-2.75,e.door.position.y-t*4.2),e.door.position.y<=-2.75&&(e.doorAnim=0)),e.update(n,t),xt.seq){D2(n,e,t),Ms(n,null);return}let s=n.player.position,r=e.p&&e.p.grabbed;if(!r){let c=s.x-e.padWorld.x,h=s.z-e.padWorld.z;if(c*c+h*h<mx*mx){Ms(n,"E: \u7960\u3092\u51FA\u308B"),n.input.justPressed("KeyE")&&xt.enterCool<=0&&A2(n);return}}let o=e.chest;if(!o.opened&&(e.index===3?e.p.bridgeUp&&e.p.bridgeY>=0:e.doorOpen)&&!r){let c=s.x-e.chestWorld.x,h=s.z-e.chestWorld.z;if(c*c+h*h<2.3*2.3){Ms(n,"E: \u5B9D\u7BB1\u3092\u958B\u3051\u308B"),n.input.justPressed("KeyE")&&P2(n,e);return}}let l=e.promptOf(n);if(l){Ms(n,l);return}if(o.opened){Ms(n,"\u5165\u53E3\u306E\u5149\u308B\u5186\u9663\u304B\u3089\u7960\u3092\u51FA\u3088\u3046");return}Ms(n,null)}function P2(n,t){t.chest.opened=!0,xt.seq={t:0,granted:!1,heartDue:!1,burstDone:!1},n.player.setFrozen(!0),n.audio.play("chest")}function L2(n){let t=n.chest;t.opened=!1,t.lid.rotation.x=0,t.orb.visible=!1,t.orb.scale.set(1,1,1),t.orb.position.set(0,.5,0),t.beam.visible=!1}function gx(n,t){return r2.set(n.chestWorld.x,t,n.chestWorld.z)}function D2(n,t,e){let i=xt.seq,s=t.chest;i.t+=e;let r=i.t;if(s.lid.rotation.x=-2.05*$t(0,.55,r),r>=.25&&(i.burstDone||(i.burstDone=!0,s.beam.visible=!0,n.effects.burst(gx(t,1.2),"orb")),xt.M.beamAdd.opacity=r<2.2?Math.min(.5,(r-.25)*.9):Math.max(.14,.5-(r-2.2)*.8)),r>=.5){s.orb.visible=!0;let o=Ct((r-.5)/1.5,0,1);s.orb.position.y=.5+o*1.85,s.orb.rotation.y+=e*3.2;let a=Math.min(1,(r-.5)*3),l=r>2.05?Math.max(0,1-(r-2.05)/.55):1;s.orb.scale.setScalar(Math.max(.001,a*l))}if(r>=2&&!i.granted){i.granted=!0;let o=t.index,a=n.player;a.spiritOrbs++,a.heal(a.maxHp),xt.api.list[o].completed=!0,xt.api.completedCount++,l2(o),i.heartDue=a.spiritOrbs%2===0,n.audio.play("orb"),n.effects.burst(gx(t,2.4),"heal"),n.ui.showMessage("\u6C17\u306E\u73E0\u3092\u624B\u306B\u5165\u308C\u305F",{sub:"\u7960\u306E\u52A0\u8B77\u304C\u52C7\u8005\u306B\u5BBF\u308B"}),n.emit("shrine-complete",{index:o})}r>=2.7&&(s.orb.visible=!1,i.heartDue&&(n.player.addMaxHeart(),n.ui.showMessage("\u547D\u306E\u5668\u304C\u6E80\u3061\u305F",{sub:"\u30CF\u30FC\u30C8\u306E\u5668\u304C\u3072\u3068\u3064\u5897\u3048\u305F"}),n.audio.play("heart")),n.player.setFrozen(!1),xt.seq=null)}var Pu={};cs(Pu,{init:()=>H2,update:()=>sT});var rt=null,Es,pc,Ka,Iu,Oo,o0,Yr,a0,qe={minX:-55,maxX:55,minZ:-650,maxZ:-505},Ye,In,zo,Ti,qr,_x=[],fc=[],Cu,Ho,Ks,Fo,Js,js,ws,ko,Ai=null,Ss=new R(0,0,-580),mc=[],gc=[],je=null,bn=0,rs=0,tr=!1,os=1,dc=!1,bs=!1,Bo=0,B={state:"idle",t:0,cd:1.6,heading:0,speedMul:1,clawCd:0,chargeCd:0,slamCd:0,flameCd:0,dashDir:new R,dashRemain:1,hitDone:!1,clawHitDone:!1,fired:!1,leapFrom:new R,leapTo:new R,gaitT:0,moveAmt:0},me={pitch:0,roll:0,y:0,headP:0,headY:0,jaw:.06,crouch:0,paw:0,maw:.4,eyes:2.4},bt={pitch:0,roll:0,y:0,headP:0,headY:0,jaw:.06,crouch:0,paw:0,maw:.4,eyes:2.4},Qs=(n,t)=>rt.getGroundHeight(n,t),Mx=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,U2=`
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
`,N2=`
varying vec2 vUv;
uniform float uTime;
void main(){
  float y = vUv.y;
  float band = sin(y * 22.0 - uTime * 2.1) * 0.5 + 0.5;
  float weave = sin(vUv.x * 90.0 + uTime * 0.8) * sin(y * 36.0 - uTime * 1.4) * 0.5 + 0.5;
  float a = (1.0 - y) * (1.0 - y) * 0.30 + band * 0.05 + weave * 0.04;
  gl_FragColor = vec4(vec3(0.55, 0.26, 0.92), a * 0.55);
}
`;function z2(n){pc=new Qe({uniforms:{uTime:{value:0},uBreak:{value:0}},vertexShader:Mx,fragmentShader:U2,transparent:!0,depthWrite:!1,side:fn}),Es=new qt(new Nn(15,11),pc),Es.position.set(n.x,n.y+5.2,n.z),rt.scene.add(Es),Iu=Oe(11555071,1.7),Ka=new qt(new Zi(7,.17,8,56),Iu),Ka.scale.set(1.04,.72,1),Ka.position.copy(Es.position),rt.scene.add(Ka),o0=new Ke({color:9055202,transparent:!0,opacity:.3,side:fn,blending:on,depthWrite:!1}),Oo=new qt(new wa(4.6,5.4,48),o0),Oo.rotation.x=-Math.PI/2,Oo.position.set(n.x,Qs(n.x,n.z+1.5)+.12,n.z+1.5),rt.scene.add(Oo)}function F2(){a0=new Qe({uniforms:{uTime:{value:0}},vertexShader:Mx,fragmentShader:N2,transparent:!0,depthWrite:!1,side:fn,blending:on}),Yr=new Tt,Yr.visible=!1;let n=qe.maxX-qe.minX,t=qe.maxZ-qe.minZ,e=10,i=(qe.minX+qe.maxX)/2,s=(qe.minZ+qe.maxZ)/2,r=(o,a,l,c)=>{let h=new qt(new Nn(o,e),a0);h.position.set(a,Qs(a,l)+e/2-.5,l),h.rotation.y=c,Yr.add(h)};r(n,i,qe.minZ,0),r(n,i,qe.maxZ,0),r(t,qe.minX,s,Math.PI/2),r(t,qe.maxX,s,Math.PI/2),rt.scene.add(Yr)}function Ru(n,t){let e=new Tt;e.position.set(n,-.35,t),In.add(e);let i=new Tt;e.add(i),Q(new se(.62,1.2,.74),Ks,0,-.55,0,i);let s=new Tt;s.position.set(0,-1.1,0),i.add(s),Q(new se(.46,1,.56),Fo,0,-.45,0,s),Q(new se(.64,.28,.82),Fo,0,-.95,.1,s);for(let r=-1;r<=1;r++){let o=Q(new Xe(.09,.34,5),Js,r*.19,-.97,.55,s);o.rotation.x=1.35}return{g:e,upper:i,lower:s}}function B2(){Ks=jt(2366006,{emissive:0}),Fo=jt(1380388),Js=jt(5720686),js=Oe(11816447,2.4),ws=Oe(9055202,1.5),ko=Oe(10498303,.4),Ye=new Tt,Ye.visible=!1,Ye.position.copy(Ss),rt.scene.add(Ye),In=new Tt,In.position.y=2.5,Ye.add(In),Q(new se(2.6,2,2.7),Ks,0,.15,1,In),Q(new se(2.2,1.7,2.7),Ks,0,-.05,-1.15,In),Q(new se(1.9,.9,1.7),Fo,0,1.25,.9,In);for(let r=0;r<4;r++){let o=Q(new Xe(.26-r*.03,.95-r*.12,5),Js,0,1.55-r*.16,1.35-r*1.05,In);o.rotation.x=-.35}let n=[[1.3,.35,1.2,.5,1,.3],[-1.3,.1,.6,.4,1.2,-.2],[1.1,-.2,-1,.35,.9,.4],[-1.1,.3,-1.5,.45,1.1,-.4],[.6,1.05,0,.4,.8,1.2],[-.5,-.85,.4,.35,.9,.9]];for(let[r,o,a,l,c,h]of n){let u=Q(new se(.07,l,c),ws,r,o,a,In);u.rotation.z=h,u.castShadow=!1}zo=new Tt,zo.position.set(0,.7,2.25),In.add(zo);let t=Q(new se(1.1,1,1.5),Ks,0,.28,.5,zo);t.rotation.x=-.35,Ti=new Tt,Ti.position.set(0,.8,1.1),zo.add(Ti),Q(new se(1.15,.85,1.5),Ks,0,.1,.35,Ti),Q(new se(.8,.48,.95),Fo,0,-.06,1.3,Ti),Q(new Xe(.07,.28,5),Js,.26,-.34,1.55,Ti).rotation.x=Math.PI,Q(new Xe(.07,.28,5),Js,-.26,-.34,1.55,Ti).rotation.x=Math.PI,Q(new pn(.15,8,6),js,.36,.24,.95,Ti).castShadow=!1,Q(new pn(.15,8,6),js,-.36,.24,.95,Ti).castShadow=!1;for(let r of[1,-1]){let o=Q(new Xe(.2,1.05,6),Js,r*.46,.75,0,Ti);o.rotation.z=-r*.55,o.rotation.x=.35;let a=Q(new Xe(.12,.75,6),Js,0,.75,0,o);a.rotation.z=-r*.5}qr=new Tt,qr.position.set(0,-.3,.45),Ti.add(qr),Q(new se(.74,.26,1.55),Fo,0,-.12,.7,qr),Q(new Xe(.06,.24,5),Js,.22,.06,1.35,qr),Q(new Xe(.06,.24,5),Js,-.22,.06,1.35,qr),Q(new se(.58,.14,1),ko,0,.04,.65,qr).castShadow=!1,_x=[Ru(1.18,1.55),Ru(-1.18,1.55),Ru(1.05,-1.55),Ru(-1.05,-1.55)];let e=In,i=!0;fc=[];for(let r=0;r<5;r++){let o=new Tt;o.position.set(0,i?.05:0,i?-2.35:-.9),e.add(o),Q(new se(.56-r*.08,.5-r*.07,1),r%2?Fo:Ks,0,0,-.5,o),fc.push(o),e=o,i=!1}let s=Q(new Xe(.14,.7,5),ws,0,0,-1.25,e);s.rotation.x=-Math.PI/2,s.castShadow=!1,Ho=new Ke({color:16723781,transparent:!0,opacity:0,blending:on,depthWrite:!1,side:Un}),Cu=new qt(new pn(3.5,18,12),Ho),Cu.position.y=2.3,Ye.add(Cu)}function O2(){for(let e=0;e<2;e++){let i=Oe(10174719,2,{transparent:!0,opacity:.9}),s=new qt(new Zi(1,.2,8,48),i);s.rotation.x=-Math.PI/2,s.visible=!1,s.castShadow=!1,rt.scene.add(s),mc.push({mesh:s,mat:i,r:0,active:!1,hitDone:!1})}let n=new pn(.32,8,6),t=new Xe(.2,1,6);for(let e=0;e<6;e++){let i=new qt(n,Oe(12865023,2.6)),s=new qt(t,Oe(8004300,1.2,{transparent:!0,opacity:.7}));s.rotation.x=-Math.PI/2,s.position.z=-.6,i.add(s),i.visible=!1,i.castShadow=!1,rt.scene.add(i),gc.push({mesh:i,vel:new R,active:!1,life:0})}}async function H2(n){rt=n;let t=n.world.castleGatePos;Ss.set(t.x,0,t.z+18),Ss.y=Qs(Ss.x,Ss.z),z2(t),F2(),B2(),O2(),Ai={root:Ye,pos:Ye.position,hp:60,maxHp:60,alive:!1,radius:3,name:"\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9",isBoss:!0,damage(e,i){if(!this.alive||je)return;let s=B.state==="stun"?2:.5;this.hp=Math.max(0,this.hp-e*s),rt.boss.hp=this.hp,Bo=1,rt.camera3p.shake(B.state==="stun"?.25:.12),this.hp<=30&&os===1&&this.hp>0&&V2(),this.hp<=0&&(this.alive=!1,W2())}},n.boss={active:!1,defeated:!1,hp:60,maxHp:60,_forceAttack(e){Z2(e)},_dbg(){return{seq:je,seqT:+bn.toFixed(2),battle:tr,phase:os,aiState:B.state,aiT:+B.t.toFixed(2),nearGate:dc,promptOn:bs}}},n.on("state",({to:e})=>{(e==="gameover"||e==="title")&&(rt.boss.active||je)&&!rt.boss.defeated&&q2()})}function k2(){bs&&(rt.ui.setPrompt(null),bs=!1),rt.player.setFrozen(!0),je="break",bn=0,rs=0,rt.audio.play("burn")}function G2(){tr=!0,os=1,B.state="idle",B.t=0,B.cd=1.6,B.speedMul=1,B.clawCd=0,B.chargeCd=2.5,B.slamCd=1.5,B.flameCd=0,B.moveAmt=0,Ai.hp=Ai.maxHp,Ai.alive=!0,rt.combat.registerEnemy(Ai),rt.boss.active=!0,rt.boss.hp=Ai.hp,rt.setState("boss"),rt.sky.setOverride("boss"),rt.emit("boss-start"),rt.ui.setBossBar(!0,"\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9"),rt.playerBounds={minX:qe.minX,maxX:qe.maxX,minZ:qe.minZ,maxZ:qe.maxZ},Yr.visible=!0}function V2(){os=2,B.speedMul=1.3,B.state="rage",B.t=0,js.color.setHex(16725333),js.emissive.setHex(16725333),ws.color.setHex(16721992),ws.emissive.setHex(16721992),ko.color.setHex(16728160),ko.emissive.setHex(16728160),At.v1.copy(Ye.position),At.v1.y+=2.5,rt.effects.burst(At.v1,"magic",{count:40,scale:2}),rt.camera3p.shake(.6),rt.audio.play("burn"),rt.emit("boss-phase",{phase:2})}function W2(){tr=!1,je="dying",bn=0,rs=0;for(let n of mc)n.active=!1,n.mesh.visible=!1;for(let n of gc)n.active=!1,n.mesh.visible=!1;rt.camera3p.shake(.5),rt.audio.play("kill")}function X2(){Ye.visible=!1,rt.boss.defeated=!0,rt.boss.active=!1,rt.boss.hp=0,rt.playerBounds=null,Yr.visible=!1,rt.emit("boss-defeated"),rt.ui.setBossBar(!1),rt.sky.setOverride(null),rt.camera3p.cinematic("ending"),je="endwait",bn=0}function q2(){je=null,bn=0,tr=!1,os=1,Bo=0,Ai.alive=!1,Ai.hp=Ai.maxHp;let n=rt.combat.enemies.indexOf(Ai);n>=0&&rt.combat.enemies.splice(n,1),Ye.visible=!1,Ye.position.copy(Ss),Ye.rotation.set(0,0,0),In.rotation.set(0,0,0),In.position.y=2.5,B.state="idle",B.t=0,B.cd=1.6,B.speedMul=1,B.heading=0,B.moveAmt=0,js.color.setHex(11816447),js.emissive.setHex(11816447),js.emissiveIntensity=2.4,ws.color.setHex(9055202),ws.emissive.setHex(9055202),ws.emissiveIntensity=1.5,ko.color.setHex(10498303),ko.emissive.setHex(10498303),Ks.emissive.setHex(0),Ho.opacity=0,me.eyes=2.4,me.maw=.4,Es.visible=!0,Ka.visible=!0,Oo.visible=!0,pc.uniforms.uBreak.value=0;for(let t of mc)t.active=!1,t.mesh.visible=!1;for(let t of gc)t.active=!1,t.mesh.visible=!1;Yr.visible=!1,rt.playerBounds=null,rt.boss.active=!1,rt.boss.hp=Ai.maxHp,rt.ui.setBossBar(!1),rt.sky.setOverride(null),rt.camera3p.cinematic(null),rt.player.setFrozen(!1),dc=!1,bs=!1}function Y2(n){bn+=n;let t=rt.world.castleGatePos;if(je==="break")pc.uniforms.uBreak.value=$t(0,1.6,bn),Iu.emissiveIntensity=1.7+bn*2.2,rs-=n,rs<=0&&(rs=.18,At.v1.set(t.x+(Math.random()-.5)*11,Es.position.y+(Math.random()-.5)*7,t.z+(Math.random()-.5)*1.5),rt.effects.burst(At.v1,"magic",{count:14}),Math.random()<.4&&rt.audio.play("burn")),bn>=1.6&&(Es.visible=!1,Ka.visible=!1,Oo.visible=!1,At.v1.copy(Es.position),rt.effects.burst(At.v1,"magic",{count:70,scale:2.4}),rt.audio.play("burn"),rt.camera3p.shake(.55),Ye.position.copy(Ss),Ye.position.y=Ss.y+42,Ye.rotation.set(0,0,0),B.heading=0,Ye.visible=!0,rt.camera3p.cinematic("bossIntro"),je="descend",bn=0);else if(je==="descend"){let e=Math.min(1,bn/.9);Ye.position.y=Ss.y+42*(1-e*e),e>=1&&(Ye.position.y=Ss.y,rt.camera3p.shake(.9),At.v1.copy(Ye.position),At.v1.y+=.4,rt.effects.burst(At.v1,"dust",{count:46,scale:2.6}),rt.effects.burst(At.v1,"magic",{count:24,scale:1.6}),rt.audio.play("hit"),je="roar",bn=0,rs=0)}else if(je==="roar")rs===0&&bn>=.15&&(rs=1,rt.audio.play("burn"),rt.camera3p.shake(.4)),bn>=1.4&&(je="cine",bn=0);else if(je==="cine")bn>=3.1&&(rt.camera3p.cinematic(null),rt.player.setFrozen(!1),je=null,G2());else if(je==="dying"){let e=$t(0,3.4,bn);In.rotation.z=e*.55,In.position.y=2.5-e*1.5,ws.emissiveIntensity=1.5+e*3.5,me.eyes=mt(me.eyes,.2,e),rs-=n,rs<=0&&(rs=.22,At.v1.copy(Ye.position),At.v1.x+=(Math.random()-.5)*3.5,At.v1.y+=1.2+Math.random()*2.4,At.v1.z+=(Math.random()-.5)*3.5,rt.effects.burst(At.v1,"magic",{count:12}),rt.camera3p.shake(.1)),bn>=3.4&&(At.v1.copy(Ye.position),At.v1.y+=1.6,rt.effects.burst(At.v1,"death",{count:60,scale:2.8}),rt.effects.burst(At.v1,"magic",{count:60,scale:2.4}),rt.audio.play("kill"),X2())}else je==="endwait"&&bn>=3&&(je=null,rt.setState("ending"))}function bx(){B.state="claw",B.t=0,B.clawHitDone=!1,B.clawCd=1.8/B.speedMul}function Ex(){B.state="chargeWind",B.t=0,B.dashRemain=os===2?2:1,B.chargeCd=8/B.speedMul,rt.audio.play("burn")}function Sx(){B.state="slamWind",B.t=0,B.slamCd=8/B.speedMul}function l0(){B.state="flame",B.t=0,B.fired=!1,B.flameCd=4.5/B.speedMul}function Z2(n){!tr||B.state!=="idle"&&B.state!=="recover"||(n==="claw"?bx():n==="charge"?Ex():n==="slam"?Sx():n==="flame"?l0():n==="stun"&&(B.state="stun",B.t=0))}function $2(n){if(n>12&&B.chargeCd<=0)return Ex();if(n<5&&B.clawCd<=0)return bx();if(n>=5&&n<=12){if(B.slamCd<=0&&(B.flameCd>0||Math.random()<.55))return Sx();if(B.flameCd<=0)return l0()}if(B.flameCd<=0&&n>=5)return l0();B.cd=.4}function Ja(n){B.state="idle",B.t=0,B.cd=n/B.speedMul}function J2(n,t){for(let e of mc)if(!e.active){e.active=!0,e.hitDone=!1,e.r=.6,e.mesh.position.set(n,Qs(n,t)+.5,t),e.mesh.scale.set(.6,.6,1),e.mat.opacity=.95,e.mesh.visible=!0;return}}function K2(n){let t=rt.player;for(let e of mc)if(e.active){if(e.r+=13*n,e.mesh.scale.set(e.r,e.r,1),e.mat.opacity=Ct(1-e.r/26,0,1)*.95,!e.hitDone&&t){let i=t.position.x-e.mesh.position.x,s=t.position.z-e.mesh.position.z,r=Math.hypot(i,s);Math.abs(r-e.r)<1.3&&t.onGround&&(e.hitDone=!0,t.damage(1,e.mesh.position),rt.camera3p.shake(.4))}e.r>26&&(e.active=!1,e.mesh.visible=!1)}}function Q2(){Ti.getWorldPosition(At.v1),At.v2.copy(rt.player.position),At.v2.y+=1.2,At.v2.sub(At.v1),At.v2.lengthSq()<.01&&At.v2.set(0,0,1),At.v2.normalize();let n=0;for(let t of gc){if(t.active||n>=3)continue;let e=(n-1)*.32,i=Math.cos(e),s=Math.sin(e);t.vel.set(At.v2.x*i+At.v2.z*s,At.v2.y*.5,-At.v2.x*s+At.v2.z*i),t.vel.normalize().multiplyScalar(20),t.mesh.position.copy(At.v1),At.v3.copy(At.v1).add(t.vel),t.mesh.lookAt(At.v3),t.life=0,t.active=!0,t.mesh.visible=!0,n++}rt.audio.play("burn")}function j2(n){let t=rt.player;for(let e of gc){if(!e.active)continue;e.life+=n,e.mesh.position.addScaledVector(e.vel,n),e.mesh.rotation.z+=n*9;let i=e.mesh.position,s=!1;t&&(At.v2.copy(t.position),At.v2.y+=1,i.distanceToSquared(At.v2)<1.44&&(t.damage(.5,i),s=!0)),!s&&i.y<Qs(i.x,i.z)+.25&&(s=!0),(s||e.life>4)&&(s&&rt.effects.burst(i,"magic",{count:14}),e.active=!1,e.mesh.visible=!1)}}function tT(n){let t=rt.player.position,e=Ye.position,i=t.x-e.x,s=t.z-e.z,r=Math.hypot(i,s),o=Math.atan2(i,s);B.t+=n,B.clawCd-=n,B.chargeCd-=n,B.slamCd-=n,B.flameCd-=n;let a=0;switch(B.state){case"idle":{B.heading=On(B.heading,o,3*B.speedMul,n),r>4.4&&(a=4.8*B.speedMul),B.cd-=n,B.cd<=0&&$2(r);break}case"rage":{B.t>=1.3&&Ja(.7);break}case"claw":{B.heading=On(B.heading,o,B.t<.5?4:.5,n),!B.clawHitDone&&B.t>=.55&&(B.clawHitDone=!0,rt.audio.play("hit"),r<5&&Math.abs(bo(B.heading,o))<1&&rt.player.damage(.5,e)),B.t>=1.25&&Ja(.9);break}case"chargeWind":{B.heading=On(B.heading,o,1.3,n),B.t>=2&&(B.dashDir.set(Math.sin(B.heading),0,Math.cos(B.heading)),B.state="chargeDash",B.t=0,B.hitDone=!1,rt.audio.play("hit"));break}case"chargeDash":{let l=26*B.speedMul;e.x+=B.dashDir.x*l*n,e.z+=B.dashDir.z*l*n,a=l,!B.hitDone&&r<3.4&&(B.hitDone=!0,rt.player.damage(1,e),rt.camera3p.shake(.5));let c=Ct(e.x,qe.minX+3,qe.maxX-3),h=Ct(e.z,qe.minZ+3,qe.maxZ-3),u=c!==e.x||h!==e.z||B.t>3;e.x=c,e.z=h,u&&(B.dashRemain--,At.v1.copy(e),At.v1.y+=1.5,rt.effects.burst(At.v1,"dust",{count:30,scale:2}),rt.camera3p.shake(.6),rt.audio.play("hit"),B.hitDone?Ja(1.2):B.dashRemain>0?(B.state="chargeTurn",B.t=0):(B.state="stun",B.t=0,rt.audio.play("block")));break}case"chargeTurn":{B.heading=On(B.heading,o,6,n),B.t>=.55&&(B.dashDir.set(Math.sin(B.heading),0,Math.cos(B.heading)),B.state="chargeDash",B.t=0,B.hitDone=!1,rt.audio.play("hit"));break}case"stun":{B.t>=3&&Ja(.8);break}case"slamWind":{if(B.heading=On(B.heading,o,3,n),B.t>=.7){B.leapFrom.copy(e),B.leapTo.set(Ct(t.x,qe.minX+4,qe.maxX-4),0,Ct(t.z,qe.minZ+4,qe.maxZ-4)),At.v1.set(B.leapTo.x-B.leapFrom.x,0,B.leapTo.z-B.leapFrom.z);let l=At.v1.length();l>16&&(At.v1.multiplyScalar(16/l),B.leapTo.set(B.leapFrom.x+At.v1.x,0,B.leapFrom.z+At.v1.z)),B.state="slamAir",B.t=0,rt.audio.play("jump")}break}case"slamAir":{let l=Math.min(1,B.t/.85);e.x=mt(B.leapFrom.x,B.leapTo.x,l),e.z=mt(B.leapFrom.z,B.leapTo.z,l),e.y=mt(Qs(B.leapFrom.x,B.leapFrom.z),Qs(B.leapTo.x,B.leapTo.z),l)+Math.sin(l*Math.PI)*6,l>=1&&(e.y=Qs(e.x,e.z),J2(e.x,e.z),At.v1.copy(e),At.v1.y+=.4,rt.effects.burst(At.v1,"dust",{count:40,scale:2.4}),rt.effects.burst(At.v1,"magic",{count:20,scale:1.5}),rt.camera3p.shake(.75),rt.audio.play("hit"),B.state="slamLand",B.t=0);break}case"slamLand":{B.t>=1&&Ja(1.2);break}case"flame":{B.heading=On(B.heading,o,2.5,n),!B.fired&&B.t>=.85&&(B.fired=!0,Q2()),B.t>=1.55&&Ja(1.3);break}}a>0&&B.state!=="chargeDash"&&(e.x+=Math.sin(B.heading)*a*n,e.z+=Math.cos(B.heading)*a*n),B.state!=="slamAir"&&(e.x=Ct(e.x,qe.minX+3,qe.maxX-3),e.z=Ct(e.z,qe.minZ+3,qe.maxZ-3),e.y=gt(e.y,Qs(e.x,e.z),18,n)),B.gaitT+=a*n*.55,B.moveAmt=gt(B.moveAmt,a>.5?1:0,8,n),Ye.rotation.y=B.heading}function eT(n){bt.pitch=0,bt.roll=0,bt.y=0,bt.headP=0,bt.headY=0,bt.jaw=.06,bt.crouch=0,bt.paw=0,bt.maw=os===2?.9:.4,bt.eyes=os===2?2.8:2.4;let t=je||B.state;if(t==="descend")bt.crouch=.55,bt.jaw=.35,bt.pitch=.1;else if(t==="roar"||t==="rage"||t==="cine"){let e=t==="cine"?Math.max(0,1-bn*1.5):1;bt.pitch=-.32*e,bt.headP=-.85*e,bt.jaw=.85*e,bt.y=.15*e,bt.eyes=3.2}else if(t==="dying")bt.headP=.6,bt.jaw=.5,bt.crouch=.6,bt.eyes=me.eyes;else if(t==="claw")B.t<.55?(bt.paw=1,bt.roll=-.14,bt.headP=-.15,bt.pitch=-.08):(bt.paw=-.55,bt.pitch=.22,bt.headP=.2,bt.jaw=.5);else if(t==="chargeWind")bt.pitch=.3,bt.headP=.45,bt.crouch=.25,bt.jaw=.4,bt.roll=Math.sin(n*42)*.035,bt.eyes=3.4;else if(t==="chargeDash")bt.pitch=.18,bt.headP=.25,bt.jaw=.6;else if(t==="chargeTurn")bt.pitch=.1,bt.crouch=.2;else if(t==="stun")bt.headP=.75,bt.crouch=.4,bt.jaw=.42,bt.eyes=.05,bt.roll=Math.sin(n*2.2)*.04;else if(t==="slamWind")bt.crouch=.85,bt.pitch=.18,bt.headP=.3;else if(t==="slamAir")bt.crouch=.5,bt.pitch=-.15+Math.min(1,B.t/.85)*.4,bt.jaw=.5;else if(t==="slamLand")bt.crouch=.55,bt.pitch=.12,bt.headP=.25;else if(t==="flame"){let e=B.fired?Math.max(0,1-(B.t-.85)*2.2):Math.min(1,B.t/.85);bt.headP=-.55*e,bt.pitch=-.12*e,bt.jaw=.85*e,bt.maw=.4+e*3.2}else if(bt.y=Math.sin(n*1.9)*.05,tr&&!je){let e=bo(B.heading,Math.atan2(rt.player.position.x-Ye.position.x,rt.player.position.z-Ye.position.z));bt.headY=Ct(e,-.5,.5)}}function nT(n,t){eT(t),me.pitch=gt(me.pitch,bt.pitch,9,n),me.roll=gt(me.roll,bt.roll,9,n),me.y=gt(me.y,bt.y,9,n),me.headP=gt(me.headP,bt.headP,10,n),me.headY=gt(me.headY,bt.headY,7,n),me.jaw=gt(me.jaw,bt.jaw,12,n),me.crouch=gt(me.crouch,bt.crouch,9,n),me.paw=gt(me.paw,bt.paw,13,n),me.maw=gt(me.maw,bt.maw,10,n),me.eyes=gt(me.eyes,bt.eyes,10,n),je!=="dying"?(In.rotation.x=me.pitch,In.rotation.z=me.roll,In.position.y=2.5+me.y-me.crouch*.85):In.rotation.x=me.pitch,zo.rotation.x=me.headP*.55,zo.rotation.y=me.headY,Ti.rotation.x=me.headP*.55,qr.rotation.x=me.jaw;let e=[0,Math.PI,Math.PI,0];for(let i=0;i<4;i++){let s=_x[i],o=Math.sin(B.gaitT+e[i])*.55*B.moveAmt-me.crouch*.55,a=Math.max(0,-Math.sin(B.gaitT+e[i]))*.7*B.moveAmt+me.crouch*1.05;i===0&&(o-=me.paw*1.5,a+=Math.max(0,me.paw)*1.1),s.upper.rotation.x=o,s.lower.rotation.x=a}for(let i=0;i<fc.length;i++)fc[i].rotation.y=Math.sin(t*2.1+i*.7)*.15*(1+B.moveAmt*.8),fc[i].rotation.x=Math.sin(t*1.3+i*.5)*.05+me.crouch*.08;if(js.emissiveIntensity=me.eyes+(os===2?Math.sin(t*7)*.25:0),ko.emissiveIntensity=me.maw,Bo>0){Bo=Math.max(0,Bo-n*4.5);let i=Bo*Bo;Ks.emissive.setRGB(.5*i,.16*i,.75*i),je!=="dying"&&(ws.emissiveIntensity=(os===2?2.1:1.5)+i*2.5)}if(os===2&&Ai.alive){Ho.opacity=gt(Ho.opacity,.11+Math.sin(t*5.5)*.04,6,n);let i=1+Math.sin(t*4.7)*.045;Cu.scale.setScalar(i)}else Ho.opacity=gt(Ho.opacity,0,8,n)}function iT(){let n=rt.player,t=rt.world.castleGatePos,e=n.position.x-t.x,i=n.position.z-t.z;e*e+i*i<36?(dc||(dc=!0,n.spiritOrbs<3&&rt.ui.showMessage("\u7D50\u754C\u306F\u56FA\u304F\u9589\u3056\u3055\u308C\u3066\u3044\u308B",{sub:"\u6C17\u306E\u73E0\u304C3\u3064\u5FC5\u8981\u3060"})),n.spiritOrbs>=3?(bs||(rt.ui.setPrompt("E: \u7D50\u754C\u3092\u7834\u308B"),bs=!0),rt.input.justPressed("KeyE")&&k2()):bs&&(rt.ui.setPrompt(null),bs=!1)):(dc=!1,bs&&(rt.ui.setPrompt(null),bs=!1))}function sT(n,t){if(!rt||!Ye)return;let e=n.time.elapsed;Es.visible&&(pc.uniforms.uTime.value=e,je||(Iu.emissiveIntensity=1.7+Math.sin(e*2.1)*.45),o0.opacity=.3+Math.sin(e*1.6)*.08,Oo.rotation.z=e*.15),Yr.visible&&(a0.uniforms.uTime.value=e),je?Y2(t):tr&&n.state==="boss"&&Ai.alive&&tT(t),(tr||je==="dying")&&(K2(t),j2(t)),Ye.visible&&nT(t,e),n.state==="playing"&&!je&&!tr&&!n.boss.defeated&&Es.visible&&iT()}var nl={};cs(nl,{init:()=>wT,update:()=>TT});var Dt=null,Zr,$r,el,_e,Go,Lu,xc,Du=null,Kr=null,wx="__none",Jr=[],d0=0,Uu=!1,Tx="",as=null,Qa=0,ja=0,xn=n=>440*Math.pow(2,(n-69)/12),Yn=Math.random,rT=.35;function oT(){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Dt=new n,$r=Dt.createDynamicsCompressor(),$r.threshold.value=-16,$r.knee.value=18,$r.ratio.value=5,$r.attack.value=.004,$r.release.value=.22,Zr=he(.9),Zr.connect($r),$r.connect(Dt.destination),el=he(0),_e=he(.9),Go=he(0),el.connect(Zr),_e.connect(Zr),Go.connect(Zr),Lu=Dt.createConvolver(),Lu.buffer=aT(2.6,2.6);let t=he(.5);Lu.connect(t),t.connect(Zr);for(let[o,a]of[[el,.32],[_e,.18],[Go,.1]]){let l=he(a);o.connect(l),l.connect(Lu)}xc=Dt.createDelay(1),xc.delayTime.value=.31;let e=Dt.createBiquadFilter();e.type="lowpass",e.frequency.value=2200;let i=he(.32);xc.connect(e),e.connect(i),i.connect(xc);let s=he(.35);e.connect(s),s.connect(Zr);let r=he(.16);el.connect(r),r.connect(xc),MT();try{window.__audioDbg={get ctx(){return Dt},get master(){return Zr}}}catch{}}function aT(n,t){let e=Math.max(1,Math.floor(Dt.sampleRate*n)),i=Dt.createBuffer(2,e,Dt.sampleRate);for(let s=0;s<2;s++){let r=i.getChannelData(s),o=0;for(let a=0;a<e;a++){let l=(Yn()*2-1)*Math.pow(1-a/e,t);o=o*.62+l*.38,r[a]=o}}return i}function Nu(){if(!Du){let n=Dt.sampleRate*2;Du=Dt.createBuffer(1,n,Dt.sampleRate);let t=Du.getChannelData(0);for(let e=0;e<n;e++)t[e]=Yn()*2-1}return Du}function he(n){let t=Dt.createGain();return t.gain.value=n,t}function qn(n,t){n.onended=()=>{for(let e of t)try{e.disconnect()}catch{}}}function tn(n,t,e,i){let s=Dt.createOscillator();return s.type=n,s.frequency.value=t,s.start(e),s.stop(i),s}function yc(n,t){let e=Dt.createBufferSource();e.buffer=Nu(),e.loop=!0;try{e.start(n,Yn()*1.5)}catch{e.start(n)}return e.stop(n+t),e}function Ax(n){if(Dt.createStereoPanner){let t=Dt.createStereoPanner();return t.pan.value=Ct(n,-1,1),t}return he(1)}function Ri(n,t,e,i){n.setValueAtTime(1e-4,t),n.linearRampToValueAtTime(e,t+.008),n.setTargetAtTime(1e-4,t+.012,i)}function vc(n,t,e,i,s,r){let o=Math.max(t+e,t+s);n.setValueAtTime(1e-4,t),n.linearRampToValueAtTime(i,t+e),n.setValueAtTime(i,o),n.linearRampToValueAtTime(1e-4,o+r)}var ke={harp(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("triangle",t,n,n+2.2);o.connect(r),Ri(r.gain,n,i,.32);let a=he(0);a.connect(s);let l=tn("sine",t*2,n,n+1.1);l.connect(a),Ri(a.gain,n,i*.18,.14),qn(o,[r,a,o,l])},piano(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("triangle",t,n,n+5);o.connect(r),Ri(r.gain,n,i,.9);let a=he(0);a.connect(s);let l=tn("sine",t*2.001,n,n+2.5);l.connect(a),Ri(a.gain,n,i*.12,.35),qn(o,[r,a,o,l])},flute(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("sine",t,n,n+e+.35);o.connect(r);let a=tn("sine",5.2,n,n+e+.35),l=he(0);a.connect(l),l.connect(o.detune),l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(14,n+Math.min(.5,e*.6)),vc(r.gain,n,.07,i,Math.max(.1,e-.06),.18);let c=Dt.createBiquadFilter();c.type="bandpass",c.frequency.value=t*2,c.Q.value=9;let h=he(0),u=yc(n,e+.3);u.connect(c),c.connect(h),h.connect(s),vc(h.gain,n,.09,i*.05,Math.max(.1,e-.06),.15),qn(o,[r,o,a,l,c,h,u])},strings(n,t,e,i,s){let r=Dt.createBiquadFilter();r.type="lowpass",r.frequency.value=Math.min(t*3.2,2600),r.Q.value=.4;let o=he(0);r.connect(o),o.connect(s);let a=tn("sawtooth",t,n,n+e+1.3);a.detune.value=-6,a.connect(r);let l=tn("sawtooth",t*1.003,n,n+e+1.3);l.detune.value=6,l.connect(r),vc(o.gain,n,Math.min(.6,e*.35),i,e,1),qn(a,[r,o,a,l])},bass(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("sine",t,n,n+e+.2);o.connect(r);let a=tn("square",t,n,n+e+.2),l=he(.13);a.connect(l),l.connect(r),vc(r.gain,n,.015,i,e*.85,.1),qn(o,[r,o,a,l])},bell(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("sine",t,n,n+3.2),a=tn("sine",t*2.76,n,n+3.2),l=he(0);a.connect(l),l.connect(o.frequency),l.gain.setValueAtTime(t*1.6,n),l.gain.setTargetAtTime(1e-4,n,.35),o.connect(r),Ri(r.gain,n,i,Ct(e,.5,1.2)),qn(o,[r,o,a,l])},kick(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("sine",120,n,n+.32);o.connect(r),o.frequency.setValueAtTime(120,n),o.frequency.exponentialRampToValueAtTime(42,n+.11),Ri(r.gain,n,i,.09),qn(o,[r,o])},taiko(n,t,e,i,s){let r=he(0);r.connect(s);let o=tn("sine",96,n,n+.6);o.connect(r),o.frequency.setValueAtTime(96,n),o.frequency.exponentialRampToValueAtTime(52,n+.2),Ri(r.gain,n,i,.16);let a=Dt.createBiquadFilter();a.type="bandpass",a.frequency.value=180,a.Q.value=6;let l=he(0),c=yc(n,.4);c.connect(a),a.connect(l),l.connect(s),Ri(l.gain,n,i*.5,.09),qn(o,[r,o,a,l,c])},shaker(n,t,e,i,s){let r=Dt.createBiquadFilter();r.type="highpass",r.frequency.value=6500;let o=he(0),a=yc(n,.14);a.connect(r),r.connect(o),o.connect(s),Ri(o.gain,n,i,.025),qn(a,[r,o,a])},snare(n,t,e,i,s){let r=Dt.createBiquadFilter();r.type="bandpass",r.frequency.value=1700,r.Q.value=.8;let o=he(0),a=yc(n,.2);a.connect(r),r.connect(o),o.connect(s),Ri(o.gain,n,i,.06);let l=he(0);l.connect(s);let c=tn("sine",210,n,n+.12);c.connect(l),Ri(l.gain,n,i*.6,.035),qn(a,[r,o,a,l,c])}};function be(n,t,e,i,s,r){n.push({t,i:e,f:i>0?xn(i):0,d:s,v:r})}function nr(n,t,e,i,s,r){for(let o of i)be(n,t,e,o,s,r)}function lT(){let n=[],t=[[50,53,57,62],[46,50,53,58],[53,57,60,65],[48,52,55,60],[50,53,57,62],[43,46,50,55],[45,49,52,57],[50,53,57,62]],e=[0,1,2,3,2,1,2,3];return t.forEach((i,s)=>{let r=s*4;e.forEach((o,a)=>be(n,r+a*.5,"harp",i[o],.5,a===0?.4:.28)),nr(n,r,"strings",[i[0]+12,i[1]+12,i[2]+12],4.1,.08),be(n,r,"bass",i[0]-12,3.5,.28)}),[[0,69],[8,70],[16,69],[22,67],[24,65],[28,64]].forEach(([i,s])=>be(n,i,"bell",s,3,.13)),{bpm:72,beats:32,events:n}}function cT(){let n=[],t=[43,47,50],e=[48,52,55],i=[40,43,47],s=[50,54,57];[t,t,e,t,i,e,s,s,t,t,e,[45,48,52],t,e,s,t].forEach((c,h)=>{let u=h*4;be(n,u,"bass",c[0],.9,.4),be(n,u+1.5,"bass",c[0],.4,.28),be(n,u+2,"bass",c[0]+7,.9,.34),be(n,u+3,"bass",c[0],.9,.28),nr(n,u,"strings",[c[0]+12,c[1]+12,c[2]+12],3.9,.065),be(n,u+1,"harp",c[1]+24,.5,.15),be(n,u+3.5,"harp",c[2]+24,.5,.12),be(n,u,"kick",0,0,.42),be(n,u+2,"kick",0,0,.34);for(let f=0;f<8;f++)be(n,u+f*.5,"shaker",0,0,f%2?.13:.07)}),[3,7,11,15].forEach(c=>{[0,.25,.5,.75].forEach((h,u)=>be(n,c*4+3+h,"taiko",0,0,.2+u*.05))});let a=[[0,71,1],[1,74,.5],[1.5,76,.5],[2,79,1.9],[4,78,1],[5,76,.5],[5.5,74,.5],[6,76,1.9],[8,72,1],[9,74,.5],[9.5,76,.5],[10,74,1],[11,71,.9],[12,69,2.4],[14.5,71,.5],[15,72,.9],[16,74,1],[17,79,1],[18,81,1.9],[20,83,1.4],[21.5,81,.5],[22,79,1],[23,76,.9],[24,74,1],[25,76,.5],[25.5,78,.5],[26,81,1],[27,78,.9],[28,79,2.8]],l=[[0,71,1],[1,74,.5],[1.5,76,.5],[2,79,1.9],[4,81,1],[5,79,.5],[5.5,78,.5],[6,79,1.9],[8,84,1],[9,83,.5],[9.5,81,.5],[10,79,1],[11,76,.9],[12,74,2.4],[14.5,74,.5],[15,76,.9],[16,79,1],[17,83,1],[18,86,1.9],[20,84,1.4],[21.5,83,.5],[22,81,1],[23,79,.9],[24,78,1],[25,81,1],[26,74,1],[27,76,.9],[28,79,2.8]];return a.forEach(([c,h,u])=>be(n,c,"flute",h,u,.4)),l.forEach(([c,h,u])=>be(n,c+32,"flute",h,u,.42)),{bpm:102,beats:64,events:n}}function hT(){let n=[];return[[0,[45,52,57]],[8,[41,48,53]],[16,[43,50,55]],[24,[40,47,52]]].forEach(([e,i])=>nr(n,e,"strings",i,8.2,.045)),[[0,69,2],[3,72,1],[4,76,3],[8,74,2],[11,72,1],[12,69,3.5],[16,67,2],[19,69,1],[20,74,3.5],[24,76,1.5],[26,72,1.5],[28,69,3.5]].forEach(([e,i,s])=>be(n,e,"piano",i,s,.28)),be(n,14,"piano",57,1.5,.16),be(n,30,"piano",52,1.5,.14),{bpm:60,beats:32,events:n}}function uT(){let n=[];for(let t=0;t<8;t++)be(n,t*4,"bass",38,4.3,.22),t%2===0&&nr(n,t*4,"strings",[50,57],8.3,.05);return[[0,74,3],[6,77,2],[10,79,2],[14,81,3],[20,79,2],[24,71,3],[28,72,2]].forEach(([t,e,i])=>be(n,t,"bell",e,i,.24)),be(n,12,"bell",86,2,.08),be(n,26,"bell",84,2,.07),{bpm:66,beats:32,events:n}}function fT(){let n=[],t=[40,40,41,40,43,40,46,40],e=[45,45,46,45,48,45,51,45];for(let i=0;i<8;i++){let s=i<4?t:e,r=i*4;s.forEach((o,a)=>be(n,r+a*.5,"bass",o,.28,a%2?.36:.48));for(let o=0;o<4;o++)be(n,r+o,"kick",0,0,.5);be(n,r+1,"snare",0,0,.36),be(n,r+3,"snare",0,0,.36);for(let o=0;o<8;o++)be(n,r+o*.5+.25,"shaker",0,0,.1);i%4===3&&[3,3.25,3.5,3.75].forEach((o,a)=>be(n,r+o,"taiko",0,0,.26+a*.07))}return nr(n,0,"strings",[64,65,70],1.6,.15),nr(n,8,"strings",[64,65,70],1.6,.15),nr(n,16,"strings",[69,70,75],1.6,.16),nr(n,24,"strings",[70,71,76],1.6,.17),be(n,4,"bell",76,1.5,.18),be(n,12,"bell",75,1.5,.18),be(n,20,"bell",81,1.5,.2),be(n,28,"bell",82,1.5,.2),{bpm:140,beats:32,events:n}}function dT(){let n=[],t=[43,47,50],e=[48,52,55],i=[45,48,52],s=[50,54,57],r=[t,e,i,s,t,e,s,t],o=[0,2,1,2];return r.forEach((l,c)=>{let h=c*4;nr(n,h,"strings",[l[0]+12,l[1]+12,l[2]+12],4.2,.1),be(n,h,"bass",l[0],3.6,.3),o.forEach((u,f)=>be(n,h+f,"harp",l[u]+24,1,.18))}),[[0,71,1.5],[1.5,74,.5],[2,79,1.9],[4,81,1],[5,79,1],[6,76,1.9],[8,72,1],[9,74,1],[10,76,1],[11,74,.9],[12,71,1],[13,69,2.9],[16,74,1.5],[17.5,79,.5],[18,81,1.9],[20,83,2],[22,81,1],[23,79,.9],[24,78,1],[25,81,1],[26,79,1],[27,76,.9],[28,79,3.6]].forEach(([l,c,h])=>be(n,l,"flute",c,h,.38)),[[0,67],[8,72],[16,67],[24,74]].forEach(([l,c])=>be(n,l,"bell",c,2,.12)),{bpm:76,beats:32,events:n}}var zu={title:lT,field:cT,night:hT,shrine:uT,boss:fT,ending:dT},c0={};function pT(n){if(!n||!zu[n])return null;if(!c0[n]){let t=zu[n]();t.events.sort((e,i)=>e.t-i.t),c0[n]=t}return c0[n]}function Rx(n,t){let e=pT(n);if(!e)return null;let i=he(0);i.connect(el);let s=Dt.currentTime;return i.gain.setValueAtTime(1e-4,s),i.gain.linearRampToValueAtTime(1,s+t),{name:n,def:e,g:i,idx:0,loopStart:s+.06,fading:!1,killAt:0}}function mT(n,t){if(n.fading)return;n.fading=!0;let e=Dt.currentTime,i=n.g.gain.value;n.g.gain.cancelScheduledValues(e),n.g.gain.setValueAtTime(Math.max(i,1e-4),e),n.g.gain.linearRampToValueAtTime(1e-4,e+t),n.killAt=e+t+.15}function f0(n){if(Kr=n&&zu[n]?n:null,!!Dt){for(let t of Jr)mT(t,2);if(Kr&&Dt.state==="running"){let t=Rx(Kr,2);t&&Jr.push(t)}}}function gT(n,t){let e=n.def,i=60/e.bpm,s=e.events,r=e.beats*i,o=Dt.currentTime;if(n.loopStart+r<o){let l=Math.floor((o-n.loopStart)/r);n.loopStart+=l*r,n.idx=0}let a=0;for(;a++<4e3;){if(n.idx>=s.length){n.idx=0,n.loopStart+=r;continue}let l=s[n.idx],c=n.loopStart+l.t*i;if(c>=t)break;if(n.idx++,c<o-.03)continue;let h=ke[l.i];h&&h(c,l.f,Math.max(.05,l.d*i),l.v,n.g)}}function xT(){if(!Dt||Dt.state!=="running")return;d0=Dt.currentTime+4;let n=Dt.currentTime+.05;[[0,79],[.14,84],[.28,88],[.42,91]].forEach(([t,e])=>{ke.bell(n+t,xn(e),1,.34,_e),ke.harp(n+t,xn(e),.8,.26,_e)}),[84,88,91,96].forEach(t=>ke.bell(n+.72,xn(t),2.4,.16,_e)),ke.strings(n+.72,xn(60),2.2,.07,_e),ke.strings(n+.72,xn(64),2.2,.07,_e),ke.strings(n+.72,xn(67),2.2,.07,_e)}function yT(){if(!Dt||Dt.state!=="running")return;d0=Dt.currentTime+6;let n=Dt.currentTime+.05,t=(e,i,s,r)=>{ke.strings(n+e,xn(i),s,r,_e),ke.bell(n+e,xn(i+12),s,r*.55,_e)};t(0,67,.16,.24),t(.2,67,.16,.24),t(.4,67,.16,.24),t(.6,72,.7,.28),t(1.35,71,.18,.24),t(1.55,72,.18,.24),t(1.75,74,.9,.3),[67,71,74,79].forEach(e=>t(2.7,e,2.2,.16)),[0,.6,1.75,2.7].forEach(e=>{ke.kick(n+e,0,0,.5,_e),ke.taiko(n+e,0,0,.4,_e)})}function Cx(){if(!Dt||Dt.state!=="running")return;let n=Dt.currentTime+.1;ke.piano(n,xn(64),1.2,.32,_e),ke.piano(n+.9,xn(60),1.2,.3,_e),ke.piano(n+1.8,xn(57),2.5,.3,_e),ke.strings(n+1.8,xn(45),2.6,.07,_e),ke.strings(n+1.8,xn(52),2.6,.06,_e)}function vT(){if(!Dt||Dt.state!=="running")return;let n=Dt.currentTime+.02;ke.taiko(n,0,0,.6,_e),ke.kick(n,0,0,.6,_e),ke.taiko(n+.14,0,0,.5,_e),ke.kick(n+.14,0,0,.55,_e),ke.snare(n+.28,0,0,.4,_e)}function Xn(n,{type:t="bandpass",f0:e=800,f1:i=3e3,q:s=1,dur:r=.15,vel:o=.3,a=.01}){let l=Dt.createBiquadFilter();l.type=t,l.Q.value=s,l.frequency.setValueAtTime(Math.max(30,e),n),l.frequency.exponentialRampToValueAtTime(Math.max(30,i),n+r);let c=he(0),h=yc(n,r+.12);h.connect(l),l.connect(c),c.connect(_e),c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(o,n+a),c.gain.linearRampToValueAtTime(1e-4,n+r),qn(h,[l,c,h])}function tl(n,t,e,i,s,r="sine"){let o=he(0);o.connect(_e);let a=tn(r,t,n,n+i+.05);a.connect(o),a.frequency.setValueAtTime(Math.max(20,t),n),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),n+i),o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(s,n+.012),o.gain.linearRampToValueAtTime(1e-4,n+i),qn(a,[o,a])}function er(n,t,e,i,s){let r=he(0);r.connect(_e);let o=tn("sine",t,n,n+i+.1);o.connect(r),o.frequency.setValueAtTime(t,n),o.frequency.exponentialRampToValueAtTime(Math.max(25,e),n+i*.7),Ri(r.gain,n,s,i*.5),qn(o,[r,o])}function h0(n,t,e){Xn(n,{f0:900*t,f1:4200*t,q:1.6,dur:.16,vel:.5*e}),Xn(n,{type:"highpass",f0:3e3*t,f1:7e3*t,q:.7,dur:.1,vel:.2*e}),tl(n,520*t,180*t,.09,.1*e,"triangle")}var _T={sword1(n,t,e){h0(n,1,e)},sword2(n,t,e){h0(n,1.14,e)},sword3(n,t,e){h0(n,1.3,e)},hit(n,t,e){Xn(n,{f0:1100,f1:260,q:1.1,dur:.11,vel:.5*e}),er(n,150,55,.14,.5*e)},kill(n,t,e){tl(n,620,85,.42,.22*e,"sawtooth"),Xn(n,{f0:2200,f1:280,q:2,dur:.42,vel:.2*e}),ke.bell(n,660,.35,.14*e,_e)},damage(n,t,e){er(n,210,48,.2,.6*e),Xn(n,{type:"lowpass",f0:900,f1:160,dur:.14,vel:.3*e})},block(n,t,e){let i=he(0);i.connect(_e);let s=tn("square",820,n,n+.2),r=tn("square",1240,n,n+.2),o=he(.5);s.connect(i),r.connect(o),o.connect(i),Ri(i.gain,n,.26*e,.045),qn(s,[i,s,r,o]),Xn(n,{type:"highpass",f0:4e3,f1:6e3,dur:.04,vel:.24*e}),er(n,300,120,.07,.2*e)},step(n,t,e){let i=.9+Yn()*.22;er(n,190*i,80*i,.07,.16*e),Xn(n,{type:"lowpass",f0:900*i,f1:300,dur:.05,vel:.07*e})},jump(n,t,e){tl(n,300,620,.16,.18*e),Xn(n,{f0:500,f1:1400,q:1,dur:.12,vel:.08*e})},land(n,t,e){er(n,170,60,.1,.3*e),Xn(n,{type:"lowpass",f0:800,f1:200,dur:.08,vel:.14*e})},roll(n,t,e){Xn(n,{f0:480,f1:950,q:.6,dur:.24,vel:.2*e,a:.05}),er(n+.16,140,70,.08,.12*e)},pickup(n,t,e){tl(n,880,1320,.09,.2*e),ke.harp(n+.02,1760,.15,.12*e,_e)},heart(n,t,e){ke.bell(n,xn(76),.5,.22*e,_e),ke.bell(n+.13,xn(81),.8,.24*e,_e),ke.harp(n,xn(64),.5,.14*e,_e)},orb(n,t,e){let i=he(0);i.connect(_e);let s=tn("sine",440,n,n+.7),r=tn("sine",441.5,n,n+.7);s.connect(i),r.connect(i);for(let o of[s,r])o.frequency.setValueAtTime(440,n),o.frequency.exponentialRampToValueAtTime(1760,n+.55);vc(i.gain,n,.05,.16*e,.5,.15),qn(s,[i,s,r]),ke.bell(n+.5,xn(88),1.4,.26*e,_e),ke.bell(n+.62,xn(93),1.6,.18*e,_e)},chest(n,t,e){[[0,72],[.13,76],[.26,79]].forEach(([i,s],r)=>{ke.harp(n+i,xn(s),.4,.26*e,_e),ke.bell(n+i,xn(s),r===2?1.4:.4,.18*e,_e)})},switch(n,t,e){er(n,120,40,.28,.5*e),Xn(n,{type:"lowpass",f0:420,f1:90,dur:.24,vel:.28*e,a:.03}),Xn(n+.03,{f0:700,f1:300,q:5,dur:.16,vel:.09*e})},torch(n,t,e){Xn(n,{type:"lowpass",f0:3200,f1:420,dur:.2,vel:.4*e}),er(n,110,60,.09,.2*e)},ui(n,t,e){Xn(n,{f0:1200,f1:1100,q:8,dur:.035,vel:.2*e,a:.004}),tl(n,660,620,.05,.14*e,"triangle")},uiBack(n,t,e){Xn(n,{f0:800,f1:720,q:8,dur:.04,vel:.16*e,a:.004}),tl(n,440,400,.06,.12*e,"triangle")},burn(n,t,e){Xn(n,{type:"lowpass",f0:2600,f1:380,dur:.3,vel:.4*e});for(let i=0;i<4;i++)Xn(n+.04+Yn()*.2,{f0:1500+Yn()*1500,f1:600,q:3,dur:.05,vel:.14*e});er(n,100,50,.16,.28*e)}};function MT(){as={};let n=t=>{let e=he(0);return t(e),e.connect(Go),{g:e,target:0,applied:-1}};as.wind=n(t=>{let e=Dt.createBiquadFilter();e.type="bandpass",e.frequency.value=480,e.Q.value=.35;let i=Dt.createBufferSource();i.buffer=Nu(),i.loop=!0,i.start(),i.connect(e),e.connect(t);let s=tn("sine",.13,Dt.currentTime,Dt.currentTime+86400),r=he(.35);s.connect(r),r.connect(t.gain);let o=he(180);s.connect(o),o.connect(e.frequency)}),as.rumble=n(t=>{let e=Dt.createBiquadFilter();e.type="lowpass",e.frequency.value=75,e.Q.value=1.1;let i=Dt.createBufferSource();i.buffer=Nu(),i.loop=!0,i.start(),i.connect(e),e.connect(t);let s=tn("sine",.45,Dt.currentTime,Dt.currentTime+86400),r=he(.5);s.connect(r),r.connect(t.gain)}),as.water=n(t=>{let e=Dt.createBiquadFilter();e.type="bandpass",e.frequency.value=950,e.Q.value=.6;let i=Dt.createBufferSource();i.buffer=Nu(),i.loop=!0,i.start(),i.connect(e),e.connect(t);let s=tn("sine",.7,Dt.currentTime,Dt.currentTime+86400),r=he(.6);s.connect(r),r.connect(t.gain);let o=he(320);s.connect(o),o.connect(e.frequency)})}function bT(n){let t=2300+Yn()*1500,e=2+(Yn()*3|0),i=he(0),s=Ax(Yn()*1.6-.8),r=tn("sine",t,n,n+e*.13+.1);r.connect(i),i.connect(s),s.connect(Go);for(let o=0;o<e;o++){let a=n+o*(.08+Yn()*.05);r.frequency.setValueAtTime(t+Yn()*350,a),r.frequency.exponentialRampToValueAtTime(t*(1.22+Yn()*.25),a+.05),i.gain.setValueAtTime(1e-4,a),i.gain.linearRampToValueAtTime(.05+Yn()*.035,a+.015),i.gain.linearRampToValueAtTime(1e-4,a+.065)}qn(r,[i,s,r])}function ET(n){let t=Ax(Yn()*1.2-.6);t.connect(Go);let e=null;for(let i=0;i<3;i++){let s=n+i*.085,r=tn("triangle",4250+Yn()*120,s,s+.06),o=he(0);r.connect(o),o.connect(t),o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(.028,s+.012),o.gain.linearRampToValueAtTime(1e-4,s+.05),qn(r,[r,o]),e=r}if(e){let i=e.onended;e.onended=()=>{i?.();try{t.disconnect()}catch{}}}}function u0(n,t,e){Math.abs(t.applied-e)<.004||(t.applied=e,n.setTargetAtTime(e,Dt.currentTime,.4))}function ST(n,t){let e=n.state,i=e==="playing"||e==="boss",s=i||e==="title"||e==="ending",r=0,o=0,a=0;if(s&&e!=="paused"&&(r=.05),i&&n.world&&n.player){let h=n.world.getBiome(n.player.position.x,n.player.position.z);h==="volcano"&&(o=.14),h==="lake"&&(a=.09)}e==="shrine"&&(r=0,o=0,a=0),u0(as.wind.g.gain,as.wind,r),u0(as.rumble.g.gain,as.rumble,o),u0(as.water.g.gain,as.water,a);let l=e==="playing"&&!n.time.isNight,c=e==="playing"&&n.time.isNight;l?Qa<t+.4&&(bT(Math.max(Qa,t+.08)),Qa=Math.max(Qa,t)+1.2+Yn()*4.5):Qa=Math.max(Qa,t+1.5),c?ja<t+.4&&(ET(Math.max(ja,t+.08)),ja=Math.max(ja,t)+1.05+Yn()*.25):ja=Math.max(ja,t+1.5)}async function wT(n){n.audio={unlock(){try{if(Dt||oT(),Dt&&Dt.state!=="running"){let t=Dt.resume();t&&t.catch&&t.catch(()=>{})}}catch{}},play(t,e={}){try{if(!Dt||Dt.state!=="running")return;let i=_T[t];if(!i)return;i(Dt.currentTime+.005,e||{},Ct((e&&e.vol)!=null?e.vol:1,0,2))}catch{}},setMusic(t){try{let e=t||null;if(e===Kr||e&&!zu[e])return;f0(e)}catch{}}},n.on("shrine-complete",()=>{try{xT()}catch{}}),n.on("boss-defeated",()=>{try{yT()}catch{}}),n.on("boss-phase",()=>{try{vT()}catch{}}),n.on("player-died",()=>{try{Uu=!0,f0(null),Cx()}catch{}})}function TT(n,t){if(!Dt||Dt.state!=="running")return;let e=Dt.currentTime,i=n.state,s=1;i==="paused"&&(s=.4),e<d0&&(s*=.3);let r=Ct(n.settings.musicVol!=null?n.settings.musicVol:.7,0,1),o=Ct(n.settings.sfxVol!=null?n.settings.sfxVol:.9,0,1);if(el.gain.setTargetAtTime(r*s*.9,e,.12),_e.gain.setTargetAtTime(o,e,.12),Go.gain.setTargetAtTime(o*(i==="paused"?.2:.85),e,.25),i!=="paused"){let l;i==="title"?l="title":i==="ending"?l="ending":i==="boss"?l="boss":i==="shrine"?l="shrine":i==="playing"?l=n.time.isNight?"night":"field":l=null,l!==wx&&(wx=l,l!==Kr&&f0(l))}if(i==="gameover"&&Tx!=="gameover"&&!Uu){Uu=!0;try{Cx()}catch{}}if(i==="playing"&&(Uu=!1),Tx=i,Kr&&!Jr.some(l=>l.name===Kr&&!l.fading)){let l=Rx(Kr,1.5);l&&Jr.push(l)}let a=e+rT;for(let l of Jr)gT(l,a);Jr.some(l=>l.killAt&&e>l.killAt)&&(Jr=Jr.filter(l=>{if(l.killAt&&e>l.killAt){try{l.g.disconnect()}catch{}return!1}return!0})),as&&ST(n,e)}var sl={};cs(sl,{init:()=>PT,update:()=>LT});var Qt=null,dn=null,et={},jr={playTime:0,kills:0},Ix="M12 20.3C7.9 17.2 1.7 12.6 1.7 7.8 1.7 4.8 4 2.6 6.7 2.6c2.1 0 4 1.2 5.3 3.3 1.3-2.1 3.2-3.3 5.3-3.3 2.7 0 5 2.2 5 5.2 0 4.8-6.2 9.4-10.3 12.5z",AT=150.8,RT=["\u9060\u304D\u6614\u2014\u2014\u5927\u5730\u30A2\u30EB\u30C7\u30A3\u30A2\u3092\u95C7\u3067\u8986\u3063\u305F\u9B54\u7363\u30F4\u30A1\u30EB\u30E2\u30B9\u306F\u3001\u521D\u4EE3\u52C7\u8005\u306E\u5263\u306B\u3088\u3063\u3066\u5317\u306E\u53E4\u57CE\u306E\u5965\u6DF1\u304F\u306B\u5C01\u3058\u3089\u308C\u305F\u3002","\u3060\u304C\u6C38\u304D\u6642\u306F\u5C01\u5370\u3092\u8755\u307F\u3001\u9B54\u7363\u306F\u3044\u307E\u518D\u3073\u76EE\u899A\u3081\u308B\u3002\u57CE\u306F\u7634\u6C17\u306B\u6C88\u307F\u3001\u5927\u5730\u306B\u306F\u9B54\u7269\u306E\u5F71\u304C\u9019\u3044\u59CB\u3081\u305F\u2026\u2026\u3002","\u7DD1\u8863\u306E\u52C7\u8005\u3088\u2014\u20144\u3064\u306E\u7960\u3092\u5DE1\u308A\u300C\u6C17\u306E\u73E0\u300D\u30923\u3064\u96C6\u3081\u3001\u5317\u306E\u9B54\u57CE\u306E\u7D50\u754C\u3092\u7834\u308B\u306E\u3060\u3002\u5927\u5730\u306E\u547D\u904B\u306F\u3001\u305D\u306E\u624B\u306B\u3002"],CT=[["W A S D","\u79FB\u52D5"],["\u30DE\u30A6\u30B9","\u30AB\u30E1\u30E9"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3"],["C","\u56DE\u907F\u30ED\u30FC\u30EB"]],IT=[["WASD / \u77E2\u5370","\u79FB\u52D5"],["\u30DE\u30A6\u30B9 / \u30C9\u30E9\u30C3\u30B0","\u30AB\u30E1\u30E9(\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u56FA\u5B9A)"],["Shift","\u30C0\u30C3\u30B7\u30E5(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB)"],["Space","\u30B8\u30E3\u30F3\u30D7"],["\u5DE6\u30AF\u30EA\u30C3\u30AF / J","\u653B\u6483(3\u6BB5\u30B3\u30F3\u30DC)"],["\u53F3\u30AF\u30EA\u30C3\u30AF / K","\u76FE\u30AC\u30FC\u30C9"],["Q","\u30ED\u30C3\u30AF\u30AA\u30F3\u5207\u66FF"],["C","\u56DE\u907F\u30ED\u30FC\u30EB(\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB\u30FB\u7121\u6575\u6642\u9593)"],["E","\u8ABF\u3079\u308B\u30FB\u8A71\u3059\u30FB\u6C7A\u5B9A"],["Esc / P","\u30DD\u30FC\u30BA"]];function ye(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e&&e.appendChild(i),i}function _c(n,t){n.classList.remove(t),n.offsetWidth,n.classList.add(t)}function Fx(n){return n.split(" / ").map(t=>`<span class="kc">${t}</span>`).join('<span class="ksep">/</span>')}function Bx(n){n=Math.max(0,Math.floor(n));let t=Math.floor(n/3600),e=Math.floor(n%3600/60),i=n%60;return t>0?`${t}\u6642\u9593${e}\u5206${i}\u79D2`:e>0?`${e}\u5206${i}\u79D2`:`${i}\u79D2`}function Fu(n){clearTimeout(n._hideT),n.classList.remove("leaving"),n.classList.add("visible")}function Bu(n){!n.classList.contains("visible")||n.classList.contains("leaving")||(n.classList.add("leaving"),n._hideT=setTimeout(()=>n.classList.remove("visible","leaving"),400))}async function PT(n){Qt=n,dn=document.getElementById("ui-root"),dn.innerHTML="",UT(),NT(),BT(),YT(),FT(),JT(),$T(),iA(),tA(),QT(),zT(),rA(),aA(),cA(),hA(),fA(),mA(),WT(),n.ui={showMessage:KT,showDialog:Xx,setPrompt:Hx,toast:jT,setBossBar:kx,flash:Jx},n.on("state",DT),n.on("player-damaged",kT),n.on("enemy-killed",()=>{jr.kills++}),n.on("pickup",GT),n.on("game-start",()=>{jr.playTime=0,jr.kills=0}),document.body.dataset.uistate=n.state}function LT(n,t){let e=n.state,i=e==="playing"||e==="shrine"||e==="boss";i&&(jr.playTime+=t),Mc.open&&n.input.justPressed("Escape")&&Vu(),re.active&&eA(t,i||e==="title"),i&&(HT(t),ZT()),Ci.visible&&Gx(t)}function DT(n){let t=n.to;document.body.dataset.uistate=t,Vu(!0);let e=t==="playing"||t==="shrine"||t==="boss";et.hud.classList.toggle("on",e),t==="title"?Fu(et.title):Bu(et.title),t==="paused"?(lA(),Fu(et.pause)):Bu(et.pause),t==="gameover"?Fu(et.gameover):Bu(et.gameover),t==="ending"?(uA(),Fu(et.ending)):Bu(et.ending),!e&&t!=="paused"&&(Hx(null),et.reticle.classList.remove("on"),y0=!1,et.guide.classList.remove("on"),et.vignette.classList.remove("active"),x0=!1,(t==="title"||t==="ending")&&kx(!1)),(t==="gameover"||t==="title"||t==="ending")&&nA()}function UT(){let n=ye("div","svg-defs",dn);n.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
    <linearGradient id="ui-hgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff7583"/><stop offset=".5" stop-color="#dd2a41"/><stop offset="1" stop-color="#9c1128"/>
    </linearGradient>
    <linearGradient id="ui-ggrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a8f0be"/><stop offset=".45" stop-color="#4fc47a"/><stop offset="1" stop-color="#1e7a48"/>
    </linearGradient>
  </defs></svg>`}function NT(){et.vignette=ye("div","",dn),et.vignette.id="vignette"}function zT(){et.flash=ye("div","",dn),et.flash.id="flash"}function FT(){et.floatLayer=ye("div","",dn),et.floatLayer.id="float-layer"}function BT(){let n=ye("div","",dn);n.id="hud",et.hud=n;let t=ye("div","",n);t.id="hud-left",et.hearts=ye("div","",t),et.hearts.id="hearts";let e=ye("div","",t);e.id="stamina",et.stamina=e,e.innerHTML=`<svg viewBox="0 0 60 60">
    <circle class="stb" cx="30" cy="30" r="24"/>
    <circle class="stf" cx="30" cy="30" r="24" transform="rotate(-90 30 30)" stroke-dashoffset="0"/>
  </svg>`,et.stFg=e.querySelector(".stf");let i=ye("div","",t);i.id="orbs",et.orbs=[];for(let l=0;l<4;l++)et.orbs.push(ye("span","orb",i));let s=ye("div","",t);s.id="gems",et.gems=s,s.innerHTML=`<svg viewBox="0 0 24 24">
    <path d="M12 2.4 19.6 9 12 21.6 4.4 9Z" fill="url(#ui-ggrad)" stroke="rgba(235,255,240,.4)" stroke-width=".7"/>
    <path d="M4.4 9h15.2M12 2.4 8.4 9l3.6 12.6L15.6 9 12 2.4" fill="none" stroke="rgba(240,255,245,.3)" stroke-width=".6"/>
  </svg><span class="g-count">0</span>`,et.gemCount=s.querySelector(".g-count");let r=ye("div","",n);r.id="minimap";let o=document.createElement("canvas");o.width=340,o.height=340,r.appendChild(o),et.mapCanvas=o;let a=ye("div","",n);a.id="prompt",et.prompt=a,et.pKey=ye("span","p-key",a),et.pTxt=ye("span","p-txt",a)}var Px=-1,Ou=-1,x0=!1;function OT(n,t){let e="";for(let i=0;i<t;i++){let s=n-i,r=s>=1?"full":s>=.5?"half":"empty";e+=`<svg class="heart ${r}" viewBox="0 0 24 22"><path class="hb" d="${Ix}"/><path class="hf" d="${Ix}" fill="url(#ui-hgrad)"/></svg>`}et.hearts.innerHTML=e}var Hu=!1,p0=0,ku=!1,Lx=-1,Dx=-1,Gu=-1;function HT(n){let t=Qt.player;if(!t)return;let e=Math.round(Ct(t.hp,0,99)*2)/2,i=Math.max(1,Math.round(t.maxHp));(e!==Px||i!==Ou)&&(Ou>0&&i>Ou&&_c(et.hearts,"bless"),OT(e,i),Px=e,Ou=i);let s=t.hp>0&&t.hp<=1;s!==x0&&(x0=s,et.vignette.classList.toggle("active",s));let r=Ct(t.stamina/Math.max(1,t.maxStamina),0,1);r>=.999?(p0+=n,Hu&&p0>.55&&(Hu=!1,et.stamina.classList.remove("on"))):(p0=0,Hu||(Hu=!0,et.stamina.classList.add("on"))),!ku&&t.stamina<=.02?(ku=!0,et.stamina.classList.add("ex")):ku&&t.stamina>30&&(ku=!1,et.stamina.classList.remove("ex"));let o=Math.round(AT*(1-r)*10)/10;o!==Lx&&(Lx=o,et.stFg.style.strokeDashoffset=o);let a=Ct(t.spiritOrbs|0,0,4);if(a!==Dx){for(let c=0;c<4;c++){let h=et.orbs[c];c<a?h.classList.contains("lit")||(h.classList.add("lit"),_c(h,"gain"),setTimeout(()=>h.classList.remove("gain"),950)):h.classList.remove("lit")}Dx=a}let l=t.gems|0;l!==Gu&&(et.gemCount.textContent=l,Gu>=0&&l>Gu&&_c(et.gems,"pop"),Gu=l),qT()}function kT(){_c(et.hearts,"hurt"),Jx("rgba(186,26,42,1)",.16)}function GT(n){let t=n&&n.kind,e=innerWidth*.5,i=innerHeight*.58;if(n&&n.pos&&Qt.camera){let r=Ox(n.pos,1.4);r.ok&&(e=r.x,i=r.y)}VT("+1",e,i,t==="heart"?"#ff93a0":t==="orb"?"#66ecd9":"#93e6ab")}function VT(n,t,e,i){let s=ye("div","float-txt",et.floatLayer);s.textContent=n,s.style.left=t+"px",s.style.top=e+"px",i&&(s.style.color=i),setTimeout(()=>s.remove(),1250)}var Qr={g:null,off:null,shade:null};function WT(){try{let n=et.mapCanvas.getContext("2d");Qr.g=n;let t=n.createRadialGradient(85,85,28,85,85,85);t.addColorStop(0,"rgba(6,10,12,0)"),t.addColorStop(.78,"rgba(6,10,12,.1)"),t.addColorStop(1,"rgba(6,10,12,.46)"),Qr.shade=t;let e=Qt.world;if(!e||!e.getHeight)return;let i=64,s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=r.createImageData(i,i),a=new Float32Array(i*i),l=1e9,c=-1e9;for(let m=0;m<i;m++)for(let p=0;p<i;p++){let v=-1e3+(p+.5)*2e3/i,_=-1e3+(m+.5)*2e3/i,y=0;try{y=e.getHeight(v,_)||0}catch{}a[m*i+p]=y,y<l&&(l=y),y>c&&(c=y)}let h=Math.max(1,c-l),u={plains:[96,152,78],forest:[50,104,78],lake:[70,140,168],volcano:[116,66,52],castle:[80,70,100],ruins:[130,124,108]},f=[46,106,142],d=typeof e.waterLevel=="number"?e.waterLevel:-1e9;for(let m=0;m<i;m++)for(let p=0;p<i;p++){let v=-1e3+(p+.5)*2e3/i,_=-1e3+(m+.5)*2e3/i,y="plains";try{y=e.getBiome(v,_)||"plains"}catch{}let P=a[m*i+p],T=P<=d+.15?f:u[y]||u.plains,S=.6+.52*((P-l)/h),I=(m*i+p)*4;o.data[I]=Math.min(255,T[0]*S),o.data[I+1]=Math.min(255,T[1]*S),o.data[I+2]=Math.min(255,T[2]*S),o.data[I+3]=255}r.putImageData(o,0,0);let g=document.createElement("canvas");g.width=g.height=256;let x=g.getContext("2d");x.imageSmoothingEnabled=!0,x.imageSmoothingQuality="high",x.drawImage(s,0,0,256,256),Qr.off=g}catch{}}function XT(n,t,e,i,s){n.save(),n.translate(t,e),n.rotate(Math.PI/4),n.shadowColor=s,n.shadowBlur=6,n.fillStyle=s,n.fillRect(-i*.72,-i*.72,i*1.44,i*1.44),n.restore()}function qT(){let n=Qr.g;if(!n)return;let t=170,e=85,i=83,s=t/2e3;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,t,t),n.save(),n.beginPath(),n.arc(e,e,i,0,Math.PI*2),n.clip(),Qr.off?n.drawImage(Qr.off,0,0,256,256,0,0,t,t):(n.fillStyle="#20303a",n.fillRect(0,0,t,t)),Qr.shade&&(n.fillStyle=Qr.shade,n.fillRect(0,0,t,t));let r=Qt.shrines&&Qt.shrines.list;if(r)for(let l=0;l<r.length;l++){let c=r[l];!c||!c.pos||XT(n,e+c.pos.x*s,e+c.pos.z*s,4.4,c.completed?"#eccb66":"#3fe6d2")}let o=Qt.world&&Qt.world.castleGatePos;if(o){let l=e+o.x*s,c=e+o.z*s;n.save(),n.shadowColor="#c08df0",n.shadowBlur=6,n.fillStyle="#bd88ef",n.beginPath(),n.moveTo(l,c-5.4),n.lineTo(l+4.8,c+3.8),n.lineTo(l-4.8,c+3.8),n.closePath(),n.fill(),n.restore()}let a=Qt.player;if(a&&a.position){let l=a.position.x*s,c=a.position.z*s,h=Math.hypot(l,c),u=i-8;h>u&&(l*=u/h,c*=u/h),n.save(),n.translate(e+l,e+c),n.rotate(Math.PI-(a.heading||0)),n.shadowColor="rgba(255,244,206,.95)",n.shadowBlur=5,n.fillStyle="#fff6da",n.beginPath(),n.moveTo(0,-6.2),n.lineTo(4.4,4.8),n.lineTo(0,2.3),n.lineTo(-4.4,4.8),n.closePath(),n.fill(),n.restore()}n.restore(),n.beginPath(),n.arc(e,e,i,0,Math.PI*2),n.strokeStyle="rgba(201,162,39,.8)",n.lineWidth=1.3,n.stroke(),n.beginPath(),n.arc(e,e,i-3.5,0,Math.PI*2),n.strokeStyle="rgba(201,162,39,.22)",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(e,e-i+10,8,0,Math.PI*2),n.fillStyle="rgba(8,12,15,.82)",n.fill(),n.strokeStyle="rgba(201,162,39,.55)",n.lineWidth=1,n.stroke(),n.font="10px serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ecc966",n.fillText("\u5317",e,e-i+10.5)}var Ux=new Ce,il={x:0,y:0,ok:!1},y0=!1;function Ox(n,t){let e=Qt.camera;return e.updateMatrixWorld(),Ux.copy(e.matrixWorld).invert(),At.v1.set(n.x,n.y+(t||0),n.z).applyMatrix4(Ux),At.v1.z>-.35?(il.ok=!1,il):(At.v1.applyMatrix4(e.projectionMatrix),il.ok=At.v1.x>-1.08&&At.v1.x<1.08&&At.v1.y>-1.08&&At.v1.y<1.08,il.x=(At.v1.x*.5+.5)*innerWidth,il.y=(.5-At.v1.y*.5)*innerHeight,il)}function YT(){let n=ye("div","",dn);n.id="reticle",et.reticle=n,ye("div","r1",n),ye("div","r2",n)}function ZT(){let n=Qt.camera3p&&Qt.camera3p.lockTarget,t=!1;if(n&&n.alive!==!1&&n.pos){let e=Ox(n.pos,(n.radius||.8)*1.1);e.ok&&(t=!0,et.reticle.style.transform=`translate3d(${e.x.toFixed(1)}px,${e.y.toFixed(1)}px,0)`)}t!==y0&&(y0=t,et.reticle.classList.toggle("on",t))}var Nx=null;function Hx(n){let t=n||null;if(t===Nx)return;if(Nx=t,!t){et.prompt.classList.remove("on");return}let e=/^([A-Za-z0-9]{1,8})\s*キー\s*[::]?\s*(.*)$/.exec(t);e?(et.pKey.style.display="",et.pKey.textContent=e[1],et.pTxt.textContent=e[2]||""):(et.pKey.style.display="none",et.pTxt.textContent=t),_c(et.prompt,"on")}var Ci={visible:!1,ghost:1,lastFill:-1,lastGhost:-1};function $T(){let n=ye("div","",dn);n.id="bossbar",et.bossbar=n,n.innerHTML=`<div class="bb-name"></div>
    <div class="bb-frame"><div class="bb-track"><div class="bb-ghost"></div><div class="bb-fill"></div></div></div>`,et.bbName=n.querySelector(".bb-name"),et.bbFill=n.querySelector(".bb-fill"),et.bbGhost=n.querySelector(".bb-ghost")}function kx(n,t){let e=!!n;t!=null&&(et.bbName.textContent=String(t)),e!==Ci.visible&&(Ci.visible=e,e&&(Ci.ghost=1,Ci.lastFill=-1,Ci.lastGhost=-1,Gx(0)),et.bossbar.classList.toggle("on",e))}function Gx(n){let t=Qt.boss;if(!t)return;let e=Ct(t.maxHp>0?t.hp/t.maxHp:0,0,1);Ci.ghost=Math.max(e,gt(Ci.ghost,e,2.2,n));let i=Math.round(e*1e3)/10,s=Math.round(Ci.ghost*1e3)/10;i!==Ci.lastFill&&(Ci.lastFill=i,et.bbFill.style.width=i+"%"),s!==Ci.lastGhost&&(Ci.lastGhost=s,et.bbGhost.style.width=s+"%")}var v0=[],m0=!1;function JT(){et.msgLayer=ye("div","",dn),et.msgLayer.id="msg-layer"}function KT(n,t){let e=t||{};v0.push({text:String(n??""),duration:typeof e.duration=="number"?e.duration:3,sub:e.sub==null?null:String(e.sub)}),Vx()}function Vx(){if(m0||!v0.length)return;m0=!0;let n=v0.shift(),t=ye("div","msg",et.msgLayer);ye("div","msg-rule",t);let e=ye("div","msg-text",t);if(e.textContent=n.text,n.sub){let i=ye("div","msg-sub",t);i.textContent=n.sub}ye("div","msg-rule",t),requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{t.classList.add("outing"),setTimeout(()=>{t.remove(),m0=!1,Vx()},620)},Math.max(.4,n.duration)*1e3+420)}var _0=[],g0=0;function QT(){et.toastLayer=ye("div","",dn),et.toastLayer.id="toast-layer"}function jT(n){_0.push(String(n??"")),Wx()}function Wx(){if(g0>=4||!_0.length)return;g0++;let n=_0.shift(),t=ye("div","toast",et.toastLayer),e=ye("span","t-dia",t);e.textContent="\u25C6";let i=ye("span","",t);i.textContent=n,requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{t.classList.add("out"),setTimeout(()=>{t.remove(),g0--,Wx()},380)},2500)}var re={q:[],active:!1,lines:null,onDone:null,li:0,chars:0,t:0,done:!1};function tA(){let n=ye("div","panel",dn);n.id="dialog",et.dialog=n;let t=ye("div","dlg-orn",n);t.textContent="\u25C6",et.dlgText=ye("div","dlg-text",n),et.dlgNext=ye("div","dlg-next",n),et.dlgNext.textContent="\u25BC",n.addEventListener("click",()=>$x())}function Xx(n,t){let e=Array.isArray(n)?n.filter(i=>i!=null).map(String):n!=null?[String(n)]:[];if(!e.length){typeof t=="function"&&t();return}re.q.push({lines:e,onDone:t}),re.active||qx()}function qx(){let n=re.q.shift();if(!n){re.active=!1;return}re.active=!0,re.lines=n.lines,re.onDone=n.onDone,et.dialog.classList.add("visible"),Yx(0)}function Yx(n){re.li=n,re.chars=0,re.t=0,re.done=!1,et.dlgText.textContent="",et.dlgNext.classList.remove("on")}function Zx(){let n=re.lines[re.li];et.dlgText.textContent=n.slice(0,re.chars),re.chars>=n.length&&(re.done=!0,et.dlgNext.classList.add("on"))}function $x(){if(!re.active||!re.lines)return;if(Qt.audio&&Qt.audio.play&&Qt.audio.play("ui"),!re.done){re.chars=re.lines[re.li].length,Zx();return}if(re.li<re.lines.length-1){Yx(re.li+1);return}let n=re.onDone;if(re.lines=null,re.onDone=null,re.done=!1,et.dialog.classList.remove("visible"),setTimeout(qx,280),typeof n=="function")try{n()}catch{}}function eA(n,t){if(re.lines){if(!re.done){re.t+=n;let e=re.lines[re.li],i=re.chars;for(;re.t>=.02&&i<e.length;)re.t-=.02,i++;i!==re.chars&&(re.chars=i,Zx())}t&&Qt.input.justPressed("KeyE")&&$x()}}function nA(){re.q.length=0,re.lines=null,re.onDone=null,re.active=!1,re.done=!1,et.dialog.classList.remove("visible")}function Jx(n,t){let e=et.flash;e.style.transition="none",e.style.background=n||"#ffffff",e.style.opacity=String(Ct(t??.5,0,1)),e.offsetWidth,e.style.transition="opacity .3s ease-out",e.style.opacity="0"}function iA(){let n=ye("div","panel",dn);n.id="guide",et.guide=n;let t="";for(let[e,i]of CT)t+=`<div class="gd-k">${Fx(e)}</div><div class="gd-a">${i}</div>`;n.innerHTML=`<div class="gd-title">\u65C5\u306E\u5FC3\u5F97</div><div class="gd-rows">${t}</div>`}function sA(){et.guide.classList.add("on"),clearTimeout(et.guide._t),et.guide._t=setTimeout(()=>et.guide.classList.remove("on"),5e3)}function rA(){let n=ye("section","screen",dn);n.id="title-screen",et.title=n,n.innerHTML=`
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
    <footer class="tt-foot">\u30AA\u30EA\u30B8\u30CA\u30EB\u30D5\u30A1\u30F3\u30E1\u30A4\u30C9\u4F5C\u54C1 \u2014 \u30BC\u30EB\u30C0\u306E\u4F1D\u8AAC\u3078\u306E\u30AA\u30DE\u30FC\u30B8\u30E5</footer>`,n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");if(!e)return;let i=e.dataset.act;i==="start"?oA():i==="controls"?M0("controls"):i==="settings"&&M0("settings")})}function oA(){Qt.emit("game-start"),Xx(RT,sA)}function aA(){let n=ye("section","screen",dn);n.id="pause-screen",et.pause=n,n.innerHTML=`
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
    </div>`,et.pzTime=n.querySelector(".pz-time"),et.pzKills=n.querySelector(".pz-kills"),et.pzGems=n.querySelector(".pz-gems"),n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");if(!e)return;let i=e.dataset.act;i==="resume"?Qt.setState(Qt._pausedFrom||"playing"):i==="settings"?M0("settings"):i==="title"&&Qt.emit("title-request")})}function lA(){et.pzTime.textContent=Bx(jr.playTime),et.pzKills.textContent=String(jr.kills),et.pzGems.textContent=String(Qt.player?Qt.player.gems|0:0)}function cA(){let n=ye("section","screen",dn);n.id="gameover-screen",et.gameover=n,n.innerHTML=`
    <div class="go-text">\u52C7\u8005\u306F\u5012\u308C\u305F\u2026</div>
    <nav class="go-menu">
      <button class="obtn" data-act="respawn">\u3075\u305F\u305F\u3073\u6311\u3080</button>
      <button class="obtn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>
    </nav>`,n.addEventListener("click",t=>{let e=t.target.closest("button[data-act]");e&&(e.dataset.act==="respawn"?Qt.emit("respawn-request"):Qt.emit("title-request"))})}function hA(){let n=ye("section","screen",dn);n.id="ending-screen",et.ending=n,n.innerHTML=`
    <div class="ed-l1">\u9B54\u7363\u306F\u8A0E\u305F\u308C\u3001\u5927\u5730\u306B\u671D\u304C\u623B\u3063\u305F</div>
    <div class="ed-l2">\u4F1D\u8AAC\u306F\u8A9E\u308A\u7D99\u304C\u308C\u308B</div>
    <div class="ed-orn">\u25C6</div>
    <div class="ed-stats">
      <div class="stat"><span class="s-l">\u30AF\u30EA\u30A2\u6642\u9593</span><span class="s-v ed-time">\u2014</span></div>
      <div class="stat"><span class="s-l">\u8A0E\u4F10\u3057\u305F\u9B54\u7269</span><span class="s-v ed-kills">0</span></div>
      <div class="stat"><span class="s-l">\u96C6\u3081\u305F\u7DD1\u77F3</span><span class="s-v ed-gems">0</span></div>
    </div>
    <button class="mbtn ed-btn" data-act="title">\u30BF\u30A4\u30C8\u30EB\u3078</button>`,n.querySelector(".ed-btn").addEventListener("click",()=>Qt.emit("title-request"))}function uA(){et.ending.querySelector(".ed-time").textContent=Bx(jr.playTime),et.ending.querySelector(".ed-kills").textContent=String(jr.kills),et.ending.querySelector(".ed-gems").textContent=String(Qt.player?Qt.player.gems|0:0)}var Mc={open:!1,kind:null};function fA(){let n=ye("div","",dn);n.id="modal-layer",et.modal=n,n.innerHTML=`
    <div class="modal-back"></div>
    <div class="modal panel">
      <button class="modal-x" aria-label="\u9589\u3058\u308B">\xD7</button>
      <h2 class="modal-title"></h2>
      <div class="modal-body"></div>
    </div>`,et.modalTitle=n.querySelector(".modal-title"),et.modalBody=n.querySelector(".modal-body"),n.querySelector(".modal-back").addEventListener("click",()=>Vu()),n.querySelector(".modal-x").addEventListener("click",()=>Vu()),dA(),pA()}function dA(){let n=document.createElement("div");n.className="set-body",n.innerHTML=`
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
    <p class="set-note">\u753B\u8CEA\u3092\u5909\u3048\u308B\u3068\u3001\u8349\u6728\u306E\u5BC6\u5EA6\u3084\u5149\u306E\u8868\u73FE\u304C\u5909\u308F\u308A\u307E\u3059\u3002</p>`,et.setBody=n,n.querySelector(".seg").addEventListener("click",i=>{let s=i.target.closest("button[data-q]");s&&(Qt.settings.quality=s.dataset.q,Qt.applyQuality&&Qt.applyQuality(),Kx())});let t=n.querySelector(".vol-music"),e=n.querySelector(".vol-sfx");t.addEventListener("input",()=>{Qt.settings.musicVol=Ct(Number(t.value)||0,0,1),n.querySelector(".vm").textContent=Math.round(Qt.settings.musicVol*100)}),e.addEventListener("input",()=>{Qt.settings.sfxVol=Ct(Number(e.value)||0,0,1),n.querySelector(".vs").textContent=Math.round(Qt.settings.sfxVol*100)}),e.addEventListener("change",()=>{Qt.audio&&Qt.audio.play&&Qt.audio.play("ui")})}function Kx(){let n=et.setBody;n.querySelectorAll(".seg button").forEach(i=>i.classList.toggle("active",i.dataset.q===Qt.settings.quality));let t=n.querySelector(".vol-music"),e=n.querySelector(".vol-sfx");t.value=Qt.settings.musicVol,e.value=Qt.settings.sfxVol,n.querySelector(".vm").textContent=Math.round(Qt.settings.musicVol*100),n.querySelector(".vs").textContent=Math.round(Qt.settings.sfxVol*100)}function pA(){let n=document.createElement("div");n.className="ctl-body";let t="";for(let[e,i]of IT)t+=`<tr><td class="k">${Fx(e)}</td><td class="a">${i}</td></tr>`;n.innerHTML=`<table class="ctl-table"><tbody>${t}</tbody></table>`,et.ctlBody=n}function M0(n){Mc.open=!0,Mc.kind=n,et.modalTitle.textContent=n==="settings"?"\u8A2D\u5B9A":"\u64CD\u4F5C\u65B9\u6CD5",et.modalBody.innerHTML="",et.modalBody.appendChild(n==="settings"?et.setBody:et.ctlBody),n==="settings"&&Kx(),et.modal.classList.toggle("wide",n==="controls"),et.modal.classList.add("open"),dn.classList.add("modal-open")}function Vu(n){Mc.open&&(Mc.open=!1,et.modal.classList.remove("open"),dn.classList.remove("modal-open"),!n&&Qt.audio&&Qt.audio.play&&Qt.audio.play("uiBack"))}var zx=null;function mA(){dn.addEventListener("pointerover",n=>{let t=n.target.closest?n.target.closest("button"):null;t!==zx&&(zx=t,t&&Qt.audio&&Qt.audio.play&&Qt.audio.play("ui"))}),dn.addEventListener("pointerdown",n=>{n.target.closest&&n.target.closest("button")&&Qt.audio&&Qt.audio.play&&Qt.audio.play("ui")})}var to=document.getElementById("game"),As=new _h({canvas:to,antialias:!0,powerPreference:"high-performance"});As.shadowMap.enabled=!0;As.shadowMap.type=Qd;As.outputColorSpace=Ln;As.toneMapping=kl;As.toneMappingExposure=1.05;var iy=new bh,bc=new Kn(55,innerWidth/innerHeight,.3,3e3);bc.position.set(0,8,262);var Xu=new Set,Vo=new Set,yn={dx:0,dy:0,wheel:0,left:!1,right:!1,leftJust:!1,rightJust:!1};addEventListener("keydown",n=>{n.repeat||(Xu.add(n.code),Vo.add(n.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),sy())});addEventListener("keyup",n=>Xu.delete(n.code));addEventListener("blur",()=>{Xu.clear(),yn.left=yn.right=!1});to.addEventListener("pointerdown",n=>{n.button===0&&(yn.left=!0,yn.leftJust=!0),n.button===2&&(yn.right=!0,yn.rightJust=!0),sy();let t=le.state;if((t==="playing"||t==="shrine"||t==="boss")&&!document.pointerLockElement)try{let e=to.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}});addEventListener("pointerup",n=>{n.button===0&&(yn.left=!1),n.button===2&&(yn.right=!1)});var Ts={x:innerWidth/2,y:innerHeight/2};addEventListener("mousemove",n=>{Ts.x=n.clientX,Ts.y=n.clientY;let t=le.state,e=t==="playing"||t==="shrine"||t==="boss";(document.pointerLockElement===to||e||yn.left||yn.right)&&(yn.dx+=n.movementX,yn.dy+=n.movementY)});var Hi=90,Qx=1100;function gA(n){if(document.pointerLockElement===to)return;let t=le.state;if(t!=="playing"&&t!=="shrine"&&t!=="boss")return;let e=innerWidth,i=innerHeight,s=0,r=0;Ts.x<Hi?s=-(Hi-Ts.x)/Hi:Ts.x>e-Hi&&(s=(Ts.x-(e-Hi))/Hi),Ts.y<Hi?r=-(Hi-Ts.y)/Hi:Ts.y>i-Hi&&(r=(Ts.y-(i-Hi))/Hi),yn.dx+=s*Math.abs(s)*Qx*n,yn.dy+=r*Math.abs(r)*Qx*n}addEventListener("wheel",n=>{yn.wheel+=n.deltaY},{passive:!0});to.addEventListener("contextmenu",n=>n.preventDefault());var jx=!1;function sy(){jx||(jx=!0,le.audio?.unlock?.())}var b0=new EventTarget,le={renderer:As,scene:iy,camera:bc,canvas:to,state:"loading",setState(n){let t=le.state;t!==n&&(le.state=n,(n==="paused"||n==="title"||n==="gameover"||n==="ending")&&document.exitPointerLock?.(),le.emit("state",{from:t,to:n}))},events:b0,emit(n,t){b0.dispatchEvent(new CustomEvent(n,{detail:t}))},on(n,t){b0.addEventListener(n,e=>t(e.detail))},time:{elapsed:0,dt:0,dayPhase:.1,isNight:!1},input:{keys:Xu,justPressed:n=>Vo.has(n),mouse:yn,get pointerLocked(){return document.pointerLockElement===to}},settings:{quality:"high",musicVol:.7,sfxVol:.9},quality:{},applyQuality(){let n=le.settings.quality,t=window.devicePixelRatio||1;le.quality={pixelRatio:n==="high"?Math.min(t,2):n==="medium"?Math.min(t,1.35):1,shadowMapSize:n==="high"?2048:n==="medium"?1024:512,grassMul:n==="high"?1:n==="medium"?.55:.28,particleMul:n==="high"?1:n==="medium"?.6:.35,postFX:n!=="low",drawDist:n==="high"?1:n==="medium"?.85:.65},As.setPixelRatio(le.quality.pixelRatio),As.setSize(innerWidth,innerHeight),le.emit("quality-changed",le.quality)},getGroundHeight:()=>0,colliders:[],playerBounds:null,world:null,sky:null,player:null,camera3p:null,combat:null,shrines:null,boss:null,ui:null,audio:null,effects:null};le.on("game-start",()=>le.setState("playing"));le.on("player-died",()=>{setTimeout(()=>{le.state!=="gameover"&&le.setState("gameover")},1600)});le.on("respawn-request",()=>{let n=le.player;n.heal(n.maxHp),n.teleport(le.world.startPos.clone(),Math.PI),le.setState("playing")});le.on("title-request",()=>{let n=le.player;n.heal(n.maxHp),n.teleport(le.world.startPos.clone(),Math.PI),le.setState("title")});addEventListener("resize",()=>{bc.aspect=innerWidth/innerHeight,bc.updateProjectionMatrix(),As.setSize(innerWidth,innerHeight),le.effects?.onResize?.(innerWidth,innerHeight)});var ty=document.getElementById("boot-status"),ey=document.getElementById("boot-bar");function ny(n,t,e){ty&&(ty.textContent=e),ey&&(ey.style.width=`${Math.round(n/t*100)}%`)}var Wu=[["\u5927\u5730\u3092\u5275\u9020\u3057\u3066\u3044\u307E\u3059\u2026",Yl],["\u7A7A\u3068\u5149\u3092\u547C\u3093\u3067\u3044\u307E\u3059\u2026",Kl],["\u98A8\u306E\u7C92\u5B50\u3092\u7E54\u3063\u3066\u3044\u307E\u3059\u2026",tc],["\u52C7\u8005\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u3044\u307E\u3059\u2026",gu],["\u8996\u754C\u3092\u6574\u3048\u3066\u3044\u307E\u3059\u2026",cc],["\u9B54\u7269\u304C\u8822\u3044\u3066\u3044\u307E\u3059\u2026",Su],["\u7960\u306B\u706F\u3092\u70B9\u3057\u3066\u3044\u307E\u3059\u2026",Au],["\u9B54\u57CE\u304C\u8ECB\u3093\u3067\u3044\u307E\u3059\u2026",Pu],["\u65CB\u5F8B\u3092\u7D21\u3044\u3067\u3044\u307E\u3059\u2026",nl],["\u65C5\u652F\u5EA6\u3092\u3057\u3066\u3044\u307E\u3059\u2026",sl]];async function xA(){le.applyQuality();let n=0;for(let[t,e]of Wu){ny(n,Wu.length,t),await new Promise(i=>requestAnimationFrame(i));try{await e.init(le)}catch(i){console.warn("[init\u5931\u6557]",t,i)}n++}ny(Wu.length,Wu.length,"\u6E96\u5099\u5B8C\u4E86"),document.getElementById("boot")?.classList.add("boot-done"),setTimeout(()=>document.getElementById("boot")?.remove(),900),le.setState("title"),requestAnimationFrame(ry)}var yA=new Aa,vA=240,_A=[gu,cc,Yl,Kl,Su,Au,Pu,tc,nl,sl],MA=[cc,Yl,Kl,tc,nl,sl],bA=[nl,sl];function ry(){requestAnimationFrame(ry);let n=Ct(yA.getDelta(),0,1/20);le.time.dt=n,le.time.elapsed+=n,gA(n);let t=le.state,e=t==="playing"||t==="shrine"||t==="boss"?_A:t==="title"||t==="gameover"||t==="ending"?MA:t==="paused"?bA:null;if((t==="playing"||t==="boss"||t==="title")&&(le.time.dayPhase=(le.time.dayPhase+n/vA)%1),le.time.isNight=le.time.dayPhase>.55&&le.time.dayPhase<.95,(t==="playing"||t==="shrine"||t==="boss")&&(Vo.has("Escape")||Vo.has("KeyP"))?(le._pausedFrom=t,le.setState("paused")):t==="paused"&&(Vo.has("Escape")||Vo.has("KeyP"))&&le.setState(le._pausedFrom||"playing"),e)for(let i of e)try{i.update(le,n)}catch(s){i._errOnce||(i._errOnce=!0,console.warn("[update\u5931\u6557]",s))}try{le.effects?.render?.(n)}catch{As.render(iy,bc)}Vo.clear(),yn.dx=0,yn.dy=0,yn.wheel=0,yn.leftJust=!1,yn.rightJust=!1}window.__ctx=le;xA();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
