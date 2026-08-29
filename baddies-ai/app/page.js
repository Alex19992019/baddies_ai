"use client";

import { useState, useRef, useEffect } from "react";
import { Download } from "lucide-react";

const LOGO_SRC = "/images/logo.png";
const SLOGAN_SRC = "/images/slogan.png";
const AVATAR_SRC = "/images/avatar.png";
const LAPTOP_SRC = "/images/laptop.png";
const SKIN_SRC = "/images/skin-overlay.png";
const COLLAR_FILL_SRC = "/images/collar-fill.png";

const ICON_SKIN_SRC = "/images/icons/icon-skin.png";
const ICON_ROPA_SRC = "/images/icons/icon-ropa.png";
const ICON_FONDO_SRC = "/images/backgrounds/bg1.png";

const THUMB_EYE_SOURCES = {
  eye1: "/images/icons/thumb-eye1.png",
  eye2: "/images/icons/thumb-eye2.png",
  eye3: "/images/icons/thumb-eye3.png",
  eye4: "/images/icons/thumb-eye4.png",
  eye5: "/images/icons/thumb-eye5.png",
  eye6: "/images/icons/thumb-eye6.png",
  eye7: "/images/icons/thumb-eye7.png",
  eye8: "/images/icons/thumb-eye8.png",
};
const THUMB_MOUTH_SOURCES = {
  mouth1: "/images/icons/thumb-mouth1.png",
  mouth2: "/images/icons/thumb-mouth2.png",
  mouth3: "/images/icons/thumb-mouth3.png",
  mouth4: "/images/icons/thumb-mouth4.png",
  mouth5: "/images/icons/thumb-mouth5.png",
  mouth6: "/images/icons/thumb-mouth6.png",
  mouth7: "/images/icons/thumb-mouth7.png",
  mouth8: "/images/icons/thumb-mouth8.png",
};
const SHIRT_SRC = "/images/shirt-overlay.png";

const MOUTH_SOURCES = {
  mouth1: "/images/mouth/mouth1.png",
  mouth2: "/images/mouth/mouth2.png",
  mouth3: "/images/mouth/mouth3.png",
  mouth4: "/images/mouth/mouth4.png",
  mouth5: "/images/mouth/mouth5.png",
  mouth6: "/images/mouth/mouth6.png",
  mouth7: "/images/mouth/mouth7.png",
  mouth8: "/images/mouth/mouth8.png",
};

const EYE_SOURCES = {
  eye1: "/images/eyes/eye1.png",
  eye2: "/images/eyes/eye2.png",
  eye3: "/images/eyes/eye3.png",
  eye4: "/images/eyes/eye4.png",
  eye5: "/images/eyes/eye5.png",
  eye6: "/images/eyes/eye6.png",
  eye7: "/images/eyes/eye7.png",
  eye8: "/images/eyes/eye8.png",
};

const HAIR_SOURCES = {
  hair1: "/images/hair/hair6.png",
  hair2: "/images/hair/hair1.png",
  hair3: "/images/hair/hair2.png",
  hair4: "/images/hair/hair3.png",
  hair5: "/images/hair/hair4.png",
  hair6: "/images/hair/hair5.png",
  hair7: "/images/hair/hair7.png",
  hair8: "/images/hair/hair8.png",
  hair9: "/images/hair/hair9.png",
};

const HAIR_STYLES = [
  { id: "hair1", label: "Estilo 1" },
  { id: "hair2", label: "Estilo 2" },
  { id: "hair3", label: "Estilo 3" },
  { id: "hair4", label: "Estilo 4" },
  { id: "hair5", label: "Estilo 5" },
  { id: "hair6", label: "Estilo 6" },
  { id: "hair7", label: "Estilo 7" },
  { id: "hair8", label: "Estilo 8" },
  { id: "hair9", label: "Estilo 9" },
];

const MOUTH_STYLES = [
  { id: "mouth1", label: "Estilo 1", colorable: false },
  { id: "mouth2", label: "Estilo 2", colorable: true },
  { id: "mouth3", label: "Estilo 3", colorable: true },
  { id: "mouth4", label: "Estilo 4", colorable: true },
  { id: "mouth5", label: "Estilo 5", colorable: true },
  { id: "mouth6", label: "Estilo 6", colorable: true },
  { id: "mouth7", label: "Estilo 7", colorable: true },
  { id: "mouth8", label: "Estilo 8", colorable: true },
];
const EYE_STYLES = [
  { id: "eye1", label: "Estilo 1" },
  { id: "eye2", label: "Estilo 2" },
  { id: "eye3", label: "Estilo 3" },
  { id: "eye4", label: "Estilo 4" },
  { id: "eye5", label: "Estilo 5" },
  { id: "eye6", label: "Estilo 6" },
  { id: "eye7", label: "Estilo 7" },
  { id: "eye8", label: "Estilo 8" },
];

