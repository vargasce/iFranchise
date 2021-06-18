"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var __filePath = path.join(__dirname, '../../connectDB/connectDB');
var con = require(__filePath);
var db = null;
var run = function () {
    return {
        init: function () {
            electron_1.ipcMain.on('list-client', function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, listClient()];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _b.sent();
                                console.log("Error in list clietn : " + error_1);
                                return [3 /*break*/, 3];
                            case 3:
                                db.close();
                                return [2 /*return*/];
                        }
                    });
                });
            });
            electron_1.ipcMain.on('get-client', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, getClient(args[0])];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _b.sent();
                                console.log("Error in get clietn : " + error_2);
                                return [3 /*break*/, 3];
                            case 3:
                                db.close();
                                return [2 /*return*/];
                        }
                    });
                });
            });
            electron_1.ipcMain.on('update-client', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, error_3;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, updateClient(args[0])];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _b.sent();
                                console.log("Error in get clietn : " + error_3);
                                return [3 /*break*/, 3];
                            case 3:
                                db.close();
                                return [2 /*return*/];
                        }
                    });
                });
            });
            electron_1.ipcMain.on('delete-client', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, error_4;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, deleteClient(args[0])];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_4 = _b.sent();
                                console.log("Error in get clietn : " + error_4);
                                return [3 /*break*/, 3];
                            case 3:
                                db.close();
                                return [2 /*return*/];
                        }
                    });
                });
            });
            electron_1.ipcMain.on('add-client', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, error_5;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, addClient(args)];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_5 = _b.sent();
                                console.log("Error in get clietn : " + error_5);
                                return [3 /*break*/, 3];
                            case 3:
                                db.close();
                                return [2 /*return*/];
                        }
                    });
                });
            });
        }
    };
};
module.exports = run();
/** UPDATE CLIENT
 * @Observations : Obtener datos update de cliente.
 * @returns result : Promise => promesa, success update cliente.
 */
var updateClient = function (id_client) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql_1, _db_1, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sql_1 = "UPDATE client SET xxx WHERE id = " + id_client;
                    return [4 /*yield*/, connect()];
                case 1:
                    _db_1 = _a.sent();
                    _db_1.serialize(function () {
                        _db_1.run(sql_1, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log("Error in update client : " + error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
/** DELETE CLIENT
 * @Observations : Delete datos de cliente.
 * @returns result : Promise => promesa, success delete cliente.
 */
var deleteClient = function (id_client) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql_2, _db_2, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sql_2 = "DELETE client WHERE id = " + id_client;
                    return [4 /*yield*/, connect()];
                case 1:
                    _db_2 = _a.sent();
                    _db_2.serialize(function () {
                        _db_2.run(sql_2, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.log("Error in delete cliente : " + error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
/** ADD CLIENT
 * @Observations : Añadir datos de cliente.
 * @returns result : Promise => promesa, success add cliente.
 */
var addClient = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql_3, _db_3, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sql_3 = "INSERT INTO client (cols) VALUES( " + data + " )";
                    return [4 /*yield*/, connect()];
                case 1:
                    _db_3 = _a.sent();
                    _db_3.serialize(function () {
                        _db_3.run(sql_3, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    console.log("Error in Add client : " + error_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
/** LIST CLIENT
 * @Observations : Obtener datos lista de cliente.
 * @returns result : Promise => promesa, success lista cliente.
 */
var listClient = function () {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql_4, _db_4, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sql_4 = 'SELECT * FROM client;';
                    return [4 /*yield*/, connect()];
                case 1:
                    _db_4 = _a.sent();
                    _db_4.serialize(function () {
                        _db_4.each(sql_4, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    console.log("Error in await connect 'listClient' : " + error_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
/** GET CLIENT
 * @Observations : Obtener dato de cliente.
 * @returns result : Promise => promesa, success obtener cliente.
 */
var getClient = function (id_client) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql_5, _db_5, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sql_5 = "SELECT * FROM client WHERE id = " + id_client;
                    return [4 /*yield*/, connect()];
                case 1:
                    _db_5 = _a.sent();
                    _db_5.serialize(function () {
                        _db_5.run(sql_5, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_10 = _a.sent();
                    console.log("Error in getClient : " + error_10);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
/** CONECTION / CLOSE DB
 * @Observations : Functions para instancia a db y
 * close de la conexion
 */
var connect = function () {
    return new Promise(function (resolve, reject) {
        db = con.conectionDB.getInstance();
        if (db) {
            resolve(db);
        }
        else {
            reject(undefined);
        }
    });
};
