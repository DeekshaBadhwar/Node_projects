employee={
    Users:{
        name1:"Deeksha",
        name2:"Puneet",
        name3:"Aman"
    },
   UserType:{
       exp:"traniee",
       joining:"19july2021"
   },
   UsersPhoto:{
       P1:"value1",
       p2:"value2",
       p3:"value3"
   },
   func: function print()
   {
       console.log("Name of the users ",this.Users);
       console.log("User Type",this.UserType)
       console.log("Users Photos",this.UsersPhoto)
   }
};
employee.func()