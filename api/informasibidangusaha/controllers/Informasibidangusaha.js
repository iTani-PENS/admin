'use strict';

/**
 * Informasibidangusaha.js controller
 *
 * @description: A set of functions called "actions" for managing `Informasibidangusaha`.
 */

module.exports = {

  /**
   * Retrieve informasibidangusaha records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.informasibidangusaha.search(ctx.query);
    } else {
      return strapi.services.informasibidangusaha.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a informasibidangusaha record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.informasibidangusaha.fetch(ctx.params);
  },

  /**
   * Count informasibidangusaha records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.informasibidangusaha.count(ctx.query);
  },

  /**
   * Create a/an informasibidangusaha record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.informasibidangusaha.add(ctx.request.body);
  },

  /**
   * Update a/an informasibidangusaha record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.informasibidangusaha.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an informasibidangusaha record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.informasibidangusaha.remove(ctx.params);
  },

  /**
   * Add relation to a/an informasibidangusaha record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.informasibidangusaha.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an informasibidangusaha record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.informasibidangusaha.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an informasibidangusaha record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.informasibidangusaha.removeRelation(ctx.params, ctx.request.body);
  }
};
