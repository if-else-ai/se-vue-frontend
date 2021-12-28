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
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/250562738_418197009774503_1602443625203828425_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=kBDLeqxlaa0AX9mpUvz&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT8KPMsMlDZ1uH5oDe093G9iDQD0N42zGJzvNZwG-Odhcw&oe=61BAA720&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/263858915_1876763662513620_7500589738472471039_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=YlrBZG_VaWAAX_7ZRGf&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_13vggt8O_5ByItR9uuxapRipjSqP1MaGTsTmh9jtwEA&oe=61BAA661&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/p320x320/262862801_616000166518184_8286427555132120096_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=c6YggBrMlaUAX_rY6lG&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_wwPOMSwDXYfNbWfnrpDL1S2HwwxyysViXhp0r7qm5ag&oe=61BAB7A0&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/260789742_1378143412600673_2320758620691728050_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=L3MI67PZTy8AX-Hsx2l&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT86nbN54lt9fI--7QKAcZ14o6aDb2YTRVHVigeAKxn-LA&oe=61BA9BFA&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/258782193_292997296044733_3097469535685700868_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=oyXksXDF_fkAX9X4qqz&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_TO-1d5cX5ZBg6c7QOX3K2eoU5gzN1oQSHsA0G6oXVhg&oe=61BA9CBC&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/256530445_481075979864525_3235071643237989209_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=z5FQh0Khh-sAX8MBuok&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT9pV0GLZBHHsWavlV3uTHoCd5H0xWTaZjVlqgbTGpzzVg&oe=61BA9511&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/248220439_3111224925869150_6952441609325493824_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=ir9dbgvGSu4AX-QoU1q&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_ptPxdqU_pEi4-umQhzxKAqGPs-zwS7I4MqPzy83ABZQ&oe=61BAAA35&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/255151993_238805001571361_4794863833703309589_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=gRVNvAk6ovUAX9mzPYw&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT-_BpXwfM3TLOQVChpv-cZsd7SbTO8dN-xoC4-kR3L3mA&oe=61BA9E99&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/254326290_1236981616811520_3767187547527860711_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=SudZZCEH7tYAX8I-zFZ&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT8QoG1zXoJ7QvJgjbHfAHPjrtgPXW5cINYcFMndOelB1w&oe=61BAA289&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/253562715_401897698245704_1466701497369942085_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=WX8cMXu03AoAX89UXn6&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT9T8VXpbPB-TWMHtYlfQJMtSaehskLyx7EcfReeHRUCtQ&oe=61BAAFED&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/252041067_403770148125558_5766814473951534565_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=J2skLQrDLf0AX8oysLg&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT_csRnb2yo4lT7uLAccIfU4DscJ66izE3LeyCv_qiEHsg&oe=61BABDE7&_nc_sid=b9f2ee",
		"https://scontent.cdninstagram.com/v/t51.2885-15/e35/s320x320/250562738_418197009774503_1602443625203828425_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=kBDLeqxlaa0AX9mpUvz&edm=AMO9-JQAAAAA&ccb=7-4&oh=00_AT8KPMsMlDZ1uH5oDe093G9iDQD0N42zGJzvNZwG-Odhcw&oe=61BAA720&_nc_sid=b9f2ee"
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