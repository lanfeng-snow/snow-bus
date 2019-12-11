/**
 * Created by 蓝枫 on 2019/5/21.
 * @desc 订阅发布模式。
 */

let _listeners = {};

let Bus = {
  watch(target, callback) {
    if (!_listeners[target]) {
      _listeners[target] = [];
    }
    _listeners[target].push(callback);
  },
  trigger(target, ...args) {
    if (!_listeners[target]) return false;
    _listeners[target].forEach(listener => {
      listener.apply(this, args)
    })
  },
  unwatch(target, callback) {
    if (!_listeners[target]) return false;
    if (!callback) {
      _listeners[target] = [];
    } else {
      _listeners[target].forEach((listener, index) => {
        if (listener == callback) _listeners[target].splice(index, 1);
      })
    }
  }
}

module.exports = Bus;
