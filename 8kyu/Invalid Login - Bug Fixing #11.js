//[8 kyu] Invalid Login - Bug Fixing #11
const validate = (un, pw) => new Database().login(un, encodeURI(pw))
