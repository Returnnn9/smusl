module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Header = ()=>{
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", h, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", h);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            height: 68,
            position: "sticky",
            top: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            padding: "0 28px",
            gap: 20,
            background: scrolled ? "rgba(255,255,255,0.92)" : "#fff",
            backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
            borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.06)"}`,
            boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    cursor: "pointer",
                    userSelect: "none",
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-manrope)",
                            fontSize: 19,
                            fontWeight: 800,
                            letterSpacing: "-0.06em",
                            lineHeight: 0.9,
                            color: "#0F0F0F"
                        },
                        children: "СМЫСЛ"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-manrope)",
                            fontSize: 19,
                            fontWeight: 800,
                            letterSpacing: "-0.06em",
                            lineHeight: 0.9,
                            color: "#0F0F0F"
                        },
                        children: "ЕСТЬ"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(118,118,128,0.08)",
                        borderRadius: 12,
                        padding: "0 16px",
                        height: 40,
                        width: "100%",
                        maxWidth: 440,
                        border: "1px solid transparent",
                        transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)"
                    },
                    tabIndex: -1,
                    onFocus: (e)=>{
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.borderColor = "rgba(255,55,95,0.35)";
                        e.currentTarget.style.boxShadow = "0 0 0 4px rgba(255,55,95,0.06)";
                    },
                    onBlur: (e)=>{
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            e.currentTarget.style.background = "rgba(118,118,128,0.08)";
                            e.currentTarget.style.borderColor = "transparent";
                            e.currentTarget.style.boxShadow = "none";
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#AEAEB2",
                            strokeWidth: "2.2",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "11",
                                    cy: "11",
                                    r: "8"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m21 21-4.35-4.35"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search for croissants, sourdough...",
                            style: {
                                flex: 1,
                                background: "transparent",
                                border: "none",
                                outline: "none",
                                fontFamily: "var(--font-manrope)",
                                fontSize: 13,
                                fontWeight: 400,
                                color: "#0F0F0F",
                                letterSpacing: "-0.01em"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 75,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 44,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(118,118,128,0.08)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s, transform 0.2s",
                    flexShrink: 0
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.background = "rgba(118,118,128,0.14)";
                    e.currentTarget.style.transform = "scale(1.05)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.background = "rgba(118,118,128,0.08)";
                    e.currentTarget.style.transform = "scale(1)";
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#6E6E73",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "7",
                            r: "4"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 60
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 98,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 88,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ProductCard = ({ name, weight, price, oldPrice, discount, image, onAdd })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        style: {
            background: "#fff",
            padding: "14px 14px 16px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
            transition: "background 0.25s, box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), z-index 0s"
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.background = "#FAFAFA";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.07)";
            e.currentTarget.style.zIndex = "5";
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.zIndex = "auto";
        },
        children: [
            discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 10,
                    background: "#FF375F",
                    color: "#fff",
                    fontFamily: "var(--font-manrope)",
                    fontSize: 10,
                    fontWeight: 800,
                    padding: "2px 7px",
                    borderRadius: 100,
                    letterSpacing: "0.02em"
                },
                children: discount
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 39,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    aspectRatio: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#F5F5F7",
                    borderRadius: 16,
                    overflow: "hidden",
                    marginBottom: 10,
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)"
                },
                className: "group-hover:[transform:scale(1.03)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: name,
                    loading: "lazy",
                    style: {
                        width: "82%",
                        height: "82%",
                        objectFit: "contain",
                        mixBlendMode: "multiply"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ProductCard.tsx",
                    lineNumber: 59,
                    columnNumber: 4
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 50,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-manrope)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#0F0F0F",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    minHeight: 34,
                    marginBottom: 2,
                    transition: "color 0.2s"
                },
                className: "group-hover:!text-[#FF375F]",
                children: name
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 66,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-manrope)",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#C7C7CC",
                    letterSpacing: "0.03em",
                    marginBottom: 8
                },
                children: [
                    weight,
                    oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginLeft: 4,
                            color: "#30D158",
                            fontWeight: 700
                        },
                        children: "· Снизили цену"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 87,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 81,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline",
                            gap: 5
                        },
                        children: [
                            oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 11,
                                    fontWeight: 500,
                                    color: "#C7C7CC",
                                    textDecoration: "line-through"
                                },
                                children: oldPrice
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 95,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 16,
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    color: "#0F0F0F"
                                },
                                children: [
                                    price,
                                    " ₽"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 102,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 93,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onAdd();
                        },
                        "aria-label": "В корзину",
                        style: {
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: "#FFF0F3",
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#FF375F",
                            flexShrink: 0,
                            transition: "background 0.2s, color 0.2s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                            boxShadow: "0 1px 4px rgba(255,55,95,0.10)"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "#FF375F";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.transform = "rotate(90deg) scale(1.15)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,55,95,0.25)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "#FFF0F3";
                            e.currentTarget.style.color = "#FF375F";
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.boxShadow = "0 1px 4px rgba(255,55,95,0.10)";
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 5v14M5 12h14"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 136,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 135,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 111,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 92,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductCard.tsx",
        lineNumber: 15,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = ProductCard;
}),
"[project]/components/CartSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const CartSidebar = ({ cart, onUpdateQuantity, total })=>{
    const totalItems = cart.reduce((s, i)=>s + i.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            background: "#fff",
            borderLeft: "1px solid rgba(0,0,0,0.06)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "22px 22px 14px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "var(--font-manrope)",
                            fontSize: 22,
                            fontWeight: 800,
                            letterSpacing: "-0.035em",
                            color: "#0F0F0F",
                            marginBottom: 16
                        },
                        children: "Корзина"
                    }, void 0, false, {
                        fileName: "[project]/components/CartSidebar.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            cursor: "pointer",
                            marginBottom: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#0F0F0F",
                                    letterSpacing: "-0.015em"
                                },
                                children: "улица Академика Янгеля"
                            }, void 0, false, {
                                fileName: "[project]/components/CartSidebar.tsx",
                                lineNumber: 31,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "11",
                                height: "11",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#8E8E93",
                                strokeWidth: "2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m6 9 6 6 6-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/CartSidebar.tsx",
                                lineNumber: 37,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CartSidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-manrope)",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#8E8E93",
                            letterSpacing: "-0.01em"
                        },
                        children: "Доставка 15 минут"
                    }, void 0, false, {
                        fileName: "[project]/components/CartSidebar.tsx",
                        lineNumber: 41,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/CartSidebar.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 1,
                    background: "rgba(0,0,0,0.05)"
                }
            }, void 0, false, {
                fileName: "[project]/components/CartSidebar.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "smooth-scroll",
                style: {
                    flex: 1,
                    overflowY: "auto",
                    padding: "14px 22px"
                },
                children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        opacity: 0.35,
                        paddingTop: 40
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 42,
                                marginBottom: 14
                            },
                            children: "🥐"
                        }, void 0, false, {
                            fileName: "[project]/components/CartSidebar.tsx",
                            lineNumber: 58,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-manrope)",
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#0F0F0F"
                            },
                            children: "Корзина пуста"
                        }, void 0, false, {
                            fileName: "[project]/components/CartSidebar.tsx",
                            lineNumber: 59,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-manrope)",
                                fontSize: 12,
                                fontWeight: 400,
                                color: "#8E8E93",
                                marginTop: 6,
                                textAlign: "center",
                                maxWidth: 170,
                                lineHeight: 1.5
                            },
                            children: "Добавьте свежую выпечку из каталога"
                        }, void 0, false, {
                            fileName: "[project]/components/CartSidebar.tsx",
                            lineNumber: 62,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CartSidebar.tsx",
                    lineNumber: 54,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 14
                    },
                    children: cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 10,
                                alignItems: "flex-start",
                                padding: "6px 0",
                                transition: "opacity 0.2s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 56,
                                        height: 56,
                                        flexShrink: 0,
                                        background: "#F5F5F7",
                                        borderRadius: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid rgba(0,0,0,0.04)",
                                        overflow: "hidden"
                                    },
                                    children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.image,
                                        alt: "",
                                        style: {
                                            width: "78%",
                                            height: "78%",
                                            objectFit: "contain",
                                            mixBlendMode: "multiply"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CartSidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 22
                                        },
                                        children: "🍞"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CartSidebar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-manrope)",
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: "#0F0F0F",
                                                lineHeight: 1.35,
                                                letterSpacing: "-0.01em",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                marginBottom: 6
                                            },
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 98,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        background: "#F5F5F7",
                                                        borderRadius: 8,
                                                        border: "1px solid rgba(0,0,0,0.05)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onUpdateQuantity(item.id, -1),
                                                            style: {
                                                                width: 26,
                                                                height: 26,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                background: "none",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                fontFamily: "var(--font-manrope)",
                                                                fontSize: 14,
                                                                fontWeight: 400,
                                                                color: "#8E8E93",
                                                                transition: "color 0.15s"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.color = "#FF375F",
                                                            onMouseLeave: (e)=>e.currentTarget.style.color = "#8E8E93",
                                                            children: "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 12
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-manrope)",
                                                                fontSize: 13,
                                                                fontWeight: 800,
                                                                color: "#0F0F0F",
                                                                minWidth: 18,
                                                                textAlign: "center"
                                                            },
                                                            children: item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 12
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onUpdateQuantity(item.id, 1),
                                                            style: {
                                                                width: 26,
                                                                height: 26,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                background: "none",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                fontFamily: "var(--font-manrope)",
                                                                fontSize: 16,
                                                                fontWeight: 400,
                                                                color: "#8E8E93",
                                                                transition: "color 0.15s"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.color = "#FF375F",
                                                            onMouseLeave: (e)=>e.currentTarget.style.color = "#8E8E93",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 12
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CartSidebar.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "flex-end"
                                                    },
                                                    children: [
                                                        item.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-manrope)",
                                                                fontSize: 10,
                                                                fontWeight: 500,
                                                                color: "#C7C7CC",
                                                                textDecoration: "line-through"
                                                            },
                                                            children: item.oldPrice * item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 13
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-manrope)",
                                                                fontSize: 14,
                                                                fontWeight: 800,
                                                                letterSpacing: "-0.02em",
                                                                color: "#0F0F0F"
                                                            },
                                                            children: [
                                                                item.price * item.quantity,
                                                                " ₽"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CartSidebar.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 12
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CartSidebar.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CartSidebar.tsx",
                                            lineNumber: 108,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartSidebar.tsx",
                                    lineNumber: 97,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.id, true, {
                            fileName: "[project]/components/CartSidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/CartSidebar.tsx",
                    lineNumber: 70,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/CartSidebar.tsx",
                lineNumber: 52,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "14px 22px 22px",
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 -8px 24px rgba(0,0,0,0.03)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: "#8E8E93",
                                    letterSpacing: "0.02em",
                                    marginBottom: 2
                                },
                                children: "Итого"
                            }, void 0, false, {
                                fileName: "[project]/components/CartSidebar.tsx",
                                lineNumber: 184,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 30,
                                    fontWeight: 800,
                                    letterSpacing: "-0.045em",
                                    color: "#0F0F0F",
                                    lineHeight: 1
                                },
                                children: [
                                    total,
                                    " ₽"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CartSidebar.tsx",
                                lineNumber: 190,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CartSidebar.tsx",
                        lineNumber: 183,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: cart.length === 0,
                        style: {
                            width: "100%",
                            height: 50,
                            borderRadius: 14,
                            border: "none",
                            background: cart.length === 0 ? "#E5E5EA" : "linear-gradient(180deg, #D18A45 0%, #B86F2E 100%)",
                            color: cart.length === 0 ? "#AEAEB2" : "#fff",
                            fontFamily: "var(--font-manrope)",
                            fontSize: 15,
                            fontWeight: 800,
                            letterSpacing: "-0.01em",
                            cursor: cart.length === 0 ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s, filter 0.25s",
                            boxShadow: cart.length === 0 ? "none" : "0 4px 0 rgba(0,0,0,0.12), 0 8px 20px rgba(180,100,40,0.18)"
                        },
                        onMouseEnter: (e)=>{
                            if (cart.length > 0) {
                                e.currentTarget.style.transform = "translateY(-1px)";
                                e.currentTarget.style.filter = "brightness(1.06)";
                                e.currentTarget.style.boxShadow = "0 6px 0 rgba(0,0,0,0.10), 0 12px 28px rgba(180,100,40,0.24)";
                            }
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.filter = "none";
                            e.currentTarget.style.boxShadow = cart.length === 0 ? "none" : "0 4px 0 rgba(0,0,0,0.12), 0 8px 20px rgba(180,100,40,0.18)";
                        },
                        children: "Продолжить"
                    }, void 0, false, {
                        fileName: "[project]/components/CartSidebar.tsx",
                        lineNumber: 199,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/CartSidebar.tsx",
                lineNumber: 177,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/CartSidebar.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CartSidebar;
}),
"[project]/components/PromoBanners.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PromoBanners = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 12,
            marginBottom: 28
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group anim-fade-up anim-delay-1",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 20,
                    cursor: "pointer",
                    background: "linear-gradient(135deg, #FDF5EB 0%, #F8ECDA 100%)",
                    border: "1px solid rgba(180,130,70,0.12)",
                    height: 190,
                    padding: "26px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)"
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(180,130,70,0.12)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    background: "#fff",
                                    borderRadius: 100,
                                    padding: "3px 10px",
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 10.5,
                                    fontWeight: 700,
                                    color: "#9B6B3A",
                                    border: "1px solid rgba(155,107,58,0.12)",
                                    marginBottom: 10
                                },
                                children: "Morning Special"
                            }, void 0, false, {
                                fileName: "[project]/components/PromoBanners.tsx",
                                lineNumber: 21,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 20,
                                    fontWeight: 800,
                                    letterSpacing: "-0.035em",
                                    lineHeight: 1.15,
                                    color: "#1A1101",
                                    maxWidth: 170
                                },
                                children: "Buy 1 Cinnamon Roll, get coffee free"
                            }, void 0, false, {
                                fileName: "[project]/components/PromoBanners.tsx",
                                lineNumber: 28,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 20,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            position: "relative",
                            zIndex: 2,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            background: "#fff",
                            border: "1px solid rgba(0,0,0,0.08)",
                            borderRadius: 10,
                            padding: "7px 14px",
                            fontFamily: "var(--font-manrope)",
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#1A1101",
                            cursor: "pointer",
                            width: "fit-content",
                            transition: "box-shadow 0.2s, transform 0.2s",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                            e.currentTarget.style.transform = "translateY(0)";
                        },
                        children: [
                            "Claim offer ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 14
                                },
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/components/PromoBanners.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 36,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=280&q=80",
                        alt: "",
                        style: {
                            position: "absolute",
                            right: -10,
                            top: 8,
                            width: 155,
                            height: 155,
                            objectFit: "contain",
                            mixBlendMode: "multiply",
                            opacity: 0.88,
                            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                            transform: "rotate(5deg)"
                        },
                        className: "group-hover:scale-110 group-hover:rotate-[-3deg]"
                    }, void 0, false, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 51,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromoBanners.tsx",
                lineNumber: 7,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group anim-fade-up anim-delay-2",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 20,
                    cursor: "pointer",
                    background: "linear-gradient(135deg, #F2F6FF 0%, #E8F0FF 100%)",
                    border: "1px solid rgba(60,110,220,0.10)",
                    height: 190,
                    padding: "26px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)"
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(60,110,220,0.10)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    borderRadius: 100,
                                    padding: "3px 10px",
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 10.5,
                                    fontWeight: 700,
                                    color: "#3E6ED4",
                                    border: "1.5px solid rgba(62,110,212,0.3)",
                                    marginBottom: 12
                                },
                                children: "New Arrival"
                            }, void 0, false, {
                                fileName: "[project]/components/PromoBanners.tsx",
                                lineNumber: 80,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 26,
                                    fontWeight: 800,
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1.05,
                                    color: "#0B1826",
                                    marginBottom: 6
                                },
                                children: "Parisian Box"
                            }, void 0, false, {
                                fileName: "[project]/components/PromoBanners.tsx",
                                lineNumber: 87,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: "#6685AF",
                                    lineHeight: 1.5,
                                    maxWidth: 200
                                },
                                children: "Assortment of 6 freshly baked croissants."
                            }, void 0, false, {
                                fileName: "[project]/components/PromoBanners.tsx",
                                lineNumber: 93,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 79,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            display: "inline-flex",
                            background: "#fff",
                            border: "1px solid rgba(60,110,220,0.12)",
                            borderRadius: 10,
                            padding: "7px 14px",
                            fontFamily: "var(--font-manrope)",
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#0B1826",
                            cursor: "pointer",
                            width: "fit-content",
                            transition: "box-shadow 0.2s, transform 0.2s",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(60,110,220,0.10)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                            e.currentTarget.style.transform = "translateY(0)";
                        },
                        children: "Order now"
                    }, void 0, false, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 101,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromoBanners.tsx",
                lineNumber: 66,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group anim-fade-up anim-delay-3",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 20,
                    cursor: "pointer",
                    background: "linear-gradient(145deg, #2A2520 0%, #1A1714 100%)",
                    height: 190,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)"
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "radial-gradient(circle at 70% 25%, rgba(200,150,80,0.15) 0%, transparent 55%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 129,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            opacity: 0.04,
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 131,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            position: "relative",
                            zIndex: 1,
                            fontFamily: "var(--font-manrope)",
                            fontSize: 13,
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.50)",
                            lineHeight: 1.55
                        },
                        children: "Aged 48 hours. Baked this morning."
                    }, void 0, false, {
                        fileName: "[project]/components/PromoBanners.tsx",
                        lineNumber: 133,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromoBanners.tsx",
                lineNumber: 116,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromoBanners.tsx",
        lineNumber: 4,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = PromoBanners;
}),
"[project]/components/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: 1,
        name: "Harry's American Sandwich",
        weight: "470 г",
        price: 149,
        accent: "bg-sky-50",
        category: "Heritage Breads",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80&fit=crop"
    },
    {
        id: 2,
        name: "Ржаной Коломенский",
        weight: "300 г",
        price: 125,
        accent: "bg-amber-50",
        category: "Heritage Breads",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?w=400&q=80&fit=crop"
    },
    {
        id: 3,
        name: "Злаковый Тостовый",
        weight: "250 г",
        price: 89,
        oldPrice: 99,
        discount: "-10%",
        accent: "bg-emerald-50",
        category: "Healthy Living",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80&fit=crop"
    },
    {
        id: 4,
        name: "Круассан Маслянный",
        weight: "120 г",
        price: 105,
        accent: "bg-yellow-50",
        category: "Viennoiserie",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&q=80&fit=crop"
    },
    {
        id: 5,
        name: "Батон Нарезной",
        weight: "400 г",
        price: 79,
        accent: "bg-orange-50",
        category: "Heritage Breads",
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80&fit=crop"
    },
    {
        id: 6,
        name: "Бриошь с Маслом",
        weight: "300 г",
        price: 169,
        accent: "bg-rose-50",
        category: "Viennoiserie",
        image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&q=80&fit=crop"
    },
    {
        id: 7,
        name: "Английский Тостовый",
        weight: "260 г",
        price: 89,
        oldPrice: 110,
        discount: "-19%",
        accent: "bg-zinc-50",
        category: "Heritage Breads",
        image: "https://images.unsplash.com/photo-1486887396153-fa416526c108?w=400&q=80&fit=crop"
    },
    {
        id: 8,
        name: "Даниловский Бездрожжевой",
        weight: "350 г",
        price: 139,
        accent: "bg-stone-50",
        category: "Healthy Living",
        image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=400&q=80&fit=crop"
    },
    {
        id: 9,
        name: "Шоколадный Круассан",
        weight: "110 г",
        price: 129,
        accent: "bg-fuchsia-50",
        category: "Viennoiserie",
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80&fit=crop"
    },
    {
        id: 10,
        name: "Хлеб на Закваске",
        weight: "500 г",
        price: 189,
        accent: "bg-amber-50",
        category: "Small Batch",
        image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400&q=80&fit=crop"
    },
    {
        id: 11,
        name: "Синнабон Классик",
        weight: "150 г",
        price: 149,
        accent: "bg-yellow-50",
        category: "Viennoiserie",
        image: "https://images.unsplash.com/photo-1609869141940-de11e2e8a7e2?w=400&q=80&fit=crop"
    },
    {
        id: 12,
        name: "Ржаной Дарницкий",
        weight: "400 г",
        price: 99,
        accent: "bg-stone-50",
        category: "Heritage Breads",
        image: "https://images.unsplash.com/photo-1620087826013-c6b96e0b58db?w=400&q=80&fit=crop"
    }
];
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CartSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromoBanners$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PromoBanners.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Home() {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToCart = (product)=>{
        setCart((prev)=>{
            const found = prev.find((i)=>i.id === product.id);
            if (found) return prev.map((i)=>i.id === product.id ? {
                    ...i,
                    quantity: i.quantity + 1
                } : i);
            return [
                ...prev,
                {
                    id: product.id,
                    name: product.name,
                    image: product.image ?? "",
                    price: product.price,
                    oldPrice: product.oldPrice,
                    quantity: 1
                }
            ];
        });
    };
    const updateQty = (id, delta)=>{
        setCart((prev)=>prev.map((i)=>i.id === id ? {
                    ...i,
                    quantity: Math.max(0, i.quantity + delta)
                } : i).filter((i)=>i.quantity > 0));
    };
    const total = cart.reduce((s, i)=>s + i.price * i.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen font-manrope",
        style: {
            background: "#F2F2F4"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    display: "flex",
                    maxWidth: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden xl:block",
                        style: {
                            width: 130,
                            flexShrink: 0,
                            position: "sticky",
                            top: 68,
                            height: "calc(100vh - 68px)",
                            background: "linear-gradient(180deg, #E6E6EA 0%, #DCDCE2 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            padding: "18px 18px 40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromoBanners$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-manrope)",
                                    fontSize: 20,
                                    fontWeight: 800,
                                    letterSpacing: "-0.03em",
                                    color: "#0F0F0F",
                                    marginBottom: 12
                                },
                                children: "Товары"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: "1px",
                                    background: "rgba(0,0,0,0.05)",
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                                },
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            ...p,
                                            image: p.image ?? "",
                                            onAdd: ()=>addToCart(p)
                                        }, p.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 8
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group",
                                        style: {
                                            background: "#fff",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 8,
                                            cursor: "pointer",
                                            minHeight: 180,
                                            transition: "background 0.2s"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.background = "#FAFAFA",
                                        onMouseLeave: (e)=>e.currentTarget.style.background = "#fff",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 38,
                                                    height: 38,
                                                    borderRadius: "50%",
                                                    background: "#F0F0F4",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.2s",
                                                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
                                                },
                                                className: "group-hover:scale-110 group-hover:bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#8E8E93",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-manrope)",
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    color: "#8E8E93",
                                                    transition: "color 0.2s"
                                                },
                                                className: "group-hover:text-[#0F0F0F]",
                                                children: "Больше →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden lg:block",
                        style: {
                            width: 340,
                            flexShrink: 0,
                            position: "sticky",
                            top: 68,
                            height: "calc(100vh - 68px)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            cart: cart,
                            onUpdateQuantity: updateQty,
                            total: total
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 45,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91f45cc7._.js.map