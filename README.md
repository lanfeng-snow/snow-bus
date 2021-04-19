# 订阅发布模式
/**
 * Created by 蓝枫 on 2019/5/21.
 * @desc 订阅发布模式。
 */


### 存放 订阅消息
let _listeners = {};

### 定义对象
let Bus = {
  ### 添加 订阅
  watch(target, callback) {
    if (!_listeners[target]) {
      _listeners[target] = [];
    }
    _listeners[target].push(callback);
  },
  ### 发布信息
  trigger(target, ...args) {
    if (!_listeners[target]) return false;
    _listeners[target].forEach(listener => {
      listener.apply(this, args)
    })
  },
  ### 移除订阅
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
### 导出对象
module.exports = Bus;

# 使用
npm install snow-bus --save

vue项目中 main.js 引入
import Bus from 'snow-bus'
Vue.prototype.$bus = Bus;

### 组件中使用
### 订阅
this.$bus.watch("ADD_TODE", this.addTodo);
### 发布
this.$bus.trigger('ADD_TODE',item);

# 订阅发布模式
/**
 * Created by 蓝枫 on 2021/4/19.
 * @desc 订阅发布模式。
 */
listener.apply(this, args)改为listener(args)
vue项目中 main.js 引入
import Bus from 'snow-bus'
Vue.use(Bus)
