import{a as le}from"./chunk-65ZG7O53.js";import{a as I,b as F,d as T,e as ne,f as ie,h as A,i as W,j as oe,l as re,m as ae,s as se,t as ce}from"./chunk-SH46SFHZ.js";import{a as me}from"./chunk-MVQTKQMG.js";import"./chunk-Q64FFBLU.js";import{a as de,b as pe,m as ge,p as fe}from"./chunk-S2EHJQRD.js";import{a as X,j as $,k as ee,m as G,n as te}from"./chunk-B5RPMYKJ.js";import{$b as D,Db as h,Gb as _,Gc as Y,Hb as m,Hc as J,Ic as E,Lc as K,Rb as a,Sa as Z,Sb as C,Tb as k,Va as r,Vb as b,Wa as w,Wb as x,Xb as v,Z as H,_ as L,_b as V,ac as q,bc as B,ca as Q,ia as y,ja as R,mb as g,ob as c,qb as P,ra as f,rb as S,sa as u,xb as n,yb as o,zb as d}from"./chunk-UIR4HCCT.js";var ue=(()=>{class e{constructor(i){this._HttpClient=i}changePassword(i){return this._HttpClient.post("/admin/users/change-password",i)}static{this.\u0275fac=function(s){return new(s||e)(Q(X))}}static{this.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Me(e,p){e&1&&(n(0,"span"),a(1,"Current password is required"),o())}function Oe(e,p){if(e&1&&(n(0,"div",19),g(1,Me,2,0,"span",16),o()),e&2){let i,s=m();r(),c("ngIf",(i=s.changePasswordForm.get("oldPassword"))==null||i.errors==null?null:i.errors.required)}}function ye(e,p){e&1&&(n(0,"span"),a(1,"New password is required"),o())}function Se(e,p){e&1&&(n(0,"span"),a(1,"Password must be at least 8 characters"),o())}function ke(e,p){e&1&&(n(0,"span"),a(1,"Password must contain at least one lowercase letter, one number, and one special character"),o())}function Ee(e,p){if(e&1&&(n(0,"div",19),g(1,ye,2,0,"span",16)(2,Se,2,0,"span",16)(3,ke,2,0,"span",16),o()),e&2){let i,s,t,l=m();r(),c("ngIf",(i=l.changePasswordForm.get("newPassword"))==null||i.errors==null?null:i.errors.required),r(),c("ngIf",(s=l.changePasswordForm.get("newPassword"))==null||s.errors==null?null:s.errors.minlength),r(),c("ngIf",(t=l.changePasswordForm.get("newPassword"))==null||t.errors==null?null:t.errors.pattern)}}function Ie(e,p){e&1&&(n(0,"div",19),a(1," Passwords do not match "),o())}function Fe(e,p){e&1&&(n(0,"span"),a(1,"Change Password"),o())}function Te(e,p){e&1&&(n(0,"div",20),d(1,"div",21)(2,"div",22)(3,"div",23),o())}function Ve(e,p){e&1&&(n(0,"div",24),d(1,"i",25),n(2,"p"),a(3,"Password has been changed successfully!"),o()())}var Ce=(()=>{class e{constructor(i,s,t){this._SettingService=i,this._Router=s,this._ToastrService=t,this.isLoading=!1,this.changeSuccess=!1,this.showOldPassword=!1,this.showNewPassword=!1,this.showConfirmPassword=!1,this.passwordMatchValidator=l=>{let M=l.get("newPassword")?.value,O=l.get("confirmPassword")?.value;return M===O?null:{mismatch:!0}}}ngOnInit(){this.changePasswordForm=new ie({oldPassword:new A("",[F.required]),newPassword:new A("",[F.required,F.minLength(8),F.pattern(le)]),confirmPassword:new A("",[F.required])},{validators:this.passwordMatchValidator})}onSubmit(i){this.changePasswordForm.valid&&(this.isLoading=!0,this._SettingService.changePassword(i.value).subscribe({next:s=>{s.success&&(this.isLoading=!1,this._ToastrService.success(`${s.message}`),this._Router.navigate(["/admin"]))},error:s=>{this.isLoading=!1,this._ToastrService.error(s.error.message)}}))}togglePasswordVisibility(i){switch(i){case"oldPassword":this.showOldPassword=!this.showOldPassword;break;case"newPassword":this.showNewPassword=!this.showNewPassword;break;case"confirmPassword":this.showConfirmPassword=!this.showConfirmPassword;break}}static{this.\u0275fac=function(s){return new(s||e)(w(ue),w($),w(me))}}static{this.\u0275cmp=y({type:e,selectors:[["app-change-pass"]],decls:36,vars:23,consts:[[1,"change-password-container"],[1,"form-wrapper"],[1,"form-header"],[1,"change-password-form",3,"ngSubmit","formGroup"],[1,"form-group"],["for","oldPassword"],[1,"input-wrapper"],[1,"fas","fa-lock"],["id","oldPassword","formControlName","oldPassword","placeholder","Enter current password",3,"type"],[1,"password-toggle",3,"click"],["class","error-message",4,"ngIf"],["for","newPassword"],["id","newPassword","formControlName","newPassword","placeholder","Enter new password",3,"type"],["for","confirmPassword"],["id","confirmPassword","formControlName","confirmPassword","placeholder","Confirm new password",3,"type"],["type","submit",1,"submit-btn",3,"disabled"],[4,"ngIf"],["class","spinner",4,"ngIf"],["class","success-message",4,"ngIf"],[1,"error-message"],[1,"spinner"],[1,"bounce1"],[1,"bounce2"],[1,"bounce3"],[1,"success-message"],[1,"fas","fa-check-circle"]],template:function(s,t){if(s&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),a(4,"Change Password"),o(),n(5,"p"),a(6,"Enter your old password and choose a new one"),o()(),n(7,"form",3),_("ngSubmit",function(){return t.onSubmit(t.changePasswordForm)}),n(8,"div",4)(9,"label",5),a(10,"Current Password"),o(),n(11,"div",6),d(12,"i",7)(13,"input",8),n(14,"i",9),_("click",function(){return t.togglePasswordVisibility("oldPassword")}),o()(),g(15,Oe,2,1,"div",10),o(),n(16,"div",4)(17,"label",11),a(18,"New Password"),o(),n(19,"div",6),d(20,"i",7)(21,"input",12),n(22,"i",9),_("click",function(){return t.togglePasswordVisibility("newPassword")}),o()(),g(23,Ee,4,3,"div",10),o(),n(24,"div",4)(25,"label",13),a(26,"Confirm New Password"),o(),n(27,"div",6),d(28,"i",7)(29,"input",14),n(30,"i",9),_("click",function(){return t.togglePasswordVisibility("confirmPassword")}),o()(),g(31,Ie,2,0,"div",10),o(),n(32,"button",15),g(33,Fe,2,0,"span",16)(34,Te,4,0,"div",17),o(),g(35,Ve,4,0,"div",18),o()()()),s&2){let l,M,O,z,j,U;r(7),c("formGroup",t.changePasswordForm),r(6),P("is-invalid",((l=t.changePasswordForm.get("oldPassword"))==null?null:l.invalid)&&((l=t.changePasswordForm.get("oldPassword"))==null?null:l.touched)),c("type",t.showOldPassword?"text":"password"),r(),S(t.showOldPassword?"fas fa-eye-slash":"fas fa-eye"),r(),c("ngIf",((M=t.changePasswordForm.get("oldPassword"))==null?null:M.invalid)&&((M=t.changePasswordForm.get("oldPassword"))==null?null:M.touched)),r(6),P("is-invalid",((O=t.changePasswordForm.get("newPassword"))==null?null:O.invalid)&&((O=t.changePasswordForm.get("newPassword"))==null?null:O.touched)),c("type",t.showNewPassword?"text":"password"),r(),S(t.showNewPassword?"fas fa-eye-slash":"fas fa-eye"),r(),c("ngIf",((z=t.changePasswordForm.get("newPassword"))==null?null:z.invalid)&&((z=t.changePasswordForm.get("newPassword"))==null?null:z.touched)),r(6),P("is-invalid",((j=t.changePasswordForm.get("confirmPassword"))==null?null:j.invalid)&&((j=t.changePasswordForm.get("confirmPassword"))==null?null:j.touched)),c("type",t.showConfirmPassword?"text":"password"),r(),S(t.showConfirmPassword?"fas fa-eye-slash":"fas fa-eye"),r(),c("ngIf",((U=t.changePasswordForm.get("confirmPassword"))==null?null:U.touched)&&(t.changePasswordForm.errors==null?null:t.changePasswordForm.errors.mismatch)),r(),c("disabled",t.changePasswordForm.invalid||t.isLoading),r(),c("ngIf",!t.isLoading),r(),c("ngIf",t.isLoading),r(),c("ngIf",t.changeSuccess)}},dependencies:[E,oe,I,T,ne,re,ae],styles:[".change-password-container[_ngcontent-%COMP%]{min-height:90vh;display:flex;justify-content:center;align-items:center;background:transparent;padding:20px}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.change-password-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 25px #0000001a;width:100%;max-width:450px;animation:_ngcontent-%COMP%_slideIn .6s ease-out}@media (max-width: 480px){.change-password-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]{padding:20px}}.change-password-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;animation:_ngcontent-%COMP%_fadeIn .8s ease-out}.change-password-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--primary-color);font-size:2rem;margin-bottom:10px}@media (max-width: 480px){.change-password-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}}.change-password-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;font-size:.95rem;line-height:1.5}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:25px;animation:_ngcontent-%COMP%_fadeIn 1s ease-out}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:8px;color:#333;font-weight:500}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]{position:relative}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.password-toggle){position:absolute;left:15px;top:50%;transform:translateY(-50%);color:#666}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:#666;cursor:pointer;transition:color .3s ease}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover{color:var(--primary-color)}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:12px 15px 12px 45px;border:2px solid #e1e1e1;border-radius:10px;font-size:1rem;transition:all .3s ease}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--primary-color);box-shadow:0 0 0 3px rgba(var(--primary-color-rgb),.1);outline:none}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%]{border-color:#dc3545}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#dc3545;font-size:.85rem;margin-top:5px;animation:_ngcontent-%COMP%_fadeIn .3s ease-out}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{width:100%;padding:14px;background:var(--primary-color);color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;position:relative;overflow:hidden}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(var(--primary-color-rgb),.3)}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled{background:#ccc;cursor:not-allowed;transform:none;box-shadow:none}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:4px}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%], .change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%], .change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce3[_ngcontent-%COMP%]{width:8px;height:8px;background-color:#fff;border-radius:50%;animation:_ngcontent-%COMP%_bounce 1.4s infinite ease-in-out both}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]{text-align:center;margin-top:20px;padding:15px;background:#d4edda;border-radius:10px;color:#155724;display:flex;align-items:center;justify-content:center;gap:10px;animation:_ngcontent-%COMP%_fadeIn .5s ease-out}.change-password-container[_ngcontent-%COMP%]   .change-password-form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}@keyframes _ngcontent-%COMP%_bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}"]})}}return e})();var Ne=()=>[".."],ze=e=>({verified:e}),je=()=>({verified:!0});function Le(e,p){if(e&1&&(n(0,"div",54),d(1,"img",55),n(2,"div",56),d(3,"i",57),o()()),e&2){let i=m();r(),c("src",i.user.profileImage,Z),r(),c("ngClass",D(3,ze,i.user.verified)),r(),c("ngClass",i.user.verified?"fa-check":"fa-times")}}function Re(e,p){e&1&&(n(0,"div",54),d(1,"img",58),n(2,"div",56),d(3,"i",57),o()()),e&2&&(r(2),c("ngClass",V(2,je)),r(),c("ngClass","fa-check"))}function De(e,p){if(e&1&&(n(0,"p",30),a(1),o()),e&2){let i=m();r(),C(i.user.userName)}}function Ye(e,p){if(e&1){let i=h();n(0,"input",59),v("ngModelChange",function(t){f(i);let l=m();return x(l.user.userName,t)||(l.user.userName=t),u(t)}),o()}if(e&2){let i=m();b("ngModel",i.user.userName)}}function Ae(e,p){if(e&1&&(n(0,"p",30),a(1),o()),e&2){let i=m();r(),C(i.user.email)}}function We(e,p){if(e&1){let i=h();n(0,"input",60),v("ngModelChange",function(t){f(i);let l=m();return x(l.user.email,t)||(l.user.email=t),u(t)}),o()}if(e&2){let i=m();b("ngModel",i.user.email)}}function qe(e,p){if(e&1&&(n(0,"p",30),a(1),o()),e&2){let i=m();r(),C(i.user.phoneNumber)}}function Be(e,p){if(e&1){let i=h();n(0,"input",61),v("ngModelChange",function(t){f(i);let l=m();return x(l.user.phoneNumber,t)||(l.user.phoneNumber=t),u(t)}),o()}if(e&2){let i=m();b("ngModel",i.user.phoneNumber)}}function Ge(e,p){if(e&1&&(n(0,"p",30),a(1),o()),e&2){let i=m();r(),C(i.user.country)}}function Ue(e,p){if(e&1){let i=h();n(0,"input",59),v("ngModelChange",function(t){f(i);let l=m();return x(l.user.country,t)||(l.user.country=t),u(t)}),o()}if(e&2){let i=m();b("ngModel",i.user.country)}}function He(e,p){if(e&1){let i=h();n(0,"div",62)(1,"button",63),_("click",function(){f(i);let t=m();return u(t.toggleEdit())}),a(2,"Cancel"),o(),n(3,"button",64),_("click",function(){f(i);let t=m();return u(t.saveChanges())}),a(4,"Save Changes"),o()()}}var Pe=(()=>{class e{constructor(i,s){this._ProfileService=i,this._AuthService=s,this.id=localStorage.getItem("id"),this.isEditing=!1,this.loading=!1}ngOnInit(){this.getCurrentUser()}getCurrentUser(){this.loading=!0,this._ProfileService.getCurrentUser(this.id).subscribe({next:i=>{this.loading=!1,this.user=i.data.user},error:i=>{this.loading=!1,console.log(i)}})}logOut(){this._AuthService.Logout()}formatDate(i){return new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}toggleEdit(){this.isEditing=!this.isEditing}saveChanges(){this.isEditing=!1,alert("Profile updated successfully!")}static{this.\u0275fac=function(s){return new(s||e)(w(pe),w(de))}}static{this.\u0275cmp=y({type:e,selectors:[["app-profile"]],decls:125,vars:31,consts:[[1,"profile-container"],[1,"container","py-5"],[1,"row"],[1,"col-lg-4"],[1,"card","mb-4","profile-card"],[1,"card-body","text-center"],["class","profile-image-container",4,"ngIf"],[1,"my-3"],[1,"text-muted","mb-1"],[1,"text-muted","mb-4"],[1,"d-flex","justify-content-center","mb-2"],["type","button",1,"btn","btn-success","me-2",3,"click"],[1,"fas","fa-edit","me-2"],["type","button",1,"btn","btn-outline-primary"],[1,"fas","fa-cog","me-2"],[1,"card","mb-4","mb-lg-0","activity-card"],[1,"card-body","p-0"],[1,"list-group","list-group-flush","rounded-3"],[1,"list-group-item","d-flex","justify-content-between","align-items-center","p-3"],[1,"fas","fa-globe","fa-lg","text-warning"],[1,"mb-0"],[1,"badge",3,"ngClass"],[1,"fas","fa-calendar-alt","fa-lg",2,"color","#333333"],[1,"fas","fa-clock","fa-lg",2,"color","#55acee"],[1,"col-lg-8"],[1,"card","mb-4","info-card"],[1,"card-body"],[1,"col-sm-3"],[1,"mb-0","field-label"],[1,"col-sm-9"],[1,"text-muted","mb-0","field-value"],["class","text-muted mb-0 field-value",4,"ngIf"],["type","text","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],["type","email","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],["type","tel","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],[1,"badge","role-badge"],["class","mt-4 text-end",4,"ngIf"],[1,"col-md-6"],[1,"card","mb-4","mb-md-0","stats-card"],[1,"card-title","mb-4"],[1,"mb-1",2,"font-size",".77rem"],[1,"progress","rounded","mb-4",2,"height","5px"],["role","progressbar","aria-valuenow","90","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","90%"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","75%"],[1,"progress","rounded",2,"height","5px"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","80%"],[1,"card","mb-4","mb-md-0","actions-card"],[1,"action-buttons"],[1,"btn","btn-outline-primary","mb-2","w-100",3,"routerLink"],[1,"fas","fa-lock","me-2"],[1,"btn","btn-outline-primary","mb-2","w-100"],[1,"fas","fa-bell","me-2"],[1,"btn","btn-outline-danger","w-100",3,"click"],[1,"fas","fa-sign-out-alt","me-2"],[1,"profile-image-container"],["alt","Profile Image",1,"profile-image",3,"src"],[1,"profile-status",3,"ngClass"],[1,"fas",3,"ngClass"],["src","../../../../assets/images/user-Csi4vjZh.png","alt","Profile Image",1,"profile-image"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["type","email",1,"form-control",3,"ngModelChange","ngModel"],["type","tel",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-4","text-end"],[1,"btn","btn-secondary","me-2",3,"click"],[1,"btn","btn-success",3,"click"]],template:function(s,t){s&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),g(6,Le,4,5,"div",6)(7,Re,4,3,"div",6),n(8,"h2",7),a(9),o(),n(10,"p",8),a(11),o(),n(12,"p",9),a(13),o(),n(14,"div",10)(15,"button",11),_("click",function(){return t.toggleEdit()}),d(16,"i",12),a(17,"Edit Profile "),o(),n(18,"button",13),d(19,"i",14),a(20,"Settings "),o()()()(),n(21,"div",15)(22,"div",16)(23,"ul",17)(24,"li",18),d(25,"i",19),n(26,"p",20),a(27,"Account Status: "),n(28,"span",21),a(29),o()()(),n(30,"li",18),d(31,"i",22),n(32,"p",20),a(33),q(34,"formatDate"),o()(),n(35,"li",18),d(36,"i",23),n(37,"p",20),a(38),q(39,"formatDate"),o()()()()()(),n(40,"div",24)(41,"div",25)(42,"div",26)(43,"div",2)(44,"div",27)(45,"p",28),a(46,"User ID"),o()(),n(47,"div",29)(48,"p",30),a(49),o()()(),d(50,"hr"),n(51,"div",2)(52,"div",27)(53,"p",28),a(54,"Full Name"),o()(),n(55,"div",29),g(56,De,2,1,"p",31)(57,Ye,1,1,"input",32),o()(),d(58,"hr"),n(59,"div",2)(60,"div",27)(61,"p",28),a(62,"Email"),o()(),n(63,"div",29),g(64,Ae,2,1,"p",31)(65,We,1,1,"input",33),o()(),d(66,"hr"),n(67,"div",2)(68,"div",27)(69,"p",28),a(70,"Phone"),o()(),n(71,"div",29),g(72,qe,2,1,"p",31)(73,Be,1,1,"input",34),o()(),d(74,"hr"),n(75,"div",2)(76,"div",27)(77,"p",28),a(78,"Country"),o()(),n(79,"div",29),g(80,Ge,2,1,"p",31)(81,Ue,1,1,"input",32),o()(),d(82,"hr"),n(83,"div",2)(84,"div",27)(85,"p",28),a(86,"Role"),o()(),n(87,"div",29)(88,"p",30)(89,"span",35),a(90),o()()()(),g(91,He,5,0,"div",36),o()(),n(92,"div",2)(93,"div",37)(94,"div",38)(95,"div",26)(96,"h5",39),a(97,"Account Statistics"),o(),n(98,"p",40),a(99,"Profile Completion"),o(),n(100,"div",41),d(101,"div",42),o(),n(102,"p",40),a(103,"Security Level"),o(),n(104,"div",41),d(105,"div",43),o(),n(106,"p",40),a(107,"Activity Status"),o(),n(108,"div",44),d(109,"div",45),o()()()(),n(110,"div",37)(111,"div",46)(112,"div",26)(113,"h5",39),a(114,"Quick Actions"),o(),n(115,"div",47)(116,"button",48),d(117,"i",49),a(118,"Change Password "),o(),n(119,"button",50),d(120,"i",51),a(121,"Notification Settings "),o(),n(122,"button",52),_("click",function(){return t.logOut()}),d(123,"i",53),a(124,"Logout "),o()()()()()()()()()()),s&2&&(r(4),c("@cardAnimation",void 0),r(2),c("ngIf",!t.loading),r(),c("ngIf",t.loading),r(2),C(t.user.userName),r(2),C(t.user.role),r(2),C(t.user.country),r(8),c("@fadeIn",void 0),r(7),c("ngClass",t.user.verified?"bg-success":"bg-danger"),r(),k(" ",t.user.verified?"Verified":"Unverified"," "),r(4),k("Member since: ",B(34,26,t.user.createdAt),""),r(5),k("Last updated: ",B(39,28,t.user.updatedAt),""),r(3),c("@fadeIn",void 0),r(8),C(t.user._id),r(7),c("ngIf",!t.isEditing),r(),c("ngIf",t.isEditing),r(7),c("ngIf",!t.isEditing),r(),c("ngIf",t.isEditing),r(7),c("ngIf",!t.isEditing),r(),c("ngIf",t.isEditing),r(7),c("ngIf",!t.isEditing),r(),c("ngIf",t.isEditing),r(9),C(t.user.role),r(),c("ngIf",t.isEditing),r(3),c("@fadeIn",void 0),r(17),c("@fadeIn",void 0),r(5),c("routerLink",V(30,Ne)))},dependencies:[Y,E,ee,I,T,W,ge],styles:[".profile-container[_ngcontent-%COMP%]{background-color:#f8f9fa;min-height:100vh;padding:20px 0}.profile-card[_ngcontent-%COMP%], .info-card[_ngcontent-%COMP%], .activity-card[_ngcontent-%COMP%], .stats-card[_ngcontent-%COMP%], .actions-card[_ngcontent-%COMP%]{border-radius:15px;box-shadow:0 4px 20px #0000001a;border:none;transition:transform .3s ease,box-shadow .3s ease;overflow:hidden}.profile-card[_ngcontent-%COMP%]:hover, .info-card[_ngcontent-%COMP%]:hover, .activity-card[_ngcontent-%COMP%]:hover, .stats-card[_ngcontent-%COMP%]:hover, .actions-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 10px 30px #00000026}.profile-image-container[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;margin:0 auto}.profile-image[_ngcontent-%COMP%]{width:150px;height:150px;object-fit:cover;border-radius:50%;border:5px solid #fff;box-shadow:0 5px 15px #0003;transition:transform .5s ease}.profile-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.profile-status[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:10px;width:30px;height:30px;border-radius:50%;background-color:#dc3545;display:flex;align-items:center;justify-content:center;color:#fff;border:2px solid white}.profile-status.verified[_ngcontent-%COMP%]{background-color:#28a745}.field-label[_ngcontent-%COMP%]{font-weight:600;color:#495057}.field-value[_ngcontent-%COMP%]{font-size:1rem;transition:all .3s ease}.field-value[_ngcontent-%COMP%]:hover{color:#007bff}.role-badge[_ngcontent-%COMP%]{background-color:#6f42c1;font-size:.9rem;padding:.5em 1em;border-radius:20px}.progress-bar[_ngcontent-%COMP%]{background-color:#007bff;transition:width 1.5s ease-in-out}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transition:all .3s ease;border-radius:10px;font-weight:500}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:translate(5px)}.list-group-item[_ngcontent-%COMP%]{transition:background-color .3s ease}.list-group-item[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.list-group-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.list-group-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(1.2)}@media (max-width: 767.98px){.profile-image-container[_ngcontent-%COMP%], .profile-image[_ngcontent-%COMP%]{width:120px;height:120px}.field-label[_ngcontent-%COMP%], .field-value[_ngcontent-%COMP%]{font-size:.9rem}.card-body[_ngcontent-%COMP%]{padding:1rem}}@media (max-width: 575.98px){.profile-container[_ngcontent-%COMP%]{padding:10px 0}.profile-image-container[_ngcontent-%COMP%], .profile-image[_ngcontent-%COMP%]{width:100px;height:100px}.profile-status[_ngcontent-%COMP%]{width:25px;height:25px;bottom:5px;right:5px}h2[_ngcontent-%COMP%]{font-size:1.5rem}.field-label[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.row[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin:.5rem 0}}input.form-control[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInForm .5s ease}@keyframes _ngcontent-%COMP%_fadeInForm{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_progressAnimation 2s ease-in-out}@keyframes _ngcontent-%COMP%_progressAnimation{0%{width:0%}}"]})}}return e})();var Qe=()=>[1,2,3,4,5],Ze=e=>({"text-warning":e});function Je(e,p){if(e&1){let i=h();n(0,"i",23),_("click",function(){let t=f(i).$implicit,l=m(2);return u(l.setRating(t))})("mouseenter",function(){let t=f(i).$implicit,l=m(2);return u(l.hoverRating=t)})("mouseleave",function(){f(i);let t=m(2);return u(t.hoverRating=0)}),o()}if(e&2){let i=p.$implicit,s=m(2);S(i<=s.rating?"fas":"far"),P("hovered",i<=s.hoverRating)("selected",i<=s.rating)}}function Ke(e,p){e&1&&(n(0,"div",24),a(1," Please provide your feedback "),o())}function Xe(e,p){if(e&1){let i=h();n(0,"div",8)(1,"div",9)(2,"h5",10),a(3,"How would you rate your experience?"),o(),n(4,"div",11),g(5,Je,1,6,"i",12),o(),n(6,"small",13),a(7),o()(),n(8,"div",14)(9,"label",15),d(10,"i",16),a(11," Share your thoughts with us: "),o(),n(12,"textarea",17),v("ngModelChange",function(t){f(i);let l=m();return x(l.feedback,t)||(l.feedback=t),u(t)}),a(13,"            "),o(),g(14,Ke,2,0,"div",18),n(15,"small",19),d(16,"i",20),a(17," Minimum 10 characters required "),o()(),n(18,"button",21),_("click",function(){f(i);let t=m();return u(t.submitFeedback())}),d(19,"i",22),a(20," Submit Feedback "),o()()}if(e&2){let i=m();r(5),c("ngForOf",V(8,Qe)),r(),c("ngClass",D(9,Ze,i.rating>0)),r(),k(" ",i.getRatingText()," "),r(5),P("is-invalid",i.showError&&!i.feedback.trim()),b("ngModel",i.feedback),r(2),c("ngIf",i.showError&&!i.feedback.trim()),r(4),c("disabled",!i.isValidForm())}}function $e(e,p){if(e&1){let i=h();n(0,"div",25),d(1,"i",26),n(2,"h3"),a(3,"Thank You!"),o(),n(4,"p",27),a(5,"Your feedback helps us improve our services."),o(),n(6,"button",28),_("click",function(){f(i);let t=m();return u(t.resetForm())}),d(7,"i",29),a(8," Submit Another Feedback "),o()()}}var we=(()=>{class e{constructor(){this.rating=0,this.hoverRating=0,this.feedback="",this.submitted=!1,this.showError=!1}getRatingText(){return["Select your rating","Poor","Fair","Good","Very Good","Excellent"][this.rating]}setRating(i){this.rating=i,this.showError=!1}isValidForm(){return this.rating>0&&this.feedback.trim().length>=10}submitFeedback(){this.showError=!0,this.isValidForm()&&(this.submitted=!0)}resetForm(){this.rating=0,this.hoverRating=0,this.feedback="",this.submitted=!1,this.showError=!1}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=y({type:e,selectors:[["app-feadback"]],decls:9,vars:4,consts:[[1,"feedback-container"],[1,"card","feedback-card"],[1,"card-header","text-center","py-4"],[1,"mb-0"],[1,"fas","fa-comments","me-2"],[1,"card-body"],["class","feedback-form fade-in",4,"ngIf"],["class","thank-you-message text-center fade-in",4,"ngIf"],[1,"feedback-form","fade-in"],[1,"rating-container","text-center","mb-4"],[1,"mb-3"],[1,"stars"],["class","fa-star",3,"class","hovered","selected","click","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"rating-text","mt-2","d-block",3,"ngClass"],[1,"form-group","mb-4"],["for","feedbackText",1,"form-label","d-flex","align-items-center"],[1,"fas","fa-pencil-alt","me-2"],["id","feedbackText","rows","4","placeholder","Your feedback helps us improve...",1,"form-control",3,"ngModelChange","ngModel"],["class","invalid-feedback",4,"ngIf"],[1,"text-muted","mt-2","d-block"],[1,"fas","fa-info-circle","me-1"],[1,"btn","btn-primary","w-100","submit-btn",3,"click","disabled"],[1,"fas","fa-paper-plane","me-2"],[1,"fa-star",3,"click","mouseenter","mouseleave"],[1,"invalid-feedback"],[1,"thank-you-message","text-center","fade-in"],[1,"fas","fa-check-circle","success-icon","mb-4"],[1,"mb-4"],[1,"btn","btn-outline-primary",3,"click"],[1,"fas","fa-redo","me-2"]],template:function(s,t){s&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),d(4,"i",4),a(5," Your Feedback Matters "),o()(),n(6,"div",5),g(7,Xe,21,11,"div",6)(8,$e,9,0,"div",7),o()()()),s&2&&(r(),P("submitted",t.submitted),r(6),c("ngIf",!t.submitted),r(),c("ngIf",t.submitted))},dependencies:[Y,J,E,I,T,W],styles:[".feedback-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;background-color:#f8f9fa}.feedback-card[_ngcontent-%COMP%]{max-width:600px;width:100%;border:none;box-shadow:0 8px 30px #0000001f;border-radius:40px;overflow:hidden;transform:translateY(0);transition:all .3s ease;padding:40px 20px}.feedback-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 12px 40px #00000026}.feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--main-color),#0056b3);border:none;color:var(--primary-color)}.feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600}@media (max-width: 768px){.feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}}.rating-container[_ngcontent-%COMP%]{padding:20px 0}.rating-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#495057;font-weight:500}.stars[_ngcontent-%COMP%]{font-size:2.5rem;color:#dee2e6;cursor:pointer;display:flex;justify-content:center;gap:10px}@media (max-width: 768px){.stars[_ngcontent-%COMP%]{font-size:2rem;gap:8px}}@media (max-width: 480px){.stars[_ngcontent-%COMP%]{font-size:1.75rem;gap:6px}}.fa-star[_ngcontent-%COMP%]{transition:all .3s ease}.fa-star.fas[_ngcontent-%COMP%]{color:gold}.fa-star.hovered[_ngcontent-%COMP%]{color:gold;transform:scale(1.1)}.fa-star.selected[_ngcontent-%COMP%]{color:gold;animation:_ngcontent-%COMP%_starPulse .3s ease}.fa-star[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.rating-text[_ngcontent-%COMP%]{font-size:.9rem;color:#6c757d;transition:color .3s ease}.rating-text.text-warning[_ngcontent-%COMP%]{color:#ffc107!important}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#495057;font-weight:500;margin-bottom:.5rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main-color)}.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;border:2px solid #dee2e6;border-radius:10px;padding:15px;font-size:1rem;transition:all .3s ease}.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:var(--main-color);box-shadow:0 0 0 .2rem rgba(var(--main-color-rgb),.25)}.form-group[_ngcontent-%COMP%]   textarea.is-invalid[_ngcontent-%COMP%]{border-color:#dc3545}.form-group[_ngcontent-%COMP%]   textarea.is-invalid[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem #dc354540}.submit-btn[_ngcontent-%COMP%]{padding:12px;font-weight:500;font-size:1.1rem;border-radius:10px;background:var(--main-color);border:none;transition:all .3s ease}.submit-btn[_ngcontent-%COMP%]:not(:disabled){background-color:var(--primary-color)}.submit-btn[_ngcontent-%COMP%]:not(:disabled):hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(var(--main-color-rgb),.3)}.submit-btn[_ngcontent-%COMP%]:disabled{background:#6c757d;cursor:not-allowed}.success-icon[_ngcontent-%COMP%]{font-size:5rem;color:#28a745;animation:_ngcontent-%COMP%_successIconEntrance .5s ease}@media (max-width: 768px){.success-icon[_ngcontent-%COMP%]{font-size:4rem}}@media (max-width: 480px){.success-icon[_ngcontent-%COMP%]{font-size:3.5rem}}.thank-you-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#28a745;font-weight:600}.thank-you-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6c757d}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease}@keyframes _ngcontent-%COMP%_starPulse{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}@keyframes _ngcontent-%COMP%_successIconEntrance{0%{opacity:0;transform:scale(.3) rotate(-45deg)}to{opacity:1;transform:scale(1) rotate(0)}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 768px){.feedback-container[_ngcontent-%COMP%]{padding:15px}.feedback-card[_ngcontent-%COMP%]{margin:10px}.card-body[_ngcontent-%COMP%]{padding:20px}}@media (max-width: 480px){.feedback-container[_ngcontent-%COMP%]{padding:10px}.card-body[_ngcontent-%COMP%]{padding:15px}h2[_ngcontent-%COMP%]{font-size:1.25rem}.rating-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}.submit-btn[_ngcontent-%COMP%]{font-size:1rem;padding:10px}}"]})}}return e})();var et=[{path:"",redirectTo:"change-pass",pathMatch:"full"},{path:"change-pass",component:Ce,title:"Change Password"},{path:"profile",component:Pe,title:"Profile"},{path:"feadback",component:we,title:"FeadBack"},{path:"**",component:te}],be=(()=>{class e{static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=L({imports:[G.forChild(et),G]})}}return e})();var St=(()=>{class e{static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275mod=R({type:e})}static{this.\u0275inj=L({imports:[K,be,fe,ce,se]})}}return e})();export{St as SettingModule};
