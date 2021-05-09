use tasks_hub;
db.dropDatabase();

db.tasks.insertMany([
    {
        "description": "My mongodb task 1",
        "status": true
    },
    {
        "description": "My mongodb task 2",
        "status": false
    },
    {
        "description": "My mongodb task 3",
        "status": true
    },
    {
        "description": "My mongodb task 4",
        "status": false
    },
    {
        "description": "My mongodb task 5",
        "status": false
    },
    {
        "description": "My mongodb task 6",
        "status": false
    },
    {
        "description": "My mongodb task 7",
        "status": false
    },
    {
        "description": "My mongodb task 8",
        "status": false
    },
    {
        "description": "My mongodb task 9",
        "status": false
    },
    {
        "description": "My mongodb task 10",
        "status": false
    }
]);
