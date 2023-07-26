export interface CalculatorButtonProps {
    color?: string,
    rowSize?: number,
    children: number | string,
    colorText?: string,
    size?: number,
    onPress?: () => void
}