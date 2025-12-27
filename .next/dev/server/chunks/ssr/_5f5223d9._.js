module.exports = [
"[project]/hooks/use-resizable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResizable",
    ()=>useResizable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useResizable({ initialWidth, minWidth, maxWidth, offsetX = 0 }) {
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialWidth);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseDown = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            if (isDragging) {
                const newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX - offsetX));
                setWidth(newWidth);
            }
        };
        const handleMouseUp = ()=>{
            setIsDragging(false);
        };
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
        }
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "";
            document.body.style.userSelect = "";
        };
    }, [
        isDragging,
        minWidth,
        maxWidth,
        offsetX
    ]);
    return {
        width,
        isDragging,
        handleMouseDown
    };
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/resize-handle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeHandle",
    ()=>ResizeHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function ResizeHandle({ onMouseDown, isDragging }) {
    const ditheredPattern = `data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%23000' opacity='0.25'/%3E%3C/svg%3E`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseDown: onMouseDown,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-0 top-0 bottom-0 w-16 cursor-col-resize transition-opacity", isDragging ? "opacity-100" : "opacity-0 hover:opacity-100"),
        style: {
            backgroundImage: `url("${ditheredPattern}")`,
            backgroundSize: '4px 4px',
            backgroundRepeat: 'repeat'
        }
    }, void 0, false, {
        fileName: "[project]/components/resize-handle.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resize-handle.tsx [app-ssr] (ecmascript)");
;
;
;
;
const tabLabels = {
    inicio: "Início",
    notas: "Notas",
    "modelos-mentais": "Modelos Mentais",
    poemas: "Poemas",
    projetos: "Projetos"
};
function Sidebar({ activeTab, onTabChange, width, isDragging, onMouseDown, mobileMenuOpen }) {
    const tabs = [
        "inicio",
        "notas",
        "modelos-mentais",
        "poemas",
        "projetos"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: `${width}px`,
            borderRight: '3px double var(--border)'
        },
        className: "jsx-4fa6cc95b3bff62" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative shrink-0 bg-background", "max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-40 max-md:shadow-lg", "max-md:transition-transform max-md:duration-150", mobileMenuOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full") || ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4fa6cc95b3bff62" + " " + "absolute top-0 left-8 w-8 h-40 z-10 group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'linear-gradient(135deg, oklch(0.42 0.18 25), oklch(0.52 0.18 25) 50%, oklch(0.42 0.18 25))',
                        border: '1px solid oklch(0.42 0.18 25)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 12px), 0 100%)',
                        boxShadow: '2px 2px 6px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.2)'
                    },
                    className: "jsx-4fa6cc95b3bff62" + " " + "w-full h-full relative overflow-hidden"
                }, void 0, false, {
                    fileName: "[project]/components/sidebar.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "4fa6cc95b3bff62",
                children: "@keyframes sheen{0%{transform:translate(-100%)}to{transform:translate(200%)}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-4fa6cc95b3bff62" + " " + "flex flex-col gap-2 p-8 pt-54",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTabChange(tab),
                        className: "jsx-4fa6cc95b3bff62" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-left py-1 transition-colors uppercase tracking-widest text-xs", activeTab === tab ? "text-foreground" : "text-foreground/40 hover:text-foreground/70") || ""),
                        children: tabLabels[tab]
                    }, tab, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandle"], {
                onMouseDown: onMouseDown,
                isDragging: isDragging
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "pt-2 pb-4 uppercase font-mono text-xs opacity-50 text-muted-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "© alex martins 2026."
        }, void 0, false, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/about-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-between min-h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-serif mb-2",
                                children: "argo·blog"
                            }, void 0, false, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 8,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "/ˈargo.blog/"
                            }, void 0, false, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 9,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/about-section.tsx",
                        lineNumber: 7,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "noun"
                            }, void 0, false, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 13,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "space-y-2 list-decimal list-inside",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-foreground",
                                        children: "graduando em filosofia"
                                    }, void 0, false, {
                                        fileName: "[project]/components/about-section.tsx",
                                        lineNumber: 15,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-foreground",
                                        children: [
                                            "founding design engineer at",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://paradigmai.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid",
                                                children: "Paradigm"
                                            }, void 0, false, {
                                                fileName: "[project]/components/about-section.tsx",
                                                lineNumber: 20,
                                                columnNumber: 13
                                            }, this),
                                            "; previously at",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://vercel.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid",
                                                children: "Vercel"
                                            }, void 0, false, {
                                                fileName: "[project]/components/about-section.tsx",
                                                lineNumber: 29,
                                                columnNumber: 13
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/about-section.tsx",
                                        lineNumber: 18,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 14,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/about-section.tsx",
                        lineNumber: 12,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Contato:"
                            }, void 0, false, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 43,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://instagram.com/1martinsalex",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid",
                                children: "Instagram"
                            }, void 0, false, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 44,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.youtube.com/@oalexmartins",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid",
                                children: "Youtube"
                            }, void 0, false, {
                                fileName: "[project]/components/about-section.tsx",
                                lineNumber: 52,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/about-section.tsx",
                        lineNumber: 42,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/about-section.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/components/about-section.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/about-section.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/notes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notes",
    ()=>notes
]);
const notes = [
    {
        "slug": "favourite-links",
        "title": "Unidade das tensões",
        "date": "Setembro 2025",
        "excerpt": "",
        "content": "<p>A tensão faz parte da vida humana. Devemos buscar uma unidade nas tensões internas e ao mesmo tempo dialogar com as tensões externas. Afinal é o desequilibrio natural que veio desde a expulsão do homem do Paraíso. É a questão dos temperamentos. A modernidade busca a redução das tensões, que convenhamos é impossível, buscando a universalização de aspectos mais baixos como um modelo de vida. É como se buscassem recortar pequenos aspectos da vida humana para daí irradiar alguma esperança de sentido, o que vai totalmente contra o sentido de educação na Grécia Antiga, a famosa paideia, que significava em resumo, a formação integral do homem. Para alguns existe apenas a vida enquanto dieta, para outros apenas a vida enquanto ler livros, ou enquanto trabalho, ou enquanto educar os filhos, etc. Isso é basicamente negar o dom da humanidade dado por Deus. É quase uma afronta. Não entendem que a vida é Esparta e Atenas.</p>"
    },
    {
        "slug": "sobrefalaremvivresavie",
        "title": "Sobre falar em Vivre Sa Vie",
        "date": "Janeiro 2025",
        "excerpt": "",
        "content": "<p>Tenho pensado em uma cena do filme \"Vivre Sa Vie\" quando ocorre o diálogo entre Nana e um filósofo. Há um momento em que ele diz: \"Eu acredito que aprendemos a falar bem quando renunciamos à vida por algum tempo. É quase... o preço. Falar é quase uma ressurreição em relação à vida. Quando falamos é uma outra vida de quando não falamos. Então, para viver falando deve-se passar pela morte da vida sem falar. Há uma certa regra ascética que te impede de falar bem até olharmos a vida com desapego.\"</p>"
    }
];
}),
"[project]/components/notes-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotesList",
    ()=>NotesList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$notes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/notes.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resize-handle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
