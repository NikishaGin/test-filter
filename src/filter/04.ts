const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}


const oldAges = [100]


type coursesType = {
    title: string
    price: number
}


const course = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const cheapCourse = (courses: coursesType) => {
    return courses.price < 160
}

const chipCourses = [
    {title: 'CSS', price: 100},
    {title: 'REACT', price: 150},
]