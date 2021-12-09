<template>
	<v-container>
		<v-card elevation="4" class="pa-16 ">
			<v-text-field v-model="name" @change="log" label="hi"></v-text-field>
		</v-card>

	</v-container>
</template>

<style src="./style.css"></style>

<script>

export default {
	data: () => ({
		name: '',
	}),

	methods:{
		log(){
			console.log(this.name)
		}
	}
};


</script>


