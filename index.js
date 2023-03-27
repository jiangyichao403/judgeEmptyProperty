/**
 * @description 检查数据是否为空，为空返回true，不为空返回false
 * @param {any} data
 * @return {Boolean}
 * @example isEmpty({}) ⇒ true
 */
 export function judgeEmptyProperty(parameter) {
    // 检查字符串是否为空
    const checkStringEmpty = (str) => {
      return !str
    }
    // 检查数值是否为空
    const checkNumberEmpty = (num) => {
      return !num.toString()
    }
    // 检查对象是否为空
    const checkObjectEmpty = (obj) => {
      return Object.keys(obj).length === 0
    }
    // 检查数组是否为空
    const checkArrayEmpty = (arr) => {
      return arr.length === 0
    }
    const checkDataEmptyDict = {
      string: checkStringEmpty,
      number: checkNumberEmpty,
      Object: checkObjectEmpty,
      Array: checkArrayEmpty,
      function: () => false,
      undefined: () => true,
      boolean: (parameter) => !parameter,
      Null: () => true,
    }
    const isEmpty = (parameter) => {
      let type = typeof parameter
      if (type !== 'object') return checkDataEmptyDict[type](parameter)
      type = Object.prototype.toString
        .call(parameter)
        .replace(/^\[object (\S+)\]$/, '$1')
      return checkDataEmptyDict[type](parameter)
    }
    return isEmpty(parameter)
}