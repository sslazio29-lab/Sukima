# WORKLOG_ARCHIVE.md（作業記録アーカイブ）

> `WORKLOG.md` の肥大化対策として古い記録を退避したもの。通常作業では `WORKLOG.md` の最新記録を優先する。

---

## 2026-06-16  担当：Codex
- やったこと：`英語_多義語・文脈語彙.json` の残り候補3件（[17] deserves、[21] robust、[23] draws on）を解説補強。正答語義を明示し、誤答の方向（値段を下げる、乱暴/装飾的、物理的に絵を描く等）との違いが分かるようにした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。選択肢・正答・問題順は変更せず、説明品質だけを上げた。
- つまずき・失敗・回避策：なし。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --limit 80 --min-score 3` は成功し、英語全体の候補は 0/0。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 多義語・文脈語彙` で配信確認。
- コミット：Finish English vocabulary candidate cleanup

## 2026-06-16  担当：Codex
- やったこと：`英語_論理マーカー.json` の `audit:candidates` 候補10件（[0][1][2][5][7][8][10][13][17][21]）を解説補強。however、nevertheless、therefore、in fact、for this reason、on the other hand、rather、that is、unless、consequently について、正答の働きと前後文のつながりを明示した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。選択肢・正答・問題順は変更せず、説明品質だけを上げた。
- つまずき・失敗・回避策：なし。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 論理マーカー --limit 30 --min-score 3` は成功し、候補は 0/0。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 論理マーカー` で配信確認。続けるなら `多義語・文脈語彙` の残り3候補へ進む。
- コミット：Expand English logical marker explanations

## 2026-06-16  担当：Codex
- やったこと：前回に続き、`英語_構文解釈.json` の残り12候補（[10][11][12][13][15][17][18][19][20][21][22][23]）を補強。not because A but because B、so ... that 倒置、that 節の同格/目的語、whatever 譲歩、what 節主語、remain to be seen、such ... that、less A than B、Only after 倒置、as if、To A is to B、Not that を、正答理由と典型誤読が分かる解説へ直した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。基本は解説補強。候補 [15][18] は選択肢の表記だけをそろえ、正答位置と意味は維持した。
- つまずき・失敗・回避策：候補 [15] は正答だけに英文断片が残るヒューリスティックが出たため、選択肢を「what節全体 / 挿入句 / 補語」に統一した。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 構文解釈 --limit 30 --min-score 3` は成功し、候補は 0/0。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 構文解釈` で配信確認。続けるなら `論理マーカー`・`多義語・文脈語彙` の上位候補へ進む。
- コミット：Finish English syntax candidate cleanup

## 2026-06-16  担当：Codex
- やったこと：前回に続き、`英語_構文解釈.json` の `audit:candidates` 残り score 3 候補から先頭8問（[1]〜[8]）の解説を補強。not until、all the more、the last person to do、相関比較、There is no -ing、No sooner、whether 節、仮定法倒置について、正答訳と誤読ポイントを明示した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。選択肢・正答・問題順は変更せず、説明品質だけを上げた。
- つまずき・失敗・回避策：なし。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 構文解釈 --limit 30 --min-score 3` は成功。候補は20件から12件へ減少。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 構文解釈` で配信確認。続けるなら残り12件を補強する。
- コミット：Expand English syntax explanations

## 2026-06-16  担当：Codex
- やったこと：`sukima-distractor-audit` skill と `npm.cmd run audit:candidates -- --subject 英語 --limit 80 --min-score 3 --json` を使い、英語候補35件を確認。上位の `英語_構文解釈.json` score 5 候補4問（[9][14][15][18]）について、正答・問題順・正答位置を維持したまま、弱い誤答と薄い解説を補強した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。今回は新規単元追加ではなく、既存英語の品質補強。`audit:candidates` は優先順位ツールなので、score 3 の薄い解説候補は残した。
- つまずき・失敗・回避策：初回の一括 `apply_patch` は末尾カンマの文脈差で失敗したため、該当箇所を確認して小さく当て直した。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 構文解釈 --limit 20 --min-score 3` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 構文解釈` で配信確認。続けるなら `構文解釈` の残り score 3 候補を解説補強する。
- コミット：Refine English syntax candidate explanations

## 2026-06-15  担当：Codex
- やったこと：英語の続きとして `data/questions/英語_和訳判断.json` を24問で追加し、`scripts/generate-manifest.mjs` の英語単元順に「和訳判断」を追加。not so much A as B、倒置、anything but、too ... to、not until、no more A than B、譲歩、非制限用法 which などを、直訳ではなく文脈上の訳として選ぶ形式にした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。得意な受験生向けに、誤答は露骨な外れではなく、否定・比較・譲歩・係り先・焦点の典型的な読み違いへ寄せた。24問、正答位置は 8/8/8。
- つまずき・失敗・回避策：初回 `npm.cmd run audit` で正答位置 19/4/1 の偏りが出たため、内容は維持して11問の選択肢順だけを調整した。`audit:candidates` で11問の薄い解説候補が出たため、該当解説に正答訳を明示して補強し、再実行で 0/0 になった。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 和訳判断` で配信確認。
- コミット：Add English translation judgment unit

## 2026-06-15  担当：Codex
- やったこと：英語の続きとして `data/questions/英語_英作文誤文訂正.json` を24問で追加し、`scripts/generate-manifest.mjs` の英語単元順に「英作文誤文訂正」を追加。現在完了、感情分詞、worth -ing、仮定法、explain/reply/object/suggest/ask/tell など、和文英訳で出やすい近接ミスを3択で判断する形式にした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。単純暗記ではなく、得意な受験生向けに「正しい英文」と「典型的だが不自然な誤文」の差を見抜く単元にした。24問、正答位置は 8/8/8。
- つまずき・失敗・回避策：初回 `npm.cmd run audit` で正答位置 11/10/3 の偏りが出たため、内容は維持して5問の選択肢順だけを調整した。`audit:candidates` で8問の薄い解説候補が出たため、該当解説に正答英文を明示して補強し、再実行で 0/0 になった。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 英作文誤文訂正` で配信確認。英語を続けるなら `英語_和訳判断.json` へ進む。
- コミット：Add English composition error correction unit

## 2026-06-15  担当：Codex
- やったこと：英語の続きとして `data/questions/英語_多義語・文脈語彙.json` を24問で追加し、`scripts/generate-manifest.mjs` の英語単元順に「多義語・文脈語彙」を追加。address / significant / issue / sound / assume / implication / hold / term / challenge / robust などを、単語の一語訳ではなく文脈から意味判断する形式にした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。得意な受験生向けに、語義の暗記より「文脈中でどの意味か」を選ぶ問題にした。24問、正答位置は 7/9/8。
- つまずき・失敗・回避策：初回 `npm.cmd run audit` で正答位置 10/11/3 の偏りが出たため、内容は維持して5問の選択肢順だけを調整した。再実行で `npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 多義語・文脈語彙 --limit 10` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 多義語・文脈語彙` で配信確認。新規セッションで英語を続けるなら `英語_英作文誤文訂正.json` または `英語_和訳判断.json` へ進む。
- コミット：Add English polysemy vocabulary unit

## 2026-06-15  担当：Codex
- やったこと：英語の続きとして `data/questions/英語_論理マーカー.json` を24問で追加し、`scripts/generate-manifest.mjs` の英語単元順に「論理マーカー」を追加。however / nevertheless / therefore / by contrast / moreover / in fact / as a result / whereas など、読解中の逆接・譲歩・結果・対比・言い換え・要約を判断する形式にした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。短文中の接続表現を単なる訳語暗記ではなく、前後関係の判断として問う。24問、正答位置は 8/8/8。
- つまずき・失敗・回避策：初回 `npm.cmd run audit` で4問の解説短すぎ指摘が出たため、該当解説を補強した。再実行で `npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 論理マーカー --limit 10` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 論理マーカー` で配信確認。英語を続けるなら `英語_多義語・文脈語彙.json` へ進む。
- コミット：Add English logical markers unit

