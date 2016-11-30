import { ElementRef, SimpleChanges } from "@angular/core";
import { VgAPI } from "../services/vg-api";
export declare class VgHLS {
    private ref;
    API: VgAPI;
    hlsUrl: string;
    vgFor: string;
    target: any;
    hls: any;
    constructor(ref: ElementRef, API: VgAPI);
    onPlayerReady(): void;
    ngOnChanges(changes: SimpleChanges): void;
    createPlayer(): void;
    destroyPlayer(): void;
}
