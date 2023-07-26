import React, {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

import {commonGap} from '../theme/global.styles';

type ButtonsFileProps = PropsWithChildren<{}>;

const ButtonsFile = ({children}: ButtonsFileProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default ButtonsFile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    gap: commonGap,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