## 2026-06-15  担当：Codex
- やったこと：英語の続きとして `data/questions/英語_語法・前置詞.json` を24問で追加し、`scripts/generate-manifest.mjs` の英語単元順に「語法・前置詞」を追加。charge with / familiar with / consist of / result in/from / apply to/for / apologize to/for など、空所補充で語法の向きと前置詞を問う形式にした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。得意な受験生向けに、誤答は単なる無関係語ではなく、別語法ならあり得る前置詞・形へ寄せた。初回と同じく24問、正答位置は 8/8/8。
- つまずき・失敗・回避策：日本語ファイル名をNode標準入力へ渡す経路は使わず、`apply_patch` で追加した。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --unit 語法・前置詞 --limit 20` は成功。候補抽出は薄い解説中心の score 2 が多く、追加単元としては通過。
- 次にやること：push 後に `npm.cmd run pages:check -- 英語 語法・前置詞` で配信確認。英語を続けるなら `英語_論理マーカー.json` へ進む。
- コミット：Add English usage and prepositions unit

## 2026-06-15  担当：Codex
- やったこと：未実装科目だった英語の初回単元として `data/questions/英語_構文解釈.json` を24問で追加し、`scripts/generate-manifest.mjs` に英語単元順を追加。得意な受験生向けに、強調構文、倒置、譲歩、比較、名詞節、仮定法、慣用構文などを短文解釈で問う形式にした。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。英語は単純な単語暗記ではなく、3択で「構文・意味・論理を切る」実践型に寄せる。初回単元は24問、正答位置は 8/8/8。
- つまずき・失敗・回避策：PowerShellからNode標準入力へ日本語ファイル名を渡してJSONを一括生成しようとして、前回同様に `??_????.json` へ文字化けしたため中止。ファイルは作成されなかった。以後、該当経路は使わず `apply_patch` で追加した。`npm.cmd run check`、`npm.cmd run audit`、`npm.cmd run audit:candidates -- --subject 英語 --limit 20` は成功。
- 次にやること：英語を続けるなら `英語_語法・前置詞.json`、`英語_論理マーカー.json`、`英語_多義語・文脈語彙.json` を追加する。push 後に `npm.cmd run pages:check -- 英語 構文解釈` で配信確認する。
- コミット：Add English syntax interpretation unit

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

## 2026-06-13  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_物質量と化学反応式.json` を30問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。物質量、アボガドロ定数、モル質量、標準状態の気体体積、モル濃度、反応式係数、質量計算の手順、過不足、限量反応物、収率、質量パーセント濃度、希釈、気体の状態方程式、有効数字、計算問題での解法選択を扱った。正答位置は 10/10/10 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 30/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：化学を続けるなら `化学_酸と塩基.json` または `化学_酸化還元.json` へ進む。
- コミット：Add chemistry amount of substance and equations unit

## 2026-06-13  担当：Codex
- やったこと：化学の続きとして `data/questions/化学_化学結合.json` を31問で追加し、`scripts/generate-manifest.mjs` の化学単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。価電子、イオン結合、イオン結晶、共有結合、配位結合、金属結合、金属の性質、分子結晶、共有結合結晶、ダイヤモンド/黒鉛、電気陰性度、極性、水素結合、分子間力、結晶の種類、結合から性質を判断する方針を扱った。正答位置は 11/10/10 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 31/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：化学を続けるなら `化学_物質量と化学反応式.json` へ進む。
- コミット：Add chemistry chemical bonding unit

## 2026-06-13  担当：Codex
- やったこと：化学の最初の単元として `data/questions/化学_物質の構成.json` を33問で追加し、`scripts/generate-manifest.mjs` に化学の単元順を新設して `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。純物質/混合物、単体/化合物、元素と単体、分離操作、原子構造、原子番号/質量数、同位体、イオン、電子殻、価電子、周期表、アルカリ金属/ハロゲン、金属/非金属、物理変化/化学変化、化学式、反応式、計算問題での量の整理を扱った。正答位置は 11/11/11 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 33/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：化学を続けるなら `化学_化学結合.json` または `化学_物質量と化学反応式.json` へ進む。
- コミット：Add chemistry structure of matter unit

## 2026-06-13  担当：Codex
- やったこと：生物の追加単元として `data/questions/生物_分類と生物多様性.json` を34問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。五界説、モネラ界、細菌/古細菌、シアノバクテリア、原生生物、菌類、地衣類、コケ/シダ/裸子/被子植物、単子葉/双子葉、無脊椎動物、節足動物、軟体動物、脊椎動物各類、生物多様性の3レベル、外来種、絶滅危惧種、レッドリスト、生息域内/外保全、生態系サービスを扱った。正答位置は 12/11/11 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 34/0/0 に偏り、1問の解説が短いと出たため、内容は維持して選択肢順を調整し、解説を補った。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物は主要単元と補助単元がかなり埋まったため、続けるなら小単元化より他科目へ進むのが効率的。
- コミット：Add biology classification and biodiversity unit

## 2026-06-13  担当：Codex
- やったこと：生物の追加単元として `data/questions/生物_実験・バイオテクノロジー.json` を36問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。PCR、プライマー、耐熱性DNAポリメラーゼ、電気泳動、制限酵素、粘着末端、DNAリガーゼ、プラスミド、形質転換、DNA鑑定、シーケンサー、CRISPR-Cas9、遺伝子治療、遺伝子検査、クローン、iPS/ES細胞、モノクローナル抗体、ELISA、無菌操作、対照実験、再現性、倫理的配慮を扱った。正答位置は 12/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 36/0/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `分類と生物多様性` を補助単元として追加できるが、主要範囲はかなり埋まっている。
- コミット：Add biology experiments and biotechnology unit

## 2026-06-13  担当：Codex
- やったこと：生物の追加単元として `data/questions/生物_体内環境と免疫.json` を37問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。体内環境、恒常性、血液成分、組織液/リンパ液、腎臓と尿生成、ADH、肝臓、血糖調節、自然免疫/獲得免疫、B細胞/T細胞、体液性免疫/細胞性免疫、ワクチン、血清療法、アレルギー、自己免疫、HIV、ABO式血液型、輸血を扱った。正答位置は 13/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 31/6/0 に偏り、2問の解説が短いと出たため、内容は維持して選択肢順を調整し、解説を補った。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら、実験・バイオテクノロジー系を別単元として追加する余地がある。
- コミット：Add biology internal environment and immunity unit

## 2026-06-13  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_進化と系統.json` を39問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。進化の定義、共通祖先、化石、相同/相似/痕跡器官、分子系統、突然変異、自然選択、遺伝的浮動、びん首効果、創始者効果、遺伝子流動、種分化、地理的/生殖的隔離、適応放散、収れん進化、系統樹、単系統群、外群、二名法、分類階級、3ドメイン説、種概念、中立進化説、分子時計を扱った。正答位置は 13/13/13 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 17/16/6 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物をさらに続けるなら、未追加の補助単元を切るより先に、他科目へ進むか確認する。
- コミット：Add biology evolution and phylogeny unit

## 2026-06-13  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_生態系.json` を37問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。生態系、個体群、生物群集、生産者/消費者/分解者、食物連鎖/食物網、栄養段階、エネルギー流、物質循環、炭素循環、窒素循環、個体群密度、環境収容力、種間関係、遷移、バイオーム、生物多様性、生態系サービスを扱った。正答位置は 13/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 36/1/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_進化と系統.json` へ進む。
- コミット：Add biology ecosystem unit

## 2026-06-13  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_植物の環境応答.json` を31問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。植物ホルモン、オーキシン、ジベレリン、アブシシン酸、エチレン、サイトカイニン、気孔、蒸散、フィトクロム、光周性、短日/長日植物、春化、休眠、屈性/傾性、就眠運動、フォトトロピンを扱い、動物の神経・内分泌調節との違いを重視した。正答位置は 11/10/10 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 30/1/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_生態系.json` または `生物_進化と系統.json` へ進む。
- コミット：Add biology plant environmental response unit

## 2026-06-13  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_動物の反応と調節.json` を40問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。受容器/効果器、ニューロン、活動電位、シナプス、反射、中枢神経、自律神経、ホルモン、血糖調節、恒常性、筋収縮、感覚器を扱い、神経系と内分泌系の違いを重視した。正答位置は 13/14/13 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 38/2/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_植物の環境応答.json` へ進む。
- コミット：Add biology animal response and regulation unit

## 2026-06-13  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_生殖と発生.json` を35問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。有性/無性生殖、体細胞分裂、減数分裂、交叉、精子形成/卵形成、受精、多精拒否、卵割、桑実胚、胞胚、原腸形成、三胚葉、神経胚、誘導、形成体、細胞分化、母性効果遺伝子、ホメオティック遺伝子、アポトーシスを扱った。正答位置は 11/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 31/4/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_動物の反応と調節.json` または `生物_植物の環境応答.json` へ進む。
- コミット：Add biology reproduction and development unit

## 2026-06-13  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_遺伝.json` を32問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。メンデル遺伝、対立遺伝子、遺伝子型/表現型、優性/劣性、分離の法則、検定交雑、不完全優性、共優性、ABO式血液型、独立の法則、連鎖と組換え、伴性遺伝、家系図、ハーディ・ワインベルグ平衡を扱った。正答位置は 10/11/11 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 27/4/1 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_生殖と発生.json` へ進む。
- コミット：Add biology inheritance unit

