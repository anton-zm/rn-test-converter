import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

const getOptions = (arr: any[]) => {
    return arr.map(e => {
        return {
            label: '',
            value: ''
        }
    })
}

export const Select = ({data, onChange}:{data: any[], onChange:(v: any) => void}) => {
    return (
        <>
            <RNPickerSelect
                onValueChange={(value) => onChange(value)}
                value='football'
                placeholder={{}}
                items={getOptions(data)}
            />
        </>
    )
}