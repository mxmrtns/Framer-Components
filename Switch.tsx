import * as React from "react"
import { Frame, ControlType, addPropertyControls } from "framer"

export function Switch(props) {
    const [state, setState] = React.useState({
        isOn: props.isOn,
    })

    const flipSwitch = () => {
        let stateRefactor = !state.isOn
        props.onValueChange(stateRefactor)
        setState({
            isOn: stateRefactor,
        })
    }

    React.useEffect(() => {
        if (state.isOn !== props.isOn) {
            setState({
                isOn: props.isOn,
            })
        }
    }, [props.isOn])

    return (
        <Frame
            height={50}
            width={80}
            center
            radius={25}
            onTap={flipSwitch}
            variants={{
                off: { background: "#BBBBBB" },
                on: { background: "#0070DF" },
            }}
            initial={state.isOn ? "on" : "off"}
            animate={state.isOn ? "on" : "off"}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
        >
            <Frame
                size={46}
                top={2}
                left={2}
                radius={"100%"}
                background="#FFFFFF"
                variants={{
                    off: { x: 0 },
                    on: { x: 30 },
                }}
            />
        </Frame>
    )
}

Switch.defaultProps = {
    isOn: false,
    onValueChange: (isOn: boolean) => null,
}

addPropertyControls(Switch, {
    isOn: {
        type: ControlType.Boolean,
        title: "On",
        defaultValue: false,
    },
})
