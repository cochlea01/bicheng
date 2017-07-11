/**
 * seajs config
 * seajs的配置项
 *
 */
(function(){
    //避免因为ie不支持log导致问题
    if(!window.console) {
        function log(){}
        window.console = {log:log, info:log, debug:log, warn:log, error:log }
    }
})();

seajs.config({
    paths: {
        'extendModel': '/plugins/extend',
        'commonPlugins': '/plugins/commonPlugins',
        'jQueryPlugins': '/plugins/jQueryPlugins',
        'qd_js': '/themes/theme_default/media/js',
        'qd_plugin': '/plugins'
    },
    vars: {
        locale: "zh-cn"
    },
    plugins: ['text'],
    alias: {
        "qd-common":"qd_js/qd-common-1.0.0.js",
        "handlebars":"qd_plugin/handlebars-v1.3.0/handlebars-v1.3.0",
        "trans-format-json":"qd_plugin/handlebars-v1.3.0/transFormatJson",
        "layer-css":"qd_plugin/layer-v1.8.4/skin/layer.css",
        "layer":"qd_plugin/layer-v1.8.4/layer.min",
        "tip-yellow-css":"qd_plugin/poshytip/tip-yellowsimple/tip-yellowsimple.css",
        "tip":"qd_plugin/poshytip/jquery.poshytip.min"
     },
    //预加载
    //preload: ['pagebus', "nprogress"],
    map: [],
    charset: 'UTF-8'
});
