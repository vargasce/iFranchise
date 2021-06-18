'use strict';
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
var __filePath = path.join(__dirname, '../../connectDB/connectDB.js');
var con = require(__filePath);
var db = null;
var run = function () {
    return {
        init: function () {
            electron_1.ipcMain.on('list-package', function (event) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = event;
                            return [4 /*yield*/, listPackage()];
                        case 1:
                            _a.returnValue = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _b.sent();
                            console.log("Error in list Package :; " + error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            electron_1.ipcMain.on('add-package', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(void 0, void 0, void 0, function () {
                    var _a, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, addPackage(args)];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _b.sent();
                                console.log("Error in add package : " + error_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            });
            electron_1.ipcMain.on('update-package', function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return __awaiter(void 0, void 0, void 0, function () {
                    var _a, error_3;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                _a = event;
                                return [4 /*yield*/, updatePackage(args)];
                            case 1:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _b.sent();
                                console.log("Error in update package : " + error_3);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            });
        }
    };
};
module.exports = run();
/** LIST PACKAGE
 * @Observations : Listar  de package.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
var listPackage = function () {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql, _db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sql = 'SELECT * FROM package;';
                    return [4 /*yield*/, connect()];
                case 1:
                    _db = _a.sent();
                    _db.serialize(function () {
                        _db.each(sql, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
/** ADD PACKAGE
 * @Observations : Añadir typo de package.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
var addPackage = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql, _db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sql = "INSERT INTO package ( id_sell, id_tracking, status, package_date, package_total ) \n                 VALUES( " + data[0].id_sell + ", " + data[0].id_tracking + ", '" + data[0].status + "', '" + data[0].package_date + "', '" + data[0].package_total + "' );";
                    return [4 /*yield*/, connect()];
                case 1:
                    _db = _a.sent();
                    _db.serialize(function () {
                        _db.each(sql, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
/** UPDATTTE PACKAGE
 * @Observations : Actualizar typo de package.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
var updatePackage = function (data) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var sql, _db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sql = "UPDATE package SET id_sell = " + data[0].id_sell + ", id_tracking = " + data[0].id_tracking + ",\n                                    status = '" + data[0].status + "', package_date = '" + data[0].package_date + "', \n                                    package_total = '" + data[0].package_total + "' )\n                                 WHERE id = " + data[0].id + ";";
                    return [4 /*yield*/, connect()];
                case 1:
                    _db = _a.sent();
                    _db.serialize(function () {
                        _db.each(sql, function (error, result) {
                            if (!error) {
                                resolve(result);
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return [2 /*return*/];
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