## 2026-06-12  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_遺伝情報とDNA.json` を36問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。DNA構造、相補的塩基対、半保存的複製、転写、翻訳、mRNA/tRNA/rRNA、コドン、エキソン/イントロン、スプライシング、突然変異、遺伝子発現、PCR、制限酵素、プラスミドまでを扱った。正答位置は 12/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 31/5/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_生殖と発生.json` または `生物_遺伝.json` へ進む。
- コミット：Add biology genetic information and DNA unit

## 2026-06-12  担当：Codex
- やったこと：生物の続きとして `data/questions/生物_代謝とエネルギー.json` を35問で追加し、`scripts/generate-manifest.mjs` の生物単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。代謝、同化/異化、ATP、細胞呼吸、解糖系、クエン酸回路、電子伝達系、発酵、光合成、酵素調節、独立/従属栄養を扱い、物質変化とエネルギー変換を対応させることを重視した。正答位置は 11/12/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 27/8/0 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_遺伝情報とDNA.json` へ進む。
- コミット：Add biology metabolism and energy unit

## 2026-06-12  担当：Codex
- やったこと：生物の最初の単元として `data/questions/生物_細胞と分子.json` を37問で追加し、`scripts/generate-manifest.mjs` に生物の単元順を新設して `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。最初の生物単元は、細胞説、原核/真核、細胞小器官、細胞膜、タンパク質・糖質・脂質・核酸、酵素、ATP、膜輸送、顕微鏡までを扱う土台単元にした。正答位置は 12/13/12 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 26/9/2 に偏ったため、内容は維持して選択肢順だけを調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：生物を続けるなら `生物_代謝とエネルギー.json` または `生物_遺伝情報とDNA.json` へ進む。
- コミット：Add biology cells and molecules unit

## 2026-06-12  担当：Codex
- やったこと：漢文の追加単元として `data/questions/漢文_故事成語・重要語.json` を40問で追加し、`scripts/generate-manifest.mjs` の漢文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。故事成語は `矛盾`、`蛇足`、`推敲`、`漁夫の利`、`守株`、`五十歩百歩`、`朝三暮四`、`杞憂`、`助長`、`背水の陣` などを、重要語は `寡人`、`臣`、`子`、`君`、`天下`、`百姓`、`社稷`、`仁/義/利` などを扱い、字面だけで誤読しやすい点を重視した。正答位置は 14/13/13 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 29/9/2 に偏ったため、内容は維持して選択肢順だけを調整した。Node標準入力で日本語文字列が文字化けしたため、PowerShellの `ConvertFrom-Json` で機械的に並び替えた。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：漢文は主要な読み・句法・重要語単元が揃ったため、次は生物へ進む。最初の生物単元候補は `生物_細胞と分子.json`。
- コミット：Add kanbun idioms and key terms unit

## 2026-06-12  担当：Codex
- やったこと：漢文の続きとして `data/questions/漢文_重要句形.json` を41問で追加し、`scripts/generate-manifest.mjs` の漢文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。`以A為B`、`以為`、`所以`、`所謂`、`何以`、`無以/有以`、`不得已`、`得無〜乎`、`何如/奈何/如之何`、`是以/故/然則`、`乃/則/而`、`且夫/夫/蓋` など、本文読解で論理や判断を取り違えやすい句形を扱った。正答位置は 14/14/13 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 18/15/8 に偏ったため、内容は維持して5問の選択肢順だけを入れ替えた。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：漢文を続けるなら、既存6単元の横断確認または漢文読解で使う故事成語・重要語へ進む。
- コミット：Add kanbun key sentence patterns unit

## 2026-06-12  担当：Codex
- やったこと：漢文の続きとして `data/questions/漢文_仮定・限定・累加.json` を40問で追加し、`scripts/generate-manifest.mjs` の漢文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。仮定は `若/如/苟/使/縦`、限定は `唯/只/独/耳/而已`、累加は `亦/又/且/況/尚` を扱い、同じ字が別句法で読まれる場合の識別を重視した。正答位置は 12/14/14 に調整した。
- つまずき・失敗・回避策：Nodeへ日本語ファイル名を渡す確認コマンドが文字化けしたため、PowerShellの `ConvertFrom-Json` で確認した。初回監査で正答位置が 17/12/11 に偏ったため、内容は維持して選択肢順だけを入れ替えた。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：漢文を続けるなら `漢文_重要句形.json` など、複数単元の総合確認へ進む。
- コミット：Add kanbun conditional limiting additive unit

## 2026-06-12  担当：Codex
- やったこと：漢文の続きとして `data/questions/漢文_使役・受身・比較.json` を34問で追加し、`scripts/generate-manifest.mjs` の漢文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。使役は `使/令`、受身は `見/被/為所`、比較は `如/若/不如/莫如/孰与/与其不如/於/勝於` を扱い、動作や比較の向きが逆にならないことを重視した。正答位置は 12/11/11 に調整した。
- つまずき・失敗・回避策：初回監査で正答位置が 26/5/3 に偏り、最後の総合問題に `画数`・`行数` という安直な外れ選択肢が残っていたため、同一単元内の近い誤りに差し替えたうえで選択肢順を均した。`npm.cmd run check`、`npm.cmd run audit`、単元内の安直語スキャンは成功。
- 次にやること：漢文を続けるなら `漢文_仮定・限定・累加.json` または `漢文_重要句形.json` へ進む。
- コミット：Add kanbun causative passive comparison unit

## 2026-06-12  担当：Codex
- やったこと：漢文の続きとして `data/questions/漢文_否定・疑問・反語.json` を36問で追加し、`scripts/generate-manifest.mjs` の漢文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。否定は `不/非/無/未/莫/勿`、二重否定、疑問・反語は `何/豈/安/悪/焉/不亦/無乃/敢不` などを扱い、書き下しと訳の向きがずれないことを重視した。正答位置は 12/12/12 に調整した。
- つまずき・失敗・回避策：初回は正答位置が偏ったため、選択肢順を機械的に均した。反語・疑問の重点箇所を見直し、`無乃〜乎` の解説から誤学習につながりうる余計な読み説明を削った。
- 次にやること：漢文を続けるなら `漢文_使役・受身・比較.json` へ進む。
- コミット：f7722f3 Add kanbun negation and rhetorical questions unit

## 2026-06-12  担当：Codex
- やったこと：漢文の続きとして `data/questions/漢文_再読文字.json` を33問で追加し、`scripts/generate-manifest.mjs` の漢文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。再読文字は `未`、`将/且`、`当/応`、`須`、`宜`、`猶` などを中心に、書き下しと現代語訳の対応まで扱う方針にした。正答位置は 11/11/11 に調整した。
- つまずき・失敗・回避策：初回は正答位置が偏ったため、選択肢順を機械的に均した。安直な外れ選択肢をスキャンし、`画数` や見た目系の選択肢を近接概念へ差し替えた。
- 次にやること：漢文を続けるなら `漢文_否定・疑問・反語.json` へ進む。
- コミット：e3d84e3 Add kanbun rereading characters unit

## 2026-06-12  担当：Codex
- やったこと：漢文を開始し、最初の単元 `data/questions/漢文_返り点と書き下し.json` を33問で追加した。`scripts/generate-manifest.mjs` に漢文の単元順を追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。漢文は返り点、書き下し、送り仮名、置き字、再読文字の入口を扱い、句法へ進む前の読み順の土台を固める方針にした。正答位置は 11/11/11 に調整した。
- つまずき・失敗・回避策：初回は31問かつ正答位置が偏ったため、2問追加して33問にし、選択肢順を機械的に均した。安直な外れ選択肢をスキャンし、`画数` を近接概念に差し替えた。
- 次にやること：漢文を続けるなら `漢文_再読文字.json` または `漢文_否定・疑問・反語.json` へ進む。
- コミット：a6ee264 Add kanbun return marks unit

## 2026-06-12  担当：Codex
- やったこと：古文にまだ残っていた本文読解への接続単元として `data/questions/古文_読解基礎.json` を36問で追加し、`scripts/generate-manifest.mjs` の古文単元順と `data/manifest.json` を更新した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。古文は漢文へ進む前に、主語省略、会話、指示語、和歌の役割、敬語・助動詞・古典常識を使った読解判断を扱う `読解基礎` を追加する方針にした。正答位置は 12/12/12 に調整した。
- つまずき・失敗・回避策：初回は35問かつ正答位置が偏ったため、1問追加して36問にし、選択肢順を機械的に均した。安直な外れ選択肢もスキャンして修正した。
- 次にやること：古文の主要単元は一通り揃ったため、次は漢文へ進む。
- コミット：4f26487 Add classical Japanese reading basics unit

