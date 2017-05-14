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
            /*
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
            }   */
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

                        'PGRpdiBpZD0ie2lkfSIgY2xhc3M9IntjbGFzc30iPg0KDQoNCjxkaXYgY2xhc3M9ImEtZGotZG8teCB7Y2xhc3N9Ij48ZGl2IGNsYXNzPSJhLW4iPg0KDQo8c3R5bGU+DQoNCi57Y2xhc3N9IC5uLUVuLXlhLCAubi1KYiB7DQogICAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCi57Y2xhc3N9IC5hLWRqLWRvLXggew0KICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50Ow0KCW92ZXJmbG93OiB2aXNpYmxlOw0KICAgIHBvc2l0aW9uOiBmaXhlZDsNCiAgICBwYWRkaW5nOiAwcHggMDsNCn0NCi57Y2xhc3N9IC5hLW4gew0KICAgICAgaGVpZ2h0OiAxMDAlOw0KICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsNCiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4sLntjbGFzc30gIC5uLUVuLXlhLCAubi1sayB7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KfQ0KLntjbGFzc30gLmEtT2Utbi5TYSB7DQogICAgYW5pbWF0aW9uOiAxNTY4bXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgY29udGFpbmVyLXJvdGF0ZTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4gew0KICAgIGhlaWdodDogMjRlbTsNCiAgICBsZWZ0OiAzNC45JTsNCiAgICB0b3A6IDI4JTsNCiAgICB3aWR0aDogMjMuOWVtOw0KfQ0KLntjbGFzc30gLmEtT2Utbi5TYSAubi1say5uLXBlIHsNCiAgICBhbmltYXRpb246IDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzIG5vcm1hbCBib3RoIGluZmluaXRlIHJ1bm5pbmcge2NsYXNzfS1maWxsLXVuZmlsbC1yb3RhdGUsIDUzMzJtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzIG5vcm1hbCBib3RoIGluZmluaXRlIHJ1bm5pbmcge2NsYXNzfS1ibHVlLWZhZGUtaW4tb3V0Ow0KfQ0KLntjbGFzc30gLm4tcGUgew0KICAgIGJvcmRlci1jb2xvcjogIzQ1NjQ5YTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tbGsubi1IayB7DQogICAgYW5pbWF0aW9uOiA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlLCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tcmVkLWZhZGUtaW4tb3V0Ow0KfQ0KLntjbGFzc30gLm4tSGsgew0KICAgIGJvcmRlci1jb2xvcjogI2JmMWYxNDsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tbGsubi1FbyB7DQogICAgYW5pbWF0aW9uOiA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlLCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30teWVsbG93LWZhZGUtaW4tb3V0Ow0KfQ0KLntjbGFzc30gLm4tRW8gew0KICAgIGJvcmRlci1jb2xvcjogI2Y4Y2M1OTsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tbGsubi1IbiB7DQogICAgYW5pbWF0aW9uOiA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZmlsbC11bmZpbGwtcm90YXRlLCA1MzMybXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tZ3JlZW4tZmFkZS1pbi1vdXQ7DQp9DQoue2NsYXNzfSAubi1IbiB7DQogICAgYm9yZGVyLWNvbG9yOiAjNGJlOTFjOw0KfQ0KLntjbGFzc30gLm4tRW4teWEsIC57Y2xhc3N9IC5uLUpiLU1pIHsNCiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7DQogICAgaGVpZ2h0OiAxMDAlOw0KICAgIG92ZXJmbG93OiBoaWRkZW47DQp9DQoue2NsYXNzfSAubi1sayB7DQogICAgaGVpZ2h0OiAxMDAlOw0KICAgIG9wYWNpdHk6IDA7DQogICAgd2lkdGg6IDEwMCU7DQp9DQoue2NsYXNzfSAuYS1PZS1uLlNhIC5uLUpiLU1pLm4tTGMgLm4tSmIgew0KICAgIGFuaW1hdGlvbjogMTMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMgbm9ybWFsIGJvdGggaW5maW5pdGUgcnVubmluZyB7Y2xhc3N9LWxlZnQtc3BpbjsNCn0NCi57Y2xhc3N9IC5hLU9lLW4uU2EgLm4tSmItTWkubi12ZCAubi1KYiB7DQogICAgYW5pbWF0aW9uOiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyBub3JtYWwgYm90aCBpbmZpbml0ZSBydW5uaW5nIHtjbGFzc30tcmlnaHQtc3BpbjsNCn0NCi57Y2xhc3N9IC5uLUVuLXlhIHsNCiAgICBsZWZ0OiA0NSU7DQogICAgdG9wOiAwOw0KICAgIHdpZHRoOiAxMCU7DQp9DQoue2NsYXNzfSAubi1KYi1NaSB7DQogICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsNCiAgICB3aWR0aDogNTAlOw0KfQ0KLntjbGFzc30gLm4tSmItTWkubi1MYyAubi1KYiB7DQogICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Ow0KICAgIHRyYW5zZm9ybTogcm90YXRlKDEyOWRlZyk7DQp9DQoue2NsYXNzfSAubi1Fbi15YSAubi1KYiB7DQogICAgbGVmdDogLTQ1MCU7DQogICAgd2lkdGg6IDEwMDAlOw0KfQ0KLntjbGFzc30gLm4tSmItTWkubi12ZCAubi1KYiB7DQogICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7DQogICAgbGVmdDogLTEwMCU7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyOWRlZyk7DQp9DQoue2NsYXNzfSAubi1KYi1NaSAubi1KYiB7DQogICAgd2lkdGg6IDIwMCU7DQp9DQoue2NsYXNzfSAubi1OaSB7DQogICAgYm90dG9tOiAwOw0KICAgIGxlZnQ6IDA7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KICAgIHJpZ2h0OiAwOw0KICAgIHRvcDogMDsNCn0NCi57Y2xhc3N9IC5uLUpiIHsNCiAgICBhbmltYXRpb246IDBzIGVhc2UgMHMgbm9ybWFsIG5vbmUgMSBydW5uaW5nIG5vbmU7DQogICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsNCiAgICBib3JkZXItbGVmdC1jb2xvcjogaW5oZXJpdDsNCiAgICBib3JkZXItcmFkaXVzOiA1MCU7DQogICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0Ow0KICAgIGJvcmRlci1zdHlsZTogc29saWQ7DQogICAgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDsNCiAgICBib3JkZXItd2lkdGg6IDIuOGVtOw0KICAgIGhlaWdodDogMTAwJTsNCn0NCkBrZXlmcmFtZXMge2NsYXNzfS1maWxsLXVuZmlsbC1yb3RhdGUgew0KMTIuNSUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7DQp9DQoyNSUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7DQp9DQozNy41JSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTsNCn0NCjUwJSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTsNCn0NCjYyLjUlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2NzVkZWcpOw0KfQ0KNzUlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4MTBkZWcpOw0KfQ0KODcuNSUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKDk0NWRlZyk7DQp9DQoxMDAlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKTsNCn0NCn0NCkBrZXlmcmFtZXMge2NsYXNzfS1ibHVlLWZhZGUtaW4tb3V0IHsNCjAlLCAxMDAlLCAyNSUsIDkwJSB7DQogICAgb3BhY2l0eTogMTsNCn0NCjI2JSwgODklIHsNCiAgICBvcGFjaXR5OiAwOw0KfQ0KfQ0KQGtleWZyYW1lcyB7Y2xhc3N9LXJlZC1mYWRlLWluLW91dCB7DQowJSwgMTUlLCA1MSUgew0KICAgIG9wYWNpdHk6IDA7DQp9DQoyNSUsIDUwJSB7DQogICAgb3BhY2l0eTogMTsNCn0NCn0NCkBrZXlmcmFtZXMge2NsYXNzfS15ZWxsb3ctZmFkZS1pbi1vdXQgew0KMCUsIDQwJSwgNzYlIHsNCiAgICBvcGFjaXR5OiAwOw0KfQ0KNTAlLCA3NSUgew0KICAgIG9wYWNpdHk6IDE7DQp9DQp9DQpAa2V5ZnJhbWVzIHtjbGFzc30tZ3JlZW4tZmFkZS1pbi1vdXQgew0KMCUsIDEwMCUsIDY1JSB7DQogICAgb3BhY2l0eTogMDsNCn0NCjc1JSwgOTAlIHsNCiAgICBvcGFjaXR5OiAxOw0KfQ0KfQ0KQGtleWZyYW1lcyB7Y2xhc3N9LWxlZnQtc3BpbiB7DQowJSwgMTAwJSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTsNCn0NCjUwJSB7DQogICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpOw0KfQ0KfQ0KQGtleWZyYW1lcyB7Y2xhc3N9LXJpZ2h0LXNwaW4gew0KMCUsIDEwMCUgew0KICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpOw0KfQ0KNTAlIHsNCiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTsNCn0NCn0NCg0KPC9zdHlsZT4NCg0KPGRpdiBjbGFzcz0iYS1PZS1uIFNhIj48ZGl2IGNsYXNzPSJuLWxrIG4tcGUiPjxkaXYgY2xhc3M9Im4tSmItTWkgbi1MYyI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUVuLXlhIj48ZGl2IGNsYXNzPSJuLUpiIG4tTmkiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9Im4tSmItTWkgbi12ZCI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLWxrIG4tSGsiPjxkaXYgY2xhc3M9Im4tSmItTWkgbi1MYyI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUVuLXlhIj48ZGl2IGNsYXNzPSJuLUpiIG4tTmkiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9Im4tSmItTWkgbi12ZCI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLWxrIG4tRW8iPjxkaXYgY2xhc3M9Im4tSmItTWkgbi1MYyI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUVuLXlhIj48ZGl2IGNsYXNzPSJuLUpiIG4tTmkiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9Im4tSmItTWkgbi12ZCI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLWxrIG4tSG4iPjxkaXYgY2xhc3M9Im4tSmItTWkgbi1MYyI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJuLUVuLXlhIj48ZGl2IGNsYXNzPSJuLUpiIG4tTmkiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9Im4tSmItTWkgbi12ZCI+PGRpdiBjbGFzcz0ibi1KYiBuLU5pIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4NCg0KICA8IS0tIHtjbGFzc30gY29udGVudCAtLT4NCg0KICA8ZGl2IGNsYXNzPSJ7Y2xhc3N9LWNvbnRlbnQiPg0KICA8c3R5bGU+DQogIC8qIFRoZSB7Y2xhc3N9IChiYWNrZ3JvdW5kKSAqLw0KLntjbGFzc30gew0KICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovDQogICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovDQogICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqLw0KICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqLw0KICAgIGxlZnQ6IDA7DQogICAgdG9wOiAwOw0KICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovDQogICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqLw0KICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqLw0KICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovDQogICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovDQoNCn0NCg0KLyoge2NsYXNzfSBDb250ZW50ICovDQoue2NsYXNzfSAue2NsYXNzfS1jb250ZW50IHsNCiAgICBwb3NpdGlvbjogZml4ZWQ7DQogICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpOw0KCXRyYW5zZm9ybTpzY2FsZSguMDEpOw0KICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDAuMnM7DQoNCn0NCg0KLyogVGhlIENsb3NlIEJ1dHRvbiAqLw0KLntjbGFzc30gLmNsb3NlIHsNCiAgICBjb2xvcjogd2hpdGU7DQogICAgZmxvYXQ6IHJpZ2h0Ow0KICAgIGZvbnQtc2l6ZTogMjhweDsNCiAgICBmb250LXdlaWdodDogYm9sZDsNCn0NCg0KLntjbGFzc30gLmNsb3NlOmhvdmVyLA0KLntjbGFzc30gLmNsb3NlOmZvY3VzIHsNCiAgICBjb2xvcjogIzAwMDsNCiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7DQogICAgY3Vyc29yOiBwb2ludGVyOw0KfQ0KIDwvc3R5bGU+IA0KICAgIDxkaXYgY2xhc3M9IntjbGFzc30taGVhZGVyIj4NCiAgICAgPHNwYW4gY2xhc3M9ImNsb3NlIj4mdGltZXM7PC9zcGFuPg0KICAgICA8ZGl2IG02Nz0iMiI+e2hlYWRlcn08L2Rpdj4NCiAgICA8L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJ7Y2xhc3N9LWJvZHkiPg0KICAgICAgIHtib2R5fQ0KICAgIDwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9IntjbGFzc30tZm9vdGVyIj4NCgkNCgk8ZGl2IGNsYXNzPSJtb2RhbC1mb290ZXIiPjx0YWJsZT48dGJvZHk+PHRyPjx0ZCBtNjc9IjIiPntmb290ZXJ9PC90ZD48dGQ+PGRpdiBjbGFzcz0ib2tfYnRuIj48c3Bhbj5PSzwvc3Bhbj48L2Rpdj48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvZGl2Pg0KDQogICAgPC9kaXY+DQoJDQoJDQoJDQogIDwvZGl2Pg==').replace(/{id}/gi, id).replace(/{class}/gi, clsN).replace(/{header}/gi, hdt.m_h).replace(/{body}/gi, hdt.m_b).replace(/{footer}/gi, hdt.m_f);

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
MD_54t8.L_on = function () {
    MD_54t8.L(1);
}
if ("undefined" != typeof Document) {
    MD_54t8.L(1);
    setTimeout(function () {
        MD_54t8.L(0);
    }, 900);
}
