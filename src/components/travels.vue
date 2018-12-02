<template>
<div class="travels">
    <!-- 头部 -->
    <!-- <div class="app-header">
        <div class="logo">
            <a href="#/index"><img src="../../public/img/logo.png" alt="" /></a>
        </div>
        <div class="h-page">
            <a href="home">官网首页</a>
        </div>
        <div class="s-search">
            <a href="#"><img src="../../public/img/search.png" alt=""></a>
        </div>
    </div> -->
    <headers></headers>
    <!-- 轮播 -->
    <!-- <div class="carousel" id="carousel">
        <Swiper class="tu" >
            <Slide v-for="(item,index) in imgList" :key="index">
        <div class="day">
                <span class="Da">{{item.Da}}</span>
                <span class="em">2018</span>
                <span class="em1">SEP</span>
                <span>蜂首纪念</span>
        </div>
                <img :src="'/img/' + item.src" alt="">
                <div class="bo">
                    <p class="ti">{{item.title}}</p>
                    <p class="wo">我是<span>{{item.name}}</span>&nbsp;&nbsp;我在<span>{{item.addr}}</span></p>
                </div>
            </Slide>
        </Swiper>
    </div> -->
    <div class="carousel" id="carousel">
        <transition-group tag="ul" name="opts">
            <li v-for="(item,index) in imgList" :key="index" v-show="index===mark" class="tu">
                <div class="day">
                    <span class="Da"> | {{item.Da}}</span>
                    <span class="two">
                        <span class="em">2018</span>
                        <span class="em1">NOV</span>
                    </span>
                    <span class="titles"> | 蜂首纪念 | </span>
                </div>
                <div class="img">
                    <img class="big" :src="'/img/' + item.src" alt="">
                    <div class="bo">
                        <p class="ti">{{item.title}}</p>
                        <p class="wo">我是<span>{{item.name}}</span>&nbsp;&nbsp;我在<span>{{item.addr}}</span></p>
                    </div>
                </div>
                <!-- <div class="smalls">
                    <ul>
                        <li v-for="(item,index) in small_imgs" @click="fun_small(index)">
                            <img :src="item" alt="">
                        </li>
                    </ul>
                </div> -->
            </li>
        </transition-group>
        <div class="smalls">
                    <ul>
                        <li v-for="(item,index) in small_imgs" @click="fun_small(index)">
                            <img :src="item" alt="" :style="index===mark?'border-bottom-color:orange':'border-bottom-color:transparent'">
                        </li>
                    </ul>
                </div>
    </div>
    <!-- 文章内容 -->
    <div class="wenzhang">
        <ul>
            <router-link tag="li" v-for="(item, index) in list" :key="index" :to="'/detail/' + item.id" >
                <div class="left">
                    <h3 class="title">{{item.title}}</h3>
                    <div class="user">
                        <img :src="'/img/'+item.userImg" alt="">
                        <p>&nbsp;&nbsp;{{item.username}}&nbsp;&nbsp;在<span>{{item.addr}}</span></p>
                    </div>
                    <div class="nums">
                        <p class="look">
                            <img src="/img/look.png" alt="">
                            {{item.lookNum}}&nbsp;&nbsp;
                            <span>
                                <img class="msg" src="/img/msg.png" alt="">{{item.talkNum}}
                            </span>
                        </p>
                    </div>
                    <div class="line"></div>
                </div>
                <img :src="'/img/' + item.img" alt="">
            </router-link>
        </ul>
    </div>
    <!-- 加载更多 -->
    <div class="loader-more" @click="showOther" v-show="other.length">
        <span>加载更多</span>
    </div>
</div>

</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style:none;
}

