import { createElement, useEffect } from "react";

import { PageEventsNewProps } from "../typings/PageEventsNewProps";
import { useNavigation } from "@react-navigation/native";

export function PageEventsNew(props: PageEventsNewProps<any>): null {
    const { onBlur, onFocus } = props;

    const navigation = useNavigation();

    useEffect(() => {
        if (!onFocus) {
            return;
        }
        return navigation.addListener("focus", () => {
            if (onFocus.canExecute && !onFocus.isExecuting) {
                onFocus.execute();
            }
        });
    }, [navigation, onFocus]);

    useEffect(() => {
        if (!onBlur) {
            return;
        }
        return navigation.addListener("blur", () => {
            if (onBlur.canExecute && !onBlur.isExecuting) {
                onBlur.execute();
            }
        });
    }, [navigation, onBlur]);

    return null;
}
