const blockDomain = "http://localhost:8000"

const SummaryApi = {
    signUp : {
        url : `${blockDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${blockDomain}/api/signin`,
        method : "post"
    }
}

export default SummaryApi