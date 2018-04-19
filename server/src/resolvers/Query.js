const { getUserId } = require('../utils')

const Query = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.projects({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)
    const where = {
      isPublished: false,
      owner: {
        id
      }
    }
    return ctx.db.query.projects({ where }, info)
  },

  project(parent, { id }, ctx, info) {
    return ctx.db.query.project({ where: { id } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

  user(parent, {id}, ctx, info) {
    return ctx.db.query.users({where: { id } }, info)
  }
}

module.exports = { Query }