const BACKGROUNDS = [
  { id: "bg1", label: "Ciudad noche", src: "/images/backgrounds/bg1.png" },
  { id: "bg2", label: "Atardecer urbano", src: "/images/backgrounds/bg2.png" },
  { id: "bg3", label: "Ciudad azul", src: "/images/backgrounds/bg3.png" },
  { id: "bg4", label: "Ciudad dorada", src: "/images/backgrounds/bg4.png" },
  { id: "bg5", label: "Ciudad rosa", src: "/images/backgrounds/bg5.png" },
  { id: "bg6", label: "Skyline", src: "/images/backgrounds/bg6.png" },
  { id: "bg7", label: "Nube crema", src: "/images/backgrounds/bg7.png" },
  { id: "bg8", label: "Nube rosa", src: "/images/backgrounds/bg8.png" },
  { id: "bg9", label: "Nubes atardecer", src: "/images/backgrounds/bg9.png" },
  { id: "bg10", label: "Nubes noche", src: "/images/backgrounds/bg10.png" },
];

const SKIN_COLORS = ["#ffedd8", "#f3d5b5", "#e7bc91", "#d4a276", "#bc8a5f", "#a47148", "#8b5e34", "#6f4518", "#603808", "#583101"];
const SHIRT_COLORS = [
  "#bc9979", "#875532", "#3e271f", "#151515", "#3c401d", "#511f38", "#a63b07", "#c06807", "#7e130b",
  "#cd7d65", "#dfafa3", "#ccaabb", "#cbd1a1",
  "#e27396", "#ea9ab2", "#efcfe3", "#b3dee2",
];
const HAIR_COLORS = [
  "#6f1d1b", "#bb9457", "#432818", "#99582a", "#ffe6a7", "#e09f3e", "#4a4e69",
  "#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0", "#080807",
];
const EYE_COLORS = ["#669bbc", "#7f5539", "#656d4a", "#bc6c25", "#94d2bd", "#ccd5ae", "#6c757d"];
const LIP_COLORS = [
  "#780000", "#ffafcc", "#ae2012", "#bb3e03", "#fb6f92", "#ff006e",
  "#bc4749", "#b56576", "#dd2d4a", "#5f0f40", "#450920", "#e78f8e",
];
const HAIR_SCALES = { hair2: 0.85 };
const HAIR_OFFSETS = { hair2: { dx: 28, dy: 0 } };
const EYE_OFFSETS = { eye5: { dx: 0, dy: 30 }, eye6: { dx: 0, dy: 15 } };
const MOUTH_SCALES = { mouth8: 0.7 };
const MOUTH_OFFSETS = { mouth6: { dx: 0, dy: -18 }, mouth8: { dx: 0, dy: 20 } };

const CHARM_DEFS = [
  { id: "charm01", src: "/images/charms/charm01.png" },
  { id: "charm02", src: "/images/charms/charm02.png" },
  { id: "charm04", src: "/images/charms/charm04.png" },
  { id: "charm05", src: "/images/charms/charm05.png" },
  { id: "charm06", src: "/images/charms/charm06.png" },
  { id: "charm07", src: "/images/charms/charm07.png" },
  { id: "charm08", src: "/images/charms/charm08.png" },
  { id: "charm09", src: "/images/charms/charm09.png" },
  { id: "charm10", src: "/images/charms/charm10.png" },
  { id: "charm11", src: "/images/charms/charm11.png" },
  { id: "charm12", src: "/images/charms/charm12.png" },
  { id: "charm13", src: "/images/charms/charm13.png" },
  { id: "charm14", src: "/images/charms/charm14.png" },
  { id: "charm15", src: "/images/charms/charm15.png" },
  { id: "charm16", src: "/images/charms/charm16.png" },
  { id: "charm17", src: "/images/charms/charm17.png" },
  { id: "charm18", src: "/images/charms/charm18.png" },
  { id: "charm19", src: "/images/charms/charm19.png" },
];

