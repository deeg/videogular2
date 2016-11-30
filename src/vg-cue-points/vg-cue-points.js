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
var core_1 = require("@angular/core");
var vg_events_1 = require('../events/vg-events');
var Rx_1 = require('rxjs/Rx');
var VgCuePoints = (function () {
    function VgCuePoints(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new core_1.EventEmitter();
        this.onUpdateCuePoint = new core_1.EventEmitter();
        this.onExitCuePoint = new core_1.EventEmitter();
        this.onCompleteCuePoint = new core_1.EventEmitter();
    }
    VgCuePoints.prototype.ngOnInit = function () {
        var onLoad = Rx_1.Observable.fromEvent(this.ref.nativeElement, vg_events_1.VgEvents.VG_LOAD);
        onLoad.subscribe(this.onLoad.bind(this));
    };
    VgCuePoints.prototype.onLoad = function (event) {
        var cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        for (var i = 0, l = cues.length; i < l; i++) {
            var onEnter = Rx_1.Observable.fromEvent(cues[i], vg_events_1.VgEvents.VG_ENTER);
            onEnter.subscribe(this.onEnter.bind(this));
            var onExit = Rx_1.Observable.fromEvent(cues[i], vg_events_1.VgEvents.VG_EXIT);
            onExit.subscribe(this.onExit.bind(this));
        }
    };
    VgCuePoints.prototype.onEnter = function (event) {
        this.onEnterCuePoint.next(event.target);
    };
    VgCuePoints.prototype.onExit = function (event) {
        this.onExitCuePoint.next(event.target);
    };
    __decorate([
        core_1.Output('onEnterCuePoint'), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], VgCuePoints.prototype, "onEnterCuePoint", void 0);
    __decorate([
        core_1.Output('onUpdateCuePoint'), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], VgCuePoints.prototype, "onUpdateCuePoint", void 0);
    __decorate([
        core_1.Output('onExitCuePoint'), 
        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
    ], VgCuePoints.prototype, "onExitCuePoint", void 0);
    __decorate([
        core_1.Output('onCompleteCuePoint'), 
        __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
    ], VgCuePoints.prototype, "onCompleteCuePoint", void 0);
    VgCuePoints = __decorate([
        core_1.Directive({
            selector: '[vgCuePoints]'
        }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _e) || Object])
    ], VgCuePoints);
    return VgCuePoints;
    var _a, _b, _c, _d, _e;
}());
exports.VgCuePoints = VgCuePoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY3VlLXBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWN1ZS1wb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRSxlQUFlLENBQUMsQ0FBQTtBQUNqRiwwQkFBdUIscUJBQXFCLENBQUMsQ0FBQTtBQUM3QyxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFLbkM7SUFNSSxxQkFBbUIsR0FBYztRQUFkLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFMTixvQkFBZSxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0RCxxQkFBZ0IsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDMUQsbUJBQWMsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDbEQsdUJBQWtCLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSXhGLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxNQUFNLEdBQUcsZUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLEtBQVM7UUFDWixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUSxDQUFDLEVBQUUsQ0FBQyxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xELElBQUksT0FBTyxHQUFHLGVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTNDLElBQUksTUFBTSxHQUFHLGVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEtBQVM7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFTO1FBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFsQ0Q7UUFBQyxhQUFNLENBQUMsaUJBQWlCLENBQUM7O3dEQUFBO0lBQzFCO1FBQUMsYUFBTSxDQUFDLGtCQUFrQixDQUFDOzt5REFBQTtJQUMzQjtRQUFDLGFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQzs7dURBQUE7SUFDekI7UUFBQyxhQUFNLENBQUMsb0JBQW9CLENBQUM7OzJEQUFBO0lBUGpDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1NBQzVCLENBQUM7O21CQUFBO0lBcUNGLGtCQUFDOztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksbUJBQVcsY0FvQ3ZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWZ0V2ZW50c30gZnJvbSAnLi4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2Z0N1ZVBvaW50c10nXG59KVxuZXhwb3J0IGNsYXNzIFZnQ3VlUG9pbnRzIHtcbiAgICBAT3V0cHV0KCdvbkVudGVyQ3VlUG9pbnQnKSBvbkVudGVyQ3VlUG9pbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnb25VcGRhdGVDdWVQb2ludCcpIG9uVXBkYXRlQ3VlUG9pbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnb25FeGl0Q3VlUG9pbnQnKSBvbkV4aXRDdWVQb2ludDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvbkNvbXBsZXRlQ3VlUG9pbnQnKSBvbkNvbXBsZXRlQ3VlUG9pbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVmOkVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB2YXIgb25Mb2FkID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5yZWYubmF0aXZlRWxlbWVudCwgVmdFdmVudHMuVkdfTE9BRCk7XG4gICAgICAgIG9uTG9hZC5zdWJzY3JpYmUodGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25Mb2FkKGV2ZW50OmFueSkge1xuICAgICAgICB2YXIgY3VlcyA9IGV2ZW50LnRhcmdldC50cmFjay5jdWVzO1xuXG4gICAgICAgIHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY3VlcyA9IGN1ZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaTpudW1iZXI9MCwgbDpudW1iZXI9Y3Vlcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb25FbnRlciA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGN1ZXNbaV0sIFZnRXZlbnRzLlZHX0VOVEVSKTtcbiAgICAgICAgICAgIG9uRW50ZXIuc3Vic2NyaWJlKHRoaXMub25FbnRlci5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgdmFyIG9uRXhpdCA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGN1ZXNbaV0sIFZnRXZlbnRzLlZHX0VYSVQpO1xuICAgICAgICAgICAgb25FeGl0LnN1YnNjcmliZSh0aGlzLm9uRXhpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW50ZXIoZXZlbnQ6YW55KSB7XG4gICAgICAgIHRoaXMub25FbnRlckN1ZVBvaW50Lm5leHQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBvbkV4aXQoZXZlbnQ6YW55KSB7XG4gICAgICAgIHRoaXMub25FeGl0Q3VlUG9pbnQubmV4dChldmVudC50YXJnZXQpO1xuICAgIH1cbn1cbiJdfQ==