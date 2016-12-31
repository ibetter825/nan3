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

function isTap(self) {
    if (self.disabled) return false;
    let tapObj = self.tapObj;
    return self.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
}

function touchstart(e, self) {
    let touches = e.touches[0];
    let tapObj = self.tapObj;
    tapObj.pageX = touches.pageX;
    tapObj.pageY = touches.pageY;
    tapObj.clientX = touches.clientX;
    tapObj.clientY = touches.clientY;
    self.time = +new Date();
}

function touchend(e, self) {
    let touches = e.changedTouches[0];
    let tapObj = self.tapObj;
    self.time = +new Date() - self.time;
    tapObj.distanceX = tapObj.pageX - touches.pageX;
    tapObj.distanceY = tapObj.pageY - touches.pageY;

    if (!isTap(self)) return;
    setTimeout(function() {
        self.handler(e);
    }, 150)
}


export default {
    bind: function(el, binding, vnode) {
        let value = binding.value;
        el.tapObj = {};
        el.handler = function(e) { //This directive.handler
            if (!value && el.href && !binding.modifiers.prevent) return window.location = el.href;
            value.event = e;
            value.tapObj = el.tapObj;
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
                return touchend(e, el);
            }, false);
        }
    }
}