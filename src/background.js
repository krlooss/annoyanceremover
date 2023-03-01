chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Toggle Annoyance Remover on this website",
        contexts: ["all"],
        id: "toggle-on-site"
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "toggle-on-site") {
        chrome.tabs.executeScript(tab.id, {
            code: "var disabled = localStorage.getItem('disable-annoyance-remover'); localStorage.setItem('disable-annoyance-remover', !disabled); location.reload();"
        });
    }
});
