import React, { useState, useEffect, useRef } from 'react';
import { createGooberGetter, ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import { injectMotion } from '@meiuca/motion-tokens/helpers';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var fontFamilyHighlight = "'Archivo'";
var fontWeightBold = "700";
var fontWeightMedium = "600";
var fontWeightRegular = "400";
var brandColorPrimaryPure = "#000000";
var brandColorPrimaryDark = "#292929";
var brandColorSecondaryPure = "#1474FF";
var highlightColorPure = "#F673AD";
var neutralColorLowPure = "#000000";
var neutralColorLowMedium = "#666666";
var neutralColorHighPure = "#FFFFFF";
var neutralColorHighMedium = "#E0E0E0";
var neutralColorHighDark = "#CCCCCC";
var feedbackColorHelperPure = "#FF8A00";
var feedbackColorHelperLight = "#FFE3C2";
var feedbackColorHelperDark = "#7A4200";

/**
 * Do not edit directly
 * Generated on Tue, 18 May 2021 13:26:26 GMT
 */
var lineHeightDefault = "100%";
var lineHeightSm = "120%";
var lineHeightMd = "133%";
var lineHeightLg = "150%";
var fontSizeXxs = "14px";
var fontSizeXs = "16px";
var fontSizeSm = "20px";
var fontSizeMd = "24px";
var fontSizeLg = "32px";
var fontSizeXl = "40px";
var fontSizeXxl = "48px";
var fontSizeXxxl = "64px";
var fontSizeGiant = "96px";
var borderRadiusSm = "8px";
var borderRadiusMd = "16px";
var borderWidthNone = "0px";
var borderWidthHairline = "1px";
var borderWidthThin = "2px";
var opacityLevelSemiopaque = "0.72";
var opacityLevelIntense = "0.64";
var opacityLevelMedium = "0.32";
var opacityLevelLight = "0.16";
var opacityLevelSemitransparent = "0.08";
var shadowLevel3Stack = "0px 16px 32px";
var spacingSizeQuarck = "4px";
var spacingSizeNano = "8px";
var spacingSizeXxxs = "16px";
var spacingSizeXxs = "24px";
var spacingSizeMd = "48px";
var spacingInsetSizeSmStack = "24px 24px";

var buttonStyleType = {
  motion: injectMotion('switch-slow'),
  button: {
    borderRadius: borderRadiusSm,
    outlineColor: highlightColorPure,
    fontSize: fontSizeXs,
    fontWeight: fontWeightBold,
    fontFamily: fontFamilyHighlight,
    height: spacingSizeMd,
    sidePadding: spacingSizeXxs
  },
  buttonPrimary: {
    color: neutralColorHighPure,
    background: brandColorPrimaryPure,
    backgroundHover: neutralColorLowPure,
    opacityBackground: opacityLevelSemiopaque
  },
  buttonPrimaryOnColor: {
    color: neutralColorHighPure,
    background: brandColorPrimaryPure,
    backgroundHover: neutralColorLowPure,
    opacityBackground: opacityLevelIntense
  },
  buttonSecondary: {
    color: brandColorPrimaryPure,
    borderColor: brandColorPrimaryPure,
    borderWidth: borderWidthThin,
    backgroundHover: neutralColorLowPure,
    opacityBackground: opacityLevelLight
  },
  buttonSecondaryOnColor: {
    color: neutralColorHighPure,
    backgroundHover: neutralColorHighPure,
    opacityBackground: opacityLevelLight
  },
  icon: {
    padding: spacingSizeNano
  },
  disabled: {
    backgroundColor: neutralColorLowPure,
    opacityBackground: opacityLevelSemitransparent,
    color: neutralColorLowPure,
    opacityColor: opacityLevelMedium
  },
  onColorDisabled: {
    backgroundColor: neutralColorLowPure,
    opacityBackground: opacityLevelSemiopaque,
    color: neutralColorLowPure,
    opacityColor: opacityLevelMedium
  },
  disabledSecondary: {
    backgroundColor: neutralColorLowPure,
    opacityBackground: opacityLevelSemitransparent,
    color: neutralColorLowPure,
    opacityColor: opacityLevelMedium
  },
  disabledSecondaryOnColor: {
    backgroundColor: neutralColorHighPure,
    opacityBackground: opacityLevelLight,
    color: neutralColorHighPure,
    opacityColor: opacityLevelMedium,
    shapeColor: neutralColorHighPure,
    shapeOpacity: opacityLevelMedium
  }
};

var namespace = 'jota';

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
  }

  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}