## 2026-06-12  担当：Codex
- やったこと：今後の作問・修正ルールを `QUESTION_GUIDELINES.md` に整理し、古文の新単元 `data/questions/古文_文学史.json` を42問で追加した。`data/manifest.json` も再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。文学史は作品名・時代・作者・ジャンルの対応を中心に、冒頭表現や代表作品の見分けどころも扱う。正答位置は 14/14/14 に調整した。
- つまずき・失敗・回避策：初回作成時に文学史の正答位置が偏ったため、選択肢順を機械的に均した。PowerShell から Node へ日本語ファイル名・日本語キーを渡す際に文字化けしたため、ファイル名は PowerShell 側で解決し、JSON キーは Unicode エスケープで扱った。
- 次にやること：古文を続けるなら、既存7単元の品質確認または必要に応じて読解テーマ別単元へ進む。
- コミット：7773fb3 Add classical Japanese literary history unit

## 2026-06-11  担当：Codex
- やったこと：古文6単元の選択肢を再チェックし、AI的に安直な不正解（別時代語、駄洒落、文字数・ページ番号系など）を中心に差し替えた。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。不正解は「一目でネタと分かる語」ではなく、同じ古文領域の近接概念・誤訳・紛らわしい分類へ寄せる方針にした。古典常識の `牛車` は、古文・国語文脈で一般的な `ぎっしゃ` に修正した。
- つまずき・失敗・回避策：近接選択肢へ寄せすぎて一時的に選択肢重複が発生したため、`npm.cmd run audit` と独自スキャンで修正した。
- 次にやること：古文を続けるなら `古文_文学史.json`。以後の作問では、不正解も受験知識として意味のある近接誤答にする。
- コミット：0679a3c Improve classical Japanese distractors

## 2026-06-11  担当：Codex
- やったこと：古文でこれまで作成した6単元の選択肢を横断確認し、`古文_助動詞.json`、`古文_和歌と修辞.json`、`古文_古典常識.json` の一部を修正した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。伝聞・推定「なり」のラ変型例外を反映し、和歌の「切れ字」名称暗記寄りの設問を詠嘆の働き確認へ変更した。古典常識では、別時代・別科目すぎる外れ選択肢を、古文読解に近い選択肢へ差し替えた。
- つまずき・失敗・回避策：既存監査は通っていたため、機械監査だけでは拾えない「選択肢の学習効率」と「例外の正確さ」を重点確認した。全問の大規模リライトは使用制限前のリスクが高いため、明確に改善効果がある箇所に絞った。
- 次にやること：必要なら古文の残り単元 `古文_文学史.json` へ進む。先に続ける場合も、選択肢は同一分野内の紛らわしいが誤りと分かるものを優先する。
- コミット：77e89a8 Refine classical Japanese choices

## 2026-06-11  担当：Codex
- やったこと：古文の続きとして `data/questions/古文_古典常識.json` を44問で追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。古典常識は、平安貴族の恋愛・住居・装束・宮中・陰陽道・仏教観・年中行事・呼称を扱い、本文中の人物関係や行動理由を読める知識に寄せた。
- つまずき・失敗・回避策：前回方針どおり、Pages確認だけの追加コミットは作らず、単元追加コミットと最終報告で公開確認まで扱う。品質優先のため、ローカル検証と公開確認は維持する。
- 次にやること：`npm.cmd run check`、`npm.cmd run audit`、push後の `npm.cmd run pages:check -- 古文 古典常識` を行う。その後、古文は `古文_文学史.json` へ進む。
- コミット：Add classical Japanese cultural context unit

## 2026-06-11  担当：Codex
- やったこと：古文の続きとして `data/questions/古文_和歌と修辞.json` を39問で追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。和歌と修辞は、短歌の基本、句切れ、枕詞、序詞、掛詞、縁語、本歌取り、歌枕、体言止め、倒置、季節の景物を扱い、技法名だけでなく景物と心情の重なりを読む方針にした。
- つまずき・失敗・回避策：前回方針どおり、Pages確認だけの追加コミットは作らず、単元追加コミットと最終報告で公開確認まで扱う。品質優先のため、ローカル検証と公開確認は維持する。
- 次にやること：`npm.cmd run check`、`npm.cmd run audit`、push後の `npm.cmd run pages:check -- 古文 和歌と修辞` を行う。その後、古文は `古文_古典常識.json` へ進む。
- コミット：Add classical Japanese waka rhetoric unit

## 2026-06-11  担当：Codex
- やったこと：古文の続きとして `data/questions/古文_助詞.json` を41問で追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。助詞は係り結び、格助詞、接続助詞、副助詞、終助詞を扱い、訳に直結する `ば`、`ど/ども`、`とも`、`だに/すら/さへ`、`な〜そ`、`ばや/なむ/てしがな/もがな` などを重視した。
- つまずき・失敗・回避策：前回方針どおり、Pages確認だけの追加コミットは作らず、単元追加コミットと最終報告で公開確認まで扱う。品質優先のため、ローカル検証と公開確認は維持する。
- 次にやること：`npm.cmd run check`、`npm.cmd run audit`、push後の `npm.cmd run pages:check -- 古文 助詞` を行う。その後、古文は `古文_和歌と修辞.json` へ進む。
- コミット：Add classical Japanese particles unit

## 2026-06-11  担当：Codex
- やったこと：古文の続きとして `data/questions/古文_敬語.json` を38問で追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。敬語は尊敬語・謙譲語・丁寧語の定義だけでなく、敬意の方向、頻出敬語動詞、本動詞と補助動詞、二方向への敬意を三択と解説で確認する方針にした。
- つまずき・失敗・回避策：前回方針どおり、Pages確認だけの追加コミットは作らず、単元追加コミットと最終報告で公開確認まで扱う。品質優先のため、ローカル検証と公開確認は維持する。
- 次にやること：`npm.cmd run check`、`npm.cmd run audit`、push後の `npm.cmd run pages:check -- 古文 敬語` を行う。その後、古文は `古文_助詞.json` へ進む。
- コミット：Add classical Japanese honorifics unit

## 2026-06-11  担当：Codex
- やったこと：古文の続きとして `data/questions/古文_助動詞.json` を43問で追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。助動詞は活用表暗記だけでなく、接続・主語・文脈による識別を重視し、`ず`、`き/けり`、`つ/ぬ`、`たり/り`、`む`、`べし/まじ`、`る/らる`、`す/さす/しむ`、`らむ/けむ`、`なり/めり/らし`、`まし` などを扱う。
- つまずき・失敗・回避策：作業効率改善として、Pages確認記録だけの追加コミットを原則やめ、単元追加コミットと最終報告で公開確認まで扱う運用に変更。品質優先のため、ローカル検証と公開確認は維持する。
- 次にやること：`npm.cmd run check`、`npm.cmd run audit`、構文確認、push後の `npm.cmd run pages:check -- 古文 助動詞` を行う。その後、古文は `古文_敬語.json` へ進む。
- コミット：Add classical Japanese auxiliary verbs unit

## 2026-06-11  担当：Codex
- やったこと：`古文 / 重要古語` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `古文 / 重要古語` 39問を含む状態。
- つまずき・失敗・回避策：push直後の `pages:check` は旧 manifest を検出し、科目 `古文` が未反映だったため45秒待って再確認。反映後は `data/questions/古文_重要古語.json` が HTTP 200、39問で配信された。
- 次にやること：古文は `古文_助動詞.json` へ進む。
- コミット：Record classical Japanese vocabulary Pages verification

## 2026-06-11  担当：Codex
- やったこと：別科目として古文を開始し、最初の単元 `data/questions/古文_重要古語.json` を39問で追加。`scripts/generate-manifest.mjs` に古文の単元順（重要古語、助動詞、敬語、助詞、和歌と修辞、古典常識、文学史）を追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。古文はまず読解失点に直結する「重要古語」から始め、現代語と意味がずれる語、文脈で訳し分ける語、呼応表現を三択と解説で定着させる方針にした。
- つまずき・失敗・回避策：作成時点から正解位置を1/2/3に13/13/13で配分したため、監査の偏り修正は不要だった。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 古文 重要古語` でGitHub Pages上のmanifestとJSON配信を確認する。その後、古文は `古文_助動詞.json` へ進む。
- コミット：Add classical Japanese key vocabulary unit

## 2026-06-11  担当：Codex
- やったこと：`平成時代` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest の日本史順は `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期 > 明治時代前期 > 明治時代後期 > 大正時代 > 昭和時代前期 > 昭和時代後期 > 平成時代`。
- つまずき・失敗・回避策：push直後の `pages:check` は旧 manifest を検出したため45秒待って再確認。反映後は `data/questions/日本史_平成時代.json` が HTTP 200、34問で配信された。
- 次にやること：日本史の通史は現代まで一通り追加済み。必要なら近現代の細分化、または別科目へ進む。
- コミット：Record Heisei Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_平成時代.json` を34問で追加し、`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。平成時代は平成開始、バブル崩壊、PKO協力法、55年体制の終わり、選挙制度改革、阪神・淡路大震災、地下鉄サリン事件、京都議定書、小泉改革、リーマン・ショック、政権交代、東日本大震災、アベノミクス、安保法制、平成の終わりまでを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1に偏ったため、8問の選択肢順だけを入れ替えて1/2/3を12/11/11に修正。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 平成時代` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add Heisei history unit

