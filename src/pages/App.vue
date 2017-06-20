<template>
    <div id="app">
        <div class="we">
            <div class="">
                数据由<span class="company">500彩票网</span>提供
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
.we {
    background: #fff;
    text-align: center;
    font-size: .4rem;
    line-height: 1rem;
    height: 1rem;
}
.we .company {
    color: #5c788f;
}
</style>
