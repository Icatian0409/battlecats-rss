const fs = require("fs");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>貓咪大戰爭｜台版活動</title>
    <link>https://battlecatsinfo.github.io/</link>
    <description>台版轉蛋與關卡活動</description>
    <language>zh-TW</language>

    <item>
      <title>RSS 測試</title>
      <description>如果你看到這篇，代表 RSS 產生器正常運作。</description>
      <guid>test-001</guid>
    </item>

  </channel>
</rss>`;

fs.writeFileSync("feed.xml", rss, "utf8");

console.log("RSS generated!");