## 2026-06-11  担当：Codex
- やったこと：`昭和時代後期` 追加と単元表示順修正後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest の日本史順は `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期 > 明治時代前期 > 明治時代後期 > 大正時代 > 昭和時代前期 > 昭和時代後期`。
- つまずき・失敗・回避策：なし。`npm.cmd run pages:check -- 日本史 昭和時代後期` で manifest HTTP 200、`data/questions/日本史_昭和時代後期.json` HTTP 200、37問配信を確認。
- 次にやること：時代順に `日本史_平成時代.json` へ進む。
- コミット：Record late Showa Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_昭和時代後期.json` を37問で追加し、`data/manifest.json` を再生成。アプリ側で日本史単元が五十音順に再ソートされていたため、`app.js` の単元表示を manifest 順のまま使うよう修正した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。昭和時代後期は戦後改革、GHQ、日本国憲法、農地改革、財閥解体、女性参政権、講和と安保、自衛隊、55年体制、高度経済成長、沖縄返還、日中国交正常化、オイルショック、バブル景気、昭和の終わりまでを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1に偏ったため、13問の選択肢順だけを入れ替えて1/2/3を13/12/12に修正。単元順の不具合は manifest 生成側ではなく `app.js` の `renderUnits()` で `.sort()` していたことが原因だった。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 昭和時代後期` でGitHub Pages上のmanifestとJSON配信を確認する。
- コミット：Add late Showa history unit and preserve unit order

## 2026-06-11  担当：Codex
- やったこと：`昭和時代前期` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期 > 明治時代前期 > 明治時代後期 > 大正時代 > 昭和時代前期` を含む状態。
- つまずき・失敗・回避策：通常権限の `pages:check` はネットワーク制限らしい空エラーで失敗したため、許可付きで再実行。反映後は `data/questions/日本史_昭和時代前期.json` が HTTP 200、40問で配信された。
- 次にやること：時代順に `日本史_昭和時代後期.json` へ進む。
- コミット：Record early Showa Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_昭和時代前期.json` を40問で追加し、`scripts/generate-manifest.mjs` の日本史順に `昭和時代前期`・`昭和時代後期` を追加。`data/manifest.json` を再生成した。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。昭和時代は範囲が広いため前後期に分割し、前期は昭和開始、金融恐慌、昭和恐慌、満州事変、政党内閣の終わり、二・二六事件、日中戦争、国家総動員法、三国同盟、太平洋戦争、敗戦までを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1に偏ったため、13問の選択肢順だけを入れ替えて1/2/3を13/13/14に修正。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 昭和時代前期` でGitHub Pages上のmanifestとJSON配信を確認する。その後、時代順に `日本史_昭和時代後期.json` へ進む。
- コミット：Add early Showa history unit

## 2026-06-11  担当：Codex
- やったこと：`大正時代` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期 > 明治時代前期 > 明治時代後期 > 大正時代` を含む状態。
- つまずき・失敗・回避策：push 直後は `pages:check` が旧 manifest を検出したため45秒待って再確認。反映後は `data/questions/日本史_大正時代.json` が HTTP 200、35問で配信された。
- 次にやること：新規セッションへ移行する。次セッションでは `CLAUDE.md` と `WORKLOG.md` 最新部を読み、時代順に `日本史_昭和時代前期.json` から進む。
- コミット：Record Taisho Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_大正時代.json` を35問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。大正時代は第一次護憲運動、第一次世界大戦、二十一か条の要求、大戦景気、米騒動、原敬内閣、シベリア出兵、三・一独立運動、五・四運動、国際連盟、ワシントン会議、大正デモクラシー、社会運動、関東大震災、普通選挙法、治安維持法までを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1に偏ったため、4問の選択肢順だけを入れ替えて1/2/3を12/12/11に修正。セッションが長くなっているため、この単元の公開確認後に新規セッションへ移る前提で進める。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 大正時代` でGitHub Pages上のmanifestとJSON配信を確認する。完了後、新規セッションでは `CLAUDE.md` と `WORKLOG.md` 最新部を読んで `日本史_昭和時代前期.json` から進む。
- コミット：Add Taisho history unit

## 2026-06-11  担当：Codex
- やったこと：`明治時代後期` 追加後の GitHub Pages 反映を確認し、`scripts/check-pages.mjs` の通信失敗時エラーを短く整形するよう改善。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期 > 明治時代前期 > 明治時代後期` を含む状態。
- つまずき・失敗・回避策：初回の `pages:check` がネットワークタイムアウトでNodeの生例外を出したため、catchして短い失敗メッセージにする改善を追加。再実行では `data/questions/日本史_明治時代後期.json` が HTTP 200、37問で配信された。
- 次にやること：時代順に `日本史_大正時代.json` へ進む。セッションがかなり長いため、大正時代完了後を新セッション移行の目安にする。
- コミット：Record late Meiji Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_明治時代後期.json` を37問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。明治時代後期は日清戦争、三国干渉、条約改正、日英同盟、日露戦争、韓国併合、産業革命、財閥、公害・社会運動、明治後期文化までを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1に偏ったため、1問の選択肢順だけを入れ替えて1/2/3を13/12/12に修正。セッションが長くなってきているため、読み込みは `CLAUDE.md` と `WORKLOG.md` 最新部、必要最小限のメモ検索に限定した。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 明治時代後期` でGitHub Pages上のmanifestとJSON配信を確認する。その後、時代順に `日本史_大正時代.json` へ進む。
- コミット：Add late Meiji history unit

## 2026-06-11  担当：Codex
- やったこと：`明治時代前期` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期 > 明治時代前期` を含む状態。
- つまずき・失敗・回避策：push 直後は `pages:check` が旧 manifest を検出したため45秒待って再確認。反映後は `data/questions/日本史_明治時代前期.json` が HTTP 200、38問で配信された。
- 次にやること：時代順に `日本史_明治時代後期.json` へ進む。
- コミット：Record early Meiji Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_明治時代前期.json` を38問で追加し、`scripts/generate-manifest.mjs` の日本史順に `明治時代前期`・`明治時代後期` を追加。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。明治時代は範囲が広いため前後期に分割し、前期は五箇条の御誓文、版籍奉還、廃藩置県、四民平等、学制、徴兵令、地租改正、殖産興業、岩倉使節団、征韓論、士族反乱、自由民権運動、大日本帝国憲法、帝国議会までを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1問分だけ偏ったため、1問の選択肢順だけを入れ替えて1/2/3を13/13/12に修正。`WORKLOG.md` 最新部だけを読み、アーカイブ全文は読まずに進行。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 明治時代前期` でGitHub Pages上のmanifestとJSON配信を確認する。その後、時代順に `日本史_明治時代後期.json` へ進む。
- コミット：Add early Meiji history unit

