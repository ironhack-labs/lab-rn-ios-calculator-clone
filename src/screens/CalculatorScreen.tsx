import {SafeAreaView, Text, View} from 'react-native';
import {CalculatorStyles} from '../theme';
import {CalculatorContainer} from '../components/CalculatorContainer';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

type ButtonProperties = {
  symbol: string;
  action:
    | 'changeSign'
    | 'clear'
    | 'del'
    | 'onChange'
    | 'changeOperation'
    | 'makeOperation';
  value: string;
  color: string;
  blackSymbol?: boolean;
};

const buttons: ButtonProperties[] = [
  {
    action: 'clear',
    symbol: 'AC',
    value: '',
    color: 'rgb(165, 165, 165)',
    blackSymbol: true,
  },
  {
    action: 'changeSign',
    symbol: '+/-',
    value: '',
    color: 'rgb(165, 165, 165)',
    blackSymbol: true,
  },
  {
    action: 'del',
    symbol: 'del',
    value: '',
    color: 'rgb(165, 165, 165)',
    blackSymbol: true,
  },
  {
    action: 'changeOperation',
    symbol: '/',
    value: '/',
    color: '#ed6024',
  },
  {action: 'onChange', symbol: '7', value: '7', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '8', value: '8', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '9', value: '9', color: 'rgb(51, 51, 51)'},
  {
    action: 'changeOperation',
    symbol: 'x',
    value: '*',
    color: '#ed6024',
  },
  {action: 'onChange', symbol: '4', value: '4', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '5', value: '5', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '6', value: '6', color: 'rgb(51, 51, 51)'},
  {
    action: 'changeOperation',
    symbol: '-',
    value: '-',
    color: '#ed6024',
  },
  {action: 'onChange', symbol: '1', value: '1', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '2', value: '2', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '3', value: '3', color: 'rgb(51, 51, 51)'},
  {
    action: 'changeOperation',
    symbol: '+',
    value: '+',
    color: '#ed6024',
  },
  {action: 'onChange', symbol: '0', value: '0', color: 'rgb(51, 51, 51)'},
  {action: 'onChange', symbol: '.', value: '.', color: 'rgb(51, 51, 51)'},
  {action: 'makeOperation', symbol: '=', value: '', color: '#ed6024'},
];

export const CalculatorScreen = () => {
  const {currentValue, previousValue, ...operations} = useCalculator();

  return (
    <SafeAreaView style={CalculatorStyles.container}>
      <View style={CalculatorStyles.resultsContainer}>
        {previousValue ? (
          <Text style={CalculatorStyles.previousValue}>{previousValue}</Text>
        ) : null}
        <Text style={CalculatorStyles.currentValue}>{currentValue}</Text>
      </View>
      <CalculatorContainer>
        {buttons.map(item => (
          <CalculatorButton
            key={item.symbol}
            isLarge={item.symbol === '0'}
            color={item.color}
            colorText={item.blackSymbol ? 'black' : 'white'}
            onPress={() => operations[item.action](item.value)}>
            {item.symbol}
          </CalculatorButton>
        ))}
      </CalculatorContainer>
    </SafeAreaView>
  );
};
