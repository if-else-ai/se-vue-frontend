<template>
	<v-container>
		<div class="profile-container pt-4">
			<v-card class="profile-menu" width="400" max-height="400" elevation="8">
				<v-list>
					<v-list-item class="py-1">
						<v-icon class="mr-6">mdi-account</v-icon>
						<v-list-item-title  class="">
							Punnarat Rattanapawan
						</v-list-item-title>
					</v-list-item>
					<v-divider class="mx-6"></v-divider>

					<v-list nav>
						<v-list-item-group mandatory color="red darken-4">
							<v-list-item
								v-for="item in menuList"
								:key="item.title"
								:class="item.class"
								router
								:to="item.path"
							>
								<!-- icon & name-->
								<v-list-item-icon>
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>{{
										item.title
									}}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>

							
						</v-list-item-group>
					</v-list>
				</v-list>
			</v-card>

			<v-card elevation="0">
				<v-card class="pl-4 py-4" elevation="8" width="1100" > 
					<v-card-title class="mb"> จัดการบัญชีผู้ใช้</v-card-title>
					<v-divider class="mx-4"></v-divider>

					<div class="account-detail my-6">
						<v-row align="center">
							<v-col cols="2" align="right">
								ชื่อ
							</v-col>
							<v-col class="ml-6" md="4">
								<form>
									<input type="text" id="name" name="name" placeholder="ชื่อ" v-model="name">
								</form>
							</v-col>
							
						</v-row>
						
						<v-row align="" class="my-0">
							<v-col cols="2" align="right">
								<div class="gender mt-2">เพศ</div>
							</v-col>
							<v-col class="ml-6 pt-6 pb-0" md="4">
								<v-select 
									:items="items"
									dense
									outlined
									v-model="gender"
									
								></v-select>
							</v-col>
						</v-row>

						<v-row class="mt-0" align="center">
							<v-col cols="2" align="right">
								<div class="date">วันเกิด</div>
							</v-col>
							<v-col class="ml-6" md="4">
									<v-menu
										ref="menu"
										v-model="menu"
										:close-on-content-click="false"
										transition="scale-transition"
										offset-y
										min-width="auto"
									>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="date"
											label=""
											append-icon="mdi-calendar"
											readonly
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										v-model="date"
										:active-picker.sync="activePicker"
										:max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
										min="1950-01-01"
										@change="save"
									></v-date-picker>
									</v-menu>
								</v-col>
							</v-row>

							<v-row class="mt-0">

								<v-col cols="2" align="right">
									<div class="py-2">ที่อยู่</div>
								</v-col>

								 <v-col class="ml-6" md="4">
									<v-textarea
										solo
										name="input-7-4"
										label="Address"
										v-model="address"
									></v-textarea>
								</v-col>
							</v-row>

						
							<v-row align="center" class="mt-0">
								<v-col align="right" cols="2">	
									Email
								</v-col>
								<v-col class="ml-5" md="4">
									<form class="email-field">
										<input type="text" id="email" name="email" placeholder="Email" v-model="email">		
									</form>				
								</v-col>	
							</v-row>

							<v-row>
								<v-col cols="2"></v-col>
								<v-col class="ml-5" cols="2">
									<v-btn 
										color="blue"
										dark
									>
										บันทึก
									</v-btn>
								</v-col>
							</v-row>				
					</div>
				</v-card>
				<v-card class="mt-6 pl-4" elevation="8" width="1100" height="400"> 
					<v-card-title> จัดการรหัสผ่าน</v-card-title>
					<v-divider class="mx-4 "></v-divider>

					<div class="manage-password my-6">
						<v-row align="center" class="mt-0">
							<v-col align="right" cols="2">	
									รหัสผ่านเก่า
							</v-col>
							<v-col class="ml-5" md="4">
								<form class="email-field">
									<input type="text" id="password" name="passwprd" placeholder="รหัสผ่านเก่า" v-model="password">		
								</form>				
							</v-col>					
						</v-row>

						<v-row align="center" class="mt-0">
							<v-col align="right" cols="2">	
									รหัสผ่านใหม่
							</v-col>
							<v-col class="ml-5" md="4">
								<form class="email-field">
									<input type="text" id="new-password" name="new-password" placeholder="รหัสผ่านใหม่" v-model="newPassword">		
								</form>				
							</v-col>	
						</v-row>
						
						<v-row align="center" class="mt-0">
							<v-col align="right" cols="2">	
									ยืนยันรหัสผ่านใหม่
							</v-col>
							<v-col class="ml-5" md="4">
								<form class="email-field">
									<input type="text" id="confirm-password" name="confirm-password" placeholder="ยืนยันรหัสผ่านใหม่" v-model="confirmPassword">		
								</form>				
							</v-col>	
						</v-row>

						<v-row>
							<v-col cols="2"></v-col>
							<v-col class="ml-5" cols="2">
								<v-btn >				
		
									บันทึก
								</v-btn>
							</v-col>
						</v-row>
					</div>

				</v-card>
			</v-card>
		</div>

	</v-container>
</template>

<script>
export default {
	data: () => ({
		menuList: [
			{ title: "Account", icon: "mdi-account" },
			{ title: "Order History", icon: "mdi-account" },
		],
		items: ['ชาย','หญิง'],
		activePicker: null,
      	date: null,
     	menu: false,
		name: "",
		gender:"",
		address:"",
		password:"",
		newPassword:"",
		confirmPassword:""
	}),
	watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
	methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
};
</script>

<style scoped>

input[type=text] {
	width: 100%;
	padding: 5px 10px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

.profile-container {
	display: flex;
	flex-direction: columns;
	justify-content: center;
}

.profile-menu {
	margin-right: 8rem;
}

.profile__item {
	color: rgb(247, 247, 247);
	cursor: pointer;
}

.profile__item:hover {
	color: black;
}
</style>
