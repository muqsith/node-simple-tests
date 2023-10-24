const fs = require("fs"),
  os = require("os"),
  config = require("config"),
  sax = require("sax").createStream(true),
  wiktionary = config.get("wiktionary"),
  fileReadStream = fs.createReadStream(wiktionary.xml, { encoding: "utf8" }),
  fileWriteStream = fs.createWriteStream(wiktionary.json, { encoding: "utf8" });
const MAIN = "page",
  PAGE_TAGS = ["title", "id"],
  REVISION_TAGS = ["id", "text", "timestamp", "format"],
  CONTRIBUTOR_TAGS = ["id", "username"];

let current = null,
  current_tag_name = null,
  in_page = false,
  in_revision = false,
  in_contributor = false;
function setTagMode(tagName, value) {
  switch (tagName) {
    case "page":
      in_page = value;
      break;
    case "revision":
      in_revision = value;
      break;
    case "contributor":
      in_contributor = value;
      break;
    default:
  }
}

function setAttributeValue(attributeName, text) {
  if (/\w+/.test(text)) {
    current[attributeName] = text;
  }
}

function setAttribute(text) {
  if (in_page && !in_revision && !in_contributor) {
    if (PAGE_TAGS.indexOf(current_tag_name) !== -1) {
      setAttributeValue(current_tag_name, text);
    }
  }
  if (in_revision && !in_contributor) {
    if (REVISION_TAGS.indexOf(current_tag_name) !== -1) {
      if (current_tag_name === "id") {
        setAttributeValue("revisionid", text);
      } else if (current_tag_name === "text") {
        if (text) {
          current[current_tag_name] = current[current_tag_name]
            ? current[current_tag_name] + text
            : text;
        }
      } else {
        setAttributeValue(current_tag_name, text);
      }
    }
  }
  if (in_contributor) {
    if (CONTRIBUTOR_TAGS.indexOf(current_tag_name) !== -1) {
      if (current_tag_name === "id") {
        setAttributeValue("userid", text);
      } else {
        setAttributeValue(current_tag_name, text);
      }
    }
  }
}

sax.on("ready", () => {
  // do something on ready
});

sax.on("error", (e) => {
  console.error(e);
});

sax.on("opentagstart", (node) => {
  if (node.name === "page") {
    current = {};
  }
  setTagMode(node.name, true);
  current_tag_name = node.name;
});

sax.on("opentag", (node) => {
  // can check for node.isSelfClosing
});

sax.on("text", (text) => {
  setAttribute(text);
});

sax.on("attribute", (attr) => {
  // No xml attributes
});

sax.on("closetag", (name) => {
  setTagMode(name, false);
  if (name === "page") {
    //let _text = Buffer.from(current.text).toString('base64');
    //current.text = _text;
    let line = JSON.stringify(current) + "\n";
    fileWriteStream.write(line);
  }
});

sax.on("end", () => {});

fileReadStream.pipe(sax);
