<template>
	<nav>
		<v-app-bar class="nav-bar__items" app outlined elevation="1" >
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
			<!-- <v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon> -->
			<!-- <v-list-item-content>
					<v-list-item-title class="navigation-list">{{
						item.title
					}}</v-list-item-title>
				</v-list-item-content> -->

			<!-- <v-spacer></v-spacer> -->
		</v-app-bar>

		<!-- <v-navigation-drawer  v-model="drawer" app>
			<v-list-item class="py-2">
				App Icon
				<v-avatar size="50" color="deep-orange darken-4">

				</v-avatar>
				App Name
				<v-list-item-content class="px-5" style="font-family: Arial">
					<v-list-item-title class=""> MVC </v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list nav>
				<v-list-item-group mandatory color="red darken-4">
					display path list
					<v-list-item
						v-for="item in path_list"
						:key="item.title"
						router
						:to="item.path"
					>
						path icon & name
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title class="navigation-list">{{
								item.title
							}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-divider></v-divider>

				</v-list-item-group>
			</v-list>
		</v-navigation-drawer> -->
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
			{ title: "Login", path: "/login" },
			{ title: "Cart", path: "/cart" },
		],
	}),

	props: ["navTitle"],

	methods: {},
};
</script>
