(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Percept", [], factory);
	else if(typeof exports === 'object')
		exports["Percept"] = factory();
	else
		root["Percept"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 871:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Constant = void 0;
var Constant;
(function (Constant) {
    Constant[Constant["TAU"] = (Math.PI / 180)] = "TAU";
})(Constant = exports.Constant || (exports.Constant = {}));


/***/ }),

/***/ 426:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dimension = void 0;
var Dimension = (function () {
    function Dimension(width, height) {
        this.width = width;
        this.height = height;
    }
    Dimension.prototype.max = function () {
        return Math.max(this.width, this.height);
    };
    return Dimension;
}());
exports.Dimension = Dimension;


/***/ }),

/***/ 726:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(871), exports);
__exportStar(__webpack_require__(426), exports);
__exportStar(__webpack_require__(863), exports);
__exportStar(__webpack_require__(860), exports);
__exportStar(__webpack_require__(316), exports);


/***/ }),

/***/ 863:
/***/ (function(__unused_webpack_module, exports) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix = void 0;
var Matrix = (function () {
    function Matrix(value) {
        this.value = value;
    }
    Matrix.prototype.multiply = function (another) {
        var result;
        if (another instanceof Matrix) {
            result = __spreadArrays(Array(this.value.length)).map(function (x) { return Array(another.value[0].length); });
            for (var i = 0; i < this.value.length; i++) {
                for (var j = 0; j < another.value[0].length; j++) {
                    var sum = 0;
                    for (var k = 0; k < this.value[0].length; k++) {
                        sum += this.value[i][k] * another.value[k][j];
                    }
                    result[i][j] = sum;
                }
            }
        }
        else {
            result = __spreadArrays(Array(this.value.length)).map(function (x) { return Array(another[0].length); });
            for (var i = 0; i < this.value.length; i++) {
                for (var j = 0; j < another[0].length; j++) {
                    var sum = 0;
                    for (var k = 0; k < this.value[0].length; k++) {
                        sum += this.value[i][k] * another[k][j];
                    }
                    result[i][j] = sum;
                }
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.multiplyInPlace = function (another) {
        var result;
        if (another instanceof Matrix) {
            result = __spreadArrays(Array(this.value.length)).map(function (x) { return Array(another.value[0].length); });
            for (var i = 0; i < this.value.length; i++) {
                for (var j = 0; j < another.value[0].length; j++) {
                    var sum = 0;
                    for (var k = 0; k < this.value[0].length; k++) {
                        sum += this.value[i][k] * another.value[k][j];
                    }
                    result[i][j] = sum;
                }
            }
        }
        else {
            result = __spreadArrays(Array(this.value.length)).map(function (x) { return Array(another[0].length); });
            for (var i = 0; i < this.value.length; i++) {
                for (var j = 0; j < another[0].length; j++) {
                    var sum = 0;
                    for (var k = 0; k < this.value[0].length; k++) {
                        sum += this.value[i][k] * another[k][j];
                    }
                    result[i][j] = sum;
                }
            }
        }
        this.value = result;
        return this;
    };
    Matrix.prototype.clone = function () {
        return new Matrix([
            [this.value[0][0], this.value[0][1], this.value[0][2]],
            [this.value[1][0], this.value[1][1], this.value[1][2]],
            [this.value[2][0], this.value[2][1], this.value[2][2]]
        ]);
    };
    Matrix.prototype.getRotation = function () {
        return Math.atan2(this.value[0][1], this.value[0][0]) * (180 / Math.PI);
    };
    Matrix.Identity = function () {
        return new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    };
    Matrix.Zero = function () {
        return new Matrix([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    };
    Matrix.Multiply = function (matrix1, matrix2) {
        var result = __spreadArrays(Array(matrix1.length)).map(function (x) { return Array(matrix2[0].length); });
        for (var i = 0; i < matrix1.length; i++) {
            for (var j = 0; j < matrix2[0].length; j++) {
                var sum = 0;
                for (var k = 0; k < matrix1[0].length; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    };
    return Matrix;
}());
exports.Matrix = Matrix;


/***/ }),

/***/ 860:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transform = void 0;
var math_1 = __webpack_require__(726);
var math_2 = __webpack_require__(726);
var math_3 = __webpack_require__(726);
var Transform = (function () {
    function Transform(_position, _localRotation, _rotation, _scale, controlPoints, node) {
        this._position = _position;
        this._localRotation = _localRotation;
        this._rotation = _rotation;
        this._scale = _scale;
        this.node = node;
        this._parent = null;
        this.childs = [];
        this.localTrasform = math_2.Matrix.Identity();
        this.worldTransform = math_2.Matrix.Identity();
        this.refControlPoints = this.relativeControlPoints(controlPoints);
        this.controlPoints = __spreadArrays(controlPoints);
    }
    Object.defineProperty(Transform.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (newParent) {
            if (this._parent) {
                (this._parent.childs.indexOf(this)) && (this._parent.childs.splice(this._parent.childs.indexOf(this), 1));
            }
            (newParent) && (newParent.childs.push(this));
            this._parent = newParent;
            (this.parent) && this.parent.childs.sort(function (a, b) {
                return a.node.order - b.node.order;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (newPosition) {
            this._position = newPosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "absolutePosition", {
        get: function () {
            return math_3.Vector2.Zero().transform(this.worldTransform);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (degrees) {
            this._rotation = degrees % 360;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "localRotation", {
        get: function () {
            return this._localRotation;
        },
        set: function (newRotation) {
            this._localRotation = newRotation % 360;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (newScale) {
            this._scale = newScale;
        },
        enumerable: false,
        configurable: true
    });
    Transform.prototype.relativeControlPoints = function (controlPoints) {
        var _this = this;
        var result = [];
        controlPoints.forEach(function (controlPoint) {
            result.push(controlPoint.subtract(_this.position));
        });
        return result;
    };
    Transform.prototype.updateWorldTransform = function (parentWorldTransform) {
        var _this = this;
        this.localTrasform.value = [
            [1, 0, 0],
            [0, 1, 0],
            [this.position.x, this.position.y, 1]
        ];
        if (this.parent.node.id != '#Root') {
            var cos_1 = Math.cos(this.rotation * math_1.Constant.TAU);
            var sin_1 = Math.sin(this.rotation * math_1.Constant.TAU);
            this.localTrasform = (new math_2.Matrix([
                [1, 0, 0],
                [0, 1, 0],
                [this.position.x, this.position.y, 1]
            ]).multiply([
                [cos_1, sin_1, 0],
                [-sin_1, cos_1, 0],
                [0, 0, 1],
            ]).multiply([
                [1, 0, 0],
                [0, 1, 0],
                [-this.position.x, -this.position.y, 1]
            ])).multiply(this.localTrasform);
        }
        var cos = Math.cos(this.localRotation * math_1.Constant.TAU);
        var sin = Math.sin(this.localRotation * math_1.Constant.TAU);
        this.localTrasform = new math_2.Matrix([
            [cos, sin, 0],
            [-sin, cos, 0],
            [0, 0, 1]
        ]).multiply(this.localTrasform);
        this.localTrasform = new math_2.Matrix([
            [this.scale.x, 0, 0],
            [0, this.scale.y, 0],
            [0, 0, 1]
        ]).multiply(this.localTrasform);
        if (parentWorldTransform) {
            this.worldTransform = this.localTrasform.multiply(parentWorldTransform);
        }
        else {
            this.worldTransform = this.localTrasform.clone();
        }
        this.childs.forEach(function (child) {
            child.updateWorldTransform(_this.worldTransform);
        });
        this.applyTransform();
    };
    Transform.prototype.applyTransform = function () {
        var _this = this;
        this.refControlPoints.forEach(function (controlPoint, index) {
            _this.controlPoints[index] = controlPoint.transform(_this.worldTransform);
        });
    };
    return Transform;
}());
exports.Transform = Transform;


/***/ }),

/***/ 316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
var canvas_1 = __webpack_require__(235);
var math_1 = __webpack_require__(726);
var math_2 = __webpack_require__(726);
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.toString = function () {
        return '[' + this.x.toFixed(3) + ', ' + this.y.toFixed(3) + ']';
    };
    Vector2.prototype.add = function (arg1, arg2) {
        if (arg1 instanceof Vector2) {
            return new Vector2(this.x + arg1.x, this.y + arg1.y);
        }
        else if (typeof arg2 === 'undefined') {
            return new Vector2(this.x + arg1, this.y + arg1);
        }
        else {
            return new Vector2(this.x + arg1, this.y + arg2);
        }
    };
    Vector2.prototype.addInPlace = function (arg1, arg2) {
        if (arg1 instanceof Vector2) {
            this.x += arg1.x;
            this.y += arg1.y;
        }
        else if (!arg2) {
            this.x += arg1;
            this.y += arg1;
        }
        else {
            this.x += arg1;
            this.y += arg2;
        }
        return this;
    };
    Vector2.prototype.multiply = function (arg1, arg2) {
        if (arg1 instanceof Vector2) {
            return new Vector2(this.x * arg1.x, this.y * arg1.y);
        }
        else {
            return new Vector2(this.x * arg1, this.y * arg2);
        }
    };
    Vector2.prototype.multiplyInPlace = function (arg1, arg2) {
        if (arg1 instanceof Vector2) {
            this.x *= arg1.x;
            this.y *= arg1.y;
        }
        else if (!arg2) {
            this.x *= arg1;
            this.y *= arg1;
        }
        else {
            this.x *= arg1;
            this.y *= arg2;
        }
        return this;
    };
    Vector2.prototype.subtract = function (arg1, arg2) {
        if (arg1 instanceof Vector2) {
            return new Vector2(this.x - arg1.x, this.y - arg1.y);
        }
        else {
            return new Vector2(this.x - arg1, this.y - arg2);
        }
    };
    Vector2.prototype.subtractInPlace = function (arg1, arg2) {
        if (arg1 instanceof Vector2) {
            this.x -= arg1.x;
            this.y -= arg1.y;
        }
        else {
            this.x -= arg1;
            this.y -= arg2;
        }
    };
    Vector2.prototype.rotate = function (pivot, degrees) {
        degrees = degrees * math_1.Constant.TAU;
        var cosT = Math.cos(degrees);
        var sinT = Math.sin(degrees);
        return new Vector2((cosT * (this.x - pivot.x)) - (sinT * (this.y - pivot.y)) + pivot.x, (sinT * (this.x - pivot.x)) + (cosT * (this.y - pivot.y)) + pivot.y);
    };
    Vector2.prototype.rotateInPlace = function (pivot, degrees) {
        degrees = degrees * math_1.Constant.TAU;
        var cosT = Math.cos(degrees);
        var sinT = Math.sin(degrees);
        this.tmpX = (cosT * (this.x - pivot.x)) - (sinT * (this.y - pivot.y)) + pivot.x;
        this.tmpY = (sinT * (this.x - pivot.x)) + (cosT * (this.y - pivot.y)) + pivot.y;
        this.x = this.tmpX;
        this.y = this.tmpY;
        return this;
    };
    Vector2.prototype.max = function () {
        return Math.max(this.x, this.y);
    };
    Vector2.prototype.transform = function (matrix) {
        var result = math_2.Matrix.Multiply([[this.x, this.y, 1]], matrix.value);
        return new Vector2(result[0][0], result[0][1]);
    };
    Vector2.prototype.transformInPlace = function (matrix) {
        var result = math_2.Matrix.Multiply([[this.x, this.y, 1]], matrix.value);
        this.x = result[0][0];
        this.y = result[0][1];
    };
    Vector2.Midpoint = function (vector1, vector2) {
        return new Vector2((vector1.x + vector2.x) / 2, (vector1.y + vector2.y) / 2);
    };
    Vector2.Distance = function (vector1, vector2) {
        return Math.sqrt(Math.pow(vector2.x - vector1.x, 2) + Math.pow(vector2.y - vector1.y, 2));
    };
    Vector2.Zero = function () {
        return new Vector2(0, 0);
    };
    Vector2.One = function () {
        return new Vector2(1, 1);
    };
    Vector2.Bounds = function (vectors) {
        var minVec = new Vector2(Number.MAX_VALUE, Number.MAX_VALUE);
        var maxVec = new Vector2(Number.MIN_VALUE, Number.MIN_VALUE);
        vectors.forEach(function (vector) {
            if (vector.x < minVec.x)
                minVec.x = vector.x;
            if (vector.y < minVec.y)
                minVec.y = vector.y;
            if (vector.x > maxVec.x)
                maxVec.x = vector.x;
            if (vector.y > maxVec.y)
                maxVec.y = vector.y;
        });
        return [minVec, maxVec];
    };
    Vector2.Average = function (vectors) {
        var sumX = 0;
        var sumY = 0;
        vectors.forEach(function (vector) {
            sumX += vector.x;
            sumY += vector.y;
        });
        return new Vector2(sumX / vectors.length, sumY / vectors.length);
    };
    Vector2.Random = function (minXOrCanvas, maxX, minY, maxY) {
        if (minXOrCanvas instanceof canvas_1.Canvas) {
            return new Vector2(Math.random() * minXOrCanvas.width, Math.random() * minXOrCanvas.height);
        }
        else {
            return new Vector2(Math.random() * (maxX - minXOrCanvas) + minXOrCanvas, Math.random() * (maxY - minY) + minY);
        }
    };
    Vector2.Lerp = function (start, end, amount) {
        return new Vector2(start.x + ((end.x - start.x) * amount), start.y + ((end.y - start.y) * amount));
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ }),

/***/ 985:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ellipse = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Ellipse = (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(id, position, minor, major, props) {
        var _this = _super.call(this, id, position, [
            position.subtract(0, minor),
            position.add(major, 0),
            position.add(0, minor),
            position.subtract(major, 0)
        ]) || this;
        _this.minor = minor;
        _this.major = major;
        _this.props = props;
        (!props) && (_this.props = {});
        if (_this.props.outlineColor && typeof (_this.props.outlineColor) != 'string') {
            _this.props.outlineColor.node = _this;
        }
        if (_this.props.fillColor && typeof (_this.props.fillColor) != 'string') {
            _this.props.fillColor.node = _this;
        }
        return _this;
    }
    Ellipse.prototype._render = function () {
        if (this.props) {
            (this.props.outlineColor) && (this.context.strokeStyle = (typeof (this.props.outlineColor) == 'string') ? this.props.outlineColor : this.props.outlineColor.create(this.context));
            (this.props.fillColor) && (this.context.fillStyle = (typeof (this.props.fillColor) == 'string') ? this.props.fillColor : this.props.fillColor.create(this.context));
            (this.props.outlineWidth) && (this.context.lineWidth = this.props.outlineWidth);
            (this.props.outlineDashSegments) && this.context.setLineDash(this.props.outlineDashSegments);
            (this.props.shadowColor) && (this.context.shadowColor = this.props.shadowColor);
            (this.props.shadowBlur) && (this.context.shadowBlur = this.props.shadowBlur);
            if (this.props.shadowOffset) {
                if (!this.props.staticShadow) {
                    var shadowOffset = this.props.shadowOffset.transform(this.transform.worldTransform).subtract(this.absolutePosition);
                    this.context.shadowOffsetX = shadowOffset.x;
                    this.context.shadowOffsetY = shadowOffset.y;
                }
                else {
                    this.context.shadowOffsetX = this.props.shadowOffset.x;
                    this.context.shadowOffsetY = this.props.shadowOffset.y;
                }
            }
        }
        var position = this.absolutePosition;
        this.context.beginPath();
        if (this.minor == this.major) {
            this.context.arc(position.x, position.y, this.minor, 0, 2 * Math.PI);
        }
        else {
            this.context.ellipse(position.x, position.y, this.major, this.minor, Math.atan2(this.transform.controlPoints[1].y - position.y, this.transform.controlPoints[1].x - position.x), 0, 2 * Math.PI);
        }
        if (this.props.fill) {
            this.context.fill();
        }
        if (this.props.outline || !this.props.fill) {
            this.context.stroke();
        }
    };
    Ellipse.prototype._offRender = function () {
        (this.props.outlineWidth) && (this.offContext.lineWidth = this.props.outlineWidth);
        this.offContext.strokeStyle = this.hitColor;
        this.offContext.fillStyle = this.hitColor;
        var position = this.absolutePosition;
        this.offContext.beginPath();
        if (this.minor == this.major) {
            this.offContext.arc(position.x, position.y, this.minor, 0, 2 * Math.PI);
        }
        else {
            this.offContext.ellipse(position.x, position.y, this.major, this.minor, Math.atan2(this.transform.controlPoints[1].y - position.y, this.transform.controlPoints[1].x - position.x), 0, 2 * Math.PI);
        }
        if (this.props.fill) {
            this.offContext.fill();
        }
        if (this.props.outline || !this.props.fill) {
            this.offContext.stroke();
        }
    };
    Ellipse.prototype.getDimension = function () {
        return new math_1.Vector2(math_1.Vector2.Distance(this.transform.controlPoints[1], this.transform.controlPoints[3]), math_1.Vector2.Distance(this.transform.controlPoints[0], this.transform.controlPoints[2]));
    };
    return Ellipse;
}(node_1.Node));
exports.Ellipse = Ellipse;


/***/ }),

/***/ 397:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Empty = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Empty = (function (_super) {
    __extends(Empty, _super);
    function Empty(id, position) {
        return _super.call(this, id, position, []) || this;
    }
    Empty.prototype._render = function () { };
    Empty.prototype._offRender = function () { };
    Empty.prototype.getDimension = function () {
        return math_1.Vector2.Zero();
    };
    return Empty;
}(node_1.Node));
exports.Empty = Empty;


/***/ }),

/***/ 700:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Image = (function (_super) {
    __extends(Image, _super);
    function Image(id, position, source, width, height, props) {
        var _this = _super.call(this, id, position, []) || this;
        _this.width = width;
        _this.height = height;
        _this.props = props;
        (!props) && (_this.props = {});
        if (typeof (source) == 'string') {
            _this._source = new window.Image();
            _this._source.src = source;
        }
        else {
            _this._source = source;
        }
        _this._source.crossOrigin = "Anonymous";
        return _this;
    }
    Image.prototype._render = function () {
        if (this.props) {
            (this.props.shadowColor) && (this.context.shadowColor = this.props.shadowColor);
            (this.props.shadowBlur) && (this.context.shadowBlur = this.props.shadowBlur);
            if (this.props.shadowOffset) {
                if (!this.props.staticShadow) {
                    var shadowOffset = this.props.shadowOffset.transform(this.transform.worldTransform).subtract(this.absolutePosition);
                    this.context.shadowOffsetX = shadowOffset.x;
                    this.context.shadowOffsetY = shadowOffset.y;
                }
                else {
                    this.context.shadowOffsetX = this.props.shadowOffset.x;
                    this.context.shadowOffsetY = this.props.shadowOffset.y;
                }
            }
        }
        this.context.translate(this.absolutePosition.x, this.absolutePosition.y);
        this.context.rotate(this.transform.worldTransform.getRotation() * (Math.PI / 180));
        this.context.translate(-this.absolutePosition.x, -this.absolutePosition.y);
        var topLeft = this.absolutePosition.subtract((this.width * this.transform.scale.x) / 2, (this.height * this.transform.scale.y) / 2);
        this.context.drawImage(this._source, topLeft.x, topLeft.y, this.width * this.transform.scale.x, this.height * this.transform.scale.y);
    };
    Image.prototype._offRender = function () {
        this.offContext.fillStyle = this.hitColor;
        this.offContext.translate(this.absolutePosition.x, this.absolutePosition.y);
        this.offContext.rotate(this.transform.worldTransform.getRotation() * (Math.PI / 180));
        this.offContext.translate(-this.absolutePosition.x, -this.absolutePosition.y);
        var topLeft = this.absolutePosition.subtract((this.width * this.transform.scale.x) / 2, (this.height * this.transform.scale.y) / 2);
        this.offContext.fillRect(topLeft.x, topLeft.y, this.width * this.transform.scale.x, this.height * this.transform.scale.y);
    };
    Image.prototype.getDimension = function () {
        return new math_1.Vector2(this.width, this.height);
    };
    return Image;
}(node_1.Node));
exports.Image = Image;


/***/ }),

/***/ 605:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(id, _from, _to, pivot, props) {
        var _this = _super.call(this, id, (_from instanceof math_1.Vector2 && _to instanceof math_1.Vector2) ?
            ((pivot) ? _from.add((_to.x - _from.x) * pivot, (_to.y - _from.y) * pivot) : _from.clone()) :
            (math_1.Vector2.Zero()), (_from instanceof math_1.Vector2 && _to instanceof math_1.Vector2) ?
            [_from, _to] :
            []) || this;
        _this._from = _from;
        _this._to = _to;
        _this.props = props;
        (!props) && (_this.props = {});
        if (_this.props.color && typeof (_this.props.color) != 'string') {
            _this.props.color.node = _this;
        }
        return _this;
    }
    Object.defineProperty(Line.prototype, "from", {
        get: function () {
            if (this._from instanceof node_1.Node)
                return this._from.absolutePosition;
            else
                return this.transform.controlPoints[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "to", {
        get: function () {
            if (this._to instanceof node_1.Node)
                return this._to.absolutePosition;
            else
                return this.transform.controlPoints[1];
        },
        enumerable: false,
        configurable: true
    });
    Line.prototype._render = function () {
        if (this.props) {
            (this.props.color) && (this.context.strokeStyle = (typeof (this.props.color) == 'string') ? this.props.color : this.props.color.create(this.context));
            (this.props.lineWidth) && (this.context.lineWidth = this.props.lineWidth);
            (this.props.lineCap) && (this.context.lineCap = this.props.lineCap);
            (this.props.lineDashSegments) && this.context.setLineDash(this.props.lineDashSegments);
            (this.props.shadowColor) && (this.context.shadowColor = this.props.shadowColor);
            (this.props.shadowBlur) && (this.context.shadowBlur = this.props.shadowBlur);
            if (this.props.shadowOffset) {
                if (!this.props.staticShadow) {
                    var shadowOffset = this.props.shadowOffset.transform(this.transform.worldTransform).subtract(this.absolutePosition);
                    this.context.shadowOffsetX = shadowOffset.x;
                    this.context.shadowOffsetY = shadowOffset.y;
                }
                else {
                    this.context.shadowOffsetX = this.props.shadowOffset.x;
                    this.context.shadowOffsetY = this.props.shadowOffset.y;
                }
            }
        }
        this.context.beginPath();
        this.context.moveTo(this.from.x, this.from.y);
        this.context.lineTo(this.to.x, this.to.y);
        this.context.stroke();
    };
    Line.prototype._offRender = function () {
        (this.props.lineWidth) && (this.offContext.lineWidth = this.props.lineWidth);
        this.offContext.strokeStyle = this.hitColor;
        this.offContext.beginPath();
        this.offContext.moveTo(this.from.x, this.from.y);
        this.offContext.lineTo(this.to.x, this.to.y);
        this.offContext.stroke();
    };
    Line.prototype.getDimension = function () {
        return new math_1.Vector2(math_1.Vector2.Distance(this.transform.controlPoints[0], this.transform.controlPoints[1]), 0);
    };
    return Line;
}(node_1.Node));
exports.Line = Line;


/***/ }),

/***/ 834:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Polygon = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon(id, vertices, center, props) {
        var _this = _super.call(this, id, (center instanceof math_1.Vector2) ? center : math_1.Vector2.Average(vertices), vertices) || this;
        _this.props = props;
        (!props) && (_this.props = {});
        if (_this.props.outlineColor && typeof (_this.props.outlineColor) != 'string') {
            _this.props.outlineColor.node = _this;
        }
        if (_this.props.fillColor && typeof (_this.props.fillColor) != 'string') {
            _this.props.fillColor.node = _this;
        }
        return _this;
    }
    Polygon.prototype._render = function () {
        if (this.props) {
            (this.props.outlineColor) && (this.context.strokeStyle = (typeof (this.props.outlineColor) == 'string') ? this.props.outlineColor : this.props.outlineColor.create(this.context));
            (this.props.fillColor) && (this.context.fillStyle = (typeof (this.props.fillColor) == 'string') ? this.props.fillColor : this.props.fillColor.create(this.context));
            (this.props.outlineWidth) && (this.context.lineWidth = this.props.outlineWidth);
            (this.props.outlineDashSegments) && this.context.setLineDash(this.props.outlineDashSegments);
            (this.props.shadowColor) && (this.context.shadowColor = this.props.shadowColor);
            (this.props.shadowBlur) && (this.context.shadowBlur = this.props.shadowBlur);
            if (this.props.shadowOffset) {
                if (!this.props.staticShadow) {
                    var shadowOffset = this.props.shadowOffset.transform(this.transform.worldTransform).subtract(this.absolutePosition);
                    this.context.shadowOffsetX = shadowOffset.x;
                    this.context.shadowOffsetY = shadowOffset.y;
                }
                else {
                    this.context.shadowOffsetX = this.props.shadowOffset.x;
                    this.context.shadowOffsetY = this.props.shadowOffset.y;
                }
            }
        }
        this.context.beginPath();
        this.context.moveTo(this.transform.controlPoints[0].x, this.transform.controlPoints[0].y);
        for (var index = 1; index < this.transform.controlPoints.length; index++) {
            this.context.lineTo(this.transform.controlPoints[index].x, this.transform.controlPoints[index].y);
        }
        this.context.closePath();
        if (this.props.fill) {
            this.context.fill();
        }
        if (this.props.outline || !this.props.fill) {
            this.context.stroke();
        }
    };
    Polygon.prototype._offRender = function () {
        (this.props.outlineWidth) && (this.offContext.lineWidth = this.props.outlineWidth);
        this.offContext.strokeStyle = this.hitColor;
        this.offContext.fillStyle = this.hitColor;
        this.offContext.beginPath();
        this.offContext.moveTo(this.transform.controlPoints[0].x, this.transform.controlPoints[0].y);
        for (var index = 1; index < this.transform.controlPoints.length; index++) {
            this.offContext.lineTo(this.transform.controlPoints[index].x, this.transform.controlPoints[index].y);
        }
        this.offContext.closePath();
        if (this.props.fill) {
            this.offContext.fill();
        }
        if (this.props.outline || !this.props.fill) {
            this.offContext.stroke();
        }
    };
    Polygon.prototype.getDimension = function () {
        var bounds = math_1.Vector2.Bounds(this.transform.controlPoints);
        return new math_1.Vector2(Math.abs(bounds[0].x - bounds[1].x), Math.abs(bounds[0].y - bounds[1].y));
    };
    return Polygon;
}(node_1.Node));
exports.Polygon = Polygon;


/***/ }),

