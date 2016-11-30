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
var vg_states_1 = require("../states/vg-states");
var VgAPI = (function () {
    function VgAPI() {
        this.medias = {}; // TODO: refactor to Set<IPlayable> 
        this.playerReadyEvent = new core_1.EventEmitter(true);
    }
    VgAPI.prototype.onPlayerReady = function () {
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            return this.medias[item];
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].isMaster === 'true' || this.medias[id].isMaster === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].isMaster === 'true' || this.medias[id].isMaster === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            this.medias[id].play();
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            this.medias[id].pause();
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            this.$$seek(this.medias[id], value, byPercent);
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            //result[id] = this.medias[id][property];
            medias[id] = this.medias[id];
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = vg_states_1.VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            this.medias[id][property] = value;
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VgAPI);
    return VgAPI;
}());
exports.VgAPI = VgAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFFdkQsMEJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFHN0M7SUFLSTtRQUpBLFdBQU0sR0FBVSxFQUFFLENBQUMsQ0FBQSxvQ0FBb0M7UUFFdkQscUJBQWdCLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUk3RCxDQUFDO0lBRUQsNkJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUFlLEdBQWY7UUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFjLEdBQWQ7UUFDSSxJQUFJLE1BQVUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQs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Q0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFlLEdBQWYsVUFBZ0IsSUFBZ0I7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLEtBQWU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUE1Tkw7UUFBQyxpQkFBVSxFQUFFOzthQUFBO0lBNk5iLFlBQUM7QUFBRCxDQUFDLEFBNU5ELElBNE5DO0FBNU5ZLGFBQUssUUE0TmpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lQbGF5YWJsZX0gZnJvbSBcIi4uL3ZnLW1lZGlhL2ktcGxheWFibGVcIjtcbmltcG9ydCB7VmdTdGF0ZXN9IGZyb20gXCIuLi9zdGF0ZXMvdmctc3RhdGVzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0FQSSB7XG4gICAgbWVkaWFzOk9iamVjdCA9IHt9Oy8vIFRPRE86IHJlZmFjdG9yIHRvIFNldDxJUGxheWFibGU+IFxuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBhbnk7XG4gICAgcGxheWVyUmVhZHlFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnBsYXllclJlYWR5RXZlbnQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0TWVkaWEoKTpJUGxheWFibGUge1xuICAgICAgICBmb3IgKHZhciBpdGVtIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXNbaXRlbV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXN0ZXJNZWRpYSgpOklQbGF5YWJsZSB7XG4gICAgICAgIHZhciBtYXN0ZXI6YW55O1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXS5pc01hc3RlciA9PT0gJ3RydWUnIHx8IHRoaXMubWVkaWFzW2lkXS5pc01hc3RlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1hc3RlciA9IHRoaXMubWVkaWFzW2lkXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFzdGVyIHx8IHRoaXMuZ2V0RGVmYXVsdE1lZGlhKCk7XG4gICAgfVxuXG4gICAgaXNNYXN0ZXJEZWZpbmVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0uaXNNYXN0ZXIgPT09ICd0cnVlJyB8fCB0aGlzLm1lZGlhc1tpZF0uaXNNYXN0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFCeUlkKGlkOnN0cmluZyA9IG51bGwpOklQbGF5YWJsZSB7XG4gICAgICAgIHZhciBtZWRpYSA9IHRoaXMubWVkaWFzW2lkXTtcblxuICAgICAgICBpZiAoIWlkIHx8IGlkID09PSAnKicpIHtcbiAgICAgICAgICAgIG1lZGlhID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZWRpYTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgdGhpcy5tZWRpYXNbaWRdLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgdGhpcy5tZWRpYXNbaWRdLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnZHVyYXRpb24nKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUoc2Vjb25kcykge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnLCBzZWNvbmRzKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnKTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy4kJHNldEFsbFByb3BlcnRpZXMoJ3N0YXRlJywgc3RhdGUpO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdzdGF0ZScpO1xuICAgIH1cblxuICAgIHNldCB2b2x1bWUodm9sdW1lKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCd2b2x1bWUnLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygndm9sdW1lJyk7XG4gICAgfVxuXG4gICAgc2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCdwbGF5YmFja1JhdGUnLCByYXRlKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWJhY2tSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3BsYXliYWNrUmF0ZScpO1xuICAgIH1cblxuICAgIGdldCBjYW5QbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2NhblBsYXknKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuUGxheVRocm91Z2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY2FuUGxheVRocm91Z2gnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNNZXRhZGF0YUxvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01ldGFkYXRhTG9hZGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzV2FpdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc1dhaXRpbmcnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNDb21wbGV0ZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNMaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2lzTGl2ZScpO1xuICAgIH1cblxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3RpbWUnKTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2J1ZmZlcicpO1xuICAgIH1cblxuICAgIGdldCBidWZmZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdidWZmZXJlZCcpO1xuICAgIH1cblxuICAgIGdldCBzdWJzY3JpcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3N1YnNjcmlwdGlvbnMnKTtcbiAgICB9XG5cbiAgICBzZWVrVGltZSh2YWx1ZTpudW1iZXIsIGJ5UGVyY2VudDpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIHRoaXMuJCRzZWVrKHRoaXMubWVkaWFzW2lkXSwgdmFsdWUsIGJ5UGVyY2VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkJHNlZWsobWVkaWE6SVBsYXlhYmxlLCB2YWx1ZTpudW1iZXIsIGJ5UGVyY2VudDpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIHNlY29uZDpudW1iZXI7XG4gICAgICAgIHZhciBkdXJhdGlvbjpudW1iZXIgPSBtZWRpYS5kdXJhdGlvbjtcblxuICAgICAgICBpZiAoYnlQZXJjZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01hc3RlckRlZmluZWQoKSkge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5nZXRNYXN0ZXJNZWRpYSgpLmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWNvbmQgPSB2YWx1ZSAqIGR1cmF0aW9uIC8gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2Vjb25kID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZWRpYS5jdXJyZW50VGltZSA9IHNlY29uZDtcbiAgICB9XG5cbiAgICAkJGdldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nKXtcbiAgICAgICAgY29uc3QgbWVkaWFzID0ge307XG4gICAgICAgIGxldCByZXN1bHQ6YW55O1xuXG4gICAgICAgIGZvciAodmFyIGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICAvL3Jlc3VsdFtpZF0gPSB0aGlzLm1lZGlhc1tpZF1bcHJvcGVydHldO1xuICAgICAgICAgICAgbWVkaWFzW2lkXSA9IHRoaXMubWVkaWFzW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5NZWRpYXMgPSBPYmplY3Qua2V5cyhtZWRpYXMpLmxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChuTWVkaWFzKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWVzIHVudGlsIHZnTWVkaWEgaXMgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXliYWNrUmF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZvbHVtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7Y3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBtZWRpYSBlbGVtZW50IHRoZW4gcmV0dXJuIHRoZSBwbGFpbiB2YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TWVkaWFJZCA9IE9iamVjdC5rZXlzKG1lZGlhcylbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbWVkaWFzW2ZpcnN0TWVkaWFJZF1bcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZXR1cm4gJ21hc3RlcicgdmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgbWFzdGVyID0gdGhpcy5nZXRNYXN0ZXJNZWRpYSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1lZGlhc1ttYXN0ZXIuaWRdW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAkJHNldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nLCB2YWx1ZTphbnkpe1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgdGhpcy5tZWRpYXNbaWRdW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFbGVtZW50KGVsZW06SFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy52aWRlb2d1bGFyRWxlbWVudCA9IGVsZW07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJNZWRpYShtZWRpYTpJUGxheWFibGUpIHtcbiAgICAgICAgdGhpcy5tZWRpYXNbbWVkaWEuaWRdID0gbWVkaWE7XG4gICAgfVxufVxuIl19