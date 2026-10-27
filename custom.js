(function () {
    function alignScreen(panel, frame, scale) {
        var doc = frame.contentDocument;
        if (!doc) return;

        var screen = Array.prototype.find.call(doc.querySelectorAll('#base *'), function (element) {
            var rect = element.getBoundingClientRect();
            return Math.abs(rect.width - 393) < 1 && Math.abs(rect.height - 852) < 1;
        });
        if (!screen) return;

        var rect = screen.getBoundingClientRect();
        var viewport = doc.documentElement;
        var scaleX = 540 / viewport.clientWidth;
        var scaleY = 879 / viewport.clientHeight;
        frame.style.left = ((panel.clientWidth - rect.width * scale) / 2 - rect.left * scaleX * scale) + 'px';
        frame.style.top = ((panel.clientHeight - rect.height * scale) / 2 - rect.top * scaleY * scale) + 'px';
    }

    function fitPhoneCanvas() {
        var panel = document.getElementById('mainPanel');
        var frame = document.getElementById('mainFrame');
        if (!panel || !frame) return;

        var scale = Math.min(window.innerWidth / 393, window.innerHeight / 852);
        var viewportWidth = scale < 1 ? 393 : 540;
        var viewportHeight = scale < 1 ? 852 : 879;
        var width = 393 * scale;
        var height = 852 * scale;

        panel.style.width = width + 'px';
        panel.style.height = height + 'px';
        frame.style.width = viewportWidth + 'px';
        frame.style.height = viewportHeight + 'px';
        frame.style.transform = 'scale(' + scale + ')';
        frame.style.left = '0px';
        frame.style.top = '0px';
        alignScreen(panel, frame, scale);
    }

    var frame = document.getElementById('mainFrame');
    if (frame) {
        frame.addEventListener('load', function () {
            fitPhoneCanvas();
            window.requestAnimationFrame(fitPhoneCanvas);
        });
    }
    window.addEventListener('resize', fitPhoneCanvas);
    window.addEventListener('load', fitPhoneCanvas);
    fitPhoneCanvas();
})();