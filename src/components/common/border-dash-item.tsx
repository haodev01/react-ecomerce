import React, {useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  axis?: 'horizontal';
  dashGap?: number;
  dashLength?: number;
  dashThickness?: number;
  dashColor?: string;
  dashStyle?: any;
  style?: any;
  classWind?: string;
}
export const BorderDashItem = ({
  axis = 'horizontal',
  dashGap = 2,
  dashLength = 1,
  dashThickness = 1,
  dashColor = 'rgba(34, 34, 34, 0.1)',
  dashStyle,
  style,
  classWind = '',
}: Props) => {
  const [lineLength, setLineLength] = useState(0);
  const isRow = axis === 'horizontal';
  const numOfDashes = Math.ceil(lineLength / (dashGap + dashLength));

  const dashStyles = useMemo(
    () => ({
      width: isRow ? dashLength : dashThickness,
      height: isRow ? dashThickness : dashLength,
      marginRight: isRow ? dashGap : 0,
      marginBottom: isRow ? 0 : dashGap,
      backgroundColor: dashColor,
    }),
    [dashColor, dashGap, dashLength, dashThickness, isRow],
  );

  return (
    <View
      onLayout={event => {
        const {width, height} = event.nativeEvent.layout;
        setLineLength(isRow ? width : height);
      }}
      className={classWind}
      style={[style, isRow ? styles.row : styles.column]}>
      {[...Array(numOfDashes)].map((_, i) => {
        return <View key={i} style={[dashStyles, dashStyle]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});