@import '../base.scss';
.travels{
    background-image: url("../../public/img/6.png");

.app-header {
    background: #fff;
    height: 50px;
    line-height:50px;
    display:flex;
    .logo {
        flex:1;
        a{
            display:block;
            padding:10px 15px;
            width:102px;
            height:22px;
            img {
                display:block;
                width: 102px;
                height: 22px;
            }
        }  

    }
    .h-page {
        width:  93px;
        height: 47.6px;
        position: relative;
        right: -9px;
        text-align: center;
        a {
            text-decoration: none;
            padding-right: 14px;
            color: #FFAC26;
            font-size: 15px;
            border-right:1px solid #efefef;
        }   
    }
    .s-search {
        a {
            display:block;
            width: 25px;
            height: 25px;
            padding:12.5px;
            padding-top: 6px;
            img {
                width: 20px;
                height: 20px;
            }
        }
    }
}
.carousel {
    position: relative;
    width: 100%;
    height: 500px;
    padding: .5rem .26667rem 0;
    background: #309296 url("../../public/img/fs-bg.png") no-repeat center top;
    background-size: cover;
    box-sizing:border-box;
    .tu{
        position: absolute;
        width: 100%;
        height: 100%;
    }
        .opts-enter-active {
            // transform: translateX(0);
            transition: all 1s ease;
        }
        .opts-leave-active {
            // transform: translateX(-100%);
            transition: all 1s ease;
        }
        .opts-enter {
            transform: translateX(100%);
        }
        .opts-enter-to {
            transform: translateX(0);
        }
        .opts-leave {
            transform: translateX(0);
        }
        .opts-leave-to {
            transform: translateX(-100%);
        }
        .day {
            padding:10px 0;
            font-family: 微软雅黑;
            color:#fff;
            margin-left:10px;
            overflow: hidden;
            span.Da {
                float: left;
                font-size:28px;
                
            }
            .two{
                float: left;
                padding-top: 5px;
                margin-left: 10px;
            }
            .em {
                    display: block;
                    font-size: 12px;
                }
                .em1{
                    display: block;
                    font-size: 12px;
                }
            span.titles{
                float: left;
                margin-left: 10px;
                font-size: 28px;
            }
        }
        .img{
            width: 100%;
            height: 250px;
            padding: 5px;
            box-sizing:border-box;
        }
        .big{
            display: block;
            height: 250px;
            width: 95%;
            box-sizing:border-box;
            border-radius: 7px 7px 0 0;
            margin-top: 20px;
        }
        .bo { 
            background:#fff;
            width: 95%;
            border-radius: 0 0 7px 7px;
            height: 80px;
            .ti {
                font-size:20px;
                padding-top: 20px;
                padding-bottom:5px;
                text-align: center;
            }
            .wo {
                    font-size:14px;
                    text-align: center;
                    span {
                        color: $navColor;
                    }
                }
        }
        .smalls{
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform:translateX(-50%);
            padding-top: 110px;
            width: 100%;
            height: 60px;
            ul{
                margin: 0 auto;
                padding: 5px 0;
                overflow: hidden;
                width: 315px;
                height: 100%;
                li{
                    float: left;
                    width: 55px;
                    height: 55px;
                    margin-right: 10px;
                    box-sizing:border-box;
                    &:last-child{
                        margin-right: 0;
                    }
                    img{
                        padding-bottom: 2px;
                        border-bottom: 4px solid transparent;
                        width: 54px;
                        height: 54px;
                        border-radius: 5px;
                    }
                }
            }
        }
}
.wenzhang {
    
    width: 100%;
    height: 120px;
    margin-top: -4px;
    // display: flex;
    ul {
        width: 100%;
         li {
            background: #fff;
            // border-bottom: 1px solid #efefef;
        padding: 10px;
        // width: 100%;
        height: 110px;;
        // background: pink;
        position: relative;
        .left {
            width: 45%;
            height: 110px;
            // background: skyblue;
            position: absolute;
            left: 10px;
            .line {
                width: 100%;
                height: 1px;
                background: #efefef;
                position: absolute;
                top: 115px;;
                left: 0px;
            }
        
            h3 {
                 text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  line-clamp: 2;
                  -webkit-box-orient: vertical;

                font-size: 18px;
                padding: 0 5px;
                

            }
            
            .user{
                // background: yellow;
                position: absolute;
                bottom: 30px; 
                
                    img {
                        width: 20px;
                        height: 20px;
                        border-radius:50%;
                        left: 10px;
                    }

                    p {
                        font-size:13px;
                        padding-left: 30px;
                        color:#A699B3;
                        span {
                            color: $navColor;
                        }
                    }
                
            }
            .nums {
                // background: green;
                bottom: 5px;
                position: absolute;
                padding: 0 10px;
                    .look {
                        font-size:13px;
                        padding-left: 13px;
                        color:#A699B3;
                        img {
                            vertical-align:middle;
                            width: 16px;
                            height: 16px;
                            left: 10px;
                        }
                        span {
                            color:#A699B3;
                            padding-left: 20px;
                            img {
                                vertical-align:middle;
                                width: 17px;
                                height: 17px;
                                left: 65px;
                            }
                        } 
                }
            }
            
        }
    }

        img {
            // width: 195px;
            height: 110px;
            position: absolute;
            right: 0px;
            display: inline-block;
        }
    }
    
}
.loader-more {
        // margin: 30px 0;
        text-align: center;
        background: #fff;
        color: $navColor;
        font-size: 18px;
        width: 50%;
        padding: 30px 25%;
        padding-bottom: 7px;
        position: relative;
        top: 1037px;
            span {
                display: block;
                border: 1px solid $navColor;
                width: 100%;
                height: 30%;
                padding: 20px 0;
                line-height: 30%;
                border-radius:8px;
            }
    }
}
</style>

