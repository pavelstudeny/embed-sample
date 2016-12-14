(function () {
    if (typeof process === 'undefined') {
        window.process = {
            versions: {
                node: "n/a",
                chrome: '"' + navigator.userAgent.match(/Chrom[^ ]+/) + '"',
                electron: "n/a"
            }
        };
    }
})();
