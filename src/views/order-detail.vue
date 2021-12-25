<template>
    <v-container class="order__container">
		<v-card class="" width="1200">
			
		</v-card>
	</v-container>
</template>

<style scoped>
.carts__container {
	display: flex;
	width: 1200px;
}

</style>


<script>
export default{
    name: "orderDetail",
    data: () => ({
        
    }),

    created(){
        // this.$store.dispatch('getOrder', this.$route.query.orderID)
    },

    methods: {

    },

    computed: {

    },
};
</script>