<script type="text/javascript">
    import { Swiper, Slide } from 'vue-swiper-component';
    import headers from "./Header.vue";

 export default {
        data() {
            return {
                timer:null,
                imgList: [
                     {src:"big_img1.jpeg", title: "阿尔山之行 | 与我相遇,是我今..",name:"Ken烨", addr:"阿尔山",Da:"16"},
                     {src:"big_img2.jpeg", title: "【小厨子行摄笔记】北京总有遗..",name:"龚小厨", addr:"北京",Da:"15"}, 
                     {src:"big_img3.jpeg", title: "【伦敦记事】恋四季风尘,也愿..",name:"Blairon", addr:"伦敦",Da:"14"}, 
                     {src:"big_img4.jpeg", title: "一生一次的东非之旅：从草原到..",name:"Lisa", addr:"肯尼亚",Da:"13"}, 
                     {src:"big_img5.jpeg", title: "北半台湾 | 有关绿色梦境和蓝..",name:"-Lalio", addr:"台湾",Da:"12"}
                 ],
                 //缓存信息
                 list: [],
                 //缓存剩余未加载的数据
                 other: [],
                 mark: 0,
                 small_imgs:["/img/small_img1.jpeg","/img/small_img2.jpeg","/img/small_img3.jpeg","/img/small_img4.jpeg","/img/small_img5.jpeg"]
            }
        },
        methods: {
            // 展示剩余商品
            showOther() {
                // 将other中的数据，存储在list中，
                this.list = this.list.concat(this.other)
                // 并且将other清空
                this.other = [];
            },
            autoplay () {
                this.mark+=1;
                if (this.mark === this.imgList.length ) {
                    this.mark =0;
                }

            },
            play () {
                this.timer = setInterval(this.autoplay, 3000)
            },
            fun_small(index){
                clearInterval(this.timer);
                this.mark=index;
            }
        },
                        // 配置数据
        created() {
            this.play();
            //console.log(this.$route)
            // 发送请求
            this.$http
                // get请求
                .get('data/art.json')
                // 监听数据返回
                .then(({ data }) => {
                    // 存储数据
                    // 默认list显示三条数据
                    this.list = data.list.slice(0, 9);
                    this.other = data.list.slice(9);
                    console.log(data);
                    console.log(this.list);
                    // // 将剩余未显示的数据，存储在other中
                    // this.other = data.slice(3);
                    // console.log(data);
                })
        },

        components: {
            Swiper,
            Slide,
            headers
            }

    }


</script>
