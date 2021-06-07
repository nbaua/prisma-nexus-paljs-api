import { mutationField, arg } from '@nexus/schema'

export const EmployeeUpdateManyMutation = mutationField('updateManyEmployee', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'EmployeeWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'EmployeeUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.employee.updateMany(args)
  },
})
