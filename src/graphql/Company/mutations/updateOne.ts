import { mutationField, arg } from '@nexus/schema'

export const CompanyUpdateOneMutation = mutationField('updateOneCompany', {
  type: 'Company',
  nullable: false,
  args: {
    where: arg({
      type: 'CompanyWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'CompanyUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.company.update({
      where,
      data,
      ...select,
    })
  },
})
