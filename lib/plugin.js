/* eslint-disable */
if (typeof window !== 'undefined') {
    (function(h, o, t, j, a, r) {
        h.hj = h.hj || function() {
            (h.hj.q = h.hj.q || []).push(arguments)
        }

        h._hjSettings = {
            hjid: '<%= options.id %>',
            hjsv: '<%= options.sv %>'
        };

        a = o.getElementsByTagName('head')[0]
        r = o.createElement('script')

        if ('<%= options.defer %>' == true) {
            r.defer = 1
        } else {
            r.async = 1
        }

        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
}
