import { mutationField, arg } from '@nexus/schema'

export const CompanyDeleteOneMutation = mutationField('deleteOneCompany', {
  type: 'Company',
  nullable: true,
  args: {
    where: arg({
      type: 'CompanyWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Company', where })
    return prisma.company.delete({
      where,
      ...select,
    })
  },
})