## 2026-06-11  担当：Codex
- やったこと：`江戸時代後期` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期 > 江戸時代後期` を含む状態。
- つまずき・失敗・回避策：push 直後は `pages:check` が旧 manifest を検出したため45秒待って再確認。反映後は `data/questions/日本史_江戸時代後期.json` が HTTP 200、38問で配信された。
- 次にやること：時代順に `日本史_明治時代.json` へ進む。
- コミット：Record late Edo Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_江戸時代後期.json` を38問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。江戸時代後期は化政文化、外国船接近、天保の飢饉、天保の改革、開国、不平等条約、尊王攘夷、公武合体、薩長同盟、大政奉還、王政復古、戊辰戦争までを扱う。
- つまずき・失敗・回避策：初回監査で正解位置が1/2に偏ったため、4問の選択肢順だけを入れ替えて1/2/3を13/13/12に修正。内容の正誤と解説は維持した。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 江戸時代後期` でGitHub Pages上のmanifestとJSON配信を確認する。その後、時代順に `日本史_明治時代.json` へ進む。
- コミット：Add late Edo history unit

## 2026-06-11  担当：Codex
- やったこと：`江戸時代中期` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期 > 江戸時代中期` を含む状態。
- つまずき・失敗・回避策：push 直後は `pages:check` が旧 manifest を検出したため45秒待って再確認。反映後は `data/questions/日本史_江戸時代中期.json` が HTTP 200、36問で配信された。
- 次にやること：時代順に `日本史_江戸時代後期.json` へ進む。
- コミット：Record middle Edo Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の続きとして `data/questions/日本史_江戸時代中期.json` を36問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。江戸時代中期は享保の改革、商品経済の発展、田沼政治、天明の飢饉、寛政の改革、蘭学・国学・文人文化までを扱う。
- つまずき・失敗・回避策：前回の正解位置偏りを踏まえ、作問時点から正解位置を1/2/3に12/12/12で配分。`WORKLOG.md` は最新部分だけを読み、アーカイブ全文は読まない運用でトークン消費を抑えた。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 江戸時代中期` でGitHub Pages上のmanifestとJSON配信を確認する。その後、時代順に `日本史_江戸時代後期.json` へ進む。
- コミット：Add middle Edo history unit

## 2026-06-11  担当：Codex
- やったこと：`江戸時代前期` 追加と作業効率化後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史順に `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代 > 江戸時代前期` を含む状態。
- つまずき・失敗・回避策：push 直後は `pages:check` が旧 manifest を検出したため45秒待って再確認。反映後は `data/questions/日本史_江戸時代前期.json` が HTTP 200、38問で配信された。
- 次にやること：時代順に `日本史_江戸時代中期.json` へ進む。
- コミット：Record early Edo Pages verification

## 2026-06-11  担当：Codex
- やったこと：作業効率化として `scripts/check-pages.mjs` と `npm.cmd run pages:check -- <科目> <単元>` を追加し、`WORKLOG.md` を最新10件中心に圧縮して古い32件を `WORKLOG_ARCHIVE.md` へ退避。日本史は続きとして `data/questions/日本史_江戸時代前期.json` を38問で追加。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。江戸時代は範囲が広いため、まず `江戸時代前期` として幕藩体制、鎖国、初期外交、村支配、元禄文化、正徳の治までを扱う。manifestの日本史順には `江戸時代前期`、`江戸時代中期`、`江戸時代後期` を追加。
- つまずき・失敗・回避策：最初の監査で江戸前期の正解位置が1/2に偏ったため、5問の選択肢順だけを入れ替えて1/2/3を13/13/12に修正。WORKLOG圧縮時に改行文字列が文字として入ったため、直後に修正した。
- 次にやること：push 後に `npm.cmd run pages:check -- 日本史 江戸時代前期` でGitHub Pages上のmanifestとJSON配信を確認する。その後、時代順に `日本史_江戸時代中期.json` へ進む。
- コミット：Add early Edo history unit and streamline checks

## 2026-06-11  担当：Codex
- やったこと：日本史の時代順並び替えと `戦国・安土桃山時代` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest の日本史順は `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代`。
- つまずき・失敗・回避策：公開確認時に PowerShell の `Join-String` が使えず表示整形だけ失敗したため、配列を `-join` する形で再確認。`data/questions/日本史_戦国・安土桃山時代.json` は HTTP 200、36問。
- 次にやること：時代順に `日本史_江戸時代.json` へ進む。
- コミット：Record Sengoku Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史単元のmanifest表示順を時代順にし、続きとして `data/questions/日本史_戦国・安土桃山時代.json` を36問で追加。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。`scripts/generate-manifest.mjs` に日本史だけの時代順リストを持たせ、未登録単元は後ろで五十音順にする。問題JSONのファイル名や配列順は触らず、進捗IDに影響しない形で表示順だけ整えた。
- つまずき・失敗・回避策：監査スクリプトの表示はファイル名順のままだが、アプリが読む `data/manifest.json` では `飛鳥・奈良時代 > 平安時代 > 鎌倉時代 > 室町時代 > 戦国・安土桃山時代` になっていることを確認。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/generate-manifest.mjs` は成功。
- 次にやること：push 後に GitHub Pages 上で日本史のmanifest表示順と `日本史_戦国・安土桃山時代.json` の配信を確認する。
- コミット：Order Japanese history units and add Sengoku Azuchi Momoyama

## 2026-06-11  担当：Codex
- やったこと：日本史 `平安時代` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `日本史 / 平安時代` 36問を含む状態。
- つまずき・失敗・回避策：push 直後は旧 manifest と JSON 404 が返ったため45秒待って再確認。反映後は manifest 更新済み、`data/questions/日本史_平安時代.json` は HTTP 200。
- 次にやること：使用量制限に配慮し、次回は時代順に `日本史_戦国・安土桃山時代.json` へ進む。
- コミット：Record Heian Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の時代順追加として `data/questions/日本史_平安時代.json` を36問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。平安遷都、平安初期仏教、令外官、国風文化、摂関政治、荘園と武士の台頭、院政、平氏政権までを1単元に収めた。
- つまずき・失敗・回避策：当初33問程度の想定だったが、院政から平氏政権まで削ると次の鎌倉時代との接続が弱くなるため36問とした。正解位置は1/2/3に13/12/11で、監査許容内。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に GitHub Pages 上で `日本史 / 平安時代` が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add Heian history unit

## 2026-06-11  担当：Codex
- やったこと：日本史 `飛鳥・奈良時代` 追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `日本史 / 飛鳥・奈良時代` 33問を含む状態。
- つまずき・失敗・回避策：push 直後は旧 manifest と JSON 404 が返ったため45秒待って再確認。反映後は manifest 更新済み、`data/questions/日本史_飛鳥・奈良時代.json` は HTTP 200。
- 次にやること：時代順に `日本史_平安時代.json` を追加する。
- コミット：Record Asuka Nara Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の時代順追加として `data/questions/日本史_飛鳥・奈良時代.json` を33問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。古墳末期の仏教伝来、聖徳太子、大化の改新、律令制、平城京、奈良仏教、天平文化までを1単元に収めた。
- つまずき・失敗・回避策：当初30問級の想定だったが、律令制と奈良文化の基本事項を削らず33問とした。正解位置は1/2/3に11/11/11で分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に GitHub Pages 上で `日本史 / 飛鳥・奈良時代` が manifest に出ることと JSON が配信されることを確認する。その後、時代順に `日本史_平安時代.json` を追加する。
- コミット：Add Asuka Nara history unit

## 2026-06-11  担当：Codex
- やったこと：日本史の鎌倉時代・室町時代本番版置換後、GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `日本史 / 鎌倉時代` 30問、`日本史 / 室町時代` 33問を含む状態。
- つまずき・失敗・回避策：なし。`data/questions/日本史_鎌倉時代.json` と `data/questions/日本史_室町時代.json` はどちらも HTTP 200 で、JSON 件数も manifest と一致。
- 次にやること：日本史の次単元として、時代順に `日本史_飛鳥・奈良時代.json` または `日本史_平安時代.json` を追加する。
- コミット：Record Japanese history Pages verification

## 2026-06-11  担当：Codex
- やったこと：日本史の初期サンプル `data/questions/日本史_鎌倉時代.json` と `data/questions/日本史_室町時代.json` を本番版へ置換。鎌倉時代は30問、室町時代は33問。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。既存の5問サンプルは実教材として密度が不足するため、ファイル名と単元名は維持しつつ中身を作り直した。進捗はサンプル段階のものが前提なので、本番版への置換を優先。
- つまずき・失敗・回避策：初回監査で鎌倉時代が31問かつ正解位置偏りだったため、室町側と重なる建武の新政の設問を外し、正解位置を1/2/3に10/10/10で再調整。室町時代は33問で1/2/3に11/11/11。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に GitHub Pages 上で日本史2単元の manifest 件数と JSON 配信を確認する。その後、日本史の次単元へ進む。
- コミット：Replace Japanese history samples

## 2026-06-11  担当：Codex
- やったこと：生命倫理・環境倫理追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `生命倫理` と `環境倫理` を含み、両 JSON は各30問で HTTP 200。
- つまずき・失敗・回避策：`.nojekyll` 追加後の Pages デプロイは success。manifest と `data/questions/倫理_生命倫理.json`、`data/questions/倫理_環境倫理.json` の配信を確認した。
- 次にやること：倫理は主要な思想史単元と応用倫理単元が揃ったため、必要なら情報倫理・国際平和など細分化を検討しつつ、基本方針としては別科目へ進める。
- コミット：Record applied ethics Pages verification

## 2026-06-11  担当：Codex
- やったこと：生命倫理・環境倫理追加後の Pages deploy failure 対策として `.nojekyll` を追加。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。Sukima は Jekyll 不要の純静的アプリなので、GitHub Pages にファイルをそのまま配信させる設定を追加した。
- つまずき・失敗・回避策：`Validate questions` と Pages build は成功するが deploy だけ failure が再現。原因ログは公開APIから取得できなかったため、まず Pages 処理を単純化して再デプロイを試す。
- 次にやること：push 後に Pages デプロイ状態と manifest / 新規2 JSON の配信を再確認する。
- コミット：Disable Jekyll for Pages

