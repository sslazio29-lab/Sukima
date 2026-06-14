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

> 古い記録は `WORKLOG_ARCHIVE.md` に退避。通常再開時はまず「現在の引き継ぎ」だけ確認し、必要時のみ直下の最新詳細ログを読む。
## 現在の引き継ぎ（毎回ここを最初に読む）
- 直近の主作業：候補抽出script `scripts/find-review-candidates.mjs` と skill `sukima-distractor-audit` を導入し、漢文で試用。上位候補から7ファイル・12問相当の弱い誤答を近接誤答へ修正済み。
- 現在の検証状態：`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 漢文 --limit 20` 成功。変更した漢文7単元は Pages で `ManifestStatus=200` / `JsonStatus=200` 確認済み。
- 次にやること：漢文を続けるなら残り候補の score 5 未修正項目を `fix/keep/watch` に分け、明確な `fix` だけ最小修正。化学に戻るなら `audit:candidates -- --subject 化学 --limit 80 --json` から始める。
- コンテキスト節約：再開時は `CLAUDE.md` とこのブロック、必要なら直下の最新詳細ログだけ読む。`WORKLOG_ARCHIVE.md`、`Sukima_引き継ぎ書_v2.md`、`SPEC.md` は必要時だけ読む。

## 2026-06-15  担当：Codex
- やったこと：トークン節約のため `WORKLOG.md` を最適化し、先頭に短い「現在の引き継ぎ」を追加。詳細ログは最新5件を残し、それ以前の8件を `WORKLOG_ARCHIVE.md` へ退避した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md`・`CLAUDE.md` は変更なし。再開時は `CLAUDE.md` と `WORKLOG.md` 先頭の引き継ぎブロックを優先し、必要時だけ詳細ログ・アーカイブ・仕様書を読む運用にする。
- つまずき・失敗・回避策：なし。`WORKLOG.md` は約17KBから約8KBへ縮小。
- 次にやること：作業が進むたびに引き継ぎブロックを短く更新し、詳細ログが肥大化したら同じ方式でアーカイブへ退避する。
- コミット：Optimize worklog context handoff

## 2026-06-15  担当：Codex
- やったこと：`sukima-distractor-audit` skill と `npm.cmd run audit:candidates -- --subject 漢文 --limit 30 --json` を使い、漢文の候補193件から上位だけを確認。明らかに弱い誤答を含む7ファイル・12問相当について、正答・問題数・順序を維持したまま不正解選択肢を近接誤答へ寄せた。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。候補抽出scriptは自動実行ではなく、依頼時にCodexが実行する監査補助として使用する。全問をLLM文脈へ読ませず、scriptがローカルで全件走査し、上位候補だけを人間/LLM監査対象にする運用とした。
- つまずき・失敗・回避策：PowerShellからNode標準入力へ日本語ファイル名を渡す経路で文字化けしたため、構造編集案をやめて `apply_patch` で対象選択肢だけを直接差し替えた。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 漢文 --limit 20` は成功。候補総数は193件のままだが、これは薄い解説や極端語などの「要確認」ヒューリスティックが残るためで、修正済み問題も別理由で候補に残ることがある。
- 次にやること：漢文を続けて監査するなら、残り候補のうち score 5 の未修正項目（例：使役・受身・比較[11]、否定・疑問・反語[27][31]、返り点と書き下し[32]など）を `fix/keep/watch` に分け、明確な `fix` だけ最小修正する。push 後に変更した漢文単元の Pages 配信確認を行う。
- コミット：Refine kanbun distractors from candidates

