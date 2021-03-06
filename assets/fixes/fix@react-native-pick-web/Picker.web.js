function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * 
 *
 */
import * as React from 'react';
import * as ReactNativeWeb from 'react-native-web';
import { forwardRef, useRef } from 'react';
import PickerItem from './PickerItem';
const createElement = ReactNativeWeb.unstable_createElement || ReactNativeWeb.unstable_createElement;
const Select = /*#__PURE__*/forwardRef((props, forwardedRef) => createElement('select', props));
const Picker = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    enabled,
    onValueChange,
    selectedValue,
    itemStyle,
    mode,
    prompt,
    dropdownIconColor,
    ...other
  } = props;
  const hostRef = useRef(null);
  const handleChange = React.useCallback(e => {
    const {
      selectedIndex,
      value
    } = e.target;

    if (onValueChange) {
      onValueChange(value, selectedIndex);
    }
  }, [onValueChange]);
  return (
    /*#__PURE__*/
    // $FlowFixMe
    React.createElement(Select, _extends({
      disabled: enabled === false ? true : undefined,
      onChange: handleChange,
      ref: hostRef,
      value: selectedValue
    }, other))
  );
}); // $FlowFixMe

Picker.Item = PickerItem;
export default Picker;
//# sourceMappingURL=Picker.web.js.map