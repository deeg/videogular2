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
var core_1 = require('@angular/core');
var vg_api_1 = require('../../services/vg-api');
var vg_abstract_control_1 = require('../vg-abstract-control');
var VgVolume = (function (_super) {
    __extends(VgVolume, _super);
    function VgVolume(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.elem = ref.nativeElement;
        this.isDragging = false;
    }
    VgVolume.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgVolume.prototype.onMouseDown = function (event) {
        this.mouseDownPosX = event.x;
        this.isDragging = true;
    };
    VgVolume.prototype.onDrag = function (event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.x));
        }
    };
    VgVolume.prototype.onStopDrag = function (event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.x) {
                this.setVolume(this.calculateVolume(event.x));
            }
        }
    };
    VgVolume.prototype.calculateVolume = function (mousePosX) {
        var volumeBarOffsetLeft = document.querySelector('.volumeBar').offsetLeft;
        return mousePosX - volumeBarOffsetLeft;
    };
    VgVolume.prototype.setVolume = function (vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
    };
    VgVolume.prototype.getVolume = function () {
        return this.target ? this.target.volume : 0;
    };
    VgVolume = __decorate([
        core_1.Component({
            selector: 'vg-volume',
            host: {
                '(document:mousemove)': 'onDrag($event)',
                '(document:mouseup)': 'onStopDrag($event)'
            },
            template: "\n        <div class=\"volumeBar\"\n            (mousedown)=\"onMouseDown($event)\">\n            <div class=\"volumeBackground\" [ngClass]=\"{dragging: isDragging}\">\n                <div class=\"volumeValue\" [style.width]=\"(getVolume() * (100-15)) + '%'\"></div>\n                <div class=\"volumeKnob\" [style.left]=\"(getVolume() * (100-15)) + 'px'\"></div>\n            </div>\n        </div>\n    ",
            styles: ["\n        :host {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        :host .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        :host .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        :host .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        :host .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        :host .volumeBackground.dragging .volumeValue,\n        :host .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgVolume);
    return VgVolume;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgVolume = VgVolume;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdm9sdW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdm9sdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUUzRCx1QkFBb0IsdUJBQXVCLENBQUMsQ0FBQTtBQUM1QyxvQ0FBZ0Msd0JBQXdCLENBQUMsQ0FBQTtBQXFFekQ7SUFBOEIsNEJBQWlCO0lBTzNDLGtCQUFZLEdBQWMsRUFBUyxHQUFTO1FBQ3hDLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRG9CLFFBQUcsR0FBSCxHQUFHLENBQU07UUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQWdCO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEtBQWdCO1FBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFnQjtRQUN2QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixTQUFnQjtRQUM1QixJQUFNLG1CQUFtQixHQUF3QixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxDQUFDLFVBQVUsQ0FBQztRQUNsRyxNQUFNLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO0lBQzNDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsR0FBVTtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBcEhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLElBQUksRUFBRTtnQkFDRixzQkFBc0IsRUFBRSxnQkFBZ0I7Z0JBQ3hDLG9CQUFvQixFQUFFLG9CQUFvQjthQUM3QztZQUNELFFBQVEsRUFBQywwWkFRUjtZQUNELE1BQU0sRUFBRSxDQUFDLDIvQ0FrRFIsQ0FBQztTQUNMLENBQUM7O2dCQUFBO0lBbURGLGVBQUM7O0FBQUQsQ0FBQyxBQWxERCxDQUE4Qix1Q0FBaUIsR0FrRDlDO0FBbERZLGdCQUFRLFdBa0RwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtWZ0FQSX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7VmdBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL3ZnLWFic3RyYWN0LWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXZvbHVtZScsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGRvY3VtZW50Om1vdXNlbW92ZSknOiAnb25EcmFnKCRldmVudCknLFxuICAgICAgICAnKGRvY3VtZW50Om1vdXNldXApJzogJ29uU3RvcERyYWcoJGV2ZW50KSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZUJhclwiXG4gICAgICAgICAgICAobW91c2Vkb3duKT1cIm9uTW91c2VEb3duKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWVCYWNrZ3JvdW5kXCIgW25nQ2xhc3NdPVwie2RyYWdnaW5nOiBpc0RyYWdnaW5nfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWVWYWx1ZVwiIFtzdHlsZS53aWR0aF09XCIoZ2V0Vm9sdW1lKCkgKiAoMTAwLTE1KSkgKyAnJSdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lS25vYlwiIFtzdHlsZS5sZWZ0XT1cIihnZXRWb2x1bWUoKSAqICgxMDAtMTUpKSArICdweCdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0IC52b2x1bWVCYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QgLnZvbHVtZUJhY2tncm91bmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0IC52b2x1bWVWYWx1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0IC52b2x1bWVLbm9iIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwOyB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0IC52b2x1bWVCYWNrZ3JvdW5kLmRyYWdnaW5nIC52b2x1bWVWYWx1ZSxcbiAgICAgICAgOmhvc3QgLnZvbHVtZUJhY2tncm91bmQuZHJhZ2dpbmcgLnZvbHVtZUtub2Ige1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnVm9sdW1lIGV4dGVuZHMgVmdBYnN0cmFjdENvbnRyb2wge1xuICAgIGVsZW06SFRNTEVsZW1lbnQ7XG4gICAgdmdGb3I6IHN0cmluZztcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBpc0RyYWdnaW5nOmJvb2xlYW47XG4gICAgbW91c2VEb3duUG9zWDpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6RWxlbWVudFJlZiwgcHVibGljIEFQSTpWZ0FQSSkge1xuICAgICAgICBzdXBlcihBUEkpO1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy52Z0ZvciA9IHRoaXMuZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZnLWZvcicpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihldmVudDp7eDpudW1iZXJ9KSB7XG4gICAgICAgIHRoaXMubW91c2VEb3duUG9zWCA9IGV2ZW50Lng7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25EcmFnKGV2ZW50Ont4Om51bWJlcn0pIHtcbiAgICAgICAgaWYodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLmNhbGN1bGF0ZVZvbHVtZShldmVudC54KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0b3BEcmFnKGV2ZW50Ont4Om51bWJlcn0pIHtcbiAgICAgICAgaWYodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoaXMubW91c2VEb3duUG9zWCA9PT0gZXZlbnQueCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMuY2FsY3VsYXRlVm9sdW1lKGV2ZW50LngpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjYWxjdWxhdGVWb2x1bWUobW91c2VQb3NYOm51bWJlcikge1xuICAgICAgICBjb25zdCB2b2x1bWVCYXJPZmZzZXRMZWZ0Om51bWJlciA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZUJhcicpKS5vZmZzZXRMZWZ0O1xuICAgICAgICByZXR1cm4gbW91c2VQb3NYIC0gdm9sdW1lQmFyT2Zmc2V0TGVmdDtcbiAgICB9XG5cbiAgICBzZXRWb2x1bWUodm9sOm51bWJlcikge1xuICAgICAgICB0aGlzLnRhcmdldC52b2x1bWUgPSAgTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdm9sIC8gMTAwKSk7XG4gICAgfVxuXG4gICAgZ2V0Vm9sdW1lKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQudm9sdW1lIDogMDtcbiAgICB9XG59XG4iXX0=