## 2026-06-11  担当：Codex
- やったこと：倫理の生命倫理・環境倫理追加後、GitHub Pages 反映確認を試行。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。GitHub raw 上では `manifest.json` と `倫理_生命倫理.json` が最新で、`Validate questions` workflow も成功。
- つまずき・失敗・回避策：Pages は旧 manifest と新規 JSON 404 のまま。GitHub Actions では `pages build and deployment` の build は成功、deploy のみ failure。デプロイ失敗は Pages 側の一時失敗と判断し、このログコミットで再デプロイをトリガーする。
- 次にやること：push 後に GitHub Pages の manifest と新規2 JSON を再確認する。
- コミット：Retry Pages deployment after applied ethics

## 2026-06-11  担当：Codex
- やったこと：倫理の応用倫理単元として `data/questions/倫理_生命倫理.json` と `data/questions/倫理_環境倫理.json` を各30問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。生命倫理はインフォームド・コンセント、自己決定、終末期医療、臓器移植、生殖補助医療、遺伝子診断、再生医療、研究倫理までを扱う。環境倫理は人間中心主義、自然中心主義、世代間倫理、予防原則、環境正義、循環型社会、気候変動、生物多様性までを扱う。
- つまずき・失敗・回避策：初回監査で `生命倫理` が29問、両新規単元の正解位置偏りを検出。1問追加し、正解位置を1/2/3に10/10/10で再調整した。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に GitHub Pages 上で manifest に2単元が出ることと JSON が配信されることを確認する。
- コミット：Add applied ethics units

## 2026-06-11  担当：Codex
- やったこと：依頼者承認に基づき、`SPEC.md` に画像対応の検討項目を追記。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：承認あり。画像対応は未実装の検討項目として、任意フィールド `問題画像` / `解説画像`、SVG優先、図必須問題のみ、iPhone SE3 前提の縦スクロール、画像参照の存在検証、KaTeX等の数式組版は別判断と明記した。
- つまずき・失敗・回避策：なし。
- 次にやること：倫理の残り単元として応用倫理（生命倫理・環境倫理）を追加する。
- コミット：Record image support consideration

## 2026-06-11  担当：Codex
- やったこと：残り9単元の不正解選択肢改善後、GitHub Pages 反映を代表確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。代表として `倫理_日本思想.json` と `倫理_近代西洋思想.json` が HTTP 200 で返り、新しい紛らわしい選択肢を含むことを確認。
- つまずき・失敗・回避策：なし。push 後すぐに代表 JSON の更新配信を確認できた。
- 次にやること：iPhone 実機で、難易度が上がりすぎてテンポを損ねていないか数単元だけ確認する。
- コミット：Record remaining distractor Pages verification

## 2026-06-11  担当：Codex
- やったこと：`倫理_現代思想.json` 以外の全9単元（日本史2単元、倫理7単元）の不正解選択肢を見直し。正解から遠すぎる語を、同じ単元・同じ小領域・同じ人物/概念/説明型の紛らわしい語へ差し替えた。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。問題配列順、問題数、正解位置は維持し、既存の回答済進捗がズレないようにした。
- つまずき・失敗・回避策：初回の一括更新では人物問題に説明文や時代違いの人物が混ざる箇所があったため、人物問題・説明問題・概念問題を分けて再調整し、日本思想の人物問題は仏教者/江戸儒学者/国学者/明治思想家/近現代思想家ごとに追加補正した。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。人物問題に長い説明文が混ざる自前チェックも0件。
- 次にやること：push 後に GitHub Pages 上で代表 JSON の更新配信を確認する。
- コミット：Improve remaining unit distractors

## 2026-06-11  担当：Codex
- やったこと：`倫理_現代思想.json` の不正解選択肢改善後、GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 JSON は33問のまま、旧選択肢 `社会契約` が消え、新選択肢 `前意識` を含む状態。
- つまずき・失敗・回避策：push 直後は旧 JSON が返ったため45秒待って再確認。反映後は `data/questions/倫理_現代思想.json` が HTTP 200 で更新済み。
- 次にやること：同じ方針で `倫理_近代西洋思想.json` の不正解選択肢を見直す。
- コミット：Record contemporary distractor Pages verification

## 2026-06-11  担当：Codex
- やったこと：依頼者承認を受け、まず `data/questions/倫理_現代思想.json` の不正解選択肢を全33問で見直し。正解から遠すぎる語を、同じ思想家・同じ潮流・同じ現代倫理領域の紛らわしい語へ差し替えた。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。問題配列順と問題数は維持し、既存の回答済進捗がズレないようにした。現代思想の正解位置は1/2/3に11/11/11のまま維持。
- つまずき・失敗・回避策：なし。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js` は成功。
- 次にやること：push 後に GitHub Pages 上で `倫理_現代思想.json` が更新配信されることを確認する。その後、同じ方針で `倫理_近代西洋思想.json` 以降へ横展開する。
- コミット：Improve contemporary thought distractors

## 2026-06-10  担当：Codex
- やったこと：倫理8単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / 現代思想` 33問を含む状態。
- つまずき・失敗・回避策：push 直後は旧 manifest と JSON 404 が返ったため45秒待って再確認。反映後は manifest 更新済み、`data/questions/倫理_現代思想.json` は HTTP 200。
- 次にやること：iPhone 実機で倫理の8単元目表示と数問の回答動作を確認する。次の倫理単元候補は「生命倫理」または「環境倫理」。
- コミット：Record contemporary thought Pages verification

## 2026-06-10  担当：Codex
- やったこと：倫理8単元目として `data/questions/倫理_現代思想.json` を33問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。現代思想は精神分析、生命哲学、構造主義、ポスト構造主義、フランクフルト学派、アーレント、レヴィナス、ヨナス、ロールズ以後の正義論、ジェンダー、多文化主義、生命倫理・環境倫理の入口までを1単元に収めた。
- つまずき・失敗・回避策：なし。正解位置は1/2/3に11/11/11で分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js`、`node --check scripts/audit-questions.mjs` は成功。
- 次にやること：push 後に GitHub Pages 上で倫理8単元目が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add ethics contemporary thought unit

## 2026-06-10  担当：Codex
- やったこと：依頼者による `倫理_日本思想.json` と `倫理_近代西洋思想.json` の実機動作確認結果を記録。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。両単元とも現時点で動作問題なしとして扱う。
- つまずき・失敗・回避策：なし。
- 次にやること：倫理の追加運用を省トークン化する手順を整理し、必要なら repo 内に作問運用メモまたは生成補助スクリプトを追加する。
- コミット：Record latest ethics smoke test

## 2026-06-10  担当：Codex
- やったこと：倫理7単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / 近代西洋思想` 32問を含む状態。
- つまずき・失敗・回避策：push 直後は旧 manifest と JSON 404 が返ったため45秒待って再確認。反映後は manifest 更新済み、`data/questions/倫理_近代西洋思想.json` は HTTP 200。
- 次にやること：iPhone 実機で日本思想・近代西洋思想の表示と数問の回答動作を確認する。
- コミット：Record modern Western Pages verification

## 2026-06-10  担当：Codex
- やったこと：倫理7単元目として `data/questions/倫理_近代西洋思想.json` を32問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。近代西洋思想はルネサンス、ベーコン、デカルト、経験論、社会契約、啓蒙、カント、功利主義、ヘーゲル、マルクス、実存主義、プラグマティズムまでを1単元に収めた。
- つまずき・失敗・回避策：精度維持のため日本思想とは分けて実装。正解位置は1/2/3に11/11/10で分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js` は成功。正答語一覧で正解番号との対応を確認。参照は文科省公民編解説、Britannica Western philosophy、Stanford Encyclopedia of Philosophy の近代哲学・功利主義・実存主義関連項目。
- 次にやること：push 後に GitHub Pages 上で倫理7単元目が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add ethics modern Western thought unit

## 2026-06-10  担当：Codex
- やったこと：倫理6単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / 日本思想` 34問を含む状態。
- つまずき・失敗・回避策：なし。Pages 反映後、manifest に日本思想単元が出ること、`data/questions/倫理_日本思想.json` が HTTP 200 で返ることを確認。
- 次にやること：`倫理_近代西洋思想.json` を実装する。
- コミット：Record Japanese thought Pages verification

