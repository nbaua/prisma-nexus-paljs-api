import { mutationField, arg } from '@nexus/schema'

export const EmployeeDeleteManyMutation = mutationField('deleteManyEmployee', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'EmployeeWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Employee', where })
    return prisma.employee.deleteMany({ where })
  },
})
