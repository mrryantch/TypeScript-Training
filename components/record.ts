// Use case 1 of Record

type Persons = Record<string, {name:string, role:string}>

const persons: Persons = {}

persons['1'] = {name:"John",role:'admin'}
persons['2'] = {name:"Jane", role:'owner'}

console.log(persons)

// Use case 2 of Record

type Roles = 'admin' | 'owner';

let peopleWithRoles: Record<Roles,string[]> = {
    'owner': ['Jane','June'],
    'admin': ['John']
}

console.log(peopleWithRoles)

// Use case 3 of Record
type Pages = Record<'home'| 'services'| 'about' | 'contact', {id:string,  title:'string'}>