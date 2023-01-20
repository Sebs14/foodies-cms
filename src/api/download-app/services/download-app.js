'use strict';

/**
 * download-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-app.download-app');
