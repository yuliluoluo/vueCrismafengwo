<template>
    <!-- 结伴页面 目的、出发同步请求 -->
    <div class="home">
        <!-- <div class="header">
            <a href="#/index" class="btn1">
                <img src="/img/logo.png" alt="">
            </a>
            <a  class="btn3"></a>
        
            <a href="#/index" class="btn2">官网首页</a>
                <img src="/img/i_head.png" alt="">
        </div> -->
        <headers></headers>
        <div class="filter">
            <div class="flr-item">
                <span>目的地</span>
            </div>
            <div class="flr-item">
                <span>全部出发时间</span>
            </div>
        </div>
        <!-- end -->
        <!-- 结伴页面 表头数据部分 -->
        <div class="top-num">
            <img width="100%" src="https://images.mafengwo.net/mobile/images/together/topNum-bg.jpg">
            <div class="vam">
                <ul>
                    <li>
                        <span><em>380400</em><br>个旅行计划</span>
                        <span><em>602923</em><br>人参与</span>
                        <span><em>11275</em><br>个目的地</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- end -->
        <!-- 结伴页面 展示页面部分 -->
        <div class="lists">
            <ul class="item">
                <router-link tag="li" v-for="(item, index) in list" :key="index" :to="'/detail/'+ item.id">
                    <div class="cover">
                        <img :src="'/img/list1/' + item.img" alt="">
                        <div class="title">
                            <h3>{{item.title}}</h3>
                            <span class="days">{{item.days}}天</span>
                            <span class="departureDate">{{item.departureDate}}出发</span>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
        <!-- end -->
        <!-- 结伴页面 底部 -->
        <div class="fixed-btm _j_sort_html">
            <div class="btn-group">
                <a class="btn-sort _j_sort">排序</a>
                <a class="btn-add _j_not_login">发起结伴</a>
            </div>
        </div>
    </div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
.home {


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
            background: url("/img/i_head.png") no-repeat 0px -50px;
            background-size: 100px 300px;
        }

    }
// 结伴页面 目的、出发同步请求 
.filter {
    height: 44px;
    padding: 7px 0;
    box-sizing: border-box;
    border-top: 1px solid #e2e2e2;
    background-color: #fcfcfc;
    position: relative;
    z-index: 5;
    .flr-item {
        float: left;
        width: 50%;
        padding: 0 30px;
        box-sizing: border-box;
        font-size: 15px;
        color: #a4a4a4;
        line-height: 29px;
        border: 0 1px solid #e2e2e2;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
}

//end
//结伴页面 表头数据部分
.top-num {
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 12px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #e5e5e5;
    img {
        width: 100%;
        vertical-align: top;
    }
    .vam {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    ul {
        display: table;
        width: 100%;
        height: 100%;
    }
    li {
        display: table-cell;
        vertical-align: middle;
    }
    span {
        display: inline-block;
        margin: -5px 20px 0;
    }
    em {
        display: inline-block;
        margin-bottom: 10px;
        line-height: 30px;
        font-style: normal;
        font-size: 30px;
        font-family: Georgia;
        vertical-align: top;
    }
}

//end
//结伴页面展示部分
.lists {
    padding: -1px 0 0 15px;
    box-sizing: border-box;
    padding-bottom: 55px!important;
    li {
        float: left;
        width: 50%;
        box-sizing: border-box;
        a {
            display: block;
            box-sizing: border-box;
            margin: 0 15px 15px 0;
            border: 1px solid #e6e5e5;
            background-color: #fff;
        }
    }
    .cover {
        position: relative;
        box-sizing: border-box;
        min-height: 30px;
        img {
            width: 100%;
        }
    }
    .title {
        position: absolute;
        box-sizing: border-box;
        left: 18px;
        top: 12px;
        padding: 13px 15px 0;
        font-size: 17px;
        color: #fff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        line-height: 20px;
        h3 {
            margin-bottom: 24px;
            font-weight: normal;
            font-size: inherit;
        }
    }
    .departureDate {
        position: absolute;
        right: -62px;
        bottom: -98px;
        background-color: #41c6ad;
        height: 24px;
        line-height: 24px;
        color: #fff;
        font-size: 13px;
        padding: 0 9px 0 10px;
        border-radius: 24px 0 0 24px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    }
    .info {
        padding: 22px 10px 13px 15px;
        box-sizing: border-box;
        position: relative;
    }
    .avatar {
        position: absolute;
        left: 15px;
        top: -17px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.7);
        img {
            border-radius: 50%;
        }
    }
}

//结伴页面底部
.fixed-btm {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 6;
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.95);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px 15px;
    text-align: center;
    .btn-group {
        display: table;
        width: 100%;
        .btn-sort {
            display: table-cell;
            width: 65px;
            font-size: 12px;
            color: #a4a4a4;
            box-sizing: border-box;
            height: 30px;
            padding: 4px 0;
            line-height: 22px;
            text-align: left;
        }
        .btn-join {
            display: table-cell;
            box-sizing: border-box;
            height: 30px;
            background-color: #f39c11;
            border-radius: 30px;
            line-height: 30px;
            color: #fff;
            font-size: 14px;
        }
    }
}
}
</style>
<script type="text/javascript">
    import headers from "./Header.vue";

export default {
    data() {
        return {
            //introduce: [],
            list: []
        }
    },
    components:{
        headers
    },
    // 组件创建完成，发送请求
    created() {
        // 发送请求
        this.$http
            // get请求
            .get('data/home.json')
            // 监听数据返回
            .then(({ data }) => {
                // 存储数据
                this.list = data.list;
                //console.log(this);
            })
    }
}
</script>
