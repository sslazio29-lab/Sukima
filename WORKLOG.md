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
