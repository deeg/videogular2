"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var vg_dash_1 = require("./src/vg-dash/vg-dash");
var vg_hls_1 = require("./src/vg-hls/vg-hls");
var VgStreamingModule = (function () {
    function VgStreamingModule() {
    }
    VgStreamingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                vg_dash_1.VgDASH, vg_hls_1.VgHLS
            ],
            exports: [
                vg_dash_1.VgDASH, vg_hls_1.VgHLS
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VgStreamingModule);
    return VgStreamingModule;
}());
exports.VgStreamingModule = VgStreamingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0JBQXVCLHVCQUF1QixDQUFDLENBQUE7QUFDL0MsdUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFXNUM7SUFBQTtJQUFnQyxDQUFDO0lBVGpDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtZQUN6QixZQUFZLEVBQUU7Z0JBQ1YsZ0JBQU0sRUFBRSxjQUFLO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdCQUFNLEVBQUUsY0FBSzthQUNoQjtTQUNKLENBQUM7O3lCQUFBO0lBQzhCLHdCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQix5QkFBaUIsb0JBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWZ0RBU0ggfSBmcm9tIFwiLi9zcmMvdmctZGFzaC92Zy1kYXNoXCI7XG5pbXBvcnQgeyBWZ0hMUyB9IGZyb20gXCIuL3NyYy92Zy1obHMvdmctaGxzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmdEQVNILCBWZ0hMU1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBWZ0RBU0gsIFZnSExTXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1N0cmVhbWluZ01vZHVsZSB7fVxuIl19