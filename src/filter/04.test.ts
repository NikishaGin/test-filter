test("old mens 90",()=>{
    const ages = [18, 20, 22, 1, 100, 90, 14]


    const predicate = (age: number) => {
        return age > 90
    }


    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test("courses !> 160",()=>{
    const course = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    const cheapPredicate = (courses: coursesType) => {
        return courses.price < 160
    }

    const chipCourses= course.filter(cheapPredicate)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("REACT")
})

test('tasks true',()=>{
    const tasks = [
        {id:1, title: 'Bread', isDone:false},
        {id:2, title: 'Milk', isDone:true},
        {id:3, title: 'Solt', isDone:false},
        {id:4, title: 'Sugar', isDone:true},
    ]


    const tasksTrue = tasks.filter((filtered)=>filtered.isDone === true);

    expect(tasksTrue.length).toBe(2)
    expect(tasksTrue[0].title).toBe('Milk')
    expect(tasksTrue[1].title).toBe('Sugar')
})


