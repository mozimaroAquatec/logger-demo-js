"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.json(),
    transports: [new winston_1.default.transports.Console()],
});
const morganMiddleware = (0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms", {
    stream: {
        // Configure Morgan to use our custom logger with the http severity
        write: (message) => logger.info(message.trim()),
    },
});
//# sourceMappingURL=morgan.js.map