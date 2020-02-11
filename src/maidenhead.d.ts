declare module "maidenhead" {
    export default class Maidenhead {
        constructor(lat?: number, lon?: number, precision?: number);

        static valid(mlocation: string): boolean;

        static toLatLon(mlocation: string): [number, number];

        distanceTo(endLatLon: Maidenhead, unit: "km" | "m"): number;

        bearingTo(toHeading: Maidenhead, compassBearing: false): number;

        bearingTo(toHeading: Maidenhead, compassBearing: true): string;

        lat: number;

        lon: number;

        precision: number;

        locator: string;
    }
}