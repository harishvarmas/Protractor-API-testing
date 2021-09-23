let homepage = function(){
    let first_name  =  element(by.id('firstName'));
    let last_name = element(by.id('Text1'));
    let user_name = element(by.id('username'));
    let password = element(by.id('password'));
    let button = element(by.className('btn'));
    let register = element(by.linkText('Register'));

    this.get = function(url){
        browser.get(url);

    };
    this.register = function(){
        register.click();
    }
    this.enter_first_name = function(f){
        first_name.sendKeys(f)
    };
    this.enter_last_name = function(l){
        last_name.sendKeys(l)
    };
    this.enter_user_name = function(u){
        user_name.sendKeys(u)
    };
    this.enter_password = function(p){
        password.sendKeys(p)
    };
    this.clicks_button = function(){
        button.click()
    };




};
module.exports = new homepage();