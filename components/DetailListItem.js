import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utility/color'
import { StyleSheet, Text, View } from 'react-native';

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <Icon name={icon} size={24} style={{ color: colors.black, marginRight: 20 }} />
          )}

          <View style={styles.contentContainer}>
            <Text style={[styles.title]}>{title}</Text>
            {subtitle && <Text style={styles.subTitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  )
}

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

const styles = StyleSheet.create({

  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: 'row',
    padding: 16,
    borderCustomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },

})

export default DetailListItem

