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