var _templateObject$8;
var style$8 = createGooberGetter(buttonStyleType)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  &.", "-Button {\n    height: ", ";\n    padding: 0 ", ";\n    border-radius: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    border: 0;\n    min-width: 160px;\n    font-weight: ", ";\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    .", "-Icon {\n      margin-right: ", ";\n    }\n    &[aria-disabled='true'] {\n      background-color: ", ";\n      color: ", ";\n      pointer-events: none;\n      border: transparent;\n    }\n    &--primary {\n      background-color: ", ";\n      color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n      &:focus,\n      &:active {\n        outline-offset: 1px;\n        background-color: ", ";\n        outline-color: ", ";\n      }\n      &-onColor {\n        background-color: ", ";\n        color: ", ";\n        &:hover {\n          background-color: ", ";\n        }\n        &:focus,\n        &:active {\n          outline-offset: 1px;\n          outline-color: ", ";\n        }\n      }\n    }\n    &--secondary {\n      background-color: transparent;\n      color: ", ";\n      border: ", " ", " solid;\n      &:hover {\n        background-color: ", ";\n        color: ", ";\n      }\n      &:focus,\n      &:active {\n        outline-color: ", ";\n        outline-offset: 1px;\n      }\n      &[aria-disabled='true'] {\n        background-color: ", ";\n        color: $", ";\n        pointer-events: none;\n        border: transparent;\n      }\n      &-onColor {\n        background-color: transparent;\n        color: ", ";\n        border-color: ", ";\n        &:hover {\n          background-color: ", ";\n          color: ", ";\n        }\n        &[aria-disabled='true'] {\n          background-color: ", ";\n          color: ", ";\n          pointer-events: none;\n          border: transparent;\n          ", "-icon {\n            color: ", ";\n          }\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var button = _ref.button;
  return button.height;
}, function (_ref2) {
  var button = _ref2.button;
  return button.sidePadding;
}, function (_ref3) {
  var button = _ref3.button;
  return button.borderRadius;
}, function (_ref4) {
  var button = _ref4.button;
  return button.fontSize;
}, function (_ref5) {
  var button = _ref5.button;
  return button.fontFamily;
}, function (_ref6) {
  var button = _ref6.button;
  return button.fontWeight;
}, namespace, function (_ref7) {
  var icon = _ref7.icon;
  return icon.padding;
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return hexToRGB(disabled.backgroundColor, disabled.opacityBackground);
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return hexToRGB(disabled.color, disabled.opacityColor);
}, function (_ref10) {
  var buttonPrimary = _ref10.buttonPrimary;
  return buttonPrimary.background;
}, function (_ref11) {
  var buttonPrimary = _ref11.buttonPrimary;
  return buttonPrimary.color;
}, function (_ref12) {
  var buttonPrimary = _ref12.buttonPrimary;
  return hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground);
}, function (_ref13) {
  var buttonPrimary = _ref13.buttonPrimary;
  return hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground);
}, function (_ref14) {
  var button = _ref14.button;
  return button.outlineColor;
}, function (_ref15) {
  var buttonPrimaryOnColor = _ref15.buttonPrimaryOnColor;
  return buttonPrimaryOnColor.background;
}, function (_ref16) {
  var buttonPrimaryOnColor = _ref16.buttonPrimaryOnColor;
  return buttonPrimaryOnColor.color;
}, function (_ref17) {
  var buttonPrimaryOnColor = _ref17.buttonPrimaryOnColor;
  return hexToRGB(buttonPrimaryOnColor.backgroundHover, buttonPrimaryOnColor.opacityBackground);
}, function (_ref18) {
  var button = _ref18.button;
  return button.outlineColor;
}, function (_ref19) {
  var buttonSecondary = _ref19.buttonSecondary;
  return buttonSecondary.color;
}, function (_ref20) {
  var buttonSecondary = _ref20.buttonSecondary;
  return buttonSecondary.borderColor;
}, function (_ref21) {
  var buttonSecondary = _ref21.buttonSecondary;
  return buttonSecondary.borderWidth;
}, function (_ref22) {
  var buttonSecondary = _ref22.buttonSecondary;
  return hexToRGB(buttonSecondary.backgroundHover, buttonSecondary.opacityBackground);
}, function (_ref23) {
  var buttonSecondary = _ref23.buttonSecondary;
  return buttonSecondary.color;
}, function (_ref24) {
  var button = _ref24.button;
  return button.outlineColor;
}, function (_ref25) {
  var disabledSecondary = _ref25.disabledSecondary;
  return hexToRGB(disabledSecondary.backgroundColor, disabledSecondary.opacityBackground);
}, function (_ref26) {
  var disabledSecondary = _ref26.disabledSecondary;
  return hexToRGB(disabledSecondary.color, disabledSecondary.opacityColor);
}, function (_ref27) {
  var buttonSecondaryOnColor = _ref27.buttonSecondaryOnColor;
  return buttonSecondaryOnColor.color;
}, function (_ref28) {
  var buttonSecondaryOnColor = _ref28.buttonSecondaryOnColor;
  return buttonSecondaryOnColor.color;
}, function (_ref29) {
  var buttonSecondaryOnColor = _ref29.buttonSecondaryOnColor;
  return hexToRGB(buttonSecondaryOnColor.backgroundHover, buttonSecondaryOnColor.opacityBackground);
}, function (_ref30) {
  var buttonSecondaryOnColor = _ref30.buttonSecondaryOnColor;
  return buttonSecondaryOnColor.color;
}, function (_ref31) {
  var disabledSecondaryOnColor = _ref31.disabledSecondaryOnColor;
  return hexToRGB(disabledSecondaryOnColor.backgroundColor, disabledSecondaryOnColor.opacityBackground);
}, function (_ref32) {
  var disabledSecondaryOnColor = _ref32.disabledSecondaryOnColor;
  return hexToRGB(disabledSecondaryOnColor.shapeColor, disabledSecondaryOnColor.shapeOpacity);
}, namespace, function (_ref33) {
  var disabledSecondaryOnColor = _ref33.disabledSecondaryOnColor;
  return hexToRGB(disabledSecondaryOnColor.shapeColor, disabledSecondaryOnColor.shapeOpacity);
});

var iconStyleType = {
  motion: injectMotion('switch-fast'),
  padding: {
    small: '2px',
    large: spacingSizeQuarck
  }
};

var _templateObject$7;
var style$7 = createGooberGetter(iconStyleType)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  &.", "-Icon{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: currentColor;\n    width: fit-content;\n    max-width: 40px;\n    box-sizing: border-box;\n    padding: ", ";\n\n    &--large{\n        padding:  ", ";\n    }\n  }\n"])), namespace, function (context) {
  return context.padding.small;
}, function (context) {
  return context.padding.large;
});

if (!document.head.querySelector('#jota-icons')) {
  var iconsLink = document.createElement('link');
  iconsLink.id = 'jota-icons';
  iconsLink.rel = 'stylesheet';
  iconsLink.href = 'https://s3.amazonaws.com/jota-icons.meiuca.design/jota-icons-1.0.0.css';
  document.head.appendChild(iconsLink);
}

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size;
  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Icon"),
    styles: style$7
  }, /*#__PURE__*/React.createElement("i", {
    className: "".concat(namespace, "-Icon ").concat(namespace, "-Icon-").concat(icon, " ").concat(namespace, "-Icon--").concat(size)
  }));
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string
};

function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconType = _ref.iconType,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      disabled = _ref.disabled,
      onColor = _ref.onColor,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-button"),
    styles: style$8
  }, /*#__PURE__*/React.createElement("button", {
    part: "button",
    className: "".concat(namespace, "-Button ").concat(namespace, "-Button--").concat(type, " \n        ").concat(onColor ? "".concat(namespace, "-Button--").concat(type, "-onColor") : '', "\n        ").concat(namespace, "-Button--icon"),
    "aria-disabled": !!disabled,
    onClick: handleClick
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    icon: iconType,
    size: "medium"
  }) : undefined, label));
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  type: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  disabled: PropTypes.bool,
  onColor: PropTypes.bool,
  handleClick: PropTypes.func
};

var cardbaseStyleType = {
  motion: injectMotion('expand-small', [':hover']),
  fill: neutralColorHighPure,
  borderRadius: borderRadiusMd,
  borderWidth: borderWidthHairline,
  padding: spacingInsetSizeSmStack,
  outlineWidth: borderWidthThin,
  outlineColor: highlightColorPure,
  stroke: {
    color: neutralColorLowPure,
    opacity: opacityLevelSemitransparent
  },
  hover: {
    boxShadowLevel: shadowLevel3Stack,
    boxShadowColor: neutralColorHighMedium,
    onColor: {
      boxShadowColor: neutralColorLowPure,
      boxShadowOpacity: opacityLevelLight
    }
  },
  onColor: {
    fill: neutralColorHighPure
  }
};

var _templateObject$6;
var style$6 = createGooberGetter(cardbaseStyleType)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  &.", "-Cardbase {\n    background: ", ";\n\n    border-radius: ", ";\n    padding: ", ";\n    width: 100%;\n    height: 100%;\n    min-height: 380px;\n    overflow: hidden;\n    box-sizing: border-box;\n\n    -webkit-box-shadow: ", ";\n    -moz-box-shadow: ", ";\n    box-shadow: ", ";\n\n    &:focus {\n      outline: ", ";\n    }\n\n    &--onColor {\n      background: ", ";\n    }\n    &--noPadding {\n      padding: 0;\n    }\n\n    @media (min-width: 1024px) {\n      &:not(:focus) {\n        ", "\n      }\n\n      &:hover {\n        box-shadow: ", ";\n        -webkit-box-shadow: ", ";\n        -moz-box-shadow: ", ";\n      }\n\n      &--onColor {\n        &:hover {\n          box-shadow: ", ";\n          -webkit-box-shadow: ", ";\n          -moz-box-shadow: ", ";\n        }\n      }      \n    }\n  }\n"])), namespace, function (context) {
  return context.fill;
}, function (context) {
  return context.borderRadius;
}, function (context) {
  return context.padding;
}, function (context) {
  return "inset 0px 0px 0px ".concat(context.borderWidth, " ").concat(hexToRGB(context.stroke.color, context.stroke.opacity));
}, function (context) {
  return "inset 0px 0px 0px ".concat(context.borderWidth, " ").concat(hexToRGB(context.stroke.color, context.stroke.opacity));
}, function (context) {
  return "inset 0px 0px 0px ".concat(context.borderWidth, " ").concat(hexToRGB(context.stroke.color, context.stroke.opacity));
}, function (context) {
  return "".concat(context.outlineWidth, " solid ").concat(context.outlineColor);
}, function (context) {
  return context.onColor.fill;
}, function (context) {
  return context.motion;
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(context.hover.boxShadowColor);
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(context.hover.boxShadowColor);
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(context.hover.boxShadowColor);
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity));
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity));
}, function (context) {
  return "".concat(context.hover.boxShadowLevel, " ").concat(hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity));
});

