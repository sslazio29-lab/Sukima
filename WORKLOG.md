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

> 古い記録は `WORKLOG_ARCHIVE.md` に退避。通常再開時はこのファイルの最新10件だけ確認する。

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

## 2026-06-14  担当：Codex
- やったこと：化学の独立単元として `data/questions/化学_高分子化合物.json` を36問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。単量体/重合体、付加重合、縮合重合、代表的な付加重合体、PET、ナイロン、ポリアミド/ポリエステル、熱可塑性/熱硬化性樹脂、天然ゴムと加硫、デンプン、セルロース、タンパク質、DNA、生分解性プラスチック、高分子の分類を扱った。正答位置は 12/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 36/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：化学を続けるならここまでの化学単元の不正解選択肢・説明の弱点点検、または理論分野の補助単元追加へ進む。push 後に `npm.cmd run pages:check -- 化学 高分子化合物` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add chemistry polymers unit

## 2026-06-14  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_有機化学.json` を38問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。炭化水素、アルカン/アルケン/アルキン、異性体、官能基、アルコール、アルデヒド、カルボン酸、エステル、油脂、ベンゼン、フェノール、アニリン、サリチル酸、付加重合、縮合重合、アミノ酸、糖、デンプン確認、有機反応の整理を扱った。正答位置は 13/13/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 38/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：化学を続けるなら高分子化合物を独立単元にするか、理論/無機/有機の弱点補強に進む。push 後に `npm.cmd run pages:check -- 化学 有機化学` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add chemistry organic unit

## 2026-06-14  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_無機化学.json` を37問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。水素、酸素、塩素、ハロゲン、硫黄化合物、アンモニア、硝酸、炭素・ケイ素、アルカリ金属、炎色反応、アルカリ土類、アルミニウム、鉄・銅・銀・亜鉛のイオン確認、沈殿、気体発生、ソルベー法、接触法、鉄・アルミニウムの製錬を扱った。正答位置は 13/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 37/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：化学を続けるなら `化学_有機化学.json` へ進む。push 後に `npm.cmd run pages:check -- 化学 無機化学` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add chemistry inorganic unit

## 2026-06-13  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_化学平衡.json` を37問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。可逆反応、動的平衡、平衡定数、ルシャトリエの原理、濃度・圧力・温度・触媒の影響、電離平衡、pH、水のイオン積、緩衝液、溶解平衡、溶解度積、共通イオン効果、ICE表を扱った。正答位置は 13/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 33/2/2 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：化学を続けるなら無機化学・有機化学などへ進む。push 後に `npm.cmd run pages:check -- 化学 化学平衡` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add chemistry equilibrium unit

## 2026-06-13  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_熱化学と反応速度.json` を39問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。発熱/吸熱、各種反応熱、ヘスの法則、結合エネルギー、熱量計算、反応速度、濃度・温度・表面積・触媒の影響、活性化エネルギー、速度式、速度測定を扱った。正答位置は 13/13/13 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 33/5/1 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：化学を続けるなら `化学_化学平衡.json` へ進む。push 後に `npm.cmd run pages:check -- 化学 熱化学と反応速度` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add chemistry thermochemistry and reaction rates unit

## 2026-06-13  担当：Codex
- やったこと：新規セッション前の選択肢最適化として、化学5単元（物質の構成、化学結合、物質量と化学反応式、酸と塩基、酸化還元）の不自然・単元外に離れた不正解選択肢を見直した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。正答・問題数・単元順は維持し、不正解選択肢を同単元の近接概念や典型誤解へ寄せた。
- つまずき・失敗・回避策：初回監査で `化学_酸と塩基.json` に選択肢重複が出たため、ブレンステッド酸の誤答を `水溶液中でOH-を生じる物質` に修正した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：新規セッションでは `CLAUDE.md` と `WORKLOG.md` 最新部を読み、化学の続きとして `化学_熱化学と反応速度.json` または `化学_化学平衡.json` へ進む。
- コミット：Optimize chemistry distractors

## 2026-06-13  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_酸化還元.json` を33問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。酸化/還元の定義、酸化数、酸化剤/還元剤、半反応式、酸性条件での係数調整、イオン化傾向、金属の置換反応、電池、ダニエル電池、電気分解、ファラデー定数、酸化還元滴定、過マンガン酸イオン、計算問題での電子数確認を扱った。正答位置は 11/11/11 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 33/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：化学を続けるなら `化学_熱化学と反応速度.json` または `化学_化学平衡.json` へ進む。
- コミット：Add chemistry redox unit

## 2026-06-13  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_酸と塩基.json` を32問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。アレニウス/ブレンステッド・ローリーの定義、強酸/弱酸、pH、中和、塩、価数、中和滴定、ホールピペット/ビュレット、標準液、中和点/終点、指示薬、塩の加水分解、滴定計算の解法選択を扱った。正答位置は 11/11/10 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 32/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：化学を続けるなら `化学_酸化還元.json` へ進む。
- コミット：Add chemistry acids and bases unit
