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
var Observable_1 = require("rxjs/Observable");
var vg_events_1 = require("../events/vg-events");
var vg_states_1 = require("../states/vg-states");
var vg_api_1 = require("../services/vg-api");
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
var VgMedia = (function () {
    function VgMedia(ref, api) {
        this.api = api;
        this._vgMaster = false;
        this.state = vg_states_1.VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isBufferDetected = false;
        this.isMetadataLoaded = false;
        this.isReadyToPlay = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.elem = ref.nativeElement;
    }
    Object.defineProperty(VgMedia.prototype, "isMaster", {
        get: function () {
            return this._vgMaster;
        },
        set: function (value) {
            this._vgMaster = value;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions = {
            // Native events
            abort: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ABORT),
            canPlay: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY),
            canPlayThrough: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_DURATION_CHANGE),
            emptied: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_EMPTIED),
            encrypted: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENCRYPTED),
            ended: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENDED),
            error: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ERROR),
            loadedData: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_DATA),
            loadedMetadata: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_METADATA),
            loadStart: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOAD_START),
            pause: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PAUSE),
            play: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAY),
            playing: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAYING),
            progress: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PROGRESS),
            rateChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_RATE_CHANGE),
            seeked: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKED),
            seeking: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKING),
            stalled: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_STALLED),
            suspend: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SUSPEND),
            timeUpdate: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_TIME_UPDATE),
            volumeChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_VOLUME_CHANGE),
            waiting: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: Observable_1.Observable.fromEvent(window, vg_events_1.VgEvents.VG_START_ADS),
            endAds: Observable_1.Observable.fromEvent(window, vg_events_1.VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: Observable_1.Observable.create(function (observer) {
                var domObs = new MutationObserver(function (mutations) {
                    observer.next(mutations);
                });
                domObs.observe(_this.elem, { childList: true });
                return function () {
                    domObs.disconnect();
                };
            }),
            // Custom buffering detection
            bufferDetected: Observable_1.Observable.create(function (observer) {
                _this.bufferObserver = observer;
                return function () {
                    observer.disconnect();
                };
            })
        };
        this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.isMaster) {
            this.api.playerReadyEvent.subscribe(function () {
                _this.prepareSync();
            });
        }
    };
    VgMedia.prototype.prepareSync = function () {
        var _this = this;
        var canPlayAll = [];
        for (var media in this.api.medias) {
            canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
        }
        this.canPlayAllSubscription = Observable_1.Observable.combineLatest(canPlayAll, function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            var allReady = params.some(function (event) { return event.target.readyState === 4; });
            if (allReady && !_this.syncSubscription) {
                _this.startSync();
                _this.syncSubscription.unsubscribe();
            }
        }).subscribe();
    };
    VgMedia.prototype.startSync = function () {
        var _this = this;
        this.syncSubscription = TimerObservable_1.TimerObservable.create(0, 1000).subscribe(function () {
            for (var media in _this.api.medias) {
                if (_this.api.medias[media] != _this) {
                    var diff = _this.api.medias[media].currentTime - _this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        _this.playAtferSync = (_this.state === vg_states_1.VgStates.VG_PLAYING);
                        _this.pause();
                        _this.api.medias[media].pause();
                        _this.api.medias[media].currentTime = _this.currentTime;
                    }
                    else {
                        if (_this.playAtferSync) {
                            _this.play();
                            _this.api.medias[media].play();
                            _this.playAtferSync = false;
                        }
                    }
                }
            }
        });
    };
    VgMedia.prototype.onMutation = function (mutations) {
        var _this = this;
        this.elem.pause();
        this.elem.currentTime = 0;
        // TODO: This is ugly, we should find something cleaner
        setTimeout(function () { return _this.elem.load(); }, 1);
    };
    VgMedia.prototype.play = function () {
        this.elem.play();
    };
    VgMedia.prototype.pause = function () {
        this.elem.pause();
    };
    Object.defineProperty(VgMedia.prototype, "id", {
        get: function () {
            return this.elem.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "duration", {
        get: function () {
            return this.elem.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "currentTime", {
        get: function () {
            return this.elem.currentTime;
        },
        set: function (seconds) {
            this.elem.currentTime = seconds;
            //this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "volume", {
        get: function () {
            return this.elem.volume;
        },
        set: function (volume) {
            this.elem.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "playbackRate", {
        get: function () {
            return this.elem.playbackRate;
        },
        set: function (rate) {
            this.elem.playbackRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "buffered", {
        get: function () {
            return this.elem.buffered;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.onCanPlay = function (event) {
        this.canPlay = true;
    };
    VgMedia.prototype.onCanPlayThrough = function (event) {
        this.canPlayThrough = true;
    };
    VgMedia.prototype.onLoadMetadata = function (event) {
        this.isMetadataLoaded = true;
        this.time.current = 0;
        this.time.left = 0;
        this.time.total = this.duration * 1000;
        this.state = vg_states_1.VgStates.VG_PAUSED;
        // Live streaming check
        var t = Math.round(this.time.total);
        this.isLive = (t === Infinity);
    };
    VgMedia.prototype.onWait = function (event) {
        this.isWaiting = true;
    };
    VgMedia.prototype.onComplete = function (event) {
        this.isCompleted = true;
        this.state = vg_states_1.VgStates.VG_ENDED;
    };
    VgMedia.prototype.onStartPlaying = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
    };
    VgMedia.prototype.onPlay = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        if (this.isMaster) {
            if (!this.syncSubscription || this.syncSubscription.isUnsubscribed) {
                this.startSync();
            }
        }
        if (this.bufferObserver) {
            this.startBufferCheck();
        }
    };
    VgMedia.prototype.onPause = function (event) {
        this.state = vg_states_1.VgStates.VG_PAUSED;
        if (this.isMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        if (this.bufferObserver) {
            this.stopBufferCheck();
        }
    };
    VgMedia.prototype.onTimeUpdate = function (event) {
        var end = this.buffered.length - 1;
        this.time.current = this.currentTime * 1000;
        this.time.left = (this.duration - this.currentTime) * 1000;
        if (end >= 0) {
            this.buffer.end = this.buffered.end(end) * 1000;
        }
    };
    VgMedia.prototype.onProgress = function (event) {
        var end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer.end = this.buffered.end(end) * 1000;
        }
    };
    VgMedia.prototype.onVolumeChange = function (event) {
        // TODO: Save to localstorage the current volume
    };
    VgMedia.prototype.onError = function (event) {
        // TODO: Handle error messages
    };
    // http://stackoverflow.com/a/23828241/779529
    VgMedia.prototype.bufferCheck = function () {
        var offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected && this.currentPlayPos < (this.lastPlayPos + offset)) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected && this.currentPlayPos > (this.lastPlayPos + offset)) {
            this.isBufferDetected = false;
        }
        this.bufferObserver.next(this.isBufferDetected);
        this.lastPlayPos = this.currentPlayPos;
    };
    VgMedia.prototype.startBufferCheck = function () {
        var _this = this;
        this.checkBufferSubscription = TimerObservable_1.TimerObservable.create(0, this.checkInterval).subscribe(function () {
            _this.bufferCheck();
        });
    };
    VgMedia.prototype.stopBufferCheck = function () {
        this.checkBufferSubscription.unsubscribe();
        this.isBufferDetected = false;
        this.bufferObserver.next(this.isBufferDetected);
    };
    VgMedia.prototype.onBufferDetected = function () {
    };
    __decorate([
        core_1.Input('vg-master'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], VgMedia.prototype, "isMaster", null);
    VgMedia = __decorate([
        core_1.Directive({
            selector: '[vg-media]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgMedia);
    return VgMedia;
    var _a;
}());
exports.VgMedia = VgMedia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBRXJFLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLDBCQUF5QixxQkFBcUIsQ0FBQyxDQUFBO0FBQy9DLDBCQUF5QixxQkFBcUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLGdDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBTWxFO0lBdUNJLGlCQUFZLEdBQWUsRUFBVSxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQXBDdkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVVuQyxVQUFLLEdBQVcsb0JBQVEsQ0FBQyxTQUFTLENBQUM7UUFFbkMsU0FBSSxHQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFHekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQU14QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxh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UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUMvQjtnQkFDSSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxVQUFVLEdBQTJCLEVBQUUsQ0FBQztRQUU1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQzdEO1lBQUMsZ0JBQVM7aUJBQVQsV0FBUyxDQUFULHNCQUFTLENBQVQsSUFBUztnQkFBVCwrQkFBUzs7WUFDTixJQUFJLFFBQVEsR0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7WUFFNUUsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM3RDtZQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLElBQUksS0FBSSxDQUFDLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxJQUFJLEdBQVcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7b0JBRTNFLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLEtBQUssb0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFFMUQsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNiLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDNUQsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNaLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt3QkFDL0IsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLFNBQWM7UUFBekIsaUJBTUM7UUFMRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUUxQix1REFBdUQ7UUFDdkQsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFJLHVCQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQVc7YUFLZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxDQUFDO2FBUEQsVUFBZ0IsT0FBTztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDaEMsNkRBQTZEO1FBQ2pFLENBQUM7OztPQUFBO0lBTUQsc0JBQUksMkJBQU07YUFJVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDO2FBTkQsVUFBVyxNQUFNO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksaUNBQVk7YUFJaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbEMsQ0FBQzthQU5ELFVBQWlCLElBQUk7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksNkJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELDJCQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBVTtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQWMsR0FBZCxVQUFlLEtBQVU7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxTQUFTLENBQUM7UUFFaEMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sS0FBVTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBVSxHQUFWLFVBQVcsS0FBVTtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFRLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWUsS0FBVTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sS0FBVTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxVQUFVLENBQUM7UUFFakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRUQseUJBQU8sR0FBUCxVQUFRLEtBQVU7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFRLENBQUMsU0FBUyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxLQUFVO1FBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUUzRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxLQUFVO1FBQ3JCLGdEQUFnRDtJQUNwRCxDQUFDO0lBRUQseUJBQU8sR0FBUCxVQUFRLEtBQVU7UUFDZCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELDZDQUE2QztJQUM3Qyw2QkFBVyxHQUFYO1FBQ0ksSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQ2xGO1lBQ0ksS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO0lBRUEsQ0FBQztJQXRWRDtRQUFDLFlBQUssQ0FBQyxXQUFXLENBQUM7OzsyQ0FBQTtJQVJ2QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDOztlQUFBO0lBNlZGLGNBQUM7O0FBQUQsQ0FBQyxBQTVWRCxJQTRWQztBQTVWWSxlQUFPLFVBNFZuQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0LCBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElQbGF5YWJsZSwgSU1lZGlhU3Vic2NyaXB0aW9ucyB9IGZyb20gXCIuL2ktcGxheWFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBWZ0V2ZW50cyB9IGZyb20gXCIuLi9ldmVudHMvdmctZXZlbnRzXCI7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gXCIuLi9zdGF0ZXMvdmctc3RhdGVzXCI7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gXCIuLi9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7IFRpbWVyT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvVGltZXJPYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gXCJyeGpzXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZnLW1lZGlhXSdcbn0pXG5leHBvcnQgY2xhc3MgVmdNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCwgSVBsYXlhYmxlIHtcbiAgICBlbGVtOiBhbnk7XG5cbiAgICBwcml2YXRlIF92Z01hc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCd2Zy1tYXN0ZXInKSBzZXQgaXNNYXN0ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdmdNYXN0ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNNYXN0ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92Z01hc3RlcjtcbiAgICB9XG5cbiAgICBzdGF0ZTogc3RyaW5nID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgdGltZTogYW55ID0geyBjdXJyZW50OiAwLCB0b3RhbDogMCwgbGVmdDogMCB9O1xuICAgIGJ1ZmZlcjogYW55ID0geyBlbmQ6IDAgfTtcbiAgICBzdWJzY3JpcHRpb25zOiBJTWVkaWFTdWJzY3JpcHRpb25zIHwgYW55O1xuXG4gICAgY2FuUGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNhblBsYXlUaHJvdWdoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNCdWZmZXJEZXRlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzTWV0YWRhdGFMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc1JlYWR5VG9QbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNXYWl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0xpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgY2hlY2tJbnRlcnZhbDogbnVtYmVyID0gMjAwO1xuICAgIGN1cnJlbnRQbGF5UG9zOiBudW1iZXIgPSAwO1xuICAgIGxhc3RQbGF5UG9zOiBudW1iZXIgPSAwO1xuXG4gICAgYnVmZmVyT2JzZXJ2ZXI6IE9ic2VydmVyPGFueT47XG4gICAgY2hlY2tCdWZmZXJTdWJzY3JpcHRpb246IGFueTtcbiAgICBzeW5jU3Vic2NyaXB0aW9uOiBhbnk7XG4gICAgY2FuUGxheUFsbFN1YnNjcmlwdGlvbjogYW55O1xuICAgIHBsYXlBdGZlclN5bmM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBhcGk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyBOYXRpdmUgZXZlbnRzXG4gICAgICAgICAgICBhYm9ydDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0FCT1JUKSxcbiAgICAgICAgICAgIGNhblBsYXk6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19DQU5fUExBWSksXG4gICAgICAgICAgICBjYW5QbGF5VGhyb3VnaDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0NBTl9QTEFZX1RIUk9VR0gpLFxuICAgICAgICAgICAgZHVyYXRpb25DaGFuZ2U6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19EVVJBVElPTl9DSEFOR0UpLFxuICAgICAgICAgICAgZW1wdGllZDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0VNUFRJRUQpLFxuICAgICAgICAgICAgZW5jcnlwdGVkOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRU5DUllQVEVEKSxcbiAgICAgICAgICAgIGVuZGVkOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRU5ERUQpLFxuICAgICAgICAgICAgZXJyb3I6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FUlJPUiksXG4gICAgICAgICAgICBsb2FkZWREYXRhOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfTE9BREVEX0RBVEEpLFxuICAgICAgICAgICAgbG9hZGVkTWV0YWRhdGE6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19MT0FERURfTUVUQURBVEEpLFxuICAgICAgICAgICAgbG9hZFN0YXJ0OiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfTE9BRF9TVEFSVCksXG4gICAgICAgICAgICBwYXVzZTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1BBVVNFKSxcbiAgICAgICAgICAgIHBsYXk6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QTEFZKSxcbiAgICAgICAgICAgIHBsYXlpbmc6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QTEFZSU5HKSxcbiAgICAgICAgICAgIHByb2dyZXNzOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUFJPR1JFU1MpLFxuICAgICAgICAgICAgcmF0ZUNoYW5nZTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1JBVEVfQ0hBTkdFKSxcbiAgICAgICAgICAgIHNlZWtlZDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NFRUtFRCksXG4gICAgICAgICAgICBzZWVraW5nOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfU0VFS0lORyksXG4gICAgICAgICAgICBzdGFsbGVkOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfU1RBTExFRCksXG4gICAgICAgICAgICBzdXNwZW5kOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfU1VTUEVORCksXG4gICAgICAgICAgICB0aW1lVXBkYXRlOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfVElNRV9VUERBVEUpLFxuICAgICAgICAgICAgdm9sdW1lQ2hhbmdlOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfVk9MVU1FX0NIQU5HRSksXG4gICAgICAgICAgICB3YWl0aW5nOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfV0FJVElORyksXG5cbiAgICAgICAgICAgIC8vIEFkdmVydGlzZW1lbnQgb25seSBldmVudHNcbiAgICAgICAgICAgIHN0YXJ0QWRzOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PndpbmRvdywgVmdFdmVudHMuVkdfU1RBUlRfQURTKSxcbiAgICAgICAgICAgIGVuZEFkczogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT53aW5kb3csIFZnRXZlbnRzLlZHX0VORF9BRFMpLFxuXG4gICAgICAgICAgICAvLyBTZWUgY2hhbmdlcyBvbiA8c291cmNlPiBjaGlsZCBlbGVtZW50cyB0byByZWxvYWQgdGhlIHZpZGVvIGZpbGVcbiAgICAgICAgICAgIG11dGF0aW9uOiBPYnNlcnZhYmxlLmNyZWF0ZShcbiAgICAgICAgICAgICAgICAob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZG9tT2JzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChtdXRhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb21PYnMub2JzZXJ2ZSg8YW55PnRoaXMuZWxlbSwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU9icy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgLy8gQ3VzdG9tIGJ1ZmZlcmluZyBkZXRlY3Rpb25cbiAgICAgICAgICAgIGJ1ZmZlckRldGVjdGVkOiBPYnNlcnZhYmxlLmNyZWF0ZShcbiAgICAgICAgICAgICAgICAob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlck9ic2VydmVyID0gb2JzZXJ2ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLm11dGF0aW9uLnN1YnNjcmliZSh0aGlzLm9uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5jYW5QbGF5LnN1YnNjcmliZSh0aGlzLm9uQ2FuUGxheS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmNhblBsYXlUaHJvdWdoLnN1YnNjcmliZSh0aGlzLm9uQ2FuUGxheVRocm91Z2guYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5sb2FkZWRNZXRhZGF0YS5zdWJzY3JpYmUodGhpcy5vbkxvYWRNZXRhZGF0YS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLndhaXRpbmcuc3Vic2NyaWJlKHRoaXMub25XYWl0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHJvZ3Jlc3Muc3Vic2NyaWJlKHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmVuZGVkLnN1YnNjcmliZSh0aGlzLm9uQ29tcGxldGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wbGF5aW5nLnN1YnNjcmliZSh0aGlzLm9uU3RhcnRQbGF5aW5nLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucGxheS5zdWJzY3JpYmUodGhpcy5vblBsYXkuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wYXVzZS5zdWJzY3JpYmUodGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudGltZVVwZGF0ZS5zdWJzY3JpYmUodGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy52b2x1bWVDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5lcnJvci5zdWJzY3JpYmUodGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzTWFzdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFwaS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVN5bmMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGFyZVN5bmMoKSB7XG4gICAgICAgIGxldCBjYW5QbGF5QWxsOiBBcnJheTxPYnNlcnZhYmxlPGFueT4+ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgbWVkaWEgaW4gdGhpcy5hcGkubWVkaWFzKSB7XG4gICAgICAgICAgICBjYW5QbGF5QWxsLnB1c2godGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnN1YnNjcmlwdGlvbnMuY2FuUGxheSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhblBsYXlBbGxTdWJzY3JpcHRpb24gPSBPYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoY2FuUGxheUFsbCxcbiAgICAgICAgICAgICguLi5wYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgYWxsUmVhZHk6IGJvb2xlYW4gPSBwYXJhbXMuc29tZShldmVudCA9PiBldmVudC50YXJnZXQucmVhZHlTdGF0ZSA9PT0gNCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsUmVhZHkgJiYgIXRoaXMuc3luY1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3luYygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc3RhcnRTeW5jKCkge1xuICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24gPSBUaW1lck9ic2VydmFibGUuY3JlYXRlKDAsIDEwMDApLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtZWRpYSBpbiB0aGlzLmFwaS5tZWRpYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXSAhPSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZjogbnVtYmVyID0gdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLmN1cnJlbnRUaW1lIC0gdGhpcy5jdXJyZW50VGltZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAtMC4zIHx8IGRpZmYgPiAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBdGZlclN5bmMgPSAodGhpcy5zdGF0ZSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlBdGZlclN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF0ZmVyU3luYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbk11dGF0aW9uKG11dGF0aW9uczogYW55KSB7XG4gICAgICAgIHRoaXMuZWxlbS5wYXVzZSgpO1xuICAgICAgICB0aGlzLmVsZW0uY3VycmVudFRpbWUgPSAwO1xuXG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgdWdseSwgd2Ugc2hvdWxkIGZpbmQgc29tZXRoaW5nIGNsZWFuZXJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW0ubG9hZCgpLCAxKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmVsZW0ucGxheSgpO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmVsZW0ucGF1c2UoKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW0uaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50VGltZShzZWNvbmRzKSB7XG4gICAgICAgIHRoaXMuZWxlbS5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgIC8vdGhpcy5lbGVtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFZnRXZlbnRzLlZHX1NFRUspKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW0uY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgc2V0IHZvbHVtZSh2b2x1bWUpIHtcbiAgICAgICAgdGhpcy5lbGVtLnZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG5cbiAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtLnZvbHVtZTtcbiAgICB9XG5cbiAgICBzZXQgcGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgICAgdGhpcy5lbGVtLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXliYWNrUmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbS5wbGF5YmFja1JhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGJ1ZmZlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtLmJ1ZmZlcmVkO1xuICAgIH1cblxuICAgIG9uQ2FuUGxheShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25DYW5QbGF5VGhyb3VnaChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuY2FuUGxheVRocm91Z2ggPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTG9hZE1ldGFkYXRhKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc01ldGFkYXRhTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMudGltZS5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy50aW1lLnRvdGFsID0gdGhpcy5kdXJhdGlvbiAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgICAgICAvLyBMaXZlIHN0cmVhbWluZyBjaGVja1xuICAgICAgICBsZXQgdDpudW1iZXIgPSBNYXRoLnJvdW5kKHRoaXMudGltZS50b3RhbCk7XG4gICAgICAgIHRoaXMuaXNMaXZlID0gKHQgPT09IEluZmluaXR5KTtcbiAgICB9XG5cbiAgICBvbldhaXQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzV2FpdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfRU5ERUQ7XG4gICAgfVxuXG4gICAgb25TdGFydFBsYXlpbmcoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcbiAgICB9XG5cbiAgICBvblBsYXkoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcblxuICAgICAgICBpZiAodGhpcy5pc01hc3Rlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN5bmNTdWJzY3JpcHRpb24gfHwgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlck9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnVmZmVyQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGF1c2UoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgICAgIGlmICh0aGlzLmlzTWFzdGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheUF0ZmVyU3luYykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3luY1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEJ1ZmZlckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRpbWVVcGRhdGUoZXZlbnQ6IGFueSkge1xuICAgICAgICB2YXIgZW5kID0gdGhpcy5idWZmZXJlZC5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMudGltZS5jdXJyZW50ID0gdGhpcy5jdXJyZW50VGltZSAqIDEwMDA7XG4gICAgICAgIHRoaXMudGltZS5sZWZ0ID0gKHRoaXMuZHVyYXRpb24gLSB0aGlzLmN1cnJlbnRUaW1lKSAqIDEwMDA7XG5cbiAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5lbmQgPSB0aGlzLmJ1ZmZlcmVkLmVuZChlbmQpICogMTAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3MoZXZlbnQ6IGFueSkge1xuICAgICAgICB2YXIgZW5kID0gdGhpcy5idWZmZXJlZC5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuZW5kID0gdGhpcy5idWZmZXJlZC5lbmQoZW5kKSAqIDEwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblZvbHVtZUNoYW5nZShldmVudDogYW55KSB7XG4gICAgICAgIC8vIFRPRE86IFNhdmUgdG8gbG9jYWxzdG9yYWdlIHRoZSBjdXJyZW50IHZvbHVtZVxuICAgIH1cblxuICAgIG9uRXJyb3IoZXZlbnQ6IGFueSkge1xuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgZXJyb3IgbWVzc2FnZXNcbiAgICB9XG5cbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzgyODI0MS83Nzk1MjlcbiAgICBidWZmZXJDaGVjaygpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMSAvIHRoaXMuY2hlY2tJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheVBvcyA9IHRoaXMuY3VycmVudFRpbWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgJiYgdGhpcy5jdXJyZW50UGxheVBvcyA8ICh0aGlzLmxhc3RQbGF5UG9zICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgdGhpcy5pc0J1ZmZlckRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgJiYgdGhpcy5jdXJyZW50UGxheVBvcyA+ICh0aGlzLmxhc3RQbGF5UG9zICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgdGhpcy5pc0J1ZmZlckRldGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1ZmZlck9ic2VydmVyLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcblxuICAgICAgICB0aGlzLmxhc3RQbGF5UG9zID0gdGhpcy5jdXJyZW50UGxheVBvcztcbiAgICB9XG5cbiAgICBzdGFydEJ1ZmZlckNoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uID0gVGltZXJPYnNlcnZhYmxlLmNyZWF0ZSgwLCB0aGlzLmNoZWNrSW50ZXJ2YWwpLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RvcEJ1ZmZlckNoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlck9ic2VydmVyLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICB9XG5cbiAgICBvbkJ1ZmZlckRldGVjdGVkKCkge1xuXG4gICAgfVxufVxuIl19