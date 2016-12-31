//v-tab事件自定义指令
function isPc() {
    let uaInfo = navigator.userAgent;
    let agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let i = 0; i < agents.length; i++) {
        if (uaInfo.indexOf(agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
//判断是否是制定的手势操作类型
function isType(self, type) {
    if (self.disabled) return false;
    let evObj = self.evObj;
    let res = false
    switch (type) {
        case 'tap':
            res = self.time < 150 && Math.abs(evObj.distanceX) < 2 && Math.abs(evObj.distanceY) < 2;
            break
        case 'long':
            res = self.time > 500 && Math.abs(evObj.distanceX) < 2 && Math.abs(evObj.distanceY) < 2;
            break
        case 'up':
            res = Math.abs(evObj.distanceX) < 100 && evObj.distanceY > 0;
            break
        case 'down':
            res = Math.abs(evObj.distanceX) < 100 && evObj.distanceY < 0;
            break
        case 'left':
            res = evObj.distanceX > 0 && Math.abs(evObj.distanceY) < 100;
            break
        case 'right':
            res = evObj.distanceX < 0 && Math.abs(evObj.distanceY) < 100;
            break
    }
    return res
}

function touchstart(e, self) {
    let touches = e.touches[0];
    let evObj = self.evObj;
    evObj.pageX = touches.pageX;
    evObj.pageY = touches.pageY;
    evObj.clientX = touches.clientX;
    evObj.clientY = touches.clientY;
    self.time = +new Date();
}

function touchend(e, self, type) {
    let touches = e.changedTouches[0];
    let evObj = self.evObj;
    self.time = +new Date() - self.time;
    evObj.distanceX = evObj.pageX - touches.pageX;
    evObj.distanceY = evObj.pageY - touches.pageY;
    //事件类型 tap 点击, long 长点击, up 上滑, down 下滑, left 左滑, right 右滑
    if (!isType(self, type)) return;
    //setTimeout(function() {
    self.handler(e);
    //}, 100)
}

let bind = {
    bind: function(el, binding, vnode) {
        let value = binding.value;
        el.evObj = {};
        el.handler = function(e) { //This directive.handler
            if (!value && el.href && !binding.modifiers.prevent) return window.location = el.href;
            value.event = e;
            value.evObj = el.evObj;
            value.methods.call(this, value);
        };
        if (isPc()) {
            el.addEventListener('click', function(e) {
                if (!value && el.href && !binding.modifiers.prevent) return window.location = el.href;
                value.event = e;
                value.methods.call(this, value);
            }, false);
        } else {
            el.addEventListener('touchstart', function(e) {
                if (binding.modifiers.stop)
                    e.stopPropagation();
                if (binding.modifiers.prevent)
                    e.preventDefault();
                touchstart(e, el);
            }, false);
            el.addEventListener('touchend', function(e) {
                Object.defineProperties(e, { // 重写currentTarget对象 与jq相同
                    "currentTarget": {
                        value: el,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    },
                });
                e.preventDefault();
                return touchend(e, el, binding.name);
            }, false);
        }
    }
}

export default {
    tap: bind,
    long: bind,
    left: bind,
    right: bind,
    up: bind,
    down: bind
}