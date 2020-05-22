const {getLocalization} = require('../services/translation_service')

const productDetailsHelper = (result, data, language) => {
  var valueSet = []
  dataKeys = Object.keys(data)
  for(var key in result.details){
    for (var j=0; j < result.details[key].tags.length; j++){
      compare = result.details[key].section.concat('.', result.details[key].tags[j])
      value = isPresent(compare, data)
      if (value !== null){
        valueSet.push({key: compare, value: value})
      }
      else{
        translated = getLocalization(language, compare)
        valueSet.push({key: compare, value: translated})
      }
    }
  }

  return valueSet
}

const isPresent = (compare, details) => {
  for(var key in details){
    if (key === compare){
      return details[key]
    }
  }
  return null
}

module.exports = {
  productDetailsHelper
}