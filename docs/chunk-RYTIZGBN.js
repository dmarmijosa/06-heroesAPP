import{A as oe,B as R,C as $e,D as Oe,E as Ue,F as qe,G as Ge,H as ze,I as Je,J as Ke,K as Qe,L as We,M as j,N as Xe,O as Ye,P as ne,Q as Ze,R as et,S as tt,T as it,U as rt,V as ot,W as nt,X as at,a as W,b as I,c as He,d as X,e as Y,f as B,g as Z,h as ee,i as Te,j as Fe,k as M,l as Pe,m as De,n as Le,o as Ne,p as Be,r as Ve,s as te,t as Ae,u as Re,v as V,w as ie,x as A,y as re,z as je}from"./chunk-JOHKQONG.js";import{a as Ee,g as K,h as ye,i as N,j as Q,k as de,l as we,m as ke}from"./chunk-3MXINMCC.js";import"./chunk-JGYM447R.js";import{Ab as w,Ac as be,B as ce,Cc as Ie,Db as f,Dc as Me,Fb as b,Mb as q,Nb as a,Ob as p,Pb as k,S as U,Sa as F,Sb as Se,Tb as pe,Ub as T,Va as m,Vb as L,Wa as P,Wb as _e,Z as ve,_ as z,da as u,ia as h,ja as J,la as Ce,lb as y,m as le,nb as d,q as ge,ra as v,sa as C,sb as D,tb as S,ub as _,vb as x,wb as o,xb as i,yb as c,z as se,zc as xe}from"./chunk-IKVAMXHK.js";var _t=()=>({width:"250px"});function xt(t,e){if(t&1&&(o(0,"mat-list-item",5)(1,"mat-icon",9),a(2),i(),a(3),i()),t&2){let s=e.$implicit;d("routerLink",s.url),m(2),p(s.icon),m(),k(" ",s.label," ")}}var st=(()=>{let e=class e{constructor(){this.router=u(N),this.authService=u(ke),this.sidevarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xF1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}]}get user(){return this.authService.currentUser}onLogOut(){this.authService.logOut(),this.router.navigate(["/auth"])}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-layout-page"]],decls:24,vars:3,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink"],["color","primary"],["mat-button","",3,"click"],[1,"container","p-2"],["matListItemIcon",""]],template:function(n,l){if(n&1){let g=w();o(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar")(4,"span"),a(5,"Men\xFA"),i(),c(6,"span",3),o(7,"button",4),f("click",function(){v(g);let O=q(2);return C(O.toggle())}),o(8,"mat-icon"),a(9,"menu"),i()()(),o(10,"mat-nav-list"),_(11,xt,4,3,"mat-list-item",5,S),i()(),o(13,"mat-toolbar",6)(14,"button",4),f("click",function(){v(g);let O=q(2);return C(O.toggle())}),o(15,"mat-icon"),a(16,"menu"),i()(),c(17,"span",3),o(18,"span"),a(19),i(),o(20,"button",7),f("click",function(){return v(g),C(l.onLogOut())}),a(21,"Logout"),i()(),o(22,"div",8),c(23,"router-outlet"),i()()}n&2&&(m(),d("ngStyle",Se(2,_t)),m(10),x(l.sidevarItems),m(8),p(l.user==null?null:l.user.email))},dependencies:[be,ye,Q,I,He,B,Ze,ne,Xe,it,rt,nt]});let t=e;return t})();var ue=function(t){return t.DCComics="DC Comics",t.MarvelComics="Marvel Comics",t}(ue||{});var H=(()=>{let e=class e{constructor(){this.baseUrl=we.baseUrl,this.http=u(Ee)}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(r){return this.http.get(`${this.baseUrl}/heroes/${r}`).pipe(ce(n=>le(void 0)))}getSuggetions(r){return this.http.get(`${this.baseUrl}/heroes`,{params:{q:r,_limit:"6"}})}addHero(r){return this.http.post(`${this.baseUrl}/heroes`,r)}updateHero(r){if(!r)throw Error("Hero id is required");return this.http.patch(`${this.baseUrl}/heroes/${r.id}`,r)}deleteHeroById(r){if(!r)throw Error("Hero id is required");return this.http.delete(`${this.baseUrl}/heroes/${r.id}`).pipe(ge(n=>!0),ce(n=>le(!1)))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=ve({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ct=(()=>{let e=class e{constructor(r,n){this.dialogRef=r,this.data=n}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}};e.\u0275fac=function(n){return new(n||e)(P(Ue),P(qe))},e.\u0275cmp=h({type:e,selectors:[["app-confirm-dialog"]],decls:13,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"text-bold"],["mat-dialog-actions",""],["mat-button","",3,"click"],[1,"spacer"],["mat-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(n,l){n&1&&(o(0,"h1",0),a(1,"\xBFEst\xE1 seguro?"),i(),o(2,"div",1)(3,"p"),a(4,"Este proceso no es reversible, est\xE1 a punto de eliminar a "),o(5,"span",2),a(6),i()()(),o(7,"div",3)(8,"button",4),f("click",function(){return l.onNoClick()}),a(9,"No Thanks"),i(),c(10,"span",5),o(11,"button",6),f("click",function(){return l.onConfirm()}),a(12,"Ok"),i()()),n&2&&(m(6),p(l.data.superhero))},dependencies:[I,ze,Ke,Je]});let t=e;return t})();var $=(()=>{let e=class e{transform(r){return!r.id&&!r.alt_image?"assets/no-image.png":r.alt_image?r.alt_image:`assets/heroes/${r.id}.jpg`}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=Ce({name:"heroImage",type:e,pure:!0});let t=e;return t})();function wt(t,e){if(t&1&&(o(0,"small"),a(1),i()),t&2){let s=b();m(),p(s.currentHero.superhero)}}function kt(t,e){if(t&1&&(o(0,"mat-option",11),a(1),i()),t&2){let s=e.$implicit;d("value",s.id),m(),p(s.desc)}}function Ht(t,e){if(t&1){let s=w();o(0,"button",17),f("click",function(){v(s);let n=b();return C(n.onDeleteHero())}),a(1," Borrar "),i()}}var he=(()=>{let e=class e{ngOnInit(){this.router.url.includes("edit")&&this.activateRouter.params.pipe(U(({id:r})=>this.heroService.getHeroById(r))).subscribe(r=>{if(!r)return this.router.navigate(["/heroes"]);this.heroForm.reset(r)})}constructor(r,n){this.matSnackbar=r,this.dialog=n,this.heroService=u(H),this.activateRouter=u(K),this.router=u(N),this.publishers=[{id:"DC Comics",desc:"DC- Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}],this.heroForm=new Fe({id:new M(""),superhero:new M("",{nonNullable:!0}),publisher:new M(ue.DCComics),alter_ego:new M(""),first_appearance:new M(""),characters:new M(""),alt_image:new M("")})}get currentHero(){return this.heroForm.value}onSubmit(){if(!this.heroForm.invalid){if(this.currentHero.id){this.heroService.updateHero(this.currentHero).subscribe(r=>{this.showSnackbar(`${r.superhero} updated!`)});return}this.heroService.addHero(this.currentHero).subscribe(r=>{this.router.navigate(["/heroes/edit",r.id]),this.showSnackbar(`${r.superhero} created!`)})}}onDeleteHero(){if(!this.currentHero.id)throw Error("Hero id is required");this.dialog.open(ct,{data:this.currentHero}).afterClosed().pipe(se(n=>n),U(()=>this.heroService.deleteHeroById(this.currentHero)),se(n=>n)).subscribe(()=>{this.router.navigate(["/heroes"])})}showSnackbar(r){this.matSnackbar.open(r,"done",{duration:2500})}};e.\u0275fac=function(n){return new(n||e)(P(ot),P(Ge))},e.\u0275cmp=h({type:e,selectors:[["app-new-page"]],decls:45,vars:7,consts:[[4,"ngIf"],[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"ngSubmit","formGroup"],["formControlName","superhero","matInput","","type","text","required",""],["formControlName","alter_ego","matInput","","type","text","required",""],[1,"col-12"],["formControlName","first_appearance","matInput","","type","text","required",""],["formControlName","characters","matInput","","type","text","required",""],["formControlName","publisher","required",""],[3,"value"],["formControlName","alt_image","matInput","","type","text"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["mat-card-image","","alt","imagen del h\xE9roe",3,"src"],["mat-flat-button","","color","warn",3,"click"]],template:function(n,l){n&1&&(o(0,"h1"),a(1),y(2,wt,2,1,"small",0),i(),c(3,"mat-divider",1),o(4,"div",2)(5,"div",3)(6,"mat-card")(7,"mat-card-content")(8,"form",4),f("ngSubmit",function(){return l.onSubmit()}),o(9,"mat-form-field",3)(10,"mat-label"),a(11,"Super h\xE9ro"),i(),c(12,"input",5),i(),o(13,"mat-form-field",3)(14,"mat-label"),a(15,"Alter Ego"),i(),c(16,"input",6),i(),o(17,"mat-form-field",7)(18,"mat-label"),a(19,"Primera aparici\xF3n"),i(),c(20,"input",8),i(),o(21,"mat-form-field",7)(22,"mat-label"),a(23,"Personajes"),i(),c(24,"input",9),i(),o(25,"mat-form-field",7)(26,"mat-label"),a(27,"Creador"),i(),o(28,"mat-select",10),_(29,kt,2,2,"mat-option",11,S),i()(),o(31,"mat-form-field",7)(32,"mat-label"),a(33,"Alternative Image"),i(),c(34,"input",12),i()(),o(35,"div",13),y(36,Ht,2,0,"button",14),o(37,"button",15),f("click",function(){return l.onSubmit()}),o(38,"mat-icon"),a(39,"save"),i(),a(40," Guardar "),i()()()()(),o(41,"div",3)(42,"mat-card"),c(43,"img",16),T(44,"heroImage"),i()()()),n&2&&(m(),k(" ",l.currentHero.id?"Editar":"Agregar"," H\xE9ro "),m(),d("ngIf",l.currentHero.superhero),m(6),d("formGroup",l.heroForm),m(21),x(l.publishers),m(7),d("ngIf",l.currentHero.id),m(7),d("src",L(44,5,l.currentHero),F))},dependencies:[xe,W,I,V,A,R,Y,X,B,te,j,tt,Pe,Z,ee,Te,Be,Le,Ne,$]});let t=e;return t})();var Tt=t=>["/heroes/edit",t],Ft=t=>["/heroes",t];function Pt(t,e){if(t&1&&(o(0,"mat-chip"),a(1),i()),t&2){let s=e.$implicit;m(),p(s)}}var me=(()=>{let e=class e{ngOnInit(){if(!this.hero)throw Error("Hero propery is required")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:31,vars:18,consts:[["mat-card-image","",3,"src","alt"],[1,"mt-2"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(n,l){n&1&&(o(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),a(3),i(),o(4,"mat-card-subtitle"),a(5),i()(),c(6,"img",0),T(7,"heroImage"),o(8,"mat-card-content",1)(9,"h4"),a(10),i(),o(11,"p")(12,"strong"),a(13,"Primera aparici\xF3n"),i(),a(14),c(15,"br"),o(16,"mat-chip-listbox"),_(17,Pt,2,1,"mat-chip",null,S),T(19,"slice"),i()()(),c(20,"mat-divider"),o(21,"mat-card-actions")(22,"button",2)(23,"mat-icon"),a(24,"edit"),i(),a(25," Editar"),i(),c(26,"span",3),o(27,"button",4)(28,"mat-icon"),a(29,"more_horiz"),i(),a(30," M\xE1s"),i()()()),n&2&&(m(3),p(l.hero.superhero),m(2),p(l.hero.alter_ego),m(),d("src",L(7,8,l.hero),F)("alt",l.hero.superhero),m(4),p(l.hero.publisher),m(4),k(" ",l.hero.first_appearance," "),m(3),x(_e(19,10,l.hero.characters.split(","),0,3)),m(5),d("routerLink",pe(14,Tt,l.hero.id)),m(5),d("routerLink",pe(16,Ft,l.hero.id)))},dependencies:[Q,I,V,je,A,oe,R,re,ie,$e,Oe,B,j,Ie,$]});let t=e;return t})();function Dt(t,e){if(t&1&&(o(0,"mat-option",4),a(1),i()),t&2){let s=e.$implicit;d("value",s),m(),p(s.superhero)}}function Lt(t,e){if(t&1&&(o(0,"mat-option",5),a(1),i()),t&2){let s=b();m(),k("No se encontr\xF3 con el t\xE9rmino ",s.searchInput.value,"")}}function Nt(t,e){if(t&1&&c(0,"heroes-hero-card",6),t&2){let s=b();d("hero",s.selectedHero)}}function Bt(t,e){t&1&&(o(0,"div")(1,"p"),a(2,"Buscar un h\xE9roe"),i()())}function Vt(t,e){t&1&&(o(0,"div")(1,"p"),a(2,"No existe ese h\xE9roe"),i()())}function At(t,e){if(t&1&&y(0,Bt,3,0,"div")(1,Vt,3,0),t&2){let s=b();D(0,!s.searchInput.touched&&s.searchInput.pristine?0:1)}}var ft=(()=>{let e=class e{constructor(){this.heroService=u(H),this.heroes=[],this.searchInput=new M("")}searchHero(){let r=this.searchInput.value||"";if(!r){this.heroes=[];return}this.heroService.getSuggetions(r).subscribe(n=>this.heroes=n)}OnSelectOption(r){if(!r.option.value){this.selectedHero=void 0;return}let n=r.option.value;this.searchInput.setValue(n.superhero),this.selectedHero=n}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-search-page"]],decls:14,vars:4,consts:[["auto","matAutocomplete"],[1,"flex","flex-column","p-2"],["type","text","matInput","",3,"input","formControl","matAutocomplete"],[3,"optionSelected"],[3,"value"],["value",""],[3,"hero"]],template:function(n,l){if(n&1){let g=w();o(0,"div",1)(1,"h3"),a(2,"Buscador"),i(),o(3,"mat-form-field")(4,"mat-label"),a(5,"Buscador de h\xE9roes"),i(),o(6,"input",2),f("input",function(){return v(g),C(l.searchHero())}),i(),o(7,"mat-autocomplete",3,0),f("optionSelected",function(O){return v(g),C(l.OnSelectOption(O))}),_(9,Dt,2,2,"mat-option",4,S),y(11,Lt,2,1,"mat-option",5),i()(),y(12,Nt,1,1,"heroes-hero-card",6)(13,At,2,1),i()}if(n&2){let g=q(8);m(6),d("formControl",l.searchInput)("matAutocomplete",g),m(3),x(l.heroes),m(2),D(11,l.heroes.length===0&&l.searchInput.value&&l.searchInput.value.length>0?11:-1),m(),D(12,l.selectedHero&&l.searchInput.touched?12:13)}},dependencies:[Ae,W,Re,Y,X,te,Z,ee,De,me]});let t=e;return t})();function Rt(t,e){t&1&&(o(0,"mat-grid-list",0)(1,"mat-grid-tile"),c(2,"mat-spinner"),i()())}function jt(t,e){if(t&1){let s=w();o(0,"div",1)(1,"mat-card",2)(2,"mat-card-header")(3,"mat-card-title"),a(4),i(),o(5,"mat-card-subtitle"),a(6),i()(),c(7,"img",3),T(8,"heroImage"),i(),o(9,"mat-card",2)(10,"mat-card-header")(11,"mat-card-title"),a(12,"Informaci\xF3n"),i(),o(13,"mat-card-subtitle"),a(14),i()(),o(15,"mat-card-content")(16,"mat-list")(17,"mat-list-item"),a(18),i(),o(19,"mat-list-item"),a(20),i(),o(21,"mat-list-item"),a(22),i(),o(23,"mat-list-item"),a(24),i()(),o(25,"button",4),f("click",function(){v(s);let n=b();return C(n.goBack())}),a(26,"Regresar"),i()()()()}if(t&2){let s=b();m(4),p(s.hero.alter_ego),m(2),p(s.hero.superhero),m(),d("src",L(8,9,s.hero),F)("alt",s.hero.alt_image),m(7),p(s.hero.superhero),m(4),p(s.hero.first_appearance),m(2),p(s.hero.characters),m(2),p(s.hero.publisher),m(2),p(s.hero.alter_ego)}}var ht=(()=>{let e=class e{constructor(){this.heroService=u(H),this.activateRouter=u(K),this.router=u(N)}ngOnInit(){this.activateRouter.params.pipe(U(({id:r})=>this.heroService.getHeroById(r))).subscribe(r=>{if(!r)return this.router.navigate(["/heroes/list"]);this.hero=r})}goBack(){this.router.navigate(["heroes/list"])}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-hero-page"]],decls:2,vars:1,consts:[["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["matCardImage","",3,"src","alt"],["mat-button","",3,"click"]],template:function(n,l){n&1&&y(0,Rt,3,0,"mat-grid-list",0)(1,jt,27,11),n&2&&D(0,l.hero?1:0)},dependencies:[I,V,A,oe,R,re,ie,We,Qe,Ye,ne,et,$]});let t=e;return t})();function $t(t,e){if(t&1&&(o(0,"div",1),c(1,"heroes-hero-card",2),i()),t&2){let s=e.$implicit;m(),d("hero",s)}}var gt=(()=>{let e=class e{constructor(){this.heroes=[],this.heroService=u(H)}ngOnInit(){this.heroService.getHeroes().subscribe(r=>{this.heroes=r})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-list-page"]],decls:6,vars:0,consts:[[1,"grid","mb-8","pt-2"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(n,l){n&1&&(o(0,"h1"),a(1,"Listado de H\xE9roes"),i(),c(2,"mat-divider"),o(3,"div",0),_(4,$t,2,1,"div",1,S),i()),n&2&&(m(4),x(l.heroes))},dependencies:[j,me]});let t=e;return t})();var Ot=[{path:"",component:st,children:[{path:"new-hero",component:he},{path:"search",component:ft},{path:"edit/:id",component:he},{path:"list",component:gt},{path:":id",component:ht},{path:"**",redirectTo:"list"}]}],vt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=J({type:e}),e.\u0275inj=z({imports:[de.forChild(Ot),de]});let t=e;return t})();var lr=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=J({type:e}),e.\u0275inj=z({imports:[Me,vt,at,Ve]});let t=e;return t})();export{lr as HeroesModule};