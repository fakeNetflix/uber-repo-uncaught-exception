'use strict';

var LOGGER_TIMEOUT = 30 * 1000;
var SHUTDOWN_TIMEOUT = 30 * 1000;
var PRE_LOGGING_ERROR_STATE = 'pre.logging.error';
var LOGGING_ERROR_STATE = 'logging.error';
var PRE_GRACEFUL_SHUTDOWN_STATE = 'pre.graceful.shutdown';
var GRACEFUL_SHUTDOWN_STATE = 'graceful.shutdown';
var POST_GRACEFUL_SHUTDOWN_STATE = 'post.graceful.shutdown';

module.exports = {
    LOGGER_TIMEOUT: LOGGER_TIMEOUT,
    SHUTDOWN_TIMEOUT: SHUTDOWN_TIMEOUT,
    PRE_LOGGING_ERROR_STATE: PRE_LOGGING_ERROR_STATE,
    LOGGING_ERROR_STATE: LOGGING_ERROR_STATE,
    PRE_GRACEFUL_SHUTDOWN_STATE: PRE_GRACEFUL_SHUTDOWN_STATE,
    GRACEFUL_SHUTDOWN_STATE: GRACEFUL_SHUTDOWN_STATE,
    POST_GRACEFUL_SHUTDOWN_STATE: POST_GRACEFUL_SHUTDOWN_STATE
};