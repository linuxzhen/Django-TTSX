// 增加商品数量
function addgoods(id) {
    var csrf = $('input[name="csrfmiddlewaretoken"]').val();
    $.ajax({
        url: '/shopping/addgoods/',
        type: 'POST',
        data: {'goods_id': id},
        dataType: 'json',
        headers: {'X-CSRFToken': csrf},
        success:function (data) {
            if (data.code == '200'){
                console.log(data);
                $('.num_show_'+ id).val(data.count)
                $('#price'+ id).html(data.goods_price)
            }
        },
        error:function (data) {
            console.log(data)
        }
    })
}


// 减少商品数量
function subgoods(id) {
    var csrf = $('input[name="csrfmiddlewaretoken"]').val();
    $.ajax({
        url:'/shopping/subgoods/',
        type:'POST',
        data:{'goods_id':id},
        dataType:'json',
        headers:{'X-CSRFToken':csrf},
        success:function (data) {
            if (data.code == '200') {
                if (data.count >= 1){
                    $('.num_show_'+ id).val(data.count)
                    $('#price'+ id).html(data.goods_price)
                }else {
                    alert('亲! 生活不易啊, 至少买一个吧!')
                }
                console.log(data);
            }
        },
        error:function (data) {
            console.log(data)
        }
    })
}


// 刷新商品数量
$.get('/shopping/goodsnum/', function (data) {
    if (data.code == '200'){
        console.log(data);
        for (var i=0; i<data.carts.length; i++){
            $('.num_show_'+ data.carts[i].goods_id).val(data.carts[i].count)
        }
    }
});


// 计算商品总价
function tatal_price() {
    $.get('/shopping/tatalprice/', function (data) {
        console.log(data);
        if (data.code == '200'){
            console.log(data)
            // $('#').html(data.tatal_price)
        }
    })
}
tatal_price();