/***/ 265:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(id, position, width, height, props) {
        var _this = _super.call(this, id, position, [
            position.add(-width / 2, -height / 2),
            position.add(width / 2, -height / 2),
            position.add(width / 2, height / 2),
            position.add(-width / 2, height / 2)
        ]) || this;
        _this.props = props;
        (!props) && (_this.props = {});
        if (_this.props.outlineColor && typeof (_this.props.outlineColor) != 'string') {
            _this.props.outlineColor.node = _this;
        }
        if (_this.props.fillColor && typeof (_this.props.fillColor) != 'string') {
            _this.props.fillColor.node = _this;
        }
        return _this;
    }
    Rectangle.prototype._render = function () {
        if (this.props) {
            (this.props.outlineColor) && (this.context.strokeStyle = (typeof (this.props.outlineColor) == 'string') ? this.props.outlineColor : this.props.outlineColor.create(this.context));
            (this.props.fillColor) && (this.context.fillStyle = (typeof (this.props.fillColor) == 'string') ? this.props.fillColor : this.props.fillColor.create(this.context));
            (this.props.outlineWidth) && (this.context.lineWidth = this.props.outlineWidth);
            (this.props.outlineDashSegments) && this.context.setLineDash(this.props.outlineDashSegments);
            (this.props.shadowColor) && (this.context.shadowColor = this.props.shadowColor);
            (this.props.shadowBlur) && (this.context.shadowBlur = this.props.shadowBlur);
            if (this.props.shadowOffset) {
                if (!this.props.staticShadow) {
                    var shadowOffset = this.props.shadowOffset.transform(this.transform.worldTransform).subtract(this.absolutePosition);
                    this.context.shadowOffsetX = shadowOffset.x;
                    this.context.shadowOffsetY = shadowOffset.y;
                }
                else {
                    this.context.shadowOffsetX = this.props.shadowOffset.x;
                    this.context.shadowOffsetY = this.props.shadowOffset.y;
                }
            }
        }
        this.context.beginPath();
        this.context.moveTo(this.transform.controlPoints[0].x, this.transform.controlPoints[0].y);
        this.context.lineTo(this.transform.controlPoints[1].x, this.transform.controlPoints[1].y);
        this.context.lineTo(this.transform.controlPoints[2].x, this.transform.controlPoints[2].y);
        this.context.lineTo(this.transform.controlPoints[3].x, this.transform.controlPoints[3].y);
        this.context.lineTo(this.transform.controlPoints[0].x, this.transform.controlPoints[0].y);
        if (this.props.fill) {
            this.context.fill();
        }
        if (this.props.outline || !this.props.fill) {
            this.context.stroke();
        }
    };
    Rectangle.prototype._offRender = function () {
        (this.props.outlineWidth) && (this.offContext.lineWidth = this.props.outlineWidth);
        this.offContext.strokeStyle = this.hitColor;
        this.offContext.fillStyle = this.hitColor;
        this.offContext.beginPath();
        this.offContext.moveTo(this.transform.controlPoints[0].x, this.transform.controlPoints[0].y);
        this.offContext.lineTo(this.transform.controlPoints[1].x, this.transform.controlPoints[1].y);
        this.offContext.lineTo(this.transform.controlPoints[2].x, this.transform.controlPoints[2].y);
        this.offContext.lineTo(this.transform.controlPoints[3].x, this.transform.controlPoints[3].y);
        this.offContext.lineTo(this.transform.controlPoints[0].x, this.transform.controlPoints[0].y);
        if (this.props.fill) {
            this.offContext.fill();
        }
        if (this.props.outline || !this.props.fill) {
            this.offContext.stroke();
        }
    };
    Rectangle.prototype.getDimension = function () {
        return new math_1.Vector2(math_1.Vector2.Distance(this.transform.controlPoints[0], this.transform.controlPoints[1]), math_1.Vector2.Distance(this.transform.controlPoints[1], this.transform.controlPoints[2]));
    };
    return Rectangle;
}(node_1.Node));
exports.Rectangle = Rectangle;


