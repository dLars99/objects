// Lightning exercises in the third group

// Predefined object
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Lightning exercise 1

console.log("1. NSS Full-time Instructors:")
for (instructor of nashvilleSoftwareSchool.instructors.fullTime) {
    console.log(instructor);
}

console.log("NSS Part-time Instructors:")
for (instructor of nashvilleSoftwareSchool.instructors.partTime) {
    console.log(instructor);
}

// Lightning exercise 2
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);