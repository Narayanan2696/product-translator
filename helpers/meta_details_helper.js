

const createMetaDetailsHelper = (data) => {
  var keys = Object.keys(data);
  let sectionKeys = []
  let tagValues = []
  for (var i = 0; i < keys.length; i++) {
    keyValue = keys[i].split('.')
    sectionKeys.push(keyValue[0])
    tagValues.push(keyValue[1])
      // console.log(typeof keys[i])
    // console.log(result[keys[i]]);
  }
  uniqueSectionKeys = Array.from(new Set(sectionKeys))
  let details =[]
  for (var i=0; i< uniqueSectionKeys.length; i++){
    let values = []
    for (var j=0; j< keys.length; j++){
      if (keys[j].includes(uniqueSectionKeys[i])){
        keyValue = keys[j].split('.')
        values.push(keyValue[1])
      }
    }
    details.push({section: uniqueSectionKeys[i], tags: values})
  }
  return details
}

module.exports = {
  createMetaDetailsHelper
}