<template>
	<v-container class="category__container">
		<v-tabs
			@change="onlog"
			v-model="selectedTab"
			class="tabs__container"
			centered
		>
			<v-tab v-for="(tab, index) in tabsItem" :key="index">
				{{ tab }}
			</v-tab>
		</v-tabs>
		<v-tabs-items v-model="selectedTab">
			<v-card v-if="tabsItem[selectedTab] === 'Keyboard'" flat>
				<v-card-text>{{ text }}</v-card-text>
			</v-card>
			<v-card v-if="tabsItem[selectedTab] === 'Customize'" flat>
				<v-card-text>{{ text }}</v-card-text>
			</v-card>
			<v-card v-if="tabsItem[selectedTab] === 'Accessories'" flat>
				<v-card-text>{{ text }}</v-card-text>
			</v-card>
			<v-card v-if="tabsItem[selectedTab] === 'Tools'" flat>
				<v-card-text>{{ text }}</v-card-text>
			</v-card>
		</v-tabs-items>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		tabsItem: ["Keyboard", "Customize", "Accessories", "Tools"],
		selectedTab: "Keyboard",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	}),

	methods: {
		onlog() {
			console.log(this.selectedTab);
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
}
</style>