/***/ }),

/***/ 940:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Text = void 0;
var math_1 = __webpack_require__(726);
var node_1 = __webpack_require__(697);
var Text = (function (_super) {
    __extends(Text, _super);
    function Text(id, position, text, props) {
        var _this = _super.call(this, id, position, []) || this;
        _this.props = props;
        (!props) && (_this.props = {});
        _this.text = text;
        if (_this.props.outlineColor && typeof (_this.props.outlineColor) != 'string') {
            _this.props.outlineColor.node = _this;
        }
        if (_this.props.fillColor && typeof (_this.props.fillColor) != 'string') {
            _this.props.fillColor.node = _this;
        }
        var textMetricContext = document.createElement('canvas').getContext('2d');
        (_this.props.font) && (textMetricContext.font = _this.props.font);
        _this._originalWidth = textMetricContext.measureText(text).width;
        _this._originalHeight = textMetricContext.measureText('M').width;
        return _this;
    }
    Object.defineProperty(Text.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: false,
        configurable: true
    });
    Text.prototype._render = function () {
        if (this.props) {
            (this.props.outlineColor) && (this.context.strokeStyle = (typeof (this.props.outlineColor) == 'string') ? this.props.outlineColor : this.props.outlineColor.create(this.context));
            (this.props.fillColor) && (this.context.fillStyle = (typeof (this.props.fillColor) == 'string') ? this.props.fillColor : this.props.fillColor.create(this.context));
            (this.props.outlineWidth) && (this.context.lineWidth = this.props.outlineWidth);
            (this.props.shadowColor) && (this.context.shadowColor = this.props.shadowColor);
            (this.props.shadowBlur) && (this.context.shadowBlur = this.props.shadowBlur);
            if (this.props.shadowOffset) {
                if (!this.props.staticShadow) {
                    var shadowOffset = this.props.shadowOffset.transform(this.transform.worldTransform).subtract(this.absolutePosition);
                    this.context.shadowOffsetX = shadowOffset.x;
                    this.context.shadowOffsetY = shadowOffset.y;
                }
                else {
                    this.context.shadowOffsetX = this.props.shadowOffset.x;
                    this.context.shadowOffsetY = this.props.shadowOffset.y;
                }
            }
            (this.props.font) && (this.context.font = this.props.font);
        }
        this.context.translate(this.absolutePosition.x, this.absolutePosition.y);
        this.context.scale(this.scale.x, this.scale.y);
        this.context.rotate(this.transform.worldTransform.getRotation() * (Math.PI / 180));
        this.context.translate(-this.absolutePosition.x, -this.absolutePosition.y);
        (this.props.outline) && this.context.strokeText(this.text, this.absolutePosition.x - (this._originalWidth / 2), this.absolutePosition.y + (this._originalHeight / 2));
        (this.props.fill || !this.props.outline) && this.context.fillText(this.text, this.absolutePosition.x - (this._originalWidth / 2), this.absolutePosition.y + (this._originalHeight / 2));
    };
    Text.prototype._offRender = function () {
        this.offContext.fillStyle = this.hitColor;
        this.offContext.translate(this.absolutePosition.x, this.absolutePosition.y);
        this.offContext.scale(this.scale.x, this.scale.y);
        this.offContext.rotate(this.transform.worldTransform.getRotation() * (Math.PI / 180));
        this.offContext.translate(-this.absolutePosition.x, -this.absolutePosition.y);
        this.offContext.fillRect(this.absolutePosition.x - (this._originalWidth / 2), this.absolutePosition.y - (this._originalHeight / 2), (this._originalWidth), (this._originalHeight));
    };
    Text.prototype.getDimension = function () {
        return new math_1.Vector2(math_1.Vector2.Distance(this.transform.controlPoints[0], this.transform.controlPoints[1]), 0);
    };
    return Text;
}(node_1.Node));
exports.Text = Text;


