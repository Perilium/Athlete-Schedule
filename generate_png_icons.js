const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Pure Node.js PNG encoder without third-party dependencies
function createPNG(width, height, getPixel) {
  // getPixel(x, y) returns [r, g, b, a] (0-255)
  const rawData = Buffer.alloc(height * (width * 4 + 1));
  let offset = 0;

  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      rawData[offset++] = r;
      rawData[offset++] = g;
      rawData[offset++] = b;
      rawData[offset++] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit depth
  ihdr[9] = 6; // Color type 6: RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace
  const ihdrChunk = createChunk('IHDR', ihdr);

  // IDAT chunk
  const idatChunk = createChunk('IDAT', compressed);

  // IEND chunk
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

// CRC32 table & calculator
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

// Draw the Ohrsom Yom Tov Botanical Palm Emblem
function renderOhrsomPixel(x, y, w, h) {
  const nx = (x / w) * 2 - 1; // -1 to 1
  const ny = (y / h) * 2 - 1; // -1 to 1
  const r = Math.sqrt(nx * nx + ny * ny);

  // Base background (Deep midnight blue/navy gradient)
  let bgR = Math.round(11 + (1 - ny) * 8);
  let bgG = Math.round(23 + (1 - ny) * 12);
  let bgB = Math.round(36 + (1 - ny) * 16);

  // Rounded squircle border
  const cornerR = 0.22;
  const qx = Math.max(0, Math.abs(nx) - (1 - cornerR));
  const qy = Math.max(0, Math.abs(ny) - (1 - cornerR));
  const distCorner = Math.sqrt(qx * qx + qy * qy);

  if (distCorner > cornerR) {
    return [0, 0, 0, 0]; // Transparent outside icon bounds
  }

  // Gold outer border
  const isBorder = (Math.abs(nx) > 0.92 || Math.abs(ny) > 0.92 || (distCorner > cornerR - 0.04 && distCorner <= cornerR));
  if (isBorder) {
    return [245, 158, 11, 255]; // Golden border
  }

  // Golden glowing center aura
  const distCenter = Math.sqrt(nx * nx + (ny + 0.1) * (ny + 0.1));
  if (distCenter < 0.65) {
    const glow = (1 - distCenter / 0.65) * 0.45;
    bgR = Math.min(255, Math.round(bgR + 245 * glow));
    bgG = Math.min(255, Math.round(bgG + 158 * glow));
    bgB = Math.min(255, Math.round(bgB + 11 * glow * 0.3));
  }

  // Botanical palm branch leaves & stem
  // Stem: vertical central line from ny = -0.6 to 0.4
  if (Math.abs(nx) < 0.04 && ny >= -0.65 && ny <= 0.45) {
    return [251, 191, 36, 255]; // Bright gold stem
  }

  // Top leaf
  if (ny < -0.45 && ny >= -0.72) {
    const lw = (ny + 0.72) * 0.45;
    if (Math.abs(nx) < lw) {
      return [245, 158, 11, 255];
    }
  }

  // Side Palm Leaves (symmetric curves)
  const leafPairs = [
    { cy: -0.38, len: 0.42, ang: 0.35, color: [45, 212, 191, 255] }, // Teal
    { cy: -0.15, len: 0.50, ang: 0.28, color: [245, 158, 11, 255] }, // Gold
    { cy: 0.10, len: 0.45, ang: 0.22, color: [45, 212, 191, 255] },  // Teal
    { cy: 0.30, len: 0.35, ang: 0.18, color: [245, 158, 11, 255] }   // Gold
  ];

  for (const lp of leafPairs) {
    const dy = ny - lp.cy;
    const ax = Math.abs(nx);
    if (ax > 0.02 && ax < lp.len) {
      const expectedY = -lp.ang * (ax - 0.02) + (ax * ax * 0.3);
      if (Math.abs(dy - expectedY) < 0.065 * (1 - ax / lp.len)) {
        return lp.color;
      }
    }
  }

  // Bottom "OHRSOM" bar
  if (ny >= 0.60 && ny <= 0.82 && Math.abs(nx) <= 0.75) {
    return [245, 158, 11, 240]; // Gold pill
  }

  return [bgR, bgG, bgB, 255];
}

// Generate Icons
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

const png192 = createPNG(192, 192, renderOhrsomPixel);
fs.writeFileSync(path.join(iconsDir, 'ohrsom-icon-192.png'), png192);
console.log('Created ohrsom-icon-192.png (' + png192.length + ' bytes)');

const png512 = createPNG(512, 512, renderOhrsomPixel);
fs.writeFileSync(path.join(iconsDir, 'ohrsom-icon-512.png'), png512);
console.log('Created ohrsom-icon-512.png (' + png512.length + ' bytes)');

fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), png192);
console.log('Created apple-touch-icon.png');
