"use strict";

//модуль сбора отзывов
(function ($) {
    $(function () {
        listReview();
        submitReview();
        deleteReview();
        addReview();
    })

})(jQuery);

// модуль может выводить отзывы
function listReview() {
    $('#wrapperreview').empty();
    $.ajax({
        url: 'db.json',
        dataType: 'json',
        success: function (datareview) {
            var $ul = $('<ul/>');
            console.log(datareview);
            datareview.review.forEach(function(item) {
                var $li = $('<li/>').text(item.text);
                var $buttonapprove = $('<button>', {
                    text: 'Одобрить',
                    class: 'approve',
                    'data-id': item.id,
                });
                var $buttondelete = $('<button>', {
                    text: 'Удалить',
                    class: 'delete',
                    'data-id': item.id,
                });
                if (item.class === 'null') {
                    $li.append($buttonapprove);
                    $li.append($buttondelete);
                } else if (item.class === 'delete') {
                    $li.css({
                        color: 'red'
                    });
                    $li.addClass('delete')
                } else {
                    $li.css({
                        color: 'green'
                    });
                }
                $ul.append($li);
            })
            $('#wrapperreview').append($ul);
        }
    })
}

//модуль может одобрять отзывы
function submitReview() {
    $('#wrapperreview').on('click', '.approve', function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: 'db.json',
            type: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({
                class: "approve",
            }),
            success: function () {
                listReview();
                addReview();
            }

        })
    })

}

//модуль может удалять отзывы
function deleteReview() {
    $('#wrapperreview').on('click', '.delete', function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: 'db.json',
            type: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({
                class: "delete",
            }),
            success: function () {
                listReview();
                addReview();
            }
        })
    })
}

//модуль может добавлять отзывы
function addReview() {
    var $textarea = $('<textarea/>');
    var $buttonaddreview = $('<button/>', {
        text: 'Добавить',
        class: 'addreview'
    })
    $('#wrapperreview').append($textarea);
    $('#wrapperreview').append($buttonaddreview);

    $('#wrapperreview').on('click', '.addreview', function () {
        $.ajax({
            url: 'db.json',
            type: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({
                
                
                class: "null"
            }),
            success: function () {
                listReview();                
            }
        })
    })
}