/***/ }),

/***/ 842:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RadialGradient = exports.LinearGradient = void 0;
var math_1 = __webpack_require__(726);
var math_2 = __webpack_require__(726);
var enums_1 = __webpack_require__(900);
__exportStar(__webpack_require__(985), exports);
__exportStar(__webpack_require__(397), exports);
__exportStar(__webpack_require__(700), exports);
__exportStar(__webpack_require__(605), exports);
__exportStar(__webpack_require__(834), exports);
__exportStar(__webpack_require__(265), exports);
__exportStar(__webpack_require__(940), exports);
var LinearGradient = (function () {
    function LinearGradient(offset, degrees, length, colors, weights) {
        this.offset = offset;
        this.degrees = degrees;
        this.length = length;
        this.colors = colors;
        this.weights = weights;
    }
    LinearGradient.prototype.create = function (context) {
        var _this = this;
        var gradient, from, to, length, delta = new math_2.Vector2(0, 0);
        length = (this.length == enums_1.Handle.AUTO) ? this.node.getDimension().max() : this.length;
        delta.x = (length / 2) * Math.cos(this.degrees * math_1.Constant.TAU);
        delta.y = (length / 2) * Math.sin(this.degrees * math_1.Constant.TAU);
        from = this.offset.subtract(delta).transform(this.node.transform.worldTransform);
        to = this.offset.add(delta).transform(this.node.transform.worldTransform);
        gradient = context.createLinearGradient(from.x, from.y, to.x, to.y);
        this.colors.forEach(function (color, index) {
            gradient.addColorStop(_this.weights[index], color);
        });
        return gradient;
    };
    return LinearGradient;
}());
exports.LinearGradient = LinearGradient;
var RadialGradient = (function () {
    function RadialGradient(fromOffset, fromRadius, toOffset, toRadius, colors, weights) {
        this.fromOffset = fromOffset;
        this.fromRadius = fromRadius;
        this.toOffset = toOffset;
        this.toRadius = toRadius;
        this.colors = colors;
        this.weights = weights;
    }
    RadialGradient.prototype.create = function (context) {
        var _this = this;
        var gradient;
        var fromCenter = this.fromOffset.transform(this.node.transform.worldTransform);
        var toCenter = this.toOffset.transform(this.node.transform.worldTransform);
        var fromRadius, toRadius;
        if (this.fromRadius == enums_1.Handle.AUTO || this.toRadius == enums_1.Handle.AUTO) {
            fromRadius = 1;
            toRadius = this.node.getDimension().max() / 2;
        }
        else {
            fromRadius = this.fromRadius;
            toRadius = this.toRadius;
        }
        gradient = context.createRadialGradient(fromCenter.x, fromCenter.y, fromRadius, toCenter.x, toCenter.y, toRadius);
        this.colors.forEach(function (color, index) {
            gradient.addColorStop(_this.weights[index], color);
        });
        return gradient;
    };
    return RadialGradient;
}());
exports.RadialGradient = RadialGradient;


