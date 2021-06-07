import { mutationField, arg } from '@nexus/schema'

export const CompanyCreateOneMutation = mutationField('createOneCompany', {
  type: 'Company',
  nullable: false,
  args: {
    data: arg({
      type: 'CompanyCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.company.create({
      data,
      ...select,
    })
  },
})
