const complexData = {
    "organization": {
        "name": "Acme Corporation",
        "address": {
            "street": "123 Main St",
            "city": "Big City",
            "country": "USA"
        },
        "departments": [
            {
                "name": "HR",
                "manager": "Alice Johnson",
                "employees": [
                    { "name": "John Smith", "position": "HR Specialist" },
                    { "name": "Emma Brown", "position": "HR Coordinator" }
                ]
            },
            {
                "name": "Engineering",
                "manager": "Bob Anderson",
                "employees": [
                    { "name": "Michael Davis", "position": "Software Engineer" },
                    { "name": "Sarah Lee", "position": "QA Engineer" }
                ],
                "projects": [
                    { "name": "Project X", "status": "In progress" },
                    { "name": "Project Y", "status": "Completed" }
                ]
            }
        ]
    },
    "financials": {
        "revenue": 1000000,
        "expenses": 750000,
        "profit": 250000
    }
};


function printObjectTree(obj, indent = 0) {
    const spaces = ' '.repeat(indent * 4);

    Object.keys(obj).forEach(key => {
        console.log(spaces + key + ':');

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            printObjectTree(obj[key], indent + 1);
        } else if (Array.isArray(obj[key])) {
            obj[key].forEach(item => {
                if (typeof item === 'object' && item !== null) {
                    printObjectTree(item, indent + 1);
                } else {
                    console.log(spaces + '    ' + item);
                }
            });
        } else {
            console.log(spaces + '    ' + obj[key]);
        }
    });
}


printObjectTree(complexData);