## 2026-06-15  担当：Codex
- やったこと：選択肢・解説の意味監査を効率化するため、候補抽出script `scripts/find-review-candidates.mjs` と npm script `audit:candidates` を追加。あわせて Codex skill `C:\Users\user\.codex\skills\sukima-distractor-audit` を作成し、候補優先で監査する手順を定義した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。`audit:candidates` はCIを落とす検査ではなく、選択肢長の偏り、極端語、汎用誤答、形式差、薄い解説、単元外語候補などからLLM監査対象を優先順位づけする補助ツールとした。
- つまずき・失敗・回避策：skill validator がUTF-8日本語を cp932 として読んで失敗したため、skill本文はASCIIで保存し直して `quick_validate.py` を通した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/find-review-candidates.mjs`、`npm.cmd run audit:candidates -- --subject 化学 --limit 20` は成功。
- 次にやること：実際の品質改善では `npm.cmd run audit:candidates -- --subject 化学 --limit 80 --json` などで候補を出し、`sukima-distractor-audit` skillの基準で `fix/keep/watch` に分けて最小修正する。
- コミット：Add review candidate extraction

## 2026-06-14  担当：Claude Code
- やったこと：化学の未実装単元として `化学_物質の状態.json`（33問）と `化学_溶液.json`（33問）を追加。`scripts/generate-manifest.mjs` の化学単元順に「物質の状態」「溶液」を挿入し、`manifest.json` を再生成（63ファイル）。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md`・`CLAUDE.md` は変更なし。物質の状態＝三態・状態変化・蒸気圧・沸騰・ボイル/シャルル/状態方程式・分圧・実在気体を扱う。溶液＝溶解・溶解度・濃度3種・束一的性質（蒸気圧降下/沸点上昇/凝固点降下/浸透圧）・コロイドを扱う。生物12単元は標準課程を網羅済みと判断し追加なし。両単元とも正答位置 11/11/11。
- つまずき・失敗・回避策：物質の状態が初回 13/11/9 に偏り audit が落ちたため、内容を変えずに2問の選択肢順を入れ替え 11/11/11 に調整。`npm run check`・`npm run audit` 成功。
- 次にやること：push 後に `npm run pages:check -- 化学 物質の状態` と `-- 化学 溶液` で配信確認。化学は主要範囲を概ね網羅。
- コミット：Add chemistry states-of-matter and solution units

## 2026-06-14  担当：Claude Code
- やったこと：全6科目61単元・2170問の全数監査を実施（正答の正誤、選択肢の自然さ・難易、解説の適否）。`npm run check`・`npm run audit` も実行し合格。WORKLOG肥大化（70件）を点検し、最新10件を残して旧記録をアーカイブへ退避した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md`・`CLAUDE.md` は変更なし。監査の結論＝内容誤り・正答ズレ・選択肢重複は0件で全単元良好。`manifest.json` は再生成しても差分なし（既に最新）。
- つまずき・失敗・回避策：Bashが日本語ファイル名を扱えずReadツールへ切替。軽微な気付き：化学_物質量の「限量反応物」は一般に「限定反応物」と呼ぶ語だが、解説で意味が明示されており誤りではないため変更せず。倫理の一部で別カテゴリの選択肢が混じるが、各問に真の近接誤答が1つ以上ありガイドライン違反ではない。
- 次にやること：依頼者が用語統一（限量→限定）を望む場合のみ最小修正。新規単元追加を続ける場合は既存の高品質を基準にする。
- コミット：Audit all units; trim WORKLOG

## 2026-06-14  担当：Codex
- やったこと：次工程として、Claude Code に化学単元の選択肢・解説監査を行わせ、その結果を後で Codex に差し戻す運用予定を記録した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。監査対象は主に選択肢の近さ、誤答の自然さ、解説の正確性・過不足。差し戻し時は `CLAUDE.md` と本 `WORKLOG.md` 最新部を読んで、指摘単位で最小修正する。
- つまずき・失敗・回避策：なし。
- 次にやること：Claude Code 監査結果が戻ったら、Codex 側で指摘を確認し、必要箇所だけ修正して `npm.cmd run check`、`npm.cmd run audit`、Pages確認まで行う。
- コミット：Record Claude audit handoff plan
