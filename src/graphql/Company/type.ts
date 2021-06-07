import { objectType } from '@nexus/schema'

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: true })
    t.field('Employee', {
      nullable: false,
      list: [true],
      type: 'Employee',
      args: {
        where: 'EmployeeWhereInput',
        orderBy: 'EmployeeOrderByInput',
        cursor: 'EmployeeWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['Employee']
      },
    })
  },
})
