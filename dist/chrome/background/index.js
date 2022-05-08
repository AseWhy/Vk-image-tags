/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#img_tags_container  {\n    border-top: 1px solid var(--separator_common);\n    margin-top: 17px;\n}\n\n#img_tags_container .img_tags_list {\n    padding: 15px 15px 0;\n    display: flex;\n    gap: 0.5rem;\n    flex-flow: wrap;\n}\n\n#img_tags_container .img_tags_item {\n    padding: 0.25rem 0.5rem;\n    list-style: none;\n    display: inline-block;\n    border-radius: 0.5rem;\n    cursor: pointer;\n}\n\n#img_tags_container .img_tags_item.add-promt {\n    background-color: transparent;\n    border: 1px solid var(--separator_common);\n    padding: calc(0.25rem - 1px) calc(0.5rem - 1px);\n    color: var(--text_primary);\n}\n\n#img_tags_container + #pv_desc {\n    margin: 0;\n    border-top: 1px solid var(--separator_common);\n    margin-top: 17px;\n    padding: 15px 10px 0;\n}\n\n#img_tags_container .img_tags_item_delete {\n    border: none;\n    background: transparent;\n    cursor: pointer;\n    padding: 0 0.25rem 0 0.25rem;\n    width: 1rem;\n    height: 1rem;\n    margin: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".photos_choose_row {\n    transition: all 0.5s ease-in;\n}\n\n.photos_choose_row.two-hidden {\n    opacity: 0.1;\n    scale: 0;\n}\n\n.photos_choose_row.two-selected {\n    opacity: 1;\n    transform: scale(1.05);\n}\n\n.search-tags-input {\n    padding: 0.25rem;\n    width: calc(100% - 0.5rem);\n}\n\n.search-tags-input-container {\n    padding: 20px 20px 8px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else {}

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        var color = randomColor(options);

        if (seed !== null) {
          options.seed = seed;
        }

        colors.push(color);
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [18,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [46,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [62,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [178, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [257, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [282, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));


/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./lib/observer.ts
const observeDOM = (function () {
    const MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
    return function (obj, callback) {
        if (!obj || obj.nodeType !== 1)
            return;
        if (MutationObserver) {
            const mutationObserver = new MutationObserver(callback);
            mutationObserver.observe(obj, { childList: true, subtree: true });
            return mutationObserver;
        }
        else if (globalThis.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
})();

;// CONCATENATED MODULE: ./lib/contants.ts
const VK_IMG_TAGS_NAME_EXTRACT = /(?:https|http):\/\/([^\/]+)([^?]+)/g;
// Селектор для попапа просмотра картинки
const VK_IMG_TAGS_CONT_CONT_TRIGGER = ".layer_wrap .clear_fix.pv_photo_wrap";
const VI_IMG_TAGS_SEL_CONT_TRIGGER = "#box_layer_wrap #photos_choose_wrap";

;// CONCATENATED MODULE: ./lib/support/ExtensionConfigField.ts
class ExtensionConfigField {
    constructor(name, def) {
        this.name = name;
        this.def = def;
    }
}

;// CONCATENATED MODULE: ./lib/support/ExtensionConfig.ts

const CONFIG_PREFIX = "_config_";
/* harmony default export */ const ExtensionConfig = (new class ExtensionConfig {
    constructor() {
        this.TagsSearchIntervalKey = new ExtensionConfigField("TagsSearchIntervalKey", 500);
        this.LoadAllItemWhenSearch = new ExtensionConfigField("LoadAllItemWhenSearch", true);
        this.KeyGoToNextSelection = new ExtensionConfigField("KeyGoToNextSelection", "Tab");
    }
    getField(field, def = null) {
        const name = field instanceof ExtensionConfigField ? field.name : field;
        const key = "_config_" + name;
        return new Promise((res, rej) => {
            chrome.storage.sync.get(key, items => {
                var _a, _b;
                res((_b = (_a = items[key]) !== null && _a !== void 0 ? _a : def) !== null && _b !== void 0 ? _b : this[name].def);
            });
        });
    }
    getFields() {
        const fields = this.getAllFieldSet();
        return new Promise((res, rej) => {
            chrome.storage.sync.get(fields.map(e => CONFIG_PREFIX + e), items => {
                res(Object.fromEntries(fields.map(name => { var _a; return [name, (_a = items[CONFIG_PREFIX + name]) !== null && _a !== void 0 ? _a : this[name].def]; })));
            });
        });
    }
    setField(field, value) {
        const name = field instanceof ExtensionConfigField ? field.name : field;
        return new Promise((res, rej) => {
            chrome.storage.sync.set({ [CONFIG_PREFIX + name]: value }, () => {
                res(undefined);
            });
        });
    }
    setValues(value) {
        return new Promise((res, rej) => {
            chrome.storage.sync.set(Object.fromEntries(Object.entries(value).map(e => [CONFIG_PREFIX + e[0], e[1]])), () => {
                res(undefined);
            });
        });
    }
    getAllFieldSet() {
        return Object.entries(this).filter(([key, value]) => value instanceof ExtensionConfigField).map(e => e[0]);
    }
}());

;// CONCATENATED MODULE: ./node_modules/dexie/dist/modern/dexie.min.mjs
const e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,t=Object.keys,n=Array.isArray;function r(e,n){return"object"!=typeof n||t(n).forEach((function(t){e[t]=n[t]})),e}"undefined"==typeof Promise||e.Promise||(e.Promise=Promise);const s=Object.getPrototypeOf,i={}.hasOwnProperty;function o(e,t){return i.call(e,t)}function a(e,n){"function"==typeof n&&(n=n(s(e))),("undefined"==typeof Reflect?t:Reflect.ownKeys)(n).forEach((t=>{l(e,t,n[t])}))}const u=Object.defineProperty;function l(e,t,n,s){u(e,t,r(n&&o(n,"get")&&"function"==typeof n.get?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function c(e){return{from:function(t){return e.prototype=Object.create(t.prototype),l(e.prototype,"constructor",e),{extend:a.bind(null,e.prototype)}}}}const h=Object.getOwnPropertyDescriptor;function d(e,t){let n;return h(e,t)||(n=s(e))&&d(n,t)}const f=[].slice;function p(e,t,n){return f.call(e,t,n)}function y(e,t){return t(e)}function m(e){if(!e)throw new Error("Assertion Failed")}function v(t){e.setImmediate?setImmediate(t):setTimeout(t,0)}function g(e,t){return e.reduce(((e,n,r)=>{var s=t(n,r);return s&&(e[s[0]]=s[1]),e}),{})}function b(e,t){if(o(e,t))return e[t];if(!t)return e;if("string"!=typeof t){for(var n=[],r=0,s=t.length;r<s;++r){var i=b(e,t[r]);n.push(i)}return n}var a=t.indexOf(".");if(-1!==a){var u=e[t.substr(0,a)];return void 0===u?void 0:b(u,t.substr(a+1))}}function _(e,t,r){if(e&&void 0!==t&&(!("isFrozen"in Object)||!Object.isFrozen(e)))if("string"!=typeof t&&"length"in t){m("string"!=typeof r&&"length"in r);for(var s=0,i=t.length;s<i;++s)_(e,t[s],r[s])}else{var a=t.indexOf(".");if(-1!==a){var u=t.substr(0,a),l=t.substr(a+1);if(""===l)void 0===r?n(e)&&!isNaN(parseInt(u))?e.splice(u,1):delete e[u]:e[u]=r;else{var c=e[u];c&&o(e,u)||(c=e[u]={}),_(c,l,r)}}else void 0===r?n(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=r}}function w(e){var t={};for(var n in e)o(e,n)&&(t[n]=e[n]);return t}const x=[].concat;function k(e){return x.apply([],e)}const E="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(k([8,16,32,64].map((e=>["Int","Uint","Float"].map((t=>t+e+"Array")))))).filter((t=>e[t])),P=E.map((t=>e[t]));g(E,(e=>[e,!0]));let K=null;function O(e){K="undefined"!=typeof WeakMap&&new WeakMap;const t=S(e);return K=null,t}function S(e){if(!e||"object"!=typeof e)return e;let t=K&&K.get(e);if(t)return t;if(n(e)){t=[],K&&K.set(e,t);for(var r=0,i=e.length;r<i;++r)t.push(S(e[r]))}else if(P.indexOf(e.constructor)>=0)t=e;else{const n=s(e);for(var a in t=n===Object.prototype?{}:Object.create(n),K&&K.set(e,t),e)o(e,a)&&(t[a]=S(e[a]))}return t}const{toString:A}={};function C(e){return A.call(e).slice(8,-1)}const j="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator",D="symbol"==typeof j?function(e){var t;return null!=e&&(t=e[j])&&t.apply(e)}:function(){return null},I={};function B(e){var t,r,s,i;if(1===arguments.length){if(n(e))return e.slice();if(this===I&&"string"==typeof e)return[e];if(i=D(e)){for(r=[];!(s=i.next()).done;)r.push(s.value);return r}if(null==e)return[e];if("number"==typeof(t=e.length)){for(r=new Array(t);t--;)r[t]=e[t];return r}return[e]}for(t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];return r}const T="undefined"!=typeof Symbol?e=>"AsyncFunction"===e[Symbol.toStringTag]:()=>!1;var R="undefined"!=typeof location&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function F(e,t){R=e,M=t}var M=()=>!0;const N=!new Error("").stack;function q(){if(N)try{throw q.arguments,new Error}catch(e){return e}return new Error}function $(e,t){var n=e.stack;return n?(t=t||0,0===n.indexOf(e.name)&&(t+=(e.name+e.message).split("\n").length),n.split("\n").slice(t).filter(M).map((e=>"\n"+e)).join("")):""}var U=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],L=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(U),V={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function W(e,t){this._e=q(),this.name=e,this.message=t}function Y(e,t){return e+". Errors: "+Object.keys(t).map((e=>t[e].toString())).filter(((e,t,n)=>n.indexOf(e)===t)).join("\n")}function z(e,t,n,r){this._e=q(),this.failures=t,this.failedKeys=r,this.successCount=n,this.message=Y(e,t)}function G(e,t){this._e=q(),this.name="BulkError",this.failures=Object.keys(t).map((e=>t[e])),this.failuresByPos=t,this.message=Y(e,t)}c(W).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+$(this._e,2))}},toString:function(){return this.name+": "+this.message}}),c(z).from(W),c(G).from(W);var H=L.reduce(((e,t)=>(e[t]=t+"Error",e)),{});const Q=W;var X=L.reduce(((e,t)=>{var n=t+"Error";function r(e,r){this._e=q(),this.name=n,e?"string"==typeof e?(this.message=`${e}${r?"\n "+r:""}`,this.inner=r||null):"object"==typeof e&&(this.message=`${e.name} ${e.message}`,this.inner=e):(this.message=V[t]||n,this.inner=null)}return c(r).from(Q),e[t]=r,e}),{});X.Syntax=SyntaxError,X.Type=TypeError,X.Range=RangeError;var J=U.reduce(((e,t)=>(e[t+"Error"]=X[t],e)),{});var Z=L.reduce(((e,t)=>(-1===["Syntax","Type","Range"].indexOf(t)&&(e[t+"Error"]=X[t]),e)),{});function ee(){}function te(e){return e}function ne(e,t){return null==e||e===te?t:function(n){return t(e(n))}}function re(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function se(e,t){return e===ee?t:function(){var n=e.apply(this,arguments);void 0!==n&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=t.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?re(r,this.onsuccess):r),s&&(this.onerror=this.onerror?re(s,this.onerror):s),void 0!==i?i:n}}function ie(e,t){return e===ee?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?re(n,this.onsuccess):n),r&&(this.onerror=this.onerror?re(r,this.onerror):r)}}function oe(e,t){return e===ee?t:function(n){var s=e.apply(this,arguments);r(n,s);var i=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var a=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?re(i,this.onsuccess):i),o&&(this.onerror=this.onerror?re(o,this.onerror):o),void 0===s?void 0===a?void 0:a:r(s,a)}}function ae(e,t){return e===ee?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function ue(e,t){return e===ee?t:function(){var n=e.apply(this,arguments);if(n&&"function"==typeof n.then){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then((function(){return t.apply(r,i)}))}return t.apply(this,arguments)}}Z.ModifyError=z,Z.DexieError=W,Z.BulkError=G;var le={};const[ce,he,de]="undefined"==typeof Promise?[]:(()=>{let e=Promise.resolve();if("undefined"==typeof crypto||!crypto.subtle)return[e,s(e),e];const t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,s(t),e]})(),fe=he&&he.then,pe=ce&&ce.constructor,ye=!!de;var me=!1,ve=de?()=>{de.then(qe)}:e.setImmediate?setImmediate.bind(null,qe):e.MutationObserver?()=>{var e=document.createElement("div");new MutationObserver((()=>{qe(),e=null})).observe(e,{attributes:!0}),e.setAttribute("i","1")}:()=>{setTimeout(qe,0)},ge=function(e,t){Oe.push([e,t]),_e&&(ve(),_e=!1)},be=!0,_e=!0,we=[],xe=[],ke=null,Ee=te,Pe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ct,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach((e=>{try{ct(e[0],e[1])}catch(e){}}))}},Ke=Pe,Oe=[],Se=0,Ae=[];function Ce(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=ee,this._lib=!1;var t=this._PSD=Ke;if(R&&(this._stackHolder=q(),this._prev=null,this._numPrev=0),"function"!=typeof e){if(e!==le)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(!1===this._state&&Be(this,this._value))}this._state=null,this._value=null,++t.ref,Ie(this,e)}const je={get:function(){var e=Ke,t=Qe;function n(n,r){var s=!e.global&&(e!==Ke||t!==Qe);const i=s&&!et();var o=new Ce(((t,o)=>{Re(this,new De(ut(n,e,s,i),ut(r,e,s,i),t,o,e))}));return R&&Ne(o,this),o}return n.prototype=le,n},set:function(e){l(this,"then",e&&e.prototype===le?je:{get:function(){return e},set:je.set})}};function De(e,t,n,r,s){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r,this.psd=s}function Ie(e,t){try{t((t=>{if(null===e._state){if(t===e)throw new TypeError("A promise cannot be resolved with itself.");var n=e._lib&&$e();t&&"function"==typeof t.then?Ie(e,((e,n)=>{t instanceof Ce?t._then(e,n):t.then(e,n)})):(e._state=!0,e._value=t,Te(e)),n&&Ue()}}),Be.bind(null,e))}catch(t){Be(e,t)}}function Be(e,t){if(xe.push(t),null===e._state){var n=e._lib&&$e();t=Ee(t),e._state=!1,e._value=t,R&&null!==t&&"object"==typeof t&&!t._promise&&function(e,t,n){try{e.apply(null,n)}catch(e){t&&t(e)}}((()=>{var n=d(t,"stack");t._promise=e,l(t,"stack",{get:()=>me?n&&(n.get?n.get.apply(t):n.value):e.stack})})),function(e){we.some((t=>t._value===e._value))||we.push(e)}(e),Te(e),n&&Ue()}}function Te(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)Re(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),0===Se&&(++Se,ge((()=>{0==--Se&&Le()}),[]))}function Re(e,t){if(null!==e._state){var n=e._state?t.onFulfilled:t.onRejected;if(null===n)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Se,ge(Fe,[n,e,t])}else e._listeners.push(t)}function Fe(e,t,n){try{ke=t;var r,s=t._value;t._state?r=e(s):(xe.length&&(xe=[]),r=e(s),-1===xe.indexOf(s)&&function(e){var t=we.length;for(;t;)if(we[--t]._value===e._value)return void we.splice(t,1)}(t)),n.resolve(r)}catch(e){n.reject(e)}finally{ke=null,0==--Se&&Le(),--n.psd.ref||n.psd.finalize()}}function Me(e,t,n){if(t.length===n)return t;var r="";if(!1===e._state){var s,i,o=e._value;null!=o?(s=o.name||"Error",i=o.message||o,r=$(o,0)):(s=o,i=""),t.push(s+(i?": "+i:"")+r)}return R&&((r=$(e._stackHolder,2))&&-1===t.indexOf(r)&&t.push(r),e._prev&&Me(e._prev,t,n)),t}function Ne(e,t){var n=t?t._numPrev+1:0;n<100&&(e._prev=t,e._numPrev=n)}function qe(){$e()&&Ue()}function $e(){var e=be;return be=!1,_e=!1,e}function Ue(){var e,t,n;do{for(;Oe.length>0;)for(e=Oe,Oe=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}}while(Oe.length>0);be=!0,_e=!0}function Le(){var e=we;we=[],e.forEach((e=>{e._PSD.onunhandled.call(null,e._value,e)}));for(var t=Ae.slice(0),n=t.length;n;)t[--n]()}function Ve(e){return new Ce(le,!1,e)}function We(e,t){var n=Ke;return function(){var r=$e(),s=Ke;try{return st(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{st(s,!1),r&&Ue()}}}a(Ce.prototype,{then:je,_then:function(e,t){Re(this,new De(null,null,e,t,Ke))},catch:function(e){if(1===arguments.length)return this.then(null,e);var t=arguments[0],n=arguments[1];return"function"==typeof t?this.then(null,(e=>e instanceof t?n(e):Ve(e))):this.then(null,(e=>e&&e.name===t?n(e):Ve(e)))},finally:function(e){return this.then((t=>(e(),t)),(t=>(e(),Ve(t))))},stack:{get:function(){if(this._stack)return this._stack;try{me=!0;var e=Me(this,[],20).join("\nFrom previous: ");return null!==this._state&&(this._stack=e),e}finally{me=!1}}},timeout:function(e,t){return e<1/0?new Ce(((n,r)=>{var s=setTimeout((()=>r(new X.Timeout(t))),e);this.then(n,r).finally(clearTimeout.bind(null,s))})):this}}),"undefined"!=typeof Symbol&&Symbol.toStringTag&&l(Ce.prototype,Symbol.toStringTag,"Dexie.Promise"),Pe.env=it(),a(Ce,{all:function(){var e=B.apply(null,arguments).map(tt);return new Ce((function(t,n){0===e.length&&t([]);var r=e.length;e.forEach(((s,i)=>Ce.resolve(s).then((n=>{e[i]=n,--r||t(e)}),n)))}))},resolve:e=>{if(e instanceof Ce)return e;if(e&&"function"==typeof e.then)return new Ce(((t,n)=>{e.then(t,n)}));var t=new Ce(le,!0,e);return Ne(t,ke),t},reject:Ve,race:function(){var e=B.apply(null,arguments).map(tt);return new Ce(((t,n)=>{e.map((e=>Ce.resolve(e).then(t,n)))}))},PSD:{get:()=>Ke,set:e=>Ke=e},totalEchoes:{get:()=>Qe},newPSD:Je,usePSD:ot,scheduler:{get:()=>ge,set:e=>{ge=e}},rejectionMapper:{get:()=>Ee,set:e=>{Ee=e}},follow:(e,t)=>new Ce(((n,r)=>Je(((t,n)=>{var r=Ke;r.unhandleds=[],r.onunhandled=n,r.finalize=re((function(){!function(e){function t(){e(),Ae.splice(Ae.indexOf(t),1)}Ae.push(t),++Se,ge((()=>{0==--Se&&Le()}),[])}((()=>{0===this.unhandleds.length?t():n(this.unhandleds[0])}))}),r.finalize),e()}),t,n,r)))}),pe&&(pe.allSettled&&l(Ce,"allSettled",(function(){const e=B.apply(null,arguments).map(tt);return new Ce((t=>{0===e.length&&t([]);let n=e.length;const r=new Array(n);e.forEach(((e,s)=>Ce.resolve(e).then((e=>r[s]={status:"fulfilled",value:e}),(e=>r[s]={status:"rejected",reason:e})).then((()=>--n||t(r)))))}))})),pe.any&&"undefined"!=typeof AggregateError&&l(Ce,"any",(function(){const e=B.apply(null,arguments).map(tt);return new Ce(((t,n)=>{0===e.length&&n(new AggregateError([]));let r=e.length;const s=new Array(r);e.forEach(((e,i)=>Ce.resolve(e).then((e=>t(e)),(e=>{s[i]=e,--r||n(new AggregateError(s))}))))}))})));const Ye={awaits:0,echoes:0,id:0};var ze=0,Ge=[],He=0,Qe=0,Xe=0;function Je(e,t,n,s){var i=Ke,o=Object.create(i);o.parent=i,o.ref=0,o.global=!1,o.id=++Xe;var a=Pe.env;o.env=ye?{Promise:Ce,PromiseProp:{value:Ce,configurable:!0,writable:!0},all:Ce.all,race:Ce.race,allSettled:Ce.allSettled,any:Ce.any,resolve:Ce.resolve,reject:Ce.reject,nthen:lt(a.nthen,o),gthen:lt(a.gthen,o)}:{},t&&r(o,t),++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()};var u=ot(o,e,n,s);return 0===o.ref&&o.finalize(),u}function Ze(){return Ye.id||(Ye.id=++ze),++Ye.awaits,Ye.echoes+=100,Ye.id}function et(){return!!Ye.awaits&&(0==--Ye.awaits&&(Ye.id=0),Ye.echoes=100*Ye.awaits,!0)}function tt(e){return Ye.echoes&&e&&e.constructor===pe?(Ze(),e.then((e=>(et(),e)),(e=>(et(),ht(e))))):e}function nt(e){++Qe,Ye.echoes&&0!=--Ye.echoes||(Ye.echoes=Ye.id=0),Ge.push(Ke),st(e,!0)}function rt(){var e=Ge[Ge.length-1];Ge.pop(),st(e,!1)}function st(t,n){var r=Ke;if((n?!Ye.echoes||He++&&t===Ke:!He||--He&&t===Ke)||at(n?nt.bind(null,t):rt),t!==Ke&&(Ke=t,r===Pe&&(Pe.env=it()),ye)){var s=Pe.env.Promise,i=t.env;he.then=i.nthen,s.prototype.then=i.gthen,(r.global||t.global)&&(Object.defineProperty(e,"Promise",i.PromiseProp),s.all=i.all,s.race=i.race,s.resolve=i.resolve,s.reject=i.reject,i.allSettled&&(s.allSettled=i.allSettled),i.any&&(s.any=i.any))}}function it(){var t=e.Promise;return ye?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(e,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:he.then,gthen:t.prototype.then}:{}}function ot(e,t,n,r,s){var i=Ke;try{return st(e,!0),t(n,r,s)}finally{st(i,!1)}}function at(e){fe.call(ce,e)}function ut(e,t,n,r){return"function"!=typeof e?e:function(){var s=Ke;n&&Ze(),st(t,!0);try{return e.apply(this,arguments)}finally{st(s,!1),r&&at(et)}}}function lt(e,t){return function(n,r){return e.call(this,ut(n,t),ut(r,t))}}-1===(""+fe).indexOf("[native code]")&&(Ze=et=ee);function ct(t,n){var s;try{s=n.onuncatched(t)}catch(e){}if(!1!==s)try{var i,o={promise:n,reason:t};if(e.document&&document.createEvent?((i=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),r(i,o)):e.CustomEvent&&r(i=new CustomEvent("unhandledrejection",{detail:o}),o),i&&e.dispatchEvent&&(dispatchEvent(i),!e.PromiseRejectionEvent&&e.onunhandledrejection))try{e.onunhandledrejection(i)}catch(e){}R&&i&&!i.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch(e){}}var ht=Ce.reject;function dt(e,t,n,r){if(e.idbdb&&(e._state.openComplete||Ke.letThrough||e._vip)){var s=e._createTransaction(t,n,e._dbSchema);try{s.create(),e._state.PR1398_maxLoop=3}catch(s){return s.name===H.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e._close(),e.open().then((()=>dt(e,t,n,r)))):ht(s)}return s._promise(t,((e,t)=>Je((()=>(Ke.trans=s,r(e,t,s)))))).then((e=>s._completion.then((()=>e))))}if(e._state.openComplete)return ht(new X.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._options.autoOpen)return ht(new X.DatabaseClosed);e.open().catch(ee)}return e._state.dbReadyPromise.then((()=>dt(e,t,n,r)))}const ft=String.fromCharCode(65535),pt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",yt=[],mt="undefined"!=typeof navigator&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),vt=mt,gt=mt,bt=e=>!/(dexie\.js|dexie\.min\.js)/.test(e);function _t(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}const wt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function xt(e){return"string"!=typeof e||/\./.test(e)?e=>e:t=>(void 0===t[e]&&e in t&&delete(t=O(t))[e],t)}class kt{_trans(e,t,n){const r=this._tx||Ke.trans,s=this.name;function i(e,n,r){if(!r.schema[s])throw new X.NotFound("Table "+s+" not part of transaction");return t(r.idbtrans,r)}const o=$e();try{return r&&r.db===this.db?r===Ke.trans?r._promise(e,i,n):Je((()=>r._promise(e,i,n)),{trans:r,transless:Ke.transless||Ke}):dt(this.db,e,[this.name],i)}finally{o&&Ue()}}get(e,t){return e&&e.constructor===Object?this.where(e).first(t):this._trans("readonly",(t=>this.core.get({trans:t,key:e}).then((e=>this.hook.reading.fire(e))))).then(t)}where(e){if("string"==typeof e)return new this.db.WhereClause(this,e);if(n(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const r=t(e);if(1===r.length)return this.where(r[0]).equals(e[r[0]]);const s=this.schema.indexes.concat(this.schema.primKey).filter((e=>e.compound&&r.every((t=>e.keyPath.indexOf(t)>=0))&&e.keyPath.every((e=>r.indexOf(e)>=0))))[0];if(s&&this.db._maxKey!==ft)return this.where(s.name).equals(s.keyPath.map((t=>e[t])));!s&&R&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${r.join("+")}]`);const{idxByName:i}=this.schema,o=this.db._deps.indexedDB;function a(e,t){try{return 0===o.cmp(e,t)}catch(e){return!1}}const[u,l]=r.reduce((([t,r],s)=>{const o=i[s],u=e[s];return[t||o,t||!o?_t(r,o&&o.multi?e=>{const t=b(e,s);return n(t)&&t.some((e=>a(u,e)))}:e=>a(u,b(e,s))):r]}),[null,null]);return u?this.where(u.name).equals(e[u.keyPath]).filter(l):s?this.filter(l):this.where(r).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,n(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const t=t=>{if(!t)return t;const n=Object.create(e.prototype);for(var r in t)if(o(t,r))try{n[r]=t[r]}catch(e){}return n};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=t,this.hook("reading",t),e}defineClass(){return this.mapToClass((function(e){r(this,e)}))}add(e,t){const{auto:n,keyPath:r}=this.schema.primKey;let s=e;return r&&n&&(s=xt(r)(e)),this._trans("readwrite",(e=>this.core.mutate({trans:e,type:"add",keys:null!=t?[t]:null,values:[s]}))).then((e=>e.numFailures?Ce.reject(e.failures[0]):e.lastResult)).then((t=>{if(r)try{_(e,r,t)}catch(e){}return t}))}update(e,r){if("object"!=typeof e||n(e))return this.where(":id").equals(e).modify(r);{const n=b(e,this.schema.primKey.keyPath);if(void 0===n)return ht(new X.InvalidArgument("Given object does not contain its primary key"));try{"function"!=typeof r?t(r).forEach((t=>{_(e,t,r[t])})):r(e,{value:e,primKey:n})}catch(e){}return this.where(":id").equals(n).modify(r)}}put(e,t){const{auto:n,keyPath:r}=this.schema.primKey;let s=e;return r&&n&&(s=xt(r)(e)),this._trans("readwrite",(e=>this.core.mutate({trans:e,type:"put",values:[s],keys:null!=t?[t]:null}))).then((e=>e.numFailures?Ce.reject(e.failures[0]):e.lastResult)).then((t=>{if(r)try{_(e,r,t)}catch(e){}return t}))}delete(e){return this._trans("readwrite",(t=>this.core.mutate({trans:t,type:"delete",keys:[e]}))).then((e=>e.numFailures?Ce.reject(e.failures[0]):void 0))}clear(){return this._trans("readwrite",(e=>this.core.mutate({trans:e,type:"deleteRange",range:wt}))).then((e=>e.numFailures?Ce.reject(e.failures[0]):void 0))}bulkGet(e){return this._trans("readonly",(t=>this.core.getMany({keys:e,trans:t}).then((e=>e.map((e=>this.hook.reading.fire(e)))))))}bulkAdd(e,t,n){const r=Array.isArray(t)?t:void 0,s=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",(t=>{const{auto:n,keyPath:i}=this.schema.primKey;if(i&&r)throw new X.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new X.InvalidArgument("Arguments objects and keys must have the same length");const o=e.length;let a=i&&n?e.map(xt(i)):e;return this.core.mutate({trans:t,type:"add",keys:r,values:a,wantResults:s}).then((({numFailures:e,results:t,lastResult:n,failures:r})=>{if(0===e)return s?t:n;throw new G(`${this.name}.bulkAdd(): ${e} of ${o} operations failed`,r)}))}))}bulkPut(e,t,n){const r=Array.isArray(t)?t:void 0,s=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",(t=>{const{auto:n,keyPath:i}=this.schema.primKey;if(i&&r)throw new X.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new X.InvalidArgument("Arguments objects and keys must have the same length");const o=e.length;let a=i&&n?e.map(xt(i)):e;return this.core.mutate({trans:t,type:"put",keys:r,values:a,wantResults:s}).then((({numFailures:e,results:t,lastResult:n,failures:r})=>{if(0===e)return s?t:n;throw new G(`${this.name}.bulkPut(): ${e} of ${o} operations failed`,r)}))}))}bulkDelete(e){const t=e.length;return this._trans("readwrite",(t=>this.core.mutate({trans:t,type:"delete",keys:e}))).then((({numFailures:e,lastResult:n,failures:r})=>{if(0===e)return n;throw new G(`${this.name}.bulkDelete(): ${e} of ${t} operations failed`,r)}))}}function Et(e){var r={},s=function(t,n){if(n){for(var s=arguments.length,i=new Array(s-1);--s;)i[s-1]=arguments[s];return r[t].subscribe.apply(null,i),e}if("string"==typeof t)return r[t]};s.addEventType=a;for(var i=1,o=arguments.length;i<o;++i)a(arguments[i]);return s;function a(e,t,n){if("object"==typeof e)return u(e);t||(t=ae),n||(n=ee);var i={subscribers:[],fire:n,subscribe:function(e){-1===i.subscribers.indexOf(e)&&(i.subscribers.push(e),i.fire=t(i.fire,e))},unsubscribe:function(e){i.subscribers=i.subscribers.filter((function(t){return t!==e})),i.fire=i.subscribers.reduce(t,n)}};return r[e]=s[e]=i,i}function u(e){t(e).forEach((function(t){var r=e[t];if(n(r))a(t,e[t][0],e[t][1]);else{if("asap"!==r)throw new X.InvalidArgument("Invalid event config");var s=a(t,te,(function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];s.subscribers.forEach((function(e){v((function(){e.apply(null,t)}))}))}))}}))}}function Pt(e,t){return c(t).from({prototype:e}),t}function Kt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ot(e,t){e.filter=_t(e.filter,t)}function St(e,t,n){var r=e.replayFilter;e.replayFilter=r?()=>_t(r(),t()):t,e.justLimit=n&&!r}function At(e,t){if(e.isPrimKey)return t.primaryKey;const n=t.getIndexByKeyPath(e.index);if(!n)throw new X.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return n}function Ct(e,t,n){const r=At(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:"prev"===e.dir,unique:!!e.unique,query:{index:r,range:e.range}})}function jt(e,t,n,r){const s=e.replayFilter?_t(e.filter,e.replayFilter()):e.filter;if(e.or){const i={},a=(e,n,r)=>{if(!s||s(n,r,(e=>n.stop(e)),(e=>n.fail(e)))){var a=n.primaryKey,u=""+a;"[object ArrayBuffer]"===u&&(u=""+new Uint8Array(a)),o(i,u)||(i[u]=!0,t(e,n,r))}};return Promise.all([e.or._iterate(a,n),Dt(Ct(e,r,n),e.algorithm,a,!e.keysOnly&&e.valueMapper)])}return Dt(Ct(e,r,n),_t(e.algorithm,s),t,!e.keysOnly&&e.valueMapper)}function Dt(e,t,n,r){var s=We(r?(e,t,s)=>n(r(e),t,s):n);return e.then((e=>{if(e)return e.start((()=>{var n=()=>e.continue();t&&!t(e,(e=>n=e),(t=>{e.stop(t),n=ee}),(t=>{e.fail(t),n=ee}))||s(e.value,e,(e=>n=e)),n()}))}))}function It(e,t){try{const n=Bt(e),r=Bt(t);if(n!==r)return"Array"===n?1:"Array"===r?-1:"binary"===n?1:"binary"===r?-1:"string"===n?1:"string"===r?-1:"Date"===n?1:"Date"!==r?NaN:-1;switch(n){case"number":case"Date":case"string":return e>t?1:e<t?-1:0;case"binary":return function(e,t){const n=e.length,r=t.length,s=n<r?n:r;for(let n=0;n<s;++n)if(e[n]!==t[n])return e[n]<t[n]?-1:1;return n===r?0:n<r?-1:1}(Tt(e),Tt(t));case"Array":return function(e,t){const n=e.length,r=t.length,s=n<r?n:r;for(let n=0;n<s;++n){const r=It(e[n],t[n]);if(0!==r)return r}return n===r?0:n<r?-1:1}(e,t)}}catch(e){}return NaN}function Bt(e){const t=typeof e;if("object"!==t)return t;if(ArrayBuffer.isView(e))return"binary";const n=C(e);return"ArrayBuffer"===n?"binary":n}function Tt(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}class Rt{_read(e,t){var n=this._ctx;return n.error?n.table._trans(null,ht.bind(null,n.error)):n.table._trans("readonly",e).then(t)}_write(e){var t=this._ctx;return t.error?t.table._trans(null,ht.bind(null,t.error)):t.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var t=this._ctx;t.algorithm=_t(t.algorithm,e)}_iterate(e,t){return jt(this._ctx,e,t,this._ctx.table.core)}clone(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&r(n,e),t._ctx=n,t}raw(){return this._ctx.valueMapper=null,this}each(e){var t=this._ctx;return this._read((n=>jt(t,e,n,t.table.core)))}count(e){return this._read((e=>{const t=this._ctx,n=t.table.core;if(Kt(t,!0))return n.count({trans:e,query:{index:At(t,n.schema),range:t.range}}).then((e=>Math.min(e,t.limit)));var r=0;return jt(t,(()=>(++r,!1)),e,n).then((()=>r))})).then(e)}sortBy(e,t){const n=e.split(".").reverse(),r=n[0],s=n.length-1;function i(e,t){return t?i(e[n[t]],t-1):e[r]}var o="next"===this._ctx.dir?1:-1;function a(e,t){var n=i(e,s),r=i(t,s);return n<r?-o:n>r?o:0}return this.toArray((function(e){return e.sort(a)})).then(t)}toArray(e){return this._read((e=>{var t=this._ctx;if("next"===t.dir&&Kt(t,!0)&&t.limit>0){const{valueMapper:n}=t,r=At(t,t.table.core.schema);return t.table.core.query({trans:e,limit:t.limit,values:!0,query:{index:r,range:t.range}}).then((({result:e})=>n?e.map(n):e))}{const n=[];return jt(t,(e=>n.push(e)),e,t.table.core).then((()=>n))}}),e)}offset(e){var t=this._ctx;return e<=0||(t.offset+=e,Kt(t)?St(t,(()=>{var t=e;return(e,n)=>0===t||(1===t?(--t,!1):(n((()=>{e.advance(t),t=0})),!1))})):St(t,(()=>{var t=e;return()=>--t<0}))),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),St(this._ctx,(()=>{var t=e;return function(e,n,r){return--t<=0&&n(r),t>=0}}),!0),this}until(e,t){return Ot(this._ctx,(function(n,r,s){return!e(n.value)||(r(s),t)})),this}first(e){return this.limit(1).toArray((function(e){return e[0]})).then(e)}last(e){return this.reverse().first(e)}filter(e){var t,n;return Ot(this._ctx,(function(t){return e(t.value)})),t=this._ctx,n=e,t.isMatch=_t(t.isMatch,n),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each((function(t,n){e(n.key,n)}))}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each((function(t,n){e(n.primaryKey,n)}))}keys(e){var t=this._ctx;t.keysOnly=!t.isMatch;var n=[];return this.each((function(e,t){n.push(t.key)})).then((function(){return n})).then(e)}primaryKeys(e){var t=this._ctx;if("next"===t.dir&&Kt(t,!0)&&t.limit>0)return this._read((e=>{var n=At(t,t.table.core.schema);return t.table.core.query({trans:e,values:!1,limit:t.limit,query:{index:n,range:t.range}})})).then((({result:e})=>e)).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each((function(e,t){n.push(t.primaryKey)})).then((function(){return n})).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys((function(e){return e[0]})).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,t=e.index&&e.table.schema.idxByName[e.index];if(!t||!t.multi)return this;var n={};return Ot(this._ctx,(function(e){var t=e.primaryKey.toString(),r=o(n,t);return n[t]=!0,!r})),this}modify(e){var n=this._ctx;return this._write((r=>{var s;if("function"==typeof e)s=e;else{var i=t(e),o=i.length;s=function(t){for(var n=!1,r=0;r<o;++r){var s=i[r],a=e[s];b(t,s)!==a&&(_(t,s,a),n=!0)}return n}}const a=n.table.core,{outbound:u,extractKey:l}=a.schema.primaryKey,c=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],p=(e,n)=>{const{failures:r,numFailures:s}=n;d+=e-s;for(let e of t(r))h.push(r[e])};return this.clone().primaryKeys().then((t=>{const i=o=>{const h=Math.min(c,t.length-o);return a.getMany({trans:r,keys:t.slice(o,o+h),cache:"immutable"}).then((d=>{const f=[],y=[],m=u?[]:null,v=[];for(let e=0;e<h;++e){const n=d[e],r={value:O(n),primKey:t[o+e]};!1!==s.call(r,r.value,r)&&(null==r.value?v.push(t[o+e]):u||0===It(l(n),l(r.value))?(y.push(r.value),u&&m.push(t[o+e])):(v.push(t[o+e]),f.push(r.value)))}const g=Kt(n)&&n.limit===1/0&&("function"!=typeof e||e===Ft)&&{index:n.index,range:n.range};return Promise.resolve(f.length>0&&a.mutate({trans:r,type:"add",values:f}).then((e=>{for(let t in e.failures)v.splice(parseInt(t),1);p(f.length,e)}))).then((()=>(y.length>0||g&&"object"==typeof e)&&a.mutate({trans:r,type:"put",keys:m,values:y,criteria:g,changeSpec:"function"!=typeof e&&e}).then((e=>p(y.length,e))))).then((()=>(v.length>0||g&&e===Ft)&&a.mutate({trans:r,type:"delete",keys:v,criteria:g}).then((e=>p(v.length,e))))).then((()=>t.length>o+h&&i(o+c)))}))};return i(0).then((()=>{if(h.length>0)throw new z("Error modifying one or more objects",h,d,f);return t.length}))}))}))}delete(){var e=this._ctx,t=e.range;return Kt(e)&&(e.isPrimKey&&!gt||3===t.type)?this._write((n=>{const{primaryKey:r}=e.table.core.schema,s=t;return e.table.core.count({trans:n,query:{index:r,range:s}}).then((t=>e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then((({failures:e,lastResult:n,results:r,numFailures:s})=>{if(s)throw new z("Could not delete some values",Object.keys(e).map((t=>e[t])),t-s);return t-s}))))})):this.modify(Ft)}}const Ft=(e,t)=>t.value=null;function Mt(e,t){return e<t?-1:e===t?0:1}function Nt(e,t){return e>t?-1:e===t?0:1}function qt(e,t,n){var r=e instanceof Yt?new e.Collection(e):e;return r._ctx.error=n?new n(t):new TypeError(t),r}function $t(e){return new e.Collection(e,(()=>Wt(""))).limit(0)}function Ut(e,t,n,r,s,i){for(var o=Math.min(e.length,r.length),a=-1,u=0;u<o;++u){var l=t[u];if(l!==r[u])return s(e[u],n[u])<0?e.substr(0,u)+n[u]+n.substr(u+1):s(e[u],r[u])<0?e.substr(0,u)+r[u]+n.substr(u+1):a>=0?e.substr(0,a)+t[a]+n.substr(a+1):null;s(e[u],l)<0&&(a=u)}return o<r.length&&"next"===i?e+n.substr(e.length):o<e.length&&"prev"===i?e.substr(0,n.length):a<0?null:e.substr(0,a)+r[a]+n.substr(a+1)}function Lt(e,t,n,r){var s,i,o,a,u,l,c,h=n.length;if(!n.every((e=>"string"==typeof e)))return qt(e,"String expected.");function d(e){s=function(e){return"next"===e?e=>e.toUpperCase():e=>e.toLowerCase()}(e),i=function(e){return"next"===e?e=>e.toLowerCase():e=>e.toUpperCase()}(e),o="next"===e?Mt:Nt;var t=n.map((function(e){return{lower:i(e),upper:s(e)}})).sort((function(e,t){return o(e.lower,t.lower)}));a=t.map((function(e){return e.upper})),u=t.map((function(e){return e.lower})),l=e,c="next"===e?"":r}d("next");var f=new e.Collection(e,(()=>Vt(a[0],u[h-1]+r)));f._ondirectionchange=function(e){d(e)};var p=0;return f._addAlgorithm((function(e,n,r){var s=e.key;if("string"!=typeof s)return!1;var d=i(s);if(t(d,u,p))return!0;for(var f=null,y=p;y<h;++y){var m=Ut(s,d,a[y],u[y],o,l);null===m&&null===f?p=y+1:(null===f||o(f,m)>0)&&(f=m)}return n(null!==f?function(){e.continue(f+c)}:r),!1})),f}function Vt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function Wt(e){return{type:1,lower:e,upper:e}}class Yt{get Collection(){return this._ctx.table.db.Collection}between(e,t,n,r){n=!1!==n,r=!0===r;try{return this._cmp(e,t)>0||0===this._cmp(e,t)&&(n||r)&&(!n||!r)?$t(this):new this.Collection(this,(()=>Vt(e,t,!n,!r)))}catch(e){return qt(this,pt)}}equals(e){return null==e?qt(this,pt):new this.Collection(this,(()=>Wt(e)))}above(e){return null==e?qt(this,pt):new this.Collection(this,(()=>Vt(e,void 0,!0)))}aboveOrEqual(e){return null==e?qt(this,pt):new this.Collection(this,(()=>Vt(e,void 0,!1)))}below(e){return null==e?qt(this,pt):new this.Collection(this,(()=>Vt(void 0,e,!1,!0)))}belowOrEqual(e){return null==e?qt(this,pt):new this.Collection(this,(()=>Vt(void 0,e)))}startsWith(e){return"string"!=typeof e?qt(this,"String expected."):this.between(e,e+ft,!0,!0)}startsWithIgnoreCase(e){return""===e?this.startsWith(e):Lt(this,((e,t)=>0===e.indexOf(t[0])),[e],ft)}equalsIgnoreCase(e){return Lt(this,((e,t)=>e===t[0]),[e],"")}anyOfIgnoreCase(){var e=B.apply(I,arguments);return 0===e.length?$t(this):Lt(this,((e,t)=>-1!==t.indexOf(e)),e,"")}startsWithAnyOfIgnoreCase(){var e=B.apply(I,arguments);return 0===e.length?$t(this):Lt(this,((e,t)=>t.some((t=>0===e.indexOf(t)))),e,ft)}anyOf(){const e=B.apply(I,arguments);let t=this._cmp;try{e.sort(t)}catch(e){return qt(this,pt)}if(0===e.length)return $t(this);const n=new this.Collection(this,(()=>Vt(e[0],e[e.length-1])));n._ondirectionchange=n=>{t="next"===n?this._ascending:this._descending,e.sort(t)};let r=0;return n._addAlgorithm(((n,s,i)=>{const o=n.key;for(;t(o,e[r])>0;)if(++r,r===e.length)return s(i),!1;return 0===t(o,e[r])||(s((()=>{n.continue(e[r])})),!1)})),n}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=B.apply(I,arguments);if(0===e.length)return new this.Collection(this);try{e.sort(this._ascending)}catch(e){return qt(this,pt)}const t=e.reduce(((e,t)=>e?e.concat([[e[e.length-1][1],t]]):[[-(1/0),t]]),null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,t){const n=this._cmp,r=this._ascending,s=this._descending,i=this._min,o=this._max;if(0===e.length)return $t(this);if(!e.every((e=>void 0!==e[0]&&void 0!==e[1]&&r(e[0],e[1])<=0)))return qt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",X.InvalidArgument);const a=!t||!1!==t.includeLowers,u=t&&!0===t.includeUppers;let l,c=r;function h(e,t){return c(e[0],t[0])}try{l=e.reduce((function(e,t){let r=0,s=e.length;for(;r<s;++r){const s=e[r];if(n(t[0],s[1])<0&&n(t[1],s[0])>0){s[0]=i(s[0],t[0]),s[1]=o(s[1],t[1]);break}}return r===s&&e.push(t),e}),[]),l.sort(h)}catch(e){return qt(this,pt)}let d=0;const f=u?e=>r(e,l[d][1])>0:e=>r(e,l[d][1])>=0,p=a?e=>s(e,l[d][0])>0:e=>s(e,l[d][0])>=0;let y=f;const m=new this.Collection(this,(()=>Vt(l[0][0],l[l.length-1][1],!a,!u)));return m._ondirectionchange=e=>{"next"===e?(y=f,c=r):(y=p,c=s),l.sort(h)},m._addAlgorithm(((e,t,n)=>{for(var s=e.key;y(s);)if(++d,d===l.length)return t(n),!1;return!!function(e){return!f(e)&&!p(e)}(s)||(0===this._cmp(s,l[d][1])||0===this._cmp(s,l[d][0])||t((()=>{c===r?e.continue(l[d][0]):e.continue(l[d][1])})),!1)})),m}startsWithAnyOf(){const e=B.apply(I,arguments);return e.every((e=>"string"==typeof e))?0===e.length?$t(this):this.inAnyRange(e.map((e=>[e,e+ft]))):qt(this,"startsWithAnyOf() only works with strings")}}function zt(e){return We((function(t){return Gt(t),e(t.target.error),!1}))}function Gt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}const Ht=Et(null,"storagemutated");class Qt{_lock(){return m(!Ke.global),++this._reculock,1!==this._reculock||Ke.global||(Ke.lockOwnerFor=this),this}_unlock(){if(m(!Ke.global),0==--this._reculock)for(Ke.global||(Ke.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{ot(e[1],e[0])}catch(e){}}return this}_locked(){return this._reculock&&Ke.lockOwnerFor!==this}create(e){if(!this.mode)return this;const t=this.db.idbdb,n=this.db._state.dbOpenError;if(m(!this.idbtrans),!e&&!t)switch(n&&n.name){case"DatabaseClosedError":throw new X.DatabaseClosed(n);case"MissingAPIError":throw new X.MissingAPI(n.message,n);default:throw new X.OpenFailed(n)}if(!this.active)throw new X.TransactionInactive;return m(null===this._completion._state),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):t.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=We((t=>{Gt(t),this._reject(e.error)})),e.onabort=We((t=>{Gt(t),this.active&&this._reject(new X.Abort(e.error)),this.active=!1,this.on("abort").fire(t)})),e.oncomplete=We((()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&Ht.storagemutated.fire(e.mutatedParts)})),this}_promise(e,t,n){if("readwrite"===e&&"readwrite"!==this.mode)return ht(new X.ReadOnly("Transaction is readonly"));if(!this.active)return ht(new X.TransactionInactive);if(this._locked())return new Ce(((r,s)=>{this._blockedFuncs.push([()=>{this._promise(e,t,n).then(r,s)},Ke])}));if(n)return Je((()=>{var e=new Ce(((e,n)=>{this._lock();const r=t(e,n,this);r&&r.then&&r.then(e,n)}));return e.finally((()=>this._unlock())),e._lib=!0,e}));var r=new Ce(((e,n)=>{var r=t(e,n,this);r&&r.then&&r.then(e,n)}));return r._lib=!0,r}_root(){return this.parent?this.parent._root():this}waitFor(e){var t=this._root();const n=Ce.resolve(e);if(t._waitingFor)t._waitingFor=t._waitingFor.then((()=>n));else{t._waitingFor=n,t._waitingQueue=[];var r=t.idbtrans.objectStore(t.storeNames[0]);!function e(){for(++t._spinCount;t._waitingQueue.length;)t._waitingQueue.shift()();t._waitingFor&&(r.get(-1/0).onsuccess=e)}()}var s=t._waitingFor;return new Ce(((e,r)=>{n.then((n=>t._waitingQueue.push(We(e.bind(null,n)))),(e=>t._waitingQueue.push(We(r.bind(null,e))))).finally((()=>{t._waitingFor===s&&(t._waitingFor=null)}))}))}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new X.Abort))}table(e){const t=this._memoizedTables||(this._memoizedTables={});if(o(t,e))return t[e];const n=this.schema[e];if(!n)throw new X.NotFound("Table "+e+" not part of transaction");const r=new this.db.Table(e,n,this);return r.core=this.db.core.table(e),t[e]=r,r}}function Xt(e,t,n,r,s,i,o){return{name:e,keyPath:t,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Jt(t)}}function Jt(e){return"string"==typeof e?e:e?"["+[].join.call(e,"+")+"]":""}function Zt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:g(n,(e=>[e.name,e]))}}let en=e=>{try{return e.only([[]]),en=()=>[[]],[[]]}catch(e){return en=()=>ft,ft}};function tn(e){return null==e?()=>{}:"string"==typeof e?function(e){return 1===e.split(".").length?t=>t[e]:t=>b(t,e)}(e):t=>b(t,e)}function nn(e){return[].slice.call(e)}let rn=0;function sn(e){return null==e?":id":"string"==typeof e?e:`[${e.join("+")}]`}function on(e,t,r){function s(e){if(3===e.type)return null;if(4===e.type)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:n,upper:r,lowerOpen:s,upperOpen:i}=e;return void 0===n?void 0===r?null:t.upperBound(r,!!i):void 0===r?t.lowerBound(n,!!s):t.bound(n,r,!!s,!!i)}const{schema:i,hasGetAll:o}=function(e,t){const r=nn(e.objectStoreNames);return{schema:{name:e.name,tables:r.map((e=>t.objectStore(e))).map((e=>{const{keyPath:t,autoIncrement:r}=e,s=n(t),i=null==t,o={},a={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:i,compound:s,keyPath:t,autoIncrement:r,unique:!0,extractKey:tn(t)},indexes:nn(e.indexNames).map((t=>e.index(t))).map((e=>{const{name:t,unique:r,multiEntry:s,keyPath:i}=e,a={name:t,compound:n(i),keyPath:i,unique:r,multiEntry:s,extractKey:tn(i)};return o[sn(i)]=a,a})),getIndexByKeyPath:e=>o[sn(e)]};return o[":id"]=a.primaryKey,null!=t&&(o[sn(t)]=a.primaryKey),a}))},hasGetAll:r.length>0&&"getAll"in t.objectStore(r[0])&&!("undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(e,r),a=i.tables.map((e=>function(e){const t=e.name;return{name:t,schema:e,mutate:function({trans:e,type:n,keys:r,values:i,range:o}){return new Promise(((a,u)=>{a=We(a);const l=e.objectStore(t),c=null==l.keyPath,h="put"===n||"add"===n;if(!h&&"delete"!==n&&"deleteRange"!==n)throw new Error("Invalid operation type: "+n);const{length:d}=r||i||{length:1};if(r&&i&&r.length!==i.length)throw new Error("Given keys array must have same length as given values array.");if(0===d)return a({numFailures:0,failures:{},results:[],lastResult:void 0});let f;const p=[],y=[];let m=0;const v=e=>{++m,Gt(e)};if("deleteRange"===n){if(4===o.type)return a({numFailures:m,failures:y,results:[],lastResult:void 0});3===o.type?p.push(f=l.clear()):p.push(f=l.delete(s(o)))}else{const[e,t]=h?c?[i,r]:[i,null]:[r,null];if(h)for(let r=0;r<d;++r)p.push(f=t&&void 0!==t[r]?l[n](e[r],t[r]):l[n](e[r])),f.onerror=v;else for(let t=0;t<d;++t)p.push(f=l[n](e[t])),f.onerror=v}const g=e=>{const t=e.target.result;p.forEach(((e,t)=>null!=e.error&&(y[t]=e.error))),a({numFailures:m,failures:y,results:"delete"===n?r:p.map((e=>e.result)),lastResult:t})};f.onerror=e=>{v(e),g(e)},f.onsuccess=g}))},getMany:({trans:e,keys:n})=>new Promise(((r,s)=>{r=We(r);const i=e.objectStore(t),o=n.length,a=new Array(o);let u,l=0,c=0;const h=e=>{const t=e.target;a[t._pos]=t.result,++c===l&&r(a)},d=zt(s);for(let e=0;e<o;++e)null!=n[e]&&(u=i.get(n[e]),u._pos=e,u.onsuccess=h,u.onerror=d,++l);0===l&&r(a)})),get:({trans:e,key:n})=>new Promise(((r,s)=>{r=We(r);const i=e.objectStore(t).get(n);i.onsuccess=e=>r(e.target.result),i.onerror=zt(s)})),query:function(e){return n=>new Promise(((r,i)=>{r=We(r);const{trans:o,values:a,limit:u,query:l}=n,c=u===1/0?void 0:u,{index:h,range:d}=l,f=o.objectStore(t),p=h.isPrimaryKey?f:f.index(h.name),y=s(d);if(0===u)return r({result:[]});if(e){const e=a?p.getAll(y,c):p.getAllKeys(y,c);e.onsuccess=e=>r({result:e.target.result}),e.onerror=zt(i)}else{let e=0;const t=a||!("openKeyCursor"in p)?p.openCursor(y):p.openKeyCursor(y),n=[];t.onsuccess=s=>{const i=t.result;return i?(n.push(a?i.value:i.primaryKey),++e===u?r({result:n}):void i.continue()):r({result:n})},t.onerror=zt(i)}}))}(o),openCursor:function({trans:e,values:n,query:r,reverse:i,unique:o}){return new Promise(((a,u)=>{a=We(a);const{index:l,range:c}=r,h=e.objectStore(t),d=l.isPrimaryKey?h:h.index(l.name),f=i?o?"prevunique":"prev":o?"nextunique":"next",p=n||!("openKeyCursor"in d)?d.openCursor(s(c),f):d.openKeyCursor(s(c),f);p.onerror=zt(u),p.onsuccess=We((t=>{const n=p.result;if(!n)return void a(null);n.___id=++rn,n.done=!1;const r=n.continue.bind(n);let s=n.continuePrimaryKey;s&&(s=s.bind(n));const i=n.advance.bind(n),o=()=>{throw new Error("Cursor not stopped")};n.trans=e,n.stop=n.continue=n.continuePrimaryKey=n.advance=()=>{throw new Error("Cursor not started")},n.fail=We(u),n.next=function(){let e=1;return this.start((()=>e--?this.continue():this.stop())).then((()=>this))},n.start=e=>{const t=new Promise(((e,t)=>{e=We(e),p.onerror=zt(t),n.fail=t,n.stop=t=>{n.stop=n.continue=n.continuePrimaryKey=n.advance=o,e(t)}})),a=()=>{if(p.result)try{e()}catch(e){n.fail(e)}else n.done=!0,n.start=()=>{throw new Error("Cursor behind last entry")},n.stop()};return p.onsuccess=We((e=>{p.onsuccess=a,a()})),n.continue=r,n.continuePrimaryKey=s,n.advance=i,a(),t},a(n)}),u)}))},count({query:e,trans:n}){const{index:r,range:i}=e;return new Promise(((e,o)=>{const a=n.objectStore(t),u=r.isPrimaryKey?a:a.index(r.name),l=s(i),c=l?u.count(l):u.count();c.onsuccess=We((t=>e(t.target.result))),c.onerror=zt(o)}))}}}(e))),u={};return a.forEach((e=>u[e.name]=e)),{stack:"dbcore",transaction:e.transaction.bind(e),table(e){if(!u[e])throw new Error(`Table '${e}' not found`);return u[e]},MIN_KEY:-1/0,MAX_KEY:en(t),schema:i}}function an({_novip:e},t){const n=t.db,r=function(e,t,{IDBKeyRange:n,indexedDB:r},s){const i=function(e,t){return t.reduce(((e,{create:t})=>({...e,...t(e)})),e)}(on(t,n,s),e.dbcore);return{dbcore:i}}(e._middlewares,n,e._deps,t);e.core=r.dbcore,e.tables.forEach((t=>{const n=t.name;e.core.schema.tables.some((e=>e.name===n))&&(t.core=e.core.table(n),e[n]instanceof e.Table&&(e[n].core=t.core))}))}function un({_novip:e},t,n,r){n.forEach((n=>{const s=r[n];t.forEach((t=>{const r=d(t,n);(!r||"value"in r&&void 0===r.value)&&(t===e.Transaction.prototype||t instanceof e.Transaction?l(t,n,{get(){return this.table(n)},set(e){u(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,s))}))}))}function ln({_novip:e},t){t.forEach((t=>{for(let n in t)t[n]instanceof e.Table&&delete t[n]}))}function cn(e,t){return e._cfg.version-t._cfg.version}function hn(e,n,r,s){const i=e._dbSchema,o=e._createTransaction("readwrite",e._storeNames,i);o.create(r),o._completion.catch(s);const a=o._reject.bind(o),u=Ke.transless||Ke;Je((()=>{Ke.trans=o,Ke.transless=u,0===n?(t(i).forEach((e=>{fn(r,e,i[e].primKey,i[e].indexes)})),an(e,r),Ce.follow((()=>e.on.populate.fire(o))).catch(a)):function({_novip:e},n,r,s){const i=[],o=e._versions;let a=e._dbSchema=yn(e,e.idbdb,s),u=!1;function l(){return i.length?Ce.resolve(i.shift()(r.idbtrans)).then(l):Ce.resolve()}return o.filter((e=>e._cfg.version>=n)).forEach((o=>{i.push((()=>{const i=a,l=o._cfg.dbschema;mn(e,i,s),mn(e,l,s),a=e._dbSchema=l;const c=dn(i,l);c.add.forEach((e=>{fn(s,e[0],e[1].primKey,e[1].indexes)})),c.change.forEach((e=>{if(e.recreate)throw new X.Upgrade("Not yet support for changing primary key");{const t=s.objectStore(e.name);e.add.forEach((e=>pn(t,e))),e.change.forEach((e=>{t.deleteIndex(e.name),pn(t,e)})),e.del.forEach((e=>t.deleteIndex(e)))}}));const h=o._cfg.contentUpgrade;if(h&&o._cfg.version>n){an(e,s),r._memoizedTables={},u=!0;let n=w(l);c.del.forEach((e=>{n[e]=i[e]})),ln(e,[e.Transaction.prototype]),un(e,[e.Transaction.prototype],t(n),n),r.schema=n;const o=T(h);let a;o&&Ze();const d=Ce.follow((()=>{if(a=h(r),a&&o){var e=et.bind(null,null);a.then(e,e)}}));return a&&"function"==typeof a.then?Ce.resolve(a):d.then((()=>a))}})),i.push((t=>{if(!u||!vt){!function(e,t){[].slice.call(t.db.objectStoreNames).forEach((n=>null==e[n]&&t.db.deleteObjectStore(n)))}(o._cfg.dbschema,t)}ln(e,[e.Transaction.prototype]),un(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),r.schema=e._dbSchema}))})),l().then((()=>{var e,n;n=s,t(e=a).forEach((t=>{n.db.objectStoreNames.contains(t)||fn(n,t,e[t].primKey,e[t].indexes)}))}))}(e,n,o,r).catch(a)}))}function dn(e,t){const n={del:[],add:[],change:[]};let r;for(r in e)t[r]||n.del.push(r);for(r in t){const s=e[r],i=t[r];if(s){const e={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!mt)e.recreate=!0,n.change.push(e);else{const t=s.idxByName,r=i.idxByName;let o;for(o in t)r[o]||e.del.push(o);for(o in r){const n=t[o],s=r[o];n?n.src!==s.src&&e.change.push(s):e.add.push(s)}(e.del.length>0||e.add.length>0||e.change.length>0)&&n.change.push(e)}}else n.add.push([r,i])}return n}function fn(e,t,n,r){const s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach((e=>pn(s,e))),s}function pn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function yn(e,t,n){const r={};return p(t.objectStoreNames,0).forEach((e=>{const t=n.objectStore(e);let s=t.keyPath;const i=Xt(Jt(s),s||"",!1,!1,!!t.autoIncrement,s&&"string"!=typeof s,!0),o=[];for(let e=0;e<t.indexNames.length;++e){const n=t.index(t.indexNames[e]);s=n.keyPath;var a=Xt(n.name,s,!!n.unique,!!n.multiEntry,!1,s&&"string"!=typeof s,!1);o.push(a)}r[e]=Zt(e,i,o)})),r}function mn({_novip:t},n,r){const s=r.db.objectStoreNames;for(let e=0;e<s.length;++e){const i=s[e],o=r.objectStore(i);t._hasGetAll="getAll"in o;for(let e=0;e<o.indexNames.length;++e){const t=o.indexNames[e],r=o.index(t).keyPath,s="string"==typeof r?r:"["+p(r).join("+")+"]";if(n[i]){const e=n[i].idxByName[s];e&&(e.name=t,delete n[i].idxByName[s],n[i].idxByName[t]=e)}}}"undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&e.WorkerGlobalScope&&e instanceof e.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class vn{_parseStoresSpec(e,r){t(e).forEach((t=>{if(null!==e[t]){var s=e[t].split(",").map(((e,t)=>{const r=(e=e.trim()).replace(/([&*]|\+\+)/g,""),s=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return Xt(r,s||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),n(s),0===t)})),i=s.shift();if(i.multi)throw new X.Schema("Primary key cannot be multi-valued");s.forEach((e=>{if(e.auto)throw new X.Schema("Only primary key can be marked as autoIncrement (++)");if(!e.keyPath)throw new X.Schema("Index must have a name and cannot be an empty string")})),r[t]=Zt(t,i,s)}}))}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?r(this._cfg.storesSource,e):e;const s=n._versions,i={};let o={};return s.forEach((e=>{r(i,e._cfg.storesSource),o=e._cfg.dbschema={},e._parseStoresSpec(i,o)})),n._dbSchema=o,ln(n,[n._allTables,n,n.Transaction.prototype]),un(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],t(o),o),n._storeNames=t(o),this}upgrade(e){return this._cfg.contentUpgrade=ue(this._cfg.contentUpgrade||ee,e),this}}function gn(e,t){let n=e._dbNamesDB;return n||(n=e._dbNamesDB=new $n("__dbnames",{addons:[],indexedDB:e,IDBKeyRange:t}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function bn(e){return e&&"function"==typeof e.databases}function _n(e){return Je((function(){return Ke.letThrough=!0,e()}))}function wn(){var e;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(t){var n=function(){return indexedDB.databases().finally(t)};e=setInterval(n,100),n()})).finally((function(){return clearInterval(e)})):Promise.resolve()}function xn(e){const n=e._state,{indexedDB:r}=e._deps;if(n.isBeingOpened||e.idbdb)return n.dbReadyPromise.then((()=>n.dbOpenError?ht(n.dbOpenError):e));R&&(n.openCanceller._stackHolder=q()),n.isBeingOpened=!0,n.dbOpenError=null,n.openComplete=!1;const s=n.openCanceller;function i(){if(n.openCanceller!==s)throw new X.DatabaseClosed("db.open() was cancelled")}let o=n.dbReadyResolve,a=null,u=!1;return Ce.race([s,("undefined"==typeof navigator?Ce.resolve():wn()).then((()=>new Ce(((s,o)=>{if(i(),!r)throw new X.MissingAPI;const l=e.name,c=n.autoSchema?r.open(l):r.open(l,Math.round(10*e.verno));if(!c)throw new X.MissingAPI;c.onerror=zt(o),c.onblocked=We(e._fireOnBlocked),c.onupgradeneeded=We((t=>{if(a=c.transaction,n.autoSchema&&!e._options.allowEmptyDB){c.onerror=Gt,a.abort(),c.result.close();const e=r.deleteDatabase(l);e.onsuccess=e.onerror=We((()=>{o(new X.NoSuchDatabase(`Database ${l} doesnt exist`))}))}else{a.onerror=zt(o);var s=t.oldVersion>Math.pow(2,62)?0:t.oldVersion;u=s<1,e._novip.idbdb=c.result,hn(e,s/10,a,o)}}),o),c.onsuccess=We((()=>{a=null;const r=e._novip.idbdb=c.result,i=p(r.objectStoreNames);if(i.length>0)try{const s=r.transaction(1===(o=i).length?o[0]:o,"readonly");n.autoSchema?function({_novip:e},n,r){e.verno=n.version/10;const s=e._dbSchema=yn(0,n,r);e._storeNames=p(n.objectStoreNames,0),un(e,[e._allTables],t(s),s)}(e,r,s):(mn(e,e._dbSchema,s),function(e,t){const n=dn(yn(0,e.idbdb,t),e._dbSchema);return!(n.add.length||n.change.some((e=>e.add.length||e.change.length)))}(e,s)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),an(e,s)}catch(e){}var o;yt.push(e),r.onversionchange=We((t=>{n.vcFired=!0,e.on("versionchange").fire(t)})),r.onclose=We((t=>{e.on("close").fire(t)})),u&&function({indexedDB:e,IDBKeyRange:t},n){!bn(e)&&"__dbnames"!==n&&gn(e,t).put({name:n}).catch(ee)}(e._deps,l),s()}),o)}))))]).then((()=>(i(),n.onReadyBeingFired=[],Ce.resolve(_n((()=>e.on.ready.fire(e.vip)))).then((function t(){if(n.onReadyBeingFired.length>0){let r=n.onReadyBeingFired.reduce(ue,ee);return n.onReadyBeingFired=[],Ce.resolve(_n((()=>r(e.vip)))).then(t)}}))))).finally((()=>{n.onReadyBeingFired=null,n.isBeingOpened=!1})).then((()=>e)).catch((t=>{n.dbOpenError=t;try{a&&a.abort()}catch(e){}return s===n.openCanceller&&e._close(),ht(t)})).finally((()=>{n.openComplete=!0,o()}))}function kn(e){var t=t=>e.next(t),r=i(t),s=i((t=>e.throw(t)));function i(e){return t=>{var i=e(t),o=i.value;return i.done?o:o&&"function"==typeof o.then?o.then(r,s):n(o)?Promise.all(o).then(r,s):r(o)}}return i(t)()}function En(e,t,n){var r=arguments.length;if(r<2)throw new X.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=k(s);return[e,i,n]}function Pn(e,t,n,r,s){return Ce.resolve().then((()=>{const i=Ke.transless||Ke,o=e._createTransaction(t,n,e._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),e._state.PR1398_maxLoop=3}catch(r){return r.name===H.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e._close(),e.open().then((()=>Pn(e,t,n,null,s)))):ht(r)}const u=T(s);let l;u&&Ze();const c=Ce.follow((()=>{if(l=s.call(o,o),l)if(u){var e=et.bind(null,null);l.then(e,e)}else"function"==typeof l.next&&"function"==typeof l.throw&&(l=kn(l))}),a);return(l&&"function"==typeof l.then?Ce.resolve(l).then((e=>o.active?e:ht(new X.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")))):c.then((()=>l))).then((e=>(r&&o._resolve(),o._completion.then((()=>e))))).catch((e=>(o._reject(e),ht(e))))}))}function Kn(e,t,r){const s=n(e)?e.slice():[e];for(let e=0;e<r;++e)s.push(t);return s}const On={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return{...e,table(t){const n=e.table(t),{schema:r}=n,s={},i=[];function o(e,t,n){const r=sn(e),a=s[r]=s[r]||[],u=null==e?0:"string"==typeof e?1:e.length,l=t>0,c={...n,isVirtual:l,keyTail:t,keyLength:u,extractKey:tn(e),unique:!l&&n.unique};if(a.push(c),c.isPrimaryKey||i.push(c),u>1){o(2===u?e[0]:e.slice(0,u-1),t+1,n)}return a.sort(((e,t)=>e.keyTail-t.keyTail)),c}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const e of r.indexes)o(e.keyPath,0,e);function u(t){const n=t.query.index;return n.isVirtual?{...t,query:{index:n,range:(r=t.query.range,s=n.keyTail,{type:1===r.type?2:r.type,lower:Kn(r.lower,r.lowerOpen?e.MAX_KEY:e.MIN_KEY,s),lowerOpen:!0,upper:Kn(r.upper,r.upperOpen?e.MIN_KEY:e.MAX_KEY,s),upperOpen:!0})}}:t;var r,s}const l={...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(e){const t=s[sn(e)];return t&&t[0]}},count:e=>n.count(u(e)),query:e=>n.query(u(e)),openCursor(t){const{keyTail:r,isVirtual:s,keyLength:i}=t.query.index;if(!s)return n.openCursor(t);return n.openCursor(u(t)).then((n=>n&&function(n){const s=Object.create(n,{continue:{value:function(s){null!=s?n.continue(Kn(s,t.reverse?e.MAX_KEY:e.MIN_KEY,r)):t.unique?n.continue(n.key.slice(0,i).concat(t.reverse?e.MIN_KEY:e.MAX_KEY,r)):n.continue()}},continuePrimaryKey:{value(t,s){n.continuePrimaryKey(Kn(t,e.MAX_KEY,r),s)}},primaryKey:{get:()=>n.primaryKey},key:{get(){const e=n.key;return 1===i?e[0]:e.slice(0,i)}},value:{get:()=>n.value}});return s}(n)))}};return l}}}};function Sn(e,n,r,s){return r=r||{},s=s||"",t(e).forEach((t=>{if(o(n,t)){var i=e[t],a=n[t];if("object"==typeof i&&"object"==typeof a&&i&&a){const e=C(i);e!==C(a)?r[s+t]=n[t]:"Object"===e?Sn(i,a,r,s+t+"."):i!==a&&(r[s+t]=n[t])}else i!==a&&(r[s+t]=n[t])}else r[s+t]=void 0})),t(n).forEach((t=>{o(e,t)||(r[s+t]=n[t])})),r}const An={stack:"dbcore",name:"HooksMiddleware",level:2,create:e=>({...e,table(t){const n=e.table(t),{primaryKey:r}=n.schema,s={...n,mutate(e){const s=Ke.trans,{deleting:i,creating:a,updating:u}=s.table(t).hook;switch(e.type){case"add":if(a.fire===ee)break;return s._promise("readwrite",(()=>l(e)),!0);case"put":if(a.fire===ee&&u.fire===ee)break;return s._promise("readwrite",(()=>l(e)),!0);case"delete":if(i.fire===ee)break;return s._promise("readwrite",(()=>l(e)),!0);case"deleteRange":if(i.fire===ee)break;return s._promise("readwrite",(()=>function(e){return c(e.trans,e.range,1e4)}(e)),!0)}return n.mutate(e);function l(e){const t=Ke.trans,s=e.keys||function(e,t){return"delete"===t.type?t.keys:t.keys||t.values.map(e.extractKey)}(r,e);if(!s)throw new Error("Keys missing");return"delete"!==(e="add"===e.type||"put"===e.type?{...e,keys:s}:{...e}).type&&(e.values=[...e.values]),e.keys&&(e.keys=[...e.keys]),function(e,t,n){return"add"===t.type?Promise.resolve([]):e.getMany({trans:t.trans,keys:n,cache:"immutable"})}(n,e,s).then((l=>{const c=s.map(((n,s)=>{const c=l[s],h={onerror:null,onsuccess:null};if("delete"===e.type)i.fire.call(h,n,c,t);else if("add"===e.type||void 0===c){const i=a.fire.call(h,n,e.values[s],t);null==n&&null!=i&&(n=i,e.keys[s]=n,r.outbound||_(e.values[s],r.keyPath,n))}else{const r=Sn(c,e.values[s]),i=u.fire.call(h,r,n,c,t);if(i){const t=e.values[s];Object.keys(i).forEach((e=>{o(t,e)?t[e]=i[e]:_(t,e,i[e])}))}}return h}));return n.mutate(e).then((({failures:t,results:n,numFailures:r,lastResult:i})=>{for(let r=0;r<s.length;++r){const i=n?n[r]:s[r],o=c[r];null==i?o.onerror&&o.onerror(t[r]):o.onsuccess&&o.onsuccess("put"===e.type&&l[r]?e.values[r]:i)}return{failures:t,results:n,numFailures:r,lastResult:i}})).catch((e=>(c.forEach((t=>t.onerror&&t.onerror(e))),Promise.reject(e))))}))}function c(e,t,s){return n.query({trans:e,values:!1,query:{index:r,range:t},limit:s}).then((({result:n})=>l({type:"delete",keys:n,trans:e}).then((r=>r.numFailures>0?Promise.reject(r.failures[0]):n.length<s?{failures:[],numFailures:0,lastResult:void 0}:c(e,{...t,lower:n[n.length-1],lowerOpen:!0},s)))))}}};return s}})};function Cn(e,t,n){try{if(!t)return null;if(t.keys.length<e.length)return null;const r=[];for(let s=0,i=0;s<t.keys.length&&i<e.length;++s)0===It(t.keys[s],e[i])&&(r.push(n?O(t.values[s]):t.values[s]),++i);return r.length===e.length?r:null}catch(e){return null}}const jn={stack:"dbcore",level:-1,create:e=>({table:t=>{const n=e.table(t);return{...n,getMany:e=>{if(!e.cache)return n.getMany(e);const t=Cn(e.keys,e.trans._cache,"clone"===e.cache);return t?Ce.resolve(t):n.getMany(e).then((t=>(e.trans._cache={keys:e.keys,values:"clone"===e.cache?O(t):t},t)))},mutate:e=>("add"!==e.type&&(e.trans._cache=null),n.mutate(e))}}})};function Dn(e){return!("from"in e)}const In=function(e,t){if(!this){const t=new In;return e&&"d"in e&&r(t,e),t}r(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0})};function Bn(e,t,n){const s=It(t,n);if(isNaN(s))return;if(s>0)throw RangeError();if(Dn(e))return r(e,{from:t,to:n,d:1});const i=e.l,o=e.r;if(It(n,e.from)<0)return i?Bn(i,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Mn(e);if(It(t,e.to)>0)return o?Bn(o,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Mn(e);It(t,e.from)<0&&(e.from=t,e.l=null,e.d=o?o.d+1:1),It(n,e.to)>0&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1);const a=!e.r;i&&!e.l&&Tn(e,i),o&&a&&Tn(e,o)}function Tn(e,t){Dn(t)||function e(t,{from:n,to:r,l:s,r:i}){Bn(t,n,r),s&&e(t,s),i&&e(t,i)}(e,t)}function Rn(e,t){const n=Fn(t);let r=n.next();if(r.done)return!1;let s=r.value;const i=Fn(e);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(It(a.from,s.to)<=0&&It(a.to,s.from)>=0)return!0;It(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Fn(e){let t=Dn(e)?null:{s:0,n:e};return{next(e){const n=arguments.length>0;for(;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&It(e,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||It(e,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Mn(e){var t,n;const r=((null===(t=e.r)||void 0===t?void 0:t.d)||0)-((null===(n=e.l)||void 0===n?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const t="r"===s?"l":"r",n={...e},r=e[s];e.from=r.from,e.to=r.to,e[s]=r[s],n[s]=r[t],e[t]=n,n.d=Nn(n)}e.d=Nn(e)}function Nn({r:e,l:t}){return(e?t?Math.max(e.d,t.d):e.d:t?t.d:0)+1}a(In.prototype,{add(e){return Tn(this,e),this},addKey(e){return Bn(this,e,e),this},addKeys(e){return e.forEach((e=>Bn(this,e,e))),this},[j](){return Fn(this)}});const qn={stack:"dbcore",level:0,create:e=>{const r=e.schema.name,s=new In(e.MIN_KEY,e.MAX_KEY);return{...e,table:i=>{const o=e.table(i),{schema:a}=o,{primaryKey:u}=a,{extractKey:l,outbound:c}=u,h={...o,mutate:e=>{const t=e.trans,u=t.mutatedParts||(t.mutatedParts={}),l=e=>{const t=`idb://${r}/${i}/${e}`;return u[t]||(u[t]=new In)},c=l(""),h=l(":dels"),{type:d}=e;let[f,p]="deleteRange"===e.type?[e.range]:"delete"===e.type?[e.keys]:e.values.length<50?[[],e.values]:[];const y=e.trans._cache;return o.mutate(e).then((e=>{if(n(f)){"delete"!==d&&(f=e.results),c.addKeys(f);const t=Cn(f,y);t||"add"===d||h.addKeys(f),(t||p)&&function(e,t,r,s){function i(t){const i=e(t.name||"");function o(e){return null!=e?t.extractKey(e):null}const a=e=>t.multiEntry&&n(e)?e.forEach((e=>i.addKey(e))):i.addKey(e);(r||s).forEach(((e,t)=>{const n=r&&o(r[t]),i=s&&o(s[t]);0!==It(n,i)&&(null!=n&&a(n),null!=i&&a(i))}))}t.indexes.forEach(i)}(l,a,t,p)}else if(f){const e={from:f.lower,to:f.upper};h.add(e),c.add(e)}else c.add(s),h.add(s),a.indexes.forEach((e=>l(e.name).add(s)));return e}))}},d=({query:{index:t,range:n}})=>{var r,s;return[t,new In(null!==(r=n.lower)&&void 0!==r?r:e.MIN_KEY,null!==(s=n.upper)&&void 0!==s?s:e.MAX_KEY)]},f={get:e=>[u,new In(e.key)],getMany:e=>[u,(new In).addKeys(e.keys)],count:d,query:d,openCursor:d};return t(f).forEach((e=>{h[e]=function(t){const{subscr:n}=Ke;if(n){const a=e=>{const t=`idb://${r}/${i}/${e}`;return n[t]||(n[t]=new In)},u=a(""),h=a(":dels"),[d,p]=f[e](t);if(a(d.name||"").add(p),!d.isPrimaryKey){if("count"!==e){const n="query"===e&&c&&t.values&&o.query({...t,values:!1});return o[e].apply(this,arguments).then((r=>{if("query"===e){if(c&&t.values)return n.then((({result:e})=>(u.addKeys(e),r)));const e=t.values?r.result.map(l):r.result;t.values?u.addKeys(e):h.addKeys(e)}else if("openCursor"===e){const e=r,n=t.values;return e&&Object.create(e,{key:{get:()=>(h.addKey(e.primaryKey),e.key)},primaryKey:{get(){const t=e.primaryKey;return h.addKey(t),t}},value:{get:()=>(n&&u.addKey(e.primaryKey),e.value)}})}return r}))}h.add(s)}}return o[e].apply(this,arguments)}})),h}}}};class $n{constructor(e,t){this._middlewares={},this.verno=0;const n=$n.dependencies;this._options=t={addons:$n.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange,...t},this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange};const{addons:r}=t;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const s={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ee,dbReadyPromise:null,cancelOpen:ee,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var i;s.dbReadyPromise=new Ce((e=>{s.dbReadyResolve=e})),s.openCanceller=new Ce(((e,t)=>{s.cancelOpen=t})),this._state=s,this.name=e,this.on=Et(this,"populate","blocked","versionchange","close",{ready:[ue,ee]}),this.on.ready.subscribe=y(this.on.ready.subscribe,(e=>(t,n)=>{$n.vip((()=>{const r=this._state;if(r.openComplete)r.dbOpenError||Ce.resolve().then(t),n&&e(t);else if(r.onReadyBeingFired)r.onReadyBeingFired.push(t),n&&e(t);else{e(t);const r=this;n||e((function e(){r.on.ready.unsubscribe(t),r.on.ready.unsubscribe(e)}))}}))})),this.Collection=(i=this,Pt(Rt.prototype,(function(e,t){this.db=i;let n=wt,r=null;if(t)try{n=t()}catch(e){r=e}const s=e._ctx,o=s.table,a=o.hook.reading.fire;this._ctx={table:o,index:s.index,isPrimKey:!s.index||o.schema.primKey.keyPath&&s.index===o.schema.primKey.name,range:n,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:r,or:s.or,valueMapper:a!==te?a:null}}))),this.Table=function(e){return Pt(kt.prototype,(function(t,n,r){this.db=e,this._tx=r,this.name=t,this.schema=n,this.hook=e._allTables[t]?e._allTables[t].hook:Et(null,{creating:[se,ee],reading:[ne,te],updating:[oe,ee],deleting:[ie,ee]})}))}(this),this.Transaction=function(e){return Pt(Qt.prototype,(function(t,n,r,s,i){this.db=e,this.mode=t,this.storeNames=n,this.schema=r,this.chromeTransactionDurability=s,this.idbtrans=null,this.on=Et(this,"complete","error","abort"),this.parent=i||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Ce(((e,t)=>{this._resolve=e,this._reject=t})),this._completion.then((()=>{this.active=!1,this.on.complete.fire()}),(e=>{var t=this.active;return this.active=!1,this.on.error.fire(e),this.parent?this.parent._reject(e):t&&this.idbtrans&&this.idbtrans.abort(),ht(e)}))}))}(this),this.Version=function(e){return Pt(vn.prototype,(function(t){this.db=e,this._cfg={version:t,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}}))}(this),this.WhereClause=function(e){return Pt(Yt.prototype,(function(t,n,r){this.db=e,this._ctx={table:t,index:":id"===n?null:n,or:r};const s=e._deps.indexedDB;if(!s)throw new X.MissingAPI;this._cmp=this._ascending=s.cmp.bind(s),this._descending=(e,t)=>s.cmp(t,e),this._max=(e,t)=>s.cmp(e,t)>0?e:t,this._min=(e,t)=>s.cmp(e,t)<0?e:t,this._IDBKeyRange=e._deps.IDBKeyRange}))}(this),this.on("versionchange",(e=>{e.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()})),this.on("blocked",(e=>{!e.newVersion||e.newVersion<e.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${e.oldVersion/10}`)})),this._maxKey=en(t.IDBKeyRange),this._createTransaction=(e,t,n,r)=>new this.Transaction(e,t,n,this._options.chromeTransactionDurability,r),this._fireOnBlocked=e=>{this.on("blocked").fire(e),yt.filter((e=>e.name===this.name&&e!==this&&!e._state.vcFired)).map((t=>t.on("versionchange").fire(e)))},this.use(On),this.use(An),this.use(qn),this.use(jn),this.vip=Object.create(this,{_vip:{value:!0}}),r.forEach((e=>e(this)))}version(e){if(isNaN(e)||e<.1)throw new X.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new X.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const t=this._versions;var n=t.filter((t=>t._cfg.version===e))[0];return n||(n=new this.Version(e),t.push(n),t.sort(cn),n.stores({}),this._state.autoSchema=!1,n)}_whenReady(e){return this.idbdb&&(this._state.openComplete||Ke.letThrough||this._vip)?e():new Ce(((e,t)=>{if(this._state.openComplete)return t(new X.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void t(new X.DatabaseClosed);this.open().catch(ee)}this._state.dbReadyPromise.then(e,t)})).then(e)}use({stack:e,create:t,level:n,name:r}){r&&this.unuse({stack:e,name:r});const s=this._middlewares[e]||(this._middlewares[e]=[]);return s.push({stack:e,create:t,level:null==n?10:n,name:r}),s.sort(((e,t)=>e.level-t.level)),this}unuse({stack:e,name:t,create:n}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter((e=>n?e.create!==n:!!t&&e.name!==t))),this}open(){return xn(this)}_close(){const e=this._state,t=yt.indexOf(this);if(t>=0&&yt.splice(t,1),this.idbdb){try{this.idbdb.close()}catch(e){}this._novip.idbdb=null}e.dbReadyPromise=new Ce((t=>{e.dbReadyResolve=t})),e.openCanceller=new Ce(((t,n)=>{e.cancelOpen=n}))}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new X.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,t=this._state;return new Ce(((n,r)=>{const s=()=>{this.close();var e=this._deps.indexedDB.deleteDatabase(this.name);e.onsuccess=We((()=>{!function({indexedDB:e,IDBKeyRange:t},n){!bn(e)&&"__dbnames"!==n&&gn(e,t).delete(n).catch(ee)}(this._deps,this.name),n()})),e.onerror=zt(r),e.onblocked=this._fireOnBlocked};if(e)throw new X.InvalidArgument("Arguments not allowed in db.delete()");t.isBeingOpened?t.dbReadyPromise.then(s):s()}))}backendDB(){return this.idbdb}isOpen(){return null!==this.idbdb}hasBeenClosed(){const e=this._state.dbOpenError;return e&&"DatabaseClosed"===e.name}hasFailed(){return null!==this._state.dbOpenError}dynamicallyOpened(){return this._state.autoSchema}get tables(){return t(this._allTables).map((e=>this._allTables[e]))}transaction(){const e=En.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,t,n){let r=Ke.trans;r&&r.db===this&&-1===e.indexOf("!")||(r=null);const s=-1!==e.indexOf("?");let i,o;e=e.replace("!","").replace("?","");try{if(o=t.map((e=>{var t=e instanceof this.Table?e.name:e;if("string"!=typeof t)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return t})),"r"==e||"readonly"===e)i="readonly";else{if("rw"!=e&&"readwrite"!=e)throw new X.InvalidArgument("Invalid transaction mode: "+e);i="readwrite"}if(r){if("readonly"===r.mode&&"readwrite"===i){if(!s)throw new X.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");r=null}r&&o.forEach((e=>{if(r&&-1===r.storeNames.indexOf(e)){if(!s)throw new X.SubTransaction("Table "+e+" not included in parent transaction.");r=null}})),s&&r&&!r.active&&(r=null)}}catch(e){return r?r._promise(null,((t,n)=>{n(e)})):ht(e)}const a=Pn.bind(null,this,i,o,r,n);return r?r._promise(i,a,"lock"):Ke.trans?ot(Ke.transless,(()=>this._whenReady(a))):this._whenReady(a)}table(e){if(!o(this._allTables,e))throw new X.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Un="undefined"!=typeof Symbol&&"observable"in Symbol?Symbol.observable:"@@observable";class Ln{constructor(e){this._subscribe=e}subscribe(e,t,n){return this._subscribe(e&&"function"!=typeof e?e:{next:e,error:t,complete:n})}[Un](){return this}}function Vn(e,n){return t(n).forEach((t=>{Tn(e[t]||(e[t]=new In),n[t])})),e}function Wn(e){return new Ln((n=>{const r=T(e);let s=!1,i={},o={};const a={get closed(){return s},unsubscribe:()=>{s=!0,Ht.storagemutated.unsubscribe(h)}};n.start&&n.start(a);let u=!1,l=!1;function c(){return t(o).some((e=>i[e]&&Rn(i[e],o[e])))}const h=e=>{Vn(i,e),c()&&d()},d=()=>{if(u||s)return;i={};const t={},f=function(t){r&&Ze();const n=()=>Je(e,{subscr:t,trans:null}),s=Ke.trans?ot(Ke.transless,n):n();return r&&s.then(et,et),s}(t);l||(Ht("storagemutated",h),l=!0),u=!0,Promise.resolve(f).then((e=>{u=!1,s||(c()?d():(i={},o=t,n.next&&n.next(e)))}),(e=>{u=!1,n.error&&n.error(e),a.unsubscribe()}))};return d(),a}))}let Yn;try{Yn={indexedDB:e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB,IDBKeyRange:e.IDBKeyRange||e.webkitIDBKeyRange}}catch(e){Yn={indexedDB:null,IDBKeyRange:null}}const zn=$n;function Gn(e){let t=Hn;try{Hn=!0,Ht.storagemutated.fire(e)}finally{Hn=t}}a(zn,{...Z,delete:e=>new zn(e,{addons:[]}).delete(),exists:e=>new zn(e,{addons:[]}).open().then((e=>(e.close(),!0))).catch("NoSuchDatabaseError",(()=>!1)),getDatabaseNames(e){try{return function({indexedDB:e,IDBKeyRange:t}){return bn(e)?Promise.resolve(e.databases()).then((e=>e.map((e=>e.name)).filter((e=>"__dbnames"!==e)))):gn(e,t).toCollection().primaryKeys()}(zn.dependencies).then(e)}catch(e){return ht(new X.MissingAPI)}},defineClass:()=>function(e){r(this,e)},ignoreTransaction:e=>Ke.trans?ot(Ke.transless,e):e(),vip:_n,async:function(e){return function(){try{var t=kn(e.apply(this,arguments));return t&&"function"==typeof t.then?t:Ce.resolve(t)}catch(e){return ht(e)}}},spawn:function(e,t,n){try{var r=kn(e.apply(n,t||[]));return r&&"function"==typeof r.then?r:Ce.resolve(r)}catch(e){return ht(e)}},currentTransaction:{get:()=>Ke.trans||null},waitFor:function(e,t){const n=Ce.resolve("function"==typeof e?zn.ignoreTransaction(e):e).timeout(t||6e4);return Ke.trans?Ke.trans.waitFor(n):n},Promise:Ce,debug:{get:()=>R,set:e=>{F(e,"dexie"===e?()=>!0:bt)}},derive:c,extend:r,props:a,override:y,Events:Et,on:Ht,liveQuery:Wn,extendObservabilitySet:Vn,getByKeyPath:b,setByKeyPath:_,delByKeyPath:function(e,t){"string"==typeof t?_(e,t,void 0):"length"in t&&[].map.call(t,(function(t){_(e,t,void 0)}))},shallowClone:w,deepClone:O,getObjectDiff:Sn,cmp:It,asap:v,minKey:-(1/0),addons:[],connections:yt,errnames:H,dependencies:Yn,semVer:"3.2.2",version:"3.2.2".split(".").map((e=>parseInt(e))).reduce(((e,t,n)=>e+t/Math.pow(10,2*n)))}),zn.maxKey=en(zn.dependencies.IDBKeyRange),"undefined"!=typeof dispatchEvent&&"undefined"!=typeof addEventListener&&(Ht("storagemutated",(e=>{if(!Hn){let t;mt?(t=document.createEvent("CustomEvent"),t.initCustomEvent("x-storagemutated-1",!0,!0,e)):t=new CustomEvent("x-storagemutated-1",{detail:e}),Hn=!0,dispatchEvent(t),Hn=!1}})),addEventListener("x-storagemutated-1",(({detail:e})=>{Hn||Gn(e)})));let Hn=!1;if("undefined"!=typeof BroadcastChannel){const e=new BroadcastChannel("x-storagemutated-1");Ht("storagemutated",(t=>{Hn||e.postMessage(t)})),e.onmessage=e=>{e.data&&Gn(e.data)}}else if("undefined"!=typeof self&&"undefined"!=typeof navigator){Ht("storagemutated",(e=>{try{Hn||("undefined"!=typeof localStorage&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),"object"==typeof self.clients&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach((t=>t.postMessage({type:"x-storagemutated-1",changedParts:e}))))}catch(e){}})),"undefined"!=typeof addEventListener&&addEventListener("storage",(e=>{if("x-storagemutated-1"===e.key){const t=JSON.parse(e.newValue);t&&Gn(t.changedParts)}}));const e=self.document&&navigator.serviceWorker;e&&e.addEventListener("message",(function({data:e}){e&&"x-storagemutated-1"===e.type&&Gn(e.changedParts)}))}Ce.rejectionMapper=function(e,t){if(!e||e instanceof W||e instanceof TypeError||e instanceof SyntaxError||!e.name||!J[e.name])return e;var n=new J[e.name](t||e.message,e);return"stack"in e&&l(n,"stack",{get:function(){return this.inner.stack}}),n},F(R,bt);
;// CONCATENATED MODULE: ./variants/chrome/src/background/database/entities/TagEntry.ts
class TagEntry {
    constructor(descriptor) {
        if (typeof descriptor === 'string') {
            this._name = descriptor;
        }
        else {
            this._weight = descriptor.weight;
            this._tags = descriptor.tags;
            this._url = descriptor.url;
            this._name = descriptor.name;
        }
    }
    get weight() {
        var _a;
        return (_a = this._weight) !== null && _a !== void 0 ? _a : (this._weight = 0);
    }
    get tags() {
        var _a;
        return (_a = this._tags) !== null && _a !== void 0 ? _a : (this._tags = []);
    }
    get url() {
        return this._url;
    }
    get name() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    setUrl(url) {
        this._url = url;
    }
    increment() {
        this._weight = this.weight + 1;
    }
    removeTag(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
    }
    editTag(tag, to) {
        this.tags.splice(this.tags.indexOf(tag), 1, to);
    }
    addTag(tag) {
        if (this.tags.includes(tag)) {
            return;
        }
        this._tags.push(tag);
    }
    toJSON() {
        return {
            tags: this.tags,
            weight: this.weight,
            url: this._url,
            name: this._name
        };
    }
    static schema() {
        return "name, weight, *tags";
    }
}

;// CONCATENATED MODULE: ./variants/chrome/src/background/database/index.ts


const Store = new class Store extends $n {
    constructor() {
        super("vkTagsStore");
        this.version(1).stores({
            _tagEntries: TagEntry.schema()
        });
    }
    get tagEntries() {
        return this._tagEntries;
    }
}();

;// CONCATENATED MODULE: ./variants/chrome/src/background/controllers/FilterImagesController.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class FilterImagesController {
    constructor() {
        this._currentVersion = 0;
        this._lastSearch = null;
        this._currentActiveIndex = 0;
        this._activeElements = [];
        this._setuped = false;
        this.setupListeners();
    }
    /**
     * Текущая версия набора
     */
    get currentVersion() {
        return this._currentVersion;
    }
    /**
     * Вернет true если загружается новый набор данных
     *
     * @param showMore контейнер для поиска
     * @returns true если загружается новый набор данных
     */
    isLoading(showMore) {
        return showMore.querySelector(FilterImagesController.VK_IMG_PHOTOS_SHOW_MORE_LOADER_TAGET) != null;
    }
    /**
     * Устанавливает слушатели контроллера
     */
    setupListeners() {
        if (this._setuped) {
            return;
        }
        this._setuped = true;
        const wrapper = document.getElementById(FilterImagesController.VK_BOX_LAYER_WRAPPER);
        wrapper.addEventListener("keydown", (event) => __awaiter(this, void 0, void 0, function* () {
            if (event.code == (yield ExtensionConfig.getField(ExtensionConfig.KeyGoToNextSelection))) {
                event.preventDefault();
                this.selectNextActive();
            }
        }));
    }
    /**
     * Загружает чанк картинок пользователя
     *
     * @returns обещание, true обозначает что все загружено
     */
    loadMore() {
        const showMore = document.getElementById(FilterImagesController.VK_IMG_PHOTOS_SHOW_MORE_CONT_TAGET);
        if (this.isLoading(showMore)) {
            return new Promise((res, rej) => {
                const timeout = setTimeout(() => {
                    if (!this.isLoading(showMore)) {
                        clearInterval(timeout);
                        res(false);
                    }
                }, 500);
            });
        }
        if (showMore != null && showMore.style.display != "none") {
            showMore.click();
        }
        else {
            return Promise.resolve(true);
        }
        return new Promise((res, rej) => {
            const timeout = setTimeout(() => {
                if (!this.isLoading(showMore)) {
                    clearInterval(timeout);
                    res(false);
                }
            }, 500);
        });
    }
    /**
     * Обертка для функции загрузить больше, отличие в том что эта функция сверяется с настройками расширения
     *
     * @returns обещание, true обозначает что все что нужно было уже загружено
     */
    loadMoreWrapper() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield ExtensionConfig.getField(ExtensionConfig.LoadAllItemWhenSearch)) {
                const result = yield this.loadMore();
                console.log("Loading more images to filter", result);
                return result;
            }
            else {
                return Promise.resolve(true);
            }
        });
    }
    /**
     * Выделить совпадения с шаблонов тегов
     *
     * @param pattern шаблон для поиска
     * @returns обещание, выполнение которого обозначает выделение всех совпадающих элементов
     */
    showMathes(pattern) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const inc = document.getElementById(FilterImagesController.VK_IMG_PHOTOS_CONT_AFTER_TAGET);
            if (this._lastSearch == pattern) {
                return;
            }
            else {
                this._lastSearch = pattern;
            }
            const version = ++this._currentVersion;
            if (pattern.length == 0) {
                for (let i = 0, length = inc.children.length; i < length; i++) {
                    const current = inc.children.item(i);
                    const classList = current.classList;
                    if (classList.contains(FilterImagesController.VK_IMG_HIDDEN_CLASS)) {
                        classList.remove(FilterImagesController.VK_IMG_HIDDEN_CLASS);
                    }
                    if (classList.contains(FilterImagesController.VK_IMG_SELECTED_CLASS)) {
                        classList.remove(FilterImagesController.VK_IMG_SELECTED_CLASS);
                    }
                }
                return;
            }
            const tagEntries = Store.tagEntries;
            const descriptor = yield tagEntries.where("tags").startsWithAnyOfIgnoreCase(...pattern.split(" ")).toArray();
            const names = new Set(descriptor.map(e => e.name));
            this._activeElements.splice(0, this._activeElements.length);
            this.setupListeners();
            do {
                if (this._currentVersion != version) {
                    return;
                }
                for (let i = 0, length = inc.children.length; i < length; i++) {
                    const current = inc.children.item(i);
                    const classList = current.classList;
                    const httpName = (_a = current.href) === null || _a === void 0 ? void 0 : _a.substring(14);
                    const httpsName = (_b = current.href) === null || _b === void 0 ? void 0 : _b.substring(15);
                    if (!httpName || !httpsName) {
                        continue;
                    }
                    if (names.has(httpsName) || names.has(httpName)) {
                        if (classList.contains(FilterImagesController.VK_IMG_HIDDEN_CLASS)) {
                            classList.remove(FilterImagesController.VK_IMG_HIDDEN_CLASS);
                        }
                        classList.add(FilterImagesController.VK_IMG_SELECTED_CLASS);
                        this._activeElements.push(current);
                    }
                    else if (!classList.contains(FilterImagesController.VK_IMG_HIDDEN_CLASS)) {
                        if (classList.contains(FilterImagesController.VK_IMG_SELECTED_CLASS)) {
                            classList.remove(FilterImagesController.VK_IMG_SELECTED_CLASS);
                        }
                        classList.add(FilterImagesController.VK_IMG_HIDDEN_CLASS);
                    }
                }
            } while (!(yield this.loadMoreWrapper()));
        });
    }
    /**
     * Выбрать следующий активный элемент
     */
    selectNextActive() {
        if (this._currentActiveIndex > this._activeElements.length) {
            if (this._currentActiveIndex) {
            }
            this._currentActiveIndex = 0;
        }
        const active = this._activeElements[this._currentActiveIndex++];
        if (active) {
            active.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
        else {
            this._currentActiveIndex = 0;
        }
    }
}
FilterImagesController.VK_BOX_LAYER_WRAPPER = "box_layer_wrap";
FilterImagesController.VK_IMG_PHOTOS_CONT_AFTER_TAGET = "photos_choose_rows";
FilterImagesController.VK_IMG_PHOTOS_SHOW_MORE_CONT_TAGET = "photos_choose_more";
FilterImagesController.VK_IMG_PHOTOS_SHOW_MORE_LOADER_TAGET = ".photos_choose_more_loader";
FilterImagesController.VK_IMG_HIDDEN_CLASS = "two-hidden";
FilterImagesController.VK_IMG_SELECTED_CLASS = "two-selected";
;
/* harmony default export */ const controllers_FilterImagesController = (new FilterImagesController());

;// CONCATENATED MODULE: ./variants/chrome/src/background/html/index.ts
class HtmlLiveCont {
    constructor() {
        this._cache = null;
        this._key = null;
    }
    getRenderCont(data, innder) {
        var _a;
        if (this._cache) {
            const currentKey = JSON.stringify(data);
            if (currentKey == this._key) {
                return this._cache;
            }
            this._key = currentKey;
            (_a = this._cache.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this._cache);
        }
        return this._cache = this.getRenderedElement(data, innder);
    }
    render(data, innder, to, render) {
        if (to != null) {
            const rendered = this.getRenderCont(data, innder);
            if (rendered != null && !to.contains(rendered)) {
                if (render != null) {
                    render(rendered, to);
                }
                else {
                    to.append(rendered);
                }
            }
        }
    }
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./variants/chrome/src/background/html/styles/tags-live-search.css
var tags_live_search = __webpack_require__(461);
;// CONCATENATED MODULE: ./variants/chrome/src/background/html/styles/tags-live-search.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tags_live_search/* default */.Z, options);




       /* harmony default export */ const styles_tags_live_search = (tags_live_search/* default */.Z && tags_live_search/* default.locals */.Z.locals ? tags_live_search/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./variants/chrome/src/background/html/TagsSearchLiveCont.ts
var TagsSearchLiveCont_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/* harmony default export */ const TagsSearchLiveCont = (new class TagsSearchLiveCont extends HtmlLiveCont {
    /**
     * Действие при поиске
     *
     * @param inner данные для взаимодействия
     * @param event ивент
     */
    onSearch(inner, event) {
        return TagsSearchLiveCont_awaiter(this, void 0, void 0, function* () {
            const input = event.target;
            const search = input.value;
            if (this._oldTimer != null) {
                clearTimeout(this._oldTimer);
                this._oldTimer = null;
            }
            else {
                inner.onSearch(search.trim());
                this._oldTimer = setTimeout(() => {
                    this._oldTimer = null;
                }, yield ExtensionConfig.getField(ExtensionConfig.TagsSearchIntervalKey));
            }
            if (search != null) {
                this._oldTimer = setTimeout(() => {
                    this._oldTimer = null;
                    inner.onSearch(search.trim());
                }, yield ExtensionConfig.getField(ExtensionConfig.TagsSearchIntervalKey));
            }
        });
    }
    /**
     * Получить элемент взаимодействия с пользователем
     *
     * @param data данные для отображения в элементе
     * @param inner данные для взаимодействия
     * @returns элемент для взаимодействия
     */
    getRenderedElement(data, inner) {
        const container = document.createElement("div");
        const input = document.createElement("input");
        container.classList.add("search-tags-input-container");
        container.append(input);
        input.classList.add("search-tags-input");
        input.placeholder = "Поиск по тегам";
        input.type = "text";
        input.id = "tag-input-id";
        input.addEventListener("input", this.onSearch.bind(this, inner));
        return container;
    }
}());

;// CONCATENATED MODULE: ./variants/chrome/src/background/pages/select.ts


const VK_IMG_PHOTOS_CONT_CONT_TAGET = "photos_choose_wrap";
function handler() {
    TagsSearchLiveCont.render([], {
        onSearch: controllers_FilterImagesController.showMathes.bind(controllers_FilterImagesController)
    }, document.getElementById(VK_IMG_PHOTOS_CONT_CONT_TAGET), (rendered, container) => {
        container.prepend(rendered);
    });
}

// EXTERNAL MODULE: ./node_modules/randomcolor/randomColor.js
var randomColor = __webpack_require__(23);
var randomColor_default = /*#__PURE__*/__webpack_require__.n(randomColor);
;// CONCATENATED MODULE: ./variants/chrome/src/background/database/live/TagStore.ts

const BG_PREFIX = "BG_";
const FG_PREFIX = "FG_";
function getRandomLightColor() {
    return randomColor_default()({
        luminosity: 'light',
        hue: 'random'
    });
}
function getRandomDarkColor() {
    return randomColor_default()({
        luminosity: 'dark',
        hue: 'random'
    });
}
/* harmony default export */ const TagStore = (new class TagStore {
    constructor() {
        this._tagMap = new Map();
    }
    getBgColor(tag) {
        if (this._tagMap.has(BG_PREFIX + tag)) {
            return this._tagMap.get(BG_PREFIX + tag);
        }
        const color = getRandomDarkColor();
        this._tagMap.set(BG_PREFIX + tag, color);
        return color;
    }
    getFgColor(tag) {
        if (this._tagMap.has(FG_PREFIX + tag)) {
            return this._tagMap.get(FG_PREFIX + tag);
        }
        const color = getRandomLightColor();
        this._tagMap.set(FG_PREFIX + tag, color);
        return color;
    }
}());

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./variants/chrome/src/background/html/styles/tags-live-cont.css
var tags_live_cont = __webpack_require__(151);
;// CONCATENATED MODULE: ./variants/chrome/src/background/html/styles/tags-live-cont.css

      
      
      
      
      
      
      
      
      

var tags_live_cont_options = {};

tags_live_cont_options.styleTagTransform = (styleTagTransform_default());
tags_live_cont_options.setAttributes = (setAttributesWithoutAttributes_default());

      tags_live_cont_options.insert = insertBySelector_default().bind(null, "head");
    
tags_live_cont_options.domAPI = (styleDomAPI_default());
tags_live_cont_options.insertStyleElement = (insertStyleElement_default());

var tags_live_cont_update = injectStylesIntoStyleTag_default()(tags_live_cont/* default */.Z, tags_live_cont_options);




       /* harmony default export */ const styles_tags_live_cont = (tags_live_cont/* default */.Z && tags_live_cont/* default.locals */.Z.locals ? tags_live_cont/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./variants/chrome/src/background/html/TagsLiveCont.ts
var TagsLiveCont_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/* harmony default export */ const TagsLiveCont = (new class TagsLiveCont extends HtmlLiveCont {
    /**
     * Создает контейнер тега
     *
     * @param tag название тега
     * @param clickAction действие при клике
     * @param deleteAction действие при удалении
     * @param classList дополнительный список классов
     * @param injectColors нужно ли окрашивать тег?
     * @returns html элемент отображения тега
     */
    createTagElement(tag, clickAction, deleteAction, classList = [], injectColors = true) {
        const item = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = tag;
        span.classList.add("img_tags_item_text");
        if (injectColors) {
            item.style.backgroundColor = TagStore.getBgColor(tag);
            item.style.color = TagStore.getFgColor(tag);
        }
        item.classList.add("img_tags_item", ...classList);
        if (clickAction) {
            item.addEventListener("click", clickAction.bind(this));
        }
        item.append(span);
        if (deleteAction) {
            const del = document.createElement("button");
            del.classList.add("img_tags_item_delete");
            del.addEventListener("click", deleteAction.bind(this));
            del.innerText = "✕";
            item.append(del);
        }
        return item;
    }
    /**
     * Разобрать данные из цели ивента
     *
     * @param data цель ивента или просто html элемент для разбора
     * @returns спиоск внутренних элементов контейнера тега
     */
    extractData(data) {
        const dataElement = data;
        const parent = dataElement.tagName == "div" ? dataElement : dataElement.parentElement;
        return {
            remove: parent.querySelector("button.img_tags_item_delete"),
            container: parent.querySelector("span.img_tags_item_text"),
            parent: parent
        };
    }
    /**
     * Действие при добавлении тега
     *
     * @param inner данные для взаимодействия
     * @param event ивент
     * @returns обещание
     */
    onAdd(inner, event) {
        return TagsLiveCont_awaiter(this, void 0, void 0, function* () {
            if (event.defaultPrevented) {
                return;
            }
            event.preventDefault();
            const tag = prompt("Добавить тег", "");
            const target = this.extractData(event.target);
            if (tag != null) {
                const trimed = tag.trim();
                if (trimed.length > 0) {
                    const list = target.parent.parentElement;
                    const result = yield inner.onAdd(trimed);
                    if (list != null) {
                        for (let i = 0, length = list.children.length; i < length; i++) {
                            const current = list.children.item(i);
                            const innerText = current.innerText;
                            if (current != null && innerText != null && innerText.trim() == trimed) {
                                return;
                            }
                        }
                        if (result == null || result) {
                            list.prepend(this.createTagElement(trimed, this.onAdd.bind(this, inner), null));
                        }
                    }
                }
            }
        });
    }
    /**
     * Действие при редактировании тега
     *
     * @param inner данные для взаимодействия
     * @param event ивент
     * @returns обещание
     */
    onEdit(inner, event) {
        return TagsLiveCont_awaiter(this, void 0, void 0, function* () {
            if (event.defaultPrevented) {
                return;
            }
            event.preventDefault();
            const target = this.extractData(event.target);
            if (target.container == null || target.parent == null) {
                return;
            }
            const from = target.container.innerText;
            const tag = prompt("Редактировать тег", from);
            if (tag != null) {
                const trimed = tag.trim();
                if (trimed.length > 0) {
                    const result = yield inner.onEdit(from, trimed);
                    const list = target.parent.parentElement;
                    if (list != null) {
                        for (let i = 0, length = list.children.length; i < length; i++) {
                            const current = list.children.item(i);
                            const innerText = current.innerText;
                            if (current != null && innerText != null && innerText.trim() == trimed) {
                                return;
                            }
                        }
                    }
                    if (result == null || result) {
                        target.container.innerText = trimed;
                    }
                }
            }
        });
    }
    /**
     * Действие при удалении тега
     *
     * @param inner данные для взаимодействия
     * @param event ивент
     * @returns обещание
     */
    onRemove(inner, event) {
        return TagsLiveCont_awaiter(this, void 0, void 0, function* () {
            if (event.defaultPrevented) {
                return;
            }
            event.preventDefault();
            const target = this.extractData(event.target);
            if (target.container == null || target.parent == null) {
                return;
            }
            const from = target.container.innerText;
            if (confirm("Удалить тег " + from + "?")) {
                const result = yield inner.onRemove(from);
                if (result == null || result) {
                    const parent = target.parent.parentElement;
                    if (parent.contains(target.parent)) {
                        parent.removeChild(target.parent);
                    }
                }
            }
        });
    }
    /**
     * Получить элемент взаимодействия с пользователем
     *
     * @param param0 данные для отображения в элементе
     * @param inner данные для взаимодействия
     * @returns элемент для взаимодействия
     */
    getRenderedElement({ tags, name }, inner) {
        const container = document.createElement("div");
        const list = document.createElement("div");
        container.id = "img_tags_container";
        container.append(list);
        list.classList.add("img_tags_list");
        for (const tag of tags) {
            list.append(this.createTagElement(tag, this.onEdit.bind(this, inner), this.onRemove.bind(this, inner)));
        }
        list.append(this.createTagElement("+", this.onAdd.bind(this, inner), null, ["add-promt"], false));
        return container;
    }
}());

;// CONCATENATED MODULE: ./variants/chrome/src/background/pages/view.ts
var view_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const tagEntries = Store.tagEntries;
const VK_IMG_TAGS_CONT_IMG_TARGET = "#pv_photo > img";
const VK_IMG_TAGS_CONT_CONT_TAGET = "#layer .clear_fix .ui_scroll_content";
const VK_IMG_TAGS_CONT_AFTER_TAGET = ".like_wrap";
// 
// Просмотр картинки, тут можно добавить теги
// 
function view_handler() {
    var _a;
    return view_awaiter(this, void 0, void 0, function* () {
        const photo = document.querySelector(VK_IMG_TAGS_CONT_IMG_TARGET);
        if (photo != null) {
            const tagsContainer = document.querySelector(VK_IMG_TAGS_CONT_CONT_TAGET);
            if (tagsContainer != null) {
                const tagsBefore = tagsContainer === null || tagsContainer === void 0 ? void 0 : tagsContainer.querySelector(VK_IMG_TAGS_CONT_AFTER_TAGET);
                if (tagsBefore != null) {
                    const name = (_a = tagsBefore.classList.value.split(' ').find(e => e.startsWith("_like_photo"))) === null || _a === void 0 ? void 0 : _a.substring(6);
                    let descriptor = yield tagEntries.where('name').equals(name).first();
                    let tagDescriptor;
                    if (descriptor != null) {
                        tagDescriptor = new TagEntry(descriptor);
                    }
                    else {
                        tagDescriptor = new TagEntry(name);
                        tagDescriptor.setUrl(photo.src);
                    }
                    TagsLiveCont.render({
                        name,
                        tags: tagDescriptor.tags
                    }, {
                        onAdd(tag) {
                            return view_awaiter(this, void 0, void 0, function* () {
                                tagDescriptor.addTag(tag);
                                yield tagEntries.put(tagDescriptor.toJSON());
                                console.log("Image added tag", tagDescriptor.toJSON());
                            });
                        },
                        onRemove(tag) {
                            return view_awaiter(this, void 0, void 0, function* () {
                                tagDescriptor.removeTag(tag);
                                yield tagEntries.update(name, tagDescriptor.toJSON());
                                console.log("Image removed tag", tagDescriptor.toJSON());
                            });
                        },
                        onEdit(tag, to) {
                            return view_awaiter(this, void 0, void 0, function* () {
                                tagDescriptor.editTag(tag, to);
                                yield tagEntries.update(name, tagDescriptor.toJSON());
                                console.log("Image edited tag", tagDescriptor.toJSON());
                            });
                        }
                    }, tagsContainer, (rendered, container) => {
                        const tagsBeforeNext = tagsBefore.nextSibling;
                        if (tagsBeforeNext == null) {
                            return;
                        }
                        if (tagsBeforeNext != rendered) {
                            container.insertBefore(rendered, tagsBeforeNext);
                        }
                    });
                }
            }
        }
    });
}

;// CONCATENATED MODULE: ./variants/chrome/src/background/pages/index.ts



/* harmony default export */ const pages = (new Map([
    [VI_IMG_TAGS_SEL_CONT_TRIGGER, handler],
    [VK_IMG_TAGS_CONT_CONT_TRIGGER, view_handler],
]));

;// CONCATENATED MODULE: ./variants/chrome/src/background/index.ts


let lastPage = null;
let lastFound = null;
function isHidden(el) {
    var _a;
    return (((_a = window.getComputedStyle(el)) === null || _a === void 0 ? void 0 : _a.display) === 'none') || el.offsetParent == null;
}
observeDOM(document.body, () => {
    let newPage = null;
    let newFound = null;
    for (const page of pages) {
        const found = document.querySelector(page[0]);
        if (found != null && !isHidden(found)) {
            newPage = page;
            newFound = found;
            break;
        }
    }
    if (lastFound != null && isHidden(lastFound)) {
        lastFound = null;
        lastPage = null;
    }
    try {
        if (newPage != null && newPage[1] != null) {
            newPage[1].call(null);
        }
    }
    finally {
        lastPage = newPage;
        lastFound = newFound;
    }
});

})();

/******/ })()
;