// Helper function to parse date string (MM-DD-YYYY) and return comparable timestamp
function parseNoteDate(dateString) {
    const [month, day, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day).getTime();
}
// Sort notes in reverse chronological order (newest first)
function sortNotesByDate() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$notes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notes"]
    ].sort((a, b)=>parseNoteDate(b.date) - parseNoteDate(a.date));
}
function NotesList({ selectedNote, onSelectNote, width, isDragging, onMouseDown }) {
    const sortedNotes = sortNotesByDate();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: `${width}px`
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-y-auto shrink-0 border-r border-border", selectedNote && "max-md:hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-serif mb-8",
                                children: "Notas"
                            }, void 0, false, {
                                fileName: "[project]/components/notes-list.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-8",
                                children: "Impressões e observações oriundas do absoluto nada ou da contemplação constante."
                            }, void 0, false, {
                                fileName: "[project]/components/notes-list.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0",
                                children: sortedNotes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSelectNote(note.slug),
                                                className: "w-full text-left space-y-1.5 py-3 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-base font-medium text-foreground",
                                                                children: note.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/notes-list.tsx",
                                                                lineNumber: 47,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                                                children: "↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/notes-list.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/notes-list.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground font-mono uppercase tracking-widest",
                                                        children: note.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notes-list.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notes-list.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            index < sortedNotes.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-border my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notes-list.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, note.slug, true, {
                                        fileName: "[project]/components/notes-list.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/notes-list.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notes-list.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/components/notes-list.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/notes-list.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            selectedNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandle"], {
                onMouseDown: onMouseDown,
                isDragging: isDragging
            }, void 0, false, {
                fileName: "[project]/components/notes-list.tsx",
                lineNumber: 63,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/notes-list.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/note-reader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoteReader",
    ()=>NoteReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$notes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/notes.tsx [app-ssr] (ecmascript)");
;
;
function NoteReader({ slug }) {
    const note = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$notes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notes"].find((n)=>n.slug === slug);
    if (!note) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2",
                children: note.date
            }, void 0, false, {
                fileName: "[project]/components/note-reader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif mb-8 text-foreground",
                children: note.title
            }, void 0, false, {
                fileName: "[project]/components/note-reader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: note.content
                }
            }, void 0, false, {
                fileName: "[project]/components/note-reader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/note-reader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/content-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentPanel",
    ()=>ContentPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
function ContentPanel({ onClose, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex-1 p-8 md:p-16 max-w-3xl overflow-y-auto max-md:pt-20 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "p-2 hover:bg-muted rounded-lg transition-colors",
                    "aria-label": "Close reading panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/components/content-panel.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/content-panel.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/content-panel.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-panel.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/modelos-mentais.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelosMentais",
    ()=>modelosMentais
]);
const modelosMentais = [
    {
        "slug": "compounding",
        "title": "MM - Compounding",
        "date": "Outubro 2025",
        "excerpt": "",
        "content": "<h3>O que é compounding?</h3>\n<p>Imagine uma bola de neve rolando montanha abaixo: ela começa pequena e o crescimento é lento. Mas à medida que rola, ela ganha mais neve e se torna maior. O crescimento acelera porque uma bola maior ganha neve muito mais rapidamente do que uma pequena. Essa é a ideia visual do que é compounding.</p>\n<p>Em termos financeiros, compounding trata-se dos famosos *juros compostos.*</p>\n<ul><li>É um modelo mental que segue a lei de potência (Power Law), e leis de potência são coisas simplesmente mágicas.</li></ul>\n<p>Tal como nos juros compostos, a maior parte dos ganhos **aparece/acumula-se no final do processo e não no começo**. Para que isso aconteça, é preciso continuamente reinvestir os retornos, mesmo que modestos.</p>\n<blockquote>Albert Einstein descreveu o compounding como a oitava maravilha do mundo.</blockquote>\n<blockquote>\"Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.\"<br/>- Naval Ravikant</blockquote>\n<h3>Riqueza e dívida</h3>\n<p>Nós, humanos, costumamos pensar em termos de **dinâmicas lineares**. Esperamos que dobrar o esforço simplesmente dobre o resultado. O compounding, no entanto, é **não linear** e **exponencial**, por isso o subestimamos com frequência, pois funções exponenciais são difíceis de imaginar.</p>\n<ul><li>*O crescimento exponencial significa que os retornos se multiplicam porque o tempo permitiu que os retornos anteriores fossem reinvestidos e gerassem mais retornos*</li></ul>\n<p>Assim como os ganhos podem ser formados por compounding, as dívidas também o são, podendo crescer a um ponto impossível de serem quitadas. **Assim, o compounding pode ser poderoso tanto para construir riqueza quanto para destruí-la.**</p>\n<p>!<a href=\"static/images/exponencial.png\" target=\"_blank\" rel=\"noopener noreferrer\">alt text</a></p>\n<h3>Tipos de compounding</h3>\n<p>Compounding pode ser aplicado a tudo, principalmente a **conhecimento, experiências e relacionamentos.**</p>\n<ul><li>As decisões tomadas no **início** de qualquer empreendimento têm um impacto cujas consequências **crescem exponencialmente** ao longo do tempo.</li></ul>\n<h4>Knowledge compounding</h4>\n<p>Aplicar o conceito de compounding na aquisição de conhecimento é o que tende a ser um dos diferenciais das maiores mentes da humanidade.Para explicar esse tipo, vejamos o exemplo histórico da **norma de educação judaica**.</p>\n<ol><li>**Ação Inicial:** No primeiro século da Era Comum, os rabinos instituíram uma regra religiosa que exigia que todos os pais judeus enviassem seus filhos de seis a sete anos para a escola primária para aprender a ler e estudar a Torá em hebraico.</li></ol>\n<ol><li>**Custo Inicial:** Inicialmente, isso era um **sacrifício** que não gerava retornos econômicos nas economias agrárias em que viviam.</li></ol>\n<ol><li>**Composição dos Retornos:** No entanto, essa alfabetização se tornou um **capital humano** valioso. Aprender a ler ajudou as pessoas a desenvolver a escrita, a aritmética e a capacidade de calcular custos, preços e taxas de juros.</li></ol>\n<ol><li>**Vantagem Futura:** Essa vantagem permitiu que o povo judeu migrasse para profissões urbanas mais lucrativas, como artesãos, comerciantes e agiotas, a uma taxa muito maior do que os não-judeus. O knowledge compounding serviu como uma \"alavanca\" para buscar novas oportunidades financeiras.</li></ol>\n<p>Os autores argumentam que aprender a ler ajuda as pessoas a aprender a escrever. Também ajuda a desenvolver a matemática e a capacidade de calcular preços, custos, taxas de juros e taxas de câmbio e, assim, desenvolver os livros contábeis. Portanto, a alfabetização e os reinvestimentos nela criam oportunidades.</p>\n<p>==**Fonte:** The Chosen Few, de Maristella Botticini and Zvi Eckstein==</p>\n<h4>Experience Compounding</h4>\n<p>Experiências também se aproveitam do compounding. **Os insights que obtemos das experiências terão mais retorno se os reinvestirmos em novas experiências.**</p>\n<ul><li>Um exemplo é o de Mireya Mayor, uma cientista e exploradora da National Geographic, usou o conhecimento que adquiriu em uma variedade de atividades, desde saber o que embalar em uma expedição até lidar com a pressão como cheerleader de futebol americano.</li><li>Em 2008, ela participou de uma expedição para refazer a trilha de Henry Morton Stanley, o homem enviado por um jornal americano para encontrar o Dr. David Livingstone na Tanzania, onde havia desaparecido. </li><li>Mayor fazia parte de uma equipe de quatro pessoas que foram filmadas tentando completar a jornada traiçoeira com o mesmo equipamento que Stanley teria em 1865. Apesar do terreno desafiador, da doença e de uma variedade de animais perigosos, ela e o resto do grupo completaram o desafio. Como ela conseguiu fazer coisas como caminhar por horas em temperaturas incrivelmente quentes e úmidas enquanto lutava contra a disenteria pode ser esclarecido através das lentes do compounding.</li></ul>\n<p>Os seres humanos evoluíram para serem muito bons em *utilizar experiências passadas para guiar-se em decisões futuras*, então muito do knowledge e experience compounding acontece naturalmente ao longo do tempo, principalmente quando somos jovens.</p>\n<h4>Relationship Compounding</h4>\n<p>Relacionamentos também se beneficiam do compounding, tornando-se mais fortes ao longo do tempo se continuamos investindo em dinâmicas win-win (jogos de soma positiva).</p>\n<p>Imagine uma rede de nós que conectam aleatoriamente. A probabilidade de qualquer nó receber uma conexão adicional é proporcional ao número de conexões que ele já possui. Por aleatoriedade, um pequeno número de nós acabará recebendo a maior parte das conexões. **Este fenômeno chama-se apego preferencial.**</p>\n<blockquote>Este é um tipo de compounding onde bens ou conexões tendem a acumular-se em entidades ou indivíduos que já possuem mais. Por exemplo, pessoas com muitos amigos tendem a fazer ainda mais amigos, pois têm mais oportunidades de conhecer novas pessoas através de suas redes existentes</blockquote>"
    },
    {
        "slug": "feedback-loops",
        "title": "MM - Feedback Loops",
        "date": "Setembro 2025",
        "excerpt": "",
        "content": "<h3>O  que é um feedback loop?</h3>\n<p>**Conceito técnico de feedback:** informação comunicada em resposta a uma ação</p>\n<p>Na Teoria Geral de Sistemas (TGS), um Feedback Loop ****ocorre quando os outputs(informações) de um sistema afetam seus próprios comportamentos.****</p>\n<ul><li>É a saída de informação afetando o próprio sistema  </li></ul>\n<p>Pense, por exemplo, no arquivo de log, que registra uma informação (registro) das operações de uma determinada aplicação, onde podemos programar para dar 'print' de xx se x ocorrer ou dar 'print' de yy se y ocorrer.</p>\n<h3>Tipos de feedback loops</h3>\n<p>**Existem 2 tipos básicos de Feedback Loops:**   1 - Feedback Loop Equilibrador __(Balancing)__ ou Negativos.   **Objetivo: EQUILÍBRIO.** Agem como um freio, trazendo a variável de volta para uma faixa desejável. ***Exemplo:*** Termostato &amp; sistema de aquecimento.   __Informação sobre temperatura -&gt; Termostato -&gt; Ajuste de saída do forno para__ ***manter temperatura desejada.***</p>\n<p>2 - Feedback Loop Reforçador __(Reinforcing)__ ou Positivos.   **Objetivo: AMPLIFICAÇÃO.** Agem como um acelerador, impulsionando o sistema/processo específico para longe de seu ponto de partida. ***Exemplo:*** Popularidade das trends da moda e ciclos envolvidos na pobreza   *Para quebrar esses ciclos reforçadores, muitas vezes é necessária intervenção externa ou uma nova mudança de condições.*</p>\n<p>| Tipologia do Feedback Loop | Efeito no sistema         | Exemplo de resultado positivo                   | Exemplo de resultado negativo                          | | -------------------------- | ------------------------- | ----------------------------------------------- | ------------------------------------------------------ | | **REFORÇADOR** (Positivo)  | Amplificação / Aceleração | Popularidade crescente de um produto excelente. | Aumento da pobreza ou crime (Sequestro)                | | **BALANCEADOR** (Negativo) | Estabilidade / Freio      | Mantém a temperatura da casa ideal              | Mantém um mau hábito em equilíbrio (difícil de mudar). |</p>\n<blockquote>A classificação de \"negativo\" ou \"positivo\" (bom/ruim) é, na prática, uma avaliação do **valor da consequência** (o que chamamos de efeitos de segunda ordem ou posteriores) que o ciclo atual  está gerando.</blockquote>\n<h3>Funções relacionais</h3>\n<p>O mundo é um grande emanador de feedbacks sobre o que funciona e o que não funciona.</p>\n<ul><li>Para o feedback ser útil é preciso **aprender a filtrá-lo.**</li><li>É **fundamental** aprender a identificar o feedback bom, aceitá-lo e incorporá-lo rapidamente. É o que faz progredir.</li></ul>\n<ul><li>Em sistemas complexos, o feedback raramente é imediato.  </li></ul>\n<p>Esse atraso pode dificultar o estabelecimento da **causa e efeito.**</p>\n<ul><li>O maior problema para nossas decisões surge quando o feedback das nossas ações é atrasado ou indireto.</li></ul>\n<p>**Relação de atraso nos feedbacks:** Você decide comer um doce cheio de açúcar e gordura.</p>\n<ol><li>**Feedback Imediato (Curto Prazo):**</li></ol>\n<p>- *Você sente um prazer instantâneo. Seu corpo responde à gordura e ao açúcar com uma sensação de recompensa. Esse é um **ciclo reforçador** de prazer imediato.*</p>\n<ol><li>**Feedback Atrasado (Médio Prazo):**</li></ol>\n<p>- *Depois de um tempo, você se sente pesado ou recebe outras indicações do seu corpo de que a escolha teve consequências negativas.*</p>\n<ol><li>**Feedback Atrasado (Longo Prazo):**</li></ol>\n<p>- *Ao longo de períodos mais longos, as condições de saúde, como diabetes tipo 2 ou pressão alta, fornecem ainda mais feedback sobre o impacto real dos seus hábitos.*</p>\n<p>No caso, você fica preso a um comportamento ruim (mal-adaptativo) porque recebeu um feedback positivo de curto prazo (pico de dopamina).</p>\n<p>*OBS:* O feedback também pode causar problemas se for muito rápido e muito forte, pois o sistema pode entrar em surto ou \"oscilação\". O que queremos é um feedback de intensidade equilibrada.</p>\n<h3>Adam Smith e as interações sociais</h3>\n<p>O economista Adam Smith, pai da economia moderna e do capitalismo, em sua obra filosófica 'The Theory of Moral Sentiments', descreveu uma força invisível que nos guia: **a aprovação e a desaprovação dos outros, seja real ou imaginária (mecanismo de feedback).**</p>\n<ul><li>Ele diz que por natureza *nós somos egoístas.* Para a maioria das pessoas, perder o dedo mindinho seria mais estressante do que a notícia da morte de milhares de estranhos em outro país.</li><li>Smith diz que fomos dotados pela Natureza de um *desejo fundamental de agradar os outros* e uma *aversão básica a ofendê-los.*</li><li>As interações sociais então tornam-se um circuito de feedback constante.</li><li>Para Smith, o feedback das reações dos outros às nossas ações é a base da civilização. **Se fazemos algo bom, recebemos reação positiva (condiciona busca por prazer). Se fazemos algo egoísta, recebemos reação negativa (condiciona fuga da dor).**</li><li>Conectando com o contexto, o infanticídio praticado em Esparta por volta dos séculos VIII ao IV a.C, seria um exemplo de feedback loop reforçador, pois a prática era reforçada pela falta de desaprovação social, já que era considerado algo comum.</li></ul>\n<p>Feedback Loops balanceadores são mais comuns em sistemas por que são sustentáveis. Em muitas sociedades, um sistema jurídico serviu para impedir feedback loops reforçadores de desmoronarem a infraestrutura social, pois as leis criadas serviram como gatilhos de equilibrio. Não à toa o símbolo da justiça é a própria deusa Têmis figurada segurando uma balança.</p>\n<h3>As 4 lentes de análise</h3>\n<p>**Agora, como ajustar esses feedback loops em sistemas grandes, complexos e que nos beneficiem?** Bom, para isso podemos usar ==4 lentes de análise:==</p>\n<ol><li>Criação dos Incentivos Futuros Corretos</li><li>Influência do Comportamento nas Margens</li><li>Lidar com Cascatas de Informação</li><li>Construção de Confiança (Trust)</li></ol>\n<h4>==Primeira Lente:== Criação dos incentivos futuros corretos</h4>\n<ul><li>Olhar para o futuro ao tomar uma decisão hoje, focando em minimizar a chance de criar um feedback loop reforçador negativo lá na frente.</li><li>Quando agimos, estamos sempre enviando uma mensagem, e esta pode criar um incentivo para que o comportamento (bom ou ruim) se repita ou se amplifique.</li><li>Sempre considere os incentivos futuros que uma decisão irá gerar.</li></ul>\n<p>**Exemplo 1:** Imagine que uma criança quebrou um brinquedo. O _problema imediato_ é o brinquedo quebrado. Se você simplesmente compra um novo imediatamente, a criança pode entender: \"Quebrar coisas resulta em ganhar coisas novas\". Essa resposta cria um **incentivo futuro** que reforça o comportamento de quebrar, criando um feedback loop reforçador negativo.</p>\n<p>**Exemplo 2:** O ato de pagar resgate a sequestradores ilustra perfeitamente essa lente de análise. • **Problema Imediato (Curto Prazo):** Alguém foi sequestrado, e a demanda é por dinheiro para libertá-lo. Pagar o resgate salva uma vida e resolve o problema _agora_. • **Feedback Criado (Longo Prazo):** Sua resposta (pagar o resgate) comunica aos sequestradores que você cede às suas demandas. Isso cria um **incentivo** para eles sequestrarem novamente (ciclo reforçador) e sinaliza a outros aspirantes a sequestradores que o crime é lucrativo.</p>\n<p>---</p>\n<h4>==Segunda Lente:== Influenciando o comportamento nas margens</h4>\n<ul><li>Pense em uma sociedade. Mudar o comportamento de todo mundo (de uma vez) é quase impossível e caríssimo. Mudar o comportamento nas margens, no entanto, pode ser muito mais eficaz a levar a uma mudança duradoura no sistema inteiro.</li></ul>\n<blockquote>Pense em um grande rebanho de ovelhas e que seria mais fácil um lobo caçar as desgarradas que ficam mais apartadas do grupo central, ou seja, as que estão nas margens.</blockquote>\n<ul><li>**Não olhe apenas para o todo (pensamento binário)**</li></ul>\n<p>\"Pensando nas margens, o mais importante, significa olhar para os problemas não de forma inteira/total, como se fosse tudo ou nada, mas em incrementos/partes: vendo o comportamento como um monte de decisões sobre quando fazer um pouco menos em uma direção e fazer um pouco mais em outra direção.\"     - Ward Farnsworth</p>\n<p>*Exemplo:* fazer as pessoas pararem de beber refrigerante PENSAMENTO BINÁRIO: Ou elas consomem ou não consomem PENSAMENTO MARGINAL: Observa-se onde pode-se influenciar o comportamento em diferentes aspectos</p>\n<blockquote>• Como posso fazer com que as pessoas consumam _um pouco menos_?<br/>• Como posso incentivá-las a _trocar_ o refrigerante normal por um sem açúcar?</blockquote>\n<p>**As margens, são, muitas vezes, o lugar onde os feedbacks loops reforçadores negativos começam.**</p>\n<ul><li>Por exemplo, em um negócio, não é o cliente leal de 20 anos que provavelmente deixará a empresa após um aumento de preço; é a pessoa que comprou recentemente (o cliente na margem). Se esse cliente marginal sair e for para um concorrente, ele pode desencadear uma reação negativa que faz as vendas despencarem.</li><li>Para evitar isso, a empresa pode criar feedback loops balanceadores nas margens, como um programa de fidelidade para os clientes novos.</li></ul>\n<p>Quando um sistema, como uma cidade ou país, torna-se muito grande, **o número de margens a serem ajustadas aumenta.**</p>\n<p>Se você tenta forçar substituições, pode acabar criando outras substituições não desejadas, ou seja, **ao tentar criar um feedback loop balanceador em um lugar, pode-se iniciar um ciclo de feedback reforçador negativo em outro lugar.**</p>\n<p>*Exemplo:* Se for imposto que o consumo de bebidas açucarados seja mais difícil em locais públicos (para equilibrar o consumo), as pessoas podem ser forçadas a consumir mais em espaços privados, como em casa.</p>\n<ul><li>Aumento de consumo em casa</li><li>Normalização de tal comportamento para as crianças ao ver o exemplo dos pais</li></ul>\n<p>\"O conceito de feedback inicia a ideia de que um sistema pode causar seu próprio comportamento\"     *Donella H. Meadows*</p>\n<p>---</p>\n<h4>==Terceira Lente:== Lidando com cascatas de informações</h4>\n<p>Cascatas de Informação são **feedback loops reforçadores**, seja *positivo* ou *negativo*.</p>\n<p>**Exemplo 1:** Imagine que você está andando na rua e vê uma fila enorme na porta de uma sorveteria que você nunca ouviu falar. Você pensa: \"Nossa, se tanta gente está nessa fila, deve ser o melhor sorvete do mundo!\". E você entra na fila também. É exatamente assim que funcionam as Cascatas de Informação.</p>\n<p>**Exemplo 2:** Um artista de rua atrai um pequeno grupo. O grupo fica maior à medida que pessoas com baixos limites de curiosidade vêm ver o que está acontecendo. Então a multidão realmente cresce, pois pessoas com limites normais veem uma massa de espectadores convergindo para a calçada e não resistem a investigar do que se trata todo esse alvoroço.</p>\n<p>**Exemplo 3:** O próprio uso da inteligência artificial deriva de uma tendência reforçada por mais e mais pessoas.</p>\n<blockquote>Elas são um fenômeno em sistemas sociais onde a decisão de uma pessoa de adotar algo (entrar na fila, comprar um produto, seguir uma tendência, ou até cometer um ato ilícito) é **amplificada** quando outras pessoas a veem fazendo o mesmo.</blockquote>\n<p>Em uma Cascata de Informação, a informação se propaga e se amplifica, **como uma bola de neve:**</p>\n<ol><li>**Ação inicial:** Uma pessoa adota um comportamento (Ex.: Entra na fila do restaurante).</li><li>**Feedback:** Outras pessoas veem essa ação (a fila).</li><li>**Reforço:** A visão da fila atrai pessoas que estavam indecisas sobre o restaurante.</li><li>**Amplificação:** A fila fica maior, criando uma impressão ainda mais forte sobre o próximo grupo de pessoas que passa, atiçando o interesse de um novo nível de limiar (ou seja, mais gente é convencida a entrar).</li></ol>\n<p>Cresce através de: *Popularidade aparente*&gt;*Lógica*</p>\n<p>O professor Farnsworth diz que o **\"solo\"** mais fértil para uma Cascata de Informação crescer é onde tem a**ignorância e a incerteza**, pois o ser humano busca o máximo de absolutez possível para fazer algo. Quando isso não é possível, a ação dos outros se torna a **sua informação**, e você confia nela, permitindo que a cascata se espalhe.</p>\n<p>---</p>\n<h4>==Quarta Lente:== Construindo Confiança</h4>\n<p>Imagine que vivemos em uma cidade muito, muito grande, cheia de pessoas fazendo muitas coisas diferentes. Para que essa \"cidade\" funcione sem cair no caos total, precisamos ter certeza de que a maioria das pessoas fará o que é esperado. Essa certeza é o que chamamos de **confiança**.</p>\n<blockquote>As sociedades complexas exigem uma boa dose de confiança entre seus membros para funcionar</blockquote>\n<p>**Exemplo 1:** Pense, por exemplo, em algo tão comum quanto dirigir um carro. Você confia que os outros motoristas vão parar nos sinais vermelhos e ficarão em suas faixas. Você fica atento a um erro ocasional, claro, mas a base é a crença de que todos seguirão as mesmas regras.</p>\n<p>Essa confiança constrói-se a partir de feedback loops.</p>\n<p>Para explicar melhor a relação dos feedback loops na confiança, há um exemplo clássico da Teoria dos Jogos chamado *Dilema do Prisioneiro*. &gt;A Teoria dos Jogos é uma forma matemática de modelar como as decisões individuais afetam os resultados coletivos, focando nas interações e nos benefícios (ou perdas) resultantes</p>\n<p>!<a href=\"static/images/game.png\" target=\"_blank\" rel=\"noopener noreferrer\">alt text</a></p>\n<p>Dois criminosos são capturados e colocados em celas separadas. Eles não conseguem conversar entre si e são acusados de um crime que cometeram juntos. A polícia não tem provas suficientes para condenar ambos a uma pena máxima, mas está determinada a garantir que os dois passem algum tempo na prisão.</p>\n<p>A polícia oferece a cada prisioneiro (A e B) um acordo, com as seguintes condições:</p>\n<ol><li>**Se ambos os prisioneiros se acusarem mutuamente** (ou seja, se ambos disserem que o outro cometeu o crime), cada um pegará **dois anos** de prisão.</li><li>**Se o prisioneiro A acusar o prisioneiro B**, mas o **prisioneiro B ficar em silêncio**, o prisioneiro B pegará **cinco anos** de prisão, e o prisioneiro A pegará **zero** anos (e vice-versa).</li><li>**Se ambos os prisioneiros ficarem em silêncio**, cada um pegará apenas **um ano** de prisão.</li></ol>\n<p>**As Opções e o Raciocínio (A Falta de Confiança)** Na Teoria dos Jogos, a decisão de **ficar em silêncio** (o comportamento altruísta) é chamada de **\"cooperar\"**, enquanto a decisão de **acusar o outro** é chamada de **\"desertar\"**.</p>\n<p>**O que eles deveriam fazer?** Se eles pudessem conversar e confiassem um no outro (o que raramente acontece nesse tipo de cenário, pois as pessoas tendem a agir por interesse próprio), a escolha mais racional para o grupo seria **permanecer em silêncio**. Assim, cada um pegaria apenas um ano, que é a menor pena total.</p>\n<p>No entanto, o problema é a **confiança**. *• Cada prisioneiro pensa: \"Como posso saber que o outro não vai me acusar para sair livre (pegar zero anos)?\".* *• O risco de ser o único a ficar em silêncio é muito alto (pegar cinco anos).*</p>\n<p>Assim, o **resultado de equilíbrio** (o que geralmente acontece quando o jogo é jogado uma única vez) é que **ambos se acusam** (desertam) e cada um cumpre dois anos de prisão.</p>\n<p>A estratégia clássica mais eficaz nesse cenário repetido é chamada de **\"Tit-for-Tat\"** (Olho por Olho, mas com uma nuance de começar positivo):</p>\n<ol><li>O jogador começa **cooperando** (ficando em silêncio).</li><li>Nas rodadas subsequentes, o jogador **faz o que o outro jogador fez na rodada anterior** (reciprocidade).</li></ol>\n<p>Ao cooperar primeiro, você cria um feedback loop que sinaliza sua capacidade e vontade de confiar. O sucesso dessa estratégia demonstra como as interações repetidas entre agentes egoístas podem levar ao **comportamento cooperativo**. &gt;A tática Tit-for-Tat (TfT) não é puramente um feedback loop reforçador positivo, mas sim um **Feedback Loop de Reciprocidade** que, quando funciona bem, **reforça a cooperação** e atua para **manter o equilíbrio** da confiança.</p>\n<p>O exemplo do Dilema do Prisioneiro ilustra que a confiança é construída através de mecanismos de feedback – o que aconteceu antes influencia o que acontecerá depois – e isso é fundamental para a funcionalidade de sociedades complexas</p>\n<p>---</p>\n<h3>Como Kandinsky usou os feedback loops em sua obra:</h3>\n<p>O modelo das iterações é simples de entender: **nós aprendemos com os nossos esforços**.</p>\n<p>Imagine que você está tentando desenhar um círculo perfeito. Na primeira vez, ele sai todo torto. O ato de olhar para o círculo torto e compará-lo com o que você queria é o **feedback**. Se você usa essa informação para tentar desenhar de novo, corrigindo a mão, você está ***iterando***.</p>\n<p>\"Iterar\" significa repetir um processo, ajustando-o levemente a cada vez:</p>\n<blockquote>*\"Shorter feedback loops means more iterations, and it’s the number of iterations, not the number of hours, that drives learning.\"*<br/>- Naval Ravikant <br/>  <br/>  *Ação -&gt; Resposta (Feedback) -&gt; Filtro -&gt; Resultado*</blockquote>\n<p>O famoso artista Wassily Kandinsky nos dá um exemplo perfeito disso: Kandinsky criou uma de suas obras mais famosas, a pintura chamada _Painting with White Border_.   !<a href=\"static/images/pintura.png\" target=\"_blank\" rel=\"noopener noreferrer\">alt text</a></p>\n<ol><li>**Não foi um** **flash** **de inspiração:** Essa obra não foi resultado de um momento único de gênio. Foi um processo que durou meses.</li></ol>\n<ol><li>**O Feedback Guiou a Mão:** Kandinsky usou o feedback que recebia de **pequenas mudanças** em seus esboços para se aproximar de sua visão final.</li></ol>\n<ol><li>**A Jornada das Vinte Tentativas:** Ele começou com um primeiro rascunho. Com base no que viu, ele continuou a iterar, fazendo **vinte esboços** no total.</li></ol>\n<ol><li>**Ajustes Minúsculos, Grande Impacto:** Cada esboço subsequente era apenas uma ou duas etapas diferente do anterior, mas esse processo sutil levou cinco meses.</li></ol>\n<p>Kandinsky estava, na verdade, tentando resolver problemas específicos em sua pintura (podemos chamar isso de objetivos artísticos). Cada iteração lhe dava um feedback se ele estava mais perto ou mais longe de resolver esses problemas. Eventualmente, ele teve informação suficiente para produzir o quadro que queria, que foi sua 21ª pintura.</p>\n<p>*A iteração é, na verdade, um feedback loop aplicado continuamente para aprimoramento.*</p>"
    }
];
}),
"[project]/components/modelos-mentais-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelosMentaisList",
    ()=>ModelosMentaisList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$modelos$2d$mentais$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/modelos-mentais.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resize-handle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
