(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\Trabajo\CLARO\CLARO DC\Automatizaciones\Portales Web\extra-hours\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FJ1F":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/form-hours/form-hours.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormHoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHoursComponent", function() { return FormHoursComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_request_request_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/request/request-http.service */ "Gont");
/* harmony import */ var src_app_services_messages_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/messages/alert.service */ "f27N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function FormHoursComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const hour_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", hour_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](hour_r6);
} }
function FormHoursComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const minute_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", minute_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](minute_r7);
} }
function FormHoursComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormHoursComponent_ng_container_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " A\u00F1adir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} }
function FormHoursComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormHoursComponent_ng_template_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r10.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class FormHoursComponent {
    constructor(formBuilder, http, message, route, RouterNavigate) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.message = message;
        this.route = route;
        this.RouterNavigate = RouterNavigate;
        this.hours = [];
        this.minutes = [];
        let id = this.route.snapshot.params.id;
        this.createForms();
        this.setHours();
        this.setMinutes();
        if (id != undefined) {
            this.loadData(id);
            this.disabledTabs = false;
        }
        else {
            this.forms.reset();
            this.disabledTabs = true;
        }
    }
    ngOnInit() {
    }
    /**
     * Se setea valores en el formulario de acuerdo con el ID enviado
     * @param id
     */
    loadData(id) {
        //this.message.infoLoading('Recolectando informacion... Espere por favor.');
        this.http.getDataURL(`hours/${id}/`).subscribe((data) => {
            let hour = data['hour']['initial_date'].split('T')[1].split(':')[0];
            let minute = data['hour']['initial_date'].split('T')[1].split(':')[1];
            this.forms.setValue({
                cod_user: data['hour']['cod_emp'],
                name_user: data['hour']['name_user'],
                number_case: data['hour']['number_case'],
                initial_date: data['hour']['initial_date'],
                initial_hour: hour,
                initial_minute: minute,
            });
            //this.message.closeLoading();
        }, err => {
            this.message.errorMessage(`Error: ${err.message}`);
        });
    }
    setHours() {
        for (let index = 0; index < 24; index++) {
            let value = (index + 1) < 10 ? `0${index + 1}` : (index + 1);
            this.hours.push(value);
        }
    }
    setMinutes() {
        for (let indexMinutes = 0; indexMinutes < 60; indexMinutes++) {
            let value = (indexMinutes + 1) < 10 ? `0${indexMinutes + 1}` : (indexMinutes + 1);
            this.minutes.push(value);
        }
    }
    createForms() {
        this.forms = this.formBuilder.group({
            cod_user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            name_user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
            number_case: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            initial_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            initial_hour: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            initial_minute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    /**
     * Funcion para Cancelar el proceso
     */
    cancel() {
        this.RouterNavigate.navigate(['extraHours']);
    }
    /**
     * A??adir
     */
    add() {
        if (this.forms.invalid) {
            return Object.values(this.forms.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            let dateInit = new Date(this.forms.value.initial_date);
            let month = (dateInit.getMonth() + 1) < 10 ? `0${dateInit.getMonth() + 1}` : dateInit.getMonth();
            let day = (dateInit.getUTCDate() + 1) < 10 ? `0${dateInit.getUTCDate() + 1}` : dateInit.getUTCDate();
            const authData = {
                cod_emp: this.forms.value.cod_user,
                name_user: this.forms.value.name_user,
                number_case: this.forms.value.number_case,
                initial_date: `${dateInit.getFullYear()}-${month}-${day}T${this.forms.value.initial_hour}:${this.forms.value.initial_minute}:00.0Z`,
            };
            this.message.infoLoading(`Agregando Registro ${authData.number_case}.`);
            this.http.postDataURL('hours/', authData).subscribe(resp => {
                this.RouterNavigate.navigate(['extraHours', 'forms', resp['hour']['_id']]);
                this.message.mixinSuccesMessage(`Registro ${authData.number_case} agregado.`);
            }, err => {
                console.error(err);
                this.message.errorMessage(err.message);
            });
        }
    }
    /**
     * Editar
     */
    edit() {
        let id = this.route.snapshot.params.id;
        if (this.forms.invalid) {
            return Object.values(this.forms.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            let dateInit = new Date(this.forms.value.initial_date);
            let month = (dateInit.getMonth() + 1) < 10 ? `0${dateInit.getMonth() + 1}` : dateInit.getMonth();
            let day = (dateInit.getUTCDate() + 1) < 10 ? `0${dateInit.getUTCDate() + 1}` : dateInit.getUTCDate();
            const authData = {
                cod_emp: this.forms.value.cod_user,
                name_user: this.forms.value.name_user,
                number_case: this.forms.value.number_case,
                initial_date: `${dateInit.getFullYear()}-${month}-${day}T${this.forms.value.initial_hour}:${this.forms.value.initial_minute}:00.0Z`,
            };
            this.message.infoLoading(`Agregando Registro ${authData.number_case}.`);
            this.http.putDataURL(`hours/${id}/`, authData).subscribe(resp => {
                this.RouterNavigate.navigate(['extraHours', 'forms', id]);
                this.message.mixinSuccesMessage(`Registro ${authData.number_case} editado.`);
            }, err => {
                console.error(err);
                this.message.errorMessage(err.message);
            });
        }
    }
}
FormHoursComponent.??fac = function FormHoursComponent_Factory(t) { return new (t || FormHoursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_request_request_http_service__WEBPACK_IMPORTED_MODULE_2__["RequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_messages_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FormHoursComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FormHoursComponent, selectors: [["app-form-hours"]], decls: 41, vars: 7, consts: [[1, "card-body", 3, "formGroup"], [1, "mat-form-field-custom"], ["matInput", "", "formControlName", "cod_user", "required", "", 1, "form-control", "forms"], ["matInput", "", "formControlName", "name_user", "required", "", 1, "form-control", "forms"], ["matInput", "", "formControlName", "number_case", "required", "", 1, "form-control", "forms"], [1, "mat-form-field-custom-three-fields"], ["matInput", "", "formControlName", "initial_date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""], ["matNativeControl", "", "formControlName", "initial_hour", "required", ""], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "formControlName", "initial_minute", "required", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseButton", ""], [3, "value"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-success", 3, "click"]], template: function FormHoursComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Codigo de Empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Nombre de Empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Numero de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Fecha Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, FormHoursComponent_mat_option_28_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Minuto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, FormHoursComponent_mat_option_34_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormHoursComponent_Template_button_click_36_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, FormHoursComponent_ng_container_38_Template, 3, 0, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, FormHoursComponent_ng_template_39_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](22);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.forms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.disabledTabs)("ngIfElse", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: [".card-body[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 45px;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #007bff !important;\n  color: #fff;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.7) !important;\n}\n\nmat-form-field[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(233, 236, 239, 0.3) !important;\n  cursor: not-allowed !important;\n}\n\nmat-form-field[_ngcontent-%COMP%]   .icon-input[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 95%;\n  top: 50%;\n}\n\n.forms[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.mat-form-field-custom[_ngcontent-%COMP%] {\n  width: 77%;\n  padding-right: 10px !important;\n}\n\n.mat-form-field-custom-button[_ngcontent-%COMP%] {\n  width: 42%;\n  padding-right: 10px !important;\n}\n\n.mat-form-field-custom-three-fields[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-right: 10px !important;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 5px !important;\n  margin-right: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9ybS1ob3Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUFFO0VBQ0UsNERBQUE7QUFFSjs7QUFESTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7QUFHTjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FBRUo7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQUNGIiwiZmlsZSI6ImZvcm0taG91cnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgLmZvcm0tY29udHJvbDpkaXNhYmxlZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjM2LCAyMzksIDAuMykgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbi1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5NSU7XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtcyB7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtY3VzdG9te1xyXG4gIHdpZHRoOiA3NyU7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtY3VzdG9tLWJ1dHRvbntcclxuICB3aWR0aDogNDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWN1c3RvbS10aHJlZS1maWVsZHN7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Gont":
/*!**********************************************************!*\
  !*** ./src/app/services/request/request-http.service.ts ***!
  \**********************************************************/
/*! exports provided: RequestHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHttpService", function() { return RequestHttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
// Headers para los encabezados y HTTP para hacer las peticiones



class RequestHttpService {
    constructor(HTTP) {
        this.HTTP = HTTP;
        this.URL = `http://${window.location.hostname}:8081/api/`;
    }
    saveTokenId(idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
    }
    isAuthenticateUser() {
        return this.userToken.length > 2;
    }
    readToken() {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
    }
    saveDataLocalStorage(nameItem, valueItem) {
        localStorage.setItem(nameItem, valueItem);
    }
    saveDataSessionStorage(nameItem, valueItem) {
        sessionStorage.setItem(nameItem, valueItem);
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('username_id');
        localStorage.removeItem('id_su');
        localStorage.removeItem('data_pmn');
    }
    /**
     * Peticion GET
     * @param URLContext
     * @param sendData
     */
    getDataURL(URLContext, sendData) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        });
        return this.HTTP.get(`${this.URL}${URLContext}`, { headers: Header, params: sendData });
    }
    /**
     * Metodo de Envio de Datos
     * @param URLContext
     * @param DataSend
     */
    login(URLContext, DataSend) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.HTTP.post(`${this.URL}${URLContext}`, DataSend, { headers: Header });
    }
    /**
     * Metodo de Envio de Datos
     * @param URLContext
     * @param DataSend
     */
    postDataURL(URLContext, DataSend) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        });
        return this.HTTP.post(`${this.URL}${URLContext}`, DataSend, { headers: Header });
    }
    /**
     * Metodo de Envio de Datos
     * @param URLContext
     * @param DataSend
     */
    postDataURLGetFile(URLContext, DataSend) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': `${localStorage.getItem('token')}`
        });
        return this.HTTP.post(`${this.URL}${URLContext}`, DataSend, { headers: Header, responseType: 'blob' });
    }
    /**
     * Metodo de Envio de Datos
     * @param URLContext
     * @param DataSend
     */
    postFileURL(URLContext, DataSend) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': `${localStorage.getItem('token')}`
        });
        return this.HTTP.post(`${this.URL}${URLContext}`, DataSend, { headers: Header });
    }
    /**
     * Metodo de Eliminacion
     * @param URLContext
     */
    deleteDataURL(URLContext) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        });
        return this.HTTP.delete(`${this.URL}${URLContext}`, { headers: Header });
    }
    /**
     *
     * @param URLContext
     * @param DataSend
     */
    putDataURL(URLContext, DataSend) {
        let Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        });
        return this.HTTP.put(`${this.URL}${URLContext}`, DataSend, { headers: Header });
    }
}
RequestHttpService.??fac = function RequestHttpService_Factory(t) { return new (t || RequestHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RequestHttpService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RequestHttpService, factory: RequestHttpService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'extra-hours';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_extra_hours_extra_hours_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/extra-hours/extra-hours.component */ "q6H8");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_forms_form_hours_form_hours_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/forms/form-hours/form-hours.component */ "FJ1F");
/* harmony import */ var _components_extra_hours_approval_extra_hours_approval_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/extra-hours-approval/extra-hours-approval.component */ "tLfi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");