/***/ }),

/***/ 235:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
var Canvas = (function () {
    function Canvas(element, width, height) {
        this.drawingHandle = -1;
        if (!element) {
            this.canvasElement = document.createElement('canvas');
            this.canvasElement.width = document.body.clientWidth;
            this.canvasElement.height = document.body.clientHeight;
            document.body.appendChild(this.canvasElement);
        }
        else {
            if (element instanceof HTMLDivElement) {
                this.canvasElement = document.createElement('canvas');
                if (width && height) {
                    this.canvasElement.width = width;
                    this.canvasElement.height = height;
                }
                else {
                    this.canvasElement.width = element.clientWidth;
                    this.canvasElement.height = element.clientHeight;
                }
                element.appendChild(this.canvasElement);
            }
            else {
                this.canvasElement = element;
                if (width && height) {
                    this.canvasElement.width = width;
                    this.canvasElement.height = height;
                }
            }
        }
        this.width = this.canvasElement.width;
        this.height = this.canvasElement.height;
        this.context = this.canvasElement.getContext('2d');
        this.offCanvasElement = new OffscreenCanvas(this.width, this.height);
        this.offContext = this.offCanvasElement.getContext('2d');
    }
    Canvas.prototype.draw = function (drawing) {
        if (this.drawingHandle != -1) {
            window.cancelAnimationFrame(this.drawingHandle);
        }
        window.requestAnimationFrame(drawing.render.bind(drawing));
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
var Color = (function () {
    function Color() {
    }
    Color.Random = function () {
        return ('#' + Math.floor(Math.random() * 16777215).toString(16));
    };
    Color.rgbToHex = function (rgb) {
        return "#" + Color._componentToHex(rgb[0]) + Color._componentToHex(rgb[1]) + Color._componentToHex(rgb[2]);
    };
    Color._componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    };
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ 346:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debug = void 0;
var Debug = (function () {
    function Debug() {
    }
    Debug.debugPoint = function (key, drawing, point, props, frames) {
        Debug.limitDebugCalls(drawing, key, frames);
        drawing.debugCalls[key].push({
            debugFunction: Debug._debugPoint,
            arguments: [drawing.canvas.context, point.clone(), props]
        });
    };
    Debug._debugPoint = function (context, center, props) {
        context.fillStyle = props.color;
        context.beginPath();
        context.arc(center.x, center.y, (props.radius) ? props.radius : 2, 0, 2 * Math.PI);
        context.fill();
    };
    Debug.debugLine = function (key, drawing, from, to, props, frames) {
        Debug.limitDebugCalls(drawing, key, frames);
        drawing.debugCalls[key].push({
            debugFunction: Debug._debugLine,
            arguments: [drawing.canvas.context, from.clone(), to.clone(), props]
        });
    };
    Debug._debugLine = function (context, from, to, props) {
        context.strokeStyle = props.color;
        context.lineWidth = (props.width) ? props.width : 1;
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.stroke();
        context.fillStyle = 'green';
        context.beginPath();
        context.arc(from.x, from.y, 2, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(to.x, to.y, 2, 0, 2 * Math.PI);
        context.fill();
    };
    Debug.show = function (debugCalls, context) {
        for (var debug in debugCalls) {
            for (var _i = 0, _a = debugCalls[debug]; _i < _a.length; _i++) {
                var call = _a[_i];
                context.save();
                call.debugFunction.apply(call, call.arguments);
                context.restore();
            }
        }
    };
    Debug.limitDebugCalls = function (drawing, key, frames) {
        if (frames && drawing.debugCalls[key] && (frames - 1) < drawing.debugCalls[key].length) {
            drawing.debugCalls[key].shift();
        }
        else {
            (!drawing.debugCalls[key] || !frames) && (drawing.debugCalls[key] = []);
        }
    };
    return Debug;
}());
exports.Debug = Debug;


/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Drawing = void 0;
var debug_1 = __webpack_require__(346);
var math_1 = __webpack_require__(726);
var view_1 = __webpack_require__(842);
var node_1 = __webpack_require__(697);
var color_1 = __webpack_require__(148);
var Drawing = (function () {
    function Drawing(canvas, globalUpdate) {
        this.canvas = canvas;
        this.globalUpdate = globalUpdate;
        var rootNode = new view_1.Empty('#Root', math_1.Vector2.Zero());
        rootNode.context = this.canvas.context;
        rootNode.drawing = this;
        this.renderTree = rootNode;
        this.debugCalls = {};
        this.mousePos = math_1.Vector2.Zero();
        this.colorToNode = {};
        this._registerEvents();
    }
    Drawing.prototype._registerEvents = function () {
        var _this = this;
        var currentHitNode, prevHitNode;
        var isDragging = false;
        var currentDragNode = null;
        var canvasOffset;
        this.canvas.canvasElement.onmousemove = function (ev) {
            canvasOffset = _this.canvas.canvasElement.getBoundingClientRect();
            _this.mousePos.x = ev.clientX - canvasOffset.left;
            _this.mousePos.y = ev.clientY - canvasOffset.top;
            currentHitNode = _this._getHitNode(_this.mousePos);
            if (currentHitNode != prevHitNode) {
                (prevHitNode) && prevHitNode.call('mouseexit');
                (currentHitNode) && currentHitNode.call('mouseenter');
            }
            prevHitNode = currentHitNode;
            (currentDragNode) && currentDragNode.call('drag', [_this.mousePos.clone()]);
        };
        this.canvas.canvasElement.onmousedown = function () {
            isDragging = true;
            currentDragNode = currentHitNode;
            var hitNode = _this._getHitNode(_this.mousePos);
            (hitNode) && hitNode.call('mousedown');
        };
        this.canvas.canvasElement.onmouseup = function () {
            isDragging = false;
            currentDragNode = null;
            var hitNode = _this._getHitNode(_this.mousePos);
            (hitNode) && hitNode.call('mouseup');
        };
        this.canvas.canvasElement.onclick = function () {
            var hitNode = _this._getHitNode(_this.mousePos);
            (hitNode) && hitNode.call('click');
        };
        this.canvas.canvasElement.oncontextmenu = function (ev) {
            ev.preventDefault();
            var hitNode = _this._getHitNode(_this.mousePos);
            (hitNode) && hitNode.call('rightclick');
        };
    };
    Drawing.prototype._getHitNode = function (position) {
        return (this.colorToNode[color_1.Color.rgbToHex(this.canvas.offContext.getImageData(position.x, position.y, 1, 1).data)]);
    };
    Drawing.prototype.render = function () {
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.offContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderTree.call('update');
        (this.globalUpdate) && this.globalUpdate();
        this.renderTree.transform.childs.forEach(function (child) {
            child.updateWorldTransform();
        });
        this.renderTree.transform.childs.forEach(function (child) {
            child.node.render();
        });
        debug_1.Debug.show(this.debugCalls, this.canvas.context);
        window.requestAnimationFrame(this.render.bind(this));
    };
    Drawing.prototype.add = function (node) {
        var _this = this;
        if (node instanceof node_1.Node) {
            node.parent = this.renderTree;
            node.setContext(this.canvas.context, this.canvas.offContext);
            node.setDrawing(this);
            node.setHitColor();
        }
        else {
            node.forEach(function (cNode) {
                cNode.parent = _this.renderTree;
                cNode.setContext(_this.canvas.context, _this.canvas.offContext);
                cNode.setDrawing(_this);
                cNode.setHitColor();
            });
        }
    };
    Drawing.prototype.remove = function (nodeOrID) {
        if (nodeOrID instanceof node_1.Node)
            nodeOrID = nodeOrID.id;
        var queue = [];
        var currentNode;
        queue.push(this.renderTree);
        while ((currentNode = queue.shift())) {
            if (currentNode.id == nodeOrID) {
                currentNode.transform.parent.childs.splice(currentNode.transform.parent.childs.indexOf(currentNode.transform), 1);
            }
            else {
                currentNode.transform.childs.forEach(function (child) {
                    queue.push(child.node);
                });
            }
        }
    };
    Drawing.prototype._debugSceneGraph = function (root, indent) {
        var _this = this;
        console.log(indent + root.id + '[' + root.order + ']');
        root.transform.childs.forEach(function (child) {
            _this._debugSceneGraph(child.node, ' ' + indent);
        });
    };
    return Drawing;
}());
exports.Drawing = Drawing;


/***/ }),

/***/ 900:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Handle = void 0;
var Handle;
(function (Handle) {
    Handle[Handle["AUTO"] = -1] = "AUTO";
})(Handle = exports.Handle || (exports.Handle = {}));


/***/ }),

/***/ 697:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = void 0;
var math_1 = __webpack_require__(726);
var math_2 = __webpack_require__(726);
var color_1 = __webpack_require__(148);
var Node = (function () {
    function Node(id, position, controlPoints) {
        this.id = id;
        this.transform = new math_1.Transform(position, 0, 0, math_2.Vector2.One(), controlPoints, this);
        this.registeredEvents = {};
        this.order = 0;
    }
    Object.defineProperty(Node.prototype, "zIndex", {
        get: function () {
            return this.order;
        },
        set: function (zIndex) {
            this.order = zIndex;
            (this.parent) && this.parent.transform.childs.sort(function (a, b) {
                return a.node.order - b.node.order;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parent", {
        get: function () {
            return this.transform.parent.node;
        },
        set: function (newParent) {
            this.transform.parent = newParent.transform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "childs", {
        get: function () {
            return this.transform.childs.map(function (child) {
                return child.node;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "position", {
        get: function () {
            return this.transform.position;
        },
        set: function (position) {
            this.transform.position = position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "absolutePosition", {
        get: function () {
            return this.transform.absolutePosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "rotation", {
        get: function () {
            return this.transform.rotation;
        },
        set: function (degrees) {
            this.transform.rotation = degrees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "localRotation", {
        get: function () {
            return this.transform.localRotation;
        },
        set: function (degrees) {
            this.transform.localRotation = degrees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "scale", {
        get: function () {
            return this.transform.scale;
        },
        set: function (scale) {
            this.transform.scale = scale;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.setHitColor = function () {
        var color = color_1.Color.Random();
        while (this.drawing.colorToNode[color]) {
            color = color_1.Color.Random();
        }
        this.hitColor = color;
        this.drawing.colorToNode[color] = this;
        this.transform.childs.forEach(function (child) {
            child.node.setHitColor();
        });
    };
    Node.prototype.on = function (eventKey, callback) {
        this.registeredEvents[eventKey] = callback;
    };
    Node.prototype.render = function () {
        this.context.save();
        this._render();
        this.context.restore();
        this.offRender();
        for (var _i = 0, _a = this.transform.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            child.node.render();
        }
    };
    Node.prototype.offRender = function () {
        this.offContext.save();
        this._offRender();
        this.offContext.restore();
    };
    Node.prototype.call = function (method, args) {
        var _a;
        if (this.registeredEvents[method]) {
            if (args) {
                (_a = this.registeredEvents)[method].apply(_a, __spreadArrays([this], args));
            }
            else {
                this.registeredEvents[method](this);
            }
        }
        for (var _i = 0, _b = this.transform.childs; _i < _b.length; _i++) {
            var child = _b[_i];
            child.node.call(method, args);
        }
    };
    Node.prototype.setContext = function (context, offContext) {
        this.context = context;
        this.offContext = offContext;
        this.transform.childs.forEach(function (child) {
            child.node.setContext(context, offContext);
        });
    };
    Node.prototype.setDrawing = function (drawing) {
        this.drawing = drawing;
        this.transform.childs.forEach(function (child) {
            child.node.setDrawing(drawing);
        });
    };
    Node.prototype.dispose = function () {
        this.drawing.remove(this.id);
    };
    return Node;
}());
exports.Node = Node;


/***/ }),

/***/ 229:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
__exportStar(__webpack_require__(900), exports);
__exportStar(__webpack_require__(333), exports);
__exportStar(__webpack_require__(346), exports);
__exportStar(__webpack_require__(148), exports);
__exportStar(__webpack_require__(235), exports);
exports.View = __webpack_require__(842);
__exportStar(__webpack_require__(726), exports);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(229);
/******/ })()
;
});
//# sourceMappingURL=percept.js.map