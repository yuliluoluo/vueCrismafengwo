<template>
	<div class="hotel">
		<crishead></crishead>
		<div class="hotel-find hotel-wrap">
			<div class="hotel-place">
				<div class="hotel-subtitle">目的地</div>
				<div class="hotel-address">
					<el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" > </el-amap>
					<input type="text" class="input-address" placeholder="目的地/城市" :value="city">
					<div class="place" @click=fun_place>
						<i class="place-icon"></i>
						我的位置
					</div>
				</div>
			</div>
			<div class="hotel-info">
				<div class="hotel-date">
					<div class="from-date" @click="fun_picker">
						<div class="hotel-subtitle">入住</div>
						<div class="date-content">{{fromDate}}</div>		
					</div>
					<div class="from-title">
						<span>{{count}}晚</span>
					</div>
					<div class="to-date" @click="fun_picker">
						<div class="hotel-subtitle">离店</div>
						<div class="date-content">{{toDate}}</div>
					</div>
				</div>
				<div class="hotel-room" @click="fun_picker">
					<div class="hotel-subtitle">每间</div>
					<div class="date-content">{{$store.state.personCount}}成人，{{$store.state.childrenCount}}儿童</div>
				</div>
			</div>
			<div class="hotel-button">
				<button>查找酒店</button>
			</div>
		</div>
		<div class="middle-menu hotel-wrap">
			<div class="menu-item">
				<div class="menu-icon"></div>
				<div class="menu-title">优惠券</div>
			</div>
			<div class="menu-item">
				<div class="menu-icon"></div>
				<div class="menu-title">酒店收藏</div>
			</div>
			<div class="menu-item">
				<div class="menu-icon"></div>
				<div class="menu-title">我的订单</div>
			</div>
		</div>
		<div class="topic hotel-wrap">
			<div class="topic-title">主题推荐</div>
			<div class="topic-topList">
				<ul>
					<li v-for="(item,index) in topicAllList" :class="{'top-item':true,'active':isActive[index]}" :key="index" @click="fun_choose(index)">{{item.name}}</li>
				</ul>
			</div>
			<div class="topic-bottomList">
				<ul>
					<li class="bottom-item" v-for="(item,index) in topicList" :key="index">
						<img :src="item.img_w155_h110" alt="">
					</li>
				</ul>
			</div>
		</div>
		<div class="tips hotel-wrap">
			<div class="topic-title">酒店攻略</div>
			<div class="tips-list">
				<ul>
					<li class="tips-item" v-for="(item,index) in tipsList" :key="index">
						<img :src="item.img_w210_h140" alt="">
						<div class="subtitle">
							{{item.title}}
						</div>
						<p><span class="place">{{item.mdd_name}}</span><span class="remark"><span>{{item.fav_num}}<i>·</i></span><span class="read">{{item.pv}}</span></span></p>
					</li>
				</ul>
			</div>
		</div>
		<transition name="picks">
			<datePick class="picks" v-show="$store.state.isPickShow"></datePick>
		</transition>
	</div>
