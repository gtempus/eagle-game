(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("scripts/knockknock", function(exports, require, module) {
  
  $(document).ready(function() {
    var canvas, ctx, img;
    canvas = document.getElementById("game");
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(100,50,0)";
    ctx.fillRect(0, 0, 1000, 750);
    ctx.fillStyle = "rgb(0,0,200)";
    ctx.fillRect(10, 100, 55, 50);
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
    ctx.fillStyle = "rgb(0,200,0)";
    ctx.fillRect(100, 100, 55, 50);
    ctx.fillStyle = "rgb(200,0,200)";
    ctx.fillRect(100, 10, 55, 50);
    ctx.fillStyle = "rgb(255,135,0)";
    ctx.fillRect(195, 10, 55, 50);
    ctx.fillStyle = "rgb(256,256,0)";
    ctx.fillRect(195, 100, 55, 50);
    ctx.beginPath();
    ctx.arc(250, 1000, 750, 0, Math.PI * 2, true);
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();
    img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 550);
      return ctx.drawImage(img, 500, 550);
    };
    return img.src = 'water.png';
  });
  
});