function Cardbase(_ref) {
  var onColor = _ref.onColor,
      handleClick = _ref.handleClick,
      _ref$noPadding = _ref.noPadding,
      noPadding = _ref$noPadding === void 0 ? false : _ref$noPadding,
      children = _ref.children;

  function _handleClick() {
    if (typeof handleClick === 'function') {
      handleClick(true);
    }
  }

  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Cardbase"),
    styles: style$6
  }, /*#__PURE__*/React.createElement("div", {
    className: "\n          ".concat(namespace, "-Cardbase\n          ").concat(onColor ? "".concat(namespace, "-Cardbase--onColor") : '', "\n          ").concat(noPadding ? "".concat(namespace, "-Cardbase--noPadding") : '', "\n        "),
    tabIndex: "0",
    onClick: _handleClick
  }, children));
}

Cardbase.propTypes = {
  onColor: PropTypes.bool,
  handleClick: PropTypes.func,
  noPadding: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
};

var cardimageStyleType = {
  padding: spacingInsetSizeSmStack
};

var _templateObject$5;
var style$5 = createGooberGetter(cardimageStyleType)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  &.", "-Cardimage{\n    .slotted-image{\n      width: 100%;\n      top: 0;\n      left: 0;\n\n      img {\n        height: 190px;\n      }\n\n      &::slotted(img){\n        width: 100%;\n      }\n    }\n    .slotted-content{\n      padding: ", ";\n    }\n  }\n"])), namespace, function (context) {
  return context.padding;
});

function Cardimage(_ref) {
  var onColor = _ref.onColor,
      handleClick = _ref.handleClick,
      image = _ref.image,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Cardimage"),
    styles: style$5
  }, /*#__PURE__*/React.createElement("div", {
    className: "\n          ".concat(namespace, "-Cardimage\n        ")
  }, /*#__PURE__*/React.createElement(Cardbase, {
    onColor: onColor,
    noPadding: true,
    handleClick: handleClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "slotted-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: image
  })), /*#__PURE__*/React.createElement("div", {
    className: "slotted-content"
  }, children))));
}

Cardimage.propTypes = {
  onColor: PropTypes.bool,
  handleClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  children: PropTypes.element
};

var checkboxStyleType = {
  motion: injectMotion('switch-slow'),
  base: {
    width: "16px",
    height: "16px",
    borderColor: neutralColorLowPure,
    backgroundColor: brandColorSecondaryPure,
    borderWidth: borderWidthThin,
    margin: spacingSizeNano,
    borderRadius: "2px",
    onColor: {
      borderColor: neutralColorHighPure,
      backgroundColor: neutralColorHighPure
    }
  },
  label: {
    color: brandColorPrimaryPure,
    fontFamily: fontFamilyHighlight,
    fontiSize: fontSizeXs,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightDefault,
    onColor: {
      color: neutralColorHighPure
    }
  },
  states: {
    // base: {
    //   backgroundColor: brandingTokens.brandColorPrimaryPure,
    //   color: brandingTokens.brandColorPrimaryPure,
    // },
    icon: {
      color: neutralColorHighPure,
      width: "16px",
      height: "16px",
      onColor: {
        color: brandColorSecondaryPure
      }
    },
    hover: {
      borderColor: brandColorPrimaryDark,
      backgroundColor: neutralColorLowPure,
      opacity: opacityLevelSemitransparent,
      onColor: {
        borderColor: neutralColorHighPure,
        backgroundColor: neutralColorHighPure,
        opacity: opacityLevelLight
      }
    },
    disabled: {
      borderColor: neutralColorLowPure,
      color: neutralColorLowPure,
      opacity: opacityLevelMedium,
      onColor: {
        borderColor: neutralColorHighPure,
        backgroundColor: neutralColorHighPure,
        opacity: opacityLevelMedium
      }
    },
    disabledCheck: {
      backgroundColor: neutralColorLowPure,
      borderWidth: borderWidthNone,
      color: neutralColorLowPure
    },
    focus: {
      outlineColor: highlightColorPure,
      outlineWidth: borderWidthThin
    }
  }
};

