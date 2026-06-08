# WORKLOG.md（作業記録）

> エージェントは作業のたびにここへ追記する（失敗・つまずきも残す）。
> 新しい記録を**上に**足す（最新が先頭）。大タスク終了時にこのファイルの肥大化も点検する。

## 記録フォーマット（コピーして使う）

```
## YYYY-MM-DD  担当：Codex / Claude Code
- やったこと：
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：
- つまずき・失敗・回避策：
- 次にやること：
- コミット：<ハッシュ or メッセージ>
```

---

## （ここから下に記録を追記）

## 2026-06-09  担当：Codex
- やったこと：2単元目として `data/questions/日本史_鎌倉時代.json` を追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。鎌倉時代は室町時代と同じ形式の5問入り単元として追加。
- つまずき・失敗・回避策：なし。`npm.cmd run check`、`node --check app.js`、`node --check scripts/generate-manifest.mjs` は成功。manifest は日本史配下に鎌倉時代・室町時代の2単元を含むことを確認。回答済保存キーは `sukima:${科目}:${単元}:answered` なので単元分離される。
- 次にやること：push 後に GitHub Pages 上で2単元目が表示されることを確認し、必要なら iPhone 実機で室町時代の進捗保持と単元別リセットを確認する。
- コミット：Add Kamakura history unit

## 2026-06-09  担当：Codex
- やったこと：依頼者による iPhone 実機確認結果を記録。科目選択、問題数選択、3択回答、解説表示、正解時の回答済保存、不正解時の再出題、単元リセットまで動作確認済み。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。初期公開版の主要フローは実機確認済みとして扱う。
- つまずき・失敗・回避策：なし。
- 次にやること：実教材用の問題 JSON を追加し、GitHub Actions の検証が赤くならないことを確認する。
- コミット：Record iPhone smoke test

## 2026-06-09  担当：Codex
- やったこと：依頼者が GitHub Pages を有効化した後、公開 URL の疎通を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 URL は `https://sslazio29-lab.github.io/Sukima/`。
- つまずき・失敗・回避策：通常権限の HTTP 確認はネットワーク制限で失敗したため、承認付きで確認。トップページ、`data/manifest.json`、サンプル問題 JSON はすべて HTTP 200。
- 次にやること：iPhone 実機で、科目選択から3択回答、正解時の回答済保存、不正解時の再出題、単元リセットまで手動確認する。
- コミット：Record Pages publication

## 2026-06-09  担当：Codex
- やったこと：GitHub リポジトリ `https://github.com/sslazio29-lab/Sukima.git` を `origin` に設定し、`main` を `origin/main` へ push。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。Pages 公開先は GitHub 側の public リポジトリ前提。
- つまずき・失敗・回避策：最初の push は Git の dubious ownership 保護で停止したため、コマンド単位で `safe.directory=G:/Sukima` を指定。ネットワーク制限は承認付き push で回避。GitHub Pages 設定は `gh` 未導入、API トークンなし、Git Credential Manager が非対話でタイムアウトしたため、この環境からは未実施。
- 次にやること：GitHub の Settings > Pages で `main` ブランチの `/root` を公開元に設定する。
- コミット：Record GitHub push

## 2026-06-09  担当：Codex
- やったこと：依頼者が編集した `AGENTS.md` の差分を確認し、読む文書の頻度を階層化する内容であることを確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。`CLAUDE.md` 毎回必読、`WORKLOG.md` 再開時参照、`SPEC.md` は実装時に該当箇所参照、引き継ぎ書は必要時参照という整理。
- つまずき・失敗・回避策：なし。
- 次にやること：GitHub public リポジトリを作成し、remote 設定後に push と Pages 公開設定を行う。
- コミット：Update agent reading rules

## 2026-06-09  担当：Codex
- やったこと：`git init` を実行。GitHub Pages 向けの最小静的アプリ（`index.html` / `styles.css` / `app.js`）、サンプル問題JSON、`manifest.json` 生成・検証スクリプト、GitHub Actions を追加。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。実装は既存仕様どおり、サーバーなし・3択のみ・localStorage に単元別の回答済位置を保存。
- つまずき・失敗・回避策：ブラウザ操作ツールはこのターンで露出しなかったため、まず `npm.cmd run check` で JSON 検証と manifest 生成を確認。HTTP サーバー起動は、システム Python 未導入・PowerShell `Start-Process` の PATH 重複エラー・Node REPL サンドボックス失敗で実ブラウザ確認まで届かず。
- 次にやること：GitHub の public リポジトリ remote を設定し、push 後に GitHub Pages 公開設定を行う。
- コミット：Initial Sukima static app

## 2026-XX-XX  担当：
- やったこと：（初期構築はまだ。SPEC.md §8 のステップ1から着手予定）
- 決めたこと／変更点：
- つまずき・失敗・回避策：
- 次にやること：`sukima/` 作成と git init（依頼者承認後）
- コミット：
