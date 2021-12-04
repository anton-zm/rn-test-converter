import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Clock } from '../assets/svg/clock';
import { Convert } from '../assets/svg/convert';

const FooterMenuItem = ({text, icon, path}:{text: string, icon: JSX.Element, path: any}) => {
    return (
        <View style={styles.menu_item_wrapper}>
            <TouchableOpacity style={styles.menu_item} onPress={() => {}}>
                {icon}
                <Text style={styles.menu_link}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const Footer = () => {
    return (
        <View style={styles.wrapper}>
            <FooterMenuItem text='Конвертер' icon={<Clock />} path='' />
            <FooterMenuItem text='История' icon={<Convert />} path='' />
        </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#4c4ff1',
    paddingVertical: 10,
    flexDirection: 'row'

  },
  menu_item_wrapper: {
    justifyContent:'center',
    alignItems: 'center',
    width: '50%'
  },
  menu_item: {
    alignItems: 'center'
  },
  menu_link: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,   
    color: 'white',
    marginTop: 5
  }
});