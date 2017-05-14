if ('undefined' == typeof(PhpFiddleApi)) {

    var PhpFiddleApi = (function () {

        var ab = function (b) {
            return decodeURIComponent(escape(atob(b)));
        };
        var p_wrks = [];
        var m_fNames = [];

        function w_exec(fName, d, cb) {

            var uName = fName + '_u_work_cb_xxxxx_yy'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0,
                        v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });

            m_fNames[uName] = cb;

            (p_wrks[d] || (p_wrks[d] = get_Wrk(), p_wrks[d])).wrk.postMessage(JSON.stringify({
                'uCbName': uName,
                'fn': fName,
                'd': d,
                'protocol':(location.protocol=="https:"?"https:":"http:")
            }));
        };

        var get_Wrk = function () {

            var blob = new Blob([ab(
                'DQp2YXIgYmFzZVVybCA9ICcvL3BocGZpZGRsZS5vcmcvYXBpLyc7DQp2YXIgcGhwVXJsID0gJ3J1bi9jb2RlL2pzb24nOw0KdmFyIHJhd1VybCA9ICdyYXcvdXJsL2pzb24nOw0KdmFyIG1fZ2V0SHRtbCA9IGZ1bmN0aW9uIChkX3VybCwgY2IscHJvdG9jb2wpIHsNCglpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgY2IpIHsNCgkJdmFyIHJxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7DQoJCXJxLm9wZW4oJ1BPU1QnLCBwcm90b2NvbCtiYXNlVXJsICsgcmF3VXJsLCB0cnVlKTsNCgkJdHJ5IHsNCgkJCXJxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7DQoJCQkJaWYgKHJxLnJlYWR5U3RhdGUgPT0gNCkgew0KCQkJCQlpZiAocnEuc3RhdHVzID09IDIwMCkgew0KCQkJCQkJdmFyIHJlcyA9IEpTT04ucGFyc2UocnEucmVzcG9uc2VUZXh0KTsNCgkJCQkJCWlmICghcmVzLmVycm9yICYmIHJlcy5jb2RlKQ0KCQkJCQkJCWNiKHJlcy5jb2RlKTsNCgkJCQkJCWVsc2UNCgkJCQkJCQljb25zb2xlLmxvZygnRVJST1IgJyArIHJxLnN0YXR1cyArICcgUGhwRmlkZGxlQXBpIHBvc3QnLCByZXMuZXJyb3IpOw0KCQkJCQl9IGVsc2UNCgkJCQkJCWNvbnNvbGUubG9nKCdFUlJPUiAnICsgcnEuc3RhdHVzICsgJyBQaHBGaWRkbGVBcGkgcG9zdCcsIHJxLnJlc3BvbnNlVGV4dCk7DQoJCQkJfQ0KCQkJfQ0KCQkJcnEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpLA0KCQkJcnEuc2VuZCgndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZF91cmwpKTsNCgkJfSBjYXRjaCAoZSkgew0KCQkJY29uc29sZS5sb2coJ0VSUk9SIFBocEZpZGRsZUFwaSBwb3N0JywgZSk7DQoJCX0NCgl9DQp9Ow0KdmFyIG1fZXhlY1BocCA9IGZ1bmN0aW9uIChwaHAsIGNiLHByb3RvY29sKSB7DQoJaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNiKSB7DQoJCXZhciBycSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOw0KCQlycS5vcGVuKCdQT1NUJywgcHJvdG9jb2wrYmFzZVVybCArIHBocFVybCwgdHJ1ZSk7DQoJCXRyeSB7DQoJCQlycS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZSkgew0KCQkJCWlmIChycS5yZWFkeVN0YXRlID09IDQpIHsNCgkJCQkJdmFyIHJlcyA9IEpTT04ucGFyc2UocnEucmVzcG9uc2VUZXh0KTsNCgkJCQkJaWYgKCFyZXMuZXJyb3IgJiYgcmVzLnJlc3VsdCkNCgkJCQkJCWNiKHJlcy5yZXN1bHQpOw0KCQkJCQllbHNlDQoJCQkJCQljb25zb2xlLmxvZygnRVJST1IgJyArIHJxLnN0YXR1cyArICcgUGhwRmlkZGxlQXBpIHBvc3QnLCByZXMuZXJyb3IpOw0KCQkJCX0NCgkJCX0NCgkJCXJxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnKSwNCgkJCXJxLnNlbmQoJ2NvZGU9JTNDJTNGcGhwJTIwJyArIGVuY29kZVVSSUNvbXBvbmVudChwaHApICsgJyUyMCUzRiUzRScpOw0KCQl9IGNhdGNoIChlKSB7DQoJCQljb25zb2xlLmxvZygnRVJST1IgUGhwRmlkZGxlQXBpIGV4ZWNQaHAnLCBlKTsNCgkJfQ0KCX0NCn07DQp2YXIgcmVzID0gZnVuY3Rpb24gKHVDYk5hbWUsIGZuYW0sIGQpIHsNCglzZWxmLnBvc3RNZXNzYWdlKHsNCgkJJ3VDYk5hbWUnOiB1Q2JOYW1lLA0KCQknZm4nOiBmbmFtLA0KCQknZCc6IGQNCgl9KQ0KfTsNCnNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCgl0cnkgew0KCQl2YXIgaiA9IEpTT04ucGFyc2UoZS5kYXRhKTsNCgkJaWYgKGogJiYgai5kKSB7DQoJCQlpZiAoai5mbiA9PSAnZ2V0SHRtbF82NTQ3JykNCgkJCQltX2dldEh0bWwoai5kLCBmdW5jdGlvbiAoZCkgew0KCQkJCQlyZXMoai51Q2JOYW1lLCBqLmZuYW0sIGQpOw0KCQkJCX0sai5wcm90b2NvbCk7DQoJCQlpZiAoai5mbiA9PSAnZXhlY1BocF82NTQ3JykNCgkJCQltX2V4ZWNQaHAoai5kLCBmdW5jdGlvbiAoZCkgew0KCQkJCQlyZXMoai51Q2JOYW1lLCBqLmZuYW0sIGQpOw0KCQkJCX0sai5wcm90b2NvbCk7DQoJCX0NCgl9IGNhdGNoIChlcnIpIHsNCgkJY29uc29sZS5sb2coew0KCQkJJ2Vycm9yIHNlbGYub25tZXNzYWdlJzogZXJyLA0KCQkJJ3NlbGYnOiBzZWxmLA0KCQkJJ2QnOiBlLmRhdGENCgkJfSk7DQoJfQ0KfTsNCg==')]);
            var wrk = new Worker(window.URL.createObjectURL(blob));

            wrk.onerror = function (e, c0, d0) {
                console.log(e, c0, d0);
            };
            wrk.onmessage = function (e) {
                if (e.data && e.data.uCbName && m_fNames[e.data.uCbName]) {
                    m_fNames[e.data.uCbName](e.data.d);
                    if (m_fNames[e.data.uCbName])
                        delete m_fNames[e.data.uCbName];
                }
            };
            return {
                'wrk': wrk
            };
        };

        return {
            getHtml: function (url, cb) {
                w_exec('getHtml_6547', url, cb);
            },
            execPhp: function (php, cb) {
                w_exec('execPhp_6547', php, cb);
            }
        }
    })
    ();
}