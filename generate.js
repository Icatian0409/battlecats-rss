name: Update RSS

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update:
    runs-on: ubuntu-latest

    steps:
      - name: 下載程式碼
        uses: actions/checkout@v4

      - name: 設定 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24

      - name: 產生 RSS
        run: node generate.js

      - name: 儲存 RSS
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add feed.xml
          git commit -m "Update RSS" || echo "沒有新的 RSS 變更"
          git push
