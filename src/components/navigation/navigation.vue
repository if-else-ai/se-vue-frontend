<template>
	<nav>
		<v-app-bar class="nav-bar__items" app outlined elevation="1">
			<!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
			<!-- Navigation Title -->
			<!-- <v-toolbar-title>{{ navTitle }}</v-toolbar-title> -->
			<a class="navbar-logo" href="/home">
				<h1>
					Kibby
				</h1>
			</a>

			<ul class="nav-menu">
				<a
					class="nav-links mr-4"
					v-for="(path, index) in path_list"
					:key="index"
					:href="path.path"
				>
					{{ path.title }}
				</a>
			</ul>

			<div class="nav-icon">

			<v-menu transition="slide-y-transition" offset-y="true" bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn v-bind="attrs" v-on="on" icon color="white">
						<v-icon>mdi-account</v-icon>
					</v-btn>
				</template>
				<!-- <v-list>
					<v-list-item v-for="(item, i) in items" :key="i">
						<v-list-item-title>{{ item.menu }}</v-list-item-title>
					</v-list-item>
				</v-list> -->
				<v-list>
					<v-list-item class="menu-link mx-4" @click="toProfile">
						<v-list-item-title  > Profile </v-list-item-title>
					</v-list-item>
					<v-list-item class="menu-link mx-4" @click="onLogout">
						<v-list-item-title  > Logout </v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-badge dot color="red" overlap offset-x="18" offset-y="16">
				<v-btn icon color="white" @click="toProductCart">
					<v-icon>mdi-cart-outline</v-icon>
				</v-btn>
			</v-badge>
			</div>	
		</v-app-bar>
	</nav>
</template>

<style src="./navigation.css" />

<script>
export default {
	name: "navigation",

	data: () => ({

		drawer: true,
		path_list: [
			{ title: "Home", path: "/home" },
			{ title: "Keyboard", path: "/keyboard" },
			{ title: "Customize", path: "/customize" },
			{ title: "Accesories", path: "/accesories" },
			{ title: "Tools", path: "/tools" },
		],

		items: [{ menu: "Account", path:"/profile" }],


	}),

	props: ["navTitle"],

	methods: {
		toProfile(){
			this.$router.push('profile')
		},
		toProductCart(){
			this.$router.push('cart')
		},
		onLogout(){
			this.$store.dispatch('logout')
		}

	},

	computed: {
		a(){
			let b = x;
		},
	},


};
</script>
