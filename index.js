

console.log('import index.js')

redirectPage()

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