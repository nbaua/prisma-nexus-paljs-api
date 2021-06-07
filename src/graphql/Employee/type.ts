import { objectType } from '@nexus/schema'

export const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.int('id', { nullable: false })
    t.int('companyId', { nullable: false })
    t.string('email', { nullable: true })
    t.string('employeeName', { nullable: true })
    t.string('gender', { nullable: true })
    t.field('company', {
      nullable: false,
      type: 'Company',
      resolve(parent: any) {
        return parent['company']
      },
    })
  },
})
