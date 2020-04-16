

console.log('import index.js')

redirectPage()
showLoginStatus()

function redirectPage() {
  const isLogedIn = Cookies.get('isLogedIn') || null

  let redirectURL

  // 已登入了 卻進入 登入頁面
  if(window.location.pathname == '/' && isLogedIn) {
    console.log('redi to isLogedIn Page')
    redirectURL = `${window.location.protocol}//${window.location.host}/loged-in`
    window.location.replace(redirectURL)
  } else if(window.location.pathname == '/loged-in' && !isLogedIn) {
    // 未登入 卻進入 已登入畫面
    console.log('redi to Login Page')
    redirectURL = `${window.location.protocol}//${window.location.host}/`
    window.location.replace(redirectURL)
  }
}

function showLoginStatus() {
  const isLogedIn = Cookies.get('isLogedIn') || null
  
  const el = document.getElementById('login-status')
  let status = ''

  if(isLogedIn) {
    status = '狀態: 已登入'
  } else {
    status = '狀態: 未登入'
  }

  el.innerHTML = `
    <div id="login-status">${status}</div>
  `
}