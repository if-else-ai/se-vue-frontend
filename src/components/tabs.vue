<template>
  <v-container class="category__container">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-tabs
          v-model="selectedTab"
          class="tabs__container mb-6"
          centered
          fixed-tabs
          v-bind="attrs"
          v-on="on"
          optional
        >
          <v-tab
            v-for="(tab, index) in tabsItem"
            :key="index"
            v-bind="attrs"
            v-on="on"
            @change="onChangeCategory(tab, tabsImage[index])"
          >
            {{ tab }}
          </v-tab>
        </v-tabs>
      </template>
      <v-card>
        <v-row no-gutters>
          <v-col>
            <h4 class="category-header">Layout</h4>
            <v-card class="category__items" flat>
              <ul
                class="category__item"
                v-for="(item, index) in keyboardList"
                :key="index"
                @click="onChangeSubCategory(item, keyboardImage[index])"
              >
                <li class="py-3">
                  {{ item }}
                </li>
              </ul>
            </v-card>
          </v-col>
          <v-col>
            <h4 class="category-header">Type</h4>
            <v-card class="category__items" flat>
              <ul
                class="category__item"
                v-for="(item, index) in switchList"
                :key="index"
                @click="onChangeSubCategory(item, switchImage[index])"
              >
                <li class="py-3">
                  {{ item }}
                </li>
              </ul>
            </v-card>
          </v-col>
          <v-col>
            <h4 class="category-header">Profile</h4>
            <v-card class="category__items" flat>
              <ul
                class="category__item"
                v-for="(item, index) in keycapList"
                :key="index"
                @click="onChangeSubCategory(item, keycapImage[index])"
              >
                <li class="py-3">
                  {{ item }}
                </li>
              </ul>
            </v-card>
          </v-col>
          <v-col>
            <h4 class="category-header">Goods</h4>
            <v-card class="category__items" flat>
              <ul
                class="category__item"
                v-for="(item, index) in accesoriesList"
                :key="index"
                @click="onChangeSubCategory(item, accesoriesImage[index])"
              >
                <li class="py-3">
                  {{ item }}
                </li>
              </ul>
            </v-card>
          </v-col>
          <v-col>
            <h4 class="category-header">Tool</h4>
            <v-card class="category__items" flat>
              <ul
                class="category__item"
                v-for="(item, index) in toolList"
                :key="index"
                @click="onChangeSubCategory(item, toolImage[index])"
              >
                <li class="py-3">
                  {{ item }}
                </li>
              </ul>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-menu>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tabsItem: ["Keyboard", "Switch", "Keycap", "Accessories", "Tools"],
    tabsImage: [
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_x600.jpg?v=1611981271%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_800x.jpg?v=1611981271%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_1200x.jpg?v=1611981271%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_1400x.jpg?v=1611981271%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/BauerMoDo_3_of_11_1600x.jpg?v=1611981271%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/products/InsideCapsTop_1260x1260.jpg?v=1600618555",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3061_x600.jpg?v=1592023076%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3061_800x.jpg?v=1592023076%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3061_1200x.jpg?v=1592023076%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3061_1400x.jpg?v=1592023076%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3061_1600x.jpg?v=1592023076%201600w",
      "https://www.lifewire.com/thmb/-30BgUa_kDrTrG_FORXPEp5xiOA=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/keyboard-light-up-razer-gaming-3167d89ae92242e3b3e0fa8f5ff8c65e.jpg",
      "https://m.media-amazon.com/images/I/71VBQoL3AYL._AC_SL1500_.jpg",
    ],
    keyboardList: ["Full-Size", "TKL", "75%", "65%", "60%"],
    keyboardImage: [
      "https://www.keyboardco.com/blog/wp-content/uploads/2017/08/t9pxhBg.jpg",
      "https://i.imgur.com/YazpFQt.jpg",
      "http://static1.squarespace.com/static/5ea2a09b27b7cf28a788029d/5ea424ac3459dd34b66ce173/5ea515712fec9937a4639f91/1587877868485/IMG_8030.jpg?format=1500w",
      "http://static1.squarespace.com/static/5ea2a09b27b7cf28a788029d/5ea424ac3459dd34b66ce173/613e06970e308a445d6a0897/1631455013827/P1037184.jpg?format=1500w",
      "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/11/Mechanical-Keyboard-Buying-Guide-Gear-Patrol-lead-full.jpg",
    ],
    switchList: ["Linear", "Tactile", "Clicky"],
    switchImage: [
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
    ],
    keycapList: ["OEM Profile", "Cherry Profile", "XDA Profile"],
    keycapImage: [
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
    ],
    accesoriesList: ["Deskmat", "Palm Rest", "Keyboard Pouch", "Aviator Cable"],
    accesoriesImage: [
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
    ],
    toolList: ["Keycap Puller", "Lubricant", "other"],
    toolImage: [
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_x600.jpg?v=1592023134%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_800x.jpg?v=1592023134%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1200x.jpg?v=1592023134%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1400x.jpg?v=1592023134%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/Meka_Mat_1799x1119_6b565110-77e2-4564-bf22-a05657f9c98c_1600x.jpg?v=1592023134%201600w",
      "https://cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3068_x600.jpg?v=1612133095%20600w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3068_800x.jpg?v=1612133095%20800w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3068_1200x.jpg?v=1612133095%201200w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3068_1400x.jpg?v=1612133095%201400w,%20//cdn.shopify.com/s/files/1/0054/0878/4458/collections/IMG_3068_1600x.jpg?v=1612133095%201600w",
    ],

    selectedTab: "",
  }),

  methods: {
    onChangeCategory(tab, src) {
      console.log(this.tabsItem[this.selectedTab]);
      this.$emit("changeCategory", tab);
      this.$emit("changeCategorImage", src);
    },
    onChangeSubCategory(category, src) {
      console.log(this.tabsItem[this.selectedTab]);
      console.log(src);
      this.$emit("changeSubCategory", category);
      this.$emit("changeSubCategorImage", src);
    },
  },
};
</script>

<style scoped>
.tabs__container {
  background-color: white;
  color: black;
}

.v-tab {
  padding: 0 4rem;
}
.v-tabs--active {
}

.category__container {
  padding-top: 0;
  padding-bottom: 0;
}

.category__items {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding-top: 0.2rem;
}

.category__item li {
  text-align: center;
  list-style: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

.category__item li:hover {
  background-color: rgb(233, 233, 233);
  transition: all 0.4s;
  font-size: 1.1rem;
}

.category-header {
  margin-top: 12px;
  text-align: center;
  color: rgb(85, 35, 177);
}
</style>
