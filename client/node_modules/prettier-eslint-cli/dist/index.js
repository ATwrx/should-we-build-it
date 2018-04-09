#!/usr/bin/env node
'use strict';

require('./add-exception-handler');

var _loglevelColoredLevelPrefix = require('loglevel-colored-level-prefix');

var _loglevelColoredLevelPrefix2 = _interopRequireDefault(_loglevelColoredLevelPrefix);

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _formatFiles = require('./format-files');

var _formatFiles2 = _interopRequireDefault(_formatFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unassigned-import
var logger = (0, _loglevelColoredLevelPrefix2.default)({ prefix: 'prettier-eslint-cli' }); // want to do this first

var args = process.argv.slice(2);

logger.trace('Parsing args: ', args);
var argv = _parser2.default.parse(args);

(0, _formatFiles2.default)(argv);