function login_page() {
    //glPageContent.innerHTML = `<div class="g-signin2" id="check" data-onsuccess="onSignIn">G</div>`

}

function onSignIn(googleUser){
    home_page(googleUser);
}
