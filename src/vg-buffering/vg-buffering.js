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
var vg_api_1 = require('../services/vg-api');
var vg_states_1 = require("../states/vg-states");
var VgBuffering = (function () {
    function VgBuffering(ref, API) {
        var _this = this;
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.displayState = 'none';
        this.elem = ref.nativeElement;
        API.playerReadyEvent.subscribe(function (api) { return _this.onPlayerReady(); });
    }
    VgBuffering.prototype.onPlayerReady = function () {
        var _this = this;
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); });
    };
    VgBuffering.prototype.onUpdateBuffer = function (isBuffering) {
        if (isBuffering && this.target.state === vg_states_1.VgStates.VG_PLAYING) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    VgBuffering.prototype.show = function () {
        this.displayState = 'block';
    };
    VgBuffering.prototype.hide = function () {
        this.displayState = 'none';
    };
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', String)
    ], VgBuffering.prototype, "displayState", void 0);
    VgBuffering = __decorate([
        core_1.Component({
            selector: 'vg-buffering',
            host: {
                'class': 'vg-buffering'
            },
            template: "<div class=\"vg-buffering\">\n            <div class=\"bufferingContainer\">\n                <div class=\"loadingSpinner\"></div>\n            </div>\n        </div>",
            styles: ["\n        :host {\n            z-index: 201;\n        }\n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgBuffering);
    return VgBuffering;
    var _a;
}());
exports.VgBuffering = VgBuffering;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUQsZUFBZSxDQUFDLENBQUE7QUFFakUsdUJBQW9CLG9CQUFvQixDQUFDLENBQUE7QUFFekMsMEJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFnRzdDO0lBV0kscUJBQVksR0FBYyxFQUFTLEdBQVU7UUFYakQsaUJBeUNDO1FBOUJzQyxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBTjdDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRU0saUJBQVksR0FBVyxNQUFNLENBQUM7UUFHeEQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFTLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUM5QyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQWhDLENBQWdDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLG9CQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQS9CRDtRQUFDLGtCQUFXLENBQUMsZUFBZSxDQUFDOztxREFBQTtJQXZHakM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxjQUFjO2FBQzFCO1lBQ0QsUUFBUSxFQUNKLHdLQUlPO1lBQ1gsTUFBTSxFQUFFLENBQUMsNnBFQWlGUixDQUFDO1NBQ0wsQ0FBQzs7bUJBQUE7SUEwQ0Ysa0JBQUM7O0FBQUQsQ0FBQyxBQXpDRCxJQXlDQztBQXpDWSxtQkFBVyxjQXlDdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VmdBUEl9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQge0lQbGF5YWJsZX0gZnJvbSBcIi4uL3ZnLW1lZGlhL2ktcGxheWFibGVcIjtcbmltcG9ydCB7VmdTdGF0ZXN9IGZyb20gXCIuLi9zdGF0ZXMvdmctc3RhdGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctYnVmZmVyaW5nJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdjbGFzcyc6ICd2Zy1idWZmZXJpbmcnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJ2Zy1idWZmZXJpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJpbmdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1NwaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgei1pbmRleDogMjAxO1xuICAgICAgICB9XG4gICAgICAgIC52Zy1idWZmZXJpbmcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52Zy1idWZmZXJpbmcgLmJ1ZmZlcmluZ0NvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG5cbiAgICAgICAgICAgIHpvb206IDE7XG4gICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTG9hZGluZyBTcGlubmVyXG4gICAgICAgICogaHR0cDovL3d3dy5hbGVzc2lvYXR6ZW5pLmNvbS9ibG9nL2NzczMtbG9hZGluZy1hbmltYXRpb24tbG9vcC9cbiAgICAgICAgKi9cbiAgICAgICAgLnZnLWJ1ZmZlcmluZyAubG9hZGluZ1NwaW5uZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAuOTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzNXB4ICNGRkZGRkY7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmctYnVmZmVyaW5nIC5sb2FkaW5nU3Bpbm5lciAuc3RvcCB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEAtbW96LWtleWZyYW1lcyBzcGlub2ZmIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5vZmYge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVmdCdWZmZXJpbmcge1xuICAgIGVsZW06SFRNTEVsZW1lbnQ7XG4gICAgdmdGb3I6IHN0cmluZztcbiAgICB0YXJnZXQ6IElQbGF5YWJsZTtcbiAgICBjaGVja0J1ZmZlckludGVydmFsOiBudW1iZXI7XG4gICAgY2hlY2tJbnRlcnZhbDogbnVtYmVyID0gNTA7XG4gICAgY3VycmVudFBsYXlQb3M6IG51bWJlciA9IDA7XG4gICAgbGFzdFBsYXlQb3M6IG51bWJlciA9IDA7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5U3RhdGU6IHN0cmluZyA9ICdub25lJztcblxuICAgIGNvbnN0cnVjdG9yKHJlZjpFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKChhcGk6VmdBUEkpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKTtcbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnZnRm9yID0gdGhpcy5lbGVtLmdldEF0dHJpYnV0ZSgndmctZm9yJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuYnVmZmVyRGV0ZWN0ZWQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgaXNCdWZmZXJpbmcgPT4gdGhpcy5vblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZykge1xuICAgICAgICBpZiAoaXNCdWZmZXJpbmcgJiYgdGhpcy50YXJnZXQuc3RhdGUgPT09IFZnU3RhdGVzLlZHX1BMQVlJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlTdGF0ZSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3RhdGUgPSAnbm9uZSc7XG4gICAgfVxufVxuIl19