var _templateObject$4;
var style$4 = createGooberGetter(checkboxStyleType)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  &.", "-Checkbox-label {\n    display: inline-flex;\n    align-items: center;\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    align-items: center;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n\n    &:hover {\n      color: ", ";\n      ", ";\n    }\n\n    &:focus-visible{\n      outline-style: solid;\n      outline-color: ", ";\n      outline-width: ", ";\n    }\n\n    &--disabled {\n      color: ", ";\n      opacity: ", ";\n    }\n\n    input {\n      appearance: none;\n      border-radius: 0px;\n      margin: 0;\n      width: ", ";\n      height: ", ";\n      border-width: ", ";\n      border-color: ", ";\n      margin-right: ", ";\n      border-style: solid;\n      border-radius: ", ";\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n\n      &::before {\n        position: absolute;\n        display: block;\n        border-color: ", ";\n        border-style: solid;\n        border-width: 0 1px 1px 0;\n        height: 12px;\n        width: 5px;\n        left: 3px;\n        top: -2px;\n        opacity: 0;\n        transform: rotate(45deg);\n        z-index: 3;\n        content: '';\n      }\n\n      &:hover {\n        border-color: ", ";\n        background-color: ", ";\n        ", ";\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &:checked {\n        border-color: ", ";\n        background: ", ";\n        color: #fff;\n\n        &::before {\n          opacity: 1;\n        }\n\n        &:hover {\n          border-color: ", ";\n          background: ", ";\n          ", ";\n        }\n\n        &:disabled {\n          background-color: ", ";\n          border-width: ", ";\n          color: ", ";\n\n          &::before {\n            left: 5px;\n            top: -1px;\n          }\n        }\n      }\n    }\n\n    &--onColor {\n      color: ", ";\n\n      &--disabled {\n        pointer-events: none;\n        outline: none;\n\n        &:focus-visible {\n          outline: none;\n        }\n      }\n\n      &:hover {\n        color: ", ";\n      }\n\n      input {\n        border-color: ", ";\n\n        &::before {\n          border-color: ", ";\n        }\n\n        &:disabled {\n          pointer-events: none;\n          border-color: ", ";\n        }\n\n        &:checked {\n          border-color: ", ";\n          background: ", ";\n          &:hover {\n            border-color: ", ";\n            background: ", ";\n          }\n\n          &:disabled {\n            pointer-events: none;\n            border-color: ", ";\n            background-color: ", ";\n          }          \n        }\n\n        &:hover{\n          border-color: ", ";\n          background-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var label = _ref.label;
  return label.color;
}, function (_ref2) {
  var label = _ref2.label;
  return label.fontFamily;
}, function (_ref3) {
  var label = _ref3.label;
  return label.fontiSize;
}, function (_ref4) {
  var label = _ref4.label;
  return label.fontWeight;
}, function (_ref5) {
  var label = _ref5.label;
  return label.lineHeight;
}, function (_ref6) {
  var states = _ref6.states;
  return states.hover.borderColor;
}, function (context) {
  return context.motion;
}, function (_ref7) {
  var states = _ref7.states;
  return states.focus.outlineColor;
}, function (_ref8) {
  var states = _ref8.states;
  return states.focus.outlineWidth;
}, function (_ref9) {
  var states = _ref9.states;
  return states.disabled.color;
}, function (_ref10) {
  var states = _ref10.states;
  return states.disabled.opacity;
}, function (_ref11) {
  var base = _ref11.base;
  return base.width;
}, function (_ref12) {
  var base = _ref12.base;
  return base.height;
}, function (_ref13) {
  var base = _ref13.base;
  return base.borderWidth;
}, function (_ref14) {
  var base = _ref14.base;
  return base.borderColor;
}, function (_ref15) {
  var base = _ref15.base;
  return base.margin;
}, function (_ref16) {
  var base = _ref16.base;
  return base.borderRadius;
}, function (_ref17) {
  var states = _ref17.states;
  return states.icon.color;
}, function (_ref18) {
  var states = _ref18.states;
  return states.hover.borderColor;
}, function (_ref19) {
  var states = _ref19.states;
  return hexToRGB(states.hover.backgroundColor, states.hover.opacity);
}, function (context) {
  return context.motion;
}, function (_ref20) {
  var states = _ref20.states;
  return states.disabled.borderColor;
}, function (_ref21) {
  var states = _ref21.states;
  return states.disabled.color;
}, function (_ref22) {
  var base = _ref22.base;
  return base.backgroundColor;
}, function (_ref23) {
  var base = _ref23.base;
  return base.backgroundColor;
}, function (_ref24) {
  var base = _ref24.base;
  return base.backgroundColor;
}, function (_ref25) {
  var base = _ref25.base;
  return base.backgroundColor;
}, function (context) {
  return context.motion;
}, function (_ref26) {
  var states = _ref26.states;
  return states.disabledCheck.backgroundColor;
}, function (_ref27) {
  var states = _ref27.states;
  return states.disabledCheck.borderWidth;
}, function (_ref28) {
  var states = _ref28.states;
  return states.disabledCheck.color;
}, function (_ref29) {
  var label = _ref29.label;
  return label.onColor.color;
}, function (_ref30) {
  var states = _ref30.states;
  return states.hover.onColor.borderColor;
}, function (_ref31) {
  var base = _ref31.base;
  return base.onColor.borderColor;
}, function (_ref32) {
  var states = _ref32.states;
  return states.icon.onColor.color;
}, function (_ref33) {
  var states = _ref33.states;
  return hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity);
}, function (_ref34) {
  var base = _ref34.base;
  return base.onColor.backgroundColor;
}, function (_ref35) {
  var base = _ref35.base;
  return base.onColor.backgroundColor;
}, function (_ref36) {
  var base = _ref36.base;
  return base.onColor.backgroundColor;
}, function (_ref37) {
  var base = _ref37.base;
  return base.onColor.backgroundColor;
}, function (_ref38) {
  var states = _ref38.states;
  return hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity);
}, function (_ref39) {
  var states = _ref39.states;
  return states.disabled.onColor.backgroundColor;
}, function (_ref40) {
  var states = _ref40.states;
  return states.hover.onColor.borderColor;
}, function (_ref41) {
  var states = _ref41.states;
  return hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity);
});

function Checkbox(_ref) {
  var value = _ref.value,
      name = _ref.name,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onColor = _ref.onColor,
      handleChange = _ref.handleChange;

  var _useState = useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedIpt = _useState2[0],
      setCheckedIpt = _useState2[1];

  useEffect(function () {
    setCheckedIpt(checked);
  }, [checked]);

  function _handleChange() {
    handleChange(!checkedIpt);
    setCheckedIpt(!checkedIpt);
  }

  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Checkbox"),
    styles: style$4
  }, /*#__PURE__*/React.createElement("label", {
    className: "\n          ".concat(namespace, "-Checkbox-label\n          ").concat(disabled ? "".concat(namespace, "-Checkbox-label--disabled") : '', "\n          ").concat(onColor ? "".concat(namespace, "-Checkbox-label--onColor") : '', "\n          ").concat(onColor && disabled ? "".concat(namespace, "-Checkbox-label--onColor--disabled") : '', "\n        "),
    htmlFor: name,
    "aria-checked": checked,
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("input", {
    className: "".concat(namespace, "-Checkbox"),
    type: "checkbox",
    id: name,
    name: name,
    checked: checkedIpt,
    disabled: disabled,
    value: value,
    onChange: _handleChange
  }), /*#__PURE__*/React.createElement("slot", null, value)));
}

Checkbox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func.isRequired
};

var inputTextareaStyleType = {
  fontSize: fontSizeXs,
  fontWeight: fontWeightRegular,
  fontFamily: fontFamilyHighlight,
  color: neutralColorLowPure,
  motion: injectMotion('switch-slow'),
  textarea: {
    fontWeight: fontWeightMedium,
    marginBottom: spacingSizeNano,
    padding: spacingSizeXxxs,
    borderRadius: borderRadiusSm,
    borderWidth: borderWidthThin,
    borderColor: neutralColorLowPure,
    lineHeight: lineHeightLg,
    backgroundColor: "transparent",
    placeholder: {
      color: neutralColorLowPure,
      opacity: opacityLevelSemiopaque,
      fontWeight: fontWeightRegular
    },
    text: {
      color: neutralColorLowPure,
      opacity: opacityLevelSemiopaque
    }
  },
  label: {
    fontWeight: fontWeightBold,
    marginBottom: spacingSizeQuarck
  },
  helper: {
    fontSize: fontSizeXxs
  },
  error: {
    textarea: {
      backgroundColor: feedbackColorHelperLight,
      borderColor: feedbackColorHelperPure
    }
  },
  onColor: {
    color: neutralColorHighPure,
    textarea: {
      borderColor: neutralColorHighPure,
      color: neutralColorHighPure,
      placeholder: {
        color: neutralColorHighPure,
        opacity: opacityLevelSemiopaque
      }
    },
    error: {
      textarea: {
        backgroundColor: feedbackColorHelperDark,
        borderColor: feedbackColorHelperPure
      }
    }
  },
  states: {
    hover: {
      textarea: {
        backgroundColor: neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      },
      onColor: {
        textarea: {
          backgroundColor: neutralColorHighPure,
          opacity: opacityLevelLight
        }
      }
    },
    disabled: {
      opacity: opacityLevelMedium
    },
    focus: {
      borderColor: highlightColorPure,
      borderWidth: borderWidthThin,
      textarea: {
        backgroundColor: neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      }
    }
  }
};

