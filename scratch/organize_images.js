const fs = require('fs');
const path = require('path');

const projectsDir = path.join(process.cwd(), 'assets', 'images', 'projects');

const projectMappings = {
  'al-gouri': {
    facade: 'Gemini_Generated_Image_7st1qv7st1qv7st1.jpg',
    site: 'WhatsApp Image 2026-11-04 at 14.35.32.jpeg'
  },
  'al-yasmin': {
    facade: 'Gemini_Generated_Image_am29bbam29bbam29.jpg',
    site: 'WhatsApp Image 2026-11-04 at 14.35.32 (1).jpeg'
  },
  'al-narges': {
    facade: 'Gemini_Generated_Image_lg84cqlg84cqlg84.jpg',
    site: 'WhatsApp Image 2026-11-04 at 14.33.46.jpeg'
  },
  'al-orchid': {
    facade: 'Gemini_Generated_Image_seda9oseda9oseda.jpg',
    site: 'WhatsApp Image 2026-11-04 at 14.35.33.jpeg'
  },
  'al-tulip': {
    facade: 'Gemini_Generated_Image_xhdpc5xhdpc5xhdp.jpg',
    site: 'WhatsApp Image 2026-11-04 at 14.33.47.jpeg'
  },
  'al-zanbaq': {
    facade: 'WhatsApp Image 2026-11-04 at 14.35.33 (2).jpeg',
    site: 'WhatsApp Image 2026-11-04 at 14.35.33 (3).jpeg'
  },
  'al-lotus': {
    facade: 'WhatsApp Image 2026-11-04 at 14.35.33 (1).jpeg',
    site: 'WhatsApp Image 2026-11-04 at 14.35.32 (1).jpeg'
  }
};

for (const [slug, files] of Object.entries(projectMappings)) {
  const targetDir = path.join(projectsDir, slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory: ${targetDir}`);
  }

  const facadeSrc = path.join(projectsDir, files.facade);
  const facadeDest = path.join(targetDir, 'facade.jpg');
  if (fs.existsSync(facadeSrc)) {
    fs.copyFileSync(facadeSrc, facadeDest);
    console.log(`Copied ${files.facade} -> ${slug}/facade.jpg`);
  } else {
    console.error(`Missing facade source: ${facadeSrc}`);
  }

  const siteSrc = path.join(projectsDir, files.site);
  const siteDest = path.join(targetDir, 'site.jpg');
  if (fs.existsSync(siteSrc)) {
    fs.copyFileSync(siteSrc, siteDest);
    console.log(`Copied ${files.site} -> ${slug}/site.jpg`);
  } else {
    console.error(`Missing site source: ${siteSrc}`);
  }
}

console.log('Project images organized successfully.');
