const Localize = require('localize')

var missingValue = new Localize({
  "Fill in the transalated data value for $[1]": {
      "en": "Fill in the transalated data value for $[1]",
      "te": "కోసం అనువదించబడిన డేటా విలువను పూరించండి $[1]"
  }
});

const getLocalization = (languageCode, tag) => {
  missingValue.setLocale(languageCode)
  return missingValue.translate("Fill in the transalated data value for $[1]", tag)
}

module.exports = {
  getLocalization
}