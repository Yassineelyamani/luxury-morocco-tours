module.exports = {

"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/call-to-action.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CallToAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function CallToAction() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-[#9b847b] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-sans text-2xl font-medium mb-4",
                    children: "Ready to Discover Morocco?"
                }, void 0, false, {
                    fileName: "[project]/components/call-to-action.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mb-8 opacity-90 max-w-2xl mx-auto",
                    children: "Let us craft your perfect Moroccan journey. Every detail curated, every moment extraordinary."
                }, void 0, false, {
                    fileName: "[project]/components/call-to-action.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-[#2a4c61] text-white hover:bg-white hover:text-[#2a4c61] text-sm px-6 py-2 transition-colors",
                        onClick: ()=>window.location.href = "/contact",
                        children: "Get a quote"
                    }, void 0, false, {
                        fileName: "[project]/components/call-to-action.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/call-to-action.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/call-to-action.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/call-to-action.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/lib/image-urls.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Image URL management utility
 * Handles switching between local public assets and Google Cloud Storage URLs
 */ __turbopack_context__.s({
    "STATIC_IMAGES": (()=>STATIC_IMAGES),
    "getStaticImage": (()=>getStaticImage),
    "getStaticImageUrl": (()=>getStaticImageUrl)
});
const isProduction = ("TURBOPACK compile-time value", "development") === 'production';
const GCS_BASE_URL = process.env.NEXT_PUBLIC_GCS_BASE_URL || 'https://storage.googleapis.com/midnight-escales-images';
function getStaticImageUrl(path) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return `/${cleanPath}`;
}
const STATIC_IMAGES = {
    // Main images
    main: {
        hero: '/main/main-hero.png',
        heroHorizontal: '/main/hero-horizontal.png',
        heroVerticalCamels: '/main/hero-vertical-camels.png',
        heroVerticalPalmTree: '/main/hero-vertical-palm-tree.png'
    },
    // Experience images
    experiences: {
        artDesign: '/experiences/art-medina/art-design.png',
        coastalEscape: '/experiences/coastal-escape/coastal-escape.png',
        moroccoHammam: '/experiences/nature-wellness/morocco-hammam.png',
        nomadicAccommodations: '/experiences/nomadic/nomadic-accomodations-morocco.png',
        dunesAtSunset: '/experiences/nomadic/dunes-at-sunset-morocco.png',
        foodAndTea: '/experiences/sacred-morocco/food-and-tea-morocco-experience.png'
    }
};
function getStaticImage(key) {
    const imagePath = STATIC_IMAGES.main[key] || STATIC_IMAGES.experiences[key];
    if (!imagePath) {
        throw new Error(`Static image key "${key}" not found`);
    }
    return getStaticImageUrl(imagePath);
}
}}),
"[project]/lib/tours-data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FINDYOURMOROCCO_TOURS": (()=>FINDYOURMOROCCO_TOURS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/image-urls.ts [app-ssr] (ecmascript)");
;
const FINDYOURMOROCCO_TOURS = [
    {
        id: "6-days-tangier-sahara-marrakech",
        order: 1,
        title: "6 Days Sahara Desert Tour",
        subtitle: "Tangier to Marrakech - 2 Nights in the Desert",
        duration: "6 Days",
        difficulty: "Moderate",
        difficultyStars: 3,
        tags: [
            "Sahara",
            "Desert",
            "Cultural",
            "Adventure"
        ],
        cities: [
            "Tangier",
            "Chefchaouen",
            "Fes",
            "Merzouga",
            "Marrakech"
        ],
        description: "Experience Morocco's iconic north-to-south journey with an extended stay in the magical Sahara Desert. Begin in Tangier, cross the forested Rif Mountains, explore the blue-painted town of Chefchaouen, dive into history at Volubilis and Meknes, and explore the spiritual heart of Morocco in Fes. Then turn south through the Middle Atlas Mountains and cedar forests to the edge of the Erg Chebbi dunes.",
        highlights: [
            "Chefchaouen's iconic blue streets",
            "Roman ruins at Volubilis",
            "Imperial city of Fes",
            "Two nights in luxury desert camp",
            "Camel trek in Erg Chebbi dunes",
            "Berber music and culture",
            "Todra Gorge exploration",
            "UNESCO Ait Ben Haddou village",
            "High Atlas Mountains crossing"
        ],
        thumbnail: {
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            alt: "Golden Sahara Desert dunes at sunset",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Tangier – Rif Mountains – Chefchaouen",
                description: "Arrive in Tangier, travel through Rif Mountains to the blue-painted town of Chefchaouen. Explore the medina and relax in this mountain paradise."
            },
            {
                day: 2,
                title: "Chefchaouen – Volubilis – Meknes – Fes",
                description: "Visit Roman archaeological site at Volubilis, explore imperial city of Meknes, arrive in Fes. Evening in the historic medina."
            },
            {
                day: 3,
                title: "Fes – Cedar Forests – Merzouga Desert",
                description: "Drive south through Middle Atlas Mountains and cedar forests. Arrive in Merzouga for sunset camel trek into Erg Chebbi dunes. Night in luxury desert camp."
            },
            {
                day: 4,
                title: "Sahara Exploration – Desert Camp",
                description: "Sunrise over dunes. Explore Khamlia village, visit nomadic Berber families, optional sandboarding. Second night in desert guesthouse."
            },
            {
                day: 5,
                title: "Merzouga – Todra Gorge – Skoura – Ait Ben Haddou",
                description: "Journey through desert plains, explore towering Todra Gorge, pass through palm groves of Skoura Oasis, arrive at UNESCO-listed Ait Ben Haddou."
            },
            {
                day: 6,
                title: "Ait Ben Haddou – High Atlas – Marrakech",
                description: "Guided tour of fortified village, cross High Atlas Mountains via Tizi n'Tichka Pass, arrive in vibrant Marrakech."
            }
        ]
    },
    {
        id: "5-days-tangier-sahara",
        order: 2,
        title: "5 Days Morocco Tour from Tangier",
        subtitle: "Chefchaouen, Fes & Sahara Desert",
        duration: "5 Days",
        difficulty: "Moderate",
        difficultyStars: 3,
        tags: [
            "Sahara",
            "Desert",
            "Cultural",
            "Mountains"
        ],
        cities: [
            "Tangier",
            "Chefchaouen",
            "Fes",
            "Merzouga",
            "Marrakech"
        ],
        description: "Begin your adventure in the north with this 5-day Morocco tour from Tangier, designed for travelers who want to experience the country's rich diversity from the cool blue tones of Chefchaouen to the golden dunes of the Sahara Desert.",
        highlights: [
            "Blue-painted Chefchaouen",
            "Ancient Roman ruins",
            "Medieval medina of Fes",
            "Barbary macaques in cedar forests",
            "Sahara Desert camel trek",
            "Luxury desert camp experience",
            "Todra Gorge",
            "Dades Valley",
            "Ait Ben Haddou fortress"
        ],
        thumbnail: {
            src: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=800&h=600&fit=crop",
            alt: "Blue streets of Chefchaouen",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Tangier – Chefchaouen",
                description: "Travel through Rif Mountains to Chefchaouen. Explore the blue medina and Plaza Uta el Hammam."
            },
            {
                day: 2,
                title: "Chefchaouen – Volubilis – Meknes – Fes",
                description: "Visit Roman site Volubilis, explore imperial city Meknes, arrive in Fes for evening in the medina."
            },
            {
                day: 3,
                title: "Fes – Ifrane – Merzouga",
                description: "Drive through Middle Atlas Mountains, see Barbary macaques, descend into Ziz Valley. Camel trek into Erg Chebbi at sunset. Night in luxury desert camp."
            },
            {
                day: 4,
                title: "Merzouga – Todra Gorge – Dades Gorge",
                description: "Sunrise over dunes. Journey through desert plains to Todra Gorge. Continue to Dades Gorge with its dramatic red cliffs."
            },
            {
                day: 5,
                title: "Dades – Ait Ben Haddou – Marrakech",
                description: "Travel along Road of a Thousand Kasbahs, visit Kasbah Amridil, explore Ait Ben Haddou, cross High Atlas to Marrakech."
            }
        ]
    },
    {
        id: "14-days-casablanca-imperial-sahara",
        order: 3,
        title: "14 Days Morocco Tour from Casablanca",
        subtitle: "Imperial Cities, Sahara Desert, Mountains & Coast",
        duration: "14 Days",
        difficulty: "Moderate",
        difficultyStars: 2,
        tags: [
            "Imperial Cities",
            "Sahara",
            "Coastal",
            "Cultural",
            "Adventure"
        ],
        cities: [
            "Casablanca",
            "Rabat",
            "Tangier",
            "Chefchaouen",
            "Fes",
            "Merzouga",
            "Marrakech",
            "Essaouira"
        ],
        description: "This comprehensive 14-day tour starts in Casablanca, wandering through the history-lined streets of Rabat, the lively port of Tangier, and the picture-perfect blue alleys of Chefchaouen. Journey south through Volubilis, Meknes, and the cultural depths of Fes before crossing the Middle Atlas to reach the Sahara for a camel trek and a night in a desert camp.",
        highlights: [
            "Hassan II Mosque in Casablanca",
            "Rabat's Kasbah of the Udayas",
            "Cap Spartel and Hercules Cave",
            "Asilah's coastal charm",
            "Chefchaouen's blue medina",
            "Volubilis Roman ruins",
            "Fes el-Bali UNESCO medina",
            "Chouara Tannery",
            "Sahara Desert camp experience",
            "Nomadic Berber villages",
            "Khamlia Gnawa music",
            "Todra and Dades Gorges",
            "Ait Ben Haddou fortress",
            "Marrakech's Jemaa el-Fnaa",
            "Essaouira beach town"
        ],
        thumbnail: {
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            alt: "Aerial view of Marrakech medina",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Arrival in Casablanca",
                description: "Welcome to Morocco. Visit Hassan II Mosque and explore the Corniche."
            },
            {
                day: 2,
                title: "Casablanca – Rabat – Tangier",
                description: "Travel to Rabat, visit Hassan Tower and Kasbah of the Udayas. Continue to Tangier for evening exploration."
            },
            {
                day: 3,
                title: "Tangier – Cap Spartel – Asilah – Chefchaouen",
                description: "Visit Cap Spartel and Hercules Cave, explore Asilah's medina, arrive in Chefchaouen for evening."
            },
            {
                day: 4,
                title: "Full Day in Chefchaouen",
                description: "Explore the blue medina, visit Kasbah Museum, optional hike to Akchour Waterfalls, sunset from Spanish Mosque."
            },
            {
                day: 5,
                title: "Chefchaouen – Volubilis – Meknes – Fes",
                description: "Visit Roman ruins at Volubilis, explore imperial city Meknes, arrive in Fes."
            },
            {
                day: 6,
                title: "Full Day Guided Tour of Fes",
                description: "Explore Fes el-Bali medina, visit Bou Inania Madrasa, see Chouara Tannery, visit Al-Qarawiyyin Mosque and University."
            },
            {
                day: 7,
                title: "Fes – Ifrane – Merzouga",
                description: "Drive through Middle Atlas Mountains, see Barbary macaques, arrive in Merzouga for sunset camel trek and desert camp."
            },
            {
                day: 8,
                title: "Full Day in Sahara Desert",
                description: "Sunrise over dunes, visit nomadic Berber families, explore Khamlia village with Gnawa music, sunset camel trek."
            },
            {
                day: 9,
                title: "Merzouga – Rissani – Todra Gorge – Dades Gorge",
                description: "Visit Rissani's traditional souk, explore Todra Gorge, continue to Dades Gorge."
            },
            {
                day: 10,
                title: "Dades Gorge – Kasbah Amridil – Ait Ben Haddou – Marrakech",
                description: "Travel along Road of a Thousand Kasbahs, visit Kasbah Amridil, explore Ait Ben Haddou, cross High Atlas to Marrakech."
            },
            {
                day: 11,
                title: "Full Day Guided Tour of Marrakech",
                description: "Explore Jemaa el-Fnaa square, visit Koutoubia Mosque, Bahia Palace, Saadian Tombs, and traditional souks."
            },
            {
                day: 12,
                title: "Marrakech – Atlas Mountains – Essaouira",
                description: "Drive through Atlas Mountains, visit Argan oil cooperative, arrive in coastal town Essaouira."
            },
            {
                day: 13,
                title: "Full Day in Essaouira",
                description: "Explore medina, visit fish market, relax on Atlantic beaches, optional water activities."
            },
            {
                day: 14,
                title: "Essaouira – Marrakech – Departure",
                description: "Return to Marrakech or depart from Essaouira."
            }
        ]
    },
    {
        id: "5-days-casablanca-fes-sahara",
        order: 4,
        title: "5 Days Morocco Tour from Casablanca",
        subtitle: "Fes, Sahara Desert & Marrakech",
        duration: "5 Days",
        difficulty: "Moderate",
        difficultyStars: 3,
        tags: [
            "Sahara",
            "Desert",
            "Imperial Cities",
            "Cultural"
        ],
        cities: [
            "Casablanca",
            "Fes",
            "Merzouga",
            "Marrakech"
        ],
        description: "This 5-day tour brings together Morocco's most iconic landscapes and cultural highlights in one unforgettable journey. From the lively streets of Casablanca to the historic medina of Fes, the first days introduce you to Morocco's rich heritage. The adventure then heads south across the Middle Atlas Mountains toward the golden dunes of the Sahara Desert.",
        highlights: [
            "Hassan II Mosque",
            "Fes medina exploration",
            "Middle Atlas Mountains",
            "Cedar forests and Barbary macaques",
            "Ziz Valley palm groves",
            "Sahara Desert camel trek",
            "Luxury desert camp",
            "Todra Gorge",
            "Dades Valley",
            "Ait Ben Haddou",
            "High Atlas Mountains",
            "Marrakech's vibrant atmosphere"
        ],
        thumbnail: {
            src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
            alt: "Camel trekking in Sahara Desert",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Arrival in Casablanca",
                description: "Welcome in Casablanca. Visit Hassan II Mosque and explore the Corniche before heading to Fes."
            },
            {
                day: 2,
                title: "Casablanca – Fes",
                description: "Travel through fertile plains to Fes, Morocco's spiritual capital. Check into traditional riad and explore the medina."
            },
            {
                day: 3,
                title: "Fes – Ifrane – Merzouga",
                description: "Drive south through Middle Atlas Mountains, see Barbary macaques in cedar forests, descend through Ziz Valley. Camel trek into Erg Chebbi at sunset. Night in luxury desert camp."
            },
            {
                day: 4,
                title: "Merzouga – Todra Gorge – Dades Gorge",
                description: "Sunrise over dunes. Journey west through desert landscapes to Todra Gorge. Continue to Dades Gorge with dramatic scenery."
            },
            {
                day: 5,
                title: "Dades – Ait Ben Haddou – Marrakech",
                description: "Travel along Road of a Thousand Kasbahs, visit Kasbah Amridil, explore Ait Ben Haddou, cross High Atlas to Marrakech."
            }
        ]
    },
    {
        id: "7-days-casablanca-rabat-fes-desert",
        order: 5,
        title: "7 Days in Morocco from Casablanca",
        subtitle: "Rabat, Fes, Desert & Marrakech",
        duration: "7 Days",
        difficulty: "Moderate",
        difficultyStars: 2,
        tags: [
            "Imperial Cities",
            "Sahara",
            "Desert",
            "Cultural"
        ],
        cities: [
            "Casablanca",
            "Rabat",
            "Fes",
            "Merzouga",
            "Marrakech"
        ],
        description: "7-day Morocco tour from Casablanca featuring Rabat, Chefchaouen, Fes, a Sahara Desert camel trek in Merzouga, Todra Gorge, and more.",
        highlights: [
            "Rabat's imperial architecture",
            "Chefchaouen's blue streets",
            "Fes medina",
            "Middle Atlas Mountains",
            "Sahara Desert experience",
            "Camel trekking",
            "Todra Gorge",
            "Dades Valley",
            "Marrakech exploration"
        ],
        thumbnail: {
            src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
            alt: "Majestic Atlas Mountains landscape",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Casablanca – Rabat",
                description: "Explore Casablanca, travel to Rabat, visit Hassan Tower and Kasbah."
            },
            {
                day: 2,
                title: "Rabat – Chefchaouen",
                description: "Travel to Chefchaouen, explore the blue medina."
            },
            {
                day: 3,
                title: "Chefchaouen – Fes",
                description: "Journey to Fes, explore the historic medina."
            },
            {
                day: 4,
                title: "Fes – Merzouga",
                description: "Drive through Middle Atlas to Merzouga. Camel trek and desert camp night."
            },
            {
                day: 5,
                title: "Merzouga – Todra Gorge",
                description: "Explore desert, travel to Todra Gorge."
            },
            {
                day: 6,
                title: "Todra – Dades – Ait Ben Haddou",
                description: "Visit Dades Gorge, explore Ait Ben Haddou."
            },
            {
                day: 7,
                title: "Ait Ben Haddou – Marrakech",
                description: "Cross High Atlas Mountains, arrive in Marrakech."
            }
        ]
    },
    {
        id: "2-days-errachidia-fes-desert",
        order: 6,
        title: "2 Days Errachidia to Fes Desert Tour",
        subtitle: "Sahara & Middle Atlas Journey",
        duration: "2 Days",
        difficulty: "Easy",
        difficultyStars: 2,
        tags: [
            "Desert",
            "Mountains",
            "Short Break"
        ],
        cities: [
            "Errachidia",
            "Merzouga",
            "Fes"
        ],
        description: "2-day Fes to Merzouga Desert Tour through the Middle Atlas Mountains and Ziz Valley with a camel trek and overnight stay in the desert.",
        highlights: [
            "Middle Atlas Mountains",
            "Ziz Valley",
            "Sahara Desert",
            "Camel trek",
            "Desert camp experience"
        ],
        thumbnail: {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticImageUrl"])("/hero-sahara-sunset.png"),
            alt: "Desert landscape",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Errachidia – Merzouga",
                description: "Travel through Middle Atlas Mountains and Ziz Valley. Camel trek into Erg Chebbi at sunset. Night in desert camp."
            },
            {
                day: 2,
                title: "Merzouga – Fes",
                description: "Sunrise over dunes. Return journey to Fes."
            }
        ]
    },
    {
        id: "4-days-errachidia-marrakech-desert",
        order: 7,
        title: "4 Days Errachidia to Marrakech Desert Tour",
        subtitle: "Sahara, Kasbahs & Atlas Mountains",
        duration: "4 Days",
        difficulty: "Moderate",
        difficultyStars: 3,
        tags: [
            "Desert",
            "Kasbahs",
            "Mountains",
            "Cultural"
        ],
        cities: [
            "Errachidia",
            "Merzouga",
            "Marrakech"
        ],
        description: "4-day tour from Errachidia to Marrakech exploring the Sahara Desert, ancient kasbahs, and the High Atlas Mountains.",
        highlights: [
            "Sahara Desert",
            "Camel trekking",
            "Desert camp",
            "Ancient kasbahs",
            "Todra Gorge",
            "High Atlas Mountains"
        ],
        thumbnail: {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticImageUrl"])("/hero-atlas-mountains.png"),
            alt: "Mountain landscape",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Errachidia – Merzouga",
                description: "Travel to Merzouga. Camel trek into Erg Chebbi. Desert camp night."
            },
            {
                day: 2,
                title: "Merzouga – Todra Gorge",
                description: "Explore desert, travel to Todra Gorge."
            },
            {
                day: 3,
                title: "Todra – Dades – Ait Ben Haddou",
                description: "Visit Dades Gorge, explore Ait Ben Haddou."
            },
            {
                day: 4,
                title: "Ait Ben Haddou – Marrakech",
                description: "Cross High Atlas Mountains to Marrakech."
            }
        ]
    },
    {
        id: "3-days-errachidia-merzouga",
        order: 8,
        title: "3 Days Errachidia to Merzouga Desert Tour",
        subtitle: "Sahara & Erg Chebbi Experience",
        duration: "3 Days",
        difficulty: "Easy",
        difficultyStars: 2,
        tags: [
            "Desert",
            "Sahara",
            "Camel Trek"
        ],
        cities: [
            "Errachidia",
            "Merzouga"
        ],
        description: "3-day Errachidia to Merzouga Desert Tour exploring the Sahara and Erg Chebbi dunes with camel trekking and desert camp experience.",
        highlights: [
            "Sahara Desert",
            "Erg Chebbi dunes",
            "Camel trekking",
            "Desert camp",
            "Berber culture"
        ],
        thumbnail: {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticImageUrl"])("/hero-sahara-sunset.png"),
            alt: "Sahara dunes",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Errachidia – Merzouga",
                description: "Travel to Merzouga. Camel trek into Erg Chebbi at sunset. Night in luxury desert camp."
            },
            {
                day: 2,
                title: "Merzouga Exploration",
                description: "Sunrise over dunes. Explore desert landscapes and Berber culture."
            },
            {
                day: 3,
                title: "Merzouga – Return",
                description: "Final morning in the desert before departure."
            }
        ]
    },
    {
        id: "4-days-marrakech-fes-desert",
        order: 9,
        title: "4 Days Marrakech to Fes Desert Tour",
        subtitle: "2 Nights Sahara",
        duration: "4 Days",
        difficulty: "Moderate",
        difficultyStars: 3,
        tags: [
            "Desert",
            "Sahara",
            "Imperial Cities"
        ],
        cities: [
            "Marrakech",
            "Merzouga",
            "Fes"
        ],
        description: "Experience the Sahara in 4 days from Marrakech to Fes with 2 nights in the desert, camel trekking, and unforgettable landscapes.",
        highlights: [
            "Marrakech medina",
            "High Atlas Mountains",
            "Sahara Desert",
            "Camel trekking",
            "Desert camp experience",
            "Todra Gorge",
            "Fes medina"
        ],
        thumbnail: {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticImageUrl"])("/hero-camel-trek.png"),
            alt: "Desert adventure",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Marrakech – High Atlas – Merzouga",
                description: "Leave Marrakech, cross High Atlas Mountains, arrive in Merzouga. Camel trek into Erg Chebbi at sunset. Desert camp night."
            },
            {
                day: 2,
                title: "Sahara Exploration",
                description: "Sunrise over dunes. Explore desert landscapes and Berber villages. Second night in desert."
            },
            {
                day: 3,
                title: "Merzouga – Todra Gorge",
                description: "Journey west to Todra Gorge with dramatic limestone cliffs."
            },
            {
                day: 4,
                title: "Todra – Fes",
                description: "Travel to Fes, arriving in the historic imperial city."
            }
        ]
    },
    {
        id: "3-days-marrakech-fes-desert",
        order: 10,
        title: "3 Days Marrakech to Fes Desert Tour",
        subtitle: "Sahara & Erg Chebbi",
        duration: "3 Days",
        difficulty: "Moderate",
        difficultyStars: 3,
        tags: [
            "Desert",
            "Sahara",
            "Quick Trip"
        ],
        cities: [
            "Marrakech",
            "Merzouga",
            "Fes"
        ],
        description: "3-day desert tour from Marrakech to Fes with Sahara camel trekking and overnight stay in the desert.",
        highlights: [
            "High Atlas Mountains",
            "Sahara Desert",
            "Erg Chebbi dunes",
            "Camel trekking",
            "Desert camp",
            "Todra Gorge",
            "Fes medina"
        ],
        thumbnail: {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticImageUrl"])("/hero-blue-chefchaouen.png"),
            alt: "Morocco landscape",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Marrakech – Merzouga",
                description: "Cross High Atlas Mountains to Merzouga. Camel trek into Erg Chebbi at sunset. Desert camp night."
            },
            {
                day: 2,
                title: "Merzouga – Todra Gorge",
                description: "Sunrise over dunes. Journey to Todra Gorge."
            },
            {
                day: 3,
                title: "Todra – Fes",
                description: "Travel to Fes, arriving in the imperial city."
            }
        ]
    }
];
}}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HARDCODED_ITINERARIES": (()=>HARDCODED_ITINERARIES)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/image-urls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tours$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tours-data.ts [app-ssr] (ecmascript)");
;
;
const HARDCODED_ITINERARIES = [
    // Original tour
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tours$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FINDYOURMOROCCO_TOURS"],
    {
        id: "beach-marrakech",
        order: 11,
        title: "Beach + Marrakech Combo",
        subtitle: "Salt + Spice",
        duration: "7 Days",
        difficulty: "Easy",
        difficultyStars: 2,
        tags: [
            "Beach",
            "Cultural",
            "Relaxation"
        ],
        cities: [
            "Marrakech",
            "Oualidia",
            "Essaouira"
        ],
        description: "Perfect blend of cultural immersion in Marrakech and coastal relaxation along Morocco's Atlantic shores.",
        highlights: [
            "Essaouira Beach exploration",
            "Marrakech Medina tours",
            "Art gallery visits",
            "Traditional hammam experiences",
            "Scenic coastal drives"
        ],
        thumbnail: {
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$image$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStaticImageUrl"])("/essaouira-beach-morocco.png"),
            alt: "Essaouira beach with traditional fishing boats and seagulls",
            position: "object-center"
        },
        dayByDay: [
            {
                day: 1,
                title: "Marrakech Arrival",
                description: "Land + reset. Optional dinner in hidden courtyard."
            },
            {
                day: 2,
                title: "Art Loop + Spa",
                description: "Museum, gallery walk. Hammam. Evening in the medina."
            },
            {
                day: 3,
                title: "Essaouira via Oualidia",
                description: "Drive coastal route. Stop for seafood. Reach the Atlantic."
            },
            {
                day: 4,
                title: "Surf + Sea Walk",
                description: "Beach day. Optional surf session or hammam."
            },
            {
                day: 5,
                title: "Return Marrakech",
                description: "Chill day. Rooftop meal."
            },
            {
                day: 6,
                title: "Flexible Medina Day",
                description: "Tailored activities or chill."
            },
            {
                day: 7,
                title: "Departure",
                description: "Final moments before departure."
            }
        ]
    }
];
}}),
"[project]/lib/firestore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FirestoreService": (()=>FirestoreService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
;
;
;
// Helper to convert Firestore timestamp to ISO string
const convertTimestamps = (data)=>{
    const result = {
        ...data
    };
    for (const [key, value] of Object.entries(data)){
        if (value?.toDate instanceof Function) {
            result[key] = value.toDate().toISOString();
        }
    }
    return result;
};
class FirestoreService {
    // CREATE
    static async create(collectionName, data) {
        try {
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName), data);
            return docRef.id;
        } catch (error) {
            console.error(`Error creating ${collectionName} document:`, error);
            throw error;
        }
    }
    // READ (single document)
    static async get(collectionName, id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName, id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            if (!docSnap.exists()) {
                return null;
            }
            return {
                id: docSnap.id,
                ...convertTimestamps(docSnap.data())
            };
        } catch (error) {
            console.error(`Error getting ${collectionName} document:`, error);
            throw error;
        }
    }
    // READ (all documents)
    static async getAll(collectionName, orderByField) {
        // For development/demo, always use hardcoded data for itineraries
        if (collectionName === 'itineraries') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HARDCODED_ITINERARIES"];
        }
        try {
            const q = orderByField ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])(orderByField)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName);
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (querySnapshot.empty) {
                return [];
            }
            return querySnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...convertTimestamps(doc.data())
                }));
        } catch (error) {
            console.error(`Error getting all ${collectionName} documents:`, error);
            return [];
        }
    }
    // UPDATE
    static async update(collectionName, id, data) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName, id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, data);
        } catch (error) {
            console.error(`Error updating ${collectionName} document:`, error);
            throw error;
        }
    }
    // DELETE
    static async delete(collectionName, id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], collectionName, id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
        } catch (error) {
            console.error(`Error deleting ${collectionName} document:`, error);
            throw error;
        }
    }
    // Specific collection methods with proper typing
    static async getItineraries() {
        return this.getAll('itineraries', 'order');
    }
    static async getItinerary(id) {
        return this.get('itineraries', id);
    }
    static async getJournalPosts() {
        return this.getAll('journal', 'publishedAt');
    }
    static async getJournalPost(id) {
        return this.get('journal', id);
    }
}
}}),
"[project]/hooks/use-itineraries.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useItineraries": (()=>useItineraries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firestore.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useItineraries(options = {}) {
    const [itineraries, setItineraries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchItineraries = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FirestoreService"].getItineraries();
                // If activeOnly is true, filter out inactive itineraries
                const filteredData = options.activeOnly ? data.filter((itinerary)=>itinerary.order > 0) : data;
                // Sort by order
                const sortedData = [
                    ...filteredData
                ].sort((a, b)=>a.order - b.order);
                setItineraries(sortedData);
                setError(null);
            } catch (err) {
                console.error('Error fetching itineraries:', err);
                setError(err instanceof Error ? err : new Error('Failed to fetch itineraries'));
            } finally{
                setLoading(false);
            }
        };
        fetchItineraries();
    }, [
        options.activeOnly
    ]);
    return {
        itineraries,
        loading,
        error,
        refetch: ()=>{
            setLoading(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FirestoreService"].getItineraries().then((data)=>{
                const filteredData = options.activeOnly ? data.filter((itinerary)=>itinerary.order > 0) : data;
                const sortedData = [
                    ...filteredData
                ].sort((a, b)=>a.order - b.order);
                setItineraries(sortedData);
                setError(null);
            }).catch((err)=>{
                console.error('Error refetching itineraries:', err);
                setError(err instanceof Error ? err : new Error('Failed to fetch itineraries'));
            }).finally(()=>setLoading(false));
        }
    };
}
}}),
"[project]/app/itineraries/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ItinerariesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$call$2d$to$2d$action$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/call-to-action.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$itineraries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-itineraries.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function TabContent({ experience }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('highlights');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('highlights'),
                            className: `pb-2 border-b-2 ${activeTab === 'highlights' ? 'border-[#454772] text-[#454772]' : 'border-transparent text-gray-500'} text-sm font-medium`,
                            children: "Highlights"
                        }, void 0, false, {
                            fileName: "[project]/app/itineraries/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('overview'),
                            className: `pb-2 border-b-2 ${activeTab === 'overview' ? 'border-[#454772] text-[#454772]' : 'border-transparent text-gray-500'} text-sm font-medium`,
                            children: "Overview"
                        }, void 0, false, {
                            fileName: "[project]/app/itineraries/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/itineraries/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            activeTab === 'highlights' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "text-sm text-gray-600 space-y-1",
                children: (experience.highlights || []).slice(0, 4).map((highlight, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            "• ",
                            highlight
                        ]
                    }, index, true, {
                        fileName: "[project]/app/itineraries/page.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative pl-2 border-l-2 border-[#f9d597] space-y-3",
                children: (experience.dayByDay || []).slice(0, 3).map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-[#454772]",
                                children: [
                                    "Day ",
                                    day.day
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/itineraries/page.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600",
                                children: day.title
                            }, void 0, false, {
                                fileName: "[project]/app/itineraries/page.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, day.day, true, {
                        fileName: "[project]/app/itineraries/page.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/itineraries/${experience.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-[#2a4c61] hover:bg-[#9b847b] text-white text-sm",
                        children: "Learn more"
                    }, void 0, false, {
                        fileName: "[project]/app/itineraries/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/itineraries/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/itineraries/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function ItinerariesPage() {
    const { itineraries, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$itineraries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useItineraries"])({
        activeOnly: true
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white font-sans flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"
            }, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/itineraries/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    // Sort itineraries by order
    const sortedItineraries = [
        ...itineraries
    ].sort((a, b)=>a.order - b.order);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-10 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: sortedItineraries.map((experience)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-64 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: experience.thumbnail?.src || "/placeholder.svg",
                                                alt: experience.thumbnail?.alt || `${experience.title} - ${experience.subtitle}`,
                                                fill: true,
                                                className: `${experience.thumbnail?.position || 'object-center'} group-hover:scale-105 transition-transform duration-300`
                                            }, void 0, false, {
                                                fileName: "[project]/app/itineraries/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium",
                                                children: experience.duration
                                            }, void 0, false, {
                                                fileName: "[project]/app/itineraries/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4 flex gap-2",
                                                children: (experience.tags || []).slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-[#f9d597]/90 text-black px-2 py-1 rounded-full text-xs font-medium",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/itineraries/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/itineraries/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 flex flex-col h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-medium text-black mb-2",
                                                        children: experience.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#9b847b] font-medium text-lg mb-4",
                                                        children: experience.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm mb-4",
                                                        children: experience.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Difficulty:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/itineraries/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    ...Array(5)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-sm ${i < experience.difficultyStars ? "text-[#f9d597]" : "text-gray-300"}`,
                                                                        children: "★"
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/itineraries/page.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    "(",
                                                                    experience.difficulty,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/itineraries/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: (experience.cities || []).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-[#f9d597] text-black px-3 py-1 rounded-full text-xs font-medium",
                                                                    children: city
                                                                }, city, false, {
                                                                    fileName: "[project]/app/itineraries/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/itineraries/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabContent, {
                                                        experience: experience
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/itineraries/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-auto space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/itineraries/${experience.id}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "w-full bg-[#9b847b] hover:bg-[#9b847b]/90 text-white",
                                                            children: "Know More"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/itineraries/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full bg-[#454772] hover:bg-[#454772]/90 text-white",
                                                        children: "Get a Quote"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/itineraries/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/itineraries/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/itineraries/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, experience.id, true, {
                                fileName: "[project]/app/itineraries/page.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/itineraries/page.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/itineraries/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$call$2d$to$2d$action$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/itineraries/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/itineraries/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_cc99b58c._.js.map