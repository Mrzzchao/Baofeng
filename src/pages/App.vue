<template>
    <div id="app">
        <div class="we">
            <div class="">
                数据由<span class="company">500彩票网</span>提供
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
.we {
    position: relative;
    background: #fff;
    text-align: center;
    font-size: .4rem;
    line-height: 1rem;
    height: 1rem;
    margin-bottom: .2rem;
}
.we .company {
    color: #5c788f;
}
.we:after {
    content: '';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
</style>
