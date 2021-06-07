import { mutationField, arg } from '@nexus/schema'

export const CompanyUpdateManyMutation = mutationField('updateManyCompany', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CompanyWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'CompanyUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.company.updateMany(args)
  },
})
