(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ixpG:function(e,t,c){"use strict";c.r(t);var n=c("sEIs"),l=c("d2mR"),i=c("2kYt"),s=c("nIj0"),o=c("+Tre"),h=c("EM62");let a=(()=>{class e{}return e.\u0275mod=h.Pb({type:e}),e.\u0275inj=h.Ob({factory:function(t){return new(t||e)},imports:[[i.c,s.e,o.b]]}),e})();function r(e,t){if(1&e){const e=h.Yb();h.Xb(0,"mat-checkbox",3),h.fc("indeterminateChange",(function(t){return h.Ac(e),h.jc().selectAllIndeterminate=t}))("change",(function(t){return h.Ac(e),h.jc().updateAllChecked(t,-1)})),h.Kc(1),h.Wb()}if(2&e){const e=h.jc();h.pc("checked",e.selectAll)("indeterminate",e.selectAllIndeterminate),h.Db(1),h.Mc(" ",e.selectAllLabel," ")}}function d(e,t){if(1&e){const e=h.Yb();h.Xb(0,"mat-checkbox",4),h.fc("ngModelChange",(function(c){return h.Ac(e),t.$implicit.checked=c}))("change",(function(c){h.Ac(e);const n=t.index;return h.jc().updateSingleChecked(c,n)})),h.Kc(1),h.Wb()}if(2&e){const e=t.$implicit;h.pc("ngModel",e.checked)("disabled",e.disabled),h.Db(1),h.Mc(" ",e.label," ")}}let g=(()=>{class e{constructor(e){this._changeDetectorRef=e,this.selectAllLabel="Select All",this.showSelectAll=!0,this.change=new h.o,this.selectAll=!1,this.selectAllIndeterminate=!1,this.options=[],this.onChange=()=>null,this.onTouched=()=>null}ngOnInit(){}writeValue(e){this.options=e,this.options&&this.updateSingleChecked(),this._changeDetectorRef.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}updateSingleChecked(e,t){this.options.filter(e=>e.checked||!e.disabled).every(e=>!e.checked)?(this.selectAll=!1,this.selectAllIndeterminate=!1):this.options.filter(e=>e.checked||!e.disabled).every(e=>e.checked)?(this.selectAll=!0,this.selectAllIndeterminate=!1):this.selectAllIndeterminate=!0,this.change.emit({model:this.options,index:t})}updateAllChecked(e,t){this.selectAll=!this.selectAll,this.selectAllIndeterminate=!1,this.selectAll?this.options.filter(e=>e.checked||!e.disabled).forEach(e=>e.checked=!0):this.options.filter(e=>e.checked||!e.disabled).forEach(e=>e.checked=!!e.disabled),this.change.emit({model:this.options,index:t})}}return e.\u0275fac=function(t){return new(t||e)(h.Rb(h.h))},e.\u0275cmp=h.Lb({type:e,selectors:[["mtx-checkbox-group"]],inputs:{selectAllLabel:"selectAllLabel",showSelectAll:"showSelectAll"},outputs:{change:"change"},exportAs:["mtxCheckboxGroup"],features:[h.Cb([{provide:s.g,useExisting:Object(h.V)(()=>e),multi:!0}])],decls:3,vars:2,consts:[[1,"mtx-checkbox-group"],["class","mtx-checkbox-select-all",3,"checked","indeterminate","indeterminateChange","change",4,"ngIf"],["class","mtx-checkbox-single",3,"ngModel","disabled","ngModelChange","change",4,"ngFor","ngForOf"],[1,"mtx-checkbox-select-all",3,"checked","indeterminate","indeterminateChange","change"],[1,"mtx-checkbox-single",3,"ngModel","disabled","ngModelChange","change"]],template:function(e,t){1&e&&(h.Xb(0,"div",0),h.Ic(1,r,2,3,"mat-checkbox",1),h.Ic(2,d,2,3,"mat-checkbox",2),h.Wb()),2&e&&(h.Db(1),h.pc("ngIf",t.showSelectAll),h.Db(1),h.pc("ngForOf",t.options))},directives:[i.m,i.l,o.a,s.i,s.k],styles:[".mtx-checkbox-group .mat-checkbox{margin-right:16px}[dir=rtl] .mtx-checkbox-group .mat-checkbox{margin-right:auto;margin-left:16px}"],encapsulation:2,changeDetection:0}),e})(),u=(()=>{class e{constructor(){this.foods=[{value:"steak-0",label:"Steak",checked:!0},{value:"pizza-1",label:"Pizza",disabled:!0},{value:"tacos-2",label:"Tacos"}]}ngOnInit(){}changeOptions(e){console.log(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Lb({type:e,selectors:[["app-checkbox-group"]],decls:1,vars:1,consts:[[3,"ngModel","ngModelChange","change"]],template:function(e,t){1&e&&(h.Xb(0,"mtx-checkbox-group",0),h.fc("ngModelChange",(function(e){return t.foods=e}))("change",(function(e){return t.changeOptions(e)})),h.Wb()),2&e&&h.pc("ngModel",t.foods)},directives:[g,s.i,s.k],styles:[""]}),e})();c.d(t,"CheckboxGroupModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=h.Pb({type:e}),e.\u0275inj=h.Ob({factory:function(t){return new(t||e)},imports:[[l.a,n.h.forChild([{path:"",component:u}]),a]]}),e})()}}]);