## 2026-06-10  担当：Codex
- やったこと：倫理6単元目として `data/questions/倫理_日本思想.json` を34問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。日本思想は神道、神仏習合、鎌倉仏教、江戸儒学、国学、明治思想、民俗学、京都学派までを1単元に収めた。
- つまずき・失敗・回避策：精度維持のため近代西洋思想とは分けて実装。正解位置は1/2/3に12/11/11で分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js` は成功。正答語一覧で正解番号との対応を確認。参照は文科省公民編解説、Britannica Shinto、Britannica Confucianism、Stanford Encyclopedia of Philosophy の日本哲学関連項目。
- 次にやること：push 後に GitHub Pages 上で倫理6単元目が manifest に出ることと JSON が配信されることを確認する。その後、`倫理_近代西洋思想.json` に進む。
- コミット：Add ethics Japanese thought unit

## 2026-06-10  担当：Codex
- やったこと：倫理5単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / 中国思想` 34問を含む状態。
- つまずき・失敗・回避策：manifest は先に更新されたが、`data/questions/倫理_中国思想.json` は初回確認で 404。30秒待って再確認し HTTP 200 を確認。
- 次にやること：iPhone 実機で倫理の5単元目表示と数問の回答動作を確認する。次の倫理単元候補は「日本思想」または「近代西洋思想」。
- コミット：Record Chinese thought Pages verification

## 2026-06-10  担当：Codex
- やったこと：倫理5単元目として `data/questions/倫理_中国思想.json` を34問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。中国思想は諸子百家、儒家、道家、墨家、法家、朱子学、陽明学までを1単元に収めた。
- つまずき・失敗・回避策：なし。正解位置は1/2/3に12/11/11で分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js` は成功。正答語一覧で正解番号との対応を確認。参照は文科省公民編解説、Britannica Confucianism / Taoism、Stanford Encyclopedia of Philosophy Chinese Ethics。
- 次にやること：push 後に GitHub Pages 上で倫理5単元目が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add ethics Chinese thought unit

## 2026-06-09  担当：Codex
- やったこと：倫理4単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / 仏教思想` 32問を含む状態。
- つまずき・失敗・回避策：なし。Pages 反映後、manifest に仏教思想単元が出ること、`data/questions/倫理_仏教思想.json` が HTTP 200 で返ることを確認。
- 次にやること：iPhone 実機で倫理の4単元目表示と数問の回答動作を確認する。次の倫理単元候補は「中国思想」。
- コミット：Record Buddhism Pages verification

## 2026-06-09  担当：Codex
- やったこと：倫理4単元目として `data/questions/倫理_仏教思想.json` を32問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。仏教思想は釈迦、四諦、八正道、縁起、無常、無我、涅槃、上座部、大乗、龍樹、日本仏教の基礎までを1単元に収めた。
- つまずき・失敗・回避策：30問標準より2問多いが、範囲のまとまりと解説品質を優先して32問のまま採用。正解位置は1/2/3に11/11/10で分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check app.js` は成功。正答語一覧で正解番号との対応を確認。参照は文科省公民編解説、Britannica の仏教・四諦・八正道・大乗仏教項目。
- 次にやること：push 後に GitHub Pages 上で倫理4単元目が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add ethics Buddhism unit

## 2026-06-09  担当：Codex
- やったこと：倫理3単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / キリスト教思想` 30問を含む状態。
- つまずき・失敗・回避策：なし。Pages 反映後、manifest にキリスト教思想単元が出ること、`data/questions/倫理_キリスト教思想.json` が HTTP 200 で返ることを確認。
- 次にやること：iPhone 実機で倫理の3単元目表示と数問の回答動作を確認する。次の倫理単元候補は「仏教思想」。
- コミット：Record Christianity Pages verification

## 2026-06-09  担当：Codex
- やったこと：倫理3単元目として `data/questions/倫理_キリスト教思想.json` を30問で追加。繰り返し発生していた正解位置偏り・解説長確認を自動化するため `scripts/audit-questions.mjs` と `npm.cmd run audit` を追加。既存問題の短い解説も監査に通るよう補強。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。キリスト教思想はユダヤ教的背景、イエス、パウロ、アウグスティヌス、スコラ学、トマス、宗教改革までを1単元に収めた。
- つまずき・失敗・回避策：初回監査で既存問題の短い解説を検出したため補強。キリスト教思想は30問、正解位置1/2/3に10問ずつ分散。`npm.cmd run check`、`npm.cmd run audit`、`node --check scripts/audit-questions.mjs` は成功。正答語一覧で正解番号との対応を確認。参照は文科省公民編解説、Britannica、Stanford Encyclopedia of Philosophy。
- 次にやること：push 後に GitHub Pages 上で倫理3単元目が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add ethics Christianity unit

## 2026-06-09  担当：Codex
- やったこと：倫理2単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / ギリシア思想` 30問を含む状態。
- つまずき・失敗・回避策：なし。Pages 反映後、manifest にギリシア思想単元が出ること、`data/questions/倫理_ギリシア思想.json` が HTTP 200 で返ることを確認。
- 次にやること：iPhone 実機で倫理の2単元目表示と数問の回答動作を確認する。次の倫理単元候補は「キリスト教思想」または「仏教思想」。
- コミット：Record Greek philosophy Pages verification

## 2026-06-09  担当：Codex
- やったこと：倫理2単元目として `data/questions/倫理_ギリシア思想.json` を30問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。ギリシア思想は自然哲学、ソフィスト、ソクラテス、プラトン、アリストテレス、ヘレニズム思想までを1単元に収めた。
- つまずき・失敗・回避策：初稿は31問だったため総括問題を外して30問に調整。正解位置を1/2/3に10問ずつ分散。`npm.cmd run check`、`node --check app.js`、`node --check scripts/generate-manifest.mjs`、選択肢重複・解説長・正解番号チェックは成功。正答語一覧で正解番号との対応を確認。参照は文科省公民編解説、Britannica、Stanford Encyclopedia of Philosophy。
- 次にやること：push 後に GitHub Pages 上で倫理2単元目が manifest に出ることと JSON が配信されることを確認する。
- コミット：Add ethics Greek philosophy unit

## 2026-06-09  担当：Codex
- やったこと：倫理1単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は `倫理 / 青年期と自己形成` 30問を含む状態。
- つまずき・失敗・回避策：なし。Pages 反映後、manifest に倫理単元が出ること、`data/questions/倫理_青年期と自己形成.json` が HTTP 200 で返ることを確認。
- 次にやること：iPhone 実機で倫理の本棚表示と数問の回答動作を確認する。次の倫理単元候補は「ギリシア思想」。
- コミット：Record ethics Pages verification

## 2026-06-09  担当：Codex
- やったこと：実教材用の倫理1単元目として `data/questions/倫理_青年期と自己形成.json` を30問で追加し、`data/manifest.json` を再生成。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。倫理の単元サイズはまず30問を標準とし、濃い単元だけ40問台まで増やす方針が実用的。
- つまずき・失敗・回避策：初稿は正解位置が1番に偏ったため、選択肢を機械的に並べ替えて正解位置を1/2/3に10問ずつ分散。`npm.cmd run check`、`node --check app.js`、`node --check scripts/generate-manifest.mjs` は成功。正答語一覧を出力して正解番号との対応を確認。
- 次にやること：push 後に GitHub Pages 上で倫理単元が manifest に出ることと JSON が配信されることを確認し、必要なら iPhone 実機で本棚表示を確認する。
- コミット：Add ethics adolescence unit

## 2026-06-09  担当：Codex
- やったこと：依頼者による2単元目追加後の実機テスト結果を記録。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。鎌倉時代追加後の本棚表示・進捗分離・単元リセット周りは、現時点で問題なしとして扱う。
- つまずき・失敗・回避策：なし。
- 次にやること：実教材用の問題を増やすフェーズへ移る。追加時は1ファイル1単元、末尾追加、`npm.cmd run check`、push 後の Pages 反映確認を続ける。
- コミット：Record second unit test

## 2026-06-09  担当：Codex
- やったこと：2単元目追加後の GitHub Pages 反映を確認。
- 決めたこと／変更点（SPEC.md を触った場合は承認の有無も）：`SPEC.md` は変更なし。公開 manifest は日本史配下に鎌倉時代・室町時代の2単元を含む状態。
- つまずき・失敗・回避策：push 直後は Pages が旧 manifest と鎌倉時代 JSON 404 を返したため、30秒待って再確認。反映後は manifest 更新済み、鎌倉時代 JSON は HTTP 200。
- 次にやること：iPhone 実機で、鎌倉時代が本棚に表示されること、室町時代の進捗が残ること、片方のリセットがもう片方に影響しないことを確認する。
- コミット：Record Kamakura Pages verification

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


---

## 2026-06-15 WORKLOG.md context trim archive

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
