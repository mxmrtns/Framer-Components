import { Override, Data } from "framer"

const data = Data({
    theme: "day",
})

export function ThemeSwitch(props): Override {
    return {
        isOn: data.theme === "night",
        onValueChange: (isOn) => {
            data.theme = isOn ? "night" : "day"
        },
    }
}

export function DeviceFrame(props): Override {
    return {
        variants: {
            day: {
                background: "#eee",
            },
            night: {
                background: "#222",
            },
        },
        initial: data.theme,
        animate: data.theme,
    }
}
