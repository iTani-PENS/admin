'use strict';

/**
 * Bumdesprofile.js controller
 *
 * @description: A set of functions called "actions" for managing `Bumdesprofile`.
 */

module.exports = {

  /**
   * Retrieve bumdesprofile records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bumdesprofile.search(ctx.query);
    } else {
      return strapi.services.bumdesprofile.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bumdesprofile record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.bumdesprofile.fetch(ctx.params);
  },

  /**
   * Count bumdesprofile records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bumdesprofile.count(ctx.query);
  },

  /**
   * Create a/an bumdesprofile record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bumdesprofile.add(ctx.request.body);
  },

  /**
   * Update a/an bumdesprofile record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bumdesprofile.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bumdesprofile record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bumdesprofile.remove(ctx.params);
  },

  /**
   * Add relation to a/an bumdesprofile record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.bumdesprofile.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an bumdesprofile record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.bumdesprofile.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an bumdesprofile record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.bumdesprofile.removeRelation(ctx.params, ctx.request.body);
  }
};
