const usersSchema = {
    uid: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        default: "xyz@abc.com"
    },
    designation: {
        type: String
    },
    role: {
        type: String
    },
    zone: {
        type: String
    },
    wing: {
        type: String
    },
    accessibility: {
        cutting: {
            type: String
        },
        stitching: {
            type: String
        },
        checking: {
            type: String
        }
    },
    workerID: {
        type: String
    },
    image:{
        type: String
    },
    department: {
        type: String
    },
    dateCreated: {
        type: Date
    },
    createdBy: {
        type: String
    },
    dateModified: {
        type: Date
    },
    modifiedBy: {
        type: String
    }

}

module.exports = {usersSchema};