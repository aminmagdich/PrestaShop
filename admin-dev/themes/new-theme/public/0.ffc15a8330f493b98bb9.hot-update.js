webpackHotUpdate(0,{

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
          generate();
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


/***/ })

})