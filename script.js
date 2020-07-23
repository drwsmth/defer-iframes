function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('DOMContentLoaded', function (evt) {
  var iframes = ".iframe-deferred";
  iframes = Array.from(document.querySelectorAll(iframes)); // -----

  var iframeGenerate = function iframeGenerate(src) {
    var iframe = document.createElement("iframe");
    iframeSetAttributes(src, iframe);
    src.append(iframe);
  }; // -----


  var onIntersection = function onIntersection(entries) {
    if (!iframes.length) observer.disconnect();
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        iframeGenerate(entry.target);
      }
    });
  }; // -----


  var iframeSetAttributes = function iframeSetAttributes(src, target) {
    _toConsumableArray(src.attributes).forEach(function (attr) {
      if (attr.name.startsWith('data')) {
        target.setAttribute(attr.name.slice(5), attr.value);
      }
    });
  }; // -----


  var observer = new IntersectionObserver(onIntersection);
  iframes.forEach(function (iframe) {
    return observer.observe(iframe);
  });
});