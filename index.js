const validatePassword = (password) => {
  if (password.length >= 8 && numeric(password) && uppercase(password) && lowercase(password) && password.indexOf('!') >= 0) { return true } else { return false }
}

const numeric = (password) => {
  for (let i = 0; i < password.length; i++) {
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (number.indexOf(Number(password[i])) >= 0) { return true }
  }
}

const uppercase = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (password[i] !== password[i].toLowerCase()) { return true }
  }
}

const lowercase = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (password[i] !== password[i].toUpperCase()) { return true }
  }
}

module.exports = validatePassword
