function isAnagram(str1, str2) {
  const cleanStr = (str) => str.replace(/\s/g,'').toLowerCase();
  const sortedStr =(str) => cleanStr(str).split('').sort().join('');

  return sortedStr(str1) === sortedStr(str2);
}

module.exports = isAnagram;
