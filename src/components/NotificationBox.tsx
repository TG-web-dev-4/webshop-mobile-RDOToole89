import { View, Text, StyleSheet } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Ionicons } from '@expo/vector-icons';

interface INotificationText {
  notificationText: string;
}

export const NotificationBox = ({ notificationText }: INotificationText) => {
  return (
    <View style={[styles.notificationBox, GLOBAL.SHADOWS.shadowLight]}>
      <View style={GLOBAL.LAYOUT.rowCenter}>
        <Ionicons name='checkmark' size={24} color={TYPOGRAPHY.COLOR.Success} />
        <Text
          style={[
            TYPOGRAPHY.FONT.subtitle,
            { color: TYPOGRAPHY.COLOR.Success },
          ]}>
          {notificationText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBox: {
    position: 'relative',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: GLOBAL.SPACING.lg,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
