let oSearch = document.querySelector('#search');
let oAccount = document.querySelector('#accountBtn');
let oAdd = document.querySelector('#addBtn');
let oSearchBox = document.querySelector('#search-box');
let oActList = document.querySelector('#act-list');
let oAccountBox = document.querySelector('#account-box');
let $form_modal = $('.cd-user-modal');
oSearch.addEventListener('touchstart', function(event) {
    event = event || window.event;
    if (oSearchBox.className === "search-box-off") {
        oSearchBox.className = "search-box-on";
    } else {
        oSearchBox.className = "search-box-off";
    }
});
oAccount.addEventListener('touchstart', function(event) {
    event = event || window.event;
    //在登录页面，登录成功时向session中存储一个login状态为1
    //此处验证是否登录，如果登录
    if (oAccountBox.className === "account-box-off") {

        if (localStorage.login === '1') {
            oAccountBox.className = "account-box-on";
            oActList.innerHTML = `
          <li><a>我的主页</a></li>
          <li><a>我的提问</a></li>
          <li><a>我的回答</a></li>
      `;
        } else {
            $form_modal.addClass('is-visible');
        }
    } else {
        oAccountBox.className = "account-box-off";
        $form_modal.addClass('is-visible');
    }
})