<template>
	<div class="poppular_container">
			<!-- text start-->
			<div class="text_warp">
					<h2>TAG YOUR PRODUCT PHOTOS</h2>
					<h2>WITH #KIBBY TO BE</h2>
					<h2>FEATURED!</h2>
			</div>
			<!-- text end-->
			<!-- image start-->
			<div class="gallery__image">
				<v-row>
					<v-col
						v-for="(n,index) in galleryImage"
						:key="index"
						class="d-flex child-flex"
						cols="3"
					>
						<v-img
							:src="n"
							aspect-ratio="1"
							class="grey lighten-2 gallery-img"
						>
							<template v-slot:placeholder>
								<v-row
									class="fill-height ma-0"
									align="center"
									justify="center"
								>
									<v-progress-circular
										indeterminate
										color="grey lighten-5"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
					</v-col>
				</v-row>
			</div>
			<!-- image end-->
	</div>
</template>


<script>
// image assets

export default {
	data: () => ({
		galleryImage : [
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/264585395_329747955328248_5833065917399690365_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=-h3_W4Ts3kYAX-4kAv9&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_qrhL_jGHeL08JJRi5o36c2ytVpsnuEJ71ApPs7hBWsg&oe=61CCCE8A&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/263858915_1876763662513620_7500589738472471039_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=twiP61WefNMAX87ruWN&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_Q7NR_OgFtUAjIiVduNK4iloLp3vrS_cA_awKctbl2PA&oe=61CC72A1&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/p320x320/262862801_616000166518184_8286427555132120096_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=DxQc9kfz4hcAX8TCTxz&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT-Q4_RM0eiiGtxXEQoem33Vkmyt8_NrM-5sV3QIlot9Fg&oe=61CC83E0&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/260789742_1378143412600673_2320758620691728050_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=Ff3_y-V_smcAX8lGnhe&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT9B8HEaXCY_7Nqgvjr8DPaGP3F0ARYgwYCZZIUFhjM0WQ&oe=61CC683A&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/258782193_292997296044733_3097469535685700868_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=s3Ag0i3wFxcAX_BAgAe&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT8t_isx-8ggG5A7D1Mx_Jn9RDVIB6Iqx25CDcQzY3PehA&oe=61CC68FC&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/256530445_481075979864525_3235071643237989209_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=grjDOY2084UAX-LfqCB&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT-rGXAdIYhdF721uLP_9zTJoDTjihQLodCBYYUWCqUvZA&oe=61CD0A11&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/248220439_3111224925869150_6952441609325493824_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=M7rcEcoLGyMAX9OLs-k&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT8j52e-KF8vPEPgzWDiYgETW0snfOjOtXGorbh4WvLvsQ&oe=61CC7675&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/253562715_401897698245704_1466701497369942085_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=l36iosjkYU0AX8HaOVO&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT9vM4mWA4QArMnYWl216ODElHCocofu7VLXjL5djd1WRA&oe=61CC7C2D&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/255151993_238805001571361_4794863833703309589_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=VmNpcqN491IAX-MFa2r&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_mi4z9pEUsDRiZ0G_7N3KyzKsXZgyZCuV0_JX3XAkFjw&oe=61CCBF39&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/252041067_403770148125558_5766814473951534565_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=xq7yQSz74q0AX9e1h2t&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT-_EWrVsXuwcJ7vlx2cQ7Ro7r0MKhW9X-C1LCrYNHRCIQ&oe=61CC8A27&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/254326290_1236981616811520_3767187547527860711_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=kCVkdbj8cAgAX82ZAH7&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT9Gt2rEaY1Gbx3V5i90nQSclGQ46hUS0we4E1GmMmznlA&oe=61CC6EC9&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/250562738_418197009774503_1602443625203828425_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=vhUE0GSfX2MAX-f3Kot&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT8nUWBzJio4zU5mEO29LvfisK1Ekcb51oVDGNbgyRWqOA&oe=61CC7360&_nc_sid=b9f2ee"
	]
	}),
	computed: {
	},
};
</script>

<style scoped>
.poppular_container {
	padding-top: 40px;
	padding-bottom: 40px;
	margin-left: 100px;
	margin-right: 100px;
	display: flex;
	flex-direction: column;
}

.poppular_container .text_warp{
	margin: 20px 0px;
}

.poppular_container .text_warp h2 {
	display: block;
	text-align: center;
	color: rgb(0, 162, 255);
	font-family: interstate,sans-serif;
	font-weight: 700;
	font-style: normal;
}

.gallery__image{
	margin: 60px 0px 50px 0px;
}

.gallery-img{
	border-radius: 5px;
}
</style>