// Helper function to parse date string and return comparable timestamp
function parseDate(dateString) {
    // Try to parse different date formats
    if (dateString.includes("-")) {
        const [month, day, year] = dateString.split("-").map(Number);
        return new Date(year, month - 1, day).getTime();
    }
    // For formats like "September 2025" or "Outubro 2025"
    const months = {
        "janeiro": 0,
        "fevereiro": 1,
        "março": 2,
        "abril": 3,
        "maio": 4,
        "junho": 5,
        "julho": 6,
        "agosto": 7,
        "setembro": 8,
        "outubro": 9,
        "novembro": 10,
        "dezembro": 11,
        "january": 0,
        "february": 1,
        "march": 2,
        "april": 3,
        "may": 4,
        "june": 5,
        "july": 6,
        "august": 7,
        "september": 8,
        "october": 9,
        "november": 10,
        "december": 11
    };
    const parts = dateString.toLowerCase().split(" ");
    if (parts.length >= 2) {
        const month = months[parts[0]];
        const year = parseInt(parts[1]);
        if (month !== undefined && !isNaN(year)) {
            return new Date(year, month, 1).getTime();
        }
    }
    // Fallback: return 0 for unparseable dates
    return 0;
}
// Sort modelos mentais in reverse chronological order (newest first)
function sortModelosMentaisByDate() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$modelos$2d$mentais$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modelosMentais"]
    ].sort((a, b)=>parseDate(b.date) - parseDate(a.date));
}
function ModelosMentaisList({ selectedModeloMental, onSelectModeloMental, width, isDragging, onMouseDown }) {
    const sortedModelosMentais = sortModelosMentaisByDate();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: `${width}px`
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-y-auto shrink-0 border-r border-border", selectedModeloMental && "max-md:hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-serif mb-8",
                                children: "Modelos Mentais"
                            }, void 0, false, {
                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-8",
                                children: "Frameworks e estruturas de pensamento para entender o mundo."
                            }, void 0, false, {
                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0",
                                children: sortedModelosMentais.map((modeloMental, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSelectModeloMental(modeloMental.slug),
                                                className: "w-full text-left space-y-1.5 py-3 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-base font-medium text-foreground",
                                                                children: modeloMental.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                                                children: "↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/modelos-mentais-list.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground font-mono uppercase tracking-widest",
                                                        children: modeloMental.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modelos-mentais-list.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            index < sortedModelosMentais.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-border my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, modeloMental.slug, true, {
                                        fileName: "[project]/components/modelos-mentais-list.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/modelos-mentais-list.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modelos-mentais-list.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/components/modelos-mentais-list.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modelos-mentais-list.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            selectedModeloMental && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandle"], {
                onMouseDown: onMouseDown,
                isDragging: isDragging
            }, void 0, false, {
                fileName: "[project]/components/modelos-mentais-list.tsx",
                lineNumber: 83,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modelos-mentais-list.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modelo-mental-reader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeloMentalReader",
    ()=>ModeloMentalReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$modelos$2d$mentais$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/modelos-mentais.tsx [app-ssr] (ecmascript)");
;
;
function ModeloMentalReader({ slug }) {
    const modeloMental = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$modelos$2d$mentais$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modelosMentais"].find((m)=>m.slug === slug);
    if (!modeloMental) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2",
                children: modeloMental.date
            }, void 0, false, {
                fileName: "[project]/components/modelo-mental-reader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif mb-8 text-foreground",
                children: modeloMental.title
            }, void 0, false, {
                fileName: "[project]/components/modelo-mental-reader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: modeloMental.content
                }
            }, void 0, false, {
                fileName: "[project]/components/modelo-mental-reader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/modelo-mental-reader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modelos-mentais-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModelosMentaisSection",
    ()=>ModelosMentaisSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modelos$2d$mentais$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modelos-mentais-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modelo$2d$mental$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modelo-mental-reader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/content-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-resizable.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ModelosMentaisSection({ sidebarWidth }) {
    const [selectedModeloMental, setSelectedModeloMental] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const modelosMentaisList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResizable"])({
        initialWidth: 600,
        minWidth: 200,
        maxWidth: 600,
        offsetX: sidebarWidth
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modelos$2d$mentais$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelosMentaisList"], {
                selectedModeloMental: selectedModeloMental,
                onSelectModeloMental: setSelectedModeloMental,
                width: modelosMentaisList.width,
                isDragging: modelosMentaisList.isDragging,
                onMouseDown: modelosMentaisList.handleMouseDown
            }, void 0, false, {
                fileName: "[project]/components/modelos-mentais-section.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            selectedModeloMental && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentPanel"], {
                onClose: ()=>setSelectedModeloMental(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modelo$2d$mental$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeloMentalReader"], {
                    slug: selectedModeloMental
                }, void 0, false, {
                    fileName: "[project]/components/modelos-mentais-section.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/modelos-mentais-section.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/content/poemas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "poemas",
    ()=>poemas
]);
const poemas = [
    {
        "slug": "memoria-vesuviana",
        "title": "Memória vesuviana",
        "date": "Novembro 2025",
        "excerpt": "",
        "content": "<p>Um breve momento, demudado no eterno de nossas almas. Tal como memória vesuviana, esculpida no tempo caldeado</p>\n<p>Sal que ergue-se vívido da tua fronte, eleva, aprofunda; Desfez-se da terra, fez morada no Ser, longe das penumbras.</p>\n<p>És mármore, nunca vencido, por um destino já percorrido.</p>"
    }
];
}),
"[project]/components/poemas-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoemasList",
    ()=>PoemasList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$poemas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/poemas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resize-handle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
// Helper function to parse date string and return comparable timestamp
function parseDate(dateString) {
    // Try to parse different date formats
    if (dateString.includes("-")) {
        const [month, day, year] = dateString.split("-").map(Number);
        return new Date(year, month - 1, day).getTime();
    }
    // For formats like "September 2025" or "November 2025"
    const months = {
        "janeiro": 0,
        "fevereiro": 1,
        "março": 2,
        "abril": 3,
        "maio": 4,
        "junho": 5,
        "julho": 6,
        "agosto": 7,
        "setembro": 8,
        "outubro": 9,
        "novembro": 10,
        "dezembro": 11,
        "january": 0,
        "february": 1,
        "march": 2,
        "april": 3,
        "may": 4,
        "june": 5,
        "july": 6,
        "august": 7,
        "september": 8,
        "october": 9,
        "november": 10,
        "december": 11
    };
    const parts = dateString.toLowerCase().split(" ");
    if (parts.length >= 2) {
        const month = months[parts[0]];
        const year = parseInt(parts[1]);
        if (month !== undefined && !isNaN(year)) {
            return new Date(year, month, 1).getTime();
        }
    }
    // Fallback: return 0 for unparseable dates
    return 0;
}
// Sort poemas in reverse chronological order (newest first)
function sortPoemasByDate() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$poemas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poemas"]
    ].sort((a, b)=>parseDate(b.date) - parseDate(a.date));
}
function PoemasList({ selectedPoema, onSelectPoema, width, isDragging, onMouseDown }) {
    const sortedPoemas = sortPoemasByDate();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: `${width}px`
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-y-auto shrink-0 border-r border-border", selectedPoema && "max-md:hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-serif mb-8",
                                children: "Poemas"
                            }, void 0, false, {
                                fileName: "[project]/components/poemas-list.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-8",
                                children: "Versos e reflexões poéticas."
                            }, void 0, false, {
                                fileName: "[project]/components/poemas-list.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0",
                                children: sortedPoemas.map((poema, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSelectPoema(poema.slug),
                                                className: "w-full text-left space-y-1.5 py-3 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-base font-medium text-foreground",
                                                                children: poema.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/poemas-list.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                                                children: "↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/poemas-list.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/poemas-list.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground font-mono uppercase tracking-widest",
                                                        children: poema.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/poemas-list.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/poemas-list.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            index < sortedPoemas.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-border my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/poemas-list.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, poema.slug, true, {
                                        fileName: "[project]/components/poemas-list.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/poemas-list.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/poemas-list.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/components/poemas-list.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/poemas-list.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            selectedPoema && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandle"], {
                onMouseDown: onMouseDown,
                isDragging: isDragging
            }, void 0, false, {
                fileName: "[project]/components/poemas-list.tsx",
                lineNumber: 83,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/poemas-list.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/poema-reader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoemaReader",
    ()=>PoemaReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$poemas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/poemas.tsx [app-ssr] (ecmascript)");
;
;
function PoemaReader({ slug }) {
    const poema = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$poemas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["poemas"].find((p)=>p.slug === slug);
    if (!poema) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2",
                children: poema.date
            }, void 0, false, {
                fileName: "[project]/components/poema-reader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif mb-8 text-foreground",
                children: poema.title
            }, void 0, false, {
                fileName: "[project]/components/poema-reader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: poema.content
                }
            }, void 0, false, {
                fileName: "[project]/components/poema-reader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/poema-reader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/poemas-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoemasSection",
    ()=>PoemasSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$poemas$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/poemas-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$poema$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/poema-reader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/content-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-resizable.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function PoemasSection({ sidebarWidth }) {
    const [selectedPoema, setSelectedPoema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const poemasList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResizable"])({
        initialWidth: 600,
        minWidth: 200,
        maxWidth: 600,
        offsetX: sidebarWidth
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$poemas$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoemasList"], {
                selectedPoema: selectedPoema,
                onSelectPoema: setSelectedPoema,
                width: poemasList.width,
                isDragging: poemasList.isDragging,
                onMouseDown: poemasList.handleMouseDown
            }, void 0, false, {
                fileName: "[project]/components/poemas-section.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            selectedPoema && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentPanel"], {
                onClose: ()=>setSelectedPoema(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$poema$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoemaReader"], {
                    slug: selectedPoema
                }, void 0, false, {
                    fileName: "[project]/components/poemas-section.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/poemas-section.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/content/projetos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projetos",
    ()=>projetos
]);
const projetos = [
    {
        "slug": "visu-editor",
        "title": "Visu Editor",
        "date": "Dezembro 2025",
        "excerpt": "",
        "content": "<p>Por ser técnico em Redes de Computadores, durante a época da escola, passei pela matéria de Lógica de Programação, que tornou-se muito útil para mim mais tarde. A criação de algoritmos é uma mão na roda para a resolução de problemas práticos e também para o aprendizado de qualquer assunto.</p>\n<p>Lembro que nas aulas usávamos um programa chamado VisualG, criado pelo prof. Carlos Nicolodi, inventor da linguagem Portugol que era usada no programa. Hoje em dia, ao dar aulas particulares, percebi no entanto que não poderia usá-lo. Havia um problema nele que incomodava-me: a interface datada. Ela carecia de uma modernização, considerando as leis envolvidas no processo de aprendizagem e as tendências psicológicas das gerações mais jovens.</p>\n<p>Assim nasceu o Visu, um web app feito para criar algoritmos em Portugol.</p>\n<p>Tomei como base de inspiração o bom e velho VisualG e adicionei alguns upgrades:</p>\n<ul><li>Construído em cima do Princípio de Pareto, buscando apenas 20% das funções necessárias para construir 80% dos algoritmos possíveis.</li><li>Por ser um web app, não precisa instalar, e tem alta responsividade para tablet e celular, pensando nas pessoas que não tem um computador à disposição</li><li>Sistema de abas para gerenciar múltiplos algoritmos</li><li>Integração de exemplos básicos de algoritmos</li><li>Integração de um manual de ajuda, que informa a estrutura básica, os tipos de variáveis, comandos de entrada, operadores, etc</li><li>Editor com syntax highlighting para imersão no algoritmo</li><li>Console de saída acoplado</li><li>Modo foco</li><li>Configurações de acessibilidade com personalização de temas (light/dark) e tamanho de fonte</li></ul>\n<p>Qualquer pessoa pode acessar o Visu por meio deste  <a href=\"https://visueditor.vercel.app\" target=\"_blank\" rel=\"noopener noreferrer\">link.</a></p>\n<p>**OBS**: Já tenho novas melhorias para o Visu, principalmente na versão mobile. Um exemplo de melhoria futura é a adição de um função code-to-flowchart, onde o Visu geraria um fluxograma baseado no algoritmo criado, para o aluno ter a representação visual do que ele está fazendo.</p>"
    }
];
}),
"[project]/components/projetos-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjetosList",
    ()=>ProjetosList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projetos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projetos.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resize-handle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
// Helper function to parse date string and return comparable timestamp
function parseDate(dateString) {
    // Try to parse different date formats
    if (dateString.includes("-")) {
        const [month, day, year] = dateString.split("-").map(Number);
        return new Date(year, month - 1, day).getTime();
    }
    // For formats like "September 2025" or "December 2025"
    const months = {
        "janeiro": 0,
        "fevereiro": 1,
        "março": 2,
        "abril": 3,
        "maio": 4,
        "junho": 5,
        "julho": 6,
        "agosto": 7,
        "setembro": 8,
        "outubro": 9,
        "novembro": 10,
        "dezembro": 11,
        "january": 0,
        "february": 1,
        "march": 2,
        "april": 3,
        "may": 4,
        "june": 5,
        "july": 6,
        "august": 7,
        "september": 8,
        "october": 9,
        "november": 10,
        "december": 11
    };
    const parts = dateString.toLowerCase().split(" ");
    if (parts.length >= 2) {
        const month = months[parts[0]];
        const year = parseInt(parts[1]);
        if (month !== undefined && !isNaN(year)) {
            return new Date(year, month, 1).getTime();
        }
    }
    // Fallback: return 0 for unparseable dates
    return 0;
}
// Sort projetos in reverse chronological order (newest first)
function sortProjetosByDate() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projetos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projetos"]
    ].sort((a, b)=>parseDate(b.date) - parseDate(a.date));
}
function ProjetosList({ selectedProjeto, onSelectProjeto, width, isDragging, onMouseDown }) {
    const sortedProjetos = sortProjetosByDate();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: `${width}px`
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-y-auto shrink-0 border-r border-border", selectedProjeto && "max-md:hidden"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-serif mb-8",
                                children: "Projetos"
                            }, void 0, false, {
                                fileName: "[project]/components/projetos-list.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-8",
                                children: "Trabalhos e experimentos desenvolvidos."
                            }, void 0, false, {
                                fileName: "[project]/components/projetos-list.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0",
                                children: sortedProjetos.map((projeto, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSelectProjeto(projeto.slug),
                                                className: "w-full text-left space-y-1.5 py-3 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-base font-medium text-foreground",
                                                                children: projeto.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/projetos-list.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                                                children: "↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/projetos-list.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/projetos-list.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground font-mono uppercase tracking-widest",
                                                        children: projeto.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projetos-list.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/projetos-list.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            index < sortedProjetos.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-border my-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projetos-list.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, projeto.slug, true, {
                                        fileName: "[project]/components/projetos-list.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/projetos-list.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projetos-list.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/components/projetos-list.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projetos-list.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            selectedProjeto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resize$2d$handle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandle"], {
                onMouseDown: onMouseDown,
                isDragging: isDragging
            }, void 0, false, {
                fileName: "[project]/components/projetos-list.tsx",
                lineNumber: 83,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projetos-list.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/projeto-reader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjetoReader",
    ()=>ProjetoReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projetos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projetos.tsx [app-ssr] (ecmascript)");
;
;
function ProjetoReader({ slug }) {
    const projeto = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projetos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projetos"].find((p)=>p.slug === slug);
    if (!projeto) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2",
                children: projeto.date
            }, void 0, false, {
                fileName: "[project]/components/projeto-reader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-serif mb-8 text-foreground",
                children: projeto.title
            }, void 0, false, {
                fileName: "[project]/components/projeto-reader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: projeto.content
                }
            }, void 0, false, {
                fileName: "[project]/components/projeto-reader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projeto-reader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/projetos-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjetosSection",
    ()=>ProjetosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projetos$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/projetos-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projeto$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/projeto-reader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/content-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-resizable.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ProjetosSection({ sidebarWidth }) {
    const [selectedProjeto, setSelectedProjeto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const projetosList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResizable"])({
        initialWidth: 600,
        minWidth: 200,
        maxWidth: 600,
        offsetX: sidebarWidth
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projetos$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjetosList"], {
                selectedProjeto: selectedProjeto,
                onSelectProjeto: setSelectedProjeto,
                width: projetosList.width,
                isDragging: projetosList.isDragging,
                onMouseDown: projetosList.handleMouseDown
            }, void 0, false, {
                fileName: "[project]/components/projetos-section.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            selectedProjeto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentPanel"], {
                onClose: ()=>setSelectedProjeto(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projeto$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjetoReader"], {
                    slug: selectedProjeto
                }, void 0, false, {
                    fileName: "[project]/components/projetos-section.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/projetos-section.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonalWebsite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-resizable.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/about-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notes$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/notes-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$note$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/note-reader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/content-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modelos$2d$mentais$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modelos-mentais-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$poemas$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/poemas-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projetos$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/projetos-section.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function PersonalWebsite() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("inicio");
    const [selectedNote, setSelectedNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResizable"])({
        initialWidth: 192,
        minWidth: 150,
        maxWidth: 400
    });
    const notesList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$resizable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResizable"])({
        initialWidth: 600,
        minWidth: 200,
        maxWidth: 600,
        offsetX: sidebar.width
    });
    const handleTabChange = (tab)=>{
        setActiveTab(tab);
        setMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                className: "fixed top-6 left-6 z-50 md:hidden bg-background border border-border rounded-lg p-2.5 hover:bg-muted shadow-sm",
                "aria-label": "Toggle menu",
                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 27
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                activeTab: activeTab,
                onTabChange: handleTabChange,
                width: sidebar.width,
                isDragging: sidebar.isDragging,
                onMouseDown: sidebar.handleMouseDown,
                mobileMenuOpen: mobileMenuOpen
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            activeTab === "notas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notes$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotesList"], {
                        selectedNote: selectedNote,
                        onSelectNote: setSelectedNote,
                        width: notesList.width,
                        isDragging: notesList.isDragging,
                        onMouseDown: notesList.handleMouseDown
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    selectedNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContentPanel"], {
                        onClose: ()=>setSelectedNote(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$note$2d$reader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteReader"], {
                            slug: selectedNote
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : activeTab === "modelos-mentais" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modelos$2d$mentais$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelosMentaisSection"], {
                sidebarWidth: sidebar.width
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : activeTab === "projetos" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projetos$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjetosSection"], {
                sidebarWidth: sidebar.width
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this) : activeTab === "poemas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$poemas$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoemasSection"], {
                sidebarWidth: sidebar.width
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 px-8 md:px-16 max-w-3xl overflow-y-auto pt-28 md:pt-16 flex flex-col justify-between min-h-screen pb-0",
                children: activeTab === "inicio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 38
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-30 md:hidden",
                onClick: ()=>setMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_5f5223d9._.js.map