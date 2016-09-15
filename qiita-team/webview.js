module.exports = (Franz, options) => {
    setTimeout(() => {
        location.reload();
    }, 90000);

    const latest = localStorage.getItem("Franz.QiitaTeam.latest");
    const now = $('div.teamItems .teamItems_element_datetime')[0].title;
    var unread = 0;

    if (latest && latest != now) {
        unread = 1;
    }

    localStorage.setItem("Franz.QiitaTeam.latest", now);

    function getMessages() {
        $('h1.teamItems_element_title a').each((i, e) => {
            $(e).attr('target', '_blank');
        });

        const notify = parseInt($('div.globalNotifications_count')[0].textContent)
        Franz.setBadge(notify, unread);
    }

    Franz.loop(getMessages);
}
