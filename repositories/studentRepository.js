const getAllStudents = async ({
    page,
    size,
    searchString
}) => {
    console.log('Get all students with paging')
}

const insertStudent = async ({
    name, email, language
}) => {
    console.log('insert student')
}

export default {
    getAllStudents,
    insertStudent
}