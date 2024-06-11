/**
 * This file was generated from PageEventsNew.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface PageEventsNewProps<Style> {
    name: string;
    style: Style[];
    onFocus?: ActionValue;
    onBlur?: ActionValue;
}

export interface PageEventsNewPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    onFocus: {} | null;
    onBlur: {} | null;
}
