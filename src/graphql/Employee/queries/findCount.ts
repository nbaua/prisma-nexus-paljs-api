import { queryField } from '@nexus/schema'

export const EmployeeFindManyCountQuery = queryField('findManyEmployeeCount', {
  type: 'Int',
  args: {
    where: 'EmployeeWhereInput',
    orderBy: 'EmployeeOrderByInput',
    cursor: 'EmployeeWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.employee.count(args)
  },
})