const CATEGORIES = [
  { id: "hair", label: "Cabello", icon: HAIR_SOURCES.hair6, styles: HAIR_STYLES, colors: HAIR_COLORS, live: true },
  { id: "eyes", label: "Ojos", icon: THUMB_EYE_SOURCES.eye3, styles: EYE_STYLES, colors: EYE_COLORS, live: true },
  { id: "skin", label: "Piel", icon: ICON_SKIN_SRC, colors: SKIN_COLORS, live: true },
  { id: "shirt", label: "Ropa", icon: ICON_ROPA_SRC, colors: SHIRT_COLORS, live: true },
  { id: "mouth", label: "Boca", icon: THUMB_MOUTH_SOURCES.mouth8, styles: MOUTH_STYLES, colors: LIP_COLORS, live: true },
  { id: "background", label: "Fondo", icon: BACKGROUNDS[0].src, backgrounds: BACKGROUNDS, live: true },
];

// ---- palette-swap engine: recolors a pixel-art layer while keeping its shading intact ----
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return [h, s, l];
}
function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
function hexToRgb(hex) {
  const v = hex.replace("#", "");
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
}
function recolorImageData(imageData, targetHex) {
  const [tr, tg, tb] = hexToRgb(targetHex);
  const [th, ts, tl] = rgbToHsl(tr, tg, tb);
  const d = imageData.data;

  // First pass: find the lightness range of the recolorable (non-outline, non-highlight) pixels,
  // so we can re-center that range on the target color's own lightness.
  let lMin = 1, lMax = 0;
  for (let i = 0; i < d.length; i += 4) {
    const a = d[i + 3];
    if (a === 0) continue;
    const r = d[i], g = d[i + 1], b = d[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum < 45 || lum > 235) continue;
    const l = rgbToHsl(r, g, b)[2];
    if (l < lMin) lMin = l;
    if (l > lMax) lMax = l;
  }
  const lCenter = lMin <= lMax ? (lMin + lMax) / 2 : 0.5;
  const spread = 0.32; // pull results even closer to the chosen color's real lightness

  for (let i = 0; i < d.length; i += 4) {
    const a = d[i + 3];
    if (a === 0) continue;
    const r = d[i], g = d[i + 1], b = d[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    // protect the dark outline ink AND crisp white highlights/shine (teeth, sparkle) shared across the art
    if (lum < 45 || lum > 235) continue;
    const l = rgbToHsl(r, g, b)[2];
    const newL = Math.min(1, Math.max(0, tl + (l - lCenter) * spread));
    // taper saturation toward the extremes so very light/dark results don't look neon,
    // but keep enough of the target's own tint so light colors don't wash out to gray
    const satTaper = 0.65 + 0.35 * Math.sin(Math.PI * newL);
    const newS = Math.min(1, ts * satTaper);
    const [nr, ng, nb] = hslToRgb(th, newS, newL);
    d[i] = nr; d[i + 1] = ng; d[i + 2] = nb;
  }
  return imageData;
}

function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) { resolve(null); return; }
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawCover(ctx, img, W, H) {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  const scale = Math.max(W / iw, H / ih);
  const sw = W / scale;
  const sh = H / scale;
  const sx = (iw - sw) / 2;
  const sy = (ih - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
}

function RecoloredLayer({ src, color, size = 640, scale = 1, offsetX = 0, offsetY = 0, className }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!src || !canvasRef.current) return;
    const img = new window.Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      const dw = size * scale;
      const dx = (size - dw) / 2 + offsetX;
      const dy = (size - dw) / 2 + offsetY;
      ctx.drawImage(img, dx, dy, dw, dw);
      const imgData = ctx.getImageData(0, 0, size, size);
      recolorImageData(imgData, color);
      ctx.putImageData(imgData, 0, 0);
    };
    img.src = src;
  }, [src, color, size, scale, offsetX, offsetY]);
  return <canvas ref={canvasRef} className={className} />;
}

function TabButton({ cat, active, onSelect }) {
  return (
    <button
      onClick={() => onSelect(cat.id)}
      className="w-11 h-11 shrink-0 rounded-sm overflow-hidden flex items-center justify-center p-0.5"
      style={{
        background: active ? "#FFF0F8" : "#FFC9E6",
        boxShadow: active
          ? "inset 2px 2px 0 rgba(0,0,0,0.35), inset -1px -1px 0 #fff"
          : "inset 2px 2px 0 rgba(255,255,255,0.85), inset -2px -2px 0 rgba(0,0,0,0.3)",
        transform: active ? "translateY(1px)" : "none",
      }}
    >
      <img src={cat.icon} alt={cat.label} className="w-full h-full object-cover rounded-[1px]" />
    </button>
  );
}

