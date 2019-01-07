'use strict';

/**
 * Petani.js controller
 *
 * @description: A set of functions called "actions" for managing `Petani`.
 */

module.exports = {

  /**
   * Retrieve petani records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.petani.search(ctx.query);
    } else {
      return strapi.services.petani.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a petani record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.petani.fetch(ctx.params);
  },

  /**
   * Count petani records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.petani.count(ctx.query);
  },

  /**
   * Create a/an petani record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.petani.add(ctx.request.body);
  },

  /**
   * Update a/an petani record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.petani.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an petani record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.petani.remove(ctx.params);
  },

  /**
   * Add relation to a/an petani record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.petani.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an petani record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.petani.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an petani record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.petani.removeRelation(ctx.params, ctx.request.body);
  }
};
