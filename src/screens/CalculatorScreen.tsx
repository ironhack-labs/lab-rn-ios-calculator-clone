import { View, Text, StyleProp, ViewStyle } from 'react-native';
import styles from '../theme/CalculatorScreen.styles';
import CalculatorContainer from '../components/CalculatorContainer';
import CalculatorButton, {
  CalculatorButtonT,
} from '../components/CalculatorButton';

type PropsT = {
  value: string;
  del: () => void;
  clear: () => void;
  insertDot: () => void;
  prevValue: string | null;
  handleResult: () => void;
  handleToggleNegative: () => void;
  handleNumber: (number: number) => void;
  handleOperation: (operator: string) => void;
};

const Row = ({ children }: { children: any }) => (
  <View style={styles.row}>{children}</View>
);

const CalculatorScreen = (props: PropsT): JSX.Element => {
  const buttons: Array<Array<CalculatorButtonT>> = [
    [
      {
        text: 'AC',
        color: styles.btnSecondary,
        colorText: styles.textSecondary,
        onPress: props.clear,
      },
      {
        text: '+/-',
        color: styles.btnSecondary,
        colorText: styles.textSecondary,
        onPress: props.handleToggleNegative,
      },
      {
        text: 'del',
        color: styles.btnSecondary,
        colorText: styles.textSecondary,
        onPress: props.del,
      },
      {
        text: '/',
        color: styles.btnArithmetic,
        onPress: () => props.handleOperation('/'),
      },
    ],
    [
      { text: '7', onPress: () => props.handleNumber(7) },
      { text: '8', onPress: () => props.handleNumber(8) },
      { text: '9', onPress: () => props.handleNumber(9) },
      {
        text: 'X',
        color: styles.btnArithmetic,
        onPress: () => props.handleOperation('*'),
      },
    ],
    [
      { text: '4', onPress: () => props.handleNumber(4) },
      { text: '5', onPress: () => props.handleNumber(5) },
      { text: '6', onPress: () => props.handleNumber(6) },
      {
        text: '-',
        color: styles.btnArithmetic,
        onPress: () => props.handleOperation('-'),
      },
    ],
    [
      { text: '1', onPress: () => props.handleNumber(1) },
      { text: '2', onPress: () => props.handleNumber(2) },
      { text: '3', onPress: () => props.handleNumber(3) },
      {
        text: '+',
        color: styles.btnArithmetic,
        onPress: () => props.handleOperation('+'),
      },
    ],
    [
      { text: '0', size: 'double', onPress: () => props.handleNumber(0) },
      { text: '.', onPress: props.insertDot },
      {
        text: '=',
        color: styles.btnArithmetic,
        onPress: props.handleResult,
      },
    ],
  ];

  return (
    <View>
      <Text style={styles.prevValue}>{props.prevValue || ''}</Text>
      <Text style={styles.computedValue}>{props.value}</Text>
      <CalculatorContainer>
        {buttons.map((row, index) => (
          <Row key={`row-${index}`}>
            {row.map((button: CalculatorButtonT, index) => (
              <CalculatorButton
                key={`btn-${index}`}
                size={button?.size}
                text={button.text}
                color={button.color}
                onPress={button.onPress}
                colorText={button.colorText as StyleProp<ViewStyle>}
              />
            ))}
          </Row>
        ))}
      </CalculatorContainer>
    </View>
  );
};

export default CalculatorScreen;
