import fs from "fs";
import path from "path";

// 1. Load the config file (assuming it's JSON)
const config = JSON.parse(fs.readFileSync("./rawTajadadConfig.json", "utf-8"));

config.homeSections.map((page) => {
  return page.sections.map((section) => {
    if (section.type === "banner") {
      let sectionData = section.data.banners.map((banner) => {
        let bannerImage = (banner.image = banner.image.ar);
        return { ...banner, [banner.image]: bannerImage };
      });
      return sectionData;
    } else {
      return section;
    }
  });
});

// 2. Modify the config as needed
const modifiedConfig = {
  ...config,
  rImages: {
    ...config.rImages,
    headerlogo: config.rImages.headerlogo.ar
      ? config.rImages.headerlogo.ar
      : config.rImages.headerlogo,
    intro: config.rImages.intro.ar
      ? config.rImages.intro.ar
      : config.rImages.intro,
  },
};

// 3. Save the modified config
const outputPath = path.join("TajadadConfig.json");
fs.writeFileSync(outputPath, JSON.stringify(modifiedConfig, null, 2));

console.log("✅ Config modified and saved to:", outputPath);
