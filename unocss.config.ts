import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  transformerAttributifyJsx
} from "unocss";

const colorReg = (prefix: string) => new RegExp("^" + prefix + "-([0-9a-z]+)(/(\\d+))?$");

const colorAttr = (prefix: string, [, color, , opacity]: RegExpMatchArray) => {
  let lightColor = "",
    darkColor = "";

  if (["black", "white"].includes(color)) {
    lightColor = color;
    darkColor = color === "white" ? "black" : "white";
  } else {
    lightColor = `gray-${color}`;
    darkColor = `gray-${(
      (+color === 900 || +color === 50 ? 950 : 900) - +color
    ).toString()}`;
  }

  const attr = `${prefix}-${lightColor}${opacity ? "/" + opacity : ""}`;
  const darkAttr = `${prefix}-${darkColor}${opacity ? "/" + opacity : ""}`;

  return `${attr} dark:${darkAttr}`;
};

export default defineConfig({
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    ["hstack", "flex items-center"],
    ["vstack", "hstack flex-col"],
    ["no-outline", "outline-none focus:outline-none"],
    [colorReg("text-c"), (v) => colorAttr("text", v)],
    [colorReg("border-c"), (v) => colorAttr("border", v)],
    [colorReg("bg-c"), (v) => colorAttr("bg", v)],
    ["shadow-menu", "shadow-md shadow-black/25 dark:shadow-black/50"],
    ["window-btn", "size-3 text-black rounded-full flex-center no-outline"],
    ["border-menu", "border-gray-500/50"],
    [
      "menu-box",
      "fixed top-8.5 text-c-black bg-c-200/90 border border-menu rounded-lg shadow-menu"
    ],
    [
      "safari-btn",
      "h-6 outline-none focus:outline-none rounded flex-center border border-c-300"
    ],
    ["cc-btn", "flex-center rounded-full size-8 text-white bg-blue-500"],
    [
      "cc-btn-active",
      "flex-center rounded-full size-8 text-c-700 bg-gray-400/25 dark:bg-gray-300/25"
    ],
    ["cc-text", "text-xs text-c-500"],
    ["cc-grid", "bg-c-200/80 rounded-xl cc-grid-shadow backdrop-blur-2xl"],
    ["battery-level", "absolute rounded-[1px] h-2 top-1/2 -mt-1 ml-0.5 left-0"]
  ],
  rules: [["cc-grid-shadow", { "box-shadow": "0px 1px 5px 0px rgba(0, 0, 0, 0.3)" }]],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        display: "inline-block"
      },
      collections: {
        ph: () => import("@iconify/json/json/ph.json").then((i) => i.default),
        bi: () => import("@iconify/json/json/bi.json").then((i) => i.default),
        bxl: () => import("@iconify/json/json/bxl.json").then((i) => i.default),
        bx: () => import("@iconify/json/json/bx.json").then((i) => i.default),
        fa: () => import("@iconify/json/json/fa.json").then((i) => i.default),
        "fa-solid": () => import("@iconify/json/json/fa-solid.json").then((i) => i.default),
        "fa-brands": () => import("@iconify/json/json/fa-brands.json").then((i) => i.default),
        ion: () => import("@iconify/json/json/ion.json").then((i) => i.default),
        jam: () => import("@iconify/json/json/jam.json").then((i) => i.default),
        "material-symbols": () => import("@iconify/json/json/material-symbols-rounded.json").then((i) => i.default),
        charm: () => import("@iconify/json/json/charm.json").then((i) => i.default),
        gg: () => import("@iconify/json/json/gg.json").then((i) => i.default),
        ri: () => import("@iconify/json/json/ri.json").then((i) => i.default),
        mi: () => import("@iconify/json/json/mi.json").then((i) => i.default),
        mingcute: () => import("@iconify/json/json/mingcute.json").then((i) => i.default),
        tabler: () => import("@iconify/json/json/tabler.json").then((i) => i.default),
        lucide: () => import("@iconify/json/json/lucide.json").then((i) => i.default)
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx()
  ]
})