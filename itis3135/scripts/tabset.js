function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.style.display = 'none';
    });

    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';

    document.querySelector('.tab[data-tab="' + tabId + '"]').classList.add('active');
}