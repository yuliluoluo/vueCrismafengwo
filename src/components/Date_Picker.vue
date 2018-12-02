<template>
	<div class="date-picker">
		<div class="date-header">
			<span class="reback" @click="//$router.go(-1)
		$store.state.isPickShow=false">
				<span class="reback white"></span>
			</span>cris马蜂窝
		</div>
		<div class="date-choose">
			<button class="from-btn">
				<span>入住</span>
				<date-picker class="pick" :date="startTime" :option="option" :limit="limit"></date-picker>
			</button>
			<button class="to-btn">
				<span>离店</span>
				<date-picker class="pick" :date="endTime" :option="option2" :limit="limit"></date-picker>
			</button>
		</div>
		<div class="people-choose hotel-wrap">
			<div class="title">每间房住</div>
			<div class="person">
				<span>成人</span>
				<div class="count">
					<i @click="fun_min('person')" :class="{'disable-min':isPersonMinDisable}"></i>
					<span>{{personCount}}</span>
					<i @click="fun_plus('person')" :class="{'disable-max':isPersonMaxDisable}"></i>
				</div>
			</div>
			<div class="children">
				<span>儿童</span>
				<div class="count">
					<i @click="fun_min('children')" :class="{'disable-min':isChildMinDisable}"></i>
					<span>{{childrenCount}}</span>
					<i @click="fun_plus('children')" :class="{'disable-max':isChildMaxDisable}"></i>
				</div>
				
			</div>
			<div class="child-list hotel-wrap" v-show="childrenCount">
				为您匹配合适住宿，请填写儿童年龄
				<ul>
					<li v-for="(item,index) in childrenCount">
						<span>第{{index+1}}位儿童</span>
						<select name="age" id="" v-model="ageOption[index]">
							<option >&lt;1岁</option>
							<option v-for="(item,index) in 17">
								{{index+1}}岁
							</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
		<button class="submit-btn" @click="fun_submit">
			确定
		</button>
	</div>
</template>
<style lang="scss">
	@import "../base.scss";
	.date-picker{
		width: 100%;
		height:100%;
		background-color: #fff;
		.date-header{
			text-align:center;
			width: 100%;
			height: 1.2rem;
			font-size: .427rem;
			line-height: 1.2rem;
			border-bottom: .5px solid #e5e5e5;
			position: relative;
			.reback{
				position: absolute;
				left:0;
				top:50%;
				transform: translateY(-50%);
				@include arrow(.4rem,#000,right);
				.white{
					position: absolute;
					left:-.2rem;
					top:50%;
					border-right-color: #fff;
				}
			}
		}
		.date-choose{
			display: flex;
		}
		.from-btn,.to-btn{
			flex: 1;
			border:none;
			padding: .1rem 0;
			background-color: #fff;
			border-bottom: .5px solid #e5e5e5;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			span{
				padding: .1rem 0;
			}
			.pick{
				margin:0;
				padding: 0;
				width: 100%;
				.cov-datepicker{
					margin:0;
					text-align: center;
					padding: 0!important;
					border: none!important;
					box-shadow: none!important;
					width:160/$baseFontSize*1rem;
					color:#111!important;
				}
			}
		}
		.active{
			background-color: #ffe24c;
		}
		.submit-btn{
			position: fixed;
			bottom:0;
			left: 0;
			border: none;
			width: 100%;
			height: 1.3rem;
			text-align: center;
			line-height: 1.3rem;
			background-color: #ffe24c;
		}
		.people-choose{
			.title{
				font-size: .43rem;
				color: #666;
				padding: 17/$baseFontSize*1rem 9.8/$baseFontSize*1rem 0;
			}
			.person,.children{
				font-size: .43rem;
				color: #666;
				padding:17/$baseFontSize*1rem 9.8/$baseFontSize*1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.count{
					display: flex;
					align-items: center;
					span{
						display: inline-block;
						width: 2.6rem;
						font-size: .8rem;
						color:#ff9d00;
						text-align: center;
					}
					i{
						width: .65333rem;
    					height: .65333rem;
    					background: url("../../public/img/hotel/sprite_bg_v1_5.png") no-repeat;
    					background-size: 4rem auto;
    					display: inline-block;
    					background-position: -2.41333rem 0;
    					&:last-child{
    						background-position: -1.72rem -0.68rem;
    					}
					}	
					.disable-min{
						background-position: -1.72rem 0;
					}	
					.disable-max{
						background-position: -2.41333rem -0.68rem!important;
					}
				}
			}
			.child-list{
				ul{
					list-style: none;
					width: 100%;
					li{
						display: flex;
						height: 1.2rem;
						line-height: 1.2rem;
						align-items: center;
						justify-content: space-between;
						select{
							color: #ff9d00;
							outline: none;
							border: none;
							font-size: .6rem;
						}
					}
				}
			}
		}
	}
