'use strict';

/**
 * Neraca.js controller
 *
 * @description: A set of functions called "actions" for managing `Neraca`.
 */

module.exports = {

  /**
   * Retrieve neraca records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.neraca.search(ctx.query);
    } else {
      return strapi.services.neraca.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a neraca record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.neraca.fetch(ctx.params);
  },

  /**
   * Count neraca records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.neraca.count(ctx.query);
  },

  /**
   * Create a/an neraca record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.neraca.add(ctx.request.body);
  },

  /**
   * Update a/an neraca record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.neraca.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an neraca record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.neraca.remove(ctx.params);
  },

  /**
   * Add relation to a/an neraca record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.neraca.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an neraca record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.neraca.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an neraca record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.neraca.removeRelation(ctx.params, ctx.request.body);
  }
};
