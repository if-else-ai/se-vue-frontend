<template>
    <v-card
        class="product__images"
        flat
    >
        <div class="product__sub-image">
            <v-item-group>
                <v-card outlined>
                    <div
                        v-for="(image, index) in images
                            .detail.images"
                        :key="index"
                    >
                        <v-img
                            :class="{
                                active: image.active,
                            }"
                            :src="image.src"
                            width="80"
                            height="80"
                            contain
                            @click="setActiveImage(index)"
                        />
                    </div>
                </v-card>
            </v-item-group>
        </div>
        <div outlined class="product__main-image">
            <v-img height="600" contain :src="currentImage" />
        </div>
    </v-card>
</template>

<script>
export default{
    name: "product-image",
    props: ['images', 'currentImage'],

    data: () => ({
        
	}),

    created(){
        // this.currentImage = currentImage
    },

    methods: {
        setActiveImage(index) {
			let item = this.images.detail.images[index];

			this.images.detail.images = this.images.detail.images.map(
				item => {
					return {
						src: item.src,
						active: false
					}
				}
			)

			if(item.active === false){
				item.active = !item.active;
			}

			this.$set(this.images.detail.images, index, item);
            this.$emit('setImage', this.images.detail.images[index].src)
		}
    }

};
</script>

<style scoped>
.active {
	border: 1px solid black;
	transition: all 0.4s;
}
.product__images {
	display: flex;
	flex-direction: row;
}

.product__images img {
	max-width: 100%;
	max-height: 100%;
}

.product-small-image {
	cursor: pointer;
}
.product__sub-image {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.product__main-image {
	border-right: none;
	border-top: none;
	border-bottom: none;
	overflow: hidden;
	flex-grow: 1;
}

</style>
