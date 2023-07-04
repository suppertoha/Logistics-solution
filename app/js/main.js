/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      595: () => {
        document.querySelectorAll(".accordion-start-js").forEach((e) => {
          e.addEventListener("click", () => {
            document.querySelectorAll(".accordion-start-js").forEach((t) => {
              t !== e &&
                (t.classList.remove("open"),
                t.nextElementSibling.classList.remove("open"));
            }),
              e.classList.toggle("open");
            let t = e.nextElementSibling;
            t.classList.contains("open")
              ? document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => {
                    t &&
                      t.classList.contains("open") &&
                      t.classList.remove("open");
                  })
              : document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => {
                    t &&
                      !t.classList.contains("open") &&
                      t.classList.add("open");
                  });
          });
        }),
          document
            .querySelectorAll(".accordion-start-js--next")
            .forEach((e) => {
              e.addEventListener("click", () => {
                document
                  .querySelectorAll(".accordion-start-js--next")
                  .forEach((t) => {
                    t !== e &&
                      (t.classList.remove("open"),
                      t.nextElementSibling.classList.remove("open"),
                      (t.nextElementSibling.style.maxHeight = null));
                  }),
                  e.classList.toggle("open");
                let t = e.nextElementSibling;
                t.classList.contains("open")
                  ? document
                      .querySelectorAll(".body-catalog__body")
                      .forEach((e) => {
                        e && (e.style.maxHeight = null),
                          t &&
                            t.classList.contains("open") &&
                            t.classList.remove("open");
                      })
                  : document
                      .querySelectorAll(".body-catalog__body")
                      .forEach((e) => {
                        e && (e.style.maxHeight = null),
                          t &&
                            !t.classList.contains("open") &&
                            t.classList.add("open");
                      });
              });
            });
        const e = document.querySelector(".catalog-search__button"),
          t = document.querySelector("body"),
          n = document.querySelector(".catalog-search__body");
        e && n
          ? (e.addEventListener("click", () => {
              t.classList.add("scroll-hidden");
            }),
            document.addEventListener("click", (r) => {
              e.contains(r.target) ||
                n.contains(r.target) ||
                (t.classList.remove("scroll-hidden"),
                document
                  .querySelectorAll(".catalog-search__body.open")
                  .forEach((e) => {
                    e.classList.remove("open");
                  }));
            }))
          : console.error(
              "Ошибка: Не удалось найти один или несколько элементов."
            );
      },
      190: () => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        const e = document.querySelectorAll(".count");
        function t() {
          function t(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          }
          e.forEach((e) => {
            const n = () => {
              const r = parseInt(e.getAttribute("data-target")),
                i = parseInt(e.innerText.replace(/\s/g, "")),
                s = Math.ceil((r - i) / 30);
              i < r
                ? ((e.innerText = t(i + s)), setTimeout(n, 1))
                : (e.innerText = t(r));
            };
            n();
          });
        }
        const n = document.querySelector(".main-section__bg");
        gsap
          .timeline()
          .fromTo(
            ".header",
            { opacity: 0, y: -50 },
            { opacity: 1, duration: 0.5, y: 0 }
          )
          .fromTo(
            ".main-section__title",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.5 }
          )
          .fromTo(
            n,
            { opacity: 0, x: -200 },
            { opacity: 1, x: 0, duration: 0.7 }
          )
          .fromTo(
            ".main-section__description",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.35 },
            "=-1"
          )
          .fromTo(
            ".animation-search__icon-start",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.15 },
            "=-0.8"
          )
          .fromTo(
            ".animation-search__hidden",
            { opacity: 0, width: "0%" },
            { opacity: 1, width: "100%", duration: 0.7 },
            "=-0.8"
          )
          .fromTo(
            ".animation-search__icon-end",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.35 },
            "=-0.3"
          ),
          gsap.timeline({
            scrollTrigger: {
              trigger: ".block-wrapper",
              start: "top top+=600",
              end: "5%",
              once: !0,
              onEnter: () => {
                setTimeout(t, 100);
              },
            },
          });
        const r = gsap.timeline(),
          i = document.querySelectorAll(".counter__item");
        ScrollTrigger.create({
          trigger: ".about",
          start: "top-=50% top+=400",
          end: "100%",
          once: !0,
          scrub: !0,
          onEnter: () => {
            r.fromTo(i, { opacity: 0 }, { opacity: 1, duration: 0.1 })
              .fromTo(
                ".about__bg",
                { x: "-100%", opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3 }
              )
              .fromTo(
                ".about__name, .about__text",
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 }
              );
          },
        });
        const s = document.querySelectorAll(".header-accordion__item"),
          o = gsap.timeline({
            scrollTrigger: {
              trigger: ".services",
              start: "top-=140% top+=400",
              end: "80%",
              once: !0,
              onEnter: () => {
                t();
                const e = gsap.timeline();
                o.to(".services__title", {
                  x: 0,
                  opacity: 1,
                  duration: 0.2,
                  ease: "sine.out",
                }),
                  e.to(
                    s,
                    { y: "0", opacity: 1, duration: 0.3, ease: "sine.out" },
                    "=-4"
                  ),
                  gsap.timeline(),
                  gsap.timeline().add(o).add(e);
              },
            },
          }),
          a = document.querySelectorAll(".block-news__animation--top"),
          l = gsap.timeline({
            scrollTrigger: {
              trigger: ".block-news--top",
              start: "top-=130% top+=400",
              end: "300%",
              once: !0,
              onEnter: () => {
                l.to(
                  ".block-news__title--top",
                  { x: 0, opacity: 1, duration: 0.9, ease: "sine.out" },
                  "=-4"
                ).to(a, { x: 0, opacity: 1, duration: 0.6, ease: "sine.out" });
              },
            },
          }),
          c = document.querySelectorAll(".nav-map-animate"),
          u = gsap.timeline({
            scrollTrigger: {
              trigger: ".map",
              start: "top-=50% top+=400",
              end: "100%",
              once: !0,
              onEnter: () => {
                u.to(".map__animate", {
                  x: 0,
                  opacity: 1,
                  duration: 0.4,
                  ease: "sine.out",
                })
                  .to(
                    c,
                    { opacity: 1, y: "0", duration: 0.4, ease: "sine.out" },
                    "=-0.5"
                  )
                  .to(".main-map", {
                    opacity: 1,
                    duration: 0.4,
                    ease: "sine.out",
                  });
              },
            },
          }),
          d = gsap.timeline({
            scrollTrigger: {
              trigger: ".slider",
              start: "top-=100% top+=400",
              end: "100%",
              once: !0,
              onEnter: () => {
                d.to(".main-slider__title", {
                  x: 0,
                  opacity: 1,
                  duration: 0.3,
                  ease: "sine.out",
                });
              },
            },
          }),
          p = document.querySelectorAll(".block-news__animation--bottom"),
          f =
            (gsap.timeline({
              scrollTrigger: {
                trigger: ".block-news--bottom",
                start: "top-=140% top+=400",
                end: "100%",
                once: !0,
                onEnter: () => {
                  l.to(".block-news__title--bottom", {
                    x: 0,
                    duration: 0.4,
                    opacity: 1,
                    ease: "sine.out",
                  }).to(p, {
                    x: 0,
                    duration: 0.4,
                    opacity: 1,
                    ease: "sine.out",
                  });
                },
              },
            }),
            document.querySelectorAll(".work__animation"));
        gsap.timeline({
          scrollTrigger: {
            trigger: ".block-news--bottom",
            start: "top+=70% top+=400",
            end: "300%",
            once: !0,
            onEnter: () => {
              l.to(".work__title", {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "sine.out",
              }).to(f, { x: 0, opacity: 1, duration: 0.4, ease: "sine.out" });
            },
          },
        });
      },
      626: () => {
        const e = document.querySelector(".header").offsetHeight;
        document.querySelector(".main").style.paddingTop = `${e}px`;
      },
      319: () => {
        const e = document.querySelectorAll(".js-link");
        e.forEach((e) => {
          e.addEventListener("click", function (e) {
            e.preventDefault();
            const t = this.getAttribute("href"),
              n = document.querySelector(t);
            n &&
              (function (e) {
                const t = document.querySelector(".header").offsetHeight,
                  n = e.getBoundingClientRect().top + window.pageYOffset - t,
                  r = window.pageYOffset,
                  i = n - r;
                let s = null;
                window.requestAnimationFrame(function e(t) {
                  s || (s = t);
                  const n = t - s;
                  var o, a, l;
                  window.scrollTo(
                    0,
                    ((o = n),
                    (a = r),
                    (l = i),
                    (o /= 400) < 1
                      ? (l / 2) * o * o * o + a
                      : (l / 2) * ((o -= 2) * o * o + 2) + a)
                  ),
                    n < 800 && window.requestAnimationFrame(e);
                });
              })(n);
          });
        });
        const t = document.querySelectorAll(".section-js");
        window.addEventListener("scroll", () => {
          let n = null,
            r = window.innerHeight;
          var i;
          t.forEach((e) => {
            const t = e.getBoundingClientRect().top;
            t < r && t >= 0 && ((n = e.getAttribute("id")), (r = t));
          }),
            (i = n),
            e.forEach((e) => {
              e.getAttribute("href").substring(1) === i
                ? e.classList.add("active")
                : e.classList.remove("active");
            });
        });
      },
      797: () => {
        const e = document.querySelectorAll("[data-btn-index]"),
          t = document.querySelectorAll("[data-el-index]"),
          n = document.querySelector(".main-map");
        e.forEach((r) => {
          r.addEventListener("mouseover", () => {
            const i = r.getAttribute("data-btn-index"),
              s = document.querySelector(`[data-el-index="${i}"]`);
            e.forEach((e) => {
              e === r
                ? e.classList.add("active")
                : e.classList.remove("active");
            }),
              t.forEach((e) => {
                e === s
                  ? e.classList.add("active")
                  : e.classList.remove("active");
              }),
              n.classList.add("active");
          }),
            r.addEventListener("mouseout", () => {
              e.forEach((e) => {
                e.classList.remove("active");
              }),
                t.forEach((e) => {
                  e.classList.remove("active");
                }),
                n.classList.remove("active");
            });
        }),
          t.forEach((r) => {
            r.addEventListener("mouseover", () => {
              const i = r.getAttribute("data-el-index"),
                s = document.querySelector(`[data-btn-index="${i}"]`);
              e.forEach((e) => {
                e === s
                  ? e.classList.add("active")
                  : e.classList.remove("active");
              }),
                t.forEach((e) => {
                  e === r
                    ? e.classList.add("active")
                    : e.classList.remove("active");
                }),
                n.classList.add("active");
            }),
              r.addEventListener("mouseout", () => {
                e.forEach((e) => {
                  e.classList.remove("active");
                }),
                  t.forEach((e) => {
                    e.classList.remove("active");
                  }),
                  n.classList.remove("active");
              });
          });
      },
      524: () => {
        !(function () {
          const e = document.querySelector("[data-burger]"),
            t = document.querySelector("[data-menu]"),
            n = document.querySelectorAll("[data-menu-item]"),
            r = document.querySelector("[data-menu-overlay]"),
            i = document.querySelectorAll(
              ".header__list--mobile .header__link"
            ),
            s = document.querySelector(".page__body");
          function o() {
            const e = parseInt(s.style.top, 10);
            (s.style.position = ""), (s.style.top = ""), window.scrollTo(0, -e);
          }
          function a() {
            e.setAttribute("aria-expanded", "false"),
              e.setAttribute("aria-label", "Открыть меню"),
              e.classList.remove("burger--active"),
              t.classList.remove("menu--active"),
              document.body.classList.remove("active"),
              o();
          }
          e &&
            e.addEventListener("click", (n) => {
              e.classList.toggle("burger--active"),
                t.classList.toggle("menu--active"),
                t.classList.contains("menu--active")
                  ? (e.setAttribute("aria-expanded", "true"),
                    e.setAttribute("aria-label", "Закрыть меню"),
                    document.body.classList.add("active"),
                    (function () {
                      const e =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      (s.style.position = "fixed"), (s.style.top = -e + "px");
                    })())
                  : (e.setAttribute("aria-expanded", "false"),
                    e.setAttribute("aria-label", "Открыть меню"),
                    document.body.classList.remove("active"),
                    o());
            }),
            r &&
              r.addEventListener("click", () => {
                a();
              }),
            n.length > 0 &&
              n.forEach((e) => {
                e.addEventListener("click", () => {
                  a();
                });
              }),
            document.addEventListener("click", (n) => {
              t &&
                !t.contains(n.target) &&
                e &&
                !e.contains(n.target) &&
                t.classList.contains("menu--active") &&
                a();
            }),
            i.length > 0 &&
              i.forEach((e) => {
                e.addEventListener("click", () => {
                  t.classList.contains("menu--active") && a();
                });
              });
        })(),
          (function () {
            const e = document.querySelectorAll(".js-link"),
              t = document.querySelector(".page__body");
            e.length > 0 &&
              e.forEach((e) => {
                e.addEventListener("click", () => {
                  t.style.position = "static";
                });
              });
          })();
      },
      611: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function n() {
            return "undefined" != typeof window;
          }
          function r() {
            return i || (n() && (i = window.gsap) && i.registerPlugin && i);
          }
          var i,
            s,
            o,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g =
              ((v.register = function (e) {
                return (
                  s ||
                    ((i = e || r()),
                    n() &&
                      window.document &&
                      ((o = window),
                      (a = document),
                      (l = a.documentElement),
                      (c = a.body)),
                    i &&
                      ((u = i.utils.toArray),
                      (d = i.utils.clamp),
                      (h = i.parseEase("expo")),
                      (p = i.core.globals().ScrollTrigger),
                      i.core.globals("ScrollSmoother", v),
                      c && p && ((m = p.core._getVelocityProp), (s = 1)))),
                  s
                );
              }),
              (function (e, n, r) {
                n && t(e.prototype, n);
              })(v, [
                {
                  key: "progress",
                  get: function () {
                    return this.scrollTrigger.animation._time / 100;
                  },
                },
              ]),
              v);
          function v(e) {
            var t = this;
            function n() {
              return j.update(-H);
            }
            function r() {
              return (k.style.overflow = "visible");
            }
            function g(e) {
              var t = e.getTween();
              t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
                (F = !1),
                e.animation.progress(e.progress, !0);
            }
            function y(e, t) {
              ((e !== H && !I) || t) &&
                (B &&
                  (k.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    e +
                    ", 0, 1)"),
                (W = e - H),
                (H = e),
                p.isUpdating || p.update());
            }
            function b(e) {
              return arguments.length
                ? (I && (H = -e), (G.y = -e), (F = !0), N(e), this)
                : -H;
            }
            function x(e) {
              (L.scrollTop = 0),
                p.isInViewport(e.target) ||
                  e.target === R ||
                  t.scrollTo(e.target, !1, "center center"),
                (R = e.target);
            }
            function _(e) {
              var t, n, r, s;
              A.forEach(function (o) {
                (t = o.pins),
                  (s = o.markers),
                  e.forEach(function (e) {
                    (e.trigger !== o.trigger &&
                      e.pinnedContainer !== o.trigger) ||
                      o === e ||
                      ((n = e.start),
                      (r = (n - o.start - o.offset) / o.ratio - (n - o.start)),
                      t.forEach(function (e) {
                        return (r -= e.distance / o.ratio - e.distance);
                      }),
                      e.setPositions(n + r, e.end + r),
                      e.markerStart &&
                        s.push(
                          i.quickSetter([e.markerStart, e.markerEnd], "y", "px")
                        ),
                      e.pin &&
                        0 < e.end &&
                        ((r = e.end - e.start),
                        t.push({
                          start: e.start,
                          end: e.end,
                          distance: r,
                          trig: e,
                        }),
                        o.setPositions(o.start, o.end + r),
                        o.vars.onRefresh(o)));
                  });
              });
            }
            function w() {
              r(),
                requestAnimationFrame(r),
                A &&
                  (A.forEach(function (e) {
                    var t = e.start,
                      n = e.auto
                        ? Math.min(p.maxScroll(e.scroller), e.end)
                        : t + (e.end - t) / e.ratio,
                      r = (n - e.end) / 2;
                    (t -= r),
                      (n -= r),
                      (e.offset = r || 1e-4),
                      (e.pins.length = 0),
                      e.setPositions(Math.min(t, n), Math.max(t, n)),
                      e.vars.onRefresh(e);
                  }),
                  _(p.sort())),
                j.reset();
            }
            function T() {
              return (
                A &&
                A.forEach(function (e) {
                  return e.vars.onRefresh(e);
                })
              );
            }
            function S() {
              return (
                A &&
                  A.forEach(function (e) {
                    return e.vars.onRefreshInit(e);
                  }),
                T
              );
            }
            function E(e, t, n, r) {
              return function () {
                var i = "function" == typeof t ? t(n, r) : t;
                return (
                  i ||
                    0 === i ||
                    (i =
                      r.getAttribute("data-" + e) || ("speed" === e ? 1 : 0)),
                  r.setAttribute("data-" + e, i),
                  "auto" === i ? i : parseFloat(i)
                );
              };
            }
            function C(e, t, n, r) {
              function s() {
                (t = b()),
                  (n = x()),
                  (u = parseFloat(t) || 1),
                  (v = (m = "auto" === t) ? 0 : 0.5),
                  g && g.kill(),
                  (g =
                    n &&
                    i.to(e, { ease: h, overwrite: !1, y: "+=0", duration: n })),
                  f && ((f.ratio = u), (f.autoSpeed = m));
              }
              function a() {
                (w.y = _ + "px"), w.renderTransform(1), s();
              }
              function c(t) {
                if (m) {
                  a();
                  var n = (function (e, t) {
                    var n,
                      r,
                      i = e.parentNode || l,
                      s = e.getBoundingClientRect(),
                      a = i.getBoundingClientRect(),
                      c = a.top - s.top,
                      u = a.bottom - s.bottom,
                      d = (Math.abs(c) > Math.abs(u) ? c : u) / (1 - t),
                      p = -d * t;
                    return (
                      0 < d &&
                        ((p +=
                          -(r =
                            0.5 == (n = a.height / (o.innerHeight + a.height))
                              ? 2 * a.height
                              : 2 *
                                Math.min(a.height, (-d * n) / (2 * n - 1))) /
                          2),
                        (d += r)),
                      { change: d, offset: p }
                    );
                  })(e, d(0, 1, -t.start / (t.end - t.start)));
                  (k = n.change), (y = n.offset);
                } else (k = (t.end - t.start) * (1 - u)), (y = 0);
                T.forEach(function (e) {
                  return (k -= e.distance * (1 - u));
                }),
                  t.vars.onUpdate(t),
                  g && g.progress(1);
              }
              var u,
                f,
                m,
                g,
                v,
                y,
                b = E("speed", t, r, e),
                x = E("lag", n, r, e),
                _ = i.getProperty(e, "y"),
                w = e._gsap,
                T = [],
                C = [],
                k = 0;
              return (
                s(),
                (1 !== u || m || g) &&
                  (c(
                    (f = p.create({
                      trigger: m ? e.parentNode : e,
                      scroller: L,
                      scrub: !0,
                      refreshPriority: -999,
                      onRefreshInit: a,
                      onRefresh: c,
                      onKill: function (e) {
                        var t = A.indexOf(e);
                        0 <= t && A.splice(t, 1);
                      },
                      onUpdate: function (e) {
                        var t,
                          n,
                          r,
                          s = _ + k * (e.progress - v),
                          o = T.length,
                          a = 0;
                        if (e.offset) {
                          if (o) {
                            for (n = -G.y, r = e.end; o--; ) {
                              if (
                                (t = T[o]).trig.isActive ||
                                (n >= t.start && n <= t.end)
                              )
                                return void (
                                  g &&
                                  ((t.trig.progress +=
                                    t.trig.direction < 0 ? 0.001 : -0.001),
                                  t.trig.update(0, 0, 1),
                                  g.resetTo("y", parseFloat(w.y), -W, !0),
                                  q && g.progress(1))
                                );
                              n > t.end && (a += t.distance), (r -= t.distance);
                            }
                            s =
                              _ +
                              a +
                              k *
                                ((i.utils.clamp(e.start, e.end, n) -
                                  e.start -
                                  a) /
                                  (r - e.start) -
                                  v);
                          }
                          (s = (function (e) {
                            return Math.round(1e5 * e) / 1e5 || 0;
                          })(s + y)),
                            C.length &&
                              !m &&
                              C.forEach(function (e) {
                                return e(s - a);
                              }),
                            g
                              ? (g.resetTo("y", s, -W, !0), q && g.progress(1))
                              : ((w.y = s + "px"), w.renderTransform(1));
                        }
                      },
                    }))
                  ),
                  (i.core.getCache(f.trigger).stRevert = S),
                  (f.startY = _),
                  (f.pins = T),
                  (f.markers = C),
                  (f.ratio = u),
                  (f.autoSpeed = m),
                  (e.style.willChange = "transform")),
                f
              );
            }
            s ||
              v.register(i) ||
              console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
              (e = this.vars = e || {}),
              f && f.kill(),
              (f = this);
            var k,
              L,
              M,
              P,
              A,
              O,
              z,
              D,
              I,
              $,
              F,
              R,
              N = p.getScrollFunc(o),
              B =
                1 === p.isTouch
                  ? !0 === e.smoothTouch
                    ? 0.8
                    : parseFloat(e.smoothTouch) || 0
                  : 0 === e.smooth || !1 === e.smooth
                  ? 0
                  : parseFloat(e.smooth) || 0.8,
              H = 0,
              W = 0,
              q = 1,
              X = e.onUpdate,
              Y = e.onStop,
              j = m(0),
              G = { y: 0 };
            function V() {
              return (
                (M = k.clientHeight),
                (k.style.overflow = "visible"),
                (c.style.height = M + "px"),
                M - o.innerHeight
              );
            }
            p.addEventListener("refresh", w),
              i.delayedCall(0.5, function () {
                return (q = 0);
              }),
              (this.scrollTop = b),
              (this.scrollTo = function (e, n, r) {
                var s = i.utils.clamp(
                  0,
                  p.maxScroll(o),
                  isNaN(e) ? t.offset(e, r) : +e
                );
                n
                  ? I
                    ? i.to(t, {
                        duration: B,
                        scrollTop: s,
                        overwrite: "auto",
                        ease: h,
                      })
                    : N(s)
                  : b(s);
              }),
              (this.offset = function (e, t) {
                e = u(e)[0];
                var n,
                  r = i.getProperty(e, "y"),
                  s = p.create({ trigger: e, start: t || "top top" });
                return (
                  A && _([s]), (n = s.start), s.kill(!1), i.set(e, { y: r }), n
                );
              }),
              (this.content = function (e) {
                return arguments.length
                  ? ((k = u(e || "#smooth-content")[0] || c.children[0]),
                    (D = k.getAttribute("style") || ""),
                    i.set(k, { overflow: "visible", width: "100%" }),
                    this)
                  : k;
              }),
              (this.wrapper = function (e) {
                return arguments.length
                  ? ((L =
                      u(e || "#smooth-wrapper")[0] ||
                      (function (e) {
                        var t = a.createElement("div");
                        return (
                          t.classList.add("ScrollSmoother-wrapper"),
                          e.parentNode.insertBefore(t, e),
                          t.appendChild(e),
                          t
                        );
                      })(k)),
                    (z = L.getAttribute("style") || ""),
                    V(),
                    i.set(
                      L,
                      B
                        ? {
                            overflow: "hidden",
                            position: "fixed",
                            height: "100%",
                            width: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }
                        : {
                            overflow: "visible",
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            top: "auto",
                            bottom: "auto",
                            left: "auto",
                            right: "auto",
                          }
                    ),
                    this)
                  : L;
              }),
              (this.effects = function (e, t) {
                if (((A = A || []), !e)) return A.slice(0);
                (e = u(e)).forEach(function (e) {
                  for (var t = A.length; t--; )
                    A[t].trigger === e && (A[t].kill(), A.splice(t, 1));
                });
                var n,
                  r,
                  i = (t = t || {}).speed,
                  s = t.lag,
                  o = [];
                for (n = 0; n < e.length; n++)
                  (r = C(e[n], i, s, n)) && o.push(r);
                return A.push.apply(A, o), o;
              }),
              this.content(e.content),
              this.wrapper(e.wrapper),
              (this.render = function (e) {
                return y(e || 0 === e ? e : H);
              }),
              (this.getVelocity = function () {
                return j.getVelocity(-H);
              }),
              p.scrollerProxy(L, {
                scrollTop: b,
                scrollHeight: function () {
                  return c.scrollHeight;
                },
                fixedMarkers: !1 !== e.fixedMarkers && !!B,
                content: k,
                getBoundingClientRect: function () {
                  return {
                    top: 0,
                    left: 0,
                    width: o.innerWidth,
                    height: o.innerHeight,
                  };
                },
              }),
              p.defaults({ scroller: L });
            var U = p.getAll().filter(function (e) {
              return e.scroller === o || e.scroller === L;
            });
            U.forEach(function (e) {
              return e.revert(!0);
            }),
              (P = p.create({
                animation: i.to(G, {
                  y: function () {
                    return o.innerHeight - M;
                  },
                  ease: "none",
                  data: "ScrollSmoother",
                  duration: 100,
                  onUpdate: function () {
                    var e = F;
                    e && ((G.y = H), g(P)), y(G.y, e), n(), X && !I && X(t);
                  },
                }),
                onRefreshInit: function () {
                  return (G.y = 0);
                },
                id: "ScrollSmoother",
                scroller: o,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: V,
                onScrubComplete: function () {
                  j.reset(), Y && Y(t);
                },
                scrub: B || !0,
                onRefresh: function (e) {
                  g(e), y(G.y);
                },
              })),
              (this.smooth = function (e) {
                return (
                  (B = e),
                  arguments.length
                    ? P.scrubDuration(e)
                    : P.getTween()
                    ? P.getTween().duration()
                    : 0
                );
              }),
              P.getTween() && (P.getTween().vars.ease = e.ease || h),
              (this.scrollTrigger = P),
              e.effects &&
                this.effects(
                  !0 === e.effects ? "[data-speed], [data-lag]" : e.effects,
                  {}
                ),
              U.forEach(function (e) {
                (e.vars.scroller = L), e.init(e.vars, e.animation);
              }),
              (this.paused = function (e) {
                return arguments.length
                  ? (!!I !== e &&
                      (e
                        ? (P.getTween() && P.getTween().pause(),
                          N(-H),
                          j.reset(),
                          ($ = p.normalizeScroll()) && $.disable(),
                          (I = p.observe({
                            preventDefault: !0,
                            type: "wheel,touch,scroll",
                            debounce: !1,
                            onChangeY: function () {
                              return b(-H);
                            },
                          })))
                        : (I.kill(),
                          (I = 0),
                          $ && $.enable(),
                          (P.progress = (-H - P.start) / (P.end - P.start)),
                          g(P))),
                    this)
                  : !!I;
              }),
              (this.kill = function () {
                t.paused(!1), g(P), P.kill();
                for (var e = A ? A.length : 0; e--; ) A[e].kill();
                p.scrollerProxy(L),
                  p.removeEventListener("refresh", w),
                  (L.style.cssText = z),
                  (k.style.cssText = D);
                var n = p.defaults({});
                n && n.scroller === L && p.defaults({ scroller: o }),
                  t.observer && p.normalizeScroll(!1),
                  clearInterval(O),
                  (f = null),
                  o.removeEventListener("focusin", x);
              }),
              e.normalizeScroll &&
                (this.observer = p.normalizeScroll({ debounce: !0 })),
              p.config(e),
              "overscrollBehavior" in o.getComputedStyle(c) &&
                i.set(c, { overscrollBehavior: "none" }),
              o.addEventListener("focusin", x),
              (O = setInterval(n, 250)),
              "loading" === a.readyState ||
                requestAnimationFrame(function () {
                  return p.refresh();
                });
          }
          (g.version = "3.10.2"),
            (g.create = function (e) {
              return f && e && f.content() === u(e.content)[0] ? f : new g(e);
            }),
            (g.get = function () {
              return f;
            }),
            r() && i.registerPlugin(g),
            (e.ScrollSmoother = g),
            (e.default = g),
            "undefined" == typeof window || window !== e
              ? Object.defineProperty(e, "__esModule", { value: !0 })
              : delete e.default;
        })(t);
      },
      992: function (e, t) {
        !(function (e) {
          "use strict";
          function t() {
            return "undefined" != typeof window;
          }
          function n() {
            return u || (t() && (u = window.gsap) && u.registerPlugin && u);
          }
          function r(e) {
            return "string" == typeof e;
          }
          function i(e) {
            return "function" == typeof e;
          }
          function s(e, t) {
            var n = "x" === t ? "Width" : "Height",
              r = "scroll" + n,
              i = "client" + n;
            return e === p || e === f || e === h
              ? Math.max(f[r], h[r]) - (p["inner" + n] || f[i] || h[i])
              : e[r] - e["offset" + n];
          }
          function o(e, t) {
            var n = "scroll" + ("x" === t ? "Left" : "Top");
            return (
              e === p &&
                (null != e.pageXOffset
                  ? (n = "page" + t.toUpperCase() + "Offset")
                  : (e = null != f[n] ? f : h)),
              function () {
                return e[n];
              }
            );
          }
          function a(e, t) {
            if (!(e = m(e)[0]) || !e.getBoundingClientRect)
              return (
                console.warn("scrollTo target doesn't exist. Using 0") || {
                  x: 0,
                  y: 0,
                }
              );
            var n = e.getBoundingClientRect(),
              r = !t || t === p || t === h,
              i = r
                ? {
                    top:
                      f.clientTop -
                      (p.pageYOffset || f.scrollTop || h.scrollTop || 0),
                    left:
                      f.clientLeft -
                      (p.pageXOffset || f.scrollLeft || h.scrollLeft || 0),
                  }
                : t.getBoundingClientRect(),
              s = { x: n.left - i.left, y: n.top - i.top };
            return !r && t && ((s.x += o(t, "x")()), (s.y += o(t, "y")())), s;
          }
          function l(e, t, n, i, o) {
            return isNaN(e) || "object" == typeof e
              ? r(e) && "=" === e.charAt(1)
                ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) +
                  i -
                  o
                : "max" === e
                ? s(t, n) - o
                : Math.min(s(t, n), a(e, t)[n] - o)
              : parseFloat(e) - o;
          }
          function c() {
            (u = n()),
              t() &&
                u &&
                "undefined" != typeof document &&
                document.body &&
                ((p = window),
                (h = document.body),
                (f = document.documentElement),
                (m = u.utils.toArray),
                u.config({ autoKillThreshold: 7 }),
                (g = u.config()),
                (d = 1));
          }
          var u,
            d,
            p,
            f,
            h,
            m,
            g,
            v,
            y = {
              version: "3.12.1",
              name: "scrollTo",
              rawVars: 1,
              register: function (e) {
                (u = e), c();
              },
              init: function (e, t, n, s, a) {
                d || c();
                var f = this,
                  h = u.getProperty(e, "scrollSnapType");
                (f.isWin = e === p),
                  (f.target = e),
                  (f.tween = n),
                  (t = (function (e, t, n, s) {
                    if ((i(e) && (e = e(t, n, s)), "object" != typeof e))
                      return r(e) && "max" !== e && "=" !== e.charAt(1)
                        ? { x: e, y: e }
                        : { y: e };
                    if (e.nodeType) return { y: e, x: e };
                    var o,
                      a = {};
                    for (o in e)
                      a[o] =
                        "onAutoKill" !== o && i(e[o]) ? e[o](t, n, s) : e[o];
                    return a;
                  })(t, s, e, a)),
                  (f.vars = t),
                  (f.autoKill = !!t.autoKill),
                  (f.getX = o(e, "x")),
                  (f.getY = o(e, "y")),
                  (f.x = f.xPrev = f.getX()),
                  (f.y = f.yPrev = f.getY()),
                  (v = v || u.core.globals().ScrollTrigger),
                  "smooth" === u.getProperty(e, "scrollBehavior") &&
                    u.set(e, { scrollBehavior: "auto" }),
                  h &&
                    "none" !== h &&
                    ((f.snap = 1),
                    (f.snapInline = e.style.scrollSnapType),
                    (e.style.scrollSnapType = "none")),
                  null != t.x
                    ? (f.add(
                        f,
                        "x",
                        f.x,
                        l(t.x, e, "x", f.x, t.offsetX || 0),
                        s,
                        a
                      ),
                      f._props.push("scrollTo_x"))
                    : (f.skipX = 1),
                  null != t.y
                    ? (f.add(
                        f,
                        "y",
                        f.y,
                        l(t.y, e, "y", f.y, t.offsetY || 0),
                        s,
                        a
                      ),
                      f._props.push("scrollTo_y"))
                    : (f.skipY = 1);
              },
              render: function (e, t) {
                for (
                  var n,
                    r,
                    i,
                    o,
                    a,
                    l = t._pt,
                    c = t.target,
                    u = t.tween,
                    d = t.autoKill,
                    f = t.xPrev,
                    h = t.yPrev,
                    m = t.isWin,
                    y = t.snap,
                    b = t.snapInline;
                  l;

                )
                  l.r(e, l.d), (l = l._next);
                (n = m || !t.skipX ? t.getX() : f),
                  (i = (r = m || !t.skipY ? t.getY() : h) - h),
                  (o = n - f),
                  (a = g.autoKillThreshold),
                  t.x < 0 && (t.x = 0),
                  t.y < 0 && (t.y = 0),
                  d &&
                    (!t.skipX &&
                      (a < o || o < -a) &&
                      n < s(c, "x") &&
                      (t.skipX = 1),
                    !t.skipY &&
                      (a < i || i < -a) &&
                      r < s(c, "y") &&
                      (t.skipY = 1),
                    t.skipX &&
                      t.skipY &&
                      (u.kill(),
                      t.vars.onAutoKill &&
                        t.vars.onAutoKill.apply(
                          u,
                          t.vars.onAutoKillParams || []
                        ))),
                  m
                    ? p.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y)
                    : (t.skipY || (c.scrollTop = t.y),
                      t.skipX || (c.scrollLeft = t.x)),
                  !y ||
                    (1 !== e && 0 !== e) ||
                    ((r = c.scrollTop),
                    (n = c.scrollLeft),
                    b
                      ? (c.style.scrollSnapType = b)
                      : c.style.removeProperty("scroll-snap-type"),
                    (c.scrollTop = r + 1),
                    (c.scrollLeft = n + 1),
                    (c.scrollTop = r),
                    (c.scrollLeft = n)),
                  (t.xPrev = t.x),
                  (t.yPrev = t.y),
                  v && v.update();
              },
              kill: function (e) {
                var t = "scrollTo" === e;
                (!t && "scrollTo_x" !== e) || (this.skipX = 1),
                  (!t && "scrollTo_y" !== e) || (this.skipY = 1);
              },
            };
          (y.max = s),
            (y.getOffset = a),
            (y.buildGetter = o),
            n() && u.registerPlugin(y),
            (e.ScrollToPlugin = y),
            (e.default = y),
            "undefined" == typeof window || window !== e
              ? Object.defineProperty(e, "__esModule", { value: !0 })
              : delete e.default;
        })(t);
      },
      576: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function n() {
            return (
              g ||
              ("undefined" != typeof window &&
                (g = window.gsap) &&
                g.registerPlugin &&
                g)
            );
          }
          function r(e, t) {
            return ~A.indexOf(e) && A[A.indexOf(e) + 1][t];
          }
          function i(e) {
            return !!~E.indexOf(e);
          }
          function s(e, t, n, r, i) {
            return e.addEventListener(t, n, { passive: !r, capture: !!i });
          }
          function o(e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          }
          function a() {
            return (C && C.isPressed) || P.cache++;
          }
          function l(e, t) {
            function n(r) {
              if (r || 0 === r) {
                L && (y.history.scrollRestoration = "manual");
                var i = C && C.isPressed;
                (r = n.v = Math.round(r) || (C && C.iOS ? 1 : 0)),
                  e(r),
                  (n.cacheID = P.cache),
                  i && z("ss", r);
              } else
                (t || P.cache !== n.cacheID || z("ref")) &&
                  ((n.cacheID = P.cache), (n.v = e()));
              return n.v + n.offset;
            }
            return (n.offset = 0), e && n;
          }
          function c(e) {
            return (
              g.utils.toArray(e)[0] ||
              ("string" == typeof e && !1 !== g.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          }
          function u(e, t) {
            var n = t.s,
              s = t.sc,
              o = P.indexOf(e),
              c = s === F.sc ? 1 : 2;
            return (
              ~o || (o = P.push(e) - 1),
              P[o + c] || e.addEventListener("scroll", a),
              P[o + c] ||
                (P[o + c] =
                  l(r(e, n), !0) ||
                  (i(e)
                    ? s
                    : l(function (t) {
                        return arguments.length ? (e[n] = t) : e[n];
                      })))
            );
          }
          function d(e, t, n) {
            function r(e, t) {
              var r = O();
              t || l < r - o
                ? ((s = i), (i = e), (a = o), (o = r))
                : n
                ? (i += e)
                : (i = s + ((e - s) / (r - a)) * (o - a));
            }
            var i = e,
              s = e,
              o = O(),
              a = o,
              l = t || 50,
              c = Math.max(500, 3 * l);
            return {
              update: r,
              reset: function () {
                (s = i = n ? 0 : i), (a = o = 0);
              },
              getVelocity: function (e) {
                var t = a,
                  l = s,
                  u = O();
                return (
                  (!e && 0 !== e) || e === i || r(e),
                  o === a || c < u - a
                    ? 0
                    : ((i + (n ? l : -l)) / ((n ? u : o) - t)) * 1e3
                );
              },
            };
          }
          function p(e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          }
          function f(e) {
            var t = Math.max.apply(Math, e),
              n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n;
          }
          function h() {
            (S = g.core.globals().ScrollTrigger) &&
              S.core &&
              (function () {
                var e = S.core,
                  t = e.bridge || {},
                  n = e._scrollers,
                  r = e._proxies;
                n.push.apply(n, P),
                  r.push.apply(r, A),
                  (P = n),
                  (A = r),
                  (z = function (e, n) {
                    return t[e](n);
                  });
              })();
          }
          function m(e) {
            return (
              (g = e || n()) &&
                "undefined" != typeof document &&
                document.body &&
                ((y = window),
                (x = (b = document).documentElement),
                (_ = b.body),
                (E = [y, b, x, _]),
                g.utils.clamp,
                (T = "onpointerenter" in _ ? "pointer" : "mouse"),
                (w = R.isTouch =
                  y.matchMedia &&
                  y.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in y ||
                      0 < navigator.maxTouchPoints ||
                      0 < navigator.msMaxTouchPoints
                    ? 2
                    : 0),
                (k = R.eventTypes =
                  (
                    "ontouchstart" in x
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in x
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (L = 0);
                }, 500),
                h(),
                (v = 1)),
              v
            );
          }
          var g,
            v,
            y,
            b,
            x,
            _,
            w,
            T,
            S,
            E,
            C,
            k,
            L = 1,
            M = [],
            P = [],
            A = [],
            O = Date.now,
            z = function (e, t) {
              return t;
            },
            D = "scrollLeft",
            I = "scrollTop",
            $ = {
              s: D,
              p: "left",
              p2: "Left",
              os: "right",
              os2: "Right",
              d: "width",
              d2: "Width",
              a: "x",
              sc: l(function (e) {
                return arguments.length
                  ? y.scrollTo(e, F.sc())
                  : y.pageXOffset || b[D] || x[D] || _[D] || 0;
              }),
            },
            F = {
              s: I,
              p: "top",
              p2: "Top",
              os: "bottom",
              os2: "Bottom",
              d: "height",
              d2: "Height",
              a: "y",
              op: $,
              sc: l(function (e) {
                return arguments.length
                  ? y.scrollTo($.sc(), e)
                  : y.pageYOffset || b[I] || x[I] || _[I] || 0;
              }),
            };
          ($.op = F), (P.cache = 0);
          var R =
            ((N.prototype.init = function (e) {
              v || m(g) || console.warn("Please gsap.registerPlugin(Observer)"),
                S || h();
              var t = e.tolerance,
                n = e.dragMinimum,
                r = e.type,
                l = e.target,
                E = e.lineHeight,
                L = e.debounce,
                P = e.preventDefault,
                A = e.onStop,
                z = e.onStopDelay,
                D = e.ignore,
                I = e.wheelSpeed,
                R = e.event,
                N = e.onDragStart,
                B = e.onDragEnd,
                H = e.onDrag,
                W = e.onPress,
                q = e.onRelease,
                X = e.onRight,
                Y = e.onLeft,
                j = e.onUp,
                G = e.onDown,
                V = e.onChangeX,
                U = e.onChangeY,
                K = e.onChange,
                Q = e.onToggleX,
                Z = e.onToggleY,
                J = e.onHover,
                ee = e.onHoverEnd,
                te = e.onMove,
                ne = e.ignoreCheck,
                re = e.isNormalizer,
                ie = e.onGestureStart,
                se = e.onGestureEnd,
                oe = e.onWheel,
                ae = e.onEnable,
                le = e.onDisable,
                ce = e.onClick,
                ue = e.scrollSpeed,
                de = e.capture,
                pe = e.allowClicks,
                fe = e.lockAxis,
                he = e.onLockAxis;
              function me() {
                return (Ue = O());
              }
              function ge(e, t) {
                return (
                  ((Fe.event = e) && D && ~D.indexOf(e.target)) ||
                  (t && Xe && "touch" !== e.pointerType) ||
                  (ne && ne(e, t))
                );
              }
              function ve() {
                var e = (Fe.deltaX = f(Ge)),
                  n = (Fe.deltaY = f(Ve)),
                  r = Math.abs(e) >= t,
                  i = Math.abs(n) >= t;
                K && (r || i) && K(Fe, e, n, Ge, Ve),
                  r &&
                    (X && 0 < Fe.deltaX && X(Fe),
                    Y && Fe.deltaX < 0 && Y(Fe),
                    V && V(Fe),
                    Q && Fe.deltaX < 0 != Re < 0 && Q(Fe),
                    (Re = Fe.deltaX),
                    (Ge[0] = Ge[1] = Ge[2] = 0)),
                  i &&
                    (G && 0 < Fe.deltaY && G(Fe),
                    j && Fe.deltaY < 0 && j(Fe),
                    U && U(Fe),
                    Z && Fe.deltaY < 0 != Ne < 0 && Z(Fe),
                    (Ne = Fe.deltaY),
                    (Ve[0] = Ve[1] = Ve[2] = 0)),
                  (ze || Oe) &&
                    (te && te(Fe), Oe && (H(Fe), (Oe = !1)), (ze = !1)),
                  Ie && !(Ie = !1) && he && he(Fe),
                  De && (oe(Fe), (De = !1)),
                  (Pe = 0);
              }
              function ye(e, t, n) {
                (Ge[n] += e),
                  (Ve[n] += t),
                  Fe._vx.update(e),
                  Fe._vy.update(t),
                  L ? (Pe = Pe || requestAnimationFrame(ve)) : ve();
              }
              function be(e, t) {
                fe &&
                  !$e &&
                  ((Fe.axis = $e = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                  (Ie = !0)),
                  "y" !== $e && ((Ge[2] += e), Fe._vx.update(e, !0)),
                  "x" !== $e && ((Ve[2] += t), Fe._vy.update(t, !0)),
                  L ? (Pe = Pe || requestAnimationFrame(ve)) : ve();
              }
              function xe(e) {
                if (!ge(e, 1)) {
                  var t = (e = p(e, P)).clientX,
                    r = e.clientY,
                    i = t - Fe.x,
                    s = r - Fe.y,
                    o = Fe.isDragging;
                  (Fe.x = t),
                    (Fe.y = r),
                    (o ||
                      Math.abs(Fe.startX - t) >= n ||
                      Math.abs(Fe.startY - r) >= n) &&
                      (H && (Oe = !0),
                      o || (Fe.isDragging = !0),
                      be(i, s),
                      o || (N && N(Fe)));
                }
              }
              function _e(e) {
                if (!ge(e, 1)) {
                  o(re ? l : je, k[1], xe, !0);
                  var t =
                      Fe.isDragging &&
                      (3 < Math.abs(Fe.x - Fe.startX) ||
                        3 < Math.abs(Fe.y - Fe.startY)),
                    n = p(e);
                  t ||
                    (Fe._vx.reset(),
                    Fe._vy.reset(),
                    P &&
                      pe &&
                      g.delayedCall(0.08, function () {
                        if (300 < O() - Ue && !e.defaultPrevented)
                          if (e.target.click) e.target.click();
                          else if (je.createEvent) {
                            var t = je.createEvent("MouseEvents");
                            t.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              y,
                              1,
                              n.screenX,
                              n.screenY,
                              n.clientX,
                              n.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              e.target.dispatchEvent(t);
                          }
                      })),
                    (Fe.isDragging = Fe.isGesturing = Fe.isPressed = !1),
                    A && !re && Ae.restart(!0),
                    B && t && B(Fe),
                    q && q(Fe, t);
                }
              }
              function we(e) {
                return (
                  e.touches &&
                  1 < e.touches.length &&
                  (Fe.isGesturing = !0) &&
                  ie(e, Fe.isDragging)
                );
              }
              function Te() {
                return (Fe.isGesturing = !1) || se(Fe);
              }
              function Se(e) {
                if (!ge(e)) {
                  var t = Be(),
                    n = He();
                  ye((t - We) * ue, (n - qe) * ue, 1),
                    (We = t),
                    (qe = n),
                    A && Ae.restart(!0);
                }
              }
              function Ee(e) {
                if (!ge(e)) {
                  (e = p(e, P)), oe && (De = !0);
                  var t =
                    (1 === e.deltaMode
                      ? E
                      : 2 === e.deltaMode
                      ? y.innerHeight
                      : 1) * I;
                  ye(e.deltaX * t, e.deltaY * t, 0), A && !re && Ae.restart(!0);
                }
              }
              function Ce(e) {
                if (!ge(e)) {
                  var t = e.clientX,
                    n = e.clientY,
                    r = t - Fe.x,
                    i = n - Fe.y;
                  (Fe.x = t), (Fe.y = n), (ze = !0), (r || i) && be(r, i);
                }
              }
              function ke(e) {
                (Fe.event = e), J(Fe);
              }
              function Le(e) {
                (Fe.event = e), ee(Fe);
              }
              function Me(e) {
                return ge(e) || (p(e, P) && ce(Fe));
              }
              (this.target = l = c(l) || x),
                (this.vars = e),
                (D = D && g.utils.toArray(D)),
                (t = t || 1e-9),
                (n = n || 0),
                (I = I || 1),
                (ue = ue || 1),
                (r = r || "wheel,touch,pointer"),
                (L = !1 !== L),
                (E = E || parseFloat(y.getComputedStyle(_).lineHeight) || 22);
              var Pe,
                Ae,
                Oe,
                ze,
                De,
                Ie,
                $e,
                Fe = this,
                Re = 0,
                Ne = 0,
                Be = u(l, $),
                He = u(l, F),
                We = Be(),
                qe = He(),
                Xe =
                  ~r.indexOf("touch") &&
                  !~r.indexOf("pointer") &&
                  "pointerdown" === k[0],
                Ye = i(l),
                je = l.ownerDocument || b,
                Ge = [0, 0, 0],
                Ve = [0, 0, 0],
                Ue = 0,
                Ke = (Fe.onPress = function (e) {
                  ge(e, 1) ||
                    ((Fe.axis = $e = null),
                    Ae.pause(),
                    (Fe.isPressed = !0),
                    (e = p(e)),
                    (Re = Ne = 0),
                    (Fe.startX = Fe.x = e.clientX),
                    (Fe.startY = Fe.y = e.clientY),
                    Fe._vx.reset(),
                    Fe._vy.reset(),
                    s(re ? l : je, k[1], xe, P, !0),
                    (Fe.deltaX = Fe.deltaY = 0),
                    W && W(Fe));
                });
              (Ae = Fe._dc =
                g
                  .delayedCall(z || 0.25, function () {
                    Fe._vx.reset(), Fe._vy.reset(), Ae.pause(), A && A(Fe);
                  })
                  .pause()),
                (Fe.deltaX = Fe.deltaY = 0),
                (Fe._vx = d(0, 50, !0)),
                (Fe._vy = d(0, 50, !0)),
                (Fe.scrollX = Be),
                (Fe.scrollY = He),
                (Fe.isDragging = Fe.isGesturing = Fe.isPressed = !1),
                (Fe.enable = function (e) {
                  return (
                    Fe.isEnabled ||
                      (s(Ye ? je : l, "scroll", a),
                      0 <= r.indexOf("scroll") &&
                        s(Ye ? je : l, "scroll", Se, P, de),
                      0 <= r.indexOf("wheel") && s(l, "wheel", Ee, P, de),
                      ((0 <= r.indexOf("touch") && w) ||
                        0 <= r.indexOf("pointer")) &&
                        (s(l, k[0], Ke, P, de),
                        s(je, k[2], _e),
                        s(je, k[3], _e),
                        pe && s(l, "click", me, !1, !0),
                        ce && s(l, "click", Me),
                        ie && s(je, "gesturestart", we),
                        se && s(je, "gestureend", Te),
                        J && s(l, T + "enter", ke),
                        ee && s(l, T + "leave", Le),
                        te && s(l, T + "move", Ce)),
                      (Fe.isEnabled = !0),
                      e && e.type && Ke(e),
                      ae && ae(Fe)),
                    Fe
                  );
                }),
                (Fe.disable = function () {
                  Fe.isEnabled &&
                    (M.filter(function (e) {
                      return e !== Fe && i(e.target);
                    }).length || o(Ye ? je : l, "scroll", a),
                    Fe.isPressed &&
                      (Fe._vx.reset(),
                      Fe._vy.reset(),
                      o(re ? l : je, k[1], xe, !0)),
                    o(Ye ? je : l, "scroll", Se, de),
                    o(l, "wheel", Ee, de),
                    o(l, k[0], Ke, de),
                    o(je, k[2], _e),
                    o(je, k[3], _e),
                    o(l, "click", me, !0),
                    o(l, "click", Me),
                    o(je, "gesturestart", we),
                    o(je, "gestureend", Te),
                    o(l, T + "enter", ke),
                    o(l, T + "leave", Le),
                    o(l, T + "move", Ce),
                    (Fe.isEnabled = Fe.isPressed = Fe.isDragging = !1),
                    le && le(Fe));
                }),
                (Fe.kill = function () {
                  Fe.disable();
                  var e = M.indexOf(Fe);
                  0 <= e && M.splice(e, 1), C === Fe && (C = 0);
                }),
                M.push(Fe),
                re && i(l) && (C = Fe),
                Fe.enable(R);
            }),
            (function (e, n, r) {
              n && t(e.prototype, n);
            })(N, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            N);
          function N(e) {
            this.init(e);
          }
          function B() {
            return (Ne = 1);
          }
          function H() {
            return (Ne = 0);
          }
          function W(e) {
            return e;
          }
          function q(e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          }
          function X() {
            return "undefined" != typeof window;
          }
          function Y() {
            return Ce || (X() && (Ce = window.gsap) && Ce.registerPlugin && Ce);
          }
          function j(e) {
            return !!~Oe.indexOf(e);
          }
          function G(e) {
            return (
              r(e, "getBoundingClientRect") ||
              (j(e)
                ? function () {
                    return (
                      (Wt.width = Le.innerWidth),
                      (Wt.height = Le.innerHeight),
                      Wt
                    );
                  }
                : function () {
                    return wt(e);
                  })
            );
          }
          function V(e, t) {
            var n = t.s,
              i = t.d2,
              s = t.d,
              o = t.a;
            return (n = "scroll" + i) && (o = r(e, n))
              ? o() - G(e)()[s]
              : j(e)
              ? (Pe[n] || Ae[n]) -
                (Le["inner" + i] || Pe["client" + i] || Ae["client" + i])
              : e[n] - e["offset" + i];
          }
          function U(e, t) {
            for (var n = 0; n < Xe.length; n += 3)
              (t && !~t.indexOf(Xe[n + 1])) || e(Xe[n], Xe[n + 1], Xe[n + 2]);
          }
          function K(e) {
            return "string" == typeof e;
          }
          function Q(e) {
            return "function" == typeof e;
          }
          function Z(e) {
            return "number" == typeof e;
          }
          function J(e) {
            return "object" == typeof e;
          }
          function ee(e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause();
          }
          function te(e, t) {
            if (e.enabled) {
              var n = t(e);
              n && n.totalTime && (e.callbackAnimation = n);
            }
          }
          function ne(e) {
            return Le.getComputedStyle(e);
          }
          function re(e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          }
          function ie(e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0;
          }
          function se(e) {
            var t,
              n = [],
              r = e.labels,
              i = e.duration();
            for (t in r) n.push(r[t] / i);
            return n;
          }
          function oe(e) {
            var t = Ce.utils.snap(e),
              n =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return n
              ? function (e, r, i) {
                  var s;
                  if ((void 0 === i && (i = 0.001), !r)) return t(e);
                  if (0 < r) {
                    for (e -= i, s = 0; s < n.length; s++)
                      if (n[s] >= e) return n[s];
                    return n[s - 1];
                  }
                  for (s = n.length, e += i; s--; ) if (n[s] <= e) return n[s];
                  return n[0];
                }
              : function (n, r, i) {
                  void 0 === i && (i = 0.001);
                  var s = t(n);
                  return !r || Math.abs(s - n) < i || s - n < 0 == r < 0
                    ? s
                    : t(r < 0 ? n - e : n + e);
                };
          }
          function ae(e, t, n, r) {
            return n.split(",").forEach(function (n) {
              return e(t, n, r);
            });
          }
          function le(e, t, n, r, i) {
            return e.addEventListener(t, n, { passive: !r, capture: !!i });
          }
          function ce(e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          }
          function ue(e, t, n) {
            return n && n.wheelHandler && e(t, "wheel", n);
          }
          function de(e, t) {
            if (K(e)) {
              var n = e.indexOf("="),
                r = ~n
                  ? (e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1))
                  : 0;
              ~n &&
                (e.indexOf("%") > n && (r *= t / 100),
                (e = e.substr(0, n - 1))),
                (e =
                  r +
                  (e in Et
                    ? Et[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          }
          function pe(e, t, n, i, s, o, a, l) {
            var c = s.startColor,
              u = s.endColor,
              d = s.fontSize,
              p = s.indent,
              f = s.fontWeight,
              h = Me.createElement("div"),
              m = j(n) || "fixed" === r(n, "pinType"),
              g = -1 !== e.indexOf("scroller"),
              v = m ? Ae : n,
              y = -1 !== e.indexOf("start"),
              b = y ? c : u,
              x =
                "border-color:" +
                b +
                ";font-size:" +
                d +
                ";color:" +
                b +
                ";font-weight:" +
                f +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (x += "position:" + ((g || l) && m ? "fixed;" : "absolute;")),
              (!g && !l && m) ||
                (x += (i === F ? ut : dt) + ":" + (o + parseFloat(p)) + "px;"),
              a &&
                (x +=
                  "box-sizing:border-box;text-align:left;width:" +
                  a.offsetWidth +
                  "px;"),
              (h._isStart = y),
              h.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (h.style.cssText = x),
              (h.innerText = t || 0 === t ? e + "-" + t : e),
              v.children[0]
                ? v.insertBefore(h, v.children[0])
                : v.appendChild(h),
              (h._offset = h["offset" + i.op.d2]),
              Ct(h, 0, i, y),
              h
            );
          }
          function fe() {
            return 34 < st() - at && Ft();
          }
          function he() {
            (Ve && Ve.isPressed && !(Ve.startX > Ae.clientWidth)) ||
              (P.cache++,
              (tt = tt || requestAnimationFrame(Ft)),
              at || At("scrollStart"),
              (at = st()));
          }
          function me() {
            (Qe = Le.innerWidth), (Ke = Le.innerHeight);
          }
          function ge() {
            P.cache++,
              Re ||
                Ge ||
                Me.fullscreenElement ||
                Me.webkitFullscreenElement ||
                (Ue &&
                  Qe === Le.innerWidth &&
                  !(Math.abs(Le.innerHeight - Ke) > 0.25 * Le.innerHeight)) ||
                ze.restart(!0);
          }
          function ve() {
            return ce(Xt, "scrollEnd", ve) || Dt(!0);
          }
          function ye(e) {
            for (var t = 0; t < Ot.length; t += 5)
              (!e || (Ot[t + 4] && Ot[t + 4].query === e)) &&
                ((Ot[t].style.cssText = Ot[t + 1]),
                Ot[t].getBBox &&
                  Ot[t].setAttribute("transform", Ot[t + 2] || ""),
                (Ot[t + 3].uncache = 1));
          }
          function be(e, t) {
            var n;
            for (He = 0; He < kt.length; He++)
              !(n = kt[He]) ||
                (t && n._ctx !== t) ||
                (e ? n.kill(1) : n.revert(!0, !0));
            t && ye(t), t || At("revert");
          }
          function xe() {
            return (
              P.cache++ &&
              P.forEach(function (e) {
                return Q(e) && (e.rec = 0);
              })
            );
          }
          function _e(e, t, n, r) {
            if (!e._gsap.swappedIn) {
              for (var i, s = Rt.length, o = t.style, a = e.style; s--; )
                o[(i = Rt[s])] = n[i];
              (o.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (o.display = "inline-block"),
                (a[dt] = a[ut] = "auto"),
                (o.flexBasis = n.flexBasis || "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[pt] = ie(e, $) + _t),
                (o[ft] = ie(e, F) + _t),
                (o[yt] = a[bt] = a.top = a.left = "0"),
                Ht(r),
                (a[pt] = a.maxWidth = n[pt]),
                (a[ft] = a.maxHeight = n[ft]),
                (a[yt] = n[yt]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          }
          function we(e) {
            for (var t = Nt.length, n = e.style, r = [], i = 0; i < t; i++)
              r.push(Nt[i], n[Nt[i]]);
            return (r.t = e), r;
          }
          function Te(e, t, n, r, i, s, o, a, l, u, d, p, f) {
            Q(e) && (e = e(a)),
              K(e) &&
                "max" === e.substr(0, 3) &&
                (e = p + ("=" === e.charAt(4) ? de("0" + e.substr(3), n) : 0));
            var h,
              m,
              g,
              v = f ? f.time() : 0;
            if ((f && f.seek(0), Z(e))) o && Ct(o, n, r, !0);
            else {
              Q(t) && (t = t(a));
              var y,
                b,
                x,
                _,
                w = (e || "0").split(" ");
              (g = c(t) || Ae),
                ((y = wt(g) || {}) && (y.left || y.top)) ||
                  "none" !== ne(g).display ||
                  ((_ = g.style.display),
                  (g.style.display = "block"),
                  (y = wt(g)),
                  _
                    ? (g.style.display = _)
                    : g.style.removeProperty("display")),
                (b = de(w[0], y[r.d])),
                (x = de(w[1] || "0", n)),
                (e = y[r.p] - l[r.p] - u + b + i - x),
                o && Ct(o, x, r, n - x < 20 || (o._isStart && 20 < x)),
                (n -= n - x);
            }
            if (s) {
              var T = e + n,
                S = s._isStart;
              (h = "scroll" + r.d2),
                Ct(
                  s,
                  T,
                  r,
                  (S && 20 < T) ||
                    (!S &&
                      (d ? Math.max(Ae[h], Pe[h]) : s.parentNode[h]) <= T + 1)
                ),
                d &&
                  ((l = wt(o)),
                  d && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + _t));
            }
            return (
              f &&
                g &&
                ((h = wt(g)),
                f.seek(p),
                (m = wt(g)),
                (f._caScrollDist = h[r.p] - m[r.p]),
                (e = (e / f._caScrollDist) * p)),
              f && f.seek(v),
              f ? e : Math.round(e)
            );
          }
          function Se(e, t, n, r) {
            if (e.parentNode !== t) {
              var i,
                s,
                o = e.style;
              if (t === Ae) {
                for (i in ((e._stOrig = o.cssText), (s = ne(e))))
                  +i ||
                    qt.test(i) ||
                    !s[i] ||
                    "string" != typeof o[i] ||
                    "0" === i ||
                    (o[i] = s[i]);
                (o.top = n), (o.left = r);
              } else o.cssText = e._stOrig;
              (Ce.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          }
          function Ee(e, t) {
            function n(t, a, l, c, u) {
              var d = n.tween,
                p = a.onComplete;
              return (
                (l = l || s()),
                (u = (c && u) || 0),
                (c = c || t - l),
                d && d.kill(),
                (r = Math.round(l)),
                (a[o] = t),
                ((a.modifiers = {})[o] = function (e) {
                  return (
                    (e = Math.round(s())) !== r &&
                    e !== i &&
                    3 < Math.abs(e - r) &&
                    3 < Math.abs(e - i)
                      ? (d.kill(), (n.tween = 0))
                      : (e = l + c * d.ratio + u * d.ratio * d.ratio),
                    (i = r),
                    (r = Math.round(e))
                  );
                }),
                (a.onComplete = function () {
                  (n.tween = 0), p && p.call(d);
                }),
                (d = n.tween = Ce.to(e, a))
              );
            }
            var r,
              i,
              s = u(e, t),
              o = "_scroll" + t.p2;
            return (
              ((e[o] = s).wheelHandler = function () {
                return n.tween && n.tween.kill() && (n.tween = 0);
              }),
              le(e, "wheel", s.wheelHandler),
              n
            );
          }
          (R.version = "3.11.2"),
            (R.create = function (e) {
              return new R(e);
            }),
            (R.register = m),
            (R.getAll = function () {
              return M.slice();
            }),
            (R.getById = function (e) {
              return M.filter(function (t) {
                return t.vars.id === e;
              })[0];
            }),
            n() && g.registerPlugin(R);
          var Ce,
            ke,
            Le,
            Me,
            Pe,
            Ae,
            Oe,
            ze,
            De,
            Ie,
            $e,
            Fe,
            Re,
            Ne,
            Be,
            He,
            We,
            qe,
            Xe,
            Ye,
            je,
            Ge,
            Ve,
            Ue,
            Ke,
            Qe,
            Ze,
            Je,
            et,
            tt,
            nt,
            rt,
            it = 1,
            st = Date.now,
            ot = st(),
            at = 0,
            lt = 0,
            ct = Math.abs,
            ut = "right",
            dt = "bottom",
            pt = "width",
            ft = "height",
            ht = "Right",
            mt = "Left",
            gt = "Top",
            vt = "Bottom",
            yt = "padding",
            bt = "margin",
            xt = "Width",
            _t = "px",
            wt = function (e, t) {
              var n =
                  t &&
                  "matrix(1, 0, 0, 1, 0, 0)" !== ne(e)[Be] &&
                  Ce.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  }).progress(1),
                r = e.getBoundingClientRect();
              return n && n.progress(0).kill(), r;
            },
            Tt = {
              startColor: "green",
              endColor: "red",
              indent: 0,
              fontSize: "16px",
              fontWeight: "normal",
            },
            St = { toggleActions: "play", anticipatePin: 0 },
            Et = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            Ct = function (e, t, n, r) {
              var i = { display: "block" },
                s = n[r ? "os2" : "p2"],
                o = n[r ? "p2" : "os2"];
              (e._isFlipped = r),
                (i[n.a + "Percent"] = r ? -100 : 0),
                (i[n.a] = r ? "1px" : 0),
                (i["border" + s + xt] = 1),
                (i["border" + o + xt] = 0),
                (i[n.p] = t + "px"),
                Ce.set(e, i);
            },
            kt = [],
            Lt = {},
            Mt = {},
            Pt = [],
            At = function (e) {
              return (
                (Mt[e] &&
                  Mt[e].map(function (e) {
                    return e();
                  })) ||
                Pt
              );
            },
            Ot = [],
            zt = 0,
            Dt = function (e, t) {
              if (!at || e) {
                (nt = !0),
                  P.forEach(function (e) {
                    return Q(e) && e.cacheID++;
                  });
                var n = At("refreshInit");
                Ye && Xt.sort(),
                  t || be(),
                  kt.slice(0).forEach(function (e) {
                    return e.refresh();
                  }),
                  kt.forEach(function (e) {
                    return (
                      "max" === e.vars.end &&
                      e.setPositions(
                        e.start,
                        Math.max(e.start + 1, V(e.scroller, e._dir))
                      )
                    );
                  }),
                  n.forEach(function (e) {
                    return e && e.render && e.render(-1);
                  }),
                  P.forEach(function (e) {
                    return Q(e) && e(e.rec);
                  }),
                  xe(),
                  ze.pause(),
                  zt++,
                  Ft(2),
                  (nt = !1),
                  At("refresh");
              } else le(Xt, "scrollEnd", ve);
            },
            It = 0,
            $t = 1,
            Ft = function (e) {
              if (!nt || 2 === e) {
                (Xt.isUpdating = !0), rt && rt.update(0);
                var t = kt.length,
                  n = st(),
                  r = 50 <= n - ot,
                  i = t && kt[0].scroll();
                if (
                  (($t = i < It ? -1 : 1),
                  (It = i),
                  r &&
                    (at && !Ne && 200 < n - at && ((at = 0), At("scrollEnd")),
                    ($e = ot),
                    (ot = n)),
                  $t < 0)
                ) {
                  for (He = t; 0 < He--; ) kt[He] && kt[He].update(0, r);
                  $t = 1;
                } else for (He = 0; He < t; He++) kt[He] && kt[He].update(0, r);
                Xt.isUpdating = !1;
              }
              tt = 0;
            },
            Rt = [
              "left",
              "top",
              dt,
              ut,
              bt + vt,
              bt + ht,
              bt + gt,
              bt + mt,
              "display",
              "flexShrink",
              "float",
              "zIndex",
              "gridColumnStart",
              "gridColumnEnd",
              "gridRowStart",
              "gridRowEnd",
              "gridArea",
              "justifySelf",
              "alignSelf",
              "placeSelf",
              "order",
            ],
            Nt = Rt.concat([
              pt,
              ft,
              "boxSizing",
              "max" + xt,
              "maxHeight",
              "position",
              bt,
              yt,
              yt + gt,
              yt + ht,
              yt + vt,
              yt + mt,
            ]),
            Bt = /([A-Z])/g,
            Ht = function (e) {
              if (e) {
                var t,
                  n,
                  r = e.t.style,
                  i = e.length,
                  s = 0;
                for (
                  (e.t._gsap || Ce.core.getCache(e.t)).uncache = 1;
                  s < i;
                  s += 2
                )
                  (n = e[s + 1]),
                    (t = e[s]),
                    n
                      ? (r[t] = n)
                      : r[t] &&
                        r.removeProperty(t.replace(Bt, "-$1").toLowerCase());
              }
            },
            Wt = { left: 0, top: 0 },
            qt = /(webkit|moz|length|cssText|inset)/i,
            Xt =
              ((Yt.prototype.init = function (e, t) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  lt)
                ) {
                  var n,
                    i,
                    s,
                    o,
                    a,
                    l,
                    d,
                    p,
                    f,
                    h,
                    m,
                    g,
                    v,
                    y,
                    b,
                    x,
                    _,
                    w,
                    T,
                    S,
                    E,
                    C,
                    k,
                    L,
                    M,
                    P,
                    O,
                    z,
                    D,
                    I,
                    R,
                    N,
                    B,
                    H,
                    X,
                    Y,
                    U,
                    ae,
                    ue = (e = re(
                      K(e) || Z(e) || e.nodeType ? { trigger: e } : e,
                      St
                    )).onUpdate,
                    fe = e.toggleClass,
                    me = e.id,
                    ye = e.onToggle,
                    be = e.onRefresh,
                    xe = e.scrub,
                    ke = e.trigger,
                    Oe = e.pin,
                    ze = e.pinSpacing,
                    Fe = e.invalidateOnRefresh,
                    Be = e.anticipatePin,
                    We = e.onScrubComplete,
                    qe = e.onSnapComplete,
                    Xe = e.once,
                    Ge = e.snap,
                    Ve = e.pinReparent,
                    Ue = e.pinSpacer,
                    Ke = e.containerAnimation,
                    Qe = e.fastScrollEnd,
                    Ze = e.preventOverlaps,
                    tt =
                      e.horizontal ||
                      (e.containerAnimation && !1 !== e.horizontal)
                        ? $
                        : F,
                    ot = !xe && 0 !== xe,
                    ut = c(e.scroller || Le),
                    dt = Ce.core.getCache(ut),
                    Et = j(ut),
                    Ct =
                      "fixed" ===
                      ("pinType" in e
                        ? e.pinType
                        : r(ut, "pinType") || (Et && "fixed")),
                    Mt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    Pt = ot && e.toggleActions.split(" "),
                    At = "markers" in e ? e.markers : St.markers,
                    Ot = Et
                      ? 0
                      : parseFloat(ne(ut)["border" + tt.p2 + xt]) || 0,
                    zt = this,
                    Dt =
                      e.onRefreshInit &&
                      function () {
                        return e.onRefreshInit(zt);
                      },
                    It = (function (e, t, n) {
                      var i = n.d,
                        s = n.d2,
                        o = n.a;
                      return (o = r(e, "getBoundingClientRect"))
                        ? function () {
                            return o()[i];
                          }
                        : function () {
                            return (t ? Le["inner" + s] : e["client" + s]) || 0;
                          };
                    })(ut, Et, tt),
                    Ft = (function (e, t) {
                      return !t || ~A.indexOf(e)
                        ? G(e)
                        : function () {
                            return Wt;
                          };
                    })(ut, Et),
                    Rt = 0,
                    Nt = 0,
                    Bt = u(ut, tt);
                  if (
                    (Je(zt),
                    (zt._dir = tt),
                    (Be *= 45),
                    (zt.scroller = ut),
                    (zt.scroll = Ke ? Ke.time.bind(Ke) : Bt),
                    (o = Bt()),
                    (zt.vars = e),
                    (t = t || e.animation),
                    "refreshPriority" in e &&
                      ((Ye = 1), -9999 === e.refreshPriority && (rt = zt)),
                    (dt.tweenScroll = dt.tweenScroll || {
                      top: Ee(ut, F),
                      left: Ee(ut, $),
                    }),
                    (zt.tweenTo = n = dt.tweenScroll[tt.p]),
                    (zt.scrubDuration = function (e) {
                      (R = Z(e) && e)
                        ? I
                          ? I.duration(e)
                          : (I = Ce.to(t, {
                              ease: "expo",
                              totalProgress: "+=0.001",
                              duration: R,
                              paused: !0,
                              onComplete: function () {
                                return We && We(zt);
                              },
                            }))
                        : (I && I.progress(1).kill(), (I = 0));
                    }),
                    t &&
                      ((t.vars.lazy = !1),
                      t._initted ||
                        (!1 !== t.vars.immediateRender &&
                          !1 !== e.immediateRender &&
                          t.render(0, !0, !0)),
                      (zt.animation = t.pause()),
                      (t.scrollTrigger = zt).scrubDuration(xe),
                      (z = 0),
                      (me = me || t.vars.id)),
                    kt.push(zt),
                    Ge &&
                      ((J(Ge) && !Ge.push) || (Ge = { snapTo: Ge }),
                      "scrollBehavior" in Ae.style &&
                        Ce.set(Et ? [Ae, Pe] : ut, { scrollBehavior: "auto" }),
                      (s = Q(Ge.snapTo)
                        ? Ge.snapTo
                        : "labels" === Ge.snapTo
                        ? (function (e) {
                            return function (t) {
                              return Ce.utils.snap(se(e), t);
                            };
                          })(t)
                        : "labelsDirectional" === Ge.snapTo
                        ? (function (e) {
                            return function (t, n) {
                              return oe(se(e))(t, n.direction);
                            };
                          })(t)
                        : !1 !== Ge.directional
                        ? function (e, t) {
                            return oe(Ge.snapTo)(
                              e,
                              st() - Nt < 500 ? 0 : t.direction
                            );
                          }
                        : Ce.utils.snap(Ge.snapTo)),
                      (N = J((N = Ge.duration || { min: 0.1, max: 2 }))
                        ? Ie(N.min, N.max)
                        : Ie(N, N)),
                      (B = Ce.delayedCall(
                        Ge.delay || R / 2 || 0.1,
                        function () {
                          var e = Bt(),
                            r = st() - Nt < 500,
                            i = n.tween;
                          if (
                            !(r || Math.abs(zt.getVelocity()) < 10) ||
                            i ||
                            Ne ||
                            Rt === e
                          )
                            zt.isActive && Rt !== e && B.restart(!0);
                          else {
                            var o = (e - l) / v,
                              a = t && !ot ? t.totalProgress() : o,
                              c = r ? 0 : ((a - D) / (st() - $e)) * 1e3 || 0,
                              u = Ce.utils.clamp(
                                -o,
                                1 - o,
                                (ct(c / 2) * c) / 0.185
                              ),
                              p = o + (!1 === Ge.inertia ? 0 : u),
                              f = Ie(0, 1, s(p, zt)),
                              h = Math.round(l + f * v),
                              m = Ge.onStart,
                              g = Ge.onInterrupt,
                              y = Ge.onComplete;
                            if (e <= d && l <= e && h !== e) {
                              if (i && !i._initted && i.data <= ct(h - e))
                                return;
                              !1 === Ge.inertia && (u = f - o),
                                n(
                                  h,
                                  {
                                    duration: N(
                                      ct(
                                        (0.185 *
                                          Math.max(ct(p - a), ct(f - a))) /
                                          c /
                                          0.05 || 0
                                      )
                                    ),
                                    ease: Ge.ease || "power3",
                                    data: ct(h - e),
                                    onInterrupt: function () {
                                      return B.restart(!0) && g && g(zt);
                                    },
                                    onComplete: function () {
                                      zt.update(),
                                        (Rt = Bt()),
                                        (z = D =
                                          t && !ot
                                            ? t.totalProgress()
                                            : zt.progress),
                                        qe && qe(zt),
                                        y && y(zt);
                                    },
                                  },
                                  e,
                                  u * v,
                                  h - e - u * v
                                ),
                                m && m(zt, n.tween);
                            }
                          }
                        }
                      ).pause())),
                    me && (Lt[me] = zt),
                    (ae =
                      (ae =
                        (ke = zt.trigger = c(ke || Oe)) &&
                        ke._gsap &&
                        ke._gsap.stRevert) && ae(zt)),
                    (Oe = !0 === Oe ? ke : c(Oe)),
                    K(fe) && (fe = { targets: ke, className: fe }),
                    Oe &&
                      (!1 === ze ||
                        ze === bt ||
                        (ze =
                          !(!ze && "flex" === ne(Oe.parentNode).display) && yt),
                      (zt.pin = Oe),
                      !1 !== e.force3D && Ce.set(Oe, { force3D: !0 }),
                      (i = Ce.core.getCache(Oe)).spacer
                        ? (y = i.pinState)
                        : (Ue &&
                            ((Ue = c(Ue)) &&
                              !Ue.nodeType &&
                              (Ue = Ue.current || Ue.nativeElement),
                            (i.spacerIsNative = !!Ue),
                            Ue && (i.spacerState = we(Ue))),
                          (i.spacer = _ = Ue || Me.createElement("div")),
                          _.classList.add("pin-spacer"),
                          me && _.classList.add("pin-spacer-" + me),
                          (i.pinState = y = we(Oe))),
                      (zt.spacer = _ = i.spacer),
                      (O = ne(Oe)),
                      (k = O[ze + tt.os2]),
                      (T = Ce.getProperty(Oe)),
                      (S = Ce.quickSetter(Oe, tt.a, _t)),
                      _e(Oe, _, O),
                      (x = we(Oe))),
                    At)
                  ) {
                    (g = J(At) ? re(At, Tt) : Tt),
                      (h = pe("scroller-start", me, ut, tt, g, 0)),
                      (m = pe("scroller-end", me, ut, tt, g, 0, h)),
                      (w = h["offset" + tt.op.d2]);
                    var qt = c(r(ut, "content") || ut);
                    (p = this.markerStart =
                      pe("start", me, qt, tt, g, w, 0, Ke)),
                      (f = this.markerEnd = pe("end", me, qt, tt, g, w, 0, Ke)),
                      Ke && (U = Ce.quickSetter([p, f], tt.a, _t)),
                      Ct ||
                        (A.length && !0 === r(ut, "fixedMarkers")) ||
                        ((function (e) {
                          var t = ne(e).position;
                          e.style.position =
                            "absolute" === t || "fixed" === t ? t : "relative";
                        })(Et ? Ae : ut),
                        Ce.set([h, m], { force3D: !0 }),
                        (M = Ce.quickSetter(h, tt.a, _t)),
                        (P = Ce.quickSetter(m, tt.a, _t)));
                  }
                  if (Ke) {
                    var Xt = Ke.vars.onUpdate,
                      jt = Ke.vars.onUpdateParams;
                    Ke.eventCallback("onUpdate", function () {
                      zt.update(0, 0, 1), Xt && Xt.apply(jt || []);
                    });
                  }
                  (zt.previous = function () {
                    return kt[kt.indexOf(zt) - 1];
                  }),
                    (zt.next = function () {
                      return kt[kt.indexOf(zt) + 1];
                    }),
                    (zt.revert = function (e, n) {
                      if (!n) return zt.kill(!0);
                      var r = !1 !== e || !zt.enabled,
                        i = Re;
                      r !== zt.isReverted &&
                        (r &&
                          (zt.scroll.rec ||
                            (!Re && !nt) ||
                            ((zt.scroll.rec = Bt()), nt && Bt(0)),
                          (X = Math.max(Bt(), zt.scroll.rec || 0)),
                          (H = zt.progress),
                          (Y = t && t.progress())),
                        p &&
                          [p, f, h, m].forEach(function (e) {
                            return (e.style.display = r ? "none" : "block");
                          }),
                        r && (Re = 1),
                        zt.update(r),
                        (Re = i),
                        Oe &&
                          (r
                            ? (function (e, t, n) {
                                Ht(n);
                                var r = e._gsap;
                                if (r.spacerIsNative) Ht(r.spacerState);
                                else if (e._gsap.swappedIn) {
                                  var i = t.parentNode;
                                  i && (i.insertBefore(e, t), i.removeChild(t));
                                }
                                e._gsap.swappedIn = !1;
                              })(Oe, _, y)
                            : (Ve && zt.isActive) || _e(Oe, _, ne(Oe), L)),
                        (zt.isReverted = r));
                    }),
                    (zt.refresh = function (r, i) {
                      if ((!Re && zt.enabled) || i)
                        if (Oe && r && at) le(Yt, "scrollEnd", ve);
                        else {
                          !nt && Dt && Dt(zt),
                            (Re = 1),
                            (Nt = st()),
                            n.tween && (n.tween.kill(), (n.tween = 0)),
                            I && I.pause(),
                            Fe && t && t.revert().invalidate(),
                            zt.isReverted || zt.revert(!0, !0);
                          for (
                            var s,
                              g,
                              w,
                              S,
                              k,
                              M,
                              P,
                              A,
                              O,
                              z,
                              D = It(),
                              R = Ft(),
                              N = Ke ? Ke.duration() : V(ut, tt),
                              W = 0,
                              q = 0,
                              j = e.end,
                              G = e.endTrigger || ke,
                              U =
                                e.start ||
                                (0 !== e.start && ke
                                  ? Oe
                                    ? "0 0"
                                    : "0 100%"
                                  : 0),
                              J = (zt.pinnedContainer =
                                e.pinnedContainer && c(e.pinnedContainer)),
                              ee = (ke && Math.max(0, kt.indexOf(zt))) || 0,
                              te = ee;
                            te--;

                          )
                            (M = kt[te]).end || M.refresh(0, 1) || (Re = 1),
                              !(P = M.pin) ||
                                (P !== ke && P !== Oe) ||
                                M.isReverted ||
                                ((z = z || []).unshift(M), M.revert(!0, !0)),
                              M !== kt[te] && (ee--, te--);
                          for (
                            Q(U) && (U = U(zt)),
                              l =
                                Te(
                                  U,
                                  ke,
                                  D,
                                  tt,
                                  Bt(),
                                  p,
                                  h,
                                  zt,
                                  R,
                                  Ot,
                                  Ct,
                                  N,
                                  Ke
                                ) || (Oe ? -0.001 : 0),
                              Q(j) && (j = j(zt)),
                              K(j) &&
                                !j.indexOf("+=") &&
                                (~j.indexOf(" ")
                                  ? (j = (K(U) ? U.split(" ")[0] : "") + j)
                                  : ((W = de(j.substr(2), D)),
                                    (j = K(U) ? U : l + W),
                                    (G = ke))),
                              d =
                                Math.max(
                                  l,
                                  Te(
                                    j || (G ? "100% 0" : N),
                                    G,
                                    D,
                                    tt,
                                    Bt() + W,
                                    f,
                                    m,
                                    zt,
                                    R,
                                    Ot,
                                    Ct,
                                    N,
                                    Ke
                                  )
                                ) || -0.001,
                              v = d - l || ((l -= 0.01) && 0.001),
                              W = 0,
                              te = ee;
                            te--;

                          )
                            (P = (M = kt[te]).pin) &&
                              M.start - M._pinPush < l &&
                              !Ke &&
                              0 < M.end &&
                              ((s = M.end - M.start),
                              (P !== ke && P !== J) ||
                                Z(U) ||
                                (W += s * (1 - M.progress)),
                              P === Oe && (q += s));
                          if (
                            ((l += W),
                            (d += W),
                            (zt._pinPush = q),
                            p &&
                              W &&
                              (((s = {})[tt.a] = "+=" + W),
                              J && (s[tt.p] = "-=" + Bt()),
                              Ce.set([p, f], s)),
                            Oe)
                          )
                            (s = ne(Oe)),
                              (S = tt === F),
                              (w = Bt()),
                              (E = parseFloat(T(tt.a)) + q),
                              !N &&
                                1 < d &&
                                ((Et ? Ae : ut).style["overflow-" + tt.a] =
                                  "scroll"),
                              _e(Oe, _, s),
                              (x = we(Oe)),
                              (g = wt(Oe, !0)),
                              (A = Ct && u(ut, S ? $ : F)()),
                              ze &&
                                (((L = [ze + tt.os2, v + q + _t]).t = _),
                                (te = ze === yt ? ie(Oe, tt) + v + q : 0) &&
                                  L.push(tt.d, te + _t),
                                Ht(L),
                                Ct && Bt(X)),
                              Ct &&
                                (((k = {
                                  top: g.top + (S ? w - l : A) + _t,
                                  left: g.left + (S ? A : w - l) + _t,
                                  boxSizing: "border-box",
                                  position: "fixed",
                                })[pt] = k.maxWidth =
                                  Math.ceil(g.width) + _t),
                                (k[ft] = k.maxHeight =
                                  Math.ceil(g.height) + _t),
                                (k[bt] =
                                  k[bt + gt] =
                                  k[bt + ht] =
                                  k[bt + vt] =
                                  k[bt + mt] =
                                    "0"),
                                (k[yt] = s[yt]),
                                (k[yt + gt] = s[yt + gt]),
                                (k[yt + ht] = s[yt + ht]),
                                (k[yt + vt] = s[yt + vt]),
                                (k[yt + mt] = s[yt + mt]),
                                (b = (function (e, t, n) {
                                  for (
                                    var r, i = [], s = e.length, o = n ? 8 : 0;
                                    o < s;
                                    o += 2
                                  )
                                    (r = e[o]),
                                      i.push(r, r in t ? t[r] : e[o + 1]);
                                  return (i.t = e.t), i;
                                })(y, k, Ve)),
                                nt && Bt(0)),
                              t
                                ? ((O = t._initted),
                                  je(1),
                                  t.render(t.duration(), !0, !0),
                                  (C = T(tt.a) - E + v + q),
                                  v !== C && Ct && b.splice(b.length - 2, 2),
                                  t.render(0, !0, !0),
                                  O || t.invalidate(),
                                  je(0))
                                : (C = v);
                          else if (ke && Bt() && !Ke)
                            for (g = ke.parentNode; g && g !== Ae; )
                              g._pinOffset &&
                                ((l -= g._pinOffset), (d -= g._pinOffset)),
                                (g = g.parentNode);
                          z &&
                            z.forEach(function (e) {
                              return e.revert(!1, !0);
                            }),
                            (zt.start = l),
                            (zt.end = d),
                            (o = a = Bt()),
                            Ke || nt || (o < X && Bt(X), (zt.scroll.rec = 0)),
                            zt.revert(!1, !0),
                            B &&
                              ((Rt = -1),
                              zt.isActive && Bt(l + v * H),
                              B.restart(!0)),
                            (Re = 0),
                            t &&
                              ot &&
                              (t._initted || Y) &&
                              t.progress() !== Y &&
                              t.progress(Y, !0).render(t.time(), !0, !0),
                            (H === zt.progress && !Ke) ||
                              (t && !ot && t.totalProgress(H, !0),
                              (zt.progress = (o - l) / v === H ? 0 : H)),
                            Oe &&
                              ze &&
                              (_._pinOffset = Math.round(zt.progress * C)),
                            be && be(zt);
                        }
                    }),
                    (zt.getVelocity = function () {
                      return ((Bt() - a) / (st() - $e)) * 1e3 || 0;
                    }),
                    (zt.endAnimation = function () {
                      ee(zt.callbackAnimation),
                        t &&
                          (I
                            ? I.progress(1)
                            : t.paused()
                            ? ot || ee(t, zt.direction < 0, 1)
                            : ee(t, t.reversed()));
                    }),
                    (zt.labelToScroll = function (e) {
                      return (
                        (t &&
                          t.labels &&
                          (l || zt.refresh() || l) +
                            (t.labels[e] / t.duration()) * v) ||
                        0
                      );
                    }),
                    (zt.getTrailing = function (e) {
                      var t = kt.indexOf(zt),
                        n =
                          0 < zt.direction
                            ? kt.slice(0, t).reverse()
                            : kt.slice(t + 1);
                      return (
                        K(e)
                          ? n.filter(function (t) {
                              return t.vars.preventOverlaps === e;
                            })
                          : n
                      ).filter(function (e) {
                        return 0 < zt.direction ? e.end <= l : e.start >= d;
                      });
                    }),
                    (zt.update = function (e, r, i) {
                      if (!Ke || i || e) {
                        var s,
                          c,
                          u,
                          p,
                          f,
                          m,
                          g,
                          y = zt.scroll(),
                          w = e ? 0 : (y - l) / v,
                          T = w < 0 ? 0 : 1 < w ? 1 : w || 0,
                          L = zt.progress;
                        if (
                          (r &&
                            ((a = o),
                            (o = Ke ? Bt() : y),
                            Ge &&
                              ((D = z),
                              (z = t && !ot ? t.totalProgress() : T))),
                          Be &&
                            !T &&
                            Oe &&
                            !Re &&
                            !it &&
                            at &&
                            l < y + ((y - a) / (st() - $e)) * Be &&
                            (T = 1e-4),
                          T !== L && zt.enabled)
                        ) {
                          if (
                            ((p =
                              (f =
                                (s = zt.isActive = !!T && T < 1) !=
                                (!!L && L < 1)) || !!T != !!L),
                            (zt.direction = L < T ? 1 : -1),
                            (zt.progress = T),
                            p &&
                              !Re &&
                              ((c =
                                T && !L ? 0 : 1 === T ? 1 : 1 === L ? 2 : 3),
                              ot &&
                                ((u =
                                  (!f && "none" !== Pt[c + 1] && Pt[c + 1]) ||
                                  Pt[c]),
                                (g =
                                  t &&
                                  ("complete" === u ||
                                    "reset" === u ||
                                    u in t)))),
                            Ze &&
                              (f || g) &&
                              (g || xe || !t) &&
                              (Q(Ze)
                                ? Ze(zt)
                                : zt.getTrailing(Ze).forEach(function (e) {
                                    return e.endAnimation();
                                  })),
                            ot ||
                              (!I || Re || it
                                ? t && t.totalProgress(T, !!Re)
                                : ((Ke || (rt && rt !== zt)) &&
                                    I.render(I._dp._time - I._start),
                                  I.resetTo
                                    ? I.resetTo(
                                        "totalProgress",
                                        T,
                                        t._tTime / t._tDur
                                      )
                                    : ((I.vars.totalProgress = T),
                                      I.invalidate().restart()))),
                            Oe)
                          )
                            if ((e && ze && (_.style[ze + tt.os2] = k), Ct)) {
                              if (p) {
                                if (
                                  ((m =
                                    !e &&
                                    L < T &&
                                    y < d + 1 &&
                                    y + 1 >= V(ut, tt)),
                                  Ve)
                                )
                                  if (e || (!s && !m)) Se(Oe, _);
                                  else {
                                    var A = wt(Oe, !0),
                                      O = y - l;
                                    Se(
                                      Oe,
                                      Ae,
                                      A.top + (tt === F ? O : 0) + _t,
                                      A.left + (tt === F ? 0 : O) + _t
                                    );
                                  }
                                Ht(s || m ? b : x),
                                  (C !== v && T < 1 && s) ||
                                    S(E + (1 !== T || m ? 0 : C));
                              }
                            } else S(q(E + C * T));
                          !Ge || n.tween || Re || it || B.restart(!0),
                            fe &&
                              (f || (Xe && T && (T < 1 || !et))) &&
                              De(fe.targets).forEach(function (e) {
                                return e.classList[s || Xe ? "add" : "remove"](
                                  fe.className
                                );
                              }),
                            !ue || ot || e || ue(zt),
                            p && !Re
                              ? (ot &&
                                  (g &&
                                    ("complete" === u
                                      ? t.pause().totalProgress(1)
                                      : "reset" === u
                                      ? t.restart(!0).pause()
                                      : "restart" === u
                                      ? t.restart(!0)
                                      : t[u]()),
                                  ue && ue(zt)),
                                (!f && et) ||
                                  (ye && f && te(zt, ye),
                                  Mt[c] && te(zt, Mt[c]),
                                  Xe &&
                                    (1 === T ? zt.kill(!1, 1) : (Mt[c] = 0)),
                                  f ||
                                    (Mt[(c = 1 === T ? 1 : 3)] &&
                                      te(zt, Mt[c]))),
                                Qe &&
                                  !s &&
                                  Math.abs(zt.getVelocity()) >
                                    (Z(Qe) ? Qe : 2500) &&
                                  (ee(zt.callbackAnimation),
                                  I
                                    ? I.progress(1)
                                    : ee(t, "reverse" === u ? 1 : !T, 1)))
                              : ot && ue && !Re && ue(zt);
                        }
                        if (P) {
                          var $ = Ke
                            ? (y / Ke.duration()) * (Ke._caScrollDist || 0)
                            : y;
                          M($ + (h._isFlipped ? 1 : 0)), P($);
                        }
                        U && U((-y / Ke.duration()) * (Ke._caScrollDist || 0));
                      }
                    }),
                    (zt.enable = function (e, t) {
                      zt.enabled ||
                        ((zt.enabled = !0),
                        le(ut, "resize", ge),
                        le(Et ? Me : ut, "scroll", he),
                        Dt && le(Yt, "refreshInit", Dt),
                        !1 !== e &&
                          ((zt.progress = H = 0), (o = a = Rt = Bt())),
                        !1 !== t && zt.refresh());
                    }),
                    (zt.getTween = function (e) {
                      return e && n ? n.tween : I;
                    }),
                    (zt.setPositions = function (e, t) {
                      Oe && ((E += e - l), (C += t - e - v)),
                        (zt.start = l = e),
                        (zt.end = d = t),
                        (v = t - e),
                        zt.update();
                    }),
                    (zt.disable = function (e, t) {
                      if (
                        zt.enabled &&
                        (!1 !== e && zt.revert(!0, !0),
                        (zt.enabled = zt.isActive = !1),
                        t || (I && I.pause()),
                        (X = 0),
                        i && (i.uncache = 1),
                        Dt && ce(Yt, "refreshInit", Dt),
                        B &&
                          (B.pause(),
                          n.tween && n.tween.kill() && (n.tween = 0)),
                        !Et)
                      ) {
                        for (var r = kt.length; r--; )
                          if (kt[r].scroller === ut && kt[r] !== zt) return;
                        ce(ut, "resize", ge), ce(ut, "scroll", he);
                      }
                    }),
                    (zt.kill = function (n, r) {
                      zt.disable(n, r),
                        I && !r && I.kill(),
                        me && delete Lt[me];
                      var s = kt.indexOf(zt);
                      0 <= s && kt.splice(s, 1),
                        s === He && 0 < $t && He--,
                        (s = 0),
                        kt.forEach(function (e) {
                          return e.scroller === zt.scroller && (s = 1);
                        }),
                        s || nt || (zt.scroll.rec = 0),
                        t &&
                          ((t.scrollTrigger = null),
                          n && t.render(-1),
                          r || t.kill()),
                        p &&
                          [p, f, h, m].forEach(function (e) {
                            return e.parentNode && e.parentNode.removeChild(e);
                          }),
                        rt === zt && (rt = 0),
                        Oe &&
                          (i && (i.uncache = 1),
                          (s = 0),
                          kt.forEach(function (e) {
                            return e.pin === Oe && s++;
                          }),
                          s || (i.spacer = 0)),
                        e.onKill && e.onKill(zt);
                    }),
                    zt.enable(!1, !1),
                    ae && ae(zt),
                    t && t.add && !v
                      ? Ce.delayedCall(0.01, function () {
                          return l || d || zt.refresh();
                        }) &&
                        (v = 0.01) &&
                        (l = d = 0)
                      : zt.refresh();
                } else this.update = this.refresh = this.kill = W;
              }),
              (Yt.register = function (e) {
                return (
                  ke ||
                    ((Ce = e || Y()),
                    X() && window.document && Yt.enable(),
                    (ke = lt)),
                  ke
                );
              }),
              (Yt.defaults = function (e) {
                if (e) for (var t in e) St[t] = e[t];
                return St;
              }),
              (Yt.disable = function (e, t) {
                (lt = 0),
                  kt.forEach(function (n) {
                    return n[t ? "kill" : "disable"](e);
                  }),
                  ce(Le, "wheel", he),
                  ce(Me, "scroll", he),
                  clearInterval(Fe),
                  ce(Me, "touchcancel", W),
                  ce(Ae, "touchstart", W),
                  ae(ce, Me, "pointerdown,touchstart,mousedown", B),
                  ae(ce, Me, "pointerup,touchend,mouseup", H),
                  ze.kill(),
                  U(ce);
                for (var n = 0; n < P.length; n += 3)
                  ue(ce, P[n], P[n + 1]), ue(ce, P[n], P[n + 2]);
              }),
              (Yt.enable = function () {
                if (
                  ((Le = window),
                  (Me = document),
                  (Pe = Me.documentElement),
                  (Ae = Me.body),
                  Ce &&
                    ((De = Ce.utils.toArray),
                    (Ie = Ce.utils.clamp),
                    (Je = Ce.core.context || W),
                    (je = Ce.core.suppressOverwrites || W),
                    Ce.core.globals("ScrollTrigger", Yt),
                    Ae))
                ) {
                  (lt = 1),
                    R.register(Ce),
                    (Yt.isTouch = R.isTouch),
                    (Ze =
                      R.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    le(Le, "wheel", he),
                    (Oe = [Le, Me, Pe, Ae]),
                    Ce.matchMedia
                      ? ((Yt.matchMedia = function (e) {
                          var t,
                            n = Ce.matchMedia();
                          for (t in e) n.add(t, e[t]);
                          return n;
                        }),
                        Ce.addEventListener("matchMediaInit", function () {
                          return be();
                        }),
                        Ce.addEventListener("matchMediaRevert", function () {
                          return ye();
                        }),
                        Ce.addEventListener("matchMedia", function () {
                          Dt(0, 1), At("matchMedia");
                        }),
                        Ce.matchMedia("(orientation: portrait)", function () {
                          return me(), me;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    le(Me, "scroll", he);
                  var e,
                    t,
                    n = Ae.style,
                    r = n.borderTopStyle,
                    i = Ce.core.Animation.prototype;
                  for (
                    i.revert ||
                      Object.defineProperty(i, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      n.borderTopStyle = "solid",
                      e = wt(Ae),
                      F.m = Math.round(e.top + F.sc()) || 0,
                      $.m = Math.round(e.left + $.sc()) || 0,
                      r
                        ? (n.borderTopStyle = r)
                        : n.removeProperty("border-top-style"),
                      Fe = setInterval(fe, 250),
                      Ce.delayedCall(0.5, function () {
                        return (it = 0);
                      }),
                      le(Me, "touchcancel", W),
                      le(Ae, "touchstart", W),
                      ae(le, Me, "pointerdown,touchstart,mousedown", B),
                      ae(le, Me, "pointerup,touchend,mouseup", H),
                      Be = Ce.utils.checkPrefix("transform"),
                      Nt.push(Be),
                      ke = st(),
                      ze = Ce.delayedCall(0.2, Dt).pause(),
                      Xe = [
                        Me,
                        "visibilitychange",
                        function () {
                          var e = Le.innerWidth,
                            t = Le.innerHeight;
                          Me.hidden
                            ? ((We = e), (qe = t))
                            : (We === e && qe === t) || ge();
                        },
                        Me,
                        "DOMContentLoaded",
                        Dt,
                        Le,
                        "load",
                        Dt,
                        Le,
                        "resize",
                        ge,
                      ],
                      U(le),
                      kt.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      t = 0;
                    t < P.length;
                    t += 3
                  )
                    ue(ce, P[t], P[t + 1]), ue(ce, P[t], P[t + 2]);
                }
              }),
              (Yt.config = function (e) {
                "limitCallbacks" in e && (et = !!e.limitCallbacks);
                var t = e.syncInterval;
                (t && clearInterval(Fe)) || ((Fe = t) && setInterval(fe, t)),
                  "ignoreMobileResize" in e &&
                    (Ue = 1 === Yt.isTouch && e.ignoreMobileResize),
                  "autoRefreshEvents" in e &&
                    (U(ce) || U(le, e.autoRefreshEvents || "none"),
                    (Ge = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
              }),
              (Yt.scrollerProxy = function (e, t) {
                var n = c(e),
                  r = P.indexOf(n),
                  i = j(n);
                ~r && P.splice(r, i ? 6 : 2),
                  t && (i ? A.unshift(Le, t, Ae, t, Pe, t) : A.unshift(n, t));
              }),
              (Yt.clearMatchMedia = function (e) {
                kt.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (Yt.isInViewport = function (e, t, n) {
                var r = (K(e) ? c(e) : e).getBoundingClientRect(),
                  i = r[n ? pt : ft] * t || 0;
                return n
                  ? 0 < r.right - i && r.left + i < Le.innerWidth
                  : 0 < r.bottom - i && r.top + i < Le.innerHeight;
              }),
              (Yt.positionInViewport = function (e, t, n) {
                K(e) && (e = c(e));
                var r = e.getBoundingClientRect(),
                  i = r[n ? pt : ft],
                  s =
                    null == t
                      ? i / 2
                      : t in Et
                      ? Et[t] * i
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
                return n
                  ? (r.left + s) / Le.innerWidth
                  : (r.top + s) / Le.innerHeight;
              }),
              (Yt.killAll = function (e) {
                if (
                  (kt.forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = Mt.killAll || [];
                  (Mt = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              Yt);
          function Yt(e, t) {
            ke ||
              Yt.register(Ce) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              this.init(e, t);
          }
          function jt(e, t, n, r) {
            return (
              r < t ? e(r) : t < 0 && e(0),
              r < n ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
            );
          }
          function Gt(e, t) {
            !0 === t
              ? e.style.removeProperty("touch-action")
              : (e.style.touchAction =
                  !0 === t
                    ? "auto"
                    : t
                    ? "pan-" + t + (R.isTouch ? " pinch-zoom" : "")
                    : "none"),
              e === Pe && Gt(Ae, t);
          }
          function Vt(e) {
            var t,
              n = e.event,
              r = e.target,
              i = e.axis,
              s = (n.changedTouches ? n.changedTouches[0] : n).target,
              o = s._gsap || Ce.core.getCache(s),
              a = st();
            if (!o._isScrollT || 2e3 < a - o._isScrollT) {
              for (; s && s.scrollHeight <= s.clientHeight; ) s = s.parentNode;
              (o._isScroll =
                s &&
                !j(s) &&
                s !== r &&
                (Qt[(t = ne(s)).overflowY] || Qt[t.overflowX])),
                (o._isScrollT = a);
            }
            (!o._isScroll && "x" !== i) ||
              (n.stopPropagation(), (n._gsapAllow = !0));
          }
          function Ut(e, t, n, r) {
            return R.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (r = r && Vt),
              onPress: r,
              onDrag: r,
              onScroll: r,
              onEnable: function () {
                return n && le(Me, R.eventTypes[0], Jt, !1, !0);
              },
              onDisable: function () {
                return ce(Me, R.eventTypes[0], Jt, !0);
              },
            });
          }
          (Xt.version = "3.11.2"),
            (Xt.saveStyles = function (e) {
              return e
                ? De(e).forEach(function (e) {
                    if (e && e.style) {
                      var t = Ot.indexOf(e);
                      0 <= t && Ot.splice(t, 5),
                        Ot.push(
                          e,
                          e.style.cssText,
                          e.getBBox && e.getAttribute("transform"),
                          Ce.core.getCache(e),
                          Je()
                        );
                    }
                  })
                : Ot;
            }),
            (Xt.revert = function (e, t) {
              return be(!e, t);
            }),
            (Xt.create = function (e, t) {
              return new Xt(e, t);
            }),
            (Xt.refresh = function (e) {
              return e ? ge() : (ke || Xt.register()) && Dt(!0);
            }),
            (Xt.update = Ft),
            (Xt.clearScrollMemory = xe),
            (Xt.maxScroll = function (e, t) {
              return V(e, t ? $ : F);
            }),
            (Xt.getScrollFunc = function (e, t) {
              return u(c(e), t ? $ : F);
            }),
            (Xt.getById = function (e) {
              return Lt[e];
            }),
            (Xt.getAll = function () {
              return kt.filter(function (e) {
                return "ScrollSmoother" !== e.vars.id;
              });
            }),
            (Xt.isScrolling = function () {
              return !!at;
            }),
            (Xt.snapDirectional = oe),
            (Xt.addEventListener = function (e, t) {
              var n = Mt[e] || (Mt[e] = []);
              ~n.indexOf(t) || n.push(t);
            }),
            (Xt.removeEventListener = function (e, t) {
              var n = Mt[e],
                r = n && n.indexOf(t);
              0 <= r && n.splice(r, 1);
            }),
            (Xt.batch = function (e, t) {
              function n(e, t) {
                var n = [],
                  r = [],
                  i = Ce.delayedCall(o, function () {
                    t(n, r), (n = []), (r = []);
                  }).pause();
                return function (e) {
                  n.length || i.restart(!0),
                    n.push(e.trigger),
                    r.push(e),
                    a <= n.length && i.progress(1);
                };
              }
              var r,
                i = [],
                s = {},
                o = t.interval || 0.016,
                a = t.batchMax || 1e9;
              for (r in t)
                s[r] =
                  "on" === r.substr(0, 2) && Q(t[r]) && "onRefreshInit" !== r
                    ? n(0, t[r])
                    : t[r];
              return (
                Q(a) &&
                  ((a = a()),
                  le(Xt, "refresh", function () {
                    return (a = t.batchMax());
                  })),
                De(e).forEach(function (e) {
                  var t = {};
                  for (r in s) t[r] = s[r];
                  (t.trigger = e), i.push(Xt.create(t));
                }),
                i
              );
            });
          var Kt,
            Qt = { auto: 1, scroll: 1 },
            Zt = /(input|label|select|textarea)/i,
            Jt = function (e) {
              var t = Zt.test(e.target.tagName);
              (t || Kt) && ((e._gsapAllow = !0), (Kt = t));
            };
          (Xt.sort = function (e) {
            return kt.sort(
              e ||
                function (e, t) {
                  return (
                    -1e6 * (e.vars.refreshPriority || 0) +
                    e.start -
                    (t.start + -1e6 * (t.vars.refreshPriority || 0))
                  );
                }
            );
          }),
            (Xt.observe = function (e) {
              return new R(e);
            }),
            (Xt.normalizeScroll = function (e) {
              if (void 0 === e) return Ve;
              if (!0 === e && Ve) return Ve.enable();
              if (!1 === e) return Ve && Ve.kill();
              var t =
                e instanceof R
                  ? e
                  : (function (e) {
                      function t() {
                        return (l = !1);
                      }
                      function n() {
                        (o = V(y, F)),
                          (A = Ie(Ze ? 1 : 0, o)),
                          m && (M = Ie(0, V(y, $))),
                          (a = zt);
                      }
                      function r() {
                        (_._gsap.y =
                          q(parseFloat(_._gsap.y) + w.offset) + "px"),
                          (_.style.transform =
                            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                            parseFloat(_._gsap.y) +
                            ", 0, 1)"),
                          (w.offset = w.cacheID = 0);
                      }
                      function i() {
                        n(),
                          d.isActive() &&
                            d.vars.scrollY > o &&
                            (w() > o
                              ? d.progress(1) && w(o)
                              : d.resetTo("scrollY", o));
                      }
                      J(e) || (e = {}),
                        (e.preventDefault =
                          e.isNormalizer =
                          e.allowClicks =
                            !0),
                        e.type || (e.type = "wheel,touch"),
                        (e.debounce = !!e.debounce),
                        (e.id = e.id || "normalizer");
                      var s,
                        o,
                        a,
                        l,
                        d,
                        p,
                        f,
                        h,
                        m = e.normalizeScrollX,
                        g = e.momentum,
                        v = e.allowNestedScroll,
                        y = c(e.target) || Pe,
                        b = Ce.core.globals().ScrollSmoother,
                        x = b && b.get(),
                        _ =
                          Ze &&
                          ((e.content && c(e.content)) ||
                            (x &&
                              !1 !== e.content &&
                              !x.smooth() &&
                              x.content())),
                        w = u(y, F),
                        T = u(y, $),
                        S = 1,
                        E =
                          (R.isTouch && Le.visualViewport
                            ? Le.visualViewport.scale * Le.visualViewport.width
                            : Le.outerWidth) / Le.innerWidth,
                        C = 0,
                        k = Q(g)
                          ? function () {
                              return g(s);
                            }
                          : function () {
                              return g || 2.8;
                            },
                        L = Ut(y, e.type, !0, v),
                        M = W,
                        A = W;
                      return (
                        _ && Ce.set(_, { y: "+=0" }),
                        (e.ignoreCheck = function (e) {
                          return (
                            (Ze &&
                              "touchmove" === e.type &&
                              (function () {
                                if (l) {
                                  requestAnimationFrame(t);
                                  var e = q(s.deltaY / 2),
                                    n = A(w.v - e);
                                  if (_ && n !== w.v + w.offset) {
                                    w.offset = n - w.v;
                                    var i = q(
                                      (parseFloat(_ && _._gsap.y) || 0) -
                                        w.offset
                                    );
                                    (_.style.transform =
                                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                      i +
                                      ", 0, 1)"),
                                      (_._gsap.y = i + "px"),
                                      (w.cacheID = P.cache),
                                      Ft();
                                  }
                                  return !0;
                                }
                                w.offset && r(), (l = !0);
                              })()) ||
                            (1.05 < S && "touchstart" !== e.type) ||
                            s.isGesturing ||
                            (e.touches && 1 < e.touches.length)
                          );
                        }),
                        (e.onPress = function () {
                          var e = S;
                          (S = q(
                            ((Le.visualViewport && Le.visualViewport.scale) ||
                              1) / E
                          )),
                            d.pause(),
                            e !== S && Gt(y, 1.01 < S || (!m && "x")),
                            (p = T()),
                            (f = w()),
                            n(),
                            (a = zt);
                        }),
                        (e.onRelease = e.onGestureStart =
                          function (e, t) {
                            if ((w.offset && r(), t)) {
                              P.cache++;
                              var n,
                                s,
                                a = k();
                              m &&
                                ((s =
                                  (n = T()) +
                                  (0.05 * a * -e.velocityX) / 0.227),
                                (a *= jt(T, n, s, V(y, $))),
                                (d.vars.scrollX = M(s))),
                                (s =
                                  (n = w()) +
                                  (0.05 * a * -e.velocityY) / 0.227),
                                (a *= jt(w, n, s, V(y, F))),
                                (d.vars.scrollY = A(s)),
                                d.invalidate().duration(a).play(0.01),
                                ((Ze && d.vars.scrollY >= o) || o - 1 <= n) &&
                                  Ce.to({}, { onUpdate: i, duration: a });
                            } else h.restart(!0);
                          }),
                        (e.onWheel = function () {
                          d._ts && d.pause(),
                            1e3 < st() - C && ((a = 0), (C = st()));
                        }),
                        (e.onChange = function (e, t, i, s, o) {
                          if (
                            (zt !== a && n(),
                            t &&
                              m &&
                              T(
                                M(
                                  s[2] === t
                                    ? p + (e.startX - e.x)
                                    : T() + t - s[1]
                                )
                              ),
                            i)
                          ) {
                            w.offset && r();
                            var l = o[2] === i,
                              c = l ? f + e.startY - e.y : w() + i - o[1],
                              u = A(c);
                            l && c !== u && (f += u - c), w(u);
                          }
                          (i || t) && Ft();
                        }),
                        (e.onEnable = function () {
                          Gt(y, !m && "x"), le(Le, "resize", i), L.enable();
                        }),
                        (e.onDisable = function () {
                          Gt(y, !0), ce(Le, "resize", i), L.kill();
                        }),
                        (e.lockAxis = !1 !== e.lockAxis),
                        ((s = new R(e)).iOS = Ze) && !w() && w(1),
                        Ze && Ce.ticker.add(W),
                        (h = s._dc),
                        (d = Ce.to(s, {
                          ease: "power4",
                          paused: !0,
                          scrollX: m ? "+=0.1" : "+=0",
                          scrollY: "+=0.1",
                          onComplete: h.vars.onComplete,
                        })),
                        s
                      );
                    })(e);
              return (
                Ve && Ve.target === t.target && Ve.kill(),
                j(t.target) && (Ve = t),
                t
              );
            }),
            (Xt.core = {
              _getVelocityProp: d,
              _inputObserver: Ut,
              _scrollers: P,
              _proxies: A,
              bridge: {
                ss: function () {
                  at || At("scrollStart"), (at = st());
                },
                ref: function () {
                  return Re;
                },
              },
            }),
            Y() && Ce.registerPlugin(Xt),
            (e.ScrollTrigger = Xt),
            (e.default = Xt),
            "undefined" == typeof window || window !== e
              ? Object.defineProperty(e, "__esModule", { value: !0 })
              : delete e.default;
        })(t);
      },
      598: () => {
        function e(e) {
          var t = !0,
            n = !1,
            r = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function o(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function a(e) {
            t = !1;
          }
          function l() {
            document.addEventListener("mousemove", c),
              document.addEventListener("mousedown", c),
              document.addEventListener("mouseup", c),
              document.addEventListener("pointermove", c),
              document.addEventListener("pointerdown", c),
              document.addEventListener("pointerup", c),
              document.addEventListener("touchmove", c),
              document.addEventListener("touchstart", c),
              document.addEventListener("touchend", c);
          }
          function c(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", c),
              document.removeEventListener("mousedown", c),
              document.removeEventListener("mouseup", c),
              document.removeEventListener("pointermove", c),
              document.removeEventListener("pointerdown", c),
              document.removeEventListener("pointerup", c),
              document.removeEventListener("touchmove", c),
              document.removeEventListener("touchstart", c),
              document.removeEventListener("touchend", c));
          }
          document.addEventListener(
            "keydown",
            function (n) {
              n.metaKey ||
                n.altKey ||
                n.ctrlKey ||
                (s(e.activeElement) && o(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", a, !0),
            document.addEventListener("pointerdown", a, !0),
            document.addEventListener("touchstart", a, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (n && (t = !0), l());
              },
              !0
            ),
            l(),
            e.addEventListener(
              "focus",
              function (e) {
                var n, r, a;
                s(e.target) &&
                  (t ||
                    ((r = (n = e.target).type),
                    ("INPUT" === (a = n.tagName) && i[r] && !n.readOnly) ||
                      ("TEXTAREA" === a && !n.readOnly) ||
                      n.isContentEditable)) &&
                  o(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                s(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((n = !0),
                  window.clearTimeout(r),
                  (r = window.setTimeout(function () {
                    n = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
      949: (e) => {
        window,
          (e.exports = (function (e) {
            var t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var i = (t[r] = { i: r, l: !1, exports: {} });
              return (
                e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: r });
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var i in e)
                    n.d(
                      r,
                      i,
                      function (t) {
                        return e[t];
                      }.bind(null, i)
                    );
                return r;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = 0))
            );
          })([
            function (e, t, n) {
              "use strict";
              n.r(t);
              var r,
                i = "fslightbox-",
                s = "".concat(i, "styles"),
                o = "".concat(i, "cursor-grabbing"),
                a = "".concat(i, "full-dimension"),
                l = "".concat(i, "flex-centered"),
                c = "".concat(i, "open"),
                u = "".concat(i, "transform-transition"),
                d = "".concat(i, "absoluted"),
                p = "".concat(i, "slide-btn"),
                f = "".concat(p, "-container"),
                h = "".concat(i, "fade-in"),
                m = "".concat(i, "fade-out"),
                g = h + "-strong",
                v = m + "-strong",
                y = "".concat(i, "opacity-"),
                b = "".concat(y, "1"),
                x = "".concat(i, "source");
              function _(e) {
                return (_ =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function w(e) {
                var t,
                  n = e.props,
                  r = 0,
                  i = {};
                (this.getSourceTypeFromLocalStorageByUrl = function (e) {
                  return t[e] ? t[e] : s(e);
                }),
                  (this.handleReceivedSourceTypeForUrl = function (e, n) {
                    !1 === i[n] &&
                      (r--,
                      "invalid" !== e ? (i[n] = e) : delete i[n],
                      0 === r &&
                        ((function (e, t) {
                          for (var n in t) e[n] = t[n];
                        })(t, i),
                        localStorage.setItem(
                          "fslightbox-types",
                          JSON.stringify(t)
                        )));
                  });
                var s = function (e) {
                  r++, (i[e] = !1);
                };
                n.disableLocalStorage
                  ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}),
                    (this.handleReceivedSourceTypeForUrl = function () {}))
                  : (t = JSON.parse(
                      localStorage.getItem("fslightbox-types")
                    )) ||
                    ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = s));
              }
              function T(e, t, n, r) {
                var i = e.data,
                  s = e.elements.sources,
                  o = n / r,
                  a = 0;
                this.adjustSize = function () {
                  if ((a = i.maxSourceWidth / o) < i.maxSourceHeight)
                    return n < i.maxSourceWidth && (a = r), l();
                  (a = r > i.maxSourceHeight ? i.maxSourceHeight : r), l();
                };
                var l = function () {
                  (s[t].style.width = a * o + "px"),
                    (s[t].style.height = a + "px");
                };
              }
              function S(e, t) {
                var n = this,
                  r = e.collections.sourceSizers,
                  i = e.elements,
                  s = i.sourceAnimationWrappers,
                  o = i.sourceMainWrappers,
                  a = i.sources,
                  l = e.resolve;
                function c(e, n) {
                  (r[t] = l(T, [t, e, n])), r[t].adjustSize();
                }
                this.runActions = function (e, r) {
                  a[t].classList.add(b),
                    s[t].classList.add(g),
                    o[t].removeChild(o[t].firstChild),
                    c(e, r),
                    (n.runActions = c);
                };
              }
              function E(e, t) {
                var n,
                  r = this,
                  i = e.elements.sources,
                  s = e.props,
                  o = (0, e.resolve)(S, [t]);
                (this.handleImageLoad = function (e) {
                  var t = e.target,
                    n = t.naturalWidth,
                    r = t.naturalHeight;
                  o.runActions(n, r);
                }),
                  (this.handleVideoLoad = function (e) {
                    var t = e.target,
                      r = t.videoWidth,
                      i = t.videoHeight;
                    (n = !0), o.runActions(r, i);
                  }),
                  (this.handleNotMetaDatedVideoLoad = function () {
                    n || r.handleYoutubeLoad();
                  }),
                  (this.handleYoutubeLoad = function () {
                    var e = 1920,
                      t = 1080;
                    s.maxYoutubeDimensions &&
                      ((e = s.maxYoutubeDimensions.width),
                      (t = s.maxYoutubeDimensions.height)),
                      o.runActions(e, t);
                  }),
                  (this.handleCustomLoad = function () {
                    setTimeout(function () {
                      var e = i[t];
                      o.runActions(e.offsetWidth, e.offsetHeight);
                    });
                  });
              }
              function C(e, t, n) {
                var r = e.elements.sources,
                  i = e.props.customClasses,
                  s = i[t] ? i[t] : "";
                r[t].className = n + " " + s;
              }
              function k(e, t) {
                var n = e.elements.sources,
                  r = e.props.customAttributes;
                for (var i in r[t]) n[t].setAttribute(i, r[t][i]);
              }
              function L(e, t) {
                var n = e.collections.sourceLoadHandlers,
                  r = e.elements,
                  i = r.sources,
                  s = r.sourceAnimationWrappers,
                  o = e.props.sources;
                (i[t] = document.createElement("img")),
                  C(e, t, x),
                  (i[t].src = o[t]),
                  (i[t].onload = n[t].handleImageLoad),
                  k(e, t),
                  s[t].appendChild(i[t]);
              }
              function M(e, t) {
                var n = e.collections.sourceLoadHandlers,
                  r = e.elements,
                  i = r.sources,
                  s = r.sourceAnimationWrappers,
                  o = e.props,
                  a = o.sources,
                  l = o.videosPosters;
                (i[t] = document.createElement("video")),
                  C(e, t, x),
                  (i[t].src = a[t]),
                  (i[t].onloadedmetadata = function (e) {
                    n[t].handleVideoLoad(e);
                  }),
                  (i[t].controls = !0),
                  k(e, t),
                  l[t] && (i[t].poster = l[t]);
                var c = document.createElement("source");
                (c.src = a[t]),
                  i[t].appendChild(c),
                  setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3),
                  s[t].appendChild(i[t]);
              }
              function P(e, t) {
                var n = e.collections.sourceLoadHandlers,
                  r = e.elements,
                  s = r.sources,
                  o = r.sourceAnimationWrappers,
                  a = e.props.sources;
                (s[t] = document.createElement("iframe")),
                  C(e, t, "".concat(x, " ").concat(i, "youtube-iframe")),
                  (s[t].src = "https://www.youtube.com/embed/".concat(
                    a[t].match(
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
                    )[2],
                    "?enablejsapi=1"
                  )),
                  (s[t].allowFullscreen = !0),
                  k(e, t),
                  o[t].appendChild(s[t]),
                  n[t].handleYoutubeLoad();
              }
              function A(e, t) {
                var n = e.collections.sourceLoadHandlers,
                  r = e.elements,
                  i = r.sources,
                  s = r.sourceAnimationWrappers,
                  o = e.props.sources;
                (i[t] = o[t]),
                  C(e, t, "".concat(i[t].className, " ").concat(x)),
                  s[t].appendChild(i[t]),
                  n[t].handleCustomLoad();
              }
              function O(e, t) {
                var n = e.elements,
                  r = n.sources,
                  s = n.sourceAnimationWrappers,
                  o = n.sourceMainWrappers;
                e.props.sources,
                  (r[t] = document.createElement("div")),
                  (r[t].className = ""
                    .concat(i, "invalid-file-wrapper ")
                    .concat(l)),
                  (r[t].innerHTML = "Invalid source"),
                  s[t].classList.add(g),
                  s[t].appendChild(r[t]),
                  o[t].removeChild(o[t].firstChild);
              }
              function z(e) {
                var t = e.collections,
                  n = t.sourceLoadHandlers,
                  r = t.sourcesRenderFunctions,
                  i = e.core.sourceDisplayFacade,
                  s = e.resolve;
                this.runActionsForSourceTypeAndIndex = function (t, o) {
                  var a;
                  switch (("invalid" !== t && (n[o] = s(E, [o])), t)) {
                    case "image":
                      a = L;
                      break;
                    case "video":
                      a = M;
                      break;
                    case "youtube":
                      a = P;
                      break;
                    case "custom":
                      a = A;
                      break;
                    default:
                      a = O;
                  }
                  (r[o] = function () {
                    return a(e, o);
                  }),
                    i.displaySourcesWhichShouldBeDisplayed();
                };
              }
              function D() {
                var e,
                  t,
                  n,
                  r = function (e) {
                    var t = document.createElement("a");
                    return (t.href = e), "www.youtube.com" === t.hostname;
                  },
                  i = function (e) {
                    return e.slice(0, e.indexOf("/"));
                  };
                function s() {
                  if (4 !== n.readyState) {
                    if (2 === n.readyState) {
                      var e;
                      switch (i(n.getResponseHeader("content-type"))) {
                        case "image":
                          e = "image";
                          break;
                        case "video":
                          e = "video";
                          break;
                        default:
                          e = "invalid";
                      }
                      (n.onreadystatechange = null), n.abort(), t(e);
                    }
                  } else t("invalid");
                }
                (this.setUrlToCheck = function (t) {
                  e = t;
                }),
                  (this.getSourceType = function (i) {
                    if (r(e)) return i("youtube");
                    (t = i),
                      ((n = new XMLHttpRequest()).onreadystatechange = s),
                      n.open("GET", e, !0),
                      n.send();
                  });
              }
              function I(e, t, n) {
                var r = e.props,
                  i = r.types,
                  s = r.type,
                  o = r.sources,
                  a = e.resolve;
                (this.getTypeSetByClientForIndex = function (e) {
                  var t;
                  return i && i[e] ? (t = i[e]) : s && (t = s), t;
                }),
                  (this.retrieveTypeWithXhrForIndex = function (e) {
                    var r = a(D);
                    r.setUrlToCheck(o[e]),
                      r.getSourceType(function (r) {
                        t.handleReceivedSourceTypeForUrl(r, o[e]),
                          n.runActionsForSourceTypeAndIndex(r, e);
                      });
                  });
              }
              function $(e, t) {
                var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                  r = e.elements,
                  i = r.sourceWrappersContainer,
                  s = r.sourceMainWrappers;
                (s[t] = document.createElement("div")),
                  (s[t].className = "".concat(d, " ").concat(a, " ").concat(l)),
                  (s[t].innerHTML =
                    '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>');
                var o = s[t].firstChild;
                (n[t] = function () {
                  s[t].contains(o) && s[t].removeChild(o);
                }),
                  i.appendChild(s[t]),
                  (function (e, t) {
                    var n = e.elements,
                      r = n.sourceMainWrappers,
                      i = n.sourceAnimationWrappers;
                    (i[t] = document.createElement("div")),
                      r[t].appendChild(i[t]);
                  })(e, t);
              }
              function F(e, t, n, r) {
                var s = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                s.setAttributeNS(null, "width", t),
                  s.setAttributeNS(null, "height", t),
                  s.setAttributeNS(null, "viewBox", n);
                var o = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                );
                return (
                  o.setAttributeNS(null, "class", "".concat(i, "svg-path")),
                  o.setAttributeNS(null, "d", r),
                  s.appendChild(o),
                  e.appendChild(s),
                  s
                );
              }
              function R(e, t) {
                var n = document.createElement("div");
                return (
                  (n.className = "".concat(i, "toolbar-button ").concat(l)),
                  (n.title = t),
                  e.appendChild(n),
                  n
                );
              }
              function N(e) {
                var t = e.props.sources,
                  n = e.elements.container,
                  r = document.createElement("div");
                (r.className = "".concat(i, "nav")),
                  n.appendChild(r),
                  (function (e, t) {
                    var n = document.createElement("div");
                    (n.className = "".concat(i, "toolbar")),
                      t.appendChild(n),
                      (function (e, t) {
                        var n = e.componentsServices,
                          r = e.core.fullscreenToggler,
                          i = e.data,
                          s =
                            "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                          o = R(t);
                        o.title = "Enter fullscreen";
                        var a = F(o, "20px", "0 0 18 18", s);
                        (n.enterFullscreen = function () {
                          (i.isFullscreenOpen = !0),
                            (o.title = "Exit fullscreen"),
                            a.setAttributeNS(null, "width", "24px"),
                            a.setAttributeNS(null, "height", "24px"),
                            a.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                            a.firstChild.setAttributeNS(
                              null,
                              "d",
                              "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"
                            );
                        }),
                          (n.exitFullscreen = function () {
                            (i.isFullscreenOpen = !1),
                              (o.title = "Enter fullscreen"),
                              a.setAttributeNS(null, "width", "20px"),
                              a.setAttributeNS(null, "height", "20px"),
                              a.setAttributeNS(null, "viewBox", "0 0 18 18"),
                              a.firstChild.setAttributeNS(null, "d", s);
                          }),
                          (o.onclick = function () {
                            i.isFullscreenOpen
                              ? r.exitFullscreen()
                              : r.enterFullscreen();
                          });
                      })(e, n),
                      (function (e, t) {
                        var n = R(t, "Close");
                        (n.onclick = e.core.lightboxCloser.closeLightbox),
                          F(
                            n,
                            "20px",
                            "0 0 24 24",
                            "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                          );
                      })(e, n);
                  })(e, r),
                  t.length > 1 &&
                    (function (e, t) {
                      var n = e.componentsServices,
                        r = e.props.sources,
                        s = (e.stageIndexes, document.createElement("div"));
                      s.className = "".concat(i, "slide-number-container");
                      var o = document.createElement("div");
                      o.className = l;
                      var a = document.createElement("span");
                      n.setSlideNumber = function (e) {
                        return (a.innerHTML = e);
                      };
                      var c = document.createElement("span");
                      c.className = "".concat(i, "slash");
                      var u = document.createElement("div");
                      (u.innerHTML = r.length),
                        s.appendChild(o),
                        o.appendChild(a),
                        o.appendChild(c),
                        o.appendChild(u),
                        t.appendChild(s),
                        setTimeout(function () {
                          o.offsetWidth > 55 &&
                            (s.style.justifyContent = "flex-start");
                        });
                    })(e, r);
              }
              function B(e, t) {
                var n = this,
                  r = e.elements.sourceMainWrappers,
                  i = e.props,
                  s = 0;
                (this.byValue = function (e) {
                  return (s = e), n;
                }),
                  (this.negative = function () {
                    o(-a());
                  }),
                  (this.zero = function () {
                    o(0);
                  }),
                  (this.positive = function () {
                    o(a());
                  });
                var o = function (e) {
                    (r[t].style.transform = "translateX(".concat(e + s, "px)")),
                      (s = 0);
                  },
                  a = function () {
                    return (1 + i.slideDistance) * innerWidth;
                  };
              }
              function H(e, t, n, r) {
                var i = e.elements.container,
                  s = n.charAt(0).toUpperCase() + n.slice(1),
                  o = document.createElement("div");
                (o.className = "".concat(f, " ").concat(f, "-").concat(n)),
                  (o.title = "".concat(s, " slide")),
                  (o.onclick = t),
                  (function (e, t) {
                    var n = document.createElement("div");
                    (n.className = "".concat(p, " ").concat(l)),
                      F(n, "20px", "0 0 20 20", t),
                      e.appendChild(n);
                  })(o, r),
                  i.appendChild(o);
              }
              function W(e, t) {
                var n = e.classList;
                n.contains(t) && n.remove(t);
              }
              function q(e) {
                var t = this,
                  n = e.core,
                  r = n.eventsDispatcher,
                  i = n.fullscreenToggler,
                  s = n.globalEventsController,
                  o = n.scrollbarRecompensor,
                  a = e.data,
                  l = e.elements,
                  u = e.props,
                  d = e.sourcePointerProps;
                (this.isLightboxFadingOut = !1),
                  (this.runActions = function () {
                    (t.isLightboxFadingOut = !0),
                      l.container.classList.add(v),
                      s.removeListeners(),
                      u.exitFullscreenOnClose &&
                        a.isFullscreenOpen &&
                        i.exitFullscreen(),
                      setTimeout(function () {
                        (t.isLightboxFadingOut = !1),
                          (d.isPointering = !1),
                          l.container.classList.remove(v),
                          document.documentElement.classList.remove(c),
                          o.removeRecompense(),
                          document.body.removeChild(l.container),
                          r.dispatch("onClose");
                      }, 270);
                  });
              }
              function X(e) {
                var t = e.core,
                  n = t.lightboxCloser,
                  r = t.fullscreenToggler,
                  i = t.slideChangeFacade;
                this.listener = function (e) {
                  switch (e.key) {
                    case "Escape":
                      n.closeLightbox();
                      break;
                    case "ArrowLeft":
                      i.changeToPrevious();
                      break;
                    case "ArrowRight":
                      i.changeToNext();
                      break;
                    case "F11":
                      e.preventDefault(), r.enterFullscreen();
                  }
                };
              }
              function Y(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                  n = e.elements,
                  r = e.sourcePointerProps,
                  i = e.stageIndexes;
                function s(e, n) {
                  t[e].byValue(r.swipedX)[n]();
                }
                this.runActionsForEvent = function (e) {
                  var t, a, l;
                  n.container.contains(n.slideSwipingHoverer) ||
                    n.container.appendChild(n.slideSwipingHoverer),
                    (t = n.container),
                    (a = o),
                    (l = t.classList).contains(a) || l.add(a),
                    (r.swipedX = e.screenX - r.downScreenX),
                    s(i.current, "zero"),
                    void 0 !== i.previous && r.swipedX > 0
                      ? s(i.previous, "negative")
                      : void 0 !== i.next &&
                        r.swipedX < 0 &&
                        s(i.next, "positive");
                };
              }
              function j(e) {
                var t = e.props.sources,
                  n = e.resolve,
                  r = e.sourcePointerProps,
                  i = n(Y);
                1 === t.length
                  ? (this.listener = function () {
                      r.swipedX = 1;
                    })
                  : (this.listener = function (e) {
                      r.isPointering && i.runActionsForEvent(e);
                    });
              }
              function G(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                  n = e.core.slideIndexChanger,
                  r = e.elements.sourceMainWrappers,
                  i = e.stageIndexes;
                (this.runPositiveSwipedXActions = function () {
                  void 0 === i.previous ||
                    (s("positive"), n.changeTo(i.previous)),
                    s("zero");
                }),
                  (this.runNegativeSwipedXActions = function () {
                    void 0 === i.next || (s("negative"), n.changeTo(i.next)),
                      s("zero");
                  });
                var s = function (e) {
                  r[i.current].classList.add(u), t[i.current][e]();
                };
              }
              function V(e, t) {
                e.contains(t) && e.removeChild(t);
              }
              function U(e) {
                var t = e.core.lightboxCloser,
                  n = e.elements,
                  r = e.resolve,
                  i = e.sourcePointerProps,
                  s = r(G);
                (this.runNoSwipeActions = function () {
                  V(n.container, n.slideSwipingHoverer),
                    i.isSourceDownEventTarget || t.closeLightbox(),
                    (i.isPointering = !1);
                }),
                  (this.runActions = function () {
                    i.swipedX > 0
                      ? s.runPositiveSwipedXActions()
                      : s.runNegativeSwipedXActions(),
                      V(n.container, n.slideSwipingHoverer),
                      n.container.classList.remove(o),
                      (i.isPointering = !1);
                  });
              }
              function K(e) {
                var t = e.resolve,
                  n = e.sourcePointerProps,
                  r = t(U);
                this.listener = function () {
                  n.isPointering &&
                    (n.swipedX ? r.runActions() : r.runNoSwipeActions());
                };
              }
              function Q(e) {
                var t, n, r;
                (n = (t = e).core.classFacade),
                  (r = t.elements),
                  (n.removeFromEachElementClassIfContains = function (e, t) {
                    for (var n = 0; n < r[e].length; n++) W(r[e][n], t);
                  }),
                  (function (e) {
                    var t = e.core.eventsDispatcher,
                      n = e.props;
                    t.dispatch = function (e) {
                      n[e] && n[e]();
                    };
                  })(e),
                  (function (e) {
                    var t = e.componentsServices,
                      n = e.core.fullscreenToggler;
                    (n.enterFullscreen = function () {
                      t.enterFullscreen();
                      var e = document.documentElement;
                      e.requestFullscreen
                        ? e.requestFullscreen()
                        : e.mozRequestFullScreen
                        ? e.mozRequestFullScreen()
                        : e.webkitRequestFullscreen
                        ? e.webkitRequestFullscreen()
                        : e.msRequestFullscreen && e.msRequestFullscreen();
                    }),
                      (n.exitFullscreen = function () {
                        t.exitFullscreen(),
                          document.exitFullscreen
                            ? document.exitFullscreen()
                            : document.mozCancelFullScreen
                            ? document.mozCancelFullScreen()
                            : document.webkitExitFullscreen
                            ? document.webkitExitFullscreen()
                            : document.msExitFullscreen &&
                              document.msExitFullscreen();
                      });
                  })(e),
                  (function (e) {
                    var t = e.core,
                      n = t.globalEventsController,
                      r = t.windowResizeActioner,
                      i = e.resolve,
                      s = i(X),
                      o = i(j),
                      a = i(K);
                    (n.attachListeners = function () {
                      document.addEventListener("pointermove", o.listener),
                        document.addEventListener("pointerup", a.listener),
                        addEventListener("resize", r.runActions),
                        document.addEventListener("keydown", s.listener);
                    }),
                      (n.removeListeners = function () {
                        document.removeEventListener("pointermove", o.listener),
                          document.removeEventListener("pointerup", a.listener),
                          removeEventListener("resize", r.runActions),
                          document.removeEventListener("keydown", s.listener);
                      });
                  })(e),
                  (function (e) {
                    var t = e.core.lightboxCloser,
                      n = (0, e.resolve)(q);
                    t.closeLightbox = function () {
                      n.isLightboxFadingOut || n.runActions();
                    };
                  })(e),
                  J(e),
                  (function (e) {
                    var t = e.data,
                      n = e.core.scrollbarRecompensor;
                    function r() {
                      document.body.offsetHeight > innerHeight &&
                        (document.body.style.marginRight =
                          t.scrollbarWidth + "px");
                    }
                    (n.addRecompense = function () {
                      "complete" === document.readyState
                        ? r()
                        : addEventListener("load", function () {
                            r(), (n.addRecompense = r);
                          });
                    }),
                      (n.removeRecompense = function () {
                        document.body.style.removeProperty("margin-right");
                      });
                  })(e),
                  (function (e) {
                    var t = e.core,
                      n = t.slideChangeFacade,
                      r = t.slideIndexChanger,
                      i = t.stageManager;
                    e.props.sources.length > 1
                      ? ((n.changeToPrevious = function () {
                          r.jumpTo(i.getPreviousSlideIndex());
                        }),
                        (n.changeToNext = function () {
                          r.jumpTo(i.getNextSlideIndex());
                        }))
                      : ((n.changeToPrevious = function () {}),
                        (n.changeToNext = function () {}));
                  })(e),
                  (function (e) {
                    var t,
                      n,
                      r = e.collections.sourceMainWrappersTransformers,
                      i = e.componentsServices,
                      s = e.core,
                      o = s.classFacade,
                      a = s.slideIndexChanger,
                      l = s.sourceDisplayFacade,
                      c = s.stageManager,
                      d = e.elements.sourceAnimationWrappers,
                      p = e.stageIndexes,
                      f =
                        ((t = function () {
                          o.removeFromEachElementClassIfContains(
                            "sourceAnimationWrappers",
                            m
                          );
                        }),
                        (n = []),
                        function () {
                          n.push(!0),
                            setTimeout(function () {
                              n.pop(), n.length || t();
                            }, 300);
                        });
                    (a.changeTo = function (e) {
                      (p.current = e),
                        c.updateStageIndexes(),
                        i.setSlideNumber(e + 1),
                        l.displaySourcesWhichShouldBeDisplayed();
                    }),
                      (a.jumpTo = function (e) {
                        var t = p.current;
                        a.changeTo(e),
                          o.removeFromEachElementClassIfContains(
                            "sourceMainWrappers",
                            u
                          ),
                          W(d[t], g),
                          W(d[t], h),
                          d[t].classList.add(m),
                          W(d[e], g),
                          W(d[e], m),
                          d[e].classList.add(h),
                          f(),
                          r[e].zero(),
                          setTimeout(function () {
                            t !== p.current && r[t].negative();
                          }, 270);
                      });
                  })(e),
                  (function (e) {
                    var t = e.core,
                      n = t.classFacade,
                      r = t.sourcesPointerDown,
                      i = e.elements.sources,
                      s = e.sourcePointerProps,
                      o = e.stageIndexes;
                    r.listener = function (e) {
                      "VIDEO" !== e.target.tagName && e.preventDefault(),
                        (s.isPointering = !0),
                        (s.downScreenX = e.screenX),
                        (s.swipedX = 0);
                      var t = i[o.current];
                      t && t.contains(e.target)
                        ? (s.isSourceDownEventTarget = !0)
                        : (s.isSourceDownEventTarget = !1),
                        n.removeFromEachElementClassIfContains(
                          "sourceMainWrappers",
                          u
                        );
                    };
                  })(e),
                  (function (e) {
                    var t = e.collections.sourcesRenderFunctions,
                      n = e.core.sourceDisplayFacade,
                      r = e.props,
                      i = e.stageIndexes;
                    function s(e) {
                      t[e] && (t[e](), delete t[e]);
                    }
                    n.displaySourcesWhichShouldBeDisplayed = function () {
                      if (r.loadOnlyCurrentSource) s(i.current);
                      else for (var e in i) s(i[e]);
                    };
                  })(e),
                  (function (e) {
                    var t = e.stageIndexes,
                      n = e.core.stageManager,
                      r = e.props.sources.length - 1;
                    (n.getPreviousSlideIndex = function () {
                      return 0 === t.current ? r : t.current - 1;
                    }),
                      (n.getNextSlideIndex = function () {
                        return t.current === r ? 0 : t.current + 1;
                      }),
                      (n.updateStageIndexes =
                        0 === r
                          ? function () {}
                          : 1 === r
                          ? function () {
                              0 === t.current
                                ? ((t.next = 1), delete t.previous)
                                : ((t.previous = 0), delete t.next);
                            }
                          : function () {
                              (t.previous = n.getPreviousSlideIndex()),
                                (t.next = n.getNextSlideIndex());
                            }),
                      (n.isSourceInStage =
                        r <= 2
                          ? function () {
                              return !0;
                            }
                          : function (e) {
                              var n = t.current;
                              if ((0 === n && e === r) || (n === r && 0 === e))
                                return !0;
                              var i = n - e;
                              return -1 === i || 0 === i || 1 === i;
                            });
                  })(e),
                  (function (e) {
                    var t = e.collections,
                      n = t.sourceMainWrappersTransformers,
                      r = t.sourceSizers,
                      i = e.core.windowResizeActioner,
                      s = e.data,
                      o = e.elements.sourceMainWrappers,
                      a = e.props,
                      l = e.stageIndexes;
                    i.runActions = function () {
                      innerWidth < 992
                        ? (s.maxSourceWidth = innerWidth)
                        : (s.maxSourceWidth = 0.9 * innerWidth),
                        (s.maxSourceHeight = 0.9 * innerHeight);
                      for (var e = 0; e < a.sources.length; e++)
                        W(o[e], u),
                          e !== l.current && n[e].negative(),
                          r[e] && r[e].adjustSize();
                    };
                  })(e);
              }
              function Z(e) {
                var t = e.core.eventsDispatcher,
                  n = e.data,
                  r = e.elements,
                  s = e.props.sources;
                (n.isInitialized = !0),
                  (n.scrollbarWidth = (function (e) {
                    var t = e.props.disableLocalStorage;
                    if (!t) {
                      var n = localStorage.getItem(
                        "fslightbox-scrollbar-width"
                      );
                      if (n) return n;
                    }
                    var r = (function () {
                        var e = document.createElement("div"),
                          t = e.style;
                        return (
                          (t.visibility = "hidden"),
                          (t.width = "100px"),
                          (t.msOverflowStyle = "scrollbar"),
                          (t.overflow = "scroll"),
                          e
                        );
                      })(),
                      i = (function () {
                        var e = document.createElement("div");
                        return (e.style.width = "100%"), e;
                      })();
                    document.body.appendChild(r);
                    var s = r.offsetWidth;
                    r.appendChild(i);
                    var o = i.offsetWidth;
                    document.body.removeChild(r);
                    var a = s - o;
                    return (
                      t ||
                        localStorage.setItem(
                          "fslightbox-scrollbar-width",
                          a.toString()
                        ),
                      a
                    );
                  })(e)),
                  (function (e) {
                    for (
                      var t = e.collections.sourceMainWrappersTransformers,
                        n = e.props.sources,
                        r = e.resolve,
                        i = 0;
                      i < n.length;
                      i++
                    )
                      t[i] = r(B, [i]);
                  })(e),
                  Q(e),
                  (r.container = document.createElement("div")),
                  (r.container.className = ""
                    .concat(i, "container ")
                    .concat(a, " ")
                    .concat(g)),
                  (function (e) {
                    var t = e.elements;
                    (t.slideSwipingHoverer = document.createElement("div")),
                      (t.slideSwipingHoverer.className = ""
                        .concat(i, "slide-swiping-hoverer ")
                        .concat(a, " ")
                        .concat(d));
                  })(e),
                  N(e),
                  (function (e) {
                    var t = e.core.sourcesPointerDown,
                      n = e.elements,
                      r = e.props.sources,
                      i = document.createElement("div");
                    (i.className = "".concat(d, " ").concat(a)),
                      n.container.appendChild(i),
                      i.addEventListener("pointerdown", t.listener),
                      (n.sourceWrappersContainer = i);
                    for (var s = 0; s < r.length; s++) $(e, s);
                  })(e),
                  s.length > 1 &&
                    (function (e) {
                      var t = e.core.slideChangeFacade;
                      H(
                        e,
                        t.changeToPrevious,
                        "previous",
                        "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
                      ),
                        H(
                          e,
                          t.changeToNext,
                          "next",
                          "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
                        );
                    })(e),
                  (function (e) {
                    for (
                      var t = e.props.sources,
                        n = e.resolve,
                        r = n(w),
                        i = n(z),
                        s = n(I, [r, i]),
                        o = 0;
                      o < t.length;
                      o++
                    )
                      if ("string" == typeof t[o]) {
                        var a = s.getTypeSetByClientForIndex(o);
                        if (a) i.runActionsForSourceTypeAndIndex(a, o);
                        else {
                          var l = r.getSourceTypeFromLocalStorageByUrl(t[o]);
                          l
                            ? i.runActionsForSourceTypeAndIndex(l, o)
                            : s.retrieveTypeWithXhrForIndex(o);
                        }
                      } else i.runActionsForSourceTypeAndIndex("custom", o);
                  })(e),
                  t.dispatch("onInit");
              }
              function J(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                  n = e.componentsServices,
                  r = e.core,
                  i = r.eventsDispatcher,
                  s = r.lightboxOpener,
                  o = r.globalEventsController,
                  a = r.scrollbarRecompensor,
                  l = r.sourceDisplayFacade,
                  u = r.stageManager,
                  d = r.windowResizeActioner,
                  p = e.data,
                  f = e.elements,
                  h = e.stageIndexes;
                s.open = function () {
                  var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  (h.current = r),
                    p.isInitialized ? i.dispatch("onShow") : Z(e),
                    u.updateStageIndexes(),
                    l.displaySourcesWhichShouldBeDisplayed(),
                    n.setSlideNumber(r + 1),
                    document.body.appendChild(f.container),
                    document.documentElement.classList.add(c),
                    a.addRecompense(),
                    o.attachListeners(),
                    d.runActions(),
                    t[h.current].zero(),
                    i.dispatch("onOpen");
                };
              }
              function ee(e, t, n) {
                return (ee = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
                  ? Reflect.construct
                  : function (e, t, n) {
                      var r = [null];
                      r.push.apply(r, t);
                      var i = new (Function.bind.apply(e, r))();
                      return n && te(i, n.prototype), i;
                    }).apply(null, arguments);
              }
              function te(e, t) {
                return (te =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
              }
              function re() {
                for (
                  var e = document.getElementsByTagName("a"),
                    t = function (t) {
                      if (!e[t].hasAttribute("data-fslightbox"))
                        return "continue";
                      var n = e[t].getAttribute("data-fslightbox"),
                        r = e[t].getAttribute("href");
                      fsLightboxInstances[n] ||
                        (fsLightboxInstances[n] = new FsLightbox());
                      var i = null;
                      "#" === r.charAt(0)
                        ? (i = document
                            .getElementById(r.substring(1))
                            .cloneNode(!0)).removeAttribute("id")
                        : (i = r),
                        fsLightboxInstances[n].props.sources.push(i),
                        fsLightboxInstances[n].elements.a.push(e[t]);
                      var s = fsLightboxInstances[n].props.sources.length - 1;
                      (e[t].onclick = function (e) {
                        e.preventDefault(), fsLightboxInstances[n].open(s);
                      }),
                        d("types", "data-type"),
                        d("videosPosters", "data-video-poster"),
                        d("customClasses", "data-class"),
                        d("customClasses", "data-custom-class");
                      for (
                        var o = [
                            "href",
                            "data-fslightbox",
                            "data-type",
                            "data-video-poster",
                            "data-class",
                            "data-custom-class",
                          ],
                          a = e[t].attributes,
                          l = fsLightboxInstances[n].props.customAttributes,
                          c = 0;
                        c < a.length;
                        c++
                      )
                        if (
                          -1 === o.indexOf(a[c].name) &&
                          "data-" === a[c].name.substr(0, 5)
                        ) {
                          l[s] || (l[s] = {});
                          var u = a[c].name.substr(5);
                          l[s][u] = a[c].value;
                        }
                      function d(r, i) {
                        e[t].hasAttribute(i) &&
                          (fsLightboxInstances[n].props[r][s] =
                            e[t].getAttribute(i));
                      }
                    },
                    n = 0;
                  n < e.length;
                  n++
                )
                  t(n);
                var r = Object.keys(fsLightboxInstances);
                window.fsLightbox = fsLightboxInstances[r[r.length - 1]];
              }
              "object" ===
                ("undefined" == typeof document ? "undefined" : _(document)) &&
                (((r = document.createElement("style")).className = s),
                r.appendChild(
                  document.createTextNode(
                    ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
                  )
                ),
                document.head.appendChild(r)),
                (window.FsLightbox = function () {
                  var e = this;
                  (this.props = {
                    sources: [],
                    customAttributes: [],
                    customClasses: [],
                    types: [],
                    videosPosters: [],
                    slideDistance: 0.3,
                  }),
                    (this.data = {
                      isInitialized: !1,
                      isFullscreenOpen: !1,
                      maxSourceWidth: 0,
                      maxSourceHeight: 0,
                      scrollbarWidth: 0,
                    }),
                    (this.sourcePointerProps = {
                      downScreenX: null,
                      isPointering: !1,
                      isSourceDownEventTarget: !1,
                      swipedX: 0,
                    }),
                    (this.stageIndexes = {}),
                    (this.elements = {
                      a: [],
                      container: null,
                      slideSwipingHoverer: null,
                      sourceWrappersContainer: null,
                      sources: [],
                      sourceMainWrappers: [],
                      sourceAnimationWrappers: [],
                    }),
                    (this.componentsServices = {
                      enterFullscreen: null,
                      exitFullscreen: null,
                      hideSourceLoaderIfNotYetCollection: [],
                      setSlideNumber: function () {},
                    }),
                    (this.resolve = function (t) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [];
                      return (
                        n.unshift(e),
                        ee(
                          t,
                          (function (e) {
                            return (
                              (function (e) {
                                if (Array.isArray(e)) return ne(e);
                              })(e) ||
                              (function (e) {
                                if (
                                  "undefined" != typeof Symbol &&
                                  Symbol.iterator in Object(e)
                                )
                                  return Array.from(e);
                              })(e) ||
                              (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return ne(e, t);
                                  var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  return (
                                    "Object" === n &&
                                      e.constructor &&
                                      (n = e.constructor.name),
                                    "Map" === n || "Set" === n
                                      ? Array.from(e)
                                      : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n
                                        )
                                      ? ne(e, t)
                                      : void 0
                                  );
                                }
                              })(e) ||
                              (function () {
                                throw new TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })()
                            );
                          })(n)
                        )
                      );
                    }),
                    (this.collections = {
                      sourceMainWrappersTransformers: [],
                      sourceLoadHandlers: [],
                      sourcesRenderFunctions: [],
                      sourceSizers: [],
                    }),
                    (this.core = {
                      classFacade: {},
                      eventsDispatcher: {},
                      fullscreenToggler: {},
                      globalEventsController: {},
                      lightboxCloser: {},
                      lightboxOpener: {},
                      lightboxUpdater: {},
                      scrollbarRecompensor: {},
                      slideChangeFacade: {},
                      slideIndexChanger: {},
                      sourcesPointerDown: {},
                      sourceDisplayFacade: {},
                      stageManager: {},
                      windowResizeActioner: {},
                    }),
                    J(this),
                    (this.open = function (t) {
                      return e.core.lightboxOpener.open(t);
                    }),
                    (this.close = function () {
                      return e.core.lightboxCloser.closeLightbox();
                    });
                }),
                (window.fsLightboxInstances = {}),
                re(),
                (window.refreshFsLightbox = function () {
                  for (var e in fsLightboxInstances) {
                    var t = fsLightboxInstances[e].props;
                    (fsLightboxInstances[e] = new FsLightbox()),
                      (fsLightboxInstances[e].props = t),
                      (fsLightboxInstances[e].props.sources = []),
                      (fsLightboxInstances[e].elements.a = []);
                  }
                  re();
                });
            },
          ]));
      },
      70: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            (e.prototype = Object.create(t.prototype)),
              ((e.prototype.constructor = e).__proto__ = t);
          }
          function n(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function r(e) {
            return "string" == typeof e;
          }
          function i(e) {
            return "function" == typeof e;
          }
          function s(e) {
            return "number" == typeof e;
          }
          function o(e) {
            return void 0 === e;
          }
          function a(e) {
            return "object" == typeof e;
          }
          function l(e) {
            return !1 !== e;
          }
          function c() {
            return "undefined" != typeof window;
          }
          function u(e) {
            return i(e) || r(e);
          }
          function d(e) {
            return (Se = _t(e, ut)) && $n;
          }
          function p(e, t) {
            return console.warn(
              "Invalid property",
              e,
              "set to",
              t,
              "Missing plugin? gsap.registerPlugin()"
            );
          }
          function f(e, t) {
            return !t && console.warn(e);
          }
          function h(e, t) {
            return (e && (ut[e] = t) && Se && (Se[e] = t)) || ut;
          }
          function m() {
            return 0;
          }
          function g(e) {
            var t,
              n,
              r = e[0];
            if ((a(r) || i(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
              for (n = bt.length; n-- && !bt[n].targetTest(r); );
              t = bt[n];
            }
            for (n = e.length; n--; )
              (e[n] && (e[n]._gsap || (e[n]._gsap = new Yt(e[n], t)))) ||
                e.splice(n, 1);
            return e;
          }
          function v(e) {
            return e._gsap || g(Lt(e))[0]._gsap;
          }
          function y(e, t, n) {
            return (n = e[t]) && i(n)
              ? e[t]()
              : (o(n) && e.getAttribute && e.getAttribute(t)) || n;
          }
          function b(e, t) {
            return (e = e.split(",")).forEach(t) || e;
          }
          function x(e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          }
          function _(e) {
            return Math.round(1e7 * e) / 1e7 || 0;
          }
          function w(e, t) {
            var n = t.charAt(0),
              r = parseFloat(t.substr(2));
            return (
              (e = parseFloat(e)),
              "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
            );
          }
          function T(e, t) {
            for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
            return r < n;
          }
          function S() {
            var e,
              t,
              n = ht.length,
              r = ht.slice(0);
            for (mt = {}, e = ht.length = 0; e < n; e++)
              (t = r[e]) &&
                t._lazy &&
                (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
          }
          function E(e, t, n, r) {
            ht.length && S(), e.render(t, n, r || ye), ht.length && S();
          }
          function C(e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(lt).length < 2
              ? t
              : r(e)
              ? e.trim()
              : e;
          }
          function k(e) {
            return e;
          }
          function L(e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          }
          function M(e, t) {
            for (var n in t)
              "__proto__" !== n &&
                "constructor" !== n &&
                "prototype" !== n &&
                (e[n] = a(t[n]) ? M(e[n] || (e[n] = {}), t[n]) : t[n]);
            return e;
          }
          function P(e, t) {
            var n,
              r = {};
            for (n in e) n in t || (r[n] = e[n]);
            return r;
          }
          function A(e) {
            var t = e.parent || xe,
              n = e.keyframes
                ? (function (e) {
                    return function (t, n) {
                      for (var r in n)
                        r in t ||
                          ("duration" === r && e) ||
                          "ease" === r ||
                          (t[r] = n[r]);
                    };
                  })(nt(e.keyframes))
                : L;
            if (l(e.inherit))
              for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
            return e;
          }
          function O(e, t, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var s,
              o = e[r];
            if (i) for (s = t[i]; o && o[i] > s; ) o = o._prev;
            return (
              o
                ? ((t._next = o._next), (o._next = t))
                : ((t._next = e[n]), (e[n] = t)),
              t._next ? (t._next._prev = t) : (e[r] = t),
              (t._prev = o),
              (t.parent = t._dp = e),
              t
            );
          }
          function z(e, t, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = t._prev,
              s = t._next;
            i ? (i._next = s) : e[n] === t && (e[n] = s),
              s ? (s._prev = i) : e[r] === t && (e[r] = i),
              (t._next = t._prev = t.parent = null);
          }
          function D(e, t) {
            !e.parent ||
              (t && !e.parent.autoRemoveChildren) ||
              e.parent.remove(e),
              (e._act = 0);
          }
          function I(e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0))
              for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
            return e;
          }
          function $(e, t, n, r) {
            return (
              e._startAt &&
              (ye
                ? e._startAt.revert(pt)
                : (e.vars.immediateRender && !e.vars.autoRevert) ||
                  e._startAt.render(t, !0, r))
            );
          }
          function F(e) {
            return e._repeat
              ? wt(e._tTime, (e = e.duration() + e._rDelay)) * e
              : 0;
          }
          function R(e, t) {
            return (
              (e - t._start) * t._ts +
              (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            );
          }
          function N(e) {
            return (e._end = _(
              e._start + (e._tDur / Math.abs(e._ts || e._rts || Ve) || 0)
            ));
          }
          function B(e, t) {
            var n = e._dp;
            return (
              n &&
                n.smoothChildTiming &&
                e._ts &&
                ((e._start = _(
                  n._time -
                    (0 < e._ts
                      ? t / e._ts
                      : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
                )),
                N(e),
                n._dirty || I(n, e)),
              e
            );
          }
          function H(e, t) {
            var n;
            if (
              ((t._time || (t._initted && !t._dur)) &&
                ((n = R(e.rawTime(), t)),
                (!t._dur || Ct(0, t.totalDuration(), n) - t._tTime > Ve) &&
                  t.render(n, !0)),
              I(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
            ) {
              if (e._dur < e.duration())
                for (n = e; n._dp; )
                  0 <= n.rawTime() && n.totalTime(n._tTime), (n = n._dp);
              e._zTime = -Ve;
            }
          }
          function W(e, t, n, r) {
            return (
              t.parent && D(t),
              (t._start = _(
                (s(n) ? n : n || e !== xe ? Et(e, n, t) : e._time) + t._delay
              )),
              (t._end = _(
                t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
              )),
              O(e, t, "_first", "_last", e._sort ? "_start" : 0),
              Tt(t) || (e._recent = t),
              r || H(e, t),
              e._ts < 0 && B(e, e._tTime),
              e
            );
          }
          function q(e, t) {
            return (
              (ut.ScrollTrigger || p("scrollTrigger", t)) &&
              ut.ScrollTrigger.create(t, e)
            );
          }
          function X(e, t, n, r) {
            return (
              en(e, t),
              e._initted
                ? !n &&
                  e._pt &&
                  ((e._dur && !1 !== e.vars.lazy) ||
                    (!e._dur && e.vars.lazy)) &&
                  Ce !== It.frame
                  ? (ht.push(e), (e._lazy = [t, r]), 1)
                  : void 0
                : 1
            );
          }
          function Y(e, t, n, r) {
            var i = e._repeat,
              s = _(t) || 0,
              o = e._tTime / e._tDur;
            return (
              o && !r && (e._time *= s / e._dur),
              (e._dur = s),
              (e._tDur = i
                ? i < 0
                  ? 1e10
                  : _(s * (i + 1) + e._rDelay * i)
                : s),
              0 < o && !r ? B(e, (e._tTime = e._tDur * o)) : e.parent && N(e),
              n || I(e.parent, e),
              e
            );
          }
          function j(e) {
            return e instanceof Vt ? I(e) : Y(e, e._dur);
          }
          function G(e, t, n) {
            var r,
              i,
              o = s(t[1]),
              a = (o ? 2 : 1) + (e < 2 ? 0 : 1),
              c = t[a];
            if ((o && (c.duration = t[1]), (c.parent = n), e)) {
              for (r = c, i = n; i && !("immediateRender" in r); )
                (r = i.vars.defaults || {}),
                  (i = l(i.vars.inherit) && i.parent);
              (c.immediateRender = l(r.immediateRender)),
                e < 2 ? (c.runBackwards = 1) : (c.startAt = t[a - 1]);
            }
            return new sn(t[0], c, t[1 + a]);
          }
          function V(e, t) {
            return e || 0 === e ? t(e) : t;
          }
          function U(e, t) {
            return r(e) && (t = ct.exec(e)) ? t[1] : "";
          }
          function K(e, t) {
            return (
              e &&
              a(e) &&
              "length" in e &&
              ((!t && !e.length) || (e.length - 1 in e && a(e[0]))) &&
              !e.nodeType &&
              e !== _e
            );
          }
          function Q(e) {
            return (
              (e = Lt(e)[0] || f("Invalid scope") || {}),
              function (t) {
                var n = e.current || e.nativeElement || e;
                return Lt(
                  t,
                  n.querySelectorAll
                    ? n
                    : n === e
                    ? f("Invalid scope") || Te.createElement("div")
                    : e
                );
              }
            );
          }
          function Z(e) {
            return e.sort(function () {
              return 0.5 - Math.random();
            });
          }
          function J(e) {
            if (i(e)) return e;
            var t = a(e) ? e : { each: e },
              n = Ht(t.ease),
              s = t.from || 0,
              o = parseFloat(t.base) || 0,
              l = {},
              c = 0 < s && s < 1,
              u = isNaN(s) || c,
              d = t.axis,
              p = s,
              f = s;
            return (
              r(s)
                ? (p = f = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
                : !c && u && ((p = s[0]), (f = s[1])),
              function (e, r, i) {
                var a,
                  c,
                  h,
                  m,
                  g,
                  v,
                  y,
                  b,
                  x,
                  w = (i || t).length,
                  T = l[w];
                if (!T) {
                  if (!(x = "auto" === t.grid ? 0 : (t.grid || [1, Ge])[1])) {
                    for (
                      y = -Ge;
                      y < (y = i[x++].getBoundingClientRect().left) && x < w;

                    );
                    x--;
                  }
                  for (
                    T = l[w] = [],
                      a = u ? Math.min(x, w) * p - 0.5 : s % x,
                      c = x === Ge ? 0 : u ? (w * f) / x - 0.5 : (s / x) | 0,
                      b = Ge,
                      v = y = 0;
                    v < w;
                    v++
                  )
                    (h = (v % x) - a),
                      (m = c - ((v / x) | 0)),
                      (T[v] = g =
                        d ? Math.abs("y" === d ? m : h) : Ze(h * h + m * m)),
                      y < g && (y = g),
                      g < b && (b = g);
                  "random" === s && Z(T),
                    (T.max = y - b),
                    (T.min = b),
                    (T.v = w =
                      (parseFloat(t.amount) ||
                        parseFloat(t.each) *
                          (w < x
                            ? w - 1
                            : d
                            ? "y" === d
                              ? w / x
                              : x
                            : Math.max(x, w / x)) ||
                        0) * ("edges" === s ? -1 : 1)),
                    (T.b = w < 0 ? o - w : o),
                    (T.u = U(t.amount || t.each) || 0),
                    (n = n && w < 0 ? Bt(n) : n);
                }
                return (
                  (w = (T[e] - T.min) / T.max || 0),
                  _(T.b + (n ? n(w) : w) * T.v) + T.u
                );
              }
            );
          }
          function ee(e) {
            var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function (n) {
              var r = _(Math.round(parseFloat(n) / e) * e * t);
              return (r - (r % 1)) / t + (s(n) ? 0 : U(n));
            };
          }
          function te(e, t) {
            var n,
              r,
              o = nt(e);
            return (
              !o &&
                a(e) &&
                ((n = o = e.radius || Ge),
                e.values
                  ? ((e = Lt(e.values)), (r = !s(e[0])) && (n *= n))
                  : (e = ee(e.increment))),
              V(
                t,
                o
                  ? i(e)
                    ? function (t) {
                        return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                      }
                    : function (t) {
                        for (
                          var i,
                            o,
                            a = parseFloat(r ? t.x : t),
                            l = parseFloat(r ? t.y : 0),
                            c = Ge,
                            u = 0,
                            d = e.length;
                          d--;

                        )
                          (i = r
                            ? (i = e[d].x - a) * i + (o = e[d].y - l) * o
                            : Math.abs(e[d] - a)) < c && ((c = i), (u = d));
                        return (
                          (u = !n || c <= n ? e[u] : t),
                          r || u === t || s(t) ? u : u + U(t)
                        );
                      }
                  : ee(e)
              )
            );
          }
          function ne(e, t, n, r) {
            return V(nt(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
              return nt(e)
                ? e[~~(Math.random() * e.length)]
                : (n = n || 1e-5) &&
                    (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                      ) *
                        n *
                        r
                    ) / r;
            });
          }
          function re(e, t, n) {
            return V(n, function (n) {
              return e[~~t(n)];
            });
          }
          function ie(e) {
            for (
              var t, n, r, i, s = 0, o = "";
              ~(t = e.indexOf("random(", s));

            )
              (r = e.indexOf(")", t)),
                (i = "[" === e.charAt(t + 7)),
                (n = e.substr(t + 7, r - t - 7).match(i ? lt : rt)),
                (o +=
                  e.substr(s, t - s) +
                  ne(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
                (s = r + 1);
            return o + e.substr(s, e.length - s);
          }
          function se(e, t, n) {
            var r,
              i,
              s,
              o = e.labels,
              a = Ge;
            for (r in o)
              (i = o[r] - t) < 0 == !!n &&
                i &&
                a > (i = Math.abs(i)) &&
                ((s = r), (a = i));
            return s;
          }
          function oe(e) {
            return (
              D(e),
              e.scrollTrigger && e.scrollTrigger.kill(!1),
              e.progress() < 1 && Pt(e, "onInterrupt"),
              e
            );
          }
          function ae(e, t, n) {
            return (
              ((6 * (e += e < 0 ? 1 : 1 < e ? -1 : 0) < 1
                ? t + (n - t) * e * 6
                : e < 0.5
                ? n
                : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) *
                At +
                0.5) |
              0
            );
          }
          function le(e, t, n) {
            var r,
              i,
              o,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h = e ? (s(e) ? [e >> 16, (e >> 8) & At, e & At] : 0) : Ot.black;
            if (!h) {
              if (
                ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Ot[e])
              )
                h = Ot[e];
              else if ("#" === e.charAt(0)) {
                if (
                  (e.length < 6 &&
                    (e =
                      "#" +
                      (r = e.charAt(1)) +
                      r +
                      (i = e.charAt(2)) +
                      i +
                      (o = e.charAt(3)) +
                      o +
                      (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                  9 === e.length)
                )
                  return [
                    (h = parseInt(e.substr(1, 6), 16)) >> 16,
                    (h >> 8) & At,
                    h & At,
                    parseInt(e.substr(7), 16) / 255,
                  ];
                h = [
                  (e = parseInt(e.substr(1), 16)) >> 16,
                  (e >> 8) & At,
                  e & At,
                ];
              } else if ("hsl" === e.substr(0, 3))
                if (((h = f = e.match(rt)), t)) {
                  if (~e.indexOf("="))
                    return (
                      (h = e.match(it)), n && h.length < 4 && (h[3] = 1), h
                    );
                } else
                  (a = (+h[0] % 360) / 360),
                    (l = h[1] / 100),
                    (r =
                      2 * (c = h[2] / 100) -
                      (i = c <= 0.5 ? c * (l + 1) : c + l - c * l)),
                    3 < h.length && (h[3] *= 1),
                    (h[0] = ae(a + 1 / 3, r, i)),
                    (h[1] = ae(a, r, i)),
                    (h[2] = ae(a - 1 / 3, r, i));
              else h = e.match(rt) || Ot.transparent;
              h = h.map(Number);
            }
            return (
              t &&
                !f &&
                ((r = h[0] / At),
                (i = h[1] / At),
                (o = h[2] / At),
                (c = ((u = Math.max(r, i, o)) + (d = Math.min(r, i, o))) / 2),
                u === d
                  ? (a = l = 0)
                  : ((p = u - d),
                    (l = 0.5 < c ? p / (2 - u - d) : p / (u + d)),
                    (a =
                      u === r
                        ? (i - o) / p + (i < o ? 6 : 0)
                        : u === i
                        ? (o - r) / p + 2
                        : (r - i) / p + 4),
                    (a *= 60)),
                (h[0] = ~~(a + 0.5)),
                (h[1] = ~~(100 * l + 0.5)),
                (h[2] = ~~(100 * c + 0.5))),
              n && h.length < 4 && (h[3] = 1),
              h
            );
          }
          function ce(e) {
            var t = [],
              n = [],
              r = -1;
            return (
              e.split(zt).forEach(function (e) {
                var i = e.match(st) || [];
                t.push.apply(t, i), n.push((r += i.length + 1));
              }),
              (t.c = n),
              t
            );
          }
          function ue(e, t, n) {
            var r,
              i,
              s,
              o,
              a = "",
              l = (e + a).match(zt),
              c = t ? "hsla(" : "rgba(",
              u = 0;
            if (!l) return e;
            if (
              ((l = l.map(function (e) {
                return (
                  (e = le(e, t, 1)) &&
                  c +
                    (t
                      ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                      : e.join(",")) +
                    ")"
                );
              })),
              n && ((s = ce(e)), (r = n.c).join(a) !== s.c.join(a)))
            )
              for (
                o = (i = e.replace(zt, "1").split(st)).length - 1;
                u < o;
                u++
              )
                a +=
                  i[u] +
                  (~r.indexOf(u)
                    ? l.shift() || c + "0,0,0,0)"
                    : (s.length ? s : l.length ? l : n).shift());
            if (!i)
              for (o = (i = e.split(zt)).length - 1; u < o; u++)
                a += i[u] + l[u];
            return a + i[o];
          }
          function de(e) {
            var t,
              n = e.join(" ");
            if (((zt.lastIndex = 0), zt.test(n)))
              return (
                (t = Dt.test(n)),
                (e[1] = ue(e[1], t)),
                (e[0] = ue(e[0], t, ce(e[1]))),
                !0
              );
          }
          function pe(e, t) {
            for (var n, r = e._first; r; )
              r instanceof Vt
                ? pe(r, t)
                : !r.vars.yoyoEase ||
                  (r._yoyo && r._repeat) ||
                  r._yoyo === t ||
                  (r.timeline
                    ? pe(r.timeline, t)
                    : ((n = r._ease),
                      (r._ease = r._yEase),
                      (r._yEase = n),
                      (r._yoyo = t))),
                (r = r._next);
          }
          function fe(e, t, n, r) {
            void 0 === n &&
              (n = function (e) {
                return 1 - t(1 - e);
              }),
              void 0 === r &&
                (r = function (e) {
                  return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
                });
            var i,
              s = { easeIn: t, easeOut: n, easeInOut: r };
            return (
              b(e, function (e) {
                for (var t in ((Ft[e] = ut[e] = s),
                (Ft[(i = e.toLowerCase())] = n),
                s))
                  Ft[
                    i +
                      ("easeIn" === t
                        ? ".in"
                        : "easeOut" === t
                        ? ".out"
                        : ".inOut")
                  ] = Ft[e + "." + t] = s[t];
              }),
              s
            );
          }
          function he(e) {
            return function (t) {
              return t < 0.5
                ? (1 - e(1 - 2 * t)) / 2
                : 0.5 + e(2 * (t - 0.5)) / 2;
            };
          }
          function me(e, t, n) {
            function r(e) {
              return 1 === e
                ? 1
                : i * Math.pow(2, -10 * e) * et((e - o) * s) + 1;
            }
            var i = 1 <= t ? t : 1,
              s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
              o = (s / Ue) * (Math.asin(1 / i) || 0),
              a =
                "out" === e
                  ? r
                  : "in" === e
                  ? function (e) {
                      return 1 - r(1 - e);
                    }
                  : he(r);
            return (
              (s = Ue / s),
              (a.config = function (t, n) {
                return me(e, t, n);
              }),
              a
            );
          }
          function ge(e, t) {
            function n(e) {
              return e ? --e * e * ((t + 1) * e + t) + 1 : 0;
            }
            void 0 === t && (t = 1.70158);
            var r =
              "out" === e
                ? n
                : "in" === e
                ? function (e) {
                    return 1 - n(1 - e);
                  }
                : he(n);
            return (
              (r.config = function (t) {
                return ge(e, t);
              }),
              r
            );
          }
          var ve,
            ye,
            be,
            xe,
            _e,
            we,
            Te,
            Se,
            Ee,
            Ce,
            ke,
            Le,
            Me,
            Pe,
            Ae,
            Oe,
            ze,
            De,
            Ie,
            $e,
            Fe,
            Re,
            Ne,
            Be,
            He,
            We,
            qe,
            Xe,
            Ye = {
              autoSleep: 120,
              force3D: "auto",
              nullTargetWarn: 1,
              units: { lineHeight: "" },
            },
            je = { duration: 0.5, overwrite: !1, delay: 0 },
            Ge = 1e8,
            Ve = 1 / Ge,
            Ue = 2 * Math.PI,
            Ke = Ue / 4,
            Qe = 0,
            Ze = Math.sqrt,
            Je = Math.cos,
            et = Math.sin,
            tt =
              ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
              function () {},
            nt = Array.isArray,
            rt = /(?:-?\.?\d|\.)+/gi,
            it = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            st = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            ot = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            at = /[+-]=-?[.\d]+/,
            lt = /[^,'"\[\]\s]+/gi,
            ct = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            ut = {},
            dt = { suppressEvents: !0, isStart: !0 },
            pt = { suppressEvents: !0 },
            ft = {},
            ht = [],
            mt = {},
            gt = {},
            vt = {},
            yt = 30,
            bt = [],
            xt = "",
            _t = function (e, t) {
              for (var n in t) e[n] = t[n];
              return e;
            },
            wt = function (e, t) {
              var n = Math.floor((e /= t));
              return e && n === e ? n - 1 : n;
            },
            Tt = function (e) {
              var t = e.data;
              return "isFromStart" === t || "isStart" === t;
            },
            St = { _start: 0, endTime: m, totalDuration: m },
            Et = function e(t, n, i) {
              var s,
                o,
                a,
                l = t.labels,
                c = t._recent || St,
                u = t.duration() >= Ge ? c.endTime(!1) : t._dur;
              return r(n) && (isNaN(n) || n in l)
                ? ((o = n.charAt(0)),
                  (a = "%" === n.substr(-1)),
                  (s = n.indexOf("=")),
                  "<" === o || ">" === o
                    ? (0 <= s && (n = n.replace(/=/, "")),
                      ("<" === o ? c._start : c.endTime(0 <= c._repeat)) +
                        (parseFloat(n.substr(1)) || 0) *
                          (a ? (s < 0 ? c : i).totalDuration() / 100 : 1))
                    : s < 0
                    ? (n in l || (l[n] = u), l[n])
                    : ((o = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
                      a &&
                        i &&
                        (o = (o / 100) * (nt(i) ? i[0] : i).totalDuration()),
                      1 < s ? e(t, n.substr(0, s - 1), i) + o : u + o))
                : null == n
                ? u
                : +n;
            },
            Ct = function (e, t, n) {
              return n < e ? e : t < n ? t : n;
            },
            kt = [].slice,
            Lt = function (e, t, n) {
              return be && !t && be.selector
                ? be.selector(e)
                : !r(e) || n || (!we && $t())
                ? nt(e)
                  ? (function (e, t, n) {
                      return (
                        void 0 === n && (n = []),
                        e.forEach(function (e) {
                          return (r(e) && !t) || K(e, 1)
                            ? n.push.apply(n, Lt(e))
                            : n.push(e);
                        }) || n
                      );
                    })(e, n)
                  : K(e)
                  ? kt.call(e, 0)
                  : e
                  ? [e]
                  : []
                : kt.call((t || Te).querySelectorAll(e), 0);
            },
            Mt = function (e, t, n, r, i) {
              var s = t - e,
                o = r - n;
              return V(i, function (t) {
                return n + (((t - e) / s) * o || 0);
              });
            },
            Pt = function (e, t, n) {
              var r,
                i,
                s,
                o = e.vars,
                a = o[t],
                l = be,
                c = e._ctx;
              if (a)
                return (
                  (r = o[t + "Params"]),
                  (i = o.callbackScope || e),
                  n && ht.length && S(),
                  c && (be = c),
                  (s = r ? a.apply(i, r) : a.call(i)),
                  (be = l),
                  s
                );
            },
            At = 255,
            Ot = {
              aqua: [0, At, At],
              lime: [0, At, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, At],
              navy: [0, 0, 128],
              white: [At, At, At],
              olive: [128, 128, 0],
              yellow: [At, At, 0],
              orange: [At, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [At, 0, 0],
              pink: [At, 192, 203],
              cyan: [0, At, At],
              transparent: [At, At, At, 0],
            },
            zt = (function () {
              var e,
                t =
                  "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
              for (e in Ot) t += "|" + e + "\\b";
              return new RegExp(t + ")", "gi");
            })(),
            Dt = /hsl[a]?\(/,
            It =
              ((Ie = Date.now),
              ($e = 500),
              (Fe = 33),
              (Re = Ie()),
              (Ne = Re),
              (He = Be = 1e3 / 240),
              (Oe = {
                time: 0,
                frame: 0,
                tick: function () {
                  Wt(!0);
                },
                deltaRatio: function (e) {
                  return ze / (1e3 / (e || 60));
                },
                wake: function () {
                  Ee &&
                    (!we &&
                      c() &&
                      ((_e = we = window),
                      (Te = _e.document || {}),
                      (ut.gsap = $n),
                      (_e.gsapVersions || (_e.gsapVersions = [])).push(
                        $n.version
                      ),
                      d(Se || _e.GreenSockGlobals || (!_e.gsap && _e) || {}),
                      (Ae = _e.requestAnimationFrame)),
                    Me && Oe.sleep(),
                    (Pe =
                      Ae ||
                      function (e) {
                        return setTimeout(e, (He - 1e3 * Oe.time + 1) | 0);
                      }),
                    (Le = 1),
                    Wt(2));
                },
                sleep: function () {
                  (Ae ? _e.cancelAnimationFrame : clearTimeout)(Me),
                    (Le = 0),
                    (Pe = m);
                },
                lagSmoothing: function (e, t) {
                  ($e = e || 1e8), (Fe = Math.min(t, $e, 0));
                },
                fps: function (e) {
                  (Be = 1e3 / (e || 240)), (He = 1e3 * Oe.time + Be);
                },
                add: function (e, t, n) {
                  var r = t
                    ? function (t, n, i, s) {
                        e(t, n, i, s), Oe.remove(r);
                      }
                    : e;
                  return Oe.remove(e), We[n ? "unshift" : "push"](r), $t(), r;
                },
                remove: function (e, t) {
                  ~(t = We.indexOf(e)) && We.splice(t, 1) && t <= De && De--;
                },
                _listeners: (We = []),
              })),
            $t = function () {
              return !Le && It.wake();
            },
            Ft = {},
            Rt = /^[\d.\-M][\d.\-,\s]/,
            Nt = /["']/g,
            Bt = function (e) {
              return function (t) {
                return 1 - e(1 - t);
              };
            },
            Ht = function (e, t) {
              return (
                (e &&
                  (i(e)
                    ? e
                    : Ft[e] ||
                      (function (e) {
                        var t = (e + "").split("("),
                          n = Ft[t[0]];
                        return n && 1 < t.length && n.config
                          ? n.config.apply(
                              null,
                              ~e.indexOf("{")
                                ? [
                                    (function (e) {
                                      for (
                                        var t,
                                          n,
                                          r,
                                          i = {},
                                          s = e
                                            .substr(1, e.length - 3)
                                            .split(":"),
                                          o = s[0],
                                          a = 1,
                                          l = s.length;
                                        a < l;
                                        a++
                                      )
                                        (n = s[a]),
                                          (t =
                                            a !== l - 1
                                              ? n.lastIndexOf(",")
                                              : n.length),
                                          (r = n.substr(0, t)),
                                          (i[o] = isNaN(r)
                                            ? r.replace(Nt, "").trim()
                                            : +r),
                                          (o = n.substr(t + 1).trim());
                                      return i;
                                    })(t[1]),
                                  ]
                                : (function (e) {
                                    var t = e.indexOf("(") + 1,
                                      n = e.indexOf(")"),
                                      r = e.indexOf("(", t);
                                    return e.substring(
                                      t,
                                      ~r && r < n ? e.indexOf(")", n + 1) : n
                                    );
                                  })(e)
                                    .split(",")
                                    .map(C)
                            )
                          : Ft._CE && Rt.test(e)
                          ? Ft._CE("", e)
                          : n;
                      })(e))) ||
                t
              );
            };
          function Wt(e) {
            var t,
              n,
              r,
              i,
              s = Ie() - Ne,
              o = !0 === e;
            if (
              ($e < s && (Re += s - Fe),
              (0 < (t = (r = (Ne += s) - Re) - He) || o) &&
                ((i = ++Oe.frame),
                (ze = r - 1e3 * Oe.time),
                (Oe.time = r /= 1e3),
                (He += t + (Be <= t ? 4 : Be - t)),
                (n = 1)),
              o || (Me = Pe(Wt)),
              n)
            )
              for (De = 0; De < We.length; De++) We[De](r, ze, i, e);
          }
          function qt(e) {
            return e < Xe
              ? qe * e * e
              : e < 0.7272727272727273
              ? qe * Math.pow(e - 1.5 / 2.75, 2) + 0.75
              : e < 0.9090909090909092
              ? qe * (e -= 2.25 / 2.75) * e + 0.9375
              : qe * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
          }
          b("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
            var n = t < 5 ? t + 1 : t;
            fe(
              e + ",Power" + (n - 1),
              t
                ? function (e) {
                    return Math.pow(e, n);
                  }
                : function (e) {
                    return e;
                  },
              function (e) {
                return 1 - Math.pow(1 - e, n);
              },
              function (e) {
                return e < 0.5
                  ? Math.pow(2 * e, n) / 2
                  : 1 - Math.pow(2 * (1 - e), n) / 2;
              }
            );
          }),
            (Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn),
            fe("Elastic", me("in"), me("out"), me()),
            (qe = 7.5625),
            (Xe = 1 / 2.75),
            fe(
              "Bounce",
              function (e) {
                return 1 - qt(1 - e);
              },
              qt
            ),
            fe("Expo", function (e) {
              return e ? Math.pow(2, 10 * (e - 1)) : 0;
            }),
            fe("Circ", function (e) {
              return -(Ze(1 - e * e) - 1);
            }),
            fe("Sine", function (e) {
              return 1 === e ? 1 : 1 - Je(e * Ke);
            }),
            fe("Back", ge("in"), ge("out"), ge()),
            (Ft.SteppedEase =
              Ft.steps =
              ut.SteppedEase =
                {
                  config: function (e, t) {
                    void 0 === e && (e = 1);
                    var n = 1 / e,
                      r = e + (t ? 0 : 1),
                      i = t ? 1 : 0;
                    return function (e) {
                      return (((r * Ct(0, 0.99999999, e)) | 0) + i) * n;
                    };
                  },
                }),
            (je.ease = Ft["quad.out"]),
            b(
              "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
              function (e) {
                return (xt += e + "," + e + "Params,");
              }
            );
          var Xt,
            Yt = function (e, t) {
              (this.id = Qe++),
                ((e._gsap = this).target = e),
                (this.harness = t),
                (this.get = t ? t.get : y),
                (this.set = t ? t.getSetter : dn);
            },
            jt =
              (((Xt = Gt.prototype).delay = function (e) {
                return e || 0 === e
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + e - this._delay),
                    (this._delay = e),
                    this)
                  : this._delay;
              }),
              (Xt.duration = function (e) {
                return arguments.length
                  ? this.totalDuration(
                      0 < this._repeat
                        ? e + (e + this._rDelay) * this._repeat
                        : e
                    )
                  : this.totalDuration() && this._dur;
              }),
              (Xt.totalDuration = function (e) {
                return arguments.length
                  ? ((this._dirty = 0),
                    Y(
                      this,
                      this._repeat < 0
                        ? e
                        : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (Xt.totalTime = function (e, t) {
                if (($t(), !arguments.length)) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                  for (
                    B(this, e), !n._dp || n.parent || H(n, this);
                    n && n.parent;

                  )
                    n.parent._time !==
                      n._start +
                        (0 <= n._ts
                          ? n._tTime / n._ts
                          : (n.totalDuration() - n._tTime) / -n._ts) &&
                      n.totalTime(n._tTime, !0),
                      (n = n.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((0 < this._ts && e < this._tDur) ||
                      (this._ts < 0 && 0 < e) ||
                      (!this._tDur && !e)) &&
                    W(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== e ||
                    (!this._dur && !t) ||
                    (this._initted && Math.abs(this._zTime) === Ve) ||
                    (!e && !this._initted && (this.add || this._ptLookup))) &&
                    (this._ts || (this._pTime = e), E(this, e, t)),
                  this
                );
              }),
              (Xt.time = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), e + F(this)) %
                        (this._dur + this._rDelay) || (e ? this._dur : 0),
                      t
                    )
                  : this._time;
              }),
              (Xt.totalProgress = function (e, t) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * e, t)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
              }),
              (Xt.progress = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                        F(this),
                      t
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
              }),
              (Xt.iteration = function (e, t) {
                var n = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (e - 1) * n, t)
                  : this._repeat
                  ? wt(this._tTime, n) + 1
                  : 1;
              }),
              (Xt.timeScale = function (e) {
                if (!arguments.length) return this._rts === -Ve ? 0 : this._rts;
                if (this._rts === e) return this;
                var t =
                  this.parent && this._ts
                    ? R(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +e || 0),
                  (this._ts = this._ps || e === -Ve ? 0 : this._rts),
                  this.totalTime(Ct(-this._delay, this._tDur, t), !0),
                  N(this),
                  (function (e) {
                    for (var t = e.parent; t && t.parent; )
                      (t._dirty = 1), t.totalDuration(), (t = t.parent);
                    return e;
                  })(this)
                );
              }),
              (Xt.paused = function (e) {
                return arguments.length
                  ? (this._ps !== e &&
                      ((this._ps = e)
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : ($t(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              Math.abs(this._zTime) !== Ve &&
                              (this._tTime -= Ve)
                          ))),
                    this)
                  : this._ps;
              }),
              (Xt.startTime = function (e) {
                if (arguments.length) {
                  this._start = e;
                  var t = this.parent || this._dp;
                  return (
                    !t ||
                      (!t._sort && this.parent) ||
                      W(t, this, e - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (Xt.endTime = function (e) {
                return (
                  this._start +
                  (l(e) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (Xt.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t
                  ? e &&
                    (!this._ts ||
                      (this._repeat && this._time && this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? R(t.rawTime(e), this)
                    : this._tTime
                  : this._tTime;
              }),
              (Xt.revert = function (e) {
                void 0 === e && (e = pt);
                var t = ye;
                return (
                  (ye = e),
                  this.timeline && this.timeline.revert(e),
                  this.totalTime(-0.01, e.suppressEvents),
                  "nested" !== this.data && D(this),
                  (ye = t),
                  this
                );
              }),
              (Xt.globalTime = function (e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                  (n = t._start + n / (t._ts || 1)), (t = t._dp);
                return !this.parent && this.vars.immediateRender ? -1 : n;
              }),
              (Xt.repeat = function (e) {
                return arguments.length
                  ? ((this._repeat = e === 1 / 0 ? -2 : e), j(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (Xt.repeatDelay = function (e) {
                if (arguments.length) {
                  var t = this._time;
                  return (this._rDelay = e), j(this), t ? this.time(t) : this;
                }
                return this._rDelay;
              }),
              (Xt.yoyo = function (e) {
                return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
              }),
              (Xt.seek = function (e, t) {
                return this.totalTime(Et(this, e), l(t));
              }),
              (Xt.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, l(t));
              }),
              (Xt.play = function (e, t) {
                return (
                  null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                );
              }),
              (Xt.reverse = function (e, t) {
                return (
                  null != e && this.seek(e || this.totalDuration(), t),
                  this.reversed(!0).paused(!1)
                );
              }),
              (Xt.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0);
              }),
              (Xt.resume = function () {
                return this.paused(!1);
              }),
              (Xt.reversed = function (e) {
                return arguments.length
                  ? (!!e !== this.reversed() &&
                      this.timeScale(-this._rts || (e ? -Ve : 0)),
                    this)
                  : this._rts < 0;
              }),
              (Xt.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -Ve), this
                );
              }),
              (Xt.isActive = function () {
                var e,
                  t = this.parent || this._dp,
                  n = this._start;
                return !(
                  t &&
                  !(
                    this._ts &&
                    this._initted &&
                    t.isActive() &&
                    (e = t.rawTime(!0)) >= n &&
                    e < this.endTime(!0) - Ve
                  )
                );
              }),
              (Xt.eventCallback = function (e, t, n) {
                var r = this.vars;
                return 1 < arguments.length
                  ? (t
                      ? ((r[e] = t),
                        n && (r[e + "Params"] = n),
                        "onUpdate" === e && (this._onUpdate = t))
                      : delete r[e],
                    this)
                  : r[e];
              }),
              (Xt.then = function (e) {
                var t = this;
                return new Promise(function (n) {
                  function r() {
                    var e = t.then;
                    (t.then = null),
                      i(s) && (s = s(t)) && (s.then || s === t) && (t.then = e),
                      n(s),
                      (t.then = e);
                  }
                  var s = i(e) ? e : k;
                  (t._initted && 1 === t.totalProgress() && 0 <= t._ts) ||
                  (!t._tTime && t._ts < 0)
                    ? r()
                    : (t._prom = r);
                });
              }),
              (Xt.kill = function () {
                oe(this);
              }),
              Gt);
          function Gt(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              Y(this, +e.duration, 1, 1),
              (this.data = e.data),
              be && (this._ctx = be).data.push(this),
              Le || It.wake();
          }
          L(jt.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -Ve,
            _prom: 0,
            _ps: !1,
            _rts: 1,
          });
          var Vt = (function (e) {
            function o(t, r) {
              var i;
              return (
                void 0 === t && (t = {}),
                ((i = e.call(this, t) || this).labels = {}),
                (i.smoothChildTiming = !!t.smoothChildTiming),
                (i.autoRemoveChildren = !!t.autoRemoveChildren),
                (i._sort = l(t.sortChildren)),
                xe && W(t.parent || xe, n(i), r),
                t.reversed && i.reverse(),
                t.paused && i.paused(!0),
                t.scrollTrigger && q(n(i), t.scrollTrigger),
                i
              );
            }
            t(o, e);
            var a = o.prototype;
            return (
              (a.to = function (e, t, n) {
                return G(0, arguments, this), this;
              }),
              (a.from = function (e, t, n) {
                return G(1, arguments, this), this;
              }),
              (a.fromTo = function (e, t, n, r) {
                return G(2, arguments, this), this;
              }),
              (a.set = function (e, t, n) {
                return (
                  (t.duration = 0),
                  (t.parent = this),
                  A(t).repeatDelay || (t.repeat = 0),
                  (t.immediateRender = !!t.immediateRender),
                  new sn(e, t, Et(this, n), 1),
                  this
                );
              }),
              (a.call = function (e, t, n) {
                return W(this, sn.delayedCall(0, e, t), n);
              }),
              (a.staggerTo = function (e, t, n, r, i, s, o) {
                return (
                  (n.duration = t),
                  (n.stagger = n.stagger || r),
                  (n.onComplete = s),
                  (n.onCompleteParams = o),
                  (n.parent = this),
                  new sn(e, n, Et(this, i)),
                  this
                );
              }),
              (a.staggerFrom = function (e, t, n, r, i, s, o) {
                return (
                  (n.runBackwards = 1),
                  (A(n).immediateRender = l(n.immediateRender)),
                  this.staggerTo(e, t, n, r, i, s, o)
                );
              }),
              (a.staggerFromTo = function (e, t, n, r, i, s, o, a) {
                return (
                  (r.startAt = n),
                  (A(r).immediateRender = l(r.immediateRender)),
                  this.staggerTo(e, t, r, i, s, o, a)
                );
              }),
              (a.render = function (e, t, n) {
                var r,
                  i,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  m = this._time,
                  g = this._dirty ? this.totalDuration() : this._tDur,
                  v = this._dur,
                  y = e <= 0 ? 0 : _(e),
                  b = this._zTime < 0 != e < 0 && (this._initted || !v);
                if (
                  (this !== xe && g < y && 0 <= e && (y = g),
                  y !== this._tTime || n || b)
                ) {
                  if (
                    (m !== this._time &&
                      v &&
                      ((y += this._time - m), (e += this._time - m)),
                    (r = y),
                    (d = this._start),
                    (l = !(u = this._ts)),
                    b &&
                      (v || (m = this._zTime), (!e && t) || (this._zTime = e)),
                    this._repeat)
                  ) {
                    if (
                      ((f = this._yoyo),
                      (a = v + this._rDelay),
                      this._repeat < -1 && e < 0)
                    )
                      return this.totalTime(100 * a + e, t, n);
                    if (
                      ((r = _(y % a)),
                      y === g
                        ? ((o = this._repeat), (r = v))
                        : ((o = ~~(y / a)) && o === y / a && ((r = v), o--),
                          v < r && (r = v)),
                      (p = wt(this._tTime, a)),
                      !m && this._tTime && p !== o && (p = o),
                      f && 1 & o && ((r = v - r), (h = 1)),
                      o !== p && !this._lock)
                    ) {
                      var x = f && 1 & p,
                        w = x === (f && 1 & o);
                      if (
                        (o < p && (x = !x),
                        (m = x ? 0 : v),
                        (this._lock = 1),
                        (this.render(m || (h ? 0 : _(o * a)), t, !v)._lock = 0),
                        (this._tTime = y),
                        !t && this.parent && Pt(this, "onRepeat"),
                        this.vars.repeatRefresh &&
                          !h &&
                          (this.invalidate()._lock = 1),
                        (m && m !== this._time) ||
                          l != !this._ts ||
                          (this.vars.onRepeat && !this.parent && !this._act))
                      )
                        return this;
                      if (
                        ((v = this._dur),
                        (g = this._tDur),
                        w &&
                          ((this._lock = 2),
                          (m = x ? v : -1e-4),
                          this.render(m, !0),
                          this.vars.repeatRefresh && !h && this.invalidate()),
                        (this._lock = 0),
                        !this._ts && !l)
                      )
                        return this;
                      pe(this, h);
                    }
                  }
                  if (
                    (this._hasPause &&
                      !this._forcing &&
                      this._lock < 2 &&
                      (c = (function (e, t, n) {
                        var r;
                        if (t < n)
                          for (r = e._first; r && r._start <= n; ) {
                            if ("isPause" === r.data && r._start > t) return r;
                            r = r._next;
                          }
                        else
                          for (r = e._last; r && r._start >= n; ) {
                            if ("isPause" === r.data && r._start < t) return r;
                            r = r._prev;
                          }
                      })(this, _(m), _(r))) &&
                      (y -= r - (r = c._start)),
                    (this._tTime = y),
                    (this._time = r),
                    (this._act = !u),
                    this._initted ||
                      ((this._onUpdate = this.vars.onUpdate),
                      (this._initted = 1),
                      (this._zTime = e),
                      (m = 0)),
                    !m && r && !t && (Pt(this, "onStart"), this._tTime !== y))
                  )
                    return this;
                  if (m <= r && 0 <= e)
                    for (i = this._first; i; ) {
                      if (
                        ((s = i._next),
                        (i._act || r >= i._start) && i._ts && c !== i)
                      ) {
                        if (i.parent !== this) return this.render(e, t, n);
                        if (
                          (i.render(
                            0 < i._ts
                              ? (r - i._start) * i._ts
                              : (i._dirty ? i.totalDuration() : i._tDur) +
                                  (r - i._start) * i._ts,
                            t,
                            n
                          ),
                          r !== this._time || (!this._ts && !l))
                        ) {
                          (c = 0), s && (y += this._zTime = -Ve);
                          break;
                        }
                      }
                      i = s;
                    }
                  else {
                    (n = n || ye), (i = this._last);
                    for (var T = e < 0 ? e : r; i; ) {
                      if (
                        ((s = i._prev),
                        (i._act || T <= i._end) && i._ts && c !== i)
                      ) {
                        if (i.parent !== this) return this.render(e, t, n);
                        if (
                          (i.render(
                            0 < i._ts
                              ? (T - i._start) * i._ts
                              : (i._dirty ? i.totalDuration() : i._tDur) +
                                  (T - i._start) * i._ts,
                            t,
                            n
                          ),
                          r !== this._time || (!this._ts && !l))
                        ) {
                          (c = 0), s && (y += this._zTime = T ? -Ve : Ve);
                          break;
                        }
                      }
                      i = s;
                    }
                  }
                  if (
                    c &&
                    !t &&
                    (this.pause(),
                    (c.render(m <= r ? 0 : -Ve)._zTime = m <= r ? 1 : -1),
                    this._ts)
                  )
                    return (this._start = d), N(this), this.render(e, t, n);
                  this._onUpdate && !t && Pt(this, "onUpdate", !0),
                    ((y === g && this._tTime >= this.totalDuration()) ||
                      (!y && m)) &&
                      ((d !== this._start &&
                        Math.abs(u) === Math.abs(this._ts)) ||
                        this._lock ||
                        ((!e && v) ||
                          !(
                            (y === g && 0 < this._ts) ||
                            (!y && this._ts < 0)
                          ) ||
                          D(this, 1),
                        t ||
                          (e < 0 && !m) ||
                          (!y && !m && g) ||
                          (Pt(
                            this,
                            y === g && 0 <= e
                              ? "onComplete"
                              : "onReverseComplete",
                            !0
                          ),
                          !this._prom ||
                            (y < g && 0 < this.timeScale()) ||
                            this._prom())));
                }
                return this;
              }),
              (a.add = function (e, t) {
                var n = this;
                if ((s(t) || (t = Et(this, t, e)), !(e instanceof jt))) {
                  if (nt(e))
                    return (
                      e.forEach(function (e) {
                        return n.add(e, t);
                      }),
                      this
                    );
                  if (r(e)) return this.addLabel(e, t);
                  if (!i(e)) return this;
                  e = sn.delayedCall(0, e);
                }
                return this !== e ? W(this, e, t) : this;
              }),
              (a.getChildren = function (e, t, n, r) {
                void 0 === e && (e = !0),
                  void 0 === t && (t = !0),
                  void 0 === n && (n = !0),
                  void 0 === r && (r = -Ge);
                for (var i = [], s = this._first; s; )
                  s._start >= r &&
                    (s instanceof sn
                      ? t && i.push(s)
                      : (n && i.push(s),
                        e && i.push.apply(i, s.getChildren(!0, t, n)))),
                    (s = s._next);
                return i;
              }),
              (a.getById = function (e) {
                for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
                  if (t[n].vars.id === e) return t[n];
              }),
              (a.remove = function (e) {
                return r(e)
                  ? this.removeLabel(e)
                  : i(e)
                  ? this.killTweensOf(e)
                  : (z(this, e),
                    e === this._recent && (this._recent = this._last),
                    I(this));
              }),
              (a.totalTime = function (t, n) {
                return arguments.length
                  ? ((this._forcing = 1),
                    !this._dp &&
                      this._ts &&
                      (this._start = _(
                        It.time -
                          (0 < this._ts
                            ? t / this._ts
                            : (this.totalDuration() - t) / -this._ts)
                      )),
                    e.prototype.totalTime.call(this, t, n),
                    (this._forcing = 0),
                    this)
                  : this._tTime;
              }),
              (a.addLabel = function (e, t) {
                return (this.labels[e] = Et(this, t)), this;
              }),
              (a.removeLabel = function (e) {
                return delete this.labels[e], this;
              }),
              (a.addPause = function (e, t, n) {
                var r = sn.delayedCall(0, t || m, n);
                return (
                  (r.data = "isPause"),
                  (this._hasPause = 1),
                  W(this, r, Et(this, e))
                );
              }),
              (a.removePause = function (e) {
                var t = this._first;
                for (e = Et(this, e); t; )
                  t._start === e && "isPause" === t.data && D(t), (t = t._next);
              }),
              (a.killTweensOf = function (e, t, n) {
                for (var r = this.getTweensOf(e, n), i = r.length; i--; )
                  Qt !== r[i] && r[i].kill(e, t);
                return this;
              }),
              (a.getTweensOf = function (e, t) {
                for (var n, r = [], i = Lt(e), o = this._first, a = s(t); o; )
                  o instanceof sn
                    ? T(o._targets, i) &&
                      (a
                        ? (!Qt || (o._initted && o._ts)) &&
                          o.globalTime(0) <= t &&
                          o.globalTime(o.totalDuration()) > t
                        : !t || o.isActive()) &&
                      r.push(o)
                    : (n = o.getTweensOf(i, t)).length && r.push.apply(r, n),
                    (o = o._next);
                return r;
              }),
              (a.tweenTo = function (e, t) {
                t = t || {};
                var n,
                  r = this,
                  i = Et(r, e),
                  s = t.startAt,
                  o = t.onStart,
                  a = t.onStartParams,
                  l = t.immediateRender,
                  c = sn.to(
                    r,
                    L(
                      {
                        ease: t.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: i,
                        overwrite: "auto",
                        duration:
                          t.duration ||
                          Math.abs(
                            (i - (s && "time" in s ? s.time : r._time)) /
                              r.timeScale()
                          ) ||
                          Ve,
                        onStart: function () {
                          if ((r.pause(), !n)) {
                            var e =
                              t.duration ||
                              Math.abs(
                                (i - (s && "time" in s ? s.time : r._time)) /
                                  r.timeScale()
                              );
                            c._dur !== e &&
                              Y(c, e, 0, 1).render(c._time, !0, !0),
                              (n = 1);
                          }
                          o && o.apply(c, a || []);
                        },
                      },
                      t
                    )
                  );
                return l ? c.render(0) : c;
              }),
              (a.tweenFromTo = function (e, t, n) {
                return this.tweenTo(
                  t,
                  L({ startAt: { time: Et(this, e) } }, n)
                );
              }),
              (a.recent = function () {
                return this._recent;
              }),
              (a.nextLabel = function (e) {
                return void 0 === e && (e = this._time), se(this, Et(this, e));
              }),
              (a.previousLabel = function (e) {
                return (
                  void 0 === e && (e = this._time), se(this, Et(this, e), 1)
                );
              }),
              (a.currentLabel = function (e) {
                return arguments.length
                  ? this.seek(e, !0)
                  : this.previousLabel(this._time + Ve);
              }),
              (a.shiftChildren = function (e, t, n) {
                void 0 === n && (n = 0);
                for (var r, i = this._first, s = this.labels; i; )
                  i._start >= n && ((i._start += e), (i._end += e)),
                    (i = i._next);
                if (t) for (r in s) s[r] >= n && (s[r] += e);
                return I(this);
              }),
              (a.invalidate = function () {
                var t = this._first;
                for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
                return e.prototype.invalidate.call(this);
              }),
              (a.clear = function (e) {
                void 0 === e && (e = !0);
                for (var t, n = this._first; n; )
                  (t = n._next), this.remove(n), (n = t);
                return (
                  this._dp && (this._time = this._tTime = this._pTime = 0),
                  e && (this.labels = {}),
                  I(this)
                );
              }),
              (a.totalDuration = function (e) {
                var t,
                  n,
                  r,
                  i = 0,
                  s = this,
                  o = s._last,
                  a = Ge;
                if (arguments.length)
                  return s.timeScale(
                    (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                      (s.reversed() ? -e : e)
                  );
                if (s._dirty) {
                  for (r = s.parent; o; )
                    (t = o._prev),
                      o._dirty && o.totalDuration(),
                      a < (n = o._start) && s._sort && o._ts && !s._lock
                        ? ((s._lock = 1), (W(s, o, n - o._delay, 1)._lock = 0))
                        : (a = n),
                      n < 0 &&
                        o._ts &&
                        ((i -= n),
                        ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                          ((s._start += n / s._ts),
                          (s._time -= n),
                          (s._tTime -= n)),
                        s.shiftChildren(-n, !1, -1 / 0),
                        (a = 0)),
                      o._end > i && o._ts && (i = o._end),
                      (o = t);
                  Y(s, s === xe && s._time > i ? s._time : i, 1, 1),
                    (s._dirty = 0);
                }
                return s._tDur;
              }),
              (o.updateRoot = function (e) {
                if (
                  (xe._ts && (E(xe, R(e, xe)), (Ce = It.frame)), It.frame >= yt)
                ) {
                  yt += Ye.autoSleep || 120;
                  var t = xe._first;
                  if (
                    (!t || !t._ts) &&
                    Ye.autoSleep &&
                    It._listeners.length < 2
                  ) {
                    for (; t && !t._ts; ) t = t._next;
                    t || It.sleep();
                  }
                }
              }),
              o
            );
          })(jt);
          function Ut(e, t, n, s, o, l) {
            var c, u, d, p;
            if (
              gt[e] &&
              !1 !==
                (c = new gt[e]()).init(
                  o,
                  c.rawVars
                    ? t[e]
                    : (function (e, t, n, s, o) {
                        if (
                          (i(e) && (e = tn(e, o, t, n, s)),
                          !a(e) || (e.style && e.nodeType) || nt(e) || tt(e))
                        )
                          return r(e) ? tn(e, o, t, n, s) : e;
                        var l,
                          c = {};
                        for (l in e) c[l] = tn(e[l], o, t, n, s);
                        return c;
                      })(t[e], s, o, l, n),
                  n,
                  s,
                  l
                ) &&
              ((n._pt = u =
                new bn(n._pt, o, e, 0, 1, c.render, c, 0, c.priority)),
              n !== ke)
            )
              for (
                d = n._ptLookup[n._targets.indexOf(o)], p = c._props.length;
                p--;

              )
                d[c._props[p]] = u;
            return c;
          }
          function Kt(e, t, n, r) {
            var i,
              s,
              o = t.ease || r || "power1.inOut";
            if (nt(t))
              (s = n[e] || (n[e] = [])),
                t.forEach(function (e, n) {
                  return s.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
                });
            else
              for (i in t)
                (s = n[i] || (n[i] = [])),
                  "ease" === i || s.push({ t: parseFloat(e), v: t[i], e: o });
          }
          L(Vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
          var Qt,
            Zt,
            Jt = function (e, t, n, s, o, a, l, c, u, d) {
              i(s) && (s = s(o || 0, e, a));
              var f,
                h = e[t],
                m =
                  "get" !== n
                    ? n
                    : i(h)
                    ? u
                      ? e[
                          t.indexOf("set") || !i(e["get" + t.substr(3)])
                            ? t
                            : "get" + t.substr(3)
                        ](u)
                      : e[t]()
                    : h,
                g = i(h) ? (u ? un : cn) : ln;
              if (
                (r(s) &&
                  (~s.indexOf("random(") && (s = ie(s)),
                  "=" === s.charAt(1) &&
                    ((!(f = w(m, s) + (U(m) || 0)) && 0 !== f) || (s = f))),
                !d || m !== s || Zt)
              )
                return isNaN(m * s) || "" === s
                  ? (h || t in e || p(t, s),
                    function (e, t, n, r, i, s, o) {
                      var a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        m = new bn(this._pt, e, t, 0, 1, hn, null, i),
                        g = 0,
                        v = 0;
                      for (
                        m.b = n,
                          m.e = r,
                          n += "",
                          (f = ~(r += "").indexOf("random(")) && (r = ie(r)),
                          s && (s((h = [n, r]), e, t), (n = h[0]), (r = h[1])),
                          l = n.match(ot) || [];
                        (a = ot.exec(r));

                      )
                        (u = a[0]),
                          (d = r.substring(g, a.index)),
                          c
                            ? (c = (c + 1) % 5)
                            : "rgba(" === d.substr(-5) && (c = 1),
                          u !== l[v++] &&
                            ((p = parseFloat(l[v - 1]) || 0),
                            (m._pt = {
                              _next: m._pt,
                              p: d || 1 === v ? d : ",",
                              s: p,
                              c:
                                "=" === u.charAt(1)
                                  ? w(p, u) - p
                                  : parseFloat(u) - p,
                              m: c && c < 4 ? Math.round : 0,
                            }),
                            (g = ot.lastIndex));
                      return (
                        (m.c = g < r.length ? r.substring(g, r.length) : ""),
                        (m.fp = o),
                        (at.test(r) || f) && (m.e = 0),
                        (this._pt = m)
                      );
                    }.call(this, e, t, m, s, g, c || Ye.stringFilter, u))
                  : ((f = new bn(
                      this._pt,
                      e,
                      t,
                      +m || 0,
                      s - (m || 0),
                      "boolean" == typeof h ? fn : pn,
                      0,
                      g
                    )),
                    u && (f.fp = u),
                    l && f.modifier(l, this, e),
                    (this._pt = f));
            },
            en = function e(t, n) {
              var r,
                i,
                s,
                o,
                a,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                y,
                b = t.vars,
                x = b.ease,
                _ = b.startAt,
                w = b.immediateRender,
                T = b.lazy,
                E = b.onUpdate,
                C = b.onUpdateParams,
                k = b.callbackScope,
                M = b.runBackwards,
                A = b.yoyoEase,
                O = b.keyframes,
                z = b.autoRevert,
                I = t._dur,
                $ = t._startAt,
                F = t._targets,
                R = t.parent,
                N = R && "nested" === R.data ? R.vars.targets : F,
                B = "auto" === t._overwrite && !ve,
                H = t.timeline;
              if (
                (!H || (O && x) || (x = "none"),
                (t._ease = Ht(x, je.ease)),
                (t._yEase = A ? Bt(Ht(!0 === A ? x : A, je.ease)) : 0),
                A &&
                  t._yoyo &&
                  !t._repeat &&
                  ((A = t._yEase), (t._yEase = t._ease), (t._ease = A)),
                (t._from = !H && !!b.runBackwards),
                !H || (O && !b.stagger))
              ) {
                if (
                  ((m = (d = F[0] ? v(F[0]).harness : 0) && b[d.prop]),
                  (r = P(b, ft)),
                  $ &&
                    (n < 0 && M && w && !z
                      ? $.render(-1, !0)
                      : $.revert(M && I ? pt : dt),
                    ($._lazy = 0)),
                  _)
                ) {
                  if (
                    (D(
                      (t._startAt = sn.set(
                        F,
                        L(
                          {
                            data: "isStart",
                            overwrite: !1,
                            parent: R,
                            immediateRender: !0,
                            lazy: l(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: E,
                            onUpdateParams: C,
                            callbackScope: k,
                            stagger: 0,
                          },
                          _
                        )
                      ))
                    ),
                    n < 0 && (ye || (!w && !z)) && t._startAt.revert(pt),
                    w && I && n <= 0)
                  )
                    return void (n && (t._zTime = n));
                } else if (M && I && !$)
                  if (
                    (n && (w = !1),
                    (s = L(
                      {
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: w && l(T),
                        immediateRender: w,
                        stagger: 0,
                        parent: R,
                      },
                      r
                    )),
                    m && (s[d.prop] = m),
                    D((t._startAt = sn.set(F, s))),
                    n < 0 &&
                      (ye ? t._startAt.revert(pt) : t._startAt.render(-1, !0)),
                    (t._zTime = n),
                    w)
                  ) {
                    if (!n) return;
                  } else e(t._startAt, Ve);
                for (
                  t._pt = t._ptCache = 0, T = (I && l(T)) || (T && !I), i = 0;
                  i < F.length;
                  i++
                ) {
                  if (
                    ((u = (a = F[i])._gsap || g(F)[i]._gsap),
                    (t._ptLookup[i] = f = {}),
                    mt[u.id] && ht.length && S(),
                    (h = N === F ? i : N.indexOf(a)),
                    d &&
                      !1 !== (p = new d()).init(a, m || r, t, h, N) &&
                      ((t._pt = o =
                        new bn(
                          t._pt,
                          a,
                          p.name,
                          0,
                          1,
                          p.render,
                          p,
                          0,
                          p.priority
                        )),
                      p._props.forEach(function (e) {
                        f[e] = o;
                      }),
                      p.priority && (c = 1)),
                    !d || m)
                  )
                    for (s in r)
                      gt[s] && (p = Ut(s, r, t, h, a, N))
                        ? p.priority && (c = 1)
                        : (f[s] = o =
                            Jt.call(
                              t,
                              a,
                              s,
                              "get",
                              r[s],
                              h,
                              N,
                              0,
                              b.stringFilter
                            ));
                  t._op && t._op[i] && t.kill(a, t._op[i]),
                    B &&
                      t._pt &&
                      ((Qt = t),
                      xe.killTweensOf(a, f, t.globalTime(n)),
                      (y = !t.parent),
                      (Qt = 0)),
                    t._pt && T && (mt[u.id] = 1);
                }
                c && yn(t), t._onInit && t._onInit(t);
              }
              (t._onUpdate = E),
                (t._initted = (!t._op || t._pt) && !y),
                O && n <= 0 && H.render(Ge, !0, !0);
            },
            tn = function (e, t, n, s, o) {
              return i(e)
                ? e.call(t, n, s, o)
                : r(e) && ~e.indexOf("random(")
                ? ie(e)
                : e;
            },
            nn =
              xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            rn = {};
          b(
            nn + ",id,stagger,delay,duration,paused,scrollTrigger",
            function (e) {
              return (rn[e] = 1);
            }
          );
          var sn = (function (e) {
            function i(t, r, i, o) {
              var c;
              "number" == typeof r && ((i.duration = r), (r = i), (i = null));
              var d,
                p,
                h,
                m,
                v,
                y,
                b,
                x,
                w = (c = e.call(this, o ? r : A(r)) || this).vars,
                T = w.duration,
                S = w.delay,
                E = w.immediateRender,
                C = w.stagger,
                k = w.overwrite,
                M = w.keyframes,
                O = w.defaults,
                z = w.scrollTrigger,
                D = w.yoyoEase,
                I = r.parent || xe,
                $ = (nt(t) || tt(t) ? s(t[0]) : "length" in r) ? [t] : Lt(t);
              if (
                ((c._targets = $.length
                  ? g($)
                  : f(
                      "GSAP target " + t + " not found. https://greensock.com",
                      !Ye.nullTargetWarn
                    ) || []),
                (c._ptLookup = []),
                (c._overwrite = k),
                M || C || u(T) || u(S))
              ) {
                if (
                  ((r = c.vars),
                  (d = c.timeline =
                    new Vt({
                      data: "nested",
                      defaults: O || {},
                      targets: I && "nested" === I.data ? I.vars.targets : $,
                    })).kill(),
                  (d.parent = d._dp = n(c)),
                  (d._start = 0),
                  C || u(T) || u(S))
                ) {
                  if (((m = $.length), (b = C && J(C)), a(C)))
                    for (v in C) ~nn.indexOf(v) && ((x = x || {})[v] = C[v]);
                  for (p = 0; p < m; p++)
                    ((h = P(r, rn)).stagger = 0),
                      D && (h.yoyoEase = D),
                      x && _t(h, x),
                      (y = $[p]),
                      (h.duration = +tn(T, n(c), p, y, $)),
                      (h.delay = (+tn(S, n(c), p, y, $) || 0) - c._delay),
                      !C &&
                        1 === m &&
                        h.delay &&
                        ((c._delay = S = h.delay),
                        (c._start += S),
                        (h.delay = 0)),
                      d.to(y, h, b ? b(p, y, $) : 0),
                      (d._ease = Ft.none);
                  d.duration() ? (T = S = 0) : (c.timeline = 0);
                } else if (M) {
                  A(L(d.vars.defaults, { ease: "none" })),
                    (d._ease = Ht(M.ease || r.ease || "none"));
                  var F,
                    R,
                    N,
                    B = 0;
                  if (nt(M))
                    M.forEach(function (e) {
                      return d.to($, e, ">");
                    }),
                      d.duration();
                  else {
                    for (v in ((h = {}), M))
                      "ease" === v ||
                        "easeEach" === v ||
                        Kt(v, M[v], h, M.easeEach);
                    for (v in h)
                      for (
                        F = h[v].sort(function (e, t) {
                          return e.t - t.t;
                        }),
                          p = B = 0;
                        p < F.length;
                        p++
                      )
                        ((N = {
                          ease: (R = F[p]).e,
                          duration: ((R.t - (p ? F[p - 1].t : 0)) / 100) * T,
                        })[v] = R.v),
                          d.to($, N, B),
                          (B += N.duration);
                    d.duration() < T &&
                      d.to({}, { duration: T - d.duration() });
                  }
                }
                T || c.duration((T = d.duration()));
              } else c.timeline = 0;
              return (
                !0 !== k || ve || ((Qt = n(c)), xe.killTweensOf($), (Qt = 0)),
                W(I, n(c), i),
                r.reversed && c.reverse(),
                r.paused && c.paused(!0),
                (E ||
                  (!T &&
                    !M &&
                    c._start === _(I._time) &&
                    l(E) &&
                    (function e(t) {
                      return !t || (t._ts && e(t.parent));
                    })(n(c)) &&
                    "nested" !== I.data)) &&
                  ((c._tTime = -Ve), c.render(Math.max(0, -S))),
                z && q(n(c), z),
                c
              );
            }
            t(i, e);
            var o = i.prototype;
            return (
              (o.render = function (e, t, n) {
                var r,
                  i,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p = this._time,
                  f = this._tDur,
                  h = this._dur,
                  m = e < 0,
                  g = f - Ve < e && !m ? f : e < Ve ? 0 : e;
                if (h) {
                  if (
                    g !== this._tTime ||
                    !e ||
                    n ||
                    (!this._initted && this._tTime) ||
                    (this._startAt && this._zTime < 0 != m)
                  ) {
                    if (((r = g), (u = this.timeline), this._repeat)) {
                      if (((o = h + this._rDelay), this._repeat < -1 && m))
                        return this.totalTime(100 * o + e, t, n);
                      if (
                        ((r = _(g % o)),
                        g === f
                          ? ((s = this._repeat), (r = h))
                          : ((s = ~~(g / o)) && s === g / o && ((r = h), s--),
                            h < r && (r = h)),
                        (l = this._yoyo && 1 & s) &&
                          ((d = this._yEase), (r = h - r)),
                        (a = wt(this._tTime, o)),
                        r === p && !n && this._initted)
                      )
                        return (this._tTime = g), this;
                      s !== a &&
                        (u && this._yEase && pe(u, l),
                        !this.vars.repeatRefresh ||
                          l ||
                          this._lock ||
                          ((this._lock = n = 1),
                          (this.render(_(o * s), !0).invalidate()._lock = 0)));
                    }
                    if (!this._initted) {
                      if (X(this, m ? e : r, n, t))
                        return (this._tTime = 0), this;
                      if (p !== this._time) return this;
                      if (h !== this._dur) return this.render(e, t, n);
                    }
                    if (
                      ((this._tTime = g),
                      (this._time = r),
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      (this.ratio = c = (d || this._ease)(r / h)),
                      this._from && (this.ratio = c = 1 - c),
                      r && !p && !t && (Pt(this, "onStart"), this._tTime !== g))
                    )
                      return this;
                    for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
                    (u &&
                      u.render(
                        e < 0
                          ? e
                          : !r && l
                          ? -Ve
                          : u._dur * u._ease(r / this._dur),
                        t,
                        n
                      )) ||
                      (this._startAt && (this._zTime = e)),
                      this._onUpdate &&
                        !t &&
                        (m && $(this, e, 0, n), Pt(this, "onUpdate")),
                      this._repeat &&
                        s !== a &&
                        this.vars.onRepeat &&
                        !t &&
                        this.parent &&
                        Pt(this, "onRepeat"),
                      (g !== this._tDur && g) ||
                        this._tTime !== g ||
                        (m && !this._onUpdate && $(this, e, 0, !0),
                        (!e && h) ||
                          !(
                            (g === this._tDur && 0 < this._ts) ||
                            (!g && this._ts < 0)
                          ) ||
                          D(this, 1),
                        t ||
                          (m && !p) ||
                          (!g && !p) ||
                          (Pt(
                            this,
                            g === f ? "onComplete" : "onReverseComplete",
                            !0
                          ),
                          !this._prom ||
                            (g < f && 0 < this.timeScale()) ||
                            this._prom()));
                  }
                } else
                  !(function (e, t, n, r) {
                    var i,
                      s,
                      o,
                      a = e.ratio,
                      l =
                        t < 0 ||
                        (!t &&
                          ((!e._start &&
                            (function e(t) {
                              var n = t.parent;
                              return (
                                n &&
                                n._ts &&
                                n._initted &&
                                !n._lock &&
                                (n.rawTime() < 0 || e(n))
                              );
                            })(e) &&
                            (e._initted || !Tt(e))) ||
                            ((e._ts < 0 || e._dp._ts < 0) && !Tt(e))))
                          ? 0
                          : 1,
                      c = e._rDelay,
                      u = 0;
                    if (
                      (c &&
                        e._repeat &&
                        ((u = Ct(0, e._tDur, t)),
                        (s = wt(u, c)),
                        e._yoyo && 1 & s && (l = 1 - l),
                        s !== wt(e._tTime, c) &&
                          ((a = 1 - l),
                          e.vars.repeatRefresh &&
                            e._initted &&
                            e.invalidate())),
                      l !== a || ye || r || e._zTime === Ve || (!t && e._zTime))
                    ) {
                      if (!e._initted && X(e, t, r, n)) return;
                      for (
                        o = e._zTime,
                          e._zTime = t || (n ? Ve : 0),
                          n = n || (t && !o),
                          e.ratio = l,
                          e._from && (l = 1 - l),
                          e._time = 0,
                          e._tTime = u,
                          i = e._pt;
                        i;

                      )
                        i.r(l, i.d), (i = i._next);
                      t < 0 && $(e, t, 0, !0),
                        e._onUpdate && !n && Pt(e, "onUpdate"),
                        u && e._repeat && !n && e.parent && Pt(e, "onRepeat"),
                        (t >= e._tDur || t < 0) &&
                          e.ratio === l &&
                          (l && D(e, 1),
                          n ||
                            ye ||
                            (Pt(e, l ? "onComplete" : "onReverseComplete", !0),
                            e._prom && e._prom()));
                    } else e._zTime || (e._zTime = t);
                  })(this, e, t, n);
                return this;
              }),
              (o.targets = function () {
                return this._targets;
              }),
              (o.invalidate = function () {
                return (
                  (this._pt =
                    this._op =
                    this._startAt =
                    this._onUpdate =
                    this._lazy =
                    this.ratio =
                      0),
                  (this._ptLookup = []),
                  this.timeline && this.timeline.invalidate(),
                  e.prototype.invalidate.call(this)
                );
              }),
              (o.resetTo = function (e, t, n, r) {
                Le || It.wake(), this._ts || this.play();
                var i = Math.min(
                  this._dur,
                  (this._dp._time - this._start) * this._ts
                );
                return (
                  this._initted || en(this, i),
                  (function (e, t, n, r, i, s, o) {
                    var a,
                      l,
                      c,
                      u,
                      d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
                    if (!d)
                      for (
                        d = e._ptCache[t] = [],
                          c = e._ptLookup,
                          u = e._targets.length;
                        u--;

                      ) {
                        if ((a = c[u][t]) && a.d && a.d._pt)
                          for (a = a.d._pt; a && a.p !== t && a.fp !== t; )
                            a = a._next;
                        if (!a)
                          return (
                            (Zt = 1), (e.vars[t] = "+=0"), en(e, o), (Zt = 0), 1
                          );
                        d.push(a);
                      }
                    for (u = d.length; u--; )
                      ((a = (l = d[u])._pt || l).s =
                        (!r && 0 !== r) || i ? a.s + (r || 0) + s * a.c : r),
                        (a.c = n - a.s),
                        l.e && (l.e = x(n) + U(l.e)),
                        l.b && (l.b = a.s + U(l.b));
                  })(this, e, t, n, r, this._ease(i / this._dur), i)
                    ? this.resetTo(e, t, n, r)
                    : (B(this, 0),
                      this.parent ||
                        O(
                          this._dp,
                          this,
                          "_first",
                          "_last",
                          this._dp._sort ? "_start" : 0
                        ),
                      this.render(0))
                );
              }),
              (o.kill = function (e, t) {
                if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
                  return (
                    (this._lazy = this._pt = 0), this.parent ? oe(this) : this
                  );
                if (this.timeline) {
                  var n = this.timeline.totalDuration();
                  return (
                    this.timeline.killTweensOf(
                      e,
                      t,
                      Qt && !0 !== Qt.vars.overwrite
                    )._first || oe(this),
                    this.parent &&
                      n !== this.timeline.totalDuration() &&
                      Y(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                    this
                  );
                }
                var i,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d = this._targets,
                  p = e ? Lt(e) : d,
                  f = this._ptLookup,
                  h = this._pt;
                if (
                  (!t || "all" === t) &&
                  (function (e, t) {
                    for (
                      var n = e.length, r = n === t.length;
                      r && n-- && e[n] === t[n];

                    );
                    return n < 0;
                  })(d, p)
                )
                  return "all" === t && (this._pt = 0), oe(this);
                for (
                  i = this._op = this._op || [],
                    "all" !== t &&
                      (r(t) &&
                        ((l = {}),
                        b(t, function (e) {
                          return (l[e] = 1);
                        }),
                        (t = l)),
                      (t = (function (e, t) {
                        var n,
                          r,
                          i,
                          s,
                          o = e[0] ? v(e[0]).harness : 0,
                          a = o && o.aliases;
                        if (!a) return t;
                        for (r in ((n = _t({}, t)), a))
                          if ((r in n))
                            for (i = (s = a[r].split(",")).length; i--; )
                              n[s[i]] = n[r];
                        return n;
                      })(d, t))),
                    u = d.length;
                  u--;

                )
                  if (~p.indexOf(d[u]))
                    for (l in ((s = f[u]),
                    "all" === t
                      ? ((i[u] = t), (a = s), (o = {}))
                      : ((o = i[u] = i[u] || {}), (a = t)),
                    a))
                      (c = s && s[l]) &&
                        (("kill" in c.d && !0 !== c.d.kill(l)) ||
                          z(this, c, "_pt"),
                        delete s[l]),
                        "all" !== o && (o[l] = 1);
                return this._initted && !this._pt && h && oe(this), this;
              }),
              (i.to = function (e, t, n) {
                return new i(e, t, n);
              }),
              (i.from = function (e, t) {
                return G(1, arguments);
              }),
              (i.delayedCall = function (e, t, n, r) {
                return new i(t, 0, {
                  immediateRender: !1,
                  lazy: !1,
                  overwrite: !1,
                  delay: e,
                  onComplete: t,
                  onReverseComplete: t,
                  onCompleteParams: n,
                  onReverseCompleteParams: n,
                  callbackScope: r,
                });
              }),
              (i.fromTo = function (e, t, n) {
                return G(2, arguments);
              }),
              (i.set = function (e, t) {
                return (
                  (t.duration = 0), t.repeatDelay || (t.repeat = 0), new i(e, t)
                );
              }),
              (i.killTweensOf = function (e, t, n) {
                return xe.killTweensOf(e, t, n);
              }),
              i
            );
          })(jt);
          function on(e, t, n) {
            return e.setAttribute(t, n);
          }
          function an(e, t, n, r) {
            r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
          }
          L(sn.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0,
          }),
            b("staggerTo,staggerFrom,staggerFromTo", function (e) {
              sn[e] = function () {
                var t = new Vt(),
                  n = kt.call(arguments, 0);
                return (
                  n.splice("staggerFromTo" === e ? 5 : 4, 0, 0),
                  t[e].apply(t, n)
                );
              };
            });
          var ln = function (e, t, n) {
              return (e[t] = n);
            },
            cn = function (e, t, n) {
              return e[t](n);
            },
            un = function (e, t, n, r) {
              return e[t](r.fp, n);
            },
            dn = function (e, t) {
              return i(e[t]) ? cn : o(e[t]) && e.setAttribute ? on : ln;
            },
            pn = function (e, t) {
              return t.set(
                t.t,
                t.p,
                Math.round(1e6 * (t.s + t.c * e)) / 1e6,
                t
              );
            },
            fn = function (e, t) {
              return t.set(t.t, t.p, !!(t.s + t.c * e), t);
            },
            hn = function (e, t) {
              var n = t._pt,
                r = "";
              if (!e && t.b) r = t.b;
              else if (1 === e && t.e) r = t.e;
              else {
                for (; n; )
                  (r =
                    n.p +
                    (n.m
                      ? n.m(n.s + n.c * e)
                      : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                    r),
                    (n = n._next);
                r += t.c;
              }
              t.set(t.t, t.p, r, t);
            },
            mn = function (e, t) {
              for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
            },
            gn = function (e, t, n, r) {
              for (var i, s = this._pt; s; )
                (i = s._next), s.p === r && s.modifier(e, t, n), (s = i);
            },
            vn = function (e) {
              for (var t, n, r = this._pt; r; )
                (n = r._next),
                  (r.p === e && !r.op) || r.op === e
                    ? z(this, r, "_pt")
                    : r.dep || (t = 1),
                  (r = n);
              return !t;
            },
            yn = function (e) {
              for (var t, n, r, i, s = e._pt; s; ) {
                for (t = s._next, n = r; n && n.pr > s.pr; ) n = n._next;
                (s._prev = n ? n._prev : i) ? (s._prev._next = s) : (r = s),
                  (s._next = n) ? (n._prev = s) : (i = s),
                  (s = t);
              }
              e._pt = r;
            },
            bn =
              ((xn.prototype.modifier = function (e, t, n) {
                (this.mSet = this.mSet || this.set),
                  (this.set = an),
                  (this.m = e),
                  (this.mt = n),
                  (this.tween = t);
              }),
              xn);
          function xn(e, t, n, r, i, s, o, a, l) {
            (this.t = t),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = s || pn),
              (this.d = o || this),
              (this.set = a || ln),
              (this.pr = l || 0),
              (this._next = e) && (e._prev = this);
          }
          function _n(e) {
            return (En[e] || Cn).map(function (e) {
              return e();
            });
          }
          function wn() {
            var e = Date.now(),
              t = [];
            2 < e - kn &&
              (_n("matchMediaInit"),
              Sn.forEach(function (e) {
                var n,
                  r,
                  i,
                  s,
                  o = e.queries,
                  a = e.conditions;
                for (r in o)
                  (n = _e.matchMedia(o[r]).matches) && (i = 1),
                    n !== a[r] && ((a[r] = n), (s = 1));
                s && (e.revert(), i && t.push(e));
              }),
              _n("matchMediaRevert"),
              t.forEach(function (e) {
                return e.onMatch(e);
              }),
              (kn = e),
              _n("matchMedia"));
          }
          b(
            xt +
              "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (e) {
              return (ft[e] = 1);
            }
          ),
            (ut.TweenMax = ut.TweenLite = sn),
            (ut.TimelineLite = ut.TimelineMax = Vt),
            (xe = new Vt({
              sortChildren: !1,
              defaults: je,
              autoRemoveChildren: !0,
              id: "root",
              smoothChildTiming: !0,
            })),
            (Ye.stringFilter = de);
          var Tn,
            Sn = [],
            En = {},
            Cn = [],
            kn = 0,
            Ln =
              (((Tn = Mn.prototype).add = function (e, t, n) {
                function r() {
                  var e,
                    r = be,
                    o = s.selector;
                  return (
                    r && r !== s && r.data.push(s),
                    n && (s.selector = Q(n)),
                    (be = s),
                    i((e = t.apply(s, arguments))) && s._r.push(e),
                    (be = r),
                    (s.selector = o),
                    (s.isReverted = !1),
                    e
                  );
                }
                i(e) && ((n = t), (t = e), (e = i));
                var s = this;
                return (s.last = r), e === i ? r(s) : e ? (s[e] = r) : r;
              }),
              (Tn.ignore = function (e) {
                var t = be;
                (be = null), e(this), (be = t);
              }),
              (Tn.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (t) {
                    return t instanceof Mn
                      ? e.push.apply(e, t.getTweens())
                      : t instanceof sn && e.push(t);
                  }),
                  e
                );
              }),
              (Tn.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (Tn.kill = function (e, t) {
                var n = this;
                if (
                  (e
                    ? (this.getTweens()
                        .map(function (e) {
                          return { g: e.globalTime(0), t: e };
                        })
                        .sort(function (e, t) {
                          return t.g - e.g || -1;
                        })
                        .forEach(function (t) {
                          return t.t.revert(e);
                        }),
                      this.data.forEach(function (t) {
                        return !(t instanceof jt) && t.revert && t.revert(e);
                      }),
                      this._r.forEach(function (t) {
                        return t(e, n);
                      }),
                      (this.isReverted = !0))
                    : this.data.forEach(function (e) {
                        return e.kill && e.kill();
                      }),
                  this.clear(),
                  t)
                ) {
                  var r = Sn.indexOf(this);
                  ~r && Sn.splice(r, 1);
                }
              }),
              (Tn.revert = function (e) {
                this.kill(e || {});
              }),
              Mn);
          function Mn(e, t) {
            (this.selector = t && Q(t)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              e && this.add(e);
          }
          var Pn,
            An =
              (((Pn = On.prototype).add = function (e, t, n) {
                a(e) || (e = { matches: e });
                var r,
                  i,
                  s,
                  o = new Ln(0, n || this.scope),
                  l = (o.conditions = {});
                for (i in (this.contexts.push(o),
                (t = o.add("onMatch", t)),
                (o.queries = e)))
                  "all" === i
                    ? (s = 1)
                    : (r = _e.matchMedia(e[i])) &&
                      (Sn.indexOf(o) < 0 && Sn.push(o),
                      (l[i] = r.matches) && (s = 1),
                      r.addListener
                        ? r.addListener(wn)
                        : r.addEventListener("change", wn));
                return s && t(o), this;
              }),
              (Pn.revert = function (e) {
                this.kill(e || {});
              }),
              (Pn.kill = function (e) {
                this.contexts.forEach(function (t) {
                  return t.kill(e, !0);
                });
              }),
              On);
          function On(e) {
            (this.contexts = []), (this.scope = e);
          }
          var zn = {
            registerPlugin: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              t.forEach(function (e) {
                return (function (e) {
                  var t = (e = (!e.name && e.default) || e).name,
                    n = i(e),
                    r =
                      t && !n && e.init
                        ? function () {
                            this._props = [];
                          }
                        : e,
                    s = {
                      init: m,
                      render: mn,
                      add: Jt,
                      kill: vn,
                      modifier: gn,
                      rawVars: 0,
                    },
                    o = {
                      targetTest: 0,
                      get: 0,
                      getSetter: dn,
                      aliases: {},
                      register: 0,
                    };
                  if (($t(), e !== r)) {
                    if (gt[t]) return;
                    L(r, L(P(e, s), o)),
                      _t(r.prototype, _t(s, P(e, o))),
                      (gt[(r.prop = t)] = r),
                      e.targetTest && (bt.push(r), (ft[t] = 1)),
                      (t =
                        ("css" === t
                          ? "CSS"
                          : t.charAt(0).toUpperCase() + t.substr(1)) +
                        "Plugin");
                  }
                  h(t, r), e.register && e.register($n, r, bn);
                })(e);
              });
            },
            timeline: function (e) {
              return new Vt(e);
            },
            getTweensOf: function (e, t) {
              return xe.getTweensOf(e, t);
            },
            getProperty: function (e, t, n, i) {
              r(e) && (e = Lt(e)[0]);
              var s = v(e || {}).get,
                o = n ? k : C;
              return (
                "native" === n && (n = ""),
                e
                  ? t
                    ? o(((gt[t] && gt[t].get) || s)(e, t, n, i))
                    : function (t, n, r) {
                        return o(((gt[t] && gt[t].get) || s)(e, t, n, r));
                      }
                  : e
              );
            },
            quickSetter: function (e, t, n) {
              if (1 < (e = Lt(e)).length) {
                var r = e.map(function (e) {
                    return $n.quickSetter(e, t, n);
                  }),
                  i = r.length;
                return function (e) {
                  for (var t = i; t--; ) r[t](e);
                };
              }
              e = e[0] || {};
              var s = gt[t],
                o = v(e),
                a = (o.harness && (o.harness.aliases || {})[t]) || t,
                l = s
                  ? function (t) {
                      var r = new s();
                      (ke._pt = 0),
                        r.init(e, n ? t + n : t, ke, 0, [e]),
                        r.render(1, r),
                        ke._pt && mn(1, ke);
                    }
                  : o.set(e, a);
              return s
                ? l
                : function (t) {
                    return l(e, a, n ? t + n : t, o, 1);
                  };
            },
            quickTo: function (e, t, n) {
              function r(e, n, r) {
                return s.resetTo(t, e, n, r);
              }
              var i,
                s = $n.to(
                  e,
                  _t((((i = {})[t] = "+=0.1"), (i.paused = !0), i), n || {})
                );
              return (r.tween = s), r;
            },
            isTweening: function (e) {
              return 0 < xe.getTweensOf(e, !0).length;
            },
            defaults: function (e) {
              return (
                e && e.ease && (e.ease = Ht(e.ease, je.ease)), M(je, e || {})
              );
            },
            config: function (e) {
              return M(Ye, e || {});
            },
            registerEffect: function (e) {
              var t = e.name,
                n = e.effect,
                r = e.plugins,
                i = e.defaults,
                s = e.extendTimeline;
              (r || "").split(",").forEach(function (e) {
                return (
                  e &&
                  !gt[e] &&
                  !ut[e] &&
                  f(t + " effect requires " + e + " plugin.")
                );
              }),
                (vt[t] = function (e, t, r) {
                  return n(Lt(e), L(t || {}, i), r);
                }),
                s &&
                  (Vt.prototype[t] = function (e, n, r) {
                    return this.add(
                      vt[t](e, a(n) ? n : (r = n) && {}, this),
                      r
                    );
                  });
            },
            registerEase: function (e, t) {
              Ft[e] = Ht(t);
            },
            parseEase: function (e, t) {
              return arguments.length ? Ht(e, t) : Ft;
            },
            getById: function (e) {
              return xe.getById(e);
            },
            exportRoot: function (e, t) {
              void 0 === e && (e = {});
              var n,
                r,
                i = new Vt(e);
              for (
                i.smoothChildTiming = l(e.smoothChildTiming),
                  xe.remove(i),
                  i._dp = 0,
                  i._time = i._tTime = xe._time,
                  n = xe._first;
                n;

              )
                (r = n._next),
                  (!t &&
                    !n._dur &&
                    n instanceof sn &&
                    n.vars.onComplete === n._targets[0]) ||
                    W(i, n, n._start - n._delay),
                  (n = r);
              return W(xe, i, 0), i;
            },
            context: function (e, t) {
              return e ? new Ln(e, t) : be;
            },
            matchMedia: function (e) {
              return new An(e);
            },
            matchMediaRefresh: function () {
              return (
                Sn.forEach(function (e) {
                  var t,
                    n,
                    r = e.conditions;
                  for (n in r) r[n] && ((r[n] = !1), (t = 1));
                  t && e.revert();
                }) || wn()
              );
            },
            addEventListener: function (e, t) {
              var n = En[e] || (En[e] = []);
              ~n.indexOf(t) || n.push(t);
            },
            removeEventListener: function (e, t) {
              var n = En[e],
                r = n && n.indexOf(t);
              0 <= r && n.splice(r, 1);
            },
            utils: {
              wrap: function e(t, n, r) {
                var i = n - t;
                return nt(t)
                  ? re(t, e(0, t.length), n)
                  : V(r, function (e) {
                      return ((i + ((e - t) % i)) % i) + t;
                    });
              },
              wrapYoyo: function e(t, n, r) {
                var i = n - t,
                  s = 2 * i;
                return nt(t)
                  ? re(t, e(0, t.length - 1), n)
                  : V(r, function (e) {
                      return (
                        t + (i < (e = (s + ((e - t) % s)) % s || 0) ? s - e : e)
                      );
                    });
              },
              distribute: J,
              random: ne,
              snap: te,
              normalize: function (e, t, n) {
                return Mt(e, t, 0, 1, n);
              },
              getUnit: U,
              clamp: function (e, t, n) {
                return V(n, function (n) {
                  return Ct(e, t, n);
                });
              },
              splitColor: le,
              toArray: Lt,
              selector: Q,
              mapRange: Mt,
              pipe: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return function (e) {
                  return t.reduce(function (e, t) {
                    return t(e);
                  }, e);
                };
              },
              unitize: function (e, t) {
                return function (n) {
                  return e(parseFloat(n)) + (t || U(n));
                };
              },
              interpolate: function e(t, n, i, s) {
                var o = isNaN(t + n)
                  ? 0
                  : function (e) {
                      return (1 - e) * t + e * n;
                    };
                if (!o) {
                  var a,
                    l,
                    c,
                    u,
                    d,
                    p = r(t),
                    f = {};
                  if ((!0 === i && (s = 1) && (i = null), p))
                    (t = { p: t }), (n = { p: n });
                  else if (nt(t) && !nt(n)) {
                    for (c = [], u = t.length, d = u - 2, l = 1; l < u; l++)
                      c.push(e(t[l - 1], t[l]));
                    u--,
                      (o = function (e) {
                        e *= u;
                        var t = Math.min(d, ~~e);
                        return c[t](e - t);
                      }),
                      (i = n);
                  } else s || (t = _t(nt(t) ? [] : {}, t));
                  if (!c) {
                    for (a in n) Jt.call(f, t, a, "get", n[a]);
                    o = function (e) {
                      return mn(e, f) || (p ? t.p : t);
                    };
                  }
                }
                return V(i, o);
              },
              shuffle: Z,
            },
            install: d,
            effects: vt,
            ticker: It,
            updateRoot: Vt.updateRoot,
            plugins: gt,
            globalTimeline: xe,
            core: {
              PropTween: bn,
              globals: h,
              Tween: sn,
              Timeline: Vt,
              Animation: jt,
              getCache: v,
              _removeLinkedListItem: z,
              reverting: function () {
                return ye;
              },
              context: function (e) {
                return e && be && (be.data.push(e), (e._ctx = be)), be;
              },
              suppressOverwrites: function (e) {
                return (ve = e);
              },
            },
          };
          function Dn(e, t) {
            for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
              n = n._next;
            return n;
          }
          function In(e, t) {
            return {
              name: e,
              rawVars: 1,
              init: function (e, n, i) {
                i._onInit = function (e) {
                  var i, s;
                  if (
                    (r(n) &&
                      ((i = {}),
                      b(n, function (e) {
                        return (i[e] = 1);
                      }),
                      (n = i)),
                    t)
                  ) {
                    for (s in ((i = {}), n)) i[s] = t(n[s]);
                    n = i;
                  }
                  !(function (e, t) {
                    var n,
                      r,
                      i,
                      s = e._targets;
                    for (n in t)
                      for (r = s.length; r--; )
                        (i = (i = e._ptLookup[r][n]) && i.d) &&
                          (i._pt && (i = Dn(i, n)),
                          i && i.modifier && i.modifier(t[n], e, s[r], n));
                  })(e, n);
                };
              },
            };
          }
          b("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
            return (zn[e] = sn[e]);
          }),
            It.add(Vt.updateRoot),
            (ke = zn.to({}, { duration: 0 }));
          var $n =
            zn.registerPlugin(
              {
                name: "attr",
                init: function (e, t, n, r, i) {
                  var s, o, a;
                  for (s in ((this.tween = n), t))
                    (a = e.getAttribute(s) || ""),
                      ((o = this.add(
                        e,
                        "setAttribute",
                        (a || 0) + "",
                        t[s],
                        r,
                        i,
                        0,
                        0,
                        s
                      )).op = s),
                      (o.b = a),
                      this._props.push(s);
                },
                render: function (e, t) {
                  for (var n = t._pt; n; )
                    ye ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
                },
              },
              {
                name: "endArray",
                init: function (e, t) {
                  for (var n = t.length; n--; )
                    this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
                },
              },
              In("roundProps", ee),
              In("modifiers"),
              In("snap", te)
            ) || zn;
          function Fn(e, t) {
            return t.set(
              t.t,
              t.p,
              Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
              t
            );
          }
          function Rn(e, t) {
            return t.set(
              t.t,
              t.p,
              1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
              t
            );
          }
          function Nn(e, t) {
            return t.set(
              t.t,
              t.p,
              e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
              t
            );
          }
          function Bn(e, t) {
            var n = t.s + t.c * e;
            t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
          }
          function Hn(e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t);
          }
          function Wn(e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
          }
          function qn(e, t, n) {
            return (e.style[t] = n);
          }
          function Xn(e, t, n) {
            return e.style.setProperty(t, n);
          }
          function Yn(e, t, n) {
            return (e._gsap[t] = n);
          }
          function jn(e, t, n) {
            return (e._gsap.scaleX = e._gsap.scaleY = n);
          }
          function Gn(e, t, n, r, i) {
            var s = e._gsap;
            (s.scaleX = s.scaleY = n), s.renderTransform(i, s);
          }
          function Vn(e, t, n, r, i) {
            var s = e._gsap;
            (s[t] = n), s.renderTransform(i, s);
          }
          function Un(e) {
            var t = this,
              n = this.target,
              r = n.style;
            if (e in jr) {
              if (
                ((this.tfm = this.tfm || {}),
                "transform" !== e &&
                  (~(e = Jr[e] || e).indexOf(",")
                    ? e.split(",").forEach(function (e) {
                        return (t.tfm[e] = oi(n, e));
                      })
                    : (this.tfm[e] = n._gsap.x ? n._gsap[e] : oi(n, e))),
                0 <= this.props.indexOf(ei))
              )
                return;
              n._gsap.svg &&
                ((this.svgo = n.getAttribute("data-svg-origin")),
                this.props.push(ti, "")),
                (e = ei);
            }
            r && this.props.push(e, r[e]);
          }
          function Kn(e) {
            e.translate &&
              (e.removeProperty("translate"),
              e.removeProperty("scale"),
              e.removeProperty("rotate"));
          }
          function Qn() {
            var e,
              t,
              n = this.props,
              r = this.target,
              i = r.style,
              s = r._gsap;
            for (e = 0; e < n.length; e += 2)
              n[e + 1]
                ? (i[n[e]] = n[e + 1])
                : i.removeProperty(n[e].replace(Kr, "-$1").toLowerCase());
            if (this.tfm) {
              for (t in this.tfm) s[t] = this.tfm[t];
              s.svg &&
                (s.renderTransform(),
                r.setAttribute("data-svg-origin", this.svgo || "")),
                !(e = Cr()) || e.isStart || i[ei] || (Kn(i), (s.uncache = 1));
            }
          }
          function Zn(e, t) {
            var n = { target: e, props: [], revert: Qn, save: Un };
            return (
              t &&
                t.split(",").forEach(function (e) {
                  return n.save(e);
                }),
              n
            );
          }
          function Jn(e, t) {
            var n = _r.createElementNS
              ? _r.createElementNS(
                  (t || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  e
                )
              : _r.createElement(e);
            return n.style ? n : _r.createElement(e);
          }
          function er(e, t, n) {
            var r = getComputedStyle(e);
            return (
              r[t] ||
              r.getPropertyValue(t.replace(Kr, "-$1").toLowerCase()) ||
              r.getPropertyValue(t) ||
              (!n && er(e, ri(t) || t, 1)) ||
              ""
            );
          }
          function tr() {
            "undefined" != typeof window &&
              window.document &&
              ((xr = window),
              (_r = xr.document),
              (wr = _r.documentElement),
              (Sr = Jn("div") || { style: {} }),
              Jn("div"),
              (ei = ri(ei)),
              (ti = ei + "Origin"),
              (Sr.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (kr = !!ri("perspective")),
              (Cr = $n.core.reverting),
              (Tr = 1));
          }
          function nr(e) {
            var t,
              n = Jn(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              i = this.nextSibling,
              s = this.style.cssText;
            if (
              (wr.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (t = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = nr);
              } catch (e) {}
            else this._gsapBBox && (t = this._gsapBBox());
            return (
              r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
              wr.removeChild(n),
              (this.style.cssText = s),
              t
            );
          }
          function rr(e, t) {
            for (var n = t.length; n--; )
              if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
          }
          function ir(e) {
            var t;
            try {
              t = e.getBBox();
            } catch (n) {
              t = nr.call(e, !0);
            }
            return (
              (t && (t.width || t.height)) ||
                e.getBBox === nr ||
                (t = nr.call(e, !0)),
              !t || t.width || t.x || t.y
                ? t
                : {
                    x: +rr(e, ["x", "cx", "x1"]) || 0,
                    y: +rr(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          }
          function sr(e) {
            return !(
              !e.getCTM ||
              (e.parentNode && !e.ownerSVGElement) ||
              !ir(e)
            );
          }
          function or(e, t) {
            if (t) {
              var n = e.style;
              t in jr && t !== ti && (t = ei),
                n.removeProperty
                  ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                      (t = "-" + t),
                    n.removeProperty(t.replace(Kr, "-$1").toLowerCase()))
                  : n.removeAttribute(t);
            }
          }
          function ar(e, t, n, r, i, s) {
            var o = new bn(e._pt, t, n, 0, 1, s ? Wn : Hn);
            return ((e._pt = o).b = r), (o.e = i), e._props.push(n), o;
          }
          function lr(e, t, n, r) {
            var i,
              s,
              o,
              a,
              l = parseFloat(n) || 0,
              c = (n + "").trim().substr((l + "").length) || "px",
              u = Sr.style,
              d = Qr.test(t),
              p = "svg" === e.tagName.toLowerCase(),
              f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
              h = "px" === r,
              m = "%" === r;
            return r === c || !l || ii[r] || ii[c]
              ? l
              : ("px" === c || h || (l = lr(e, t, n, "px")),
                (a = e.getCTM && sr(e)),
                (!m && "%" !== c) || (!jr[t] && !~t.indexOf("adius"))
                  ? ((u[d ? "width" : "height"] = 100 + (h ? c : r)),
                    (s =
                      ~t.indexOf("adius") || ("em" === r && e.appendChild && !p)
                        ? e
                        : e.parentNode),
                    a && (s = (e.ownerSVGElement || {}).parentNode),
                    (s && s !== _r && s.appendChild) || (s = _r.body),
                    (o = s._gsap) &&
                    m &&
                    o.width &&
                    d &&
                    o.time === It.time &&
                    !o.uncache
                      ? x((l / o.width) * 100)
                      : ((!m && "%" !== c) ||
                          si[er(s, "display")] ||
                          (u.position = er(e, "position")),
                        s === e && (u.position = "static"),
                        s.appendChild(Sr),
                        (i = Sr[f]),
                        s.removeChild(Sr),
                        (u.position = "absolute"),
                        d &&
                          m &&
                          (((o = v(s)).time = It.time), (o.width = s[f])),
                        x(h ? (i * l) / 100 : i && l ? (100 / i) * l : 0)))
                  : ((i = a ? e.getBBox()[d ? "width" : "height"] : e[f]),
                    x(m ? (l / i) * 100 : (l / 100) * i)));
          }
          function cr(e, t, n, r) {
            if (!n || "none" === n) {
              var i = ri(t, e, 1),
                s = i && er(e, i, 1);
              s && s !== n
                ? ((t = i), (n = s))
                : "borderColor" === t && (n = er(e, "borderTopColor"));
            }
            var o,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v = new bn(this._pt, e.style, t, 0, 1, hn),
              y = 0,
              b = 0;
            if (
              ((v.b = n),
              (v.e = r),
              (n += ""),
              "auto" == (r += "") &&
                ((e.style[t] = r), (r = er(e, t) || r), (e.style[t] = n)),
              de((o = [n, r])),
              (r = o[1]),
              (l = (n = o[0]).match(st) || []),
              (r.match(st) || []).length)
            ) {
              for (; (a = st.exec(r)); )
                (p = a[0]),
                  (h = r.substring(y, a.index)),
                  u
                    ? (u = (u + 1) % 5)
                    : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                      (u = 1),
                  p !== (d = l[b++] || "") &&
                    ((c = parseFloat(d) || 0),
                    (g = d.substr((c + "").length)),
                    "=" === p.charAt(1) && (p = w(c, p) + g),
                    (f = parseFloat(p)),
                    (m = p.substr((f + "").length)),
                    (y = st.lastIndex - m.length),
                    m ||
                      ((m = m || Ye.units[t] || g),
                      y === r.length && ((r += m), (v.e += m))),
                    g !== m && (c = lr(e, t, d, m) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: h || 1 === b ? h : ",",
                      s: c,
                      c: f - c,
                      m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                    }));
              v.c = y < r.length ? r.substring(y, r.length) : "";
            } else v.r = "display" === t && "none" === r ? Wn : Hn;
            return at.test(r) && (v.e = 0), (this._pt = v);
          }
          function ur(e) {
            var t = e.split(" "),
              n = t[0],
              r = t[1] || "50%";
            return (
              ("top" !== n &&
                "bottom" !== n &&
                "left" !== r &&
                "right" !== r) ||
                ((e = n), (n = r), (r = e)),
              (t[0] = ai[n] || n),
              (t[1] = ai[r] || r),
              t.join(" ")
            );
          }
          function dr(e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
              var n,
                r,
                i,
                s = t.t,
                o = s.style,
                a = t.u,
                l = s._gsap;
              if ("all" === a || !0 === a) (o.cssText = ""), (r = 1);
              else
                for (i = (a = a.split(",")).length; -1 < --i; )
                  (n = a[i]),
                    jr[n] && ((r = 1), (n = "transformOrigin" === n ? ti : ei)),
                    or(s, n);
              r &&
                (or(s, ei),
                l &&
                  (l.svg && s.removeAttribute("transform"),
                  di(s, 1),
                  (l.uncache = 1),
                  Kn(o)));
            }
          }
          function pr(e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
          }
          function fr(e) {
            var t = er(e, ei);
            return pr(t) ? ci : t.substr(7).match(it).map(x);
          }
          function hr(e, t) {
            var n,
              r,
              i,
              s,
              o = e._gsap || v(e),
              a = e.style,
              l = fr(e);
            return o.svg && e.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (l = [
                  (i = e.transform.baseVal.consolidate().matrix).a,
                  i.b,
                  i.c,
                  i.d,
                  i.e,
                  i.f,
                ]).join(",")
                ? ci
                : l
              : (l !== ci ||
                  e.offsetParent ||
                  e === wr ||
                  o.svg ||
                  ((i = a.display),
                  (a.display = "block"),
                  ((n = e.parentNode) && e.offsetParent) ||
                    ((s = 1), (r = e.nextElementSibling), wr.appendChild(e)),
                  (l = fr(e)),
                  i ? (a.display = i) : or(e, "display"),
                  s &&
                    (r
                      ? n.insertBefore(e, r)
                      : n
                      ? n.appendChild(e)
                      : wr.removeChild(e))),
                t && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
          }
          function mr(e, t, n, r, i, s) {
            var o,
              a,
              l,
              c = e._gsap,
              u = i || hr(e, !0),
              d = c.xOrigin || 0,
              p = c.yOrigin || 0,
              f = c.xOffset || 0,
              h = c.yOffset || 0,
              m = u[0],
              g = u[1],
              v = u[2],
              y = u[3],
              b = u[4],
              x = u[5],
              _ = t.split(" "),
              w = parseFloat(_[0]) || 0,
              T = parseFloat(_[1]) || 0;
            n
              ? u !== ci &&
                (a = m * y - g * v) &&
                ((l = w * (-g / a) + T * (m / a) - (m * x - g * b) / a),
                (w = w * (y / a) + T * (-v / a) + (v * x - y * b) / a),
                (T = l))
              : ((w =
                  (o = ir(e)).x +
                  (~_[0].indexOf("%") ? (w / 100) * o.width : w)),
                (T =
                  o.y +
                  (~(_[1] || _[0]).indexOf("%") ? (T / 100) * o.height : T))),
              r || (!1 !== r && c.smooth)
                ? ((b = w - d),
                  (x = T - p),
                  (c.xOffset = f + (b * m + x * v) - b),
                  (c.yOffset = h + (b * g + x * y) - x))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = w),
              (c.yOrigin = T),
              (c.smooth = !!r),
              (c.origin = t),
              (c.originIsAbsolute = !!n),
              (e.style[ti] = "0px 0px"),
              s &&
                (ar(s, c, "xOrigin", d, w),
                ar(s, c, "yOrigin", p, T),
                ar(s, c, "xOffset", f, c.xOffset),
                ar(s, c, "yOffset", h, c.yOffset)),
              e.setAttribute("data-svg-origin", w + " " + T);
          }
          function gr(e, t, n) {
            var r = U(t);
            return x(parseFloat(t) + parseFloat(lr(e, "x", n + "px", r))) + r;
          }
          function vr(e, t, n, i, s) {
            var o,
              a,
              l = 360,
              c = r(s),
              u = parseFloat(s) * (c && ~s.indexOf("rad") ? Gr : 1) - i,
              d = i + u + "deg";
            return (
              c &&
                ("short" === (o = s.split("_")[1]) &&
                  (u %= l) != u % 180 &&
                  (u += u < 0 ? l : -l),
                "cw" === o && u < 0
                  ? (u = ((u + 36e9) % l) - ~~(u / l) * l)
                  : "ccw" === o &&
                    0 < u &&
                    (u = ((u - 36e9) % l) - ~~(u / l) * l)),
              (e._pt = a = new bn(e._pt, t, n, i, u, Rn)),
              (a.e = d),
              (a.u = "deg"),
              e._props.push(n),
              a
            );
          }
          function yr(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          }
          function br(e, t, n) {
            var r,
              i,
              s,
              o,
              a,
              l,
              c,
              u = yr({}, n._gsap),
              d = n.style;
            for (i in (u.svg
              ? ((s = n.getAttribute("transform")),
                n.setAttribute("transform", ""),
                (d[ei] = t),
                (r = di(n, 1)),
                or(n, ei),
                n.setAttribute("transform", s))
              : ((s = getComputedStyle(n)[ei]),
                (d[ei] = t),
                (r = di(n, 1)),
                (d[ei] = s)),
            jr))
              (s = u[i]) !== (o = r[i]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) <
                  0 &&
                ((a = U(s) !== (c = U(o)) ? lr(n, i, s, c) : parseFloat(s)),
                (l = parseFloat(o)),
                (e._pt = new bn(e._pt, r, i, a, l - a, Fn)),
                (e._pt.u = c || 0),
                e._props.push(i));
            yr(r, u);
          }
          (sn.version = Vt.version = $n.version = "3.11.1"),
            (Ee = 1),
            c() && $t();
          var xr,
            _r,
            wr,
            Tr,
            Sr,
            Er,
            Cr,
            kr,
            Lr = Ft.Power0,
            Mr = Ft.Power1,
            Pr = Ft.Power2,
            Ar = Ft.Power3,
            Or = Ft.Power4,
            zr = Ft.Linear,
            Dr = Ft.Quad,
            Ir = Ft.Cubic,
            $r = Ft.Quart,
            Fr = Ft.Quint,
            Rr = Ft.Strong,
            Nr = Ft.Elastic,
            Br = Ft.Back,
            Hr = Ft.SteppedEase,
            Wr = Ft.Bounce,
            qr = Ft.Sine,
            Xr = Ft.Expo,
            Yr = Ft.Circ,
            jr = {},
            Gr = 180 / Math.PI,
            Vr = Math.PI / 180,
            Ur = Math.atan2,
            Kr = /([A-Z])/g,
            Qr = /(left|right|width|margin|padding|x)/i,
            Zr = /[\s,\(]\S/,
            Jr = {
              autoAlpha: "opacity,visibility",
              scale: "scaleX,scaleY",
              alpha: "opacity",
            },
            ei = "transform",
            ti = ei + "Origin",
            ni = "O,Moz,ms,Ms,Webkit".split(","),
            ri = function (e, t, n) {
              var r = (t || Sr).style,
                i = 5;
              if (e in r && !n) return e;
              for (
                e = e.charAt(0).toUpperCase() + e.substr(1);
                i-- && !(ni[i] + e in r);

              );
              return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? ni[i] : "") + e;
            },
            ii = { deg: 1, rad: 1, turn: 1 },
            si = { grid: 1, flex: 1 },
            oi = function (e, t, n, r) {
              var i;
              return (
                Tr || tr(),
                t in Jr &&
                  "transform" !== t &&
                  ~(t = Jr[t]).indexOf(",") &&
                  (t = t.split(",")[0]),
                jr[t] && "transform" !== t
                  ? ((i = di(e, r)),
                    (i =
                      "transformOrigin" !== t
                        ? i[t]
                        : i.svg
                        ? i.origin
                        : pi(er(e, ti)) + " " + i.zOrigin + "px"))
                  : ((i = e.style[t]) &&
                      "auto" !== i &&
                      !r &&
                      !~(i + "").indexOf("calc(")) ||
                    (i =
                      (li[t] && li[t](e, t, n)) ||
                      er(e, t) ||
                      y(e, t) ||
                      ("opacity" === t ? 1 : 0)),
                n && !~(i + "").trim().indexOf(" ") ? lr(e, t, i, n) + n : i
              );
            },
            ai = {
              top: "0%",
              bottom: "100%",
              left: "0%",
              right: "100%",
              center: "50%",
            },
            li = {
              clearProps: function (e, t, n, r, i) {
                if ("isFromStart" !== i.data) {
                  var s = (e._pt = new bn(e._pt, t, n, 0, 0, dr));
                  return (
                    (s.u = r), (s.pr = -10), (s.tween = i), e._props.push(n), 1
                  );
                }
              },
            },
            ci = [1, 0, 0, 1, 0, 0],
            ui = {},
            di = function (e, t) {
              var n = e._gsap || new Yt(e);
              if ("x" in n && !t && !n.uncache) return n;
              var r,
                i,
                s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g,
                v,
                y,
                b,
                _,
                w,
                T,
                S,
                E,
                C,
                k,
                L,
                M,
                P,
                A,
                O,
                z,
                D,
                I,
                $ = e.style,
                F = n.scaleX < 0,
                R = "deg",
                N = getComputedStyle(e),
                B = er(e, ti) || "0";
              return (
                (r = i = s = l = c = u = d = p = f = 0),
                (o = a = 1),
                (n.svg = !(!e.getCTM || !sr(e))),
                N.translate &&
                  (("none" === N.translate &&
                    "none" === N.scale &&
                    "none" === N.rotate) ||
                    ($[ei] =
                      ("none" !== N.translate
                        ? "translate3d(" +
                          (N.translate + " 0 0")
                            .split(" ")
                            .slice(0, 3)
                            .join(", ") +
                          ") "
                        : "") +
                      ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") +
                      ("none" !== N.scale
                        ? "scale(" + N.scale.split(" ").join(",") + ") "
                        : "") +
                      N[ei]),
                  ($.scale = $.rotate = $.translate = "none")),
                (g = hr(e, n.svg)),
                n.svg &&
                  ((k = n.uncache
                    ? ((L = e.getBBox()),
                      (B = n.xOrigin - L.x + "px " + (n.yOrigin - L.y) + "px"),
                      "")
                    : !t && e.getAttribute("data-svg-origin")),
                  mr(e, k || B, !!k || n.originIsAbsolute, !1 !== n.smooth, g)),
                (h = n.xOrigin || 0),
                (m = n.yOrigin || 0),
                g !== ci &&
                  ((_ = g[0]),
                  (w = g[1]),
                  (T = g[2]),
                  (S = g[3]),
                  (r = E = g[4]),
                  (i = C = g[5]),
                  6 === g.length
                    ? ((o = Math.sqrt(_ * _ + w * w)),
                      (a = Math.sqrt(S * S + T * T)),
                      (l = _ || w ? Ur(w, _) * Gr : 0),
                      (d = T || S ? Ur(T, S) * Gr + l : 0) &&
                        (a *= Math.abs(Math.cos(d * Vr))),
                      n.svg &&
                        ((r -= h - (h * _ + m * T)),
                        (i -= m - (h * w + m * S))))
                    : ((I = g[6]),
                      (z = g[7]),
                      (P = g[8]),
                      (A = g[9]),
                      (O = g[10]),
                      (D = g[11]),
                      (r = g[12]),
                      (i = g[13]),
                      (s = g[14]),
                      (c = (v = Ur(I, O)) * Gr),
                      v &&
                        ((k = E * (y = Math.cos(-v)) + P * (b = Math.sin(-v))),
                        (L = C * y + A * b),
                        (M = I * y + O * b),
                        (P = E * -b + P * y),
                        (A = C * -b + A * y),
                        (O = I * -b + O * y),
                        (D = z * -b + D * y),
                        (E = k),
                        (C = L),
                        (I = M)),
                      (u = (v = Ur(-T, O)) * Gr),
                      v &&
                        ((y = Math.cos(-v)),
                        (D = S * (b = Math.sin(-v)) + D * y),
                        (_ = k = _ * y - P * b),
                        (w = L = w * y - A * b),
                        (T = M = T * y - O * b)),
                      (l = (v = Ur(w, _)) * Gr),
                      v &&
                        ((k = _ * (y = Math.cos(v)) + w * (b = Math.sin(v))),
                        (L = E * y + C * b),
                        (w = w * y - _ * b),
                        (C = C * y - E * b),
                        (_ = k),
                        (E = L)),
                      c &&
                        359.9 < Math.abs(c) + Math.abs(l) &&
                        ((c = l = 0), (u = 180 - u)),
                      (o = x(Math.sqrt(_ * _ + w * w + T * T))),
                      (a = x(Math.sqrt(C * C + I * I))),
                      (v = Ur(E, C)),
                      (d = 2e-4 < Math.abs(v) ? v * Gr : 0),
                      (f = D ? 1 / (D < 0 ? -D : D) : 0)),
                  n.svg &&
                    ((k = e.getAttribute("transform")),
                    (n.forceCSS =
                      e.setAttribute("transform", "") || !pr(er(e, ei))),
                    k && e.setAttribute("transform", k))),
                90 < Math.abs(d) &&
                  Math.abs(d) < 270 &&
                  (F
                    ? ((o *= -1),
                      (d += l <= 0 ? 180 : -180),
                      (l += l <= 0 ? 180 : -180))
                    : ((a *= -1), (d += d <= 0 ? 180 : -180))),
                (t = t || n.uncache),
                (n.x =
                  r -
                  ((n.xPercent =
                    r &&
                    ((!t && n.xPercent) ||
                      (Math.round(e.offsetWidth / 2) === Math.round(-r)
                        ? -50
                        : 0)))
                    ? (e.offsetWidth * n.xPercent) / 100
                    : 0) +
                  "px"),
                (n.y =
                  i -
                  ((n.yPercent =
                    i &&
                    ((!t && n.yPercent) ||
                      (Math.round(e.offsetHeight / 2) === Math.round(-i)
                        ? -50
                        : 0)))
                    ? (e.offsetHeight * n.yPercent) / 100
                    : 0) +
                  "px"),
                (n.z = s + "px"),
                (n.scaleX = x(o)),
                (n.scaleY = x(a)),
                (n.rotation = x(l) + R),
                (n.rotationX = x(c) + R),
                (n.rotationY = x(u) + R),
                (n.skewX = d + R),
                (n.skewY = p + R),
                (n.transformPerspective = f + "px"),
                (n.zOrigin = parseFloat(B.split(" ")[2]) || 0) &&
                  ($[ti] = pi(B)),
                (n.xOffset = n.yOffset = 0),
                (n.force3D = Ye.force3D),
                (n.renderTransform = n.svg ? yi : kr ? vi : fi),
                (n.uncache = 0),
                n
              );
            },
            pi = function (e) {
              return (e = e.split(" "))[0] + " " + e[1];
            },
            fi = function (e, t) {
              (t.z = "0px"),
                (t.rotationY = t.rotationX = "0deg"),
                (t.force3D = 0),
                vi(e, t);
            },
            hi = "0deg",
            mi = "0px",
            gi = ") ",
            vi = function (e, t) {
              var n = t || this,
                r = n.xPercent,
                i = n.yPercent,
                s = n.x,
                o = n.y,
                a = n.z,
                l = n.rotation,
                c = n.rotationY,
                u = n.rotationX,
                d = n.skewX,
                p = n.skewY,
                f = n.scaleX,
                h = n.scaleY,
                m = n.transformPerspective,
                g = n.force3D,
                v = n.target,
                y = n.zOrigin,
                b = "",
                x = ("auto" === g && e && 1 !== e) || !0 === g;
              if (y && (u !== hi || c !== hi)) {
                var _,
                  w = parseFloat(c) * Vr,
                  T = Math.sin(w),
                  S = Math.cos(w);
                (w = parseFloat(u) * Vr),
                  (s = gr(v, s, T * (_ = Math.cos(w)) * -y)),
                  (o = gr(v, o, -Math.sin(w) * -y)),
                  (a = gr(v, a, S * _ * -y + y));
              }
              m !== mi && (b += "perspective(" + m + gi),
                (r || i) && (b += "translate(" + r + "%, " + i + "%) "),
                (!x && s === mi && o === mi && a === mi) ||
                  (b +=
                    a !== mi || x
                      ? "translate3d(" + s + ", " + o + ", " + a + ") "
                      : "translate(" + s + ", " + o + gi),
                l !== hi && (b += "rotate(" + l + gi),
                c !== hi && (b += "rotateY(" + c + gi),
                u !== hi && (b += "rotateX(" + u + gi),
                (d === hi && p === hi) || (b += "skew(" + d + ", " + p + gi),
                (1 === f && 1 === h) || (b += "scale(" + f + ", " + h + gi),
                (v.style[ei] = b || "translate(0, 0)");
            },
            yi = function (e, t) {
              var n,
                r,
                i,
                s,
                o,
                a = t || this,
                l = a.xPercent,
                c = a.yPercent,
                u = a.x,
                d = a.y,
                p = a.rotation,
                f = a.skewX,
                h = a.skewY,
                m = a.scaleX,
                g = a.scaleY,
                v = a.target,
                y = a.xOrigin,
                b = a.yOrigin,
                _ = a.xOffset,
                w = a.yOffset,
                T = a.forceCSS,
                S = parseFloat(u),
                E = parseFloat(d);
              (p = parseFloat(p)),
                (f = parseFloat(f)),
                (h = parseFloat(h)) && ((f += h = parseFloat(h)), (p += h)),
                p || f
                  ? ((p *= Vr),
                    (f *= Vr),
                    (n = Math.cos(p) * m),
                    (r = Math.sin(p) * m),
                    (i = Math.sin(p - f) * -g),
                    (s = Math.cos(p - f) * g),
                    f &&
                      ((h *= Vr),
                      (o = Math.tan(f - h)),
                      (i *= o = Math.sqrt(1 + o * o)),
                      (s *= o),
                      h &&
                        ((o = Math.tan(h)),
                        (n *= o = Math.sqrt(1 + o * o)),
                        (r *= o))),
                    (n = x(n)),
                    (r = x(r)),
                    (i = x(i)),
                    (s = x(s)))
                  : ((n = m), (s = g), (r = i = 0)),
                ((S && !~(u + "").indexOf("px")) ||
                  (E && !~(d + "").indexOf("px"))) &&
                  ((S = lr(v, "x", u, "px")), (E = lr(v, "y", d, "px"))),
                (y || b || _ || w) &&
                  ((S = x(S + y - (y * n + b * i) + _)),
                  (E = x(E + b - (y * r + b * s) + w))),
                (l || c) &&
                  ((S = x(S + (l / 100) * (o = v.getBBox()).width)),
                  (E = x(E + (c / 100) * o.height))),
                (o =
                  "matrix(" +
                  n +
                  "," +
                  r +
                  "," +
                  i +
                  "," +
                  s +
                  "," +
                  S +
                  "," +
                  E +
                  ")"),
                v.setAttribute("transform", o),
                T && (v.style[ei] = o);
            };
          b("padding,margin,Width,Radius", function (e, t) {
            var n = "Right",
              r = "Bottom",
              i = "Left",
              s = (
                t < 3 ? ["Top", n, r, i] : ["Top" + i, "Top" + n, r + n, r + i]
              ).map(function (n) {
                return t < 2 ? e + n : "border" + n + e;
              });
            li[1 < t ? "border" + e : e] = function (e, t, n, r, i) {
              var o, a;
              if (arguments.length < 4)
                return (
                  (o = s.map(function (t) {
                    return oi(e, t, n);
                  })),
                  5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
                );
              (o = (r + "").split(" ")),
                (a = {}),
                s.forEach(function (e, t) {
                  return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
                }),
                e.init(t, a, i);
            };
          });
          var bi,
            xi,
            _i = {
              name: "css",
              register: tr,
              targetTest: function (e) {
                return e.style && e.nodeType;
              },
              init: function (e, t, n, i, s) {
                var o,
                  a,
                  l,
                  c,
                  u,
                  d,
                  f,
                  h,
                  m,
                  g,
                  v,
                  y,
                  b,
                  x,
                  _,
                  T,
                  S = this._props,
                  E = e.style,
                  C = n.vars.startAt;
                for (f in (Tr || tr(),
                (this.styles = this.styles || Zn(e)),
                (T = this.styles.props),
                (this.tween = n),
                t))
                  if (
                    "autoRound" !== f &&
                    ((a = t[f]), !gt[f] || !Ut(f, t, n, i, e, s))
                  )
                    if (
                      ((u = typeof a),
                      (d = li[f]),
                      "function" === u && (u = typeof (a = a.call(n, i, e, s))),
                      "string" === u && ~a.indexOf("random(") && (a = ie(a)),
                      d)
                    )
                      d(this, e, f, a, n) && (_ = 1);
                    else if ("--" === f.substr(0, 2))
                      (o = (
                        getComputedStyle(e).getPropertyValue(f) + ""
                      ).trim()),
                        (a += ""),
                        (zt.lastIndex = 0),
                        zt.test(o) || ((h = U(o)), (m = U(a))),
                        m ? h !== m && (o = lr(e, f, o, m) + m) : h && (a += h),
                        this.add(E, "setProperty", o, a, i, s, 0, 0, f),
                        S.push(f),
                        T.push(f, E[f]);
                    else if ("undefined" !== u) {
                      if (
                        (C && f in C
                          ? (r(
                              (o =
                                "function" == typeof C[f]
                                  ? C[f].call(n, i, e, s)
                                  : C[f])
                            ) &&
                              ~o.indexOf("random(") &&
                              (o = ie(o)),
                            U(o + "") ||
                              (o += Ye.units[f] || U(oi(e, f)) || ""),
                            "=" === (o + "").charAt(1) && (o = oi(e, f)))
                          : (o = oi(e, f)),
                        (c = parseFloat(o)),
                        (g =
                          "string" === u &&
                          "=" === a.charAt(1) &&
                          a.substr(0, 2)) && (a = a.substr(2)),
                        (l = parseFloat(a)),
                        f in Jr &&
                          ("autoAlpha" === f &&
                            (1 === c &&
                              "hidden" === oi(e, "visibility") &&
                              l &&
                              (c = 0),
                            T.push("visibility", E.visibility),
                            ar(
                              this,
                              E,
                              "visibility",
                              c ? "inherit" : "hidden",
                              l ? "inherit" : "hidden",
                              !l
                            )),
                          "scale" !== f &&
                            "transform" !== f &&
                            ~(f = Jr[f]).indexOf(",") &&
                            (f = f.split(",")[0])),
                        (v = f in jr))
                      )
                        if (
                          (this.styles.save(f),
                          y ||
                            (((b = e._gsap).renderTransform &&
                              !t.parseTransform) ||
                              di(e, t.parseTransform),
                            (x = !1 !== t.smoothOrigin && b.smooth),
                            ((y = this._pt =
                              new bn(
                                this._pt,
                                E,
                                ei,
                                0,
                                1,
                                b.renderTransform,
                                b,
                                0,
                                -1
                              )).dep = 1)),
                          "scale" === f)
                        )
                          (this._pt = new bn(
                            this._pt,
                            b,
                            "scaleY",
                            b.scaleY,
                            (g ? w(b.scaleY, g + l) : l) - b.scaleY || 0,
                            Fn
                          )),
                            (this._pt.u = 0),
                            S.push("scaleY", f),
                            (f += "X");
                        else {
                          if ("transformOrigin" === f) {
                            T.push(ti, E[ti]),
                              (a = ur(a)),
                              b.svg
                                ? mr(e, a, 0, x, 0, this)
                                : ((m = parseFloat(a.split(" ")[2]) || 0) !==
                                    b.zOrigin &&
                                    ar(this, b, "zOrigin", b.zOrigin, m),
                                  ar(this, E, f, pi(o), pi(a)));
                            continue;
                          }
                          if ("svgOrigin" === f) {
                            mr(e, a, 1, x, 0, this);
                            continue;
                          }
                          if (f in ui) {
                            vr(this, b, f, c, g ? w(c, g + a) : a);
                            continue;
                          }
                          if ("smoothOrigin" === f) {
                            ar(this, b, "smooth", b.smooth, a);
                            continue;
                          }
                          if ("force3D" === f) {
                            b[f] = a;
                            continue;
                          }
                          if ("transform" === f) {
                            br(this, a, e);
                            continue;
                          }
                        }
                      else f in E || (f = ri(f) || f);
                      if (
                        v ||
                        ((l || 0 === l) &&
                          (c || 0 === c) &&
                          !Zr.test(a) &&
                          f in E)
                      )
                        (l = l || 0),
                          (h = (o + "").substr((c + "").length)) !==
                            (m = U(a) || (f in Ye.units ? Ye.units[f] : h)) &&
                            (c = lr(e, f, o, m)),
                          (this._pt = new bn(
                            this._pt,
                            v ? b : E,
                            f,
                            c,
                            (g ? w(c, g + l) : l) - c,
                            v ||
                            ("px" !== m && "zIndex" !== f) ||
                            !1 === t.autoRound
                              ? Fn
                              : Bn
                          )),
                          (this._pt.u = m || 0),
                          h !== m &&
                            "%" !== m &&
                            ((this._pt.b = o), (this._pt.r = Nn));
                      else if (f in E) cr.call(this, e, f, o, g ? g + a : a);
                      else {
                        if (!(f in e)) {
                          p(f, a);
                          continue;
                        }
                        this.add(e, f, o || e[f], g ? g + a : a, i, s);
                      }
                      v || T.push(f, E[f]), S.push(f);
                    }
                _ && yn(this);
              },
              render: function (e, t) {
                if (t.tween._time || !Cr())
                  for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
                else t.styles.revert();
              },
              get: oi,
              aliases: Jr,
              getSetter: function (e, t, n) {
                var r = Jr[t];
                return (
                  r && r.indexOf(",") < 0 && (t = r),
                  t in jr && t !== ti && (e._gsap.x || oi(e, "x"))
                    ? n && Er === n
                      ? "scale" === t
                        ? jn
                        : Yn
                      : (Er = n || {}) && ("scale" === t ? Gn : Vn)
                    : e.style && !o(e.style[t])
                    ? qn
                    : ~t.indexOf("-")
                    ? Xn
                    : dn(e, t)
                );
              },
              core: { _removeProperty: or, _getMatrix: hr },
            };
          ($n.utils.checkPrefix = ri),
            ($n.core.getStyleSaver = Zn),
            (xi = b(
              "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
                "," +
                (bi = "rotation,rotationX,rotationY,skewX,skewY") +
                ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
              function (e) {
                jr[e] = 1;
              }
            )),
            b(bi, function (e) {
              (Ye.units[e] = "deg"), (ui[e] = 1);
            }),
            (Jr[xi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + bi),
            b(
              "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
              function (e) {
                var t = e.split(":");
                Jr[t[1]] = xi[t[0]];
              }
            ),
            b(
              "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
              function (e) {
                Ye.units[e] = "px";
              }
            ),
            $n.registerPlugin(_i);
          var wi = $n.registerPlugin(_i) || $n,
            Ti = wi.core.Tween;
          (e.Back = Br),
            (e.Bounce = Wr),
            (e.CSSPlugin = _i),
            (e.Circ = Yr),
            (e.Cubic = Ir),
            (e.Elastic = Nr),
            (e.Expo = Xr),
            (e.Linear = zr),
            (e.Power0 = Lr),
            (e.Power1 = Mr),
            (e.Power2 = Pr),
            (e.Power3 = Ar),
            (e.Power4 = Or),
            (e.Quad = Dr),
            (e.Quart = $r),
            (e.Quint = Fr),
            (e.Sine = qr),
            (e.SteppedEase = Hr),
            (e.Strong = Rr),
            (e.TimelineLite = Vt),
            (e.TimelineMax = Vt),
            (e.TweenLite = sn),
            (e.TweenMax = Ti),
            (e.default = wi),
            (e.gsap = wi),
            "undefined" == typeof window || window !== e
              ? Object.defineProperty(e, "__esModule", { value: !0 })
              : delete e.default;
        })(t);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { exports: {} });
    return e[r].call(s.exports, s, s.exports, n), s.exports;
  }
  (() => {
    "use strict";
    n(598), n(949), n(70), n(576), n(611), n(992);
    const e = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body,
    };
    function t(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(e = {}, n = {}) {
      Object.keys(n).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = n[i])
          : t(n[i]) && t(e[i]) && Object.keys(n[i]).length > 0 && r(e[i], n[i]);
      });
    }
    console.log(
      (() => {
        const t = navigator.userAgent || navigator.vendor || window.opera;
        return /android/i.test(t)
          ? (e.htmlEl.classList.add("page--android"), "Android")
          : /iPad|iPhone|iPod/.test(t) && !window.MSStream
          ? (e.htmlEl.classList.add("page--ios"), "iOS")
          : "unknown";
      })()
    ),
      n(524),
      n(595),
      n(319),
      n(626),
      new (class {
        constructor(e) {
          (this.options = Object.assign(
            { isOpen: () => {}, isClose: () => {} },
            e
          )),
            (this.modal = document.querySelector(".graph-modal")),
            (this.speed = 300),
            (this.animation = "fade"),
            (this._reOpen = !1),
            (this._nextContainer = !1),
            (this.modalContainer = !1),
            (this.isOpen = !1),
            (this.previousActiveElement = !1),
            (this._focusElements = [
              "a[href]",
              "input",
              "select",
              "textarea",
              "button",
              "iframe",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this._fixBlocks = document.querySelectorAll(".fix-block")),
            this.events();
        }
        events() {
          if (this.modal) {
            let e;
            document.addEventListener("click", (e) => {
              const t = e.target.closest("[data-graph-path]");
              if (t) {
                let e = t.dataset.graphPath,
                  n = t.dataset.graphAnimation,
                  r = t.dataset.graphSpeed;
                return (
                  (this.animation = n || "fade"),
                  (this.speed = r ? parseInt(r) : 300),
                  (this._nextContainer = document.querySelector(
                    `[data-graph-target="${e}"]`
                  )),
                  void this.open()
                );
              }
              e.target.closest(".js-modal-close") && this.close();
            }),
              window.addEventListener("keydown", (e) => {
                27 == e.keyCode && this.isOpen && this.close(),
                  9 == e.which && this.isOpen && this.focusCatch(e);
              }),
              document.addEventListener("click", (e) => {
                e.target.classList.contains("graph-modal") &&
                  e.target.classList.contains("is-open") &&
                  this.close();
              }),
              this.modal.addEventListener("touchmove", (e) => {
                e.preventDefault();
              }),
              this.modal.addEventListener("touchstart", (t) => {
                e = t.touches[0].clientY;
              }),
              this.modal.addEventListener("touchmove", (t) => {
                const n = t.touches[0].clientY - e;
                Math.abs(n) > 10 && t.preventDefault();
              });
          }
        }
        open(e) {
          if (
            ((this.previousActiveElement = document.activeElement), this.isOpen)
          )
            return (this.reOpen = !0), void this.close();
          (this.modalContainer = this._nextContainer),
            e &&
              (this.modalContainer = document.querySelector(
                `[data-graph-target="${e}"]`
              )),
            this.modalContainer.scrollTo(0, 0),
            this.modal.style.setProperty(
              "--transition-time",
              this.speed / 1e3 + "s"
            ),
            this.modal.classList.add("is-open"),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.disableScroll(),
            this.modalContainer.classList.add("graph-modal-open"),
            this.modalContainer.classList.add(this.animation),
            setTimeout(() => {
              this.options.isOpen(this),
                this.modalContainer.classList.add("animate-open"),
                (this.isOpen = !0),
                this.focusTrap();
            }, this.speed);
        }
        close() {
          this.modalContainer &&
            (this.modalContainer.classList.remove("animate-open"),
            this.modalContainer.classList.remove(this.animation),
            this.modal.classList.remove("is-open"),
            this.modalContainer.classList.remove("graph-modal-open"),
            this.enableScroll(),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.options.isClose(this),
            (this.isOpen = !1),
            this.focusTrap(),
            this.reOpen && ((this.reOpen = !1), this.open()));
        }
        focusCatch(e) {
          const t = this.modalContainer.querySelectorAll(this._focusElements),
            n = Array.prototype.slice.call(t),
            r = n.indexOf(document.activeElement);
          e.shiftKey &&
            0 === r &&
            (n[n.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              r !== n.length - 1 ||
              (n[0].focus(), e.preventDefault());
        }
        focusTrap() {
          const e = this.modalContainer.querySelectorAll(this._focusElements);
          this.isOpen
            ? e.length && e[0].focus()
            : this.previousActiveElement.focus();
        }
        disableScroll() {
          let e = window.scrollY;
          this.lockPadding(),
            document.body.classList.add("disable-scroll"),
            (document.body.dataset.position = e),
            (document.body.style.top = -e + "px");
        }
        enableScroll() {
          let e = parseInt(document.body.dataset.position, 10);
          this.unlockPadding(),
            (document.body.style.top = "auto"),
            document.body.classList.remove("disable-scroll"),
            window.scrollTo({ top: e, left: 0 }),
            document.body.removeAttribute("data-position");
        }
        lockPadding() {
          let e = window.innerWidth - document.body.offsetWidth + "px";
          this._fixBlocks.forEach((t) => {
            t.style.paddingRight = e;
          }),
            (document.body.style.paddingRight = e);
        }
        unlockPadding() {
          this._fixBlocks.forEach((e) => {
            e.style.paddingRight = "0px";
          }),
            (document.body.style.paddingRight = "0px");
        }
      })();
    const i = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function s() {
      const e = "undefined" != typeof document ? document : {};
      return r(e, i), e;
    }
    const o = {
      document: i,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function a() {
      const e = "undefined" != typeof window ? window : {};
      return r(e, o), e;
    }
    class l extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function c(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...c(e)) : t.push(e);
        }),
        t
      );
    }
    function u(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function d(e, t) {
      const n = a(),
        r = s();
      let i = [];
      if (!t && e instanceof l) return e;
      if (!e) return new l(i);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = r.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              r = t.querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) n.push(r[e]);
            return n;
          })(e.trim(), t || r);
      } else if (e.nodeType || e === n || e === r) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof l) return e;
        i = e;
      }
      return new l(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(i)
      );
    }
    d.fn = l.prototype;
    const p = "resize scroll".split(" ");
    function f(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            p.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : d(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    f("click"),
      f("blur"),
      f("focus"),
      f("focusin"),
      f("focusout"),
      f("keyup"),
      f("keydown"),
      f("keypress"),
      f("submit"),
      f("change"),
      f("mousedown"),
      f("mousemove"),
      f("mouseup"),
      f("mouseenter"),
      f("mouseleave"),
      f("mouseout"),
      f("mouseover"),
      f("touchstart"),
      f("touchend"),
      f("touchmove"),
      f("resize"),
      f("scroll");
    const h = {
      addClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        return (
          u(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, r, i] = e;
        function s(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), d(t).is(n))) r.apply(t, i);
          else {
            const e = d(t).parents();
            for (let t = 0; t < e.length; t += 1)
              d(e[t]).is(n) && r.apply(e[t], i);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof e[1] && (([t, r, i] = e), (n = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: r, proxyListener: s }),
                t.addEventListener(e, s, i);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
                t.addEventListener(e, o, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, r, i] = e;
        "function" == typeof e[1] && (([t, r, i] = e), (n = void 0)),
          i || (i = !1);
        const s = t.split(" ");
        for (let e = 0; e < s.length; e += 1) {
          const t = s[e];
          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let o;
            if (
              (!n && s.dom7Listeners
                ? (o = s.dom7Listeners[t])
                : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (r && n.listener === r) ||
                (r &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === r)
                  ? (s.removeEventListener(t, n.proxyListener, i),
                    o.splice(e, 1))
                  : r ||
                    (s.removeEventListener(t, n.proxyListener, i),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = a(),
          n = e[0].split(" "),
          r = e[1];
        for (let i = 0; i < n.length; i += 1) {
          const s = n[i];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(s, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(n),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(r) {
              r.target === this && (e.call(this, r), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = a();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = a(),
            t = s(),
            n = this[0],
            r = n.getBoundingClientRect(),
            i = t.body,
            o = n.clientTop || i.clientTop || 0,
            l = n.clientLeft || i.clientLeft || 0,
            c = n === e ? e.scrollY : n.scrollTop,
            u = n === e ? e.scrollX : n.scrollLeft;
          return { top: r.top + c - o, left: r.left + u - l };
        }
        return null;
      },
      css: function (e, t) {
        const n = a();
        let r;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (r = 0; r < this.length; r += 1)
              for (const t in e) this[r].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = a(),
          n = s(),
          r = this[0];
        let i, o;
        if (!r || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (r.matches) return r.matches(e);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
          if (r.msMatchesSelector) return r.msMatchesSelector(e);
          for (i = d(e), o = 0; o < i.length; o += 1) if (i[o] === r) return !0;
          return !1;
        }
        if (e === n) return r === n;
        if (e === t) return r === t;
        if (e.nodeType || e instanceof l) {
          for (i = e.nodeType ? [e] : e, o = 0; o < i.length; o += 1)
            if (i[o] === r) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return d([]);
        if (e < 0) {
          const n = t + e;
          return d(n < 0 ? [] : [this[n]]);
        }
        return d([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = s();
        for (let r = 0; r < e.length; r += 1) {
          t = e[r];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const r = n.createElement("div");
              for (r.innerHTML = t; r.firstChild; )
                this[e].appendChild(r.firstChild);
            } else if (t instanceof l)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = s();
        let n, r;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
              this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
          } else if (e instanceof l)
            for (r = 0; r < e.length; r += 1)
              this[n].insertBefore(e[r], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
              ? d([this[0].nextElementSibling])
              : d([])
            : this[0].nextElementSibling
            ? d([this[0].nextElementSibling])
            : d([])
          : d([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return d([]);
        for (; n.nextElementSibling; ) {
          const r = n.nextElementSibling;
          e ? d(r).is(e) && t.push(r) : t.push(r), (n = r);
        }
        return d(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && d(t.previousElementSibling).is(e)
              ? d([t.previousElementSibling])
              : d([])
            : t.previousElementSibling
            ? d([t.previousElementSibling])
            : d([]);
        }
        return d([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return d([]);
        for (; n.previousElementSibling; ) {
          const r = n.previousElementSibling;
          e ? d(r).is(e) && t.push(r) : t.push(r), (n = r);
        }
        return d(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? d(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return d(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let r = this[n].parentNode;
          for (; r; )
            e ? d(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
        }
        return d(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n].querySelectorAll(e);
          for (let e = 0; e < r.length; e += 1) t.push(r[e]);
        }
        return d(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n].children;
          for (let n = 0; n < r.length; n += 1)
            (e && !d(r[n]).is(e)) || t.push(r[n]);
        }
        return d(t);
      },
      filter: function (e) {
        return d(u(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(h).forEach((e) => {
      Object.defineProperty(d.fn, e, { value: h[e], writable: !0 });
    });
    const m = d;
    function g(e, t = 0) {
      return setTimeout(e, t);
    }
    function v() {
      return Date.now();
    }
    function y(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function b(...e) {
      const t = Object(e[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const s = e[i];
        if (
          null != s &&
          ((r = s),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? r instanceof HTMLElement
            : r && (1 === r.nodeType || 11 === r.nodeType)))
        ) {
          const e = Object.keys(Object(s)).filter((e) => n.indexOf(e) < 0);
          for (let n = 0, r = e.length; n < r; n += 1) {
            const r = e[n],
              i = Object.getOwnPropertyDescriptor(s, r);
            void 0 !== i &&
              i.enumerable &&
              (y(t[r]) && y(s[r])
                ? s[r].__swiper__
                  ? (t[r] = s[r])
                  : b(t[r], s[r])
                : !y(t[r]) && y(s[r])
                ? ((t[r] = {}), s[r].__swiper__ ? (t[r] = s[r]) : b(t[r], s[r]))
                : (t[r] = s[r]));
          }
        }
      }
      var r;
      return t;
    }
    function x(e, t, n) {
      e.style.setProperty(t, n);
    }
    function _({ swiper: e, targetPosition: t, side: n }) {
      const r = a(),
        i = -e.translate;
      let s,
        o = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(e.cssModeFrameID);
      const c = t > i ? "next" : "prev",
        u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        d = () => {
          (s = new Date().getTime()), null === o && (o = s);
          const a = Math.max(Math.min((s - o) / l, 1), 0),
            c = 0.5 - Math.cos(a * Math.PI) / 2;
          let p = i + c * (t - i);
          if ((u(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), u(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [n]: p });
              }),
              void r.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = r.requestAnimationFrame(d);
        };
      d();
    }
    let w, T, S;
    function E() {
      return (
        w ||
          (w = (function () {
            const e = a(),
              t = s();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        w
      );
    }
    const C = {
        on(e, t, n) {
          const r = this;
          if ("function" != typeof t) return r;
          const i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][i](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if ("function" != typeof t) return r;
          function i(...n) {
            r.off(e, i),
              i.__emitterProxy && delete i.__emitterProxy,
              t.apply(r, n);
          }
          return (i.__emitterProxy = t), r.on(e, i, n);
        },
        onAny(e, t) {
          const n = this;
          if ("function" != typeof e) return n;
          const r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, i) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let n, r, i;
          return (
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
              : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
            r.unshift(i),
            (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(i, [e, ...r]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(i, r);
                  });
            }),
            t
          );
        },
      },
      k = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : r[0].clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : r[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const r = e.params,
            { $wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && r.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            u = i.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : u.length;
          let p = [];
          const f = [],
            h = [];
          let m = r.slidesOffsetBefore;
          "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
          let g = r.slidesOffsetAfter;
          "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = r.spaceBetween,
            _ = -m,
            w = 0,
            T = 0;
          if (void 0 === s) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * s),
            (e.virtualSize = -b),
            o
              ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            r.centeredSlides &&
              r.cssMode &&
              (x(e.wrapperEl, "--swiper-centered-offset-before", ""),
              x(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const S = r.grid && r.grid.rows > 1 && e.grid;
          let E;
          S && e.grid.initSlides(d);
          const C =
            "auto" === r.slidesPerView &&
            r.breakpoints &&
            Object.keys(r.breakpoints).filter(
              (e) => void 0 !== r.breakpoints[e].slidesPerView
            ).length > 0;
          for (let i = 0; i < d; i += 1) {
            E = 0;
            const o = u.eq(i);
            if (
              (S && e.grid.updateSlide(i, o, d, t), "none" !== o.css("display"))
            ) {
              if ("auto" === r.slidesPerView) {
                C && (u[i].style[t("width")] = "");
                const s = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  r.roundLengths)
                )
                  E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    r = n(s, "padding-right"),
                    i = n(s, "margin-left"),
                    a = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) E = e + i + a;
                  else {
                    const { clientWidth: n, offsetWidth: s } = o[0];
                    E = e + t + r + i + a + (s - n);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  r.roundLengths && (E = Math.floor(E));
              } else
                (E = (s - (r.slidesPerView - 1) * b) / r.slidesPerView),
                  r.roundLengths && (E = Math.floor(E)),
                  u[i] && (u[i].style[t("width")] = `${E}px`);
              u[i] && (u[i].swiperSlideSize = E),
                h.push(E),
                r.centeredSlides
                  ? ((_ = _ + E / 2 + w / 2 + b),
                    0 === w && 0 !== i && (_ = _ - s / 2 - b),
                    0 === i && (_ = _ - s / 2 - b),
                    Math.abs(_) < 0.001 && (_ = 0),
                    r.roundLengths && (_ = Math.floor(_)),
                    T % r.slidesPerGroup == 0 && p.push(_),
                    f.push(_))
                  : (r.roundLengths && (_ = Math.floor(_)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(_),
                    f.push(_),
                    (_ = _ + E + b)),
                (e.virtualSize += E + b),
                (w = E),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + g),
            o &&
              a &&
              ("slide" === r.effect || "coverflow" === r.effect) &&
              i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
            r.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
            S && e.grid.updateWrapperSize(E, p, t),
            !r.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let i = p[n];
              r.roundLengths && (i = Math.floor(i)),
                p[n] <= e.virtualSize - s && t.push(i);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({
              [n]: `${b}px`,
            });
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (r.spaceBetween ? r.spaceBetween : 0);
            }),
              (e -= r.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (r.spaceBetween ? r.spaceBetween : 0);
              }),
              (e -= r.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
          ) {
            x(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              x(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          d !== c && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== y && e.emit("slidesGridLengthChange"),
            r.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let i,
            s = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            r
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                n.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !r) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (i = 0; i < n.length; i += 1)
            if (void 0 !== n[i]) {
              const e = n[i].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: i, snapGrid: s } = t;
          if (0 === r.length) return;
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          i && (o = e),
            r.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < r.length; e += 1) {
            const a = r[e];
            let l = a.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
            const c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              u =
                (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              d = -(o - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              r.eq(e).addClass(n.slideVisibleClass)),
              (a.progress = i ? -c : c),
              (a.originalProgress = i ? -u : u);
          }
          t.visibleSlides = m(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === r
            ? ((i = 0), (s = !0), (o = !0))
            : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: r,
              activeIndex: i,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : r
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: r,
              snapGrid: i,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            u = e;
          if (void 0 === u) {
            for (let e = 0; e < r.length; e += 1)
              void 0 !== r[e + 1]
                ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
                  ? (u = e)
                  : n >= r[e] && n < r[e + 1] && (u = e + 1)
                : n >= r[e] && (u = e);
            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (i.indexOf(n) >= 0) c = i.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, u);
            c = e + Math.floor((u - e) / s.slidesPerGroup);
          }
          if ((c >= i.length && (c = i.length - 1), u === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(u).attr("data-swiper-slide-index") || u,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: d,
            previousIndex: o,
            activeIndex: u,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            r = m(e).closest(`.${n.slideClass}`)[0];
          let i,
            s = !1;
          if (r)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === r) {
                (s = !0), (i = e);
                break;
              }
          if (!r || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = r),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  m(r).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
    function L({ swiper: e, runCallbacks: t, direction: n, step: r }) {
      const { activeIndex: i, previousIndex: s } = e;
      let o = n;
      if (
        (o || (o = i > s ? "next" : i < s ? "prev" : "reset"),
        e.emit(`transition${r}`),
        t && i !== s)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${r}`);
        e.emit(`slideChangeTransition${r}`),
          "next" === o
            ? e.emit(`slideNextTransition${r}`)
            : e.emit(`slidePrevTransition${r}`);
      }
    }
    const M = {
        slideTo: function (e = 0, t = this.params.speed, n = !0, r, i) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: h,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!h && !r && !i)
          )
            return !1;
          const m = Math.min(s.params.slidesPerGroupSkip, o);
          let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (d || a.initialSlide || 0) === (u || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((s.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                r = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < r - (r - n) / 2
                  ? (o = e)
                  : t >= n && t < r && (o = e + 1)
                : t >= n && (o = e);
            }
          if (s.initialized && o !== d) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              v > s.translate &&
              v > s.maxTranslate() &&
              (d || 0) !== o
            )
              return !1;
          }
          let y;
          if (
            ((y = o > d ? "next" : o < d ? "prev" : "reset"),
            (p && -v === s.translate) || (!p && v === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(v),
              "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  _({ swiper: s, targetPosition: n, side: e ? "left" : "top" }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, r),
            s.transitionStart(n, y),
            0 === t
              ? s.transitionEnd(n, y)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, y));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, n = !0, r) {
          const i = this;
          let s = e;
          return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
        },
        slideNext: function (e = this.params.speed, t = !0, n) {
          const r = this,
            { animating: i, enabled: s, params: o } = r;
          if (!s) return r;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (i && o.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return o.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function (e = this.params.speed, t = !0, n) {
          const r = this,
            {
              params: i,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = r;
          if (!c) return r;
          if (i.loop) {
            if (s && i.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = u(l ? r.translate : -r.translate),
            p = o.map((e) => u(e));
          let f = o[p.indexOf(d) - 1];
          if (void 0 === f && i.cssMode) {
            let e;
            o.forEach((t, n) => {
              d >= t && (e = n);
            }),
              void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          return (
            void 0 !== f &&
              ((h = a.indexOf(f)),
              h < 0 && (h = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            i.rewind && r.isBeginning
              ? r.slideTo(r.slides.length - 1, e, t, n)
              : r.slideTo(h, e, t, n)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, n) {
          return this.slideTo(this.activeIndex, e, t, n);
        },
        slideToClosest: function (e = this.params.speed, t = !0, n, r = 0.5) {
          const i = this;
          let s = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * r &&
              (s += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, i.slidesGrid.length - 1)),
            i.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              m(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - r / 2 ||
                  s > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    g(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - r
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  g(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      },
      P = {
        loopCreate: function () {
          const e = this,
            t = s(),
            { params: n, $wrapperEl: r } = e,
            i = r.children().length > 0 ? m(r.children()[0].parentNode) : r;
          i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let o = i.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (o.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let r = 0; r < e; r += 1) {
                const e = m(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                i.append(e);
              }
              o = i.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = o.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > o.length && (e.loopedSlides = o.length);
          const a = [],
            l = [];
          o.each((t, n) => {
            const r = m(t);
            n < e.loopedSlides && l.push(t),
              n < o.length && n >= o.length - e.loopedSlides && a.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (let e = 0; e < l.length; e += 1)
            i.append(m(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let e = a.length - 1; e >= 0; e -= 1)
            i.prepend(m(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: r,
            allowSlidePrev: i,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          t < r
            ? ((l = n.length - 3 * r + t),
              (l += r),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c))
            : t >= n.length - r &&
              ((l = -n.length + t + r),
              (l += r),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = s),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
    function A(e) {
      const t = this,
        n = s(),
        r = a(),
        i = t.touchEventsData,
        { params: o, touches: l, enabled: c } = t;
      if (!c) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let u = e;
      u.originalEvent && (u = u.originalEvent);
      let d = m(u.target);
      if ("wrapper" === o.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === u.type),
        !i.isTouchEvent && "which" in u && 3 === u.which)
      )
        return;
      if (!i.isTouchEvent && "button" in u && u.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      o.noSwipingClass &&
        "" !== o.noSwipingClass &&
        u.target &&
        u.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (d = m(e.path[0]));
      const p = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        f = !(!u.target || !u.target.shadowRoot);
      if (
        o.noSwiping &&
        (f
          ? (function (e, t = this) {
              return (function t(n) {
                return n && n !== s() && n !== a()
                  ? (n.assignedSlot && (n = n.assignedSlot),
                    n.closest(e) || t(n.getRootNode().host))
                  : null;
              })(t);
            })(p, u.target)
          : d.closest(p)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !d.closest(o.swipeHandler)[0]) return;
      (l.currentX =
        "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX),
        (l.currentY =
          "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY);
      const h = l.currentX,
        g = l.currentY,
        y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (y && (h <= b || h >= r.innerWidth - b)) {
        if ("prevent" !== y) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (l.startX = h),
        (l.startY = g),
        (i.touchStartTime = v()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== u.type)
      ) {
        let e = !0;
        d.is(i.focusableElements) && (e = !1),
          n.activeElement &&
            m(n.activeElement).is(i.focusableElements) &&
            n.activeElement !== d[0] &&
            n.activeElement.blur();
        const r = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !r) ||
          d[0].isContentEditable ||
          u.preventDefault();
      }
      t.emit("touchStart", u);
    }
    function O(e) {
      const t = s(),
        n = this,
        r = n.touchEventsData,
        { params: i, touches: o, rtlTranslate: a, enabled: l } = n;
      if (!l) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !r.isTouched))
        return void (
          r.startMoving &&
          r.isScrolling &&
          n.emit("touchMoveOpposite", c)
        );
      if (r.isTouchEvent && "touchmove" !== c.type) return;
      const u =
          "touchmove" === c.type &&
          c.targetTouches &&
          (c.targetTouches[0] || c.changedTouches[0]),
        d = "touchmove" === c.type ? u.pageX : c.pageX,
        p = "touchmove" === c.type ? u.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return (o.startX = d), void (o.startY = p);
      if (!n.allowTouchMove)
        return (
          (n.allowClick = !1),
          void (
            r.isTouched &&
            (Object.assign(o, {
              startX: d,
              startY: p,
              currentX: d,
              currentY: p,
            }),
            (r.touchStartTime = v()))
          )
        );
      if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (n.isVertical()) {
          if (
            (p < o.startY && n.translate <= n.maxTranslate()) ||
            (p > o.startY && n.translate >= n.minTranslate())
          )
            return (r.isTouched = !1), void (r.isMoved = !1);
        } else if (
          (d < o.startX && n.translate <= n.maxTranslate()) ||
          (d > o.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        r.isTouchEvent &&
        t.activeElement &&
        c.target === t.activeElement &&
        m(c.target).is(r.focusableElements)
      )
        return (r.isMoved = !0), void (n.allowClick = !1);
      if (
        (r.allowTouchCallbacks && n.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (o.currentX = d), (o.currentY = p);
      const f = o.currentX - o.startX,
        h = o.currentY - o.startY;
      if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === r.isScrolling) {
        let e;
        (n.isHorizontal() && o.currentY === o.startY) ||
        (n.isVertical() && o.currentX === o.startX)
          ? (r.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (r.isScrolling = n.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (r.isScrolling && n.emit("touchMoveOpposite", c),
        void 0 === r.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (r.startMoving = !0)),
        r.isScrolling)
      )
        return void (r.isTouched = !1);
      if (!r.startMoving) return;
      (n.allowClick = !1),
        !i.cssMode && c.cancelable && c.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && c.stopPropagation(),
        r.isMoved ||
          (i.loop && !i.cssMode && n.loopFix(),
          (r.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (r.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", c)),
        n.emit("sliderMove", c),
        (r.isMoved = !0);
      let g = n.isHorizontal() ? f : h;
      (o.diff = g),
        (g *= i.touchRatio),
        a && (g = -g),
        (n.swipeDirection = g > 0 ? "prev" : "next"),
        (r.currentTranslate = g + r.startTranslate);
      let y = !0,
        b = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (b = 0),
        g > 0 && r.currentTranslate > n.minTranslate()
          ? ((y = !1),
            i.resistance &&
              (r.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + r.startTranslate + g) ** b))
          : g < 0 &&
            r.currentTranslate < n.maxTranslate() &&
            ((y = !1),
            i.resistance &&
              (r.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - r.startTranslate - g) ** b)),
        y && (c.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          r.currentTranslate < r.startTranslate &&
          (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          r.currentTranslate > r.startTranslate &&
          (r.currentTranslate = r.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(g) > i.threshold || r.allowThresholdMove))
          return void (r.currentTranslate = r.startTranslate);
        if (!r.allowThresholdMove)
          return (
            (r.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (r.currentTranslate = r.startTranslate),
            void (o.diff = n.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
          i.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          i.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate));
    }
    function z(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: r,
          touches: i,
          rtlTranslate: s,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      r.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = v(),
        u = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          u < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = v()),
        g(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let d;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (d = r.followFinger
          ? s
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        r.cssMode)
      )
        return;
      if (t.params.freeMode && r.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: d });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
      ) {
        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== o[e + t]
          ? d >= o[e] && d < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
          : d >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      const h = (d - o[p]) / f,
        m = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (u > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (h >= r.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (h > 1 - r.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p));
      } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(p + m),
            "prev" === t.swipeDirection && t.slideTo(p))
          : l.target === t.navigation.nextEl
          ? t.slideTo(p + m)
          : t.slideTo(p);
      }
    }
    function D() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = r),
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
    }
    function I(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function $() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
      if (!r) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const s = e.maxTranslate() - e.minTranslate();
      (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let F = !1;
    function R() {}
    const N = (e, t) => {
        const n = s(),
          {
            params: r,
            touchEvents: i,
            el: o,
            wrapperEl: a,
            device: l,
            support: c,
          } = e,
          u = !!r.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          p = t;
        if (c.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !c.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          o[d](i.start, e.onTouchStart, t),
            o[d](
              i.move,
              e.onTouchMove,
              c.passiveListener ? { passive: !1, capture: u } : u
            ),
            o[d](i.end, e.onTouchEnd, t),
            i.cancel && o[d](i.cancel, e.onTouchEnd, t);
        } else
          o[d](i.start, e.onTouchStart, !1),
            n[d](i.move, e.onTouchMove, u),
            n[d](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          o[d]("click", e.onClick, !0),
          r.cssMode && a[d]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[p](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                D,
                !0
              )
            : e[p]("observerUpdate", D, !0);
      },
      B = {
        attachEvents: function () {
          const e = this,
            t = s(),
            { params: n, support: r } = e;
          (e.onTouchStart = A.bind(e)),
            (e.onTouchMove = O.bind(e)),
            (e.onTouchEnd = z.bind(e)),
            n.cssMode && (e.onScroll = $.bind(e)),
            (e.onClick = I.bind(e)),
            r.touch && !F && (t.addEventListener("touchstart", R), (F = !0)),
            N(e, "on");
        },
        detachEvents: function () {
          N(this, "off");
        },
      },
      H = (e, t) => e.grid && t.grid && t.grid.rows > 1,
      W = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: r,
              $el: i,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
              ],
              n.containerModifierClass
            );
          t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      q = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function X(e, t) {
      return function (n = {}) {
        const r = Object.keys(n)[0],
          i = n[r];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
              !0 === e[r] &&
              (e[r] = { auto: !0 }),
            r in e && "enabled" in i
              ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                "object" != typeof e[r] ||
                  "enabled" in e[r] ||
                  (e[r].enabled = !0),
                e[r] || (e[r] = { enabled: !1 }),
                b(t, n))
              : b(t, n))
          : b(t, n);
      };
    }
    const Y = {
        eventsEmitter: C,
        update: k,
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: n,
              translate: r,
              $wrapperEl: i,
            } = this;
            if (t.virtualTranslate) return n ? -r : r;
            if (t.cssMode) return r;
            let s = (function (e, t = "x") {
              const n = a();
              let r, i, s;
              const o = (function (e) {
                const t = a();
                let n;
                return (
                  t.getComputedStyle && (n = t.getComputedStyle(e, null)),
                  !n && e.currentStyle && (n = e.currentStyle),
                  n || (n = e.style),
                  n
                );
              })(e);
              return (
                n.WebKitCSSMatrix
                  ? ((i = o.transform || o.webkitTransform),
                    i.split(",").length > 6 &&
                      (i = i
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (s = new n.WebKitCSSMatrix("none" === i ? "" : i)))
                  : ((s =
                      o.MozTransform ||
                      o.OTransform ||
                      o.MsTransform ||
                      o.msTransform ||
                      o.transform ||
                      o
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (r = s.toString().split(","))),
                "x" === t &&
                  (i = n.WebKitCSSMatrix
                    ? s.m41
                    : 16 === r.length
                    ? parseFloat(r[12])
                    : parseFloat(r[4])),
                "y" === t &&
                  (i = n.WebKitCSSMatrix
                    ? s.m42
                    : 16 === r.length
                    ? parseFloat(r[13])
                    : parseFloat(r[5])),
                i || 0
              );
            })(i[0], e);
            return n && (s = -s), s || 0;
          },
          setTranslate: function (e, t) {
            const n = this,
              {
                rtlTranslate: r,
                params: i,
                $wrapperEl: s,
                wrapperEl: o,
                progress: a,
              } = n;
            let l,
              c = 0,
              u = 0;
            n.isHorizontal() ? (c = r ? -e : e) : (u = e),
              i.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
              i.cssMode
                ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -c : -u)
                : i.virtualTranslate ||
                  s.transform(`translate3d(${c}px, ${u}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? c : u);
            const d = n.maxTranslate() - n.minTranslate();
            (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
              l !== a && n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            n = !0,
            r = !0,
            i
          ) {
            const s = this,
              { params: o, wrapperEl: a } = s;
            if (s.animating && o.preventInteractionOnTransition) return !1;
            const l = s.minTranslate(),
              c = s.maxTranslate();
            let u;
            if (
              ((u = r && e > l ? l : r && e < c ? c : e),
              s.updateProgress(u),
              o.cssMode)
            ) {
              const e = s.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
              else {
                if (!s.support.smoothScroll)
                  return (
                    _({
                      swiper: s,
                      targetPosition: -u,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (s.setTransition(0),
                  s.setTranslate(u),
                  n &&
                    (s.emit("beforeTransitionStart", t, i),
                    s.emit("transitionEnd")))
                : (s.setTransition(t),
                  s.setTranslate(u),
                  n &&
                    (s.emit("beforeTransitionStart", t, i),
                    s.emit("transitionStart")),
                  s.animating ||
                    ((s.animating = !0),
                    s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          s.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          (s.onTranslateToWrapperTransitionEnd = null),
                          delete s.onTranslateToWrapperTransitionEnd,
                          n && s.emit("transitionEnd"));
                      }),
                    s.$wrapperEl[0].addEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      s.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const n = this,
              { params: r } = n;
            r.cssMode ||
              (r.autoHeight && n.updateAutoHeight(),
              L({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const n = this,
              { params: r } = n;
            (n.animating = !1),
              r.cssMode ||
                (n.setTransition(0),
                L({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: M,
        loop: P,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: B,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: n,
                loopedSlides: r = 0,
                params: i,
                $el: s,
              } = e,
              o = i.breakpoints;
            if (!o || (o && 0 === Object.keys(o).length)) return;
            const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in o ? o[a] : void 0) || e.originalParams,
              c = H(e, i),
              u = H(e, l),
              d = i.enabled;
            c && !u
              ? (s.removeClass(
                  `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !c &&
                u &&
                (s.addClass(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  s.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const p = l.direction && l.direction !== i.direction,
              f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
            p && n && e.changeDirection(), b(e.params, l);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !h ? e.disable() : !d && h && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              f &&
                n &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - r + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", n) {
            if (!e || ("container" === t && !n)) return;
            let r = !1;
            const i = a(),
              s = "window" === t ? i.innerHeight : n.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: s * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: s, value: a } = o[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${a}px)`).matches && (r = s)
                : a <= n.clientWidth && (r = s);
            }
            return r || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: r } = n;
            if (r) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: W,
        images: {
          loadImage: function (e, t, n, r, i, s) {
            const o = a();
            let l;
            function c() {
              s && s();
            }
            m(e).parent("picture")[0] || (e.complete && i)
              ? c()
              : t
              ? ((l = new o.Image()),
                (l.onload = c),
                (l.onerror = c),
                r && (l.sizes = r),
                n && (l.srcset = n),
                t && (l.src = t))
              : c();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const r = e.imagesToLoad[n];
              e.loadImage(
                r,
                r.currentSrc || r.getAttribute("src"),
                r.srcset || r.getAttribute("srcset"),
                r.sizes || r.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      j = {};
    class G {
      constructor(...e) {
        let t, n;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
          n || (n = {}),
          (n = b({}, n)),
          t && !n.el && (n.el = t),
          n.el && m(n.el).length > 1)
        ) {
          const e = [];
          return (
            m(n.el).each((t) => {
              const r = b({}, n, { el: t });
              e.push(new G(r));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = E()),
          (r.device = (function (e = {}) {
            return (
              T ||
                (T = (function ({ userAgent: e } = {}) {
                  const t = E(),
                    n = a(),
                    r = n.navigator.platform,
                    i = e || n.navigator.userAgent,
                    s = { ios: !1, android: !1 },
                    o = n.screen.width,
                    l = n.screen.height,
                    c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let u = i.match(/(iPad).*OS\s([\d_]+)/);
                  const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    p = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    f = "Win32" === r;
                  let h = "MacIntel" === r;
                  return (
                    !u &&
                      h &&
                      t.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(`${o}x${l}`) >= 0 &&
                      ((u = i.match(/(Version)\/([\d.]+)/)),
                      u || (u = [0, 1, "13_0_0"]),
                      (h = !1)),
                    c && !f && ((s.os = "android"), (s.android = !0)),
                    (u || p || d) && ((s.os = "ios"), (s.ios = !0)),
                    s
                  );
                })(e)),
              T
            );
          })({ userAgent: n.userAgent })),
          (r.browser =
            (S ||
              (S = (function () {
                const e = a();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            S)),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
        const i = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: X(n, i),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const s = b({}, q, i);
        return (
          (r.params = b({}, s, j, n)),
          (r.originalParams = b({}, r.params)),
          (r.passedParams = b({}, n)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = m),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: t,
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: v(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = n.minTranslate(),
          i = (n.maxTranslate() - r) * e + r;
        n.translateTo(i, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const r = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: n,
          slides: r,
          slidesGrid: i,
          slidesSizesGrid: s,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = r[a].swiperSlideSize;
          for (let n = a + 1; n < r.length; n += 1)
            r[n] &&
              !e &&
              ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            r[n] &&
              !e &&
              ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < r.length; e += 1)
            (t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
        else for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function r() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (r(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || r()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const n = this,
          r = n.params.direction;
        return (
          e || (e = "horizontal" === r ? "vertical" : "horizontal"),
          e === r ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${r}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = m(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const r = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = m(e.shadowRoot.querySelector(r()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(r());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = s().createElement("div");
          (i = m(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return (
          t.initialized ||
            !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const n = this,
          { params: r, $el: i, $wrapperEl: s, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            r.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              i.removeAttr("style"),
              s.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      r.slideVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        b(j, e);
      }
      static get extendedDefaults() {
        return j;
      }
      static get defaults() {
        return q;
      }
      static installModule(e) {
        G.prototype.__modules__ || (G.prototype.__modules__ = []);
        const t = G.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => G.installModule(e)), G)
          : (G.installModule(e), G);
      }
    }
    Object.keys(Y).forEach((e) => {
      Object.keys(Y[e]).forEach((t) => {
        G.prototype[t] = Y[e][t];
      });
    }),
      G.use([
        function ({ swiper: e, on: t, emit: n }) {
          const r = a();
          let i = null;
          const s = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (n("beforeResize"), n("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && n("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== r.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  const { width: n, height: r } = e;
                  let i = n,
                    o = r;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: n, target: r }) => {
                      (r && r !== e.el) ||
                        ((i = n ? n.width : (t[0] || t).inlineSize),
                        (o = n ? n.height : (t[0] || t).blockSize));
                    }
                  ),
                    (i === n && o === r) || s();
                })),
                i.observe(e.el))
              : (r.addEventListener("resize", s),
                r.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                r.removeEventListener("resize", s),
                r.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: n, emit: r }) {
          const i = [],
            s = a(),
            o = (e, t = {}) => {
              const n = new (s.MutationObserver || s.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const t = function () {
                    r("observerUpdate", e[0]);
                  };
                  s.requestAnimationFrame
                    ? s.requestAnimationFrame(t)
                    : s.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const V = G;
    function U(e, t, n, r) {
      const i = s();
      return (
        e.params.createElements &&
          Object.keys(r).forEach((s) => {
            if (!n[s] && !0 === n.auto) {
              let o = e.$el.children(`.${r[s]}`)[0];
              o ||
                ((o = i.createElement("div")),
                (o.className = r[s]),
                e.$el.append(o)),
                (n[s] = o),
                (t[s] = o);
            }
          }),
        n
      );
    }
    function K(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    V.use([
      function ({ swiper: e, extendParams: t, on: n, emit: r }) {
        function i(t) {
          let n;
          return (
            t &&
              ((n = m(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                n.length > 1 &&
                1 === e.$el.find(t).length &&
                (n = e.$el.find(t))),
            n
          );
        }
        function s(t, n) {
          const r = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[n ? "addClass" : "removeClass"](r.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](r.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: n } = e.navigation;
          s(n, e.isBeginning && !e.params.rewind),
            s(t, e.isEnd && !e.params.rewind);
        }
        function a(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev();
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
        }
        function c() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = U(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const n = i(t.nextEl),
            r = i(t.prevEl);
          n && n.length > 0 && n.on("click", l),
            r && r.length > 0 && r.on("click", a),
            Object.assign(e.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: r,
              prevEl: r && r[0],
            }),
            e.enabled ||
              (n && n.addClass(t.lockClass), r && r.addClass(t.lockClass));
        }
        function u() {
          const { $nextEl: t, $prevEl: n } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", a),
              n.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          n("init", () => {
            c(), o();
          }),
          n("toEdge fromEdge lock unlock", () => {
            o();
          }),
          n("destroy", () => {
            u();
          }),
          n("enable disable", () => {
            const { $nextEl: t, $prevEl: n } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              n &&
                n[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          n("click", (t, n) => {
            const { $nextEl: i, $prevEl: s } = e.navigation,
              o = n.target;
            if (e.params.navigation.hideOnClick && !m(o).is(s) && !m(o).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              i
                ? (t = i.hasClass(e.params.navigation.hiddenClass))
                : s && (t = s.hasClass(e.params.navigation.hiddenClass)),
                r(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                s && s.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: o, init: c, destroy: u });
      },
      function ({ swiper: e, extendParams: t, on: n, emit: r }) {
        const i = "swiper-pagination";
        let s;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function a() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, n) {
          const { bulletActiveClass: r } = e.params.pagination;
          t[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`);
        }
        function c() {
          const t = e.rtl,
            n = e.params.pagination;
          if (a()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            c = e.pagination.$el;
          let u;
          const d = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((u = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                u > i - 1 - 2 * e.loopedSlides && (u -= i - 2 * e.loopedSlides),
                u > d - 1 && (u -= d),
                u < 0 && "bullets" !== e.params.paginationType && (u = d + u))
              : (u = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === n.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const r = e.pagination.bullets;
            let i, a, d;
            if (
              (n.dynamicBullets &&
                ((s = r
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  e.isHorizontal() ? "width" : "height",
                  s * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((o += u - (e.previousIndex - e.loopedSlides || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (i = Math.max(u - o, 0)),
                (a = i + (Math.min(r.length, n.dynamicMainBullets) - 1)),
                (d = (a + i) / 2)),
              r.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              c.length > 1)
            )
              r.each((e) => {
                const t = m(e),
                  r = t.index();
                r === u && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (r >= i &&
                      r <= a &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    r === i && l(t, "prev"),
                    r === a && l(t, "next"));
              });
            else {
              const t = r.eq(u),
                s = t.index();
              if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const t = r.eq(i),
                  o = r.eq(a);
                for (let e = i; e <= a; e += 1)
                  r.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (s >= r.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      r.eq(r.length - e).addClass(
                        `${n.bulletActiveClass}-main`
                      );
                    r.eq(r.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(o, "next");
                else l(t, "prev"), l(o, "next");
              }
            }
            if (n.dynamicBullets) {
              const i = Math.min(r.length, n.dynamicMainBullets + 4),
                o = (s * i - s) / 2 - d * s,
                a = t ? "right" : "left";
              r.css(e.isHorizontal() ? a : "top", `${o}px`);
            }
          }
          if (
            ("fraction" === n.type &&
              (c.find(K(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
              c.find(K(n.totalClass)).text(n.formatFractionTotal(d))),
            "progressbar" === n.type)
          ) {
            let t;
            t = n.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (u + 1) / d;
            let i = 1,
              s = 1;
            "horizontal" === t ? (i = r) : (s = r),
              c
                .find(K(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${s})`)
                .transition(e.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (c.html(n.renderCustom(e, u + 1, d)), r("paginationRender", c[0]))
            : r("paginationUpdate", c[0]),
            e.params.watchOverflow &&
              e.enabled &&
              c[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
        function u() {
          const t = e.params.pagination;
          if (a()) return;
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el;
          let s = "";
          if ("bullets" === t.type) {
            let r = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              r > n &&
              (r = n);
            for (let n = 0; n < r; n += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            i.html(s), (e.pagination.bullets = i.find(K(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              i.html(s)),
            "custom" !== t.type && r("paginationRender", e.pagination.$el[0]);
        }
        function d() {
          e.params.pagination = U(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let n = m(t.el);
          0 !== n.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              n.length > 1 &&
              ((n = e.$el.find(t.el)),
              n.length > 1 &&
                (n = n.filter((t) => m(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            n.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (o = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on("click", K(t.bulletClass), function (t) {
                t.preventDefault();
                let n = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n);
              }),
            Object.assign(e.pagination, { $el: n, el: n[0] }),
            e.enabled || n.addClass(t.lockClass));
        }
        function p() {
          const t = e.params.pagination;
          if (a()) return;
          const n = e.pagination.$el;
          n.removeClass(t.hiddenClass),
            n.removeClass(t.modifierClass + t.type),
            n.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && n.off("click", K(t.bulletClass));
        }
        n("init", () => {
          d(), u(), c();
        }),
          n("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c();
          }),
          n("snapIndexChange", () => {
            e.params.loop || c();
          }),
          n("slidesLengthChange", () => {
            e.params.loop && (u(), c());
          }),
          n("snapGridLengthChange", () => {
            e.params.loop || (u(), c());
          }),
          n("destroy", () => {
            p();
          }),
          n("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          n("lock unlock", () => {
            c();
          }),
          n("click", (t, n) => {
            const i = n.target,
              { $el: s } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              s.length > 0 &&
              !m(i).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              const t = s.hasClass(e.params.pagination.hiddenClass);
              r(!0 === t ? "paginationShow" : "paginationHide"),
                s.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: u,
            update: c,
            init: d,
            destroy: p,
          });
      },
      function ({ swiper: e, extendParams: t, on: n, emit: r }) {
        const i = s();
        let o,
          a,
          l,
          c,
          u = !1,
          d = null,
          p = null;
        function f() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: n, progress: r } = e,
            { $dragEl: i, $el: s } = t,
            o = e.params.scrollbar;
          let c = a,
            u = (l - a) * r;
          n
            ? ((u = -u),
              u > 0 ? ((c = a - u), (u = 0)) : -u + a > l && (c = l + u))
            : u < 0
            ? ((c = a + u), (u = 0))
            : u + a > l && (c = l - u),
            e.isHorizontal()
              ? (i.transform(`translate3d(${u}px, 0, 0)`),
                (i[0].style.width = `${c}px`))
              : (i.transform(`translate3d(0px, ${u}px, 0)`),
                (i[0].style.height = `${c}px`)),
            o.hide &&
              (clearTimeout(d),
              (s[0].style.opacity = 1),
              (d = setTimeout(() => {
                (s[0].style.opacity = 0), s.transition(400);
              }, 1e3)));
        }
        function h() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: n, $el: r } = t;
          (n[0].style.width = ""),
            (n[0].style.height = ""),
            (l = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight),
            (c =
              e.size /
              (e.virtualSize +
                e.params.slidesOffsetBefore -
                (e.params.centeredSlides ? e.snapGrid[0] : 0))),
            (a =
              "auto" === e.params.scrollbar.dragSize
                ? l * c
                : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (n[0].style.width = `${a}px`)
              : (n[0].style.height = `${a}px`),
            (r[0].style.display = c >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (r[0].style.opacity = 0),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
        function v(t) {
          return e.isHorizontal()
            ? "touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0].clientX
              : t.clientX
            : "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientY
            : t.clientY;
        }
        function y(t) {
          const { scrollbar: n, rtlTranslate: r } = e,
            { $el: i } = n;
          let s;
          (s =
            (v(t) -
              i.offset()[e.isHorizontal() ? "left" : "top"] -
              (null !== o ? o : a / 2)) /
            (l - a)),
            (s = Math.max(Math.min(s, 1), 0)),
            r && (s = 1 - s);
          const c =
            e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * s;
          e.updateProgress(c),
            e.setTranslate(c),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        function b(t) {
          const n = e.params.scrollbar,
            { scrollbar: i, $wrapperEl: s } = e,
            { $el: a, $dragEl: l } = i;
          (u = !0),
            (o =
              t.target === l[0] || t.target === l
                ? v(t) -
                  t.target.getBoundingClientRect()[
                    e.isHorizontal() ? "left" : "top"
                  ]
                : null),
            t.preventDefault(),
            t.stopPropagation(),
            s.transition(100),
            l.transition(100),
            y(t),
            clearTimeout(p),
            a.transition(0),
            n.hide && a.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", t);
        }
        function x(t) {
          const { scrollbar: n, $wrapperEl: i } = e,
            { $el: s, $dragEl: o } = n;
          u &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            y(t),
            i.transition(0),
            s.transition(0),
            o.transition(0),
            r("scrollbarDragMove", t));
        }
        function _(t) {
          const n = e.params.scrollbar,
            { scrollbar: i, $wrapperEl: s } = e,
            { $el: o } = i;
          u &&
            ((u = !1),
            e.params.cssMode &&
              (e.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
            n.hide &&
              (clearTimeout(p),
              (p = g(() => {
                o.css("opacity", 0), o.transition(400);
              }, 1e3))),
            r("scrollbarDragEnd", t),
            n.snapOnRelease && e.slideToClosest());
        }
        function w(t) {
          const {
              scrollbar: n,
              touchEventsTouch: r,
              touchEventsDesktop: s,
              params: o,
              support: a,
            } = e,
            l = n.$el[0],
            c = !(!a.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            u = !(!a.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!l) return;
          const d = "on" === t ? "addEventListener" : "removeEventListener";
          a.touch
            ? (l[d](r.start, b, c), l[d](r.move, x, c), l[d](r.end, _, u))
            : (l[d](s.start, b, c), i[d](s.move, x, c), i[d](s.end, _, u));
        }
        function T() {
          const { scrollbar: t, $el: n } = e;
          e.params.scrollbar = U(
            e,
            e.originalParams.scrollbar,
            e.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const r = e.params.scrollbar;
          if (!r.el) return;
          let i = m(r.el);
          e.params.uniqueNavElements &&
            "string" == typeof r.el &&
            i.length > 1 &&
            1 === n.find(r.el).length &&
            (i = n.find(r.el));
          let s = i.find(`.${e.params.scrollbar.dragClass}`);
          0 === s.length &&
            ((s = m(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            i.append(s)),
            Object.assign(t, { $el: i, el: i[0], $dragEl: s, dragEl: s[0] }),
            r.draggable && e.params.scrollbar.el && w("on"),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
        function S() {
          e.params.scrollbar.el && w("off");
        }
        t({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          n("init", () => {
            T(), h(), f();
          }),
          n("update resize observerUpdate lock unlock", () => {
            h();
          }),
          n("setTranslate", () => {
            f();
          }),
          n("setTransition", (t, n) => {
            !(function (t) {
              e.params.scrollbar.el &&
                e.scrollbar.el &&
                e.scrollbar.$dragEl.transition(t);
            })(n);
          }),
          n("enable disable", () => {
            const { $el: t } = e.scrollbar;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          }),
          n("destroy", () => {
            S();
          }),
          Object.assign(e.scrollbar, {
            updateSize: h,
            setTranslate: f,
            init: T,
            destroy: S,
          });
      },
      function ({ swiper: e, extendParams: t, on: n, emit: r }) {
        let i;
        function o() {
          const t = e.slides.eq(e.activeIndex);
          let n = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(i),
            (i = g(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    r("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      r("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), r("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  r("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), r("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), r("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && o();
            }, n));
        }
        function a() {
          return (
            void 0 === i &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), r("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!e.autoplay.running &&
            void 0 !== i &&
            (i && (clearTimeout(i), (i = void 0)),
            (e.autoplay.running = !1),
            r("autoplayStop"),
            !0)
          );
        }
        function c(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (i && clearTimeout(i),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, d);
                  })
                : ((e.autoplay.paused = !1), o())));
        }
        function u() {
          const t = s();
          "hidden" === t.visibilityState && e.autoplay.running && c(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (o(), (e.autoplay.paused = !1));
        }
        function d(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, d);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? o() : l());
        }
        function p() {
          e.params.autoplay.disableOnInteraction ? l() : c(),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, d);
            });
        }
        function f() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), o());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          n("init", () => {
            e.params.autoplay.enabled &&
              (a(),
              s().addEventListener("visibilitychange", u),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", p), e.$el.on("mouseleave", f)));
          }),
          n("beforeTransitionStart", (t, n, r) => {
            e.autoplay.running &&
              (r || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(n)
                : l());
          }),
          n("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? l() : c());
          }),
          n("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              o();
          }),
          n("destroy", () => {
            e.$el.off("mouseenter", p),
              e.$el.off("mouseleave", f),
              e.autoplay.running && l(),
              s().removeEventListener("visibilitychange", u);
          }),
          Object.assign(e.autoplay, { pause: c, run: o, start: a, stop: l });
      },
    ]),
      new V(".mySwiper", {
        loop: !0,
        freeMode: !0,
        grabCursor: !0,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: !0,
        autoplay: { delay: 1 },
        speed: 3e3,
        freeModeMomentum: !1,
        breakpoints: {
          550: { slidesPerView: "3.5" },
          768: { slidesPerView: "5" },
          1366: { slidesPerView: "8" },
        },
      }),
      n(797),
      n(190);
  })();
})();
