import { queryField } from '@nexus/schema'

export const EmployeeAggregateQuery = queryField('aggregateEmployee', {
  type: 'AggregateEmployee',
  nullable: true,
  resolve(_parent, _args, { prisma, select }) {
    return prisma.employee.aggregate(select) as any
  },
})
