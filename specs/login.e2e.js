describe('My Login application', function () {
    // it('should login with valid credentials', async function () {
    //     this.retries(2);
    //     // throw new Error('!!!!')
    //     await browser.url('login');
    //     await $('#username').setValue('tomsmith');
    //     await $('#password').setValue('SuperSecretPassword!');
    //     await $('button').click();
    // });

    it('should login with not valid credentials', async () => {
        await browser.url('login');
        await $('#username').setValue('invaliduser');
        await $('#password').setValue('invalidpwsd!');
        await $('button').click();
        const text = await $("#flash").getText();
        if (!text.includes('Your username is invalid!')) {
            throw new Error('Wrong flash text: ' + text);
        }
        // throw new Error("!!!!!!")
    });
    it('ppp')
});


