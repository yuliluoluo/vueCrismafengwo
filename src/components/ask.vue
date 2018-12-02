<template>
	<div class="ask">
		<!-- <div class="header">
			<a href="#/index" class="btn1">
				<img src="/img/logo.png" alt="">
			</a>
			<a  class="btn3"></a>
		
			<a href="#/index" class="btn2">官网首页</a>
				<img src="/img/i_head.png" alt="">
		</div> -->
		<headers></headers>
		<div class="bd">
			<div class="question">
				<input type="text" v-model="msg" placeholder="请输入你的问题，不少于10个字">
				<span>{{num1}}/{{num2}}</span>
				<!-- <span>0/80</span> -->
			</div>
			<h3>问题说明&nbsp;(&nbsp;可选&nbsp;)</h3>
			<div class="instruction">
				<textarea cols="10" rows="10" v-model="words"></textarea>
				<span>{{num3}}/{{num4}}</span>

			</div>
			<h3>选择目的地</h3>
			<div class="location">
				<input type="text" v-model="city">
				<div class="img"></div>
				<div class="amap-page-container">
      				<el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center"> </el-amap>
      				<div class="toolbar">
        				<span v-if="loaded">
          				{{citys+district}}
        				</span>
        				<span v-else>正在定位</span>
       <!--  <p v-if="result.addressComponent.city!='undefined'">
        	{{result.addressComponent.city}}
        </p>
        <p v-else>{{result.addressComponent.province}}</p> -->
      				</div>
    			</div>
			</div>

				<!-- <a href="#/question" class="publish" >发布问题</a> -->
				<a   class="publish" @click="check">发布问题</a>
				<!-- dingwei start -->
				

<!-- dingwei end -->
		</div>
		<div class="mask" :class="{hide:isHide}">
			<div class="text">
				<div class="tip">{{tip}}</div>
				<div class="sure" @click="cancel">确定</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import '../base.scss';
* {
	margin: 0;
	padding: 0;
}
.amap-demo{
	height: 300px;
}
.ask {
	width: 100%;
	height:100%;
	a {
		text-decoration: none;
	}
	.header {
		@include clearfix;
		border-bottom: 1px solid #e5e5e5;
		width: 100%;
		height: 50px;
		.btn1 {
			display:inline-block;
			padding: 10px 15px;
			width: 102px;
			height: 27px;
			img {
				width: 100%;
				height: 100%;
			}
		
		}
		.btn2 {
			float: right;
			width: 93px;
			height: 50px;
			text-align: center;
			line-height: 50px;
			font-size: 15px;
			color: #ff9d00;
			position: relative;
			&:after {
				content: "";
				width: 1px;
				height: 15px;
				background-color: #efefef;
				position: absolute;
				right: 0;
				top: 17px;
			}
		}
		.btn3 {
			float: right;
			width: 50px;
			height: 50px;
			background: url("../../public/img/i_head.png") no-repeat 0px -50px;
			background-size: 100px 300px;
		}

	}
	.bd {
		padding: 10px  15px 0;
		box-sizing: border-box;
		width: 100%;
		input {
			box-sizing: border-box;
			// margin-top: 10px;
			width: 100%;
			height: 45px;
			padding: 10px 40px 10px 15px;
			background-color: #f0f0f0;
			font-size: 15px;
			border: none;
			border-radius: 4px;
			color: #666;
			overflow: hidden;
			&:focus {
				background-color: #fff;
				// border: 1px solid #ffa800;
				// border-radius: 4px;
			}
		}
		.question,.instruction {
			position: relative;
			span {
				position: absolute;
				bottom: 5px;
				right: 3px;
				width: 30px;
				height: 15px;
				line-height: 15px;
				font-size: 12px;
				color: #aaa;
			}
		}
		.location {
			position: relative;
			.amap-page-container{
				position:absolute;
				left: 40px;
				top: 50%;
				transform: translateY(-50%);
			}
			input {
				padding-left: 40px;
			}
			.img {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 10px;
				width: 18px;
				height: 21px;
				background: url("../../public/img/ask/loc.png") no-repeat;
				background-size: 18px 21px;
			}
			
		}

		h3 {
			margin: 15px 0 8px;
			font-size: 15px;
			font-weight: normal;
			color: #666;
		}
		.instruction {
			textarea {
			box-sizing: border-box;

				width: 100%;
				height: 190px;
				background-color: #f0f0f0;
				font-size: 15px;
				border: none;
				// outline: none;
				border-radius: 4px;
				color: #666;
				padding: 5px;
				&:focus {
					background-color: #fff;
				}
			}
			span {
				bottom: 10px;
				right: 15px;
			}
		}
		// 按钮
		.publish {
				margin-top:15px;
				color: #fff;
				border-radius: 3px;
				text-decoration: none;
				text-align: center;
				display: block;
				width: 100%;
				height: 30px;
				line-height: 30px;
				background-color: #ffa800;
		}
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .7);
		// padding: 0 10px;
		.text {
			position: absolute;
			width: 90%;
			height: 122px;
			left: 50%;
			top: 200px;
			// transform: translateY(-61px);
			transform: translate(-50%);
			background-color: #fff;
			border-radius: 5px;
			text-align: center;
			font-size: 14px;
		}
		.tip {
			width: 100%;
			height: 72px;
			line-height: 65px;
			border-bottom: 1px solid #ccc;
		}
		.sure {
			width: 100%;
			height: 50px;
			line-height: 50px;

		}
	}
	.hide {
		display: none;
	}
}
</style>
<script>
	import headers from "./Header.vue";
	export default {
		data () {
			let self=this;
			return {
				msg:'',
				words:'',
				num2:80,
				num4:1000,
				tip: "",
				isHide:true,
				city:"",
				pub:null,
				/*dingwei start*/
				citys:"",
				district:"",
				result:"",
				 center: [121.59996, 31.197646],
          lng: 0,
          lat: 0,
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    // 如果key是企业的，还可以直接result.addressComponent获取省市，周边等信息
                    /*self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];*/
                    self.loaded = true;
                    self.result=result;
                    if(result.addressComponent.city){
                    		self.citys=result.addressComponent.city;
                    }else{
                    	self.citys=result.addressComponent.province;
                    }
                    self.district=result.addressComponent.district;
                    self.$nextTick();
                  }
                });
              }
            }
          }]
			}
		},
		components:{
			headers
		},
		computed: {
			num1 () {
				// let str = this.msg;
				let num = this.getNum(this.msg);
				return num;
			},
			num3 () {
				// let str = this.words;
				let num = this.getNum(this.words);
				return num;
			}

		},
		methods: {
			getNum(str) {
				let arr = str.split("");
				let num = 0;
				for (let i = 0; i < arr.length; i++) {
					if(/[\u4e00-\u9fa5]/.test(arr[i])) {
						num++;
					}else if(/\s/.test(arr[i])) {
						// ???什么情况， 删除这行就错
						// num+=0.5;
					}else {
						num+=0.5
					}
				}
				return parseInt(num)
			},
			cancel (){
				this.isHide = true;
			},
			check (){
				if( this.num1 == 0 ) {
					this.isHide = false;
					this.tip = "请输入你的问题"
					// console.log("3322")
				}else if ( this.num1 < 10 ) {
					this.isHide = false;
					this.tip = "标题最少10个字"
				}else {
					this.$router.push("/question");
					// this.$router.push({path:'/question',query:{id:1}});
				}
			}

		}
	}
</script>