import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Combobox from './Combobox';
import moment from 'moment';
import classNames from 'classnames';

function noop() {}

function generateOptions(length, disabledOptions, hideOptions) {
  var arr = [];
  for (var value = 0; value < length; value++) {
    if (!hideOptions || !hideOptions.includes(value)) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

    _this.onChange = function (newValue) {
      _this.setState({ value: newValue });
      _this.props.onChange(newValue);
    };

    _this.onCurrentSelectPanelChange = function (currentSelectPanel) {
      _this.setState({ currentSelectPanel: currentSelectPanel });
    };

    _this.state = {
      value: props.value,
      selectionRange: []
    };
    return _this;
  }

  _createClass(Panel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;
      if (value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: 'close',


    // https://github.com/ant-design/ant-design/issues/5829
    value: function close() {
      this.props.onEsc();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          placeholder = _props.placeholder,
          disabledHours = _props.disabledHours,
          disabledMinutes = _props.disabledMinutes,
          disabledSeconds = _props.disabledSeconds,
          allowEmpty = _props.allowEmpty,
          showHour = _props.showHour,
          showMinute = _props.showMinute,
          showSecond = _props.showSecond,
          format = _props.format,
          defaultOpenValue = _props.defaultOpenValue,
          clearText = _props.clearText,
          onEsc = _props.onEsc,
          addon = _props.addon,
          use12Hours = _props.use12Hours,
          onClear = _props.onClear,
          hideHours = _props.hideHours,
          hideMinutes = _props.hideMinutes,
          hideSeconds = _props.hideSeconds;
      var _state = this.state,
          value = _state.value,
          currentSelectPanel = _state.currentSelectPanel;

      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
      var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
      var hideHoursOptions = hideHours();
      var hideMinutesOptions = hideMinutes(value ? value.hour() : null);
      var hideSecondsOptions = hideSeconds(value ? value.hour() : null, value ? value.minute() : null);

      var hourOptions = generateOptions(24, disabledHourOptions, hideHoursOptions);
      var minuteOptions = generateOptions(60, disabledMinuteOptions, hideMinutesOptions);
      var secondOptions = generateOptions(60, disabledSecondOptions, hideSecondsOptions);

      return React.createElement(
        'div',
        { className: classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + '-inner', true), _defineProperty(_classNames, className, !!className), _classNames)) },
        React.createElement(Header, {
          clearText: clearText,
          prefixCls: prefixCls,
          defaultOpenValue: defaultOpenValue,
          value: value,
          currentSelectPanel: currentSelectPanel,
          onEsc: onEsc,
          format: format,
          placeholder: placeholder,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onChange: this.onChange,
          onClear: onClear,
          allowEmpty: allowEmpty
        }),
        React.createElement(Combobox, {
          prefixCls: prefixCls,
          value: value,
          defaultOpenValue: defaultOpenValue,
          format: format,
          onChange: this.onChange,
          showHour: showHour,
          showMinute: showMinute,
          showSecond: showSecond,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
          use12Hours: use12Hours
        }),
        addon(this)
      );
    }
  }]);

  return Panel;
}(Component);

Panel.propTypes = {
  clearText: PropTypes.string,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  defaultOpenValue: PropTypes.object,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  hideHours: PropTypes.func,
  hideMinutes: PropTypes.func,
  hideSeconds: PropTypes.func,
  onChange: PropTypes.func,
  onEsc: PropTypes.func,
  allowEmpty: PropTypes.bool,
  showHour: PropTypes.bool,
  showMinute: PropTypes.bool,
  showSecond: PropTypes.bool,
  onClear: PropTypes.func,
  use12Hours: PropTypes.bool,
  addon: PropTypes.func
};
Panel.defaultProps = {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop,
  onClear: noop,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  defaultOpenValue: moment(),
  use12Hours: false,
  addon: noop
};


export default Panel;