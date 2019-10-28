const fs = require("fs");
const util = require("util");

const { performance } = require("perf_hooks");

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function do_it() {
  const results = [];

  const start = performance.now();
  const files = await readdir("./subs");
  for (const fileName of files) {
    const content = await readFile("./subs/" + fileName, { encoding: "UTF-8" });
    const split_content = content.trim().split(/(?:\r?\n\s*)+(?:\r?\n)/);

    const match = fileName.match(/^(S(\d+)E(\d+))(?:\s+(.+))?\.txt$/);

    const season = Number(match[2]);
    const episode = Number(match[3]);
    const display_name = match[4] || match[1];

    for (const chunk of split_content) {
      const rows = chunk.split(/\r?\n/);


      const time_match = rows[1].match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})/);
      const starttime =
        time_match[1] * 60 * 60 * 1000 +
        time_match[2] * 60 * 1000 +
        time_match[3] * 1000 +
        time_match[4] * 1;
      let text = rows.slice(2);
      let processed_text = []
      for (row of text) {
        row = row.replace("<i>", "")
        row = row.replace("</i>", "")
        if (row.substring(0, 2) === "- ") {
          row = row.substring(2);
        }
        processed_text.push(row)
      }
      
      text = processed_text.join("\n")
      
      results.push({ starttime, text, season, episode, display_name });
    }
  }
  await writeFile("./public/subs.json", JSON.stringify(results, null, "\t"))
  const end = performance.now();
  console.log(`Subtitles processed in ${Math.round(end - start)}ms`);
  console.log(`Total number of chunks: ${results.length}`)
}

do_it();