// Componentes Angular Material



























class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // Angular Material
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
        _components_extra_hours_extra_hours_component__WEBPACK_IMPORTED_MODULE_25__["ExtraHoursComponent"],
        _components_forms_form_hours_form_hours_component__WEBPACK_IMPORTED_MODULE_27__["FormHoursComponent"],
        _components_extra_hours_approval_extra_hours_approval_component__WEBPACK_IMPORTED_MODULE_28__["ExtraHoursApprovalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // Angular Material
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]] }); })();


/***/ }),

/***/ "f27N":
/*!****************************************************!*\
  !*** ./src/app/services/messages/alert.service.ts ***!
  \****************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
// Modulo de Mensajes de Alerta


class AlertService {
    constructor() { }
    infoLoading(Message) {
        // sweetalert2 para mensaje de alertas 
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
            allowOutsideClick: false,
            text: Message,
            icon: 'info',
        });
        // Efecto de Cargando
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
    }
    errorMessage(Message) {
        // sweetalert2 para mensaje de alertas 
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
            title: 'Error de Recoleccion de Datos',
            text: Message,
            icon: 'error',
        });
    }
    successMessage(Message) {
        // sweetalert2 para mensaje de alertas 
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
            title: 'Accion Exitosa',
            text: Message,
            icon: 'success',
        });
    }
    closeLoading() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
    }
    mixinSuccesMessage(Message) {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: Message
        });
    }
    mixinInfoMessage(Message) {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'info',
            title: Message
        });
    }
    mixinErrorMessage(Message) {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'error',
            title: Message
        });
    }
}
AlertService.??fac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AlertService, factory: AlertService.??fac, providedIn: 'root' });


/***/ }),

