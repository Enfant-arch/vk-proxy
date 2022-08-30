(function() {
    const API_REGEX = /^https:\/\/api.vk.(?:ru|com)/

    const oldFetch = window.fetch;
    window.fetch = async (input, options) => {
        if (options?.mode) delete options.mode;
        if (options?.credentials) delete options.credentials;

        if (API_REGEX.test(input))
            input = input.replace(API_REGEX, "https://" + PROXY_DOMAIN);

        return await oldFetch(input, options)
    };

    const oldXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (!arguments?.[1]) return oldXHROpen.apply(this, arguments);

        if (this?.withCredentials) this.withCredentials = false;

        let link = arguments[1] || "";

        if (API_REGEX.test(link))
            arguments[1] = link.replace(API_REGEX, "https://" + PROXY_DOMAIN);

        return oldXHROpen.apply(this, arguments);
    };

})();