var _templateObject$3;
var style$3 = createGooberGetter(inputTextareaStyleType)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  &.", "-TextArea{\n    display: flex;\n    flex-direction: column;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    border-radius: 0px;\n    border: ", ";\n    min-width: 320px;\n\n    &:focus{\n      outline: transparent;\n    }\n\n    &--focus,\n    &:focus-visible:not(:active) {\n      border: ", ";\n\n      .", "-TextArea__textarea{\n        background-color: ", ";\n      }\n    }\n\n    .", "-TextArea__helperBox{\n      display: flex;\n      justify-content: flex-end;\n      font-size: ", ";\n    }\n\n    .", "-TextArea__label{\n      font-weight: ", ";\n      margin-bottom: ", ";\n    }\n\n    .", "-TextArea__textarea{\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: ", ";\n      margin-bottom: ", ";\n      padding: ", ";\n      border-radius: ", ";\n      border: ", ";\n      background-color: ", ";\n      outline: transparent;\n      color: ", ";\n      resize: none;\n      transition-property: background-color;\n      height: 224px;\n      ", ";\n\n      &:hover{\n        background-color: ", ";\n      }\n\n      &::placeholder {\n        color: ", ";\n        font-weight: ", ";\n      }\n    }\n\n    .", "-TextArea__helperText{\n      flex: 1;\n    }\n\n    .", "-TextArea__counter{\n\n    }\n\n    &--disabled{\n      opacity: ", ";\n      pointer-events: none;\n\n      .", "-TextArea__helperBox{\n        opacity: 0;\n      }\n    }\n\n    &--error{\n      .", "-TextArea__textarea{\n        background-color: ", ";\n        border-color: ", ";\n      }\n    }\n\n    &--onColor{\n      color: ", ";\n\n      .", "-TextArea__textarea{\n        background-color: ", ";\n        border-color: ", ";\n        color:  ", ";\n\n        &:hover{\n          background-color: ", ";\n        }\n\n        &::placeholder {\n          color: ", ";\n          opacity: 1;\n        }\n      }\n\n      &.", "-TextArea--error{\n        .", "-TextArea__textarea{\n          background-color: ", ";\n          border-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.color;
}, function (_ref) {
  var states = _ref.states;
  return "".concat(states.focus.borderWidth, " solid transparent");
}, function (_ref2) {
  var states = _ref2.states;
  return "".concat(states.focus.borderWidth, " solid ").concat(states.focus.borderColor);
}, namespace, function (_ref3) {
  var states = _ref3.states;
  return hexToRGB(states.focus.textarea.backgroundColor, states.focus.textarea.opacity);
}, namespace, function (_ref4) {
  var helper = _ref4.helper;
  return helper.fontSize;
}, namespace, function (_ref5) {
  var label = _ref5.label;
  return label.fontWeight;
}, function (_ref6) {
  var label = _ref6.label;
  return label.marginBottom;
}, namespace, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (_ref7) {
  var textarea = _ref7.textarea;
  return textarea.fontWeight;
}, function (_ref8) {
  var textarea = _ref8.textarea;
  return textarea.lineHeight;
}, function (_ref9) {
  var textarea = _ref9.textarea;
  return textarea.marginBottom;
}, function (_ref10) {
  var textarea = _ref10.textarea;
  return textarea.padding;
}, function (_ref11) {
  var textarea = _ref11.textarea;
  return textarea.borderRadius;
}, function (_ref12) {
  var textarea = _ref12.textarea;
  return "".concat(textarea.borderWidth, " solid ").concat(textarea.borderColor);
}, function (_ref13) {
  var textarea = _ref13.textarea;
  return textarea.backgroundColor;
}, function (_ref14) {
  var textarea = _ref14.textarea;
  return textarea.color;
}, function (context) {
  return context.motion;
}, function (_ref15) {
  var states = _ref15.states;
  return hexToRGB(states.hover.textarea.backgroundColor, states.hover.textarea.opacity);
}, function (_ref16) {
  var textarea = _ref16.textarea;
  return hexToRGB(textarea.placeholder.color, textarea.placeholder.opacity);
}, function (_ref17) {
  var textarea = _ref17.textarea;
  return textarea.placeholder.fontWeight;
}, namespace, namespace, function (_ref18) {
  var states = _ref18.states;
  return states.disabled.opacity;
}, namespace, namespace, function (_ref19) {
  var error = _ref19.error;
  return error.textarea.backgroundColor;
}, function (_ref20) {
  var error = _ref20.error;
  return error.textarea.borderColor;
}, function (_ref21) {
  var onColor = _ref21.onColor;
  return onColor.color;
}, namespace, function (_ref22) {
  var onColor = _ref22.onColor;
  return onColor.textarea.backgroundColor;
}, function (_ref23) {
  var onColor = _ref23.onColor;
  return onColor.textarea.borderColor;
}, function (_ref24) {
  var onColor = _ref24.onColor;
  return onColor.textarea.color;
}, function (_ref25) {
  var states = _ref25.states;
  return hexToRGB(states.hover.onColor.textarea.backgroundColor, states.hover.onColor.textarea.opacity);
}, function (_ref26) {
  var onColor = _ref26.onColor;
  return hexToRGB(onColor.textarea.placeholder.color, onColor.textarea.placeholder.opacity);
}, namespace, namespace, function (_ref27) {
  var onColor = _ref27.onColor;
  return onColor.error.textarea.backgroundColor;
}, function (_ref28) {
  var onColor = _ref28.onColor;
  return onColor.error.textarea.borderColor;
});

function InputTextarea(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'textarea' : _ref$id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? 'Helper text' : _ref$helperText,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Type here...' : _ref$placeholder,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 100 : _ref$maxLength,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$showHelper = _ref.showHelper,
      showHelper = _ref$showHelper === void 0 ? false : _ref$showHelper;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      _charactersCount = _useState2[0],
      setCharactersCount = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      _value = _useState4[0],
      setValue = _useState4[1];

  var handleChange = function handleChange(e) {
    var currentValue = e.target.value;
    setValue(currentValue);
    setCharactersCount(currentValue.length);
  };

  function formatNumber(number) {
    if (number > 99) {
      return "".concat(number);
    }

    if (number > 9) {
      return "0".concat(number);
    }

    return "00".concat(number);
  }

  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Textarea"),
    styles: style$3
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(namespace, "-TextArea \n        ").concat(error ? "".concat(namespace, "-TextArea--error") : '', " \n        ").concat(onColor ? "".concat(namespace, "-TextArea--onColor") : '', " \n        ").concat(disabled ? "".concat(namespace, "-TextArea--disabled") : ''),
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("label", {
    className: "".concat(namespace, "-TextArea__label"),
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("textarea", {
    className: "".concat(namespace, "-TextArea__textarea"),
    id: id,
    value: _value,
    maxLength: maxLength,
    placeholder: placeholder,
    onInput: handleChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(namespace, "-TextArea__helperBox")
  }, showHelper && helperText ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(namespace, "-TextArea__helperText")
  }, helperText) : null, /*#__PURE__*/React.createElement("span", {
    className: "".concat(namespace, "-TextArea__counter")
  }, formatNumber(_charactersCount), "/", formatNumber(maxLength)))));
}

InputTextarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  error: PropTypes.bool,
  onColor: PropTypes.bool,
  disabled: PropTypes.bool
};

var linkStyleType = {
  color: neutralColorLowPure,
  fontFamily: fontFamilyHighlight,
  fontSize: fontSizeXs,
  fontWeight: fontWeightMedium,
  lineHeight: lineHeightDefault,
  textDecoration: 'none',
  motion: injectMotion('switch-slow'),
  borderWidth: "".concat(borderWidthThin),
  borderColor: "".concat(neutralColorLowPure),
  paddingTop: spacingSizeQuarck,
  paddingBottom: spacingSizeQuarck,
  hover: {
    textDecoration: 'none'
  },
  active: {
    color: neutralColorLowMedium,
    textDecoration: 'none'
  },
  onColor: {
    color: neutralColorHighPure
  },
  focus: {
    borderColor: highlightColorPure,
    borderWidth: borderWidthThin,
    color: neutralColorLowPure
  },
  disabled: {
    color: neutralColorHighDark,
    opacity: opacityLevelMedium
  },
  icon: {
    marginLeft: spacingSizeQuarck,
    hover: {
      marginLeft: spacingSizeNano
    }
  }
};

