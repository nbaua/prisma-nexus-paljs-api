import { mutationField, arg } from '@nexus/schema'

export const CompanyDeleteManyMutation = mutationField('deleteManyCompany', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CompanyWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Company', where })
    return prisma.company.deleteMany({ where })
  },
})
