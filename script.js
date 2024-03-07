document.getElementById('showMoreButton').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        document.getElementById('showMoreButton').textContent = 'Hide More';
    } else {
        moreInfo.style.display = 'none';
        document.getElementById('showMoreButton').textContent = 'Show More';
    }
});

window.addEventListener('beforeunload', function(e) {
    var confirmationMessage = 'Are you sure you want to leave?';
    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});