export default function DressUpApp() {
  const [selections, setSelections] = useState({
    hair: { style: "hair6", color: HAIR_COLORS[0] },
    mouth: { style: "mouth2", color: LIP_COLORS[0] },
    eyes: { style: "eye1", color: EYE_COLORS[0] },
    shirt: { color: SHIRT_COLORS[0] },
    skin: { color: SKIN_COLORS[2] },
    background: { id: "bg2" },
  });
  const [activeCategory, setActiveCategory] = useState("hair");
  const canvasRef = useRef(null);
  const avatarImgRef = useRef(null);
  const hairCanvasRef = useRef(null);
  const eyesCanvasRef = useRef(null);
  const mouthCanvasRef = useRef(null);
  const skinCanvasRef = useRef(null);
  const shirtCanvasRef = useRef(null);
  const laptopImgRef = useRef(null);
  const bgImgRef = useRef(null);
  const collarFillImgRef = useRef(null);
  const polaroidRef = useRef(null);
  const photoBoxRef = useRef(null);
  const logoImgRef = useRef(null);
  const sloganImgRef = useRef(null);

  const [charms, setCharms] = useState([]);
  const [activeDrag, setActiveDrag] = useState(null); // { type: 'new', charmId } | { type: 'move', uid }
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [selectedCharmUid, setSelectedCharmUid] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const BASE_CHARM_PX = 44;

  useEffect(() => {
    if (!activeDrag) return;
    function onMove(e) {
      if (activeDrag.type === "move" && polaroidRef.current) {
        const rect = polaroidRef.current.getBoundingClientRect();
        const xPct = Math.min(97, Math.max(3, ((e.clientX - rect.left) / rect.width) * 100));
        const yPct = Math.min(97, Math.max(3, ((e.clientY - rect.top) / rect.height) * 100));
        setCharms((cs) => cs.map((c) => (c.uid === activeDrag.uid ? { ...c, xPct, yPct } : c)));
      } else if (activeDrag.type === "resize" && polaroidRef.current) {
        const rect = polaroidRef.current.getBoundingClientRect();
        const charm = charms.find((c) => c.uid === activeDrag.uid);
        if (!charm) return;
        const centerX = rect.left + (charm.xPct / 100) * rect.width;
        const centerY = rect.top + (charm.yPct / 100) * rect.height;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const newScale = Math.min(3, Math.max(0.4, dist / (BASE_CHARM_PX / 2)));
        setCharms((cs) => cs.map((c) => (c.uid === activeDrag.uid ? { ...c, scale: newScale } : c)));
      } else if (activeDrag.type === "rotate" && polaroidRef.current) {
        const rect = polaroidRef.current.getBoundingClientRect();
        const charm = charms.find((c) => c.uid === activeDrag.uid);
        if (!charm) return;
        const centerX = rect.left + (charm.xPct / 100) * rect.width;
        const centerY = rect.top + (charm.yPct / 100) * rect.height;
        const angleDeg = (Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180) / Math.PI;
        setCharms((cs) => cs.map((c) => (c.uid === activeDrag.uid ? { ...c, rotation: angleDeg } : c)));
      } else {
        setDragPos({ x: e.clientX, y: e.clientY });
      }
    }
    function onUp(e) {
      if (activeDrag.type === "new" && polaroidRef.current) {
        const rect = polaroidRef.current.getBoundingClientRect();
        const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (inside) {
          const xPct = Math.min(97, Math.max(3, ((e.clientX - rect.left) / rect.width) * 100));
          const yPct = Math.min(97, Math.max(3, ((e.clientY - rect.top) / rect.height) * 100));
          setCharms((cs) => [...cs, { uid: "c" + Date.now() + Math.random(), charmId: activeDrag.charmId, xPct, yPct, scale: 1, rotation: 0 }]);
        }
      }
      setActiveDrag(null);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [activeDrag, charms]);

  function startNewCharmDrag(e, charmId) {
    e.preventDefault();
    setDragPos({ x: e.clientX, y: e.clientY });
    setActiveDrag({ type: "new", charmId });
  }
  function startMoveCharm(e, uid) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCharmUid(uid);
    setActiveDrag({ type: "move", uid });
  }
  function startResizeCharm(e, uid) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCharmUid(uid);
    setActiveDrag({ type: "resize", uid });
  }
  function startRotateCharm(e, uid) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCharmUid(uid);
    setActiveDrag({ type: "rotate", uid });
  }
  function removeCharm(uid) {
    setCharms((cs) => cs.filter((c) => c.uid !== uid));
    setSelectedCharmUid(null);
  }

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory);
  const activeMouthStyle = MOUTH_STYLES.find((m) => m.id === selections.mouth.style);
  const activeBg = BACKGROUNDS.find((b) => b.id === selections.background.id);
  const showMouthColors = activeCat?.id !== "mouth" || activeMouthStyle?.colorable;
  const hairSrc = HAIR_SOURCES[selections.hair.style] || null;
  const hairScale = HAIR_SCALES[selections.hair.style] || 1;
  const hairOffset = HAIR_OFFSETS[selections.hair.style] || { dx: 0, dy: 0 };
  const eyesSrc = EYE_SOURCES[selections.eyes.style] || null;
  const eyesOffset = EYE_OFFSETS[selections.eyes.style] || { dx: 0, dy: 0 };
  const mouthSrc = MOUTH_SOURCES[selections.mouth.style] || null;
  const mouthScale = MOUTH_SCALES[selections.mouth.style] || 1;
  const mouthOffset = MOUTH_OFFSETS[selections.mouth.style] || { dx: 0, dy: 0 };

  function updateStyle(catId, styleId) {
    setSelections((s) => ({ ...s, [catId]: { ...s[catId], style: styleId } }));
  }
  function updateColor(catId, color) {
    setSelections((s) => ({ ...s, [catId]: { ...s[catId], color } }));
  }
  function updateBackground(bgId) {
    setSelections((s) => ({ ...s, background: { id: bgId } }));
  }

  async function handleDownload() {
    setDownloading(true);
    try {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;

    if (bgImgRef.current) {
      drawCover(ctx, bgImgRef.current, W, H);
    } else {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, W, H);
    }
    if (collarFillImgRef.current) ctx.drawImage(collarFillImgRef.current, 0, 0, W, H);

    if (avatarImgRef.current) ctx.drawImage(avatarImgRef.current, 0, 0, W, H);
    if (skinCanvasRef.current) ctx.drawImage(skinCanvasRef.current, 0, 0, W, H);
    if (shirtCanvasRef.current) ctx.drawImage(shirtCanvasRef.current, 0, 0, W, H);
    if (eyesSrc && eyesCanvasRef.current) ctx.drawImage(eyesCanvasRef.current, 0, 0, W, H);
    if (mouthSrc && mouthCanvasRef.current) ctx.drawImage(mouthCanvasRef.current, 0, 0, W, H);
    if (hairSrc && hairCanvasRef.current) ctx.drawImage(hairCanvasRef.current, 0, 0, W, H);
    if (laptopImgRef.current) ctx.drawImage(laptopImgRef.current, 0, 0, W, H);

    // Now compose the whole polaroid (frame + logo + photo + caption + charms) at high resolution,
    // using the actual on-screen layout as a blueprint so charms land exactly where they were dropped.
    if (!polaroidRef.current || !photoBoxRef.current) return;
    const cardRect = polaroidRef.current.getBoundingClientRect();
    const photoRect = photoBoxRef.current.getBoundingClientRect();
    const scale = 640 / photoRect.width;
    const PW = Math.round(cardRect.width * scale);
    const PH = Math.round(cardRect.height * scale);

    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = PW;
    exportCanvas.height = PH;
    const ectx = exportCanvas.getContext("2d");
    ectx.fillStyle = "#FFFFFF";
    ectx.fillRect(0, 0, PW, PH);

    if (logoImgRef.current) {
      const r = logoImgRef.current.getBoundingClientRect();
      ectx.drawImage(logoImgRef.current, (r.left - cardRect.left) * scale, (r.top - cardRect.top) * scale, r.width * scale, r.height * scale);
    }

    ectx.drawImage(canvas, (photoRect.left - cardRect.left) * scale, (photoRect.top - cardRect.top) * scale, photoRect.width * scale, photoRect.width * scale);

    if (sloganImgRef.current) {
      const r = sloganImgRef.current.getBoundingClientRect();
      ectx.drawImage(sloganImgRef.current, (r.left - cardRect.left) * scale, (r.top - cardRect.top) * scale, r.width * scale, r.height * scale);
    }

    const charmImgs = await Promise.all(
      charms.map((c) => {
        const def = CHARM_DEFS.find((d) => d.id === c.charmId);
        return def ? loadImage(def.src) : Promise.resolve(null);
      })
    );
    charms.forEach((c, i) => {
      const img = charmImgs[i];
      if (!img) return;
      const cx = (c.xPct / 100) * PW;
      const cy = (c.yPct / 100) * PH;
      const size = BASE_CHARM_PX * (c.scale || 1) * scale;
      ectx.save();
      ectx.translate(cx, cy);
      ectx.rotate(((c.rotation || 0) * Math.PI) / 180);
      ectx.drawImage(img, -size / 2, -size / 2, size, size);
      ectx.restore();
    });

    const dataUrl = exportCanvas.toDataURL("image/png");

    // Best mobile UX: native share sheet, which has a real "Save Image" option.
    if (navigator.share && navigator.canShare) {
      try {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], "mi-polaroid-baddies-ai.png", { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: "Mi personaje Baddies AI" });
          return;
        }
      } catch (shareErr) {
        // cancelled or unsupported — fall through to the other methods below
      }
    }

    // Try a normal download click too (works in most desktop browsers).
    try {
      const link = document.createElement("a");
      link.download = "mi-polaroid-baddies-ai.png";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (linkErr) {
      // ignore — the preview below always works regardless
    }

    // Always show a preview too: on some mobile browsers a programmatic download
    // silently does nothing, but a long-press-to-save on a plain <img> always works.
    setPreviewUrl(dataUrl);
    } catch (err) {
      console.error("No se pudo generar la imagen:", err);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center py-6 px-4 font-sans"
      style={{ backgroundColor: "#FFF8FB", backgroundImage: "radial-gradient(#FFD6EC 1px, transparent 1px)", backgroundSize: "14px 14px" }}
    >
      <div className="w-full max-w-sm">
        <div
          ref={polaroidRef}
          className="relative bg-white rounded-md p-2.5 pb-4 shadow-xl select-none"
          onPointerDown={() => setSelectedCharmUid(null)}
        >
          <img ref={logoImgRef} src={LOGO_SRC} alt="Baddies AI" className="h-14 mx-auto mb-2 pointer-events-none" />

          <div
            ref={photoBoxRef}
            className="relative aspect-square rounded-sm overflow-hidden border border-[#0A0A0A]/10"
          >
            {activeBg?.src && (
              <img
                ref={bgImgRef}
                src={activeBg.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <img ref={collarFillImgRef} src={COLLAR_FILL_SRC} alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
            <img ref={avatarImgRef} src={AVATAR_SRC} alt="Tu personaje" className="absolute inset-0 w-full h-full object-contain" />
            <RecoloredLayer
              src={SKIN_SRC}
              color={selections.skin.color}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <RecoloredLayer
              src={SHIRT_SRC}
              color={selections.shirt.color}
              className="absolute inset-0 w-full h-full object-contain"
            />
            {eyesSrc && (
              <RecoloredLayer
                src={eyesSrc}
                color={selections.eyes.color}
                offsetX={eyesOffset.dx}
                offsetY={eyesOffset.dy}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
            {mouthSrc && (
              <RecoloredLayer
                src={mouthSrc}
                color={selections.mouth.color}
                scale={mouthScale}
                offsetX={mouthOffset.dx}
                offsetY={mouthOffset.dy}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
            {hairSrc && (
              <RecoloredLayer
                src={hairSrc}
                color={selections.hair.color}
                scale={hairScale}
                offsetX={hairOffset.dx}
                offsetY={hairOffset.dy}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
            <img
              ref={laptopImgRef}
              src={LAPTOP_SRC}
              alt=""
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          </div>

          <div className="flex justify-center pt-2.5">
            <img ref={sloganImgRef} src={SLOGAN_SRC} alt="the real baddies are in tech" className="h-7 pointer-events-none" />
          </div>

          {charms.map((charm) => {
            const def = CHARM_DEFS.find((c) => c.id === charm.charmId);
            if (!def) return null;
            const px = BASE_CHARM_PX * (charm.scale || 1);
            return (
              <img
                key={charm.uid}
                src={def.src}
                onPointerDown={(e) => startMoveCharm(e, charm.uid)}
                draggable={false}
                className="absolute touch-none cursor-grab z-10"
                style={{
                  left: `${charm.xPct}%`,
                  top: `${charm.yPct}%`,
                  width: `${px}px`,
                  height: `${px}px`,
                  transform: `translate(-50%, -50%) rotate(${charm.rotation || 0}deg)`,
                }}
              />
            );
          })}
          {selectedCharmUid &&
            (() => {
              const charm = charms.find((c) => c.uid === selectedCharmUid);
              if (!charm) return null;
              const half = (BASE_CHARM_PX * (charm.scale || 1)) / 2;
              return (
                <>
                  <button
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => removeCharm(charm.uid)}
                    className="absolute w-5 h-5 rounded-full bg-[#0A0A0A] text-white text-[11px] leading-none flex items-center justify-center z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `calc(${charm.xPct}% + ${half}px)`, top: `calc(${charm.yPct}% - ${half}px)` }}
                  >
                    ×
                  </button>
                  <button
                    onPointerDown={(e) => startResizeCharm(e, charm.uid)}
                    className="absolute w-5 h-5 rounded-full bg-white border-2 border-[#FF2E93] z-20 -translate-x-1/2 -translate-y-1/2 touch-none cursor-nwse-resize flex items-center justify-center"
                    style={{ left: `calc(${charm.xPct}% + ${half}px)`, top: `calc(${charm.yPct}% + ${half}px)` }}
                  >
                    <span className="block w-2 h-2 border-b-2 border-r-2 border-[#FF2E93]" />
                  </button>
                  <button
                    onPointerDown={(e) => startRotateCharm(e, charm.uid)}
                    className="absolute w-5 h-5 rounded-full bg-white border-2 border-[#FF2E93] z-20 -translate-x-1/2 -translate-y-1/2 touch-none cursor-grab flex items-center justify-center"
                    style={{ left: `calc(${charm.xPct}% - ${half}px)`, top: `calc(${charm.yPct}% + ${half}px)` }}
                  >
                    <span className="block w-2.5 h-2.5 rounded-full border-2 border-[#FF2E93] border-t-transparent border-l-transparent" />
                  </button>
                </>
              );
            })()}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-[9px] font-mono uppercase tracking-wide text-[#7A5A6A] shrink-0">Charms:</span>
          <div className="flex gap-2 overflow-x-auto">
            {CHARM_DEFS.map((def) => (
              <button
                key={def.id}
                onPointerDown={(e) => startNewCharmDrag(e, def.id)}
                className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#0A0A0A] flex items-center justify-center touch-none cursor-grab active:cursor-grabbing overflow-hidden"
              >
                <img src={def.src} alt={def.id} className="w-9 h-9 pointer-events-none object-contain" draggable={false} />
              </button>
            ))}
          </div>
        </div>

        {activeDrag?.type === "new" && (
          <img
            src={CHARM_DEFS.find((c) => c.id === activeDrag.charmId)?.src}
            className="fixed w-11 h-11 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 opacity-80"
            style={{ left: dragPos.x, top: dragPos.y }}
          />
        )}

        {/* Habbo-style editor window: tabs + content panel, always visible, no popup */}
        <div
          className="mt-3 rounded-sm overflow-hidden"
          style={{ boxShadow: "inset 2px 2px 0 rgba(255,255,255,0.9), inset -2px -2px 0 rgba(0,0,0,0.35)", background: "#FFD6EC" }}
        >
          <div className="flex justify-center gap-1.5 p-2 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <TabButton key={cat.id} cat={cat} active={activeCategory === cat.id} onSelect={setActiveCategory} />
            ))}
          </div>

          <div
            className="bg-[#FFF8FB] m-2 mt-0 p-3 min-h-[108px] rounded-sm"
            style={{ boxShadow: "inset 2px 2px 0 rgba(0,0,0,0.15), inset -1px -1px 0 #fff" }}
          >
            {activeCat.id === "background" ? (
              <div className="grid grid-cols-5 gap-2">
                {activeCat.backgrounds.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => updateBackground(bg.id)}
                    className="rounded-md border-2 overflow-hidden"
                    style={{ borderColor: selections.background.id === bg.id ? "#FF2E93" : "#0A0A0A" }}
                  >
                    <img src={bg.src} alt={bg.label} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            ) : (
              <>
                {activeCat.id === "hair" && (
                  <div className="grid grid-cols-6 gap-1.5 mb-2.5">
                    {activeCat.styles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => updateStyle("hair", style.id)}
                        className="rounded-md border-2 p-0.5 bg-[#FFF0F8]"
                        style={{ borderColor: selections.hair.style === style.id ? "#FF2E93" : "#0A0A0A" }}
                      >
                        <img src={HAIR_SOURCES[style.id]} alt={style.label} className="aspect-square object-contain" />
                      </button>
                    ))}
                  </div>
                )}
                {activeCat.id === "eyes" && (
                  <div className="grid grid-cols-6 gap-1.5 mb-2.5">
                    {activeCat.styles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => updateStyle("eyes", style.id)}
                        className="rounded-md border-2 p-0.5 bg-[#FFF0F8]"
                        style={{ borderColor: selections.eyes.style === style.id ? "#FF2E93" : "#0A0A0A" }}
                      >
                        <img src={THUMB_EYE_SOURCES[style.id]} alt={style.label} className="aspect-square object-contain" />
                      </button>
                    ))}
                  </div>
                )}
                {activeCat.id === "mouth" && (
                  <div className="grid grid-cols-6 gap-1.5 mb-2.5">
                    {activeCat.styles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => updateStyle("mouth", style.id)}
                        className="rounded-md border-2 p-0.5 bg-[#FFF0F8]"
                        style={{ borderColor: selections.mouth.style === style.id ? "#FF2E93" : "#0A0A0A" }}
                      >
                        <img src={THUMB_MOUTH_SOURCES[style.id]} alt={style.label} className="aspect-square object-contain" />
                      </button>
                    ))}
                  </div>
                )}
                {activeCat.colors && showMouthColors && (
                  <div className="flex gap-1.5 flex-wrap">
                    {activeCat.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => updateColor(activeCat.id, color)}
                        className="w-7 h-7 rounded-full border-2"
                        style={{ backgroundColor: color, borderColor: selections[activeCat.id].color === color ? "#FF2E93" : "#0A0A0A" }}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-12 h-12 rounded-full bg-[#FF2E93] flex items-center justify-center active:opacity-80 shadow-lg disabled:opacity-60"
          >
            {downloading ? (
              <span className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
            ) : (
              <Download className="w-5 h-5 text-[#0A0A0A]" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {previewUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-6"
          onClick={() => setPreviewUrl(null)}
        >
          <p className="text-white text-xs font-mono text-center mb-3 uppercase tracking-wide">
            Mantén presionada la imagen para guardarla
          </p>
          <img
            src={previewUrl}
            alt="Tu polaroid"
            className="max-w-full max-h-[70vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setPreviewUrl(null)}
            className="mt-4 px-5 py-2 bg-white rounded-full text-xs font-mono uppercase tracking-wide"
          >
            Cerrar
          </button>
        </div>
      )}

      {/* hidden canvas used only to produce the final recolored hair layer for the download composite */}
      <div className="hidden">
        {eyesSrc && <RecoloredLayerRef src={eyesSrc} color={selections.eyes.color} offsetX={eyesOffset.dx} offsetY={eyesOffset.dy} forwardRef={eyesCanvasRef} />}
        {mouthSrc && <RecoloredLayerRef src={mouthSrc} color={selections.mouth.color} scale={mouthScale} offsetX={mouthOffset.dx} offsetY={mouthOffset.dy} forwardRef={mouthCanvasRef} />}
        {hairSrc && <RecoloredLayerRef src={hairSrc} color={selections.hair.color} scale={hairScale} offsetX={hairOffset.dx} offsetY={hairOffset.dy} forwardRef={hairCanvasRef} />}
        <RecoloredLayerRef src={SKIN_SRC} color={selections.skin.color} forwardRef={skinCanvasRef} />
        <RecoloredLayerRef src={SHIRT_SRC} color={selections.shirt.color} forwardRef={shirtCanvasRef} />
      </div>
      <canvas ref={canvasRef} width={640} height={640} className="hidden" />
    </div>
  );
}

function RecoloredLayerRef({ src, color, size = 640, scale = 1, offsetX = 0, offsetY = 0, forwardRef }) {
  useEffect(() => {
    if (!src || !forwardRef.current) return;
    const img = new window.Image();
    img.onload = () => {
      const canvas = forwardRef.current;
      if (!canvas) return;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      const dw = size * scale;
      const dx = (size - dw) / 2 + offsetX;
      const dy = (size - dw) / 2 + offsetY;
      ctx.drawImage(img, dx, dy, dw, dw);
      const imgData = ctx.getImageData(0, 0, size, size);
      recolorImageData(imgData, color);
      ctx.putImageData(imgData, 0, 0);
    };
    img.src = src;
  }, [src, color, size, scale, offsetX, offsetY, forwardRef]);
  return <canvas ref={forwardRef} />;
}
