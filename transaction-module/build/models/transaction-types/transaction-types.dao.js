"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypesDao = void 0;
const transaction_types_model_1 = __importDefault(require("../../database/models/transaction-types.model"));
const transactionsHooks = __importStar(require("./transaction-types.hooks"));
class TransactionTypesDao {
    constructor() {
        this.transactionTypesModel = transaction_types_model_1.default;
        this.getAll = async (conditions) => {
            const transactionTypeConditions = transactionsHooks.conditionsBuilder(conditions);
            const transactionTypes = await this.transactionTypesModel.findAll({
                where: transactionTypeConditions
            });
            return transactionTypes;
        };
        this.create = async (params) => {
            const createdTransactionType = await this.transactionTypesModel.create({ ...params });
            return createdTransactionType;
        };
        this.bulkCreate = async (transactions) => {
            const transactionsTypesCreated = await this.transactionTypesModel.bulkCreate(transactions);
            return transactionsTypesCreated;
        };
    }
    async clearTable() {
        const transactionsTypesDeleted = await this.transactionTypesModel.destroy({ where: {} });
        return transactionsTypesDeleted;
    }
}
exports.TransactionTypesDao = TransactionTypesDao;
