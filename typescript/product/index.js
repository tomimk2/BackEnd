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
let operation = (num1, num2, name) => __awaiter(void 0, void 0, void 0, function* () {
    let op = yield import('./operation.js');
    if (name === "suma") {
        let result = op.suma(num1, num2);
        return result;
    }
    if (name === "resta") {
        let result = op.resta(num1, num2);
        return result;
    }
});
let operations = (num1, num2, name) => __awaiter(void 0, void 0, void 0, function* () {
    let resulting = yield operation(num1, num2, name);
    console.log("Hicimos la" + name + "y dió como resultado " + resulting);
});
operations(2, 5, "suma");
operations(20, 3, "resta");
