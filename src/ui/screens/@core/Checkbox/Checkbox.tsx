import React from 'react';
import * as styled from './Checkbox.styled';

type Props = {
    id: string | undefined,
    label: string,
    checked: boolean,
    onChange: (val: any) => void
};


export const Checkbox: React.FC<Props> = ({
    id, label, checked, onChange, ...props
}) => {
    return (
        <styled.Wrapper className='custom-checkbox-container'>
            {label}
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <span className='custom-checkmark'></span>
        </styled.Wrapper>
    )
}