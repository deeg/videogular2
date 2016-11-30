"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var vg_api_1 = require("../../../services/vg-api");
var vg_abstract_control_1 = require('../../vg-abstract-control');
var VgScrubBarCuePoints = (function (_super) {
    __extends(VgScrubBarCuePoints, _super);
    function VgScrubBarCuePoints(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.cuePoints) {
            for (var i = 0, l = this.cuePoints.length; i < l; i++) {
                var end = (this.cuePoints[i].endTime >= 0) ? this.cuePoints[i].endTime : this.cuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.cuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = ((cuePointDuration * 100) / this.target.time.total) + "%";
                    position = (this.cuePoints[i].startTime * 100 / (Math.round(this.target.time.total / 1000))) + "%";
                }
                this.cuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['cuePoints'].currentValue) {
            if (!this.target) {
                this.onLoadedMetadataCalled = true;
                return;
            }
            this.onLoadedMetadata();
        }
    };
    __decorate([
        core_1.Input('cuePoints'), 
        __metadata('design:type', TextTrackCueList)
    ], VgScrubBarCuePoints.prototype, "cuePoints", void 0);
    VgScrubBarCuePoints = __decorate([
        core_1.Component({
            selector: 'vg-scrub-bar-cue-points',
            template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"let cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\" class=\"cue-point\"></span>\n        </div>\n        ",
            styles: ["\n        :host {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        :host .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls :host {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgScrubBarCuePoints);
    return VgScrubBarCuePoints;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgScrubBarCuePoints = VgScrubBarCuePoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1ZS1wb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0UsZUFBZSxDQUFDLENBQUE7QUFDcEYsdUJBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0Msb0NBQWdDLDJCQUEyQixDQUFDLENBQUE7QUE4QjVEO0lBQXlDLHVDQUFpQjtJQVF0RCw2QkFBWSxHQUFjLEVBQVMsR0FBUztRQUN4QyxrQkFBTSxHQUFHLENBQUMsQ0FBQztRQURvQixRQUFHLEdBQUgsR0FBRyxDQUFNO1FBSjVDLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQU1wQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV6RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3BELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RyxJQUFJLGdCQUFnQixHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNsRSxJQUFJLFFBQVEsR0FBVSxHQUFHLENBQUM7Z0JBQzFCLElBQUksWUFBWSxHQUFVLEdBQUcsQ0FBQztnQkFFOUIsRUFBRSxDQUFDLENBQUMsT0FBTyxnQkFBZ0IsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakUsWUFBWSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3pFLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3ZHLENBQUM7Z0JBRUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxPQUFPLEdBQUc7b0JBQy9CLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsUUFBUTtpQkFDakIsQ0FBQztZQUNOLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUEyQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQWhERDtRQUFDLFlBQUssQ0FBQyxXQUFXLENBQUM7OzBEQUFBO0lBbEN2QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSw2TkFJTDtZQUNMLE1BQU0sRUFBRSxDQUFDLHNkQW1CUixDQUFDO1NBQ0wsQ0FBQzs7MkJBQUE7SUF3REYsMEJBQUM7O0FBQUQsQ0FBQyxBQXZERCxDQUF5Qyx1Q0FBaUIsR0F1RHpEO0FBdkRZLDJCQUFtQixzQkF1RC9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25DaGFuZ2VzLCBJbnB1dCwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHtWZ0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnLi4vLi4vdmctYWJzdHJhY3QtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctc2NydWItYmFyLWN1ZS1wb2ludHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdWUtcG9pbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgY3Agb2YgY3VlUG9pbnRzXCIgW3N0eWxlLndpZHRoXT1cImNwLiQkc3R5bGU/LndpZHRoXCIgW3N0eWxlLmxlZnRdPVwiY3AuJCRzdHlsZT8ubGVmdFwiIGNsYXNzPVwiY3VlLXBvaW50XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCAuY3VlLXBvaW50LWNvbnRhaW5lciAuY3VlLXBvaW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNCwgMCwgMC43KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIDpob3N0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhckN1ZVBvaW50cyBleHRlbmRzIFZnQWJzdHJhY3RDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBlbGVtOkhUTUxFbGVtZW50O1xuICAgIHZnRm9yOiBzdHJpbmc7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgb25Mb2FkZWRNZXRhZGF0YUNhbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCdjdWVQb2ludHMnKSBjdWVQb2ludHM6VGV4dFRyYWNrQ3VlTGlzdDtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjpFbGVtZW50UmVmLCBwdWJsaWMgQVBJOlZnQVBJKSB7XG4gICAgICAgIHN1cGVyKEFQSSk7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudmdGb3IgPSB0aGlzLmVsZW0uZ2V0QXR0cmlidXRlKCd2Zy1mb3InKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgdmFyIG9uVGltZVVwZGF0ZSA9IHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMubG9hZGVkTWV0YWRhdGE7XG4gICAgICAgIG9uVGltZVVwZGF0ZS5zdWJzY3JpYmUodGhpcy5vbkxvYWRlZE1ldGFkYXRhLmJpbmQodGhpcykpO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5vbkxvYWRlZE1ldGFkYXRhQ2FsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkTWV0YWRhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZGVkTWV0YWRhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1ZVBvaW50cykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmN1ZVBvaW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gKHRoaXMuY3VlUG9pbnRzW2ldLmVuZFRpbWUgPj0gMCkgPyB0aGlzLmN1ZVBvaW50c1tpXS5lbmRUaW1lIDogdGhpcy5jdWVQb2ludHNbaV0uc3RhcnRUaW1lICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgY3VlUG9pbnREdXJhdGlvbiA9IChlbmQgLSB0aGlzLmN1ZVBvaW50c1tpXS5zdGFydFRpbWUpICogMTAwMDtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb246c3RyaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50V2lkdGg6c3RyaW5nID0gJzAnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdWVQb2ludER1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRXaWR0aCA9ICgoY3VlUG9pbnREdXJhdGlvbiAqIDEwMCkgLyB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICh0aGlzLmN1ZVBvaW50c1tpXS5zdGFydFRpbWUgKiAxMDAgLyAoTWF0aC5yb3VuZCh0aGlzLnRhcmdldC50aW1lLnRvdGFsIC8gMTAwMCkpKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VlUG9pbnRzW2ldKS4kJHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGVyY2VudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydjdWVQb2ludHMnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkZWRNZXRhZGF0YUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vbkxvYWRlZE1ldGFkYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=