function testJS() {
    var b = document.getElementById('name').value,
        url = 'https://repl.it/@nels277/bruhboxchat' + encodeURIComponent(b);

    document.location.href = url;
}
