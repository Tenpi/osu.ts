<div align="left">
  <p>
    <a href="https://moestash.github.io/osu.ts/"><img src="https://raw.githubusercontent.com/Moestash/osu.ts/master/images/osu.tslogo.gif" width="500" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/osu.ts/"><img src="https://nodei.co/npm/osu.ts.png" /></a>
  </p>
</div>

### About
This is a wrapper for the osu! API that includes typings. You can also generate a signature using the osu!next signature generator and download the cover on a users profile, which is not available through the API.

### Install
```ts
npm install osu.ts
```

### Useful Links
- [**Osu.ts Documentation**](https://moestash.github.io/osu.ts/)
- [**Osu Api Wiki**](https://github.com/ppy/osu-api/wiki)

### Getting Started
You will need to get an API Key in order to use the api, which can be requested here with your osu! account: 
https://osu.ppy.sh/p/api/

#### Searching for beatmaps
```ts
import Osu from "osu.ts"

async function useAPI() {
    /*API Key is required.*/
    const osu = new Osu(process.env.OSU_API_KEY)

    /*You can get an entire beatmap set with its URL.*/
    const beatmaps = await osu.beatmaps.get("https://osu.ppy.sh/beatmapsets/1022394")

    /*For a specific beatmap, you will need to add the #osu/(beatmap id) to the URL.
    For easier typings, it still returns an array so use a .then chain to get the first item.*/
    const beatmap = await osu.beatmaps.get("https://osu.ppy.sh/beatmapsets/1022394#osu/2139012").then((b) => b[0])

    /*Unfortunately, the api does not really provide great searching methods. But I might improve on it in 
    the future. Passing in no params will get the 500 most recent beatmaps.*/
    const beatmapSearch = await osu.beatmaps.search()
}
```
#### Searching for users
```ts
async function useAPI() {
    /*Getting a user is easy, just pass in their name or ID (which is parsed from the URL).
    If for some reason the user's name is only numbers, its better to use the URL.*/
    const user = await osu.users.get("vaxei")
    const userByURL = await osu.users.get("https://osu.ppy.sh/users/4787150")

    /*Getting the banner is not available in the API, but you can use fetchBanner() to retrieve it.
    Optionally, if you pass in a path it will be downloaded to that location.*/
    const banner = await osu.users.banner("vaxei", "./banner")

    /*You can also generate a signature using the osu!next signature generator. Important 
    parameters to pass are the uname and colour (yes, with a u). If you pass in a path it 
    will be downloaded to that location as well.*/
    const sig = await osu.users.sig({uname: "vaxei", colour: "#ff3381"}, "./sig")
}
```
#### Getting scores and replays
```ts
async function useAPI() {
    /*You can get a users best and recent scores.*/
    const best = await osu.scores.best("vaxei")
    const recent = await osu.scores.recent("vaxei")

    /*And the scores on a beatmap.*/
    const scores = await osu.scores.beatmap("https://osu.ppy.sh/beatmapsets/1013140#osu/2120669")

    /*You can download a replay by passing in the user, beatmap, and destination path. It will also
    return the raw encoded data.*/
    const replay = await osu.beatmaps.replay("vaxei", "https://osu.ppy.sh/beatmapsets/896080#osu/1872396", "./replays")
}
```

#### Common Types

<details>
<summary>OsuBeatmap</summary>

```ts
export interface OsuBeatmap {
    beatmapset_id: string
    beatmap_id: string
    approved: string
    total_length: string
    hit_length: string
    version: string
    file_md5: string
    diff_size: string
    diff_overall: string
    diff_approach: string
    diff_drain: string
    mode: string
    count_normal: string
    count_slider: string
    count_spinner: string
    submit_date: string
    approved_date: string | null
    last_update: string
    artist: string
    title: string
    creator: string
    creator_id: string
    bpm: string
    source: string
    tags: string
    genre_id: string
    language_id: string
    favourite_count: string
    rating: string
    download_unavailable: string
    audio_unavailable: string
    playcount: string
    passcount: string
    max_combo: string | null
    diff_aim: string | null
    diff_speed: string | null
    difficultyrating: string | null
}
```
</details>

<details>
<summary>OsuUser</summary>

```ts
export interface OsuUser {
    user_id: string
    username: string
    join_date: string
    count300: string
    count100: string
    count50: string
    playcount: string
    ranked_score: string
    total_score: string
    pp_rank: string
    level: string
    pp_raw: string
    accuracy: string
    count_rank_ss: string
    count_rank_ssh: string
    count_rank_s: string
    count_rank_sh: string
    count_rank_a: string
    country: string
    total_seconds_played: string
    pp_country_rank: string
    events: OsuEvent[]
}
```
</details>

<details>
<summary>OsuScore</summary>

```ts
export interface OsuScore {
    score_id: string
    score: string
    username: string
    maxcombo: string
    count50: string
    count100: string
    count300: string
    countmiss: string
    countkatu: string
    countgeki: string
    perfect: string
    enabled_mods: string
    user_id: string
    date: string
    rank: string
    pp: string | null
    replay_available: string
}
```
</details>
