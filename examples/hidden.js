/* eslint no-console:0 */

import 'rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

function onChange(value) {
  console.log(value && value.format(str));
}

function generateOptions(length, excludedOptions) {
  const arr = [];
  for (let value = 0; value < length; value++) {
    if (excludedOptions.indexOf(value) < 0) {
      arr.push(value);
    }
  }
  return arr;
}

function hideHours() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
}

function hideMinutes(h) {
  switch (h) {
    case 9:
      return generateOptions(60, [30]);
    case 21:
      return generateOptions(60, [0]);
    default:
      return generateOptions(60, [0, 30]);
  }
}

function hideSeconds(h, m) {
  return [h + m % 60];
}

ReactDom.render(
  <TimePicker
    format={str}
    showSecond={showSecond}
    // use to control utfOffset, locale, default open value
    defaultOpenValue={moment()}
    className="xxx"
    onChange={onChange}
    hideHours={hideHours}
    hideMinutes={hideMinutes}
    hideSeconds={hideSeconds}
  />,
  document.getElementById('__react-content')
);
