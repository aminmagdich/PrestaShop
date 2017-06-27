webpackHotUpdate(0,{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dropzone_dist_min_dropzone_min_css__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dropzone_dist_min_dropzone_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dropzone_dist_min_dropzone_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_magnific_popup_dist_magnific_popup_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_magnific_popup_dist_magnific_popup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_magnific_popup_dist_magnific_popup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_PrestaKit_dist_css_bootstrap_prestashop_ui_kit_css__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_PrestaKit_dist_css_bootstrap_prestashop_ui_kit_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_PrestaKit_dist_css_bootstrap_prestashop_ui_kit_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_PrestaKit_dist_css_jquery_growl_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_PrestaKit_dist_css_jquery_growl_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_PrestaKit_dist_css_jquery_growl_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_PrestaKit_dist_css_bootstrap_switch_min_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_PrestaKit_dist_css_bootstrap_switch_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_PrestaKit_dist_css_bootstrap_switch_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_theme_scss__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scss_theme_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_bar_js__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_page_index__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translation_page_index__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_js__ = __webpack_require__(139);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

// Plugins CSS








// Theme SCSS



// Theme Javascript








new __WEBPACK_IMPORTED_MODULE_7__nav_bar_js__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_10__header_js__["a" /* default */]();


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_js__ = __webpack_require__(141);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



class Header {
  constructor() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(() => {
      this.initQuickAccess();
      this.initMultiStores();
      this.initNotificationsToggle();
      this.initSearch();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notifications_js__["a" /* default */])();
    });
  }

  initQuickAccess() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-quick-link').on('click', (e) => {
      e.preventDefault();

      let method = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('method');
      let name = null;

      if (method === 'add') {
        let text = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('prompt-text');
        let link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('link');

        name = prompt(text, link);
      }
      if (method === 'add' && name || method === 'remove') {
        let postLink = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('post-link');
        let quickLinkId = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('quicklink-id');
        let rand = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('rand');
        let url = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('url');
        let icon = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('icon');

        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
          type: 'POST',
          headers: {
            "cache-control": "no-cache"
          },
          async: true,
          url: `${postLink}&action=GetUrl&rand=${rand}&ajax=1&method=${method}&id_quick_access=${quickLinkId}`,
          data: {
            "url": url,
            "name": name,
            "icon": icon
          },
          dataType: "json",
          success: (data) => {
            var quicklink_list = '';
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(data, (index) => {
              if (typeof data[index]['name'] !== 'undefined')
                quicklink_list += '<li><a href="' + data[index]['link'] + '&token=' + data[index]['token'] + '"><i class="icon-chevron-right"></i> ' + data[index]['name'] + '</a></li>';
            });

            if (typeof data['has_errors'] !== 'undefined' && data['has_errors'])
              __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(data, (index) => {
                if (typeof data[index] === 'string')
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.growl.error({
                    title: '',
                    message: data[index]
                  });
              });
            else if (quicklink_list) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#header_quick ul.dropdown-menu").html(quicklink_list);
              window.showSuccessMessage(window.update_success_msg);
            }
          }
        });
      }
    });
  }

  initMultiStores() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-link').on('click', (e) => {
      window.open(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).parents('.link').attr('href'), '_blank');
    });
  }

  initNotificationsToggle() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.notification.dropdown-toggle').on('click', () => {
      if(!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-nav').hasClass('expanded')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.notification-center.dropdown').addClass('open');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-layer').addClass('expanded');
        this.updateEmployeeNotifications();
      }
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click', function (e) {
      if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('div.notification-center.dropdown').is(e.target)
        && __WEBPACK_IMPORTED_MODULE_0_jquery___default()('div.notification-center.dropdown').has(e.target).length === 0
        && __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.open').has(e.target).length === 0
      ) {

        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('div.notification-center.dropdown').hasClass('open')) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-layer').removeClass('expanded');
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notifications_js__["a" /* default */])();
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('div.notification-center.dropdown').removeClass('open');

      }
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.notification-center .nav-link').on('shown.bs.tab', () => {
      this.updateEmployeeNotifications();
    });
  }

  initSearch() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-items-list').on('click', (e) => {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-form-search').attr('placeholder', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('placeholder'));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-search-type').val(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('value'));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-dropdown-toggle').text(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('item'));
    });
  }

  updateEmployeeNotifications() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.post(
      baseAdminDir + "ajax.php",
      {
        "updateElementEmployee": "1",
        "updateElementEmployeeType": __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.notification-center .nav-link.active').attr('data-type')
      }
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobile_detect__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobile_detect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobile_detect__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



class NavBar {
  constructor() {
    let md = new __WEBPACK_IMPORTED_MODULE_1_mobile_detect___default.a(window.navigator.userAgent);
    const MAX_MOBILE_WIDTH = 600;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(() => {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".nav-bar").find(".link-levelone").hover(function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).addClass("-hover");
      }, function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).removeClass("-hover");
      });

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.nav-bar').on('click', '.menu-collapse', function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').toggleClass('page-sidebar-closed');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
          url: "index.php",
          cache: false,
          data: {
            token: window.employee_token,
            ajax: 1,
            action: 'toggleMenu',
            tab: 'AdminEmployees',
            collapse: Number(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').hasClass('page-sidebar-closed'))
          },
        });
      });
      if(md.isPhoneSized(MAX_MOBILE_WIDTH)) {
        this.mobileNav(md, MAX_MOBILE_WIDTH);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('resize', () => {
          if(!md.isPhoneSized(MAX_MOBILE_WIDTH) && __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').hasClass('mobile')) {
            this.unbuildMobileMenu();
          }
          else if(md.isPhoneSized(MAX_MOBILE_WIDTH) && !__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').hasClass('mobile')) {
            this.mobileNav(md, MAX_MOBILE_WIDTH);
          }
        });
      }
    });
  }
  mobileNav() {
    let $logout = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#header_logout').addClass('link').removeClass('m-t-1').prop('outerHTML');
    let $employee = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.employee_avatar').prop('outerHTML');
    let profileLink = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.profile-link').attr('href');
    let $shoplist = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shop-list');
    let $shopText =  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shop-list .items-list .active a').html();

    $shoplist.find('.link').removeClass('link');

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('mobile');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.nav-bar').addClass('mobile-nav');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.panel-collapse').addClass('collapse').removeClass('submenu');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.link-levelone a').each((index, el)=> {
      let id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).parent().find('.collapse').attr('id');
      if(id) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).attr('href', `#${id}`).attr('data-toggle','collapse');
      }
    });
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-menu').append(`<li class="link-levelone">${$logout}</li>`);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-menu').prepend(`<li class="link-levelone">${$employee}</li>`);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.collapse').collapse({
      toggle: false
    });

    if($shoplist.hasClass('ps-dropdown')) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-menu li:first').append(`<p class="shop-list-title"><a href="#shop-list-collapse" data-toggle="collapse" aria-expanded="true">${$shopText}</a></p>`);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-menu li:first').append( __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shop-list .items-list').addClass('collapse').attr('id', 'shop-list-collapse'));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#shop-list-collapse').collapse({
        toggle: true
      });
    }
    else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-menu li:first').append( __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shop-list'));
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.employee_avatar img, .employee_avatar span').wrap(`<a href="${profileLink}"></a>`);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-mobile-menu').on('click', expand);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-notifs_dropdown').css({
      'height' : window.innerHeight
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-non-responsive').show();

    function expand (){
      if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('div.notification-center.dropdown').hasClass('open')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-nav').toggleClass('expanded');
        if(!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-nav').hasClass('expanded')){
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-layer').off();
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-layer').removeClass('expanded');
        }
        else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-layer').on('click', expand);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.mobile-layer').addClass('expanded');
        }
      }
    };
  }
  unbuildMobileMenu() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('mobile');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-menu li:first').remove();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-notifs_dropdown').removeAttr('style');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.nav-bar').removeClass('mobile-nav');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.panel-collapse').removeClass('collapse').addClass('submenu');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.shop-list-title').remove();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-non-responsive').hide();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NavBar;



