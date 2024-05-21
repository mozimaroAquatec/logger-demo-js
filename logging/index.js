"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFoundLogger = exports.serverLogger = exports.dbLogger = exports.usersLogger = void 0;
const logger_dev_1 = __importDefault(require("./logger.dev"));
const logger_prod_1 = __importDefault(require("./logger.prod"));
// Determine the environment and create the appropriate logger factory
const logger = process.env.NODE_ENV === "production" ? logger_prod_1.default : logger_dev_1.default;
// Create specific loggers for different services
exports.usersLogger = logger("users-logger");
exports.dbLogger = logger("DB");
exports.serverLogger = logger("server");
exports.pageNotFoundLogger = logger("pageNotFound");
exports.default = logger;
//# sourceMappingURL=index.js.map