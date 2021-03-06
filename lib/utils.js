/*
 * cylon-intel-iot
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";
var Mraa = require("./mraa");

module.exports = {
  isGalileoGen1: function() {
    return Mraa.getPlatformType() === 0;
  },

  i2cPortFor: function() {
    return (Mraa.getPlatformType() === 2) ? 6 : 0;
  }
};
