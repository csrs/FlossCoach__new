/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("toolbar",{mode:"init",init:function(context){if($.fn.toolbar){var defaults=$.components.getDefaults("toolbar");$('[data-plugin="toolbar"]',context).each(function(){var $this=$(this),content=$this.data("toolbar"),options=$.extend(!0,{},defaults);content&&(options.content=content),$this.toolbar(options)})}}});