import { mutationField, arg } from '@nexus/schema'

export const EmployeeDeleteOneMutation = mutationField('deleteOneEmployee', {
  type: 'Employee',
  nullable: true,
  args: {
    where: arg({
      type: 'EmployeeWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Employee', where })
    return prisma.employee.delete({
      where,
      ...select,
    })
  },
})
