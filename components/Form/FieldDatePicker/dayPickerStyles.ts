import mergeWith from 'lodash/mergeWith';
import { ClassNames } from 'react-day-picker';
import baseClasses from 'react-day-picker/dist/style.module.css';
import clsx from 'clsx';
import classes from './DayPicker.module.scss';

const classNames: ClassNames = mergeWith({}, baseClasses, classes, (objValue, srcValue) => clsx(objValue, srcValue));

export default classNames;
