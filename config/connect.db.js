"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const error_handler_1 = __importDefault(require("../utils/error.handler"));
require("./env.config");
const logging_1 = require("../logging");
mongoose_1.default.set("strictQuery", true);
const connectDB = async () => {
    try {
        const DB = logging_1.dbLogger.startTimer();
        await mongoose_1.default.connect(process.env.MONGO_URI);
        DB.done({ message: "data base connected successfully" });
        // dbLogger.done("data base connected successfully");
    }
    catch (error) {
        logging_1.dbLogger.error("mongoose connect error", new error_handler_1.default(500, `${error}`));
        throw new error_handler_1.default(500, `mongoose connect error is : ${error}`);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connect.db.js.map