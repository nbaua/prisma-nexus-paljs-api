import { mutationField, arg } from '@nexus/schema'

export const CompanyUpsertOneMutation = mutationField('upsertOneCompany', {
  type: 'Company',
  nullable: false,
  args: {
    where: arg({
      type: 'CompanyWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'CompanyCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'CompanyUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.company.upsert({
      ...args,
      ...select,
    })
  },
})
