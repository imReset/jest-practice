function caesarCipher(str, shift) {
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
    const isUpperCase = char === char.toUpperCase();
    if (/[A-Za-z]/.test(char)) {
      let shiftedCode = code + shift;

      if (
        (isUpperCase && shiftedCode > 90) ||
        (!isUpperCase && shiftedCode > 122)
      ) {
        shiftedCode -= 26;
      }

      return String.fromCharCode(shiftedCode);
    }
    return char;
  };

  const shiftedStr = Array.from(str, (char) => shiftChar(char, shift));

  return shiftedStr.join("");
}

module.exports = caesarCipher;
