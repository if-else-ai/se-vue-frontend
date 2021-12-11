<template>
  <div class="shop_container">
    <div id="prod_main">
      <div id="product_content">
        <li class="prod_img prod_img1" id="prod_img1">
          <div class="protransparentbg">
            <h4 class="">FIBER FLOOR MAT</h4>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webs: [
        {
          name: "KEYBOARD",
          img: "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_750x960_crop_center.jpg?v=1592023134%20750w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1000x.jpg?v=1592023134%201000w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1500x.jpg?v=1592023134%201500w",
          src: "/shopping",
        },
        {
          name: "KEYBOARD",
          img: "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_750x960_crop_center.jpg?v=1592023134%20750w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1000x.jpg?v=1592023134%201000w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1500x.jpg?v=1592023134%201500w",
          src: "/shopping",
        },
        {
          name: "KEYBOARD",
          img: "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_750x960_crop_center.jpg?v=1592023134%20750w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1000x.jpg?v=1592023134%201000w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1500x.jpg?v=1592023134%201500w",
          src: "/shopping",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shop_container {
  padding-top: 80px;
  padding-bottom: 40px;
  margin-left: 100px;
  margin-right: 100px;
  overflow: hidden;
}
.prod_img {
  transition: all 2s ease-in-out;
  height: 500px;
  width: 550px;
  position: relative;
  overflow: hidden;
}

.prod_img:before {
  content: " ";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url(http://images.all-free-download.com/images/graphicthumb/beautiful_landscape_picture_02_hd_pictures_166284.jpg);
  background-size: cover;
  background-position: center center;
}

.protransparentbg {
  position: absolute;
  left: 20px;
  background: rgba(51, 51, 51, 0.8);
}

.prod_img:hover:before {
  transform: scale(1.3);
  transition: all 5s ease-in-out;
}
.content_wrap {
  position: absolute;
  top: 72%;
  right: 0;
  width: 500px;
  transform: none;
}
.content_wrap h3 {
  color: white;
  margin-bottom: 20px;
}
.content_wrap > button {
}
</style>
