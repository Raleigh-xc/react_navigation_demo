import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class IconWithBadge extends React.Component {
  render() {
    const {name, color, size, count} = this.props;
    return (
      <View style={styles.outer}>
        <Icon name={name} color={color} size={size} />
        <View style={styles.inner}>
          <Text style={styles.text}>{count}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    height: 25,
    width: 25,
  },
  inner: {
    position: 'absolute',
    right: -6,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default IconWithBadge;
