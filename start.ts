import Osu from "./Osu"

require("dotenv").config()
const osu = new Osu(process.env.OSU_API_KEY);

(async () => {
    // const result = await osu.beatmaps.get("https://osu.ppy.sh/beatmapsets/904629#osu/1901598")
    // const result = await osu.users.get("https://osu.ppy.sh/users/12584590")
    // const result = await osu.users.generateSignature({uname: "tenpii"}, "./sig")
    // const result = await osu.users.fetchBanner("tenpii", "./sig/banner")
    // const result = await osu.beatmaps.replay("Blobby3000", "https://osu.ppy.sh/beatmapsets/380545#osu/848345", "./sig")
    const result = await osu.api.search("gabriel dropout")
    console.log(result[0].nominations)
})()
