import { mutationField, arg } from '@nexus/schema'

export const EmployeeUpdateOneMutation = mutationField('updateOneEmployee', {
  type: 'Employee',
  nullable: false,
  args: {
    where: arg({
      type: 'EmployeeWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'EmployeeUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.employee.update({
      where,
      data,
      ...select,
    })
  },
})
