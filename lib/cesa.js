var M = module.exports = {
  step: 5
}

M.translate = function (step, source) {
  // TODO : 寫一個函數將字串中的所有字母位移n個單位,並輸出到cesa.txt
  let target = []
  for (let i = 0; i < source.length; i++) {
    let base = null
    let c = source[i]
    if (c >= 'a' && c <= 'z') base = 'a'.charCodeAt(0)
    if (c >= 'A' && c <= 'Z') base = 'A'.charCodeAt(0)
    if (base == null) {
      target.push(c)
    } else {
      let code = (source.charCodeAt(i) - base + step + 26) % 26 + base
      let c1 = String.fromCharCode(code)
      target.push(c1)
    }
  }
  return target.join('')
}

// step = 5 , a+5 = f
// 明文 : My name is Joe
// 密文: Rd sfrj nx Otj
// 修正：(原本寫成 Rd sfrk nx otk) 是否算錯了，k 應該是 j，而且 O 應該是大寫。
M.encoding = function (clear) {
  // TODO : 寫一個函數將字串中的所有字母位移n個單位,並輸出到cesa.txt
  return M.translate(M.step, clear)
}

M.decoding = function (secret) {
  // TODO : 讀取cesa.txt中的secret code 跟stars,再解碼
  return M.translate(-M.step, secret)
}
