# Run 'prisma token' and the copypaste
# that into your initial header to get 
# get authorization. This can be done 
# in the HTTP HEADERS tab. 
# 
# The format looks like this:
# {
#   "Authorization": "Bearer THIS-WHERE-YOUR-TOKEN-GOES"
# }

## NOWLET'SMUTATEBRO

# Login
mutation {
  login(email: "test" password: "test" ){
    token
    user{
    id
    name
    email
    }
  }
}

# Signup
mutation {
  signup(name: "Mr. Crawley" email: "ozzy@rocks,com" password:"test") {
    token
  }
}

# initial creation of project post
mutation{
  createDraft(
    title: "Virtual Tour of the Alamo" 
    text: "For people that can't make it into Texas to see the real thing,"
  	description: "Not everyone is able to visit Texas. I mean the Alamo...")
  {
    id
    owner{
      id
      name
    }
  }
}



##QUERIES4DAIZ
{
 project(id: "cjgdbbzqh000p0911gi7nfc0p"){
  title
  text
  description
  }
}
# FEELZGUDMAN