var _templateObject$2;
var style$2 = createGooberGetter(linkStyleType)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  &.", "-Link {\n    margin:0;\n    padding:0;\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    position: relative;\n    text-decoration: ", ";\n    border: ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n    display: flex;\n    box-sizing: border-box;\n    width: fit-content;\n    align-items: center;\n\n    &::after{\n      content: \"\";\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: ", ";\n      background-color: ", ";\n      transition-property: width;\n      width: 100%;\n      ", ";\n    }\n\n    &:focus-visible:not(:active) {\n      border: ", ";\n      color: ", ";\n      outline:0;\n      text-decoration: none;\n\n      &::after{\n        transition-property: width;\n        width: 100%;\n        ", ";\n      }\n    }\n    \n    &:hover {\n      text-decoration: ", ";\n      \n      &::after{\n        width: 50%;\n      }\n    }\n\n    &--disabled {\n      pointer-events: none;\n      cursor:default;\n      text-decoration: none;\n      opacity: ", ";\n\n      &::after{\n        width: 100%;\n      }\n    }\n\n    &--onColor{\n      color: ", ";\n\n      &::after{\n        background-color: ", ";\n      }\n\n      &:focus-visible:not(:active){\n        color: ", ";\n      }\n    }\n\n    &--icon{\n      &::after{\n        display: none;\n      }\n\n      .", "-Icon{\n        margin-left: ", ";\n        transition-property: margin;\n        ", ";\n      }\n\n      &:hover{\n        .", "-Icon{\n          margin-left: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (context) {
  return context.color;
}, function (context) {
  return context.fontFamily;
}, function (context) {
  return context.fontSize;
}, function (context) {
  return context.fontWeight;
}, function (context) {
  return context.lineHeight;
}, function (context) {
  return context.textDecoration;
}, function (context) {
  return "".concat(context.borderWidth, " solid transparent");
}, function (context) {
  return context.paddingTop;
}, function (context) {
  return context.paddingBottom;
}, function (context) {
  return "".concat(context.borderWidth);
}, function (context) {
  return "".concat(context.borderColor);
}, function (context) {
  return context.motion;
}, function (_ref) {
  var focus = _ref.focus;
  return "".concat(focus.borderWidth, " solid ").concat(focus.borderColor);
}, function (_ref2) {
  var focus = _ref2.focus;
  return focus.color;
}, function (context) {
  return context.motion;
}, function (_ref3) {
  var hover = _ref3.hover;
  return hover.textDecoration;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled.opacity;
}, function (_ref5) {
  var onColor = _ref5.onColor;
  return onColor.color;
}, function (_ref6) {
  var onColor = _ref6.onColor;
  return onColor.color;
}, function (_ref7) {
  var onColor = _ref7.onColor;
  return onColor.color;
}, namespace, function (_ref8) {
  var icon = _ref8.icon;
  return icon.marginLeft;
}, function (context) {
  return context.motion;
}, namespace, function (_ref9) {
  var icon = _ref9.icon;
  return icon.hover.marginLeft;
});

function Link(_ref) {
  var label = _ref.label,
      href = _ref.href,
      target = _ref.target,
      disabled = _ref.disabled,
      icon = _ref.icon,
      onColor = _ref.onColor;
  var refLink = useRef(null);
  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Link"),
    styles: style$2
  }, /*#__PURE__*/React.createElement("a", {
    ref: refLink,
    href: href,
    className: "".concat(namespace, "-Link\n        ").concat(disabled ? "".concat(namespace, "-Link--disabled") : '', "\n        ").concat(onColor ? "".concat(namespace, "-Link--onColor") : '', "\n        ").concat(icon ? "".concat(namespace, "-Link--icon") : ''),
    target: target
  }, label, icon ? /*#__PURE__*/React.createElement(Icon, {
    icon: "arrow-right"
  }) : null));
}

Link.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  inverse: PropTypes.bool,
  onColor: PropTypes.bool
};

var radiobuttonStyleType = {
  motion: injectMotion('switch-slow'),
  base: {
    width: '16px',
    height: '16px',
    borderColor: neutralColorLowPure,
    borderWidth: borderWidthThin,
    margin: spacingSizeNano,
    onColor: {
      borderColor: neutralColorHighPure,
      backgroundColor: neutralColorHighPure
    }
  },
  label: {
    color: neutralColorLowPure,
    fontFamily: fontFamilyHighlight,
    fontSize: fontSizeXs,
    fontWeight: fontWeightRegular,
    marginTop: spacingSizeXxxs,
    lineHeight: lineHeightDefault,
    onColor: {
      color: neutralColorHighPure
    }
  },
  states: {
    base: {
      backgroundColor: brandColorSecondaryPure,
      color: brandColorSecondaryPure
    },
    icon: {
      color: neutralColorHighPure,
      width: '8px',
      height: '8px'
    },
    hover: {
      borderColor: brandColorSecondaryPure,
      color: neutralColorLowPure,
      icon: {
        borderColor: neutralColorLowPure,
        fill: neutralColorLowPure,
        opacity: opacityLevelSemitransparent
      },
      onColor: {
        borderColor: neutralColorHighPure,
        backgroundColor: neutralColorHighPure,
        opacity: opacityLevelLight
      }
    },
    disabled: {
      borderColor: neutralColorHighDark,
      color: neutralColorLowPure,
      opacity: opacityLevelMedium,
      icon: {
        borderColor: neutralColorLowPure,
        opacity: opacityLevelMedium
      },
      onColor: {
        color: neutralColorHighPure,
        borderColor: neutralColorHighPure,
        opacity: opacityLevelMedium
      }
    },
    disabledChecked: {
      backgroundColor: neutralColorHighDark,
      color: neutralColorHighDark
    },
    focus: {
      outlineColor: highlightColorPure,
      outlineWidth: borderWidthThin
    }
  }
};

