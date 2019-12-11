### 订阅发布模式
/**
 * Created by 蓝枫 on 2019/5/21.
 * @desc 订阅发布模式。
 */


# 存放 订阅消息
let _listeners = {};

let Bus = {
  # 添加 订阅
  watch(target, callback) {
    if (!_listeners[target]) {
      _listeners[target] = [];
    }
    _listeners[target].push(callback);
  },
  # 发布信息
  trigger(target, ...args) {
    if (!_listeners[target]) return false;
    _listeners[target].forEach(listener => {
      listener.apply(this, args)
    })
  },
  # 移除订阅
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