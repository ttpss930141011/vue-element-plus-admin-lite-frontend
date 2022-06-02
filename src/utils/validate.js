/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// export function validAccount (str) {
//   const validMap = ['admin', 'editor']
//   return validMap.indexOf(str.trim()) >= 0
// }
export function validAccount (str) {
  // const validMap = ['admin', 'editor']
  // return validMap.indexOf(str.trim()) >= 0
  return /^\d+$/.test(str)
}
