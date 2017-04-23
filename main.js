drag('div1');

function drag(id) {
    var obj = document.getElementById(id);

    obj.onmousedown = function(ev) {
        var disX = ev.clientX - this.offsetLeft,
            disY = ev.clientY - this.offsetTop;

        document.onmousemove = function(ev) {
            var l = ev.clientX - disX,
                t = ev.clientY - disY;

            obj.style.left = l + 'px';
            obj.style.top = t + 'px';
        };

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };
    };
}
