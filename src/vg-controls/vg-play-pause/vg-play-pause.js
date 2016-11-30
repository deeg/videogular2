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
var vg_states_1 = require("../../states/vg-states");
var VgPlayPause = (function (_super) {
    __extends(VgPlayPause, _super);
    function VgPlayPause(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.elem = ref.nativeElement;
    }
    VgPlayPause.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlayPause.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgPlayPause.prototype.getState = function () {
        return this.target ? this.target.state : vg_states_1.VgStates.VG_PAUSED;
    };
    VgPlayPause = __decorate([
        core_1.Component({
            selector: 'vg-play-pause',
            host: {
                '(click)': 'onClick()'
            },
            template: "<div class=\"icon\"\n             [class.vg-icon-pause]=\"getState() === 'playing'\"\n             [class.vg-icon-play_arrow]=\"getState() === 'paused' || getState() === 'ended'\">\n        </div>",
            styles: ["\n        :host {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        :host .icon {\n            pointer-events: none;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgPlayPause);
    return VgPlayPause;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgPlayPause = VgPlayPause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheS1wYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXBsYXktcGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBRXBELHVCQUFvQix1QkFBdUIsQ0FBQyxDQUFBO0FBQzVDLG9DQUFnQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3pELDBCQUF1Qix3QkFBd0IsQ0FBQyxDQUFBO0FBa0NoRDtJQUFpQywrQkFBaUI7SUFLOUMscUJBQVksR0FBYyxFQUFTLEdBQVM7UUFDeEMsa0JBQU0sR0FBRyxDQUFDLENBQUM7UUFEb0IsUUFBRyxHQUFILEdBQUcsQ0FBTTtRQUV4QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBRVYsS0FBSyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxTQUFTLENBQUM7SUFDaEUsQ0FBQztJQWhFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLFdBQVc7YUFDekI7WUFDRCxRQUFRLEVBQ0osc01BR087WUFDWCxNQUFNLEVBQUUsQ0FBQyw2aEJBb0JSLENBQUM7U0FDTCxDQUFDOzttQkFBQTtJQWtDRixrQkFBQzs7QUFBRCxDQUFDLEFBakNELENBQWlDLHVDQUFpQixHQWlDakQ7QUFqQ1ksbUJBQVcsY0FpQ3ZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VmdBUEl9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQge1ZnQWJzdHJhY3RDb250cm9sfSBmcm9tICcuLi92Zy1hYnN0cmFjdC1jb250cm9sJztcbmltcG9ydCB7VmdTdGF0ZXN9IGZyb20gXCIuLi8uLi9zdGF0ZXMvdmctc3RhdGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctcGxheS1wYXVzZScsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJpY29uXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1wYXVzZV09XCJnZXRTdGF0ZSgpID09PSAncGxheWluZydcIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXBsYXlfYXJyb3ddPVwiZ2V0U3RhdGUoKSA9PT0gJ3BhdXNlZCcgfHwgZ2V0U3RhdGUoKSA9PT0gJ2VuZGVkJ1wiPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCAuaWNvbiB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheVBhdXNlIGV4dGVuZHMgVmdBYnN0cmFjdENvbnRyb2wge1xuICAgIGVsZW06SFRNTEVsZW1lbnQ7XG4gICAgdmdGb3I6c3RyaW5nO1xuICAgIHRhcmdldDphbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6RWxlbWVudFJlZiwgcHVibGljIEFQSTpWZ0FQSSkge1xuICAgICAgICBzdXBlcihBUEkpO1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnZnRm9yID0gdGhpcy5lbGVtLmdldEF0dHJpYnV0ZSgndmctZm9yJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX1BMQVlJTkc6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19QQVVTRUQ6XG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX0VOREVEOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5zdGF0ZSA6IFZnU3RhdGVzLlZHX1BBVVNFRDtcbiAgICB9XG59XG4iXX0=