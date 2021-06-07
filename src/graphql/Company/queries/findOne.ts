import { queryField, arg } from '@nexus/schema'

export const CompanyFindOneQuery = queryField('findOneCompany', {
  type: 'Company',
  nullable: true,
  args: {
    where: arg({
      type: 'CompanyWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.company.findOne({
      where,
      ...select,
    })
  },
})
