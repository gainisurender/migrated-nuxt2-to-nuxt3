import{j as R,r as p,k as A,l as M,m as j,p as O,q as T,u as v,a as B,s as E,o as f,c as P,w as F,f as y,t as H,h as I,b as _,v as N,x as V,y as q,z as C,A as U,e as G,F as K,B as L}from"./entry.53a65e88.mjs";const Q=s=>R(s)?s:p(s),W=()=>null;function S(...s){var k,x,w,b,g,D,$;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[a,c,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(k=e.server)!=null?k:!0,e.default=(x=e.default)!=null?x:W,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(b=(w=e.lazy)!=null?w:e.defer)!=null?b:!1,e.initialCache=(g=e.initialCache)!=null?g:!0;const t=A(),o=T();if(o&&!o._nuxtOnBeforeMountCbs){const l=o._nuxtOnBeforeMountCbs=[];o&&(M(()=>{l.forEach(i=>{i()}),l.splice(0,l.length)}),j(()=>l.splice(0,l.length)))}const h=()=>e.initialCache&&t.payload.data[a]!==void 0,n={data:Q((D=t.payload.data[a])!=null?D:e.default()),pending:p(!h()),error:p(($=t.payload._errors[a])!=null?$:null)};n.refresh=(l={})=>t._asyncDataPromises[a]?t._asyncDataPromises[a]:l._initial&&h()?t.payload.data[a]:(n.pending.value=!0,t._asyncDataPromises[a]=new Promise((i,z)=>{try{i(c(t))}catch(J){z(J)}}).then(i=>{e.transform&&(i=e.transform(i)),e.pick&&(i=X(i,e.pick)),n.data.value=i,n.error.value=null}).catch(i=>{n.error.value=i,n.data.value=v(e.default())}).finally(()=>{n.pending.value=!1,t.payload.data[a]=n.data.value,n.error.value&&(t.payload._errors[a]=!0),delete t._asyncDataPromises[a]}),t._asyncDataPromises[a]);const u=()=>n.refresh({_initial:!0}),m=e.server!==!1&&t.payload.serverRendered;{m&&t.isHydrating&&a in t.payload.data?n.pending.value=!1:o&&t.payload.serverRendered&&(t.isHydrating||e.lazy)?o._nuxtOnBeforeMountCbs.push(u):u(),e.watch&&O(e.watch,()=>n.refresh());const l=t.hook("app:data:refresh",i=>{if(!i||i.includes(a))return n.refresh()});o&&j(l)}const d=Promise.resolve(t._asyncDataPromises[a]).then(()=>n);return Object.assign(d,n),d}function X(s,r){const a={};for(const c of r)a[c]=s[c];return a}const Y={class:"joke"};function Z(s,r,a,c,e,t){const o=I;return f(),P(o,{to:"jokes/"+s.id},{default:F(()=>[y("div",Y,[y("p",null,H(s.joke),1)])]),_:1},8,["to"])}const ee=B(E,[["render",Z]]),te={name:"SearchJokes",data(){return{text:""}},methods:{onSubmit(){console.log("on submit"),this.$emit("search-text",this.text),this.text=""}}},ae=y("input",{type:"submit",value:"Search Jokes"},null,-1);function ne(s,r,a,c,e,t){return f(),_("form",{onSubmit:r[1]||(r[1]=q((...o)=>t.onSubmit&&t.onSubmit(...o),["prevent"]))},[N(y("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>e.text=o),placeholder:"Search Jokes..."},null,512),[[V,e.text]]),ae],32)}const se=B(te,[["render",ne]]),oe={key:0},ie={__name:"index",async setup(s){let r,a;const c=ee;let e=p([]);const t=p(!1),o=async()=>{const n={headers:{Accept:"application/json"}};try{t.value=!0;const u=await $fetch("https://icanhazdadjoke.com/search",n);console.log(" this is data : "+u.results),e.value=u.results,t.value=!1}catch(u){console.log(u),t.value=!1}};[r,a]=C(()=>S(o,"$h3GFolQC8m")),await r,a();const h=async()=>{const n=await $fetch<JokeResponseRoot>"https://icanhazdadjoke.com/search&query=${searchInput.value}";searchedText.value=n.results};return[r,a]=C(()=>S(o,"$g7r68b7zHu")),await r,a(),U({title:"Dad Jokes",meta:[{hid:"description",name:"description",content:"Best place for corny dad jokes"}]}),(n,u)=>{const m=se;return f(),_("div",null,[G(m,{onSearchText:h}),t.value?(f(),_("h1",oe,"sabfiwd")):(f(!0),_(K,{key:1},L(v(e),d=>(f(),P(v(c),{key:d.id,id:d.id,joke:d.joke},null,8,["id","joke"]))),128))])}}};export{ie as default};