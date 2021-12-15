<template>
    <div class="container my-" style="text-align: center">
        <h1> Cart is empty</h1>
       <img src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s=" width="200px"/> 
       <div class="mt-2">
           <h4 class="orange-red fw-600">Your cart is empty</h4>
           <v-btn
            depressed
            color="white"
            large
            elevation="2"
            class="mt-4 mb-4"
            @click="
                $router.push({
                    path: '/shopping',
                    query: {
                    category: 'ALL'
                    },
                })
            "
            >
                continue shopping
            </v-btn>
       </div>
    </div>
</template>

<script>
export default{
    name: "EmptyCart"
};
</script>

<style scoped>
.orange-red{
    color: orangered;
}
.darkblue{
    color: darkblue;
}
.fw-600{
font-weight: 600;
}
</style>
