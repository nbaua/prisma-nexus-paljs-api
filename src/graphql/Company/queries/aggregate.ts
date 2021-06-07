import { queryField } from '@nexus/schema'

export const CompanyAggregateQuery = queryField('aggregateCompany', {
  type: 'AggregateCompany',
  nullable: true,
  resolve(_parent, _args, { prisma, select }) {
    return prisma.company.aggregate(select) as any
  },
})
