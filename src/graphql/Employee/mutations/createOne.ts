import { mutationField, arg } from '@nexus/schema'

export const EmployeeCreateOneMutation = mutationField('createOneEmployee', {
  type: 'Employee',
  nullable: false,
  args: {
    data: arg({
      type: 'EmployeeCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.employee.create({
      data,
      ...select,
    })
  },
})
