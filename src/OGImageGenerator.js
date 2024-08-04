// src/OGImageGenerator.js
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

export const generateOgImage = async (node) => {
  try {
    const dataUrl = await toPng(node);
    saveAs(dataUrl, 'og-image.png');
    return dataUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};
