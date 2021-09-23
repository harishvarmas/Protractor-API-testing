let homepage = require('./homepage');
describe('pages',function(){
    it('pagesit',function(){
        homepage.get('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        homepage.register();
        homepage.enter_first_name('Hello');
        homepage.enter_last_name('world');
        homepage.enter_user_name('user123')
        homepage.enter_password('10101');
        homepage.clicks_button();
        homepage.enter_user_name('user123');
        homepage.enter_password('10101');
        homepage.clicks_button();
        browser.sleep(3000);
    });

});