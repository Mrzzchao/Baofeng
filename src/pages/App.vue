<template>
    <div id="app">
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
.bg-c1 {
    background: #efefef;
}
.jh dd {
    border-bottom: none;
}
</style>
