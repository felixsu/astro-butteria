/**
 * Main exports for all recipe-related interfaces
 */

import type { MediaFile } from "./recipe";

export interface Global {
    id:              number;
    documentId:      string;
    siteName:        string;
    siteDescription: string;
    createdAt:       Date;
    updatedAt:       Date;
    publishedAt:     Date;
    locale:          string;
    menu:            Menu[];
    logo:            MediaFile;
    favicon:         MediaFile;
}

export interface Menu {
    id:   number;
    name: string;
    path: string;
}

export interface DisplayWindow {
    id:                   number;
    documentId:           string;
    name:                 string;
    description:          string;
    isAvailable:          boolean;
    createdAt:            Date;
    updatedAt:            Date;
    publishedAt:          Date;
    prices:               Price[];
    displayMain:          MediaFile;
    physicalInformations: PhysicalInformation[];
}

export interface PhysicalInformation {
    id:       number;
    name:     string;
    ratio:    number;
    weight:   null;
    width:    null;
    length:   null;
    height:   null;
    diameter: number | null;
}

export interface Price {
    id:    number;
    name:  string;
    value: number;
}