</template>
<style lang="scss">
	@import "../base.scss";
	.picks{
		position: absolute;
		left: 0;
		top:0;
	}
	.picks-enter,
	.picks-leave-to {
		transform: translateX(100%);
		opacity: 0;
	}
	.picks-leave,.picks-enter-to{
		transform: translateX(0);
		opacity: 1;
	}
	.picks-enter-active,
	.picks-leave-active {
		transition: all 1s;	
	}
	.hotel{
		position: relative;
		height: 100%;
		background-color: #eee;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.hotel-find{
		padding-top:10/$baseFontSize*1rem;
		@include px2rem(padding-bottom,18);
		.hotel-subtitle{
			color: #474747;
			font-size: .37rem;
			font-weight: 300;
		}
		.date-content{
					padding: 11/$baseFontSize*1rem 0;
					font-size: .433rem;
					border-bottom: .5px solid #ccc;
				}
		.hotel-place{
			.hotel-address{
				display: flex;
				input{
					flex:1;
					outline: none;
					border: none;
					border-bottom: .5px solid #ccc;
					font-size: .53rem;
					font-weight: 600;
					@include px2rem(padding-top,15);
					@include px2rem(padding-bottom,10);
				}
				.place{
					@include px2rem(width,56);
					text-align: center;
					font-size: .32rem;
					.place-icon{
						display: block;
						margin: 0 auto;
						@include px2rem(width,18);
						@include px2rem(height,18);
						background: url("../../public/img/hotel/sprite_prod.png") 0 -8.8rem no-repeat;
						background-size: 10rem,23.28rem;
	
					}
				}
			}
		}
		@media screen and (max-width: 320px){
			.hotel-info{
				.hotel-date{
					display: flex;
					@include px2rem(margin-top,17);
					.from-date,.to-date{
						flex: 1;
					}
					.from-title{
						position: relative;
						width: 2rem;
						span{
							position:absolute;
							left:50%;
							transform: translate(-50%);
							top:50%;
						}
					}
				}
				.hotel-room{
					@include px2rem(padding-top,17);
				}
			}
		}
		@media screen and (min-width: 321px){
			.hotel-info{
				display: flex;
				padding-top: 17/$baseFontSize*1rem;
				border-bottom: .5px solid #ccc;
				.date-content{
					border: none;
				}
				.hotel-date{
					flex: 1;
					display: flex;
					.from-date,.to-date{
						flex: 1;
					}
					.from-title{
						position: relative;
						width: 2rem;
						span{
							position:absolute;
							left:50%;
							transform: translate(-50%);
							top:50%;
						}
					}
				}
				.hotel-room{
					width: 30%;
				}
			}
		}
		.hotel-button{
			@include px2rem(padding-top,17);
			button{
				background-color: #ffe24c;
				color: #474747;
				@include px2rem(height,42.6);
				@include px2rem(line-height,42.6);
				text-align: center;
				display: block;
				width: 100%;
				outline: none;
				border:none;
				font-size: .48rem;
			}
		}
	}
	.middle-menu{
		display: flex;
		@include px2rem(margin-top,8.5);
		@include px2rem(margin-bottom,8.5);
		.menu-item{
			flex:1;
			height: 2.33rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.menu-icon{
				width: .56rem;
				height: .56rem;
				margin-bottom: .28rem;
				background: url("../../public/img/hotel/sprite_prod.png") 0 -6.13rem no-repeat;
				background-size: 10rem 23.28rem;
			}
			&:nth-child(2) .menu-icon{
				background-position: 0 -5.52rem;
			}
			&:last-child .menu-icon{
				background-position: 0 -9.46rem;
			}
			.menu-title{
				color: #474747;
				font-size: .4rem;
			}
		}
	}
	.topic-title{
		color: #474747;
		@include px2rem(padding-top,17);
		@include px2rem(padding-bottom,17);
		font-size: .53rem;
	}
	.topic{
		@include px2rem(padding-bottom,17);
		margin-right: -17/$baseFontSize*1rem;
		ul{
			list-style: none;
			@include clearfix;
		}
		.topic-topList{
			.top-item{
				float: left;
				@include px2rem(width,80);
				@include px2rem(height,30);
				@include px2rem(margin-right,8);
				@include px2rem(margin-bottom,8.5);
				&:nth-child(3),&:last-child{
					margin-right: none;
				}
				text-align: center;
				color: #474747;
				@include px2rem(line-height,30);
				font-size: .43rem;
				font-weight: 300;
				background-color: #f8f8f8;
			}
			.active{
				background-color: #ffe247;
				font-weight: 600;
			}
		}
		.topic-bottomList{
				@include px2rem(height,93.3);
				overflow: hidden;
				ul{
					@include px2rem(height,110);
					overflow-x: auto;
					overflow-y: hidden;
					white-space: nowrap;
					width: 100%;
				}
				.bottom-item{
					display: inline-block;
					@include px2rem(width,103.4);
					@include px2rem(height,73.3);
					@include px2rem(margin-right,8.5);
					img{
						width: 100%;
						height: 100%;
					}
				}
		}
	}
	.tips{
		margin-right: -17/$baseFontSize*1rem;
		overflow:hidden;
		margin-bottom: -.5rem;
		ul{
			overflow-x: auto;
			overflow-y: hidden;
			padding-bottom: .5rem;
			white-space: nowrap;
			@include clearfix;
			.tips-item{
				display: inline-block;
				@include px2rem(margin-right,8.5);
				img{
					display: block;
					@include px2rem(width,140);
					@include px2rem(height,93.3);
				}
				.subtitle{
					@include px2rem(width,140);
					@include px2rem(margin-top,8.5);
					@include px2rem(margin-bottom,13.6);
					font-size: .48rem;
					font-weight: 600;
					color:#474747;
					line-height: .58rem;
					-webkit-box-orient: vertical;
    				-webkit-line-clamp: 2;
    				overflow: hidden;
    				text-overflow: ellipsis;
    				white-space: normal;
    				display: -webkit-box;
				}
				p{
					@include clearfix;
					.place{
						float: left;
						font-size: .32rem;
						font-weight: 600;
					}
					.remark{
						float: right;
						color: #474747;
						font-weight: 300;
						font-size: .32rem;
					}
				}
			}
		}
	}
