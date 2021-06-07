import { mutationField, arg } from '@nexus/schema'

export const EmployeeUpsertOneMutation = mutationField('upsertOneEmployee', {
  type: 'Employee',
  nullable: false,
  args: {
    where: arg({
      type: 'EmployeeWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'EmployeeCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'EmployeeUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.employee.upsert({
      ...args,
      ...select,
    })
  },
})
