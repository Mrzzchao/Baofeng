<template>
    <div id="app">
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    (function() {
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?4f816d475bb0b9ed640ae412d6b42cab";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
    })();
</script>
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
