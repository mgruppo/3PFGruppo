"use strict";(self.webpackChunk_2PFGruppo=self.webpackChunk_2PFGruppo||[]).push([[174],{9174:(st,g,n)=>{n.r(g),n.d(g,{UsuariosModule:()=>at});var C=n(6895),u=n(7155),s=n(4006),c=n(5412),t=n(4650),p=n(9549),h=n(4144),d=n(4859),_=n(2468);function b(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"controlErrorMessages"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function x(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"controlErrorMessages"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function y(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"controlErrorMessages"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function N(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"controlErrorMessages"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function F(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"controlErrorMessages"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}function Y(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"controlErrorMessages"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e))}}let Z=(()=>{class o{constructor(e,r){if(this.dialogRef=e,this.data=r,this.nombreControl=new s.NI("",[s.kI.required,s.kI.minLength(3)]),this.apellidoControl=new s.NI("",[s.kI.required,s.kI.minLength(3)]),this.emailControl=new s.NI("",[s.kI.required,s.kI.email]),this.passwordControl=new s.NI("",[s.kI.required]),this.tokenControl=new s.NI("",[s.kI.required]),this.roleControl=new s.NI("",[s.kI.required]),this.usuarioForm=new s.cw({nombre:this.nombreControl,apellido:this.apellidoControl,email:this.emailControl,password:this.passwordControl,token:this.tokenControl,role:this.roleControl}),r){const a=r.usuario;this.nombreControl.setValue(a.nombre),this.apellidoControl.setValue(a.apellido),this.emailControl.setValue(a.email),this.passwordControl.setValue(a.password),this.tokenControl.setValue(a.token),this.roleControl.setValue(a.role)}}guardar(){this.usuarioForm.valid?this.dialogRef.close(this.usuarioForm.value):this.usuarioForm.markAllAsTouched()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.so),t.Y36(c.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-abm-usuarios"]],decls:51,vars:25,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"abm-container"],[1,"grid","formgrid",3,"formGroup"],[1,"col-12","field"],[1,"w-full"],["type","text","matInput","",3,"formControl"],[4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"ABM Usuarios"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Nombre"),t.qZA(),t._UZ(8,"input",5),t.YNc(9,b,3,3,"mat-error",6),t.ALo(10,"keyvalue"),t.qZA()(),t.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"Apellido"),t.qZA(),t._UZ(15,"input",5),t.YNc(16,x,3,3,"mat-error",6),t.ALo(17,"keyvalue"),t.qZA()(),t.TgZ(18,"div",3)(19,"mat-form-field",4)(20,"mat-label"),t._uU(21,"Email"),t.qZA(),t._UZ(22,"input",5),t.YNc(23,y,3,3,"mat-error",6),t.ALo(24,"keyvalue"),t.qZA()(),t.TgZ(25,"div",3)(26,"mat-form-field",4)(27,"mat-label"),t._uU(28,"Password"),t.qZA(),t._UZ(29,"input",5),t.YNc(30,N,3,3,"mat-error",6),t.ALo(31,"keyvalue"),t.qZA()(),t.TgZ(32,"div",3)(33,"mat-form-field",4)(34,"mat-label"),t._uU(35,"Token"),t.qZA(),t._UZ(36,"input",5),t.YNc(37,F,3,3,"mat-error",6),t.ALo(38,"keyvalue"),t.qZA()(),t.TgZ(39,"div",3)(40,"mat-form-field",4)(41,"mat-label"),t._uU(42,"Rol"),t.qZA(),t._UZ(43,"input",5),t.YNc(44,Y,3,3,"mat-error",6),t.ALo(45,"keyvalue"),t.qZA()()()(),t.TgZ(46,"div",7)(47,"button",8),t._uU(48,"Cancelar"),t.qZA(),t.TgZ(49,"button",9),t.NdJ("click",function(){return r.guardar()}),t._uU(50,"Guardar"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",r.usuarioForm),t.xp6(5),t.Q6J("formControl",r.nombreControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(10,13,r.nombreControl.errors)),t.xp6(6),t.Q6J("formControl",r.apellidoControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(17,15,r.apellidoControl.errors)),t.xp6(6),t.Q6J("formControl",r.emailControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(24,17,r.emailControl.errors)),t.xp6(6),t.Q6J("formControl",r.passwordControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(31,19,r.passwordControl.errors)),t.xp6(6),t.Q6J("formControl",r.tokenControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(38,21,r.tokenControl.errors)),t.xp6(6),t.Q6J("formControl",r.roleControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(45,23,r.roleControl.errors)))},dependencies:[C.sg,s._Y,s.Fj,s.JJ,s.JL,s.oH,s.sg,p.KE,p.hX,p.TO,h.Nt,d.lW,c.ZT,c.uh,c.xY,c.H8,C.Nd,_.K],styles:[".abm-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.abm-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] + mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.abm-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:500px}.abm-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.5rem}"]}),o})();var J=n(1135),O=n(8505),k=n(5577),q=n(4004),U=n(5698),A=n(8181),S=n(529);let T=(()=>{class o{constructor(e){this.httpClient=e,this.usuarios$=new J.X([])}obtenerUsuarios(){return this.httpClient.get(`${A.a.apiBaseUrl}/usuarios`).pipe((0,O.b)(e=>this.usuarios$.next(e)),(0,k.z)(()=>this.usuarios$.asObservable()))}getUsuarioById(e){return this.httpClient.get(`${A.a.apiBaseUrl}/usuarios`).pipe((0,q.U)(r=>r.find(a=>a.id===e)))}crearUsuario(e){return this.usuarios$.pipe((0,U.q)(1)).subscribe({next:r=>{this.usuarios$.next([...r,{id:r.length+1,...e}])},complete:()=>{},error:()=>{}}),this.usuarios$.asObservable()}editarUsuario(e,r){return this.usuarios$.pipe((0,U.q)(1)).subscribe({next:a=>{const l=a.map(m=>m.id===e?{...m,...r}:m);this.usuarios$.next(l)},complete:()=>{},error:()=>{}}),this.usuarios$.asObservable()}eliminarUsuario(e){return this.usuarios$.pipe((0,U.q)(1)).subscribe({next:r=>{const a=r.filter(l=>l.id!==e);this.usuarios$.next(a)},complete:()=>{},error:()=>{}}),this.usuarios$.asObservable()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(S.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=n(9299),v=n(7392),Q=n(223);function $(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Codigo"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function M(o,i){if(1&o&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.id)}}function D(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Nombre"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function I(o,i){if(1&o&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.nombre," ")}}function w(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Apellido"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function z(o,i){if(1&o&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.apellido," ")}}function E(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Email"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function L(o,i){if(1&o&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.email," ")}}function B(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Detalle"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function R(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",18)(1,"button",19),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.irAlDetalle(l.id))}),t.TgZ(2,"mat-icon"),t._uU(3,"visibility"),t.qZA()()()}}function P(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Editar"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function G(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",18)(1,"button",19),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.editarUsuario(l))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()()()}}function j(o,i){1&o&&(t.TgZ(0,"th",17),t._uU(1,"Eliminar"),t.qZA()),2&o&&t.Q6J("appFontSize",20)}function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",18)(1,"button",19),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.eliminarUsuario(l))}),t.TgZ(2,"mat-icon"),t._uU(3,"close"),t.qZA()()()}}function K(o,i){1&o&&t._UZ(0,"tr",20)}function X(o,i){1&o&&t._UZ(0,"tr",21)}let V=(()=>{class o{constructor(e,r,a,l){this.usuariosService=e,this.dialog=r,this.router=a,this.activatedRoute=l,this.dataSource=new u.by,this.displayedColumns=["id","nombre","apellido","email","detalle","editar","eliminar"],this.usuariosSuscription=null}ngOnDestroy(){this.usuariosSuscription?.unsubscribe()}ngOnInit(){this.usuariosService.obtenerUsuarios().subscribe({next:e=>{this.dataSource.data=e}})}crearUsuario(){this.dialog.open(Z).afterClosed().subscribe(r=>{r&&this.usuariosService.crearUsuario(r)})}editarUsuario(e){this.dialog.open(Z,{data:{usuario:e}}).afterClosed().subscribe(a=>{a&&this.usuariosService.editarUsuario(e.id,a)})}eliminarUsuario(e){confirm("Est\xe1 seguro?")&&this.usuariosService.eliminarUsuario(e.id)}aplicarFiltros(e){const r=e.target?.value;this.dataSource.filter=r?.trim()?.toLowerCase()}irAlDetalle(e){this.router.navigate([e],{relativeTo:this.activatedRoute})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T),t.Y36(c.uw),t.Y36(f.F0),t.Y36(f.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-usuarios"]],decls:34,vars:3,consts:[[1,"mb-3"],["color","primary","mat-flat-button","",3,"click"],[1,"col-md-6"],["matInput","","placeholder","Ingrese el dato a filtrar",3,"keyup"],["input",""],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",3,"appFontSize",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","apellido"],["matColumnDef","email"],["matColumnDef","detalle"],["matColumnDef","editar"],["matColumnDef","eliminar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",3,"appFontSize"],["mat-cell",""],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return r.crearUsuario()}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t._uU(4," Agregar Usuario "),t.qZA()(),t.TgZ(5,"mat-form-field",2)(6,"mat-label"),t._uU(7,"Filtrar por"),t.qZA(),t.TgZ(8,"input",3,4),t.NdJ("keyup",function(l){return r.aplicarFiltros(l)}),t.qZA()(),t.TgZ(10,"table",5),t.ynx(11,6),t.YNc(12,$,2,1,"th",7),t.YNc(13,M,2,1,"td",8),t.BQk(),t.ynx(14,9),t.YNc(15,D,2,1,"th",7),t.YNc(16,I,2,1,"td",8),t.BQk(),t.ynx(17,10),t.YNc(18,w,2,1,"th",7),t.YNc(19,z,2,1,"td",8),t.BQk(),t.ynx(20,11),t.YNc(21,E,2,1,"th",7),t.YNc(22,L,2,1,"td",8),t.BQk(),t.ynx(23,12),t.YNc(24,B,2,1,"th",7),t.YNc(25,R,4,0,"td",8),t.BQk(),t.ynx(26,13),t.YNc(27,P,2,1,"th",7),t.YNc(28,G,4,0,"td",8),t.BQk(),t.ynx(29,14),t.YNc(30,j,2,1,"th",7),t.YNc(31,H,4,0,"td",8),t.BQk(),t.YNc(32,K,1,0,"tr",15),t.YNc(33,X,1,0,"tr",16),t.qZA()),2&e&&(t.xp6(10),t.Q6J("dataSource",r.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns))},dependencies:[v.Hw,p.KE,p.hX,h.Nt,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,d.lW,d.RK,Q.h]}),o})();var W=n(5540),tt=n(4586),ot=n(9602),et=n(3238),rt=n(7579),it=n(2722);let nt=(()=>{class o{constructor(e,r){this.activatedRoute=e,this.usuariosService=r,this.destroyed$=new rt.x,this.usuariosService.getUsuarioById(parseInt(this.activatedRoute.snapshot.params.id)).pipe((0,it.R)(this.destroyed$)).subscribe(a=>this.usuario=a)}ngOnDestroy(){this.destroyed$.next(!0)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.gz),t.Y36(T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-usuario-detalle"]],decls:4,vars:1,template:function(e,r){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Nombre del usuario"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.qZA()),2&e&&(t.xp6(3),t.hij(" ",null==r.usuario?null:r.usuario.nombre," "))}}),o})(),at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.ez,tt.D,s.UX,v.Ps,p.lN,h.c,u.p0,d.ot,c.Is,ot.FA,et.XK,W.o,f.Bz.forChild([{path:"",component:V},{path:":id",component:nt}])]}),o})()}}]);