var _templateObject$1;
var style$1 = createGooberGetter(radiobuttonStyleType)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  &.", "-Radiobutton-label {\n    display: flex;\n    align-items: center;\n\n    cursor: pointer;\n    display: flex;\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    position: relative;\n    user-select: none;\n    color: #000;\n    ", ";\n\n    & + .", "-Radiobutton-label {\n      margin-top: ", ";\n    }\n\n    &:hover {\n      color: ", ";\n    }\n\n    &:focus-visible{\n      outline-style: solid;\n      outline-color: ", ";\n      outline-width: ", ";\n    }\n\n    &--disabled {\n      pointer-events: none;\n      cursor: not-allowed;\n      color: ", ";\n    }\n\n    input {\n      appearance: none;\n\n      width: ", ";\n      height: ", ";\n\n      border-width: ", ";\n      border-color: ", ";\n      border-style: solid;\n\n      background-color: transparent;\n      cursor: pointer;\n      margin: 0;\n      margin-right: ", ";\n      top: -2px;\n      z-index: 2;\n      border-radius: 50%;\n      ", ";\n\n      &:hover {\n        border-color: ", ";\n        background: ", ";\n      }\n\n      &:disabled {\n        pointer-events: none;\n        cursor: not-allowed;\n        border-color: ", ";\n      }\n\n      &:checked {\n        border-width: 5px;\n        border-color: ", ";\n\n        &:hover {\n          border-color: ", ";\n          background: ", ";\n        }\n\n        &:disabled {\n          pointer-events: none;\n          border-color: ", ";\n          background: ", ";\n        }\n      }\n    }\n    &--onColor {\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &.", "-Radiobutton-label--disabled {\n        color: ", ";\n      }\n\n      input {\n        border-color: ", ";\n\n        &:checked {\n          border-color: ", ";\n          &:hover {\n            border-color: ", ";\n          }\n        }\n\n        &:hover{\n          border-color: ", ";\n          background-color: ", ";\n        }\n        &:disabled {\n          pointer-events: none;\n          border-color: ", ";\n        }\n      }\n    }\n  }\n"])), namespace, function (_ref) {
  var label = _ref.label;
  return label.fontFamily;
}, function (_ref2) {
  var label = _ref2.label;
  return label.fontSize;
}, function (_ref3) {
  var label = _ref3.label;
  return label.lineHeight;
}, function (_ref4) {
  var label = _ref4.label;
  return label.fontWeight;
}, function (context) {
  return context.motion;
}, namespace, function (_ref5) {
  var label = _ref5.label;
  return label.marginTop;
}, function (_ref6) {
  var states = _ref6.states;
  return states.hover.color;
}, function (_ref7) {
  var states = _ref7.states;
  return states.focus.outlineColor;
}, function (_ref8) {
  var states = _ref8.states;
  return states.focus.outlineWidth;
}, function (_ref9) {
  var states = _ref9.states;
  return hexToRGB(states.disabled.color, states.disabled.opacity);
}, function (_ref10) {
  var base = _ref10.base;
  return base.width;
}, function (_ref11) {
  var base = _ref11.base;
  return base.height;
}, function (_ref12) {
  var base = _ref12.base;
  return base.borderWidth;
}, function (_ref13) {
  var base = _ref13.base;
  return base.borderColor;
}, function (_ref14) {
  var base = _ref14.base;
  return base.margin;
}, function (context) {
  return context.motion;
}, function (_ref15) {
  var states = _ref15.states;
  return states.hover.icon.borderColor;
}, function (_ref16) {
  var states = _ref16.states;
  return hexToRGB(states.hover.icon.fill, states.hover.icon.opacity);
}, function (_ref17) {
  var states = _ref17.states;
  return hexToRGB(states.disabled.icon.borderColor, states.disabled.icon.opacity);
}, function (_ref18) {
  var states = _ref18.states;
  return states.base.backgroundColor;
}, function (_ref19) {
  var states = _ref19.states;
  return states.hover.borderColor;
}, function (_ref20) {
  var states = _ref20.states;
  return hexToRGB(states.hover.icon.fill, states.hover.icon.opacity);
}, function (_ref21) {
  var states = _ref21.states;
  return states.disabled.borderColor;
}, function (_ref22) {
  var states = _ref22.states;
  return states.hover.borderColor;
}, function (_ref23) {
  var label = _ref23.label;
  return label.onColor.color;
}, function (_ref24) {
  var states = _ref24.states;
  return states.hover.onColor.borderColor;
}, namespace, function (_ref25) {
  var states = _ref25.states;
  return hexToRGB(states.disabled.onColor.color, states.disabled.onColor.opacity);
}, function (_ref26) {
  var base = _ref26.base;
  return base.onColor.borderColor;
}, function (_ref27) {
  var base = _ref27.base;
  return base.onColor.backgroundColor;
}, function (_ref28) {
  var base = _ref28.base;
  return base.onColor.backgroundColor;
}, function (_ref29) {
  var states = _ref29.states;
  return states.hover.onColor.borderColor;
}, function (_ref30) {
  var states = _ref30.states;
  return hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity);
}, function (_ref31) {
  var states = _ref31.states;
  return hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity);
});

function RadioButton(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$listData = _ref.listData,
      listData = _ref$listData === void 0 ? [{
    label: 'Label A',
    value: 'A',
    checked: false,
    disabled: false
  }] : _ref$listData,
      _ref$onColor = _ref.onColor,
      onColor = _ref$onColor === void 0 ? false : _ref$onColor,
      handleChange = _ref.handleChange;

  function findChecked() {
    return listData.findIndex(function (el) {
      return el.checked;
    });
  }

  var _useState = useState(findChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedOpt = _useState2[0],
      setCheckedOpt = _useState2[1];

  function _handleChange(index, disabled) {
    if (disabled) return;
    setCheckedOpt(index);

    if (typeof handleChange === 'function') {
      handleChange(listData[index]);
    }
  }

  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Radiobutton"),
    styles: style$1
  }, listData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("label", {
      key: index,
      className: "\n            ".concat(namespace, "-Radiobutton-label\n            ").concat(item.disabled ? "".concat(namespace, "-Radiobutton-label--disabled") : '', "\n            ").concat(onColor ? "".concat(namespace, "-Radiobutton-label--onColor") : '', "\n          "),
      htmlFor: name,
      "aria-checked": item.checked,
      tabIndex: "0",
      onClick: function onClick() {
        return _handleChange(index, item.disabled);
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "".concat(namespace, "-Radiobutton"),
      type: "radio",
      id: item.value,
      name: name,
      checked: checkedOpt === index,
      disabled: item.disabled,
      value: item.value,
      onChange: function onChange() {
        return _handleChange(index, item.disabled);
      }
    }), item.label);
  }));
}

RadioButton.propTypes = {
  name: PropTypes.string,
  listData: PropTypes.array,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func
};

var typographyStyleType = {
  fontFamily: fontFamilyHighlight,
  color: neutralColorLowPure,
  heading: {
    fontWeight: fontWeightBold,
    lineHeight: lineHeightDefault,
    sizes: {
      mobile: {
        small: fontSizeSm,
        medium: fontSizeMd,
        large: fontSizeXl,
        xlarge: fontSizeXxl,
        display: fontSizeXxxl
      },
      desktop: {
        small: fontSizeMd,
        medium: fontSizeLg,
        large: fontSizeXxl,
        xlarge: fontSizeXxxl,
        display: fontSizeGiant
      },
      xsmall: fontSizeXs
    }
  },
  subtitle: {
    fontWeight: fontWeightMedium,
    sizes: {
      mobile: {
        small: fontSizeSm,
        large: fontSizeMd,
        lineHeightSmall: lineHeightSm,
        lineHeightLarge: lineHeightLg
      },
      desktop: {
        small: fontSizeMd,
        large: fontSizeLg,
        lineHeightSmall: lineHeightLg,
        lineHeightLarge: lineHeightLg
      }
    }
  },
  paragraph: {
    fontWeight: fontWeightRegular,
    opacity: opacityLevelSemiopaque,
    sizes: {
      mobile: {
        lineHeightSmall: lineHeightLg,
        lineHeightLarge: lineHeightSm
      },
      desktop: {
        lineHeightSmall: lineHeightLg,
        lineHeightLarge: lineHeightSm
      },
      small: fontSizeXs,
      large: fontSizeSm
    }
  },
  caption: {
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightMd,
    sizes: {
      default: fontSizeXxs
    }
  },
  onColor: {
    color: neutralColorHighPure
  }
};