/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
const refreshNotifications = function () {
  let timer = null;

  $.ajax({
    type: 'POST',
    headers: {"cache-control": "no-cache"},
    url: `${baseAdminDir}ajax.php?rand=${new Date().getTime()}`,
    async: true,
    cache: false,
    dataType: 'json',
    data: {"getNotifications": "1"},
    success: function (json) {
      if (json) {
        let nbOrders = parseInt(json.order.total);
        let nbCustomers = parseInt(json.customer.total);
        let nbCustomerMessages = parseInt(json.customer_message.total);
        let notifications_total = nbOrders + nbCustomers + nbCustomerMessages;

        fillTpl(json.order.results, $("#orders-notifications"), $("#order-notification-template").html());
        fillTpl(json.customer.results, $("#customers-notifications"), $("#customer-notification-template").html());
        fillTpl(json.customer_message.results, $("#messages-notifications"), $("#message-notification-template").html());

        setNotificationsNumber("_nb_new_orders_", nbOrders);
        setNotificationsNumber("_nb_new_customers_", nbCustomers);
        setNotificationsNumber("_nb_new_messages_", nbCustomerMessages);
        if(notifications_total) {
          $('#notifications-total').removeClass('hide').html(notifications_total);
        }
        else {
          $('#notifications-total').remove();
        }
      }
      timer = setTimeout(refreshNotifications, 120000);
    }
  });

  clearTimeout(timer);
}

let fillTpl = function (results, eltAppendTo, tpl) {
  eltAppendTo.children('.notification-elements').empty();
  if (results.length > 0) {
    eltAppendTo.removeClass('empty');
    $.each(results, function (property, value) {
      if (undefined === tpl) {
        return;
      }

      eltAppendTo.children('.notification-elements').append(
        tpl.replace(/_id_order_/g, parseInt(value.id_order))
          .replace(/_customer_name_/g, value.customer_name)
          .replace(/_iso_code_/g, value.iso_code)
          .replace(/_carrier_/g, (value.carrier !== "" ? ` - ${value.carrier}` : ""))
          .replace(/_total_paid_/g, value.total_paid)
          .replace(/_id_customer_/g, parseInt(value.id_customer))
          .replace(/_company_/g, (value.company !== "" ? ` (${value.company}) ` : ""))
          .replace(/_date_add_/g, value.date_add)
          .replace(/_status_/g, value.status)
          .replace(/order_url/g, `${baseAdminDir}index.php?tab=AdminOrders&token=${token_admin_orders}&vieworder&id_order=${value.id_order}`)
          .replace(/customer_url/g, `${baseAdminDir}index.php?tab=AdminCustomers&token=${token_admin_customers}&viewcustomer&id_customer=${value.id_customer}`)
          .replace(/message_url/g, `${baseAdminDir}index.php?tab=AdminCustomerThreads&token=${token_admin_customer_threads}&viewcustomer_thread&id_customer_thread=${value.id_customer_thread}`)
      );
    });
  } else {
    eltAppendTo.addClass('empty');
  }
}

