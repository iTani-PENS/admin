'use strict';

/**
 * Kabupaten.js controller
 *
 * @description: A set of functions called "actions" for managing `Kabupaten`.
 */

module.exports = {

  /**
   * Retrieve kabupaten records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kabupaten.search(ctx.query);
    } else {
      return strapi.services.kabupaten.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kabupaten record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.kabupaten.fetch(ctx.params);
  },

  /**
   * Count kabupaten records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kabupaten.count(ctx.query);
  },

  /**
   * Create a/an kabupaten record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kabupaten.add(ctx.request.body);
  },

  /**
   * Update a/an kabupaten record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kabupaten.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kabupaten record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kabupaten.remove(ctx.params);
  },

  /**
   * Add relation to a/an kabupaten record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.kabupaten.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an kabupaten record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.kabupaten.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an kabupaten record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.kabupaten.removeRelation(ctx.params, ctx.request.body);
  }
};