/***/ "q6H8":
/*!*****************************************************************!*\
  !*** ./src/app/components/extra-hours/extra-hours.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExtraHoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraHoursComponent", function() { return ExtraHoursComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_request_request_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request/request-http.service */ "Gont");
/* harmony import */ var src_app_services_messages_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messages/alert.service */ "f27N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function ExtraHoursComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r18.number, " ");
} }
function ExtraHoursComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Codigo de Empleado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r19.cod_user, " ");
} }
function ExtraHoursComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Nombre de Empleado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r20.name_user, " ");
} }
function ExtraHoursComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Numero de Caso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r21.number_case, " ");
} }
function ExtraHoursComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Fecha Inicial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](2, 1, element_r22.initial_date, "dd-MM-yyyy hh:mm:ss"), " ");
} }
function ExtraHoursComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Aprobacion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", element_r23.approval);
} }
function ExtraHoursComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
const _c0 = function (a2) { return ["/extraHours", "forms", a2]; };
function ExtraHoursComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](1, _c0, element_r24.id));
} }
function ExtraHoursComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 19);
} }
function ExtraHoursComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 20);
} }
class ExtraHoursComponent {
    constructor(http, message, RouterNavigate) {
        this.http = http;
        this.message = message;
        this.RouterNavigate = RouterNavigate;
        this.displayedColumns = ['number', 'cod_user', 'name_user', 'number_case', 'initial_date', 'approval', 'Edit', 'Delete'];
    }
    ngOnInit() {
        this.listHours();
    }
    add() {
        this.RouterNavigate.navigate(['extraHours', 'forms']);
    }
    /**
     * Metodo para Listar Horas
     */
    listHours(showMessage = true) {
        if (showMessage) {
            this.message.infoLoading('Recolectando informacion... Espere por favor.');
        }
        this.http.getDataURL('hours').subscribe((data) => {
            this.dataList = [];
            let contador = 0;
            console.log(data);
            Object.values(data.hours).forEach((controlData) => {
                contador += 1;
                this.dataList.push({
                    number: contador,
                    id: controlData._id,
                    cod_user: controlData.cod_emp,
                    name_user: controlData.name_user,
                    number_case: controlData.number_case,
                    initial_date: controlData.initial_date,
                    approval: controlData.approval,
                    Delete: controlData.id,
                    Edit: controlData.id
                });
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            if (showMessage) {
                this.message.closeLoading();
            }
        }, err => {
            this.message.errorMessage(`Error: ${err.message}`);
        });
    }
}
ExtraHoursComponent.??fac = function ExtraHoursComponent_Factory(t) { return new (t || ExtraHoursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_request_request_http_service__WEBPACK_IMPORTED_MODULE_4__["RequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_messages_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ExtraHoursComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ExtraHoursComponent, selectors: [["app-extra-hours"]], viewQuery: function ExtraHoursComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 29, vars: 3, consts: [["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-success", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cod_user"], ["matColumnDef", "name_user"], ["matColumnDef", "number_case"], ["matColumnDef", "initial_date"], ["matColumnDef", "approval"], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["disabled", "", 1, "disabled", 3, "checked"], [3, "routerLink"], ["aria-hidden", "false"], ["mat-header-row", ""], ["mat-row", ""]], template: function ExtraHoursComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ExtraHoursComponent_Template_button_click_0_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " A\u00F1adir Registro\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, ExtraHoursComponent_th_4_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, ExtraHoursComponent_td_5_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, ExtraHoursComponent_th_7_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, ExtraHoursComponent_td_8_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, ExtraHoursComponent_th_10_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](11, ExtraHoursComponent_td_11_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, ExtraHoursComponent_th_13_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, ExtraHoursComponent_td_14_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, ExtraHoursComponent_th_16_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, ExtraHoursComponent_td_17_Template, 3, 4, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, ExtraHoursComponent_th_19_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, ExtraHoursComponent_td_20_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, ExtraHoursComponent_th_22_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, ExtraHoursComponent_td_23_Template, 4, 3, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](24, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, ExtraHoursComponent_th_25_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, ExtraHoursComponent_td_26_Template, 4, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, ExtraHoursComponent_tr_27_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, ExtraHoursComponent_tr_28_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 45px;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  margin-left: 15px;\n  background-color: #007bff !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHRyYS1ob3Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiZXh0cmEtaG91cnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "tLfi":
/*!***********************************************************************************!*\
  !*** ./src/app/components/extra-hours-approval/extra-hours-approval.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExtraHoursApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraHoursApprovalComponent", function() { return ExtraHoursApprovalComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_request_request_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request/request-http.service */ "Gont");
/* harmony import */ var src_app_services_messages_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messages/alert.service */ "f27N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function ExtraHoursApprovalComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r18.number, " ");
} }
function ExtraHoursApprovalComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Codigo de Empleado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r19.cod_user, " ");
} }
function ExtraHoursApprovalComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Nombre de Empleado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r20.name_user, " ");
} }
function ExtraHoursApprovalComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Numero de Caso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r21.number_case, " ");
} }
function ExtraHoursApprovalComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Fecha Inicial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](2, 1, element_r22.initial_date, "dd-MM-yyyy hh:mm:ss"), " ");
} }
function ExtraHoursApprovalComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Aprobacion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", element_r23.approval);
} }
function ExtraHoursApprovalComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
const _c0 = function (a2) { return ["/extraHours", "forms", a2]; };
function ExtraHoursApprovalComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](1, _c0, element_r24.id));
} }
function ExtraHoursApprovalComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ExtraHoursApprovalComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 19);
} }
function ExtraHoursApprovalComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 20);
} }
class ExtraHoursApprovalComponent {
    constructor(http, message, RouterNavigate) {
        this.http = http;
        this.message = message;
        this.RouterNavigate = RouterNavigate;
        this.displayedColumns = ['number', 'cod_user', 'name_user', 'number_case', 'initial_date', 'approval', 'Edit', 'Delete'];
    }
    ngOnInit() {
        this.listHours();
    }
    add() {
        this.RouterNavigate.navigate(['extraHours', 'forms']);
    }
    /**
     * Metodo para Listar Horas
     */
    listHours(showMessage = true) {
        if (showMessage) {
            this.message.infoLoading('Recolectando informacion... Espere por favor.');
        }
        this.http.getDataURL('hours').subscribe((data) => {
            this.dataList = [];
            let contador = 0;
            console.log(data);
            Object.values(data.hours).forEach((controlData) => {
                contador += 1;
                this.dataList.push({
                    number: contador,
                    id: controlData._id,
                    cod_user: controlData.cod_emp,
                    name_user: controlData.name_user,
                    number_case: controlData.number_case,
                    initial_date: controlData.initial_date,
                    approval: controlData.approval,
                    Delete: controlData.id,
                    Edit: controlData.id
                });
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            if (showMessage) {
                this.message.closeLoading();
            }
        }, err => {
            this.message.errorMessage(`Error: ${err.message}`);
        });
    }
}
ExtraHoursApprovalComponent.??fac = function ExtraHoursApprovalComponent_Factory(t) { return new (t || ExtraHoursApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_request_request_http_service__WEBPACK_IMPORTED_MODULE_4__["RequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_messages_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ExtraHoursApprovalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ExtraHoursApprovalComponent, selectors: [["app-extra-hours-approval"]], viewQuery: function ExtraHoursApprovalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 29, vars: 3, consts: [["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-success", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cod_user"], ["matColumnDef", "name_user"], ["matColumnDef", "number_case"], ["matColumnDef", "initial_date"], ["matColumnDef", "approval"], ["matColumnDef", "Edit"], ["matColumnDef", "Delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "checked"], [3, "routerLink"], ["aria-hidden", "false"], ["mat-header-row", ""], ["mat-row", ""]], template: function ExtraHoursApprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ExtraHoursApprovalComponent_Template_button_click_0_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " A\u00F1adir Registro\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, ExtraHoursApprovalComponent_th_4_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, ExtraHoursApprovalComponent_td_5_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, ExtraHoursApprovalComponent_th_7_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, ExtraHoursApprovalComponent_td_8_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, ExtraHoursApprovalComponent_th_10_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](11, ExtraHoursApprovalComponent_td_11_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, ExtraHoursApprovalComponent_th_13_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, ExtraHoursApprovalComponent_td_14_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, ExtraHoursApprovalComponent_th_16_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, ExtraHoursApprovalComponent_td_17_Template, 3, 4, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, ExtraHoursApprovalComponent_th_19_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, ExtraHoursApprovalComponent_td_20_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, ExtraHoursApprovalComponent_th_22_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, ExtraHoursApprovalComponent_td_23_Template, 4, 3, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](24, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, ExtraHoursApprovalComponent_th_25_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, ExtraHoursApprovalComponent_td_26_Template, 4, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, ExtraHoursApprovalComponent_tr_27_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, ExtraHoursApprovalComponent_tr_28_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 45px;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  margin-left: 15px;\n  background-color: #007bff !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHRyYS1ob3Vycy1hcHByb3ZhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiZXh0cmEtaG91cnMtYXBwcm92YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_extra_hours_approval_extra_hours_approval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/extra-hours-approval/extra-hours-approval.component */ "tLfi");
/* harmony import */ var _components_extra_hours_extra_hours_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/extra-hours/extra-hours.component */ "q6H8");
/* harmony import */ var _components_forms_form_hours_form_hours_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/form-hours/form-hours.component */ "FJ1F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'extraHours', component: _components_extra_hours_extra_hours_component__WEBPACK_IMPORTED_MODULE_2__["ExtraHoursComponent"] },
    { path: 'extraHoursApproval', component: _components_extra_hours_approval_extra_hours_approval_component__WEBPACK_IMPORTED_MODULE_1__["ExtraHoursApprovalComponent"] },
    { path: 'extraHours/forms', component: _components_forms_form_hours_form_hours_component__WEBPACK_IMPORTED_MODULE_3__["FormHoursComponent"] },
    { path: 'extraHours/forms/:id', component: _components_forms_form_hours_form_hours_component__WEBPACK_IMPORTED_MODULE_3__["FormHoursComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map