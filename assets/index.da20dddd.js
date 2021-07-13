import{c as e,o as l,a as t,r as a,b as n,d as s,t as r,w as o,v as u,e as c,f as i,g as d,h as p,i as v,F as m,j as f,k as b,l as h}from"./vendor.9cf8bae5.js";const x={props:{variant:{type:String,required:!0}},setup:l=>({classObject:e((()=>({"bg-neutral-500 text-white hover:bg-primary/50 hover:text-neutral-500":"primary"===l.variant,"bg-primary text-neutral-500 hover:bg-[#9EE7DE] focus:ring-offset-neutral-500":"secondary"===l.variant})))})};x.render=function(e,n,s,r,o,u){return l(),t("button",{class:[r.classObject,"\n      w-full\n      h-12\n      rounded-md\n      text-xl\n      font-bold\n      uppercase\n      leading-none\n      transition-colors\n      duration-300\n      disabled:bg-primary/30\n      disabled:text-neutral-500/40\n      disabled:cursor-not-allowed\n      focus:outline-none\n      focus:ring focus:ring-primary focus:ring-offset-2\n    "]},[a(e.$slots,"default")],2)};const g={props:{placeholder:{type:String,default:"0"},id:String,modelValue:Number},emits:["update:modelValue"]};g.render=function(e,a,n,s,r,o){return l(),t("input",{value:n.modelValue,onInput:a[1]||(a[1]=l=>e.$emit("update:modelValue",+l.target.value)),id:n.id,placeholder:n.placeholder,class:[{"!border-red-400":0===n.modelValue},"px-4 py-[5px] w-full bg-neutral-100 rounded-md border-2 border-transparent placeholder-neutral-300 text-neutral-500 text-2xl font-bold text-right focus:outline-none focus:border-primary"],type:"number",min:"1"},null,42,["value","id","placeholder"])};const y={xmlns:"http://www.w3.org/2000/svg",width:"13",height:"16"},w=n("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 0 1 .407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57a2.99 2.99 0 0 1 1.125-.208c.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 0 0 1.006-.167 3.57 3.57 0 0 0 .822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"},null,-1);const V={xmlns:"http://www.w3.org/2000/svg",width:"11",height:"17"},I=n("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 0 0-.744-1.116A4.251 4.251 0 0 0 7.54 2.9a5.324 5.324 0 0 0-1.524-.492V.872H4.288V2.36a5.532 5.532 0 0 0-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"},null,-1);const z={components:{IconPerson:function(e,a){return l(),t("svg",y,[w])},IconDollar:function(e,a){return l(),t("svg",V,[I])}},props:{iconInput:{type:String,required:!0}}},M={class:"relative"},H={class:"absolute ml-4 left-0 inset-y-0 flex items-center justify-center"};z.render=function(e,r,o,u,c,i){return l(),t("div",M,[n("div",H,[(l(),t(s(o.iconInput)))]),a(e.$slots,"default")])};const _={props:{labelId:String,labelText:String,state:Number}},T={class:"flex items-center justify-between"},B={class:"text-red-400 font-bold"};_.render=function(e,s,c,i,d,p){return l(),t("div",null,[n("div",T,[n("label",{for:c.labelId,class:"text-neutral-400 font-bold"},r(c.labelText),9,["for"]),o(n("span",B,"Can't be zero",512),[[u,0===c.state]])]),a(e.$slots,"default")])};const j={xmlns:"http://www.w3.org/2000/svg",width:"87",height:"54"},C=n("path",{fill:"#3D6666",d:"M6.72 17.472c.944 0 1.792-.12 2.544-.36s1.392-.584 1.92-1.032a4.476 4.476 0 0 0 1.212-1.62c.28-.632.42-1.34.42-2.124v-.288c0-1.472-.464-2.584-1.392-3.336-.928-.752-2.272-1.288-4.032-1.608a14.615 14.615 0 0 1-1.74-.408c-.456-.144-.824-.308-1.104-.492-.28-.184-.476-.392-.588-.624a1.771 1.771 0 0 1-.168-.78c0-.56.232-1.004.696-1.332.464-.328 1.096-.492 1.896-.492.944 0 1.676.248 2.196.744.52.496.78 1.08.78 1.752v.576h3.168v-.864a5 5 0 0 0-.396-1.968 4.762 4.762 0 0 0-1.176-1.656C10.436 1.08 9.792.7 9.024.42 8.256.14 7.376 0 6.384 0c-.88 0-1.676.12-2.388.36s-1.32.576-1.824 1.008c-.504.432-.896.94-1.176 1.524-.28.584-.42 1.22-.42 1.908v.144c0 .832.144 1.536.432 2.112a3.978 3.978 0 0 0 1.212 1.44c.52.384 1.132.692 1.836.924.704.232 1.48.42 2.328.564.64.112 1.168.248 1.584.408.416.16.744.34.984.54s.408.424.504.672c.096.248.144.508.144.78 0 .576-.232 1.072-.696 1.488-.464.416-1.176.624-2.136.624-1.232 0-2.14-.3-2.724-.9-.584-.6-.876-1.404-.876-2.412v-.576H0v.72c0 .88.144 1.692.432 2.436a5.47 5.47 0 0 0 1.272 1.944c.56.552 1.26.984 2.1 1.296.84.312 1.812.468 2.916.468zm22-.336V10.8h3.408c.864 0 1.616-.144 2.256-.432a4.707 4.707 0 0 0 1.596-1.14 4.833 4.833 0 0 0 .96-1.608c.216-.6.324-1.212.324-1.836v-.576c0-.608-.108-1.204-.324-1.788a4.625 4.625 0 0 0-.96-1.56A4.737 4.737 0 0 0 34.384.756c-.64-.28-1.392-.42-2.256-.42h-6.576v16.8h3.168zm3.096-9.36H28.72V3.36h3.096c.704 0 1.26.192 1.668.576.408.384.612.88.612 1.488v.288c0 .608-.204 1.104-.612 1.488-.408.384-.964.576-1.668.576zm29.464 9.36v-3.024h-7.632V.336H50.48v16.8h10.8zm24.88 0v-3.024h-4.032V3.36h4.032V.336H74.928V3.36h4.032v10.752h-4.032v3.024H86.16zm-78.096 36V39.36h4.464v-3.024H.432v3.024h4.464v13.776h3.168zm24.688 0V39.36h4.464v-3.024H25.12v3.024h4.464v13.776h3.168zm28.624 0v-3.024h-7.728v-3.888H60.8V43.2h-7.152v-3.84h7.44v-3.024H50.48v16.8h10.896zm16.744 0V46.8h3.648c.464 0 .796.12.996.36.2.24.3.552.3.936v5.04h3.168v-5.808c0-.56-.164-1.024-.492-1.392-.328-.368-.772-.584-1.332-.648v-.432c.768-.32 1.336-.78 1.704-1.38a3.63 3.63 0 0 0 .552-1.932v-.576c0-.64-.116-1.24-.348-1.8a4.332 4.332 0 0 0-1.008-1.476c-.44-.424-.988-.756-1.644-.996-.656-.24-1.416-.36-2.28-.36h-6.432v16.8h3.168zm3.024-9.36H78.12V39.36h3.024c.768 0 1.352.204 1.752.612.4.408.6.892.6 1.452v.288c0 .656-.2 1.164-.6 1.524-.4.36-.984.54-1.752.54z"},null,-1);const S={components:{IconLogo:function(e,a){return l(),t("svg",j,[C])},MyButton:x,MyInput:g,MyInputWrapper:z,MyFormBlock:_},setup(){const l=c(null),t=c(null),a=c(null),n=c(null),s=c(null),{format:r}=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=e=>e.some((e=>null===e||""===e||0===e));i((()=>n.value.$el.disabled=!0)),d([l,t,a],(e=>{n.value.$el.disabled=o(e)}));const u=e((()=>o([l.value,t.value,a.value])?0:l.value*(t.value/100)/a.value)),p=e((()=>o([l.value,t.value,a.value])?0:l.value/a.value+u.value));return{bill:l,tip:t,people:a,reset:()=>{l.value=t.value=a.value=null,s.value.$el.value="",n.value.$el.blur()},tipAmount:u,totalAmount:p,setTip:e=>{const l=+e.target.value;l<=100&&(t.value=l)},btnReset:n,format:r,customTip:s}}},k={class:"min-h-screen bg-neutral-200 flex items-center justify-center lg:py-11"},$={class:"mt-[50px] w-full max-w-xl lg:mt-0 lg:max-w-5xl"},A={class:"flex justify-center"},D={class:"mt-10 p-8 bg-white rounded-t-3xl grid gap-10 lg:gap-12 lg:grid-cols-2 lg:rounded-b-3xl"},E={class:"space-y-8"},F={class:"mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3"},N={class:"px-4 py-7 bg-neutral-500 flex flex-col rounded-2xl md:px-10 md:py-12"},U={class:"space-y-6 md:space-y-10"},P={class:"flex items-center justify-between"},R=n("div",null,[n("h3",{class:"text-white font-bold md:text-lg"},"Tip Amount"),n("span",{class:"text-neutral-300 text-sm font-bold"},"/ person")],-1),q={class:"text-primary text-3xl font-bold md:text-5xl"},L={class:"flex items-center justify-between"},O=n("div",null,[n("h3",{class:"text-white font-bold md:text-lg"},"Total"),n("span",{class:"text-neutral-300 text-sm font-bold"},"/ person")],-1),W={class:"text-primary text-3xl font-bold md:text-5xl"},G={class:"mt-9 lg:mt-auto"},J=b(" Reset ");S.render=function(e,a,s,o,u,c){const i=v("IconLogo"),d=v("MyInput"),h=v("MyInputWrapper"),x=v("MyFormBlock"),g=v("MyButton");return l(),t("div",k,[n("div",$,[n("header",A,[n(i)]),n("main",D,[n("div",E,[n(x,{labelId:"bill_value",labelText:"Bill",state:o.bill},{default:p((()=>[n(h,{class:"mt-2",iconInput:"IconDollar"},{default:p((()=>[n(d,{modelValue:o.bill,"onUpdate:modelValue":a[1]||(a[1]=e=>o.bill=e),modelModifiers:{number:!0},id:"bill_value"},null,8,["modelValue"])])),_:1})])),_:1},8,["state"]),n(x,{labelId:"tip_value",labelText:"Select Tip %",state:o.tip},{default:p((()=>[n("div",F,[(l(),t(m,null,f([5,10,15,25,50],(e=>n(g,{variant:"primary",key:e,onClick:l=>o.tip=e,class:{"!bg-primary !text-neutral-500":e===o.tip}},{default:p((()=>[b(r(e)+"% ",1)])),_:2},1032,["onClick","class"]))),64)),n(d,{ref:"customTip",onInput:o.setTip,id:"tip_value",max:"100",placeholder:"Custom",class:[{"!border-red-400":0===o.tip},"!text-center"]},null,8,["onInput","class"])])])),_:1},8,["state"]),n(x,{labelId:"people_value",labelText:"Number of People",state:o.people},{default:p((()=>[n(h,{class:"mt-2",iconInput:"IconPerson"},{default:p((()=>[n(d,{modelValue:o.people,"onUpdate:modelValue":a[2]||(a[2]=e=>o.people=e),modelModifiers:{number:!0},id:"people_value"},null,8,["modelValue"])])),_:1})])),_:1},8,["state"])]),n("div",N,[n("div",U,[n("div",P,[R,n("div",null,[n("h2",q,r(o.format(o.tipAmount)),1)])]),n("div",L,[O,n("div",null,[n("h2",W,r(o.format(o.totalAmount)),1)])])]),n("div",G,[n(g,{variant:"secondary",onClick:o.reset,ref:"btnReset"},{default:p((()=>[J])),_:1},8,["onClick"])])])])])])};h(S).mount("#app");
