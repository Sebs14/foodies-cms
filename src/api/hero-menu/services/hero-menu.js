'use strict';

/**
 * hero-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-menu.hero-menu');
