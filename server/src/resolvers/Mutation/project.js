const { getUserId } = require('../../utils')

const project = {
  async createDraft(parent, { title, description, text }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createProject(
      {
        data: {
          title,
          text,
          description,
          isPublished: false,
          owner: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async publish(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const projectExists = await ctx.db.exists.Project({
      id,
      owner: { id: userId },
    })
    if (!projectExists) {
      throw new Error(`Project not found or you're not the author`)
    }

    return ctx.db.mutation.updateProject(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    )
  },

  async deleteProject(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const projectExists = await ctx.db.exists.Project({
      id,
      owner: { id: userId },
    })
    if (!projectExists) {
      throw new Error(`Project not found or you're not the owner`)
    }

    return ctx.db.mutation.deleteProject({ where: { id } })
  },
}

module.exports = { project }
