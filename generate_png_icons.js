const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Pure Node.js Solid PNG Encoder (100% Solid RGB, No transparency issues on iOS Safari)
function createSolidPNG(width, height, getPixel) {
  const rawData = Buffer.alloc(height * (width * 4 + 1));
  let offset = 0;

  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const [r, g, b] = getPixel(x, y, width, height);
      rawData[offset++] = Math.max(0, Math.min(255, Math.round(r)));
      rawData[offset++] = Math.max(0, Math.min(255, Math.round(g)));
      rawData[offset++] = Math.max(0, Math.min(255, Math.round(b)));
      rawData[offset++] = 255; // 100% Solid Alpha
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = createChunk('IHDR', ihdr);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const length = data.length;
  const chunk = Buffer.alloc(4 + 4 + length + 4);
  chunk.writeUInt32BE(length, 0);
  chunk.write(type, 4);
  data.copy(chunk, 8);
  const crc = crc32(Buffer.concat([Buffer.from(type), data]));
  chunk.writeUInt32BE(crc, 8 + length);
  return chunk;
}

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

// Draw Solid, High-Contrast, Radiant Yom Tov Palm Emblem
function renderOhrsomSolidPixel(x, y, w, h) {
  const nx = (x / w) * 2 - 1; // -1 to 1
  const ny = (y / h) * 2 - 1; // -1 to 1

  // Deep solid midnight blue radial background
  const rBg = Math.sqrt(nx * nx + ny * ny);
  let bgR = 10 + Math.max(0, (1 - rBg) * 15);
  let bgG = 20 + Math.max(0, (1 - rBg) * 20);
  let bgB = 35 + Math.max(0, (1 - rBg) * 30);

  // Outer Gold Border Line
  if (Math.abs(nx) > 0.88 || Math.abs(ny) > 0.88) {
    if (Math.abs(nx) < 0.94 && Math.abs(ny) < 0.94) {
      return [245, 158, 11]; // Radiant Gold Border
    }
  }

  // Glowing center gold aura
  const distCenter = Math.sqrt(nx * nx + (ny + 0.12) * (ny + 0.12));
  if (distCenter < 0.7) {
    const glow = Math.pow(1 - distCenter / 0.7, 1.5) * 0.65;
    bgR = Math.min(255, bgR + 245 * glow);
    bgG = Math.min(255, bgG + 160 * glow);
    bgB = Math.min(255, bgB + 20 * glow);
  }

  // Botanical palm branch / Menorah Lulav Leaves
  // 1. Central Golden Trunk / Stem
  if (Math.abs(nx) < 0.045 && ny >= -0.65 && ny <= 0.45) {
    return [254, 240, 138]; // Bright glowing gold stem
  }

  // 2. Crown Top Leaf
  if (ny < -0.45 && ny >= -0.72) {
    const lw = (ny + 0.72) * 0.45;
    if (Math.abs(nx) < lw) {
      return [245, 158, 11];
    }
  }

  // 3. Four Pairs of Radiating Palm Leaves (Gold & Emerald/Teal)
  const leafPairs = [
    { cy: -0.38, len: 0.52, ang: 0.40, color: [45, 212, 191] }, // Emerald Teal
    { cy: -0.15, len: 0.60, ang: 0.32, color: [251, 191, 36] }, // Warm Gold
    { cy: 0.08,  len: 0.54, ang: 0.24, color: [45, 212, 191] }, // Emerald Teal
    { cy: 0.28,  len: 0.42, ang: 0.18, color: [245, 158, 11] }  // Radiant Gold
  ];

  for (const lp of leafPairs) {
    const dy = ny - lp.cy;
    const ax = Math.abs(nx);
    if (ax > 0.02 && ax < lp.len) {
      const expectedY = -lp.ang * (ax - 0.02) + (ax * ax * 0.25);
      const thickness = 0.07 * (1 - ax / lp.len);
      if (Math.abs(dy - expectedY) < thickness) {
        return lp.color;
      }
    }
  }

  // 4. Gold Pill Banner at Bottom with "OHRSOM"
  if (ny >= 0.62 && ny <= 0.82 && Math.abs(nx) <= 0.75) {
    // Gold pill border
    if (Math.abs(nx) > 0.72 || ny <= 0.64 || ny >= 0.80) {
      return [245, 158, 11];
    }
    return [15, 25, 35]; // Dark pill interior
  }

  // Text representation in gold inside pill
  if (ny >= 0.68 && ny <= 0.76 && Math.abs(nx) <= 0.62) {
    // Simple bar representation for crisp display at all resolutions
    return [251, 191, 36];
  }

  return [bgR, bgG, bgB];
}

// Generate Solid Icons
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

const png192 = createSolidPNG(192, 192, renderOhrsomSolidPixel);
fs.writeFileSync(path.join(iconsDir, 'ohrsom-icon-192.png'), png192);
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), png192);
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon-180x180.png'), png192);
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon-precomposed.png'), png192);

const png512 = createSolidPNG(512, 512, renderOhrsomSolidPixel);
fs.writeFileSync(path.join(iconsDir, 'ohrsom-icon-512.png'), png512);

// Also copy directly to root of workspace
fs.writeFileSync(path.join(__dirname, 'apple-touch-icon.png'), png192);
fs.writeFileSync(path.join(__dirname, 'apple-touch-icon-precomposed.png'), png192);
fs.writeFileSync(path.join(__dirname, 'favicon.png'), png192);

console.log('Successfully generated solid PNG icons for iOS Safari & Android!');
