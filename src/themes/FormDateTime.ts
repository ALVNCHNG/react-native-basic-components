import { FormDateTimeStyles } from '../FormDateTime';
import { DefaultColor, DefaultFontSize } from './default';

export const DefaultFormDateTimeTheme: Partial<FormDateTimeStyles> = {
  style: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    color: DefaultColor.TEXT,
    fontSize: DefaultFontSize.INPUT,
  },
  filledStyle: {
    color: DefaultColor.PRIMARY,
  },
  invalidStyle: {},
};

const ThemeFormDateTime: FormDateTimeStyles = {
  style: DefaultFormDateTimeTheme.style,
  filledStyle: DefaultFormDateTimeTheme.filledStyle,
  invalidStyle: DefaultFormDateTimeTheme.invalidStyle,
};

export default ThemeFormDateTime;
