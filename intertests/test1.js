const locales = [
  {
    code: "en_us",
    name: "English (United States)",
  },
  {
    code: "en_gb",
    name: "English (United Kingdom)",
  },
  {
    code: "da",
    name: "Danish",
  },
  {
    code: "de",
    name: "German",
  },
  {
    code: "sv",
    name: "Swedish",
  },
  {
    code: "nb",
    name: "Norwegian",
  },
  {
    code: "nl",
    name: "Dutch",
  },
  {
    code: "es",
    name: "Spanish",
  },
  {
    code: "es_mx",
    name: "Spanish (Mexico)",
  },
  {
    code: "it",
    name: "Italian",
  },
  {
    code: "fr",
    name: "French",
  },
  {
    code: "pt",
    name: "Portuguese",
  },
  {
    code: "pt_br",
    name: "Portuguese (Brazil)",
  },
  {
    code: "fi",
    name: "Finnish",
  },
  {
    code: "pl",
    name: "Polish",
  },
  {
    code: "cs",
    name: "Czech",
  },
];

const currencyCode = "SEK";

console.log("Locale name\t-\tSEK currency symbol");
for (const locale of locales) {
  const inter = require("inter").load(locale.code);
  const currency = inter.getCurrency(currencyCode);
  console.log(`${locale.name}\t-\t${currency.symbol}`);
}
