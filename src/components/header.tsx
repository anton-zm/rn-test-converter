import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import config from '../config';
import { MenuIcon } from '../assets/svg/menu';
import moreIcon from '../assets/img/more.png'

export const Header = ({title}:{title: string}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
                <MenuIcon />
                <Text style={styles.title}>{title}</Text>
                <Image source={moreIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: config.mainColor,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 16,   
        color: 'white',
    }
})