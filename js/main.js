

  const options1 = {
    updateOnMove: true,
    pagination: false,           //画像枚数が分かるドットを画像下に表示するか否か
    arrows: false,               //画像スライド用の矢印を表示するか否か
    autoplay: true, 
    speed: 3000,             //自動で動かすか否か
    interval: 7000,              //自動再生の間隔をミリ秒単位で指定
    type: 'fade',                //スライダーのタイプ
    rewind: true,                //スライダーの巻き戻しをするか否か（繰り返し）
  }
  new Splide('.splide', options1).mount();


  //ハンバーガーメニュー（クリック時）
$(function () {
  $('.js-hamburger').on('click', function () {
    $('.js-hamburger').toggleClass('close');
    $('.header__nav').toggleClass('fade');
  });
});
