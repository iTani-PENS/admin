'use strict';

/**
 * Kecamatan.js controller
 *
 * @description: A set of functions called "actions" for managing `Kecamatan`.
 */

module.exports = {

  /**
   * Retrieve kecamatan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kecamatan.search(ctx.query);
    } else {
      return strapi.services.kecamatan.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kecamatan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.kecamatan.fetch(ctx.params);
  },

  /**
   * Count kecamatan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kecamatan.count(ctx.query);
  },

  /**
   * Create a/an kecamatan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kecamatan.add(ctx.request.body);
  },

  /**
   * Update a/an kecamatan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kecamatan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kecamatan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kecamatan.remove(ctx.params);
  },

  /**
   * Add relation to a/an kecamatan record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.kecamatan.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an kecamatan record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.kecamatan.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an kecamatan record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.kecamatan.removeRelation(ctx.params, ctx.request.body);
  }
};
