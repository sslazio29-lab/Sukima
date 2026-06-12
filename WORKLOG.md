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
