import { queryField } from '@nexus/schema'

export const EmployeeFindManyQuery = queryField('findManyEmployee', {
  type: 'Employee',
  nullable: true,
  list: true,
  args: {
    where: 'EmployeeWhereInput',
    orderBy: 'EmployeeOrderByInput',
    cursor: 'EmployeeWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.employee.findMany({
      ...args,
      ...select,
    })
  },
})
