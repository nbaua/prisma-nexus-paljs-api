import { queryField } from '@nexus/schema'

export const CompanyFindManyCountQuery = queryField('findManyCompanyCount', {
  type: 'Int',
  args: {
    where: 'CompanyWhereInput',
    orderBy: 'CompanyOrderByInput',
    cursor: 'CompanyWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.company.count(args)
  },
})
