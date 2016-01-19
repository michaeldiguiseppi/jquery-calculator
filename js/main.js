$(document).ready(function() {
    $('span').on('click', function() {
        if ($(this).text() === 'C') {
            $('#screen').text('');
        } else {
            var value = $(this).text();
            $('#screen').text(value);
        };
    });


})