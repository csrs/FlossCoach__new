/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("alertify",{mode:"api",defaults:{type:"alert",delay:5e3,theme:"bootstrap"},api:function(){if("undefined"!=typeof alertify){var defaults=$.components.getDefaults("alertify");$(document).on("click.site.alertify",'[data-plugin="alertify"]',function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());switch(options.labelOk&&(options.okBtn=options.labelOk),options.labelCancel&&(options.cancelBtn=options.labelCancel),"undefined"!=typeof options.delay&&alertify.delay(options.delay),"undefined"!=typeof options.theme&&alertify.theme(options.theme),"undefined"!=typeof options.cancelBtn&&alertify.cancelBtn(options.cancelBtn),"undefined"!=typeof options.okBtn&&alertify.okBtn(options.okBtn),"undefined"!=typeof options.placeholder&&alertify.delay(options.placeholder),"undefined"!=typeof options.defaultValue&&alertify.delay(options.defaultValue),"undefined"!=typeof options.maxLogItems&&alertify.delay(options.maxLogItems),"undefined"!=typeof options.closeLogOnClick&&alertify.delay(options.closeLogOnClick),options.type){case"alert":alertify.alert(options.alertMessage);break;case"confirm":alertify.confirm(options.confirmTitle,function(){alertify.success(options.successMessage)},function(){alertify.error(options.errorMessage)});break;case"prompt":alertify.prompt(options.promptTitle,function(str,ev){var message=options.successMessage.replace("%s",str);alertify.success(message)},function(ev){alertify.error(options.errorMessage)});break;case"log":alertify.log(options.logMessage);break;case"success":alertify.success(options.successMessage);break;case"error":alertify.error(options.errorMessage)}})}}});