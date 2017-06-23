import config from "../../config";

exports.loginFacebook = () => {
    return new Promise((resolve, reject) => {
        FB.init({
            appId: config.appID,
            xfbml: true,
            version: 'v2.9',
            status: true
        });

        FB.login((response) => {
            if (response.status === 'connected') {
                return resolve(response);
            } else if (response.status === 'not_authorized') {
                console.log("the user is logged in to Facebook, but has not authenticated your app");
                return reject();
            } else {
                console.log("the user isn't logged in to Facebook.");
                return reject();
            }
        }, { scope: config.scope });
    })

}