</style>
<script>
	import crishead from "./Header.vue";
	import datePick from "./Date_Picker.vue";
	export default{
		components:{
			crishead,
			datePick
		},
		data(){
			let self=this;
			return{
				//isPickShow,
				topicList:[],
				topicAllList:[],
				tipsList:[],
				isActive:[],
				city:"",
				cityCopy:"",
				plugin:[{
            pName: 'Geolocation',
            events: {
            	
              	init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    // 如果key是企业的，还可以直接result.addressComponent获取省市，周边等信息
                    // 
                    console.log("amap");
                    console.log(result);
                    if(result.addressComponent.city){
                    	self.cityCopy=result.addressComponent.city;
                    }else{
                    	self.cityCopy=result.addressComponent.province;
                    }
                    console.log(self.cityCopy);
                    self.$nextTick();
                  }
                });
              }
            }
          }],
				center: [121.59996, 31.197646]
			}
		},
		watch:{
			
		},
		computed:{
			fromDate(){
				let from= new Date(this.$store.state.fromDate);
				let month=from.getMonth()+1;
				return month+"月"+from.getDate()+"日";
			},
			toDate(){
				let to=new Date(this.$store.state.toDate);
				let month=to.getMonth()+1;
				return month+"月"+to.getDate()+"日";
			},
			count(){
				return (new Date(this.$store.state.toDate).getTime()-new Date(this.$store.state.fromDate).getTime())/(1000*60*60*24)
			}
		},
		created(){
			this.$http.get('data/hotel.json')
				.then(({data}) => {
					this.topicAllList=data.data;
					this.isActive.length=this.topicAllList.length;
					this.isActive.fill(false);
					this.isActive[0]=true;
					this.topicList=data.data[0].list;
				})
				this.$http.get('data/hotel2.json')
				.then(({data}) => {
					this.tipsList=data.data.guides;

				})
		},
		methods:{
			fun_choose(index){
				let arr=this.isActive.concat();
				arr.fill(false);
				arr[index]=true;
				this.isActive=arr;
				this.topicList=this.topicAllList[index].list;
				console.log(this.isActive);
			},
			fun_place(){
				this.city=this.cityCopy;
				console.log(this.city+"fun");
			},
			fun_picker(){
				//this.isPickShow=true;
				this.$store.state.isPickShow=true;
			}
		}
	}
</script>