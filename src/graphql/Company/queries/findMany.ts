import { queryField } from '@nexus/schema'

export const CompanyFindManyQuery = queryField('findManyCompany', {
  type: 'Company',
  nullable: true,
  list: true,
  args: {
    where: 'CompanyWhereInput',
    orderBy: 'CompanyOrderByInput',
    cursor: 'CompanyWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.company.findMany({
      ...args,
      ...select,
    })
  },
})