let setNotificationsNumber = function (id, number) {
  if (number > 0) {
    $(`#${id}`).text(` (${number})`);
  } else {
    $(`#${id}`).text("");
  }
}

/* harmony default export */ __webpack_exports__["a"] = (refreshNotifications);


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-attribute-checkbox').change((event) => {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).is(':checked')) {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.token[data-value="${__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('value')}"] .close`).length === 0) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#form_step3_attributes').tokenfield(
            'createToken',
            {value: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('value'), label: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('label')}
          );
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.token[data-value="${__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('value')}"] .close`).click();
      }
    });
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#form_step3_attributes')
    .on('tokenfield:createdtoken', function (e) {
      if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.js-attribute-checkbox[data-value="${e.attrs.value}"]`).is(':checked')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.js-attribute-checkbox[data-value="${e.attrs.value}"]`).prop('checked', true);
      }
    })
    .on('tokenfield:removedtoken', function (e) {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.js-attribute-checkbox[data-value="${e.attrs.value}"]`).is(':checked')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.js-attribute-checkbox[data-value="${e.attrs.value}"]`).prop('checked', false);
      }
    });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('input.form-control[counter], textarea.form-control:not(.autoload_rte)[counter]').each(function () {
    let counter = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('counter');

    if (typeof counter === undefined || counter === false) {
      return;
    }

    handleCounter(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).on('input', function () {
      handleCounter(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
    });

    function handleCounter(object) {
      let counter = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object).attr('counter');
      let counter_type = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object).attr('counter_type');
      let max = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object).val().length;

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object).parent().find('span.currentLength').text(max);
      if ('recommended' !== counter_type && max > counter) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object).parent().find('span.maxLength').addClass('text-danger');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object).parent().find('span.maxLength').removeClass('text-danger');
      }
    }
  });
});


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function() {
  const treeAction = (treeState) => {
    if (treeState === 'expand') {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-categories-tree ul').show();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.more').toggleClass('less');
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-categories-tree ul:not(.category-tree)').hide();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.less').toggleClass('more');
    }
  };

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-categories-tree-actions').on('click', (e) => {
    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('action') === 'expand' || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).parent().data('action') === 'expand') {
      treeAction('expand');
    } else {
      treeAction('reduce');
    }
  });
});


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function() {
    let $jsCombinationsList = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-combinations-list');
    // If we are not on the product page, return
    if (0 === $jsCombinationsList.length) {
        return;
    }
    let idsProductAttribute = $jsCombinationsList.data('ids-product-attribute').toString().split(',');
    let idsCount = idsProductAttribute.length;
    let currentCount = 0;
    let step = 5;

    let refreshImagesUrl = $jsCombinationsList.attr('data-action-refresh-images').replace(/product-form-images\/\d+/, 'product-form-images/' + $jsCombinationsList.data('id-product'));

    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(refreshImagesUrl)
      .then(function(response) {
        if (idsProductAttribute[0] != '') {
          getCombinations(response);
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#create-combinations').click(function(event) {
          event.preventDefault();
          form.send(undefined,undefined,generate);
        });
      });

    let productDropzone = Dropzone.forElement('#product-images-dropzone');
    let updateCombinationImages = function () {
      var productAttributeIds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.map(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-combinations-list .combination'), function (combination) {
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(combination).data('index');
      });
      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(refreshImagesUrl)
        .then(function(response) {
          refreshImagesCombination(response, productAttributeIds);
        });
    };
    productDropzone.on('success', updateCombinationImages);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('click', '#form .product-combination-image', function() {
      var input = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('input');
      var isChecked = input.prop('checked');
      input.prop('checked', isChecked ? false : true);

      if (isChecked) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).removeClass('img-highlight');

      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).addClass('img-highlight');
      }
      refreshDefaultImage();
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product_combination_bulk_impact_on_price_ti, #product_combination_bulk_impact_on_price_te').keyup(function () {
      var self = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      var price = priceCalculation.normalizePrice(self.val());

      if ('product_combination_bulk_impact_on_price_ti' === self.attr('id')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product_combination_bulk_impact_on_price_te').val(priceCalculation.removeCurrentTax(price)).change();
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product_combination_bulk_impact_on_price_ti').val(priceCalculation.addCurrentTax(price)).change();
      }
    });

    /*
     * Retrieve URL to get a set of combination forms from data attribute
     * Concatenate ids_product_attribute to load from a slice of idsProductAttribute depending of step and last set
     */
    let combinationUrl = $jsCombinationsList.data('combinations-url').replace(/\/\d+(?=\?.*)/, '/' + idsProductAttribute.slice(currentCount, currentCount+step).join('-'));

    let getCombinations = (combinationsImages) => {
      let $jsCombinationsBulkForm = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#combinations-bulk-form');
      if (!$jsCombinationsBulkForm.hasClass('inactive')) {
        $jsCombinationsBulkForm.addClass('inactive');
      }
      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(combinationUrl).then(function (resp) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#loading-attribute').before(resp);
        refreshImagesCombination(combinationsImages, idsProductAttribute.slice(currentCount, currentCount+step));
        currentCount += step;
        combinationUrl = $jsCombinationsList.data('combinations-url').replace(/\/\d+(?=\?.*)/, '/' + idsProductAttribute.slice(currentCount, currentCount+step).join('-'));
        if (currentCount < idsCount) {
          getCombinations(combinationsImages);
        } else {
          $jsCombinationsBulkForm.removeClass('inactive');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#loading-attribute').fadeOut(1000).remove();
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="popover"]').popover();
        }
      });
    };
  });

  let refreshImagesCombination = (combinationsImages, idsProductAttribute) => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(idsProductAttribute, function (index, value) {
      var $combinationElem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.combination[data="' + value + '"]');
      var $imagesElem = $combinationElem.find('.images');
      var $index = $combinationElem.attr('data-index');

      if (0 === $imagesElem.length) {
        $imagesElem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#combination_' + $index + '_id_image_attr');
      }

      $imagesElem.html('');

      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(combinationsImages[value], function(key, image) {
        $imagesElem.append(`<div class="product-combination-image ${(image.id_image_attr ? 'img-highlight' : '')}">
          <input type="checkbox" name="combination_${$index}[id_image_attr][]" value="${image.id}" ${(image.id_image_attr ? 'checked="checked"' : '')}>
          <img src="${image.base_image_url}-small_default.${image.format}" alt="" />
        </div>`);
      });

      $combinationElem.fadeIn(1000);
    });

    refreshDefaultImage();
  };

  let refreshDefaultImage = () => {
    var productDefaultImageUrl = null;
    var productCoverImageElem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product-images-dropzone').find('.iscover');

    /** get product cover image */
    if (productCoverImageElem.length === 1) {
      var imgElem = productCoverImageElem.parent().find('.dz-image');

      /** Dropzone.js workaround : If this is a fresh upload image, look up for an img, else find a background url */
      if (imgElem.find('img').length) {
        productDefaultImageUrl = imgElem.find('img').attr('src');
      } else {
        productDefaultImageUrl = imgElem.css('background-image')
          .replace(/^url\(["']?/, '')
          .replace(/["']?\)$/, '');
      }
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#form .combination-form'), function(key, elem) {
      var defaultImageUrl = productDefaultImageUrl;

      /** get first selected image */
      var defaultImageElem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).find('.product-combination-image input:checked:first');
      if (defaultImageElem.length === 1) {
        defaultImageUrl = defaultImageElem.parent().find('img').attr('src');
      }

      if (defaultImageUrl) {
        var img = '<img src="' + defaultImageUrl + '" class="img-responsive" />';
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#accordion_combinations #attribute_' + __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).attr('data')).find('td.img').html(img);
      }
    });
  };

  let generate = () => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
      type: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#form_step3_attributes').attr('data-action'),
      data: __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#attributes-generator input.attribute-generator, #form_id_product').serialize(),
      beforeSend: function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#create-combinations').attr('disabled', 'disabled');
      },
      success: function(response) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#accordion_combinations').append(response.form);
        displayFieldsManager.refresh();
        let url = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-combinations-list').attr('data-action-refresh-images').replace(/product-form-images\/\d+/, 'product-form-images/' + __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-combinations-list').data('id-product'));
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(url)
          .then(function(combinationsImages) {
            refreshImagesCombination(combinationsImages, response.ids_product_attribute);
          });


        /** initialize form */
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('input.attribute-generator').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#attributes-generator div.token').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-attribute-checkbox:checked').each(function() {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).prop('checked', false);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#combinations_thead').fadeIn();
      },
      complete: function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#create-combinations').removeAttr('disabled');
        supplierCombinations.refresh();
        warehouseCombinations.refresh();
      }
    });
  };
});


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_header__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_search_autocomplete__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_tree__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attributes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_bulk_combinations__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nested_categories__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combination__ = __webpack_require__(144);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */









__WEBPACK_IMPORTED_MODULE_0_jquery___default()(() => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__product_header__["a" /* default */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__product_search_autocomplete__["a" /* default */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__category_tree__["a" /* default */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__attributes__["a" /* default */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__combination__["a" /* default */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__product_bulk_combinations__["a" /* default */])().init();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__nested_categories__["a" /* default */])().init();

  // This is the only script for the module page so there is no specific file for it.
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.modules-list-select').on("change", (e) => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.module-render-container').hide();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.${e.target.value}`).show();
  });
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.modules-list-button').on("click", (e) => {
    let target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('target');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.module-selection').show();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.modules-list-select').val(target).trigger('change');
    return false;
  });
});


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function() {
  let tabWidth = 0;
  let navWidth = 50;

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('resize', () => {
    init();
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-nav-tabs li').each((index, item) => {
    navWidth += __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).width();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-nav-tabs').width(navWidth);
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-arrow').on('click', (e) => {
    tabWidth = navWidth - __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-tabs').width();

    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-arrow').is(':visible')) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-nav-tabs').animate({
        left: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget).hasClass('right-arrow') ? `-=${tabWidth}` : 0
      }, 400, 'easeOutQuad', () => {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget).hasClass('right-arrow')) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.left-arrow').addClass('visible');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.right-arrow').removeClass('visible');
        } else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.right-arrow').addClass('visible');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.left-arrow').removeClass('visible');
        }
      });
    }
  });

  var init = () => {
    if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-nav-tabs').width() < __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-tabs').width()) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-nav-tabs').width(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-tabs').width());
      return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-arrow').hide();
    }
    else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-arrow').show();
    }
  };

  init();
});


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typeahead_js__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typeahead_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typeahead_js__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.autocomplete-search').each(function() {
        loadAutocomplete(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), false);
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.autocomplete-search').on('buildTypeahead', function() {
      loadAutocomplete(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), true);
    });
  });

  function loadAutocomplete(object, reset) {
    let autocompleteObject = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(object);
    let autocompleteFormId = autocompleteObject.attr('data-formid');
    let formId = `#${autocompleteFormId}-data .delete`;
    let autocompleteSource = `${autocompleteFormId}_source`;

    if (true === reset) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + autocompleteFormId).typeahead('destroy');
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('click', formId, (e) => {
      e.preventDefault();

      window.modalConfirmation.create(window.translate_javascripts['Are you sure to delete this?'], null, {
        onContinue: () => {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).parents('.media').remove();

          // Save current product after its related product has been removed
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#submit').click();
        }
      }).show();
    });

    document[autocompleteSource] = new __WEBPACK_IMPORTED_MODULE_1_typeahead_js___default.a({
      datumTokenizer: __WEBPACK_IMPORTED_MODULE_1_typeahead_js___default.a.tokenizers.whitespace,
      queryTokenizer: __WEBPACK_IMPORTED_MODULE_1_typeahead_js___default.a.tokenizers.whitespace,
      identify: function(obj) {
        return obj[autocompleteObject.attr('data-mappingvalue')];
      },
      remote: {
        url: autocompleteObject.attr('data-remoteurl'),
        cache: false,
        wildcard: '%QUERY',
        transform: function(response) {
          if (!response) {
            return [];
          }
          return response;
        }
      }
    });

    //define typeahead
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + autocompleteFormId).typeahead({
      limit: 20,
      minLength: 2,
      highlight: true,
      cache: false,
      hint: false,
    }, {
      display: autocompleteObject.attr('data-mappingname'),
      source: document[autocompleteFormId + '_source'],
      limit: 30,
      templates: {
        suggestion: function(item) {
          return '<div><img src="' + item.image + '" style="width:50px" /> ' + item.name + '</div>';
        }
      }
    }).bind('typeahead:select', function(e, suggestion) {
      //if collection length is up to limit, return

      let formIdItem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${autocompleteFormId}-data li`);
      let autocompleteFormLimit = parseInt(autocompleteObject.attr('data-limit'));

      if (autocompleteFormLimit !== 0 && formIdItem.length >= autocompleteFormLimit) {
        return false;
      }

      var value = suggestion[autocompleteObject.attr('data-mappingvalue')];
      if (suggestion.id_product_attribute) {
        value = value + ',' + suggestion.id_product_attribute;
      }

      let tplcollection = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#tplcollection-' + autocompleteFormId);
      let tplcollectionHtml = tplcollection.html().replace('%s', suggestion[autocompleteObject.attr('data-mappingname')]);

      var html = `<li class="media">
                      <div class="media-left">
                      <img class="media-object image" src="${suggestion.image}" />
                      </div>
                      <div class="media-body media-middle">
                      ${tplcollectionHtml}
                      </div>
                      <input type="hidden" name="${autocompleteObject.attr('data-fullname')}[data][]" value="${value}" />
                      </li>`;

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + autocompleteFormId + '-data').append(html);

    }).bind('typeahead:close', function(e) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).val('');
    });
  }
});


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_visibility__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_edition__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_pagination__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_tree__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_search__ = __webpack_require__(153);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */







__WEBPACK_IMPORTED_MODULE_0_jquery___default()(() => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__messages_visibility__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__messages_pagination__["a" /* default */]);
  var search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__messages_search__["a" /* default */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__messages_edition__["a" /* default */])(search);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__messages_tree__["a" /* default */])()
});


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function (search) {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reset-translation-value').each((buttonIndex, button) => {
    let $editTranslationForm = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(button).parents('form');
    let defaultTranslationValue = $editTranslationForm.find('*[name=default]').val();

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(button).click(() => {
      $editTranslationForm.find('*[name=translation_value]').val(defaultTranslationValue);
      $editTranslationForm.submit();
    });
  });

  let showFlashMessageOnEdit = (form) => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(form).submit((event) => {
      event.preventDefault();

      let $editTranslationForm = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target);
      let url = $editTranslationForm.attr('action');

      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.post(url, $editTranslationForm.serialize(), (response) => {
        let flashMessage;
        if (response['successful_update']) {
          flashMessage = $editTranslationForm.find('.alert-info');

          // Propagate edition
          let hash = $editTranslationForm.data('hash');
          let $editTranslationForms = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-hash=' + hash + ']');
          let $translationValueFields = __WEBPACK_IMPORTED_MODULE_0_jquery___default()($editTranslationForms.find('textarea'));
          $translationValueFields.val($editTranslationForm.find('textarea').val());

          // Refresh search index
          $editTranslationForms.removeAttr('data-jets');
          search.update();
        } else {
          flashMessage = $editTranslationForm.find('.alert-danger');
        }

        flashMessage.removeClass('hide');

        setTimeout(() => {
          flashMessage.addClass('hide');
        }, 4000);
      });

      return false;
    });
  };

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#jetsContent form, .translation-domain form').each((formIndex, form) => {
    showFlashMessageOnEdit(form);
  });
});


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multi_pagination__ = __webpack_require__(156);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



/* harmony default export */ __webpack_exports__["a"] = (function () {
    let fixedOffset = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.header-toolbar').height() + __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.main-header').height();
    const MAX_PAGINATION = 20;

    let addPageLinksToNavigationBar = (nav) => {
        let pageTemplate = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nav).find('.tpl');
        pageTemplate.removeClass('tpl');
        let pageLinkTemplate = pageTemplate.clone();
        pageTemplate.remove();
        pageLinkTemplate.removeClass('hide');

        let pageIndex;
        let pageLink;
        let pageLinkAnchor;
        let totalPages = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nav).parents('.translation-domains').find('.page').length;

        if (totalPages === 1) {
          return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination').addClass('hide');
        }
        else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination').removeClass('hide');
        }

        let i;
        for (i = 1; i < totalPages; i++) {
            pageIndex = i + 1;
            pageLink = pageLinkTemplate.clone();
            pageLink.attr('data-page-index', pageIndex);
            pageLinkAnchor = pageLink.find('a');
            pageLinkAnchor.html(pageIndex);

            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nav).find('.pagination').append(pageLink);
        }
    };

    // Fix internal navigation to anchors
    // by adding offset of fixed header height
    // @See also http://stackoverflow.com/a/13067009/282073
    let scrollToPreviousPaginationBar = (paginationBar, link) => {
        let paginationBarTop = paginationBar.getBoundingClientRect().top;
        window.scrollTo(window.pageXOffset, window.pageYOffset + paginationBarTop - fixedOffset);
    };

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.translation-domain .go-to-pagination-bar').click((event) => {
        let paginationBar = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parents('.translation-domain').find('.pagination')[0];
        scrollToPreviousPaginationBar(paginationBar, event.target);

        return false;
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.translation-domains nav').each((navIndex, nav) => {
        addPageLinksToNavigationBar(nav);

        let hideActivePageInDomain = (domain) => {
            let page = domain.find('.page[data-status=active]');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(page).addClass('hide');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(page).attr('data-status', 'inactive');
        };

        let showPageInDomain = (pageIndex, domain) => {
            let targetPage = domain.find('.page[data-page-index=' + pageIndex + ']');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetPage).removeClass('hide');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(targetPage).attr('data-status', 'active');
        };

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nav).find('.page-link').click((event) => {
            let paginationBar = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parents('.pagination')[0];
            scrollToPreviousPaginationBar(paginationBar, event.target);
        });

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nav).find('.page-item').click((event) => {
            let pageLink = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target);
            let domain = pageLink.parents('.translation-domains').find('.translation-forms');
            let pageItem = pageLink.parent();
            let pageIndex = pageItem.data('page-index');

            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`[data-page-index=${pageIndex}]`).addClass('active');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`[data-page-index=${pageIndex}]`).siblings().removeClass('active');

            pageItem.parent().find('.active').removeClass('active');
            pageItem.addClass('active');

            hideActivePageInDomain(domain);
            showPageInDomain(pageIndex, domain);

            return false;
        });
    });

    if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.translation-domains').find('.page').length > MAX_PAGINATION) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-item.hide').removeClass('hide');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination').each((index, pagination)=> {
          let lastItem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(pagination).find('.page-item:last-child');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(pagination).find('.js-next-arrow').insertAfter(lastItem).removeClass('hide');
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__multi_pagination__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(pagination));
      });
    }
});


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jets_jets__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jets_jets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jets_jets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_1_jquery___default()(() => {
    const searchSelector = '.search-translation';
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(searchSelector + ' form').submit(function (event) {
      event.preventDefault();

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#jetsContent form').addClass('hide');

      const keywords = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#jetsSearch').val().toLowerCase();
      const jetsSelector = '#jetsContent > [data-jets*="' + keywords + '"]';

      if (0 === __WEBPACK_IMPORTED_MODULE_1_jquery___default()(jetsSelector).length) {
        var notificationElement = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(searchSelector + '> .alert')[0];
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(notificationElement).removeClass('hide');
        setTimeout(function () {
          __WEBPACK_IMPORTED_MODULE_1_jquery___default()(notificationElement).addClass('hide');
        }, 2000);
      } else {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(jetsSelector).removeClass('hide');
      }

      if(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(jetsSelector).length) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.js-results').show().addClass('card').find('h2').removeClass('hide');
      }

      return false;
    });

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(searchSelector + ' input[type=reset]').click(function (event) {
      event.preventDefault();

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#jetsSearch').val('');
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#jetsContent form').addClass('hide');

      return false;
    });
  });

  if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#jetsSearch').length > 0) {
    return new __WEBPACK_IMPORTED_MODULE_0_jets_jets___default.a({
      searchTag: '#jetsSearch',
      contentTag: '#jetsContent',
      callSearchManually: true,
      manualContentHandling: function (tag) {
        // Search for translation keys and translation values
        return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tag).find('.verbatim')[0].innerText + __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tag).find('textarea')[0].value;
      }
    });
  }
});


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function () {
  function updateVisibilityIcons(domainActions) {
    let visibilityOffIcon = domainActions.find('.visibility-off');
    let visibilityOnIcon = domainActions.find('.visibility-on');
    let showMessagesButton = domainActions.find('.btn-show-messages');
    let hideMessagesButton = domainActions.find('.btn-hide-messages');
    let expandedMessages = visibilityOffIcon.hasClass('hide');
    if (expandedMessages) {
      visibilityOffIcon.removeClass('hide');
      visibilityOnIcon.addClass('hide');
      showMessagesButton.addClass('hide');
      hideMessagesButton.removeClass('hide');
    } else {
      visibilityOnIcon.removeClass('hide');
      visibilityOffIcon.addClass('hide');
      showMessagesButton.removeClass('hide');
      hideMessagesButton.addClass('hide');
    }
  }

  function updateMissingTranslationsWarning(domainActions) {
    let subdomain = domainActions.parent().next('.subdomains');
    let missingTranslations = subdomain.find('[data-missing-translations]');
    let totalMissingTranslations = 0;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(missingTranslations).each(function (index, element) {
      totalMissingTranslations = totalMissingTranslations + parseInt(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).attr('data-missing-translations'), 10);
    });

    if (totalMissingTranslations > 0) {
      let missingTranslationsWarning = domainActions.find('.missing-translations');
      let warningMessage = missingTranslationsWarning .text();
      warningMessage = warningMessage.replace('%d', totalMissingTranslations);
      missingTranslationsWarning.text(warningMessage);
      missingTranslationsWarning.removeClass('hide');
    }

    return totalMissingTranslations;
  }

  let allDomainsMissingTranslations = 0;

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-first-part').each((index, domainToggler) => {
    let domainActions = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainToggler).find('.domain-actions');

    allDomainsMissingTranslations = allDomainsMissingTranslations + updateMissingTranslationsWarning(domainActions);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainToggler).click((event) => {
      let domainTitle;

      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('domain-first-part')) {
        domainTitle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target);
      } else {
        domainTitle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parent();
      }

      domainTitle.find('i').toggleClass('expanded');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainTitle.nextAll().filter('.subdomains')[0]).toggleClass('hide');

      updateVisibilityIcons(domainActions);

      event.stopPropagation();

      return false;
    });
  });

  let totalTranslations = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#jetsContent form').length;
  (function (totalTranslations, totalRemainingTranslations) {
    let totalTranslationsTemplate = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.summary .total-translations').attr('data-template') ;
    let remainingTranslationsTemplate = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.summary .total-remaining-translations').attr('data-template') ;

    if (totalRemainingTranslations > 0) {
      let remainingTranslationsMessage = remainingTranslationsTemplate.replace('%d', totalRemainingTranslations);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.total-remaining-translations').text(remainingTranslationsMessage);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.summary .separator').removeClass('hide');
    }

    if (totalTranslationsTemplate) {
      let totalTranslationsMessages = totalTranslationsTemplate.replace('%d', totalTranslations);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.summary .total-translations').text(totalTranslationsMessages);
    }
  })(totalTranslations, allDomainsMissingTranslations);

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-actions').click((event) => {
    let domainActions = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target);
    if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('domain-actions')) {
      domainActions = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parent();
    }

    let domainFirstPart = domainActions.prev();
    domainFirstPart.click();
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.btn-expand').click(() => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-first-part').each((index, domainToggler) => {
      let domainTitle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainToggler);
      let isDomainExpanded = domainTitle.find('i').hasClass('expanded');
      if (!isDomainExpanded) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainTitle.find('i')).click();
      }
    });
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.btn-reduce').click(() => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-first-part').each((index, domainToggler) => {
      let domainTitle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainToggler);
      let isDomainExpanded = domainTitle.find('i').hasClass('expanded');
      if (isDomainExpanded) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainTitle.find('i')).click();
      }
    });
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-first-part')[0]).click(); // Expand first domain in tree
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-part .delegate-toggle-messages')[0]).click(); // Show messages of first domain
});


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var buttonSuffix = 'translation-messages';
  var hideClass = 'hide';

  function hideCurrentTranslationForms(formsContainer) {
    let currentTranslationForms = formsContainer.find('.translation-forms');
    if (currentTranslationForms.length > 0) {
      let hiddenFormsContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-parent-of="' + currentTranslationForms.attr('id') + '"]');
      currentTranslationForms.find('form').addClass(hideClass);
      hiddenFormsContainer.append(currentTranslationForms);
    }
  }

  function hideCurrentNavigationBar(navigationContainer) {
    let currentNavigationBar = navigationContainer.find('nav');
    if (currentNavigationBar.length > 0) {
      let navIdentifier = currentNavigationBar.attr('data-navigation-of');
      let hiddenNavigationBarContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-navigation-parent-of="' + navIdentifier + '"]');
      currentNavigationBar.addClass(hideClass);
      hiddenNavigationBarContainer.append(currentNavigationBar);
    }
  }

  function highlightDomainFirstPart(showTranslationsFormButton) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-first-part').removeClass('active');
    let domainFirstPart = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(showTranslationsFormButton.parents('.subdomains')[0]).prevAll().filter('.domain-first-part'))[0];
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(domainFirstPart).addClass('active');
  }

  function updateDomainTitle(editTranslationForms) {
    let domainPart = editTranslationForms.parents('.translation-domain').prev();
    let missingTranslationWarning = domainPart.find('.missing-translations-short-message');
    let warningPlaceholder = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#domain .missing-translations');
    let totalPlaceholder = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#domain .total-expressions');
    let separator = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#domain .separator');
    totalPlaceholder.text(editTranslationForms.data('total-translations'));
    if (missingTranslationWarning.length > 0) {
      warningPlaceholder.text(missingTranslationWarning.text());
      separator.removeClass('hide');
    } else {
      warningPlaceholder.text('');
      separator.addClass('hide');
    }
    separator.first().removeClass('hide');

    let domain = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#domain .name');
    let title = editTranslationForms.attr('data-domain');
    domain.text(title);
  }

  function updateMissingTranslationsMessages(title) {
    let missingTranslationsMessage = title.find('.missing-translations-long-message');
    if (missingTranslationsMessage.text().length > 0) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.translation-domains .missing-translations-paragraph').text(missingTranslationsMessage.text());
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.translation-domains .missing-translations-paragraph').text('');
    }
  }

  function updateNavigationBar(translationDomain, editTranslationForms) {
    let navigationContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navbar-container:first');
    let navigation = translationDomain.find('nav');

    navigation.parent().attr('data-navigation-parent-of', editTranslationForms.attr('id'));
    navigation.attr('data-navigation-of', editTranslationForms.attr('id'));

    hideCurrentNavigationBar(navigationContainer);

    navigationContainer.append(navigation);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(navigationContainer.find('nav')).removeClass(hideClass);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.forms-container + .navbar-container').remove();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.forms-container').after(navigationContainer.clone());

  }

  function updateEditTranslationForms(formsContainer, editTranslationForms) {
    hideCurrentTranslationForms(formsContainer);

    formsContainer.append(editTranslationForms);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(formsContainer.find('.translation-forms form')).removeClass(hideClass);
  }

  (() => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.show-' + buttonSuffix).each((buttonIndex, button) => {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(button).click((event) => {
        let showTranslationsFormButton = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target);

        let translationDomain = showTranslationsFormButton.parent();
        let editTranslationForms = translationDomain.find('.translation-forms');
        let formsContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.forms-container');

        if (editTranslationForms.length === 0) {
          return false;
        }

        highlightDomainFirstPart(showTranslationsFormButton);

        updateDomainTitle(editTranslationForms);

        updateNavigationBar(translationDomain, editTranslationForms);
        updateEditTranslationForms(formsContainer, editTranslationForms);

        callback();
      });
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.domain-part .delegate-toggle-messages').each((togglerIndex, toggler) => {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(toggler).click((event) => {
        let title = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target);
        if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('domain-part')) {
          title = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parent();
        }

        updateMissingTranslationsMessages(title);

        let translationDomain = title.next();
        let showMessagesButton = translationDomain.find('.show-' + buttonSuffix);

        showMessagesButton.click();
      });
    });
  })();
});


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


/* harmony default export */ __webpack_exports__["a"] = (function(paginationContainer) {

  const lng = paginationContainer.find('.js-page-link').length;
  const multi = '<li class="page-item js-multi"><span class="page-link">...</span></li>';
  const displayNumber = paginationContainer.data('display-number'); // Number of pages to display after the first
  let current = paginationContainer.find('.page-item.active').data('page-index');

  checkCurrentPage(current);

  paginationContainer.find('.js-page-link').on('click', function(event) {
      event.preventDefault();
      paginationContainer.find('.active').removeClass('active');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).parent().addClass('active');
      current = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).parent().data('page-index');
      checkCurrentPage(current);
  });

  paginationContainer.find('.js-arrow').on('click', function(event) {
      current = paginationContainer.find('.page-item.active').data('page-index');
      event.preventDefault();
      if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).data('direction') === 'prev' && !__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).parent().next().hasClass('active')) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page[data-page-index=${current - 1}]`).removeClass('hide');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page[data-page-index=${current}]`).addClass('hide');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page-item[data-page-index=${current - 1}]`).addClass('active');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page-item[data-page-index=${current}]`).removeClass('active');
          current --;
      }
      else if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).data('direction') === 'next' && !__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).parent().prev().hasClass('active')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page[data-page-index=${current + 1}]`).removeClass('hide');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page[data-page-index=${current}]`).addClass('hide');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page-item[data-page-index=${current + 1}]`).addClass('active');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.page-item[data-page-index=${current}]`).removeClass('active');
        current ++;
      }
      if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).data('direction') === 'prev' && current === 1) {
        return false;
      }
      checkCurrentPage(current);
  });

function checkCurrentPage(current) {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination').each((index, pagination) => {

    var paginationContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(pagination);
    var prevDots = paginationContainer.find('[data-page-index=1]').next('.js-multi');
    var nextDots = paginationContainer.find('[data-page-index='+lng+']').prev('.js-multi');
    var mid = Math.round(displayNumber);

    paginationContainer.find('.js-page-link').each(function(index, item) {
        if(current >= displayNumber + 1 && index === 0 && prevDots.length === 0) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).parent().after(multi);
        }
        if(current >= displayNumber + 1 ) {
          if(index >= current - mid && index <= current + mid) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).show();
            if(lng - current >= mid && index > current && index !== lng - 1) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).hide();
            }
            else if(nextDots.length === 0 && index === lng -1 && lng - current > displayNumber) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).parent().before(multi);
            }
          }
          else if(index !== 0 && index !== lng-1 && (lng-1 - index) > displayNumber) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).hide();
            if(nextDots.length && lng - displayNumber <= current) {
              nextDots.remove();
            }
          }
          else if(current === lng){
            nextDots.remove();
            if(index <= displayNumber && index !==0) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).hide();
            }
            else {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).show();
            }
          }
        }
        else if(current && index > displayNumber && index !== lng-1 && current < displayNumber) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).hide();
        }
        else if(index === lng-1 && current === 1 && nextDots.length === 0) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).parent().before(multi);
        }
        else {
          if(index > displayNumber && index !== lng-1) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).hide();
          }
          else if(index === lng-1 && nextDots.length === 0 && current > 1) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).parent().before(multi);
          }
          else {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).show();
            if(index === 0 && prevDots.length !== 0) {
              prevDots.remove();
            }
          }
        }
      });
    });
  }
});


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 208:
false,

/***/ 209:
false,

/***/ 210:
false

})