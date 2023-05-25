import * as events from "events";

export interface InputProps{
    value?: string,
    placeholder?: string,
    onChange?: () => events
}