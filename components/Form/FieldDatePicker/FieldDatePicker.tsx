import React, {
  ChangeEvent,
  forwardRef,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { DayPicker, DayPickerSingleProps } from 'react-day-picker';
import { usePopper } from 'react-popper';
import clsx from 'clsx';
import IconCalendar from '../../Icon/24/IconCalendar';
import FieldInput from '../FieldInput';
import { FieldInputProps } from '../FieldInput/FieldInput.types';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import classes from './FieldDatePicker.module.scss';
import dayPickerStyles from './dayPickerStyles';
import { DatePickerInput } from './DatePickerInput';
import { formatDate, parseDate } from '../../../utils/date';

type FieldDatePickerProps = FieldInputProps<'input'> & {
  format?: string;
  options?: Partial<DayPickerSingleProps>;
};

export const FieldDatePicker = forwardRef((props: FieldDatePickerProps, ref: MutableRefObject<HTMLInputElement>) => {
  const { format, options = {}, value, onChange, onFocus, ...inputProps } = props;

  if (ref && typeof ref !== 'function') {
    throw new Error('Consider using a function instead of object for the Ref');
  }

  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const [popperRef, setPopperRef] = useState<HTMLInputElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const updatePopperRef = useCallback(
    (ele) => {
      setPopperRef(ele);
      if (ref) {
        // @ts-ignore
        ref(ele);
      }
    },
    [setPopperRef, ref]
  );

  const popper = usePopper(popperRef, popperElement, {
    placement: 'top-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          // these magic numbers came here because we calculate the offset from the input element
          offset: [-12, 14]
        }
      }
    ]
  });

  useOnClickOutside(widgetRef, () => {
    setIsPopperOpen(false);
  });

  const handleFocus = useCallback(
    (e) => {
      setIsPopperOpen(true);

      if (onFocus) {
        onFocus(e);
      }
    },
    [setIsPopperOpen, onFocus]
  );

  const handleDaySelect = useCallback(
    (date: Date) => {
      onChange({
        target: {
          value: formatDate(date, format)
        }
      } as ChangeEvent<HTMLInputElement>);
      setIsPopperOpen(false);
    },
    [format, onChange, setIsPopperOpen]
  );

  const selectedDate = useMemo(() => parseDate(value, format), [format, value]);

  const handleChange = useCallback(
    (v) => {
      onChange({
        target: {
          value: v
        }
      } as ChangeEvent<HTMLInputElement>);
    },
    [onChange]
  );

  useEffect(() => {
    function listener(e) {
      const key = e.which;

      if (key === 9 || key === 27) {
        setIsPopperOpen(false);
      }
    }

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [setIsPopperOpen]);

  return (
    <div ref={widgetRef} className={classes.root}>
      <DatePickerInput
        ref={updatePopperRef}
        value={value}
        onFocus={handleFocus}
        onChange={handleChange}
        inputComponent={FieldInput}
        renderAddon={({ className, disabled }) => (
          <div className={clsx(className, disabled ? classes.disabledAddon : classes.addon)}>
            <IconCalendar />
          </div>
        )}
        {...inputProps}
      />
      {isPopperOpen && (
        <div
          className={classes.popper}
          style={popper.styles.popper}
          {...popper.attributes.popper}
          ref={setPopperElement}
          role="dialog"
        >
          <DayPicker
            classNames={dayPickerStyles}
            mode="single"
            defaultMonth={selectedDate}
            selected={selectedDate}
            onSelect={handleDaySelect}
            weekStartsOn={1}
            {...options}
          />
        </div>
      )}
    </div>
  );
});

if (process.env.NODE_ENV === 'development') {
  FieldDatePicker.displayName = 'FieldDatePicker';
}
