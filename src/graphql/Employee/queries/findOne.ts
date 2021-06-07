import { queryField, arg } from '@nexus/schema'

export const EmployeeFindOneQuery = queryField('findOneEmployee', {
  type: 'Employee',
  nullable: true,
  args: {
    where: arg({
      type: 'EmployeeWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.employee.findOne({
      where,
      ...select,
    })
  },
})
