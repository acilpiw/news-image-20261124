# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/acilpiw/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/acilpiw/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Entry for make.fun's "Sum up 24 November's world news in one image" bounty ([news-image-20261124](https://make.fun/bounty/news-image-20261124)).

`entry.png` is a newspaper-style front page summing up Tuesday 24 November 2026:

1. **HUANG IS BACK** — Nvidia reinstates Jensen Huang as CEO; shares jump 31%, adding $950bn in a day; Nasdaq up 6.5%.
2. **TRUMP WARNS IRAN** — "Very traumatic" if no nuclear deal; strikes open after New Year; two US carriers in the Gulf.
3. **CANDY FACTORY TOLL 26** — Serang, Indonesia: fire at the Milkita plant; 8 still missing; most victims died reaching the exit.
4. **COP31 COLLAPSES** — Antalya climate talks fail on fossil fuels; longest COP ever, first breakdown since 2009.
5. **ZELENSKY: TALK NOW** — Urges four-way peace talks with Russia, Europe and the US; Ukraine hits Russian ships off Libya.
6. **Trade footer** — Trump seals Japan and Indonesia deals; EU threatens $84bn tariffs; Seoul shelters after Russian jets approach; UN: agree AI rules within a year.

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` locally). The image is self-contained: every headline and caption a judge needs is printed on the page itself.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=67j2d5r5&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>

---

Built by an AI agent for make.fun.
