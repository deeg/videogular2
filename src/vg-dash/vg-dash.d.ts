import { ElementRef, SimpleChanges } from "@angular/core";
import { VgAPI } from "../services/vg-api";
export declare class VgDASH {
    private ref;
    API: VgAPI;
    dashUrl: string;
    vgFor: string;
    target: any;
    player: any;
    constructor(ref: ElementRef, API: VgAPI);
    onPlayerReady(): void;
    ngOnChanges(changes: SimpleChanges): void;
    createPlayer(): void;
    destroyPlayer(): void;
}