</style>
<script>
	import myDatepicker from 'vue-datepicker';
	export default{
		 data () {
    return {
    	ageOption:["<1岁","<1岁","<1岁","<1岁"],
    	personCount:this.$store.state.personCount,
    	childrenCount:this.$store.state.childrenCount,
    	isPersonMinDisable:false,
    	isPersonMaxDisable:false,
    	isChildMinDisable:true,
    	isChildMaxDisable:false,
      // for Vue 2.0
      startTime: {
        time: ''
      },
      endTime: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: new Date().toLocaleDateString().split('/').join('-'),
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#e5e5e5',
          headerText: '#111'
        },
        buttons: {
          ok: '确定'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', '十一月', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', '十一月', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [0,1, 2, 3, 4, 5,6]
      },
      {
        type: 'fromto',
        from: new Date(new Date()-24*60*60*1000).toLocaleDateString().split('/').join('-'),
        to: '2188-12-31'
      }],
      option2: {
        type: 'day',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: new Date(new Date().getTime() + 24*60*60*1000).toLocaleDateString().split('/').join('-'),
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#e5e5e5',
          headerText: '#111'
        },
        buttons: {
          ok: '确定'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', '十一月', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', '十一月', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [0,1, 2, 3, 4, 5,6]
      },
      {
        type: 'fromto',
        from: new Date(new Date()- 24*60*60*1000).toLocaleDateString().split('/').join('-'),
        to: '2188-12-31'
      }]
    }
  },
  watch:{
  	startTime:{
  		handler(newvalue){
	  		let start=new Date(newvalue.time);
	  		let end =new Date(this.endTime.time);
			if(end<start){
				let tempTime=this.endTime.time;
				this.endTime.time=newvalue.time;
				this.startTime.time=tempTime;
			}	  		
  		},
  		deep:true
  	},
  	endTime:{
  		handler(newvalue){
	  		let end=new Date(newvalue.time);
	  		let start =new Date(this.startTime.time);
			if(end<start){
				let tempTime=this.startTime.time;
				this.startTime.time=newvalue.time;
				this.endTime.time=tempTime;
			}	  		
  		},
  		deep:true
  	}
  },
  components: {
    'date-picker': myDatepicker
  },
  methods:{
  	fun_submit(){
  		if(this.startTime.time)
  		this.$store.state.fromDate=this.startTime.time;
  		if(this.endTime.time)
  		this.$store.state.toDate=this.endTime.time;
  		this.$store.state.isPickShow=false;
  		this.$store.state.personCount=this.personCount;
  		this.$store.state.childrenCount=this.childrenCount;
  	},
  	fun_min(personOrChild){
  		if(personOrChild==='person'){
  			if(this.personCount>0){
  				this.personCount--;
  				this.isPersonMinDisable=false;
  				this.isPersonMaxDisable=false;
  				if(this.personCount==0){
  					this.isPersonMinDisable=true;
  					this.isPersonMaxDisable=false;
  				}
  			}
  		}else{
  			if(this.childrenCount>0){
  				this.childrenCount--;
  				this.isChildMinDisable=false;
  				this.isChildMaxDisable=false;
 				if(this.childrenCount==0){
  					this.isChildMinDisable=true;
  					this.isChildMaxDisable=false;
  				}
  			}
  		}
  	},
  	fun_plus(personOrChild){
  		if(personOrChild==='person'){
  			if(this.personCount<7){
  				this.personCount++;
  				this.isPersonMinDisable=false;
  				this.isPersonMaxDisable=false;
  				if(this.personCount==7){
  					this.isPersonMinDisable=false;
  					this.isPersonMaxDisable=true;
  				}
  			}
  		}else{
  			if(this.childrenCount<4){
  				this.childrenCount++;
  				this.isChildMinDisable=false;
  				this.isChildMaxDisable=false;
 				if(this.childrenCount==4){
  					this.isChildMinDisable=false;
  					this.isChildMaxDisable=true;
  				}
  			}
  		}
  	},
  }

	}
</script>