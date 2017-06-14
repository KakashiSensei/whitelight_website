import React, { Component } from "react";

export default class FacebookPagePlugin extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: '<div class="fb-page" data-href="https://www.facebook.com/whitelight.social/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/whitelight.social/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/whitelight.social/">White Light</a></blockquote></div>' }}></div>
        );
    }
}