'use strict';

/**
 * Kelurahan.js controller
 *
 * @description: A set of functions called "actions" for managing `Kelurahan`.
 */

module.exports = {

  /**
   * Retrieve kelurahan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kelurahan.search(ctx.query);
    } else {
      return strapi.services.kelurahan.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kelurahan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.kelurahan.fetch(ctx.params);
  },

  /**
   * Count kelurahan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kelurahan.count(ctx.query);
  },

  /**
   * Create a/an kelurahan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kelurahan.add(ctx.request.body);
  },

  /**
   * Update a/an kelurahan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kelurahan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kelurahan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kelurahan.remove(ctx.params);
  },

  /**
   * Add relation to a/an kelurahan record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.kelurahan.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an kelurahan record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.kelurahan.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an kelurahan record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.kelurahan.removeRelation(ctx.params, ctx.request.body);
  }
};
