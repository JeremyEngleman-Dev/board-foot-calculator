import { FunctionComponent as FC, MouseEvent } from "react";

interface ButtonProps {
    name: string
    className: string
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void
    editMode: boolean
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <button className={props.className} name={props.name} onClick={props.handleClick} hidden={props.editMode}>{props.name}</button>
    )
}

export default Button;