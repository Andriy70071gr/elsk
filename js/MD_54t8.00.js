if ('undefined' == typeof MD_54t8) {
    var MD_54t8 = (function (cnf) {
        var wR = function () {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight || e.clientHeight || g.clientHeight;
            return {
                'w': x,
                'h': y
            };
        };
        var cTL = function (w, h) {
            var r = wR();
            //w=w.trim();
            //h=h.trim();
            var res = {
                'w': Number.isInteger(w) ? w : w = w.trim() && (w.endsWith('%') ? Number(w.split('%')[0]) * (r.w / 100) : Number(w.split('px')[0])),
                'h': Number.isInteger(h) ? h : h = h.trim() && (h.endsWith('%') ? Number(h.split('%')[0]) * (r.h / 100) : Number(h.split('px')[0]))
            };
            res.t = ((r.h / 2) - (res.h / 2)).toFixed(2) + "px";
            res.l = ((r.w / 2) - (res.w / 2)).toFixed(2) + "px";
            res.w = res.w.toFixed(2) + "px";
            res.h = res.h.toFixed(2) + "px";
            return res;
        };

        function reUpdt(_m) {

            var _mc = _m.querySelector("." + clsN + "-content");

            var r = cTL(cnf.w, cnf.h);

            _mc.style.top = r.t;
            _mc.style.left = r.l;
            _mc.style.width = r.w;
            _mc.style.height = r.h;

            var ldig = _m.querySelector(".a-dj-do-x." + clsN);

            if (ldig) {
                var r = cTL('45px', '45px');
                ldig.style.top = r.t;
                ldig.style.left = r.l;
                ldig.style.width = r.w;
                ldig.style.height = r.h;
                if('function'== ldig.scrollTo)
                    ldig.scrollTo(ldig.scrollWidth, ldig.scrollHeight);
                ldig.style.transform = "scale(8.2)";
            }
        };
        var id = 'ID_' + cnf.uName;
        var clsN = "c00_" + cnf.uName;

        function get(hdt, cb) {

            if ('undefined' == typeof hdt || !hdt)
                hdt = {
                    'm_h': '',
                    'm_b': '',
                    'm_f': '',
                    'd': {}
                };

            if (hdt.h)
                cnf.h = hdt.h;
            if (hdt.w)
                cnf.w = hdt.w;

            var m = document.querySelector('#' + id);
            if (m == null) {
                m = document.createElement('div');
                document.body.appendChild(m);

                m.outerHTML = atob(

                    'PGRpdiBpZD0ie2lkfSIgY2xhc3M9IntjbGFzc30iPg0KDQoNCjxkaXYgY2xhc3M9ImEtZGotZG8teCB7Y2xhc3N9Ij48ZGl2IGNsYXNzPSJhLW4iPg0KDQo8c3R5bGU+DQoNCi57Y2xhc3N9IC5uLUVuLXlhLCAubi1KYiB7DQogICAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCi57Y2xhc3N9IC5hLWRqLWRvLXggew0KICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50Ow0KCW92ZXJmbG93OiB2aXNpYmxlOw0KICAgIHBvc2l0aW9uOiBmaXhlZDsNCiAgICBwYWRkaW5nOiAwcHggMDsNCn0NCi57Y2xhc3N9IC5hLW4gew0KICAgIGhlaWdodDogNDRweDsNCiAgICBvdmVyZmxvdzogaGlkZGVuOw0KICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4sLntjbGFzc30gIC5uLUVuLXlhLCAubi1sayB7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KfQ0KLntjbGFzc30gLmEtT2Utbi5TYSB7DQogICAgYW5pbWF0aW9uOiAxNTY4bXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgY29udGFpbmVyLXJvdGF0ZTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4gew0KICAgIGhlaWdodDogMjhweDsNCiAgICBsZWZ0OiA1MCU7DQogICAgbWFyZ2luLWxlZnQ6IC0xNHB4Ow0KICAgIHRvcDogOHB4Ow0KICAgIHdpZHRoOiAyOHB4Ow0KfQ0KLntjbGFzc30gLmEtT2Utbi5TYSAubi1say5uLXBlIHsNCiAgICBhbmltYXRpb246IDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzIG5vcm1hbCBib3RoIGluZmluaXRlIHJ1bm5pbmcge2NsYXNzfS1maWxsLXVuZmlsbC1yb3RhdGUsIDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzIG5vcm1hbCBib3RoIGluZmluaXRlIHJ1bm5pbmcge2NsYXNzfS1ibHVlLWZhZGUtaW4tb3V0Ow0KfQ0KLntjbGFzc30gLm4tcGUgew0KICAgIGJvcmRlci1jb2xvcjogIzQ1NjQ5YTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tbGsubi1IayB7DQogICAgYW5pbWF0aW9uOiA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlLCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tcmVkLWZhZGUtaW4tb3V0Ow0KfQ0KLntjbGFzc30gLm4tSGsgew0KICAgIGJvcmRlci1jb2xvcjogI2JmMWYxNDsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tbGsubi1FbyB7DQogICAgYW5pbWF0aW9uOiA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlLCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30teWVsbG93LWZhZGUtaW4tb3V0Ow0KfQ0KLntjbGFzc30gLm4tRW8gew0KICAgIGJvcmRlci1jb2xvcjogI2Y4Y2M1OTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tbGsubi1IbiB7DQogICAgYW5pbWF0aW9uOiA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlLCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZ3JlZW4tZmFkZS1pbi1vdXQ7DQp9DQoue2NsYXNzfSAubi1IbiB7DQogICAgYm9yZGVyLWNvbG9yOiAjNGJlOTFjOw0KfQ0KLntjbGFzc30gLm4tRW4teWEsIC57Y2xhc3N9IC5uLUpiLU1pIHsNCiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7DQogICAgaGVpZ2h0OiAxMDAlOw0KICAgIG92ZXJmbG93OiBoaWRkZW47DQp9DQoue2NsYXNzfSAubi1sayB7DQogICAgaGVpZ2h0OiAxMDAlOw0KICAgIG9wYWNpdHk6IDA7DQogICAgd2lkdGg6IDEwMCU7DQp9DQoue2NsYXNzfSAuYS1PZS1uLlNhIC5uLUpiLU1pLm4tTGMgLm4tSmIgew0KICAgIGFuaW1hdGlvbjogMTMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMgbm9ybWFsIGJvdGggaW5maW5pdGUgcnVubmluZyB7Y2xhc3N9LWxlZnQtc3BpbjsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tSmItTWkubi12ZCAubi1KYiB7DQogICAgYW5pbWF0aW9uOiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tcmlnaHQtc3BpbjsNCn0NCi57Y2xhc3N9IC5uLUVuLXlhIHsNCiAgICBsZWZ0OiA0NSU7DQogICAgdG9wOiAwOw0KICAgIHdpZHRoOiAxMCU7DQp9DQoue2NsYXNzfSAubi1KYi1NaSB7DQogICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsNCiAgICB3aWR0aDogNTAlOw0KfQ0KLntjbGFzc30gLm4tSmItTWkubi1MYyAubi1KYiB7DQogICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Ow0KICAgIHRyYW5zZm9ybTogcm90YXRlKDEyOWRlZyk7DQp9DQoue2NsYXNzfSAubi1Fbi15YSAubi1KYiB7DQogICAgbGVmdDogLTQ1MCU7DQogICAgd2lkdGg6IDEwMDAlOw0KfQ0KLntjbGFzc30gLm4tSmItTWkubi12ZCAubi1KYiB7DQogICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7DQogICAgbGVmdDogLTEwMCU7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyOWRlZyk7DQp9DQoue2NsYXNzfSAubi1KYi1NaSAubi1KYiB7DQogICAgd2lkdGg6IDIwMCU7DQp9DQoue2NsYXNzfSAubi1OaSB7DQogICAgYm90dG9tOiAwOw0KICAgIGxlZnQ6IDA7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KICAgIHJpZ2h0OiAwOw0KICAgIHRvcDogMDsNCn0NCi57Y2xhc3N9IC5uLUpiIHsNCiAgICBhbmltYXRpb246IDBzIGVhc2UgMHMgbm9ybWFsIG5vbmUgMSBydW5uaW5nIG5vbmU7DQogICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsNCiAgICBib3JkZXItbGVmdC1jb2xvcjogaW5oZXJpdDsNCiAgICBib3JkZXItcmFkaXVzOiA1MCU7DQogICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0Ow0KICAgIGJvcmRlci1zdHlsZTogc29saWQ7DQogICAgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDsNCiAgICBib3JkZXItd2lkdGg6IDNweDsNCiAgICBoZWlnaHQ6IDEwMCU7DQp9DQpAa2V5ZnJhbWVzIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlIHsNCjEyLjUlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOw0KfQ0KMjUlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOw0KfQ0KMzcuNSUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7DQp9DQo1MCUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDU0MGRlZyk7DQp9DQo2Mi41JSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoNjc1ZGVnKTsNCn0NCjc1JSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKTsNCn0NCjg3LjUlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5NDVkZWcpOw0KfQ0KMTAwJSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7DQp9DQp9DQpAa2V5ZnJhbWVzIHtjbGFzc30tYmx1ZS1mYWRlLWluLW91dCB7DQowJSwgMTAwJSwgMjUlLCA5MCUgew0KICAgIG9wYWNpdHk6IDE7DQp9DQoyNiUsIDg5JSB7DQogICAgb3BhY2l0eTogMDsNCn0NCn0NCkBrZXlmcmFtZXMge2NsYXNzfS1yZWQtZmFkZS1pbi1vdXQgew0KMCUsIDE1JSwgNTElIHsNCiAgICBvcGFjaXR5OiAwOw0KfQ0KMjUlLCA1MCUgew0KICAgIG9wYWNpdHk6IDE7DQp9DQp9DQpAa2V5ZnJhbWVzIHtjbGFzc30teWVsbG93LWZhZGUtaW4tb3V0IHsNCjAlLCA0MCUsIDc2JSB7DQogICAgb3BhY2l0eTogMDsNCn0NCjUwJSwgNzUlIHsNCiAgICBvcGFjaXR5OiAxOw0KfQ0KfQ0KQGtleWZyYW1lcyB7Y2xhc3N9LWdyZWVuLWZhZGUtaW4tb3V0IHsNCjAlLCAxMDAlLCA2NSUgew0KICAgIG9wYWNpdHk6IDA7DQp9DQo3NSUsIDkwJSB7DQogICAgb3BhY2l0eTogMTsNCn0NCn0NCkBrZXlmcmFtZXMge2NsYXNzfS1sZWZ0LXNwaW4gew0KMCUsIDEwMCUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7DQp9DQo1MCUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTsNCn0NCn0NCkBrZXlmcmFtZXMge2NsYXNzfS1yaWdodC1zcGluIHsNCjAlLCAxMDAlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTsNCn0NCjUwJSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7DQp9DQp9DQoNCjwvc3R5bGU+DQoNCjxkaXYgY2xhc3M9ImEtT2UtbiBTYSI+PGRpdiBjbGFzcz0ibi1sayBuLXBlIj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tTGMiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1Fbi15YSI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tdmQiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1sayBuLUhrIj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tTGMiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1Fbi15YSI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tdmQiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1sayBuLUVvIj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tTGMiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1Fbi15YSI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tdmQiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1sayBuLUhuIj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tTGMiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ibi1Fbi15YSI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUpiLU1pIG4tdmQiPjxkaXYgY2xhc3M9Im4tSmIgbi1OaSI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+DQoNCiAgPCEtLSB7Y2xhc3N9IGNvbnRlbnQgLS0+DQoNCiAgPGRpdiBjbGFzcz0ie2NsYXNzfS1jb250ZW50Ij4NCiAgPHN0eWxlPg0KICAvKiBUaGUge2NsYXNzfSAoYmFja2dyb3VuZCkgKi8NCi57Y2xhc3N9IHsNCiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqLw0KICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqLw0KICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi8NCiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi8NCiAgICBsZWZ0OiAwOw0KICAgIHRvcDogMDsNCiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqLw0KICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi8NCiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi8NCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqLw0KICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqLw0KDQp9DQoNCi8qIHtjbGFzc30gQ29udGVudCAqLw0KLntjbGFzc30gLntjbGFzc30tY29udGVudCB7DQogICAgcG9zaXRpb246IGZpeGVkOw0KICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTsNCgl0cmFuc2Zvcm06c2NhbGUoLjAxKTsNCiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSAwLjJzOw0KDQp9DQoNCi8qIFRoZSBDbG9zZSBCdXR0b24gKi8NCi57Y2xhc3N9IC5jbG9zZSB7DQogICAgY29sb3I6IHdoaXRlOw0KICAgIGZsb2F0OiByaWdodDsNCiAgICBmb250LXNpemU6IDI4cHg7DQogICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQp9DQoNCi57Y2xhc3N9IC5jbG9zZTpob3ZlciwNCi57Y2xhc3N9IC5jbG9zZTpmb2N1cyB7DQogICAgY29sb3I6ICMwMDA7DQogICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOw0KICAgIGN1cnNvcjogcG9pbnRlcjsNCn0NCiA8L3N0eWxlPiANCiAgICA8ZGl2IGNsYXNzPSJ7Y2xhc3N9LWhlYWRlciI+DQogICAgIDxzcGFuIGNsYXNzPSJjbG9zZSI+JnRpbWVzOzwvc3Bhbj4NCiAgICAgPGRpdiBtNjc9IjIiPntoZWFkZXJ9PC9kaXY+DQogICAgPC9kaXY+DQogICAgPGRpdiBjbGFzcz0ie2NsYXNzfS1ib2R5Ij4NCiAgICAgICB7Ym9keX0NCiAgICA8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJ7Y2xhc3N9LWZvb3RlciI+DQoJDQoJPGRpdiBjbGFzcz0ibW9kYWwtZm9vdGVyIj48dGFibGU+PHRib2R5Pjx0cj48dGQgbTY3PSIyIj57Zm9vdGVyfTwvdGQ+PHRkPjxkaXYgY2xhc3M9Im9rX2J0biI+PHNwYW4+T0s8L3NwYW4+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L2Rpdj4NCg0KICAgIDwvZGl2Pg0KCQ0KCQ0KCQ0KICA8L2Rpdj4=').replace(/{id}/gi, id).replace(/{class}/gi, clsN).replace(/{header}/gi, hdt.m_h).replace(/{body}/gi, hdt.m_b).replace(/{footer}/gi, hdt.m_f);

                m = document.querySelector('#' + id);

                var mc = m.querySelector("." + clsN + "-content");

                m.querySelector(".close").onclick = function () {
                    mc.style['transform'] = "scale(.01)";
                    setTimeout(function () {
                        m.querySelector("." + clsN + "-content").style.display = "none";
                        m.style.display = "none";
                    }, 300);
                };

                window.addEventListener("click", function (ev) {
                    if (ev.target == m) {
                        mc.style['transform'] = "scale(.01)";
                        setTimeout(function () {
                            mc.style.display = "none";
                            if (!m.getAttribute("is_ae120"))
                                m.style.display = "none";
                        }, 300);
                    }
                }, true);
                window.addEventListener("resize", function (ev) {
                    reUpdt(m);
                }, true);

            }
            if (hdt.m_h)
                m.querySelector("." + clsN + '-header [m67="2"]').innerHTML = hdt.m_h;
            if (hdt.m_b)
                m.querySelector("." + clsN + "-body").innerHTML = hdt.m_b;
            if (hdt.m_f)
                m.querySelector("." + clsN + '-footer [m67="2"]').innerHTML = hdt.m_f;

            if ('function' == typeof cb)
                m.querySelector(".ok_btn").onclick = function () {
                    cb(hdt.d);
                    m.querySelector("." + clsN + "-content").style['transform'] = "scale(.01)";
                    setTimeout(function () {
                        m.querySelector("." + clsN + "-content").style.display = "none";
                        m.style.display = "none";
                    }, 300);

                };

            return m;
        };
        return {
            get m() {
                return get();
            },
            wr: wR,
            ctl: cTL,
            msk: function (on) {
                var _m = this.m;
                if (on) {
                    _m.style.display = "block";
                    _m.querySelector("." + clsN + "-content").style.display = "none";
                    _m.querySelector(".a-dj-do-x." + clsN).style.display = "none";
                    _m.setAttribute("is_ae120", 1);
                } else {
                    _m.removeAttribute("is_ae120");
                    _m.style.display = "none";
                }
            },
            L: function (on) {
                var _m = this.m;
                if (on) {
                    _m.setAttribute("is_ae120", 1);
                    var _mc = _m.querySelector("." + clsN + "-content");
                    if ((_mc.style.display || window.getComputedStyle(_mc).display).trim() == "block") {
                        _mc.style['transform'] = "scale(.01)";
                        _mc.style.display = "none";
                    }
                    if ((_m.style.display || window.getComputedStyle(_m).display).trim() == "none") {
                        _m.style.display = "block";
                    }
                    reUpdt(_m);
                    _m.querySelector(".a-dj-do-x." + clsN).style.display = "block";
                } else {
                    _m.removeAttribute("is_ae120");
                    if ((_m.style.display || window.getComputedStyle(_m).display).trim() == "block") {
                        _m.style.display = "none";
                    }
                    _m.querySelector(".a-dj-do-x." + clsN).style.display = "none";
                }
            },
            get: function (hdt, ok_cb) {
                var _m = get(hdt, ok_cb);
                return {
                    'show': function () {
                        _m.querySelector(".a-dj-do-x." + clsN).style.display = "none";
                        _m.style.display = "block";
                        var _mc = _m.querySelector("." + clsN + "-content");
                        _mc.style.display = "block";
                        reUpdt(_m);
                        setTimeout(function () {
                            _mc.style['transform'] = "scale(1)";
                        }, 60);
                    }
                };
            }
        };

    })('undefined' == typeof MD_54t8_Options && {
            'uName': 'MD_54t8',
            'w': "555",
            'h': "233"
        }
        || MD_54t8_Options);

}
document.addEventListener("DOMContentLoaded", function () {
    MD_54t8.L(true);
});