var _templateObject;
var style = createGooberGetter(typographyStyleType)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.", "-Typography{\n    font-style: normal;\n    text-align: left;\n    letter-spacing: normal;\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: ", ";\n\n    &.Heading{\n        font-weight: ", ";\n        line-height: ", ";\n\n        &--x-small{\n          font-size: ", ";\n        }\n\n        &--small{\n          font-size: ", ";\n        }\n\n        &--medium{\n          font-size: ", ";\n        }\n\n        &--large{\n          font-size: ", ";\n        }\n\n        &--x-large{\n          font-size: ", ";\n        }\n\n        &--display{\n          font-size: ", ";\n        }\n\n        @media (min-width: 1024px){\n          &--small{\n            font-size: ", ";\n          }\n\n          &--medium{\n            font-size: ", ";\n          }\n\n          &--large{\n            font-size: ", ";\n          }\n\n          &--x-large{\n            font-size: ", ";\n          }\n\n          &--display{\n            font-size: ", ";\n          }\n        }\n    }\n\n    &.Subtitle{\n        font-weight: ", ";\n\n        &--small{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        &--large{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        @media (min-width: 1024px){\n          &--small{\n            font-size: ", ";\n            line-height: ", ";\n          }\n\n          &--large{\n            font-size: ", ";\n            line-height: ", ";\n          }\n        }\n    }\n\n    &.Paragraph{\n        font-weight: ", ";\n        opacity: ", ";\n        \n        &--small{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        &--large{\n          font-size: ", ";\n          line-height: ", ";\n        }\n\n        @media (min-width: 1024px){\n          &--small{\n            line-height: ", ";\n          }\n\n          &--large{\n            line-height: ", ";\n          }\n        }\n    }\n\n    &.Caption{\n      font-weight: ", ";\n      line-height: ", ";\n      font-size: ", ";\n    }\n\n    &--onColor{\n      color: ", ";\n    }\n  }\n"])), namespace, function (context) {
  return "".concat(context.color);
}, function (context) {
  return "".concat(context.fontFamily);
}, function (_ref) {
  var heading = _ref.heading;
  return heading.fontWeight;
}, function (_ref2) {
  var heading = _ref2.heading;
  return heading.lineHeight;
}, function (_ref3) {
  var heading = _ref3.heading;
  return heading.sizes.xsmall;
}, function (_ref4) {
  var heading = _ref4.heading;
  return heading.sizes.mobile.small;
}, function (_ref5) {
  var heading = _ref5.heading;
  return heading.sizes.mobile.medium;
}, function (_ref6) {
  var heading = _ref6.heading;
  return heading.sizes.mobile.large;
}, function (_ref7) {
  var heading = _ref7.heading;
  return heading.sizes.mobile.xlarge;
}, function (_ref8) {
  var heading = _ref8.heading;
  return heading.sizes.mobile.display;
}, function (_ref9) {
  var heading = _ref9.heading;
  return heading.sizes.desktop.small;
}, function (_ref10) {
  var heading = _ref10.heading;
  return heading.sizes.desktop.medium;
}, function (_ref11) {
  var heading = _ref11.heading;
  return heading.sizes.desktop.large;
}, function (_ref12) {
  var heading = _ref12.heading;
  return heading.sizes.desktop.xlarge;
}, function (_ref13) {
  var heading = _ref13.heading;
  return heading.sizes.desktop.display;
}, function (_ref14) {
  var subtitle = _ref14.subtitle;
  return subtitle.fontWeight;
}, function (_ref15) {
  var subtitle = _ref15.subtitle;
  return subtitle.sizes.mobile.small;
}, function (_ref16) {
  var subtitle = _ref16.subtitle;
  return subtitle.sizes.mobile.lineHeightSmall;
}, function (_ref17) {
  var subtitle = _ref17.subtitle;
  return subtitle.sizes.mobile.large;
}, function (_ref18) {
  var subtitle = _ref18.subtitle;
  return subtitle.sizes.mobile.lineHeightLarge;
}, function (_ref19) {
  var subtitle = _ref19.subtitle;
  return subtitle.sizes.desktop.small;
}, function (_ref20) {
  var subtitle = _ref20.subtitle;
  return subtitle.sizes.desktop.lineHeightSmall;
}, function (_ref21) {
  var subtitle = _ref21.subtitle;
  return subtitle.sizes.desktop.large;
}, function (_ref22) {
  var subtitle = _ref22.subtitle;
  return subtitle.sizes.desktop.lineHeightLarge;
}, function (_ref23) {
  var paragraph = _ref23.paragraph;
  return paragraph.fontWeight;
}, function (_ref24) {
  var paragraph = _ref24.paragraph;
  return paragraph.opacity;
}, function (_ref25) {
  var paragraph = _ref25.paragraph;
  return paragraph.sizes.small;
}, function (_ref26) {
  var paragraph = _ref26.paragraph;
  return paragraph.sizes.mobile.lineHeightSmall;
}, function (_ref27) {
  var paragraph = _ref27.paragraph;
  return paragraph.sizes.large;
}, function (_ref28) {
  var paragraph = _ref28.paragraph;
  return paragraph.sizes.mobile.lineHeightLarge;
}, function (_ref29) {
  var paragraph = _ref29.paragraph;
  return paragraph.sizes.desktop.lineHeightSmall;
}, function (_ref30) {
  var paragraph = _ref30.paragraph;
  return paragraph.sizes.desktop.lineHeightLarge;
}, function (_ref31) {
  var caption = _ref31.caption;
  return caption.fontWeight;
}, function (_ref32) {
  var caption = _ref32.caption;
  return caption.lineHeight;
}, function (_ref33) {
  var caption = _ref33.caption;
  return caption.sizes.default;
}, function (_ref34) {
  var onColor = _ref34.onColor;
  return onColor.color;
});

function Typography(_ref) {
  var variant = _ref.variant,
      size = _ref.size,
      onColor = _ref.onColor,
      component = _ref.component,
      children = _ref.children;
  var template;

  var createHeading = function createHeading(variant, size, onColor) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Heading';
    var patternSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'display'].includes(size) ? size : 'medium';
    var patternVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'h1';
    var tagName = patternVariant;

    switch (tagName) {
      case 'h1':
        return /*#__PURE__*/React.createElement("h1", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h2':
        return /*#__PURE__*/React.createElement("h2", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h3':
        return /*#__PURE__*/React.createElement("h3", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h4':
        return /*#__PURE__*/React.createElement("h4", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h5':
        return /*#__PURE__*/React.createElement("h5", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      case 'h6':
        return /*#__PURE__*/React.createElement("h6", {
          part: "heading",
          className: "".concat(namespace, "-Typography \n            ").concat(type, " ").concat(type, "--").concat(patternSize, " \n            ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
        }, children);

      default:
        return null;
    }
  };

  var createSubtitle = function createSubtitle(variant, size) {
    var onColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var patternSize = ['small', 'large'].includes(size) ? size : 'large';
    var patternVariant = ['h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'h2';
    return createHeading(patternVariant, patternSize, onColor, 'Subtitle');
  };

  var createParagraph = function createParagraph(size) {
    var onColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var patternSize = ['small', 'large'].includes(size) ? size : 'large';
    return /*#__PURE__*/React.createElement("p", {
      part: "body",
      className: "".concat(namespace, "-Typography \n      Paragraph Paragraph--").concat(patternSize, " \n      ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
    }, children);
  };

  var createCaption = function createCaption() {
    var onColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(namespace, "-Typography \n        Caption ").concat(onColor ? "".concat(namespace, "-Typography--onColor") : '')
    }, children);
  };

  switch (component) {
    case 'heading':
      template = createHeading(variant, size, onColor);
      break;

    case 'subtitle':
      template = createSubtitle(variant, size, onColor);
      break;

    case 'caption':
      template = createCaption(onColor);
      break;

    case 'paragraph':
      template = createParagraph(size, onColor);
      break;

    default:
      template = createHeading(variant, size, onColor);
  }

  return /*#__PURE__*/React.createElement(ContextElement, {
    contextId: "".concat(namespace, "-Typography"),
    styles: style
  }, template);
}

Typography.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onColor: PropTypes.bool,
  component: PropTypes.string
};

export { Button, Cardbase, Cardimage, Checkbox, Icon, RadioButton as InputRadiobutton, InputTextarea, Link, Typography };
