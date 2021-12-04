import React from 'react'
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const getOptions = (arr: string[]) => {
    return arr.map(e => {
        return {
            label: e,
            value: e
        }
    })
}

export const Select = ({
        data,
        styles, 
        onChange, 
        value
    }
    :
    {
        data: string[],
        styles?: any,
        onChange:(v: any) => void,
        value: string
    }) => {
    return (
        <>
            <RNPickerSelect
                onValueChange={(value) => onChange(value)}
                value={value}
                placeholder={{}}
                items={getOptions(data)}
                style={styles}
            />
        </>
    )
}

