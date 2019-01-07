'use strict';

/**
 * Kur.js controller
 *
 * @description: A set of functions called "actions" for managing `Kur`.
 */

module.exports = {

  /**
   * Retrieve kur records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kur.search(ctx.query);
    } else {
      return strapi.services.kur.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kur record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.kur.fetch(ctx.params);
  },

  /**
   * Count kur records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kur.count(ctx.query);
  },

  /**
   * Create a/an kur record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kur.add(ctx.request.body);
  },

  /**
   * Update a/an kur record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kur.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kur record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kur.remove(ctx.params);
  },

  /**
   * Add relation to a/an kur record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.kur.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an kur record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.kur.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an kur record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.kur.removeRelation(ctx.params, ctx.request.body);
  }
};
