exports.addAd = (d) => {
    var params =
        {
            id: "a89bae33-45bc-4936-a486-e7d2f78c1ba8",
            d: "d2hpdGVsaWdodC5zb2NpYWw=",
            wid: "406263",
            cb: (new Date()).getTime()
        };
    if (d.getElementById("dlgExitPop406263")) {
        let element = d.getElementById("dlgExitPop406263");
        element.parentNode.removeChild(element);
    }
    var qs = Object.keys(params).reduce(function (a, k) { a.push(k + '=' + encodeURIComponent(params[k])); return a }, []).join(String.fromCharCode(38));
    var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true;
    var p = 'https:' == document.location.protocol ? 'https' : 'http';
    s.src = p + "://api.content-ad.net/Scripts/widget2.aspx?" + qs;
    d.getElementById("contentad406263").appendChild(s);
}