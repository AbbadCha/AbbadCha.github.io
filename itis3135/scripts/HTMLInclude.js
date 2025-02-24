/*! HTMLInclude v1.1.1 | MIT License | github.com/paul-browne/HTMLInclude */
!function(w, d) {
    if (!w.HTMLInclude) {
        w.HTMLInclude = function() {
            function isInViewport(element, offset) {
                return element.getBoundingClientRect().top <= (+offset + w.innerHeight);
            }
            function ajax(url, elements) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        elements.forEach(function(element) {
                            var dataReplace = element.getAttribute("data-replace");
                            var z = xhr.responseText;
                            if (dataReplace) {
                                dataReplace.split(",").forEach(function(el) {
                                    var o = el.trim().split(":");
                                    z = z.replace(new RegExp(o[0], "g"), o[1]);
                                });
                            }
                            element.outerHTML = z;
                            var scripts = new DOMParser().parseFromString(z, 'text/html').querySelectorAll("SCRIPT");
                            scripts.forEach(function(script) {
                                var s = d.createElement("SCRIPT");
                                s.innerHTML = script.innerHTML;
                                d.head.appendChild(s);
                                d.head.removeChild(s);
                            });
                        });
                    }
                };
                xhr.open("GET", url, true);
                xhr.send();
            }
            function lazyLoad(element, offset) {
                w.addEventListener("scroll", function scrollFunc() {
                    if (isInViewport(element, offset)) {
                        w.removeEventListener("scroll", scrollFunc);
                        ajax(element.getAttribute("data-include"), [element]);
                    }
                })
            }
            var store = {};
            var elements = d.querySelectorAll("[data-include]");
            elements.forEach(function(element) {
                var url = element.getAttribute("data-include");
                var lazy = element.getAttribute("data-lazy");
                var offset = element.getAttribute("data-offset") || 0;
                if (lazy) {
                    if (isInViewport(element, offset)) {
                        ajax(url, [element]);
                    } else {
                        lazyLoad(element, offset);
                    }
                } else {
                    if (store[url]) {
                        store[url].push(element);
                    } else {
                        store[url] = [element];
                    }
                }
            });
            for (var key in store) {
                ajax(key, store[key]);
            }
        }
    }
    w.HTMLInclude();
}(window, document);
