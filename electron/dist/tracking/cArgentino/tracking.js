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
var fetchNode = require('node-fetch-npm');
var Tracking = /** @class */ (function () {
    function Tracking(url, key, method) {
        if (url === void 0) { url = null; }
        if (key === void 0) { key = null; }
        if (method === void 0) { method = null; }
        this.URL = 'https://api.correoargentino.com.ar/backendappcorreo/api/api/';
        this.API_KEY = '';
        this.METHOD = 'shipping-tracking-';
        this.HEADERS = {
            'Conten-Type': 'application/json'
        };
        this.URL = url ? url : this.URL;
        this.API_KEY = key ? key : this.API_KEY;
        this.METHOD = method ? method : this.METHOD;
    }
    /** GET RESULT
     * @Observations : Obtenemos solicitud del servidor de correo argentino.
     * @param fn : string => funcion de la peticion ( ml, ec, int-nac, NacP, Nac, Int )
     * @returns response : Promise => promesa, retorna respuesta de api COOREO ARGENTINO.
     */
    Tracking.prototype.getRequestCA = function (fn, id_pedido) {
        var _this = this;
        if (fn === void 0) { fn = ''; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _url, _options, _response, _data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fn) return [3 /*break*/, 5];
                        _url = "" + this.URL + this.METHOD + fn + "?number_shipping=" + id_pedido;
                        console.log(_url);
                        _options = {
                            method: 'GET',
                            headers: this.HEADERS
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchNode(_url, _options)];
                    case 2:
                        _response = _a.sent();
                        _data = _response.json();
                        resolve(_data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        reject("Not function");
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    return Tracking;
}());
module.exports = Tracking;
