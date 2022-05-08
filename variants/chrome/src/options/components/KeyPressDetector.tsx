import TextField, { TextFieldProps } from "@mui/material/TextField";
import { KeyboardEvent, useState } from "react";

export function KeyPressDetector(props: TextFieldProps) {
    const [ active, setActive ] = useState(!props.disabled);

    function handleInput(event: KeyboardEvent<HTMLDivElement>) {
        props.onChange({
            target: {
                name: props.name,
                value: event.code
            }
        } as any);

        setActive(false);

        event.preventDefault();
    }

    return <TextField
        {...props}
        value={active ? "Нажмите любую кнопку" : props.value}
        onClick={() => setActive(true)}
        onKeyDown={handleInput}
        onChange={undefined}
        onBlur={() => setActive(false)}
    />;
}