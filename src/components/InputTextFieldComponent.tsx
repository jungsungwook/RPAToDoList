import styled from "styled-components";

const InputTextField = styled.input`
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 0rem;
`;

const InputTextFieldComponent = (props: any) => {
    return (
        <InputTextField
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    );
};

export default InputTextFieldComponent;