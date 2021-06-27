

+ function (w) {
    w.addEventListener('load', function () {
        if (w.location.pathname.indexOf('/stories/') > -1) {
            var links = document.querySelectorAll('.post-card .post-content a');
            for (let i = 0; i < links.length; i++) {
                links[i].title = decodeURI(links[i].href);
                new tippy(links[i], {
                    theme: 'light',
                    arrow: true,
                });
            }
        }
    })

    // // 随机背景
    // var arr = [
    //     'http://pic1.win4000.com/wallpaper/2018-11-26/5bfb8d5f6a972.jpg',
    //     'http://pic1.win4000.com/wallpaper/2018-11-26/5bfb8d5cbe85d.jpg',
    //     'http://pic1.win4000.com/wallpaper/2018-04-27/5ae2cac00acf4.jpg',
    //     'http://pic1.win4000.com/wallpaper/2018-10-15/5bc4578c5a306.jpg',
    //     'http://pic1.win4000.com/wallpaper/2018-11-09/5be54ba700f12.jpg',
    // ];

    // var index = Math.random() * arr.length | 0;

    // $('header.content-header').css('background-image', 'url(' + arr[index] + ')');

    // console.log(index);

}(window);
